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
    "2Zp9mfhBELJQsv4kyRVwWM8XK4nHFBRaiCzG1xfb1im6ojiHSN1DArSQQd9157dqVRdGB7pvR3kj7V3cx6aHZRyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Ge5qb99a9wQk3JkkWqxN4kkQDzWR2Q6PZyn8ihTKZp1auHm1x6hgBb8anBpCdhNnggb2cZDpF9qXAQR8xNoVao",
  "key1": "3aHyp1Wby6N2Xs7keeFKUPsVSRAdUQoaiVQDnETB81QvjqtUmnzhTDd7USiQg9DyUSi3omw9w1PuaonRk7dRb3zv",
  "key2": "3eikKcE8pE1VqeCR6N18Tqrve7kgu162zQe84Z7VV6GVRxvdtt69ReGX7uYsJa9GKsYeQtKMuK5ExdGQhtUCVFF1",
  "key3": "4gZwiM5hQ5kbKdeXVcNp52mwHFyHYKThiNXy89m79Vnc5ohGnx43mktQDKHZ8fLLyRaC5fcgqZV8GrCamxszPM1q",
  "key4": "4GrxgeJuPe4qv3WkRfzWDGttXZnHqEenDtsxaQYVZLLfzjR7sSCrphJ5Saj7axR3NWu1HXXEauwSJu4TfR5dCVtS",
  "key5": "3eqwqrhjKFt8YuSg6V36iSnPCM9si4mmmRNhEqA3jXhvNjq7FHEqVXw2RKQZBbxrkfZFbQ1ngsNRTSraMEws8tNT",
  "key6": "3c4Zzc24JxC84zNxbtuKbAUWuE7FBq2JGkzCABoLhRjBuLqsqdmhX1aKHc4ZEfxZmqiwT7w5DQ3MvVuMnrvN7vih",
  "key7": "5trc59YrnwCeiQs5ku56nQSRmiNUsEYsd2BG2AbfCS6Nzf7Ap1JB132A2zvPxqdnWLJgb8HZXo25PKwU6YJd84Ft",
  "key8": "3yvVb45bijMeE3WP3wbvCQ5ZvBNWu7xs6ZcYNeVdJiKveUMw2pH9NiRNYqbQAFb3LNqhd5VaB2PMhxZAQkDxbvXr",
  "key9": "28KJiQAEUz4UQv9FdKCy38rRuE7Zz7Yu8GsP79pe6rrZpVKxPKs2PwL8bEEE9uJ5uxwWQuAyoMHWCErBBJdRFbPb",
  "key10": "5gBxPRQGvpuxuTX5YmtFvjTERzq5L1actfAXyV8cXqhifWWpeJUCzHnXcWLLYFzcruB92ec5F5jdmVYDyGz2XZcw",
  "key11": "3Hk8g9K2TnG1Y2eNTGPGfqiaSaPRoKuvZmdttvYGFogGZGcgPoHZUQoZqzzKNKa3PuSPuj9NRDvAhUPAgPjaNSkX",
  "key12": "5kqvevyyuiCuzDhGvA9hXRDHaG5FN9o8bxFUTppXtqfe21zwyaTGDjKgjbUPT5EXDykBnaPF63Si88b6y21E192c",
  "key13": "2iRbkex7Th85nsrjeFxW4UEV6AazHuWB4CYHvVkn1kikt6kXyybGyDG3z3QLxg8dWJG6ArCLe6Kwdt58r1kwM2E4",
  "key14": "67DXFZX5UEvskeuNbSHJhTbCJ8aaMjHzva9LFDF6qbCMSBMdDDzH9uk1Uj4LBAfqtFEtTV1GLNNx8WNwn26xDEV",
  "key15": "4KGYLdiQg5LEFDZnGnXJcLka73PMDpmXDjBFG3Z1CeneyZU9DnmVMqafK6vTftayHJExbUE9nY8HfNFNZTFXHdHD",
  "key16": "215zrtiA8Qb9hYRLzkyXM86txt9jt7za533L4kMHh8PeWqxd1AxNoWecYvJefN2UaXFbN9Yqr7ZcouZkcN68gbb5",
  "key17": "3uESGag8n7o34FFJH24ViecqyWKroHTic7P35YG9dzH4TYmLn6EgHeUbofSaf16qCRKCktqxDvBaCyYa1TH8bkZB",
  "key18": "sWyyqcQK7AndiHArDEyX2gpJLZAqwWkpDqKpKDygQowMJjEv65Jrd3p54K6KkwizUgkJzW6rvu2ojdeGM5994kZ",
  "key19": "eFuFQrmEazJYTBnKfhe1TyuojLFtsCcXJCy7at6tptnSkrUBxWhMfMe3mKuyB8EnoKBu9RRTmAkkcrffLDmoMHM",
  "key20": "2rt5W2AukZnCm8QPZEVrRbJYk9RKs8Y7XM3gKakkRXKdTXd95r1VmKfMzsFh84iGGHrpcUCssvXaNUYLyRJyszfw",
  "key21": "4YSMicnTyVH5fAkwipRQGUJQG9vw22Kw4tqZGgcBm7nSAyw9DJuoRfgMzjJrXs3ENhePZz5zBNM452HgV6wPPbCZ",
  "key22": "4YquNveDhHjuCUuUPjKJAicvcZBduiFYkoGEyWr9f8aujDZv8cpGuv4haWb3efBSjmJSmd9wP8KQyGSjxh2bnmmn",
  "key23": "3KpxHBKTRqUVKuMZokQjuBqZqeK2Qz7HsYWUqcri3QHMqWY1VkMH2eYDXL4riVSrTZe3er3AY3GVYefpTbXhEDpL",
  "key24": "4uxG7wbKotxryrkaFxTqdcQXc3tbYznYSJ2zDX1qM7DXchxu311PPGyALxkHyAWEjSjRUjqn7LerrkGixavWz4EV",
  "key25": "4CVKoB4DHG8TmV6MGSYR7kSxrwf9EN47k4BuC8ruAYcVu7koTLEKgCUaiWa4LixaT3GVzCginQL8jbvnVBkWLkAu",
  "key26": "4iGJm6nEMeguMV5ty9MvB5HBLBognv2FQU2uQsgzMLex1DSADMY7hLUKHCezfivpMZEyMsPzeKJFaVW27ZGSBE9U",
  "key27": "8vohyWEmAusfGRxrncGiuMa6Hu683s2jubRrspcdkATFCqbEHLuDmsjuTvFyhZ43wSoUybdgwsssLev6R8ur9Jc",
  "key28": "ZtJAXkQ41XaoHV7eb89YB4fc7JWatWAbYvQFKm5uENGAzKKhkg39ee8fTwQubdMTqTvfBFgYXzZdxsNyF4JTqGn",
  "key29": "wHs8P9cK24FQ76zZ63AonfZkxTPzP4hcaJwao5ERpD6NQ3hN8Zb3sZRyKkv95Cd4zQDecNCtMDCCGZHi3o2PLqa",
  "key30": "4zt9tCKU7dSAcuDoAAvc37DMV365WKRvtqnJXggR5hh5ouyqQcQPjJZVLPwQDNNJj5hVYuGeE1Y99ojih5Hdj5RJ",
  "key31": "KX4AMKRzMN2gE5VXkfvCH6Fxt3GbverjRq136jHRv8LzDSZnMMuX8zQyEwidJZUnYfcSM8iWAtrA2R7w8vF1JSz",
  "key32": "V1NNDg6qTtvQok7MAxh7nGZPoER9FUrVzw644KK5NWwqPcYvSpd8BmZt32RiKYTebzcBatugiGKxLpx9JgNWYbD",
  "key33": "5zKS792YAWXxtA6MNs6kRCwPfE5hYWUbUDS5LsX6VEjESSc4WnGxGBwBUU597ssiB85DRj6qmgG2A5X1xQRWKYty",
  "key34": "4XYfb4jcYZTsQeVT9WRDq4nQxGDDys9547WVT2gFszJz2LhkkzpMt26LkTWetJLwn2usEaYH64S2dUjMK648EW3o",
  "key35": "L3esv7xm1ALaJyykBvTfaeFrjxLzMfXTp6aCEQ1oTQx6NVVWeW3eMMZVfQARYKCwXUCapKS1ALc4CPNiF5tqCv4",
  "key36": "5VHxitYtB359HWgA4oy55TaCeVj9dGUYwbX9sHmzzsJqribLPQrWrUarS1fUjR8RbJ7HdHVpe1r44QhpX5TFSrPy",
  "key37": "2bSoxsHex6cA3QS2cMKBxz9DSs9nxnbPkQjJ7ddHXhjWTEQDWdFNrRRNtVNJRsMXWCySAygRVopCKpBxGHSCuqCG",
  "key38": "4LqCZQgQfMsaC8WwbbwezqUBxMtRwJYdnifrcVnDPECmkxpgMvpYzqKsX8B5mMt4csp5pzG1VQdTuZaSD4NWfizd",
  "key39": "5fUyEqd9TMLBufDQ7vCZ2GbbHBQmrHjaUkAgXiQjNVmAfNyWrXi42UhesvWUujLdj1guyh73iuNCpYR6w8DZHN2c",
  "key40": "Sma2avJcr9YygTT74JDdPANS7BG3vxg8AGFXPiZhwDnBfvn7UgN5RyPy9p8yvgaFVHvjQLSavxqgQFpBPxz67ZY",
  "key41": "5eVqTgfsEjeLHsvPTNqcryR9Jf8bZ73BpCs6fu9nZSEZmito5dSdPJXAeQN4mWXAJbSM8X6ksnfheyE4v3vQ2vZz",
  "key42": "5BeXx5hZmzLXEuFSTAtUs9eiK7QF7Pu6DY4Z3fC9HSSVFNKVxB9ewY3oPo1MsGLC5mXJxZWxuD1boLRdYiR3W4zL",
  "key43": "65BFkpeYXiTNQw8gNH41Jv7TVHBKpSZdtfPkAQVfoxkNLETfkuBvimJ7gx4BQwaySbJ6akTED683Ft6PwrnMCv59",
  "key44": "2pySwD9vamd5iS6VS9p3RqAG8LhpM1biCR9f8hkcVmCyYH9eNaJNhU9et63Xgx6Ta5N7dyTxoS6FSPEDwm688g7H",
  "key45": "12ta6veeuxsHuoLNRQKQiJNJBiDJTRL6XMoH7NZiZe9UK9nhpJPpmNhewsZtw7JMcSEaoTV1Fvvu3kFxuLy17d1"
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
