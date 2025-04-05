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
    "4D5Q3xaxg6sLYCPYt19dcXCkU9uRsQDooKzfpFrFxB9g5yKA7ziWEfsXTnQKB4wvLkDP1gF7hpdwpMaqT4Zmv6VA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27JVET5581T17LBFyjBBw8U9nDrqTP223Z4PzYDqFj2rxVbWGdfQREYR9Ue3tV9xcWJU8TTqpNFnsgQq82iPES73",
  "key1": "2YjRS23yGpu8sLaaD1Z3mJjLMs4wBdD5LYXkmve5c322aze3FHLcRCh8qr3Hzqs1mun8oxe6c5FnnQLoMT3TwtVe",
  "key2": "3ADkDYQ1uWPvziYRi6dTQspd7vYQp2Cs6Q9PxZ59HyMyLnVtWxXch6M7tBJcTbfKGPpo7qoKFnmcC7s4ux5MkEFM",
  "key3": "61tJdeWwfELxnbt8mwprxbQBe4DH9wMytvokt3ojvpWHZcwNBtRGmN89dtxjgqdRkmZZGZqV5jWFqXXCKKwbuiDd",
  "key4": "C26JRofWs5eGCdYpTqhYUh4zLithABdRuzngfvTCLVgwLHaZkSta8hs5zH6Fn2gskYhwWtHHDFwqbr1K4n7GNVT",
  "key5": "2qC6En56KFoumaEerweo4fcVFjWryYAGqz7FPgVZozHgVsHHKoutB3wTNkPatg84Ew1XtL4TSTj8bFuaJRcmzk37",
  "key6": "jkwrKv1hm6YNpMypCc9TKxr5JijJeZuAUUE7xWKRi7mHMMAPcJQ82tV4jNJwCTRrW6mzXPn7NpYkpRuzWdbC9n2",
  "key7": "CUQFtsBaGsB7CyTk55KdmKxKXcQXL4C5GdQmLKDe3vw472bgtAH1trwhfWcRC9by2V6FHTGMyyV9yWko1UAhdG2",
  "key8": "333k2xmMZbYxUfFhkRHRdqwTGEMkt9asZxwTGxytPhQFgHq9eU6kFfXfEccPpda7eVraVzqLnHncw6dvMmSR6Rby",
  "key9": "26tPX9FaRyVPjfWC4q3gmvbUMdjcufN4c9F9MGASdjCQ8SPEAHUP1x12MiAjaMxmCQYi7v5Au5cydaeKnZgp9mVz",
  "key10": "4rDGME5Tpxx2TVd1Bvu4AnYkraY4UmjUdnHMs43iNY28CQpd1EnxzUCsq6yZ4wwM2vRprAXPn2UKRnokFdvBW135",
  "key11": "28ki9theX98kioGXcuLM2bMR1YxeP3KHe5aPhHBYEcPzLwRXNYfrXoF7dAMCrV1JPjFJCLxg6LNFixz8rKHzJi3J",
  "key12": "4L65EfTKcwgpxutWzwdhA7Cp9vuGm4Gt1GZPXSzBhnp817L9RE7KMXRZQyPCcC6bs7RLXUB4NXW8mxWzaDrxPNnc",
  "key13": "4dsvuUa18SWsH3qth38L4pFyGTnaHwH1zq19GsaPP4J6YdzXpX6j4wQrgMzgG857vM95EEjWiYkeGiEWxgmjKzHU",
  "key14": "23ihfHGi2duCkppoqmaoENv64sVFRqvqP2NtJwv4KdeKwDTxraQBKbA4JQaQ97AYNyJboEAmRbW6PcQEJhfUiruw",
  "key15": "4CK1gzkaHbFH6d9YFWK2rYuTSdAJXRv6Sn1bxAML1LUjpqfT2EFLHhfBRSxC9xbB3XafrBL2MwXRte6JnvGzVdHz",
  "key16": "4iW2Xbtkuu7BEY5iartzwSomkWjwFL8dfLWEVWrcumgMFEGeMVP7LnfJ2PsyBJQGsvQMrQfCnNR2S6dgW1brcKqo",
  "key17": "4AP8aDazUigZBCLh9JRpu6gWLNyaNpF3QJahbNbwu9rtJN7hRcbmavvPZNveLjjbfQUjjtoPqQHzRaRCvyYLhhj1",
  "key18": "3mKa2JBbiwun2pef5b4PMQMvJV42oGGbgEyVdtniYZ1rTa4TiSsYJLr5RudQmaAH7Ts6sBHGsWsF1x9t31zX5X9W",
  "key19": "5AAxw3tEWngddcXrWv5cNCG2wXs1u1WASkkptuYhQiaQbF9WVy2FU4mAyxcYT1Sk6xXvFMdg8sseo6RYgUurhxNa",
  "key20": "49KFQZ98paNoXmQ2yVfv264UhUPJo3nZyHRFt5x9cis1jikbfz8WLhBwuQBGx9pqD72z1BSjDWJACVRw24Fa78Ry",
  "key21": "4dZoYkauea1FjWiiDmm7izED6cpjkPvJt1bSRSbHJcLh3SCiVM84wosx219eEsUHstbk37npRsvrhvTVppiMhJV2",
  "key22": "4pCW3nsgxcXCSDqn1S36R15SHTWxKAKYqgZnvGs4KaEMJXW7kzbmxxqhYNydSDXDKgF4wR4DfqpjNojCDZE6KnJF",
  "key23": "4WEYvvYm3qE5AzbJJkezi2MBdwuif5hCqV1NHC73ti3LXnV3tGAGUw1Bo9in82nUYQHNrat4gDe8sy5sjThbTKnT",
  "key24": "2xPMPQUhjrc36myvr74uxyjWAbg1VH4sHe9KQWsCfyzdc5YTfKhaUGmoeU19cSjaH4ZNaH396CHWRNWhUSBt1isY",
  "key25": "5CUyXeZRwDqScsrwUcZyc2HNYhsYdNmCJhX43c3pCLzi6j2trDZiLyxAcaFWgqggBHQYBZN9NdmyYhjQYBsaiWuq",
  "key26": "2wjQLcMyDBxAM7GVStkpBqd85chPufGE8egDu1LULWspqYFUvjBEa9zwLBVjXzrrgwDjBRmvVzM6wtQbVHRZuu8F",
  "key27": "2cr2gskvyt4xwQAuENtN9eDv15XMMZxF4Ssh3aUMzvUVpEP1nCE2gSEwEBMPXJr7v7MoxHC9EZRafUpqjHwiZjVi",
  "key28": "4Q2dMKH6Ev5gdkVPFJ17rohcw4s8iKa9RWY5FDmHtTZpcEayCiWFC34G771SknVBo849p9Xa2gaNZ19LmqnQ811Y",
  "key29": "4wYKYR54LwhxFDQaGBqaLuZxoijhNVJPnzmqF1JwR1YGq7QzoyykSzRhJJ3TMTW1vPJqUcgE6YHtSuTHaZYTVW5V",
  "key30": "3nnM1nUxzHTmYdHYgHyAc1hni2yCbpKMj6kJktJvhbcytc1C5v6yZ8DsZpHisNbmbTmqEzKg5mhazqrVc4hqZL9x",
  "key31": "2sAS61Viu4rC9ddWETq7SinNAk4hH2xjpppHR66f5BvGiPVxsfkThonn7aRtmWxSpKtrcAmNTHmh7jVEhPSgXqyz",
  "key32": "59xwBxHbxK8HNGvHeH5grhzhKdf3JuMiLCNQX8jixp5D358ueNGjBzcNUw5GkSsG7YiTXRGuXgYwUsQjVmeFZvcF",
  "key33": "2oSPPy9WjjF9GxeYUSqUJzgqXwDsZsWwcfL6BbEywayADp1Xx9G7bqE1if4twQFLVFKNbpBS5HoMn73As2NFgicZ",
  "key34": "2885YfxswBdejzsbA58dZa98xLthDBaj2S8KpvBcZwEfzxigzj6beT1Aj6YDqn7tcD6U1TFHQQQW7Gf5xWCRELnN",
  "key35": "7wuG5Ts8kff4PNV8dp9U8hopFWFpgZsFRKbNBhFnrtv4P4gSw8ZUouPoxpZJ8ER7ViZpMqAjf28pJBGBUxMqa2w",
  "key36": "5EsfW6SubH9Ker8jN2GbiV13ERxSScQQDuikfXJsefPBRxuE86L56D3fBcXSCyS5BGrcCDUdtzVhSMRVabufAXLE",
  "key37": "2bFbumUKirfrsRfkYzYYSNoJvg5XCByHuf6XxhyA1BbCZXf8Z1d1XYjHsh99DzzmN2A8hmfM86jKkdrRrFHuBBNC"
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
