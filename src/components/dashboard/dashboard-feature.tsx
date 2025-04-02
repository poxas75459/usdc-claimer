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
    "cFbB5Sz1g35ahZfVoBhbtqgms7znhx2q1KV6WW5hLghc2ndRDBcukiUwgvWUJPFBJYuibF2aHzLkwG7ZQLmsv2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gd8H41C2boQg4SerVLvWnW24YZ2f4ZhJbDfmky7Yo9pfkmYD4Q3G3PzJW5xShn3a1vZFpXHSDU8EovEzU9XDfKs",
  "key1": "3pVRJcc2vvHbc9JAfCDpSm74n66ruf7DT6UetZcoBg1dzaW1JUT4vijsiUbqG4DoTjBhpFp4kDjbxJzmELETsQN6",
  "key2": "4tSYoc3VPYTDGAzLtuoR4TThfBxgaRXfg7NdhTKnRcmHF77xcDQi4CG4CNnzXKvdhzR9UzcmkAb2i44py9WBwrNe",
  "key3": "843yYB7hypFuMR9ijk4WWRgDZg89nWtYHgZfPAhryewNJyn63AVGxWRxtA1wD6cm6FbuuBgCgWFbyZUgadxn7q3",
  "key4": "2ZeRrrFp4WE9sRZdVLevZiyFvNNYXp3k8VbED7dZ5aERsrPxuXN3a6S7D3cb5VhjBFeyugVVfEivnyVvsMb8vnxb",
  "key5": "2N8EwbzFnvmauGqMLdSTdcabF1dr2jesiiwCGnHYdU9xYWX7rupQG6zY68B2b6h25oqVbU9WkFLqT4xE4Rgys14H",
  "key6": "sH53yofDf78E1VbvkNZJ9QF2BkUsat8qYsEN5fqH8NWXqmAXcPoF7bToa1R8wNiYuf8sK3VYZ8diFJacf6LAPZu",
  "key7": "5nQnEpMEMy98BxiV6443buk82dVHyUwg4b9DPvNDa2WWfQ8s9VdmJqQvUY86VeJPfqTCj4gpu5J3J3i49S2ABQFY",
  "key8": "3UBMTr7KnK4t5Bt8yjEW1SryiPmUPkeKUnzyFXWb7hxtwKvqfR68w1aBxf9zsHFSRbsDh8Td9LdhricA4gs1awiW",
  "key9": "4Pii82TteJqdZyFTveY2PKtzPsqA6xT4R1xj3e5xYkZvRE3iNE5548WmkgrKKT1FoQtqPVLjWJpBzyd5Ctpjom9C",
  "key10": "2GyDkjgeBWTcwNErPNtaxYwP2TVGyAGZUcMRW5z5iZRiwRMzjGKt6C5eFV5uV1zEyXxhVWMMS1VXypR15HtufLBj",
  "key11": "3BrpBjx3xpPB63A8CJQtnDmX5bpPotYLUrnAjFeiWUBihmzTMCTkeDSWZgCZBaayW6g7E5sipzcamgUnXQGqV9MY",
  "key12": "5EoAw8qf95Pdqi95RmyEqrJWSYUUxankTWkGTsbjZRsKHv3oqzrS5icVxmhvwebZveTJjKJRNgSqPKBi3WvqzV5i",
  "key13": "49gaFFWkuLn1Vt5EhmnTdEiXqstgXmdy4qBisQyyHfYcPxuaxMVdXgLZWX7Wkzgbq1EdWrCGVuqDDwrTfJkmDdUQ",
  "key14": "2LmV6Gzx69sVm9C9r1hSmSYBwQ1Ar8w5QuGKv5AktGtmbEWxuhMQoYzaRvKPTkCzPN7Kxm1QzdjFC39CKQWZoNso",
  "key15": "5akSjsfPmeZuqPU2EZDrpNU3vCUhrZyWGCw6wdjrakDKGfKBPdmnYwiNDxgA7xyYKWzxNwSqFMGCH1e7FF7tpkwC",
  "key16": "2FTTNEUBnYN3bD58movTA9ErryKiYewZ3NHEtErTkoCQntSiajUaFtCEUW6CtfS5yBvXZpY5NbQrXv6xmDv8wVzQ",
  "key17": "2YVmDxJhR1cLtk8eru9xXqJ9FTEoxy5Tj5gtGDQpwbyoCkxPPKi8y1sRPWGcShJUrLh12WYHLcNXjJUFqGD8USj6",
  "key18": "4piaDbmGnhvXppXWRcjY7bDFKM8a28sLwzBKuCfh38q3xkU6rpwFRFkTi4gD6pouwefeiJKpqBL8catngEXdwjhj",
  "key19": "4TvB6srB7pVPzvDvktNgC37cRV3b32kkjKSs1cUdsWWeN8vWtxYiDdZtMyJTSJgTMYnqL81MwD1TjPYyaVULtHDX",
  "key20": "32e48gw6z9kfRguSktvWWrRVHPCw12frwiMkgz2yAddhRUNXFDTbrPgvXRXr6kJ9s4T1Kn717KoZ1s1n2cAwzTtz",
  "key21": "4ku8bwQ6Enarv5jsiDXgXqEFjXL5rnT9GFC1WyzMu1wKnJjD3BTwkCNTYiHX8y9aKs9RDbEi5ZArrnyT32MzjQbe",
  "key22": "3karv3Z3omkvHCp2j74qbevfi1fTMKSJKTMxP2BAwWSZwVFVpk6GLMKDPbxeUGdHiPHmGgrgCRQUDH4JFn4kLvpR",
  "key23": "2BWXA5o2aSMU3EBBgypF978XWr2NL4zkx6gMV2gkAf7rJvojARKZqW5NyoqepYaoPtySFYALeLhXxS44YDjxpQwn",
  "key24": "31puEtUnoPqMtZCFDv6MAJnPQQy7tmpjVFsrDfo612WZCkTAd4dFraVzrgiBSNWiF5cPi76Ty2QvTwEFq3jeD7us",
  "key25": "26UFP7u9ieKTExcJ5a1VFeMvb2YHnTdDwQJeh8eGKbSFt4qwaa1HWYUwpLZZc3fEMNdNEFTJFgPAx2YfUTfR6B5n",
  "key26": "HKQcGkJAnwZZygKG5Jm1LVS2UCfwWunkh6D7eNshnH9Yzsf2hh7sxGxW6XV7yNvdS6xGQmr39jrisjPn9aHp2p2",
  "key27": "2pvAyFsii8g7JiuSQuiweV79tMA6pmtfRzBmAjcH37LYkLBpBPhLZFoxKx3Zfv1HRegKs3TTdq1LFF12x1zJrQYc",
  "key28": "3vGbS7TJ63LRXo4rMCKp7xc5BE9YoZrTFb7hrR6DjSKdqfB6AqntxCU177NhcuRp1YEHZUpe5Lvb5aWa3ktzMZHs",
  "key29": "21LRgVHidiB8nC8DcgoQaMeDWF6f2pmSgFF61JQCbqWJXC8Sj58dcxwnJ48XRnsg7GqQYGTmC7TRh2pjGyVBAcqf",
  "key30": "3mDzr7aZ2n6WRCKhsSfAEP6zcVDcDojd2n9YHvFS44uPLHTN221T5HDBehCA3p3b4gtkKTcgPQtjhW2d285BUguS",
  "key31": "UnZ5bqCfHan1fd9U2kbt4wbZfMUb6927ZSWimuGFsbuwVE3DWTdNMzycUBdwP5ZBPkZYktaRodPyR1GSxzc8ut9",
  "key32": "4VmSGyLywkw1YGmzAZM947okCZx29NP3j4SAGRiA1bC72xkNUTU2j8aZwykwMaLiweQ5apKABxGao8qtotXspQyB",
  "key33": "2mYJV6vaLn71JMrnoeFpDmmkNHwmmxTz9vqA7EkHtnCAyYSjTwYbtcj2LmAiwhCySqoGJhUeC5gbvst4NpYfuzGT",
  "key34": "3vBnfHRocgyYWozV3b6GmdgWTVGYejdGLP1TB7SpBCpAWWGst34w3EqaXJ4QChJSE8QcZDUUJSMZUMqpdqjRGH9W",
  "key35": "4kDEGcHVmczxwG63gv9SnZwonFohUSof58EpJaSCwuCycmcQYnSBQBp36PApVAwMPrKzEVrqMgn3FhrZTgmzgfMr",
  "key36": "4CTsFyqTWpXvXbqUSBw6dLQybBF1YEKY6ipVkY2t8J5dYRhBMeUzCQBQd1WjHQvarxFP36L1NyWcRc9PkxLFsmCE",
  "key37": "4hwPPRgGVxbUiWzMAF6tkqBfdVvXRy4u1vUjGBnziMfhuxAeTAME1axUrnNYdNvZPjDchaCCSmxLmBS3SaKxuQY1",
  "key38": "4Q11ETPVuzdqMYRSaLBBVFDhFZZS9qpS93V8XPyP7T5fxffPHRFWnpnEqEBcdSQ9HPAPxc2ajJW7QU7yfaVGJ6uj",
  "key39": "2yeMU93Do9dgkaBf6ihRa1buwtYQHqvDAZHqYkBsqdaMPCPCi8wK6Jjw6bqSs7h2nqJF4sRStTz7KVvbqnuseGXd",
  "key40": "2MUgsUSAjdqPUkAN5LU7vjPrbnuLZVy3jFfRN4726MepPCtpGwCP9uG44Miw3T4mqtxBck4AzMTCQtgfz9CermH",
  "key41": "3qc63LLt3y2HsZt3LHMvot5n4dmgiLMR1TRR87VsTw4v5RqZ5xhgTcNNT3b6Fj3JS3LyCJPdn9xc7VJ59DwS9kii",
  "key42": "5rjt4SesJaZBBwjQVg6SbLw9SoZ3ofXgkGpoMd4kvUoKusPoKkoWGdxGya478bbUozm9QeMNE4MKXCXF9jLfXYBc",
  "key43": "3f5uP6ASNr1iQxbQSuL9wndfUNhZ6bEKesL98eeAPb9DoDR3mU6CG8CpwxreXUW7gynnz6NUZR2UupWV2X38tGMC",
  "key44": "5nPsZrCoZ1Ejf1QCFYtmkJQ293kyhERgHS6snbiC6NF1J39xyjR5b1y9uER5Napv6L4cH8kztDFqjMZ4FmXaZMc8"
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
