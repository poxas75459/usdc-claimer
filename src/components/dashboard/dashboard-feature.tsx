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
    "2TSQnqV9eDsavLwE6vUTmgXQELhkiyZASKz1ixwN4paqU3cjphGcUyszGeoAssyUFgSW1gqKotH6tG54z8zdYxBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dcM1fT9FKRjxJ2XSN45MGJXrkCcFA2qDUFNtUKkYvSwZv25GQdE3M8HB2sq8wFhbiCsducLsrprZ5ruXxfJuhmU",
  "key1": "64btvMTBjQa9jzcUEF9caug6XrE6UrxhzUdWiKLWFTjruQ3vKVvp5s97G2LEGf7bG4HoTqT3syWWkkCJF9AyVzh1",
  "key2": "2YdWKxQHcTP5q9TQVU9C1yHacKBVzjAE4G752sdt1NkmhwiTQPi7PdjPXqFwRPFx6qnJeTmpRW2wpdvNy1QqoNGw",
  "key3": "2QXrg4oPdzR9o5GaRJAujdcAcLEAKkM4KGoxxGvk5aqUsCkZFuTcekrg6YtZA6J23BWbL9V6E5ATXBdkCZZnsk78",
  "key4": "5ybsHxqVVApP21gVsi7UmfxCr4qHkPRUD1An4XzW7KWEp3F6rPfwEFzamK89Tumf9k1AqYE5uqEAAf3xqgbGfXVM",
  "key5": "4kRUK27mrHMhBW83Xd8FxtndMJnqjNXAzw1Km8JmZdSEu78oPmzor13Rr5nSLbnUYj8GwqBuZr9SJpr2eLQeRTdt",
  "key6": "2PARMLfnAUQYoyKeHayE7b8ivwDL1KyA5Rzv8M6GpoGDbsXEPDrvGPFV5nEHD18ZB4KZAVooWgLqvfGDMq4GAVUf",
  "key7": "2Xibxb5HRKGyD7k22RSn5FowdV7YvtCXc8bnce66oDXm41zwr2wjgATXpg52L4kkHQwNxMPu5fsgRZCG1kk4vVae",
  "key8": "4LTXmiTvGmEwZ8o8sEyfe6KPEPkYnCvs3er56ZgticFHXJWC4B7qnBAtQ9HaCyxRYCSQPu9ripKBLRfKJfZHYATc",
  "key9": "2D8AxyuYAvqwTeVZVBK2HDcoAiD4fRnJmGqgqMMdMGRsX5iFz6nh8RRJs1Gn4ezU17w4qsnpQtpyqYSjaZqs7aL2",
  "key10": "5cREWkshGTMvGnSthCk85BGKG4EobS5gr4LHkbnLR8cHUyvn7pcN43TW6RkkMUx9kjF1aPFaYmcnTsUgfJ6kJdJ1",
  "key11": "2ECshP6VFi3zHk7pMdHyiRGhuy2WoG1XVdbzFzkY8xD5hQScYoqYQoG7EFrqLGM4TcTzKfn8jEmUwFYawvPx1A3b",
  "key12": "5zjFrUmCEKCvCa7Z1BZnzknsG1PDutKpRzBj4j3b2mmvthA7TrYznitXJKv1URZm6ZphQedf6zQAn2bE3NXxjxZe",
  "key13": "5TVt5E7bP4WCsg5b5k13mKcPeQQW9NjMcqcZvTzZF11HoxrUTFL2svqk5RX8JqduSzS3U49FhbXwXY74stsZdVDs",
  "key14": "3C5ErLpUpJeVcHzCMnhrPXzAfKHFnWTinNgfrDjKKWfSJusKZbByvnCz8hsv7JZXgWxAx3W3msttTyGLuop2LVov",
  "key15": "4AsEMBuqGJqhKpRrhLTPmnxQtNxG7ZbkbYsqqDfPxtcX8LSRQqX7pVhEcBoQ8UJUSbZh4WKTiDorBjZDKz1Dqouk",
  "key16": "4HYXdSWeLoXRkcA5DwpjWozKUwFgovgjuwMm8rbUdw59QMM618AmQAJ2WFmo5Lpg3RxigWp1BCw31L8jhKFyCGxg",
  "key17": "JD7pWRMqnBZ489Y9SiLT6Se9k1cA4gd8x9PGeRcRErHAyY54PmpQoptjCA4AmWmsdEayECLpc17kLJPKedkeqcr",
  "key18": "5YYPBN2zC7GHegxRXFiWkCSbNyTo9jQx5Kdfn9eJ6DkAXM2XcppptvvmagU59NwzvvKDjsffmpEgA9zjDC6BJXH3",
  "key19": "2pefwtSZHS2PEDF1HGtV1yAmMv8qwBnTjpEdn12rta4E8XGBALYcAAzVnxYoksJiJGsxLsfEG4fedxAmJY2ZVG8",
  "key20": "4oDxgd6LSAZEbFX8PvZkjRvLZFcPNKnFmerhT8rTNtsUyqA8U8fGQPJsa3XwPsyL8bM3h1pYMWuV1m23Z9M8tkkF",
  "key21": "3oerm5FLxdkdq21DDEXt7HNL3QPWFyq87xCPSegPxoyb3TnQE5riASKFGiB8vv9aJcBTg1yUGiaw3E4WKLFPedsE",
  "key22": "JuH5JwKcacEHtnEkqYybwadGm1EjsYP67gjHK5upk76jNAZ6ZLYhkrZrfah62EAyZsgrtz5B6pY2kUpxXByD2ej",
  "key23": "5t4qhMGpEqHM8yY5pKn3vtU1PM9qyxkCF9FjFbEfBR1GYwbGeeHZLDNxa9hvb3h2nu92GUBEFMEhD4PZqAXjuTcP",
  "key24": "sRyiqGSgSCL12914fuRBPRcPnL99tCPvwYhXEU8xoT4ZvmPXCqR2iBv3qV5HrctfYVZst5SNbwY1ov3SHoii4Zn",
  "key25": "4NLhMhu6o516Fw35bZb6hzbG7zdKMqDvsbquEfzUbbtQ8HEbF1aghxMGqpWY9b67sYYgnEpN9zqsS5n2Q5rkEgfM",
  "key26": "TCe5VWfN98ux4RGNCwgHifknR3DSC9C9drckMmdxQg5KRhVxWD3tgmJBDf6oKyQEzBLWFYZsRvcur4X1ed9VGVj",
  "key27": "5W3LpxM6PqQJbc9etJ36eds3AzNisHBRCBrNuoR2FFCMbzZwJ1Y4r7vPeJLnypQgDbjUXzWphNfmW3KRykSkt7d2",
  "key28": "4LDVZg2CJ4ftQ9QV6ueHtmEysdN3vVQ5ma17o1hGUAw4BnxFSmANQ91Efpd2JjQecxK4v48YFtnZb26mvEHHBug6",
  "key29": "5ZCc2CrSBXuK7PS32GMZtz6WUnKQmZhBXt1sgLonyjNAJEEZSjeYWNt1GEXWs2ddn4ngJnhVvR8LYCasvL4EK11k",
  "key30": "5bFKbbdgYY4R7vYimGSJDeY3DD9hNYrNixvmKwGGjMpaobJukSFHKgCjF1ukQ7qEKNUmXxshSQRY7yfQfsXijqsJ",
  "key31": "1M1xraUmwJjZTeid9xCUAP4zvKoD6tAr2gA9mwErJeY5ZvzGKBNPc4CZbrDSwhhJxNGehDSMkoTMmR3dzqEM86b",
  "key32": "2XhASBYPoc8CjF6z5RRPiLgF6q52c6or6Tv9VZGiy4ZQtLuA3dbtYW1cfxCNPcJC4EyL2S5FCjsXkqNjHe6ogVTY",
  "key33": "5Q8wX1a4U5AiyRSvU7cELA9sZFgR8VfD7o2C69kxPbC7rSTfBQhPcgbzEkoFeei6gE7C43XwKtAdJG43YLmxqdiA",
  "key34": "3aiNuxCG7zaaaYoEd1Rkrp1ZqSrmdh1xPrfuNGsJgRZQaR56NVM1CVHiwE1pUpjTHB8GC1497mghpCC5EXiwKHq5",
  "key35": "5Sg54etKRwXvifocSMEJXNrUU1SwU8A3ewd8j9drWAWTXfi2tqMTnyCpxb1FfTXXTNCbEEYLiLECzFWPxFHgqyXi",
  "key36": "4aA3n4Juh2VZFbJb6vcxd3FsnRbKvf51vurND7eKcBuhKiZS6HEM9V2KXwH5nE6o7arc6429UDDErEvuco6coC1B",
  "key37": "4PfHyLv7yDTZFvwtnbzRiaiZn5V27hawPCsHi6yUHPqpeNXA2E2qKwVRWxJsLtz8Ut7Muyb5ffkc2r8kVEa3wPrh",
  "key38": "vJpSqHLshokdTnSBxFqeCRFhFT4Ud16RWmzNXMAUnNgvcjkaJRCneftcbG1Peh1V9ABgNfSkDbhjYr4DhVhHyKm"
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
