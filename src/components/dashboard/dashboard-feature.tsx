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
    "424vzkQvDKCALqjJcjL9jGCE9pUnaMtmpdY58Vbb8E7dZG9Ehb5ZAhK2XnDgLdMamv5BkZCQDXKVG73qKAjMM6K8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45qe3Nr7StApaMDfReuvbPqUGC43x9PA8WSh8VQnxs3AJoqPfFh5FXZiU6w8jKsHRYr4zDCdPG9WZiKN2oTSnTEV",
  "key1": "66SGgKSSvyFHdJBdVmtpe5G7QZgHhadsp4oocGG2DxGPVrCzVGe3TkohEyZYZvGrjPczGXt221yzYhanwn1FYsJv",
  "key2": "5BWs9abSKA1GtkxAYg1Hg7fBkjTKcaggfLmPskKxQKpVWY2G9PseH4Rd2y52PwpWaV6YXWUnGAksJPn6nq2kfLz6",
  "key3": "4ifMqUCtBCmFGNG1fLQLPkX6gTPDaNYVjCV8NVgFcTLtfFuQ5m3pH6dRixkifm3Yx1tpcCL4HSAvaNSRmrm1Jp4R",
  "key4": "n8hvhYw2DqCHbYfZn2ARZZgKXbNz3YDp2k7cLEpG3PAqNjdp4BowmU5EDicnTSA5uth1GNKY2RruNWUQ8ksKGdv",
  "key5": "5Jwfx7RF8ZLvbVQZJSR73mWuJYLmRs54C4guNhXMVUhbH2voo9f99NmuivPc1tFH5RmMhAxR94EoQShsPgWysUYK",
  "key6": "5amV3JFiD4RVrE4XViMmQjM1iEWHrtwWt519Kjz8ReVeTE2QXHh3PPGvUm3DfeTFJRcXHxKDXJ5RXYtxHmG7WurJ",
  "key7": "3b9N3YcwMa8gzF8Mom3xnGF9fJKZNBuCK4z8p5nesTcqkHMZMzeGgdxWDs99VYVQXAmbCfRoHb11MkpGnKaPHZpB",
  "key8": "81RQWFkRArM92ucSci3XURTqKW8j4p4MSnqVCEfxBWqFvjSmWCgBN8M3KEkwfNmQMWiWs3Q4ojFGNvbSzim7WJV",
  "key9": "618A9wR5qM8zDoSz8tAgiPNVhHQFfwuV5ibfqbo3VR5Ck5RyJahkECSRQcrXP8keYyGnDHrYaYmgfxQn9oyFgFCK",
  "key10": "5byzVQ9fVdxkkS5mL1JXA64XNZf8gLfDF8JY5uEUM6oovkRaB9jjgGvZQ4S2kEwVHmDTfAkkQz6xiSYQ1XNoHxtV",
  "key11": "5aPADgCWzTmETWYmJMtbqEhC3TSCaZzcvAWQNF7e2agcRrZHmP8Sb7f9HH2ho6JKfVXd5izt1p2jcFG294NvxYNv",
  "key12": "5Q4prKdkE7JceipN4kY4N7Yeyu6CV3pCm9jPSvHCqUja7GXYpJVJNdvcjcd66W8qxntTjMhM4newk4a6jKTnVQgN",
  "key13": "5CPwgri9yuYjpEWuAXmt3MbzeDCS5FnASWE9VZfE3JMDEWdwPSkDxbpwBSwemRfeLCF2CohCVW7uL2Sek6quvqYj",
  "key14": "4ZjpUzmAkE6baf5LwJwP4EQMNptrCyEvBFmFuSKmaRzTAZxnrc9pTHqS17YftqkVZ2GdRXpxxDDeJtkt25dYURr9",
  "key15": "1ZbRWFc7VxP3UN5u6tkCWakz8SdzG7QVokLJ5qGHY4dK1J7ASMbooYsWRzAhjVbPdReeGMW6KaFvMVAuUZ5BsF3",
  "key16": "5roiop6NjcHCADXSqMhEyu6oZv8zUsod9R4VsW9UPgRZb379MTinXKR4dE7KDfe4zzcAxp4A5n8ujvPYKRhLEphY",
  "key17": "45gJsn1aD7w7SasRQ9nuDrHVSRVku5aMkjxqPyiVhS7vT5LrJzoJvp2P811Q4RnNAnPvqd2dqAjHw5yBywmhup8y",
  "key18": "GdthqUvUiMsWqf1ZJS6nhcS3ke2admjUdpaKg7vFa6EXmkxc14U8G7JqUcJbUL2w8MzpgtwsvA1Z9LzH76ShBTw",
  "key19": "3zSsJ11hCRicC8BxmhTZV6aUUnz3xikGxxRT4d57g3UExvKhRqUjBHW2yGCTKTLr21c6qBm897DwwzjfDPqQrL8p",
  "key20": "5oFCCu3eGZxrXFcMFaviCmgV1uTVjAoYkCrarTibtJngH4vZi56ScQY2ZbVV2oz2cm9vJBMbJX5bh9GWnYYoNDvH",
  "key21": "4F5BWSZdKMJS8kqPBBScU6dGzwN3fcBhKuwat3aH5Wg36QemJQHM2zQrGqyQpkrE7CkULK3d58fAT8KBMfUsFBi",
  "key22": "5tMaWV1fXFT4DyUsw7rYp8EVS8exW7DzyAnP88rmmUVyh4s4uKEDHLcADDL88XE8ALaVDv9kmumj2MSRG5FqGybW",
  "key23": "2z1ZZ8BSyneanTZ3mUBLHoMVfRRiCb7g76TcVXeZ3xN1dQzUbjnfxoYBo9ToPRBfDSnL9W1fgHPPZxVvBRKXidzU",
  "key24": "3YF5xYCXzkMx9aBYbtC7YR4qSQD4KEtoM2qh5YUKLQ5RxX1TuSx23sAMUUuC763uPWU4Y9tqRdyK5Hi98mwL5FyW",
  "key25": "3ZxxymTjhxazsDeTiLPX9kVTiStancuVcyRfsyLVQiPKksyrY6UAEHKnsksNTQFNgHHibNnbv7yLmguRukyE1Ro",
  "key26": "4t2bmg4vfVj5Ars9PooPcGyKgm6nkM7oBmLbsPKhJgA4uJACGJFhF5PFX6eSUk9xE1hW3NmHWBnnb6LrG18nX1Jd",
  "key27": "3XePiezVMriBokMxenPEKKiWgmvXmbvoAEcGsm9vEo5JRLaHpWy8FxR9Z7LbJNYZB2SRs29vg49woQT5YkEdHUBx",
  "key28": "2TmaUe5UuRo2TF5hRnhTByx3U22Sv7DQSePnejHqsqFDj2HTHVo7Djvs7odtvDMfWDZ5eXweNQdn1cUCaZR63SWA",
  "key29": "3fXzvdXqzpvz8iCYUWmybYhBYc96gSX1iTFvawNRg1mWb17p3xEcbvsRFqA9UUoQcnKFhGo4quHLfyPKMawFchp3",
  "key30": "sdPcixpvtqXm89xQDPdfGVcrjvAD2C5ZfrjVi92RtWuHUcmKWqdu9oALHi2x5UhaTrWAZ4FKacsJxPHxba4NvSD",
  "key31": "2MWJQMpE45wPVX9bsKKn9hFKMapBjNqtVu4kVWZXDgfowcMAA7owEpKzLTNuQFEgcMFaXVsM2pJqRZmW2tTBEed8",
  "key32": "2uY6iADAvrm4Nrb9ayanZumrfXVKKK37XhA5cGxw4WthKs79yxc4eSsHF9H5Y9g7i7Ycz6ePprZwgiG22jp2h9sT",
  "key33": "3vQ9edRnoY7weti2f2vjYGzX2WGSENsu1nJNoifXeDfw7gifcADXqHe1PwgptRVJsdxTUnPKL8vmjwAZu4j5bayZ",
  "key34": "28e5o9diKKGZ46k3hQdffE5yDoXMNbqxVTndpsrvZHbteGWdbXJp5KnnNE54A5TDaZHnPkdk1NpcNA2PTgP1KcpY",
  "key35": "3HnsRpDbUpWjkbkD1UmjLXhfwiNiPjQHH598aaBrf4o8XMNZLJ9vDmbnwnP5wzSCAozW9SGnUMooGYGQ4kqcudbi",
  "key36": "2vghz6WeM2DHwmgd9s4xjQwb12aHa1GAwq8dqHDvzUnYfQRcv5jniFi6LFDvkWUTTVm3AB8MoskM81wqNRG97hdT",
  "key37": "53qLeLf1WQ3UdKGfvznUnYB9MZuJesRxmcZYQ1mSsQUnZzNEWUc7gv49BoJZmtwL5JJScwwUbkd9j5tv2T4Sr2LN",
  "key38": "2etDeWECRua4Qzf8TC95Eqqm1TTQ74sYoBwfCsjDEm7UgyqKqLeaQXcwJvYkN3w95zZxcqKFgjWwDyK8KA4wWcgS",
  "key39": "2ZFZLvdnhxjHfEw5SGvFnF4rQ61jptzBd3gz89aZQTEsYnhGqdrmPcs6QvvrVP5JS5g7APpu6spvpecLgVuE2acQ",
  "key40": "3wGFPmuLJrMmfEQJWLptXRbdy2R8fvyYc2YYbmvJwqVejHTyfHUaeULUcabacuVK3UcTjPrqmsj8F9N2AxUv3VXq"
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
