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
    "45eR7F4QbtnC7Z4C1RifpmQxKafw7WTA9BoaX3pmAfM7P5Az5Ni15PhgdaUWxHBLHic7ahtpGFiKfVJ7ZAd2PEd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wBR85x8TtTgVtmfUdu7nxJmyZnRHMKm7nkqz5SWubo2PYrg6riWakKmWksTAQpHVd6hTzLYqwgxfp2MZEubJ6vT",
  "key1": "59iYhqbNUbCcCHTdzS42nkXeuAAfaMdW8svCSNvcZnDPN1p4GMXYJQwZcKL8WGJREzyApom3inWzwnAsbwYjW1aP",
  "key2": "3rKh4F5kdwQEqRP2fnLh91X623UGZSC72o4mzBQPWLSatYRbWnoHsaWDsRJ1ZvDq6pivqH4JPL3EVJYysvfessxN",
  "key3": "dn726wioMZyqRSMqDNR1nACsWwvbD5m4miCjUm9Eh3f776miJ2AVPBRP8aHxpXCUVNBZpmmR7aMLqjrA5UHPJuk",
  "key4": "w3dwkC74r5uEJbxdxGqpf13vFVX1CUjoZpEWBnCUh2S9u9S83ryQRJZrLSWikfAkMdzr4S15o2NDQYpQ18dfZQ5",
  "key5": "4bnQ7TZQkhvQ2mR2PmR7U9bmAJk7vrVfK6zMbZVoUjU5HbpQzgc5JGdqq19oncLwkX1N9317c8des2bCBT4zzkvC",
  "key6": "2X5W1NY7k8hfTpJFS2pwohPLJFiBK4pbR9Ef2LJeHZRXGWgmzCXaucFkVSNJ1tkr2S7ndZD8rWH8NuLCfEjTvqvk",
  "key7": "f3cu7PRrJWNovvbn4G6aDCh1c7zBfbcdE1BGeQ7KYaAEeVBHY48Dsv7duf3X6jJerJzU8JPhEzrfjeempDZrr8q",
  "key8": "3SFFnpequgNXkjFdzCCjBQYtbeM69EXErn5SwAKUN5i4rMJi5BnT4smTGmBS6yzMzeyAvWowqhTGiQMutUR1RYSv",
  "key9": "27BUmGR3XtVFHaiP5eP1Lrs5RU1PWSMd9z247UW7y5pPjdcXwctPpeTAnM5D68AJb8wsDRcTuyyLij6BKxyDPoG5",
  "key10": "3wnvM12tAeCSzBuBwbTM9VUak9ez26KRWwed79pD34mo4eafkW9fEtwNiX1vdkNRQ8qES4qzTh5XwVin9cK6JfxR",
  "key11": "31TTtzKx5uUwtCmQ5GZvwg8seBhNSVSRGcShLsWP8KdEwbV918P9Xs75FSrADUYk54q6wdZeV5wUPCh5zQjdntkp",
  "key12": "2UDJ4dWaaaVeC7MkTauhR2xCMo4L3yFoxRDcMMw1kc5FwV6PYtwScp5xaQYPRJierWSneMWFMvZKDJy4rQcL9n4f",
  "key13": "334EHvDwQC3wUEynASiuEy41ZWW33CPzRGSFWU7LGsb5hF8vZS68TknvwshkRHbnAxV6uEdkJ2UbkYDfE8TbifeA",
  "key14": "2AWsY1P16rEbv5g7JHMsP4tpWtETf15a4bkKkQRgsLJxAGcuw4xsLegKGBXWqh8j1XwksvSm9Vj21Xko41FBWpA4",
  "key15": "3DozQbBdJACoAJuivEK82cJbseSgyD7LyY21aauPNUtMWmnwTUb3gaNdXQgxvVv4H8Etjoky6U76Kiv3heeUsLTS",
  "key16": "ztE7PG8GfCumA51ZEmHKSg7j9ToDBzhVzCWN5J2vcomwBLjwyXxzw3fridaHcU5Z3hovvzEcxcqjBkFXGXhMbnm",
  "key17": "2C9BhZy17XsGaUqo5QsnQBrEi8oocPmTq7wsRsAXdPrYHcyn6HqMNhaw8av5TCkNoBCmzycn5wQFnehLcD1FK8Zj",
  "key18": "23JFz7c2wg1bGAp5HKogb4QZfnQxNkQQkJk6KYgrkNic97RmMtXMrgZ28BeqqpT6w6DEMd6MWYQCFrVfKyG42zUT",
  "key19": "4UPBhaWWJ5ZaxevJ7nXeUij93sWdJY5hEDwAU85U94K1seNumdcVG6pGdkQBGn9pPNaieRX9RXs9bCm3AYonKess",
  "key20": "5Ssq1Pv5yyt44rVNiV6KXXzNjj91nyaCRumZiST34oi2tjcvScRpXHuAQhAKnWfKd9yuySiwSDKP8Eewr7PFjha2",
  "key21": "qAgDdV65vxTxMZw4r2CKnKVKCALuVaonXvM6QB8Hs9yNfkucaZJo4DZcuSDpqktfNBr4ikJXzPmk8AvXUYUreSY",
  "key22": "27hrUdh6dK84KJsHc9ouXSjE3mfSiUvdX8mNNjm2vrF5pS4mpjA4fGAbHLypmU2SNZZk1ygXVcRNHTUtbb6aQncx",
  "key23": "YVVovbgyXsNTkKco8FJEdr68XGg9ukRzJTn4e6Aa87NyKsLcUhQVFwmPnvQzqB3vwUwsogHVJNaYexXkhrQ2Bf6",
  "key24": "2yQ6mb9KyuML7kUvZZpyaAnVf1dP7UXvodx6TuoLnDqMB7KM2Jw2aUHbuSwEmkw5BMp1UEgA1dNAsCwfRpn89ruC",
  "key25": "2FfqWhN6gBoi33Y2DaHkkP6ssh955gvnpeYyFDdjeHXE1XEYBXWgCeNYkWJSR5XL3iBmRvQZKD63B5hfnx4RZqWi",
  "key26": "4UH6MhBud3uH2D2362Hb4EpCnx1dWivsYhCxbAG2ZG9whqT3pzhuSVeMzFBjLmT5iW5Y5UeG3S9ymJtxXRswkuwD",
  "key27": "QtJBNP3c6BbqusnjxE8LTyPKuECeHon5jHRRfkteQZsjY2DgC6wabwAR63g2LHGPVYTmHckpxm4t5aQTyBMnrdB",
  "key28": "28QCnMS2nvLpsg3nBPS6iK8BTRmkQVa3PRJMbJDxwipLKPj8SJRnpKdYjGK14n3Ge84nJ9yH9MZ2LaLeFm3gJBZq",
  "key29": "4fMyQ9r2Bbj6X1VquU3fs6marWiAYGcAor5jub8Eh9cpwYd6LBiC1497LzA6NzaPBipmMvyAe95LJJBUG5vvUZ8c",
  "key30": "kxyubjiGxejuS6nT66VApUMWSUr7KzmriLHNmBcsLDfn7jz5tq4WGyAcrAZ7G3YdYpsFQKXmAnv45V1dhXfmWBC",
  "key31": "5HQMBjQX5mniRQ6rSnofyRkNS1bewL2Qbwd3uZhATjcje4tdfbMdG5Bvp5nJt2Fsnk27AasHRY7An6wL7yvyV7gT",
  "key32": "5Z4JUvK3KixzgL8op2ZsgmdFwCot3c1cw4Mnx7Ws7X1wswANYX4NGVMfDejdsDW4HtHYrb5rtyHFd8eDoTpe1ch4",
  "key33": "45arNGf3af6hkviowtEFNBAC8qt78FXVwgLcveKETeRnKb5z6eXwcZuCxf9Dt4nCuyFFodsQr6WEgU2Y9E4hduqK",
  "key34": "2eBL39R45ZijEGuVtV3u4YLBVaP4NiWDenGUpAdVGLpqFbxaUrnTdHG1RLwErFZSVRRW4oaYC6reQEWLDjJN2Z8P",
  "key35": "3rc5fLrmsW93eGkRw3Unan3L9KeBoSG6QFiHMfFv8YVyP4F1pLLt9NjL41zM7DcURPNx8bzxWhwxasU9jX1gX1Vb",
  "key36": "ZhAiW7wSyNDtpcxvxg6teC6vfwbvvAnfPvubXW3McCUhTsbnvfqySSgyFjG4ZHCam1aeTvTdQVTcGBVGS5gDpgA",
  "key37": "2PAN2eDeusKgod6gDQnvGcBbJNSxgfRJB9KjC12watPGqPNpQQtdDfDq4TnLtqzKtnKBuJwhCbe32mNNrHoSf3qE",
  "key38": "3W4jx3V6LSbiFp1Zx7o6jLfdxqQ7H69ggSj7h15WZ8oBBeCcyCDPMtBhX5v3bdAh2KmURZoTFWRw6z1JETKTaXvm",
  "key39": "5BWoRc8VicnWsVAt8hdwGzAdgmj5q3MvrNS4wvSx3btaSwELoo61tMmL2rrfzuFnh29Hj3P1zrRH5aARBdFDX6xT",
  "key40": "zwEWpJNpeA5Srot6WyVKBicHYwV3KgxHxEXc2zFnkurLrQuUNUVEDtBV5FdzjAeKUHrhNnyWZQFG5CaKuBFNeef",
  "key41": "5F5Pijk2ip88x3refdHrB2TzbrordEc9AC8KrARtLzoDjiX2TFwL7HhXAujSLaQazJKXof5P6RP7Qib46JNESKL3",
  "key42": "5ytoCu9H3MQomip9RTUAnfTebV5k5rvuaer4SE5z4d5UcaTE2uPc8p1SpM2XdwjwH46NLaVeBNR32YDXLtmzJqpF",
  "key43": "4QyQcK9cDgj7Bq7JCpQo4t8Whh23k83hLZUQZmTvanpp338bi8GXktEPAYpL9N6G1TNvXub34EYng2cdfnzGM2Gg",
  "key44": "bovMM19XeXp28zU8aTNfe7SitDzwWkDxAicEdTUp1zYyTtnyZUQAHoHRwEKhp4H7G2gB2uFastkXcFh9PKdqrgg",
  "key45": "2pYsFXkZcct4E5Xt4WCSYiF85LcpohuxxuCKVBh3puZ277zGD6HCp3CF75j9cTwHP2PF77wLFA21XdFJNWcsYm2s",
  "key46": "3vCyUbqX3SYRyrZ5q7kbRQKENZ5Md1dc9fUPWNYRbz7NKnwQC5xrtQKi9Ps4W41FbGnafbSm74FVP2FQRtJah1sz",
  "key47": "E8VckVbPVDNgf4aLvrQYH2gmfdwUEj6kA1w9NSZbKnEz336iWpM8BdhzAyzrTdj2T3owza94gNBrcwo8fK9zbSo"
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
