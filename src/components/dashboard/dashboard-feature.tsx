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
    "6PKJ821pimvhNUAxMd38AGWQtJ7LGbDErzRayEsnJNtxeomT48PY44SkvBLY95RmrmvDufxuJzBYC1aH2Tr99Ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qrCWATbCJY4oxPFpRLDym38DQcji91mEYucyPCeTWCFRTVzeMrRu9YZdjDL3DaySDMp4XjA3oMYux625iwW882E",
  "key1": "32jDuaqefKxDzwGF66azBvwF14mB9nBqiGqNvLnHJThBBGdoWVfJ8cNEsae5ADZg5onBo8SsRyz3q68BsKHmS1vb",
  "key2": "55j2svCe3tUA2fV6YQqSGiWjEhyorgku1fwQHPCmXf75JMje8DDkEt5WZbezQfWTfp84cRCBtkKn2tE1T8Ya3S1q",
  "key3": "2m1wtExCbGkwMC4k4UqtxtYc3uheLzPyVdyA5ZZgJ2jFHK9AUFTdQFaXUkrib5iivLgApVUUCXeHz8xPdX65ikh1",
  "key4": "3riEh6wTach5LShG4CDVZcHpyrwgm7bMu9JcQyGywW5cpVyzJvA2NoKkVAtLBwfNhWn3DVhbgJ58TQiPoStq8gzV",
  "key5": "RQsQA9d4XA4a2taoB7t3XT9Q1ofTP4a4qN7AxPG9MqKshd7JwAEyr8CQBFJAEwFPptSokR1Wy8m7wq2oLJU6uqy",
  "key6": "ZPvth8di58pizsGYNyXBTMzYk8VgccyTeHRieYkquTtoXPVjBybL2M1kgLLrJ9PL5Np7dxQmVjHgVGMhmqXcJba",
  "key7": "55F8Sa5dLY6EUyXsPq3ZqyphJWJPp1AHqkZKYUt3qZDzrAcXdJAwLYxX7NuJG7WaZ5AawvsmQpzr6BXhs7K7o68z",
  "key8": "2aLgpsETTc1QCEDzj32ADJ2EJR7MhgUZ7MqpTHWtGtirSQ5n2eMv9hyLZbJLX3W2WoxZfGpTMnuTHK3EbJkYMpXe",
  "key9": "25RiY3KcivvfDZt6UYyCZQRuRfBDdCD9Gmf9FV1Pw1dpBsaK2bfRAE9RsqLb3aBD5eTJpxRmdTeuBJKF9Di1cRP1",
  "key10": "2RKDiKeC5wb91rTYEwdpcRXawXNHaLK4JGfzFyYhMxjqHMAdtfa4WkJpo3RC9Lo9EFgH3FHjgiD8MyvkmRSpGQon",
  "key11": "31CoerRVpEa1wF9g41vijExt9VfcREEBGhpbX8qovEhacAvwk3tknR1PtouTfwQPLULazygyUcTqPBfc79HmgYP7",
  "key12": "XUUSe1SyKo6oMPk2kiBDNggMJKpSmd2B1A5p2NpQF59sQwMnQ83h4dREKSabmjPfdKKUaSjFHoiZuV8MKTefsP1",
  "key13": "48tpTcZo1VEVoBxSn8QTwqzcRaxk3AQ33sNQx8BdQP9jRo72Y4iwCfz4zZoUuWazJhwLv4kKgg64iKdcerh86zTk",
  "key14": "4UXGfs4tzX5ksqrmFsGqFqfJiqn8DQMswcsB3e8AJSt4LT2Y95K6abgPtLmbyy4hqMMfWFRBFFZnUDSbm3WYNmzv",
  "key15": "63ticWzyiXGLDJFAdAcEzo3RTExxgDz7XzKrRThUmvMFNmwEXbfPYCUFzN96gbjpSCYk532sN97o3kyQpJH5vroW",
  "key16": "kTWsM8jn6FK2QGAWizNfHxPr58pqAyVbgng3wF9Y2DFoSUCtZF51o52mKoH12mjFgamu5BxV9SLMR5NVtutSjhe",
  "key17": "4FTXyaxasNCXhjaVuP4BWpEJoyevYmNTefQxtT3VGg8hBNaCZKBvLaiUQJ6Kd3sSKUVofhm6W3qW8q1PDCVtRUiz",
  "key18": "2Zy9f4vWHEtvwWYPcqfNhM96hPh276Z6TpAmK8ruWm2jpmK1ALfmJtWYefyPYYBZRkoC2UcJUA5BLo7a7QVdCc5m",
  "key19": "5n5nvrFBd2Y2B4WPU2hga8j7ddDpAGXq54x3k3ipTutJ4m6KjhHerXJdr6oZxnwgFRopY9fPhcCjW3hgeymN1BAF",
  "key20": "cxBbE7AU2vAGuvgu2rM8WXVgHob2GWPcbPy27yfZmnzM5vcRbSYXb18pKFHad3DPhLDz93mQtdMyR6xztSjeyyn",
  "key21": "5VCdC1Xp1wc9jr649iCyKPgDXQE2Cy58SQ12cTe6QNEEJB5iui6wwFHxkSyBK9qp2bD8uuqUTD523PcM1sxKaNWM",
  "key22": "2tHK637LsYVco27oE983ahbqpTXnxciEeQnpAsvfeAqGY3bTzfLB8a6wedgS1iVmNFiSMHftXuFkRVT6yYdqaM5K",
  "key23": "GuU5HsoPbgRTp1yVuR6djjV5PgNZYCcu2dakUMZQZbXbkXswaPNhyawAszD33VZXhEsu3cQvdPfHXWMsMVkGGoE",
  "key24": "z3KhZxaLdCmxzQWWPCDYsCTApCbkhgT7jfH9qg2N2QkxVrg3pETpWMKGbMBvZBxEgiQGBsKGRL5vnn7Pj1nepRJ",
  "key25": "5SQVNnxpTAQSo8DBt8nnAvzm6DHtdrAzhnrJot3DVDBWNQtHsDuzufmMyXBKpuskf2mFxgtFtDUwrddP2F7PYnJE",
  "key26": "51FenAojCnePPj8VNtunv4sWWbA4G5Ru6f9nsVz8eRobR4BNqtDUQ8SbwZiHFBzYM9vTfSzg9KkhV3STPBM4WjZy",
  "key27": "3RCHTpHULknWRYXvBZHM9vYLBqHo2SjrQDnTFe659WCa2WM27wevkGGgbRs4Nm4vR2BNuXxikSiqCPt5iadH3hZ6",
  "key28": "51VD2uFPoBkWewXP9Miq16JiBrYHvfXQN9YcC3WqMbw4nXJReuodzwzqeUcGzsEuxijrXT23M7aGdaWA2Wx83JPG",
  "key29": "5SnjpYQzBLscWNB6fwHjXvjZ3isnAAjAWPRurWiqrGUVpGY3FMiYSjTmaqMb1TCA4cGYrSYWggjWRWZXAbd5XBvG",
  "key30": "4Ld8a9U3NxNUZ8GQDdZLCCv3Wu965qev6r1em7FKaFUzNivSbJ21UrZzSZa1qyzWNydKLxrAVXsdHSdQpUmcCJgg",
  "key31": "i9gL2CoV3XGqRwC4xwjktoQ4uuApWxH19K6ZuyiHRbuS7nR9UHLVyqrh3xHiehMyKG14Lp7DJPVQxunRLzGvQEX",
  "key32": "fPcRtWcLHMSJEnkqaC29VfkPySNFLrpHywqCA2eNrvDeyCaMNSxGKrCxBE6teTFep5QEmeUVU5XzX8CSEKCJhnS",
  "key33": "N3iGvoFbJGjWCkjvAv4sn779NYi2wp7y2FsWANoiBEvzEakSfMm2pz9eUT9MMEd1NKm8QGYRVr843YPXKRCHi2J",
  "key34": "2JcnCPTXaYejo26wbKRBoB3SAKDpwkKGTicWS1CjgpWnx3qfqv6rNcoNbHTdZfQ58kQGdcS2sDYyMppFqA3xV8VS",
  "key35": "2XJDvLZ6qAx5UWRJD7uUQytJJW7vdFf4SzPWFBKECXzqoNz7Zh7sN2DPJhF1vykkxnuePVSqJAE4b7tycfZTmuoQ"
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
