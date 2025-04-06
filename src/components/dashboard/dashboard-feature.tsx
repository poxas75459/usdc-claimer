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
    "51LhCiMvyR4yfxgQXsYB9YeGjYnNKWsTkZfp3uUawuXWjNVJoa1R3kiG2R4AYGkRAduV71TfRHJo6HSCSbGJdVLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QjRNSAmngg3w9nQNe5amvu5VXURbYCMA4vmEVumdYJUDfuq1RW7TeytNdPP2TkMiFT7Rw8fpPBeNrpbtZJHCMMX",
  "key1": "4MAH8QqSwQkqZjeLPRTBrxtcq2Ns48a7hgt8Wg3gF1t3cyTNMxpceVXj24H3ax7JhxZrHoojm2bTuFoyAvQsThWL",
  "key2": "25nqYBezoYz5byGrnq6w8R8ViBDTqBV3tYwUa812owb7rGjufYHjmcqfuqAKCnkNJHqunde3QJDH8cDwhQYtLX2T",
  "key3": "5oW5xYXpdjWRx8BzbdFiexqU9YNt3kp5G8LWdPiAUsyBLtmyMTdgi1g92T1vHkC1yY4jmnab8RJbzpGF3ctnAwfh",
  "key4": "56aMuzdfmeZnno2rBXjFCYGzDC2qxPH4DwhAa2UqSDXojEq5EqjwCn3R7ayz7v35LYewgUu5wU72sr1jyd6rgttp",
  "key5": "2WUJe6BLEetzaTiuBtH9s829tQK2hf9n8gJmMdDLWR1ue8EZe4Eo9wk51DeFVwTrdq5NBrEzrK6rGWf7acSW1WmS",
  "key6": "4y3hL6jDvLWfUrkZZA6Fpv85FthR4kj72zYjvbTUHkaW6BTS1ghtDEFGH665QhYhCoAdNwXbTLTXfTXNMR1JzwJs",
  "key7": "4yFLWzb8qKGhGa5CKNobBmfUsdJvLSgpqETEBsvraAthtqsCpdkdVqVQVmQjkGURRSWimVZUGRNpHRDVPVZroGrW",
  "key8": "5gwK6Aa9KnpD1aF4aHRh2PSgf15nYxNFwk2NYEkP8c6DuVaaDmo9bs2Ep2RzKnqwi7tnAk5vazobyvdkXnLWTnJS",
  "key9": "36Jf5y4fn691jVkSuEprLSKsE5eUSEtuBk5fuyH6CvT3nq1q8TjnWPuLucYTiPaL7pRgP93q1BUTbHVQ87f3k72M",
  "key10": "24T2SLCYAXQqgnFHvvvf3DW4sFVGWMBpTkCAoqdAedJM6Vsy7WgvSk51kpfG38wBRG54JuwUeV1PEBDN8M2cPovd",
  "key11": "3M8SLfA21NXzvLERs5Se2TPaUH15EeFzhRfdzNR5rB6bMZveu4E195vT6YCykDJCpJVMJmGfenwThmuxMDm3FZ9K",
  "key12": "2Rzu96RwSoj4kRbpk4BEACKd6pc5fb6U9XvgErQT8YAT5JFoRH8SbNCHbNJKsd7nWFQJr3jwrS3hYSDZJHnJ3wy9",
  "key13": "3dp5BJheZFVWbKP5b5ACqMt8m7EEsL9yQbtyDKk2ZxdxgZyJqfphLvifmBeWm8677ispH3EzuR7njc5zPWif9wzG",
  "key14": "3K6b4T4guD5Z82tFESe69fjDzTWiP3ykzFKLSMUkZNyzvXG9SXwNFRf1wXLQxKYBv4Bt8fk6zMMcoFpREtS9eU4c",
  "key15": "3DJi6ZsvJxp6uXeBYcdq1hGVEq9h5LXLEaZXnFT4Wyc89YvmrnjkEz8EKeDuTmAwgZk3P2vamWUA2DzsYYfjxkL6",
  "key16": "4mNP4Tu9uRtvq9izCjeazeL1DGGc6amh9nLxK6U51X9nTnG2njep6NPmBHBkqNWWDA8Ct2QxFqmdXqVZVk9WT9Fb",
  "key17": "4FAEJ76LMJwa4XuaBY9pHHSpvbziAkukRi2jTLbyX2vaFwF9CkptyvWPvQAPPrEFK1sj3Vn3Add8jJdEk28w4RV7",
  "key18": "5uMkwGdi8BME3Up93FjtCD7NZsbBDoCn84V8V4WSqDFFNBqZ2AMoupADPB9XBTexEfdoGQLr5abbdKD5uFGkZ9zD",
  "key19": "59cHwxWM5cqWQcSGkmUPRGhjsMfF4mvjUk9s618GWtKnNQpbLDgK1jvmKfPH9uNgU92Pxb5x64HkxEf813NkrtT4",
  "key20": "2eWyRjUA1DhxyNXVeKUzdMGFs4bWRjV2ZMUs6NpwphUfAGeJzHHfxs2EyejabScRxxLEx1m83rVwdsV1VM1rZ948",
  "key21": "2DnkQGuxxCPG5MXsTBzwtaGW5gcf9FwxU6WAk2wLdhQTkCiDug5mf8rWCxo5pDgZbpnAg4xQyXGEne8vmks9MCa6",
  "key22": "t693rmT7N6GUgdwN5T6f6rF89GCSxgTFikzLbcTFQu8ud85x8N6vhiv8yodFA3FyHbYRgzfCB9BLdidhgMyuX2n",
  "key23": "7zxmtXCKHiD4d25gG5464prYtwpD3xjuQHrQZLL1bkUoB7udJqcPJDqHxS3jqX13dS1qDkAtL7P7DNsZvnHx3gm",
  "key24": "cJNgZiCWbFuWxfMWtBL3dhobtteoqJjkVeCSxhx43NiexGvigJcRWCWVg7wna8ms6CtDj5XwXU168cMZYLUDRne",
  "key25": "5A5w2QkNs8y5moF2FEyfzi9dpdH6D13X64KHCSpjhPNmoFS6WqiG5desbqCuu4mXSUJpnjsyRHMDNFnAwGCXyz9z",
  "key26": "3BgSp4JWfBcK351jnQEmj3csQA2boAYxiHKjjwEiNBMaU8aqmZMWPtz9mH5i8WdY2q1CpVdv49jT1hjByusQshAk",
  "key27": "5X98x6iumtKP2DT19yaMPXJGVDZ8gR1uFDmTcTGGH7QSW2bsJFxHsqCbnF5ErKNrZUQULxXr135KiBKLwrVZkYxM",
  "key28": "2bp6wQpN2AjB1fgicrDYt6eooErijQYbcUJd5SbnsMzPu1z2qq719wkd96BJYmY3hLUU6LsWYP939WFmZuQyzRij",
  "key29": "4Sd2xKJGwdB65T18aawQQAgwv7nDPcm9pucjKoBSiMUKkNvscA4Sm1STqS9CkszNueJg479UMxn6xH3eetpZ9V6x",
  "key30": "298FxbBSLLvEwqWy1nUy9bTTYYU2GB2MSHvmWt3arrijFWu7yisBuCtvwpdYnxQFV1mwu55gzo2N1hDq2r9ZL7jq",
  "key31": "3Xzo3xGE8K7jt5vYQegmLQGa9fohkuNGtPnd86D46kRq5siBse89zzqhHXGfNdTnN8ivNCLDoU64nfPJnVcv9dii",
  "key32": "derAu1LVyfnemdz3JtAfQfvfeeYoox2VtYJynvEatXQ2H3iqPiGCt9gMTJQ6qZe9eWg5DcHXfRbWT6PCiabRgLy",
  "key33": "4njE3NyNeyAXNWkZr8tQ6nWCyz8hjzgpaXqG8fSm6ZdVgfECaUTJB2GxfFvLiHZ2eY4VggAyV3WW6tSuxcyF4mKG",
  "key34": "57JRDtCUEwh9rF5khYdYDkEZQuo4Tjkr8ARXJMWgZUUnEF2bdVLxTfzBr7j7a1XeBZ8qRFAmUd7TazT8mGiVXZyQ",
  "key35": "4KYPgNCgex65hQ7V5PmhuJHvCQEs4qHz5yhtxtVEckwu7DrYVBTUqkg3XRp1WHBKS4AZY8htbWxEp12Ce25sY3z6"
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
