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
    "2ZNPfTbWHSDsuyemuupmzFr7mHAGvMBivehsmceXs3QjoL8D1JX1KJqL5u1MKYBF2bApz4Pook2SzYW9r89CdeP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23dBhuDD3RS7MqU6Vn3ZUxuW1f7H7hrfN9Mc8JSGkXmVbc5ixiFemD2u9idtqxCDNLyRSs7TmhpFmCvfHWq4kzQr",
  "key1": "5XvSyBGm9Q92v3JgbKawcqgpwjSwM6KEKhmFBtUDnBfvUv3DtCXyTXySAdvy4q7VoAHaEY3E1TQCHK32ruviPRni",
  "key2": "3Dpo1FheQSGMVLGQsntgHEPnBQyua3JNNhFFdKvDqHSpD19d4EyCuaggmeJZx9ExUZE8kyNNxDBwz14q97Z4Utko",
  "key3": "3ePmwq1u6DNdqqi5g5Y2RTZdkNFcXDkYBRaj5SowfF17k7qRx3makY9moHusGWoeTSYiQ5TfxMD6PWUAp9RQ96Em",
  "key4": "642c3Pj9iqKtNfCBEYUCGmNSWSeok6XmZP4vcY12fxH94HDe4n9io1DyYpNEenb3FVhiYwcTy1XdeAne7hLpWuYi",
  "key5": "cZTFkft6DAmk3FpuanJc1e5GcfgKMUAsFUvxxMGsv5wRGcTYPuqPe4RFepnaqDUSjzzhb1BkhczhYnhJh82AxEG",
  "key6": "UqZ1UgiYg7EpKyvkxeYi39RvMWV9hZAC9wdBzp6jibKCVuJzEp4bPq8E3MyAPjomAGoWUQdR7KtUchfZJR9XtK2",
  "key7": "39u1EiLqgFV6s1EpU1V4um8KBjSPV24npEU9xS7UC1aBmJv6NJXeiM9n82gVWhc3Yz3krRGDZHbo3oQ4JRwVkryA",
  "key8": "2RYNM3FR5v93WSc1ziLwkNnQhWJQjBNbzpwHwpdjx2KxPEaGgW1YpAULmuBZ97efD4NQUcPfnntiQJ7WLJNGAkML",
  "key9": "5jBRcvk9WzJkKs5Kid5nHjdcnd8mv665PP4R8wcAgM3quoFQ5x675b9kJ6DgW2vQfLsimLpbwSxTNk9KGzah2ghy",
  "key10": "3dBAVchm9vXdsaVDiZTPWCutkckekgKCHsrBEVQKSYcNpSeKqLnRoPrWhoaLPKV96EzEjemLhYGMAyccitkt1N5S",
  "key11": "2EbRDLbqbJ1uPfpSHJpNxEj6sRzTG4VnwhikJF6shJJNSUqYFRhSoCNQqT5qA2PV4dC6YFFkqJxQzzpHBkEKjtpg",
  "key12": "3RnewE2D6LyDavR9BDgHFxxc1gr6j2BDMupUeUsrJk62f7qg2u1AgRriXNpNrEBuKVSzTMuX1ubPMzE4g71sTc4h",
  "key13": "4Mab4DDrBHCeJBMskW7DBBDxjMVL7dpTq3K1a5eHryRMRByMPVvZyV8VJoqHQc8PSnN7xMGjMqd8iLdytv3UnaaF",
  "key14": "4fhDGYBtvrY7sKtz6WNiJGnxGKhPBHMAMJ9QuDQLZZcy1ymfFzU7mBZAUXjpAn3B5akUYiUqgMk9WJg1AKhqifwy",
  "key15": "4DoVRJa14BKDcPrtFKMj2PsX8FQMgdNUhXPRk1t16FxfJJzLNv64d8JVbp3QeYNjEeJCcEQYKQCDRNrge5ryUT5W",
  "key16": "2VhJgaRSgGckHvE6vXXnQ2R7J4sd2CdS4HQnF4dcx7gC75qAPwa37nsK9hJExjVzq5kZv5ehcxXEJLd217rRBiGM",
  "key17": "5r2pzCYXreKdkHbY2ukBdjWWDefms8GhhHzu3bUNS7xUXwiZQ7qhme6nh8ECCWbnDkoAxQP1CkQEm6Srn4ds9Qm9",
  "key18": "4yzmUFj3nKFxTChdxPstbGyTRS4NoZC3CQoMhSYcTWTipZVcDfrbjL7EeMEsmt4QLMbwGzZdvmGyJpqZCeGAZX1j",
  "key19": "zx7rhfwryoD747EgSo3f472nWfzHSrUVd4zUeyqwiUGJnWFfKbfoRTBrEVtFtZucj5KDXDb6FULmBoD9Gw48CWt",
  "key20": "2d24qfyQMowckriEyTVtCY6314mEuDPMgp17dys7oji1VNmEaVsLQhzTnK8mT7NGyZZpJSYT8fQxnpRqkfaHgniD",
  "key21": "67UJzFYyWcVgZQpTHeiVuKEbDHq3k6J45WbUwJt3ankw72G68sHAupCZVoV7B7Cb5XvJ3oRqibk39582BUia8ZKC",
  "key22": "3PBqEWP5N7Mfn4Xs69kZqZwVUXetv683tsx2z4t74unoiV5e8eYNNHSvnWPvLWR4V4BD799S9nWwykr9ass2N3AK",
  "key23": "3ee96UQL2bCLfz1CE4XTTroEbJh8D7czcKfp2rUTmvTpYfRejx5D9yzobJbC6vSWw6WZvxkmtooVWRqCMY1Tu7XR",
  "key24": "NfkVPZwmFFjZcExRjbTnBCce66nF7vv67Wq8NxsV1QqF4Pur3Bgsr85Bz54MHNJxoogg4rRQ4yLdUX2QDzTHTDu",
  "key25": "23QBzYhzfitbAFbdC3XXUxePLdhf3GDGQESGdysnUtvb2uSai2eNoJxE9bFqVPjNgiecJMJoHWJbLJPQT5tvnLyL",
  "key26": "5zeRozrt1GyB9mADtA3KFDrL9groE5wDMUSN71YkKBY6AFzTPWsaVrdBiFNm3d41GxU8GRgf2Un1hS19KwAxseDV",
  "key27": "5pEg2YoTMC8oF9FmmiWwsX58GS9zU9tXxcoWeW5ACFZqHwGs3s2g5F16CEkv7HiPJevRrNPsujoXYL3UrnxSR1j4",
  "key28": "4bXTquyZvkUtE5XSh1DjzZTTWSg2NDyS5Mj2dZeGo5c2mPcg2YLQsMmPKQcULrePVpkdGDK3DJLJAprfejaoZBF",
  "key29": "2o8rqYYWUKvRkDZmHbchGTJ4LFo2ZKdf1QP3Gz5Re4xdnsCENu9QLALY9WQWZHob4SxEBv5MrJWUQ516cHr3RLNw",
  "key30": "2qeQG5PepRSz3R1HJehUdsPPoB9kLfgvFPo1CZ7tHuWK3Bw6T9o2HMf5jsDHALnyXbJbvSwP9PfNYmxnqWrnra1j",
  "key31": "4CyMpcdXGfjTbyHrrU94aqQraVknJVosh9VrecNXPC98Bmpz1GBzyDVFoUHHWKhfLnWiR9rBCug6hb2MjQif7w5o",
  "key32": "uJhkZxg7C8DitPQYMQqmGEgwRqPPsdMayxDFSz1PYQutUCMm71mSJsfd9TqEpzjmttWQHfrSVsvAUuYnGmUpRiS",
  "key33": "4Mk37ToGRySLXXVTUh949dzU729SEANPxFxmjEvfLpKWN1CJPPnhM4ps5Q5hCvgyuWJur7USHC9wU66fmA1GwBQR",
  "key34": "4uCU6Qja1KqHgQnT634j5RuDVpXEera2en9L6B73tC7j5Zxd9NJYXNBkokRdG3f3uBgjDZT1aduvqWuDgHRGQvHC",
  "key35": "3db4Juy9gTpxtN3cauWkmEHzpDRV2HNxfFziS4ZBd1oZV8ZYWjT1w2oycXmKD3y62L8eWbm8McA3em6RLn5sf7BU",
  "key36": "2P7CVGUxJXPZ72fwfyCECPBxzbzNMNp8Vp8isdE3UXhgKbD66fnK7o2oQMVruE9Q3dy2JMeyX2JjPkAqKgB3ogxD",
  "key37": "3q8tyyUFGMzT6LiNv17tNnRop8s8PoXjt1jXvgd9D7wUeADzm4SLPKyshZcWEmFVHGHwWioqUsCatWVtNdEgHswX",
  "key38": "5EptgDi2yuPg1o7NaTv1HNr1gGbJL6jLJurZa6oy5TF28BmvSGkHXkaYNJnf4VUymGY1KYc2DRgxkHfsvdZ1Lafn"
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
