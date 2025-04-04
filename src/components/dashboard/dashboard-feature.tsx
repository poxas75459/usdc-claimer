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
    "5j8gVUhyARc9dbcmPb379jPoAx4DVrx1y5sVruykhxsrRdit9FTLMfjMc4tKaYfQTzUvN2tyws4ATuq4zGu9hfwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bBgg9Lt7JyfAvc2ienM6AmiqfZ1ZdYLRst1wUMLuN4NvDUAkfYjPhjC1gsgDs1S6qBRepWiK6Jn6PD3tb8jJygt",
  "key1": "3mc7T1zdFJAtJJDfooi2ZhBpU6xUz3BaAAtdnk2VTrqBUQ5VS6Sr42Dtp3zwghKNws4AVg4a4YkjnfNR4PuCfwzk",
  "key2": "3mhC5KaMNNvYwTaV1rpCJ7hw5u8jSgAdw6MrGi6bmwJncQN6dGfC21zHJKK3b8h5xfbC5yB8mkKWc93AMf6Fr8Pc",
  "key3": "TXEz7CL3z35RF3gcYJ3Y43jnHQbq9RzmVWxt8KBqBDrGy8nkt3RvpRpqhCKQJaE899veBQKpyyUj85wWrUvJbp8",
  "key4": "2NxVKSSSh58iDmntCZHTyHoNXXMJ8729e5TiSbd2SoggxAfNUjv2XZGWHFL1EU2GS7NfYaFdg3xpKGxwHh2g5C3H",
  "key5": "4br3vGAxqQRUh1Fnssp9SqDQBjTrkSMnDiKqfgDTgaPDaX8CZjriqc6wRQLrzCdJ41vnDJg1utVa1NjmhX6gsSyS",
  "key6": "29Zajf1p96BpGD9fa84Y3CjSpcdHWaV9f7NehM96oaw6SJrEkVw5xTE8jEwutVGifYkstSNVbsgGZfj54r77DtXY",
  "key7": "4H7zasKTV1t3954ZZASJJQcQ98zo9HisyWRyu5NME3ZHYErwsiEJqWi4SGMKndjVF1oSndUkJpcrxfbVo1NwKxtb",
  "key8": "2SDSNHVEEsVS9s1u97jeavit63smKTQzFTYHe9WkpbrzZ2qke1Aaon7qD3VTBxGJhjVxhPY2r7zj6p6BWGmLdiWx",
  "key9": "2FWDgKrnV8ko9FQSMZDoEW24XsWmYDs5EtTqn3X6zLWncGCTsDD7Xs1dsDm9eae2oCRFVqu14w3anQvdXYde94Pw",
  "key10": "XzRX1Qe35zexsMrh3EikeLqz4Hew7Wjir1qBqQksjjYidTo6QhaVbA5PsaM7Es2ogSZkLtiUHUPdrZX1yBQAMjS",
  "key11": "3rHN8donYbEvtbQ9DsqFRmCh8pcGYdXtBPCX8sidxKgJnJH6n1LATMtHjHBgGZfZNYBPZDwc37EQXvheCM9myiRy",
  "key12": "4sB4uheZttVkEktD5XmvrXfEwGsi88v481CR9Wy4d8L35ZoDH8LNKgFVcC9UNr7QNHf231Hy8QnzV23AndnYq7Aq",
  "key13": "4XpDaTjRsTrrmQEqNc4nunpNS8VeRrhzPVy4jWfwvo95vDiaLNYeXE48kLJa9cQDYGVQEBDdAhfBogYPMJ6KnRkZ",
  "key14": "Y22Nef2R75UL9Anp3YSvpHtaLwHeMZEuKtJkdu4Cfsh2T3zR9ZoDgyEx5MUPk5xEXdqFMVTC7ndHU9EMgxYVPTQ",
  "key15": "3xFZWiRMyzWv7Ks2o5vnfCq1inL3QBkEkPxfnoUoR8cbpcDmukfu6PAz5GfztVbEQWWHkYotUxy2BFKpQxq2ZANj",
  "key16": "56VoFC28S6kCPWrrSRSKzNvDtNe69xhh4KDLS18nJcGRgfzWPbJ9PYGvw4ZvvpT7yk3e1hy3jwqxQcUdRkAcyaC2",
  "key17": "EXT3JMXcFHYQZAeQeB34R1PUkshUKRYyqxXJfPVS1snDJ5WU1bqPGSZcD35FbveWoZeWcN7ssdJA2LRXqXcr2GJ",
  "key18": "5i5ET2rrvu8WiTdMra1cHZApP7AeEY6efpemqFkeyhqgZu1dxVrnk5FronPNeFD2fRUNt32uJZ36QwuHF6WNAWzK",
  "key19": "tdk1cWd6NYauBCRUZNfPJ4mPCoELJm8rhyqvBowPemPW8qirUn1FeKBqFrUYsG5d3mb7azG45YDr4ifosuttoCz",
  "key20": "TWXzSnXFYf3N7Feahk2xxwa7JfAr7LQB6Pt7FpkC2iufdaPBUrN5bRY8mDxarbPmsCJWbrT3bp8EsQncQUkuQg8",
  "key21": "5YzcV3C1yUjgx5hW5osS8tNnLsUutAzmEMKzmyECAKrex2drJ8QgTCbXSrXiaTkFd6Y1Qjutk45iLCFpdqwy9zA7",
  "key22": "37DLMGpixefoRbqSCPkbAUhvLRoxe6T89DfXmHuTPtz5yRfuYTYcNt78K6RNfNxK2LvtFezdeVtx4A7tYNLYzRdY",
  "key23": "qgT4ZERaxihQn1zTBVgpBmLDiJ8UWwGX34zsdXKYKruMrNTZARW3SzJoFYfSEzdAwS2jH3qVC98Pg1ZynYiVYDY",
  "key24": "4QXWMnQ9JkGFor48c7b3or6srw7bsNc53yJMdbqnLVf2sZGE9k58yaQg8zeyYB8P9CXdJ7t3gGLAm2GnZvvNMz6y",
  "key25": "5zEd6ioyTuf5joYHMwuvdyBFdYys8GnMEdRyUrS1cynArxi5x7gwhq1VfCKWvYxKQ5zCBZnhjee9PrZoJxMYx588",
  "key26": "5MhNLaqghynAEA1RiqgYj82kGvj3TbfGJjAtjQ3p2QaPTPmQLsTDFH8xzJbqrBfkGS2x83UraL7uoVD7fbGFQsZc",
  "key27": "5nWs1XBwVA5Yyh5AjNNoqmVRT1swZDCTZ8NqbWjvg9cevBzmRCnvJhrUEyoU6LJBdr3917Dg6kBf54mheBcEGYef",
  "key28": "GpM5sBkf7GSYgAEKovtcniSxpGNnd6PA7HCBdAb5dpH9mHSwWYVmgo7QcdSo76nn4PJ2WA8FYQLpRD5shMtjG7M",
  "key29": "4dDfn1iTyRH7THktEF1ZJ7XBgivYpfuvtGtFcmcitmjeRVpy62UGTYT1pk45LRiFi9ZpbUvSpadY8Z5HnrwoJRjW",
  "key30": "56ZisrPPCrXGfLAdLJHCDp8AHwX7xEJvUNVZ437x5a6HVXwmvmqLisKV5QykutZFPEoCKf5ZQJptYnDwnZaSKjCW",
  "key31": "24b1rY4GqiXqKhWRauqEPYC6cW4s3TNuS7HFtp8cXjBFnbbdon8brNzco5DwTvGoAKYzxHX5uxbtjQyQvBpG55wV",
  "key32": "4JPcRaxKNm73F3qmgLgibgDTRbNGT6gaEwMxdyj2xNUJ2M4W3shvgiPu9ewFJb447xgVAWdXPf1UGDQdBr9HSfn3",
  "key33": "dCSHj79YPx9Zvjtu7obMejbtL6UKKcY4S1VmZPfmm38uoh9ewtNtmwXPnap1hEDxJhbdpscKheBKN2Npcp8DyZe",
  "key34": "3HLKfjYhhSbk4VkjeGizFegoBabDfjb5KrwBiXzBDeJ3ATYnSuGncg7bknqcKzereRLsmWWi3gn9HXCCZpvLpywr",
  "key35": "4r9M7KLBjSHiSE7nEXWCBJ3g7dhGykg6fck6jDMLA3vWSU3N1aY9HyJ142je2oJuEsTdFy3emZsDsf6UNSCp6Ub4",
  "key36": "2wG6ixU9knD7xktbexDzeCT3q2YpF6KCch4XukyanaoqrJfDj9aFV175qoouhumBaxAS93d855LvY6AdoPYJsxMh",
  "key37": "t7GYxpAaQJA3R6ScVFnqSbjC1vyzdNEyY4PSxF66yMYwxqqqUKEf2jDMZV8w4Zo4kCG62naaitCXL52DtjLFDst",
  "key38": "Jpg779xUKZfbAVPqTj81j7r5DKf7FwqyNDKtTrzFLPTomUSQAHoAZEixW4pKWassYBT128QR86nE4GpcCGfNgjU",
  "key39": "kabgkVvrKB1wDzL5hHBz7rTJEqaqRovyPi91ipaYE6wveG1AWcogTRhz6BXXBEignieNN3HUrvmQrqPRFSxT1qe"
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
