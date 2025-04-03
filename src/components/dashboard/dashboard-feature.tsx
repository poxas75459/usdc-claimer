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
    "KTqF4znApRx7Qn48WwPaV88P4jMV37QS5h9UJY6rXuvLdvP1FWNQ3C3r4CCUn91j8pGeNZnTQ7hj2cwVEbqrd51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RJityQdA4pu26u4Br4Z1DPR4oZCN2WXdisASUbWpUNNTzvDwcQUANHoVYuWdBz3jy7KToKeWVnVew3ji2DF4JbP",
  "key1": "64iTLNfDfUezJcaf3zNd2FqYnAfC8J1pswq7C6iYuP6xPRMVvSupqa8eqJAtkb7Wr3HbvWKhgk4Uzat5Fw6cJn3t",
  "key2": "22EqCVSnT6UfcMfVFg237iVzL7CYiMLbVRJYxnyU6DtFbd7nLEtohEzV3GuXcnLZtw9etQDGLbgM2c5YobgR4hWH",
  "key3": "5AXRW8PXpSdtUyW7hoqGocmS4cvtCr6Xu16exsnzhr8CMoeaLSD1tCgbJZB7K79wRLunacgChNhWTfmzyosdn6nA",
  "key4": "yaztRfRT5Gi3uxpPqzRmJLAdt1FCMoq9aZACZzG2RupHeZoobnusNZ44Tu2DNSxPUVYzKCiEAPNby4yYG7AvPxp",
  "key5": "3W3NZrix8FSPnTWevx2CNgvmVpGpJa2GbGSHQvAPTspRXXBbjyaVmdijtMj9xmVtRBpyRrUC2e1URvogq3UaZY6E",
  "key6": "3ZuAb6eeDG8cJHy5XLe7ppaa1Cm3nu56dwDHpWCf2xWCkNZDkSamCq8YV7TADEn25Xn9eTptvkGjTDSisENsJN6c",
  "key7": "4Lj6EHxqS6a8bGXJk2v9vpvUVbzF57BmCKaqHKyTQsRQQAsn6qFhrJ28iD5aWFp1PDiwbgcN1VM7XKjk4e78aAte",
  "key8": "AUCCyuBQ4i87tGHC4XweyWzef1F8c5AzeQmpJq2pVn3wUNt5PFVGnqUsG6fUEua54CkdGKXSU9KQCkzxyMrQuXZ",
  "key9": "2ibPatJkWEiyWeuWpUGLNGX3u9ok4YMLehEiruC8jB2f5S8iTCB7BamfhbrNcta2UPF7G3fXwHWEZEAyBCy2NJPa",
  "key10": "3EyR8Sc7f5fq3r5oEyonDiDrRhaMtTCm2DDfkUkjhE8EJTuPV6UWQpcEKn5QAobsCDEcDdr7bL3Bybkwz9mJ7j76",
  "key11": "4GqqEGRKgP6BH5TM39px4JE3LK2BxMAmb6dvdv87U6pSB7TygWQ2uZRZZXTaz6RpdTVb1U83K1ie3Jq7UgZW2iYu",
  "key12": "2fE6V2HGarWJSwiMu3ve2r5SNb6f6uZznPKHtZzEB9iVNvrRsGNuDPzoZi91kJ4BbFUfpSNvQiM8wJRUfyRV43es",
  "key13": "2yBXhBRhRAFYrmGHMvHPjKvpPpBFh8wAefSaAVrs6E18r6zWc6CAHJL6qkVqh9nA3obCMVAVKZ11n9igKCi3gsR7",
  "key14": "4VnQMnpQn1Pzo6XTCULhLuueYBHTmAVp5R9hUUMbVc6gtpnqomRnhXXBUBmXnHgxh1Zw1yDTzumQhQqPLB75joyH",
  "key15": "39MBELbfTiMR8n4oTtXciURmHoAEEDKQprLkjN8kJpsR9p9YAiXTcSusoGDouJUcdHurrVkeUgUEpEK6s22RHkRa",
  "key16": "4VZxx7wm3Nkv9zi8uDASFFP4x1jSEFsXW6QhT3bh12Q4t6D9aaSED6nvpjPjLq7jhZhYcRE48LZ8SLmXA4Av55Ku",
  "key17": "2hjHGiHo2Nex1xGs6BMFXhGExoYP3Q68JPFbZidtzbGdZnsdpUZdP8izuov8npypeUnkhRvxavYzBLXDCo8NJbBj",
  "key18": "5XeSPzB4b9JoeQtCuNy3DarCLb3UaTAyjdDV5nWDBT7kiMuh6fZfoGhzexBaK9str14GtEHossFSoPHPSCvDukTj",
  "key19": "3eHnCNsUweXGVqytQu8H3pqiDdtKh5XbE8XsCK17gw7V8a99Xy5HgpbTCrkn9mBMabkSo9G3JxnfPETJuzeMtAH8",
  "key20": "WYBNXTRTcjkMka3nv8q1cG7mndCR9HxGsPptfiYiJFubR2JbypgjoJEV7sYvWLc9ZWTeScajKsyj9Rttqeg6NZi",
  "key21": "29yZs3PpekfizJ2bECSMeLtffQuTf5X71YBW5ooPcZtYeEKJgEKxVooGZ2C8tgbfxYAbJBn5xVWrMzfCAH3pPoDE",
  "key22": "2QrJjRmmViesX5PpwqT8sWUeWzAKpqGBKEvAPuFzrC4R6pKN6K8mW8Up5M55Uwx2tRbWen7MvGQC1THm5VdxV8Rs",
  "key23": "4GuhQybMC6QzdD5vgfjLvgzZQiTfxXABJsp3wBPEep2JNPkf5MTVaz9rQ5kjxBBj3gw1rJyCkAgjBAvPPGUA6v5p",
  "key24": "2VyrYP5X4bmJ9aP7x1bLXK8j24mwKieSrT7FiXpetX3GErsSZK64WGxYBVrMHS8waAVRExKMSvPsXLor38XjSkh2",
  "key25": "54FMNgwrZUwC2Vhjp7pJ3K82aiEhQgsunqNSKh5PXGHu95GMtVxKhBB1ghh5TutmtBcLckK9pXs5LDhh8eshwd1X",
  "key26": "3pWBoVuj2Wqj9WVfNTrYtPa7kFtGnqe8qWRTVGCR2C4QsthT4b3GxTQsBdqY2K6kzFridQY2s7z9Wh7LTnjSDme6",
  "key27": "rywuBGxonVpihRtwgS79VXx1eaZcuQu9HgA9XKdW4tkZ7NJWPgR2BsSSbHEvWL4ZPcEW4EpMM6yoKhytxo6Dc2b",
  "key28": "Vyy1oPKPxy36cJTrkKgSKgjWhdAFXKPaTJsH4vY4WubpZ2rvxZR8sLiY2h1qL8idmUo1Jp9mwSpThLFmvsMQrdZ",
  "key29": "3fYmT36rZrZ5RYKcDFrAyW6U4wC9kzCz5Njq2hGUNvNjbm6TdorAUGfyDxRZgCYrWommMUuGB8VVdyHGRtg83Hn6",
  "key30": "4njCUB99PDCAexyUtYg5ojwrtaidNm6r7Dn46T6pE7Fkzs7BwWg5Q3YAykPQdF69Bu7QX8EPSQV23iPeRAgnk1yk",
  "key31": "CBgD9xyqqff9VabWY6Jjs8X34cZ9cSigCSNdfikkhavgNYFsthxf89aN5xCHZWiSNdUBr9VMGxvu6mLV7rVxEWB",
  "key32": "4YYQkXyr8ArwEXrdE7mpaZ3zx1KCH72az1UahFQ2Yibkm3HKhUL8ddUJS2R3PsUeMTw1c7jQHPMnQ7aXRk8EwkVn",
  "key33": "Kp31dwYxpJSW9bfjFfhwPy8v5gSXm9LhdLpeqFGEfK9MnqdxKW32BKejC7N27CACDTaMQLrSG7tYPYiypFNWzdJ",
  "key34": "3mPdKBMfXyEPpgHmT33zT68STDmrP3HYc7dQkHDJYgBRMMVCJ8pXfjMJm4EtFgpRh1St4h4usFuN7LBQqwrMa1id",
  "key35": "5DWMsmQH7eJKG4tTL55jNWP7GhgHgiDXKM39WJmJRnz2kvmNk2vEQVXgEnqfB7NBcrgC5mogydeRfkfaNz46Nj16",
  "key36": "2ij7FkKMRTp2z3HNDAEBz4CtLCehnr91xPcv3G2hrm3FheWEKsDGALiHzEKY2EncSPc9F9jBaNqYF73jduF6r8w8",
  "key37": "2pBu64w6ib63uLJyWU9S2A5ZDVeXmj41wSCexBdeAoUvncGvanKhbyB1gQLbCAhuM63FaHiiz8ikDWBPAcQ8VdLb",
  "key38": "5hKtL798erdtNDASgEXESWqBMHtEn44dFUmBVgZyoxw8AbAmXeWvpbqEWYFK26mkvk85AT7HLT6pJfbxGfjxpUzJ",
  "key39": "4ttNPRgDCuUA5UW8WjhcANgU6rUXekfSDUctR5Gf7rRy69wd7TCSR4DabkzHe81oLq9EuCEmdLzhq12fC6thU4L9",
  "key40": "5ghkV4GZzPW9rpCchnD4Jeo6jBmppf2EmjekLpA2LSDHLSJQckfqPXtxs9t3wkdNrX47GojutzjbtACxrUkrtnBg",
  "key41": "2sAuV3a4Y8w86YQonYLvWGrSf4MrktAoppKgzM329YHRwXC35fSJuybYZwioD8tXaRBVDKPxxiGqvi42S5KdU9cj",
  "key42": "3R7w2VjvQ6ivZhintjnxExoeFuBRc1VghX3JpzP12ANUXswoMmKELf2V3pfjXCAiTDgvAuwQof3fZgkSFDKATzEn",
  "key43": "43dVPr2BcerDSWhvb2zRWA7fiehdzSktm2jxz9XJ7u3x32WWayDaKYLq9FQmDtTGwcpR5Cy7NVkRZEPUVLVJmLnV",
  "key44": "jeLyTii924vBGmSSnzNgAQ8gdsLfMpEWT6y7oWbZ92V1sha5qLj7zXkbnCK42uxpK483mrE6dPgbKAciunWpboz",
  "key45": "5titajXjgPPs3vFAGcFtvuNsUXBYqmd3JVUV7Cq1pWA8QkQuxEnMdLv1WUxgjaSuBuojddTQvgKHWZLL9Xqf5SyM",
  "key46": "5udPnvHCYhg8mzrpiQV2T9QLTjbF3rwGTmzw448UGfycyrif9Z8JAXBXepWvncSh1WgvA3nEdexhyCXagPPBzkj6"
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
