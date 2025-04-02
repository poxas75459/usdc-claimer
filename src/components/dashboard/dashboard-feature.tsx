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
    "4u73TErgcZ9LZ11ZNogUNkwGs1JVssgcTMT5MazZHRJgdEc2Hkxrts3C8jknAvcXTTRCoAUgHExnUsCbX7hsMMEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Shog2YJzpAX7MsAeBWjmX5TweHSVras7QLqZSdqREVYEuVu92pB2notQPTuToT6LPLTzZr44fBhs3dt61NHc5WH",
  "key1": "NQtFf7cKRkcxSrx6Ez2rkiMYmcWy8YP7AAKTbxotSLxUJtrygez4EpjUNmx3Nsmbp1hyceXk8J5gwT5meKiqy6L",
  "key2": "V7PsEfFgMeJ1Wtg58podz9FvbJVQNvvyYZXXbh5XUvsXqtn6wDaXcJczAn6wjVxMHhs3Jtbqh7P7CbEnmZLd8bd",
  "key3": "pTNaHdMfWZa7W55mtfenqnhuHQgpruSvAnBozgVDq2arL8ERSCmWFSCWA5pg1CozXzxg67FSKEi4YvvhDgdKS9D",
  "key4": "562KrXDxqeZQAvcV2oN5AfvFwSTfevjoon9bZMqLNb7FnCgfvdACP5zCk2D7koykP4fHdHXzjsvEiCfJi6vBGcw9",
  "key5": "4Y841CSZvkhEKFKrkz3smtJfnkM7x8dNXthiykxZ5jdYcSEmBYYHcV9TBXGKHpVzFFCYfmKXdQstteYiPawzcGFv",
  "key6": "RvErsiuaGwxkT36Ew33LYS21PKsNWAumgD6qwYwvQQmm5trYiF95VgBjUojpsJtPTYsDThqJNA2A72KKjGYVA25",
  "key7": "3v2BNZsiaUeKzeuHSGjNmb7Y7G7orNB6guQ468to2YSiUgqzX2cnGEA8TEkrgmoSw4FjpRfqeEfGmyM7gGmkefg2",
  "key8": "5M88WJpYZ9V9ikAPZmZY2h5JtERvimFecGF1zkZR5KfyeWLwbExtBQCahWtnMFAwT9aEjYvUDgC9bhs2atEbftpJ",
  "key9": "64iJJTabyGVRm3ZGqWwgJKobiLdShoFM16ppAkL1LZTibd28xBGUoQ7knPN9nXH3pZeVCuHGpi9GJLc3MFWp9U1e",
  "key10": "48ZdawZZQkLu3UsLcP41Hckcm6zRWEYvRmfdUvqL12yL75nf8HZZF6zxS93ZBvY78J6udZfuoEKKoRxvAaqyakpz",
  "key11": "3pcqxQX5H7SrE9TpXJjdNQkc9b9m6BR2VefYubPe9KzasUCiQcKNwU3fJV8qtiw3Y7geGDY3bsqeXLGs4YGLfoNE",
  "key12": "4BJZ6oLX83HA8ySEysNnfS7qTi3mNN1oVdv3UAjyRph9KNbqBaV5aPbGeXsfMw9sgz85FcMhzJxtJGRHpCApdnzZ",
  "key13": "2JTKWASxdcmN434ynXCAQAAGGmXCQH7f4Lqc4rWmKk2MNrFpsYRmChsGnf4ctYqF7uqnb7bchjqtdxfyVim3RdqD",
  "key14": "3tY9ZzwkNH6omX1zGDD6H4pRLnhWny6xJXQRKZHhV7w3HXxiTSATfe2oZFCHGZuHcURnBjtyjPNphpWsVFudgTtW",
  "key15": "5Uauo1crZq9WoiyRPrfZNh8Xnq73haEf2YNr9xKepAeEcT6BPPvsay6B18ngM4fjjSd6NGXTm6Zkvty3648R7s8T",
  "key16": "3ShQ5HujywcxC5mWZWFpYH4MP1MhAwzt1sMcyvnCni1cuQiAH9E3w5iYqMxQN9ZxZZhMy9PFn1B4NV2WgDyCZNAG",
  "key17": "5KdaGpbBjriCMw7f53AwwNqFLezTBKnGwxy5S7wZGraoHtas1FsqqUbxsxTKTLCarSi1uvQvDeQZVVcU4G5WkVgx",
  "key18": "dKqfaZ2jytiEohXkAkz4KGGNERtpfkZiQjVBR4zPB9dDjTjsSibTczJtkKptwfMc3NZrXWqytsiiFob9tkfNBqg",
  "key19": "2QwyRbATi3vL1aqdkqRM2Tha8Utq4wg7oqaFXsppggcGzj7e6Fw9NbEE9LeimfmrUvsFpJ12qdYtioodDkrPswHM",
  "key20": "34tT6AnWJUw4Uxv1JyAXG6rzz7jcE2NFLqGfN2m7bZRoR39gRwsLNmH4KuaqYxZVixrpjc9ouoB8qSz2ZZAcFE8U",
  "key21": "5Jmc4vTdzNszvzEwWAKPGFdWn5nhcS52kTbjSv1QBk9NEgbeWBS6Xpt3jpf3248K2xDH2dwDCE5ynvw3mcxedhKy",
  "key22": "4tAksZ4ytqFrVg1kGRsxySwvTXE1k5KR137CnvKAadb7Y9aKGLAEGbw4ZfoSDy89NdFFsfWqrCcVR5XWE3b5y5Xt",
  "key23": "5yLAdiZSkuQtnwWuLbx3fZDdy6ndyYCFbo7SXZKFWYNtjUUEhoUQeGujns1RLys6PynosvZitzbNSmJ1DTTHhwKv",
  "key24": "3pQtzWCF3WkSZYDuxjeh7PduYqEuaKbFV2FZBin8Y4G4H8FAT2iUyiZkq9CmNnMsJUX6o9tqbrtAqnjjzpe9LpP5",
  "key25": "5s4ogMzaGxFwTsaDMpRUeLMx9GX2yqbtBFUqHCVjdFET8nScZD8WMxo5GitxEqgY4pPE5Q9rjMiPekQDkLUUAFZC",
  "key26": "47rL2DjCejt22BNfq3hBbmnTbpsG8RbN94PGLUkptDpJZHt624diSoaiRVrwkGFFYSL77CrsEVsWGWZt8qiz8aew",
  "key27": "2inHaS6ps5NKQmTCQX8T86B4asbSxa5DAHovCFTxNafG87tF18YZSARq27REMD6d1VfAzf7p2BZwJ4EYVt7FTNBw",
  "key28": "4sfnozgoj21CxstvTc2ciUFsYi2YCBMtjZu5vDLivMyPZKvbY3xYKDxLnav2aLyvo3CjvL7JwWGF2H5gdX5kYjzk",
  "key29": "xEDcc3GTBtXDPrnavGLv8Hv8yxHomrbB9dELmFCVAm6E2W2VcaMRJKKxupZMYWvviQnr6F5GoqZksh5XZ2yRDKr",
  "key30": "2ikgpeupg68cDjoeqFi1JUb4CoczK7vutuCKAzxPwHbjnMSnk8Xp9DSKkEitqTkBi9PKD37cm1SkF68jJvuYBaqf",
  "key31": "59Mbp6UHqSkUWJXiKUGZPRgtLkUU9G9RNC5zuzzdYHUvri5YuAWth1feEkLTcnGSjbFwDng61KaNrVQPWVAP8Pwx"
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
