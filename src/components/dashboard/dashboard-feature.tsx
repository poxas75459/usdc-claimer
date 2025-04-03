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
    "5nMxahrTrcH49bX7tfCzvsCrWmouEHuGByRFvQLGpfZV685XdYrgMnDMvezWSsKNtdM54HfoZxX3vkapBMxjJTRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bR8KG8akDHoetR2oG6C8Gzw45ruk4SkzmoxBwqBaR3qcFYmpZ3BYmhzD7ryt8v8D2q6QW5PTVgWtvDgki4dkVKb",
  "key1": "3H1xcv2sr2gfQ3NofqprKTQMrhJk11pRUQgJqm318gd6z5RSPdkfwxpAokfaBUdRr7nRGUa2GJ2gTmC6kucLqvJ9",
  "key2": "5Kwzu9EwddTByaQk3AmvwEWAZgMi3k6oFkMrWPeMwp3KCtz52SBKJZzDvWg84UTKx6L4gcsuQiDN4RELDKA1bfze",
  "key3": "5hFvM7MXacYkgxVqBmgqBefEcvWabnzBuxMLs4ww7QfGC878m2UDsPZYWCjXXSqhPfZ5jjD66nvHsidyGD8nfUZN",
  "key4": "3YHU5yeY2tML2fmuisJBjVomLvUvQN3th1xfrpYRW4dnkcreSLmQVRQ3teV9135iCXKneKHYuEbgwJMSM9vsr6rF",
  "key5": "T4c1YTnzuuL54SHaxBqzFXrbNXB2UWDYqXHv2zsHjPzr9pC5Nzzc7NV3i21aESJTnWRV1f52fnRzv9J59ELZYa9",
  "key6": "2VomS9VhyKDKWL5M3gAJwXitU9o5tct2652VQ4yx7HqTwS6CjDwn6oE6cdykD9SscnwKcAzjNeTvGreEZbwwwbiy",
  "key7": "23cb1ur8k5QYquBNd8R15AKLiLTM3sGDmeYfMCXJ4QNHtMswiEsb9ANd86Zc4Fbv98RfESxvc8U95FyM6ApQPckn",
  "key8": "nfAJZJxnF2fPvgSnyLZcLnFrQFk32G7u8nT7vqe2By3VrHyfraLMa1eN1edajeFxDsJpYsun8jQoBG87aUSxh1X",
  "key9": "pnoZV8feMeqU7LHXEJBuaXqTsGNXDk1YS4YAXLS1BrjjvhCcTcVYBoa9dsevrTLCXEKtyyTGTi3aAVvmgjfA2ro",
  "key10": "2xqmMpkD9NR1TmtfNJYMHDw12A2JxXKj4nMZqRdyxf9bQNyzeNGFmcfWArQprfVwbK8GTQd9LQCBsZy2us6YrE4R",
  "key11": "3gLo2G8arndb8VEHc5MpN93nxQYGytBxZNs2eiwXQTgHEgW6yesJp2TfeDc2UURewTHRzhVStWV6q1NxU8M7RvsV",
  "key12": "2GkRPpwMcnHGFpY94k6boKnwbX83v695Es3VWMFuunvxu7fDsVmCsxkmo2G2JtkYFWJyiBdShLjxWeJAecGpxu2V",
  "key13": "5KZHgELKhJmcovjaz9nt8pVXRgq7E3kFsfLHYQN6KqHYmkSq3dCPYkoXtXLSMHzwUKiUHwtnU7Ckkxd12aRp5W7q",
  "key14": "uA1PFQ5BKywZycHxcHJpUh7BMKYQHN7UFVipeJHWsYcyMNwS4KfZdTDzwAEThBipQhuqvtWmMQ6PWTxUV79LeRB",
  "key15": "26RQmeHUS3eaTt54FiaQMJDKtFYi52D7UiGsGvCnXxG7rnDhzkt5xhpGA3rYAuWQ22XEt7Gf8wwQ6njMpWHakW6F",
  "key16": "3ogyCGBkfD6tG6dCWxDXNfoC8jJ3f5BRF2yRD9L4Rb1k8z4t9tWkAuNs4BYtMW7dwQA9LHRYPFafoUs2HPZ6z2zx",
  "key17": "3Yqc3ndP7VqdPhNtKmjFa7s7UZ9Lu2GNwA58P9hvUh91aZE1y2fRPPBgR6roAuidFXsHEcJc7M1C1pBJGhZdZG5q",
  "key18": "5FVQ1B2jKsHpeuGiA1g9B3mYZT6dqQ9f8gHiFins6Jza7qVNQkjzzR5WeNHgKQmjWw66vWEsES3cijNVweZFyC4o",
  "key19": "3X6fbXxJPtkvYcJx2jLSnZatJCA5y3ZWrhoxbfd45oqtPfLeHHd7km9rz9iBGNJRrSRrwgE8A17dtGzVj2Jbjmq",
  "key20": "48McUmUutw4jPLicL9q6Ybqrqv4tW87Mq7H4MoPZyvmf6g5QXMBamV4j1PuoobNdvE4QbVqYdSxJwJEYgi44SPPx",
  "key21": "42Z1wWG2Z68xKrRdZ1edqzGQ1x4BkmNTp2f5DuJazxhtjP97NfqvKfYXu92JRVFkDvF3n45St1t5Ysqr1Y1UpHyL",
  "key22": "5pDKBUEE54AWfa1zsQfPH1gyYs1JwNnfDeJw8E6Gq31SQayJcqbv2nHgg2Crs4TSLqyrMRTcyzFWfjANoWzsFTik",
  "key23": "3TkP6X2RR4s3wfa6kCFTewz4Tboyu6XighKX5kt13NdQyuPZxtNHiHB8ez9k5CCXV8EdkeH1enziLBcGzreq7Z9C",
  "key24": "3rneHtRj4qaVana4f2svo4QcMUYqu8J7F95hb4tq7BH3z4dnXydcAWvyZPeg2kntLQwJgyVx5w3rCskb2ZeEJ2MJ",
  "key25": "4WDRK7BiZKYun1614EHWBVB7Fct8YuEkU1ToZvuEY5CBpWdpUigcsnEGMX7EPFnyYUKhRxbAD5XpDEoiR1HtCxeK",
  "key26": "4Byzgdqvjno7ASeYovpVsVT4cP593sj5r4qiySn8G2LB6C2BM5unsxEizyqdNEVa7TiRe3W2fuJd1nYaWFoUM6Ch",
  "key27": "5kceVYzgbYT1DKNEuyPav7YuE3XTsQuScnWDsQEKsgWHa9YhvqFiW7PwMNtz4VmcS6QXREecNGQ2Fjf51yWCgUwu",
  "key28": "EeAsJpxHH7fia8FXrnooWr5EttzcHeN1xWHNcnVvLpc7mXeErBBrQsg7TXcCXRSPTS3cPTKjrtoE4yMUY2VsiZa",
  "key29": "3asVoDDqAz2w2VQHEAzj9nP5pXPwm8JCLLRPxf96YCgdTuq6wTCoxs8UD62G5Devh5fJPag4CJt8iby8NydoHUZJ",
  "key30": "MN9VVjQ9fuBnofm4MhnVngwb7PhBknqoqCZNgRxkdXPoM4fYtLP2qqxei3wLvZR3q3LeCpY9ATRHRh4xvJJi5ey",
  "key31": "4WK7fuLbCRnRVAPRm7w1ZSkdyJmoCMJqKRNxUKwLCaq75v5z7vpq3sXLY4QebVVHiUnUBwCbFgrbBDZEFmwvAQun",
  "key32": "A5JWiWYzmiB8FvfMakreRsv3uYmS6WTsYSTU4RitLsnDo5LDanTsBjMubxEmGXgpxGhbTmXHMjxz6UkVy1jysny",
  "key33": "5YgX5A3w39AaaZifDkBGf49uYtTuUCeaUQWMntLHBb5YStaKwJyGv4YvWGD9CZAYSYLGQYXzyCX237y7Dk6ThEzv",
  "key34": "412ao9Kv8To1bedhXP3N856wNkHZWWRj3moGBqQ88Jh2bAjgquMs5cSwjChuQVW83qUbLJ4AWEvEBRQHxySoJyh9",
  "key35": "2DjPprUABB3NHC3jtQPUUMV7cr1AJJoWeFCVkcEwTjiE2ANpbkxB2ir3z2G4J8m2QAWyLRZqG4HuMaTuxsdoMEHz",
  "key36": "3PDQkrC2G35ZRJR3d3Q1C6kPPugu5KGRZw8rDBs1pcsKEqjh9ns2cZr652Gac2j3BZxS84Prdi2vSuLYQw6YugEe",
  "key37": "5ij3AVRAWuZoGpP3zRSsJ5zUsq3x6BZCbP8qw8z4vabEzQMa3bccfLbZDnCDThD2BX6eEbPve8snmqDmBK4Zawt5",
  "key38": "KFHDYPq9LhRTnbFsMK7fwZvBfC7EjE1RJhpwibmUkB37EEHXNhCLKvBgE29TGd1kh8uxuiGAmkN9oV5sRnFPhtX",
  "key39": "5qHdJLLiKLfAdNzqnNqeU2EqCNtKHZMahsYq4hHww2daysTJ6ff6qBJxsYRBTcVwoNKzWS8oumgbNdgcgMdLPvor",
  "key40": "3687TmSK6JB1ktr1jzAgLjByQ5R3Bd5RGEFhowrwkxv2NrvMKHxCaETsRFd137gWXLHZXDCLx5LPMAEFNx8rhT7",
  "key41": "4BwAcECX6966qSgDD7GVZitpUJ9rLFFvRCqa2i4QdTZk2KKySNgaSBKRGu5YXZ5ksktQJ8FgsvnrLVqkoVY4hg5G",
  "key42": "BS6xnK7aWoAsu7DxSUwNQwNzQdqr9vqGrF8dyVBb23BYiKAseuvaqUXntgNq9XNuYZhh1TitNhs8kB8LDvaLnb5",
  "key43": "3atsdQdbAMUU2BUVe7NpHJk2R6MUQGmeRMD7sXhQef1LnUvrugd2SAqCX89Rnj7nhLceyxP9FNN12xBA3T7oThGW",
  "key44": "3vW5oG7BqPqRV9JHvA5DF6ZD5rGG6k7mzi2B1jAPi3A7ma7rdQJSDd9TbHkT9mk8xSkFkcvAjgS8Ghd3aAHDb8TA",
  "key45": "26rJwQ5yKJXb4SXDTcSrEw18hsJGVqVPRn2tD6Goxeem3M5MWTxx2LcQyDi4YneTuyoaWoRQ5DMMRS75xi2TanjF",
  "key46": "5tWp21K5zReao22jKWgJdqF6MKGSgHiBQtYVDzCa6iRWguyZqYPscv89aEX6HMR8nAEa9vYFAykpu6e1ZiiJRQ12",
  "key47": "23Qh62kUJrfwnicbu23KdHAZfwDcHWP9YQmc81S1S8YJTv4t5ErBTqnbMLCD37UfkBTpUK1mtnVS8zSFhdzNUrfD"
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
