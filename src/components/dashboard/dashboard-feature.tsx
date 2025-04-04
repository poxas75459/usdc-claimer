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
    "5c5ZHDUTmk3aHkmYgdyotG9Br7jCVbSSg5hdnvYXA8YQTd5nui8aSnemBWefoqJSeYCdX4UA5DK9W8Au1SxcJKDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "73qjRnVQNCLnPcxmtjSzNVhRinkvKq8Ph6ooja2JQAmAkMZwEcU7srroXifpZ1gXevJAsgs1davrJYqTb4S6ui4",
  "key1": "guovLFm75DtxojhwSH6nTwkyjTQJaEQT2pBrVEdGf6rJgKViJ5Ux6ttuAZGwpz3BHRvYibENYAFdwrnpGjuygD3",
  "key2": "3GE8Xx92PzsEGvEPvsZYmA9r6dE4RRGLtWpXGAfSqRRqgiG6koy1pmjEn6Y1HnKRzfWKYM2xyYh2xewHfsgVJ3q7",
  "key3": "2apuMzxjNkMUYFTjokzmuqzoEZyywMscwtkTuCpnFzCRXxMVfv6aVEKBuxaGej51WyMHYXyWiX6sCcDqL4qhyMJ3",
  "key4": "vkt4a4oV5hSC7zrFVNM9qDFXyQtDjbr3mdUZSfe6p1ZMnjDMH2LFQXAchU5nW6xxEQYe6vr9QZJuFWqJ3S1MQyK",
  "key5": "4KV4FECtko4bkiELY29295GELqsArAFjMjfe9eryonFZLQBWLD2Z7e7q4i6mQahJak89LbkKac5fB6jwMmxmud1u",
  "key6": "67TREWJK5W1gLVaRUVEC1LNtRgc2gLrbmgcybuwCHBrG5Kpmg2kFhEvFEJ5wkezobLZstMjuZv2294TFXGfRezwH",
  "key7": "3KpubEeTd4791JRyZ4YuexKnwget6CFKUPzK9MER7hTGksLt97PqB6TiHDawMNCG3JHsQmZCEo33pSVUthdZ2nyh",
  "key8": "2j96WQ5YNmY9wYqWiN3LbA8ECPaJLaL6gExa7oqEsPEp9oJFWpRskHZTDo6vayMaZcrNMs5m8bGpFSn7XPq9Lorh",
  "key9": "kdJVZ8sJxYZ49jn7DnEpGjKBxR8zLAH1isbSKheMgh9qour7qKph4J9aT4KnmXgqMogNrMg2bByhANXtvmYbSCc",
  "key10": "2EgzAQ4GEiLhB1jQMHmXSY24Cmj1zcAtC8byb5GDE66KYjumKh36LpZoJ7EiNMsEj4yfXJQDKbcDuenhjEtzPfEA",
  "key11": "4cHdgUbVhNvXMHgWwvSKoRqa9bQ35EAC297q8oXWVdjn4Pvb5WbgHBD3KmXZSCHh3jiVctzM1stNAUuQdEoTHy5v",
  "key12": "3EjrpHHNxz8aFFnsrqJUTMdu4A9cREt7qLfnkr25zhEZTg3DHahddqc3KSPP8HQ46MS6Hb6yVamvVWtR4UUVa9fV",
  "key13": "5K5TMBPnWFaTnnDoMDPw88aYw29VqihVmMLut1XFzpE1qKdwp2s2mnwMwkQHZinZejbh9Zm3nQma5V2F5BLQ1DCD",
  "key14": "4oc9kFXdYJ41vgYE5Amv1qwAkaoGt6Wx2aZKjLJSSgsNq2o8rYCHsrGh5rY2JCpwgZE35X4BpC5Ae4XSMSWmWGNr",
  "key15": "5qMw9Etzu5SXgb4uda9zzJgz99uCGPBZGU2pJeNZQNDGEGssR6hYDFGtwEPLz2tZGJrd3BryEGvhyyiRyjEAno7K",
  "key16": "4Nk5CvHewb4z44bJC6PWLg9hMi7vzsvvbvrqtkFYZJD3N6AKBJhL8EWPD8FurwDdY1Fv5nJvHfAjsGsMcim3mJN7",
  "key17": "4d9Z9Nd5AXx5cZsDSsWH8j4BNjVPnWcM2wySzVySNhYM3SkMhCeHaY4o3DRAQnGMZqwXm67fYHjU59HmdrKDaeWr",
  "key18": "2ze3o4KgXE7MYKrXeve8EhcSdnvdZb8nHyULaycGcxFvYezZAY6jpvkjf7LdEQi6FYcXiXGf1jmo1z1JaTVHPNui",
  "key19": "4Zy9avNs3DaXuwfMsqRqLxL1nZk1TQaxGXWDS9kRk7win5SKK6wADVR3P7nwdpF5KiYh7PPXG71Y1x1XBiUe4MeM",
  "key20": "64fM3f96kXnZtYvP8NdqkQ2GRsPwApxgoyBFdLDrD38fp6anr241VeUtT7KKYiFdgKnj44oaoUFYcMpGfvYxLM54",
  "key21": "3e7WaQcEX8kTe4twbmyYCGd8qrKb27hbAbkZoaA5fNtpb8i26scqid3GURy5SjAnkyesGC99e3Ny3C9F6BdHjzqu",
  "key22": "288vBwNFQEvB3YGXSiTuEYTAeHU62FTPyzVtbBwVg9HJ1imzXqSvd754y2FjSVthrumEbFp4YZ8F1PTPYrYBtTcZ",
  "key23": "4QaMQ5faihkfn8cvz5uixK55g77gaZoidGmMx9MJUoKky27XaAX88u9QYhLBQ5QjZAQfySboHd6FATEG15EEXGah",
  "key24": "56Voso5anNSG9BxY2WtGkefo8ZPKo72WMCG3o328vtTSBfbcArvwxF82HeuPevtcAzrd83BEzwQDgNZLpthwvULG",
  "key25": "2rZyHVLpHnagRuX9r5qM752yZnKANCvKDGTsDS6aUna99MaRnLZyG3LX1yfGVGbKWiSdPt59JjeM2vWfhUEfTmor",
  "key26": "4zWbToD8XgC8bSMJUnFacrcHfo8Q7U9tjDSzjxE26aJ2nzMLPJCDJjd2G9pijSRaLPZmaSnnc96hxQu4qwrcC18B",
  "key27": "2TDNZJweWgvQU6xkyhkNJ6dBTKZTRur7SgDHDs5WZ9MF4Z1fAJ8UUBr4JAbk7NwhLC9Bo6U2P8BneZALxtFrHWGi",
  "key28": "3k2UHjyqvqx37dmH2XWHWVmvijY1NYYR3sTJq4xW73uZP5CdDRKfGwsKtDdntJgGVapXeTwDvVi57pXw87EAbGPT",
  "key29": "2n2HxqFPG1xgL5hEC8i6cCwrVsuFLsoAU2U8sU8ipoycKWzPu5k9D3WjsUQjTmvAQVPGQ3kDSTCNunU9mQEPfJkg",
  "key30": "2aXQHBj2URZorkLfx5KDhvyK38k2vvyBsNPHfS2DQS8wiDVxy4YMrQhenxSfcWTuXFWUtJEn4MN5PiVP2NZkRZEB",
  "key31": "5HKRhRc6kYsBXkTC5qUvhmH4ECUYnFxQjmhjqdv32bMatq7w4cxrJTxdgEP3TZNdFJeSKBhPCgNp5zEUvHw6d7pY",
  "key32": "3SJHxHRK58EykvzaXdEPm5nsFJw3bv46JJdJbBFQkNG3KJasSAm7zcWhXJYy43sLU1PdFHDfDN2UayoXTnWRCP3R",
  "key33": "5zLQWJeEi4PMpds786pBGqHuAgSFhLQnmxAGmV9VbzdbWp7PrfoaJV9QjcB8ncLZDkwPperAenxrwLBqBP9fxsWw",
  "key34": "jDMQcmnc8GNabG3ZaEtiX2g9rZx4yo1PVAM1LcHWp4AeJNqPKboqEGYb9sQFFXVNMCmbgqkSYJZRsCbH1KXsprt",
  "key35": "31YV8zbkjZousLNDDaCwBmPwmfMd3mwRGUkHzKXfKfBP8zS9oiYvwcYHwmeaiNYai2Bqc2DnMzb6LzeE2Gbx1epZ"
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
