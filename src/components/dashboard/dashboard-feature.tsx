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
    "FS9BGSodTCqqUpiwD29SaL1Sc6SpjxNwJUZe3uP5NP3kjLpEsTBeQUDVGan4R969Fg6vnzziwBQSUZyy8siD745"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wmg2QBUtL4NDSd82pmJTNjgrqgyGTWiWDnDmP8fBmWets2U87HgYjR13TPXiDoZQFbqVJuKb1G9cF5rgHb3w5jF",
  "key1": "2CwWr56UvPE9tk9XdwRFCULfSjYaESFRy9odnNGvvisQaJn5T4UTTBSZkg7MG87DX6NYNBgBZ8GWA8j4v3PZh9VL",
  "key2": "3e1uHyLLYdJ6wdpXL5ZTpvtu5gwdcfXMTkP698F8vW3sQBqPELjY58hrKWmzQbN2cSusLvZZqBz2Au37oRNMJr9h",
  "key3": "3i1gux9MvsXzwZjh1qt5JZcvTzF4cKEL2yVQxC33roc2CbxkzPEckdv1icNQzotxqkPuuouJrS8WfpuRc4Zv6BeZ",
  "key4": "5FPyM3CxN7AXkHTFZaep45igikA68vsNBW6kyMzm4Ha3WbgF6NRrkn9fTggroysp2zoMsr3qZGzBPQnUYDXweVoy",
  "key5": "4tjckeQYVSN4r8J2MXZb5kS7UjC5F5HUqZJcLjoAqwDDGocL2MnDkPsbfC9AFMaAHHJY2GRyx46yxTiSg717B4GJ",
  "key6": "GYSChhbUJUPHfVxCT82C3hbT5haRqmZRSbRmbGj89RLrDX74sagmrXdtUQyefMERaJx6fAkm6VBNc4XtV11iy5o",
  "key7": "4d62cMTvVwf4hTYHj9VPBNThu2BUZYRQE7ZtojrFo5NtaGuperMXVHyrfrqyUPGGbQoVjj5VaQxQiAr9LRJNwBpM",
  "key8": "39qnrknEvyJmupmVSKf5jpcSv1bg1YMVrcNntWpbZLGvK5pHq3ebDX3bfMAf541t2XRbVpdzFUy5gx7dMCbQiK8A",
  "key9": "4hXgQdkA1irfiqCW4zfZbAinyGL22K2Sg4teV4dEmgA2Ri2bgxZ4PeFA2ysoyKBj1WrjHAw6UZemPNxtAR94TYmq",
  "key10": "2vZebK7WedWhPeK8rrM8TyYC1TGrVC9xLhSMM1ZqFwMEQm4Rrgz6Bh9p2GKXMzHfW8WQFWfQ2L3gVKofKZkR7yGS",
  "key11": "5pfFLbpR8Rv5Wk6q334YoHcXSkcoYQkn54smPMCoRY3bHhFnd2SE52sRSaXoErhjWwkSFyrMk3AZddBo3paCayBv",
  "key12": "2byuyGEMdXrXhTHbuUGvMbAqYU7wPnTcrUhM6TGHcNVouLtkyEineF52LpS7WW8FkVXuHLMPiFn921p3pDFaFdHu",
  "key13": "51Txq4qd2NBsgMeRkY9oDX5z4wfoHx1Fc65F13HEFPZ8iUjgn4n6eyoHffjrYMpvFjV76x7pY55wuzpiSQiGjXdg",
  "key14": "3y71GGGZKNtMfLjP3wFig1ko7uBqFqNUw7hGUu7Fov99qnqKGp7XYN4GzYv4QfYVtCtKWV8bwMHXQNUaFTxQqLSS",
  "key15": "2dERqarCp9gtuYR2G3BewBvvH8Fm2JnPZuuWtT333xyzvBD7ZGTaFSKM6c8iwMtHb4xftmeKxHaR7G6ox3n6riYA",
  "key16": "5JHpQKGeQDPxgE5a1baFUhbvmLqaPB2U6AoQHDVHetDXCSPtxvdNviFgNVFPAbgYL73ethth8GDxHBGUgNsn3LSU",
  "key17": "61mWqsRcNpAjJSYyviHyrhMky2d1sGwr7STJzYdh9ftXSDYseT7rZtk2fyV6sbvN66pVYBysxeY3KEzrkHc461sm",
  "key18": "5uvVuLLpvvQAQDLeNURogBqGRyS6Hdb18vHSznuzWd47AZDPXuxHPtze4CWG6CfewRqHX6BTrij6dBYMEVmFKiHz",
  "key19": "5c58RG1geb1dkykiWgRWdSeJ441pYqS5gfGjV48nhhAGEQqsddrmyFmb3ums6UUJVGzq4vkwyApB98iw4B697tQB",
  "key20": "2R6wn4tqo74TUenTQP6bXa35TH3SDYFYUaWJ2e9xswdZjJsExLf9oTquXNrjUDYdFDMECFChA6WUcxpsEahg5dX8",
  "key21": "32BCKRLeq5zAenjCPDMAaimjo5JCD9U8iwpCW4sBESvJhxMWw6bgxwwWeokELb6a8pXSPuUg3xcwbTtsVJTPgGku",
  "key22": "486FmbKdumzwKgfF9b6ywA8CHSAR8xUfFcSeQHV9dMkmAJgx9HGBsgW9j6UVfVRSjGXU1G4M5kZXhzFrbZyeJyEo",
  "key23": "5cT2g7KoQAMJVKiKqNpUGqcvgKvk6MFN7ZXxj4e6eyLGWGBjoqy2iobbim8Hyk1kQRUnBLT9wP5Zsma4AiJRTXeM",
  "key24": "VrNdn1JuPqX6xsCvtVngs5vemZVTYAYVVr1jZuqozoStsHdGfEuhje41qoMJmdyNmvjiZfHTojxPfdUo7uDHY9t",
  "key25": "5QuRbJuS7fEjEJ9RwtdQyZjbrxYVqwCXas2qmquYmpwJm8h4kS1VU2Zp3mXsFXoLsTUkMbXS4ZaxETpZj5qRUaUm",
  "key26": "367BykDvbh9GZfzZeSp3GMx8WqqGwvWKiCZr2ApLRp8ZPyAM6JKTXrEWzvvFa4sCELtYBGdd7z7EBFn9jTPYxvbM",
  "key27": "dipo4uRGfipKp1rrpQ97uTb1VCbweHNKjVMnYzLY4TPnAzWyHCj85Cv1jYCwWAvP3ZKHkpH7f93bJju6gF3dzUX",
  "key28": "63cXFKyHaMk2y6zKBgqvMvjYko8cyRkQtZGsMBfHoGiEZLRJHQz2M8wyaVqXgaHiG5c8yGniAXrZgeQedSksyt3c",
  "key29": "5VPdRnmnm2iigdvLeSshs9PTSvQokBzyAAQ4u34RA52hymj5wBsV4bXvG2JCgxpPKpKUBbguPqYuppfEUzP8CS3",
  "key30": "4khLXtziVA9cpJaBxCHoEntsGXobPVi1cYHPhRW2iqrvJJtpLQQfFen4n7fQc59Kk9t9VdnrMzXmRGbfAQhRnAYL",
  "key31": "2UL3E53FFAZmMuLCGEiGyHXDz3PK3Xf94UXawoN6AKhsGgohvVjtX1DNQVA9MLRkWXP9m6aPbMUFhHuKswq71ybt",
  "key32": "3TM9iCZmMbjhNrF1KiM4KpmPzHxZks2SpspQQUa4i3qpvNYUKd9aPa6Hm37J26BedMRsLNhC66okPVjfQWfumhqV",
  "key33": "5VfneyAyJJpcJt4ERaeKF6e3ouiZQhuuvQXX3RF26VfjBhQVkd5PvKWTXmo5nCP5ELcCJPzaF3ERZ4KTD7i5AE7K",
  "key34": "mHQhE1enjuttJDY1YSxFtFTggnAkAZMmFCdg5m75oEgtZamfT1p8nC59gUZq65Ma3oYaDEL446F7SDGnFKbL2jt",
  "key35": "3Afw9897eJvwLyZXHg9DS8tHbAdYbr72m1uu45SLCiPXiL3GcFDHpqg1oMP1H3qfnEaxu2ubsyKkHNheSrtkzouB",
  "key36": "Ud7HU8K1goxHrRYnt9ssEDgVbVw8SGJ71Z1M6dvZCC7mubBMPVzFgkNhdpRHDTF3DGBKwG8HF9zXTCsJNGXatf7",
  "key37": "5B7Xk7pTo9PjDGVQ9jBAHw8zDH7CWNLJeaaZtevCtzZZt859MdK9UJTrLruDviutyXDtEnXzrr1yzmrD9A3nvTDG",
  "key38": "63Eqs3e1S7GQKCEbt9TtrKTPGqZZnaCkxwHfpN1vofwHPGEEaQu4NhTCs16FiCmUHR14T66cBX8auC9JC6rEpoju",
  "key39": "56rToyyx2H8C2HsBAUvEVXfW1izYAJRtpaS75XvXey2zDCjr1AEvZ7MfT3wurx9pfeBm3cq2q2w7PzEg3eL2RuWd",
  "key40": "3Zwb8oJJGRfMFv1NK8148z7Gyux728LEdDNW72cAzCrhtrx8UhYNwYeGxsZgJyHc8upWjSMMdG2n8m4dHEbmAy69",
  "key41": "2aPQxAPJ9WyD52ChbQuKAezAr47hVDPQbGhnNWKXiXSBWCu3XrznW7czXk1cEtCHtCC4zPTVjV5MmkDemdinqsuT",
  "key42": "tJYvevGUgPtnrguV4xZbpUnEjUsdjMfWcpfEUrh9LsG7iaB64hYEyzqJyhQS5YCT918eBpC3wZzL1oAEYwuKP1j",
  "key43": "3VaykXPPHNPpFqx7EAnfzZAtSfgpjNct4cYHoDgUtzrLHobNjXcfbJPxo6GZQ7KJLpEKpgadeCzPC3kNndyoF5F8",
  "key44": "o6qEtkEuZdMqTG7RWYxwfXQbmVcjnqYetjaWV6hVKmkQ6VugfsU6UyVfLsco3ympSP5LGp3yeRMKtDQDywBgrwv",
  "key45": "3DmbvsHkL7ZL4Q8U4K8gTdFeTqKtc7VYXxSMfogiDT2oqErZp544TM5Q6YFNmiJ5X49hdsJWcgMRuKsEmdNCzHLH",
  "key46": "34AqLbKhvYgTDjzZyXhLhJn87QXzrsgWcin39FdwHFzu3Qx5MSD89rLLD3wLH4opVHmttk8xtZc9zhPVbhwmpTW4"
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
