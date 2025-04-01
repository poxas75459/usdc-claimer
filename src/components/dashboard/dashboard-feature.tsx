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
    "4UUJZiNhxjhVLJgoXRSEchhg1LX9ME19GcRsiMGtsHEgzkQiUHS7Jxr1PeemcNQUWisEMd5j8rWXrVfGRhsUXmuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zNvW6HA2ifv2uKxexiVEtff81gbAHXpiaMGDdivg2eS8eqKAkFa9tLfoDGJ9Uav2Bxnzievychxj4YhMjuJGMKX",
  "key1": "3P3fWGYzAhd9Eqtpew7oxG3EGdtXrNNC2atJLW6DJvc1VW2BTVLM3X1Duez4Mi7VTkBDwP8tF24VAzUFR8W6hH5k",
  "key2": "KYhPXxPHTHSma3Th4iVxf8kk1zcpiTjhy6EncBFkdja7cVP15cNQFTUeaym713mcgyRfXMVTQqLL3hxQtdZ1DU4",
  "key3": "2zjw2B1EmCLyrHw2NFu8cpkhtfHQaixsxg6kYfhTF7JWRMPzxZhLVdGxcWbHVAGXpadHCCZLTNv4CYV3VgtSuQ5j",
  "key4": "5uJsjCr4J6Qm6VgFXsB1a8ZoyroeQ1GWt59kiZiP3WxTqVUutvSgMtPk9RmrkdQdM8kFWcdpVd7rYMW5Zxbws69n",
  "key5": "5wZhdZ8jgSENjYY8KqLpqyLr1RF4zyBfMLPWbsN3fWShWvhVuZZUinbzuaewXe1Rvpd1H1ejJTGi8e9R84JZYQaj",
  "key6": "47JB5jddBifCucuBWZ5mekr1mwufX83QitCUnTmREXiDepB8pmmy7xbA8QRqVYQxbRybzG4Xbg7HcFs7AFfYNH5t",
  "key7": "9a6vcYVx4AUS9PF8Ps1nMjxixL8Hp9qSHVhkuji9ereQrr6sRKnfMCZ7ryrKqBL11X7S4wULfbFkE1KxtAzbhMY",
  "key8": "MLVELQ9CnJhVQZMcbTtpHafqxy9ppDQuRtBKQH17m4beS46FyeXWtViE45NQC857ZQ8dYViawysRBRgtVqaprHf",
  "key9": "rpEQaeftK3TcxSEwLBSduUue27WfkWquenv4eEhgfrctZH7GuZXqoF9wBuJ93n2tMWyAFwZ2csh9dAZrxsdZxor",
  "key10": "3P9wJ8eSbdw5ysqQpCnLmwi8efW6xjjgbZhLLCMVJSuoVYLbhpU5bYQz9gUEj3GixgzmpihVJVEMsokXKzL2Yej6",
  "key11": "2iDeZWCBMj8CYKGug5A2dFsQ3PkQGpn8TABWfzJjG5XyRu5zp4s17vMHX5e7jCHWGmn73pyAjyNQWUW4FcVYiiJ2",
  "key12": "2c7bPvZkeamvyt76MAtnudeguHFBsjktYPCTvwZLFotamWvcF1NXeQQf9xFRbayTESd22S4eemtapeYDtxqz9GDR",
  "key13": "5docXDvEZtVBBgmhZ1qP1Pn5QpjG7FEVg2pumckTRYEmwXRCyJhWHUjEK4z55ojJVD7eocXMzT4Kct5miGBEZYi3",
  "key14": "4fYBi5LEZUBZbmf38YBvhAosDAAzAdVf6eoqd4usDfMixYzqwnBBpsksgzwBw452C5uNA3XSdjRUJReKpeHqG3d7",
  "key15": "SPXouodWBsSdgL5SZ79UrbXqTLwkPERR4HceZL3z8Es2tdzAePTX2XwkCfgKTL4cn1Nuc4FVAdmtRC8CeNPRGb5",
  "key16": "5heW1iCcCPmv8xP8pokZ6MDXZvoJcukwXp13iXr7bEcYzUxPsswR29xKyHEdivvxx5WYE6Pge863XVrLGCXEoZvX",
  "key17": "gqQGkeCX959rdZWJQoXTB1HPqSiVuR6LqZbEzGu3MkGcRUc6AWaRQCdsVJXQT51ECprHLUxcSMeJMCbgg4WYSyR",
  "key18": "5YE4vaa8SaDvFmXahnDuYeiAkgu6u9AiDFyc2yn6vM7rCvwg8S6PPWTLCXRvUsU62TiXkb6b351NLNHNtmxNxsLL",
  "key19": "3mqa1VAx4VNBq8gLPZKLQY56ksJpLVydtwgsvBT44cM7rRwx8ttnDt6HEHwG6kTVhstR6ouxu28c6WLnWHS7e7kL",
  "key20": "ukm2ZtyhiYDTjk2ALyYjLHAYYZeo4NT2YSizA4Mw3L5gd2opx8Cd6wdxsJArPn52jXiZB1nVrTTRnGgfAKY9TxT",
  "key21": "4a5jvXUexUC2Zu71H8hMZFHzyZ491S4KWghkXnWbY6UWRZwWpseW5uWoiKBq5rDwp7rV6hagz5ZkS4Dr5Ym8EmM5",
  "key22": "5c2rzTdqbeG7E2yt7zrnv8qB8AicxNBoYAHisNxiVfpeFLHWWdkr1eYmWGsdUJwST7F6235KThhQUG5PRWNiHMPM",
  "key23": "5W21m1nTET9HThKSVC3pw2VbSVHqBL576XhJqWJL4nT3FvQ7y4NBFpXe2DJA4J8i5cNv3DKUk3L7GPfBq8odBgTZ",
  "key24": "31JtnC5qA86D3PYCQ6d56smTLsLCimKUPb2CjPh8MQUMgem1Mvd77MvcGSLhLdFu5WV7iZDcFNDuGqq4rcmsFKCH",
  "key25": "31rTJUBCHjGkNTXpYPsSE6YFeoM9k9uLYuhBNhnLojedvUz71rJbTumqby2WJoxJQzuhKpPfYsPCkXeMUEDfNKKS",
  "key26": "2AuSDtLCWroZk6LVgtaZ7EJvs9c1GZeqn2xF9qixt8PJGJc7v6pGpG9kum6qruzjqFzSvFijGzUUyPtSahfLcXcH",
  "key27": "3FE3RqSAembRBDQLUuAKUhByqNSBj1oe6GPAHzyYnTBMHyGfzXa1hM7JDUfYu8Tvz46ERJNwwfrbUY2UcL16qnz4",
  "key28": "3i8ae4t5Z7bTEpa2VXz8jYkeF27UXjZWgZPEks98VfeX4KgSMkKeVnB487Jc5iVon5hKDX9SjmAyVLhGrPo85MTM",
  "key29": "4Vw1X4qUzuoAckmeAaRzeda2ba1Y8RbTZZhs1MutTH3yf4vj4jXbH264EXjPpCZqq3b29P8iZ7t9EAiKSKTCcpLK",
  "key30": "e3jrC9KgSL4BaPNSBY5ukRMXngZgjf4KjDW1hbTEMugQ2CoAd8gu4BdYrN97pLvbpKcrwu43b5jZReZXGopQWLP",
  "key31": "RT7USyjhcM7xqVULZ5LXnYkkq7T1unR412wg8P81T6jF6LDxs8GYL28dmaEoJZc1CAmZJMrDdEBRggJxc6ZNx2B",
  "key32": "4LVTKVSzxp98DnSscrK2nfBr3ZaJWF1VwRx9znv6kJdR4BM4z6YyYeiWYcBaEi6RfMQbgEJmiAYp2ixvi4Xb9qts",
  "key33": "5HFrwHbJcZWmE8X8BgKWWwmQKLEma6meBMZishHht1VaEMvgP1JJeFuEuhPnouxo4d2LiQSBE17XgQgpeekibygG",
  "key34": "ouJCPaRgu895Ez6AuPiATr8ix8bsezC4myF8yKEwSodjsWAFMuofWHJRDd1EFCcuDHKUXWJAm49mt3EnVkgnSeC",
  "key35": "XT4U6cxMqThQbZvWjnW8gtGCHyAAsDqUgNMJcPtLn5BVLTxFLhZutyMkaH2rq7WpWMiqsE6czKc1EaXyTewKvNr",
  "key36": "3yMueKzodgSKoeGaSkazgdpsNgnVhAtFx7DeETgqHu2y1Bmst4HRSPv3nz5gBoZkXGqf77LQD5knyqbZrsKa2QYX",
  "key37": "YEnB2L8hMaHaRC7ERyfcSFZ4sTcsufzUDk7FBdhygtd1Cyx3gzVMpBoT1xzbYNd7eKYfKKiv53DYuaTj5BZZipZ",
  "key38": "57NQayjqcn2GWNCwt8WUF7cvvQtZDftgC3gcTan7RK6vGmCjHTSD4N6CZQ3MZsV3pQjJQFKGBhzpLcxEckBE9BsZ",
  "key39": "3bqti87KbegejrZXp8fhAMJ85RpJ7DMvd62cP3wmF43rZyU61nz1WuVf66wXwbWnXrnw1WjkkiHRFvcZsgyjNpvY",
  "key40": "5NN6h4Q7uj4FbnPyhMbR7eC5ftTVwufjjajXTTJzpfarWp14Y6Zhxh3itbDBLMJr34YMkCxpJmcXPtFXkTtmRNB1",
  "key41": "46vqCdppxnFF6vYP69waPbhAGvBB8vKYcURQJf44ea6KMFbKwn4uCg2kWD4H2L6jrCpruunreCcrTjk7SoCwggoU",
  "key42": "3kappV3ow9qMBsmiDrqKFUQcCFztjGvcYUXt5FVjcqSV4HrHfLGgiJcYTCxRtnzge1RL1LYYLPHfnT5ksEHSv5pU",
  "key43": "5efcz1RRJwauHLnya4Qv58caJeL6u6H7FzHLxn1VjJGy5zwP63jmA5yb8d2yfFduwcDrrG4owryu8wAJV8twoJdH"
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
