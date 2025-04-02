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
    "4FkgVyXUZBwMLT8VmhHL1pQHjdgmow2vA72GX913quru16D8JZgVUHGDuZuYPiBnYDBW4cJJGsFnHtxewFsMGt3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yrBBTdp538RJZRW4jcJT74uE6j5SUrK2FQx3NJGavLVTiBgBFRdekt8Zbcr3HrKtVAL45LMgLYK3Fnq6srVtKcL",
  "key1": "2ZyxydJz9PBMDH6QYFCPQe2c78rDswDhzYPWpeUnAXisKkN1mQBVgjTuQjhR6gKbtpgTwp4wWgNf16urQJ4nW2RE",
  "key2": "DkH1vbYSoFUARbAmuucpff1aDpktnGk2CxaXmFZ6nchHZWtdfuJioZXwpHtAcwVuhfRoVrMRUTtHo4wz2jvP79X",
  "key3": "3LDFYCsHKJ5QbKDJdB3pev3pzPqUfmr5W5nkkQunreZhGpMpERSRS1scNkSeJ3iVZpzyyFX3ehGobb5qvhZK4zDR",
  "key4": "5SEDgmN1j9TxLCDJC7ypPurGZj9Hzty2JRmHYUmgCP6AuGG5SQ6GxQD7ctdqiXeshtQhEfhk6h9aBrHFQ4v56ATd",
  "key5": "2kx5vy71kfV3bihdPN1rzVfNQQ6BPJx78ZLhedn6VjgKWH4D4uMM6wLuBvmubAEmED2PeqM1fTJEcfQTiLmfmMMp",
  "key6": "2VY1JnLz71vbJJa5ZmGnryoAJ2c1dpbdnhCuzzryicJamZdm6HJKce9t9P1Kiu8n7qYTFQi6LZz2XvP4kC2Y1VtM",
  "key7": "UkfcuzB7HVb2uBs8Gk5KxuDkvzi2tLhF6LwwZa4zpN1o2RYYa3AgsummFzWHXzB9tkU5a6emkb1z4hX6NUJXSb1",
  "key8": "3MQukRH45vJ85oMJ8mbUxM56cDFpTGrobx7Cp5Msxu99LeUdYPiuAP9Gyrp4CixYAQXxtdnvy4hhvaFxQng1KbQM",
  "key9": "25MX3AmACUDJg357YccoveQj6PeNq1fyi9egmDE43pD1R6M9naWEBbvz4yaqFSDevx2XPugP3PkTzThice9Pi6jC",
  "key10": "2uQwCnFL9h33VPRP6TVW3VSYg6kavf5jbsWeu2ooeK9VdwRKZjNvx1DCHA95BME3nRVvY9XFMzUxfAo1ZbKDJCET",
  "key11": "2DHUyL32eSugRYcyUnvrqefZHJ9scZSKGhUuSW1RopWAHNcrCgPsgpGkvXZDDvAjvhq4SCuYxrrj8YbpTcupUZAF",
  "key12": "syVJJfyKAXehBsTgECzjRwHcdWEBewtxnnmDwDZTnmFTsnUBfvGtSAQ3RqHGhPT2HYntWVpE9jKADQtwv9gUZAf",
  "key13": "3JsHgjXS9J6dT5G2bw7NDm1CBq1dwV1SqF4vnxKAvkYNVgR74sHNQaDCEPx1vWm3ez4cKFECNgjUoUEsrEnvPPBU",
  "key14": "2mmCsnrQqaE121AeaDom7PiGz5b8D9X4zt3Q6oBY96p4V85BkWzxgQ1othaLEeLsS5WotaTyezrz3nohC1qh72jW",
  "key15": "2px3BUsoaFTZg6qx2ZRyPHegVmGDL2MEnqxR9K45wWci1Bek7vcYgz7QEHouLnKnBMPCajNq6CF5veKgYpn6L3Cc",
  "key16": "2N7kESq6oKWv6QhtpBZs1U8dd3fiBC4Ggw2CKbAxFZ46sPaZQA1J2qiUpF52yMWzHDbD4i34BpMowBnbLNnzcm7Q",
  "key17": "3hrWcJA6DewHpFc975sLDD4Cx9AzPLf3WGLsnrHjoCgKJ4kBRyQRSgFBLVP46FXveuHtt11MWJpEF2hqHsvZVEjH",
  "key18": "21DnYRxE784AhiGWkc8vXdQgJBQz16X7gM9qQz6D4YZTrv55zh7Qyoumu7LYMmdFTrWcgT52dDJBKPtThZ4PLYTB",
  "key19": "1tPowRYMhUxkmoRLcrjwrhvc98MKApkA5n1UwnNPCdPaqCLQHaCmtGEYw2782pLwkjy19igKafAEWaj4HE2ZCvZ",
  "key20": "5QauwBSByj8c2HxuEp67LgT2NGkJgaKqvAeBUvVRFDzhMajDkvDcYZKmcU7G57TQ4DaGbSK3Rr2A8oh9R9YtUAru",
  "key21": "61UDmZKg5R2SDx5MhDgncZcwEJU846j46nDVgzy68MUPpUjTXbmHQZ9XXESXt5fwWDdwX1z3ehWt8WkUnNpcXpR9",
  "key22": "65VwnECpQbDDxUX4sxuhVEmT3kooDiyfNSx4yQsao18GQu9sKenX6YwLS4qRiHgY5rNqEiVoeSpsQR3NR1Li24WS",
  "key23": "4WYSgoiWWvzHViuBXWVrVghGyHzQqkiac7YCS9qtDcVZoAXyQewaxkBBZQUcf2ZGCZ4N8J54pvJ28mkNMWpUgjZ9",
  "key24": "2ivdSxYQ99mY8vB7M25MtX122ZAs3UQ7uBaAZYVYxavrVcNMcVyy2uid3wz8DQvtY9mgwkXyQQM16Gxb3YNiPGoo",
  "key25": "4b187b65ZMrb5KxAmQTqU3qpELqoBgeUTzmtkLeXHtfUyF1ovVyDc5ZmDhAvqdH8BXU1tVWtT8yTQPjrjP7JTkxN",
  "key26": "3LqzpkjvmbTfP489uNwikX9rnxgcqqCyhVBRCy881RDqbyK9wTczR8E5YReKFoBqCgLqyyd2kmdFdEZgn8Sdiwc",
  "key27": "4kfCigTr21XHtnJYeWUxcN12pdePw3Q5zpEcGpUABxuYHSYBZTRGdtaR3gb6AJfnxmW6Ux7axsy2no38FxSCQeYc",
  "key28": "4pvTLjuSHrn85h3hidakQ4gzKXuNutGJxhfwkobJvjkb5PktoZmSUhJX1rZaYMYuGjv7dAagsYVnm12NiYU6ZaeX",
  "key29": "LDmjiu5Ewk5dEJLomKZR2oDGgSheRFXdpJvdk4LxzqMgTc3GSf16FSayzPUsVqmVEbxLkuv1opNJg3euLURTiwu",
  "key30": "odfTj1r7HfDVRPwc1swWP7SgBVzCVTgnj9xMVLextJHb5Z2rCwbeQ78qfwq8UyJ5gr5vWzdzXKidcgizBuW6i7X",
  "key31": "4o7w41YKMSa1yZh7Pi1uWbGHgdFU6QzU4N3mAXRMDSMHPZJZAwrwMNJfHyVM4gU1sqVKetAaqewiFKw3uy6nPhSQ",
  "key32": "4owFQbpm6PSBAbTYfao9woGZUacvpGw8aySxx7SEKJSMB9idTWZfx9CbL5qrSfQ8ZmConfQtGqYmG89v9odwUv3A",
  "key33": "4y8CH28TPS52xR17jVPfjMepLFuoSf3DxaQg4wXvdEDjVU6VE1pRf5AvQ91hEF7vnwJEeKDsy1K5cW19sxU6mC9Q",
  "key34": "4Pjh9VkSb8fj8ern1JHtpEchZPaP7YhRXroQRULoz3R5z9ErvcHSAuGNPxzZmTxge5gbZfLm99EGnUA5HhRHnoEF",
  "key35": "4rKNYPYMknKBqq5g64zhSjF4NQN7ndDNhWwafGqb2ePWNMGpxzRBSPEVa55YwUNg6dDv9dyiEUa9Bex7E4xFAZLh",
  "key36": "4MzR8XwYsDjTtxzTF1jE6wBTbiTLDab6ijft3Jq8VC1HAZouS7QAef6qwYRYW2q2XWncyDL6FmYR2saHV8abKVAf",
  "key37": "2GMi39hkcNQJF3hCtZasaUFtkMgMFLhE6SmVK7hCT3V5SHypjmmRHhMWMYkij7gY9F3tuq1ZSSDgZFjwL6gWGdx8",
  "key38": "2gx46fynMRLjm4CGpwFT82DMPcQzrr1KjsJPzFPr6bfwsXBz3YRLJ7VF3bV7oTJYu3A7v56DCXieuXJmwL2PL3Sw",
  "key39": "2UecFGPWoKjoXkQ7fhQ4S6NymWB1iUqME1rXb8C7oazaMwQnmv2WKfmDybdqgx6du7xPDUUkQjxkXf2x5p3aGtrh",
  "key40": "62CndhkURtVSYbRjzk5gtQxcyuCZAvQo5eNagQh392gZxtesSsnDkm8wXv79YE3Z8yQ28kzRN3MEeSDkjcuYArBv",
  "key41": "4AW3vad5NDpFimeeyFfDjLuc6Lqw5he5nrx1DQ4zhXXzy3XQTGHKXoXUxP1J1twrHaPp7jUH3raAy4SaegKqAvdT"
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
