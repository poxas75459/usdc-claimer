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
    "2zqfNnq8maGy4xiYfrwQHyWbyP1mkwbk3LbPwpiaJSmHHiuqFRVazMu6w1kL4xswhraFXT9QCP4RzuZBFfonpqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MDbFDLbkLhMEkbBVbXDcBAsfEMi9wnYZ6pwELWZqeUCPxwgEQu8z5GFnqm3Mm6fMwHVPJc8LDBUjfaXo5gcoeTW",
  "key1": "3dmVapT565zLDVHjoajELcdKmNne7F8f1S7M3LzcQgZFwvwsUcV6j5xdKiwXr3CA24aMs8R3qfaU6TSHxa8B9d6r",
  "key2": "5GxkBAUj93XTZ8BeVz7W7xr9Px1qkwzRQ1AmQGNqpHc71djS4KGcseXix52sruBL2knCsGm3TSfHgZtXU24rb7b8",
  "key3": "3h458Ur6yHCY1EXfR8XiYRfkR2WSthq5K3F4kkgsGbakqmTP8ZjvLNj2B8ZjnschLsLeACQfdJ3e25yAevY5LHmJ",
  "key4": "2Nv8JTZcuE7rhLEzSd5gC2V5ivNNccbfmapM8tP79cbKhsgGcXWMCVYUUjibBSqQpYpmPEyFZumPmffH1YtmF9mT",
  "key5": "26AVabP4h8eKw2LL836oGDWFnp9ANHpkhY4n91YfybCMRMdodPzssXwcsRyLsi3cCbZHn7fWDntnmMuPTFayjt4n",
  "key6": "5G5pSHr5adbP52M7JnrXWSz9Mh9LKjAKx6QQAkxJ2iqJXdTc5MMswsw1C3zUYDCiHE9xDnkUkaCmB4NojPuEZmWs",
  "key7": "3dy2oScdi15h8Qm4dGpx3JYdvADJfotrybWTfoMC8RoWhbG6yn7zfFVjAZ3XSwCqkE8vW3tJrRvZjFncvEsvCBS8",
  "key8": "pt1odUXt9j2KkevcjHY6M4p5bea3zRDXQF4wMJ61XMhjgH46rY7z5PxcZGe2ykS9uaeWXFi3XeEKUqFxryFVRG6",
  "key9": "64D1ev2iTUH9nEHZscpBqxW4XafN9KSc2T7gzJSmFPeEY6MrVww53Qb1ehjKwyC12Mg3zoLPy1LtnWRP7THs2d1U",
  "key10": "PaAAWioKSqgQHvjPxTQusc8iyt5CZYUQcK96frpbozLGtKbwG8MdYK77HzXNzscFQ3ZgyHCADnaNMZYUNiic7Ea",
  "key11": "bNWFGquuU3yroeKihZnTrCMXsSQevSaVfyJ74J87pGjpHDZuj9q51ffWerL7rsMPELhyFD9tF5U8DwN5LCPcLmY",
  "key12": "3e9k59BYxvsAAae2pQUHDo5cG9qTLCHjNdYtSPSEmFe125xCCDzzrHtAr8kUUyPPoE2ta4EDZcUfnH5U8HH9z2D2",
  "key13": "3K7hYTWLZVZ6GYDLxMX7wMZKsj8BDUKw6dPmQRi3DC8K6moZLVmqdGypbX1rd5webt7TXbK8MasDPR4buMMV16FE",
  "key14": "4hCEYXnX8vcFVvDTQpeznYBTVDcwqLSZTkFqdz13Y9SgRYF2HYCS7STAit6BKP52wPcBMr18QaLGBD9bizjVtKuP",
  "key15": "7xYW8T95RVmTqTYfMgG148jbizLnNWCZPWQTDvSvQJr5mzEzTj9B6UCqEgnpw1C1NSuyEfezi6WKkwU4wVz8v4n",
  "key16": "5Jo3rEy2u11FRakhJf8NPuCpCe149yL97hVXa37RB62ycfJjxsDmCHZUFG6iw6c1YLkPem3Nbry5mESFWUSpEzL7",
  "key17": "4pS1vF2huPwD7S7xD9EjxqQBB74xZiyct6qeP6ZWYhWgY1mEdNZWDHL8BLWoCp7q5LmNEGmQw7Vef7EZYg3iY9PC",
  "key18": "3PzJyCqTR4xvnu1iwnZWqGwT9WEgBuvkqVsx1aRQbwQsS3kKQ81aQN1nMnkBgx9BYMRjmgzcJRTW1QobYuaBss6U",
  "key19": "2qrj2aYsAMB4FQHKnuAjVYeU6obNooAqs7bX32cKCtogWRunXFGMKGuLESugVXhFo16iM7rsHSPcSUWhExbmMWcS",
  "key20": "2vXmzCWvXmmQ597N6cFM1ihuE3RBD3swCw5itAdUJw9kMR9NhnF8MiEfTQMnPHcd2BbtLjg9oKhwMyYYfdLY6orf",
  "key21": "xLvjF9xio879oUBGtf6BnbmQXBZd3Qtit6odteJ1LSLbRQBwLh6bFFkL2KjjBS1HkHcsnKZFiyaMwZC883Gvw2v",
  "key22": "3U9bVwSVuJdYrHgQEv1kBfCQ79LKMqtvjRrXQZLjBkkFX8Yt4cW5WyRd9pBABXWNhuTdPqUpFKs6yHhYn7L8xkKF",
  "key23": "3SpyUvsVZEo4HnhvWC7c3XGuWzgHa9iY9oLyAZy2DkLrZqJtaamwZLYtkL5Ed7DNdsoB8ePiSGgN9WTTAeRqKbH8",
  "key24": "DdedXWpwuvN1kuQa3H8Cq2bbUVjH3HuJqM7tKSSK8VjVCYNN8i1QoYBxq6W1rwFs3GvM2zerW4YvyYNJZmbYuYH",
  "key25": "4LGqn185AzJ7eJfENFQsv3X62Q3jgDjGnckeZv4rh1XvuAULMqz2iWSiYNRyScPYrRKLd7VR9hDfVudnU3KuLAmn",
  "key26": "2u7UkntjXtr74Z9YwxE7Z515DPtLTSZaRE4EygjaRMQMxA8kiaRH6Vv9enJdtNVXbUVhminvEnQTRupBScxpdNbF",
  "key27": "qrSVFFa6WTAUKbMGSXNpcxTuquoMfv44iNbKV8oQU4XSLtr8AHXT4mXSTv2vF1tWcpYu2NjxZV6QEDLFvzLbLra",
  "key28": "32nrEJCLVE6RbnhLRmPRxDFD2DzKA3yTP2FUvzzvYHFo5P7U6dATQvgmUqLcMCofTURAv5p6N6CKorjpbvZTH8dA",
  "key29": "5UkgJ7psRPojB1GNng8S5WcZXbGwWkwB1PXMYDPTZJoz25iQtdLBLhC5SEnzG6kmJ3rYpGDV86jaaxjLaHc8oNTc",
  "key30": "51CEZmFUDvAr8SK1rYM6nyRnV2ihQjvK7FYEEicqXjVS8F8bWZvveoByAZfWQVZqrvKnM4oFZyV9eL4jUn7orUf7",
  "key31": "4fCQjiCmvxaA3xzKyKtmXLcPqP3SbZUyrA9Hi94Nss5xfci2kpbm2jcg8zg9c6HjrJioRPGFuBTbuv9SGnwMgwTf",
  "key32": "ppAd27tjYJfGvFYgrgJsCbRw3FDu6tHvkBzBekq42mdPz2WbDvnCRcnUUFP5uPFRRbgXJy1oJhMJaXTcf62QAUV",
  "key33": "3qWkQjC5WFumKskfj2ePcHkHPnbfKwYEGHKrFEvE3iAB5BUPQC9vPCfK7XGKfvcj3W1BWrmcaHuF2MkGe54rqaTx",
  "key34": "e7fu7g5pE2BfLyW9yYE6BxwJ4AXyjmeBYVggiNaTZRJBee98qzAiQDQ1PqjL5Pqq2KdGf4RUQo1xDsLC1rLdWBK",
  "key35": "JLwdMvemFpNEqbyvxrzQe854zcwb6djiCJ2jRrgvaYUgGWdUbUqsHRqS2kYfsSc7UMNNv54EjS82qg91HitxY7p",
  "key36": "4AMfE8vndyqAx6HVHt2x2hGssSdQ1FLmypcuc5iKWPcJZ4t5iHDeneEdZtbWEo6fvQkxjAzRhDV6xGWVPG8CaU8s",
  "key37": "5cF3uaLm4dGzpkUmdZXFaFwQx3ksUAnC9DwEFhZSTZ4EJUTbbJeUjkEZXzCsF8Do4sVMyDBZRQXRHm6fgac1cNb",
  "key38": "3F1LfG8ttaPgpmL4ProndAEaPEKSxCtGF2jRFJi9pSUDJPfiYKVkeG3KKahxTy2rS9wtHaMu5Qrm7riFkgoZtj5Z"
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
