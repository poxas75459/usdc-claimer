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
    "3AGN4JTeYoKCK7u8KdrK1xzJgMLmiSo7gXNSPSh5ba7ihRiuMgnshB7xidSXXUX5yHy86oMbPwLwPYjLYrAnuHQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "heg59zgxWiBuuZcxZzqPTLvKJukPHtRRhgQd35YChA4rP9kT9TYeVXQHDu5nSJmtgrLMhmtdGCmtR1tobRdbdLh",
  "key1": "WCMu1KWDbE4twqGawLV9guXzUBvhJUe1Eatw1orJLLzMFkTH7x8G67GShFchgbCyW8qo2shRGF9Nm4Q4ExktZi5",
  "key2": "4cu8XZ2tyL67b3qV5QQHRcuaixCscjb2tT19ftqwSWaBfxLgu1eN4PsfFHbvqV8bAQSmqjQPATzxdBbL4xHrTf9G",
  "key3": "TvLkXuzM4UuSfreccgT221HFyaZfZjhAeTQLQZrBRfeedwGDSq4tzGUqriYc4os4xFjfbN1BvmYFT82KhMjLXWs",
  "key4": "3tZhKeU7TXAgxaZQfQsX9h4UkBYu75qoyFrZgcQyB3RNYmEsubwyd1NH5NjPir4pHJStuCMEkwEYFhBkDy8ipvnu",
  "key5": "242sSJERGaQxBAg86D7Zze3MyT4tQEsG9rtVmtsS9Kxfg8Q9t7fbVNi9g28rEFrzYio9B7xACyYH33wBjHjyM8WG",
  "key6": "5A2qvVU7437LQX6vGxm238e3Mi4FjAAY9GpgoJW81SzBDVjooZNBxA5cLXNj2EA8VghvkK2RQb8Vs41hJF2GDttV",
  "key7": "3f5kRS2kAQpXAvGAXLYza5q7pmcM5Kk97JJMt1CVvkWNRhDAZNcSuCVpWh97okvQspFYQZaS4AC2UDMf9uqw4JN4",
  "key8": "mHM7LMzhdfYqKjREiMmXSVpfb5KnyJdmpiLiNk6L1Fbj2z6vNMuQ9eXwJhQqhMNSwoLHGHsM72Z3TA2iSamacUx",
  "key9": "24ugvC9bHBYPQAwDHZpZQCGUuGC2RPyDHt2vJndQH6yF2pXBBdyEf8QHdR8NycZnWUJpVkRdmx8cMfSQajYYeKYu",
  "key10": "3TX9zkb6yvUJRpNVMF4RqFjcKC2Yh8DUSjoCbU9BBLvdnrjRU93s6ZrVw638nT21WbtqACstN3eNdkn19iChJSnS",
  "key11": "3SLgwPddi5FvbdzhZNPqZ852jDKGhFdqvCbsDLGqGxwkTZDdDE76yvD2WqhUA1mhCPSgxrV95M6msXdFJN3sJXcQ",
  "key12": "5Qw5xVm1HbCJAmkTHJAqyrcv5ENSJXm73J3TSmrVVQjGRia9YFsTTEmRaoq5gzKWUVZae9vFiKWRH1qs5j9L3ZtY",
  "key13": "127L6ViVDZo9aJZmWxNoL6NzzNH5SL8eos9uU3ofMvn9svDzK1MgXogEb5zZhnVdwYNimCLJGqBWGRwzRTkV6s7h",
  "key14": "Ub1wFwUCreXbgqnXzdDSuCa1FNkEzuHNLnBEJnd5MV1gKwHpzrdtZtwigBkvA6FJ6gAq1DN9971k8ronCALBvKX",
  "key15": "5YfFLBUdDuYWAHb4UD2wiuCjnUA3kKrrsX63XnNVLXTFvoAaG5aWBFQFiHyr6CzFkSDAsh7RgExevVECTy9ccMjs",
  "key16": "xeBau9SyThFeuuqQYYJ5kYEZ7mbRVaVVgx2hcmR9t6qQGBX6G2UnxkqzPet6F6GvceTh2BEzwyQtfUhDfaPvVwh",
  "key17": "5ioGG8SLYbvfnaMzBywVHstZS4rr5FojJLBmoy4Hq1HgAXMpjsknawHowKKb8RHcU2S3gu1c2PqJpikB5URmNKT2",
  "key18": "3fdYpg44bEECuShUhtcNzazxw9Q1K4Tx7q7PPQvBhHdReWKMecxmfMNi4SQyctqrui3SKLCnio3T4QTNKNSifkJP",
  "key19": "4q2Jzx9aXjHDMAUguvx88j9weZ8t8TvkuAj9awHLdR4dSQyEFdkURTgEtV9kyqAi2vxvfJqH4FUxQTqNeuDKQner",
  "key20": "tE3mzUooDQuqBZTcH48v1EDnQnBZhLPgfzWBiH7q9SKqCe2DPBPM5Sei67GQ4aSf6KiiW3nP2ckhqyF1roPrwpu",
  "key21": "286wsa2X3gRfMhybTTySEfR84kEnFkpGr5CLqTJDdudpxkP9w6gp6SGD2ZsuYRcD9eoAG3hnWsHnUGsef4LbmANk",
  "key22": "443EY4L4pRvx5VmsTphuJtEAXFLnmdAhkckH7HTqFqrcGUzLjp6JFrDpjjaeMda5CvnUdvaYbrFEE9kf9bZYndjo",
  "key23": "ecuaMDEEXS9WpsKsTweDvCLku9s2oeRPPrJ8G3iZ7CEwPPAGwgkzg3biTbtSLiqRbZjPbjE2WcTy6wNq4VQRFGi",
  "key24": "3TR1PeLBHZHgFcEgpgYRwHv8rAt5r2ubH9P7SW42jaEQbQxKmk2EobmrG4A39uKdwzvUmUFZT63HZkV7Z78qxUea",
  "key25": "5R6HBQe8ePd3GNsjv3k7tqyczgFshnhdC8uwKMpxh93KkqjwW3zxWfYF1HGpUFvepG1M9VGw112ufyLXWegpi1k",
  "key26": "3UQd7R2QJLjJBmjSFK1oLpmwzVd8WTUqp8cYPbjTrFpK7ebAeVKPgyaDVPx7VPBJYt1WNJAu4fcN5ZZRJbWFquST",
  "key27": "3cy1HyvqrYYs1agKcnjVoi6xM3Ctmm16RESetUjvErVW12rRiTEcMDz6sL9i65Vv5LgSZtynJAhkMoA2Q7jKU6Br",
  "key28": "51GTf9cax19TVLRVYpWxX9z8D89QyhHcbRmXQpKG2WTsTY495Vg77XtV2okpsjFAvY3PpmmbSjqtgt8WMp9gMkx8",
  "key29": "443Ga9rcfhjKpfUjVkh3s7YLp57Qp1J6iV5XwAHXJxxuNGCTEfV2VsXUqW4Zi64okHPgCU78sb6Uzv5ry9xQpwYr",
  "key30": "5WQwKHUnDsh7U7Lv6wPpYNZZFPmL7ZKwVjvtGnSYjAXqhModZyo9nWXzSuSLVvAHTvULGMUoR6w4tG5aBE99GH6J",
  "key31": "61YCKpYTsUoDMDxPe22dP3JEDPGzDizUtS4waKK4QtJBtyDLSxpKFbG1WMYU4wi4AWbRwGuSTU4ivAuSc6pMeDEx",
  "key32": "3XS5UgBJxrERuKdiJoFVBBNKMtPoGGk37T7K6hERcpRrXvTPPZdo3ghEiPDigtwxGKtHPSWqPeacJguY5orz2g4W",
  "key33": "3uT7ZjMrrDNRENSrryiP6bHR2HtnbJFYfgNnMTRz8gFzAzMkqvegp5v6DMM3ArYAqEp6QyixFZLL3XA2VN97RHBE",
  "key34": "4j8DX46b3YQkgd7ZLgpZX7QbzthtTq5cnANiUuHg3rUNNknS2MWbdNN772GiWrZASsN58JwPTF77dre5NvUNDmyf",
  "key35": "DVSqGFDMCtrEboxNmQxafSd1wDqXAh8FXyaqg6AKcPjKorL17BHdqrKeQfQsuMQo9LFPYm3A2ERKsk39Pi6q41M",
  "key36": "4wmiBTWFg2GBmPpLe26QWxjuXfUv4UhtFcuiyRYgWj7HUpYFTb89mrgj3ak9M89P1FWXFZ2UmfjZD2yAfFNv4BqY",
  "key37": "3HvTR22ZQqspvhicC9C18pqp8xrdGiRnns3QHTW7WpXHUdLmFsTF4bk1c63igrjBVouZRM7fRFq1Ct63Vm4LiCkJ",
  "key38": "mDWY1pxyMZqSBCeacVcnGcwnVjCn3t1gMoZgiZzLtgb5zET3metHLMSuNhUHSAq9A7pvJPBtbWAfjH6kVTcgbRu",
  "key39": "3TiGjA7WgG6XybZJRKk9safb31tD6HbVdhSGK7TkH1sBiAbCgoyi7bkkR8RnwdfcMd7FsvKgGdJkkFCP8muu7Jb5",
  "key40": "3tsXnqnyPKFqd3maBq36tDDbPAaRCCKQ4ZYZSRQYA5icvfWyrQxJDSaViKcaWBQwnFKg1FVpvbUxqN592raLn3mP",
  "key41": "2eVgMbKU9WTybsx9kPw2nibBJuXg8KcZm8Zn3AUJvtJyhJLLbk177kDzoBJDHTM3hn7sskKtSocCDzBMY1ShQh3H",
  "key42": "436aAj3BcCjRyxtyjQop7cJPCWrQT8tuXUr3ET6GaiY7A196wQorzWJFfPRm26heirCAGFg8ydy9iwJZ5gc2U3N9",
  "key43": "2FMcavmiPiZsvN7zADofRQ8NGtgT3V15jV4gYTyGQGr7WXGPCUWZmxr63QQsMmT9RdXo6SViUNGUAScGxH4s2bpN",
  "key44": "NdoEZ6b6vL5RgjysKkbwJZAVoxT49HopF9L8dgN1iEjfXAjtnXPE8cQD4y4WKDQej8vsevFto7XZJKZ6uCcVsnN",
  "key45": "3FU2g4o5xfahC2Lr44mKibZzBoiMqeLTEA4m7NK4hHJj8snHXSWTJQ493TkT1xkF2eztnJyVqsxog4MqLpY8NnGg",
  "key46": "4G6QzzK2bckzcqvjyohzJR3p2NKUmNQo6q9HG6LitEDrehy6CiPczopswRuVWzMH814bxxdMp3969mnsWjsMknDv",
  "key47": "3Mw1fHxb6h4cR9jywLh6cjv33tAR9AohdP6eZQscvguFMAZ8cd6uVeppX3zJdfi9sfnJhqsLPf27tZMAhUswc9SH",
  "key48": "2gLzfcBXsdB6LW9HDXVWUeNcNboBiju2fsMnChsDNkmPhu1tvLJNcotuBUqMUj9ttbRfQkb4k8Ttja8BHxigHZTD"
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
