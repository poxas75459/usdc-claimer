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
    "DfA2JzWMP9Ycg5cnSC6aedGtzfrKvVKotSEcmRvgxJSJGVasRTqbv3SDW2cmg8dNxH7qPNEbEyNCfvTZNM7P5wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dPBZmSWoskPk14WCDQvuyd7jVWjhgz3TyM5us3jXM1SPN2wqceLwbzz9EpdTgoXdhxBnJ5uBd2rfiSPZ9eF3wkG",
  "key1": "2mSf52Ngx7VnbZaPedvvKG4ypbfFkUc627rSjuMf8FsG8x7yhC1ao53Jxqqre5GqXYh8PtjVPnKDoGNNro1zybqo",
  "key2": "2HQKdoXKtkM6kPuZY12dxdn9dVLGaLpz7FyGUzESPy9dt1r41CbGJSSR8ZBGT21Jbqrws9w7K4H3NR9zaenSn837",
  "key3": "4DfuQrBNtcgAPgTmeMZSXKAazFvXonhX8XEWQDmnWyahEvF2EyjrJvCtWf8GCNkEeRAABHNX1N6Fu5XXoDaPLfcF",
  "key4": "3A9ZXm2twZ5wLios5Yogvzfbdrj9Ch8zZsrkWw8ukvBBpWxx3dnk4uT8SQMvew5ZRGS6c3sCtV8EbCkeqzyma2EQ",
  "key5": "2MLDMkRZCHkq4dbBmFgvCoo1r62R4UFCigdf7gugRnHTUN5BDw36LSzA7e5tCuNUqgLGzc3dfvg6n17YUB2gu3f1",
  "key6": "43LTsvB6PqPZZgQSREGXfqfC1658aocvnigfN3R92TviziTUrb8VpeuJJVWDg8aU8JCJy8CucPqG5cVaHixWrmWB",
  "key7": "2tCwQpj4N9wUrnJqXEdrXTWx8mxgo8RgXLk2xsPsf6VSxfFwztBm9E4BLcRwLqNc2gZN4VdmVkJfrfAmLr3UZALo",
  "key8": "4mqZ63Smt5rpRHRBVKJQqChbM1AUw3WyYTU5nXwwr87a9t9nxzi77sbkK9Hptd4rewJpZBpbPsJD8GC1UciqRWav",
  "key9": "5zrXTnp9ppQyaEjxGxvZQBDcYxDv3Y4K4nawLFciWBmCibHKErKdcg9sFaJ8R4x3m5wscie44xEa21dAd3CRAgDt",
  "key10": "3Bi5ot83ih4zQipfGS7upBj58NeLXDqc3BkfKjUH7MAauCZiaVhF5GErAGesQfK99vUNfJqWFRUnUXv2yVb2tYCh",
  "key11": "3whN6iSGgy6f3Qagkt6tmoCyHKk6H3q2YC8AQhdtKGfv1nGFs9aMvMWmEMfHSvU3HzL42d6GRfUX4Hf8kXkC5sP6",
  "key12": "4N32NJVEUDQcbetm1MkmBA3a4xQQVZaudGsTQqF7tJe5dxDJLq9kktBF4ECdSP8NNTmvapHgxfqR3XczJPVXoyWi",
  "key13": "5XhgwCA6yxkMEktp66VY6fKD616VjbJ3XaEQxQJWcEchYimr3efV1fsrTuZzvvxAvmbwNd4vSMFoNHMwnKAeSQwJ",
  "key14": "5D9L6mEg3gdynzx6iZdX6yK6XRdGtG553Q8UrbYoZeDeM1YzzmK7BiiFPzu9YX3wjEqfqw2DyjBnjkfCV6oqjXyh",
  "key15": "xLCFUCSqyFjsqFzCDDJ3Z7sLZ1NsRavmjRCzbpxM628a9ckGX75YwFufADKd63X9e8jad5BL8HiWqWRAGSdrKUN",
  "key16": "2jwXYjkDrAA1MWfooeygn1AgZ7dCaKAXJ3JYmosct3wPsFRa7VjG48oFy1K3eAfz4rM3wPPgKPhCbnNkVTEtLocD",
  "key17": "3BTaYeFjXkMwmbXiJjaUBitbVCVn8GZxdRMj6NrH8kV1XbLgQDmsS5h1aUUdrqTRajxHkyVCjDLpfrNL3eki45UH",
  "key18": "3S24LNxzYCFf78CCSdDBzzo96JtsKUHPPEXmqd7MffbpJKKG9ArydzWqG7YLX4XRThxMwnZrW2XQRyTjdaqEy3iY",
  "key19": "5wWCzwsE2X5mzqTmS25mPt2CdP1p8cun91cVp4Yyofw8bjXtxd8UBwFrckDg6zNUuZ67snywaewi7xGeMWjgdCQq",
  "key20": "3X5fUN7a4oeZfxHvVNC5Sw2A3BaVYovTb7BsPrmsSt3UuNQWPEiyRL9YSfCEM2hsyPAR32AK6RFL8DCX5ezrKQvj",
  "key21": "3Hy1EZN1SqERgYpHDgVqETDegyLLCvoigRXXU7YpRiVWMMuSiAhTZ7aNnpYwy9o893tG1pfY1nWd83XQcwW5Tvjj",
  "key22": "5YSE7n6SzDEHbvnxhNgCueLKR6t9mZT7g5343FsnvmPEHWaGER4PKHMsMdTsufmn2tGETDc7kHyUxv7wgNf5jEgF",
  "key23": "4qzfG1iN1BMnbzfPFRUcJnejWHVZkhPpheZjAZeEa8h2cjuQXaxqcNgWSn3EM4k2HoSBS8vbWuHBcpSDf3pvBP1R",
  "key24": "bNBZxwiE6rZ4sMHYDFokZHLfHrWaVVWsg434JVX4ZnxGCoH8QBq1erHfvYZgMmX4NEtvwG2yZVQSu3NpkYFCyRY",
  "key25": "5h8Zsaop4NzBe7UgVqAjbyDy3UHu63exnxUF232CQvQw1N7VpxnknxHEgNA9AQpvXtvB4wwLwNWrqyRabeJNgkbi",
  "key26": "4BqF8vELwYTmvtv38NX6kKcXAH9oAX1Gzh42fwdA4KJcqLSCojVBpTfg2bKyTT1E4D87Hjg5npo8qT2pQPp9ZmQK",
  "key27": "2R9hLRic39RLYzUBZjcURx77qgQz8k3PrcDjBuj76FSNk5nFXwjoFpEUhaTEBzhHXWByJcEq5MW4hcKgfRw3up8A",
  "key28": "55baJXDqQb7Xk3DbhpHv1RmKLkwDzW1FffDsnJB13HjWLUxpmZsqVj5A8UuQGfN68kpCN2pGSmxaDpfTmqwe6Uy4",
  "key29": "5ZDoZNWV25wx8UTeRbFs8bwUYooYnEPWnXSSnJMg6ZVR66s1f39zCEALU12gCDJqUsAxyQuddwhBuGR1cBoKNdz5",
  "key30": "38PxML2VHeSemTmVsVJ4T2TvxEGVoDhMjG3DpXRMycejBFx7i2UjwvgJbuP9QQKHFmRdmAo8Roscub3hQm2U4vg8",
  "key31": "37B6ReJmXcH4X7ubfEDMPEucxuByYMqpAGzrcFX9DtBxBYeR8EYs4qbavitZgsfCydEsx74ajMNH32t7Wv5VGhpF",
  "key32": "5fmmm9VRcijmKYTXLaG5Konxz8g2eoW9hSFgerGFmsojEYdNvpDotjytZbL9FQ35wK4DC4J87DWKyGnw9asLG1qu",
  "key33": "wyMo6Mkmjw9AFJfa2Zw3oQKm8jWtkDPuXKLkKXtB5jCHFEVwWf7wgQW2Nh9GGRqpBtZzzTngHKTZDpArySRMXVd",
  "key34": "2gxQaHTD9RxvLKJiqWrgxRXEDcam1SM8X88a9oiJKALWn6qzjKtYN57BGngE5GdtxAJ7FHeNi9AEi2wNLuBVReor",
  "key35": "2fLtGwgk7bJAcTdwhRPGetbmRLyQfwwknTYcWx7Kd7DxDNLqwkYvptBph9uSddqUXifkYjdUzoF2zj8TWhk6GHJ3",
  "key36": "2XqqLzyEWwAPxggLPAB9jgUYxKmM2vykHM41PZ4G8Lgof5buhB2R1MhcLFphN4yZU6EbGN7U2ukJNdiZ3PTSUKEc",
  "key37": "2exnwrFE2hyx4rpwK9ALW8dJDsMZr1WSLkfxpN87YPHFNVLzAoiZ9vdzHN2L7WRnqfDXAif7nXCzyt1N5N1Pn4wa",
  "key38": "2pYnS7NHVH9rC1uNxAmk43mSfPGkkdt88M2QfQN99BMaFvMQKWeEZxUMAWMNThnwcPu9Mj1ciTMPqppTLHoEscon",
  "key39": "3LZ57Hmigh5dm2e3D1gXAnpnrwmeDJgGzy6wtdrpJbyLGhxjn6jzZsWUzgtZz3wKDTAwH25KsoxLjAr6NVbDvjsC",
  "key40": "xgriq62h8RD4pKqRdohAvpGqz41Q2j7G6LVxKv1FEjcKmAz8BHcuvp1a9AZ2ceV97MwmYP5myV3XCtVs7yAKt5Z",
  "key41": "Ed3gkwF6dNA5qiDymovQoVtAFrwcyE29MuuNYrcCZuexp3ioG8HSq9UVavCXYr6bqDfquuYy5sDZh9qpQxt7N3w",
  "key42": "4MxAFXNoBdXdKbCVNsfAyPdLNsH5xwDzkATjg8Li1Fo3wmTQZ29ikxHZJrwcYWqi6yWqM6qkZ55ULii4nKZEhMkj",
  "key43": "4WJ7KeUc7aDgffJgwBy7rrtH8VAN1WBwbgzX4dz5SKGEBaNFdtXvLQ7u1HeZVfmFbWmmVkcBBPJfHyv4rbpGVSG8",
  "key44": "nFHbEAieNgdbZSE6TLpEdtxXy3k4NEfn5fVve2wDmUBSVu5sg8C6fMia9BtPrBiTVhQosDMeFqtSaUtV7mw23p9",
  "key45": "3XJyA81AJLWSxmxdCrvnCMoZFUE9mweLDtmmNEiFGSaQEizS4DHUGf3sAX7B6AsLKYNQRJ7rsEJ4x235tvjZyoKx",
  "key46": "3PaXFjGSNYkKC4RoB1MpWybpJ7BntsyaeYEjNrKhh6wW4V5dACGBrAUgcHaYS8F7LXGRMC9QNE8DZYHHnyHKmdpj",
  "key47": "wGCgRo37Tyo5Acf3XTQXxbwXd9194pwSyMprZXndFunp4ustfiCM3fRjY68qy5nxEJtfsS7Unpi1PNWNiNV87Dk",
  "key48": "4mPYJeritfhp5GnBh9PYdgevZF7J26fpx74A27DvajZ9Q2ZumWgP3ruoFdRmjqnkeszukvcWrWSZA9Nqma7rvrn4"
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
