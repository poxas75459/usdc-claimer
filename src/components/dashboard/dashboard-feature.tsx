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
    "5epLWAi8cZzGKe1h8CHr1jK76Wat4zgtY6EVDK5YbHVkbiNSYH1RxNJPbQLRQyc8TiWiz6isaSC1TVwyL4C3RZnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5moYWFvcyWRHdFX6cHzo1H8GTQtLbm6mcSe2DJjVq91754n4aUYx5WorxP4Bo2NsjpUnu8DT2ZnFn2N5JRJaXAgL",
  "key1": "37xcuJubDebGuF2mhL1iNzraw6hr6WuwkBFrcybgcH8oasihaYvmJNzGa3z2UTMMCddBQnEWPFUK1wWHPKzRegfj",
  "key2": "3jX7UhNWPm4XpnYQpyXCcEwdwMhPtVAvmsDJyZ8g91w6mrvPJvC2Jfx52psqheeNBqbN68hjFq5YLsSMAYg3Dcoh",
  "key3": "2zXFLM8wxxLvwV5deXJhpfHGPcpz3wJAB4faaP127zAGiSKwXY13YHrZuzijzfmeTepADWcRaFQaMLhK1ANQoXN7",
  "key4": "3ptEmrMpc4aCnVtJjw2hAJfZDLv5Ek8P2LVJi81wRRc6SoReKWffPT8tX8KARp3wKk3nXtYEAZZVBVd8MbTVCtrR",
  "key5": "47o5EXFZ6je3rShDXVE1Mu91BJLkEXy2pbWEoNFnJGb2EFre1ZzWQK9y4eQQ5Rv1YzmyPHJh4W31Z3e2CkUbfMZ2",
  "key6": "2956V4ctF1B7avMYH11tXMGt8XpohkHxvTcmJko7bY1Qsvun5X1E5vTSmkA7krgkXBf85RnTQnfucvMt9nP1X9ho",
  "key7": "2aNJ4cxM2yjCUjHZnzUfgM8n68RDgDRWkppKnPeBgAVkjEPMBSqW1PQExEKiHPCJb9igK5wZUKSbhFhjRVZoQEbd",
  "key8": "Yuc2nVFQpDVE8tqZzTpjSJzpEd9642uBW2XEA57aFXKdpAnPdHr4hwYvedBkKYa1sLtAocXSoBh9oySp4Vcgj1T",
  "key9": "CvUSD3sp7pR9Ej6S5U5nmBxaQSc6F8cYfzQjWs9xaVrEdNsen724jpAZp7Uotbf6BDEYf2YMAo775NrXCHhf2wk",
  "key10": "216pFmCa2ftHKcaS1wThdmgzz7qTQMLoLQJbr5kdnLLuypiqEWsdZ873q4X2TZ8QtLkU7mbf9SNm8LkJcmabZvZL",
  "key11": "22WoxfhCo8UwnFWccZG9h2otjhFsSc8UDyvh5fkrappDqEaCFVGc4oFFNFTQV4ZTRKW1vmSGSzA4teMB3LmHqe9B",
  "key12": "2jfB7jDjVMNDn1y8DPy3Fp1uoa6sprWjxkHYxnK9J7EaaWPRtCyNWNuTpyXjC6zEn2gAzwbsSyzonhYk9NkoGjMh",
  "key13": "65GVJHnfNLgQZ47Lrpd8AfGTshcXuKgDEsnSZwuY9wytvbkf4t2yn5B37YUy4ZQFN6newabjCkFunq6WJHWY2Dak",
  "key14": "46SV8vjd5yqRUmTkZaFw1ZPZYXFBKvXveDC9y5VRNzDQCNJwnpVMahjcAp5GuhtHexB3P8oJGFmw7zk48DRMwabV",
  "key15": "2ohZk19hZuFYQrDP4FkB9iyBKHjEQuhHUpfYH3RXgS5gukZg2qkGUafhS5K1hxqsho546SphSePzfqDpRtLT2bu2",
  "key16": "2wDTaZXtK8tFwuJwZmzoGu6ecBkfeaWPqY9zThqcG6qbttqaZmNj4i2hxz7WBqo5Y8ha6PR8Bu8kjoY8BiFLhUPQ",
  "key17": "2gb9vDbNJCogEKSd4Z4oPpJk4cUoC1cyGH3N5sajdGdAaZCmRz5LykjJyj2uApKrQ35YLzFHCZxLXR3pokeqK176",
  "key18": "hXjpxa6PZMPbV46LwdmwfRKTsSNK5G3BN5YWAAsq1HJ1wfE3ybBNBPprS2qJpBu4bjT71HL9XbttTbvKeomBmkU",
  "key19": "58KVb6muaBtKuExVduh6AUu5CjpnEbjM14Sz2DeCNnrcrDqU53eoTAdgX1DrXtxNCM4GjVyHiLZZ3zseWHtthdrZ",
  "key20": "3csdrNTYthJrpXckQAR1bvAqTxPs5SoMAu1KDuUraX2CkJP4zWug595BGkqZAP2syFqN9yX548qk4V4ZytVaNgwj",
  "key21": "2tXfCZ3vmefD8cqe4jCAmxwMHrAq7TpdxksBFhxoFf6BFds3ULuscc8rzvXqkeFTnobmWMC33VTAGHfmHTc6VSVz",
  "key22": "4LhoWBVsQZiW2fakNNMULowyvuQhEgzw2pmuxXkyg5r62Ph1HgeUbXF2sPqR59uUEjYJYcKo2bgdiVAW822Qfo9e",
  "key23": "4jTjBCen7KtH8Azfd6KgxXAN6ie3Q2yKTiFJFa5GbVYCtLeyj7fDFQ9mKGpbEWXQuYkLdR2oxUk36d4JXjikmp1U",
  "key24": "RNqGL6p17VtdKA1UrbjsJ5FpJCjDGNUQ1DjRVX4XL51hP59jcDrX1CA2HSs9186VauM54FQksyRQaBMPNg7VZWy",
  "key25": "58tFttzGxZhGhSmFMrRAs7zKPkMG1bBqrFevHxMNP7LcMPMMwjMv6t2n9wmS7Cv5RPMtBdP39oVjQ56hxGTtmiso",
  "key26": "4fLMEywV29Y8MCwXqoAGMpY8WrCTQUS5u56negGDZf2uJU4LR6MRjvnXhv8prm8ru65H4LrHm8pSX9nxjPVBueLu",
  "key27": "2EVjE1pfzccK7dFcfTr33K8MzYMG1Ktq4wXthBmsMehVGE8GJywtiKTUxkcjAEChiKTG9quihy7nwJvYC8XrboiF",
  "key28": "5F9jexETWL2QYwYsuLmh43sQehV1xegdNELJtYYzT9nhBTsyssJJF2kmCkgtJavTma9UQeGiUx5p8gRew9rATGyz",
  "key29": "mtr8genXR2xNevhbd1RCpqU3oPsfSLg6XjJ7Ckuxq5NA5BpV3VgHdJSPXuxGRjqezqMTvihBV3YdcdxEZRczHVC",
  "key30": "22VqNV5wFBWvUYivALgDm5jq4hvHLSBgJe3JRwMZegzfGrWUH2UxfFVWmDiqAwd5asNQ3PX4MZjWjB5g8uxQzeCy",
  "key31": "4a2djGqogZqKKpeTGuHbDvnczqRvVQ3BGmarttjhh53GH8Y9f1N9gFr5zjWhWh262BxtRmZz4PQEEwbGQBgpGSWr"
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
