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
    "5KGeJXPNRzU4iBrUMhQgjtVRYYywRAPahUJ19vQT3arT8H8DQS3jgn771rLkVMxiRXd8HqgJXM8wDMcHYDV8NiFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iZRYkDSVr2QNt4s8DisSWMokfuWy33bfsidiF9RsxHr2qBU5xoMA3eViR7P4jnxQRiHwofTXQJig6uUuhRnpqz6",
  "key1": "5RNpTuP5TQuShRccxia3ZJcBHpWRwfcGriZSu1SZ3QgCf9UkNGj4exiZHsZjizSBe3uhhBkyMppCyFxijtiCRZw9",
  "key2": "57NJCzHWdp9PXkghgB4VNwUveFmk6FsvNZ8mvgmfxSPubfbEEspp7KVKtXKxH6x7nN7c9zf1sgmZSCsG2Cqo6d1P",
  "key3": "KnPMHSbczxXXJNdhx1924nn3LcuV4CNp9Ngrewm5uNYv7A6gEzQ3RAaXBtG5wZAU8Twvae99rNPc1oNbfQQxRrY",
  "key4": "5Yf2GsHfXMuwNvvELVevcYETiUVeALziCweePrhTARJyWjXoZhknLM3vUToe9UBZoJ3t96f7zTNaFCUSaVXtdpGs",
  "key5": "XqMYU7SWURvnEcsdUnvEHNJeSF7hbd2G4CRHQQTARhdrYuTnt6eGgTufNQEwEbXjdLeVByzwZPC8H4EEpDvtfpg",
  "key6": "cPPGkkWGmgpthwwbbavZYVRrxysZS5P6rvMJiKpjB9JXZgg4Yh8aYfS79DZNLHXNeVXm8U7fyYcZS3sAjjZkcUW",
  "key7": "3SVtgbsggHvZ736vkxuqVtWNj6azcd8Wt1QE6U7uufne5LjKMko87C9vyhYRiQLojGRhk9qUaiqWhGXKQNA8VtVM",
  "key8": "43RNdac47EK2NgF9WsjRg71GNQrTnBnwWLxAuJKmzWTMYy1Bh5Bbpmh2wP56E3utMpJZePF3n5vJbLtkEuBsi4Hr",
  "key9": "2vuCCV3dSh1NUaWmeEqXdQWDkzALKbvnMbgU2CzT5uR1VoKYm8wAkxMzFKP21FFMjXiSaBU91CeEeFVsRTRwqkAR",
  "key10": "3CoyT1oiBR6Zez9e2AsPoq2xNi2tsFp1TTsGhR7vwJU3FuXBxJybAwoGbWv65yWTJvJn6pZ37PpQ6KtuveTcLfKW",
  "key11": "4o8K8DH3oShizjGLsbSizWpfQVH9XGv4GVAzQzQBySYP5fJoFyq8wd7mpPzgW98H2YMzwDCvNSECmu6WW3eRmT7f",
  "key12": "5kfGT2ZiSMES2DFKTdNuuadLQx1TNb6kdAkgnDC8pbXjY4NhcbeQvVCwDeRj5ATwyN28mmtVYLXMYnMY3t9PCB3G",
  "key13": "5znkZi4yp6rGBgsvAAqRn5MEA1RMFt3VQgnbvQnGwWFTi6DGXSXHbRXfaThwUECy4gCMmoXqUe7aFjutLPKe3f6G",
  "key14": "5qV8MS8ZDXwU19yL7N3RkWJErKEzpp7fmSAN7at6gqqmgWBjnFL9aLVFMYY3U4EWK2LEghx8zj4Xjo6V9rcnjNJm",
  "key15": "3vcaX5Zes1YTsg4LfR7cA3imDvNudUFPHCY4aGjhypuQN6Pb9eazkAT6dYudxSfKXUp2wo3WpE8kjmzeWD86V8uh",
  "key16": "4X2dXDGaY16g8ihukBpMNAE83bVWvzYd5Eu4Ys2DFBbjHx5J7QrsiPAbvEM444us9wV3aNChHYRuA7YBPH6h3bjY",
  "key17": "4xGc6RKhWLwVJ1gtGeviAHz2YBd8cBAE33rgezMRV2SVB5kxWBpKx7znLDbb4gRok8nmh2qDfg1Vd9zfvUSWAUi5",
  "key18": "hjrL9PjWLLmnZXDXVLivniLZ6jdk32ecVTCYTykgBLCuWfvdT9HmK1vz96v1n9Nd8bL7jkMF1SpZ8vyqBFuPS6K",
  "key19": "3fqEJkTDEToq4MRSLw3XzpTCP1VbTQeYNtGJHiJFmqcZrutiQB6AuzVVQQwzXhvxaLaTdZkMBEg8ofHZojDktWSQ",
  "key20": "n833eFdiee4XgaqM688dJ4fPy84Tu5dmBsq7nyPg7yF4jesKquSXuPr67YfD2xyLxoNB5q8q2HocBMd6TpngsYo",
  "key21": "3mMxSMstrmgGcGztNUQ7cDztrRC7sscD86rtM5mBTTRX99xQtyWXzTDXybaYMs1cMA54kLoShd5aAAQCaDsxCZyS",
  "key22": "Jxaf3SrbDyT3yeh1UijeeH3oDN5wzSMYHg3tzHdgZEsRjnYRUMdh5Xqikra3iaU7ZtSHHutcrU3CunYKmVimi4F",
  "key23": "BZ9riJr7Sa45RFFXX4rRTFcKunYBs7wteh2tdZUSChv3w6ssQDfXDUrM2bihHr2UiSBZ4Ao4m4ayyFhgHFLXycU",
  "key24": "2sDfanT3BafuvFKw9F643TuijANvbyxxcqFfLHoits1Xuv6o5csWFNPiHyECEJB2Zt5diK7LzuU3Gz6fXPpATsw7",
  "key25": "3B3yZHWsHZd71ZHoKv46F6zqRfoSZd1B6kLn4bGEwEoXvfoRjVh4dLgFKd31AAfupo6TJoSyAfxRGJKRQe2iWmK4",
  "key26": "55X5ptbRE1ygBkbxz7thQwmLGoDGVx79VVSiEf6GLzbNeniGnEJETb9Zbe19eM7WUCJxtoGqdPj5izuFKxwtH3DY",
  "key27": "2as3Hfm6m3aUuwvAA5CLM9HRREEjK2HopUKgU6yiCUrZioqHd7zx5Xute8VJpqCEdRVwGPGbCJVGzWs9mmwYsdBh",
  "key28": "3WGFPmHC7jUshKD3ARrYkuFxR64iz7eoKg1eKjhJCqhW4TPSnqW5oyaYtAgi9BbmSDxdH7TCRT4EcFRSJosg4VvK",
  "key29": "3e8PYGaJxYBSoqPrbh1PmizqtmVHXWLLnHpAtaabJWM2M9dHTXrQPBRDb4zVmmugNr4cW6kwfdBKvwemSp7LN82b",
  "key30": "2Z1HPGFkgZeRRM1oCb355NvNW95S9AzMPWdHHQv7bRQkr2XAoX6sAbaHptuSFhdnnSpAh4FQqafbFjMCA3ddUKQJ"
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
