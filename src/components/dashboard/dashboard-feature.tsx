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
    "35pa1XkuThRRToq83TVqwp6AtpwPU2VE3h16u6NU39fmvYHQZsN36CFvETKQyxvJgAisc2CTHhyquoGcG4EQkZdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bY5YEVBbEA9d444CpFYXetz7QRBF64rabxcFkQgJPS4ymRJG9aCgya7HnFLjJfRgzgpyv4TXhr1AnUuxYixR6ps",
  "key1": "34zNjLtuun6JQcJavUmvFRfjwYc9JMJzSKdvL1M2Q9Go5xrGhY7eW9VfANxkM8vyVGm5PhSmMYJRASfmdS8SN79S",
  "key2": "25y59hHNHmFBqYCorRV8MEYaLCNfgxGtcTTbVs9N7h3yWxAwj9qcbwJpdjZ2z5ok2yP6YdvWFMht9zphFAfc8paY",
  "key3": "56DQvaWLu5sxhsjZxy9ye7tK1RbVPopD7DzaAWNJmYHRp7g4jvrmpiMixRZiWyHxn2GpiYLT8U1F9EniqGTRqcm9",
  "key4": "4MZH5eihGq4kAyFWHXp9H1RnAdZbwAE2fMujDcS7GNRpmZfY8DC99vTJmyu1eWCDQpumGdwp7EzZAxesussHUKxc",
  "key5": "4AmWbvNfmgJGNB2TuNQfFF98LLbP5mgjCiFdd83EVqqw8rKQxBspSWm2vhS1zNQVoKiaKd2X6Qo2VzzDWvGhXhmi",
  "key6": "5gPmVVyiAiAya1YCfW5ooXhcjtzTpQpSsq8NvizZJXbqKDCvH6pGR7BZhD2szShWzRjg5dXCD28U1Y7UoTAsZrk3",
  "key7": "283Q8pU2pUxzN1S67w3Hrihn4rPBd8gruBed5SMEGgVT5o2S7PrGzZdC9Nmgo9fYdCrS278jZVETx6PZDzkPb4tg",
  "key8": "2HxtzPY6rpws61xzBngZeeFJNVE75Q6oeWSJ327dKtWc2amT9Wt5FJ8o5cUVWDog7Pwh9SmczcKrNkWdvR8kJzvq",
  "key9": "4Ec6jprG2f7k75PYUWe2ceQogtKxvcUbRUb1hngvQ3jk64kTyNHpjit5BLfCpZNK7uJFi4fppq8LreCNiCQ13Fqv",
  "key10": "bLFyQB8Gz2dmqKnKiKwi31mPcPn3zhufqTkYV8wTB6FT5bVG3BAtcoBKEuDT8oeoKJb1TzCLM2shgubUToFY7Xu",
  "key11": "5Rte4E9H8Uohcx1MAFggEckC3joQrGuWkA8jNbzgWgxU4jAaLQUMpvnSwaTKe73NW2MeH8wewGAc2hLMMt7GUjjh",
  "key12": "3MTPgBaar46oxN38WoWUu1i5T8rVLnxfGccfN9uZrSv35MpwvBkGungi1ZpPEUeLSaZhVuwrmU1MZwHdSJWWzaSU",
  "key13": "5DNz44J61u5KG5GGF5k2aEKHrqu4Jpw4Hi7jrKjEnxjtFxumdMzWygQmWqDSK4SHKFRTsLUHmhn8ifZgeTYVCgz3",
  "key14": "5Cz8CqVeaqhCSzK38uDVUob4ZZbmAUj1vm41MdmcCALjiPypnc44oNZcXdSh7FnLNq6xwsnVJh53hvSw28rzsj3d",
  "key15": "2YM2cAKzpPYBjFMNDkXqGZCau4XWNPVmVYJxTEgYynyFyk4L7eVZ921VpVP4AfxtKrkCcxqM3rHzpYEkWgWySZJP",
  "key16": "5s4jQX93ndCU88aWN5xCckatUnAzSaLetsjd3nTcbzARU5uQKPLshnfqv6eXA9jfnyMqEZn76Jxp8bYoAn6BNV5a",
  "key17": "5B9zHhyc1qjEHD2KziLzj4HTrjtnH1U3V7bhufUgdpRv653fErpzA4ARdfYU65UR7ezqEc76NN3opurRfJqJToHC",
  "key18": "sZGHuj3MxSdtCMLPcJiaXvR3ierriR3rf9ii8Tm1bDTEre7Rxw88TeuooRygY3dK9XRsrR2MmfsnWNV8dYcbMf8",
  "key19": "4j7kSYSUi73Y1X4fa3a5MXa4RoFyxkG77U7iZpEiZf2EPPPrZoUk3UoFArgZVutjsxNkaVsY2tdsS8WPtHCcXizY",
  "key20": "4M2jQnDC6wsUDdp2Sff6a3QKXC2dcw46BbTvDkA2R7WLTf7ZGpnQ5VHHkY8J8C77ZUDdWMjSaTFd5d3gTcMn9i2m",
  "key21": "2MEbxi8DxbCNnGgUrmjNa9m1zFgjn1nBVGpfG3SpgK579pt66dJniYn94FsVzSUwXk28VTpvawEAFLjj2EhEyZ7m",
  "key22": "4VKhhqsgDpAc8Eeb91DzmsnuinxHkr5FyEJfa8iQw4gChHpDAk1MqNqUEzzVYycCWT2HoRztCVRkpedp6bakuVs8",
  "key23": "tTKJxJ8dgXbpxgCZXPhzamKJQJ7D5XfZKPiAyV2cW8zjnhHdMS7GiyANBz7w5uqTazaCHffoUqEeLxuhDqGsC89",
  "key24": "59sMzrzvnH6wcDkYTx3ZSirV5U4ggvRhMKjHVLSLM2dg45cqR45dyC9VinBWdPDGVcnyojGDTQmFZnbCoEp4Mffw",
  "key25": "3UoBjdM7cbgihMiugVGFHSHt5p22xp8TJpF2r1arQ9JcpAQwn4ge5TPzucgJmudSDTyU1JdkEw8AcdyBi6uLoevu",
  "key26": "3mKKuhwhswPxebjF4FuZHCR67s1ixREifiSFfAF4Wck55kTHegLJLREojxJAfPUouv5qbR7V5YWvMduwKr2j9vaS",
  "key27": "35GaGZ9PiDAUq8KSfCT6vpQkRddRc6zfmWgRuKfMLDU6iUJCnVx16cYAWohw5CJqiRmNuu2skgQqACoL8arYoHPn",
  "key28": "5f68LmsA8UgLeq9ZB7z18JUjNFn9pYwtVJ3VttcujJv8NGfmtQVNA1S6wQtNGDzvhuPUMiXzbc266VwEGsXg1u65",
  "key29": "2cgPV2GA6WsTqYgN7M3ShW18dERLnLYgMzakXyGoTNr6X82qSWemmMgL6FpjaQVUnjRYNCaotDJH8ZSC7crrTwMc",
  "key30": "DEykMbwABjLvvSgxEiF5dKxRLsQYRy83aUGVHHpo1j6wrvxZkVLE5j6N98fgtoXfU1MsDaARbzjpmPeysvKMyqW",
  "key31": "416ZFXiviz124kh4QWKhkCYM9kYmyPw1fhe83CwQdvv9iXJFzyMGJdXXxpm2G5mxXA3t9HxXNiMMhRYyzq8KRvqU",
  "key32": "3QWDf6A1X48wCWrpBHNoBXVEbmUarVpudGNTCvZFpJWmGr9NmBAot1WKQvs4sTGyar9ecvqbHZLRtno4xNSMJLkT",
  "key33": "uzRAPND5bQSWWZS7RkpjAEbRm1tC1QPJPfviLJ3LZyijkYCBpQtRCngatY853mSE45rPQPh2d2PqsmzQHdYFeD7",
  "key34": "5mJHJfCs9uGue8yB8aPpRWUNNRZmqtBYJ7NcE5LRq2zbgZRRndzHZTcCwE1AK62DVwqh9MnhWmQrUqxm8cX2CXjE",
  "key35": "26kJsLLZFLt4tggo65SJf8YqcLuhrtXkfessmeUSEuR1Qr7dDde7VajZqQjKaoRwVeowqffAQ3j5Ct7DZJheshme",
  "key36": "4S44aKdJhStJUMvKY5jktZkAHUWrskxtAZsPnkFYBX4Dj92vsahS6rp55QjZFhYi7iKHyihNa4ERvnfxXkfchvnj",
  "key37": "scNc7Mt3St7YPknMDJkahuBXajdCyFd6mtfks6DoSnnZuqogkfE1WpW5GPMpX9vVYeM9CYkAkjQLcxmaQaBGmE8",
  "key38": "35eMuCqvjEpcNhGbM4ckZzr1Q7BwsZhZ6ciMqcaLsGhXaw7DAeKHENjmQPsWx62MZP4HXTdCyyzsiYnC91e2RgWz",
  "key39": "cY73Ltn2XgSwKV4qkvz5LRoAphC4FAD7Vg5VkNnHu6ypdYoYqeLHVYGNChrYXjS71tQ9UL3a6AMd1h9rbX8TCPu",
  "key40": "3Q7LF4g3TVHKEakWAeeRRCe9e5BYTSJMBKJbfQ7hGeLsEA671L5HZVFGZTLSEnczVSC2XTPhfSUT3vwQs9kHMwXd",
  "key41": "3b7AMRNSpFxxWUtBBq3XQXxDX5ebU1kAVZEkwKWcgMpwvwNXYmGjQ4KZgahERCiC5Wcw2Mn58iM9xYp3bh8M1AYn",
  "key42": "32XBacskh7JJhqDnVV52U54AmrbWktRr4Jqjr8oe68Y2K62KHR6Cb6hidtSfkVvusr2Bah4YKrNibvUAxTuPL5rp"
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
