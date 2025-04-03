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
    "h4gbYRzPBh2QUhARf9rVJBLhox3sMTNhnbzUHLQK7m2H6eG8hPLsRzPPshZQa3veosK2xZEqU7AXHbVNCh73gTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "huRhW3b7YEMVotUVc3u2kVnn5FGHujPShczBQQaFbLCPms6nWidZeuFqMYGVTDmFSGYagS34tuEChvFkJcJQJwz",
  "key1": "5gfM6B2rXFDDvS2meE9xkJpvrV86dhZ4EeVEcggATgU3ctw5T7r4sJH6xuBgPJb2JkCwUBGmsYLeoWng4pKk5wTQ",
  "key2": "3AqMoUnXtPQ7YpwT8nZJ6n4s4Y79fEJjAuMcGCG43Pw9MKMvJ64vzgus9Cu5oRwG8AfQ8exDjGW4Moovi8jSYVFf",
  "key3": "2xKj3fkDHqfMZazQKkReRpqyL7Sqb2TWXBsgLdSQpZeXLHiR9C8EBxdzRsvvi4UVv4UzsYat32EAeovQ8GEJ1kxW",
  "key4": "2QWFC8mUzp7sBY1Df2HZbQW2bj5LvH4yskSCPBzGh1LU5JKZqUQYAWBfT7jRxicNejFunNSwNcRfKP48GY3crNig",
  "key5": "4zNEF9eSG2oE1MNsPJfvSHv19zGDBhoNf1Wh9uq3oQ335XAgF7utHrJBK2TTgQeKADHVRU1hH8CUaV1ykY5bHzy3",
  "key6": "5LR7j9XReec2syppkCWdnvKoqS6haqARwXXU9x1a6k5BgmxhVLfXfzibYkvi7Gn9jDSd7v3syM7nvwUkTRZrAXHV",
  "key7": "4K69T7Ne4rP9SXjBEufX7miwXmcMQSBmXobwzRz8v2oFSHoFuDCdWZSLunG6HjemDmrsDnj2AqbsXLKkuGHewfg6",
  "key8": "3BVPww94m6gZgGpykhSsLn4quZasesJdCwYcc4kkw3PEcmuPekUvhYmVUQGNNfvpR9P8RPzXDmyruqiVvKCKPeCN",
  "key9": "5WgPVksBbJsuEdqs7gBNkeLdgxnGGvpFUnHbpm3jMtmKp4CkCKoHp7hJbTqL5mMhTbTpeJ7Pt8qk16uz2dB483Jc",
  "key10": "3zohjYgkZDxuPU6uYJoBW123ZsJapAoXH3RAhjzLNFHmtz3hV5T6cGHQbTfT73BBnpvShVsk6rPwnRztUTF9v7GZ",
  "key11": "5FoWiBtfF1kgs6irYAWE2c6ByPWBtejRNNPE872PxcKNEBeCTjdyEdZRYNYdf3STnf1PsgSqmUJQNnZjvHGAZyb5",
  "key12": "2FfAqQ6nDmPUdvEZMwd5Zfr6Vjyj3JnjfUkDqPKeKmkC6VmnEqG9vvgmBS1ECtpqQY5xEfig17xyof8Zphw2zpr3",
  "key13": "3hgFcaPvykG6WgM4PVTFdRqv6xmdem8qaWDidK9DJNweoToCR2JDHmqaW1sbPbLjUHXK8txqFSBxbiFHxfm1NHGV",
  "key14": "3SUcCGTKgdhMb9tc3Fys6ajj4B5UWkCUJ4ks7dZQepwDGrPvgkiwGjQwQsiP1Vdzotm5LudnPQwRL1VsiwYXihfo",
  "key15": "2U5X56uAFhCXeaAsVDcRBGWUEbFcwGGSYZaekvhEmjo7FA87La1VXAGxPfRNee7jmCjnUCigiKQr3W7Ncc78Z86y",
  "key16": "62RWWVWSkykE8oGZb6PqSrJGTxqwD9yoxCY3kZzxFq6ZnDZon6qqmmDiXZrbavKcWevR1fPxpt2451nL1422MCc7",
  "key17": "2dZ94fzTAtRB2XhBhXBvHwmQnvbqAkpNpvVKqFBGrZy16hpCPtdurVDLBTPwP6NyTzX8A62iGNXmjsSEh3b3xvSJ",
  "key18": "ZoKimeNxsYyVy74SpmZWHUgkMGBeTw5irTjDdtBA9JqauLWyhr9cVw2whhGRL2smHxtMm9zifrPwrq1cCGL4bKA",
  "key19": "djZjhRLLMjdZg9Epe3hDj5nE5Hya7n5C38KenfQb94x7xhDhnp7eXWvyLMzk93jLycTnWcjQttXiY7NvhgVR1JC",
  "key20": "3U1HbiJR5JPumcQUWLX7pfQLPaYEDwWEJhfvHmNBgwGWB5s2mLsSUbfZDauSaSXuqVBnJ6NWcB3sY1nYfRjF5SnP",
  "key21": "475opqq8XoTyBu75ztXeWMfVdm8pSP5VbZNn9NTMstHh5TTRkdd3tB2qT4k4EdF58orqpBtd5orx4NPKbhfdaxB6",
  "key22": "2SSFoZSFFfALkFkCaQFjim6cetfwgqRu2EZbcau19TqWgC421NUaVLZSwQ6Gmh6UBM96GJWQXyQfXvtpyL4WGin7",
  "key23": "4c7EWiei43LcKKL4fQwzBRFBQy1r5mHN5uwTCApEQ6zBr6r3zg7ozskx3h9xfAHzqXscMgsg7rqe3gJM8PKp5j8C",
  "key24": "5Jrjit8Prw8AKWUFwiy7ZBmjtUEwSzVZxStr78tzWJNb3zx6GVo7WwFfnYUYZvvKLggfiRY3q6rQjRyLstzxweFk",
  "key25": "v5hTRowuPeKcnwKfRDh7Qct646BfsDuDMhHPByjUS6s9Qe8n9qWwwS2TMHTMJXo4hJGQsMGmGfrr2R1zvjTLvTb",
  "key26": "2Uyuj8aWwMAeJv7U2bor5LLmKDuGHBy8CdqbxR8vppVZH5Wis8GeUptbbS1m9v1EsNAGvhbpHjWDRaA3KbRXduKC",
  "key27": "gtXm2xCZf2TM6EQ6ttMZ4hQQfJgj9q4uSBbe3BmvB4UtM3hKS8V5uDC8LFtrWjyG8xj2GStrxEDqcpZP8zyGCEs",
  "key28": "RZfzdzjEQcwKw4j5cSZBwPAHBVJauX9roP1gjVCy2uzBU5ERwrNWtDpQUeKwMtUzrpTKWojbc5aBhZ2f7Qvu41Q",
  "key29": "2s3MXu2hqaiE5J71mHk28marVdtyLCRDBLnuPowydJocAxbw7hmuNdFoMAo9JjHiA3hbkmFfwB2Kk9Y6CMczKtJd",
  "key30": "5ehd6wySjmsHRCDrQUasDnN4KitwgLR5E7qPSSguqpv1wQjCawZY915FbhuTGJmsB3ziEwLkxuhQpRh27Prk3Rk4",
  "key31": "2Ff6dZPyjYqBmW6evywJorUrKsCS1hJWANZiWyEV5qTmy1y4KiuPgReK2awjV8keJmoVVSeag7ABK59ADByNhvwn",
  "key32": "3eKbotuS61FbwKgjHKwwPoK13BK5a9Hux1QTMV5XY3LWpUr6fXeuxHmEsKBzqQ1Sfdt1fAJMwJMJHBzEscUAh21F",
  "key33": "5RMCXMsz1Y5rzVUdqTw74dz5FFdJLFhDU7cwGJuN5UgqqtXZ4EBZG2AoGngoHtoi5vDE79dAsksHgcXFHueLGMNT",
  "key34": "4eBCauxfrxMVfcm3qcfL7pjviXyeMo3HL2rLJ3uTWUWsb7hVyNkwDd4r8yh6sz1AJqQ5RtLJjhe5QQ6iS3X2embb",
  "key35": "23LTLZmdpTaoKxaDqqDo3XqxAuVnapk1ghumXNJ2QcQ7PnCcMSfXJen8gJkJxa82NqjRJpo2KvBt91yD4Z3vFu46",
  "key36": "2UjrUvzN9Fo2qjxgME4pRjvbR4D2BSSfHSmiZMq8e9SXoChnnX4J8jvTFF2fjY7V6aeayGWhz1qG5exDFErEqcQW",
  "key37": "2QefxW3AT71YWqQZ6RwN32szJKLK5aSQykxmAQ9FqEX6fFyGLzyEFJxjpKLvnESbDk7HvWPDUJYxTmnGmK61JEX3",
  "key38": "32HkbvD7AjxJAoSgXevr49gFikrtKq1B8kM16Xv5xtJw4kt9Wx4umpjMH2Rydae4qtyYqgdUfLz4PFT25fz3XQHq",
  "key39": "DesvkTvwiitiAw2F9Sgg126fmt9BkvaBmMEiFTr7U3sPZMU33hWHTiuUiZDpbuZPPxjU4h25tKTKuDoMExdoGew",
  "key40": "66HQpZLG1zq1xk87zukpr1bZDtchaCzY3hrHAjCzLhPTy4v8ufzj2VhU16t5vBSJpjsKes7JFi5LRHizR47tMLpb",
  "key41": "2ANGBmX5JeQGjkMjwnKzo4W5EwEKQcbTwyohkxxy8epTQfjaFPYNPuLg4KzxR4T1yN37Dk2G1iZXHVVb9wW694Rb",
  "key42": "61A7AVGcZ9A7Mc99atdCETVdhj5Wb7ALDjUw5PAXwHYhCLYcz7bY5SPuFLbV9xtYZcYttvJAHguKtVHN5Asbx3fW"
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
