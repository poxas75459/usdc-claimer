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
    "5gVTV4Fh9CgA7zBu6HZkqpLesmfruraH3xCFTgXNTphbobnnSfdr3m6G6eEQHVtWGisamPiawkfwEXqh7bYSoEj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H9tcGbJmfbKgrTJ14TF7nDLsTVQ9W3ZQ21kZxjZxUgVkx4wHbLwLEYgHgw3E4XQeVLGhD1MgjETZENWWzDiCYtj",
  "key1": "34tZGTdescAqmuUdwFtrvrwPgMpUT7sV1yeQXjsoDLq1QgDsnvXfRdKMhEw8ADiKRBgQK1NCYvwtmSi863DxjmDn",
  "key2": "5VTpg4h4jdQfandgFR2QiJKKivtKAxLSgJBoyeZDaovYvutGdbooWrF8eKjZdsfwsMevxmRxS8x3bBbhVanCZSgu",
  "key3": "YQCvPibv3bx7oVqKRPR3zUKTnS891XqPmMSkw41x9hEbZZiMM5WBC1wiQTbpHNRGMtscW114bAsidwahr1oVz9k",
  "key4": "3riv6ZB7t2QSGVRFisgDf84sMaDxd246HCKKUUMYAsCXMBUuvhqKNKG6wfrH56mMG9NCb7D9LZPdGPyQJxyowxJe",
  "key5": "uT7me5eq5nnUKo6b6fskYCH6qMPHP7QgoR2q4kkaAP1bD4fML2WBGo92AuKfSqmTmPW6eNHRLmCzUqZfTSv1s1P",
  "key6": "2kzhdrWD3UtH1Fn7V3bmQAKcvHJwpvvw7V1iiRNGrdLMonUcfPMUqmwp3Q5sBqD5cvAC58FZLb2KhPt8hyH9kvAi",
  "key7": "4mFK9m5tZ9euGVXtF3DrAzNLnswFypeK31bCcQQx8wJ9rUV9GYDdSfviPRARoGKUggPmpUry5v1qvdMG5v4WDRS3",
  "key8": "zBV8vJKygV4bUip4yFTyAevySnjFYzBhEvSrmNjdvLdwuPF6WtXqRY7DzSGYRBXxSRimjdaz6x8f63cvoKRzbSy",
  "key9": "5tQ3TskRCHCEFeAWW4cZuJjJikvYqTGKMsg35s2eU8Jd2h38cHWE2tcP59jUTqY13c2LGiLjjCjw6HXfdD7wFST3",
  "key10": "2yAxP7wcrLHsfGCmenSpatZaSgGW3sPoNWFveYKuQjzrVYKXcd2vb9HJnkJy9ipiSL3VFxV8KhPzHPCxhtByA9SL",
  "key11": "WTVBxAV5axjuSsbSsJ5Pj1h14c26JCNBkEzvEAQdgS41TfhbkqoW8UkLa3fpePWFJXFxxrbE7QqqBwAKiChQ4xG",
  "key12": "2HsUV4sbg5sKLXTh4hnFSTsKwntWDLqWauVVmhxjdeN8yHPT5NKZHgUVq4b3WcQb1uq9EE97uMkhWTQSJeakS9k8",
  "key13": "EyeMoKiVstvt3gMY8WjtvEy4xQqMfJosTNhcWcQvH3nA3NUKqpBCuNyrXXD4MuHmcXXALu1f4nF2GDy57W6xyXx",
  "key14": "3aDuAj6H3yUxVPrHuAxiHmKiGyN2EnqP17bWgMph2FedBDFK6wdMBv7piAfgU9MyKNRvAc5BB2bhqhimircuE385",
  "key15": "2X7WATsM9EDCTy4hKgthx2uaUXWAJeref583YDtXF2p5oGiQHQoDVr7HfPYr2tcuE5zdRPU6DbBwCw6tdUs8XXQL",
  "key16": "2LDNxox3es4GcJbcjGZ5cZ3xHmbEguuZTK4g1uZ9iCpQ2shBvCA5XCESdxBQiro38Bj7Jmda9NzZ8vLa3scDpbWA",
  "key17": "5tuvHeJW6eUzDVr2myhJ3WkjuHH9X8dw2EmGaSh3arr9QkGK568Ykz6t68GAjKY14yxrXZcfwSZS26n32c6WoNp1",
  "key18": "4P84rZ5W5X6yzeniQxU5SDz1Z6dyYvNHDvugdhGyWEZcsjcE8oR4RZyLw8A34GJnUgRrqs7v1c3Vhn6MjfYLygri",
  "key19": "3Y4oPFTjv7j5678huWnjDvr13hgnnKQvh1ajnygPm9miSV7ZTTzS8trXKpC8JwgNwghQLW5maeQdST3re1Y9mvre",
  "key20": "Zbkn3AABY6QCiKdbuNZN6dNsDR6AUQKA9eYTA6PZYMVyEeU9FS6suZdZDxttxekTnKYYf2JYgTtsqAXDsYcWgLt",
  "key21": "NJDHqeurTKsmCSFA2dhZi1v3JZQjwQeErkNnBT4xK3gxWFg4tJy5C2JmDU5GH3Eg2tmM2Cw42qqt6DUAPVxJoe8",
  "key22": "25xKEVjD7q1WKvL6r9ignofyYLWHeV4zdDi18eogXUDu94P7eGXkxKH8VjnQyDLuECiFhK4q3YUhcF4R8PbdPTPX",
  "key23": "7S8PzkJ5r9qFSbXKJJwGMqsmpMJ8zjaTQWhbUvSvj3w4dkdHK7DYg7unK6Zb2kTH8XeS1M9yzw5mQYEjWMnkK2m",
  "key24": "28DAdRHBFkQvMXRDsM5v5bw4Hq6gq8P1EepcJAqWuJpBm3mRbR82erRTEpNLjb88kNgG7LZ5UN9CG1sb8CnCg1xh",
  "key25": "5fSRjrgTuS3s78c6sX8PtTap42SKGJyo7iiSyGcVG32WGTaqqwr3uq3GZ5gVND5CkmBL8koktYdMYy9nuMinnVjv",
  "key26": "3zdGkwEK9zjLukWkA7RUp5bihn2dhkGJ55nVK6bgqsCzf5E3DcX8QnoR59PKk9XkZ3pzWLRnxwbrn24uqbF7Ab21",
  "key27": "3RYqauJz5CFwjEYmqNwbmqUnDx4xNnBh57zqY8T2dhHBwCE5Ud3CLGvWkRU5Pg4dzeYTGRkiQZ8uZNokc3BTDh1p",
  "key28": "3orgCUqLn4BEpaZTTSuGmSNZvPprQ3XQ1s6JB7Nmon5fGFKPTGM6VeLAJf9C6UTiqq9Bx2FAqtoYn25EigaX2oqr",
  "key29": "4ik8juyAsyv1ARy8inRfxGwrwLfMfb7oKYWebegPeUgGuyQpMGY217jMiVAU74n6n9QN75NZvDc3SK3KDmzaNUGH",
  "key30": "4SToFAgvUs6X5o7sPiJMnzr8p8WXD8yqX4XVahjopmGHh2VCgGzqzDsYHSbyBXEEW2ckth5HVGKwVaV9UnQXDiN",
  "key31": "w7JPRon8wtMPngy4GDp3jnaVwNbdhiHHTRwR11jCVK6dRFgaYGgLis8Q5i2wPBiZdxbDnLHzJNcW6GVoXXfAZ42",
  "key32": "5QgfBaHjCnQZ8uSnhRKoi9HuRbLJqfdFCxdCBtyyzefRhKdARG5aHxYDveMoJyr7NZDF571ZrinmMKBW7zQQBc4a",
  "key33": "3vVgujgFtuXX37nECXNRyq4FbAGvu8HGtS8ng8QWCA4Ao5XUkxuJzx9pcuVRF3bVBhbxdMjpvZaf6JKPjbMq2ivs",
  "key34": "2Eonast1JvQGVX1aLUJNfvMzx9rrJc5cDoF28PUpBFcukppbyxMQBBpWSLaE3TaHXmWYAp1pdTvSLrZ5xtYo1jAF",
  "key35": "4ntbR2yRD6i6TikLhZheFHRY2XPjimJgaHaiMAtxdJRsj5r9LYanxkw4RqEGuAov8UrEL66aY4T2uToc1VZJMzuv",
  "key36": "3wTNXU3az98AWSb2w3p47Ar2pBVVz5WfC15H7rcBw8VsE4wjH5hXXmdZwSYAhRyDGSTx98pePXsATK3Wkf4bpRFM",
  "key37": "5cYK7vFPUKwRx13TjZFZ4PdK6jCuYAXmqheSd3NdhD8HdpsZx1ChH2CmCi38iNqHr5UqWGLuwh3ZYh5L4W4FDGvd",
  "key38": "5yK4Tu1hJi7jQFHJjK4MJmNLYw4TKcvMCYVeo5JzME9C3saXJJaQPV1BVLxJK2XDZGSq7MKmjgJeKWGsn4Jcwvkx",
  "key39": "51nDPe1N6P3sbsQfAt6y83LwiyzYVDrYGmDcgP4hUuKqL9n66yQFkPpFCA58Ub3uLS9zVNEF4JZ4Q3qwHJ6zWHTL",
  "key40": "4NSswbKrZxFrJvbYWMdhYK786QXNXVAsiv1kA6XHrw6pG5Y2cv9PZ5jkVJgvLCrTdNfrna9L78h5UaS8Mx4KJcr2",
  "key41": "21etVH4ePbY9HsbkDA67Nt8vQo7HtXamQ4DQTg2NPc58MQ3n6qdPGacDQrTiHfop7FQdhSBC2V2tULyFTkyLABcL",
  "key42": "4SE7jY3yMnNg6WLnM79pPgKAcZKmuU2JCme7nbYuLv6x9y4tRd4xRmBa6ykGGUyTDtN1zS3kg3iAJ3nm7fYqtJNJ",
  "key43": "5YUYzob98GtRp4mosV3GE1Y6KsPeKvvkXrYFuoj5LFkkvRAHkdupiiBtohi3JP69BdzPyxq1PY2B92zcC8YDrdW3",
  "key44": "4CMmqZm5ZskRKNVc81V8tnvm2RxiksJ4wDH3tZ2uixbJkS8jaEv6AnTPtmYdERMGQqmmwbPrEuqYiEzc9cXASXpV",
  "key45": "4rZhsMc5xYw4JGnw1aFNgdRw9fV5N1Tu64mm5fpnuPL5TnPSnFPQVvk2xhVdtMi6Hkwu9QVufrb8J28wmerERKp4",
  "key46": "5iX6E64iWzf6HjyDZBQ9vn84qv5hLWr61MKhn9wavvz21hAY6waJLZceLBDh7U43dGnxKtRkFetpCRN1KoWqQnYA",
  "key47": "GtRZuCZcKsYvg9LNZMnoeHaT1dmCEbddogNsK6VizW8uqZ55n9zZpXUkTdaozqXeAsRsXmjN69fcj7VZnqdKt9A"
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
