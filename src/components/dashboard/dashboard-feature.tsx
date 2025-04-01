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
    "4DAYqm1jneCRXUrN5wrdshc3S66vo2rQ8kiKbiKSnPaCjWY6DFLGtZMUB58v81qfnernZXqSB71rM4UipgZXHQEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pWgmozMZ6w4AvjYrbG2GDVqFMqtD5dakwXC8zyWbNi4CndTtnSmNX2yn2FfZZ44bPTjyf2xR99o2FCzaeFnMgKR",
  "key1": "3zB5A8gvjoMc2qmKxHm2aEefJUP37QkpWSpV5MWobo8tSQKYbDXuXgscZ7VkWxfHgbW9cc5PU7xKEXkkKTsVbH2J",
  "key2": "26vBNfgDKAi9bMpJ9zboUKjncY51rDjUWFqcWo6B9J82BihA4jKXVAYHBxuBjWqD2fjGF8qhF9HQ6ZUXRqDS1AzY",
  "key3": "57wcGsnQaYzUGhWic8DpMshGBRGQghDsvvRfCP1SigUeH973Rd4WBPHDyFUGhKFm5CGZbXMawFhzeMHsijqzhJDM",
  "key4": "9iwEVpGLzMH8uzSeAxHstdLXu3qTCoTbQHkvPqkznMtCgNcUFsiBwKTiWCfjfSG2BYqbncdfDNfTdc6jksvTJQU",
  "key5": "58Tp7JrorwhTHAj8p5QsgrJoZY7iXPA59Jgqk32ynXzSEsuXxsWi1bCCw2kfbVMcLkXJuiTvYGmoYKG6hhEZ2WeV",
  "key6": "3jVKKpoGi5y286X6rBGPiVm7jpndT2VJSJo5hXV6F2duEvk2hnWP4xghonHad9cz2gXkEFm73jz2iehPYzUGZG9u",
  "key7": "dUpwvma2ECxhRCEXtWnftoPPazqwhdtQ5hmatD18nfi3U1TbTn6woc5Gagk6kutTyqp6xRAHLfWb2ksvPdHv7AL",
  "key8": "44HMiegyMUbQ9ALp8ssEHyyXnUuWXswTX9aN1L4pmAy4qj3X1tin5SfavGB92C8xq9mH5qDBed6L2kvbW6vvEwpe",
  "key9": "2RKRpLepANQYtmFgxWKdckHQQMwp3FS8VDCtyJjdizzFrqtUdUK1wGtoqZEeZw5qKBYXP17du623DcdwQyEX6HDB",
  "key10": "56DPhDYVCcqyRj7kA1vfS6y4kdUra8PeHPqx8yTSd5ChnCbzGdXE1nUVzqraN71REuPsPTrPj4aA4smqgm4H8Tnz",
  "key11": "KZMEsoezy28au92sSku2wMFvi6ULddpdErH3aFrALPbdrThWGNWaDJHj1oStEAbqr9k3u6UP1XTy6y4CWTVEuds",
  "key12": "36S8HVubCsqCSm7wqpL7jUP6VARiu6ChzumXfKskrdevtv55xhye1rJBQZuqu2aJdPVnfmM9JqK6zDKKqXnBiFbt",
  "key13": "3fG28GtLtPBjKxiPCGySoEgUn5hkwNx2UWCZcfiNvurgY9zf7Ro5Y9SRzHyZtgr8A2faAki8oQWM7GabTRnsd9up",
  "key14": "2N8SJJ58K3wZccogxaEdTK6K76bzXeL2AuQCSuSmmQJzE91EPRwWqeKKtv8E8ebUFkQv2GdXfKBtsoM2EKoZxJVh",
  "key15": "4vuvk4MgTJQi9Q9BAFbLgv7ZHffLrtndf5Xs7KxNRJ5dt98znKV7PNAD1mfsZKJG1s5h5qP65evJrAhgMogpA42U",
  "key16": "3tfdEYBfMopMgkS3wmEEK2o9fasaUt7Ap14HZzHdXnUo7iL7z5MQSKwzcTb3SmJ2MqfzjWtxx1LKHnSKKZKEUETB",
  "key17": "3LPVVaKPdPi3KqBe9cs4Mqc9WoV184sc9iw1tWQhsebX2YoGZDBi6gbdD24idoXDe78rBuxKwQ5iFZcEW9NdNpE6",
  "key18": "3nUi7hDSPyfQcBiF7ckRp6NqhbAc8U4ZiYWYQXo6eYxfuFTDPfH5hFZzp2h3mETdo8mksom6QCQgxcMAeKgc2WQn",
  "key19": "5VwyGZLMHRstjwrCGMDF5Y9FzEtSMVXwmi7KSzK2XdQgmZgMqGjM8FnurgUk8rmh2rdj4h2wWJdAmXwLBenAfkfK",
  "key20": "5CFic1NUM8tqMe5PujwbNTmQwTbqf2GhdStjdSFY377cLaZc7itfnGecpTRQTVNTvFx3DBXnqeZYqk9nCdMJLmJc",
  "key21": "4wpHqLz9SK8wevFjde7K63NZJy5DMLHTpPjrGyA67XTwFygN2wJQQHejoZyviwedVQjMX3phJmwanbctfiAzYKHb",
  "key22": "2W2EQUN8xTFZBY9A54uPJbgYQTsF8vVXwBCaqT1a2JLDrFKJnkLovwyNg4fXG4yZq2qyNWsCcjHxUzMC5AuRSXM",
  "key23": "2GVubgBFFQVCktpzWJBs2RcUDzA57br9jsizLD53QVz26w2wJaQvHHszEWw8he4quMhTYciBcAtsES26GUyoDp5k",
  "key24": "55ZfS7Wuu7xpHtWh2U329QTghXj3FeeTJzx371gWKaj8fC7N4kcEhbF7F5d6zyhVakiULWiUdY2iB6eb27pqVrA",
  "key25": "ekh8ECzPTu2WeeH4yUfGPC6Jd9j9L95cpa9NbKyuTiiY87oWD9ZPT1JvuczQRRrZJNasWHHKTMxigqemBGxV7GF",
  "key26": "3bq2NDAYxfHjZkj9WXwzNbcYzm3FRTAYs3bry5iMsvMkaAjzKkfQ95L6Knky12Tt9qmXdPYDqNrFZKMQ82BjKrKK",
  "key27": "vjeqm3kXukyXGgQwdNjZvxGTnAhSN8ry68885V3di8FpUbkjC2TkpF15MNTnowVJ8PrF11u2USw5QYsnU1iy7Fu",
  "key28": "2Cj3mEHgcoJgFeMPTK4RFESK2Mq4viHiJYXSXjwkfVDpwCZuqeXzaWi8gr7SABwg4J2sQgkdhzK8KQAGe2v4Neis",
  "key29": "2dqQ1hbqhiEPiko4Ca67nnm5DjjaCv2aH5aV2DwiMEbcXHVbt446U5viqdiwpmuqMibofYqSe8eGT9yYJpAFjQC9",
  "key30": "aJySXUxUoogjmcPbzcMzzudFb6NE8ybSzeFcd4imiZyMj4UD3hUjGMBTMnGBuTVjvH2JRCvcvnYguRAzTeF1XiL",
  "key31": "eA11sHvJ5Nfs2vjdc1WL6QyCCEgpZ3cd26q3QkWGSttDVR386gyNZLc9BqsjCW1hHRZuyVDkhyU7dTcVqbs2s3b",
  "key32": "dpuD59M5rGBKAhUkktXkshngp2pDSpGWYakbsnuo9Zg8PpSMSsbiZcAUCZVqiQtMKrPE2p3KkHppRCfZYGMKedt",
  "key33": "5Whh5dJhYddSaXwRTjUWBZ1sW4J3gETErdFhF4UDL2gMroR85h4CVXg1fZNnLtBh76RZh7oygXeLvMN7FN62NSNP",
  "key34": "4vdpssTdSMQwTgcLT85mdaNwSPeFu5cEHsNKicYhhCxEn1FhSjfHvUvDSoa4gN6644L3TGfPAC8Nit6xyhtYFPK7",
  "key35": "2WnUCqKxit65RqFqSotCYiZzcZfUpdTK4H4skuHoJX8KVpbeYsPJfJfy74KCV4ymC8Aq4K6vHNVGXZ6ekszi153f",
  "key36": "4q3tUWBMvv8BsAonQJttAd7xZbJhTjnDVTMk3BM5xXJGDYCYrXwbWmAWo7NRf2J2rehLcKfzaDVwmgE6sch6ji9r",
  "key37": "fAj7RgrvHHwhssSmVcAzD76PHW2M3mn3oQvtVvkoFm8BNU6RQdYwir5QLc6YoiFbYTFQdMbPYsPFYYrs9qzq7m8",
  "key38": "42yNGYDnZZGzL7STiSsbCWMiT6Q6ZWfJUjVMkfCRMcxfFstop2qMtfX6BzJtomEhrEtRWYnh6btk8Vv4JuhpqXdo",
  "key39": "3tyiy9jn1ByPB8JqMocEw6DxiTdhjaHJLDh1afZ4ZVUo9yRT7HFUS7ZbyoDZRnhoXR9zaBGAJuVSVU8YfbPykn7q",
  "key40": "2Mey2shXpFbEAFKn5JE8VAJu5dBjknN9kweABnPCDZURSdfQSNGn3oTDfsYzQp1a6Cr9Uvw1nr11tiuUFBB2QvFm",
  "key41": "4rCXwXuW3Tkjs1Rn832nKSD8HTF9fc5JAU3o3R9yH6EfvZMPFHNXWV5JLCsSssAgGjPVvBVyPu5bQ8Tn5sHEbUQc",
  "key42": "36ATxB1oKYsmGFV45E3ro4y6Qp3XHGsPCUUA1hAMuSpFwGaTATXg7HPPunyZYhJnCp49SoXSNPL7KZgbD9JxLTLg",
  "key43": "65MJBvZUUuvhWc9jX8YPxVDCoQJQx1mkuFv5GenrBepUmHpTbSjfA2qdz7riDsGYqxxz7zLXet8bTdNg3CeuxEma",
  "key44": "2gqFMtisStAwzW7LHDDdQtEtvckdm6Sa7zz2RsMiMequPsbdZZWXhthBByzdeWjPMv6d754pRmjLaQRJFqiSk1Zb",
  "key45": "2DBXvNxy1u3Th32wpn5fsH3LiuRNWsjuLtadejNnUrnNcCjnXs8uXnARV6BESdhatLMBGuRGjoGJZtHFFLQ65HiV",
  "key46": "GjjvaWWTgLSqumcBbePkMSuMfeQe5AGFZTEDLY8KPwByHaL1kGTD27JcTNXemwjjJftP2ViwgaSyYxH2o2JMZUW"
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
