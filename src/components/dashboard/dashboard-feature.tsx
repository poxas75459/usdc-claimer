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
    "8i8Poe4E6bChDDhfeN2qgEDkqM3DTKBTG5bMcU5YhTge8h3SkQyrF9JmbGzfCuszMxkzsARo3vD7zH97rFD51U6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S1ynB3Vj4YiCWP1XXLwVNdH5EjEu1Exkmvamdbrdp9KWGHbbFW75tmQfJ5SdNd4yXF99YYWD19UY6yvq1waNT1X",
  "key1": "4hGHccXVYQWprtAEH9D9V2DNp7WPRL3sEGkC2vmV6XrKDbdjXd3UcKFNKBLRKqhgL1SSaRRsnZ8iEuTURvc2ydvo",
  "key2": "3YyJHe8iHQAGQqWGM15YBx1gTxPobpyMWKGCbAwPxJ1dfzevctforRxg6B9p5kgpUAajBu8fzmSwF9PvRxiWvr6f",
  "key3": "3cQgpnYV1NDxLMVTKWeeNPHc6Pgx67b1xDDb99FuYS6BbwyCHux4EpauUJsEgK7iRn3wk9H6zGHKbRTUDm7Gi6t2",
  "key4": "4VRiK9z1ULtfGV1ULmB5wePRC37DCm7A7PitKweGFbAByYR1xVM9cytnKFc9n5SFM7RwWnbmEyqgggGxoT57Uv2p",
  "key5": "bQRJNCvaUCPRSPb9DEbaBs2hGitAnm3bZ3u4fAd2abgTfuQRBT5yR5p2X7Gybf4kvvdMneyMX1jcAcfY6dgDdaC",
  "key6": "3Ye3SJL2EuoMtmoA1S2rZ42GLVjCN3JreCGsT6kb28CCZkNwtyufAqFJwRW72467szu2U9gwMnzHfEQcsG2J3MY5",
  "key7": "3Wn297zYn8VXsAoeAcJrDPvvXV1ZY3RAoyeL3bWYse8LD69MzSgahCcXkxSb3S5xdsDAgtV8XUZMKWRsP65kECm3",
  "key8": "4WKBW81vsnvBja23rDBZHtgbZ21vQZKDvBmtervdwZ5zVXSctkLz4oE8HWxsBdEekjXUAFJC5uiQUMs2hwuxU3Vm",
  "key9": "3zpfZkeQagziPXtTJ1bfD77zwmTnc9MfaD8NqTdZetFtNjB928FbBm4PCxRx2ZSWS1aXoCrA3wLYoNgb5q8dqL5D",
  "key10": "3hkrSWZk2Y57bzS38ezpJjQFTNCCJ5aj9H4GbknFcgzGV1TikyNkzruWZaTSSZKBTASHxxRWamj7aNCwKsrGoh1X",
  "key11": "2FTgofZMxCYwnwwpfLb97U9Te4o4vzuJ2ZB2cPauz2fTrdP9squTEGbT3ZsNgrTvUvYdPFZCEszBaniFEZTZ9tWf",
  "key12": "5WTZDKAwniEUQMjfGqrM1XFERzusLpMbeMX5U3mgXGg6yBVVtBPZmFn8nFgxse46aTbyBJM4oGQWo3tiMUm3ErWr",
  "key13": "2mSjtJHtuTMVLjqwj7yqciaYGWRLfzFrGhR5dcN9SVkjtXGVodhQNVa2erS9X2BU2grBgiPzcoZ2bmBFPX4QBaEi",
  "key14": "4n9BB92Ut7JgZWFfqTyjjsKcRqn2b8ZcaTQ4moiLXxtPb2qJ7Nuzd8yC3ThPXSMY5mJgq8coXuGQsnzpbPeBZ3ab",
  "key15": "3QpafXhTskEUTuDa3KyUzRQpZnmCcrJM2BFAhed2dHyCpCp9DqiKY9b3YanR6kVbHBENNJUdC32YLaCnS7psbxTA",
  "key16": "2izUJ1JWavLYRv2AhQPaq9AHRbZM6th3NN32eJikoZsLQyhTnKyZY1RWkK5pZFUUxbffM8HaFQYhiEeAVPKXduFn",
  "key17": "5PCNVLrcFD85h6h9LLScdEqTBMti3b99QdMD7MPwDNqBnnFatqpdZ11yTmAyeWufpvKtHzK2onvG3VqDiL5LKGNK",
  "key18": "5MPgDpuk94dT7BSHXo2KFXcfKtbgftZFpKhggSYgMhc2EBAh1uMR775fDVL26V5gvCeNkvc3XEzzcykzEkfUQ8Bw",
  "key19": "521x9nqGGhwvkcwv42LAqjoux36MwzPF1g7bGPtJwvXPejv9K1GY1w7rLQDJHsdpFKvJtfdyZX4kitpg1dQDU2VY",
  "key20": "3ohX7iRm69Hit8Gk4Lqqswk7RuwMdTuhTMW5nvM3XmDBtFnoW8ynVYmTYk8LGAjGq6MnN3dMknEmLcNonPKaYQKU",
  "key21": "47oWfJWRFA8DDStwd6GxWGmS4u4iez1cEkLu8DH9k5hZXsQtj2fzzbyjgoaTrnPjS9vdHvkdcLSowQ1zfQZKaMzR",
  "key22": "ZEf8mm12PjMJ5o9p3xGGpSvQwQqUqmptuCD6BPJf7gbL8532kPem3eAC4LCNZ4hm13r3PRUqXtAzZPjajVm5o6Y",
  "key23": "5J3s5tXPo74tmj9hWkbPSU1XBMK91tVkkQRULDvWX7TvP2nMfXxht1yrnaT6SuKxr4euZUs2pLkWwWd3VZV5BSP",
  "key24": "4PUrGDB6hkKUg2eYnEWzUXBUuX1NnM3WL3yA6srWtQnJ2yFvZLrdSux4fRpLr36RXe9Ca3MdaZwYjYaggaMDRHLr",
  "key25": "hL61t3sQJ44JG8uk4aqVT6RTfPnPEVQ2iXUA99gAQq1uj85gu5k9D96YMA5uhcuBs8LLKMr6H31sFh3ys7iWCen",
  "key26": "4y2EcbNHSQi7KGdA79DK5hzYi5V3uJAD9hFoKBmQ8Vwsp4hHzkjkmkTdd2XTdrPkxAc4bEGJ5BY6mxyczwcJysdH",
  "key27": "3uPoTmjRrEriDGF6phifBmPXYq3MWHCm9aPsQHDYEmcTpn718zBHhBDZLitbGyXWNH5J1pe2cH7Sk5ZS8eU6wz8A",
  "key28": "3N2c5f6BnJZGYfFRk2fc9LVYZpznyHMGHoLdS3qWiHeLR8WLhznheSLwthUpxJKRJGx4cehzYvHL83rX7A5bFpQS",
  "key29": "55EyZeDwChMyuE9Fk6uW7srZBU1NwmJv3VBExdrn8qw4NDnc69jr3NKpRCcQPod8zMY3rwfQwc6z131YyQ7RM39T",
  "key30": "e71rvdUzLifyz8J9qFJyktfqMGUJZQB2szapW7DZt1NxgqrQwZge44kt57w15i2fHLSrZRcuVt9V6rkBjtXmdvv",
  "key31": "4BReaJrp97QBoWVv1SLnLFZybugiY9D1cRcaeZ1DqQPacPpGU6dkp3vYpcWKiwiBdb9FgFQ2AU7Q2rKcjpDDVT6Y",
  "key32": "5w8nxjcXxq286oZwcJLfbQDdY3nJKS6AQCV2mVQtFjGSo3do6Gg4WDbxnMGNRsSby1X6ikehsoFNVVBZCFSi1jRn",
  "key33": "5TzpHdYftdCWpbacA1o6LAfNvzZLJ9CudeHLjshysmaVJUreSHPfsqobsvxDYdTfZUqKoZ8fuN2igUGJtWGZuxGu"
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
