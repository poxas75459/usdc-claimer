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
    "3boU7qJvLhFs4n9mJytMcM8rRbToW8jwKXxKdywydPHtLLQyLRnBwV2DYEw58T5jujZZU76eUNu8kPvPRK5yaRSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mq7NX4cgYj8LR9fov2WAaccZzP3JVTewEsL8VfAjSTwjBRbTkW2MuKr5JKgaCQDPnn6S6GaGm6L73MVWcBwiPPr",
  "key1": "3JLgnpsxjRmUsM8gN8QBxWSLeasFdDHgPvkkdiVjaHfRNwEVvJ1S2p4e1DYtuGCBk8E56Rzeymagcizi57Bu1RJU",
  "key2": "3kFYRrKv1825fEbZ9eRbGeVFir7PJDkH5YNCokNKTTTQgGFCp4f3J7pt3k9sKBMfM2gFA11sjzKw6sGTDAgft58N",
  "key3": "33XHmvWgfnmXoRuMGU1w4bx3MQoUYEkAsFRLAQPp9VUEXzNmuo7Fjc4QJjQkiefrfTRy1zKwpRE3dTwQjZ5gMdgc",
  "key4": "2dBTrRTy3oey7s8hECLTBUU9k6oBwKbJtJRSk9HJ5XJ8JioPvppgzfDXTssFz684xvyF1AGz3vCMHRmWstjuykpj",
  "key5": "uRsQKsragYzv1gfWG9QUQSR9fb9hiZ4bZfgmPe6mMchnugPYiR7hVEBxBGVnkFEpBBhp3dsh9ZHsuNxpc8NN7oP",
  "key6": "2wssCFGQ3p476vcfMgbuAZr9qb6t74NAhTa8j7rgUsGYsXeLjQPexjDvzTuKvinUaet58XnrjbKYiwWDrQxH1YuA",
  "key7": "4iKaBVuf7KHZJag8DmCEGTwG3GttqtDbY2YSyLeWNG6ZB3hPXKqWjJcpSMRXFesU9Hn4Vs2FJbWfK42GLEHUcqRS",
  "key8": "27XADVGDzHsk8SiTDYxqRGux3gGvPHJ3oYNwcJfjC44vXwoTketQEoDeTrr1iptByRfwSRLLJE5Yf5tv2LZ2xvP9",
  "key9": "63CeMeXjiVApJAs3d13PHexMNvFQHcQq4F9rRp9KAFHFSNto4mmQmz3mQt5hocfE7NWcKeFtD417uFngzCNP3jxi",
  "key10": "5e2CKNbqsRLh2P5sS4qSYDBwBpzrnTreZZvmN4ibMErtqcZqeZiDVWgHXVKuYnUYwPLYVThPjPCLX1rZ6MjNc7H6",
  "key11": "d3kL2Ah19tUUbU8pxiRRAQrX85boexQcvhQZByN7stgWo63Bct8y38rnisWEciN3cMN288NoQbQjC8kNJMqVkyQ",
  "key12": "2apNLoEbbSgdW4i8oaudK9GhCSxq92WpApov116Chsn9xFFGzHXEbLkzpG6jeEXwVXci1j4kEQcuaRkGqXxgPwr4",
  "key13": "2kDqB1oicbFLeu9VGKX58EZbfzAn6HGVEv4NZfEGUGzeitM1tQafxCAyZnwyBb1BvaQnmYPxP5QMcg85ux1r2Vnw",
  "key14": "3a3q7RuzgpesGjkw431dHcjUyijs1p9LFJXnghn2eBTtktMog8gXyfnDZ4vDg3Nz29JcxV4NNicTWRGw6UcxawLM",
  "key15": "3Jc9mrSG6rrmtWoavTNXUHVEHxjmJyYKdBxnXbnH4gfoq5J2Jq2zqhao1eVAhXojK1HbXBBw25f1bWN5tbB9ynLQ",
  "key16": "xfbb1GAd7tZfJmPTWTwXZHMfp81c17Ghva1GoWY6DBM7Jc5uSKuRZ2CcUJf7Pu8Pv84yUMtKGinQP1HAjiP8is2",
  "key17": "9LQkuLRCh8XZyPCCNHxW1KMECruds9umaHtVGXq697qAThyofSf64un7fVd7wXYfNv4hFL7ReKX8QcJHnUb581M",
  "key18": "3sraaSyo56xuY5eNNo9KJ5wEUSUegvhcYYFdC9uvjdvErJP5Zpk7AdN6YqCHdqS5a2aRfQpEZnEdFQvb7rqJLzrC",
  "key19": "3FYtszqy2w3yRe6zwiYuduNfnbAwwFf9QXZYkFcm8EWvb8n9GZ3ut1ZqsEkgTHcXYXZiyqxjBfpokdExnpDV6rzZ",
  "key20": "4y6jbuDADjT7UQKNrgg5grE2VDvmtAv87MHMyWA49cJDD5As8dE3NbH1rS9AZKgNQKud9VcExB1mo8r1HTQG3JEz",
  "key21": "z7WhfWPFTbPb5a2MzVzbNuMwNLvhYMAbQJNED3XWZfnCdqFYU4XGpAAuHhipsJUSxY3ViJUC7RoStzNJwvt7tpz",
  "key22": "2qYAP8U9qT5tmqLrh3amfc8vpect1y8gvd212nr36NNnCPTVk9Zc7ErSZgWxu6a79RPwMncJTMxNpid3WAVX1vwR",
  "key23": "3TrQ5zvyYNe7wuhNdZcgVb3woXLZuXLVaA89YeXCB8uCiroFHNmWJEKjzuM6BVcdqbmhjQjUB4oTsrotAwSSKJwq",
  "key24": "3vyWUewkd6MkiautS9zk9JS3ZXxnqTe6rPMN8hF6qt2h8ZEyV4zZ5u5qPP9JvEyiMUj9j3eJzK8of8P8xoaxZDBi",
  "key25": "4UHehgnpsaha9aSsp8iKTCTXu7nZKKg5dFZZXJYDAnPjdCuv8a88WSzLCs4eMmG9Ed64Z9Uhx8BD1dkdZaVgnG1D",
  "key26": "6523afvQ2cfazrXNgDniSHoBvE2XWtnpTc68MtmpCU8YJYr6QZWAQGqqxhiRqfFDJVpjFKForZifmP72inTp4WTv",
  "key27": "25Adwz32dFR9WTG5qxgdDVwcPmVxa9tsYjgrkVFWogUPuGJz7RU4uJ9iqtbcpMFq9cV5SLRNiLsmj8DmdbD8EkbY",
  "key28": "5n6CJ1eKacBBDoMf8YX6RasFuX1dPyJ1TmoVJonU7UDDjQhQutYztkx9ryAx14f9R69awBeYrpRrthaiENxvFCL2",
  "key29": "54PfkVUTPTTQmrZTnETdLuTJk7BVCqpSnKEvPSKESoZaG1M8WP4yGtwWFkaqG574qBo3WGoW3oEPajNV27BANbDw",
  "key30": "4RazYL8HAS6GCrgEKBGc6wSr55cQbJS98ZFq7ccV5DtXd2GVpSTEDxYG6BVkmGX45J4KhJX59HVkvYqLFqWTdKvj",
  "key31": "2XgTn2p8AZGDZaJVoLhAqxGy4Q8xVH5hvfTaaKxvYXumD6i5gHerbFqQgiffT1Kss5CaQEGo93udGm7ugoD4H7Tr",
  "key32": "436tufy2f3qBMzPoA7opFituYDj6HF7EQzrsPo8F7wuMeUa4AsRkQhAou2amppskwcRvFvx8XxfNcT2FwAZaSt2o",
  "key33": "3LnDVuurevqM6S9k739DaY6WdCwM27C2fxQicWHh1pYMSQd27zoi5hZozodYgM65dgp77Aek73xjuirTNSiBuua",
  "key34": "2e3mKEwkvVMNMcbAQ6fQ7LoovU93bnbksNmkmQAYqxTswXv8Dcnj8NV1VQfvTiD72PcP54pHVTgi5iFjqNArkFt4",
  "key35": "224obG1qyWoURSdUNfzzQJzwg6tng2U1BtGpmUgwgBp2tVRsHHLspDk2W53LaG8kAZp7BkbVfX2WZngUdQpfW1jZ",
  "key36": "4zhiWFDHqx5vvbG7jbrqc11PbkuKVLaRirK4eXvpaLoU1i5aUGypyqDNq76Ey98S6sQXNiE6M2QahaiJHzurados",
  "key37": "2p8w1ofDKuoTZJYmXWVWeixSqK8XNA7XTFnaGEJUNc7tKjemMguvtmZBCy6mYf9wXm7fVXHTNZsmKrKvwdFFC4ro",
  "key38": "4Argw8q9VczTyB5Cnf3XYRRT31onb9skjRZaZpBvRSSco8oUjcFYZPjqJKko9L27odYf97gUY6CjGn8s6EB8Pgs1",
  "key39": "4AQU8urmNujW4NTAaPgkgk7vN2Jp8vS2sjW2i3AtEegDSTcxj6miGErriNbxLzSvZZgBqVP3NLybVMybt5b8XuBw",
  "key40": "4nKAj4MHiZ4T4wBSZPy3wmTJmshwUszKtkjgfGs2oKfoomD5sCogoov2BTf2XKKfchje3unWJf5dafWdN4DUxh5s",
  "key41": "63GTojZKJyaZaxL5jn1ts2i5yu7ZNPFBPNa525cpGZSKH7gKXmcKbzrLU1xQhSQXgv6EjccVcuGTzREnrHWikZyW"
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
