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
    "3hFSHHDenKKBfSzxCvMX46LZwXUrVLEJXWVkKHi8yUxJzATGG7yxe3bfv6aZzpm66dqEp76jiuih4xdBcRLRA6Tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V626xjpaHozN6zA8gdMc1rXgwkEY4q8tKMMUWczm2Q5GztzVJpb9ASYcynFJEP6CVNP8hc92SXgZVEuVqGCe6Z9",
  "key1": "4AHtxYTpYrPcK5ije9JCiepjcg1wJXbNZNRo8NZJ6SaTysoXNcYbhaD6XUzhmmbJrG1bAbS3EWkoJ3LrWriXjzt",
  "key2": "34rXKNP4UAbHgG1DyDWwLY7fj9y7TxTEMK3La3LisceEVHor9gjTRDRmicJpDmY8oTAYa2LUHZEKUtZCJp5KuskM",
  "key3": "2dhTq4ox3MA2kjc4vrTBCY5J1R4p56KhCdafC37SuWjPeNgdWfXxjkPGcAzRkQ9p7CjjjucCW3dvXpwBzqoW7rzj",
  "key4": "xVZg2otjRsMsNxcr8j3jxjCZRjQPzpNMdwskmcgdJpmWHwc7251CyfDdgdehfUF4HqgHd19BoUG21AQAhH7PqaJ",
  "key5": "4dxxADfscL6XNvBnxH2AHpwPK8Pd5Wxs4VE8j18kLG2FHHgJx7SzKmTPJmdDmJD6QTSgcZ3ASXJ6J76Pa9YfdXSF",
  "key6": "YhSCzsFeQ5ZuUwmdssSBZqHNJfo7TkUHLcniaiPrXSuys9JYmGt985JATdCvr8Fn6c3Em7wQWcvo6WNZ8JkhxG2",
  "key7": "e8BtWdQHLzBC9NEUYYeizu5qBBZNunCaFKgjhkigDkz7q5cAkksr5zd2JMPcpVH8d2BKNYSZmZHxjYPcy1bVSBx",
  "key8": "xt8LG1g9j3mxU2tZvuWeoQBH2v7kmNjPZwp1k3UffVkENXHcqbmpGKJPTpihbrskabwxqPLBKRo5BSvEjas37dM",
  "key9": "58frbm68ct7tDRrufRdArUCrvAgKYxR5NNp4Uu78A3GN4btDHRX5WzbRWq5kEmejWu1yiF8PVPwenaZm6osWTQyT",
  "key10": "45wfkU3KvhaWkA3HpxqM5KB29wMCop1DCoG3vruKUsnEFDG2NSoWPESM3CYGvunkiz6SeP7Bf1sPzxmDsjpQw4mU",
  "key11": "2Cja9p1Jzjufge6GiPhyopxbcjHdXnTvzNQtU6W5PTcDNEDDwegyx4Qz7eqFxqyPhFaKZ8Dmq9wh1DhXhq5v59jn",
  "key12": "EC6X2tRHUrw1DqbnQMcUNBFaS2Etr8gSh8R2YhnATyKRKQgGN7vA6cu35xXsfJT8QeeqFKgdRUWuT1NTY1W9bp3",
  "key13": "2y641kc3kAtbA3kuWf5DmmZ1Yxv1bprbv7ch7Aqf7Tn92BEm4Z3AT4X1hSVU1jouSXyrufiJgXn2yppK8nUCjicc",
  "key14": "53zmhXJRqsbFcKuBCEKKzVc6NuVzygtZrvbSam5BsQEBftPVr9qmAPpGLPBVk4gnjdJoqZq3XqML7ikM6mXGd9ph",
  "key15": "2KdP2ENr9Z7VSf19jiyj2vaE8E1EmmnLuxvPU5UefYddGYB6YNsxupPAUZRcnFUnTcPaeSKr4gDXhC1JQxqbfqHm",
  "key16": "33SmYBLTboSPEsxgL2pbwBLFDM7AzwrEcMef3NKEEXK6ayBiRvscFHhecaqZ1ka52RAxJDgAvYapdRhgPYgZxzw9",
  "key17": "3VogrpE5dxQgh348SFVqnEvDQib8CJkXbtJHgjUDEdMLpmEcmwovLaW7oJoPpwFL1UC5rGnyTnbmJcMEgrffjw8a",
  "key18": "vGQa6tSXkxdhYcLY6Uz4d5pMdpLgohF3PMU5ka5c3cTM2VgEgNPWsBptRtMPCWSeUdhYpgYpLm4Pa8gzV18MGqs",
  "key19": "4MYW3aWNR6mNDayXCYHUZBZnqLwiuZ6PmazAZsyaVVQv5LvG2n7L8duydC4vcTTJhuzjWsGrWD9jDfqX4TBF2uiu",
  "key20": "4FxBVZRR3r1XmBEhszpDuut1oya9Q2T42KPSqh5QugC9bQN4r5XaG1Pq1nsaWdPtZUGKwd5uHv6FW4S9FE7Mb4VR",
  "key21": "2n6cawbAvfDt7CPUXSUHob1QP7L1SnN91AF9C6tmzuNFWGFQwgVr2pGfAUNNBSgXNKRgLkZycaZAtRnKLyc4tGnC",
  "key22": "xMcV8vxCoDQ1FdVCy7kujRTstWkvy3ZDskCMhP1SgwG4o9ZHbiSZ1gcTvxP25hfkCN7hFcGYJbB3KPtMTbGMs9R",
  "key23": "5DH7q1gLMGwSZUdt2wnBAWmCHhmUYPgW4DzJEWcrvbN26AqWyA2S3KckkDwT57tCCuihhbpHH8hSi2D7xAxjCYkJ",
  "key24": "3GV3dqsmTP9pxawSaCPZG3TxAMbEeUBVa5xW3sdMxPU4MukhyoiwFvgDiL9hd8Di2D726Zgg6eekrHrxyugohCs3",
  "key25": "5HE7kZhDPwyYUzXS8C2Rt8YyWwQSmeZ5v4PzffNBvXAeWt6iKXzaW2zU95D48zZ8aHWTe7ufc31r8SusWXXtyAQe",
  "key26": "44k12527XoWVvddge3HshCudS1fd1KmQKgfLWWky4V4sS9UQ311f1PJY68dfuG9qN3kVCkxRQYA95C7KooKmJHL2",
  "key27": "hqpqqU9gN5ULjMLfUeW21RFR4TLC5nBvZcoRkunVEkQwFyiUsbsQuTLdTyg2QH4mjqQpy5EXej6vpZFD4U9LPNV",
  "key28": "3CHUKcHqRgjiZatHYqttMexdjx9f11bBN35iQdGHr7KAHWDEhBaT6k4qF2w531HEa7sDzs7c4pZZFfYQ44cncBzS"
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
