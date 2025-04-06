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
    "59ZnnCUmue95rPZTiaW33x9o9UGz3ZxPZoeMJ1x48GzWWFuPDB7AmYGfQu5ff8mFQaw8NcCSzgdgmDtMXpc3osYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y4WZZxERw1w8Sygqk7iSPhgPHoxvcMuUrmX2AGVijECMbRLbQFsPP3JsixPd3jdL4iaL8BnFQf7a8djQo1umVGz",
  "key1": "4YpPRT67EHNc4XyRPfu1LSpsQnRx76roLggtMZBqdwoHSLmmRyeqbH3jZKNPSe4s4Ln3T9LjiS3jQ82s2aHceaRC",
  "key2": "57ypATkC96VC5oCECfruC9uCYxCfSsu1ncbR7dk1fQkPCv3p4s9RwkM9exFFEG1mKR11LVK5WtcHyvQa6Agh2aAn",
  "key3": "NceDB8QYhXgpy1NfabgYJbcjYkJTAmAm2ujBSmh52vw4ErwAfqEyHRCvPTxhKodt6x5gt2t4JjxU6g8rcVaj9if",
  "key4": "36b4mtxz5cQvRMuFJyoqoLuC37pmPFSMnwZSB2oENgz9ko5EXGt8K2YStE6vnxNbyqu5diMXoaoq2cQrHb8Ymkup",
  "key5": "3j9VGLZSs7miWftEKYpT63jZ7U3xS863vMgZYVS7FUnUNxwX1Jar37ZFab6Shuq2VcXN8yup1ddBShTrUtSNqbSw",
  "key6": "v67438Ljbd85iRngZyYqvbiWT7npC9NNT5MLN4nDWdKUtAcc2xohW7mD56eoUg92FiRVuBqZv8jLp8zcLZaBs87",
  "key7": "h41NqDUH2regdhqcEQSe4uFUeqRQub1kZUctQScYBkdaPDyLK6J2uEhyYTkGysxT2JChyv31wgSL3XeYynAVJbr",
  "key8": "jLc5cUZjHwJ3rzT1kAcQvhvJ2G7BypPP8wpeAwBHQ1Ka1ekVYURVjhL5eGNokTKZhKxuu4jnYdnQgRkZfS5gkwe",
  "key9": "5V67xBpooFt2kGN8wkwZE16sQcDwhm8F1PKWzLHsqrMKYfqRFk6J22BWmFqMtuNGeBy3tBKXHjv6tGqSVGG535E1",
  "key10": "44JLWZrAfwTbq3Wnnv5ajaRoRx1SyczGmPd6egGsuJcu9hCR3VD5UDmJpeFMmuC2rda8e7CKQzxkXjLmT62p9TPK",
  "key11": "5sTdNfAFanqvLGduAYZ3KARZRD8LPzqFkg3wzYpsomWrgSM6BHVBbw96oYnk3YFdmGhRgnpxt8kzudZa2P4KoaA6",
  "key12": "2fSfFLXWegxRJgq4417PPkTz1qCjAHUGDVkbHKfH2e3gMfR9N66Ypj63ZY8A3krmBaD1AskgJtJ5cJZne6KoHuhv",
  "key13": "64xdSZS4c7g6jXK96fes2juqp3pDvRMTtGWgjogLHBUpqQdhzELKENYZxdjFhGCwQtpF6i3V4yM1Sxs9vNKwdBTM",
  "key14": "2EyWu7kYRKp7Lop22SecxjDKbtuh4vHjctqnHEFhXpzVLCtjQ6SSsS1LLVkLsjYudrztD6siK7rPHurQQNMvxrFu",
  "key15": "mngdUkmuMyWT1mqFnVwcbHCCDfcY38bkbNpR4wSP35xJr7tME6NPCXFTtn8S9xMMcoX1BaBhVUudC4UvXdrXqCU",
  "key16": "4dErgtiaqrypcj9zXXNWmdvRQdxKh5tSqSTxa67FdveQABJMsF5WVYozKnemLWV3iGu5JomnQhL1qap9ASutjMjL",
  "key17": "2Dxtx9jMkAM1Hk8MrFToMiqwqCLE7JRrZy64FLbdpNbAYg3rU4U8ZqzMu1sRfv7e7kUQVBfZE7vUCcsQCePZBsUB",
  "key18": "5LQW2PxZ6m1k7XqgbySBd85dvzxsmoqE5aPrpZZP3kZ9WaFxePZQ9dn8DZHXeFhocJ3CtyDXyMxwTctX2MpQth4",
  "key19": "2HC5E64qZPKK8RWxXdKDk6v4YvFxTetrmw2npcznvGZpmatEENv6WrUxmh7P6fuCr5fR9z3GnZGJ5U69SsgpTD45",
  "key20": "3b7FA9x6arePXKz1ybygsnjfmL1M2MRe1YqcRSCzm9arCdtvsb5Y4EVZHJHtRrXyFrT4GfbPALCyEqBhavSF5Woo",
  "key21": "4B6rgK4wxEm4BpXsrTivj76zjWfNRRyvGVcsScYC87ye3tsWwi3KZDDY1UCZj8RcLQq9fTJESb281f7G9z5YW64",
  "key22": "Wvk5Zzs7QPv4EKBJeG6JHXPzti2AnH1fSii6vQKpY2j3NkL5nhrZdHGX8ydKWGBtadVyjS7WPztvwMwDE1Saxq3",
  "key23": "5bMUGFbwcYCrZnXUX7fQBZrsRTZRMyJ8GYqWdMMkBCDkz9yd4t1jPW8dfgdYbhuzwZsX8bpurY1h9PYa4jFXGjUf",
  "key24": "dnV4HB2zuAo2jNTcwPQvqkei1GyqToLAmoS6eSJuSqxrGwbyCferX4LcQ1qadc7rzRD2DT1aJ2WhZJf3Lx8dMHt",
  "key25": "3iUGhfGK2N6YXcjZK23X3jqXPswfojTzwTLof37SnXj4WpiHhTtrhzFjxKanAXVg3MSRyKKZnttypUxhyy1SrvzS",
  "key26": "2BABhqfiyqw6dkiL4gSxdXpUvoTtozBaybfq9VAqrEacgvkuzT98jXwpvoasEqsVMH8Dpz4BPp3ECCKT3s7guGCX",
  "key27": "WVFAoJfKmKqherG7jHFCkicJzSDgUFnHLs38hkHt7EEnCQxogk6wrPE7wHgQgVC76SuvdWRLxvBnDuf3gACAEms",
  "key28": "2nKJP2NKieDrrrTmdyHKg8GL4AuzFPGUES86mVTwwbTQ1uKvzxqtL3QZPrP4ydq8jAXanSfQVvJXdrGdPusuDf3x",
  "key29": "5Yi8GjbFRUF2XxGtWkDsKkpGnHbtN6r1K5f2VZ1Na1jjc7EZcmsVev7PLafTSJbD53hqvaDnRmgkGVKqcJzUrhzv",
  "key30": "3PRxQxrAjs7nd26qoGi6enz8Um8wy2RxUYSGRrArFaLtPrECGTkRKY1rJMzNtw4irZ4Wgv7Xnn6UWbMMn1etWC9G",
  "key31": "53uw4CLHpbBFM9XfWzkkZfcMU3nwpBcekYgncoKowE2yNKEZwpzcWLqfe4eUaMiFgbVeCXLreJHH8Zn519bRv1D4",
  "key32": "3t8tYpF4qX9dnUVFTJ1ajkzu19nGRKnfbmUogV6kVLs4ZNPakoW7b1MHUa1xHwYRxRpByfzGkw2Hsei8gtCeo7UC",
  "key33": "4MNjadij1xoDRUydrUFZhj8TDMUQgCy8daY67fC4NkHFq84oLtjs6aRxP2uxV7K5yRtMhjhtwriBFfny26juK3rC",
  "key34": "5SqowQECY367y5Yny4Ry5JmPJ4k8euLtdvsL9wAJuSqpmbFKBoezvA9r1Za98xhSbnUYgiFwUPW8mVj4FXj54JnL",
  "key35": "Sfmqdm7acRszNaNbbFB1CkdgfVReqwq29EaN9WqmzWTRbedQVKeSiZVfzXQ5NJMk8u9tZbhRZi7pYYRAkUj7jFX",
  "key36": "uixCWwZkzZGsee6GwWSjCSmALxpUxHjkp6FfccAnjtms92nnm6qTptqva6Zh4bvfKbrC7bHVBJkMKSa42rPTg25",
  "key37": "4xo3oTU6E8Mf4YCC2nrK1Bueih4SEkaRhSBr5cDJxfxzbuqZeUmhh7ntSrbKgtDXNNUYGaX4FuJZMCnrGnot1EC6",
  "key38": "3voZD2b44xLqAnZium2h4K5WF6egan7YXtPUdwBCJjbAcTBdEPh5us6kcR2z9k1fkPhRCfrBKhgpcyJ4MPXaDQV3",
  "key39": "61HFpArcifVzJkTbijM4FochTdJSLi5WGJtQ26Uirpub6THNe3dbRgTZCj9v6kFD9ZRb4e2wZWnYB2mhL46gsHLU",
  "key40": "51pxoGui9opRZHjHwRcocQ98TSdRQPf2wVED5aSVxfaxb9T44BcWeMcwebnWJJo69P9cQwSv2jKAvgRCdYXWoULJ"
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
