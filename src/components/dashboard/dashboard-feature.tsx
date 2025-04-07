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
    "3jkebAdHZsC8GkeSY8KjRH9bKRAEFSYYA1j48GJsTvJ43Q6VoX9Ax4hBuxjQhzSGXaBKKGN8KdYRxwZgH1wsWVCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bgM94x3D7zpa4viviFHEto2msGikkrypGWJkmAWKiih74sXo5HJBGYoSBjhFyeWwXYiNK6oKnidJ3oTxfepWLHZ",
  "key1": "388NufQxvcVy2mUkUoikxvMrodHub7SGMpzJxdpFg8siMEZ82U5YYTTMEJwKrCPzQ7VNvwqBnTPtTiUagrGwW1K1",
  "key2": "pvLFST9c3qbzUynWATaptmjbnXLgX2y5keYKcYVzz9Su8z5d8MaAi4MyL6ikRyYuvm6ryAirMjkhJ7X8zawdxmp",
  "key3": "2LPhZqXSEj8R2M4XJyukJgaMVwCRb9ZkJiEtBx3UQjveDbsAoUdTkiM6K7xupUw33R9AwJzBrJKA8ighpZ5p7Hbr",
  "key4": "4DfpPtmemPBVRJ5a4LZ4CMMwm82MYKEbweqL9w5aZ9GoQsRhn2qaSQaAUqafkNLjCZSRjrncb9TxP8P8hrb7vib8",
  "key5": "2bGotfoLqRJZjE23jeskZxqx14NG2km5fkRnhXKfyyzeUyUx7pFSBubraTs9FEXpa1mV7yDk9bMc4Rn1a4n9R73c",
  "key6": "5FzcAtP3TJuKjKBu86o9wGqZ5A1Ska31dvRtgj8xvx1TfQA3fpGC3Cj4h45NMNUvMJCtdp8jfNoknR6XMtadhfpj",
  "key7": "3yt6H9NGyTuKkL1JEsFhXMc3pW171246CiLTeGbo5yNuMqLcWAnnMVLXTpbTKuF4YtVy8AyZXeMD4tTPhJqXbdbT",
  "key8": "PfjEiqkKWzcveQqdmetVbkkTx5dpf3gRwHk69rQfvZekYwDVy2D5FEFASc1mpjWi3QkJyoE25S4CQQWk1dH8DR7",
  "key9": "2qMSZU2FiB1R3UDZfya28nGz3A77YM529APSBXeqvRVKXhMUQWfGMCunByaW3dFpT4CfRATHJY3KcTzgYwRFZr51",
  "key10": "3pP7tVod137seSCtiVx7ecd1TZgee4hQAmZaUoW6SAUbzddbNawATdMzpjYcaTdEWd9xHx6Do7YjUV9qu8BVf5hk",
  "key11": "2Mgj8PFsevrqABLL6u9yPssbAim7K7V3jzxAWDPSW6AzRJytGGXSF49g9191o8EayzpxdeGMUiKymrmh4R5GnK9U",
  "key12": "3xJMDqoXfvAfqhQGE4oBYhrv2rr8vGB2xCdXLJQZk2JESbXQkxLJJJ58H5g4i3azuWkbabNbwSkMNiDd8zZpZeM4",
  "key13": "JsuSKtLnpRtCMUDw1Hf1Rexhk1r7RorfkNUh7YDeSiGcw5b1jmScYDzTUnrDoHFqDm23y2JAmhEoRKYKcEutAX4",
  "key14": "vv1KCYLLp17PUJ6tgf39FNfWv7brLnSk1pKvYfi58JnsXjyWhy3EmoLpN239pE9icnrWae8kRQFFGh51Eggy5t5",
  "key15": "4qDzQXAm77WAMkYQ8pjMHzr33kEy4atceQiNQLyuoL1HPMet2embh1efHhtxnpiFoFxiWV9zpb5w45JZDeUb4dcg",
  "key16": "67i5849sg2yR5mJZZ8mgduhCr2KGX3uNDsgf11uQfty6rV2tZsvx9fSjK455VptJkB6qMCiqVj7pzHUsi4Kq9Mv3",
  "key17": "3ri7fpefoxU4qRfpj65NgpaiXxTmqjDKw18Ehn7tSGQkos6RNwrknTMQrKQc6D1DdgzQmTUcUcdXz8sMTM5tC7bK",
  "key18": "5yGHxvdx2JAyzqHKpR7cLjUNA3n9PQo4MRw4RhjeDKpfDKhxZPDWYU8pJm7BLsWCjLtnm85Ffx19co4W1WfbpAJ8",
  "key19": "4H8ioBGdRbWFeDWYYtdsLmf8FgG2GYvKN9LPkhdHweTwHDJpvm6Y3s1MF6h515vQ44bFvAt9JNwp8qLDgJwbut6g",
  "key20": "3nQcnJf3NsWLqaWS9hr978TtDru15WaRiKGS9XswZCJKnRB9LKFMdRTw6trSrLsthbTEjnXkZRKXqYetTCSzbpPs",
  "key21": "M8VddP4FqdPn928tVyWo2peAScdmpaeU3azHDyKekeyf1o2k7Czke4xmPzSo5dvvXYxdy4T7bH1Z7FsJBsYBwAm",
  "key22": "5Dy5SRc5Z6quzgvhJ7z3JBrj3nw1q8dNdUES3g8wzuH4eetoczhSMJ8AMB67Mif6b3sPf7yd7AoRY8B9T8QD8ZL8",
  "key23": "9JeXVv7HF3Nr1LQhmMJvVcbF8rYS76pXq4KFRVJ2qLFVWCwH1pXBnHzZs8M1ExR6XFgfuAPAhVHxNqPwJSM8dyj",
  "key24": "3zd3Coq6FZEXHzC68YSKxSFPiZJWgigkjTSL1nuiWRoiMMi3Q8xN7wzYSK99ADhvjNDhNSvd7vuxomsY3fbYB4ju",
  "key25": "3RnHmxRHkb7Hbk45k34u74wkDmhGWRXstQPwjX6FnSjwyrYd1izovqmRtRwAq8uVAimFGHF6XeEY3yjsPq5N1q8R"
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
