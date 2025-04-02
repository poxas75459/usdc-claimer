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
    "51wZreu9G9mMcNvNEpdnYkaeWrjehNne6sSdbxJWKd7mQZm12X9r7HzidPtWNkmA7gNJZYVQrSzvrPstV4yDpiim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21vGMA6S4QxFch7y8XzSniEfd4SNHb96nzUv9UBNT4uKEEDXVbaydTaER2uj2mA5hDe7Gv2bZCfDiw28PorbWuQm",
  "key1": "5xP4v2sS9jxkH4nhT6CCjDDM1wnXn7JNmkGuoYrob7hFvq3XhVAP2dH5KdTHNHFaHWU8W4VVRh8JbcTLeYk1fehc",
  "key2": "34jRXXVXjiPc7VCpX1N8jr2EWohNdps5LYxQNvSGz8GRrJjiVGqvZCU3Qwi8JDyi7XXzka4u5LC2NYCHek13YonA",
  "key3": "3F5vwpEcvF8e4DCcvjKEGpJaDz9wMyPxpaEDkXa6TDjpv7MZmMUaq8BLLiL8tPuCYzaMRTeLyAfMoj3W9dZNo1Ya",
  "key4": "38aoYSJYQH8WfFbieXFCB953iXJkNomtoCSSyzs1D7CVsLUmNn3h7uvDiCePP27wPw3sBvip3BQjptokBnrTfSNk",
  "key5": "4BEakKtr3vfwyV9BqCuxtFV98L8ZvEwKNr6WY1WZds2eFJTcc6foZvQoisWf3TWHEF3FfkxqtEyiL3YtxLsLKAwJ",
  "key6": "YSFVd5hgqc4nS9jGp44G617HiSzQonyP26KZSxkvzUNawbHicG595TxWfppjE5LiN2EdiCgQmHQMSggeaprx6rR",
  "key7": "4QWFqujiTpgQKAnj2iHajLnrAAdvCcyMmK3oBoF129QG4uARBYgJzVQXpzyCzbejYEmHMHL6VUGD3orhfypU87xW",
  "key8": "36zsqDo2tZQCT4i1y5AEZfLV2ajDo3FCmnPxvQpTib5JLQuDZ7CqjgPWfEwWMSKuMGjKNyVBKmJrwZ2z2mE2ZnLx",
  "key9": "5EgwM6kfkS8uZXExnmdXwRhvixmyNHURxUj47RrZCYioZGZyeZnJU42iaWq2FbP8aDs5PWEc6gPXxP7njSUY8MSU",
  "key10": "2qQ7YWmpj9vxyAySsFS4JqiUWwNeFhYrDumEZJND86XRxuUtw2z6RBcaJqMyxtH8dhYvh5ZkU5aYFcwkXG7iH3np",
  "key11": "NNKPdqkBD1Zu2cFbSixZydHNnSFQsvRJsvFaB5CXz6fpH6SDMdz2kNStdj5M9sySfqURZBLoGdHFLGBVGVMhtty",
  "key12": "5j28zsPpPoPnqamgukzrAgX5srWKbMS3PZwzKf4mfNetqKhXichbhC9zPH8nUrtAtU2KsXRHt7CozMTWioxUuwqC",
  "key13": "5MB46geCGBKhvFMo1yhRo2rgXmK7ZLomhAsLHK5ctuwPzFtDgFu8978joGUyCadGVVZGGbpYHWnRjNvR4S6oWBGX",
  "key14": "3AsfE1ui3SHiCeaKu5wjkwVDEApE6JsxmFDdTRvdfWS2nptyGvWKr8NioiotAhFc7mdc1Z3ue7aV6DcF4bCaUkkM",
  "key15": "2JCDxwyRSCHeyA7zPj1W7m15D7B3bpPGEP5opsqKJc5XZu8ntsMdNfCPiVrR7xGVEiZTNpbrvpmU83Kz7jR6giz",
  "key16": "3iMxeMm8n4SJXiVq2Q1vYBSKrfudpHuzcNgBPnv6iFH2j7MAyX3JeqaLe9EB21gy6RbLXikZi5wBNA2gc8rCj7Ev",
  "key17": "NzEMKK4pLPswxSPRVHUVdV4cm6vJfVmTWmokE9mQqkT8PSfanjENYeoajcQ75x2Qja6XsbMt3qyhspmb7y2fM1u",
  "key18": "SWndjUVhkmgtPrGXMqTbW4Sz5a98j88SknRjZGXukfXzak1uZCNfubqA99dx9QmsGzwCwCKRM5eeqkbMYWf9DSS",
  "key19": "2CtNLCYXWCMEB7JzVBtzox1F7K7Xvpvb79Q9naaqbHebtCcaAhjkhq3ieTdNzqdMknhdTm4eQb6fU3ei7Ax9CN2f",
  "key20": "2HdauDjPuxpKgdZk7oDXr8v7x6dGxVUA2XVMwYnAPvUkoy3h1ri3e1aR5PXLUghdfkTif27NEMXJ1sScgiWv3yn7",
  "key21": "23ZgDfFc4kmKsNq285Rj9c4k6d2aeHZUDpCQe4wPiPLPaUmZTTGyNs7wpTv9Hpoc2zPj3YeFds2Cz3CepRCXVJtZ",
  "key22": "qwyQ5jHvMNsaSwRDUyNdXZgkKFXFPu1BVNJTzc9Lob7oXsBqDvUB8C38Ggz4yXMNQUu7Pu4HgLzpgA1PVJvw2Hu",
  "key23": "58k1Homr7mDxqoYnJyVz8umM3qaV2Q2XpwiU5wSM9Nfr25fnE1vqD3JW4FJMwV458fFmHcTKnkdyY5ABiLAP17Pg",
  "key24": "4GFKZqyywYxahgem17N7BbpBxyURYt4Kxe8V3hiawpTzRLtTzBQb61gBm1XLfxsj76TPFnJpgjXrzTvktoAX7TmS",
  "key25": "4vxjUQm7bKieLR46pGcfUgxzKGp5Qj5ZjhnWBHtD8bftyMGP25HEeZyQi7A5KdDJdvdTpkeoZXtX89XXNKF29VNZ",
  "key26": "3a1BcSLs6DfrHRqPQYgoK2JHNe2JMcEDtcVQFLs1vPWDw8BG7aLjv2hC6pMZ4RrZSEJuH7JjkqgovB35WbKQeJs4",
  "key27": "3AxyU2Nau2fyKRrEpCJLXAo4NVVW7pgRLa4oZ23CaAFyB5MJVjxT9YNCwYqvhrnmoqsMAE5Nq1k551RWZsFhy7Gb",
  "key28": "4xe3eecDqT12SG8BHqynPyX98h3hKAGfWWNxq94JzCKgrfQxAoKMALEAwa19eRuJU3rU1qpYqKZWM3ksHmEspXQM",
  "key29": "4LJUeeUv9eyVXPGTKPfZAdWPzRr9is9daBNYnEZKz82zUF5nszfrUytDKZPBvdJ3bsfUtd4nKEA5jF5ChZxB5yxn",
  "key30": "3MB6UdUkmgBT6qsx4aGnARkJqrXccTcW8oXrVpo2b7akaQkwrQkcre87VqpPzn8ZDKWAT8uqi2EDcFTMXMcjyhNB",
  "key31": "3TaDyRG3UnB4vGeirJenZZHMnqchjTsod1irR22qWsNUq3uM9xqgkm768qNLPAAzuhQk7v2tGaUyHebr1PrwkNFX",
  "key32": "3xccR3kKi2iUxRDhDLQWDuJAT2WXbqmGxRVPYRUcZuMvmysBfQU8WDEeCTQB8DJysWHjfzG1QUoLsHe1jCkhctQX",
  "key33": "3vP3kUDnJTny8e3SUXDiUtL1dLycRi9fwceVkh2qXBp51jMRvtMissBuiJ3Dvps9skoTLXpBKCtmzDiFJ3fzcdWJ",
  "key34": "4syr3d7SGyDvP7fjbxrK3nwrSqeupjNWeQinqdqebok1vDgYkVVmfXnbEdMozUkbQ3GPd1BsTjycr6QdjZ3Y5J9b",
  "key35": "3kFGERCHhvEKxdDtxKHuqSu48Miptd2ZT8fqLrN796wyWxtwkzDkwsqFMfkkyYs3ZPv4dqnPs8VXNEbnbJr5Sh4D",
  "key36": "2WSerXoWkpmKBjbR9FBREDUZUECe76zZ67fFDwZvkfYdRMowDS9DWBg6MMF8Rqvuhi4ACr11bA4DgoA3prKeUDSg",
  "key37": "ccvwx6rGNAng4tw7NXvQBDCc6zy11ykExqVnXM6VcAtD9AGErrbtLKW9g9uiWexMKr8miXVB5JsW4LF9nu2U15t",
  "key38": "YTQP9P4WEco8YBFWXqimxbzJHkB5CwFmE6KrK8WbQtJ161RwYAT9FgjepcepXqcZ5tXrE8PvrE5sxz3AuQaJw9e",
  "key39": "2ryv8VB4ernuKpRYz9xoYRBFvdAZKhn39eEQYQwDzGnegPfVPcyFhrZkFmZBBMGKRhKVHRqfgaEjX5wfWYpVvY57",
  "key40": "4qYqX9ZPL9KzbNDSJLBwELigWwGMXSr5BjPZv6o9BCgwHyimDozxDg6EvJYi5vsSe9p6dMACwRoeevrWGYMimjpH",
  "key41": "pUYQrY8sZfhuHpsQBijN4FHJnFqUepejJDEHWLb6tjkR1iNG8sKFCcwobVNiBEMU3XyyCBcmebvBy7BgonXh2MM",
  "key42": "GQv29UfshLnyYbjrDGTCWYc9kZUrstePuRcF1iqgjBBmwZTkBBZjD1H9TpqxTSrj2PWg9REgfmMqnLvu4wHtp8q",
  "key43": "2vAZznLxCCmF4Fr5BzDBMghRAyr3i4VRKU4Kn3UFhAXLJjse4itMw6P2y52EjGbafQ2m9qdDgtKGqXKs2a7nMhC8",
  "key44": "5XgBv4LFSrEWhTXK8c7nvuv2zaJrCy9cRpJ3LLHHBNRBv8HMaWkLNJrmGFzu3WrFChpoqwq5zCQ8fiJ7eBrtiyKR",
  "key45": "4wyEYP3HzGCSvBCioY6S32go6z76CPwGxD4A9ayLzRum5HwFPmNsF1ZL8zK8YX3zMqpWMdeCd7YQA4j4atvV8U39",
  "key46": "4n84f37r1MtiyRVwyoTw8nELESYkpiuQyyXjCU99aRh5s5MbMnLhj8yJYK6Lp7hHTcVorr6kpehPbR2vf6vg8RYT",
  "key47": "4uVT8Rg5VznJVsPf7x1PB8JjGxaYGcw151W69Qus5sLJboTgxgQedfibeK9QawummvR5JxtWeR4uHoJJ6gzp1Nsf",
  "key48": "bnN9fxVn51LwbWmCsMGP3kd3TdeJL3fm1qh5uua7hCpK2k44MqyAUbT5X1mb6HZA5Pu5JXvHVXrxWtEomBhgcaX"
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
