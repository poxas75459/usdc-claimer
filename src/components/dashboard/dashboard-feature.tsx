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
    "3aTA5eB1jyyh8dDTJY8mkwzvbrkccuUJJ2cgDPguhsbz6sWkM3ELJEHyNax2CACNpFcyxpbC9L2qCcVz34UbTMya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GVryTd2GmoEfXkBJDDYBSNJ2SG93hxbXedFPvxK9CRT8quBwt1zYnuSP25wbtVczhgCymaKSWCwNgAy5Jfdpycx",
  "key1": "BRVgrgSgnbKankNraiheV9AjphdZPxjmqhNT3X3eABk9rvTXv1wC4s1nGcVfq4NF8ZCY4guKmQiEX9TP7oELceb",
  "key2": "43t5jkLMin8syqYEaXrsZvvHom59KJrJxGu3GJ7Amm9ZsaRvTQJjTMryHtP6UyziejjhjwwqE8ma7tiCsfevW7vw",
  "key3": "5vJ72zdw4eQeGLq4gUgqmaNofLWP8MHnT9SXUEWwcGoyKJ6nKdSVtijXVX5PBUUPdRcY5wZWFkyV84sUvQcQzErD",
  "key4": "4FtBQGXc199kxxJxapadzpoLzaExG5L4Nh6AY1ZBELSPoVWH45wUdwacTUVYw5sdWCDiwJHJziW7DwhRVWiPtB7a",
  "key5": "54E3aJZKLwYa1SLzPyZX4cVsYoq64LWfPxnWPunrrgYjGnxzyGnXXmyrV7qzHEJsX9CbrXL8FKJPg8RRb9gNQnNf",
  "key6": "34YazaQ9A6uJkhuWdnb15zmaPuToQx2g86SRYsmufYBu8DidVmJRtKsv6Q4YLNSvzPvNdLXQiMCE6jdmV5yh8UGM",
  "key7": "3pgRDxLbimDnTDCL9ZJa6YMYHL5Kmy6CsoZTGckQPirb9jXrwZr4unkMJMHWPbc2sEFbvZqrVmtCudat8PzGVbCk",
  "key8": "5DLLA4hhnAgjHRMQLWVAQAtkAGGV2FbGsaH45JDbSCZSLeagFM5dwi94kxdjeGKQXfxVybbj7brBVQTs8Ypo66BH",
  "key9": "McvrkhKNFvjC9NH5nsNeDSFK7NEP9835cVUiq89TEPFtaeNzKbwjrCL5K5DGf9nay9XaFYA7V3mnFopyxnHYW4A",
  "key10": "2kNZqbqA9dsm4GcSQFcBY74bZ9QMPviGVhwKM95Ftna2jGFbZj7Cq87uDNFC3hFRryQXBHeCs4fer4HHBdiowKmS",
  "key11": "29K36UyhUWHsgq6cyZb6ux2ZSoTw3ZpkLdEA49wSAozEvrWFj7oYPKU6gZsDa5zJU1QxTiwphBsqFr1kzoANKgzK",
  "key12": "65yGf65teZMvaxrQ5hszEq8neGhzoeNvML3sypVAGwsTCCXpBTm1TBX7J54h4WcinGNnxeSvAbadbYipK9XQLxuz",
  "key13": "4GsnPpouFwizTEGu4jwtTiUKnSKwTaTQWZbs8Aw5JiaSqrahBgzuPBubbXSFqwFizcKcbkjqYHxSWY41dd5wwjcp",
  "key14": "4ki6Kk2RmUyjBuHUHbXp2YDpiV3Feyxjqvk9rw3rNjQRXUki6Pd5ZssN1ax4rwh6rXxL23AHneTe9sBsb9ygLWDu",
  "key15": "2QkBxAK2s4SrGRpf19LzrzD6G3EK3L3kgAJacv5Y9QeTFRtQixxbuCJxZDyUwnjs6c2RbaHSVMgNk5QSG9HaTcfL",
  "key16": "5uv4W9fMUScKK1odNod2gyupxnAiJosgEDmt1SpgZfguqobgGyKCC3QgeU8cDYQpuSy2e67hfnm2jmKxYF9Nb5ab",
  "key17": "rQ2qyS5VTFMPidAWQUNJpGYB46A7ucfyGDdSQrUr1q44X3R6t3hekaZY3WN5f5oybgt1f7fg4B7xhQFvTXYforj",
  "key18": "33APstU3TRNtxDgrk4hNbHHBHtmgG1pYoDh5F5dCdqF659rWxMvqgYjBM6QFpaeZD8BbWgwNF6yfvyVZw82dCJVM",
  "key19": "5zdLQHdE9JPsaUKhjzCcM9FyEqaAm5UHKVVtCmqQpRnCZ2rYHawVskzB6QCtuCEp1YqPKWPRewBkW4SDTVYB2KFm",
  "key20": "5m4Mtnwz13bhNJGqraZuUYBvSTtRnWfh35vpSpNwdA5zKtP2FtSmu6buHHu8aqAJq2CqhhJKEQkjLxnneQDLzvPb",
  "key21": "3SGD4TG8dVczzu26WBQTwb9Q3mqt3LAA6wwaRdfYQvJJ6f5aA82R3nyJfsh34b1kpJgzZkw2r9TTrtQ7PpfgAZGz",
  "key22": "NyPcK1SVmAsDxiDVxNw7G6n6U5mQEH3J6ZmqaK8hNm5mELw2d7UWpENybBpeHesYfi7gYSS53j1x7NECEopCSrR",
  "key23": "65AoE8qZLurK1RsoCQ1KWSfr6BhgQJZgTBDfVP2zS3YS4xfuzZsyWbt4pET1VFKVrU1q8Lmpe3qFTzjKziaDZQqn",
  "key24": "7FxFBG7J44rEunJqHdmLAV4JqUTwpRyApwyGrWUJnofBYmRc5X85v1U8kobUXNWzgcJXDBWjjiz3zJwRDMcAvWQ",
  "key25": "5qiteDfjQZFsYasUNs6ArnbQLqxZzm6fq66NJHvpMpTwjqbwpk47EyQZ1ssgozYVpkH7FkReNq5oDSYFRW8VtGTo",
  "key26": "HXxm1Baf4pcJonBHVaUHHK7dG2bM4DyqKjGEt7g5EHmgXqTaXerdi6LKgbc2WYGeCTTVYaNSsxdNJH93i325rK2",
  "key27": "3hPfuHPrxdxZHnnXkHJb7ZkHBDrJfZ596bJXcqfVo4vYTUZ85TUJH32KiUSU8jz8oCtZoPG5mT8N1xEihAsTBSxB",
  "key28": "MLUK7MGKgx49eXdwzsxX2JiVyvcgq9ejioTGYS9CFU7wRQUFhXo5YkfhafqitM2nv2DisRKGaCbeSgjC4Jmz4CW",
  "key29": "3KkeBQ9aAUuHYCNgxJxsoh5nWATYPekM8PqktoKdsfLQSeikmMJqmUpbriZenz3jYLSJrJjvNQA8b1Hc4ihfBsVo",
  "key30": "2oMH7paomDwDuSy3WCkqGP6USuE9PRNZV2vzUQCsZ8TzWv2trZiVMcgA8jSjVEvAsH2r1kaz2W2tmsBkRK4ZG91P",
  "key31": "4XA6PpSoQUb3J1idKwiDaGeND9Td2EYeUkQfAL2PZD65rwQzfx6JovsVsdCsjHUfsjqCqMtgPJxAu3ZkkkYdEgF7",
  "key32": "eFHyqr9DF5icwwNw9PgPZhVhWLiSpPAnKDCZfQVJDLCXJnF3D7pbwL4tAz3rLhhyABhkjQQmRPo4XcGZpz4kXbP",
  "key33": "4x7xA4pBSskEvYVpFjXRPPEXThsfzGQe6b6PyvuLeaD4cqeNpWZrRn9w3cNQHzhGRRfy2FGkivp5f8oLXht6AmzH",
  "key34": "pVyXdC8SMdxNnECFkRhA4Mrw265hVa7wZ3YacMo5BBSZZUyi8f1LeGQf64p7PE1BTXz8fxxAQWhaYPFeb72eBoZ",
  "key35": "4ZBCSPRmvQ1Gvi8C9t4WbTT1Lz6awYvJiCxU1dgzG6SKPfTurp8z9MUBpnTXZPPuHbj1y4TMUNQXcLdJJ3gjjEQH",
  "key36": "4c5QPjUTzXhGxGXT2Drro17dyXDJ7Ebc8dDARM9q3Hwrqv3HejEjpPhFX8X6tNq54D3BSTzT8TqKg5V8uAEaKeVG",
  "key37": "2FqYS9vPPWtFfmt1f6bmYVWQmfUsYvNbo1GuEX94L5u29YMnUSYWbheWxiaFyuYTrjAmN2nfQPDjgN9Rx2DC5Ya",
  "key38": "2AKA7agTg2QQ5gdc8yjYyKycNeXcp7fpnQopha6JSz3iPRiNXEVLJQ16AyknrTaP5mzD2a8viXLbwQhx6P8aPeiW",
  "key39": "db9BtX4w8oTfhdmyMTxstjz9LNAB7ySuW1iGhZXeegdxEKsi7mtqxswNU9mnQKfAmrQtQhzuPhVREN8x7h1jWc9",
  "key40": "62PR3657Fkek4dnfuPJiYL6Kx2121abZ4BPA4GyMBstYagdmub55LSjRLnZzFoVdyKkCc1xP4auWCsFoeAnMwWc1",
  "key41": "5BUKFjUBmhAN48MCcKzVseei4KMnCFLcbJCLzhDGaqx5eLp6FiTMdDkJFVRvEGEwrYLQFaLdhJvoz6wTxARf1Ygc",
  "key42": "4nQJbASgoQdKrSTy93aeJQYGdbWK78x9Wj36Wq19uedL1p2amDMNfXEKGZWvz4SKyW6RdbuhY97R5jq7at6PafqP",
  "key43": "31TomsFFAHAYwea7tgKELboJxoYEqy4mTbVBfTS55czHL7MyhxjnLb3rGEgCdcN6PtbRnekThNTJUNJ8tamtqhha",
  "key44": "49ctXoBAD34p4ZLV627SpB4qkN8fC7VWvtURBfNd3dx7u9Q11q2BbS26zydn5mGPLuEa6Lqr8bxYZb9f1SNHJDpZ",
  "key45": "2So9uPoWUasCiBtBekLvJB7PYFResRexeoeNd2PHVaTz1zxENz69reNpmWcHDcUsgA6v83DhmXy6yoRA1Kv37LFy",
  "key46": "5dRf9JjtLH3u48zpny32q52LXzEpXkc43o4rF4UqMErkxkHmxLyQnU8HgUfyUsx82gqaJox7CL8eJaayKks6iNYo",
  "key47": "3xWVpeFs3n34LQN4ur5pZ4VC9LsHLfgP3Z7Ms8TPN7tNTDzDxkyw3ytZyJjLB5MH7QDydDhffy2fJpKFu8sZUjsL"
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
