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
    "54qvLh8thcmjZeJkdP9i853xFfVBCSsUD12c4f81pzMYE8MfGZ8bCHTTST2K3XrxehGBJQjgYPjsbJpGMGKxHFih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EutJ6CsHxnNEzhj4eeZVxptZ1XMmgs7rAJXrK4KuaSXGc17qQdJav59wBCgdDBrbWz3518jXQD9dHB5iCp6RqB1",
  "key1": "4HaH9V6sAp3qyJaDoLB9UQiwRAYUqpiKa8BmTfCNao81Tbi6QrVdKhmtj54N7ibLPTMVdGAPK8A4yM7gHVtCFogA",
  "key2": "5hHregaRGGAAYLe1wCq5ZzNyBcb8kKciVeabCsmZbCmQeLkFmEXZQjF1MTfjJ8Zg4QRThZzHbS4zDavShuK73k9v",
  "key3": "DtBFAPtwQRKjtcXDJANedh98aidjd7LwJZcAjbKTbsmG4asNTHoCVNXhmwELQVP1WU4WdLr7EcZeYxbcdNpXnDz",
  "key4": "2wuMHMkL9CgzSTNo18bubW8PThS2L1gNoykGPEw8ZFMR1xjgfD6ZCGYvAXYV2io81XVzg9bZhN2JsXhLroxb5XrM",
  "key5": "59NFx8o1ujXSZ9Vq9wkQGKbBpeLaAjv8ePyxk5NjYdFNjid2DC1NhZxWkoSFBiAoPnHSv8abUNdxqc3N6ptiPpa5",
  "key6": "2Zm45jVbEmykAHNiaxRRtcUKrK2uwakyfZUNNY75B7BTcgdv87at9r7TVTMnKNuDPiepXT7HzNWwJw6NEzUA48ke",
  "key7": "2u4diBrNtiMrdAcpS6KhiB6BiixpJDqfzcAMeLdkJkNWUFKUBFvpcZFqYAjgfSntYGGybG4CMR2FAMmPK4gXouBp",
  "key8": "3vjosce66eoTLaDq9HwZxsi96wP94x9JPBmEjsPFDLnNEDE5ygSx4ihdL6gs7hReYciqYxU4D6kkNziPaRTdmi8P",
  "key9": "5S1LEPo7P18wkxGRd7sKGRaJEr9bxfRtBEhDpfskixs3DtxA7t7zYo8Ert175nnYrXsamokzPkKaDkrVEBqRv4Xf",
  "key10": "46fr4ZfhyS9yfb6CB8wWv5jNV1UHka3hUjgrtDQjqQE1ZjxpJkh1JoUTpMAyArjfbG215yfCmboFVe42KZ5EBHBd",
  "key11": "3xWVhEZsnVdq6zEF1tef6cmxqs5ZhoYJNfoFGqxHtRZKwz985c9mumfD23S6QH7GjYj7n4jNXEWWZX1k8m9jkrHV",
  "key12": "5swS8dbtp2sUivsSSuCzsAKcRkBP4qde9Db8LGhCp7DhHEErWvrfE6AWAxoq7Ds6aW2XSXKfZfZTpXNizxXxQfxZ",
  "key13": "678Dn5sZMyeJnubnGqZy4EfKAwHWFT9q6UbyjWhNr6dRwE1otLFgzvpyebJxWps29HQ9TRkaGnevtsmdHV87VwWY",
  "key14": "5TQC7VA1enJHbnZziaNA11zMPr9wTUuTgFUFCLVcHR44TdAgE9FKhHQ1SQsCfSWbqoJzP4kAbWvmX2pHcqTkXgxy",
  "key15": "34ZQCPNVvUYAX6TfMyy6mYcSK6FT2tD2hybV8cLXE9c6beerNzxH7X3vnraS6kyqLX2U7MAfnGG3Lpxoxjs8HcQp",
  "key16": "127Av3RfANTj825VSdigJt4E5Dy6MycyxswvSvXoJA2H44KEmfFkvYDTmrjxyswkMfbM3bDRnbE6SFbDkRYHcApi",
  "key17": "5kyAcaLp7tPGt3UzHWMHet41d6p8W38fphTZ8rSDtnSM8JRLnj8xNHksvdZG34M9aCDr2uJiB5jEF29XaAn16F6B",
  "key18": "2kTdwgQQDEEk3fqNUGiAx6QEViH2Fveqowm1XUHA6491fMuo6Fj5RCv1mS8SKzhkmRiH16vfYuG6ysdFBiwxtb2x",
  "key19": "5SrFZcz8jYsCmyUqZo62ydAr16HaBNCLcXL7CqHRcDLnWvyEoNZa1dJrY3uR6mSqmSWHFEK7HxA1uJpGTNveaXjb",
  "key20": "2vmK1aGjueFVu1RsrEjciYSwyGztcNsLGNyDCuevZo2AUJ8usDE8C5vS8vwUKzQQmhMkJcjjMtFR5saftZshTeUB",
  "key21": "4WeahrcF56DjFcfkqd9qZGC1zxYTgdk1emKjShm1vL8kW4m7Jbj6fHh6TkzgFRwWBViD9ubbSRKmD193sTfYsXD5",
  "key22": "4eoCsvtLXXherHMWGBGbxmwNmgjtCm5zZEzD57FrZ1nZgi3dX1DN9UntyXFb5tcvePgsh5bAwVWsfs4qu21nWumH",
  "key23": "2vTW2qFqS1ysFuVLCqsds71QkFumFGim4PAPNZrzy6vDMMHTRNYU5wykKBEYBUnXjVbfptCk6priEuwZCm8w78je",
  "key24": "5FYjct4MUMJH17aHEhTHwMUDSNPVL5FS3T8DsNDKHeF9SVCwwN4DYoZJADbdV5Z4xZTfYW2eZNtvH3edqEoDcgKK",
  "key25": "4FJr7c24hWm9JPeQHz4x8Yt6dJuNXue76Rkx4pFt9hDUzGBEkTxUaU68FNhvdAJWfCs6kTU4BhbbmkZCepSmUtTW",
  "key26": "5ByWXbNpeAdjtUZKJqChRJTHcJkWXdqaaFC8XewjkKDwEBTHzfySuxr1CoZYZK4awPTWmqtY2Z2FgFkxwe6AWAc8",
  "key27": "5oXrEX1ECT1G6oLobYzwkmf6EjdXD6veBbE7S2bpc7Uh48VBebY8Pr5mSrfkCRNVEt8K8h5iRgjpRQtUtVBw5XMv",
  "key28": "5qYBeyQKVbkqTqN4vraxNnwcNQSvkEYKxF5ERRJt89sy7XT8LzkHhWgHyNqvMCxh8mH4BaZyEoRsYftEeviwXwmE",
  "key29": "33qDY8WwGgaJLdaJdthdhpFb4du8tnGpHRKsFnSaLBNy3Wm59ohXEmmLMbtVwJ17EmN5aNDVRWuY9Q646nmKh9W9",
  "key30": "4TFk37vQx8EpVMHxQc746bPzFJPTu8rCnib2QB3NCBA7eefFLdhmcGBi8j1SxihevKYCULQCsrQmAiRMmpTWDbgN",
  "key31": "uAvtxCVwvPww6dhrgi2tnEvvf4EsmW27fM2pA98w3bWuRkTuSGNgSfn8wokKPdg459zVrYq2CrVC4xF28Yywbab",
  "key32": "XSRUztbh987cat75VSj3AX61VkRCVf2Sqm5xA88ZAcamcy1c4UCH8uQtmPN3GT1xdcjEpfx2nwMjhBXZDtrECWC",
  "key33": "N1xegA5rpj4xd5MgNsVQRKACMzjL26dKyUKJJBGdAvQsPyacNfq1Y7skqBREk3jnTvVtwpUdv4o5M9eD8aXpXzX",
  "key34": "3CnjVFxKMgWuMkcXrC8ANtdqRzzYx5psQPyWzNsq2kKXCzLZbLLJVQMwvbKTfqjqhe8AEo6DrjyijavKNQY1cMbL",
  "key35": "tZosZCL9SjpJBkSFq5gYoGb7AMB8nETUcZvi6oqHoJzThkj4ghm7oFh3HasBevfjqany7pjQhRU5KMqbuXSkY4k",
  "key36": "3fXWJMBsWPuLELnYCVyasxHvYPej3MXxWk9zzRDqMvCPUDEKQBHDa3hLJRPx35Wf2ofZrwvoZfRGvmMR6kL5kmhW",
  "key37": "4QHdSSNM1tKQpwDeBF7b3HxakEt2bF5A4owPoP2EUvuEnJucNiFoYhrWoRCAD7qb3p3BAR3JPL2CVzb7JcUKWjty",
  "key38": "3cCFh8gT6rLH5MtCYd7T9g6no4G1yZXSzTZrgykpWNLSE2513HyH5AWf3GdZwaUnUY5ciVczRqXCDwDuPs1moX3J",
  "key39": "295bKZeGzTmPsJy3Ho5ewMNcpvTo6hpLnkEAGWyfGMVoZ2HUL9HRrW6cCoBisbfNA6f58oqg1TUtA4V3Kes6YTFo",
  "key40": "516vbUnycTVYKJhjYG9ovZ7c1rt77NgpMDKBpF4ZRdvsAmCKvt8Z14BQiuN2ex1skc2kobhUypA5Vaxs5WXsVHUj",
  "key41": "3oG4asYZmDHEpvPcvE3Q34WYVTrun2u6gm18KPnsbTgFebfU5kfHUgDhNo9EVXTnNKKTa3H3CJNzMcKz3EpRLa6k",
  "key42": "3d1cwYKtH7vamEmMtHvMFxvwLKtywVCDmV5tFpvP4Yu7fffwJdoPu1Umq6eMYZMwjDawVKqWcbiad5nYRioEqsM",
  "key43": "5G67JSvXATXriN9tUtWaHh8rMjjV6fCWS9fbxirDdEza52indF5maG71mFKqaa62B3iGBKQN6mzUtV3Sg7c3nZ5n",
  "key44": "2WdZJsGV6QNdWNrriMpkHftSs64B45kGSzzugAEvdBFcSpXuVX9AT3zjDjHBkjy2rKns9bvz2Jx9izbBPzcGNTU",
  "key45": "4Y53R2QGTQ1kzDYwBwK19sWdtkkrdwsbMHfm4T8FrYP6x38VayTkBVs9mjc7sKjzDnSJeKbox53izBgwAfMMstH4",
  "key46": "5YJXctXGFyUHEt18B84xdsV2NnkT7wcysrLVuZTcnQsSAsY6fciEkXidaVnET78AuJDUhHS8VypUVyAfZuB9XDah",
  "key47": "5BTogeu1SmmBmUfFLEDqv7MuXbsCHPWjMBinq7oZTRurtWR2cun4Tf6jjGwVkdYFaMAw2fRvj5dTFNVwrSE9N58s",
  "key48": "2AcZiVj1kmWAeXpT4RfBVERcMnptdjpLcon3YA6mbBPj4q9KHyTLbhSvbK6jAjgo2BRK6PHUAmzDuo22znkBvXSQ",
  "key49": "4AxSqE3Hc86okGaskCPTepNoMdbyGJD6QqK5hgJefvpLqArWXiid94RXx3VrjK61mnxqUyQUbsUbcuz8KkRqULhx"
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
