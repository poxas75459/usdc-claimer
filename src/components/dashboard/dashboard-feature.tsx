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
    "zyNbjWsrLRjTA1fLfpDZen5ZB5x2UEhbjhMQKfzuMEwyFuZo6BU93XwaWCZsQHAMk32Z5FHEgrXZLoKGHKdsoB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tEvPe6HRx6jJ8JLCRpCHLnJGoyjRr5DPMBJ6X1sQmCGiZK519am4MY7HhpmdNnz4YTcLPmYUdfLhGhRVnj5M5Pw",
  "key1": "3mLT2HNwaq45pVjnxTqXfmVnPtWzgus4aMzqeziJeVGuS51XyRvpHYD21GR926ZwCnz6v9ZH9rHkogWusvBXamcp",
  "key2": "3b7juAqLmWh4KvwXJjLDb2cfTCHxWY6u34qULZisddnHZDL2HFaKK16AcBDDsTA6UWgstM2m3ARDMqafFH34Ukgu",
  "key3": "tfyuQ93fefL3SCmWUyAa233GRKJUbNmSHto7h5P9hAbSuMWZoVePzN5ent3KzVkyZRewDeyf4HnvBnXbEKxNnrN",
  "key4": "2bWLGqbu7iMLLo5GeKrosL4Su4VZY2bQJtLEJfZQn9usgrh4WCUBPLeKNdFNMGTr4HFdatmRK6kZ3x6tt4UjXVKm",
  "key5": "Hkc4v1harw9xacxabbsmC26dPgJqDzvvewqzoJfQmWcYorJ5E32qyRyMjrzNrzgvRRUtKCjX7Tr9VK2ZpEYz5yM",
  "key6": "5oURqqjn6caekPeKQckmUosGvQ5FuLinCLbGJxQDVovV4P3UoBsHesVTEhocmJBpYr5dS3N43u4hE75QgE7xTf3m",
  "key7": "3AvtVde3qjorMorFdQVVMY9FHnFeHH5sF2Jm9hrM3Cif2KqYajM5PQf1ayK5yLoGzCff9QGfxXdCtwAMAcTSEXmw",
  "key8": "3JMBeSxVDFY2cepSTTsAQYAbebriaWwpN5uQpmUvdwin2yFZkRBVaDkqh4fEvPqUPg7d4X3sNKiaqvoiWwDQHpDh",
  "key9": "5yh8Xm5CVrWk7Nwp3PtaXa3o483Zu7Bk8CD8j2CMMSo8sGL7c1q5gZdcEnaZHzDAbYUdDSd4SbiUoUsNTVyWj7KW",
  "key10": "5rgkbgz42cJc3pPHqmviHFf1m33Lj6nPvSZPiA3sMBkYsfWFhPagAzgNHcFHsKx62KDFDnSgEwk7qAZsPoyB382Q",
  "key11": "QZcWzo9QoM9DzgW9h3BGtbtw6uKxxzVZcYXPnvhoJHRNYfTM6iYMKmudHrLiqDGGzo2wvKZNTCTECUtadGfL7ga",
  "key12": "59pG5Vd5LNW1bXguoCbFQ9HPegMefzxxdbY6PCgb3RX2GLkmJD7teWN4zkyrfqo88L2bxuVV4x2ZigWh93ASdmiu",
  "key13": "51C7atkk5PVhaukJGg5GNRKVnYKRpzwfKvMvrbBG8FTo8Au6hpewDrtsWF912oRr9K5bNgVo8t928h8nKc6PSBrf",
  "key14": "2THAewwPwkH76GvdTSAnq1RG54wSQhWCGoqWmbhZDQcGdej6LxXqQjDiSHFmEBrQU292jHDq6crKSLAq7UoXg45A",
  "key15": "6PQw41wRYEby6ycd5zjq7fJTTdVFy7R9Af1HvnbaZmQAKAev83hTJSwgCWzLihFGdN9sFHHd9EGdHZiK7sC4aba",
  "key16": "23BjZtAe4STP4Pa585sBmiMm2JyAudet9ys3YN4FG1DhGwJucSmpFHzApCDhPBRZxS7HqnArd8av5upmfDC8eBV9",
  "key17": "2D2p6GnrMHbJ4RxHbFyAmvj4gR7i48DKa84Ku1gCBAQXyc3joq4MEREajyzRGqs9Zzvbce7MvEggWry1VQ2TTVqK",
  "key18": "4Qg5V6D22f7mmJofkNq6LWY8qPYtuW2SzkoyVymuUjVrjq1CndxACHb5CWVU2WHiQuqhTGWeK9jVhQ2YizzKEARb",
  "key19": "5wmkST6Eqbqg9h6pvfp4FV81eTN17WjjUDBz6KkN5xWh9Bj9w4hBgYxEPkuRoFYrYcPqqdFpfwo5TLKKdtEXJbuU",
  "key20": "5PtSxy9vAfyb2T9fgoxRKaGgntPWkPWjeqjVgBr4efyPGKgiPh2zZbh91xFfBW72M3BhtVotgjEgB3estds45ixt",
  "key21": "Dg4ThGxBujU7hNQ7ZpFoZKRVZ64vkK9Ymf6zwtAqHW6C5naKjnWSM2kFghgJgUcnXwcdJhABLvg4PdAUTqHhhFX",
  "key22": "3Z3VgJqWgcYy2tNVLsEDjpEbKKcBDUBQmAj1j6PyxAbah6ebSzWT47JYfgt2fpR13r8A48x2Qn9mJLpfZfNv9dJ3",
  "key23": "4CidG3fb3KHKugsyGh2aLKUHUJuiRebnpNZ2SAeGqTMhg3KBHVCXQcARZpkWzpyEQJSQPrZvGTf6WdnrUWowuZis",
  "key24": "7XWrtW9EduK5CB13ptCDt9reYuobQ8EPHTJBcX5LPaF7bM1JS3U2KSLtoCb5BpmkDP5KQmYvjhxwtDsLSaPUuVG",
  "key25": "4TpbSV4A4DwCNhVS9aTuwYZq8G4jGTY51Zx7e3rtxKpppQqJQq7PyHaDAKsp1rcRLgA5RuSWRV2tRw3DeW665sZ4",
  "key26": "3UHNjos81k4gTYupuNGV7TUGNxAQCigfWEwYTu7jHcL7wmUk91BZTCzFaDe2Ck4cMBzDwn5teSWG3Pa4kytE8VC7",
  "key27": "36ik1BG9Ni8DLNfffUfugYgwpQuvKmgfDwLLR6Zontxmo9qtQNwZLPpNCqN3Mma1Z7LBfQpiPh5NdSKje1jtQ77U",
  "key28": "4aXC6enuwcBZLi59qiAMYG5pCfLhUNvhhWCBsGdRsVWxpbeVDeWaHzMU1LYeDtkaB8UtNkRb49TE47TXBhDwoDeC",
  "key29": "2FrCtP6Y78M6CJhQQ9VTKXhPxTBSJqyU2oYxh2CadryCbMB6YG1X4aJZBsK8Vsj1fagtqjT37dhJ84aKdoNBEgkU",
  "key30": "T5JESgJirkWUr9JpmTz9Mzzky9KycAM2PFJCKxRqMsbC9GY1PoGUPcWYiTo4wQSbw4kG5B5Sq5gc9PrfeWeeQBB",
  "key31": "2RYfZf8h2DLTBjGUZZyDgm9Sdg9LNYp6d7XvLAHa9r1tdRRHhPzEoaqMgQo9wf5Hz6rs2vY8Casvmg6CF2DDBMXo",
  "key32": "3GD7ZgRefV2xAHMBMGCJ6mvQ4yzzsHjBFgxb8VrVLg1PLvVgViRXQnk45v4iS35jQnry61krpX44fk2BVK4PW9eE",
  "key33": "naZwBxpzRhXGVjKyqkNgjJeE3McyaaZwEWwZHcTsGQY1cVJgNtqz7DvwGfqG3D4tuMFhEbUpZWoP8eu9EpNpVuj",
  "key34": "2XnCMzwPjMxh1HnV5LcTKjbecJXaQ2WGBjhELZTZw57ZyZfMcThK2dzCALCZVE9GqzrZE4Zj4556j31nwitycoWG",
  "key35": "5qYabUaR7zmb3qpgTpmxk35vUwDaa2s3hikr2tximKh2tEbB7DeGcGgdr2qEJUoqjBns765iLD6F9YttBbxCaV4P",
  "key36": "4F71c6QDBC98bSurzJFSvjevGzWgSub15so6ycH35URVk2E4h3Z9PRqi28F9QK2ZyVrLzDYR7So8MR6rx3DJdp5E",
  "key37": "4gQemBvMb7TzTYhzjSNDoamthXktnfhkrDp1PQFndAKwWdET3KKTujkWHyGua2b7Jw5HESfC1AKL4qT4wN7kCtw6",
  "key38": "65sKwSWVXountQem2QTj5b3oidAaC2V1LVVcgVievX67wKwUrSLFp4m9R6abybVgrkPPYA6AJeRG4jR2Zmtao4Xh",
  "key39": "b4Mq417ow2drj5oSBegfYhqGzxU7uRwwS8JaTmHyBkXoSL9JTz5BqGePCzLVUwptH8cevEW4mJAQK2GXTyMRRfM",
  "key40": "1YsTbom9Vd4Y8tzoeQTT4bAhvQ9hFwWLb8KwEvQPcXrj2XnX9xBaUn9cHfRPT9p5rXsrn9GymppGnpJ6LhCmdZr",
  "key41": "33A5mj7BrRx1EqKy7HSTGdDK5DgFBg9EPRTQG5LQ4H9PXfh7W6sjQfgsSGeGkQuiVyVMzeVejXv7tgHxzf9D7i4f",
  "key42": "2Jk7CwGAbs3M6KinsR4LYzAgBwpK9vQBZvcoPvQQsNsyf8WXYR1C9SgXkT7LrzYuosbVBNnYS8sNC9h5zeaEkLtQ",
  "key43": "2yFx8WZ175C5QB7a3ia9FdHgjc3mARgakPFyEa27gJ55tUfvWXnRU8mcyvwfeme3oEXTXT3x69jTG7Nb3vGD5vZV",
  "key44": "3q8hFaRJaszdAn9tXi9QBqfDKJjTJ1KVnJQoxJLyY35aHAqVMcDydmhCrRZodUWey67HJxWoApZPn1SHH6LHykSY",
  "key45": "4q7i1PYN1NVqrtdjoWrPx17S1C9SpNo6zUqrsnuJs4NHmwGUctpwamE3id6rYqw4ZwmFntqQz5MN6uFU4fsnT3rp"
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
