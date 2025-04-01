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
    "44sWzFsY3pYuN5ZN6WSKQhyrquSh9Q1tgeRkCmcxNWApk9vsUp5338K37TSUEER8BQHxyBbtUdgBvfwJHymuKtnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65svaebVeniSm9HvFa4NJjh3ZQYi7p4JbWiPVUQ6PFdYFKgUjAZ1G15LJSEg25acA5eJ7zQsi9gNhMBZ523qG93f",
  "key1": "xCvjuyMzmrnRcCKWXFmioFQPHQyxa8J2Nnn5avma2WG9MkzeWYegKTePG8oXMAp5J4gBwLUYDQ3zaXv41RCG5ds",
  "key2": "LFrYUR9nvZXbYRrt4yKfNJASu4U1SZ7i3zKEWRv7UXCTYu9MG8mBmxXbcK9YrXbDdeHHZCGeJTXY7ceavrVKwyE",
  "key3": "5L9eyCxRsH9ZNZcrg6eswd5e9pNtMfTZTynwDfABNr6S3YA13w4oqYkXWiHpBpCasV3mkG8u2bKwDRC4nL88NXNP",
  "key4": "3J4HCSzDGaWpx7osqbT59CUA3oiLRDWzjRW4LVfKD3RanveXnrgAjQe67NtteYKg46DNausHHtDJViwsyEc1Uo7m",
  "key5": "4J8hSWMnK7R7LSVzPAmr7qfDpVqrepnJvP9vEPLGZuCuDUx1KKTicbY9aWx8XfM3HsEgyeqtcoR6huPMhbCFqAan",
  "key6": "5JAWHydYL5ueg9YvZW9yR8FWjRfcfQazQPvfboNjKmkks2wjQjRwjqzsTjAmvy3YPaDbB9aYxHuf7A679YiZzYwM",
  "key7": "4D8TwbeLx66ByDAinGY3dKTbBfkn3dBiwmKABnuK2TrHVNKKfhCKWHNd33Jp5YoQKFeMZALhmQjsmXGcfyP619fc",
  "key8": "2uCrWFsiuNXBmgBkE8GCFaSRkse6UUtWVZ77w52ERstxAKfZ6t4Vf551QcxAGQ3gicRwRThEyxWnTGYY6Vpapa7P",
  "key9": "3pGgnRsx82XdEQFR3MQKxuxr3iBohywXwUxmrtPad4Ro1T7FCLbTipV1jvVhxDnCidHQsHia3mog5Gbre5dBGU2i",
  "key10": "23VeArKBnNwj5U62cYqyTyvrGYwbsMK4h8ZR7Eo9mzCmskjBia9arD3hn2NLRskUKGQsubn9Lny6DoBkP1Pb9P7g",
  "key11": "3JUu5fsz9K8q3qJ7E8pWaEJEUUfdPph1WiDyF5y4yiCmWLUrP26cp91KH1vEprcpJQ5qcFcsvsEcUiXoLvoQQhzF",
  "key12": "4vB9fy7BmxGtynP1H9emo5Rn1PWPDG7tkuMwS914qBaDjHwpFiqu5YSdqDmDXAqDH8sZnv2e6V5vfZNw48fwEe4D",
  "key13": "3QNqPg53s22VU9zK7LaTaQgw1isWTCLz9vQKPLZkgmw1mafdmsYTddT79ydDeoMvqPCdxytsj5j4PQbLhARPiGfB",
  "key14": "23H7QHb7qWpQAHLjUckkqpxBrWziqcbqsRrVZutSqu5VFEpJLQw4ei9K5AAJcSVNmkyx2fdyEycUh1fSUai7HYve",
  "key15": "3F5YCZ6eXdx8Vy2WiyjWDqA8y6qwrx9QhU7YMQT5LSqU8RCsFaWQ1U99Vedy67RNdWgkrQsH4nTaTZvVon8EQJrG",
  "key16": "sQq52CaDyD9h8VUqYuQw3p3hU7BYsi6PQ4jiLm59dMaUnYi1obhaQYDwA8G4oNa5Tj4ywkVGRCvWYkJHYhbci35",
  "key17": "phxgS293wMahvvjkrp4BDYs7xT5CkjgnCX38dVutueC9zZD4i9Lqw7tzNMZ2Jb5TceA7zUP6AJ9YAZvSzsfG1M5",
  "key18": "25ASwP5scewAGMFHYvFFgHRvG7duFQG14EqhnSgqTUhJNLutzMZSPjjwW1ZaHKA4HofWhUCggvQoWPqiwuqFCCzY",
  "key19": "SZc8Cnf2uoU1BLv7USciLKskBerBfg5cjUH9i4JZKxG8GfV2abiwVNscK3D1jaNBxdCupunksa3vsdKoZrBScQU",
  "key20": "4KVCuH3Huu14XWqMFo2T7BDz62T1REiSdoYfMpuDZXJhZsF49q57uZ7CdVYMy5aHnPkpFpcBVtxopx8G5pWgBYz7",
  "key21": "5Dtkkj5DdyDseWbuQXGwgCz3wnqVUFfvjhoxtrTbWR46kiTXw2Pvg1X8qhxf5Mga634n3TM92AZU4wp2k6EJ8uGi",
  "key22": "3CgXmNgvFgDTbNXWCX55DDLCZjd8HJBr3vEt8aarPh1eg3EcsoGYffoPB4ANT2oKfqJn8yKtXENW5c14oP2ebEhJ",
  "key23": "23qxUx5dfNgFAtEUCs4qgfvj2ynMaeXJCUbKW3aMY4GpLD1g8d9JAtBs6u16z7Vzg9or126Y5vznyUy4Q3wvHcdj",
  "key24": "5qy5G5kMSbrX2y1qBmB68gxjvnYgdJpuAq6gLHAyRbHJjj3y1ZP7oEaZYS7PsAVeD6vg9RzMm1nahPLrNUuZhqnG",
  "key25": "5UyaUWyq7QqsroA4tjRYMeXz2kjrCEf4h1cz1N5DenZ2NYkbzVp9WqwXcVcYTuw4YNvqKdbyg5H2UcpphrUzCo6o",
  "key26": "4udUSvUiSgv6gMGXRCsKtgnZLk7pux2vxj8XzHZxGiwt76enzv9rZ84JciNSdj6bDRQvj1gwJgrPTGntEiuNS4Ef",
  "key27": "uXV95F3CgbitwvCsXwsQMKNaWPLumxAjQ6QwuXHwHKFDqscBmZtQsvY2DjTrJ6nZry7dyeyTrPmzAMki4imQCWP",
  "key28": "UzmbUsaDhvHheDcdrBsx8cyKs4skRHxnSkhm85dFLKoEX8zqYPiCsnVx1Fy9DYHBpUyzDemxUBSg3mhnDqWbFkc"
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
