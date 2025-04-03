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
    "3eQDL8ws3m8UdUHSXeAVzgognSxN3BBzz9mwSkTewUFQpxG4oxNYBwzXX2TNUiHDCvedekLzE9Ao9jCneGnranY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w6jbroPcsLtYNeYqZkLjwowrGMrmPaKuRdFhNsghFXFzGBmbfBbjc5LSTNi3jhCJtATFWSvThi1oarGCKF5767Q",
  "key1": "5xZQwW8icJqnMP5U74s9fLbNBWjY4aiSjbnkZFdZxwRoF3KJLEJ9biKTp6uRRC2Dr8ptViNu6AZhrcaCkDB8WwLr",
  "key2": "2BSWeu35XFUXnmeUxZ8Ck9jQRu7ZsSqW13B9XsdHNuL6k2Bj1BDtSvDFbsamiUatqhtczq3Jj3JKHcj3RtniEUFk",
  "key3": "2HLrM29zqqMYk2UmVTRdk7R8wHMumZJSs4QPaQiEAzwfGy6ZYEmEhXHh4pNmmJguDiwi4x3NPmj6ziKsa6YQm7tf",
  "key4": "4t3aaRsDh6ZcjaNtSTwHKtPoT3kR9mYxkMkGrF6SMZ7hXhEMSJtdyFuFc7afncNEK8NrA4DLRH6EpU3yz3cFBeRy",
  "key5": "3de8jdGS22NE5tFDEjjmGvMeSTK68FcE981aKXzpT1t2KqzXgbPetopm4s5MxGFZxFcgVGLmJYcC8bDsCEgrkqZv",
  "key6": "4GuKbSQBzuh9STeCazFTCNLABDwKYo5uVwS7QbXxoBXxaxkd7iXBYGNmAtw4R5HjSGo8Jjf99qFefZUgWUDuwiGr",
  "key7": "3bhVNNcFFxuLsornoN6dFM7oybApQj957Hna9PbLFMMaDW7oD6CPdHmjqD3j2tWpVuWFADgZQNNLYEqzJTjfY24",
  "key8": "5Wz24Pxyp8N2oeCQ8txxMhnU1dUWjmfHW7bqRow1JaUSAQ4oCGZJ9PLnrCCKjeyoLujEJ1oKFnPwKNhLSd6ck8V1",
  "key9": "5iAWTzC5wCBUuKe1ShJK32tPLS8VfM6Ss4FECPq4P1H3yLP5pchFc14EoDuHURtrDMsHGtjRdDmwZdkTHQHPtBCc",
  "key10": "4uQeHLbHq1UEWqaU1m4Heobjocpf5mUezJV4rRBaWVjE597SRqZDbfvoTLjZuFWk3we5Mdco9umHGe1BLmKkn3Ms",
  "key11": "3wVvtjYdansGShkjknvQCw7nfGQts4R2gxYKaxKF5g2neXyyYGsJsDKQS6CkFw8osvP9nCWjbnvpxrETqszoA4D4",
  "key12": "44daN1c1JNyHHWgxa7WH7ZBo65n8gJWLeyqyHbTvrzWm2RxytkX3qUHUxcFA4wa7Kr3oZHUod9KSqSrb5YEdSEuS",
  "key13": "udsvDXNZVSE67wk2N92jyXoFTmhzX5aaYT74B1Hn5PFSFUNQoMwmRK3wfvR7xw6tJeTt85FVNvvDurqcWnvwwSw",
  "key14": "4Hy13j4aHizzwkp1DEDcMu2MxgXMiAok9c5YseHmJrbtaKs1dChwFar5PTrtLamxnmbQ2mp7PgsGF2jz11Pn6KGc",
  "key15": "5YN44L5ZSoQayfYCogejadTq6Vy9gy7SgNn3M3BCPxZdoYwb7rw6c6T6X5p2VHiikwK4aN3icH87sM1c7M94ZRXu",
  "key16": "bEzRgrfHXfJ4JQErSU33q6yndwEpoXUbwuktRzoLZTQ4oNNUcbhJviG2d8gekb447KPNA2zsujKcNdUiWpXod3o",
  "key17": "xP4z44oqqWVPkWToQawGTuDyB1i8TejECE2JiqqEDKoev4A4cjPihy7N8HK8BA3zCxkq7NLp1Pd79cKgpqCFApT",
  "key18": "412MZQkRsbJgBndJPWoe7YYLPJCTw4PLo2Ae5jxasJagCZa8UCCyTJ5TiGB7DY7dK8RYJQphKDJ3URuhY7mS8ZpL",
  "key19": "3aMC4bsdxUWEGGqZdtPd2oaBezFPRQWRPXG8NmC87WochVMFjdwXM5TXbi2S7di6r7brCg5knwW5NQyUtAto7SVt",
  "key20": "3wbQYpj7Pek3iR2gbbo1SgUCM58Hbsup5G59Yfp9UazTEX57Qj786EuosgAf5np6xAnbZU29KtLehm8jawXTeW51",
  "key21": "5N7cgmbNrjWnVnvqcs8iQg2LmAJ2A4qiMaP7iu9k6xtMWNVRhipHSGWmQnvHLBQ844Bet379mBgk5jAihaR9pZ1V",
  "key22": "4q29eYsm6zyTEp8abhSvXQzkcntZJHUyjsEWs9C4YPkYA5PdN4K9fRcWhaf2JFujbmqyaZmycoBC3XAHQiKqnQGP",
  "key23": "5BHBDxmJQHiZWibQBtjFCziifKf47U43RLVP7gCTLgmuDZPQN1WaRnQD2qEdRRif4UfLkvzhmKXL9pfGN3nLuGLy",
  "key24": "67PFqZWhGpM4VnTsb8W1cRdf7W8KEPm59vGMbdxkVT3o58oLGMohaqvEqFn1tV5JB2h3c9P8aZULsuZSwVbcfm3J",
  "key25": "2mRopfL4BieDh5TNPnaHF6HLKjbWu9M7rgFR7XwDc629aTRuEFZnoLAQirj2G2dcaWRNK4LHsWAPLfKSfjBkBvwr",
  "key26": "4PknEo2SCYoDo7HzoKtubYSuZLZjuStL2Tq1NDr4zRTxMJmsWJnLfqY5P376WBxPZzaKFpJFAsdNaogbHN9kCd1K",
  "key27": "5mmGmR5AZRr1b1zomC9ekzLkoRN3Jq11XJqeL3zJb4JtbEDTXcTsYkDrF6NGoY44qk31VJcDG3Kk1XAzYBM7hiQ4",
  "key28": "21YCozQVJUr7MrWefjMXyCmPksFNzFqDMm5syontoH5biKUeNNdbbDTvmdj4Gp8nex8gmwJTbNPFFHaCesLGu6fY",
  "key29": "2adAyWgvmELsg9AymUhXQDfsXFLSV6FxyqP6Bi7y7xr4qtfA1bsHd1P2iQNmKG6zucT8QgL6bmezD9uAADbz5dN",
  "key30": "614yJcoRBpn1Jkb8CEFMWdxJEuWwAQcgAD8fzZ4fFwQ7g9znr5RE9UC6ppMrS869QtJen9x2sfYpGoiCMuAVnizj",
  "key31": "4pgkKz1RYzSj7UehddBQou6NieygFnR121TzNE1ukhNPybjod99Zp8vAYDvS3LEvHuzytsuEgQS2cAgUoT4jPNiR",
  "key32": "3KHBj6mGSMLo4Jpu4xFt7TwEFECjYYWKUtmSuPTeHKwivPF1T3J3bDG3g3yC4dySkT6aKKBqTWfB348FHwF8ELQn",
  "key33": "dBfevBTo1aihK8TtqDbM4vNJ3SGNZyGs2Ht4tn43LAoTe4FjQqashYK9FUEAntKzZZvBeuYk47DXXBWyW647xvF",
  "key34": "2GLBgpKDrnkoK4m4EhktRLsLD2Po6dPBwbPmshURFDTvuMCPg7T257ShqLrc9oiA8Htm8s27W6wprgNjWKTJ1eGA",
  "key35": "2QXYnbaJpY71xJmbWjPoZDD2LccvoaUNcUDAav5nX1mipWAnBRx5jatW94Vy8wS7q4sD7LxPv7GCXM39LSQqSWHd",
  "key36": "5pVnUDKTqzAYEL71TzQ5iwGJsXyqFL224bCUKNBjETh2nd76N5iYDfuR5yJ4SDpks5L8vS7o7Jc1Mnyr6gR9ZeGU",
  "key37": "4AenbjDyZm6moCihjD7ByQRbfz2C4ec4W8RvnFMdwQn4ARkMciazmjvFZypQ5fWWAnaMYkNZbxHSGhXf1SqLikHk",
  "key38": "5g7rVE1vn6tyPRDWHixSxpAHskfVoZZbVfHi3g8Y9Xq6zKVDCKMzsdqWCw23qoNnqzPC6wMvcXak7VKi3qxFshRC",
  "key39": "3sGFnQ2s9DynjXKY8m3Mg1LHtMbzneS5ih6qixwttQEk6p7RzW9SqLPQvwqDupG3cT1Z5F6dWoWtNC9oy5DfMga6",
  "key40": "5dFSfLdxcddJHNvfaQ6bCkGwZedxvJwJXXAC22ysmHYjQrLT2Z9gfiRZEMbmc2n7cbSPgzHRRs8deMzn95XKAnFc",
  "key41": "4XQSmuNYGrY3QkSnyg5CRYzuafsQWBYdxFHrcHVDmVikh3jMYNSHqhfBswGBjHQzhQ6tw7PwSUmXfqgkfMa3oxbV",
  "key42": "3yCMe7jDJCsiBHppvjjJrgEXxkx4U7nb73AihCroUm4Yh6xBBdgVFiffVDfwKA7FGy1tJMFoS6kKWNjC24Z2Vpu3",
  "key43": "n528Asa1SmFb38GkqMH5dCVy9V3oD7CbBfpqNdSPdupX48LQpi6zp5k2uZzFzV1kFb9Jx5T15k3YV6ZzfXweZRt",
  "key44": "24KZ9RckB5ARt9D43KjYrs6kAyrzPRf8Bdj1gEG61kwgB1BiocnP6TgpuEV54WicL3vMrZkgXkFXgceM8ThB9AUY",
  "key45": "4a44oxc4xSoifV14Ku94REj8eR4wU91eNdxrRYMxRAm3VE8Qde2aTuf5qeLc1DL2QrHQZFf7akqJSxQcMLXHmU8x",
  "key46": "4b5HQLQa3GWNPLrGTC2AiLbqXmdb3YWhR9nmjPx5F8SuuJDURmDXn2ZUG8UWiNt9C7wyQ9eJXxiW7gJMVJDfiBfr",
  "key47": "3SgDRCDBB54wZ1s2s3EAq9uYRCuQMQknYHbtEw9ygYem4Jtrud61KhgbdD2bK698i3svibTBQVxcmNMXExN9GgRA",
  "key48": "2sJTzBdXL1TXMH81PDSmRdaAK1opceKRVBoWkv6CLJMhoZBRbhFzdwuD3Ec1zLMXMiFkBn3Q8ABn5KdFR2u7q2Yv",
  "key49": "5ZgN69mRDFZDGsmR2DaSnMjmEYTdxXQ9uTNQaXQmu6X2LLH67kb9B8LbFKPh326ysDnxHJK1TKtT7D7FLhtzXqS6"
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
