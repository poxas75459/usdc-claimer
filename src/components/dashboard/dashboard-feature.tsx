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
    "4QPftWSY3ZGk8zTAaDW3Xsyjg5XLeh9LJhg6o4J3dVAVPygGEkSwBJkj4ewrGBjF6uHpgbpsS7bbvCPp4ctpC3NH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x9GnnDWGumnDYPK3UzramCtwwEbtBgsq2d4tTuCm7A5B94bzjyVZ2GbLKr68y2uZU596iDdikbnkNWcguwLtwL7",
  "key1": "3ezUp542w2ktVFgxgLsnEeVDNmrMr6gEpmb9aWr7H7HYvMe7CaDvyApPfXGhSGjfb9TNtiecFNdQV7SPjDv9Be8V",
  "key2": "2Ym7jvh4WowRavR5QJFXdjWeo6tmcroPJu5zSpqFicjrH6UzcAPEWjmx3FE548ZVPDiX5KziPUybndZYN3gFaYPe",
  "key3": "4UhcFtJD75dy8FiMxeoFPsJBkCYA37nfNZVcLBr9CGH7gcNbghubkVNmyqKMNjD4iAbaTopXmcKVTpeAVLQX1cci",
  "key4": "4a2omE4eoTT5YLmb1awf7uABU2ebx2CG6Zc1kqmZ6Xq2SxAqCQNrF7XdcAVwbhM98ngFdnyBedK4jrg1d57QiGij",
  "key5": "46k6cJWzvNKLif8PRxgSgDE7J1DqkEEqMjSEJLffscC4thNcEKXimrgdTdkt8VNrCiKgcL7AP489hhF7Z1TX9FLZ",
  "key6": "3ETZ8KzNhFy1AtWPQUgoVKsbVQ37Jeok6BQ4fd8MEYhyLYaFuZhX72dhPJSsktH7PYp3BCcXVjhsmwwiFEnTGomY",
  "key7": "2t59AMnufpC28hpgMmg4ignAjidPXBovGmbHATEV4pDwLyFP8RfK46fzCVAkNVWd9bkLPYfw49BUCf6gVFh4QTh8",
  "key8": "UhzGnGDVv9aYZjXrauLCoajF8imz7cfUcnN83UrXhgktNJFAD9ZT3KF6rXj8EmjhuuRUm3oaX2Wv9NRPruSnhx7",
  "key9": "5kJ3fjtY9Ce3hfc6X1TqxQaubQjps42A3HeBxdkUZchMxGwSJRR2RV3jz7TnJR9Jpr6PRSMDXdYGBB7m5waEnQVn",
  "key10": "3RkGY7dcTSeuXN29Pzocv8S4wgk83kYnjG7CZqCMFUT9buX7SqUYTFGDnczDDBEe7yco2t3rDspbYTxPST4kDkmS",
  "key11": "4z2taSmHJhuUNPWJMC9bsgXzL9NrV7ugSKT6Yq2woL7GjDACRH34tPjYeqy5AgpfFjFZj6rMJecaRPifWyxXv5QS",
  "key12": "59XKpuekE9LrrV7ce9oWtydUEWy8BNDViE8dPDzay6AxDuKtRzTXAtXxnmcDFH9KZTAyMmfZYaoRPjiRvZK3pAG8",
  "key13": "5YoEMZ4V6QeQV6PpjhzSMYFqSJmMshXuLagECoxWGZRJhf4L8X96X6qR822vwdcMT6xfKZPNRPTfyfd9kFGBb4q2",
  "key14": "65DEzjPPtszJMjVeFwpLPCgBZ3cqxjuMXUPQdQMaPWB9Rnar4Dt4Zeoo8p9JngvDmFTwwYRAgARkeknB25odCPJR",
  "key15": "34otZoXqWh1Jj3b7ezzgbg4Kf9KrHJ4BfkzZT8c2DZS7jjEjMJxcG6F8bYbf1Fb34DE6fy8hcirCtS1MRY3xu7Gc",
  "key16": "2Kcns42sD5GrSYUW1Rr24a3mxwKbQzV6sm2cfYJmStdHbdGYrjc87CNmk2p3Y5kMHgMRWLi8qQba1Nw18FW14pci",
  "key17": "5tyktTuhEfNg8Tb513KCjh6fb8ZWAoXvhYYiXzLYpebXRpvH5jUGwPNYUFMHrziu2GVXvhpLj7uAEzs7H6wCnLJK",
  "key18": "4StAy84fHeYSJAPwYa98asUrPqiLkwQZCzyvhtfUabmJcJCUiXa4h8KPZKBnCV432ophmtrNzshokPsnWaD7QS3p",
  "key19": "24n9AMK33u1UbfEDRdJruA7oF9F1TDQbZBdM8TqgVJW8SqA68JqLuzzLmkZnWMeyiSPaNjKoHL6h3ZrFAHAMQtLU",
  "key20": "3ar1vW2bBzFkF88xhpWNXNozcMWBytMo7jP8mz2amyWjusBoW53MxwjLgMu3fy3a8u3cwZgVWj9rZTJscQXgPWuo",
  "key21": "61aXg2T5VEjuDXAoXQtnmAEogmfwjhVgwRnsFSJMthFVjege1v5DjQm35jvMWricuLYEpbYvXiwpdvBSf9kXvYpR",
  "key22": "4Qw34Z9keQcQEu6szAwVLv9CoJuiu6nLunh3DQJn8r8xcs8g1GjPQrZXU9hUUrRQnvumrT1yjqbBzDrr8wNy9ZSA",
  "key23": "5sJBx2Lc1psgCYPobL4AaBm68wcHVpfW1qJ761W85miysm26gKAUnGvnX2W5a1ZhjaaF7NRZUBBHST9J4smbBZu5",
  "key24": "5YBFdaxMvewt2wTaa2M5KADDXxoJUCFCjJv1sPKTNBfsFe4GSkWe2eX8MtLKYotJnkRRPCVeUyup1QE7A9NLKp2e",
  "key25": "4NxkxPjqy87v1vMeoJE8RkWWLsJd6nibLxHcU1BswfP5dt3Q8EytWJsZkctUyz2tDHdCUyQM6MPPE8XLfzAy8gwZ",
  "key26": "3eqKPhCAMELfZgxVFAARjdjAuxKYmaweA9TaggZPRaLPDYwPmkPptPqVkRgfSJwpieskYMLqd5vwMBTiiRcb6SsF",
  "key27": "272Qgq4wo16kPaLyYTmUS63Dpun5xAozxYNggW1MJF8f9AKiwpe2WBoRW5qTUK6rBFciDFZBjF6G9LAE3zQPeS9c",
  "key28": "yMxz246bDMXgXVYpPXbFRsXADfTx28n1y8BKJiuCMJdNb961jEJZ9qEpvsDG3WTFU3dPKcEg3R3sdUJSHTUKA4g",
  "key29": "64Jq2jADjE4TtJYZy7sTUhcrXL9eyd42jTfNGHtUyU1pbZAcapMWudtrP1d5BaZ4e5aripeN3G61PvwWbVFHhmCF",
  "key30": "4QcbDteNrvLE64aGjUkZ8NT12a6jD46fob2W23Tv1JeN2TrwPT5dpVMZPFSZVuqwc9VLYffcpewbuyxfVEq5dTXp",
  "key31": "3eZH8Fz3qVDtNrf7gQcMX342j5L2v8jEZzMkxknhCr4Va1LkAzwH6sae3BDwHM9vmg6XKMjL6WgLvXPGaqeJTDkJ",
  "key32": "5Xqhj8Myafxo5wyMMmRpfznVLRUE4BXUpWHGtvBTWrK8n9JbdEGpqyexsbbFHQVWBqcHMtoUgbQALabkoxZ76mKi",
  "key33": "5ZecpZUVkLSYWHJKGzhSLM9TNTKqmxZSNd2SZmwAMXz4xnUvQP4FGWnirKqbQJ2BwyFMd8WGBXJWtfV3tz4qz5n4",
  "key34": "xGcqGVH82BzzJ52t7Xh4a4CGeU7aRnpL9w8xZRkan9EMDJWf3G3E3GkEvFHFjQVdz9BhaCeSLYkJzk4zEKnn2tJ",
  "key35": "3yoxTFp2NKCAcFmAp2KUsi7KjFdQ4QgmYRUBWUfcEsQ7b63dLCk58p5HrD15sdjiUqfRyYRXsR7poyLbNuQPnUyR",
  "key36": "5uRnossQFZ69MGUtAkFvDoxaTmCfuWVsJuQBcqUNmBckzrqcY7B5nqe3KyjyeGbZsxjU6oNRk16zfBAkBFGZWkyQ",
  "key37": "4LePKbeYWXK8ztTtZch4ea7HKHdcUv821WcU8TBFnhGfFLD5tUT8JAUG7xUnKL9DQ8z8u4FVGz1WWLueMWRPK3Ad",
  "key38": "251QtQFKEy1H9LQfLmATVve8zjouESGWGovMLResW7GZxd1YeG5kNRQSo9ec9JTNe4NuUFcja36C6zJycfqMBxVQ",
  "key39": "2sRJktweBRAtShrHkZAMCavs4NP7hDMgn5Ttn9Vgq9QXaGnbNPN78SXu6T15MNj5JFkKtF74wMM8qBrnEB4UaFAP",
  "key40": "2x7ZuPFoYqcv7Sq8Yqhxb6BhvGYfu4F6mdHu5cU4gTJFmDdDbytzJyx9jEz2f4Lbf9EcF6FLbgaxpYCVvj7FQvJ7",
  "key41": "4tbdXymz8w8aJhWBcGKaJxCjudvurNdkxPcCoCvqrpsaXQYdof9KdDBFpQ5VVAuxUvNr8EbqUEcAWpvaGsszMceL",
  "key42": "3bxwDn4SPDpjQazumFrM3JQ5RQhMC1C1cBjZLa6foZ9KJnXuJWoYjfMCKVuTJB4goCHBPuibT6uxiWc73FXUs2Gm",
  "key43": "c8PPtJ1a5vHZrck4pCvngXP3GHnNFbk4YnHV4rqGLWkJSuwohQqNNA7noT92ZqpngALJi756sbtCJo4G6eMP4My",
  "key44": "2tyr5ek8LYqGfErhDQmrAxjYgidNdrdPH5zHZ8wkZKt14yeTZn66ZL1aLNRsTCUXEkWdSwSff1B5qaWZhWSvueYR",
  "key45": "5f2FQZDX2tcX5mFmSUvYFSQ7ELqJ1akKosFxuZFoq3BspiWnrfiTCwJbwXqdR9V4HVbNC3zMm5XoERK6BGsZcgRQ"
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
