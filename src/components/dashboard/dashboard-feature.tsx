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
    "5V6orokbspe62DRw68QH5ziitJ3Rf9b6nVey686MpViN62dnFeYB4TCqLt1rRJuMFiuNngHK9D1ktdc6gMFunsNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xWsMWFZwJMkvCRTiqANvakvRG7cVyUjFqgLKH9Yod2kTwQLLeGLNbfCdT2utA7PTGWRQjSxaU4pknPgHC36uetr",
  "key1": "3ghaRa5ZWso4MBYieD1coeK1KtmmPpF21BiiijtXtMiNdMKrKx6k65QBP2RsCActPcpn8meGcHoTJCMC9r3KgCU",
  "key2": "4zg2TQcnSnSdFsx6xxBJ5sYNSuA6MEcaUy279yXjA1P5HUgzisfsfa7AU3En4ERG3AcoTEoo7SbigQwQK1jLQ7KY",
  "key3": "3eiRxDDykjzjx4y5y2xzyhMXu7qTHyBTqEe1GcT3bwwG9WEhXsj8inEzDBEd8jLdVTZReUuaSVMNv5bjyRxu4K2D",
  "key4": "m8TDBbuLotpyixBRbU5mXgskbWQ829GgZL8UyzMiwFbDSqsLXs4My9PzKSWvgaw6AXKGTiTvTp1xcYwz5voH9RZ",
  "key5": "2Rd5Pk6Sa1huzpz8wqBFrB6uoUiSGGJaLVeb6DRRduUuuYtGfho7UQHfLYwmXK8sVvYiR76zTfkRF3edDzsTYjVs",
  "key6": "5Cqerb76QupgSWTW5xVs9rCWRstB1oLLtQUNG3JwnGMajq4rKaXSLy5WgpNdbPEkwaLrkC1Hb59VZkkvxaqXd8Uj",
  "key7": "VZjB7WsNUhRbj3K9JUf7RaLWYhgZy1eGyf1yoVr1eB2ySsYKwdicMQCVgVmSbr6mp1YB34XEpTBLrH6n2crnEXp",
  "key8": "2KpM5yo5YguTmwMBywytx5KzvCrK84XFbo6jeGdkoK4wTGsDLNW8xmRaamqwcMXPLAsYCLgCeaZ2mddvG6QosYP5",
  "key9": "2H33Pj8o5puKwEJ158TdDHrSaheEsR5eRTXuvN8EZz7nHvspDw7CBFbswucQABr9zwJf3fPCaNjYZFbJ6spXoxR7",
  "key10": "Hbo1GtLDbZEGbDmg3yigU9Xn1mymPCgTc317NrCmmokPxfnaaWdmTEUAaNVhMjc9kaCpbPb37aoSQ23XD2skfLC",
  "key11": "4Cpabv1xKXgZpgDNPastQSqCjoAx5ZDkyTyYhLpLVdtfcHEzaYnbFZ6hL831ESfRJDNUQzg5GvRY2aRzcm1hr3hn",
  "key12": "4jMfXJSZkC95afm9sKU8nm22C1hJkfAdMzqp9JZV4a6tRyVcjUKFhdUkzLLbcy65RWi3GUyvMkoAmZpQgadQDj3t",
  "key13": "cXMdkEK1LUTQskEgnpQUtbkEt8i5xcAwadUQLpETpBDWnkma4AsENSwZigZDyBkqjnD3BVAXEyfzcKNX2M2yfYc",
  "key14": "2hCxy3hFAAcQUYL5osac4RREZix8jY9UT7SJg7K1QgBD4GyRh2PdLK21iyKkvkZtahzsVePZ4Pz5m7YVHVcWnh36",
  "key15": "2cdDaVPq45JrhPqeJFdBLKZaBvu6P8D1NYDHtgraDXgys2zZfQvNEyTUyXCP1XZB2LuKnivxQmk14kyXEASC6UST",
  "key16": "3KAREGWM8e8hD74HuCjFogSsiHac1GtK4tb9WrSVtGzW8mfHPk9TxP8ucR2SkcPWikdwEKes8CnXYsku3HHEDpW6",
  "key17": "4nBUkmqrb9xAu1aQLDjmaNPrgzkKhgRTXVBM61frGnZLyTbvHMtmuauxUNJ7UzarZJarQ1mTTRsGXL1jmRUwaAAJ",
  "key18": "XVN929mFVjrwtnrtPLPJ2q4phQA7gBvBXECAm4ZtDkATPysQdrcjCganZNGkip5aNGffP3b8jEp2nvT3ysJysYD",
  "key19": "GWG1NCWKSLoZSmeVGDmbBpfiVhBhF2pKuiDZitTqmejyXpUxWx6Wkocmup29Wn2CuBYWvVBnfEe14cUkM1NEez2",
  "key20": "249RRk9i4NtYtgGV5rr5z5Ze1diRmJUCGFPN759sqvw9kkc7DYEDjWQKU6ZRa9dpnYi2e87rDE43Xif74178UYg5",
  "key21": "4qfzrirpnjjYvRCaSsFLbciaMLMBxCRyc6EoDbWDqP7QrZcrfidzZQWcgAc8eeUxpXh5XcLjhexEM8oS6RRzwHEG",
  "key22": "ZvPQSBwWRYoiZo7Jto6SiGMGcyHot8MnrYx2bxVbbaAswcMc9hcYBsXc8CSPU6Gse7iGGicZWxcaoTmg7EHNcUb",
  "key23": "4E2HTgas5VMgbFooD62bVwXZqHVQFP22w3QvyCyTroxm6xXfq99QzfM28rYvJEAMsMmVRAr7uAeHKLuV2DdDatXG",
  "key24": "JjUXmD8htArLzCn5umN5bp6izQeJ1xCySH2kY4aJWcsKiSzySnihq8YaG3XoFFGpjdyiAyvn9mTtDuxoZ3UvHms",
  "key25": "459YumqsDvwDyjarJWfkcrda5cJcShEUeP2twHDmHH6SVvLWLPcNbEE6URtxRxHQurBnEqr9wzFjRzDSasqPo9AW",
  "key26": "3MvEDgbNgHWrPyFdLsdZACDECNhmaD7nrW3VM9zhaL8x7JwRyAscRKCRjvHB36XmrpKWbojW7diRi52jePVzEdMU",
  "key27": "2X9dgCuoWS4o9cqWsHuPETGFaXUfeY2Cr5bbBHPb8gsTDMgEHbis38yNBXcCHa94NQwzsSr48eyMx41Zni5Fi7NQ",
  "key28": "5m7dX5Mjs8RdCdtDsDMQha68VS1ZTEo911nfee3tk5Tk1WuuaTt1X81m7ET1XZyuJ7TXaTq6u2DdLSokoNM8yNSs",
  "key29": "46sN2V5VfrmhLywhn1KhoKkxXE7b2tWkuGwxok86uBkA9NLsMjbHQhwS4pMi1E1PTYYZprsGc8YHAWUiAYsEpx5w",
  "key30": "M64J1Qp2HAu82anvo3r3u6EwpJ7AMTUCyXmp4WaVycTp34McSS8YpaWBUxB3RUuqwZnSxTL4gXA98DiYvDuSjmd",
  "key31": "56mHSBey2ZaEcyxv6YocacEAg9HiW6GNNQ2QTrygkf34FLrmYPidrw1C9uFV2p3Hw519PQAhEGHKEM6AHnnYnJD6",
  "key32": "2a7bynia1hhnqR5pkLz1A15nfzGScBodRqhrdn1re1rpizMjGL9DMQBt3KyFKANxF1PyZ3ufTdDTzkx3TwHEqo1n",
  "key33": "4XWqnwHnxbpd3uQmhL28QaUDn1oF1dfzctT6erFZpeQE8LPide6UXRi3hCvFRkqw821uUeKUm2JUjVkdCWbqsamA",
  "key34": "5bb3HdgPx6LgR3mRUvK4ETgi8fvqDtDC91FHjXMGVAyrXjsMZeSDK62bR1jyCYtRog2fRH69qbMoxP4tAw1ydhec",
  "key35": "3wzcRzmpFo9LvUv37J5zQiKcN8PkbSaKZNTtLuHmUbEkAdaXTrTo1gZ6RAD4hGJC8GAypMMgUziWHEKNqZYfpna1",
  "key36": "h5C3uUGWoBSVwp58DWGeRNjPvVDZDVfD1APKdaUN8MBCTB2F8BZ6eKrBEoVHVt3axummnmhoJEQkCxq6RXV9yEM",
  "key37": "24qRSJZ4GozWLQp8fdGocCxRBQ9VwN9cYd5nCEHEGVLXCABXti33iaPowNPfN2ckRfSHuKDkeq8SsAqooNfPc3xt",
  "key38": "rocg3AYjsaJnURCkQQSQUdaR2Wds1stMjqWrkXNVWmjmJosPUTHdCkaKphfpkjSjspcTs73Ggn9jW7eWZY3Wxc2",
  "key39": "2w7Wt8ajM3xpw6VgMFNwpchKxpvZ4UEaVeXyhkQ4tdAZ8GVVEMv9HmZPxLAgWEJW17xZDdmbgE7bmNF6pFT9bMvZ",
  "key40": "CJY1UZn7g5FjAUnEjoyzDv66jhUpUyuZd3S7ZYJ4jBs92hEZ9Y1y9EZkXfHo56pieY2imZh1wqtTZi238uWyUzR",
  "key41": "cc591DYMAHFSco8hHXqWcXWhdqPmYZ6Krv1mfo3HwcSbcQ8wGUKLaYFnCpX4ZaenzQNSA6RJkJKMXcFhQocbeaw",
  "key42": "4v32bLJEw7bzctCspmCBWvBBymLRJpqE7ns8SbZQXSnxxRJ66ekEpBMjVjZj7nqAeMeWX6oupfVhqYfZKHnPv5Mk",
  "key43": "2ZVUUFHwJhFz4en3HvTzgUp8vU93BVv4RfD8KqQg155XEsKKyKkNZXMLQGTm123Q6T2M2eBRXwjQywg3uaJLrrQb",
  "key44": "4rBjXF6S4UafMYWufofWwVi4NUXevCcQb4GLKEKSZwK2A3Fq9pf56qJrzNEsUxNjf55K5NQQPZgjTerkd3tRxpsT",
  "key45": "2ChSobCu1GrrKMkMwLztyVzCpiVfUjatjTM6hdGieni61DjmWceyszFAPfjR83L8qS8eZpHep36twjVRA9gLfADK",
  "key46": "2KXSASBvm7L4p4BY5jZcKrJmsT1Y179P9TrmkNV2a9ja8QT8vhu5nJMjhyGWnSMzVGWzENtqDkJaz8Wd1kNhvfe7",
  "key47": "1286eL1DyGj8KW6WoZjLHYhv2d7z1Aco5CkCfdHjqP8TcawuDG6NHv1TdhYGoDsU71jgZPKkKDJqADU9HkeiUx7h",
  "key48": "3V9ngJxCziwQgfD1XC121Quubq4RceHHDmz5uyqaaYcuqX75k8hqZRXU5sYHDwD8LcX5ye7gQp46oq6QHPgGHn17"
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
