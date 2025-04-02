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
    "51swrbJ4kUx8oNw4nSkv4KhprDGZbeWhLAzHzcumcBPDEP95FW7tDWqfaSeJTz6uz7c8LPKU98yXMEZeq2xgTNhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hFGHPL4tHL93GQNcynB8Ady2wRZFkZoEXw3iFb6VNwuDYGbKHer7TaQN7CtvuTJoqGZMppwBYHr7TewmfNtgmj3",
  "key1": "6D7E6xewNT9uzR6pMowqW7Yyg8utVxBJeyrVjzx2WreQTbkjJH46ghMst2HxcLhDVesdatB94qYonV1k71YzehJ",
  "key2": "4zKKfcgrmC9jckRiED4th9SjNM4YEE9v8FwidRGh8HES6ruF4D2m4buz8xw1wdTUmQHFWXvWGAzt4VYSeUuBgjEC",
  "key3": "39YW4Vc9UwAUTVBvy16N5qyb6aW6se5dRPXT5mSEFSsLfmFVrcwvNkiknKDNwAWRnmWRyW9z6owQrHVt5Bmv4xyV",
  "key4": "5nqHvynNYwhg2S6aK5RVUxD4ywwvZfjCBFwDdyoUgHMAJAQbf3aAXBNnKj37TW7w7h6LNjtswKXyjphtquL2PiuV",
  "key5": "3Qdv5Rf21qmYzLcDm311dcBvPaVArzPNp7NBwnA4kYof1bstfDRxoe4YcNZFdyuAeNzqsM6KoRoWLfAmJiiszgQV",
  "key6": "4FZhMEeC5TbKggUid5LuqHLEbqS2aw1KQbuHpSuH7tVBDkBbZDMGRPXHP8hvCdZ2pNNPqkUHgcGAvFqu7FNfvbFZ",
  "key7": "5jrkRazs27kXtQzh8hg7sCZBdAkgEbr8X2e882PmYCoWuHuayyEYAMhvhcnQH5NXQkbiwn1vPkLVSnoZEjgoNxZH",
  "key8": "5Ff6vGVyUDqppUy6DDKE7GnBikupsnUW4v5M9r4fKaQFvzY9su9YgRGNatrTaGRmvhTdFfH6AHv9jid5V2h46TCf",
  "key9": "4KKFTeVhLP8mBf3UkQtar2Gxxv1TTYSE7kyt9DnuyWmTiHaWFn6qMYX5JQrTe6cLtXcn9vsV8C5tmL2Z2WEq3iLP",
  "key10": "3QBdyL479v8ErCwDn9VfddBN5N1RHRkQyA57HvQwZkNRbcRUar6cURYzFKU3g978JCUtqxhYHMetzr6Xifg468gP",
  "key11": "47JVQr39ygnHGKzpPg4xNcXVc81P3zu2Fuw7VLseisvDxNRuFCD4Cb4zTgxGWp5264rhXjWdDXnMssrTtchxpqmh",
  "key12": "3skWouB8d95uCTz6ZDDnxzx6BPiBW68rsw5T4fQLnRXVk6auikVaheGnjE6cLv5EXZ6iJy3hVArHHXM5xPHAAKof",
  "key13": "3MRvjC59qX1BwPsfuZEpVNhnS9v3fZKVvmLD4hcohWdnAmZLsBUjnYRAtuwWDL1PZYz6b94SBdUP2NBibBKboCy2",
  "key14": "5Rt2WPQUAdsDxUvQXPs9yNt38JSqb2FVsFpqd4JikhraZ97Xxvbk1AijTVSvrGuYEyRcdCUtiQSvgvYWLTton3M2",
  "key15": "4gEh5bWshija6m5mmejXoWn8f8y48X81cZypFCqCKE1p4H8zU76LJZHQZogCDRJbynuncgxyxgCJqGW7jkNt6Uep",
  "key16": "3ew6TsHbHjU4RsFXHtxzULPz2WQxkXrYpnjxq5DrHvSxsZP5EB1D3uQd468gTBcDkQM7rn4itvqqpvuGEJk5Qwcf",
  "key17": "3wFipufjzaarX4RQtTAX5TkCiagXw7JDchnSgdv2zKnpU9dKsPYg1zUsvcj1d8NMN2WUJTcMjHkkBab287acKCzx",
  "key18": "5yef4hEyqsAratbpYVQpH28Nd52wNdM2DpRCU8ndRRfda6hPmVdbpCjEZQJesFZxZ6BJ434xKRkesUW4NZopHnNj",
  "key19": "44Et11GZKPkHYUso7Fmp7NMCyciBMkC31nnQgzvTYVPihksAtXEWCgAzvepo5gAwU7Ya28obY43nDyKpJBP8oEuP",
  "key20": "D5YyMeDserQfW45ECQSbcp6Nzg8mJGtTq9mFGnHCjGr5sM1Sj3BuJd4wH31fc3JMvGdjkU6tPJdbDRWRmubW96s",
  "key21": "sgw4hrhFeJy2AnJz8LA1QbR4Bhcon2KHuCAdu1eGatrf2kqZxTBN5EUqqvEXvXWqXcGCa4USb5rg3qAETKmYV4G",
  "key22": "RALe1pZDbmDqKgBsj8v7SubvbAYrAMEqgQEBPqTbek8aNXrkMpGZGeBXxXtz17sPE2XJJvAJvgHz4RLi2ToeHbX",
  "key23": "4E3nGAHqYrMSwNWiZSz6bVAifsbavHqS9GYdSPnh5Nk5CQ5Fj8YAAYA9obPm4Fo67TELRNut1nDQZ2voEzdsN285",
  "key24": "56B7udxsRx3ozcA87azfPsgWo768eNV25DJmLs3NZhGZ7PGZDwx4uyQ8hZxf1C6vcpd2yzFsRcDCXJY1ZQ8yE1ey",
  "key25": "2UT7BXCqoeaJxuaKNEbFEiDvAoKRUvdPqBLXzFGSqTyhk6K4YvcJZpvh1RgyNXijN2Ynh5a5MhGGwx5QqmM167Pq",
  "key26": "5UxAd6dRNHbZY4vV3dF9x9agg1xVJQ1L8viB15sPWcCYsZveq374edviWL1X29eQ9BNvzkFYFMETikz3T7xd6e6d",
  "key27": "4TzHpBED5SuLbWoxiWjs7bcNDgmLYRX5SaFYgF7qyQF8mUD1nn6mnjHmToWwdX2bnbdZcPXv28aSyti3m5DZWmMK",
  "key28": "2qZGeM4iA779A2bdy2UFHFAVwhc9VDVAA526bkGNw9b73YE9kHuB4MF163o4ghSpNtTCC3Gut6tMtsRyuYWrWkwc",
  "key29": "3Dy5pfJk6semzKiT6oREu5ezEnR7TVpd9uVvcNthYfNt2CvuJw8y33dWUicYUKfnRJjsryqQ6uKumMwx2zTY8PJz",
  "key30": "3MUrGNy9mTMUjft5yGbcyka5vBW9qSRp2f6b9cuUh3stVheeYqhd7Xn4yJ6ACsTEdqEJDvKHc2bdSxhWzZwGSFRH",
  "key31": "5s5B6k6avCT2eKR2EofZyD7X4xE8pSp2dc3c1sHVPkHaQKFNpC7Fv4GuSfWC4F2cXGYBmkaiMXGpsPmuac9pRVYe",
  "key32": "3pbMiSjtC3Xyrh95Vk3FnQswu5ibBa1X1kiFxE7ZoQ5sNuoxqXhTdfeziWCkDDYo8eC3udDVJzaknhJ947DcDNfD",
  "key33": "5seBFFzzC1KHhxzrwHMjFXLQiEE15dtFoHGZu1gkYECAXvKKfQgs6kQi7daqLyvWd9QtaZP3PBW7mrzzxSkhFYAN",
  "key34": "5bbxSgF19A2QXPvDpS5r1FJvs1L5x3ord7WPmeNWCNG467mvyfRcbQJweCWvZejZBA7u3HX1zGoPGQEKbCdep4Sn",
  "key35": "2J1X3B8SaNJBS8joS7YNijEMr6t5gkNQJoUo3nx5iECBwsExKunM7pgzkppKd3hjFtczooYqJyhfBkgeFZRbUPEL",
  "key36": "fFZtYjjFkYUR5SqFQ69UQBRMtq1pE1tzzr8v9BoNJpbRx7XBfRjjfE29QS7wJhyvff6BtxJqyGjpbHj6DkH4rsD",
  "key37": "2FLKEFaz56LD2jz7MwGDaWyeG9Nyj8z9btDdv6AUKDhziYDB3v91mHuiHJu67XHF5ZTL72qLB7wX8u8YJLt6FDwu",
  "key38": "3myStmTTUyUjd3vrA3T3544vrFm4LiTk5N1r7wRygESAK8sbzM2HLFmLuv8Pypo9XnrJuqRpSfZ3etoA6iNyGsvm",
  "key39": "5r73xECST795CjD5YW4CBt2duXPZ5aKrbTvWRpj4pdCcwRu9NCGjbxgzT5QoZrLvLmrQUUf72VRWpujARjVR5vbn",
  "key40": "3GvCwfQekFouwCAQD2PEnh6PrdkGipyLuMbHAJzn2P2sA5rZnau4B5WUHkHtCgtSJhBAseMXMFwgEDPxJMzUBMT9",
  "key41": "afmrw4xZUEZiA66VibVy1LYcP9qToupcMmNqNWTAfQEx6qDoqLNksrYoV4Ek2kP5a9bhH5u2gCGYtUngE8saDcD",
  "key42": "4eo4SsH3SiJa8hJfSgqLxufm3MkBMR8vqu85kqwUNdE59PegdqGdZYj8Kdv2qv2wNewAGpWApmfeNmyvFojZgPgn",
  "key43": "51bD2jkLFCc1XRjoHohbx3jXfASs2GgY5tdtZWCYXsafoeAecmeSfWmAqUaXtXzgJNntALsbgy9B7ioyceqfXkK7",
  "key44": "3914d1LbwUsekjwdqtCi2ZYCuSmKV9ZivWVynJ7YzRcoajGf4f1h9JvAL3SC3BsSvSQxSeZQ6xuL6FjLSKxZ5N26",
  "key45": "2u2PoTW6RBsPQMH8TvYAGWCYmG5u27gEBopbnBHUcbtexMMMSud7WuQEoWCjosirK2SBbPrHkq7edZxfrZQ8ARGT",
  "key46": "2SvBMFSuTCz4ri4iEnt95WCg3PqwbAPjMi1kxo2RFTZcYC8jkD5BChVEgM43PZjy9JG49i7BPMJAL2PYwAHFkhH1",
  "key47": "22e6chKDEVZ2gExiKB76VtQZCn8uFiSJkESHuCotewNLEEbg65nZD5ZpE5Q7sP5VQbsnen3MozYEUgLZrE8Shs3o"
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
