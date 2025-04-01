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
    "5Fm7FhcYmcecZYV39vuT6oydKnsQynkErajJ4zygiFBxswKX6TNV7A4HT1QLr4rcK5reFu93K91Lgtuz8XnWVhPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rNMudSHmFxLK39j6sLbzFdxqcUPkto3yBmWpyG5eSxhieXVxX2sbFcAmVoNi2rvQxCgBqhQ3zd3z186AGgDgBHa",
  "key1": "5hm8u5d2xYFi3XNExegjpx1bNr16Xmb6uhdYoymEi3zxWa4UTSm3qEX8ivxtwnrr1sdNKUDGzJrvKH3D9E7JccYC",
  "key2": "3GaQMNLVefngNqEtePfGb19j6VgVKcHBa46p4vXYhGrA2LJVYZRSsMGyCfz3u69fcxMDBZQtyad8CNmYKmeyeNRm",
  "key3": "64F3kk6uzLZAZZN1WjBy4yFthWuQ3MLSBXJv7QAgooQeKbP1EYuXBf7NVwfm79qfdusKWjvvxaJQsKnxbqcQTZM5",
  "key4": "5dws3cqUxLjWwTDtHM7XzrZ5JWa6N6Eu58yz2SKEpRtXZd92JQXjGxNyAL8XSmPkopN9Jf7NrsSbhGi9uVsZZnvg",
  "key5": "3xzp1K4XY8BcsZuzvgstHRSbrXFx3aU4vs6FjBqFHcLaQqwssEEztXA4dJRgPehzyueUhW4uYFecFYbjN5kLgHof",
  "key6": "Eefkf7m6gD5pbLotbmboEVLBVXixHALupe2E8Fr9LoEsJAtQBjXyztzuFHf5hrFwozC3tia5uay5ysUD91WbPLS",
  "key7": "5pDqwaAFaEjfUdkdYor6NAnNuBtFK8BKyuk7EVNZ2EMEG8vSss6BnzKZArYpjQPr6sGbCdQndm1krjG4TTTgKDzd",
  "key8": "5BwoEiRwYSbvY15TEbfn1apXwkNCCHBZj5VhFNvYiCLBcutfHxfJUQFj9a7jzbP3hb7Fa8hJut3jByL79d8Wh3uq",
  "key9": "sLu5G4H6DXsfcFDjHTYBGvECEpbewjezcQta79DRFY1tQnTy2GMrucM5w9VBT9Ey3nhnUgEDeD42tbF2BDqU4o5",
  "key10": "39CmiAmTxRcuTeKZZH9rbNEQDg7wkkGLo9Nh3g7EKVjVgUEeiUWY54prBwW7WMxXTzk3pdCZLFJKN56GbgqHL2J9",
  "key11": "s2yAbdEZJXUeTCik5VKRf6vGjjNZgR9CacW2asRCyEZfFwazqSKPaWL8U5r9Qe5LJrS8Q8EA58ravhPgxV5oScu",
  "key12": "5FvEmk7u6aheadcJaSSyA5uCLim4q1WuKWDNhCYeuWfYDuGemRk78FUsGxZYa26KV8fpr8bYYAubW5hjcYaXaLTf",
  "key13": "4em4GoSKHiwpuH8dZkW3ydXTEgh7Z1ERicriFaeWZWCMBEMbmHn84LgLkKrEWTBWry8sjNL4Q8LHacvveY6DQohS",
  "key14": "2jn6x5rkkJjeL3scmB3SutGXBzvLJFh46iiksZ9n6YNV6ipjhJ5CCPVG9hCaexh7cirY47QEqmzHJKZ68U23QDH",
  "key15": "DvycMorMPRTKNMWDSJkzWg1GctXQzKHFLJK2PkgzjQUt4vvDbSwHo8CTeVFsmEyvT6yYtg8GSwxUUWNcjujPkuZ",
  "key16": "5ofSnHaH8X48AiRvrpN6KUxqsQG3q8WuXMycdduSjZqSLq1w4Nrksjz2pEsBDwzdhPq3yp4f6p5KJNuWmSVtMrEC",
  "key17": "63hdNKgE64FpkpJYhjXQtyCiQ6TZt2VfwTt6W9JJ6DfV2K71FgdLwTiVzkBsBDJd193SCLwugnsusFjbeLoVFsci",
  "key18": "3B6z4xiuyNBuSjAFBeDktbSG9w1bW33a1eMFPt9SF3WoKHEyEyzcdeD7gMhzjZ7qpsZ7bU8RERqPTEp25SZzzD6X",
  "key19": "4CySqfe5P3cQdWVQjqcLea5tRRrDtV9aETUw12Zu6iDGmtpZGsDMCWVTVtbLXnoYYkc2ARm49Uhq2vpadyjQ8zbW",
  "key20": "4VxGoXFhB8XmgARJw5UJkFHe4SNmPhhpjotLUSFUKUwnfGvtyTEKa3yvWBnEbSQyAYPHjFeScxwqiXHymZCPgsT1",
  "key21": "3ubn13rh1RVZYaSTHPeg93m1dUUZqceUyjxD6GPCWE2i4kAYy7JtwRTFW8TAk9zfx3vLrspz64wyfkDwurjvmiDt",
  "key22": "2Xp7EHMUVA8EXJbMm7kounw15g5tC5A2peB8YgntzwEfChWF4nu7uHMteEF6wnL5M8vuMmw1pUQszfMwQqTo4YHm",
  "key23": "hoMtdYivDxWDbGJHAcc4Vq31VCQ1z7mTorLKp1QzjvWxZbgSAWayuXfE7BqwUoJSjhZTDLsfjjfYGYHVzULAGAb",
  "key24": "5KF4drNzhzn6hXP8G4DxxoJKvUomdKYzwBASrqqwWfuN5Jrk8GgabExjzzQu84Vcj5rCf2zGPdphYRgR1cDsq6DR",
  "key25": "4hjxurSSdD1tStr9cmMbPy8LTqhFZTCtoHubWPhqURWe8qq15fLbLHbAPRJDEZym8PnwF6j98GEEfCoyr6qUAAwT",
  "key26": "56CpDMRy9yiRPUytpS5bWG8yQkyP2F7TAXLkAQq8THMV2vij6dtEpWTw2xZtyYXGBTR1vX6AuXYrP32Xrwiu4Wky",
  "key27": "4V9bmuWZUzUJouM7PMYfLfgdBqAWSprNj94ozajhoAfuYzPdcJXY1Kd1TMdP98ENsbhFZC1QUKKML6uFEvf4HqnA",
  "key28": "3kngPQGTkKYGxjFCBa4yynxW6ryqFdvRpd13Sht76fQJZAM4thbynhwBcFWCg5jHswVsKLjVUs2s1EAPAsknGMLk",
  "key29": "5m4ZCU7DEdaj7MsxmjwDaQzHjuEJAwcz2nCa3gwH1NDveF1upzwWfzoc1MAXfWuUWttWsyjF5Y9qwJjP9gqJweyD",
  "key30": "2dmgTrpYiTYqrG6nnMrmVjv1jpmsAQr211UpZbvRi7Kizdiy8GgXyjCEioc2HBgarJuopCCtvqy9QaBomT65weqG",
  "key31": "4CGW6xLFPrtntNMNBFjrNMpUikCscUqtbzQZCaGGMQwKbppbA5BeG5i77joUdPJDWLPznhWHRdQmMF2E7fFviUXM",
  "key32": "4aP4Eek1ck1xM11vzSBXiEuasgcT7vrNStyJqB1EXAp6t8TmTb9zj18C6BotMYU3B8a31DGXZrejuEf2bocAgHtU",
  "key33": "3ZLBpEobDMwrrYUNQaYhC6AeU64YJndXf3zc4bVXWr5NXWfXef2hua5KqiAH3To9UKQubg8po8MZVDCuNb7rt7Li",
  "key34": "67XmKeFdpqXPeDtS2SRXPwHtvBj6m7z8NggvW6GT4uuostwrEDb4qSf2KpP5tv5zDu2FWerihLgC9Mf9LoyWJemw",
  "key35": "3vEcujBsyquLbxveesb54BDTzZWfNm3zwnQ8QooQmmNkGdNraaKDTDkJmc5PaKcPzn1CPv6Wv16SM4C87F7adXdC",
  "key36": "2uPUgZWptA2yyXDm3qgZ3edWFMJnVZwKQLwCbCqYJ3kYPtJGLJcXdE7uawBYZfaNQRpJE3aApyPtPighxjDQ2JVK",
  "key37": "2qRzg3o9iMxUmy9d1NXkqPtSAbQYDGxNSFdEz2Kd2cBM6iHsFVvpNfo18pBAQLGE77ENp56aHx1bY9FZWpYW7TSC",
  "key38": "2Djq6rNj41EVermWSps97rAJZpuTyaadV3B3n2CnRrX9D66djHg69sUE5HKcuPBEcKftA2R3QbReTX2ZmaBmfP5z",
  "key39": "5NP12tt7ohqsM74XQtjzp64MHRmATdXmymfga3paDnQFcJJyu7b7LYCtjSW57T7XB2D7fPE7UBDUsXGqTYeVpksg",
  "key40": "4afz4WFuaPABLxceMXR2HzLwxyPn7ipvMNANoHuYdcxUhfBebf2DNrUSZKNkr3t6RCjZnhaq6baFUK3WXJjDf65Z",
  "key41": "3GpTdJJFfTY7GEFD3gU9DVYCvY4FdLEw8dx5ixbinYSxh8B9cSvHkDUKx8pNqfxgnpt8BuC3aeKLfo7YQpNk48qu"
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
