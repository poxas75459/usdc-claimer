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
    "3HaRTfQdtiaUkHVyFBonr4xmeXFqkXjtgV8XzmGTKGVr5L7eueuxygwapVoarnSaTRjaHUd8wSvB6YQTKu3TH3U8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zL6XpKp4VWNxUSFUdqZJng5fsMWV33tvnRd6STYScREvfJ3EFyFKVCZ6nyP2d4QvA38TwzGss1g6EY8bj8iL8Zg",
  "key1": "4LTwTfWMw8R7YEZpPtQzZPGgA7KETUcH39FVZtJJUAusUQJQmmmApFBQrS4yaNzu6GUctkvWzjcfVBUPtcfJdnCM",
  "key2": "37LJBTbvgqW9DqUpg1yzfPcFQgMhkWoyX7dmJ2Z4KUndxRaHCgV9G3HgvarrEqfE4gGntC9Ybs2WnFoz8PxDT8Zu",
  "key3": "FgAuhX4uJsaHsZ5EKa2fFziiSJqSbRseYZKRzRmMsG4TfJ5nmi1Pzz3GYJdwerJWPX5UK5u1UgseJBxFrBYrRV6",
  "key4": "4mXFp9A9ivT1KTxJv2tNW6ZbKeN5pEmBiyBgc9wYyBC9bRNMSPsRWvdkNkX2Kt5GUdNZ9ADwkFShMLfnPdKptuun",
  "key5": "3UcU1B34F7TtXjWM1ycFSTAExUkN4J351fXAwZSWATv8rieqEmpffxLdUGFiApCqFWXhdHjwJKcZkh3pMP19Wi8t",
  "key6": "4e2WK7A3ZU9v7HEbDPDkq8HYeN8vfiDecQafiAL5hZ1vr4B3d3pVyArRrRMMzeJVjqfPWMRZmfxb6iAWHsmvcZny",
  "key7": "3p6KgNLmNvNTsxC2xDhdYU9EqGmJYF4WDvKAqXRAD9p46HdZE3ScN5KyuFB7NPfQsxaUSGy6xgaNYfCxEwFy2aTD",
  "key8": "3SLZkSWHTnc45BF2M6y7uqrND8FYZ4jWrA13N8ig6acsSzdg8GTQ9wjDbaSfda1UfoY3aLzjFsFUV7Q3VvcbzcQA",
  "key9": "2ZTMHA8cc4oAVDHVEwfRUDDLDi7WViFHNCo2V5sshV9B5vPJswLtLUBGTaZjbwZR31izYwvBaRrbFQkdG21X4oXG",
  "key10": "3mvJ9AF6wQUcy2oPNtUEoAHuhgcQVn5LgvgKzZDRmBk1sVndcNojWYJDZxdqTLoiekNdgDEycq4whC6HwghHn84J",
  "key11": "3BbmV1NMK7Mc6sfdaL1wZMU7U2YkB1xqoWwKzU5MPMtt55hs8yTHs536i8FzB5MM7x1LweT8799wfNkd3NhNx2vf",
  "key12": "zNesD2p4iTKRqCwmRKmFqJcnVjAMKqeKWKpN333smAPYxmnhjWMFLf458gtfBVMrUAXFwAo2ERVSWj7cbvMHoF7",
  "key13": "2ov4bTYGEhRLjuoKabEmLNvzXnmztaTkRkPkd6tA8USnN5QRPWU653ieEQNx5ev75x9u4wUb95nH9vbVEBiWGWH",
  "key14": "4i3HBE3FRTPFmUBNdJULw1Jm6HiUCdBijamtH5M7Fs2QkjL3LsUv65TdDE8xeikW7hBGtWeqHdFaSLfnLfJ1qgjb",
  "key15": "hhUsUWQiG8VajZyVoyunmBvVU6jvKV3oQoN15C2fdkx4S6ZZ6t3QRFdioYjYkDB4wBvWWugU1xu5vHjUGT6Ser4",
  "key16": "2wBASgZRxzpM62fkvdPfXMjUFJ2TKw1Vh12bv1MFZnZwmLRqjy6WxY79mxgftq4qQjcG3biEJSdtPn4dNPP5tSkH",
  "key17": "2G2XdRHA1GrUzuBX5YQnpsGzLUsHsKjhcMjZwfVWubUKLy6jZdPAFqULXZ7CA7capVxbg8DQW12Rq12fYFCmrNzJ",
  "key18": "4yZFwk6GL4KY737wG6oHBrNRnEa9YEoLjMGkkxnEPQjyVhnFFUf9TJ8am6cyYg1wNrox26Ath5vxXsY8D1MUQb26",
  "key19": "55ENU4DjrteGjNTg7UA5U8givWJHKVhmWXdS1n5KkVMonAssrRnjtxYbXXiUdQUTec1XiVtfQn7nCqXYsYAtCi2C",
  "key20": "5HZ4G8Wh858RZGTGDQJdqFtLPfLn6Z7pK4xKiAYfrDoUeodQdfBNL7zk4fEMmXcXe25tqjvn9Qvq3waeMgNEbNLz",
  "key21": "3ATAhWfGXtRmng9Pb18A4zGSgNHD3fpCL8K9dXUe6mWWE6xZsxSvw4F63wB7eU4KcERFE33EwWkk8HBb5hUTkrTe",
  "key22": "61SKGPc8tYnAjCP9i6ny4K1PyKFBNcZrdVcYi4EYYJfh8Tj9RPHCrYuz9YoywiQqkJ15cQooUtkBjUsfvtZoVx35",
  "key23": "W1D75WdWi1MGhWSPbTR2f9k8idDsbq9FMmC2Z6WtVoDJJSBfL8fN7jmXdDZ6SF31HByHWudMKq6nz9U7u1SXsEq",
  "key24": "3gNCQzM2gmsrfALbYwZu82bwdAtcPwVEUNrXZGpRLSmGB7DhgeRqtkE5WAXy7wGfigmuXerR1vXXB1472ojxHZ75",
  "key25": "2Ksgk8bqH5xbqSBjNF5Peqyjyv7EhAVxfGwjRR2xXn2ozgWe15YPNPw4nk5U6kxTSDzwjX83T72f43qLiMTis7Dd",
  "key26": "4PS4RYttG5VK6dSbk8HtJiWTFZe5czLoJhWZxfuLprM9m1Kmbjeh47ZzuiwfmVxFoEMVzpSMs8FdVHcf9tNyMXHm",
  "key27": "4HWWQBEMB7ZbnKCEqiAtSwwKJ2QEo5WtY5fiL3YqhzJuK7UzXaVteuAGKs5tVXUoAme2x9cwnMNbBtjhFGPC5LiG",
  "key28": "3yUUKae2LuVHDEgH6W5gGjNnuVWdThXBxWBBSCA4qopSYJ3EwJYUk95i4RANmtPHTrCYtSitcDByasfsg6YMCv38",
  "key29": "41DmEVor8Guy9qFnibvkAmNWCVtxRx7cvb4pnJqHhXC2KDG7Vu5LM6FBiiK436UkhAiohLLKBBnt1kfJjsJo4xok",
  "key30": "2cDe1xRt1FwTkSTrWxM5q1GvvoHnkbh9XimdCrpVmAhW5rREwqQDD3bXsHTaq8eaQ8YAh8QzwFXq5kKkydypwQXv",
  "key31": "4UhmVjjszKH4qCG7acapPEJoUjAyJwM6KprQaewAQPMM44hE7aXevLwXrDCgbY2vDFMxLMBzQU5KvEhK94d7fZqN",
  "key32": "gWup5nJ2MKPTforN1vts9P3HduxSHfQvYUYQ7Liu4CiScxhUZ5GnPyED3zNrtq2rG7bxUzGethm3TVstwt2yYnY",
  "key33": "5yRGvTEJSsaC7WztKvJqxLKFXu5DbNWJzDADmkLxsJdFsEAXadxS8NwLov4ui65APXpJ6QSu7ipcz4nk1ss9DSDK",
  "key34": "5UEHL1S5srFEDxYQDDeyN2YnpWc78qLB1nehNgJASbLTP1ohuCEW6Ab5aRYFTZanzor6CzodqDHMxQVrhqRYW5JF",
  "key35": "4fRuRstvzkMkxoxhjuT6Crn41Zb582uQU8DMoDWUYAVB8QC9LWntqHf6Kw2PDCA4sU7HM8QWUnadYUPctfaLxBj6",
  "key36": "Me9QJVD3zpJJRFE8RyvA7XLELqhQ3CgEzocQ1P7dxAsJAZLDWdfTMzLJiwex4L6mH3C2u7geYjbA1N3KZJn5cB5",
  "key37": "5mtEN9b2Rp4fhtmXYBCMj8QfLZT4c2hAv4nToryjQwP2u4J16Xn6Y813oqdEn6CNhKr14mYRcHJ3kJjFDBUR336R",
  "key38": "nuD6L6oUrLJvdpBMknzgMxvyohCf12wfLwnT95PBFosS3nc2zzSxNRhpjbDj9xx3ftC6vmv6uCZcFSKyQTxXJCx",
  "key39": "3YpN8B73UQm7itCSfA4xy2mZeWomVqdUoZizu3HLjwnxUwDnSHJhoSSEYKkgfMdFKgGRFncZ8CtECrUTBWvFZYPi",
  "key40": "5yTBAuoB3u4TvFdY2ByoekHdqysyjZKdFGJHy98V6k4ytX1BkN8uGtqq9jpqbutKGt6U9Ur5yQmnBpQNmZmYZUf2",
  "key41": "5KYECWwnS9vvnsVuNt1oXSq671qbjKZq4bfF1PeJnAw7stUKNLg6eqRrp9wvLzvS5FXKMsafHbXUfemPjPcemHP",
  "key42": "4Cr2ZU9bvbHvVmi4gDNSQR1ekiP9k2S5atnf2RdVngDJsj7aZrHLzeVM1iSusyHfLXTrBsTjUgUWgGfFgHMVEgiV",
  "key43": "26Dr4Kgz4oYCABMNXPyvzoC496sRC5UVCd8UTQuXico1Sy3jvUs7k2Q2LU65yKdBDJubHv3e2p7RhusgEJt4YxJT",
  "key44": "3ytk1FhdZBb9ftuh89GJG3haZVneGfDhB4cxm1jyPbxmF3JiGWrMX44y2KUkB5dSBz2QQkCscUQTBcPoZdq6dGBM",
  "key45": "W1Rv6svWuZL8kJCJEk4cRHT7hwUsujTMPVZPLerVjVHA2zCoV7KmkSqXgFdqLfQQ8aTj2Wp8BQoif82iHHMYXRn",
  "key46": "4d11rFwqo3CsJU7vnpc5suWXSRt9Z6UGwLqijGExf1XNf3WddnjjLTFeepeYbszZShAQUMDPvu5xnTic6N6bZ9cG",
  "key47": "2E3dXqiKfVvhWfmUUZnFT7adMbAbfBzt9QUwK1KUp3Lt2SgaPwP8Z6iouqJkDGxoYKu2Jski9TLozsrp64hJQXqP"
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
