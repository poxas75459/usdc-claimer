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
    "5TaLYxYYiCKy6ad5muC8oedHu6irhKVFU7JR8NGUwc92NFTJRWXBMY5RqVFBtqdo9KPf2sWgsiDtRPtLU6hWwKuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WyXv1b757CftEhnVsC7tcoqvTSfp4DNR94E8k7LvsCyyKLZ61WB9ByeXcJ3LCjJk5GjiMZA749ZYWmF5uWejFxM",
  "key1": "2jSijSqi5tQA4xjeVdjgo2kAkLSE6BY1tD3ESFZkVTLverGt7G3bwj76gqCcaSpNztR79b3DjMUYx28EDjk9N7bL",
  "key2": "5rc9gaiDmE34GcHoSBHqEW9zqtGYpmS77Wx8hBTcsriqg4L6zcBV71nGKUrpHqvwj3vTpVy4CoC7BYGhMZsotrbE",
  "key3": "59enhahG4ji4gnsahPt4vaJTvbqHJ9U7sNozkTiWJULWjYM7ZfMYoY5o1uYkXWhfVdByDXpe3Pjy5Kf9JDwiLfgK",
  "key4": "2wcgmCdMdh9xANiELjaYfhbjQUyyXWEJPTcNadifsQfzbwdYevopueBy5Jbw33BMRrMNJvLuVGK8qdsQAFssX9vj",
  "key5": "2atyWXv4s9fQHgHFQE5dto6DUWLFtMLmFaNhQpGCKjKPAED8E9QuLWvnfXer9bqBF2GrjmLfLj45eQoenn2hiM9A",
  "key6": "2TaKZigMmtYZThUDkcWCDATaCzg8wKbcTtZFLTDddr53i3chNm7kyg1o26fDoTt9fL7HTre3bQaKsZmv2WYGTrc8",
  "key7": "27bTRwJMEu9qadHjRczVftXzY8HDEd3AmtsNVCaCg35acJwfUNqfXkdE8DdQXsjEYgNKUbDtrA73kz4zEPxjoG9L",
  "key8": "3o7rCtoDZoVXD6DDKQhFMgiH7mPMZHEmAfkoXYBcBpcgvug1eNMjtn8o2Ep5N5LcStqB1rKwnvRX9ZBGP7vyuA9B",
  "key9": "aY2DRrCNVZvGZj7qWFEJkGXfguPMaKTMNfiyYyGcESHQvMJ8FDag1UUBz1gGvVFdA1VkcYwycw8MkLHtiBfyPGN",
  "key10": "64JvCGyik7fbMqSV5eaaCkLzrZX8QLb56zdPbwoFuv5MNSsFRrtqWyBWeoXfue1NKzDSM6sKSkvnsja8CK4WwACM",
  "key11": "34gYM11FwLtZstw1xZx8K4Zmaq517tGsALzRJx8egCTg8eHiG2EAMbwAthuVW3W6CJs416LGDKbT8H4nirCanD9x",
  "key12": "GqLnh99MK1iLjAJiXNhund2rca8AAuhr6rDeLGueZ1RN1LQCV3AkH9jw3tp3qkPhi41gSe6wtxB6ds5q9KAKwU3",
  "key13": "3QMfu6r235evDRtw65JVmgmBLRNLnDJk5gh5GEfJpfnyRZgVEf9gwFUPXFqWwqk4PxCKCLQ7NGBUWmqsXjdc6sYq",
  "key14": "rXJcj3vptM97eQGuZvF4PXAHEapvnrBGDaVvGKSfvUyTYvgZqCwKUNwhD8iywzUBQUHXH567g1K4z9KFLQ8cKk1",
  "key15": "3tq4vQustez2G5mUazpFVFw3Esganr9gLzQJWZbaNkjJPLo7bLds8b1ZG7t26V2pDTLmBQ9Fe54zQpQZ8erURkbt",
  "key16": "4Hgcx2L8axA5XGerF2gChsaWnxZ7pTrdDJiPmLpTteY4yVsgEtBAdhRYsRBGKGV86Ev6xVPTCGY9o7MmreTBUZgo",
  "key17": "4MK1aEfX1s42EB4Vv36n6wBJDPR8pHVNUHAVrAiHZfp7aSDYpcRyMRCFUruWSNcrzoxP5MKVozvFhVD7kQzvweNT",
  "key18": "3Y3Cm9HC49cjK6YkQd4iPD3sLH6JVufjjQvStu5BV3dKcZK1NxFvaB2LDmrRqQK1g5b1YjQMsNM8TuA7Q99Lncym",
  "key19": "5Mmpv8zgF8D1ZWktxZa5Ufdf7ewaxM5J2a4UowYTdwPTLiwtEFCrsf1ui2gX3w8GxRDcv75UwSxon4qVqLkPsS3S",
  "key20": "4YvZz61jP1ZTx1oBRYHT3N1Z8PsT4FnWB6xBHJEZH6HrQdjmkg3UKP47Rjm1e7V2brXEuD5NhgXbsR3yKMrMbEaW",
  "key21": "3kdyHB5uwBwMR2T7sirqvz8huratfGpqVZwGQfumz4MRgbuqvhMr2vt14mwZzNwksiEZvoynzD2AiDXVSHiJBoK6",
  "key22": "2UjR8nhLyakGnmifVJ8J6fKwQCGrcVDitAG2awf5yndWUdkjBQRQfKeksW2jDtsf2t7AJoWb2gbTRJ328o2wcZg2",
  "key23": "i56gJyGxRdJMrrYVyZUvknsHsNcVz6VjT4qq6N4t6ABmETUBUU9VDWCyNPUYjCVXJ8pGEHxz2CLHiCZhq5mKnhn",
  "key24": "euuXcACdnzjUqXzjxx43kqthkthqiZisSTrYx7dTdMvGFGcJsoTYs7w8hGiGe3GffiwNQXhga8G4okLohoExLpR",
  "key25": "53eckTg9qpZRjC5P9UTVSWPM3S1yECAfBXxvgadYfD3BTauT7mUJHFyR58CTCVhGapV9s95CCYoh69ybiK91xZ8w",
  "key26": "43yRCcvneNbZc1itwmJ9smQbF2RDVJQNqQTwqpMKgUdufJuHwoqrsXmzeZ6HLVWBsg7QXH7pMokfrj8Rx5cUzVus",
  "key27": "3AvL3GYsMcntLbvF2AWUB1WwweUn9Y78fYH8Duj6zBukLFokkxrvgmPgEaC1Z9C4jfKBGQfPzaabnht1r9YR6VHL",
  "key28": "4srQPwdv9wuaL7VvL4reWDBoetQvSqSGuW1fVWv64xxtVUH8wP3Fo5FDGPA5Ky9ykNxMV1tgq5YSwzNVmVwnaEYC",
  "key29": "3nGiHQxyWX5vPF3Lgwxk3Jcmc3DZWS8zB9kPLLx9zHL5ZZc9j9egwUb89NnfYb6whYZ1k1yqy52CooLS5SnQncVz",
  "key30": "67FV1TES8J5piSGHzncC7JbBNQq7mJ3EycD9mBsdJ9Jbkr5EHPoZxRECWgiPhdqaFHFpK8BAiwQtte5a87EMNCXX",
  "key31": "3BNxWDQZB9ZsZewrQC95yX9abiJDmZDTXiDuT7SCvRHddPU9PF7R6eYXv9w9Wiv37Z29bZkL8oZCUTQ2eAiCiAcD",
  "key32": "4pZ3yyzCVbVk8UL6moDzmcN4ntAgVZFutewR8Bf2JqV9mss877pYm3GFJdx8bKRHhpRpxj8rLc3iSuTta8BL2k9P",
  "key33": "yZzG7poiGXvyP5c8gTwQueMNSNjpJtvVKQFkFBrxXne9Jwt3FYM3YBHCkP4BHdt8kYyUCLCgY6SbUeAy6qXYP3o",
  "key34": "4QVuq4u27PWc41Jzm9ScTy2A4X4Cfzwc8J8mRake3bPbHBkeuQzPGn5cwqnezmoSKY2vY9qY6CYVrgrYDuVGxCan",
  "key35": "5Q1m59LjFj3gxQ7n76p2RE1sqJtbYi5GY9omWbjC2RzcMBhzDWsMMKHZx43svJXYHXkbo2bDXdPReDVpaGg9Eoi3"
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
