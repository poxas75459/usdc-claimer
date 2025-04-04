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
    "4xQicHWRZw1sTsyq5H9SVmK9qNNNv5vFoyWe9SPJsCMdDnnpR49oNgsac8EpDVd8U3PrSqocxty1Fpu12Zhx22HL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JTDSiMcRjHVpvtJP5vLY7W4YiAxtNPVsoPK8GqUrKJqJNs4Nc6WEYcPkTxnAgrVRcd1gPuWScYiV1WHboXDeQ4o",
  "key1": "4uWNm6SSLKF3P1gXYPHWt3g1TRMhMAMAaAt26pdNKhct9hadRzZr8Xy1ptCEAuxb1s7R3cRKRLXkyfcivgEQ3y3w",
  "key2": "5ZesKMyns7kDxni8d5fmTpf9pyyHPfhM3hay2MepcTpjxkrFmbdbeVrcX7BTjifsWCdjEHjDuykC38ux39cn6krc",
  "key3": "2FbWaoLHehdAyj64e5UL4ppfpVyKHp49dA6SSKzqueuzaU87mPXxpNByke71Qg8xkZi8WFT4vcLKN3tbgNLNpGQx",
  "key4": "53HyUmE6sS3QM2mjQySy9zALLRXoyCjnNannLiBck7hiKSYs5LqqLYaUkMqy3PipB5ULAK3Dg1FC2hyBxZqy9t4y",
  "key5": "2joAzUtGFbTvxP4WjiUVNsNTEjpJsttUMizAB8nLweSwZnN1uJQgmJuWheAUy5c3S8PZKi5n6TgHh7knTAwCTZBx",
  "key6": "51gtcoonvmZiPCySvA3MXmJE4pVWUNG2XiwfboUzrmKNZrCnAziztFgmEG4HK9sgdN4VR782eHBchTEh49vhm5uw",
  "key7": "2jhrohe3ss8XHkuMbkS3mHEttAzEhQUwarvWVExRvbSEiQucRbwjdcpXgYvX8CLtPdhATJLzViyTJygdZLKRMdFM",
  "key8": "2QYcdZCnkQriXJ3edQdPht5SqSnt4QoLDqSjUcv2rMqX2qPdCkzz7GnRyWBZa3SiNwijwSx849N1YhuMpVd17uA3",
  "key9": "384M41iwsGFgUP1dbN3PPspJn5HeYq13EJnwvHqd2GHruJdxKWnYmPkAaCVvG8siySVNDSQbYgkBPnBqjCMGEMz6",
  "key10": "5U8BHDCJQTk8LyQ2T3TQsjGLtrxfDE8k1u7UKVAWtgDjuow5HRmFdfJaCPNj1KkSbdSdxR77iT1VYGjL6kjVTdzQ",
  "key11": "3utT84mkSDBb1EhSv6SaidPWLhiKXEoBt911f1vgdiCdxx6oHebLrDYr7PibELs9Y5aRpJFrg9bw51Jx32zLLkxs",
  "key12": "4dPbPnBjZX6DZFjVcdbwT38nauQ6qqcKqkAowqDdRC84cEDkze6NMvurNpj18fj9hraqhHHXK1fpkurEpqeFAVEL",
  "key13": "C4fGYK6JpBHyvy7jhJPQPunh1EJz5KqqdPgGGWfD33A8sFd2rQM2C4ywhSxjUqWvmvMUYRw6jvCVvtW136VnApj",
  "key14": "3AJQ2RtzmHPLPpZYH4M5yateP8RmA9geHt8oNEwnJVNpXgK6q6eukdu5atyQ9sb5CnLVRYDXE3N8zZaLYxZdioCJ",
  "key15": "3xsqSmqcNHzNHgjhCh7fsazAHW6inYWgvRh6auUXPbfJkPbvB8Qb922TJwh9BeMcbFoHoRtcd9SKQKeNwLaxoWEi",
  "key16": "4TM7J28wyTuhiAyAPzyE4je87VW2KZnQ6EFChZtuoPRK3TzRmJUZMyVT5uYN3UPo7VE4VxAzG526p15WbFke51rd",
  "key17": "5eANcCeGY99BhMiQbEigyGbJ6s4ifhGS3qacgroeBmeZBQWEPQs3UtGMRibijWwRZsHmDUUdsTfjWBTfhBNXgtAf",
  "key18": "56PCFTMnj2WN21ZSwvPALMMxuT8dpPdA1LYaNZi53P94NfEgP136qon99sarvZhazXwR7FQwMLVyrzVW5zSbNGBX",
  "key19": "3hxnuFNJ7FYs4mnLscXeNj8uysHSPyLX3QGwK5pcLAF1R6jUcjiPK9A7scYTebWjkKaLaR2tz5YCN8wFHrJ4QSxV",
  "key20": "2DBoLM92hqQDLxoEJLignKYvMHxvzA4gQHjzso83mfo24t23MqWE99DXGpJvMsc29vA7bYhc2VX12ZsjmvqFyhJ5",
  "key21": "5JATH8v7LNd6AG2vAkE7AXMDKQfx2tnyLvmcRPaeE6mqeDAa2URyg49RiSpxUakcCvvFDRXeJp1WJVCg3EmUUH91",
  "key22": "7aUusGagiwGrDjWLhAkpDgCifVU9u6CYojKRjDK4zLBRDf3g794r9qN8X3dmVftHhNhhxJWF6gwG2xNjbbqf15o",
  "key23": "4SbCBzZEVyoaPBhncWsQviRR8b1vYQQ9LmWGdkrs37Rp8xJr3VWCkCBkuF3WkAyozMZDtmRp1cSKLx5HGfinKVMe",
  "key24": "4PgNdsZFyqVKCDa1LqX8SQr97oBpyHNFmbCtqgZm9erUKGJxmbE8CdPYvJT8Xth6Fy8Ww5Ktc3h22TcV6ZZzoFk7",
  "key25": "5TVP46zEg16nd46ZbZtwRfZh1vmRazAXUo1aoEJvk9hLzMUbK2AGRegq7hrayZ19kdhwqDsmQ36Gz2s7QVFvafBa",
  "key26": "SAN263EmmhJwC5nv64BS7p22iBbhQ7dcUsFMZxbTJoZbJMGfez1Uic85MqEMyFyXo1hMRLx7eSpGgNHHSRoAjHn",
  "key27": "5vTHymZ4LFMUKauBc6YU3akNFdYYeKn28rgJLoKBHYBtC5ucAVBua7GdfkNTkReXSLKCbqsYJMBbPG8FFdParcmG",
  "key28": "2W2WeUisG5KSort6hoD4MqQFmodMjZQL7hzsKCrTpscxS2hLJN9wuEsrmnWey82erqzh4KXEeLBN9zPUdKGTp7V3",
  "key29": "4fxebwu3JKryLHf7QAwYXzvc9G4Yef72AykycqH2iaQdaXraP4QJJPG5F8fAGFz1GGmDyLo8b3GL5kSum8hmUKwb",
  "key30": "62KAN82Ve3vrwDRxhrgPBC8TrEJ5Ja33EihaWHoSBkRTPzdGZfksHW8CZohVHuB6icCEVgfoH7CfupWg9XhKVGvv",
  "key31": "3wNjXrwMCFfFcLun4P427toJzDCtcuZraPppQBqooiuaWW1GhdLGJzH1DmZxFGvVdYSANK8TbGV5DNKfM4QmFPMz",
  "key32": "2smBBVQPYQXqACQihoTBF1FXn3KNjQPEbezWaQwStpwnGBCjrswnbCfV92bXFPMyLRYhL8WSeboWWwnwbfpc1zj4",
  "key33": "4syjKrFLHLGCBVe9thSh7SErBmQ8xE6bo1Fd5uX18NdD1Pz4Z8SPBGMa7x8QwamJqxWLwAWG579hgcTX52MeEmQp",
  "key34": "4yMNBF9NHroNqichk6viH7dw2xXf1gmJECiZrNinFsV7xwhDos5AGNHZw66bn5Wq1QvNVdDx8XjHnYYVuPEpMAGB",
  "key35": "L4pqCNnXSEPrYSxaiUobi2rJHBm6N16fm46yTX3TDqmPBotyE3rM5ow842oTQuS5V5hvgf9uXbtCCghgnJPtv3E",
  "key36": "2bgRoped8u5xVc31xod45iWoD5QWYa2kWAPSMjZuMAjs2pcvMTSTn5HMZNmUVtS3pZWj63K9qpuhwE5QgE5Juy8D",
  "key37": "3iPGRp14FYvxXkK55hKDqGR79QS29CWCDp2gS2SRUZCkTjKYzFFizQJZj9TCERCfvA1WCYUwSDPSnxBMPEpVPwQv",
  "key38": "GfoXaUeRwc8ED2AjeGi155oRgxVct7eqsU4i6HWbnuH7mekWZtPyXgKczetaLd6Vk5L17jyPU9xSprczVBKHenB",
  "key39": "R3Znh36QaD7QaScNszMMenz99gemSkpisWsvBJqmYfDSoZrXZwDtVnrRPoEyrWHPmF7EBxqyfm8uq9KByyBr8eu",
  "key40": "2Qmim7Vp6Q5w1CJaJrZAgF3ygqYFvYDhCcSKDHrnYXtsZSNUcxEqtprgK3wtZDkVYy2ozqU2GWpnSK8Zoz2vZBDA",
  "key41": "V9DwauPr9uoHngK8we5VvXejgTnMEC4mugkJm8cboP2jpZjEXpFReAexMDUQqij17DVyGGR1tXZmsZtHzKpPmsW",
  "key42": "4r2nXeekNBEJVV9tWE4744vNSn1nDmmcgVkjyW5L8P66hf1qwW2KpFYWNmbnF7KcWQ8isXKmnwfGXpU6T2McCjcs",
  "key43": "3jmSCkRzy6axDuv8Gy9P794hYBCgPKYD6RUH8jFAQrv8ktxofWaQeLFULVBMu6M7UEyHhQ9ZdpnV1pGYgSPkLQjo",
  "key44": "31CUrt8aZbGbRHBg9LpwyTu8z3cSAmoRY1FJntEdS4A6xqSbg5jrfRmHe3kn22J9c99DeJq2LwfbTn8NwAgF4Mby",
  "key45": "4XaHWBtG6zLa46EyYEcNPQNKJUpEngWFy3vVoA1KNTVB6Qa1UEuVMudxRsHy2SCuXecmf5CjacdpseaGQQB4V8RU",
  "key46": "3KEcp9cA5hC3PBfqpsbNxjq5zJ7otpEC2d88RYCwyMR54VfT3Lxu6seTfiEHRzXJq7qGpUvBShQvKh5nGtvXVqeW",
  "key47": "dfyP6hxibiXp1knGcZ4rSAuPXEZtgMFBWaKYnb4YR6TXc4CLrZXgjGofzC7PBYvGtAU99NZMq53Sj7sUygtorm7",
  "key48": "3eJ92pNuyLxfAHeXQJg4kJ5XK8CdodKB67cLNVgNQK3KSbH2rnaWH4gd39y1pzjcDn48V4mGyWLhpkUBjRanQn4x",
  "key49": "2jwsQeHkKJGhq6T9tWTqvDp7bWxxEPJtpUKo2ByHcgW5dq1f3VtV8wXBQ12zcMqfVeGuPk2qiR9aXZicQCzqw6cb"
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
