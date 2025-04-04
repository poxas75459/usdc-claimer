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
    "2txbSzEgcyL4aJC2QfMdUXbAzFmrh8XKgNUz4JAeGBitBDp7Q6VX14egSqsyDpXxTYjJai8pchxDSDXZPpzibZV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58jotF123rVg2672pR5zUWiNX74fU1XfojhhEtg7KVYYttv7BUterD3FimDX2kpHQVQb8U6kUTC4dwujWYtEaj2T",
  "key1": "4LXbZvaVS6nWYz5PzaHPbcrEpH8mP1c5LT7djFSCKrVt8rD5fKPrCWVaf8hEQqpkzKwm7hbL42bnUFisBs9skBpr",
  "key2": "dhPL5mQpFtTx5Z6yNWzHcTCRj3s24tSAi8yyDJfNeLJxQedYTRHtXu8ngh25WVEh4fcXi5wGD1QNeoKMV4F2a4M",
  "key3": "2c81hxyHyGiDFngXJQECQEGktLfwTB6aZxCEBrWTbBY29cjSuUtVW2PdxC6ab2QmGPUYDxi3uuZSE2CPU9B6LVjz",
  "key4": "2Q45cWSEWbG1tshXb5sQZQzrY2TooyLxHHrHBXL4ZHYhbJ2TuCzqz8iDE8soTyLVbNY6UZL9Lnb2MvxHfpmxY3ao",
  "key5": "5CFB4Ya8p2ShQFzGaYrAJ59cVQePoK3s1Za1WbjSnKHcPSfKRKJAmDtyw3smpvjcKpq4ZMxgFqbcuk7pW13TCpmk",
  "key6": "23BcqDKFCaAbGvVzjVk2Ug5vn2ZTn6TW4ZeNGpMuebJbnQBKwFrGztMsbwUj3s1azd1YJL7zusax3y1nGcukCitC",
  "key7": "537x3MpRL2nvM9Exz1LtmwwQi8SbCjyJQyFEAQmStheDcV4ypGE8ij83MDY91jUgQJCHBRMCeEdNY275d48WJyrA",
  "key8": "5KewPRj2rz15PGMWpbwBqYNrDXpAGfQQKx4MapWp7YTSHCcHcsJArkzaRVs2MShV5UUCASsAVyLqgYmUQzgx3L9u",
  "key9": "3uKMhrS5D2Hq5sMwca6v9KLBDvPBcekDWwgA8zxHtLaBawbRgqw1gj7a9YfPzGVqAdnF1MeHP2UW3YnAxngV5sMr",
  "key10": "SBbrLCYBU2pEYPfjn3iUhGGJX216WDGiVGe7hXCbjRPxVqwq1E42PiF1aB88ZXwtS1Ckg9UNopfJAsJMxjQ11js",
  "key11": "59wcFHMjYYcxWaNVUpNBWyh1B3V7R2BDDJiEsKuBwzD1tHUrwDB7LxS5H44aNwQw4Yb8cmfabBJ5EfydEWrjX4BL",
  "key12": "4b3tii4dEkuSxDbHsu41sVsfYV8dmNDmfV765edDn7ndkGaiMFG4NKn2f5BzJQCVcgEK75QqbeHrFQjxqS74gaoL",
  "key13": "2UQDJKX2pEt6qmNKiXmEU7k2pfcaFhpoSohTxQeYFQMErk5S6WgxhnRnnQdphAHHo3b5EabFzKvpxDusHh82VUH2",
  "key14": "4kb79UevqebyEeYhv3GqVe882keLeLq4qSLYg7suEQxkgjaFpefgZw328wvMcY4hDkN18NRquAhH2hTWx26wTBWV",
  "key15": "5BmEX3qdnfSN2gkEn1o39nbHk8eoSwcCyEfKviPSDUBALa3X4izHBD5wzo5sP7RmLRzAkf3sJBKsk583mDyUjriz",
  "key16": "2fbr3hwbr6nEMfjrRyXb8PiuKLztbqpzaVrRRPxHS4P2mHk4x4jsC2jgzr9Qkk8UHo8rjanVrD7gV8W4USmSYRSf",
  "key17": "48vSXCUXjzueae9Be49fgYp5TQockXqL4iHG8AjF1HdVe2mRcvUMqzj2qQbjB1kA5GBoDroSsisy7LLqmrZgbUyg",
  "key18": "2JoeWmbHn6U8cNSTFAn67wNkw7EWBnwxbmQaaUYBHkcV9za73Eumk3sH8gKZA9CJ6EKsfwiV43AsyBG7PACaEJMP",
  "key19": "4GY3ZNhw8eKrQsRYACVhNhEEhydMdkSBsz1ceEu7uX9M5ssrpFa5npD19GT6YzoGnjn87CEBrWFdKKhCuZuHgZnz",
  "key20": "56bGYhyK6wkz8dSjTCXJDT3bQYZpRwUQNRykNvUWbDW2S3JnHj7368DJH4ywmP7XidjEgQz9GJXCgRGXv4nu66Rz",
  "key21": "2MqjV4nKBfiKWxYG9jy7QkGN9dCh16aDAzVcVnQuaKXS1PsRefd4esqLGwPrCHtVdfp9ZNtZW7DS2aJHf1gUiUBE",
  "key22": "zvHRhCjyLhu8VBPEbWiz3Ejk1a7KtJnBzeSkpNmf9UMQojYWnuaD576rLiC4a1ei1eb3ZmaJjz4oiMAn23XawWD",
  "key23": "53sB2t4EgAmCv5TczoqzswRNEaupR8tBFwTrV28mPZhbdZuk6K34MoXixDemmYzLe482DdgYRASAXKJVa8bAh7J7",
  "key24": "5ETtkSxo8JsEteKgmr3Gaavf6dDQ3qbTcyXMSg7uYosQNwbZyXQ4YNdk4xV33DEZac7FwLP1eVQvC8pSBZUa2yrC",
  "key25": "38YmXUfBF3pCvA3jTb64hBk9gLQUYfGFbrvEdAydzbfLqPRNpjUpaCLJi3X71So6V7bRsUr8hS93SLdj1WPUUyXw",
  "key26": "4h9zekBcGLCTnYB8Ui8CNubakAYeYy823PRq4pyeZYwp3115jJagBoB9YSK6rkfKLB7hT8hJ7vC4h5zQ8vdyGFax",
  "key27": "5wWmjVMTwgTmWu6ara37fWzyVA3821oPbTAFtLt4CE2M1si2EPJ1mr3rDXXggfJUkamJW7J8Yce9riwSVjJm6WN6",
  "key28": "2f4tRBaDfe9PBk8nRnEcq54dLHnYkgoFjv5qr4PMUUvLyLQrJCYARwhf7VgVwB88tPheCx9CeKjfMmJcDcDnvHfy",
  "key29": "3x6xvPEL1aPRcx6yTgEJ6vBQpXfoqEjFH69T7oRwHLe2AbqpCDPb8nyYCbcDNQKFy4a9hU4Xzv28b9K4oh1g9CVE",
  "key30": "5CgLuGY6Q4osY2MnEEGwvgeB8CY4GSagLkAr9Ntcf1L6RCatQUEFzFRVq8jz6xEg8Lt3JoG5zAPvceZAwf8TkYeW",
  "key31": "st5JFnPQ8tnQRgrZVo3hFgaqvudUignwLY7s3eTouaKnXd5wHqT8d2jQdsthbHWKHKVFa3qegY8jLnLAhjXxZDk",
  "key32": "5cDwaRmyWz8kUw6xtH4HNLJipHSMuC4g4LQHn9jznK8WuRqhuW9KZR38WmjXS1FHQ7vZJKD9xUvbpa3CXMY53FM",
  "key33": "57ySfXL3edy3ka2vXx7qdLzWVYSQQznXP3LEmUcBnHPejCyZbRDJbijuLnM15SMSvJvL253Ceizuj1zZZUe1nzFD",
  "key34": "3dbvbG5Ggz8xtduk1rfpwjYmtwzsVvKZ33VsqW9UK7ngCri5dXuRrMNycTW1CaX51cEpbNQ5y3KAwuSjep1FcFfa",
  "key35": "2KU7TXCe3UyMkKLtVDcxhP6rSebtghwV2hgyoj2vRAd3LTpEQKjHxEs56U3ZFVYqhWFfSt2AbFcdZmtMFy8zkaZF",
  "key36": "6zsgspzSV2gQk73UZYUsihPLiN8jANKjKJ8MZvsVmsrSn1iEFnS7pEpHJqZgSeg3pmbF53AEwxkeVWsK2bm5awz",
  "key37": "2k8dKXMWayugFbrDcC4A3Dadsa12e2nvSj77tgobpnr1H7w1kriVTyJQGC3nbk8Rs6uZgzzFCr7CiTSJVDtisKdJ",
  "key38": "2vFeyeZEhPNeKkhX3XCnSNSAoZaz31gZvMaL1jVd2iWoibkdgA5ccKTLw8kae39FsEKQXVy7pCQXduX4sxqLT9zM",
  "key39": "5TeVakdJk6QmXJsqkYZMTkFFRuLpuFYLSvBRCAtQKFGRCkiyz4qDHGY3MNtGv5eX9BSt58yVGekPugPsLDmKDsa8",
  "key40": "2JiF5HkDKKjDN8nqWcZTdgWitkRZo1LyzyMUm63VanEpSnQkKwEStSM3oK335TVohf69JutTsB8w7hCRYTQfnegS",
  "key41": "4bqMfHQwykw9to4r2EGry39cAZw8HyLV14q4JERuJbTdoxU5NUfv3D4YpMcBZN6Rq2G5fAyBTN7G2DTHMQQHNs2U"
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
