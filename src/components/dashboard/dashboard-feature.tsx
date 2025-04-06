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
    "45Ze8yX8hwaxgLrom3GwpBc6fUNeMWHFNrF1K3DP19LvzsitRmWRcmgK3dS7EhZdwjCf6ahRNr1CnS12CPATf6xW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8CembHi51YmXW8bszdt64N1cEkPjvfG4XJToGmDua2bVDZHYcsc2kX2ukKgMbjoogD9j89yvh8TXvM9CG1WTHWq",
  "key1": "46XagGkNDmSUqvbDf1nSqbjjLqbnzGHpppcGgKejpFn3s6kNhQ6cdbtLQ7gxRkoC8Gkz7xAgPkpPMVsuqF64Y1kQ",
  "key2": "5fHKX2Fp4tjCRxZxM6fhyouFFVBAkJfNf9vz3A9uoGR5vNbH64CbAuyQxWsrygotJHvGYKTeT6H5MqgcU9cjbJG3",
  "key3": "2eoM5ADor8NCp7dtVfwWrKzZzNeMpMxzPpasJMHPLW34BF87rAeRCe6gz9E9rfaz5VcKnVEiTm5Jau2iiUeiBw6X",
  "key4": "2fR4xYRtiSW2Gciy1nYkV5x2SSZmDuCuu6g3aQYtA3n6xMnjLmMLf3MxDkpGXGtUMbSDiV1LCV5h1qB3MY7ffxPm",
  "key5": "3qvevesKEmnFg2X38GyLWsKwW7Fbohhkejv5m4WgB4WwYM5yiWVtaiBu3VqVayKNLvxuPEbMfnbKbfya6EaWs8M1",
  "key6": "2jwvdnkQ2Up1xjuh8o4MZQtmfAWu7DHwaMWYDhcCVyjCr9zRSFwL8mdPVMa4pnY8iHzzgpUq3bmxe916k8kkf3jZ",
  "key7": "469fEzV1YdmMec7QvL9Ac1rjwXceYDJkB6vVFMUmwYwQvFVRFigzeoE9JyA3RTei1mWucNnYvND7ffihKMMGE9Hm",
  "key8": "3PJADCix5QaXcqUHiEWn2sWuwFBcZ7axrM4WeM5ToyonjfcVCF8JXhF2XYi8pVMeap7AWRx6XcBdY9TFRDQZifdY",
  "key9": "2pDBEevK2Ysm1t4bVJL8jbbGUmMvEHA14dLT8byiHhRbRdfzjdHkVVQU9koKzWqt6kS8WWWJEuQBuaakJUgRbqFm",
  "key10": "4a5ySeixbWLRrffpvRHuZeBgZfDawHUsc5xjYcJ1qvp851Cp9A2Zd8Lf14iC9X1V5M9UfYigg7RkVSUY7eduG4HS",
  "key11": "4SoSNwTWEqaUYfWZbWy5B5KAS1k9rL8JFw6Fkn4YR8SU5fQGwEdo358h5r6RQjwGxnTPAGPYHXUbspJnDvUmnv9K",
  "key12": "5i8KujStMkkFpKJaMTFiSCSoHSJuaiGJ6X2rnqZHqRmUn7M6eTetVJqRd2m8NVSDSSBnypah9JVmqrT4CB7dhWdM",
  "key13": "3srxE4Xh1w8BiPkpegPadFYcXJsDz2dn4pXS8LLhTEs3LyYVt2iZsERiedHjmAcALiAANhFB1FJuBv8XqUp6Npex",
  "key14": "5LjXZKoufuYWxjdrza3mCMsRY8xdNryVv3d7Z6nEewcoyi5Y6k5pR8NTBJUwfQ5B6JjzEvpGT93oY3dKj8He2YD7",
  "key15": "XTfgHNNBkJf7wbMv8i2fn2gdG73gorJ18BfAhv4XE29vA6CGPgMz5AtCm4LtXFxFSnhgs7uZwhMrkbaZ7jGhCUE",
  "key16": "YBS7NN1N85dyWhCRDgKpnv6mSNvhmZBfzLnh3N4GDCWQFcRT7D8MokG2hwvEG2HuDhax7JPJ97oTL4UappS9jks",
  "key17": "X2q3BBnScSKL4dKfP8anfTDmfWsE5tCsEr2rkVQdR8Z6nZTYsjoptPDzkdo37jL49bZ7AGWxmn3siRa9qYaM468",
  "key18": "3DhH3wspEC76dicXSQc4ktypooVZFGZfQavz1E7h1dXZDTcXSiRoXWJcWyShKGfTbjEicjD2ByqHzTcsoSMnzQSd",
  "key19": "2rrJBfgffdMt2FDZLTqATwgUEryYXBZwgAaMaP74x52UjTUZ761sgDdgno4cVTm7mzYfEeijWaqyB1Bdzdsm8fHJ",
  "key20": "5boUjBGRU7Z2cnGEdxadqLS65FAM8LSWTFRR851eXzgkXr4YZDwHb8F9ZJytMzBTbLeqpiLYTGHWo3SnLSQP1Dr8",
  "key21": "5Fjc2aXRxDxBdqz4tFtWxazF4xmknX6NM49E5QTusybV2xBCkm2aRU9MQawXhd4yisZb8HnzjEHm2H4HzrcgsHjC",
  "key22": "tFZDQgDPq2wVcyq6kgjbFjeAdtSdZDtaKASwTy5r7RhFDx6ZoFWRNEr5PA6CKGKRJAL16H72UbfD6F3wSRzUuZ1",
  "key23": "3nL4R3ukHqrWrpuHGiqwdAtvNH45SQcYnwfFumkNtktLyiVtYUaUb9eLM995m6d1A1BPgYi6AD3sC65YRJjZaun9",
  "key24": "57HJD5yyHVvYMZxtoX43N9wmc1xLXUVojDSbUpGWJmrHWj1MFZPJbTHqzoj7oeGNbbAkAaLEghRDvL4edAtTQxNo",
  "key25": "fExoRsRhuyEowHGUx5tPKWahR5TgNy7LRNbP8qcPeGYDzBhrpL14RqYsxjs6LhNPSeSP7CoxxnhQYyjKLyZ52tC",
  "key26": "4MBDxhD496qkUy5aAvekkYV2U4sgxG2bGSyJbNFtPtXrQtVEcsgbxPZQ11TyN7ueA9SxaHRhYXog7AhNJX8TMnz1",
  "key27": "4EcMQjSKX7v6DdrKpvXQWkivu3czVe6aAPG7ybPHjivNYMNx57TBd7q5abYpqo9y6eJu9iV8jkHzZr6uRyn552nt",
  "key28": "3yBpQtUJsn6wzw1zgWytCgL7sWN3NYkdZK4cfvmLyG7CAkapzArHAqBBv7jbF48D2Ed2ADf2vHpJ1zeaAdRb7QNW",
  "key29": "3gMtaUGgAFiNWzmCFSnv8QF3NkNftZ4qxTLbM5rtxnNXYsxCq6xRPxFKcHQVGS9WKyvxwWci9QsdDrVpCcsR1vLb",
  "key30": "44CxEaJMteYfyfjsWSQiVWczkJvzoZtaWhb91PQkJpMkXLdRzS4w4VbVKK5AY5zJN5SvjWRJK3dbMqyHxdXQqQh7",
  "key31": "oSnRN6CrkwWoJ5vyf7U2ah9tnCVtuwpmmYfiPW24pEyVMNqJWBUPPfMSDPVy1j1QaGu4UtqDyLZmmUQNKEsBKEC"
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
