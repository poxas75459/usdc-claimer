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
    "3zBDP8vq8aeS6NTjwcQjwP1fVTaEMwYRiCeAgGCJkjiDY1BM2hx1k7ZWntPrAkmFttBVSj34SJdKV2fnfgNKrYbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2at53zzduoR7gFPfQm7rU7MPkXjWZcm98pJ1uwHkVLz2CJBbejUrv9Z4nHPtKoM75wSDSZBd36ymxd9eNW1WYGSz",
  "key1": "48RcFiRT9UttPAAHJgiqkPKE4zFWGDw17FAc3nXoA1Hrff7HaMHhg4q5Q2bWqph9LVPLkQpUknBuoumPPzs2YrME",
  "key2": "3zAayuqhr6k4XNPoVVGNpEHBkkoUvUMKhmnpCm1vcfNGgqkmA7Eumm8zam5mwfwCpyT9BKHMHuaZREWh9E6bgeox",
  "key3": "2a95LoG4hxLks8DUycMJ4PV79f7ct6akMSxPXqWDYtx6BGFAxdnS2pTusLV2fFW561G5hRXvuXKZRmEXFDEGobyL",
  "key4": "2u8dK5gzXkPkcdiDLcvbhmtKvgHv5UjBcxmJGKvWycdHhZuAthwgNMswFrfAxY9QpohuLE7bHFvqumfqVrW8BrN5",
  "key5": "2YxbX9eAE19Cw3BFZB2jxqZvuvC49jhmyu1VqJ71cS5aRqae5t5qYdwFJygYS6DnGSPjFXFBnUNvoYrRp1Z8rXnL",
  "key6": "njLLSSRzmndXoco3Sz9dqg15W11ven2LfYehAGKW4RNWA88AMGJg8RZmLfpuBxENwLtaumDVeXLXZ48VnQ4x65X",
  "key7": "31ciHw872vyofAnrvKYQ59fespgvo11V1TLJPpo4jr8AWWDKZxdkZvWTGApUFLCPQDbWj5EDTw2FeJzG3dhrsxf2",
  "key8": "oUkEdh59ZCAz1menoXmXEyAaZnV5bMFZ2avvV5Z67UDHyno8rYEanirMcPLpJPi1j53CTkSEMG7FNTAoACf8r1z",
  "key9": "3F7jG3KG4vreTwpFdbWhxZCioheRph2aMrySuJJd3xnv7RzWibG76LgxV862Uyjca9r1z4N9Xu3tHkge2nYYW7vB",
  "key10": "2cK8h8ufGb9vDJyuRvdYSJKJCLWGXgxQYjZoxXqGYGWXHXieViCGiBBsqQzDjksqm7xg3i5fhuWUj6Ei1RcjBqGm",
  "key11": "5bEUvDMMZxWZTiw7WE3qCFJX7DnSDdNUjega4s78WfW4gJhCr2WKYV5TpJazPyuCKNwjGMM8cWCXJrEBApVJwnUe",
  "key12": "5KTye3exwxEivA8Am6djWi3jHG8f5gs3w91kqfC46MKF6tizfA5dv1BTtu6uuCp4QQLXytMhHE2NPT4j3ZtAPMzR",
  "key13": "4d4dhGLMmRhGaGEdDCbYYK5KmMQpvLjUAjVKNDgwV3otxqjxAogsgyQwLp3WPF9ezXWrSMnxDYt3QEGtCb9uUrfK",
  "key14": "5ZMgd7hBBkFUQvjwZKGiTCQyVJp9NSKpd3QQSfNSXfAcVmnsPZEGfW9PVCRm9VLDpkxoeAYZCxxV96cPXqjfjtgd",
  "key15": "5BM61H9wPqZ4nznzWZqKRhPw8fSZLSNMzxsk8XzbrPkvEDL5gK9d36c64FYV4dRPWvXKKFKy4aBZpn51qB5Xv3Ur",
  "key16": "5xDxUU3LwPu6K2e4bKWAiezfAuVip411wSwVvrs6Womne2rDqekmwwnZoaxVv9oTW1Lyym14bX4MReUDUtD5higw",
  "key17": "3FBvKfBVFuDhzR6Eds81FBokjKykPNa9SWtCwTvWZR5XssbeNXqLCFY8u4PAeYRDxgFkgu8C8185LY1caT5HiwhJ",
  "key18": "2Jp57N6B2pssQHfxK7k3vqyo6EgJX4WUPphdRujXy7bBaFEHxugmqiM9R44sMUF5AVgre1Ry8BYP8PQgH77fHQkX",
  "key19": "467FZbESHzgYRqewCZEMMkxSVgjK95EBygJSpUQGmfMqQFU85euY4eujiDFQazZumrZwb4xrDuV493Lvvdk5VndE",
  "key20": "3evHwq7gG3qxTTG6YDebbkgnVRZGzmwkKSy73gyDCw9CQMWX29kLag5NX9oCHJdRKj8YXwQACWYsmfRpoWm9xyZu",
  "key21": "5xwTYFkRaFeBwUP5zuyTeQoz5Qt482QqbsrfaMNj9eF3mJz1rpVAduDDawPWQz2xFAhLCooZ7HDSjFfcYstaEmmJ",
  "key22": "5zZcZa6teFCAtaTw6GyP3VpJvh5jGH4zg7HYpRbXUoPAdVEaGaGMP3JGncJACuVxRjwsqtjLJFnmbqqYoWBzSehZ",
  "key23": "ZF1zNL2LLK7Eia4dHGxdXq69tqAdJUB1mbm1sGGDWEoiahcebP2SYaChEPeGEVjZsMiyXT1mfM5zNBmK6zibezZ",
  "key24": "EGxZWguDguciBGCPrK9FnEeXsZyvsNJ8fGxnvqYa1iJnfirN33e5V2JdVunqjCCjbcL4uEKHqcsccRpagHhsp4T",
  "key25": "2BSV52vWDYknJ8eCHmzCQKYvek5DvUgZsK8g7NWiu7rWFmBdLHhfZt5WchMMrKPxgtHi3t7xvU3WB1s2TranNxjW",
  "key26": "5wKqkGDwaiLSgYYQDQSvGXQaQNvoZGQvNQEuE2ApmS2gwytqwaWvPeXC4u8HzRhPxQuVUZvodHMBCw2yvfkLNscj",
  "key27": "2cViWBa21pKTc24N3eWohkmT2wqiLB6zdMF4Yu89mbVqvrLjFoFYX6oChCCR52dN7veQBHZmGUPffdoE9vZEGQfc",
  "key28": "dh969MTbw1jt7HW76K4hAAcUA1HqQULjE38B7S97KEYJR9PvCeL94mKmcmadp6kDqVE6uPWcoeNBxEmQbeW6hev",
  "key29": "9X4md9EyZ8Ye7JZmB4aRqKGFGHRfyMX52kUEAnNVm9VZPNcjGEVZ1ZbenfRQjeWkM46eyu8A88PWgJjiBKBtHRF",
  "key30": "66XLHFWUX2LqqrJFbPywEoATBMnN4MMjBcNFhQDnP9sHd5vUETVJ63yixSiBPJjNHtjeUaEeXREmYkF4tEVoCKdY",
  "key31": "2W9igCwnqcLBu5XRcL4Jw521MYuNPeZ8iigYCEiUa4rFgED3zHJDp8NePZKHjxcQqAmshic4kV3XWZh5tPJyBRPu",
  "key32": "iogXSgt7Zpcy5Wz14w4CoCTHGnWTeVFCpP1VfDjNppEqvvqNdRTkRaQieuitS6skWKhxqccb1pKvj2qjGaXNZJ4",
  "key33": "SVsWaYsjpQEyE4S6rmDjZ3xtX5FEd48yGjNumKcaKwEZPvY5pS12JeWUEfJQjjBytCU5nhuDDvnsjEuirYkrKip",
  "key34": "7evK8ZXBzqup4njfR8o6WHRUAD7bebP8qk4c94HD6MGDNnAREiqXFeoNQGBihhbLqupqkz99vUoTw4LYFDqY2Nh",
  "key35": "bRAou39GF7sSNi5S2zr1NLGCcTSotMVknwQL9xqdLc3MsauKKHdLpUfjUrSK5DnNkECZhvYHHeVXRHncT3aBn7T",
  "key36": "5ke5kf36a9AWXw7QXy8wvg7ibuVdpx921qJzvEUFenneAXCupFDz5tgkXDpJpwFYbvNSSH3G16YYuUBiMywmq4xc",
  "key37": "5bqoC6e81mgbZKRHjcdC5XGmpc1MfTp1MAWMEjQw47M2MmKpURQnK3aDkyksCWPdtMqbXJmDNNLTB3uTrxXrGfSR",
  "key38": "5WrMxsCLoaf1K6QhbRyxKJ71VJ5Yj8nvRZCXgSJqY7d64aE81ttAteHnfRJ1WqVHp4bMFqeK4rpJuLs4YfGVaBZp",
  "key39": "2ccQjdHa6Moc2Bw2Ef9hXCQTnJJKSuWGLC1A1RX5WWjxKkZEGPaAt1gv4Edp6xh3B8NG5uhqr5Gf7Su89gG36Zuk",
  "key40": "g53VVrtdakR24dP8sxqJTDEsMMFozt9vd8upVc3qfMCK7MSDS7gAqnCPUXGx8xghGCuuzx2U3py4DV2RkE2HG1v",
  "key41": "2d6BXmqbReigWfveMhW27omiNVbWRUP8Nn8vUydv1GZxzHM9fGmwDSx3EbhRKQy7nLEFnWBnyHodnqo2uszrHXdU",
  "key42": "52yxv3nZioShSQGJNHL2NkEE52YJ3St2VVSZLqzKwCRTXrmiJdDMJpdrgixHPi8nBRqPVL9MST6foWe7eNesD4na",
  "key43": "5Hokh5zDW35TN9FLAQHyKSLX3qJoeVe5BMPTnFUnAr7Y298GqFeNbL5SD3Km1fyCNZbNueFbdktbGRczd47xntRQ",
  "key44": "2c352QMhRDJQYM7F9dAQY1jGEhGRtaQ7AVwiAZ8uzLa9jXuq8XDXGVmkPUrL9oS9h2F5Z38jHGAz2qEYEqA5HWtj",
  "key45": "2wZWkuJwZpW6AbAuLdgvVwivqDW7QQ2eX6DZ3WsR6Sr4HFan3kL7ZhqrpqMyCP8vuDMxTKPTj3DX6drMooBshdpj",
  "key46": "PyvDQY2PgV7YNtrjJAmWAKtQ7QUxSZgxtVptmxMeUKu7kjqxnQfeyaRbaEe9Uhj8Ksqu6LEvjq2J9zAJqTDrmMz",
  "key47": "5KEZn7z9FDt9VVsUUpguKbeQNkxGob7PzuzRhWWHG39NLznoX29QcSmfLLYvTnKxNAsCuAkUBkT8t9xhna8MibZZ",
  "key48": "3iqVsDCKj7nVCwSFXb1EdMFzydq8tsTBrUx9mjpC9wk3nQhCMXTZLdXhycWJwzU1uPg7xLPHxyqXxq5w2Y9PgidK"
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
