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
    "4baoZX5o1YonamNveKQMDR1phXiMGiNYCvzyY66c18bTRYVX2mvLuPU1Pz1mMgheFdKZjbtp3K9BewEK9pp7eaYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sB61ZyQ1hDJKojaTxaHgp8AArVLTDc2GPBZu9243yFuKzRZJJPT7Fs4xFd5vmC42ZoP5wmym6ZhDawsKhuXJ9Eu",
  "key1": "4RR7CXgQN6XXGDsenEzys2vwbYA1b9gRnkWWw5cRejSXLbLd9fJ2u72kkz5cK6MR5tvexLdxa5w6im3dmw5nUy3s",
  "key2": "4QiyG91jD5Y2mnS9K11cZDRi1qu4qgs65fqM1zyRYVoXMcde2aS5UP2DdVMjEQ1wwjrj3ghUE14ZQQDTn6zX4R7U",
  "key3": "5thXaz5VN2qY8okTsvWTNwxZVwHNSk14MymA74vavg7TqFPdkFqTeXnJifKFbxZHAgKMpqDKF9YLNYJHeg29D3G7",
  "key4": "2aqhSgsdsveRqehDFVLZXz4iQTkJ2CkTrbjPjSwkZxg3GLqU6ehovvX7fzme9wtNjDarsXtgoS1rY1FXRPrewQPi",
  "key5": "5qWjJTNb8rQ1uqwzNRTd4TcXXMpaFvR1nrH8dwYatSJh6LJYFuZii1XKTTYDkDLWYWh4umzpj5mNF7zEbRPnHAT9",
  "key6": "2SSp79qMAGxiaKqSv5ucPYuzyUUVR8z7ScmmEedZSQ1YL8eNXBsJ2WunxzZuUxxQhSt62bZJ7d36nm29LmWCSdvE",
  "key7": "4icPwpcuaxk5bqzg5m21RRK55p94GF9et2LkXvEZ4RseT1MZbayRvLhhggCt36BEpBzxCYziVxYd5rUfMEH2isfL",
  "key8": "4azwteYvwXfvMXuKstJC2SkbJ4qXoP2awC26XAmoeYMpbZFofXcAwbYSDzyzq2cYAUBMPxDnqYvyWD2tcvdCZ4UA",
  "key9": "44wy2xmmC9rAQ8oWAfgCHAiJA2bsLDYpQ3VqCwu8a2gH3HSKy2uN8HkUQUrqCEgDsRmsFZ3iohxQogJE3ayDmFa",
  "key10": "2r4QmbPuThq2DNuFmMRLRRGkXoDv1YpoCdXYWM3i9JGHtkPrvprUsYa1nPoBU5MbNPLKteSoJkpQPJxvk8G4DadP",
  "key11": "5sdb9q8gd7krR5LXPPyCdJqe7YpUcuLcWnWoV4cMJCLPmJQ9MfLouUY5e5FyRaV62LuwNfy8xxufLAxzXytWk9Sm",
  "key12": "3XBRkRo1SHXJwvnp5MRrGHP4YNqTLjdQyBS57knmhJdR9VKsq2Y8Y95Pnr5PSoAcqd6eM4VEZWQX4Go4DvDFE2aU",
  "key13": "YTWs1fL6vEHgWrgFLQRVbZ3PcKzze5ukuMER9htBYyuqWXC1HW5HojJeoDEYs7rxH9omoPN8Tdu1rAnHHnJpU8b",
  "key14": "5qFhz8KVNHd4ekH23LTBZD4uVXJRLEFLg2ve24x647BFkfY7cBEwkmdfz1DzACAPgBbX4CNKcUeufBZnU59mj5FE",
  "key15": "2xXQ3ah7pJ4JLUNN4JQz1repWDf7GGZQaHP3M9hoboUy3ho8UJQV2nkv1ehJKo5JTVqtmgA275FiYxbXQxhNrUPp",
  "key16": "i6MKU5tApvV1biPQS6DhXKBd2Dd4HoP3doHBRPW9Hv9cSnKNdUkBmKqZwwsBR8seJpy8pJQnYoSdTVGgbGL3RCt",
  "key17": "3Cdjmhsh2FyqHUhrej8hYNzmqVp9oHymnqTNHEJLvvL6p5SA5w9gCtr7RZpqMKHogMtTtjF8xErWSxwiFgkvK17d",
  "key18": "3edSRptc5WB6McBgSH72c8vaiYFy2BGkdhwKD9nFHq6YPQaJD4YZhCrphKokhZ5AmGHWY6Ner9TXxVRpFjqPWNyq",
  "key19": "2c2Q7ad7Rk5BaSjRBEJ8uVT9arm7hJ2ZHnsqDGrmDMCzKstkXNz5seF1evUcnfxvAaeYjC3stchvF59xpmGMTKmA",
  "key20": "9MSSCo36fZbzLzJw6sUsHMeZxnepTfnwg8qa5KTuQbsRNq1utkQxDFJEMNWZSLvkcXXHs3JuDk9CBFdKaojw4BT",
  "key21": "6CiKe679sxrXNbbjQ3UscVVXQky6gNM3PUvQXHEuoufLbfHrBQKNRR6aqTyc76V49cayg3umTHNzeLM3pYoLSKP",
  "key22": "2rUcMLjZifPC6SVchdDaqGygxULfSeVEavfJBmTVYN6dEMbEwicudfzwKPw77PbXvyfm8yxGH2SFTgPfd3hCR4XW",
  "key23": "5ycR8AYsqEHPAeH89aqiZKrsYeiGptQkd5UsVCYLz6wbcTGPm9Ft75Pc33e9FV49YavJW8mwpWZgZZEy95phhhie",
  "key24": "3jpsx6ev6D8NN46koaS6JvMea4NnkHhCFfdgdgeZZ1RCVkdgKNkDAu4G6dA9zdu51LZLQwwixNqVmZfoZsGSfYqX",
  "key25": "4XgedU8uSxCpwtmas9QmdKstC14EQr2PyG9LRojrYaAZBGUK5mdsvsuZpweb5sjyhybX8G64Chh9in8AvL4QARLG",
  "key26": "2fdRVygHaB8DpW5vmULNNGNykGLUh7R6CndUmaMgeRqAVHcaG4j3rUkAH96A2y1Cr64KxPPnhpbPwxYJYGEYmttv",
  "key27": "2fzX2th6Z5adwD72MoCAv3bwcvctDfjwDrYeqZaqBG6RpmMDn1j9rFMPBQaoHWCD6Xyb24nMwasKbLWHBrDRDGKZ",
  "key28": "4XpXb95AJ6Xb1qZdHUsB78WucmXLEnqVDuDxSoUUN511Hb4g1rR1QxLgfeWpCSo5qqu1kpTBikrSKcxaYJa5dH6g",
  "key29": "5piWKEk3oCtPQWDDucR2K9auBSp14opXi6s9LcrbFgU14X8yoY6jZFShEWBq2fvrpZ1TDtKPXYognih3xgQz7VJw",
  "key30": "4wpx1iYQBX7xorMmHJcVRCNDQhXsveY5kPa8FCFM1rvifbh125Us9go9cGarxvqNvoSrw6hjoQfPqUQovEC6q8VJ",
  "key31": "5cT5gCegstrDb4e9KkmYNb9qk6a93jryumewDaDiN2DQq4y7rT7d65Ux4pkPHA7T23kukoSvwkfMKTnRWjTEeiCf",
  "key32": "34K7uLrtTWkXCQQmqjD6E71KwVBH8UwHKSKwmUJbKZp7S4Ucu9XYBGpHnkjUoFohfyc91PccVNcxqiiN9h74bpMc",
  "key33": "2ZvXaRfkDhDY2FM1Le2Liza7zuFuGmin73ppZiKDEFd57xUV4wKEQ1din3hkLehBUa4CMbAyMqJyUraCKwLSLuZV",
  "key34": "FVyhNxQZ18rPF4WHt4U5scmBfXmaonFk9snJvix6tZU2t31WmZevjSyrt3kN4DgrRySUkvoHUFvBVyccYYDy4g1",
  "key35": "46iRnujNnffXx92vn5gsRnSJhQEjHTTJ8mDr5BFaQfJfDtuCg28RiAqAcyhDqWtQc23HPmADYX9TgVe4sE2MPD3R",
  "key36": "4sTA6SvGUKDFohdWqo4PozrusWUqKZwTm643cN8uoxJ1mX3Xhh3Mf6CQbRBnC5p1JwHdLUG9yRbs2bA93sHXudsq",
  "key37": "4xWRN63apr8JhZTiEf218oH2WWpz2fLBpkqB7xP9bMfxELRBDvAGUMoNX9UTZK241aKDTWwL4UD7s6qxmwMeGFEs",
  "key38": "ByzzcpDXPjfDm1YTgE9Ez7SEL1k19e5xzEuFo14CmUk1mvamdXwev6XXaJNTUd7ET8iJaQynddUrWbHRsjTnsJR",
  "key39": "2L1UP3YC76BGNdygrhVAEkf67mLR8Xth75RwS6CRpNiffpCYxZJ11P949QQT2rRUUqXRBgQK7bVQ4TKvW715o5bK",
  "key40": "5yKMfkNUFu4RK4VGaPf4rhr3e3MaFDC6g6Tg1XKhstX5ZLYGEVFh8NnpFFUuHTjmUJaVurZ8nRecTFKMgmXKuTCa"
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
