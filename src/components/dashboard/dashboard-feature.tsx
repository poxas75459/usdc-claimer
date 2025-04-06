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
    "3jwHNMiNYHBadZ82zYUGiRr35hd3ipm2wajqoewrFNEy9u4US6T7uWk69Dsuhgpcw4QPHKnoJ5qZb9RoXw5sjWWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "366VeCfM4A1duNRvnfrpdgh5oHkgYQx9myaNhPNeGNczqADxLm8pc9SdgkURfPghLHT9KcqPQcosszzW2XndDHbT",
  "key1": "3ZLjv7TXMxouK9QN79wTLyfvhJit5BczdKRn55qhiToeG2MZbdQioGijEopkrVc8us5Y5t3BC95NW1PaZLqMqmXL",
  "key2": "3CBq36H8eF7p9GpEBkeiRanG3zfbUpLGXznWN9bPuHj3YXVUivSveX9weKDnX9XQ36xwnnJYwSm4yUKbydqQtsfk",
  "key3": "3h8wxqjqPp9zsutHKEuK9gxzxs7wnE3PLrYAzrXrWBGYS4uCCfXCxRtjCp4wqePFeh6Rb5uWqzb7NUXcgLVTgGKk",
  "key4": "2FoWoCq2guhAH4NTxKcE8sRwEQGeepE4Ch2xweJih2hjEeaG6R8dT9ySMxpSRWZvwdiXTRh41wUZZ78YHMnnb37Q",
  "key5": "3aerLyLRiYB5hqHzbzv6RQwuPw4hLXvGSXKMZK2W6fM4SjwgZwE3MqbRQGypyaZYoFnJdB2iTPg2CrmhS5rSbJiD",
  "key6": "5JEANUcG5NzxY23MJAkKgUp6eDsedR8Fdck1cUAYyoNitY7Uim4goLsV4iCbiKnsJPoRGdggdGM1RbXAsrMACsMu",
  "key7": "5QiMC7ABE5jj5g8JNDZ9WTLJVcGC6UwsXAzswDRhzaHiuJBDrepUuu14DQJGCzyxD4gwyiGceMVWGm7NEJbK6j2J",
  "key8": "2VmVbLEX9ux5Y4o9ZZTjVFPL2X5Kvx4ZoJBwGGAYK5r2AkjsKRJBfs1gD2W3BwBundRke7L6ytt4DFYj52xPX2Cd",
  "key9": "44aVFQoNqV9ZMJmL9h1fT1zjiVrFZRw1cvEo5oCeS6hH1jimozqKzaFWKJrhcUgf9mKreZt9TWswP9E7vvhzxxQW",
  "key10": "2dewmnTr4cwZ7dzyMgpa66yGKJbX9GdQXiDScJJDdXNhHjn5oxbfJUWDudLqTnUyW7owVRdsEb4TTmofaQuSSgbU",
  "key11": "2pvxc62MPsDYDto2nk2oXzu3gzbAbxg5zbQHoEE93XLdueh87MKUDdArGjZ5QJtsvmjyHPCB8NBB9Vj7ndgo3xn4",
  "key12": "4GcnCx7zRHPYXnKkKhWBspnWe2mnWALaru6nJfb3KJYq8X4ndatT5rtz6eGmL6NGyzBTXm8bF6rJJ41LLAfcfQVb",
  "key13": "3Nk1Dno4GLx7MxnStZ6M44wK2puaYxFsAcoAyiX6pxLfVsWaoDvfrPH4DQ9RoxfmJeBR5isH5RWxLzffkDYYAnGe",
  "key14": "2ZqhyyZYh2hCBjbgWeYQPF9PHNXBWjit8rARgzQEzma4XnKNKejoVyXJ7ZrruziUZqBJaFYnP53htu3nDG4nDnsU",
  "key15": "TQQYA6SQNAdTCwkRq7CFp41zVn5T42Vi1QWTYQKT3w29LPQrXrkSgJ4MaAbRHMaqPENCHrMfSPjYQnB5a4Xn8kg",
  "key16": "rFN7cYXCM5kPt7XemY4vzEkGXuqiEboi46ZLyojBpzxLGZtXAMgVaJ9EcwZcdDhMS6P1fsvHvWTeJ1P5eoKUTbN",
  "key17": "5hqM7BaK6UgV7kFZSkK8CfPLQki3Po4raWsTymeB6MtoaH2Gj6wFFR4NT2grLqjTYVeU3K2MfnBMZ5HMsvLNHwGy",
  "key18": "5wnhTNM4RUa2TN4ExnZkXwgh9R5i7uD2eKLvdcq84AVrfWYfaeKYfxDtyZAXTYg8qdxxMA9tnc74ZQNxi9EZHaJH",
  "key19": "2jwa28EvYsbJt3ehuomPcYm7YjgxJ5K7cji1LjeHGBNVHeXno2jhFKh7FLnF7Ar2Ui9V3ZiH6oRmmY5WCQAUvWWw",
  "key20": "4dMWa7JeSfNVhNcQHVeQhbqPMNzc1NZ8wmLXM2ZeBdnrCr6T1FCmGe3she2wC4NsBQj6ecBCJwn5pYtqkVLJGnyQ",
  "key21": "kPJTzTPTHAkeUWAvvonxXuWQRya2hFFo6c9CRs2Q5VcK2ssPeKMXoZsbYkWEDFnpeM5soZmedWRjKtNiUyQxKNj",
  "key22": "wzVPmG3dMvfFvnHf3pgNaMrJ6x1DLhEKBo2PYZfkbs9NoGUw9tckDuEbRCBFy9ihApJFyic7eBMXZdyxb78jEaE",
  "key23": "61Wa49xKDkzHxHRWuWnZEqEE76UjZQeYmjXo1skSwc9zuvuAmE8HjMwbjCtJdh13bD3Q6DiC8oZh53Bve6YVizxS",
  "key24": "4oAYVTo55DK5c9fBgTLBrQKrmE7bMMgFwWVe9fxdMD3TKYQ3foKB7n1ihxa5gppt8B3XWXB1vVMmqTdXXCBvzfix",
  "key25": "51HYW6LWKdfqCqQ2S3Q7hBXqEpKHRBbvDMzNuQg9DzuLtRqeyMsLdyynXnTM9DZLfbXZLe3gegUnBZntJmJXJ4Jt",
  "key26": "5gBXR7S3FGyMfx2DWmkX6sYJXnGj4phfzkoEAZQ255tYGcwrnDW3hvEAs3SYqyEmif1Nwf6vH2MYD6bF2K87Nzqn"
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
