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
    "FpmneNXNhMEfxaNVW3si4WQsnG3bMKW2q7EfN5Cf6miisifCBz2mMjZHCitDQt4NCeUM6kqoUBVf7Km4Z2hmtZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ofCGHKqsTL72AfW7orUhYqjgh6qVaK7qW7TYuCuxYXin4jx6J7CMaX4f8trvBxHnSpcH6UTpA3pdy2bHL3aScV6",
  "key1": "VDLzsUKBM3nuMFVo9ajXgUwDjnZM7Tzw7J5jGGU1ASYWpRosxhrjBzFMd1w4n5UjkC3UcPY4Ri6KoqveYB3L3tE",
  "key2": "5inT5vdYhT3AkhKi9xi5XNNqwWvNgpRYf5ybLR7hXzEjSMaCKnTX2cW62mQuzNNTpV2tdVj2oocNh5uUvmsY6WTY",
  "key3": "5GLVQfSgmWQy6sQFTC4aNTdKoJsAEE5hX3K3dqgvyezPi22mFR9vkei7u8sTiVdx3iNncn6rhjRvWR4jqqSrQwrq",
  "key4": "3jxMCxCuM9UsNUUgwYRdBHe88eu8H9PTk3wa5VscE3MM2fRPLFSFxnHu85vra1D44E9SuwZSHv3dMYSbP6h8wdRC",
  "key5": "2RuKBcvh12wmCHyeAyGCJcBLKuFoQuToFDBRkf6usDauKKEqHw4pWM5AvfJayeDLxTqN1MgJ4dSRVw4Z81TWW2Nj",
  "key6": "3hZzuxvdVjiRkHADmb6Jf9EEhZxcsaKGGPaZz1TQRNxUFbqCDtnLEXRAte9j7q9tdDHznpBuBpmJZDAV1tGMkXHV",
  "key7": "3hsXVrFPUqYTVhmF3zPeB4wjJQxSZi7HxVMxvsXQLwZoRchZdTvg34nBf46hpx5Yh7ydVGm1LvyYht1vaUsrSE39",
  "key8": "3cqrfqHztEWRjs8BpfFkwJSa9oF2fad8DK5qH2WaN1n4vEUVfAb4uTgQoG7EFNUmHATu9MQhTgn6nNSRgZpd94kR",
  "key9": "33VcoxuYVNK7MSFCq5HtTYiDmWwKCr8Y2b7amGFULwsyTLJsGwf9MJuZvsdf2NSo9YcnQWRwbcvkn6gns8wm5sds",
  "key10": "2R75CsdMibjqUiaKoq9TYbL3xq6YkhTx3bFzZVpa8CtAaP18M4e9w2AUM4gqdkNL7ZdrAygXW2rVHC5qMjhAMkmj",
  "key11": "4eN9fTPbz63sHB8YPoDsZexTuFJaqmDkfPaDEHsWJbjeTGcwXuMjek9pDN5XHYMacCJct9mJp8Dck9yHtciYunsv",
  "key12": "5c5twuWH5hfJjENHF1YYYbiqbDFUMjr8VYMZpa3sQnhNtjjPdGHCBNHvQSCV7pqbcbJtC8R58hFnfPicqJ8qGLfs",
  "key13": "4zZdkZ1sYmRuwieRNxJXQ273dtXV6oUXodcs7Y1tL5ktCsngNS2qAfwa6jthphhxpgwicjiJaWJVyaiyfNwAVRGh",
  "key14": "NxwFxYSdXbty9rizqibCNS636jTVJzaNudQ2QgmkC8wecsc7kG6mJTiqZgAHQvJveQp949i92bCqwDWM3LxqHaH",
  "key15": "3YotsYS5xsCxSrLEwJimAoqBH9z8JS1D3ChSRZqKxwYWmF79F2b7ig2FTYKm75FavYonjQD8xc7oSS7RuX6EGfjb",
  "key16": "5qLeQEQ8q2Cus1hqo3aWRMo8LCWmk1Mdf6ENxm8a5LTH2nvsoTzEpJFFYsngtXJyYnGRoKZoMNWcG5j8Eb6hXaz6",
  "key17": "29VU4ARyUWAtuzetzpdxL3KNg7W9PBuKTqiCiPNQiihmF2wtiGBVfhNWcxUNSYL5sxxqxYGU1fdduPBH6ca1zUiq",
  "key18": "qEWCuVFm7NxXSaozvmuCtL1TAZqskC9TogD4vRAgmw2PawLNZxZHy8cyCsoGGmKAtwP89Yw9iTYKBGG9gYvEkFx",
  "key19": "3zAMwBJUF8g1R54YzeX9y3N3n62cTXXZkqFtX1evd57FrdNxVEF2DVAGPx41qiPdxBUQE9aSLydrLUcT4cZN2hu",
  "key20": "2r1HtWVa5GyKNLuRTRieges69UFbnvLX9tm1NaMve3qAixmqPghBktzpsouUDhcYETqw8kekCjyFs765TdKsaRix",
  "key21": "5LohrbvG6wYj8hDCEyApsvGk3UJa4gv93r2FfZHeSA2zh5Z7KMb9LeZTKQYYLmB3ZVJRJcMLwGpPbSgtTugjrriJ",
  "key22": "4sL2mrjaUdzYWHCxf43WeRuN1JMU6sCuw6oWJeXAs63imCFdnb5d3w32abqVC5paqzzQRQa1cnn2a2cCVtUhp9J4",
  "key23": "o1RrjLybwWyGSz7q3x1HMDyURgYL2mpsxhTKzpzUfk3Tr6B9VMqZBDH6RdPKAogtTQPWWbHYV9rdXMxM7Fmkd6t",
  "key24": "36ysjmdQvSav193XhnjZRJNhFi2N4ypFaTofiAHeVnQjbtgBzJ7NfZiFKUv8TDKiN97nbRonrVaXY8YRV43YMNW9",
  "key25": "eo966aNM51tRBQ7Twj4XL8cvHMXa878Hxhs5tDECb3WEYmGugy8jazNyqYUTZxFdxphSvVP3aGG5pfhUt3nbjFF",
  "key26": "ao7LcAVpUcvXA7TajWhRCbr6591vCU1zHuTDXsQu4QWAy8FdbeXfj39nqD93MJrxCv7qUR96qBRcae9inALqxdP",
  "key27": "4PUC2tueTTaH6UiDKMsgHLHNxNjB163BUmiyNwBqGBDhoSJT3jxkTFwtLqU8CpCLstG3FUdexqs8Tn8qyDf43qXs",
  "key28": "em3zwCkvS4JBhy7BhCCL2zX4V7i3wBAVQH8wmFyNZ9ehN1mrn4MF3baU4pfr5FLtum7nTbKi2RkQSnDQGgj8zsZ",
  "key29": "3brptAYb6y8QxjgTyoCX3RWqRK74n83FdG21oUs4HgvBTmJkYqwSwnXgyYhRhpHAVW9jpr9TBryd4EbWU49TT3XQ",
  "key30": "g52jTxjxFk4uQiJBws4Qo4Umo3o33aPkK4UvSJPJZ96LSLPVH9SGBEcbgGHmZ9JrzpBoxmT841FESjcFv3cdbis",
  "key31": "5mRcWMVGnoFrmFCJJtjF9tiry39apcpNYrVRR9aQ4NUmc4KjfdZiTriyn45XzLmZjJ6ireNK4W9KPEz77p26YsKJ",
  "key32": "5UJwwVzGXxkLV9hMnYF4M2ThXUAggY2qaPefMdEHZyxsbZCG4PNayhZVhcvJuRgy5UwmdSKKAndxzmv7PnXeMP28",
  "key33": "3KnUWGWGJBveLtsfVH5davEcNWPY7oRkBGYFCfSzSQ7eoFbEghL1b3NhGVvC6ULYzve3Z7G2EkMM5kNZuZZju3Jf",
  "key34": "42iPyEDdUCUxQKKS9eVNCnpbempQPeTnUn8NixCkh5ce4QEGztEYwi2g1bR17D1wcWf9LqypmEHABpVW5adHFLE1",
  "key35": "2dHrWZidfquYavRSMCmvZQHZRL3CMmijnZ92HSCrMQ5vwniM8WHJVsafN1Xg4wnM7gkcrpXsuugvpm7chrvsTVah",
  "key36": "2CoTdDBfmyB2rtWZytoCy5TUpoxL82wEU3tNbeGiXzez2n9uUZY2prNnqAL9x5QSE31ytFNDYX4hJXMpW8XjPTLR",
  "key37": "2YG9nonRtftMLRNLTRYS7Wf5jsDz5yJiUYRs7rW2qajKbLP31JPeyy82eSpyW3oV5Apeo8A5zM3CPzkqY6b1uG9u",
  "key38": "GLFYTDAsYj9yXDt25cd1miGz9tTnUzmTuAFTKXR4HTEm77XFGaaWGCRPTSi7zrjTHusw1v4yGzdaJgTrVr5eCpy",
  "key39": "5Evq8RDxveirQRTR8AyBY6vdqLqmX5Q3YwpRKBXsRY2tF75gwbqaoNvJYJssWqwno3EpHTbU8Dt5troRjscdpptU",
  "key40": "hMrZcjn8uQeCAkgEzCw4uZmy9DQjuu1zKMQmLWurEoFSTh9BJmmr6xvFfAyNQfUtCh3gL6ppYipVq8wvSE1jPBL",
  "key41": "4UMxZajpMR2dG4bEWxKdFvm7ZsR3Exdb3ZWUhPWdZzT53A39NTCTPcjsBveXQ8uRvLMTdhjcMF4oZbqQt9yQwimB",
  "key42": "34Kuw66XUZNvxwcpZSc3RUxtyZWStgMZvvwv5jBL9avTwwgNGXBcYfx4ZTL6aW88oPAoxGi4AEwPdcd6Ciex8ddh",
  "key43": "5okB7R1uiXL4pPP6hKtKfSsFMFFBV2bgwSvxYSxEoLhnpur6LY6EbUQoMbEr6NPp3sCUyr8zpQXSx8RW7GVKbwr",
  "key44": "4wDQ76SfWhiJC9zuSCH26nJ8uE7SoYtZzxSmMuvoXk4KR82p1M6Wcz4deNC4pgr9DKsZHUa88kRgLQhweC8TLszj",
  "key45": "34ouaJmvmz2V8aQExANY1WVq8XekCzbfSdMbWHPcUckLRPYcMFVYSW9qZPmwcLoPkugHPeGfuUWXhAxX43W4EXMH",
  "key46": "uut3gwVrBER5SbQfHkS9LnQYWQepVpFC2HV23CEvZv4Cd4gUSVKPr9xbTZxjDjmnbTU5bFjLxjwXyfRikWn94Wx",
  "key47": "3YZ29Jmz6KA7hBUSekCHfQF17goMU7rFiSyvSz2c4wzkBkxYWnm7DLsJftx4TABmJxA5nDEb1nNFYVds3aCwEcEv",
  "key48": "4ekMZy98xLZqbf2qEUBdYfdSRcWZeh9rS2NzmNuSXWeKKre8YSaM2zCrG6EtxWxyJSG7HoxjsZK6bAiNk2YCqL78"
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
