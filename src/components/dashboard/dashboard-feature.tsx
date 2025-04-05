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
    "4LAf3x5E8FCoETuQASXZe84GrMZVeESym63b3TPyA55vQkxcvL11TwE1ypfAMUsKnxwBW736LMEHxnHFyacpK6vi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GZhZdbjVKEHgGPh7LWL8RrTjWNb6hPqTJSrubVkh9iVaAJXjAqhhBSvNqhPjmg48RS1a1WZ2Tc3rrXqDF92FkeV",
  "key1": "3nhsbxfrpkQjsdB8dEvjbifH2fH5LwcWcsJhAMuSbF7aAXs37NkiSnmLqCCBqPRYAL15yYQYxRfCoYtoLYuxjXQC",
  "key2": "5WQa4ZgVS4XDFKW3HEHhBaToutkTbgkhNTzTEWP8BfcqRCBpYUhRbNnnuRCtPiGty1PYm5fDwfYcSo78btQr55BA",
  "key3": "5UiapPJokXg9VNUdxYwiK2K7sSFnYP2Gdm2SnTDRc8GkxWDp1TmSY19SEfZW3mCk7qaJ3oqVASV7qkwqnwe7tN6o",
  "key4": "i4EqL218MAxcZDtxfrEdPHi9dKrWtuBXWXG7wDGh75MhQ5H8yWJUnGqns7H6xD7H5GVBEFAHEXQfCmYwWfhmVwQ",
  "key5": "3d5LMChn86fMh6KH1zHfTRr7VVoF9v8GqLj87b6xPj9cN6wJ6RfkvvyH7CQ8H9atyenkLD5jKTQ5RgTDRMRVSxxM",
  "key6": "28hdisetQVKoTbqmQp7AKr7bc5heSzMEEDBAZzGkCyFZ3mZT94CSozwi6fDR8qrM6ag5aSgatSzd5Ca9Nat7AsGc",
  "key7": "4Yo623nVKgpRZyhVJatxepiBBSwgzS5aGQyux2it8E58twr945YffKQekC8T7CYmdKUW2Y8E29HJDpMun3dw7rf8",
  "key8": "61CywMTqJF8TVstc36LbKYEkyfth1tJoxGikaJ5iyvhdzakjhgZirzRPuFEgm9fEZwdC7XA1TWFUSKb9pDedPau7",
  "key9": "5342zfyXYZNGamerixtCgSajv5uk9Fx3sdRHCTAGTg191VbUxUq8acPLSMEUtbByrbFbgu8pJrkS3No43aZXvFnx",
  "key10": "31SuD1ApdC2YCSJGzngtbUhBYAtD6NMHEJjRJnyokdWypS3VDfPCHUjXx5bJgXuCVctwRwQHGeGumXWVhWo5EQt7",
  "key11": "2EL36BdiJ6TxopW7GNBpbiqGmtJFvTe9Eq11hXBCHWssJL257Dr7aRACjaLki2vJPAxEqteyfz3pqV8zGvrLRj9V",
  "key12": "2Nerr4wbiK9L3LTxHRhGnoggmVSDsYM78eCNACf9tLT7hMsMDAvCBkQZ9nkY2sTttfmfU58dDCexEw5rSbMfJFXy",
  "key13": "phhk87ndBmCQC5yq6G8xuo9EdZMchZynBk3gqagDyYPbp45qbWDsocUGoGdMGqHoPTawjobeTiUY1H6iHYjFgSn",
  "key14": "2GBkUCRmtCfd9BJxZEyqGcvMw3gd9zU4sQ9vTD1iayinLtgU7Tti2qRZxwDaa9Vd8xF95DxS6fJBARiws7Lj9Au4",
  "key15": "E2AR7ur2JajyvU8Aeu9ZbNU7d8h9eDPgMKBqqteXQjjXuAm7jRLoWCSpmWUo6Gr9apJpKwKEEiPCzmptnCVJoyH",
  "key16": "3qPp94AU3xYwsR3A1RkFjNoGWnc2ujhMvhcxy2QCcqqS3HZoB7qHvWXFePXMDyMAx8pDqRAsV2DtYGFF43K6oQx2",
  "key17": "32ooWmopBwDQUdT8hg3RJwBkaDUkWRerL2HMRvJpsxVsPtFADpSXapATk6pSpTYhkjGUT3VYmPrm4q3qZB52GH59",
  "key18": "41PYwrUax1pVF17vziehzsZBKwzvhpdpXDymXqMv7dj58qsgYG7dcemBjhKLXGhqFjacXtTiaojwZWe4QeKU9Gf5",
  "key19": "4bcQd6BdacbnpLTiVbrAQCyXTsD21Hmceuya9s4daReHdT5xHZaKJgYLQrECikkoCNHfQy9cN8RnpXX6vEK71jMb",
  "key20": "5JT7Dwams6K1S1HhvJnJ653sU1sZUhvAEVNx2TUEwEdEZUrwKqTjgPacfLgKZ1Q9SUiB4ZutbWqMaMP4mQVCEuLP",
  "key21": "4oZwgZow3mru2D3r1VzzcYy5EwjWvB64XeB3c7BHM7iy3ESoBRrLyJmUMcGkaQ9aQ1ksWySxmhV32Rap2XdnkPyx",
  "key22": "63ywj9rEPfEjXub3jK1R6sjWspWL1eUacQ7gjHxNPsECFGbFYDEEsUBMfxJYMTLKtLkAqxGQfmuTfEb9bv9ZTh7E",
  "key23": "5TW96Wkw4HuJ2BAfKYzwAWfmDpypfoqdfvWnGfFgAAsAg9LyUj4ZN3J3RR6iVh4AfA1wNiUrDvwVxfpULRFyNKXC",
  "key24": "cW4BmcgBvcQaoQV6ios7psqkR13Mt973YWsvgwfWv5iN4Y9uA2U8aJbdBD4k87zmKyFZbsPjHDDzU9tL9S6h3at",
  "key25": "3PKRMXNHmrKitiiAddzz6KvwHtSunYspLqZamek9bfypQJeqpvG5J4ARLSxpK889xb6NzSSCSRgbZokjbssN4uWE",
  "key26": "3Pt1J8yNreFLZ11mcsP35khcYtSqWBY77fBxwPk6mxbKNfWX6gPWWuA176E2y87rSAejYe8SUxavxKRRyW62HzuZ",
  "key27": "4ariHEp3Dh5rS3kzXXM65UVWrbZ5q4ug5ytzdCQnPfyMYm2aGNLtSfzRX6XdNnqtHAv6a96TEptdHyyGEJBsac58",
  "key28": "2PUZG4JKSa9Uoxdot2JbNSenHQcvN36eFs6tCPiwJJybTo3NY1yEG7JiKKSSYu1bFS5BDJyBhBYe6KixQVyLu3y2",
  "key29": "55gRDYfYh1ncnHZhmEzAV7DVmTgw8EvCPB9CvdcGNXQdQmppPM7oVe3Gfth7NP5DuqHq7qGRRCHUbdvmUFyai4Fs",
  "key30": "4WTLHfhquxqSyfG7M22oVdc49MdEjuyrMo9S3P3NS5Xbkq1qqAwXdGCR6145jrS4asizJvWjsMzYA3h1oUgFki8u",
  "key31": "4Y5xbxMHbyyuuPVZE7dTKyH5ij3sNSNf2tdZWAQCBWbcsHMaXduHbJo6WVL7zpVjj2sACXmTE2Nw3cYQfmeSmfRK",
  "key32": "2QYtY5DBXnGxQanTkVN6BvQJ3wqxgd9xMxSsN9g5hY9trMayLSZLXJm2F9Utkdi4GjmHdmBauzSm62aW6KvPX3ZA",
  "key33": "3PTXaxDdPC7t2yq3tG4vtMPgw8nLLFCTAZtMjxwWJcasrh25CsaugL8uKRuRgYqXkoxVBrLniDJps6QFtS1pxG95",
  "key34": "2d8788mD2Zccs3FztoGfpYndqJwZBRoVamARDRFoQ7SHKdqZQvUuSc7nv4F2hzsnptfxc8BW1wSF7ZF58F3zsYFX",
  "key35": "VevXH7MKZub26rGWvGoREku8gcgGC4MWtMJnDCQN1Q74urEGpsx85vqQYeLtWMdaKiMCPZpFN1zjpmar6cemxwk",
  "key36": "4KfNBYzWYNUXVZVtRWhx1aos7GFaGDs4QZZpnfhi1SEYtP9RLNmQmc5ZEXmr4hCCxDYRUtBUdaUezp5fKEvUaUbE",
  "key37": "5Mk72xig7nHtZuPaDQ9opEZVyUq5WkwDYrEuoW9UQGxuf12Ssx5BpQUXzWuS5a45N1pE7i6QE5PhZDsnqC215cBM",
  "key38": "2859US5m7PP3QowaEW22ASv6uxF9zderg5JP1eZxbuxehENQr3VWt6AF35JTpQKzKSkRiHF7sWWgFjv9dWyS8oEA",
  "key39": "3vqXwrhaV7xKfRbYLv9CXW18LMhxTsZhPiAPN5SuyjumSxuRyg62ou2D3mqU8oBNFC2zv3H5NPKbsYobTpafaioc",
  "key40": "4tfEShgRQTaW65QE73PDfGYef3FSmnR91bCGHTYz4Kek3woWZhpufTrSTmGH7KJeSSbJQGodK32doishUPUKbYZE",
  "key41": "471ZYGEMhqCY6miCKacpnKSqSZRtgWUajYgvQG2AMgMrmN68ovQio6wNRdd3PKcEEdQe6N6T4BAr7HrZFD9Rd9c6",
  "key42": "2E4jH7P4YgE9SaTspZB9RE1Q7z7zSXcMstWxLxKJy2vgmgbq95Rr8Fbkx4peFKezENDi1eM6mCD2XqYeTPqV819y"
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
