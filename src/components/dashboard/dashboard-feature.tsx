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
    "2n9WkHqkXiVWKr9dF2114idq5vK6e1nfLSajVDxJJPqngc2DyUkxJTascKePCnBuFsnFJRgZHs1siY4oZwFS3hNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LLP6TgSoszMVGAv4UBxkELg5vxL7Fc7Hne1YNswAbJwoMPhMbSv95Frki74cUEJgdrgQr8HLQSjzKaUE1w9xdTx",
  "key1": "4gHWf7wGy86P4CMcZqWDNTk9Cz86WA55vKSBJxhgZzooML8wK5C1ehJi8EJYNcfDFPVX6m5yHyFATTVgo2737Y7U",
  "key2": "22yeNagJfsXDQWdKGogQEqhapx8StWMkkWShZvM4D7zHzi5d2ibziRtBtbc8dqjUgCtPU56Z3uatknb7aRPPKvZr",
  "key3": "P3eB8ohX9n8i3z5xd9yYFJTXjqb5WmzzAKCU2t9HCjdUAkJ37ZoJ9ZYywZyVhhqaTT4yQvyux8SPTzekU8Fv5fT",
  "key4": "5EkJkWRc9pJGbCPnvHP32sGfNnPBvLekx9EZktTRHvcSbc4kQm9VLXGtepJuLem7DcLrWVeAWnHK1UL3wcLn51nZ",
  "key5": "2qVhQYy5CYszkFn8D6JcRAsNbCexWaw4pZKgrX4YLGFq1VY6idyxp6vTrbx5dBtMb6dWBC6TRWaopshKReUsEifG",
  "key6": "3UZuoetZAGKa5Nqz8EXhCu7JjHreV42D8jYknrvw8kWP7yrCfTdLBcT1e3RbTZU69SYSujt6wJYCL2tp1MEHN36Y",
  "key7": "y7tJGgrNvLBJH6YtBrd77jjDw5TFA76qJoiUrYGpfzybAfy645KnrN7yYXSizQX2W1oF7CNqkG3WHjDXGH1o5rV",
  "key8": "2ojTKTHcrd5f4axeZWiXCLHeciPJL3kPAwdX6zHWN5oPQQEQkWfDzZS8eP8xPJptNhLftTfAcu8oyiRtU5XNiPTC",
  "key9": "3UBwvvekb3zWwCcqSGSFSDbp8SQpvFLu4ZpJJ43tum634x1oww4RGn1aLpdGdUGDwj3vtBdwoNBdPigLWqs7rkvC",
  "key10": "4ibRxsWUtxnMG8zVxXXs6mCicW9jsdKRCPepkyw65Hed9wpvd9eyRTPj5AjHv38BCzmAeiDjphSC3sY1yxsNm8Q6",
  "key11": "cXXJTTZ2qRUpuSsmQZxxUZmc7PHF3YWzwvFv2hyGK7Y7C6RaNCKGxydauzTzA23kvyufdJfGqD5wUoYNyxhafPh",
  "key12": "4ZFHFG1jmSQDUVw1pdiXTegfiHSczH34rGSnqxgp7hC5nfbEBo4vv6765gXBRrYgTY1iJLfsPZKovHnnKaipJ9Ub",
  "key13": "3Tq9VttvJ1wpnMzW9d1FRvByDQW1PTTvz59HET9KxAFZtKyXz7oGYEZ5hMMPym49nzAoMjz714PVF3nr9ExpdEzY",
  "key14": "3pVopXnsVBD5t21p1HDg3pToEvZaUJ78eZFvTsnVKvm8grcHsBZ22TCpY8gB2v8vXF4hqBGdDw1gfuF315VkcQo2",
  "key15": "3tFbgWhvPT4C2kkidETn5NG7AkRy2YQ1DXoZZWLdJkveTb3ZPXrAPCK3qtw7v51UQBAfNzY8L3da2Ma5ktLEAacT",
  "key16": "GUzJMJEVxyuVJnQak4soEqFV3jnyHtXFUrMwyGQN4mMVbmQcBExLL5vep37rbbXNC5YPSYTdq9WqVbCjkDURDVQ",
  "key17": "3PdJ2KFvdxNWWCpbyPUt76dYymrzthuuEvftFz9zjGQQUzwfDDNMGtvFsaLjtnFPvucaJjpGoYPLgjnpQVNrWmrN",
  "key18": "47Zf6D6RCqzAP6b5fjobyE321jweT1EN2skJqoDPPXjYvC8bU3Zq38VCf44zbqr5N9Ax8UacNtAxpy9SN2aX2Be",
  "key19": "3Ys5TAhvz2PVF13eJjbmNT6inRsPGwVhWJ6tLunYF6EhUweuzwR6nN5NSxs4ErXKeuNsAi9SVnqYBpMp2Qwarcra",
  "key20": "51jVEWspWjv4cti5iJWT3zva2KkYsNaHkZL6AzaRyc8M8Wq5LRqSWrq2EmE1RLzBW2g2eSNUai7S4yxshvmqiE1h",
  "key21": "FbpYvNAuJeojsswrY3STHBMvHURueKumDKvmTF6hPPVFQnxuGDkuz9SrRNqi411ChAb5UaXima11S1j2LknNird",
  "key22": "36Nk9qkaRJMtzNUc9qC1WNWrLVuy7rieFtnSD6xr15MegnP8bS3eTFuyq3mLm8w3VKELhT6PteY5gf48bkPn9Afq",
  "key23": "3sJ9ZhEks3thysRSw5fo8A79utmNNZYXNYcpgJ4FVtkta7ZhcEa6shviq24Cc3GYxGNyV6HsbmVYoRz3BPuDCU9G",
  "key24": "W2EygTDdKmVFjqkng21bXMteCMY9UFm15AhRpgDWhERLwnZRdFAvRvg97QC862JS7qazYzjHKueatmYRAt75AeC",
  "key25": "35M8CVbxKrj6U3GorqccevaxoQzuLsH7rhBmEA3ig8v8SK94KbtmefX4HiKQTXCFDyvGhSfhFkPrjZxTr9xLZruW",
  "key26": "5VfHGP5RCngQGW51U8MtfmjfwBGH7KQqz3p6ZJXHgV6jMFgi9r4GbT4FEPCehMYkhcSB8gnEBHgMFnppw2zgxczE",
  "key27": "4NAt591GENgqc1gZd8L5FaBRa8B2zti7RT5LUTGrpL4yAFz8UJXETuY4S3J84qNfKySkZHPbkdk3DcFHihDs1riN",
  "key28": "65fxACTh4UCfyuxcP52Gfn8o9PKzV2y3KxnfV34Lo5k8a924Sb8CLP1TeBEHm7Q3RxnP6uhYB8CRf3zccCy215Ha",
  "key29": "DpvJoTE1BmsLfmCBmzxUgjfTdNSuUvs528wdYgDxPSnUM5GHbjDTbSriQTaaccZFLrRfM9vrpcHmQTB8SaN2MRj",
  "key30": "5fURcKEgKdCcKxGSwiPiEjLj5mRACVyPBUCwvEbfCDFM5myZBja3HmCqCqkm1Z4iLSHThKhhCHARfZmfN78hGb6s",
  "key31": "4b9vrFxyfXPBw5qriDm6Wc4iHzyEaBQYcMtgEiGSRFUugyFGB2dMnMQKC2oDvtHqfZUn2hDnZViUfb47BKF3Trke",
  "key32": "27rKVE5zHVEarN7tzEaZYBykzdUWb2DaBavQsS5G6nhd1WaeAe8Trh6d9ovLniddAKVwH2iRQPhqTnUAWkTEoPVM",
  "key33": "29md1cJcsay9rqbXUFRPKBrajGxcBqnjSCrZWBAg3kdY1zDGJTVPBZJEvTf6YLJwgcyta9X8MSAzcDgiUbCH6shT",
  "key34": "3CwVbZgQukJdJfki2wm5ZFiYbMeBAVcftzqon6TGUtNgqwfNwkYkdK65vPLGzUhxMFd1bFTHdYhk65NNT25cunzm",
  "key35": "4385rYnfKs3gwavGm1TC7xJpfRi7jmT87SbjfHBQH5o4bymwd58neoprZQhiV9GnXhknNDLtsUMvoKDpqyWg1tVm",
  "key36": "39GV2ZUwQirVRVr5mV3QmLabyqJnesQpZVe5m42s7vrzU56SVBqSYCXmeGQq3SvPxPQDENbGBzU9nqMVDJ6XoNDw",
  "key37": "3V2ggNQoUa5YCKaXjZUpCTGZLEbwA93vtTTCmpWVMq4rwv8zyW5KxhhkXwbELEwdqrR2F1sCm194PTZ62ZKwCzZB",
  "key38": "23qgEZzmX57sffvq8GE3GcEW63gEir8rSZH37fUoKb4VTrzFbQeRR6YMeB1FfSyd3xSRxe6Ye8B1J25prRo1GUoX",
  "key39": "hAcbVTTD13sGPAZo2YTZX8iAkv2PEXC7GUq81a5X7Q1wJmXcX9KH8FZ6SL5VMB8wRi9TripJN9nAVYnw6tu9WEZ",
  "key40": "2GVzHWod3GRDFt6chqU7ojzGXSa7W6ZCmmSdFk2MApTywPh3XsXfkhC7cuwLZJ19yZJhPSeiBa9eozaG55v45Dur",
  "key41": "5J9GB8vuBdqKWPFRCkvb6MgnxBytu6YEAAD15pXKmXFzGGmE59BmJC7DyTncLicmHAepopbiXRZ9bFPK3QqWz3DA",
  "key42": "PSJmJRZ86QYg2gWLezh3jipDye7MT7Gcr1BMbX7HEmcqEJC5mnuB6qutbf3bQ4i1XVzugtxTe514KgNgmdKNhkM",
  "key43": "4k1uSx59kJvGg7688JBnoqPrLDk8eL1hF5wt5W4DDe1Mj9YefR9UZC3Wr18R7s9FkFvV2wRHcnfyWq7q913hd23w",
  "key44": "64prP3o927csBKMZS66FQzsjRbF7CUAstdv9GjPbKoZ4bR4eUazxSmDRaRuyTYmq5GSqRKT8ZXSYuyw8CTSJ1vD3",
  "key45": "3frSPMXCXNzd4Qc8uVtkvi9UBCKwhMVGWqYGsiCGLPJYsqb4ReNNAYM99jTWVuPAsMMPywY8gbP3HgN7DLRe5ZnG",
  "key46": "3fDYGayHpjuBAaFWMycPMvfKgmz9ovhWEtpFWJfzEJA91rHdVQ9ZnFxbf9jepFUW1THXMVN1RXS5vrVfqZuyJHQZ"
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
