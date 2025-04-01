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
    "4sBR3TwiAHUrKY2Hh3syYT6FDc8fx3fm3uvXrdQLDHjdmF6tMKVvcptxzi5pgbB7YhuEgsHhhWDHMnxo4vMmPA81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xx84mUuDPqEEqphU9MnriQsDhwQACdBDSdaxXwDRwq3yesXP2j1bUd8keRpuRuboKjXwXkF9HYDqUEBtisFE1HJ",
  "key1": "48q58HU7c6DfTRvWzAr3UWJiFYpKX9HXCPdN4uPhRPeVdsMR13TX6meBUPRHNWPuhrWMJ5eK7yRkm3hPqnPxBPpX",
  "key2": "62PCK8m4xGoxbdQH4q7rDwfXqCrmGuQ5MK9EFmhNH79CxHF3vQUqnNCE4Fq5vfQ6ZmJZnxVw9WwEroqsi8THCjwe",
  "key3": "3AWjuf2AbCmz5ndNcnVjQyh5Y8VqmcmgK4yj4SP8wwh2QtEBdMinvr3s7D9oTfoVFFi4pFYT5o3FkrRb7SfPjJ84",
  "key4": "3tfDF5jqouDN9jaJKBWh7tAgDxqxHW7oT1k9MsEpkRTrDNPkhGFxytfLEAzCupd7atr3osRVYJ98koJpMv2GvPo7",
  "key5": "hMzqdsTukisZoSAZnJTzQgcHP8cYZo2edN2kryEUJ1R7ASyZJ1r5Y2Am1wQhFZWmyvTTbowBq8LeYZvztEWvVMG",
  "key6": "4hwWFCf3sNaqcpADmgWSfj7uydqzAfM7iGUW3wEE9kiGFsYH7Y8s6v9KL2deBZjQg8HpKLWHhy9CmffkS3HgSD9X",
  "key7": "4AyJPDDBQfBxtyKACkndF2MwUSzgukmYbfBK32rw3jFmGt3BZ974dAUE6y54hWgGsnvHkVq8bZqZA931VR8MjchV",
  "key8": "eXA44LbkpRu5s6qxMreN7YSLXhkAoGDbJsbdiJVsWfrFteWVeygKW4LTSGJTXkH8kzyitJ1NAPrXfa1EEWqePjE",
  "key9": "4PcvD4TYrZQMowyv1Z6LvknqHiYWpH6TQzqmG9jkCT3ZG3qnz4nVytxSdXYZQUpZ928VoJH3ps1ZrNDfDq4nhBvF",
  "key10": "5aozGAFkDwqmJkBaJiQLmWZ4eZNyda9yDRmqcFcBJCp2swnwVx9REYXMXAJwX3dkfeeXZq9AY6ck2qo5FHtXB8n2",
  "key11": "3VcyYrg8dfcDBLEWJ21E8NqUFAYbrmpYKWjbt7uYe8FxsCJhgADkEGTNjQ13RFhhn3TutaBSQcNuon3MsUm5EZb9",
  "key12": "3FRyk4cQZ7SPSiUyRbFsJQkQVESzcR5Z1Q889HuJQVn3HLHpkr2KVMW5bcshBcjhhrdT6vHxHDpcpNejU6YzgbJg",
  "key13": "3xv9o9wT1zJaQkiybq1TwewhAyC33jgJvmZtFiEBm3ATcRibGvm1wDi51APv57nddPFTF7AbQAWdKWhpuwd86fk1",
  "key14": "2HU3ShiG2iDDcYs7dBD7woQUfHwygnbwVsLyWD4z9Uj45PQx1WXYpkDcuCbm7vMkph4Q39EDq7HQbiSNt7BXRyov",
  "key15": "q8wjyy79Fr9ey3jTd91D6EQ7AQ7tWZiu3ggn5bYw9K6gB1rMCpsCK5BVZ3ydL341JRJVfsaZAYVgRSZXB5gqKaE",
  "key16": "dFTyW2HPUvLJdaeFj2zUvessYe516KysU94ZAhr9f976y1Hj1Dcd7JQobARPNtSNG4MzCfanhAwnGhH9UsVsuKv",
  "key17": "tcTKyatVnuKxwSbMiDYAPQmDqBjK5nfjuFTF9qeN8MUrobrbPfRNWu1D9XQ537FxwTRW9YRsxjYJ6W9kcqfr13n",
  "key18": "5jB6Rfw8XhNPtzwTeSk6fVCZHtRuCFsSpUzsoiLKdKxvofENowQAtUHMcE6b51HLbVz9oPfF2eMecRWnVCTfMaqs",
  "key19": "21WRJpCQER5dgZsfVKJ8EskD2xGiYkGGkkHeea9zM13L5aMXYrJAsoGq9M4RWzS8k4BjgYtG7fC2SzAqLWJDqfQH",
  "key20": "3hHAgiapYQem1vdfReNbmcxNqLmh13XVPk8PXpAVvSqVpYLtWqaj92i6Z4dFsGfgXDaJY92K38mWBQHnjeWYAbSr",
  "key21": "5MUEr6uS94Y4ufMwBbZKMHPpcrtVng3pTYFuajxXsfcD6eY5XZmJDgTzyEkuWKMcw9T8cLECcpo4QXnwEhP5K5P8",
  "key22": "43V3gCHuXRQ5q14PHaFLCn62Nk8g3vvNgauEV6Fam9WyR3WiHy7E7hFkLHinMNLxk3m2vq7JdrYLHJzW8HDHuXNQ",
  "key23": "wPtk1cQM14ZXDqHzUj8cyQg8WQZ7JjzmMzcZqAiarm7bZqgsG78AHUpRAsxFLjMmUoTbQtTB3Aodavnu8VVVbkt",
  "key24": "3E7n8gGfHTmG4xk1zgY71JoGpQ2S8Dsnox5DT43pNbDFMKnL7YEfbYhKcbMPCQZNK7BhMQUPEcfMCjPgLUDxiyDG",
  "key25": "3A2z7uQVjtmWqsuzq4aepE4qVveA3yKNdt4pncRHXiLatMtMkBRiSY3QsXXaRwahxTzVPg7gq9vA4pTxwuyf51vY",
  "key26": "3UzTxGzPJ2zvmy52YjLc7VK5yAyqnJNDFxVPgoUyV86twGueucoDJ3EMapEdQzvTLzr466qSZhaYbSXNudxLkMXg",
  "key27": "4pBgQvCU8KiJSACz1Tce8jEAwsMG5taFRAaeeA5XNAvWEZeTXn4XDFPQwMmpiNrmoGQ71rnXGBDdhVzEhT14UWai",
  "key28": "2ABmuLEfjDneXynAJp1qdyrTYqxh5Sjzbp8YdF4MfyrzerGcVTY4AHYDazf1StjHM18CGYB3NHec1KHJeyr4HHEd",
  "key29": "HGDCCUaBSJUhW7Jn3bRTgnGfqTjDmGytZRrdswZww3kFC3PBUUE5wFKxBQbg93tzePsAKp6ipiidhZNYeW9ecen",
  "key30": "62x9q18VqqcFHDDBXJhnb3VWgyeovpFsKt1U6f4EM3DiodRCT8xXfq5i5zpWcyWA8cKwV9puAJx2d8UGSFHohZQL",
  "key31": "4Qid9KHoj2KRYuR4NLumtv5uK3Gfxr4yCRCNEphdDFDPudgDi41iVmeZH5u3MZ8PHzBdpxZVWFoFBn4rc3SjL7TW",
  "key32": "2rXonPLNSHH65BNvWXwTRFj8tTRwTqPExBnefbKwj9J4g1RTKvnxswKP7xhJkKFzVKru4cn2CswaThi7ZeiqX7Ny",
  "key33": "4tsjr8wwMj4JCPBLVva8wRczsuB65UnztwMfpvm4SiRyMjQi1M6NTCZs51BtnChX1SkHzwewMLyk5UgugbMNp5qA",
  "key34": "5txb44cu2bvptKLVWPy9wiDeaYLN16mrmctiQucXVqScU3xUbxJJD5Sn43DvRoqs7acanhxSH6cA7VxpCKEbgkze"
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
