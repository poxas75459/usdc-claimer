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
    "4c2k96VCVz8LE8pR8CidxvvDTqPpShsmxbpssSK8w9UqeAdsGadqbddqjSu1zpsgG1ehDpEFL7w6pvvVKgLj27zX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BfWYZbiHiT9hi6pfiYzVasLyYwCn3gy9Sw8qYixM4CzSVcCUiKHsTyYvideuCLhYWoGmbCTYo7Uo2ubeuiyfe6o",
  "key1": "2PNsunqfWud7ryQGcAWBkDG6T96fi3WVJPg3toeTHUcnJreUNJE2VcfEfCgtyKrMhma63zi4nGUFKvPur51R39c9",
  "key2": "2bbFNf33rnXWb5XuZBMohTgmG7DnXuyVMMeSZy4jr7FFdignNf4vRgEFKSu58qTupsoonvxtw39PJVGhBpm8n1Rf",
  "key3": "4M4cDQLE6PBsNviS6j1U1KAhaFACHyRhJ8jbWEdMEKpE3CST6rhnRPgyMi8NUzq8XVyTkR5DDzo8ZbRAsJCww6b2",
  "key4": "2fgS3tEZURBQGA76y72JRqh12jHVQtWa7cHq4mhMqZPa884pAUCHH2sVEWuFMs1CUbtpwSBPjRpAKSLWd3UsMeDk",
  "key5": "39J9whA7X4nXjVjgmSEwqJzc7svy1nBy33GFvaE6cmMjcyzjPb29g6Th1k4uHksKvTNt7qaso4bv1SoaN41TEuyg",
  "key6": "zKYCi12QJ5LMM7YQVkGeUnBokzR1CyMyNCvDtg4DPbNnvWYkPcrVgBQPeakPcA2njfeCZ8QKs86ugXUMs92LyLc",
  "key7": "3wZ88cJDBqrEQh8gGLuMtogAJzRysMiJCG3Gx9DSeKRN5d4bcA3rb8jNgcyttfaVxZgQ5CFD7qXK6Zvq2CZK1vnZ",
  "key8": "2Z5MyuPMXpjTFYS6DSQwQ3yL6tfrB9XaFQqFGii9kvaGktEpN1bLRUuSeWgsjtJVCFJMhkKiyTJJX5JUzKhug9i1",
  "key9": "3b5yEnPp3PNJqzuE6va9JJ3V6U1peR1aPL4vCzKhtLZ3SUeMf22YQyMYvdEH6uG1iE96GQtbpsKdMZwXtZwqHBRs",
  "key10": "2KbmK6F7Yjm1h4Y7D27vwZwKqxJne2PvsVV26dw5wpfvAhQnDQSwFHXdLFppHP1ebB8begrFrvPRXmTKvD3GhrUS",
  "key11": "WadMTxUTCpJzteygsDP9T7KpJz1pqFvma3vmCF67R3DLpJnbdWyDjjdwDtEjSDE36PF7sFiBZwsR3HbWuXnHZem",
  "key12": "TnsK9gxLCy9wY1DyiixjjEvCbwm4GAjU9ZVigDax12K33731d2EW13upajNoYHhA4ZcxC1yhgzMBnbWnErriHCE",
  "key13": "3uzGeMoGKAThWNcxyqxZkFeHhAcusuXLgvu4iFiNmG6cwXnaWbNRrQfrFcjvcZuT8eREyMvHiTBLt6xTWKwxQrnF",
  "key14": "65rPEbZ4ZAYw8vZwxscKTtJ2gb8Yuh11EpqHgXo6QNcKkTfpHDSPvmwxG1ZukEFPGjo7YgSaKt7zUg6ovDphPyg4",
  "key15": "39vyFnz8wssGGQSzcayTQur1ZgKZJp6zVBhbGEyjwnb4pJ6FhVP8xz7W8WdVhH49ngNohChjhF27eHjUUQ9JEcCP",
  "key16": "2TQYYzJDQHJoH71gjWJLCc5fgBFWUqtF32GQRuTwvqf7EpgwNfiKX4cHbrSZqh9S6HQqTgFPeheAvMgLydDVLKRb",
  "key17": "gR9GEDs3hkRVwgs9DgisfuKH99dLViDQ9ZSECMwrRJXAVDJVgdedoXRrtTopExTq5KDDtdVZgF3u3etsVrqmCue",
  "key18": "3DMu4Hwwv1vw76jXbbzSmEu1vSrrkZDYUu4Bnf6MdMiZpTokcs5kVSijCMQj4V451GMDaMFdQnG8pfjoZWxirDza",
  "key19": "3Jz9eQB1gLH4j3uVwLHtKPid3e1yrtp3Kq9EzifTi8FQ5Xiu9nRb4VsKWhvjXMMFLWNAGXGUdfNAPQZk9JkS5eTX",
  "key20": "5pDgcQc9WkoFjC3sLofbFaKPTuDFscaVUyS3oePLt2hhWiKwgHKYLCTNsYMWfiTBUQRtvKXoUgPYsgne55CAA3a1",
  "key21": "BeuWhz8gABxhzQ672t337wmhWrpXV7h9dk5REryCXgAq4SXRDoMNiDG3shqtwTbpgwZtLx1UaphCqMqXmyaEJWW",
  "key22": "4qKm6mCpfbejFTXeeXijKaHZ6stttuJxTaM1fN3DF9RcReryTquhzZXmaKBgcq1CYmY9RRvyxdsmBDuweudxp87J",
  "key23": "3RA3hy91z5HsmY8Rq9baX1Uu1y6a5tVCKHZWbqgayGXtn66BiPxM8zgQs5CBX16sgkHu5yqeCkF5MHQiWNVsGxx",
  "key24": "2G8Q8bzAYDHUsKaEWNGYTZqpc3tirkZCA7yCXYjd5j4HadxGKmAoFEAqnP2Xd7ojsye6DPHEKjmu2h87FbP5enDc",
  "key25": "3xd36QKu4dJ4CrMrNd96tZ53XsSmgd1SGgvE3meQEpfXbWpBiBpAs9S1KxcRHdfLszgnMd8iycETp256Z7UHZLBj",
  "key26": "5PUzLHL2pS9F4sDW162asbh91aYQRaepoeADQMrMsY9vBWqjaiy7QwVr83zgM2NqsE6uMHzXaU6EDD3ksxstJR9r",
  "key27": "2FXGyNQHf3tpnyatV8iw3jJ3Zd9CQHEohfzzfzsZFCezsCByd598Sw1ynkW8wGEdpXj8RVNzi5xVJafsRnWGJLqE",
  "key28": "2pdZvQTDrhbb7BojoJ8nMN2tn6a1nyJdjJQ695YPHV2fDUh4J88k9cHcP24bcy2bh9eJjfNgLNiWmjq3SJSLdkh3",
  "key29": "VAPaH3MRo2K36CwLSByckYUoDm3bqkwZCJgUBndhSwodweqBbrTYsjE1gvuvv1iMKr71Kx9M9uDGZbeeTNxkzdc",
  "key30": "3Hp3wWkDT7fxCq77dLDByTzCjDjLmFf13ZBzvye6nbKD5dqh3LWfs9rmcyKjAV7VVNTZ4Rzt8wecNZbSEJ1L4b2m",
  "key31": "4KcNA9sH2S5GB3kUHJfFzVuVTY2G9UJhRSt4ucruqdznrND39eKdxWyu9qTD3dmZC79EuYXnaSVrDK9kthwDBMRb"
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
