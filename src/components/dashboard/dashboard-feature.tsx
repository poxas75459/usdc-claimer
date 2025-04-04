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
    "3oYDHUMRCdo6MFvC8RnH6bFSQ4PvacNrmacYEMLk1fd4LnYsJM26behiaaP1Nm6ww4b7BJxrkJ5eAj19o5CX6BgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M6MWTBmsy3LTHrn9E2Kmvhf16k9rymWcnv3gMXDyDwLjMydxdpoAMTbL82eznXqZCVHKrhZhrQHxt7zZm69GLud",
  "key1": "63XEmwr9Wh884hJdyu6JmfoPkofXvU7eK4N2it5WYigoKhPfkBRdFoBnJmFvL1258jnjz9uVbAJHauhTSToN4GES",
  "key2": "2LkeaBwQg9C1i21pqZP9FeVysmWEg7PXWCBkk1Y6XSGdzBtm4hySMEsNRqE8LotWvYpp5CUYLEhDdeqo4YMUtAGg",
  "key3": "4yFmmcEKaAhHdKwoa8dUFLVZcvBVJGnkH48DgMd1KTfB22kZGKqC2GTtwhYLVqhihXHq1Q6ZzMSxNpeN8PWxXMNi",
  "key4": "3sMYMLUJfmLvSkDgj64gYaQyBptU5DaLdB9rEbCM6zXTtzZqGRWUf7JqyrthcqpXQf4V5yD3cAGEy4UDwPRiYHoi",
  "key5": "K5YSEvud3CE4E73xVSNop43MuZAd3zVrMRXL66vGMqBPzZfvsikb1R7Wjs2CVzyd4dYnLw6oZwR6DPxJxoLPCfy",
  "key6": "3Fh5xuwU5Vpx8dxsqNB5LXRmaR2T2nhPETqCBfBYHethvrDbJSr6G2h5g4NiHKhfwLVvsyZ9Vb3oCwhwoBbHMNCC",
  "key7": "44aYmqJXQzvAyQjRg2e3GLiAKkWM7JjaHmoPoYPpcAzBz4JNA4Yb4dKzvnH93DYLw9VfnDnSZPSv9mVVGpcSfBn5",
  "key8": "5fJETe3RnZmJLfZ44BaZuat91hoFgKEuE1qXZf6HruVXF25A6jEbUntCw1Mi61enVWZiawjs2V5pQsd1eoW1qd5n",
  "key9": "4A4CbF2WvsSo4nP2ipRQxQKhAS3S3bkeBWtjH3V3vmjhrNcxTqa5LaaNUuTi7i7poJhb3AXhdd3ogjGPGqJZUpUN",
  "key10": "5NibPtVz7G3QZverNDHpnCNtg6wkCpbWmoSfBCst2X24WZofVcLdRrMbsbRKZrqnX1EqX6nSy5RDoSkx86GVGf3r",
  "key11": "2TuaNWV6QxyA2xa9WH7xJirXkMG8e4rghCi6KGFQBhVrdhVuQYfyTwy5NTt9LjL6X5486WvwcgjxKDGwb6oky4tt",
  "key12": "4BTwtAaioLvosE9xEkzxV7rRTARwvHam9vdAQwniJ16UouCVjwy4py9tSHyb4hYxA6hX4wt2sfRFNYztdSQwzhvF",
  "key13": "3Azr3YxGt9RQKkDuEs6HQPPdBqjqUtTNMtkjGvhe24gMUqu9vM8dCqWoVApcBUeFDzBeVHbd7BUaSkZ7da17gNH5",
  "key14": "6b49t8UyZpMGJNjzGrNz25t2rCtb9UWLMSmq7dFq28svfmwtFJWgDtaLTnvDQsKd8f4nDGsUiz5duVPD4up83ag",
  "key15": "3LD5ENdgqb6yMfvsaBhxLjEmQGjH1CqGYwqxVdDjDUNTaTz49QqzUmGHrEn8YodsC6kxM9tCkQmHaBek1P7EifoF",
  "key16": "42SHKsPeqChPgERm4oYDoNQKtHy7XphGKPxagtAm7BqZH5NGqTZRXzSj4QBDew6h832U5C9sX3RDo7vkBgap7iMH",
  "key17": "58rqteHXYa5v9BfQhA9VVBjDqBDZ5GxZV7hdNXUtacPpYHvhbhhTZKTUXdKr2j9D4GP2mbL2NDHMQ7AeEpY7ZkGJ",
  "key18": "2Wygj2XA7G2HSStbobp7FZbydDK8Ky6GjN7ySUetbbnBA5LXsefFAfvwcLosqyZpAs4avBDPFUMq6m5Fm9tConPD",
  "key19": "2rZzhHn7aZVtVgE6PoUKVLSPywZhx1Wr7pkA4cZ38fwpUAc8Zzd6W6CNRTZ6HDpfdhuEHj4okkrfDSimovEyhe2L",
  "key20": "spjodqr3r83hyEgdTaACDgw62LkjrkYi3QznB4MaCj5e9vGZJxzGfzvTCmZdMD7jtDb1kUgQgCqzuxyAuEaWjuv",
  "key21": "62JPnd9qQdPVqsxDMTZcLkyfUFzXpgRHgpxY6J6adfMQn5t3xWUUCqwQjeJ5C9eW6wUJC1TZ1eLT4Le1Dr2fctBG",
  "key22": "XKxm59xDTQubqqhAAdWB51mJJiMyXz67jagHBSgd1XxKufn4uXao3oLjyG47g49bznXkF9a8EswcGgSDpjzWqoy",
  "key23": "4idK1SEKJbHdBZD1mfQqsi7NZgVY5u4U3mUJb1ueH97xoyerhbd7AThjjJcKRHPtZisvYSvLjPVJTe12FGgjGqZq",
  "key24": "5V4TjYn9e7S1uB2csEdDSSgtA1uVWsmuGx9tM6K5WYaKfdu55CshMLG7oRcVWceVsGxdGsgz5hsMbnYFhH5KraQn",
  "key25": "37YVpGSrpEhsx1sZACdKkNRHfP9a6uGAnKWighxdW437rPPfWwNz7DDAVzn8eXCxZQYxBpMFw3PPMEayFapoNwUF",
  "key26": "3ATuVu7rZqA1MG8891rWRa447RFnqpH6n9Hr3JhwfJ7rc2e4gbGWdDsfD18sYDTLBEYgGkEky9FpRL8TBrPRY9hp",
  "key27": "3fCq57B9YVK4g5L3sZszBiRwMrKJyTcjBSHrUMuLqcr4J9PzVw1eJTxCdKw16397eZciHF8gmrANVz2xZb5BZPrN",
  "key28": "3hXzgNMFajxhYNBQj6ZV2cmQEW3m4LnFF3yxPcziDKk7znoH4Gsnhntqxsys8ZZobXvaNX8AhGL1xpshzsWuKHEs",
  "key29": "3EpRNk1VGhbsoJcprBcf354p9V175AXwA3Sd4giQrpbTE64n5y7CnQWRs9zxshZ2GJ2hEHm16v5zwfoJWMgsqNmL",
  "key30": "3qR3ZNnVX74B9xLGAdyRbimzYPKPxURqeEDTDti9UU6FjikC7AbPzmUKghAGiH8Zvq1LLSUvDxqCmn35f9fCj9rT",
  "key31": "GnpZGCss8Ly1242DzErEPfe8uN12MbjZPh83PZQCsfSY2YTUC1x8dCTA3b6ujFRxW8ThvNRM4pKJaJd1gTMj2yr",
  "key32": "5vyKYn3aJZeDUHzSmfLWkKj53aEistnecHN2vbbBWxxHLTqsdE6xXsaajfWWALAoUbNowg3k2Z73fUA2zbUrfnZV",
  "key33": "3ba2qsAreVP2mNr3Ks7McUKQg1MydQabaYNPgDv7keLzPsS5R43L3cLEiXTSCw2VrTNTSauuUcpJbdZPLAfsMR3W",
  "key34": "2V2HdNAGkNAWosjpZtyMFkxZajTPA5JVvsbHNbw1JBCXEGn4w6efPyk48VpKc7K3SfkHkCRNTeB8SzMDg3bgPv4v",
  "key35": "7BEjeG6FyeYsdo7LWnqBMmwLgxt9tmFxEf9F2GA9T51n2igSNuC5oBdBKRBtSVX9m26HhAof64tM1mefSfPv9CE",
  "key36": "5GGSYcRME3vaQZDF5MwwVDUkHxCkL4bYMdguCSa9h7QceTnuHATxep7ngJNcZDndFFWcA36QF9hqJxLWpSzW5VRF",
  "key37": "7nt8p8245T5yPtSebQrCFZEn9JS2R982iugEcWbadWmREa1oic2eoqC4V1pzUjcTpzjEnntgmT6d4k8h8DT126Y",
  "key38": "5sP47vJdTCsrigwi4sj7uisQ8aimDaTyvKKV3rpXFV52CG6yvGpiusiJo66dBbLRXaLbA1vpumQZu26A9F8Rf8wW",
  "key39": "2bA9fyNyurpryvAx5X8gqPxZ4Z34PoyKe5ADC1PBxQooVjEqneHWvMamokufHJZ5sujFRCdjepky28M7xpFM1ZVG",
  "key40": "3CtNKpsZdcWw1gi29rYLvvBRM8KwpBzJL7QNucvXJcpewdXwmg5JbF6g24ZeUZUfXZ6PC7KNyRvD826aoaqqou3j",
  "key41": "3MWJ6RB91JWvtfcYRyxUSRkdWFSqHEYyH4ZQzBi6dfnKNpiR99S2yZC21Ha1TyvCdo3rGiuSj6yuBPwU8sAxeK6r",
  "key42": "K2paywUrqJAwuQMY9mGkBoE8THSavnKHfPjGnfUjYJEspDWoHrvTurMuFypRpnaQHiAh8hnhRUZAfd8JhvHd2pS",
  "key43": "5vdEsZLkK7f9KbZ65H4MEmsUEmcCxajPbMatb4FyUxewhAdjkrNUCSZpk45XKhdgC27iyEGDeFysynDquhDDJY81",
  "key44": "5FvTHEVGG4pRmt5hfspspGkenN72PEH1hxPBeYeWyGY1TwPfHZ3vU9npi3ArMKhxG62FMr2CuDBHHZwm3embd3Jk"
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
