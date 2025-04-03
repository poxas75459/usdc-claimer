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
    "2ZuJRK9d1odbMpTMpFW919oBeJrF9oobNot56jwGGfP2DRN4AQPWr6TXh8mbWT4A8PXiww7KivL1aJ4opoKhaoic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wMzNKJUcevsgGo26DuNDqtgQYgexJeiEfiCZvjVDe6eHZSPQiH6wHuR2rRQiWRvjKRJu52kN86CvQUR3KQdawJT",
  "key1": "5wwYWRvxZnKQMWSfEjDqXzyJsDYKQ25gD88e4ZUDxBemLo2C5CTieTqs5ZY4JsC84PeZqpPxiGWzK9ZPgPwzfzv7",
  "key2": "tNmPD1oyvFSTcewsnqS4ZU13SS9YQjgHJa3U2yLpCubvzcwGzePjcCoBXS96HKbNa1YkwdtMr1CMPA2P7D5PjFv",
  "key3": "5puoKQ7MQ4DoXXHgV6W9Pp3oScraWQiP81HiNrhkayxwdKaqfFvjkdpdawB6wGmu2JnxLHzaxUhBbbfXHpismukC",
  "key4": "3oESYWz4ZReubKznVXy9PZYN1WVXWN5et2pQC3Kf5QXnr1AmpBwaUag7AQdxrGfoYBecFYnwd62hrGmgtHgfRcUk",
  "key5": "2xGXFw1aCoBy3Rqyu1Bm1WnG4SDRYTvfwLuhfkQMZcm6nRHd9Jp7RdytBV4A867mE75hQzBBTTJmSgjpWaYbDSMH",
  "key6": "5Lri6WNVkKK6EZBsW1xuWkiK9eVCw31W2H6ipQDtSEhqZMZt62sQ5qbxwCSX6XCPiu9DiXwRUMVPBi3LyvLEWNjc",
  "key7": "2zxJkwewyaTfZvU9F8NPuoRJiXPeboojeFacpBMmhrubEtwrmJ8Z97bBRWhY3tHZtZLH8MK1BrrwWXSrR4pUnfcv",
  "key8": "2Qf2TUCZ5jimJ3jEmAxjetNvaHJwJ44BhUH9FkWXCecKpotQqCZEXX91KNZx3n8iE61Y9fLrUcJH56cNZjkXjGQF",
  "key9": "4wTw69DxJZbkU452vQNc6jtTpjTdRr8SQ9zs2KrEhrKStsyNKFK9skqZwxNZrArzWcSBiiVrk89SejXzmdjiV6no",
  "key10": "3Hea2oqSuS4HKvsQrm7Z9yrvoatpHACBvNfDggCnuAgQuHuX5AXUPJLWeDyadvexec12wMjRc9bSXpgRU7zcFzeZ",
  "key11": "3d1hhTgrHNLRZEs2myJ7NTGGXBdcdGbTTfrwkpSAEzrfEzL3JMWTZtTiayGode4nQSFrkE4Qm8fBmHZz2SB5Jei1",
  "key12": "3CVZ9631qwcRLvSyfxLc1wLKV22qSNPKcn5pgpT35M8JvwbgsoFXkBCMqr6xURvRfts9ENtfy7iCzhujXcNU35Hn",
  "key13": "5fX6GjMM4gX5SHoPCKkSjKSRSuBwn31q9ePbC3QSBMpJCGbWqR1wDx3vZ29XYfucmYgPa6J2tjXMLYAXKHCyaM4b",
  "key14": "4CLPYtLViTa3Zg9fV1t9ASkQmDBjfZdAmRrdeXWHgdipyX1w54GL46vnSmER95b36UuwyH2xg8PmBhXi3YthjUtn",
  "key15": "2RBWeqAiYubrVdwhr2LG1DBCi1cVfoQQRztSmZAcXdzGRX3m62NbTYmk7GdyRusnmYDjeKcWPba9unuTPRiCmFh2",
  "key16": "3svnss2huVW4aT5G3zuhcQCZHZewqfHkybcU6uumUxtxM4BYVdeafPA3PHjyUZFmxH7K7vU3hNUxLahEmZ5rmg1N",
  "key17": "3RXQU5Jkzy3DSgeny21oAaUELftQLcqVaw2DRTDd1GfdmxX1LP6Uy5zUiw5jrRtFCxEQYNaM3JAy2iHDG6tSr95U",
  "key18": "2Xk2iABT8GHVt7wBmcBhnc9ugeyd8qhEnQVsehD5Q5F4wxVMp6AFp143sfX7sKayrNraDcHRbeaGu3meVvEoWtEZ",
  "key19": "5z4fMHqFb8XrrEBjM8Py3pRVdNF1wU8vF6ktEYE35f2XYjturMZuVw9mkxmY9tZQNKVe2ouKdTxAGLuYP2PnJuB",
  "key20": "2vJ9A5d2Q7AQMdZFFNLpaBcMsjvM57JRo3cWgFtFDyMzGUd4P99XNCs77QYkeqRihEkky8uyvvLRR7XPvmt4frxi",
  "key21": "5cVxHqcG5yXJd5BVEsRmppepFMNWBtQgotecjjgxkmPLfGGZTS8rbSd5STkzmK2qhjFjP74jWE5Ty2tKig72eHNJ",
  "key22": "4soqqVprJqPX8neWR28e5WXQBGAW2sSCwMaBBTdWbDoYKXnV1Twg2dFwhC6j979xYzpfZ1bT1H5mzJ5Ry4U2H3Q",
  "key23": "496UPmZc88dfSvQ3K2prDs3dZQAGHhanC8pScnAJAdADdKsbEijMAg8hJmF1Z4gFZsSLCm9QCB5Y4unP6pXR4A2j",
  "key24": "p6PJyYywS1mgiFLFg6fCGR1DHnRHwdbuN4NuxUGov575qSY1mtC4YmbYFmc4K9BL3CBtsBync6qHy9pdHYKFoN4",
  "key25": "zn3kHxYoU1goR9wz4S4s5UiYzMz2mqWsRXNMH96VAPMdrrFuUhENcyQfa2VLYRuNv6xNjh73h1Qn2HxYn2Scw26",
  "key26": "62HL7JdadVyux1LZt2RrsuAWDqEnozxyvJHNwHfcm2UYqctoKgzVtRKSTFab37V9EQSqfFALCKKw716xPsPPef8T",
  "key27": "3cfTZmerVCmjzLoVzQ1E83a5G3StPtSD4Vo5srVmWfQQsD1TojwbSJhzxRQ2Fn8AxRVmfybHsqQ69fGQwiFDANhz",
  "key28": "EPD44qnWUe4A14nRqZySxsaHNv7oGojZqnmLGGLYmWdJvVCxKJvkWK6A9hJBM6jJZ5p3eDLv3b1LuUSQGpG6r8y",
  "key29": "2K8yskjkuYqd1hKLYUEM5wg4qTUjMWYARvhyYfgsFyYG527BwpqpJ6wd2S1P82yd2oWf2X6uAJX9kKQmF5RdrMjX",
  "key30": "2hME3gB6AAWdDvoNCfUR6XpxGrHeEDHoFiJBeZZT59zBUGiq538bVLNe8LveSWJVQLpoVemzqeC5Wv4LwYQ2oY8z",
  "key31": "5nn3CmGyF7cofooi4tEaJysXYsTicGjkdb7iSGqeyyHLKnWD4P5fBcdnMx4bjXjixxZv8BPQg2bU1iasqssN8Z1G",
  "key32": "25JivjpQc1vE6JRKVEuvtb3tsrR76dLJrhrhLg7Utj6EP5pSXWnxNTdDxosVPBtuSuBQVj7Va631AKHc1DpJxaTa",
  "key33": "2AcxnbKYaL6v6hNmgJdpgv4Vvytmk4pdA9qHJVE59cAsqyQCNQX8oVQujgdKeZFmNPtZQo8aVoV6JYbNVcXWvD4J",
  "key34": "2PgZ95mHYkgUGHKcAHeEwYJcMeJXhkSnKJywvz67bCHK4zkjhxSAW8KZb1d7kmQDEALa8EAJTmzuffc1TavHdAJr",
  "key35": "Crv25Bkp416e4dJ1DPQtMRsRA118oQqVN3YY3D5Dm6zP2ph5mgSBeJHmkudCe2e2fVheNmzYj8r8avCMgEB41La",
  "key36": "1Tyv4dPYxSFhaGC3xxf1Esx8DVRzjber34m4T7ZfSmmNoPt5vtPwDDTU3DaqwVrqcAayhWuSjSzGFrpG5z8TPZK",
  "key37": "5z8kuxmpMftG8Ud68eVT7ncj69ZmN2EXhtQUdxu9EgNqx26NDeWpuhg28XJ3ZwDvfcqKXkahvcCgaVbE29NdeXZS",
  "key38": "2MWmv9Jk2PVEB388aCUxKZZziKw2bFYX6rQ4t1f4yDRpNdGh8w4f8xCPSVogS9xDoQSCo2mtrBKwi3BcA8NkgXMW",
  "key39": "8pX3gXe9HFWZXi15XP51EXzrTGc18n81aanqH2KqUmjvfY3yTmNN6HC9L6Fg4FQyVcRLxRora5uv9a627wSdJwW",
  "key40": "3vVXkofEXEjGiJq3KuFFi5DHaDakEDocBqJGEU9Gw4EPMi69txjXfMBTBeibgRoM7V6hC99doB4XiVu1tqzkSmF3",
  "key41": "2ULsJS2fhanJzDwbgY1vEfmK7dViFAQeR3JdSArEbucTnQh5JJ6G5YwANefBHPyxvLYmMdQdtLXR4RBoLsrnghBM",
  "key42": "61a45M4b97MgtwsaPhUJMwwgN2e3LekBgT92fwaBqJckx9tVLyuoGutqgdEbJQdj4ZEesys6J6wP1YhLyyCTgkwj",
  "key43": "2G8kutujv6FVBW2ohHNkYZrH4ZiSHG9S9jtr48aGkFesrhf1wJ5R55nExxpsuPiGuXXWt9uPdd3ivBmE2m1MU4iZ",
  "key44": "5kCRcGAgi29acekMVqiHemFbXzYBEbg9G9eG2oLYmU9oTmwcj3SFJXKAu2GbD8zVwcGoBABQsszEu6cYufgkSJvt",
  "key45": "3cNHK6ZWAY2QxbkfgsPQofhgLmxfpNqoT4xib9HpfgEP7j1NzbetTgJRzAL6MQ6sRvHNDvCWgZCQbHJ3qz6JPcTw",
  "key46": "2Fe2rkgip7bUKJhQHdWpXmru4dgy5HHu9Y6XUaCXmQuTBxmSpd77hDvSY24kgywwbRBi1X6kUwfALHKEuuJdv4vY",
  "key47": "4Tus5grfbJjtGPvkYocMgUhNwGQXHMwnqtm1B72Hn3mnKH2aWDGDodWsJko5mo7nSREYUyaecv3fcry3Bdn4A2qS",
  "key48": "P4yMFDvFYcJvTMSGPuqqtvkeua1GGT5jaWbvPnwpkVuxsyD3ptjVGGCCHLfqrBkpCphJLvxXhr4zx8Xwnu6cuBj"
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
