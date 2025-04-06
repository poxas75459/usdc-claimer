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
    "5EGH7F6JuSVg28EYFz9i3KZHg92H1ENpbnoDAzk837ofxMQNP1qvXrn24qFkhXrmwBN84cHyz39eWbiFrYAqvJrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m49KaGgGzS3n79MaPS9S8FmR86m6SLeaXJkDgahJua3yJ1RwVnMjw318HhUs4z4H2GabQBxNfJ5dJxGpLu3SdJK",
  "key1": "UcSNTDPjJDpNz577HJqYG6zau5XvSwziZgnY8CqGDo2GoWy4wuZpffbume5DSdADuSB9Tqw3id4bWnWSFoNYiN4",
  "key2": "3xQtTY8rNPAkAkNuShaA1vMFER9kycVG7VgEzw8cqwLvq4vpifvDhUbKZQVG2uWJK6GjVCdmbX74Z3tAqCGPdhiM",
  "key3": "5kDfeKiS8H5wNMxqh6m9e72kL2h7zyX9mW3hYdyVRvMU8K5QdG8gNTzCv5271DpjZePXZzbaHHqVUYLMKu6eHWxx",
  "key4": "65MkYw1G6sCYnh32s6JCcqB7ggWttVj9Tusjc1DMn6qXrVF8Wz9n9DeTmwYnDwQ8UQikbbCUqvfFEoWuP3ozYsCX",
  "key5": "MUobFThvDxJZbbG18h1iUVoJwPpXG89sr4RYEenEV35EhhHYx6T7L83qeSmUXhmR5SWhakezH4NVnyMsMyJmbGy",
  "key6": "hLYCege2SXjgT8cximN1kk7T15EGoA4zqMzSmHz6Q6c5mNjhdDEgQp7GoHzz85v2CdYyG8xidDwsAB2jjgKwJmp",
  "key7": "4hje273JWvB2BLgjrjrPnKSoQNP1TT2vyctDPJeCs7PKF58k5UN1ESQ82b4RF16gVNH9aUqwQ1tYxDA6cswtFY63",
  "key8": "2wnaZkrdPZbjNNpbJgepxhvsCE4UdkPCJAainuFj2Ww5hB2L6kbEwNc7nEGr6hPpxYGq9T8ABL3rh8caD2uxgN1x",
  "key9": "67jeiK3azF9bpNfk976fvPNj42JyVrTK4UV47oSkG8V3DsWDzyVgd5b4C7aeTDPfns1eGCvHuT1vt7qnRK3koPqT",
  "key10": "4oyHnmhuhdsDREkf3WWZhRXChX2EaecrhGEYrRianGG4vcv2R4RZxFG1M2hNahCTABd1sAEGFdvpjEpzChzoXexA",
  "key11": "36rFcwYC4QxZ8emSQiNvxcLRx4psdjy34xMbDhgCDdKDcwLzZNBCR2fczBR1kMBrnRsAULfXbGhed3dPiZqhZi7b",
  "key12": "2Lh1LSBFPse6cT1Q1JJXdNHSuwvb6A1QKUdwqv8nxYVX9zpKMzn9HZ2eRSdAaVLAju3YdsCZH42kyrPbr1pFk9ax",
  "key13": "66WyQrBvXvbQ3pvUnoFE5kui7LoCZzenE2qmwAuyQF4QKLgsSqzh1DumQEavqowb8btwWg4QDThr2nieccHMjCXW",
  "key14": "3jUwW6kzuA499XVmw9az2Lqd6vv5rinu1F131uo5x2XaQ4mPmcqZvw67xYyTnD3AJ4obkPUJ1fD7KFt67NWSdaQe",
  "key15": "5Fbs6c1EJPAab1KJ2sFfZ8K7XiyhsVTVqMZemntocRioVuVcHEDZZc3HWJtG8rseiESQmguF9AGPt16mSGjA4u39",
  "key16": "K5X5PK947fnxpTxoPUGKKpsKBMb9qGwE6hS3kDqeGCLwyVR7q7x5R8jFQrL6aF9FXuUBAjRyuXX7BQmAjh5B33b",
  "key17": "5WsqW1UpevL4eLNLYuTQJPqTTehjYMYFDqhuAdGE86qE4kZELyyC9pgq7BmMTu8gbGK3wniFAPBnWm1nNDNtY76q",
  "key18": "5zuLtEVWG8ykn6foJt8SLaDumExSc5378Pmqz3yHWxkQpAddhNof9CtRd75gEw35repGPBwbYHQCgT9BuALeSb1n",
  "key19": "2W1MxojeRNZQqZUNfpByy4e2AXG6RAQ3Q7484vZumMtaXThWqXh9dabamgcLuzFvn6bCEP5ajjXs6PwgHj5KA5oX",
  "key20": "5XdX9N6kZoosg3jXvceV6A1xywg91HLEwiEAf9D8U3BXBYWhN6BcXxHbg3LimgR2Vy2UqepoSYxowMqhX22WAFuU",
  "key21": "3wvQwp51QrqzqhgAV2X4ufnoNdMDN3XRQ2W69FBYBMctu3ABL17DRmuGh7s19TQCi8q77iXaWATWcBDVwj7MrXjX",
  "key22": "4JXZSiRUgrHmSxD4c11Mfg97Ej2S4T9cNHMjaF4aj87SntjQB3sg3kP8NKTfHiPahPrcNPSbsHdMMTTspfNqdK1S",
  "key23": "2bA45UGTuJjJ9Nq8RhZFFdWLi9JTiaCiDhtq9gWxEgPDxVNF9GUJ3wfiqkzuR4A2nMPjnLesu4ZkNZsQsh1KWWfM",
  "key24": "31s12R8CUPjEbMhbzrL6H68kcbsi3BQUJYpJtB6kX6qzPQFtb2qcMMfQCR2tXLzdeWG5g3iF3KTCzTaLz3TKLbL2",
  "key25": "2myC73ZrfhUjsFXEtFaiUZzNa61KfdsiftHhKyaoLsnwFaCkm3DYdiQN9wnXesYQKHmLqLJ6PR4Qnsd7vQGT7Zei",
  "key26": "44tChEM4xT3LEkBHakywnuyUYpByBKGLXEGGrNQb3MH71355ugcgXGiR3sgAXgPRHFoELV6hg3kkgXe3RBjAbZWA",
  "key27": "4Dp7yRn9Fo9EsssyaLvybG9grdQa6FTdjWi889kpQTCMs4niGDNszLNtGksE8MSpxJs1ydB2mJbzhB5i5MeSCfXz",
  "key28": "2N5CNSboG5UYqVHDfrz7EvFma9eizXU3ydhWxBm7ht9giBSoWvMptEjvppKgd33y84zafqLtFWGjE3SZxj9s9JwD",
  "key29": "3PT9Kfc3ajJT7d2cWneRQFGMUNMJawYsXfJYi8n7QQxqkeuQbRdAb1e3KLBJ5xAq8irYuhjMurJu4WbP2AFTn5yC",
  "key30": "2PHdxCg9xXRCzUyPv8fcE4osPLXbwEKbJRMFAwtDowfK5zaK1Cupyij5uqs1xntodKaD8B8TeDNCh41pUR7NaHQ2",
  "key31": "29aoS2nGzbHALudPi7ncnY7xayQPhin5q5TFgNsLN948RqWgjoBmpg9edaXwk3DvKBqxw9ghzY5YQLapoJBj9gy4",
  "key32": "2s1ZkpSKxgRmaFUHGQVSt76X4XWsPFznh14Dx8GPjB2PTbEjVKwquzFD7ZKSsjeK5kbQgVnNEGK564TmkjcQ42BG",
  "key33": "4YKxozwAzQjmWWt5mLXTA1ukt68VhrQakwDxzDMhSWCepxzuz754PPuMd7bRmk7hh8vLjDcwwWnboxLxFREWUgVf",
  "key34": "21EaBDn2GBBCuH1JhPrcMN6sMp19b84JTqfgGXcqDAXGBcisYqW3w4WqpP9pXjUHZpcciGXanaPsH7QrxGWoRkLT",
  "key35": "5jWZeZoPDTnQayxCTJUin2N4TCu9brNV4kvd3ydQpiBApXLRjDUoPBLQkDPfoDHowe3yyzVnBH1EJuuKKNwZnQDm",
  "key36": "44KJstZwcjKS8Waq6JQv3aDfKhvDU6nMtHvqhtwsAjeDtQGevdBNxGMcSe71sDbEPGUudHNZCddyXbXEeht3KS1b",
  "key37": "2wTGDwYoe2Cv4uWGVprknyxoXz6fYzpd9Qti7S14b5BQPDZ9i8diLirZjZekgwG3oxhA82Ar1GsHgZLyTbf9Jupe",
  "key38": "5tcLwB97V61AT8jdxNjBUC8uoaCT9NfN7AY3sXsSQUkj5yyoMtgQzWYvHz2tzegVgRASaWbd4zqf5qvGqAM7rvh3"
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
