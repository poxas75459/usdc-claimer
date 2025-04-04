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
    "47LBuzq1siH8b7rwjMJwB2ELjuXJEsnsGF9zaqHSL8vJo277cdBvG2TspXdu4LqcMkyLM996j79GpeTNC3WsocvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KXctHYu9SJEBEFCsqFhTAt2ctm7N51KnepN9tMTX5ojkZ3Zqr5kBonbVbB8wiaTVEZKVNdmjnQzRuKZi91EKZeN",
  "key1": "59ua98dTYXuiH4B5JXL8E71vDDeuWbXeg8EnzStopoBbWy8aK1YhNLtznZfnGkdpqJ1wsPLr82qB1ZGZYryTdyej",
  "key2": "3tPK2dW6A479s2qmtkMCExJnGv4GTMbxNDXvrCn5jRJGSuCTS5NUdASD3kZ4mEPzBcC4EADuLiww2CuAt67WSGn3",
  "key3": "4bifEcaagyKfG3GPMhhVdCTh2HwYKJTbFUhaQE6yPoTEX1wRXvJd2tSwbT4QxBrvk7UfT2gN8bpenLuwf8PzHZvr",
  "key4": "8otQSX5LjkxMtfDUCPu14FstFVEEuPeAQ3d3erHxvMws3E33cf7q42ZhGNFaN7ZLNskJAxduxYExSkeN2ZTRppj",
  "key5": "2BDb3gMrKa6dAdAkERwLAQzziv6TCHPBEa5MiP4tbdhFUQ3a9NTmv1MytCMdrtEbNb2SjU1XGLvSq4GxtKptw9BK",
  "key6": "vU3r7X9fpwRSYFWmUEHn3r8him6EsrDydL2Mhj5icrmPNTY8BxGA3ZQfAa79omAs7s2PfX3hJQY4hkPXS8yjQxi",
  "key7": "4hTxLMHmxaCietgKHbCphtcm7hjgoy88tuiD6oLeCeMeDs3waiXQ8EwvrjhTjBrQ8F61eJPopYMtY2Azyh6xzNDv",
  "key8": "4T7H8tgkM6s1JivsfcvFx4RBm2ypikTqLrwjKJrdZzAMY1LEGfZ9DQzNFyR8NCZs5mCa8Wpts2XpP32pd1MRHQ97",
  "key9": "2hmwXi5RdAD7X1LZ7rVJ8SuJrvoCtkbMKZsqCBeoFtboPu82qGuHT73PabQ4eyVrenPjPcHi2tT3MpBBhNoNi36V",
  "key10": "5FFukwUYLqeWAj2t4XtTq2nKktDKoMpTWW3GRZawMWiQ4QzY9CpaZ5265zurNJNCdan7Jfr3Zqgg4QbtyQvcGfZ1",
  "key11": "5yCmhv8mf6maQfaNRb33hT4wazMHLmpDMY49R7dTX2JUy4ifx95CyiCLBJacNSgM9ewKxjyRrDkrFvVF6btD426B",
  "key12": "qattWTva9eUrfCza8Y5fa2CKFbgEAfRErserdRqWdZvZrUYQf8aWf4V9W7hgpsxj3H5tAgPAUnvjQFg5eXCpvrL",
  "key13": "3u5vLoCXP6Msc9ySXDgqEjQTWyN6P9v4uzS9GBdmD6rfkb4ACnJZ6mfSg4E1miYkCZTByZSPpxGaATWqe4Mbgovf",
  "key14": "uQCV8ceDsA5eNRfs1Vd9jrEfawcjuPftw7rak69ZHuMpcntYw8Gu2XNpB6q8b9BdbJhDytFMff3p18QBtDnwc9b",
  "key15": "2SFWGWVWV1FwrVTg94C82ZSHMAoDd62uc1W9Qk9QgQTLnadUxqSJEmCL8D1fgAZUUS7VJ6bVFv6wBrcuHkrbT3dh",
  "key16": "64JvMW3iHPYgm6hV1dpg1Mk3uW46EyJQ7a3KPV9ZX2SKC6X4wL7czgDqp2nsZtTS66SfDJcW2pNexaTF1KBierWf",
  "key17": "5GW3BnYhwZagCsYENLoUpQE6tN9J5MkXhPJcZWfiHEsNG76T9pKa5icDAkB6hzw9kGCAHRQGNyQTSs8YE93JgUzx",
  "key18": "3gCTGK9aT69nweaCYvLX5n6uXfVAEQnX1Q8rJ2XMc713NBPMJJqMAtKTahVmMwgDSBgrUo19BZeRTP1xUvbr6hZr",
  "key19": "5hhqFCaKBDjCcwXW9vp2nL94R8ffB1N394WSVeKtKtzRomWydmJsEehkTaApk9FLFieu9xa3z4iPyNgK287xLUam",
  "key20": "38Udnk4jSXJ9ZtTsriPwWEB9NCWMZw4vnfH2BYedxvigJVZxKXgKkE7bq1z8RrRkEuxQJtJhrY6UfUW1yYe1eQ9i",
  "key21": "4fzRRJeHQwXPfZbRNjgeU6WRHVYYqPqUrDshBufZy5zUHqLqG2e1f4FTEXo6tnqpoFRNxoAm6r3FMcVXiaCuoKvD",
  "key22": "2kk5nQoKxKipTaS9an7Njmbhq5QgAZRfiLAfkNVJsGsCgs7LzXSWnjoXw5LViD51kpCSYHP62FqhVuGcDUtKzJxA",
  "key23": "5PQQ2TFLKFRSgSvysPeTAgbunQiFAmix1h4hhHZurcmCSU9uigTU7XjfydLCEe91SeBXfGeNhnMGfm1wHBXh8rB8",
  "key24": "p4uc1NJp87dmhbv8H3RWhxf4Q7xr7Q8cST1DkDsAentBSwVbzPMnDErwT5bsAnvrAVQFx2cK7g1S4xkyDEfxQ8s",
  "key25": "3M4BCWdxCV8onJGiCsWaCLX9LCcampPTz5xx1qzxUSHihMaQA7JgRubGg37AzZdPT5YpEK7RfoGXMiJ9Y12aGivG",
  "key26": "5DyVjWwN5d1UagbBCta39yYqSMDpka4ZQMwvtH7v9K8wfXWXnhqTJi6n6gSE8559PNmrzQA2FMhVkMhH4v3g9MVV",
  "key27": "jUyGgqsQDo2Vmmp49qTMv5VyHQvKPb75SYzbsHp884AZkXehz3Z22c9sPccv3hPbD7kMEz8BBfVFBWmqmhxqNBC",
  "key28": "317SBRMsfafWscN3QXDtZVhbLi4AJCCZqP9UXyt7UT9YVxmvAJeCTHDKp1UsXphihDgs4RSbQByC2oic1tZPqtfk",
  "key29": "4qQrdjHznSVtecFNXGsUzUxTs1AmoRETQhKc9AoHh5beGwYKqENkwG5jEPffhouzxt4ANUsZ3msfmEBXdrS9h1Vu",
  "key30": "UKBNeHXjGP9CRq4CYyUnJWXt2DLBzwKaVvTGMiHcoTphFG8aiBERLZtFDZXmUtFvyTNKL3JaQWkasixCAgMokz3",
  "key31": "YFXHr9kXhY5zSRt81JRR7DbCqAkdSKrb4VcX4kTCzbVNik5LvUkmqpYQw8fwP7hGCBMSiC5GTZAjNzeQYEGLL6W",
  "key32": "2aL8dt8Zb45cyFLw6ZjNJXDj6xxii4NWBQhdzLL3TdbeAReUjmv3ojg7bRs7FwX7FbAGsKCGCArPrfE7tV5p21EJ",
  "key33": "4BLLBFXWBJc55kRC5jD8iZzzxQAzUCxeNH2PBn6QoTLnu6YesSMN6atj43jCpvs3zFDgge8gDPDthGZr573Xbop1",
  "key34": "58qNLs4dEwEXzZJT5RVuqHaCTypLiZue9RCdheYdB7bPAk24hjBqnabDJ9XmmYpiN7ypgGSi9gin8staTUtWPfFs",
  "key35": "3TZ6tSDcsjNW1cznY4eA8dQ6LbaS7wMxZ61M2ceL8Gve68MujCcKVGFFB8Du9wDLsPLJDbJ8KBLvzUQ1LJcgLciZ",
  "key36": "3QAyp5Hgobiztmt95ym1bHetRp3VVQfgcyVyzNNzw48QFUbb63koUA2xED9rKVNYdxNq7sVfXNa8KxjPLhqbgaBc",
  "key37": "4u7s5B8HV9CAGGnwAYuLRa61ZdgZHosCBgcY52aAUG5Jmh48eha9u8AzVbd4YRLyqukdPAftsDbb4AVm4RcmS3yq",
  "key38": "3Q53Cq5VFHidN6uUBGSkEChWk3s1F3qrW9EkMcAWWsfSn2HSV4P6HvBJWR8B7Un9MeGGqDq4ukcBXPy69hSzvgyT",
  "key39": "bkqWEsGg2A1tTddQ5e4S5rxx9u6q97sqRwJM5ENgMC2u8eJCqNgJqyRtvZKJ91UYY13EeR5wnucgemYGBrC7Z2F",
  "key40": "38xfsTP4X59kgUrNiMCodFqdBgVsLWvHS3eyXT8KVzmpNot36HyaGaHdhhR6SjQmQkejWPjytXX5kTktGpzHaTy7"
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
