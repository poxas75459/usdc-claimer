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
    "3QdLACGLG2Wri3Tbdt9zpgdPNpnZRNQ1JPA8jiztu9YSUFRur5Rh1ekJKzcVRoASkNnoByRNHWESbMoqEehdMxq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VzrzFLcVD3sx6npc1GLHoesBT5DqDrexLbJQ8snbVcwRx9g6Yd1T1yMdQfdNn7vRF64ZsdhJecsCo2mWjg3UeHf",
  "key1": "uqcix26EBJxWpeWwxf7wg7ZEKYwq45gmzSvj6ywVwpGwtvMdUQUBppxL15GUf6eESfEs9N649qAq8A14a7WwgBW",
  "key2": "QgGkBpVqGob27m1SfzFzVAQnw3ewGM4JXhkKfq3zGjKcy7r1RynqtSroM8KiqQjQrrmXMGKQXhtMZZ6KetQc13b",
  "key3": "5Uvuk2V2kL8jYFfXjdenu7ifHTbP5ANX5aADwnrs11XLLm34EpQo4cEAQuakEh4nJtbfQ6LvQCgFZgi6TU6ffzgf",
  "key4": "jbyw4Pc1ufcnni41XydyZ8zceWhNg1Hfw1ECF5MHnGVhEDm1zaHQfpmRRCJ89QC8BYzEf1hSyYV9DeQv8Gh4HQT",
  "key5": "5GmMRFC7QqMu4dfHAReV75Kmj51j7jsGWWrVamzn5HJ3AUPTRPkrDVCwzbpocNaEtVQsQFVEHZPy1DS1phxao7Pj",
  "key6": "2mgDRi9iH4GtfxXcMiFEthmctdUW4ACN3Q7Lo4FfAz6ttyJhXrN17QnygMPLksHSkAh7QHxiyFc7qzKGKgQSjRE8",
  "key7": "4pmmh25PDcAi5FPbRaTRUqrw1xf8Fduxy3pDZhzBULzDML9QqC5h3PRZB5ZRPMYT6nTSJfM4AdFMWCeK4YKejvZg",
  "key8": "2LfrybyyNwHvcZAsRUiZV83RpPMsEgr8rWxPrcqMLGtU1RifpSx6dgTGKGyoxYyFJ4nC72iK8eugkECnrp5UkrJX",
  "key9": "2FAV6iEHhMKivJX1Hx9YDxaKdg1gdUko7Jur3o6p3mLdMQwaCmjf5XAfCDxixUrrBZi1Vg5KgrQs2LecmWKZebfa",
  "key10": "5ckgZuz4fi3A3izu1GxCPJgWSQpMo8ULrt5f1o4wn3FWih79mFckMB8Q3ntpXwX3jPwLKUDkUecrsuAGtPDtmQXL",
  "key11": "4S2K6K3wDxiCZKoX2KRLqpBdSxK2pH9R2q4R1R8mNNgitkwauvHt5E9BDDZ535ohGn8rk5A5x1Ni8ZNiKntmH1U",
  "key12": "5fozepGDT385dfdeuaE8tMRmt63p9PTfaEAwPDb9WEyZ23rojZq7RZDERzPggbAu8dfjkGqaxui7pT87B7QD4U1",
  "key13": "4nyMmYEswGiaP3jfmQThuDapp4eCfmygzZEAQ1pTbFEi65XnqEg8A5uBfLwmiDhFcT8r1G9YUe11rZeiHKasNKjA",
  "key14": "2q7aKf5M8K2EUNEYjBWxJoQduvEAhEwKnFtx7ZGMZdwvuyuZ46FHQ2xtp6eqgTwLTLsriCBryffakFF2qqB3ZueM",
  "key15": "35tPPER1DebRhB9sFqia9NkHZ4MpMtoWtz9SFaQtqERwUYsgkqk75snDYrtzX4mHsyQVACvthpSZMypzX66cq4u8",
  "key16": "4STUbZ4V6qeNqCXcwhWFYjUaFBwLWAmp6G1GYJbijshcGroaDUZbABhUc4PPUbeyeEwuu2QeEwfwzMb7FanAG4nM",
  "key17": "4d9gfG9nFJGHe4KeXs6ZZdq2uUaCNPYPkQQ9P16qgA3fA9GogHNXgFGjeisAybVc6KeepwnxcaFfKVmmfF414Xys",
  "key18": "59ic3XEx3ghFPWHf1fKumLw2KEAJ4QhMuToTz44teeSCUgopHV8gGtMUGpSzW1483uUxtaGDyeoYVoZyhAfkSgcM",
  "key19": "5GxTvWDp8rqoat5PwKqP8dAJ2JCPy6HP1UNoGo86BA59cLtYBJ7rcmQJNy6fvkxtYfANj5g7cF18EUjHPi1qgER2",
  "key20": "5723JLGL9J9foBDrAGZcEgouFvzuqwxpeArEGKwWdA2B8j4TaXwsF4TuHEUSUcvJ2iWxxcZhnajJsNEAqv1uP82W",
  "key21": "254C8mQAB3hkGELMAE9EcvZSioEQSco4Xfjgn33FY3twjmLT3MqMk8XPpuRv7P93M2atMqYFkUkpVnWdBuA9AFWy",
  "key22": "5xnC6mQBnGKpouNBExt5qLc8qZbK8h5wFmaMqnGYMEzsaMaKy3YkMPAdF1JTVsgT5BSbDH3bt8JJ4EfJpiG6UbEg",
  "key23": "KxCV7NhForRvKXoWwA3MGJioEUAWCV6fpETh3G1abBjHheMcmGcRV6GqHx2gyNcovVKN2P9gVJf6n3mzXMDnB9E",
  "key24": "t6GdwcETttwQ9Rvo6zALnksnm7rJLz39KAPgNHjFooFJpW4JdUzPsxjmuRLMpK4XcRBRP23nRzdoavWsLjDPGKD",
  "key25": "4X55B6ZMu3eV39QpcnWwJ9h4qHfmbK55mHx27u1Y9EALqHuBivGxpjUTKkNanqpEUQ1BQytEehKxhDTm5TYGVDup",
  "key26": "2tzatM7fEaQ1aAKNAsnhC81Xnwg21vx1qGsGvUo8d4cbhy8DmtZTpYaqy957MWxULmaVgSV4HCQDHr5KeF868ryE",
  "key27": "52xB97siwPQ8UxxRNo7h9DzLmjAWNJEKzT1reHpnCuHP7XZMxsbQgDLt8zz6a73XziHk73bDZCkqFNFUqa7bL4fK",
  "key28": "2y5oQLnZHz9FVVrs2nZVu97CQ9QX4fRknwk22aLCK8zyz7HSNGUSdnXbzn4JwbcPgav5f1ijnjYKKt9YtGzzt97H",
  "key29": "5KYNd2uiyanmp26hjKZAzVz37cZAHJ32Yw5qQ1Knd6sRxyVGTfT7qnkAi9ymkPd7KB8FKc6KDYcUb65KoZQqcgt",
  "key30": "3aU6Sf9pWKL6CyQrcu2aPdwuTnS3oxorRLcW22YbxGLSC38hJaFEBDRQQm1gKEc8mYEDubPZtCheFZMj3zwNTt4v",
  "key31": "566Tz4YNsU3VyPUmcZDmzC8Anw3LtuercaecbS1Txs6vpHS9GnuzPSSjpQztj2kwivGciTLoeKh4AHWsVohuEhnq",
  "key32": "2iLH2xfRhv4u66BgM53TqdFuMoHgCpMPAUygST3vN8MGGTEAZVEPsAf117VvtUAtkdnGTqS29FJNx9ntsEDmNzKZ",
  "key33": "meqoHhE7kLDGpArudLNZYQLTsiVpdyKk3X3GXb2f1bntaQwxD2PspNMwFWgu8RLjGohTWS67BHbPS1Mvw2YL12h",
  "key34": "5Gg7124XGAPhtyoJsgfWYxGZywn3uYHx2iZvMkhb71mDVw3NFLnAAKM6nZVZucfkYfvgJ6QmQytCZXN2UY7zCmBC",
  "key35": "4sVL82c6zRsHe9QDVimWeWNeVH66C7W1A2cuUaHzygeWcHrMRc8AGh4UTo9cmc7mqY17KMtKgfpewyCnB6AC2g3D",
  "key36": "2YssuZ2b2M69WjS1MSkrgYDSfehpfQK5Zk7eKbiP9igvBHbWnrQ1wrtP9PjCRpKeMcYz59x3ivdkp5vC2SMp18Fg",
  "key37": "xMSshzDX3EoP3UGdEP8nQrXVxQhTLAAo8rnKkxiLknkU9tfWq82go2fnM6somJLeud8jGrqd7sQnatVTnZdDU5W",
  "key38": "NanFds3G1oJcP6eKKrUZKaxbDCLdyBFDcGHwR2NtLrKmmv57r4eiFmz12sA9DCceJemK5A3YKCdvnkKpRmhqans",
  "key39": "J3avkxzZvAVEfbku5FBjsqcCfQbYnxTPmL8k4NLBXiwvLRbMGT1e1xyNxPEVYDyuT2f3r3kf5ugQGzVVvBMBVgT",
  "key40": "4fjMe77X5MsjMXrsXimTgvLLc1dcEnmqLve14c33qVgvLt3zaZKWfWTmvnozTMY2mzLK37RqZ42ruwHBQC1HKJzJ",
  "key41": "2QC3u3qARmzey3Nw8Y6W3b5L9xJZkYAS3VF7CtWzq1DGahhBzWvnUgPcUcJJprWJabQkgCmNvmRv7AnrJXTYXA23",
  "key42": "25BcgWrqC1NHzX42KqZQKV64ysxc5kw6YWQG7ZXd7nbaFkmStjXn8QnTGDEWn1rjosww9asq5aGVomuonvKdgNwv",
  "key43": "5SHrZ6mXB3a1MwMEJ3xAkXHeXDd22dXHgrGkQUTMEqsgQv8TERb3B92AdKDmiN3jSdrs3mr92cougqzFbFhwQNjA",
  "key44": "4bopbDegU42JLGZgnVEr158BkKvwomz4yhejptqwCREwbQDrjT3hLzfZdGfMXujHcHpETXc7ExukbBDKzpzJnyNi",
  "key45": "4ENcfknVYcoy6HQTo4jRWxGTrVfkE2R7UmYczb68JgwE1hRtChj4R829zwSAxhfnoby7s81cnFkfF9523cdnbFNo",
  "key46": "4GttBMrTQfRQ2HrGPcrvbVJPkhcMe3da82SyGJKYn1PXEVKXojhtAt38cncXsddinSw8HysK2MJCyXF1gB7a1rtv",
  "key47": "4RmteGPSUKi9tyPaQB3suWdjp3TsVpKwRrPfcrr1aBdrBb2UY9Tzfqx2dwtR7T3sXkoyX2dp3rrGBXiCZUQUGNdi",
  "key48": "5PhwauLS8ufafLsZjzKCMJZvrtUFb45BRzjDpacCBywFgNn8Kh4jHXCUQyqPknYdMdsVoG68gyo7CPkPYQKnuNGG"
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
