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
    "Cyx5xYCYrnCYY1UoKheDuFy4JhN3TaxrqR6jh5QNqp9RF9vGmxDNphTLhfjXphAq8ufZqke5KyuZKiCvPdwrygy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fdgGn9QbKWyEX9ZkqK8VSsa3vrNGSZZRSaVxVGYop3kFozMRZ38JwkqJqghXzZJJcp1CTmF9msZmbXtBFeM84pc",
  "key1": "4UjZcfmTAEu7JETNqAHDMyYStmZ2tDQQgbSaUqbTHHUFULaD2SM3PsyBuV7BDJa1Zt7MXEgsMk44tNFeporiy85V",
  "key2": "67VC1HxEe6QK3z8nAUuZC3GVwKqjy94mm5E6xoatKe4pRoUkP3ra5N8vJqBdSZsEU9YW8kgpSqRQCfFwC678EdUT",
  "key3": "c8EuJMY9DiiUYtMrzQLtogZL4uyydGSM2L8x68gJmFkYX1xHvenCGH6KisNpcoHnMVvVKERkEH22XYpcaTkZxEy",
  "key4": "jAd6mxsdFD5KVmHPeoECPpymnWnABXbBJeKAdqqSRJXnjq2yk8hUKtb6F7LQvQg4AKu3iWZYDYMigzBVxCQcmpu",
  "key5": "5WxhYYZTvoA9Q6caycaJfDmJxKGamYpooVswpUJSPVrQcvgqL77w77cSuvnaimX3ZtJdWug7Dqxb5qLJyYqXenPL",
  "key6": "4VoqYLkTtrvaJswocb88Hi99DD6pQKqMp1Gs75kcpcWuUa9rSs79Ef5kGgJwKEhG4KmjyLX6rit8yXpQjGABVJKw",
  "key7": "5Xr9uZzT4VEzaBKJq6u3dYZXagqhfV9NZajFJt7zbUZqhwck5aXXZynhT6T5ucdyKmiybG9xouvkZVKekmH8MydE",
  "key8": "JjNuaTnJCm6BcfLMYyzyLkbm88txxJE16vBNqdHA4PJcGKz6Brjq42PXkUTNckQPALN8kSNdn3f4K7Cup5aYazo",
  "key9": "EGAfNYZLYaf7JuvL491oJnYJgZ9cmP883myZtKAqp588L2HU9DTAyrdXhTnHRZa7BmMXG73PkAZXEdMTaqg9aeL",
  "key10": "5P98daok6wbAfgsF6AxpVNZUjat6NDH3ZKtkHHusAZ74Yaog35jzwBRsny6pZEV28vXiSbGUrTn3jaRUjfm9LTpg",
  "key11": "3hxN7mwsReTyRBQRWLw1EGsNLao8poJnpy3kBRy6XgLmUnPovEkcbXP1RzPF3r3AojX3RqprTRnv3yAMtJixYBSK",
  "key12": "3XX9Esx5b3CLgx2G47SN2QrdEVavDBotRaAwx6jxUgu4uyJYc2XgiwuGBChQNycYLoGxS4MetBmpeikrvJThwDkZ",
  "key13": "67d1KME3U4zWMn6j9bYDdJeuSt5CSq7LrgYvNY8WRiMevTGrMzzZSjnBXVBobpjPvsaEFgJ9AN4JgmcsXfnfpYAK",
  "key14": "2CtG3bomrb6ug2WhrAEsPcWJcUDsMya5Giwm5QSJar41WRK8C76gwGfJjqUNqY9hoUPTzmZQ6ygyJNuLAet1MPTD",
  "key15": "4JPj6yRbSZiWBqPVVgi4RXoAyzoRGK6puuqQBZmSg4xiYEoHqsesPk6yyXWZ9PoDwLDgXU39jKc6GgijS5cVHwCp",
  "key16": "84xqZX14wSMkCDLA3c2H3beCCxCrySwZSk71vL2qvfwi6CqrATueKgY7ZRocfVqiXCxvrXRTycxyN1Xwd3Q4v9f",
  "key17": "4kSqoFVFbxvyMt9PDMXpKV5vRgKtmjL2Ldt5JFkDuWnyX8PH9WdgKEk1Wv6Nfuyj4xf5v4EsNxhAfdJEvMhCAQgR",
  "key18": "5GKDGdNEiMrUnuSVVVb6hNwhtXGpj2RkVcojYXiUmj7Ht7EHL1SLbzczxpfnaVPfHZKkVGjk4nBr7XyML8htgkDq",
  "key19": "62HvY8XhdHbo4bB4caWN37H8Tpw9GogR5BQjkUA66MmwXzYn9QT9d9iS9zxn8AUtzTvFhw5TrpHsthyVv3vm8Yde",
  "key20": "CvbcwBf63EpdsfYKqB5NRDhHxrmgmc9FR961mvWMbZycqt3xi2QWswsvPpYkgdzWvYLiTnYr9hf6CcFmqGpBTbq",
  "key21": "2agRxKz8Cwgvczwjbbgw6prPLUEWdta6YER144GkM36iZFAHPWXSPYTPE9UsmJLERubsDhMJr62MQx5cdxNFkqtD",
  "key22": "5uC9GxjgYZiX1U6LknceY6CadmL81JCqfXFi6fFrdmYtMg9amDN9TyrRVRUmeeCTLVsZrL7qSUjGHc7Qg2LxigvG",
  "key23": "4ZvdfXBEJsC4HHSbqAW3aL9RoPWZJkd5ynZSu5yt5qEme3EwM5ZoAyNM4aaeqxwqYDPAfYw68rz9rYUPKBy6BFVu",
  "key24": "5jjxY2nGLYkgDpN6bDkCsmrWwDRaS7sDeojEKg7Aba78sqRpXYCqZzs2GfoUnZPL7PRjGJFB1vGKJYXiieZmhKD",
  "key25": "3Wkqvdj89LQVmgUFGZQ3veSZdXW9LQrUqJLXxop5HmmibTbi38JsGvPjY9ZN71Ur1UHjvVNwNCRVbtVRvuXxw3hg",
  "key26": "4vKUYBgGU7zGjio7wJGhSVS9HBXoFaKuXsVeVvaHUuF7xDYKkDKLT17To6w4cAGyTkUoXuHVRcEP33MGVRPaZjJ7",
  "key27": "iytRqvvFrJ6kzi6jncYahK1VqAijd9eN7WRgbtJs25k5WcUux6NnQjRjLMh2gFCxKTWbVCg4XtTWPKqvaXhKZm6",
  "key28": "4ZV7zgb6DsUDn4Jo53zdeJ4XbYNJjuE48F7Cdz4XLSQGFhx5jFvEakDTvBEezDSatBKL5mmJxcCXH77z5KTvHFsw",
  "key29": "97wC8oZ9yJyHmxiCiWLwg5mUzb3pFKHZvheK6XMgncA16Kusx7gzJ5W8eyx1ruRYKaycYB1JYUQ5vEdMEcP1EPf",
  "key30": "34z5rpeFdbUSbmcWLBvBp3A5oe76AnwSAYUPQcKMgcLgqRgYDYDxZ8cQphddrPg5xCL3do9PuMPU27Xdk9qh91eA",
  "key31": "3hALi2E97uqxLi9ZfCLppwsNXGRhhzixjbE52C48ZQBVvevqmTgw2oz16KVoGgxzdhTXhUD5B51pLuuruiFwGbBJ",
  "key32": "2WK6jBpSutLYFP1YNQoyB7e18tZpBwvxK1yHGs4gBQJWBERK3z3BGntiRJFrSyRy254V8vUyuV7sEiz1oDyWXwj4",
  "key33": "2yz4n7zVNoCi8e5o74ypsJjop6DeeMWMQsRTR6Kqc53sr7Y34iRrVegMtxG1UuDWVN9tYjHR5peu4JJbGJwGKxxX",
  "key34": "2QR9zHcDm4iXf85kqtqaiWWdj6yVTD2Zc19tfguH3tw9DVEro3FMheoVwKuXVzKytnsUACypLyKJZdiuqDBwBNvf",
  "key35": "dSuDpAFtbcjuER8b45CvGo8HvCD3bDedqEgyUDtM4Jah4ziFFVYxpj1sEn1igpnQLoNKkp8vrT6vPthXLvsAt1E",
  "key36": "3JYB5oDbggwsP5FhQF3EiRBkTWeHn32buk8kKPprZoYsxHBpZyqwDkHy9wUwjajza8Gcy6WRB5gmcpdywn2DWK7N"
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
