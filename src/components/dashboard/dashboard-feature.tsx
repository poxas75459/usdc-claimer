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
    "3E3jg51PtNWXj4tXf8JvtvgKawjGPt8a9k4EWgGz3KHt2wUgMLmBtroHbKp3i8aj1aApj3twKkcTdPX5Ss1YM7aX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iPfTjrm29HVogyjDmyW47m76dF99fzHWNH1Ab8tPvHFN8HygpD1KS9yn5izddB2akoyifwPiNS448ksjM2CD7tP",
  "key1": "5P95UAiuqbMGdKEJqT29d9cy5j64Zs5HrgibkUf55mqZ4CtHuLWDoL1BRS5DZuBT7JX9mX3xgRCZjRCntn9hMYx3",
  "key2": "2uyPYLCR8HbpbKxftQ7JdVTiksQde7GqmDqX5YUhSzn2p9JgHbWpw5QeQuQXmsSNkWH1PngfZj1zdVxtk4x8HRBJ",
  "key3": "2AePZsnkHGcYF91egd9SBREYgaKiXozPeakghp93Uc5Ay6oh75pXqgRxLYzRegzjSXMd1DJecdmvSFobYaBJpbPa",
  "key4": "5LxjGSBJcX1ny3gm7z9GcNzbC8t7kMJcC5bxD9vgPFeC4iNpezg8JVAmZkpUQoZUyFzqgLSSpT8BUp1qJrBzvRuM",
  "key5": "2sMUFNRRe713QZNBGdBSwcgGKCh1mr65dywKtANCaVpHvZ1BDafNWf5svaFvNLc9CZzUiCHKusMXeLnubSvRYvVd",
  "key6": "xK6D6cciFXJ1ccHsKMtLYf8XJL2s4RSS66PEMJdum7KnLMbzi4mnuKTMZcB9jdR1RA2XeJxLu8YbAGhWgMig7bf",
  "key7": "3NT165daF3w88gyvmDjn7iUSKygznmR8Y3Y5gGdu2Kw5X8Cr3RAqnrXRWVJkYTohW7wfH3ubBk5izmeBAJ4VQiKX",
  "key8": "28cMcYkyJ6gsjq3gM5ToDPo7oqD1haZbmZPWmf9rejqTGgguNDAtkiPfUH9CMe8ciHMHdJKgCzC5MA5tRpt5xxjW",
  "key9": "sspu5khLNitkCzRzwDM7MQt56WW2uDkAYoz1W3kcTYpjtBDDcVz7D8gGXgmKDAxH4LmBmmaAoa7YecZYpMRwwPL",
  "key10": "QoEZrkZbwJyS6qwb3NSBQDL4zkMYEUsr7BTxuD6wRxZ617FtebNqBMMgfsP99QFcn24GZA4gY7RLq3pW65pGbRj",
  "key11": "f9mTuC8wM5T6PwboThTREkYFxPRbyUxCQGrwE9uVXGTdwxaP7h9sygbKvkhSJCdJ4vC77hsK3ohmSmv68u2wp6C",
  "key12": "4EvsdPYHafVfTH6kVatdLPpWkR2gPSq79bSJzvVPm7U9zmFGT11YaYQcivG1JCMVEqD1je7JhL6HszxErFAgicj7",
  "key13": "usDZrXcQ73ovKMTMVG74JhSEzw2gdQ1ARpWuS3VZjvy6Zzkf6Uccac4BguE9vPrUgTZk9RJe5yCKwo8bTjVxZv8",
  "key14": "4xVka8BU5sEtJF4YsWhDPKSjo9GuNEZLidfYMphoCzf6HGUpchuVXDHj2z797JZTr5Lh4BaAaD5FniWeoPV6HWmk",
  "key15": "4sB1aB2Lkwfw2oHxCCwJbLDWXxE7pcktF2c4fQqWQNCCeSEKncn1xxPSRK7uYZwtJgNGBmCoGzQiLdkT2Ns9bX7y",
  "key16": "4HCSzEb3bDQkiYFRtZqZo1eWcbScLfN8VAZqHYKSeAmTws1ykPYMEZWAiBCwhbgU6Vx7V6P6t5vb9x2bkWkva9N5",
  "key17": "3nNe2honP21Gu4YmkQ1ixqEqvnzM5jDN9LXi7p1irmccKJV5CL7CXrtLCkKVd3wVWAyvSE6ayP2VW7rPzfLgcVrK",
  "key18": "JTMJH4ui65x8MnQSwTGWCS5J6cCJT8UtCrKK4eAPUZCH56nQfaGtbEePvvQFqq8t3tu6eX1amZq5zoNgV43x4i8",
  "key19": "G76q2fr54F6nmfjFpFW1su3iVkcjgQuuUKJfeuLzBJjczP7Xy1cDs7oawwmnkJqfVXa2NsxAhPuQZLDbqgyWauJ",
  "key20": "4Ysc8oZBu6T5Bo33DWtZV2wJ4U7Kiob5DM8EW2KdWZUhfKn7Z5Bbi5U9pZRZLJnwRfiJiuNu5MVibLz58rLVJgk",
  "key21": "7gsJvNgZZmu5hTqmeoHfpVksbPaxFqrC6shnktp8odVgWDUoMSzK8fbFoLebsEr3gfgQ3n8xh7paEFR8C1sRp45",
  "key22": "3xHT7zD97BVTJkt9p5ajmLm2JYhT7nQvRk2JWeiLyLYMsC81Knf6iV13Zq3sNojas8jaM7hfQAwYyT26V616Yn9V",
  "key23": "22mwHnWB2J4QbkNWGPiQwrYbbAGLujzzxBnMDeVfn17UyWQQxFMkMZeJwk5kYbCasE7S24YNreRb9kVp2W9DZ2uF",
  "key24": "Z6N5PTKcxQcrurQPH72JiRMQJkcJZmDiH4U7nsrdY9oeP76wVKTUYvXPDHYkAAKTNFPThnJFLxNXyri1gi65taP",
  "key25": "2MUQ2BXJCGRLYUgVT342jrYjZ3GFshTyLycEgR7nigrvLZ8aWzfZALrLkf4u5CM1wXqopRWqFUt9RnW1Vd6Ds8Fx",
  "key26": "27oeYWocJJdcqq9ay7NJncTjtbsr2weDC4dHwSL4J6xsZTnSStmAFxXvNzvYEm9QnmC7hdNXDA91WRjHLF9yxS8P"
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
