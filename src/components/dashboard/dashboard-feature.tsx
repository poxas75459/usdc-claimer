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
    "7ah15BQFbG8JuL9dgNDEePen4PsCpYH4RGXAeB1HHBwhnVPC2JuDmgMwUawJGjWjE39bbF2yXd1VUbjRAv5c1Bc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LZ8Bmrr1dAwmPaGsssBW8Yvx1aMwGDyzRaAhbLRPfNQeJRnGCw7WyvHpR5mz2hvGR4cdv5WWZdtpCH1xYZor7Ro",
  "key1": "5UHir69jb8ojjJAMbCc6NN1J545q5fXZ5LcVgQj7iRbqw7NZCUpZ4UMyqfLwcKJhccuPzbZWSXDho5WT95dAmspf",
  "key2": "AHjF1KzSRCF12sYAZS54BRyN3rg5Ke42MuNnF6Z8WaBc3mBRgMobgzwv7HRDBbeKXffEpfAV8ppWpMxZCKJdKMb",
  "key3": "2nTfKwHoi7HHqLzeDCCedec2Wi3mbKFargEwhqZbywtMn3UKM8EbwV82TRafMK4FtCGgVDhbMMMG9A81uHH9KnTS",
  "key4": "59eVecis5GeSS1n1Uhh14Nxz9idimaLwdji2J9JNTz9y5RTw3SawhoLmvLUTDzT9o3pF9gCU27yDQE1HjLg1Rw5y",
  "key5": "4NV8eF5sGTERRTGzkixmdjtA7oeB9qXmkCwneR1HE6dSg7gjHUvt4oN1RRLo7q2Dh4zihABMqavr4kUBJ8uqoF3h",
  "key6": "4KFaFKyCdroWxaKW5CnVVZKhPcgMgpPDMZeAXwQjbdCSRqMuzeLKTc2fkkNuHo7HSWHAiBx9vQd1C4gwWazUHju4",
  "key7": "39By4NKRC2RxAppY1K7qjksqNcvpaVnoSk3WVCZqyYjEghAJay5gbf3LTDyWb4K15eDJc1S6JjAU9ST85tH1E8jz",
  "key8": "S6NBXDBrXkB5gfVT9iHKEw3GHfxF2YHfBaBwMU8QvD9EJLAqMWs2Z9WR7asUXPSnRhXsBgs9fQ2Aq7aWX12UpF6",
  "key9": "4xAsgkDemcyZngHkW7vyrjq654NNj5Bi9uZ8873CSAuqhpvMyRCgTefXyymsZDCWxsk28xZJQKyqeV7YhuikzJgg",
  "key10": "26dCnaGcBNPq8qS31BGcDypJ8tdQy3yWaT3GDYYZgNkopxWB39pHgyRJfhx7fGga6Q4PrFmE25wQSsfQQv3eWd51",
  "key11": "23J7dkcJFSwqgva1dHYa7EHPehawFkmkxAV22vvr6rL8YnoCuNghxJB9TyKXdxfXvBDVug5a3NuLfpFuc1u2KQKy",
  "key12": "2yQ4LnkXUUi3iAdeun6xm96gZVC9fBheQwpgxtzmAwbhMSL3ETbX1DXhVAnycpBsrLcZA3xuDMQ8NZEtgB8TFU5Q",
  "key13": "3iHQ7Cc8gkfEqiPTFDwNKX33JPDPcoMk7wTg7j6bkJ13QmoVaejbfdjfo4sfSwHUAoCui2kP5DAjMZxPPFJVZGZj",
  "key14": "3YU3HfV2ggcD9V67pA692sMSj3cuvz6t6meGaH2qp3B6w2AfuhPh4MKEEqYDt1Agbhf6g4P1H4U8S9wne8GPWKHc",
  "key15": "2p2uL7NHV3yjEmg7yf2Gt4TMnzi3T9Bg6Qn3FshoWDERcJGiDnDbERDkUgiCQrZg9YBdSmPVvALGfMNkUkQHKcuB",
  "key16": "4ToZKRLx5QgLdXANw2R5yqgxBvJAfYmwzX3cjpef31awBqA9bu9shrfaj2RqYUWyHW1JrRBQBVwiLLor9AusSNRv",
  "key17": "2bEFM5Bv5FLh17mFmDT5TYz4yahWfAodsJ7vdCBGjmVvdcyRoZyNtMdgcmAnZaCHUhBfSRKKqz5GTMkuQGYbWAKz",
  "key18": "ubL8bMErcqFYfUWnp3ohHYoeBwbsEnZH8h9WkTrbA1x3yn1XkXgs3DtozfSGwX2hVw9gMHTmL6WLmmwDJ8cntPR",
  "key19": "4RH4PmCucgAkVESLqioPxXS56dCTEU654KXqBUAFjcuWi8DpbFpdFtPx8veoqjpya9FP3oKXBsqNy95kkVPVZgpV",
  "key20": "uuHMFkzFLv36Jc8JxJzUEuZtn8b5KeCtTfhFokz54PToeXJ8axf5Auux9bERFfLod9vWYnw6Ccnt1wTTHrkY3Ej",
  "key21": "5rSFtTmJ9dXZPfCbpVvPKJaVt5C4822fKVPZJPAB5FsDjskgYiuVQqkbAXWZKGjZqzPwU72aGow7HiUUceDfe3A9",
  "key22": "3F4d6LFyDPAxZbKGUeN9iXxpP6g8SczxZiYhG5UiKHi2nZqLJUYKNfFj8753HuFMTBKbTTD6wnYqFYUX3WMLLHLG",
  "key23": "4B4k33YDsi3wj2YESStgGRhSTrK6ri3u6xNouhE3u2TSgMhXE15zeLscfDgbnQgDmayDwxMEYGJbbLr9ZR5HpNKZ",
  "key24": "3PgVcLF4GmepU4hPi31u8UdruVtjyKVEAbLmitmHnjeTQG7nF6XTkj9q9mXMNxb9Vnz8h3i2E9YdLqDuF2SfHKc7",
  "key25": "2SZzTH4TDKceXCqVqJ5UeBwgBMQRKWLjjoCUS5E7S7bTegycZM3W5zUewx1ASjznss2437MuscQ2ubowv5MpnQ26",
  "key26": "3hgw88Wk6NZS3wHjhpJa9Dwx1sYF2UMfG1dTRbDKFVNFY9avKz8J61E2a6xuGxbB3Vpcn32gJe6cp8m8ZFpZiqqS",
  "key27": "4qF5YRXk3WjKUWCdy9iYGabmZsErmsHgeNjoxy6YQdCg59jvTvhbmfH5mRkXfUQHRkzwJvi7QsiRNM2Z79qEs38L",
  "key28": "39LKtcDCFkayLnu3cyofCtHmNUPSJtafEtXsPM4edPDHxUjnJLbxmJFHJLeuYUxyqzGt3BJK6xYBvULtoA33M3DB",
  "key29": "417HTUgVtLfj3iWmf4v7dqTp1CvfvgFZvX6ephGedALaTz2MihHayoMcpZTJ5v6yuehLWuj1uhVLpfWAibLkiBgP",
  "key30": "45C8N5QedKAQxPCR2kSn954Ziiz9HenUTAkth3U5yHYEtqgqhFCjkQpKpmoFpmwQeL4ewMKChMJS5ghhMGz2WBKu",
  "key31": "4Mz9cW2TxPGjCjAXMjwc3yxgcwx5mT3WFd1b45hTCFBYBYcpqELAhFaHyvU2WW3uRJv4ydwd7NGTZegwe1H5gyS4",
  "key32": "4chYd12wFH9V1bN2P9Zb78y6VAJbWzyv3Jxfm9TgH12RHQ6CpyoxZMkKK82Kn3dU9MgowJjYWKJkH4yyrWXdizXt",
  "key33": "4KR7fmnBYrpoevVi25XjDX3HTyXo85EyizRs68R2JCRGc8CakxpYztnBTXQHfHehDRwWbUBL4izwzm8zxMSYuJET",
  "key34": "3pDjREJTczC2ey4BUdVGutLW8hzuQLQ8YxWr8vv38FqzTLX6G3AxFtMLiYcLJ1ybKmTRZJuAZndHQSjc8oxSU9LH",
  "key35": "519iDuErG2Tzvr5S4C7xtHnKpbS9USNp6dsUWt3o5mFUCejtn1oirV42EDVHecxPEvtMG4wLvre3k6sLbEDWypVS",
  "key36": "b5fknXF4f5oPYJGtA9xS8PXVinmrECNsPbBtYTwsP47gtG5JcMogFR6CjU9SP5pGyRUUm9ZVyvEoctnqbraF3Cd",
  "key37": "64UXKAAmhQzGCyF1v9fcWY3ZKGw9xHE9DwQN9EYygcnrp5b8DsF6Zq4ETtttvsjPXFtuXjKFq2KeNM8qsv4FRgdq",
  "key38": "2jdgLBb3nEno3QCnoZpU2hgDFS11uc98tBr7qaKxQyN7LcBGdSZHR2GLhYFfzfFSTo8sNGKdr71pJeVty17DvE2f",
  "key39": "3SLyQU5xqDqp4XoTjzbvzhoNmQnLv6BNpss2eecAZE4A7fc2YE4Rn4RnHdbWdRMdzj5aEzs6NREweywwNszo1CTH",
  "key40": "63e5CdT9vXRnYdycYRDnQEyat7UwVxyZSYaQbFM6ZMLV9t4Z1kaLd4qEJiSJRTmDguzwpso59DpbBrsRMruYZ5VT",
  "key41": "3qB4UF9sWNTmkk7Dds6SWsKMxSiCRdYd1KUYDnVYbXU5zNufhhXVkKKMgSQSh7xcUETBK7i1jcy61ZcgvKRtFC3q",
  "key42": "4pD7gFLec9uNwmgrTRWRYrWGVwmyck8HqB2nH5ehcEfAyMSV6wPH9A78QuLDH1Es6hxnMBdBjcgonXs9tLKpwGpM",
  "key43": "3Lj1WyW7tkyZRz13nhN8vhBUcsXTvxrjmDp97CdnuFiugbhV6oHTpqDe8YfAvMim5mvpYRgYadvnfWhAhmDFRtNf",
  "key44": "5RV5ctqYv3RvfTUf5mgX63Jhf9GGkZEr8hAyd5952rbcZAYbL4Cqd84ihrvb7tqUSvhjjFfLFgU3cSRZj8CMLMMf",
  "key45": "2xh9CspEjLqmmqNdwAK7yKJCdouFwrGw5WNEpAP32b5kwjYRBr2uGwknhUUasMEpazp7ECDfjqMcDbZ6m8kZLVZt",
  "key46": "3tFY6yZsJ6PT4bAqkDJ36dLq1Fjh4WVodqZdMbfn2gdERNT6evTqWwgQipNN4G1EPeKHp78Ad59wKHDvZyfWnQRU",
  "key47": "JnCmYVfr7rgx7UqKTZmPnQnq4R2rGa8qbMo3Gkz7ztQEukCqFUxg7GSmzEcEiiEgKwu88yCUjgovYUQWiU4FSmE",
  "key48": "5VNXr2fbXixJ8RycvbzaiKpe5WimyQWrYRY47B4586YpApja9pe3Z89uub4Q4ckU1r5vuZV7UBmWpqTC3Z5qPYQx",
  "key49": "5JJZ3F8gAeAfdQcPxdqTR74xuH9aa6kpDSPiTuUwh8n342EFp7wSw2hDguAuuJp557PpeVkHFweku64RXThKp3PG"
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
