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
    "2s44dmH5zWaWMrpyroRm6RYa873ZXropcEBMJ1L3Kq6hsW68fNa3dJ3FZRC67ezdC2UknXCuF19EGkkQjX5iUVZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65s3ddU33SpvaDTn6xRZV1sWvKpZsgfRGzrFcyq3SGi8BMYonq99pcpNSnNnHJiAKkApyhysvfWNgpmPsmht1ZMD",
  "key1": "4TsjAtCHUgFaerc76mKifak4JGQrCUTGs1xQBGTfvzF5XVnJFpYnNmtxmvgM3Dyk3ejS2YL72HPjDciWCnowaqAr",
  "key2": "3XDvXjNXHmd7hUq9hwDEoVSLRMoYH5fLjqGozRjw3h65pTJxQw1tahRQxBmg7nRLfBCwAky66BsYu9n7JDp1K2LT",
  "key3": "2nrH2NbZoqJ3RPeTo8EKsoKRn5D7vACQDnXxwWDk26MxnBHMkzLQkQ26vtY5M3GW44722hVK1yddiSo8CkjuYggs",
  "key4": "2LsJq2R5jeVrfcvSBcocuACym6rfHxBqNK7LbP2GyCE1Y3q8XC3Deu6YiKYCFU9etuUxWT4NBZyyhAe11awjFQRn",
  "key5": "3auH4HmBTDNyF6D459tYytaEG6jjUcBkcvvTR4Mhm9FfowoRfbfKpf43gRpB3sGNUhMqQGyEA85Ax5LmvaeCWUJw",
  "key6": "3QxgoKKxih4NRDAYWFcrRJ8SnEbvTdBMXMCkTkKX8CyW8bGRVKPCMbJp6xJtorTziLJi6Eo2hidnfpeHCEkT55xd",
  "key7": "58hZ2iz59sVLyz2uhA3dkt1oNbwwsWFdPeLTgGVcS5Sbph8gs2wHA7DWQns5msNFTwwC3dS8DreQDu5PCGfRDnW1",
  "key8": "5yR5bYkNGcfG7Mduhg5PErvFzhXtnp2UWJFFn71LgR9hKnhfofSoNz5KBy9bVLWFRWE4um2XVJMnj4U8FER52Hmi",
  "key9": "493s4Aqm586MfFdhGtnJ8g5zaZireaTSa9J98xkKQwCB9mZGDEZEYvRTDHCtizaEwTXhZXwDB7g7ti8uqjC1X4AV",
  "key10": "2gupxFikM7aLTkZGY2dJu8fBudyB9sXzGECAWihCQu7bhrc2JbiLyix8exTMnwgQ3hSnevmp4AMGrbc7emVmkEmd",
  "key11": "35fAwN7oSQHNsDmrNqbMZdprXVm26oDrRTdJ5kx2xRAe6aucM91SWtpDsjQrSDPZtdPqt9ansmRG2oFeHFEhg6M3",
  "key12": "UeptG4efXWuVTpAJbhss4YUUtwKBPheUSL76NubkDejUSzFgB6sVyNCh1sV5ACUpC16ZT9jAj3Q2UYVXiL5UgFW",
  "key13": "2JucMsTCSjDYd1379R2hUG7cWxMV9xJFwQYFLo6LBJ9R4NSG4p5ZPAxyxz43iGt54PGP5XcQgZY7HLkoW1w7EZo4",
  "key14": "SxJ3BPFHk9EUiLeKzzLegnhdGsBrK67F3VwxWQT21Fd8jqApuG7GuZP46pRGnK3FL7V9uMHAN5VCnXLpkbnrHfM",
  "key15": "5EPMam6mnrkHCt3xT4BbPyHdFexk4zRaqJvHv5nbrHne9Z1NpmJCxka3MNmB7YF3yQp8CmYXLoQz3UBPfWN9gRjU",
  "key16": "EycNf5iKwL4T4FrqUMBxZXjW7K59V84jSwz4Qvuoqftuz9C3DRpigcConXyc73wdWxyZXuUQQDKt34WCmhh5hDG",
  "key17": "2Pvj8CqtVmi83uLdne94ZRp7PEt4GNMTRBQ2M1k9Q1yg7GGiRiqbLvdWYpZLSQp6XMMQNhKjBC9nSjtU311YnURZ",
  "key18": "4PNYit6ifs3ssmphYknFJXdyiWTH5sd5TwvsZoECf1Eup76fjZDKNkNNxP4HEZ4PZfd3imRLU1QhyouZ5HCLAs5S",
  "key19": "2yb4mqvjf9zkVDJVqtceSjY9FBBdyyaAE44TuQxzCvz4e3F1zYJjh3eX8of9xF7ZygGAiPnqNt56aV97TU5jFsQL",
  "key20": "49CTRKwiwWPJYa6pT1LYozddjbHRejwz8244KjdNzhVpE5tdh4bCCHW63Fxte7nNc4AofGXfdbwEtQrUg1iRM1qt",
  "key21": "3L5Dg1G1h3U1B5KzAYTwkSaGx64i6qa68xNRLtsxBebfd9pnUQWkkkYvXShckcmoBypMmt8xMr2FsdMyhCqqnhCN",
  "key22": "5owDiy7aHcE452pJgT9oiTFysPUjaENChVNUfEGY1gfLnEM3Rc1m3XpGYt3xkNiVc4QDAqBCpfgqBstHH7wrPYy5",
  "key23": "3ZdP39vUTo1wZs6Gt6GXSyHE9KKzDF8tRzKPTvrJ2U9AA6NVVr5gVc27tEiB493U5cuynNn8oM83DFkHWRPSTFsf",
  "key24": "gvJpZ8aSLzhk8EYXR3sMqCRSA6RKfZThpsjSQJXKtqmNjKTm79TfZfpG9aNhWubVC13zaK8Nc2e99bzFhmQKSNc",
  "key25": "5PcrXc8To43CvJkb7ZKqEKtAa3EBYiT5cBTW6XFM2HSwyyPAVwB3KGDuFjLEeX6xAZDPwHKvmMmDXYmP2FBoL2RK",
  "key26": "HZBjLuZHpVVs1Z95T7VB4VuoNUj8kh2BnjZZPtCUgYVAioYAoxZu2NPyEbp2rf8WQaXgcxsL1FXtjRVuFavCTPV",
  "key27": "2YSJKKJWfM8B2gimkqGi8U2g8HyjtCFhrnM7QjU5yzyNixPRjrN7gc3PP2ESH3MzyUoNowzVgXgaxXLW8Ucr1hW",
  "key28": "4CMyhbJksnNwxGudNR2tJVZ8qXhnXmWu1nYGw8LUk5fbr1EgEjTEaiRa4LtL69t71bjwkJGSg5YqFNmqCewvBkYf",
  "key29": "5Hgf58F15entLoMHPMYSBynk9F6UY9gT5d67JkHofpYN9q3rmicNMivFgiU1y5GSrYMN6tdJgAeoU1VDmZTCvFyN",
  "key30": "3PsdWbpptSLGZLsgGtJG8h6XQr8QsXRxcfTVqbJZyRH7XUQdvXFHv3KoZGBAni4Wueumj6eZbacSkb6FCKxxsbRH",
  "key31": "z18cPXtezAieEXSsE4hEc22uyBkHAfvXnz179BjeduGzXjGHEnxFV68dExPZbByQJaaV2LnCbmHJRHw1QcgeQBY",
  "key32": "GRfsmU735a1nfkK6yKxGvafLJAF8DtuyRfLNonvZESa1cN364TwnZrnTDrYZzDa1hQSaBSxKYRer7RUrWGCHyZY",
  "key33": "2F6wKi5kszgNbjRMsKHkPH8HWesJt7JP7Q9xb2BiowQD94N2mr5oBSG6iho81dzytKaT8TEXY1zJDFjhBa6QmPVb",
  "key34": "4HzwSHtRSDv7mexZ8swzWY5f2u5d4Ct5a2zjfpZtY7CARTaWuvuJZgtRbKZrpM11Gw2MCLzBpeXAMfArCngagEFB",
  "key35": "3i78PL1i8rWAJve5ih3Dz186VPqCHCWayp3mtTCP11Zxcc1E56gpwrmAvmT19pC8bSi9qTRMngKkP6fk6nmDbJaD",
  "key36": "Y9oR2Y5Ve5V2uuCBHZv4XiqEoD7Gaudjmu5RB4NYSgEYjznZYWkXmKE5st7aPK3LfErHRYCF4pxayhepXogZ5ny",
  "key37": "323rZ4aDGWgQz8XVNNsLzLUMKGYbMQG82mJj66W5EXmvGDiSM1JWrjHvibTrKAxRGxs8gyP4cnAZ9amJdVFv4Wqc",
  "key38": "2U2j6amikJGJbvUZba6P1E26e9WgPjxcLSoLYXgnvWXECvjq1RQt2RN44CBVdGtfcv2yWbDnuL5iE7X3q4srT7D1",
  "key39": "4N9ZDgytKwKMehWQUhZND4tuwybyhr73nsrVC8pEt9B3KRPhUt3BnP6vpjmgTvTh3PwyEie9sBpHQgKHjAApiJLS",
  "key40": "4ppEPEiV83XXsToNqdczFkxmLFKbUx2nCth6ErbDgMR9C4EPseoi7FeobT9bAXdRh8RajqfNmj32xfPDUcxbskQP",
  "key41": "2TZf7urbCRZxhokjKMpNGa7yiDTijJHMo2zjQLa7RZXQbRbb7uPhTZiyT5dWEmzRKFPCTWtHxcS1xeerubwEL21",
  "key42": "5a9BZTSyRjWhXpDCnM7k8q8T7JAcfWft5HQENxBkZoFwmFEV9pZND2RjKwbYoWiDKSRoGWikedrwmey828ppdrDV"
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
