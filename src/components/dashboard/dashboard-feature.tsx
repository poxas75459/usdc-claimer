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
    "3Eqn6iZgqL46pHuHKK5bYFR49oFJpESz24ZW2V8jS9LcqicMwP9HKFuYNZMhkAJQJSHy97DH6G8PxdBeT84DPu9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sb1ZraNfrAhHYsqWP4HXvg9z75m6JCHUfxbs92JjpP587VUcfEffUtLebGfyutL2hHde3u9guphRme5xPFdWpcP",
  "key1": "4kZdYamyDW5CNwEnkrKs2o47zsdpdy2gaSr4cfu8d9gPMnQ9u8eLE3TQzi75ozdRhiSDhEVUkLDgAQmQCKe3wtZe",
  "key2": "4ZPBogfEDKeDMTEAjdcfzKk8QMquaV57GGHc97ieswg1Rm78cYcL2yeq8obRtt8p2bA7fMRtkXAJLtqJNk735sti",
  "key3": "4PWxTGdR1TjQoC7cGbgnDBX77YT6CjTrvdqJwTZeWGok3S24EBMZsFKxvYvcLtQx655aXKx2MSu5v2k4PBEujZpD",
  "key4": "5eC5jLEKf4w2kSwwpahmhuoXDpiETD4BvqAkbAiEdjM5BnZmuxuk33S7VbuLcKwoQCQ9RPdo2xrvYhFQxNfiHhv8",
  "key5": "2giuUY5QbE6H5MzdBmLoB8nvaYFfjEhDGku2qfxc9FkGMYGL3LwjTAZqYEVepSts3jHqP3z349BoHAYxqhhidhP8",
  "key6": "3mxCTm44Rb4FqqhLZY5KmFNWVvCn4pr2tHMbvzm8u5xsAndYQVyHzMc6rBrzRu3L4SToVNreLfTCQvoebjetVQAq",
  "key7": "34vpNsGv4bnfEVkGqLpasrgGrkxKXKMNttwkc3pJhHjY2Q2gSga5cz8QtCFt1ibStvRTGv5fpMrgJJ9hcAJogFE5",
  "key8": "4YTFp2D9L2TVbJZB1nUnQKSYaGBmgbAF3fap9PiqeRrsPqE8ABpnUrTkFcX1FctCnxgF7fgW4zN9FCDQLA71ADsW",
  "key9": "2mJqvNJKjMm4fVKwPenpTSUwKTxzWF8QxtNqP4nCKBKeCKa7HwUn3jtnK3uEed7azunKUSAqX4aP5XDNFMLeEFVV",
  "key10": "nc1majPNQTtQcjRiAB31WfbivRyvJ2oUt4kfuHE96ce7FtgiGpYVTg1Ak6ms3Gm7j13xCNUcL1StgN27aTUS85d",
  "key11": "3DQvjaRAoZTVFsXT8RwAYo4hcoyFq4JrBtRRAphJ1fTM7GTLUDPnwNfFNkntdzyttNoCXwUry9uRwK3ySLmMy572",
  "key12": "5c1ussmKKJevrkctXY1ZmhndKaJeg5BXErh4M592zQFdaAwTT5cYFYWwjgMK2b2jVdvd3S5EYg5peVRQVGXdsLkS",
  "key13": "2NYECAiWKv3uesxWy3pNt6HAUkskhbqzL1rjihU6HmoSDK8jhMdhHdX2ehHS1wQwnN4sR6MqPkpWth2cLxrN9VDV",
  "key14": "uRAfY3hzbNDijjmbgNiHoes8huJ4ynjSXWnQ9X9HkPveg3thgQNbfQ78oapje2NbP4AZnWwfr6A4QLkViq1dnBA",
  "key15": "3MLgnBq5EN5XVVvjQUZsPhycNmfwF3yK6pJVVY98fToLxZDB2asGvo88S7GwZEjCmPai3pJv8K958cRNSU5KVQpb",
  "key16": "4znpajTdxvkJecpTSyczVv2XN72uWw53MdNrpKqv2JE2883ecLsgJcZaiUGMDHz1MtmXtHXgQSvtALwzUuiD4vXc",
  "key17": "DxxXwBWYwJfRN3eDAKY9gtQCnXDT9fuutHLAB4fB5zqmJkdLXJgq3ed2fYK2pxRUwj7oVAZPC4Fn1y9DNTpy3hM",
  "key18": "TMvt7TUrRacAUnuSiRRr4Uy9Tp78z8XTwawWzpy4L4ZDA1xdVy4vTddkQcsZUuepxYiv3pZ4WQKUxwrhswSGVEP",
  "key19": "nMnYNwsyJgR6xpaDRR7XPBCbYHUxcoQ1TTA1JUeLzzupzvPh1NAE6RiwUG6StSzkPQXFh82hmHwhKTDLE7r9oQ3",
  "key20": "3w2va7xsMja3nHD1HL3foMkgHa9bvoptFSY3msddbB7k84tqQUtVhxAbkGhZdisG84T1fnyUj7HePXoutGo2rgfn",
  "key21": "5jDDUmY4g5LkRtd76UQgH5nYP27b7KfAcYask4T9iKYBnR5B6DqLcSkBwLCVradF3NgtBxdePJMK1WcDcTqrFtZz",
  "key22": "4bWYjcQdzDfCDAHXd5mKmgoWNGcs83LhFR79ouHnyM38mfGZBxf5mLutiXHmrMkXsRAxU6Rd3groiTwetKCA51bo",
  "key23": "ve6Y6BbexPzFVpL3tLy62nFhgKj4vC6JPNeqyY2RZduwyH97WHbtgxKopjsdFcN8iZat4rf2cCZbzT4zDHH9FCh",
  "key24": "5Pdc8adWgMsWsdDdeqXfmy24Khf5bhvXDAKmkiB5i8wSxBcE79ggHbawh6B7N1D95Pmwyp8nFbcM4Y1eYfRKv1HT",
  "key25": "41J8PiQW9ewLaNwFRVWELH2jVKz6yZ57HvQk8m731Pi48McXFBfT6aZUABy8BeYTLMxS4UCRN8r7uW6bVYM6qp8G",
  "key26": "3TFnTe9abBpwx3uPHuxtWcp5MmU5nxdfcHHXJsVQsbwr6UnVXijXc7ESqCCi5ekY15hBj4wcpzWazA6S1xvjo1Gg",
  "key27": "4TtSYiw99qoxVR7BUGKD4f7N5bTtLcwJJ68unw1tNkCvYbfTik6djiMfngPCKvRBusNvpivS4c5MTi2Yz6G6kTZC",
  "key28": "512fMvWwx6kbHY7DwK3X1Rj7VC3DwGnkwWEHUVK37g9jRtvhaJFkAZuwuaHzWJpbRgA8kiyRdeqk5DobWTqfK67D",
  "key29": "d4TqrVCTndvX6ksifB5ZcoNqcjVsd1cQyadC2x1kuypntfaJ8NDGEk17jT7gnzS6fBwAu4FmMxvFdfhfhX5aqux",
  "key30": "2vrEsP1JKCtisWKm8H6yoGwhEvRPyjbocjCuj3xE4NGsw5bctBXPhGrQiDjRX1c1n7CmLiZQ3ocPL5HMyC8Pe8Wo",
  "key31": "4hdEGv2ot4sP66ZaCnUE8GfZfuMJRxfWDMt98YWC45npBb1m1TMYhGhnDDq1BUakvMXhQTqxLCiuUp3g2JN8tV9b",
  "key32": "KXyCjJKPUxC3FEFhHYyuMhcXM9LKT8sh96vqD5cToeYnKEYmEoKe3Dcrj1yUQ2BApWFoRbGLeJaX1XWNSnvQZUW"
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
