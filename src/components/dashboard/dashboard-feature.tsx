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
    "4WovbHFkrsbcGEdUy6SRRQvYp9WXwabDQGg74eiMQ1yiTGFweDLXcnbAJ8TrXG3XevxYZSNCyCCHnSUpsD85hH1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJMMTspjXBWTZ66X7Y8VvwbqB3J6ZKF3tq5FiyQob996RfuMr9CF6FpzAMiupXhsiegiiBJBro67DaSBLRjB3Td",
  "key1": "5bd79ib2ikhP5fEYQcR3R1yCdfkBNUs2YVpEmZTFscPvuGxbeHTPmqfgBaNf9YfnwAzQXBmaZhpDDHW46Wmd5uDH",
  "key2": "3jGkhp4eFjPNKHcF4iDAB4TKa1gp12iSX2vdh9Az4PrAXoC1UTksSf6ojYT9dgYhgUUftDCMJqf2bSE1ifknnr6c",
  "key3": "3rFpdcqVDWyyAhu9CRfQz5rpdRxmPqRyF81cdCBT3iBEwsugsivGeNraXsvcCzcBHUR6LkgJc2qs2SZLHKQcH6kf",
  "key4": "5jnftLttwfkKjRo7nN1mmnuT2EPX4EYqJoxsoEZVPq2NseT5Q74rYZZfAqyncWtB15a7256j3g9vN6S1LAzcrTfM",
  "key5": "2oQGLDhxqhcrZ4AutTmCmcSFpca6aNNX5jhTpGsxsoCymddqpc9jihVuNrVjk4pGgzVK2jSVo4mCo1HsoufXmmvV",
  "key6": "5a8LaRkH62x3rkmoYAULFCnXDYH2Nj39gr7KzJUoKhZmc7ooqPz6qiPZzLqqo2Kq2KARvKx9p49v4YGX2XENZv2x",
  "key7": "6PMuz2knnCfdnApLBgkFndYUXDGqYF376V6kHavVXLR84nBHgwrnJW7QMhdbqJ37P3L1vrG1dyJoEaEU4jzEL5j",
  "key8": "3yFPg5mzQRrPujDLGe19wHZ1exFs6HxDDNPqeq4XhnhWvuHBeQUxMz5brMpRP7auzTK13hjiFi5YXD2Kwsrei3Vz",
  "key9": "2fhvGhXBR6ag5t13nG7m3PhE5FCZrDCARkb7SzJqfPhNPFNhRzQsMKv7hJnMxzTtKhjw1XFvNEwLtUZfGgbXCgDG",
  "key10": "56xWaypZJDqmmp7PXpJazh7zqyVw9sAi7NthyxyEcd5372wu5CbxRZUeRGLcRgh5prd1ec63LKKELK7VYuTiRzB8",
  "key11": "5WNx5EbWr5qM6Bq3ZxbFFDPZtq4CTsa6kHowbNd6bDAfpK4pKx8qvPAkavsrM6sfau5xQFHceVMdeHZWPqua45YZ",
  "key12": "3uQsEMM9AcEa3F8H74XVJ39nFxG8pjQGUiPusy6DNaXZiWg1kPkT3smuZfK44dEDoVjsctdv3J2hQeR3y4tssY6w",
  "key13": "3MbCbEVFwRAkgR5CcWTA67sNMZNkYu2PBiubgXXSJ58JvN3EhPw7inZfmQzjiCcsggQYqpNAK4T2RoBFL8pe66Bi",
  "key14": "pchZJXtNLAmRfdfdRgDzc76unt6q6JbB6Zst1Q9R51SWaHVcvwxzG5e9YnPdF8boZ9poAxPiaocudz5koYLqttY",
  "key15": "34A9253yS44Z4FFKZ7GrAkgr52MZsAXyJkvDjL4caRMFkCQk7ngtMXPxmGzfqyCBFqmhskyK4LAYbS75DErPPYKK",
  "key16": "3hkmHreZQk649QC13PdobymYEYeYvKwgc3s6gFnGpUfdZ2GPSo44NjztdwS227BKXNcjXkEetxJ12uebMHdfoeCS",
  "key17": "5XGfSumSZmqA4WsFfjfkkRU7ANMbGJHvYE7FuYXoi79VZ1EhER47Jvq5FSoXAruTHBmcF3eEvBpfSXR6Bfb7sa5L",
  "key18": "5ffKWCr8XD7kgfcmXMgG5HTs7YiWfGgnqWEZKbdtpCXgYsrdnCvR1w3Sq5gqQWq6MYwwy2fyjYgNU9eexv8piREP",
  "key19": "YJ4E9Si7FDvEvkqJMm3EF7osE2EQQAHUn5ZPKJjXNfZVQkTZkvToMJ2fQEZi8xSvYFHQnfxAkcD6j7HHugYz1v9",
  "key20": "61L3XnRJ1RcaBqApvzZpAdeV332od477Q21x6ZEthUUJLFFb5YixdgQiZ2ZRxh9nBa2sJcAbfbUgGneaGNwJCbZH",
  "key21": "3iWingqcLCGT6VE2zTmGsx2feiLq7Ace3NAprzRDS8JdfqZ9k8tx3FsnosErBssNg5mVNvb3bz4giYtbs2AySwcu",
  "key22": "4z5gjp6cah6hCkfg3GeYKJAPKXAwZSRnj8EKN7RCCwifypRgacXRiCx8YuEgrKmJAkcaPw9cGW1EdcF5bW3CySAm",
  "key23": "56Lz9fH3NC8aPfHTM1SPyzJWjmsEhz9egaSLPjBXD9ALeneUxDBW1KxFyojyunTARPxHKXfkHU27dpChr5FzYdob",
  "key24": "3YKbtM7a8MQSupfJAisbBp5EGPEUfWfZfm6MVtuTuAkDz7eQWht9zTuEfpPs1mbiEkv47XJweuwceKTTSscMzx3D",
  "key25": "3dVfd6YUoZp48piC7TjcdZMUZNSTvLPAFno5tP6vQBknALNBbbHmtVdgGSMrQistqeZmRriroYzqecKrv4PgAvN3",
  "key26": "3rAFUsJMg6NPCD1KnaMCBm3R66gafV8Pt3VmBggRkq1HnkuL5zeihjSdy2r9Z7em2xgA8o6P5MeP8WSi9M5kN9Wn",
  "key27": "4NukMxzcd87yzP33HBG2nfrZvJYJMAaPZSNbVTfccpnhozfVviTULyuVsZitdQfCwhKGrBotCxzpkfajZuUBox4C",
  "key28": "2MXCvuXeCkAGyBqnyfCZggkCYo9oRvxEr2DbZtqWSPg7bQYEhUaifDh1D9Jbn5fCpNSvc1DQ5LGiEK6yydnDr3je",
  "key29": "MmiNYd1NSskSCSydhdHe4rqUdn5LAUho1GpW1Jqy2giBrD4kjQ92PJdFRrSs32NrcCbSas61kZ7pLBMhWBmLG2n",
  "key30": "3WJnSRqgCGY8Yj7WTUAaubKQuQav5uFj4Cgx3E3wWiEy2fmBECbzF4SeTV7fRvhM3D36d7Qj5pEipLFpAomXW3nb",
  "key31": "2qRqsLJAD7VnryHwAU7XrCTjMLewMVfSaRig2YxFo1P5jjZ6gRR2tsoWgj4v8h61fABAxFaSG7b1BPEub1tDysjd",
  "key32": "5K7J1TVpR3y8fUSwJSGoxqhdz87szGNoPe3CGePJYqaXF9rJio2WDsPKRZmVc3yPUXupu96zViDha1nWRc5Q2ByS",
  "key33": "4XvAWzJDzGb3cWa4wnFonjqetHpbwMXFkCMw9bKjKsQmCVQM11HuSjZtXGkLwf8SwXDCuCfJmZNVK9n9K4CDG5BR",
  "key34": "41MvM7zCe8NUPqkSkVydnwLgN7rofRsFkHGPsK4pw3hs4SLNwXXLHnPp1ZH1bRqXEjrR4214E6Qk73W55yjqEne1",
  "key35": "2bVaWq6eSZQ9i1k3Jwsnxa8UsvBXGSXATGgWsbyaFFJSddphgt4FZEpR6cC4aRhyAFTHM874pGt4qcxnixgqkhht",
  "key36": "3C8WzovEekztH6sX5VVaMTziKRhdQydLBbWo31eujJneo2CnBR2mxjo8qU7QyN5RkA2ZZPJDTrYVkhyAAue1dGm5",
  "key37": "4coLvqPzVQYacnPEnKwqUWPbKptsXutdXxYWmkSC6ANvSYM9tdEQfkoWrivc7xrPiFHqhLaoEiJQca3eidjqVMZH",
  "key38": "3XYvtfNMBBdExa99zZnoU9Zfw6rtAd4Tza2AaqgmkGhUTMJ47tVJg28rwfD5ME5SKzMbT5pVqyZkqvkVe7miEoWo",
  "key39": "KMGrcRqWuxLKDj6k1GxktEvAgSyqdT7Raoc3fJ6b2zwqfL7UuB8xLSS8so6hSD37HuMVUwKqq1Zf41skbAZsqk6",
  "key40": "VxhTYCTLwWB1rqzfPA1RMVCHwaHomJTxm4Bog5t5izdhwYd9W2LhUuaDfLAm2b4V1BgFVvTVmBLmtBzsJxKYV91",
  "key41": "2pMZgNrdaRciUWZeE8Hp5hfeGnwuEo7KkAVhn9dCKpvU21wVpBzuC1JJSvMwGPU1nT5ubmR9vzxjwyioRD4hdSky",
  "key42": "onVk84LcVEnDdsHwDzBa7L1T2zdRstMTPf98Pd1Cp4QWTT8Lf3a3k4HQCKJ3bVQaPtdyZ1oBzyiRYFTWEHcFX6L"
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
