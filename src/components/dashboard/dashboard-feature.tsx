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
    "2LbpD8NUsuX5gHB4yjSwKHP5nnz1qbJkyDGaCNMDT4trVrTBbMQLYUTwBxL1jcRhkwLc9BFmJ6FwwyTjDLSWc5vs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27JXiFqNL5wM2gm2JdYfNBaqKkNrENac9C8XL7dxv6heDgjDCjWiWwQheKzXUz3KD1AfX96qpj47LyENNv8cwncA",
  "key1": "5TK1mwTbzH1R5L727UgWrLhNGMKW1kHyAXL6hXzNMAuM5GpWcS64AZe7rYp1srPkJLM2ado4wpSP5zsoptuA6M4s",
  "key2": "492J4XomZtjqwqSu6yjtBxdC7vX11WNP9KrtZR5UJgbEgRhrhXWnV1yoAXoHqListcCaxTJWTAY4nNtW1VwjTmku",
  "key3": "4YWDxr8vpe5dcx36smj86Qx7fho5WD9joe2XVJ7g6ustAtiBgKLr2JX45Rr6cLL4XZG7rx3WrQxktQFZHsJRRcKX",
  "key4": "jeAmxWcU6P8VtRuX4TjSoL7G3hD2SigvwjWrfpAc8bMpHaCZiVpawoUd3M3saqjPVj6Yw85HhkKurkLfdVZdXQk",
  "key5": "3SoFfXaHh71wuSyBNroubaGaE6xwES7U21Mw2cLcVPffStPJb1sy3WbYfEV3EK6FrjiebT9bpqyJtqsydvK8xJSE",
  "key6": "5PejtPVZJnRQNbkipVa1esX1D878dMZiQ4tAhseT1AW3iPBe8F3A6WVWcUrL9VSeSkzy47muwSw9pMndYuM5jE66",
  "key7": "2RANGrZnj4ZGaEqgQMx5z2KDNT9S3eGAu2qJ2xMh7KqC5oWs9NaeAzp5pjYC1EqgXUr5zn5Xq1f9j79u1ovrYe3f",
  "key8": "59LHgJ618dgoEyJaeM9nDUwgj2gvgEyebG8KziSXRkudc7YdMdbpG9z49e4Bn6E2h9KadwDpRdENDwRm2jsecZik",
  "key9": "3Tr9W3jhf5CQhdv1E4YQCoAZKYJnevAM5ZF53ZGnYaBgB9FfAchbjcHAsTL3yVGSZuaKoqUDSbpryrA5RJKuHC81",
  "key10": "2MxEYymir49FDGHADqxeGyFj856UJuCZ7HV4h3eiAA7f2uVc9LY5g6vXUpP1TGBYpBig6TMbFH3MsZg67RaCJb6j",
  "key11": "64KpPiEywXMPczwrXHvbyvW5yypqw4HutFRmVaW5Xif9GPHyUs7JqCPXs3G2Q4qFRp2uyyWxK2YbAcdJqFU6SYhb",
  "key12": "4B5CZgWZMYrs8ptVZBf3Jq3qsDX9ojmxzEuEFvptLmEs1aFXrpPksPkrf8Lc5P1gzNpi2De1bui4D1piCpbjgSKU",
  "key13": "7UXZW2zCceUZfenNKMdF8XogChWYcACdt6xmGCNtZXUuAnFysApVpPqqgRtNhTH1jyP1UmXFowRpgiKUfUanP2b",
  "key14": "45UMQkBdTT8diFKJYFpvAuKVPiD9EFxVr1CgA9Cbn7uNbEDtvh9JW8Cfqqk6ZFPVm9UQhhCvZ7XFWd5JqPnjmM7r",
  "key15": "2peZRhbE7VfayZPqNnWz2QuM6Kjkns4Crse4CsnCbcgYHVFXTyqHWD5t6TKHaSSR3ZKpaTNKN9kusy53kBVYfa9d",
  "key16": "3HWNHdwSNVUa4vnHi5oNgsZ18fNQPXHQNkScB6MpRmp5U6hpjFzNRv4ALM5HN6PD6BWmx6rC1NQaDh1VYmfQzVx7",
  "key17": "4EBpu2L1pGVu3wh8KbrCnZBsQPm4hZQ2x9ejSMeWyFTHuqMYGY4rJV5NGtcuSmQ722Aif7XKkXxgB57bvw4h9fdq",
  "key18": "3vdWnLyEiUkJEfNzoMev9HAiQ1WvxugEQDyMXvhE1rjQz5omYUYsWXq4PDQvLzaA4885T7qpKjhDLcEx18Z92mxR",
  "key19": "3Pk4CtRhm2iVZxXdBEbr28APJBuWEwu9jRVLq8zdiQbdw4JFGYDkQzMW1znzsLwxhKeW14NGuPBcoxj1PS2q6jbF",
  "key20": "5ztueuzkmLd9kmYJLUpeMCyCmvmDjDsjuk6sj6u1Ly6vjWU4XV8oFMQBD67ehSTPtjBaJ19M2KQYCq7f3atTVJQs",
  "key21": "4LMnKhjtJe22H8H714ZrZZo35TBXsbaLgwx3zE898r7sMH62FCdao43kJM1DPBkb9dyXyQUxP9MRCHiwHKGUfATT",
  "key22": "5kVazeQJ1Mgm7NYdJ8Xrn1JUTvu2yFJkFt4akK4tHqnxztZLhmj6g3kkv3rWzThEtxtzcKqtk1CLQDnuVF4yeeKn",
  "key23": "59BtbAf3vHn3r8HdBNtn2e9JvA3NdaNBfzeHovkf6WAuaZSuFdJNdT6xdjMuFGqtumoq4AYAe3T32sjMVNwCUyFe",
  "key24": "3SaPEPN23WDgfUQQxF4S8Ssj8vRMdVBMMoghqwu8exJDjurrkhyrC93dWwqq7rYoJNRjkLAHpQyHodKZtr7pC4JL",
  "key25": "3eRYocRsYdLWp9NHLV4zRRkob5z5p8Ku9GeMWftS9NBxnZyv6NVoGYUqHunhPPdjbq74tAUrpb7y6M4PnxsTZxuh",
  "key26": "66Vs7TcHzAAsxNaDRzzYvNdNzvubaEzBJkKKDbnDkDjB1bfxepLBq98w1ixgkG26aRkswU8ohS2vCeUvwZDbiK2C",
  "key27": "2F1f9mExvkd5iZP6YYqn4fiioGgEimkXHbT37Z1cHtywCGdM1kLXnNV6qztCebosJxXEcb3LBfiUBiBfSaK22oxP",
  "key28": "4FpUqzRBpLGPVrcwq74o5Wd2sUUTCaSagW4JPx7LewbHjL9QXP6wszh8F1stJhno23dzacLLj65Th2S4wKTD5QNT",
  "key29": "5N6xSPLkP3bxEFZMvAMMs95YdkLZNpe4pcUprSzN7qeUnMPCjn1Yv6GLjYG1meoK4a1WhtC5dtgQJxczZEUGrjdW",
  "key30": "Gku9yRQPDPiVPs8yPXkhzSxf5es5RRE7MBEaZYX9UKgCEGemi6WyJPUgCdVcwK8nr2k8RuvjEncdYcxcjBW7NtU",
  "key31": "2B9jb2TXubPtjojh6Bm3hTg7aKWx1Y1hN2ERyzPox5ajtnNb4EsDK8tnkKz4LXpq3DpQgoYorxgNWXoWjekPmXki",
  "key32": "5yQMfEDYjZHS34TPigBDhqpvFm1iMynsftsg9NUzRFaY4BFAv36sPNUC3xwQ4KN5McovbuVXuyLiMKQScQw5Gsvf",
  "key33": "5CfMU2euHS1JLSCDxVTi2vnuAWoAKYc5qHsbRzmLRYQPCv9wcezqnz2P68c9Fio8R2ntU4C4tgPy5V6U9W3zdgvB",
  "key34": "3uLo7786o9P5pwBTkTmZhZmJreWoub9mUCcTQbKVnxsQNWywaBhiyqjctF1FF67CT9PygziBBd7C9HTedkURde7",
  "key35": "5PXfbBwiTB34hiXSNhXEBKfXLshbCMcR9XRZe92YvQoPPDSEfZtLfBA1vmvZapyVtqVU8qeRF4nLTxNgjXTEeyXM",
  "key36": "2nacRevLmnuxMB24fqrsFLZbspEyGVeun8erZDFGZ8ZNwNVWoeJ7s8pG6G7xcLT8djMmjyEh3HwAsjsnUni5zzE1",
  "key37": "5X49namMTA59SPuaXALZb7fbNtBVST9rrLsLMjE73PJmTA4s4b8T3qev9yMhNJJtTcB2Zp6EyzG7mXYRyVUeFx4x",
  "key38": "PHcibXgM3jfhe7uYavu2PoePrzkpiGh2Ph2czsvsLTXfQWv63KzV1eYDCv43Dnc7QDvtCub5udFvXMHJE5Tu6ST",
  "key39": "3dSUTvd16PnwTTiBLRTpm4neiWzX1nNkxWXLdZBdTtr5rq1sF2BirQ1bSy2c7SHXmsrmDtk72nizRE5rfiWaH7Cc"
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
