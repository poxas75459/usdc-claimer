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
    "4gUtBic67ncRh6JB4y4wxrs2NUEuArGYz8HgdgRb4o1KgXVFEbCjgGM37GnPsRS9Bc9MA3eKeT44J3k93NmxmxcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q7pmUxwatAjbzRGvBffK5GJTVm915vvRaeRrP6Skz8o3KskEmaYgnNGZ3jF5Lq77Lz3vqDvuAkBeqwYw6SH6EYB",
  "key1": "2uJXr4BjLnnMKgSwovCrR3m6zzSsEwWRr9zixAj8KCiKqUTakQmwXF11fpx9vZ8xoFpc1BKZHyBsKDFdhRFgMgtJ",
  "key2": "4sAFb3gFJyvqT2vWuaoB3bGKuaf8twKwwpYbf3HjQYFowFPZbXDNCjr4rC4mHuoD1Yv5LGA9hNj97PNir1RhwEHB",
  "key3": "3B5kWkA6EedMHCqTjZ2Zyc3ou6beDbqxzukRThvKcPz1cuAxjGTFxzX6sQ8Ve78czUuML4DdzjoR48ZsK8RQz6M1",
  "key4": "3cqx5HivsTNrkQhrtEqXe7XrSrnQQCm1ZhNprrB19wW6U1KEFtnVBHXTnH9F2DnsXcEFSrSKAzan6UBKWYc83s5x",
  "key5": "29GJb95gTvyruKaKr8cXT4ASu3yMHhR53zGAs7tKrAJdaJ5juPW4xCqFeAJydQJChFGXsEsFA5gVRUJGcSK476Du",
  "key6": "uw7S3WpXmovbFtBLtUQBVyGvopyCvY8Wvmr8NYkA1vWvT4Ed4JSQFM9MXtSF8xiCYns92fgyvqLrhV4VrzUKA1N",
  "key7": "5V8XgPFnZWFX11wZqzAwAAPwu8G2XfupyCXz3XsMWzucRbCE4EqSNJiVpM2yYiYVhEaZ7HyfR3FjDUdJDHRo3Yik",
  "key8": "3oxeg5oiHiDpsGw9xX7oABBA2b7joWQ2RneQiBjcx6pHoPSn9FF7hZ7Mke8LZruXsaccFU3qJGBzdBXHcQKm7XAb",
  "key9": "4Zq4befhqXj8gtB1kJX8sWifqQpvWkAT323qGjxk5tgb9bMxmC8pVjF4sif2WKZcKd5yQx2g2PDiMnxkM4dJ7cDa",
  "key10": "t6NYPvBZckKmKPWtH6AiYv762aBYQV2gWe8gd5Lgz41BayuyYCKGrNq3rmYn43q3TSfDtq2qs2D4tPQ6szCQxAT",
  "key11": "2EB9HbSi3TX1xVjXDiEBaKnPEtXDFvCdCaP7uzY4DoejpbUjcdUyNcEBSm7XYiWuQ525JAZaZLkxAUM4zT5MWUN4",
  "key12": "4c3f7E3pcYBLkdQsFzLVPemAGBhFNcCP5scsPaHkmTkGJ896z3CJoE7u5NfZfQaGjyjGFehRFaBNBV2P5N6hnY7E",
  "key13": "4aqQSoRFFXvyLbesYvRsCuohyZy4hdJyxqRTx3dmZDVCY96UkqTSKPsp4BZSPoRMvjiwjQehRNdsf34Cvz8XP2mD",
  "key14": "4ZDXQBqHudiWDFAg5k6pC4iPWRLhFoRvcQJcVetEPiJbkj49F4rmTXuA5Nz1UywdYxiZznaNzXzhyoRxfYm5T3Xs",
  "key15": "2rp2u1DeNKNydSJFEjqUucPsVhYCGs3vqEupCM21zAAM8LxuYfU8nacmyxhsZruhahcQvwz3aqRkmJuHXBGQ23cz",
  "key16": "moqcDpEsNDya6v6oL4LQCHNJNjGBUvAaVRvCaRPtiJEHwKPFqYEteozXYxZ6pJ6FsPJXjgs2J5R7u2n9FDUcPsx",
  "key17": "3QWCkjMy4uYBB45MDXdAkn1LkwBjUxGhUPXJFTGP1XQUawjkzDKU6Q8GoEqtAkkztuABvtA2JtjnphMBfnmJcy2Y",
  "key18": "4Aq93AYKXVzRPer56iib71aKbVLm31uvBo3vJETvcNYX5FDshvBPmAFPXUXeTh6qioYwkqJG7C5ptGFtLxFLWFKH",
  "key19": "4BhmCkz8GGJWkyoZmeHsPXgsxb94VPicrJxj2XKpQvdyKdXFvFLN9M1xSxsQEmg5aTjUu8tVusRJDADQ1obuuABJ",
  "key20": "5UGJCdqBhS55QSS8UuvopXAyK8wKeqFLEe8Y5zzeKE9RHLNY9fUYK9SYH9mcWUUdjSFGodgPEDAZUzntX4cSN5uf",
  "key21": "yQao7DGg5pKibZVzN3neLhfqpjyWcobUJkXCkABKGeVdErqfVDvFHySREsRPohCZrd5WCDdvyeX9zWCRMfyvKoq",
  "key22": "629wwJdFxGeSrgUZ2fHe9xnTCTGvUiex68ypnF56Qv21d62tVzGhhqTBrTHH6Ch14wBeAriQjpxBYvqeurcq2wDZ",
  "key23": "3NW3xt7iDxzKXGAfuVVxM7AKpEkdx3mqpWnAQJuuCYX3pdEitkDzjdFLDrLxCDCDRTKaF6DQj61SsFMEaVbdyVMF",
  "key24": "5iakHFMhx9z7t2jw2TcJaxKParU6QHwdzbLtvSUGmZjSLtBHg27kppJVDDHcJ3Lv8UajtpbkyFugVSDRwibVEZrh",
  "key25": "2dN7qUGjkbekSKxtQMfJGAmhKTDvUXKk33rCwgK6MMFUnL1CuCTXSEv2y2aAbf6sJrsqkBzdCgqxKNk6yyKDCtSL",
  "key26": "Ltn57Qr9SEfWjgcstUP8teeyAcMEyyg2ytfwQx6u2yKDezPGnoTcP3yNUXnFe7Zyct6gVLtk689wivpw9Cox4eo",
  "key27": "4ihVqej1QZvRgCPsRLGn9kB2Qi9EyxfQrsUc9EPeuTujEYefDHHMNJdubZA8F2b7Hv7Z2j8GqLXuhc7UQwh8CEqq",
  "key28": "64WfMmCLsoHffcqaQq3SfPNjFNEoTEbP3WqH2iePyhk9cvCoC4TdyuLGtVCaQzCUMAsx9XjMqCnFfdF7xUGdH9sH",
  "key29": "2TLanTEQxFm11meJ6andAsZSBmssTkfadfsnmPqL5ikrQQUNQNQDAkDhUa14zqfAvKUw56YhnkgCF2ieTroyjMCE",
  "key30": "4FBSSezwkLvG88Ny8YX4BwaRbRjQH1BpceNrQtX7C4QvLFGwhFwsxVeKwGbiApEZeGHkTZZhPWRjCnPE1NQJ3cg2",
  "key31": "Ngx7Me57kuLCa6ofGpUyVSKjV4u5awcaksGEtFXEsR1etEBtG6Fsd8evmxko67WFe4zFijJAZSgMdiR3Vyb1yDf",
  "key32": "ryc3Ai9tECiK2gjVcWZDe81zwkZPgyciJ6vEbNTva2icbbDHtjKSbNCMPZGyz1rPzZLJqvC3gqTX12kEDzRParX",
  "key33": "3YJZoY3bwqHjyEKurHFicmY2jhpjSEjQCYJLx4yEtuyYiTRdfNtsyzKiyY2jTTR2L7BdhkbS1oLXNdZjnbnyf5Jv",
  "key34": "Rcev5Z9vZYGEdcmWd3TwAeYsTy7MJ7QdLu7wf2iHCCrY3aQG85d4hBqgqsWvBGBCu2n8jRV5LivasLqY6h2PG4J",
  "key35": "3oCdoXbsHWP2amcH2CWMR7frygUdsgBTgz7oVvri8HKaPUaWWTT4CwwbBqQsvMr7myiNi6LPu6rHfHfKvbGAC2En",
  "key36": "NVrhnq5FNpFP67fQRmCgLQmnmxfnT2u46sxxKYJEL5XCbjm8cafmzj94qRJXSTQyNvHywQncWtvvqdzzocpMLCN",
  "key37": "31XNk15TX62MZtdYvToQXppHLTaUCGTabjw4Dmf2MbZuZJ3PQQiXCJtrbcQXah5jZBWkcWpJQhdyXRBxGFEz8ukZ"
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
