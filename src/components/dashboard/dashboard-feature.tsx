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
    "25X7mVEyJachPGZiweFVDi92ZzBJFgDHPAmJbDbzcAiTJGG7YEeChZzZnMZAgQFyVdRUFq55z5ZmQczqYkr4v1PM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46bu2atyX8EaPXWK3kLGhdADLG5sx55BkRJBzd3eN2i1Esnm2g8N2Se9JwWJ59X17VAFjLCwmThciAz1NdVsmSgm",
  "key1": "4DgQ477MYZn81akxrgPJPfcC24HmEFeRtbQXzqdX47CJJPrAYbPyZisWDoEtMnVjeZdxCnGzTfPUW4UBaVwcAHM6",
  "key2": "4ciy9GhKow48hMmsiWVFd2MtAUx3atfKofmcPQmuMq6iP4sU32T4wTPaQLqZAXXKZ7Dfm2g1jAFnWATpFg8GJmxg",
  "key3": "yPzhu5J98JX2CstBJZWY8MVrFz3abt2BxAYYchccDM4CKGShGMFDhAWMSfkGnt1w5LyXjpViM9s58VQ79rUbh5u",
  "key4": "3ZN6XA8CoBdPNbxX9VXXRLVYcuKEE7a7y1jNMutxRsyKvtFTE44wFpJFnnkKQikd3Km2Z1jdpFdxYiBPQLgtSFhQ",
  "key5": "4GdisnG21tQydp9VXNvcVRBXGCA6xjP3DhnGxmGpRhJRXnDP6zG4EUZ6abBcHEacXzWRYp6ZdTgn7YMsKDDmCr64",
  "key6": "5K9bzER9iva3T3bjhcPBtrWoPmLoS47vr6kmdcNVf4WBwvPipamjhCHrzkWDTXej3R77taeH18zJrjhu7YLhytsv",
  "key7": "3WFSHMdbJ3kaLVR2YPzX2Y8siBgZJY471UrFufAkL9FduYpqWTHqXskDwik3yqJdBN3gwYxnS2UkZN5azJVRroYt",
  "key8": "4VZQ9y6SZk8ZEApqre9AAEjo2HzqBCax6p2FwmGUpGPkXApmqr5ezZrsZ2zw9xQw5CnJ4V4bvyQDYuJtHmnkzejA",
  "key9": "4tt9ZrAUaoLBSJiRSnvPnVG4ErMqstd5iSWDKmC1476STCE7wbYRQcDo9XaNKGV8mJmCSK4hv3f7GBaeft5BN4Rd",
  "key10": "64WGEJMozUqcWaRjjQxjwPHL5WHkVFxMSWShgfvCbN3xBGYUdr8XzZvtnJCTxi2PTrruf69y4cKYw93aHQ9DqeWR",
  "key11": "4H7bC8412YzEJDz7BBG4kqx9isVujyC5b2jm6KtqqfWrGbaNB9SzHMNvu9E35e83n3KbiDa8tDHeDghr9PuoF22o",
  "key12": "2J1JwGXTKz9HHMAGLiCYA6JNwXCEKZ8PUnBy5NbxizmJnqQQ3pVBParjMQpMT2fD3SrhLb8m55z3aoZBhW6aCUie",
  "key13": "36y6X24dMQ4ccLD6JHFGbarhYXDiV5meMPPk2cEioDBD2iV3hsTK4wwxHPA9DrSQZY7NRMMHA2mZCZMKhggUz4LN",
  "key14": "5Kp9ee4HR5h3bpzq9venyQPX2HcWYCaqddh1ZVMdFXb2ou3SUEzQP9rMe1kmQZYKNpWUod9T7k9Litn7nEPQqUr5",
  "key15": "5MxFn9KSpnCbwPkSiXswArZhGj7gCJKbhqj42wYW87ZtEfvC12ex3nWBJb9R5fcCh8We2yxD2LX6aUCy8uetdBCr",
  "key16": "48DfZ3vb1SZNxL5JZjjuTntdBFfZ4hqfc4SvAgwmPy8KhwBDHfPTsMKR5U6FgtknRrLxjWnn7yqeseZJoGdtsJxg",
  "key17": "5wH5st1JcR5Mjta7qPupQwgqpEL5UAn3ymv65NCAsj9qsvu76yWLcmAvXk3m84aHP7Eu2Fw8wJ15TYsdmzyy7avS",
  "key18": "2cBVAGaimTjfb7BM5bXpoH5cFdLVXnDjz9k241kQaREgS9LHGRF76uSRJG7yf2a1UvK6FQmnYxHnmggCaw2bqUpA",
  "key19": "T9ouLgXBZa2R1XJk1aDTKkA8QTkeVa7ikpyymncWF2Le8VufX4FEozKGcWoyFQTgbYp2KcpEJt16MxFS2e83Abq",
  "key20": "3Jbg1DyiLQdL4kmzrBXjxxW5FsG7a37gaQ5AgmVMA37mNm2ja4r4MewixaCJizpcGZ3QitAZUEownbvuk7Du3HEv",
  "key21": "5pNQEEkjVhcq2FHqDvPXj46xYztk9xYduptc3LinS2Eb32xaiXXvGjyCdS6d1ApWsN26Qs6KsT871Eeph4b8WKad",
  "key22": "2NwMANqjyxzrTFpdFZQUWfcy5hiMiQ2Ztcx5q48PCDxWE6C17WXRYTPb9q8RwkvaJL5DF2FkWHrW2psBKJBp7Rqw",
  "key23": "2d7pJGWqGBwTgFZNSLskb4VamvcbhccLbHXYyF5sJnXEXANhu3RgxS3nMY18pV97zGHccrBoA2ycfmSF9fYtftLk",
  "key24": "4Y8q9HsYbD9pq7yP1K72PQizkW7GVNvGs3JqzXzcMbFs1VvSRrrvT4ZUakjPgGvubaH7CxfwnL8Pk8RnRaMiiteb",
  "key25": "3wCijXY17tTfQL8hpiufPY55anxR4ptzZAu51rNMAqamjs8J3Ain9DaEj1qZ2GadXcEQYrgd5c2nFn1hGoRJAYZL",
  "key26": "2Jbd7WzvjV1kCgf8sohAk9XxN7fVQC4KMV8WCmYZSQ5uKcSPuB2xT3fz5KmFpc24f9XQZJGjCEdE5HXwnren9FCx",
  "key27": "yZ8exdUDu1zHbfnYWLkSYpGMyU5fJ4FP2Fh3FhBQdGMoVBr6DGyiRTJJdsfaQbMtvSVUtnikJkscZm3fZGjTsDd",
  "key28": "21ADbHQESrb1nhRXCPE6FqGdGwNJiSF1PX5CZEohZKdDAFw2Yie9agZrGX7eJQrqQaeBmZfU1Y6wdLr8aEbK3bZM",
  "key29": "4uEpdDu6XUZuyU3JAhJLz8MaCYc5J2SU1n6YwNB3sfWhkTuNPJTCrQvx5RLsJnU2wae6K5sLS26pNSHWaXysfh1g",
  "key30": "3MbtU7zbMenLDV3J6fEfov1Hd33vAQ7otrsoEvdWMmaMywwzJ7mreu1yLUEaqR1npHhsYzMMGTaqU3m86btgkWHs",
  "key31": "dJzsdYeDRhq5qGMfDjShReCcG49N392J9oewodfrhCk9RpNLnPoHtuxWc4BvmBzxoC9KPvAt6qWDR59oZ1P1SV2",
  "key32": "5am8YXcbHFcufVy5XjbCQAUzJcqypE6dXvM9dvRw4jKqkAD3tgJdzMEgheX8pfPqepR2TMAWsKdAcXfwjoUovpCD",
  "key33": "3yiGWC4HTbdgiDXwoeUVaaeSEGA234Caf9yXM49ZjaJa2E4uzDGQNVeii6ZHrWH5PQn2bm73Cde4JyW7KmkQMzmw",
  "key34": "5fadqMnH3jpEtJ9DEacvD9bjqBsRXzYDPcqRxV4oJqAX7KN449CBZTxvPwYjuhhLT9ySZnrHqgykTr95D13dGRy3",
  "key35": "TKhJfSs6fs9biJFDTP4AKfMr9jNQ8YYQEuMQWyDp9bUBQUeJRB2m4t28gLnoaxb6XR1CS83o6PuoP6DMnAKEo54",
  "key36": "5iUVB8xmhGdcwyCsvjeNxsebS5T1NFizrTa5UwETdPXGi9XKj8QZ2Fj5cJLn3rNS1AczzSALo299yXnqZi6vA5Aa",
  "key37": "DVpvuruXfKkgDcHtFD6XvomjZXFcSK23uikzhz4zUUCd8DeVsHbXtm73U52tJCUD2j8QyQ2qwSvLvtbffmHPf5i",
  "key38": "4Nsty5N38qByepPT5nWHn7tUwmWWn2Q5BHKHUxqjrsQpBufpYL5jBsks2nDCUzgSdmVHHVTUhMPfkZTse6qWb6Wf",
  "key39": "3E8ryNysXGPDVEmdSTrsdWDaGTbZdQ93FXKvJ3agnshpaPGdrScoBmZJwT9Tk32jX2uDWxAkbW4KBQqYaEKR5PVH",
  "key40": "NH5qJk4YzGQZeLMK2KDBMdHgjRmWJ2D9WL4abbTkjaBmfGeQA6rDSpA2d58s7DpRodLNh7P5diBxSgefwaPNkXb",
  "key41": "2RNqvHYj7HFabFRxAC1E4i4xBPtFUroLbjQkpatHi9pUoG1pHxCx4atxLxiyKzAQeYSteuVfPScb11DH68UzMUxg",
  "key42": "5GfcJ9VNE7HXAgLgPeNHqQeUDjawzpsiyz3ZtrpyiZSDUtWLmst7jLdhY2xLQs7ScY6vQR7SSvQg8f1hxUDd2Ycv",
  "key43": "2Amv35LM5DWRVmJ591jR9QWVidX2UgFL8qBGPvJX2s9dmAx5ciXjPUG57MsMjmr8CKXRdYRzh2qdvUtqViMxZiX9",
  "key44": "5pF81qpJsZpikMQYwiSf9McciyKMBY18JyJUTfj7xYphb4cdsRdUwWhYCvijGAQRhD4wkk4Cs3aCq96tgfRjijEQ",
  "key45": "3putHNxxDqcsojch7e5NVdNoS1K7k5iN77eFv3s6VYG6sX5vkUWmNo2QQv4tJFjtcu6ccEUM4WcCPDFVa7WmHpSN",
  "key46": "re8Wi3ZBFQ91Vv3XHi1j7dqJzdnPL5HfGo2GDqEEVRs9hvMBHxRtDciYsKLGPXGUmvftscJjdraTEBd9Ya7Wabu",
  "key47": "K6HT1Pjxw2nVcJYjtFdfT2G9t6GJKiJ8jNUikd3HiZghAmsuYp23dERWLqbw2EjvZNhtXVUbvnGRoXB4r8a1mK7"
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
