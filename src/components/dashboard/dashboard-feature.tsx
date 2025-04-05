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
    "3Aoj1MakrGFnW9gdy7Y2oiN21sLkL5fvKv5Fc71G3rncgQ3qu5XPt4pabw2KSApkAqn21cfp3Awq9CLw91jTETMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AUNNyChgcbzPhsTZbeYon57vSUcGM8JDGDUF9b1KtZtEwYcJbzs3eFmZcNGdqj6MtraQME2SSLeeU5o2q3Sg497",
  "key1": "HUgNRxhUspoYfsArfvTw9dEzhbQPUNZYa6qXN5rvJEWGv6mJrMyfr9rzbK14Rrv5NpMg5pHH8mWuRF2WbScNYDP",
  "key2": "248DB8TMbPcRBRn3dvZH6bhaWq2faorv7cVZJDvVsbqGjQUup2nBSx3fuXXGQAQN9NUhLFe4ADWFUgHnrHCmGQqH",
  "key3": "J3JDiv8o7dD3Q3Fr9L2S1EmbSzSPD91jcCH4dCJnFnfqJLUXc7BybokeGd2CzaxyaahswsiSRigxgruGh4LGDDj",
  "key4": "4iM6KsxGMkhRPEHjiKX8ZVQghqvmqDHC6U9KSMz4muQoPb4zpgzyjanxFgMzmFMPuEuoBiR24hBm7sZ9SfdScc4t",
  "key5": "SXZs4pmkWd9oRs2mcYifnJtSnpwnqFZtS3Vnrin9rucRvq8V7gWZLkjrWGFsW2hWYG7bznQF1n7NpoqspydBgQK",
  "key6": "4e5Yb6Ezf3ccNQpAqqBFGkTBedPUMkyoGw1qY5VEk7NcdUDpFh4sejHWN61j3hbdBvqoH6E3W1ymZRdzR6ABAXkH",
  "key7": "2RCzZAPQBMNvrznpVWUybunpMzSa5BGebPgRE7Z1m7bieTHXNHjjDUHsEwGzYnZnvuXEtcpnQRJWLbZvzeQwLahg",
  "key8": "4ofa2Lkgph98pGR8fqxobAUnArokyBFEaynYcX6Lu9n929G3U555pyf87ZKFD4oz9yErDjvJWDgwUQ6Sgs5fFW86",
  "key9": "5FPQNpaCLq9o3TVBDGAJZvGfSj5dMFecndD2BUECUde6ovw6ApuvTHmRHriRbaycY2cgV58KEj9oZKo8utxQq6dk",
  "key10": "2r4XpUBoRrSUGnsYWrQcUfk8ZUS4k6MTQ8SR836nRQGKkHvVPTosW19JrWZN1GW2yvU8q5v61d1PtDZZyUYV1yZo",
  "key11": "58TAHUFCJVsXNFj48aXWuTwa5AagbRHAB1zCt3pY5BXBFwbfQHQcmy6CYC7yAGCKSMDERnXHcFCLWa6PVwLnU99U",
  "key12": "2hhz446mE1LqqZZWCLm2ncEJcUbHbJEgrDne3ihVWVrKbLG4wa68hiSrWHSS4GXB51QhvCvn7gomabw5aNYgUCom",
  "key13": "3g1dCSMa5wSn57sobAvkUjcSGmZKthWyh76rB3BFZ2YeZbYYJjicdry8tcrmfxkx8XSuNiSCzsEpsjUGRNYDZpXM",
  "key14": "sxArYqnu15Stn2jigXwFNEPt9FGug5TNBMW5XNeqnyZyxbLVWUYpxp9Gbas25QweGkaH6ud4J7b5eBTEZMhQ71f",
  "key15": "2EPAuHR944UK2d9nhfZdyo3g1eCbvsSTvMBKj38WeXtHbikqLeh8DhEQyDFGoe1gU62P2MuHWtg99TC8uJwmKzah",
  "key16": "26dLjBfTsFinZmN28zUQdqjRSLRv73QmzybMKCsPVsx94D2S8myi4nBre4jAG4frxtvvQVNPjeoANfArTKGa9Fkc",
  "key17": "2mShQtCnjeAaPaVnotBAivDGuqtdZ97oLh6dqUyVTNmSYhC1nCwYCVB3rW2Vb4Az33LtEDwSXT19gt2N4xogt1Ms",
  "key18": "5fMXuKqmgpCnX6i9exiKdfp9jzKUUWsbLpu3npZLVbj3sQVMyBwNJXVnzquGDg6j3B8bdeCyusygJkZiWQDBCxgT",
  "key19": "2eo2ja12KJinfuAwyvasMdFzXC8fv6p4Ws8xjJLf4bwKVqFvUCVqxFoL8yJGUnSZMd9sWvoXzHe2k3cqB6xjUPrF",
  "key20": "5fiqDWBB9m1aerpLV2WYjwVq4RnrZ31LJZas2WX6aLvUsV7VCixUjkkGSFHcZGQxESSabi3zde2bxCLgua8SjxUg",
  "key21": "2amx4i5fib7KsJfkX3zf4dTR7y6nYqFeLfV4QFzAYFW918Su3u21q2gWqAvZVoP43LPj5NbbfGibggrzHW5wkaYS",
  "key22": "24EY5cjePpZL1UpfmdEjYtKyWHqef6bSvW1t2ZCZsiw42M6gYT1q4WuB3GWp7av43VjzK3pXh3f6QctG5kKLs3tZ",
  "key23": "5enGNpYjbMtTUkEVvENtdF241LeCpFuzjFeZgCnJqTdgHq4Y3sGQB9s1L6A5sYRERsjDQWDsgegkCAY9FBB2Ab14",
  "key24": "hDKq21b3HjmphgCsV4e8Ltd8jzVHxwv2Ltyqs4hnehQV9PgtZfcWAhrvfXdoCtzPhuqf4cfDxu9BUcAgCj3dsHC",
  "key25": "7f75Pa4JWjJpiQB49AFUNJzjRdNGdiAoPamB7zieVG7asch5AMgD46EW6xBzz99SdTtXRkTWnEYdGMYJVzroXi3",
  "key26": "3Ti5ETDBp8LkQJhwAyQA49swKAPpGEg2U7X8SpMLJcfCTVMbSJvcuDAwk6M9GLCRq4cAC1B4fvMvrdkXhh81nhtK",
  "key27": "4bxtVdAgq7Hy2tom1ZDUNFDbVYZqg7ozdiCdFekAU4UQLe3kjRhNBzuTiHmhQgJVoxug2f2Vp6mC55PBUGYi7Qtq",
  "key28": "raD4qRAqwjS92geFudyzct3bkKeXnt63t1penxj9e1aoMw6ZXQS4ZZj1N8N8LEjpvVFR4JfsJRcyibqj95Vx6cy",
  "key29": "36qbyichvXdJxadsdxAHyz5hUzjsMobj2yS1oqQMPLEyQZw7tkSXXkAY6uNN98VPuP9cGgz98sjmk1Yn5iPK1BFM"
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
