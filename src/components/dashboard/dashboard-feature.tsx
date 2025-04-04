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
    "3s9EUZGYy3FLk4ZJbNYMigi8MhMA2Mi6z1vTfw6GWNURt1TcZtJ2NVKEu7xExbhueQBNNQAbkw7nhEG8ehLG1puK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rKGRGbkHzi5kit6vJuGDh6NHjQP31cdP7S14DeDE9tBDZHzqJHJjYC8qhBQaeJCJLyJtKc5FFpfoxXUAmaDgmfj",
  "key1": "3U9gd3tArM9Z9ka7RnD1Qs2abS7CSEwaLrzJffw5Ad9hWep39p7QvQexdtsu7BXXU4nrw3EhZmjZMBJT4UB3iagU",
  "key2": "Ac1SwWFvrMMJ7KEKjcKWbg3NTuQsc4DNPxiNxHsfssLN1YUJe4s3rJNeAvVDsk2GVs66Qwq1zft93bCStQgWpd5",
  "key3": "3ypdZNA74UPnM7uqnwuRA5ACTHpYfsg8U6g9Nc8Fv3Rr4setSM7KzuUDnGxW86qju6dUTFEdn1Ym8ezYTdwEbAgr",
  "key4": "254ByvNkfEW8XgAX1GAriJXhVVGvT7w3yRGRPmmLEaxbpjGKTeZN4xY2BqZTiRUMF3aa4i3uC3q1Mh9uCrBv9Aut",
  "key5": "3NYw7aSkPGtcqbSgXaD31m6TXzVVEDyx7v582VuNuFUAfhRkJqvVCTPo75Rk9D3q46o6XkLNqt7iAZxS4ni8oqzW",
  "key6": "4izwXt4hFoQ1DZJMS4rq8qS3Svs333MtNLKR8UZXiUEUfE2msdbyZXw3REkgU3ae6yVSDKpozcrvsBANvuzghuwH",
  "key7": "Wmab7uMGd41hnpdMDKXnhjZznGWd2bN3AjzQmDFG44UURDrnZ6QwxuF6SfGzzXe4oTHUcnsXWDVCfWiDsEUoWd9",
  "key8": "4KkbxUvYhK1qfyC943B49zcyYNXEwpjMpYddRKaHFWW2Hvndv89g5XhyUfxVTji7YBu53eM7fejKXWKJZTVUhWBy",
  "key9": "48r4GtX1vzGsQPf1p6xP437QvaQ4BZgtBtrf325ZzVhcXUrkfARuWtcvSbouNKQc63MRF4GUPoKkFZ2ypsK6YTM7",
  "key10": "4WmFxtU8kgERf1jkLzLsQ86sTvnsGzi2gyKbnVcEZThk1hXxvTDynMe3Dh4ENWRdqBpxtVFt4eicXVPZ2XvBMEbw",
  "key11": "3crj6NmmoBpACDX5dQfv9fmxCJA1gRSyLd25YSNbZPByw84aydEm2WmG2GthEg6fPzsqzzRupmkhoYwY6Jk8TDsD",
  "key12": "64cPRs97BEuwW4Zomh96hnvreVHzPiCwLwXSdLi4nseuTsSgia7ftmtnYaXi9e1aLb51D2F6Tbdc9xQxRqjTaYg4",
  "key13": "3tcoXHB8M546m5C4TAzEwohtCmLarvXsemj5dkiTFdX68Gtv6yCPunGRQECBZ6pc5jWUnG1wC7Uw5mZWfJtid3UA",
  "key14": "22rWTHAvKD9uhaiQPsdZfutmVxjetiEme7UMWvTSud9UPSWw2hPBuRZKBoYMoXx3vWVTChE2cfapmZz1JMWXL2a5",
  "key15": "61MGwzwZA6kQXxSk6PMnJ3P9DwDLZQ3UGhQn4esjgEjBR6wx89KcEqLvgM4eGcvcUkbSrDgJgt2nJCKHeszBTEsj",
  "key16": "4u6m1iWYgUkHPQNbS7y25Amt9Rew1kVXCHKAyHraDg9cBtLJo1PaZ3xB5jeWAEYw7hnXDj9LKKomtxQbFbPWeAfJ",
  "key17": "3zkfB8eHNhzmKouG5m3NUkCsahKyg7bdi8qyUEjs2z5uW1HdwyxX4Gco4Jf9Lhk6n5MH23puKjkMWQr1DSM57v4U",
  "key18": "4U88JcrdHs1dyudkqdm7W31xWAu1DVVXopq2r29RXbVQSn9vsDeXv3tdkxuMZS8UnaorHt2nJ4iwRUE4XHjBdeZP",
  "key19": "GobS2oaNDdFSRbtRexmjjQrKHJV3MSpBBLHeMfeYFpzqwAJiX36YNxfwKmw9121NuWkdHLWWQmQtLz6KVwXnJfh",
  "key20": "2MT89AobgPXWgQS5EEA33WGJwVvBna8zfD5zsY2A115C15evomnGCcQUHFaWWEs44pGhK4EhbuxVXTgNeDmoTNNH",
  "key21": "4tJDfGScGEtsrFzyFnF3e5bCYiSCVoFJxuFQSETsFSuEw4z1mtcvfKrTRepZJgPEAZqLEyM4xB5TT4d8Xx9bt9x4",
  "key22": "5zfn7gD46r8U6YwmWjgGzYoBp3eXsePM2tpvqbia8gWVF1vPEMbw7BgcTgTBwuCWLsR2ngLYhALS2yQgH14b9ogy",
  "key23": "35Xrv3iVzYPPCobH5jbvo5vdDidxa2tg8UqVD624iHuUyPcL1aBUoDWZ274NmEu5QtddMiE3JrXeZx8DvewNWzYw",
  "key24": "ng8Ze5ARoFZ6N29P8BnWj2LJSs14szHbuz32sJiAPUdW5Zrx7qn446r4tgNoDwHka5MpifC8aNWcKtKdMn2zBDo",
  "key25": "khv7Qoso5oUtTWnrrWk2q9iGyKuXSv5Zck7GNTAHEmAp2WqSbRpSMvifGGgKejVLR5jdLG5AU2beBERFnNaEsd8",
  "key26": "4HbqubqZejBPX8KaKRnqhwdQ8BtZ9Vs1JZV5qbiW2HdaSGLxugKdAs7ZF7iJdwC3txam22JBhGC2agy2BR7FV3yh",
  "key27": "5L1LRSpbhs4nPotszdBwWb3NtwrjScPu5fvbSFBJq7ouPKc4qFGnpiJBfc92yBhGCw3V4XqUvpdd4xvp3nVjghoN",
  "key28": "4SetE2mt54SBZ1wnUdHnWpzAdbsXeoyuCNd1AVBT6DaXusLE7wCCeasUsNrVrsWjB2mvpcxFqGZdqpykNvJPruy4",
  "key29": "2NYZV11TzJYh8vkPkp7ZVi1rd6iaC6fvGXLgwPhTfaFtSAFeoRozeTnsVC1kPMQe6s4SYbWt1DpznbNskvf32Vob",
  "key30": "4k1bZKSKbSzpUcy84nvi2HqJ8Ly5TDvCU2P26XFcrRYXLQ44UedJBRvRv8zFatdWd91zcF2D1YQJ1Bax4W12SiLN",
  "key31": "3wDKhfrb9Ahh3QT3RZsbrLmua5EJsMbnwEBWqeriKkrCCmKaY2bun6YCxDq46JPVAD7GJzJ8JD1AM8nwszmY7m1d",
  "key32": "2CmTJEHYk623VdGiyYWBV8HR1fLr4gA4qCqarAgPWo5m4gQ2bqP4VunDqfwnJnacYijqchuy8BdcBdruy5Dk9kAz",
  "key33": "5VuuQZT7r2hcik2t3TQ2xVX9MQrZwgp2gc2V9MgbtyJUiLTmMBdojSnwph7x9MJ9JPxaCvQPYgm1Kq5UdX9i4MQF",
  "key34": "4Z2Acg6vwHDGhAy1pCzxiqSwcBwPMmnq13zwSnHZbLEPktvQyCeoVRekgC5RWtESAjWwWcS1AjFDwV18KwSugUuD",
  "key35": "5GhYyhEBTAFHxpJv1Luy5E8Ltsy5iFjcBFwrweESkgs7J188xqmVdMgrxD5FccxwZziqyuvjVFvNmzHhPEd6kCL7"
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
