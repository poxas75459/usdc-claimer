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
    "4hMnXkcYEekWoSwj57d1tZ6QaUQ4JYW7yLtSNP85ng3a9u714FmYgE5FDjbDitrz3o4ixpJtTnRrDbTQ6Uj1bZYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F3TWRHfatTcPy7rpQMBFsqwWC3RiG8BdeaXddN8tEiEcKKwYfmrKgYSzAzURHDhPGtGU2rmL5hbY8HuFAmQ64hu",
  "key1": "4QYaRHGgufP3oKuw2fwbUHXcz5vCCsVTgaEYzJjk1kV8sWSwUZwaRHoPA4LX4Xhr1v8v946NrQqU8i4dXRd3Jvhq",
  "key2": "5Pk4QGS6KL2v8qoJv2GTN7uUogo2ekyiW4qgYH8ZabspLdJ8omterjZYAJjDG9749raMyg4cGhgXHbmKiubGzypG",
  "key3": "5LMGi36B8bPeTCQiahyeTFUJsomeu24sRjb41DpVcpCSXPxwkcLQgtFW2yvvktrpidfwkZ2rsaurHP7yKX6q8ceQ",
  "key4": "2DWdg32JFdeQbM9q2hXEZVL3M6sFBiRPj1vsRWy6ZipUnp6X4y2a7RYJHFJ9xxTG1Um8qn8R49369MKToag7Derh",
  "key5": "66k7HT9qaP2uAvMYTZZkQ3KjanMwwfvVizk6nQfoLMX5RnecX1gZyQPEbcPd4KcwyihVR7zTGghSwYQYFiKYHW8j",
  "key6": "5RvnVFC8ZtqYid9cfHrkZxhN2ciYdiwzJgrJNUwFUbnyMzWiBHMRPvUdjY3pEmrkd67sxXyhQx9pBNJvazRDiHP1",
  "key7": "3GdJZV8ypDJdWBfHSsDLboS2AGhkRz356bMBqZAXX7Krm8eUJaVB8NpjKeJ27vRRFZkjSqJgm9FagSkJgQY1edBK",
  "key8": "3df8jiiNdVgs1sw4ip7xS8wf2zBU2uDXXvfgBkK3c1VomUeCsPSz1Xas5hn2okBeoHdACcEAh9asedfd9WRtrRRY",
  "key9": "5Jvgt5SWYPvh9h8ExwRqK99nvbooQjRW59TtdWtUcXa1rRcuMRohFXj4AEjNmM3LW3ii89BfkQiGH4UC6uz2KpiY",
  "key10": "5HHEmZ9atfzmk2iBtYzsFRhauRUthtipYkgmESxkE96CcCqyRuzgLviMD5aA3xfrzCem3MTMAdVhjtMYtSvsMLGS",
  "key11": "oTWYnn2wRqpdoKHK81iXf5dzo79J3WB4Ep7M7BMmqeXB4AbxWoQyWAkH7TJWNYHCGWLtFc6dXB7UxnbKfXjWtGh",
  "key12": "2bQq1grBcc2h5deiasHLr7WrVHKk96JJ5BSJJxpPt8MFyx9yjzvTTvbqQtGBGZ5HBAQionfWBuToH75bgoPRANve",
  "key13": "3tEYizBkaMRE4fL3G3RQpbF5SFaZvCQWmtpQNyWdAB4uys2Ztap8kfkvTL6wTPigkY3YkFBWP8baHWTUmtLKAZrV",
  "key14": "3Ber8y6QSDAzFBVUD1Weqok8k1ajcCe4cCpbUa5uH72ZwMduXZvKVNTHnG1ZnoP2ebkfpvKubbK6tV6YVx2C5iWK",
  "key15": "4GpSJXoq9zgf78aNBfAwMcZLSfBqURRCCHCkTaZjnnV3f1NNmSnn4xGo7im4YGEY8CmW8if7aQgVJRDmjuSf82cz",
  "key16": "5aYqfhYdCJCdHayYHhYYh3MnDt2NuZ326VHeiPNUzFAEo5kS5mhEN3R6bwCT8yWh4qwG88XwNP3ZzNAk1XmfS6F4",
  "key17": "9A854Mn7oiF3MqM2hbRqPiXhsCuYkpUzbwvQuXThy1TFR5kLNy4EREAqsvv6zs8MMihU3WqB31KbX2VLMTHySKD",
  "key18": "39jp2bbJpGeubkt1sMt5MxRevXyvJpdbn19YdzAtB67kdP3pXTeWougYcnzgUqTRQzUR8vy2C5gvhyAuMB2o7aFE",
  "key19": "4GJz1qjC1RP19Z8aMuYXCm8JcEGYUUEFk97FPWQ2GZHyo6joAZbxg9vKV2wmarpy8Yo9u4QkoTrxdmPfVaA1mxcc",
  "key20": "4KnUbz9GBY1kXNBHuUwnaU4HH4rZ7zD4FpX4ch7iMVeoxnsiiu9iiBzvi86N2tajYAYWc6dAcDVhMkZMirnCn1Y2",
  "key21": "5U9GRk7pxUiKCrojJ9sTVjvH13T3rzHPNQVFXVEHyScwPNE8AeZX9iUnazqrQCUba1LcQYB8iZ4ToeCCVkna53Ry",
  "key22": "5Y2SYakuSG8boowt9yjt5ybV9BrPUeAPqD1hKZfkZiNe2THbmPkbcWfxVVfHLasQVrCLthyfirtoHrsCSmwGMLcQ",
  "key23": "55gyp73sN3fqaFhjBA4ztmnm1QyezNh1zMuKoEGmAXWNfWzmshtABMEkgG1RT4Zoz53GopRcELEBmk2CCHvtASvw",
  "key24": "58XLqt9ngAHAEMJXBUiffSu9kjkZxEwrpG8Djvx4r5F8XLqpJStFxXMGjRPhWbajsSW2tgP783uumR3sdriux6Xa",
  "key25": "5tuRczFbASA9JCdXVdAZiwdFJv5q1P9xfSXtHZd6LtFyapZD7SU6cjexqKfd538SAnBFengGMakgVoD4ichwnmkX",
  "key26": "59HGr3ckJfxBrAt5ifLWBQmWbXCJywisVJiZYXDTfZn3PnDsXu247tgUNpFaUikfgADbtPej6qhnRCCTcLe26Yi9",
  "key27": "34sq3CPUwx31ai6Kv43Rg4BsW9EWUDZGYrArM6iwuBWkNvaZkvYYVokUq2pAAGNSNJXPC4o8kmmDieKF27xVd12U",
  "key28": "KyfwWsa9Sq7z5dTM5oS1GTJEbwhhCZd7iK98xheWpvQ5Jj5dSmaPT1esP8Kc6oM5R2firMg96wrK4i7GV4vLhjK",
  "key29": "3KBCQNRTUB5GJxrnyJ4znbyGbRCFcxJBDV6SsZtNFQgymfBh7vEgzWxRkNWVwrEXcnmPZXD5fWyTyV4mfPz4cBYj",
  "key30": "48TokVYSu4riCR84A6sx95HupJRCZBDq6H82ePXbMPx95KjYbJwbZuySQXyFhhxQLFaSmoV4es88YbpngSwupWJk",
  "key31": "5q3XDW7HQVBhxQY3Y6NKSJcqKGw3m2EFxcwopM2Hc8AmTtcwj8atF9NFAMyXhC8rsoeJf1VWAk9S2Fn98vhY2LCu",
  "key32": "5KLBFBmRH354VUi7fkfmJVUbAPJM7fmEtSrPzU2BEcJxNmr12BcPGcddNdTRk2QiaTMiWDgkWm92G3n6gWVr8fAm",
  "key33": "49kCB91p3SW2cgH9gagzisGweAtP1UyZHADB7riWu2FFpbn9eqZ1MBNuAGAX7ZzcJKwyxrBPYrGifncPmq14tLyV",
  "key34": "4jtrnentRE1EBD4gD566MvuPpfGzgkSqemv4HVGbDvmYCasJQ67rah8fPgLyjUZ2pDimZDAuzEG9VsjBYXaLVsHD",
  "key35": "4nW3sSutW7wbRyQj9G5XrQDakZ5CZZP8GZB2VTjYHKixne5mbr74g8bjEJ2PoKqDfNhupVaCAWYBqxgwKLR9Foio",
  "key36": "XosGZnirrg8uznWDcfe9s7GxdcTwVRW32sn3p2PfyEDxNuwQt9BnaBvA4Byj2CGvDdUqhLkpXcZXi67mg7csEHW",
  "key37": "3xCbpQKtsDByqNyVfL4b2vg3WLXXNBNTC13MKpktuHbGdtqVikBjpfQSeEcTxQqnAjUwvBtka7196NMnGu7auPkX",
  "key38": "2nUjfb6yXdPLo9mWtuTDrs5TKRN9KiFqemx624F8jvDSpmifjhDuGWjX5C5CowFfnwADUMnf58rAsibarGcZYUcP",
  "key39": "2VKuqgtPsMs96HazQC9akcRhMSnV29Kah7T33V3aKmbUU13nrjo4pfiNmR8d4v2qBmS2eANtHEtwpDbe8SLpDqFU",
  "key40": "5tRtrRgAUtumXDu2bbBWYSEbNocGKrh2RPSBZpR3uuuN8MghCi3vsUiLjGL2feoWuD5Ehcc4V1nf8RnaAhDeWFYR",
  "key41": "zrDEteN8jv4r8PeFAGV73hZCRcsCNeSV5WiSoQ6mzJuFkj9XD29t1tcNLsqb8iefBadN6HH1EW8R3VrCnowh3Qx"
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
