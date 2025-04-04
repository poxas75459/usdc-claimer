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
    "NGjfMDPFQULqNKNemMR9MDSZq7kssF7ZzEzNsodB452W9Jz8dHMdD33VsvvBkhLunKY1nwzA2c6YDdosEV6Kho4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N9vygnHwNY2p7uq3HrJmCV9CmwTjJseJoaUsPuwTLFfrfMt29MiMoTs3QbbSfd4Jp5jPnQKA8NZJhuGBjGf9vFg",
  "key1": "5cMgrm8U5U9ZeCMUoxKsT2g5CTtoRs6uMGLmzL7vcHfN9upsosfsZywioUS2yYoAwcM31XhkXigq7rEu5whHCT82",
  "key2": "51zcMGmUUuBUNBfFGKqAwM4oQJgdvtN9AS5kT4veoLJXm99N9N6Z9MsogAvFZ8PoLJeBBhE4aM54DvQAMH4WKJXp",
  "key3": "57PznuGsqGbMxrkesQsMPpqzcEp15WPZkyG6Bot7HS58gGf5hoqA1BeAfbfbyiEihGkMFD8SvLxTrhH3f77Ly3ex",
  "key4": "5tLSrqq84Pw1PRg1HT2sKkAhvyHRfEQyJsor1oMFjtKqbDxFDnHUhrBHn6MDmN9aSWkg8MyQjYMyHksniHLLn3rV",
  "key5": "27NMi36426BN6opSPRWUj7UqHGb4HZViH7gBRdiTmqbYngESb4tnzuQuMSUKbuPtSWGLG9LuMJjJq2pMSKiYFs9T",
  "key6": "5ZsTeRoTb9wM9hnSAFk5WzRQsfmQhBxBu58ZbyLdjni4Kp29oGnZs6SQBFe4jDT7tC7mCLBbHGpRLYyYfAVAA27M",
  "key7": "5DKTZ1nWMjSMMb6NzqQxXq8eoXgvVGCoFYDMuQJKnrqXUeC9wkAJ9anpbb3NRVdvFDPacCPYtpzRV8cbr34WZqbT",
  "key8": "4VFkA9wG2MpcVVtKs8rHA6J1AQjBu9m55GuXBmB3w4hqaJLZgxw21QsSaJTYGuiYf9b4kKNcGyEyezSpWFvggTbY",
  "key9": "7sKD943AcnK9GEv2h33EfsNtigq3PcTgXZ43sAKuwsaGp8fTY5wPJyoXMc2KJHCzYXQYK98LvjZNWgsHEYj7qht",
  "key10": "5GDNFYY8wGCoqdCfFuQky6KV16gv16MyaAsTe1LXgWsYqJCEb3Xo6D1c96MCqRsBpGDokQFRVvpGikHJX8RoMvzW",
  "key11": "4sj2EE3RH1q4SPUdV4QbQiUnLU1Fxh54tknZ8e6EDuKDx92F9d3NCU3vFDb23coGtTQuTZchamcwsHzzgdwki4oN",
  "key12": "4QsUsmJubS2Y4e8TDxD9L5xaeYLa1b3d86BSE6vtWkZGk1XrPQtJsN8tsm1jrmRg9egm58fjMybasXAGJ88RwDXT",
  "key13": "BbCsmX3eQBk9PFYzqkbVsTNDyuE11fPNkiRwSA9kdp7NwonRhirNkJNNSfiBeVWZ6ctrBVwp82XzyDhz1EKR7hJ",
  "key14": "3HL3Vqsu8HgsCLnCLbaNJkLa5M2o3wfPg3W6fREMhe2UYVWhPpcSSkwTq6EknkcDkKMRu1Qieuy4d1JDNLudMZQg",
  "key15": "5hpHVziAy6QggBBYZvkB2YUkbkuNgUDaxXQkLMAvRdMcsSqABHLUB8gL5SE5jgdJdNuiqTAy51ET94XJxNAXM7cr",
  "key16": "3AN55uc1hB6NwzkPrVdY9ApQNNHNjiCBBkEffwmBK8Mn8tKZJo3WqRD9BmRqyWG2BtDhfYXJdWzmEKPFcYf23WXz",
  "key17": "KZB3fypQwFVQ2pzNpNRFAiEy3uDMq7WA9BoGL7etcoGTQkUw5eo8XdnkDo29eoAp4UfwcEVqJH6XTQN1GDgwu9s",
  "key18": "27z7A5nzM7PPMhvWWo3Wo866GjLvwdP5tq8NtYa8kWJGrCJjZRi3KsnAzRYLaYExb1esHvvCVMhoGxaBhnwPa8xL",
  "key19": "4TiiGHUYER6WqtAjhLXs62NR4TyNghW89QJ5coVJebq1ZgnkJttiMKSzSRKy5je4rNzheNfqPSoeEgaAXAtxCzuV",
  "key20": "61RHX8z1qVzos7fNUoP17odXww7irz5nF8XbvqbJ3z4MwUYPtWvXtkU3QgkGm3UYxpcPqtr6CXqahZXhmFiRzFez",
  "key21": "2QLsq5adea3Zn1dASbAogwYG4cgK59drrBeqjmcYoCtqHFbG6117L2i75N1Xy1FnMmqvfrFPfH48Q9fNboJUTQ46",
  "key22": "5nw3RUKNo5pRpMVaEnhqEY5Tr3nJNAVLVKg2vmgAp7MY4mhGHF8xEGgPZnfYXMGgcjon4juCEAjVBdSaQBW2tGdd",
  "key23": "5KatcNWbLboVzEYNwqVQNUv9Q2z3LxMByrGWEg454kewRXdnUxvis1LiYhA5QfdJzL39kigZvJzcqgKDnVnB3ZdJ",
  "key24": "2Qjp3R44yF75uy5GsWMocfsqLTtVFYDJheapi94qdZ5XtvV6gAEXAw8Z6Xj9D5LuKHn8nNVpE5ru7ozt42bFhsiS",
  "key25": "5a3Dcxb4Y255UvAsjUTxsh6Wmb5PzK2fj2SqdWCb3X2T6A5X7urX7jrZBrJH8TtkqpBKqz22nP367SWih5QgJvMT",
  "key26": "21Akj6Uej7Rg1fDoW3jh39GQJUtirUdPh8v7adqvXZ3XHpCDbAKvA85YdcgUqS7p5qbsmd3otLnH6USMJwjZDfGB",
  "key27": "4aiNrQCb4bEVt6jQrivHvhWBgY8R3R3SPpgdwVwcScpgCMCbnUox78Aegx2FRSVyUaa8TQXgtAWMGjxekfZtAxkA",
  "key28": "eZ8xiE8qhfwT5dAHex7eHyjQpBJNc5T3ouxmdQ6AFrXWoN2zsKhJ4q5HyZKVDfkZMggQuzn56vh6fJ9BfFX7b3A",
  "key29": "2erbhUDJcFWtQQ568yuVQTKqEtLq7upoutkbWP4P6fRB1dfKAUPqjPxw1KNKCj6TqTwukYX9pToyaJChF8YvKRaM",
  "key30": "4CdPjuuWx3qGdEQ1Y3DXfmfuAvG5yk4rkNezdBycXtwkMCp2X9XgZVR7nPygfmprZbGGGaaKoTt3suck9GKaVDZh",
  "key31": "5q2QEj5KqE1VDCs34EqPGECxP1nC3CCGC5YSqQENFAXcRJdHnyb4VgfAKLgRp4yNRTo4xeRYxb8Z1fP5DmmtRCen",
  "key32": "4XUEg9HMhrKgwDsYwSVR6hKVBzMSHhXsKKRM2GPEzM3nC3utmsUwndjHdDVNRRMdddnYWFd4Hz4usd3p7SmyRJdV",
  "key33": "NLM13117uVwmmmNxZRizHJGgmrzL2GbjxGRPdCpCEhzVXDwk57hfyvyxym5A8E9KC3KxRScYj4qnm9uJGbPKJNg",
  "key34": "2qdwQnANYwUhSfcT8aGKuMhZTaxSZwqvgXgYbA3K151ab13dsxzgA4FXCjeWvdBucGGdt5Vmdi8WWxH1Yrpyb6EU",
  "key35": "5dVYb4pxHj7V9XRwC8YqV5XwEdRScds6rS7QBxS2r8aQEMekHaU9UCvi1xbRbu1F5Xgb7kjy3eFQFUMqQM7ip7M7",
  "key36": "4EvJfGJCTmKVfE9oPqEP7DA4iTeuC2MHeRFf661hzsuodNxKUXa4RjPmQCRasVEQFbQGbMKPpdnZ9YbVX1WXDWH6"
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
