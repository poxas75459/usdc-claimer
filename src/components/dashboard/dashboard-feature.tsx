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
    "2PkRsxUuSazX8VRHDQS9myWoiWbn2zE4UTpkysChW6pVReAiEvvBYrRXvdxvThgLWhuq7Fo3aj3wJrtMKjJy4163"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b6bzSB5QTYGpbNHeRRQsgdbY4NJXqazxxLAj9XyRmTTGSzSuxs1Z1r93jhHKH1yzX2JVsd7RRsngaVtqQ5sR47n",
  "key1": "3Tx78cnEDmTCwhs4HAFZnwq16xXPcfdd1hxQzwJhadkaJFjNnLr7n2qkqebHZSrWpu9yuqrKdN6JeB7rSvS7FD1K",
  "key2": "5gAfGpUjk5KSLY1Xsjjz7wyBpqSfyjcwC6DnHTucPkmgD5bzwxNk85AUaeAbWBj6UsDNWXMHrSQCUKNpBqtAxLXw",
  "key3": "3LQJ8Go9B8hfYswFct7Yv3exeeRsRrzzqmQpXtqnaE6jrtCTu8dRB88yubYEnNyPE2MhvMytFVcjGdddDvpqofGD",
  "key4": "5ZhmChnQZusG6aTKcsHfDfU2apggRZBdQHqkcQ2zNoc4yLx3AsbeFz5VpUbhmnyLXebyU1op7q2ss5ePVV8Vfo7P",
  "key5": "2AAiuuKreAsbkSu61iJBtebsCm4sDevFYVw3xdXMgDvVbtZsdrGu2iZJhe4HZEe4CeMkwUBrMV7ECxJuY3oZA1cj",
  "key6": "A1mvQ6ktGHsYP2c7SxcvsdpkiQ8aPxmZgtHFMz9AEMweGXsZDprtUELrxzZYYtpEhoB3e1naZ4oAFk5HzToqFCu",
  "key7": "4BR1FqXaZ1iKodAyF31neJKzSHFxqbUrNfhpbzz7N7Bv3jJQBgNCBgRAtgcFQ6Wwfmz14pXX6wFh39WQShZD6Ynw",
  "key8": "3T9wKuYgucb1L3tYbNyjXuMmZ5DTeRzE23QJRMHpFJ8gBuZ9DzpEQT2HFi8zY45x6Fb1NR7fvrNYpFchKZwN6Ear",
  "key9": "5HVopCvJwLgf3rxJZbBCvt6AyaEL2BE6JhSBFmU24KKt6DLkzi764ZYMKQ42askr9vDpawByK3V4mJ4A2d12xmFL",
  "key10": "4G1mS2vwk17DFZhxVPf1eyMX2RQPuH9noVkih18AgdqSW96upBrY5N9aJSny3Eugrn5s7guMcyvytz7KLdRUkTUw",
  "key11": "4AiXUrjkSzFoDvkKhA25aXEQZDkigTT4rF6zrRFibNa2vtayGqJoGmsmQk1g7Gn3EeeNAUbZvfEyCMZHnhwCkHVt",
  "key12": "3P624zChY8yY5A6QiJz41iRofnkDxVpubqsxDW5QFnWChZjiamniMabaThoHeb3GDZyAknvKuWiXkXQgMjtnKQo7",
  "key13": "51s2wLXz6EwyZWS7T9Z3DYfxsCA3iGWfjQumfZmH4y1sLpwTjZeXChBYzwpppN6zosfNcdXhNACEFySdyW7nyPBc",
  "key14": "5NruKfbqhpz2Yk4z3ViynQwtzJPq46QkYuQ4Rxxr2XkaKgmXvkkyEkwo6Tzp7VdN2NQemhHJJE4RaWAfPoCmiZ43",
  "key15": "3nJk1PmyhRRVCHjkBhRcKonvW9YKMz587sA6sQBvgVP94sD6pKGhuR6pQdD2N7ba2A9JgHQGLXF11creSGfeJ2MK",
  "key16": "SPqG3t7eLgvgiNJR39vSoNStdUsou9UWcz4FpgALxQtgPbJkjsihX3ATJbzq1MCdA9mQoo5LJ8qzjTLwUWryg6b",
  "key17": "2dauqJRtt1EGfHgqxVMAy6FW2tbAnCf6caGhcmFbQ7GWYyD4Wtk8sDcXmGGUDBTzrfhkgJYWEAspERkKJhaNX6dc",
  "key18": "5da7DtVtWXJJxGiDB4PaoHZoYu8of15DjQKAB2AvKWqMfmuvSTAtaBh4NM97weeSY8qUqRi1wVyqDJa6XqYF8PjN",
  "key19": "3TApuYh46jGnWDbjXm353jEGiMBH3JDeDyDVEpAWdch9zKLzWwfXyZpK9y2Ce2uyVJNYmhzamDYaK8mFAxNYHMwh",
  "key20": "5G7a2Axo4jPwTQ6aDfEmEXtq5WqkrmvH5jN47xdx2j5ddai46JR9W1k9YVSnqTkC1vxgtuToNwAe8DF9LiHfsGsA",
  "key21": "5Mvm51xKHS7LRGbuTR1XGYZw74weeRjNWGB146m56pxJTP5oWFvns1Dc9RCMq5VcCnr3JGUmivGis25Vq5PJoqpR",
  "key22": "2VFCuXDq1boq7N1YkUdf3gU5LPKz8QcrTkUwWSdnYTTdCsShkXN29Ufgb5sCxaVX69rofxmiq7usv2tu5xP4y1gd",
  "key23": "i6TQ3EJmyETHc47sHt71LEfidmb7dxTTwudjUayYMvzyHT4ckUVGeuRCiBugdEA6XhqnnWzupvjRip5Z1LnaJqw",
  "key24": "5rmnobHpDGLZLn5TABkLVUYF9DTAGjvDAnnNcBGkNt9Peuu7yvVTfK9Xw2zwYJHLypRfVJXyhgDuSUsj9WbxdiUm",
  "key25": "61UU4JM9LAKCWrjhL8WLRryupF1R8qLreS7wDjV7jkdkxTvb2uh2GYaA5Mgg2kDUmvX93uBBnZyXpzdCWmSEyKij",
  "key26": "vxJ9EaZGG8ivBUKtnjVqywV4mwhNMrJu653YNfYqcF9cdC3BN9PgSHo8ubfFh2SBgNoQ688nfw2fLJsAbMbWBrG",
  "key27": "56phdxg2VTeKyTEHj1JWrxfPTGtppQ6Sp9Feg5uAFTVTMkWF8yAt1aJx6jCAuRnC2PTMjk5XKDtHG7mrY6Jaexf5",
  "key28": "4whT8TWTF9c6DB8KuyEiHnd2YV7QpBi8sNq3jh3W1PVe5KTpp6xko9iyfFf3qoKf48REj8Kq1t23DkCFm1fNenLD",
  "key29": "zNw6SHf7w9qKjcg4pCxbDNkZNgCYAhWiN1RX9mUH8uWth4o3gP8RgaY6VgFbnqeeb8FJrSZ3Jm55rFujeRjZGP9",
  "key30": "3DWiiHFUXxhaCyDUHhb8wHz1KNie1ffwRHjFt4XjndbTi9cy1G3LoUfywbov6hfATZtKd6kutoNzxMtvQqy6STxL",
  "key31": "2r6SK5FrKhgGrioVFsAzeDvjWNoHMjihf3B4JmTaeRaMXXPUqmahbfrbdLRdV9mtGe1ib1sBjvUZjXuYzMQ912zh",
  "key32": "3RvJQCd5WyQ4JLFWMox6pejSL44Vqc6aDFGnxrfr9in1aNzKoN6Y9YUhSzDvX1vmWeA9cfsbaEbkjmpiRYhbdzTm",
  "key33": "4pME8SZw74KGUAy5ngg8kL6suUhhM6H6soGmCKjcvgcWs7pdfY36ak7nhLyGvzXX85yNVrGjpkcJuadp4cTPPDvc",
  "key34": "3qmjKiUK9iP6gu3KDwHXVoAJKrWa9UVj3HGFp6qrChs4DJLk1JkHPFwi5Jit8gT5B7TQgL4f2EpMiQZvQKtFef4b",
  "key35": "5F2tKUfbR49WuRebdVnUA63NcbRWRjs7QKwRTQNWK6wCgK3XzDinhR2uWJz8VySSWGmt3pEQNMwVNpjHm7cVnykf",
  "key36": "3WMmNW3x6zeQ15gHLtscpueKKteLF7GexWcRjkfHRaKmCA2jNdKhqh5sMmh4hUs5ujiocfaomVcUd1YBeFMNTMbM",
  "key37": "3mJ3MhXb5HHuqMeURYSjp7Nnr4gUrJCjRXF8Urskhs62JjFTPFw7CTDnbkdBYH1mHZ4wR3qvqkPWdf56AZpKvxuQ",
  "key38": "vqCu8Aen16AGqB1SM4y2No9jeEHcoixRBNPzinEeT1bUEmqGYjQwkBeSpbpYNHQhzMTtXPwKDPWqdcn1gPKFMX6",
  "key39": "5TVvPCVhAFmZiGH2THgKPN1qwBuBi76Nnb2EoyxkJauYX7MEbBXj2C9AgoM32cNbnaXzKzjJuGTPSFpQvmFBpbjV",
  "key40": "673R4uJiXkRBBMRVVKXFXzS6sSRSE5GhfjgTqexwmxrsXBppRnBRHcczM5CeyAiwzJjqauejWb4zsh6juXA4Zggn",
  "key41": "4CVTNvRW2h1nw95RtYriVEd34D61aBctzKVNyTxfVgkSkEpUwirrX597eqozhKvXsFwtpyCyJWU4LfukYcPDRAjv",
  "key42": "VPvhUTseiCMJGNS1HEvf2HqC7n11s6FAo4K7QSGjdrVq3y7PwP29WTKohg68mVfRtDqx1kc5k1sd5M7MAsmUo46",
  "key43": "5uUsVJSRH4cRQF8ab94ETC1S3ZnWrjTKNnDKNM1Vme9YbjquX4YggTZwpTxxppGHhRdpeBSdnMyrYBucvqWqw9kq",
  "key44": "oe6Ra3kWkTLntMgdykLu7GRAowgU3d8jyhU6EcfQohbgoD8B2NQ4tz8BJsqRwW8uxGYTNT4RKCFPQ2TDeuGj2yW",
  "key45": "wDbiVd9r65FDLUF1o63R4uYZRUNvMhXuCSPeiYZvYXEewBan5P5tHPzV47hvfbaug14kTH84NGqUACrD3S1qvde",
  "key46": "3htdDkiDnAWUU6Q3Xo6KU9R7RYmpyDd42ak1ZPDggtUPdAG2VWfxMwqtQFGqnSsGmH1jVaDNfZU9rwtuXMEvgHer",
  "key47": "5Ao7HfM5kBWEdish8dSpWx8NcSZqToppZixUyvVpHQFiF1rUh4ePhM1JoyHhPpXB5rBadCK3nDo1J8X8VePiokvc",
  "key48": "iha6k3MbsZSqvGxzw2MQWtyVgT2bP63oisCT8FRm1oQ9nwpnaTL8S73SmiEoC4eBWT6cQFoqAvx2EgT2QCdjYax"
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
