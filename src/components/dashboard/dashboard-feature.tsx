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
    "n3kj8d7TKwMV5EwS7vUfkf8gjatTbyDsS1y71oFYfA17eRD5UzECxdhBnMNoa89dodnzVEjGw22jeGEMwBBvjJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qqgEzYPwhbrvPHw1GfpBebo5X8RrhpAkq6GWw9WAiZVeDQtJRa2jD7VUvqtah4QarwtPPfuMvvqBzNYJX8BZiep",
  "key1": "FVKcmY5W1dzdtqWpmMVEc593H47RH2dBELFPTyRgjyJvKYg5xg12tUeKvMxyGSC36LPyBB3eMC8ghzrc4mKP4z3",
  "key2": "qFYydzNt8VToZ6iV62DqNWhrQmyEeLFoGpAgeXnGZz5PZhBEXquavPk6RVZhPFa9qJraL3Vd6mazKyskD9TX8aD",
  "key3": "349bNThrhrXcn2fewZKFvE2UfQAkYHrRG9AdXsXzZkedwgUphu96BycixHx2aZnQU8ZdUM53eGuU4SAmCH4TexqV",
  "key4": "bqXKfvZWo77usdsuRaPatgN6EDsY9mfVf6EREo9kHVTe7k3ZneP1HdGUR4ujtZVkcNtxrr1PBJ2BcMWVSNBmsyb",
  "key5": "3GRDc8T9Rn5poTKwuqoPT2WbaYTxfGgX5yTVyZcMyKNPpN4LrTngEC1rRVvWByuQyt4U4BfLtvTjL5p5vbbMKFjM",
  "key6": "5eaGNpuJj3X7vfiBPnBSsEtQywfe9XCG3gnqPkCzbbKJuYd27gTWvGZDhZrDTu2gVqxuD2tdswhQg4NcT5u6Qdsb",
  "key7": "4g6RzfiKjYwEs9EeWyFQLzTEmwhhRrNimVyyGcCe7BbvdBBjMgX8bQiK2qwz7vN1ecHtZfKCBSiPxhfcBqdA6dHg",
  "key8": "2pFTn7TSnNag7Bthrcjx4ZMLBfknhtFAJ3Dfc5VSuMXSkCj37vdupAzN1oZcxNms261cZtmMgiNE7mUPvePu7Ps1",
  "key9": "EVt9nXTnzc7KdecQx7XvbV2GovzatJcBDH2tZ3kRohEjL7KZKqhthWBRZodnJAmBcqcSQ3w2ZvHNuBbHeDNdG6f",
  "key10": "5ueGAgaAvuaA1UL6FzzbGpuEWTNLfnnHjdkiHSz33yWo5xrEJhgPv7oinKr1KAB2K5h5qC1yj4uhkgcyMUBxn9EY",
  "key11": "5JqFiGpfJ9qGkJTJ4AyBbFwB2AP2wN8agS9NHkQfRP97dDCuuhXhci1r3TPr12G4FYQB1mYVSRWkwhK5UBi3i4cx",
  "key12": "dR1qCG5PwxebYV4PK5fYdbmVA24FCyg1s3ZY22ZoyQUcv2mvF7HyYMV1r9tiVpXfNtMeDv8vzx5eWc3AJ9HT3C9",
  "key13": "63JpMS74AAgsb2Loc4ZaDqZBHsUNgZHaLYM2cFxboNaHwUUdP9hYzzRZ1KgdS8Vh55RXXXD5LnsGD3hhFvcTgke7",
  "key14": "3hr1b3wriwa1bKoJ6dxpTtAZe65kw68EHMQS3MnYEhBft2PCZ4yGnYqazhUDdJKbeSbdHhaqQrPJZXcRNymq8iCr",
  "key15": "2EvdVmkkR852tUEo2y3JhtURCvgqTyGtnRxnwExGHxsKja6DjLaBxnwWoBJih5hMQcGwR8JwfHPeUp7emgRhopDw",
  "key16": "4oT8KFArS9T5oCF3B5Jjaf9i76JpSXrVp43hSahj9RrURURX2dapMcXvX2722Zhvd6uoDgkWvybUL8nwUTFEGJBA",
  "key17": "bjdUimuR3q5nM5iAL2e2fbFcmsEk8qsa36xx5KBDkoHMNRtbEd5TKXhoS3fE86eUGnCA2ATBkFcYHr4GBE6PuQC",
  "key18": "2xdYUQvvyEgpAZB8z6PQSWcF41igVxHHaS4NLrZtAAMYzcnWRD3gs76JVinmtKHxdSmwrMsxf6UYqHvhzeL4x36s",
  "key19": "v1rfQb4gNFwd44HMLeFyr5R7yv5DRuerzJQr6rWHPDKTyAwwtqE67usiEh3NgbG5U3KkareJPEcb7w4hN1ALbRA",
  "key20": "9p36uW9qVxDqQz9FsTFZPJ2kCoyWixLqU21PVg3KToQatdZ3owpb1jTBoMRX1pUyvWE24VSc4ehfvMUuKUsLV2q",
  "key21": "2u9sHMUWoJhUK6dNt3MdHHxSLq7oE78SPUA37fk4Ao3PJedVB6azrQkmZa7uxaYBFGBLWaZm95mYFKNr38hLDhoM",
  "key22": "5AyNkzRmFodE61EtY99E5NPjXLf8kTCcUhHKpc78nEBracE6w3bgSZGzVtKU1TqJkxE1mcMZodTiJE6a6q9yW1wn",
  "key23": "4E4AkbBKxXX2cqC7dveQCP8ds7XUyDEq6WFdkefPYrndV441ufc6nexAcKnZ45oDLZQpr13n1eNkjWveEGamevM8",
  "key24": "3kdtvYYp3kSs5255Bi8vpq4ZVBj3Jm7b4GVxhe9LjNdQ9JW2TNTfSXrE42hT22kCvzSYoEqw6FVjPJGxheXzD6kX",
  "key25": "55VD4oamRUzbQokKBdPRokwK4GhvHUKuXEmgyscEdqQVC2i86uAX1jWSd8Yqaj3bwMawLH1JpXmVbwdganaSuHUN",
  "key26": "mJbmsH8eYcg7acG9j9fAor2eBhnrYvm5bvrt6Wz3EKDvbhzWP7NbuGvmrWepGXZ2GrWUYuze6ZChBnXXbLWx5wF",
  "key27": "tVECAPFpSYvvpKL1uK319StYFT5pLCGEMPnPRJBDWYv6Zk2acyMBpvnbhWwreV7T781egNhZ9QMZz6pAT8pPmRh",
  "key28": "kN2UM7cwgQzwNF9aMkntpgYWW1gibhmGwgrKq5xcektFLub5UndkMfUTUQzASmWjwaZysaxiVSiHas4kYw6v5y3",
  "key29": "2bhDME7zKZBZcj7tMZjoScyVwaCCDQAY6E9KVNTv94mhjhXyQZ9j1UhQwvHmQKf4DjBMjeq2JapwLJt7w1eHkiid"
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
