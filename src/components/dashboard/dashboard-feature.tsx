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
    "3eRdgrDs7bryDxhPSDhm42NeLPfQ7UXhszkksjHopbVRVZhv8fLUegg29DdwPzcRR1dmdtCU9B9aHitjpypcoUGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2quZPyRQFRGPRwsSNhjKYjK2f4TFxvT8pwx8EqRH2pbVYZXdrtd1g6Nrb35xNh2gfuyrdj3G6fhBXNCnjfzCyKrS",
  "key1": "3iXMh5RbXyNg6iKLxmtS78L2Jp7i8ACh7eEPoTxdqSan95qvKU9PPKqMUs54U1QA6pfB46jgrxY9rqKLHSkgLYTR",
  "key2": "5oJRkhbduk5zJhkAkbrY5omBwT9jX4FHRwobkbJZZNwDkX9DsrMBRoNndGAfH79hFVn7r6WcXLibwPDoCPhJnDye",
  "key3": "3bwdyS6QVToTXeEFTCZ5urcNhgWxdoGh6ZnqQ3GPXNckr7wn1dKpcsBYnbczktDwC5Ct4L1kLSKxRBdQrsa91ydp",
  "key4": "E6t5KxmsmXWSjTY2XgRYApSq6LMotni73ntCrZdTWf6CTJ1FTDF7yrWimqQeGUnAXqSF2QquA7G5vXe1PT5aH9b",
  "key5": "3dmpofY6124mnCBfWj57LcohRggLw8LawoMJSKxTWzsYJdnKqtV4dAUDGyFDdKwuyymdPvPJZepQKeSASHgyyVtS",
  "key6": "2sZ6CXDB1CszSZUvfiWVXSafZpqdqeAySXczToD1EWZrnCj1TQCf6DH2pajStFB16NvhbnkAUHZzmnor95RoNbwN",
  "key7": "4Pwu196EQuYXiPPJCYmVbyMdZo1srvz9fA2K1rWnq7LTSts9gzhKFQ3Vedf7dt4EPicwDvWWAXBxSze32cAdmmxc",
  "key8": "3Cp5b5wtVG7k6N9mTxV8XiPKwypqqwUV1WY6jdXJMBnVnXDH7J2fUFLP4LuGaupkg6ZkaqcEEJSxZZaNaGL3tCJ6",
  "key9": "41hDPungUbxGG7rfKhRdUecjCdMehDyyzpJpTQAgJryrfDvCRdt3j7snTiKgCsmmhU1RiyMJpd15jK3NwGLDT3an",
  "key10": "ZyhLGTheeiAgSoCWLnR4aeP94E9EpbtYH1t1Xp1kZVnNUmA1L85qhzKwLE9CvwJuiyMFn6aHfweBBfNNJ7gXp3C",
  "key11": "5WwLnrS1emjy65ouXzrx6psZMf5DBxsiHUBWAmy5y7n9wkkSpPXhas2VUsTWFekywviq3esSgsXKvPwjsfMXxtjn",
  "key12": "2Tc1Zp6WmZ1U6EDubL26JZ23G9JKf2ayGQDMK9iS785giKcgCpmmTi7sMiUXGYRgqEzvnSd1iLVTTZ3GneK7ZH9Y",
  "key13": "3ng5Rk6XALfit2Q66LCGxMZWaFyudkjphHvdZ71pc3h4wEbdpGP5JPfnQ7hLXUgMqiXCJJcUwi9QZaJLHhG13KrH",
  "key14": "3r6LDgaHDMb6FjNSHMKBtvthUt5m6ybyRDnb4iw82FzddwxSNtrYRf5CD79bRW5MYCZFyj7qyu8q4ta1ygGK1Rb3",
  "key15": "66CNYgtFoaZkkD2N6zpn17cybLJuCk4B2EX5C9DAK3kuKbYamWVtZXy2EahxEVRWaXSV3PvW6DBRvuLCU4K7m4yr",
  "key16": "53mXLZp1jSbZ1ubre2AS9gmfgAZqi9LRz8Pq46S4DAXJV3UjKcW6TtxeACoQKKFEmN8Aernd6afhDszEgkcLgs6Y",
  "key17": "2MjgAkU8HTy7LYALXUXiN65Au8Qa29Z8NctAcxxmxyLJ6tF5bKybdaychWoBMJrc5fjUQNsjqrjtUrihYacuk66o",
  "key18": "53jfBmtQG6w6Bb2Sa79oTg6zKymUAusv5UQSSdVfJ5YaqYzw5Bo26x3SLruxR1fLNUvcanu3b6J2qi73X9VnRhgH",
  "key19": "51NKupm8xRXCt36D6pRuwdBYvWCbGH2yCg1djbqEparQ392MgW27ur3nFKhRVbqvXXRFNQcBg4NvsxfY5mA58G7U",
  "key20": "5BxdmwNLnMhNaMJS6idPz8WhDTfnmdZeDdeaZV4m7JHmDjfRDdM8XGVVXwAXh2z5SnxBEaqXBLNPSu9B9dCXMQV9",
  "key21": "Dbv4FGEs2m3ad6VhqNgtMjsokvmshKT8BuiaKE9vi3eBVPEgUaekk3ti3hPE1xPSCqB1gC9GTYUUg7T2BkHHGZD",
  "key22": "4xq1zPzHGkbv93NX9g6guwMxcwNhHcLRFrjPCW8C29hfXfsPS6tJu9NpL1UvQt84eaRU7apun83oxGoeSX1iJzMT",
  "key23": "5hMghy4KFApTJW1Si15w5Noc8Q87uF8r9XrfbRk3Jvh3n2ExbyMWimq4JbokvmHprUGm2fsUhJjD5bqNkB8PcfGo",
  "key24": "3iED9FWzEkKnrRPHUaNmvj8wAmDZ3XJGgHDgeqwF5eYcJJ615mDTeztbLGpe5Le9Ef3DCEY7FyqRdWxshfPby6yn",
  "key25": "A8u4YnxxjdNL4MXYqAM7RZ6r4Zut9eEaY1DyVaXwNyCPQRV4r8EMQ4hED517rC4wzEbHYDZBzHGVbMkhSTRLDjD",
  "key26": "4Jntd5YnUnZFJRYK2ny1mVbNPbBBQaF8pHNYmJo1sXjdchFSuMVttgv8fzRxTj2mLFqgCKQDPFGf3gdzaAUxp4qo",
  "key27": "3PzDTcEcg5XCt2qJrWKS9qzkFcq9ejnE7SPdNVUddqUn2NaWwJcdMin5gB4FXVUHkCesns4wEM4z72vQ388eQ3tq",
  "key28": "52TsmCTaznZd3KnkTkhPpPceeh6HepBijPFM3rbdofaRi5FQsrH86AHaqxfRqM2Ag4MJfJz6wgg34WU6PNosmSC3",
  "key29": "5mB5Jexy9SGFGKHsPmdmxUHcKbctNtz4zSArfzwXwing2pC8HPmm2GSYpXuUyckSeSPDg3vw15LfAXazrkatjM4Z",
  "key30": "35eqMuK34BTZPTVBUCeNhMYS6s8bCTFNKgUZyauB33QWikFMDS18fRgcQXoqdCN7vvWkz2vN6XgNDZa8js3jPaDd",
  "key31": "B48N4C2TvhX7hchKKwpTDSsfmorYr2wcew4gsKvT19cMenRUYkvGHDsTVuZN5ZxjTMEkCHUHUbb7ekaXkMHpnBM",
  "key32": "63nGVrVNYEpB4q3fmnFF4ApfoeayxaFjxn8HvsexJwXHwHZCBBcKWspHorByZW5XZmKqkgMgCqfX8fSG3wG8zno7",
  "key33": "37fB21CRmMvm119og4Tdp5XcKYciQN9qFwekrp9MQfuhMKBaNBJmzdy2BeF2CFiUgvkULpm8m4m5SokUAfszexr3",
  "key34": "5KniFSW5W39wqfxbNM6UoJeTPy5xeX2AuemxAAw1hDeBAcwyVgVqcy9KSWpY25tC54Kdbmpw6MjHkMbvitkC1k9r",
  "key35": "2G7HKDwhVNp7MtqV3H7ghhwfb6zBX4PmrPp7nc4CRyaVSh9KryP3wCSHLo6ov1Lv8gLafY388iJTtcSJggJfn6hu",
  "key36": "5aXPJD9dLWdA5wdZE1WAceKXrY2F7M4wgenkc6cijJYYSAAsJv2yhS91dttjbeCjR6ryfHQmv9SUKyNifwa9EHKa",
  "key37": "2kP7wprg3AcWbprxvuvGg2uCyrGrq17JxnhVTpteQPupfvMprcQWr7wkP3Ht3d67BETwc9zD3KMtCTA8otMSnVZE",
  "key38": "5T2P5YSErH3Zdwzn7jxTcs7s1dKi9scVd6hCAhc3eafTGXxCCgzAdnHJU9CD1D7NqYuJ7195FUegUS8rBLhu8eu",
  "key39": "4qYnQbQvYVEvpKE2v7iE2qGjXn7pcxENrJbLjb2srHdBeoj9f71GaZxQrrYoycC6y1YP88ZRTx2VS4fCbJn2eZZC",
  "key40": "5PXqLfAu7Y9YTw7RLXEFp1JbcHTAvj3zRay33MjwG6vzTsfGJ7XJ8aQHLuUYxJf8YVQ5Jw5aUbtjgG3FQbS4zwPR",
  "key41": "2wzFujKBR83u4QLUJ32WdU7W2ruUoysCtVy5AR4ssdhZV5SyfPedKPXk16NMVwMTfJbu7THGoornbVyFTSTquUHE",
  "key42": "3Rhag7sQibxBTZpPJ2NQkAFEzT9iLYeH28V1cMMSgC3kQU2KvP5pj4hdRcS2i1QRVcMF6fwWmFMQDgUx5Ln7AkGU",
  "key43": "2iFW9By2K2siuj7pS2cuVJNMnfnsnhPD1t9Rnhw5BufeTW1e6sQX6UcjDAyoAgoXGjhjJffkrGWJvFvK9jV5swVJ",
  "key44": "5fwFcek61hqMUecmYNN7Nno743VhcA3jRMhYxeYEdAqE4aiiFptYsAyNktoXocA9e3WhzUUuptf1yRENfLkaBQmw",
  "key45": "ZwznNMjANEkkbS8Dgda71WUTVhR5DbMW3CW7qgMsohL5YfyYFDSLLmjXRHGBPr42F54JEbbrnPTDn4N6UqYZRCb",
  "key46": "4jG5jAqWxpBoTGDSTc8XPXMH4LEAhb87P8fkAwDx5HGQpiZTr4jyuxtwCXaYWyvKUgUsYrk1qmWqmRwePwr1vKrT",
  "key47": "HTC1ZTNUTgMXbrZQwUmKKgivpt5esNNBPJumf99StPhMtyerJyALsdcCLKTGKRKz8CCD6QGqfrYtYvw5zcqnmXP",
  "key48": "2bkVaRAQiNcMzmsgUKbdThKz9Krc4jXxMRAZmLZe42AEfg62p1AwS9GKr8DFNdBNQ4pTiMKcE5DxzHDoXdytQfBL",
  "key49": "pYYoDVzd3C6PcpPvtnv8f8vZRBj81SgQt4iL4UuPKFoghyXTxkjqjCxGJ9BZ9hXeGm78djg58tXbXN1xBKp2foH"
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
