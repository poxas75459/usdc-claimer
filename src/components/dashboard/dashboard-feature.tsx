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
    "3uubZdNzNWoLYv5mKgzNC1JyKui5XoR6NtY63KC8o2CEhdJuGGgaTHnTtGxhZ1dnSBMYhLQ9BCaodczMAbvYZT69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42vrq4a8c7gVsWkcUH7eidT4fk3QT9Y9TKVcc9m3dKR6aQgiwhWCaLkRKn1gYX9iK3DsNMNVT6AM7KSK7rxT4nQY",
  "key1": "jSVK4oVzfsbDzpdC56BHg99QjN914gN7Q4SXwzRGP86KeJYaXbKaNpQpkLi6sbWmEiQYXh4cHws7oenY9Jz8cx3",
  "key2": "61YWXGmf5XuDgxRp4eLjP2y7z7zKDRjQdGqf8jJXkGgpreVPsek2DY77TsQWszUki5bvUbPTudBYSaB3rwdGEsTg",
  "key3": "31S3gp56pNTzfqLAMUFyRLfmCRmmmgJM5Qnz4hvqvrm4YTBwBBL3AxU9u6YF6CjVcahLJwkpLvpH2ELY535qNhfc",
  "key4": "4G67nD6TStHP7Ztf7r83oEDC4J3KrKXVd2mzjBLJ9zPR6EH4L4ce559u26beGyLW65DUoqByygpRTLSmcxGityDC",
  "key5": "mbs6eWzxYndRn2BjSNh439mwxVSQ8ZsAAQ4Y9fSe6JKKpwz1rf6BTfwSKffWaboKmNsmkTSF3QH1xfgbgv939np",
  "key6": "5LjfVswyrnytd69XhWEwhCSabRukKus3WHDhdEJkaEpQMdykQahBV5LMoXfmLmj6ZEFJtUUH5A4SB1YExizsAXrN",
  "key7": "hDApk41SarWCscR6DjcBJpMJw8SU47nAkt4P2BCqB3CFQZPwC8oDvRiZmwZetGbUvPvQ1A7E72JEcRKPz7otz5o",
  "key8": "3bh4MRGEan5wp3u7aNPLSaUg2M1CLGELm9fehGC1wmkRKp6GSL8f7EYSwxgBxmxPJzNNkrMp6ri4TcinJqqyjbnB",
  "key9": "2G7mK9dBvkgMGng2eZTfm9pp7EPZxSXumcokApmD26SmZySVhvnu5PrQL1TASLPJ8Zk5xSHvSog6aJL3stRKX5Ps",
  "key10": "3ZF2UwxQyPBpoBE4E5JkQjGtcdAGbboKRpYnp15FQ3g4F4UYCbaQTA8iw8NHsAERvDpsstFbPTJxDgia5G22bkMB",
  "key11": "3bBhwM8E2HMeUXLnDzUBmsD3CtgAwX6RVwvCEu1yRhvaG9ujc1Byg6NygBwHN2TKUJD88KD9xoJtGKMN1NZijwr8",
  "key12": "5gFUtj4PYvTADGJCkcKV2rWMbbpGPb9vrDefJPkxE5RSdr9qmCDfCaxLAk7ZNgURZKGH5GWkJnCM5aTs62FCpmUY",
  "key13": "3vDyVzZH5pJjqcyqQbLRUGwKe8jPAeRfrX4UfvAmsCh3teHqmRLu3HQxTW1roU1jRm9Za8TFTNXtEhdYyHJjPtRo",
  "key14": "qu5X38TLNT46cQ3Sq2xRxqYMyZx4bSQStx5bTgSwtgKHdNoXNsEPpxWSM52mbrKpbHL5QyZfvE39W9wMeWAKoty",
  "key15": "63K446du9KfX4797zAUZxKNj8GoXv62mW3W1Q1FVCst7zbW58zLKmebHNunDVqBHw1hKa95E4MNyE49N1jsBGYey",
  "key16": "2mLy46D2fuoYtQJNjG2wVbmYUgh31vwQ5X4qqFNmftFYKTrCueRpT7Vj3dZ8nNYBpXcpASrzJbkwXSu4JfHV29Hr",
  "key17": "2tvpmwHnhhiL6x3z9k9xWW75BFpkPqrTj1p9F21ZEJX7WBa1pkzAEk97AgVqG3o9RPffBxBMVPZTTBs6yxQLGKah",
  "key18": "5oMnLGWBFmkpBBQB7v5TePLdj2VxiTz4Ci3iBsxpxcJLw1bkRHym6qqKfcmpqzbRH1RtS2pepLRV1amYuQEabQAK",
  "key19": "4GiGMTaWMMvKvQV9eFfta8m4XGEJFaXh7jFsPHFsmQryqSeY6TGzBHTDsVBz4Qf18tt6vzk4CsvpF2duPtMfF7Ep",
  "key20": "3wrJr59pLbsyNNDLUBW1YvrvkD5TX9jgtvr6EybbWGDHHpWUA5WCMg6bC4aUyBa7gqU1hjkQAPfUbHmorL7yGZY9",
  "key21": "qPyxsn52gFGbum3PMWXufHJ9GNevq5H8iJkTkVm7vWhbQB725rnF4T5NdsuM7hCEQYLEFEkCVNaZ3VaJCFyP98Y",
  "key22": "2tiJdfujmXVJHdXDnweb4zSjPQiD1GJXQrwNgUZxUQwZqSWws2nwknFKwdnQub8w8eY3N6XcCz61AwGoYoH3Whe5",
  "key23": "eGhRBvGvzjfK1eHsdJZ5bbA1cd8J3r1EnBAKo97F573kMgVKziL1i9HoSCUAmERwzqzs6ir9r9x3xALDkhPEHJg",
  "key24": "4fYu5XjEdMzMkfrHUiKbTFBrbM4trDPFwrLBPJ38FdM569ap9rDoNKFybzPwaiAR9ocDbTNn8PnsTV8Zq76Kdpof",
  "key25": "4KBvUujd1qsyYGdQSziLjsL9w7NNX4tABLLXi1kpFucUECTfvzpybot6PSp3pYCMaewEFrSZc4pSvyyYnBZPkygr",
  "key26": "29sGaJngFxEVi9xCs3eg5GiirZqnUeZreVZS1ij57REBRHuzizuyMAyRpabeXcER9uGqzBodqiPJ2ZBWEGFyYYe5",
  "key27": "54tyged69jz5Fx1xvx8jKFSkUpUsbeN5jiHUqEC68wWFwrPmCeUka3L6cxYwVWUX6PHtSRsefEQd1zzmpAYZYUv2",
  "key28": "VsjQzQJYuizc7vKQHWvkkTR8kho6B5oAqEeoi8aDuBHADPgf8YDWcWStmQu4v9BPrU5Ya8vq54GjV1dSK4ki9Mi",
  "key29": "2mfKvzN7Z2hYBoJ6JuM9fbypqE3dBEKmEw7ki8MUA9Sf9q5Cscba6BMoU1TxkgKtP75f77mHJsmRigodPyS8WHP3",
  "key30": "HWAePDvGau25uRGwj7QmSZqzc8ocyV89TdvBeTRW85FCKFjJEZRjCZ3kRbrZjUxqUVPbbNAoGTxvs15BvvSRv5R",
  "key31": "3aFVs4L7WoRjTRDr9duK3p4WXeq5UFYTcWaNGpCNt5YnNL69XY8pN5KQMFe4C1EzZQi1JPx9Xt4eN8YmcgxQvXyh",
  "key32": "27NpDknpq837yJSa2PjrbhLEX8TecCw6GMd9p7kzPd4YsBSHW1a64JBchs4Z3AoYHJWMGfHj8EtKjYnJB3gGVHoW",
  "key33": "42Ud8keJJZzB8uHchAEcAJipZGF2buQBtiApwDu5jyjd6sw9cFLWcnT6tEuo1b3PYEeVh1T6ceniFWNJEoXtCiLW",
  "key34": "4pq4CxGmFn1juBS19EhXd9oWqZDwXwuzTvZeVJwAeegUfB7Cgq4DJg9ot78E4VFVhXoK9C3yLvwerNW8zXHiSLNQ",
  "key35": "5QSpbcKRWDPSE6mcz1Uz4mYBBmNG5rmmx1Xf9J6AZ97YRwbKjNkHmKzqegjfwV66Tn9Sd7djeKpzqTUVB3fnFVNG",
  "key36": "41zASNBqUhAbaQJfiiagwkFSd1E6dKEJtkegnvBzJqLuUp5rWi1jPBeeD4NnPeMVzVAvmjnE8rCMH4msqZR59MZb",
  "key37": "3tx9uqc6xDUhuGjLgY2kKFWTaRHTpzJyCTVKCJxaTt2fMkKwu4M5Lk6LKDBkweagVnTobxHSk4KbPGmX1r1WDBGr",
  "key38": "2zV8avXqCxWEgYf3g6Q4MRu3HZh7NQoAbHYA5RA5kogc47S6LGkBfrMH2F5oHqs3FxSK6jxyXdum8sLLJHywhrMR",
  "key39": "2MRPK8YDgFCiq1XbocX42nWLexhEmBDoccK69qqT2QSyKbmZzn4AUJD55eSPw3Pm7VdN8BaaGFVi87bsrsC9ThpW",
  "key40": "5BgRJy84ajvqNCgd4TVibjSxFY1UVRhcYgaF6Zu9DsSRdbLVrEje1WsorJ1ABE596uq9svcejWbHLTH1gckzaJKD",
  "key41": "5zh7PW2RzJ5yRB46e5PcY547CRceShh1k5uvYEfJ9mxKQagdmj8tsifppFDpqEQ3YxeDzjvZS9uYSBBjwuX7g3YA",
  "key42": "5KEXqnqeohzhBWeAGkKM6sfqFDhUw6sTyPrAKqqt19RBWBYfbXp7kHzHtqhxXtUsS7dbQxgduLtStQgMzjNThfFq"
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
