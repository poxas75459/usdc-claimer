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
    "5YfRHWn1n2S7FKKKZZ8kwYES2X8m62wJG9U5mSabgZjFFyoEt9abnddBYr7NsvHokSXSh3EKMevRyvDZBVVHN7Af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EADyhuUTHnJXCLjcs1XVBWC2BUkvRsMZAR3hrZUwggZbxS3TAAVLkQgQUzWLciVtGCxNGZAvWtfdJXYJErsBtUk",
  "key1": "4LyaG3rD8dkWQq5fM9d2CLB5Yj5medKkKbURwKyYRZcJiZ3kFQT1af1CMk9jLLaNPFVLDU2DkFzJ2yoAWLHUD4FN",
  "key2": "5Bqy1pJjmLmf1zBsHFRMpXP4YyW8c687WP6apK9JbURgNa5z1m7pJbJMgZDwkoAAdvxtJ1ey5hCktj22tUK2YEAt",
  "key3": "3rypZQxWPdhHs7edFT5asQBfc8mayXapDJXB926rqa5gS9YfVp2engoT6hPaZ2JeTDXEkM26QNGoeAvgmDn2bzjA",
  "key4": "4PFiVRAKTiiG3b1vYMAruUGNBWYGrdL6V4gVA1ETj5P99uEJgEpYAX6E6TmTUCPTsPex4Y2JmE9QsmgGSZCcmtQB",
  "key5": "2Uifh8F3Zjeksq3NU4dTv6SnC5uXSm8yH6VXsYpcmWTt5Tg27bqWDwgAsF9xoF7WdJMijBJtJzBBdZi3MttnNff8",
  "key6": "5SabX4Go3chnK4t4tossiioEAzWGMQFBUgbrV7wtTaU8s4VzeSNPH2nbttzTJVMrsbUWhttYV5GKNjx3SRLDXA9e",
  "key7": "44VM3g39ut2jAotQD9UXrABZT8bvpDtBA5yQqdqPfFwGQwWWaiQNh7Hqgte1V3aG8YpyoQBSAd9VyVwAZFHoVLn4",
  "key8": "3xxgzRh4g316tXRNzMPV8xw3KWFxM1vVYfE55oQ4jGmxbCG3KLQpMf99XBioM9fRCXhg5ojw19PKq76HmKhhqFie",
  "key9": "5jTLVpD1A7px5shckt4h4sGqjPXYt5KKDsCYo6DA3nJCJRFVgRs91nwpuBAnYcNVfi6eCZELY49WXDeuhcWuqAKT",
  "key10": "5RnpxULPDPyApAwHdMMwvsD81KzANaMZGJhWu7WJXkprKNaTxR6mD83qrjGeg3xWji7nZaKKDGXvZCZBYvp8v4kf",
  "key11": "KaqbkunwwbEkL5ETeaTfCLuXzZ4kwCrWgsWQYVf5rLdvZYZqbDt8zBKf4jVamFQFtTWGtw8JLG9JHNScrynw6zv",
  "key12": "4bjCQMusSzbkQqfj32bqcZLXLUVQmGkDX8nwcaNgvNWF7DMYfhpZQJFJz8CX4vEDS2A37TCVyk2zR7TysAC1mqCx",
  "key13": "589BcLryrUAQCa8QTXVjzJAf5uUZnPWzfdirQPA2Vvaz15LJT7Wsb8eL7B8kpzm7gP2pNURLLKnu2Yh1Z7bnP5QZ",
  "key14": "pyUTW6uahsNExBEbrHYmiFybVPAG337xVvafGLjhUFNB42hsxg2DpvfNtL6MZh6oyDNmXWmQokqdhA9mrbRopWR",
  "key15": "2coacQF9mTUzpis3prLg6Tkd38JZgApif2Qz6qZGURYxyUPtL1RPVPAgUo5FTmwhfiihnExX6PwS7Mcv3CaoZiri",
  "key16": "5eGHH1gWUqKQoCu335t5qCwbAvPJZKmwfPK2CPCggr9uWsrYHLngLdchYdjF3T7ExAxz6AmSVWAhrbUomyYB4ecn",
  "key17": "3gXmddtu7iYkGiHFM4QBt7dZ8w6XBKQcCYdF56kCXRrhkDbQnBw92uaK3hkw2cRUCyd1PsyRoQPXAEtPEUHHxD4w",
  "key18": "1HHqE79tkA4zDB6z9uEKgvmXWAvSgfp3wFJqGsdaDw85EdcEZAzHy8Pyw28aKgqRjqWKdaeG2VHP4uRJZ44uyf3",
  "key19": "WNCHHJnz3iUuw5LC7q6NfikLHSaF3Vg6ZRcvTwagDgsPZni7YrXZzLgCGACfp82xAUaHZeFuQN4zDXzd7Szroiy",
  "key20": "3C4ZF1Hx33rS8QVssiYyYWYrVwRbq68qAtyPK4VevpaddrvJtboY8BatXhAAfRyFkdNJZM8vLLFgC48wCJkyXHNv",
  "key21": "zT2deM2qdH7sZYB7kYSPW8oeGGQUE7RBmx4drCYuRXp4gmJB5PCjwrax5JAjpiAXkAEmhr4AxoBrQQqcGy7rjmr",
  "key22": "2J7ipNVonRdxdenvm64NpQffpqLLuoqEtybjjMmgZAhfEfDDbGeocPfBj9xDTXhCLU2KZ6vBRgKj8a8fTM5LZaj7",
  "key23": "2dT72rAggoJqRkjdmieUpxh4W26qV2C1vv5ZudqEDWQEjsSeRt56BfAZZWqSiaFn1PLubsJVnZXdYDZ9jh6bwQqp",
  "key24": "4JpBx6uzYB5cn2Ut4CAjij689Lw8RPoJgmX5Lm9VVBeLiJ84NaHGvFasLTHodMZtgTDr3TTwPiXoD6N8o3qG7rVh",
  "key25": "2oQcCmriBvgT9p5iAeE6Gt5Toyc6kwKG2HFdkbF24DpzUhSbWcChTK3wmPqBU8q8dBeK8WBRxn4WvseK5RZuVAJ1",
  "key26": "4PXunCVVR39AnVxcTFWLF5VykK1wsN6J86S2isPuytTonPqp3peprWd8f6JrqDZ53yw92s1GNXdfnsbY48cHQVas",
  "key27": "67K7qXCnyFGhpwQxBvCBH54TNWX6fRojpzvpr6euxcYRtwbrMLES8jhpXCG7LCjmfWd72i3oJHvMXtXDW82fNEg",
  "key28": "4rXFzC8tzz7vrnfbErsgjRUW76UQ4gQCayqttrojtGHtbgYnQupXF5F7ZLTrCr442GH39bQcbTcToWaXmnZtkxwN",
  "key29": "5yWH8P1CfaaM9cjz1HeoZkyVfpoeeYFjSUJTFwYAM2vZhdPaWSJ5uivjuGz1s1ELz7LT89Kvnna12RQ2w9F5B3qy",
  "key30": "5cbpJLR2kqJzTXHrAQrxECUMm1Hick7T1igZydLTSQ7grN2G3rHoLssss69b8Pw2BQGJ66povpizzp2zFwcFgXdV",
  "key31": "4WgyaSHDDrHJTS7pZaQvaPYHXWJtNTd9PPSTgZj12THwLzDsmk1HRUkbwzzJmohumRddJLdbKWVzNP9L69L4W39T",
  "key32": "eJfDp7wTnBPQJpUGeJoiJ4TeMj9ACTsssebcuNFiVgWKH8GyMBfsXQf6AaY2aBcC1FQC7NuFUyL2gyh9M3jr6vp",
  "key33": "Xrr918Mcq2ZL7PKpexuT3H2jayVW4R5Sw2Gz9k5AD5yvjHEeMn4FELwVGbvDjZJ1uoyvUAf6A7G59SzdB4TADYU",
  "key34": "5atTQf3H5t9FFZ2j5x9LQWvf4nRvKzrL8krnFTy3FPyinWB9DiB15Y4k8ugcj9LNZP7FBbsR7fFyByR4vQHyUdBE",
  "key35": "3ESfgg4bP57YBtyiTbgNfYCcaRLvjXrs2zqM5pUagrMQbfUi9KgpWdAyFjwDF6vSP926aujR5tHuzPbmcJHJorim",
  "key36": "5F1EcdChkk7gWeH8EFnueopzoDArNhNZJs5d4y1cbyuFKQZw2icmmfkHYhT5F6TQss2xtXn7QoU5sMpjLmm6xAz5",
  "key37": "2zUmuje546UpfMmPLyxsJ2s9AV3KNjGQCUBrgqHguKpgWAw7qnMWd9dfpHZfzKzX8itynfcC82z9pXqhAH7fzEnu",
  "key38": "3EhdWsiG9pSSffYcTdj6rEz2D9GrwyY3Lout4ZcLTCG12C27UScUocBG8LDL2wwmoQvBayTetgHCxngyqctkz42T",
  "key39": "2M9M6YKMop1rqcPNrRShAnpovcbTcsUmdyntx2FtjNBP8oZyTkH11zp12gV9kVe3R862T9snd1Pt7T9D9u2bRQxb",
  "key40": "281bE58gzXPwoGiYyZoKubJQdRcKWPiQchGDqDoKQjo3UznewAoDY8ubbNM8okbxY7gEcWjyw8MPvCQscVdrvnon",
  "key41": "2dg5HpixVMqAEcykgBarpEGoSPyQpUUThZUapjCofV5raeNQnSqEWtnV1kXMPCE5poKrFAjY27Du4tc44dNGbxT3",
  "key42": "PonJk8bbMNVncDaCbzx3sLbMgCVKvgqCLC4BFfTMc7X14YQCKBxbRHPJzBSkNAtYo1fFXKmiwXZ65REJiCY87pc",
  "key43": "4hJroAWJEHcAKqKMEZfz8CWK3H8X9ZuGsfVGgcekXKExm5p1MZaTHQxQFRCw6JcaCUKZ46CJY2kN9Dbx72FE4zE8",
  "key44": "uSEnfmzATC2TRBwavA8vqTQbKJ828Wf572efrwiVhcyzcB8DAHaVdBfbGE8ciFWPu1ZNdJ9o7U7aEt3ahMb3PXx",
  "key45": "571fisGjQQTBJKcPrweTUvnTiNw7hGVzYmqjRS8PqtD9rZUBY63EM1jbBFLqrDWzh2Zb5Aaya7uaaV2frLatujYy",
  "key46": "2fJ6M9xA3NXasA4bWteJF7usVqivgCm5vpxGnuvAhhx7DAyDjG1QeyyribNwUMjRpw3TXPBvwwyjDmnksX9KdHdr",
  "key47": "3Euht3bu1ZescsACuRkhXnG4xYjLabvr8KB3puzuGEwX5y1239jRBUEQh5uXaCtTtNyGt9k37EXxATPLhJGbcDjR",
  "key48": "4ZRhEkX2qodSM28xQd2it2Sk76Crb6SjFyyW5gGE12negYQSeuMeHRxeyppqg4t4EbHyjmLJ6Lizwo2GxpA9P6zY",
  "key49": "5MdT5JW9UcbvkfPvNEMiehLq9aN29nJBHfciayquwmhUxXJ87capVKLBCaZ2JeJzoZ4RHDsWQUWKhjRixFTpd7DQ"
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
