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
    "9wqKnrNk8cXZLAzxYtZaFSUGuXZ1iaZJC5uca48YwnvtFE6qDCYiSwf5hU7GJHSKHCVr7MPiz3iqyWzhNiiJH3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32hjyQLzPs9cLdP5caQSJSHmJXFyWWzwThQhRhw9jCW8rMx5VDxbN5wypnSFxXosbnxe9HbTZ26WoXRZp1XmJYfo",
  "key1": "32pYDzaLWh9YMAvNY7oHxh4rWgRqdHKz42AcMnG3LaZ7N82zhwXVCfmuM1rQ77fjv7GZE4X7pe98D2x7H1f39uK6",
  "key2": "1xyS2CmD6X8THETtAWbqrP1Gbwws8wJ7J4zMs5ojieekfBQ5CSzBTfT9Rxep8Phgzg4UKS4XgzCxLLLDMuPjrr3",
  "key3": "zYUMHLUdA2DE67GvAn3nnyRPFSpbJJtFKog7erHxJyMQBPRyWKQEYedBK7BcPmjpcPcsTw9scymX1mrNeaG4vjP",
  "key4": "4N3zrMLJVf7QFeY8Pyjc2N3fK41jiDNx7zhSugm9xmwbKrUaCryijKEBcJ7PjZXCecwzpLTUnd7mbewPrcHub5E2",
  "key5": "TLoQB7vQffpaKMztJavaBbHZ8kY7Hy8Ra85LxbmRKXsJQdSv9nZFMDuu4J2bt1wSgGRx9tLkxCMhuVL7H1zUZWx",
  "key6": "2q1zr64hfnE5giLQe1LFoBGLFbnMEQtRC7itana4CNSLYP8NVCZAnf5RPGXNANmHsx7UYVD657FhKThWmPPfrLgt",
  "key7": "27ENLEFVbQnwesEZJFNLhMFjZ9tzXXTGcnTWVxN5zn5Y4B4pMtixhhCLLA3aMungahWPWA6qRt9NNHxah453JCrr",
  "key8": "XhmnQ5cdnDsEVEPbRjUyT67KWtU5Vroo8sMcN3ktyjSHvz6vX8nhkZLEgQ1kHBvWUGwjFLAoERUCuh7ExDYk82R",
  "key9": "65jh4MKGfRzXm6fwZ8fYKPQ5HQXV7xuiqqJ2bjFwo74bwGWnq3umTEzLNF4xgHLuVgstMwwRy7nn5R3p4mcZJmxh",
  "key10": "4HirsxgS57gWNgFTr3bsK5Gy2x5v2bpX3ffdEYy99X5MwNf43eijzumpejJGGgt13EN4JMzeiVSAhdRxVnzuBefB",
  "key11": "5kb9xzVa4iE7Q5ts4oRcpCiAiRmoVBYWmYM4kPjGitfPD3cqE1bvcTAKtg8Dx2MjTVfofhcBhaMFqzT4SPNRBD8K",
  "key12": "2p9so2eq2uQtfchxboPiYD31d1pGktVKWtBRwFChg7SKZ6JakA7eGMQAFiTYWJgdGyRAVQq6XwXh65tJaPKU9TWv",
  "key13": "3nmK6UrfsK8E7g9KeiYHyQgFVytRtzrPQZmMTUoYLi9kzyp12uS23bgbCV57p5EoNhAe67F47aHo2hhNCw6DcwyV",
  "key14": "56rxRFmiMjiDsS68BMEGqtPUhWa464DPzShWQhsSeqdAxWXbe4iCRXHEwq8Sc13phkzBf1SeENwhaKHahwCixbfW",
  "key15": "2of1q5jHvMZXvnRWnusxyXDcud9yNakD6BiNgdMMhgqscGXNzWXH4evAZt3B8etzrUPjg3xLR18vbb4ytaSrZJWw",
  "key16": "ba7SN6Pz7zoLGZkgtkP4998EFB13RUW5fowiQf3hBzc9PmSCfYUyx1Adwe81dAD1CAkXrTe9bMbp6PjAYBMradH",
  "key17": "47pMVsVNMtwNcMhJ2Tru5zsKVdhx6f5oVVTV69YvCQY4TZ7qFNVwg7CXYh5sKTF8a4UCufEusKrFJXThf37svQ4C",
  "key18": "2ggWhECH7P9YLpfh77GncZRK2WckbzosTFTeEFLJaeFSJESQbDeaZBCwUHiwetUF6wP2kBVFmHd9zxC7x7kovDzd",
  "key19": "2RsGf2wosdoWYQG2p4J9rveFJqXJSu4aTCGvQVdRMdh2V9EGknR1ePGy9sxUS1tczNa37Si71xCEoz9WyLH4TXBc",
  "key20": "2JVxBHKvqiNnZZfBcptpLi2HdZHcV4mT3aoNG2ALqndJe9X4xQSPed9ahf6j9fkvyoJCfBn2xddLQyDNSHLSMhLM",
  "key21": "4KRC5yTDNZz7QrdzoR7GQ6DCYdEeFPbMJNpWHDECDZbri6PgHnUvEJL1btHFnxHvLMJTX863kWpw8bG79ck9Mq3v",
  "key22": "2UsbaL25FQJLvzFKe8yF4P6j3xJx8wRxRQV1tinyS2ENSe7q3hY8ds4z3mCQXi4jUoycuURmX1NDTJqDEoB7TcdG",
  "key23": "5McbgZYPYryeF1UL8MtS55v8QQN6AZvqeeA99CKphdqb9XLw4HvD4AJPd2tkkbGLuKLBiMa8HwqMVEMe149vxYns",
  "key24": "Tp69S1ha3KGV7LX5pKSCMLsUWFBhCN9cqbyDTJ1yhpYmLxJUuBemtV6SgxL4Ly2mAzpXacM45t9mrHXTj42sZ59",
  "key25": "4DXtKtEMBKUqAEbHqTKprB3hRdbyXzWA7vYzg6Qtc7k6uyT7hiQq9YPdiMH9EJSc1PRErVf4Gkhgv6d4qPk6kLpM",
  "key26": "34pPN5udppVo9u158mtAzYfuVBqtWEHV2Tc357AjvZC5J5hgyDoZBLTnH2y63VRAZR3AErpqN9wpME5hU2af8URZ",
  "key27": "EqNedyCzGhPgQWRAuBvRz84NQvEoVU7hzKVvS27obP5cy7NAASe7y1Rk6fmUaNNhgc8mgz8iZ4FPTj41nGiwNaJ",
  "key28": "5hYZRAXaSULkiBGZX3eePnFATmkSfLTrPZ4sN7hN7C6PqgNmJ2eeujxCyLfVgkraE6ozaMGNn3QiPgEsycj4ZVm1",
  "key29": "2seswuVMpC8jsNHJ8sF1Nmdy1sRp7zU7Rr2H9mMtCkGJXuriXcyY6KfgVgTtfLi1mmEwccbMkgocZ6G138uBTp9F",
  "key30": "PmAMAUL19FnRLWQKym889ZYzzbcrjoB4sstC381S6eMYThcV68Co2YJiJpWcC9KwCYAUMWn4RShRjNjjS8NG4v6",
  "key31": "4s5QNPejuPx4A2fHdzSsJLbKUm22ePQkuVtvEb1Pcr46vU99QLfmomDeoTLX42jwA2CVBPSeR2vLhBLVEaTcBifd",
  "key32": "2sr22sfGmykYvr5M1FZLAkDJUQuZYQh87CGhZKwWAmA7c7asAjLb6aqfP7gZm9L1g9fiKLnoJBCRAB6Mk1ccmYeZ",
  "key33": "DTnGk7NQJigVUBKrCDVED4HdrAEe5tfcZfZqZbGkYJJSdnJBNwTQ548mdVadY5SiAc6QNUg3Cq9d1n6aPhVRtMZ",
  "key34": "3Fx1MjtiLPGVrQF4W5H7utVc6hTLU3D9yk38KSrrGEQqc26bBnwB355cx22hdYfKv83VS9Pu3bk42LPGz9p7v561",
  "key35": "RtYivPbYj5kahZ8JDAYsx6eVePphnffQVwUASV6zWb8f49cfQz6nxXD6dCToYqcAAaUBJY7XMaCaVWEKZVhc9dH",
  "key36": "5DnYMSXWUZyR6H2PpFNUeGcXXrPpdaXs7Z1JhhEJKy1CSMZXKPTAdFA6sUnYUxXJCjp7bT9WhEjnkXbTGgERp7Bd",
  "key37": "4CYdBeBtaPidML74xbMjsTDfyDuyaF8dYaK2QzyVz8jtywCdzSaY1Dn8d6MhGxNNrsB6iff8rxvC3uW9Umu5EZjc",
  "key38": "4kw5J96zgg5Uq8TdkrTfD5XHGWkLduT7DPjYtf4qmPZACyfxxsBVk7aejCiAecWTMaBUvjugGTg3dyNgbJ5zXNe4",
  "key39": "5BuhWwMzjMzdraYmp2R6aJ7U8qHWz6AVQ6n6hj49xoLYFRMYRHZZyTtTVpmpq4pveULxP6y4JQXA9BXTQB3AikCb",
  "key40": "37q8u8c4XP36WnAk1tTgZ8N8AacZJ6MHBpKJyVLBUEhEpW7unRtYiwSr7PG2hfHnCiwxmFSop5gq8uRu9s7kLJJ1",
  "key41": "3Gw2RjnY4uEDL4VdRtogwwU9cdeM3tZB3YypVVokcXgQJ6xikeaT4RcR5fzgSLbF2QgUYrcYz2awadvAGQNXryoX",
  "key42": "hsKqcd7EACU6LtNvdYjTeSR6bo4oMXq1wCed4MERzfXEQftUKjt6a53i8i8S5eaPhuhZL22YT2Uv9w6hFE9xmxQ",
  "key43": "28ymWVcetjM1SAKnPTtNFWqq13p7fWqLtnjS1pXUY2saeT3DfdzjcBcqYFfaqQouqNUE9AkdyC7imibTr67ZTeVS",
  "key44": "5faMdPnpkN8nThK2ZEsbAVNsJEsX7gQYhsjvRmd42UupnMZgB9QzAZG9Uk9Mu8PAsA1RMLS8dobtrnZdkS6PUE5F"
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
