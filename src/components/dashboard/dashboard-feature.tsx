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
    "FMPe3zpJhYo7eBbJHXyXZAwHwJBG5jsgtLqPfs2C917wMmRd8Xh44KD8D7Dw6sH8F9EPkE2uNXwGjTcrnv8L55z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oBUVEoXYtKC7P54pAhk8c28FQAA678UmBBDuykuiPjv24AxJF4HR1PTjNZ3occfwBDELDPycjDBKowopY7qxgLm",
  "key1": "cjo5Z8i1GhYVXeaU9wUtg2h8k6hgnJAGDTye5tGzkCVUu6qms34sVk9Bt4YFiX9RWbDAGsCDP8LM4FGESQbNzXJ",
  "key2": "57vEQazMFQarwn6BePCj295EZLVF8aok3iEEm2nBF2Q3xvKsyrveivMUK86tejGevUpYAJQUsXNVcbPdPpB4mvdp",
  "key3": "n9drAc6ku5HYJjLoGybbtS8vnKXdM14NNwwKCEQX5iRg9cANKc8WFZgbfYyxUssXhPTabnyEX8sW6PvuC8SQmog",
  "key4": "4Bb5NYCUTgrJh8QRSJu71iRh7pFr6or3r2sxgB2gAv3RF7qqvd2ZFotiv9ke9PdRQpeiJ1svFw7VbtMsT9Bmd1ar",
  "key5": "3R3AjJfcZAKbnYPX5ipCDoigBoeaVKe2txQC1wTxTD6YADWC5Kifh12rqNoswVZtyLAuH3nZZmW3ARijP2PJU9F",
  "key6": "pQsgZb1UQQPSDSELCmYRESqs9zYLvAbPFHDfT31R6GfDwYYXMJUQ8ayaEowypRVPrgVKixLKhgKQZwqFDRQtFAF",
  "key7": "3MV6pS4Mcwn9yWwVjZiMq6SXA3qY8w1TSL6trt3YGYSmJYpVWf98Nd1r7BPGmVtyzpK4nNZRMWPWkXksrY7oBcBD",
  "key8": "4sBKAXKYrsoq18eZBAYhZNk5mv3Fj4ymayCWYKM28BX2D1HpN3zt9qUNDmJqwMDTnx5kPss7xHCBGq89bKCxpbb8",
  "key9": "4vzd7zUg2GPuBJENfYVSkxrqQ4Lew6VH8BCD3g2PizmgJT59rBBqatcjg4X9LZ3SkorKRFJUVgaXu39RS5df73sg",
  "key10": "3iHtYXqPXBF67YL43g5HnHE2ovA5MjHKNwVjEKGzg3DHQAo2YHaVyRZ82W9WXmbC3irunqFJ7ERBVJyTU5gVNK6K",
  "key11": "3nv3vB7SLtXBhLniuSWxjQ6LmEqyc62N3LgF3SjCVfZ7HG6k18hprq89CmMZPeD9aFvccGee3nnJQ1Yh5DcB7Aqj",
  "key12": "q3dnKj8MUbvQQVf8dVuvouaJiRFZamAnrg47Dongy9NGaUW6jD9yuJSPpx2oJ1nFTWkdEzxY519tUBXazcdEYXx",
  "key13": "5bAT9MDbQrbeirksJQE4ffj4izZqUPioLKAe7PfN6nCD5DGShfvE7tmCQ3bdaTLebncH3ibEaAKCXroaVpfN1WVT",
  "key14": "xkzDLvqxPjx8nNX59uBiSXUNsMvL5mvf8yyySnDUJhKeATsPYWMGfhmge3V8rr6zA5GgJ95YbbGYtP6QgvMxTxY",
  "key15": "36JG1YEA5Fm1M5FrWL3RW1T2UbeUSmALuUzK1FNZvEzKovtNHzMfpGBxnP6LYaay7sXGUmmzBA83EZZL59mKwuiE",
  "key16": "3tPiDTxmMSenr3u9kPtu3jk7vbt1ZvMCXwy4cDzvrCLLBwh3rafyy3FXSNjfuyLRaUCsB7EWHXKZKWXWnEx4Tfev",
  "key17": "2xuYZzLo3JStK5D7PniCN9qrbmPTr9KC6dA1wa5WM49tzYghXnUSXZSxeBn6uVhSsg9vBqxPT5rHYbgxqeKzoPGo",
  "key18": "5oscq8gm46fXXwFNsPAB5Vt2gWcfbYAP2zjqUBwbZbNxTPHT1tQa8gCFnzLyndqgUzYCNJ23mrU57t6gVX5Wx2G2",
  "key19": "3Q2L4zHTYi44GeaCWGpA6matrEUxByRp4pUfRCgBy53R8oswxn3cWqC4kT2HdQr8Bbtf8ct3iyPadGZS652wGJpf",
  "key20": "XgsHuAHvxMEtXafcJkosW6PFQXtTzZBxDcgzUjrctobpxmChV1eWcV4TMkT4DoncwXSJgSi53R5xPW75ozX1NU2",
  "key21": "4XUbuEZMNre2wrwBBiUy72UdEgqaaq8RoE4VbnANrNfDSLWUx3w1yAjAaPCUkGUMwBKKC3MymHgAYjRX4kpVHDsN",
  "key22": "2aAps8EaQWtuqKqabmRNCHpx3NTZygS1wEQLTr4iJ7pYktPuZRDnpbC3NzsSrXS2AegpBUcvC6V2o3X5KD2bUefb",
  "key23": "tY8AxexjPQdSs6JVwDD9KmmDN6umsrwRoM98gYzJBVbeHYrAzCL7sq6vSEKZZapuR3WieTtmDH1Qu9PqXnsx7Xa",
  "key24": "4spze7zFXNLEoGZpfvgvJTaZCxXB7GB5Fioorj99qbg5bmTYUohwR1q4TPVcUYb1EkXTEZsiGe24hVkLdLnx93LU",
  "key25": "5RVaZpzyngJj3TWEik6n7Apo1R7Vw88dRyKT2HM5n2Z7jjNxGo9CQ8gozZwVbJ6ZSrNwRpCXd2aCut6GjEuoC2Y"
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
