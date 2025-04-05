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
    "2oWTNpsqci98jpa4fU2wurBag9kC1r7uYoXxAa2svtiD3xCyo7kBWwDxTPxgsNVbYX88xNX7hiQDdEHShmeizT7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zUUGaSbmpXJcm42yrWpjRPqtfmti5o9cBE1H8e4hkjBgHZVLj7N7QTZTKdpbpHLrxLsXQJsWw3UKkreLxXk5i9j",
  "key1": "64TmeDk8C6EhQ9QLprveC5PSiRx9PqHQwQ5ZG4HzT5JmufiGX1UEKjrWReYhLiuCeFwX6kFLA7JzxTV2Vf3Skqdm",
  "key2": "5fR64NechtRW7q7dTLvPMS7RpBwgTmFsvNmgQSERvfaSdXQP2fwvkUC7RmtxJqD7acVrfobSsY8GZWgwsoWT49yk",
  "key3": "4nQgi61Fiw5EVL827zWDfi4A86zxqBaRFcVMcNjRwku1UJwtsxScSoWDWu8fdCaugRybvqshhYaQzpTjjksFKGA",
  "key4": "4cpkyUQdFbqvKo9dwJXGv8LZgpeFsYcMXuNbrfJjZdHH7um5jyLSmEiYazZNYk2pZBwaFkDLy7PMR5PoFfaTXFDz",
  "key5": "3ZJBjbeiGP8aEjmvbVQQHC45K2nGjP7hjrConhamDHKZRv5paGHwT6D6RzeakbemEAYBPKtXZBqj2YxngdzrUvD",
  "key6": "2xMTFpueyGsAQEV2RVZ6j6mo5WhcGXybYRqSrw8a6B7LBv3btD3s7D3M4A2dzXDbVdyfUJN9uHcPwDnmuKAWCVqf",
  "key7": "5h5zFiDBgURxRwvDL27ar1avpGCR9F7NDovCDRWeigggq7q4e1Eqe5bYYmuP1GgbJ8aio482QvfCxFPxHGbtQzeZ",
  "key8": "2mziuEnSPjyoWL8LNUqNonY64vrCPN6BkwnavUV5xuMVLEFvMzQfPNy2iAcqCGU8r6ooARpmQSg9bLieJnMmeKAd",
  "key9": "3oM2HZ8NfC5QWaJ81d63DxaVTinJ3KfuXKv6CELueQie9zfErt5Z2M5jJvZeBvJmWu3wWfHmizkRWgxJSSAirt5R",
  "key10": "337rwJ57zSzPF8cJD6TxhNcdenkqCZ6Wt4G7ErvuGzfzSFuHaDdSd8Far7WidxWuUhQ9aEF9H7SHq9p4Vx1XNMx",
  "key11": "5CeurTtvWgP4AQXHhkuKnBPMSbFsKH1EwnF628MSadyPoEvHU3s52FZmxUGfU1di3qAisrBALbYy12VKF3Eo4Nx9",
  "key12": "4rALRzonEJtjvTv5DzgsRDP4WAb5z2H4BRcrWwfhcDMKchQKicprB4JuwbPYoV7c2hEjvvQLByWgsCeCvf5KfKHG",
  "key13": "5Kh1cSXEywWBynWQHw1T8ZzKDEGPBkRb4V9VjyPBhR7DLbCZo4TcxvRovApU5pv8TA9dgQv2XgFzAJMjsZY9mbMw",
  "key14": "4SEdZa5W1zoNJh5mdF69SFbqgGQn1HavGNv9YQ6r9wEK54jud1Vnnm61b7r3xfTqg5WWiNbWa5wiLng5PTuLG6Rd",
  "key15": "3LGMpXgNQPHfZ88dvycdspzLBNcKBNDzdLqaTLaQXhobRCSk94uh6Uk1hy4D6HSgtsCxffq6dsqGLLaYRfBWc1TE",
  "key16": "2YepmyRSKsqCPVtZAmZWzDmGGyxj6eh4PXoZ13XttkbgWTGiLcVKAxRUvsBVkvHupHg3hSxa3FYojwPWoAMGUvGJ",
  "key17": "36CRFzKSLed1dAtZLu2bLyaFDpyHCKu79LkDQaoEhGXYrVjoyyfwET8HLC8J6AvxB3QzBowkE9qgYJdkcqDJkzAu",
  "key18": "4KAoFHjCC5RPhEq94ALwZ8SB4i9Rxko1rh8XoNVvQ4S3oquy2ruuVzLmfE4E7V426ZyH9PC8EkuJke1MgkMZvqXW",
  "key19": "5c1rMNuaTfsrSd6CS5fjemyyAP67qj84eBEPmJcSyftJWXqoB2hLr14V71jiFY4yGVasTSmKoeSvdHZZonx2413k",
  "key20": "2EiA5Ewa22NHrAZqrPHKkyBbHEoiy5J4gGjPTz7iFcUUw1KeN9PQ52AxatShqXUnoan8h99uFgwHiX52VugfH5X5",
  "key21": "qTzPhbK4LxVLzYVqbcvYrhC1g4taMRMbPpNGPQKXKBvJdZuVCPZgb227Ljd5ixAYcvfE5SZwujUfVuYRYUEAhPS",
  "key22": "4QcgKtsqYqCt2cQWjgte95KEviebVMfVRtMpkNoJzXSbtTZoGZzQDbwocczaSqFif3TaxGq9CjubbfxPAz9yB5kd",
  "key23": "3qcXx3ZwSDbHBwy4UiKpf68q5BFJREeyja9rb9BuacJissqevW3vTRpq9Lx9Hufusyrp24nwJuWPc3apuPqKT8ZQ",
  "key24": "2snSspkXD4wxH3rN9JvGfpcxNaecWDx8TizFEv6VHE6pzTUoV1N3tnNBABSaDJMs6PHtNvJR65LPz5oNj3WvH3Kn",
  "key25": "64g3LBcrEBUZyndpst49ErrioY7VewyHLS7ptSXzhV39BdNWofQfAA9RPR4j9QPpamZ88rLmoWUiqW7NhvfweFPW",
  "key26": "3R5VKWb6GwwNwLncZAhuLhjhD26DCxL1wku8nPV3Y6yLqC7waX1PZqhZbRRBLKh9iFHSdfhCPCzWUWL9yEBoygxq",
  "key27": "4WMt2cn1164GPfbQ2b5A4d1BnmAUASPtAPywfXeX7kaHeEFD7yC2MgZdtqmdcWhDXPAVbwtyQJ97HLV66zdce5ov",
  "key28": "2gJxEpDLBLtaRsf2T6MRn6NPwkAKcoMfmCtVvwV1vfTsWLY38ZDpA4vEqFaeVv9Uno1CRKrX4y4NAPiyym7jikMN",
  "key29": "2fP4FAMVJniaBPpmDQSZodx69ikDAmkJS1xnnzLMBSJEP7EpqJbnFKeHLHys1qYdxXiSSj4STPzh4vA7mpuq4qiX",
  "key30": "3K57jW3XDjqWy2QKWYNCewCQypMunGzBLer4e9S2RGE5Hkm7aZex1JbKmzMES7Dwf9YBTY9RdoK4GP1mHiPaaEW2",
  "key31": "3grqST6WsTPAicZJrM3kqgC13qGtgG4MiSGwLCjDfzAZNhpxmTnD783VJoPBj1gr97PZWzNcoNGuQFrLXqmKcr2M",
  "key32": "FN8pPBwiVqcUZGDNuk1nq5srgDjMSHEnZKwcisrrPsednfUDmtdrT4HkyXKwHrAbQumMKQjHppRmdL2VqCdVNkk",
  "key33": "5cLFvf939JhJ8xrMQs8n9U7sHueXguTPvhvM85uKctaSqgYZi888YD69pVHWJAK7oQVFGTSuNryDzCu9R2bdA3tN",
  "key34": "XuQJy6fgBr6RNzs2oVj57dEPxiER5QrZLC2UHVkKKH78pj9HM4XcgeG3MrWi5wCN5gPzEqYAeGghsnxnJt985RX",
  "key35": "4RS1qHjKPNuSL1AVZTUeNHr1CKsLFTtdnCrvnGAVGRmvifJGw6Ae1WEKP3KJtyiSDoFJg3xFP2dqwHpy2FJurtj2",
  "key36": "5yZQ8BeSovTfBqkZ6rGEU5jykTZ8zcRatzju1qgpw3GwbeR5ux2zg9PpaStmtgZmqUgSDcKeFdhLry5pUf37csZ7",
  "key37": "5QYthFMctpLx6EsCrURxdxvSQ7CzvTXmrsVYceFLekFTtHJi2cuXx39RMk4Q2AdQY5Tp8ksQBooQS776bxqbv8m1",
  "key38": "4hJjmdFY46iNXemRchFNvcrsi8TZ5BS8CVL8f6rzkyRwsEyYkspDiSuvq6S3NJoL791TD4Rv6wx643eLwXhtiaPe",
  "key39": "5W4tpcjQgwbu42beNJmLzZNkZEe3rcJx7PZNqVjYQW1SJu4VkVssTK179GQoPxvGQkGzpM1MYQkWCtXme7aYukKu",
  "key40": "3hUjcscrxsXjLAZv8my2D2D9opUW4uh7RppxDZzg3jdPjsBoQjmfeTEWyAjZ6wexmzZ6xsnXu3hziBmQo9iwANUZ",
  "key41": "BPFTMhJZphL3QxzSJmPFJxrBcjd6am84auD9zA8jSsA1uR5kdmdM1qKBGsqPkNA9cg91Etgh6U9kPAz1yDxqBKc",
  "key42": "5M4iBbFgDf9nVRmGx9CcSQvDgXBw3KCn1xgFYSAAwGFwFQ4TcYnMp7AgFnz8v66X6yp8DPJ1gRSmmGRpFUQfFTk9"
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
