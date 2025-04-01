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
    "Mdhxb9cnZgYP5d2FJh62P1awcEQHXm8BAgjafsDfayvGD1bdJEFiZMAQdLebUCvkAH83dQfkDZ8j2qWM9eKjD2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22QTcnPrnu5LF7UgFD9BxuRP3Ym6HG8HTTxEj8R8Z4Bq97UpDjHw2pHbNexhkaS2RSKksAr79C7JwVCC965zgftD",
  "key1": "4YMG8vAtCKWwGaz6c5AYKXgHRN3XsSUFpDtZhr8m7FHSbzpVXBgWxDGbDZr6bBEfwKJk17AjMoF5EJpExALdATDu",
  "key2": "ykdMfJhZNpuS7V14y6ZinRwC2VYDfsGp5NTcDkRwCXTqDvMQ7NT3nVG7YWpGHrFdxnP6A25s848nHam9g6nF3Ge",
  "key3": "LKVCBEGFxFvg7HokwvewaxzuT3tcZBUUWUv24oeuVd2A34ctxHtjiTewXPzjh1uMrfUFKdWqaSGy1M1bpE2ZNZV",
  "key4": "2izGQ8h3pB6Q9q8hTfCvFrzZBQ7iFfcieUmfqCVhVNUriKkodkdnaH57jKXj1LLMhyd94LnyYhr1RAzaZhUEujC",
  "key5": "2yPxveQwW6pr58eQARPSbdqXn5hBTojY5YdpTwX4YPVYfPqF64TxSiZb3pUM8aW876zL6f57F2gGFghQ2Q5CfLXt",
  "key6": "w6cydYePjYm8TXeSMTFhsMVW4kaYREhWKCDn7e2Gt6pocLS62jzSA7weQT82mfebmXmmg17rYwLNrgt1zvko1m9",
  "key7": "2zZ2CXeJ3os1oqNzxmVMfCVvvcAPX39Rt6vN2GXommtYpZuVzC3g8kjVScYCXADE3RbMtCtDATFRXrx2QhjKuo1H",
  "key8": "2WwHmFnhA77iGozN1Yu9XJotBvmxXP54gd1Sd4Fgfq4JY6Mua5QhiQDh58thSsQmdBHQkLEn1Tn8VF284GasqGzA",
  "key9": "5DkHPkvUbFSnadn45ijtHWTd8LPAaMzm6Rj4XchgpxoiN41r57xK4qvq3o83cQ4PMyEvZBkwwAm4WEkuBBQdDz44",
  "key10": "5yRoEgFGu5P2UZmCZd4jv9Px16Y79zKjcns1is7N6SDR2BdwqarW8DHyGijM2uDbenFdfEWVSt89T7dShoXACzRn",
  "key11": "2zhekRPobiXHoZoVFoXzmWDGwiAuHExAz3GN1SjeZ9MyB9BSx8ua9Qn8RQRh4x7Lze75e8qcNbAeT6jHgbG6LDhW",
  "key12": "2ZxBXoQR6pzmU83yFaVhksDKKqzcaCdk7w4bTGE3fwwBknJRkkN4E2qWDetVyPnn5vULXDqEGz1AJoKcyg3ipDzT",
  "key13": "3uxfyGX2vyioDiiP4L8VXgzGyrz3qgmSNEKKbYTwGmWpvP3evqwkBjcNufKppnLUhksm2fmYthm4NNrAU6CAa6Wc",
  "key14": "4epEXB4pWFs6rRzNsGW4iuzPKj6TywST3S4ugd1TcQgmdJkJmKUdV7i2JNhAYUMxuywTwVRFS4WVw8nvuB1VRi6a",
  "key15": "3YrvCoj7FhJvY2QjoG4yGf7hQi6yDF2GffgK2qXiVj6mYjkqcmzkhjC5ecGJwrh2MEUFyvJ6pYcDJruyQHjUSU28",
  "key16": "3J6k8cSKRis2wZC2NDwSoNDZTftMXLEQGaaUWWmTDCb4doxffS23TXWrLu4VoYv7BENiu8Uz9sMpxWgLgUcz15yC",
  "key17": "2tSj6LszTcAsbM63kaTzgRUrwYtt9Wv7XYYxSZGXYJ3oNQsMTEXtGb9yNG6vrWsxFmxXZykrhAT9ZH9gfmCaaf3y",
  "key18": "2r4w5Znw4qGogU18jhSsGYYXMzUmpLPqkRMzs87yUnTLSE1pgWeAooe2sRSA9Bc1azkvZ5QUsWjNEKKGqFojJkkd",
  "key19": "4bwjhBxYvVNGrnG8wUqp6PpEZmJV4ghAsehYT8ZFPQHvxi9hvemySW2LZddXM9kooboL7UFHiEx4g8dxUXfQGu8c",
  "key20": "2mPnc5q3NkB1KxjnXsiE2Htw1yXtMjpZ8q7qomnmvnbY44pyU1vBSCtdQ4A3AeuaS7hDoZJ4fyBezV5hBS7CDBdZ",
  "key21": "5kCJbnc1MvGAcA2xtG4GKNAsC7fX3EDsDt1ZommSYtkMW1otW4kk6wgCB7sTVDVJ6V5VsusZHfJ7VuifP2HNi26o",
  "key22": "r6Bs1MAHVVWXNzfT9xz4oJovmmzWFSx9aWGp9hqkxjR7WbxbabCPc4xbugCWEPo5wyjXgBTFPLNvxiUtoRp2hgS",
  "key23": "jSKeW4aYnfkhKfdfTAXZ5rdj3fSS4iHDR1j6A6YhkPG2jQhvgzJ27QP5YWr69U2rzWjLVwCFdxHQWYg1Zx3E6pR",
  "key24": "4Y4WG7UZN3JmaefbyGxGdky4kVTtGKH3Aimb9DAP3TpL9g4rmQQCc44vM53wnd5SHExHPKCYa3Jdkkg16oBsHixP",
  "key25": "4zNck1fw2YVBQHeftcV7HUuRZ2XziBjW6jxZ4jbAP3rXQcUstY29kHktTWi9ECWBkPqLesesYwLnibc9snMLi8yb",
  "key26": "22GwgANp1NosLdYFnn6jfghKeN5LTkQcxbXWBVw5anxv45QvXiMU6AWSpQRkuKrf1ESEmHcHPqTFTGuRbAH1wmGE",
  "key27": "4hb9waqWYqcGhTFh1t5uYwGm4PD2iogDDVX5Cx3xMZvabjDobx1eUrU6DqW4Z7iBMYDUfGQtkbfTNvDCw1vD59BB",
  "key28": "jBJ1cne4Vr17A4zXru8d7nt6F9i5ZYYYuQq5DGpzWz8MVpRjWnhMQgabk44CQyGdimK9YxbJf5wEHnK2dDiHVm7",
  "key29": "2FCR91M39mHf9RjbKA7NKa7jQgcH54xhQhhZADfkT66GokfRyDwscxxZnaTbGb44SVC7Atz6W2TBfzqY6dxdSU5q",
  "key30": "YRqg8fp2nZAorFmyz99CyVX9vXGhq2YQ85HBieJzThcahrrAtBygX8mxNKBFxA3VeErLnTGjWFbYu9omRfzTQYr",
  "key31": "2W9aDdWwATYBXaV42BxgsSqV6Xy3FgfuaD7w7DYDw142CQp4tUP15WGM9g69K62eMcCQpWA6bY6LYQkmtEeqjoVW",
  "key32": "4NmowPP76i7aSZCs4Y4ypfh7wFRZqJbbPRovstPCPCiPYqeJffzu1hCNUnvFUmidGVUaSaCc43HsQr6MoyL8nQzW",
  "key33": "MziyVMKKc66CeoyEkcWUVMpAjZZqHdTcdNnbE7VJgyZEq5ddCTS6mXhgbmSzDfRxoUMasfcJWikC6KLRfgUbRhR",
  "key34": "4MraCm1bvJWBFKdeCeHBF7ywB9jz2C79SUqPWevFC87RbCjxmQAPK6PWAD7PaT6dPV4peGrzunRMpx3NXXzKtqP5",
  "key35": "3Xiysubt1szxtb14JTSYRxbfrq178Tt1j4TW38bE9jYS8furZ8YEr17FYwoxHZPb5T6iLbWsTysVnFdD1gyDeHPb"
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
