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
    "64a6hU86pDvTDVXeG76df6NGBSHERn4tNAGMTzkkWsrZCFVNhhBjCMQmHvf5twz7LoAm6PVbDgFhREg2VY71xV5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D4h6piN1jxefh3Udf8Ypr7We4UiRWNziWTfB3jSTLe4g8iwQJ9TcHSyefVPUp3xTaogXECCks5sqAVNMpeLmYDA",
  "key1": "iaUV4U4XwbJh42NbFqTfVHWxNbs24ZVjsTs8aeERBpFRtJPchEiEQTdVaHQS9cHXcVSTeYEdjZbzWofLF7MiGn1",
  "key2": "fXz9SiUu8gCyLjEo6yGasMnpKs7uyRRRdk4nQqwnDhxjemuHs68M4E7agYLweCCPYMK9HcxiGu1q2HPuMyJ5QrU",
  "key3": "3JQXuQNEPaYcFj1y8BA4D1cDfAF6BrXy1Aeu6Nsjjyr2ZqPwTUGheRvbKaQyDEcsGbeBhQBFR794ZbmjJDAktqJ5",
  "key4": "5ctKRypeQaddMGZLfq6xBWnmnB5X5mMGMTQBhp7hMkVbXkcyqKdVQn8XMBKJssT7GA8JbANpX1aGjPBer3wMfehW",
  "key5": "4f7VAHr9c5brBYGp7NJcx9VJaUonBFnxdn66KgMbgKiKvgH3PjVHmYfuZcNMwpNKtBCXBEVmAU7GmXohfhPQ6oki",
  "key6": "5R1uKECwCQG14xUzj25taPj31YAVLezYjVerRbyyZuj2iRAUEew76YxRN2R9c3M23BMT7Zt4rg8H9eXK695oJkDt",
  "key7": "4kxP1QM1JHHrUX23g5MFznfTauY4JH9CuyxNKNfxQDrJFL3hbcKWNRoxkWGLmn9kPphxgZvzcDBgesbe9ymry2iG",
  "key8": "2m3Ubhcb5CM5xv4qeYsTZpDsd3MtnQci7Hr4AHPRD4nj5sScw3P6KePu2bWWjcq5LUo64TGDXiYTKuMz869Xhnrd",
  "key9": "383fEX5PdcXEv2Z3FyxU46gDT26VwZmxecSWodftySX1bPPrFUtyG4TzdY87Kr4xXnivvyyepYN6WVFvEZbwCH9o",
  "key10": "3JuegDRbm8bACVMZSa8CYuFggx4YtuqtDQrvbrQaZmLuwuZTBuhLFFUU3SA8KMUd5KpCdR7c6HN3wdaioJUqTC5G",
  "key11": "3kGSEKc5xirhBYTGZYecJuayi1LpTApmhd42AWgoYkiANqet7xzogRvfcTu2kaqQgsXXhHUQW8ZMpCJbprdZjVxK",
  "key12": "5KAwPeSQPRr9ynq1P7DJLtmLYJN1efrYEu2KkRB1Kcz9KuycAp5pg3kKHNRB4SxjD7McS6fN6KT12ai74Paasx3M",
  "key13": "3YZjFBysWj8U9kmzYiFRb6EoKC1amJ5tkvR7aHuu2XfugcxVLJfoU18ubT31JFdLem5GTJeYWquv1kdpJmPhTRws",
  "key14": "294UTfGCDT59aBJz6CksTp4bv6gS3H15s9C3zaxBQLZgFbKyRL9aLjnXqUbV1JADmi11vZLngNYY2792HLhGCM9f",
  "key15": "5ThWBGrrgvQVWBUEc3F2ti6Z1WdtgbqnEFfhzMqL122nbvzqGwau6jUhPyAAP2aCmW5y1TmFxe28YRo7YVPxXPHe",
  "key16": "n2Z27vFHwLKTwQzgptUvWS23xDfC1ZonzfP9zAzFdm3zTphVteDGC8Ce2Defyvqp3B4kgKibPgiTzh1m5ro3oL3",
  "key17": "5qG5CVcVuLvPXcrHWsSmCc98tT8BKQUJCTViJQwdA9QQJBELoKporjCz1FQt4yrQ7tX8cy7FakS11QH7VGFhwHFY",
  "key18": "4LTY4m7Pud9BtZPFpVGmn8XGQ5q2hxtXUGwoAoksLRLkLFNqzAEujPdhHQSZsgPkiTa5NzRka3RropaytQh11b7k",
  "key19": "2JWPpGfCgGeMQqE9GY8LgcoVH1SEy7QZi5c9vukvQCZ42h2ZECywS2XosKuUEPT67Gykdj4AXDtBPrZ9TMnY74Ri",
  "key20": "BgnAJP3LqAbhDHrXyeE5JZgsJUSXkNJajE3J53RPeJkGSAwZxznRtBEMmmssaBGs8UKkDP6QM37wdqQqBHphUTi",
  "key21": "5d4LQjyEcHj8vxKmRDHDZUt4xbVY1KsHH8T6nt6LvwmN2yAak7uLsyQ3pWUQDxhhRbd9DPed9xw2UzbUZ8JNtrrz",
  "key22": "23twZ3WZrxB7UaporJ85N7U4erixPD7RnKLe7aJ4aKntcqehw9W3EnqxAXEYaXostTsovzvLWoZhgbcbn4Lm8zwc",
  "key23": "4i15ouuzgScUibAoakhPesbMhUVfDXPNxeq38f6EGKueasf7Pcuxdz4TT4ZcYf5YwMrJrNqHmS4QhHfLcXNTUe6n",
  "key24": "47fNCN3kGtACNREZoYtNBoeqYyWNAi5cZdKehC9J3xE6TNGiKZYwe4Cp8Pt6vMuL9ptZBQ11AEUkGsB7Tji5whEq",
  "key25": "5RqKb3osxXCtmQreH9iBxzdqYCNgWgyYqPuBo7kwUnoLkPM8gMya3f6e7hL6CXZ13Ss7yac8FmXrN8vpJ6R8MnWC",
  "key26": "5T2WB5aZy9c72J97Yb4dzDk4Pj9pYQPfbgxMG7W2H94bzwE8inHdn4kPWszYhsQC3MGr1Egi96AEuKJjFjLBnEek",
  "key27": "5yeL3n6bAFfzx7NaonnAKexe2HsKHNzRLLfBQtT3SnovMRqf5qvFGaNUoDKH3ZHjxeDgxcfyCDEeY4hKr9kGnGm6",
  "key28": "2MZXpEPcCiJ6QDwxC8scoeLmou8zjJjqx26GtB174rc72uvyR2pP34KZNdVHLLjBASWZTtaWA2e5peHAWWATokWk",
  "key29": "3Qnq5B7GzohceoMXKUQNgLBZCxJCwREuFdXTeQ1NshdUirgcQuiJvnwNoKK5TivHJ8GWBuZecToy8HvKRVvgTDkU",
  "key30": "63uWZY3d3YU9BvddNz9Erb7YW4qpEB79iRYgDSDdzefQZsrhZoE7ebraqXefib8sBR5mRoE98avKFMLaZHhrx3zX",
  "key31": "1LXz6tDifEBVtZPYjKTYsGX9iUVXtFDgW91tvN4SRUUbRurS7YpWyxqMZKrn3n51cT8tPXUbzBgDxogCmJyrZ2i",
  "key32": "iyef2xKNn1HmR5aV4ZyXWmKmxWKwC776EtkbyXdZyLAohgetdsgapheFSYHT66aYgi6GdpFnEBZ2FZCMq4xZFvy",
  "key33": "BnRnxA99iiEfZtsKrAq2MkD2wiSWzA82q6zKASMMBxSnuqv83jfujxZm5ef8Vqt9VqavPr9MokGRnKii7R5b5ea",
  "key34": "3nV42ahqc83qmrVR1bwR2mZmULKvzeX3DgsMqj7WEuCMkfScRc3wo7KU6hqt485mfjJVQ8qfANc4Vj2LQPmvpzJe",
  "key35": "3bVcEHi9BPzeHWSLUSZU6LdmZpVouhvPfYVUT4m5MgLNemeqzqPA8bag6yf6qYY3PBhbdyh7EWdAEVm5vHhj9e7a",
  "key36": "2ghAKUWXaP3TzfBq4G9ECwgpnroBHFiM29SRSCXcys2xRpU3JdqsBV8Y9DW2u1sKUUBByminevdm8ae9AL5qfqJh",
  "key37": "3WkWcCERkRPKTL9Rf2zhPxuH4j76DrPb7tmtJ9NHSK99EnQPynpYomZsxvWZHoG2LKcQXjWXs699VdxDvFSbpnWy",
  "key38": "5ftpr4Ejvv5hUUchpWFwDRynL25foheYCemvXF5uLU3U2x6v58MBLcgynJty8R9x4Eu4vUiQbP7Rzv6cqRDkPtpb"
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
