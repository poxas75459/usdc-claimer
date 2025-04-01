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
    "4P6MgH9GerrhWSQkTqPL4DP9EzyrJBwv967hasAog3XYodae8QeWLueVqhj3enKc4CUXjL6EvkJXv7URsSLGKb3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ijAeybi9F6vigw7bKcPUYugPLRoZtJXZHc93ziH65qQmCCLnmSWiPbEi9ikNoNBZp3oSKifdCPKLezh1JjL83mU",
  "key1": "2ahaBJQ1UUR2qobsBo4L36Hn2ftFWz4iLYpZr8NCRXXSMBVeM85sdQ8PPpdWcmFfS8xKBZuf2zv4bgjBwz4K6b6C",
  "key2": "5Q3Jr9a8jZ4vcQVWvtunN3qpQLB3XUXZ4KVAAfEckXyCDNcnKk5KpqdExPRVcEcgMtfHtouA7KbECfHLYGHgqXze",
  "key3": "49fU6yDpwLGPL5YaBhbGRvV5kRjPME92o2Ch195GL7wPpK6sv42MLMHrkujND3ENEDB2vwu3yH1rmvDi9uUA6Hq4",
  "key4": "5udiATgcBGD29L2VjDiMR4wvrGcXwoLwDnpVweRZbjCZFpgHMg1QcmuX3GzK8vqvwB9ErmrsXe94vernDutfrazW",
  "key5": "5Q68B1JDN4aSoz7mSeQS6trA2JWsRRPn5KdxLRZsoqCG22GHaQtHcLKM2bHr8osdgXjdAbfjruf48dh1FVYLYkKi",
  "key6": "3Pfzoq471JYwBBZyfqGKu4wPb4yaAQ93EKd5cKN5MCkSPWyN3yjSrSjECEipMgyBh5UqddbVwGEB8DqYhP1v2nk1",
  "key7": "ZnFqrgp6dkwbyJE587rwZskapKVUqvYbLaY37KpL62YUscLU1NFQ5BrdkC462rrxGNaCqspJ3H7QbXSznTJS8oo",
  "key8": "34ZJri6cS9VRRD93iVsuws1kSCG98b1qpvLANdvKaegvzxCM1A5DMRdBKvqCa4D7CA8d9PfH9juq689eBVhZtRsd",
  "key9": "3xWw5QQHrLJw166mvHpofC8y2SW5m5KaUiuhLh2C4MXsQ8cCfjfXpDn4BQ5KrdHZaKCJUEQjCmMCxHRp49akyBhc",
  "key10": "5txCiKPap4TJk888aB5S8H4XZA3zQXdUoMsaX1R5gwZwttTuh5oRjx72AXbDBjNMQevMszsHhLiPPDDtSCGYKrWX",
  "key11": "soMbyp6WrAxpaianCma8q3qfMgAPXRyk7JfmBGhpt379ywHbusHWmiqxBDA4xsfqLzNPWkFfLbayU2KYkxKYDto",
  "key12": "RXufQRVMeCyR5m21QzYXczvoQXj56gD2GkufnyRSvo8RiZJBHZEPp5gN398wD1vd1W5YwCt7PoY86jzHYdwumnt",
  "key13": "B2LBauYXZ5iAWjqvzoHBP8t1rw7wvoWMBu2f7L4RX8Qmm4i3yeFUjLDidX7LmaQvACXBjCiPoQyfJkY2mBXPEvp",
  "key14": "2DQPMVHTBUsrTDNpttjpXXgAJqQLpYacFEYu4mNJyvu4prk19VA3SENqckCHCYben2TGV7WsUnJBLHoC8CWUEFDC",
  "key15": "61CGd57isocG9F2hvBefcQAyhX7741QxLhrvANGN6K9uPBjXUm75ijTxYExsv8Wu2Kb1dHSTGnywx772YTeQCU73",
  "key16": "3Ywo9CsMe3Hgr9mYmw9SurEUKLg3UB1KN9SXr9wbVGnKon2cyg5QWCBJdKh187qGr2uhq5kyFopcjCK3gpFJ2dSw",
  "key17": "KFSmEm8oHrGK9wDtjmWTL1i5W74Viibo42bSKsTCDbzZNUwLpJaAszxbfLYzfDEFeqf3CvSxpuD62ebkRDpk6a8",
  "key18": "3oDVAu3JDUu9U19gD7fMRduL2YgYUz4ZPx7avxZqjzXnDw6tkWcC56tVjTYKVWSv2ZGpUKta9tA1RNpRCTnf4Mfw",
  "key19": "VSSxCNEmKATb6tRazof27NwLTZYFQB4fGzGr33q4mB4zDRudfF1uxE3vSfFcrPUemGKagUcXPNnwACHbaVuFuea",
  "key20": "rMTYPG9DtxtdiBCFHPwFYQex8owt2n1ebTLqEQfgai3JA1Aie5SDfTdKhKTQSU7dXofiqBBkKc52S9WyuXHhtKb",
  "key21": "4oorJfFqXrPJh8zk29fLLxqayHj3s94SLo4EWEaHZJxhHZNmwv7ffcQA4aCYhTwL3Qfi3iLMGVrKnHzUSRAdy2f2",
  "key22": "3gP2aURVLSWGnKszNALD9Y2ozLLzNh9cCn6KViZo8APBjsrZvVHeZiWCwrzEWnNYgBivxwN1qxczP9T6VoSnBsih",
  "key23": "37zKmFU4Ud6xRYWQo1Cjf4VcDqScgo3zhwMujbzSTBwfNGshfLjRWnykTECgvqsEDRvxrTpMgxSyAZZs9B8AYDv7",
  "key24": "4UR9PNZ51hZkPCbKjqzxDE7kWngfAraeGnjdEkSSYaLHw1LWjeTDnrQEWbufgEixV5XzCAXhJ5yZDuCCFP9sGSC",
  "key25": "3GxaQraG6MPigB9kgxa3vaoMWZQEWyKsHq5MhiPBUG4fpzNVrcr3QnjMYzcUYvqsdyfeuJa7d8fjYT1o4ArnjcaN",
  "key26": "5zCFos4LtGZXTsavCN5sPgmEwWwZ7T9ENXs4vu6tGQ9FdykDh5rEiHLDjhwXZtfeEcXs4UzQhwQi5QbncEyoKrV7",
  "key27": "4K3YgSsQhb2JnvXco1G9iW6R31pDoLCJJbicKifcdXyuEMuNwXDkNs1qW3iTejGz1YiAdfqAhnxKxn8Q3nAtLihP",
  "key28": "1tZ27uHiVNr3GNXnhCGbXZM9iscAZZRApHR4rhzDZwYTcpgK3ychHuC4rg292JmWzeqRHuM47BjvX9MJVSB31rW",
  "key29": "4ANvJ2EmvMo9yRj39T9UX7QKpw982NEMEFjJUvBYHtcWD3TJ81XdUCWXHaCBjirzLixJ1dfLkCWw6Fd4JrdFvPWC",
  "key30": "2BGWvUViFWje9eCetvj1NEwXsb8aXTxCSRBSXXWabDhERC5kxK2TLH9TRnGEXGYdU7nf83pzuHkXjNynUiXRZUhA",
  "key31": "3DUpiQn4C7ZE3f89Qp9CDrXQE9xtwJ7Q3jjHPNtbnzkQFF61rr3dNKGz2FKqYwNzHHPv5rsytmnfPAWUo4nDtw7F",
  "key32": "63RFZ3vZ5eaubjpKDB2C7XEfdDT9TuyCWqCLUASMqzjj4AX3Hu1xFoxTvayVNuAdEXoaV7BBB3uQS1jLHQDpDzcw",
  "key33": "yZjkjtntQZsV3KhGvCBitm29LwLHULnedz82wFqt62nv6VTDJb7JkB8rJARAa7BruWp45JJQWJ7xbU7iNK5K792",
  "key34": "HPPqhTTVukfBWZU2YJTwf3w1QPJRnC2N9xmU23wiVCH9yCQrNSLyiqnGbiuDrfszS1gZy5k2mf1kH18crzFKLWr",
  "key35": "2Vmc2JvmiKYrSxZwTvM5m6HCSNVJvzsNPd86uMFKcXGgFoSgDzPS1Zr6ALXWkwuNimyAacfzY3rg28S43Pk7UMHD",
  "key36": "2nP6E3ybVFW1VtnAz31qGGQ2HBg7K6zkdRamuNT5L3BU3JANRdnAKoVtY6XMZaXreG4HpAbdgvmPb7z9p4DRUDBg",
  "key37": "29qjNbyb8if4p1ouawNywNhNBpGszvG3tkqA2mMsXpb8HC8CDphjETwL53kJJXpC1KbRrv2HTHXCWXznA6X4LvbW",
  "key38": "248GmspgWLRryASes7onXNaFiyym59vs9ACZXbEV3TkzaKanoJ6nECRyvWTYQfXWz1HQv4qPw41zwGQMvrEXfzqg"
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
