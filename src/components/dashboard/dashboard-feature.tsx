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
    "A13oTjQiZnsHf2BoQfNQPKhXMt5FCmtpG49cr8upQ1dAnJD69QCesGVC2U7zmVfTdu7iWYwXoVYavYqgwYjb86R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43x9p8t5d8QAYBndzDy2fAZF863ni33yuxqWT2Ck3KitcnxvjpBhDSWsToD6FUAr2iaHzQERpxWU9Vni1X9QdWro",
  "key1": "CBd8J5HYtutiVNaDZeKpqeF54WAx2BMQpH6D1qY6sA1J927eGBUnyEtaWKJocsB17ZBzqmMuwAFpfsw3fCKhoKo",
  "key2": "5qpPJtpfHzPbz7GU8sorct7UaoGexLzfguss3wrdHRSnjGm1FxbhxZZkti4W8TsqeLAF76LRruusvgybUhsM9tdD",
  "key3": "mLBFWbiE1LXSBeDng7NqPpkjqit1fGuysW4CqM1cL4Gis7X3HxzzxZuDbV21UPm2g9QBdzggyfsoVNWbxXyy4ez",
  "key4": "F2xdbtZxCy17ZphdeBgEaZjox2dUssvXDg89wkaFh5jvZZAKDPmcnoLSaY6N5dV1M8BAgfwXg1pm12Uwmv8fq5u",
  "key5": "2vr4q2bj4KD2f3uacqM9pC1XACtpQ3p5pUV3uo7dasMVz1XFSQgQVNsBTE8JpJ4F3QBg6fhbgTh7LV5c91pq9bkF",
  "key6": "4Yaayhx4AMzNeHg2sL855ZFbNuyhxCaZf6Cb9Vp1S5oGhAvi4Mi26jKJ5P3wJHPbP5GigwRcqknVdmaNU6GsQK4C",
  "key7": "2GZ1cWZVSpB16viUBy3yfMzo7JiZJk7vhi71YNAiKsriC3PRgnb2QCKSMYDF31GdbF2RDnVNB6LU1bxhfR7zSYt3",
  "key8": "58g21taw3qnqEx7JyiFS7JrSbriKhRsdH4HpLAo9RN6UvHUL77dEWfioyoagYFjXYsz34xoxkjLXLNRMMwJCoNX5",
  "key9": "3YCYA7XpdTrNUGuseBuiTUhpGmMdsqeffWHBm2o9CQQSro5h9FAjv8g4G5DggSk8C2LHjXjn9AnG9LqKXjkNJ2mT",
  "key10": "3Peu9WRQhaCzsj8bcU7PLJR6rVDtmC6e5ZanaAxmT5yBk1JaTy63XkhuvcjomRohRPxdCkb1S3xkKNaLHf7Xe8Yp",
  "key11": "51xCADXgEBiAKEVChocMkyKt11hDhFWcqyjGW5m6mZ9hksVNC6J7J9NacN7RqBCoWo6psdMH9S5ddrkmseZzQVJJ",
  "key12": "37yiLjRau23qPaezmuBQyrfZ5nEzNh8tsiRa67zwxzBwCh8eEKziaow773aXGmq196kFKiM5WHmLqXN4Wy5zJ8Mh",
  "key13": "2CJ4HjZC5RpVsMaqPoByzjyfyCYZUrse9SvHwbdRLqKTCqfjoEnXPptDGRwju5e2WEwcnASvVreVdpHMAqF5pEa8",
  "key14": "nBawtqQCx5jQLMtyhqp8FZHtq29MpvFT5tnhJRsbnQGVopjxoQ2HbKTUeMnZhEa1Dd1bnMSE7B5QXCYzBGjvYsx",
  "key15": "3vprxjyvMjG4bya7qBpXNTEH2Au7X69ABrcrzKbJ3hTEUrA5wJJ1MUGhztKSkZJzryAEzDVpvpfqYyJz8e6srr3c",
  "key16": "5fGCQncoHnpeH7KE92FHpNNtvNEfFNNh8KZU3hEwPXgxxCctiDNx3YiMytevsz1Np9Xc68ihcUtYiKzNPAHRHrxu",
  "key17": "53RN4KTv9i1ahZvMG6t4dYPwPmsCyrg6MADmTXJnHEAjVc6bgYaM6iF9JC65GRmKVudQ7yY1tt9sVa8Fk2XA1est",
  "key18": "2qXFUe2ujgjPqsDpb9VKyZaTSQzn49bL8fq6RyrxhSENuLXS5tMitpafLYVu4ujcs1EYPkDzm2xkjNwoG7fAguaK",
  "key19": "4YADZQRdzBTZc1zS7PNBv9w3PS65QHSgbX8BRWzjcGtCidHmot4aev14Ady5BU9NAr9bascKPzPQ9sJqQwz2qh7T",
  "key20": "4X51uJePFjYxeVpBnzC8MwKwn7PLkP7ibZV5pP9PgRqBqWKnw7eFiMFzcm1xZmC3y8FtGBjq2qSyjZHYPLrHPLnu",
  "key21": "GdUgbBNBYzootxu4DtauAPvThgmyJ2Jwy3FJbv3bGGZBvsj3HDstzbaHNrgd4rjQM3M5C47GZv2fYRzxXG8jGZX",
  "key22": "5TBjMjUPZGUZmLEt9v6PX6WHenbGthyjnr1L4cDaBFubVwCQZe2k7nyDa2viN5296Z5edKwtgJgo27j7G4MTUxjC",
  "key23": "62DcfBbw9NNeh4s61Qj6dpfnLsMhk7EccqRVvFrXLgB4GcXG4r6T6XF4YMuRZiCecWaABXqBTpnAEaD9EjhceGAu",
  "key24": "3QoRQT7cGT9PTHVYGorPnwZr6S34AiUmR7pcyYYJsYH3XepUcEPvDDXpyGhRLXugamBn7i5eHsUH3ECUe825ZjSY",
  "key25": "634YomKMrzEeViDXDbgMtoZwin6MjuGkt6f9HdyhF5uFjzKiqmQ1g5MSGiqxUHt5yMYMtyoq9EGbqiVqy3g8hUac",
  "key26": "4kdN8zEjkDpL7SHZcBuvKyM6Ly3dfRrwTpGLPQoMB1mXzbqVpbL1HbxU5JzkDFkN1M2zPegS58CTSvRvx5dSUh97",
  "key27": "64ryYuMntAUMZMtHvbihRr7T4KKqDh5bDPj7DZNEGsv93EdsFdY1Z1i55fXuPMCE4sGD8RPKTPrG97pJ8Tm8rRrt",
  "key28": "2yxBAPB3HL3zDeg5a5gj5pNQWFxV1S4BNQu8ruX3ZbqUzRNDJ5BUgSSjfqkXViL3bWfxasT9SkP59swq6PiwoS3m",
  "key29": "63VdN5YC97QUB4WnEe5QNhosC2vHyjCWMSwMeG6zunYVzLmC6Q9KYacHRm3We8rRdoQqTVCN1yBrh5zvbMZrn8YT",
  "key30": "2HVt96BZwifMVvz7jSn4kgHVm4Be8TK1yCEp9fntxD9SPre8FBkGikzePn8tsu7Si5931exHUWcMqftYM2uSVnoo",
  "key31": "4t9PzFEou4eQjpYGwF7dJgVpx9KSGaz81YwswWZ6vfZB8jao13KwhE4NWKHhsiVDkrisZiH5GecDrP4QA9KL7rZa",
  "key32": "3FU5BuTcJJSAA2TkkZRwcRN4cyPyqaWdtYegTBmtjK7MS1Dg25nusomCe8Qou2aWjtNDSwV8uWsGi7UsWRXmd2VB",
  "key33": "3Xw142sKAqfzPSpiYMs23EBzbXnqLrMikAJrPAYfNwwF7rxFSEBKLqtbrk6ucmwhEH2jNKTQCj9hUgEBmQgP7BdD",
  "key34": "3bDx19EQ7MXWVHK4QUbTviebXFUJSewNd4L6cMJAZxcqJKFrBRMw9KfNwgTJkkbUuVc3hXUhDT7thX7dN1uRiKzb",
  "key35": "4SHB4NPpucpRXKbbx7ZNN9P8XRV25dB2UPjvYdp9zi1yucayPEcV2yGoyzPP1fEHTmBnwnpQuLnCpiPGLnL9f8Wt",
  "key36": "4ueQY95cfFtA7auhDwyK2BzP7a3dD2MXggYGvyAEw6sm47HgWTvCN7ococVGSndhbHg7P1PiaJnWtGzRfXGqnhju",
  "key37": "29qtFgWi4nY3R6Ytzx2Cmk3vLDuybqY9FaqY6Ty7CE2RdDg4QEJG8QR4SCgt5M45dKS32abuanfbfRKaNWXyazRV",
  "key38": "5mFwT5mGVzCXm2PSwvKNHQAgTc9RQMvCBygyiyJQLyWwUd3vkVVda8qqr9Ls7AT5nVfDoJhkf6JhSD5d789HjSKf",
  "key39": "5Reg2HVM7kjVLep5ipE9j3SiBektEhqjkxUcsmbAXd6p21aoRmEm39dmd2S8ihhQekdBQmh2R4fY3Cb1W8Gb83Jv",
  "key40": "4LGGj12reSLaJWwUU9RzoEkaY4QVJK6krssTDkHjp79Gk92zvcFgpnTkTkMHux3LtcXTLj4gqGc3GEe1MpQeRwiU",
  "key41": "3HsPUnYcWL1Udyt6c5jmc7sSNqtmzy9JZMN9ZCJM4exTyYa7RqRZMWKrt1vGsp4Z7tCrXckpyPFWD8SepMC3PcQj",
  "key42": "4sHTiSv8kAwK4sMRnHueMRGgjsDQJzHPp2ey66ubhdxmSj9WMEuGVjv432qi4SbY7yHFQ3kto3kTthEjdEPibi1U",
  "key43": "fw4aQZNtpPU6xnkUSWXsFiJYStrj9MnxjJiwCeAnicRExCuEuXUbBmBnkxESn713LsLSntSb7jdrJZ8BqEv2B2c",
  "key44": "4jCkcbtubZQXwkELfdFajxY72Ft3kDjcECvfj6oSj2tWH3XA9YgtkpP1RoD82yx5sKaTuBLms2ZjxJNVAJvDmK64"
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
