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
    "7weDEmUDUxUbLke8S5LuH2dGJbKVUK2NWvzETYsQTVdgEjeGSwAWf7r56CEhkvRW3Wsv7hYV96giybRGvW3LJAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dw8KRwwnin3RDe5wNbTT1bN8A5Jo9zfpbjfsTZW1AmxbDHXXZHR2Ln7XLUhnFAsRwiM6U9n9LnG7MwRmEP4jvXx",
  "key1": "4FDrvK9N5RK8Tgwvde9Fnjq8SUrnWC5KgBeFGixi8QHSWcvYgwGSYBEn5UamAaZvoEtKWv8fMoxzNPDiJVHDHSQE",
  "key2": "5YQVzLTGQgGKmEfzinRM4iKBiTMqRA8G2U5RYgnJHoio8SZPz5rw4MyCiJ4wKCmAzGzXLcDfR3f9UQJQsgbdwxeG",
  "key3": "65Zw64V3NaBB8rqcExd13yQPiVx31QAnnsrHzn4LADjohV8rswE2poTZt28xnwScd2AU4iWYwBaGXTA3YzujPtgF",
  "key4": "2pdBPA5h4zyYb8LuoYsdWUckJxuH8TtZA4rUX4PnJqCpiZfR7rEN22zqC5KRweAj41dL3MteDVmgc9nzKuemGpBH",
  "key5": "4ANaf5z5BkWUZWcwFiopgiX7KaM1sfxbhDt8izv67URRcrEwPD356Pcan8QVivqEekf2gkUVqqLD8kzhea9B37Dk",
  "key6": "2ALjoAxgNXJbqv5p7kX73x62Dbzny5L2ukeYRpqVWQ8juUD4rPqB7dAhD1hAhjbdR9vfmuXsHyeAt9oQo4T1W1QS",
  "key7": "3yy6hUo6nyrNP5BZSZPrEo3jaFQ6F4Etr4PhQVPHXhN5oc9fdhbKDpvcaZph9EAbkHDg5Nm9Lbk5qyQCebuY6vpG",
  "key8": "3o64W9cJCFWz4i5w9mGnm3LFf18FYbFNAuQWwpVJaZuRLgkAVS92DaqXTbL8zb3AfMbiHGhAtru4oZmANWgVQp3x",
  "key9": "2XDoNPoopFTEoqFi8x7zu894cZxKoQtcnDJ2eV5zx1sqkuTeiFUm44KBpSQWA43osjQAe7zwUdZgw2dMQhdzfH6w",
  "key10": "ozVRbxyEnrBUfPkAvV7ey8TuM1CENhHaAPXHEFc5KdLytyHZbutwEhuZ9QpZ5HJ3YwgQxHkykCpHazFTfiRFvF3",
  "key11": "5x8YQBLafiiERpKSpnBiEgUh4ABsqBPzboiJAF55hFrZ9NKKeFma6ugZ5fT79bZFA9Afdyn6KxnHXs22762f8jpM",
  "key12": "4efYf2cGmmmiWWMKSqv1u3zwDfSVHYYw5DSgVu6hUeyQtQUEc4AqVMxkCYwsLcKEGCkbrxUV59ygLe847mzAkX5c",
  "key13": "kv7QnCpRdKJv4pnr5GvPokP8NqBfdy9JbZ6Pq1noXutKQ4CbvPK5pT6hqUKca9VhJ9yUh9pEGjZ8wjjUSV4iY5B",
  "key14": "22m1TC64EvkNWwn7FLbEDoBYbnBxcMHszk6UCamGVviTy4NCFEZAnFDmwiYeLfoFCZTYbAATnDmD6vJ5Z2m9jNYS",
  "key15": "yhcM1GaSUMJjLjHmWevphSg134Q1BsJwuh5fGQJEnC5joADkVdiycbbN4DtzgEwNfnEb6DxS516q9ZeE7GYpfhd",
  "key16": "3WeacUWtDMaYqxycHCsrQyjXygMJr5zjEMxYftuwTioHNoNsQhHdynMU55tNNDqkxLfZwvJStm4FGTyQHbUbad1n",
  "key17": "3ojMRrfWBTqbHoSdmGziscceU9v5TjW8SnAB4LqVP88nzkwHkmtrLqFC7Mg6wpZKYZNnMFFioZ14LxR6RpJ2yoQj",
  "key18": "wiRzCEB9T8agXbXkhkFM5r2aFsiHvmKSrv7iDGDw9rJyrkJDkPc2Lmp5M31gvLbHSJQBqzQSgAaVJfDgffdSuBg",
  "key19": "5pJajB4PkNkN979BjrqA1cvbBUA7BKw5p1b3qQTQk9rPDEGGWKmAXpMyHozg7FgxQdEUzg8pe3ZE6P91Gzx7Z86i",
  "key20": "2SNJE15CUmjXEeTBaozdaycxXuQeaLdDbguFh638qtqXX3SpESXV4GCN5xq5TxL133UDfE857udKkKifGTWvxvzf",
  "key21": "5KapfnQ2MZe9nXyBMwQRf48bzhfdbs99tnD9h3oyFdhvAC7gYGp5MERueuS359WK1aNXgMKvcHHCJdwVn3x8mC1R",
  "key22": "3NZnyc79BMPQYwqJS1B4jhAibXmyZ4SQhxr6E2qixwQ6rxGkrSxBdu2USdTcpwZ1CyvVeNhc3eyCKPGjveMTi4wD",
  "key23": "2HiQw7SDZR2HCEsYRq5Ynkx6YTVEr5EFYA8JiBnM539HY1gNyAaUKezhQHAriRdM4ByLJMKxoNDtsndbgsQxKjoF",
  "key24": "3yJF5WbpjsnaYagb5B3GKFjgLXFGBA3TjqmCHKT7Z993AWCJefatqM7yRS8f7bippLGaPXAgSM26oCPhEdaFiiVY",
  "key25": "4yuzkBFZDw6XhSLnfWLegjqFKTGut64Y7v7WeqZWBq3VkHwLKXi9WyW3YvCeDtWBTM24DANGNbwpZUdba3TXYYUP",
  "key26": "4LSZbvbdk8NaFdNuz4qPF2chtUM7Kh19qzkdKjGAAoifaVUcwsXkTNZych1KWP7r1gUGNumiQG7oRXwMpes3pGCG",
  "key27": "424HGNtDu9eSwN43ZM4FcaKqneivYKqaen7ERSAj6sv4yG8FQLyUdHqAYMsP11BYGoXXmPBCBHxYVSpCpA6E2psw",
  "key28": "5Wj51YHTtVVLfjfo2vE6tDngp5EVaQfgdoPX54ZzFZ2rd24bcbQkyHXXPdFGg4QhfzJXsGopxxTCHcxFe3qBXM79",
  "key29": "2bgV4Bp5q4m9m2dPjFzM3youLQqDZH7hYHbYAeD7SXK9NyLyMWBs7tLCzyusSbunA57SJAXjg7haZkE914tt9XFS",
  "key30": "5ERPioUx1ozBmpKga9ecdQ4e9Nu3gbXX573gEE8KBy7f7SWWpTMvF9ns2aU9F4HEoFkhsxSB5v5zeF5DpDaa6LbP",
  "key31": "3rUx5D8kjhZFXLpcppCSnRiYTYmkGos7mymkLqMXQcRMhJkxpcR3MtFL4NgoYSm59uqGX8n82r1X6H6yABqXv5J4",
  "key32": "4SQSYNRrcdvGafHnJhndG9w921jxh66friopMXZqNGbK3hiz5z4Mxpgrk4zfCjeJBXsfvp9PPNqfyLM2KoJHEyix",
  "key33": "2oLAKf8Coar3uF6HoijmcWiDxjFKDAB9eMRK6Fi93VU3hqswZrvbbL6cNCnhK9ryt8qEdThuRiMZAd596fvooo8L",
  "key34": "4HHxi3bbjnxdXErAWnKaSzHDy5FExk7Agzp9ujp8tjMN7K9EnbNbYMoYoLx5BkuqZtQjjYBiLBEtPqs9VUgTzegF",
  "key35": "2SCPKippbNvTgASasSq9grGduauvFWX5kWd8gL6aRot8583aYoukuwuegN6UHNVenCvb6s1KmBPxt3M9Bjc8ftB8",
  "key36": "2KMLSNiBEQoahUfA7jgtD6e5Qyrx1VnJHjq2eNV9RKpvoR478kN4GjBvkERTat4QNASFaLquLJFuPm13Lm1minnP",
  "key37": "5iUixzdqoyFSkHgK8p5w12Lfy2HjnHFoPrSzgYsVUibxZ4YbapyjM9jTNCwy8wBdZnHM4y6zhSTv3TedMa4vd68m",
  "key38": "4uTKawo49Upf33pstyKspQ7zRNtc9uzaqDjKd6nsx966w3sdVnBt4Dw2kpZqneYmRaCyQWS8TkMBvpKQRvPm5Yam",
  "key39": "421vCCx67tQv4qfXvcwiYfc97dM8MFwrz7ngyif7Atz7LXWdPyN7S3AhAwphM3UouL7YBZx5BNM9KDH4EdrJTK91",
  "key40": "FFBUmSzVjXZvFLdRUhQRD9qboKGF3eqt6ZpPhXKRKMTm3UMKLkCVQswCFAjfRu2w4nq12xbAcXEuXySMTKSeWcy",
  "key41": "3SoNXJtY8kHCqJcYAvnx9kPbWkGQWaQdMccaHXU5c5QYQXaovzoiHUwRPZ2sQEa8e6P9PuyCGtECyjGYEsgSpB6H",
  "key42": "Xns96Bo7T68MN2kk9Q2b8gSSoyqb4UqizBLCqrfmC4eMTRFG6hnjbbUB6fR7kq2C1wTk84Bht6P9fbHUekVofzo",
  "key43": "2aBGmfXTn4tisVazn2XbidH8zBo9s1cMgq3AVoCnXzHNzd4gBjaBkCfDUGkAW74XMB4rE3qJcyR3TAfxiHfdzYWQ",
  "key44": "3Tods2hgAyrsvT1eH1cdKFUaAAUHoj5hB37EQ7NtnPr995tsME4u6bvekbnm17y9VvDF7xyTjtmBz5AHBxAJwuqV",
  "key45": "56T2T2YrprPEyVe1kzeUxBuxmCMg8JPAjF7bgaGjZ6Ax8fhLYp6o1PKGYEHXesUFGr3t15jSoHRgERio1tQDCpHY"
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
