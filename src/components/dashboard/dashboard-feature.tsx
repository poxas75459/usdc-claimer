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
    "3rfyEPmSQf451mVeUn1Hp3xv7P4F64u9pPzUvhj77CAe6vwLkkJM3uSv9c8UvuD64qHjHsyZkuemVLYUu7uwf2MB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zCoNrXcjzov2g9wCc1WQMT1vcX7pBRUTF42HPcQBnnDCwjdA1Zar9Awo5wWW7GTYzEBhohcffruBRHGw2DVVGtq",
  "key1": "3x2q4xn3SxRT5fBTu3QoAXGJ4q4o6bYJJ8XbiZkibUUyy5YSYrxrwZuvwkcYdB9wEr8TBEKAeFYJUMx1WHMHXTXB",
  "key2": "3Du7TyfCwEhSuStfcvZodPXYMpxdphmcosLih3UVdx3TYPZYH8uP4F7GNFaUYiVX1FRjeuKtaLYJviijZCGyHxSU",
  "key3": "3SXgh6juuL34HvFyQEqU4BuWqWZDHQrxtD82sHgdjDUbsziLLAapZ59VYPJ1x5ecViEwZZRu9JAD51LpyFXfNXi6",
  "key4": "2WamLQYFD1dwqn41ggqzSRAmYEFBa5DQaVVWo2fJDWMUATiGRdXAbVB4Zx59twx7LA8TgXnFXLaBFYJdKRPEaRpW",
  "key5": "3fRrrTqqZr3GyqCPUJ95ECJRjtDGrHPk2eTj1iJgKPhTZ637gHQj81AUKwXBtENDkzDZv5xkQpKJr98WTTkogLMK",
  "key6": "XRE7rRQ2WwA8Dg1yTUzEVfVcdNn2UD9reRe6YzshUpmC6HC6z5LjTtwY4REVxHL7RbKqMembCAaQsgQxGvEq8uE",
  "key7": "5yvQqyBcRE72cNNVdMvQ3BUxE9gGTFqXVkbcxvJ8PX29ak13GodPMrZWY9g4qQfz4CuLwfG8PrhMBvHyRUMXv6e6",
  "key8": "kfLADgs1RMhXdKsjXF6RPuDLAKrjJpor7RZxyqvnuA95vaVgctLGPNbbHG51EifNw52vogth89FBjHpD3EDWeok",
  "key9": "PnEUUnpY5Mx5oyVPgso4G1BY26xFkCphvgVCPdMLyq7db86bDoQRH2cHxkXmdY2eqU8T8jYBShsrAhQLkZm5i3x",
  "key10": "5EH3fs1SsMZLrBYETEx2a93uYidg7mgcyq5CTmShA1sMjPzcqgWFpmUxwvg7N8VTSQ4F5nZC6wmtE2DYryxQMnUn",
  "key11": "5zFfgRx6vhAeQtPKEzoo8e3Aa41J9ogV5eMpYVGqprHG4WiDEK35rBZ9KLifkvAhp1invoDf5LurebBPBWXbncLq",
  "key12": "5QSKqpUhtJbo3u8oc2DdURRJWuDVDKg8b7yiCxsWviomLrm5xntCeLAEimh5sw7aWVYRQ4mmNySx9W94ek8sHw5G",
  "key13": "4QW2Zy8fXrxEJCSFB5t3K8qC6aRkBAtntcBn92z7o8DNw3Ahj4spncPr8APdg5pKcHasgPSbqMsvwc5YpJ7zjqH9",
  "key14": "XHvcGt2oPAEth8HJxqX2Zu1UkQPTyVDwuPJRTswcR2DQ7KzUAqF8vY42txGpjKs274vV5bDNNLzJuwqoiEzACrR",
  "key15": "C26KLAes4X3dCoJk72cAajekd6n1biJjckHoDyWkWzzMK3gM8MjQQDrTfhzYqGzLhybw2E4s2ySKwrNwHnGET3f",
  "key16": "3aByDq359stwduoCtUygwJg4PHqBzfNZNwZWEqhTMZZLVJPp8DhKAZmHmYDPfGBWRVfKuRxFJQMVLfrYdvUxfLJ8",
  "key17": "dz6eKAzJb96grrNvDBDSuPnF49ZVCUkBzvU6ABD8aGafP8Z2jNwNYktAMgvfZSnGZqviNh9uCnRyywSWkhnaTk5",
  "key18": "53FZVhWv3Dr1MdhSiPJ9CArSaXf7FL9V5VEEswb7exWPyT6KBrNDTfYgDe2JsDuF5ugPQR6HHbymKsGiUNKTsT8W",
  "key19": "45aDMeBrUg7o84xj24Kf7gJyBxz5axquD1dZ2v5vDp19ZE4JjLPY53NtxTrJKpu7D4T97iVsNvzZmdtybsz9mQjA",
  "key20": "4vWcidjJ1oS2g6AnqgjTRtMxMXbLfgSnpgw4FVbP595vdV29YnCAhGaFmy28qF23tLrttYNfYtEyhX9mKd5Zp3iH",
  "key21": "2UEKtnx4mRbzBQTs9tshK59sPhm3gB2rsfFsabNzMkY7Nx3KBJW2Xx6hdfATnfuDLexbFa1TMWwyfPbRtWUiCB29",
  "key22": "z29V2msPhBCAiRo3YHcVqxMwt7Sj48WsbgvEPg8QbsAjCpNJVxBiN1mfEV3Aa3v3cV5NZTjrKzBsMenmvhBwN5p",
  "key23": "3K7UtYJyaqL75ifaQgnQPMJcGK3aX8YnzqCoGd7xqX45YL1eBrn7YDziFwrY3E1XtWfEB6LV9TCZMBvBNvgqMrig",
  "key24": "2RcMdyE77kRCVS3MDQ9ZDKEyiAFWhyYj9z4JFd5GJqDSPkprBJrjpGtg3oGY22Eb9bxNabpPpXsCn8Pkw8d4bGxE",
  "key25": "3ErSzS5sj2csb3VfaW545kv99ifGpddSQpm9gSHNreje7HHtwvuCpMTTPGwij8uh8y4sfjGZ5yPbtaJbdhLb8JsQ",
  "key26": "2WoEnxwAfQe4p37Fow3arbbvKNDpXohKGtH9fqs4nuVEkGbPyJ9Pycy9SNPxj6dnh7hYr32f6BMWKo3JYfhzrFpU",
  "key27": "4K2xUp1FSX9L1zZkTadHxtAHfyVRSUPnKtxurPmKGYDkYeZDyxyhpkUJb2EEvKDLHbJPvR6djLH7LcWPeU6ty8sB",
  "key28": "289P4DA3UJUpJDFkHt1uqYyDCVv2oJHbDJDkQuEcrotgd1xMJw58qMTdBrQPCD5T8wMGZ3XmB8WcvucYaumF5Cb4",
  "key29": "4qf1CFFSm185uBhscS4PtYcML3s9zcTvPgjSuXiHZfoc2HQjeQUHCLfMc7tHyKFWyEdHPyyYwku6qTGTfkBAbpHP",
  "key30": "2B5XEtKwzRaUeopVKJGB64cFz4qEomRosL2VM4gpRhpBnk2T7ZUP7y3pFJKw2bXKAc6no197LHCthw3mdp5Hayko",
  "key31": "3eyHiVnaZJ1A8Lnjte63iYe69szwkiKJQZaxJBU8zV4RvDiuYUp8nUpBPrCQc9oTmZTMqtxsG4L1b2BKL6fC5EGJ",
  "key32": "4R2NqUU5kx5m2b5sjkGx2PD9wJXFv7FYYkyKbdgZNd5NX7XAJczwa9KtyMvkkc5yfTnULuY1mYZLNzQEMYZ5xoEM",
  "key33": "vjLobfkub52NX1WbQag2K1i8ZRV5gLK3XcA8eyGRdLrn1gPwTTJTfSztAX3gEMCQdHKeCeiqcZbbJ5Xppejm2mi",
  "key34": "5ZB2ULAX1tPNuVKWYRuP2xW8RsFkNtsRmKbbkkTJtuWfRwAYJ5VZtf6HAuMMxfUvrb8jiAQgDFxmEwwTwgWoFQgg",
  "key35": "5KZdUcpck2GDhyEoi5QPLfyHj1YjkKamyCSWrHGbE3SNs5Pcvs51taNFa6tzqDZeHZNLxcCouki2C7tnpypMf97j",
  "key36": "5YTeyhjYTcqZa5mptg9vDtPnALeXGHfS4DjKeiiM32CJ6gkAGw7pY8XK8WN29vXPC6fxuezaPzipMKcv7GF3pgpH",
  "key37": "5mBnvbkCbq7MWh2Fu5u1CdSVmutEBL5ucNQSzv9ixAKZMPek7y6CEWF7boG2NgrcaRngK8wtBLkv2zSoxPtB4Xik",
  "key38": "38RXEhtwVgDDLfYJuXb6mw1wcKGijMqyJbDcYUmnPfjNm4z84UpUkCa8TfR9LK8s7Qgj6tLC2WF79gTk5Y3Tqcqq",
  "key39": "2xwbMddhLpguq9tnUVsbpYwmWk5BiswGmG3BfDQJJKYHN17jTa9t2yUoAZGwhrUwHwSoa3BbXFyYNeDuSYvntbBv",
  "key40": "2uibYm7KVEcmu5J8VC37RqX4uUDHEEPQTyNsQ54xufYqNZJXEyenbELUY4yCsYGLdZnmT8TSHrENvpvX68tuCRV5",
  "key41": "3wyRBRuqFQ7ruuhCJAJ2nqSnwKYg5S9UF5apJc4mFMeAMWcqhziVVYPU9TKWcczdihFyw84AJrWK94uj6bF6RsTU",
  "key42": "4f3pPtzMD36sczL6T7D4qHvf8doCufvwe7BG9GZ2FVyf3STkiasZExdna9U1jGevxnbmVXHKZ2ZYPkqVudqBH7em",
  "key43": "5oTYvATYm34GLKGRJ2ByTMjpypuNzKKsFyzm9wBASMTjQ7ENTZNoktxV8hbm9xKQx2fyQwc8gYk3aou62G36ijoE",
  "key44": "3ksAYKeDGG3eGRJjmgZV7NoM7G4MgeXsxwfhNpNz6VuLAXfa5SV62Q9SUzfPQr33cx42KynE4reMAEQVChMv3pqS",
  "key45": "EJDMa4pBxE3nAHHUQ2BBB8Q6jc1opMEgJoPTm8dVwb5MzAT3TWJfy2AhaU3ZK1uVT1htf3PYF8muL69Bw9JKnqX",
  "key46": "2DMDafPzDw2fxsdFJpcJgAHSNr21q7ELWZ3tVNU7CpVdReGWJzmKq7MS9SCnGmUPpPhHyMUqp6kudUSFg1RYsVCw"
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
