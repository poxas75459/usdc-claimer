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
    "2nDtiPyobyApSq1DDnagMeV42ccV5kNzwQAFmrzWZvZZYZ2vmf51rNTmZJpzoVVYkrhtBjPjdosaMA56ycyqUQnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MKihxvHXkn6wmUBscqtGnp1Uz6cd9zX531JsjW3VAkRr8W6Kcc6NgR9fgar4nJfcvoN34FRgkD65Vn7EmLGKdKb",
  "key1": "tVryd1G6LX22XY92UKL61J4Y21S58jhXWXAkVx6JGvvEdpJjaHUxTSTHhNG1rMaTS3oiNtu9XMfyqjQrALm8Mve",
  "key2": "Yp6FqoEzCwFbU7ibg7nVWgUNjJJdHa7m3nF7uoCivegChxZuqMqux9jm8VKQjKrPfKkUb6h5MmGp6JR4W11MNkf",
  "key3": "3YRfVra7XX1jXALvUNegApW7PiZ7Jk3fv1eEL3w116VwfXJvr3awfyahFtNi86h3owTRgoSALKcJR626orHLgE2U",
  "key4": "2ZRfFFqHSHbmpAvo4yCLEfj6bnpgfc1cZq686Qk4iujfwwPiWNXY85KitfASHqMSgqL4SW8MMPK24PdyFJXrUFRF",
  "key5": "4dybpbjrsFgfEs65n2BYqeGABv4inMZJvMpjwGHfxKeD9wHYLqGf8TGT6demmcLq91SU1zCzBhEAyZne5egMiF8A",
  "key6": "5eMRg1TvgnhbKv1poqMZZmXC5BfP1HAQsG66m568EuZjgQxMQ1jtVQuxhdbtTfbL8jtJcdxrSWH21RmN4Wp3y4rG",
  "key7": "2Qeo2bSA1ZhnmpxvqSdVt7p6tZHBG95AKLq1YL9Z61Dn9CvHeVLcBYxcvwymSEeY17FANQNjmpjWyuJWHcgY7KUQ",
  "key8": "4naSHhQBSY3DnKehiV2R1aDmyQSUjDHcZ7p66V9J8WwfTpa4zt41Y8nr7yQP8NFWWrqz54jqSHYWJwHbzPxVSDaB",
  "key9": "UyuQHPd68YfFZSms2DavBAUTeyTvbo9tML99KrkXnmqQLJ1oAWEiUNoYNqCC2vjsN6PB5ZJHfm4NY26XBotRR9i",
  "key10": "4jbLUCf92N4G8gFbjyK3opZTn8eNwovtC1LSvJV1mQciuqYoVva2yFt4Y1Vj3xJ2NCxfEiqq9qBdxPt7WjkirmK9",
  "key11": "38Xf5nHkdLGjMWHNNeG345S3gZaAZT6NKPDqvpKMzjTYxVqMGYrkoM68xdrdeg41cwjZeQ29UgDcn47HxnnSyUSW",
  "key12": "3s7LhfWydPvHFLbs7Z3BjGiWohVCkrsPRpYhyn4zKNCmJUcw1BTQ7K9RiyFagLeBqw13Dkt4d9cPdHmu6jWVcy5h",
  "key13": "m4w3Jkir3dtzjZZkVEoM4BaZxHn8bqnyGJxZujiroLxcig1R9rgt92ZGmSKV9vfPta5G2AChmay43rjBvESFwTQ",
  "key14": "59sk8qJH9n3hb6XPenpRr2nDmNhpDsmh1v15x5kyzQVtvUpjNcjBura5MaZwathrJusw5Ax1dfN17qbGSdiAGo9t",
  "key15": "5a8wLN915m5FkqY73pNS8PDCCA4DDYqkd4VcFWKV95hNYmt6MDKFncMXNFNkEvrMhGtaXyWVNtVEPHkqNPV2mjxP",
  "key16": "5TKSukbBkS3q5j2MREyMtePPofSZZUdhuuFjvChYLDwfE7Sb92dEEWd8zP7Zrtjz2YnZvykFyhNTWFsNaGzzxxqf",
  "key17": "FmKBvqv17MNrmczveTwT4ALgZYEdV6q3tZKwwN2zn5UrBE1uL5eVkEoY6aUvwUP9Ehga5hqUDEVEVD5zXh2fE7H",
  "key18": "2yYHbE3vJiMNDZCACyZrexHJzTcTerQGmVSkxQx5q3Wh1zaKqx1gHJdPZ9k9kXTTBgm2yTMotpbVi3oBUR9EjGrm",
  "key19": "3V9CZAcBV1VC16oPTic5cpLiZtZQuAkuPCjtzepyxPYQZ69NyYZW2QN99mggtywXgBrs6XRtEhyP5TWcKqk7XX2g",
  "key20": "2F6R1zDtvdWb8nyqECQgwoiTYMvshSFEbV3r9XykMC1P7QLSNCH2rGZcWStXyFWGS9z9f4dR9dqCnqh9Q4Fa9HFL",
  "key21": "5Y6GEMZ2eApR8tVxHkBHkj1GXNqewzXH27VGbtzTXPQWt6vgxE4gkYJ9TacxskXrCNT9E3f1g2XTgqTiZeXRTr6R",
  "key22": "923Q4rWh7y8aT7TSHPCJaSKn72VpNsxawwv6Cr9r3VE18Vp8FJWcVeKKbT8FsmAFaP2GgTsTUqLY5yB7mAz6Tjb",
  "key23": "KY8zgwXRb1s1WhN7tfj3RDGz9gryXMRer3Yxen9U4baNkhEuNPFHhAqEnydySUscq4VkEpv6tg9682NwRroWcKo",
  "key24": "2uZosfo5VtJ9aNWeE6cV1AwNQcJRYoXW6Pisi8jNQuWr85hXofmR7E67QQoBJD4FKsSG6EbkfWnp6hbd54fb2Jhu",
  "key25": "3qT6mgScouWXTt73DiQHVUpsCn4BKtG23yFDsumrzrFVcSJ1iU2dyf7XgC9zWyqEEs9LFaaUAENUwvc8wZcTQ7k8",
  "key26": "4UnfkAiW1stRtoRFLSf62SmWV4mT5owDVookT8PvsvPKGgFkigcZ9vsu5wpYUgkg9QuYhCBSUDKfnrjxdYYC8unz",
  "key27": "21TCyF5oesqCyEtT5acEAFJ63CKXE6YY1UXymUzeeBw34tcknmRrTSSHNSkG2vMGZAEDHF5stG5GaSqP5Z5ei3ko",
  "key28": "3Xy8t9g5qssYaj6pNeBEEoPharbhfh2zp6PwLxy8Uk1CcJVrXzLHn34kAVsuYE47QUAe8Xh3NvPgoafvLzGjoP9",
  "key29": "2bCKs28JJ4q6ztcTSKumYmy4vaqBcJ37gM4rrvyhfxjUJahheV2zAep1pmQ9z1HPt27QgRruKBRwm3TtSJEHc5Z",
  "key30": "4jcbVYyh3AbbSLuSfoKf5Fo56efNT8GeBeUdFPVpoGTXydbFJkpup2Lm2hRdLarRdbbH63oXBDQHSD9sBsGpeyLe",
  "key31": "2KxE1ztn8Uy7WUig2Azzn4VmcygnmKpqV4fp3wmcQ84oMqTeo97ekTmHa6FmyT7K37P6AtE9MwbeQtKva2c1qcd8",
  "key32": "4UDHr82cyUUdL1rAnYJpsrFtRoHep61sEeaUF5iBpjTQCXSUToWPJq5EcrqcYxjSsUd6Y2HaB38c71tn7EvksuA9",
  "key33": "2b5xuKWEf25UFtSg4uAYFR2ZmfeBo3mPq2Jg7VSyLZsogVZkbKHmzd9sFD9kGHSHAmTfSgZjXLpRGvqgqB46DxhT",
  "key34": "4mZgQqCDwvzsA1r8okwUAiPBhiqGgJQWcAK5fVsLCt97G72MBijqaWF4amcabf5yyqDPrbFjFXqJXeRBQnS2m9iy",
  "key35": "bPchAc2itmxNzD6wgQtioZYXTtxsUT36d17twtsjDFpJWXuZvfCLju57x4WXmFzAfi47Gn4gAjZV43ER1VAyz1K",
  "key36": "5LwKTZpUBdZWqJ2tDwt6ENe5miH3zy4qwLc7NvJYBqxgZ8qUFPqKxqZFhPPioePbjJSqFkbGxA3w8fQhHSkYCmYo",
  "key37": "5VoRBqovXnozu6NGbpFrKwee81XuXX8x86W9T8nKX1kYw55SKs62gKEjc5Jn6C3i8CW6YwQ8bTiRjDfCi4fuXLEW",
  "key38": "5kjrevzS9tLwJuyf5LzDjnEDm5bp7PAsyeR5wXGuGdSBFn1Kr8xfoPZ49UBz3Sp3KfFt3oPJA4ENo4NS7yFPQvNS",
  "key39": "4TekrGkWQ8D2TFbzWzTRoGaTfZMTUW3HVd468dDVw2BNX9YAoNiV9jag62Md67SihTazKmnsq7BcVN71YNtJ6A6B",
  "key40": "RYNWRig8esRLHYP8apdVJQbXA5nmhWqtRs1cnrFBKZmohC1jog8r4msEA5qFqaPrB5N27acUuHzVNXBU63HXCWh",
  "key41": "5BoXFpbASHjVLE3tCb7iC7kVpSNMDEDpYNZ99aiWkJDazmsZdsLApsj5MV7ShAh1MuX3KUSyYeXcYADRfG6qht7U",
  "key42": "2YyCEEVUkixof4NMMLLDWyu9zKdu7CCYzgMNagoytWau8gJaxHpqeGiz99MAGiFWab4w9gg3fdVqGPEr4U39i6Dg",
  "key43": "2sbnnALvsyJaAMfdXnFhZqe88NhzGYe231koYfaygZRB2ewekr85RGaujUWEfhm7PqTwv6RcgvemQoe5Yn8wvRD2",
  "key44": "3fVaaj4WVVhD8U7qKkaEoPr4gUtdKPk5X5Ph5WYAaxSsgmkDZdgnmdaQNmjGexkXBYD9pJhXxH8qGpeY2p7KBeGo"
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
