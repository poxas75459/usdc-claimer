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
    "5UWxcBmpgR1BdBb9b16kfZgxhZ6fzhRg9rN9vtXYSc6G67RGgye7Ba2raXiVGBCk27S1v5fhuNPULfnUhLYRGVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3omgRS1woPK3JpkXPbmean79vJqDrCXUvo6uFSW3NFWCnkxoK7Dnvz7fkcRNVVy5GQLj65xXnXVDYAjXDEQc5ef5",
  "key1": "4Z84GwBvLgRkPnQxaYHuZQqPkophvoxwwZG5s39C6kFrxH5dsRBvsSqnPrn3uiWLM77p4PXnhSnnBpuueBfuBn6v",
  "key2": "yM6JnEf4P2JVaea5KQneLt4rRmTtcMaoMftd5Q2fwFwZpKuksrs71udTTMqLJ9fEZVY9k9gcauDci8ZJJNLqk9q",
  "key3": "594SrCugHeiqzHYnmAbw1zvKs9S72mA34cWkeFmAGzJBg9wRTMW3fQK87v8T25U9GxPHnm3i82mDSUsnx8k5xyDS",
  "key4": "57ZrpQNRqeRNL52gDo93dAbg5XgMDSGxkZ4Smia838kf6dYCqF9L1wGysDdhivYS6nWPgC5TX5LD58oPBEbBAM48",
  "key5": "UZ4pocgws553oxLiMqv5V9DzTwnCz2mPP1Y1ZoTxLnLWigKUFh94qgzne61ARm7R3ZKdKS1t2H5qgxYcFVR677L",
  "key6": "3BVmB6decmZUvURS1bH3kgQmAL7FhtS67qJcZZoykmwMR9DtJ8hU1Q15298w5q9ySzoPvsuC7cP8YBYbPUXDHRQn",
  "key7": "541ncK8SmatTK2tNZd1Lc5u5a4bQBuaZebaeuTrtpMe84zkjeeB8oDVaGvEm94ttYKdPvd6Pg39HrnJ5vzRyjt9j",
  "key8": "zLGctNHakTyXSMVkguh7UQtuVcmjeg9zQPVQsfcKTNahHqpJEYTa5NEDeffpE4yi2VMyDnYDdfhYyju99KsjW9N",
  "key9": "2ED8aJ46zZ3UwVxyWodLGJuH3tdD6xci3gZzXstobmtPvdXhdRTSF6wvytXwvG6yGBStqy7TfPLKmB8pXSQE7yFR",
  "key10": "5KgxbbDL2oyJ8b4XJ5KnBpkerBjC2sovusQ2cvCMxhW1taorB8sw6UwNLVent4mabz9B6d3HJwrymjYiQFKrR8Ws",
  "key11": "3tSzSiBGmEErGxvJnVkV6iFo381VUjBfRtsgUxLYQYTFGfZCgf3w6vKY4oHvb5AxksKySZ9T1KdyBfxEgp4Hjd5P",
  "key12": "UKiPX6iGdzgtVprZrmTXbK8CKafKNXu4Vaw7iycefdYJpdrneePy6txDmd84E364uiXRuPsa89YCrBQnTwjdYmN",
  "key13": "61f75uRNez39jN83fDGZdMT3CmH5sC8vF6A5M7GgJXfw83XAcC4rbgXx7k5RrAh3C5XqYQyjF4bCKGWdM5J2DpU6",
  "key14": "3kM6Yvw5h5efw5316CY5Zpe5Ybvi36uHeytrboyvFbnUsANC5y41brtzu29sZLeLkucAgoJSRKB4jbpnETt5ZZG6",
  "key15": "5UQAX4HMfxmJMbcSupsoQXgjKWAdBf1hKvr2vuzMwRdvP2DwMamXMsFGzPgn6QKCgYyi7PqUNMZxedmtHzKNeozi",
  "key16": "5UStfg1TuMszjYtkSSHLvGLjcw81opKRRQyRKkK2mnKyLgzXpvG6nNGZnfGKkbTBGTiaVP5XRAcQ6gf2hEPrffs6",
  "key17": "5WhqDoC7CMvPCq1F5uT8P9ntrU2yQdaeHJAEv7WibzSLJdg1haTiXCFoMH8JxDJAF9u13b4GuZcfC6vKhmg5Cjoi",
  "key18": "2u5ikA1Bv71A3hKfnnjEUsFXX7G3uzpo5mhs1dLXtm76wyxH2fmg1vMRfhgNegmyQyKvq5FDcGbhrsPdR5vM2ze5",
  "key19": "4zZcVfg9TsbDbSewuFMRyBFwtvEYs1CV34kYMqemjAef1x5rPpLh4BDGkDbFgPtcxtJG4AhyUtvkLCtL6hFRz1rD",
  "key20": "5BGWET3spyYL8xoX23XEakaS3i1U6UYi8YD65FXfjiywpQ35JYMBZLYpXmAHJD4BC3hhEeZG5sy6HyCnYrzN8MHi",
  "key21": "3tJz7VExm6aswv67L5n5H3Lrf7crkC7TSroH8cqUiWuwu8Cog1Lt55N2G2oa6hQGUXoMKeXNe2en8sKpZZVdtE8U",
  "key22": "2WkHNv4L7uVHTjYznJa3znmMafYJKT61FHZ6gtheo5BM3mMnPp7EXez5wZoTPNVtqcVwXM3vzkbQKPhdsKxzXbkL",
  "key23": "2iQxM9zpN9tz8uNTr1ZND4dsWqb9JmxUfALs937k57PAGmgbv78t8GJG3jec4R4iBkjMy6Y61enzn5SCWHjZ4LdA",
  "key24": "dDjE96zWJVjQY7e3Ro6qcx4s1YZgiTdtBSpd8oqFNwP88kH3hEVhidVdbDvvxmJE4oyey7i53PsrzzLdQy5sNWV",
  "key25": "S9cWN7zWVMc9sup2RbG9mRGXv6cCAnsY8PHBjsB83D7uLd2GjbE1tWWX3KAK7tTucQHRmiYUXeBFYFHzkW5FVFP",
  "key26": "4sj56ahSRRQPvkzyEF1bedi2QFfjzvj3uXcR3STCkHdgn1DpWUG3TSCibYKiDyu3xxy5ntGn1KVPRxUd8krgozpJ",
  "key27": "5rJGJdXbaoHhSYBf1TSmprvRrtMm3tpy4g1gbgPakFyniJEiuKw4AimjGNWKCKAgTkuzvL5Q6987jo21aXYLvZEy",
  "key28": "371VkU8A1Mi74yqacwLbjBMpp7aS6K89nGuRqSfLma47vtcwfKL8LZqBZg7rGzS6z98V6pbGgk1VqxV748Vq51QA",
  "key29": "493qjTJSvCdB5Jy5MYJAxPfyG3QoenFyt8m6RjTjzWk3LF8D2eHE8SPCunLuJBppD1HKMGmZ6YyDQjhz6pHG9X5F",
  "key30": "3fveysm5cmTf3UNdx9DGWmkvcySsr8svSsSsARS7mj2AmCt6W9E37FEAn9vcdZdbyEBnNyULB1KHiqoSoXYTeq7D",
  "key31": "dDSiUN3k6g3ic7MzTF9kN5d8u4ALcBRunyrrsM2qN8ePBD8sNxN4hkBv4Qys9kFis3SDQjEuHqXD4f981LKR6YT",
  "key32": "5XqjSEWEa1jUJ4fSmKQzWavBvV8iVWQZizdkwwuvxzXhdcctE6wVvDyEgxjm8yXAjSitaJNXMH18sFQ1jKJJL3GE",
  "key33": "4KcdamSaqvRXwzCKbbLvF8qfN5LxQobCA1WZ2w4guxqbdWWkBGqme3oLivPJUQ7d8y58ApUMWarp7ng1frefXCFx",
  "key34": "3uABKGLEn976sNN7aMTvUgeSXt9xHBoVorx6QSeDjk4QsqssCjTKS4j6xHtDNiKZAwrVGFghx6Co2SequMhQc2pS",
  "key35": "66xSFqEb6pXyU95admQUS3aNp5bH3Y5pX6HWMbbQ67fKyabzXjaW4gH9e7QrCawh1T2RoT2wThit3eyHJ9jugmJh",
  "key36": "5Sq8q4oL8NbDNVQSTs5AdypSBEmg5fPyLBvcBnqD2GykJcYby1AP7jbkFLwTSrSXKGmCcnga9WTc5N1xj8EfvrST",
  "key37": "48kEiQZQmymmNmsPQG5j64h6Nu9ErBe8UohQENHoZoyu94cdtoL8LfW2co8cuTEPG7P1dTGDkxHaNiGsLubvSdBh",
  "key38": "5sp233BXYm216eqM6bVtfaqFi1hBZQXjn9zhHKuTwPPt4ag477HqyQziY1BzyeP7mx2Vc7uKXVWacxSgrFk4tiEy",
  "key39": "5rFBF3PGDfoZaPAa6stG97nTzcWXgkfWmNo77edMA1fFvwP5X6pLDPP5HZ7qCd96kfzX6hmWHfJAf8Fhy1Ag9StN",
  "key40": "4qDE8HUsW61z9QTTUYGQdmkStUi5T3XFZuUWRNrq6EJLLSuoaFvGdMZBPJbEtPYjM45tkZK1Ssmgkjzccc5qKbFD",
  "key41": "4U8wFdWgzkfUcsbzWhu9mDUnUSytDQn8cDHXLCwjhwzxRUkv11kN629soVddzbLhkRbJm9ouxiCaAuzVPzdTHogf",
  "key42": "3HrNnLfChoS3U5L8QhuUPEYq1muZhHf3UftBgXjmZgJgJMoHbay2zyQ38GLJQP5ck1BVa64rLqzQ41JsT1y68y9h"
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
