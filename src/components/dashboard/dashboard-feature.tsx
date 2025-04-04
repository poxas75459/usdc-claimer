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
    "5xPrbQnmFxq9zU8uUmyzQyhv6u2EYDF7Zt24rpBdr2Z3rTxHuNRJwYWKpQCPPnKXyxiaR5o7o7rXz6cGyQdmgPgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47v6Ytxme5smhnxuJHWfqRRZYdSuq592UsYmxjpKdQvxHw2gvzTNzobW3KpzeDs6rhpmCoxxCUP9CbeuRVnJonp",
  "key1": "cJVevRbGpphMheXrBS7TU559adipe5AzJFfUWPwNYvG5buokQXrSxKgLTvXarAZL7S9jHRx8sYZtvhjVBkGSP6v",
  "key2": "5YzXdGKArH3Gu8aV6Noi1zPQC1csqRgavqLBjTRsQuVYGuJXxZrwgNkLX4hi1WB5wvqRkKrRP8ZognmgCe7DaLp9",
  "key3": "4XyrpdLeLDbLTUD5t1umTn43HtNQHo9qDLVRy6JUatNBTuzwx3SR3bAUyZAuz89BKDrNM17uuKZHoe8RrR9x3w1V",
  "key4": "2wFMqDVmadd6BNKzX1zbKKMK8b631jRP5QgBiudv4NaZbjM1FrgkxwEpybuYLB1ZbgCB8xY6nMgFANSRGpFiyeeG",
  "key5": "57faH87fzaz1UpoHKkJagvC8wntdxBJvmMjpm5ZvXU3Y29xRyXwGbSJri2RA9jKtW1hgT7eUkJ2YDgvN7K16gTM8",
  "key6": "3MrL9anysKGkxNXkx1caQ8PfsBtyoEzaDNPFdtmdoJLS7wg9zGz5i7Bb8957tysAZ5jqAW5uwwXZEhe799M6EPG",
  "key7": "2ciDth6nYCuG5vQNjJ3uuibtXkZCpbL9StLzYyypGnpubf3PdqnYDno9JozXzDHRsjP47bHBoj62yRjwfXUL8SM",
  "key8": "2PkFAC87c123gtiVmERF9XD49XFWdG8qvRKqPs38hiTx853SceEbvBzqJRBT62pvG3TQc8Umu6B7Z1qYGDgeANvu",
  "key9": "4cS2uMZMSh5LCH55WGwdA4S3Rp98FmuXBSVYhn1M4taGE3NpYZo7PvQcCZ7PfMEicZ9NUwgGPbmrLkrsHXGG8yLL",
  "key10": "idvcVcQTc3SRn2eiqaTgnFwJDZUjy6WbHyM2Sf4Yz9CUHLPV3rcacacLPxQ2vDmRHjLdr2G6U31x2pLNvFiwGDg",
  "key11": "5zLu7y1oXXk9m7jCFZZx6Q2Wn3JCd8ABjCb4JjD9E9nZNgrsQwRx8yVviaP2AXa6hTgWBR7ZJ7MMzL3G1SZQC3kD",
  "key12": "3JWp8ejyEb9SbRV6dAFpZe6YN8cyKDToLTcWEt4N7NSLNrFVtathnpDy7EPeg4Ji97yXUcjZVkGxCW8dq13ssfZo",
  "key13": "2733hXjBxiHoA1myaJ376S1W9oGpD2isLLyebPe6Qa3VDoCzkE6Up9JwbJNHGfoTZGhzeqiJPpBGiJz2dH935iR1",
  "key14": "4YhAm3LbHzggGvQcPkcf1anCcb7TfHnhGxwhU1bkTq5q3qvCiToj5e2b4Lh5jmgpGU27585jYhUeSjfwSApGfr5w",
  "key15": "FtnwJUo52pavFyr94ShK1hRnCXsB64kgYud166QXG1KtKmHcf3taJGdtKyH6VoWuojeWhj85PqNnMwRV8v7uVyK",
  "key16": "TuTfbVMu8n63mzmuiZFmmky4d4KW1ZsFd4kfpGXUacgaAeB3f8NfmsMdQVA7YstRoAeP3nPLQf3EqV1xJFGaWiU",
  "key17": "3eiM3xYY5nRFeH7wW3DXETVRuxsQJZS5rqxb9a7E2oxDxBP5CkXses4CdBvEfFGUPaWa6cXydydaPpp6BvmYiX2Y",
  "key18": "3futZL2X6pQGN2bPTuhpyTSPnWucN7R1C89LU7riAaTTioVnH7EC35YmXYMUH33fVJKDoCudt5FeNueHkWwyRR2V",
  "key19": "5T2mBoQmaU6zTbfodGjUs9DhQAjJnajrzJy6ih9Zd89Re8662f3SHwsJccERfjk2J6KZdGP2gyFJkteRrNvpyZ34",
  "key20": "5SYGvZcxn9bohTf7KM1PBcRzWdEqpDJcTc76qoP36QxSPUbj3yuLKg4zjMmqEUpg4ymGF1VJPEfJvk1yiQtg2rQc",
  "key21": "33ETfpKowrTxU6hxBgxpwRyiGXLhXoigE5cn1FaZhMH8uWCx4onEh9DL49Kp82E7CquZoXJi73xwEiAe2314drDR",
  "key22": "3unyxuuFcDe3i9EbQucXFNRYjxAqLQLuUrn1mwau8AaFzJQvR7pT8KJ8Mffga86QRrFQrxZUFUcpxXwrVL16nqtE",
  "key23": "2dCf8H53a5MxrEiPBbSdUUFpTqvsmPeD4FVU9HrM7XmRoUcJLxxpfcWedsQo1UsZ6hmLLpmDZH9V76hMzL4gEHgS",
  "key24": "5CNCdXnUMFfVutC16G8Uiz4PnRhws1qU3ggtWBWuqKYK8CbfS2fugkxR37ZXiPCGLFZc1u5qYvH1grYvqRDqQrmV",
  "key25": "66MKhpKyZRwquDJiaYZhsfgtzF8nf8K7FqstsxC24GwJ6Kn6imfRHpXwum5jfDkCVZQGpTvC21tT6objRWecrguH",
  "key26": "4w5wJEkXS4cwBF9rX1k3syqTnj9f4tCE52FjxP9Kbfevzq8raweUyVD1BcBs4xUPS6AFvUGTiF5a4ZpbSzhw6cRj",
  "key27": "3QwrkKrm1ViUmGnKACVdH3n8mtq6fXxUBUiryt1ThgiLvyvTpyZVZm9CX71Yu7HWPdLtTU8m1pnEw52BGcHMGQiG",
  "key28": "bQm1EN1kGYDZAQwovdFfiA651pWWhKKoEWHYUcnexx6T3Vae7XHMC71xuqLb9vyEcZB9EZ91LscUU8VkrXec91N",
  "key29": "2X6jVNJqgsX7y7DsLd5zg3oD5PEKL4KJ5ux6cTq1hp2D6qtnb6qXC1EsEqGRUpVzcee5nbjzV1Ku1mCxsg2ncoEc",
  "key30": "33Sc5FvR2eZCqPbaA7iQx3Zfzgvhmyx5EoaaMQD1jsrRu4UFvqPWiiRFRgpjSTAcPSSjj9xaCwzmASy2pBLXLJrf",
  "key31": "sx3SLwYZ2VTVcRRL4r3N3VHrqBxURnN6xMkvqfTnSf4KQ3HErxXJLCzrjGBHXbJdyZxHERhqM77hQhPmgbdeUqP",
  "key32": "48Cb4anwnB5XjfxaitL8tFHFDauBrneJgVaLTPFt7g6SdEeGk8is8bd2gjKyfMwNmbbNRcygZXw4GRkj1LZmfXTJ",
  "key33": "4fv2dEicAaFYmkzC5nXPapswNaLioS5bzh77bWT4yeWvHaRSYxEZbQgkrSuHjKyts9bniqBp6CmUMENdtRpiYUwf",
  "key34": "3GXkrSfAYszhywzo79TYQzQyWBfXZTam4DH6mMXW74rK9x96okLbPag8yFGwjxbuk1vfDehtx6Rg89TGkhzVh3MU",
  "key35": "5UspZkHoyGWYtdHr6mnn3BRixkwZgPGCi9w2QjnM8SvqG3N9DDeNjZN7WwkWJfNDTLBwmXW6FRY3k1m5M1fqY5Vx",
  "key36": "4NdHj5xRn3umcozgVHXQPpEubn73pNKvqVRneisVdXJxjfmbAwPLwqhsdAJfBmr3pwexayepi1yXDRn3Wb7hC3d2",
  "key37": "2Cqij2veY2xygLX1KaFtpur3cYfAEprYbyi5uBC8X1uHGEjqHphATybrzpZ8bZbR1bWQA9ud4HurSNWkVH5E12nG",
  "key38": "qJCa6cDfwocTeccx5b4WrZbsbvQF3QULwoyXBnsZ5B1y42RokqjDumYTt1re6sfibrFNzPzzQyyHjWp7TyUJmJH",
  "key39": "5iEgVWFvX7ooeJbb1EN7tcSrFQG4gSWwMqyv6Le7wUzFShm6NaE8VC8d4D9Bn6QgDGjAJ1N5RquQ632et3xGHooJ",
  "key40": "4pYExD45ePEgWjpCk9VwZSKWNsXVTAwM9yGtkeByjDWuFDz3SbGVfNix5Fg7nrQi6qpR6mM2g6iwFVj1WaeY3iNX"
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
