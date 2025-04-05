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
    "3ZWDFFPttHwSJpnUu5s7Khrdi33KE5D9wbGDJ3oQ2EW4GbPvZPHom2mPBBS74GVnRo2yZnMfSQUB4ixBm7YvkgAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pi8bVGRz1ZECfUFJ9MpLwsjbD5VjBYZGph1XL13AiTUb7WduaHGZHBPHhAx7x8BkYiXC86nmrwNPKTjjvzmn1jR",
  "key1": "273sNguwZ6j4R1LuugmLQ3NTJYbvq4iKU5SHDTsfaNffUdypF2vGwRKXCNp7Z6EvbxHhygaiQVjmVchE9rYCzjAT",
  "key2": "5MmxosPquxHT7a4BAb1sLLXT4iyaUrWMJ3b1RgzEjyvZwbiiSBkdtKo6hmjyFzdqaWK2gAcDxs3vt8pdK7uNhxEk",
  "key3": "32T1CnTL6JcJQppAUULe6MG8n9PAtBVHLX4PMm3TFi85vixjtDkEAzVLKAN2W1sGB15yxxQFceGYFrRTGTcMBP8G",
  "key4": "2rTZdkEQHdcNiH6L472ip4LxZzUaJyrJsFL1jSCFEfkfffVVK8eJ2C19NkxjWp9GFTVbpaeQ6sLot3zmaXfHxThU",
  "key5": "pnzNKLbUmeHdPPwBhJU26bMQAKmGn8sifPakSGtSaYdx2cEN3PX4Cfs7fAig6KAyx4yHvMFYEztRDTwJmZZRpLJ",
  "key6": "2kgdPafVviCi1zuCjpSDe1EU9hDvCCtdGwVFfe8wLyfqtRYhPT3Krtd6ebdHopy2sJPmGEYdZhhfYdxLKwXYEifX",
  "key7": "2GE78HuwAYV77hY5tmY5rtJSVPKx21zhU5eTV9ziKvw6e9kP7YA83XjhbwZT5ntnsoRBrKHQk8kZr3rFX42XTQVT",
  "key8": "5iEc4DKoDthRFtLh1NddkmXFJ59myiSCWLnWTtyzghfWiPqPYuqFo1Jx2DP2B7HX9Mp4Bo2tvwdAPTPFCSoVwmhf",
  "key9": "98GWyPqBpTD7N118fAmUaXK4WUmqmzarsXnh2A6mJ3Gxccmqzi8G6boAvmKqBJhGvUKg2HBszXMuok26Zztc11U",
  "key10": "25oVQSgArHeinUtC87yBb3j3t5nanS4uNY7r4mr8gt9GUj9rpRx3ai983d97UFUiUeiv11NySBGyceHQ7tH9WNcf",
  "key11": "3mzEEnKYKQMbVbCpeY4ma2jBTQuDSqaWKPshzPDbLGCHNig6qjh4nS9C3htqsf8dJ9MTSTT27e9EMMpjWPsaVdwA",
  "key12": "5MVzVZttwEpG2dFhRPjJm3wJ9wpC3riA5LqRL9GEvrL1LAftLeQCrEhrqaFnWyNHabYZRURKHkFCo2U1ACDAXb4E",
  "key13": "4X3QAsuzqVeNGXmsow2ZXqKyRrZdRceNAAzWGTkxtCkMyLkiiRekRuuGUt4HzRDC8818tGkp8VqZvVVYjHSKLV6y",
  "key14": "5LARnWuJnQP1T2VmdMJYXB4t5Z36mot8H6V78mgfrGxy57sggRDUCJvkFkVu1WBkDh4wDYfDMKGoSKrtgyyd6EkS",
  "key15": "66Rkn6P8sNitwmHVcFiyx8YL8bZ1yka2n6oRNTRNPHSPzcseJ8aCMUHPvhVcrpHaBJqvRkwYjJCM22s6Czjc1Foc",
  "key16": "2amJvyvKWQhHTeZssLaoWLUX8E44uNqsSC6ZgcUSk6heCrGZRYuWmhgpvFstdp8ZgroHcVJX35Zf4vai15fvRLxz",
  "key17": "5Tecf7icT3JRvKBTjynHmBzqv7VgTraHDoRDuV1bFGD1u9ZXQ2CkQ7uxhwA6B9P3FTmLufF4715QyDJctDgHXrQH",
  "key18": "4bd88LMFFfWwR8XoSJBQscEb3kWEWe5j2NW3bmZXeEkfVrvtL6nqW12xi3zwB52FjhZb34WSw5BxNjvLj122t7Da",
  "key19": "5Bur61UGTR8r8DH2oiTssiaxxzbKiNsdswbK7sCW6JSyXHYx4wnqhEDyDWroz1QjJVdkpcWtukPfxwrmZVqt9urm",
  "key20": "62fhU4o8hvr6K9R5vd5dTSxgU8zjwAHq1WcmCCLoAUC5f61yeYJEjgp2uz7CKPDRhpeUbYPsrVjGRGj74krXBFkJ",
  "key21": "dNiMvjrU28h6cTZgA2UiQuxqwAuhyCVDi2BS9tH6RbN1rA8ebaXzrCTGgzfuVRvnUR3BVjLJqpdn2SnteCoukxr",
  "key22": "2VVDCjUXavwpnmwSUrz7tEmPLzPAwAs4SUDpeCneDdruiypz4n5NQf2DCsj7QmnrM36ZR5EbfypKen91FeBhGuzW",
  "key23": "4KD23rnmDfeBwP9A5xC9QSPvyfomfw5BmiJH4u6ADq9mD1rNsFdjEvtpov3g87Z3VV9c3k4CKPhE5k14wQY8Kogm",
  "key24": "W3MYPgbFRGqzEKJUVQpUTCgpt8SEA9KyXaKw53e4Pi5cmXa1ExUnYvVKK1xUjssW2Sw4nv8i9NWmbn9RfyiFGxV",
  "key25": "56Cu1k5ixbdAz1StEmPUd3hdnSRhVGddHArifhBhNCFDU5AQdi43LXeePva5avZFP1YXvTdVcWQvecN3cPNfFhc2",
  "key26": "3k5KTDR4cwatYGj2xtR7DwrgApWLKMLQRCVuUMmUpYRyyHfVJy4kTW2s7FHowDKemgJE7cwxbVJESEjRww8hhvnB"
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
