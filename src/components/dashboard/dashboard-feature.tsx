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
    "5obePKzZxcQYgSQdTzpR2shsr22iRCPqPyi5rMLbP93aGtkYW2dbL2VbdSRGp44hZ2jLrvQR9k9gtDJzLt4PWT8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pWWe84bcSFvZkg3MpZ3RKMCnecz1hBwEU3w5oZUhZHFbHre3MPiL2qsHA5sZDBkBJar6nsVCc4ZxJ7A1jo7CTrz",
  "key1": "3jEdGeCoyQ1wKHUUVAhpGWar4t5oyvQtgZBV2oNh6RXYjiosAttTfrE49di6oX6318otPX87GNP9f8NGPZaAbCow",
  "key2": "2NRboFRFRR9s1UVpxXt5uG2NBQ9n1RzwuyHA1wzo9kw49SJ6D9dtc97LfAfojbYRofWdk2xh3boNPw8jVdP8spth",
  "key3": "3pN8irXHKdNuoHHmn1hNEkmzWoNx7EUdUpX6w2sJiqCcWvsNmHEUuUPeLS4cQ6214yx7JUs9LZg4Sg96XX1Ep3UL",
  "key4": "67LtWNHuWcb1xTu7zLag5sdTzfL57NVDwaSwqhVBCkAUat7DEXi7MrkFcfkRD5TcydVnX66myLqmS5HaB8Up118h",
  "key5": "3WvKkY1qtrA3tDe2vXuPwLvXieQGM1gajKzGzdtJn8q9fAR1W3TDLzgfP2s4cnFRq7YeswUmW78WfPqZEzz5GeA",
  "key6": "4XiPbyJQQ2pFRVAjsPqpTzkAP9PbLbQK58LvCe4fR7z977afyo16VKT3eKQ8CWdQCmPKKxiB2pcsWU1K9xJyLyWx",
  "key7": "5i5Gn9p9zsexNXvkVbVo1VxUHq8wY25a3W1Gr6uHXvjwrLem1HJiByUs1w3jTbHTBTxFeF3SCjAK6cN9CzvM1Kwh",
  "key8": "5eJ646PfuFfEK15uL843Bkb88sxXKzP9H8dFDyV7rNGYQCysWkw85KQdetDDwo9hE75yEFTFraq7zDxGnqvzRZYm",
  "key9": "2vGqh7q3wQfrhk9bjK5LiVJRPH9WS1hsVkYQ6TTEaoFVHWhrNk89tTVN4YhXpfVo5rK2yBWaxBfPgzyY6ebck4DK",
  "key10": "4UicVpqC7Zd7zSz1m8zXenBKrtR7vY6eBwBZ45Sd8ZTa5GttHRi4h7oNzPGozv3qRk5AKCXjfnqDmcKh6755ZgYf",
  "key11": "5MJd6QrmEfYuC5Bx8otMCRPRuP1iRskbPnV4W4kdaMtnpXvC15adqz1PCC2jWC8DvijCbL83uE9Ve46TgqL24cKp",
  "key12": "5sdrob7kKJmDot7aNJsiRYoQaorwTfSJSwyyA7HjmKwtwF5sWbfHJh4Te54bMfkz5XUEw1vDBTsmmNk5PvyGM8VN",
  "key13": "5jwttUDZmNMwRcp8EB2BrZrXCpLxGiehdQ4Fme6RGvRaEYCbL5HanZXYVHSrhE24197iYVhzdRJ6RvC43w1yXnRG",
  "key14": "4dq7DD7NUzZvF9v3LKzrMztEbcug2txF31sDYZE5XnQDuXBuMGskCFc6w58WLLXTMgYP8H11ftG5gDjCkTBtSxFe",
  "key15": "59FT17qhM6uz1ZLV23sRakRPgHCcLS3sckuozF2cbFGSbWciEA4HRPxAV7QTSCAqsYvMS6Z2tGobYkAt1hfhYVh6",
  "key16": "386Eg5D5zSmk7P9LyDnGGx7WscmGFBYDMoz315oJ18xKP4yym6rsFHZvmWueB8HGdCQBKpT44RwLq74CPDpD8m1C",
  "key17": "4x8GEVFfVgroypjxwA42drTuzQKqKLCX3xXMdckLBeq17QCyW8ZqZX1AU3TubC6HUZ4vZ4NCwWM4xqYKmzMaevYW",
  "key18": "GaWVLij8XSdkP9k8S7beakLgJX9Fb5FErXu6McovfsA1upFGHT3MPNY22jCc3hyPjwG3v9v6nHwswPA7BCRKUxi",
  "key19": "uskByohH7dvX73fwxRnToG22TSiFtVUjq1WWLgaYALuMSMtjPN75XVUy9WPFDgWFP871FnNBNQjZZU1ow675pqT",
  "key20": "5tC8gVoaLruVxYsTxFd7Uc8qwAkjARzn7jqRHrJ6ZuDsvjjSyYiYj5p6JwVSW3BMVdXWnfp6P8tUtfo9rPziA4E5",
  "key21": "2mQXBKzn1GMTojeWqCb9MoxCR3pom4b6WjcbmN3Gob9Fzb6tx4YB4zBFaozp3DKpvqWhnTwkeMftVrmSYE2gDixv",
  "key22": "5jckbEhbQ6YZMZ9S3zTGRYqxgSo6vEgWw3HyrWbYZnjG3rMTPs3HDpq5DB3W1UcuB9ArAdE3abZ9bUgXudQD1nG4",
  "key23": "3APgENdxNaDRUoYm6yCW897cmnuPXqL5SDGBvfsELG8LTGU4rHQjcftyKJbw4N4ZYsWChovRhGNMsyiwQeynhn26",
  "key24": "2CqyXuhSAPHYQVx7k8zUEociw81BKEbiej95iD3CT9m9ibDCMRkppEbYviwaPbmCBQGfkL6hSE3vNrhx1Tp89tmE",
  "key25": "5ErUikaYtsKrUGcjDVhaW6W1m7c1hbHjDUGJCqXzt67fRRtVgymTgG6R4ZZogYvLQKf6DoLQvSw6E3YkQekMg6nu",
  "key26": "2Xmxm7xu23eeMosD2wZxCq9AHPXHLjHLj5uCxxkie9mmecK9Ud1kKLY6dEKfPvXDGLhGrJkpQ1MfQ1ZGwAGkWtQ4",
  "key27": "2HaNKNm7pNCw9cPUajtoN9UoiUjo6KWsJKuh9UQB9q4FHzHicm9srNnSXqboACqCLJrbyt6wahDHayMPfWjXtLdG",
  "key28": "2N6WiyKPrWy9XRmbS8jTtVgY9pQT1zYY3p5pEwPxiaN96fi2BR9rfqZdYmLQ1HJMW7kJSKEyunymDNt7sXLFH3Qm",
  "key29": "2Hug6Br3GdEytSefmRDZVTLMYzUz9mGnCcHaYGicP7ekY88VxFr5jiD8DE5x8uhXDNeVsS4pyz3j7JkJ7anytZZ8",
  "key30": "66eCp8Qamceuz9HRN8BPth1Bj7SJKNKo6Lzpdy1cRmQ1SiXhwbZoxqH2WvAwUswiZjEJTko2j38gwS5xxJYfz2s6",
  "key31": "34NkLfMRM9wBCqX9zpmLWSddiUUjRd1jDZUyX2YVrnr3k6coEzvjywRMQmw5ZdvuY4JdLwXyo465ocP2Cpmpp8rW",
  "key32": "JtzEMfgqtGr7xYZH3XxzZ5uKVzbLYGU2mJs7DuNVF3cq6KyHrtQeLSiSdBkbSDmzmMHy8ri8qUjCSjMLwQh5FSv",
  "key33": "4x9UiXBe2XKuNBdrDMfA4Skpz15Rwz13JWt6x7q4juSWhoqyGHDaHyZ9apZ7qnsQCLxCL7aQLDRbKxE1jzD25XxC",
  "key34": "37W3ajDTfUyeM3zHVVy3TRVptpJaEtLvMrST7PF9Mft9PkYwLwAPPWqJBDsaNYnrfZDoDWc7CkUKTmrANPVrX5aS",
  "key35": "4a3jpRBhVBo9vVQuY8zPtLyZmcVtez4mgWKyWcoMCBX1MfNCFys9UoyXypFM17S8tK9WqMR3cMD5rKvpnbqiPDrf"
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
