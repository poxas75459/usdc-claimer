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
    "2dkoL1msqBZfMRKSrVevTbf7JRT6jtvYVoVkuNgeskB6AG1oXqm2R4gBgmyuirr1dbveTduFq5pkZHiVARw4yAvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Szevg5scq8V7neYXWrVRSr4QRthDrREjCKQjfyCZJmVaMYUpXDhXnm19e8P5bD1hXGFN5XdVuZVR3ou4HX31zM6",
  "key1": "2mwGpnNoMnN6ov6EiqCsEfBuYbZKqqX21EFp1PQvtNrWwvt78XNPy7CF6ebiZjjCaoxpp7VcU8n7ArgCJhs9S1cy",
  "key2": "62hm4STGEj45ZXn2WuXB5AcTKypACrYcRKWxfXASfDQdXdjkDsH3WygTSUsVoodDnkd87dC9cdSbLZuDYgr99v3p",
  "key3": "5FtCHn9BVAE8sSVXVr791N6KCtNExD1Qx4LaKg2hmFr9sBm4Wm8vHXXXGmrr4xUZEPUekoJERUE56zLKcYrKLYFa",
  "key4": "2rjhLPNbuMMFCS1CscLxgCVxfSGb35RVv1j4e3zQSEEnu6XUdQKXeRtoyNgoLrvZSmZSsNFmeRrRR1Q7oQ8cpdqc",
  "key5": "nf2yP89B6nQEzM2KEJhoPz7wr3ZUDs6jijQptLNMiL6uNzURrJbxcTWEu418JJBu4sjyvNSp8nt54AMH5KtVrE9",
  "key6": "4uwGLEdvV9aE995oLeLfNC9ymhFEqbbNLi9YRVxrNqAZhK7qX8Woc8MZV7ABKc9XRMt4bvcwMqKbnjXHCTQcj3d2",
  "key7": "28DBdQSqjUBmHzHfNxSejeR2CJu8BH379UzwXCyiCA2uZPaFPiAxFEfLD188VYJA6bFngusSxhcJVUPeKD8BYY83",
  "key8": "3c4R7bcDJXpUp8wHhm7maHjeVLHY8oKSUFDG3gYiPxgwJvw7dLxvoGfPwwUrim6X722AAED3Hx9qKVeQYsQ4zDVF",
  "key9": "38pJPwRFZgcDgCZFjPYR6wttN367nkYDygrQ86pWgyKThhFX1PnqQ9jioQKaYxJ8reUHxVJnPqaYHjcGWG2vg2oY",
  "key10": "45XDfEgUw7rTeDUnRevM51ePTpaYJh2Q7cqWXbFS1P3NsvjmSEwco5qiZ86QLK8Ahy6wZUMzixY6Bp2DLYMkpDsg",
  "key11": "2mQinMpzBjTXDkqmTr1Zu4HVKrcLK4rE3oS5yLoJrjpNmX94XD5pWu5seM6Y534uWbpoZpuBeAfAZJu6smECZLdx",
  "key12": "2ngwSD83eMrq4Nk112bDD6jFCWwkX5Vf1AX7ePaN1ytht3RD7usdNLi8qpzVrX5Pqzub7EiKC9QX8rN7r3cemUH4",
  "key13": "5sucE95sxF2eNevijJJiDF3WuP8JHQ4kvpTQ9aFgKiWajybWAe1i6AqGStuWYqGtDig5pkAaXoZTf1okRmTiXkBu",
  "key14": "3cJgAJwhNi6EBjJVKxJBPxKP1URhoXV1s9iSNjHVQVfhbNUxha8bESRgTpY7UFn6xq3RrdezPbRdShPX1RV7gbqi",
  "key15": "3t5Y7AHQqcKrF3n8FFuygCyRgD3be2KPZnLQiNwhMm3Q2DMcqZaN8wzRZyEEaF56ZnMUdNHz3uSeFZQ9tRwnBMpW",
  "key16": "5jP9ecS2RvADJxgDH3yJdywAZdFrnirAGHHJfk7G78LQ26eFT2CfdY6DBkU2GGt96ZMd1otGiTs4G4XZQ4EV69Uf",
  "key17": "4bFVvig667FhrNTB1SMq4WkggWcQCbtVrXQBtGX75Ano89nMSsfbdTpYjeeQ95XzUuvLUnT7sQdgWRo2arYcX6P6",
  "key18": "39RPNYZD5ihPti9wdA1P27x3L9aPiesaJuxUfZZjX21oxWGp8eQiAUozjtpGn4ZDBmrW4ni6mwfz4GJQmZLSWR1X",
  "key19": "5uZWCbYKtGP8EJxTL8pKtvxLdQ5F7Z6WZXC36rGfioPZAXdtRwgFc4sKCoVvoyb6QL3PtPva9ezHq4dMDV2TUinU",
  "key20": "2PMgd23SE3r9tc8CgkH2i7ErpRuzNAr21CEJSUj9LMmyWXLhBPJFwbBxXkYdAujjqyXcFhgF9ZEZY5cHr7xQUWXJ",
  "key21": "4Vjnb55uqhZCvDY7zezP1rcLQi1rPi2vBGVvCQyHbqpobMzVXRousBr8W3KRRLfjcrr6wYTbjXmMqCmf4F5GSbDz",
  "key22": "5F2ce9PU4i4ZAw64ndykvxB88JkPL9jkTrzdecC3T7m49LwKX2CFPUCRFp1ELAhsg7zgKo1Gua52LTSjCjvbXfJ5",
  "key23": "4U8qQ2cc6VNcZxtmgJusSSp7QXs5CQWCMunUReBfoKtdF5BhXzNVEFncqcmNVkfY5eWbKBbgTPyE1K4XNUQEDN9g",
  "key24": "PWZ4VoPtcJtH7s9U9jNa2P5FzzXBDdyQuCKiiFFUbErRWE43PwLr2TG9LVei4gZBq84XJFNh455ucZqkiGD2neh",
  "key25": "127XwhyJbJEZaGghwap7p3AVqYBdK6Rix1rSCZT5dFBwDVormeNbrkSeSTEjPfeSVTZyZAq95NrNXJj9LVNoDwSC",
  "key26": "Y4XKqaVivZfuwUeQXpTdWEMft8KscEuqKBoSaTD472EoFk3RrwyH1jQH7kJxEobMchbjFttTK56Lkx35WaYVb3Q",
  "key27": "2cqXgGXJ6oyUMGF9RS4vyWWvBb7zSNxx2fQxozBe8YmyYw17Di4MdCXy8YDisrwxNX9t7JSy3yuKApFvVhDAffkE",
  "key28": "5cm1z8kEPYoy8h9W2Wck7q7xegLFYJWGbAfKKh7fK3qemKatSnSvV5819fbTPXUdazK8QmjwE1JzSw9UBfnaeqSu",
  "key29": "42hMgqtWmNCHkNtHBQja9vRjBYsbtte57R6Ga4enPTecuprmZ3hR3LbEUSXXtH14Bnt1nexHP5zaBFTweDQFdVEZ",
  "key30": "3BFt8uxoETDVL7TBLUeUtR5MeUBYMChUz8yCKCqoP7fDHs2Eq43vjJV6WrgAvBkxDDNSi5XkBatTpPU5exbwfj4E",
  "key31": "LWy7yfgzcZxof64y6TXFwbfpS3bZLARQpkxw8ZVSwRgXPogq6Bj1hobkZAfNxihMvMUEDfDxvytmcKQ6dEsDqdu",
  "key32": "3V2yR2mK2mKvxvAMcZe3W14MsRqP2hv2K7d968UjUeNxaB8Z2w9jWktUr6QiiNjpt8ZCAbG3cCM7uA1uNrycFrQB",
  "key33": "2udtD7uAzMCc2be5BCXkHiikqtbUHk9Mx95L5xoV4ouBRiPmKs4UMCkYrxkkt3yowT3WM3DxM5tXd7pKWM3Tu9z5",
  "key34": "2pYyVtiFURuo2zk35wt9vdjVJdHpjNEWGiRWUBkNKmap17vSCh9UvSL24yBzLrdacdFwG16BfaW3tWovc8tVVoGk",
  "key35": "5cQSmFKViWh9gMTYxB9jBqVafnCBjY6q5kDJTdDscbyVwoZLxwovduAqAB4gX1Zaoer1pwqZbPW5CDaTg3aB7XVY",
  "key36": "65rtSDFFTD2jjVWucUHJLRDT6qDr1ZN5HEN8XSS5kAGnL229VvR5B8SJBRRkqJdtXN515hpR6x5j4Mf7Ro6QrbJS",
  "key37": "abZRYHB3LitLjSgbLwtakA3KvrayFn44UzD2bTwvyoPhWNAvPQkqCKnebKcmbMRPSASZHHahvPU8DZa7wA2oZUm"
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
