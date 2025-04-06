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
    "4fkeW6guCeGQBHaYR3Vyk7YNe4BiU3J8Gjim8gLFqfeBLCSJHhFKFX7BPAdwYZ8wbXpZr3j1sgyHHoSw23Wo9S9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gK2fJFfCUhF3BmEKxsCjKRVxB16VXbfVyRSc1Wy1WzDQW8gwopC8D3xznrQNcB9HDWmaeJTMaNPLyNUBifTdvhp",
  "key1": "3qMRGvhcMXAqKJUNAeUcMD9NGaQuZQcrUiTkkFiVYyKcNMuyEpiwXWqP4PUxZDjce255vUpk6n8PXK4teGAVcVC6",
  "key2": "5KmqjGTQUkhYMjTsNrFae3DG1Bh3tUSDhsDkNm8Q5ysTvnhQPnkfDZWFRmrWBB1sDn61L4kucd2UJbbHuDNp4zJy",
  "key3": "2YCbod1mtktaJy5816k2qhWZvzZnJ2xJ81Ajty2kXsMLf7GQyWWrkoLLz6AHpMNxdb1Mtk9AhM6Apyo81vUpGvf9",
  "key4": "2HGfzDa1Vib3HhAN1kn3Y1QBorxUQJrcffgH4gW2qL3sjRTKjdtwLg2nPRtRpbbdR5qRz49M5cbgfQeQqAiSgXmi",
  "key5": "2bGACpeoKwyQH7ZT4N3BgPsKmJwFHzoMCRqDwN3S2tkEkrPENhmE29s81y45zShM9cV7XriKvs5rNDeheoicp25V",
  "key6": "2RJPdVC8xeVC94As7SpQMBKqgmdzaMugGTLWCZtghbZvTNRWXRG3UDUYAtf1mgBTERt7RqNDFJvxry5wWZvNi5Kv",
  "key7": "4dWAvx1XsY48rfz7FoWmKMMEFWYMZf6R5sobediuinCD7KMZ8KLRmokxBE9hSBqyCbkqH94YpL8naWuySkMgtFBC",
  "key8": "4YUGaT4M6w5366ue2mAGxaDr7zaUuw1JtWxXHv8v82wsTpLQ1CztyPutVAFDrReEySoHbX9yLqcM1kG52dpVe3Yj",
  "key9": "5vcueph3rrgsqDYQEB1iUpkbKzVtty9vQZbUqQfaWrmZxQqrBKmPaj48CDeRWdQSK7WPjteisWE1XeUtHUx36hXP",
  "key10": "noMne1KdZLgKnJ6se1vXJyV5vqhrFYctQDxZkCStzrXPkKDqXrCkfy41Re1uHbNEVjmKdn2M9E9nc9DnHaHWk2X",
  "key11": "5fAQo61raVBjUpsH6U9stTUZwsZk6yxXJPb7HBL254uzTnwmZFbHFNUDGUmTCTqy51dSNWMDkfEL9sonFKvEdx7Q",
  "key12": "367x7k3jhaHi46tyNY5bzD7p4fFPtc55zDPsMo8NhYezvdcy7wESsEKXXwQN3mv19Qf6dAxTtpDu9oHenVtXWQVb",
  "key13": "wySGrSvbo5WMkqWLtFgTkdsLjrPXg9JujAmRxMQC41XTVZB36rznjK4tzd5t1fqvsURAGbxEjQMMKos1iw14aQJ",
  "key14": "35bdzRaNeNvmjAWCnCmmKy5T5BaUnu8z96wrKXFvnRoLo5CGJg4AwqEePhMRs26CZzSa18SJSH4opJwbSUAFvx5U",
  "key15": "5feNGzu8U5xJELb5hpVrhBcufKZzn5MgJhfjgX9gmeC6AaNFVDbk6nuMtNSjSSqvavLc9dyT45m4aimUqM7VNEWt",
  "key16": "3YBA82Ng5ofD52cDbk9Aiw8mYmVqhQfRjigk5TLZvYxfY8S6sXfDJWATbvbV5UBm4QvcYf2hFj5SRbjnkc8hSfqF",
  "key17": "5uV3xapNxWkgbxSSJqzoY9C9CGgzG1n1S7DdFbMQd4ieuRGoB1dZERXe5mLzDWuSdTmVsgxxb3wmbPZo181kht4P",
  "key18": "3bWQYy4ikpz5XNNXsuZQsroSE6wBmFoNtBtvBWbLAtHJcYjBQN3FNfP2gmhb8RmcHJJUu7orTCiA63QKkZjmxGh8",
  "key19": "4WnMuD2LLjcThXJ4gp7mLXhkzZTYGjqm8aJ4YjGctK32EotDjRKcEV7ooU3UK73f6ingvbaAMiGGN87iFvmyGu8k",
  "key20": "5Tje51oZPHno9SyPafduTFusKYoBr5VmcCkeiMbGXCiuUdzZMPn3noKc6bH7HJ8N8e6UvnFXmY74XMxFrZgRoHNU",
  "key21": "2Ydz6m8JSpMCnbnBREVSJAhu8SrQhWht7zFzQHJdPkJQzgqYz6X1hPNuscuUT2czDqDhpcR5iVX7oBzXw6GeKpR3",
  "key22": "4oRxKKSNZJsUNjCwWcPS3vmBmyfyyr3LTNNjiHiMgq8UYUrFbb9hS5Y79MJF5RpEheikXx7s2nzQcqt2cVki6pLe",
  "key23": "5hCFRpNck9F9XZjodoL8isjSGorwazTBpbY4kdrEBPkxPVXocxd4WEpD1W1pTJgAQRBt4HnLNQsWMLpCwzszRxut",
  "key24": "31UgmfErZcRxX3DPgBZeBnuHUnbuKDG2h4qT6Z5btsLMw47Kp1b7teKfBGZPiuXicHP8cJMRRbjvVEeXisXqrsgk",
  "key25": "43sKbSiNrZXpHvnSj1cmaozj7LLf4FT2L6Fq9WTjSrFxF12cpkHrYWq6yZ4Uhpk4b5JyBpuk49sU3irQgygsupYU",
  "key26": "39gjiMKSd5gP7SyiuML1gL4cCWCtsdp83d7psXMoSJ4TyVHdETB8XhYssZRvwfuWqAJQDSXP9Crq38cgV4KrgPG5",
  "key27": "zWiEPV52UqhUQSLSSqoSKPJaDdAfsyNrTTso6J9C5HpRjfz9aDzYsCj17aChc1Lgc9szFitfGW44RVgQUhPmE6a",
  "key28": "rRucbPow55j48it1BbvD3iDQPEaMC3nYKBvDVEazF9gAb2iFpvMYKxx7ZdLZE4w6j6nNR1kJySVJjoK5Xz8gUVm",
  "key29": "2oZrgY3HwkuioSg5CpZ48QufxY59LpXJNRMs3p9Np7ywNjQsfSDNrH4FnfRjfioHJUk6Aw9hYN5xY5dNCMDkB83W",
  "key30": "2EJFjxiv7wDFDJPLQPHQkS4fag2g9edEL6qgnKTkvNUETUaeMBjwt3ZnRATEXfUcSPKniD2w9kBT6eoLfhvQ5CHn",
  "key31": "4LQR9Cjnhm9TcDQmo4YLUKU5b5eWrRa89ofo5ECmMAjj96qZvHt1U9g2QvErPkpGCiUmZHiRK9j2EpeECNoLFWZq",
  "key32": "2FAhpx2aWUKednwTiggtDdCzXwvY93DTqdybPKdLPuo7rz7iC4B112cr8jrawzWJ4KzvzFpsGVL1ebsEAAKRJPCG",
  "key33": "47qZjNDeT8B284r2UGVs5CKEWoZyyYVa4R6BR9RMC92q8YJxVWngeKBZPcDweoGr7uSKUvo6ZFeja3xzCto3kp13",
  "key34": "5Cby3sWCAVZXVEcHAFyCug56cTYjyHvBczSEpLw56VSVjv7kvkEJb16fomeJUTK5yYNkccz4qsT1MP1qqnsbFXxU",
  "key35": "2K4a7vM4XiHiii7hXZhwreg3cHmCtj3Rp8nW4eX3u23aocEvtsEF3Xi4x9yRfQFAa3LsPxwWmwC1SiWKwr5FJYf2",
  "key36": "4aeCUAKTLzzVEgpetFBACQLCFvn5d4HsFWneDVz1V6QzB1fJTA3qALMPussQfzJuZg5FWSAfoPPWKLhVeRQMj3GN",
  "key37": "zuHXm6Pttg9JRakzTPU5Lgrf6dyJQXv4TZEbKgQhKm4y3XYE21LmaMjHVX36ghFr2QCXhTEzc9YsjqR1PQb8mbb"
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
