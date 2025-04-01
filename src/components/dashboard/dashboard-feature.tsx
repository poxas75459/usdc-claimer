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
    "4XUq4vZR2ExcuqDQVbGoLXp9A1c1Zxf3rqhbhuHV4deF9bAZc61qjYziJHa7zuHKDgv3QScY5Mdd2MSDQWhomke7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g6S5ABqzkkeTumrgMiEgACWqqGm4G7rzvVKn2WBnec8xeJrzP5NpmvdH7C2misoE8xAaxftkPWvyGneaY5Z8C7a",
  "key1": "4XpBkKxjCcakMsd4ViTBv9RuoRwNnBsqnysHkzTQCtT1hrMbbaWNLxd1oZYKQyyckAp3KjwdXzmvpQy7M61B5Ls6",
  "key2": "5egAbPdjvdScwzzUTc4jGGbNkVZrNW4jUMc5XumcQ8ZCEarKGduCdZpoqHSYT4EavdrKkMe6WQjd8axk9eQNpBBG",
  "key3": "3YvywxFAQG54FYH8gVfKPpnaNmCBoVgosnTjtZvUxrPvmrZ4xJVtvsmTTKuyxByPRTPzsFDm8qGeDkjbc9dXnyXu",
  "key4": "24K3U1wnYTLFkVEEJpsJhVvVKHxDNcXE4inNngCXnYYJvcwsMTNfoRmeHqG44QfGM5ottyWKQqqHSQgm4ieB5zVh",
  "key5": "4fELKJiRuFLsRF258D9N2yMgej4LK1UP8fiJUuPveh7sjj9unXkKoDZmMeZgpBGVcSvaZC26apY5YZgWiH6bzEnw",
  "key6": "3gtTgfMFeqNMfEHrvff2LM33qwimVXxZUMZKiLuFAWVBGDtzBzDztuBJ3zyxovCJ6jJNUE9nqfqS9UtvjWQqoQpg",
  "key7": "617KydWUQ42vMuGtZm2FYSUvYZ3sMqY6NrF53FtAMBCyq4WJsZkNPeqzJBU1m4R3Td3D5W7XQnZY9MhT7VxWjpYS",
  "key8": "unKZFtqubtTeGUrira1yxs8mBMmuAEibjpL83i8BLN29MgPBc9Q3JoTMNpa8V7zhECFmP831pzj5cZqDzBSixUz",
  "key9": "2MkuJbea3CTfQo75pzabxMxQVm2VfDss5se1teaLTwGBiU7EP2jYqsJvMa1LerMvNjvdmrVbpMopbMsnqXmtJLme",
  "key10": "5zs3jTxY6GwaaYTnnFZoUxewKfP2zr1zGM4HULhnPYDqx2UeB7uZe5rTUDC5cDZj5oj1wECzoru94UH4M5m2b2gR",
  "key11": "4AAgfyaTa5GYMsCnFgXTqLjqUEpDgdajbBLXc3QPPvNRhVPDZaAmMdmqxcCDQAhMbf1zkLAHvVnJSPEynSDGb1HB",
  "key12": "4YP6XWhkU9Wa6WLScG4igtWkbzS6sYg86YM9jNRRQNNkxKJqdYQhi9fcniMHVTsZpEUmm3TNr89zHJdnRFBDydAX",
  "key13": "2tnEVum1qEQjWtz1ayzQeugRrspCpCkpigGBsC4bgJZJWRftyyt99zsWnCJcYEXw72E4dU4FVSknT7NhaWM8PYzX",
  "key14": "3Z4uVALuVSqjQjAqWGVduCXwvmfBtUw5Wt8ufMkXhaAepzQvp3tV5truvZm2AUkug9ZXnbnKgNmdS6AMge397iB4",
  "key15": "4aqworTX4k8V3QKzH1Zrs2UH3fuGtKVFcB4Q5r2rbgKwgXJUkKeCzJzM284pHUJLQLVhoQbKVt9wZD6LVLy7RWpd",
  "key16": "3wESzXyJeEU17y19dYPtSrwo9C6MhSFjN6S9yfUDDmxbreuTJtH7phtmnToZ2zKBzyJUKHJxrQiYXLWAUd5qN5Py",
  "key17": "23twythucoxMqdfmsiEYQpgEwHbivf9qqFYUDgHzVxByVRJBdNtopHQ2wLyGgtW3SvorZxm325qrsZKewccfM8EY",
  "key18": "4ZYizUgMPdDzHsT7vqoqb7YQTEPnkCGSEG8RPjkMS9qj6mkEnBopTNzkdQLZcXj9DvxFB7qgd6N32UYLKbibN1xf",
  "key19": "3JF9TuUhcvGY8diG6F9aH5rCg6Rw2NQjq6kD951q1eoXEuyJN8q7LS84UVBUBax6tWxJND4Jm3C7QNVB4aJzcF3H",
  "key20": "5EQ5R1JV7ZfihWySudDZCEBuPjzhEtmM9nDhHQVpK9jJLiuUR6s8mkquwQHzRsFrLhzDxtnEeQdoSEETNv4esjWP",
  "key21": "3WLJ7NonxUGMujJs3rvMZMeCLwLHKAJ98t67i67TiMbwo8RmY1BRqUmdyevuAynfj9Hh3s5kFyBxZuWtM9DX8igy",
  "key22": "2UMXcKXukobAQDEHGzXX37o86jxDSC4B9X9Pq27FeQW6kCj9MgX2H8bAVjwgwXC73wqjbMdgyhqviC8bhJfmfz7z",
  "key23": "5YXKDefigAvZW7QJ26GRrcMaLZCH5wHCViKZAp4NysJ3vXZSYh4Z2s4Ay1STJGGz7FoSdDKBWtHNiawewfE9NkCR",
  "key24": "HNWQaqJHH1dKF2Dmzyqj5R6ZYJdGDnQuqgSpf2fASfi47u2MN6idcW5LiWymVvrVnH8KQbzE58VBdSvAhHKGHu3",
  "key25": "4EqJk1db8DADqrbD9ZBpzBJjCGQmzKyxFi6w3fhtHPbjFVs1XxpcnbDKpBhZsM39T6SAz98AVzKqdr2f4NU4a4n4",
  "key26": "59YS8zXarNXmiAqk1bXN8w11B6y57QkqDgGEqzBVaz5sVyW1sT9pZCNf2xmurdFGmBcJ3GZ6AzU5FhXmqKHUgQL8"
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
