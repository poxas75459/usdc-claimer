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
    "4gGtL2HqoUH1EJDfGuhmvxayD6eo2rZJsjDm8wmP6CbBMJDPDkib7y7g4m4ATCXirhNcZdgoh4QKztAJwWtYyxBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24ggd9pHhvKQiz29YPxy2drfX3w4H9UrXMQS1vJ8np8vBYng4Fv1miN1DXQThbBzYRwE6wYB8XCA29M1QK9sbNJi",
  "key1": "cmMTZK3dRshnBhQiujtXnBPCEdJ8fiEjFNkK1FkakY2pBPdePbv5C4dejztYarTdj1kcZzopzq9S4LBJ4y9ULAQ",
  "key2": "4qndeF387mZxWaVqm4Ya2RPVbMoWgpdNDN92debJPtSNXoxDmoXMsGrQNpdJshK8GFvUDTfgNSo3aLGiSQg2qjeK",
  "key3": "4frLZpG3ZjRceZG7YCZATou5mUHcfatwgerxcs1TFm1FBNKz66dBK1dRkcR6vHoZ3ZBCxk8VRHQJPLkjnPCibmR7",
  "key4": "4YXJNfq2iyfPMyQGJaPJKkAjzLw3AM1SWC1nn9gaHjrpzwW2th2qc5L4nRdUGkE682vG5AtG2qxUyoas8T7qpV2P",
  "key5": "4g9gv9f9oSkmBuNNQkwEtGykBsqRdwxpahd74rvrnUqCDgSBqvZ6PF8FxbAtYmJR26t7tbhYc7fUg98FwbRPb7La",
  "key6": "5RgS6bcB7is3cFF6ykJ6meAEZ5aHncf4bb1tUkNRpWdVZF97a3ooE64irwy9QVBzHFZ2YMXGGDcD8rKEbbA1B8ES",
  "key7": "2jHyyHJptpj24LxRFtvTeFmCFkkzfzEMRNcju7Em4ur2miD4TjjjHWH3fveRFWnPxVt9oncyzU597eooTmmsfPCr",
  "key8": "aHmo8wNLs7C1pZBwT5kTmjCV737mdvgTGa3TirsyB8snF7mW7Y5vyA8K56Ja592dXsZ9byr6Afc95hKy9BbSZkV",
  "key9": "4GVFGoHsnbCVF92qQ5fffpJtsaUT86QwgWkmRQ4QdYGrXVLqqTPvBqYHNkVDorMDCbmAGdHUW6qRJr6EcXGgUm9E",
  "key10": "4B6jwX3a4c3KS88xbopSCJ1MBRKaiDiv4dgTHwdiPwxP5DDLs3QUaFQVZ5qauiwxXfD246PPCEnbo6VWUYw4Kj2f",
  "key11": "4HUKWDaMJzJqepcNhYJ95R3Gbg3PCHDd6BqT3fmU5WFf53YFwgS2HcovyLPVR3QdyijQDuhFY3bLHE4fehLXvocv",
  "key12": "4C1m98rCJR2SjHcfQ5gzgCCBNoEJ7WZZnoZByRrXN5jg5fzCTxUAbD8GCEfmgshd2TcUYTNAyTaeP1ay2Jxn4e5S",
  "key13": "3cJaQXnAqDQLfULXX5w9SFyKgHhPHkLQs3JMuQpvGZF2Le7BaQ61hWRkaWJ669buwN7Ya3soZxSnrgv3rYDYuvwR",
  "key14": "UhbigiusRixY26sGjKNX1sqj7XP1raFSH7PnsZ7gM2bG5r9VBthDBjpLHUsdMWB5kcB62H3PmahLM4caMVtwsun",
  "key15": "54Uhqif4PGpAntyZmFXMaJp5VExKekCgw4Npqem87Yjr7RaR6QMftKv87DmJitWhxrvSd6asH2RkHbKLHPPpVski",
  "key16": "5z1RoTQjGb99Wbh2juDyuCbWmmRxPccwAd5BWLFd8zRLkmAtrmX8jZXQ9zqZ73in2JdXEHbpQfwNRLPS4Xmsqns3",
  "key17": "4MYVeB1npDFHr14xwUaTdzqaCr6jnTYUb3emyBSRhWwCc2371PNkqMHmSiX6gLhPgm5ZRGDJGCGtWXP1uoAodEcV",
  "key18": "3sm5euQcBJmgKukpyZciciL4CxUR4oNxB6hyvGwuC2iXrNZVsTwXhesEWjCCRoCo5QgjECZ9ngYLw5fQbp41BJJ4",
  "key19": "2krTuQ5xjjTWSR9cJj1SJoXCurGxNFVGmJ9nQXnR47XMbggy59iJ3VoY4Nahw3qskr8BMrNcDk6fxHTCjXjwDypV",
  "key20": "5tSzvpSjKNUkvDcsoTe6ovSRraBswA2d3NZgN2kQv2zFzqzX9uZ1ooi8twwpmKTTFob59QdhpQQnaEJi9THYv6dQ",
  "key21": "2EXG9VhMgXo3gdvbE2ER5pz79Cpzj5EzxJvqwxifEBMzxQ5Gw7NY9XorwyLXG9fVmvo4avgX7Zzm5YaTwnz6GfoZ",
  "key22": "4Qy2rnm6UrKKNuEVou7CXWoSTaRFn7mspqESLqLWNG7yR2AErH83b4oi2egTpye2ZD8P5qJsi6nYKBDkoEDGtoBW",
  "key23": "5bWrfTog6rZpcG7txUBxhai3y3mQBfR7r7Tu8G4dDgC3HKCRYkwNEkey41FTM8EE6pxHVEycM8GpLiac2nFsPxGT",
  "key24": "5BMz1KX6bPhVwZBtsgaEytUG5R2NdXcRMXLQqT7L1iGqcxD6yYnxZUXkXXR8M1on7kSnqMUMwLk9CuuyYSDmx8Pq",
  "key25": "4J5RZK2YRhKhECJoJbhqoGdkFX7XfZeY37M4oVnR1yXf4KrK1ctCNjcajmNu8duJpSJpknV1D5rXhMaR2jZGN7bR",
  "key26": "GHy7aV2Z1DTW6RuhDQ1Hd6sycLjCQBTaYPt1z2Dmy4r1wgzaUQfALhz3TsSuKK6SaPn6SNRbTfuZeawTzG7b1UK",
  "key27": "4ZQKkKWzLGSqBcaQFjawrsiXQMuD8MD7rqX9XCgvNBZ8Fs7jivf625xAQKmLm7m7yWaoeApFnAa9ALDepB3y7GT6",
  "key28": "3Vtg8J3keJXzJd3n63ByssDdSu6UyT9tSxBe68W6DecGDN2LjJEdpMz5ZyePzTPuMdc9mY6uXQqK4bULhrEv4y2r",
  "key29": "3vFpYVPTPRhDwSXovTTMnxxLZ1aJz7oGybcP4Q1YegBwcXqhd84yxszE1xLh9b17TSfsv4Q63vJD42XfkuYnp67F",
  "key30": "4BCwJn6krw8u9NfecCuCCYMQnWrqT5po8KtBh5MgyZt6ofQ71kHMEmLKQbf15Yyy3MQ9SB7QTJYrycLxQ8uqmx9d",
  "key31": "2z6SgJpp58rSzP6Gp5zXjGPdrsXB3MBiSqqDfMp79uU7rJvhhXyA5D4u3cSDAS8PWhcqfaTEykrL3wfch3QXCevW",
  "key32": "4wtEuEedjM8rga5uqfHSVogc3uggpJcU6QjnDyNjTQYVqwrV4TThJE54NN5rWV2wgwPnrDqSYzduDRw1rTFow93y",
  "key33": "3fhoZtZtombiGskwjygYnM79BfwkkELnT6AoA57ZSYFGye3w5hhXgyr2rmNvXhzfXLEwyJjKB6hUH6mAt28thj63",
  "key34": "rfniGbPo9QHkZkagTXSxt2dBGd7jJXsk7R7U1MJCAvB7E2vdy95qEh9agvpeL57rBsd8pb4seJseZyCZegyU3TQ",
  "key35": "3DxyxYxNrUzqo9jeQSXp5H15cHvDF212f1tbowLhV7wAAKjod1axxvJVwos9JCqpjJHtFgtzFkWMhjCcABg2rEPH",
  "key36": "2vmd9ynGfXnWGxHm1ujFu2j7drRGyuyJfAyKeriAZHPLDEEHtd2GCi9ZGzfj4TVeRqj8PjkFekTumfp6Jhhh4bUY",
  "key37": "2b3FLL73YcK6UtczdxE23aQ2dPqmphdLvoXjNGerVzEdf82GXULSEpvEwtyZH424Q98oe7iwDP8pymeMP729dx1A",
  "key38": "5hfJLg8JBsRR2z3QZMFqN91P6jLS133gge9RgGB4CptDQCDspCjuRQwuUGhPvF4oJXv5xiWmSf293NKy24rLQqmq"
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
