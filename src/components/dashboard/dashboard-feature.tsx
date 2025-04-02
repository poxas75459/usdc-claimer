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
    "4oKkMxqf2sWFbv7XRzfouqcHaFdR1DGFgJ8KCZYbykAaPWAdCQCUbGQNEMwpjH6BVNen5jwYUzCvkRJrduzgp6pD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZQavZ8FVVRdHMv4yLSU5b2QTLxtG3Atx8VtdP3ie1s4Fqijw5XyUgdSwPf3dHTbS1kHkVfJAK7nB2t8E9YufDw1",
  "key1": "qWgxinjvtDHqE3uWNAZBhf5iSPnGKujUjEB48PixSkz58He1s2ryM8ABDrAH5j7Ae3BaKESK6N9b9RwHXvKihk7",
  "key2": "5A8xNpFxoeCLtu5v4zAWfNNkv5DjiJR6TS3w9z4HTYEqdi7cA2LtGVngbP2msB3j1wQAuN4SgBgLyuYs9vn2Hvn1",
  "key3": "2ceSwmZ6PhR88zHHGwkh1rExmq5aUixNotFfDkhFDRkcwXR4ugG2qreVeScz1UENZENJPxvDTqJxJtG2ErV2s7c1",
  "key4": "2mMAeKuQqYnoCb3cJkeMNGTXr4uKToYZgVNEKP2NkXgeLbdLs6hspTTA6SLkx7MR8zrr1jX9QdMu3EnG8Ch7FC8h",
  "key5": "31vBFFjTFvPNaakenDSHLrxZ6P8NkZrrTp4BZgiFNWgU59YhTRYtD7HgQiTkVr9mjiCR3EPH2g79DtzZNRV82caA",
  "key6": "5nsvqFokC4TAUpVQTWce9YdToCjJA4PXm3NhKtrbkR628SwFZ3pscTE76naWevwZqGRFGZ5A6PnaeC3na25D8set",
  "key7": "5vSNR72rBDLYhQu8o4WaYzYLq3pini7YmsL2igvYSuXNB6KeDAU8hpN9kdQhTJYSWwTbDUTeMEAj1g9pYh3JZjDH",
  "key8": "59y7pS5v24oAKMW1cQNhRKtWEk3i6RR7zqybYZdshWtv9WTkPBXQMC84KzC1GZqmS1FTFwnCS3R1Btf2QLMv94e6",
  "key9": "3kGGMatNWYXY65pvddGQkxfPEBnUpJyHifSD88ycnTcs4E8m1ZqZfjcP3LxVFhvqgNYHKDfDUFJuEQWf9CJZM2pj",
  "key10": "5CTGQKYEVUzx1sVf6WkX8Bvsn6vwVRSJ1md49VbP8BHF58tdKYYtEKkxdSdYnYn5A95NvDAxR8x7htB5Vwf69R29",
  "key11": "5XsKXEPX2qv3duh994c9fQvBsW3h2FV7KrXgFEu3iPwkVY579QaccxnxL736hu8GAZA3HHPtD1cnADH3nKGJBuBz",
  "key12": "uS38FQfUDDqpkEwpcz32q4Qx9eAK5L8W8BLBdTsQCztmFNTTyGFQtmYyDjDat4KRNaX1PHeemARfeaAdnGL4ggc",
  "key13": "2VuEge6a1jQKSe38GrQA7rd2qkXvsSzNxwJRpBgZzo1aKYMKi6aJhe7JrgxFv2FxiPpXY596ahS4EJaAvMEJ8tBk",
  "key14": "5rZMtSKaMN6jmVKXEitTv9w6Gao6LyYaRrqjawq3PVfsaxH4EEu91jJHkGeTsz7zTjbj5LTMsXnVpuSuqvJ9kXyc",
  "key15": "65AWs1QB8HokcVdZ8CpTazacABcVwezij8LSUHEas474TG5VLz5SmUuinAyTu5xDHszTdGwLSkodoxKSGJkMHA99",
  "key16": "2898uFFU6qnH4SpCPhTuHL4ZcPReNGFdXCNaCkZwCEW7fuRcXj3iKRY3Wkjr2zA2gcqKWsskBYYhRQUV5ZMZfj62",
  "key17": "rwA2zk9Y31E6HhRK2SDZBEUVXNHsjHdcA5V7rZjB9PPzjazcSVhBw2X7Xvmtr5gBZCVsNELUGhU6nWDjmv1EVkC",
  "key18": "3cFYx1U39GrX4pJHrKpNy6f7L8TN1PcenC4ukoR9zaWkM7uZPixJXG2nLNfMeaYBWu8pE6knGDLJg1oAGgeYzqye",
  "key19": "5n7JJwL6J7apDtS82ovy3K72N2ZfrHQUYECZxLgM6xVWoH9iRCMKD7uc8iFszwEfBKdWNbB8kAK4cYRcJWw5r5Tn",
  "key20": "5VprNGesr8xhaevEYMJpgjbnxTLyPRH1GcmrsRhX6GwmBbFgFYmR8NMY5i2Dzt1rH5RDULKSMyM9wzTp5Z8J2rqb",
  "key21": "4byFGFfPxk6GFqWkqA5oczjZZgT19Qsz9nBQYL8YA1F3kGVY4MzQVShEfsaCGZtVEqWYhCk58rmfDrx9gY76vPnv",
  "key22": "2QcHEFFAjgnFW4GEcduQx1zjRU1zBVNnSGKRGZkmitNYcZmraPPPfunCQQcgmv3urvVGYyEtNfzoy9PW4MeLAVej",
  "key23": "21QCQhL1ZczyFeZ3hMFT8tBc6GL8TCkr416g1h8iEKy5tpetWqZoKeTewHuuFyYZCQLayjuuB9C5DrL7wc8YQc4W",
  "key24": "2B2qwu81rBKezfRhy9xvD9EKxu5fcbgAmA7oQDf1Md4Ec44Uk5kqZZkXf6fiyHcMfnD6gYvbAEo12xJ9aQrL32Fk",
  "key25": "4hSLvoH65SNpz3icUn5cJhTCu1JHVkxtTGQ46S3jXHVFECHv5JSjh1pdCrsPMPvZAhfqiP8GCvXn417nwmU3txpt",
  "key26": "4cLsDnmkmQxowxPkMB4WfHHxxBWNLuUuQvKzG3LiTBrVLJ6FCzG9qAvMTQfygwcrMt9aN22E1N8kK3U8AuieCSTY",
  "key27": "45Bz5E5p4mQhHWbuybnebsrioFVism4YE1b6QHtpRLrjrnWwnquEHqUHHmxC9p9V7bgey8EFmauzgxU75CrTUAHo",
  "key28": "4voa3x8LKscfzgcnQ6Cu1kSJeaUEc9Fj5k5Gy1EQaYrkSKP5oCA3RmqodMe4FKyoNpWiprnxS4Nm1sgJ1x3mTV3L",
  "key29": "35WqxbFkTK5seyF4BxExLK1C3zQ4cJscU2SLJbdTJggzUW5wmwNa57PdRsQurdnu6ykYxqZNXFok7iLpXnSvybqQ",
  "key30": "2E1peCF9B13Ug5JxsgAwCHs7XCTjYHD9jZ8rmiPJCF3HUbBoUq6Bnmwyc3irRVjwjP5zippvq2SxuZeCyK3NBGs1",
  "key31": "2U7FWsWbuwzJWtmS2uGpN5FPVS2L95fpimiZiqiehj555sg6wYNZAJxv2JTwaRMFBuRTA1KsMLDGaNt2HeaDmjT5",
  "key32": "2PJzL9csB2k88dpv93HK341JJoRSBLBXA8V18PtazqpJTFukcBLPGrNp927nFwnc9Xa1Rndrvhpg8BzHfXyVLCeb",
  "key33": "3SePUUnR6jk72YSetVRX3q8HidLghrsBfMbDZ4XUKZ9fiZyUT2KDtn7ttB28knYaizka8E5jscN9dUPNyTJ6iSx7",
  "key34": "29h7H2HJBhzrzCkZsAsdarkQhP3vqnA81pfSqZxWYVXGH5GjXNoLgzeeJgZx8CL8DJQQdnf1sUf78dhyMwCkTw9y",
  "key35": "4Mao6y9RB7pn617k2qTevUPmwwygTrRj84FyVXmg3rkZpzmrmewi1hxuGb5L89oxmCrbczvhoSTTug7cY1BtmrSp",
  "key36": "5En48FCMtbfWdKLSFeXcVKLxnLeiLjMUXTpFTv9Tbi3DYBK6eX1VYcXzC5tPNJpRnZphQeDCcCDyQQmzULKvrHDV",
  "key37": "36Rac12emCB9yqADvoakXvq1CeYY4ugFoKxopW6CL3ZbrYt7iTvsqheS1MJiVPgxya85TbsFm6LoP2Di3JvTDNJw",
  "key38": "5r2zegw4wdrGdozoANwStV1sKzJqu66Gfqr7ErHQRfM6oWKQBoQhMedtcS39vQ1ktJn4EZVA2349zUL1VNtqUUeP",
  "key39": "4vTwQ7wzSCSWJMLFjRoqoshju9VLdzaFFfjHtT6zGSe4Z2pgagvZmVzrbcp3jKC8YjQDg3ELuppcqysREXK7ibqM",
  "key40": "ToPPiZ8h4sCGanBcv5vzbnzHXPCdSUzLmdphd5UDzG9hd9cof12ZEw2N9w6UzUU86uPRSz8GLXihMkcRq7ohmjH",
  "key41": "2T6WNhaKov6D8rMhGf9L1rMrFnhZNKhb8pT5GMVy2fZDjMcK1eVderAJqNfG3LPZtWcEATTHcmEcyqZUBQSpHErU",
  "key42": "3KDt1PGHsaeWFn73VbKrzxQJ1cupNw3vWRVUn17pAfyqUnFpFU7PBj58xhudjPvHwa9Eh45MwK5DMbqnFDXi2zYG",
  "key43": "2cqP9WJbb45YK5PeT6ZkwikVK3vJeWr88VKDX2DMFnayZhejvPWJ6c98aibP9ZMGThZfmFZnxbUvXGp6JXRt76JL",
  "key44": "61ZX7wNPsvCgk7hi88mVaDG8AEnvg7Z5aFEu7VKLV4iHSCuAPgbr9WcYUoABMtcXjLNK3WfGHmBYjFXu6DJmV9jf",
  "key45": "vV2judAW2UXRGWmSbn1PVHfLBob7VGvwbpCpdRgci3B21sutvx8UXfeuuS1U9vf8bqtPAozUCTcpuCHB5Pesg46",
  "key46": "3nQ8Nkg86Q1qzUjfuMoBg7FNE5Z3WNzfNjDt5dxzU3Yz1FvVRGtsW66C8msX9bbgVDvprBVZHHhPgYXtfWmqyQNE",
  "key47": "2WUm7HzYutBJ4gw8c486e6bwhPkSTdRyUE18XE92rWeAku1akAGnPmvB7hgbyqVU5VqAww6HcaXPy4oMwFUbbnFu"
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
