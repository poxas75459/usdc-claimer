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
    "49QoC7PjCZWa6aqXCoytNuEpGvsaXBmx5WuNjRpmqumrukcnTZBgHUeGYp6sMbeBzBGq8AVMomGzMjtKHnfGvLRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Txfx8RuKpgvvi6efNBoDm7xzreBFFtCV8jmpKPgCTPN1RKCuXGuNBFrshCs3wkXbnpmfzVr4Kpq58royg1r3XS",
  "key1": "CGbNBV5Q93pq2QxJoXtcjZhSHaVUoMJFzB59DYJTamyDa8LbZVprjZk9m3vQgusZnTx7Zu5rBSZn3D5MRytkdmt",
  "key2": "2zBfUEDLY1jdQyS1FXLWYZ12TcRDx3ePjkRwMTrHfXRwhYVShebUkD42RKAnmq1ocNKckE1o9pXEyHHoxaRYypYq",
  "key3": "62EjiZVhpwkDWFygPLhLZXkL3dc9NFfZZSWQh2strUtryLcfPXC7WhbmX7zEjNGsCE9EzLYvMmDL8y8eBB4DB6Nq",
  "key4": "3THmuJWJnZgcwPk5U99RYo2iFXQjmEBDC4XN472mAWVgtPvvWeH1hLpLTTvM9masAWtG8zpXusG5y8WHeVkjNXKu",
  "key5": "24VoRUhjZFuepGeQfs9PZU5uUBHR2iRuzbts3gKRoAxbRczPqZim2RzomTV7uGkiVXsPpny8cq2Kq6cbdJ2682iG",
  "key6": "2VUjpUa4r3LUbrjsEWmsoUsj8neYXDfvXCrHfqoGKcQa2y6Gac7owKG2YtDztb5LQ2BxoXGMbizEeH5ihmYxz2St",
  "key7": "hreTGUiWYG8J6E5p6FypjzKpeoNPjMxucwZ2PNh2kaS8xjoBXpZ89PyLUSsXogW41uRXVznn9N7fp7Eg9hCJkrt",
  "key8": "2k6DYnex9XarMbEvMufC5WV1tnWpbVLDNxRkh8vmBwxnFcm7Bio2uryr4vypRKoT1JfntHDso5cwcTG5869pMqWW",
  "key9": "3CQ5dkn8fvrW6TmaZmyTAdWYwNWYKpM47U9P272iHpXavt1kVSzQ7TjDAUuQkt7F7WfkBEt9mCVht4JR5a3k2gX7",
  "key10": "3teLZsgTLVYN1q99pdNqX5XM7cAXGNjk78sY9LaoB2mBgQvTCm8Z6aRHFPpKr4rQ9EuAC7yK5RdgLGS9SohGdVr2",
  "key11": "2G1FNUc2QxfCfhyqg68w34oggM3NFE2L7gqob7h1XAuHCN4hyhdf4Q9nq2hKWLfh5iFequmzYtWfjxQCNLoPqSZr",
  "key12": "3xhTMGNNRyRyHkK1H6iNZ3y1HyUvBbH2SJ9cEXSrhs3J2rFHh21q73L6SitVB4dAUJut9VwkCq5LheuJe6sYVehk",
  "key13": "GDuByo3rBeDf2WWrtn239v5ACLqAw9sL2bmQJGT9htqhBst3xqBjBhZvSqJGqt3mmkq2MtyZmdkAK9AxVNCPQoh",
  "key14": "4k211XTiK1qW6Az7efUBssbsZmydUChfiWr68sL45dumwmirLXKQr8DwibE7wEy9JneKqrYGzXWccAZST23535aQ",
  "key15": "4AaWe5oSwn4FAB5BNYWu5SEYdV9aDg4LRvqpgxncy7yRbyLe4VE6qvrsFQMZCgnBhCB8HLtGYVbNdq9MU5r6jKng",
  "key16": "2Ms1xyiWiHGWjpj1joGpVFzikozvQ4sizFPEcamLLDxRCEAEWjw9vViEgXrwRToSR3Fn6xFyfioT5S8VLH1CKUia",
  "key17": "4msui1fwABSmRu2cdhTBNz2E7b7kPq7yJS6LvApc4ksu3MJM9zssQ5P1v8S5okU1q1n2Sr63CctsRWnj5SSpCtBE",
  "key18": "66vxC8NPuwAu8siQfxGLFri4MbwLAFJzW6veVf7ejm8KGMKEL4fozLhd7gJfDNfSX6jqVinfxqtps1VGpH7vXVuA",
  "key19": "2fNGc1bEx4zwRzLBEy39sM1sfMdELFCgGUFqKxapgtEM2WSC27TCjdkg6XYDSQHtH8FJFVEgA7YRt7E2CHAq9KTm",
  "key20": "4EzFNXKFsVSumKnaDWA79o9F2q1JLts5EraQVg122oryiVg8gTpXcQC6Q8UtprYW9tLVitoJz63VbevD9t9p6JB8",
  "key21": "5vapz4tLabSKe1BwvHjyfCfkzdW31Qd412FrKcyxvrv3WC7jZDVqQPgBcvJmM8PnYhdVzgpCFV3HNdtYFfAkG4k3",
  "key22": "2zV7m7QJxWbJdc1puwKcSbdAyHmsr2wBebdhhCLbYosz1rUgKS3sJfWq2oRZMBgYrzzUAwjN3oHxy3rABpv72CKa",
  "key23": "4v6xVzJhKaWpWYUEnPkyBxN6WSi4Zx1UjyuCSvxSwV4HHVNuV3evuRbVaNnMcuVzN92DzJp4gr5GY84zynMe5TyU",
  "key24": "5CVoH1zzaNh7wBsRZu96HHxAzqfToVsYZCAn8eYVB3xC7d22Kuz3gsSTS7zcs4VrMqgM5YaNF8TNpTsvqHq4hNF3",
  "key25": "4TBguS46uzQKn3Rmi3QjjA1cCeEhPnR2tkVuk92uA9MHFqvxEtAgzbAwsENnBQ2N1K7vrekYCYZbMatpPeKqZYoy"
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
