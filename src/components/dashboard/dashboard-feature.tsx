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
    "4kNVwPJ3JiRWH66MvWhiT58Kxe6ECvLfQ7EyUzyzM82ztRvM1vY6MwZMsjx6QjD6U3odt9YRaMRX5AaoUtkSRVc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NMpC7x5VJDjHRA8HZZ7w1SGejGWphNpENBSpSR3WNZsJUnJGU9vDBjVmXBLGTpuCxFXaFWvHoi4GERdX563JJrW",
  "key1": "3fnruTmGs1PLp5qNL6SxVrUR6ukPJFKY4ix968eEEvQrpeZEa9e7cSU5a2EWFWVw55Ggz4X8UZM9xqAqfHgmwpcG",
  "key2": "5URCPGVx9n1UZAYf67ZhnbUp4Q12PdDvA4Z77ZiapavV9WfrvvmoxHkCCxggaSVv7WcvY5uxEwzTxV8W7RpbDAka",
  "key3": "34a8cbT6dWA521EtRUmS7MxhDzgCGbzCHosG5XP6DF7fJXxnrxEjqeSKyePCoyrLnVm58ZW6HnZjfocBAhWZjPKv",
  "key4": "4yWKsdCgmiKouPofZWAN5P1xZuEvzk3i7ijxjBib8nEnce2LMYFuubqD35bvo4iuGn1wKYxbKCfeWQoFLVoPWzza",
  "key5": "3jgJFjXWUnzGyt2bVaN4BTKcc2u986thSBMQehyK5WGcpnNG9Vuqe8pSWiPiEQFhtbeuzHeDuN7cMZM9dxrW9o6F",
  "key6": "2pd84r1AaDFgWDk2Wv8ZvADYjJJ9feFJYfmV2atc8kBcMTaB56VNfGiNj44j7G2p8dAS5WyT8hoPoHsbEZeBiUZJ",
  "key7": "55rX3gGDknYpnngCev1cTRcrFcwDorVLgwK1hXF7fuSX1QrA2Wp753q1XSV1R1xfFGn8MB2TPt4jRkJ54qjEei7X",
  "key8": "4m9x1wXisCrG3GDVF3Q5nXYGFiAtEPHgLVHTouKkvTPXjSMFXhndzMdvXa8L7NfzrgSbqUJBY37xbCtPA9DVQ2qU",
  "key9": "4stHacd7gfSjBMR7nu6BXr9md8EA2NLAgfXx4gggQ6MzpiSvJ4gj7nUgYWxH9gjWVZfKaCvxwPDQxYc3QEBx1et5",
  "key10": "2pVsfDHfcE9mEMQNEEeqK7DvkXLvXxTAwuAxgrz2qjKiTfJHEXmKGGs1LwXTb9Mm78UoUQjyn3JipWpnwv9JvP12",
  "key11": "4MGcmb7L7Xus11tf7n3GbVqBT3HFf5ypCqm9L9SxXDDyEoHDeTh4bAF7kdmouK9LmCvduPSagb8jzu7PYpDuRUKU",
  "key12": "Q2bf3m1JiqAJpvSUnwJmfKz6Vn9F3cHVMFmzjXLaJPYTikdR7D9KJZP1b1MDCQhxHV3C4YHYth7hGSHvWN6cgdg",
  "key13": "3WeGJUeDWvcW3L5x9f2MLY3hkvKjHNNBoznnSbZUuxTTh34gPbsDfLtc2dJG3XHg7DSbBy9vp1dRVNRZnGNtoVkv",
  "key14": "5tsbzXHLw43bJoDSUKP7vEzynKpUur5GXfC7tePbzw98yx2afTGSZwbqyg95CxbVZUJ3UZLR5bBJdU7wgBJNnq25",
  "key15": "pcpjdmmPA6j5TMqPuX97RnaPUsUi63J9zGHUbqLjMUdVRCJVQhmwYYGtYYRavsDj5cR885jb2xP8RCBjK4sqyWk",
  "key16": "AMD5an7gWCCtzet8YucdxdgVMzgae62kS6DoSGy8tsoMzN8MY1vJwExU6GwLPnLrHa76MKU7EKBoE1F2SAofHAw",
  "key17": "5URnTwG8VSFxRAf73tkvUzBk7ghwbTtvkx1PawGuVK37Au5B4diy1EENdfnqNwD9VQLuJZCSCQpupPqePM6QSpR1",
  "key18": "4iEsKM4yVEgnqGUhei4mYFyXGuo9qWSh84TUkUEnikBu2pX9fLgJd1xVe8amPbr47xpDFcRP4ZcJdgXjaKPeU3NA",
  "key19": "5L4cTbpjqZK3bb9yyKJWhVhFPdjvsQqQ4y2pFRguYmMStN7bGkGs8hT3BVms3hGE9Powp69t4T2VToLtcxXHvP28",
  "key20": "2RsE3yYc66guNkkx6gMqnXqJUjiBmH7biaTZSUjXoDQug5o21oViZ6bSQKjyMe3ZWvwweWfhfbiDk9VRxdjjKwv",
  "key21": "4mLb3Zo4DsvYDCb5jAMMNtXzBTb9uACGSmX74wZaQY1WwNjjBigREwPv1WSmpiKPNt5eEQf2CNMRz3vG1BeRSZES",
  "key22": "38LRtKtw9APWXLh3rrYahpXKXqGD6w82N3k6SGCiv6iRQHamZzGaKKbbeSRep34L7qWA56cL5tUNshonkNnBq9VP",
  "key23": "4UBybWRE3He4WryGJ2AmV3YyTmKBZA2uj4jkDgXzEeJQFaCx5cSySa81c4p5HYnVBBrtjWRAejHFeug86CmT2P65",
  "key24": "3ZHzdJqdRasp3Z9Y2CDpx4E9ZJyy1CddiJby84bcZc9xRFb4ZNd4uhqipTsau8JN1m2JtVKPeXyziWQBDr8UNvda",
  "key25": "4ztfaiqYjg7xLVGmYWfgFMudBFHsH7ZZCdphVTVR13kCCNXQBWwsfNaqTm4vUacLavBehybaWMji5ZQnBTZsjEQ2",
  "key26": "55thVUUybt8tNAEzNzEBmDoAgYpKKrWj9wgD2WiM6SEQ9KXSnxw32akZ2b5EK5eG1NsTCW3DLqQx3ruf82Tb6xYL",
  "key27": "4pP8Ew7DbdBbrvF1cyx4SWPLK6QXzArB9HSMctsfvaL7RPWKWVhuc8WFzQkoBr6VqmosNP5W52wsFnA6fY1YDrHK",
  "key28": "2ydGvaYS4anvg7P89KSv3dJ6YhnoF1L1PqvoZeRpftnG1WGRaxC2CKspPMF1tSP5f8EMas31kbAftGrLigGagvC1",
  "key29": "2wrssur4zXAu5VLSWVgkddDuTCuNGKcsJ1mbS8V5j4iAe1FT4jdpNz5KuQp7Z1gZkdn9Ksg7QERA1naGiTCm3WvL",
  "key30": "39DPCwrnST5RrNDkkjQ9ZHsVZ7NzeYqY14V5gLi8cVMF1hjsQ2x2XzmPVfGNQUq7GN8tdyy2uksgFDxnNS1YzUVn",
  "key31": "waJAweVPqvyoKWRniPh96MfjTTdKUjRic1QRL65agmY5Ffy1qUqCWVQZt25kuyDDULLGnkHzEiCQ5bmDFTjUYaP",
  "key32": "4KAJCPrtfa1X7Mi2AnXcA8P8fAGMtoH6v6AsxAACaPKosihU4q2wjxNsUNmB9oRjwS8uZVkVSqtwc4L5fBFCwkd6",
  "key33": "2b3oFroEj3xzLfZrSJ1S5yBXdzCJm4fUJaJENBbv5v9opssBKfTKs3opEPpfEASyNGLncjXGiW2hg7Vvr4eUv92o",
  "key34": "4PCEuxgVEybFWTegH4JYiN5sgVJ1o3j4ZYPbqQwNDgnuVTh6GJEHoswMjGB5jdw1FN2aXrRqPd8WKwNjvubmwcYM",
  "key35": "cGTNGZ9UYw1s9kAPKSJ7th6ubc1jXQ76SeKvxgK5ukBM9FsVJ15vkuU3y7Ztggw5V24v232to9rSSNxCK7ii9cp",
  "key36": "2diJ1bAGdSpCcDF68v1SvycrogXCM8YkNEgLPcCfoJVxEvKBtRV7g9KL3Zizdmmx8PWo87dcVeujaY8hyCDv4UdT",
  "key37": "4vXu1ZXyRNsgTeYf7TXWLzkTeSJkFdfYis54TE8iyTSVD56NsrndhvN32PeP19oUHTaCf1N6TSSygwQKvPCqvoPR"
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
