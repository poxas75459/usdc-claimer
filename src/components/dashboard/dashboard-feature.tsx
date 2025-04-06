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
    "5Tgpe6gEUdi4mPHw67wsiNwEVakmetYfZFnJSbQA5x3YxHSKhtNaJWEMJ6253nP4Y52saxNMPxdehBvhZk6fongj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pigq9ZwTXZyoDpWiUgewSVFatAv1HspQDVLtthSgVXzoLeajqr9kJ3RQBYZ1X9mPZhD8EUsQLrkAxFTG2Ty1veo",
  "key1": "2sP8Pj3Q77GH7vuUqVP1Q8QR2DYuU6UDNCg357dWCfG946pEMkzgwtPUZmrBdozSbGo7buHjcm2rgApHKYLKUQEA",
  "key2": "62Cjxv8hqvJryNWzeMBYyPheePLoJDmDVeVATkV9D4jLo78i3v2rAZncd5RgRfneZy44vxd3D7ALbo72UcBsCoaG",
  "key3": "6iHrKMiRL3HfyrqMgZZzxCMGsNVB7PYVRZWArDP3eZan3LhuhD8sJ6VED422QxqcPsQVnXUmfvRUYsjbpqpW1ua",
  "key4": "3o9rB2Hi9PTBtCZVBotyDCW3iDkcCksMyCLjicVJd7zrMLqDongZnLWsVAJ2DrbvrJGZq7t8azUbncRG4xPUfCMB",
  "key5": "3b9axS32ajK5YayEo6rFiv5JYjjC8FxvRvow12pp1fnbbgNciK6RiekQMQJBrgPCPXHopvJLaAVjNoZrHjhn2xCu",
  "key6": "2mWXofxndYfjSjqAwYCoxRPQRQhhTKvYyxDfsNmZsRwRGBgKqxmXmWLzqFtCGEFQWSn4Mfjkg3sFjckNj566yu33",
  "key7": "2dDDLimrNd5qGoei2ZbpPzmuTABqEtc2o9ejU5YKnLeCWf3WNhBjqz7LTveJqHBocK6gag849B9W3mHmxriSZaGR",
  "key8": "2ZwfhCp67yxiEde7FFuSupfHgDwg4StfGYrUD3bM3e1isATjixW4U8ue15SZbPatNmuagoUbUWTLUpW7JpCfm8uy",
  "key9": "3svJy38kRtKUN2hVoJsZe7PXFQnpLVDPwSzdyRvU17kNQeB1Cdy6c1DUnWbytzK31h3LGBAYce1WqJZkScFcrmSW",
  "key10": "458bb5LYjpGcBw3vnyhoaT5i6Xpz28GAbwV5jQkQdCzL6pvNtJ46QxKU1E6WzkP159MNYErjuKwhBZg4BWZmESXH",
  "key11": "4zyw2rs1HiBSNxJasuxiaWjKrcCbLR5WbRAhp7a57SieaHZ5Y4e36Pjm5t5wGWjVqrity8uBLUXa7sTHAKzJz7JR",
  "key12": "RRYZN2aFxhZABft9YFPr3AqCH8kyvwTXfEUTCrZuDcnm3wvXs7WkjgTN4eNoaLv3TAZsf8WeAWLsMRet4tacuqH",
  "key13": "7gwszjHjMkHRaveeK69viCAq5PDG1GaUEfYHY6avcg5fuyNWqG5mfCTr5rcVA1seeP2ns5Pc3d22RgL4MG63TbR",
  "key14": "2S8ZgBsshAP538A4ZP9U3CdtZ3nDv957Ry32A4TSm1BgUYjjtj353j4qpsZSV5TD52TAFnKYGpCoQDUFyetkPQ7f",
  "key15": "2AqtkAarYNYaNS1zpBUYZ5qR7FcD3LUYPQyXquxe4UYYhQqnQQcDXCyzeK44GFFZidzmyzSPXwQGA1wcTE4LnDVU",
  "key16": "KE3LFPYci8dS2NMJ17iKsjfDPhiHxaFU9MNUQZdZzZvsnsTfyYYddvfNUcdcEqphwMa1igGYKsF3P6Cc92bNF3m",
  "key17": "v1ytKnsURWgwNz4dvbHgv7gtY6tKzjG5aeXRBZdPdt7m5Rr3XyNtwxG1zYjMeqxsBZPCif2TuD1oSaV81c9oBRy",
  "key18": "3Waybx6o8FQT5ERiH9DLLqZj7X1xsdKeaqJzcBgJ9cHeej9H1dztEsC7Zabe6ktLSwcuXyPvyYPnrXYcK8VDGZSY",
  "key19": "3yHAnLsP49nTreCLvmvKuT1pk3BbR4icd8RnPy9XyG8ojqX5vgUaXreGdi1PPtKYQUuXghfQ5WWjysX1c8dAdLAP",
  "key20": "4vLfPUoyRtqKC6vBh9NU4eLR6RvjpQDppTJFK52yshgzaDf5JL8ugiHLmL9GYoVCwNVNyk3jKhQKeAheqJ3aUAUE",
  "key21": "46uAhEkGH73Ast3rNExYEwQzPcz6nnP2Bm1vB2m722FUmCUpRnz5juML1oZMTShwjHrFb4iEB4dhEcEPzL3broSj",
  "key22": "421vShAqdgfciDaTd5BcqpHyLnVGER4C8S4ms5zg1rEwsUAD5wKQimDmFFA2FbzWnfFjyXsvRhr3Ywn6c1ZukSkm",
  "key23": "3MscWVcvShxMgpYwrRYHPS9t5jRw8dDAAbvc244Hc4ba8Fqv813f2MBP8v5y6RQj6A15DBe9cYx1h6pTzXMfngg",
  "key24": "2z6gx6E9xsxi6YXTbGbQ6gBhTU6mYq1oP9aZmf3gE5AztdEegsx7qHVR2gNvbMxGVkVPN8xYC9NgoV1ttkDGzAGc",
  "key25": "2fi1GgJHZr8B46w3XT4ycd6qnorMDq2mGj7sWNZXMs2S8p9BzX5T5KAkvfjUVdxYNCNbRygEGgxo4QcqFzw5NvWa",
  "key26": "67rH5uiMW8BJr4A8xvAaY1eXsyabdLkAfY9Ua37VsREMaNBgX2BgZg41hHfxA33gwSe7EAfjyHaySzvWMRWVmTAX",
  "key27": "55hqMmXJ4YhCs9pBTM9NJo5snPFb9ET7WPg1pRDLsMMxbTEVJHCVsHKdKEguDMuY5HqExUPEMVvC48ko3BTe2eLC",
  "key28": "5xy8UqxS7cvV8Pxf7fhZCTAcwJKdjv4Vy42xeEZDGSo4tCvteKP5vA9enHSsrRZbgNcthqhastrwn4NxGP4ntb1o",
  "key29": "3mPohdEtejV4qJHDToRB487xh5uPoTRCaYaD2KrJ19hC6AiTWx6EG29DYeuUHsXS25UUBFembGSvr4WM5gRbTokY",
  "key30": "5SfgG1bXAdjhLxeppA3G3vWEUX2C922zv7LJYouVeDbezxByy8ujyWTGLka9PizPUVQttuzn92AvUVVH5tDZ7NUf",
  "key31": "56niaQajrjrCEoR5UksDKc2cB4dcorkF1zfk27pPyuPYLSQRh1uGfrMc79ZbE198Ak1hRpZqifFo1oBRbPBgUENJ",
  "key32": "58P32sDSSXEBr2XxJKyaDFpRaX4ytjuuRdUfQr8sk1vBEF3hF6KtYjHhLaaqo31iNyfbovnbwZ5X8ra6NeDLZcfN",
  "key33": "52YQUvHzaWsnpKYFHpKUo1ydMgB9CWLiVSwyXpRsD2NG8qVLX62h5zdojyhdrWXuU9887EmeU2MBfoyUko9LPb8C",
  "key34": "3jeT5bT8G1pvG9WnoJCryB4ry1t34iXxLaeepY4Q6MVVGYZgHnVmuxsvubWrRbRs42KCzBxsAovew2w8Dqy7htyb",
  "key35": "2oCvZ2DqR4v2CsjhtQH5gfw3vR797San9risVuFJujAa1MKjTRFpFScBihKfoZurdT9YEXhAJbUd8XFVBayXptxB",
  "key36": "3EHNqJ3WbvoTRSSZ4BUFTDSAu15aznLXWYaFQvnuLiZd1XMcMJvQUBLBhG87XPxum7sfdYacmRib8wwnbHpJvdiz",
  "key37": "42wZ1hQoYYt2GifkPxPUkjVCFRCQfJnnPADUD7MHirNeUroW4YcuwT6ako1T9ZZUHZEud1tkSG7aozZktUxfcW7J",
  "key38": "2btG73L5jDPzsDKnSxCfsWVbeZ3s6p6b7zDGT1S2KLiTAmaryAMm8eB8CrHMPHnA7fsgv1zfERojua4a1cy5Dddh",
  "key39": "45rTmbqXAaqNTARiGHLzCcCqkevSMBckkh5zUNUHfg8Gz2C2nBnhrepvsBWRbgRmyT9VE4bVqxj416xFJEJfvqj",
  "key40": "41jKjHRTZSNSkcHmgMft6E4GdZzf3iRhQ1Q8NZjuXRYUh4DY9kB7bxPutgHoyzdax4DMjg4KRLfpSUATDX44FfXN"
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
