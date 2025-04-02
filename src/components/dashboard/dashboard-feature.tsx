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
    "4m2kHa4FPo9prhdTjNjuq28vMbrR79TQnmnyCNsms8A4TzfDVAJtL6C2VQNBw5RcNMSUCHGLqXAo1KkfoYAWXnhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zv3u5M5cdMfgCRzy3E3SpXFC2PBH3zujRLC3jDwV6tDecPCfV7mqAwfgxjWgPxWGrWubNdzi3h3f4cFYcpS1joZ",
  "key1": "54W4MD7kpLZXY7WDnjKrissXLUQvVVLsfzWhpU6WrEP3TjDjbdbe4YEPbw58KBmBHGFrgcBNZBpkYBt64nnhsHwW",
  "key2": "NZZ8eotMETDw1xmZJ6A9V9edWAokPmaeL97ueqLKrMvbPC6gPdNDugkyDMtYf9RAAkRjijZzgmMz2zaX9Jx4iVa",
  "key3": "4m3maW11r4sy73up6uCPvyQy9fSaQ1WApevMSk6rS2rVgDzAMNF8St4jM4jdt4RGbKJyze18ZMHX5ZGUBWq4SYmY",
  "key4": "2zTTuccYCnzi4bvo28iNJ2a2PoXZ5oht4ueMzxgQDZ6MwbtyvSWS3xeLYoqnkQ8J4RKpneJjhzypkvEUrv5wJQa6",
  "key5": "Um82ujyQaphbm5xSTFcCiFcXsEa7FvhP2Hm863FS3jzchWPFAFvjQGaJkkph1Pv4WsQTyCXggxnMnihyJmaBJge",
  "key6": "5Snq4vHeUBXfSykywyYc7HZsp9a3pyivv38ZsmLDxgNKvPf7f3YiZg9kK3uogGqi5iVUNAswpNEyrFeqx8qmgQvo",
  "key7": "59wLDW1qDra5w2NEdJrnnf3x5eWgAgLXXKRJFurwddGgMLzTN5YnyBXZduSWedVYYPVu5WnG1AgGnWUfg1Sta7UR",
  "key8": "wNkUztTVu2DpLoFFDTYu4X2hT1Th3tcQa1ZpKSooipJWi9ZdSAhQ8R43bc3vRDqJCojS48Lkpzk5SeQ6rbg5HhP",
  "key9": "3ysWrZGjTmVQTEeyKe3zEPH6xW6gLSMfnjBw9FJMDsWX3bycLQJVk5xrNerjjMvXt11zCpAibo9Z4x2WLYX374c2",
  "key10": "46xqdPr8oexKQFVWRRcq9FJsYG8RbqaBDvXKg2Gbg4C84Z7ztxU5UjTDhPUciuXRvtxZ9XyfEMfPFXPwUT8nx1cW",
  "key11": "5AUAF4yoUNrF5T39ujJYzEia94YihfY1hnjncSs3rP2q6TruR3TshgMoyziwcGr5VBrQamJFU76qY5q4JdefcXDr",
  "key12": "5mr92pLhx3AYXeL71Jj7g4qkarRWxFQmMoQkUmp4XZro8s9dFmbF545VsD9uQf8mF5NcbAbkgzPJSZTSFv44cqCs",
  "key13": "5CoKg7v3puiWCKCVhpZ2tdB9emKCpAo13LkFCYES66LvaX9BV2ec6fzS28hiFDY8uTUmDS2h6XnZ4ihWiUPrcaCt",
  "key14": "545BbzM46BMx4dja8dKvKDteMCe1yvkq9irmFPDtAa2PaJqYL7NDahsu2ZZWcZuxcXkERk8nhL8sKegRcEiKg7ea",
  "key15": "h6xsJz2dv4cXFaQcXSjSLhUdsDjPFh2SRWkc4dSpQM1MLLv3qnQwnuLYUn6f2WTSXuddH7AJzY59cy5h6JT7XXe",
  "key16": "5cyuJbVu8KG5ikTxd6iF3WvXqdjx8TYDbM1FgmTdLBfW31PunVaMduRvayhz4HnV4DBhoQAQAphu1CbePA3sUPVx",
  "key17": "vpRkn7n93wycduxZBcznMCqP99tpvjRN2Dh2a7GackFD9dg2kGPAYs5fXMJKXiuT5QkiNjNF1QHp1BjGADAy5UG",
  "key18": "xmiy5JwEvHw2KUU7wRxScxNoDzBq4Git3VwnNf3SncKDW4MseTMyt5sPMh8yh98uxZmvhU3PUviKzTHAVX2TVrM",
  "key19": "3BhxSpQiMVtPeuo9mfDkBtoSQ1bv1u2in56Tmvqnz82F4g5WB8t8E1nkNqMBqNgeU7Q1YTtwo3JeFgGTvoUHi8ty",
  "key20": "58f9HGEoj8E247fkHc2F68EWDHvq1un3sBFqeLqKsLgMT7VHrtW8aZUQGym5hFm8PzJFacW3QtX9c9uxPLLPhFP5",
  "key21": "3YDru1yuXqUU8Xo9XpccQyaHUQ4z9gk5pU93BeKf1WWJ6TXfC61aARQu1j5dCBHuFd7TnMqup5Tj42gtQLx9Gf7t",
  "key22": "3YSRLtNkAsYLNJ75SFmiQjXwxckmpdsjEZCm3pVcpUJPktnP43hWKh6J5La1wX2aTqmcoCdmMsoBHHYEZGqUBPQ5",
  "key23": "44i5PAPqS7qLUhbtpyejZAaAk5CpEqnBKFb4B3zPaVAn9Abr7frtz67NtJK127ufFiGgPmi7EydiUVazz4h9wSWr",
  "key24": "32zezG3YQnWwei5yZqAC5ePLXVUAwV1uAhKoTgBd81AmmHQJHag35iQbgxJZazJswtk8NEQtj8X9zwfzH5ZPyiWT",
  "key25": "2wbfyXN7SKmgffjSwftLLH7gevvaKY1gsFKi6rko3wtnx9zey3v65scQGwJXHqZsCq5JG8eXe8WR2n9BwARp2ea",
  "key26": "4R84LQo854FbNf1bG7tYF3ybzgauPdsNgNF71zanVxZczh1hHUGxVfhpfg3GCLteBJx3FgSkn56CvJqiJEKDvKd8",
  "key27": "FjXk1V9hEc6t9aHuWfK3UPNXDRhttLpU5PeRFkVuMn2hapABGGd7AZpdRoVb95vqjGMkyrYJGfYZrZayLKKu9A6",
  "key28": "5HfgSHLW59nqz2ozzt1QisMGG1t8jE4rR6tNbLEvMKnb6N8GQtvFwVCMCeFy65T8u7kSvwSR3rqBkZYtnyu71eQp"
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
