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
    "2AuKrzxcHisDZqiwfmxvSgu3PWayx8Lg164neM3CYGHNi5ykwDcqbPscwwtSKhqLqdz32f5vfRb5d5uViiSmrfjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q2GHpuwXVpF2CGipcpmD9HcxUc4R8f6Zy6Mnjw7vivVRTjNJXA3omtsXo9G7Fxwg2h4tgD2jufzMR6kuxLVAxD7",
  "key1": "3RCxdXQfZVqzuYvrrBbGVqFZfSReJHobZhwpVD6cmSjeu6P1J6gEhk9NHo3tTmHMBYs1SSpQ5m5q3spa3FcdWZ2",
  "key2": "2o4At5PC2FzFJhvCLQFUuZ186Nm8wzjUULiagaGwoSF5j9f38nRo17meqYet7GkHuujnc4Hm55JH7EmdDGeVV6bG",
  "key3": "4qXYFEAByxyM5YS8KjH2jJEibi6xiptc7dibDKUdhovMMmR4W7csaLZenEFhvdpUy1M5rj7Z4jt2DPEC27ySKvz",
  "key4": "K34EXniCA3Zh5pfyfgai6ZLZBbN2PrnDdi8gidtwe2mymEYxd5ARpvnVPZVt2aAeZGWJN8STdZMqjAu1A2H7Ro4",
  "key5": "2Cqp5gvC4rYZiefRRLQb8Beqx8isT5yPCyJeH2JPWa176uqU4PDFqv3LpcgvU4q4DfZgFCs7kmDjCkZNE1tndaUY",
  "key6": "2agTjuKwkEXE6CzrfHGcnKnmJfak183Fdfkw6C5VksFEdN3hwKZaYe6X61mun9H3xuFNHvmaV7oLybsputGbDByB",
  "key7": "2BWMTSJNDeNVaV9QPExAKia3TGTSdcSNJkTLyn13iTDx7tN64nHnc1zWZMW49avKWKhBiFHuwFJEqtNMTx8ZruGM",
  "key8": "JPRJbqDy4HtMBq3bFyywuBFzw97kKZu7MEpxHXZeCSDoibX8FMUEyptsqVt2rxcBvL8bBz7YaGARzyQvUBd948M",
  "key9": "4pmYo8h9u85HY3MDSoSwd4kSSSDLG3Rf9Mjk7t9juxPcpEgjSeNMGN4ScSRrxDiPPeVyzLB3Lb6snue8nyVYCBei",
  "key10": "66siSFViq2admrFMWBNucEwWKv3F5KYV61DAEza7azbNypmUqn5NHEyCneV5RcFPd1DWkUpPMsYS5xLqvm8jPfWs",
  "key11": "3ZrcWEaHck2N6LGhSR1kbanRKGaKPySNnWNF2Ezz5d1x2ZWd5d5T1VWgTKNsBBtgR8qDhvtPMAwj1YggdYTMQxLT",
  "key12": "62GiomkvjTnuNLCVjZdCVT1qdYBJuwjJgBnbqSFYF9ewNUnMMJhNBGjzJEwsJ5MhUvrNsMNz2wjkj1Ny6d8AmKsy",
  "key13": "22sphn5kAnR7Nc2deX3yU2XtUU6rJfu1j5uSZDw4SNDJEfkAQy2CYGw3hUTfjdwJT1cxYtP5CKuveBvVRcTTR8vv",
  "key14": "Xbrdie3czxRusujKMP6unBx24YqLmwB1d5qnaPZWyMZPRX9eb4ibsPWVENc1Tx9CTJVjRDyLYJgkM6yY3WA5izQ",
  "key15": "32sXHW98UW8T4REc78QENHrkvbBnb5RVYmVZQXszLaPoSPsWmY9hLfyuWE4pJqbkB7ch74Z3skkiKrbSsYRSLDrq",
  "key16": "54LeFQor519tT3rBtjqfnds2mzoxUJfJNLVPGR56hipdydarmtU8rqsrRHZhDPo4AzCJpvrrfCqCFjzLmr9yx1ci",
  "key17": "1SBv6FFVwB52bTPJeu7fygLtArwrq3LPXnyPhBvvP2me1vREDzSRp3Zh5kx5udNqxdu2QAUTgmFCM38yjXB8r2",
  "key18": "4dBRWUwHbtpoJzGz7ZMHqvwiHDMUja8J3x4dm5w4roe8GDQpdVDDXx84CLQbuUNsWYQfmfaG6ewT9WZaX1BAC5X1",
  "key19": "3pNpRJKryYUEJH2XP46j8SdAvDppYa77ZDY1gd5zSTWuez68MHoxKNi8xcS88SBaP33t8vuy7CHwrjvTt6rNnJAt",
  "key20": "4Wjz74v7y6tYgo417d3pLVEdCnaRNa6W4NR16syuoQievq7T8NDeuS5R78kX6rUjT7N8zocthjn3yjmytdAZaQDo",
  "key21": "225veJWtn5yLw3NVw3H54WwSLo6NPjyMsFpN2Fa7ii76VTX2Hw6Wx5ko1bpp2JWXw6nXnZtpjeXWZ2HKg4Gqj1Ui",
  "key22": "3BUsnWVXXHiaNAhRQoc6b8HGEMV9cj4k34Avra8fc8qmnSM2XMNTFyWejYCz7YuaPUQGVbMbiGTWWahAUVtYAw2F",
  "key23": "2x4by4DeZ72L77X6YttTQBdRw2jkRvCSz56uuvPkNA6GS6nrwrUj7Wn71wH4ZHRTKrLf5GtPAmN78rL8s1EtcmPV",
  "key24": "4snJW1a2ehCkmFPSkHmCANfSWqYGnLirMpkfJfTbrcFhk7XVNPm6sSS89jtxZsbHQF4u2uFxgPnY3zcPU1neF6b8",
  "key25": "3yn8W8aocSxXx5cYpuaJkrWnAQJawHt4BYD5h2xmer5s4hXWshu7oML7KDG1o3BjJKW1qHChnhHhiSjSrdrgA9zd",
  "key26": "5c6BDdkEVVJFmyrF8VAhUCNrhonx3LVkXwKEyBUvXYVr6fz6tR7W723nG8qYmRoqadSayxKK6hpLncargBB1umsh",
  "key27": "3zLyH734kYrQRA8gjPgwcdH2vBa4A8Tf7r6Rna5djjCao7fhWUPFiCvSRufBg49MFUfvATJQ6Yqw3nfZ5jFXVnQq",
  "key28": "5VV1XAo7hib9igYxhgjenHSrSYoVzSWwSqAiPD5GRiSNGZ3W61Zp5GrT5N74fvGSfPddp3XYzZMhsFbGYVvpfEB6",
  "key29": "61gSvNBcojbadWMMRaap1jStZMcXr6vjwMTeWd7LjVjTxTnPnCpDzzMHb9MiTM8d4qiuLJV4wdkibTe6ccogqirK",
  "key30": "LzcwYXHUaZFRNjAsU3wy4eowmgbL1S5jonAd7NwNemSZCpZvje1uWZUFzQwCb3HoJii1wcfB8ZSzHAJu2LJbtbG",
  "key31": "4fhmxDsoUztDE8ZvZLSbXszagYYia9yFAZmCA3xnu7hw1pFg26aGuPbkrhk7fFqvAjdC4DwB9R2EEbRJLzHiLpvb",
  "key32": "yMyiruirAe1SaU4wFWRossDJA5whDcXm8BPzv3dWBaVVAttQxddpPRWYAoduyvV9iWDSMuJ113qZLQ3UatbkTt1",
  "key33": "2gegqgM3sjrM3E7dZgRQxyVGFtX7pFK3QRwpdiXWc5ZFjEC8T7V9Ye19uar4rvmHtVnqJrvmZQ8typUVD6Dmn3XH",
  "key34": "5fuSxA1M2ybPsfsQcuehe6y6M5j2bcPutRqnsvWvyrjpheBoEZTzaHUp3EKqWExs8ekaD8Ba5twQqBuRfyGXcbYv",
  "key35": "4eEf7cFzywGjH9oEisSe3VhyLAJNCLR9NQ3CTmNcJ69XrHLZGRq6WREKyyyAYo5NKYCs5XwYKRVwNDTQBvL9FKV9",
  "key36": "2J3EQwrJgVDB7csbLVjuJcVb9gUp8XqDeuoWddRAv2n6nUbX33exqqxezeAwfqLAbnhx1cs8kx4JjeVmCCs9GkRp",
  "key37": "5GHvou6aAsddbgRfRGkQSfohRHHrDYj4st1mGGXNXAveDKVx8SBX1yJCMNQpFpKYwuWp51b4uT55M2k6eBue7KPe",
  "key38": "46MWZXjYDL9hDDdn84Nkcsy3xZA1EQ9EzLfDASnSBV5ZMVMDhqNKxeXNS8sTuxPszPeuJKQHbbixt4SiGGYU3bMi",
  "key39": "3zSTRD3pqBi6TcjBKrKorV97kd4x7J1jrzvfQsjhqNeMLYHxSw4Gsz37XVFLTWcZLJkuoec8eWveQbMAykabAz4Y"
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
