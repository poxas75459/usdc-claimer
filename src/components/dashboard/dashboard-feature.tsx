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
    "4E5m4NYE8fH1NvTXzCjzfYEiArAzJL7kzG1vXBji2zU9bbZ8q2MdRGuZ2D4gXEKHzGQPMP5TMjUE38Yw4xvfrzZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GbM97sMyMbivTzzP3GukKU7TsdoM61sV3i3gcS8D8ZP6UJy6ZrtyDouW35kjYtn9GBpAmHZhYeqjf2Fr75b7oiF",
  "key1": "5JfJw471uniUqXJDrvKwaSev8PkdQU1t21hN9Pfo9He83yy1n5jdYxswwQP1Zg69ZmKjpy7YJAunNKrFcAwkPT1g",
  "key2": "422kSNw3GwWTL2WQWDrisaQz9o82nHivERJaQbG4e75rHpxjRzAX4fPWqScAtNrfga9HZzEKiGWTdmNgqyJBKt9t",
  "key3": "127hpUAD8ZCgo5ZRPwKr9HBMFWRuMQtnRnBkqbdhzfp4mZ2C7ev2dQyzEwrRJjv2TRQqCkKHBJv61hfmtSXRvVjU",
  "key4": "4df8m7nmDakSah8K4Fjq8yA5icgoqpeHEoLU3XsCz1pSUVNeTnQETwE9di1yXhQmBSRFj4R1wAKUo7J7cW1D6uqZ",
  "key5": "55uP8AHPFCSjWsZ3reekaH67f3vZLFWCJV3UjCKA6kckaRoqzZa6mBPhVSZFCkmepJCErxotjQAR2vocSGMRLuZw",
  "key6": "591HrvBk1phjjhQGQfFdVVb3vAPFJCyxE1zgRSX1hVX2PJm2x4xykMwBbELN5jaa5fmtoSiN9DndhFyktZGadBee",
  "key7": "4yqCzevP6oQRQGiDnnZv6wFqAf3VMWpeufXkxhXyTcCLEiJaycfw2LUtogC4x3wEU7KDFSor2YdLGoEsbc36iVJT",
  "key8": "vDjLjM5ZF8HuN9jKRNBusVTo19ZeNH9BbsagyCnAJQSMFjg4XSEdkVLLDotm1ssRbwA2UtyrMjphLGrvmK21BzR",
  "key9": "2R9KfaNKq71ttpeufpHh1YB4JGCutcYXn8CqaDGowJy4PbCBkunJN1FBRLWY46L1vukkXjEg3awgFgQzjdiA3ddz",
  "key10": "SwVa2XXhtyNtLnrTrx88xqZYhuZihGS8gk2tMc5TvUTZY27y8UMbSXJeHT5yvxMEMi9jsEbvGQUELYbzxTmWUN1",
  "key11": "32fSBrEW2nsNbv3g2cfAXoP7qpWaU2UCSYFgEvB6vi7xpZRwocv4WpWC3sJF5tacWK9cesftQ6sS1FnC7vZpLYBh",
  "key12": "3ZzVjgrexwsUrxwKF2y2g3VJfExgHysfSaonYuh3oYaPKH4DH6qEX1nz1B6Sv3ZAywsTqemj8h1VmRGxdWkz7xib",
  "key13": "NQHYxW7b9YcYCpnZzhEE79eVZ23AvXAxkbnbD1rw3MwHg26CcCgCrtFZr3Z3JssTk751qV5UhHvzNHuoAERZmxo",
  "key14": "4WCYkjnyrXs9aGXkyvJBV7anv7AP4GgHmw4fSKhdYp4ZR7WX2rqkx4bTxUZ8upBThTVTyfk8gUaA6HebpWBQ5jYV",
  "key15": "3rBrEesy8oaThjBfjAWggfJkEj33qNVEmhxjP6Dm2LFKrYoo4dK51X46PAbBhXrrQ5EgAqcP62TnY4QtLRyffQwg",
  "key16": "37nM9yEsKv1hcETb5G3AZ9i8b81t78A6FLKc4cn56h1vnqVdYrjDsqWWM64txdQkGCbNn1mGTBMqxxVXD3w27xQH",
  "key17": "5nmJhh2umV2pbCgvBcDbceHEg5FWjL35B59Hb4aoStqGAphcqJuuaLSpzvsahRNXVp4PExtjsjcQPX7hWvTLGqKh",
  "key18": "5rp8MZYANKBpiQASgmPGUzBy4Apq2i6eAV37mTRVioBFkyBtcuyqaaMnrgss6dZxHzAJJCiV1XuhFxRo2cXrwmon",
  "key19": "uGa3zv1XtktxBmmVbim85jHJx9fRboEC6PZwyeTHferwEVAqpGTGeeYiMxTG9FSki6BG9bWHyx2VhQcyPYAgxNQ",
  "key20": "542WVfkYc2c3kDanoSCvpgipoHhkvcSq211B8ijiQBd9HKRmnB6AW5TqXxHFQ7pimnuaYPbaiWWnJghpHMKnXYKx",
  "key21": "ehGJhu8fCv18ARPTaYdJYigZRQHVZ3GBaaP5v6yYcF88kjo27yhrUEMNN7gYyTQa5cWG43YszDToxDvHxjm4Ncm",
  "key22": "tvsiwmH4Pu7tBPgZLYoV95BQRPzgnSyuhGUhHy8YR2ZGxKyZfiSyYLXczU2yf7po5ZFrehDvtaBuZ8Bg266aXdc",
  "key23": "5oaqVKoT9Qn9AKdTAfPAd9pTFMCztg9S9KeXZ4EA39i9mU4K4aekkgQN5SfBbdoWcKvtCJcvsGQZNas7AjNEekMA",
  "key24": "uRUXmakjznPQLW54zN5tWexQtm52ChmSt8A4h1YQNQvg9Vd6qMqyEMEsPVXDf6ShCZdU9FNtpMzgwSGpgHV2iEb",
  "key25": "4AbefhEDkP5quLqh3y7jsG6KodaHYwenhVdXfSXQNxZDHSCDaCht26gAuaxsD9rsq55oCXYGeoQVqkJ5dkqWPrr7",
  "key26": "3W9tTNvFXxXQBbTmnqkVCmb8qovGe9ztKkNJFsbA9ms2MdwYA6JpSHjaSBPaMhAM1Y6T1tr3LN3XAZY2K3ewS2GH",
  "key27": "5b6PqD47NzyFd9YjUTmu4ZHyCLdJw11sxKycckmLin4Hj4AnG8S5Ywnsyru6tDKA8v4GkxLCNw7pXk3gB7Zxdvjh",
  "key28": "LpfC1Hzc5Thii9kQK3FU9rUEc8rkV6tEs4zvMaPGmfrQwLcLVn5ezrUwShcV5AFQGPnvaFXXufFhvHUrpSR7ifA",
  "key29": "3KfqmdeDdeoBX1VHYscr9tnamDNQTeZ7u2PYxNNUNax4FfLUtSsCfUUGVb2Btgk83PALBKEyoFasjfQUHd9Ms4TT",
  "key30": "2xSY7jUSfgyVHfT4icxeqBL41MT529ESqC8SZdgTrqqRAAJNqeB2s7Cg5nBvC1t6TVQeuxQQGi7RJswDYpJkJrdA",
  "key31": "3PxgiLv9jXoPR1xvTNSqiKaZZ8JqHm7csfGeJaPwaZa3Knbykc4dTE5WPzMPeQKi8FSumrbZMvTCwBtUEvL2fumx",
  "key32": "5yu4UmrwXr5vciSmu85SUetmsJVZVtRHfNQxktLZkhpqB59fDRyPRaWswdeiPTjJW6Fq7BSCjRufkkTNdgM7GKf6",
  "key33": "26vUsUTfv8J92FkQjEGXf4r2mcf3UUHKWSZEVmcGKVqqmM2VrTGhX34xdVpduF12xW4L57mQuBZTtkvDdWpzszue",
  "key34": "3V8TJNEU5GevPvXhkfjSZFh5MJKYDBN5XWrpZu8nDS8RXWcjVZTfq9LWh6Bab11jhYjYf4NZF574LJPvJdiQDTLJ"
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
