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
    "4Y26uYnREsaWHaicyUE9NqZ9pNzvthrnb98T3u5RWjoGKNUn6FzzaxiTJ1bxeUgnx3pMMHBnPj9woJyBr8uEMnqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39VosHhpjSm1qYn8ScKqupkd8NXzZEq65B9udM2WUCD9UeapxpTkajY1kpCUNtGtyS88RinVSGSyJdEa54KJAXyY",
  "key1": "yeJ7Rh9Z8LdEYX8bGCGQ9pxkXVUxyhSUKugz5xbUAJ2CVvXpsaFyMsxxk9Afwupy9oPthGTBmG3apeg8qVXChqF",
  "key2": "5zucLtHVYYxidLrjmKzLmfNL9k92YvyQaSEA7wjPYLtP1bwLEtUG3h8X9CzJMxWJLtda13trBqyxwy3onxHgGkA6",
  "key3": "2XwwkKARfk5bYPhasFXr9b6gADaV6ugHn529dqwokEG37hJA5rzz8HQkjNwtpKz2SgyLSYgVnQ5ekxgn6NnHB7U2",
  "key4": "5zDPjePZBzQd6q6DTjNupacaDtrxpFGxZU5cWHaUu151WfqFvMPzuUAHsRrtE8LoyVAMMQSF4rCshTrkmvZswQN4",
  "key5": "2zNWhRzAJU6uKcTneDtMZXKTFazC8ZVyHv7qz64W3HstwnqtFMkHhwhKEumZ6EJE2aP7nXfoGGXgnxxCSHazWpdZ",
  "key6": "4Wfytz1HM6CwpA1LzA7WBifi2JEokkYU5ncVKX27QdJ5ZuzLnVerXzqD1qqC312LY9aXzMZAEWP9jDaZjQ55MKkJ",
  "key7": "dJzWY3DSztwavGkitoHSrkEsgSD7bjM5EWgqYq2RQDGdUCqRsmdb8DECXvpdxccMtnN8BBN2pctAVJ4Y1xqXcQ5",
  "key8": "5GwwmqvL73YPGaa6fLEEtbiGaLwewdBP1LaqGY9e32Frt9GSDEJHdAhDiWmVKdF1769MKoVZfDqdhmXP2aEarXPn",
  "key9": "4PDGQdajztNpZ4c4cQ9FTLVjcgdDXYsv7WK1DGm9PjMSQ5Rjq6RbRmsPSYhQzV14BkgMyXgjRdGudkyG1NPBo17M",
  "key10": "4VtDUZrsHjESQRpcQpPCa33QgggFJUhJre3JjFBpN64nirmhuVXTc1o4qXuEWfdwt8DKN8jD9f9mDo66qzd2nC84",
  "key11": "4L8yCwmJzar8hvjetMmDkojHqutQYYm9aZW2bEz5tFivFY84svTpmuwrd7qgMYfgphbLofbDst5vVWY9Fz4JCW2k",
  "key12": "31CuPyg6CM28rguH9coKBqzq3GYrcbukRDpuXJd5mGDehvUioN9fsj3RHbCPzkKHCEraZm8TpbvWwkh98aqv9DPT",
  "key13": "5B9xK21S29pMug77EhoCbptKSkiarajKNxhgRLKHLyHUGRwEUWahA2pPdhZdjzQPQSRHqxTjqFPqj8J7qWaDH3s4",
  "key14": "2io7EgYunj1RxKhMYqCey6FWYFzwYyARe1Z1k2hcPSaWS5XLMBPsg2HxGPH5AJUgJ9ig9h8w95JVWC7UpPPGoAyD",
  "key15": "9wK49bUnvVFXizQmb7hjbJC5buZZXDY6ob3LNixXCf2m4hgqY1P56oyDcdvY3oL2EvyY2qiASmnCJw95oNPEBNE",
  "key16": "4B91yKe7HZVHqjc7K9grtQUZbA77eYcwniXUcfSPH4LC8KEuJdTdiFPZ5x5vP83wvi6ogyNH54UUhWUdjfPsw29Y",
  "key17": "TFp1ZerPo6UHcgqkBFQBQCoPgdXxbYP5SWv6YxRfxBEbHkyPXs7WZP58ULbctkmwn71qt3A7UL97AVz38fYpnzm",
  "key18": "5UyeYnZok4zbCgE8BtqYbkp3XfoTgu6ULunJVQLw4vy5XSE1LrWy8PT22UDYjeXyvFS7TGwy7be4NuEntTHnyvqN",
  "key19": "58afxGH1qg418ky1GLELqazYPXNwNxztrM8nvnBS7Yosfk9515smSy5aRrat2x82RkWFuxT2zW7JebPrWzki7bqW",
  "key20": "3MnsfQj8fWFZv3AU4vgEdtzbWnELLKhUTsQz2hJV6QQhYFjt5BhTPvLVVdeoozUGA8micMrw6iph94TwkkibLMq7",
  "key21": "54kV7ixUqmY7tyqze2qsDT5zL5dhwM7p6WPQzaeUcyvsYNG6rPpax87oJ9YGZdJ7JJkWus3Qzc3Qp1PDuJXRe9BP",
  "key22": "2Xv5n4XCVtAWb6rLJ43xUwRBiAgNsPFr1Q18NgXP5ci2YmeYnZeZ4yEroJr3KyErt6jCtfK7iNuQcPMgUfT4KZMG",
  "key23": "2ccaa2NRfgX2f6UHVbceVEjj6XGvArUG2wtVg2DfqL6MueffVwScGuBVhK39LPc2ndTQxSu3imSyiLrY6KGcqEDS",
  "key24": "2uZtRgseu2PBzQ8Gckz5nV11kLUjHzbWbjcUUZgzVEuYzCCZL88PgmAx5VtZMojWBCDqAgitn7FoTMWqvj1UnFSs",
  "key25": "41TiXc9hafJ6ucgf9Hv2YF5WvNSjsSc6GKFQfyzZ7NY9nFtQ5rEwvwyn4a8vZ2ZazDUPjhENypaJbddvDG7VrnMW",
  "key26": "4vsS7Rb8U9KFbhyAWYLJhhEG3U9XQEdWxD77BZizABfzPcookG7u4qiiyQDo6tVREHSqygSsdeKm1Sp2dcddwzKW",
  "key27": "4NpTn85Quh2wAimD9BURnPeJwzuWVnGKd6tDZDzNuZ7J3bZZEV9k7an4H34p13sS8cfKm8wTGsz1MfJteabFXmiV",
  "key28": "HaXPa9aTUdP8rZEpUQ2yHs74fpejF11Um32rGGm4ch4mpABVsVJZYkXtmTe7iD8SHBfthshBTq7mMnvDq3o87gT",
  "key29": "4X6nBQhzSRxo95MtZgRQRUQqShgappzzMc1qZb8SahoJR3cNzQGZquWjW12b7szbBKz1enTUtdj3uCv1HDaRXRWk",
  "key30": "5T1PUEroU2Y45Mtfi4NaTMFFLMm6ptv4Fs3DWbKpSQszvsBbuUGuohPXiFjzNzQJvs76pQJzaqyteBMj3Fo8cUui",
  "key31": "15D7KY588PikAMZ3CwFRQQeEgcUFrMMbQjwiht7rN9fLUfLbHWwxF3tRdjaTHXtDEiyTkJNKEjZ2oS6fTRDPZbE",
  "key32": "3gkp4aaCZSJHyp7BcARbEuZxWWu9useVmV5e6Jw7DMzHckkYmhThgHT7cxZFVhSzteSxZRDKv47mJnnBSb8w3sEB",
  "key33": "5Kf8bYm5ihac1TNSLTTJrCWFMqQWCq2Lc67vWuNCy19kWUrkKGgYr5AGAVYdC5e1DWNDfkZtB7vfwEVtJFc9D4f2",
  "key34": "3FHGsNCfjnTBNLFkLJAhPJ6Z97a9SafWZXiNC9QQw8ZTArP86tCrmAR6gKH5FRw2vvPCTq6SDJMFRGX3TanEzbLR",
  "key35": "58se7N17xm4kTHCeZ9ZakDWFpZHjs6W75swNYC8R719aEXwnBeo5BA3EnG2MDsDRFBMHKgry6SoA5EBxDo8aDhSJ",
  "key36": "1278f6SZV69C3BRasZKxoPowKSDuMWbQoAFibianW4QodfAemjHEBmNYHuHGXPRGMvL9ZeRS8QqATTNLJsyKvwtd",
  "key37": "2hKJWPPCQCDg7EkNpUFgrnpSMZukqLFn7XjnCnsQ21gURVa74P1XB2MDgJKGzfQQW2e7mfQ3Dt2SwG6e5MdkHfQA",
  "key38": "3RU47dyuUTca3FYMLD8yVGh5NHkkJAtHUPZADMqph6kve3XjjRQd8bEhpphfxChEXRuh5ZX4LBxcXMAJYLPwFpdZ",
  "key39": "2tk2eP3KDsAj9eTVJJ6S8VHtap83mHqvExdUQiKoYKyKFoZLRiSvifUQtK9m56VdZWpLyUbXspEEbMDt6Jrhka9v"
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
