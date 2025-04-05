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
    "5etb6puCnhPpUuc2p3HqPmjnj8dZ2Hmq19B1zB5yRNU7PWTKp2tXQKyX6B88JazAfcqLvZutic3wRX9YS8dkJ2Gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MksDfMC7soyRNbhp6iP2R19LYgaREpcSGE7oYr5unziF4hWEz2yqJ4ekhyjybQMqdBEu55WXURp4fmDsrtpqeXT",
  "key1": "3Y8w9eGvmTVjvpfGXTLBptdGfhQxgVi325Utvm5Z5BQDEZTyGDbgzS5yuWECiYnEdMHh24VNYUcdD5PH6HbcMNSB",
  "key2": "4sWPkdYVbVW4v9UZPbt4DKzoW86XDoAVDuFpCf28FqxrkDwKA63Szhje3PvzkCtGuy6y6JNb62P45RkT7hL2DM3B",
  "key3": "2fGMUdBPqgdhyYCkipjdiwAKMK61tmws5agN9N5d7N54idDWnV8tzdWPzDCoUVcocUJNeKKAxosUobt8QAA6Est7",
  "key4": "43JstxVLw2KE7ptrcWW8W93MUhCMdqdSUChWhaocTuK6iej6gNMDzuquMF5cKjgjg9WggWWELK1EGyDTWV6WEnRe",
  "key5": "3mmQuhZqdLS42to6zjv2aF2uZNKBpnw1nYkNejxrq7NE7yDpJz7fZxmZp74wb7HdxJnF5kt4SmLuFkUC8cNWUFWM",
  "key6": "5bNsLqtMAxh5RKBzBLVEeGhqV91heaXWD9C9Qqi2DHE9DqqkguSASMT2Ju83xyAXJLvhjdYxMdcUkPsMDVHy6u4t",
  "key7": "4naqogMZTPJ37T83Nerf3qyRR2kP3af9JVTHRAGwJbYHKSfkBGjQ8ZQsWnZzDZdoapoqUExcVSa6T6qYvfwrCcD6",
  "key8": "EXeD3XqGvSZEcUP791vSxRpuW7nbLgADsaYV5fzfb2DaZoXeB3F8daDa2oKVemKyw6uTCMRBj3CeWiJiL4vJvCa",
  "key9": "7U5CvfmpSECoMgiJWKwQv5szrB2Z9NTfKgsPKMZxBei5zMeHmhuMuzGSJa9WctNLUuHFxDk2yE286edSMjdNJE7",
  "key10": "2zQRjMNFS6ZHhnAEMY7NATa9KziNhaGEChWurcoK5tvwqF3HhToX5QEAqfeSJ59BHVGQv38px3CMME9kfLCrBqkZ",
  "key11": "4uCpyks4FdbZ7dS998gMcjmUDTqWySqv4vvsSgtGa9XDtnSqoPdXGQ126QvdZcn18DmTnPq76xqjKPLJDX6zV2Jj",
  "key12": "4DUCr4vDVqPEMhT7hWLYfogUAnTmQSHKqCaqnJnqTvNqQmnuHxQPYWRfVZBEPwBLX1LVp7eLNQbyjpf6jBVwtiy4",
  "key13": "44KgGFYs7nn2S83izQfVz5HVYj4is3BgMWnLfnX39ZUyeMbFTz4uo1aMxyQxeA6jo9qxSD49tpGQu6uddeyLJA3y",
  "key14": "23MmD8k9tqUFh7CV7emxVcBuqDRxLjNoTQNpV8ToBnFy8968wjWccbJHG7iJVfgjTYHAYJvFFXKy7FfjNcryxE2v",
  "key15": "5biGGAxhdoEPbcd4KzgLuQofWVpn3V24ydZSJ4otfmGhZahHtq91pxvZNJWBMy4hsFDo313Kp9qKwhVNJYYu2tcW",
  "key16": "3DXECLw4FetvNBCTPnA7VrKvPZdBJnjaUcEa4EYvxscYyVPtoer3GKcHDEXc6E7DwiJdBYedySYpURCnfqPwo5op",
  "key17": "4rKrioYGFu39W6ztSFP1wqA2tWX2jxd83H16Sk6YwyWoJh1dXjKgDBAttU4ToH96WiKtY4CrHkmQzaFtpewpvSHe",
  "key18": "5R48CJUoCPXz8dUPd3gdUJwXLbv3GViG6dc2gBXxBAKbYrbdUuxrsRrzcNiJGzx3WPimKTxZwQh68xnN2MfX9rDX",
  "key19": "2K12ZomZUJ97RDFcxmUCo6Lk2vmRfY1FCxBknsfE9LqBFUtRJ555K1uyGDfLHMEqDvbNhzTXTU5RyBzCzWZDyQdU",
  "key20": "4NPK8GN6RuRdxibXxA3auX3SyMnwYzhUVt51bGVhmKmirpB7WvxHympYLoWaeTwJn5VoNfWMY4a7mBaAgzXHsmPE",
  "key21": "5kq57AjvZdDoSXWnApNLdnB6hLWsCadEbhpamvrMCGAByPXLdvAjoJigNaVJWqkqmB7jGPn3zxmBTG7LHquyGjfF",
  "key22": "5QafWD2ZQcjBqSefDcWScqR21WT6Rys952oLwuqKHoRUCLuzvPhPrHFrnB87vwjZHGmZ8z3VmCN9pFp9KehkB4CT",
  "key23": "3veUUAhzwhAyDWwkegVvBdufa8NiewVmNEWpdGAiLNehZSYDJHUSFwgUBy5oVvFJ8hWzdLyrQKaGYA2ysBSLafcD",
  "key24": "3aweGJyHFQQMpbGjJTciFBQTic2DwSR5399Kbz9KV3Up9JVzzjGdyxaK9o778TBMuzmq1ZMkX2BG9fAHhFfXFjYf",
  "key25": "47cDjjfaDWHtQ9WeGiSJzJu7puqFVcY1bpDC1t5XUPjCkqVk3wUvMXuGPjeH92Zsegc5DSVn451oVct8baUcMNqt",
  "key26": "3zcytV9RdUmpR4pHWUx7wQqLEA2WscghTTTG24yBaXeUYumwDQbSkCvuefAKyExeJyGnj1j2zzQQQ2Ko9BupU93P",
  "key27": "4msUkT3MpTpUuqrZt59UWoL4TiSVP8fm3i957wjmytA3823DGDou6bVfFqu7UzvDa7czUS18q1HTkWan9xgaRBoM",
  "key28": "4sk1s8XdMigVMKMDurpbBSf5RotErJg3RfdAdobTNRhqskuMFermfvaRw5K4ftzMd2USSSeCav2TemPHhFSxq4CS",
  "key29": "CaaUBpq3UUwb8JxwkryoA5xW5arGxXoYw97RCyesPARKVEzAoMSs1qGX2ZoMQMpr9geg4qNRpPb4BXcoLvzFenG",
  "key30": "61Wva2ZNc3RKoAmbdR6CRRfLhQpZXaPMxZw68hEDD3FFjLhftMyt1FkAWCrETVGvZMBGPmVJ58vVKcgo44tq3C6k",
  "key31": "2fzGGZJ6q3mXcdWyTYF6LycqMT9sXxWbRRu2DtsbY8cExBt98Zhu35i1SXth2YQUAoEymjqM7hnLTrtH9x6FY65u",
  "key32": "32LBZJNyFneeBtQ7CRM6hpoF9kYpehZmXJqLYDrN5LSTpChrKEN2S4Lh5Ug8pATKZGx8CEfsMFtZow5mqRNhBNNx",
  "key33": "57qX6f98erS18s4e2EHHBc8sFXgLgxkfjyvUVzogKZfGW5XHgs8deNV8jBoiBGWDpbFtmoR7fD16eCUo2S6ncvRq",
  "key34": "4gZF63ykzXbLkxphxvjfJpRaRg6w64HU3P2xdCRV6DjAGwfYqTaD6nkjK9TTHdYe7LKm4Cm3YAXpgmL2ZgkdDAdD",
  "key35": "3zarvz2nGfx5xke14MzGvVi8kpKqmzPPHguxLX5TbqCnKvFPBTSNbS6eMUA4mYEJRoM4b2fscHaUj9DXkcjk8QWC"
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
