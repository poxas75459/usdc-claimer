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
    "5QHpLb2sx8St5C2bvKpzDCqoRWTSqU1rvyhvc3y6vB7sUpwFgr4TpjS3u6dq2AJ8cCfwhN3ZBr15kJfiz9QYhLv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38REqEf4M2dZqVaHMVjsFEmn8W7XXK6S3MRpGLeT52Tfs9dMc5YBESd9PwqxKFxG65afQS6LHqpbuS39VNZ2VEMk",
  "key1": "9uZbNnR6mMi7xrWFNUcnPysQr6oxcAaWbAqFYPCgyUYEc7uPqBD7W5t4vwTHcwNb1JxbsidhWN2b3vhcC4NJwFY",
  "key2": "5iDwcUqbHTZVu2Notkiig877hE4QyE7PQTdVNJxnPdayzmY8L1H28PZdRKxEk6Pi52dQuJdz1294bZ3dM8ZzDJKb",
  "key3": "2jv8G4dkmesEknZkWK2Mv4eXjm2BLxNzNrx4zY4sLtgUHHNwdR8cML5w71WzaAx1yfPSrY9XWUec1xXjHvB8MV8W",
  "key4": "35YGY5RUR4GCfb7EvJspYhdYwtXUbJHKAmDHrptohVemtd6FPNQiPyjUknrXpDE4qmtANyaNnkgJXs74qnhKhmMR",
  "key5": "2tNKw5rF2TVgUMPRCoEJUr5wbHtMxXd5hdxMpEKxNAUQATTKfFMLGhQxtPCn3hDmVUZ3RfoTjwHnvq9CvQ7artGw",
  "key6": "65bkki1mqCAf5dgVVSjGm5ALTnDmDTfuEf6ZD4NQbEa31sNhP1DqiBvbw4QLEhUF6fULF7u4ERw75DKyNHfnLipG",
  "key7": "4GjWHq2QVpYTo3bkKNehdmTy7Xu9m5zFve3BoS6PkGT84nzhKaEtEYfg4KnUbWti4FW2C9SMaqR7xkv8mGyJnEEu",
  "key8": "4ooxvxkR1G8k75PfTNV48fF4twy3DGFxYURiTLAGJXHnYbarUy7rbEj99MtfMxm2Q3ZpjhAMa4q4XKkD74S9113v",
  "key9": "4ZJGf73qDPnDdEFoiX7B46pBH1qWzWG9rgoCgKW7cxFjqRd3P5tT5JNMUJc8xZ18cyXxSBA4YeHxQmterwRHvM4d",
  "key10": "24tiHdaUxjUDaPKvZqJnmsHm1k551HQx9WDcXunV73t1uBoj8BEytoUmLGtjiuS29fRshpteduatSkUEke9aKFsq",
  "key11": "4Env4xkpA7i7MTeeP9DfFTYxKtaWdsLb9scRm1rjUq3cWYitcpyFL589DNfRZexybae8GA3rGUNh5RaLuqhLXHjV",
  "key12": "5RsQr326pKciYnwt9X7BVaHCF93bGVVU3J3Ykt3hwFTgQNtxesUz94HyqzsgVzW6NGZQXXbzGWinLoSU9qNaZaR3",
  "key13": "2GgMAtJdhjJWoUYrGSE4T7Ah4Bg46LqrrJAkWtVbTg1QGEKpEPhobiMLEArnw6MDv8zHwKogANDquqKq34E3X5RD",
  "key14": "5oBL9mbC3M6qLcmRygepnJMgPUDdb73fN3mri3pzgVtTvw2MTc6u2jnn4J8qUw9P8Bes55nFCSZZYmyo8RAtRgEt",
  "key15": "N2Q9D2v7NZdn6YJTeK8Rp77einExwPPPmC5XZxedZmfogpPw6tAhwa7aqiqaYp2hcQnsbSAUkacKzdfCCgh8xDW",
  "key16": "6wcVbueono6EdRvh5s6F1RzN2SFaXbwTg7osKDW5dVR8wHpsfMQC6T4FigNGvXumSnMm2mqLh2K1UuRmDg8G13u",
  "key17": "3dd1wDq139yKq2pb1mB5jxX7QRhmpUYrk1y6xAfL6JKt6HATeBxMtxq5uRFJDGbaxfEc5UZc8DtAZLpoqK4bZB2X",
  "key18": "4XxGHJQxo76WxT3TWBYCZ9vfyV69XuDtY8HA2k1MGw3bxFMwBiwkTv8Qaa6m9uWPSC9fRB11hhEe5J1jzF9zzgkF",
  "key19": "56GwVEVHvfik3Pj9UuR3YUjyLAdS9RmazPgnzyJt1MngQg4SHfciyP5FFVvBnzdCCkt63N9EkAQyZxw81q8egjTm",
  "key20": "E4A8zjAcyD8m8Q9eTp3Eru5SxRjwoBh4wAnSMgAMkf283d5qiW86ztmfdNbbvwBWzeYFT1yL3iZgM9eG57CSsC2",
  "key21": "2AExhmAWAbtpJcsP2dic8wbpu9GgzufgBTotQ7kyvgTsgkkXveamTmkJdsHefBfdAX2tG8CrCuBFA7CU3KfQz45D",
  "key22": "2d8Pkn5hrZjtDpiDU6wPxUQ9g5jMBRtTGtsixbaGEpw1R5jv9ViLpp9prNRngPFub1bXoDPZyroJiw5mVmcvwJGa",
  "key23": "gH1267gZaUqLhnebMs5UamJXYms85WiykQ6B9yy1q4gBTCGEqUXLpzrpHucRqM1MefmZ6XqPkvTSG7p4HWykiaT",
  "key24": "rSyvDHP3gDAJoNVjcAfvdoJpmevT6NyZgQ7MuvrnNyNaeZgAfr8Ep8R6cwz6AGHui9sU3R3KMW7NVpTQYy9gH71",
  "key25": "3LxwmTEhir6BZyNxJB7bh3zbt5JpsNUD8t79WG74ufmFu3reh4pevEGp5HxaQYX4UCuu5hVhVPemEd5f2F8KA8Z2",
  "key26": "62SwhnrJxkFLyYpj7NsK3MWJkLm9qwB6DC6fnghhGG5wALa8VuA4PEQgXkrkmEB84PRpXFRjqNiRNmSsZK8yATn3",
  "key27": "36cE3XBDxo2rwnDQakFVQtzoUw9yL2xH6bMHA3vErGLFWZUKQoWKhjHiezNiHPCjMawjUSpBuKvvDkvBdpevMsH4",
  "key28": "yoRmZyTfJXfqSUShtCQkRPrkCg6Kn5oVkeVWwXrsKj2sZFjVmT9eyT7vfxMLEcVSbNTdapTPYuaU72tekQy4gPV",
  "key29": "2u7RJ7JH8ZJ1BuePMnTbAWhzRCm7R6CcJJujUfFGEMtBjcogEYFike5g9Zhq2eThx9HwLFryztnAy9dyKXf7ur7z",
  "key30": "FTAuvbZcjMd2xctE2hQMrXm16Dokx5fVr88hmJD2i5QApwtStyahbcSc4YwdLSz1CvLBtAKtJrwjvyWCGZ1LhGh",
  "key31": "3kES8uqn8rzk6TWoA2T3en44k1u89PB2KZf342GKqjv23nwywNjGeofKxHrEU57jZo9ap2UEj6fkoFKscXZewp33",
  "key32": "3GyYs47tEPcuox1VKZvnBAFumUfAMiqyTtHuhsXqDwDtBWULQjsKnkm1ziP1AkYTuWgipaTVuH3dkmkuoAvHGtU7",
  "key33": "3w1HxGCSfYJLtYZiNFCpamLdP1D6qeGGWmJYi5pq5rXPGnKB6gS6B3hchNKFQU4ozfxYAxaysSVhzMpDgosHhSFG",
  "key34": "2YfgEAb3SrdFXrWcfzcg7CQaXwfLGCcRc2ZCN8GE8EYtcwf6brywxxGwKJMi2TkK1ovZbXYhYjyGjmbpWxdDRhvd",
  "key35": "2WqCrfojzAp5awZPZC8S4rJCcesTeeAaQ3EE2k7nChKypzsRUVxU7XroQTRgnZ1MczU2vfdWt8dRDXePhVWvTKna",
  "key36": "5LsS6xBqZziC3kyS2fA5cJbCHajxsiCXAuxmzHjraRwsifRQ9TdqX7qNRgg5Utogm1XdwVr9HSr9QqmumaBpSvmU",
  "key37": "4y6UCJ2cMohTfqM14aTWwxWuLdwuT8prqot2KgS2H2f5YPZPZfTPf1U5qGsZbNSJv5Cd6Suc2vXkhHvQJRmKCbrd",
  "key38": "2PTkbnTTSpZNNsNigCBiCGbPRQtRX1heW9wP8H1Y7ULKw52LVeoxH6oNQ3T1JukaWqj4weMKezjBvPr1CckkLYRM",
  "key39": "28DSPvAATxYTU3LQcASaDJz8hy7kL1FJqzVCprbsTQ5B9FXxnAHG4tDtgDtdRDN9NyB9NxhXXEz8awSR42SCP9X3",
  "key40": "4KZL7AU8z12NeBquBrL1VDtrHrkzTyCUmrNGLjXhqhwfW4FRGmGar4rmWcJSj3cbmhUep73FQa3d6C93mnTiBvsh",
  "key41": "3dMCZBzHL7MbBrPSGgw5PMEfYYENbzVuomoXkL8CEcTFtGmu3aFBCSX27sGECfyUEf3GPNbkNL4fPRBea5HGRvu4",
  "key42": "28ynHVbrNrNhrWRQ3n6ywbeSw9H7GfbzSYW2UzNPwkmUApD2SnJVDApfkSRgtRUZKgi5BNMC9152L3znddpCxcvB",
  "key43": "2H99RQQdfR5HAy1XwJgFmJRVzrMhHHYP14ofVwkgfPkr5ErDofpmBkpZEFoHenkqm5SPsiAsDdCyqgjUX9qae8Q5",
  "key44": "5e5QH2wfd6KPRU7BGXMmhR5fbNP3YBmYDLj8pLccw9qdLZeY1Ndap2jzmoyPpErLAmNYEJ2MfhP81fa7P1hvKASq",
  "key45": "kve6zAZh4vSs3fLRszJHx8BAYfXbZgMkeJUdKAQeTy5N2StDkuS4PR6h8FQadnkarHDXaGYiMVXfUiF3PkVPcnH",
  "key46": "5Uzi42p6Bi7obSgcFrQfW1FnBHJd5iNZUSVdyQqV59gris267d51Riu2sKFcuwtnS1LEQpmEYP72jH5VxCDfiAWC",
  "key47": "5ArNFm75KoG37YxpgABjpwCx1m2oghNFhHLQ7vAx9qFkDh5xMpnds6uvsMZQheV8iqH5BPKdFK99aqXtcLgBgrwa"
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
