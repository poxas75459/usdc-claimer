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
    "32aYsE7cLGwBAEu6QRfQ5kQbGo24B56xEFgc3Vza5FLMnHBdrp11GkTd1ZfXm6QbA3ypKfyutcyNzPRqYknEBFQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B2ZdZrG9Bm2b898h8BTtAzfXFR46ApgHYY3Z3ZtmtsCHeFikPP2ytPg1vhJk6DzgexH8tMUiXePp9im9ZfwL3kH",
  "key1": "5aYSnEX7M7YdzzUwAZFbKjyptB1DWt42FDZX32htLC2NY6h3RZ6qesJAvvyA9FWCkR4mBUYctwNaAFNuYUVHu4Bv",
  "key2": "wh28GhKryGc6X97Tcy3ug2DWdMFDHrFbZsik622Y4DvtH1qPzenVSKXtXxKHVVaiBEpo7DedavRazd4wUo7SLRM",
  "key3": "2NFVQHWC9fqccTXhigEtZi5KZdTti7rPUShp4FmjhdYDrJmnN4ymY3phA4E7gQjxnJVpyLgMcNQ1Z3aR1LBPmvGL",
  "key4": "3zgivA34xeN2ZPF2AyAyNyBfqvfLsZje4kTV8cyrYoVbf9wS2kGMbWdybpwSrhZQzzMNNqfskX4grs6qrPtWqgeb",
  "key5": "2PZGaTMvHhAQVUwNAZz3jfkQu5ohupbzZxHuGJvDMH7HkVga4zkYy8fBbTj6d7QC3QJV92bDtnxwdsKoTCYbyM2q",
  "key6": "2Gtbem6cBUszzSSyRPwJk4rkjd2ZWSKmBm43JKnGH5g1Zej35tfa9EjpV746TEJJNFx9L17dS9B2AnQqvNh221su",
  "key7": "QZK9why1hWbNj6A7AGCtcPDJqnFsnJAjY66VfbMdPF4a3J2NLDqWejULrQSAzmoLpQrfSQ5yzSpeHMrc42nbMAp",
  "key8": "4TELcoZSD2a1p3GtAMiRkEDN4qT67pPmoxNozQHu6V9Vuho3Wm9puvs9eGJe1WxUSAeVzLHrZjn6fEHNXqEmUC85",
  "key9": "Sx4gQjLPibaBBRZY9CmEdBTzKcatju7DiJBWQWeNHrXgwQP9zqE4XfjxstedxNCkBwnUcSAfuXc6i7Eoq3NKDSV",
  "key10": "2KifRfq2ynFjSGrWHD2Z2atdVfRmG7NVWeZALHc6vexy8grYpnQqWLJsLz6oSHRUit1dGVpJSvvxeNRv2QUpDcD",
  "key11": "3SGyoqQADCAd1fy7hztZkNx4DYDMH3vJZ6jSHiR8Do5ppeT3UQ46M4Hp4ENRskYRJhqyxd5NgfYFgcHHtMhYDtF2",
  "key12": "4jbJEe2epbBEcc1DXvb5nhVGybErweKeow2u4sm5ufCiwNWDmuEnuK542He9vZyiLHYeFLw74bdypqbXz7PXdbyV",
  "key13": "3mhEXJCwhrJxAStcHtXwXoeMDQdBJLGZRCM3GhJe3qp3mwm8W7iMjg5bpDsrmceXtt4MXqdoJ8ry5X4xk8hyZUvq",
  "key14": "5ejeVHg2jE1LRsBnjVivWgBQ9aVYrXt1r6YNsrtKuhkAESS4Wv639P1C2WTYs8cMcL86ssHLdaVhtF22crv1HT5p",
  "key15": "TeZAYKVCvL7iKxNB1CWeyhE6BxhQZ8Hpi9C75fBFG6hCFGmCau5dZH22mVmSdxMAQiRC1Uc73ugYSUDSQcPwyMV",
  "key16": "37HZjkxNVjNeCkrfeoJDDF4t8X8EjH3ix4RsFGhpynVFhSYiY7eBDbX8k9UkinK6hEashh9FtJaN2NkujPqBkPqM",
  "key17": "5hdb9qThYEzjKLUnPRNA5SFqZEw8a94ii3rNMPxJ8vzZAEvKX87DisAJrvaZ2wjrNHhTP7THQGM4jxBCgG4xz65t",
  "key18": "5QSK3fLbMqgTmQG2dfmV85tacQRAKj2dGP2DjNhDcwBmzxnjWScEVsrSaicqef6wutgFfGnk59MvNAkkwJpjLLrP",
  "key19": "E6EFMJY2xi2g7J3jWDsvFXgpTnd15onZ7wB7zm8Ad2pQThmvnrTHSGtycT2ZpVwf8KZYbWJKDotVDXX5de5917W",
  "key20": "289AkrTaQxL9CfxGirmM91BpZQfcQWxG2aKJrAQuFemTH48E6oZ1tBVMYYVhgXPTRMP4xQb2wv1DPHbU5GuZFqTu",
  "key21": "3D7GJ4yf9HUpdm52CMPnYa6VXFPcC9pVWoVyPx8PjfGYQJisnPE8bwNewkhZiY9Ndvt5YtC6gpCmzncFZB8BKnHx",
  "key22": "4MmXb9rQr183XPgrV4hHP3XnFnw3XEYFJrJpFmW9CDbe5wc5iNSn3uXmEpJZq9DKsfmbfGmP5WSxFR91qB1pFMtZ",
  "key23": "3MVvSRPebQBs7whXyUFPxAstnqixNKFFX33Y7p9gHrTMm31HB7L7TNgnBTBUy9kvv4cckBUoNWxsDshfQNToYm7W",
  "key24": "QT1VyxFFFrFEe6PgPj4rk7qNqve6sUtoRr7AYHgazZcXozNRsFaxLF63f5GpkgfJvZ4sa768nQNd6LZzj4TwHuM",
  "key25": "2hgJvcgupVs9yJZNV5GVsmZYr5ZL1frQZkDNU8GKmY3UiYpKP25DVj1H9Tb93NC3uddmjvqqzAaWHZbuYsSvYU7",
  "key26": "59u9NQNeeCicy8i5SYitTwAUttZXadhyw4J9jYEFqcExgBub1LFowdHzLbaw1RwK25WecS2Bo7jYsZLNxqyaea5H",
  "key27": "4pa8xN2BVgYH97MjzqDkDaKEtrrRxJRfn9m1LQPNHMkLZdF5pW6zWrP7HfGfVnKHnP3G5ZY5WLEFcqswQyzBCREh",
  "key28": "5Rq8Cw6D8tZtrUmTNPUDY1XynSpd4AMikUtqHTUzbjDeunHyEMGZEaJWzxLriHrfWgggAvvuPd7FELQkQHz46wb5",
  "key29": "2r9Q8iaSWg2QUKB8wB2Js1RxkfrsDXU9ANFhHg4A36qZMc2JW6ZFgm3T3xfLGKaFGGdK4ijKzQuY2DXKtoEWya5H",
  "key30": "8q3cuDqMZ9NRbJ65iNngvxCs5q1iJb15znmU3efJzbgJDePZZ2vjJnuQvDQj16wNgDSE36DrrsUTPCu6KveKm7C",
  "key31": "2e3cnvqtxU71C8Zavxd95HAxWtsovftkDUFwXCi1KKW5vqnebjZDbh8qys9c5oJMnX4KyuvWUgqSC44Jg7hCtQCE",
  "key32": "zTzoUWjKQp2wWT9yoptcmJD8Znj42c9BistkfpEw6nGT7f5QnCBqtiMZt56yB1cHmEoskg7ef3HbupGCxvGrzrJ",
  "key33": "2qVSZHjjrjdV8siT9u7ZmAs6aPc2cjmHXGubf8iBLmoWKKT8g1C5tL7Yp51BQjZwJRfmxkk9y2hYqhWnXk5m4trM",
  "key34": "SmsmWJni7wfwu21YAXUUYrpkhxy2Fhubx22C9Q5BXCV5kasPmz4Z31vHcvkiT8bFLJbtcy8WnHtJXTpaLGHTrB9",
  "key35": "4ZQ575gZXqK6PZtr8pidrsEpiD8yx7uFX37HPHTCcBWwe2eXDz5R4GSUxxc16UMPfhm7GK4qe6QQkPC8WdJ9HMys"
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
