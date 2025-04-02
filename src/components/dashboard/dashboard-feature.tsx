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
    "3s71vnMZ2vmFTCX5CpQ7BonwWpzg7yt1UfEZnhSHWpAPayBejKEpg5JEfo5ffKuMFX9Gwr6HwCD8WAcsWgGSPkzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DoksJyzCHcyGyp4bi9xxHSf39MszYrmjTwUEWVquHbU8M3i9QBwaf9foZUov6f8x6V7rutzRbySunH1GrEwvGHh",
  "key1": "yazyoCFgtWYAgCDPek1AmMTrtLqygmpzn2xPsmBxAa4hfYpid8a9UdWL9AEauKfMKdteJr3Q4hjHKm8gjW1SsiF",
  "key2": "5Jot287FR5seDvsa4kZf9u7qFQEwdgzG7f3uK9n5LdhDoRuDgqGhUCqwggaLxygK2DBTSxPb8Sxg3EMz4m9GiBTa",
  "key3": "2GQymVRHqefMzRdgNwWDR9kAhtP7pEvPZAq8Cee9AU8VXZVSHHh4M1BvH6jLrrDJF5QkHCcDTDYg5sxWL7BAPjvH",
  "key4": "5m94fxHdhrvqhN53yiqqX1sUNDuZjoUhUF3RUnJzTtp8NKYpC9DeXcerppbnorwe9ojGUmPt7meLEYZ7r4rKqCAJ",
  "key5": "5Vm4NeMU9fehrKoASsVYs3PqD3mXGrHaJP38btJhntwVQhgMgVBHWzukmKfcKM9jdGNff5pmkQL72eVacCwH6HTN",
  "key6": "4zmX8h8s2eH7xRUG593FJdPQsnPHUfdZJBqHzkmQF9Lu9T2K88Hd9UJQofDmU4uYZi4F7u9fRcRZzWHwecbum8wB",
  "key7": "35J9kYDjEFNEkJwgN7keuhWfGQdpEVfDhK2wye3QJqnr9eVLV4Bhu1yrr44yVi4TobuKvz8bNBBJi7Lomn9f8zAR",
  "key8": "54Ux8NMzxGmTBoR2SeY95WPUDLj7cURNuYS6WngDctxf5q5HP5h1GreBEtquiR3heuFQai2w4piWmwSddHeqfr4W",
  "key9": "2i12TLR4LUmQbv73yCJthoKWwCYDNdgeGtEhFqvbAv9BH2yE8rRKiKViqiKr1PbMRvsz7Abzy8htsbPsNsNSDBtM",
  "key10": "2AH4eyiHpuyfx6VUTTrqicicDSvBjJbzdKw2HgZiv6kMX6y5tFQgheqPwfjZ3BfnqJwGqhNrWfeT4qBJKXjMt8ZS",
  "key11": "3V67MmZSg9GULFBPS7979QoRKkSiTKAzVUFnjHqp4fcQ6pVfP948cQAdeTKKbxXXw6wDedaoPhuRZ7kacrNhe85o",
  "key12": "eg21hdvNgsFKEx8ueFB4kpqFaGoU6XfB8wi5AMVcwQgtBQi1rT28JWay7uW947bcJuNdB3XX81ehg4fVm1HUjdZ",
  "key13": "5kACgFXc9Uneo7zKQgHacZRXtfCvDQ7dVDmpntmNbwrELTovEqpqtY58PC6rrwtori794UuswN7iKYw6hWBk8nQB",
  "key14": "4qPKR2XBbsG9K33ZVGNW8fJCNrDgmEkiPd3tSXn4KEn1urdmTKtFPM1MuH9h74SQPXUA8qvFqLGCCVweuiLU37Pj",
  "key15": "5ahmZBrZaT333bntHNbGrkx1dr22vi9pfUbuPtZwcth1VatWjBzNUtfzKr4Qto3emihbNTPW5QTHC1yAnyUdZ8go",
  "key16": "5GKfBEzMW7G5c3rx4F9yvUmCFLpFdyedifP72HCzrXuvRiLd5t1rKkEpwFVhGXVF7PdEe9B9iWBUgUFjbE92Wkgt",
  "key17": "3VGrFr8d3ri9WAD4hks7QGmCXWE1Y6Vr62hfJyVpJ6VbizndCZ8oy1tBg4e8rFgoVXpBvdu7kCz6CvjTZ7D8BPzf",
  "key18": "PfnSPoAc5Xnu5rM4V4Gr3pcM3o6cNavTPYTCQx9SzjQEtdow9SYAjUoVdXGgJJ6JaUxh4rmfXWeBJY9kce2amaA",
  "key19": "124FqJvgaMnPNKk5DrmnB9LcMfoZNTt9ZgETXtcXcz8tRTFEP1oLkfyTdCh1wD4L8uacijyQPuF5HiarjrP8s2zP",
  "key20": "3XtgNdCQYi8DmWifut7DXyMZkon322xFacHKq1rpTXwcDggzLNCh5FmtxexsxPAsQK3XmnerbLKAkL39zAce8HL7",
  "key21": "4DY62K8y2DLKKgACKrGsV6rHSmrkk7G6u9pVsQfPVhdT3UwZqDgc5crSQ91TqgrAYuFsDfxvSKKDQuVbyHM7iBQA",
  "key22": "Lt1cEbhGR9vC6VhVjj1MZBwVeWiUMesT2D9DNZ1tXVJrjC6DPTVtJMg4xj1uxHdjmhRsVTiBgc8QP6JSfbZA2wz",
  "key23": "53txet5icB2spfFwUXHXpgwpbzjuRFSZAe5DhzrUYbrzq6QD7TmNYAQa3VonkuwxgseB91ZyE2x19ySkiiAS2Xfq",
  "key24": "4A9Wv6eJpKeACFSc7k3SnADg1Zcdw2nsy93eq1P5miQZ7csidNCyyiKf7JDVTLhbZL5skTqXc61chPDJBXuY4i7U",
  "key25": "sF7ix5crJiLYgyaiaSUBF7Bm3MFXHUUTS32RNF1tMwZ9kfiCyxvJ8YEUZdgurnHdGhkLNcpgA7skueEAKGuWz17",
  "key26": "2ExXYytLTS6K1uTGtJrz8sCBZ7tTEm8atYoJTrBTNonp57WQmnkhfRM1pMaSo3nukJjZh3k7Qq8S9tuqRLknkK9Q",
  "key27": "YZHDNEqW7KmcZ9u4upVoySCRr3Rcy3ztfbc5ZeZMVhJqYFbDNrytyCmGm7dtAyH32Ko5Y3ZGUpd68jKNHjmDxHn",
  "key28": "2Z2ur6JyPGKMHvSs936Q2zTx8RfxaFGgiGBzBKSYajJ7CmfWciJhs4P1n2o53a1jXC9eJxHx89rZWtphXr6ppoZo"
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
