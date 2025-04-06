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
    "ScfZgSwwZJ5SLDbSmQpswKf4oA1hCYEuzBA5estxwgAZ4MCy7k2WJhnAcT7kgs74DNkWz3JGu8gg9fgVVH8gBcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zDJ637bNTN9x1bWYwKSyXZJjDKxA3EdXuCJjzsmZU49a3HMCoCLzSmCKqwpGE8bCGWGmz2kiZbzWSFGBaQ3uMpq",
  "key1": "3AsWPpuPHAhgYpX3Hio9aZjps1BJLvyPnEYjMxVM6g6xFUno9CrafyQBDK2Pf1viazz5atEyfCFdZ257JQJKbcYe",
  "key2": "4yvH5EEiQhUgS3qw6qKwfmPYuBkKM1fsKDJMgrUbdFJf96envjQEYmoa1jPfh2gwxAmXXWCRFEYmx9smHzbzrgnw",
  "key3": "2RJZxPUCAnsLAukXqYn3vTE6oXrELpRNYwCc2DuToGji14zCSLA9EfZDGAVMy4PPhk3dzJvxf5K5EUazLwLj9JDC",
  "key4": "4aJzUHi6jay9ZzL1nEsA3URXFRHKwJgnQiAi2zVpA4LmZL4knNSNfZpkrafWQXPjmpsdx9rRsEN86SbJ6qFdBrod",
  "key5": "3wyA9HwshCguNRVYzc8uE1g7qmhK2YuejF91dKAcxh4LunaYfAtRF4f1zR1vhB7qD9Dw4MCLsoeDP4NxjbJ3wt7w",
  "key6": "5iSeH6oTxRK2k2ZpV69iSo9o41JxqGfqCgmF7MVeLjC89d5RNR9NRMYtg7cKhhgCDi4hsgABapn9riWHvC59V2Nb",
  "key7": "45FKJm8qubc94f2CMBfkxTSJkkfFd1rWSPaWEQZeRzucfB7HAhtCCXkcccbekfqJpBjLyRRJV9UWoECrSPt72LQA",
  "key8": "4SGAm3ynEHVeY2oWRzEbh837i28CGN1tdBbH73wkFxRGNUrSkFaqEGYbQvnSAe7ejdLxv7aUnPAaA6DkGmZZZtSc",
  "key9": "4hTmi1z3yDN2JxxmSEUkv57CNUi3vvSrkxEc2tS7Mg2eK2xT15mPWxN3tER8xaY4d3xvVTzWtQGm4Bjny5e5DHh",
  "key10": "8Ph9KLknWf8Fw6G3ocPQHMYWMMP1drBZjxsT1K31fgcCvJHYspM37MzXq8vCFtbgeoCqDQ2JhZPTvtXhpfBWq7E",
  "key11": "ZVxV6n4yeEbCDqi8Zv1xF6t9K1AKoY1BAdqvSWhX6KN56XzcHnZi7uXP6gFiK4doVdsUTKreHR6WyznNg5VXWnu",
  "key12": "236QQWzZTH6k1VC3ygK4BdG74SrYnL21kDMuz6uwohotXH9bNuk3SsEKd9Vggr25rZv7o3ANretf48oNSBR5ky5k",
  "key13": "3Gon81SrQc7qa7aqEKMt8fBauUgdmuK9CumadV7519KuDZqmEyBT4Ygsc17m4rVkUKK81xtF5RTmufxMv5pmoZxG",
  "key14": "FiGs4aAorVs6X3xXtuEUtEDJo6rquNE7ktKDaKqfKywahazhoddLnigsMfoAc3QtPVGDKbcoWtM1LTssz4yQppm",
  "key15": "2t9aavjArfDHLMNeS9pvHUH1Fh8pTXC78MiBYUtzHiVkjKJVeH4kUiJWqUic6XhdDEdVvEefJMwWF2RqoKU8qVZh",
  "key16": "3m3qde2Tq22TZfjem4zcyhU7qPKquB8zZd8BdsRaqFx9fYEavsLdhhVdRYFmo3i1mTXrmYCrMmC5JsvxMrMnuP7R",
  "key17": "Fp8pboTJdykbN6PRWSLmxaaty5PGARot2yGU83tEVdRb6fJppPZeTXXJof8UZaZenouWydBa92zNQcXHFfJyqg5",
  "key18": "5vvRNYdah1Qv1bshx98SXUw21TMJdTAQu1o6kp2qa8AkXaRResDuHR65BshX6nxCkyxQLbfubq7fXDwrSzA5qTrx",
  "key19": "6Mn6vpngT1KjDtZWLB2zBAT3J96CLRe21tH4LiPL4b7nhWE3Nc4VJ3BFGUJFsUDXrupQLsq4GPTy661tqHf2PT4",
  "key20": "5nFa3bww6KpyTXaMBG2oFuX96grXpGtqkxc8JzQcSxCYmNaEuFWMX9Cw6wCo1ckwmL7swfeib2VsdgoWwm7oPCr2",
  "key21": "3FVbB3r3wGHuetNKTeq2fz8LrbPibA9y7oduJUZVeavHgeruMysuF7w7u9YbrBR3h7Lyi4b6bXPLCJbWiZEYd2Qg",
  "key22": "3wivMpHVGUATzyUfeDfezSn56hxcxS2EDCoXwwcRUiKVtuAESVCRY2u4PrZXmY5sC5T8G8XAYRv5pdmQbtXkKkTF",
  "key23": "4imimb4pt6tgr5PHFtKNeBUwSNtqwbgG2jMC9su3AyqqDpAx7vNaNQ738qp2TVpvNHBx8e8Mo8H4BHt61boALYWw",
  "key24": "2Jp1h1BR8bQhmYNdLt8xb8PkMGkMfvvmi2RrP6bxy2NsVajW6X8r1kpF5dAzq7WxheFpXGngRaApiyPDGKh3indH",
  "key25": "5TEYrSZuE2sbKvt6H5CEPgG7Kjs1LM7Y8FYShgN8JPXCv7hUdRNRESTBj56g6ffjCpFmZmiNEofnvHnHtPK7WWYV",
  "key26": "8xbAPfpkXz7tDnMXu7mqmJq2HspQLJWQYp5BvJt6BHgPsQTJZtBPv2GyHCMMhbmoiXUKt24q99NZ6JM3zSX4Jio",
  "key27": "coDNgHTB1au8BUYJfrjy2nU3Tki61b5iRwe69JLbrvdPyFfVi8ZsnKNU2iTtVUu7MjYzRGxxncJyuuvnZboW4XY",
  "key28": "3bsnz5iPezCLA2Pe2mPsL1hMe7GbkSyt4p99m9xKBuWZWPefAJUAog1HVS8KRk64Q86ifuxAvyXcef52aF4vVpJZ",
  "key29": "2pHzWkxKy6trVup8QKibTA4dB4AQYDhQUc9uTxoF3CQxHuQeuDpEgoMDUrbMiDsH9kenfBxpCwKtvFfHRWccr6NA",
  "key30": "28td4WqAPcfq2ovFwSZTq2NguNAo5SvX7n6pQy1kgZrg2gSR24iHwX6bhM3YPuGF499MZNmY1PbNBWSbWLtd9kqk",
  "key31": "47LX1QfiSUk7esw8xhkCK3trU8hDU4Uyc54Egyxgmv6R8uqT5tbca2DGDhYPTzB7YqGR31AnhouFCvho4i5A25jp",
  "key32": "BRip7U1iDhuPJYXk382x4S6vvi9L3XVUxGVTnWM5WeAK28YSo14rJx9tzycvcCyizTCYRVbpjVXvdDgCwsPtUGj",
  "key33": "2FrHq18BhEjDQUPzo29jS1HQWJfGDiEPJPvnZX1vSLyccEL37WChQHn5whhFBn4mQhPXrFoMLbEpfefBeSKGaaHS",
  "key34": "vWWLKQdUssX7choM6arV8xMNGcqWpxfNGAKCXVAUVprrCjFVcjS8jX8hbhC9CyKkfZZN2qQVeLAowsC2kCHVyt3",
  "key35": "HV9Wsk5fT5PNym9o1m8Q8KtpcEQ2k4mFbCucsJ7ynnqbA3tLknuS2QPntyw56chF43aT3gMdeWUgHckpsaQ8aWU",
  "key36": "3FAq29afrMX3G5uAngwVHBK8oEbYs1PA7wovvR5Q4zX7gGRAU46KYbmWSWb8FXo7YiTkJMqhRf3NoKSpwWC9D4vA",
  "key37": "vbQuXSDvtGK2qbkEgTvwa6iHfWKnSEhsVrBHP8p9r3xkYQZVMJLnrmo13m9LQrSVVZfna3oLTpYXmXBPv7bTTXz",
  "key38": "671YJsFhoEvLscW9RR9Kf35r9GEjJoF3BcVixxihqw5j5JoQusg64vTXmXGcAh1MWxUMZQ8MuZMoKrBPxwQsjZEe",
  "key39": "3mDmBRhyFPoAVvbTUgRiaAPz9koH7UVwiefsiUyWzbQXAjF1nLcLtcvCoJRA68YyoTnJeBXii5TnyNpfBqaJf5yA",
  "key40": "5A9X6xkgmSjNdAZuhDknNxC9LZRZY1JjWrP9vJr1vGYR6GoaerTMfAc5H4wiVvaQ7fJXt1pNwTh3eXRp7gqCUezU",
  "key41": "FQSQNeZtSZZw4TtUY66vS163yqN3y54DnB7kCBwsHgLUUf5uEm9s4AQmcUTHoVYdmMj6ig9uv2d75fWYvZCj772",
  "key42": "5SVxhYndTMBsbgdKmyMkHq1mqL5wvFnHj6BRybBZCRU2VLDDr1Fy7148JTdt8E8FKsdY97ra8kdim7QzLN1FwbJ",
  "key43": "54rCnFBGbvUC1kXHQkbwPY2VgRRVgwt3MbWGLpo5t32MGDmhosrqhpn5CBtAnyJ1UajHNDr1XPXyezQAW6EeLcNQ",
  "key44": "3mFAok3V3q7JZnPftBJ4MACxXpn98SbAPFzRPSrfioFR3G1dQetNCmG6cx5VCbtAv4hy14pE22mXVrCWPUaDoEPT",
  "key45": "fqoVnXLnzvgaq6HpEhwiGNqbPt8KoRbs3YR7V2nbxAa264uyUpd1byLZjtwLnWTdAxudRrMWCE9Bkg3VdUi9ZJ1"
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
