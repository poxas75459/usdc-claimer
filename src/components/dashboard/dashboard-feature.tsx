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
    "4VsSiDYvi2oDLHPDT6Fo9nRApJLcUDqEJGGTAWU2Qs3Be96v9nCXphHrqTyqLxb3C1fXWFF1HwyLG5t64ojnCEZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CVXCGqbmu1kufaTaLpxnNCmTmqtrsa3iqSN18XM1qFCVrXuN4Kc25ij9UFBNawxFSKzt8fWor3VwWAs3BDqpPEA",
  "key1": "2GdQ3rsVbNo3M5jL9Hfe64XG6pVUhcrMfX8HV72UpYmjhzy7WbXBkv8hD77SmQcX6gX5hbRd7wJoRDz6DerbvfUZ",
  "key2": "2CKZqJGkkTUfnqZ1nyAj1iTaaMhgeRMGHeXpJ5DhSaKHQRQjAm4WkUTbi5T1Djq7jqqVkqMDL7sXiD9ySG6kJ2yF",
  "key3": "2ZeiUQEtvXhbiHFjMWJ3dZLPrwzXtH8Nx17ZFZMmmWRf1fSkBr1HoSaXcSzGxkp8G5g6A3Xz27qQzQV457JbKaB5",
  "key4": "52q2W9ZQ94W2qyBzW8NShweESUhbKKc7FwytHGAYrWBQeb6kRDPAiVnsp9cFW6ECAGiUfUQXrhdR4vGmykh9W8V4",
  "key5": "n9h4AxtF1iR9NZwHDKzB3D4DkEEv6obh2awPsKLWNeMof9XXLyP1RwPfDCTfGdfYEMjHd7n6RheXCbTRFpAQFUB",
  "key6": "3Tu5UuAteq2o82kjdsSqaqT2GXZiyUU9TZSj6fjf1w2qYXNu8P7S6F8MfeGHbpmSDntC76ERcFwExG99fMWKS5b2",
  "key7": "5pW98wJfGM5KrcyaXiTgk1yoLnjurkuYarCnKx9km8WgAryoKru4cQFn3EzxXqW8b83dvork33h3Ui6qHHdBAm6P",
  "key8": "4VeLsrwvD5X6RhvUeEKeq4P8wEu6pHWJWCN63g9nttmeycKZ4pSk3zKLtpNLsnt1AbYQod8JAr3jwZgYWh1mWcUg",
  "key9": "332g3pBUPDkwLJb8D3mTg3fqRNpmaW8H16eEvQRPy9jYjZyHxvTqnnX1bJ2LXR4ed9SkTNmuQhnzZWaZudVU9wEm",
  "key10": "5ZVLN68UC75VXxmferYvdr39r2Ugy52n7dFwCzndr4Qa5FTMNuVzTVqEifopjZJWkGGMLW7NJvuJcvCPXTq2ZJzs",
  "key11": "3fyUy3m8M4gRZm4NhjV2bpC4b9AQoBAMs3XtEv96SLUVRyoZ1xGapHRmL68FrpsoAUp9xd9zCLRCy3zQdTyRj6mv",
  "key12": "T92YmoreDQg9UcmWofRxnWUiZeztqSJZt3qDX3NJNR2EdcEjPfMNGEoqXYG2MRKgu58hMcpDYfpdQkiwJ1LL2XK",
  "key13": "5MFWGaMX9UDAjdJHDutn5cGYXV5rXtaU9UP9AxWmSgDU6RxAaHB3fVYc8LNXcFnA78Pb9yk6gC1Y4jPmMDH24ieM",
  "key14": "3dLPxQb9uJyajQPoJJmqvynZCknbdUNJQb7JHj9qGu8ncTwb9amHxKDsSCFHi8jMGBuMvdPjx8DboWEgTTaVidqC",
  "key15": "uV3WufG9kZQZfEXgDBK8a1SsusWc5R9EhhUsfwP4VydyzeBeudzReQD8mt6asKDF2RdXPPnp25KyWr1PKtZADrY",
  "key16": "2ciYYzxut2m9rXSi5xu4Zx8QCqJQASrmpd5bEdLu2fn7taEqWyyeCnTWVFir3VqHGsR5eYbX6AdqdF88PcxSHBKK",
  "key17": "4noCj1FJoRkA1UtDgYpiihAo99w4XEHwRStUAbhjCr9nARBfQs2DQffc6dFpKaoM4X5NLmDLaizkq4BjWibUngMH",
  "key18": "4yZcDpv1cqxDZUmrdhjBfTQzp81ivTiMX83BrsfoVPNGTPuvdymTZkA4xxHyro8u2xAVJACjgKLBMjt7pTdhmAdP",
  "key19": "2svngQF4esVffFL9kDXnqiNYxPNHZFaXVJLJCcEDyV9Gex6V9fKNaKixhyeVvjUoGzkJyMHjYXAQ2QmvFs9v8Urc",
  "key20": "fBdBh3xff5WNhARqYGfGcy9V8SdsXrnkNGKDVcdPMVK2RnSg2dhbAFgUtM3C737DyHjwtUpeL32CjeEQiSgnL6P",
  "key21": "5T5QHjgDPrhzzzCaJhBrrKVDoPtb9wesrwpN9chUare7TBBYKDS5HiCQ1ivHeNZifkMR5vjsjSx1w3nNqK3MimVJ",
  "key22": "3ahRkdV9gRWNoFjtWfESKeU9fE3JfJepSNvQCAzZEkgakiRYdqa8nB2NZVS1oScTm1o6JPmcBPn2wiVUNrVgtACY",
  "key23": "pWk8e8LVC94xhJEwQVst5GEACViBbiQjVdGae16Hfy3XbuLUmYg6UvTW8ussFpQEQun4G31GnjzSJ4PzffDPC9D",
  "key24": "52KjkAk1H2JpDga5TQFptkLGvXiJakuhR7sKgGPdokmwELb15Usf4EYknLLNPw7FXeAdti6bXbRULDcx847zi7ey",
  "key25": "9S6LRtdmF71Tdw9oXg9g9Lrvv28PwH7hRixfd1wx9eNb15ApHf7Mc11YkJ8nT2NrPtdTGmaXnqo8X5Yoat2yihd",
  "key26": "4Sw5sBtuc1urE9StF1pXhCuY6pxpKF2eRsFbjx2VEuZ2TvrnbZ7EmxWuohQQyMv46YR8e79UdqC4kRJwgbrFNNXm",
  "key27": "k5mv1jhxwFYTHw7TLMonD3xc3Ru44LPRajsqKhDSGVU3jagBpt1D9xtSi8QPrcyFvsbQoMBDnShhykrBNWCzx3c",
  "key28": "2WumAiP9EuPiXjwJvfviY61ytzduGnuwiTdhpoiCvGLPdxtF7853B2xz6ENVbdH7HRnEY9ivLdzMyWj2ASxgJ9jX",
  "key29": "5LLNkDQ11fc1aSfG6G8eDcDdwq4cmhiq2GTYatmBBzsbKg6n768v9LsWGwMEc3KM3o51LjxKA96QCwcyk2YC6fQh",
  "key30": "2UYvZNufR4yuvEfVy3AFm1oTAnu8gjB2VyCfVbXRBKHJhD8g52hzgCmngtSDveBXbqCehkSUybvFsboyPKF3Wt1h",
  "key31": "3zK6tZored12vZ4RE4pL2Q7tmTi7UCaTS4pDN872mRp8wyqLYPNtMJ9cVUXU6381Gua22Q5TBwvNA7LkaHTBFoLW",
  "key32": "5qWYyskuTsUHAJnVLE4PLmf2ypChg2N9VrT5uXaFnX7M3XEvUYsSVGrKeFGzz3cRpeKU55aUzs8bATa23pAftxHJ",
  "key33": "4Us5kosxbT46EMh8WoPeX52CNNkE97rCffTe8JDedVva7RvPnjiXvDvMfNv3MreAbXpVwYkdEf4QcfvL1huD1dMi",
  "key34": "2HrQC4d99Zmuw99AV4ysF2RsAqb2d3LVbjB4VYBnpnZ434Z9MufxBwEVMMZdp38un1u8iT39FyPYoP4FtaWmGJEp",
  "key35": "4UPBvKJrTWV3mCxpfqgP6WE7EPr34ywvUedWurtQyMmkXM1s5fmbJfoMrQsQhNaGzVkbr4SzZsjZLQqeQknKw4y1",
  "key36": "3oJVfTkS1FqfRxvU1KN7t6eFwvSWrCqvaQWxk1s1zfdDXoHs3pa92EYJ1LyYWZfcCnRrzaALY13gHcfWcLuaWFdm",
  "key37": "314LPUTrHwu7Bua2oq2oXq5LjWwdKxkViLjRVikAwFPMcGRHdmxQtZMF4pMqxEhVgJKjy7bo3zewGZxNzWo4wsFG",
  "key38": "29xas11nEEzEKoTKfTA7PH4n4ghmt3cuk3LaVShoHVqBHAgdXKgrgxh2mUfPY9vyoyjkvS8k2BzyQtYcLRnadmCg",
  "key39": "2hRecCdZYPynTuZia63CKm2zXhKM6jwvZZrg3Hnd2Sfa6qCgMsj5g12LEuoQdDLVpK1GiZ4h4HDKU3azziBv9PZU",
  "key40": "5oZX9Equbtibn3KHqZ8PxXigoXt5QZv5Qob2Pt7heCnURfcZ1HbZV5j2v9pSuSe3QczhKCzoSmBJENdeqAs1P5z7",
  "key41": "kbXNp2UUWH48oHftubL4DYYQdtMwsaUGWCp68jVsLztxLSZhFjpHRxEZaMHyYmsBJX3TzBUwmsJFLv3DaRcvzg3",
  "key42": "31G788MBQiZRoWLRqgFN9qS2V1Yn4WkRMj5mRKMnmyCqu2ivGn8xCBEc6Wiedb3ckgczxbqCY7ohPRu2ibMPcwjT",
  "key43": "4muxnc8kK2fUDsjYsgcDGjHfgYt9k1hwuFgtUQQ2dmTYkvhcrbntMBj8wJ75ugZZmeLTcfB6Y8ECCvTQ18qtXW1n",
  "key44": "65j138YV4mejkmKvoHH6X8jxTyHfUynsXaheA41AT3DhCcS6pVcDwF7pjvjTUsdqrFhmnmNjJqyh4kPvdxPZe4QR",
  "key45": "4cyuvLjx482MKaWeTMgbYavUcqbA6xNAeu47bzmXukLdaPfd3JtF7daHDntwFVPx9viePSnc5Lz4LTAczPq5nVuA",
  "key46": "4RRWMEvvwvxvM8NrTNN8hX8PkjGuHeJD5ExePA3cWeem8A5KuUffouqYLGN2AfKY6gp2igwELqZ8fHT2eX8BRsjV"
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
