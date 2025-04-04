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
    "3D6yXwT6tW3CSFDEYi8pzQEgRAqfhKedFG42YLQWAnDpRmwT3ESCwSPH2WgmGiE4UXx79cqbvizSFhKPaXTMb7TS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KjSWfJPjL87gtxzuLMNjF1RyFebS1fypw4g7z3MtHqi5w43suy7PLZDiEakHgaGvZYKutNaDh8bLieP72xXapGh",
  "key1": "ASe1T4kn9Gub7NoNdsJ9uNVUrgyRBH6LtHUeCcaFZSJ8szG4YL31ELe6nQpyPpPLx6SBufqxgfTC68SyMSaGk8s",
  "key2": "2NJ8ErLD9nkX7dPbx3L8DnjhaXQz6Xv6EYwmE63eY3GKyfPMcyiAGdF2MDGBXZx2YxZ1yUARYwcwXzRQ1qn6kJrd",
  "key3": "5pKNcsyBrGJ7SqeSL11cn5ZzVsKrMhkaN23qbpqKXVeAvhiUtXiA8ptsH1H28bJonH15uMLBY4EADx8KeAetN2Aq",
  "key4": "3u8FPvzob92apNEHTtsRNaodTEVW5iRfALZ5wRyRPBd4DZtvsXdcEhFj8FQsuq4wS1HmuswJiGcjGALzbEfyf8jc",
  "key5": "ZeJV9W5XpUwib1bmbPSYtafUXijpmLwwK1qtdenAtRvRRJYrn7H6YnaSo2p5S4QqxdLVvYskbHUzxcM6p4PYLEp",
  "key6": "5zj7JKhCPdV3Q6No5xJuhWA1q61xEjHDtV45n5BtRgpwveovKu6my48Pz1wt4YuQcrqQxyppWnAE9i8mHrhAKyk9",
  "key7": "P2EZ7bQu41EpGTvNwKTF6YFHAWYTxeYrnpBQbGGDtRS7PA8grRd2bPocuTA5bUzHyfErM5kfb5ju9a3jsNeztL7",
  "key8": "2EzMuc875QKHnTnBAwTqZtWiZ96ejTE1RRCiavz62Cd1YF23tykvYRWhzvSrXJeJW4iR9yUHLH64zUJJxYVcjiQN",
  "key9": "fTJhQ1VEbbVdcjBMiVEzcysNAN1y1NXb3n128qWFzXPdwMrJmo5Rdqo6TD84VurCTpKnWtZj3joqtNq1EHxbHvf",
  "key10": "3SnD8rBR3z9sCpNVKADQWNEZDawNy7HgMJswM8PzbkHxjetbCqwvkCeHRzNstaamsiwq85t8Gt893JoWmaTQ61h1",
  "key11": "3PQJnqUMentLqvhdUFX9mGYuAWjSdwNgXpAnsr9G1msKtgXXQJtcd5ssXaAAKr1g1eEJuMk6H7LADDYeSCS3CWo2",
  "key12": "5Y5L2MUK75WK4kMhSd9PuhdKpYjaN426iUhQqemZVdD4J199YRr5mk6kR5nKPQYpJjzpuP6V9h5KNq2JyZrLNxEf",
  "key13": "61bbrpu6rW9tvWwgvVQdrd3Z9vRTuE5y37dCxQdcfxKpNoKBzxJuAYVCZkXRjjEWe1J9Q7aTnt94me4mMQ2vYTEw",
  "key14": "59oFdth5ToSahXbVkZKVcYBuuZAxPtMRaR3RFeywvkBSEE78iyzqRxGExVGXmhNfvaReixAHk8ZKBms24Y9Yt6w5",
  "key15": "3kvc4qUoyQUCfSpbkQuz8Wi8Z7umbBp1DKK9Bs8KDt5abQ3piwg5c8i5HA57hPWPwWKgJuoZc9ArYnwqMUptr3Y9",
  "key16": "5GXt68948Dfmg4AQaxmVR1L4vYRbzjhcQhcKZQrPydkA6ytPcmawMT3SdZuV46Qj35ZsjEfxj2rhkGTPhyqLAyqn",
  "key17": "67SAMVMhGVtvfYKCSPTjtYeU3tFxLoqYgJLNbmXALGfdxuP9jJx3hnKVxFHiuLbHAjN3jdguQTonpeyeKQztKfjF",
  "key18": "4F7vsSacnKNZsGx6h2hEjkYr2Hm11wMgGikMTChgq6UExwXJKZhi3PQiix4Xsomi884Uf2m21z7vH8UsyeNAy6He",
  "key19": "2uCc7eB77iKNUpTMx7mpFZD7mWo2e5nzmJU76GN1aB2qfEzyz9y46Gi2pMy5Zu9eNR5pRp3ETMe4JciLaPboiybc",
  "key20": "56cBYaeTCY6LZXtvNNeyLK1jP8uBeDFYk8apqnqiMQegoARXSLeYXppa6bqwGRVY7ymSkhK1aHiCxuH63uksMeEL",
  "key21": "4nm3Ld1iR9bs1XGQnwJenXyXP5xrZnHtDBA1yTXqsU5YoPoiwmK5jW3UKSc6xuhZqi2byFR7ykswnNRcTbUroGPY",
  "key22": "3ZLjL6zTB5BZLTe6wd4Rr3a55WwyW1WucJBThS8hNrSDtFBD3ZsZ5eF4gWbUJrfbXqmPt91Gnujwxat92C7qqFBz",
  "key23": "5kopkpb4gwBnWSwf5D45ss4zJTt6zz2W2zEh5zggsABhH7zBc98uHaf6WrYZrYN8Yq447MB9QV1M9mmkQ39bSqey",
  "key24": "kf2FMdTSqp6QGpyXq1DyvUMP6YdT8icAwTDYodohFZ9KJiC7deSAB3tV6K8egyVFv1mqJDtcgT1bzxa33TfBPnd",
  "key25": "2yiJsm3DuhAYKqtKUzGdWTgDE16iqeKPjWeCHXAvpgjCvH1HEadG5pkXaReZCmAbZArvbXTepC9uEC8uM4mqVFo8",
  "key26": "2yNoZKWdKMfjvMmjtF43Fz32hxz6phSJvHQVfga98J8BxJKe4R2St6e5rJ45vxRdyVDfgXT8rUDm9DujuRuM7ac4",
  "key27": "5P3GRxRzPSB8HtJyTM9umBr8bbqy77q3Gr9P81Jj27SSUP6U2sBvQPZyB7wi5jSji8HvpWrEY2ZA87KSCFEu58Xk",
  "key28": "fwetsJg72s6LJpiTxfAR1AyQjoSs2zJX8ApLxK3tBquLasUzcFbCHjvDHuVogV3rWCkb4VXbjsNRA9RaiYcfDPR",
  "key29": "3jGvjXNy5rHLD4jpjSFX3KsusJiKaZdXBYfTBnzA2t5w4Wr2giKKm5N8ikcK5jRudjki6wLGNUKZCZeLeGHaRD61",
  "key30": "3hTsypakQz4uwHCB2x6wcWmqZt6pLTpsTGTkxwPLkNQG43UvJY87JAkrJqaNBdEEqqoT74mvR97pD12sPirfrzdS",
  "key31": "52kQbnE6ykaBfVRiGj4uqqofgGLfZG9uT2D21D61E7oJFkwEAWdv52DUEy7rgtRPgxvmKyTRxRrnPkwQX6qWVxKy",
  "key32": "imjy8eMJhUuFhV5AtThLCjFHJGFnAdk7kk4um28qBbin2Fuj62jPwUS4s9wn1HrVGRLU9m5xMgfdv2BmZpzFpYB",
  "key33": "XnjkhtpZMMThvhtATihRXipbMMX1USiUnhQkM9S8HyaDEchX4NZyU3Z1UgNTqPn6zTCNZQii4dbbmQ1rKrT7Qxb",
  "key34": "2zJZjFMQndwC9VDQJKdt6dvndQ66C7qf5jEF6hZ9AeJbcBWBaQeLifcM3NnvsQH1PZakTg9PBrTuXcyD1zhneeRf",
  "key35": "94w83cva1cA7HkERqabvstvPSm2Q7uCDWxTww4T3tUUnjEagGKeRydBJJ2jkWRgssDdfvFVoSaoACadLivDN78v",
  "key36": "2MbAJ52vCQMcSZ7KFym3ggnBWzzZ7ApA1hNYo3PLKyeBUMkUg3ppbWdKWQcjFVXnvwa8ZSfEm4Q6rt2TiE7gFYuo",
  "key37": "4ZDkXyvNyYTny2JWH7AQFFqNaAp7KQ5dEJWRQaR2A9M3QNNnAC1F9GFeCec6xNQuLNBkrgnw1kog7qLvguDqLUky",
  "key38": "4bm98vsmcnBGxq4fNushQRnMFpQZt81gEUva7zcdxxErhcD3WNdmhjtjDBB6Rt1c2aYTmRYqJMaSLT33vtrRhspf",
  "key39": "64qLJafFsPTZEVFvB4cdagwtWZfua1SaisEDQLiEkjS5M6PbnhH5UNXAjenrHuxtaTJWUEjTKi6JMxdPw4T8hpds",
  "key40": "5WAuiC846ivLraCd4CHj7tJ6BJESpYUy6DBTVuT18Qv5gD7sveH4ivrt9jVfBt1BFLRNwpscWDh3LxbuGvUd6A3u",
  "key41": "2YyCxqHL5eiFv81ooZC63pB9XEUNb6G29DgedLb2sLgKnMToisDM8UfqK1VYNNv8eAfU5YCZgxta4Cp3buvP2ZJW",
  "key42": "2tHYehfm2GqFQvAT5HPAmbvbKcbEjqJZFVcuj4id6vGv2UvQ3LqAh1nReLtXwYqCvMMU1YBowcui1kq7mEyK6hDV",
  "key43": "2DrPZ6K1nTn88o4uUz9QPfT8wqn7La5Q4vDzo8WEYbns9vhriYP5Vy6yYQjsFmtK8T9GW9duyDyMfGqZRPd3YDF3",
  "key44": "4axs9NhBKHKhdCT5z2GVN3wvs4vZrB3rjQzfy3TQo6A6SgTttShHYHQSGHVc6p5AN8HSrW6BwKQFYUqrFNDGjzKD",
  "key45": "MU6GiAu8zK886cS7XJgVH6G3ycP4H4hVRMe89Skw175qmDbHb1YUjFcAjRqMo6icEK5nEv7oYDg182dBv3zi2AL",
  "key46": "3wbC8s3XkRN2jJYuKCn3UctpGgVGGwkNHBQWeRVZX4bBroC5GrHy32mYjmQhXXy9jVg5PDbWZFHnyTdbL17bfWsp",
  "key47": "4KWbjYVv1yb9oubmef1bU6ZXkVvdJysC4Kdv1M9Qu5hbeZfntvhpxAcjY4piAAs6c1ATWLDaAPEa83MZzNJGvaVm",
  "key48": "5ow3ooWa548jkQjTd6E6wZHojHkowgh7yxp1bgVhF8sbbduem1XCkaNMXSdGBDVwmxxNLmijmwfuQPoNmw8oS1Xt",
  "key49": "v1UXtA4ekBfcWcubiYjUNgqiKG7qXkDmRtMCigQAe3P42XwgQdLPFKzqbSv5boAjwpjuGdwrb7dx1Zr4xdNxzf8"
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
