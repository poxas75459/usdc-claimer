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
    "4yrEkJJMbs3Ut6WmexpGaQQTtK9xkiPawW2x7KKmdKKgjaFjUdLsDDKMMXjfLjRoMP1kG2NfGaYNi8tFdJEjyH6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QyRsbtYtNQ3BaBEVbR6r4565Kgo51r5ds3GbzAAijmNKKwh2RcdgHLeQCx7cT1Gxq2KDggrDU5EWSBM4zwdwwe5",
  "key1": "5ouegHy5WrdNJhLSwbUmZ1hmTXDTB3JR29FM4vAcVhxB4PBsUUQumV6HFbT7RfcU4CS4m5SWhkpdqX4Lks1ccsMR",
  "key2": "LFgzX4B8SY26Zif2vS2Uori17ZxqB2Sqcvz73126zyDJNFzy5agPTL4wHUr6s3yQi7WAWBHMU3oLpc6ZYiuQUhU",
  "key3": "dhBu2UfdrGnSVhdtyn8fmAfoh5f5yPGx6nXQrgRSg3KqSiXxYHEqmRnsFz8TZREmS1pXKNReyFJo5pFMzeiqHD8",
  "key4": "2qfNvrJ5KNLtfAbkCjPohDd7svVTbYoNUSTRbUvqpokszSW1VN8GBfhBCSwwoXRN85XzVHJNJ6zPi7zAWMhMpV2N",
  "key5": "5P6UtiqHFYvSt8d9GQu2xs6h2tdXVTGmjRKYw1xm3kNs9NXUDXF5Z3iWopWziDtm1HZTzfQFAC7racN2Whnbbqbk",
  "key6": "4Vc31waUMcmNxqSYesvC5A1uwJGqrEWnRC7nQyhr1x5vGhN6UdpsDDu2gvve4ZMBPb5JkJreHWgWqGVMw2WSXgaR",
  "key7": "y53zJTpkCY5XpWHHtjS1876PG9M7cKUfaRte1CARPmrni3bUBApBenMBaifqcNBSMamPaobKJneQrzfwyA96XqS",
  "key8": "5ziCQ6CEHhDvVubLoE8qifbgNnGW9LoFjFFvx737VUqDSKYMGHKQubT7CfQWJrudR6opmCXWQ5G1Q7MuerBPoi9e",
  "key9": "2JzXHxHgBg3JbXUheiPgDKXvADB3axJxGZTi3ivUWtt78KaAJuTp5bSJWPwzpXq1WkJ9bz8TKpVyQK8hCU2icVad",
  "key10": "4MhzrRhS7wo9qAYvEdmC52AxAy1UYNTPat7XFqVxPdfdugVxbbiS2hENMmLZyadvK4KbV34oHYA9E2pruumaAoQC",
  "key11": "2cSsdug7i2AtidW2hdLaozDGFXps9zLs3Tz5gaBoAKR26qCnyP5Hhd2zTubCmEr81sPXSGjofCZMw9Xe1bdDAi7N",
  "key12": "NmcaEg3HoKLnwsGbuPRRpMWBBMcT4UbWN6cdMA8Wg9HNscK81M62T6oEvho9S8RoBpxgwo3toFC8iGU8kYmensA",
  "key13": "5jCdeASuqxC2c3zdViwELNRWe7ciWm2U3W7CYbaT6Q8gWBxMKKut2zYRRDMNQuoucMwiaShDZ2ZQpjAAiJuKr6Uf",
  "key14": "2XEmqeya3bZJDZw1FWeCMUxH7gsBEV1m6eRJC1sgYfDaVr7TtWhYpB6pyZybyZRwvNEtfsEwVkYGjb2b4uxSHAAT",
  "key15": "46Mf5TooHYRBfHr1SftNoweeBFhAzeZHHjYgH3TKCJfYiz49tiQ67RQZ77RmbQaHZJsmaNuDiBHgsfLwSSeBbSqw",
  "key16": "4kLZsBk3K3uQ4FJ9YZowGVGynwaCBFpnw7JSuMCvsRwb2KFvyR8iNgiTdpGiPfM8FutE6w85oLZ9QqpsC2Da5tHi",
  "key17": "2g9AhfsUkGGaS2zBDh15nipM4aD742eDERVpLGXnhmKxbv9qRAcrtBYUmqdrNVDt7vRHPtETDSgst5FoQzo2vnez",
  "key18": "5FBM55f31qjcb5qhwVmu3aVtBN4HxpqqkiCxJAN1575rJVCV741r46t4ej9Qyvqz5EgyNVxPEM2F1Gd5Xb2ezj5e",
  "key19": "2GLLngN5W2P7qyJwDAJUtXWhk62oFvHDxnNcfZKAc2wwiUHBbZdtj9q5R2gFbCrMjarAqFCwLQAWFYkxwMw3D4Ho",
  "key20": "YzhWUvzpya8aKK6pbuRkdyBRBe8s4GPBic9NLCvfgV46yDCZvBmHgyQePZ4ozaPAHKxEeXa1cC2JfhcNzyD8Hn2",
  "key21": "7JZ9HDTdHAKQ2j3ZW1USQLwJRjPj3EGzdYztMegYV6NZhkvsbNhtYjyUpJM6FmZ22j4bMGfhZh3HBvejTBXKXfD",
  "key22": "2qgtbjHXZKigEVjBh1Nc7fvKm8z67JciUv3Rq9eng77LJJZkiGvuVRwjnpUmRRHrKRRUpGDnWb5TXpRaFrLRczGf",
  "key23": "4EprsuutdrK1pYfnXwArBcra3DnXLj77wZTmXNjamUanzcgJ7GGJZvwWtamSKFxS8vv93VqWAcNU58v3w9W66xBy",
  "key24": "4DYiQQeJNS8Bhp8PF89G9DNVKmb5KzeRcRKfpcxhUZ9qHqkWDaLDZXr2Zb832n5YFMaTpGw7vZM243YfNYeYuTL2",
  "key25": "PMjak9tqApesy4xpXVFzwwVpCxXPqv5zCcoZWf6hmx7Xwnyp3svuv3p3R3y4FVmYh5Azuw2WG2dsL2NGVBWKNef",
  "key26": "k5jfHTL4YfysMG85Ca9jPsVfMKvUS7an5bJG7r3mhpuJX3SFGNzzqxH6kGgiKDHzpFbuQvG9A9mH9Y7i5LEt1yt",
  "key27": "5QYBGXpnBbYr8CXgt61WUog5KWe8wsTGR9VNkpdvy9Tx11FvdZb1ERCQMeJPbhAQGdm1WvUPcrMZmUR4xPJtjcXn",
  "key28": "2Hv8zZ691U1ZEMnezGvFTG9epAprhGAwNdCEu2jzCVtycD1m1dADmGJnAkBGyfx38i4vzpaFFGXArTX7dZi1S4Ts",
  "key29": "3fb1HeiWrmWGsaawUv7s5kBcwVvUwDo1uDcgmmpMtoq79RozgXcmjgHAdVHTjPxRrLvvNQ334zH6ND4KDHbCHhPH",
  "key30": "3itxoVDFmYR3G4VGZFcAnC9ix55MKfeQ5botXcdUm6zhzzv48DyQiWRXhxWBQuWDNGngB3b9wFyY6jgHWFEN7ZnP"
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
