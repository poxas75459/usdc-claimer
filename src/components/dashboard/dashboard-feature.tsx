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
    "91jLBdtkVZ1ZeCfJLeLmnGvpBkWe7N1DntDpJmWS4eCGuW6SV6dgM8m2T7HdHP6EeB25LvBad6sjobMf1rtzQgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Q3scEW6aeod4fZNJY8srFVjePgVxjNQqbjbypUTHnU4GBeyxdVCgpKTLHj5ugfytwVwcSwN2btk1YD5zfizfCa",
  "key1": "3Q1dm87LruAGqYPmsHJUQm1iJiRbFCmF1p31mENi8TMsNJoN4fxW3pVtipsD3PdzozMUhMgaS3rM8EEwTbAKGps6",
  "key2": "3gbgtkcm5k5TsxQvMebHDJF8CnzADju2iNcXdRXGKwwkVDF8k5LRgExZrDtjTNd5XZG328CrB6igzbq91H4muu3h",
  "key3": "2tnaZjGqA1kUR8G3P8n9aSgj9guMviZ7iZDcGTqNr73Y2Ma7zsxqg4rUxeAMob7Bh9oPZxKD4Nb4prruq7RG3uQQ",
  "key4": "PNY61pd7xUVgCsKAo9g6tS3dHX6tBCogqo6nWaFzKAEiqb356rorMtnbm5vZj7SomNb2xwcogc1s8mh59ci7Zww",
  "key5": "2fL3Ww7q5ZEQ7BwqoCSP7GnB3gSxaemZJuyVu9WmRb5hJAw3VbMRr2R2fxZxganssVKBeUM5esTTySphiXpiyM5H",
  "key6": "4ZwMhHz62qnL7bAH4jRidqutiiizsv2Rx2mc7xAW4oTXgbkamfic4Js6DnEQhqTwDunsSL3KwqCF89mj8V4RMx9b",
  "key7": "dXDcG2stXupVCdmyxKCZejCgzYYSvEcwdMryix4tkbqA8g1TZZBLyfbEWmNo9hTp21RgiHjgEsmtmxtX2RNwtwS",
  "key8": "3FrVEXw3TcWHvMWVG18s4YCuebgWaLD7vjxTKVE1RtD8kW7Z9eERyUMChvB2cbxFPRpAp5a6pC4kqCPZCmrw6EWU",
  "key9": "32Z8hZET66NpA66Min73SsVQZcCMf8MXL9vCtSUjuBSAcSG5YrXwHp6WQr1X3NFAdaw2KbuSaCpfgSu7hgKCcHfa",
  "key10": "KiBKu1QjZHNHVyxjtg73hDBmeenapDm83zBkPwNxC9MNxT1AzhkTV23GFU8dnTnBhFK5GQFD1qzgby1WuiHPGH8",
  "key11": "2AfrFkqcGvuSWZGsSWtUSRnaDwyxZg9Sa8XV6r87dCXYdMo7SoFLCr7aYJwm3xtSGvFk3cDC6uph22giDLeHpjTu",
  "key12": "3mSNQ5xsJbagZCZB3XBMgE5AivX3whj4aZVT448QpqMkcG2uNgUAoYwviNxNXu1q9Qsw2KpuBTcQ1zRfbCEiCPyD",
  "key13": "32QfDEyEbWkQSV2DGD18x528YRMHUycejV7ey1v8Kng1TeuJ3UqjiQ3uAc3e9oeKookTRrWLHibiz4Tf4FL2Jc81",
  "key14": "27uVEM6zucKA4PPwbBsR6MCfhNJj7GiVDcjykZj5WL4HLiU2NWW3Q4FY77uQwYmAgimr1fKer6SwVxEre4XNubJY",
  "key15": "4qtkXoEKGVdFhyEMyUx7GHRY2sjZebHcDiNbXCEnFHyJh4XbmRmsGo8yD1dE8kK8JEkcT867Q58aFZadMmst8Deh",
  "key16": "434VXQt5vTmsCMZwFmu8SXKTqsq85z2jFFMjTq3c1E84JRJmBB9rvMkTGJEbAS48d9vaYq5skZofjhxHALfg9osP",
  "key17": "4AiWcnNoMNSgHbszeRGAv8Fa1vXzy9jmrKYLaAU2jKbxLJFQb8niM1Sb4nK9F8BUqquEj9LVHGb3x7AW5LX1Lgo5",
  "key18": "3UHf44uVxm6Sy8hoJ74GtFFap2VC1RvNefUmodRFQqDZrwEbCQW5WKfGuuzRkPAMp1Gvqv3PQijjZroNALt9Q1Zq",
  "key19": "3YCwJ9S413QsSC9VAHkLHJFiQMVRDYVqzY7iDDN9qhM1d38wx8A5bLZQTHPPEDQZnSZEJxTbwbgjiAeFSpYS6Fd6",
  "key20": "5bicEzK6e3b2Ezk4wia98o9AWVr8vS7Zs6hz4AVq2LeUm18NV4GcJA1gZLJBUADg5dpJMH42giVME2pes7HYLDmZ",
  "key21": "3q6ZMQ5HX3t6yXWBc97dG3dgZPVHEUMwCkGN2bgZXZEBKAtpKzTwaGbSKLCoWMJ1qUseVVY3RjViXucuKkhnhuBa",
  "key22": "3ei4GvAfRFhMK4jzFt3yuuVabN28Pgnq6LGyRZAwjf23QeV4CgT5e6jpY5qA7tkoe2KVqS6SarN3MerUfD4WSPxK",
  "key23": "5zLsv2tJkfAPNBJaqjRCmjyuBSHBbZUpgWdom4CT3PgvxFCMWmoxy4SBDvXqq6gzvdLgzQHrnShypucXab7SYZZ5",
  "key24": "4WMbaXU5y1k4Fr4DJ4Nh7NjyuC1LKhFB7CAWdtS6zSpH3ypTcm3adedLPGmawLdzVJCY8vNbZqYK2EebKiFYoxPq",
  "key25": "4UexRe4SR1vrxhg7exZmFtrqgMuawzTJfRMWbqmee3rSsLmcW8V3XewynmaHJf5uPtBXjQBrT7ZtPARm3jHo7isj",
  "key26": "Sfm2toa9QeaEyevz3eCQjfHxiSx1jaqjdeudmjrpxY3wSbyqGqpEJHQfP6wAfxvSyKxbiECUSui8XdnMANKENqL",
  "key27": "3iLg97SJmqPGEb4mLivJYydoMpspLg6LZD3Vg5dyhSk7ePsmSJBH7KLD2YhSQNZ5bieFAZk4XcMvsRv9njHGxXeA",
  "key28": "d4xanVwefofbsZ8LH7UF4HUNehnDfxnsX91JvG2BfNkc4T56fuke3YQw5UaiP5nhow2Bup2JA4vX5zAnu8z7mn9",
  "key29": "4wzo671pyS9vs1Gpxmh5Vrh6faj7NDRfRXCMDZDmAeBRKcM9VjGsoiFUQrmdqJMMoqAoDeLRexyYQsonE8UHJh7s",
  "key30": "5gsgfrebd34zJxWw4H7NhajVzPo9E6p4E2ABAgSD4anuxocHT9MHnrY56eb27aYe4EVgqAiNohAibMRFfcrYGRn2",
  "key31": "4PMWdWqeEv3bTJmPiTGMPyzgXzr5bvfrs3kqYeEpKGRJsX4aviCEx6ER3kvctmLRK6fLKoJS9B2uHGiZj6ccNCzn",
  "key32": "2FaJPn9NLterAsrX5qENYenUDxWUq4R9eJvwoFY9n25ENKjmhznzekjRXEjRhjQVVQCbZSqzatekG1oGQh8TcbZo",
  "key33": "3J8H3oHhbUMmaykcrHmaHQbDgt7QXyAbTAqvYGGjTGngbQW7WbVLdPaNm9CprRQQNQSGRZxFVWEgep5ntsWsDnC9"
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
