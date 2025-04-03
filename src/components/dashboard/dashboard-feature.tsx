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
    "7yNK2nwJuqYMiAHnYRJsRUMviX6vTakMHf4fgCdsweFJkQU8en15TKzRtChRjLd2EgDRtChr2GvxAnQQ8u5cdTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iUs7z6qV7s63ho6vn7hYBUuFekDWyi81YErdKXmEx5bctWBZtdYt1yHrtupV5jN42QMuKvMzm76zRunbHWJZVGr",
  "key1": "4GT1KsSTJhBa31CzZrbLzbAXih6YKeHrUPE3ciG8pj9MDAXYpJXHDTp4FrAAWoA3RagW97wJJ5wFRsnEcy8ejyYb",
  "key2": "4jayGzWf36e3Lwe8FgYobvXpkMdRaUF4pL1dvnPoMgBpBDyASBXRFUydjbcxHYe6YYEiHsM9AtojR1NdduYofTkh",
  "key3": "2SgyWxXfEJ2eoBXkrvCrBbxTqAvU47SW2sGpKxHyowW55UT6ZyDKFRnicDir3tfyYBmuJfk6Sj6XyE1fWxxB2L3",
  "key4": "513phUrKDyazPx6385P7sSckQWkv9WN2yWQ6vCoNwYToTVc2xiMQqmRD5xvi2ZEwQEpnWgbCBWR5aJVhQb3bcqkp",
  "key5": "9XStybvjkqveNjaVEsSYfqKvqWsCVNFUmsmnMSY3TVFW2sF1iyaCobY6gWDh6vucdCEsz1dGZUyzzi9QzWbLG8v",
  "key6": "2kGRGeTPUUwbVR1mDZJQtzYZe2WuY4i3vas8bBzuKMxg8xw2wCoxAdUMg4exqVHLGq8NAQ1h97uzVbmDEi9gntUp",
  "key7": "124KqYo4MnAt4ZCHcbLyhuEtLnWJGGezu4rvC4ArH5a46f8kiYxWfoDzFuSbQ2ThFDbjawvK1WaMwMYGSAsyULN4",
  "key8": "5CEmWiL1BcUJ3MDnf3s1UtdkEinEXM7tjoLyQbeS93UGNdRvMxoBFgFYTphmzvZErx58dwzM8nMMfT31P5eWVpKt",
  "key9": "2LMxoELjuVPyj9w55bh644ELcmnPHeoE99cnGG4yXFqZYwiWPdhPbMQ9rfaf2UCG3su7zBGEurx37q9LWaFfTNnk",
  "key10": "4yUWohDiK8SzZpoTR34tqDBuvqthSNBMmsW7imxaKmBLmK32W42XvthgurAwmtaug64Dm9VZeGn2Tw7DhAbNTJX",
  "key11": "5E6k41P48S9nfPr8YnaKs9jJUtvn3UHya15QtZ8CoRYQfNsSHjyRb1FzuW3RwpVpCr7SMJLThMF4aTUzEVwuChmP",
  "key12": "5eQ1wqA9FqzDcebzePFtcyqAyza1KLjPA4TqQiBQ6eY9QHy1cuHiCqGExnzaumrdzPraB3PQiy23Dra2y5PctQ9y",
  "key13": "3WYAm42b8eW3xqcDGasWkCzY7nJpXEPqVCLacKxJg6SZUGLqYHQrkbUANoHksjS7HwhqNuKBAisUYnbFiG4QuaDn",
  "key14": "Tt4JkKfYx1e6zjw3Dhb624VwfmpLk8PjmNrfUFkqC1sBmtbz6NzNxMtESN2MWDDn9oWTe5dCyDxGQ7wQcZVMN4b",
  "key15": "61vKZJKrRPptPn3NBQTvfV3DVueTEEGefVaeX6fEvPruWPtu2yMTpcu6bQKdDMJKCfNfbEtHHzXjuuKgyqnrHaYm",
  "key16": "2UFqTYAEtWnrJxDoBw7TLaHCHw45g6uK5ENYuDq3y7yobdSvqQ2ED2mVyXeAtDnZMmZGqvTS7AFE4r8zXFDiiUgD",
  "key17": "5QurhWp1fpyAsjtx9TZNXQFRGfoBHqpDiz2Adtvxd9vPhosZ9h9RoqRQQS8uaJCKrNtmbeCMw7FiLmUfyKsskHoh",
  "key18": "2GXkJveyFy3W4GrckK1pmQszrxJ6knxzj1AUi1XUEN6xopzBQx2kdV2LRsVXwn2EW1ioCsSo6xQWoqf7bzs6rLc6",
  "key19": "5NdD9znhD5J2Kf18ZiS3uTKqiSg94uRgBdv6h11z2UU1imbPrkYUZzvAkMSCYC8VSurvtpLY77Qk6TgWfG3ii1JH",
  "key20": "2z8Cv1CLEF9Wgj7T3oZGifwgqSyL2HFEShkEmiLjCLurC6LzxWn1DUyeYhnvA2y1kniPxbvUKHSarCrPpfU6v6vQ",
  "key21": "63FrDov7MCmKQh5NoFZsCBMb1Z1XYZEv7uYaEYK2QJWnRRjcYprPaToZu3ceS6dFWqESxD1fpdhKYtizVaP2qUEQ",
  "key22": "2hNnZmp1M2mSATL6bN9nK22hhQevTxp1EjubCSgbrCRzqnstqkT7RDpLFZrG2522ffiYFuwzHXoHi1GgrRbtiuA4",
  "key23": "2VexwDr8jTAyTb6HSE4cekbySwqzuviSR2JWiMA5T33h2y1y5L84xmdoHstBWPy6uVQgGZnuMDXUfQyKANX6f48b",
  "key24": "Bxe6Mg3C9ya3soVLR6z7gxLEiqbDif8aWwBeDEq3Vi1RoEtod2aM3mM7nD7LqZGGs8UkNGyb6jxRKRTpXmn1gWM",
  "key25": "BjQXZc163ie4fjjDoi7ePkfonnRU1C63YwZWox11ioivPzCW8eLBqpWmT8oLsrhZPNr9iY4VskALrSwnYZnYvLn",
  "key26": "558U1MX8sfXrzWAAtA7YpbzVeuyJNqUfYzG81wouY419N8Bcz6mMwebAahiFnpahPEYUmh13px1eNu6xD9WgNV3i",
  "key27": "4Zjj3YPTBSoSXpgNgrw8dnVXPWuwtPYYbrYFFacGNNnuARn1xXgM3XU25WJ2geexvrPXgVRMkmkaWmVciftcYv8y",
  "key28": "yuzURPRwcJBDJiwjsdTyNbWnTLGqgRHy6SEYPoAZLVkyHrHCNSSYkGnfaEeZapa12rbUyPj5yE5xG5wcJtVzXYb",
  "key29": "579xjvDmoMWp8gs1eSeqNLEiAjHjZUrU9N48yB6CnFPmrjZE5Us2QE4B76Vj3Mk58npnDEoKPbKjkuRq2Y8LmVmX",
  "key30": "1W9XfBiiYuNebY8DVzWDsoQ5D41jLkMAeAuvMNHEzwxYWgroWHTdamwPxtYtgsuCXqPNCF9U78yX9mudvivSY2u",
  "key31": "5wDHv6e6qCo21U4RpA4MA1uVP9hWyNq1kPJwkwddAwv2nWfBePgcEYhQYzoGv8eEtiYTMzzbtR7Ch7NLrMtLDGee",
  "key32": "5XapNNbNgHfMA5HAXPEuveAVzHUm4Ea7rrYUgBauPgfUnDF479HbodyLUQJQ89a7uLqZoTrKpaBeLy6jaSqTCFHk",
  "key33": "3oxrn7V4azo527z41bE8cgPoRYu2LTuKhmQEeQDVrqfWAcxRz7DHjGnMFuCM4woq7XLhkv1vXfuAJHdDGuKnX1pa",
  "key34": "2APULqZGCcHKeW1KmBLz8uhSpWjPngJpccTUCvndZwekGeN8MwNrsq6VUHUUZGLczH9B15ajquFRMVbj28dFxMfd",
  "key35": "tJ5TZViZmTZt5Gi5fYEYjF4oP92vWey63HjyzFroDrjvnag9wmyr64XaXrkoeaoDcGet5WZLP7cs5TDE7RZVtuu",
  "key36": "51YxhuKpoRvK6NozCLCKPanf7uf7rW7VbLhKB5PDNf14oqZpxyfNHFRQPHMhdDrhn6ohh7dGiDeLouBAhhetq6VT",
  "key37": "63P1vMPomieh377JmoCaWKgSZPEwor538qRkydKmNdY1dEV3UbD5xtc4X4kboBeMoNuds6qa4J1mp9JUej6ebJGa",
  "key38": "2RPXShwiYgpgJ8QBcGQBd4mGyLXxC749kCmJe1uDPA2x7e5EghDaKi9qrby72ZwPc88zzXH9T1wV6WvugW14m5VW",
  "key39": "dnGnxmBZgNTgVqHmEhuXrxSMMcqBvJeGX8yu9zyuoH9KjPseZXnwrc99ujPk4aEdKvsHb9TyHzEZUovuMrz7ZsL",
  "key40": "MyVtdnXUUwy5uFyLNieuVZDyJG8hNCQ5MFTQGP8NNwGkB8HymUfnZLgCY5Gvwta7cZ4nn7N7peq3iq22VTYq4Dv",
  "key41": "2ywefrn8dFQjdx9QqeTMXAnuJaeAr3uCWhyxACqpzCjD2fM6bThyq34sYz4PuWb64bHw9A2moxvcjxjphgbn1f2N",
  "key42": "2mWvdZF7NvFknQbUMvtVgixdGdfi5N7EmkEy1vgN2ZU1TmgYsX6iphuizf42NvYmNURvinLRAQ8HDk8aVxiuQX7S",
  "key43": "3wPXKw9JuvvrtrShzgD9aKG2TjxgKUkCHRgTWb8o8maz2HDnAfNkevYJVAhqhJGuEMfKngDvL8mh5X4rKGBx71iE",
  "key44": "rt8veoAJc7TAVTuZ772oGxiAAbB7U34CykNTVB3A8zac27odwvNXtYKhRvj659T9dgqoetKJ5Cfvyk3sJkD5fgb",
  "key45": "3yjZoKF5WQdJGDHZPpCq9G8DCDfC9uSqYyaTG4WvWnSKWrmo6UBfDeCUgKjxVvLKGWZoa1T5zokGcjMeXQ15HbHX"
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
