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
    "GUBKWgikdpZZvvrr7WAye4ptr97zb1MGpxYtrmJQYEzLMgNSBVh9xnUH9jofJ1mM2ZxJpbV1yWrr132feNFu8s1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sQrFfz3aQ1VnjcHraXptCdQbHY6BGLoMuK87DD8uicSkHjhrYVVnWoyAeh9sz1YzStB1Ye9XzDKkUo5qiMcryrt",
  "key1": "4GRsgXcApixJCupnUo9XZmjWEpML9YgUQxNTN8imPeqC1fELzYrZERBw7Q7TAKj7eHsYCgRjKfWwAJFijiRMag7P",
  "key2": "UqAkgEb6g92q13787MoekrDBEVmTvWaCynvK7rxkWRFt3XMNgDxmEokyrqaQReDgTE5ccEGkGyinxjkpinhcNd5",
  "key3": "5F8Ghqnrd5cMSHcEZtyhzhhJGQATPCAriVPz47tLWn6dLqTQ8LE8Lm65VRQeuv5K1QoH5TZrr7h6xHvm6Zeuhbkh",
  "key4": "49G61qDSaGE5TratMLMHwjbqB75K1951zuqH1gaRotdLeisgSnGVzg6LbioMoZceEpdzQR7yb1JsJqYEyHuF9xeE",
  "key5": "5qZc8xry4LNd5vF19RMBiePhHGSiNRYAmnfUtaE5w855fKTMp4aymCGTGHx66kMb2sKGJpyo8AF66uSNwGCRWLAW",
  "key6": "29GdegG3zZ1C5ZrS8eYC343V89aiG9pKJ3mn6GKD5mcy1jkthtWcvESW4sXVzgfbCiAzvq2xUvSS7Mwry4J6Zpj5",
  "key7": "2EKDZoy2bQrkb55fxAkEzgass4BwDq9uJsaV4vjKyXVuAWKB9DcdSaxgNYw7Ar4TYGH21Ahm3pN8ZsYrxsDt1hWM",
  "key8": "5ghsmBjWRhpwaM6bXrc1pxoRKemLyVgz9V5GsJDV7Qn2Ho8GMUmepmD9c7tsS5VkxCn5tBhKAcygEgJdAnNdSs3E",
  "key9": "4Xps3bfi5jZn3HBbRoDQrMZhyNKVjHXR5mntcTkDLnHjSMuJyVRb2JLKyM9zLCd1A497V9Uk4tKeXaSREqJhPsvy",
  "key10": "43csJZ4RXASG23yCgk5uxEvtU5rLMTYB6XTebq3M9gmSPvHJ3d2GFCVhpA9kXc8WHGhoTPvSPHMzNh5VWnEiam6f",
  "key11": "5FKKdaacAFTYA3NXw4oqRwhcHWszyRtBNx6pMuDMFJWetdyDQJurwdsneiWMunNLWhsQ9iWZVfUcNFdAoJbuq8tv",
  "key12": "3spq3McGu2XsVuuUMgWSSGUU7mN2SHwrzWutBpXNaTT5mF6gqNNsFc5nrnqectPyF3fYs2YYa4v53oUa4v2P2x6G",
  "key13": "4JKWVsNBBXnfBF5oXwoqZB4jB1Zizu9d7orW58ZfzUXxLhWhfbufZnJnSHwfLeG7PPBkjdhU9aMPVqjfhgeWFHc",
  "key14": "5DZsiA4cUgDmpCVqUZmzjgdyitHduGTt7b1HjawEACESB6217GUPG4yXoJCgSTiXWU5qPn8fAbXbJiQZDt488s1D",
  "key15": "5dXX8K8DPh2MVUD1Xy3kerMZu6EFDGGbb4EjwVUjA2c3N8TCX4ZCcj9BwNczQwKqqgenmSrMvFBpwZQSWDvZ2q2e",
  "key16": "2HvVn8NxmYVAzitsDxbytW3hQwvLj1uJDYueXitvzGafSC5L1zYvLvAptp9sjrhwbUtb7uftFsAREYh33TchcjjD",
  "key17": "38CKuwpzYEqrKTYhFyVvKvQFr12xEToscXNVaZ4hU4pTtg4REa9eFEfjkaCTauiyFRLc9ZeS42i1UFcQZ7HKPmsE",
  "key18": "4T7x8stzNKFhWb81U1mtApb574x5SwTqaVSGVHfgRokwoS4Kt8fjiMk5nYL2HaM3vhFLt2yu2QkR3fhuJpA5uisu",
  "key19": "4BYKz5hei5zBDqDdiUjvGjn3VzeG2PVshs8VtkUuCjSVuw4G7MeWs9tSw6X7y93wQUzhP6zkeA1gvsVkd6A5espn",
  "key20": "5SgD8qpbLR7YPLnyJyQZmFBAWtYuKWfXegVaZCtg9Qo75T4RJF9TmsMbSDwg6ceFqhHkB8ukzwsUeJ5dXvGA79Po",
  "key21": "3qqkpwswjiYDcNzDttbMTuYbGNgrAjQMEY6P3G8DPSYaFseUhCPnETf4qgcEojJkLRoogfVuvoHoqAiPAMxziK36",
  "key22": "3mR2GYFGttcNi1tMuw2FCH3w3BJ5qh9n2vyvUjR7K83J8btitUpPfokLzKnZzKa7y5xgFENxCQ4RB4bFn9AxRboi",
  "key23": "2rvbCJZyvyr78FQqCpdv8xVGkycEzHzyts2dLfTe86pPgt5WeRz5bAMredndN1vNnPKEMymxQvBCYXfspPr4pv5F",
  "key24": "65eFd8VvrAJExnmjjTwEbVqR9xNSaDoVAYrD8fC7qu7TovijrWuR78cSz9EVETXh2KEmaUSDb6mUj2YjdSGkGufP",
  "key25": "4w1kQJxh9D8kMdWy28iGAgdApHA1eo5aPS8WcQZZkkts1kVPjX6q8JA13bdSuaUwruCwrypZMRe6vLWaMqyhqnFF",
  "key26": "44ksxByxMVQTD7bhUNJV43BFyYsPNffPccic8TjeRo99oeULX1TR7V17YRZShsqacqmGe6cewoptmnCV41bmVtJ9",
  "key27": "5MxZQo7XvXfqM9fay8N47PLQ6qMKNoiT4jwMdTZYgZnnnbk8bbnwTZ8SHTgnnQJoQbZhLuFKHK1qHLCuvVP7ZzTe",
  "key28": "2avfxsaq9SRVpon1UFMEEPhtK9thKz15GtN4WMtmF4ST3NTmh7taQa2kxSaSNnqZM4tAfhQZSfJbMjFefBzwH2ju",
  "key29": "3tUm46vnXob8mb88dBW8ypNqZ6ZRANsnwxNXTPjqBZJNGf3yryMUqWVVzDMbm1R6GoAFrCZV9dGaAXzQYXttjJLA",
  "key30": "3SAdmdQU52HeYYzGkhxWP2F5YUYVNZFGGMGR3F6tuUofk6JjH6EvxUWXvMACvKDm1ZjM1vmpzMR3aTfjjkbHBqFi",
  "key31": "2TCEBoecGbtWkvxQbGBJYcd8NaMcpuQMMVSkPNfUZqHvzo3n7B43mEKCQX8f6qb9QginPQADDyX3kPLtZV76nWsR",
  "key32": "2j5VvX8QmkgX8wvq4GQDTJBnHpFLP3N8PZL75oQrzZVFLT1NL3HrJHJFvZg5ScW64v3bP9w9nbtsyLbFvzbBGoUt",
  "key33": "5dYHeAPKZWuzEHDwLM3WPkqTQ4a85rtSJbmuQqsYXPVat2PiogB6mBHiM6BsNqx5jQ24866c74pgcAUWs2cqQRDS",
  "key34": "3h6RXWrUuhaVmcT5PDo3a7tsAiDZevW14oxUrYAkgWtkrZUyVa9YZrY45MEkX1ru1u6M3oDhHFfrsfEoStM2feZ7",
  "key35": "3e8K9knaYrNNAx2KWg2meE7PFFREFyHeR2Ccui4Y8CMcvusdZwzgrFkHry6oEdfqt3P6MZBSB1JC5KwhS5gpeEor",
  "key36": "282evENCbvwWWhHWH2ALqc41jrTJKTPk8RSMNyRhf2rNJCqeMMKWQhS4nbbMwDQTzuogLM3W7tztDhQxFYducQVB",
  "key37": "5kx2Fi2dqFaucSMJ2BEifALoxtt3HMMYAxRNLsXRzcEonvJta6G2KrgExxWzTsK58uNYs2aMP3Pq8mcEXrQ2EP4h"
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
