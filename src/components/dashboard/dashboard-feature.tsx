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
    "4WMB1gEoC58tmywzo196ko8JS8aF4iM7MwFUk8Df3c9ENJeCR8jQyrJXahZVEcvFLdCUbDryg6sxwUVa8aoUtney"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35bczq9CHUirq2gT2JKYyXjK1udep3LSdZA3bvCA6nBNzEo6hjwmcSvPLa3EQKtjBJ5YYJQwBwPuss545SwbNTvG",
  "key1": "3PQZ9Wy1XV9jZhCgAFXHFA9FBAnvNCBQuFh9a7V6NNKZzYeBR3rTbC8p1iyiUd4nwTtcnBifc7Nux3TJ7JgJB21V",
  "key2": "4yfVxWUeMsZWnK56jq8YPYXU6sZirZmZprqxaHmui8p9y48g7dH9kYNwh1JuRZ5zVYCxuTYioGoR7uaTJB2RR5vz",
  "key3": "4iirUyWybvyPVF2QNs2kFqmHBJ9ZnMSnpuxKMtBm8kNuUkoKHDunQ5K3sevGGpC8rLpLdApiQ3chuZmpbNsqXSpu",
  "key4": "5KrZxw4TNThB8YYEf9PSKrk9hrYzXEc5FXjQfdqtZ5QRZXRbgZWXoS7Cf6D4enzsWTfEaDivcvTT6M66x1Z36Jmz",
  "key5": "rCH6fDkRz9fzhfj2xSiytsRdBqtcKpeVyuZgqqBwQveNeRDkGFMFnrV9DCvz5grYq8DAD227yE7o9iv7w1ngvyX",
  "key6": "5QBjsiMNQcuHJHAuFkFBPQQjoEYs3yuu25USS6rzSKMriomwnEs74urt58f2eKThLQTGaiEDVy1XozokFmZ8ZGFE",
  "key7": "3zFCxh1qJeXQ9Rpaw1rhQ1vB6ShHz1kFcwUdjeNaZxi4SYfJPcP5tWceJDNPG21AyW1gPd7X4VH9TvEJi1TR2mHn",
  "key8": "R8bxUrZJpcei48idiEXKHm8FEaHKT4cpcNS5zfojUt4Pbk8uWYEmfV2cQbocCd6ozGCZ6SGshTCFRCcMfVFLdmm",
  "key9": "3SsiPTVUe2N1U8wa61EDZTBKrMAATZ5XtgfaBCJ3GUAt1nGFuw5AFHUeg8XRoWBotai3TV3FMXsX76DeJzmiVjQa",
  "key10": "5DWsk9LrAKGwFzRsZ7Sf9CQ3jBnnxyfxMsuyZTuZz2e4hh51CkJegZVF6oA2wgYjWGS9njE6jz3toHyzCSbTSxdE",
  "key11": "54WkZWLyAqTB9A6aW2WFQiw563BQrUhvtDFERZ1T7mYDFUX7EbfNAronP48ThC7vN5ARxd91siqjLVcm9TYkHmQs",
  "key12": "4Zp8LMUPCd1TWGbF5RsG9LZUL5kvp7WpuPXyFEs8DPouKTTGDTtdB47u7PHxtE5EYQP62hquzLMG1JBYxvA6cVv7",
  "key13": "5QNaZR3rbBTWyaY2VMPpAmmizwoZRe6pN9CMzP1M1JKNG3ZtvhpdDL5ydT9kfiShNApbmL4X7oG2BJtWdVta6B5D",
  "key14": "3FjWkFAR7JE8QATYAyHhz7wNVVeTiMJRLPWGuvwU9baB7qfhJca5GSVx4HhK6Bhe8E1WwajqRFpUiNz31JRoNADZ",
  "key15": "5qSyryi7HNmmrLNMTLR9Egqy8V9nYvHDyywmSnJkjByG1sZXKsbbP7ceyVyjt1MuSA1saUrBsX5bf7dX6WTRNvbi",
  "key16": "4d6NAjqyFZGQeeHTjubSKScHaUx3DvDKWT1EiCQkX525kwf3dUyQBbi6Jom12YUyJXmckmRv9sAqpeAtaWkjVDDE",
  "key17": "2WBxAsorYVoN4iDyqaLt4YJznZ38y7CTfsFuTMRzZn9gn43Fx49q4Xaqn5J3Pc9ZsFNhtgJMYMmQFzZet4jBNJ1u",
  "key18": "r7wwgqz3PsdRkQzScndyZLdo3Mn1KMikoEkCFTx7oQjhfXL6XBHfNu8JjXwPHDJsbetp4FPdR7APUsMnjAZ6not",
  "key19": "5EtJJKKLQSBY5HB7XJj1wN72nuQuRR7mnrtWZvpfD1LpcNzQrokGbxebKkhQppf5aXb8rdaP33xDbASudUaEeE1Y",
  "key20": "ee1F3ZbJ1eBNCkPaNWG8wNR8swUtrZbsynmH31PKXzH5eyu6SusVrzX4VngPdBCr3MoUCE6RJJP78RwewkPuV3Q",
  "key21": "2xbAFK2tiWxh4FE56CcMHgq7to5rVKCbL5KxPe6VArbJ27QL9YW6FTFMoVNgCGCxxhPzAPtUpeptXgqQsLjA61VP",
  "key22": "3UhzSDc5z7k5tSiCqC1f3rN5tJ3RRYFPDRPJeUpBTBxBE5QcAskDdPM7aKyf2Hne8YDuxHGoWZB48YDFSdZY4nvy",
  "key23": "5jnnZWEDYDw6tGWJaKqNHWZw2SBXxqak7x1C5C1kMYgTzFs5pL68A8fPPv7bFVQeXe5r972R3UcCqMTS6xa5v9Bo",
  "key24": "2MDNGqxekQS9RnPnEie78AiP4YrRvubBUm4GUVJuqv57ifLVuyEhKcJ8eY68Vs8p5h2jbtxjHmMEe5jM3n3DmGBZ",
  "key25": "2qs7mUjeqYs36eRd4TBNZeLKML93xF3QDWAotej9SpxCT3Ur7WpkjkHqb6mRboYXnmfBY77jvuyaTLcQvmCZriB",
  "key26": "4mQCLYC8KDKHmYFDSfn48LQVXtNqYQdmy7oQhxFMhTCBiPbnzsppZ3XVvyoqNhaRsYTQiknTnWL5fS3JJEALSG2n",
  "key27": "57ahYCW6ujCzcdGSAKUkF4zkPtpTyq8v65xUbKZd1rx9gTMpAMeXYa7y8e5NhVZ8dWK8Hh9JmbEtWEBrF6jDgG8A",
  "key28": "2V8vNvRYeHStoz8XSq3pJzqz3TjFgYfsu1rh5TRiUMF7jALgXy2sjq2d1sjQQzSVnHXbKhN1iYTVLsCtwk2PEg2d",
  "key29": "5XQHcwyVZYEXyWCEEHUKaggBsHoozr4ouLzSAoMjCqcJgRcL7xAZxcyydZZ6rzTmxon2HBBwg1XWPT1FHwnHAuGd",
  "key30": "4wG9A3f3tPSNssL3nTK7x8zGBd6QSDAkPrydFLH1TQiVnVPyo2spQwjrRCjQfuBswZ5j8wwEGQzPhN1NWzzcEotF",
  "key31": "3oCYZZPiFmssPCwJGkjBGGKXJTDiNDsjFMqsBQ4m9swF5W9B9cKPJGFJDY88zyCKPgCeySkPQcbbrHxfiS5Yn9MC",
  "key32": "yDWUKAojSqBvPJEt6sXbfdKChs2VZqsJBFaHTBD8qxZ2kDxT5WCEF2qJL9VWP1Uo2rSCcxe5YE1Q5Tg1v1YTXCG",
  "key33": "2fKh6dMR9gwJBj79QYw6MNbuQBW1Lh4KYbhiHks4XcB2L1ZWuVmz9Bt6dUca8G7Xw697rudyY6htyTFfX5wz3Vcv",
  "key34": "2mexEYgs5h9qnoyrSCSEpHhgfP5BPyHu4pVEVJ2KcdDVPCREyT1e7mz2ZsdKtqgU2Ay8WWVzktWswDcNsR6GyrnK",
  "key35": "5RYpk6vjGcJDt1kEehkp1d4SfXhuUT62HkfcBxyfR4MAVWLu6ehp19dGqCXWjQ948WVhLWXwzS2uwaeMFFTZKXxj",
  "key36": "2zZhPZ3Ugzmm4BL4VWfiNTC6c5pRo1vyozZ7BMtAccnNaCdcomE2QYCqGnPiaEseC9Vvz9oQq9LpEzFux1pUYByT",
  "key37": "2pGgLkfvEpM5VUqNtuFJ2W8WigYxNJ3aHypKBKNQWSGkXkf8jJppch74h4S3vVBQACJiHUzhzP8jjLjbMbsgZegW",
  "key38": "4MNS2szRsYFhdTbjM6uS8m1n5XSKJ28UALi66nobRCsNY5kv1LpPWo6HbsEGrqxnVcTmqczpv2KhvzNwUDbPkUS3",
  "key39": "2rf8jxhZ2oVP5ips68T3A3GiiBEteAmT7QN77ys12RHte97CkzioXd7iifMv6qRHPhj7QHJ2HR8Gw2StUStuP9kS",
  "key40": "4Mp9dyPJQP7js6bdRmM7X49qtkveod5ctzdsUvJG4aPxd6At75cnhJXGMNMcfCKsmJobgtPJ7h2ZUdoUpn8nd6mp",
  "key41": "25r8tHBYZaezN4fgxhgVNQ9rJhqDMYCXg9yxkuuEZBFzvu33qnwwc9m9KtRvUuxnXo2zzLZRpaJxZvB5Wwn2FetH",
  "key42": "h94gAkVAp2LGQcmqvSmp4g8EXukUmfueFYqhkutEWAe8YpTCHnsR33UNNNTzTMEny7coJkMh8Pii3ZviwJGGgGS",
  "key43": "5y2293ajrSDeVV2XHtatgVevuhDWJKFSwzbW17TwbSrSYHKnobp6LwF2T6SkwGZkUJCXQk1GctX5gQ7PZDyJsizR",
  "key44": "3K3JpRAL6km1a2rFkCyBWj9DznDxWYW9qGnukEAx4vmWBfoDY4Zs25Hyb7ruw1LvyzGwvBxxz8vnZp6Tq5bzvr7h"
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
