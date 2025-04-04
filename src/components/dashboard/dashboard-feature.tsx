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
    "4ajEUJ9oFpmspULKZCwciA9LTZie3ufbGQ1veXyNk3viiGzkxRZXs2RFdMJgFhVpsQBmDH94kQe3HgRdj8wLHygT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37m1rvTtsKNFG1yrxmW81noapoXQxpRWNuTd6PjSsPMs8pXQk56fLoGUjNNNKhos1rMUsb2JHTG1KZY6BwJ5w9J1",
  "key1": "63SyDbg7nxwnDBCgVg3V4MuvH3hLAfzzyB947EruzZ5fvU5cu4ueb3dPAcQvnidCVDWAKh32dvBYiNXhDKPF2jHi",
  "key2": "2Uuqtg5928oWSwoshkCXYCBuH1yMv7TNTf1mqvDmG1byGRNFYKAmuQYeDTBwKVTUYqPbKMMCbSwPXBKJKYQhfBNK",
  "key3": "9iN3SM7SsYvVnzrubCWxMeEMDJCoBuDwPvVNLUKqpKPATLm1nmEWe7QnhpARF8RoZQdAoKiPdPaqNxGjSyykp1R",
  "key4": "3NQFvvLsdu56px9G8JerStNAaZnYafpSe27rdea1ZahFDyFtLnwaXphYKypFkmRdiSscGMagp3dUENuujSLhx3Z1",
  "key5": "2fhNgE3vD9EvBgPbzpRACVTCy2HhtNy3W7XawRPCtP3deCoChqc2iekDjtMtjQzzMgPzhp6WzwLsbZU2XsHNE11a",
  "key6": "wvThYbJC8QQcTbW5nuVTh6uxxUFwnn57ZcEZzDL1V6QsyP7MA3kpzrwkAaeJMuG54kVjnWrn2sKbmoLPNeyBPpK",
  "key7": "35Z78z7zF8r1LAsqb2D6jk9BLPYYaGDNSwuytrRtaTUbAvZhzEz9mGnDinh6o6ZBZAcCqE9z4FPckGngmSqCDrzw",
  "key8": "nXaBG8Nve4DTPEpuXuBJPaRTRXpTyVXyJ8JwydzeU664wyrxPVNzh12AnjEhUkkLYvfW4iXw8AJj53EFkkpYX3X",
  "key9": "2167YumJQTQdkdnHj5Te2GXr8FZjPG2jRv7vsEA4yXUeSWTd7BBBy4pmJKb3yjcGq7mWaV8SqRvxDWx6XUfsyvpz",
  "key10": "3VXjNi2iBhHg9eGCftJnu2RA7APg5FEduDZR7u58h11opBzmYRVu6xMMBy8ZYbkuDJCvkqN53hVuBQsvYsLF296g",
  "key11": "5g7n9Q3uXe1a3M5GR8TAezh7Mui8h5biLWM4UKgEj1C1egBoc4WM2UrpVzi6FJ4QaKBTPpgZjxpeGaiFEZyFYwuX",
  "key12": "4XZeQiXCsSk1WdERRdCRvwcGMMnApwjwntKknHEg3PBFb4GtYfABruaHc1Vx8F9dybsmTU53aLbUeMUEBg4HjB5f",
  "key13": "5fCVG3VcSr8XZhEj7UrSNNaHYZHWELdN4cdgnLXKWdC5LdbaZdzNi4LSoBms5atqwWi1FoGGDAwiggigP9xUPN9e",
  "key14": "4WQ8qLe4raGDCSNZrno3tbHBh8PsetVVkiGJxQqct6chyQ1fHEZGkb1ecGoUh5e58MSiGpA3vkh6AbGkihjupZX6",
  "key15": "SVN4qYMr5ua5owhunAvAqBretCsgsc3y6mCTpA7JuP4a4RJdhUh6qUnXp8ZomcxndmsaDoFR8o6nCa5ZMqubvEu",
  "key16": "5LaPo9TfcwSqxSWmz5gZceTvmUDDkmJ3wWkzbXZaWjV5uddAJt9bVFr76cdUHKDvTrJW8bW1bfmVfxggfvuRPmh9",
  "key17": "2qQyKMdQsbLBGV7H2BXoLsmDvwFbwvR1tmoJ3fApXxmo5E2TVP9YTSRjvMqgUVVLhxRc4MMFYq3F7wNCTZjTAtAi",
  "key18": "im1Xx6TrynJLeS5MhSZKdCh6Xt3fKeKRctnBAXUP9Qdp4MeSwD7bH78niY86nUdqADWvAiJ89TmjfZf1RDterya",
  "key19": "427puEMUyE2HM5KRC3ouPiD46Tsb4bn5Si5RmRMEnibuQxDmS2ZkAmE4UHDd3qswo1nX8jfvmfNJrxj1pyJx2bbu",
  "key20": "5Lq7s6eDtmCaCBjix9KZNFKJMhddtxNLp7VPSDMDNTxD3UfUZjgcKh4WugvHMKC2LM75RC7ugfv2AiXaDMqkBJmq",
  "key21": "55ivmEJCUGyMvfXaqP7D1EQEx99LGuNg3Ypr5QShgYgbTRigEQxr4psC5SBGvJSttdoph4UjnmKLEyKBctqpE5V7",
  "key22": "4hrFBjgdt5RXZmQbubB99NauSxxz9ieo2aHa8gdmVknWW6n8MNd2oCkpeHpDiECbTYkqUtpYVnKirDfUaLZq4pwm",
  "key23": "44pXrYzNrybCpqRcJEv6AzhaH1UjCBkmYxdqxrHTKu73ab2PR53v5d7KD6uLedScqiSqu7QZY6LQ8DYNUJpTPy7x",
  "key24": "3vP155BbAseVjNduxzzmd3kZKUqKxBs8Kf5JVwEaRaiPchMB22VbhoEii6u4Wexx1f9YrkwSHbuWRLmmwfwvRQhE",
  "key25": "3mLPPuPhEGRbPVXpGTLuoAHoA7Cu4KehhLt8LSsNo2ueu3NewLNq7kAH3teDpz4USJY3LfNTh2Znj5uaZuwKQRsE",
  "key26": "2h8BqJL8V4ce8hCf8qE6XUTbRtv8o68AsFcv5V8rC9sSCV3ic4UJgq9HX21VvqBArTxhfcQ4zvKFTSWEcKXXzstD",
  "key27": "64qbDYkcUuDuEWGfJ8bV3hibb6B9aBqhmXDzUf8jzxKXWaUaRRMqUuHJv8z7GPwEBvTakHmMg68JEL6Hge9bkNH3",
  "key28": "4ZEDfnn7NRUb5PWKa3dfwTCUSDnmr892ZJSKjPtiuTE6ix4RjtyN7qMi9tbHxZUvnjQCmZbK33RZkecETsfYoygj",
  "key29": "61o5qzodurKvDPJZN3QtffQXbq9j8jyRvMXw77mZSHjEy6678zsWxAQUCjeErM8mD4H33Yie2FAw8ZxaPRHXiHbh",
  "key30": "4FZ8BkyxAMg9oTaZnwj1RJkkAhCPc5Qy23cK497bvP7S6NwSEXcJd1GuGahwWY6AjUrovcmBSYcoXxxjCyjLkq84",
  "key31": "5LRZeBg5K7cj9REkUUAMEJL3pdA3LH3wMbmrrrrXWUVH9fU1E1beC5SApDNnjFmCFEjQ3bSxeRiVf4F6u7xUUue8",
  "key32": "4MSZDa4PPfXMjFpbdwdLEz6YTMEV2aHfpxnQRT22dg2WSkTrK94ZdNHxetofPcbtwTLo8wH4TAwgVnHgT35ragd7",
  "key33": "2p3zMsksrHdMqLLHzr9bx8PUt7NreTg67NtG7CsJuLUhhhqcpELksXijHZyCkiwDTHGZZSnpxWRoQgevqk8HedsV",
  "key34": "25HFK8kCxEMW9BL4aD7PrKo5HC3bCZic8MN2ghwm1WAi2QLpXGsspjg6UnUL1y8ds1dgSTHpVxfjnJ2XZayjzwyz"
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
