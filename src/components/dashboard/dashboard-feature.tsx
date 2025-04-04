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
    "3hezURGsk8HJxgsEUesy9u981xoPcoiHEQ7vMLXZoqAhsrMDNKN4sbUMdoAZfMLHZB6VNDcGw8RecCzrbM7YMgXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ATZqQoJBjoCnq3N6L9AFXXjNyXDyeVHqcvU1BVKcxDm1CZAce9nxamoFd1KVG9JLkNeTFUG2gzgjsxoArMidqK",
  "key1": "41wAVNJwiTmLGRenQ4tMvL3xE9q92nPjsNXpfbjEBYreTFsZVxKr5NCsSd4Pd682JG1n54adTtZRBQiCJu348vcJ",
  "key2": "2HjVeBWvZmM6BarNhJdsEnYULjCvPNaxCMvtbrJNNpe5ArCMBb8UQWJ417q5MtKeRQcG9KrUHVDY4hoHnBcLiXvX",
  "key3": "bUc2eP87EK1xKrXwD9183C8PY1ZXQbcG4aL2qKBSFP7YqyDBSYY9p3Cr4VGQjGETQMEJQcuuB4EWdHWZ9dGRBH6",
  "key4": "2U4nLZmdAzgk5VmJWkXznb3prjgvbZbowNxrpV7yhaoor5Cjj8h9MDnCN9dDTKogFzMnhuRtfsYf1BAaUwajvkzm",
  "key5": "4AM2cX8NbYpQ4pSaKoB6HbkUrYTvStZ9tg4cgS3Wmac9M4LSswb4a89bWad6D166eo6r6nHMaQGZ1dYhUnHRTGeR",
  "key6": "64dzYzVRos9WbfLajmzudTSG15vLhrZmKsyfNcLVhu3U5wGSA3bH1efyii63bWRvNiGD1KVZjz7mm2wQQSuitgCd",
  "key7": "2pxmGvEQjCatDeh1WUSF7X7xxmp9uhWcNG6Ex6Wk4CmQetJ95TXZxMGHvTtNueZMd8hW6ugqV5pny6sPNArzM9LP",
  "key8": "DByBderyg9jnP6GF7oicw26pf3UkLgoF2m73ipyqjEBTk8QGpuDhkggihrifxpRNKvXSbkGkVmpFJNy7akY6EgM",
  "key9": "3hnAUYuP7MFYH8tTTQZSoS8cH8wjfB9D9dX9yDnZv1GtKx5gKKteQU8vSQHeJedoKHQqTxwoSf18qXR8v8kKc9Ku",
  "key10": "NWmUBiaSRLYbvwn7LNGVRnySpUmeGNNu1AFp4RiwT8SNDUNdxjgybufv7ehYZwy1PJDWKnpVdeotsXCeQfd1G4y",
  "key11": "4n8bUzUehXWEE4MoW5sxeREMzvMjAYdqWW6vumfEY8sWg9arewBSdPuDafxvMxT1Mbig7zvgLSDwrsgGVUaXuiHL",
  "key12": "5diDYttxUrAUXihpPLvi7WE4LjN27EH1zmLSg95yi4ByDed5E2zLdiqTXEeQVTgxu4zPj8Rpbm1GuVn8bbr9MWoh",
  "key13": "5dNgLQqqxrFDA5mXKZ7daGVtNBHYxup9Pf2G8BpUrf4ezytMw9Wf3gV76M5GicGUBTmr6xPZLhKYeka37fXQVe7Y",
  "key14": "4LSh4EGhX2V3zvnGuoZxcU9SWAcSe2n6cfFc5dvYQDXYCdGLMcKUgQXFAfmytHrmGcyxqoKoSSPjcZYNmZa8YqYX",
  "key15": "4j9x4RHdkZaZJVVAqseUCYVRCAMGaTbHgDjvwZdFgccr8T8wCKU3TJ75Tv7n2vPpWLvrZ1dp5n9wzhtTjpLD7U8Q",
  "key16": "3E1tGH921PniZDnda6sdc2wda6K6g8PNzcxqadWY8oTuNqwzkEnZVhmbUPf8qdqzXG1mEJX84BaUBHSnUvyrqt8",
  "key17": "2MTXvQKVLiDSvaEdjEaT4LANg17hQBaEBVSdeLi4xqxkmxjfZgv3QAV8MfUf6KrUBvcJGmE4pSbSz8cXJS39jtMU",
  "key18": "5xDeJVPGuvYGXzdMLdJ2KWinGezRe9CWUUTTQAkG2hUvAXWYgzbqsSQJ3StpQ5EZM89e22pgG2gpEYyf8Jpbrjh4",
  "key19": "4NjwT5FrzwcJZHR1QMp3BAAqPneiBt3Vz6qwf4xs7Km6EQhR9u3QjBWE8QUqnF1FbpNhNoEZis8Pvv7fw5t27SXc",
  "key20": "4eGZ89TWk1sr8XPUSHZR4jTMhqsGnVJwPdVi2P3cBGEEx427rYxTYMGj3JByCJYFC2DxDdL9nBKqNFESYaaxxviM",
  "key21": "4Q81NaZjwj2qS6NPZqwUyTfw3EL6cm5zGwRYRPZ4vk9nrUSKCx7TuwkiXX3fSaWc5Ez6sT5gaVhH3jFADu7v6U5f",
  "key22": "2voKcQrXyHw53Y5K6trnEXBjWYyegUYdRQvgntu5WcQzs6VJ7HkRAemAymQzw7XLH5GYjyFzwm3V8mJzznCse1ME",
  "key23": "BXHZnZyCPxa12mkfG5tDnWgFvXqhY8YoShNm9tzaUMGasdahXnr6ZbWWjDNh6D5BoVWZgjUgj7vCUN1eR8nJdp8",
  "key24": "4CfhKiif65qNwAAhqcH28WHkVdRj5njThE6eiQcrLpymSA16DjiuSQuCfTAY6uxbCiSDWqgveSDnSBsHrz3fkPPY",
  "key25": "4ngniPustDFroXeS3szD9Abrf9FWjJWnkMVzuBUBULFpt4ACBgCpX8qPommp32MKFbf3gXaxLhZE1t6VrRW6xem4",
  "key26": "354JPS7TMHUZePhsgQoYLMmZjA8wJdNkJemabJMqrwUXnbmo2tG4D2LBJMxfxiQrGNJvNN93MPvbkHdp1VcYdWo2",
  "key27": "2p5iFapTd7f8bQESGoQaRn5wr1gdzyoVW7U7yZUbpY2RMP4uZZX6UEWYN2o4YPNP7nwM9tCgLtGq5emUMzBr2vv7",
  "key28": "5xkC8RRz9LK3JVzQEBqq8cJ3yLN5toX7SXH8cX59sps4xyZxMZnyiC1LkD4G55jZ29cZfiXjmpTU5B38cXK6fvzR",
  "key29": "iBoRmFPAnYPJ5T6EWDzUcyBkRp7mfMRJp2HjpXEVnhSxrwuDxCPr8H7M7fZxRmc6bxUS7wV5q64DX9DhwVZbgzz",
  "key30": "4rg4Qsssr2CbDTrJHix6FR3F7zZwsPKYwAmXf543hiYPyNmPemwefHjcyuasC5CTb4V52D7jp2Nba1THfEmLwVxk",
  "key31": "4LecWB8pPbbMy8cb3NCfVLgEMcuAwrFL8Uyij3APF2UzjPJjZM4eFSqXSKnVGWuctEi1VWTbYGGi6hL6sz8aPVgb",
  "key32": "2EicbWZJnCK1XxUurnV6ytr1pS8bcCCuwQshcgMZb6Ua8owkpbXLCgsoz4jimcdduqvcsuV7wGLuZM6EdCsop6RS",
  "key33": "5v1f6th23Xy26uJNm4MSrcYtfLMASSfiX8CrZSmQZQM3eB55BeCxZPNPXRHfGe8vQMhtS6igwkzcbrJ6B8VSYRQC",
  "key34": "z5PpmLKJMur2GP8NmDJGGhtYLAZyegGusiNF51NhUByYMskhtx1DqB4wv5BAiDTsnY14EH74bAd7w1Duf8VFoda",
  "key35": "FEw3R1pG1SKTuWGPPNq1kdsFE8SVCVh8fawfzeB8raEZ7gtq9T6MyaPyWhfwxKCpwUsyUURkj6LBr5J2Rr6QMUp",
  "key36": "2ToHyTh9pFBPARvkSSBttCV1rrNoLozJRkugMQvxqU1da1zXEMHZxZjszuzJih76aGvVj33RcmGa7EHXPJkwZZQt",
  "key37": "28UA2wxv159yf9McH8NeefC86g6n5tTY3W6kvHhGbZyVHvYE6zhBcEerpCtWi52jgAW9WhsqdmEeHfAFNi6MePhn",
  "key38": "3VMwoGsV7gkE25NfdCbpmeRMrpqffsNbAUipzJKZSBfCALoBBLofX8iX6Y4n5oXjXD69HucvLj3oyawyRFFCqZ6L",
  "key39": "43B3fAj7sitEduYCsw9zeMpB83WkxENzsQdkKDGWmFPXbV1LtAuThV42uNhXuuKMaSTC48smhBdvJjiTniR1Xshz",
  "key40": "2mLoTTdXtxoPqidKYpdcMeZmSzPPzwGdEjhA687PB6fTFpRGtWajjzYUceS9Wvc35ZXc8MShsMSn9PQSij3GixGv",
  "key41": "42PPH2FqUsrJC6vx6Qi8jrS87dobkv2xMMN4FRhLDep3otiX3xxUWbqCaHYwCPDf4BvqQypbKgJ1Wv3L9KMasrJK",
  "key42": "3QNrgRBDiuAy9TH2nPQzZXiZNr7wY2BRSbNnGnSjQFULsXKT8NKtBEwLmnjTk2Yzt59PazE4Jvu9scLnx6qnhZy4",
  "key43": "mdQvqsScFnrBTYZ4Ho372ijE66s9c5URzu1kok3Ns361mdLCi8cYv3nqV7Mo7fA4kzHberWpiRhgQXYKSFPkYsF",
  "key44": "27BwCL4WPXJSD5NMkUopxBg6jXen5otAUAfHKmyUbmLq45pxxBtb6yLvYX63XYUxCnyKGsyGiC13mnDyNWEXQd8E"
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
