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
    "7vvemL5f46MNHAQ3Jyr83LS5WRvu771gzksVtbaSUTuAg3v2VS767yUac98Ci1wsN19GfVAd2qArUHSwdzitMR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HDCxKVHoVjqDfW1DoYkg2CDE27boJKtVDfL8KPwf99DECJH3MpANNJ9ejNLu539jzYF37AT6upvQtHNaSr8NBS4",
  "key1": "4KmRpmJKPJzQEF7c5FrzEuEMf2nH1EBKF3PWCqrTbHNznA3w7CZmMqEvJtU9vWJCtmbWhcoBrafYo2gZAgtXef5S",
  "key2": "3D9UU3HyxqsGzvhZKDnP7csXZSqJjQuBVqKzkZuPCGtsRp8XQ4kqy26GVPPCWHoeFVPCc479dNna2LAPoEMHDrPV",
  "key3": "4Kyp1rtj8tb5DRWhoKxPWsmKhUFbbbbYQkjoeepLkKbfvg1kR6uUMo1osT57xiR75ErLjHvcYmeKEJUzzJVE1Aju",
  "key4": "5MWQbF9wbYgjrH9gD5BZ2uuGKRQrUm8mafenuUhWN4si6GgKiMAjABcyp5BkdvgFu7bVVDwMdHqpgGj55RuvrfTd",
  "key5": "5FbFe7WrBY9k2FG9EJTahEsGy83jSVTWV4JHuhqhKT3EjDSxNUDHNHntqiD9r2PZcyLXAGYvmPWx7v8BVGqyq5AE",
  "key6": "3WrLyT36cR9n8GRyiVr2z4ytDii35yWn7XTeuspwJ8RpinQbniEZSjZhKMeomgAgT6wzK4tmUzt9RDxCskEASstB",
  "key7": "48HCVV8SUrEKh2x4iGhBjRNFZ65XryByDoVHHiFhCnEfbGNNSPaAfB7wrZ5R8LaTdbq7iY8oKQKVjjTDAK1wyPcY",
  "key8": "535bgZPFCXJSXPxmK3rJwsTqrS2h77KTVm6Ha4fVPhnxSeaAUxPv3quabjTawr5nYJmzJe9Wt9KGQAECd5JozM8K",
  "key9": "2m9c24hhgfQTyE1J8DUr29C8rKvVLLqPEFdVtVeZKr3Ajr6raRcptUqvhoLUSqhUmDzZJtJdaWBW3Ls1N4Su9wZR",
  "key10": "5zAhEGSAFd5MqRmdu1LGsgJZcrgfLMW3ruhV3dbAnFwJH37yvHNPHFw48kvu8yWQRSGsG5dNCr2NX6gevaVXhPeW",
  "key11": "56Pb15sCXvzEsWvyPcYY1koGechov9wVwQ7qjTUeadBsUKxs86SBJsCqfZ9pTmHTwx9PNeouffTkBTDuL3PzHi6h",
  "key12": "xqzcGBMc13CJWoNpZ362PtQqe91247aKWh3DjedTS1QVSh7ShVctnPkNrmAGDtaXqFQsc9bymEEdBXsHFLTShBj",
  "key13": "3wQTAKA1t3cYqaxeKoco91w5TuxgJngcrxzR3QAeXsfxtbhByRDBaaJPgVK6dEMY9EQtnGU8jhqMRs8H4d91tTZE",
  "key14": "2zYNBQZyHtRyWWqXnrQLt9G84MFxjQtmsmEYBNU8VzAoPhMA3qpL3ZNYMdpFzK4DzCcnarxq7Zt2Qn9XDTbzWZew",
  "key15": "2CjpPTm6ckfdAuRNZkkgbFCtECWEf3moe2KUvMSokjZNARkdoQbW14awmqC5N9cRwtYqKnrZzXk6CzK34v3Qoxjs",
  "key16": "5rr4NxPCDRZWEZb25AyddtCz38XTcFqindH67YEfcfGY9aXVv9CXoa99yKJq7eZM2eaApLhcte3zjgnwtxhf6ny9",
  "key17": "fhDiJA9gp5R9QTjkNGVh8CwuRrD5niaHhzc6SFvRtHgyomtMqS1Nm8TJqE71UB2obgJq4DekVYSjXnEV8E7nNdW",
  "key18": "oDADsffQ2SGXzA6J8pyFWri96dWkkip4swSXi27n3YD9agEHWnZFSzuSwiUSLAHVLQ6yxcKX71aTedjN9EVHTPN",
  "key19": "2d9z5rfZ49BAaj5xYNonSsNbEcxc2WaSJqgowF9DGwh22wbGxrXjMmg3mtukkaHpB5N3ZNksmHhAbgbmEdmCmYWi",
  "key20": "2arfGc6daNUvEDv5XtmmifyJq38CqS1XwCCbDteRh7hKb8AnB4VFh9AzELcvD4kfoTnsYv8oBPEcmswrdrvwYUCf",
  "key21": "2pfd1D1qiJbj4kr2Nsjsp6ipZfHJd1MQeo5CLZTJkWZy8W4nCiyA5NYtw4DvHNMB5BRi7naEhSsDj3RNUi1XX2zW",
  "key22": "5DTdQfW6YW14Y3ykPqWsypLpomWfUihxpQdd1ToeuD68oDu7MQaKSt9QcdNZfg3Py2GwxwtWBGayzpKRziZvW98c",
  "key23": "2BeFq4nDFvsQ3hwcBq6mQcFbzCq55yvA5mVJMpjMZHDpxqJxphj2U29yMTrWPw4Ck4qnDT2BR2K6c8r1jUHtcrRK",
  "key24": "57QEmTJMjMZfQLp73Dc112pjf9ok7SUYG5m5KLmMbytaWSh7NSDKPNDMyDXTDbeonkfKnYHTwTRpPsp1QmcBiCSN",
  "key25": "4fn4LjFj6tnU27CseuboPtADQf7yXNCfBgEMcihz8f7gDTmguGwqMsbHTKTS8qmyAyfXipdNouHY8WvPSXzfsagY",
  "key26": "3S6ft9fwPLZq5xXkvBhib293U471PABYkaP2EdzVGwkgAGadedaABsPQXftXwbZkGte9i3bj7zu6S3hjXPBiAHD7",
  "key27": "5wdEWGmQDbvq3SH4wFM5QFWC2Sgtt6iY5RDTLpK2g6SRAV2TJejQbaQguesJrSDdGtMeNjdbaCszQGn1h4Q3NYgF",
  "key28": "H6L8zYjK8jYXDTGFzxTSaec9M4tCBY84Dvrtu2gzc5uT9TMmFAPheHByo3CG1mUnTwqHYjpfJiktpiuUhBZvBsh",
  "key29": "Trb2r14uUcZJb8iEJp1PJo4ExHFfaWc7jtSv54q8dLnpbrAP6TsSTgLc2ucpDdVecpG5Z1iwpj9o1gRMuipJ4CJ",
  "key30": "4w5HNcjNF5vPt4gcLQ5mirpyYuVVqPtm9YUVFZjWNZV1aFphYwjA7tqEQb2vCCcr4RKuKVZRtptUo2X6zJ1ZRdUp",
  "key31": "31vnaaEwCCj967uYEQ9ZSQ6CVQRxjKUreuXcHJueEkWtfFpL6UuMTEqDq7tXa3fBjW35fuqGQmSfB3d2NkjJ7dZ1",
  "key32": "4SAZRGzaRxtxZUY8QQH6LK5K1EGwgnLmvANjhfmTBD24Pr8gsuDRVotoyBjVNFtisiuHPaqQv3pCP3AQUUS3uNme",
  "key33": "DaQZnYwYrtwsuiVhiQukPtZXuymXZ3CndcjC69yjuRwkUn6fg4ARv1BAVgkkD5vjBG6Mxk5ZG6XS75cbdjd7BW7",
  "key34": "p4z3rpxoCxUwPH9iTUNc6uSo6AgC7XzNGC3jHFY2W7ZhECW717uVy8oDuqLzEjB2gfMCtEBghDUtWyu6KA9Hk1g",
  "key35": "8szTYDWGyvhoDQftzNjPMZfoUsNjbbE58Ki1KU9fSPqdnmZAGQu12evhfTtofuBJSqTRhb67sZU7ZrGG2J9DGgD",
  "key36": "2nHa5UUCHSvrFLjg6XqRMLuNpFSdJEahqjPd3k6BUgWD422m25Ru7PenSWjUGbdcpJ5M9ratbiMophxQL8VnPjct",
  "key37": "3Wufgw3u3jCVVu3G2Rh8fN55vzTXo9zj1A7U1WdeNUVTf4dyyBuZEquUC6gmJLtfWjEvkHPMzQkpCYrXLvHbmzLo",
  "key38": "2N7wkkATqCTzX2viZb1676fpCLUgHXJGyUMH6uyYEt9r49tbAKaw8wDyw8M5EKj49GzfBVnPddyj6fBWctmKXVu2",
  "key39": "FvsMVqD5KFc9KWsMFwHm7RuU19Znn8fT7nAfxzkBf8xHVkP9a7d9tCvYWGFHJmt7cCBYjR9wFvCrJ63M5sfBAC8",
  "key40": "5TGQR1C84XDUvqKQbWHd6JmfPQf9VusA9F6KnKfC7PHJ6xm7x1c5Z1HBn7eJawaQXrAk4YzaBwn6jkdTj8bCTYAu",
  "key41": "3ThLRhgTGMqmqHFTFuxWou6M4Nm9uUxjKskVWg7c8K6FmFSGWdG4VJ1JM9tzBVmZ2mM15k2TCtbD8E1zvdUa9URc",
  "key42": "WQ2EDFwChFPDiJrbZZjoDRcvsdTSHkbsC3QTQZjTqYQ4CS3fMyGHBKxqRt9M6vgnN7JqnW1qJVRZ6kwLDyrmKsc",
  "key43": "5wRPW6c1eYtV4W1jFhmos3N9MY7Na64dNsGjrREhp68MABruogLzmMdmRBFpHNTupjZp5LXPTbDHnyfwS4HW8sVT",
  "key44": "kfffRKt6QpHDYgDwwNWLUeLvVJiV6NYQtvKx58PX255jv3xMRMVtBEX3EqidVNjCPVBAxd6SrU95nVPWrLGRERr",
  "key45": "26yLbaqDoi9e74sYpRcFqPYm2GqRDmucq39Bu6MdvfqLzL7Re2NiihYBs2w3pjBNHCYjdnWF6j936bPgA4kNguSQ"
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
