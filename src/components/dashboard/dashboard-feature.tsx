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
    "5t7Tc9VRcJqc5YiAQCoxJvkEvjR56ymPxvtiGRnaSoSSYHTSHMJ1KwPNDctBLd5d9bVdVSd38CQ77aYb8i9hAdED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NdWknRF2k824hR3QdaWRQoz3B32rpfW5BzjAEK3N1AHsY1EEHAm9bWR6wYgDy2U9pPHnmBLJZh6VG8ATxHyjEfF",
  "key1": "3yVCuuGpqwaUsM4xUkauBZt7vYs6SwJAsW7js2PKqMtVao28yAu9eZbbxnvvmbQCztfmJ5sJ4giQSxZDT4i3XHaf",
  "key2": "4EF2nAYQC86Sfbbr6tR2B7ZvqYRyqutcAkmQqLEJFLdXNFfoWZXmg1JUYmbXRjCPVJhCVjJNVQH5u3LzWw8nNgFm",
  "key3": "5pREknFXic1Jxq9RizVUXZMnQc5w8xLikRUYuGmE5QFG4Jc4y3peVRo44rzeVJTMJz5pRGwpA45jrYURXY1bB3eh",
  "key4": "2AwsDMoWRPcGUTXYWHNxFr2ThzWj3VyGKTVH5jjTbtfFodnQ2S9PFWLGWtDH7ky5Kd8fz2vE1uKXWAXp8uQH8Egq",
  "key5": "xNRNBzPfX3st8AWGxqUu5eknqsNESg3TK8KTeq2XJ52Qi1r4Bsbnz2s9sK42ZSJZtHp9FTBKmWQshMTnV3oixFd",
  "key6": "5imcdwmjZnZWGwLZQV6ADPFQsBAizyFDUCLsBZPiXFj1eUxatu9tP4giUPk4s3M6WUedNLE7db5pGEPUZuLCtBfx",
  "key7": "4wsE8RdLbpd2fMRmTaZew6cj26Y6Vv1gQ8kN3zSeWSQLnxeoY68UzKkbqVKMqfoBRRJ7DQSHka18fx4BoU1BopyU",
  "key8": "2PZtHZEfYowM8frfB3SfcBqYNRZT7YsdL6kcWUF3yjn11bB3gcatGqpiXhrPbXBky9cHE1phDaX4PesL7hwkCZA6",
  "key9": "62aKpzEoXahvXzxfqexf2kNPv3D8iadz7ZLYqiYwproU39KZwuzv8JnNJEbSxQMSDPohaQg1j69Y8y2ZfCNbkjYs",
  "key10": "4w568yhyiKJTxu8n3Hn1k88eG5Sm2QjBPqGTShRYvckdke6DW28e5Yd1xcByHnBFRX9gCkcVNb5R9nasdFHMsje7",
  "key11": "4grmuFBCmirmvvVcnGNr5crz2hEQmJabewQeLu9Xp13z8cfaXvmHnWmHdpCaJJMqMFKCN9fqF8GaekSHUTtnhz5r",
  "key12": "3Mq9NgmA1xvLpVHeLt6k9FeUFxNYWMNRa8hfwa6FbRuvPeDQkyHdyCVLx5TYJdNGPUqVUWtrzUe5SgrdQ72pFoep",
  "key13": "5a8vvp696HkPo5EUd9mHd9sNBLBJWMwoDGNjQyikbhKvdqqR39nHWXLM5bfHDxo4PqhbDCZYQV1UWVjCiRTszyjN",
  "key14": "51KW8gcGKJM8xVsvE94zXVN62s1CAYKGNWUE3S1hY1tq9HwLwzk1n9dQdPDLJtSHvtKxb4zafnrEEo1apBBMrtRV",
  "key15": "2vXxjkZAWrXQgq8x2ng9P1vtBFJSYNHLKRxMJAivUwUbhUrFGKgnPp5hf7jXAF7gDCQ7bdFEbgVyun4JKsRVDbVD",
  "key16": "3tJtC8BYchw8hq5pFhgVCu9Qo9zTtvrW3FFnCZ6k5AecB9X8TeDpPTRGZdAjqEGv3pWiauZ9dhQmUeS9mGvTDpj2",
  "key17": "2dfGFEww9qBYqzG4CVhBsFfuKCxeUvPMeRTPHe58YC1jU6BKKs1unXtnJrLRqgoD5C7gkRzfKH1gqnBzCAToVtBM",
  "key18": "5Vd9MhoR9brnG3Xb1EbqzZ3yuGCRXamAtdiPL5C6ZoVbJfh59RBpXhLBPtkwVaS1zbdQUeEqzkTX2j92dFKBj8g2",
  "key19": "2cYZ3PjrVczGggTQ2pPdXQbJsPuam7nr7cua6ZEDrPe9J4B2gwLZijZ1LU6tRHu5N5t2RowWjA5dYBH5HioMmv94",
  "key20": "299q6jsQhhdRcHfxSNKyM83Daa3pM4PWGnxKC4c5DerB1bHc3wnpe1R5yXGMNsJ6vCLB1mJpJGADEsVqFqWKWHhY",
  "key21": "3RGb9T2qjLWWsFH1St2jgze6Vy72UoxpK7g8bgLRv1ixgtoepmLpUTHyqGGmMRvZqAZuM9PRLAjxYkx6y1vHA1cc",
  "key22": "25HsczKoB8zM7iYjE7qsJiV1opjP5ynCqEdCdwDcE7BBh7X117hE4gmk8s79rN2qpjSDkRMN6hW3c6fBQGRaW7Kc",
  "key23": "2sY2DE4B8pwudqNwuQZsgdX8utJkwLBBHg4EFRnGhSDLtZ2LG5mGJSh2y4huP3RBwPJWuN5kvTVg6NFggPSxsf7F",
  "key24": "65u2yoeB5GqLUsqnVv3B84TqxDMwoXi4F46CGbbG6WNAGhgLwCVmhTf7irCPHLid8Yx3z8R8zuHNYnTbQsz8tpxK",
  "key25": "UqF63zFiS2kRspVGvtERgsZgqZDqBnVGV2Qm9hpsAZZw7mB7Qp1BiW36rNTcyi45jK6U8QHWNd5tpqedBxKrAGa",
  "key26": "3zJ6sset5fjpbGw2bRGS759fDDAR47RhJc43R6zvq15j4X4dAeS1djMUo95Z9fVUMKsVr3xntfGCjdVY2zqvPRZ3",
  "key27": "61ktXKMZZTCyHRk96mN3TeSuYTQXYDCeQo6xnGyyhQoceT6xRNW9Tx7s7H5v6fRgD1XDHpYaY6JLB3G4LeTyYCfh",
  "key28": "2JBicjBPQCEXsVUGRWRKuQNcqmspWTuRnJCxnUiLnpT68WVYaGp46Qgz1v468Yq4PBoBmYWsxMXkRBw7GuMVwmbp",
  "key29": "4ooGH9LLDJSFQuqcbseiEm9aP3x8JwdabmH9oTJQzu8fY2w8Vomt2BbzzudvMvSVADtK9mNexqRr2KLJPesg2exo",
  "key30": "5dZLcJepDYrSJmtJfMhUVvFbpeZXbVy6QyDJFWoqrLoHrB4Ru4cqxHAxX41oMhC4eBptfoHL3U6mbiuqy9MZxu3y",
  "key31": "5hTTvY8Lrn4oykco86kBkawWShXF9jgksPKk6JELSSKr1L1DLVxRtsxJow6qiiRTayZZFQdajih9xKvRaym4KoWt",
  "key32": "5QuK3iStNom987j5Mg4yj6ttGdZcYyGFoTi2zxg6Xc1XBwrTbH6iQrLdUKrWoH2ZbBk4YhBDLoUVwMfCEBxRVvW3",
  "key33": "5ZVTwwoozdDNrYHa1u1ESD5W6gzNtP8epkmmSXDMh1tGSiUkN2XYmqPtM2Ndps23Qau9iZfbfrscTCvNkniJPXgE",
  "key34": "21kciNX983t4pYP1GJTNsB8rrQXzeT9pyXNT8ZmaYWL1nM4vh118Mn5NbqHN4NoEdBPMz9AW86fUjk7YziJdMvEX",
  "key35": "H4ZKCrBpcYPWgBBY2Y51v3k4sL5P4uwmpcdSds2wjUgkws5UXv6dXEkk6GFMsEZHbLQqLNEXjmJumevYzQTS1bM",
  "key36": "Stgi9DrQQi5oGATo9TJL3LbJkhUwpaPkByc6dhXu87fhgXp4Zwh2uQgzm1Jg1rh2JNrZE4cu8BocAznWhd1KBUw",
  "key37": "4VnEyzb6HCfgU9k9aB9X9dDN9mQh4zCU5fPF61wX5BzZfUKwNAqWrq5SVSgc26XdfDhuZXCPsgdAFUdG5iJWkJD2",
  "key38": "63TaUjpXQHpbSs719AjrpfBcR4caG5vkhxjurkxevADrvVLTB8bsHnRgSDLWUo4CxM6QoGtwSo1EXUyoBb7ufT7J",
  "key39": "2BK8RceFk3dZqMPz2TtSQNRmzatpoBnUATHDkDtUZ23Tsq7CrXwdKo7apmdpMgU9NEkKBku9gWo6g3dtGoiWb5HP",
  "key40": "4txxmXxEnibT8Gzga4ri7gW7dCEyvF4cLe23Ct6gscGZQTXoAf7PqrinfxpFcA3HEamxMsqDFyivrKi6LeHc4nbc",
  "key41": "anjRDA7HCFqUBNAX5ydXXomRMbqYgPbieGH8tUuapxMsbUpTxaazjazetWfLXe9iS87nn9j57NDoctgdg7iCpDr",
  "key42": "3NFmouk2q35PwPrbdbZ3k4SBBhMDmzc8mGs5cP42juYzcXiUmAr2ncvN3xr93EETfT3xiNEYR1HgUi2H76uarKng",
  "key43": "hMvD7bUkiVmV5nCrQMFY8AaSJ2GJu1P3YPRz6UibhHLiqryGfQ7oA3RPyVZG3ACDAfUcJBp5w6aSn4uBNtkFpMM",
  "key44": "9EVMTVSFWMKsmMKpAqwZDerk8Rkhb6hxXs3DcZ71iEWefqoMjXuS4kfKGujpd4sXv18BiVUmmKGAtJzUzH3ZeLZ"
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
