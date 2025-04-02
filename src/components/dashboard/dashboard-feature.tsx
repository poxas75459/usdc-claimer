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
    "4LjjaL3DnLaMKF3EKUuE8nvLqqAZraTSidpuvncESMxDBhRe7ZRGimmPPcTErfGzhxmXiB9W6raaxg3Eb8BhqpM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qDMN5osaANocWm2B6SsuB3kDanx8MrhgnKUxVz5z7B68d5DR9uEHcg2gLjSgitHj5FE7FDzgbpNAK5k1JMEc6Td",
  "key1": "3Q9tUg5jqz5AWUWBwq9Jhcs7civFni1YHXmzjwnbbBpv5NLv1rNsUGyTDALM7XSssesK9SW57iGvrrUiPG3nDjqi",
  "key2": "2dTZXfECzkrraaekUK6W537XeiYK21nNycPpt7jJ7yCUdv1S5SK6G6p4S2Jn4LKyJVE12zzwBaUQJ3CRv8aoSZY1",
  "key3": "xcM4ASByXMWvYiw18yPtacAHmmWUFSdVtmYSUNb4PsB3Fjfrmm7BWxsBTSGt586jCtfefJMSNSFiBcuUhGn6N92",
  "key4": "5iqBMkpThxYTX8iF7h3WyGXv5ZguJ6vPXdRW7HhmdfJQ2xTnrh6AfBHy7LMVK6Pgkx9PvZzriGw6gMmDz8YVE9dh",
  "key5": "2zD6VTXYGwEyGRCznFTF6naTkwFifsvVg1XFtGfdFYEAzvcygPenorDy6UM39U5SDLMzCKH2Ny1jqUq96gTtLr54",
  "key6": "48NQcornmExou5qN2b4Xc5y7uvPvQe6ykM9Nunw4aa31sZ4v7w3tUoevQzFsd1dek2XZzCy9B3dyyEq9JWdUHiUA",
  "key7": "5PmrHuN4ogKkwVMyjDFgvCRqghnRQzjnMUKKQpr1jGqvaxYJbeMUHRXm8CPqM2rMAyqQyPxhVkFKsmecAqkNuy5u",
  "key8": "4j1k7fTnhTbMx6EAj1aoussQdiqpP7reaGXeddbAoLZHi2NGZXnzr8qoNjGGW7Pcju7GFtSSv91Mns4hSAX29dM2",
  "key9": "4pcC8cCkL9UxFo3zg1QWpKwWgVXVRfVueV4htFseNnkYjDnU89BLx74ha1ts3W4t2b1oVCiungwZvK5AGYovMscX",
  "key10": "2tDmHoirVbYJ19otMscNca6meWUYw6NuX6uBPEd2Dmoz7qnn4SMzRZbYuYHiKixEwujw3WRbW4wFyGJxE3tMUXLR",
  "key11": "3TSogSZoWaMFByjvMTbFN8S3bMxWxfkborXxARdQGdVw1a36MJ1AyJpG4F5tqnR4PUETyFVVxJXbwQt5WZASksjS",
  "key12": "3Q5guGaFJQz9YDUn8vjVnUqbTm2kAUCntbbGDeUaCMY3wW671puuokYwFPjXYg356CHmXYLDVR15sTaUZk5Lt1qd",
  "key13": "4uvB7SP6ZK5Rno8ULrMmgB6HGU4zka7ZV2MCPpwcNEKc2WjonZ7SwCkGYaz7nDw8uFpmz1N2suNDc9dqWcoMAHCR",
  "key14": "4a3CLhyMZDssAJmwsjTb2hGEbxbfLmQUzTsWqKwVX93xJiZ671kxtvEtBuk7rCoVEY27QNwuSpmLmARB7N2ZYHEj",
  "key15": "5i8BKjG3f7cTXTXtLPEyKvhggs4EaBTNyPuGX2QcYic6tk3cuv6pkqEEvopteJ2EwnuYicQrjm9RzYtYxdoRTzEk",
  "key16": "2AZ5XTEijo7zpUZfGcaQat16Pka46i3Dt5mppj6ND2r3fyr2MYuNkZ27iLvhmkiMFjK9gH47ngCFUN1yNZv2BbVw",
  "key17": "4tmxYCsXed42dGaH3jqZ4v6K5UF4v7LDs41Y4CqciUDWsjsa587hk2Mdrv15ZijaizLtvBmjvNVmKRMLKTfJNd2q",
  "key18": "42bABBhJ1wCsYF15J9PzM7CvBXhHsA6NT3JNQbNdKgdWgt3gnQui4H9kHibk82bXX2tN8actc7EeSvJK1Cp5NChN",
  "key19": "h5vN7AsCgWv47xDVzEYz3iJJv4BiiijnVmiEGEfSf4KLMMYXkrCzAf8ggMR8ZKPRyZY5XnKn8brGhsbgFwqS8fU",
  "key20": "3yxpRURGBLUYkr1E3z9iJLf3TK3Vdru3AreV5WXNZdwiZJQyxqoYrG7VLRHoYcuTsZ3MvKsiGwKtcYoPHNfx5bSJ",
  "key21": "3HKd7NUH7sM8QXXH1HtdFNmLwyQcy8XhhYfxxB3CdBDRs1Thkn7Z1guNa8XzURHMhTFmZb2c3RME7ccEocGhrzCQ",
  "key22": "PjyVwrj1kKazU25BBXShR3MPPe6CBktsjJCjPc9ZqGKsRkAGdpqbJN3LqMNae9iuxhKuYjedYshPo4crmz77KwB",
  "key23": "66nQ2SfBP5NPzEqdBnoNvChKDGR6ZssT7PT9RcvfmyX4KMCfuSYQdxoKRyean7yCAdqT4HFVhrCJQCJo7RxD3xHq",
  "key24": "2vJX1G1ULWEe43it3MiRYAHuQj62u3CnZbgeaJkpqQKpCK9jyQJKAUCCKE1rghC1tqoJHMERNT1BjeU2ZYUjYwPP",
  "key25": "5qnYeAxuBWZa6T1vWM4LgiWTPLHTPN6b8nH1kuyCRw1pz5SiHDLwEms7MHpCUoAZ7zUnUMrmDjApbRGRrVNtLvuj",
  "key26": "66fHXC2maaHpiGTgjhaco7um5fomfwPhJUvr4o4rLsMdWxH6rr32NG5Du4jEgaxivhEYNBUBaM32ZMk3yRbjUk4F",
  "key27": "3pDk6MNqaPjPzbCZeNfd81TTFpm21hsreJiZwHbN36F2wwNge4zMMheM8xN4LrEqMZ18ZG6oPBFjHUwHQczA6aVb",
  "key28": "igVmNCrTjcappkn4Cwf45RT5tw1m5CTc8owjRtgmYmkjgjkuQedRbYrx6zDtbSiGkDa3rYQo7NBGJExq8FdiWgF",
  "key29": "5zGLhKdtukdG3Bkw4XaKbCkMS2geruUAzf5hMoTjpqTiaTYw2jmyvArffcME6bdu4mXJ9V4WG1NM1ZuEVPxk3SRd",
  "key30": "3FCz1TBwWc8W6roTbAPyD4p6fC2wKBJR3JMjAzXRXk1e1CrkBZTMTWkSXb7DdkGfcw1yvtbtvo92E8pWqPQD4y5U",
  "key31": "5FDcK4aT7miBFDyycHC9Po5z65aCv4QU6nyHyRd7Amjxbx66CTCebRgCVPMA6LocRZRN8sk2evsyovccRPPAz1eS",
  "key32": "5HaDmuXDfohhy1AcHE3tJhMXNaFh35qXyhpp8oqSVJL4EWBvyDE1ycwJC3FzitotSRyvzUZAb96yp6uweR7PmrxA",
  "key33": "3cV5QYCneWq3b5eSe7KCQHoknv1FscHwkaDYuGX1LCnn4VSFp6ET8npKrz4DAjoDv8KA7juGjZjya2BMf6jRdPRK",
  "key34": "4jC5f7cKHQFmmftQKistfHMW4RHoyd8X9jPyTVwRPgiKF1Msa8ytL5DH7Vr9VFVxnCqjK1ZbRtUPwomSGWhYr5UM",
  "key35": "5xQ8JbryHmrdg1oFytjf2f757hhjpJjQs9jU1LNkJ7y6mERwjFw4BzBRD87WDscCr6emgW5tzbgp2ExJdyGxNE5c",
  "key36": "2hZEyKy564avBEr3i727uzRnjbKcCnefuSShtjz7NY7VHSwUEdVwxQNcdEBFJbVTTjppoSZpccHNhYri4tHres7d",
  "key37": "4J6VUjDSosvPHAhLGwd9iaPoAyRdyqDsrMUX1Ur8zM9TrmQ64fysjxXsb4CoLJWNRpHhymQbdkEFJsTd7UxzsqPL",
  "key38": "2fuQbFjh391nm5o5tXAQERGqfxBS79qoFGfgYy1AwASYS8gqVGF4eg2ezzNk7Ve8huh1UHtFSHBhBiQz6DDdwDqb",
  "key39": "5oBURP38xW99itu8pvk3M1wMFodqnKsFJbZWGYycgPkAPA7DzpT1BBhHdF5qQaT49XVp2B7FGVtA1qvenoFukHhY",
  "key40": "64MmVAphhcQ1N43CnKBATnHJZpFRRRR4CCEWgYnUQMB6S9Nirwq3s7drPy9qSbwNih9BdL469AGky1Aw1uKE4oNM",
  "key41": "22dGq8BU5adyq3oAYqfVqp8kbC56YMtZ1tkGGUYpw9JrfF45nxtbYKpXncf9hM4zZksLYQYfNWVoJu3Zkmv1r7Ti",
  "key42": "4QzXPLPSyqfz5Xysk9atTnKn7tQryy9ohd6iTXpdV6uavTxk1jJ5mx6F9qxKhnVgEi7XbpufSEwabdFXxbP41i1Y",
  "key43": "26TahT2hPMm54n5yfNNktAi1gJEZ8TyizaE6Dg4sB1VXRLYuF1gCErbUcJypmTpYqzRi6tf8VpD7ak5k2PPDFEfM",
  "key44": "3gHy23d8yswuR7rQfEZF157ZXTQEsRoBGn8BL3d95uEMFeWWLQmS5DFNNz5ptarM2Y35ngD2AqT6AP8AeVmRMm24",
  "key45": "3qv4E89rRU36JNZTRzvdKGqSYgoReU7gGPRQpsEdQ5ovdSA4TeDr38CTfCnMxQDJHV7oLCbdVd41CxSVUEVDqDnK"
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
