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
    "2etjFPbCWHLBp7vMr6MSELLM6HhqVwQo89T1quxTWPoMPmkA9BTVuWdHjkTeCbcEFrs9CAXHeird6AxtQP1E4Y6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lk2JaK3nrUs7mRptv2oye65H1wzcKb2eLhJABaWUBEpW4sVZuSLMpvaVppScR57Jd5oYqnCnMer49r64iQnrVVp",
  "key1": "5f3oT44UEPW55FTts9GogHbMNGvpbK6fjGvk9u62wsPFWTRwuHKoCgXzjLenEbsEigUujHyQpYZACrGAWnNpz4iD",
  "key2": "SYwtP2opAAz8mCoRLbzME6x5RvKMsAn1iMLA5p8G9eVu8aB1XJBTQicWypjmnTo4ZVFU8qMSqE3UZLEWeEXbw2i",
  "key3": "5dBA5WkXyhYkgJq4xHxtSYhdJjTgn7ckMi3dEqtBq9A95UEcB3Hw2UDDAB51TKkrzZgtD6fprCwM3mFT8Abi97Wt",
  "key4": "58k9n1Cw35957wYgbnfkgqcmfLdLApMKTshfXRbEiiGvvV8jFXNUSekMp1wDJaEFchLAdPqYcNGyNnkD9pmbeQL7",
  "key5": "3ckFWTnPuumZNdMXUnxdBxaSThwD6S5dwYPDqNatUJ9cnLMC3RNpnjoWPjab2a99AtpscnwqYLmxQVBL7G73S7Vg",
  "key6": "aWRVEV6mRa8aPmGbcx4DrPyJDNJyUBXKs1sKjrjr9knrM4hgpzX7uToyPhQXJXbAkYUxxoCzzswf1SGPrexGDjp",
  "key7": "D7vME6G2wMsi9gxCAqdjvF1CXCAbJdojWoKZ2jyFtEcGNmxQdgMgesBkyBaEjGvkUTnLdpt8Zxpsh7b1cji9tJN",
  "key8": "2kUjM6TMbptQrsdwByW5T9pJAKkNvvsydo4aw1EkZty86ZSqiTjTmgwtpS4fXr8zBy4wCudYNXdLKN9EFSrLbyZ",
  "key9": "2sk9QewTqX7mAhhvHkZywzeGKxw4q64ZZd4e3FEPmsNcqYeAupV4wQ3PeqhLHCxP8GMPhK6TGzqJtHAndccCmLdL",
  "key10": "4gN7AJfP2BL83K6Gu7TVhyNywE6BKm36pftK3yhNCedntQLK3NLJE264669S9uanDz982izxBEHXv81PxMDtL2Vw",
  "key11": "5NBmepjrj1HYJk1TTviPjAogTFUuSHyDHDnbm39aZ3WjDvHuuK7UT4wQkzRa4MhzZ67xwtDQEbVpmx8C63Pcn96U",
  "key12": "EksHm7wMnc5WWNgRKK7AsPzBL894p2v3nW3SPEnn2F4efKW7FtNx3MhQKmAoszWLHp9HAqK5PnDF7jXMxuCCRtP",
  "key13": "2ec4itxTYCS3bMqUYYzJxzXeWhxCHLfdrFNycvuNR7171oJePuMZ89BAwZK7bFZsd3hijhfLygC7gGmVq6yJTHXN",
  "key14": "5DL9d53egoRh1VvKYVXTmQHHLaix23kW4KoyoJsw7PSHCTpsSNzVmfJroqTyPRXKZd13ZiAV15sKFN5Y6A5mgHXd",
  "key15": "62c3nrwkdBXG61WJs3t9uPepqHaHbuo7kDse3aoyn7nacAFSeiTNexCR7EYt4sB6N7KPJe5z5osAE9TfhPJQ34BR",
  "key16": "5Sm8MzcsbSLgRj8d8dX7ab14vzw3jf81z4vJJPcGDDb44pu5C1iMDqUD2M3SquF1E6ZsKacd6sd7PtD1ytuMd5Aa",
  "key17": "2bWmZaAWKWEVN7f2Jsnm1HePguP7T5oqNrfg6NN53BP5LVgkAJ3itSddosKEA4U2obKUXTDdcJyCwFUDKjJsiTqE",
  "key18": "Xf7mecDDoZhsfxstHpy3UzHe44iwUKAmGT2K35TpzpJihEqRtv8jNHi7xD9yY5BQV3db1aX4detCA332p4vVr4e",
  "key19": "2ciwj3TkY293BnC3e2KT81E3C5kZniTNz2FpUMeuR27B4qXZwkAYr3Uw5Pd1WrjZ8cz5LhyFwFupwYqp4vT3c9Dp",
  "key20": "2vKLiXiupxDNU7jyDt4oLro14AQCb59URKN8brfnPzcBVYLpnFE4znoqoG8C7fBwtJobBugHMYDPBeSttYTbA5an",
  "key21": "4ARKz8zHR1ro1o1KWtN7PyyCajK4XMv1iPMoc8s2zSs4H3Q6c4fYJ5REQLX23JNDcG2JW9wqAwWShsMrqQbP8JJb",
  "key22": "5vDHJEaqHhhuUYRnK3Dco9tsnNLAqyibMA8bEFVUM9Und4biq7sHeWJN3nahcgbTmkSNne8hB1Mo5o4XHGPNhguK",
  "key23": "EU5QCM4eXsQ3fRjmfJubzK51fLik9wcH46unUHX1Ed8tweab4Wf9EMFQFkaH6o1S7o5yYhP27vNwieCF7PTu1yw",
  "key24": "CwA4rwGquH8EmdTFMW7eG6sft7WDof3jB2CZiUncmhPgzQxbDMHAdx9VvoAPUgqVYou1VUgV7iGZne3QyGkrW5a",
  "key25": "48e17w57NYxARL3D6gWYmiGbnUPhqJdpB8cTSqbzFiBRiR3SV9UDruJSCvWGu83bVSMs9DFY2JeR3EndSAE7Dvwb",
  "key26": "4UQWou7i4zDMGCYpmqmTno7Hu9FWEKrU5H85ypbhGejVzkfTkhx4QVEhZKmMsMTUTeMAkBBTdxb9figqZh7YLLYz",
  "key27": "4oQmXHQXsLo5KjnHuE5au75K7sKopeYT72fy1decYngQie1HdNEiGrAmZeck9nLJ6xqasehesu8rxFYEU2mZw9HC",
  "key28": "kpoYgWkV6YRH4uhBjBdf7KVLg2ndx46WqZMWqrhFi5qyEyt8voWrq5SjbcDNBt5BbxrJJDgVAbauCtR5ou3XZcZ",
  "key29": "4WHMnPZzFzFuchaooAPa15tj8Ky7RsRvuCNVeBqcTvj3MzKBwSBgrAB5jsf9xkFr8jxtdf97EPuPTpGVgqVLXhgp",
  "key30": "5ncVK65SFvfSzWjXig9aQrqE9e43MzEmk4sTmmmVxYgyjz1qymKvTWDCmCPG1UQM9aFa5r1oPBimvbdreJjrqJNy",
  "key31": "5ZqmTtqd5Pb2yremVrRU6Ue9Y5fhDAZfuLwKmeDyRLT4fDjztafU6fmbsEcwEp8pasw69odfHBheS1iipriWpkSb",
  "key32": "nq3sW9Uq5ZEZaG6J8X4F9hFZ7EJejAYHhqHh3ZGvK7iArBaTZuULvnjTFymM3JYJ4zGwrrMmd6mz6dBg6TdiKTQ",
  "key33": "3abwGbtq7HPdpHvSsqP8LqTkTZy6F5TmXgxxzLeJZrCBzKqyWYJmu3Sd3FuURNNHfSvLgUbop5x6j8uns6yHZPKG",
  "key34": "5UzNqQGak1PAu2F7Txja7g98NV3ZLgsr9H1RVHU18CBSpksVt6nHa5xYt4rsbQnNCCnQC9HYiPyjwEVK8Vd5Y9wW",
  "key35": "3n1LpKvCipjBUAxcupjPSNiBNKnAsbXkCuMXvRcGGTahzsz2oEqo1qfnWJx8Vfno3g2D9ub4ZoHQzCrMwchfWecP",
  "key36": "2drHWVKHKKsyZZBccz6Q1EKwWZHTWv7TV3cLwbARPivXJHEXeWJjxWyPUXk45jNiQ7Kyp8ubbXCRAALUhzrh96Vo",
  "key37": "3stbwkaxP4iBGS6UoCAwRTjJfHkji4XmFgi85LiZkFm4RNMAyPWcGGo5jJHzQvcuo7s6gv5suNJQh24vv5y5FSXg",
  "key38": "5FSD5MQ6TwsHFWTY7ww27ckUoPWzJccsk2FS6cBgbGXggpMcAKrcoSZhnGuMHrwzeTaRfes1n4srdQc3Giz6JoCW",
  "key39": "NR6ZD3MQmDgirNVFfkVeL15v3mRqbZyLABXyiEif2BSpAwZzsPvqiLDcWPC3BA6U2oWnTYR9zWpdLYpfiMTfkkt",
  "key40": "2wkifprxMJtY1tZJiyUToyUdEU19er6bq1n7FhyYQWHeTBszXVYKXGhhXiAPm4iUPAA6Vn8awqiZSYbsPiRKfiXN",
  "key41": "VGmCK7wWwoqGmzUC7pgQXiiit5zj8Y6dRdXqqGkaZsYXEj8DUne1YvGzLa86FJ3aoRvxcGjE9zroUmGxUW9LtbE",
  "key42": "2ZZEYkghKHigQU9tsGZeymg1bKPP1dQbDK16HwJjEo9FVvkfPru6RkS1uAkVskgz4RoWVYt2LJNnrANiJu47oKXD",
  "key43": "4Ae99dNx8GBCtxRJ3odDLdTGTTJhXUzo5GgysEuUXZhcktNSaDC2qEQc2sVZ7aNihxaLm7qacVorPYTjALtA1pSt",
  "key44": "3m2Xo21i7A8kEyHds8PL8CySBZTqjDmhi2QJh28LDnKXkcsX7bM5ibBkn2y8pLbj2bbSRDitXbnNruqkkRBUDtfB"
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
