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
    "41xmpSJ6byrLK1ZdWaMKyv1ALJk9QbVhj1i2CepBBUhLADP5sFjU29FV42DhTWvV35RqmbdieN9d7rxj1dBxfNj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XpiwBbH7wuHuK9a5hMn7ArtE3jTfMnRtbBUFZPLjKPMYjszT6cjy56BmRz3v9NVXtMuvdmgcLNVZkba7yBr43dh",
  "key1": "35o85zDtTEz6dpdArAYngbXG11vEMqv18a4ActmFuvr74Upp3Eb744m5XXa9KE9fUV25oExAZymJ8qjKUxZSBGBM",
  "key2": "3FM9bKeKPnmavCipDKyiVPSHgskcCbiAGkZ5RLWBHHu8YQatsaTBddPqZERHFZHrBbbJDfE1makq5tJRJeC4UmHW",
  "key3": "3N6FHSkkohJsGzsJMJTLk1wzG337Yj64KHnRWpLfHbdgyETAkVd2MMDvow315eEyzEEwGuBqTAGPWWiHuDVuGoJa",
  "key4": "ZStcmkjfVH5DZXxNLYznmb4uWx6CeBxqQwS6bf6dexPQHrbLt5Wm3UtVxfKV99yeSz1wMBGVv8X5Jj5Adc54g2B",
  "key5": "3HmPN7XPeF8rZfKzpCH9233NEhv1RMAVH8FrY2aWjTwfA9Ai6Qfa3UBnczhJoKwcB4TA958LUWVPAbwT1DjXtJaq",
  "key6": "3YNsTjQJ1EJwHatq6e4uiMNvBprb4HBHDfazmZkfCQn4rhr8SfhT312JjsGMCit2Mv8wXj6m5wrKg7aV4L3MHrST",
  "key7": "5k3iLJkRrNvyAFhfM4FDVxDd2scR2HGKXKmTEdjsnYJCCtZwyquSjMYDdhsKRGvVkE6wftgguxJ3b3AdUHJSyvbK",
  "key8": "3UVUVm7HcHuxCpCGB223Ux975Ltb4s7BPBnxaqsJUmvuk76DzDe6MZHzybgaBBCJhDyPRxqXxUvvJ16uUm1seyR8",
  "key9": "4DCvsNEHWZNus7AaehJJrXF2iSRvQUjEX9Wwd6JqZwVDQ1JXoFxbjYSweqF3MjnAFot6JHx8zyggF6Q5MHRWNDh8",
  "key10": "4ss6ts3wX5ZvxqkeW9yVDYn5nYhoKg1AT6kTPiL1Q7RQKRtzXf7kYnRSvz1gXVMBzHGWgeH9JvGnDVZpaJr8GSrE",
  "key11": "2ktRjF8wn1Gkucf6wvXdXGzZsvuLSN1rwmQHFUQ43F3pqbwDZQBEydmX8FZvTs2rFz5PbPBPgCjgDbELSQqJzdjN",
  "key12": "5YXpoSURYYpzdo9WX4JU36GHzpVT9uxpjMt3e5SuHzBSYQKqAmXcRsNV9i33tRXHasYCjUowhfP3MV3kvu7a2YVi",
  "key13": "2ft4rvZnEHAa1isUjKtqSx237UcCrdenGkhVu7kpY1j4yKMfbss9AkjvCEW39G49T8xpQaizKgRtzgXK8xy9rCuq",
  "key14": "jSpaQbXYf16zGxDBAP6T4ezbAkPpxXAeQkqLZ1LVjw8UscW8eETgJh4u7ncAwcetkGj5iAJ4jp4CvpVnWdGxojk",
  "key15": "3WybTGp3Wsm46b1pxXUQgfgsB83qLD3g1op1kLjqNbhXJuvWkCDEz1PhxTpJhCz1PtJNRNXxg4ZyfMknQ8voWz4n",
  "key16": "3CZ7J7PxX7Wj6i7xaFRi44LsviSK43hi8FTqvVi7tyDAU5ACFPTcWn2U4QycxZ8GnZp9tGXUCDdwNxphrft6JUKe",
  "key17": "4zrpnEQujrhQ6vYws5Dh43PsNY7HeQkhTuzapBvg98xckieHRWXewDJHkxSKzq51bYpqUqMwGuMoYSvDLBrdRukL",
  "key18": "2zqGkxnQ1dGLzYGwohKsrJR2pUjDkXkwdEhhFZZeoTnY8hmR6yw4ha96HSVmosrbf41utEEAUZC7wuTovBmwHhCn",
  "key19": "34NFyvkCMx6U2iJJNc6f4maSWayFSkPjf3nGXKU3jd1jXg7JcADcvZFVdjjEXP3ztSTg57qiWYrGvXbgZjexD67h",
  "key20": "5iXmhCjJZtNG7Pp34mWN8zPSAdDSsPJaCSXacL9XoCAjukb56DvJS2K7JpSgUJxHPyQDN92gYSTG6f5zoCThx6DR",
  "key21": "4ZagWfnkH881tV3YXE19cjubBkhPZo4NwSk4yr95RwcZEwdZSabCpa7kaCW1EbwRE5memE5rmpnW85hzvZEzVrsT",
  "key22": "31napKbS1efZAazg5yAVuX2utJyUsr7xhoNV2xDSgJ216w7WqXzvpE2qRW7aX1DL4G8AjGouMGyFxAe1ncC4b1r5",
  "key23": "66d4btcfMfucFCiWPEb1hE32ox6TgUDjXePwwu5hPqRJRRmao1sMFh47vq3pXJkDwzqXwgmb5NtoPePq6o4LjinT",
  "key24": "6NQSEpcjDsRwhrtmCKNKuXdFCHwqZdMX57kYcNRjBjSngD6z6EdvJH1vHTBNxSS3KsgxNew1PoEsPrA7bT5tMnP",
  "key25": "2UgudjzF5MJbS29VLywr9vB5i7vjHAAXThVBo2EzpUfyNbxeD5csuDPS71udCKKNMzGvd2kpu8KiJwCZzrPqk6XM",
  "key26": "3uYWF4ogHrSQYhGXn9B1rUTD8rg3Ke8HGViStY8bjWAmWafsDZGWtGYDH6pHb54ri1xmatmJpE6Smw61FuhscBC4",
  "key27": "qWhjNWCgxNewKDgvkDn4SaNnpjpYGe3YMeb5odtVCG25WsjekBBjNjd2CWRBNN8vC3SigQeydZ34mDZVju2j3RA",
  "key28": "4fdRoUPLsfbcTAhWVpwRvUXVRznX98T3wkGGGnM6HHL2rS5JixnkaUXKCQX17BjpJAgKdxZQEN6KfQHob1vqdnXe",
  "key29": "4DDvZxdQk4kie2Zb56bQW8sbZCZHuvkB8f7fiWT5UEQikqmf1Lir8ofYvLnSuYDpxSkDsx2uGrD6YcGyrAfmKKzi",
  "key30": "2XrsBoe8gQiwywSARHNMh3ET5vpqSGtYJGJXi83XWoNN1vcpWYMXHc3evBpmuP7TywXAycZAevjWCgR3Xv5NDnVC",
  "key31": "3P2VyqB97NFNeJojFod981SKFd3guN2krBKexPHskNb48qjBfjrpt25gDwAZmq8JhbLEL8nyJJWG7Je5euRduAzZ",
  "key32": "5WNguq951LdayXgtJ5XqhLaAEoMWV7ZteRU8HeVgDDRwv4wwNEwhBt16AyJpoMdCAaEE4d6NYt4Q5fVWCuhpNWMK",
  "key33": "3UtCDYbaaNL2EzbfbmorfGBbdtTNdHhBQk4FbPy6KY9anLZzhriYJPUwXPKXD7Bea2Jy6p8vB21sqBVShQeXSM8G",
  "key34": "4ry4i3GKqRX31xHJHH43AvTcy8ikpXfwe2TE53fxfK79VMsavqKPCjcNw5KYLdKzvpg9wZjzvoEP5dRzg9e5qX5q",
  "key35": "WaWER8EMiHyvnj188p2gSyMAa2CYQayaRFVVwHrt3myf775JcHc5DG1Ek4wfs62inEyjFxyExhuiNPJu4f1aQSE",
  "key36": "36HfB4pvMiLYDCkRKHVQfNgL2CfyA7bikJZQCTnJGcTzNy8nubSAsUNLNzBU8tzCmHrmnKMthjPYgeHjkNTVbwT6",
  "key37": "2KWUdGqMaYKPN48WssshUWkyV8CXNDYhjJVL9EKya1BGJpEpkSiaNgWRXZdYzCmW2ktw1QD7ZWPr5Jdj2NnhcRwf",
  "key38": "5GAoAuTPEbarwtovvSmk3NAV5B4mA34axWhq9B1uCvXj7qCJc8RMuzcZzfyTQ1ZtN6MEmLdctCMgu72UvZtaMGdH",
  "key39": "2fjp1LjTfxFdkyZQsoqhcy1Uzk5N2mqAPq1HcmDHThfoay3dJtmw5VpHMEioS12xLWqLMSAqrsq4AHGvfC2FQQrB",
  "key40": "4XTvjm7jfNLGSQdpcNJKSnSqff2PGSqnY4WzernnAotny7xJnM7G1MCMYkg37WSYcnLFPxZS6b1e3SE1b81rfoj4"
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
