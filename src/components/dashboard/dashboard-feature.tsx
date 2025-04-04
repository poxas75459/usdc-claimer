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
    "5MYGsQFHZmX9aXicfA2gjiCzVkHmUhZ37JxvazhVAcriouevb9a7ct81AJbo3ebEiGWQGU4M7SoJqm1ZoAGdEQpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c8gG1hy52V8ZVhCDucDtNh9MkkNd8LQi8ryxcEJ6YLWLEs32eBB9kbnUAVNEhNsN6PQjKpbHCkLYyomEiZwwiVB",
  "key1": "5mAcrM8LC2kVzuymqGg6VtY6PrtL7RaEBQLEjJT1hAmgBKhGS87KbWqfDGuq5T67ve8RajVGAsdzy5FpHbDoi1tR",
  "key2": "3y1qAmCor9d7s3obxKpuKWLVtYGfgGKMUxYNjbd1PLegww2y9oYeFD1dpLHetr26prSLeK7vHgYnmSBALpij6wVr",
  "key3": "33NAMgAEXMJkxWm8mw3yhQ8r2yhAd5VaCDfjVgB6FrYBeZxk1Xff4WdBi1DAJQmasbp3A6Ps2c5xwJxEQiWwJcYe",
  "key4": "2jurRTMvWgpQ5eTcunLAh4fJq1XoQo6SDp3hAnLwa3vZKJfiSPx1E7yqRBHBYH9iUckxsEe2CEQGJpzxAAU5rnHe",
  "key5": "4KUoLsy9wRKygowoooRcqKVwZUBZ1TuDgSPKBMsLzo5CTo5w24RzqVDEdqSaDseNdD913boBZ2SpkgCsukrSusLb",
  "key6": "36KyJoNCBSVG1FbL8Sj9Z3cmEQAauhEwksEUeSz3uWUDXe7LbA7JRHpQhDD5noxa8KVKCw863sMYnJobZdYHHTZg",
  "key7": "DioYNMrYGvMm32wfWRtzGZZQh2QACrY28yVvgz5qdorEG1EsTEhzUJc198kPJEwsz3JNPUaXiTk3w18YKAy2p9k",
  "key8": "GJZZRK6RkxxNjdnuX2DFj6SqjrMruoctkgs9g361F6jngq5EQ3GMNhDr11faUdhagyZQycXuaohrDL1FGQb3Npr",
  "key9": "5D9CyJwutx2LEdSU9r7y44J6iUfCXEizgKxHKscF4QTa1avgPTAhKVAUsynhnBqNQdFP6Xk6Mf2sjftXoVEt2xR9",
  "key10": "2D7hmbpvJJV9fk6mnbw45ePpze3uxLnszcDjLT8VpBY4WU4TbejX2VbVKXWPCUXQx98qXsr7jwkGxq2QsiYh8GMT",
  "key11": "RU8YNtq1FwPereUqoqQJrRZuVUE3QReGneQmLbe1sdCzSCpNRVrvdazmJFMt1cXELLTSWydrUsXuB7wwHdtPFB9",
  "key12": "4wq2sAfCsvb8Zn8euPcbmeQmjjYVwPyrA9WEZ4Fb4SFWxCVZDvYfrz7dzjUoPyv4ef1vE4D4A9SsPuMgXfRsm7Wf",
  "key13": "3pqUb6Pr6pfcnc1atL6nsJ2CbH7yRuxgb9JK2oVHtXz1H79diM7t3vD6oEMiP5tEgZvWrnhYis1WtURTdUdaQ2XY",
  "key14": "5rvX7KLQtKi1diByp5K97qMeUxwNweeyxhAJrcDSjKT5sZmxoDfCDchdNCDik3UurGWzcQxNreNsZCpewXHqHadQ",
  "key15": "4GRxTTTwj7e58FzReFxLcU92RT8Y4aqiM8ZNs8MuPHBKRLEKhWNCWgpiA24yYRMyRhDDT7XzBJYkhXdxVDppGubQ",
  "key16": "2vQ8BGeMuH5gAjeV3eJ1CW3nUBRbcJNpJHiZsUQQ1RMbEaHMPfMNQooP3no31kpcqrXejFBCBBtGQJChHFNiJTHD",
  "key17": "3Vf6nJojri2cnMkiyK3x6m2vaeyb36buoASbuVsewGS3CBWsTVjYJdGZVPb6GSAB1FgMkoqpnXZVLDs8LE2mBaHy",
  "key18": "kx8U81Lfis4BJksTyhmrcVs8jwz6BvRWf93ikKS5RDpKp6HS6aeHPpdKV3T4KtvNZEHhjqEkduPiNyhnbiDd7wk",
  "key19": "5yEFm4NsQJb5JKL4FvgW78iZNikhKTHdiF3PDwWUErs6HA1GFxgkCJfRqBduBDmVXYSHQF1Nb2FE26UvR3DLfedx",
  "key20": "4smziBpGKeNGVCuopjWhgkpkvhA5ezzCMcXK7kxh7qa5gTk8RAmZb2JH2pZZ3bXGTyt4P8k5hQ6A6mDBcZnYSWaK",
  "key21": "5KCzP5LGdqy91szkFyTbMvgBjsVRLu7K93PppY7yCCPfUfbZj6BVksuLstjQdNAPEreDrRV6vrVcHLtYpA1mXtBf",
  "key22": "4bYF6usiwnq8CDELj8JGZyhFcckK6mPKhZzsT6QzgsMUsQpeSn8kuyBCpvNbgbFHqL4vGQXJqNaZ3YZbgDdJfiK4",
  "key23": "5qEZustgf6udiRFB85qdmgAmJgSj2EvB3mcJPpS7W8s1XNbDewvLgzzHfTsK365Ti4uyuKi2gY3FbY36fJNc5nup",
  "key24": "3f9eLiuErsN8rrXNjXazgvQLormwB3iFn7NPHRP6dDC7cQ4PkZccGtsvAtSW7znL6HKW6LTPTt1RbkmXT3Epyx8q",
  "key25": "5Jt54YRHgGcKv1GKrGe7rZyErQh38BgUrEVWfTafJPbBqHzSgmR2YDDdhv9rp2tn8EYJqxAghoViC1KPrWJ2jP4T",
  "key26": "fy8h3VpL4CWdUvctZDjDJgujTYKmktBm4Uzk2izeyPFCDucwRUXxozjx48RWBA3rLtMeRENHrFL9dxT9vFRJ8qg",
  "key27": "294kMUkaqVztY9WRyCFGVHYVVYaByFSGLrN7EQPpVv7JBKTjG3hZZqxRd69T4qgJjAX1LzNvsrZTsMnNfUWSdhxy",
  "key28": "3oJMoA9aeZFZJkERbz56EagLopCEctvpyBjgFjGhFUp2YYyx59YzFPneDb63pgvBWsE11K4boATyrHEmcYMs6VCo",
  "key29": "2wfCrX5ThdfGZ5HfTi9nD5GjnRHxu9oRFWj4hV8kuZgcARaFTpAy8XP3TauK3CCn3JFnfBRekSNFPEbSa7BgPS7v",
  "key30": "4CiBHuMJojMQ43QJxvDtffbeZWRvuKeKFrXiP5JKxMsBTiU9KKpJjetjm518ne856CrccoBVtAYeXE5cL3zruEjG",
  "key31": "3bWHxZ9L6LwWbRsfnPyty6fCtWjHvPN6JarWy21vKBdpL5do27nfVS33csMxZb6vTS2Ww8dP65Vqnb1pCDo9Ghc",
  "key32": "4RJ7xALb8fDcvbrPESLppd7jNVv8KKY4GE381WweQiegMoakHmgHaftvDvehB7eAGKHHjfuHCQjMtMzFyxQtv3R",
  "key33": "4Zuv3yiotDXGPnac9xp5EHQTjiDaxh1UsA68pJiUzj346NmGxEkb1KcV4nrASYWkm4ginNp94SG7v62UbHEgqnZv",
  "key34": "4mnenXNGiAAu9HNTWM47Sto4wvjjiwD8zHfYuJpzqmJLbt1hVpRGLD3dwnKum5J7Gqe62VWRyVFi6j1CwSaPkVns",
  "key35": "5pXPQqZZGxWGzGC8UAw1c52xwQNnCuv7RF5YCM2NsV8jUVQ2ppaR2fzsCiupKbk6Jmoep3PbLxMTRZkpb5X6qMND",
  "key36": "5xGc5dnwD7WvukRFescjAC6qzGHBYuJG5ivSd2ARTiddf3NBxmYsJygxk5NCBQEMsWSzvsxG9rcrfnSPoFZLAz29",
  "key37": "5xMyjmwE6z6qJCxDDPQRgDgu12vC6NSXtkJHehyQ2fDWEq9pSkbJYkYLFQ6NqM7m5kDF8rqB19DU7VQ792d7qREx",
  "key38": "5jGSH2oJJ96Uf132KQjhwNfpB7DMk91M92qM8bxaP4yyXw8eHi5BDkEFNuHLBydNasewJvBdFLaY4daHL161ua3a",
  "key39": "5PjDXqeEEb1NWLnQXxaB6GZPjzrsZZUSGbBkiEuroE7E8C1paqn7Spaouoqacu3m1DUCoNnnviCAjhVTzy5JB8LB",
  "key40": "4RRxTCY3R2YocRwzFo6VfhZQWzjD2PmSo84nVHqrAqv2eA2qFQtfQ1mrwuVi7RLCfdUwY2amyXJysYzLjoThctdx",
  "key41": "63Abfrp9Q5ibHMmm6yxDzvhTsDGTcuQmcfM3qYz3ddf4P9FD8zT6vJRnopEqq4TzaGf2B3wGXsTPRepEdLapnne7",
  "key42": "3tm1QnotbanuF8Pb5Z69zRpREZzgW5i9ExRvsnE5T6tafVkvrwLBi6SYaLZf7Y6NerjdsDyP9gJbaatns89zDYWk",
  "key43": "4hD8ArHQTmuXVYh55eCzt6A1ApKPwLvLNfB1UQ62BkUXAxoQ9gpcGNKGk9BjP83LTRC4Xk1TN2ntHpfSiZT2nT64",
  "key44": "tg75RjFshrjki2RdeUFThecvRHwwjVuAXrz46zzeDeXt9bcfbEhtuk3iTVxDfyjKkMZeJtxHKfJRrRJLSKCm8H2",
  "key45": "K6WoDVVrJ7CvZqsnrf2WSmb6YK2DbJvWxNU7Wc9L3K7zBVbdX2wuqrKHZtSnxtRQhcrd1Jc8WM3kUBz7zPSV4XE"
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
