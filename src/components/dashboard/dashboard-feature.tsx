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
    "q2HuhRNrzmhYaiQ4pkgNrBXaELB8uyqxuWPLqainMnDyZ2GijdSbhWPvMEsEvw1omdG4z4XArrswVMjWyjZp4gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wm8PdRG3SSjq4KfNAZckdLe6EMtT7PSKAmHt6jSEv12f7bhTxW84RKybsdXnb7mMMWYohpwUHGG8HCKixBTGssw",
  "key1": "2Tag1d45D64QeCzqih41MCtte7ZgoM5FgTnjvSung46KgroGvosAKdghGdxfx9javJ1umt6QJkqNQJbV1wo66CVF",
  "key2": "5GCG5Dubw2NyTTdZKwbvQKA1Y4sUoh1YYuoBLHb4vDCuTRtk28tPnLN8xdGhdxPkPxKSbeix4iYf987fQrAKVnkn",
  "key3": "T6YSzpUt9ZJXtpXT52W6hchhzdLp6BN5Fa4Fm5mj6dtecesnLaW9ALRkywdiyGCy4tUTC4gKQEcUEWhNkVtr3hV",
  "key4": "5tbK3Mrz8DCZ8Hoxi811JcZRcqtsUeK4G94bhgPVj8EiXKyEWpQ9XjUgQEUK2DenSGQ6kpHNvSECt4riuhdp7Fdz",
  "key5": "48CZu2io9ALq5hyUqXSw2CgP1HcchZ9u5cfjvicbAs7BKQ9u4uxcRuzvfxni37ok88KQ9kG58oa5JFKTqHEVGn73",
  "key6": "nZiHxhXb28zTj6PjFtQND7CNgTRLe6H22gcd71KzFV5gyRUgUN9wDTjLWN9HhSJLMT9rzD3HUvMSHqQAc5CDLQD",
  "key7": "4wWcjg1MUZyhzYic5ig3idq8VBkpdae893T8Fz1aPCVXuSeb22tbeGuwJJ6gTkd9uhRaLLN18tiufGwdc8dS8QL6",
  "key8": "iFoKDt2kA4mPT2yfip4p3FgNpSJPf95hbACZSJStJjy1ivSZdk6fLmLmEyEjrrTohFAbqCLxK8UHGzEWMWmKvX8",
  "key9": "4aNgUXwhDUqSpi89N4gxBRtHZWJbfr2H54abuaEe9AyAeKwgEmHn1PyKMFm2N5bpBuZ5jXegvA7V5Stdmrw4R1wS",
  "key10": "3VB6Ln43D12CUUgMqe4Z3hKdsr3zpC4GbDr29wjNzyZ1wXKXkXU9Xa9J4VbXJkFVDgSPhv6zJ6YttDS4DtXNZEeR",
  "key11": "5Uo21YE1tQYr9Jhcs2xqjQQHzDa4UjrS8pQ3Y1BL3gzJddz9Rm4gmC3vN1dXR1MHQ17mh5EUBCkTLjc5ibkPADbE",
  "key12": "3vyGtJFaqUupK9nFC1egSKRNuobcE4YFKurMhueaWrcNPNRnDQvqyURkT5xtuxmpMgojetfmLgbGTjnVRhKRC2Nn",
  "key13": "5SJTzT1aKVyxDZjjfHGRZeX4KNvak2sYjMHBxyy6Z1Rev8evRMfVs1NAwcbeJa2tmtSggoGyxFDUfoGwwbk1Qoc3",
  "key14": "5czDutKbAYTpmUHRWmQ2SfBoNpkzYxpXM4CHvffrYy24zvhXqKGR3SSMHNoPRQHaHfMvQHGZging337hLDm6ubwe",
  "key15": "5CxeuJHBQbhLkyxiXKD7c5PV7GbaEUK1dYz5mh9yoro5RcT4PMoskYn84RNRUx4okytXMQyBJ5y2NkyJ3fwz2CSC",
  "key16": "4fxWWdPS57WEpDhvmguNsUyCrfXbt82uYCoE2Gn6RhzY6fyBgBqb7qvysvX1USChRYBDQhh64M897yQLJUrbfwBM",
  "key17": "4sAUf1GWzGUZi5FLcZ4411LWZjw41JkBFmRY2BtC3YYmMmn5B5b4zHts1o6TgqGQHvWUkdNwvQp7dV38mgK3YKHV",
  "key18": "47BJrhjgb4x7dmdUmYFdSp65xQagTUGPm2hK5Awc6NMLNLS5FQ2SjWariw53UGJ7mcP8mFPexKqAjWobTNQPLinP",
  "key19": "4wx7B6dh3nt2qyvSKWKpyyYCfzJPsta5v98VC5JyUfLCHCLCB5DYw1FT1TDUdfVdFv3zU2oR2aNyYVbSVNk6cHKS",
  "key20": "YXrrhCBxck2w66LWxDckPkpuyLMCELem3DvUM84PLTbsfuiAHgLjMaPLjMMYwAKLm6ARrGxaYcmfBRwiqYeT4Fi",
  "key21": "4r7Cja4p4DTzrfvcVfoDDMvFqa7Nyg7qd1SRXdW7NMdhhsumi4kbXxAM3RJxrdTxQ7Pj39pyzkNhZPpC99UfAJsp",
  "key22": "4BUX79ky9M6FY6qqbSXEYEFV8gdmVXHw94KSk2eAokbzTgcXQXkv2Ba6SSWSUXFWAk8xArMbb5ojHDDpK1aygNUb",
  "key23": "2T2D5uECZy8tjaxrtzs9JSQ95vzNqdbeFKmYa7d5T2WxZL2U71oFY8hqXfFvScniL8AzY2HTVvZ2NnRnekNakHUw",
  "key24": "aLV8iqnks54MSU7gvS1PYbpDsreybAKpFEiaaHDKCxB8etixJL2mhMa4NmHAvA93xQA6Yfe45Ws2x62aKVJSRaA",
  "key25": "5ka1DD2fXchrwxPZzNdDQSKSFJTgFUxKxUAzGGB6wSbiFSMEvxh5vsbvxjeThXzdgR7uDa9akWi8mkpSDb1asKJd",
  "key26": "2GWyomMEUfYdu6cKTRX8CdQ4G7qVrCq6wScDh8aX2qut94qGvJf2G72vYBHZwNAqVTjzEg93feX2Y8rKEm5EJAsW",
  "key27": "pEGsYM5R6fFFy6b9AtbfEXYZYSRDNaEf38hn1BM6TgXmKsr2sbEWCZRLMqSodJAGCXLeYcrixdDMKDfBVZtRQEV",
  "key28": "3hnAnfa6sTiBtBwD9dEMhxo6kh66md6MvUQr6x6MUPJruR5cQkYPRqXyqfy4N4uXdEjSSLiHCaiLEp2JhJd5Xec9",
  "key29": "4TuEXgTqC5jYHbbhF6CuFfALx6DDp9KhQ8sUjRJhAy3Wbkds4zpHFC211wNCEJCroWRrnKMGSPGQG3o5sg4FgPoh",
  "key30": "3UWWYy6y9h1oBkYbEM6PQ2crqRQdioFe72KzCDAyptMJCsVJqEEtX1wsFMRXBnzXb8ogvchvzJE4Rbj8yHJGzKUX",
  "key31": "4W6KRjhKPHy5x59xcR1e7MEpxN1XMqiM3xdd281ftpQNxU5rJuBZs7XN8mMyJ32W71y6fsF7qoyun9Er3T3xSg61",
  "key32": "urUWZi8mPQ8N4NVJ5xUva7fggngmn5r1QwFkBGxrfZMhPydj9YYhBbABodnc48Xu6yJkWUBecU56EGzFG9BybNt",
  "key33": "3BBfgn3TGT3wosWXu9pC42u29XMfjSNiJdosBQwarWqSTQXrmxd7KJyAXnyZikCDcQLLJWPBh3kWqNC3kdLX66NU",
  "key34": "2swKiz2zFXWXzGQPweVf1rLnKEdzoSAxSyqkLmMqjKWPcgYm6hdqrDDzr5ZYGVABYqAQAnnHWhW3t9F6QaTnZSzc",
  "key35": "4Qv4BoWcHECuqq9vExeN87FnGmZtUjmbtcSzwxQmmKCMHxJN1UF7k1ZWeXurQywK3qh4zk2pYUuuz3XnK4NyUQvN",
  "key36": "5gHckh4SgkUmF1fcjRs8WJQ3ywc3mh335AxpaTkwKjhBpoR9kAMwj5ewMev9HzUuSXKisjrB3SbQkxAnihvSqpnw",
  "key37": "3EXmR983FBy7hmEGYx5zbtZuoJSTfVVjtwbyj1JscaKuwXvXVdrWH75DjkAxfMuKEQFzPTwikbTENgbJyZysE3Vh",
  "key38": "3LbQpEFm29w3uH2sGC2eeGxLgSTixuCq7GuZhgnKeaXXdVJjisCx4VfCz6UNu6AX5WkxeeaBj1TkC7dUro56K2y8"
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
