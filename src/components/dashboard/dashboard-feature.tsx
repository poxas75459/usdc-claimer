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
    "4WMB4Admfj1pyfEQVo4u82mtWGKNjnSV7WNBUVeQFnutfLYWTeYqTft6Gj8nT7diwQuC43abHXTf6KXdfmvw21DK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CfPZXPAtxw3Admh3hGMghhNWi6V8p2HAFViPvhJfgi7WxA8oeiJ2ZSzwtZafVDd95b7YiLYZFHna8ovuVpjdP2f",
  "key1": "3kXTFZbCnGVfKBwnJqLefoYAdF9y7HdTHBUoQCLwvDRpXmgMZAcgBgBmEwrVhQQTLJM23yoYAPdw4CHGkWdnnQuh",
  "key2": "3JyzxEkhQxaGhyQe1d4WGFA84rKGboC88GYF31znZvDns6NsPNaNCX6WArxhgWQ9YRqepT6uQxZ473L55tP58ASW",
  "key3": "26S7VDVhfgaFR8EvYZrTDAbfT7YLmpvsQJDpC7CzaFCTibEp6sr8A3RfGDWx5xV4mNoM1haZKvrPmEp8AFyQCuon",
  "key4": "3b3JYF5ixv7vtFvxWH7c9pcGeKtNrbd9EtoLfbPFqvK4Y3niYfbeA1A6sGseekodwm3dhW9WLDGwub3fZQzukDM6",
  "key5": "jjJYH8ScEZEjkQ4zE9QuuNLgWhdJSgtzQUyMMgfoV5MyY67tzce83XoJ1gPhnf2Y86CFdpyMG3R9KVBctroC9ph",
  "key6": "3cWkSB623JJf2wyYbBFbaomSgsw1rwkthimuChznijgft3t9pZkMis7GbLTDZNgjTMftQkgd4ewNKNZQp1WA74mQ",
  "key7": "zNM8M7bnVNLmU2kBNuGxCW6L4VMNq8F9WHw3HkChb9snaFKQi8AJp655efinGgJQ4LpbjNautgKShr3JSimTS9n",
  "key8": "2u53bdQaaYgJ5K1GXmnjwh7vcnehkR5M4ve5BCwUjEpLCNY35HHNZKSnWeL65NdKrymg4pPKrtEWEzm8oirUqxER",
  "key9": "5SkPWnhrPRei3Q3EBgCEDMB5JNiNtvmgPHeFEQr6kZQnBMoAy7YCiYVbtZf7igyu2V5wBuyTgyVZ923mTW3fq1RS",
  "key10": "5rdKYLhmwqJ766NPDvRdBg8i5gKkqQwxKw7ubmJThVrJt6YMxYGqCof14knDnsAAGG5dhC6XfXk1tANYxYX8tvkM",
  "key11": "2qRGk4R35nXL9wiZ4mVPywhJs4kRen5Vga7M4rS4An5VE5PYSHB5kvRs4k9EQd87xtfHXP9VERiuRccrZV6YU2Re",
  "key12": "VatqqPhdXgimDTsaezDc8Q1T3hSfcokJtCayGLkzVsRoHXKzPyDkBFbnWBqWp2RnMqqk8sRcYs9e5TPyP3HMKC4",
  "key13": "59MpQJt1h9HeZpVV39jeCwzx5y8wL6eNnGjkEhdudhkkQphaLthsWg4DqCQmADuNWBHFLJQqDgqh3konS4gcNurH",
  "key14": "2tLrGmQmqSpMbrHPDoBXjLptDwJUH2B5UxKPwqyuSeVW4XeASYCb63xTuDLqt2cSPCm2nhH7ni81bCFD17RkZ1pz",
  "key15": "xr4oqdXXPMiNeWQ3e2mB1fviBd8suWUr3fgTX6CtTDUw9arXgmoBPYfaSNE3ESgYU1bjDhWfEQHYRYjS1inr97Z",
  "key16": "2vDg8CEKUjcszwtwxLD8jbqABHfo8d7oPGGgDgMXn2ha2cuyTHjxAcvsGrV7iRg2VkRgWchvEFW8QLVTBeovN2jq",
  "key17": "47uKVjvVxN81BE7k4iDwPCC8fVptfhZMdKfS24XZicr8wpNFDV6Xngxdr7hpYdJ7cesqYXhY7nsbDuNdXLBezNnq",
  "key18": "5HvUaE8YbRmE8GXbxWnrJxumFUsCZ43WkshUSs9mTzMjLEGRASwEqxYT5BeABTYNv6MvaSnob7r5u6AC8nzNzsJr",
  "key19": "G9aphmyxhADzQPy6chHbrEgTErevUKcMQBAncx2vZMtAApWvzKiTKrS19frSsV66BFu1HWdbmufeegJVLsAfdmG",
  "key20": "5c2p7guAaZ8p9Mzg4ZXN4FGui132BHS81E5EnxvCUHeM4YhtYW6ASwNvSuUoCVGYVHmMx3S2MZionhX9cj3YPi4E",
  "key21": "4DsC8xBJA59E8gE5NoZ7y73jCEFyaDNtaSYi4AKDkwe53LjnNeg6yMjDK9NcdGk5T216oW2i4Wnd22eMH96eSwBv",
  "key22": "2oz7njbi3zgHDQ6gqQc7pvRLJFWZJEKJ1kG7hMK5DLmM9kjqgp271JsQckPbwoBPi2Dkkwz56C5VZyaohUAiJGWY",
  "key23": "2RzFUiGcwkq4KwzZe2CaPX1oBbxYkNGRkku5WnGuXJxtriUSxpGgwzRtVgWvrhNe1bYDS3HEc26iLF1bUnL8M5XE",
  "key24": "2SE4bTSBpQwwLrBNb56bS4pFRrUBsRCRTDmaHfB8oRRxZmRYFjGzee21DxJZfLWP2cnwi1RBs8QMD7XVG1ytu7Bc",
  "key25": "5TmXixvMf1FDf2Xr8S74Sse6jYoF39Uq8VcijVDBAtfp7yMS257rDeCKiCqfpr663iUz4WCdiQrNkwWxVPmh61uu",
  "key26": "652Ti5ND1WYBiyDCkq14wzM6nknLn9uhdjHZw5FakcSrrWXFY1TEpHPUqs5LmfGsmkztwPVwUrtqBsf9ux4aq3EX",
  "key27": "3qxt3gVwU1pZBVc75D9CBoVCCrW5vKNDqsB1QBAmy3L8YcC9yRpVsS8BZnr85b3qquox4ZueF5n5VN6ozd6pruvG",
  "key28": "47sak4GxqceXMiF7fYDb8cXSENfqfUaE2MZAkAThCJWs7Zw5pSvZozo6TeyMidSiMMmsvjMBfCu8JnJ2bhPdrSff",
  "key29": "3BmWVeBf5mzxxWCL8LfhW5LAUsPPouWzMKcVbE5EXAa41FThR1ff28FSJKZvduwCcP49q7pd8uzYkf9rV39RkLKW",
  "key30": "rdZCo2YYX8WXaHErmbY8UD3Wqu2wocBGPFiTqRpgSFv2DtwEwBN2TSysKipbZTjS1ucQtJya6Jvr3i1ZekYyzso",
  "key31": "2evgxiQdZXpmZNKqdctVi8f7uyp16dQK9gSugTMjk6FWkmux3VPqRnBbDpjVruuavvdgyBajixwbyeK7autuuzNb",
  "key32": "3xT548hgj2Hs9qjDKGAYA9nw9LgwZmYW2CxfA1P76S159t3KciGrdBQDriwkpxSvQGG5dgToSzDnNQXkB3F9WKCA",
  "key33": "66y4ZfvZzCuyjNLP88Xgiw2E7d3zqyYvUfPh4NhmHQ5kgUxeDnNUJkubk8Aip7VtohsU485RFUYAhNfFjAGanZ1Y",
  "key34": "4EG4TUs6akvGW5fZyoS7i7FxWrsigaamwyGwGnvrE3e9vZxkL3pmQwNjP1GBiCLVVvgAP1YxQBiKxa6RDNvVUbzF",
  "key35": "nPeFvwxA2K78kTFqZN4NfP9zjuxhMQ1dy3qtNVCXmDiufkMFLzutrWpSUtSmyCt86ZbLpYYMjbsJNV5ZxGSY7iq",
  "key36": "3yQ4DTpWQBjxPeQbwVwDq43LKvHyzEbv7RzU8dL8D1d1eJXTDn2gUNjFJtVR5ZnFBWkmUam1eGEfVVsgTXuR75Pi",
  "key37": "4878FZ26peMg1oMgnpmJHEZzfAhHxhpiKZvq9GCDP6Nxw49HGxUpvpsZzmW84TKK2Xb2TTikvgtxE5oh96UENzBT",
  "key38": "58HVycvLpPUUrAdk3G3sN9NbdN5feD2PasFRjLs4RabwihENmkHccdHQjfcZcpXwTGKmVKZWSwe3RDHNjFB9WTxa",
  "key39": "USr4tJ5QXnDv73V2qw3M78Eo4VNYdKAWvEgzYg4q81RkzueyBHz8wUGq7xWGwoHYo2J8nriCEM9cN4FGdStY22Q",
  "key40": "2iVh62wUCMk51q5V9mqcCdDD3M8Xhote4kA2Dd1WypdoMkaAzpgXFizXfbUBJ1cPvK7AqxLd9GYkoD443MWTVwpU",
  "key41": "2vWxEqu52QrT4nfT4A5bfBvXW648rbb6UboVUy2dheSRLRVFWTBxTqbzvqhx2jLUzS3fTgzcGSN4MRLSqHBwgJ26",
  "key42": "4WWsJQugq2WnyN8Df1wFhsvDTyF5Jn8Yz8KeFE4GJs5Az89EoewEiCELJtXXni4oSTkW5FyJKGaKJpSbBLNGiRtC",
  "key43": "5tQ2SWYyWSCsygUEgPPpu1fj3EGciwjoVpid2PtHFYrT2zg4t6JsoaiC2vEDs6SqgsnTHsqfvDgz1VuLoq89kkx4",
  "key44": "49xzn4fkKcbm9nfdpRcBWem4CrzAqtf1Erpdc8pU9RkcsDw5KeAZ3QQy61GT4LYuWVVE64MwMMxVSv4qVULpSiqk",
  "key45": "5hiQoS9q9xKEvFtqU1ANkEiim5j1zbVgroJyuX7WDEdDXdF3QkgbEwF2GwS3AN4ADAxt17ey6hHt722ePAErDBAZ",
  "key46": "5jtpsgCcmbZcovKN6FFnrveU5UK6ptLckfSdugnyRbww6r48ucLhGirb99SXPbSXjv8kYsgMGPgmVkNSf4n5ktzH",
  "key47": "eo3KTY5N2HubgHu6eRdkY43SDL2QjDuW4cmCxtmyiTQGoRHghMmLbJAoZTmHDFU4doNxV6DPDHjRpM7Ltgkd3rK",
  "key48": "42w7A3yUgbpKVQoWBQXZYMMwpiZVs8FBybJ7WWb92JrvJBCwn2v4iwBGsbHcCBusu89Rwv7NEJYf4JcUDmNE2Zw1"
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
