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
    "eWtGD3EWvzQMTZwu1LbgVdPu7mnrQfh65QDeYHNV3g8cPLpzG6jqgaAS1gKfUYe5NbCBPSTXy39w3ucsQtn8nXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BnGWWJZ253LACuYaMkghXCck7sswxZcZjmi3dWi7ZEiLRKP8J8hytUBtH95x86Ld9YmieEgPAXGzNVQw8gk7SYB",
  "key1": "3yXMELzZxmS9ED3SptYKsMbpkoMW3zjFRcPHiWwvm4Scp4pGHjWwAyaueYrz2hCwWNsEL6snQNf2cyrXgsB4iQb3",
  "key2": "2yZC9F5aTR2cAyXR1ivynDzxQNwhRuVja6nsgUe6agq7KjwGTyhT4G7TUTaVL6ns9zBwrtMcgP2Wtqi5qicf8K44",
  "key3": "5kWEFFDRVWdMAdBMsYPHmX29NSoticaekL6yoNjheAM9GCn3wcXYLcLZT95QE3NoFvk76bSFw1JwBR7irxShMHu1",
  "key4": "39f9w5JuB3ChuxLDeARTas1qSmxWAuJhwbyv2ZXthn2sh9EVSgUWaNaRRRtrL9ogCZG9KuLAz2acWfU4Wza8ZrP7",
  "key5": "4EkzYCjiGZ2dFRW2kYgJyznFVWxiXbiDcguwNFwov9Xo749hbQU126zQ8RmtHibgdZ8595SkVeHaJRCUENhdgcp7",
  "key6": "KYizUgByenrJ1QPPxvsaXxS5DAzmYRMDH5iakwUpzqdb8N78Q1Ud7D1cyHKzJZJnXGHaNmm3wJ9pKGfzF7kZjQ2",
  "key7": "5ChpYBG7JQwUZZE6EZUzNKuNXA7G5G9RcKgMQcns96NV1bTr9yM8CsSak4nxm78aZorm98SnzDmHKsAdpAJKjWh8",
  "key8": "4ugFmHBHm9Lov9NR5THkV59G1BWMTDDG5obWfH5HPnsQxqExCXBipmLkJahxgcBdUZgnxAcZEJmW557h5qUeDynC",
  "key9": "45NotkdqCZV6YxerZoUSQtPchHMP8VxuW131Pgr75ygoMa2tdexSec7YaZhaWf36GPeGhV4Lph2pdvkHyVbzEwgL",
  "key10": "5LKdyA9pPEokagwaLfRMvVsF7pFUpXcKYWwSgq8vnhtbWtbTGX8wRY1v7inm4n7bDDgqUJdxpDq7T8TEj1WEUosP",
  "key11": "4PMrFrRoXFB9sRLB1GuSCqrE8EpWdmQQebou4rTWTwkonz7HH5NZ6CTdZ6co6uw4XYm7mM6brNUtBPW99tr1hDnb",
  "key12": "GXVTpe9A16FfEsn8SAzWBFtesBnFCPaaW1pxPVGgTkboiLaZuwWLpPBeA7tuqGJ7H2P58Bad3RZadZuEtxvE1ZQ",
  "key13": "3WjVeVdV1Hh7wXkMi7nVYhxsih2s4MicjUPNEdYBoMtVT4RFkiQdvgNa8uSHqU35afMHmZ8Y7UpjQLrLN2D4WuGR",
  "key14": "2CSnA8ZhWkmdw4WfqkSu9jvyC7deoRBBMtexaygoSeqzK3da9C4ZUb3dLGQCmK4NXfUMMDVXdomL6vpJMvDVsH2s",
  "key15": "2hYM1sHg3PGtdCcpPV4wmDchnDcU8FnWZvP7AxvXjv2dfUgBo4yqPkfCWXtdYM41JVeQkQU9g5wcHZmUvgq7vZN",
  "key16": "M9fhy8JqUn1gtpMALwZek3MKWMKDyrvhDsbtwykSJJyzmF3xAd87mbND1rCoUKnWb8AkHJCXUjdGQ7yKZiLEhLQ",
  "key17": "564K56uYg8GhXSYCeYxezMrgzjawwVeaPYmYxLY8pksRjg2JFcu7pjVYS351QnNDbjvvpmtTgfvitsnec9pEgU9J",
  "key18": "26nMkEjBXawonfsMonLLNqFKVTjnxKNyRr53Ju5gMkhocLHkiZJFfMQiQsSPR1mD5AtWUPxavCocH1Qp6LW3Wztz",
  "key19": "4eZuHtfWMjCPBEPLR2ahnwzPD2Ue3uyGfrFb1yrkyPES8yhKE54Wg5MuVyN8q2LUBipcggAp1ihsA8ekZRUWA2YX",
  "key20": "2A3zfCt6pSpqyZG5MXCrtFoFKQsPEDBRUXPLUd63BCH5DYC6pzAyzqLfohUBeMJ7635yDd2sTq8A3ZWUHZCvQUEu",
  "key21": "3rQbKuv3aHgoHEedFpqBPsDTmk6ZFu3uC1tuYJEaMv4LGJEah7zgtYv7iZZLGsVSTG4LKFCYTakPhyqzCCHvg7yA",
  "key22": "3AA1qvnDzubGSNJdpceCDyKpYg1V1FM9sJ9DM7Qm9epg2iTe4GwyzoggzSKr5TkAJ2PaHYb9AsH1R96qQgc6D4SX",
  "key23": "tx9UaPaNGJGeYYUPU3hFxUje4EibJADkTSiniQcshfEWUss9LQZu2Kf2uvxQVvXiFXGFKd4WkgDJ2Xdcy8us35i",
  "key24": "4PG5GAWaLyQVsEi3Q9tPhZK9CCNv4GbFqHNCb7m37f8Pfa7vtybf47p25RWo1wqbB7LRAL9yggTbE6jKh7fEuuxM",
  "key25": "2EmjAGzGzKrABzhKJWoe3mSRBpqrhXyoNrQrzvpPaSAaA1nJfPuewkjZm33Cp97nwKyxP57Pgm4WMMwN3vrprTd4",
  "key26": "3YYaRBYjTLLpduyEK35vSkNyYbv8c3dpN1aNdoYeFE7JA6DUMxFq6oz1Hb2tsLJaBQ37igtfEwAbCypakrjKc7ex",
  "key27": "8mMWgF8RMCmf8qDfMhEKw2kct4rDNTTLv9hCrEZCubWaTsGpMwgUeJPLTh38AdWSFyZjhQgevouLFDZAPS9HnMJ",
  "key28": "2QW1H3RZJPeZR2WuHLLcArHGkVFPTx8Ma9GhhCKQbi7D6EzTFmZu3mytHJWtD6szeYKBUkRdLqbTr7uWhXqg7kF",
  "key29": "W3VhMxHAkuHfjaHRESbXsXujZwQHeeb4DfoSYwrKGaJ7LojQmk8awfqSZYWPN8wztjxH1WvWF5P2TSxd1v1qTeB",
  "key30": "4mteGsoGcnbQbF6vgLvi8LY5eKeNbJDiGxuKdYo9Uqmx2aHzWsGgQPs7uk2X3hEnvqioipiGHuSszz925NZinjf7",
  "key31": "2wxjBDhVBzi6g2yLYiGNtA8SRANcp951kGvhT6KU7HduUsx8g5gMFnrQAVUZK7yUenrEtN4GPFeXHnwD1EeF2Mau",
  "key32": "61v3FPU2bAB6pQQkcuiLAyhYvgxjcvtJTaPAWnDX3812fLvfv1gb2tATE1hZsLjCLc2cuof3paCSow5zhtdPnUwB",
  "key33": "5MwvaCKaVaV5vv6HkMr1mv69Ttt9gVrCyiLFy5Q78D2eVcd12vd4ExJ3X4Pqtyee2LwVMQYSeBJSCpz4XEUxFPYB",
  "key34": "MSfX2BUvLLmFQgiFuSLA71i4QPjgiwpy8Rk7AY6mndenoY1Z1mNH9hdd6mGngkbf5tk2KxMdRR8JbWZ5x6yMMji",
  "key35": "2EeUCfY6W7Z8PtaxidtsGPiKR16HmbsZynSv3fsYPbAR2ShqegpurE9x4rbGMvFEzPTTZhgTFMDbfTHTtLccGG76",
  "key36": "knDAd4pUJQMmqH5RJZrN5KdAmNBSsZwXPjhNci4tLoNaANgTg4AUE8BBTXMQAkmF9PBi9ng6SD5V285XqoNrMG5",
  "key37": "4g4R5eQ9WVaRmeczmYHD7dyymTRca3avzmaXMEBue4MRGL82U4qifKnbnjhWP1gLRWLBwqXsHeoR836GH6W28keY",
  "key38": "5SfPbVSiytQVBoTiAa5kmeoiLRNsKq2CxjG58jcEQpNrwYwnCXdzcACVJb2FPvJFRSnbWcy88Q59pq4L8vjf2ft2",
  "key39": "3o9KLrnqb2f1dijs88bUDPkVjfKN5c8BhhGq9dqDEGWuJXkebZbgVHNjhMbv9MQTTM17VFu6cX2mSKG6JGYf6ekK",
  "key40": "3FiHjQTpGFUhdfGSW54MgvXhcfmmz581sVDpCjwrnSDAN9xu11N3dbsuVFCAxPrw4XgQ2EzPtGZ4RtA44LyubHza"
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
