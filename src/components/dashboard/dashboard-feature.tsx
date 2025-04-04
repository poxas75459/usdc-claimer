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
    "47oHQCUSKKrVi7L9KypNbvFqYdBfE9zqgp1jDYR7k17PFVgKCYAbNHG8jjytFqT7pE4YmywdYLTCRgtLfcwJDfvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zmpVTXJb66bwxpH3GENt96eoa6fAxFw8YZiBm5SEzDtHNKxpwUfcYA7qaYoN3P913GPPyMU5mknDEfQ6UYqKbon",
  "key1": "5Kxz9BAWrfu8N7zjgVruYCZbe98DCL3UFzKPazd1J4WfZHMPAaWtbosxZHeDQZiQ8nmVQ41sWV4rMV8DJrTqujnT",
  "key2": "4bBrKQMBuxiscuVGMLdKKNe5BcmKVsKn5PnhB6JuDU4ecPFTMMVrigyuXQCtqvN5HQP6hRqdh99Harj2X7UsbhFK",
  "key3": "2AMfxsV9x5y1pEhgipjiRVrE1cBNGE9cGKE4FcHbM1K8TyGKo8KzAcWpdLmTyoK7BrWMQgRbt6yiZrbPgsT6e7V6",
  "key4": "4oNtvMzcwcjWfvjRxHVEcf49oW5vrH5HZvoi4eBK8j7GrwghcRaMryXkdUxV28i39nKqZnbJSrDHeDJebY7Xekjx",
  "key5": "2f3yVJqARL4cCi7vCtf4pbcogT121NUuTHoQKYDqf2f8crmdmcGqt46P6aaFUWyrjKo1r1sS38wHxKiPeHGoThBX",
  "key6": "57QR21dKeMiMfRyVnQ8pkrNA8UEVf4RhKd5Rbu3GunGYeLDvtVY9Fp7cxSNJnqoSs7arM6ts5xvsvC7R2Rqj7peq",
  "key7": "3Bn1w1JF68G8Xh7PkHPEjYYbhWquRyDB8AQuKjmZyme82r49v4UWvsxkFoxtxrsi14PSu2qH77xPf1A68WxkwW8e",
  "key8": "3FmrZvpDqRncKdUbd835WCADhbxHrEER3dhiaThBKWghmFJo2nRcaWtbbyyYkc3DTKLkbPL2MmRkiep9qc6bx5L6",
  "key9": "5Ez297uPYH5HbLJJ3ZF1sFUn6PWwRD1tmgw6qtb8QF3k6jE5FMvnr3XZp3LwTGHPtMW8mTsffVPDDRJxwywxpeYa",
  "key10": "t23PDhTeYWPWngHvhAVMYQ3ZXQhH9JnnpFFaQa1VESfkXL42eigAfC26PoG7vrhewGQR3vrtsGf1o5aLcUBKzPr",
  "key11": "3TmTqDfw7niz39CYd48nc9Jqw8NPfLbRWd55vsKCDPmtUKaaNxFcGfiwBcNNM4PUdYa37eztT2oetMh1osV98NTF",
  "key12": "5jx89RhjTdFLkNzhyfk8LqpHhBjFguS64PjXGgiwfHyFLZ5JJ9abeUYsTUCNUuWB8nRrX7ey7aSWKVqV9BL4BiHH",
  "key13": "5zYHVsKRNrLAtkni8JeftB1CPimuVcG9etecofhpjFUT8BoZWwoXUdshJiKfhhp4vhCrftF8bnv4buMnX9QNony6",
  "key14": "5N2pWKGigfj8jq8j7k9t1j1hPLWWPwLX7eKorHp7KjpD4P6TTbD7WZnX3EXHZuUyFRseftjW3o7PVqGLj94StUXn",
  "key15": "379NAfjgWJU16ZcdgHnD3Metv4bePWYfS6xX1LajBenyuGVVygFPecCbupDbccGAsnR6k6821nT5tqtzf4gBQ7hJ",
  "key16": "8d1jJsVY7CWqu4p1Z59QQ75aH1MNgH2BYt52beqATqRv4KpatCNk2vUjncR89soUXA7TbSKbedGveh6TqdvTry1",
  "key17": "5CDvVBV4o9AdR66qeyXzNMZqsLSBiSbc7Qep52kWKAuTJbhcWyD7mYtyf2jAbjxzqGDjwkAPC6gwYyiyQ7UPPzRm",
  "key18": "2ZYp8UYjrWtMdfgTR1LajmwgtJx4CaqfTE8FTxsTisZDzEswe2UCNbgyc5zKjyKLjLKvcyP47YEUjfy5VA8Jdg9P",
  "key19": "3K3qrxi8E6TuZJXRukZuaorrKeL4SUxPWKmmKqFySsuv4TShQeGtUti8Xr9Z4LAnmWnKeBGzsifrGrgUoxP7Z6hH",
  "key20": "sqBudRrFDriMCzqfhU9M4Pj3tqW8iXLP73DzUN6uW9bic6a5MzighKLdbhP1ftCekav2r9dYUz8fMtFkMu9rarh",
  "key21": "55ae1JZxzEKdBq7z198uwvceNEohwwtuzE9HbhwBAeE1vsEMQaoXWsuumr2oKtZkTCqQYaW9x4Muvuj2oCfdBjFo",
  "key22": "3LqmNAgr9xdETNVuGPFKgbUocMSYMp6asCLWCJKLRbELzZeQG2AvSbLVFqvBtawX49thsPmn3PoikZnPUbKxA8bV",
  "key23": "3ui3o8gC8b9afGf8BHwiGME9HxGXRgmSHtgjSfTEKGF5CsNV7vt6WBxj6kWLHy1ChbwCjG6BBShuukAnFgYFhKAo",
  "key24": "FrNdPBuXTuxSUf3gvN5SpHumsqtuCooKUFNj59Dfkz9y6Kj62QE9ya9TxsYzAm81CgpNoQRkJGG6ofb1PBxwVpd",
  "key25": "4t4NvTpXZhESfsd2kR5uiXvd1hoexPUNXH4Gsb4ZMu6c3P5BPKhy2cLRdpz6aEYNpVTFh1nTzqkMzP5hPPwEE9RD",
  "key26": "wWK9keUtTjrLJd2mzLXthy2tPp3uc8fQiNmsBN7uSNqxncetdwr2pjh5tg6T7aDd9mDRksBUmu45WPEJawf1M7n",
  "key27": "71pTpbdmFyqMMwJomok8fLTrGHjzMG7L5kJuFyvFW2Cp3FHWyUB2tWW7sXpn8py12ANmKg3rmTX7FmvEdb8zwTg",
  "key28": "5raKdpaJW5vrWbTj5hLnZXW4fcrv1g9XQEHEW5bSQwzngmhtG2sQxQwe4MBwJ8ELGcbZQtMUynk1Si5ipzKf3WRu",
  "key29": "3bPp3xQZ62EXuAJ8KjZx7WhZhcaBD673SdRM8Ntwoc56Yh74oACaGjcLtxiRbBnP4UYCgzMmMi8Mu3RBNf9NTRXE",
  "key30": "eVU97GakJxu2FghgQt7YosfRmP9MbqZa8xLQpEdcM9bzJnrzV69pHvHdJw5Bd3Fh84REcncVZP315eohiV9jd7g",
  "key31": "5iQXMf2iTBU6peu7n1UCmBToj2Uj2yEfgtkRaRWvrTmQHaC1cYKQLnxiTodGJ1aGA4csMyBNEUXimxmWpd6pgvEj",
  "key32": "geQzQawBb8RNcd6BRDxe1Lwbqg4TXBZaRsH4oQXiVv7ggfFyZ3zoMLipnsT9rXbrNVsn2HnCVycPrbEyNwdPjNR",
  "key33": "45PFbSsxwVaBo7oLdYrApaHXEDD9g7KnEXQKt3L79jQjDACfDx5HmNQ3hGD1kkHyAp8Z9WiKAoXQ3obujxUi5fhv",
  "key34": "4de89sbheTaSm2JanN3YUCgXfEt6USHwPxE9XQen5ungdbQ6EarT9ZP8YG5HMXXTfZFBxEJsYAARjKS1X3DtvoCh",
  "key35": "3RQpvuQrUhDjp5EJfuodBBKadHLtKLRUEb3LfNb9uwfs5X7KeujtmzpV6XR9wnhoQ3peC8nVMmSkYCX5JHwhJfNV",
  "key36": "4GnBFHys3HkhtgZFTH6pvA21yFEqUXcm4Ey5eYesxa6pjy9zKmUBj3dKV714qNk3KvRJjAGpSqkMEtVAfrxi7FRo",
  "key37": "54Ha9kinzqZrgC4fRr4x2xY5J2WTFcvDi6KNHAZStAFfKH8FXens5fx18aYrdGvu2iT5bBAFTjQcHbffv4ZA5bzx",
  "key38": "5AUk11otsMqZtf78rUNPfjJ453ZZ23gD7ugVNiBE6vkYkrrsxehVo6JBNWvN4EBSCxZrrZqj5Hr9bHhSfBiLwZgr",
  "key39": "3Fdq9VeoYWHPqvH982SF2jNy9UhyeR1XzHrnA7Ms3r3Nxn784dW742c95FAz6ioQEocpVHunDE7EHvCLQevChFg",
  "key40": "2HcgfqLerY9vC3Qc5cEaBAK49LXuHchdmjvVgaf4v9Fd9NeFVgWxJ3HyHKR5iuj8mvQDTwUoE2gBGvWJ7KKiG91S",
  "key41": "5aA3Pkpk6uXtMRDUV652Mz83nQpRmYtvgxeU4kv5aHgdZU82ihLoVANEoFn4kxGPvUdvxaSgJgagJ46RWkV9boK2"
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
