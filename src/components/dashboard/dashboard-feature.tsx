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
    "51y4sYKdCzJEAJSq5x7vrAHHtQCZAs6SHYTi26XhYErtDYx7GjwiQgX3s7a6f9EhdH3pxeoVxrvbfJhQ9jTWsQ9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43G5RNEbAzNWFJKPz7BbAF3idzn9GbZNxEGDADM9jZm52aKctjX7rDnGzLXsJUu9GqrYGf4YyRA5z7y3Z43nxqFk",
  "key1": "2KKn2g7r4XPXoLkXstV9GsxAoiwe5TLKpCAgzWQ3VuxNf26LBQvpyokGvLTWg2qS2KMZYTLr2z4JA1HZLW5Mvqyk",
  "key2": "btN2r7eYUfvS2Qd18e7DCHRXsGPUQsfBvmhq1MzY53d1vt5RpGdEkCQsu9ryvzHmTKkrpjmRkTyuhMcuwCtRNJc",
  "key3": "q4u6okArjuNQ5eS5gNbMoB2vUmf4jyrzSrEdk1WQwybt6wJMcJnooS6F5m3HqbbWtLrWwF2eubETix8qukHtDom",
  "key4": "49yghzVrku5eR6xrg9gEqXKoVcKESNK1gTtu6uQWNqNwZgLhbFmf25nJBjHfFUHhbkvGZxoHAgrxtYHiX2VFZpY2",
  "key5": "3UfJByMTzZNoC4ngxgbzbGZgQgWiTRWWnWXs9A4cquxyht2NgQF2zSXz6xFjTZmVUNNfJ6vwT7j2KZhhprmQVRsr",
  "key6": "41NHGzcsbwuHwxkUi2ipgQyLCWkeGk6eKaecoGyxTPYB3HEuzjsxo2BLRPcGi6sjALM1coSWAspvy5VYJWGHE9bb",
  "key7": "2pqnZy3F96xt6X4FwUTyxmGSjzSu33waAUuF5fvGDRk3vrmKV2VwTmgiLrg8pQP67GRHHb4r4Q92ypUz3U5GzBF7",
  "key8": "2DZuTDUw55XZrWBERT4hqXK1Q2SAVovkQzfeEAAEBcGrExfN8w11He3o78YCMGf44yKjNFfM3WGBrbVzjZEaCML8",
  "key9": "4gNHWa5Ti3yH2CQ5EbzGPpP63LauaPxr4FTmuW4kdU6Rd3DAhWqzsFd2qyWecUDGmPHHSXQwfmSSbEmsE8gt23BF",
  "key10": "3K4owdNFPr1tVaBwd5UAk9fywVQ4SNUWkvV9WtfhGriNkfEcwaxaf5XRXsynbGQbDvyXN3CUdV3rCMfDG3PscVC2",
  "key11": "3kq95VnNDxfXBbcaykYijXx6MzniUdpMzGvybWGZxYxqF96kD5BaLFTz1MdAypwgQmMBeBUacu8pSsc9fmjuP2pT",
  "key12": "bJ3jchbfHGhuhuuQPaCXTpLLa7tv8f1dbb8DdormvCRinUiynJuACR1p5V61eXThgqF3YdNCnJb9aXGBGEKBAKX",
  "key13": "2WCAgH8UwCJa5HZibBMLSmtLdgWPNtnskPLFjEF8ohrs4edJckCsZPppJZkZCkDdZS2s3xDFEtbafzq13VsQ8jNW",
  "key14": "51UaP6jF7hT6w886aRbJ1jpaEHtkjn6nu9GSxC9hU7XYuMD3x9wyKxvCyEPhpGrkdYfU1rjFWpAoDhzQDxFxT4xw",
  "key15": "3q4FGoyuTSZvobEMzuVtwLnWsZ1ad1YMoerfi7guU3YEnLhvKgGshWnL5Pt6t3jk1iUvFeLmHTcHar1ppXvoGTH1",
  "key16": "qzaFN2iX81gqxda7dippgE5tkhpYRnQPt6XqDDebR58wMKM2rvQxwwv76V1BYqxJFvGHLwBSsRbkYTtz5gNe4tb",
  "key17": "3tmq1uhYDxeuJgFG5qMwK9U4ucaJs8UxZ8jqpc82PeMYDQzrrURfy8vsnZKGUykvN91F4bL7GxeDDm3d9UjPYyge",
  "key18": "43e7ErojunAd4YPYJWBmsftE5oNc7vp2HiFN56Z15SupWCBxqNMmZW7AQmXvj8d1QvLdUGwMqdE2UEj699hz2qB8",
  "key19": "3f3KcK4pDstJAiLxBuwDdxVCjCS7csDBUpCbKaz4Tmiu1KUdzuP3vGpV2L9VyCELz3BtAosutBnYvSgX6ZPa3ACX",
  "key20": "29fpXCVRQPUgiC8xQwVa1tSRaUeYjc1t6QwHrS4Qme8Pc22ByS2qUqbNKziG12f9ppN7vuZZAVWo7Tdp8YSXxBaS",
  "key21": "2FZkmemicg45VVatYXS6CMPXaNELWChfYok884o3HKKDg79Jr6nxSeezNNcnhTt48sSjr5Q1SFcL85hiYwd9hG9P",
  "key22": "4unSDVk48ksjUMhjQAs4KEZQUgf7CDsfhFYfZNtbTmtxuuuwMFprVoktHuteZUeKP9pYVNZhURcMMvXsPtoAZ5nm",
  "key23": "4psHa86tdj4rGULw9cWtmfnmFCYHTexYmH28bkGMMcht5gxCMgQPNNFgKURuQeQi3YGvRFyeX5co9rv1C4D8L3QB",
  "key24": "4P27XnyLF2Fx76y6U78mC1VbcXcpARmCsDzuoGu3XTpR7eUsdHVHUyQgoGqP8Ym1iRjbUvi5nmEZ14tB55iPgHW1",
  "key25": "2MKf9LU859wkRHrxUw6k1j5dBRte6VjKzQ9TA1d9JZY3aPVuGi7zQ9gNdgxDczXmRKWWg2bZfFCWoNEP6XD6vr2F",
  "key26": "jXZRnUuAoK9tTEBw7HnsQPEgedw5N53S7nY5zMcBETTJtNyEPFAQwT3eyRGgtQvGTDqpscQDiemtgVy3opw9Jyx",
  "key27": "4aoXYGmo5MVe2Ezt8Vh54u2DmgPXd9phSGE4Rgzy7dt7X2Qcp9zVxNxfBrPnCwP5aNEwBotcLa7WZbwYkaaFrTgy",
  "key28": "3BMhAk87BwFCH2i8auxcYmu6Qz2HEqgjy62AUVVaTyHM28aXRauKfL3KCCSWUed8aydTkNGEQzunm4tS2E9opkwx",
  "key29": "2zYD6YUSN3NtuvKEKdBZViXa125u4e7v1cfjE4WSixvQZ2YY8mi1ZLSjDDyZsshivFR4UZofVha5bjT3mu9Wm3R6",
  "key30": "4AnMCz1cuJrqTGiYCZdVeomt13yoXCaBa8S4Wy6pfCMv3bMdysLSBqKD9MzpWCVKp7KsbWjqxisEnG3Nt73CEE5d",
  "key31": "4w8bhTpnJ3s3GGtw9WgADSVjUBpcWDNGcRnwSKvAh3mbJqVPZpBBdcn7xvMfiTzToCrteynvxy26jaMfRU8asUnW",
  "key32": "3pgGWLcEFPbupsFMXSPi28hfem3JM5exTNuWa7tGnw7BxpaMcv6Apc2bS19fwHjM1WXc1N8cC4a3yMZV67KFFtGa",
  "key33": "4bFeiDU4s4XwuafACo5jp5suU2FeehnrYaQ56mJcCqTW49oche4qQ48qT9CGeNvA9xpAfSBf7BvV75wsG88Kh3EF",
  "key34": "23FfLAmQUGSsmhNZaaFQG6uXG67QgprxznxQCSFhvsKVpmS1xrhxJbawMpkjbHd4ZMQrk9gRsY1mhLX5G8igqgjR",
  "key35": "26hF6fEPJaMJ4Lm7xXTfrmjaoDEetMEqUXNDcqRM4Kf1uiXFPGiXYkLWfZDiAcL2PYffJX4KEv2T9y8vuxnSSboZ",
  "key36": "2ECJd1PJ9Uh9cG4q1ftJG3HVA1v44m5hTfAZWDXPETkYRwxmrFrDp3kPcfvXUJ1qRJo8xSFFY3SAPunSLvSN7fJ2",
  "key37": "2VWGzixoeWEcsbnewfcFAt75FdCt61RN6sPqtHhFQwiL4sTxv3YkFmXKD5bXQHegBLXdzWjgYHLuLcivMCViV4iZ",
  "key38": "k4R7GafATZWV5T6LRtAz7tqo37tGMVrpCyMtoX6HQkHDWUxS2XEGZ2Z6484ynR7nKqBrFonJ9YnzpmmSYmkgqVH",
  "key39": "2GovxVo4k66yMo7HM45wzeuoLJ2Cd7jrRjPQ6VYQMYmMCARnZ8oE1h3V8i2NmvHtRisTwYrbpvEwDJ9eGwi89bVx",
  "key40": "cWdZsoQEVbb9b7uw5UzPBToYcjGzo4KgdCcGqEcTvU1b55rNznJ8vJ3sAM6K3yMRHyvjMFFEXWWcjmHRkayacPr",
  "key41": "4c65sVU7rcX3v6GkaMaNLi57p8u35ix4LQ3ULdQedA1Nu2CwNZRsSJNX5d179AN5M3Lg1nHiWhomdYP37wLun7rU",
  "key42": "2x42sLyWDUMKm3VeVzi7q9bZB7wuHL8MpmuYTBiiNc9k7YA4vsWfGyAGhGtMaKhZBjM7XXzUhaJ1Bcuzb6Q7JW3B"
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
