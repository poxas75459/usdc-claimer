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
    "2TPv6JFB94K9C7yKAWWSF4GFEojrskMrpoqC4unj8TDAK8o7D7uwVLRXCULJc59pL2aY1m4TyyBzvNodJrY9ysgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4voEkew2nwiuDFVyxymRsyuFyLDDKFPjVA1c12X7GEC6hnpgJLEadvmZ25GRfmiZnvuzcTLA2GqzHupEGdQcYxas",
  "key1": "3E8tb16TVqZnCgxZgJ6mqEbdgM2ZB1AGyVTAQkYTCeUA1YvPwgCtBuhqrcEwZUq2Pgfc4TZJ6y6R26Aq4f22G9p2",
  "key2": "wfz659u6SwvrDVWdKew7MjL3wAURyR89stScw5SnyAKoc9BRpcsVigU9uvY83RxnanHcS4ShkCBDMAW9iNRryy4",
  "key3": "2UsjMwePChzMfgduPxZox8kr27AYzprXaUyz4GKSxs4SuA7ezzrSDJHKGCHT8SkPztaMMTj7yVgRHnJfum8B1i2o",
  "key4": "4iYm6u4V5TJXZG1183uzqwm6APPLcfyn6m3a7fBbqvV5jBcnDEpVMXuPN4xrWaAb6ML28H6pBzupGqgKt4K9xra",
  "key5": "9gs7sgJuxEtu2rDDwtqpKPsnxGgowYGYp3KCXFKYxmdUXhQ4MkBERwYZbZEMrrNR64sj5K5EZ7AsXuFE7hvkQo1",
  "key6": "3y8RjLK9qSFm9PvtZ1qjxcFTJ7UMtPEPjxuTucvAMYUHduk1HLdvbXohxN7cNetgaFSsR6go4LQ6zBo8eGfDCvha",
  "key7": "61jFEoDEoaApvs3xwTXmQZBLGxA5c6ZfFL8ngfXmRcYiMTzmbafn2mxi5uuqbxB5yPZYG3FtNxzrpomZuPt3P1Wn",
  "key8": "2jUatAoZgSX1Xcuf2BvUHY6Ls4nrHkpd2SVuqeVK6GhCN6XFRP4jmmLBKF3XKM2o9sh83bzC5XGiGk76myqpDntM",
  "key9": "APN4iQidECHQRxMFWSS8fgw6fZdBQFUKtjfU8FXob4ojXtH8VhvvFuPrDkdaPh7aUHtH5cWphtMUGxHcB66y5sZ",
  "key10": "BHYnK6fEaioBwaB3RSqnRZV3fRwknknn1Abe2Q9ngcyMQgVr6AXsz35sDWRLdKTnzvBtPQXqw5UsssXZn3hqxJh",
  "key11": "2XKTfdgHBt72VtAbA1ayRvkiZaQZGzWYUx4SM1DFijz8D2SHSo4e7ew3fSN8mEZhPAsBVzgmxVbxvXz6k9DwUdJR",
  "key12": "TVC1p2ABxTNS6dCH9Pt7bLeME77oL1tEHvXRtMiuJJEjNBxcYfUnpuSKHYxDpkNV9nkcJJch6ZjUYoMS3rze5NR",
  "key13": "5VmMqdiPLDUVjPsAWzTtimkJ3yVwpVLjhUckEGsoxVFPHPSLUdWpg1R8aePzTxKF3AHeocGK9GaaX2jQXaaqzuMX",
  "key14": "5TYrjC2j3Pid5g7hU6deduKpvbJD65sV9fArAfnJLB3qsnCNJ2Fg7MgKLKmDAv676uq3CbAqZNHecHT8Qrt4cpNk",
  "key15": "5gpZcgdJY6FoFgaknFYomtyd7wXrV5EfsBA3tS3ccH78tN1JpXoWaQFHqdGDjCRAPvxT8rQxrwNC6MRJj434ZaCK",
  "key16": "2sYzAa5UQSr5xCi8ibn1LusvV1Vhzn3gnja9nbE6pRwcge8Dtj2jSsa8hezLrRxEqoqjUge96XgP4Y9zVJfvG5WU",
  "key17": "2QzVzke8aWBBsCJu4qpiwP6RgFBcCaAmdiq1fQ2uazvgv4K6Qihtk6Nt4MUwPRyC3djyVVqCsJCqTfFhCiKQw3g5",
  "key18": "2KwVD45dLZ4ANVuSCUWpypTr8v54BpxKWM7aKifJYnXh4bwnkJdTG1bLqLYKiRGiJAfTd1SJh5JgmooXawmcE9nQ",
  "key19": "5jx7FRNvARhSXuJhHVingscjpenZJo2euo7b178ja7YbfMes92ciWLDSKHDWeexZFWubEjAttL3RoJCiNBaaBAd4",
  "key20": "3XeHsTsukh8JuNjNFxdqWqNYiFVJmK6juUTStyexQvG6Y5MSAh9WRvxsTfjrGpBTjMUYzb9F2X3QqppcPfr4nLMp",
  "key21": "5rG3UipLZNj99aaTQ7qNkF7MKafYa9ixn5UEjNuRaUM4t2fgihqxieAmQTa4ddbpebQGSfWMs1Va1Dvv4Qumd99g",
  "key22": "3RWNYSAagNGkfRAFtbVwRq6bn1tEDUSvQVuZPsByrWAQgTdz62TM8etft3yAkKid4ijQmnoHJrQXb9G8apniaoA3",
  "key23": "33aicXDxLYfaak5KQUxrF7rWrmAGzcuQKDYo9bb2WioANy9aftyzqTnVfJq3TRWwCQwjZYALQ7AnPAK5y44NjLFm",
  "key24": "4yUVQ1s49GbiDPW3GHbVYmvYfwVzaccTdb4WjchRwBcCE3GHvYhyZyDBWWsth6pP7Xm714DLd5g8HfnvcN9fMbcA",
  "key25": "4zPKzUiP4KAXPJ4pczCQSJYsrUX5wnBipAWbFmrCzEK6NXJswifeow6HpNsEJ8iDTPcnBeoPxr7K6gvaeJ9pYPna",
  "key26": "5rsAaWYfco841xmUot3C2XLp12uUwnm8NPii8FjHjwVw6BdHcfkkMd1rMMjg3DqwCPyYw6g7NWjScguRKSjgb6ri",
  "key27": "5D3wLHWyyfUoE9LKGbwsERNRM5KVPvH1hXxJwZ5JVLCFiqPWzj3LQ1ta4nmLHgcia2ydXA1E7U6zTupEqoww8WAK",
  "key28": "3SPsog5amKZ6xR2qVKHT4C1S8u2236czLQDjKHwpMWPCBbs7YnRLKkcRePzWSrNFs4rtogZJ9r9tUMoCyWfnNM3e",
  "key29": "5U2QjvQESUUHHuRRw3PpeNvBq4ZDNDXPePjAUoemquCXfSLLKRSz6dD8LeTaDhka9GUPt2tv6dY9XA4WzwAop2gN",
  "key30": "4ZZMwyzkeA2f1V66Nn29WH978FM2HDrxQE84wHgfZP2mRpk3udLmpi7JtJb9oczSAMgzC1aBrFwZqQoenzgat6tu",
  "key31": "2XAkaoniUNCzMsB9edE1aRaztkL4wzMTGSH65G4ik36Qj5PRFphtqk9AcgyWnQKgV6tdpxrv3VsbhaETRyeBdXJa",
  "key32": "5iq6C7LJ3HmifhCQq787WeLYzT2UZjXBZxpvALDEFTNM7fwgtn94oXAG8eM1DGf9jenEcY5urqGfXzYwXaWwaS3Z",
  "key33": "zhXaZcqzZJxGqSvryEJDxSf8ungUBwRAyYouhV1VqkmjFC8S1WSpaCa6qGb1MLrTDYEsYjiMAqBMaLJwJ6AUPSv",
  "key34": "5Hp7jTPpvBZgC9Xf2TYZPt1gUcQd9KtEYRLavaSANEqBEPW6ukz72QWVn7Kn5voTXrBSFumqTKdpX5rC3GBUDXfF",
  "key35": "2imjSjjBYc8udLtDfmZJrrsz6NZXEeQDLEi7eN9wDW5ifdjJYjNu3hYn1RALHpkbsR6iY1sGMdhk2WPfvFnWxjNV",
  "key36": "rbpeoNotiLP8kRCFzGyzAk4r9ckf1ByNCHjvS2fZKRX62gs1RLY2sDmtBt4XivYp7BMHov5gcXpCktGEzWSFfNT",
  "key37": "3XCSTTAQvT6Sp5f1SNSzGyYgKsMj3YHAiHcwN3F3P7SfMmxUzW8JGqk8R5t6zpQqQFPqQBR1atCmSP22n9SHdn8k"
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
