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
    "5T4y3QUMec37XHfcdMkTJ6Gp4MYtQMeq9KSTnfN9CkkWJviZ74UfM8AszRngpHf9si5CZrrABf1Ve5Gy5Q8svM4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ztyyrEgzu5T51nevs3ZcHBu7NUM4SKRnD9EHAMZMXxdv7DRxSaMvfEd7pMgJTDaupH98Uc6qNiDiuncyY5v6gxQ",
  "key1": "2pZoj23hry3ep1i1TPSFXQ2FfFebXjxKDypeMoG4MKknP2A3r8gCACiEx2fTeKJSpyw5aZLECCkE92MmwwbdYbtH",
  "key2": "59ffssyGbYAs2oUub22ZpYRJxhznSvVWUHYgX2MCfSDfXfLUNRWg9Zez6LFpAiqDuHkJ16JXEt4vDkYJLU65NE6W",
  "key3": "5r3NXVWAfqtB2WfR9NWDvQ4Jd9pBi444rRqN3dTZ952m6xUFmB5ZGn86bVZMtspG483rFHte8hiaefqFPxPuVDBH",
  "key4": "3zTHKsgqtPes5dmeRNDupwyttjaXxzwVHGB3DjX9KLjH1YaQnP8A4QcDJtSHokA2EgQuTU5K34VhNa3YEV5FTn2K",
  "key5": "2DURVsQt6aoyr5Ckv2myiB23nQ5jecSLwg2bi8pCBg1NN4PntWqkvDSNEk2Gy7q8jjTgBkHTDGt2hFhnzqAYVzq4",
  "key6": "4EfpLQmoVsy5dCdiRhxUAiJmYgTLsZxNVSD9EGWY8xqGSsDofEjkNzL6ev1vpcVvZKsC8v4hyAdeKWV5qbuxqMFR",
  "key7": "WNq89udeHef3aS5mzyTuLi1kVygdVUDy2wyBL7e4Zj1yMA673TkTYwV94NM1QaBCF9jVi2PoCATfhqBLsTrioHi",
  "key8": "vFMhUzY1pKC6PZbfd7bNdUQbPst9fWmpN4p59sZGW2LQtBqW1ZWPjYokKEcXf2Hg7h3LTaHcuduDnESQpHqcFcP",
  "key9": "5uvHR6pA1VPjpdKQTT8a8pcEgW7rivtvtRtRGz32SgtrHWQxoWQQ8Fh3Exn6zB7AkauPoqQUw6QkfU7cqp6wFrgW",
  "key10": "3N9Q82Pb6kBn9hV1YbYoDAot6MBj5bjVJ3WimpmjWCXR6hX5cnAEe49KiBCahT6ZhiQhBBqU54Tg3o5nWoTqespz",
  "key11": "2BthkRmfkgrwFrQsk1rMK2xQrd9eTaiedxEBTHp2Ssas4gHPTN3KRZxoGKf5NEFGUfq5b7gnD8rh76f48ASvTjdb",
  "key12": "4UAB8g3pvt8rpGuFUNev23chsCX7qsy4TJqmdeeQz6zx9wt9kwzWAFgUN3bx5Wu3D5rNhEjH8NcrsLN8rhXkKDx4",
  "key13": "5URkR2Rx4NRT2yEajujtVtVyVk7Qz3Na74ik9eWyM1gy4mSNpTtG9dsPBptiMqimAiSJDd2EhMRW6zSJqy3T2Aw7",
  "key14": "3qsuE7baPF5Hrz2qFY6BRJNUrfssVooYQdpFTKV9HSYGmgnMRWBzV6mbWbDQQFmZknKbKVA5oi8YKvCsW6qBaoLZ",
  "key15": "gEcjECkstzjXhBk1CpvGdVcgqPXtpKVJefV5Z4BHjznNoEK1bTmm5sWyJ8rW2uK1wUa7gCVyU9qfcmQe9sSGRAq",
  "key16": "5dcMQVzBV4mYzroHtQ2C5gLour1xGkpqjdZn1Vk39xa1bKWug6s2a5CRMMRRWSmRb75Eo5Qf6hH9FVErHHS2WCoy",
  "key17": "2W85A5r5jNonwoNtjh2svL1C2pHNDCxztwZkvMWLuKh2D1wpVTAvrrqU814qTJdUhELVb3SoKBxTweKbp4uJP5Gc",
  "key18": "5DXuHwUxKmbw17Vv77dUJe2z5mMkAKbqxaM1cuKkkmwsErHVbPhYF9NWPupe3wT5mbEsUnPjRBmyAZvEhZPPqsAb",
  "key19": "5ekVBNWorTseQ8LCu3eTnxex9LdrGCrDMKuyUdzBTntDtcyXsgq1hJV99J76qs1PxtRVLcuiHqNCVnu9Gj6fFWey",
  "key20": "5xBc1ffQsVf8TYgtrbfnDa9ByPi7Tv9V3hrSdkXDutcU2idnvopqpNBY4ikanacK8FRtm3BP3V6TBsVrMzwKvrFv",
  "key21": "2gYnm4S3TD2Z4Pqyak8VygFGo1odjuhRe5xbKJ3HmeirgiUWNv2TQNhG3GJVmntFHP7yGuzxxjAQNY5LwCcQYv4t",
  "key22": "3zgg1NYp9N7LKCHnuYeNfWwJj8YuiebbwtthePL1Hu4o6Vng8JJ1v6MP1K77S65FG4AYde5TSfzygBvxG5iWZduK",
  "key23": "2asJbnvW7CvkZLXY7vRuA5DSdFkE6tBgdNxPM85dDLS51rxH7G6nRWHQLFtoc6FhcbCrBU3mSjPAA2RZBdumczAA",
  "key24": "3SsmcfFAxtVuR8poucTN6xxnZSy6dxgLuoYLVb2GHFYzRmr7MJWSMyX3qjc33fpxv5dgNk5ZE8a32FQaBZ1V3Yka",
  "key25": "29198EhTBEw1iMg3zkQCnzQ7kGSR8NDHzWwVuW7JGf5cJzy9Mq1Jcqs44UyYTKRacQcWkWWnCqQs18ZsXinkLyza",
  "key26": "5sY6nEghnHRwoRuDnmi7cw8qDhgSkm8S5DkmLSz1pPd5cqJJvjPgyej38B7BubkRH7UsvEM8QTcnAHwPENfTfPZN",
  "key27": "4fPNjFaASpczFmbm5SC3q1Dy4EWzDxHhwHrP7BraoZqEu8isvFgjLGqwS5DuSpHmxW8rJU8w1aAEFFU7Dq71tA7q",
  "key28": "tyabDzYHdgRuxZ9AWFVgTwsDS1eTe4ALjUdAQw8oyzEdEsmEVJDe7hH8rtg11p4TPo9Vsbb6NSffcUSrVLXTECZ",
  "key29": "faf3EyrK5qv5YBt14Ah1EuTgUg16itNfUaSGWcyqFoD3X98R97Qzk3gdQFbm8De68fB7xWBqfigGw7RszPRgeYc",
  "key30": "4QCgQL12TKZqeDUg157NW5v7DWwYoKNtUs5XDCsC1PziFCsgcAuPkkBciMjg5Tv2w5nL91ASRFSYhNLNw5YXKsM3",
  "key31": "4PLLZvA6RQREBYVm1YDtR4EAirXzFaRzc1z7kvnuSqszS16hwMobChWSFVkUorCAPy3oRtsuiRpSsaSd2grLS4c8",
  "key32": "4e3v2tEZEyWKJL19QSXXBEk1t1NmvfD9V8kAd9gWvocDwE454VoAA8aTrrgpvMdJVb5eo247sRHDab2BvmPLWP4H",
  "key33": "3oHbNf5f6Wa6EMT8Zat9GYmtkzZcZKDEjrYAQPwTVby7sDCUayqgYnwXsCvgV5WS6tf98X8pP5dNkQiEFrkxVSdh",
  "key34": "2ubjwsYtC85eaX4MqBCgchcrd25Em77mq6X2z6aBagyn7tevCUQWz5pbF7mYFKH5VrDYsXSupbqZZDnoLC7Fxfwb",
  "key35": "5PgqLn7EvThpRKBdT7g21nJjZQA6SibwVYW7kvwMDxVAFKxRnZz5TKV3jYKgWg4PNKFGDKmRoZb9RPzqWmzuhspo",
  "key36": "gpkpj7mMXAT991eUeZci2mgWEc2X7QMEoj4h7QQ6R6JqpJ4NUjdFc7oeiQAjJLU2iXSo3eULGDYXAABhgAhb4pm",
  "key37": "5qjdRjvZH6R4wzbX3Xtv34Qe8g4A31biVY2EnMmdiKkr28LQb2tNbhcGPHqivtGEiVUb5TNZWdrS3pLnF1BzkKNq",
  "key38": "TawVd3FT1BZhyG4o38DCNnCtp5tjgFSDgv9S4VLyKXaE68hu8kDUQVkoJBGbnMq88rrUrHNp4FM2d5iig6RbWR8",
  "key39": "2V4txGBs1yS224xv5fR8baJUWe1SmjAkHKmjvYxkYo3fb227A87uPJg6yoELFBPVs2VSVXddh8UEwZuf9dHj4GZx",
  "key40": "2h8NX2mesKmumH6FNfya1hskobEo163vDR2tPGqRQHLrgPbLSQxArr7Ry8nuNs55jepUxF2Lcc5qheyfgbeo8tF",
  "key41": "4VzhPxKngevx66n1ghzES85htUAGWPXnCuXqQjNB1hPvVJZJPLczFkXXsdzEA64LXM1itPkVu6pA1GvV8HNTkkYF",
  "key42": "dzi6D3F3STrcE31GpEbjmhQ9tZMqbqe6WmRypt2CJWMbEmEdBSzUKZHYNGyMjbTJs8krLZpfB5aRbJSp1hme4hZ",
  "key43": "uVwVxwoTChHyVeLdvZipsFAjkCRGRdPacQpHAj33RasAxa9RjQMMQJi5i4zug6NWMHagPoSQNCJhJQgTYRXxsxi",
  "key44": "HtUCKogU7z6LkT1qXU4su61GrPJqJdYcCy5Ca95W13DrUc5gV3yNFmftN8WRgc35VfCoJB6KA3Cquyh2yPVMM33",
  "key45": "433UCLRsGTBkSUkrwjQGFh7CLVWpLTxcxETRq6E317u53Wp3cT3anCw6FjTWN19T8V6tT1bhVCaiUJDDqtaR1Znp",
  "key46": "44qgfk1UzeWx6mZkXEaMgdDeCb96MrDmEU6ffagWeYFM6uwm8V8nkqvWTe4JLwqY8nzMwX8w2vaLjM4qAp9eruFT",
  "key47": "4FBNVdSYexKPFADA6ewTJc3S4JeFpMKxiTFNnEHTE3EXGATGnUiUZZhhwszwLRYx2TfVELtzMWd3pnJgwDsEryrS",
  "key48": "3kAYsa97us9VECaJ4aGuDRLsTkbKwbz8s8ymRvsyDKesquZH1Lw2zs7okgzMFATdGgjEHRsrqChSHmnaPaecYotq",
  "key49": "22TV3mRSUdiQ6rd2jvEmLAJ5srVBqnoeKpR2PnFvRFCHUadYaCDw33qaLjfJa8tXyTeXnjWxwzY9qcmNmYGjbLZY"
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
