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
    "5NvWY9wTeqxoYhvsEJUS8HX5BTmSSy49no5eJ1Q1FEik1PAemnGNAUkXBA5XbT7VdATg5zSfzpjytEpA16RALGLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mybstjDc5cA2dGJyUoQHDnRvpJUfgbFiyDWrNVHDqntq24BnFyGgySzRq4xp4FjeYwvFtd5pyCJFzBpLEXpjW6R",
  "key1": "PUuYFsKtoatvECuhSuzaDkgGrjAF8EyMzXoVLTkgRwbFHPWjbow3NRhdmC9qVCW32CNKHBBHD6Zq3eLzmbLUAab",
  "key2": "6Crv46V8pCzmcgPqXCGJUR3q6482su4fPpZwxfN1qFmN7furs3NMWiDR8FEcAtMqfWUaQrWU9KGJbHfnWdNvSCg",
  "key3": "5kwgBH3Pm4Qjxjs1c3kDe12efngqczPwimb8jwhrV2efdimrjehziNoFdgTnjThcq8hkRxiiNmKhWk9Yqc1BixvT",
  "key4": "2mm8AE7b8BSt2bVZmcbEjox38pkaVUVrvgfjJkTmYcVh5HW9FgtvxALzvAc6V3RUnTsUbcWTpnc4nbZgSZkd7FqB",
  "key5": "3nhQzjJbG5GirVfkYtDW46Whk2aj5JrimydKL5M3apCxqBSaJqJKX8FTLP7ZhVBYfycgoyjDqFL88JGRyV322MS1",
  "key6": "toqNRCN6TADfR4k1N2a5DmxsR9xKFdyrjayfMjNFTWHC9h9WnMRSVzrF8rZNTpXAmJi7XR7PvmpU1QGtAgPdaM4",
  "key7": "4ejJm7XfHohmFijZVyoZUf7rRK4uBFxNMbMnZosBm6r3XP9pBVpVYhCKDuvBnjVHVTeeM6RzhkYTKbHj7etmcemF",
  "key8": "3861pbnQSgJeLLbXmTut26hqdBbsFFVgm5F62iBkxDNDtqPsWoCZeLkGZpMwYeJVpXnN6zZRSkJ2PrXibHHpG36c",
  "key9": "2TfPGavLjZUxbp4VYKBTAwRd6B698j2r5p5uqfmFPeaQ3vqyYwt48fA9juBWxTDAjpaQh59VtXL1aPqjUeRiyTS6",
  "key10": "2zeaqKLgaRh4ZTF4K1tA6K2z2i3irdHbAuzup99DfqExFooKC4u3v9si6ybfsX7SbKH1s2kPw2NZDn99V5qLJEuy",
  "key11": "2VD21EGUo56eQDksiUV6wv5yAAyBFeWXeWqy5355DyEkTKRfR1z7M8wcvB9f5cnzoYb6soJLbp9fy2NQXDDdthPm",
  "key12": "4YpXaTxwKGebFnBkX2ChrruHPPV3WCs4CXw88ytCqv6uiULDAuxfM5xKxQh2HGHWejcT5aXCgvzpYtcx8UQ6yj5F",
  "key13": "x9NqT4XSRF1LpNf75B2rFZVx7oqX7qFcSQXBsQeB8Br1Rw9SuSgRRokU1j5BX4fHMj4iG4PSqFvjjRhCy6aziV4",
  "key14": "5D96tfFT8ginSS9SpFS1Y9Xe8i8hk84oSpaxFWct4nxJFH1JPq127V7SFeJH64vRbJMBE3DfjkpTF4GWQtrzMZYK",
  "key15": "54Djw7JgFRZKeNoSSqtWdfF61vnwjAC8jxMkCSYM2uWVu8a4CfaUfyPf7EXAPVqQuBimBHodk4D5Vp96JUgc2v7V",
  "key16": "3HNr8nkHrLpXj5TkwnLyxVhecY24qeZBgUuoKLxTMUv8J7sWPj8gL5TDj17PayrRHcbzu3YHxg5bCgWGumm75wcC",
  "key17": "51CyA3bftgV5uuRgbA1C29USwGWjadT2brBzNwabJtQ9c8f3k1c55EfESkCbxMW4s4u5SBBLiZS4EVVScB8z4LJT",
  "key18": "5Lt2AwaZHuSFaXJCec9shNZsMmvRsoUJdxiS9Zec2sTdMmApnYd64EjWBKiw25Q5May5tu8osKoipMLXzsWiodEB",
  "key19": "3zGXZ19mWbnXMz1m56JT16sZfu6vDYTVcgK7ATgKDRkcckdxQQpDQPsoSuUyYhkegtMyKAY64DHthtM5xQVwRR43",
  "key20": "3H7BnXuJTNgcvkYYYGTvYfewsYsYAWZH1XNAMUGt29VK6ePCHdrFiwPBftEEbVfXU2t9GtuYnzaio4WVjqnmcENx",
  "key21": "3ckPV4cuTqKqipKVJ99Xv4jzxcCkxEW4nhBEyKxQhy1C22WWjxdCDP2estDxtZ9JgRLESLpv9FgYX8LuNTyqrkz8",
  "key22": "59GiZRi5zCMNqhToqHj2488FvgYC2wwtRprwBEd8kziSkHFetF8mypE6swXhGaZoaSCck8P2zUMCT3hn73yVfegU",
  "key23": "3z8PVDhpAwvXtFEeuuDxX9Txd7T8B7WEtGU92KovFYQxeFeFBNimHjpPamhPc6ZKVQYrwoy1ftrGAYuniUZxzus9",
  "key24": "WUrKrkdir4yBLDYs2oejssV4A1LUaCU8M1JHia1g5QsP8gWTKE4T71VBBNKpYhwR96XVLkVQnZAhVcTfPjnDf5V",
  "key25": "2qzf6xd6ucMo1RKNdyLUrngvsW7bi5kHFtfnxcSDDuyjETXi4jTGh2CNLm3W9CzttbqsJFoC8g6Tr2XscbaWTMVu",
  "key26": "4qbP7JBEWR86LqKeDrib3msQfbbUukNK5DZDCU5sPmUFqebNhbEQUFQ12wsEwE18cWb6kRGLfKVjkANFjd7Xr5MM",
  "key27": "ypuzbdJ5nnF38sMDNfeU5f6HTah22eq9TP7pc3tLwteoXdZcnKjFgopF16gNLGKoemigKtBjwL6NntCwbqhkRRD",
  "key28": "BCCqnqH9J1Ubp4ZBrgcKKJXURtWyMZafb2v5CBo5MJNHj5QNwJPkTP68tkz1szfDUpNUPBr6Sh1qk6Xz8YnbDgj",
  "key29": "5Xcss4ymWzQWgvyjBLYY2q69FcGdRug36Gp9VgW5FGjqPLmRPxcrioBN1h5cXpn45B21VizEbj5scc8Y973koggt",
  "key30": "3vmAj7LbXah46zzXrFA5gjxnghmn7jChKHApoMZ8uhdYsEG4PJrz1wMdmT9DUsoGH3NvXeDXLtfSuF79udhYbw5a",
  "key31": "39DqzkPEhSSoSQFSg3u3CZf2YmurvazmyfZA121hhPQzZDGDjfUkeSKfD1k5dWKCanFKkJawstdXcYNkRLSPb5Cg",
  "key32": "5QkJqWWQtq75hoDp8WBB8yGBrGCdM86xx6pwSNPEe928pLNZ5uv6zEKynM3SmCtZf8z8sSKptrnubKpdSSkyntPv",
  "key33": "2Zw6kJ2kZcbHyhA2U4bpPoS2ALF69VjiCNQpthzPMiQibDHzdXwaDpBohTe3vc448wb41sFjz2RF7sG7M1msC4ZU",
  "key34": "3UuRk6sJBowwwsKB3YQcR73LLKMMhXZjfpnRAPpdASeTZpwKZymaacmF6G3B73vwWUs5YacQSdRgGMpE2DAxDTHH",
  "key35": "LYXS38McYYWxWfnqwJ7RzNghNVMxCzAP4Xu7yVzCp3V4de3VfKY42o9bW9S1GuToa546jxT3fHK7FGQs9VZKdYx",
  "key36": "vQ2aqZraBUcuXDgFm3uvXxznNS1Tua3HMMvMqCnqStqQy3o2naugtkdF4K2XQwZsApBHEtpxbhRwTECe4QmvjJV",
  "key37": "64QxgKsWMpq5VgRzPXtHEYpHXiG8x8d7ejYry3kokQKZBTrzDjsWyRvCAx4TdEfRw9E5MmZzM8PdB7jST1WZQ44n"
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
