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
    "5HvsaCfGwamkKj8d13sA2ySLES5YgE8o7o3PJWUAbVtpbj162WB2n4xDPrY5Tt6iQwtsjRNRMCH3c1KWh5qnDNjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JyQTrWwGzoK5wMQaS7wtinxcZUkyXfLMsqP7JSWfkv6mjsxvGcst5xBX25R9doicu3RencXFfEGQBDJwLt3jrMB",
  "key1": "5kmJFAGshsESdSK7vj1WHnNLMf487miKZA49DJuEjH8vKEhDv158NN4ovMP7CnojVcpt3Q7yzSFNvEar7rLx3NDV",
  "key2": "49wH7AB2dMAHM6m4isMHqoQK5kAxMBz3Qe4A84gs94TRj8LuLb82vLTWMn2oiPTdNXPbZ6uUgUCv7GMUJ2ydnTpM",
  "key3": "56m42FjLD8M82VT7tx5oX8wAJMiu92eF459YUqJMgqXWNduV6foEmqMEUeasSZbgbCBBS1ngHaqvD6xRMRqt2Fqf",
  "key4": "5CXbiRp29rCntpnuQi6GDn5o1tyoYtNxCfpk8bjBVnWVPxLDZ1hw1AYtHEUb6ZRXHGztfd26ie4MKfGXWKpUG5Cp",
  "key5": "42doKVLVq42tZSwpiBqLgnQEPdVAt6BucLNYiVLGhJWtXyUeDUHdKroQKV6y7oavvaHMQMHen4AtTXqZo5w12XLk",
  "key6": "YQcdQ5kVeYAmjfDNXEHUKuVChGqft8H1SxQsY5ufbFLLrzjw5vnzVuPFRibzPJwrdaUfEiA3PrXtNWSiwbx51vC",
  "key7": "h7mvd8bX747SzPWGJ8ESycxRvGHZcUMFsoFB8oyPfY7PToQL1HSoziGBbQwn8TcT7mUgCxwsiqueeYcp9eeSJ4J",
  "key8": "31Dzk5rBm6xwhTbU8sVPgCtv6J8BkJYRpxu88cpheWURx8i9TGBEk2mgmvKWHJk9yJWeEWzhwXv8nZAR5mKcB2Pw",
  "key9": "4g21EgZxt46s9w2hGxSwwU9XUvSkfwSxDsYdmrrW1yUKHXE21WBCjk39XFhBxiKdZpBCd4s6wpLHLSpEnVRvEG56",
  "key10": "24Xhwmnh4Z5sg8PaJ4DTAhW164qZmtXX3fPk7u27M79EvZnCNPhPg3Nax5c3ppEL9v1vZY5cnecDZS8VXEZd1ZAD",
  "key11": "626iisBSZsen8yNduErEjVzn8LJ7XDVaSBikn3z4gbiAEyLpzwhWYNvMw2NmfT1mqarHrgMJfME2v9mZt23vLt7J",
  "key12": "5roynbtgfKNnuDhC6MK2tTD3JgqkA8pdwhvRcH6ctp5ivtkepcLUUdP4jQj8hRYJvvZqDoKH1v6EdfmL1gLUZeBr",
  "key13": "32viCpB8F7Vm56XDemC8z8akV9J9LzCUPC4RsPHC1QqN4srXngY3DruEuz5ed8qyA93yqQA5xq1mn2QnbwadFBQS",
  "key14": "3vfLLpXyVBc5UxTwLm1EV5f7MUa3nEfFSUxch2ygbzunMH1tQCmtB7USriWLhTK4W34Kkkwz2xTV2q6cBAm4W9Sx",
  "key15": "5KKB6fftEftBEZzs2zduzpptABuZwYqtyhPiHFQrMszwUJqkuGqGmLAdRPngweYqcPfuTzd3fkpGq5gZjYVMtBwo",
  "key16": "SBdq4tnNP9D347Tpd8aR4ae9Q6xaMZS5TF2jzBQBXB9cGbKdAvFB7jtHDZ4R52jxcEy8tp5gQTK6WE9fxECRWoQ",
  "key17": "248qoDgbRtNcg2D3uPhM29PnyCdnpxpRvFz5aa3xdfkMNdtvFW1SWsr2UZmVkYLY2buDpMeuTe7WVjTnM2frXKVk",
  "key18": "59FMePfWS6jc4ySFkoUvtbcigNDhsJYvhbPqJHaz2zuukVn3bjbSWXMmzH3TiNdNaWZHmr2nY8LVkLYghpD9pRH5",
  "key19": "2ZGB6KEyq1BdLUsECDK5ZxJneo2QbmRh2TxmTCXBHJjYmZtWcjLQARkCRTgzwmMLBBudz5VAdwc3Xy9Bhm7EAH75",
  "key20": "5ZLynhADFJGxBAYacaZQQgCKNQui7Li8kZPaV4PPC6EdoKEwb2nntd6ykTqR9GA7gkoqL4q2TzvjbMaLegsy6zH8",
  "key21": "LW7XxiNSf8k1UjE9yGkV5rVxJ6aQq3u3r6ugSVfc7VpSoCgeGeuRYKb9see4msKDAhQaRuTxvpoAeo5WMK3QH8G",
  "key22": "5sXaD9cAAVmLeudn2scYtiTnaqbVT7eAGRtaBEXjMprbGjDKUgFNQy5acB9qQqootn5efL663d4zoXae4r8gvdiL",
  "key23": "3K4znMLYi1BiqcwaZq52mY3beShPHEcpiyJYKEwb14HE5qCEbBn46WZyVc5ZyqZdNJctpXJfxrxanvKYLLZPiAHs",
  "key24": "ba8TTyvc6adHmL8uZvitRErYngbgN6w3SRCU7feg3Nok4zKDh7rEkZ2GFVUvyoVUCsoNAoqrHvpeK27TvhCwoo5",
  "key25": "3CQgcGnEwDU8xkyees1ba5zW64jBLofKyzU1sGMU93NsSkerdoZoTasfw7uxzGfsJk5Z5b4ipE2Y9dZx9Web9rmt",
  "key26": "53suU9A8DrB3rPT9KHEW3oE7n3fMUSKpucJ12hVHYv6HxyHxyzjdwxHu77n6kLzUsFPm2EZhnQuYuiL54H8vKJix"
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
