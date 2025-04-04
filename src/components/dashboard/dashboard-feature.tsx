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
    "xoY3QBcYYUJWBjwySqdHTr2kVxxSjTuqSW5PEzNZuSe4gSMYU8NDvAkByt5fTGsGdQrQzKyt1AiSr7UHXEfbpHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xUbwRxk7EqrN48GWtHfDHW5ajSiHa7dKECyHJ8PYMb2PeXZrZJMKXFEqpvoXWyVjXH1ybcgLjrA8FS7FrnncPsn",
  "key1": "wsjWCyKmPv5PZTSnkPXB8e7Ud5FXg8Mwpvzea1LXXf9madJ7AksxXxCFw4fHsUSCi7J2QqSG7z3HqExvDpjPTbM",
  "key2": "arDgE6qvUzTbAkbyq4zREy8aQ1tYnox1g3QF2e7k8coJU9RX9sh13A8zTPxL893aMhyY67P9eYcETKcfazgMNen",
  "key3": "whfiC33LXaxMdAm5fAdXdpUrk6KH7pNWtBQwNHyAijhe8RHe75CrXQmjpX18XVfTJXQYiSawBMKTw2z4EVPsPDP",
  "key4": "5iqwLt8Ex3VHvyrwfVYFPir4ZVeuLv9ZH935SfgMFMo9y1DSsFG1XzeiPGaCto8UPL9Gs3Xn55Mv8Zw4LQ6V2drX",
  "key5": "5WNQzg6uFG7RrDU9Wi4zaK2JtSU695XDKrBM5TyUsDNrH6mP3rce4a4748XP8d3sCZijKA8gbqGjqbjGvE7FSKNu",
  "key6": "3nNTw1hppKdbdPuaH2ddKjFDvRoeZnLWnLqgB422sCFByACTo2UkaEYsJF5vXfo2evntJxUaX6YgEoWjxXq63f21",
  "key7": "Pybjqhnu2y3fZvK4mgGF7DJkqYPCtdKJTYA9TgTvvu5MbB6Qfih8h7wY56WWgzStF6w4eb1XxEkpkvCKDCwhdoi",
  "key8": "61MKEFGoUZxinUDJWanut4FngmwGZNZdbezwdMt4vEeqyHbqG2kEQe2MCbiVxhxMYex7bBGcrPxnFemsUVxnoFFg",
  "key9": "3LFbQxMbjpqiWPuaMidshdLAB8q7GXLmCEK3jpxeBMzJvbMBmS9qxRQoXcfQogYYe6PB98HfrYhkaL648tzGXZW6",
  "key10": "53ik5D6nz7CNFS536wJixjgCCmvfLKtTgeGhEb1FHPf1TUxQWsx58NNfU4J8wujt9DN4E9NRQL3vGyb4YrSF9PVi",
  "key11": "3v1PMP5xHJhTfFUBuubLTNEpvba16F2UPUTtRAkUNc9kDtZmpRtmqfU8at5RofpWY4gmSrwN379JyHYsBB2HTgGA",
  "key12": "xMXyhN8tGGK7Ckae9onYpG9vo33wbPbYc2wfVc7KqEQJLNyxQ6VhEQcpXxnTnnj1Gcj2enZX3kpKrqzH2yf9sHx",
  "key13": "3wve1EBqV8uWkGmexou2HLDfBouaFtYaQcfHCzNUPFg89hewFkU6NT25ijn2QBpg9vTidazTTJ6w8so7hFcL88Ra",
  "key14": "y6k1vjqmkcA1WS4LqXwAPU4CELSWWY47Uh1A4FspU7wm9NG4RVuLMHFiUvQ2U6EyadUETnpp1oGSDCFFsyc7CDW",
  "key15": "2hCMjV6X7WdRVtLd2n6dRjm6stpzPavCaa1WVkdL94APEbbXnFwur9DJe7Sgvz133dNhpEbH1pqhaxHWtcJTYRb",
  "key16": "56YTJH2Pxo2F112yJ9jSEzkEzyjSt5LoUFqmPxkzs8ncznYJLqpEDcRUDe2icgaErQexFCkXG2FqZTekmn2B8xGj",
  "key17": "2vAYHKrfCM42mqN6ejfqQetutnyHDFbgF6nWdHfX7pmNX5xyHQ63fYGAx1VaPKT6c6ghqKBZKuKevCiMpL4sX5as",
  "key18": "2MKFVPa3vhfg7KXhKvffKd4HWJA2rrVkCHtSCvc1qKHPz1EtnUvfGfhLCeY5r5PtjTFZQcznuALj1R74MU21DWbm",
  "key19": "4cjgffokarDKJZBinhz2MzrtVcz31w6jjx7xaBV7dad3mfeNdpYS8iYYHLVPF7Mm5pK8EwkTLRKze9iT2MvSNfYE",
  "key20": "3Zfka4euEfDbz5CZEYtW1V653xrSFN9BLrMdUGWVZn1MY43wYZxzG4dLfmpVgtyncxL3VJVVHNYHxBrQquyHkbNC",
  "key21": "RJ3vVYEYafq61fS2NAF6qAeFvdHNu7wqbvLSmby97sMkuYkSG1adPqyuucKzbWBbnpbeyjHxhBQqAvQymWdehaQ",
  "key22": "g6Vvr8kW8kyrc7tdAPU7Zn6BN1AbxCs5w2CV2KcjXT5nB6unYwYM7a1CSyX7iwrYvoNQfy4RZLBFQaeCMAvBfqy",
  "key23": "5v1AKCdZy1SxoZj5ZJ63NUu3a4oF3k8XUkfDxi3sayjW6YnAc2JWg5FkNVit1QiSTEQbH2fkTwWiegoZcWkFCZbK",
  "key24": "pgcPqdXnkf8NnPKs4srGqX9Dp94AuMgxyUkqSp1FnjMf9tc1m8XnmpdC9cKBRrdynNY3zJKaFLHpyVYh7QpRjEX",
  "key25": "5rZyaDLV1BNPSNAQopobT9PuQHTPVbNKVQzxdUFipBJB2wm68KjkmisNV86wJwUQKLA12EinYGRdTfz2FC6VjKhU",
  "key26": "4VwxGW1Pi79SL5HompwZNCCDvmYi9dz98cRAKMpyTgKarBZxbzKEE2EfBRZ2aEYvZ2U8ZnsLqyYb91HyiM1ikifB",
  "key27": "2wEg6Umv9CNVTYR4Kb4NRCEwkgcSBJWNigXdTiZyutmffquixhaWx7dnyAn7Sbw5mXnLq52QEFgCdgxd1DxBxbvU",
  "key28": "3THQUpMstpuDCKdQCkXMARLQ6d7ryCPC4Rg2CGCBzqa9bpXnmqT5yK1ULGaiQnJ13KMPDMr8r1f4A4EyivTYo1RK",
  "key29": "BBNLYMVhCiJGgCULrUx7r1BA67BfeyAk9ryLeVNpVBYKNLn2RTTsYDQSn6y95HZra8cTh4KWmJG62cRJZQRNQZs",
  "key30": "3BQFEiD4oqWNv4FCewV79DpynQGCD4FqtkupbbTEdoa7pfxAx5peHaM3f1Kanno6WBjRybU728Jpk6wv41kh7MqJ",
  "key31": "3PX7snMHvEPSWwQYQAy9D9h4S1NmothN6sWSUuDRx8mtkQsgkCyc9BU4FjZc31aGpW5wfdRTmGMEmoHiheZbFv5x",
  "key32": "2WFzV82maGeGo6xFbbBPmRNhLwxcx3juLzY3s4nEwSe92bTDUpicubcwJx8nDrRm5JCHsLuMbiCMPsqECrHitLr2",
  "key33": "39oVLd1Jgcg5WFFhGAYRVc27N2RWdoQf8AGvbAeKQfJ5xMENxj4jXxjHwwJitLnQwE3ExSgeLvdR9EzGgJ8hUQJx",
  "key34": "5RpzmDirhWRksQWcCnd6diHns7CZVqY3ognhTEH3dN2heKLnuKH3Cj4fNp6ztSuj31sCBfQxtL5WTKWQDcdFgAAM",
  "key35": "4Fv1f9v1cYQvCoS8JHbjEm3rjxHrsMMZxyVhVu8c2hggbTgp3Y5ZfFUccYWDamy3GVK2V7XN4ZQYSkKSEUPBQuJ7",
  "key36": "3KZzHvpXJDTqcxRTaTTEfW3hdEZf4yiUQQ8r7oEC9d2BUnpxzZz9JB6WbUFk5w2YRNYq8ePBneCan36Xmupb3eY4",
  "key37": "2wMAzKezpV9jre317RR4Mg1LKfM9sqW3uKLrNx5qt8Zf476NxE6TxjAdYZ8zi2LzsSWQZJ5jintzapeJAXkDRAy1",
  "key38": "SHooZRRAMduNQyZMTac68woojqAHX7FPRnnuAakhnDYwetqAWYVqW4cABM1JTUSm4KDQ9XHbCbJGuLLhdN7T25D",
  "key39": "5zFZzRiiCox7vo9VpUqtXuBDYcWALMMuRjvRco31Ff4Pd5pcQ2NXEvc6SS5h8veBJAFtNhF1eBFAC3B5wYWpMbgZ",
  "key40": "2vc56ZAeKPEwKQzxFxzuPN1keJEUUVob69kFTY4g3Zr67M5KMM7rT1nFDzxpq4d5BfzfQuaXsCuF2WFcqk2o594v"
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
