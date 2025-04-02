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
    "4PgAVrkVJV1utQPvg3xi2PNg2AwfTEMt7EjD7mU8qyoJnnbHPsbZfgvT2AZshpGDYWu2yuHSZ9JvgTMsLwrFhiPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a8MZxo4HZs4L7HMjBSD5Z4y49fyXRbg3AGUx8DFvRpHYSw4FhGVsLmsWVc9a9gZumiwG1wQ8PL23LS6p3DHcMCx",
  "key1": "3aZSw1TfzdgFgrU2zVHH51xtPBkYMnA2GBiLdQ9Bj3JzKeuvEMmHJkyBKjXREUreyLvaPMmTCoir268ouox8eUw2",
  "key2": "oV1sXFNexB7fhEG8VnufBFpZo72dbYUtXVgnavSDZdqpJrZTFV6wUEBpRoiNM4k7VLRmzN9LfsDafBmUum4PSYV",
  "key3": "43MRb9zWhR1wCcSU5E5YRM4Zd6v3YRpng3WSVFbAfDaBht6erhs9yxGwip8Q4Ctw4sTfgfeqPgGyZnTKyPjP2DZy",
  "key4": "YB4NrXCN3arTS8YrcfWUGiGRN9yxv2iCYwskPtZPZzQTDNopXRk8PPP1CJTqWgAXLYhjJkUfK93idPCaYo77Vgu",
  "key5": "9zzf3Vs7ZnB6LgnYQq5GaYogdEdiCFuJtwfBdTXfibyyXA9oaKUqMJpn21ki6wGKk9XkHrKPHki5tXDgmNYYpuo",
  "key6": "5owoR6wyU13pPGdp4YMdweu3PuBqGAXKevgUqbJxfNvHNxAnpNzzWvoUFTW915jmVNwo5LxmZwVabjwydBgFC7Q2",
  "key7": "4zxX97nSPhcsHeY4cyVrDR3BJ5QhubrL8kd4TtHCqcVtXqQz17A4QWj2EyUbW7UwhreXmX84RYovTSMf1k156Usi",
  "key8": "4tDFVRzEebCYyEyMDLx6K135wgeFYzNfcKTVwfFM11wHG7UYby9ifty8eH5NxZyfuLTGM4RR3G1Xu1gtvP8G6RPZ",
  "key9": "n9GerTy9Fq46KFPNEcHkTQz8NcWGeczH5sxkfuAx1Fay8ZKL7vqwtUek9xhU3SmAYACBJw1qE3jURC4i5tNnZ71",
  "key10": "14PBdzFHGQKX7ptz22Mh2AY7AfPdQt8ts4SWSwUGx5C7r1bfo6hi1iALBRHbDE9Y6ToYqa5o5hUfXKD6hDw1ZXa",
  "key11": "3XVoAEoDMjmfY2ekKDtB54HY3M6m5v1G2CVjM1wJJSFa55tt63Y7TMcGp9tPZomavQK1yLU37RPbdWQxEKPteHBa",
  "key12": "5a2TM36EfowkVYf8FgacPpm5shwoCxKwTimrvDt8VJsrxAPAqsvEbzqSxAhDe6Di2gyYaxcbrTXNQemLZ1fhkNds",
  "key13": "3V723vv6CXb7YqTLcArY4dWDN5f8MxJetbouA2BGjdC8gvQJKDNbG52zHu461a23Rya7zncZs9zLwUeE6XgXR6eu",
  "key14": "Jx4yap1PP8q1bgnApXx2WWXJT6enxYas2d2i5TPQQAzGvZFXn38fSy3d893JEFRDaSXN26TNSrUa7NXdB3yPPmC",
  "key15": "2y1ToyZTgn48bG6j8qSVdf7idEuYctmB4C6yVVqSrVdZkTUrwqeRA8GgkyVeziTD6YqEwAZAwVYbBkKuDLEki69t",
  "key16": "4v4Xq7MFJbfSsiFmLzqWWe49AMsDg8cjfQXkVimMCj75Y1TtRjMHLLpkpy8ZUy9LF9PmeZ7vU4wTBn5StsUrcKm6",
  "key17": "4BVFGXgHFP26KtQdq66EJ6uqoLH4Y87tnAHdjitXxcSAF5feUUzujx4Yh1EEza8HKtKDNwTwN6aoDE1xANqHnYcu",
  "key18": "65H13UrjWB7wUCsRraTAn6qQ5bxv3dzajhAmQ3XJ5LtzfmeJs9iQ2Ktp7RcZJWaGLkaAmVjmCCDjLoyZKKYC9Tu",
  "key19": "5Tzri1Q4zTzUSzUNbTsa8CHkNDZrgyKjg4of9G2bYC7Q2HTD6FbkfBwHsQ2CDkvUQjJ6FbM3rC8Wp7CS62yxiHVM",
  "key20": "3mYBC7XCDiacyecJknYtrdkBuBJD8Nrrd9fSiPT2q5oYkK2mtFuxd7djDnBFE6WiJSieEB26dU27fbAFLjGDEgMg",
  "key21": "vTNSeCoxG9YNBrgzWQazG4o9xFPYfd7uJYLK3u8pzju9UTq2KYUNutSKCVWgwMaGBZuiN3bRoKt1dXrwVf8QxMw",
  "key22": "4oH69VDkJjAAaWEAnDC7g33mq5MkVXpPyMT9rA6YvLYmLEBGu7TECreBK6eL6AHJKEmxwBqaYixxCMzUyk14Bcnc",
  "key23": "5mimWcegjXSyXvSE4JYeG3Gw9adcmkKz6b9Uq1rqvCwYc7YcQsL5UpNt4QaGd3LMCw6efVZmY8nmLrQyM55eNF2L",
  "key24": "4bzfb81Mxy8LACzJwGaVE8iamghWUCFyneNzzMpn3H9FHMsnnL4boxgnhz4RUhXvVjaxqrz7CaXVkhFtgymiikjx",
  "key25": "23V6GCKZQRJmBHN83BRaPUfchjJPHJ2NWcqf8WsCZWpLisHLohoKzLnd2yUnbqSk2ph8YFiDweWtdyWepcyHDRZM",
  "key26": "5CDzQfoZZjxPiRaxA5PNsKuDxsp8epMs2K3MBubULKuti2cNdNoFUCYehm6XgbUaupwvQT8CsWC8Nwk9YD8oLzW8",
  "key27": "31URVBMSKXEmmYz1Acx4R3i21AnEjpbbG7JqkVn7UkwuhuXTtmLPLzPMvyUECRjdnhxyAZ8TZnK3KMx9ekPjYndM",
  "key28": "31VJVcHGseeEoiq8PUMyw7gyhs6qAgJkqqdYSA7JAjYjyGNzLxc9iMYn4ygfMK4iFaoTD5TVcFwWG5QnvWbQqxhT",
  "key29": "4xLt7ZC8xDUJi261hxgsz49M9DsTuLUoQkjumGRA2ZaM8yL1t1WD7nUL9kwm9VS2dVZT3pU8wSpFnnR6qMY2VXC5",
  "key30": "5jxyXiF9hZZU8qfa2626HcwHHvMofchTV6mcirNeSxcZpgGwEdPPmkQMarg2FK8YhadXq86wa4jyNeP3qQEVvZ85",
  "key31": "4SChqpZZpBu6Vtcd5hJY8cgxs9AiqaoXEyN1JNP5QWW23wX9LNRJHvQ2Ye5XUvA6aBmXJJJoSSr5CocUHrCBhdCG",
  "key32": "2heMGrTkorLW52b76GG9kPnQCjXhj8xGePyGKFd9TecTUQN71THQ5L9AQ2H6xTRGiXBc1d4AVkotmMCoMHgqPub3",
  "key33": "hHVN25JrmYmfUbgw4MYKn8WUh6dekQZfw3TT4EivUKThUcfk6K1MbDBXQQUuNDTfrMBWXhbhSKRLE8wCXHtvZTk",
  "key34": "4omLiBZoa5vy79eqqBvYPG3mSQRGGCRLtq1Y7Xm3tUeYhpizDo9c1NYnJHrwT5igYyVqE8eqL8yagNF69KvWzfvz",
  "key35": "2N4RTPTaQoTE6BUSVT76vmyFLodDL6hinTQvJWnXqgLFk29X8jU5ruF7wynxwoNAgZXpftqAbPtni5A6rFGcA8pq",
  "key36": "wUHsVvP2vpauEsgHoYnio5sLF9K88apXSkzn5Q1PfuAboZFvYU87mgx8h8griUDtEL6DsvJqDNyWAprrBRjFTxj"
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
