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
    "yrhQWVWBHUQ3py2ohpmSLusDxV95GGFYae7rGbE5BbTZja3PLVpB4gNJEvRHyQn5EWTpopfPS3pQtBQmpbGVFKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fx1n4QCNmpsxp2PAz6MzXHrusmjvMM5cGpjojq3YrAkzo5PXYmVd2Mk62S327fVVz2Mju39rx55dASHFA5dR1J5",
  "key1": "5zkdpHLHvyEKdXPphpg1trQPzDdSRp7SqgQCvTBmR27a3H1iND66Wuvzisj2PJZdEYFMbYNWdqQ2AcDf9p3AaQpa",
  "key2": "ENs93YbnbqZgHBPh4rNLTLsPsxeBPUZXeKQswi4V9kj85bSmqUqF7NeejwiRFH38CPsLSUdRqNxqzyHAS1D5mgL",
  "key3": "3JMBvLRKHnTgZBSi9AfeBM8ubsBagAvfjEuo9k9yByTZpgzhSSc7Uq7JyGQHYG6Hi5cVXf2AQRVVYFCnZPEqYk3W",
  "key4": "7BeNVenvc2PK1tHvDp6JeucZDVcWgvWJ8DPrYNbUohcdkCcmx1sbtvrDtHxgxbjfNgzeRS67Fjz9Fi6EwWiKigk",
  "key5": "uqANkE4idLKiwRvWcCiDNvgeEbMHc4VzGdiZpht3fSMvGxid4oNzTagQLvXJdXHBBfcPHXUMWhGu67ZqhU5kYVM",
  "key6": "221fso6DzDU6xsnvMrwJ6ZgL7Mj4KH6hJK7gNtAKf4GzWCu64vpeWQ1Mk4yeqixWDC9wRYNMC4XRxoP48KWhcQdm",
  "key7": "4FVMkoSP7mk2TAewdHeEbSbT6YqohPos7UBhNtsAfkfgsTTY245aBhaAqTWn3mq6gyMf38gfVAdF1GzSd8eq9U8e",
  "key8": "3TTQhB1wqH5Dv3jy13mQt9MqgNdu192NTLQSHVLyVgw1f6uoVwxkGxagALQUypNgYK7TfGbZDT51gw7ZVkpsjiy7",
  "key9": "tHWQvUVgV4ruaFdKaF4CBN1zyxPuN7v4qy9DXnj5E7bUGHLd8gVGjMh6xpFn1x2CG9RMssCgFLRyE1KyhfJtdoa",
  "key10": "2AEX9ZuKNLX36GDStaFSeRAtpax6B8uRotPGkFfEpPgKDyP9CmnLhUWCrMi3fHtDLrz7CdL3oWyPaHreK59F8fLN",
  "key11": "2Cr4YtjWUgqx9Qd4JN2JrA1R1Uff8iiuDyH6eUKT2FcP7dyQMoGiVABcS6hvDPbfoPYJXmHXKopbP9cKQE5PhGRo",
  "key12": "VqyKcAXr9XTqDT9WPacuwJB2aQkKGHHFfhgvQazQsAAw75ZbMUZVdHDUaLApLwxmwDiBszbK8NR8JYX8rcYLxtR",
  "key13": "5gyNFfmZ31XTk5XHwpULqpPSGijw92PDChUa5e28oyr1V4MwVnYyfDBQ2cZQhkWGxR5yMYmM9fGfgeVwSRtdetrX",
  "key14": "58Mzz8hhABbwrFHXhYs9isnXDfWpz5Epk1skYEEPAQpMB7WEpbSxHDwevDP3UXvZydq2ypvhrvHFFBqfBQAmRjTK",
  "key15": "2k7TobycXegCxRsSzaaM2wDzkz4XirxjjpdufZL9tZLtZGFSWehurX4eBLQ8az1hfdK3PFZjvAUA1TFg7xgmTqkD",
  "key16": "4Ln6MutW5w5qYX6b5aKKjgmE5MU3RWZUWZd8bmFd36tBk5eKr9wvPLHubrFXByBmVLknqRnBdPqfQshcry1A56Uk",
  "key17": "57jBHXpyYTUs4qnwgxftruGHcxhZVyg7CiCvQi6vEkGjVbEYom2qUeVkprW74y5YF8V9WHHU8qyTGJz2pofB64un",
  "key18": "2G1BcTLE2epPtSPF2FWLAkFvYusAriEDYybp1EGn3owtyf2TyQPbapxNW2rGFf8Jm6gqp9RtFbzenciGaHnfWhcd",
  "key19": "3yMJbe9sRYA45fsfgi3FY4A3LWcaa8VDdTsPhYp2Gz4mTYkAwAYDzdf3PoYRUTuptrEzGwt6tsDAG1MAZNE8ixuG",
  "key20": "8vuhbgcuLUJ9ir3nmfYLW7PDqyh2yVtPiUE8AoeMNXt5Em6soayCSBQYbpmnzZGSXAafRY9dBgZjM3QUeVZcWRK",
  "key21": "5FG6azARxrqNX38jT4k6vz3d2oLJ1w4LBSau7CMRAxbfSiMCBSgDzGeZ9ZjAzd3eAdz9SisYgwRq4gckoHHAALuX",
  "key22": "4AQeAH7r8RcFSBjKtvjh65TVymJm1XmTJakPEqbMsq9uZq4LaBYtzRRvTfXXtv9CWA3itQEZHK8M5rTtuRSoPCuD",
  "key23": "5sharH4xXr5zktsoKUKzWtuShNyHAxRpvSZwxKcFoY8UuLdsNi1SsafrpqecGVHa1MY5TEHQ9piK4vjQTs5ueswv",
  "key24": "3xcTA9osr8otZmdC5x6ctfnc9kuqn9KhJ7amsBJQ5VQDY5JYR6gS9Qa75a3U6xrPiAy9HdYUpYbprTav7rQahAvG",
  "key25": "4ircyChxfBimixgG52XsREDJF6F4a8JCmnYCw9f72v6q5hGh2XC9FEcQhCxssWxtVyhpnTVd34bouQAeKY9CiLQV",
  "key26": "4rLnx4F25U1DxUSC2bHvfFk7KurHA62CdFBbsgeDKQNjQQAZBBzfPJoEPxKu5renZb1krZv745jzkLQELXSukLEs",
  "key27": "2mXyFUpN8CWcHQqPbyLFbRVRHVgB7ajZcW51cXXSsDvP7uXHnfWGE4ucfzJzsSUA4buLZXjrJBEp7pjYbBsecB4h",
  "key28": "46XtmQHN9BUZ3e3Dh7V3R1HSqQvUPax3MAU2zgRHrxFxYuwCQLSRjZmW77u3iLNZjhE1fxc68cFXmJccmdFdtexS"
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
