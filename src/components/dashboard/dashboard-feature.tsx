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
    "34nLKP2yUUKx5XMgnwKWF222aQL2bqSbktsZopGLC81VypBvzc5mFDTNKeHzEEmpzsfVaV5XPLvR5MceGGM1U2x9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zUqZE8WAgQW7gsWFM8C595SJ2QarUobwfoze25E1UPp1pTPHab6YGGbV24LFZGwMt6TYb1rqrnEqWiMfEVCqxfi",
  "key1": "5zsZnCqGvGswZUEmNUcGCge5NFc3L56agZBzz8Y6nkVT7JAZQ9mrfJrUEpRSrKvsn6zx2DEiNm7eEZ7Z8ygtyMvv",
  "key2": "4vL2pQs2ZRXD5V9LB8423msd8EdJN7FNh9ZMs74m3At8PMA4uxaYKzh1jM9VeMA2SrzyoTsEpVwdjzntw2itqZi9",
  "key3": "3pHYfWcar6JGeZzMnSFjnjtSox4Ew4rWrFXZ5WfLq6bE6ee8aiGeQgYJ1PZrNoUZBrxdZ6jPwxcQX4zsAPVqKkk1",
  "key4": "BYEeX32NpW4L5jYAmwXPdiRVFAgmmQHAJNrN8j6NGe4DybjtUHy1xyLFL2a3D8iXA8r3KweP3cfUZF72dcJFb9S",
  "key5": "2wLqbC4TAk759Z9b9sQz8WJJm69hc2q8gYXYkH5LsWru6NYwdTp8uQ8ty8R45gxM9nyBmWpyXSeYot1VLbvQJN4w",
  "key6": "tJAE546yXrwppb91ajBfbEiCq1yNhnD18zaSzPFCw32eGoFpbDSTejTyM5N5NfDpxC7HTL2TwjXavuTjifRvCXk",
  "key7": "yr4zGTxEPgrte2aJYEzPCdrBUueNTmZ35EcXvTmYTnWBoxKL8u63P8ncpaEuF7pySeJUSYjzrcbTkAEcxmLta8L",
  "key8": "3hYRLLZe4sojC8e8AZezak5aEEt3nSovgWNzMoTu5ydj7YUAhBaSm6hb367wDjA8K4doPCoRrxHnaHDS6CWGthXo",
  "key9": "3YFuRZSXSAWBRZvv45XVU7k9xWDA1aDvhQ1sVbgWJ6DBT4yq3Db3CNJUfNgY72JnScsawcTQiXJyiz2FQ8EmsznF",
  "key10": "2wQ9ceUXgTspXMEmnehKVWzdbxmWjqTsqPhuaTGH8Ao8Jdiau48yiUqpMifn8DYVG1DhXuSPwAiX14p2PH4sjq9L",
  "key11": "tMcornZirquKGkhwVM5nXFJzq5FB4MB8J7ME3c1uxkgY2S9xVJ8hLsFefMdMTzWr5ju72DispzpwwMiLNqsdppp",
  "key12": "3oThoyVGy4hNcxgvPQVREbDdRFAb1Q2zHjxb6i9V6bFHTRK1m5iZpiH6y69XseHmHk3BS3BkjiwZ2TYHrp9wZNGy",
  "key13": "2X9ukzUvrKoYX1JpDdVFxnxuin22to1jKjrii3UJChKxetq9hDUFe3qFXjWaVH36rZSG3g8w5ZfE56NhDaF7zvfu",
  "key14": "3w1cFiwoeet3QAoxDkdFeiUkc9p2yBbq6XKC1nHAdqf7AGbjkkWrEiEsNw3KSNR69Gdt9N2L4tfsek81atYYRTeL",
  "key15": "25xbahcF6Q9XDv4sqSbQjCGXDTEoxaybPAtS223jmZjfhatV28GL3jNRLBHrv5nJrM3cqzKR4W9sv68dxHXNDdFH",
  "key16": "9iRtpNQjEukMQTu1jx5gJP1iCD9xXSkrM43hZUT9EW9wnSfn1vzfNC2oq5a1a97vbMwgRN8LYZ6HxwU1cHfYn6m",
  "key17": "5LtQSqvPvLsee25pk4wvBLM3FP1BpuZUYW7FD5Sju4LKUf4mUhviq8RzKgpqrHEeKqtt73kxRix3mqCeQQzZE9mi",
  "key18": "5tShNXYTjKrezrucya6LgEvR8Sd3v3ZaLmPNv1ot22CaZYAgVn3dmsETcNwDE9g2SxXR42dpCQfVJwGyEC3NFXbe",
  "key19": "5Z8aZM5CjVNAAPeSXrLrAhgiXiUpd5vS6dCExXJceTE9fokjerCmUAphoCGiLXgP7bfMc2xrWfGLRvFgTmx9RZ5a",
  "key20": "2RLnU9xt9R4JRMKxSfgqG6brTpbtnxheh5uvQyb3dFi4f4Ex94BqGmQSWJJe6FVaYCEZ977N7MDji3sei34QGQph",
  "key21": "5FHrKTQLLGqDZfXYnBMFtwDHjrFkGpj6ee86FQeyn32cR7ajj9ZALT5n1BNNyjjPhr7xsyjAueNxhEZrP6rTBF1k",
  "key22": "Ccn26A1TaM5DG6j8rDqm7Xd3wJRxaKcLGULVFXhyYQgcAJw9MX7B3H8GQzv2syKNYzMp8LBL9uSSiR2hBEcrHP4",
  "key23": "5FWj3bvky2s3Dda8Mk28DCLux65QCuVGDC6hgjLoxKBccd1sVo8wfniyPkbuELYChJM36d2SmFRk5vDy1kgJX7mr",
  "key24": "u53EHY1S1Q2XSsAwEJhkPqoWrn5bVvpK223xMM9WCTa4mpWV6asomrroknoDtYZWweRc5fGaoayDbwVe3vMEKvj",
  "key25": "4GNQ7YC7irBuFFX3BydTGAhweGMsFkcziL7dXbrSwKDBa841Q4Gw9p398Zjz8wS8AP8FhpAe42TBj3dDNWyEf8pZ",
  "key26": "5F1v8jKNSVLEhkvBeo3nchPktuyX4Y584dzSsDgxKCpv5yLUnCwF1DLehVey35Shx6itmVUmYkVh3muP2spy62ny",
  "key27": "LwfYXhjSNwZ3Vjezv1YhGhoXZCsLQJfEAL5WuZWmcb2Yzhf9u73NukQjwSX9HvQML96kdrjWdqpH4CiPco7G3yZ",
  "key28": "3yThraNzQ6ZeB2YPn9YCy4aRRxDZoDtQoqZwrgKELAJ2n8HfKqAKJuSDZbXPw9vWFKGdrrVSXxL4zxwLd19WTk57",
  "key29": "5q2XJnPMLxr4yHQhVrjj9Kgdq981ynQKnVx5XWWa21Wnjyq4gB5RaKZD9TTPNZCYeqhM3pHbBgq4dzCEnTwxRs4G",
  "key30": "4cJqpnBw8rxetjVQ6XyUcH2SaMwpvfKmiFc9Vz2N1nSD4W4TVJv7VW46goCYx3QtY1AR2QzrL6tsdR2qE4Qv3k7S",
  "key31": "2LxMXkGT94R6NyjxEx7bLnW5vfTNgE9UsX9AZHpKbCtbqGN5XbCuM2Zwc3XBiRnn2EFMw5AHBbthc5ucroagG8vy",
  "key32": "5xoPsLsxu4cAbZMjKxs6BZdwHqApPWPxU632DyRqzYvEWn7qeXZCqh5jvb4CTP7R5xDmzLVS5YTzW7nrUvRnAoKq",
  "key33": "5TaX9aYZa6GFGkEmx5EuK2ZNmNaAs7wQQHU3vnD1TNY3zJ1C8BZw5HA4YbV4ujh3JBHm4WJswD1WEDsJCMN4Kpa4",
  "key34": "WdGkQbuuQW5m1yU5FPSqHFrU8rckpX8BGMWJWSy6J4q8SAgSTTUUEkMjBqvs9Ttj87S1otbYnGGJbgWunMJcAo2",
  "key35": "yzBTdsJBETcqeVSpgkJNQtW9ZPHu6kkqCWidJkD5ycNEnoLQKmRyr9MjKn4pFqnoTddaSa65WnBgFvVAgVGHoBM",
  "key36": "hiBbDWZ4DJGx6UnjAkzWQFGvomhavEFiVPddGJfMZHhjUk2pvZdX1pU1JqPFzB7zr8Hq1ofCt7a7TBgobBDWsgT",
  "key37": "2WNFxHVqe1RdADboeTHKW9muaXMVnnshQsj7wfq352DSP3FYAzumDfj8KpYBDKRs1VKEkSre1wMGmhA8Q1zcmyyA",
  "key38": "ChcE3N3xfRAfPAG8io9iTh9vUzUumprbmRQhfaZKWMXQyEXwhk2y5iMmoE1qNkBnXSJcsky1CeqBEKvk9xU6X82",
  "key39": "4Cb9Y1ofw77RhJHeEtkpVKSxKBYUZ6Jn7hHrU9aug3CAXa4tXJbX4X2b3SxwX1VJY95feTEyemyHswESquFUVbzS",
  "key40": "4Dy8pG7Wn5wUEHxZHHUYg7YDJX1TzRgApVK4tv9DfKsQ1vbXSWtbHgRTKM2VQEhAeFw43dsw2VdTT4FzGo3qipTB",
  "key41": "4NcCaES8d3JAfkVq7v5TdZ6XHHcAJpRKgUcmsRqyzs11qdyS9ayzyRhj3t8kmAaEcvvuqpPzpyFbcZ52g3ixXvCJ",
  "key42": "3Q44vg4aJw8REvKdEurDZ3S2Y7ZqeezfSfnhYZo7ZCgjALnYfQiwG1rNRvQaoXVjCC2ypNYYqtvPevt6ZiPpPQQS",
  "key43": "vgYuVHtSeMoRBZzVrss4eTFUBv7UDvCWZGdnRz5LfbTjHnb2De7GARZVSkqU3aYc2QPwQnH4qs2HEW4avjd69KN"
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
