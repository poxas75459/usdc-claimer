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
    "7wT3husegMCxvsyh5NxuHxzEQ7NL2t6hJ5P7db4WcfLd6uubL6zfcdasndr23a7rVJpJJxDiAp36DJTW3sXwDrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yR92epCvzAggLm8o6L6LTVZwxeUge21xuyFYCjaGX4bksmApYWy7WQS38sCaY7CEH41va4WQYVhnC3GdjFJN9Vc",
  "key1": "9pHnuRNHppmm6arGu7H1Cmtoce48xYAprCLLBtPrXfegan7cbH3sF5Fs9HN2WJT6Ga1GcWubARYTfJjpsaaREc3",
  "key2": "5r4cVFfADaZjfyTp7iBjreXPf9MARsFpNyaVS6CEDDpyBrkTAhV9jAnq3kzrXnEbFii52iQPDpEywybyQP2QCARR",
  "key3": "5Hoq9wGqHoKFoJefnMcmfSFFVzxfMz22on9zcw9BBxNnH6eEBF3canLUJDH6F6S5abhJjR7PQ8T5S2NhyfGrDvEe",
  "key4": "5oZQ18cH1oUTfr8nqMsYBap8sBoNjn1EJzgcZR5ANaPdotVzWcJn6ywX7Df3H5U8rVhaoTGtTd1XcwhrKk4wZAgP",
  "key5": "37D6sFaQDPrD3mj8P5HgLnkHZNDFToZ7r3tdKwvgoAfpYegroBieRKyK2KjFbspXn1KiwuPGecKVzKezoJVitMWt",
  "key6": "bBndjUCdbXmLPfaU3FyduFEe3NnDuwQK3gdEmPLyyNemVrr37cV2YzRDYF5CH6iP4yrgQpDETFNUWnvgE3ug965",
  "key7": "RW7dPovPJUBFGqFyQvH7KWBrMPj4kSy1UjNsn78AnCNKWR3nCwTFpM4i1BjT5a3SYo8XfML8nJQJZhsveZNfYjb",
  "key8": "2amu6i2XLtgJk3YatVqJNwPjA8VHt9zwcEDGfUrGyLHJ3XzGcRmiB7txnG3caHngFWL9xDMSa4tQ5thLL224yQso",
  "key9": "55T12wtwKjeHfCHfa8v1V5u3yXYTJWjeRjC3nurNjRkgihZ34ttrf8W8VYH1Fg4F6ChGCYBYYQCSPWMcTKaam5us",
  "key10": "tq4cubkyL3aERNs4Vo8W9ckMBX31KKCVgkAqyz26Jny4pswxJ6xMhRNutPHwXNfZTK1Y31QvETbq1P8JBYj7BPE",
  "key11": "2XQTn84Ec38oc5C9qebUzcQtcRQzBm9T3ALFrajB9faSife1vuEDcSSN2Tf4tHvYVcDrvA4Nqxui1xZS3CSJB56h",
  "key12": "rxQstbngrpn5TTVd6L8ChH7BkTWKtYW73mTW3ENXozLcAaUy2U6vMUAw1Btp4c1986zbNHeJNGRWxN7aGKMUvCJ",
  "key13": "A72XMcjZ5MNE3XAt5xqeYucuXN4g6BJGcqksxnp9o1SVLf6GKWXxkXPK8Zy2CocqGgTFkLPB5D67e8sxkcnanJH",
  "key14": "2E72kvaDHZREi9LwVoW6q9qNu2pHx4U8NWYjBHyYaPgr2qG55etMJxdoDa9ArSQQrzaCXrep5geGSUpkBXUmsFwD",
  "key15": "5G6E16c3kut58tc54kK9DudZoW7oUXdpjMtkdBpAwPWtGsY7JeG1oE7gxkAtd93MCE9M7DE4mfXeg3v5TCn2dUBT",
  "key16": "4kMgYpTC12eT9fsMPjERDKeSvMKxasFVR1naEEtiPPpNz83MWDrj3JMdJKivbub7qWvgRtBRcPivj67ci6UhPP3A",
  "key17": "2qXWFaZGDiLBTtegVEPCBSNwmbyGWva2wdZVeFih3Zuhu12LJ2pK1Ce5nDmQfCvEDszgysujdsUZJKez4GpkFJfU",
  "key18": "4DvskJqNxCrcBoH5AjQC2MSsaM4tvD3mGYbBaWqwkSw4649RamNziWqvCgHsT5Rbe4EkEV8MdJUw3bGnHc985ffP",
  "key19": "jKNXQjBpXGeSVadwys34YhpLocm4qoRWZrye7ivHciJT4j5cE6TkdKbDHKkfTg1FychpiGfyNWXSkanLDdhdjXA",
  "key20": "5atqmLu4JV7vcSNsrpVysJi6VeKmYh7bLgfYkWRwXW3Z5a9ytz7quzm9p6CTzKDRUC9mgv82gSL8wjVToW4gu6Gg",
  "key21": "5nwBna47pkUPfVpBwtTt4eMCz1NmrC4dKyaGSrbZ13JhiwoZpy7nNhK8ofmPuD6YumdkBXQdpNQrD2ZWtqmajjse",
  "key22": "L9YVeLrJ8Su7TjYrbyfZLGDEyKNmYg4WzuAJ4kwt8ipsgXtz3y3dMHKpoQeU8QXPZb3cqDzZADxXTKwMjzLRk91",
  "key23": "2pKtmVTJ8A8nMHf3qXdhfZypXzkBcWwpBQLUXnNLJrfaPpiGFZuo4pZPvxQHE3u956wF6GF8jgQ8Lba8H2d2vdHo",
  "key24": "5oTvTYBfj9w3nJgRt8dcufHfTp14tvvHZgKe6vJi1FvsRPLASysevHLPNyKRcGuaBm3QF9Yi1qUebTHYJYZu2fvX",
  "key25": "3cvVwNZ1SjsCufEeUnmdxjXS1s6CVmf3hb6Y6e4G8eVzFCnCziB6P7AJwuj6Y5W1YfDfCe4fDmcPSjswtquDq3sW",
  "key26": "3fx7wixmywJQCdgNy4Pi191tjPkwMxq2YzQtN4ETS1iykTKwWWh8yFPmbRcosHsiDCun4hiNnzGPAC4ZK5cMuSSc",
  "key27": "ci5QiKcqiGHVFLFSSz9UX8bjoDnUfBVePKtSRmnvuj4sdpyQjPVsws6yfqG71fVLvGVPqfxbZjVi4ogpoRSPg5g",
  "key28": "2SubSVQZL3qnR5DS3wWonzgAxvoFxUyYniFRgn1s3K3ran5P75B3kNDQehQLA6zFnxBmrqLVf7iDcNj72vD7BFzy",
  "key29": "3VaqFuDZsCXq6y2DhqGbrZoFjXv6FRXHMtZsLsLrRPmYLtgYeMUuwzca5h69P2kAP5Smdcf8fDweehX1j6gHSmMi",
  "key30": "d2s3WdCuGvtMswmgqXUqwMvhCMtovmMDcNA1JKuUyh3BJaVg2QR82afVTgieUM8ktTj6UnJL8i2V32RW442zu7x",
  "key31": "4ujJUSkydeQxkWtuhkHN9ZhR2UHLE982RmGrr7ZLUHC8RXTPtedbw3gBi9Z1Cv1CuVrsu5u6febacV52g1KT3KVq",
  "key32": "32PNrukZRrrB4ThQrZzttjDVNsozynbvWhvKjhzDiSYGiMvUfMJSat3jiZd62ugbmd8yXeuPJoiHoqRFh1KUQzxq",
  "key33": "4VCYeGC7LD3AsoJDR1zZ2LcreTNYA4XKbtLh7agqHYWo2bgEsZEZmigW4kZEakDgrbVkfv8vyBueh3qWCnLzFfMY",
  "key34": "3Aq6hDzvCxaduGcJVK4sUojFTTWrtrdp8P7eopLXXykfnFCrd67tjR6xY5WsFsT4vfWBGZY3abSye7dKb5wfor8g",
  "key35": "3QpwTimgnDrV2F1UCMoo7UoVrPMmuqR8HPSWTbMvGTVtzcRWemk8NnmvVKCdkmAiPsaTEWnVQyr4KzWkMumbDjqX"
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
