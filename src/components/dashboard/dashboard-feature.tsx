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
    "4sL1LYN16z628TmSmxd81JV6oBbmL6RBo6zA94G2NzspVzRq6jJ6QvPz6iZ3oAgCyiu2fWSVXK3pV9uoBPL4AiFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EAau9TtkJqExZPz2q2fUmwpM1W9541tKwUZYhDMYSrojFTQPBjBb1qmofjESCiE54ZucX9N78Z5jhHfqFjneKX7",
  "key1": "4gvKeiipiArTHhYKzsdtf7AbKhAaBJo5XjTehbSnJ7JvL6LntV5zp3NdLQ6RBRQAMHSxsuH9mb3deZNXXZ4yq4E8",
  "key2": "2SNPhFkRSBsdx1SVhKGdFs5kvTfRN1pzftpQxEpm4SHpY4ZHst4LouGnAHvqc8pejQJNsm8fTy9b3yysG7o9sSdp",
  "key3": "5K78hsy6ogm1cPi8Ct6xFdk9XZNinN5n35U7uTRWan2gGPv8FJy1NU5UH5xZPNxtxDLR2VvZ5SRxcg2nvpaCtZFX",
  "key4": "5KQneRPBQpjwXLAczugT79BRwMfzdP7XrTs6u8j3pGxcsiJQDdFV6AY8KRSXR3FmTMFBVFm1ZEpF6nVte8BkX9rA",
  "key5": "4uoaJBvPGgzozK3LPfh8DxjVAyB1ACAMrPwnbh6DRsJyxtmMYBjckEvtnhiBtSuV9eqKXFtL7uaJjLCarfHx55vW",
  "key6": "4Ji7B6JvCBEgcqTCoA31DtYWQgpfAEtVjKeTdKA257r5ichPXQ9kpCquLi1hMJ5ikLExmTnAcJ9qDkoR3161NHec",
  "key7": "XBotfBRrRFxgf13zwgJXEuaSJPDHkKaJzqJJQMSH3nD9MoeeP23gs5f2g6i5eMsgm7MeKALDevUQcP4QTV6YxQF",
  "key8": "4CtsmhYaSXhArT6JHKedHWDfuHiNMemFKzautYcjbKGFfWmHjQv2u2KvSx4kbuydRcHURmhrM9CRmtoAXtJbDhJm",
  "key9": "5ApEvmcZozHjMfADkS8PYMcvx4ACBZDqkt85T1wCpCzbmLYPr6WXZyJ5rzFPb2JokPKLTgoD4fzY5Xz8n6mXi1Mu",
  "key10": "58Ht2GLCGw8PsoP3zR9EWN5f95dof6HSDSy8yh4mU7NyWbgApvvt1zEv1JXHibX4DZ7vyys6nB3uQSa38Q4uokU9",
  "key11": "24DMZcHX18CgfT5Y56UZAkfhJaj9K8aaqUwVVAMsMNMh1AEdLtxyC6GFnrRTiQNqPX5A51Wid8MHcMpVHC1eSnQn",
  "key12": "8Ny1Pkcf9UAZKFLJKFtFoQ3vKz7D1hXbqrPfe4JPAr3BFR7xWJkTw1DU9GHSVa3Zc6GYFZDWYysHmejc8DfJTVG",
  "key13": "5XXAHx8jZWr9BPEp8VUwj1s2zbNPAznmMuNYpqebityw5hC7AiyXreJBEuY6czau3RBRQ4nYWxwz72r1LEAPPjmk",
  "key14": "4whKWtBHqggorpCebZ8s36trzd4ZLBdzjURdDkySyHbJRGDgYexFoZiiwpTfYRJvUoogZKEv37igiamki7gCk3Rq",
  "key15": "5L3tUGX5ZdCpjdnPvdVti3DeiGse6zRaF1yCWNBtRrCzKJ9hjDPiasUUbbkYfMwGbYzZMMizzveTTnjtj8kfcRsF",
  "key16": "33FLFPFCdob9uQ6vLRFRyiQaJPzr41Es74krdQ8X3BKD2X8iXrEKcfXYLaUh2GHBfjjLXvc6LHUKYV3TbXFH2eUS",
  "key17": "4X4T11UNFtCQwBAB7TKx5T9QYFw6T6HYcUvjY6URPoj6qZBPdWxZ4g9rUJHttt4zHxmkMcPa5YCfy3wkKy5xG6P6",
  "key18": "3UXs8EjiUr6H2G1MgaaQQmWPPop428WVWkLBYQRRYtcrZQ12FduE7ntoXi6zYPNnpBCtEAwmaVhfGdfheG9DvzkB",
  "key19": "4GeT728xAXYk5qLBhHe9ELsPDuaCPUZ7tm79ZxrLjNThgDc58PUoCLXecEWE5AEd2TphKfNJfwNd552Vwo6NuK2V",
  "key20": "2vsZoJqnSyPNEhFwmvzvt6w6RkVkfjd1gZMqihMH9aEdUAfKKExyYwLx8c2wZXE3bECKyiREvrGdq3dyAF7ra7oG",
  "key21": "2VMoNUpjdqXUUxfSEGr9gGdd8bXiJuM2qXbXbVa3d9AzAgK82pW28grqiicpb1BE9kj3zGedF6uKgGaR7QXGpEHz",
  "key22": "ZPEfo11Cn5y1LempfF1r6RGULpTBdjaga3PRJyFaK5G4LceqmQDKPTstyK6YNxVsqMroV28SmZ8nMEq3qvLpXY8",
  "key23": "2PkmCuuRaMiR9Z82MXsTcSh9drqN4oSHP8QpXdwbGATfBc5Kbej9FqBPJu4QjtP6hxxgwGHSvTFtXqHmZDGiLuvH",
  "key24": "4otCgsnRnY96KN7oqkTq1qbU9pWnL94zuDqLxvgg3ErMrSGPL9SKsXZf7U87LStqeycTmnyKM1AdFyTVNXyEzxFP",
  "key25": "4GJYYB85W4xdGLCc83vU4ti1kjfgxHTKJ6FdTutwWFGCDqccpfBSW4RNpji6HqdsndWx5jbG5n3MrBF5F8gvLz6W",
  "key26": "mh9McqqvAR6mBruGuQ56HJEWi4rVb2iWjxAhPgzaEDUXTC6YwSSJwkPhqFeoePP1ttFiKQBRqZ6ZBWf5dkG1eXi",
  "key27": "3oS1NnMGV1Q5mrXwXJfN5LsR17PVntGCeE8Jy62fFvS8B1zrwD5prVm5ZtDJFy8NpqxcfT3KP6KLWN1Gzf4ixQ6f",
  "key28": "4vS5VW2hJkH2iso6sevPd5Rv31yR29fG5L8rdHvphyQ6SZagMa8dnJaBpM3CtKzHm3R7fC6cep5rpMgvJKW7KSxR",
  "key29": "4n5TScbh3puriFBm7mvJfZkthxUjr54VcatXz9TLcMNAav7vX4xGXksR4r2NDgb1WHsrJpawZ7AQaGUmDwFdvEiV",
  "key30": "4e7do4Twz31TwLzBznBX4Ukw16jZ5jjTE2taCRwFNmx6E2tfKVRfp3evFevvjNWorrsRy9HXvQEKKEZmBd21y8WW",
  "key31": "3zQWksd6zRWrLwDazX9HxYKmcuQ4dP4kMBAxfjkD4Z2qErLXbtnL9Y25nE6nvQ9cScSZRsaGbUsBUuA526fEDfdZ",
  "key32": "5dvAtwy3ZHZgnrcDRZY8dJiQV5ADy5Kc7vBX1XE3gScU8nQQQxftVEsGwMz4QXRCzh99AF5EFKFzckAkgVEYJ2rn",
  "key33": "sqk7KjqHdCxGj4fBhqRDKc5PsdzwgStf78kbCR3rrz6FnG8W1NooqfgzakFiQfGpciUCpwyco7DbXgUHw1yyctP"
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
