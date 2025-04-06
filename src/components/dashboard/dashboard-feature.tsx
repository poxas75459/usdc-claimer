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
    "3Y9cdiuYjRgdWsSDR4L5SqnoMFng1S6uifYLWJQb92GEuNHQJr9ssmjdBEuvFdUfWvdgtf2apCKPEFtG93CGPhN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QH8ViX3g7wf3fXhUBgn1WbW5HYjYHSeqmS6DTLurewWzyQfnPnkk9s3Vxqg8WvPbmRVkFTQVGn3oscG9MxBeThR",
  "key1": "5HuUR5cpE5Ur9cSJjFTpbD8xmtLBGaRZxfx6gHuzAS3nCeRX5n29nr6hrnyw8whyUNpS5ReZ74uN2phN7gpd3tBW",
  "key2": "63XRjD7JwNWrj9ZPVzJHW9xY42Ef3hMUddQhENtT38qnhnANWKS47kFpWxNCYM5jNa2Xf2wHLkVmJusD5imLkXmY",
  "key3": "2FSSv1aYNoGKbpWsfVftB7xLm1xK79TY15urctSLrAjYTA46WfwDKa8SP2U4Nab5teNk8gMsrUMnRymcc5S3Ynrd",
  "key4": "4fEBfm1gruMBKbhgaSCfRiZD514bhTvQCjhC6iu5nmbSs8EGffRDwQ4XWVpWejPr8Q65f1DpsLpBRuwyz7P3fBJ8",
  "key5": "5fB8FoCtxu27p3Mn1SrRXUNvTAmQ78QZACkRQP2vcxr1d2TtsfQUwTskCekNnwkdSBJQE8HU1UJARRzmGB1iR61F",
  "key6": "nYZ36nCJL5kLkm8syukr9kCa6omZmMB7jKCvoCyeMXBLMcCoy662A4EFfJ1sazfYSpYq5fs1A2igcKiqjWuB6yd",
  "key7": "2EQEMcWtc2ngpA11ABAnLBqQwA8ZtrUyEjFTZJsjHxxGjAtjnxZcDWw4jM4pyebq296waEEmPbaMsnTbXtijEs5X",
  "key8": "53zmu82VgLGiA15kYmo6QsH4TxX242QaUUcajQ9Wm8EXSyu1G6jUpRe6oePUUsYo43rt41LcDxmwnuKLfdHVD5iL",
  "key9": "5ir9H975VSXhZfoFFyZ3129RSkF4A3pG5P1LiSnDY2iGuRXSkkviDrb9kDfsK7qtcN73beL9HLTiPGDPadpKuMbC",
  "key10": "2Rvip9mEf9MgUqD68HMju58VE7jS8ufYTvncbsBgwryzP5s2KmRDwXbzaEZMKL5MH23ZLHpCHDsvXeGSux5Tvdz2",
  "key11": "29p5WBz2GkBmcx5pu89VWpAdezHrXUaFKX55z3rx1E5v9BpVuYi6vEeXArCgc4iEe923TUHzXw2EVUBPj2yNb2r4",
  "key12": "29peYeD2odqYNzuHJ2SDDpui8sQqN8iao7K9wjwPg47bAUh9BZWL4ybxxGqtPDurBLdKHdFcsbjaCSA9Db1FyCb7",
  "key13": "5Hb4nQ8YW8KzRJVpRpjE3B7bkC3MoiTGE5jY2fsusbfAnXxL2ck5xophd4XHdcchWxN83yrBQ6jfUyz9X2n22K4j",
  "key14": "32ybqernEku8uF9igdNXE9iZnpdK3WLu2b3RE41pU7QiktVWkJQYu2zcyN7Mt649u4pHW92zpMwS3KjZoJ1bzHmZ",
  "key15": "4yreWNJaugTQ5FqViARNaCmUSeRGH6q2cibkGuTxSrVj3nohkbirhmjS8mtTYnoW1SpNdccxPsdJrNxYAUUqjrRX",
  "key16": "47rLcagjWkMJEMA7sP8qk64jmRdxjWJCy5Xzm2CdExm7oxNy4S6n3DdWZeJx26aZ5aCJybLiEu8nbmB4xRfRh5CW",
  "key17": "3EqNi5y8HCmnCWjnRPcTNYqdkc75RE8e7xpW7i2zvoETCYjTZzVb3LmtMWwNVN9mu7irrMDBhz5VRHAv8be7quhr",
  "key18": "3Fh5XAKsbrRyeFaosd2s5h2oFTVdJm59QGk9fcFKcYedadK21YTa3mLvobDzaSW72ZeoRJUpmiLrHTJ94xe3EXbr",
  "key19": "3RgWo1fu3bfnbbFW8rwWzC9Y3d9FtfAk9XeCoeXcLMzsxEJn9CKdCNm2J92ZN8CwPAmd5GSXDGxSFYSBfuKyBgpU",
  "key20": "34scqgqFLcJsFqwmixoEuaoBH8zrT5DPPaYxtDQCXizWdWYgz6E9oJjK8iUHWB3Zs7pnwpuSSocAGSfsU42SUsBy",
  "key21": "YKKB3fufLG8TAEMTqvfvNVvWQvFptt49GUqNPLtnrJA4T759osctwCFt55kTrPXKZsDSwPhRwFBhfP4MCfcvho3",
  "key22": "2r19EAfbng8gwpXRuSwRwiPk1Pd57i4QBUL88msbgqRvtxQ3dFew3Kr9LmoLJzTHXuW6AMhVmLLNc9vr8xxesDc3",
  "key23": "2a6QRJAfutJ2TiuPa1mp4YtpfZYbmvWjCNGn8cfDuKYm7GYEq2KQoMEBa6wkw71urQzrRvsB4Ys11gd5Xe9umfv8",
  "key24": "ErZWj3a87eFf3tGLmH2eBto7HzegeXUnfSXdykJLeEzhrwi6K72ywErERMNbCtutRuXgLQQWjCNDCH5zXp6Masc",
  "key25": "NLhP1sWzHyyYRKz8EVBkx9eS8AsuUyYLa448uEZoFG1h1V5BggetpK5n6XEqiCL4ZQxm9LWX43fpvuSbmDFCid5",
  "key26": "3uFFECnTgFtV8XjtPLE9DUmvASvPSPUCqo7F1bmAwdyzdbNDizGrdPt87vR9hTUBzyj2wNqT6Jz21mvSrR5Uq4yU",
  "key27": "2NmktbmRMskoVtxAT4BZrjpGu3pZRqYeigY4H2K9kQk6bjorEe4b578ArttKXQS7wH58KPcTW3sdxvTZYoCAVUo1",
  "key28": "5QL1MKwVmWPdC9NfEsGs5tpcAzFJGApABbLcqMc6o5noYHzcRUtMTUG8t15xaNp28w2vzCQqTiQoHSBevFJSKFDY",
  "key29": "5r2Q3yjUAyJWx6FFkRQ6GtRQJq1yZxSvnV93CmZZvR44f2anMPkYtJkqREHvGHxzYR9zBRU6tGjriqHug5ab56Pg",
  "key30": "2ef9iw2TmkgqnAVrmXBf5zYsnrHsg5MwtZG3Mt8ZbNTNk8zcWS7nmPj58VwdywE1cUroiVx1XXscnNmqwcfqu9Zc",
  "key31": "3GdfhCymksJmc64SqcbXE63gLnTRKRkeaGDaHm6p3u5BF6kTtqKuQwLC5RMR1txQngAyzp5PCZ6MzRTqtmVUo6c",
  "key32": "4LS3G6kTPQoJTi7NFFPgSkTseBxyD8MqwKRt1Z4xuRzany3ThuJpp2uUY6SjhZoGVcbkBuZjiByR2aJtLGGZiX4u",
  "key33": "wmdp4bf5yU9aT6MUUTkA5vqkCZKaun7NVEh8aCmZNzQspESSvTmVKMkBZhabJ334HTbPQXZoH6owA9pi169w5Vz",
  "key34": "4sCpqKSsHALcXdTkrG4gcYo4JKE1vWBJfaato4u8qPp3BEFajErF4XHDEfurJ1TaZ4JUkpb1aEUZsWKktM7sC3bN",
  "key35": "4W6L1Pt4RzQJG2Lbrm9tqDNfyKcPjFtw1ReHPNdU9pMyxeh3ATySV7qTvYg9tvbSiv6cQzNCkhBTKx3veTcAM8YK",
  "key36": "e2Nif1QGZhVJRnMyyEMG7EA5MaoDXRryLVPg5PD8qqe7MMvDh1w4NF6yVw63NmUNaGhwXTzy5X6EpBu2y6sA177",
  "key37": "21uJhix8XG5HnBrAm41EFbqcMSrj98pfSTYwHsKowqePwbFQJxk8Kb1eSfsZ56JLqvCBk4BF2TbTquNcodCpe1qs",
  "key38": "3YCJD3AkBixGczoBbmv9qUm1mmFsm5JSnxmzXD1rbprAZ4B3ygH3PHZD6cbqrMGkgsBsRBAT8cnRdCA1DKeyVe4Y",
  "key39": "UfxxT4Wx934cKASZFCXqAD768hz7GSmpdUYE11rcXs2uNBqYGuqqySHaUUPEbWGUYNX17vxg31RNkpxyrL6qv5W",
  "key40": "633oQBvzKvdv4jyYmbYsaT4PLHaQftGy5xPgW2Y9wDug66rRcHnDzwsPWkJeYWFjPSi6qBAPpU3WStkv9guG3M83",
  "key41": "33648tv9MKtWmQWZBh8UCpmMhMhTaYaq6KQXhdZ51WiUdA2m55CbBYG1sb7tj36eJ4qcJZGXUJfpNkfTn1U8A7Md",
  "key42": "4fow1hcng15mfLbrBLnY6J3j5QRhSVdtuQRiiDVjpjpMfAnWL5sWRJzMqjBM4649kGUzwnAnmLCAUH5kyP2CaqxA",
  "key43": "2HcMrpAcTLhTcVE63qekLCDUB7RLFQYeNc5X1RzQsfuyTWiJLxKVPD7SnhQqZ9rScBxQUY9TKcYhrgsR4qi43kf7"
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
