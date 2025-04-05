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
    "2NNhiLTmmTsRWzcbxo1JPHuEB3kaQ61dxA1A7CJArGuvSEMyeGXKogkYGr1ypaLWEfcEzJxDVoDqQ1CrvhU37ubj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BwXiRKi9CM6yjHndWVct4zyGpWJv4wDUWc5HGiQt3Z7csEBcYxivwW8GVxWGV3g8UdpnwJRrdmSpaPmQAmDERBb",
  "key1": "PpdaF1r7qToBvbjYS6gdH8p4we9Hqsy8adRNck6uUqUJeQwWKu4k4mJGp1PgUVf6w1xDmaa4tc2xBwiQoviKScX",
  "key2": "3nxeDETa2fEYDGPxLz4oQdDerHxsgC5AMTjZueqS1uuf8REaey61uDkgTv5Zp2M7gJndB83jvEokK82pAVhCRCBs",
  "key3": "Ypd5i8pPNJ1SSxjK51bNtfruLpJY4Am6vQ9FVRco2LfJakgFUHfouod68zU1kqVcCafDkFxfuGu9oEKcmErHjT1",
  "key4": "2xFQdXqNpZYp3CDXjK91xPhZuo9rEGWo7YwA21RLVq7R7T3nQdQV3NvRgTLukP5p55K8j6cFvTt8PFV2BBvrk81b",
  "key5": "3WyVg8k5ARQgT2xBU3Zs7AiUZLBypNHp6SHX1FV1vnzofyJoCEhsqKhc9MGPwZmPRVoTTBcFJRVdk7DV9o6a5Pft",
  "key6": "5KA64Jujyimv9W39cnZQ2g6TP9svvEGQpXYN8ZS8rB2SwXv5W1vdJbbR12E1Hcmh5p4vTBwkZLCcQRCsNA5h6UzS",
  "key7": "5kBCZgNxQZJWFBSxdhrY1JdKCUV7EprgBP6EGceZB9Bb4gFwNDtyoCGgqNy9yJ4PVrCJ97jKWn2VZB5fNeYZLCqY",
  "key8": "5fg5TdaYK7w64GoCjcbk7sVDC5MPmHHwm1v75gzeGEETgyikmqUajgFiveN678EZB6eTjjNWD5LGZRQNU656teKF",
  "key9": "64HdKQuXM5gd2WNb82eg2NPQ5BVJNM5658eu9Gam7W8764d1nxMp6mSyV17YLyaozCthmW1Sa2pe3PCfHGcBD7Ru",
  "key10": "2xYjw62g8Wyni2rhULkdU16cvywQ5F38sZqHVuZZxZx6pWWEJboHWpJfEgaguDCWyjGzCibCioetQVbSKKCWHvTV",
  "key11": "4YE93raYuqRi1Uo9EgkJGJZJC5AZjnYy7tAGT9eMedMTfxfhpVMWkbVj9SpPadd7oYJc5qSQ5goPQY9gYhLtLkj9",
  "key12": "VYNYJSxQbGtgyhED84ouNmeeqnhst6irHeFaxgGypj2rBcqHZLQ1agyCZvAYLaVZFS3VDfmsyUwWAmqamyCN2hX",
  "key13": "2eaWhjfbL88dFczNQjaBxrNT6ZoXYGrqEbgrFXw45rLF2Y9sBxXP5YTeBsGyPfuxTfFA4oBNoWwBMjwXsmn8wCt9",
  "key14": "5tZ1gTSaBMgycyfdQZBvHtoi8KNMhMjFKhmBBxmfKxTZ3xvK7VKL6UBKjfpVmR4UyqjJsXYFdLpJj37BTQv3NN9N",
  "key15": "4nvmKgs3XBbZ39sU8VBhrunpCpgcX5PB5TfdL3bYjFuYCfWnSLxUDSC68po5vLNz5DGs9dLNYzQrF1bP9ZRWBUSp",
  "key16": "4zri3Ejzzv2WCshxGxJwr5wMbkCAyFeZEvSGLYAVepjJe9BMwQGsKGFqH8X6sCUx4DNU4FEugYWL3upe3GdWmfgE",
  "key17": "epHMQ35jVgvLbk34ndLhV3gXzUdGGuMzKuXd3JgT4cR9f9GPCJpUEM7qh4b9pLrX1TthdncvFwxGGBj6kJoesvK",
  "key18": "3Sr9HJo3jgfRzoEVxDnymzETzzcjNQRSg7VE2mDR6B9pjkN59KUBtYYYuieGcLgX927zKTYrySkxqZJwjPpKhgFq",
  "key19": "4esqWmophPJnyYNjtdYfZ8guq8aiPwViGbhL2JVHipsCGw5J6AXGPeqaU5raLa5eUdZxUJPoBY52C68zvytjBzCm",
  "key20": "2FrEbDuvwKpM24jqcF1pfNdxuim3VEt1kywF5scSQ7ZhfRaj42gAnWjuiRKTDjmHKUJ4t6wPUxjF9S5KLpPbp38M",
  "key21": "3t7KS3t5bGu7jewznEsdDcUMjVwWzC4sGN7a8kDoxaqbPkdtiT2GQUCpLTEB2NT7LT75JxfrxXmVY53Q8FzWCoGK",
  "key22": "4ydd8yPjs4LnN3TsniDrzCS4wu5Hv3uuLYRPJXRX2Q4rkygHaLQXG8FEX5HAMXtH4k4xnUnBDS4PEStFMrP3gcWu",
  "key23": "4e5cf892BHzmT7XvQig1UKs819Feu1Rf6bNSQpiAofSwEHfBvaEUPGWUmZv7Hsd9v2gf5tVbobSLANnxaXjoAMpo",
  "key24": "5mPc6qrKuYS1GRQtuGjTw61mkmDARMDnNDfhUpBMYVPJnUpXiYfnv7ANqrCaSBzL3unsvPNLTqcEivaNwQ8rDsax",
  "key25": "ey4NCUGziypgSMCpP5zdyjnHrhWNvrx3itQDFBvPR73t6egtm69YARNiKquw6X7EJUioKPvkg8SiXnGrHwnmRvq",
  "key26": "5SYkxxxEjGb9MRxgAMVE9S15eiNEyGTePH7qxzDogxtqCZqfQatCGt8kcAy3SzDLVrF2XC1KTt4YuJNNiasS5N4q",
  "key27": "4MzrYXDKp9LmjxSgCedM4RWh1XuorGhEo3WW522xwGvMQ1TreUHvtV8dWGCQaLAx32xEfevQxmfsmjKo4RxxBSBH",
  "key28": "5kcnDLNtnPuK6211E5VTdN7yWsuFuEQLgtouGufqdUm89NDbgN6fo58MiqU7X19mXjqQccD2pB61bPaM5ZwgTvR3",
  "key29": "3gfexd3QeUWNmK1rcarmHSa3AKqLBJnAGiuM4jyTq1V5kR8Fm1bj8Y6MCkgoywoi1UQtUGuoFG2TUohK72KnWDsS",
  "key30": "2TGfTaDsnZ5jFHAGw251eCiQQG6VzpTKZac3fRyJHXwPzfCtSbwCANLd8fPQCynXD4yTv9PKRRnVMKZBt98mQQ8o",
  "key31": "5ih1m2ysntKvkpaNY1jo3WnmBLNS7HNjR6Z72YCC5xZndRXheHc8gNJhYSmsA7RyvPhXMYUYj3ZfZnaqDcZWiJK7",
  "key32": "4WWjS5vHH9oG3oixizd6ssYzjFNTo2dXLgd5DcsaspdRWzDSeTVbjBasWF5xSM52QShpBHKkNLkGeWhwCNPttiJX",
  "key33": "35MPDATNhi3CrR1J13Nbs4V4CVZm376CZteosrHjTxbAA1Qrc4vMWUCNZ4e54VgmcLyLsR53E7a3o3t47qiEW28",
  "key34": "3FV5gYeQ4t1vVh3rvWgj8SuawjTaHr5kne4aMeQdwj7BYaRUaDjrM3v8UNgo13TR9qdz79QPRhJF7oCyJtkG86N8",
  "key35": "3xbEqZvE9cxjhXRcdTh5wXjUHbDnq4W6QeVTzJWX4PnJXngHswcDAKachETsT8ePG2Qb7vbj1GuakJQZVAxtPAXM",
  "key36": "3ge1CaCGdaWDsWePQCBQzHBHQJgYcAmjoTpnrWBARnJZXFbXoLZYSunTMHaG88H2U2LpsxseDgZr6GR63dk1nvLQ",
  "key37": "84hVFF4gMuVBfczRCzU3hGXwe4ZqkCBCFSHjTHcroVRmya5mzpRQ7vs39RiYcsFLEpdysmU4pw54wo1GakDHsJy",
  "key38": "x7nzwJxYYsuRPSGWXC42pm9SqF1jrB8bmuqNByUkFjNrCwEHj1t5AbcHuPmunxhPP8gKhzyFhskz3ogUmkaCTM1",
  "key39": "2Rj9fC15Nj4i7KTN9R4tevmQDXt98p5MHCm5kyCQcZeZdVS4p7BcqdLcYT7k8ryLBaWepGK7bcU6pLddc8EHyNW5",
  "key40": "52uXAe4zUVY4dEUApt7d6b7nuBz5WR1W8f8iJySRMDupZCLbw18RG9zPD2xRRt3EuneM1bmxr2DtoyDbeLytw33d",
  "key41": "522Cm3RZgRL37NxjNCfCWd4ug6jHffdjQAss79FbkDW56XwVYBhdqRbQ1pa82KZ9dvhTf3wjvcMwFgKNRzsqaSP6"
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
