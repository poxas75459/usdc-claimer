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
    "5sYvrxafTTd5QvVddeBrFbwA2WeYdk1UZy5oNEJP3avgEHGd9sLzZz76KGdvN9PZUAFAVX7rZpq77HCGkaoZPZjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uwUUqBHAyf4QFqYXJnfuT3kcqiqQsadPS9tVQMuTAZJsvGh7e3x3Paiw9BR8cRzPDmQw2KSES5p7Qh4Q7upw2Ek",
  "key1": "KnGqP9QJzcHpDsjA4DgLHoZ5eZ7x4mCCva5dTmoSjZXUeTD2aYEJRvMPvhZbK7LuBV9raWaa3m6Mzk3y6e8zDMr",
  "key2": "2hA5KfCkQqg8kPih3u5vD3bTgxXrSnfXHr5V73ev9LgWAkR5V6f47712feiQADysFzqoKZt6uicQrhFLovcCjsWU",
  "key3": "8Z4fhL4jaSv74yHwvpGaY59p64vzjtyTLfZ9iBh1wwEwyB8HYnuDBkSAWzZpg4HzeJ3vDcX6AVLdH66ox8KkghD",
  "key4": "35GiqoRBFPX7vySzvFDbBzxxDw4EWpLsHGoUvBm6rkhaqcSNCdBxdbRbePXSQWJYJnFdafEAmkczDLzjtBizfSmj",
  "key5": "2HEBUVQmMkScBg7wSC8qdKKFGM7df1xeVuo5LHGuzfsF7kymmdXFWG8atwDriEMCzEJe9XxzJ6UzvTH1kUF6zdKX",
  "key6": "3gXnnwr533xqvWV8Abxjm85zhAyskGamWvk7zPNFSWaxxsvz2VHj7y2veidKKKCgouHn1vBMHvVxSxnM9J1MmRxa",
  "key7": "4D4oxAUfUa4q3LBeC46SyYbe7LtXVp5YWgk5CYa2m5xBhcgavAx2tJ7aJz8zrN615AWYUKw1TogcNbATv9DSvs4y",
  "key8": "3unnBqSCjv1qv6DJkHwQ9bjFVTWUPijcFfQoiXx7ZTHYeFK8pAvmetRXUHpq7QuRYCSjHK8P1w9oTs9PNBxueykp",
  "key9": "4XEPL9oh8s6Equ6TsMeToVyoApvSgwJnbJNJBDtqbAQRfY6Criai8dfM2C9rrEsfnbBPd6FhLKZZH6N3hMHB5icf",
  "key10": "2cqk7FAgMw6tBAqUrQwjy16f2asz5znfgbQ4AtmdH8Qz5yRzsysP4648ds7FcqTXNGE99PDggZg1Tc7g5EDof2KC",
  "key11": "53Rdjby7eV8oBQb8MB1LFDeD7FRjpa8J1LR8wBMRW7eD3rBFVn8589R8nJDvKeNNu6iE9NyPTY7Q2AHjxH1Rd7LL",
  "key12": "3nANoB8WdV7dZVumSQ1vdZVhe1A4AVvVNoKE7GWWoDhRneDNiLYa1eZCPnZAdrYEVviw3NNswW5GLV7MJUnAVAeT",
  "key13": "2bX9FtTA8sCVqPNZjwco2DVy1pnHy715RpatAtdsq6JrTxmuMQchkypYAa4J9jtKH7eKERxcuvzppEX4GXQgcbVy",
  "key14": "4NvJVKBPHHJm4qDFiyCvjRzsr8Gz4MBaRvZgRkj5R8TB46mP5aZWWYfyyzb5EvPYRWgBmg1p4PQef2R772kPkN8X",
  "key15": "2YCQxpU18bNNbEm17UN22bbBQniYepoHUbn46Xv13ZEUv2ikDd3CzcRpqy6gDoEP859qQ1QCE6miSJYrW4G1BKWV",
  "key16": "2FFiT6CTtijNAAG545zdRxb9UrLRUnKghhCYNAFcDs83fVN1Lc5gTbWr2DSmn9nNLSrwfCJUsiaVZNqFKK9bYfRS",
  "key17": "61QxaERHTfvTbWGqUbFAPdEpuHrjomsdxfe1h4xra4Am3uPv1dmvCVVvyaiTon6EnrihPCE6w6CqVrohaVCinUgX",
  "key18": "5QLQTEftmjbZvfwG8Xum8bVCoBH285aWLthRm8hnpVNy7NCkBrkLbGCFWzwVHUcEhLr8dapWjmivw6RCDVZEVUDu",
  "key19": "GavDKbav7CwLHUZrdzUzD9NjENcZ7teVmdrRR2NLoU7TxEkfo12HDSPefXxN1C9y3xTqWm2sHoCowhd4u1rKBcA",
  "key20": "61XAnbrXfzKhHuhPx69TYYZbRNVzoRES1ZnGPSBa45n8PQ5CNSA7uUh8gswqLZ4Z2wyvG65b6eTNrGrgtyCgcEvB",
  "key21": "TFERcxbGf3WTyVu6y2hxgf4MEufPfNHu7pQnojYUQmrKbGt9HsgdfW4Nzw7Qhh24f7CaZjNqGYRUqvm5kQHcNTo",
  "key22": "63TaYtg7sJVkXx1b1VtECP5k2P1Z2XTKivCEv79q7xJgxeFXMWnv5FUqAyQ9nKPm7jPU7uQ5YjQvq2PVpkt6jKBZ",
  "key23": "2Qv7Yo4cGdo4LxHRFh3VyyRYpNavu2PxrxmxdF3smWMMknabqyh4W5dkGfDaJPLZPhWQk3EZb4b77HaK1ApQxftk",
  "key24": "4iXAgsih6oBtN6hwwrFVCo539LcFTkfgCLjyGhGz2UH3ih7SNbnQ95kV2tVyh2ArWmYRnDnKThvYZUssAtBdwNbo",
  "key25": "4b81THJaTJMJCTRxMv1Psb6eXEb43RyTvh93GymFPm8qjL6iJCUqFWBafBv21YFzq754aQTswfViyjEP61qAiZUA",
  "key26": "3Hj7rUgzwH6h3hF6HodvYQvWWB9Zmi9SHRR6fEk7djMGMLuHhykWE6n483yEGXQSzuk6hYfscHaNJ6JaHu8AG3PE",
  "key27": "5WePoZ7fdttRz2s8FkYSDWs7gj5uCnFwfYrjhbDyDoatxXBabCX6o39evSMhBjm7fG1RAhp5MZxoKphsPtfiMpQt",
  "key28": "vRF7LwvPTkDTHaa1KLmwHtucgA8Tk6rmDHMjHngvPPo1XcUp36wnJxeDAz45usR2uZRjJzDMMYncDV7XReM85Rx",
  "key29": "m9o41YZoewGJWq1BXCeippwFiHgJhaN3SbT9m9Qgv5xj3yJKib6hTk2G6XQcXCGdM77o659CtgY3KwLurNURSkf",
  "key30": "4GhehDunvqiPM4Yukc1HAzBVf48WWDg82156ZgQYJneCocxqdjyywC2ZctUdNNk4ZRU6sBc3mgFLjouTBCBY5xUN",
  "key31": "2F2XjCciQyrEELa3jGHv4vQ6DsUq1oy431L6gqgHhpSc5F59ys1dPNx1qJ42bRBHxE7fodLP6P5YPdXkZKxSnEGJ",
  "key32": "5ZoheGWBiXJjjCbRXpdYQtzrSPxrmGnN9ErkbbYB35DaKjJSgnGhHYMNceCUJqxCLRPR5YP33e7aEbL2sqLoUcmw"
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
