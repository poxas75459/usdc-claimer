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
    "3jPAsBkyAhZ4naa7imGk9s3fze72JbHh3HbRy4yHePXsABjrQ1HLJJC8EMK45zBxe1WhPgBA8AiEUpSZcwhwZPtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bSLmhFUVXv5acY7a2kWMRUJexe2NbMUvrkk3172GM4HfYuAaG9AxdC9we7KQAcXiCTPHQibCGhhUgNnbarWUq8q",
  "key1": "CzdcfQhYJWKGSpMnb7J2pYBwUJDPCQTCfU68EQ6hoWRabh5dCYWKemupH5B8f7n4fdEkcVxxfW7YptcR6BhQtS5",
  "key2": "YhSrf6pVGgCXt1HnjUQcvid2vqzSCHo9qfq6FGExQqc3Zx1m2HVT4xgckHKwfgLmbZjhuCkLAMNR9mubbWXAg7o",
  "key3": "31S5GvNNmbesSefRK5SaWWk9V6oZbPt2SfSo9y7ercxbUHzKGE8NG6WfJk4Em9QZUP5CAN8YsSwE4n4CAXyDaTRm",
  "key4": "2go1DWFAzjghY9N1TR1mYqnZGPQgj1TVx4VsVn1rGuaJB2GR98T7H92SNEaVXxJpLkkZ3Kg52BLZvzLBgTgxWAon",
  "key5": "4erCBSaVRDbAaogmwE6yTR7ffVCiJ7pot6wD7a41F9pmF2STtqGTzMW95tK19H9y9X9y2mrWodLchdU3kncmXbLc",
  "key6": "2Hme5UFewhXXfQU2XZMna8g8EqGTZep6XwFtnRSPXm3NTJLxso8jKaBYDVjYGnAM9htQ9izaokERS6vpKCuFGxKR",
  "key7": "24NJc6jyDZLow7XD26VYFwi5VHV8wNuyfPaUYFzv43ji5vEDamD5TNDHktEQLugMaYxUUhL99btb7oeZQeJeMRF8",
  "key8": "28nDy1YjJ4DiRkchNu8LorVqvc4Q2SkGXRKo2on2RSUwvt985bP9p9hxy4foAX9YiEXdijSQZ4bdvrBUbC2KDHFC",
  "key9": "5G6pvVtYaDuRCPi6HM6Nixj4GkE7gWggLa1spDUvraTHbEHPvyHwGBxzpN83brbZj742Vyg1Jvyw6sbkGjNcrA9P",
  "key10": "2FU4uq1Ersz4bnPi9yYTvPzgS8qkSF9wGSrdhQvDLRWjgaQ974mvcsyqfSVnZfvsdvRYCDS1Wa9QTW8KUZvULwGv",
  "key11": "3p2V2g2n6PuQRrLaqJ9fzSArPUYnEzceeb78LguayBnsZmEEDr9ugFSAj7L2RQRXzrZdWnVFCuemwxath8XVzVHz",
  "key12": "2dssR39G49qiFfVayLaSeMN8f7jm5iPUS4HHvXEk2V7QnAuLq1jv6FXLAtNHKH54RTqgtMHJc7fq9hzkNBv7nwje",
  "key13": "4hjVJUPgPyvBghzSdxGMTnPQ4F1cwQKj5CsBhfvUQwWPfJCAJ9fXXHhBgpxa6ur17jnuSwkMaWZFqq9r4ZtYrg8e",
  "key14": "UwHgS1ZHGHztQFnfEGtTz75QnjfgvNfZXdFofCyUYBZWujxZuMzB8rw7xWtKa9HRqxhs4MkCfB9QwEhrrVA5cjv",
  "key15": "5RQThmT2fHzW6bqvvxZhPiCjnP2obi1d23hvyxx59RJrbDT3gX4uPbmYbYBL587dWJ8CrvLp3uSDcM1vgk3xqKdB",
  "key16": "KM1s8a983pjmNGtzrSWfPLpW5sKRvg9etzaiwAyYPLk9oCgNYEFNVR5Cd7mAwJLyFTXKvu4kUtsGqXG53jCBWsC",
  "key17": "5aYarhBRxhzwrj57LocSdxuen4b5aYZBRRCotQVJUvEMKijxd4j5c3J13d7Pd6YSHgnZoXErzWhfi4J1D3SEvg4R",
  "key18": "5rDLU6ExHufcDXnqNgV1nzmS6pXhEQyW1phtaBWGuV47bvjYvDaifGdvnrLF6LFtb7vsySZtex58vA5JKS7aBt84",
  "key19": "4sSdr3oxZ958iK5TDXBzNaBHWxLzBVbrABEeC8NTKLUGKTP1Xu6XNTN7TrnTEKEv2exp5rvBWakb27sv5kNvZQEu",
  "key20": "5LoDmS8jHR31rhNf5ZVwrzfaCSamNAmb7KHVBtDwJkzFX2iJCPNMf9PJhww9Ceyg5xQkbwx2TQaVeFfEgdeUaveC",
  "key21": "3TjZ7yyzTUHWMMSG9ZHMx39zHqkSgeQKC7dMMPA25mZ6aDA921jACv7H4Atn4LztwcUap5sFBMACL1hXuYcpPMkM",
  "key22": "3zwBLzjeEa1bztYfSgsX5GDaikLAHGhBMDp6hXRhKxH5UEc8iEKbPYZ153ab5serzyHvp4ep5nQjrdrMeNDMhmPv",
  "key23": "3462nZkKSjVBjmkEyPBPVk1osTYLJ678F6Guz3LXxESfrjMVTazhKtwVJ8XhNCqcXNPWwARM3tjfyVZj9peiD5Wv",
  "key24": "2VawYcRjLAiGP1CohcCggzxc4KQAr3AVPt1rzHJikcSpSnYu4yKrZ47DW3SW7r9PUXc1Aw9VNWMsdshpUB5TLcN",
  "key25": "4wZuKCikdpCWgd3sj7W3bkoQa3dixncAW7jY251sR5FP4HhpxSCYFRSEtdN5h6Hjm6Ph6wvQjQ8Cv3xov5gMmtTG",
  "key26": "3Esgzr54zthL56ExkU7HXt17oe6hCvLGixQ5WYZ8C25xHEXTfnj2BPyxJMjkjAxi9uis1Mn983iQaRGByMuj4suu",
  "key27": "26oMhtcMmXz1i5AQmnDg9Sxue4QfcryHXoRGMGqYPfarT7Q5accAKVQGFq7TrHrSAPczpt96b5grgWxxJfKBzGBf",
  "key28": "hghh9ZEdskHM1LHLySFtsyazRHuA4YGtdP3L8adfZA18m5DzJL65rNjtMkVR7aUwd7t9a2t1MqHBLjjC45dX7eL",
  "key29": "49hikhxtxmwJ1pQrZsjXSjTjPr3cc2pMFkdcHYzRhFAomky6HNnyfnAx9FGkP2oG729qTNXiiRd78bmKR5K7455L",
  "key30": "4LXQrZFcuvxbPe8kg2DXfr457PFzLH2MgXvKoZ9kNssEnzrpQ1wFa2CMErgDUWguf1Xy3iBzun6KUvwzMBc51FwG",
  "key31": "54d8TCDsaKoEiVnieGLkfyFswUCgMoHNwJ3Ffhu2pwjbePp8wjZAwDoR8Q3M11VvQi4rnCatoKohsR8pM62T9CmJ",
  "key32": "4im2XUgU2zJ9mpkmsRBQV4F7VPbEpDwZEaHw6wiayoeWf4BHvWhK1eRYrmq446P4RExANEt7e4tc1VanGVYY4Zab",
  "key33": "4B2bTSaoVFzpRp9ybShJ5tpEBzmW9wuN7xHCHAVAetAD5F5sUH5WELcU5642hQzjVQMiLGmerocfXYay2BKivaN6",
  "key34": "2t1JBfhtbJxA9rAMSsopU7M76RFszstucoFCvDqA5ZnB16a7rTRDoPrXyBdvB5bpHqYLai6Ysp5EkjtYCZYr8T15",
  "key35": "5wQDBNrc91zHtXXbfwa2mbEA56h1aCyLJgdMeCDVHEorxoyDb6fESrhqn9EEGEikSFMRtZ8LcUDncpfGmiGampvv",
  "key36": "3wD8A5Z5ct53RM4c1h2pGxWhDxMtZEMZ6EV3iXt6XfsL1RQtdg1saumMekfgaJ1ikqrTseSgB8UNhYs2UwHN5vcK",
  "key37": "2fcXTV5fUNi8ReVGqNUgLYpdGbxiejNHBLqYKyYqHDXPT4nSmz8aaFw8qmVjvpMGGRvp2TnuXqWeiNXuzF1EidaW",
  "key38": "3dJExmuzmPiesC7sZdHg8hCwkR5W6fz7EKm3zrfVqBGS6ybaKgxXHRWe77u57HiQrS3ApaXLB3SgwqXCYhTbBdX7",
  "key39": "4pMJ32WMYhhiJmU3eKVJC4Agkvox3ZtwVgYZiSGD2X3PrYU2cUg14RSy6GiLnWDnJn38j9AUdGRtEmbMctBS9Fon",
  "key40": "3prTYSEj6C1Z7v8ZQDEbV4kwcoU9tqobt7ccmJcZCtbCEZGd25WPmhhVGAzgsCgSSjH9jxazDKDrEeD3jdHCtyYK",
  "key41": "3SBSRCL6yTaQMYQaxYmqUrUaQVJP26Xb4ETcAQQGzaNJZwRHTciWuzFJDi2BYSnXQBWyJsvExHompteXnEh2jDwX",
  "key42": "2NJYg98c7oJkxLxUUpzFRYPNHWL4FctyZiH9H4HtCqjoTNkBr47od4XquEoCEiR98g4bEH1h6nsW6abg83e8nJ5v",
  "key43": "4ZP5DVc1p53bQYCaYQTtbUNMh5wUB213VLL1pFgXW4M4xxZiVmnjsbR4Jxfc7582ywUfrdLUHu2KUoHBtLZHTdq3",
  "key44": "V9Ayuvo7pbHZT11gYNTGuVvaJCVjmABcQoMKPU6rkEyS4J6468ceMmVpQ3hZCBCFcpWEzwmd7hVuUr6fC1vY5nk"
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
