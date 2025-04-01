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
    "417u1EFTLJuPt6Vct8Whfe8WP5M5Gm1A4XetK2giTZDQgUq7x48cpeJFZea92DajxWyTHVYxLkfePQimngrYYny3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37XSJuiMYYAoZc44NHTtwr3siK8xtMemgFgjtEQu9LBdhSyTsz4VzPSLUCNAJt5TUAx4SV1uvFyLbSEVB24vmVrd",
  "key1": "2kusvH6V6NMxpsHpV1SMkzPkdm49xFP6y3ZpbWZVc2BV7RMSnY7CLTPcDLevxHsTU6iRGfkz3FtoqLspVGQgCYB6",
  "key2": "obuT6RthpWYkri3KJ3qwDkdSjjqygJVQBwkhFRghtgrxYCDX6zmDFkeqxTaH1d6e66jFgmnu8VHeBXgDreHmqCA",
  "key3": "5D221c7BrwMYvmUVAeLzkHAjzchvVcm4bvFBt49hokzZNB6iJPFCS4W56RPmpdrcSFuKcQ2MVEvuS5LHxyx5vBF2",
  "key4": "5tKi7kSwXQq3fufq1rKosKXJAGyQnjH4AdYncK49gcBRhEKZqUyoJLcLgYTc59Lo7n6aJJgc7rwnvSxGbMBDRyBu",
  "key5": "Mi9dZ224xz5b3Rm5J8YRNEEeMAuQbgeC4GrpuNgY9TdaCcvy4PCcfQU8UXqYanreWADNPgcfvJCGow7ZKziD6j6",
  "key6": "2i2xCAzxXdkWcUXkxncqcKovj3H5L6Pa3bhYWZaes5irQSEzZUWjVgP15GzAftjgJE6q21EeTRyHqoNjvPdUq5J8",
  "key7": "5TvyVVsKM3Y4Ghci5XHKZQeVkUky3dHkub8TKvm64CCuiakP4TvMEi6TnT25UP41WqmbW5fLTz4w8R69VP2twsvH",
  "key8": "kdETVQyQdBLn8hYHoLKchrp36CYZ3nabVnVj2KnTvv4YevHdhuM3a54848f5iKM747eFNuMevU9WjUe5WeoNpnk",
  "key9": "2GZgBskcjx8HDvCUL7jx5ouoXrbuE5qjVXrmUsg9314otwr9aa9gKEEU6zKTbyfGbMEospozUMqitrjduGfPm3sB",
  "key10": "2EXbM4Wsiniju6gmvQF7iNU6qx75mS5fh5a6fwKyehsfrRmesGPbVoyQ4exRwdWjuCNWB8L4HwkNjL5sAmdHRKRu",
  "key11": "4cqXuvLikeg7H6XShgm3A5a2WGfKQB41CKxaNdyevqwFZDXrqh2y9GvyfWmYMEuCZG3m1XHPjUKfjowryVZDyiXS",
  "key12": "4db1jVWeBjgjwozN3wt65DpRfoqm3MBtgHDjXZ9P3twxw4X3XdGkTE2MSWe9oRoQUiJvtL3SGgw1TCG4RehAgRCX",
  "key13": "2MtWPQiFVrzGZGhwbMNt2z3BmGqtV5YsNJ8WcFtmMbkuT15pKUsfDUpKsRshkSJ2V6Hn8YGefRtmtBw7MCCV8iUZ",
  "key14": "5XoUPW6RHUohMxpF7DNtsPuPRtJ86eMpwzCRypshWLB72J2htDoYxBHtcXRmsooT3LqwHoStjScgkbFKWivMFJgN",
  "key15": "dAxddgDXdgtZWoCiLeJNW2bN7J6LzEaz4zCTXNNJHwrGK72S1rvXURJXXs13X9eFgjvPwL2ARA37VsKe1X5ejAK",
  "key16": "2YFGQrMcRnnNPZTLVbRh7oArgQSYyqX5K9793UTx5Zgnrp1wiSWEAGuQJWWjSUFrMgccTCT1wzvvKYZjK3ShHF8k",
  "key17": "tLGLecB8pzCon5Gx6YRD3xZ2PS7SAM1LvDNVMb8uzBdWNzSWLVtUEa42bipm4nGAWkByw5qamqMTj1PjcBRUSa6",
  "key18": "2xQaycPNBVJUWaCBDffwXzTNDAsskuE1WNJ2JVXEjQA3qaJTyyKHU2EK1ZudR1akivMw9C63GTZwdc6xcspJzsc2",
  "key19": "5kXSoaThD5urwmSSU8RCyFY7oM2nStBhQcJ2ATrBnMMTyigdeZiGHH2eJrb9LofJL3RN9HsUWByZzk6pJQ1yVBqZ",
  "key20": "5DzQQFmwdyBacbG2mkuRQHDRRB3mz85cEkCRhqTvhmLAm6uMjoJjchcbbvSSfsLA6sNom1zkWAaLoibVVoKmN8T8",
  "key21": "39q6HCCXfZ25mF8MyciyS8YYSMYKCam4TQ2K7BnkkdsdRQUNKsTt2C9trF31gDppXYRxRoUMm7oYCbv4diVTP7Hj",
  "key22": "2qhK1XYPdNLg3KuB4fEoarhrXmvVvM7Q9zsNJjoz9xaf5yiVjua4QHjzQmV9KAfG1sBy8ivGXvbxaH1n4hEHgic6",
  "key23": "QWGEnx8oo6HiZtBHDGq51Y8Vm5JB1n9LmRLTHz5GfAnPnWSjzu11gDtQT7vKzG89MVEtCnaaWBDqqRbP6JwX8Hp",
  "key24": "2D7BFK7STqqVASuTgCRV9mv6VcqpqxYW4d4ayqytTYKG3RCBVXkZDFR71ekzM1EXdBaF1jj6tfBsdndfT2LR4ZHy",
  "key25": "5tzQpZcgzhz5m5pouFjuNPRE2bQdNDCHyw5iSk7qSukB8NcWFKfqAycNnmcurT3uDvizTGpKrPrreihsXZQhFb2r",
  "key26": "3jnwYZBkmX2HbYkFK9i4Yn4KkEoNSvasY6i56X6MzPfPPuRoCoCvTFSHMWAgy235BMbMtmEieMbdd8qEPBb92yhy",
  "key27": "XFMCL2ehvV9teyRxhEVvzJRG94nPJs9PWTBnkEvmcKYm9ZtttZz2t4ckHxjw9f1RiFZoHX94JaW8VKiXtoJru5T",
  "key28": "d2CTbXdCSBAmWAPcLvPjYpP7wj2xL6KSGHJa6ZYv8T4Ho9V3Wnec5bUH2kcm6ALbtCN2N8v1kHLQXQ8nTqn7eWd",
  "key29": "34RnEH9tJBN9UUwqEqYf4aDn228PDbNEfJTAa2Pn4dJZQossL4U8d5R8Uhm6Y7Wdpismi5Y1k5Y8Y5Ekgg79s6wH",
  "key30": "49r4sJfnpVocUTArDk2Y2TzYmV6YPbozgAa97QyXcmhiFYfsPndHYa95QBxvLqu4EURjtb3KmWyFpEaVWPjyHxUD",
  "key31": "2ixcZoXXiSKQJQPUQNbjPjad1r171FKdorUPXFZqNDSo441cY29ZicqZX5Awo9XhmqhDT4B637X2bMaDgzjACbK4",
  "key32": "3N2xA2y73UQ8PKnW8bDmmhqvQQ6TkqNQ84K5DLNhqeUvMVYMkYXDgtUNoAWoRLuRJCNP2zfCVX1X5VKHw79LoajG",
  "key33": "3Wi7XEBSLiibTqT6t9G6XuFzfA4k7gp64G7SkXe4NcQtv7Ng2oUQGo1i84CzVRRtRFXkH6UyEHzj3ncxPXYFe3Pv",
  "key34": "24gaCFRtZWXTVsBeynVpH8YtqZ4w3UgJhzpDLwRFoVSoS58FTWDz2vzSCdSNoojF9S9DDfCRXFVmmAs5Aquba2s5",
  "key35": "56YPPoW4EgJJZ8x7NGBk5S3G8G6L1TtVx2UsNPPu99gXE3i3kPVFetYKcMSxqEGVyZvAuVW3BxkwNYmDkd8PNLjC",
  "key36": "4KGVPXjHUpuNJeirJrdrJvmManPdmT7js9QmhyAYBkScnpWKJFeet69gs2o2MHHcho7LxbPvzfQxPFXQhet1xtUF",
  "key37": "2tS6iFCnYJqWraEP6NFdEYXBhne51sPnAMAYp98aviSsiqwVwwHWGPqiZdD5q8sTejcxCqEqwZhxjc5eVfEdGtA9"
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
