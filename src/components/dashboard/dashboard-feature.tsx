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
    "3KooqdJigbmgKaYGkUcjAxaUFj3pQo1oEGuUSssWgHdjf4dp4S5bNSRV5itFxZEsXtsdg1Sg8LC9EHcjJJx3hwfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jc8zo2DGdPBwidXv3wehMrfeuTac1M5Aysgpkwrwfh7gdAvgAa3iMSBKgpaWiUfXPX1TL3kCs68BbCC8eC4M3vp",
  "key1": "43ymNBEnsg3vYUAVUbmJawNPQb4xnjjrPSCnSYTWqjYuvXFZx4Ncjb7EdXwWq2hVWT1ZXVr5vyeQctJ9cXifhKxC",
  "key2": "5DazomZ7GE3KTFJSRR4d31cS6L95mfH86FRUTC6PT4LBidv5Gn345B8Ze6NrtyhkbRj8XydDFRpnAuQmrN69sPD3",
  "key3": "GRHk3BGHRNvkP4pbgiwnzM5zjupAsmmQZXuU4QMqW3hGk6zcdvK3SPuZtNQMcifpHcR2szF4Sbpx7vZSeWXHaec",
  "key4": "4bT27do4Xg9171Nq3SgTckZhDxxb787XRcAQ5yF7KVtZyDmeC5FeDqk2AXeMK4g7MS7jbALKnnT3ZriaQC6dVUia",
  "key5": "64U2vaRcwrhFxAqpMpeQtVbk1TujFtQFdSC7TpdFZv73UPRcygUU2Dw9nmWara3eSeKBrAL2SK8A3FVSatbz7boL",
  "key6": "3DtvRdsJebD7dXDtwdfSw6f2EehVZNV7JpTrizwN4Nt7L5y9G4chdar3m9xE94Nksynu6LeADypVa6fj7xLBZc1y",
  "key7": "4gUNZZfA9CRnEqWEqdhDhELRrBqUdnEhxjeiwsRKP7MMRYQbZVjaLqJb4DcftpwCFQZkuEZ8ZBPDdfWf9Qpop3Jr",
  "key8": "62pQibgoE9KmTqfcUT884bTUYdrAGHxPoChTsiUMqXZGuQjKSinYxqqfkxivFEaxSxmAzQMwqZTnEZef2NLjte27",
  "key9": "57yXqSo7ANGutongQrETxqJEsWqgMmA1Ts9782B2HRjygERHNm4PvBmEcJNvu14BfqqMkgR5kypRkxaY6WZSTKaX",
  "key10": "3BhDGTzfJZMQ8MMAW7LURyhbajEGJP1i2Rrc5SH7fR4KzvT5sDLP1zC4rCijTeQ4dVBuKADGxqGbjMVpGe3cri1z",
  "key11": "3Uy6cmzZCGRavdtSoV5qmEYSCWfvTPFxHWhCvDigd2LwtLo8QpHPqo8vd4GXSHgNbhEQS8hNefA5FWabGScEs3Ta",
  "key12": "46RNWpMj4GPnminZbwCgQVkpPw92UU4YdPd4t36KVUcXEFiZPXnC769hTvSVsWM9uKMcfinLMTivwEYwnbdHNiUh",
  "key13": "5e9uoteqFxJRxWvLkyJuiWKUM9DFc5AFC5hbLLZGFmMzCEykrxaKXNtgEdVWmAyZDBsCzx7u9AjSRh6ZSms7wzTH",
  "key14": "3gvhLWg6wXYzxfWEn1JeLo4oKpvLCpHKbc6LNVMxtHwqxUyDNjwTZDWmcB1hfJn8Ej9HDG7Cywk2rrXbHktUfnB8",
  "key15": "5RR3jf33L7phPgyTLZGfzdxSGBP72gBQLuCvkZ7gZdZtKCKewVkkbkvXf2rS5cvPQfhA3y6sywVB18ow7pTGo9rz",
  "key16": "4yh1gcRbPr2X9WN2HoEF4x5Qh7W5QzAYWNdNPqCVzcxqP1jtkw4CHNq6WPd7zGP4zEy4jPZpmuLNNYNdsihroJFR",
  "key17": "2s5zAb4yPhhYJmwErJnuJrsBjDDcCZ1L3oHQWyDHzXkNfEgeXwNvsi7v8rr4dAE68QL5hUB3HTLjnCQLmZS9Ph5j",
  "key18": "3Hf9vpkHdSsqpZ7RD52xdBCfuYZn7PHR3KYSjf3hXRSuEyFemYHr7cBDQzx4LDLLHMELpyEaf1mXscjvFMVCfXuS",
  "key19": "2NALZeR7EbaNzFa4gUPqN6r89mGjrgdRcZQPZ7vcAhnV8YqaxXmH9VxkUZpGe2Cp6Gct5XRqzRaLnzpxL227GTyA",
  "key20": "pVpNcYm7n5sm8pAhDauCFaMF6Lz6Qt54Sf7nu5hJGYQzqqwRiNkmi2A4HuDFxThiiF1s4fbF2RkzmayM5TLZpos",
  "key21": "TK7y3PrWobwM676ZnvwL4CS8t7vp7NvCzd3PffkGLqGG7HvenA6QAp5Lm7XXn6TdaNJ2wFRqbLKM1YBJDHFFdUG",
  "key22": "ovkycgqg2AbQUk6Jzs9F4AJg2zdFLia7Dn3vBHYkKyrSoYcLsjbfVk89dWZ78vCJrPvjjkErFdEyiAttYp7yhtu",
  "key23": "2SNiMiaHsL4WjBu3xrto87jD4h3T7JobXajYnkvkYLok32vziMoodmTcr6sf37nfgfg8HTtZeeD2Qd7aSoYzJYye",
  "key24": "3q5vr6Bj6dMoftvQLzFnDYpg4QcBbNWaCaamYaLTyjY6CgpEth9gMSzjnE7KmzqbYpxMNXHLYirwa8g68a8sBzHX",
  "key25": "2o6g9maijGzLVtc4CVZcVW6FE4uCztWayyT6UxKJPjTfNR35RuWJ5TNh9FbGHtNGztDUb48j5QN8XA1hsy6MD2Sy",
  "key26": "5khh8LA7K6i7fXhpfkK5GmVHTt9a3rM5eU8wndx5c62cgxTSjCeB2MVfeFZm1i3QWXhsnHTaQfP4BAttNVoj9mV9",
  "key27": "29SyE8hXsT4buhz1rFm58q1mpiNz5Fx9fvYHXigdRFaATznkGJ8ZRdkmR2ZUQujQjX3P2S1fNUjeydiJAmvsiJRf",
  "key28": "5STu8Dvce4DsfdqRFKtQf8Ynhs6q6qENLzh6u45CM5WdZoi7VvFLbytk4UPXZEQKddpvco3kqkXqpUwbq2wob6SP",
  "key29": "5CShzKkNPtEHtvraKQ1bQS9xtrgsgEL1m33vbDbdJfba4K85gkoRKphXznRj7FxzJ94EwuxoGL3uFDn3dP2CdeKP",
  "key30": "5mJMwgcSA85LCx48dyqXBEbQWtXeDxkgiU9zg58JE5X5sPcHVRmPbiXoQT3kDwWwWfvUPhNzFYbfXAvZn7XrMycg",
  "key31": "4VNARwNHXaE2G1gSJpP6X7qys7kNE9fobXRSXYjCtPx3pTx9FgAaddhWWnhHUcVMexKcXyB5NygCkQxLgf9EdcR9",
  "key32": "XtHmoRUmArRbiicpAh8wG1dAycvNJ23obgyYwhHmeCMZ52v4jB6jWBcC6HoCurJpMdsy4AdXFUfCGz847JMGwa7",
  "key33": "5nm4CT9rpWxiNb6GuZXNP8rqLa5rtj4EnFc3eKQynZcTU5zfEpts6iVYbXAnZ91CA7FdLupf6LdWjVpzfW33nZY3",
  "key34": "5f7XHbedG8AdZ3kECAQrBwneYYCjb4pLqsYWzYgW6fvvXQmt57xWwagX2p7MzKsra2sX24LLxMxgrv818BErLGhE",
  "key35": "a1KfmuZi3xhedSUhnpFwJzLDuF3bteBCZTvQCXoGeEMCUXNp2akZA4NMGsppcDoU1Di5cm6Aa3ibMhLRXVgfKH3"
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
