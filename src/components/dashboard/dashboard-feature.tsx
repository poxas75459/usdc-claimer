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
    "3aWDRaUUjHsQRZ7JUj72vakdSq3MUb9eikdLYjxh4Q6f5v4dYQaJWEFpHPPatT157jEQNHkumgFqw6eVmQR3bpXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bKnaxqvs91QTD5RGdCTCq8dfHoq9wNe58xv8ghb8smCPSuEj8PBHoGAq3wps4gCknHxwW9N3tmiVRS7t8oyJ4XL",
  "key1": "3DaKTdfkkgWcpSKkjH9Bx5gA7PFoNXQdcTmdtd6ryboZ4NeZFtVQMXFzszRTu4bRhrW9g2nC37kSWP2Mu942huPZ",
  "key2": "66SPHXewAxptnM5dJtJEanLhHtMiAqUFZxCL5c6pGndWD8D9Wzgor7dnUkqjrLPzdzeyuR3gWpVurMPSPazUWTQ7",
  "key3": "3up8xy8azRUa791NpFrsofUUgJjvaG7M35Hwy8GZ5SnVNhYRrkY4i5fTxQh9y2Fg9SkJDGReDTYVA6JbLbQwGoK9",
  "key4": "5BV3XumG8TJ6tPjuFfphdVzBNztvVREvJenbf7bTXWDF5eNhjtkY9ZN3UbkQqxku4gRnNvqSU5CcspHrpkSWV8nk",
  "key5": "49NqiGzKTZq2PnsPwubiUfq4pv4SS3FxCsvpvayDDK4fAzbDTwXLo2Lk15b8dHeYkv1tHesxDypYZ5qic8e4w6vJ",
  "key6": "2vfTD2u8C7qKqDobxGWNrSSjQmjeyopMCemuTgx4NdbJnk7AtGs6sd4ANqpYhhLuVR6N3P6FdeF6V5725UVTSmw7",
  "key7": "3zQV9BiknvtrEbyHre4WQF4Q5G6yARWF18FK9ALg96z7DCdig9wzRwG8QKFj3jbCbkTpNgtD66RSdKcX8PJcVq2V",
  "key8": "21MJ2sXD4brqobzHQPx8WtkoR47Te18T1eVWtCiDYhKfw6fxFW93AFnun3hHqEK3dC8qg7168DAqBbTott3zNAoo",
  "key9": "2kgvQAhREa9S2kc2srZjE31K6P2ukZbiNd2CWYfo1Qzg5SbCkJ9h4SwEyKsg3exo4Y4zkXdncfYzHSogEmYraFR2",
  "key10": "4W9wkv5RxwRg5vpFzoA85wT4YFfCCKFEeBcxJj8K5ZpA66KUbyuSB9iCyLQNUjEvdw677DAnu4oDA7dipjsDAMoE",
  "key11": "3oHGyuGy6vcfhM1kZZCM5wSHMstRSPPwXNz3ScR1JpHPK4fmjaz1CrFuJhgheFmF1MdUcJ6Sn5e2JUiy5JzwN5FW",
  "key12": "N2MoN5SsqQmN6djyDw2wjBdTdXnSib9m9ah4yXjU9EyShVVBotjQ2MooKXLzRah1xKwwZSR3NSYma71iS1zfYKv",
  "key13": "3y9mfckyHNmBU54xtbPEBhXePk5UXfmL17pbBRpMF9HS2K4dXbeiNSkXb4eyB54AGXZGofBTH9FyHw8FwcKTQucm",
  "key14": "4HPpxS7uXvJYUoJSMUUqvPvqpYh16bpk1f33HoRDxYvawtty2LsxL3Jn4bdYUQZJ2wggi7PjmTJqyzdZNQJfMm3A",
  "key15": "5LSQwJVUSxrJM6zEbqruxWnAXL9pWN7KL8tomHMRjRWR9B7DizXS3WLuxcFT2ABsa5R3cHZPKNaYNoLR9fqoS6LA",
  "key16": "2CmZPWfSzw6xeKJcsirQUUpAHiPg2KeyzkEmoaKPPdftfeX6gT4Uyy2vS62YBN6ZDTisAba7iibJRTRuc1JKf9Gy",
  "key17": "4edAPpm55QfiHrWbxwVT2T82Gf9D41mfCCjEvbAtNPcFGWQYXwuBVwwy8VHo8iorkuRn9JauoPa2s1dy9pyzuUu9",
  "key18": "2HqER5jWkobTSWGJtN7XvVGjVxKTHFQz2bbXURaegkm29LBR5N3gTXazPVKMrc5YY7MrGNWwwcopKSwfYCdWdY5g",
  "key19": "2VEk66A5cxLHqyaZzxA4epokMa15tL1zoUcSyVLQZF1bbg6bPQiceKieSBHo5K6EpachDAKRGG9uvtkgE5JpDaCc",
  "key20": "4wTD8bHfBBgs7wcJQ4mv1cYcrECMe7Kb1UUfB8DTFJadhiXzX3QyuyDvyek7MBfLaymr8AwegSgmR3ehSRf2MA3S",
  "key21": "6541SpHK1iQBHEgwTkgZY16jznhEF4PFquB7yn2aM9orXRcjtdnprpRRsdEcFy7a5PqH3ZN9ReUmiTq5Y482VzuT",
  "key22": "4KHTpSxuu6btmAy5QT87iScNPNH1rLiyXugb4sEdq92JxKdcEyPYZ6YtYjmzrockqFmP5evnmNEDdBDPL1vdwJ6G",
  "key23": "3wK2DiRdeBW3ihrCCWThDyszyU6wqdHDDaXQRH7VSvLsPK6iyNRKYs4AhPaGLf5XjZWcAhhK7sv8ZRBkpuVppgbT",
  "key24": "2VPU6woJToSXrrZuCWsHib5i9F4jt6XZPYmox5n9VAZENfgTgyLes1hj63HDb2BqpHdfruZyviyBMU6GHXiRGpR4",
  "key25": "2Dcn2JiLBFAJNanetGhfDAwaU7GGR7vcSNcgucJ1NdoTeQ2QR5TKnc3NypM2HyYWHKbcfXgzsoUXXSUdsSfRRF5p",
  "key26": "57g4GmGEA8EcfjhLepnvLcEimoPjoDgisso4obwAhNdw6d6Rcmr2KqUBkWTsnNsRUyqvokovwhCmAW2rUNnBH7SY",
  "key27": "wPoXwYFTudvEkrqKjyPFx7Ce9SbQohayPsPSnCxZKrb8vs5gwxQFdtWymBUBaB3CupQkCYBokzFyv8xp2njCnjz",
  "key28": "4GP7vWjfabYSdLkp7Kd4pVrxn1eJWRWesmuMuAErVQQbFmKDkcq5xP3eRPaEgxhwVRsAm96U8BPyuWytNewoit7Y",
  "key29": "4yKhhTF8uxEyZ4YAqD8L1zdCTPC53VjcTMNHacEGaHcbL6LVoXXovn89JvdfzznmQZRv1jJJwReMRKRm6tRKgNhv",
  "key30": "2mrKp39yPohn7KKwtnErWTBW97jonXKguBWKqiu3Ch5rZj2hpeq3Cx48pV5etdLF7dpuxsvtZ47xDshJCLmD2HdL",
  "key31": "EFG6yXWJBaDQDXRL4SLVSxUT8xaFjH2yE4WLmhpPCqtFbYFgWNG91bPQRdkRghCtr4bdXCdR3EEoDfXKJkPic5M",
  "key32": "vVwaQWzKEKnptAGPXqNAaYRrDvWpsh9MxwwScBojyewqiaNhD8EYFWJ7Z7VHYmiH9CiUgPkGeNx5dS6w853JLPm",
  "key33": "qzm8GtHBATCBDPRPPyz81zt8S7vGoMKDGjNXkS87Db8o1nDqajTZMJByoF8NhB2MSz1QYU96Tvkh524hBrLzgSc",
  "key34": "44b4yGekwKSoQXxnwHthbXB7FRxyZ69S6UVRzp6rbnrzvvz6E8vSe7KzDTw5qB8pqRhh3L5YyhybwcRea6h4bF7w",
  "key35": "59apPPBcZdRuUmM83Pc2KkBwFUmJUAtxWqbVtuG26KLWfhFcsjwbjNsvk1rGempnjniusUQW1rdr7Fjhgm8FUmZp",
  "key36": "4z6EryUKcFXMFqj3Vs5v7VT6cRtTY7MNfbaC7YD9AT1UKp7jsgpWDkprm9dKzeUmmXkNgbLZfhNsrbYhF3agqMp9"
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
