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
    "95QBfqJj4g8ySrRNtz8HVrKaA4z8uYXbidzBtTdTw2EQ6zLn2orFmLN9fD5PoYwJGmSSs7P3V778wHsZJAmZkHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FSeAPp46PkC9QAwCS73aVia3Hu8Vpjx9T2h9ijLAhdF1d81biWU5jWeuD1T6BCyKDfYcnBivKTdhyc9TMajyP4a",
  "key1": "5YTcmPddFPufHAxGBRVi6NE6wDXdP1pPnx6yfbedPt7dMQpGmoeExZrf7q3VY2FVvFozmTPvtYxWesJ9bi9GXNie",
  "key2": "pbwnae87dbJnURtDXiaxEuex6ap8DqCzuM2LkuQ5ZsK9scgEPTwbVUakSEKApt2XxXfaVEpzPU6oFXwLF7iZMSL",
  "key3": "5MbbFpQUb1fbrugYKyyk5w4L22Ax64QgDt4CddJKuhBuam9h1rQSHYnn5vDxZvDFP45kTLbuBFTzDTLM5ZLJFKgw",
  "key4": "4D7nEFEd5MUmznphLUz1Xkv4h79oGxgjtiT1qeyveeGrxVuXR1gxJy9JNgcshfRVkJhY5TXHEQeoB26TGzG67XgZ",
  "key5": "5hwbUS4XuMuL6awTaobVbNPq5SXLipNcJDj8PazCwn99un223bxTTq8HRryFhUgYn3pCy17VjXtag2x6iR7tmQ7V",
  "key6": "3hC8L85ajHCqp1uXQU2tMYfw7eoAcvkKrU28tPxRMYC6CsqzxhmmJUV7T2n9RCuBGNDsG18eR5E4WyjNk3Lo2jph",
  "key7": "5rZ4M4WSpEYkVGN4waCujgxzxxq3ggv4pfBEEb77ZNsoHVjUcbovL6v5HkNrLYLKX7WFQzNpbknfiyPdAgRvy1LF",
  "key8": "4vZhEB4mEszpDaBnRVbTjXknskhMKY5C4ummipzuF763adAmXRd3ZMVW61giHGNWqH95GrEy16ZLP8K1mXd3x9JL",
  "key9": "45myTFv5E4RdM69aWwuoBta1bQ9irpVGPqHetSVMr7suFPywr3c56dRabpZ5z1Lgi2n2is4GzKeYVKTHBDmgeRz4",
  "key10": "4tsHxf3eT5dsE4mU6kctXhxGKLinMeMZ4S5xmLY5ze563CURkAoxMeeEucAzg5ivy7m5WXV1J8524pcem62XAmzS",
  "key11": "5SbKUUTFDcFRDqbRdzriUentFWszCSxN5eHLLLrffJnwNx7BsM1esecEptz9UH3XALSpPHX7LpkfSzeaDQmtfMwE",
  "key12": "4shzi1t4CUapgPvFAtgrtmcZDTSGAfAngQufDvPTaT16gdix9SY4ebCvqxPVsk5GSGJ7i8q6HALrW4A1omJ4xbeE",
  "key13": "4g3t4MZXeWBRt3uAUPaR4HiSJKoa9vjkTWR3wEJyhkuFnPR9k9cMCWHVmX5nipDGodXf3ZQ42a57198GVjbpgmD2",
  "key14": "469FZT7DGrSstLF5ztU2wRURbvagwWqPQ7APDey78GZYHoEMZuH8d2xocMimwF7EjrfyNzWyZkZ3ivPXovicHGqx",
  "key15": "uHXG96YGTCEGfES8y5UqUHXRy1bJERjiUH8jDVtDBDSR8QtbFUx7nHzXgws38qGG3FRoi994HAcu3UQYgH1pHpC",
  "key16": "2mtaotpkxiZBd62rXW33TqXFQ6fb8Kn5nGJ16rhovQr6cgVYtHfTBUAUyRnu7ukgtihf5ke3m8zM8ybGUn2ccqjk",
  "key17": "2vfAquH7KKcfocauRTq6qw15afgQQWtSFfVFhkHLhv4Jv8dmwNhRVG923HGo6ihpgnmT7xtn2hgU4uyG8LjfAQcM",
  "key18": "5ebwYtdK1NuFMNcU73ksfaBFpfZy9BWk4ayXFz2XA8Prp17xP4D7gnpyWfRn17mXTKsKH6vnGBPGiAxBkqYWgur1",
  "key19": "2bAb125Tt2y9suKJQV3P2tLnE4iRiw8zTSoAsiF3Wb2ZctHhQN6YnZ4rCkgTa3LTq5uKP8zaNa7NPPDYxFKoUMhT",
  "key20": "5eU8fnBPVRDvzyWkMdh4zJmvaBUsM5huXKYVK15Vn6dmJJkaoMe8aKiUFYR3Hw7X12LiYWSTSpnJ5QwPzM1t9USp",
  "key21": "5sztZvewFsgCH8fmCMixKurfkwRWZ6tLDpxn7ZCoCEvh6Xoj3Amfg4S9P3ikFnJk5mhqWC6wBJ3DaxBFt19mi3Ew",
  "key22": "4UtuvUn7cLPtT4SpESzKmwfaLcQBx1z5oi2zWRLCoAADbSMYpLHroHDue3CLQJHSKS4qM6hTbroeLKQ6pf2ZGXB",
  "key23": "3CxxWpL5qgLfrM7zAsiEVuXfEiyjk632UsSzFuei5dXuKCcqSuLWtSiK6B9D8yRsXsfaC5qSsdakiciZU6i2YGUe",
  "key24": "5QCp2FjZMsp47bMmjfbAQN68UcgvqBBmPuHtgYs43LJj1HjSft2E8Xxo2dwtnV7eVHynko5TBAuxDSeqhMBVyshk",
  "key25": "41KotRBFJYYauLdh5g34B8RfnE1DR9819umfhpZyoSosv1qsgukpNqH9HzVJuBx8vP2dxCvKzDQLVYQzP6i9k4pH",
  "key26": "rYquc1xMiJpEyMvcbPJEtkt9zQ72Fgwd3KWemhB5i6aB5Qm56o9BReYuykpzhX4dCy7T2pkDzNpBjevGxKKNga1",
  "key27": "5ugozZXdRLp3asfienLvC1XxFDrARpyH2LnJQ94CzZDamgS5GtuCzgt7ptFHdAhJxFfeCvLqJgAwW486Sy8aMphW",
  "key28": "Y88NtFAoSGUiTev4QuBR64aDDUjts8PjJDNRtbbFCYrJdP13s2mmzNXkbtj2HD9U4SKMEgUt2eeisccULFvXC3U",
  "key29": "5wyMXqe5KeH2Q26iZw17ife678b7pLG8b4Ka38ZruNok45BRnxcgr7VECsZkondm5MFwnBfp5JcbvzG9JpAvEjbS",
  "key30": "5oyN83prrSaCAZ7gWQmcnZDfZ2ajaRxHtRTTbpimEQtUTdrJLcAnFg8x4W9YotHWeFdzNKjSyK7nRZUj4HH5YwzY"
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
