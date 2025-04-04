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
    "257smeHJwehmw1oGzepZ2GnRxgjv3L72em2wWhqSBfnwQQrcMWJd2FruAtf1dyZApSTKc5PpRiLXd7era6tZvSRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nsRgWpSAffvxsb6iVLjAuoqRNfBawXwPezuGndyQadUUgziKs3BybApDXAjnaNWvhV4hvyjdooPCAow1vjpjbEC",
  "key1": "26hHQQR7r5GqbujeBn5P6uZv9zwWyreYiVsuipe1PQWJuYVk3NrqiYZdV7pCMyehBUyEXtgE7kmbKsvutazPRnuB",
  "key2": "5pAScbQnBqevhr5Un2DsdckcVun9AhdV6YHur1BvD1hSNFnFiGGh15rrTAv3a1iLCsqCN49hhBPto7WF7SjYgj2m",
  "key3": "5V6D6WgcALXPkvdFJTtbYM4G8WhBQ4peNMWQq2vJurSAXd27BQW3iXi2QNZzVDEdxxJZqaCX611o2ScRak2mURsA",
  "key4": "4RzqrgVx1kcygJsG6CKsZR6RgVVFkLQn8hXcmMjCQEEFtVKHDXQSgjnm2ekfuk6DKG33GgpLF2fWB5JgCz5HckMT",
  "key5": "37kBvaFJ44wgzYNhn8EU8MpmTQG1GfFq1EeG1wizttro7sPN2hrDT1YjWPT8ik8yUQhJPZUs9mwYdFew7SgRaPR5",
  "key6": "5bnMyNGvhHY6eSwuyN8CzfTMpDrhkJudBGpG8frq1uu8HVRrU8jJktzSoHmCcLx9J4V5HAMmHiA9pVDtqswRimt8",
  "key7": "6sjZ7V5KQE29jqap1aaLcvvvEkHkFZ7Sq2DtKDnRPFvvLPrwgUVz8e3XC1eruREUDrdRJxDv5T8Dw2eeqNZcZRT",
  "key8": "39eYPFowxWohmm1hwc9nP4PaZWkRwuRkdLTGbgSy2LahLbhQEWSZxFA4otnkUstsU15JtAoKcC8f1Hh7zDzmULwn",
  "key9": "4GykCWKjecKEhvMP1gZ7ZnxRKXkogSZ9xiqT7BSUXkjKPzWKdiEDhz5bTUWMQqWW7FchZjPdZSXWfKqh7YfUqtbb",
  "key10": "4ewDvJdBidaRYxAE6qVEvgLk6zvY4WoTfNJaATwzJEHi4tL2FbYu1pGwxzfbyJhtLdZfDZkaZeJqdFyJPd6jGcmD",
  "key11": "3AufFir2PZ6wUyLYeFWVh1rin8LvkumAzPoV8zThrisKkQXuZhkbdhsQdggHpYA3tN4FWbKUSA83CAW82AvYxZY4",
  "key12": "2RounvsiCq2GhU4WtsizWsvpjRNJvN9xLuBNsQxgJmuDHiQR8L3W8iNrHUtcVTHrCqYWMauaodShFGiox5AXUfJV",
  "key13": "zMoKXnx93vNiejVPMhJNM8LPTxBLF1CYykNwWm4eS5KPm5SH3AQ8LS2y8KpgKTKkGt8XczYna55AGYguxrY48hi",
  "key14": "5mNfgCZhPJan5zbS1RQ8Kacyz2jkBxyFsdnWTNpGTMuCyNnQuatxke98UUuvW2dTbgHojXej4ouqNg8hkqdv2nhS",
  "key15": "2jvUfWeV6SY81piB5P2npY4ro2c6wjK7XhYHE8ZXgKV8SEHnCbWJMhCXh9HQNeCaKDG9HJ7ZrsoMjTdZB6bfvta8",
  "key16": "59SLkb1ATdYJsrbphaL5SFnzPBC1Amenh2EThfucJ8Wro7QMY1vZvLZWA6K5jVMsEgz4hMYDWtwRA5j9ckKxCTZT",
  "key17": "JANL1qoQtdkGxo6dzGeSi683pxt9THdCRhBqXTSFhQmcCm6vDFyVKoc3hV1aPENmPpFK3ad2vJFyawAmUWp9hCz",
  "key18": "5xKvQuuTzMhQBx6bXV6yzeWtPDn1VXBVos8FEpo1cqJUPUN5Wbc3f2LNJNwwZy8xkGfLuYF6uB3PUdTHbFa6P7Qo",
  "key19": "9ut8HvgNbdDU5pdBu4GingEdVnydT4socHVZcoKPRu4tehptMptoNrPLmqN1MEeC63Dgo5Ks5iUueKH3vvkCkfR",
  "key20": "3UXP5vr2imACck9EtCVdK18wHBkqeyFuwTBgayA6w5h7gP1Y99qsWSAYizmLspxVuxcxaeeqTVJGgJnAKmWj4jUx",
  "key21": "3Qz78evwEQG99qGsaTE2nuBgQ8yjX2zVgnKzJxwroMrLjvoB3VJv44eZHCtTqzT8kHxUhgDBz5EpifPadD2zNhzj",
  "key22": "3rQKfkNKsht17bKDaYx36H1pHPT1jp8uwjfMbpDbSEth9owrr9n2qzdCnVR23w3pYoCQUzWDcd4G25uqsKA4pRx5",
  "key23": "67oyFeJG7ZFjict7qbhzT3Xx3kXqGyz8nsXRngYXgpqRfnx4JLag5hzcDdk5h1QrLx5eincTibFqndLDcYjPVUam",
  "key24": "3s8PZh3WR2LTAmroEJNuDtSAbZtSsTTbW6xM2j7xGTT6rYnewfK8eWnjLLppwccFhsZ963N19oZj15RC1DwSjbA3",
  "key25": "2r4M2fBA8RtKidBSKxhGa2gKHpFUw9P5yLRUA8LtzRZ7XVCKjr4U85jqakEw5rsuifeFyJRiSzKndRVQfC2DT8vL",
  "key26": "5tQTLwMHmXHmYv1BLRPYRET7QuDZfLD6zTyZFNGk5LjFk8ahyyNP8yaqNqhHfy4Luaxm4DQFjqwfLFfHcrHe74Yk",
  "key27": "3eCEjWUfWxLTjig42sfn7Gu2NdPGrP66B4kyWzVbFyYfTrB4bMw6uCoPYnNsVacsGA7XKGYczQtj4SbMu4v6Q62U",
  "key28": "2yzooeLwsGM5nQXMvRrTtKtq932jdowQF7b4eZokn74NwYsMKevBXEcQErrCQNGoVLQHq7L8YECAsidR5mjjDKcG",
  "key29": "5o12bjwuKVEtstUWd7gJU9cMFgxrkrjFUjxstwg4cxGUZMhp4mCyKPyTAC3TiGP96FDXSeznUFpSqfN4HiCwPNhX"
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
