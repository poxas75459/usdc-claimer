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
    "AcQGhekER4PaJ77NRimbbYxzoE8oRCwTHqZ6bPd7jeCw7BXybsBR98C6URHH4HM8VvPJTBoMHWAt8yygsmbY6Dp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65hCsMuvaj6LZLSTkDbtbWsG7b1ghFLi5CnEjs6ozns24kCHjVAkntNtEE3nHm25u5eCjDcHfX3fJ2KFQv3iS7An",
  "key1": "2tazGRmFTivEmWBdCAW3oXvjEGV5Jb9mFFdLFHR9AJAzuUYaYPVg86aJbDHxEwNT6V7zN3LaCGUfNEFfAwdj7eUK",
  "key2": "3wYDiTeDJA9hn6MVSm1pL9eSUH2Kj1VM1LHojpLeLfszRoP2eSR5yxsjHKdccQhWrTxpUJJhX3VWcsUphMMStM2j",
  "key3": "EgN5M9Hxwq5ZE6R5ESRxkZycTwWMn4qZKxsJHuoGLtk69n37h8Dzt554tART1o6TueyXcjna8ehVArRzHc56Y9N",
  "key4": "4tsnJtehQHTJMuKxNWH8sEggJSqoaCPEMLSXkywcs3RAfSzK4JWsjEHVGnRoowAmJdDz4izR9faeHGCNE6o83YU2",
  "key5": "48aKb2H1tX7pGpNPWRmPS89T5BR8Lo9uEqkgyRiEmdKmcGwUcDhqQPKamLFkjZzcbBfHV4Hj6s6XXXWFohLzFzAv",
  "key6": "61wAURs6sspNq8MF9198S5mnxY3N2WWa7QwuuE7UmFbd5SyrSvF6XHQv5BDMzyp5Ec3wawhi6KU5tQvcEAAoqfwy",
  "key7": "LumkvRBbAus6Gu4fFizz2Jbq7bH5MnnfrsTBfNtaCKbSvr3Q7iZutsednM9d5m3nzpcHaLZz7R326ZVxRAyATka",
  "key8": "irrGSduiDVYMULJ7eJiET8fsmskhyc5F4uWXqZ7hgftkMpCxbHnxgzFeqNktkzzReuqaBT6drbsETb7YJs9gG5V",
  "key9": "62LCn9yeCYN64TxR5PF2jgXTeTQG3C2d7PXgKVTWfJATW98hXGnzb9c1t12pEZVe9YEbySQabdtjeRUa8LoApsRn",
  "key10": "2edfgaqWC9qhDJjcECDyCfTZrQNTvAKZJqAeby6KZQNDDRrfrc6vbSbgUeY5qFLMGRSpRNG1w9KvyvHSmej2gQcF",
  "key11": "2qab3akgqepp6bg8mJU9eKfqnEfFAgR8ikZ8496rLi2kdLsCuz9sLd9kiXvJUsPsCv8xWiTZAs1vYa4gadaWzYmQ",
  "key12": "4cW3dqgRx2S3wjDoJP8DXxum3ToLDdEiT2AkMUF8PySGJXoQrKKVTT8fJDUbRT7fcfmimcZGQ1W24UsaSwjroaa4",
  "key13": "JWuNKaSc4kDefasLK3pg2BNRQJjQeKf6mYmhUXSNFgmqBwZ5yMmGRZsf4KuPa2s3UfQPbc3YZZQGX5AnqabAvLh",
  "key14": "4PSMCvAWJwZ5Aj79NMNcpK6HV6UQdsLSGJFp9EvHHHP5fQP1F2WkHecfTu9dH98TEgGvjZ6wiXjppUwTVyYPASvd",
  "key15": "226xcKu2zPX3p4mUeQdxGJ6Kpom3iJXAxKTeNaKJvfU5Wp2nddwbpVhbPMobsgudLu9wPEi2AW3DgBPm2jcyX1va",
  "key16": "4pgUJeVEfYGDrMkF2jDnvjhw1fZt9fggt5NLf7KMkyP34qCX2jxbtkwSHgMd27gbyaXk8yg1dCAYsorhoQzCuFmQ",
  "key17": "261dmMntmmEGThucUfFVV6B9rouWokdji2rtGQqrkRj688aWApiD32yvQNg4s2r6PEYJLxveZrAesM5NLSoaQBxx",
  "key18": "4i8FYciYSobbbzVabVSJKZ7qE4Lssq4CvALSM755wzxdQtozBhyAgNR4yyuySoDNNGpHZAY7GJud3De6X2JwKfyr",
  "key19": "fHcNtnoRN4vd6z5xw1st4cnh6D7hB8jSWwVacbqBu2kprXScMkw4QgVJ9zssLWr4yv4LLK45Rc7fdbS9Pjpw8pv",
  "key20": "5VSJz8n5imNZDybWAfvMFqUNd4Bxy4FC14cQmsAwFezSZz7BcD6y9sKqjySAZ5bCvMyppNBLUR8urMK9hCgQbsa6",
  "key21": "665BswrnweXjzKg5bGnpr3bHUKpqx3QxczN6HfktKyUBudiJPpRXCCzAhyrfGSThN25TLt9HxWLE8YJpyaJcSWHB",
  "key22": "49mvNjzm3SskESyEWkypgG7U53kNERWaBRJ93UcbjLCwtbiSmHtiDubGSk5wN46Xmr44ckyvci36w8T2eSLjaQF9",
  "key23": "4pHVdaRLxtvxBGfZBRZsHZFk2rtZUL7PoQXgS26t5temjJ4wRtxfW2NDTbRYnkCxmF9ZZBcqMdbeYPk7ngkjfwTW",
  "key24": "5DVgshKmvGF7wJQ8GgQnyHCtBerMrHmucsnP9cJgvLUUxvQSZnqPb3ThfZPk9Ldxi6ZJS869JEUxdzxT9fC7T5QR",
  "key25": "24koe4Dk4fn2BQyHxWSCp1ybpV7a63UZxtWssSCsCGz21xTF4eTnc2pW6G3qSPj1bRDgeAZWNmyLZRdGK96jWG8y",
  "key26": "52NGTxijFwWgVCspDzZVdUCi31EuNuNEKSwUUJ2e1HT7DJNHkfCJ6ay7mwehE9fMEYHGDn1sS1N2YLdHikEKZXi6",
  "key27": "57HuFdujYGXEfGLuKpexHHL6gBLAo4fnui6otTW349Gm7yrRXoofPocspNKwWavZUQ1w17bijR8A5JdVUUPL1d5c",
  "key28": "28cSduKdKamgunupRvEGn1QPDuRW8HQBway6wDvAsyhKSVhsStTET3xFTwGyie6ds5cFwryTqbqh4Pe1UgHZ4Dvu",
  "key29": "4MaEpA5fk8x4zju5cdAad5SJT8cJafmsBB5RnybpRvx8mUyKgfaQmMHYeHyt6Jt92kbuZFgcVUfgyoCMo1G8rgWN",
  "key30": "LfivSddc2wqELWuTtM9T42PVVHHsAVpurfMukizsRZm71pkBD4o3YJ75QkVgWDwD1ew4nfsYW9zyQ8jNUTrpRbv",
  "key31": "24fGqygco9DcYCrsjjcGWzpaYKQajXXig6PQ3VFA2e2Pv1PyD5mbGZE36EU1DYWBjUqRT5Wsj1DmjWX3kp8ufuQB",
  "key32": "8YdJQST2BRFfKpKMWRnqSmBQky7eDbjrbb3QFXX2kaWG4mgdXtxWfgRsJ2vyv3HDjMt1BQ4CLLcNTMZbTA5sMmo"
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
