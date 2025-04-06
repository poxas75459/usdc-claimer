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
    "UGt2AV5bqaRJfnP7oY4uJ7JLRfc1QDiNPyVaRaYbsHf21b1cdJSvhyScfnGqE5ME6sJTECRbySwTPq8vPWWsu86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mQK1Pyvqx2QvmG3MHzFZKa3wPYP5mvHf47CSzCsHxvmDmVLsSBavFaatynUbxo5cnno5QwNwrDtrGFJAg6H5qcj",
  "key1": "49PeYv7zcdfjVmR4T2psBf7dTjSRfQj1QofjJhRQkCd779x9JawHKFMGF3ndAMbkCevmG7cyKefKMaF79G3eFtPQ",
  "key2": "5qAG88ZnqkzyY971zwhzWqW5ohc5w7ZVKe7npmB6xso5hFbcfm88GssJk4zudjrCRLMDY1U2rqcvqeuTPYq5Axv",
  "key3": "4hPZdVjSYhnPx6vB6TsQMKQNm9CTvnHw38wsbHZPSquuoTEqEKn6b1QuegiABgFmNppderGDYS4tJu227F3q5HNh",
  "key4": "4ZbAxug4MFFdAncwHcgsbGv1SdxyMZuswfCWXAjHj9eeQpsfDZTLw57SnhMWowcGp2yYThrFSmQU3u7naZR4CfLg",
  "key5": "5Fcsthg77HLbEwLxd3b1d6jG2MdTJtrtoK9h7R6Du7SCLtrCBzFpKLFUnkFGxaqnRP1h2UUaFegKWujG8gGqfLiW",
  "key6": "43QhSeCQeT69FeepyJj6XzxdbSmy9vuHj3S6nCKr3XhKacumD1mXZYZNTW8kRpAjhwc1zH2UUpgyTGRVMeifJ6F5",
  "key7": "2Ycmi1NNEsop51zr4ShKD92eLSTb6qp6XrKbvJ5thZcKYtifoS3wZ5Z9kjptyQshfwP1dgmF8hjhGgyqJbW9xzgv",
  "key8": "5pejNrsHTTGYdCW2yY3RJJj7unmNNkC1TBUTEVfKGmfivek7Tvh7e22uN7zdUYSEYtea3MMauh5mzGKatJVpGyBF",
  "key9": "2mKJvdfr5WomqC6NPPtfJB2UrMSeVu8YAWRg7UKVE8QaLkC4kVJajHb5jK7HRPVexCKWMFBpHMABR1nGr4vMxzSq",
  "key10": "2H8oK2t6zEw4mt4c2LRtc1NF5tCaD2bhD4T3EH8ztyqhcATszGKKdsmwvwua7dvMFinto6V8AvNhqrLZ1w2ibTTB",
  "key11": "5ePCXFryJE1Pg12j6VEcPnUTLiH3hapQb3ykwMYDFX3GY2M6fqqs1BdFGU8PXB33e2317vUJZVTFVcQWFW2dVi5W",
  "key12": "5Q3J52xLscYcpNeJB9JKuG6nodSZs2LRmJwAh8STQ2n3rRhknM5wBe8ABMSjZYxGhzg9WYt7FsAPeNfJF6p7toCx",
  "key13": "zENGL7TsWUXTTjuP3Ao2PWw9QszBfUnuuEJuXyBdAKAijLVWvzfP9fSgHQe6HHi89fm5atbW8vLV6HFFMT5xmAi",
  "key14": "5h5JPwzgYotnPwbzjeFsbm2F7zYJMX2UoZykBFRFicHscb9gNjPKNch4bPBzujtNe9BQDy4MVtocVESUjq9eLp4",
  "key15": "4iWSrAxNjKmSFAqhdJKWYGcJ3bvRK2phG6tbpwWbMV3CvonvBPuLdx6zHnTXfnwD6fy5UpCTRHGtHrHekgYTwkan",
  "key16": "4MovKsM6jzSmHkKCkzWRG4gMRTYzDZaM4bafPiNUkFCidHPG4X9Z3DuRQwhKtKpLKZpXNWiFe3GHQy7SiZRZVryH",
  "key17": "21r1A7dpH5cugjaUkpJbA4y66ELwFtt5BbVy6SDEasdPGK9fL8bmZdjqMM2hrqYMEWXwe6oThgDr4yLmYxUv7AJ6",
  "key18": "uVLAaMDvMn1BQpCoPfDx9Ru4XscVx6DDaPZU7Ggzju2rzgW566mBAs8t9jvuGUphKXizQoWcmV71nHT9i9hJcaV",
  "key19": "aphUWGbHygmYcQSyevDTyNYvnzpiMuq2HepGebc6RurCBoPyFDBWEeFrQdxW6pxY1RvS3pEU6ubbVa15tgBRVJa",
  "key20": "4sZ1hpXfbJ52iXQsZCCUpfzJxSi5rD6QCBtqePukE8Eu9qCrqUq7xR7giaA5wPidzNfpDfhfj3YXoENKEuFJbRGS",
  "key21": "65BSKT2122FqueTHHGKSY1rho81ywcejmwV8eh2G2EDFGWHyyujK1V3T5p4faqzP23yhUFi7FXGr4g942ztrc6UW",
  "key22": "dvuarNF6ZapWCrPfUwG3NyoETP7YZsDGYXkuzifXBYhadRSoeWH1kEZtSaGBK7q2PnQkhiKogD2pmkJAbmfRX7M",
  "key23": "4thR3Vurr9aXpHaXcP8pzoq1rgXKRHfzzPTWwJZdMkPYQUM7TdGFrP5aDEUxBJaR4ju6VRYVZuBsjKiUA5bhkEjj",
  "key24": "2g7NNEZcXL1x5Ay2apR8NV23nCmPSk5p5q8P79kdXcF8BSSFpD4akD5gSnF4uckKjnEJDXMpBztj6uM1ktMgkgSZ",
  "key25": "2WjRtxNFKLLFPqfLcZX5RUCd78VdfumiTqqu5F6gnSirv6zgEyxvstkjU9zgzW3ihk6CMCUHyorx81KTfmfDHkTc",
  "key26": "455hqFv9syuLcCUvph8ZB3jFiQirD6zGiRFuFTWwYbj4LyDUgjDyyzzs9ethyKbRh4yTjZwMySfa5iaJZ47c9eyi",
  "key27": "3QmZFv3JJMWkzD5QHPWzTHQWJsrGd7qsz9k8LU8wBGMKfCV37gsJQ6AAcurVrKxj5buh4H1VztcPjcYA4TqsNgA5",
  "key28": "3ywPGZMUs8n8RNnhw8jcK1zzV4LcQHxnkBXB46qu5y8ihNBKtAQBurraHYZUi7mSUHxua2BTfGNtjmg5XprFvXAx",
  "key29": "15EGQaw4mLwjyKaE4fivwDYV7gkUDR2pNiCXN6Dnmz69GtmK3kYVUTK9XNFyS4o45oiCYZMVH47dVgeFM51xY9i",
  "key30": "wTwT7tuWPvvchZ9SUNEGroezdcqoJBrhQTGFbwfvHJRaFvZBUp45vHBzoo9nHT3NCP5Swr2qCJtWy7sghm2KSTp",
  "key31": "5pcAYcr9RgiRAeFbPaRXXWyepTawHaCm58ePRhBtSMebzFpA6EirthS1ktQktT7XyqZ6Dw4a7gdLYN93oLW5YHBD",
  "key32": "5hKgZK2b1qXKkYDHh54RS9u9RUM1a2TucpfLVc2r3vNnXLS1B9RTUfo6fVNpXsyVf7ydaxTragbTd9FukLAPrTSK",
  "key33": "3i4mmBzosSUCw1gCwiwSDvdFi8DuE3sa7eXQz2x6bE312DDtrVVgZ61hFUWeNFoNjDCCCXXkJjT6qM1JeQCC3tQ",
  "key34": "oiBL3n2zFLsxjQpDFjGNfDkzLgWhnVmsoi2SVxBxuZPfNUAbnjz8KDeztML5KqvJDJmJU8YhVrUDn4PQrqPXHrc",
  "key35": "6bsKpkcpVp6KwzH7W3ep3K4HUZjwn2Nan4QKADsdyb9mfh2Ubh9AVE2rtcuUof3Cs8y3DcuSDSANyjwu2zTEWJH",
  "key36": "2vsXmnL8fPfNgZDFSkwdh9xz1yyVQnhGGvv1YVvHeohXXNjthg72w41wZtFAsqNKDai6ZQv5wBNBXaDo8jZiBKDE",
  "key37": "4ic1uPvWypbGmosXkRbKZwjvccYxeRJ7vNppQWCVy4KscNaMSvtnypuQRbEFaXPNHAUYZNqAJpKTt6yQ42R45EDR",
  "key38": "iM4kNB1cgRAWmyzgFssYaxTJuebtGtxs5wervVx9NYHdUU8pNA5fdZEMXZh27uHVp9SoR2jb5tHJ5qSmbgCeLnh",
  "key39": "2NZD5fgsEjj8vPKhhzrPYYLPc8qcFoNLeY2JnrvLgmq9KFjEVw5mFEBT7LaYsctAhY1vXHAtRXtdbpuxLQXnE9HT",
  "key40": "4s7ozsZNQhzj87BSBewwwEUDdAx1nmpYAfL53ot2mTL5pMjLTJiXz3eRcfz8GUEwkHs572VKtvpbKGtJaPz59qnA",
  "key41": "41hJmZ3XsQhWWCfC2ceNEqg73wLeUs6GKk7DqoWvFWV1L39gvfse5ySw4K17QrhuZL6gNbroV7oaJ3UMtQN1iwa2"
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
