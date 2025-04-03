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
    "BDX7WGiv6dEzL88CiSMTNQxQZY86f7YSdctyZQRbwWMMJTcFqNNKxsypJcMBzfkkWQoECNSXV5F7vMiuZthbC1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LDP1778bESPGVabS2W9FBbvF77qbYiAu7zUAh2hHjcxGkktC99fss2SmrAvN5C3NmJxEAY4Faib9fWbNqQWMwRZ",
  "key1": "3JRykhH5b5yJLMagaohzTVSxjCBVpCSXjQzvibTSgbCLVqRX5Pu22kR95U9q2h4rXD4jXLWPmdBpBeNHmjqSCQZ4",
  "key2": "iBB8ASDE74EUXHaC9bvib1YufvGCzCE7YFZbTYiirJiAEo3db3z7NQEPweHnMi9RR1BXnkcY6RrNntVYaZkAYc7",
  "key3": "5AddePQ9GeyUmsXw5NDLifcdoHDwqxbLmzMroW3t3Ht7sRVkLcVJE7krDjT4UwzZPBSbNvtPbTGUhxnPABVGqdXm",
  "key4": "28NZphzNWYfxzrttYdDCwJL4tGQWThWhb1mcjndCb6yAwvJvQHCo64k1hUV9EJrCU9MfqxkeznGkXEZMckAZGpfB",
  "key5": "381cxqPCh4bXfi48X98a3xYBgv9muHjTXechrQwJLWe1TQfnn7zbaiZ1B1w7KCsHkakXxVCE8tBy89Yj7im5KnhC",
  "key6": "5eNp7kUoAidA7jpvKB9RSnVtqXwXYywsmQ5ZMdanRwubQ4JjRUrB3E7UmZYxMPaPE9SawjSDeTxgJCSkEZsLN2k8",
  "key7": "5qhUydDZsgqDTheEvhpm4fD9oFSquJsG82sCrPzxH1Ni3c8JAjKN8Uqy36i1qgAHkDgArFJou1pkaxEkzFeLhkfg",
  "key8": "4zVDv7ayVVZUqPdgpQj582e1hUHNX6hmTmisKveE5dwy1DdiGPZszYkZMmv1YUsVByDgdG5FeWnC8EcogT62PTGZ",
  "key9": "BM8FakEhcgriYcbdTMkEB4FKkDydUG5teKUB5ZRgDEaAG9x51K8CuK3Ff1iBdgMihVYxYEaVcZ37XNYVtjoE4kH",
  "key10": "5sGpi35PVAgNr6gPngvu3KN4ZZz1D4htKRLitMiKY1Z51WZCBAmV22VoJuWNMSNBYd4aD54rw574Gvjq9bKh7PNG",
  "key11": "5wAyixeqkGLa2T6quisnKvCU2fMCav4T3k17Z3MhS3qeWnbgBzzcVwXYYiJjXyWFFvejZYwcDrj7ZxaaNZgH6oxh",
  "key12": "2GJcNUjTD8pCGu7Sy2sRjCUCSwENZqWu512k8f7h2LAH2GPx4wtTr2JhwKsuDeEuUBtAdVx48bYVMUjqXvvhutrk",
  "key13": "5xtAewi51xvRfZjDJKurRhPGsrmLxKRewv3nPZStn1w5GoHqWkt7UNGRYLGejAYsZjpuaD8Aon3HRLBzCsogZKDb",
  "key14": "2wuYzd4F8J8gMjd7cPMg3ow9Hzma6GQ2Be1ge9WUmj9M6LVP89oAvoaCjPb1wFMHoT7S2dsCtw1G9gLsht1bMF4U",
  "key15": "3sMJ9tN9QfzBnoDiF7s2A2FXEwWsZkqAs1BES8zBQ2f8SCGqkG4zzBfzBJDYYdLrSTDFuayfscVYuYvcmCAgfDhv",
  "key16": "2gwgZFmHmBmCRuPaJnnDQJGFxxxppbXeuQCPJE81dHtpzzypLWyoHTZNNZU5sApCuxdApR28ZHDzerq2jYvwS5wV",
  "key17": "pSvLEiyB3caDAMhW7zd2Dw1VEvQVMFbi66g7bjBbF39qbvQE4WEy7hfgxUbSKg9SaBvbAUYDVFJQx4WqSzHsFyU",
  "key18": "2G2biJSdVqpXfPjuhEvQmadcMLdg9tzvPKg8C9RdL15H7hJdtxFUfY4AnkHnUPnV6Z7rRb2VqXonXrbGFYMCrVaj",
  "key19": "59eKyWfXjdZVe9hvrHFH23rTw7sRAWkFFpShx6CfAA3ZUz1vU6NuYyrXCry9fogwqtNf31sUaE2yv4d1WarQJv3J",
  "key20": "R59Ds712XQDVporFfqJ6jNUHJ9x3HKuXCh7g6vgoLRGEjAXABbWBiqJUnSop3xiM1ACeeeNPPwyKD27q74P5S9c",
  "key21": "2eJSZfTMkmgaZku1o37FvbJEcbruSvwTBPQ9yRaNjB4McxTNugtba1qUsiSB2ZFuR3b6xwJfkApiPT9gsVaYph3K",
  "key22": "gKpDdPJYyrca7CcYpT86EeWs7xahzpCLRMjdr93591h2CFhYYxyd7PaDMSLzL7q3KTUC1MP6NFWPkwHXDAvxprQ",
  "key23": "4E8jYEm9zb9wqL8thgbCoNYySSUzi27Atek8kxp4Q4cigSUraHM2HgRKGZz2RQkbt3hLFKTEeV5KkLLKhkoQnziB",
  "key24": "63z3G4yHrvNwpZAKv4MgmqTuqYM6rUaimWhYcvj8k9sXKd1JR7ZdcceRm2R1wvyYhgh4ac9E1jjxXBcX6tV37qB4",
  "key25": "4KYjqU5Pa6Z4RUmcmAskwmTh9KHSngqn5FG5ETvG3vw8f3N4k1FVmEzY8rXadNb2DV6nLTtHcLiLCQ8o3EtrruEk",
  "key26": "BByQkANg9LF3b1H6jbE8cXH4LLL6QrZmVVVbKpvxNoNBmMHFgLrxTjwZ83You4oJfX9NZM75JKRnLhrhuXvGxCR",
  "key27": "26ezBtAJQaqZUEJgrR3KnTNyZzuDk9pMbnZxJ1TFdAZNZEni1cMjuNxLmtGEVeu7Q8gWv47ucgRkc77jd5Hubr8w",
  "key28": "BHsd9JfisG7aXnK16CT3co66bCYBhAymfxMJLhwvQCVrkeh8tX5KnGMfKBj4638GLzwYqKSfGftd2VXm1o7NaUk",
  "key29": "4moCg5SdExnDR4RdqPdhXqcC5Z1K35dGmYVMAiBv7z7fn8RF81sJd2TpZ94dSK5ndB4RR2sGPunUNGV5vqNTaYL4",
  "key30": "5htphX8cwyFmkbhDrcU8tk3t9rDWH98Ta9q2RzYDMtRSYNeZTtGk15uqey2npN5PWUsEtBa4nVtCdYxs1679kFKx",
  "key31": "3AKwk1BoFDARKcMtLEFqeNMTTeft8qKdYMugHgudpYqfuwJRG35NYN5Hvihp5sQe7LkmU2LR6A27JbZujzmYxk84",
  "key32": "97FmZcgSvmGCLK6ycLRvEvksyoHyTxhViHkbmvD4vP2V979BG4dT84Cgv2ioQmoD1SkccVX6Eyc7sC28XDtUFpL",
  "key33": "cD3Rkcaq3jkjUyFa8sG5fnAQGDa6iEXt3sugwe6L8VTwZLFtD64omZBByTSdBoex1uLz5Eafw9fNNumVwBQj4pt",
  "key34": "3V9guhArtNCNM8bJmrrUNzuX6FD7F5coQvV8eBGBQRWafB6hkpBAQfWTrLXpGr2TC1zvyaSR1SotDJVFwHZms47T",
  "key35": "4ocLTvhrdLwVgACsXuY4viwcgteZuAvCkvJVk3HkDLuk4YBLRjHzzpWJrycuQMUoNW57TvcATpnAxatjE5nTyX5j",
  "key36": "4f5iN9RZNDn7BcFHc98VijZ9CxgkjBhmM9zomYWP7cKVUdmvKtnthcygi7FnZgCJg9ZMS7sG4Dyu5ji1KHB16nPU",
  "key37": "53sAbGasbTrLNPiuYpDbEZN18cu1mssLqfNopg6nHGP7uPFH9pFiNiEdwWnqdTnKAeJ4mfC4aSWgqDq7maLwMJpn",
  "key38": "4FusWkuuRx5cXybWz67VEcqxi4TEzjpcatmo3mCRsoGGnB4FMqdnWGNasxkE5qTdKsv5nPrz7YsaeE9hiUYk6H6T",
  "key39": "nm49Lv31EhoUMyfEZ98H9uZPJPXV8krQRtDmFjGNbQT6YUsWtAugVtyvTnWKM7LvvLKwstPnpmiSQW9jNwmoKmu",
  "key40": "232T8ZzWAaa59b9rn7o5GKwtqmpPb22Ajha6LsXsuoWwTRodZm8vDGhqmRHjYh9eb5EjFqCe6vhtN9HAyJfgztSm",
  "key41": "5hTRFyjueGTbs8Z7UoJVuk1bgUscJPtbvEWmNByJwsA3GvQr641JNFAHVG3cdspt2aPcuxeS3DTCGP6Wuo3avc7q",
  "key42": "3w6g2dGoQbd5uWMwu9w9zdGwzSUmBRykNcNGCCkcKvgjRzBgQQGHKXCsv3iMcr7V1SmD7MAJf8rFjZY67QhFVRaD",
  "key43": "55CSi426bWJkLPs3ACUbGFUGqkatQVwXnowS4xRFu4BaA4MTR2ZFMq78NEcWyLjgh6yAYF9qi97dimmet9kMvZGs",
  "key44": "4XRr3G6PNd6qiVQv7HkKYb8Y6ey7KdVYyCBHqU78QcvP5kyUUfyvz6bKqHAw3HYzLafbLPUYJYHWjGKopYDXu61w",
  "key45": "3D8A4Y9JtcsAQtJQrCrQwjGm3TzRPKFdipumq3Lycra7yaT9DbEmVgYTz5CAb5wMfrGa6LTDSfbbuYEiH3o1RqAE"
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
