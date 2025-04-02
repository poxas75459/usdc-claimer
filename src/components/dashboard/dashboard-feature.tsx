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
    "44uRffVLUPygT9qFEqogqwzXdztgYpf6jNd1MZ3Y49J4XfW43TNPMTHRyeSomm1UAdzLyNZ6YQwewuznd7Wmt8Ge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xrvYJmoRq1kYbG7RryfekqnZxNqEmCkJFVVYQWU3dN9hSRvY8F9VsTcsMkJCZUNLp7K1MBuTdMoAv1KD3kLhkjf",
  "key1": "3YrEKa1yn4yCUozThErZHB7SAgy8Tg6MVpCF9LqhcuFZiCwv5msemzF5MWbnHVdnqEuzZCLsXNRRLR3MXYyWvnQN",
  "key2": "GD5KWEFwJm1dPH79Z4iMSCvKKrHCPKVkkbzRk5tJL2v2Aa5xKhwdmMEpzT8kGBTpeDBPj2igqkHWduWZoYCh6ut",
  "key3": "eR9dXLPTPuUGV8iqsJvyY8Vc1hs48r1K34P5NaVhfmfSBXr5BnxzLGCEKVDB8FDmGtwxmKmraei5Nc4PTCD21Eu",
  "key4": "62dMdd5PjWrKHPiwyCx4ahGxwvHX8d7JXnGj6A1y2A8Q5wnTLrBuGa5TfYAD34hV9NjAtW9xQHwENk6rwQqh29z1",
  "key5": "5dyPYHf7QXvdhLVnGBEyfTwLqnbaqeGZnk1mxvVwXbsVYzc72zWwUxRUYgu12nivp5ttaAHJEmSPQywd6wADgi6Q",
  "key6": "37GZ837SuEcpPZDMqX5RAEQ9YWm1UGJ6RxBab5fQSWDoQy6nqCctPUTh276qreQcMU795Yo8F7cqKHu6Q5U7pnTx",
  "key7": "TAtvXeRkN1SfJcA3i2jJEnw7HWd1tGF2kjNN5tMuugNbKnp1YqxTfwQEWKgkPJyWNjowLSSKVzTLXfnfVMNc7Lx",
  "key8": "5vRMnhj7HRVd9CeGZotgsMci4Epsfhkir9hT73cueUmdFGLf6Rxxn1ZuzVjp1CBiF11G39nXkyrxKkFkaHW55Me1",
  "key9": "5oX8kedLLMyvsCBkokGhyPM6fXoKHXpNLLTZ7Wm8B7Zn7k61JKFRmTbKnmm6hrfSedr2qh9oy6YmqUNUEo2cmRJz",
  "key10": "26n6o5NPRPvCViFsgQVkAaxygK3TYXYzaxKj8qBG7hygQiFztGs45zpFo4gxEEyyB3erVvMeHYK2nePdJ3PCZ1m8",
  "key11": "2S8HGBGqsPAMMgXTEnwneoyZTQcnhKn3DNw6zFXR6Fyg8c5dVGKpeRXedopLEJW9xftKD7kFNRZuZBzVVdKWzjGn",
  "key12": "KsqkZu69MXr9MXp1TeXcxrGWv43LDZTTFfKLQEJ1x4wrsvKMZxYcxbcfE6JKKpK2DpiB677tc7ruWFyGWAp4QZf",
  "key13": "3j7FLUQDsshGY9J2x2hvB87oozgZ2nnD7MWTRyn3uhG1ExwmHuUC1xs4MbXxvf9qKZys6T4UjQX3bk3V7bFvN25g",
  "key14": "3jR5Kq2EwPJJFMtWyJfdd9fHpZcGYtgMx7MuGVwXmaqA41pW63ktCwaYQsPoqavh8tJVZsDwW6VR5fHr14hwSPRD",
  "key15": "3cuuTPi2YAKbwWVuiVt54SJzU7YrwMCCyvfoEPNKz8bp2BKyZsZn4HzqbDLoNc78B8jpRmn2mzjHo9PbC11PbN5x",
  "key16": "5ymYVT9tez6CcTBAe1GyEEJ8qwC3ZkdoQcuLDseAfcZgN8mn8bzARMBGbuGoZ3u3qrk4BhxZ7zVMsmAHw8JsF4zs",
  "key17": "3XALbBKKibu9L1TLGexh317PHX52iAhNR2o87oD92REirkdRmtyq4SikkitDNXsNxUfrBpK79hcXg3Fy4nRWPVp9",
  "key18": "2scTZyKT8ePb8qGbV7fiPRxRVrV2b4YEkaL5acjpzZAyDssebmPSmzHNdwYzjj5ACaeXaKiPtvzURYa6KnyatPhL",
  "key19": "33tzsYAALYf3wiWkRoHxDffZWA4zn8caXwxH5pjkFK3FPaZLeVsURsrjzpbeFxgrWTDGp5yvpqLBPLx8sN33heKq",
  "key20": "29aBy4KdPLxzocxuLSFLFoNrCHw3E187EP4RtkZ8qxTHpYSpLmRv4gzznjy5jRveBx5v3UG4yW7B8GSCSi5SrqJg",
  "key21": "3XV1fK2ncYAFkgzndTjfzn14GJbzT1zrtXrMWpRXFkF83Eu1tkGF9YTS8vufDRNmrrQ5ckRCkGd8pJGqpdceBFgP",
  "key22": "3ppEhiFghVAaBPcDa6dPeQGvcJgzFFmkpBmQ2o64SogCf7mfCQWcA6N8esw55LBv7aM4hnx3E2nJroEUYG8wgYWK",
  "key23": "2bgPVkbmXphhqDevZ69PVJRLbcsPFAZo872n84ySCtiukwjZwSLki6CaHjnZLapdjdLFtZC19zLHGwMQrkfNQxir",
  "key24": "3Em4CeDNg6Zyx2DXpG6ZYFwXG4e6BuZuKhKGuL3sDdyejdmAf8D1AkNkNgKuNmVKq1uVRi4uZvU3JxnRLFNHqV8e",
  "key25": "5HtGX3rwGYX1PxpPHYaQ1hS2A3TyCUWBLra9tDrQokyx7VjpwQcvfhSupFRvjt6HWRoa9BkoQJAx4F3PkmLWFQZy",
  "key26": "2XMzSaPjakKkSw4Jw2dBFzn77iqo33HGLoVKt5aLwWd6TVTaafapydFTzNS3mgMHrJxnJ8EMUfByfeFwdR9v44y2",
  "key27": "5fmN1CDvqTrff8nVRF6sgbgapJ1vb6SmqCiQqqN3vioZ4T7sdiF9AZ1BXt2nKpWjpBSeGMmcEsiJLTzeFxEw1oZs",
  "key28": "5BqBJRWdnCg1Eg4LtK2dQ9ZDK2Xn6ez79y8e1gpPUKnncRrxXipPYAp3mt56XoYraA6mSZMkUui2jiZ8n78eCYcH",
  "key29": "2Yzn8pHvhz1eohBg99jPf59BzaRBgQmvW3Vu9txJAHrZioLQYxeyrKZJM9mzqNiLEZs44qBv7fWNnR7QAxfkwewM",
  "key30": "2QeEaTQDAbEQ8h4uZj7yeCMaWYfA1yunS7wVCwN8TTAmgrJnER3d2p19LKSu9urcYW6PAVD6w8qCRJe4zy6PCkJV",
  "key31": "52AmbggtRBUV9v8MXU65hXfa5J3HR2FxTDL2w2GZSnfBysyBxS1AM2XTDLbjvUrHjpBLXc9v2GympSYReW8fJafo",
  "key32": "4uEK6w4pw4nJwd2SCkME3go94nMFVd3FqBfRz7js69oHFjvpv2MA3s9a3xbk8zs3qtG6LYycpou62VD9nhakhBLs",
  "key33": "4gcSdD5qWgNvPAt55L3YH5GEi5jbJ8YtZA42T8KkESC9iJHCkwyGbSx8LVa3yPGnXg4SMULJ7NjxCSXBgRezPHmX",
  "key34": "ep1DXNeLhEbponTpmKeWV4d9GGvjgh6Nz4kt61t6hAH6Xd3WEjRJd1GzBdMCVkDMo8p2Njb1Dp3TxMMHhPQfKhq"
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
