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
    "5Bue5oSYmqia1mRpxv56C4Rce3fsztgAAbSHim5RW4hgfcK7BSvCueuSgF96iYBQXyp6ky7vYC7kiCSyhtUwvrg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RqPjwf69oHk1E1jHHtTfV6SDjwqkiS3aYqGNRBEQQCgHBPpAJNL7imiBuT92VEVCF67tiSk48811kUD3J81PQpp",
  "key1": "2kybWKKwmzer8vHRfSAhzoeTkNWJcB4ucxLjesmfE1JpTxGdtCfw9XLgRqmT57NmPHojThTWr9KvhRUeenq6ar3C",
  "key2": "2EPkN8xYcgvjL7Nu1Y3YQgA3TmpperYgJXLk4r4fSjjJHoksKhnwKx4KMaZq2ndVYPdZRx1jBMQuhMHaY1uK2ov2",
  "key3": "4Eu8c3nRWsmK4wirnqZhZYcojjjY2neAtC4czY386jGrzeEFQAphgPfdq4SQQN7Vnbson7aPV17Xcieb5iHNt4Bd",
  "key4": "4nzRCup2NSQHicKfh6k86LoJaTm1HoKtuU9AvR8LZ6ZvP1SHCLpaqCbUDoS6kpxahMzj3ZH2j2Q37wev6uuexrUS",
  "key5": "61o9WVDTr15hKRQYED5TMnUatRP7kGZHjeBegeg1qAQVx8WZba27Vesr3AToNtjyUDcLQBDiFftGuMZDnQsPFsyu",
  "key6": "5yKSHEMoReG4mGPGHYb936muVKKqbLkpWZJGoMW5QpKhKE8cb4HhncmmUZa2o7zxa7nkbPQrSn3PkkY8NSkQXQTD",
  "key7": "4D4J75tGwmdKH3HuLp4d3ADZrioJwDMm3LDXUh2fmdSseGNVb71QEYKBmp6n9627VzLsvExwu5ERQrnDLGfKGdNh",
  "key8": "isLkvZUUxNvX4AZMuMJbfJGtEjxVa7sbTkGihJXjqqdfo8SrQ2XJCyrav3N7shvrn5bmpWPTW4Vvp6rdPHq7K19",
  "key9": "4mVdwfsW4gfSqayzvWbG9AsQxtirRGunn4igGbA4Jehx9Gi6u27HeoM7J1eBTuvESXmDuY5HNUcT8Hb1AFY126wU",
  "key10": "39zeRABwSjowSvCFdeaD89f668vbRAjHeSNpeCx9xztoVTMu2ghHsVXgX5GLn56S4kEYxGyn1kStE94cd4thFDVe",
  "key11": "45Tbc6suE4qAQrWRGF8pnXJ9KYxAV49FfEb1XcDj1o5PDLUQ7rgDuyC8iGGHrbwkYtEwZUJRXjP3Mjgmin1UwkYb",
  "key12": "3WPwQjhJnWDqgf7u9pi6wffeSPLxRfA8mEvRs2Mq2c59X1ouJdLEQKcfi7Mj29vaWYdkcZ634t9SP7EAveMzg9KC",
  "key13": "5AxQ65EzL7QUeg59HhpkvxPsiqeowZ31ADRLbDFU3D9uYz1xya2LfRGyRJyK5err6a8u6fJAuakNFbccS53z3TGH",
  "key14": "4DjkJ2hrwaefGZiAYBPV7Pc3wkZJPkeJ6c8AAyhhicDuBZ7kozqsRh3kQMUZsVzSNF6DRRozcTeNiBkt59oyZy2k",
  "key15": "YXD89dHb8tKgKQhgx3zYkBZogQxy34zUWFUQt6i9yrKj45tCdqwqFqVW7yQWVPSRYtfjJhE4Fhkxg6oi1vXYWMJ",
  "key16": "2AxBV61W3vpRZFhRRQ8ZoxM69DNCfaRWfptRu1LzZ3zt6Zh6oT19SrhYvCAHKPFpHS21XRf6hQWKXcMaNETcpGcG",
  "key17": "3LvPyKeUFNuUdiKD5eonsELggFtmAT3vZGvFoT2yQwx1FzBFdVQH765hUEZwwxUCyoe1yYKxZJduFPXGZSJYujq9",
  "key18": "5wMrmYfnT2bNRGo7J2QVJGoF9K3mBdYBDs7JUt8GqZrBv4qQVQH7vXbsxYxknuq3JTV5x9LMYmvtb3q8NpUAqddr",
  "key19": "ewz4NHYkVtbjhckhp92oxmPVtqvi7Pe3vTk9m1REgmqB5rYjs7vV5ijgcgLJExE2J3zBkkiMRWbNhMP4s4sWx83",
  "key20": "2nYr3CSwsxdGBXm9qExBRbe9HJMd1czHXWrpQf4DTULPdz6vSgHg275Z7iKDtvi89g4HGWS6doTZtKcoDsaMrQha",
  "key21": "3y194mSh9KyPFGi6V8i561hr1dLt1GyNqZ3K53rQaiaLktSduC5QB15yHxv2miGTEiAE5NajMPmb4cDjU211EfDd",
  "key22": "5fWGho7nLctaqsV8yH8VCEQz8jWXRr6R7VVqeACWdfRUQJXQj7T2rxd9hMUZzb1iTYEuxRUfnqLWN61uzrakk65t",
  "key23": "bB67yn4C2eDA3EUoRuhKhxyqyN6PaidMVSVR4yqD3WptTP5MDsRAgNLsUVmCdjeeHMySAN6X1YB5abVjQq1McjV",
  "key24": "4umJ4RUngpyaTM5mYPJSLM5tdb1oTYqSuYdkHqRXC3RyA6k7Z8Lz4R2zKpdez23wxaHAC6Pf1QkYio12shezgi5b",
  "key25": "5iVpkeRv3zbELGVu1derUou8fSpo8fSiXmMSW3hjqTsQkTjVaFbuWQ81u3s4NamY1aFtueiAgUmy43LFqUj4Lw8U",
  "key26": "4K4wNhGCJfvchBWBW5yCBtRzWEWVGQyHEsScQ8nMHCdTiRCZ9zrmYU6CMCvDWLETAqRnL1RKeMPgAVq5oubS188w"
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
