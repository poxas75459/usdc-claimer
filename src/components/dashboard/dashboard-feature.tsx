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
    "9odzAxrtS87UrSDHCctT1bELqdppTurAmFNY89nTBFkcxYz4keKtnxHXRpKCJkhcksemWoAs6fZ7Tyvk6Zx8ZX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qr7T91ATDvL5o9bET5twZ5wZRKRYXmpdRpXP9KHfAE3wMa9C7EFbpkyEGxkvq9amoazX6bQtJgLMZeu15ukGdgA",
  "key1": "62ZgGGxK5H5JfujbuJfKsw4tP5YFN8nxjJZ3Hduhu689oHRuTLP65YxoA3bARMkfHcUZQZfpGazz97trkAah9i9U",
  "key2": "2QNHZc2t7vqaHz81FHzSth5W9RLRPcGSqET3usDUKPc9FHQDfYbq2aU5BGrjeZyPY4KNd6687Q1ZXdXn5171guWs",
  "key3": "3VzrVzckREcpts2yYCpZmQ7GVhBNpfXAGsuxKMzywAihJN8FfJNfd7c7DfPJkx52pY7v17v7usLkuPgxLUWNXsUs",
  "key4": "28qm6pW797VkSYQagNmFFk5yao34kgkEZUSqyuqzvcCSrrdhQGaeg5M2QSg6GxQHBG1WBuZQc6F1xdqKdp5HNx4q",
  "key5": "9V17zcsYmHLrN7prvzLB3TZHPqGhptVxkdqvtU4pTCNVJLQLAnEF4cYZ93qrXzTkuUTstBPDaLETY54C9Zn4heD",
  "key6": "2Gppby6ge5mNWA225zwisSzTgM6KF5bPeogbwDZqBnKYy3Y4eqUbGVmfWZqDAr6NkCoje8NkMqLhpdsjKdAz84xC",
  "key7": "4s8rk8mmzFJSEFoQp3At27w9EJujG9f7YsBcwZv2vU96KyvK2emyyXmNUQaU7bXXdgDw9RwzuxWivwF6XvVtb3ik",
  "key8": "TZZN3Ac5poztuUBX8vLSRTNrUbKE1F4cKc7VHfodp8AkzuPXh7ZUpgSNDGDiV5SQxSghtkSjRMAfXLXT7TjYXxh",
  "key9": "3SWamMVBambztmhR4nmuv4CeStBQpSpJesVPk3biKeCBheEKh9SCMt7UJ3Sds67ssNLXyNoSBANhZFkrbDvweg5c",
  "key10": "qCyrSp43FASCYWBzgtjQmwL9TSVGrp8rrWocANbFW1SSGJ8uk9wxKm2eidFFvxwf8J5LpXjYNPCHG5XJNo2o9RA",
  "key11": "2Xxbct8iMHpYfMbTKUp7RcZsDVFqGfQTZcBFsTkiG9LHexmydkHa42AfT1tBXq3mQBbBkhHu6WnoihhRLbdG8jJz",
  "key12": "5HN1TQV9nfHDmy8wYsAvRbCnWwZ3H54AekffYktGrtEpSfHuWPrRg9L4ncXpffSM2tsM16BPQgzgDW1xBPYK8oEF",
  "key13": "4n16sGbrgn6ZVuAXHN49oM2S7S6XhvuZ9JBjweBeo6ykDrH2T338BiPqnQZtTRxXPJ2XiCmZmCgUfNbBovWD7Vts",
  "key14": "2ugRD83Wkm9te3sw5gpKkr5f8JNrvhwkTrLeuciFd6hnKG4i9QHwqFaFgszdSmXPuXp4bvEsyB39aSjDz8WBX3Vm",
  "key15": "23dLK24dUCNiy6ooMKbvxTD6GWxeM96tUJKs62SB2FfSnmaVTsJmUcEFUsLPzYX1ZPbYmbn26va8W5puqGLSoEFR",
  "key16": "5DNwaQBVdMU7teKTaYCS3tBmbC17gRynZaYzH3VcyVJgxMEZAAANZUc2ZFw8gXZNJ79CZrkf2WeGmtXmtvJgmnCJ",
  "key17": "8z4guNrA74pLGpGvSnSPAjgNsJ5C7zkp4F5gikuTnKq3E77CsdDUigft4BHUaVciRGkRkVeWtU4pUGEd9QBhQFG",
  "key18": "457qMkbofV41uH2KcP2gnzKG6tGYafkJCmnXodQoQoFbxK65bQjtE96XRBfcnrcqV9mQjEAr2waXpH8evH814uAD",
  "key19": "2Ycx5NDom2bspZkZXbkQjzjVdFtYZNbRUmSXm8UhrgpykM92yjFjowoPeL3GWLAptrYwu51tEAc81p2pQXAtP4vW",
  "key20": "Kk7Ehtra2x9oeripudwFAuxgoeAgS4gk5SY63PT87M4E474tB9GLzZm4dxvS3bTVG5VMNuHuiMmQcUf6X2xu41G",
  "key21": "2pFJ3PUsm5tBCmQvwkf7WuYjXZg4sg6W9n4zpST3snbV1vBJz9pj3voopLM9h1rLjWocyYAU82dM72XhxNooxRoK",
  "key22": "53kDXmFfWBSQP6BGJsayWWKLF3EokFbRhzKzqCPj1mPSReVFcUenutobXFWjn6R75YyNoMgrZ6HUftS8oP9B42PK",
  "key23": "4W1EbXk9vFf8yeb1GwwWpTzt8NxtN4rjgPi8x1KB3PCNwEugrEMzHETKQEEXv1HFXVfYadqokjJoSjixF7u3PUwC",
  "key24": "uBF5rkzkrC2dyxTsFq3k9hV1MHiJuMqf4WneTDDQsDfopKsKWQoE4G2y9N7b5whgW9kTfuR5q7QoXRRL5x8rUrB",
  "key25": "nPvjQveZYsY1dSpvDkA7UkVu6erryBdB6NqdC19UFFPw2B6Gxc2XQdnSiVQMVCFZWAZPdU7HWesEQLrTjDoLbZZ",
  "key26": "5bCyFemX94DFbZw85bVvPDW33eo2C46WvQetwQGvZfMXLGu7pHNmADkF7YF5ZJiQ9gdGmRJMtokVy7gpcpSgy4eb",
  "key27": "5z3DXGe4uahe6UGf5LngAutoTwGFCKRVciGhpcNk4hdAfPZZXvg2iPcKBmj1CCtzxo3Lpd9oJQs5se8kmX2A5uym",
  "key28": "4HkjZ6fXKy578aMxNnbdE3RgDR43ouiBExQV5YSNQgdjyCw7jubMy8JTnVsEyXANxiWmErUNu9fyJsP6cxWw7iBn",
  "key29": "5TrLmxS1AyobwW3BBmDsbLs2yLLipikZKCoTzX7ccetgJ9jsT2qaaUVrE4wFuUccWuDVy4nCv1E77UBf3i43bqwo",
  "key30": "3meJTpxCXkKVEqVtXAmuY3BMs7LSQRzfHLGhrWtjqEBSMtB3BGKureeYLjKzqxzSYDBXkzuQJpKapzKSPnWHfCBu",
  "key31": "4vcAD9wtHK9eLrBdLfe4FvSDFasEYwyUqqZpdMw1h5VpuJiBtMsvHavihzFAD6ypHcxtUoiBuQkT1esQPULPv1dc",
  "key32": "5GNU31Vzj62VoFD3iRyofu8DB6Nw7UP9oSZVaueuoRAgVoiWE51AEfvDUpXsom6n1ARdDzyVfa6rXPZqGSgybZyQ",
  "key33": "5LA8Y3S1aCsKhDxLmMmqqBzTncxJA6jetf2Fy2sjAyBSthKcVcc9E94Fm236WZSHKhePXpPfHfPaR5DR7BmQ9aYj",
  "key34": "5TcUk35rPMZZB76x5Nwvt2tPgvy2qeVHRhwybF8oigMT3cSWETDrDaQDkRP8mRUB68JmG3Q8cgx54ynkYoubvBEo",
  "key35": "Jm4cfczQuq5KCniC4ikJefuocWVLZCUbZLvs1P825p7m63H9bt5ULBUEk9wysE8FhTZd7KkaDytmAmtMShSkHRp",
  "key36": "2eE7zZJLRwEsQcaoFvkhum1CEtVTahAK9fuJx2CoA37gK4uWpuNVxW4ohSRwX3AmahhKbadXbW52fL29xL7v7jAZ",
  "key37": "3eJsgZejJhwE5RNy1wMgmRDJt8vxtSh68xgA8rxPPaQo1xCJs5i7EgRLiem9jHdaxSvhZnuUZ4Up6GJ4vadrcMWP"
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
