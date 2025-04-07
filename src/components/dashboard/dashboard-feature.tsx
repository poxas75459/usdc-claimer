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
    "3wjff158NN4chsyYu6bs1Vq2HEEpBCuWLv3GN4ZN7imFZXKsLdk84L2X99ydVUSRH7dDiWJdbvhYDQKMyStZiBoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zTLzM6TxtHCphDCQFpTQrEZ3zkP1KJz2EGtgkG7MLDvFERSenBXWMcMXWyhLVb3q2Rt4rFZUSb8qTUbYdE6y49g",
  "key1": "2hDK1ct7MMJ2roK45udmx3AU1Qj3Fvz2d7wmXouKApDqdeTsdqpTq7vUnAt1AQv6YGKnwMNnfLpvmJrpR9nvDs3k",
  "key2": "3aKJdudkpvEjZF5ji3jHfAoTzK9qzK6VbRJcVoPmM4GgLVPjEx8QbkBrKL5mBRjoykk7suxtsVVF8m6Q1iuM4TiT",
  "key3": "53MENWTrazMR3EFi9GGzHnRUFBV8Ta6mA2xaKrbNCz95BStT41zmMyEdFEAiWiufiMnLbB2ALUFZf6Eh9f2sFujW",
  "key4": "2hZqWLJVQk7c1KaRUur1Rh97qDYtCVsV394oRaS5yA2LiR62vymXEZ2Z5L2wJ1Qiuu7RzHxnxQyr7xurtjWruXZ2",
  "key5": "MN587ZtJbFnCkFQsURfRbomz6krw7BfHE3i5wUyMQtzB4ioz1pkbir9X9kgR92qQvmgp9wPbMF7MAH1HS1jEU9Z",
  "key6": "wsYQzUaeZPqeFyFaGk93GfoRTY4ZHNZSm9ChGZsTmCTJ2jTK3hS9GSDLXnuzc2HUT7R7HWeA4a367gTuY4mCinp",
  "key7": "5Vd6e3LKW2xDSHZ98mUqVguhMRgjUAhzKQXwkJKoTHE7K9oj1sJKZCc5WVMtH1xyzPCeeQCU6o52xrjfkT3JCULV",
  "key8": "264bayPmfNopCWSBU9uDRVAE1b1kkbRXw5ReqEHMj5TXNSACtRLb42U1Ymkd1TdK7PGvFDT7QZXvgK8TF7D4nUdu",
  "key9": "5MmPMExy5jba64nWcM5xMf9E7juWkqRUNG5fzTZQ1RHizhumPdcSRUqhyLFZfbz4MwCDhdybYaLD37nqpGQKJJEM",
  "key10": "5NfjLJFtSJTBnJa3H7uk9zbfiFB7ms4sdnN4HvbPJm8PreYSxhg5ReTWcgBcL3DUKcWV5nacyVBAammsdJMnujWo",
  "key11": "5m9NNUydDAFHDdRtYLTtvXEi8p5xhq3udA7zJw1aWs7hb4xYAwzLgh279q1cv973tNgbTtHtQa7iKYUztnnXYD35",
  "key12": "5U4ZSWjbQB2g6g5zEVtpAVT4ettupju7pE5X3WVAQiraFyrRrPEHDavpKvVTuaqXj2JrFmq8A5Xme7vQzQQQNf8m",
  "key13": "5U8jq5hfpVXKNNMhiD4T3mC6VEukiGdEUf4VZ4LoxPak3inaCPcGtoDhhcdGVvdxBzSG84qMjKfYCACGAbGEUmqv",
  "key14": "B6dQkBRARUyrsuV3WMeFE8FawaK4jRrsf8zR7Tsj5zLDFRvUcW6ikG2LjjdFZXiTZRWaoaPZDrtmjP5eWFuQm9C",
  "key15": "zyy67j6U9kWUgDT2uvMekSPvawezdwz7LFAvXp3XVF1Btaac74N3sPmP21eQZLgh1md6xz9qwPurR25kJGh2zTr",
  "key16": "vE4TbfPS3BGjJYbsGy4QRYPHceYegyJ9zEBHFCssREmwjNypvsxG93G2YWohyGK4E3fMLDpCMiDrrrhd9u45PdK",
  "key17": "2mLLj3eqBoaujtPqmxW9jAQr1GaxQL4NEWBvGnAzARzws7agw987zFJWFM1iSBdedXs8UzWJahVZVmHUcXEFpEfn",
  "key18": "S9JU36uVbZHDTEdr2F2g6EHqrLMwqFpc8EcBrDUxk7LnKAT1R6V4LdT8k2mPipqgWdSURrWxRVAA1to6zrXyrEU",
  "key19": "41AyZ9hb3k5eDqDiSF4uUqdSQzZQFmLv5q1XzE7VkHhogbH7U7g8Vadx2daGZckP5FJ4jtgixZmydLEbY2GmSsAC",
  "key20": "5C4t6sRvueZ8mVaWJokRFyTihUhPFiriD8JcNNHVNTFUUjmnttErvKYURiHRbd8nYXw8WZMmiQJ5P8FQpRsAx5Jm",
  "key21": "5wMVvMf8Y771vZYrzpeeJyvWcoMG3sECogEPWD4ogDGD61wGLMQNKWXnwsLV8NzSpdFsdf33Tmtas9e8j2dzh4ms",
  "key22": "4abZEpeoZxs5m6zeZ1M9VEXde522fiyTv4qbBnUKQukXC41sLvwNfRsTAHrFupUT9wKsJBLV7L7siM51QNdwo21n",
  "key23": "2wsNZqKyG1B6YsC7g4BGjuhNH9qZd9EnPxGJcZF6JaVdgEyx3xgpy3dutYchgYBV4HeEdv3s3PuZjAMGc1PvrzRy",
  "key24": "e4cmTzTkvJCcc8qFyy53xVu55UCvN7377uP1E7jvBmGhhnoaVgh1kBHbsSTiRdJZD29CQzrscGC72hVQ14GDLKs",
  "key25": "64jqR8dTvvZDFcSdkVJ4fXwDsm7kvuRwdaazjw5j7tngi3rjSZ2Hbo3RmpcQt7YxX4zmj2MzHrxoM98r9ECPKmg7",
  "key26": "3PL1Sy8Sa2xYthuvUenDdwBLFkpR9jmHvQUheEeXHNK91PhbuzLXtQ9JniaK9g8wpMy66b1PjqxSg1xJJe3W8qfK",
  "key27": "rb2B7gVsQAkKsVCL1QqEXDUKcNNQi5n1DNhtNMYgYCLVyceci73xmo8v1DWqQbUWxG8iGnTstmaGboKCuqMAN88",
  "key28": "3yjAqE9jmFEBZKACK3bYTLL6byHNeZThnWS19Txt5CWeeHBSauFV8qTcNSS4YbsN28jTZ32egftcgFSxzino2hYF",
  "key29": "5A96ocHmqVb5vVXcC6qBJc4Y1vZn7TDiSc1U9TqDRXtEVwKFTogjNJRaKBq5d7i7t3MoMAWTqkAaxDqp7CU2Ef9p",
  "key30": "2V3LADwDfw7FnV33SHo35vdv2YhCBbe5sPpEudxDkmXg7Zi4S4AhjJjGf8WqLcZF6e2HwHjBphzoyJs3hTVuUB1t",
  "key31": "46aVYAfBxmid6W5XMwmWcjMAkvDNTRLNafUAct6t6ZVK5KS9ME8TJgWM3Wkxd3xEUh5QfquPv25tghghSh2u6uLh",
  "key32": "2XohSEwagzHRwnUxQhopKWEzecxbDQnGzivjQjrRQB6dg13dDRYKuSJ7jnAPPgoGXdBbP4Rd2G6MH5rAPF7AwpLE",
  "key33": "3JB2rXJ9sGzywBkDi89YG4QphjeAsJ8sVawaLQJimrVMSpWLzFbwUMLHHjtpQid9muVfagAUAZPEayFTZyRu1ed5",
  "key34": "4cjuy42xesqaGtRq6LhkTos4gAGpgdJtnpjdkYgqDyhowEKtHwdnKF8bZeetgJqLBRWAFPtVcBPohGHYpBxDXpn6",
  "key35": "51XbUYvH1iaPqjSBpzkGVkjGVxFqmG4tUsKr5kGdoP5FgjoZGMEnoWboMufEuXmE5JrUvKq1dy3rvP1DS4wYYoAq",
  "key36": "673ik4WcRHUAMigNxU5UYr2GMLwrtemgCyi3XD64VGyE1UiMUpKzqyKTyMgAiAkBBBk3bb9GsNgpTTHKuGUiaS7G",
  "key37": "7SN5JaRAkdc4oRgBPYASNS1ZvmHeKTnZraAmCksmfa2KDWXWwh2QQoKM6W6FwesXhJGoVxKmoCDLnv3pG2mQn4g",
  "key38": "49vZWvhnPTKvnjadyAGGxChhgxVz81uspx4U1XExLhBshSD4FkWF14GKHtaLJyrCrxKL8xpSdRua9U6znAN2UGyn",
  "key39": "53nrpMDJf2Amp7vhdchPRrVkVoBLg48Dy9MPJggcjD6oqu2bXGvT1ddkiFu9uqgMb7FW55qdEDLd8AzCKdcfbbb9",
  "key40": "4V6nAgz41cGbwh3goemL8QCKa19xQcEkU9LWJkTtFWQBJUEtVegBMmPj25sDMMjyivwqfipppCoKi3Yzf2YAZHJM",
  "key41": "5UG23TE4uFRCsYNrB29HKC3b3dwBqBp2y8WHu9rBBxZfTbgV3kVsmxn5GqPfmbhze6zRb5kEztNyYhx4Yay8GjF6",
  "key42": "5m6dJ7XJukUHzqXgUsHPB6vtp8DZwCjdfnX5CHod4AFAuQyDcQGrWJ4RYdbkmGRyVz4K2bLJQQFU13jVLZ5qooaj"
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
