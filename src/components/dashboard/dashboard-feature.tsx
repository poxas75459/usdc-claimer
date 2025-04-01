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
    "67KrnTBhp5kxSpmYsZnyW1TC4KAkVX7wp81wwGFaGYAzCVXwJYnVBt2n5RzgPxM8MzYCunm9mLbJw4kFF9qU1tnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9i6mWdh4uysWWQeLgWF8TqBbwhwBSgyuwnNggRdvizUKtPbh6f9213ASZi8FyTiMCnq8PcmpXe2PMSPoWKC5VYu",
  "key1": "4TbkyeZKYi6Ro4Q8MQFQcRRXjyacx2QeZX9EDLswpmTJjxw4PpLgAdPrpNdMHvrfMqL52DG9r2dZH1CSL1A5ZSz8",
  "key2": "3wmRGaT7zXcNFMXNyyngGD4QJHJfGoHvJbmW9SEJQqghJoVQKMoU2Hc8hP1A5o2GppSz6YDT4MGZhnzkXqMjEAsK",
  "key3": "5K4eX4gRFcz1s4ZRjkBwGCQaDq19P1jobhjCXYW8ZwNDPjUXqbuPBB5SN6pNvuZUCodJp43kCr6TWMVHtKfP5reU",
  "key4": "2ob2VzQuWKjo76v8UK5nggKZSMiwfR1MrBWHjB8jMq3XMKLuJWXhVG9CTteWg9epVs29jxaeyUBrUEraY63VG1PV",
  "key5": "3DNJWcFmbyRrKqhDEMGyKEN3uWCYHUBdiux36JYPBWMPcbNLFjZUfF21SD3W54BKAQ8vHwHthQLXP1sRxG2h9Y8B",
  "key6": "569VkfiNKzjwt9ggS9jiZeftLKD7Pa46jvh9VtK6bEKNBrJPQB1yEbCJJ1SJZT1aUqQxCo4B3GkCts6MHqvbVVYn",
  "key7": "4zSZegQxUQjAhWHu5yuRyD8CG5iKSt1no4vbHyizekM1xGXdBK7Sjt1mD1ARYWuymyugczkUxFGivWkpjvqLGM4z",
  "key8": "4AHiCZWxJrnFUYWHCBaoUQoPGQUBKKVdVVgDqY2FJi71EwHH4poLpdvPBvBJE6vv54vYqqkcsrVUfB6Mhb2uqj5W",
  "key9": "5eKaFL15Fcg55FXULz3aSn1hnzjxAzDps9earsQic6dXFBgXuwxLrJ6cZRuAzKs9j5z6SNyveJZTGfbWr3sFrQae",
  "key10": "5ozpf84knDZNH55Mps92NYv4jQuodEMBNBm4v6wrTpVb5PPhQ6P5gdHBa1Wfb3dDpjnZT8mhWh2qAKgV1GnubSmK",
  "key11": "hgZ7hFh6xsaM69EB866ey8hzFEv4jPgKpR5rNin4dpoGdWF6mPceMuUG5Qrr1tF1RMNqyycmZhKV6cbVfqChupd",
  "key12": "62jdiDw3X4ui13MoNPmjN74shkBM7Rozv7gTtLh5r8TY2GcQpqE76HGskLUcmo6SnjJwtXDDyBKLb3PJpAc9oinS",
  "key13": "2GeDDjtQ7iEcwFG5aSByrDq5wLVRQawUQeHbbx9Pqev7NN7p5Le3hi4GfsHUsVUZpRgJ5BBTZZqs8pUBpmBNaXSJ",
  "key14": "3LNnxxxNe9zrbgRtNVNpuV1rvaUFy1v3oF9QuN3fa84U1WTktd1Gx2hVLX6ShkNhLdmT2cV5YRuqoFbbeT8y1Axb",
  "key15": "2M9Kf1SxyCy7CaGMgkDLjUQmqzEaTvrYgkzpCy3PCckgBbMgFYN8GKhMzrryt24mUa2ZD5AGnKU5rFtSdmAifE3i",
  "key16": "2HJYsDE8wqmxvu5mx3DW5htrYeM2tn1EVN46YFZ94kucoxppPe8W2WGKvPESPDKicWVsC4aQPzJpiT6qnMLofUtj",
  "key17": "3cG4g2TY6tz23US4rcJbiNrGZTtLSVL1Aut6iUjzBurhPGe3g8BsqN3rxiUPM7PuJk8HtZvG68RBQ6cZzVPwrziR",
  "key18": "3J2uzp4EGvJUiezrbj4Ag7mgutButHuSt22kcSMBgXRzMokoM4fqVaApBiaZduQKJiTYKG7PMgmob5cmYAAB7UjQ",
  "key19": "4ReSmBc86svunkGaUvX39L4XWUq2LHAum5vr8zoaZntBNvQMV9jmpQ5etnpAmZbhi2BVnzsuDQqDSgYD49JP7Jqv",
  "key20": "4D76QvXJXHSs6d1EHqx5MD6Sc66VtR7hPaq4xBQE7ZB2K8Q6HGYZgGwUHKKzgqzT2i9RTo9swGQGeGJQYeXHP4d1",
  "key21": "415C4fgTB7NeEj85U3DWbUhBRsS7HMsyYkCSBdLfZkVcV46s4NHrPtQzia5aCxfKmMpqhdRkd1r17WFahnx4s9fq",
  "key22": "5FqbZpkHiRf2a377xKeW3tVDMsJecEWyBMVq94mkTxATNTdzreJeTWPCo4ffBo7jBzKbJqmk1TfN5cEubBLxUiKX",
  "key23": "eRYVGQmsZc7L4vcAVCRr62GyiSixtzKqPc6oZmaVbgXguHoFGhxbGg8LLZdvT3PuTqpF7vibwwB2eMLvtkW3YA7",
  "key24": "53wXgR9SsvU6379deTRwG375Z3DfVMHQV3NVgUc3DWCSR8yLar1K9aV4CpJJ4deT5Do7Qspt2NnyjTuyDxzKGDZi",
  "key25": "4ZtNbxg24VR5tBnXdadCk9fFMo9WMeNbJz97KhzUfwuFAZFJ9vLYVkkSskzwoQAhJoSVFqEkKktBzDpw5LW3PK32",
  "key26": "2fAghEoDVcG7sKoxHEmEp8x717K3r9tW6oE5925NRCMyRdsvwCHQSh2Gg4FnK6E1Z451as2QYLNYV7A8LaiQkdBP",
  "key27": "c5sUbSNomCSa3SaKtLVt9Usb1FfqoCqKuJXwYCRdnx1PMraEQUDQuY3ExaNzCyswmdkCrW9ZHRtiMgDYkfdzrPe",
  "key28": "62JfdZZuQJfiskrX7Vs4dC7T4kJWmGNjngzndPynFABNBp5qx9MJ3jf1XoQPsjJLDygrp6i6YqCo3sg8sYxKWKCv"
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
