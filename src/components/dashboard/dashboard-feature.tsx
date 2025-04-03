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
    "2tYhchLUdYuPeSzw4Yu5o47kj45no6pBrBayiJMExnqkkSgZcqmTiHiA5nnQg9ycWPeSR8TAtvPMN2hrBPewsUm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HEN9PxzjVHpYvTY83r1Y59vmdGxb78kf81EASYXK8297CTjNg1VtVHJnPyAWoHcW512PcLiVLWrWYUVEJjhUnM9",
  "key1": "5h8AfqnqF4HSA5vniMFpG6UKhi6zGMStxH8XLswBbPSSVsc2ka1KUnJkz9MXhG15LLqomuQ5fyMoj4iP7oPaT9Lu",
  "key2": "2kQjtttmE58s5nigTNNmDJpX34Pp91Rd4MMU6rvEsskQDEpGvaJcPj6irS1nkuYJr9SGu7cd9pgemhUgZ6giPPYv",
  "key3": "2foAw1z5UFHsAt9eGu1dSBr63TJ7aYxqnVu6RrwZWa1JahEAD9wzAaLjDYyQwUwb4b5gVjM9eTynj8of7WCoLKG9",
  "key4": "5kKqcsTy1R9sskzwAFZYC56RZwUR68NwKudMjrHqgwtUGSKDg9QdBcWJwK5Ce65uPXBDp8XrZmCCEAgzA2AoG8fA",
  "key5": "3YXfgE7sm6sLYSVWLD3rxfUiRzhL8oNavHZeo3THgVkhVxk1EKFdjyTHMhvFGa9uXQZxeL8ASnUTBVAhiXWdtDDm",
  "key6": "3ya91X4WyZMDbt8t1ahUEVpwNcTwmvio2hwiWztszwStMgxUBDse4yaLApUGZyW1Gu6m1XMxgz1348zMEUSapg55",
  "key7": "EHqqYxs574SjivMaGP13JXwxgvTNcyycGHJjjj3UNg9T6hbE6oE7j7YVRfBe5RxLoBY4G6DzNKG7iC4ZE6YikGV",
  "key8": "2rWqN9EJ2yJCxFwm1kk2UZzyGN5gUAh5jz1RKckDHwg4eAUJ9wgLQtmj9uop3tSSLipSACozHrDgMnPWjnN69XDJ",
  "key9": "hydXm7NiMrYV1D7ymbXzXxYmp6PHenAnPZuD4FqV8LumcuEiWnGccfYPVsCFZMjLb3EsW6QH89haBDcEwniSfF7",
  "key10": "4MNRWCR2hFbh5Gj6R6FrTgqUMF84jvEtNg8DrgT8zfS1qEi4wZ8cTgSmvGiKa2txDkYg8Ej3Q9JdmCe3PD6tBYHk",
  "key11": "37WkvCchfw5wDReKjuioN7D47kcbjb36v9ns3yHJjda7sZavBqcJSDeCCPoeqoF93NTuKQsNxa3zz6mfjbEhXNcq",
  "key12": "3b1AbP8VpPzKKKP465gf8LFQREFrN5w8ALRYdkumSMu5jsa6kcySGiNoqmWG6pquMwzz2SLDsmiWXMaXx9sYqeGK",
  "key13": "43SKxdPN68vuJzafZ6GpB2VAW5YzsxgopEymra7mK4Q6FnhassKLpxHEgATek4Wue9Mn343kDqmZLjeq5qyRKZvE",
  "key14": "WPyb3tj9NRwT7Q3MsRPjfV3G79WEkdB31opFnP1jXgMUgt64Swuj9aggiJTvsvBdkzD55fVJ1GQuiUeqoHxkdBg",
  "key15": "3PKxS97hEGyXCbxL9qL7uuPHjXrrwngdHCE7UsDMuq5oD4oLiBoxjXzg2b9Nwd6igiybKArboqe1Q8sRY3oWCTkG",
  "key16": "2PDfVTAoh2omKew8cam1pGLphSqpPKTiqNazX6iw5YPzXEbp5TAs7XoqKgsdw465dqcp11oRviSXn84eU4FffNSL",
  "key17": "5DzjC96AgFAxRgJBM31JzqEhZwhGSdrwyY1fZ1jc73k2xMtC836DZw7GQz6v6qPssSBU7GAAjdCYGTJxYVsAULjU",
  "key18": "4hf26TFCk5HaXFm4jNSzLksn7fSSMdzFjcTHbCV7GT4CngXtDM9UrwL1s2PAUfJLkanxCYQEbWYoTrNRtW9YZVg",
  "key19": "2xHYiyAnHXYZcZtCcxevD4AcZF6fiXfzTDkqhN5kddHAgQ7BeuMh3a2VnrJoSaQModp222hBQkuFbhMqCmqBCFTR",
  "key20": "KCVDPvVE3dgjm24MML6tkWAUZDxLgCQWxsbz7MJWuXKPfJxNKpxyfvhEHe9HrED23MwrxrAjaVwnA56cMiw54RZ",
  "key21": "Fu5ubz9kpM3MZgqkL1zbdYgBseto8xzSV9t26qq5zKKsVLgUL8MuMtFgVgmeoWRtd9rssbS4VqZ2M4TabErhFqc",
  "key22": "48J8wYgCcAmFpyckh7xFLWJWTJE4N4uM1iogswWBhVsBC6bufdAB9of4w56G2MzxK9HQKkrUSESVvN5HC7S8jXBu",
  "key23": "3NQU1iH58UKt1mAv4bb9jUHz9oPdtjAW817rZmeyMYiPhZ4gAaGtYocfe3ZcH4pmBX5Ew2UEr48uKABaoE1XitWw",
  "key24": "QaXe3txnckJWknXB7W2W4e2YoWYTJwvuRQwspkB2PSkCWhDTRBvKaA1Ln9FtU1rufMtc8hbYQQBEc4h8N7JFgFj",
  "key25": "3ydFcN7DvLCwaPrH2EQEW56Nn3df5UeVFWkjaRuzu2Hs8apoyXcirE1VR5h9YQJKoBGMXrx6kM5HCwrAq1UyGuzy",
  "key26": "3mZCNB7JPXAqHSANq2j2Wi7tn8svYciinivxaFmKvQ1PG2bQZk2QmAt3HaFtrcwX8odfb92wtHDgUdDQdQqyXume",
  "key27": "5Dn7XjkkL5TgxTFPABhWEnVUPPjsYe6RgHm9dtRdVDfhK3WbN17xMscRdZNkcdtW3d2FMESjTmoS8DzU1Nx31WEz",
  "key28": "2BKENNRj59RJmo8FvF7T8HZAD5uvBrQ2mrMmB2gsWjRXMAzEuwsEfSPS76FswYUBVw7LZpuJZy5dPmmrudwhcig1",
  "key29": "62ufSeaJyTFn17v8JN4G35iFzXWk9hx2V6cg2rcVENM1S8QA4Y1aYBnABquyb8GgZBiueT9r1GPB2kMmqXym3vxi",
  "key30": "5Qzc5egNN3pVeQsSPPwUiWjHSdVVxkKusXDRJ88diGw9UHHnNwcKDS1ykqkVGKEPouTMomqQTnKGwTaYwbHfeD1R",
  "key31": "2jVX7D8K6oojruT5PoLBGDAw27XyfPQBm4wtrDa6jPioFW2tb6XgnC8899TxwHoPMi5xjGnBzPa6vSxCvHPa7KAd",
  "key32": "6vJcGwuLp4EqBGnxCXDWrt2Bt6ZoGeC5KwiVyfJSLmJbPx78NT3Tndqg3pF5HQZK7qJrY4SY4qVMwqTbzDMiX3q",
  "key33": "4KRyw2V8EEJKcjDLEZdntPHd5ptgtEXAPzG3epQJFkyNGSQdn5efxiPmV61KFqhDxwMzC8neS6Wgi3estg5CYUkk",
  "key34": "5SKtA9HGieTcbesgCCNyUVGP4bt1BhPCUYagJjfxZhuTy16SafaDy78cAbn3gfRXWRQqEbqe7NwU5w8Xrro7C4B2",
  "key35": "5XpjNMjLwaUe9Dy4YjQS2Vm5gLtQXQv6uhXmpnXHAeyCJtQcZzeuP759daBHbofjL7ZyZjFFvvjoHrAT91AonRJe",
  "key36": "5WqwPbHcsM1jGrfegYKveBgAXCzxFUZL7wxjkZiyb8LLhbSZXhuxceFPStCDgqTtJjmJcPbiFQJWeNr7jUjSrv8"
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
