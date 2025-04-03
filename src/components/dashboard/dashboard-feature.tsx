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
    "4XcuEr8BfTMD1yjZtZt3uStJZtxRrGATQECWRi6rssfV6MGroB6YnXy76w6SfoTFGAmtuTK1BWt4BTJWhMecJZcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tr8jkQ7crobnSWjxfdFismnrBFEPj4ytSxbxctcdXMajnCQYJD5LiVz4uPSbB6wjFs7tqyWx24nwK4nYib1GgiX",
  "key1": "4ePnr5R7sr3JmfZUMqoWiDUsSyVpksCDUXHXahYbB86QLKpmyMm9eBJtCDwgXRpBPnDKyzvtEyFPGkukY5dis7Cf",
  "key2": "2NzG8iZSoPJNjSN4YGJNGAaNtP1gFKb7VK3Ebt7GdQTaNXqRv4rqepSCkK5Z9vYivFFdDcD3NYZx1QjKQw5TKsde",
  "key3": "5jZSF8vGq9bzNQsAYftLh7K9esQZ8fE672fejFRe4mmeEuofF17H5LtgR2BobvgfE1kYBpnHznvp8qhUmZFxBbWz",
  "key4": "Ag4tEadNMPqTfDh5WpwZp1vRh2ttmByfEg9i447Jr5ariNb7mmSUD6tFs9NrYbi58ktUWJHLrwZ3T9AWRasYtK1",
  "key5": "8z4UKcARZCfaytapKgvcNMQvjpYH6JyTo83ELSXbRUHLqSss5w5DFjkxmtYSWAEXEwnckGsFT2XSkFDQN4V6aem",
  "key6": "3jmwkypSknvpgN8K8KDhx3XDWV3WEMQFfXSohMFSBNwxzcC45bcEAsDKFn8eKXgkEJxdMEZccVwZ2SDJRVBSojXn",
  "key7": "4uEWt1b9GBuBqNbFT6hL7gAod1KLqdBqdSnzFTF3v3LEavjsxNCJn3gnJEEoBrYGcwqnbEsxvJiv3gdLu7UPPGes",
  "key8": "3yrkvyxy1mRVYJzSPyCr7X1Jk1yPq7vYJVWCf56bNhGRtUNXdSSmm8o7iFrADc37HYquR3yGQRdbfjqok5RbxPqs",
  "key9": "4X1qNMU41gUyaRus22iDexJq3pmtVa2R7AfR7A1M9R7oa5Qo2c8LszbxHe5t4NirwCwuAvvHKtZ62spY9eDRgqcc",
  "key10": "2id8kJjkRVm7n6az58P3MDqz4Uaaw6jPnDR5sg59bZxHioRX3U9BgLYXzSzqfahMQQPxDxfoHusYQ8TjmLj4iqyZ",
  "key11": "5PYUjLG5vbBq3RYP49yKWVojVW8rknguGvnyYdVATpNGm9vazyA2hqYhVTSMLqaDNYgGUhBuhbmrsXQJNgY8KmRR",
  "key12": "34j7g5gx1MRCGZFdxUhFJn7eGuGLvjkNYdTta6TPi4fEk9kXkJZ2UQRY8nN78ZhoR4ND2vTobVtj23LTgU6Ug5X9",
  "key13": "39iB2gsKzkBSK46dLdh8iQAALWTuRx6yoB7YzKJKxRqBK9sz6pgMwRZJxF3zUSeme5if8FQqVJTdtdFuJnWhKQva",
  "key14": "KCXGKShimLAkahTAXtJSoTNc1Un7NckUvXio6HFEBPY37SrqtgGZK6ts6wAimPDWdAx7G8N8MmEQ7N4JU2z3xib",
  "key15": "2Xi81LQCDosgu7XfjFYUzpUEbU4vefmgPqmMzKJBRej1uiWUFhnwW4T3ARxHUbCdBkhyvtc1viKDTNxqaowuQ6Jo",
  "key16": "2hP7Cg9yssMxuyCo1Q4amf1j35D6CJye9ERo3FqWjyCsBDt9KbpC9dXa5bU6g7QvqeyntDGWLKeHTQHQFxf6ke54",
  "key17": "ydQTdF8YgqsTZikQUiFXEPXpQGXUvbgSu4MVyJ4qhmNybztaGCbsBhKyKEYtotartcwZafDT6seDWktwUt7mcAi",
  "key18": "3jBLi5TWdVRS57gFrUBxk6kU8gQxQMWMeUAo5W6sTG2ewqJR6F9pVrdo17BT2SLGAS3EPMdHs7e7tLF1CVVkSdCT",
  "key19": "25oEmHwcVetYGWS72tZYUeUZgqYbMSE25HV4iBvngSr7JQT2f1CDLwPWkfv8fomGyb8QRJG3wfLrCxrnB7wa6jxW",
  "key20": "54Cu6nCso1KwGMeURbqU1WaVUM53JRExF8WLbCGYN7birhwiU48ghDKkb62LimKGaZksXQBGnL4zbriQYot5gFVU",
  "key21": "HMfCPVL6U9TRsYQxv52dRxPiHzQeB5aivii5qQb4dx2aHutAQWCbZ1XzTCo5nyceB9rpKgpZMBwP2DVZegmGvor",
  "key22": "2geH9tz4LEjHs29kkRQYtVaWQpFreKHnfGW4uhtc3kob9sZPmfRa1h85a3qifBd7iHPViryhdxmZsbSqrjDZay2u",
  "key23": "47w2YQJhpenik6VFvjaSZQvcnrrXBUyf2zfPNusdjyFA2BzfNCox5yinziR62ZWnWDfzofobMR13W8k8SsCS1WQd",
  "key24": "38sYppXr8Tzd1S3KfXskNExeTKN88QL9PKWaacCbHtNTbbgz2XBHkQahEzj544yoiyYh2AyAKGb2v8PVRYVNQCF8",
  "key25": "HvBRc8wqBpjLx9GSM64EjjN8GYMqUteWYgc6Vp8HgjXorut48R8RkRB1W9PLfY2LPC1WtUZB7WCNsuuY2P6Rvc9",
  "key26": "VdiqNvbpmr6SZH9Xvqx9xSQ9tJbb8yFtqdspULk8YQc6MtfwC6nb6pK4w5ACyW94oXLd7hU2SSHpJe2tSBVcFGh",
  "key27": "3fGHzp6cMhT9FWUHWVPCZnefhyBUpw8iaezr4kc9oRKUQK7BC7eaAwMT3N7nDMw37vL1ZSmVUVvAmWJBQzNCj1yg",
  "key28": "26L9vqwY4392yBhpvHh8PXezrVKrDMtjT9PDojhk2vAxc8mZY3VcP8LrksRRAgk8XyPL7GGzpjMKL5XdwiwD7ihL",
  "key29": "g7qQ2rbHjptaoSa6WC5pH1aXQsFmVo3YELn7m4n3bLHboWA4Cai8SGZ8Pajk8yeso7qDsPcuzPLqQwrGTL1oEnr",
  "key30": "4ehrndSM4ZwGiaHcsUC6QthHAT1ZezJu2jrrFb48UX5FueTiKatfEt51yeypuYrct82783A1GrdQ3qHgWjM7VTSo",
  "key31": "5kNjavFQaFjTgCP1Ns3KqUexhX3gH4ctru1Kmn6BkRL4RHyd4zkZGpKhin2147v17RniCyW8QkLKw8DbTDmAHSCd",
  "key32": "t9bWRQcCWT2NRdfeUDDneeJZvmFQUNmwuK4CnzVjr2CLH8khG8DnJBdYSMwUduLyPXUQhvyK3WGm47XSyBttMjj",
  "key33": "3zEjUyB3nLuBbKwLkH2jrj6RTZ3M1Xd9s3XMdgG6ugSaYcGYTF6sfaYFEUa9s8z4vEG389nrpUvVZ5hAbXk8uqki",
  "key34": "5qNM4A5shoUFiuTY7CmLE1T9fEPuUr5d94eqrmJh6wT8JgGhZARfFKiQSRoRUamQgMvjg1Qtv6W8VcAR6niWw1H5",
  "key35": "3XVdcj8QgMfpL8NshcuyzQWb15PtTfgGaJNzSPA92spQcHqByqLKdN7JbAWXJdf5HEjwk6sPRMwzAYAgycWY4Fng",
  "key36": "5t1RLaYrjCbk85mzDFqdoshSkGXrNPwvY3phFmDinp9K3kNjH59ZMMDa1ev5xQhHRMmWLxxfVN9Q2Cyb9Pkm9s19",
  "key37": "3dWsfvVWvDzqwAxVXsHVo4jEoKSs4K3wpuk4LfCsayfcq1jSupNwDX86xPC8b3QdhfuJs1sT4Swp6DXX1QX1258R",
  "key38": "3SpSNxTcoHJaja7v8KgAU7taucEimAqmtnkVrjJ5ctMBqdAwNc5xeCcetwb3DPuStAuoSi2fkDaH8VULy3r1d8Jx",
  "key39": "3HNWSuFxsRUfqmWbFgxeRhMGgE2zg4n5WPbphQ9X8QYHRXeZtRFgW9QvH8cBkCKqdmxTMLcuTuPV9uNzHo3rt9uB",
  "key40": "5sRS5rRprQRHhTjPKfTzpzAsjUY9WzMXc57zkohSoPoLxshek3EALjKouHG8EdRvcxC2yQDTBvLPRvKbX2SzgadZ",
  "key41": "ntY9ZKd1rSVXTu9exf3yerhKgScXsWrRnWRkyg534VjvzpVSkdxwAt9KbhiWivvw5WkdgtxejT4krB8pU7W4f9i",
  "key42": "4enirQ9DvsoaCBCSrXgq3CP697Cqxs2V1QiDxoT2kioYUMtvu8h386ycufWQ2LMF2hYnD5MP9Y7KWgW6ttTPeYTi",
  "key43": "2BtBiQvt17TUuPUB7cPWgr9to3HJWRebPBVQ9bLz8wRr5TiMbj1S48X6t95QGxfTQi8f7HKEoKJfEpfhGPbKzXAm",
  "key44": "3nQJ3oWyUHL12WHF2gwRAeAeKhEHCVmWF3nDxWeLF9vxMtVpRydr9mMxah78czp6wWaCHZAxutfPqH5Ddf25SAUL",
  "key45": "2WQYDK2Wspx4Jy3ftGqkUKKuRi5eXW8s8tsmB4cK5jwvcBDegbZePmFxvC8BDhxjZRU62GNFT6jekD7KxmZXd7ak",
  "key46": "5zNrrM7VvP2t1vHs4bozZuaYeNEHoEaVqVXugFY4BMJvbm7FNhWiXcpy89Vx48R7ENSmmz8E8KuTUBRGwFNdVtWp",
  "key47": "3wRCNbi6UvZa44Xk8YycGUdgywYgBshRaJ5ELebuDtr9ips7LbhQouPEyGZQN3WQqNhGM1yHUABYVYwzBp1egtwb"
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
