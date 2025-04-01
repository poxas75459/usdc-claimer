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
    "3prKrYVG55Wup6hugmBYMRAtakG7wz2j83NEQM9SBWWyNk135qV5UBtfNb2YrwsoKXReuboKXBexBqvQG237SQDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42b8ZXmoShEfzQ781D4kk38BeK7WzFHSvTNRDxBAriz3pMDji9sHipGNNZJL1GnNAdP8AyZHmr5agFbxGHZFHk9q",
  "key1": "4cHp8UE7RoovUTPyPzEBURPUt8Qr1UEwo7MEmzo788AQZzpGs83H9RJrUqRZF9k6Ejr9k6z942NnCUmEiMLCapWW",
  "key2": "2hqWB2BENg6PXjfFBMG3S9FU6XtQ8z4xD3icCh2Wdt99BKhPd275uYBnduubAPVpi1fPDSPfwp1FaH6qXXDtBtF2",
  "key3": "4g2hYzhcjtBh1gfZJqqocv8t8cp8fsVp3KqpzrCTQj1AgmvyzJr2C9PtZhdegEKhHbmum9RUJhiF5aWMem6yaCuy",
  "key4": "2KNWAMJtjAPRSZ8XBCx6aovTvMLRFg9i464f5NhGomXWur9WqjLGW6qDP5adwwUDR5DGUnwXkmWGxurrsWkZMhAZ",
  "key5": "5rMee9LfEMWqQJX7GdejASbCLfSnybVGMqLDWzgPiMu9TwteNLFmQpCkf1ap81LCB4fQuy2NRFtKMiQAESfPWT7m",
  "key6": "dJHVLWWnkenNweCo9q5Jp7uUhHgWkJFkxvYQhha9CyvoAatBE7utZtVLEq7zSSEECb6BdYD3tpTcAL5TE9KHS5p",
  "key7": "59BRtxqxndCkKwMhS2dVbta88EBqcSjB9C89DpigM7zDbP1g8rDbeJC7AtFzMHnFrg6GJ2B6UTwm3o1QiGGYVTwx",
  "key8": "4dwUw1qeMLdfoNbSVLpcgjHEw8GaC43mC4s8ejHvqm5xYNmZUrXMThMiS9jYJTy1hkYCn9J8m75Z48c7VzZQ1h4P",
  "key9": "2vGE3jmfCtNz6dLKjxWJ8VYh7jCRw2tLGeZB4jzh3oDKwaaJprLZGaVde9HUFk6FgHmzwJP67GtsgQZAkZVq5K6o",
  "key10": "3xzq91di6BcpqFxVuJCDRcYKcPbdxPewAaEJ8dws8brL61R4bgXS6jGdCbi5T1c65yvwXSJKAEyEVh1KkXWGR8PM",
  "key11": "3qjjQdRMuqAmYuoVPpDgnHPXB8Kdj9NhrY399hmwXgMAKT9Xstuviq6gtu4XDuZqCuSkLWFSQ7bp23VQNtVYR4Hg",
  "key12": "5JD8EFStCPubaMR5GrUufpqFNsgBMJtKyXgxiNfKsXfJxVoqBHrJK3AXcKYBpvGBBbC4EMdk3vzsLfAhJv7otcAB",
  "key13": "eZ7AqJyxecjtr6gChZXmjKs7VT3J2A6xG27ujWRSFEqSoK2i2HneAjUjbghxGUmZhm2BEt2kTYKf9MzRTMyzG8U",
  "key14": "779UoB3tSiRnXww4MoAqYUf4QQ2pnLefyu4MKpyXBC6drMzWPLios6kprA1cU9JRngy4qdA7kBPLdk6E11gjcFZ",
  "key15": "3oSze8ZuMVKLGkKmzAiHZR6NzSBnY7SD7yC8tcbYDeTU4CTcp5jXEQAb5Mo9zEFaNgsjfV4n78viXf6TBJTouDJS",
  "key16": "4jeqnkhLbXTiG33Dwn1JaAMy2xTwgQwQH54qDKCFwqKp7P1fCfw3Ko3xntQ5MYMdfpHXFVvpeRQiE61Z6qikoMLx",
  "key17": "4sqN5Lteg4qgdBAXQx7BcT8aszx18AK91izXXTh1yeUhhFEBiGgsFFHamgMY5GCQqwR5cn2KTkB58nNrfdQ5hGEB",
  "key18": "y6dB41Whcfv69DM1vgd24cKMPM9TyzTFVEtf4UvLFEcUYA23okDW46Mjvr1VoVKPECZ75vvovv1Y5uXh4qRUuxz",
  "key19": "4hd6knXAVHhs7Ne1TCXoECRXc1iokKfm6SKsjjU1j9cAGRjNVNXSc6fYAxfPhJBiPXUhSkPJWD8EovGzCQj76GxQ",
  "key20": "R1hwRtFfocrhU6CNzTHuJvpUpdiV6CegrHNjKp1TaMACTQehvEwr4niCG65i6UPaemDrWkpZjsvMLecZHuw7vC9",
  "key21": "2UDiBpMvys2tcEybETHp3bEAfVJafxmyB46naEcLLb4rtUYcY5skn76mkB68BTMrJn9KcE5sBWPM81m2sTgukx3P",
  "key22": "3owQTvi9wceB7RyAB7TBMoQgiqsG8BgAJuBccX1n6NjS9AvkZ2CjZuV1fxtSxA7HUzqse94KF7h5RxRgK9EPnLDr",
  "key23": "5MK5mNcjuAsSwzg8YsPNPAEMj8iEtqXJHEY5tvjFLzFw4Qb2b3U9WTtcxv2r3cEmugzsyq6Lkspu1xoTFtmVTTqE",
  "key24": "4dp9STjjbDxCXArv9Dds94rAdCXzL3ojceZLenonja9qUnvU8K5DwwqXbArwYRCr5FAofJA8p5hbMti47XsByasD",
  "key25": "2Fsty9bHznYK7jVdZfPzELys5FwCppVwz33D785xq5RkKZNMix4TeeejYwHwL5EcAUTd8eFFCrRU5L5BqViXwgar",
  "key26": "35ErUmgLKZToeCfczEmHHs81gQrpBpDdmBLYdPCtSvpag7JwzeDkRzE7n4UzbD9VFa6HQpkEydV6ygiAAbiWNRTV",
  "key27": "33K2RxyhGezUPQAgrK8XNBBzQZpN1FbUPhA4pRgcPHm3CzgceCnyAyJ31PHXuygnMf1WKqLyBRQFHHEeCgPhBVuX",
  "key28": "RWTbZqapTHWEfmJy4qcXcjsCYf5gKHSznQUuGrWVWW9RmAEs8E2S43XRZe3NWzt3GQPTjh5jLizAJHKR8y9QgnZ",
  "key29": "2kNULxdVfNTEpFVLM9ij4QfTt9XmZ6RFzNkD4kmwX5qvXWxvsHXRQg1chcqaMaXbGjKQT9zHpfUgQWawWEiJtNUZ"
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
