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
    "mkDuw4V9mwJW2yURKcVuyrFe2cFLvFf9kfLxYKtnnXQSL3CNhQttQwF9ukBcMUxpWtBHSEtzcZFAKSeZ1okfp82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TqCZhjxPF6FJFUvH7DcWK6WWAAnJekUGgoDVdk27xH5idbg9y9joUztR1jZJLqvtqTUKeAv8ibSkGmuGZDwG4fY",
  "key1": "Yv2THw8WXHgbvDyu9PtbUJbYoNG8HRm2LRLKfcQz1EQ7KdV7i3R1B62x4y4MfbDo6AzSQbaq45n7ptaPwSW3hrr",
  "key2": "5eR2LeyX2jvEHP4dNyq672tQEB43d3kcnsV9PBmjq5jQA1v56z4Rq5A2Wi3JRctDJSRgypkgb3c6pbVWFYLoSDSc",
  "key3": "3o48EoUuBNs3sqC6ZP2KrH2uF8sVS2Jajr4PYFR6eVeD2CmhrcCKcN1REnsQ5QjZS89dueTF5yh6hbg9TJ2spVR9",
  "key4": "3kBGLuVQj6TEz1cwoRGTHPKmb9S3Lnxe6AgchzCVjWgpvivnVQbZX1VVoFC4TEP9exUoDhfNX3vmQJtUCJ4yA3di",
  "key5": "5iEstBQdya1NvkzHmx9VNjBdpekpioxCwh5WqnyK9HQtYgdm9kgQyzLgyYygXYVb5i7C7WwaJ2PyXAmJKsokDBHD",
  "key6": "2ioQW7e4QopYs2i79nTsU9ApjJAGrtvsZQaNFD8NGUQLaBTmqWJYJ1god398S3GD2H821CJVnS6m89Jp5Y75X1dK",
  "key7": "2EhafsZXZdnCyxM3uzoKS8jLzZMijoJuFiyYcbRZ1mXeAuY3yCe24rUYKezhJdPUE3mPb2PYXB73TjXEwsPkZdLN",
  "key8": "5RgHKxuD1BctEUika5F9M59WqxUbBjXv24KHTTDoKkPPC2bTqWmz6LbLPG5FbasCPYes1yLCxJLqxKDCuRqBsKFZ",
  "key9": "5BQUYDNexKhrtK3dqTGj4SFXfje2k69NA8AQoWVw3wvMfWgUSDnyFwm75Wb7CzE95GxutVVr2eQofvqWJw6Pdqt",
  "key10": "3kMH1EJ5VHsLgKDCN1LKGr5i5aDfUWrGrWrpQXAexXgXhU1RqGVWThmjUQUVn4rUoQqSdKDsG7cEGiAN95tFUzDk",
  "key11": "3K9978EbJcivXqWvmCdVyjJRmphnBFTSMU4kBe39eZmR2cXSdterLw8q7zh5iew72JCC3XmpiuAK7z4XaPEHDgF8",
  "key12": "Wa33ugERykX14TLrR15Utvy31iFrWV11T5TAHNXv4VQvAV1y3UKR8Q1opkK8NvEsBrHhYTmhgbw3PmEe6Yjp4hC",
  "key13": "3XPnuqvcEu8LkYoBpVNBvpLUWTwmgJWcENVsi5ef8LZMZPDUhx9d7sLWxLbUMasc34v2rckncAMch6JDVpx8b66G",
  "key14": "52B66j5SMHtqyBBwUtagpnWfybV7v8KVMucgCWdx6bVx3kANGxowV7787NbHWnsxbnV2VXC9ZErix6d847Nqgbnn",
  "key15": "2WRhJnsJYfJHYKFS3i3MheYTRnXg7yc25EZbd8CToghZNiH7ZzJvp8ZtWNGKHZVkA6hHFYejAGnEzQi7vUpoPHvz",
  "key16": "3ykog9BJsEC5bYnVK6Vj4RLu4g7Y29Hcw5BxMtmZK3qpn1Yoi6dBboMewf8km7dcbgKhcq5n5jxa7nPvMzKi3CWk",
  "key17": "3mH8qh4BxWa1eWhSCR5ymEVVdasve6AsYH2ZG3kRhGYKTfDABpBqjAzYSsVKWnhXC5PJ5WNSg7iaejLuwo9AqjET",
  "key18": "58NZhfM5he8pfLSU4wGRFdGWGGNzUpbsPFcpAuX38JpY2buPZeTj3woH4EEpiXkpVTCeu3sfNCR5fhDig1hr7TxU",
  "key19": "5Ac63PrE7KmkrhydTRBTeHf4quJJcpzZW229d5R4reVvfLBAcuWSqdD7JkcFMFWtQyX7vt6egVqaSdj8XDmW9ET9",
  "key20": "JM7QxUQi2vY4EjQyUrm2W1CzWNEEwiteDR2YiVRdQiX8NsTSGMPzyGEZdjqQSmE8zHNUecyGdJnQLbY2qJwcSu8",
  "key21": "4aDKvUCBTFouwH5VZcGgtQqg7Lv4x4663cWQxunoHtRxwxbqaiVDK5B5ykkcNtgYNuXm7wGKwEHZB42iTxswC4Zj",
  "key22": "3V17ab3UQeGTHx6MV47inZRSdV2UUqvMmC2XryLKdeWFj8DokFvk1aaBGP251YL3fyqLRJXcAMSmGN2rbK3AVRym",
  "key23": "NADLg5prPXxNYZAwmLGRhkdSkQ8DGYKYNV6k7BycdLHRY8LQ3cK25q5S4LeFF2gBh8MPWARgqMzoGWSkUa7T7mG",
  "key24": "Zw9zV4JtYFVZRgEVtmKyXz15UEV6euD3vHEdbGgLUeew3ocvxwjkBcMZEWW9JsEqQKsbD5taxTzK7PHJsBudRpS",
  "key25": "4MikCPaHFDMc8NEwCoeXgRTjYmh2FzYHVCjMdB1KgKuMb9PM5q754W9Gkg3E1XbLEgvb7tADUNaN91n34joTTYxt",
  "key26": "43ArAaYUZQfZHnoZVv4bV29XfS8oJut8Ta3FEogdaQTQMjtqrp6CAxeKR7Kcta2fBo6t6vddwmKMoSpE6XzsQBDv",
  "key27": "3fATabxQVD5qNktiETh9tYsqer5DCWATyMQBqu3agLF1KyWXbFWV58TejsiVKj4VACxcZzCurzgDQ9cnixNBDR6u",
  "key28": "2fx62NaamQ5kmP8Q5i3Np7LuXpUFfdEfqmKHwcjKkifAfnaLuRJEdrakjxWmeoUi3gk2F4Eun3QH2vEC9mqQRLC5",
  "key29": "5AhzjH5y7kGtcBp9GbLf8zEkAGcCMXHX3LLGpuSqs4yMrGa4VvwqHUU5gD7by9VksofFW5Sh4zHFUEom9Q4DDKYd",
  "key30": "8um3BvyuKnnXne6SwTsttfSGFRfLYT72joQY4y23rGojJgWwzZaSbb7k9c9HfDSERFgQjfkWQ9t4fwchwKj4g5i",
  "key31": "5FdUMEuQ1SqCHviijVzmesVbbQFwXdu7B7TXjnKac1rd2jRTsHLozuTsY6Be6UjqGReattsUG96EJvmB7gNucTNN"
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
