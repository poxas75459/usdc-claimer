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
    "6tJspSD8hrQNYXEa2i4D7GLJK9o92NycqfUdNnjWHgUj59pKwaqmAhZQ96STEW8cokrY1wDZKPXgreGYk7oXuQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UG2Nhge8BMiittBkTvnJTZ5YQSF9XcMwCJEWr9XGTM8fjNAGF24yDeoGmaCav1zpXFg5znKZf9GBehNBhhm7WXP",
  "key1": "3DczA6YXYfyF4Aupsu4iiz3Grkapz2ySzNZvKs6raXaRszRD5rmTuVekBDdiPyRJRhSXEB59FwXwGPPA48HDgGAU",
  "key2": "2DGKw9yGVjzeCKZy2AaZrKpAZqRLyuswjzuyTsparuPmJCr7XZrFWmDyNGs2iGCU9KLtgydVRtxwvPAvQmWgzxtv",
  "key3": "nHhKGTRPnxpeAqB4bEQcePsNR19HH5UyMRpyoNDSfgmjSHUXjz8EAiJS1Zb1524HCMgyELRU7cjGvAgM9tgLGsE",
  "key4": "5Y7KYojuFb54w7mGHnB92ApWLibpFdRee4PSigMxXwhrCbSSwZt1jWNBVs7Bp2hsyfKxL2pNS77UyZh1RHLK12to",
  "key5": "zFzyTpnMyjrnhAdBHaUXtT75Y5hYPyLbKDjn9Kjjw149Dp5E6WoV8ztndXhw3gv88LqAc2SpEsAGZR1f8Roxb9E",
  "key6": "22yuBeuVtsdYbtoNWn5x3GjDDBTGmJwJbPUQxokNZVsALtET6FUMruDLxY5nya6Gk5AYxv7GbeDQK1ZD4SSMSdN1",
  "key7": "4umyKz6z3Prr9x33kQtSmV1R5ZeYU8ESVDxeV6pPbqmjqpcsVhiRn2pd6bkt1aVSk1jFaP8AEht79bXDaFP4URVa",
  "key8": "25sBCRiDJJNgHFLQpn3AwQEZToudgrXWHiFCzoaYJnFVEXo5MrtkjBmaq3BezEpFCMSKAH4etU1kChJDfmaccvNj",
  "key9": "5SFKagdwCjuTV6at9x6KwhTrxBKFPrTVdTw2Ks7HQ6BvG1T8MXkUdTnBVcD56tBEF5ibjzH7ZtR4bzvzgjXTxCtj",
  "key10": "ciTLoAeD1LnGCTYDiEfUrFsSVXaBEciMVLkwJmBuhbe3Vbn9zsFT2WSpCcoB2Qjq8DQgCvycaAUtFywokkCRwpd",
  "key11": "4ZXYgtyvbweFpiJpHqLhJ2E7y84biy56PuubJ3kN6PBmDr3xGYFge3ax8kHs2AUNcN5tnuanFf3pYrMtbeZydrtC",
  "key12": "4JbBoMuErd9evf8C9SJgYM8wbiNfAmLX3EYV7qGsofbsjkTDuqjetB1bj4aTfJUdRfiNDRkEsLcDasu2L1WeMBNQ",
  "key13": "4onBLaJrfHZVH5zvsQDRdvxR6xKRDoNwh8p47tnDvSPZr2iC6BDN8AzcHmWSZxzJtJjJ8Mq7BMFJg6ciD2vmdsAP",
  "key14": "29SSdb6e6myapYy3GAnv57pXSekxfN7XEkMtdsKo6cKGcY6rxaCxxct2xCbsuf7LPZxf9KyoyrJrkuKzA7nPdTyF",
  "key15": "31UqQvjbPrTkxRqfaqg3gTswJcwjohKYEx32Q6uTNjeZVDf8xRLTFZUv2QFrBzNEY46yHms6HyjAy3XC5MrFnMka",
  "key16": "61Pdbkzg3w3uM6MF1sRFrBeySJd3ogn4bRJwacxjVo7Ueb4E7nDCQckfVUxav9wmhg52RAYjZyzL8BpvY29pKHA5",
  "key17": "yxiv57Ke4DXqmFMi1Xjn8vZD1gLm2MVArdcWR2x1qpP327TaPD1vYrkFg8VPL5yxes2oRYAMQjhSXNkD6b8USqZ",
  "key18": "3oZPYaB7tHg5Z3xe9tQgHFRk4Eq7mhpV9JJuwmnr2v7aLfN1njeKjZWD7QGRFzypo4w3WqBytva3RLJkdKNpN4m9",
  "key19": "Daub5nrELxaY688eXUyMDV6GKTusRFvDvs3ehGU8XMUcW7gtzdCpyj4C1EpUmwfJJG1N3FziE1h6hUPiQjxnAF7",
  "key20": "59TyYBC2Qv1TEC9SKuwMVimPri2B74gLNmkyxsExDAsKitT7Em2GZ8e2cnpkqWuDLHoasNoAWiR6aBboRJjCrCqU",
  "key21": "5ZLGhYtk5Utb9MHsww4fyhfKmrQtDRrQmYb5NPXhXFtp7917Lu1AnbFqSFo5zjSwaCq5wJTECFPG3mNsobUgi9pn",
  "key22": "66h2J3B9AjANyHmsKbRSaQFd5pe4bS64QpGfNTooWGj6hvbkfrgLXUT5yXCTULoe4e6cUPQeeAguAGEcrrfz7eVv",
  "key23": "28hGkuNRb9uTfhjtrcBsZ8gzmeP4f4VkwKWzXQa1hvVx6tgSPuQRsEag16zZ3hcnk36Rux7TujNVMNKHxZKTJWH2",
  "key24": "QtmxJv9Q7Ww1k4gGxCcoYHzEvsZWWtC3grV8AjPvz9z2NPJx212zEmd2gRFrM332Ae2RNQXx7qGeMYdMhw2r4Fb",
  "key25": "FYNmxotq9owjvwhwbkm2yt9EHU7sDdWqWjsoqwSANxnyE7zWTjj2emoqhs6BU6QUCCdz78qyh6Ed4eZ6kLCVwHd",
  "key26": "3vmKAsT2cSQzbAm9xiKBwi8EKFzjReQdCdqCXguHnok5q8ZxMZ6JFSryBLfbwT6FcZ7gfVrkKtRAjN2DiQgbpoBa",
  "key27": "5UpaBJUpJZehureePtHEZqyUwNUUZgb8G9txfK5hyZVHNfuKDHD5RLAVWRy7CqYostEafyiyfn8EXEzVAqbgRxZ8",
  "key28": "UsHwDbex4ecPjnFCwQTkNew2kAAyrFhWziVZGC7PLgK1WjcikubPhXsRGTc663HhyaF13Fm87Aqe3TABS8YqoDt",
  "key29": "3UNNJeUqR2eRkrZkCnPLN8eMFLiD1JHv5YzvgVPkX4i5gnamGHNU5fwHbGsbRZmBkJaehiRiCjB69XuKPhssrZb9",
  "key30": "xAvJX2RJQXqHEs6oQTmfVJKkEBZ2kDsS3sHT4AroEUZ2WqSYQLbrNFKUYwqVZaAVrAiMuthmushXCme1Ajpzy9z",
  "key31": "31ppJVuaJTJVLTGGCkPe8ZE2goN3sowT59tZrJ2aDDE4ecnmhU5tmGSXrYWBDHbCMEN6ivKykt3fv18YBSWhg3NH",
  "key32": "xXhrsFT1AJnkK2TPBSN6t4QLeZDunK7jqfApR2qnrKMdT9TSPUzCUh4pi9gtAmVhMtoi1ykLapzv4AdcvUNP6Xk",
  "key33": "HtMZW3Ruk5vBvLkorSXxunSFw5f2WsGcuj8VHMJKch7WoPJgWsoU74WhJhCSwFBJL3nEFymFMBu3mFLXL9V6R2u",
  "key34": "Sk5NQRxTueY1PwwyLqbddxfVK6MGfLKz6MXUFBfkTxwiiGk3jHPvctHeACtXpdqKqenwbKtKeeQwb4AEvci7aqq",
  "key35": "4cEdMMWcwKNMtXvBzfrDooSs31ZsWbhGEK9DooaBoj3CExwtgkbUZB8NKMLYR2oJyMwLdznFoQYiCmZZUpmfSXzy",
  "key36": "2vDUuaoFZaNzgMXHZxnxnGZJhQSsk47TGh2HvUwpARBhQ4EAxsgUfgjPo2shPazHpsQ5VLHwP7u2YFPT3jpZF5r3",
  "key37": "5tEiVUsorRCgfgBUsDNgowPspJNnAgHaW1pEtWYzh2MVrh8xB7zTnguRJ2gEJoWTGSfBzxeYUcxzQ7Hwzmf7Q7TJ",
  "key38": "3tLxGJcdGoAURAuhNpRUWPXLYY87tWq51x7ynyXxa2c23X1KfvhjReonwH6BNHnHp4QLtDi5uhks71BBquqvML6t",
  "key39": "SxhfzxR5hifrKJvXossqsQrYpngEVNwTH9g5EXs8t3DJBSXw1JAT4Givxc9xbTWqfFJ6kNHS6UZKPVCboE2Fgrv",
  "key40": "2hchzVKQBKRBpaJP8c5Cq6c1LNpHiPJdkpapxha6bdUticyW9WVUd72u9QStKNRPx1PkFYWUnH21JUg429ymphaZ",
  "key41": "4UjzPaaBkXDDGECX9VtZxh9F63JUif22Zbkz6CHYBkuocVg5nyYgABJ6K1EiX1dHh3k1KHooerL8JywUmsJESJeJ",
  "key42": "2MXyGaA1SdjDPBsm3sFkc8VesXT6EVNdVuXo9HMUWcqBK2pgBm2TKRkmM1pdafdKqmtSTQuCumqpaZqRhf5VGDbz",
  "key43": "2diMFpAUdJoqB7PeYKQhJnC3kKwYyyntmUeqp58SStbf8yVQhQNWeqxHRQ6bwLhuu4Zye6Uwf8yEDJhUvfJfb1n3",
  "key44": "3cd1AyeAFgiRJtPxAHW2i5Fyd6kUVLJgKT25vHq6s5wLDXd3Z2bE41xLzwnvFxpKNhZ9A5LyhuzpUpZLSi6vVf8N",
  "key45": "ZRtzTZ3H1Pf9434MuCsvvone2LMFPGuri6N239gFzyQR8oRa2z98UUSjYvNBDu5mz1tEsmHZCVNG4gm1Z2NwYPv",
  "key46": "4qJE8PVFuEoPKw1oytH9amuaV7dSrPa9iqsfykcVXJvyMmPHrgKwiuwURubchSvwAUff9eEvgZNxQgyvH4fR5b9W",
  "key47": "3sUnjqnbFiANz1h8fC4f5iAaMxQNCpjmDNpiDkdUrGuLhhNTnJsJxSFjXu4kQXiNZEhd3Nd8MX1CTCQzNVisE3KJ",
  "key48": "5BXbghDFGN14oqdVreVFz4Zdd4QspTTkUxCA1paUQcGSDCviGopBJpd3zkVAF2Mou5KHGbX33nUnyZzgwpdhhwhR"
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
