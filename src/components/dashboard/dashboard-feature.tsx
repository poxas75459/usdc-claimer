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
    "5Q2SkPTivdAuqowUe1JGzfowULhNCgb3Ztj2MRUsdyYezoaFD5PDxVGD1cZ1KPsU3u9WgbW2akQQeX6m4fbkNorf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H5LkJ6JYHzdN6X3umXnXi3BdcXFdpomhVqT2bFxqUrgtgdxHCRuJTm6zZVTZm9Whp4JaKu4YqM2NgN3xFP7ZssD",
  "key1": "5M4LWnx4YthKhYFcaWcDG5epNKGoyg9ASiXJr2rP1umh4vJcnndoYYEqRtKDWfEEFddsu6e1BbU4A9tCVgwsbB1T",
  "key2": "49uYBkfBPEkP11TYMvQsthFkHrYw42fJoeDVnzAJ3PRHCHywAaSvVqgjkQgmgj9zz7esVKL7DvYSWjDrti9UE39m",
  "key3": "2v7QyWEARu4jwenvk3y2mCkbEyMZr5ViS8jT49KJoW88VXBQPKHCFoPCtWpvUHpULkZLsiftN7eJqvUmjBJur35R",
  "key4": "CHGNuZrrQWHwAE3jx3jVu3CQJyDMpKB1aiMJSmo5ZjfyVAubH1GUofN9n2fny654mcGQe6H863jPKxjWvS8BFuS",
  "key5": "4efonfraUhLopjsXA5SKAysC6pFRrPwDUJxfnPT5bmg35Cn78R8yjk69PqTXQ7KiTjbq8Cm5WNpGHwKdtByQNoty",
  "key6": "4kB7sMWyCQS4gwhHnRfH2EeT84d1ZSyGQZwTdFNsjanWNta5e7qJfV3YcjWJWooyvCJDfQfu4WDuhkrywkX2BmvY",
  "key7": "sLodabzkAKj8b1wb6jZsCdQUJ1T3akJUNoqKJHtcjkhvzhLvUgKkFbmfWArVapc2kH1Sxp3W6uxG9KzJvBnzAUt",
  "key8": "43ewsQts5zJ6shSy5uYQZMaVWjnecdrY6JgVNCXKzhyX7dCQPzD5ZtzMY8U81FhqDAt2QK7jCSKxNjwHwdLMrxg3",
  "key9": "3oqGyDaNoCnW6TksN9tMzYKgGD5YG7L7VniR6hUCWV5C9Td6CVZ44bnMCVwqEwXXst1YLLDhDHr5EJ7LcN1oDxmN",
  "key10": "oneH6NqHPggjYw6dS1vyAFs2pTG3xsejuXrMeHxxEU4Y6BBt9W7nS2e4FU4MaA3RCkyLdcbJuN3abCVTJPMbx4c",
  "key11": "4BfMJHeB7sRuynhfKLRWRtP2LzBZjEWqCwYH2e1KqXVVkDE5vgJj8qmtJvKfx2sdRgWCEVJRM4aypGNaGtRn39gp",
  "key12": "yztmbkebhAhM4P8RsMapKtEb85KSGgXn83YXmxqzPAv7baWksso6SWh8NxHXBtE2rahor85NHw7cth9y5fPd7Pi",
  "key13": "3QQ3MTb1JfYHFzigSLV1cVtL5yZahL5fLhvRjhVSFKLyBQgvokjEq7oaHG5q8sH6Yg9X4WMr3bZFuXFWJyCxPjsP",
  "key14": "23Z2LFFdrSuCocydnnNp1LzmBpp7nTnWCU4myAZUFfDq6yaEaaTGcpKmCZ2bfgfFbz2U7EHL6oaCsWLTrbgXKLTV",
  "key15": "2N98KxbPgRmguTuJhSeC74WmLUTVvxzfMG6XDqgTQ9fLLLbpQ42sPAGAkLBoh6oLkuB6xXrH1sSQYsKviAdd8VVM",
  "key16": "4DoUvnZp18ZwBZMVzbPPXLWfob3hfE2ZBJ4rqnqdWBhgfvtBDma8gEJ9UEEgpsKShyZh2tLUk8Xv2YtA5YEUbf5K",
  "key17": "FwXvqBq4CpJKsFQkK28v5uVwzLbEYU1dKr6U7CtcRVv2Fait9yHL9yStrZFhXBn4D4eTXiBdrR6Edws7ZCEXivw",
  "key18": "3xY7zwU6ryBUQ3HSfM6ZA1QqrwrjbAu5p1mvhfjCg45fQSkev3qBev4v5T2NYDVQZB9hHAQvvARwhTrVhTFZYtgy",
  "key19": "2JMPKp36gmf1sMZ3SqFW2EmFjkjVYWSE482uhpa94Xmfmg66ZpS49cAmVjYTE6CGKucE2RNgsNrECqT6rLwafmXX",
  "key20": "3HG5dxjHrerqX7RZD2GhQn5J8CaBBESvCoRgY5iujqo2G4ntdyUBfREDSYU5Vjj5jHiysLStUoazxjvqTDH64hKW",
  "key21": "4FEbBmMYEET1g7DnEZz8dkkQfrpfY5GDm95kp7W4V7uGQHSoFkKKQ1CKiLi2eAxENJHUM92EKsEGuwWRHy8oL7M2",
  "key22": "4At73K5DUqyP9YknQQqvuPRrtG3GDujLHUPXiF61PV4bJm9ZLzY6Vjq97ZDgDDEmLeaA43AscVphTcwuFsbgMjbE",
  "key23": "3ci6Fn5gm76QCdUFTbYmioZUcwV2WY1jpvcJ2HCuWkhP46FhN6T7PYAPkvoDLJBNoNSjGRchZEEgnVw6hHfCNwJ9",
  "key24": "48zvWBVYBfz8RefyvSZ5imDDzcfijiVc9Q4exSD6P1d4yssMywc4TW59fBQcbUVaoAxBGLPCA4r3pMQNSL58T1Ko",
  "key25": "5cHM5MJHyWi4yM4d2aLfCNo3ssRPmXQvmRctVS1EfFjLnmvyhz8mr2862pwd54rSSEFcqzBNJ6EDvUZkUGxSqQTJ",
  "key26": "25JySVU8XSQyJq9t81QuUrRqxuacEy7eLHG2ACqZGpo9njCm4n8GekiW5j3pjT7MJNTcekmhnWM2t3R7v3DcMMj6",
  "key27": "9V8PKwDJtYmmmGDsGjuC5PaeTrp3fvvB58mPUwA412kX2jpDHTwxfK9aQfzemKb571oySnB88LGiTKULeak5fqb",
  "key28": "24PnGMpEoHErLFTxpGH5hcarLeMKwN7Z4b2Jmp13Ee1LydQWqoHfzwna2YSycZ76mw5crvffXCYQyjuYwiqN18Di",
  "key29": "3LcLdPJCk6XqAyLW8GvukPdU5ueb2ow8FYyTfnPU6gsDsBfuAXdJzACxHmUJuhfoTpjwFMkWuX2N4ZP1hiBizcg2",
  "key30": "5pGxYaCUKARj5DncqtBzncmn2vQhXieGBuUMoHcyBC1UmyVGhhiyrYrb64vnkwB28z9E8nofCbfX5ZoRADb73x7f",
  "key31": "4jEQS2RdXMnEArJ3YRs9LX4pMUnLUhAeenofcKqCWG3kRgvU2h7hLzWfv13cRqp1cZUhsPk9f8PaeY6YWnpmXXmz",
  "key32": "22bMi9vDDUQNeWnskdVxjVyuW4QKN6mEnCef86fAyAXFLAUXd18T3YDtrKKp8Ro5d8hrqde8Av6UbpJvv2Rxb6Bc",
  "key33": "3ZoRBgZ7uWyTMyS8PviSHPjh8J3csRgN8fTeNyFXtceWeBSEtAQ1rFMtMUgMEssovA8bqNq6H96T2sm2Z7LHfpGE",
  "key34": "DRAmxBowLSdHUfMw4ETvGkg9kgWSbkAG8fx99UKNN7BWoTwuQN9Kt21Pb4q98gG3AS2Xqd71Emt673NsQs33rjR",
  "key35": "4HgD9jHm3LZFKiGPoC5RCvDgEuHcbAjGPBetc2QXfztuWzV7ssF2xMyjFDukowLRPsjAS9o6AVTrywbmpJxEEuTm",
  "key36": "4dmp5capXMESuUQsZXR6KEtf7j6wa4tN3WF2o5uY7EKhmm1ahmQcvENpjPTqZAJyqGz4UgEXAyrP3yZjcZLEsSJW",
  "key37": "FAPVhh9N5XDAxkYDJFk5emxSYomGWznyaLwD6UAHGGCDAoQj5SWTZRR5pnf6HyxkGm1GA23f1wJggqTq3Wf1B2c",
  "key38": "5muoNEvYCBbQb5nZ64vMXMb3gqgjHQ49uUpaw8MGXpNVpKbCysjjZvqDPMVuNEfS1rYMZT5YqaiNrBAUY5sb415B",
  "key39": "4QB7DKhs6wZXNhjTSDytduQidzyBUs15ZapcVQycmjBiXSZbG9j3GvxoFVkfcjYKkU3C8vKJqJHarjKHbwqNqqXS",
  "key40": "5ho6PPVk8Krff6p1S691ynALK4ka5YcYN1jJPANWZQnbfLj4UBV6zyGSPB58gVGmMR35fhZ8YPoYTnL2t9q4aDMM",
  "key41": "4TZPodpJHo4RmiiUbsfTr79D3rqi5pHirivja7pjtpg6AmJ1Bvu8bs66HMVDtQ32nXePPYrS8GbG7te23bjxRbwd",
  "key42": "3tyj6wqDwtuFaruXxnEkARc3MVbuxv1kXuVU7xerzEeZrez6jkabatoY8cmg2d2jxkMmcu93bjG9gY1eeXMX8Edw",
  "key43": "2gk3y8WcYYNUJtsVtwC9HwHG73P7e8TBSCPB9q3d9D1LW2tNFRCDb4ZdTFHgG8ARoyV66CGbB8BrpWzqn2JxKt2R",
  "key44": "45KdXzZGHZFv54tQs6CEiq7Vfc51hPhKkdn9fuaTSxKxYvQHLZvqqcva689DG29rZtQ1FTCHxo3ogvxmuue7Cvj4",
  "key45": "4p3mbmziEhJDEwS31YNpJn1mSZn1S5MEbfd5CPc9PT3D25SPwwYCQ5mhNrgCWjn47n8LeZNdPiU64jm4wwjnLau1",
  "key46": "5ZbmwrvnEbbXbPPCfTfSYioAJWeQVpmShSGvJmBcUwfnRypVEfB8nqPK7N68JzMKS7zHiUUSjHNNWbQ5pL1uNbp1",
  "key47": "cHzhtyVJ8cfQV4a1H8MEoFCi1Gizz4eQQVH6iABf3yxnkXd8UgXsrJtsGXdinZbXUwWyzz6XGbS3sn26aieVHPG"
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
