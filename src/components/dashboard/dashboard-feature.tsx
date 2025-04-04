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
    "3nHAeYtt9mvkJYssuKaeQ9MWVW7makyvZzEQsrt5oTtNTSpzuMUuXuRd7xDDhLCFgzqobvo5z2zqdsbZsdPoL7vE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w3eFXEg2ZESywJ3TJgfSxmT9kau3gq15DF8waBN362mxZ76VECgWYCHKeFgp1ZFMTwSfK9CUQYVX5RXtWbLHcMV",
  "key1": "LeQWmAPti8vUDEgrVcFi2emY6XmhXYnKBG5e7LJRyhfWsrr2eRKnoLzGAybhaRSepvoc1e2BqeXNRsgL4rkh4PB",
  "key2": "42WfJ98QakjvghZjbfQt2fcCmXRS6WahY1nm8F9HRQCrqY9Fi5jr82L5NZ7gCtgPbArCE5ikVkhK3BVWvqBZmG5G",
  "key3": "5pQGcMbADHeeRbP8XJFJVmUd2M7tKgYitonD9GQrDLSeYgZVu7s3xLyeobGdSkJ6T9GgZXgC3eMcobkeLAvDTsda",
  "key4": "5E2ooMwjwZjzZrVh3zSCzFya6bDrVXjP5oGC891ak3YTvLGgwLt1JDsVGpGpB9iJ2bteAaJFCubcYaF9GZzALGyH",
  "key5": "uP5g5zwdieKqSRDZsTbEPGqXJoPwbKW7kHA5VYHQz7XbcHJonCkjp4xKhz3sih8mWuQ5TFitxgUjNDYbp2PZyCv",
  "key6": "34yXRUB7sj8KpQjFXR14nCQobRP2xini47HAbuT9VzvuSdRZHhJ6JFPTD3T5WThy5Ey1ng1WhmfdZkCUMx5cX15U",
  "key7": "y1QChx8MFE9em4J5wewxqKjiWHDsjFdLogD4cw1JKoF7y3iksoE9uzzhvmqRdUeCFLGcUzRBUjP8gvuwHSbKPAN",
  "key8": "2BaMn7rUPeddm2pL2pGgYMhBk6Y9HrGuEcRoFmfWDDG2CSVAPdNvSxr67BrhBUk1vu4GdsnHAC5BJKmqpQu6UAdk",
  "key9": "2WANJeimx3E3TU9CSdEshT12ksp7244ewo1XH7PSpB7ozuWptnRJF9re1PrLzRbPnKqc6yRuW4jgHvyzzE2aPEGF",
  "key10": "5goBT9aJnzRJKAkCEKYz63r1zpRPdinaE9CaeX5w7gKsL3u8ehNhxKjRocjeQSUPJksoavp2K8785fGSUez4Cxfw",
  "key11": "5ELJWU2A9xNb8AbR7tifcbABR9T4LVTHrMLuXsr2RJU7V1EZHXQyAuastWWDUF459MmJ4Zt6QTxb8eX9gydSK3vm",
  "key12": "3oCgQvcBNzEdEYEFoNSnVSkGK675ctCKsa8kJQd3omj8Z6hFKDe7kaWYxWpgD1i82jzDqV82nMC3qTo3ZB82p9W3",
  "key13": "KSo69b9bGMEhyjqZ6c2Um6bsc7p3UZjnXMgYZF6zNGe4LEKfKR1o5dQVsPTiCTmFT1KHvHv6tiWaMmrS4zcbFcU",
  "key14": "5dV44roazZrV1gnDVziVaDF3FzqKBssAJ2cJTcnBBQkqfkdmWjK8WEoSU9K5H7gg9SbLDctzQwuAJaLDudB7qziF",
  "key15": "5d74hRPnx76mnhgeajA6NnzbuwAckpPC4p2NXkV5WCANfpFXY5RTKxaHXiFcQmhd3oSvhkxFecxXn8tPR87dvVUn",
  "key16": "3FpV799MJLSbKDZBRxGvr1VqfZw6tibWd6YkjRy4QtiLmAV7HvVL1c4HrwTTgKH59KifMFAdo4qNWSHjjkcTNG2i",
  "key17": "3WdoqhEiHgz8uKnNEs9yupAqEnDPXMmMmvtC4YCmnCpZgvzuLJUeSfBNUaQ35bjWtn8djNC92QfmDy5MJvGDTFqX",
  "key18": "2yAppFvkg4xgXjofNDVL4zpzu1TW7UaKQJYd6gSc7GtpqppDPA1oc5Ci3JuTA3mtofdxC9AJPT4ZsLvmHJmv4Vjx",
  "key19": "CEFUcFG132vgDL3QmRysy8GYuB6sJ5LmKcSH5C7XF2xAHDr2afTg93EyYnezR6BMPq4GPQEeDkyNaP6royhuZEv",
  "key20": "5Kku66zbkwd3sVs9sXCr7v4gJNZ2513znWydBaqCnLVRwpaRDXfLf9Wim5TMnzfY7HDtQH6Y1zorkW2VneWCu5DP",
  "key21": "3WhF6JANkELyiqFPJiijh8HimFnawXwbXTEmsbxkmkqukyUqcQGwaJCVdGGF2D5L29nzM43FtTipWrM2N9QUoCp2",
  "key22": "4mjGyj9wRVUT9D29vbQD5m6PhaCsMvGDx7DWo4Hz9jumz9DreAaPfUJZYLA6EkQBvvBJtB3Aig1D5JfV3CJL4QBa",
  "key23": "3PZo5dv54JpVNeVWt7eeGsHdZSPDAKxNaXw1dcGR8yDDXcUqsBcPyZRC9bDott4DsDPeFhBVHwTomX9ezELKHovV",
  "key24": "2xLAWzi1F2Y8Zr3yrcmYKHTRV1ZtAqXqjEnDD6ep5gHnFXRxYpnh5bdqBHUMzFGFnPmkeK3R5S96RB1H69RWUe7Y",
  "key25": "2tpnEfaU5sBEFff7K2tmuiGfd4QJFjJagRFm6cCvBJN2nEZPYDH8gxW7s6Fiy1piTk6TSejQX3r6Uj9wCv26Faeo",
  "key26": "2aJyVMiXrGk5dDWjw2jyPKteysRDVc8YDXW1dvUnnUd1N8rVZRgKBuWwrxsmqYcUaJuPtVyGEMLuCbtL1TTK7iGV",
  "key27": "4xQttvmQ5N5e4WBZuhEW2si4TFiDo7w1GFtH4W3Hhsv3hFRX7giTvcQcL68NHGE1XFUU9BcETtus2fgC8Wn3f7Zh",
  "key28": "2stW2fQ93ruzaxaSS2aCPpCK18XvRN3KB8cNTCdeKKg2B2tWnZAk2xf7fz3q1PzDSdGpn9f1L3oNNqNQ7z6rg4N6",
  "key29": "xvyKcSKNiGMujQpdviPAqB3CSZQnjnP3FcnSiNoN1TCzMcghWDnbqwtwMFsPY2xVDSHaVfgWJCfLuqt8EUNiMCt",
  "key30": "2K9QHNe4hLxcjweoAzKknNe5WfV84FVsW3Z2aMd2EuqLnauq8rG16T4e3reRua4L9FHzp2ugbK47SgQ78pmVhqK",
  "key31": "yyD5irUftbcxXJSR8MREY4AsgvEwjkY5dxr3AbrEszvFx5Ea5cnTwg1nCDYUuqPJz6U1cj5xyzQ5rZp6sqpbRUc",
  "key32": "4jXsifs1CuvbB82USgZinAQnLfrW6BoUCRtTUjhorpvXxktbCnTi1UfSjAnuhdvciACsV3uz1DL3mCVhb85uPZU",
  "key33": "2C95q69WhGyeK3LyCwkHtB1yRU4md8LZrBsPdDZQDnryaLuwTjUiu7p2WTsPXawCYmEGJQkHJbfokttioqVGZif4",
  "key34": "2vK9C5yHXWhHeH6wQfsVSsGsMU9K2bBkSgiV5MEoqP1mPrjtQC1Yzykq8NQc6eKM68w93hP4MxKeYxrRoyaiewSS",
  "key35": "Goo2oRUf6i4KyRzGhVHvi8UEvL13mhWGqJZv15tPG6tExHTta2iU32p3kEyLy6VZYctSFLDoMHiEG23aBg3qn9k",
  "key36": "2xZa1wjaCnUVeNXrUtCJoeFGZQJGuyTQpfUJTYEkgkzwcaytg376uV19JHa6nLoTGd9SpjcaFDvgvX9np9WNz668",
  "key37": "3onVV17SQYhDdZbFoSyWf5jvGSNCgEah8KW5aVYLYJXJzRpN8zCBPHMPX6fMpjtonAy71BehkgsdbCNuj7eiv3Qj",
  "key38": "5e6XgnHvqUcK3zhQsS1UuQ9q9fACubqDdS9SKALLa5J54MMxqfgnBcaxNseZTSEhbFQXto841Gjj1fQjS9QemG7M",
  "key39": "3CRF1DoLeNiCiddwmstchTtumEMe3RnevgZzraYy5KZ9LF9nSWawhUnevoNYtzwo25CYqGuchXmjqWUVVCfPd7nb",
  "key40": "uJSmBp8wEu22MnBQWxsGA5SvJSBKkyNko8feXK9KY8dd3qbBxoe4YmvJ1CveqQ4bTQc6KCCCPoBU1SBK5EhDVKU",
  "key41": "5g7DBGpqcvq2bvscjv46WV49wLv86gBgBtLw6tavfTdrfrvRTxojM3fNciX6saTcjo5KuzDZzTYwSLtinCkLwEiP",
  "key42": "4CeFkmyuapcgTr8zfN25YXuwaFdohajPcZE2AnZ7KiBtagC98cx28ZfK9FRRabSYYtfVDmzVFNB5kc8d1DhAcL63",
  "key43": "2TeDqJr1Vrh23Az4KtFwgbEAn56esqHPmGRMW5LpN2HexPNiJ4783bY65CqviHehWEnLJGUmcdQekas8itkv4xe8",
  "key44": "3hNPZrqKpVgTC9Mzuprm3gy85xqrgPmLGDEWrs9cG5vPbaZuktBLsMeSG3m2FZ2T8HvTow3oAAqXPbhq8VSWSFmd",
  "key45": "5qygXVZ2WcatVfYkkebYXyhb6TixsC5ueYHDxyXGQYGLR9zzY17XEf6b1eNZkEr2CDrWCLVZgkzTK3iNLemoVxYb",
  "key46": "2fkFruKBd6puwuD4YiucBSEZpGUS26piwkvEYwE2YoreVFT55pYj1Xh4byQnb5SYJVzB9PkkrK7suzKXYTn1pHpK",
  "key47": "3yzRziyDgqm77pGSrmShmg1APLkwMrzHDwWYCfMHS2Eornff46YSyzed9KvRkj2rqv7rmqC4ScXwRVUnDecmN7S9"
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
