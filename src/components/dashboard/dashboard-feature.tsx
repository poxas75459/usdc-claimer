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
    "3uUXwiqfUk44S6UbjLbGVhcENZHmp3cYkz6YPDs1hw4XtbKPVBpt5TMEVHRBRtHGYoevN19G1hmW2QXwButUWuSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UeJ7rMdWK3Tv5op1UBErXt2XdE7pMbvXAF9nffE4NsgdxRuuEYiNuJ2DcHCMw97Fq9B2YM6SjxHTMc9QdsCh6gY",
  "key1": "2bwEUCFncAiWYZSXi6vfhjM4up49E7K6mUrho3LndF2xBFptMPyQSu67RWNoqRcgQmXcuxFmoFzet8he6xu2VLLt",
  "key2": "51NGHSHW1AveDG3xbtGZRWKqH4V8rLy1G6e6HuuRHM5nLNbPjjmrc5WnfXquBw1wpRtrwbuN6zvzzv8bPXQuuwiU",
  "key3": "3jDCtGoxWfCL1JdH62mP7fuV1EUtnugfaTB5H7491daNGSDwGZgNiVtPqH3yVDL5EHpH1YjSpmoCtodqSWRYCiGG",
  "key4": "4p7H5VLgrhJzA2i6k8ntM5aweboNCvVE35jzAyUAtNHKRANKdQCohvUgqoPQiMwyoMBx2BBm33KWfMm9tn8ZPyyy",
  "key5": "43WGwZeQ5raVVRhShLK3wzFGoGQCKDuBbYvsnzHaxR9wjCtv3mnXQHSxAyPrC5LyQh39bgnuLY5o29cRrQqP1LaN",
  "key6": "4ZaeTTrXz8kbo3ABdfq7vqMkJW5LfTAshuLijmNRCPKnn6BTP7iK18GDT51bBdmk3BeuiwbSNNfmzyEBYwwWFKyf",
  "key7": "VpAdcuHwLamne5ogCJQ78frMkmFr4v6xK1AaQBS9qEaexXh4fUikd9frMpHXtxGgTq8KdEZHU57kMwDya7ChNgw",
  "key8": "2wrwz1zoZhU2NGrZUjmKGzp9EhoBqxQPhwPxuB2fN28iKmPsWUoqyWoGgWWjSnQstGe3BBdSvVWzve55FQ8pomUQ",
  "key9": "gEeFjNqZ5smVtjphEKVR7dqp1eR9FvUbtfFC3Joa6n5L8vQBJJVBUXxX1EAJ4bXaguMn6etkhUe9cLW1RWxhP8g",
  "key10": "29kwmwENipCKZQrg8y5fUJnkXSFhsZWGCT76J2trNe95pSVcCkqVp997RpP175qr3jQeowYaRV9yWzMNhji6k3Bm",
  "key11": "4tYezCpGrc2fawpwLnvGg8et42Yd5nvBaHW6nadXccGPJ4vYGV979vf7pg5hCanBMvVV5nazTcMfupihMeeYJJHY",
  "key12": "2b1QVWMfBxixouZH2cVwxBF2tWbd4fBGpvrMbYx54mi7avQBphEfxG1dPcx6NAktEYxFgsPj7anWrhSfKp9mDevq",
  "key13": "2Kag3iHJkW7jQ83wdJnNEVfbs1Ps4zTNA1C4Xh2QHckWmZbUd2itR7visEAYS5qWqEyLe3yUhnV82Wu5KVr4AMxX",
  "key14": "2y9jZSuo7Gwj62azD5r5ByoMa8s8UdEvq1XqV7UVdd2DzhHcXTyatfJtmq5zD5JWKKa2tTuy2joHiKKKst2exDaJ",
  "key15": "7JyiNCtpcBYvRWBhEEdzxPkBqDQNVW95ZS6Xj3LtdCrUzvW7i5Wkh5Qe7iVb6vrgJg4JgKVRdGcfmEi8DUuh3JR",
  "key16": "3o7MBEmXt5m9tuTYeVp5SMXnMGboJ2zxTquMxmJargyLMR72B6MMxo7oy7MCiSAk1wAzMiF3HJKiqGPY3gZycNnk",
  "key17": "4uQnFYrYPw9gnHtTMtoskvbuGaQCoqMaZbzEcmkNMBnFs5JmaYdHGDGKpXEqgb7yRfmdtNxJVxL8DvsknNhKyPfp",
  "key18": "5vbtk7bVA1L28ZGyLA17ww6jV41BjzCTnSDDdkHj35QixGHphDeaYqwYTGt4yGU2Umd33cbLdWtZyyYMtQ6oqkJF",
  "key19": "2KSN6HJn8W799dJoEddSa11J3VjevRaE9BFb6bJbAK6cMKf6pYnGGnWvr1q4Uy6ZSmwNkr1m91TLTCSHVfoaJYPm",
  "key20": "1CraK2d5sWx2WasPf8tcPXDUsjERRkRpwcD2jxmQp6VcPZeojHgFVYPrAQEcC5Du1hXQ4iCePGeeoCsdZ2SSzPM",
  "key21": "2FgRYVGUFN8XEeRKZYpLke2fGdasdd6oF9mJksPQoWXuMyi38tN673jNnaoQQjfBmyZGEvKbbdRSaN1Qvbxred6R",
  "key22": "3QGCzZJSJHsAocT7CTbvf3hY1FK3jKMNnUiH6x6xEvBdAt1P49KqMHzaN2VuaVaaAfmFbxzoRqx6pm1LEKW7KKQo",
  "key23": "29eZDkEEqQkDdbq6trGpVUHdebrRUp3WvvtaMDJkEW5NzWg8di5g1XnhrCFxnJsThrAbRZmJbXt5qdpcBbaZGajT",
  "key24": "5rq9yV5Q7vZcngt3LWufAJKwnsY3oBe3YQGGstPtL8bpACqbhhwDWsyB8KaRfgkJe87YwSCbbTvhbK8venNMyder",
  "key25": "5i96NJ4oKsqaWdG8A4eBerqgF9mPrPTkzxPZEm11YuyBeHSvcTka3YWPBuVDYUw6vArhNg3pCsewhB4SwMgRnqAW",
  "key26": "5gCuZkbvTCHbyTPVaXLjqhHaE5yfwDHqGSrBhRofc1MUnqRRprLA6DM1WH2g7t2HjJGfBsNuRhgbWiC33BzLdad9",
  "key27": "3TXRPwwnNqvTBQ3Tdm9LyeJDLsyYBrAA5NCMc6wznsn3fV6wehBubuYj2SVTpAeuFXU7YNvkmVoa8sZYWnABbj8N",
  "key28": "2wArtJw8c3G9n4faU6woJXKuzeKpNLWGTBbHvnsfG2uH8VUQpppPGqeU6Lmp9Pq1ocHDP1xWxfgatJq3mqptGskB",
  "key29": "2338RqkRBFy2yY3kTL4AoepV76vKMy9oJDhYoMh78bgCfE5aGTj3rggf8A6HnRwZfj5Vy5YCMuvqi2KGDC7CLyTJ",
  "key30": "2MRrxv3zREXZA6rzf461X6Mrp1GMHrSKR1N9ihpWkHFcR84nUyMCScnnSQAC8jupK4yhSDarSYwyJLBZdywnkHCx",
  "key31": "4yjgi53zem4hpS5C7tF7k8wHgAxF3yzK96QzRnzddZQraGE6sEMxiNydCDuSn5LLQq5oyvynxd1TnZWhsyj7pcJ6",
  "key32": "56aM927esVF1k8qPQS7qTDVQtN6Fbx4ZmN1rcb6H218SyChPQqsRQHxzUfxSwFD9c1WtJsjnTvpVaGhVaPzL9kdW",
  "key33": "hVuXc7eDTkteFDwLKK1vt7GWQbJfuUKiXG3jTLAWgwmmyNUqMoUF9aXN7BcveDp2Fbe6SrvyfDP9wE2XVkpANva",
  "key34": "5xxjiYgr8oQ7HQg3LtEruajYzdrF6kqT1uKvijeZSArYYmqbiBq3uoEoU8UqdyfxUhyjuQsuA6cWKDjqqxyDb9iX",
  "key35": "LqLJiZGZcC8c3ZzzHgUoMxRsiT5YvrW2a1pSgsZp15gWQjMa4mcy4UYTt4XpShkPdM14PfLPYCJWvXxvHosrYXj"
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
