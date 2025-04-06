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
    "38BG2Pap3epxH4DcUcnTJCUnptSTSG1sjp52xdWc9LobGyrqz2oFLMdFYG3rTTH6fQaSZbf6Vhks9UoeEa6UYRQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GzcDwHWTVz4UqzPQYMvsNJjJr3YXYfdbBQnG5nAScaGSyM8DoVwLwR9NvkaPjt3vUxpEco3Gs3aum5Hu7eeH7Cn",
  "key1": "2SYcbWd7fYpY7zrbC3SEGvwjcaifYbZxFp1pbuPk99Tf56EeJM9Br85s2dspRMwdNjBa1CARnHTb39XG4hayeXog",
  "key2": "656W2g6FKNYj8oXMFNWqLe9uiaEF6r6gDY37TarjfukrMQNVvYctPqmuAT7z5pNFvk21CwnrdkveqGe3DJBw743B",
  "key3": "PCBjTijfdJBQ8zk1f3Dr5SZJLrxFvuLnJ17YMGfp2Vzg6xWfZ2gVUVDnz4iafnfDyXhxJmFiCYQbRZEX1NuMwUA",
  "key4": "62mGwhzLSxwMsRVJCgRmbF7D8EvA4BfqFfu4PQCbPHm8nXx79WwBLqKryv81XdYsJXnaVTjaGKARQtmSuggjSRLa",
  "key5": "4yQXkra3xEj9D1PZiqRqL2zLpyLt4XxEHJEaazgBdBZ7KDWznpH8njXbVbxMWYEas9sKr4eB6PryEy4SHiLfMZN1",
  "key6": "3Gztjtb5gSMjbBH7QiZ2TeBVRun56SWFocou3cTTvjnsnHpr8TMatZRutpUMwqskvXmH2R7iYemMdPd5AKRQUh8t",
  "key7": "67EfMV25tQ7nVYyp6q1dAWZq55pruyjCYN5nLXcr7aFbVbrQouMrNG9obqPyqePdoMCZpmvp1Axr86Q4Vz8oSoyx",
  "key8": "YjL9dxsbsAhepD7LBtK7SbYXpD2kYehn7SLb9J2XpgoKkjx8mkLN4v1DrqLX1HoMCZDMLtNhuDpj3UT6W84kmwW",
  "key9": "4veSAHvtKzKQKVKtEP2Zu6sCuoYgZByLBiB8HXqb9DSYeCGrpGyyw9KezREBes7MgrdFSKJT1TsqoD8DCaEe7rpv",
  "key10": "47uVqUkL4ihygL8CgV3grzG7svMGyZUBV4LSzcjJhxAULFWLD3oAbqH1soyqxz7BzY9F9ugvPGGcX7Snv1dep73v",
  "key11": "4JgnYA348Pe1HdPsRraFzKmsCe9YFYsRWCDYxQdjdQryfWEaG9NAqoMgry2XAUo8j3q96h97Ejkpu8kN65NAdaNS",
  "key12": "2UL5DjYMKnuBbAsE4ai2M8RPLW2Ej9uVoHxdVu5vbwQftZrYx98RBiZE6LVqLGoyMmXb2QtjW3kjhGiQ6uDcjVZP",
  "key13": "2jHWR5cqwvaXdvsCxszHpg4ShSFZ7oCAiZZNnXaP9YXvoNEkFANHdnhQDhM23tAPG3aLqtDqMMgJY9YcS9B3oVeH",
  "key14": "4xpQzVYdJ7rqAFHBdSbNPTCiiCqnbVM6dUv9od3xq6mEA8EvPZUEqsEboHWpDZSFuCmjHjYGkjV3FaStucP7h8TC",
  "key15": "uAdktJAtZFc84ECedfjahdjxBTGxtdcxcaUbTwdh947iNbSpgzHAmitWbex8DZeUgVUwQ3xMYTQbsd2m9nsbHNj",
  "key16": "2KNWMbaKtEogVGd59Y9sC5gK8jTFRNY3hKifXJzwGUskwS42Lz74w79MJ3MaZ3sXSHE6wXRxtdw5ejwzfFpo3SnR",
  "key17": "5HHaEmTGmSBQM9hu2UUwUgPK2XVo89CPU6RLdrdeucRVqZwLo3bct3vQmb5L4i24n5FLbtTvZ8XK5tVQ4wemozkw",
  "key18": "XBVM3n2TQTgCwspPL1CeyRSRMieVkt1mGBpcJzKnGqq5KA6nV2qegpAzULfQEwHQY2FE8a5SXNy1y4zCmMt8BLQ",
  "key19": "4XLzunnj6mHHLqquQVPBnbRn6vP98DRsrfHQYN1iWavX5oPRwGZzXZfEJzMd8cxqKsR4h2AWYoT4YwnMWPokM91",
  "key20": "2jhcVCFJxTCSvjdr615zRYg9DfLGTnpnqTMgm8bKQnhwJKGRHkjm6SY2TKkJEzphhWRLQ3eeD75ydP6MzULUhu1h",
  "key21": "2fU3WTMUxavdiEudgarSPXCdD24z3HVcnkDsntniE6aVyPjBL42VxPjSjPpoPVnhtX3r5YhY13xgXFg9LmZgiY2y",
  "key22": "qLodTCuMWm29nvMzxrtEuJjiM2geZn2jZypDwVNYGypnDiq4cuPi2m16a92HVHedPdfsZqzK6bVZKcwUdKhRkoj",
  "key23": "YqehmSVTbBC1fnkvMjH91NuXPMXMgt9yC1skK1oZrQv3iVzWvsHgH1wTfYaAdweVeheaAKQnMxRuwiFhoMn9mQ9",
  "key24": "265gYn7YhXnuu8ExySN2rUCwEDLzXV3ChxpwM6PcJF7sDeAwJKtKPnBztyR32xqztpWnDZh2gN2LeRRe5pmHsAst",
  "key25": "536SNtrHqujnrY4tZQrwmGDvEQVgDnsyNZaVhbd3heaMn6bPkmpJYYd7mfu7sBYP9VNgZtsv28cVkQV2ABuELNof",
  "key26": "5dNZV7QKY2NjCXXWnWaLXpCXuwqrGvXHdXXtpPufo7p6nr8RFWX4evej4S8fSZidWRwzFydpyndx84pgRaZjMmCG",
  "key27": "58H13b8tdCArAsBzMZJJ98JpniucrPLgYwhHZoUezpkqHZyfzY4jknG63jrmyv3LZ1djPrh1mardbr7A734kUQX",
  "key28": "2XcUZRqmSYyTbuU7U3t3YDDUpR4SPEi7TnAEqvfKrFNqJwzCWoJvb9cEqXmDNynKGs3Ff7hiHiJzTMCxdvcGn7Bz",
  "key29": "5jCi4DGWJxv9J4M94Hg5W4BV4aQWPNnsuMioDHuz6is73EbWM16eVPfsU7myoi5XxBWdyPY1NQdbkstBwwhNnek8",
  "key30": "5G5tH7YuAP7YExBpHiAbKTyidp9iYKPJQwSv6ywwhbwC5H6pfnxbt8TL65Uq21gymaeWj15rwke3VuGpiDc1T249",
  "key31": "51Hht76XZfia5RDv6c7APbUGPdZsQ9RmtCXpEUrn8i66eYjQnrWVMTbHVkSm8jJ2D7x91hMnbNKHdPU4vQ8DPWiw",
  "key32": "62NdC7XNcQK9VEV4HVaU292X3Y7XLxm4bgGTntVkkCsZGjBNZxBoRCXnXVjCtghGUURd7wTtqQhPi7bwbDmrDPEB",
  "key33": "2YXd7Sa4yaWua53vNWRR9GNWc5ryFdzr5Pof99qxvzHk9h3pxeMmonJirMGrU9K5LEiJE9Fj7VegnjND6eJZCaAd"
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
