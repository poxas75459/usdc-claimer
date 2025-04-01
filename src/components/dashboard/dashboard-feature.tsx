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
    "4hYkQ3ngZgAEBcgmRJYav7bBgMRRhhy37bsbHiRkopnofxQGajYbghEx668L8s1aXvzqR1FoPjADopiVJHMmDX9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jTzLzwQcna67tFAPo3ENwZLc35RGmhLMWNMRvt1yrZidZdktRMQsqnp6RpStjWz6dXwfJL8e7oSf8DQmUeTa1sN",
  "key1": "3DuQpJ995zPCaJuzR3panDWWT2Mf7mHyiayX6egJ3LtqrZqLQoZ3vShL3gZc79uBcpmMUriWtaY8VCLNAwH4M7QX",
  "key2": "4jpwTmBHh3H31KhD1b6Aga2p7aSuyj5aUoLjzsmJp1yat3WF5sb8nfKx5dsvJ67dmEDXjjU8WAEn1r43NJXtzXZs",
  "key3": "4rRtXsXnLsfi53LjkdMfhoYUFqFkyidnei3F2XVtHou6JXCBLFKkHHUhUy5DkkPYLJdspXa2wM8DnT6VsJVzbWjg",
  "key4": "5SgHYNSEPMRKXEK6Gmm1hbmidFeS9GhJpqCEGLJtWMiSaocvtPf6a1Fm8qHt4uUkWc4Vz5a76fPXkzMYn1CPhNjG",
  "key5": "4R7vYiahJ8eJ9tHsKytSwmtw6ThGna5b4MC8xEZBDsMBtTy28RBnc3UPSA2oYKVeFjK5WRdQwBGWd6At3CQxQcVg",
  "key6": "4EAxypdrLnDa4TTPX3Xp62WMYPtmAk5HBfs6jL4HPDZUTD2c8G9EMvZ66oQLptww6embjtKX4UGzo3t2KJEdPDCC",
  "key7": "UxfGdnXBN3KNWBg5CQNGjVS2JAzDfg2QzyzSYpGWygqWPKEpSMfEzGatAJYpzKjXa27PK4RudU8ipNgsUrspZQs",
  "key8": "25xAFV9D6Aid5veYfKubk6U4FmZ9vsRWvb5QKkwpj8GmRWNNg6ZuhndE9QQ4YuHsiLKRdC5bx4WdP2Mf3kknNTQC",
  "key9": "3QiFJSSDq3iB8qMciyQvn3eKqRQTXYtGTqtyDirk1NzYFnnuSbDvVq268bStWsJuMikdTCkiKzsRvkRG6jFwAYpo",
  "key10": "CsauLRoNLc69hU16TjvSbZcixM1RbAD1gvg3WFf7jEhuMhDQPso3y3nTd8GUYPqNxikfEUMVtxfBiK8n9ubiJHW",
  "key11": "4SMpmRzM8JHozCbh2FU2W8Byo369g1bL9gb7brkd3rKgmm4oK1k7chpUUqF26cAsdnRWuZvYFMZMKjBG3dt5rHG2",
  "key12": "4ZgfgN3qKo3rXgNmFBBoXLCdn9DmqQwFUpDppbzeQuAzfif3qV3UuiB3vQQHvi5pDRHNoMjYuh95SKuWPF3Q8Y2j",
  "key13": "J5m2zLjLQagBYrunSHMB2G8G76oWo8zak8E1Lt2qcAQ6kKCdjeVmsgGT1CWGH3RfeXpnarQ6NKgYBKNKEAhn7Zd",
  "key14": "2nSk7zCpRXeQ4tBrZef2uxamkPZC8Nmjfjp3fvAYcsRy1Q2hRtKynxM8QxE7n5a6sX1pXf45c48wjm2QjL1Zz2sm",
  "key15": "2dPNbG1FB37LTRxJr4K33jm8xVu7mdm2Nz1w7VFotLyFNc9iAMdMnEE4esJxKVD7yLf7Uw9pq3N7eQspzDVva3tr",
  "key16": "2gZv93UYaD5ijLdgdUUDWtgoBkAx6Zt8VscmqrpnuuuTqW4sVBLdQG6U7RkR2avfaZAKwTPSDan7HMQdNRW2RAYs",
  "key17": "3xCvECrnSEafhZB7gbTfW3uf6oqVp4LrHSS8TTiyRwrpV34Xzg5xbjVfzPQCSNs42LJtsveEA6MmXrstAoAYVoG1",
  "key18": "642yc6PhcAtCAesMypsCnvyFwjQz3rNWsm7gVBFvVr5WkPQmWm39jwtb9aPrir9imoQ78hRmbzDU5X9EeUSRRZ7E",
  "key19": "2Mi8dVtJscaXymKPBRVLkkUVeo2zGxBX2rBJnyg9NAqBUmxDYJBoFMPAYPBvhRTEUqNn1AqJ4WGYscEsLmX2XVJQ",
  "key20": "4REe3rCifv7nHVRaRTfB8cpc8zCXQLjjinkebhuE7VCjfBBg1NWoWpaCFy9n4phTBDRr4XAWeKWa85TsjBEN2x4p",
  "key21": "5vNcu4thHcr74stZAN4Vp867gRyh2juqRtjahMkYyPJsoyyfoc8ofB81kV1TD6Qu8brGhaamhUFP5bxTFtfu2vWK",
  "key22": "4ApdPj2LaSy96CDJEiAvYgJvN6oFdxZkxkMaDen4kSHxRyAbxzd4ZZjPnGpzt7XwHmieonGwDtWrYqyhwrAF4C4h",
  "key23": "2ntbT8zdBgDYuZkrvf12hqFgndGujKf8itaPfUCftJWP8PM4Hme4wjnbkBzLoqtsLsAXRATnSRYE9Hdqe3WR3Z4k",
  "key24": "36gNt2nx7MJbtY6fPB9SbhJoyB15Rdywo5AQUKzs6YbVLRQ8KKVBEzJAPNc5brjLQ2n6ioqL6cRqhjmuR52j1NYa",
  "key25": "3g6ABiHwZNHqQ1ohgs6LNYoDnXwo5hAQQKcYCqTYacLu28ok2HXVFZ9FPE859ZRXeDv4XrA1RB1sffeQ8WWtwBSk",
  "key26": "TDi8iWPbBJZt4rA7xGeMzHiZ5qL5uSBqY5NwWvnQsRJ4HpYRjvbgCCZCiSkE6oDMcxEU73oFFp8SQGQHdNUBL1m",
  "key27": "2WMgikZBwPKH3TbDYHyK1cVMFVg7vM3XR3CauiBpbM8ZzTYieeRzBaHyfHuiaY13Q674weXq1W4ou9YUfXswrSCe",
  "key28": "5VBh8GyCRGzW95Y649yTfvfSgD5P3hkpH8XBFAWCmimr34AdeCUZHaQpY7bcEUtK9dzUPL7zoMEBxpSgm8gueF2H",
  "key29": "5dS93m97XttDbWJS9LnziHPbHw69zT9796qEHEJ9YxLWHvZdaXpyZfYqZbjXAdfyaPaQoP8Q9LMC73Zx7HHtzdEU"
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
