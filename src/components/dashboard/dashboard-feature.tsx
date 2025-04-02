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
    "5AtEk99W5scizWxPsjQoi8pKbisbTs2BSRMaDk5jDfCqMf6gpXv5kuQ52DxrehDmuTmksAVJ2KRMs5TmqLHn6Yo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "97etDMbZR16Y9PzAkEhHiwaKaBWBKk1WBTetkDuzGc9isnCgNHHzn6wNPegufu3sE57CTeyeypw8aRytZgP4ifS",
  "key1": "5o2dv7Yi6DcLU6g6WeuTUR2eU7rg96ySdKj5LeeqHNtugn9PbqXN7ugM6zkhW5mYhUK1vx7JBi78ZAX8LgVT6dXK",
  "key2": "5gimKuZZqnV6F97kWDhUux5Ys6x5DzaUaniFBVgrZZ1t2sTBGWh2rL6ewDqV2CwbiHovkJhvL8T3Dz9D9McHSJ1E",
  "key3": "2GvXwydaJZ1BkTtrfxegCWEc7AEuJKXsqZToM8W9X5VhLvYUABuPdfHtbY4oWQpBTtvArK6oRkTxd7ZMhXpNEQPE",
  "key4": "5GFdjULdofAYA4F1392DG8K1ZWbg7upvg6vb4XWGAzMzmiStSFMxoTBpkz1HwWbpM3YkMyiLox1rcQX8N1XxQaBJ",
  "key5": "5KY1ySRLMsFAdjRmqsM7vcJzkV4qSkTxroiLbEvH2aWmEJpJX7itD5AZKDBidHggzyoK8SR6emcmkimQyUYFd9Xj",
  "key6": "4Gibkpx3AE6bAnDH9CzeMScEpAXWNRTBUfEtFwfjSFrZduX3rbKbK8BFSuPHyJ5Nvn3ftypu6f6k7V6KcttrvoaT",
  "key7": "2HD7fEnnW41W6S7553NJYh6LHj7KXfJhoDTg3TPhYpBxgoRsDWjDybriNYwD9fCxXsJVR7dTio5wR6biGvJDPHYT",
  "key8": "4gMNduUeoWKUgyPFaEDXGjg1RAsAZqz6zeFaY9FzKD7uJkX1WCxJ8n7VLMj9C33JwppbtCERujv35wDhF5Wb7JNJ",
  "key9": "3HEoHAWAsQDzsty6fCxNskBm9ySn6hEDm7BX1bjF1hSZzzkgk3yyeQzE2twuA38AgZK1mY22r4DbvAo1wdghqtbM",
  "key10": "3wMKXep3JR6TKB1RnaKDGMjubuFMNTruCu12uWF1mJ6BwpBe63fiFEsY7uPYTadXHp2zEvvNgoP4FUdnrc9XS8s9",
  "key11": "2UpqFg2qHDeDxsaYwk4mHNdMFpcACZyftGPBR1UpoaEFew2cmirstk3VSQRSYBwNpawki3D4ZV5QqvTWKUjuSf7j",
  "key12": "4i6XaAx7eKQSKXE1uotKWXaKc4YUnMQWm8tUTtYAcz9WtjinV1dxRQg2z58rYUfqHU8AUBDEAZZGf45LgJP6se8d",
  "key13": "4HyngH3hKycW4e7VE6mYg8TtJcG4LKPvmxV7qHcZ1ejBYpG6doS9awbBFV2E1aFhhcKeQDsPHuN2YiPFES6dMB7w",
  "key14": "4V5Q2d3ZSrxr6Amn1jiXGEjqmeQ6PxyKWn2q2bL8ZjKaVeGWLuVjQY947MbosYBoWUQwWqqTZLihCizk2EbRepjE",
  "key15": "3KCJwuBCPi4B8YyM4xfEcU6f3qrp27f9tnjLtYJsowhUgYhS6uXMmMNE6BSgGYydGMFEzxsEL5E8AV8Y1Cm9Z4G1",
  "key16": "3CWHYaSryAqVjpd3MGFaCKGpjhZYPLeGtzgrbFwf9NrbjcsiVVZe8d5o7wJN16DPgZ6Gp9LasZ5mDy4V946mJdSC",
  "key17": "3VSvE7BS2tBVt882cpC3koeHQQ4ajC8nf1wPC8LUSW5Xrf1L2v6a1Cdq4woXRCFxhaynSxqHRKjRhFKsvdGUkYF4",
  "key18": "3FVAvmzBzmL3175MqZYp5h1A82pbBXG7m8Ky2G3YUaYdhcFMrtru6buQyreaiqreZQ2hFEgPTwhRwLWPX3SQftsp",
  "key19": "PtT2MSUDSuW1rMT9w3nzygmLCJgdXd7KJiUsK2dsme6SorHKuFkAdt8PbiW8dLE2Pr9GxKfaVFN8iBXxn6zN5pX",
  "key20": "45TvcSNi8zAcvicLryrhyMi18VL3CFEuDFAeyokXx9HtYuuwPcyR2wvyUGqK9TMcoiQofdDwHkdowBKwPpo3mvrC",
  "key21": "64Mj8PJxixuNUxi473wne9UgtuYX94soR85J6VKQTkWXo6sFKvYeoeeRB9HEmX6fMSd3gkZDTBUoNB9dVA2Dd6qE",
  "key22": "4KrU8FkHdxnnGfaPsE61UGA45UBJEuAxiBZSyz695nya46cfLuPCs4Wn9w5bADnbRmBossNHjc9ndPuNWg5YHQmy",
  "key23": "5CAQVv5bQsXjWDGfnKDCcQqNNX6TkCXNgC6WR4YzgDEL38usn8Lk1GZ6Ceph88MJByVWN1UgCKAwUycKTjrGdmCw",
  "key24": "2HaiNAD676kDfsUdoo1XbBZneXoW64c8w86crzthguGZypUPRAXkvwu3cymyYne3nEJewPdhfauBGcbH29wfVjz4",
  "key25": "4xG9aqM9HZTRvTiUrrSha5KtwdfsUwj6aRnurgqeXjnAR4e9bJo9woCHgPRdY4TpGrR5p1SoDqqSeABsfikPAhB2",
  "key26": "41kvJLLBJg4NNNGMLakCNiik4yot1RGkJvRd9mCcF8TQiEGZc9syLjndXJbEeXqRSJV16ig72JYeJ4J6EdffdxK6",
  "key27": "5bzEwKzUnRNP5gvqsJVyCrrMEsq4EAcMRwT1JYwm3FajxzDxQTfQAZ2pZCKpd2F9QbdaP42uN2xjjFaDSJC5B1xo",
  "key28": "4mY2euzummapwSTNmqebS13JTPd4eEGejAFVgjxZMWYuWL2mEpofhG7p1d9ZeC8LZL1oL1ucRu8tMCmQUTsegBck",
  "key29": "2baTr6zba5J8rzUwUEw7Mia8WXSyKDhyQJwfeCBDwY4cMBgZqtLGJZkvyoqLGPXDQjGi4zwB4npAkXMk28RYPoFb",
  "key30": "2abc5adMiyGw6piLnpc1SsgPxL8QEV6t7S2rshWr98sdMLKYpPprGpr5d2eGLJqyvvpYnFriK9mFjD51NdDc6G8F",
  "key31": "5WNoAXb4vvGE7iN5BRV96xpYnizC6nDcFa6LdbwHnyaGoion9b2U2z1ToL4fr7bhkACuRWb3Bn4hnyTtqMZjw9Yv",
  "key32": "5ic5tm9nhQrJMm4E4hvfa4D3EVwKEhDxPQnBJcT6L8dYKM46dRGAgT47ZT6MeW2FjH95vkoUUTdzFXsEe5jKhXBs",
  "key33": "5cMEQZ2L4quPW7i5g9sMYFA8DNaewVoi86iFSoRZYKwtC3NMN8AXmhQEmUXJYwGixZh5eMWppW2u1gh7agvq7opZ",
  "key34": "iFp4aLYqfe2ZYjqsy58YczqfSd5AqkYiEGbhut9JxK9nSj3xtHuJSQ5bAFWvvumerK2evgDeYN25QeoYpzwEQLW"
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
