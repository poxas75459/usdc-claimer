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
    "5pprghLcNud9sxkLEYhkkX5MBEKepdrWZ79oF72XhLw6WFiwAbd9FPN4SvW6hLKdvxE1H2T9ts9d1Hr5mFoZBtWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25p16Ne5wMXq9wZXwjJzQag6GnC48bcVmMvwSRv7H2fu93chMaFgbFwdouJ7cEJpXQPYU3xz9BNYwi7nVacWaWLt",
  "key1": "4bXK578ZodePA6evnfpACgo1eYojDVw695V3XakENaf9iZvqk78smgcv8CAHjxNuV2GKnhbcubk66cV4RpdPgph9",
  "key2": "27NrEjSPAWE2oBLLJb8X8J1VtbydnHcuyh2JJMpfGyADgrXCxi1SbvuQE5LRad9h961LwaHZov6c7RAP4PSwyQnR",
  "key3": "48vR3fGneDhpwS7FhGK4fDwAV6Yoahch8Wu78Mp8utvhyS9HxBtAkjR6ysoKaGbsWqvGNmaAN82cBzue9xucn1i1",
  "key4": "nAZ5W1bCf8BF8A2yTXXxk7qPiC6CXKptdB21knnTDLPpfyu9pnuMygPHJHuPjj5gsp2Lnv2iGnagHiwJcc7xg25",
  "key5": "5fugXGnMjCMmh6pTtpjckpxA4CsZT8fKNCn8JwSB3KrmSVPEvB6RK6xnPfxXGV9WQRuEKtoZsJnziAMzQTUZVYvm",
  "key6": "5TKPw5QbMLVbKQqTeCkicqgfsGuqoGK6bXw6zgSYWJDf4HwA17ZMctjc2eXeny8DqtigdAerzw9B3MNsTbFvo1p7",
  "key7": "2PuXPjeZHKAHgptvJrAXDLoAZXaV9vHBBfsNNkuw6ttRWk3H3NPUgkr5z6yoiKSjtGxeyR9kK2HHDPvbGjMRr3mK",
  "key8": "3rZRheVB8LmurPUE6sTVh22yLPxnSrpmAL1deaZV5WP2ufeAhUiah85K7yXkGpy5z4XKcnNHXwsenhV7G4XSWLYp",
  "key9": "2PfggEaexPcMFRtGLJqaD7SWcBXqQbZ4Fwduj2DGZDKjHQgAcWQZ45H2LYSrQzqyKpR6EAbmAetF2wprXXh1om81",
  "key10": "V433Tg6eS5zudULLrVzmthgqJqdymZtseyvtXDQbCdUxbhFXR4MvXzGcpKWPQGmSpSeSgEiv3YFSE7E5YLkHDjd",
  "key11": "p6XPo4Y93Ce1tc5DELqbqWZK6BLdWJ9rkT65MoZzKz4i9Uvy6ug88v57A6HStQg3317TSbvmwgfKt6r9DMDNSUF",
  "key12": "3jmvzo5j6uRhU1pAv1UXdU1xYocwYcCSSt4C5mSPy26a5XcufrBxY9nSBTRUYHStLwf5n4Mn6JWrdM4eUdpuPJ9t",
  "key13": "5X2hMPsnfWHQsttGowSvVBjx3Agxi2zyByPiMbSNnSMWbqNwddmUeqYnPAairVEavyD1aq7TBTaa67ywiuvCKGa8",
  "key14": "5L1VUiwxhJHwEtuqFqFfEWnTSvqgqhoEYy7JR7jzWsJPJ1FsAmbPxS4QvfVmHyRA4fM39NSNHSwRAsZia1ZWyckf",
  "key15": "26JSt2dsHU4V4g5xuusfeEfbh8zQz2f5M5TLUJ1EppnewKdnpfbaJjTwpCuvrTrHpDJGEv1VRQJER5hVF2owJguk",
  "key16": "36P47NpAXzXYdx97PHzz61YS7MJE3AJQQ1XykvgxnyxTuUno28mojwKkPw5NMC5QAXfqEmwjoo6u3fTKNGnDmEun",
  "key17": "5CABNzWdtCkuGCBb8kHH3xU6W9hrKxu5NLsmn85ejQs67NocQuYFrUiUQciceTjjrYr91LiYWQ9Rq5zKTehfuhM1",
  "key18": "3oio7kMU2xKNYdZFLJ4rS8SGEZjZ8ewRZTEeiNSLyF16nYekG9nGcbE1V1xmQuzWMFqxK6rNukiHnaMMJqbb1wX6",
  "key19": "3rY6unMgRL9ibdHkv7WGiN5P6DtYT4R6wMXKt2xsurKLVAr18uG33ee3FKWBjY2gvucHCkTsg9hvMBKuSJ3jckKE",
  "key20": "5RMk1kWQcz4cSkXwTderMLux8QtmrL8rp4Ehb3xqacz3u6Yo1bTNnqEE2P6BRUzMwuRVYh2F1JGiuS8qgCiVuBFK",
  "key21": "5FFSWQ5JjaW9cBiKB9CjhhyvGtTTYisp9QEqwHsnDRu5RM4XR1a7zuRiJ5dUyaYKfdMEeSuBtf1BvwCVYgXNGQj",
  "key22": "2GAm6YoPD2UQvC1cRT1iM8KbxxXjUHmuGZhBhdS61xYLVuHc6ZsaF4QbV34fffeWULH9AccoXuEh8DcfwehjNxdB",
  "key23": "4u4W4RuAjRUvw2Y99eRGXjNn6q3cZ6w6x77Zc8D2bsLvjR7fYxuEa1CgUPowarH7r88bJQJhCieLbP7JGhAaKows",
  "key24": "4wnDgykPmYmGvvFiWk8VZGVboNSrhoqUDZSsw16uDfdPtqvyPWbHKzqUTWv2kWejcTsFUcd6aMqkgNkfPdLePDUV",
  "key25": "4os3RqdvY4BtV4Uu77Eu3daYEuCovqbBQ1i5s21LahP3f7ePxeDWTFKMGayC17V1aAaZMRni4MGaNMLtmLhn6XGh",
  "key26": "3BHtZYwHqZGhfFBs3Br4agWkAhUgJJEarkcXDVaX7QYhDy3H9shNWV8yB6oMhdDiJsLTNE3JuknDLvBCptFZcyfJ",
  "key27": "5NgCzCk24JLFVkfPFnBvAqqmbuYj77woNjV1qNZD1EnBkrzHvPo4rAArJNDBd3muukX8ieZ7dEFVwPdzwToqocDq",
  "key28": "3yzh9CDHuU9kZZr5DPHz8FHL57ga6tqmyUK7ks7agZeWaYF9UACin7J1QtUafgnMbPutwM1B6LnFDKUFCeQP8C7a",
  "key29": "2ow4pNX4Bs37h8scdsmdTkjuhZBdRbp4aSsfCKZaGRqry9WEshxE1Ae3Hqga6fD98bgteFzdyZFJbaXTM8Hv1sLh",
  "key30": "kU7S2sAWJTATWHbcExKQd7tSPyj6wpiYyZeYBi4s6jjJ5LCRGY8aLDx8T3zMit1i7eH7ecxfBRCSNVYbA6Hwcvf",
  "key31": "5ZcZCkRGrfArVEVrf7nMHc1Hnq7hXgDkDSQ5KpiT3pNZMz2NNHsogS9cqwManD3D1rXhceMsRo4pdQjmusCV2Te9",
  "key32": "4vPfREQsAZ2KFrF67PgR88w9GETQTfsoeuKZBVtueSVvLdpBxEYi21qpSCrnQFq9CmVPmf7MAdRTQrZjzttTmo9a",
  "key33": "3AzWP7ZGsf4tp75yV9ERLcC6XbJcfD27ame49KSEdvb2JWR3HfP38DjtH6k9hn6GWU8V9ZdDmCLqRdKfG27iEbPU",
  "key34": "4ocm6QQ85rrhYZgL8Sp8jfg7yEuBTDz2dDeDmsLL7ZKmiSSE8aizN21fVKBovAhekDtWuR5dkprSh8Zry8M1gZwU",
  "key35": "5yXpEseczKeaMLKtMA6mV1wAvgqNwRE2kyoMMPbS4wpxXfJSA1iPhfdDKBH2MSFNpoznKChGMWCGRRtcEtfch4At",
  "key36": "2tPNmsXfZpSWVqAibiTmBdGb5BVZ5vJa9zmPGv2mDhueeA5aJx2Nx1Vaz5jRZNvALnSEqjv5sFqN86J1bMAA8Q28",
  "key37": "3cMuRb2KueeAiYm8uckvqMRYSEzaBryJuKV55cbDUqJDuWFu5dF8g4r61pLNiA9iTAN7GU8aDNSFDgdMLD9GXSYe",
  "key38": "3TZn4PEQ75swqkQxmtZW5oRdKAkacV33hnqpwmyxKGUXeMQEH9JHrqSBnWh8aow2VDjgi35tBikmnNgWnJSoBDfJ",
  "key39": "2GdPjU29jpQcA2DwxixsoKA1Zz5rRuW2Qh8pJ4oVVsrpee9rvedNsKTWmaZTkbAXHedGYFnWzeQBZXJ7XTgnR5oJ",
  "key40": "5tcANuKoFUUGcQF6b37trdGLe2hRPPn5x7boUfTiCBwH7XMTFs5GSA1khL1P8jB6uPpM1VgwvCLLq7bHp624L7Cs",
  "key41": "2LStdrrGUCBCNnWxgrhL7yDnzt6j3fWxXS6Z2FeapGAwnsNwegUZFvnW6q8dRUytu322Ew1bPp3E6a1gkNEwuwtm",
  "key42": "5vbu4bcpVysfF77fG8cY3dCir8vYWKA5gepfepYScTKZQWNDozgwLQ17FpRN95jt6RVyXSxi3E3MeQhiboJaiWn4",
  "key43": "4FzuJFG4FsQGuUqMFVydMb1ZREZVQrgXY3yzSNC44U2dMJXFe3ik4aHp85JWLSwC7Yzn8aVFSnQvXwHDYYLwVshF",
  "key44": "5U4MXZ65AERhvkgBnmFWtrrLzmvL5ujhkxW9KYhzicaeWyWRgPm59MbPnWXAmMrTAfEhBMK3sEkJQe4wPH8Zp1K8",
  "key45": "4AfHmLrAdVz5q4EzkaVW9ABMgwFTe4iJdWypsrQcWqYUk1WYFCzJrPTazfLc3QFiV4Xo4PSevsE2MehgKC6wkJdN",
  "key46": "4qM6bWwEmzGTFJXzjJgyFt2zwe9Vf66akkFufpnXBHVf5Qfw7pv9ka6phHFHDXTpLYZXKAyeSEkyWPZTGcwpwwDy",
  "key47": "3wP8itUgZQ7GtUN71pksYw7taTadbLRQTrvZ1AoGhisT9WSBF7iv8GnC5vUJg7kN4DKgjyhYks8ZwEGDhj3cQ9rR"
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
