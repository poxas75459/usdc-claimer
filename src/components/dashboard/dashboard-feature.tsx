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
    "Jxc4mD4J5ED5iejrzAEt7PfhD8GWWPUTtENcd4QpdJtoLHPJmF6eZMzweggwC9MwASutCFWgj5noMH8v64TjkEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LnArjs5BnEgRUnFCFnn294qfVLgptP7ghu81hBE1gyoTuZH51h92VbPJwwJuHjfU3gA994HNzqjzkQ5vfd5QxMK",
  "key1": "34gvs3xpJRUsscKtNiDx9QHfVKwLueNPgn8jneNrsCUmin5XNe1dWoLYiERbHtTxV6ZGJWyGGQBCp5sBs8wWYiAr",
  "key2": "xfMauyHD1orvFdHx8qd8SvED9jHAUVs5eSpRLKy98qQnHYaHdfaTZxWYcvRSCnDVBZ4fbUu4CmbyKF8rB2Md3gK",
  "key3": "5RnVDqZ1s918VuAUEsrwMyAyqydqoZfTGniFxJoyHR5krrfSKPUjuPXCTY9EfYBzzrSYMSby1qXwkp6VyUMRdR1A",
  "key4": "2kdzNGAsRugYigNtrBppornTDPvDj4pb3o7Zf59PjbGFLiyokL9MVfWVppDGzjgvMziVJ7hfpccspHwpFAnFBQKq",
  "key5": "Cqa11xg3LPXk1Gub6tkYLfpbGenbX7dS7bMAzYuseKXsnmUpUFa94F6kNTK7JTiU3ZXtVQP9Qgc94UvG5xszPnK",
  "key6": "4WrjQ67RcGTu5d1Xm27ephU5eDAaHBCphGWACmDh1S2tGMj2psSV31VbDAM1EWPfhkq4WUZkoj3L9sVYPe9VNC2c",
  "key7": "5mUi8AnNpkQ5XhCHS84wWgtyFSUkodVivFqhM65tYrfaxj5sXrS1cxshLvgYVnYnoqLYQAGuA5xr6iqHGWYCs43w",
  "key8": "3iS3MweobbzwgPwHVPfmcBfaCdycjSNS26RaeZQeQygGiiPaXD4Frgq2JagMFBvMccQmyigEuQDx6hmdUjersKdM",
  "key9": "59WMKhAWnmpxALroqfEjZAwiUguVTiviHHuAQ1dhK77jpv2A657XeLNf78oNHQW77bgvsSPvtn7FPPhq2jwk54ix",
  "key10": "3U5rEdASuSzphXG5QPS7oo39pM7SxdBSD83em1M4J9WUS8r8URExd6uD3wbG93heFrqvDvxvW3rm1Mm4iZag9z6G",
  "key11": "3PVAtCK6RhCmFSYxoBdqZdu3rKCHj8zsvzYucsPrLhoMCu1nhChv8v7YAh3RevGXE1rK4rjKrMyCVwkHWB6bUsd7",
  "key12": "2gcgmJ5PpUKDoRUP9KA65j99SWgZ9yawmjB9GmVe5g6vdmhN2rfiUgJ1wLaNyEKo46WPLrLobqUe7y6Ba33wfG8x",
  "key13": "3praCBkK99x3KXLpwAL7eKF39kLnVfBkrpaFcLi4hTBY3Dizhb1cVJGj2yYpv2iC4eEqRFstL4maVMTaHfuEVK43",
  "key14": "2LJGAQbUFxBqTBzxHRvkTovkqshBceSdeYhEyhyYZ3HmAWy6PKoz1FD2ieucKVSRyERPQGsVpSBTn7gASQUh8a4F",
  "key15": "4GLyfqYZKGHDtMySs2FagPk3sSwvvN3UN1Ukswo4kiwawGaE97gpfYpGEkjCzruMaXE9p1ea6Ri2oqkfKmdMGvV5",
  "key16": "JYEZFWALhrpuCZ7vnappdbnNx9dktDQL8gGLx7yHnfU49GnF9gW5res2uMgpVLPcmyuSkU6iN9twzvyjt7K4KwD",
  "key17": "bxih1PrAZ88kymFnXQa3Y7CwRZmAX9aD3VMuv6dxmbYzCAEkWBxLWKS1DWZmKBmxbzSnSq47pRVu3dH8wZVa83F",
  "key18": "5YNxGfbNXvRiJzB9L2dyZQwqRS5SddoF2nELMWDarjYZWYJFeZ9Hn21qnPLMbKEF6h7vDRaceYPxVhHNy7SVK6UC",
  "key19": "5eksPCSXwM3UiFD5EFB5aSisJcYNyB6MYLBUsKGRpouZVveLFSfwBx3Ri8StcEZnEWjDt5QKpU5sPKF5utamFeCz",
  "key20": "45gozhyWM43oP74xyTynEmB6gFPv5HFbFHCbphBQrZ134zG5rpo6F1hjuNiwmLhnX2KuAc2doLUJWkc6G2TPq7nr",
  "key21": "LNHjrUzXzK7LQhZZM6tq5H4PjLp7sePcY6QZCEYZBiJwZdSxaw4LZX76ABhJGL6F3He7fo84Cdm9QkSa8sey5o3",
  "key22": "5pzVMaoAAHfMxFbz8htsccpgFBdGgRcpfiuPaSRbexRMeqPyAU48bqBoE65xxANL2hCPFoec9uCR8AUYDK5RoX19",
  "key23": "2i22fXpUBDtY1npNo2V4iQxD7ejvzwEMTv1ajvdi4P79pA9hehxvgqqu3haci3hohsqQQ1HnpmKsGFYM6gEqQPCK",
  "key24": "Pt41QWqjXYjQcN496G2MsyzuwewPP4w5Aw94DDRVYFj3EujoD9ewGK1dt3ft42FxJwq4E7uPJYJZbCiHUwt9Mz4",
  "key25": "4zYtc78FuE6V124TLBDiPyq24nFaD66ESnkfjYUYW3PzHUZZPnE3g3pUwA64Ye8uNMY7ZPPHT6bAzpDD9LLZZJp1",
  "key26": "k4eRbwsqjJ5UMgskzXhsowaW5iSj2X6aCytoCKAWaAx6Ttt5LM6S1gCYGB3CNqjxVqmy1v4Rod1VG9N5NTqMq5A",
  "key27": "4Lk5MnnjeQvzeuJfse3wd7yHtL6um9cRRe6h4B6bc6vVHMzHGR8QbqqaSABBYsqEQbwvmeXy6Q7b8LSdk9Bqrgjd",
  "key28": "hZB6z3sStUHFtXTYzRRvtGSLSth2tqkZwYrkt6SfNrLap3SX8HW5hGajx7dGUe7BVtWm1xVaSAybYXQTPbDLUt4",
  "key29": "27AeYWyiuQJJ5iZd7vYr5ihasrp8gn1wzA5D87rH6xUb8vBCiEJWBfd93xqpjKfmFyqQPHStHGm5QT3adtgxZqVE",
  "key30": "3yFeuC7TRp2jzNFW6YQghDn4DBvMJYrpAiV9tkLw6WF2S1mL7QUWeWYeMev5gaREmL6gbDBtuJFytcXVKWmPLsMe",
  "key31": "2hceU7JTJ4Qj7Xda6wE7cAeunBjVoTfBVepjgCgVhAbRXFrGAs7E3KSuSuoBzAyMHURSXrxE7yGBKgty9mzhqiaA",
  "key32": "3a84WvAFT8fB7vKZ7JYup2JeSHE2eG7ToHLPn4bNAXkevzRLd1tygbeJdXJVnGRGubR7sf2c2BKVrPc3e45d2xBz",
  "key33": "5ifVJtniKRmKWeVrXkiGLgH6drgmxHpmr7ZuGcyX47XAKuKK6ZGQz1BxZAdqx1eExQ5o1Guzpgd6LUHRcvBEm1Wv",
  "key34": "22Qe8UbgGRTq8a8GKQTYtE17brqmUBLezeUQEV3Xb5tMYkDExsCdg8KmyrxHNbnP4r9jEPH8n1EH8UiSSCf8r2wd",
  "key35": "64snhQvW7SvSp1UNy9WKXrdhs3MPLcRQMu5orjg3qpY8sMvbxPBzJuProUvDAceSZALaVCbx79PP1Zb8uqZQnFJw",
  "key36": "2VLKrZCww43xMGdtAjSvbRP3wJPhhfxJBaXwwEj3X6pvnQn4WeoxuY1ScNY3DpN6H8nAgphzmQhCcjYe58tunU5R",
  "key37": "59GP812UKipmL1TmNmEJRPYAMdGMqH7RHb54Qdtnm6heG6jz6DDbx4GQmGYNnpJG1pPWTTYDhFAkxzzURsXiVNXq",
  "key38": "23ePyhWG5KpZt8mSTXxp8zDAozXXfkKnoCkJ4AbWbfBgMiBbzP9HnAnf7NnGeRWYVRRQLyJpEcqReZprZKZa3EJe",
  "key39": "5iMpBsQ6pAZaAwdZCgwrAhGKYzAq5sxJ3DrZao2iHWW9EMp8jygb5enAd1r9MHuhv8NxQK3qiMsyZVPBjDzpk9mG"
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
