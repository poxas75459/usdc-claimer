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
    "3gcobCbNZkpsDpfBE1tpRwUDUcMwR19aP9xcFor3myAz9mSnbTG7czJz5SRS5WjNNLqW8DQYKjXrcmv2L1earFde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N3X7eTe9VSmdNntqVKqNujYnGk2tk4WkkqaHnJcfHBZdPfpjfLVR6NQ5BDRUu8VWeh29pwxXz1qJJPAWkGATHTG",
  "key1": "5MqQSTFcEyAKh1pTWF9kGo96jrwXuupJNRUwrzRNdzdZ5dhDDHox7keei4QdsN4NtFckJU7wvLqS32a3WfaoUktK",
  "key2": "3e9qz6kbLWwhSXJihkqRBYJUwFrdmXvZddWXvecD3GAkfVj8DuoZp8xvvb36whG3D7VFDzcLZpgfGWn6kFHe3paN",
  "key3": "4ThyY6959mxaHXsn6zcxiZiB8YgXpv39iq2YPBQ1GfV378fCMf2NpBnPJvncGyPeUr9Xhk2Y3jJhaJCjPMWevjUZ",
  "key4": "5x5oGUgFpC34czfyMKYcufWouDmBw2gfdW2gPfpNnqYbFHhE6fWLjtT3Tjbt8satBXzCQRUqLrzoH9it7rTNuR66",
  "key5": "4Yr3TVb2eL8E9fc4RMMWDzt6xHPwqgJ4sPUYtHNh1TFTad6qF8xaPV4eZut3zVfewQEC8yWmbpLHUymnMqMJg7EJ",
  "key6": "v4qJZB6MeGZWLzYYBs9YCK1rci2xN5K1iGhgQeDqZsPBhKchHL8XqRzghQewYqSde9DKr43gBE9bdNjQnwR1xt5",
  "key7": "5x9Eb6XrbDqeFuFunB5gR8gq7UYNgcxFJF78cbhxy83UVYUJpt4w7HMEMCG1WRNwNEYWC86YoLWgC26RipJF8zfs",
  "key8": "52BW58nJmbVxoHDBUG7Tqa4GDGCbhKBkJLMNSoMTKAJ18xLEcQb6W78Lmc3TEARrnfU3ynnmRkvrie1Rg5QsDphg",
  "key9": "3hgBEhf8hp8mKXFmmrmxDmyFrK7y2LuTiNfWHMagbDVyhLTQj1r5kiEbpXvMh7quWuspqBVxSq1ppZJEcjVEXz6u",
  "key10": "3fsF7j1Tb4ojc6CHwNxSoLg11eXbERniUXjzY56KELVNiyf9SujxSW1HeSR4aGCh3KwiZaUhH1sMARGpG1GN3cod",
  "key11": "3AJKm5U5hG4htHxE2ifJdUJ5K89YxBkcR22Z9UPpKSaBD6uefGY1WJBCHvxyRs7dTmyEsTxBKoapuqDEcZxng6TX",
  "key12": "4iLqSpYe92iuoR58qU5AdJTcsbsBNtP4QzMTuxkYPZEEMXWRPT8H6UUupZZvZwd2awR3Sr67nntHcQBSZ8PUtyUf",
  "key13": "3QoGmB4LGXSgES9q1gAggow8PdYRsBBYUGZuav1t58pkBt3LywSfhRU5sqXw3qUnje2yHVt9spXN2k7cMbtvkGpa",
  "key14": "GUwJXkdRQeHgLogkdEHupAsdsStSJy3VzjkZwWtD8dSreHMaGGQmqNyqCCCfJQdyD1TPedC9zD9MY5GrH6fkBBT",
  "key15": "4Lsj9a3Gama8MoYcqVPp2M5vUuGRGS9jBn3gaMB55TN5Qzg3wuUR4KWni7XvCsusMnr2c35bFTYHUbCaWWRrcqta",
  "key16": "3uwuWwMtywoZXwfa54wZEj1ufrquwZagJWumVc6rQTmWkGxbHsNXqRshrZ6ceWwh7fTSJkpMUWqkEtJ7wYu4MPMb",
  "key17": "3gBockY6ZhAYh29K3tmyWZ94ojnNHoCgsDN2Eja1Z3nhQvEm6z6eW7moRoWNHteRJ6cDP6wYRSv3PXEC9ZFAoMGC",
  "key18": "RZmTP9Ah351GF5dtLAvyf91V5TczSBLeQvCbP5FLivdJ2BURYToUGGqN5JdvnbPc4kBUbwPjiJV6MrTWbGqe1qr",
  "key19": "62PAy2ruaDMJfr7KwLGPgxGq2zqWyojp88wSH8X9ip8HsQSxBPmjRZdewCeMGmbe447pckv7LzTkJjNCW3rZt7Ap",
  "key20": "2uV1UqTYjkxNswHv3HYTGHVSB2SWN82seZvbbA7JbHgtmYW6Ft4GBcukoUCkLHYG4Kse7XangoSN5EHDEPaSvkCq",
  "key21": "3fx6rUmDb4UAX9DV6e4EsEii4TjMBZCSsfBz914suomMsgRqdXQ48qH8CuVQCd5sRCs6mQn9daGrhpbQy8tjvbaQ",
  "key22": "5aosFneQZTSvtAaGUoQGYyLMGAhtHJ88YMqefEKngJTufcFFLbnC7a8gTFZdLBHFeXLG3PfYa7JwottN7eMMvrgu",
  "key23": "e6ERgxpSmSyjhroZtWxb74MhvxP9tfPutJAxLybM4EdD8RzgVqLZF8FMUjpSoBvJ8Ze3agt1CfvnfJQHyHhddsb",
  "key24": "3nKxR6phm7vyfNdi5jX1qb3V8frrgaBEYYyaXmtGss1fqhYxULYtjFqZzDM71dh4cqzMJuC8imoNQTB7Y74ZYxR1",
  "key25": "24x1o8S97tez8v8bvqK3cw6qi2TEUnj2TCR5HUipjuqwYJNv68WpYQH19ZZWK2SF4KKGyBGL9nvKGcBCv7PfwHbq",
  "key26": "2EvWojybTBLLhDgqSCrsmpU1Y3NGjWskp63E3LCpQ1sMpQaRTMREcV2jApWDVSEEPNuWn8RZuZ9kmCrDsnyujXGE",
  "key27": "5TdvZ3z9mKfsVLM1eF6xZ6YGadf3TFmpnphKijhyuYMs4D1fPEjkqrm2uZCMseU64SLdy9VZoW56eNkcKxDiFHrX"
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
