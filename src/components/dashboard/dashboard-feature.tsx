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
    "4AGgydvkbCu1wSxpcfnmJNgMbYPB3GVRJVuyDevyUhZ85uXEEbwAnYpK5HdnCSLrD457MHgKMMtqpoYMqzSNzdmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mx3wbJefF7Rb5NXJUH1MFNC1GXAHfDNkoQWpBaFtPWzkF2CMc4nhNtT66dBEoXpKCtzbPp8g7uSZgzEXGZa5gzE",
  "key1": "369jeU1k9MNQYTuSBu6fSNuULHDofFDG4LE4Nr7xRSZBTLR2jQ83upfna9dTm9MSzWuCaJeo9kpRoZjtBU9zj1TK",
  "key2": "5PWagtfHtogneu71WS6mZX8AKzHV72eCVmCxd5BBvXn9FnoTuXXtkE99sovCKhSKwBjqtHQTvTT9UMciwLeDrzY6",
  "key3": "KhrBSDtdny7wXxWTtsyRRfhiNJi7Zx4XmxHxVRTT67iLDTpNwX26LdFVsZmFxupp9LpWR999iC3TYka29RQrEcy",
  "key4": "2e1hAP6wT4VmXJFmQk9wC82e4VVVsLhPe8PVgZHUZNagSweJCMiYC65dEqVnXVq4Ht8kgA7qq6DKKxSD5HaRqipx",
  "key5": "2vgEL2162u3KMBbiLEZTded1Ss971YYf4XXKBAzSSbR34TuU7VF4npZfxW2HxVqH2k5KXn8tNUPicFgqsC4R3866",
  "key6": "5QpK8vq9xCuMMvwEUqsqLYcDUAP1hoPY6B67JhJCawgbknk6KP6M6Leipc4MYECJMB8FwtMvefpvQ5cHYeQXDBC7",
  "key7": "mNvK2ebvDoFBhFaPMkGftgarS6wkEBRmMnFiqcvgd2898BQqoCoxnF1sAyfFpv8W9BQFvMYmTw5GvyVZzj2YhSh",
  "key8": "52YsKzSmhjM7Gs84m2eRdVkJ8mLJYiRgQBvmi53p8kwciz827rHahWTJUXGDTzTFea9N1N9qMaogF6HRfCQKMFFS",
  "key9": "5WpEgSg3X7j1dF6y7BLvGFsXg1tjVBcYQLt6mYe4Ekh28CPEuRTg8gwduNxTEFaS7jfx7ZRgdZiBRw9WZtp3koGm",
  "key10": "3rwStsS5rsfwqSEr8TyWnjwHGEmTfxojUffKMVzAF6L5zCf3VTHcpd8MG68aUMSgMffByy3dUqRcr6DztWcv5pQV",
  "key11": "5FY7Npha5YcdcTM4yUHiUqnWpE3rv3ZvChW2r6wvbWTtevJ44t86LbbMHFmGJQX22Vn1EAs4MpRDUXi7QAMyDoG7",
  "key12": "5JBcMo4zKEs54QfN6nQxrq8qMuXDsxuWyRnsKPTTKxGWr38EZbGGHQmw8D3D2y36tegowKdeMJmbQ6LSXvwyjXtm",
  "key13": "3VVHmP3F13w9FTEhwgnS4hHGT4XMj8L8jJq8poj6Ju2m8NBAtf1q55E2VoqvSPGhGYnyN8N9MPMkvizjethBfUoB",
  "key14": "296x5z9wrRp7c1U15o2ggcXPs4VvGA2GSwPyNCaathGWaoU8awntEyHU8wzCdW2GWrqSuP91KkhbVrvpqmExAzJW",
  "key15": "3WpEZpf6Km8z2uXLSmC7Vz4yuFVqxTLVGDstZ7tiEGRBz8F6mZfBxKXnsFiyrEWtpbJjaXsj75GZeTEdKCGbqmaq",
  "key16": "2QFhuYNU4Xq4zevMZ1EfLwnfcwRSy9ky4vL6DoK1cgJTgsNGXZZC7AKf9wEn3cPZfBbuRk6hi6EP4EqqbfkaAhQs",
  "key17": "Qk8FdpqgFUbM7Jaq4YrXkHmtdptGtygaZWc2AS5gWDQGQBV5a3yp5K5kbayywTMZqpohLKas6VEmQj6vvQDBHnQ",
  "key18": "3wH71PkbFeKjyhjMYi9ciLtw7Fvhw7LkXoRmo6k3btqXRTLpCk4xGpMhrxAw6a6qpJbAg28PLbFD72xDGXAmA5BX",
  "key19": "4NtC6SyotuWHiUidJs93N1HrMMYJh5SfmzfbGCx1LLVLW1j5p61RWfVft1CqF1Sr8u7k1dKXmiBqjBz84fkJ48wJ",
  "key20": "2Rd2bw6rbQvHCuk8Ji59kJfQ97uDGoXCbHPt16wtptS3iSX98HbdgzE7PCyqTSoLbtdzrmZYPiuRvsAZf64BmSm8",
  "key21": "2KKNu8aqHH8WNJgwymd7Dfar2fWeEYeYqnyd9wfQP5GkZcfUXRLkQs9wV3T55qjJF9NT6H75PACpgnZbQbUpxP13",
  "key22": "2cvd7awvDSiQUGqyYuza35PwKoqUUYsbfMBcrwmK9BfNt522YwJ94qUqMFgabc7SSq3phyq8vrokeZ2Z6P2d7vCL",
  "key23": "5DdvyAVRWgCTPTV6Tmi2eYzFRjb6HJPHKHxtaiu1d7dbUHpCgr8ANP1WoTKotnziM1DoaBtPiGgwGRRZbcQ1u4v3",
  "key24": "38V2ui9Y78mgf7YtF1ZDWoGvtLP6SH9PKgbNF2kiQ9embYTYDrU979kgHd9m8DqN8vGZByeCMuHLEiL3csP7ptPe",
  "key25": "5xPwZ5vdXgirnzpf8kydoFC53NsdH4jfhkK3AiUwHUTaYEzHwHtePddArXYMqVU1vywH1uCKoT9HkkW99UuH6aRs",
  "key26": "4mRWr2cwAthKSbgpQ1ukpPaJjbYJ4YQERpJCWm37hthCJ5Qqukn7F3EnuQJtGT4JEppiY5vt65v4oJj2WzahYtkE",
  "key27": "4E4PhfFA4H89cCSvhcUfaAx4kPfTjk7xw8f1wB1AbpBPqoVniCTQCpuVguAHcUAUbN39AWVQuUJ5gPkJoZ6xyKck",
  "key28": "31B5BCmbDwyiZk6cYg3WeT7kFcFKpbLHHQxbomvfiirvkUvJ8iNweyUnyRQoT436vutaqkpWpmnFVvJvEK3eVFoL",
  "key29": "4L2BD5JtobMBDcfRUDksifiUk7xcJUuuizkszwtie5stdKp7po2FNyp9SuGJB6ymBDLYGxCvx6DP26coqUTh6JsJ",
  "key30": "3qRdZEnyWnjB3NSyPb6xRisKU8Jx454Zig3NyPBdzJGjZvSQyWSxQiTmyqLLi3aZN9c3tJm9iJiMdCyyYNjuQj7r",
  "key31": "5ny9UxGmSKmPu4HL1tAG68dFchKqW4yTLfXAGC5s3Wgu5EGBzVKtG8ejmZzDLmm8vkURVBeyjddkXVMtu7wAFt69",
  "key32": "635wrUCKG6YntAmYCZjr4qVRtjWwa49sNDwqmxJPeb9iwsoo7nzVpg14L93xHysHYoL7KttFbjM1fR5adkaPtHds",
  "key33": "BUof93LPfjCE2MUZGrX4dNL5mj9J28PZ6fhWpfpc26KDkRWSfVdPY6AUmZRkHPPws8EoS4eDXBm61Lo3VgovLLA",
  "key34": "3AsgsXJfWVeBmH1tdNitJcC6qw7W3KDeDpT3FwigfvkZfdwbrxx5V7Q14Zxt4BrCL17DRdwHSa9X7g6gkXjib6vu",
  "key35": "3jt9vMckirZjdhAEV8WQfxLKhUykZBQRMgZH2VN8oT3bhJvRUs9FnMFFRq6VGe21LsCjRLFjZJQPc7Me2zY3XybE"
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
