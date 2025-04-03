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
    "28egyi4YxfHTGHFjGvEJ3T4W9FYcv3Mq1nKzegKsvMtC5jghkzZgXtbhdmgxsmjcvq3citqM2uRonKYtMrnEGZau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CTtyqZ2DedV7zpZrJ2RG948ehgL7tnAYoy1DC3juqor6P9mSF8enC49nzhdDMqYuzRDXJaaE1Tj7pv7ZhTe6fFn",
  "key1": "JHqxg3SSQd2jjmjCMQAdrfK6z6RGPvrdqm4gzUnMHdBsoriFKEUNVcuh9ivEfauKbtX5o1HMLiTEjSgJxDHeRJ8",
  "key2": "56RRnsusfbhr483r1cUUrHfsj9DqZx8s96xUf59sY1x5aJCLaZpPF2efmpM782GyS5BAoSpvVYo3Jgz8x1xt32aB",
  "key3": "2ocvsMyhvZ2xvLTwuLtJQKcdsVjVkoKG4kkwPiuRb6vVGfy4U9XZPgRSDYXTZpL7deT3NQ5vrmcH83KShntxPSxG",
  "key4": "4ZZTJo6cfcJbcRE5WuSsQRnRmz46nwP3kFv4CrJFVntw9no8ZiturGPKDtHrB6iLWkmb5CGyi5p4kHWsssbt12qf",
  "key5": "ef3qqy3xtTepyvpR8yxodhhpd4uG2ugKxZB2nkHe21d3U3ujqq4axmdJhfzsMoKZMvw9PQ56PBNmjcchoiQyMKa",
  "key6": "D1BmP9Dj5Uq9szmtv24QGDeaUyoCfDzLZPAYEc2F4Y4uLFSZzvvqYUMhMWPEGVWZ92DveAyYDtVzNDKrXupd4k6",
  "key7": "exTFituvkcYbRyHKavAeshZyqPuvNfYPG4sZ1Y4ePSXK8mj9sYfAxdKTKcgJjHVGoA668Qj695pFjPphEJnFYTF",
  "key8": "JECFHuM94axQng5A4YBVzpaMsQCsQJ3BV4u6seiawfuzmVdbWEPxXujgd69fW2rtyiPtTnxdXsrWJdfau8UhaxT",
  "key9": "2kNVn46Wy96RQsnr2sFhV5Aemk6xK6bVfn2LCD5i4VQi2Ym598hbJaV1DJThFN7bYzJjJAM5Jv4tjyLJ2w6jLg1T",
  "key10": "4K61Qax6KmEUK3RULVG1eTHQDzCo3sPRhXpgGFPqebmMzcy76jJUqN8NtRXVTAunR12X7TT8C7xcM92C2actaHiD",
  "key11": "55HK5D3bDdna3Go3Yd5LofRgw67kxE41RTZ7sRUfJi1AkpeMDGY5fTczbsS7vPzFT6ADfyyS8hKq1TUCQeFwVcvj",
  "key12": "3Vd5m7koceQVNNGojuvKKsZRqLfA6gbruedpty3M3MxjV4oUdAt1ghsfZEYT898HPWyYdyELUCrPhJwevMhhdYng",
  "key13": "2HbNCUUGLLd7gyKpeCVCMbQxXTiVrFuihQKHRXTuJZcLGrcBcW39nV3AjCBE1GANKaYXYaS75TnbnNXe4mKPDgWM",
  "key14": "5soZrz3sGKLdNNZQVJjKWgAfqrpUTqWC4xJxwxw9NrPTBuaVDk4MgVvMMxDUj7HLhxyZzE3gfDbzvaifQtthxCTT",
  "key15": "4BLmBEtgR4axrMUoGcoaZSbcizE2rw4NX8ADRCGPaKy77irLAzrRWHyMmosvYgAEbh8uFgoTnYLHchZrYJfvfquD",
  "key16": "669ncTPz4jjCwu1hYAeUgu8mt6nhcQwZnMBM2pK2baVJFW5q847DmzWxbN42DR98fYoeBRkYRBzUD7a5hTSzic8",
  "key17": "5EfmUWEgUrNCXUqJfBKXRdYFTpdHwPnGeZMwa6aRu5rBVorYrgEJY1sXzcf15vbkeuPU9PKNcP6PRbFV3MVNKGvA",
  "key18": "5PMWSmCFcnnfXUc23hL97FdxoGp7xZLrfZxwgdGeaYfLX5rL1ZQKaus8eKC8ztAZuw4HrVHQs8UTJkARhLHj75cp",
  "key19": "4UsknuJkq9xtNb9BBsEUxi5rcCFx4ArALSZH67pvhVHqdpXccj3MJNfymmKiRqMZmJCYmL9paKCtxBfJWdbYr2a",
  "key20": "4KLE6Pdph8oon36J2TBWY269df1k8hAR6YjiY7CW5mzq58VwEyEYmvGiABtiKewimuvjSnHYGiunxNzzobZQganH",
  "key21": "48Y6BWV11pKSRb6Kz78euJYFRVEJYNeBiQJjehpTPsr55iRzA9UJjPrErAUHEHKptZDFmog5vz95EMmuqJRNdqU8",
  "key22": "29VZvnSwgJ9hobjL4si6GVxfVZgF5vccdaZz7o8hbod5MNdVc7QnjNwx5df1YBsFJZ1UmuahwRcpYYhkrLRQKhGh",
  "key23": "3PDCV8zV8mCBRYTAiWHnrcbysokCz665Gijymk7XnhqkyMkoovt29GVwrJkmxWbQ7sk7yWQN4xLLsnsjiZ3AsM9s",
  "key24": "5kzEX8zm4Z2rkasgbANKMqRgcDVu1ks7222pHykFvSPheEg3SPPEsKrmpMy1YthTocR9S1oNNh6wNP7BREw8h45S",
  "key25": "3CW4DAdSgEsntof6D1gvtWFB7yAqGmwNiNvsQcgYqR3nxBuKAz1D57g3M4k5sb5rnznjMGpMc8fM5UHaUwpSvqE6",
  "key26": "4CUf11GbYmBWpePBERzMUzH8YfWEvzUzHdeEUiudrEJ62chf9fzYFAy8TncDkDRabX9ZSVj3yaZqYDPT9bcLY8j6",
  "key27": "4xnSeigj2YfVkHeG4HCLHhwqDGDopWpeV7qJoPc5wvYd3gojAzsfkqtHQtUwMWTzmH49QBPJ56ziwjMBFxEATXye",
  "key28": "3kgZmfDb1S4uRECRtyWt7aNa6cgTw4ParSyGUCsXSPxXQvEnQ9GZt4opqMxsNswX7qig8RAtgAkZM5yHqMyYqSTp",
  "key29": "2P8kYvMbSYTpLrPiUBEH6Ups3ArUn19RS4yTfnNjPBryxTQgDLRLJ9LcYfU256Db3cnXkeLz92ZW6gGNQSw3CxJ5",
  "key30": "4Evb8HrECBSAfYP8PSVzonzPqomwX4hE9JTGMgLzFbL8MkTjPgNEztZkshBcsLkXW94uGH2ssBCCqjnE5NCPb3ro",
  "key31": "sEQtHv94LZggY2vbHtDXVvPYJprwbMD6E17riAW7v6RaDkk8vjAG5e8iphAaM4tdaYE3EXgyBUiAQbbBW1Sdmwn",
  "key32": "4cdrWZNChm6k8DVfZ7NcDWDyAMnK4ZXPXuFjuXhmgEbQGK9n23TF6CFWHMK3aJ2iDu7xHAu5itmn81jS1AemGomJ",
  "key33": "VAW7Pj2Vb9Y7eq5BnTCwQB2PjuCZo8iCNCCuUgvHEKrATW71Qx3wbodG4yxD8JWrmnSyYF37guk3gckNpgTPPTG",
  "key34": "mg52BEDX9D6zSiUGjjYLtMV6RHEXxgRRq7du1yX9GLwxSUWEaATZ5FByBcF6moT5nBNiqwyYr3k25fM9ADBswt6",
  "key35": "3JxmZv4TodTcTZxNmYsNfnBsp4xJh8exwS4yRpJ2gmSyhCEbG9PxTBsFg78To4EvX5NHkE2tqwHe5NPCnQTcdiBn",
  "key36": "2yVKTzznrPKLW8QBkecZuhj53PWP8nKeVYnpM6UPFUd5g7oNqK9b3FdbKuPAFwiLroZVF76vrtwpUzPvvXQ7e6Kf",
  "key37": "5FcELMwDRA5sxin4ytVyXcyvL9zW6w8TcXuYWkvhM1QTmgcY8os4vXEyU7u9T4ABjF4x2cBX5jYppz7r7g4dpwLA",
  "key38": "2WXPGoggtUD84QaTVcSUzmVXMb9TfYgCmngjAmhWeMKEKrAGT9c5Qk8tLYRJRnarLTHLucLEyE8KaZRja4FHrSUb",
  "key39": "5gQAZ4aC8G7MdFBDXx6imjrF45W3pDUCz8238pysARFP7376nU3HLWVvVShWg13UfwjBcMXReghhjoVtKxhdJyfK",
  "key40": "6ba8Ksv98b1b3rBkuQRQzr6qHyHtwgkz4jjqoJpuWncmeSqvv1zhw1gjswWBRMpBFXGXzNhYZE6eVxhhGuVTn18",
  "key41": "4msH4vSaepWKWnR8h2tHzm9k4mJFkzrSQAdcmWca9rGAKwjvmLffaWou9RbLzzAzabScXSUMTTc9BwMCJZZusg6t",
  "key42": "5EKZmn8uMuUL6TbqvqihWtqi64LGkShUxh1KRZ3aaCbxt73WHipoDjJGxyk85B3NBFbXEDSyfahqDuJ9BwCvb1re",
  "key43": "3bx77xuBJwxouNPPg1R8Hk9At2mCeZVvqmri5ZLgr2oqJJiAv8CxXBqDeprEF2XMxg9dcDqUDWvn5tmDiDLvy9YU",
  "key44": "EgPtAynW4E4FrxkxsPiqKRZkba5Bf3GPYgWJ7fKFhHAh99Qx351ij5xRPMHDyQxh5MmatKM7gs8ETB5euHhMWH8"
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
