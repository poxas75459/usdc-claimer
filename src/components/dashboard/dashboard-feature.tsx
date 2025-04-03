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
    "3uCU7x8CmCdWRo7yJukEeXhTEqU3UkZ9qePdSK57rGudDu7Y2XNmn2pwiz2wqjP8PQyB8hPC54mzz1Y7ufwsVqzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gM24wG2CxdZ9k1yhTumT18uUmN3VHCdrueqYt8Focgom2hwfhFMThYMB6oLeEUn9xH7JHgNHXfXT8KqjT6njTJ8",
  "key1": "GNkRBME8v95zWDSHRcNkA8RXr5djT6XasFSg4QVxuqL5eQ16WzStSW6W6Wv7Kw9TaqM4sKMEPuPgifSAf1fBPGN",
  "key2": "4wcj74WfPgEP3RBdnckj6PpyGMY8BYZmvaEYMVSQeXApfktBDeqS5Wy1GpoksJWLAmaikRK5NGY4EHMjbh6grLJc",
  "key3": "5NVKLsECqpX4dJLKSu1ipvXA5CBxwV5XSwYWULjr7N63Egg64rNjhnxsDs4YYjjj1MrnocW4um1NiZWbU29iFGzn",
  "key4": "4x79QYgvVKb54T6j6WJFt9GVVxqS8jCjdWyW49Hj9dr7JMTNjbhfCcc1z49uYxHz94QD6vHcCY2emXH829QXmB5t",
  "key5": "44hmmy2QTGVVvx8aNG2jEpaGpRkRSZJxFJ7XzCWS5ur332YL93LppgCE27HcYukQbLvkpp1Uzi1msNA1zQGHZuHP",
  "key6": "qbyj2mEYKm7XmrCP1qjYKNq2rufm2avUPoNARAGRgLhKPyWVTKR7vqskrYdUdGGoHLydbSjLGKGoxkGHmPBcTpH",
  "key7": "5TNHvBDBfRbKef2YyFmY3aMUeLjKhMY2KZ2v4svaEieUP5xqhwHCqCpv9BkLS2czkN8Mc635i6KYMYZACJgwRVMZ",
  "key8": "29RrUREJAQXeuar6KnMPtgesL25BwKVNZdTYHqHGYEWGiAMpWyuU52qinWeNiBnsn49PjkbKodK4wLGpbDvFz4Vs",
  "key9": "2Nbe9Av9JR5wKEC6KBqc9yMUJMqUgFec5cccP7MzocfGZjDKKskZB2XnuQFgFeVEPuypSgooSMyCgkQN1R5vhEkF",
  "key10": "2e3nJpdWHeZ4B1EjcUYVzpS8Rt2CiR5FE2sqW2DJBx2JSUa9Bh5SvKrgbranspuH1vvLbD29heZgNAGaSGmhS1mg",
  "key11": "46jtQ8Rq43JEX4s9HSZefgQF5ubmtzAJSQe6mZY4if8mKi1gQbf8wiQ2ri6AYPDswFrMgEMMB7k44Hu3CymH4oyB",
  "key12": "3cDHrrVkkm3Sb1mNMpQQRkN3ubrxhBicwDJo6f2Lp1kLd9tMWfXVWYsu8SMRanEynR4z7PcwwDoGp7ThoLRxFUKj",
  "key13": "5vEZi9aU6TwhTd3RKfHoQ3dx3S9HQhwQMZWTVpp6BFdymM8Yia4BX364wqYAfo1fyAbCHLPpipdPmBD1J6zBR1Vh",
  "key14": "YGSyCrFALw6wEMyhbmRVioSHVmEgNAc9YnY4pfoi7xmTnEQ7FjC5hDBiJnzLxf5C5dMT8h8Zt2fAKz8hNZfnvsu",
  "key15": "2ie4P1HheXNkr4jARD2t4s9fcNSEEFqajZVtTqyMJKgNwG9PdiVoAaRK8Ruxc58paL3LTEXXvV2mmqqudrFqLMfc",
  "key16": "4Fu4oprVMd1BifbGEaQBYLtfawHufx5q6GbFx1oJoSGg621Tk9ydZJDBzp5fGPJZy7mQyPsdX1NJi4pY8a26DpKG",
  "key17": "2cCtHZZ3htLZhv5tnhBtRD86i3M25jCf9xaQiK3fLF8ETYKa2LRqMuT57w7qeeRHZ4agZaf95pE7WuVz2jDuDsNg",
  "key18": "2CYQQRjL7v1jScr8tAfDfLDqhNqhE4HTD9f8zLcqnQLCTdtJ8uN5PzBedafmMDGLyK6Mo5bnucPhhkGhwPyTXCQ1",
  "key19": "GJHP1oWWscfCsmSdX5MKKi29kQ19WEtfG1B1T3ymDyzogpwbuZ7WVkDT1Z2vmRGULiptwxrZVhRMyP5gmwWZtZK",
  "key20": "4RjKWmPZdJ24hvryEM4ibLPWjQ6HM57VL3vkf1bKpai3Rzf7Kceo5fsWfo6kTfC3k7YgKiMtEbhcpctzExgXxJzT",
  "key21": "8cYHKTdEmiL8H1CtZ238enFppMF736dkda4mBT7Xk2EajBYNJ4TDda9NCdnvinUoahGEiWJZrrLR9iMUGEemtVB",
  "key22": "5JWVY9oHs3VbKvZRTUQQk2d9gpqWfZyUtZjernCqtMcTXHSaAWcS7kdSFM6dmszSDmjX56PQmKBTk5XS7puyNtHH",
  "key23": "4pMc868VqBUA7NqQPaneVAx1zpMjx5EYbNFh4jgrbdF1ZhNaMyn4w2F3qX2dG5b1TF8hK7q8UqTqBJUabtsyitt5",
  "key24": "2N4XKmKszRj2LGVtMtmdGHKRqYeuqGNhPHiBEht315NM1BH12waat3fnHJ32AZwyvwrzBY5QaJLZtPDZAe3Wadqa",
  "key25": "BHGPeAzyFBbFt4oiQMXzz4pg9SGsEfYnphykjhQx4X8khgzxQkH4AUxMps6oXTt4611UzesUCPMBV9yphCHEeAd",
  "key26": "2NXzDLwsvfD6NSw86Xwa6sGxWy2mx5ZrwPDmfcLN7MMC52yt6ejyhMoqb6YBRinbG47D6Lgkoqg6EZ6zN4uKT4F7",
  "key27": "5KhbQZCAnrYd6KWPBF62J7FEDw6BrKeVdYLXK1csLCScsHG8kaRhD7rZq1eKNiu9Sm3t2v9yCnRrUxLmJfWgLo3L",
  "key28": "53y48oC4abtX4dmfazoyEFNhoUSj5mydTHNXz8HNTF6hDJCorhsCKcQzY4LsGX247GYExmnixVrvR6zWHWaM2ygL",
  "key29": "2pxobP5LEUR5USeKXE5grf3L8bWP9puFoVoDZ2hCHrxSipDfbSwgZ5oS8RJxdjDwbZuP1wkAToHimptew8A3gaaQ"
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
