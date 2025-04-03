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
    "47VBtwFQq9JdViW2ukFE3nLqiNEfmSubp5tnCJ7rx13EjaJgMu1hCqRGen6WdAf12693Uja1wtMyQmCAQWDnoArF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uh4a8cuL1yZKq9UJGDQyb1P938hRstsTgfYZcubJLadQUEpsd2eDqpX5SYmkSBxGR7KLX1715nSmV7bSYa6xJs5",
  "key1": "2ccPVBbiMW3hw2shL34W67pf2URhHC9rURopruuHiRabqGTE3QyfB2yx7DY5gJBGFD63AgMyb65R9i3gGzej8cVd",
  "key2": "2HGGYKAFEixtJrB6p8BfxGa7zwThxi28HgXHpEd8wEqGngeDKzBc5gsYcdtrUsH6ZM9ZrRbgyhdSerfYT3NE3EmV",
  "key3": "271rNrGGkJgDVtEhMgrHMGdJyosPRrYZafFC8NShwgcfE5RzXQb4GNaGPudvEsfpkW2Tu7WDh3A5FB7ZWuR2ZY5o",
  "key4": "SRdvbg2BQKbmQyhL4QHj4NPYXcTTsN8y1Xzu2etcR6i6FHSHT2AQkUD6kDm83CGMducngUKTaP6Yd5xDoVrjPkV",
  "key5": "2ELmatrsP2pBMmvq7t5Sv8FcQfYtwmTQ4a5wBHNPYy2N6Dreb8bhzVSQ2LAYtmCKaE5NuG5MRBXZc9DLYMZcrepp",
  "key6": "2B1uh6ajXu9dzcCtxhR3gKwME5FAvNkhiqc8HwEQ5bRym8DJYcmHF6tRbx6oxu7hs4rfC2Q84ofn1M1xdq9JEReQ",
  "key7": "2Y5MBGcSGwZDDTAVB8AHVVhywG1XmoQduU5EmKrDwSYQqWXQe1xdygY3ABWU2Uf1JV5BoRYNpkRMEwrstwiLwy7Y",
  "key8": "55ZtdNu3stbXZFPfrY83kM7JsWCyFXdWQQpUFtgooRxdGHyL7djuqssApextHwDGMo7oQZd1hH8KVArRqDn7FRA2",
  "key9": "2fLZkM7WEkgpRSbsJgWxeKWoswHbMH1JWzz3DMzgyiBUK6s3nuSdPc5DCYzDhGSCZkS3yxj2REVazhorGTP9MdfP",
  "key10": "551UyNMzSyNTdibUnkvXbobepG8msKPpLHrM18gQA4TwnKBbPccgJtr4igCWYFXsjZ2Rjhv8B1qeVJnZMJsLFL5J",
  "key11": "3tUtpBDRcbYJko8SWVyVfN4gPGycCgd6NZrRjPSqvy9U49avwMtWHqErTtPFVVR2dXKBRRwiCUi3vEApyYAADjtX",
  "key12": "23gbqMjYk9P2r3XehVYm54WmvYvUYiAbc1jPv8hBj1hCNYnpndtphSMErKY5jAJ7BQEtnyRtPjDTa1ePJirVP3RY",
  "key13": "3uEydB5m14eRVzvM51rBArVhxMz95X2b5czPuUxrRBsk8a78FVZDP4cjtmqkzad74FWRd47RA6gDgq6gxiyoJsQ7",
  "key14": "2JbqdJiiruKDHc84A1R9E68xhJ3rcb32xqE11H7vdrkpAWeWgzpxCVduwaRRnNJb8VucX9CZferg3DjrsXCdgsbc",
  "key15": "3BbGixtimmmRLjCPaUAJiGPT7spZNbi11cyUErSBEdJDBtLqQwTxu3SMkw43h23Rf7pQMtTMSj8rmNy8dNgFjo7j",
  "key16": "82k8NM1vfoMa9w8m58X3B32AMMNhdpXiN3CYSDzkFEb66PyQqGqWiNKmSA7rp9ZBFxS1dsVuJfNrUMWaqugxp4v",
  "key17": "43PoWRJczqEZoL8MV3F4pVkhihyvSe51pBV8QZteMXrCAfLDgAHx54fRer3beDCxRyF97RMtm3x2tFJUR713wDaL",
  "key18": "7mZFKtGYwBMjCXS2DVDxJ3q2YevHUakPGuTrVKHaW86uM62Lqggox8XuDMoQEQvhosqvSSvqTbahZbM9o1tLDc5",
  "key19": "4qZFUzJPBpKxQ6C2Qr1C4TMCfTaLBiurpLRY1wUX2XYeA85Q7fbt1CYhmrzv19Mat2GiwmcV9qWtUAXrjas8jEyE",
  "key20": "4PNp4Rxi9dssj6GTwSwxgcvJKo4YtL8A2HHRJa4k3ktAQMxemJP1wejT8FtG8FC9v2Nw7CKTQ25UdCg8GR4DPzgN",
  "key21": "4UsUADDPahSbLvKg7aaUWi6w5qbFMXn72jhXL9DnXLbkVAEDgDEWN9kEYeuW7Kds1i7wQnutqrpfxSYXc29a8bUw",
  "key22": "3dAhvySL7LRk3wtrhsNVScaFxLRYQcQQ7BubrBTj5rv2XcCkxPbhq5zHrWF1pbTGx65Lqq6gtbCnY3D26DbAp9qB",
  "key23": "4gvqQf8PTX7hkaYrB94ugj4Hq7Y63ChWx3uvkf17qavHK8TaMuB9wsWGohEENkHo7MGMxmCGXuTpFTxDWudkhX8N",
  "key24": "5Rk3E3apXRuvnUFWpx7u2ZiCyDGwZ9smX3cTHM798v8vAmmfXa1p1UTVZZmt3oo3BiUx1pWVFwEKwLLsNcthJVGN",
  "key25": "5kkQMGEoepHEsTKw4aiRmVgTGbTmwYAc8xdMY28K7sjibgCeHFtjeGsKMwNsRFi6gRRkwo2DAu57Xy9rGVFjtvBi",
  "key26": "2BoLTB328NsyimQ9LzZiDwvn6sKV2iPwz2Gkq3m8MKfbVSxrBgYAdc8fJLpJ9x7ih2pefN4urunEPv7s3s454z6Z",
  "key27": "rvk5RR7wTr3UTuA2jPtUGvpBxhKir4B55N1CoC5zV98MJtV1CfJzqH5nnNUi5Bse9Nn52taz5gHkA5bRZvksp8x",
  "key28": "66ys4KUBouxTKZp2GuVkfEu2HzShabQYLcAmZZTJ6CmVxdPwHFKUTc1VsyagqZe4v6zHU4aMYMYB2WBBBCmWB8fb",
  "key29": "4ucUZosJrNP5W6MMTDXpGevQCZV8dzWGULYDMEi6BuKUF4SenzXTQ1xDBY42sCEuEPeTDWvYaJXSSC3UtY1EpFrD",
  "key30": "3GhoMWtw9ozHtDDFXA82niCryoRY7Q2AyyE2f2juDjWMjrwbQ75px4yoKpMoZevxBoYtUhNzkhXvYibRXqarr3NK",
  "key31": "4QtUNgvuoXWWxtdEyhvivydRAZemsPbvNQJvg3iRqSj7Y3rnc8VwzXTAya7dKd3aTg7jMR7wYrS5wb1HSF7QzcGy",
  "key32": "qBWvWUwhKTPSux1aoSCaJY5h8ZYaNgUNLbLj3YPeorKDNcdWzbwKdznEVAcneYnHh2bTVg8Q27w7rjzvuyAHi1D",
  "key33": "2ZQo4hzwAYY5NBACWiEGC9HdSmaQPgCy9nPxGEKn5hgmCHzujVijcs8WzHBYcYNgqKk9pHJjc8gFrkyyYiYjSst4",
  "key34": "2ZkYkj1L62fNce8nivTdyrUjokwQXmovPGBkSFHJpvfgde2HGoL2S8ksUBp5eorpmKttVaqR7n5rpnvDPzw72nhu",
  "key35": "zqGj5FX3Eo1k8AKe1dBc6D1ejxpNTPvRWD1FxPFJeQDxq2KYSbPusnSGPY52tscft6BEvkXQ8gnk2azQJ5aSRH2",
  "key36": "3FyiWURarwJPAdqEKcpbZ7XDBoj8PfVft3aiNLznUVgqGjkrvoDkMCPtRjW4BtocuPD8G9AUyyNA7yZJ7HtkCmYB",
  "key37": "2dLSNXv2XPYiNBHo38RSG1RLzYnLmLT71dFKDbinYxnmRJhyKuEKYf8yE8VZon1ZDMzsxDSZxnSBhTgJEL71NY8w",
  "key38": "4beBKieLsXZnVFLn9y89zrb4czFTGK4etFgpmQXWFkXjSrrzxaDsQ3yycWPxmaX6eoGrTd9k2TtVVbNjRP8prG8E",
  "key39": "4dBGEh7Lyo9gXGKdFN5BhQ38zpw3YtrgT1pN2KC7Kym4rwDTs2ZvfTz9yy3Rp9tLNRry4Y99QituSeZdadypx11z",
  "key40": "4FPLrgXU3HWt9cYHYXqZNEG5pSBdqxQfSYcGZJy1U4kjR3JYLmEXsBV6S7rGGn6rGHzcr17ntBDnz1QnNpFEoz2X",
  "key41": "4DLVde7zwtxHSAxsFyswAhzBb9u2GA6C2vQvopNWqRZKrmB2Ad6ivRRa3K1mfmjefZ7m9TWfuETSZ17MiHbLBy2x",
  "key42": "48UnNKRcnjEfAHcnU9ksCJFsTNVFE3sC7zzP6JDA4PwkxYtYtYffGRLnavkAzvU1EjsiXQDaeE6JdAeZMngPW1vo",
  "key43": "3BmZSwmMhrxfV7bWTq7DLS8xBRDUbtmbssS9tVHkuZ2qRxc9KUiUFXGRneqN5qQEV9fbVrdwtfcbn4sR31UJt5SZ",
  "key44": "5sQi6X6gRb82pmFx9efwAZKUeWt9r4hkSdWXFXY8tt9ZuFaNCZnkeWhG2BPdx8f68Cv2orkCHX1zPzytyMGdWbYG",
  "key45": "66vVzjeLFKye8JZpf4o8AvHKy6oZLfFs3pYTVKaDqv5qBjhVsUnRFpwGCSP3ofoF74PXZUKu5ChkBGL5J1ts6G38"
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
