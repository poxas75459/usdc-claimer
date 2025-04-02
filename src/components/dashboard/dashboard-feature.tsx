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
    "26hp5GXkdJy8LUBRoN6WmQM7iUEmaswL7BFo9HWm7UxrEuAFjwGqjDVURHHthvCMrVda6rEbsfvxx4CLGz6jGsZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BGiWQJdwgUKLJnQKYRbbTXePM8g3eg7Sy5TPewa6MTsZ9emtteVv5wzQdEmPFoeHpbuei79AoLGDwKzy5mBTnMj",
  "key1": "Uk9HDhc6NzsaMz75jn6SULm3Xj14Vcrb6qUfBZevXUc3QPE2CftDzcRW4xAo5drdRi1A8KnLj9MoSe2EUyc1Gc4",
  "key2": "4nrHWrX4sVNtYLLWTVjNdpAvQnB4b7D2L57mQLSwiAr7oYHbRaKoCWVMc45UnCFbv23vKGy4YV7GuXpfNDrgvJg9",
  "key3": "4B19azdMNp8L6zCpNW7ouyhwrrhMxq31xvzwCWXFGyrzCx8ATMUCse9fryt55snqbR5dEjvqjMEoP2KP9opkdjWC",
  "key4": "2TGffjS43k3RuQxKTa6FWT7r8AANPVVMpcAsqTxteGQduu1niFnmRWTZUYaVomgiDG5H47yVctjQaUiW3khFefk",
  "key5": "5YHvXqhuA2EMKWVM6G7mhG1HrMSPn7NH1rkQVUMHsJjqy9TggckwyB1UD18RnxNxskrz6gpHGNo8sHf5aiJAq3fF",
  "key6": "4fL5NVZwB9bzcAPaf1ieZ6u7SL1PZKNS8JMiFFH3AvYCeuNWjFdtP8SUSBGuecr5eATfarXp3dawBrCnqGWqAyf3",
  "key7": "tmdSeo3uZcGjuYsNSDySqkE499ahZU7VZkmM7SoTNejU6fAWMoD1ehtw9767Nfe3h8Pooxmggk9ExEZ3abmMsM8",
  "key8": "SymLuSwtYb2fQVpkJLFusrKZ2Vku3aqFvQy9tZFN24FswzhqAhCtp5WTyPqUbbrLa3oPyMASmMj35ck5g2tKu6P",
  "key9": "BiPZJX6kX7Av1g2oWWLTghnHn7df7Y3bJfKjtZ6iibyZRohephQYC2Zids9bnygrp6Bwyz748LQiR31NSLsFzW7",
  "key10": "31tQGrBrWfHa7F469nQLv1QvDpioRKYZNePW3WG2DXuKgTRQ9Eq7p2VDVUYe3Wn2JPqX1mt9u5bte6SdbPUkt3kF",
  "key11": "3Enf3E2DXRYKRNNe8fRQa3nddiE6W3sc7BurCnwQfmMrg355kBscMqheWrdX1UE7zdbpDBqsNhMBBRHsadjjJgM5",
  "key12": "5UW6UDaKy958dWiZbtJTphikNxtvZW2gxgfSyyvm4TWcsgw1bB5xUYG67ToDyheth81zrarpvyd1vdBR3V6YzsiQ",
  "key13": "4NSziiJrEBvjPUWUD2sgQdsDkhL5LujMxsfUEySGh8ahXAzi89NhgNpvF4z5wXvSVji7BNL8xws2TT5ZLhmPpNkD",
  "key14": "3MXD7tBZu7WEiUXeycYJzX4vz2NZJnunznxJSJdodN8PGd2Fw3ZFGr6N8rCtARdGfq2LR5fxttEh3EY36vi8TN1X",
  "key15": "4qmEbZyVXUHMbBqqCVPt3nrDwGFvb7dvKzmhfPpdXQV8tEic48us8yG5H5Y8trk4xCf92DkTpbzwxrUHKBAB6NXS",
  "key16": "2cMPgzcMs1REGeNXMUEAAWTCh9nosaN4SjEBrw7HwkraxaVHaY7NqioyGuMqJfqZLP5zugTbiufngGgTPPbd9gqQ",
  "key17": "uH7XReZweT7zfcn2keHXLkX5BXijVbCbzERQdqcdVxRTXM8eucvyikLS34dKLD3eDXmpUnosvoJvTvaFZdqAg9R",
  "key18": "4QtzMPPAFhCVD7LwXs44H42MUgbVPseqGLQGT4FpMVK3RUBnWKqZ2ropKPFeVmd1HXtqo4SR478GYjX2h9mprriv",
  "key19": "oJxVZEGwenh8Fx3fXEEjofQ9KEaKLhesdsVYSzzRoThDkBT2mVEchScf3dNZW92EHL7eaKj3aQagKbkgVqCa6jB",
  "key20": "asuk7ums6DSXTKr9pz7fEHSSHZgmypjwQKiHhz934D3Uo6oJqMqJcUVp2QPFSwYrgtsUnVr7qHGmkzf1p41YiF1",
  "key21": "2QVdtfwPejAzz6eAj1VKofC2mXHNhFXpUHGcC4EmndywzSqffvaJnLPC1N7mf8xzoXAqAPFxTmHZjWhBLd7RDZRR",
  "key22": "5Zt6v8GQrjNXmihqd1NCcCFqYXz8JGgADh8gpyYVpSCqRvUcyFwKgfxXs38uyNfuqDVDfMJ7LBRSLLWeTKWPN8EP",
  "key23": "3eW3eM2DJ4FR2ripxeKJ1bi374L3NeYE8khBUARrq6Bo3dsBKUyYHNBiVK4jgSW7rN7uW3eUhMPSFnUbuL7aPn28",
  "key24": "4b1ksoCL3uxATiW4LFncW1b21JgVLaLh76SupBGkPV5HKqfGRUaemMmGV5qpNfcQvFJiJaXLmuVtLdApxWcyFuu6",
  "key25": "4GCpuqZiTMT4RhMMV9uU8WLD9shUBUcNHzmjBy5AAYz6BJAN1pEB7QmDVtaP1zjTJauVsgqM7vZSUbrNWNd7gobB",
  "key26": "2hsDfziXhmDGX3gJEmzWMcCkPvFy1BWSGz1WcV82t87tjzwiZV2bbuYQc8VMQKivYBjWJ7v58j1funFmiakyLft7",
  "key27": "2h9owLTDcDbDywSytFTk5dsPKGAfpj8Y2B3X2YUYhNUPs6aX1m1bqea5TNQaYjPZQ6LjsCDEtZcD2D4bEshcexzp",
  "key28": "cg4RZkK3Vfw7GugNCZhko6MVEx5XSJq2mFS63TpS2VKh4oecAKXQexZuf6VCaaMqMJcUCckViEt5mch26wkxX2k",
  "key29": "2f6ANMZB9A6MFPQQ3BAQzT6Ap7qrbCnppwNRwNZZesh1iU85u48m9zupjmt13Dh64qxu4J28WpD5BcbWYg73vycZ",
  "key30": "4gCd9w2QK5UMSKzsqErkXT1x8LdQyioG89mkxKEWoGvhbz1fmvATNJ7eDv43SmZp7z4sj4itvLpexSUbEtFqSKTK",
  "key31": "vJc23AnCWYc3rcSv85skk3XnxwTqTYdYFCNXQfodhn7MYzLSEkc6WKxQ4m37gnxAAqfpA7FKyhAgCvPf3t7QoZ6",
  "key32": "4C1UPyVA2fVs91xyfywR9u25Sc9s2wYvcdedyrjtzhkpFPKUNQaisu7rLN9dwbBVQo61hUJeiv8CfxiKHeqEHvHm",
  "key33": "5dogHo9SyiAYCsxYgygq3eP9eAgs5dJci9uSCnMLF13HHGay6BpneH66Mf66HwMarkV8dYCBLYZ52g4ttivCvURD",
  "key34": "wdHDr9vBYSzMTxzY3G4AriVioYcktcwhm7netxvBCUDTWbkV4QuEwXrad8StCUEJX3uuDH8DioLAeEXQhZgio8v",
  "key35": "QT58XQT4vejFh6ak9sAHZNgLqQP2WYnfV8y3dZRNq7X25XHCoDwpcYhmCSi8nvuAAnsajVsBXt4AEfzXnKJuUcb",
  "key36": "5F2SsvNNztWQhUCjTRhGKjStr28xAbNWCm9ZPeVvn4LEXuSC9qY55Rjg75NoBJvsta3p7DtkAb6Ck4W1t1JnrvYo",
  "key37": "5aAtjdjdnTyCb9HhJ8Nzq1i4htrcwC26LZRg7vapmmBXYLDAAqAiwm3Hzza9TFX6J3RdNoQmJAbd5YqZ1iaWU6mD",
  "key38": "3Zr87jdbHbKsGv5tbuE7DXpp1wQ3KSvrSdoZzXGi9qQ9RKDBuBKCB2zzv2Zge6B1pG9KFVumaVZBwG8hQWw14UFV",
  "key39": "49qECtxcmGpCi8E3XzkjmswnjxVCPu1i17x7LS4MU8nALBdUThVu33AexhW938XwHdHWnorSQf21sJWEbBZsdf7o",
  "key40": "2Gh13vjmQ7NYCL8p6UekqGvH6qBiKrzR9Nc2TyaM2CvmUvh1kmayQNtsWrbdjbCaRUqGv396uPyJZhXG7vGUQHnf",
  "key41": "pj1WUFYM4xJnZNgh3wqCz9o4WaJZjXyonkS3s5MjfjJ6grAk6CCxSHRiTuikf9W4vCv8G9g6u2eCxkHJswbNL1J",
  "key42": "dSUsyvbBbAkYYe2dMDRzere3n19YyXZSeM8wx8d1V8JExFqVUT5srux8EYhtpdWvTPdAFv5fCzPrW7arHxpjJKs"
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
