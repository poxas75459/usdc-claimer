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
    "GogaW9mPWgSvkpqwBBvZC5NbUWyTG2fiDDgiEJctAz4CoF98VeCH6WFxSbjLXn62XuYd235hXT7u7zXmWz6Ej4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a5m4CS88C53EhrT243AEtVCoSj558gnZNRBruvLfspVhVrhLP3indAZD2NMzeDr2dfbqPitYpPK4MM7zt1w84d4",
  "key1": "4us6jqktLuTJanGynbcGVre61BJTqdxBchMe5RvgDsv8v7dM55n9uGwiRqGZZDcqQD8i2oAzQaR21bLmMxcfUkVp",
  "key2": "iiN8EHssRBg7eUxD8gdY8X8mtHyucB1WJh27LaubV2ctCJA58d92JzbX8HZRZTdFDkZ8V5aCWKuAtRUKcD6F91x",
  "key3": "jYd41xTycsDvvgVyufwkkCbYAeeFsQaA23hegnvLJBEhJ7jyy2xteYJeG1dyHfa8Zo6srKS6BsddJRjKob1XGBA",
  "key4": "3KkU19MMBgEXjs1CGDws6LwjyeaBVKPREBVWLewKZgLvtn1JGqCur2QKyVL2yrw4UjwSc7qSsvm1zWzMhydYMDDr",
  "key5": "MVy8wf8jPjYbNKnMAomCjFPGezwR1h1Q163QRKrGXcp3N6PZ4ZBpeGfaagLR149meiQoT5LSqRQSiMbpaMPdXFW",
  "key6": "XJZ7ijaeBMGbUg5dVUcMnvh6oaydWeGXsx7poPSy2cXa15naKCiXgEozDpT9fEWxK8Ec7JZkJy5hDGJF8GcrK3B",
  "key7": "4grWixZ6JRVwM6bo7Ph6HpqBtYwrwVgdXJE1s2B9jB33WjDiuNLDngkiDYPJduhPSv75L4JzHVUzpSufCgibgT36",
  "key8": "4WzpMbUZjNbGLXjjQNAN6GjjxuWYF6CZG87aKfTnN623DzgmchtprgewPPmpCEVAU76TiF2wnevbXF1Nnc7zNcr1",
  "key9": "5AbmJdwqJdsvGVxjTB7rHhwkLprb3PDXmosGGfN88pMTB3x82AFTmsHw2MLAbMsvLMtAU533FBhnwS5Fh4pD8pGu",
  "key10": "5DSVkXkfF7YYafpZwRLBEYbwegpbzUUPgGGA35GbaYK2yChoaS2D2Y1RCWJRhF2v4EL5WtaJS9ZKHQjPLKJ1wLBu",
  "key11": "3EKTotCf9BFNaHpXgf4BA9bdVwMJoNwaP4jGBqpHRjtrZr8u62YP2eeTzfLj14x71HwbgfinxMgHKbvXMZ24qWYo",
  "key12": "5CQjutDtTouEXAJTz9X7meSrPEKMYAjSZsz9X4HyB4WJ9G1WJ7ddSStWqQJJz2gJRuUQ3hGzAKJPq3hXNjjLw9W8",
  "key13": "5gFhnMJGjCryJ5fS1aCMzuSHJ3cQfB2FMLGMzmgAEVnmVgkLqSP93Q1cn59qudNSVhET5oGxC49mSgiQfQPwYnfj",
  "key14": "54MHZLhX5yKMahqJL7tweVHL9HpeAMozeWvX2bBS1fvAHKJ1ao5R2DURaxcXki9UtGogRG2AYbyVpg5bRcth6Q5E",
  "key15": "4bCsWZ2L9LM22ydT5biPyTTT8pV4tRXTQb94GusqbUwnUHcsohafvpKXotcHkab5v2nPMdwLyU2TxQZifkat9CSc",
  "key16": "2nZmfqxPCw6DH45GKMFbisEa5WpM4ejBz4nrvcs1RVCF5bsbPgC9skfgiaqbeXN2oAf4qMQahc91NpaDYwJK7Jte",
  "key17": "4ur2sDSMHneLvR6MzVAzVSZVkQzNifudPsuvWx5CjGeVEc64bJqGZKS5tEtciB3uFNKbUnP1EWSocy3SzyCurMf7",
  "key18": "6139GpN3TN4crfP5vLJ5pYiX6mEqLiPZkTfpoMywvEtouRKL8gYiCwm67mKPt9rBFUJYb1SS1Qof8s4DfC9SjxbR",
  "key19": "2pix3o7UTeowBrKDYzNGaDrVbNPuTUtfQ7A1ffarubUYBqhPv7BcuuWJuBjqTTgXSM7xT2virKGsjwtj4wf3kSJc",
  "key20": "53Kov1b4SxxbZGLVosF4aZjecGwjwrh5H8akUbRzVSLtXbF8Cu58wPyGjyh2kC82xHwtwvYFnojcRZqePMA2Zep2",
  "key21": "5mkZLcJFRLiN8Ueyagsv8LjAWkCvh4SbxRWY6zYCCMsrLmpMwibesgxT8WRAL1EwQomGdtyvDwjNAeXNtBbCB6pG",
  "key22": "4B9T9dznTYsnawar7Hmud7tCsCodxhRnbXCfe7nBMQWpXJNdUBukYayMbCiHwAveMHhUP3SzqirgDXSTYt5DpAAu",
  "key23": "rmM5znjuEfAo7FAZVEPYPgdZyfQ6BcRjgR8ebghoMnDkb6cGcgD13W7Si1tMj2BZKtywAiFtSUCtQU8BrPRNWpm",
  "key24": "9QXtsv5JDovEhb3UWVc1RwXcczxKxKLVdwWUBmEpFAV5JxjaGvjerLTuoF6xA2fXSZK2Eti4RVpNh5JrEDHncW6",
  "key25": "4Go6gzbq7KDUPbeNEq9FmohrXP4ef5nihqermHBEGxkkGskpWHG38viCoNCFa6DwsJc9eGSzDy2aGu8JsUZD6fQG",
  "key26": "3rRENXgChWpX3VEMWBZWRbxMh4e7w3cwqwoqfaYi91eDT3c3nn9nJ9sfF7SEW3TozBnjWaA2LpsKC4kfbn1hXqvo",
  "key27": "2wmWSub7z85Loq583qZmacCtFvDTtYgcJhZk56enGMpxxscUHm8a3FeHsCk6C5R4C8TqfYFEENociRgBhsvFZ21c",
  "key28": "2ed8pYjr5Tk1pM5XFRt4JwuwmdXh8XRMxkaKTQ2beWn3JPS2y7bvGJ5sy5BidjxWqVukURJiSLWfZaA3yTmG9CRb"
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
