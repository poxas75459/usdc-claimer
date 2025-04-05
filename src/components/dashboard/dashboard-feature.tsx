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
    "vm4Fd7Wk2AYUjVdGKoUA2yaAQCxnMfymnH91JrVo3Y7pqGViC5oKQoiuSnk7AMVmoWhmR8i9qLVBSRN7GFjMoPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dfQpUGok6viMf1BLib6WTu9xHR58mJFaS6C44dDnKWmU3mvhP8ftEYZBsk3Hqm3qtReq9U5NnFs4QyvQeniLQAq",
  "key1": "5QvdupF9EJjRsoZL9HGUbsre3Sm2XFeFrBhqoNDR2nw6G3y2tvvDpxkzjupdNcEaR7oqNoXNRu2RmVpFLPwznqeE",
  "key2": "2F6jnZrSqJXvrH1qdvubQFuGn2TGTjbkwWEhm59NRRVEdWDCQUvUakS6AwbvK2peMY951pDLQoufz3Y5w8sNS7St",
  "key3": "svvoq6GX9tZu4XS5yfWBKpvFyeQVXzU2eXHYHoE19Src8W7wmo3fzAAr9ysi8rRM2jQ5v6h5TKdUn7sZ2LSLzPS",
  "key4": "4xwrVARwcZxiD9Zs6iAb9SK1QuRXmZSB5cn9XBvK4B6Vmpq1jjmG2dve6orXwvtX84FvDMPFcbVW2Rp53T3j1WTh",
  "key5": "5Wiv576NzQLCYHTig63pXzGQdnHpRoXTgz5a6WFv5VWGQgbo8rUbSgSJRwN8wxPwd77BseFzzZEkvJMUy8A1fRHC",
  "key6": "5R5HpzzGSe3sTaGyhju41QDjSJmXfJAEc2oVcXRERrq91HKYu81wpHrA3aCzd8p4biGExJRrW64ycJPvpcnqbrqV",
  "key7": "2aw3zNs7JrnbXRDt1oBGqnmSmWhCh1fsGPaWmgtzVk9hfwXpvmL25hZvvUNTo9aTaZ3RCAx9ZXdm82Es7iagKPmo",
  "key8": "3eWEyQ45gh1n2rbxo5nsipXam2JUVEWhw6Xr5jCZsyUDkoxSkcmbcmz35SkFmHBu5Hiv1jk3XJ8R5ifsXNDcRh8W",
  "key9": "2pHPG7qXXJL29ETUxy8wAEoMBsMxfVkZkZgvRCza9TNn4nfR5um5psvEXvA6Yot9UaLMShiumpGtuez7pr5cTws7",
  "key10": "63Xm8XoMxkcQubzpcYiq7J58RD7BQSYKAkUAFy2HPVbdRV9doS5p7vhdtQ8yHG62qPMrtLJFw8zPrq4FgpMjPSTC",
  "key11": "4mpaXEagC7zmxGSukt222hY41J3iEdnUe5MyUAgj6qywwi5J3L2YgeAA4tNrmVt8mLVVBB5VoBprXLohaMFBKoVZ",
  "key12": "7QdDexVENUaNPmNf6icMK77XqKzznDEtTYxr4wfxVQf2tDPB5gGtG5A6884HoChuT4KFsodKAcwz5pQxJip4dJg",
  "key13": "3eJCKdn7G2kSkXPieLuMGTJ2TPPS1Adwi2Jt66mHfp1S2wtZ3ueptncRuVE5L2oa5TbkbkhzK2iv5VxCLxWizfsA",
  "key14": "KkyvLhrcxXL2Za2aDMtxPENGhUkgMM5n299DaYqRQBpTYHnPheBRoU9jmX2fZ8eZ7Uce2zZNQXpuhwCULr6D73f",
  "key15": "NL1kCKbKDUUSucGN6BPe3XHDHfdifU7bkZnHC2GDCLt18PBnKpophpK5epZjfZFE7GXQrn7FHxi2F66pHtXsqWT",
  "key16": "3FJnRrTec6JonQJQ47c9TKXBQkU5SUTodJN95Ds8wSCSqYFVsvSBSxudWPWq3rPMY1BmCX26qTN2Pu6eRPjif6d1",
  "key17": "4z34fQukUvGmznzkUEjRaqZPgXow1Q76AZVbebC5GoZec6vDYpPmNc3QToS8DrpcABnXpbeJPsFHSj269rYwbmkB",
  "key18": "wj1nZPsp9q7Y7RTAAYrvvhqvAkws9DccW3A1GFGe9XRe59y9ZTaBX4hcD1kDfHssw5SodTBNKBQrQY5Y2Ra7Bai",
  "key19": "4BPQrVzc2QUS9dfvjY6n4QbChWjPNCLyPFDDvqbscZ6BpzsuN1EtucT1THuZnGo2X1zDPR8iqtMHKspkYus6kMjv",
  "key20": "3iLxmCWAD8rDA6TUKMJ9dixAz7X94vnqdnSTwD8Jykaskx6Hoc4iPAVAPPouJqHE5asS2yxDyAMG4GoRr2e3h93S",
  "key21": "5TG6mDBswFwkqZAdKDvaJLiruMFw9ifTNbJsSsU343BNrDAHr6BavKPThwKncUFJBtGFJi1XkmbkLUC9vBhUFxBj",
  "key22": "2zKh1Ep6xj3wqTXbwXi4LkceZbY61jvM9atbckAqpXLynV6Ws33qow56ZmpmvWV1NzPVHccCH4qJBHBWRh1FSDNh",
  "key23": "2bEKUUMzYm7yrMYzVZYKNDTjVRXSDKYTdep4UgQYFLJXQt15GCMoZ619KDM8ZwPGuoLNaWX62dgE4DS5RrxRngA8",
  "key24": "2b2NYZiNdEGCbUJTxA6fYa1KRsiNVycgH69sVuv2XQD5FPeL1C11a2TPJ5ysGikKvFkY8rurH2b7QxCLq7Fpbnr",
  "key25": "GfuEghthwDt6SLq1WRD8S3mMr2uBqJ1bMKKig66r7AGBRR4fkLDHYjkkd64pkLbeZjKa4c33vfp3i5XkTpP49U8",
  "key26": "2Co4V3WkPuTwAshrZoXfFQdEfucRUXyXcTU5CQm8rhFQ2pyLzPVPyUAEuQ1Lf6UqqySpXJ31xfbh2o97BQfHu4Up",
  "key27": "53H1PyuAjRHbFkDguY7GMo8URoL9wkUGNqE8AgHU1ZiTmSYFAxRdzPWz4LHoknrkvSoPqgETvKfqLJADu8ZFUqiK",
  "key28": "65zNXELm76uBQCRruQaqBNbZWb6TnV1htjfWkBRznDjSt7YUR3ECcAWtPTkDTDqnb2MDA5LJzU9cp4DUE2FTja2F",
  "key29": "38gzD7BGyoPM7YJSk1gy4VJrTehsqBzRpxNTBnt3pdgHEJGr4RhjwprvyLYfc35xgTea6MmG2Dg1ZXZz5eKTjrKR",
  "key30": "5YxspahfKNWgmsdwiZMrquDm7XsHyCN3Euqf3sdrckgY3bkmFFmSSfjjpCpVcAH91sbLiTz1QKQmhRAjw5gf3HEx",
  "key31": "5xqv7Wg25RVBezFi3aJ3UKvXQLLbL2TKTaASHXT6esUHisytf79o5XGaZtk8kmkGi4VjMvzMi3q2cGLgvfHsDnqu",
  "key32": "4f68zL82bJWRx7M8D9LTecf8SmPoMVfDieiig7SZFkFheffeqRhGn7cjGaUceskoZ8izuPdbUQ88JCLT3emqHkR7",
  "key33": "AukARDt1ycPSyj5QwKzwzzgZcz6aFkajSYaA96sKguqVW3wPQiALbmsjrjDdQAAumL3yNrQABHaRPqm5wZCK2Zy",
  "key34": "59egH9W4A7mWoM7e3uF6Vf7QMySqJbTCcdq4NtJcAhtf4JtxvUjHZBDqZeCZ9zk5fhuhNL1q4XxpVUtq2AXqj62b",
  "key35": "34UFU9kJwbNY5kr2RZN1PccgAsMbNQTbNGmvZ3y3stjR8QHZwem5NasBnd7isf3cpziBWqJXRBbe6AB7DwD3nSYb",
  "key36": "2i877uficv21sdqLenhab8u2hnqZm1Ru2ogj6XmcqfwsieqqnRnt8gADiXWEutfw3A8aS4DWknc6RTPseRK97Jz9",
  "key37": "4CDWRZnBymHYdgoLL9Uk8HZ8gV5ZVHTm7xbnJna3T3sUopjvu9jXc4xfi5M8WTdEjvrzcUJbhTbW8CD5pNATwVeV",
  "key38": "59T8vA9hzx16pmosUmkUSM1QRiyh1JitBakjLmyUZqfuhKevYyR2sPsp6JHkhJ51VR56rN1LbWxyVtDZm3NF8AyT",
  "key39": "3SdCh2V6frb7XDu6dPHjmESgqK8Fyr5XqVj27a6QEFtQsEHh3uzsBAJbJqxanaqM1JL2ZGMpt6T4zFoMEVpZP4C8",
  "key40": "2mtqEoBoEV8BTXWnYLc5PYyraUD1dfPJ7BppgxaKdFNrujbuGvnLPubQS3RoAuYLcZ2LVwCi96RGhdYffzS8qkY7",
  "key41": "n74Q48Ai5X95NghL6EnkJ2hTVN3d5RRaATFKoZsaTKvgtnEz2BA12hYGaaPRAiVZRraUpkt2XCrTSusmdQ3tFvQ",
  "key42": "3B6LEqgMXFexwnZoxJys3HXeKFP434v5UQrKAJj9t19cUpbM37pTVjsJ3JqCyv9ERLqxi8U2Fu2stdiqK8aBBWZf",
  "key43": "4qSkFES6494KTTZwrpoWpLMxhfH6RfHzP4dUJuEXxV89ZySHqD6mXFTq7ideiiy8WBeXnSf5mKUSjw2wmWGCrsnv",
  "key44": "3ExcHjXwAay5YpUNG8ieSm9Jh1vbHQyMKCeudk1UYGrzvokb1wxnQnTpVZ9TaHcYrUYYApVD2UtfkdwHEUifikES"
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
