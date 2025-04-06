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
    "2QNP6ezJ8bmVe3PkfNPQT1RTy3pnv8davpEH4CKKWLa2iR4sp1mQhRcNhjuuf4vDFNeciuPsq3F1Qc7UBhgmTk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QFnQCXhi6LGufLAp4HosuDiiMkPSo8wFjS2d9ENE8jvYpVRd9Cyu5dYYpeAtYcgQBcZWFvqgxWhhiMRqLTbHqhp",
  "key1": "4MwC6e2v8d791YpN9k9CZjw7ry7cHnQ4ERzrPGYQG85GBSTaaHPhogZ15v8ECgqz33HxVZ2wkre3rNCMAmczk6gy",
  "key2": "2KuT7wHkNH6XeTmUBzeaFoPhUrj5465a26rafubnNqwqDWTnSmAFVJsmSZDHTBetJtStCDf6YGauHZQMBY3xCVYL",
  "key3": "4Nt4CawZAgeZqGQvCZtevtdnq2fjz7PZVQeg8gMmfV469VUPhfGBHvMuMozP5nQwKWmXK94FL16WpGJRSxsvssPw",
  "key4": "4JryMsNqB3Y2ZevoDemMER5H5ffFMFyZ93JSbhLJGXDqEu915JP3NUFqkndms1fXJgzngZsrdWLNi8b8JStri5GV",
  "key5": "3wHUiKPkNXnrHLyCvBN31993WgRAuwQZ7zszGFY1pKksNgg4bwPyYyeA7SSRwGMA1QKdv5oadEkNtZkCH2zGgR4d",
  "key6": "TDW75kJirCtFzqyHVzwVz1RxKQLbQ2g4udUSKkuzMpJ3SMpAF5xnkazS3FWB2HwuXS1bPG6PwLbiFW7njTQT8KQ",
  "key7": "63BFai5vuWLmnv6vE33QG39oATwn7qJZtSZ8j9RDzmabNvekRZhuf2gabpzMtRz7GAgLb6J7s4gZzMqPC4Fe7ae5",
  "key8": "4NLmPcvdyJqFVAJDVouxEiDWuGwupvyTWRXnBjsH7XWYFyrzFr7aVq7ySXfmBqwx4eYxEduQbteWFtSGPSEUSGVc",
  "key9": "29RAYJ7oRywvtfHk2TwWZaAm7JEdqb1h8xpp4ZfXV3adjphENFjqqkuzXe5Yytpg6nftP6eLM2vPEbhZty8dV7sH",
  "key10": "5q9o9AmxL45i2ivurcS3vPpdEXrYjkAePhoaSXFVibV9sQo4SC4RNqEhxzvHaojEqKZMFyLitz1ZnaqC9z2Tjvor",
  "key11": "3FZTXPHEuNUNHtouVWqBaprwzDHsRJdaQ4CBxij2NJkire16gJAizXoziUoEjLstuamnjhZCJuVCQPMHqWavfEzW",
  "key12": "S9X1ArHDrPJHHwVkTffbVkM3f7ng75dfU5crRGRiYzSTSP3LEGGzohdpdoBLq1vU8fAWS4s54ADPA9B4C2RCcJR",
  "key13": "3wX8TkLu6xjpS16DL6FD13QTEExYUBgD9bB2etnw19hy1oH7wEG7ovPTG8ALCzUegoiJdB5MiX88gyida8apAFoD",
  "key14": "58Ksh8KBUpRrmAngZBsHhRfkk2TavCroyXjRgYkm8mjM5X2VX8aw1Nufg4dmkGiBHBY7fWboGMWRXsZQyBQRfqZR",
  "key15": "4FyvUWMxpuK7Z8mf4c5kGddxB9fsBnZn4t4FLMKs6QaujoFf9Kjt2VwMnHkYeSPJUE268UNQtZcoBvNWiXJ2TcE2",
  "key16": "3wU9KHbqZDRHHqz68Hbo9vDC3AuRQnJdKEiSuUYByj1xpNDekwDsdvQw6C8T6GyJsKoKr784RSWFKBoxhpgqYLzA",
  "key17": "2thJdPfNd1keC3c5Ge5Zboe3V2LNZhLzDqJQrX9n3CLjbKPjXuViFqnpPozGdLbabtbsvJaGCYdNfgEJUhq83zj1",
  "key18": "4TVkpSR5uwMhJt6c3sGk8AK4sdEzUradhbskfQMAorMUWuCcU7RbyhEh3uSsim1mrcXhc6CmBLgZM6eN5AWiusJS",
  "key19": "3TPuHBQpbe9wFki6oWJYV4Hxvr1awXk2VB41B8CbWwtHJvBsQug3g47SDqGHLTArrSaEseuiuPh9WAFrmg7CUZdM",
  "key20": "3yRkWeSfU42J4chXmx46DYVQ561GJkBUr2PiuvD4vU6gzRegr4YFFo19pybpZ8ue7PMSQTNXGgU5PbFDXjgW2ZCZ",
  "key21": "EpYqpWNZMW8SxEagorwi1c14F8JGNodyFj8LLGHuqdKUAH7YCqGXS5im7x1wzY4hyFi6Kt8vSb65Rkvzfus8AVV",
  "key22": "29rGZnekgcbcVWaJXRdnXHgfk7b5reAVzP5AfCjaNkLwmfec6NPitV5ixvFrkxeGZ7Pdjq3XuozNLSJMjSKMEAB9",
  "key23": "41VteWVoGr6gxkM4Cegz4ziuss8eRUX8CGj1hKwMx8xj8c2WYh4SdmBCijUtJ1XejWqrMnNyMqSqVL4ebh4Yvzxh",
  "key24": "3xPrPb5E8xt6JqtWhXVAQyjyoyT2SN5y8RXj6FLhngzoskCteXLmZ8qH8DNms6LBvoe8XSnHcL8uELX1t1cMbwoW",
  "key25": "affJWHSEk5jiZKprZKmqwzZYqG1zFcmgkiDo9ArgSLpyeTERKp2KgFTemPWcKebMd9uR7cUjJEYS3EiRnNRGbsE",
  "key26": "26CE48svXCgPmtDNoHMNA1bJFnRdBxc33HDmp4CcULA94FhKx4rrDBV23FqHZWfju6mCJVfmdi1y6PQR5os3CUjj",
  "key27": "5AQfr4o34JSpk7Ghtxyk3RfYCtdGGKcYB2CPb4dTpfLg8Bk7UApjaE1Q9ufaqZ4TBZLoUAHrkvxjTQVNSyAyjndx",
  "key28": "2ZiHAB1xQmYge6mBrQSD7vKcgnmevSRFswhpE8vPFoiZR9BrEsWDsKi4izNYQwJDiNssnfBTAYJaC6VhFsSEB7De",
  "key29": "363MSf8hJQoH3tLhpW4YzANd59fYGTYZF2vC9Ki1BHqvUjhdVFBvG934efHMJP8Y9YXZkgL3TweN8d6rAwrQbNRJ",
  "key30": "4UoASrDZgSRd6fMXHzF2SvnFzUKZQvw27kWUAXystZysKiP1yjzqsRcoyjgm3LAr9iuM13HSxK1eDrRKHAM6e51w",
  "key31": "5jURayZaZ9RMYP3Uh3uAh1deQYc7EpztVNLFWkT6jdstHdFVDceUPeq89m8kPzK978EiTG9JTgz3w5J2ojYjGBxA"
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
