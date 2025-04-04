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
    "q14zJyAwJ8F7zYKQih5MKMvZQabMcQqsxihCHeUMfodBZ2MmsrbaZqpbwkzfgLjtwt2uYNZNAywyMpmMYooUCNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nv7dyxyBydp7GYC3aPXnAqrcPsZjccFGMpxK12PWBD1JYnABJXZ2U7ZXriScVGw5MJCpznhCgHDVSwKpko5Tb6B",
  "key1": "V4YTLLiaAHJeiTtovqnZqqW3hYf93zW6ofUqGxof56JxTAL4zoZuucbV31rCDG8BMx9DXV1KtbWUBAJwyt4TFYz",
  "key2": "4YVJQP2qTGYG9RBozy8DcCU75eCqxTLFSu8UpfwBemX5wicsnyFwXFRR2JSRDiaZQm1m6uK8cwvJp661gfzMeAHj",
  "key3": "4xYBSDTqTSRqfJBUzekoLpnaXWqa7DVz8THYi73vm2dYsrj8MLCKE4JvKtg8KfwGB776Amj674P9r9EqBSi9G7VQ",
  "key4": "5ZdPpa4JZqWULSVejM5UxAMe1Aea4F4oFN2mNVgAdU4rKg9NJQJe71PTBfJUQmquehNF9KNMMMfL3eSHfz7aSYtN",
  "key5": "3W4nCi9S95dVC96u6wn75KfnuyRz3FGb59qCcbPMSZDSghbbNWxXRpXUFRrkkz5gbiCTTTC9smKwfZrLqN6xAo7V",
  "key6": "2aWPxFUS6BbJUX39QiHxcSwkArLENgsk8tArvsYPMs3DdyQLrpVqraofY21KAzhTBKJugmrcQxhg81EFKEdkgp59",
  "key7": "1NZHwC8VfYmyKosronEbM9G3f7JML7FXbsUQHfk13nYheXFENzTbwWDYB7LoS6f9svNdao8Ued5CyAe61HiaktF",
  "key8": "2DD89gzZnVuhDr2R34cTzyHkdXxiBubkcLpEXZ6K918xpshpgDS3odgWK5gEhedbWMPzrdZD324qvAa6F7uCbLq3",
  "key9": "2foF2McgkneeKa4AcQ9guUMgSD3QHgaghybHTjamYG5uZCYmWczzHNF3KPVSkjBgswdfQSA2WVrk57mZk69u27Q1",
  "key10": "2dR3AeHh4ChE1GYZUwPKAMJzjjDmo57jd4RCdFGhGW4P2zhHXyJarsJpaX634sMFPj35yDdrnnDoLaMLHapr7ePe",
  "key11": "3vuYfYfBCbKQbAEz1Yqyszhf9VyjqGPbucXLAfS3o996rVavJcUcUNzeuhkjNerZkSWqimQ34urkUbwWbfQNV9g1",
  "key12": "FJBNYXeLqtzy72dgSCxyx3dBvPiPGinqiiCXwZDGNUUhXheKgia9bu4qEzKrHiF36n3jigcaG898jtjNymAKczS",
  "key13": "4VAN7F6qfQ1bJyoKvwUa8ZQVj9KDGmBhDg36USXHrcYXMw8zi2KDqE8TpM4nZqjj9kid6Sq5XMeSe3Tz1PKY1CSJ",
  "key14": "AtJZGc662G5gMJnQZi6KiJdWh9dcR7VTepD4gEE3DXbQKxzvejZtj96SL419SpsD4J3iCq9zE32iCLRa4kPC7cA",
  "key15": "2rGa51j8FPMLTSchVNVvbp9rdFNeYZN8pFBJna42kKZKYMGQMbmeJJnrF83eeNfsH8AASeqevm19tt9zbbmsvjJ3",
  "key16": "4bVW7zhRFr7i1KoWUZBBNaxHrBugDfuKUinFH1nnvqD9M5AShDoVcZScHALRzQnREMAcL4mhPdpkXzC8qG53xr5r",
  "key17": "5kdr3Zh3rHe6N6hgS6m8BkfWDHMEmg7F4UbYo1zMjHMRLuxtsYrWLTmGWrZXvTWpLxWGGrjVETnMxrCpzpQzPLSr",
  "key18": "2zTt1aJLpfjbgMpbiMAUxFLgT2Gju9RaY1G9rXodS2eh7mP1LjMAoXeWr8eszZ3a6yK9LcWK7s118Bar8YHyffXa",
  "key19": "4hVqUidvzerjNnVQ3brJtmHA3cumtuf9FTCcdEy3UYnW8vZmBx4bp7QhwbVt2QRZA5BpgVdi6hWWvQBg4M8PQhmS",
  "key20": "4SfYCfS61DXgU6Fc7ui1J5NaoAzFAfeKL4iuNi81VAG2m9GBwaeAeMv4LPn33ykGh4AdNv3KQ272Z25LjtuiNnUN",
  "key21": "3H7urqj8fsJdfsDFm95k3ReYSEV6enwfA2QSQATZhGiTYaMo9nvAPZvHiXW5ywdKqANqLfUNPsjXDE2yuiWXUWGm",
  "key22": "2FvVt4KZEew4HzYZufTgPvL7L3NAMFC9EHmcyVkPxv6XjLNepJpagSWzfqALar6fLFKYMVRqAX4YLp7qoU7tSXqr",
  "key23": "UkLgR9Y19K7Qs9fWMgbgfAjy3sLHoFeEkTeAYhYzLbVT8kdzMTJPDa5GhxKj3xGaJroHSm2goAASHkCbPRBpU3c",
  "key24": "2Ew6cMwFjYD9pptEK3LhvPyN9xUCoywe4FDjTcCpQJAS3eyqUTemGbyw4zZk2gDyZrsg4TQSD4Mury65E3N6J9Nn",
  "key25": "364scqXJUU8nmoDPHftqbPeXNYwEQTQVM5R12F3zfcVhTy2S2cj3HByCy3ekdJbkZqbqK9EfmRdAoepXtD3mYQTX",
  "key26": "635cDh5rJ5DL4PQ2eBQt7nx5DagH7qdwBTFKdSuYFJ3qJtcubUct7BKYYH1mBr9t5CxZrh6NmjE9Bw7tdpKtDBWJ",
  "key27": "4pX5Hs2wVip4ZMLsVa8NeSGRuvGMXCJwssFk5wYk3pgJLMyN2p5VEUmbTncy4fbYwwXTAP4Jmf77cfq1Bcgk1Fy2",
  "key28": "2BRv8AKbkYqDpJ5SjmD2ZvzTLXsbqtMu56CBTidCkgZniXj7EggDF3Ucmn4pdsiZ4Z6zq9AEbBEthWm1bLoKhapc",
  "key29": "4AdiST9iUQbWTUd7mKtVzSrHkHbjGvkZKdmLnM2RrsMYjipMgFn8ooLVt5GsnXgfzquiThEMaGtuvPyBj7smjiJr",
  "key30": "3aqLbrbXFM1wcZ4zFimPgBwDoaUuZNn8YBCcCCvjPk6WMorYtvuFLf4yiVfUBE7nkVdYxYQe3cUFGAgkF7v9VXHN",
  "key31": "5QEFwM31tTQE1aP1ZGTCaZFj6kSwMyPmBWMcuqcnjAaJnmWwECBgaFx5abMvaqF8Mjw3R9i2AAvFuzmyE7QXHgeJ",
  "key32": "2cDQesmvaq9YFzQdg8hVMWaN7XPD3ZeFAsNm68qtuETuxzVKdYoWMHrP8f5dZdsyTsycXsG7M7kw95JTGfp8oUxw",
  "key33": "33ctu57krm5YR5xVcCKr4PF33nCr77P9j2p7ifuVvSVkoaGwfhgdqy2J164QJVaeqThzpQhnBrW8FVj2T3ue2XXx",
  "key34": "bNu1vaKnUBS3NDTwAscmcm6qMGqwpEZJgJE47QcPqmDkYsUPsnAjWCJcbZuQ71u3t77BWvQHW3Kwd6LSmxcpcmG",
  "key35": "4s5YsSJ25Wf7mDpQ1mdVWhS3HVERiJhZc8cZjURrW41M2PeKd1ZXGTRMbcBmNcMacYSTaWQsdiDuCFxb3sV4XRu8",
  "key36": "5GA3yUGJZYoBByGfjD1FA2MxJECZrgzsue8TMoWUGTkAaPGi4oYadHYdbxYVYqCBNRxrd58fti6eYvqtDuTiNZkZ",
  "key37": "2W1EoUWPKSU8XxAigUj2zL3fzBudgbTB6JEwZLmBdQHomnH3ZTGFPhMFM7R7xz1M1qmLVnHioH8Fn9e3qRMpV7ty",
  "key38": "5UC3mt9v99VCnZ9aC9jx3imhTeom14Pgy6EnYH1YokVGwoKx8K5gLSnZPW1Ps2aypYVq4iXAoTWaQ57Gjy7tswr9",
  "key39": "5vYms69zEWgY7a6JcqkABCxT5JnYhXNJznK3x6DysmjcUr1n5AP62yKh3Nf1VbRFv5HEBafYQUK4R7jbxGsAz5p1",
  "key40": "D97zZF2zS1zsr7kycdeFPSJwAcRcRPKSCYNsUH1tK8PznHswdKQHcjUpnow7eZgp3NN6jAXVai9V3QgxYC2FSsb",
  "key41": "JHwM8TPgZGkJ9nB7CvhERneMiSN8a5Hy8yBvYQT17J21Friq71fniRLTgM9SRu3DtcJWMxMG4yF6DDviobWNvgg",
  "key42": "mwC1u9L62GDHNWyCpk3zF7Z6FeNnis2y14fG5HWTBMVv8YNzCT3tmLaqoCJFiTq9ZhjmqZjzveBWfGfLwVbMn4o",
  "key43": "3VGtewJGJeiL8TwiZsh4FSt4K927Qp5Tpds11aVhNaBNj6got746MVkKAWZXrU6cFSfRuJJ4gcDhFrTYQ9ikrWui",
  "key44": "UqBD9X59GMF9JsRtQnJbateStGQ5z1EYiDaeM9xojKND9emP4BpQxvtr9hcKtyq9c9FCq5d1GfBhTHJC6yfTnMY",
  "key45": "25Wxb3npMiALDiNF7ZDBmEGq1Ba3dZWo1pFxoorpjwPH41WLkepdC6qh1QpLUrboKu9TW4PiVdhReR7jHTyVyGEz"
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
