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
    "yhuA5PitZJU1oCNZVmcA9iZbFZwhPsPj3rcJN2zAuyYbXbCnj8PYy51SEYjkFBzZVyeJpwAiqn4yPpmE6ZZUBM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DzzwkrujyQqnt5Afxgtch1VQsj25tRC4U9E4u8BHrbWj6BiuwyT3edbGvJNqti8U9cme28XRaHfNhhVHrLwzQZy",
  "key1": "3n2MFVBXpLskKELR1Pcsetyb4iQTt2q8XjTvicHfaMPiKbPkAAu4AtK7mHwrNRkRZvf1WSX6LXib49qy8T3AsZJf",
  "key2": "3KeTQVvU4CSiatdNPjnahsHk8BArYTzox1uedyqCzaRiKxNfwtM55UwgbLLFoyb7T29msZxqPd7VFwufsDorYvAJ",
  "key3": "ED993pNds69zgbze2MxrZPwSVbAW9pv3QjaHT1iY5e8CH1F3UWCY6f9hx2jGDw4Nchmb8Kenc6Gq1i9KTLH4dUC",
  "key4": "4YgTjoHzxFnHn2yUaQFPqRzu3W9yzmxktAK2HAXhdeKgfRqM8o3HvYxYcGZDttAwhXMPf8VjcrWoCh7yaRMzxBZ9",
  "key5": "Cuy8tZdT87KgXBp1W5tCiVi4YPRi1UJvsRG87cFNx4zrQypN64V5JbNjDiNnr1PbzvkUfK7UJedy81AwiHcaiyw",
  "key6": "6QPYyXBE3fJ7G6dQRE1w6nVcT4o7VksqjCZXUQNc4LqiKVb1wgkXx1hinZ75rtTJ4ABFnfCgxvSY9qFriVi7Gee",
  "key7": "41eG9Berx4WoJScaWTsc3p1HpN7Xvcq7mLfLA9iLZWPs6B9Mg6uE7tQCiRWigkh8KAu6pbSXBbkgxSaYFoC88PhN",
  "key8": "2Y9z7deWGrb2LxDb5hYtTCuusB5X7ZqVdjof3cNEQPrLc5FHvUswakHejeoaktBvhAJW5xj7QLSeYgJPjGRsNB2v",
  "key9": "36xCJ9QH5geoBYSFG3H2ig7DGWzZV6iwe1vjbohsii45dbZb9ejpjmohvyD9Q8aeED6dHcTfPDyiJ6YSWMd64HB9",
  "key10": "5b3zGckLP8UJRg5puHRkKHxpWvD4DBhRJRVoEdEprgAEWDffTbd3NzombFVvSn8qiHN1LJJDu2FaHK4LnmUaZsXr",
  "key11": "2biuK4FSEuom78v1DWa1qcs5M6dWorvMmkTmkBgdYAPZJ54YiYH2YXLiZp7QsAnAk4wPdh6Jkj9iGBfr27eJ5j3g",
  "key12": "64bCZZJEk7VSqZdZ75CDLmuPg5p4Sjwftd179YgsPdcKuKf7nJ4BGoNB8kAeYQTVeDiLx5uqw39yCYm6Hu4uFamD",
  "key13": "ywn5ZtfKEyBnp9vtPZEiCUMr8wVVU5AKMEbEHBuko64bCLipvimGgYGpyaUf1NqdPzjoHCVWKqMC6Q92y3f7gED",
  "key14": "5kk72yeJedN2YC5kuhuUJCzoP3zhk96xKCA2vRrLUpxZ9fDszmUjEA6DQ5rLoqNXc5arJYzNkhxv43tSKAtwkAC6",
  "key15": "5zd3dvBeQkzXqohvZm6k14Z4LNB9ZeTMjnYE3BoN5xgkfLqdTkoz1CTCU1mwzj427kcHchKmoonPnnVEemDdoXZK",
  "key16": "5jmqKbScYmUWp4KV9pEd14Kfvi9yo8RhMzX6BnuzNFAesUw1wW7EsEZGQtWZCKhKirfsNeeJRdkC3BuKkm6VFBjv",
  "key17": "4PYRa6BvvtAFpkHPtfjkjWiVyC2wKBZfZywxatHEcRzMGYTY2Wndv7XTcJJk4bE38ouGbU8bXFR5KNfGdUcSEwAA",
  "key18": "M7V1R1TXbMZqeSD2XSdtUKShF2wkqNFTv7btZPgc59oKR8Us77pwJEVL3weEzPQaYC1eMMZc3W3pFgZ9Gz7uLDP",
  "key19": "hb9WzLXS35upKCKQoLcJFzoiSEZw598iVAwsY3LEKBSc4Rkq46kEiuL1jwykLciDxycqtVvhd7FtLQwbS3bs4Qf",
  "key20": "41tFw5yZ2p6ZjM7R5hJ1Zz6WQ1zWsCa2xj7J1L4NK49FpFLeuzs8f5X6hXjcw1ipPbnQxuyiVqMF9TJGe6siqAse",
  "key21": "ziVkEfUc8Yoa5HqyZ7yCKQQQECgvDWpgCiskJE74v8DeUc5wnqCz1wACxJyKo5u9vAkYnDMAtujAf1D52dfrhiC",
  "key22": "1AfUzbrbuDg5oWT2vAgufM2KJoNYEakBkygZHbDL6j6GC7motB2aJGcUGjw2i74yJoF84FEAo42BNxyfj7bQsMU",
  "key23": "3Xcz1Qqhcsxn9ciGVzyhUTUKYUuqgRRLrPEPGinapFY12yzqKeC9XhHdkAeygZcWtjmgQ5MhCR5NFHynPA9nhBqS",
  "key24": "3MLrCTzTkADV4wGA57fueMqiQueVKeUkfvVEUTWkLixsQqibQJS4LBrheYpT9zm6b6DgX57oWi8hfRSbGYtwkmnJ",
  "key25": "2LVJMcTJqbhoQug8b2B6QqzwDX6ERETW6gsrNm8XC2nh33K9cUvKAFRre9YbYqp8SYFE7FMvXynGoAR9tRhkoUWk",
  "key26": "2M8kKgDbQjzoRSyUFN9xBBLp6FCVJFHc41bWJhVrXPhERSWUbZFatuEa9R64yybjEo6rDNAWxWjGkmZKybJnS4LL",
  "key27": "4yRsdZaVUX9mvHM3BLnJALx5B5DzHh2mKh9GZWpDwypu49oBbBSCaN6qmGNkLR2FCiCnkg1JsU3zTnMYBo4sfsFY",
  "key28": "i5cdRfuv1ENyKZ81fBdqduB9GMmRWJKRbB2XpfDBtQqyqnJZbuXGtX6hm86Cp3nkQV3miSoxQBS62wHhqABLfh5",
  "key29": "2iPqTAUAaG8ANtfkJymW5YRNx9x5qdM7JD54HTESBydFKqLNVuDDC7UYxHdqdZb6VQiouRTaCtLBfrrLYT2Mf1wh",
  "key30": "3QE2q4Yn2pZ9NmA9krTzVSLMbZ6g2tJEP3aGRsQD5Z8zyJpePP8VyLG2TdoEng3XNHRbkf7P93XkropMe2uJgzYy",
  "key31": "2yhP7tv1prxLfog6wYLW9dw2uCnH8VXaT7pFK51zhUEYFfZqAXdLp2Z8CoRTbFgjz6GzTi6z9o8DK2ao7DSGeUsY",
  "key32": "25dBUiQGi7eU2dygP1DLzyPs7Hut8xvctRqFDnmekmmcLsBmNZQEYgXG9ePV9y9rcYhy3TdoN1DwU4n3e41f1wU3",
  "key33": "2BUC73QxbkpvbCrj9PVqfbAiXqoUzT7dfRZp81w2J7Sp3Py3n6tNHsBuVeAf6tmzJFmiMqiUEDeXsPzMVJ3DbVk7",
  "key34": "43ffgtBH3AJYTbDtAKAFwW3QJNeyr9ZSkwp5QG79ZWKeTGwcRnY3Zmpb6L3owNiNm8FaMhSFVGbBUDdJ16nNLrzn",
  "key35": "3SkQchUCoZ7mX8X5Ba4dCA2nqntqYRJVrTzSzBpgjZQZPGZ8ChwPxnhRPYnEgiWfLQMSHLiUizdNJRaRqqgC7yVs",
  "key36": "4haGh3jMQWWdEPBb2fUJBkx1tisd1DYWBumvNpsbNqYQz2npcSsKM6KPFtGJnNzpfvcFuS8wjoykLpSaHhhXuaen",
  "key37": "2PDjA4okCNaqJFU31FVZUKx2EgeZLAwQSgRb9eT1d4FMxu4bVg4L15WtMe7HUDD3ck9Q1oR7HQYvup91shBfMXFX",
  "key38": "5maDu4NYSEhrhQirnx9NkEamHc5rPqgPZAAQZc9ZrtNV58EJNDegfKn5ZcfK89wLYSjrVkwdGm3DwwNF8HGjG1vh",
  "key39": "5CwAVTPMEzonbhiiL811x2xkyM9MJPXsV9BvA9KuRjaS4TFHEihCZytpwrLNMSQkK3WD9Eaw2J6EDtHa4Min6PDg",
  "key40": "7ED8mXZ2SfDGPgp5XUX7tfx7ctyELDgWKGpN2XLfRwELAdCEd1fFuWSo5saHKT6Sb4A4jJLPnzJ9X8gA9T5mnAi",
  "key41": "5mAeXRUwBwxdfAPPKYcUsvSxKZqQLhLJN4tWAqECN7JcSvZ7cpFnwb23GyjmgwQW9FmSJVDhAgE5h1bKSpwPFTLJ",
  "key42": "5gLB1GuYbZDBpqQtw1yzDfCXckixYyuY4joJAGN6UxR8r75wecQCgpvy6N6x3JmGMKePtYK6PPb4WJRku2aZTCbb",
  "key43": "29Rgpa4x35UaaWqeEi1hLU4qVa1PaoNze1ybR2cBGhcT9QBH3jrUa7qBFX3am6ftRdwUHiSddruyU1w3Wfx5Jowm",
  "key44": "5HKgjUKehFXzZDMmkAvHPekxMJPcHXEvvS5jx3HwqRwa4ymyXX9GsLuVkC63ZUvHPo68Lz2ycTfXj1PkhrCdw2Mt",
  "key45": "4fasspoqaypBcch5ATchgFjHK4DNv3seohB7MU3uhjksWMxccxuQ91rij36UUQsDNp7XAqbHDigEax8cdVzuDXEJ",
  "key46": "2iV5BB1jCPf3eJPovHSJeVWLXeFnUEeN9RY28sgw7EDZWpQdGbNY4NtJLYLTZewLgrC6n6KaggdcWCqCM4ft3xi4",
  "key47": "5H5VP38T3Q1VkqPZcuMg6dLRxq9uaNNSTiHt1HZxWc9YnKGoZQthRQ77PYZ56DjVqvKYPiqrPgDXEZKwU8siRzhw",
  "key48": "4FduwSdQAj39oEagyg4JimZexxe76VB7JANPtyBicH4Z2TEhzBuBBTWFcCFmSm6BpM8LerPZivKinLQ5X61ZEugz"
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
