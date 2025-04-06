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
    "35QfVViEqmps6o5V4qzdvvxAJwf8Kj29yobfhumFn5b1aXBjFsojZbdBTmfyzYz8VBHT9ttivnSF1ozXXg4sX42h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RZq8N2EX1LgiDJsV3hG8QhK53gJLT7a3MyziPsPUF7q3Nd1D6Saqwh6Y6TzGXfowcXFGcuhKiaiidYUJtyrGB5N",
  "key1": "KQgBAnxDHR2MqMVofAjBRUJWojGnwm85LCkfuT6EqNjqVcAHFH5xB5XHbVG5j8abgpL8ZYvpq24Ce9rGiqDgs4b",
  "key2": "3nzQVr2xBd1nUXAYSe5o48zTVQV7bS71G9TA46kNu2tCNUPead6MU34jqJj7rWCTkQXTSHkM46t9Xfb6hnZMv57w",
  "key3": "2DyL2dqsjAZnHdKXRy76R3qUDFZNzvRLqPMqi2bHdDozFQb2U8cKEQBbxPjt8x98Stcmz1xQhPngRietGKUpEr9p",
  "key4": "82P18bUYSTF64DerukTueHySoWXRVRC4zHTmitfkvR66LyDuQvp9PpJ2pyQtSCfcg4WNdJCmbGgn2wwi6MWLjqE",
  "key5": "5Snv2NjpKAXKAifpYH6RCRJvDqMctqrMCaFjyFRFKwLitojtGcAWZsqKLgf4NSboVs39xhg2uxM17Tn2rLEghaTC",
  "key6": "Zke7UaP4JGE4jDB8o1ABP4NaAFiNSEVkKVDo3SiVjzMhLpMsE12XPXjYPHEDDgGNsvDkq5st3pgVCGe2WSWBkaw",
  "key7": "noCTGJGWwsT2WBWRLYuAuXx8i72rSHZYc4iWFVXvUGaK6CbuRF1A9YPXoDfNMzVnyaZzQpM4LszUutfQy3zJh1N",
  "key8": "24FzrpkCvGrFbWe82qfwkhTnQE12EhLc2VusLuYPGEY8jKGnsB9mYH2GFM6VqNR55ZVhxjhSjZ56EzH8mKbgYJYd",
  "key9": "NiVngKyHHu62DjnWvdTvBQgKg37zagjvRNVhWvK78uEawTbREoHKh6AgiXZeRuTqCyc2fmP8dDNFcDVV2qXdfQK",
  "key10": "3nehCvLPsK2qztANCEjCxy5cxbv1AqmgYLABCc7qtvDDUWrg9X8QmjYBnppGFxCjkxijBd7sHCsBkJWUrURfv35S",
  "key11": "XoSiXMwTUw9Qfj9XmWa29veaUcUb3GzqSaHoi3o1ijMurdgxksYuKLHZSx1zfj7nAHU3U3wmeP9XbeRMeWgu5mq",
  "key12": "3fQ9KmewNRV4ofk889xS2q4jQ6iHqo59vsm2VpHbzYv85AiXZFiDEKr35N8djVWTnjmxUxKVB15iGnWRv2C9XP13",
  "key13": "534TCEAjCLRrQL5tr3LemLLNM6CkZ1D6N2AMhtUMeo7x8WpErd9Qgcj4974SACK7Mc5TxrvX8bd8KKY6qWmRKvsi",
  "key14": "4aEniGdTVTaRDwnHPmGa2uc5n4tFfFhLM45wHuv5ydjYtju4rXr3acrMLBMnWGvx9KYxSWPvbpNvGpcKUy6G1hHr",
  "key15": "5TfJjZJGyAWAJxKDpwazULFTv8YtzTFDD63bWDGUJe5J6B5QyXSVGPuYTVPEiGLbv2kvRYonwUx8H3wN5GVhg3s7",
  "key16": "3g8nN7kH4Luz7BL9nhQw3ntR5By3LLfNoJvSuLK3y4wYC8sSC2aHtcbT4yGeqZgqpmbZoynGrBvcxVLnnaB47ThT",
  "key17": "3gmNkaKr2nDA7y3fDqF4uV6ZGhRCX23ubdXWvmUJihFp8ooqJT75Bgp2tz2VEABi5FWutUGvtey4Ai5tQ6DCQ7rK",
  "key18": "5DGLczLg5NykXK8AH8gj45ZoFfpR1fXfpr9xSgyKT4GqCjwwJzA8oVG1XdwYm9fFCavr5DRFbsRqBgYbQoYd7dNY",
  "key19": "64H7xP7SasSrvyeDHUrZUxq5vtXaNqZtymHX5pzCT3hTDx8aK2MaUFf5UtP5aoJSBRKjEwoTcNWDTLNnAJhwpFHA",
  "key20": "5KBBHBXJcnpWKELop9GbefpRY9FPNP8xN46Z1SrvTwPLezucZCmohByqpDFctbhwYFBQCNuayCLoHAqHqFZUVCgy",
  "key21": "CrNmF9Em3abZPNdMjcvmoCfQQwsuDbS3JjYZCkwqPaXLKEuy9izY7aEdQCEFg6mtC5r7fXuZqrTYGfCpoqVTDCb",
  "key22": "3QDH3Cmk884apD6JLoL2QYopvEE3VQ2HjVA3GWhdJAcia5kBaaMwEUjWp8L6GNuFni42Ek2ufuGGrdxDFoW6rxLQ",
  "key23": "T8d3sK5gwWEMSSfaMeHEEie5tde2wvaBsjLH72CGy564gC7XtM1A7pwysaf4ZhqCdssAYKJBcN6jSp9CCRm34xu",
  "key24": "5sGpda9MYQNisfiXSqbu7ppuQJGBHqpNAJsTb42AyuDjJMmXs53tjFT4tVDUPeCpvyoEPtoF6rXweypoTBWYYLaN",
  "key25": "5ukES7rEoyUrjqnrzsq1TG7LMfrn3TM7ZLHfTJZbuy4MQMS3GhHF8QvKvryMk6PsxXpLNP42QLwJsxjKZfvKF4bn",
  "key26": "3tZbhK9W9SLwnTeu9z9mLmhku5EazqoDGfSB147AFufrS3WjBkJNaonpvDymkCHcx7ePpbBvjxN3xP4X7daYe4iJ",
  "key27": "2xg7EPZUqv5Rya4UCJPH6d4uWgUeMKQqm3Pvb28YndHdkG9rYLVoYdrj4hVBb1KKjfKcphnu32cxRGspCRD8aMsB",
  "key28": "2AtctwjQJBG4zrNbbpEqvMiDK3EJ66w5stRLp6SjZHPgSPobW7SrTGxTrZv5sN49aP52n8L3y5BsDBggtMFGt8RQ",
  "key29": "5PcMWarxJRwFZuUKQxhumKPXML9Hx7wDvsnQPx6s4AyVhkTBBBGA8CDS1ZjbiRyp5KvoAAJYiM4mDtq1Xc2wc5qb",
  "key30": "5dwes44nwseBqvFdAcfeRbMZg7HQHYEWAejzmKnydPdpFkRkXemMPusxb4bTz32xzT3ywPS23bvpf2L6xpMUfvES",
  "key31": "591X7k3XD3jpiE6gbVrUMydBj4S2CKDMTUi6Zj3wWUbfVrPbbSurgfpkeLXH4Ndf9ZhKxQPmR4h1Dh8tMiJxZWkb",
  "key32": "5U9yTmDhW4Ra1R84HoC1UZSzZ68VuRmFm64cdFwbPLvDjG1HR5MCo4TPfiQzMZpmwLH12sQ3cSdkMgkr5PdfJgAa",
  "key33": "5j6LffwJcBphYHhw376KMFDvUuHTVr9Zjsqy87HEGzJbXAgoSe8c9Bf3BwDsJ4aQXg8tqfaW9j1k7QD14obiKtaN",
  "key34": "33gxYcV2zXKX3NeXZzPhPmPyBYAHK2LW2QfVyyeriuNNiV8zjhA5oFt2faWcM5xUu4SKU6AFH88nWjLvdMdmWN3D",
  "key35": "3jCG5EB3T8Cbm3UMtMZQKpHXsnkUXLHSv6D2r3u2sZCNYru7Ur7jBoU7PFScG4TV1ebF9w7eE4sb2TiewA7RKMcu",
  "key36": "2V3PmNEaGR6zMVEyYNiw2V8awCFG6tLyHi5yT6LU33CtM8zif5fiKuKS4fYKiSa8CwDx1zBe4aSAFRnQAZ8wjcvk",
  "key37": "4rDQyYNDBMJQx62eJGah6cEBvPjC45RfLgwdSNpQJycuXA7JiJGycpfnmNcdCbnCkTVHE8r9Dy5KHMfU8TpNQQqQ",
  "key38": "2BwkxaPibRCbAb6uCxbJJqfWrSwm1Ax2sot4CreFoP5As2ujh8ymc7UA99wQHXqqucawHeZEi8YW1goLUcmjYaiA",
  "key39": "2iKaWC4Q1UD97h8Wy1zNujEL4LDuphJeoZAL8MXjdaQiaMmoCihv33xBcMczA9RuWY5Qn84hHUsJ2kT21YYvmM5p"
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
