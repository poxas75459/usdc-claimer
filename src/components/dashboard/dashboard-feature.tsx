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
    "2nh58CkGZ9HUBWBv59wuRCb7iZigDZXYv4nN92XqUY6SQbDkqVFumySrZAw4oyQxkWfBmritsBwbTC3VJjXZrynk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Avr2wZ9mdRQE3QQHCFyNyXmHWd4qqeabgDxdZosE7VQnaPPjsQF11i398df3GuvQFNZ5nqwR1tWnJMK7AwHsf38",
  "key1": "4oaqf3keMWPewqBcZ58d6mQHwAGhqLzAzvYuYGbW5Ni94cch21Uy9sD2iVPqDfJmApjvqz7cG7DjvJpBKimdu7Sh",
  "key2": "4RxbzpWXCT5D2x2dxhwmWMCVcP1LWuUBv8UmUrfDjBn7SPdww5GetpSZoFootjhWJwRS2KUP11H7aAxVwpksDKo3",
  "key3": "5Br9J97X88ULQUiDoTahhCjuJgjDUrwNRkfnW6sakPMwT9nF2Qd424dWC2JtQGYSKi3XFPxmhmF2iavYJeTpopsE",
  "key4": "VnQxf2Auq21wHTzUaT1854dUKk2Nr7fpYG6JcGnZWMR3TUFF5P582MLWyx2RB4H8fLBn9yZMSsGRR1Cwx5gdDeY",
  "key5": "fR9JToMyybugQUFuxKkFZBCF1v3kE2QhBf6DpGekZSUSeLTfyCC76meKRLNfgguVmkSXhVBaTQfCmnUjizxXPFv",
  "key6": "4vTPUSA7jgxs7bJfeLTdpneHwRsragcRBJHRxj82191TkAB3sTncFoKqXQgR78t9YoqfF7eaSZaDP7PXAZLoSxL",
  "key7": "73B55oTZaBd9JZAnpU5L5USwJUhroYB5sHVMKUrjZZmVX1wVu9jbPC4d9cuuu9yM7EYt899QAUnqS5FrTdnAfwU",
  "key8": "2MLRUpfKzXUjWbT48wmHFHUHNxPFe61pm1EomqgHe3wkBWm79Sx9AJcDtqu64oX5bicaw3WWSh4h9KobvNzkcDJN",
  "key9": "3nSiAjFrvx2hf7PXQ6rcB5z5uzSnpwndQW7GQHQK3har5RqVEULRTcgoxUcLkSsNooXXZRXNfgLDAiVSnKQEFc6J",
  "key10": "uumJH5VMchruzny5gQwTJ6rdNwiQGXzZ1fiDQVhki7FbBSUxCckdu5gTY7ZmGvvtEUd1M5tnGicBB35aHg8FKxv",
  "key11": "26w6Kfbc8Wb9aji1qXi2qCDuK588RYJUrooiDWo31QYbhKxHLnmm28gJgVpeCnkb75R8FWwj1yzkFotv9FYdrPoq",
  "key12": "2hbsxdRBFxbxGJybEWVSC3TprZANPHBBGkf3GP61jFhKXQYohGG9To6EE8VX1n3otgtA7uce5Wf35BR6Ja9iuVEN",
  "key13": "4ZSbQFR43d8g3YjYQEc13Da5XduzJRhsNmrDm6jdGuc17EDe51XmvU72RKww3Lvbes9amJFKRpzS5ykRdEMS5bCy",
  "key14": "3bq1nqLyBWsBgschatCZHxitEZYUvRX9KrAtuEKaVd1b5LjGmjcgqsXPF3jpxBDpGnpFBJDiaXFUPvrNHjZcjTPu",
  "key15": "3wVUfVGwvzUPNTMkzXLUKbpZQdzqwYLvYjzJxRNLW8x6qzQfX6ednL4xriLw7B2QJMdQvtXEyv6sTzxkj4dj8ozA",
  "key16": "4WZD4YcKjNGLGJQQ1cL3eRoF8g8tKQ7nGpB8nmdk74a7WyR8FXm3VrCWRByBwGsxu2PnXxcFm8gxbtsKXDi9pdhT",
  "key17": "22sYmp5C2kXNDKY4dk6ZU6ZbJ45hxB8iSSiy59aAmYWn86LdBeN7XhpHS3H67fucAQpUUjVSP9dQdVRsQWEFab5z",
  "key18": "2SZop6Vmo2jRp4iTpqZCPGnQGFXmTaphphtzLymgDR6arUAPtPKEvjN8ksvQfjUkvPzcUSyKcUShtjQ9PqD3Fun1",
  "key19": "4YjsXBVCmuehMPCtfKEQaM4Gb6wSw1FD6tZRF8Xm9s1zkX21NBSVFFvhHxL25EZ33ejwwtsYojUmoKpLy3HMoXSe",
  "key20": "3VxhFLPTZrT964mTHDtH4ZHRTA5LjTZ2FK9RwFK5cAENjz3CXEDmPJwWJF9iRtkDrj5m877N4NJ3LHt1q6dH6CqP",
  "key21": "QRpNpKNBdmLkfaG9mmoffJKW6dA6vTDuFKDECYwokAcifdbqNZZB1Df4n1AzW6U8ubSwDeUnThG2fVDdPSNBp4c",
  "key22": "2AHBp13wB7GkkmQg5eQ4DWeLtacfDPitPKjwUwFNaHWGm2R3b4Z8oaatmCsi1UMJKKzAJ2wjXbjnKeTp1DxrTPTq",
  "key23": "5uwvUG6cQf5UAMKAbuhgNz4UWtK3M4wDVxzwQcB1zU6yiRKX3icyNP9mmhTQamU7FpX54NkbmGSVNQQ1YEzHF5c",
  "key24": "5JfgKzfDJMhne6HYNoJ1Ju3QjYGm96c1NGh9kCkhuQMr5QdhpMi8ZX8x7bWFFTuCLQTfs5pKxM24p4QMtBfcNwXz",
  "key25": "2LQivgM8CjoeVYoyWBVFUNC89pkCyFjh734LHNtdHSx9c1aq6SWBfytKuCtgxiPzSjrcqZatwtLzHHDXaoCoxmvi",
  "key26": "4AmHJi9oDXnhLrSA4wpqJMBhdZuo9PHWv8npqzv9dpPpqrfa8FFdVphA3GgZScpyqk6sh3JVDtT52DhDqrVRmp8G",
  "key27": "42Z16WvehLqVMe7mNS1ZW7H6bVGX6YbRaDJMNAwRtBLgbdZy9UREed1E4JNr65nhwsDSd9SrcLjbQ4R44QMQk7tN",
  "key28": "4DCg1JP5hMrXuef5AvvEo2zCynYBQXxxth1TsLAdbk99gjCXYNpnh6ELHrUW3dXP4fKQvwbKqQEo1jXnrkvaSovh",
  "key29": "2SXT2u39Ejkc6MVDQrNdsCbxdh58CQzbFMoFQW8dXvgH6hyQykNgCr2DifDEhmFgsj9yNMzPWyG9N9UWDC2ofY62",
  "key30": "4ymzvXUZotnqMBeymkZrYm19LBoScWx2ZQgjhKM98befjxTTHHSvJmbCGoEA2Jni5cPqE2VaguALHbkUZV3WgVc3",
  "key31": "4Kqi3AqoBkhx32XqEcK8Jf9vfiv5M2Gm7k3Ny1vpkXfVU7hLxnzjYxSsqcQHbk6bANYQUwzQ8kb542e4ScR7sBJJ",
  "key32": "2ezgjSitjUuuURJH7DqYsi4xMc3CospW4u3WE9DBVAxio3b6jcqtBy31MaQBZr85VaMFD4SugfAfgq2kPhszaeNf",
  "key33": "H79uCysCSp43S9GPMTZuvPmMXvNPRJk1UN6sLchYk9hKikmSvGZWpE4NbVvr8NCAQSpx3ejx6DVqjV5T3UyszmD",
  "key34": "3rcMsjSQFSFH8Yp33z1M5wdvHx9krPSBvDrzHjGshBQGJqHahvWC3CH2ycj5Xj4CzfBcotVm7Az35BvT4Ae2d66Q",
  "key35": "4SfudskG7F9DbiSRJViDUKJJffxBu1ymm5RwMWTYjZV1p3WuV1bUbg1eSByoZzpZSvodRD3RJYJ6ffvSVFHtR5cZ",
  "key36": "2axFbt7WHvLDu2htvLKCTQnQgYt8vbBUnmcBYtjpvyFH2ZQNCpvy1ZuwMpEkqrVXa4mHrXccUqM3trouJdkqfgw7",
  "key37": "5zSetsVTBDHBNToknwqQyVfYqpPDt45UsT5A7epK2r9FKyt18fht9J52CYT4RzoN7qk1sh1dP2WegYeg4kkmUXX9",
  "key38": "3grBGPuq4yfVUoby3T3D4jpjT1pSgq65MhcJEV5K6P44iiWdeXZNAaLz9gCEnKL363a3vFGZyzDGTge3w4MkFVCi",
  "key39": "5cgYY5WH4DGyiq4ZWWPEXUJyM4bn7RvdyvGVXPtXyzuCyiunzywVGfwqAgBLfZpzGcZ5ub2teSyt7bUUa1mpRfAK",
  "key40": "4vc9vPh7pwdhZZW1XLqMjmMtm3T1CTXzefSRp8rerRP1jX1tbjoLSnJSy9DZTRFDQCouUKDbLbuhqZeqh4BXffhM",
  "key41": "5eBRPd8os8pettJ4WMnRqN1f3cNBnzaJYw3Khdt2yL7WwdNTscR81ZNk1PNyasTtdDMx82EqczMgu2W4oJ3UTqSm",
  "key42": "4QJbGjd1jPZ4ntZ7zAGZBD1ZdU2zrPZzj3o3iYdB3XymK2uPw4oYu6WaDCbyVgDBdJrrv6vaHXV3zWo5r4WG47aw",
  "key43": "5T95WGRyGETHMZH58Qp1SgXdqVBXgvR3SMq2WipWqQct2C8D1iSM2KpN79r1q4rxujm2c3HJcX1WAYf7euSyRsDS",
  "key44": "UCZhXzK2BoJ2XSHL6YXyeKcCzuZjwvrPcUdWRxSjhYBzHKBDQM3W2pn5vBNujDkQSRTxqSx5YNeEZLZxZe2XpTe",
  "key45": "3gAXdhJKWvyortDRghV4jHS3EoHQcaTWon86A47DLK2o35ACJLJTZhs78W4K7B5nN9qcfTmNMHAuCqUZA1uUJ3HX",
  "key46": "7Lpm4RSbDvCwFpeQbVKJjEw7dd9Nq38PWdSgPK5wMk8T3bq5ayD8FpNteM1MRBub4tk8i5UdwF7pvqFgEbWfs2K"
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
