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
    "4STz8KuhyELC9QpdBiknqokTwMq9okZNdrmq9UF5vYVdY5xroDowRVvLsgGu7uhegiqsjSvwDczGzGPC9gBArpyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S9azHJu2sWq3dMj3jXq6CvFyRMELUdDefrS9Z4LW116hgoXLYSzxt1MoftDT2owakuHyrbLrxMcu3ViNsTg7yGg",
  "key1": "2LAeuChnbVa6T6Kih14RKW1GwCZE5B5XgR6gKAkDEYQYKGaP38gV9gTKcJ8Jgujj8esriSUP15AZ7xVKCBtExEQK",
  "key2": "2HaPSo4VR12GMHtKc8xnDLCypZnsKnSS3FYAjq7cpzZLwrEGaRR74gbmm44n96DkQT3v6EY9V1kEtsWNua7qGtDR",
  "key3": "5kpmmitZrKLsLwCSw97mjo6VdcEYaLQ6ykW3mJRNybqZbT9enfwoCopXNwJ5xKFeKpTngVNU6xbKjdZhwGK79SZJ",
  "key4": "3qtbev5GVGbJYdvNciXi3QhWjimDmBoYPEaitFBkG4nEyeK6ZfWJ5JgyA4fsL2XMtEzJnLhbeSxaXLfdtnxrHMNp",
  "key5": "3JKjzt6n3ajvvqJTKcTtwVdKgWzQPhrxHjChXKopDKkTiZjBYfgqStf1S1dyz3E4pNj4Vm1nKh6aVUmeXwJzLWAt",
  "key6": "5f9CgxoQPEaQpQcWVvEJMHC6ev64iyND6zQiF79hjTSi529snbnqMftBQ31AaHKyASyH8XHJJXGRtCjT4bGp2Mwi",
  "key7": "3RFsjJD8XzVw1F3SSFQPcpABc7pG31pQFCBbxMCbEqu5QA7Lh3U9EzcgTDwVgm8oPLuEFSaAHBLnwDfekNrKRh5G",
  "key8": "4Sx8WqUDNXQtZGJtd9R5zQViNxAMfR1Fvex95uT8QU3DZEZjpDzfogqw4xcGBpv8S8QamNVMecMfbh2FjvR2xT9q",
  "key9": "49H191zL18vheRyL4sgvxtnUbNx9XRvqyswEbVebkpKRuo42ESfdohNhJoxm6miHiZh1DYKQwyx1NRw645riNsfa",
  "key10": "436WyTQtDDxRCv2ce22ucgaBuDd9ZpWWrHY4brXwbf5eY2qZ4AkBSwrNxeUr3ZqdwyabEVzaUDtX2c7egaBpBHtb",
  "key11": "RkCK4EsFjtBDDN41EBJEXjHZTt3at8t1di7dw4SDhpgfYSQ91sBwCt4aDo4e7hLYD8Q26E8ipQ1SL7HmV7jhtha",
  "key12": "4wFiJSfzAd7Zz6PXBPSgw3b4ifH5hhSSSWMZdG9qwQa4wAo3vs73FgF6qDxLyXuNevwRHuS59W1BRex8nF4AatZ",
  "key13": "4PAxpY6Rs8rdvnbT4mJVqQM6viDZgDyiYKy3ZXemJe7aD49N7jx7WZJ36vourkoqs64284LeyVV7aW3LAjtki6Qm",
  "key14": "5deV25CsUawLa1geDnbG423nhHVDFmz6zY6qhDnWX3GUsTrxeZbygvDeiFGkNydhxRqoZkWFj5DB1dSsaSYRR22x",
  "key15": "4zcoNBXqJd1y9VnVvbZR556hQR5o2hYdDSSDk3bmTQuNq8Kcua1EZAdgDWFimcuLYLRY2QJzLjZMoAPMhMdoFTp1",
  "key16": "3LJTCPZK5Gkp8jJAeE995RXoCYYAVHCBbDkRoSDTRVMuvCPapABBGhRjWziXQUpfkhpYk6qZam3QdVwMNLVecaF4",
  "key17": "3xKyfWGCCoNMk2oKwea85LbSwRSC49ht3wSLRWENdqiTFiktr6KevXxD7hfV1HPc8JY7FahhGKaQLcG5z6bzPf3U",
  "key18": "3BnCincSUhijVzbw8dSeWNX1FhL7bjEfi7iRDSMwsCuxzzdQSvoUTTV6aeJihqBmQqWkMUhv4xBzEVhZsUAu7QW5",
  "key19": "4a1LDsxskj2p5pr8QLf9eTrcHvCqZBPshhV9yyEe2xbtQeeVGx53H6ytEWQRFkTSW9rj35C6s8tsAXzgqFD2wqoL",
  "key20": "3NgV8JaSVfjPX2WCSHVUHr71ZBjjXujQQLLwGUBWUH9DQqEP1sdqBekQVbFa2kTnSxKE3BnSnPYtE5yLBadXdjd8",
  "key21": "2ESHyXrcHDjC2HJPGUR7UyA5m5Udt9b1RqJ7xbd6o3Niur3ecJcv18b8jn3RTVFkyhf8of4YH8ts4FaoRp4BLd98",
  "key22": "3iYZd2Fu7X31foVULweHJ9AMs1txmWiBcjN5m2xCfw972hht5zZKatrviRhPtJt34qSLFbKPzHedLTSkGH9LG24H",
  "key23": "4SfUT98kXcsLCk8WgrAcCRfPERJ4uHTMgXAr8K8wZS5Vha1aqti7Vv9cSYFAgJVcty71ECGLKrt7NHbh5kkVQtuu",
  "key24": "8tL5AaGsLuX8xKdEVSTtmDKV9kUMMfmouXPkbR6jAowfY9ts8imqicpLnwPNtkgCq7tLTzX6uPzq1zDqjg5vrdw",
  "key25": "5hjd1E1N8qP1ZvdDuRGBF7wCZwz16SGaXg1FkSvqX7Jiwb6boDsw7Xxq2t35TDApAEKpihBkmrGNkSmjW8KqrkZm",
  "key26": "4pX5msUD8qFKrq4a24L4j79BpYAHhYX7eZaVvAJx48v69LnEkfLyewvK461Pz8E33Rbt8MFB8brznQMVdm286qaq",
  "key27": "GJvBsnA8pTtNamHRG8fSLDL42Dkpc2tFCtWXQhRS3hE1FLySaT8QSorteWkZ6oT4Uk7uLLvbnnUPuWC4xwukBug",
  "key28": "3EFUVpebTrpCNAhiqLkq6LRQrqhSfcVv44EExRacWUxi3o5ZYAnAbQF34tryZ3CT3V8GYLDtMerrsRjEtdmeEUeC",
  "key29": "5xqvA8GHmoRGK7gHcA9Y8vF3UNMZea3dvMuhpYZ4r67ddPwv5ju6rxZ2YSjAiF9G5J5vuBLeMiCBJuVB3WqTit2C",
  "key30": "3QnudzsXeqXbt4BvhUVfuB4VBowQJnXMeu7mjDzuytwSRqBQCoRK3qsoAUo7UdYM5BVVAXUkiQPgQjVvay9N614S",
  "key31": "5R5yeCyyVjvstivj2CZz3NCYqQQuTFAhwzLHe2ZEXibmrkr5HefUhzBtyC9v8qBUZtgg2hHHSyARstJSRpMWWS4w",
  "key32": "3UvA7qmhH4Bxc6o9TWTqFFK7yQ4LSKNBrPtkDFTnHmGwhmxUwQcnkQRE5LxXNCdqveh4Vwuea45r3EFfEMpXtiuM",
  "key33": "b6LFHK1jELhwYBMSN6brkAgHTv1jtPpRybD8abXJH5S197N63LP3C4C2EkeAf73Sj8baTwzPMo3Rxvz4c4GTuwh",
  "key34": "gKUaiv5yz1M8W8YBVZLr1B4tFZM6HStdUDbYX4aHNLE1E1ddZrc6nAvbWCFBjLs2TYdF1Gz2QTn3yN5uHYyLBVg",
  "key35": "5vs4tTi7k5tyTstZpUv3LZ94F5QfDuJE1AJQKZawfaviUo4ZY7r13JGsfiXJXVUNE6CtgKwcGZWc8JSUGXF9Gjxm",
  "key36": "2YaSGV3hX1Ee8XkJXrJCaS5yjTHwrTxwXFXfocphKgMbVE76APB3QuFFghTGZr1VKaRaWPNpuL1jzZmDbvDonV1Z",
  "key37": "4Y8r734Yn3iwu9zHBCAaV2UELLdxRB2hFQHMM8j1WEt6v2a35uEQhc1nPPepDBgmDUwzqEyZjBeqAcsPmBZ4fttM",
  "key38": "22z6tmy71NejhePYksbbAhCBTbXbhTTcKMjLtQydxGBrFF84WLKajwH8tn72PV6XA6H58a7XJHKosu9dNck7pYwr",
  "key39": "31i7uNv7mTVWBBN1hmXGWbJYHsbQX1zZ3NVG2LjjP9qzdAcCthE2hKJNQ71mzkmUHpcvnTebj8f92fDJyxZsQjSx",
  "key40": "5t2sG6TvrfiHKJwMhfonkdZdKZebt7MnFMqdGeFb2kAH5phrTtxzT6tzadCsGLFEUA9vktCTECqs7ndJg2qQ7bcV",
  "key41": "4uvzPmiCWmx9X8vrChRsN8JNfC3nrrnowFCND1x4hfqsgtoUz24ygRcvYNFdie5T9Uajs3tyqmwQTe54cnmriG9c",
  "key42": "Xk81Ys7Sw92Lu34tPk51a49KLGCQ4Y8x8DBtYsbMncFwLyhUUJz5wtzPAYUnfzstqbjdNoTaaxaj69YXaShF7A5",
  "key43": "74TuJTzHd3TCkGsJ7uyWqX13LfNKuKJvTaDgP8eC5rSZ8ZwNUeC5aEEgmWEB8ZXZsYdm5CndLN1WvN8E3a9y6jN",
  "key44": "3hRuvkjc8FHjeC29Ut6p6XJQ2a4hc2eP3DmUKgRKNiG8W3WMBMpaPk1ruakb6CioYBNDLa9kXcVkWoQWaHBPKBPJ",
  "key45": "UBoHGrEaLS21wwo76J1xHttpzHC3nPYAZT5ZhirmFKy5YmzaSeXVFJWKRUEb1vw6PChUS3XMc4gnmx8NDG8grXe",
  "key46": "41v5jRan5BmJ7sM8bPS1cqYdSK4wto3xfLK5tjkBgjQDXq27h7AMxxto6TLAyEuxxsN4CRFGzzQFchuokbr1gYqL"
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
