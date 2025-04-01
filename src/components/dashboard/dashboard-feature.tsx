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
    "3fhS6bXyXvQxT33MaYQUPXxf33FniscqB2AnkJK9tPqjh7vVt6s1wqeZG8a5JncuizUVjBwUZRchq2MYBrZm6B7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QDQ2XGda6wXiPfKmXaMMZiRUXvzKRPR4FrVGJKHAbADEzWZRZy75dnac8pWxJBx33Aiv4k43WBEuTFc59Avg3Lr",
  "key1": "2fwsJxDnQBS2h3qnNp3B61a6su9c1XYuCunYJchtxJ2AyJW1Aj94U8pBRDFhL5KKyWhLmZySFG8VYzS43kSMEJqP",
  "key2": "5cAkAK6xX9ZU3c5g1iqXWMDxD652JdaUm3w9sxVkvZz6PbJW1eDACnkxrLftuRmE9N5DtpYgCmWMGZM3xGqAsidR",
  "key3": "3BXwdMY9ZHyD4fDTZWMZpuKWfC4w6iLh1wmXkm66rCvKhGjGJZQV4bcUN6DeLYcr5NFWWhDgNwwZ9Y8Z1aa9vhMJ",
  "key4": "3qkqcZEdagYHafAN2k8F1mYn6afyUE3t6PbK1xsfadbm4PMUmFMntyHABrHTrfa4TKhHkYHcoAbUbhZTKDxGt5Hn",
  "key5": "2Z72Nem5TqXeht9eSKBCFnzhSwcrcZgXEXTT3Q8jw1dzw2XW95CAR8LpwLo11VBDyCPXgemKXPXjD958uzm6fCEY",
  "key6": "JB1FVFNaRiHxZaQh5KjexjSSqKMQDzzDuFT1YenT2ZczaPxjrQudMQKvKzVHr9dFkz26bUb26NSD7zKvXWMoq8d",
  "key7": "KePG5yTGWMiTQ9eQWScFZPY5TSxiQUsrHKFjs77FunLR853SqHdz8QqTWiksS4schH6AKY4K9bSycjVEJy3Nqq2",
  "key8": "35oUneRCkfqsbRCbf8VDV4QYRaB1uptEQENvWobaZKDcwjqZtjVrKu3WA6amRaJxww168HoKkipqdRYotRRp8Mk4",
  "key9": "614B8Gq8nVMzn9tvpx5Rauxtk15avWMGWkPL26qZTsU1xBcqvwDX5D37kTNDwvm1qzFJLYqea52GvNnMd5n7B3g1",
  "key10": "nUtaG22jm3BJebENrX8omq8vP2nyrsC9c4RuYL8Av3Mz1F6fK2AArYfk1vDBbfAjU8MEkebYdx5xCJ9E3jKs19F",
  "key11": "MtSzGp7fzYmRDCunFVjkNeWLPutCAhkcynzziWe3NxXKS4aac2i3JdjAGkQo85PHe63cbgeo4uBjUpmupo2krQ2",
  "key12": "2JQXDb2cJ4goiRhebdoY3MEevySJ72zpPiWcRqNHxTbUPrDAuSmTr9nkVfLbPc15wwT4jgo4bjPYKZUUQ9vbCiBq",
  "key13": "JyUk9WvCPkpezW7Tae1NBtuXJGd3dnAAyZcw7mSKjakhzBn3n5KNkghJ4YhcAbVtsG1fCqBw8xMGXk3WA9bLJrq",
  "key14": "2vgn5KJkn9dkWd4Jd3bU7mPm62rfRH4mzRhVD7Rn8VQSGSTmmTusvLayZ9JRpUKJRueiHU45uT4QsZX9YGpf2JNS",
  "key15": "xN6UTAMjd1buMih76Ag4J3kGQRwQjNgmcyxo1NMvYFK8gPqzoQN7jgGsZXJpG5x8De96c1rH5jps1s4xwEbUuw3",
  "key16": "5ecDXPAnzi7E6eSwD94VnHtpZrUie1NxmwzXXF8Czde1U6ex97QXU7meAeLRPzJDPc9pvmroUNdmG4g6gcikJDgW",
  "key17": "5kTPWdMnAjEetApK3F7afPpCVjG1xekuFKHHujJBdeFS1yWDD9fmTUNyuHzgw51mpRu6EpXtU17EeiPWxC5tkewH",
  "key18": "222fHBNAxPyBQr1kwMLcoejdF7P5cZuoJh1Tz7oYiUtDZ4xaoyv9LBjHaVEXXsS9QDZJzVsP2hYAFZsryu8GcUju",
  "key19": "mp66qocE12acmtmZR5XoC9jWQbBcVDJ3roXwu8gbhfdMd4oy2bmvM4kKHwS5XyYZKVRstMEMJtinHd2vo4b262v",
  "key20": "3YFZ5NxB9bxfaV9GLXHe9uGWcDi7LZTpH36nwpMyRcYicgwzuiaYBs42RRe3jDBYx4823y8vP3BQxXL9WHFC9A2H",
  "key21": "2pN88d9hLRfTk74E2gCC8g3jVXCaov8GicUz2r62355ydvXK7BtH6ZSwY6LiDqqhMHYuZoGvLaZYHz1RvFXRabB",
  "key22": "2WtiHPWEKPxYp4rRtRJXTQPGVXZn9GizNiMFgbMQUqtHAiUsWt8eL8Y19Ab1AdNZjy2iD5SyuKeV1LP9Nf8c2jab",
  "key23": "2ddT8AYdb1oByEGZKkpLnnyBVrjgmxyeVB6eAZvqv4BKkbZPgTzSPWdY2MApiVtt1dWqZrKqgn3kcpCcVybUANJN",
  "key24": "4bWk2vxZtSCWf7n9bf5FbPDRnSiWG6c6M4aCZbous94ngB8AiADtpFJpJBx6ryvGoNnpbnnxotvnBRthF3xX7PH3",
  "key25": "4tHSsJu9TD4ejTLWJoNj7ubFHgUav4SPUsLNuCdaS4HKyz8FFeVoAZYA4MmT9FWddqiLTSstp5nxrhNURcvej5ta",
  "key26": "2fkK3XH4w17Xm8gL1WKBJAembGuMsB4Byu3QNCxh9cxkoKMY7mbAph1t6fTk5h9efpZE9eQy9mG1EcS3QhhU77wa",
  "key27": "5N8mzPjiNeijdG7CnGdiv5Xact4a4rEr4uwcZbw1SERckFNyTrWgJ8sKhTSzbZDwkHgUskFmVrGkhW8KkqjbeiMF",
  "key28": "3wvrviugoKAqGXiGf1uBYczUWXAGJzLzJmY2xyi45aLFFZGkZHfzfUZtmusF73czE1ZvTHkoL1HPG6rxF6rXJYdJ",
  "key29": "bjgmds9nxQwAJX3UcxsdpAuFSQKHcVBKzVmFLuETjzHAkdnPDVSC4HLKj8wdLD9snDMUg9oEH33pwpaYhzmsxwW",
  "key30": "2Nyu4xZWJBJwyJsTNKJuVm4RyHoopywcfDMQWji8s8xaHH4DEMQb6ppcJuoDcP8xqDxoEiJ4Zv34hmXPmqabrtbh",
  "key31": "5BQ9hT4Nddwt3giEjnAr7Sob7vZvFRxkhktxHY71AjnBxas3RWZZWZESCNzcfUCCeGuMmURLigfswFTBhcLiZx4h",
  "key32": "5itWyrk5ExZ8iK2Q218g5uxb7oA1DZU4MuXzz3CNeHeXame7WQGMw8wJiBqzm7ygDNFpuYHYoW12Asmv8UbWD95g",
  "key33": "5QvFhNLEwyQnPd2DbZLqK4UeisRPneFujRMPneRzJy97cyNDf6WXDhMJw3VAsiQggreQgmYMhh3eE6HjHhxVuxJM",
  "key34": "523SnH1FdKF97cZ46wYUe1AD7EXUJcC7eFxANBzoHSMNzwLDbBTG9GkFvdpHgrVbZQoBFXrkH5MjeoNAg8hyLzFT",
  "key35": "3XAdsBcPsKak16eJreyurAFkjxc6zGbc6UGhxB9zH2GoXxi23QUJwdW4wAJKgJFRoztPgQtJYCMdNiMZpS4JuqPf",
  "key36": "mwKsuY2CckvGCbEABsXMW6vmgQeYqQ7TFrt2hzaiVJbnE5jGKVdzLzkGpeakugX8EsbsWaRoSEU5cSYfWtvvRKp",
  "key37": "3sfpwTBf59RrNhTzNFzYsqEpXchSReToztQc7yJRJxgysXoAHGgmUAHaNdFz43ptxG2fSghtEnB1giEuJgYFpP1Y",
  "key38": "CPrbdqkCRYHY8kFpuS32uQyx6R6zmc2xNBJbErim9kfs2MjLAZYUdZBqUZgxebYntfnZBuvhGgTwmCf7SK7vft2",
  "key39": "WEwS4YqYiDb65sWmJcyFXhH9Sbs7ifYCieRHjuXHio8ok3eN75xqsGrP9gvrAqWZSksdJP7enNuTLMQUqqv46HM",
  "key40": "4YuvGegBpPJ7hF7ay6gd9hzXrZVkhp3KL9z13RocHJ9aUsahqix8En3yTA5DUzGa6FefENfJrRrSSN4jfrzQ5iQr",
  "key41": "4ywSaU8a1Ynz2sDo7HSLfJn5nwiuyPtNeH1RFmoZpZ9bHrtMqVN9cNoHnSWkSnPZPKBpkabc3t3DfhFxTrxyDDiR",
  "key42": "2TZW4cmX7WvybhWLjFEAutNPqTzgZDqJdGZdcTi7535AXz65tLFtBARKdfmgShwF1sJc8XjwtVvdCuXyMA6WLZmR",
  "key43": "3rZPJFwZ7fwN5fGxevJh9Mx5nLDGFEnKmEUSxhiM7ycke6TekfL4peHreFEW4ZdCAVojKxX2iBMZ1TvnQp7ux85C",
  "key44": "2rppKwLMj17xKRifQU7BPGZ2AAS7LUZjuqLRvKj1QQZwnWga24UNqkvTKwqww78nsur6qCj5WGsGkScRooLBc8mC",
  "key45": "5LkvaEFjRdrvfEemrhncsvzjTBH9S2VJnnK5pAFs6vBkszze3AuxDwpNyEJEmQt9m5VA6KJnZqBq7eRR7e3tSBss",
  "key46": "7D9ADHL2eDSfVoFBL5DUzkgB1VAhuoUVzrANZoGSaaQ1G9ct6v9Mgo6HfSx9RKZGgEJTCp9gQHt8ZFhCdBXYkcQ"
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
