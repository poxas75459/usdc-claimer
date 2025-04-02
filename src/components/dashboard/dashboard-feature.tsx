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
    "k4yc5ckVMkXk3hpjuDQMGGSKyZ1xA4w6zacYBKnQbmQoausccasAxZSVXr3Nh8NHEpBfCnaEw6XrzYQJbasNiA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fHbt4Z3T4a6gsghCSXQWATvUB7eQsqLARrGndiD3fbAumptd3SUczw5WFfM8rBmFVNPg2wkp9Sg3jpGFkpVNYpY",
  "key1": "4aBoV1p6wZ7HW5kUHyYFq1wMmReBVanhKgA2Sog4XCGgCht3htD1Uo3QMgTR58hQVW3FEbkBYpq5XpqoeJMF7Xik",
  "key2": "4nAwTisBeiwQA1hqYF2pqZBXVwAXpxUSHw3hL8KZHwvPPcwBmfSL88Y2DMtkr4J5cDMUAeGduNroqmVynXCYrTRn",
  "key3": "yXAFHMzc5Fq4BPALmJetSsB5X5H6iSBD3TBEyLrbUgHMTALRF4shrXirn7S1AvjvtBvTRjd2GWNyBALcWeCFvsL",
  "key4": "3iG6oaW2ErPCmPiEdmPWbtksg5jVfDcBrZv3pmsrrUpsA6h8yQXJY37CLfNRH5fTsAP7S3ERgrapxKBNtWTJBesW",
  "key5": "2TbxkikUdGtWhR2VRXuhySAdysTGY3FSmGs92F7Y8KY8E2zLLuU8QFydNMim3qkkjCpvMNvuWfeaLqeNwdaVtWoU",
  "key6": "sJShZFN2WrmTbR8W3aHuF61ruLQW693zecXci3pVBTHxt9QMGx3SziMqneujEWymeTrSWAzdLC3UGim1wvgSx5a",
  "key7": "2UaRP8ZRozc5w5MSycnzSLefx2yH6a5ToUKhgPhvhkwM6Svg8xNQWEPsgUMTkLoqpjjqPR7gqw6MY9KNNDPuAHhg",
  "key8": "2vmkqWXUeRcPRQTEiLnSkBnkYhxUtowhre8ZRDWeorsu8ELMgYPuq9z3qxJ53FrAMubET77Py3VNkEPiGgQjqHaZ",
  "key9": "2zhp4nCXPACDTVGAectK9SZLamX3hrQT9PDD8gi2wWusF8s96q2TYSczFMFLctz42PkbjadYYmkDux2SuBhhWpc",
  "key10": "3JvBJrVP1zGhBcovqdoWCv6LjQU7xuGgbejNXvFFEPDuqPZkyV8Jd8r73BrSwJbx95SDbJAjjGA6CPjkaunveivo",
  "key11": "2Xrgpr6RfBbxLV65pzLVLMXphF2bvZepNg1iyPFu2Lj6wme6B2ckcYvNYGsxVGE87UzAQqWxGV1b3vDfqGNzB1nh",
  "key12": "f7hSB4wfTnHNPZQQgB8FqC8zbJMoyFXQehBv5j5XEVGjjHyXaidzW6ozaD992dLQB9UUaQvCA84rKKLprqoTMiL",
  "key13": "4GE2n5sisAggshr1XdUj2LFCKLEGG7RRPW8mzzmEHyGeyUZMtZNX6dTNpEUYUV7xTn1TrN8X8vHDb4vzZjT3BVjd",
  "key14": "56dUWxzKQMpQraZoRk3RC9P76EE4PaRczJcydVCKNsphngmZ6FpMcW9rXAaVrmbuQuAaC7Xs2GYgoar97iVPQ6N8",
  "key15": "4g7Fjpmem98MyJPVRb2gDuXr3orJT2TSXLqXXVvjncpsmbJ21618dMfi42MbB95t8aNa8r9qBEXzwLg1eAn1ZCJY",
  "key16": "27aUeX7XLdd1LdfnJ727bsnce77KuRXS2YQrvLP5Ww2DoWZSt2aZZDVrroD7DA7agS2iFGnmC5xQzAcPoWemDo63",
  "key17": "3bWV6mzrJp2nG8Hs1ybsLLaKNuKW3m69nFP28vrRofGDiRLfJk1ZBCgjhqnvuTPbQHFedVYdrZg6ARLykXqkRhuh",
  "key18": "TsP6LEJWE2kyDJYHsZ81VyA3m4q9L84p8tJY54iTpfabeXPaAxLH1YuuB6sDSppke4dLbuxiCUQ5DWMEW6UQezN",
  "key19": "2KWbypWk8KQc4MT1i2ucaa9sVi9xS8xomCYkhfVm6pyEcJ9diGi3TBH9Bh7HH4gvXMmDJ8pcT3tuD6F62sFGE9Xn",
  "key20": "4h3HFLD1tAXkAMRyUgqH56ESjRj7fZMEJ2r8uWK9pXmnmcGzjvQJcdTr5AkHY1kJgPmYqgy7epr8rqWLYdpyNYun",
  "key21": "5V88v3stqfs4PKEq9K2f9ZexiedeBcfavJnqnUnPVTLeEdSW7xuztbb6Jybiiuxi98sz4jDHQcfyhV5wZ6Qzt9iJ",
  "key22": "2KVgFcmjjNZYXN9LLFm6BkRxMWq9fmrtBhH5XCduPsAm8u1v3MBjoKCkor5bodB862YXvwELAmcuURWeHSJqYhTM",
  "key23": "3NFBSGGnjRKjbuoK7SCV55Pd9tsd7jvYyhxp61UsRYTqFBLQQj3wK7Rfju5MnVSNeeyzb78p8X3KMmUTgk4oPjM4",
  "key24": "4iw2a798GRqAsc9KL9QpmBQ6zp66x37Tk5bjVvvjt6YAXE9VyhA4t1JVchsW3vUEo3Z2U9XDx1Sk7rbYwnjghXKV",
  "key25": "QtuFwMQgEzQayhsQZxJcCRLPJTHiH8sSMyTmXDY9N9bJjMwAvQEShngmYd9ZxN9kR5Yv55DUFHKw6MCntn4Mbc6",
  "key26": "5CAPmdmUYfTQ5Um6LUhkmWxMW5mh3dFCceqXAMPDWjoeh6diwmwG2NsNEbhR4PvXoxUjFYLS1RHU1dNqW5kAxhFy",
  "key27": "4QSZzZQVKnVDiLdhSL54kyNVX3EhEuxYVNxqU4j4NxboJqCzwd6WCvM4Tng8CmeCmjmZxPAVwW13wAzPAooMjTJ2",
  "key28": "5kto5BAfK8FQG6ZHeHHQM1AenaV2pAVLv5rNP4y1HJ2NPUEcFMzxAHCeQJvUivGfPZmK6iYBY5rHNLKFvgjn15NC",
  "key29": "46S4rfvWXyUuAh4wKB5257qDLpLdR7YHULq9CwbnWsTmgEZ7BBLvo5uRDD4f9FF2Fp67yePxsyfAQRAxLZadD9gy",
  "key30": "4EZkWFJzbSV7qN51T8cCAs6MRJMtfWWHgRLuaJAq7Q1WwrMKouQLzbrh4RNX2f1UUrmeXCSQTmUiHpBVWGkDCydb",
  "key31": "G2LJQbsJrPPBnNg5hp9SA7ehHsMCmZxLmb77ZKPZHZCC6FoqaibM5srSVmdWtNcEyVHMZc3ZTfWqxqrEAMYvXcr",
  "key32": "4EfXEqRgvCeTskKEeGQ3uaq9Ad6F2voAnwNWMShyBwzBtafPdcLHMomV3QarEaEhYWspDzmyRhFCJ1smEmjdbsuD",
  "key33": "a6HcYRXvmQgr6EJVFAePQAEeyrn9b1hMQomAb1NA2DDU8Lc7hE2kCuF73Kvi1zBid3r4KthbsG5mhGVW1XqdSx7",
  "key34": "4LMZbueGGS49xHtWGm2y6VaGr2xt7Yr2mgccSxb6XfAdYQPAJWTbbnhwbzmTe5ZWihetUBSHeTiS7J25VAuAq3zS",
  "key35": "4RM9g1u4edyafNYu2stLiUUsa2Atw8DapLe85honavYayVdiRHWhkW2ry96HsatJqgPsVJuMjyNRn2binkvGN4Zr",
  "key36": "4QcCkL6rKNY1ddRTn7K9j7uP5yPQJqxZu1V2SXREx21rN41r3WmEyUV1A8fsqSHWPGiaVCt2Y8rwNqZvLxsdrgzm",
  "key37": "5VFLtNbe11V5Dbs54q6yWHtJKAT3fqKmyKiskAApEUdGK7TvdRpoNhp1d79GKajgUnbaapUYY4Lx4DtUAs9qhGZR",
  "key38": "4yfWwEk4Zv8ue8mEHTru19GZPEJuXgAgoQzn5HNfzQwP2FYUvF8ktr7WcQPUkqtxn9PGu9CS3tAbrkWf2ChShXCg",
  "key39": "3v2gWzsoDZ7n9sR5tyb1KiHwPc2QuNCMUxzrwGQsYH6FnPjXijK4mPyhsbczBVLriQUgZVXkvru4QEXzrw658a9C",
  "key40": "4F7yqM29n6xrCPdBvYLYdHDuQnZzofum7v674VNpUYcpbC5XdRsE5ayfh32RxEwBKohF6CrY4jW4PUA1LioRa22D",
  "key41": "4FnNFnZc8NivVqNSCgrKJPVFpc2hevE64QuJe6JFTHwEdpP1Ur6jBPnxJ9FBg8tR2FgbLRhPmQLhCrcR4VPpCYW",
  "key42": "2uiZzBBt4iY6M2zViWkUV6hfXZ9yrzfzzZxEyvUzcLcuS6MveTtTTLLTzriCfcVN5gHtNyfJgPWQ4awhFadNaZqm",
  "key43": "LQ7ZirYCcAcrM6kRrUaMwYLHXEeQn3wthYGiofSQSuwVo7hj7baiX3NmrtNptBoDcCWpdgkTXJuPy9VjVFAonWW"
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
