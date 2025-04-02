/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5qmsP36NEAdTkAWMV9BHBnbeQCoJqEXbEBVG3YN52wuUgf1pGjYc91GHS9aBhWUsGe1T4DUw2Mf3ynf3GrhN9CPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aaLBHfnXNGQBzGAemYeXSzJujp5B5tWfkQhpPazfeH9ynm2scA2mgJwsn4pwZtbVoDCw33Up4PzHD9x1KvxRdzk",
  "key1": "5WUhfsgbq9EBXKi1rWMBmBCyiwnZ71pS44DpWQCPVxDXc2zKqzpG4typ23SXwvprZ64oUP3SP4hiDvdq7cuisUCj",
  "key2": "5aXZc2WEYYjc3YnnbVRwGcg92RSmYAYFYafFcPEKgzuLVaVNoZhqJH1XKkXWAmNFzyFgD5RgBHX5smtEcBZaCL5Y",
  "key3": "i9oyq7THpxJco3oEDPvkYQVjV11dUDKcNW1jJxJhfp6PZL1HJkCVSrTC4Z9XUwXwq1yUWsHDwMRJCw7yNJH3W84",
  "key4": "3Ei4HyYYhbP6CxWBY8G6WwUjE5Fqcb8CLDvVojVucHzis2xmpEJewbasDbHE7K8pthLNr5jxk9F3hEd95BBoeEqG",
  "key5": "3vgtb9HkHYJuLhSF4R7UQmrVKvMRHwY6S8d3xzcFUqfQVwBhwVaJNaSdzAA6tA7wA8xxprjxvUW1vGRas2szuzM4",
  "key6": "5Em3Fis9Xc73jACnCdx7WA8gKvUwZqLL3UAk8iV8e5LZwSoumPHMQj6vyjcTRNYejNJveuSRUwQWQzh7AxJYFoxN",
  "key7": "XBBjgPFwaiM6envAszyTFbkBxcJHAG2eLRPGaVMibq5RnqH4rQmEM8SAAYw435tTuByuaeunjhxJBGo2h62bT9x",
  "key8": "KjRLTxtx9n5ESupvTFBWxxJJmJ2WsEyPpE8KwZjUrJQQDbrAzfJKQ12ZVBFCdodYZDFjTCHYNmJa1WpnMKMXudh",
  "key9": "3jvSnnX4F95w5DR8Xa8jZoBgtSArfjTPzCEeqmQi3zaVy4PF3goapTERseDL2acX5xEd6fTnoeB5gU93a3YWkugx",
  "key10": "3PV9ct1gArea7SrGeLUgpQLH34oqYEayR4PGf8v6z75Zd38WFGPzkuWguXJta7M5JPxA94iXf6mEXF7ZpcH8Zfpw",
  "key11": "56LgJbQsYJLEzoXbxp5tmmPd9GRwRu3nikvAKpr3SQ1fPxD32tMF15RRWfVBwAjRKnNvagkx2vRQic4JzVEVEaFH",
  "key12": "LKb84X7wq8Xv4SDG3nKeYw27AMaSrqEwomoNwmwXELnxRFoj9P8yntJSS9LxrWYPK8NchgyPrSzrT9ouMAFcbwm",
  "key13": "4FRsnhg19sAQTRFcGSyY3jFFwm8quPGKKCMnhCmJvq7XxKfrP8XB6PbRubJHQhWJxS8bgJBhVhBx55ULtoyGvohA",
  "key14": "2ZVwbnmpzjNAdcK25LoZH1cxHuaJQERQnJh9n5f7NpXcecNaKRcugRpJ8mrDNx2Q2Bcp6wUh3QWV937LoK941FSq",
  "key15": "5HEKhhBTG2qMM5WfA7zArib7zJXZ6jHLvQe6W3MT8ur6WhWbY5YZpeUKCPV8bq9SgcR1XDvXDhA2Wtfq1iSynYBS",
  "key16": "2sWBivtV1LD8ExdCUbX2wSKygDT7yTkFXvHkj62YdKMJWNaPWM96RKRdyc8aQ9931YZwko7bNXDkRqtagPxyqFtJ",
  "key17": "4yWXLQ3yjgH1kH4K4tA5U8wu1RRR7Tw19K2mXaVaFc68auJktytgQPDicjfghCzMXwuKiNv35Mj9hXatBaqiiGX1",
  "key18": "29Q7FmS4BXiENXsGKt9bbAySCcfxr9u6Srvz9aWvtN3NHpHy7eoVDdhk8pobXHRQKVZJfRVRJPgAGKxf27bARgFp",
  "key19": "5oTKZGPDsjAm6NBBNyhQADPSkQ7znfPYTMTkGLHeJW8FQ1PrJmusx5YVZkzW7za37JTUqbpwmBHPrnWaD1xEdbMf",
  "key20": "5D8jSFkkYNxy2cRknSFzcp32JPV6cK7cR95jKWhBjaS5XcFTHEomsLgtF65nPnBx2RQVGAMLzRCRUBYaNNtzTRW7",
  "key21": "66enkZuLF5zdDyTpv6vdGsjJvigkx4GqHQNzKF2fWNnYD723YTmT9JymedG4iZswZcFuuw4yHKnq13JYaxzPtwX2",
  "key22": "fCAcXmAq1ycvVyPGmvCRLUQPcvoCoeiHMy5rYxMpeS7H64DUGLMHnMWZff3JQRPEQHoU4eLoC1MhQ9gS5vHaGuN",
  "key23": "5FQDTVVVvvbGbEiZPVJyRJvD8rbHr1ewEdsX91U8H5o7sJpn5cLzsGDsAEnqcvXvzGRzXohfoiGZVdDSReR2RcUA",
  "key24": "5dZV5MW3cEFRYbGWazxxxFK6DEm52CroB3PyKUNoPPGDTMh4Gs5TdAzH1kG7AfzfysH19efUGYcqo7DmY3jKzP6A"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
