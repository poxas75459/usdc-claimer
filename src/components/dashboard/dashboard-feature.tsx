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
    "3SV3D1d7USQocQWVFFJyy2uSBUEw664xMf7GotZS7WXaESHqtXuaktmjznZHzp8ARMXzdvxp2TC35fYX33mXigs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rf1xT1LEHNxYAhtN1WVY1myp5AHHFhRvmqu1BFRRaQD2VC97Rnn8c6iJEczXqDGH94tNYfMvim4wPZxtJC9Wg3X",
  "key1": "4EVEpb1qVhcvTGKwr8C4GyfSV2YjgVZ5jz66wgrUnheKbe5CqM7JTJApZ2nUn1dR1n1yYpVvcaEw2iZT4Bq4BVUr",
  "key2": "rck3bdedff35fz2y1JFtSMMFGmcp1SzHvCuZyMUdVCBpdCZYfMQoV7ab7NPP58ziXyZ5pfATJBCuvu6UUSm8cfR",
  "key3": "4YxQhEwfmigVpTjtWT9UzRWwyghZ3F3aruVMaicEfaimvWUqsf5NYg62srwaXfTr2dzGrfdTwzAegWUg4cqa1vFU",
  "key4": "3UJvnZGy9GbVkRS34DMaG4xTYPJ2K2vWqczdGhKSni3MuGkVhAo36TTLFqU8NJbyMk6oGiexU6vo9tYHfENqi3zh",
  "key5": "2X12BukAmvh54W4sKAE9V1GUY69t8gKv1n3eruCrcgHAwAVxfmmmMZ21oPEFBCr9wDQjLBwrfLTXjbU5tg1i5gJP",
  "key6": "5vtL4TRgrjemLT76reHxHuJtSHCtri1BbeiUNYjqqaKsSewxgWzhm9u6QfkMV8zYsNzwMR8Dirp3GLqpAhHy27mk",
  "key7": "2t8GSmDRT23HHeV4vwQ2JigBhkvxUquxpQ93MHiZBuoVGcHVn33iDtCQexKxJJCETfWWAoXFUoF9MK9QnQCKQkvF",
  "key8": "43zepkcMeSeZCeHm4fTPJDwDq3mWHuVSwd5rdncMFcurJMLAQkxCJbSm7EGS4eCmTMbsfu6vVoibMxdRaa43gZi",
  "key9": "51kwvz3qwRoN9vUCCxvggfbPGorutcahiCA1MVJfJpcAJ1APQy4r4N9oNCj5Vo3GzHg1GyHAWdYXWEXJWgBFaYo8",
  "key10": "2LJJyMrh8R2UXEXWfuhbJaZyTjV7v7GZxPg8d8vhmxERwN1YMfgof7ZzYYHP11RxejQz7kUGeUCFt5VpHmT79rgf",
  "key11": "2WWsHbtuz5CThPVoCUbs7NCR3bDGGkzh9v3yb4qqZsvMvAuFjGUHNpHC7K7feTBCupqdMrhfenTnPQQ5sy8zwxJP",
  "key12": "5uaPqqTNRcYGQhjyCa7bDGqrbr4dH7MrEdSHyud9C9vEVXdtN8QUKnLxVaGfZzqABD3VEC93eg4q68Wk6pcQkPk7",
  "key13": "43ydDPXYMdNEgMTk8AqVh7bfGrWhjWqS8DNEKYoWhG1oRycVJ9Tp4ybAZzwL7nzpxnkjCA5b7Nw2rrprmZm4XXT8",
  "key14": "3FS6FFWMaTbVrCiA5GFHsoMCTSWnYpyB7fLV38AcrYsJrzDFJELnXAxx1GhbvQeBesseNDJ3VoffEeCpB9wvTc5D",
  "key15": "5WeyUP1nYvY35qB894diddnKVaeJ9e2mg4D3ouAG2MkFTEFaFj1G1RwcJWStXFQugFiTGDsS2HCQWDS6MtXz8xbU",
  "key16": "KkNwMz8wpKNKm8R2FrhCueP8iajM9RUPEwUgp9bM7bC3eqyznTJfxonePQdAYzbjBVhGjupJWqRgZWosjmhCsLA",
  "key17": "4c65F3cxVe15MckTUrpE42Hi38xNqwjxbz4TzteCLYcTu1M9fEGX9xXr8DAobgK7YPCa6MixUSvm9TPvNGEUFJRz",
  "key18": "4eVPQRgoGizrAs2fogyFcqJvg4bN6uTfn83djfR5k58vVYCFvfxbqRScygaACh3G7CuQ9Jh5A73jbug99dvAGZPj",
  "key19": "5eKcEtQ9T7RDyJXuRgHznxWVZ93gQHDDTdhaumTJu2A4NR5eCHHhMRTFeKyWmgZReTWqQmfngVypcMWW3wyvbghs",
  "key20": "3GgFAhYGtxZwtAWY2wTMW7yDqBcqv8rEedJiVNNEVBKJXRiLzA6zjaYH7tqgxeZiedpPfu75Y5YSTjqw4CCHTCB5",
  "key21": "2eUQuigry59UD2bAqTjVA2Mkn9sFLFvghv73PoLg82Lyck66kbnBoQvy3QaStFDdm5iU67aWJ7h3MrFeJzqyJAaG",
  "key22": "5HWcFLRx8vm1EAoP7J8scTo3AqSsnfCR4Rr9i9foacWzV1JkjDZuWR5y3vbhoJ3oL9VZNBLUTyHncwTfWGp58tA6",
  "key23": "YutHpP5o5kjt6Mgsh8ppBAnD8WwbUk3Gm2nThULCkFkp4D6KjdaKmABLmTbPgmXinjZTmQivn6i1jKg9tKHdgrh",
  "key24": "5d1EM4zvRXKQFprkDbi9LxRKMrrrkS1kVTdHEmwfVaB9fGuWjZf4wWXJewT3GFn5f1mgtLeRqBF8H45xfXF7BJDU",
  "key25": "21m4CfjAZdfMqtNLnuzKyRm6jz8q5vbkEmehftPSxqMyn1yCECzFhmBHyPPvn1F7MLZGBryjiFgHTfEyE7PPfNtX",
  "key26": "46rVRTyTx8gah3hrJpu6Y7kUPRGva9QMPUdejN8LLHrRrbJbu2d7CX9wfe6VEEHWNRXS6YyPDuSDERFkyB2Eyuyh",
  "key27": "2QTAz1y8bHrimZjQfYDmVDmFp7FF75469oLhTYt7jJB4AwToqdjSqopuydFjf9Vceh8wPV1DdR8W6axAdU8mR5u1",
  "key28": "5YUxZUF4GLFxpZXSRhbFmd4LVEq8r9nnPuUs6VFTE3ULFDsmPoHgeAjJxUPSdmH3mRqXsrmiLHNe5vAm2ob2hiy2",
  "key29": "5LexPaNTwcz42adFFapvA1X5UtSU1jMM76JFkWZHmAKT3fuhuP8nH1zJtxUpXW6aYKmeWaf1D5bCfvuzJZGTndHK",
  "key30": "3T5gqb3sH2FPJdYK4RxgfSbeQ9Ak1zXaLxhPB8Ez3WUWAKEH9dGGExHToSnWdGvzwE2AZYU7uTDYJkFkWBsGARw",
  "key31": "2F8Cyw1rGzwH2sY7XM61e3nGJuuBGfMHKeyf1VKcyZWxk3UJEdsXGPEhkFcfhFoRq4Ferw51JboruoDa46QYiT4z",
  "key32": "yaqAPUnMRidVWkN8hxWMeavb3hqP2D1Bb5kpQFVa2f86oabdXmxqmd9dnLxqtvzQMgg6MJ3tjY3hrmceVJAiFCD",
  "key33": "W8osUxZXf1dKvCQaKHERjDU4E6f7e3CSMBK9gQzJXMiEAi7cMJ7dSiCVpbC1PYpBFDQ33QU29Q6Uz9gkpSVVPKP",
  "key34": "4SsEBoM5d8vw5LBfUZfvDVLrV1rMqj8om8wyGeEktnMCFecgpeiaEmeFueTXMBVGWZq1kjNNxW9ToE5e9PeK8vL5",
  "key35": "467njyhJi5vuR6YyN6WgLNHxAiZ6sgxKG164yKbU9mtVBVpcVEQrFjtejDQh5i5LSDSRgV2eSzj5pJL3MjDHuo7p",
  "key36": "5MbbUDfxHvm49CyWahn5WRFC24Z2SWyjucWgWdoDvdrNwDXEw7QUpm3ut8ZbhkfnBVpsF3upTDKGakx42NiUoWSa",
  "key37": "21wvDcHjfxgExx4VsQVn2G2Q6gDRtYvwm78647L3DNgCV8PeKR9mviy9sfA1fqSkUnq5NXsg6sAsC1bdeME6nhmy",
  "key38": "3CnX6mfuvEsK2rVMYHTTDrLYsP8bz8Vr6ym4EFKvYtuDNLScFt7JMi2n9rY241y5rb6cDjSQxuY8Rqznn1YwYA8",
  "key39": "2wu4sZhxZYRFMU8GSKeTL6jtswigvVzd3eNm25EPqvtmwRkfMLv2wGnUdR2Q56H2xpMroPEqvg5xCwk5Ejm4WBg2",
  "key40": "2i6XuA3BuPT3p83zcx2LPkFP3kwQCF8wfGVTLTacsg5nemKbaghG59HxiTPDSTHdpvV7YeFG3Az5yDbKBKVyhu5P"
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
