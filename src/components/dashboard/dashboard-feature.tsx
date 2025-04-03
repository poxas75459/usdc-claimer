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
    "3D8iKKKFvDyS7Md21Mhp8LEJAmwzyuaXBG2tcnWyrjVV7rwFZZkgn8ScKnXTchgYNpQMceVNiHqGpbSZxqse5zMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5teNqwWgXVs8kUrCZ6Sp5bt6rpqQSsr3JWcYrrktgbwXrjSyTfVpR8N79koqsyUkxuyXGkXndY6hAazFdMd5AdB1",
  "key1": "2M9kseHJ5N6jXTNogSV5XpuaiMbWYMAQE4ykG9yowchgXV1LcPmFEuzmtWgVdbnNvH3J2FmGi8pef51XZXvPiDaE",
  "key2": "iHjppz4VUcwwkaXAL9XVubP5PCSYnTSa9YP98yGtnuTRtFYvXiJk7dt32HyrLckNEuZnpeUYuZp71ZXooamidyJ",
  "key3": "66oeSML5SbLugpVqgi5gVjPamdb7KD4ZousZibsVfMttfNQ9q3SU9KUhYpzmLiRMkDn2S3ceA5u59iiE1yGRgTWq",
  "key4": "3nTZeynZ8vVCuvP1435fUToD4AjtaTQ522X1ENqbT2ry4JKbxN54o4LmDQhydntyyLaPwUchraBCKAar2PjpsaHM",
  "key5": "2BZiMgtwRiv46RRMgQa75rQ1pwY9VbESZyb3LA5v2uMW8ctBrevheLzGy7zTtLvEhzuBVVwxEkaJd3FENGs4AdK3",
  "key6": "3UCBHxzuXbCuYHqyjH5fqQbgA5nSACe5sPDPqZMaBztBqm5PhDzJGpY6setgenESkrgvChcFBhm97gGHQq7WYEfe",
  "key7": "3tMeKmjymraZ2aQQ2K6utMuixhCYGoGVgpLtiT7sqEFdkpVhuFxLDeykv6equVENmZ3KznJjzkGLKfDYkZAyXDdB",
  "key8": "1vyeYsmuSBgt8m1GMtQLgeY9P1aQ9KBuGWaH5DDWn9iF3qn63GTa38L78pD7LQo5pgiQAyTuMWnWAKkUGFKqGgR",
  "key9": "3Qei2BnR7KiZZbf6duejg9ppw7fUb5qLQDv6fxcsgtFrnEGS5oW2zK9WqyXU3UKCu9pSfzd52gaJ4dinMwwBKwfe",
  "key10": "2p5urKpUmsDNJqJ4ZHt4SNANj6DvsBiACRGmze9v2xBXMM8e7mCkixpR3yTiqycQ4vaMcgBiJnTsMRKcG1QxXat8",
  "key11": "vKZK63FPXK965W324BkvmBvT6WxnQAeTWk1G8cWrYCQEeEVZcAkKEtSvgresJdq26W5BC2L5REiZDT6MT7cZusy",
  "key12": "4N7ZcPgrrtui6zyZWS7tr7iBXBitcW2fp9K6dRnBGhAphwPfPNwvjMVMaKz43ZB8JGKWpU1XL3KDFC1qAhSm8sSe",
  "key13": "Wuvyujm2AjxTo4Xm2RuTyCJpwM1UAX9pYCHsrLWppj2zU4QMabhRiMrBWHkea4dKHLGJ61oRK3prrSgbDTtnyF2",
  "key14": "4muvm5ssrxkhAn6Pfsiw8gNDNVKdx8xTWnc7LqzYjJHWLVtywBE7cHpXWXv39WJf2LpwDzQUvptMoAa1wMJi8ck4",
  "key15": "4UMGS47t6TUL2zR5pd9bwLmKB7VXfnWfabT28SYuBG6PCmMUgNgvzXmPVc9KcSVYErTHmvScw2bm9uF9SqK1ddUQ",
  "key16": "2Et9sAB56pwQv5febxATjEL7ghcxXFcT6FeeagNmfB4Hn6HPruzyz5GQvgC8gjy48SE3HVvdJcV7knzaKTm5NMy",
  "key17": "2aj9WQfK4pViKH21wYaXsuFy2bFPLi2RneMnQJerpcUBAdrSjJSBxDt4pu1bRdJ2kf5XC9CKEFrWsQ7BXVDnDgip",
  "key18": "4TStoW8sYAvSVrYKgzbdTBYCUgru1CbGPFQtWpwZKw4mrz1s1g4ZuWnxAqQjKJ8Arj9MdJX8jqRtSZSXC1zYoxkF",
  "key19": "oqgDmvAaruF83WLWCuVb1JctmZ3JMtjLEm7rwf8JUwGzMBqhKK2tAF4ZQSFCXrMudeZ4tPH2mUtsLwJ4Aw7ZQuj",
  "key20": "WoP96FEjaNtcKKLafrRmzLHgHzY57UzVSoWdDEPoH5R8mzNMjjqDQc5FxL1V4WNtdzyYkgWmCYtEsheknwsHACn",
  "key21": "3YjseiRKXeyh4Hootk3Dn34Te618ezjSQ5F8w2gHBcW6a89G6QU5tYWKJUDMdB49d8ZMrfiMdhgyukXL1U19mKws",
  "key22": "mSBXDggZYcMtD1e3H1GrNKDWt4fywYo3HWyfRhFD5ZY5v4brdmw48btDk3HS1BoYyBmcjfJY9M9MvsTzFdY4PSV",
  "key23": "Jb3ZgLgoBsRHyoANrHgBSnKLa97Wuc8u5V1doR9uHGN18rpq7SuFvcnt3RqGP541jE7TMxNf9RrMpKyh91kNq7n",
  "key24": "5tBti2K9Kor9iMXjRVRavNiNekdRhcDA8JMhYmcLC6k1UAhsV8Vnmv9wUXy22iR4JSFKXHGo3fbJA4Eqp39baTwT",
  "key25": "fjqGY28TjzH35rkgia8p9VGBLJUWGKb6G3FBJm2LP2rt1Uk1vwZAFCnJZ25DbjLhsDH4yPZfVUs1bYqegsXBvFB",
  "key26": "4T9smy3wBWhva7ATGPWnmHXWY2wfM9snbNNRRoe4E8chjieGFFxNkZbkKfWxMSuBF74Jps3K1u32B2UxSfRn3Qqe",
  "key27": "2i4mivP3Z4BXaPM72tnq1iKaxsDdJdbtt43kVVjTzWcx5SM9UKRdWSwq7dwAqv5cxGJfnqzHCkrwh5MZq51iYDQG",
  "key28": "7rpgH5sCJyu83DR96jN1zVPK3PQN1fRxbrWejVcFDeQj892czSA6q9EJ281DLrZBsNG1REpL1rJVk2mbCVzf6FM",
  "key29": "DA2iyEEKdr5ks69cutBPDauUDDcmNsN27e2UmSNQQLuUivy133VtbhRazSCPSURVAddtXsrWDJWBnY7ofXqgaD6",
  "key30": "5Surc1nvTvteWdeSKEuK6VDazPziKEWKmt37kYnH6R75hmzM8en7fCam5HGyo9XgnoCiza3gu4qestDGUZhUeRRP",
  "key31": "2nYn94U5SrebmY12rBBhHyrAXHFAtZfYpMdXTNsvTvN21Qn5EpT6vArJb8r7wEZEqexe6Upzsexs9iPDUEVx4scV",
  "key32": "2k6fPXY87sfeMuvG91Tm24YDj65W72LhJeHuPRfogibjMzktv9dvbjtKXM1GYsunWWn6Mif1Svp1RrGW1MCMU6TP",
  "key33": "uLKuzoAuzsp4gaFPdymHKcqy9C2UwpdJQWb6kBpFdDpfso9LKEfuhH7QjGjFsWmvwpQUyGeQbW636ywTqM8X2NS",
  "key34": "2BWBayHD22jWk5yc9EQ8L2c3UHuj5gscUVvfREeB8KVfyrnrUGCWw2UuPU9gmmqMyPfHqDjoyebrqKR14QQoiE3w",
  "key35": "4oajWzbYmYzvGmDbvRsz9jGR4U3CsWpCQ8mZtN1Cso7ZT49yrBMu6ArJB7LY5QvcJ3tpchfiNT7fz8MudZNc2Gib",
  "key36": "4SNQzTPCwQWeo6U48UrrPt61s7a4qozpDRGzAdjQnx25M3BCNCgbvwZjpJR3fnz6ykdZGAdRPEpL6mQpmAQ5heMt",
  "key37": "31RMytrK88u1C1vPikgDZAWnXfwHMe1hrjoEsk87gJB1WHpWo5crEn7ctqckwCmdj3Fn5wV7tVmmouUiuGe4gUuW",
  "key38": "mbk1Rina4QByEvq3HsTcK7w4oqbdGcWnLoBBjd1aqtHGZYTwbpp5bMEH4bCfadpKM8Cq9pL18VS1dATYoR3QKiL",
  "key39": "5rHzW8CzuFArAyYeMzxkbtwC1cEJNAH87Xm5vfnGVdCLVU9zUdfwhowJofuPeDsDsYryrKRvxD2bvqM8Krdqm1Na",
  "key40": "3NKofem6Vpp91yYB5neSJK6T63f7fRLStiPJhXDX2qbFhpEtq1c2osZg3P4XDAhurbBW7xa6q2j1Uxpu9gi4uB48",
  "key41": "yDp5J94GMaHVERcNwVWyVUW1gkyCJ4TqbAqS719qBfBLjQGkUtheBa2sQANDjX6ZqkxM27FFpR4s7phUxSTD1Ty",
  "key42": "5Fnr5XyZ8J6JaqZK4ANR7HpMLyFgyzBPvcPnryJmWosWTsNZd6Fts3e7BqFk15kqXpe2XLAs1sZJf8eaz4UY22SZ",
  "key43": "2oGhA7oUSZmg7ZCGUBiMo736YijdejoAXaK9CEoiE8ywZsz3rMjf2vvwZTTkdP1ov1bXXLEe7dHVEM9xMWjfwiZ4",
  "key44": "zdFVnEfZsopRqsjdcdSHFC9nBTf7fP1Yeza6cZPrfuDSK6PrscgD5cHrrb1whe23TnW6x8qPwiQPrj2xiECypEz",
  "key45": "387WqgT1quv73voQxxjzXYKnLQE3k5PydANvvWQ7QjBjECgVScrcK1WFd3jhf6Xi2Cj3UfHHmHh7rcLtxuCocj1w"
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
