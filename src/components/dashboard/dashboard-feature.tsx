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
    "5FsGBJLSxjcxMvtsNoegDrRtQBeo9Gu5VQe1wV3d8ecEtBWGbMihKBUsS8WDKiXv9aQksHqM7j59TV5JxeWAisX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WULxRwbbfLAR52D9SXbzczEmUoLKaSuxKaiH9etmneJQTBd3gWMW2wQyxFNtChigTu1WZyJMFS42kNqZJ48AkJQ",
  "key1": "4unfwjotiwjn98VbHK8hDzWQ9azrGxaapVE4z6YfAFNrQUQrw835CHBvMWtykqv4TfQNPXsdeYpJwSdXa25e5ESu",
  "key2": "rFbuFHpud9cuZRL3nMFQi8uztWcRt5PrqMJFhrQLtyrUkwEcmb43ppmWgFQThHW4ycFcXn6hpKz69UrLQHNZrpF",
  "key3": "JSxaNdYJcXbbnLpSurtGdFE2irUjvE1yg73ZjiprjCNKNg7gXfEYTbLUcG97qzTXRjFwXG8ffn66JY7SFCiVp7J",
  "key4": "27eYQKc8CQJQvzr3ta5bDEQsqGwJfwsdXmgYc1nmtfA4AfJfymC3JsZE5hG62Y2ng9FsR6XRoxfSntNGdcQZc93E",
  "key5": "214TYTu54rb3scYxb6DmsQ6LxVw8sTE4VPJqqbxP6bTseh3q8FZwvMDmu2vj8x33DD7A7R7cXZHAVTcJypTuibBr",
  "key6": "2HqgKUqdhKyfsrZtAaeGVwsHBPHbfPwtqiPxQksK6DHjvUCZdztpYSVqFeDhrDRg2yG59ot2QnUuf7yxkd5o5sF4",
  "key7": "4eauEqhSzL4k4iS6SS2azoWG817Z9jdYc9WnWbdZhsMTPap7ZncSCeYyT4onU8bzfuTfjG7n76DpY3uYSzkEVnY2",
  "key8": "4J4E8B6qMV92ppKuApJP2ABV15Xdbcj7M1Hx7qtF3WRkdZ3VwnEjAvAQ6wNFfiDaC6Y9QFnfq37SM8KvH4Y6rM4N",
  "key9": "3qe8beJzMEuSDscH9ZsEHuiCUiqs9RgewZbwYoRhU93GvZtHULJJmyrL7mtzxZZzH7umN5uCJKhNPiK9sH3eFiWs",
  "key10": "29hZ8u44vE7tqJZMe1Q5i5Tyoyfd73Kyvznd9Rb5pPnLU9YG5Ejm8vHLudSVyYrTWPhD14ZSFfw2exL4n8PfaPEW",
  "key11": "8U3DA1uYErRGszvyZbNPEkESG2ybB4PPSKM168T8X9X1dfVg3EpW7u4pxG29gZQYys3VhAfHj55VB6xGbSN9CNa",
  "key12": "5qiVtbJGK2qLm7iNfE9R8CkjuH3oi9PZcCavuXTKZg5cEzxP2HdewxTCj81GKxYVLkFR8ejQKyYiDtJp2sUfpBTS",
  "key13": "4GgBtfe31TmB8GfQiott7H21yY3pBL9EiGZT5eeeiq2LacVFo67KH4JT29aJ24aQEaPWCrDa8UbUt8RJYJqGzW9W",
  "key14": "2nn8NMAKvQpN7HL4Q2Q1iwqekcmBgSiSM4qseFeY1ZNTgLqQCnAn5Y6EwvGrnrwdGKLodN6kX7jACZZXu82v13Nv",
  "key15": "2KN1x8yMJ97RACnBaxBaMuvWdGusYcXdiYe13xY2dLRrVZezYWyagV5hUVuTU1z5f2DrrvwFuXUiuMhgNFxvDbnj",
  "key16": "JHX4xjrM8ZyFDtA9hSRWPM5ioVpEeNf6pcQArWefVUs4U4ohmgBDbHVX6AvkzyyVHF9t6bJV7ocf3bkWs3v6vVd",
  "key17": "3yZaomWsppSkpCzwVRHkjeDu5FdDsGmZyfZLGQYTZCELj2MsS6s1fLSKYmhsmeno7zhjmzbuqk5sUjM3Jiq1Rvug",
  "key18": "3ZPY8zUGuvmaLVAoCZWDCTx315Z5QSd7sZDQTsUh5zXVHFrk73n4rMPEQswJkzN8hR3pcVcyskhGc6jnQuyoZffw",
  "key19": "zENTSmQ7C9YP8LNp17xdtYnfoqhQ17gAFPWyPbty2EXLHKc7auSkgApdJRACEyAhXr69yzHUypLfuiFViCfTCh6",
  "key20": "uTsARs3RJX2maxD2hJ3Ums6kHu3Br69uHX9yFytRopmDJtUsBkvJr131mbU2YhksAqrjwEKLnW79YBsC94dEa2h",
  "key21": "PXC1ohe3pejViiddzEvXvUnQvidXWotoa1qEVhSKmCipHaJBEh8zqKQSrYLb3DF5rtXqxXinvUBdcWwd8fSptSA",
  "key22": "4bSJbvHVRwqpRvLztQStxzPq3xhRptkhnGGHqPmeteFWiVDqAtupcTqxiqMiGijLmrBaD1xmf481t6rpjTbLPUcA",
  "key23": "2E8LXLbuqYzxm76Nmz9uu2qXRyfabrAb8WuN5s4n1QTyXb3oUecbx3H4x4K2SqrdLDYJL5YbDJerpWJJjYfVTsos",
  "key24": "2Rs5DdpcA1QYCw3UKhpCtFb2QRzBW6SXE9i4vKsmQs6Eqe5TZ5QnnZG4hxnYckxArBd1Gt5A3YE3CPzqHMYrVCVd",
  "key25": "f25os4feS2XwRLf6hbyA2owDUaZtHzdZxWp1ehgh1J2LDamTD4GryFg6851hrJ1G5jQyxSgY2am2Jb1fXpYgWrw",
  "key26": "3gztPPwYewHuVVFzbFYvXhSJHVkSQZsxSF62ZBWsDWsacYMNB4EmF1tgSBXzhcaBBg8RF9Wbw71tZgDjPCkLZ7j",
  "key27": "49MxH9GTcgLiMX1Fqgiw5RQiXqi9Z3UJ2gfDQ1ApFPCGn2RMSEUPTigrrxQgQ6cFoCpbH1vZtBHu1Zd7r3Kw3RHM",
  "key28": "39mHeXZC7ytdXeYSuwiNbbRGckJwM4XME42pRF7A49sxBqNueEhVnqmcLb2Mj6RRfajAy9CHywtr9Jwzy9uxC5R1",
  "key29": "43eQR4x1NDoRNpywhCpUvyew1BRNsfziqwihr3sdMxU4jmskvfAGVzhjwFpYt5Mgfyu2tqdJYTDnqNqfJDowvKit",
  "key30": "vBjE5Ld47hhS3oiXCQx3T6gRg7Vfa3swvs6B4Wh1WSFxpMxaqpzW8RNAGuP9AeeUHF23zULUn2AkHAfZzZKJaBE",
  "key31": "4LkiJwxDhqEjEVvJ5r2rMDVmpQyCDmwqwboWDzAnGK9VRd4w2Qd1yC3PPnrLDDHXqK4EZhZAHDAYuAkYVJtjxQdU",
  "key32": "3frDgQJ8Ks8VAJvrsg1FUs5Nch4XbiMGciD2dqdcU3iMCWg6zfQbViEdayWzvdKJtLV4ZoRhT1Mg1N6abYciXQUR",
  "key33": "o7hbHGFWG9u9Nj7NQpev4crr8PVxkdVFYu7VfX8KL4wMePJM12HWMaXnCuzVZuzZWnK7LpnheVVHRkN729KfNUk",
  "key34": "3me22Hc4T2gpb6WnXZtH3RTAcGFANVBEHcK5AAQ928j22G4VafvLLV1YpWNLtETWuiHu1bbNgKeRSgFoXdeniiqT",
  "key35": "7RJ4oG3jxdwLAgxkp3LANfNc43mGprQLYJojukJeXGqsLYD8ztkCgMboCJWSpuvSZSs7c35AYX6Vqgi5bSbfsuK",
  "key36": "3b885LaXiGPJgQCjerZdtBfsAYPRQq2Ld8NkpXUqWXDu9qTtLtnyr1hc3AfGr4VMswZBVpFTGwjki8udWJt6bkJm",
  "key37": "43vUdBiZCCxCDW2kkfcaanJxga5e81BfdcwrUERyVgqESoFRhgzXULHsxs6vw3kQTwnLftSirVaGx3nFLzUeqAbb",
  "key38": "45Dnkx3CbzD5RriDYivpq2qY2CgpNFAJkZaTGkCEQDNd9nxbhKS4AFmeoRgdPxzSv8RsN9xwd22NJGt6n6C1HdS3",
  "key39": "5mZPAV5Gpk1N4uEN6uCMNCuxRfYfW9L7byJr6KcFf76nsqw59wuiZd1iUiwNUJ7peQNNHDCULiWg8CgXbundBhoP",
  "key40": "43XQJtB49kjXuN8ZwAMFkNcMx1niVhvU4na6V37DewHw3qHp4JsGopWHmNJCWUwf7nByQXQMtHZhRsrFGaSmPACq",
  "key41": "3Jws8jZpnvP8nu1KFSU9GWwC6aV55ma6NVYJqHsCCxye5zTrKT855cA81xAVG6XARit3S9JvXgKGLHDBHUsjgDCx",
  "key42": "4QptJ7aX3HFqKi51MJLKQYjsLuNN8w5KY3ZCRCcM19W5u2vnqzY4mE2EBh2HBzjWv7F9vTEqJrkHDRVF71HZtrtm",
  "key43": "2T3wPyJjWR8Bsv4h8mqJCBwFqF6djMAnkYK2vs8x5fVq8jbVWh7GzJj596WTowKS5KRyZpbgEjVfnwR2BX8QJqh5",
  "key44": "2XB6FRMLznhn1ByBWKCCjGYXu5f9gjirnqLmWju2isWspXZpiR7uCvANJXwXutKLsHKMi8YihGTRYFcK7wWkxPNT",
  "key45": "4NMCUufENDvXotVqCKqtoCvPwRhHmkMU6p5QgyQFuNnUm5RUgzxr4xcFbYzhL368Yt14nCaWKQd72TBwbFPrBKhY",
  "key46": "2mYKVvwSumHq3uB9koMvPwiPwiRsorYp6cJJU7eMbKf3tWKbP6akHpPFyQkjkrtVPUsDHoBK7iHAYAykbzC8h3R1"
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
