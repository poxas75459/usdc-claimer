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
    "4KhjEx6RUR7pKX62uPEVcf2bDHzpVMYf9qDEWXZcTt8JiRejba6zcRQ6NAgjPeX8wRgwsVegZtNVepWst8GuU1F6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BhJVJFa88dQVp6c5StQHb5gxiAkTYN9uff8LdjT4aJQ3b29CmnHkcwfxo4T2ZsgNAhPrevNRmCzDDPWj6qQSQ6Y",
  "key1": "4WDbTFTeqvKgcwzFFUYrQn3dxsTKKpbUWvfbG7fdvbizRNvdue7Hfer41CiiBtujj8JJrGD5Fdsc5UnwpMfj8LAU",
  "key2": "suc8eM3nfnXNHK3SpsQoC5cbVrmAF66UAdeFZDjvjAtURo1DqDYqMCmn7ARYgD77N4MrRmEhDWxmCy8ziiCBR2i",
  "key3": "3uG7vFomQXT2arKDP43jJ1btdJS9iaqYTodrV8i3HRfNXmaDVRvrkuXM8LHzPZJ9tMg9ES3Pz1PNnywHKLTMmCTz",
  "key4": "5ZNjTHbuB8dx9VmvG7nurDCFkvnq8Q4m438MedtsRo4UDeKtTK78qFAmf4B4kHhwJtoRyv7ATho5aJowmVKiwxkG",
  "key5": "PzHZvTeuhAzmJXMMJZHofAJqk972qsp9dqPhRKtgKCQvTbqdbL4m3D62FHFgSKheCyYz1Z4jR23KYqn44X6rgiB",
  "key6": "4yMdw9FVRkS6aTegbgSKBfeHc9hPrTTJbtzmgSuYBfGnznveLF6rfQYuNvkJ9iWf7QSpnamXrhErESQQyYCVpDZS",
  "key7": "2Y52sJHvotphRyZUbke1BC1csoZeUHZkB7EiSmuJLSnDHGDXk2z1UUGDNU1eYRHtx5WDt8y2dWKm7235HdvgqWgk",
  "key8": "4HSZC9MREiJgcEKDvep4tKkNeXn2xVYZt5xBRrkaMzE4BjydgAp7Q8fJ8KYAmdJ7ntSjfVG3ry87MD97Gq5oEUsE",
  "key9": "5H5pL8PLoG3q2viHwCACZoQCpsaRrgnqyww926Ai4Xyv7WzqromSqZaASqqnjFULXtr9GGVDZhYgwx2ySLi9yH1F",
  "key10": "zTSDNRLTZAgVVdrZqSKHmpQmwgMajNtNEya3vgveNKw2K4vapkHg6uMQxJ7ecEDbJsc59zw5QcwGR4vZ75H15Ds",
  "key11": "2MbwoQ4TksxViKTnpkTmQfMsZxgStUyQxKxP638K2rBLFgTmMSJDJoc87cwpxSRA6EPPqhQ4jXMAvkwfwomrULG9",
  "key12": "5pcNZkTQCvg9QMWRz2YayukC5S416BNv4828eMMZrTpDLtAisWRzWGtDnQjRSgwjLaWGaT6EDXzt7rtoLgXBGY5P",
  "key13": "5i3UVuTeUHHcbvj2KEsSqUY1ECMkzTh7NNUKKJWmwAwdmBbT8Qebxa4CmwJ4txbnf78auNrYbcNBJ5rHTMJTNBxE",
  "key14": "5Qujycgt93fRxAUYU94Bhtjk9BA4nB1akjm6tnukKDKQ7SkffG5Jupz5ztAPA2v5debUzs1RmTsZU5mdyk4oCok1",
  "key15": "5nD7Qh4Tt7czSDcXkGDnhX1jb11Exjm8xgF4pA68Ps6uUjmtt8rK5k5uUAZjjYWgMTkhYWncS3T8BnPWvPdGntAp",
  "key16": "2xqMuqsisLd4itsncEE1JfDPoeERsoac4TDn5zZikjatvMezR6sHkbX9AdZjjkc9aU8jCW6Z6D5GpUt83LeS668a",
  "key17": "dqtYhmeoUQwnYGCRKvji4UyXXHsbA2ESweyjzGUhchpMVZLFbSRcEGeat5K57DKxZvHZF6gZSoXm5zSfAd26R91",
  "key18": "MhDq67CbcJB9TZRtdyDfnMHq7Y2SwZXc9xXavaucZhGRzvwZbJjCQydK6eKwCybnmCH4fva5MfN1ETkyA2i4DwP",
  "key19": "ibwwyDGPKPsQjcfomLg29SGxpz4ra7Dq1sDB5vCAvrLr8xPYv9V2eiUvug7ipeJQY6qxC6WnKaLk5sdke5g78pf",
  "key20": "3u8r1UPPgLqfAt7LbRtvH8zkPCbHDd7bUNk15T6ggdvZpc9Z8q6zX4Y1A42kTSDkyGy8uq2VJWUuhbQqmi6wQzQ9",
  "key21": "3XLQsttKhP9Z7sdmS4FBA8p11WE2n6qEkDeG5hrKzn4SuUGtp9bg3H2s9veVMuWSTicgPV3wboQunWT26v725EGp",
  "key22": "25emZHACNNJDHiTbgMVBGyUz7gn5gMTkC1fodguiZUuX4vSufwNLUuK7VWLqNrioXYZorRgXfNRpR1tyjUV5EuQr",
  "key23": "HTwW89hhWWUT6jRew25Ztn486JKFRMdTwVQsQ3tr8cvn87LevQig7cWeqmLeKYxTUETgubhYDnNT2pi3ZHJVkkb",
  "key24": "5KuWFXr7VyuakxkRM7ePgWKUD2uTR49f2cmxzhtV1WKLKwJERV7oRRmBx2oqsYXSE4CdLLZoAh4BuFWrVfasqESi",
  "key25": "3eWQQpcx8Ymn5S4TdZTuaytisv7jsfW5oQSicf2K5cr87vzfoxR5543B9aXBzV3kBusXT58qpchpWWU3X4csY4cv",
  "key26": "2ZjrprmoByEeL9frTpZ5PVSqLZ7oBSEq8TEVjJ42tE7Z1yQFKjavqX6nRAnQikArLgJRGD9YHXqbDMUzTGooyAnP",
  "key27": "4io3Dv8btPJ7n7NkL9Qa3TeHzjwhRhioKbMASTSnJSL4FyZPXszA8QL1eA9WwY5rpURo7UtGrLm8aEM6EWq72RqC",
  "key28": "x4L2kLWwSgHSZYoUZiuXmyhcz7c7i7FZh9SLbShXAzxfFA8SE6dp4ep7sA9Q8hZQB3BJoV2sYXkp68pDFQuPfcA",
  "key29": "2Kcs9b8vnJK46oi8AZ6XnPFMUa91FR3YKKHt5NKmNoMJK6q4DoYTQuqeKDRPLuMwUf2HrkYugV1MFrk7dupQzWaG",
  "key30": "5CsUepREbqLUageMr86qmX2PrqY964sYC2p8V4ZRdbUDr3z3BXLokUtVpWz38xmpzpnAgRkXaM8bosE5BgJMQZ6b",
  "key31": "3H1JatCwAxhWTU8gcQbe5yXxWjZ54ub4XedUbHBxwzxgTesfSwD2MQbyyRhekrfykHPXA5R6wWmC3z2DkNSnRxVW",
  "key32": "a6Y3AR5LxNbseb8W6FtVxgCnF2vzEeou33Ldhmx5rPkN3sDAkYP54QDn2t2SQAeNYC9ms6VedkF2wmbYnFRiSKV",
  "key33": "t3TH98Q1enhxwe6s6EZEofL2mGJ8XggywY6TDYpUVCmduV4NqHNnRyEPUGLmfxioTHJyfqHxSoad5zS3Wm1bJai",
  "key34": "47zs2KZhu5GrNrTvX4BZXxxXxZSf9uEWm9neh8acdSWrvkqyJBFR2tzWb3cX8T32U6xTSfq6VSaPe1nDHJ2S2dum",
  "key35": "3ScyyLjySfGuzYZDowaHv5i8DgAkjNXQ5nKYc3hRG999RL59nQjHsguQeWX2ZZGxWvEqKGpnBFYNNRvT93SfE4G7",
  "key36": "wqH2zvp1pi4wKx1tYz9tCxr7SPzobvbabC8nkdVW53pBSWNHf1TCWDvsvBGKeDNY6mhDLj7QG9E7YgVgTVUfPSH",
  "key37": "1FbXqoKjgFqCixH6TRF8mge48iZJz1oz1byp4vfkjpsjB28jnvzNEooaGRdiBf3f2iT395FCyNJ1Z6jyn4BhaEv",
  "key38": "3JfG7uhjGQgxi12WkrM2qrJ7Ygt88E8J64fogmmTT8ZLxomPyTezDUXi6VuzkM7dbF31GcBbYmcZxsgDgDBTyfFs",
  "key39": "4T1BcVvjheaNgJ8TUMqt7dSA7EbFQ9QA6P4aX7V1wTATP8McfoFWjeybmBHg7NQRUDaPLJZqaAjUUxTYP49Rph6k",
  "key40": "8BwxVKtrNWhZENF1ryeKLJVDgZVWo7oP4zvZLAQs4htBSW8A4XsjiyBHtWnxbhktRz6uYmTEvecMQhzN5xPAVsD",
  "key41": "2aEFJYKnsSr92spx2BM3CbHPSxKR7kexJo9t4ewmvxXaS3kpF62gFp5WfC1R9ix2bw77TNiNKnuhSKQLAj9Z9TtM",
  "key42": "4W98cVJFBXyyjiAiSD1P49gfqa8Z6ZMBD8eCpFRGLpo8csXimk1BRVSWnc3XLRaw6VXMFHQLE6vpGbmr9NQnxKYk",
  "key43": "p7BCyh37onEuV6mh9ZsQ4HK62Nok8eTLtNGNzKitgHHVWiiH9oSsVPuQpLkE2eBrAVnoQsihFXU73ur43ZB6Vbs",
  "key44": "iojqdiRKQwpj4iTDtLCSpaYvruRryPjP4LXg1uHP3MbEnxYYsXqMYsgJTVgn4Lx5MJZXasZzPU1LeRvWLWzh61B",
  "key45": "5UPr1pRpvV9gRK4dDZHx7TuxEd3TK6bjR8obT88pEETLpWsLH8wKrfKjNQCLnRo7r4pe8z51A2CLaohs2Xr2zFyh",
  "key46": "yawKm6qCRaxxe9H8haofsQgKm4dPbHEqg8HpYzKD4FWhDRgrAa98Da6XGHM7UanPGQJtt7QPYt43ZdFDTGrhcQ8",
  "key47": "5Rq76BWk3xiPDmEBDagG8ZcAnx5EFsusVHPP4Lu4L4qw3XmBz6h1cNyqWFrr5sxTwL3Y4D4bpW4EptKnAacgTKBG"
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
