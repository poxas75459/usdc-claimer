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
    "28Dzs6owDHh2yDNtNZSsgxNBPTt2tVVtxUDj7hgJcAxkwGdJiNCqiA88rgi9vvB2sPcfzEntpgqxQde7fhEKNRd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YK5Ujbe1h7QjZZGuw1uPVQsvNx9hm15TfzFpW3tzTWaYcZ7HKmzPwrKrLJa6orA2vrDAegG2sxVKbA5Cti8UG6N",
  "key1": "3Qy5wopqcq9KaFxAvQrL8CkYguRAivsQvHSk9dPh6PrBnBFWytFKCjQbnwmv3tvXV28Urf3bcFNRx4v6Ui5adqd6",
  "key2": "2RJ3FD8MyNEZpVHks5Xhg4UohkD6VJj3KKdakaap9frCkFTF5Rro8CRc9qaYpL8BE6wKEonvCG7g5Kt5PQuD9DHX",
  "key3": "2pzZZ8h6kC1eSjM46NfYWMJCvZo9v5h4svNTCdaWr3USfK5kj2beQJnCbLRoZgZBD74UNWmCgC5aQndxb1aux8ED",
  "key4": "3HKyjG53m75GmWKhueduFH22iNxyENMjEffeacj24kKGWoVg66Xz9g48xQF38uQg1xHsV3so1dWbrhFTJjvFAnub",
  "key5": "2a9pP9FtxDB27HV3RA3WNxPy5NtAqyPykyzu8CghJvupgCtNfqKWJSjGnVG9DyNBiHHFkS4ZyvgEJkCwS3HSn197",
  "key6": "35NHMHzpzsidE9kBKLfMbCs1paPgQAepXeydAoyJdZ1vSK7shVd8oFrCeMKtcH7Et1hvhiXJBdLPCo6FgN7BPejS",
  "key7": "2QCFDNP26jPpa956WbA54NL5cXSsYAVuTEgfyVLCtBVpbfuo1chcoeuSStN9Cy7ny4NcHZnDwLaWVdQ4PUKRhXSH",
  "key8": "4Gn6MveAwCLtRnCWWRKVXuJ3o8UBwCNu7JaMZZx6MvFweQW63QmWaz3zdpuVeFzrD6vs4satb1EdWnNtvK878nfc",
  "key9": "4mV8tDQ4CF5rKNgApjNwmvDCt491nGsMY44uMMuYQ9X4CjfNnYieScQYRJuB6wRrEJAxcYvN6C5wysh2uznh5f1z",
  "key10": "333tYYGWVDgmgw2V6ABGHujNojnamNw22oYquyBJYispziw2hniodXkYs3Xm91BnpTC1EqecEjQUAtuEziQbBCJA",
  "key11": "3sgn2KK1wPVpgYVjSyHGTKhVJiXeD7MwRqfWszxd1ZSpz42vdDft7GpTxoJt26fQHrJHpdXDxuHrYbMCqAEFaNgd",
  "key12": "2ujJXKVMrVLLXhVMgijCdLw3MDGFNeRqfafqmgJPKcCVNe3M4Wjhsi7As2hhQngJ6T3jcLAUxbg2E2i3Q3cTg6ZG",
  "key13": "54DEiNYngSSuqcswYoDXDkH4V5tsUR9W3GyhDPnojn9VTf6aXnh3DC48WB7V9rZ65UMYFbygjggYWscbNXS21VF4",
  "key14": "38cPV7ymkrrv8h9Lx8Zf3ycgFJhEwfhmmo8ouxN4qgRqDiSkwBACkZi9vUm9odcxHqYqNnswxbjdAP7MZKAgFvsf",
  "key15": "2hcM1oEV7G5qaCV2FLeXbWHeXPbaFA6HEX8h31h8rqP99NAj6keqNFHhnov6mBpaRonTjhRAZFhM2C31amnxbE6q",
  "key16": "2UC7jdobxoskRqRdYn7nTBzXEGvm9okcgPfoXN45Q5n72jhpxAGVbhXhg2A3LgFM9dSaNvj36UHzqo9ZyJdjrSBX",
  "key17": "3mrxh2fqtHN7FJNwgYYJmENroNMMaNHdo9eBumf73qLHGmFPtjTMCx6jRstTsGv5Shn9QEpv9XXn3JaRZUBQz34r",
  "key18": "62ycB5zdyP2o1Ep74zKbiFRiP5hCeRnJLLEHFHFGuaxUJ8XvSUAz2xBJ4cFtaatNBFbyG3yYGL5RSarw5624V96t",
  "key19": "2L145DeHHiMauY5Mt2wgWTaDqSSmaL67PkrwQy93os8syvEVppMPMVBWkV1WH3Y8xAkguoU86VxarMhQbamLaqJ",
  "key20": "5E3Dzcvedw18UWvk69YsAJLUxSYcQDaubeknWeuL9NqF3Veru2yXRh72S5PhQ5qQUryPVJgXzVnHDxucLUXdeTBE",
  "key21": "4L61xcqPmAHsZHa1vbqg5Z6dHPGCGQtPTWKTFHvytRcf345cyE3Rjiepi3pGQjYMnT94fSn988cBSLq5jsegRALA",
  "key22": "3mieEoSKssDSPzPk8GaZoU3GMfRtVvHuMv4jScraksQ1Gdvhfc8eBDdMd8Jt4sJM2vxpsHkbyqgmUh8MV33HiiHb",
  "key23": "6589beWSqyJK5PmWkRUYY2vjhGvHMqXJ7HtN6Eo8q4mAQBw6uzifxa8TgcEHTBipBeRmgDSZQjzFrbYA1V5SNUch",
  "key24": "488V1ZW5Rm8AA5g6gVvbMLM3PhLvgehwB5FSLNnsLrZ1wMR5o4YAFriP9WED3QK7Qsnfourgt3qhewmJKGshSjcE",
  "key25": "22nmvthvyKsaNsEvTUYgjWAqPgp9MHyW2XC2U8CgHeXRHmUwBzPwpvXvWXEd3xPpcAW2RN2JPanC3kXwYe91ztQQ",
  "key26": "5eQv9FgbWACkKJWfCUmMi7FPfJvQeo2tioBSfvrQA7gBERWH34SspxDH8uKd9iak2bovXCvnEPxb3mjoo3urUfQg",
  "key27": "4qiNEmeNHiGw8FCBYkCbpi3JsRxyZ2VHSZPY7XX5W1qpRZbKQEVgKwuLN9caAEYwUVuc4xm7pvMt5LyyviCFDa2D",
  "key28": "54W2dn7mPbT12BDWLehGw1q9Dto9MYoHk4TiSw59n2zG1a8ttTTpX6z7M9sbaJXQg5pCjSCPKHJ8WdUDFY8smoQr",
  "key29": "5qmEXAmUKXqsKL18hRcZ7k3LFydwktLahLA81BkRxZ5yVvgHbw8HdVuQdTkkpWB476Z3xkvfbJQ9t5QyECg9iTwF",
  "key30": "2tTWJ8GYPcXWKPZ6qLrZRAoy7gi1rfgdUh4dg7fegEBnHy6omURpgUoqb6njFZ9RoyW4dQqk5gFDAR898A7t2xn7",
  "key31": "5bRmNEJvpt2gYHRAfuHgt1dviFf3J5faF3weuJgUiFY1jUTRSXyyjLFTct7447dsfhMhJZyHiYkb5uUu362kJ7af",
  "key32": "67HxbFzrjPqs1LtnPENcqZ7eY8pFg2iqwyhQ3vfwHWcc4aC4UKFU9ahJoFnXUQxLzGqxgM6mQisTFRkEctAqgngU",
  "key33": "4S9FdJB8XhByxg7wiXQgSFRFxHnKTty3cZPVq69mtHAcXSFucq8RBMrpF5bEYj5HfNWCsDGKE5mGf3g7Ec5owcJQ",
  "key34": "2Z2kAF4Vr9zgAUpnPk7fs97jNmifyCTFzPFqMzF585CERFZfwaKioL8gBrq4a7v1JM8ATGX6UfsXxuXdhn6ESTu7",
  "key35": "5bHYspVhbzqk8YsYL4xVz6eTADex3Nz37KPudt56CCq8iC87UdtGspiAxHaSWc3JKbgotAAeTdQFbmzE5uZCnj94",
  "key36": "3hdj63gZj5TesvzsXWNWBKMLZhLDRgMrcCwzuY1TUcGdYRoBXksH2fZZfEUHJe5Q3hr34vcAMKxWQFMLnc5w6mwV",
  "key37": "4RS57vRJgEJmR44SsuKCw9K9S32C53hX6AGzFopuMnUt7Bzx1BHGQC52DDQMa7vuFpv6ZKc43gwNDtEApjRmvYa9",
  "key38": "SHmgF7E9z22PzKpBecRKohDEaH93j3NYB6DnTPqRmjWCEmd3twMMHzrQiZhXpABBAWE8zwRhRBoPV2uMRZhVnkM",
  "key39": "3UZYeskj6XdzjBhQVFGViqxPNxVQnE8sSvrodUAxooVEwK6k8QmZ35xBaPgz7grdv1eW9QjEJXSHRbSw7zGu5TSM",
  "key40": "63zhUryWBeSdDF6AxCw15E6g1WNBK9tQJwFpjovjwkFLGtjbjuvsG4a3qTCszw8CiXYgiBKwjVhGgDVV7FpZEjqn",
  "key41": "2eDMe5dfy7KkLZ4GJTsbdnBcYX3xDpgN1qSxT2Fxjwdkq4zuVqkhtjC137YTr7jd4Vih7krF1WZEQwG9xi6hGVoi",
  "key42": "3mAdT5aREACH7BewpTDXCuE1AqZou4cGUsxr9ZasppFRkF27a1UxBcsDRc9wJx61k2TAZWt2cYv4cunVXB4ahJqH",
  "key43": "3Bi84sQKyMQVXy3SdMnNrzaYSuPmFRGkGHHizf6oWKKagCg3t61c15bUwpV124q1jQLZva2j4Z2Tk99akwVvczbt",
  "key44": "63eLxDBswFm9ND1Nvh76RZRF3FKmCJZ3fgnJgSD4G4GQFHZNjCb21ehakCKkJbtnRHGwfEFvEFStUP2BNr17C5FD",
  "key45": "3saWNgXtyfhV3cEshvcAkKdqmVFjAdt6QquaMKQ65WjQoLvx3M7HvMwGv39rY3KcErfViJRx4yzU57nh6Graq34Y",
  "key46": "3xXBzbp57RkJeRdVkCxibEYtzQ2wpnQSr8LykjmFKrJnvva5CqMBBSWUBNTGbnm1onYz8iLtC9H6Hy86zXiKFrg9"
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
