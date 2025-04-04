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
    "5suU3MrNvdrm1qJAr7eDxSNifkFgxhtsLAmnMeneGTU6qGcFGBaN5ocnFyuuHmtgGkkLU33ktamPfsijxCH536ox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yHmzzjYXcsM3BtZEzoNjVJf6E4i8CqSxabuGQoRcG2boA3nRqHxhwHkhHjxGRC55QR63EapJSkMBJRenzHx9weX",
  "key1": "5SpPnbHboDFiDUZMr46BE46vLRHy1HXXQ9ztuewyH2uJcDE7NsSYVBcxnRLLootLxvkavHohF9zrH7W8DK2cchfu",
  "key2": "5pgk4ksPNMq2gM7VKrvCBsR4bNWuqddnSvVAfHaJ8AZ93aaG7uy5f7EXR72T1o6VBkuntRRkA1mfsG2nHYRjSpt2",
  "key3": "3VQ8SxD3Y8BcsAEXKNyivaQzYAw5MCZocRjteamKRnvVPn4FisUz8ZnhCnc6mUJfh54gYvsrjriTAeAxibsSbzRr",
  "key4": "AsXy5nVg8y5tnKNgdq9TViLhgWiK12gbfiwvasMFz9dRokNMwtytoARsGueXLG1Y2hSA1UPErcFmVFmjEqYGmWH",
  "key5": "3ZaqmxYktKQjZwYneyAsEEyyUGXnJESg2BaaPbQDhP2HAC8qx9LngboG6wJinM7Hb2GmXpJjkQYoVgJvacdygmKE",
  "key6": "4QzLq1xJSSULoShD77iW9G4CRGXJ59R7Y5umErm9yw6ShL5dt9tAhy543cJnKKL5GGhnvnrLi7BF6UiRA4U1riYw",
  "key7": "GSvT9AArDYpnUNSjRrBhFyrJNHraxtVNx9oCtWYYp33GFNFULGWRRWG4jT98EiTiDsXYGepUXfwpuuRMx5YhES6",
  "key8": "5nJVjMShi7aoEV8cTu5GXfVpaKXq8TEyLmDEYpTKVnEpNgNrTk1QZa8GrBmSJUJnKTHV4P1c14soLCkhu2o4Suba",
  "key9": "58kpL6GSRKTGFJHqxAkhuMw32YZ62wggcqz38fw4a44oMPXh3ZnfYBNMyeajBGZ6De5gqMVGRK9y9s2pFHiEUs7t",
  "key10": "3YCcuMqBpbjcGwRLsAWHKmxH2LWD2RKTy4r5SZJ8zEzcXk6ENxNXz5CuEuTop6M88mgf3S6YRnpzYsyRkn85i2Li",
  "key11": "3rNhEKFvtQPLQ4JrShJFCcquQaryT8PHWprFFaoonCHcNn3ozNQqN78TA23n8tPaEF1k4oHUpPxiUFThAFRQRPei",
  "key12": "T7GdShhw4gSyZUdTTiX9yqs7udBMXcNfL92AZiW1iPngpsMRuiRgC8eabD94AopmV88t62jM53fHeHYEgdZbT24",
  "key13": "41zbhNH5uednWBnCbF79hR3xho8sEKSfmsGQTJMme2aSYXUCvcVTCUHHkkV4c8bBWgEiJBvoxhGudX4L8XBrJzcR",
  "key14": "2tpqnN1V5A9A9wYasFmtdhvmx3sCp8q8EnF316Uraj3c2Xgc6wTq4zfeP4mgzanLC7kH3eiDYPsXkiQsNnuF7yUs",
  "key15": "4EVkpPsMHEwpbMnkqoextpGs1oCF8FxaHJDZrNidf1Grce4jgH2aV1Mgy4u5vRvzERaPJt5vftLDeTEWzfkfPigc",
  "key16": "31Qx3SMFph3tiiwdYH8UVAXxgfRjbqkTerwQehweN11ApazaRWK1PVdzLiaXebtfBHCqAaQA2HY5Rg7kHfKpLy1p",
  "key17": "PAJv6pTTPP8fVteip64i2eeToWPECamWQJwpzDaxpxXgTWkkYgZ63giUg7nj2vYDfMSGyw5h55cdeRwR5CYL2Rt",
  "key18": "3x119rxeVRmhvKKmVSNUqcamENuj3xXPyv1w4zAryRusa74HwL4XnMNKivVDhW1r2ehc3AnLJYEddr1jeCtLwgAB",
  "key19": "3Xafe7ZPnuKGmiJRnozJyTVfPUxqYAeqhPWz6PTRs1btgsvUyyCXXCEtpZR4R6zGbRoZUSRw7Q4bxPXE9qWjrZb8",
  "key20": "9rv1ZzF5aEw9WkvK9KxeMGAM7DkTijAmf3JuGwxwNRjsbX8he2t6L82hP8xMkhDWqfNUV13svKuVF73qiMwmTyD",
  "key21": "4SXJSqFdXvNwqKD6A3rodEMir7VvGryREAk7wtUSLB2h8CvTnnaPMY3kWbyb7NsfZVBK3wcWXB97ZT6xp6FG9p4N",
  "key22": "5z37bBiUzxdTRimUvM16AurYArjeFnWqEpZa3nyfSdbNFvEugYcQqQzSBZYBvi5gumjXUP45kcihapk6XHJGxBpi",
  "key23": "2mLbFpeLAY4iZN9rxNjAAPHgU5pTby5zd8JsQ8vhbAFuzu3Dt982BxVu9nhQ6NBDBEuZwJwpgFBUcFXteqY3Ltoe",
  "key24": "5QzHrojfjdBSFZcwdMpduYevoFud3t7J8x2yaXmnPy5i2dfYc9R8MEEu2ReoANPFo7hbFErVxke2GL9oJTbaTnUD",
  "key25": "5upJFkePgzmHHDUEWNV8ArH41fvvYqWhztoHUsa8D1diiXUJYdiayLEXFLKrk4SkLMrEPrxhnkoBYea4wH5jPZPa",
  "key26": "2VBTFThUAugMwvk6TFmevwe8mQLUUTEBZyWgiSJMLH3zASh968WLxE4k7GU6kgQrcLLJ2Q1a7CzmX4tApPDJuQyH",
  "key27": "2bGxP2gAtAwbkmQ1CJfwaNfQvjiXMjZdH7iAkauB6D1MzrPGxLobPr3abj6YWe6NbFxM8cDr5RULA4EToRudVoGe",
  "key28": "3isrzaTPtFG4T1zPhQUeHhHMg77KEsxLzCMFzGAXYFfVj7MvB2M5bg7yDyJsuLQWsoz3dZqfnVETCJnDWhGiGH86",
  "key29": "BEZW49CXrte7kp4XAkuufbPocutbbyJn1NFZ3C65doGMaJEobFMMkLmgofRFeSuQw8bUmLC6Hz4JCkGJtUQmfbn",
  "key30": "4LRG7iXjAVQ7VdGPBVW9ee1xh1o7AsiMv1cuMHq9VzStPkqVWAKM9686VvVmynnUDL3ERRfNwqEw9qcNwRKoGhNM",
  "key31": "3c4j5kD7fHk3XeRWQF9W3faw9KvLUTriqAgSgip3vK3Ka6avgAw67VhFFwwiX3VPbBMAe6en2CwMRLxEbWwqZmDv",
  "key32": "4UV8o2mn9khf6FttunM1yackTctHjfHjfzU8Kf9VfNKf2sL2DJctu9MAJK6pt2VvV37y6LU7agVGthrSHJrF2tNn",
  "key33": "2yx1EaEFsMUYfNwwXuvhhSsLxfsHtdSwxVnvueyq53rHrdaDG7CHo7Tot7jNFjZeeeyt7ve1fhWDv32QxcNbKQ4n"
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
