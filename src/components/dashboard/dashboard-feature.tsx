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
    "5TSZxdCtqq1LVfy6SuY23kr8epxDxpxCBToDiBjjwui8EK3KuEaaifcztJYaJGWAqUUW1jM2jvTcNmpaTUuVMofW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c2ntcXcLqT2sS1LqaWfLNc63qWJXHw46EE1YZQQq4ap3Keo4XeUX3H6MTJZ2QRsnRB2rBL3qpeNzELMqaiLPnTG",
  "key1": "3FMtdjh6hF9erZupAMthoEraB65yQ6hsuXJY82nZWatUHqqRV2zgK9Y5RySUdQHcjtUPXNioxHGbPvqxsUWSid9J",
  "key2": "5HkHGS4i4iBfTC3cfD5J644Ya2FzNipdT6GbnU3495VkP4VUucY4EhEDbUK5QxcjU7QK9T44qNaytUSA8iC8nAXN",
  "key3": "KdMQ3c7SvuhHpNotR4DNLqX4JEEdYVRr5cVCbKNUgmWRGhTtvH5urNYmZ2AudtGcPn2DBbATNfsKCeWF8jRKSJd",
  "key4": "HXpsALhLgqDGTwoVZdEM61n6jLNr5GBhJKZmdFhTEZyd1v4FeS24RYZKmAZuye5n8ru8r9tzxTB344KQhNEAgGq",
  "key5": "2Qhvwy6Pog8Qseitke88CWtMG3qnExt8nsVqhFAU7Rv44gJnv2YwnWwAXD5Cq3Z6ne7ycnxUz3nHrNqh2rSMWN6A",
  "key6": "kJd5Q66JekngQbF8yZbyv4za9ipSNVUeQbM2iYrnVJoCoDejLJVPN1oVSNgd6G8B3AtiX8PgvZzGWBMsRKaj5oS",
  "key7": "2Qf3EUENGS5eXtz6xrPbuC2KXS3795PyhucJLWnWh388jxpA74gq9E2Upndm9STK1Cc3ybxfXvhroKfJdiJ12ezR",
  "key8": "3oFXkb1BqAZSjDKUkzeZ4boMPs6d7sbB3mKJavTSutCTT5haPnnLeFBSVgcVnRamyBaJiQ8a4GsH8qBXgAVrmKVk",
  "key9": "5w5s8VcJb7A9zuDPaVbP5cMZJWpboerZij22CEs6NihhgRbftyLLWFL1JwxNMpb8Pw7egfWy7stczL8ksGoErtpE",
  "key10": "2iAMY2xosFWnwTazbrEq2vFW3kTBexwunx5V2EQWo6NMYP46UrVYSchWHjFk7i4x99va1GhWwu7JauwZ6BSkz1jb",
  "key11": "2ZWtSYKQh5U14LvqAUh7d31M8PZE26buPRJPFxCMKwZvpEfXV69B8UBZENj75jiXGNS4ZxMqmshtbuqtgwrmzyoo",
  "key12": "KqCbHD74amKcMeqARyWdES2TjmrmyZ2r8JXNp1w1WDVhHJpASjqbzQj7zqQ2mvSLZ9PiTNr5yusoN8zeiSnAmtS",
  "key13": "593RUon7SV7j1j2FrCTthWjFSP1fXPsQQ4gA45kMqJqYSCJ3a6ak3VhZr2xgXmEszvRrwNUEq6mfV4PHqXYgPj5F",
  "key14": "4tjrRBFxKX8qaTJAqNjvoFzdojhDkNCf1a8fx1WKKra7BKCe81KfyHcWzfpiuGMGMd5QehJCPSHyhyic3CEUpoKQ",
  "key15": "38v5Bif5UTdBtoxBhaUVVJTJEPyutDEZMueQsRi9E4HmgGf7LRYQByQSqus4ub59iNZ7gSRQTUw1fKoyhShYG2Tk",
  "key16": "2uXu6DEYqb2RwJEWgaUeC98eSegjnnCBcgTYGDUYtoDsBdKzKQJHo6GqfgDuuxH34LD3FArWqGH7r5gUM3gm6dTe",
  "key17": "2e5FRBgrszMgFUMEtKg4Gq6R2iaDXsJjS5YvkgaJchU7dpdVt3ZxkVmPta3abqxeuNWDnt4BHdVXQKzT4c5eCevY",
  "key18": "QpPBwN3oHHAHoFKw944FVHrHdT3FqeSYaGCqzHzDGwTjzU82NMRUgnuMvDrkvZjcAWm7jKtuXnuW7QKbnqwHp8g",
  "key19": "DU1yDyPQRL6p7V63ioXSN6416dET4ivjBNbzFw5UjhyCLQTxxXPV5q4THckCGoq5yPtBhDoUtpe8brs2G4Ybmee",
  "key20": "3q4sre9rQx99FGDWPie4YMWwVs1vkHrRf9NwQC3Mb8iMPiKL6pGv6E6VSZmGBkMtdbJ8tGF7bKXVDjzwzCLVSpoL",
  "key21": "5ZfWJwCBCqr6xGxj3A2ozdn5D6FJonwjUkq5Xfic6eW2HxV8NyFqTgzV5Wy2DKvksFbdENvpbuduQY6xsnXMVDdu",
  "key22": "4PjCpsvSkRYXai9KasRZbL4BonGkUDdx1UThC4JZPCPQ5JKNn4bcdhAj6nMXZtfibxV7KGzBLMWYZq435qQ56wdx",
  "key23": "2fedGoDPhypbfzFEkPhaWP3Bw2RQNYecZaedwydcp5fTAoGK99zApzYLQY3MCv3TRBmkpKheBEPv1HeTT3As9Z6o",
  "key24": "4c5eL8HN9zvN2c5eevDB4uRpRdKkT15RBHfn6FGkot7eGweLG1cPvfHb9to1SjLKH4BH8jAVE1tMGesr4UbNMNMy",
  "key25": "3ovzSzbf6ybBcRjBwuNYRxAbsyGwaNP3V7pkxBrbbv8uM5jBswsdwb4qfcE3Mt5QYWGsrqJpAAZSDDtZx6gjByFL",
  "key26": "YKHN43X64DCLJUjMKTs9AHPdWT5x6B4XPC7J9yjp9wYAkGGW1NzwzToG5LsPnCXSKvZrcvDnBHi8Q45eXwZZiK2",
  "key27": "3CR9NZjqFK92ibuaiXuLYAjKENfPJxC9LxR6gszBcZSyUC1MHGvbuULGc7ZXnWt59icK4AoNVrMqC84FYktAa3hP",
  "key28": "QEBFuEcbaZoPbJtg4WomvZuZZc2QexdJMMYSiDEMUqWR9ErbYM4p7W9v5W1RNCzMyB2KKfUkKWmthms8pGX8WGM",
  "key29": "4exbxvw1NipoRw1h9HveA2fjf78rFbq4Mf1GukhxpiJutsBhfEkQfkLbf2JAGB8G1pixnyeWsYVQVF1aAfQgD2kU",
  "key30": "3dJFkVm8ubfSeKvbjuLy2yZYhCKoGA1YZ3zCG4yDvygbUuXNJginEoCQQbCmcieB1kS77zWEyduuHirerum8YbUN",
  "key31": "5qi1TeiWf9YAUcDmzJhn5Jks2UQBonTc4goDYkrvUME21zqEUBcw5i6m5QMkZe9Xdzk8MGhFiyWkAYrbZGswG81q",
  "key32": "jSksNTCFGc1kWWT3JXE1CXexwzEqui5LRBdBYf8WCBiTdtKJ1LTuvUtFJGDg2gaP8E6Gie9y31ZyJk64p6H8N3u",
  "key33": "3yWcLCYhYdMJraRbZFbDfFMvU7CbbQMn16ksweJA8J4dFzamLzEHeGpVarGbtoUyg6bg6mK1dFwTa4e2CDEEw9yo",
  "key34": "duQyGPwZYUp2jVMEUY7nTt4AVhgp7AwvZB5U9wah79ekG8KyBj9ZVuzmHqCyWkSoCbNjrc5Y9wG1LvyZ5hKEHhY",
  "key35": "3s3VDccVKM1uCmUffTqQW39ZKpciN7iGrdWfyQfroGTgJpmSBHHc95jT2wMdpTp3NRXqWcwiLzDDEsdxTWEN7Wv7",
  "key36": "2vhed5aJiSdYm9TpPQZB8VWdgWnH3sHttWpXouTXcYZeqotSThKyQA4i8jPWbpQNhH65W6Txw7d6yU9fDcU29DaJ",
  "key37": "VZ8UPivSvpjYMrFLd5ANXT9hhMMxCjv9DGV5L2CQWmqocGh9ax7rQTC7mbvjByf8D5aAJ8VFkh32s6RZpSjJuef"
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
