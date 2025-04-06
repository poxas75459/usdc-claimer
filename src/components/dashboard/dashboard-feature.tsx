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
    "ysnmSjnmRbgYK5XVbW9dGk4B36HKaJYm1b3KVgfD6xFZbpNQPhf74BBgZKENbzwJkS2bN43pN28kMWLstx61n5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m9XQJ5LMiUiv684csxManNS9kwpyptkjVD5QcczzPKFmuSMXSquASdJ14f15B6gmcYWeD1q9RZ4KprMtKoG61Fb",
  "key1": "5FVSMYNP5k57ugeLKrphRthhJVfheb9hRBjuRfc5ATufuFw2NpD7okBzrhqHXUEKxLuE7hZyQqLYtiMNCYGX3pwK",
  "key2": "5dBqpJ3ozbadq87LMNGv1To2gJwiBJVEU3t9c4twaxoHr3eU3SWN1Ch2D1HZW2TwmMhAjHJfEYzkTswU7UNV9V3n",
  "key3": "5nozDJiwtb8ZhVqJXA2MXCS6W9pn1VGW8MuzAgbsc63ec2S3cB5gG2Nig8daDnvqSwkx2UeKR2tw7aqkbSAJuXa1",
  "key4": "MnHew1kNaBXoseuzyBHbQYd4Que3zxEwbq1zXhhG7ttoSuxF9pijdSEVSZvzZifFViNUb29qiqWdNwyzjPVejzg",
  "key5": "5ytNDpzKezHqfVFdQguBeDrtsSTVexQwhYA2NbY8VtA6iSbPM8B4xoQw8AE1669YgiHy3KyKCVPzGgvWoevgkSGm",
  "key6": "3y8JGXkJn8Ldpk3fK2uar2FdfR1EzaNtgVUpzAbC7wBZR9wyEcL5q9FSQfcc8DY5KS7Ez8cXcyjr6A5gWc4jvdnn",
  "key7": "3HHp9ayk6q6oXKeKPxwa3GDnacgfCcd5FrQ7hyMLvwDnxui1BsZrhq38zrqwgUGkkDRYg2iZhhH9cDz4Jz2XYQ48",
  "key8": "ecLu7votTTBve4wufAyj7X7GpQYeJP1G75amg6cY926MxKsa4Mw31PMn7aNcsKVAX5G4jaStq45r1aMkTn7dA3p",
  "key9": "51PwYrtAkkQ35A5SYP4gFjoMAQv8Z86NDy6itqEiASGXWCB6WQd7TuTFPqfcbhrjuwGh8zTbxUbkJiaLMgruu61L",
  "key10": "Hy98BUQKrB8ige3xQ8sxhjN8Cy7aTj9h6SunuVH4sd1Z6Bh5tT7LKEPb6CexuBogGNT7jevYamX1hp37xLmDNWo",
  "key11": "2Sbado49PLYprHcYvmj6d1pZGRFgA9MGwKGdHLtqXFYeJzPFgtoe5uCzhETnNETTCXYjukdcs82maFBCdWc5e7ef",
  "key12": "3DNyBKeiQoC6hFTSKHgYpZDVif8u6VEiV3bf44JdaUxs1xUV5jDQMzjCzQmGY12fiaruaLucAM1efi4azqzTdLsR",
  "key13": "5ZT6pDoxtmVjdNcM5i9nBhh4e7RHGysUS6JLp1kLwdRYGHbgqgJqXS3QLVEr1KhNWERXaXjevvcQsDrznUzCdXbi",
  "key14": "3KhcXUjjkjctGeTTU9zBBekZmLio1ifQp4D4TUWXCmwnCttMjQXv2Mrffq6ATy353538sA9HorWt9XTCPHxn98MT",
  "key15": "4MJ8ffRxRnhxHqxyFsxUXwhwfgfAkhFQamZPybNg241ni5cYojGv7M3YGkgMbLXttSdbzXqLPZdquomPXuketF1H",
  "key16": "3hjC1bDAocE23GBGaKhTUP1cfWeMwmVKvdFXCpeXXf2ETuv535CDzvUZZkVL5c2VGNPjrxLFiooNSKq4NFhqbkMA",
  "key17": "3rptj2G3pX282e31YFZsW8AWz423HyQYEtB8Uq7YzcAPVKoCzPpgQr7vLqHoFReX6iQw2sFZknTJH7VhH9GMaCwZ",
  "key18": "3TzC9XPQD4DyrPVx6WRXNwBg4X7mwnCrEqCmBHpRotZCgnPxP2YNqTrvrrbtgB85xKkgf3NNn632L3w7axH6h7da",
  "key19": "3etYupZoisKpVzX7gAwdbnUVJUankxTeCz68e2s13uqYRh3ivUHs9cUTrHkyre8DkTThMNUwGRBAio2hsrExSW3K",
  "key20": "4kLiDukkR4LAsbp6ZExLrB78caRcdmykMNBsseM5okPpyGddeDkeaLQC4mgrKWwvxTJGQTApBKksRzpg3f1R12nk",
  "key21": "5TsVBQFmU7TuJYWoJUHMQnbaAzGEYsvjvB3CGHiiiBuKW5K4TwLpr3WxL9KhxMjMW92qgcVXepgq92yiQDd7nUkS",
  "key22": "5M3CgT8KoKhPt3xCsGi7vwPojTa75QaioEVxJwv7RS4eTZYqmBGuL9icx3ymKZFZR4P9aL5nWoDgVcd8wpJCRxRw",
  "key23": "2FfNnnizdZqH9nLBaZs3g1ASwfXJ6qe3wQPECYMbQuxqy1veVpXibaJnsWnDucPFNU9Sf3acxFx2eRQrFHWbfCWS",
  "key24": "4p4shPApDXBPbrnawgr6hRczsS9mPTqpTYjj3ixaozkgFuRxdXTHibF4Tm3V2AE3NJPj6y93RskonM6Ear6c1ieK",
  "key25": "4AxhNwLEKrYmCjVbD443CaMbFd67iugT3sq5QiMy4xJS5JBwgQFnagVyCcRGhQutrHvMWvbeREnjaKeX1z4Qiiay",
  "key26": "66ZFQZ4SeB2zrKMzKC3yEYoz8divzBcf33YtNgntCh79eySNFyLUmmy9nkFaVKKmgXDneMrfosetNY5dUN1Uajq9",
  "key27": "4BSFXWX3JXQccNtEni4WXU9UYHXxNLnHfkb7uFJp2dUFL8xFEcA8MHWhFY7ggtUMKDV5SUP5FT7rr2U4iHEfMR6D",
  "key28": "3qJZvA54jNVn4K9xWKpiJsqvo6KCR6RhJuC2qdB6JD7SbMfqQUnv1Wv9wYewj5B1Ufe5WFYdR9iDqckBUtAgLx2d",
  "key29": "2N5krU2CNwJrqaKHUWEZTV3h9GhMenupJpqZCBpYPuKzqvDgbHg9gAysh86UjBiSAeqH5yDkNgtYfLSj8hYLivzi",
  "key30": "3Y3HKTPzoKvWRf4DLULFfRkkwwW7yk42z1wsS2zwizDfPk5Y7973wGK96LxXw5nTNaM9Sr4g8db8bJKisqgB8aUS",
  "key31": "3WLLc5xjYLfcibzb1AzGMGViMDZdLoyKoaxEcU8pZjsh9B1A9BdPeRf36Xgq29tJ6MqGxjEXAHJgVKrv87y1nJeW",
  "key32": "2t6DmUqkBGA5TSV6Xm7usCrYCseidrX6RnBi65U3hziyDNaEMvEzxDQWR2HtxoLs98pn8BBLZJHL2sVdcBVF5wYA",
  "key33": "3VwKEpJzSkempsdRgLj6Y96FNpo76kdMZPqwKQicHgcwFzPPZTQPAoWmafTgAro9MttGj36b21Ur78pF35zT9a3a",
  "key34": "4FCozuv64vXpGYxYUHrmvT6dE3cms8XqNq6AUMcsgP3NSUycoLLM5TrTrKr63vt6CeiN1LCXfWyNNBGtCq2NMCfG",
  "key35": "4H2QUNeZE1xnxPrmFTernxrrBPvTqhcKCVuHdXk7pJ2LPk8zFNaMLNoWZYcVFtwygHcWTCsxssmobKDCPwukwXNo",
  "key36": "5N9qoJSgxxbHMu7VGYNkayvDBCyfJqFG12kQW5MJxn6M4TuN4FKD4n9wyCPJHpugi22iMzp1JCp45FqVGA5jP7qY",
  "key37": "35xJTxQhDez7KDd6CGyq8V1bwnAMk5WgM1312TKqup4ZXyHhFsiG12dzuaVqshSGcxpPuDP4Q53DTcwwSHGSyxb5",
  "key38": "52HyfBCjv7SRZwKqBdzyycfZKDtNwmVizxKeRJYg1RFBiUb6x2AgU2Ma6XHLLV5fd3HjLDWAcjg2rxt55wRn7gfc",
  "key39": "5aGxLt3gWsgHQDWasskaTogZX65bk4ndDtKfSoFSu5WoNkyVcnidiKjPpGpziLWVuQAwWY1dLefi2CjEEjRA2CNt",
  "key40": "rshGhEegmJnzA1BZpuipYCzG4qDaogGCW6nJXPkHBLYjf36PavbupD5MDCEUx75HBvBFHqM8JMc238VBY4YF1TW",
  "key41": "3GdiN8ix972765cGh7NvXfkn8frLdQDLbx2zw1s5Vogk59mBCZZYP45i2DjZN6Li812UZjD4K1GxVSTPLiRbSHvA",
  "key42": "561EJ1b2ECEEsejMN6LVmxfnYcZeETPaXGGi74QxLPS4u9Cocb59Ym5ATwwRiuaroa1aUymtWAKQsiTFJfZyL5LU",
  "key43": "4ehZVSjeWJepmZkzH8hcB9VG3PoRZyVVZxHNaukqTZt1TmX5jKzBEyMyepX1YNuxnx7LRoew8ZmdH9eB32FZdqtG",
  "key44": "3bXYBE5LLH5MTVU2WotkzDecWMNaV81Qby1JVtUANna2EMKwWGXeEDeXycvaJsrCHvAGJeQW2Y8SVZZCg8tcjkrL",
  "key45": "4G6tMTb2VW7jpVsA7mjLKTxKGKCZaFQNAy5xVYhCzQvRSjYDEuzAnYRVmhR5aiW72yXRA3QizE7cb398VbfDRdn",
  "key46": "5gRQJnkSAXqR3bk9M1Gp9jj99vMyv8iEjRQxLJQXkoNKV5nSFZcdmVhTVrxKPiPWch8TzyQtd8GGm43euaCBjWFA",
  "key47": "3sRzVxyt17bP3iK4TRmanuxSWSfVDEwEMuhn2V4QKwi3BJhmo32sXx7SLnzJ5Qnh1bywuDYAFawf6wXnDeznHfXw",
  "key48": "4eXGLLXV9wC1mC9TDL4U7dTkjCW9JrDxE2grFFhfojhwjGJkVWgVTmuLbhFUURuhGDSxTnrYycXEzSTRrS6HTJse"
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
