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
    "25uun912niG683rErBymvhGd3M4fHzCiwu1YjcWM7YrnRDMqpc4CrpLSf8KJEQ2ECce9mvgt6nDttom9Xjg8Eoqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hUuB5MomWHvDCb3VrZUzx4bwZtJRxuapg6gmkWPRXd1KmGT1BBmsYEMWjH8ESAxx8mALtRccJNN8MPPkQHtx3rJ",
  "key1": "3DaaQQFEWGr3cNkRxx3ZaRNx42dzkMjJBA9rZaYnm7w7cp8gTx3rHx7phw1ngKtZPuYS3GBjb6Q5sDo6WW5V1dRz",
  "key2": "5C7BcVeWExA5TVpzPKD3bVpWcG4ArDWRjwYBefRufWU3Ak2LpJpa5xZD47VKd2kmrem9SLkP79JXXGVgwr1s777g",
  "key3": "5K9iE566p9U8Akc9X7awaKJBtcyJiPbnDCAn5wJyxsQ2k5N7jb6zAgbQcmtKqgHS3WMMDu7hYhKxa9XzyNB5Ssue",
  "key4": "5ynxMgx8chtUNTnxygs9tHTvYqihdGk6qLoLetsz2dwUJL84afdaWNos4LEG8XbxSvdFqbqkVovYZDTGjUoKqRtz",
  "key5": "2De8zSkW8ZbkKTEbPLk87KTdKNx26iHKMvXuQZJNsVV3JcWX8LeqdSF5JaDYxcx2JZijAsmSCBkuUwdaYWHahzzd",
  "key6": "3HC4taBiN49azutCwkFzxg6QKGf6SHwfwcV3FhQP1kaA6yRgvEkygbqzwMpHVwiNgJ8kTbMhEjcTcs1exNGQ8MH9",
  "key7": "5jvDrLrxDPSMvvbup1UQHxtnHMtuUip85Z9oRKFiGKiKj8qA12D2KFrwfAJerqQG1MNj9bBkvwRJTpMVSR9HfRPg",
  "key8": "38eHpsQs7wRqu3Z3yeV22ktPoPtezrzphFKdgryNyqqQpH7hcba3qgNQdn8ZWyemQzQ47E3R3XX8dzCvDarUo4g8",
  "key9": "2CBJ374cAvFkqu2PHs79KUa7MeSbBaMMocAJki3aaEw7h4phXbBSforapc4bSx1opzRn7PHNSFH2CPAvwYpRg86y",
  "key10": "YSQmSAButvzG2jZAid25EWbcPZmkL2VKHicM8Gj2vUdE5PJZEeAASMETRU26oXrTDmsAfdUEjQFexybdHx1DS2Q",
  "key11": "2maLTrZZ89XFWMZzSBQJKDmsKd9UocD9ufmkLx1c2NxriMQ9q8zfCykeCFSB98pC7NiR3mHVYcsurvo5Q4wfVWan",
  "key12": "jWPUzn4KbgJkBwwHJWm4mtXHGPAKHmmaQBBpf39U6Xe8vYJVQABUcwgyRwkKfyHk2jpCeX8dMvbYCu2TYMisgfn",
  "key13": "4BhmHNTWkGPkNFniDUjkErEXUfofTUBqyDYrununG6nvaZk8FQQbZjzZeh1W8SMWaNZvLz236AcgLpf7K4QLuMGV",
  "key14": "2yLtA2QSP2aW2jvVSfJ6sS3dzA2ti3DqG5D7c4ZGjEwSivP4zvE38aWcaVPFGPbBMggZdqiwGqhBqbaSWHxQgEBq",
  "key15": "4UkFr4bFXiomY1zYa1VaRmCCmKBmaAJknDvbiCgbQo3EBLMGkEVpABFaPz83K527JXkx1AexcvcH7TQrAj2ohtm8",
  "key16": "4s4EjyK1JeYU3MTBZ81a6GcABkkbK98WG5qeeCVHLaukzQHuDh6rdvgoZYxhti5AW5Jj3cqwDejg2k7pdNyAc3Cm",
  "key17": "jrxLBP4CKtji9schDhqbFCzihRrLXeqk196HjCTrUgHiLcTQaDZMZ83S2hubM1f6CqSctjjYWiiJkjvkkoKk5m3",
  "key18": "btvC55mcg5VjtFKuZsCWzxwdyxCnmA83srw4qNw9qi7QzPzYNFWquTTLydo6shi5ovLMYMeqx1mHGTsro4dq3MA",
  "key19": "67Vzs2kE4hUWJoNQJfGWygfK3WPaPRS5hoQpf5AczhtCMwHQnYeMkX2fwez7JTq1g5edvCtWQhaMCMDxbWNGUBeY",
  "key20": "2t6SDh3fGL5YGvmeFNsrTNv88Q734EZddK88odWm4Y9PYKnDLC1YXA8rc4qXe4BPY2hZ6phmPAfMmyv48qwuxdFa",
  "key21": "5bL2TrGYnvQVb89GBQmTeGUVN5W6PRxoDAYdsXav5o1ny26NbWQH7bhBMduRvxCTPTHwgxJEGUyeSFVZPjtW7Uix",
  "key22": "UnVcLEV5HBuMF3BXWH5cxGbqgvCF1Jgb8HcQzTPovSbDzmQVw2LLJi4RhyaMKLFKJK1vZjtQoDc8g92m7XU7ktu",
  "key23": "2HswD3GvZBLLiDRjJ2SYRDcLtkwQhRoNx8wqBGHuKYquSHUNCNCJtna3c4Z7eYuJ2VyDNdqvLDzgZfNBRo4a5S5h",
  "key24": "2nD9kc9cK3wMpN3r3Q1UfYgL7Z1z6boFdhnMDskwmT18JwQW5XzNSxR6G6Qicy4soQAcAkQEGgRWy3XihhvXKuR4",
  "key25": "47sJ1D7iqkuqjMunZk4ipnoSZy6H6GkswVEabPm7V56UJSLr3QDFnEf7H71KT8w3LDSTmGLm5LsuSbrUn37M8L7U",
  "key26": "2inACrgmrGfP2rCc729Zdm9FYrhzm39W9ftmiBo12wbGm6y85Gi7TaU4obUnTaA8Emp6rixUg1NjFZYAMtWQAXCX",
  "key27": "3CG6Lod8uMgiPqWAbrCYZLjJM1ra9KqEd4nmsQbhLZSttQAor588GZT7hbZF18gyyhhWdxG3TBAinoys1QkYiXr7",
  "key28": "3AzAgCVuPgBwYhhznZVnb4Lg4ZsStCZM73x2cthC6QDBJd1EmaKwMsRipbU571yEPYwFxVvJu8usEZbGPcNoEWEv",
  "key29": "4CEGMjafrwVeitxDn3G8h2x3bDQh6bshpU4Q2ogS3W6XLz13wQhrj1BNiMGXbKgq2sgopndf4yNE2qKRTt5KhRPV",
  "key30": "4smnVbYAMDeySRRdG7dEp9kSkytRNRfqYZpjBgcZ3ZFtbemDvM4PTUjpxTH8a2v5t6NfRa1x3vFW6jpjyhdLbAJn",
  "key31": "3HT7ZQr6zp3fFDa3wBnHeWsYRwfuaiVST9iSi1oezVrYdTxpJmu77SGx1DW6F47w3dFiSrapqLBe6v2ATBNumQvS",
  "key32": "2iWb3aYG2XDXEYGTJGtRb2FTwUNSunzRWBhdCR6f1RxVjuFEya535FdiAkftmwYNmsBR56Ddix6xv95myRYZMnpj",
  "key33": "5LTqD7V5rUK8VUqLgwrHyDphJjHWx3QqJXrT1172rt9oup9eyrHAvoG5jaFXDLUjnYVMqN7Fmvretm6kkjxgYxvW",
  "key34": "2NZ97nNvmbsdVpGrfvgbgqZYMTDSwWZg1dJbeQCzgTNhBLRR3Kg25v6qpNGfg55gcL4Jt7krgwvaUEWoYgftqcyg",
  "key35": "5nAUGFsE8MtqKRSnk4K8gVzqtte4qjZTwF1WQBcqcznVHfLwCAf25VrqR7TS1YmESXvCumotPmYZ5EmmocommAwR",
  "key36": "3yTJtSE5opRBv92r3n3aMZTL7AhKr3d4e81YjkWosQDwf5iCoZAs6pN7zzGasyBmWkLmyNJo6zGX19wMi8pjprAe",
  "key37": "3wRLKkFWG2joADqndtNDLSjcX3D9wLwRrXcGZbvcCf57e4e8MLss1J1pRgxqefqxB3wq3wdNZTMq5v17UKXaR5oB",
  "key38": "65aSF6NytwQ6o3pA36HYQFbuMfTR14R39AKeds2KnEpznckTiSYEW8ieVkfCyige6A5gzcjBXa58QEy2HT7qySYM",
  "key39": "3tAKkcchVsfUJUwVTup72raQP9QT3c9cmPeXPELKh9mM5ZMtcprpDru1Z1JthPuh3cExdrZKtSBYKGtcRhAYkktu",
  "key40": "4vyLX5E4b5DZ85nBkM6jpfknAPSzx3pbngrfE1K7w9LajaAKSf83vcFfqwVaYejGPBeT2tMwP9iSTopPDZtunCuY",
  "key41": "ernkAhUboB6VGWENevtufhBtEj9pMg5u9bu91jNL3VUgdhV9Gm2JDShnTpueQS612KfyyAST8t5akrGGrR4ncyR"
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
