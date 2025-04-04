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
    "9LTsZu7EvjQ8dUnkQ2yQi75H3xEa6wZh6Vwikrin4oPGKnMpBvXLPPPSWV7axVQtqy7Dmk6THF1D2RHRn11yZkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56QsTSEHJtjLbzkYNxUF52GgxcZ5zmRdvBakfubJmJB4MNLye8ULZ3aBxUy6cmg1TX9ZEm4tDg4TQgyNfiQhkpk6",
  "key1": "67WmfneZYZP4P5q684TJSrqQWF1ZzzDjtYVtnnGhTJ8Wxmt4i4vbbiYC771gujMDN8W7U14u3rpx74gEYy6qt893",
  "key2": "5J4YLGh8NQy9hKNSCty27Ck9xrCXqW6WCvVoPezQ8YYPowatg9aGfZVCUj4dAbK1Vh9Ao24KsjyQB7x8MY4Hknru",
  "key3": "255R38TsYqmwGnPyDkWqf1cUgoBc2uVXDGfgMQd2tN87EmvTiGL1dUCC9anMbTFmCUY7mECvZ4u2b5mb4KJ4HcJ6",
  "key4": "4Z2msctZBjsxwKGjkySw74G18ySNVEAFTrkDC7vbDXtvDzuSLhxBTeSDKmVwJickFMJtd3Ww9yEBYeQHkugChY17",
  "key5": "SWhBMvYB5Nr4gLue7yHr3c44ViuVnPMSX39aiAW6k6kd29GredVc7oTRCnK7hNvRrZRDJmofNJXZE58q5XUdaPK",
  "key6": "3L9fLyHhQzCgXLMHRBsE1g4ZaRN94gShu9b2vqiVG44YGXx7jV1EeUMfkyo2TFQ7xfSQWMDN8Ws9EPAG8gvzn1DL",
  "key7": "2yDMd9nucroGrC3bGWymhRnhaAPaVVeEeikSsjo6T5rZFWwQ97NmN5wBBRECgmHUaF4L5UA8PhYEGkY31UZHFUns",
  "key8": "5H2Hi6nZgunZfUWX3Bbz7vRvxdGaez4GsgUzCC3NrtVa4hrrpaNzSg9Mia8mM9hZDcnDugZ25AuJK1SQTjM6184D",
  "key9": "2m8rQGUGsprxFmYTe8SuRgamZTLvUWBRHEr4NfCaWdszzhkKD9hFtiGqaANotSpApfDB7kszB6mhmhyAD7W6b6Xa",
  "key10": "2crcTuvywVfCPe5HFrVW9N21ggH5NKVjCPZicbyGEd4zWziyRKkxpH5927L8T5WbPx4eESdAuw6c2WEEzgPPsngS",
  "key11": "5jWugYB2oNmcKba4LnakYLSwZhaxbTq2T1myYPcXdNpAhizookkYXuiZhx7wunj4JELPLMbnkTNkq3b1jfYy8p4Q",
  "key12": "4mHQLP19Safc3nrPnYEySRbUhqGFBFsFFfWnjM6SnFVSr6GjgjvhPhrxaKcN1GJsYUfXDQ46jMSiwJjcVBh9eC1H",
  "key13": "4viC7wrUvFkACKjhfHXKifGZY6zDfmYeWzWjVu9uYzb8RXXTviHucnWy5ibLWM4ezGQzeFaqqNaYeCbux6aEuYVr",
  "key14": "Yk7Ubo76BM7V5bLh2AVZecEd71XcVBntu1XTnZ5FVfTCkhza1WcJsVPdRCrGaUiqvyS2RxqQuSRT2dK8LrTPj3w",
  "key15": "5y51CRrcdTcFJvwDUSz8xCifc9RzNe4LVmcKLv5LqSrxJRzVGRGN4r5dXbE75SzyQ4MsTwHmjWh6T9DXyx7yys97",
  "key16": "4iGSmn4SFZc8wA36gmG5R9xgxNMLegnCEXnMSBd4z3PpoFeTitqbS9Q4nUVZLPr1uzc96mnsA21Di3fxX4Yj7tUY",
  "key17": "4PVePwrFQLfZozWux4eccyEk9GYcwagSpb8db7pAUWXyLY4jXCAwNgjqEU6buBd5ZStxnqzDFWnj8Stinzmv4RpK",
  "key18": "4tkqjzMpRCUoyc8f2LyWRc65QdMzWeNULeXyMvEPqccaD93LPygpt5nFaoW8jqVowBL7ZkraRDT6Efe5ch5xkozP",
  "key19": "37AuW5YchxZ3PdZyVTUYPj5KgA9wAgzUfp69Eum654Pc9c47fYDedWajoa5icXr2gZqDe9eNa7172XrcZFBCyxMH",
  "key20": "3xT7xcQZvgfDFR3fuJh3usbqGQqExigFPjwQwjrRQ1HLapg3m13azzstEGsXW4JYUUBgYQ6myqEdMfek8yVrcM71",
  "key21": "5qQXM9wcUj6wx1n8hM8CTQHSK96ZeVskd6r4nyc2hGu2d5zszpMi3CHJq9WZWAMcD7AzxhdKLzEVTLFoFN42xjR2",
  "key22": "3ZX3mHsYKKvmYhiVrZAPHs7canLHvYNZgQNfcpJnjvKyyCrm69oMLAfZpUXCxct3FcnMqYGMdPNeFJqXVqhGaFm5",
  "key23": "3Vy3TkPcqTjR1fVcajy8sgJBLAghioiYD5s9BndJhNNhaFcUi1WNrymw33e6Qja8PPHJtoqwGz99gXBuF9hmZbSq",
  "key24": "5bNrC1izgQM3jYwt6q7LzquLn6Pch7Z7ny5fNVj42zCrqN8WqFSQLvSq7BaRFHi9DTyXgXZSBtTKAg4dd9pRmzNS",
  "key25": "E5sjkSfmwWS81Uc4Za5GZs6nyKc1t9hCsHiafBTza6ULGCCpwgpcAhVamfT9ouq1kt99qZWt2KuckgLrrFPT4q9",
  "key26": "2PXngoUuu58wbthsEZJWVATWseUnEPZjwDnfSEw1YM9zfDqjjq9pjLBAy7Z85oHyEukuG4KK4bTHyx7naTdHkG3r",
  "key27": "4Jc24NXt3TEfwEXaqxFHQFmsy3sS1qh4aBYAbGZX6CMuBBhehytMNCLLJj4EXVJDENaYLzvAeRHLkvjp2QRqzDnt",
  "key28": "34bPsprgWvyFQRTzAE3ijB7zsAVCAG2TFcSSTpHzYP1EPoKSyEBGkXQJNwWuZG9y1cFHeKC4L19cerTkK272yChb",
  "key29": "3japLRt1eZwjav4oui737d5i7bJNRG3t3U3nDmABDvtN3oWFWvTkrRH6BSyaLo6tyvBa8kf9H6Pm2Va7WVwnMsrL",
  "key30": "51Z6VVqQdC8sexm5GKPio8C7LTkqFeTcL4ewoMpEHANnx8WLxdKrpP9xfkbr45n3x1txhqqZiEwHrkCQSip2W2g",
  "key31": "2y6T739k4XgZ3RLvA8xbZy5nThhM9ZQw9Hy3GfAhEK3WtisREJCRFV7JjC7myZhaDGyoMwewrgJGCuR8Cq1cA44Z",
  "key32": "tn8pTdpxemCUc7c9P1RNUJPg7UJVgkt9WYeCm5jiQTSTJ87sYW6aSDJSsidfz8mbwZKQ3y18f6HjeRCBLZMWfZq",
  "key33": "4MeBspd2h6MbwW4Rh6vmgcfh4DJxfGsc68AdDK1U2sv5DH6iBPea9Nj9njJTQztiewzrWZNMVRkedUwRHWjkXkmS",
  "key34": "44YeeS25xc4cRtLNAUtxRVyBzr1mncMf2QZqRZMbTEPPjd43EVJEpimEKDYtu9UJgWokcCt3Wk2HRhqFBMZEDEbj",
  "key35": "2PZgtNMZCoB4uauCKcpYiUuM12PEhd7zAVEE6ozAVPhZt6FQJiATqkbJFCi86THnKWbMTi2WbFZLh21AUMLVYniB",
  "key36": "4kQGcb7Vumvp3SLzsnQvZMfhWry273k8NtgGmLD1LUXeBUPCoyYzvEBvzVuRQgSTzRdko1Y9HWGkFuBropTGDPLW",
  "key37": "rEDKnw8b4NvwBVA8Acsi952hzKEEELtkYJVRLTWqoPm8Esr7NKfWSt2gcjzbJyKxz5PHEiJZCVXxPX6yYrw9H6z",
  "key38": "5VMadahycYntVUtWMK57Z7rmo5esJt5gEhuAgpqHGhAya6Q5c6yEW8hSuXx252EYMNKK1Y9BJkMHCVVozdJyQJCr",
  "key39": "4e9iCGbRXmKeTY6HZu2sQ4aAur9MAM6CVCgFD8U4e9ZWmKmhuj7v4QGFQsmHb6irepgch5SD6vKZ8ZWmz8CKtj5V",
  "key40": "5kQAcV2xMvTGq7vBPwgDaRxoT7Wdm3KWrJhhQp2E1RpFK5r7PNii7UGDcgD9XMAz3kMCrh6PZpamaSoVU96j2uo6",
  "key41": "3Y6V9v5LfxbjP7aqW3HMRQwcdpJd8jgrQK6oT8pPLyazRRqd7bVZ2sfwpT2BMJRkmaUVXFQouG3Y7HB93ScheQhk",
  "key42": "5f3sFHnJaopr97VTacSXU5ogSzA8HBdVGA5rSPgXHBzTmwQ51vZhhKnGtMX8qav8A8WU2uLjjT1ZT4dFvfrU8chS",
  "key43": "FezQTg1Y5HdX96PVxLAdpKR4Qqg5kn4ubiMyUCtbe37jkYMBpwpRiwBk5GZYYLHHRzsyZUTUkrG4NwENJNESCck",
  "key44": "3j3hyNyqYVdm54Ejj9UWDsPfyrAELx86uHeXkJHv5FJivHXZeFRtvsCFxWbGrZvZAj7QofCWncbVqtkRMgm9sRZX",
  "key45": "3jCE2Ax93LPXjDxdeTFp8GYnaCaLj1JpgkEfMgVQp9k7fYwZNVkkdYoB3vaZTfA15kYBkkNZae7AgMvTzPfGQv6g",
  "key46": "2mvGYMVRjWie5PktrfmuMag2fVqzx1JdZ8Hx3P73m9aVUAhGKedFkWuS3NHPFva9PzmWAtnpf6fPpQrsdstA52o7",
  "key47": "2Hw1TaW4DEjo2WUjjhdHvHskbVgbgbsGTdeUQNCL6nnTNiMBm5Thsayw4cNPfaQPmHeD1AfVe1rDLfJEopmUrXu3"
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
