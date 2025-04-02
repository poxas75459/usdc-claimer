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
    "5XDMkGzuNQnF1128ngVUkPJBwBBmXdL4HpqaGEjM9cjUommBydGaXhbmRx9pn3MUeWbZTnvAMNyPZkFp1aFCDaMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RZneZuqUnCifGmwtTyz1BxMXRSR8rWuYcseJSbdbUzkHEdRqV5s1vL1J4cjYAPJEvFjASkFPaGxe59kjYbG46t6",
  "key1": "5U9Zv7SyQEApnkEEFuid5Z6dqUeSqP2Xnxhw8RvhgojBuxKavTQ4cWjyo7SwiJtC63GcGPANJEMDWKCye6i6mABX",
  "key2": "2sn48Cyd5omKqs6JtdVLbtAj3q89mfwBi2KSDZXRaDMuZcTudjTaaiN7Fmx5muuwTtsUxseU3sdwtrxtev9z7S15",
  "key3": "63b72t3ATHxCtJmUxzNj4pzsSvTFu8DkroAxsyFpjqHqpq9dAdKUMg2eCihqwyra9WPCUGBqLUz59KDdujuJsfNE",
  "key4": "63vmCJXWiRqwdZSgqj3YUuGkrinjfYKnYqJVEEyuufCqSnq834RSBYZwQ6mzCP9ENM55YrPL4U9wZJyD9u1W4VSm",
  "key5": "47rc3AHkZeyGDrS1eEUh9bjFH2JAX6DFZzQMMudkGaMRPc39Jc2hSK4zL4pEkJJKCXiunNALgBJqyescNCsjcquh",
  "key6": "4dPVtko6voQy4nLor9AWJUTCEDtxwdV7mhdFXHH7ke98je5F63NQRgCpgV8yeWiNAMRfmTXQshWoidHg66j6KHfs",
  "key7": "5VPAehBBwgHWafruNd6Sm8yvGWdUQLFeyGzHrP1GugrkctHLkFa2koE3QFrzX5NW5XLXuoNHExzwb53yRrJekjEx",
  "key8": "cjwBUooY9iM3D8k966MmkWenJ4Yr5w1ECbVBUGRQvXQCnWm3WQH5qYKQ2V8KBzRKzMWD6sqH9AkR7xqyc1fXRx1",
  "key9": "2Uuu3VaHpkCQXVR33UpRtQCbvkruufeySth4T91FjKhTwEE31Yzt5CVDp1UNqXRGHgzs1LrNiGk5hJW2iBnDGEVK",
  "key10": "4MfbSBwgkRqFi8ym8s1zUaKuthbmj3T1jFJ6Qdw2N8Q7HoffQ8zHASwpM5mNDtcRuAb1pw4AEjGpZEsDKGxK7a44",
  "key11": "4eDUH5trgtRPQfcvXZxwQHEEqWoF4Dq8RcBu3WCXXo48mNhBqvk2oX3Z5Srq25J29axQWMjXjFX8BRXL1NfyEp9c",
  "key12": "4QVeuseP8toCjWsApjy5E3VMqS7GiGAFyYAqLEj3Bo6QePm9TvQmgYKAfojQ8AY9TXjSEiEPBP5Y4cJP9wAQmvet",
  "key13": "4Srtv76oasnRjvKizeRFGazZr73CCY5mXujUrZh3XGqRK6DMW3LLn5V2cpCFE5wrNoxLzMr5MMyUQ5V8TZKNqLbS",
  "key14": "2pPHh9x7EgHS5SfemVuUNs4eknkNtXG4J6BRMHYXnGcHR4DHd6QSreGn5zNCa6S59d3YFuFz8yTyTSZbhv1jCRE3",
  "key15": "3L3ZTy7ryW1MvXrEZQeJS5hBq9JwVGnrAdGzHZh6rcTTXhgie9v9Xaa2ANXYMtoxTbP7GGmDuCgwBhfU5vhnez2M",
  "key16": "3oeKAqTqueeviQPyedq3VBsQrHTG7ex8kxAy9FMfUeR5Hj9dERAMzDmaY7EuRSdbjaptaKui4yBaKP3VvpawpBN7",
  "key17": "4h2Ux16d8ev6yPT3DWdFhFf3B6fiQ7RUbwuvyUFL8hWnXLLX6qpE553Kx12AxJtD8hqpCvceDK5socCGZxgQoeWc",
  "key18": "2FtNsvu1Vz56zqjk56HFhC9NMHNEFT7NFAN2sFqW3Cdqdy61mKYEDjQFU4DSF9dy9FhV8bv3DhQN8ZapSsWDbrSq",
  "key19": "49BosRrCBmpJCsvkiVArwdCnR6M8c879g8jE2dtJrNN29FtTEnNaDQY3KYrtfDCmvkjCguAfGKFWQeKJPnvyKh9K",
  "key20": "3hHxibkvwEVfG7Ec4jaggxedjhCYXwX8vHGSZ1QCMpwy7rk8NH9gSpSggX2pKY6NQB9oLAGhxqDXqmx9RN2dvY8p",
  "key21": "5yMfR5YbLjHK5JHfx3BUyx32V4r4PptCWDJvWsXJEGoZcnMVh9i5NDy4nyGSqaU9LPgYgxC1zY1m3HLkpmGSuVMy",
  "key22": "31j8xBU5TKF1DPyqQNdVgLD6kcxxa8ToPTMGu6gfrp9GbLP99hC6XRCpa6Bnt96eThYTFtJFw4NmJgQrjpRhhCSS",
  "key23": "5GWjLTz7ncpnJaXU5kdrnEGeocdXdtUpPUxfFc8wr1oXfgpWyiGN6nXqfGbwH5nxCiDEUBfdCGyf416WUg5WGRYG",
  "key24": "64UJ5JvCK4grG6hhjcqLmawopRVPLJYy9bcfrD4ERkMRtmWkWHnTorJ8VM4APkNMTaUAB7s4EXew9q3L5zJu85tY",
  "key25": "28BthJDmtfm9xsj52LeAuy7NUoTRN67cXPiFWyycKC1TxybkEyhyFW1HUQG8oBbQi9E5sPNtcMpYpBzvuou1MMJC",
  "key26": "2to8PpYgzZ6SbvNmp9WP9D5kvzqaRgt5JL42DDrZDbuHa5Msk9SaUeLdJknudaXivUwfuWxxnwm4tuVByccy4bVc",
  "key27": "5F63STsRjAws3HUsUhGrsjXvmFsx4Vucodtyfy4sdAR5PWR8P2XbUjDJKzhhyoZMX6imXzmMXGfxwqEFL2Fczt7r",
  "key28": "x3Kz77xRoUEN6KWcRaKZrxZ72jZXXew1owJ2EmRo4UQoyhCa5mVyuu7dbxsoxHuuKmmjm1DgvQNQx78ai3Zayio",
  "key29": "5M6svpCnZmdA7GXevhpXhKijRz3dceuezYwWpYyRKNkj1vxugR5To3LGfbys5uN1p9GnusdC2SiohGt8PpmtWLcG",
  "key30": "3pHwpkcgnVA5WtFVW6EVhr1UTt5CtDk6qSTrRH4bB3dZqAzKEYjiE6poC4hj6NbemFhPsmWw8epj8Sr5unHTtugg"
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
