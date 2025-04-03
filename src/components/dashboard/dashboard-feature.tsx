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
    "59AAZbRccnosL8kHRMJ6fX1qLT6PdVpBZyskfCeQ2XE9UhL4UBTG4ikoe9y2mr3A64H9suwZt9FRfD43MNnbfqg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PPFMnw79nASo4ahGq87aDwErFrQSfWWQRRYwhKjaaoWY7qrTs7n738HpCEVerBwXqkpyqkrHu2yckcvxENtZ6XY",
  "key1": "5zoDT5taLUrsuLmXmNo23GLndwvu5uejP4Nw72ah3TKmtY873uZCRZiXzEcKR7wj6A7yniugnkxDFw9xNQKPqyCS",
  "key2": "3Sw2zZnrkEoysqMJa82RsKC6bQLhAZXYGE3MonVr5LKfHcUU7fANqoLRuLBPabDoCqNAXRwbGtFE16iS8jmkpTCi",
  "key3": "2EZNs7mFPntyF9zRphmBgDn9aW71deTQ9V1MrwKDSB3GffXwLqxjUx98E6NKUFRvXCzYpCpsnj6rdjGRMkacfSC7",
  "key4": "4d264hWhSd9WTXgXv19in7VC2JeJohxsWLT9JCWwRp4YVqMji6yxoT8sF8oYZu7f3PUrcMJvTZeo46a8PpQpF5Fg",
  "key5": "5crTJamMduBBSfwxFJjWbt69gbfNi5GLNEcTLPS2aoZYmDRPmWueJZ7te2Lpt4b1jrUS3m5ZLkzpmZa2x4Rp2tBQ",
  "key6": "4wxuDZdXSkmhgPXqGiJz9Kpd8PZbhoGzx6q22vTkdq2n8c4wfBGGEAhrqqoEDijGwNUUNRRiBd92sJCafsBTC6Xk",
  "key7": "22qe3mgR2gcPaERKsHv24XBqTNjjvD6j59vRLLeSjjibwrwGjJ6BYuQ8jg2DdKkXTfEdvR6aiRHDjjJwdimY6nop",
  "key8": "45QvafMgXeV8kwVs7FYv1XejqTpM1mYqnp9Mr7GfWpiLK5ihkhUJbpB2JnU37VUZLsVAEQAqYmgWWhmRLXdHkvVv",
  "key9": "UTKePCJ7SA3KUuA22k1BsNiZ2D5VgCSoKFLHwKgmUts6o8p7MYHsaS3xY2C3h6dNJvRaxGxstHMHfsvb96izgF7",
  "key10": "ENNACEPS2YYevoT7f6mNJAvPw9LUHy4Qv9LTpyifeX3vCAnDUxayLd6xZnXm8Qoh5Mn9jjDQastvKnBvkhJpJBo",
  "key11": "53PcgzR4W9J4ijbU5upVma2AZwJkDRZtxX1pv2xCoJCweTHjyi9P4PdRpDyfyC8KRcrMcPDUKDznK3H87hz9xdHk",
  "key12": "3btxR2DQQHfShX6S99agEWxAHoXvtjAL2JA867sZMEZ6kq4dAZATqAbaNd8Lh82iQ135FhtnqfuvHZNBhBhqX3mQ",
  "key13": "4ujzmWp59L7vXwhKm1EX7Q9mp8az12YdGL8BtcaAujZgcwzviTkkVSqU2iNu1iSmsQdDdDtgQv1XqWbcWnB33yBU",
  "key14": "hwS8kKeEpqRwk1o1Y5qpdM5h5B5rDzzQF21784fKxypff8mn3eV6mZqVLgQtY78Euh9h147cVKM8U8UAu3NUsTM",
  "key15": "4Ljbgy1LD6uJUgwVVV8Guu6qaCMWpKpfJHM18MrDxwSdsJoC9jWYHCCwF6rRoKV5xSvUCKSoBiWPqVezB8pzndSU",
  "key16": "2VTPgtcnYbaa5LaT5WGHHTyj8Q5SdaGfmJf5xz7nyFYNLh7kEtKkRBw5jQGsaZz5pCHgcxcgUY8Y9B17aVr6LXJR",
  "key17": "3qg6nSwQ9ZGtLiVUNnNKkYF3ipcK9P8gcjecXbqsGWHGHcyytrDHLVWszcYVgHATRpWa3Xxmd5ZJ2XTkbPFTYWea",
  "key18": "4yJTm6WyYgC497LULPxW8w5jnUU4vnKFbdZ8ugvBuCMe21Qkcq3Vq1vRTkwtkCQZPgG9PtqbW7t4166US6o7GXNd",
  "key19": "KR1ecHBS8fPm265pu1dJfeKFr3KYto2x2LXo3Xgd5nfAjypjgTASAFixLryuUU1fwm12H947FWRcmAVRujYLHyT",
  "key20": "45pVSgFjouQbhecsj37dz4NyhiYmeHYVaq2axxuijnNgnp63LQ9Fdf2kxZbgA2LQjdAfH7thh9KnaoEHi1fQkonz",
  "key21": "45QUJzsDzUxcTuFT2xJ3VeEJZuCmLTiGiLiBdAVBqWV5Gepg5Ssh2uRn5yMk46JsR9AfWjXgdM8X2WMqmx2zhaKD",
  "key22": "5Noo85ujwvvfTn89iKdFETzNfL8YiYiH7eUiMKjUuTkfHkshRPndza8bPR4ekUuu2xDzGqAxtJgvw9aLQJnc6jSS",
  "key23": "58V1ZqzPvu9iBufUovYr73vfvRweEjbiUGLkifMVecWARNMEJFQ1ko4kJHkDC7txLbRgmQcBGc84W351JQVuRCyU",
  "key24": "2DMAGUTaTUKFpD38WJBnCrj5poXCrTzYBSaidKugM5WT8AzCU3t1nHUyTHXfXCttCoLtkhtBznv7j4LDhwJTCNF3",
  "key25": "3Ef9iMeD6tEpH1gDyEMsw69SL1SJfvQ7Gvio2J4Ze3L1QrL5yDxBcdS1ZAiFC47jsfdBKVvMNPAyJGqpAERZsLsn",
  "key26": "xHQDqnhCoZroa7EntvU92FV2y41LKSYQvJ6rHwWzNB2Hfp81Se8vun7AGxA7dZheEtH3wbZTofkDZahffB7tUPV",
  "key27": "5f9qe3eH4GqMF9Ht79Ea3bQ7fwijFjirnxhNQawGMs2chck5zRDoL6jSwoQewazYifcwv63rRhnqrUShk2yzCapg",
  "key28": "sMjVqvFALUqgwtVDdYaM6gq8pE3AXb7aUoeamoHUmpsBeVbkXEQZ5LW3Gc9t1HUXvPyUS1LGA1sHGYCRwQ2TUDd",
  "key29": "4vkugDYfRwfScT7ukMXbMNy6v3JREw33AbnTR4jqaZ7a9Ws55ZkV3rK1sariNxXWAWfd269E2s8hsuRqTDhRU3tJ",
  "key30": "46WMjFbgd4FWBC9LFUdDjrATnyLNyDZ1tnMewdo7FMNGcRC2232yUE8cBmVx7Z6N1uwPrjCFZuy6eidHDgHmDC6e",
  "key31": "4HaUNZHt1U5gsH8NK8fSWXZ8GaW26xWjJrugbrSWFFdAiicMQeUXVaF3gHi7bqDzAuUx3RtgL1tuoT7KzqD3oPXi",
  "key32": "zn91jD1hDXSKJ7ND13qWtySXHVDCYwukLBG6twn42dwAT8c64G7XrrPPfdgo9U9d8biAn7zSfQseVEioiY4PDcq",
  "key33": "5F9pV39bYcLiEZVEQGGRXaWscynSoq3NfSFQyRJF76UjWXrybfh1swcyDpFTbnTAr4n6zmECg3x7dgyAvAXXJLHi",
  "key34": "55PrdemnTuVuo5pFJs3oFu5PEdpBpA6KAGEu36WPCBPu3gZk4yg1RwjhE1V7kyySx9oMXPYTCuu3fjg9imqNCb8A",
  "key35": "TNUjkUK8UugrQd2Ndhmqn5DdkwbAUZHk5myhhKcUp6QqvsGLubKQCCcrfaa17C62sodXNtZGcctazDrrnENhocb",
  "key36": "33twjs5BSZ8xMCuqvATt5LZRfZWSmmDxU1jKsmCb5EK8cTMargfV1hmpyJfx3bpANYtoPd4KDCJVxJYbfmjnQXx2",
  "key37": "5zAMnNuP23r6avD7gCM97ha1Toa8BtBeuQJFKUVLwfwYYfcoubB7mxQQuhsFihKvippAfLjXw6Nva4RThnY4SjxE"
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
