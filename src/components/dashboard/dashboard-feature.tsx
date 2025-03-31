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
    "QxdNDyVBY8NynH3Bt3gic8q94ASHarmftfbKvNz9to1sNfgoHkKz2pxjoTCwnCQKR48toviBtxbSUUMqy1ueFD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21VLbtdjU9mruSgMoYKXfjtq5XwkagRGw39cXH1tXmtGWARRDdRve4a9iMYaXKQ7gpSKBbt3UKVT5RzmQgPyUYP3",
  "key1": "2gkmxfRVBb55BNFb2ghUuhHcQ6upVWJnRiL8GSrpej35HsLVTpRYXAaC916jUTttGDecwQPq95tLsPFXuo4vsWSn",
  "key2": "33BcQsqrMJTYHrDF4MW3hCzmWhvZMHGp9fEMABzAybSJ3RV8oXD3mSkqWNRnLekUMpf3PHm1n54WbWnbWbRZUXEg",
  "key3": "3KWL4RLQZtvrzZRDLJtHCmk7dPWSwAXRz8RmaK42GDwMgx7u7M5ZaP9zX2MfXxmyE4AiePdwfbbKHVQfzjjDkzeh",
  "key4": "4X5VvkA9NT8wLuA5SM8YppC4XWxaVRQ16przHsC9p1dPU76W1cXWFikBPAxzupoMMho61FEg7kkb631QFzP3TaCN",
  "key5": "oMcLjdSGGitnR1JXWuaBgx85qDLSD2eZue15iAG6HmzsEeVebNXAqD7iaR8HoebeXKHXfqwRKoNmLddEUAfarmY",
  "key6": "4qSM8nXY2DM7JujxgvrWAu7i4EC5T1VLmaUxEWCLjnZfNCCKS9u4716tsWW31hKcoYgpgQ7K82nkJswSq53pNRBi",
  "key7": "3uLUkw9fPD5o19gabgWqMK32ishSZDUJBcbDkEfD74aQm7SibGN1mxhvQeZyskGckRgRRbaosfWFNZU1LcYRe1uk",
  "key8": "4aUA4gYfiVJqUcpz1gJvnUbMt8HwwEWE5D33cBKmuxdEdKdLQ1mepoxRAzSc5azNTE5PK247pWQXT5ki7xpDFHHj",
  "key9": "5jqp66kso7AQHsRWRHPqvByGcudMjknZeFzUiGDZLueMTwBoAMRj5Smg7m2UQrbJBvwUNJWYBg1GRR97BJ2ELaw1",
  "key10": "26csM9XRiJ6g6TYHA2fjuV1TYxxtmHLhsHhuu4q6jrFqAaiSo7AwUmHqbbuDoqoRjKt7HvN4vjxB9RyH3Mh38gqK",
  "key11": "6FXJWqou6gsaMV2tTpG9THuc6QTXRH8aw21dpgCDNYMRrmvVx5q8Ar4gU8xGBRzndDPtF1z2yWdCiahC5vTTeJB",
  "key12": "2JN96cZABRNEkHDea9SFBcArGsYxss5z3D44kom99R2R9J6y39BqarXGTkNDMfFh2ygY1MqrUA3JmSeSRRdMznA9",
  "key13": "43AvX7WPLxy6Ye8cHinXF4BR3StuHQvmTqEwtN4KztVem38sTys43XhujsxK2qsJcFmBmsbeSZnVaC56UTnY1QDr",
  "key14": "5yTaGLAgnmXJ8ofVv6PZPccvvF9sHtS7YWqGzMgsJbUaQ6C7Rf8AFMkkHVErkEZZuXxRzC5NJWfY8der1Gek4Vk3",
  "key15": "kVWAXsu6NKWjCbfet9ghXgE8NtaweRL497aZ8gwNnk6gEgB5znGr53DNo2DFH26wyWRv2A9YPp1kuT8FW6DDX8h",
  "key16": "266QiEeoi48mXrJ9TeEEFea5Mqvpiv9VuPaqC1TxV4cjTWrM9n5VS9qGvqqQnrbwtJCvfsTcKEW3xwpHYAUrsNj4",
  "key17": "5PpjoriVyKwn9Lj5omMSFTBhdqZ6BxCaxqRxhNuZhUfcoebr8uoTjEovnxHevviXCYC5Qex9i5QqzR1mpe87fJw5",
  "key18": "4wodEnWb4RC2S8GPXU3GS9XPbtzLmtUtzNVtHij9DGxcmwbPYkozzY3Kc7P7m9xVzf2G4jHmizJMM8EoB4TivWaR",
  "key19": "71WwZJD6a9QUFR8E6CETRXcSKDLef2NxjLbK6yMv6PDJJwgdkENA4Ntrew8FJauiDhDSG3ULV4VQnXaDMw4o4ou",
  "key20": "5U2A3inPFqp84BeVV4w8iMM4cj5ZJVJP8TXno6uizxb6feYZuMvUFxh2Q9vjH3JBXvb4exKCKBDjPxMtmHi5s84Z",
  "key21": "3RmbVBY4rxzPkWbjDBP7XSWoev2tPjqH7WgxasnDsx5vCq8ayqURdEdctaLdADVkZiZwdT2GAL5BayiG8Z1Hchj4",
  "key22": "4s8Y2d3jRwNKMDk4f9nK19TqhpkhvpWfTh6LtMEMZFqYdKGXMEyXcsMfc4ez18qtKpe8LQYNQC6AG8Gz9onVg1sj",
  "key23": "JXMnifyXg8tGvLPQH9iRTLynrwCLbKjFWfVC4okVverNs8CnLdWFWms5UW4zS64zL82YbmYkg8Yvrh8WG7Qk8uy",
  "key24": "61F8NBDjcLvrVZj7ijeHjLmsH6ipw5zrS3fRosyyEyaBFZGULKuG8aRUthcmaKagwHmeMuQeBYdNWv1dExjmdYWa",
  "key25": "3uE5uXX1qbi7yuSVsaF5xeeuYG5QWk8tuTEL2gjcbEeKA6KKT3B3ZQ7mBgCBaLiDApFsPnSf6XAb6WjjZ8aN1gmV",
  "key26": "2C1kQZZu8wHnhz1ScqR9N8e2yQvV7MQP8HJxFC4hHEZYentuXUChY6CyGquRuHeBQfWvJP6EDh3riqrj4eEdqDt9",
  "key27": "btRxuiQMofaTFHdGvwEWgszgP8VXw8g3Hp3kGHeP8BkteBsgUT4MqL7VFS7yQkg7jUSo6ZKUFPt2J98mQ1txmY3",
  "key28": "62b3tyh2q3ScYNKjC4snWRmGy33hJdDfDC6ehymWe7dbsRetud2WXAfBu5otz813Rpk1rsZ41EbWPVbUxF3M1uR4",
  "key29": "2m1wiGvpG4G6siCYtPX9d1KH2iitj2CV9sFuU2HjuUCWMKDQA8JNtHwNMHRK7NT6Vv47uR2Jj9wDMLmcEzp8Zqiq",
  "key30": "5BRHJepWgrnK4FwGyFyT5zGc2QbzJ3NxAWeb5CnJTHxWY6vTzau9u6GJZNVg2AQYd71PMp2T881iBFGdnxkDXaRc",
  "key31": "63zptTCmhzTKEtqhkFNSqe1irtG3oH31GoUKVG5cmjDUGzNnVvjdyqM93osargmcTA57121KdV99KsizWng211TG",
  "key32": "5hnK3F9WWDp4Zfx6PZvRNjNTJz1J46Hda5obkZCDz1yr1jFcZvV449PKKL1fS5MqJQuMooZEeM1HYKfo8uJmsBHB",
  "key33": "3aTSUX3Gpzp6Ci3NBzntTcZzoj1yTuzDfurPS3hxEDFvh3dURV6QCbXwjwqUxRV8LsnQ7WZCV2yk4VyZwfYtWjYn",
  "key34": "2MDwdq3jCbXWkn5FhTYtquGBfSWnY1EhCcHKs9X944nr8yEmQDv2TbPzQs4gRwbPhiYiq8HJQPgdHajMyeLiGMG",
  "key35": "4g7XbmdevupFZ5Kj4Fg524YrYUebMJBGc8UL3Lqu55YMfdiD3HBKVnaRmbjMU7K6SA9Qeyu2AXeWurTTvpSA1VHY",
  "key36": "5zYcAYH4GJKsYqvn2oyKTKkYvCdPYBm5KKNmeVcYA8dkmakxjdCJz2XcDGuGR31CkCaRPjxybgfVxTgfYYHcHewG",
  "key37": "2Y1uvNdhRwkzGnxNw7ZidXeWhXcsDE4bwvSt4LF8SHpcx2Mn6MvDGSf6FNuLTtkVcCjJvMDAPFyLNwxEYQxNDkwk",
  "key38": "5qkwsEZRghQ4Pu1QbL7ydJYqBgrKXz4MZdvKKWF69qWDsQxsP3ZL9H4dCU5JNcVqzLnfXtXzoLGvhzV4uMR3iTJW",
  "key39": "ZNzUh5nTQbiGL8CcXQ1TGf6LSpV9LV86CNYmGRWinXccwEwfigwMtc8jexHciA8BcNbiVJMGbonrQkwEoEMaGja",
  "key40": "4VbVvZRMcHUxPNibsNouDgHDunpa3JeKaVTJ38yLHMJk2XZnnQB9S4W8VR5gqxiw5EUrYTAgxAUjJMNZXqsMisph",
  "key41": "5avzvgeur3xwdi1oaZjBmknKEWPg5MbkmNjQWZCA4QGZXDGeGizQgDm3CJEowoLytt4GZ6M81kniixhLYtYmJzSa",
  "key42": "4QtWZJ2mEcZ76QvvPXLcwDJimJqetdXJgZK239r7P8q5Jy17BPi1JCjqdQwfBEgMX2iVnBdVRchbUqXyPRWkNYqk",
  "key43": "2FWiio9uXx6AMr5MALt7eZEvMkcHC5DABV8G5h7VwxV8i1zrqkdLvYaUYnfQ27A4GYfuvJhxB63j5EdYqZND3RWu",
  "key44": "5JGWG84ABr6jegSPMfzw3aa3rigBZgHh6Rpd3f1QHkoJGE8So2LJ9tLwpicyryLGzo3rFZ3jT2MD9cYZKV1D1ncc"
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
