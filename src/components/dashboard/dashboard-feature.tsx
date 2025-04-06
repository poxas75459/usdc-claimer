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
    "37hMi6LTGzBobK1HEnJBTZBtPaPmRi8GpErSSCZTvTcaVX3ZtXhSkyMZRcX5V1ibPSRMLijFD6QBykmELAYndMhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VR1gj1NjXDJ7xGmacsac8yTnRq2VKcTpQYVZJszwmZdFwepgQzphZ7mkGfKMbHHZvPU6RJpTxwibxjFqPooymgk",
  "key1": "2fUGrrFEjq4NgNyLaY1iRb3vY4m75DbNT1qZ1YbXFn7BX3jY95FfLuXoA89KNRoQKkH8YCX6WDRarE7pTG4pvsgp",
  "key2": "5L37nqPWfzU1iUN22dBjL1sJyif6BYpSrmoeDRvjn2soSZKXEggXThrK8mstZwC8Sqpm48NypYRm2BZKE6yP4aFW",
  "key3": "svcogTd6Bn8WQek1HKfqXno76AsWjq2yYKgnjkAFvYsRFfN3MLk6j9tUKfJ4w9QcmiyuUKbVHd8HfRwiKQQ8oZW",
  "key4": "3TJnAXNj8HUyQ2VtsJ9rBgDZRWPUeRM8im1rYCZJM2CzCbBA2BoZSk7VF9BJwdGdCwvG1KDrnUhcbhewDLK2fMT1",
  "key5": "4WYd6xpmtQuiwsdBnwGLMUvrDSvYJy3urToBvGyvTXggdKSQ52yR16EZivZ4hUdVBinJN3bji2MN8Vx22FHL5iXE",
  "key6": "2wkcqa1Wotc4eKcHsPiFcPcBMiY76edAcpjaFV8WXiXMy7A6AURaWcx9Ge5aX281CJ6VzE7NGoh7swaDixhtfjdf",
  "key7": "26L3NHHGsDSZmp2KChZrDBeuMW9GuQhXAL2AW8jM4gy31AKuhAFA9h7XwQzMhmp185AAac3xNJLKVhR5PQpZVPMK",
  "key8": "3T51FM11JhELzJPAChpDx3NWeQRJo4HjnUp9YoxzmSPEG6a1SEncpzEDSDoNfvmmPWvxk1imWbFDQByYvtEVgPSe",
  "key9": "2KdFn8kSXdGY8Dm2EmAEthNMohd1XAWw865EDhqk55ZVtipNx8TTXDr9eaK5fB8uFeaQzAU7C77Z8cEWkCo7BaWX",
  "key10": "2JgSbq89tu3unDGmgetTHKq7kiZQPAMHcqDtbXJCKoRxP1Sq1NVJg3yx3fP59JwfbheTqXTbPdK1qW6H3P1FQwpn",
  "key11": "4kbEXQJgc3iLuKg2eCtNjeNGxYvRUmNRvY9zy8BgPS92Atk9UUugnTEGfYZXrSKiqKGfbH9K89Fbug6tgb1pijV3",
  "key12": "55JCBySE1dCtcD7S624D3KMkDsKbhjEQh5xHoKJPyDcubnH3v8RCvVG34iaYYUrm4KqPVBuMc9jAGuuaim2mTvJZ",
  "key13": "5WqyZpQo6oLSmnPPpmzVqX2SGGFm4BCda5dhf1aWViH6AbFtFavJJH4LhmKGvx3tXYG8ULMwQFpMbNQa8bh6o1nf",
  "key14": "45B8j9b3u1Q8tWEmQHgqi5jkSZCNGyiGCturttNThLDyVXbi8NbP8H2j312RgUUaTZ4ULsC4kKk5KJrWDU5THNpy",
  "key15": "3Uf1X4uALJd6ywY4jpnMR5asTy8FbBgA7ANgs7Y9FkJKpoYec6ETPyAvMVTpLAHdjAoiBs8dkHwWjYfp8J7oZtej",
  "key16": "4oBr4grs5XxytaFv4Lq3gec79ppsQNGr1gx5gVjioEaeAM3ydbqQQnet4skxh74vBgtX2g4p6DnWn1LpoSnhmiuV",
  "key17": "3YDAHzNCqWs18CcNxwtBVQh8dYwRNqTpHnpXGZf55nWszoaEenVAXoyQNzqTsWFEG9Bgo7YRCXonxTrUdAu4tC1W",
  "key18": "3HiX4YmySZnQ8VuXaQVH4NQCJevxLzPqaknYiJkkPVjGt9HNC5itm4mR1QKFu3jGxCyPHQbJc4fhjoVhHZyj2cgJ",
  "key19": "3b4hkPmG9Es7RsgrDGZMLy2a2F8Fh5UxhDHhY65nuM7sVS7LkZGzGLAwUC7Bdxzt675F2Q2bVYbwCQUN9B55We4b",
  "key20": "4wBVjJqr4PR8KF2krNy3ytReNCSNaqn4SbiViPqSiJkHHZQ6vwPYcG9E1PkqeGnMHgJYqNDuYTTbdQgGSk1EAHSE",
  "key21": "stapuNUZPqHFa6eWbhWgGS3Q9zeChdVmAv5ozqmfkZ4h2kHmakmddVraNmEC9Rmg7pcURKCVNa1v728ryRUGetA",
  "key22": "5QMa6vsoqXvTzZNZJEcUEpPk5zFhuB87Vf2wfyarHB84yVJ3JEvizf7wjRMYqYiJfszzS1mvsZzDhGYP62vMpmTF",
  "key23": "57u5DYSgrFhuPS7Ji9r1LMhh1sr6EFSjV2JbzuwqUbGrGCmoE7JnS5qAbFj4bV3WicKsse5VLKB3w45K4SHdedhe",
  "key24": "4UtDP7VAsLm9MPFQTmYhX9XznJWoB8EAnAAkL1fBdHumZE9QvRgmgCKKfnc72A83A4dgLGZBbXPw56VEi3YGVo3s",
  "key25": "26bNfsAoswF5MUpJRHXkfizNSYA4eAgP4Y9yjVLcDr6b5E5f1e7B2EQ5tewBodqBiBSY6BNj3amdhF4cUYpjhgU9",
  "key26": "366jJfjQBwfKLojuMyHPAiNnbqmmGtQbzu6gkoaEjkKx3vdqfTScXYEVmPcSzSpDWyMmzYoUjn1op2toBNS3LrQx",
  "key27": "4EjbVxocSqrgV8uWov92dCXJFDC4Qkbh7GJsdygabkXWbBtWFQrrMCRu594cwkCHExqyD7Zt8Cm2RZwynUod6Vt4",
  "key28": "1sRhzoqErvuKvEBQkyHz4BY5CzYn3HzfbjHKUhqCCchwJo5yhtbtBBQCY8sAEueHcwpoVsfvG2NEg5MzPBS5mPT",
  "key29": "4NL8xcoan8GpjH8g8TD1Kn5FqZRhyHheiuCW66FepoYQPFvAU7vpF4JaZZYRbh9Ptymwp4mmHcBRtfTKL479gjhW",
  "key30": "G9cKz6gDb1AStWh6T1eY6f3kVMUgVbCeQfVSSFaKw2AA3pxyvnNoMWP9UXaQ23yWefmWQHtKZ34fSwoHB8TnFCu",
  "key31": "2crrfrxU7DA5eoSxnuW7MYczHHDyho5GAQn39SSNBrAdbRdXcwPFfrfXSsM12chtHzw8aTeso1kcGtbJ7csw5PCV",
  "key32": "2tnhQ552tkM3vd1i8q8dskNRaB8JCPdxGHoyYc9MUWCKRdUdSQBHXoyF8UY8vqvMG4AZLe7bZU9HLFD2P8cncXPq"
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
