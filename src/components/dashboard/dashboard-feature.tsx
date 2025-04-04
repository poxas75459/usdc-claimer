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
    "3M7nPWVe4eAY7fADGJN3VtYWuD4qxDR5kCSzBB1STnpqtmtRxePF1QTs1FN7G2wVDNb98PQvPRqpJwhriqpxhvcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s3jFG7Q1YdqNCKSwF3DXHbehHhKNMK2qjj3z95aJvYynxKXDXgUAJY4suZc2JGLqA4GsKj27xBwfYEKsBNRT8fF",
  "key1": "5jBhoE4LRckhbNNSMeKGJD6CTJTUSJgSibtLEB9JkoKNDHWrLhZfgk9sQvRKeQJBXtgcaDQY1je4d3mp7kSv18ji",
  "key2": "3ke7GWRHRN8BnZDa19mYCepG6s3e5Hxj5CN25iuKxoWGBvF1JBpcT75GN1X4go8nChYkcg7pXhBPDuG9TiEeEjC7",
  "key3": "2epMFYduEfA6HR77ULHak1SWjkRyCA5DK3geyA6ZkE8kYoAiCxaqAPfcf7pV1r6vJ2ze5LvLmtJcgpaCCUU87kU4",
  "key4": "2eNFSkhCpznZrBzrUttP4YPzcBQXXQtqCLCguLU7AnVsQGfyuLA9QNvpWmT63aEjS4ZKpBQb347U8vPvGohM5Jvs",
  "key5": "3gx8CqnLY5QgGu7FWodt8xtJ7fhdPuTdxszQ2HfinNia7xTiLW6gTCVHHFHvEj2EjL7VW6TA64TT2D8yPmqHasCg",
  "key6": "2FY7sEwk8o5dD8zRyYku7cPGMfKkcj58S8AK7qi18igzugFu9ahMDcdjnZp8f7Znu1tzrwc9yeCTyB2qLiSZ5rPd",
  "key7": "2e6E91zSFu6eBBFwKjYVVk6uY9iosjo7pVJ4LosUnoPEnyBeuaUc4ky6p1L1C8w9uSv6hmUeyhXh5wxwFWAKXgdx",
  "key8": "5dC6GjGtzxKhwFZqgTtbVpwe5LisqWQekESXwMUzq8htaaNtwPFas4ESAMt8dZ15e6v8VB5kRw4kt4DMw6A1dnWA",
  "key9": "2D41HMkpsqCd4DqaoyQRpRTaSXcSBDqVtpjsCAdLJx1WttHu6NoqiQeWLiMJwioDRQESLnmGsr5s3Mmr2yw8xsok",
  "key10": "cwErzgwZdML5ryWTziviYZ7eav4gCXhZ4eJkADUUfyzgC7gReZmU7eF9zWUGUAPzE23uJW7jKsQSiYqpvrqjXJk",
  "key11": "ML96DpvUk7mfvFFYHnA6kegFhh8khQ3rN6MSSmCoA9F4ThY2RqCGm8LN6wsUzaripYdaGzytJh5YWy9UeL3iAWe",
  "key12": "3ionHHU8pt8JXhdLMiJxZ9vYQ3L6AYF8ubJ6R1WDibDey3jK29QYenhEvg5w9ksH84s81GGNpRaZxc1E2J1rtWYM",
  "key13": "4zskicGvxeWgPCH9B1ubfkKVXwMpYQ3f1VnrUmrmczCKu4Q2skkPfgo3Dex71yX4SXoTn5vjiquJHwHW6gwoRpuE",
  "key14": "4ko9LaTE7TPkNo6n9X7YzGLe1ivapx3dAxEkMpLuo6Aes9mVa6ncvDLkXaivu3Bx4n3ajsFvyQ7AQ8g86Vtfm243",
  "key15": "B8SWmQob7k8HADmrrGmbDEKoibFp9Us1jyfuGFjpo8Z9yQS1AyCoMYUs9efoFqHi8p4jU4V4ercnB3Ag5ZazH6s",
  "key16": "32eZ19m4auQe2shzQD1pSJjLeiLfreQhTFWpDNj4TcEjoj3CYwzk8MWPDMT7NYRaS5hbZPVDD7pGGWP1Y6dbyEpn",
  "key17": "pMb8pEL6HZeaoiU5KkVn5ba41W6bWixLPngX19WYs4XCJ4xmun1CVT6XuxWFsv3Sz73stUTRP3vCprrdAteKXPy",
  "key18": "2wYv3S6528h9gL3nEkmpv9gJRnajYMMqmAsCLcVv5w7pTUGUC7zooD9Aw3UHF567owHPBnEi94jYAPtJ17mpYrEH",
  "key19": "65KUNAGD372Lc2Ud2aVV8vM6p7ggAsZBMQNda1DNS5g9jpb1Ue145fZugCpsgnFroGuAYGCreTMoB7BJ3zohzQuo",
  "key20": "5RDJUzNd711erV9GGCxBW6ZUG1Zj5YBPDK8is8LnT4Ek78ikXVyU1MGkjMTyRrTsQacKgd8RJfxHDamhEMY7BeLC",
  "key21": "49yDit5L9Yv7DeEwdcPBBxSExnEKqMfR1EG52N12TCiNtYhuKxXxhH2GgbvgQA7AE5UEtsjKBVvy3W4a213Kxh53",
  "key22": "4Rp1UuTsUA7KNhH34LgGFSryRLpUCzbEGjtBexikBXppfWwtuBGFiWVagQPfhxKd6Jy3rgzkizwzmb2ERhP2wKEb",
  "key23": "3GB2rLnPTagHz64XTkiHvx6EXjES9sXm3gm8yDJdNmAJ8YeAd8kGJBEJqkcPrQFSnG2wF5Rx4hCZwETZbwyqzVJt",
  "key24": "5XJ1vTd25pSf3JfnwNEC3d9PY2dr4nRA3C8Unxma2oSH6gKK8JMwRGz1fRnxgoa4fucJ79C3DKKcQYK7uxLPT77U",
  "key25": "2xLZqtpSqy1vTWcAYFucKhQy19qQbDVp2hQXGvRmJofQ9vEws1QnEjAbQnPfLWz1GPGaJHZJnbJc6rcteF1mX1am",
  "key26": "2PCmF4eynTKRPHa9HwyVQfaMqmiYf2aezxWLLB67amMefi2QK9hjTfnU2BJqLsSWALRhUEZPjGw8HLUN4Ger2PN1",
  "key27": "CvUc6Dxdv43vv2iZ1sLRZVi6M4GFNQ5ju7odKwVreFgawWwF72TqyM4fMEv4JrZ8oLWrTYw59BkGvmWP5nrbLPR",
  "key28": "c7eDdJMDyxFHskJVtAxi4FFMgS5XPoLcDDyzLFCRMVtmM9A8dbDnD4KChUdGRPMYMMWEM4SGVSr6etG2ssHTPN5",
  "key29": "4tSdCKK6QP8NWDt49b5NAQx7nAZy3XH7e9YyMQKVpyo5JRgTKb45YRyaX7QYg2N6Tvo8acRM4G3KTAF6uKXcRj1m",
  "key30": "59rTnU5JcT9UV7MgvWG6PYGEiUHkdrKKN7QGScSv5iKzYbvKpS2pS7ZvPjfm4zpifjkAi5mvhaPMWQ4tmDCbdX3i",
  "key31": "28nXi7HoVewCvedvHZF7C6AwGMGi3J8S1QLbKtqbL8T25QTc8Ez6UaUtnAY7nfx5mSiqWQdrK1BBqaSWq3iTnYru",
  "key32": "3EaJivX8QEFb4dxchDzC5V2QfXD6CibeRzVRBnkTc8QaRDmyDqFpPvFGVgqfj6Lgi9A3L1MBXj9Xd5xLPBtykbkv",
  "key33": "21u2kgq5xqnubxY3r339EnyATptdtkbaaDkVzjBrPXn3kz3p7jywoko3fFDTk7kDerziBM1t3z5iiWF97hcoBWE6",
  "key34": "44apgDMNMXm33JyvZJ3LLQAnL9wC7x94mYu9VoSv6YLaiHBF3TrpMxXBLjKfGbpUeRpvxTubTeKpBen2hXCejMJZ",
  "key35": "5yHjF8XMsvwQ5uwjieZVHUKoD9JT7hfQKMCudhHrx5RSBUwrKY2utjqbUaYLd9R2nQYuYrJ6ZgYmFHiSbyjKwbA9",
  "key36": "pUv6oGmSgHJsPtX8x8iTi1vS5L2XsCWE1BpK9Ymf6TYuHCqG3x5VpwSRioFmsPua6dpEDmZpkpShcGgfmMBvU8p",
  "key37": "3HxU1ZqEVEjAWNvETc2Lv2JHPeXuGpcs7gaYfYKxofmESEFDPu8EvVDwe9jqzgRryAdWgTkRFdpqAUBkA5GT45sK",
  "key38": "2uXaXatsScGnw8yLcirV8wV8rpxNWukDeG2Nma7NoqPekXgimXkqfe6czkiRMi3RnSfNCaJ2r89BWtLLQgufcE4P"
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
