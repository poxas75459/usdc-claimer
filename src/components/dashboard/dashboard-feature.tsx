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
    "5STbW2BBycTnNF3bs9keBL79TPxwUa8YLgueQWWj37cTWLdj7csb4zHei6iZ7hWXvVYAtzzsAndMaXvAetvXjhq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QXjRXYN7oLV5YxX1u81RjYvP2eNuyuMwQoSnzgJvumHvqp1JvetPsazNdn1bKXZnDeT5BGkQGU6rojtkJZLxZSm",
  "key1": "2E2hJVSWe481M3QLZGHL9c1JZ7MemLrM4MLMKkDo7hespWoK17UjTft1YceZHjoBq5KSC7drX5c1mErw5i7jQ6Up",
  "key2": "V6CWsoU1P7SBspHyoiFPFjeEQFpPJ2dTbWV5VLrrTq8sSuKRwSTzvZWQx1hPDhzgUR2JFZZjxJfNePe4gVmAvi9",
  "key3": "MZRb3ZSWU3Bh6TtjzWKEbK3P8WwraLrz4rhPr9STqAhQRSu4uQAsrdC5VoFpq6AaLbfvt1juKR4QTpTMRw7v6zp",
  "key4": "UUsjtA1jxvgYoM2JGSPQohUvRsCrGmvG83GB1MxJCdHi2wZrLNz6FXbGDRPSdaiodPXdzWy3Kv42FJTKvnowzaS",
  "key5": "2FizeDGe5PHuJ69gx8JRr5sePfBE5DoPCkR6u7t4F3LKvrk8QGi4JW4jddJuKobeGoGXV5HfN4UJ4t9msRyakvy",
  "key6": "sbgWdj4VkyBJRyZWQ7wdpruqnvWungZdDVbM86QhSeY9pwLvPYv6LwSbWELVv1gzXb7ChDzzeNNgyCh5kXLQ4u1",
  "key7": "5JCvaZi1DhdTb1mE9edCx2897CYq52T6VXhn8Sk19maagjm5K6KQaSGVeouatdWoKd4r2jKef7njnHstc4xk8TWn",
  "key8": "49hYf8wWo5VxQPUTi3JSUUFUe1pSmgRe9TGkLBSD5VKVtZ4b7BSbE8RZijgejHKF3QxPYHpCxoSmUq4eSdeTJHyM",
  "key9": "4x5Uhq2CRC5TB8Fs61291dxm2gmC6WYAy1rsNASQA8uTWUyNWgWwzCqPS5U2ujEEKgfMjHAPincJQyBFrmJEEuP1",
  "key10": "5YqdxfGmAaA47zkBdzMnk6YdMVes4iR5kbChdrgSZ1dBcdFWYfWmgaudKgwNzZU98GT977tJpQimLFtoh93pG3ug",
  "key11": "3d54mKCkhScMTxqHGazBxSBvsneJx7Twpa8oDPoTCskYAXKkLEKhdLf7idkTxJ1jhp7pGc2yrZS84XEGXKrnXhqR",
  "key12": "5KDM9ayw96XAYrqLwjwLJKrbtMvvKiPwKzBLdyHymLZqjvBWPzdGbvGQtbAY5DC3hChAfCyqfMAP2Sfh2fi6Ricg",
  "key13": "2ohiUjnRDdjngwV1fikZGGPwVNZ6gV6B98wnLKASh9TJtwpEKrJTRwo4yyvXmFE14CvGcSGVmXPy75y1nvugaQz3",
  "key14": "3kXbPuYqaJ3teBP2EiekVV8fuHzQjScbpay2J8zvQiWdtcBaAtUzMQ9DwDGxwEi1F5xfEC65mYp5EqHVFbMqCvzG",
  "key15": "24eiTb16p5Tu7UXJ7T2WaM7MGLb6VWNLWgBawrJP9u5yVCpAHDKjLeh9HGNGfwj9qNtYFEwQygZWGqH4EkWbssVp",
  "key16": "6ucTRyv8dTFEQJggkgKhptToWsx83tCKStduu36o9Q837QWdAEBr8u4MkFQMzbEF2JSGUD72Hrmf3cVJHHrThwT",
  "key17": "38wQzmP9hc6oTZstpXRQxgEp7EcAz3My1Dt26w1JY9XbRja2kxxZrKcWKmbeHJ1cZFCsxPDy6XAXKqTp8ixJTYzG",
  "key18": "5ZGvognvgfHtAQUdvrxSY63TshYxTNhviByq7CxYTv6N8vpuzBuWQVsQR6pykKTtYMjX6apcMAtWT43xZk8eMW9s",
  "key19": "5z3fyeTt3sRCjT9HMfo77R696op8SmCoAYGz3e9MhxjhdkPkGkC5E2CSFFTYVKMiqor28frTeHMgSRNMVtiUgQp9",
  "key20": "38iBFDsxoeN6P8nM1VFZ2tomrskjQdeXBNbEP5jitqLuHH5SZ6vZ6wpzcqgiBgizByd3Zf2CgMP1PitqiefE9VyZ",
  "key21": "2eHsrXgmszi6BF3t3Yywcg2iwaUU7uSrvofhxp4ArhLJG91gxw6omEKhQ5LzrGoyvKFdYyWtYUiXMT8icu4qQToY",
  "key22": "tPNiS5ag6SCzmMkviwvbj7vH7ERw7Yhb4nSk1vAVigXrCriXNVqbTcm2qrPP3c4gc4FRcP3MrzfcpQP77CmFjDd",
  "key23": "28PZpd8kvExf5vxXwV3hc36se1k6YubUm2pg86Qwm5mps56v83LBvztMpRepd86yWuKUwxaz3feuLXQpSPPGQgov",
  "key24": "2EEy7vXoBgzdENMraDrXfJURfvPr1ixWf5aZXaKvLwpkXShnk65xWhWRSuVg3FdzBAMyKbvUcLmhwg77bMLmhWjJ",
  "key25": "3mJyQRutJH4yWqmCtfbHK35rZGVULZs8cFT5wojKRDQDs3VACBLkEGYu3o6DtqPvFxfRvvU7ijXfbyZUKqna6JrM",
  "key26": "5mDwwSe9oYqZSAvBmoauXyKm2zoTw7iA3AABcCuPPqrJixma81sxV3JPwyurBtvYEBwMntDrtqmmR4r3QhkmdBJq"
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
