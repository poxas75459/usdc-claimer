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
    "vDD4mmxSJViDrfYZJwESGi65ts5GbeaNXZud3fYNHFtT56BCBrVNxjmRJmsYtZBZQPr4paZP9pYWUo4BK3scLrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HKSCi6HaWxWdCoShL6bfdfaCh481Ye98YUQf6UHrXP7N3RHZUGV835rgNY34jNjTQS9vvMzpuG5WHqzqDz8ydEm",
  "key1": "FuhtJ3gxLEaqVjgnYDPJci1BU3Ud1P8h7DUra1sFo6uQqE3Hpns6WbMUCB6QcrfN7KGnAThhWKDt9tcQFsZD1d3",
  "key2": "66DmwDbJsEibWyUVkERVDPY38nH9ZXeyWkKCW8rroja5SDKtWMMKE2mZEP7oeRaiiRS1nUEy8Zde2eJpA76y95ZK",
  "key3": "iJr5144YGv8r8GbX84cZ29LRCjnYXWg8wC53n7nK7KXXb8uGuC1Uscp8cyVMgJJ9EEf8YLzZKNt5jCPFg7zA4EM",
  "key4": "3ksQnVvUG3SZWUGe9upwXdsPskW8Hc8ahBAKpne6zsBz7HznFZ3Fsd9cFbpGuvzjVPoRBRytzaoRWygcnkcfreqY",
  "key5": "2AhfFZv1YgMymxtksze8HqmEJRVFyYU4vimEKhzsXifDKT1yDKKuFLWdruAjQx6L45wtvzZp6TcZzhdN3vZ7Doi5",
  "key6": "5NNKNNAC3tQ11ap7JTECKGNzParLuqAwX2fBZRY1HfKVXXtMbaS8vG76sAgCUM5mQus5sp6tio7RyQiSbCmPXiwk",
  "key7": "2mVadxKLCVMQgDKCGtZiW149xFKrRjdUm6MmpUbF5tmEsHbtPkVtZC3R6nTBwPZoP8crzopns3u2Rq12JnAvcVJD",
  "key8": "KGshBLzVw612F2Zi9S2Vw5DdH33nubCHzNxStowETrpBQ8CQ5RyqkyeVDSqCkMgupBcDtUDDHueetnHuGriXnoF",
  "key9": "2skmAA64rWpPFTuY8YY1X6kuzypaRQhuUwSeGQqrPV9YX33CGaKL8ukdM8mTuaWRWnThtL2Yyj8nmrhd52xNdcgV",
  "key10": "5F9GgpHqSkcgptD8ZAhFYKzTzdLdEZn2GrYzLzn2J89XvNHKDppvy9VW6HN6HmbdScmyWshKj2UYnCPXW5ZMJ8RE",
  "key11": "3n9zQW2bfqjHrMZe6rBVRuPCyYjYN7zMMmoNMHf4ZLvMPMzJuxLZjZEFXQhm7CSjL1ftSB2Riq3BpSgKNrAT58oE",
  "key12": "3frwwSLZsps6321qAcrk78MmezBdJgDw8fic6sBEAUFa8sCAVNUcFmJpghPokBF7Wp3yX7BubAjGYUxvVfrYKnyK",
  "key13": "2es5jJXaUyUvqKhfitVxet9HYFgwAXJny1FMXRjfNwVzaRTgM9QeMdTq3sHWcogk1x7k3iwdxGgNjmtLQ2RLDk5M",
  "key14": "2p6prELEWrKp2WyhqTnVhyCYK8j6CxXwyZTsiiUij1NF3HeGnErQmDVbC4cyLs32Hq7SNGyj334kbq2R17v51kqK",
  "key15": "2rPrLDKv34kvaB6mBBYp8wxwcs2v5ZXptYnnBxeDHXGGS6xzBT4FZaKaxPT23kbtk6FybQLoUUQbkinyzJKVatTj",
  "key16": "5mvKF7gjHz7BpgFYQiPCVuY3apBiLY37RowybjUKCmVU32neLM33Gk8sac942tqBonBF4GvQEBGE6uF58RCMKLvN",
  "key17": "51d64rnyPgswdfTMTMHWRARaBRmpkVtrdyTzP2TGLuYvD5CxvfJrisb5fpJLPH2JcB38k7dA1tJJXKajHotcrtcp",
  "key18": "31pp4qRvkyRLhpAw1gUnHpH5buXdarW6dqct1Y2g1EB54poaxwtoFt7SzJUsKBKRwrfsKwpZrpfYqFh4J7qEz9Fb",
  "key19": "2UpGSzRPEwENRV6Hw8xfEveAMXzi3ePSXsKa5kFpfwbmxVVdBQVaSjKtecUaRpLjCyC2zrHNEHrxTVZPjSQJFbSx",
  "key20": "2oCoiGxYn6qbaBLWsCneaeAxzazX1VvrmtCqGettAoKXZMBk3CxDonVZjzACPuMmperjgEwEA2fR3ZD8o2aT4Hr8",
  "key21": "537LvBSd3o2xgvcqYUdGvfGzPFdKPXt7fUKieyKbTtc3VuSsQ8NKQr9rvdPb4iceeqNYfoZeq6UKMPCfYrUB4T7M",
  "key22": "5Ckaf27QZ6H3B5bgch3ouUE4RdyTHNkAky6ynZh5HAFybuJAEHescv8YKgw82Ug7FSCr9YVKbvPRHD1EbLMQMwwd",
  "key23": "4yviUatBS5uk5NA6KZnVYyaeLmsxUCRH4vhNCA3rrXtj9enBgpssHVMbwHcT8TmSkbxBP7j3hYVweJ541NM53GUV",
  "key24": "4TNsSrdewiL43fdNaVSm7pnpYKe3au1uQsqxAThgn2dg4hDwRSUsy4wYzS99R1rZNe5s3f3fxuXZj6ZSdqxG5Cxk",
  "key25": "66vjbVZ2nnnj7hDrb6kvTa2k2Q4YE2hEk9YQ1kb3ArdskQH1dyDcwvvvd7tM5tx3bLBFZ2vMekTpC1uETkU3TTv",
  "key26": "5XZz8yQ91LuZnZ6N8SEFoqbmtNBm18FGaxjYGwSevRUG5izXFrDtFUjazNSpGBjhoD1rWV1LTG3DNExXa3sc2wkN",
  "key27": "2JqKCdpq7q9vQn9sy4izTh8dtfeq6aYxWSyK14ETN7V3nAFrFFM6sNgFJtayQyqQZdJrkLobkpggzgbSatHbmB9P",
  "key28": "24eUmb4HSHF8ryqhBAv887zrFetBorS1hVSE3xGuZdoLNaL3DyinwSBpgC3MR2c4WQjMBEWPyUEkvW45b1uWrpAL",
  "key29": "5WZ6fEjoWZMhEriTYZsAneSyJULG3JHGxg5oiUVCiDzsakzagtceoWTJAY4R3uWVeFSY266bjAE1Y3zj41WLLCio",
  "key30": "4ZQ7iDtwMDjdqcwjcTq1o82Umcg4pb9DxNvdH4joew5eyYtgMZH34wXz7zWLVcmcr2pstXUkBqU6hYtAr1oQF5cZ",
  "key31": "4Mu7QZezEKft8fC4VVq3VBp2r2uKGgZAYidFfmtKsoYjuMNhc2Unf56W3EqkXFEULNrVqFD6VkWW3DeQ7MkTUe2p",
  "key32": "6jrZmDndwL23zX3NYsATALfdQrwURw5Nvz1M8KSJ78KCVMjnRwB9Y5RPHFzxdcLizmNgKRZ1B8ATNYrJx1XhUh4",
  "key33": "5fQvBG7Bac3UaCVGMGrTCwZuUtWDPtM6MYqS9LnzS3BnEoF82s2sSHXhjCnrQFzVKLrTd9uUsnSWYFd13ZEKdJYU",
  "key34": "3m5ATkCXyhoDjF5QThYHdHak9yyvZ7n4i8yZvGegZ9MibFVZnZGQ2XNx473wN7HXu95NJLHHyFpvKN7WBHSgK2PA",
  "key35": "2emoUKM2QaQYxxVfGBcyG1hwA68pCmq1xZkUuNEWC7196J2SvnDUPeU7FdiPkexgM88VXgZFH8f5SJUqZFcBWjev"
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
