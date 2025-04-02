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
    "2S6Ao2TinhoAu3667SxqgQMuqvijHsN1nCmqGxDC3YEoxekJkEVZgVapcoofkx1B4rwusSVi5TfyU5HDguYUiv1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x16A4yMiwULj5fyNTf2d35u1XUrjABG3Ljbz2UWcGATqZaueqxchUzyKK7HMH1MyWZJF7Ki7xVxfeuZUMGgW1MZ",
  "key1": "VUAWu82PVh84Wts7YGuDEE7EZWKWzwgWTiwRbEJCrqcbDhTUi18pypxqpBQ7RGwWqr3g1cywc7LT5Krw2D64CSR",
  "key2": "2a7esJUx86VjSMwtvJuyz1M825bHNQZpYvtkbgkRh3KH2zZYCkgbssegm4ukeBgQoKUPw37Fx7TGYBXv1Kc6WLaP",
  "key3": "5krP1tTyCgK1tiB5F6YeC6sStVFkoPAjnYJmGPd1Y8pkwRTxyJPH6YBoh7YsU1qDEDmVdhiZwAJc6iZniGQWeZr4",
  "key4": "26qqNu7eKi95PAFhqLdkKcPQpTpSGxsq27B5oJmFECrKSY2wsss54nTWAdYdeUjqkaTsjiEeeBaNxaQofRVtrC8Q",
  "key5": "4svHFRdyrWVJL8fVYq1fQmoXhgNdhV2qhSDKGayGUE89ErqMtVBfHsnJwgk6ydjoo32ckhzBgyJ1FwxvtQvauHJm",
  "key6": "E7rJB37VjFZ6BMbtZ1renDUK2x1nptgf6KimAvw5kAmdrYQiuRohMQmwgPYR3e47pd8z79CupVqKozVPR1e4LxS",
  "key7": "39aZpfUcMVHBJLetoy8PyWKFhnSqxwrceAGzk5V4mP2wvipFsLkQjC8uBDLtpyBvyXJstUUeYEWqUWNJNWitEZxW",
  "key8": "2dwAct4X3p9gYhoS7QZUwkoteUjorc1hH5WeV9wv129y2QxQHa2Q9LiuHZWgnGMF2q6RNKufc6nypRKtTB43Psk8",
  "key9": "3dJhyB8djLDBsTEKQqNkX4QaEXtyUDbX7643fRURLHJDH44BJ4Xa7pdV7Mn7xQTZSkZ8jkwZFB6Gp61Bzo91sEDC",
  "key10": "4hY43k2ZFPLhebH8ydfjhjNpzziXozFFv7yBZHjDhaTXZs2DgRKawM9NwDTA5PD1b4tx1ZzBZKn26ffs6G7Hj3Me",
  "key11": "3cWh3ytAbTcLmeYBkMVMSqmhZDA3mYhrG6voJTdbem6FJfppph3krS1sEaTGTB28UmQTTAMibTNZnfmnKYgCGZCZ",
  "key12": "2WepdoD2QTzHif1W3cgf24EyUffcWrKkwac36ViVzEyVYimUhnoRCHA6up4Ktn73k4QUMRu9YPykLFfXVWWDQnKt",
  "key13": "5WWnkcETZmn9CthGCLBSMzPGqroPYiHL3G3PoADBHmssrgusjfBGnToFmop4gS3Fs4XVZtE1RVSTajdVVw5RNpFv",
  "key14": "5UJ3FRmhccr68KNSAYyfqXAYDtNz7up1braqqfwqupUwwbsvujAnokV4RMFXodzqgn28cZvKoubnGWtLi66aMANd",
  "key15": "utpceb2Z5ss37CGaLF59wukxLszbZqowEYMQAnuYEdhhXuDbbgkw7wTgeUWf9WV7SPzZWeoGELpEq9p6qnqmhEm",
  "key16": "34BVuTXzvmTmmNr4ELA6SDnxGqawHpt8ba83m5rkSuXAnjpqocFytkgXBzBUcs17cES3LzsV8mMXRhmSvKHU8beg",
  "key17": "4ZPxt62R9geJR4ULDN4eWVZRH4fxwKHDoZaVAr5UdhXNKC6C2ZpUuCp96VdJ1soAAvWzWwpQEjSWEweEXGUcrmhm",
  "key18": "5HAtDhTKLczv99tYh8jGpFJcUSDRvA4FcpgYrXvQ7ad8zSgGU7ZWvkbQTqfLcHEx5WCrmFdw4fUdytYyQpRF2RMz",
  "key19": "ueciNiDHB9QiBunp3JcZagfV573VNpahiLwRjzGm3w8TER43XFkTky2tWzKwbuP3R7FM39PiY1KZLL2fwnJywPT",
  "key20": "2yPf3xuAm7mamjGoUd1MXevpjYakLZZohU4aWAsgrK7c8GV6XyDPwxrdkK2n1obAdSfHFcAV33LGPcG3MQpxXyLB",
  "key21": "5UbgtbEh8xFJRkc49P8rVALu64s2W9qKaJHQEzuS3HMskxn1TJJNvipkqABnzWQFCM4UWQESyf9u4jKkTAE1QV9b",
  "key22": "4g7kesSk9Gx9YPwQKp83YALwnWUjvBe13439jJDjE9dWWYwPxJcbBGHk9rJjFA1MGigfhYYpodsP2yAWiEYDfHtP",
  "key23": "vvtx4MLZXKRUVvxy6S1ymEX3RPYbMi8gqokKAWpr4ThnLkL3TFQu54WUEDMsxGPZbuZoid67ZQitQGbD2d6CFGZ",
  "key24": "4KuutpM2FyPar8EZB1eU8z1Kf6bpFB1R3KdbZkhk9Vo5FiFKkULUAJ63QEh2pLyEw8TB31NZUHhVNFm6zYeMrZom",
  "key25": "agZ1xLz3ym63Ldd2zqy8y5ozmoDr6WGdTzw4UxVrbfokCWaw8QagLYWybUmvvKZyNwZmHXJvhMCt92K6d7RPRYh",
  "key26": "UVYerKQFGxmQQJ1QY3Hjm6N1XBV2WDPKqE2XXTTBJgATxUBFnYfoxCFjJCA4xaHyEkEinpyoUEmnvjHeFrq31qu",
  "key27": "5KtDLXecTc3oWDEBuXzmGtyzqJnBkp2zgWSHGmYWGfKoDjx38kQmDFnYmSAjFXZrLf8JnmyiG383SZRwEsYMnPAD",
  "key28": "5mbHumCmeMfQisBXr864Rr6UCdWtjaBH5t5sTLywE17LS6XqWhuZjRwBe3oavrFNEqRgD1fUGCzjs8CB2W4SxHAB",
  "key29": "5LqtSrpncbAXT1wN9TA1S9gy95C6ZneQ1qt9D5CuQVXLCub7r65YLcPM7ku9MTcXdL3sSA7znUk5QXn48CpprcJe",
  "key30": "T6E9eMr5Hg7XzgPb2DKG15atedFgMk3y1M7nMaPS6uYBm6KRbLFKM9RHaepnmzp8mEt4vrCydQpvAmNNurELBow",
  "key31": "3XSjRTkaCUCypo94Te81b4eRfFHto2o6LvMQes62APKcaq41wQtWF9UUk98qs94Fdk2p2dZtPYwdwcPeHmnxeb9e",
  "key32": "4ccAG1oZZz22qGuKf6674qAkHq6BdPJ8QYTp81W88u8c7a5b3WP4mJasG6ucdCRBhhxXJtEeFjsEwvXK8jrgSoh7",
  "key33": "2G7DwrGpgVGVGp3uxqtXQtK5qpjjxWkNVqEujUeXKNjyALnq2PRBTxVRRhjkVNEsMCVrPhFr77hp6fsbg3hwJacs",
  "key34": "2jPiS5qvUEcdAW5YjUiT841Y4BPNZE6ASmiUt8gqPQTt4HqF8jZM9hQPsYGPjHGKc57L7YwMRiRpfFgUoxTpgjAo",
  "key35": "3wRLx1DanqZ2ogmVpdAnVhi3qhApGvEesDwthp2uhUW16xLsYUu2Q9AdgHTuhZRNoMKbtRG2svzySPjgjD22bSKL",
  "key36": "24NfF67JaJSRwpBan16vGuNV6gTXhUzyDfCmHR1ar5RinfKQKF5udM9ARyuV9v3hykh1h5xNwD7bTRHqmG7U3KaL",
  "key37": "6ZiSRDAunKvVYbyQHmeoUmd9MHZktC4hG61XXSe5VVjzyLL16cbvWHpt7LKt4epVFEDRNv5XwFHpDp16akWs57o",
  "key38": "5nn2WNawRpvX2PrwWYXTkRTqiyPuCVPeYUF4oqTYvszm6V5Qx5MKghHzqa5W2jATndoqEHpLnaUU7stzt2Un9PPm",
  "key39": "4FuYCX1si7fBNc5EsFr1u1jeJxFNFT44eoWxzHzoLFFybiuEyBxpDEESFybhdY4nPMVxxEPdwDr69HMPeiPMtZvC",
  "key40": "UpgcnqF9xWHtmpTi2XQcJ8hkMxkkYzNC5Zzxe3NJirpeAf1Y4AqEn5eFadp65DRoUzxAeZeDz1LFZwPJ7K9hBDQ",
  "key41": "2y3JBAuJzWQZPowk8yMEjHkaHShJ83PDjUkNViyhEAZLqNYkL13c4xCRPUBGy1QphoQt6HE16YKz4FqzjouYsJvv",
  "key42": "Ja9J5juHiamfGB9koJ8U8fMo68HoJi3n3oJiM6g5bCdrS5HFnFBdL2jbtc8fM9oSRy6ZMsHNTVGrzyACpbKfpEk",
  "key43": "2RicwnVHrfF3PANkzxvmHhDoEhN15BmLxuaRbAgaYMqPQEJyEvsNEGAEJTMsAtax9whpGYGf3vvcNPKH3LZF6P3n",
  "key44": "4warJfWa9LWUG6vzdhZmjanpojPhknEJxxEkyYiKqyv6dZUyVt5nyvkqE2FE1VU7bQWr2hf3T8un95zAdJ7gJYBL",
  "key45": "5pVGYnrbQRu4Ric3tWqN6hQEXRAmVx3xaMjSE1W1Y86ASEDwBgsmkEJk7ziRgtKeckTavrTNnpyPbjnV7UBb653r",
  "key46": "4Bg9VoGTDGbNdx29NTLCjWr7rjK4YfaBqCnt8NFAS4bqcgDM1nJcM5yeMfRemnpSFwfwKM5oEpdMcxEi7r9F52yV",
  "key47": "2uhbQNbBAEZPd1SC4xM7oqtqpas2Drvn7AFgdqEY8qDn6iUvBXUbhcXAC7PYskS4JzEEUUcrcVCRKp2F5tuPz6U3"
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
