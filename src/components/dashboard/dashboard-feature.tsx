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
    "3ERjF7hV1sVFiAG2EdDzCNzY1ZmMMvKxwTK1GkMsf4pvbzAE2ameXcebsn8Z2G3URSxuCQvg5uo3DFPXDMJ2C7nP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Em4Y4J1EAZe9p5y7t6sgS3aWbJu6TdMbCNwGqvAy9oMpzrFVAPiZ1nAsKF9xtuRKWpVZ1jYFijGQoWnK2DR62Dq",
  "key1": "46GZJxg2vwshYWVbCY12mEAErXwfVSpCrzKk6oPg638HyX9LiFF8JRC9m7BVsfeYehK7eym5DXyY4w8zWBrAQJxh",
  "key2": "4gaFnWMCXMhQcpJTzPBatDYr8TgiEmosPBuCvUG5vMwjcUQDJvyQvsZhPtZ8LcuYjhpoqPvUrqx1iwHcLD978MtZ",
  "key3": "PC8pirK69yoMsCEGXhxg3pEk8ABfhd19VMXruCqGsjoeXJVNYuyv5cLfQiuXqZ86pfHA4L1AsjrWMnnPLxe1tJq",
  "key4": "YynEc4CxxzXtptYK4xhwqZJftwMBFvcLayL9JoGTmYDC7FbanEVWVArzwhxRvQtwYR1jBwvViL6VR1v9yBSCRqy",
  "key5": "4SUnrYzyJuuj1Cv4HvHFqm9Hw9JgccfRXGjn3vJLuyMFTh9qzcKhfqFya36uun6f3Fz9oW13gSm1vA6HJkyY6twB",
  "key6": "21UVkEhEjD9gxhxBeQdDk5T4QtdQqbG84HqghsWwpih1fxkWdY5snYoabWyvGrUygmXesRgWzScTyV4dsANh4FoN",
  "key7": "2srHTsy4Ksq3G5Vnm5z1UQR6EW4NVbB46mCac7K57xPekAd3mfXeEZzuKiyW8FcGwYLeKeHKtCGTtHtigYF3zkYf",
  "key8": "3h6PjbNCt2x7doyta417ma543mJiP5zfQZrWZwf5oyTU6EBRCntEStaxie9jxn2DPYbLXJVy9UmhUhpEkgsV3nAn",
  "key9": "km6H5b1t9Amr5SnCkgqbUbwn5iKR3i4NVAp3ixbQmm4Q2FePHnGkctCbMwd3yCFPV1bz6vdTzdRoKcNgc2tAjfA",
  "key10": "4UabTRhHTVbjJb2upHeRnnuyWKh6YENqDexb54PgeBvEGtrx58qWxUWRtNh9u1BsoJ3jdiBGzAGi9hGkisdArvqf",
  "key11": "3Wi1vJNFY2jtyWbgHCB3q57YvRPRDu3uX6B41XQzQbMCmfSbW622AUvZnMJBcDqV7yPpGMRyWsBVEJneFmh16wnE",
  "key12": "5TghZXy5rbDq1KQadsyadwoLqQXpLw6EkpLHXUn7F18cb6i4KDE6sgbs8TJ2YG6menha9BbrYq9o83WDhQtTduZo",
  "key13": "4zXZ4e77uw4pY6jK76ohjDqa2aWbncWK28WgwxUsychZD67jTn4JN4WQYTsvPXHraijHpSPy5KYhRtv7gSN2w1QC",
  "key14": "3QUpGprvzwpB8u1ZadWJGNMB2Pwbp3eQ1t1N5TzkB9oN7ehHMSXpP7DKgWSmswop4K7kNTi1xhowaEmLjG4Q7niK",
  "key15": "51yQm1zD2BWNaB4FeABk9QtYDVAGxgRcKktTzwAXG33dPQ7QSs6RLpDu1kfkfcDLZw7ukwv6t36Qa1rjb8k7ZzmW",
  "key16": "5ob1bkXim6dph9J4Vwu1JUnR3jcC8Qhdv37pGcjYevqiSwh9ogimm6W5drtsADKu16z79FDh3NVqKfbchnnw15Am",
  "key17": "2pY5kMaKvsMwmXTBjXyya1qGzVfoFxiTS7nD4ukScNn3sLTmhw51anbj8CGFxewmn3kGR5RZ4qeA42BYw7kSpAVC",
  "key18": "29CFacgvAVqkUhwS3dbpJ3dPpZgH6VnNi8bDei6zC758creoaUbhadynEbbvuqsfxPzkq21m4nUmBYw4vqamodw1",
  "key19": "5688nEs9bjwR6S4FR962ayYJDdBP1fUTaHEr2EjdCfWgoktTuvKvHmhDWskLi9hx4vwbotxHU4g2ynBpDqDroC6H",
  "key20": "gKwYnoumcuNcAU8PsHQf9AoJkUYo14NLHUZM1iwuyWEvHmAm9FdPosRCZ2i5pj7bj2JFuPzzZphbq8Rpk684iXd",
  "key21": "Y2mBNRCVxVZcwv7hFZ8JqKVofyyQH4STGs6pWg72faq9XogNjZkdHBvjkMoG2tK2bww2rsvtadNDCsTBUzu1Yhe",
  "key22": "3JvUSwtvFuk6zQCnbiXSD8er9BV3gHjtPz4Yx1qfJ5YmFBFRDEkZavk3iaNuKcvhNonk9RxMJAHuLK2JMSFzPEqk",
  "key23": "wsmwuUzm3p99MogCUZ14FST47Q1Yu1bFi5ZhXRgQy3nXs6bfj5wfNjryGvtZ7nArY7XwBucr2gvpoo8NAGEtvb5",
  "key24": "5MK59u2hnuneE2hD6rGpxGTk3XcDRekC2iK1n4FRSyEBEM4trVjgxHuaeKNuaphVr6reRW49wtwaJQPkwfXm7ah9",
  "key25": "4rVfASngpYBQKTWxJgkxZNxF8T5F7hQMHETxyYLmHXpHWi4J7k7JoS9W9QW15fTE5XUL2JibhJ9HMr7C9BqvbK3G",
  "key26": "5uo74gKmNfCJUFYJAQ5jYmeZqXvNEDQ7jPVUCMgWeYx7XxDueLmZRQzxpo1zbRcAfLNjhe6F1VG2URzwpAWRwQ4b",
  "key27": "5Wt7QRvCo6BECS5Q3TG4C6scWpNHoTmDmskar1sC9Sei1FTrDNPsSXZaBHCXfpm65udifFJFqjQBib6F7R5cBkY2",
  "key28": "ZKDLgMZv4nvS31HdMrM5cwAmHCRu7wCDSuCxWgo6Rd89okDbKMtSYSLPxX12TYXipmau3AGxxZwaK3UR8gYwQ7U",
  "key29": "4JuUo44jituPAseBofD7U3rKZxgPZh3LJ4YbtsY8i9vBnnVP12P3dHgNbZVLfjtoEaVeEGJUSLR32PL77UpJtLvd",
  "key30": "4Sw6uYvVQ9jmrss19RwKhhUiqyZ8zj4sJQhCdbkP1rfxHuzs7qr2ivZBdP2uBroAA9AbXkc1UTwQHhYxSTrgnRuD",
  "key31": "379UJkWnKLEAp9q92MmAfSrb2fw6Nxs4KBcGJZFSEYDmwBkxRNTPCuLxbERKB5Q5K1PPBQioYWQd3geAMsx2nV2U",
  "key32": "4dmRDTbTY5y8Pd2JFRJFG7ebvmeGnuRQKLEY8gUG57jYAarRhJr9owyrn8sH2wow5E7cW6Ji23yLMpHgREHq12uz",
  "key33": "4AcETv2eSvpWkTGFVE9AasF36EzJqkkgS9G49gFnCL9VCML2FxpRAv3R6DPuT9r9saEzCjVTWvJdm1ghTgv7VjiY",
  "key34": "3UvfDPGH229nJqDkup2JYpanycXrZZqMG5k19pATrAFhUfiZnT5mguohyNM6KQKDUyr1Y54ZbfEny1LrjJunBhsf",
  "key35": "5wB4ory4J26odAvnd3fpPjrnr63SN8HSyBj8S1M686tZMHBk8WqfHJQ8aNe2kge7vUn7dPbW1DzWiLPFs4yngpfv",
  "key36": "2fHjfiKJCsXS8oYY1J3qFVcdGpmu1LiGHF56iWZVkqXp7W8DAH8BJvvZRa8xGnsUaYXSnNvLTJkurXXKPq6GTUde",
  "key37": "3QMXbubPJpqsWuRxshYKHM8YFSX7HA1CNtFZcGsC6NFDScVbbuuL878F87i3jEfiZY3mc6uuVbG49ycUDuFp6VVd",
  "key38": "icouVcHF9VRz8ow8xC4DbMdG8DmNwxeL7oEHNPXUCMBYzjFugQ1zXjmLCivQiY9JGB13jj2wnn2u26Mg4ARzKP6",
  "key39": "5phA69vBtGtiL29cmAgCvEXi9BZhf6nnSS4GSdCkkciyMdSrBwH6dM7pGPBUoTxfEraoP69monxezjbTjrvgqnSZ"
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
