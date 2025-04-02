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
    "4YZ186arFHvSng2JapaN6PjNdxinLBVPFZiHAvMrQhVdQ3w6Y6Tix9ZD9uW1iTvNNRtHtuiXd3sGFmhPE4UwbZn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eAM4j6v4nDQh77qQBEECkKEcnxtRpnzkuRQdziA1wCAWFdkNtkLLd1BAnugnPdbCK76bUYmznaEQxNzjoXnXjNx",
  "key1": "4pTzjssDBUFDXMN7YqN3MaBf1KtwKePA4QYCbwy8Bk2fJ3Pj4B1HbWvYYPkxDa7fWdXcTmRzM8S188xBKqkCs3hE",
  "key2": "536sgh5pJ3FPeqiT7UjnY1RjoayU9w4gCDnX6iwn6CTp8DuJ8k26AfYrmTEWvh6FxSTizb5Zk2ZKdtxX1czABPiY",
  "key3": "275RPE6n6zruVfJYSRWp6tXyhhBiK4AdGBFU9Gp34hf2czmShCVtwmbqNik3XH5VS2EPFhGfFBy4xQhLJUxSTK6d",
  "key4": "5Z8dDznry2VAgyGypChp6ZSSkfN2g5FJHfGCXsEnhHvfHuSVs5cH44wZrZc83twm93R6gCcxuJDY3FdRxBiGW6Wr",
  "key5": "38YL5BaNkS8S3Wdg73fvVyvWPAp2RLaMW7FV3xyVYseMziZmppnRctT51hsPBLGgZ1RR3gpP1ojPznzap11STx6T",
  "key6": "3z7rEUb9UUPodRswnwitnpoRsGWAXPz1gTU5iXrqqKYsvdiNoY5SBEiXTFbU98RDEVySHu7sJ5YYa5m3EMmgFFvS",
  "key7": "5PMZdav7H3dpsBhFoUvrRgfYpXY3hyGNxtV4455c3mWZVwB9gmeJbEfLpMRt8tFoxCy5E9tVyqQH4wa9j2rv1egz",
  "key8": "4kZX3c5Vt2r1HQdH5Mq2J3ugK4MHhJTPdkUXWUdfY17BzU8VV6wjBRNasqnoesr59q9mCpc2VtfGfC6hfADijiv6",
  "key9": "3qgeYriEvXGxV5nZzyepj1Ky8aiQsPvS6tHjAsbrxqaF4uPYMYa4n3oM9CHG836bq3xY9xNLSdF8mkSdmaan2Lue",
  "key10": "uTZVGZRTjMWT9CaycwePeTEw4uJQiMRn83wVxcostukhfcQDD7K9DZLjk43puxobnSS8FRE9E7TjZ2o66gJqcmg",
  "key11": "4sUdquaAN9rkWq8vdCMshoqo1DoV6EkZ5MP4hkwWYuni2LPeKBmTH2JrAJcKBfhS3eT1fYvmLWwHsiMFivkExzJr",
  "key12": "5gyoo3dPmdvpp8wxAcfGvemPVgPfafVTHBLUUxgPqPdZY5BtCwDf9XFd2zXuHwnrvdoqTWfWkVDo6KVPd1LXyLUe",
  "key13": "5VH9crN9ZjCmkRNnJV5coJqXoxZ99SGPDU5SfhBf3f75AxebughC3ugArLMsEmicWc2fFSH9D9FhK23xSz9Z2jxE",
  "key14": "4hVWqdBzSU2pjMV6fbLhhLHeq4ScaTG9u1SnxheFeWimbSdVEYXKnome4TfR6FNMfwQNx6tGawyzLgtvSeb8BJSY",
  "key15": "3QYha7cXZn1Q7HNPXn8VchM6DSCJuFFFwacgwcJsKaEY5ovyCbKRFQBUCFHvv5MU8wahD8x9AXwsHmewUMSNCTNt",
  "key16": "2vdVt6fDw2UoTzrsLgW9ej7S7su92jNEvXMh54SQaaeuNwrQHD5uUuhWzHfzZknGi3pU843baFHibP6iQSjVFPPM",
  "key17": "2B7Zmd5mWZJxahY16Y563KB7rM15zptMNzV3WYkhzdhLd657eTNjLSDPvHpAvEwNssiR9iUt4KwmdkuNmWhkG15r",
  "key18": "4NkuJ18UpoLyt3ew68nvCWw33UzFYsP4E3Wbc8765JMr723AQ5aR4pPQVMdJUHAtZW5KeMMn9SGKzMHWjrqiAXdM",
  "key19": "5SogdgZ5U6RcVhypf71Fq4FSsX6Bs7kRswb4P65VJTKhLydJkwaF9WLTKHx8okphjcVwD7vr3e657Qrz3v9ytNj4",
  "key20": "pS93w7D8bt8UuA5uvLEyqv3d1Z8QTegsApyrJTxhRLf1THog5Vei8Lg12AWbpVL4w2VvU5ah8TBv7AheZ4t15ee",
  "key21": "518qJ3HsS78WCWNU8CVMSPh1Ra6Fjjv5Pxa2a8QqeAPdCGmmv8YYaZn1ttfpPXtepg3AY8vmAeozc7aQXLkY6a4T",
  "key22": "uwPLCWJzcZXYM997LEPVZkGY8swT3yg64MHUse2c35xnB4u4zbsTG34L2tpAAbncaJrGMVwKSmZMCvAHdTZ3VZD",
  "key23": "5qi65HSs3VBZ8aTgC3mRSNwWjgHmEWLy4gUShot37XnKT44YcjiUrsWTe2mGi4RcpMGfKcuABETodZy5ttCx5kBa",
  "key24": "22EmhNE34nfRJbm7FHoccSiMnGH3Su1MgZjWT2HUBJBkj6DvMXtR5YHXswPVBtaGF2qVHgxWbdwtzQuPdowACQDw",
  "key25": "5QBjpjtxcW8kbGptbdgUt9aaPmWPR9ZVNoSQmWMF4hZW2RLZv4ZQPistdWTficDdkgVE8GFybHGCepuNhzWBg6bT",
  "key26": "tQmyajYVmKyxgKh8ARU5WPwpdnhgMXMzfDCP3mzJb9PaeYmN3kAcLmQY7tAuY42scRgh3BDNMwYLdhFDrb3R7EQ",
  "key27": "37kUDMnShT6zeuYTmbtAH4uZky1SxawwgczeKpmJbNKXKaUYbcmaBQmghaxdATaE1aNZFS9SdM1ttp9p4BkmEQo4",
  "key28": "KNy8HzHsdzHjLHch1vckgj61q1wMdcQ8aybw5LYmSwWFuVTKM2QvLoJ8AS5gMrZdhcZn9rRYMNPJEJpLVNaYKNi",
  "key29": "353RRXRSbnNAC5SNh288B7CCs9G9pMcbiQNPsGKcAcp9EHe3hAmupFtN2foByLR88V22MUCufZgQ6ebPXYXNDeEE",
  "key30": "25GA8X9us3RbcwUxGTFt93Uqs1vw9i57VK5tKRsvKgtY6W6EZWsQCVa2Yrjr4DpopTRpZn5wsGt5ZMjTjXwFU9J9",
  "key31": "475it2tnpf1cQbSWyuVD17ZBc9aArxf5m5Zsb7pR179yi6mNz2fJF6mxx4XUTmUB7cBqZiSzobQ9CboX1zgVUMop",
  "key32": "5p6Zjj4XoWjUrUM5q2HdbvSV8hfK6wWBQwuqzjdVXqXQKTZaewYSKvc4mFetGds2QWeespJgRDMLGktDtA9gFXxz",
  "key33": "WBC8obB9nQmLPnzmCnntujD3dDgLTmzDKpXKc7Pt9PCEsfH14XZNbjcy3ATUM1oW2JQpFQUEX5mrjJdmRHD493i",
  "key34": "2Wq1wdS1JQ7se7knfbVMRitK6DHqvBnojhnMa72HxKArTp3A5KW1QcpQT4Q16rfjk2jrCpZRS7ak7oRDnU8NzJQu",
  "key35": "61AYyHFRLmKNd9NtT8WpHcYHZSfAX2SKQEPLCK2YfkCNmXYp4AxtyndfGGvuWhcg3UZp4oNwxYdkHZG9pR2xRp3J",
  "key36": "2nECtRfionkXyXvTjvoymgxSkqFGWYBUfEqhmzEDfNCenz3tBvtQKcw6ybXeXBBx5jRQAwe5HYNpKxKanV4eAn84",
  "key37": "5C4kEahJN9kndfccuawExSziTiymbdEBXeuehoyVrkw7sUhU3bWBCDw4t6eoeDVYd4vYoBKkL1TrsHasBgktrADn",
  "key38": "jaPVSxHJzCpcfZEPubiytCpuMv8aXTVrDLkSQqKc9At7oWBKNXSGGRARYDsmRRCFvB8D4G79jGpN9Xo9f9wEyYb",
  "key39": "Eo6TXfbn8pYkWkKb14kB788NTHyP54eGAZGaAkwBFvHozjme1nardm6NbnKQ7qghJRfXzQxzQC2bbG28KeJxLyd",
  "key40": "4gWD2UmrqD7h2zxoo4uK8o9TZuXCdmdgPjZ1asUxwmeJb8tDdn4qmT7wLoRmopkQRNeQWL7JGuc2iP1s6prmZnky",
  "key41": "28w1Txsjwow7an2AKXp3gjmoqrH1AMRBMzK9tcMvPhwyPUV6HuxRhJjJNPWTJa8eHydYj8VCTG8aFmvN4EjbQXxg",
  "key42": "67Dk1g1Gx3gFyCLJaBP9P6KpswhbXec9BGEDWmmskhhuAiYQAibBbJZhtrwhq97mNaE1cH4LLYLCmV1mm8QKLgx",
  "key43": "4T4MXFXu1gtHsWRViKfo39RcsQeNTrcWMbKqikzRXsZu685mHyYJeR59NvqWeJ5k2TsHhApb7p13vBKh6MACg1mV",
  "key44": "4R2TExQmWJL9V4CQunu5Vye6Bob7mUF2RrqQ7VG5UuwimQYmyumhPRjWeCsBvAYw41Cn5tv3Mx9o5ASG8nQyj2Vd",
  "key45": "4P4YaF5gPWPvAiZoiw7FmCPBHNzNNA1EuGrcDkYjqjBUJGkBLkMaqtELoiX1CsKoEdYSTJpNrEddhn1AochEsb4e",
  "key46": "4rYxWGNLQ8ctxtFNniHbiRmhbqVciMhir8QXjaL2ePxwrz7CHgSrYyWMhWf3L2qCfoKaKcg5JaVAfYeEh9gZdPGd",
  "key47": "gmNz6HE1Xt6urDDLrQk5c4fh9gfFNZ4aEEFKR4K2hiVwu77EEPtJr7CaEp3SCQVTenq5H9nSJgPvHs22d1Hc3Ew",
  "key48": "3pCBM1E8eq9g51ZHsbRDSRP7GahJ2GtHLmat6MGWD1B1GzVTQzx95Hcaxe5nwxVeqgDwWQhf4XfiwLBivmvfm68f"
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
