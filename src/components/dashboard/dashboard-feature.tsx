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
    "3JJcLihtXeuZHAwxzrM4nxrJsAC8YCdPVBmmdiEtnnonHae9ydMsMKiwnWUywPE1kq9YrkuGKjPzPi4SwEoJyt8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vyrVqh2dULzNKMRkBSvDwESXKdnFUVmZUS4fJuNgFJu1wp49Neaa8EHCt3gR1sd7MvRoq6BL6F5JF9TVk5hwU53",
  "key1": "2AAW6mEUhwtbDF3ztbK2YBVhgockmLmAF8pzR2CPziNSXpS5XKLMXFqbrLo31m5LRdXCLrbzjy3F1NpL5amrW7a6",
  "key2": "66uh85KH8PPaQbZRdsSnhg8WVUaNYM1axws27sKKRanFUQB9uqwZiV5EwYsarKqubR7kcs6p9MfvP7KwZJD2e6hM",
  "key3": "5zkgcqcJrsSPJcRUfiyBbr6iRvEZo8ybpkPcTU3WLCpWXQH1P1CT1aE9QAscjjer9QNTsAGHG1wTafotuVoULjUH",
  "key4": "27pBxKwW7fk6kwvXJxEydpByUrF86PZnabtUYWER97riBhBQKvisyFitDLS6pFgR8eAWHFdJdHtnHYggDKZmMswG",
  "key5": "3WVXVUC1cabtS6JfQ9xAfRukGVEMAPZueJMJQbZpk2fAGiHeGY1mMeZWDUZRvennrFbszt1M3MW1tEnbUNGVR2LZ",
  "key6": "4h4oVGrP3hqw3r5y2BKMWkzyVMpMEMtCqXbK4x12wMs9eXh32L6SmgGcpfHo2Lf8bwFyquPYBpFYsXGroDPZrf4r",
  "key7": "4YrAYmhKX6SLMBm5BYGpTzwkYu5eLGwjFL2ZPT9rrzQmTc7wFqA7EFNMsCZ6YP154wbsjZXUA41c9bSjxQoRDuFY",
  "key8": "63Dc5bPhmBNzAHvrjgriBXiQDTpVsVnC5HcSXMuVVpkBvm1TZs4bb1Y3v98tQHaF3t7CNz4xfw5iCijaEkYw3XmU",
  "key9": "2np7Hxygv9jsqAyMMdzQz5ebBBneVbnMggksCK6Hv1kwynKLXehotmKMtB5oCVBuDt6JF8BU9veXQjcULvVtsMV5",
  "key10": "3iDrhqV5dXNuExHw9qkCrFuSSL7QBAYWZQC8k47Ws5aPBJsCaq3eVubAfEWHCsRHdkYPBQVoznvvPBfbPYM78hvc",
  "key11": "5n5F8dBpyHvTFeKs2GXyJ63H6sBA7E7BXybygfUGWSFdbJJBfEKxuDFv4U55HpZNXFiDR7J2JLQjhUM28j6TqQpL",
  "key12": "65kfm15egowfdxxtefTYMHYLFbWbFeSJJ6BUVyZz2FeAG3sTvQ3LaB4nUR5Mb8SqBw75rVrRPU5nJ9JEmyM2K9gf",
  "key13": "2CbGHLtzjobEEN7nW9fTBsQQt25L4Q2CcNcbGgmG4Xk1RUEQ4vVfJH1ya5zBoEdzCRtTzmKedzQD1Xg7r5xmgYjR",
  "key14": "2oLbFaxRFpdRzbiD2V9BDFwQV4BCdBCnd5vPy16Ud15qRCecuf7s9S3TKoeJbpT38x65QbTM9ZUaBz3wcjTb3qPf",
  "key15": "5UCousWnfhTtMy2q8fbp7ioqvh3BzP8cXm8FmXKGLy5gg9U3rnmwH2wBBLj44uGaJ8YTkZbKmUrrrAFzpUZp1WGm",
  "key16": "3JyQDxLFwWqaA2A4UYbB31RxTtAFZsPfCVt7dAVpJm9iDnnAy5BAHMFUXEbHz6nmxFQ3pJetZRN2yRHGS6wASmtq",
  "key17": "3vXCbeGpnG8PFVtxLTq5F3eACximSoyVLCpmasWCaDA3gyWnr2gdFuHxGNxRXRpVspjyButskuFG18ZVgHXrL3K8",
  "key18": "2EQcnNtt7sz7wrPVkLvU9X1vPz3V25fYE5gpnQjFCG4p369AZnD9QnJPM3D69RY4VutSQPVCHwBVYd4UGq46wDua",
  "key19": "2StjDf2sJmnCZXZgufwoDdTde9sbc3tMfaCjTypLYamubfoRF9drKDJFWktHaB1Po86ohFQuuPeSBBixjpKGdmcv",
  "key20": "491VJFe4tKbFD1UwkxqwFEVa4L7cV1dUVgZxn9PEKgh4RGhxXcCGMkpbX1mHLuYFdfzmSk6n4E9JurTkHM4G3Uvj",
  "key21": "4aYsn9TbekYkpky8WmajL574qkzHmJearoYU9eM5QJvTJoMx7chKgxgzFYuifQoR56kXc6RkY5g2uUGJP96gyeA1",
  "key22": "3xKQhmyKqfQgvE8dmYEMzyCCsy6ZdNnqPrLL2R5RKxmBLFbZGnToVDmStY4KvAptz7Wf9CdDxeYFGdJG7aE2eTqS",
  "key23": "5RdSwLoP59qMtLTNuVmfGmo3VFdB1XixgwYjomNLym3uQLh8aU1fKvi7Bn9a4R9YjVTjDt1RGUmxN7PBdHdQYNct",
  "key24": "S8cLJDxfePnjeERN9EyYJKhzn2uhjPRkrfSocoxWSyQnYLJYWzph7u1eswRGzcoQ45mqfUC9eQiYTUveC2p6hYK",
  "key25": "3kD5aPXQfj4N9jADikvXnGQTtsQNXswZek9KZzHpCAohtDfCD3CXQ2pAkfX7AqfDstcre9ShsUAbtzXMjg68Q6ag",
  "key26": "3Hrewsr1cixa6qjvHXpTbfz1GQhGqER2SjJERsCaNrh4NjU7g3amGXzfjjnTSHHoBSxjUwh8o9mky8TAJ2dnC6Dx",
  "key27": "2f8dUFNdS9t7mRkecej3cu9ZDixajeTtFa1fgm2grsKrQnkrdMRPrB8aWmq9k2MK7bBDJE7Z3S3tqRchSvg179PJ",
  "key28": "43sL8BNUSFkoULKkiKUgbFHdaPiNN9z9CW1hZwY2SpSiXwZj4nYKcCDzsDhN9jTnqHRSrLdof3UEh28N81ENMCeS",
  "key29": "3mmdpJULRZ5RFGjYhNREvR2LHcgRWtFt7Q9Gij4ZmNLw7sJHJY9Tnm18Y52k3RCtKefcYcNupUcmGRfdYVkkaka3",
  "key30": "2Nn16mNhAd194uY48YScPWRwUfzXePiu4W5juQoaSUQkyHkr1bJSSfRXbJkFZmvn5C8sZXkdVHsPVsVz7A3tBvRC",
  "key31": "5eUtUSJFz4ESMGYWmF7xLnHRsk4Ht38xH6kbvYg4xxnNSUeLitKivmkLomV2xrYF9vRRcxKNrP23LzZ87xaEtisM",
  "key32": "3A63P1VGt86UUFjsoGEW1radtZd16xzrnyZCDxBbx9JjCy3jfapNVCwMZK3AVjJBchmcoKh7atrND9L2XXkuo33W",
  "key33": "3b4HLYVs2xQBnpa6viWWfpkA761DuFdTU2sNzwwWTTuhorX2Fwn1d1z26pDmasxhJsU6o2V8bAPBvNcQmMZnSShL",
  "key34": "4brdaurFmkyPjW3q7neubxNLc8Ln4FpyGqMngseJX8FQeANSzAiijucL9TKwMEXcaSBpyUqmtBfDSUqPqRiEGRhM",
  "key35": "44R97WTg5bmiccuRwhoxfhvwqxLDkSoseEgPvLESzT7XRLpoojwos1SRG59pUSNcL9bHbTvAdqmbubVe8fAGgirp",
  "key36": "2i8bnT1JoGE9Di6Ax5DnHdeE25Zy15RUhtAv4Kiz5aRxrLKr3BEQKGJQCoJdjGg4c9U8bqiQsk9oQayg11bVrAHb",
  "key37": "2XyUDRGcmtnds1MBFSxzZ3nLe1Axy266o8amGtCkndeoXy9cDjxxbrTRH66yTMi9ggYZomFeu4jpnK6YbsXUga8F"
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
