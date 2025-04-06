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
    "5Pc8bgB8jKniRseWCa7zkJupYaj3iTepHptwekCfDuFgC9uXEPcoeJ9GnQfzuzufmvkPuXggasEeca6vR6PVpMMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DSztK5w49LswLuHewWZCY2HKhNY5JNptgV2iHkELiPG7tGTfq8tEosRFkv23JAv5ozvDUvnUZe7MN3SoNuc5KM6",
  "key1": "5ZfR8S69kM2VpgzgRtP7raEEKcgVrGxMshwLH6xsHEKnVN3jDTmmAyJYnMQUt9KNo5eCoG4uCoyDcxg3DsG68aEp",
  "key2": "2SxuqYvPU39ncDbu78KUdFfjzvMwqfUtgz2h3Dw5HAHN7JVMBYSrsiaWrE8wLoFLxqyL7pMUBg8Qmo2kZVMAN9Lg",
  "key3": "2ENyyhiZn3pMb94WFweA1iPoN5sGYbTwyv1RYL9CMbqzEusgutzuSY7EgJWmiJ98KM66UjF13xQxURNwGGQV6qJq",
  "key4": "3Wz7o3npj887LUxytJcbRFZ86G4kND9ovDJH4sPJkLxYAXVezdH8y6nAumkg7T3Bxx8bpGU4ecRbruEvDsRxsRBV",
  "key5": "29YybzFb8yMp2tLmHeUB18SQUigy4ahEy5BP7NsHG16HaKr1U26HECJxTVNtKPmeqY2N6g6V7HQxCTjHK6nGGK29",
  "key6": "2myJYMRyFnaoy1xx24zo8k2kLkjFrnVg1ugxGwHcHMVjrMSwo8ougd24p4M23mNv2ak89kUTD7Bpx9jzWom6BXz4",
  "key7": "4YgNKPMLrUxBn1rLu1mUhLD7Sv67LxBFa4kbcHfGxV1a3LQEZsdnJB9bMKSsW8xKps8DcSuxdCVseNVrHBfy7BXc",
  "key8": "2kheujBWmYaGc1JJPEBpFLMXVgJpoyzLboisfDDDomLKuEGZGD7kqS2jzQzfCdUZsBdC4cnDJ8WpdsWWnkRQahVL",
  "key9": "265hwbHFrsA84vXj6dabWH46G7AyUZDA3w3xFiZmxEWQdTpQqDi4JkSMo8fBKzemqvdjByWV7ajF7SivaWDup9b8",
  "key10": "gRnSmP71CiCb6HamXggtTMEiMkexLWaGDpj3M3nE9TYmEGR9AMPRwuDu1bUcVLU2VNPeM3KxzJhqPZQDY8m5DGE",
  "key11": "3bC2LQSmZYv3FLGRkExAuW6g9DsLKjisKwn88sytBPbBX94pWnHNGs3DAxXEQZ2D9p7ndhNxQAs7ocZB6vuuTmvm",
  "key12": "4ekDMdyYT9tNYmea1i2X42og4WZqJydiH7bCBRasEFaFrVVY4dmBWzJjcUJfaMSzE8mE6er8CVfqXFMUjKXe5wRt",
  "key13": "2PG4H9HEs948eVLUk5mFKMpC1W9A1YNVQP33QXurM3Eu9fL1pcAWhkceCGZPrErCmNV47gzTJBErmXZqa9DY6wV3",
  "key14": "2SNTHDFQKU2FNeMZrvVpfZvTZ4hY1k8fSQRsKxvVnYEfUziKXcrhu8JVGEhVxqvJ7JNUicyxcz1tJyD4wpcAoL9r",
  "key15": "2rDxygYDEuCQdTUtgfHxwi6SPMQW7bmXCCU17AmSiqUCdEdSd4A2c2eRZBfkywTF9hGMUNjFvHzp6CpAeTxMqSes",
  "key16": "8T5EKtBppTvarnCAoPmX2y2bhAbizaYmAePECTJXTtn4Wzfojcyvs43XzyDbDXpDnV7Dwoht9xRKLTZjiEewCRP",
  "key17": "22yeHfNAusKer765s58NHZnpaY6zEqCk7CgfZJobLZY6jTgG5rbxGK7wg46wvZcZ2Vk8ctk7Hwp4ekzpoChQ6EfV",
  "key18": "AryRAZEr2Ed95iaFcMJ8zqYx3uZRDPPZdLfeXmfstw8LKB7x3YQLxMfxBPgZubFXuSLFQNaNi6dwspJ6jsA45m3",
  "key19": "5Wh2ASFBEGNXZwh6Y9e1ewVewu8fHQx3sQzz9yFttQdsTpzBVWyy7mVYNCYGU4tpRjXin1zZMjwhSTReLYAjMhee",
  "key20": "ghiJyyLjNJ3Noce5QzJpSPT4hseSFvGFM9WyYUM5RmFo1GVvzzHEkev3CgKYXa8G18rTMr7iyEFZX1xASrBvuwW",
  "key21": "H91RvmMNrwbRhhq5se27Vx3hppV33mmm5eetiCEm2NF3kw49Bszw8djbG7VnatTuCjuSyzs9KA2irPjBLsLcANd",
  "key22": "45cG57QTi82LQem2xE5SioCRXunqgomyyfqCRR64A7AkXgwdVK2Y5dG413jS4N5rAaTPj6EHCpa9sGMEwJyAziHP",
  "key23": "5Y4fNx6d93ooxTK8cddtdvTYojdBsUH9pSmiiUhibVn1MpimZPbEbmyYyPkr4nZecmS1SCMtR4wJNqHofNhipK5y",
  "key24": "2gC1yE49aYS9Ryx7L86RCqLkahSwKufDwWhzJGSkszQzNSM1N89wmUDL7mKZd7enMexUPpsF7fd1cQMPzgVXiDpp",
  "key25": "SHi3QEnrYLmx8wvB7rWByAA5g4ytWtfetTKcpZMtWBLnbKW1PsCeFfhnEfnY1QREn5xk5T2Ysa6VPfBrsvtXnA6",
  "key26": "5T3CLXA88ajhqyq5JQonLEbmLCfEF2Ug9hUrNbd132YRDJ5EhBNGuNiBkjC4k3wNuTaxWhNdMTNQs1T1mMxqMkAc",
  "key27": "5HzB5vitseQ534SqzBDSMcGqZZxeoMXtkPRVSL2z7n4BpEfV4Z4kEDAiCXdrVhDVGhgDoiCbuveBxRuLLuxkkbz",
  "key28": "48ZEmscu3xRp6dPk7ATBmWmEsPT7de3zVHi2JrXUBwz5GT6g8XStj9YQ9nJGDCfHRHyNzPzRPhT5spkNGRvZUP4D"
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
