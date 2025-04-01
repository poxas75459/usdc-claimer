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
    "5AcEgstHiXddaVpCHAQR4THdDvbN75VhDVE5VigbXG5wReiCss9fS1hYvd4zwVTmTXvPHrgJUhGst2aHf8hcLCgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37SL445AEH5rjwNrkJfNGWxatftbvcbyscEqWP9BHTyDVLEYHuwxMYqHJPsWSF1jUM4UytPQNvtDGhumPBWDi8t9",
  "key1": "25ytqpTjXsHAVR9dw8z1YMX9A7JktjY6PdiLXeBKfudgPy1yuxqfjENfr5aTfsKLsnX4tKBxYRL6gnCCkAVjBxRW",
  "key2": "U5ABgwqpj3MvgDvKMbri5Jy6oGDzSueHXMUZNUpKkbEZUezTFk4KddbHKK4Wy975AZKoR3nr9nsfc5CR94dJRco",
  "key3": "5peYVNfdTUZUkQVR9MJHVMdbXwkURX1GrF856DtwwAiuv1mtZNuqL16xjBXV4JDVhaaXuvpWbN2q7M7caxa5NyWZ",
  "key4": "4jJMpXDrc96vhDrRR89siEchYxnqc3uVtnDmtG7kFvpgRXS3mnwJhpkfnaan3LduFvZTsRyJFHDZ34aYoVfA5ji6",
  "key5": "aRxg9AjXADSiy8yN2PWdD4F7jYJkbgVczFG19RerFxUraxEP3GLeowVXAjVSrUJRhkhhpCRTpRqZnCKCaESXDJ1",
  "key6": "4kTxRuCziD5A58Yw7xJUyfzCJss9XiSoYiwpbaGkrmQ6QrNEh95HYRFYPPm77qYUCAjotd8YpNCPrbqyzBD9UW4y",
  "key7": "5quUm7xjS13ka6YE2UkokZ1aNZf6GzAAz49kSWXncLTRmSp7huPi2X4FJFtHpWhQZuya82ze9ergnMPhcCtfrtDw",
  "key8": "2BBaKuNcS2XwHWKbFBJbRydWf7bBniqtgAQkBxdgrJSku75a5XAAAFCcGrpo4zbYz5V9pg7HVDZrcitiicNDLDvJ",
  "key9": "5ipynUZghuN7ixWJykT9UAzPiKUZczJCVRJqqtFimjkAzpF1Syr3HQswj2DLSvuoeivqLNfVcto7jkHnqahLhjE7",
  "key10": "5UgJPEhSK4qTQDWEfzx5uNFoC4zqf166qEXiTXFUCCEiHqW5BQHjYidrKSFFnifrM6tXraD2bazg7gH8FgpyxKSx",
  "key11": "hYZ1GFhCSZ6eyPqd5FgfDEs9CSfhTJQv3xTsPSs4yVBC4eUdvcAGNpRxbKKghpZXfhV2t44czWXue5Wqcz7mrCi",
  "key12": "5ojUuL33jpVAzPRfYpj6Lyq3nk9ScibYTJrdFp9zWFMFriBjjkVVfZcw7RRKN5LDN8BtZgxHGcNbBvFPkyeEyc7s",
  "key13": "4TawNCzaVDLpoi7WLbpvpTRSd7mdXfCy79EGADAtk5hW6RdGa7SkC3fXtc484UfiAZU3EHsKbey8TjAm25GTTeAD",
  "key14": "2zExb3CYHoertCHa9G7CUUGLJhtpN5392pWgFBVQYafKeJDf9vQG6tcpXB1KTtbNeWdKhVFBS8QJRSK8V3AyFqBC",
  "key15": "4ifGWre7EhJ3iEQcs3PEj1haibuy1gUpj1HXSVJqWcxR4SWiekvfHhgRgUecsTXQ9onfg23WjTLX68W8rHXtwYxU",
  "key16": "5V3tss9rcYmREUJQ17rzKanNUkDu5oetFwsCfDBcCde8SzmtpPs6hyuVNyys4Y7wAgdJ2xGsebWDA7xHbhi66WoX",
  "key17": "3qFzZhmqQxvcZiacLAFAuZvCCZ1AGTdqkrG8wtFrVc9bnhhKe41Tmhc6aSQUEo8tCVLrqnG3EkZfWtkVsydUhrVd",
  "key18": "9MXC967Se7pt2ViuKQX2owBPy4X2FSFX1V6GwQeUF1DbspAojre66fjsWcsVZkJNixrSMALHSdpzw7xDKg7GRgG",
  "key19": "2Tfsm8kJQoAxcZm9QqYjZcaeyNmf57pGyG4KfXPcb69UtSeh6cuPcMWzgoX9wziRZUCW3grJDzuZcRUqiQ39Sh5o",
  "key20": "zpSSwrnv2P6UQc71boQt4cGpRAMhu74DSoFLkg9JvYedELhisHyTgkRadmSX1W38YYxpBMjmMYf2gecCFSis9ge",
  "key21": "gFpbSLmF1xqKRsRVPcz9ik11rTQRHPe1nconKW6ffngdqLQw4W91dn9rCJd797yX4NSkG4Q8f78XQAsGkesVXQw",
  "key22": "bSiAPS3kCBSTiqgaUq2ZWgewbRWLiNUas1uj7HxiFwMYokuu1EK5aAxo5JBTkAuYmYEux6UhHP2Dg22vVq9Y2DJ",
  "key23": "3i9ZENbjYmBgDX4RAcSeVrBDNn1NNwg9uMqAaPGszPiwdCuTRkEswiZj3pRBPBiWBJdaQJQ8weLshYyJh5AQdiqD",
  "key24": "2uwnJbxEfQxgNyXGi62Lqusa1YWJb5E9bVwvfqFfN12tYLUFCP8L9Yuqsb4J4H96G8sUHcdutUbEFbkkg1eCrNQF",
  "key25": "2DpvKmWpipXwZbVTcG94Fji4j6hXiWA8WkjprKVcqN7vJ4caGBpi8iN9rXRkqYtjrwqdmAFfrANnoa5QC3RwcMW4",
  "key26": "2yxX7dvYMAhCfhjYwAn15MrvCf1ECrpT1con5K1jcBYxXAf7eiRZaYas1Fvd5M743d6vxQX44excXrZkBwrAJbAT",
  "key27": "DvSh9uHcoQtGCZdtWPpGaiurtxAYXM3dt3ax2EdMeAZdaXbCTmQvpMf7zeA9AuZgiacSUopwZPdziXLtUkwZmpZ",
  "key28": "3jpP2kBPfxvgWBbf8mtULEV8a4yzYwHTcZuD78TPsGiEnZAz8euqbLgKgrJvq1n74XbdpWDDbZ2AsYT1SKGb6iJ2",
  "key29": "4sXyuwKyTf1gN7q5tNvFvm2rX5LKDecUWjB3geXEK4512j4DX79DcE9T7K62fqQfpEWzUM3g5bScdR3RBupC6Hmk",
  "key30": "28eJMcUHHHUu6N1NAiCF88Jj9uDmjHipfrYsrUjgRWBN1K3tBsJw5gXZfhbfwvStwVtN41vaUgjijkyDfnFg5xGH",
  "key31": "4CU9zKFnSGFTcLs8xKdQwYWc6GXxkf2TCeEY2d19T4YeSbYCMZpo8QFWkhKB3XxYNVfYctzYu6pq4rd3ht3CFBQz",
  "key32": "5KL2wHTH1Mf8t8XopfxpTPEa6gnFy3uiofmYpffW8hgfaWkxXCoUK9hvfZsmzDVCox61ATFuooVCXFerjemAHt9G",
  "key33": "4ycQQvaXynRKNzWEPvz7N5wBk5DeHJT1y7XRp41KBW4tsTe9AtyrAbrhgJaScaiGuq7x45FyPt9EpviFvCd1C4G",
  "key34": "44gzAHnNA2g265YugzJrFAa2XND8c3rqWSNtx1u7tiACVVumCVgoZTFfQ38uULDkccjrFhG9owbAcg1nNG2d2Yh1",
  "key35": "2yAvFxH7qps82dWBrKtzvT4c6BqW5K4nNNYt8MzzZxiJAA1Rxx5r4yfVrWzKYkK1fkm7zeaMxfAj2obS7eX254ke",
  "key36": "5gx17viLimYP977EyRRqUt3YZNGB2MyxmdizLw6ANiEHQofcwf1tvmdrPfnLssBWETdALbDFthMAnkwXw6vooKTK",
  "key37": "46YLERGa39kSDt59vEN6FueTgDtUaXopdKjsqEKBjCACt55qy7uM18MmHdym6rwURcMe37cvhu25Jff5yHoR7SBx",
  "key38": "gqmyeL3R2ajfDAC9nCWvvJGjo6jxNvtyQTY4zwUGfUq7e5eCTHKaS4ZDt2CrFMMRscXmrheKuGeew4xqj5XZxGa",
  "key39": "SQR9m3UGwyZrsBcx3Toh874RRTTtZsQ5vzFdZYRWa8g4VWhyjQTNCPstNMRh48mnDyZyKUUUCp588dHNtsN1RDH",
  "key40": "5v83V1xTBJnm3DKr5Me1BNU5QQTwLh9SCz7jBE5YHMVMtmpciNejGndP2rUbHhHpR2yxuXgAGGkK1uBw8WrkWZLG",
  "key41": "226nzVUHQ9pNWkyrXreP1z7buZpo8uK2umkvJUoU7msMvGseCudCR7rp8nh66tBdvM8A8FzSgBpMGic3FjEJKp3G",
  "key42": "3vdWFk6KuFjqKG8MNwpPPzTz7HcrTBztYAkUq5u4ta6m8q1TFSTxamJ27UsqdhgkiF9LsZgxm61N1CRcBCTK9udj",
  "key43": "38YbvzJmmfwvyyfEi5gW9ZHQjW5MCbRHNbtWLp1LXm9tongdXbVCqz8W8hBGrKzMjFH5EY5mGfNnTqZYVXTC5Lzw"
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
