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
    "3JKDAcbUJQFWxJDoJU5rVJMkojfzhq7eu9MEzFaQGoeg7vCHCeKCmCw21AExG42HyjrvsCjRyT7iBnTe6x5DRCvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FmvZa6Hh9NFixaBjB2dtBvzgmwsaq8u6yvNNbGxJgzDc57qm6zQ44osa8qKnAuvjBGMoQpYALGLrLRxLehVncMk",
  "key1": "VPU9FHVvgCvrGN6rygq7NYFwAG15ZMreSaxyHj9gg7vsJ6RWbpAkoKWFPM698kAyhxhhxiKefngmNo1orn47W3n",
  "key2": "B9w1jcpXVs4v4jFCJMYaGz8Wh6Aub3ar7VFerNFg63JcacAijWAMPSmuH7H8M5bw7oWtjb3LBueK8wGZcbLWZ3W",
  "key3": "2kFCQbCxidXtDoCp1qNxsvhrM1xqBjvmGKxggJSBteMyqT9gWH7HrJfMZQq11DU4susohq2guMAUoW5r1uq8GSeW",
  "key4": "539NyzJNjLwVdgo4GVTvZEg4AzvwEmYbKzE5Ep2fZd37HTh4YLpRKgMQjAgs5L42PZSH2Y8aaaDmaQ8rcFUaSfCb",
  "key5": "65hykg57FVFj1b9DaeGbYTYKGUMKkgPvZzBfB3APgxXBok6MWWMp7rfcANa5PcesTi5sLMYYsp13SqWgLdJjEisX",
  "key6": "5a7chSH6azKyye6j5ScPJGCtPqZBymS36AApmtihzf3iUFWshUkVdx18WnUAJQRGUYDgEwwHwZNUFATVU6Z8LYop",
  "key7": "hjKkjdsuTE5XP1BijH5otxcuYVRewULKh6igW8aL19xPvpYKAqAgCXo6dCT991kTpTkjhDTedpqnM6gE7ZCbjJp",
  "key8": "61k5N3NmN1kh1vjXbrd7pTPc5TWUexJcRuTz1SgbEFbxKoaYCPg4ZC8wCUgFymCKES14qCafCf4rnYF1N3jbbbEi",
  "key9": "7VHozYAfB9hAQhx3CX8GfFqNp2HxfqyZSR4pRWNxetKWpCUupMuuTipBZZ1vut1VdrAgkkoA7zn5LLvHJBdqzbG",
  "key10": "2HHNtWqUYN4pzAUvWTQaDrca4LQSp5oFRiB8QUMncxUg6ngsfPEpwFgc2nWXsPSp8ULmUg51DGf1kiCAF8NMMLGU",
  "key11": "4oRxDDf8edLRsyBeGbWLjogKjDubUbgjLSxQyHyJRVa1veePGK4KKWjUHGUqnedMrytmRZQg8xEVt78BXQKKopHT",
  "key12": "3dk4dRW4Ku9mT5AzS1fDk5AXApuZ6n116XDBjAZP2eubh8eMPRWQzBTavAR4RW6sFLLD6f1efrR3uVVS1GABHqfL",
  "key13": "2u7wsBdzwgoDwBdYnniQa1eBh5sFsji3y2Aa8TLqJgwew2E8PFng92rcPFhh15pxjwBfU9rkFdddYzXWUZoCXhsC",
  "key14": "49bC7hRombELcjv5bP6ZU3FD91kVFyY7HzbsvcBpdEPYv9SAWfaXYGNodjnwEfnGps4gsKNfEnSk4Eo7nZCHzWxF",
  "key15": "5axC86or3uZzDfWypmkb9QtswsUQXnGEQFsTE1AGte9G9CsKLC17LykmyYLMM6e5BQ5Uctp1qu4thSMnuJgfMwGp",
  "key16": "2TDzJ2VttpCbfun3bwn4wGeVKVhyksRxuck9woYtnUotQkQHY8hwKnSCsnrbnN2J1eANu33cKBk1QoX1xE6CPQ1f",
  "key17": "3NhLZ8MZphnGQtcjZHGVDUgnZd2AKRwjriJ9jhwSoApDbKfRs6WfJHXLbCBztvEJSN2aRgg3xyj7WHUxAaDTPPb1",
  "key18": "5wWtfmNP5bM3szge2u5ZM3BWwpjeEkfxT4jsAtnC7mrtfqfm4Fv65GY93tAWs4SFq8VXStQMuLfwx1gxjwPVmcup",
  "key19": "4qDAUs2BF2jHzX3Yd9jwc4XVPQgzux8CMYPnviUUnPZyMQEtgqPUokLP68nc2pYieV6sH5HzCP2U4TqDeQ6sGVrV",
  "key20": "oLNbZtb3octGJyaDAoQgzeBCa4kLCPVddwBwae69dR2734PcvT4RPvJ7Nv4DzxmRMqA8yXf52t7qn11rZgkA5nr",
  "key21": "3t8bm4v4eJRtqgF6AGCAuNNttqgvgaSbnLLsmsQ5V5wWKaPm6yAfTRncJxHzQnRomTrnD6HqTWrYLsamtH3XFVRM",
  "key22": "3WQ3etHkFqjNxufJyJVbPUuFNqZh8TAaB5R6ss8GFQDNYrAmjbP4D1fd2VVxDkNeTnKDVv7BmS9bFkn8afb2Jqih",
  "key23": "4eugCFCJUswRQH8FtAQjmixS664zeVvBGV1temf9gVV9BcP9ZP7NFBVzj6ciScQiKJ3wjreukTUy1XFz71SUvSsP",
  "key24": "22nwucnjhtoJoBuhDdSqjDQFh2FfsjBjPa2nhNu3QUicYh5eSpmpE4Z1vLN1qsr33hVHUqoj6xWZ6JNRDUHxFKQF",
  "key25": "d8ZtaWhnC3y4YnheTqZQFYXumF3SC8T8EKYMos5Jito2PywWhWxpZUoEebFQ5q7RGi7KcX51pZBddaCEG7GgXwC",
  "key26": "65KNa5ZJ6QRj7vMH3qktA656HkvehB8Hjufm5HBATVuzRGo9S28aNhArw2H4SBFFbuEyASav3QBtKMNqUXx8AEW",
  "key27": "3AgG3pxzc8DAwf8hZYJusGygYHKK8FPeCiPumYXGNCAkkfzqGuZkkhhVDcb8uEKhPqSHQ5WZdL1eCpaWEzNjVDw2",
  "key28": "3kqFjj3Nqo1mwZQg5TgUhi64mAx8hLD6pZyPgDWwSx3ZMzee94FnNEFAZ2Ag4EXcvykHvuHAdBtVdpZ8XreMvcnd",
  "key29": "2YoK5rrMcSN2cHdgfWhTbKFuvbPAarSMHM5ibqRww1UdeTLQHh1GbckHTNG4jhsk9Gotdm9VW35xK3AoFP4vdjNL"
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
