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
    "4Y6pkZZ5qWdyHWeCV4m2f2nLzCxxZfcX3XW7zULLvZ4eRPvQPHZ7DqMEVAAuju3kCLGLgZM5njjdP1g3UsmkTcov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DNX5uGJbFgCzQb4zsUznJRGDcQqjeZYBmnCsUtu1theywrSe7UWcTygp6Z7yJ9EeDY6PhQedK8XLuSSAt48TLvt",
  "key1": "45gFCguv8JVsPeGpj4v858WU1dbznyXhhNnGoqvbAjNf1tPzAxAWsfw6VDRGLS9WFUUMuPEVhfcyMLnPYiAhfE57",
  "key2": "4LNznngeJRS5dSck47pf7m18zLcAFjyWwPC16onJfhNUzeJ79MicXL3YZfoKRLvGv2VqZWTodJjTPiX6645XYqnH",
  "key3": "4mAbqjNmQkk44XCwULFz9dtUCcocPnbGZUCJNbsyHd7e8u2tRhGdxHZDwo4KWun1JEhAVrXSr1VBVheC4p6FPosg",
  "key4": "3Q8HTRNDRvY9EhTNp2xZby9KE6NYtc9CkYnJ978MddJ32XuY3RhriAXi9E119SCfwohk22EgFr4g5a5ekeF14hb8",
  "key5": "5RH4pdVuoup2iUFaBDJqWsm5nqgNb7vFEdgPoXzYiY4gt5g5eoVsvwenJuCw9fjJQpHW2uFmDVfvGvp3kZKQfJsd",
  "key6": "3whSTmh5nyR1VX8fFUpEKrTixyZnCepLShQdEaVJV6XcfhbdWfRHNzTV5gf2Lwb8Bh9ERkQgaeBFJz7RGcvnf1ef",
  "key7": "3GJyhZnLYq72pKozUPaZ9x8oASuR2EouHuRaPyPmCUPHdKXMSvwcBiF8MUA8phP2xyJ7PYCTvZVALp4of6PV7CSV",
  "key8": "2GrXfNL5j55PrCr5SReXxqzwazud7tPToRQW4H1Dyr1RVzrJyP8bjB9vwjJPgHUgrz3yhi1MfePCSTydMBfKVUst",
  "key9": "4iZpccxkz2Qp5Dv25ECjwzQCTPUzvrhB2cPXEVdsUyU2qjSXAEnG2ymMdc1vDyur15Xg4t7EYFEkPnqECcuSZFMy",
  "key10": "Eur27T8jN8D2vmCXRiXMa9pNgX72PZusf54VjYfLRbU6DWu9JYTHD7wY7FPD4jrKzda97GWu3G12z2XUgKMJBs8",
  "key11": "2MtKFMJdy6Zn1uXa6h6onxN4JfvcQk3Wagb2rKoprtuvs66ADoc2gQRcEjb3C4Sdc7WMqoigtZ9kKtQquEkq3HXF",
  "key12": "4XME2KriM5cy3LGm2vUkGbZhAxZFfY2uK5CtYzhh6LSB6qHHgBKQrUPacvHxiLpDXbi7VPL9Rrb1YSi6RMrZr9DW",
  "key13": "5mSVqHnrh2nF4xbepdqFh9PRuvMgDTfJTb9RvtLZiamWMM2sP5cH6SxUvm59Z6ncj9vmTPz14ArjKqAqWfeSaJgy",
  "key14": "2xg5epomE1DnA4wtB3Enk6vnDpoFcpQzKf1h7vYpTkkZnRqBL7RnuomeKBLaBvYvyFkXuqNzKAsT6eDWXm7Ta6HK",
  "key15": "2v534CZbwXUkJ1Fy2wFr8iStkyFi1aN64i5xLSTiherZet9C4CyuyTS6PyeZ91SLwuwuxiVSNJa4522GPZyTouJV",
  "key16": "5ZnyQoSUgUhhQLhSutrE9HtDwa87vqzHQjvDrCvEcG2RDZyZHAj6QBDwjd4tkySVjjQvUH3pVH3PAkNer1DgdeHm",
  "key17": "Bxw1YQyWHUaq491hAHwD9JcHpNBWYXUcQnNL5rvzf2jnDy5zWan1diUaFsUQRS979e6gsvZyQH5R6dBKe4qcDGX",
  "key18": "5tp8JXJdSCvwGW5F2XHYDBcFxaNhn4m7g6GvMQ1rtK5pQxjNj8tbSt4X56M1TVfaPuu31dUbAUQAFhmdfabW2bEX",
  "key19": "4k1nt41DatjUKj6AneLqHrHYWWdzgpvenmRygXmDtG5X2Z6acHmAQM67MRvx5eC8SgPSkF4PYRndP7T52Nmfov65",
  "key20": "2Wj97hh4kus1tatMbwgn7osv8weoesGVvETFjypUbizR1VieGg2tz34gmFLdGSaR5U1oBdzedQsow6BvyYpzkrVj",
  "key21": "5ZXqn2nZA1pqHDZZg85Wjsjq1MsYTyNNpb8TXCapmm66pdUPvZ54qe94qRA4fmuwKu7um4wy7WdnxVcHjsZq3a13",
  "key22": "fbunGr37J8x52XsVuGUByJPNKp7Mv46Uhx151vG3pV43FfQEQEiUGJQvyW9cfhjPnMes8z1Y5Lx6U4nkK6jST9Y",
  "key23": "3W13uBC9bfe8MqGMs1n5ttNt4SdeLSDtWH4JJ8sSdVMFGteXh6f84icf4NPEDRQNaPckKtEH4MyNDT3ta7YBQ9LX",
  "key24": "2TGPb5Tv8PmBZtTuRnUz8AiUiTVr9pkwNWZx9taKoVhMK9RAZQwmxN5BDPbzx3G5R6iQYChQuW7QsBZUPcwVw4Tk",
  "key25": "SJ9xbj6E426WLyKgKPksqPSyvKdhjVCJxbjzsZfTc4ZrNg81Umhqj7twGPCEKC3pAiJE4r1soNjhWd2kvTzCmzp",
  "key26": "2Mb89z6861QF8znVZhtf7JF5HZxggubDWgdt4ULR772tJmwfSnPKD8m3viAx9TmxRxNndunXRn2k8TkQZ2RUphCb",
  "key27": "EcBieAxcehRXHZYdpxvEXvar8ZrUzNjuR3b9pmcBvNecLTZpHeMdzTgmAAhDsMG3HjeLseZGfSo4znGcyNcL2R9",
  "key28": "5Z7FomqjinYgZhFQnLkXqYSXxN7obSosMht5HvAyX8boDYuHjhfvC5JymgxQq4n7YCmDzeEQoRTJUkR1B6CagqSC",
  "key29": "2KLSWod4Lw3VXe9AjwCu5P8AKEe41Zr4YsYTY5ybhbW7CUyENDFLhyTemF6hFu5yW1RbLWrjwmTfRdMb8GCB6crE",
  "key30": "4kek2JtdXarkV1JarDjfMCExNGpsyAAmUWMsuG2tZB6W8mxmibWpu1yQycVb6662MFhxUNH1Uj6DxfviSPvn9sMm",
  "key31": "4j3X98LRgj2fjc6Ebw1zpsBCGMGV8pqAzM2PWv15CcXeN5f5xrjmUzjFqUDeGKqzgrYCWSXTG2NL5kAptwNYFdyj",
  "key32": "5SDZGGQEfRazKksbxGCYYeFj4He3gG9yp71rfAnj3R66RPMAbC5quPp4oDE1qjZcephpYx1BbbZcytjYr23Hxx9N",
  "key33": "4FyppUyG8YTjvuwxo9yjm2fiwtydMajAtwRk5AM74ZXc9VCJ3KMPXe7hGwRbB2irwLkjmaJjBM8XSywstDoh3Nsv",
  "key34": "adfZnGNPy7N6QZc7x7jdnSJThYURiGoGv2cUiNFdrGvhJGn2aBdy7sMwNZsLakVwVqpryLQ9bp5g9RvFx3gVhh1",
  "key35": "2PESVCu9Udx6D1ukcsPmT4bMNVAoSxmeGm1ueanLTHooLBUUKbEUfcrWn6DVntymbu4zE9znnDEKASpfgMQTKBnf",
  "key36": "5c91iMXz7QR6JdsraCfFqW5Av1H7ZMHafCg2QK4MT3uBWfrKCc6dbFLFRQnJ1YDAz6ht47CPTK4eBJPCKhEV5KqB",
  "key37": "5QE67VMfv6RTctk65tpngKhryKFrWyQzNw3hFpiPfz45seGPcXodtapnkHrF84kkT4DxVAA8db65E9KQR2AyP8h7",
  "key38": "2RLkVD4DsHRy6SYU75Lary4P2VFcuGoXXrPwTiLwXaxgvEUQ9AjqFfGquTmdChKGafGJxa2mJKaGeaFXFbvbg9cb",
  "key39": "5pvHXsgkysLXPrUQtY3yiSXzpwUAWKZRuQo2dqx1tmRqB95e1PgXY7G4fMG2SLWgPTWmJBaNUCCjcVaHreoThsyQ",
  "key40": "5jiB5AFkZaPTs8wewmj6ZSUx1222jXeCkH4oT4gK5YDntgeJ32RMNzSK8ZcD16oRo5gLZXDehtVLUpYNZv3MC1Fy",
  "key41": "4dTAYfB9nHM7F8XUSkhmC9iD673MGrHbUmEKAHfw69A5UTvn88q71iGGRGcj3Q3Ltuw3uCc12yhe764cFDk8Y2tT",
  "key42": "3wnRwRFSDPBJLQoRbseKMPaZ8Zc3sbQ7DTVmJabxSD863XRgPCuE2KrMepDvzeED8jBsnWyC4hvzkq5GYQxnXxa",
  "key43": "61XWx6wL18Yxwmo9imctt57arbBYre6sBKiyE2rgtAftuDZGgcvrumHxxi6q9d8PC15MEaqxWSC2XDHjp1qBzFZn",
  "key44": "28CTxXwrXZBiq412cemcUyKR5zJxd9pxYHqNEM2MwGHSLgLZjUgxc67QAs8fxDkEAqP5bcXWPNSGBtCMfXq3n8V1",
  "key45": "33jP5w9C7y8hv2kUTbPBfCxZZSdDEJDBZFWBTKi2SNDxkCsmaqQgdJbBQcyDtuEekhFH8X6meFdy789tRfnkDXL",
  "key46": "5HnaYsgzhSeg3K5Tku5ubUvcFXsC1b7sSAHEcXqH2aiyRjjNwGdS3VgaJMLDVC4asRsQ5mqFxqVtH8Q7Aaspd1K6"
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
