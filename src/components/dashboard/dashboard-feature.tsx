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
    "4gZfJciDZdDkLKKx5AcFTkdTBX5LEYL6KYrCMScCbunNZsMbor3dXLLs2ciuY9JLX5DHtT1qpDcabVEw5rYHUzb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gmq7fjU5nBxLeG95SNyJCfY28QbeBGNNJzaT3FqqJfLjz8Hm4UdG3oxaBymRd6LZrH8sUHtBpNmJTGpeBnFYKRU",
  "key1": "4d5LvmYxRxpa3ks5i2ZML3sYk5KKLZWmfRmhFBkTKVWnpHtt4dD9seHHaMGY6PTwnBZphcc1Ye1uRWmt2ySnUUn",
  "key2": "42cuTCswEnBa4U7wYQaphY7UjwRhVgKZjoRFkYQqVZvPw2XiBba2J2TZ96GynVtrCQYSZ9SC6WqVbQA46krd8CAd",
  "key3": "zkPGthmZcfKZfXYVgnhAPBBcTkduECebk9MtkDRDMvAJqPqLoWLbwjFcUChFmgz4dKHc33vAeTpjj8GxciymWuA",
  "key4": "3CPTVWrQpKEA5U6TFjobhXtjLwdvQ4Z6W65Gzu5GFfaRdG17a2WuvH3bh4AJmCXwbipJwZNkxbkHCP3ygBi1fMer",
  "key5": "B1omNoSS7bXrFiXwAasktfibAjYabfjEG6abhitCbVr8TZFsVxcJzZw9xcbTfwH7LkCEsKASuq8iG21dt5WwymE",
  "key6": "3gyibvJpxaEFokPrdjLd9gUTNAGradRD52me5z1nHCbmAcSbn351XCfMk6aJ5rhsAprFkdJsE8JXDTv3dFxJu5zi",
  "key7": "2Ec65uHZFW6y8gKBi9beYnRbNiVVwWqFPPJSKX3zqF6C5kz9HFAhR73CUWJdMsUhLFrHNAJq8iuVPHoXTjtpzFRT",
  "key8": "5Hw6VDL9z3y7BW7HMCWuMa8Z7UcWy31xnfym5hZugFC5vwPsjCzBaDjhubRXjBChznL4XgmwELarCeDJ8Wkd3bSo",
  "key9": "pfY9pvk3QRSzg7GPiUCZMfxFZfqoW8vcZ71cBwzXx8SFdtAQXYDGUpwW936RjY8vqWRLvpZu3LfUninecahrDbz",
  "key10": "2RxY43s5xo5jX91PcQbBvasYb1ZwUCx15LF8Pfw9yJnEsfqoViXZMZzkgirWmjTogayQxvuQWfpSoho7RA8jATma",
  "key11": "5ZLJFaFnSapDSRoAegvgpkebhs5TLxVTScEHqGRpDMaT128pQozLwThkGY187wAKfDQbAYqtMJ4N7qnXppCAE54p",
  "key12": "4DPEMRhEdNx1nS4tNQDN1t7rTzAWQp17tfhQ7xmZ6SMJiLz54AaxuCra6nqwhiuoWfyLcsEtgpPR1YGG6erVju2U",
  "key13": "4DTwQQcDeeFjFdRmmywb132CpR7SdwHXmbqC3rmyAAz8LVpLDWwep9AoW19WjPPxH69bqJdfANxGS2rxth6neEny",
  "key14": "5P7bjgiD2ZhE6HdXxGtrxitg6vYkb2NqbwdkFegBhGAdyjtk67EoWDiecnaP9tRWpVB5YsdGWb7Tft9JV87coHxm",
  "key15": "5ZXqin8W2LiBoxXyrqDMCFxXzgdA4HpiNVsahzBVjNnA7eyE5CSL9xiJprLDH914JNgcGe67ZsvXhprNdV97muEZ",
  "key16": "gja59dTWAf9Ab9CHderT2fkYmbGhjaAVcAco7cpoCBkvvA15DPDh6S5uyVNpw7xnSbS95MDW3RJjiL9dAJtoHk7",
  "key17": "3gaisiebKHehMU2BMhS6369qTL2vXs5p1FSiwGVbH5EPt2r4VopuW1VfPqs2iCLZvC1rAvursAemrAvdcrGDWk6D",
  "key18": "356KGi9WgstDSjJUjNHDt9ArzZbQCDu1NG7LLyDkiJCRgmNfgXMs9w2jpBWh6bhx19imHzMjj3HoiooYrTGAYC6J",
  "key19": "5Yqu1RikxKAXA2Jx2fHbHWnvGPfHsDY1SrAXJzjJXevgWV8sYcGmq2vtPuFGduFXPfmqTwub7D3kNUgU5AJuaMed",
  "key20": "2Y5ZZab4R1B2o7UTYdK3xGsA54hyUeazQ4m1ioVW9ohs5oyW3LTn4fw59mjLtPnmve863pwo9UkJQfZMvsuJwziR",
  "key21": "svZL9nhReRhsKzpPM1Ti4m85JfveeNtEM87hTvKLM7zXBFztbLmwchuVAUU7xGr4vUpvrAWKGrNXUKX51mGQzte",
  "key22": "5B79seBDCv3BPrsjH3q3GBKSW6fZURaUS3R1aAkwDpRjjca5EcNs8ZjwVZAB72t9yJs2M8pDdS6MwKa3TC376uEB",
  "key23": "31tuV6Urq9z4Van6NDLYNpawzmvvfvApj2zUWpPSo4HwoYY1HP9mzNoc4HS5oWxwcAaxzC19ZmfhYqAaYhGwqWwd",
  "key24": "4Kkh7RVCoFCGBaVtJNYqfMFJSuTEFtnR9GCSv6zwHMJX8Qds5FAXsEPJwKAVHoyd2Y6a5iyip24hYuy3VbnettTJ",
  "key25": "4emfHF21hKBCx2xtvDUC86gTKAxrFSCSy67BfkuGswnhVaG9PQHHCL4ymaX97tovnoDwehbQjSZCCsBcuCxntJ9C",
  "key26": "29rzgQSftB1tqmsaFiKaaGcCskZRW9HKMX945cghaL9iQLTDW1pkoo5bbTEYJ6gzURDWkUAjgqCMZCdHHXGrWSX7",
  "key27": "25ScHW3m4dEHnAdKGPbehCD4H77qpNq3WicPYmdnK7xaxZP5Y7B8nTPHUqmiiqiWSq5DhAgno48gzP16F4KWaLFw",
  "key28": "3RNsYUgopZgx84J8pRM2WVYERjPua5rzqr8B7hBvFwdJZk6m5N987FZhNbsmMsVW4vB69gTX25LVSFW1mKGzAeTs",
  "key29": "43nqMwyWbrnDZW6n4Qdr25GDoZ3xPuLWZ3eSkTD8sgpJw67wZawZR97BTLz6ABMtRfZNVduBXNxV765zX5JtBb71",
  "key30": "eD2tW7gfNURYAcACL7Yoea2cetCaqNPvadZt3N6CFEcqdabajHKn31wv38iqGVK9CMhKDcJkWvwDQF2VRwnx3Ge",
  "key31": "USVZQipwXrCGfENsvVc6bhDXRqqUb4zNVJfPuqmvBeDzkyfjHnftMdDWBP1xiBZpgWjA6dXuJr16VNc1GBp5f25",
  "key32": "zxLZtycuBk333FGFiTn6ra96SwcuDYecV9qjiAryQMNznaBqYTc9NYEG2C6YTHG8aVSpicEt6QqcHhKncHWEMTW",
  "key33": "5KSeKufehVvs8LfiKqyS1TU1MPBwY1fUdcNdaQjPsD2G4fbo4L6jpvMRcNv4oR7QmqYa38bGLxXYfd2pcqQdjd2o",
  "key34": "2UbY1enJvqLiBCM5S5WUnf7KTiFDtiM4S6awa7YbBN1Gi84XaUDnzTJPxUxjXHE14CzQv19rE7r1FLoRKxHUkxKR",
  "key35": "59K69nFPkdt96UQ4PuTtYEZinUCm3iFHirwgYZnMuHy99XBAt359HeHRtoFYMQLjHM342BvZPCqAADEndWRzRUUN",
  "key36": "grDcFwraW6XyeepG5EyDkVXA8p3kJYFLuUMSdxMqqynSqE6Y33kmNihJgL7kPDesBuf5FQ4URVRM4daNzaAbvWs",
  "key37": "5SouRpojmxtPK3tEi3iYd4Ti9Fg478TojYZqpcQ7ky21Qi1LCHf86y3MTU7wGcrjGHnWjEvZtZ2c4i744Sd1wswd",
  "key38": "26wv6QZKxf8FmwePGFYKxmJ3M855YoACURKV5KPdz2btuxSkQgnNuwAMLxGSF4nSU2paiNtUN5WRNjcPkRV31qVK",
  "key39": "dfUj3yyEDBP9jLdzLoqRnUo73ZR5v1G93f8YMcVEMQd97YjCc4L82iiKuJXjjwnkTDLWpEGe27FJWu9vRNeSYqw",
  "key40": "3k4421toFcfBV7vrokZAVu8qhC74TQKVVYLCotoq3zq3yA9VdzUBJ3WF1d1ZKFnetbgNajSdJ96QzHv7FKKUZ2WZ",
  "key41": "3VYBuMQLVKgX9o1RXA2SDwfWsoCKuyqrGbwoebJBTqYhWRf57w7N1DTvhzLiTMydN3VjnkYpFJZpG9vnbBgaVZJS",
  "key42": "4PJMJEMDMnSJFEJaGS23NjCdsj5Bc4CgM3yvT7yjPgjaRqKwzTsiT6dmFJEs5mffqe5zkbEXAyAZsFX65ZfAsWYq",
  "key43": "f5pY7rBDPrKU2VJ6AT38zk1FwQfxr41YhRt9tZtJ9x3szF8KWNb4nevDefqYeGm57kpECMi5H7nTXkbAYpg8mev",
  "key44": "2nyuZao98ggsDLKwpKRsDU62CaW2jzLbMhRwWUgiFbrWBxZXkm1dRpJDqHukTreF2ZcgqYqYPiwuwW9MhCkEHV5c",
  "key45": "3uR8c6VsVod1ajcQp72y2RZRPXn4WEft5vGgsD1xtKjdH7wM3d82bBFYRwUzPYYCn8mh5unZr8F9A84y2bzsnQr4",
  "key46": "U7PUHTCZiZKABTnv1pW8KvRd6Gzduwm4agWRW6LTioLrTeUMVXSvzMYPrwFVk7uJQgs5xjGsXwUPxA6aE3CCr4p",
  "key47": "iWBMZYYrjnanKq6prfMXC4LeJnwQx9nRYJMhYvgBoHSUBrN6iHkEM3vQqEDm3CreVUFxRheETy3qpHtzSLnzEe4",
  "key48": "pKvhX16wfuzbehbxfHFc8Ph1eUgQRpoN5XNUxpo9JDyrzL2KE6TbnDVUTwqhYEvwoK6J8c5tgc6W9CAoWPmvkFW",
  "key49": "hrENsUoMyuhVEr3ZcWe25abF8zDH6Sb1wxopK4He5pr1EaVPLyN5DppBKvTbNMdV1E6mYW9KxK2mcK6dJYtXGnZ"
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
