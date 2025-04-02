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
    "4RJnsQqVVccyft1Xd8ncpmmXAkEsBUBzpVAgAh6sSXbwd9582fQU1nC1JPzPSmt5Hz7DZDYh6rnsSZkPcpYUzKaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mqsdvrh2cNr1Gi3YjekvNXfXgHYNtriekq4aaJjfA2BzDWF1GfTiGc7LZYH4uG454PCErS88zvMYv3mmDFziwUp",
  "key1": "29ti2nawt7urgSW7j3bouDejhZ7Y6dPbFx82YWsqRMdS6RuEPNRxqQ1dzT7kqEkfUQx6ig2k171bpAQsXw4w9jbW",
  "key2": "C5U8bAMtupzq691Z5SgCUxDu3ufF9NnX7kDRS7WxSKvDRFz2B9od1PRAFvNBWkjFRofVyYhw4TrApQqFmK2YZGj",
  "key3": "HzKAV5UidCEFFqQuEtitjz23FgELHa5AsAUxgH4nsCHSFfXQKWmeEMLMUfkiYN9BA7ymGQ2E5RFhEpxrdLMM6sg",
  "key4": "3a9Xg6tDnsPAxY53kgF6saEi4QyUFcSt9ZcgBjdSXuM5FSpZkpAdiCJkCVodK9GuMaxEUaA1MpgYenUdiaHTE1eZ",
  "key5": "46r1VkBTXRPPyp8UJeiwBvLmshvRwKgSDZsLFLHUDCxVhvwqyj3sMLkP7WhREd5V8wha8ssz2zNajAm4WpW61s26",
  "key6": "3GgikNQaJjYk8ggDhpgs7gnqwUMP5jwqXJExLH55Bkz8LdwVPyzWXgbXxj3PV6QyS3oKXA6MTpwJitWxpk5DpLrC",
  "key7": "652Q9d8CUvMW82dsnkVxLhYT5viR6xo33o3aCjNy3yj2tnBTDYyaH5rXm1wftq3g1Jf7YcWABTCertWiP4zpDcaF",
  "key8": "FcRdDEsnihwShCeHErp4a81dqjVWpLGYmDMEW3Yp8AfWKcSbJvRhEUzYWbWomEVzkDPJSMNd6aY6R5Tx1ZCCqTe",
  "key9": "4v5iXQx6b7XBgGLepQgVzUNZiRSB8zoiDgs1f2CmZE6h5Kq3wGkGYBao8iKa1AL5xhCY9wCd65UAnnFhBSmWNMCC",
  "key10": "4r3N8RXrvkhQEzRUPim8wVSGrJXYbkJixypjjDgYacFRdiAWDdm6dRfQ2TsLut8eJbuBQMEKxs2gA7SDh8ATsUS3",
  "key11": "3NvHqsYoEYNe9zHeU4xPZkJdRFL5b8vCaVZoenrUGzD9yskpz8z4KHqfE5zXpG5pGRojwiX7c4i18SSJH7tCf7py",
  "key12": "5p5zSjvpuEmXK65bz4Pq3NAdUwjc8ksBwFj2fbokUDQ76NYMs271xAdFj3kKJ2C8Qg5fGidenTa3vr1dvRJ97js6",
  "key13": "3NYVRtXeDXp8yLVR7MwmfvC5VeJbi78ajTKKNSYc4XEFhQAz4tgbtfwf4a2sLsjz8v43x5agd65dzt4etSULfTqz",
  "key14": "2WCQyWYJ6ttgQTk3zd5fMQjk1huW72K5HicAhgd1Bk9Joh9DfpQceCGNoKqvN1p121Shpu8rR2fN6qRCjigCxoGE",
  "key15": "uUhg9S4xfuxGwJuf5WZWyxKbHwpJ8tHJZZ3QCVy5dVL38oPxazXdo8GqAqbMZig3zfFEPJA4baAZcXhfZHqHYfg",
  "key16": "34yU7RE1Z3fRXC1qjmdujxaLQ243sZgN51r5hR2KW58Gnr8staTP14AF4HcPw21j8CdYa3b8s6DVzhDNkzwJViER",
  "key17": "5dTMS9XhL2xrZb5VXHuim6ZG2c6ym91vuBz8HqG2vkpQ8TP5YZ9GrWG3f8Qi1Zf3U6ePwvyCvAkJ9FQYrdXZ58o6",
  "key18": "53xZ5HPwomGdDmkkqsXJ3JWwepnzFuxr9KY7SPa1MAS6962DQotpa4npF1687qnUtpbf7NozHfTw6ewgG185L3R3",
  "key19": "2HVHUrazf8Z56V3d1gkuYSAYcdq1L4fR8gbFDDHpgzynb6yzh5NLwPh3pnGQDPURsNMc38G2mMCZcprcSr6c2YHm",
  "key20": "CyTEqjET6rWxyJddwBgzLAc85U1rnQEpnVVCdE6U8uAKkv4Zqnfv2iPA6S3NarNbJWxFyqs7b4sY1aMx7xvG5xA",
  "key21": "5KdmBqjZubqNhjdDRC9vv7ei6mj3m9CM7bd74huuy8X8ZyHKBf1SFFT9dLh5Umfzi4p37pjt7eazDCAVoyy8UUwc",
  "key22": "7N1uDPM9V9igLTEkGEmhPMkxaHMVcYa4t8mmUuzc15XSECXGFWAJpvyKyLZ6jap7Bb7HphuhQGkNaBLoZnxnwuW",
  "key23": "3uEfjR9ZCTAJzz43kHit9B1jiAw3MBHsmta4EAqnHcfTK9619dS96wnbT3XK4QXmTgYSsEBXA2GK3AGM46CC1XDx",
  "key24": "hfAd1siVbbd4PSRL43HyYCi9sDpV2mSpuCANiCJ3oRN5gHcV6cxnrywkTCqG6cS8chBiSAQrvj7xXEA5vw5s7g5",
  "key25": "3AwSxhVJqKRBsWnqzh9RrpsuCquMHKWwDK43Awc4nPeaYFR368er4BXbrVNCTw6qaUz5FhmP5vqwxZvp7YJrTYMH",
  "key26": "353N4B3cMysEN6cVye7rUwuqwqRWDLWwdJfBypxwXKaYttngQZrPCwrfNz34Wn9CMFQkiLM1WjzTk2zh4PfutQK4",
  "key27": "2cXrowqwKPbyMvcyieTiJDhivioMyTsVJ95NxGkaW5jr8rWNzZrYKNKuDrNtfZmmNjkkS7fG4ZiFeGLWBpEdHdK4",
  "key28": "3JAfRW9oCBH3DmQPtMXEak7uZ9Nx77QGDF48HuG8DtRCTAfWQLuSXF4xhG9F4NENikrSQ82jxXCS1JdvRn4HU86V",
  "key29": "3xFezVbBWvgnamfnrCiF2tMSWtKJcizs5rFr6tkih6M5y4YaJ48rWvuPNpVAJ9fMJvpzocZswss3hHBcak4KADtN",
  "key30": "XkWxSGJxxQjJrxdZYTcxEqTNPsGrPLan6djjPuu4VTaDE5EwzouLXiJbrqCAUjxThEsg2ky2HXMCpEohqaM289Z",
  "key31": "4U1edT6KQ13LrT3dSB9jPK4sEeHiQWi35HmAMRgUgQ13MziwhzfCU7W4pWB9ZuBCzgyzyDVwN2Q9qFRuZz6dGP6w",
  "key32": "5GVaFHWBQPcXhPx4VVbHmsPVGchjGf7W9UnjWi2DSz3PLy4BYpyoDp14raEH2BY3su32T18mR81EEEnovbZ8jbpS",
  "key33": "3r8GwEjWKTbWVNxWCyEfMenhb88MnTjqagg48Zida5kQ3FWwNkVNkts5zoo6DL9PQjYNEARt5udPoV6NFAUDFjqj",
  "key34": "M6z1F1zTPAy2MqsaYoWTxj8xwySX47hmfczDHx4pxGy2JbMUtBduRZAEwxYPuXsgsW5J7G9Ty2RgBMomddFUztR",
  "key35": "5wXP12Z56mJpJAuWU7sRtNU13KqfcPrJexVwtu8zCTLWgs6LWCKgrX8fHs5aK34VEzhmgaerC7NmhUCYBmdSWkEJ",
  "key36": "5xP2jgwKuKVrGc7MSByc79raanULivREZjztWjrToAHC9Ej569mRe1p64JpJJ2kzboRxSqfsXvJXNua7DTHVuhsL",
  "key37": "64N2v9zqcu1HuXJULePkejaai6VghTGi7rGcTxxXxeDuVEHk7tvvHxsQ8usYwerXq4YSYVw55vv4DgHYXnisFw5b",
  "key38": "44rr6395ipGRAjYgnnye6zZC3zY1ZFmf5TwJZv6FJAxh8yL38m3iVktBUa85Ja5bUjseA8yQ8LLFnLnQoxvycsc9",
  "key39": "2ZKrCBVa9Us4fh4PZnbbBd5iVGWGNDZUaMc3A51917ysNDUriP4XqizpXXWFc4VtoZnQDkeqtLr38CqQ2X4onu4r",
  "key40": "4cbfGgVdNhR9FUiRVJ2NqQPpaESZeUuKahY4TDXwFeZLaybo4GGriKbZTdf1cfP8xvKVVSnf7i2iqXa8RcZY1Kab",
  "key41": "4ujoUpRewNdA5c7HuXkTAQd2J3fJfSYTP3HMnufn4A6w8vRVMxcuLzF8s6QUE7SwRVyNPyAaFZJ9fmxFfekQFwgA",
  "key42": "3unn6uF9Y5TKSjg3Pj4KZBKJsVJUXLP16SNMDVS5AnwbMaApfM3tcwENFGTWzLT4SiqdqQufGBEKQTTHhYj1inEV",
  "key43": "2qvhT2CZsz778fAB8QFGj51AA2WxA1AjP1xqvw7kEaYVrgJrhrgKLA4xEDdZirBfBXLrH1TJFY6c8NxsqAZ8n4KS"
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
