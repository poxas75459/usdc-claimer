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
    "4NjRvumrCkWivW96PPtnnNuG1KduJAyxUuUC7KXwatGSCDtSnFNeBtxZXtipU1DVqoXr8cSJJsrf8ED1vDCDKegy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sYLqYWPwEYfyHFZAx6nhvvfKbuvyLisDRNKvScx2ym9kfmpwF3xW7jVYf6Tqnx8UAj88FbPKdyqNMKv7bqzHi3R",
  "key1": "45N6V9VpbGGBPwkRTU1S4zZGo8z256ykxPGWve6XXSUPrRyQo99AjNFzqv9tenB2v28ayHJRLKx8XtcArFKhwHRV",
  "key2": "64JyJ2M9jgVrRnkDV9Ljn25Y9pijbjWk2oUd9JjrPk8bAQYFwAuQ2hFfNhCoEXKuyDqPjmv7B3e5XqJ1s2eURxUf",
  "key3": "2xQmHg6JeGCzr9NiFoEPnPBae2uRbweYChvGT25QaJXTAQWicqKB3S8W8KaJmXLnBW8fFXdNmvYRC4oTazevGEj",
  "key4": "4jHbVCB7BMZnMTePuAZQt4TStCnUdTx9gH7c9h2SmAueFgPEJ7zfEAqKm66M1CxQ3wxsjpv61tn7j5Ayp57q8CHR",
  "key5": "psExDUuuLUHYqZjvoedpE1Z171NawLaUgxw5FW6ewDvx6YJABM2eRq69HADCq7GLHj1QMh9k47PFi1e1iAWnS5n",
  "key6": "4SALAKHj3zCom7G21Bq1iN8ZzxXnDqPaH8LoN6qW41BxmP8Umu7GD2fHXerhqu4S6nhy6YA1dgAavp2fuYHTfTUw",
  "key7": "3kQ6c8xNEkXEkRaAU1FqYoao5HAfZ9buzmo3ALRowqpm9CJKPBY7uH2uTqa3EsfPsVRxeGdb6JETDmTHaKQjgWC",
  "key8": "32RwcvW2pCD9U6mi1mkC23Rp8Qf84KbSvoxz88p4LL2F86RXFBJSQmX7ZgBW4yjUUc7xcj9kYXVEZRhFJ9UhRy2z",
  "key9": "3jxoEHjLm46QL4DncC1W2QNuiNmpuWbiAzoUfcwJwTMHnGHELk8DW8PMA8iUo2sSwXNR5KHVbbsLu9nNR3BnqH2s",
  "key10": "2RnpwwxLn3amkkoaQ2PWkUdDEVY5c1kRBzih4xDULLGqpVQ6whXQuVRuNKhbftbKvQMsV72UedC48Er63cv4mKAg",
  "key11": "3PfgmKDGvve4oPFJiYWKv69tFr8r3VEYxoXhCY5CThkc2DBnVPuR4EQfCs9Cc2HbASRS8VPWg7BM3jzhqRfsLe8q",
  "key12": "2ueW6oCgd5W4mY7pdKkY6AGYYR6bC3UBmdqCh6kcbmysMiDp8rtEhG9DMAgMxbTbdwau1jCWpj6JRmyFjZVd9JwV",
  "key13": "4XAPZ3RxwbEAFSZAwrMi45mrr5amHx9U84XTtE14hxNz2Ve2m3FcEcmJpNrzReS5bXHLLvAuoBPwrwqpBR2FWSHg",
  "key14": "3xUhsXAzcHoUpJ6BCTyjbJMYAh45LgKLb5zp2zuS895mXkiepRgca1r5n65U3Cb13TU1YLtEj7HPMefjQYUtwUQG",
  "key15": "xizsg9z7DmeUK4pVsjLfePaV5KfLC2qHy1QyfpYAnWy1e1cjPSiSVsySBokZjWXEVZufKgF8tf49zEVRjVTW4u5",
  "key16": "2mvUN94xnrvU7o6S7YBhrmaivPkrUV2V5JBGGAou4HdKDvyB7GV5atxXWS3tw3yi7xovYYhP6zy62xYwDa5rwQqU",
  "key17": "29zBrRFiqze3kCtxNEncPWzcBsorATWHg5FgBK6mEK38H8Etg4rFmgrVe5PCy3CTnjXrBjnStjy6YpcjBsfRQxp5",
  "key18": "3uVrAPMS7jxuUpuUwb924mQvrGtG7bHCRaZukDHS7v8Y9a2kcb26DQjZxeYPKJGjUYghZN2eNXtBUmugtwsUhJmZ",
  "key19": "3WF4v9SdEPwnj5mPHk5WFrXQsmFf723zQzEBLxNynApxjutZkGfVyu2s2ZFRDdogv3FfYELKF6sQAXmTYB7RWqfJ",
  "key20": "2mMGu4TjdDJssHB4X2AFsKfBigiDR5fFRwh3zcWPhMphm6y18oKYy1qYwg9y77qGcWeVy8xoQ7f2fCk7NCeXiwGw",
  "key21": "CA596y3ThcjatTVSeg9uRdS71ofkYAwA1FxGj5841gvvFEWo2zej2e7mNPYJ3YTTjREJTttK8Xru7fEL9sLH3Qh",
  "key22": "62CQxnTaHLdjV7yC7W1TMNMGgU9zZqRDD9U7hMyLj6YNt141NnNVod7zzrvqA9dfe6ouaUooYVFFMdSayQwE4yoP",
  "key23": "FeLNG8fKb62FXYkBt1yrWtvK2qcM3L3aCgsn9cGQmarUqGFFjnzg5Fi5m12quYBm4LqSyF7jCzH6QUd3GvqeHzW",
  "key24": "55czqS5bKAzuhB4MtXT4NY2w1zX7z71rshYQj6RLiHyVG98pDkskUdzUQX75bDqVJsQ8bitaJmfujWJgiSgMpbnE",
  "key25": "4BjXE4WRnECPVw4RKpH6hP9TBvK9s6sP9NnFWoYYEgFLTCQzjWEC4LomrRsm4UqTLqgD1jEYcs3iKE3RWcrFRgT4",
  "key26": "4HrxKyCwwSTRZXduyHgvRZHWBAi1NHTMYRBZJ2Wa9DoM6eP1KmLwHY3U8yEqk1CT2XW2rEmDncCEGP1NejXmZHvy",
  "key27": "3EkxABonDHqAzBCbqskEuGciQrhLToH8EZYYJJKXN7EJYPp1Y8Sy1bfLUg1VcDxVLfTD9VUE9SLUr7PqV26tYhax",
  "key28": "4r7bDWvV7HqipyUwfN73BeXspHCy55S97LJ1uMSuULAk3ZgAuEKB5Nt67sWTb2LdUvNCJZQvATA75ouKP81FdmrJ",
  "key29": "3fLaFQvf3zCFvm2wb4LDKMWQiYoEQWPKMXE6exr4qKiPehu52xJxWQHgq8vPMNE2dPHf8Jp7EWGtP9Bd22spVY6E",
  "key30": "42WgDVc7fTYB4WKkqhDqYLKtQdMWrCGpcgw8TCtAKi9XuevFfgsQuajVdjpSdgarqhFxjKwLNPPXC4v4YCbxFD5H",
  "key31": "PJB8EQgFxjRQ2uhCtS3CZieKFoW5iGY8ypJwF112epLT4D2QKL4Xr6WU29sSVjVCwv48WDVVV1PoiY4azQqswaw",
  "key32": "4oj5pT2Py8zfWBiawT1WYWAt7TbDWHXMGQDF1tyq5dUttTnZbfXyFNiq4kFpZ5igQi2NecGfEGfjSvmFJrRHZVXF",
  "key33": "341Z3kgbQyUrM7Nhgka3ZNegut7HHCjCRPfbANHgJgfraEt7qd357jjHrgRHZhD3YQ7Y7BBGAAzTBxc7QqkaMh4b",
  "key34": "3eXtu5rvCkf6ddoTtUfEN4Qy1qEALTjsvP8TtK1FByJjw2W4NyvoEUiaQaSzF64yzNWZpp3c4f2XJbWJFA1mv448",
  "key35": "xQ52JUZEKZu1xVuEyKzowQ8ZwWoouocq7ou8sA5PeVGGqmD8KVVKPtAbPR1LXgnbkyeew16kn4RoA4jTeFHoso9",
  "key36": "sie9E4jB1LHw3QnQjaRAh4QbaRRXzKJkVW55KH54uH8yEieSjLbyPmaw4hA9xqxVZ8DFXQqjkYtm91J8NZT56wW",
  "key37": "3DjUdGvZQmp8V6pktkXjvhmDcewvuxR6cGhiGLEowR7sfCnVQmQPUGAMJng8Tbp5i8ni7GuzKCfttJfnLENogCgD",
  "key38": "2pARSUaXb4bCdvix82CEg9U41iX466k7BmpUuEKqbeDtofNoGrUqEBaeU58hMqgh2XH6RQUmanmjieS69Ko3qf1z"
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
