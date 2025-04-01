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
    "AHQqMMkrWCFghgKzZV2BAknc5UMoVH7RdQCHNCBcZ1K96vjA8qW9ViX9bv5f5pfyemMenwCMjZfwPQ3SGdcXC2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3av4mqh6MBo64SR18Z6yMTz2D1eENrXG2toMEDGtnciFyxoJSTgDCjxrMDkxUo9PqYCXDMuY5V4hDDBkzw1v55jg",
  "key1": "38QQmFxCzFbLBYFNuMUFWRnxhYM1jxi91w86xtQ9ukzG2S6UT7FQwuA7HVgWs6U6Mpnxxm6c2Bqte3zcA5x88H7F",
  "key2": "25dBViZCq5GYRs8y2xgByfHEWJw4L4EJ6RYBWMxgpiJpP619Z5MHTAk7LPUK4v1mJB5wCb6S9m3thTffba2E6dN4",
  "key3": "2mf6U415uvcMKJDBDL9mAd1NWdsFfFdny3ws4uuFxgvvxhECuw73DzuKtyTMoVHQEv6RUYMEcRx2eDwxJ5TBqnep",
  "key4": "3jSoDBgSj3zyCA8Q3QsF5P5ErZqPcduju8uzvaXaUoyYPnFa3ULtT8Gd46uZjgiF964EgfZjxKjbhRuKUJkZYJnV",
  "key5": "4oQ9BYAsgbQX6wELwJM2cVU1dvy4ze7MK9PxYG4Yjz6HcxFp25D7rE4UfAfeZkcqX6dAg94hRzbdqgQWBEBHwT5k",
  "key6": "R3vbjCwFfS78MtmpDF53vE8TfQPsFt7Rzne44hMy2epXTgXxp74gvj52V9DDMhV1rbT3KCG5mXQFk29MpQgc6CT",
  "key7": "2PQiceDR4aCuVwuRJuz5RCqkN3qPxCzVBxVtKRV59Bt7fgPM2WUZSydYHfGsGinEgvZkvuoMBYHjrZcjA4ZuaNSq",
  "key8": "dcYku7NHHEYAtquRsfDPKvrwyfVw2QpFnCPCwAn3bs1doYABoHEBP6FJQzQFVJHjtGyxe4ndCncc4btD166FxR7",
  "key9": "4vfyCcBVEecekz1DxGT1XHPJ4A7vjdLKemvYnDhW21NKJfvEZKo9NBB1EgbYTMDKNydXeLGK6DnjuSgcoQHSos5k",
  "key10": "UrrEj6PygpnQeF9PzHKgaNQfvKf2RfXtdLFzyr8FCknL7Jhdp1ctWS9XTPLatFNsKkvrDcPxN8pBtMhB3jXfJPr",
  "key11": "62jdwXPtrqPZga6JowzX4Un23ZY6rW5tKRKf3Ac4W4QfAwqshYWG8J99buMhgjby3PrbCqb7fEQVKWnVoajDULKj",
  "key12": "55RU7wnMrvfDbt76bhk1vaLGYCxa6k2fxggAcwP3J2ZfHMeAv5b15bMq8zsuy4reuMV22pUBUSwfzhRGi2CVMbtx",
  "key13": "5SuTmjBDC7qFo6jWMCRexvT5x8gCSiTStnRUuMik2QKmtR7puzxwWNsYrcsDkrSWVpf2qDeD1KM87QybYgJn83Sb",
  "key14": "W6r1GcZtjfiTqFwiu4DeBiCnfj1njnwaHoUqP71R6u2f7pZgnVSkgHHtXaoXqYCkSe3peF3NZHZVsRadDBrFPVg",
  "key15": "hF8XCH9Q5siLsdiGK3jMeFEJjiDJoF24i9wTaQcTRzvGF7qnz22eq9gNAGUDxWKNp6iHqpMJbUne8Q9gELAuHej",
  "key16": "3VWDxjRhV1BH8tvQDarxGW4mCYcrAyvrYtGZkN2ywLNYBJ1Mi8zX1etfVwqDDxCC4KFnCQV7jY4ynUcLshbAAF4d",
  "key17": "4fgxa64PQXbzjmgedWEBg4zHf3B8284q3QqV1yVQQ5QANpfyQSS3qnwiCCgP7xxcBjqWQNCQa7uS9bedwQ6z6Sc4",
  "key18": "2efnDhvdipRCYH4YNEvNz9KA68G7n4V4EWptoHek1nY456RE83uB89K73CDBpn6obC6wqxX5XtxWBTexEHfij2J3",
  "key19": "4FbWFLN4JLHy62kxx1Px2itdS3sTiacAjUhYKEUiCdecKN2gmC9uYVPFSjbWG7BRBMNKnxbiVUis2yrfau3GD6We",
  "key20": "rbsZFUrbngvStpVaBmsEtbrcpQmRfMNMgDjJgUDKC6hiLSfeycm6a3WpFXmHHpV9GjYdze1N95Wwzy138HHyRDs",
  "key21": "5Fp4DhGiWqKgYXQfBtPZCFBwVht2b1zqz35nU4a1LJKmiY3m8u9DPaja7tH2ziJXcsPbePxMkm3ua67XTvK75dgE",
  "key22": "4JrPhemKjrCphZ6ZpqkwHP1MpatAeLCPaXqYE1tkmVhNwGgG1XVU5CfEBWKzjniDGRY1sykVTW8zCS8e9dWPPUX",
  "key23": "29kmBNB5qDmwMBtkZ356cjZocgNUBxrPuAPogYz8wj5WntdDS96YbZGEhYCf2QhZWhiinibz5g7Ff7HRKYA1WFHX",
  "key24": "3YFijfzXwvHvufXZ8ad9R8m4J5o9Ugo611mWKqDk1RVHq2c4Wwnftvrc6RnNwqSh7TuXq8wzh6JpBedvhddaKsYm",
  "key25": "2kz6x5HmZ4TqNPksD4NUxx2ek82qdMcsct8y9LAMy9VGq2DUhJZQjtUNafDG3iZiDoerqs1rN9qQmSQA8rBQ1nzG",
  "key26": "5qgpyNjtT1pVABVbCTt9AvYsbiSjadxK4Zpd9t6ocmiBS3a9Ho2nFqJncKKQDsGRD9vgqFKTNRetRMk9p6PccGxm",
  "key27": "2kKgLFYSokixVyVRPQfSAH4eEAPmGTPkJoWry1MUvpxQmfu6w7GKTgEnAAmEF2LCpAd9uLEZQBXkHRpGs2j7NMik",
  "key28": "fhJ1Q6BXTYUjFy8ubmEaANGovCnLArFym63DgFkNhh5AERmiT8AsrWd9h2XmgEsj7dvHsJaSQNZgoVXSfRbMfjg",
  "key29": "2KJfQZrQJuN8JX8NTqsGnkQRq4tqeqxQqonLZasrkYtTiUTXDTX74SpiMBAqaqBVSCvnvdcS3LkLLKNrnfUZmroP",
  "key30": "3TsCjnHj14TGy91FFTiRrdNkD7CJFvs4P2tT1kCvmASS91AhFQWseK9EdCZKXqZGouujvcyjiHvMsH412T17f7xp",
  "key31": "cTzHkzVbZQeKKRp7iV25jyeRkLaJdh3vmDJmhDmGfbZUoeD64mnNbvhKagk9w8TBzs1YDGdUyfcmuzU4XVnHFPP",
  "key32": "Ueh7QXhM3HKxpVsvouGjGXDFmUeFDQKM1dZYKVZrNagt7k1FNGcYBNqdVz78Jv5cwuUximTpr5vYtCvryWuJD6v",
  "key33": "4KAdYnHifKM4YCbNdyREzuPz8SQo7MD5QvdYd6zPL8mGcWkzZ578u1jMWQsPjYfcCsV6SBMSoMKNy7RwS6JX8Z99",
  "key34": "tbqkdRBGCS5cfezxL4QumqhfoTKMFM7GZ5VkW942qhieSonF23YWZyEiKzew3zfCMQpwTFFTRKcn7ETAvu4bahQ",
  "key35": "4t9cgkByZc7zvX29DvhtSZgBa49Rm6iFcVmSLEEesff37eoLiKk9nhx18NXwcZQjJVvHVjRtxsqXEWprn7z8Txui",
  "key36": "kiFkwTdZUhwNygnHsoVXtcxy9TQLVhTcnvAZ2X8Yt9jDqhrZkRF5kUt5Dg7gLJ43cK2QY7fU31oexVUPbuu7TJN",
  "key37": "5DibxT2TojLJhxbRSjA8EVrk4dGDWTjGyd4FeAJZT4U4AavE6NtoQx2hMdW5do95bPdNsfoy4zhmwb65xpUzaA3k",
  "key38": "2iFu97X6XMTjRiW2bfNpmMqji81GWKai4sqyLAzwwufJN7SL5UmWjENDJ7VWmzmmJHjE27Qzhy5ejRuLRNeDzzJd",
  "key39": "283jwZxBZM7Gry1u9eqBYPijKtDACzPwPB48CngDB2gkAREYY3Lr38zTdYNBsnztKBxDcLf6mpanksdobRdsdR6r",
  "key40": "YjKKj7CkEThe4H4qMhaRKC35ESxecRBi6NHTTWNL4VnXyjG9svHUMKFNynbEWyaGqBVQ4BDZTp3eb3nTApb4FLq",
  "key41": "2b8QXXdhhRLaruQd2NfxvrPcg7QQpQnxnadzEpKfr8CrEu84xukF42eGrJCCJsJdqgsdvshBLxRTQ4hm4eURmov6",
  "key42": "5wGypMcp7KdkzMpbjjv7LVB763d1EBP4UVhatSPPonv2tPjSidCvCWihHavPx1onJnG7pgRGsZ1hE9y4DcDgFNEr",
  "key43": "5G51usprmXo3EX4b6xfugwc3nvNoJGPyLnjPqMZ21SavgBAEr52DbhvXB98cnUZQFBeFqwPRyfLPP1H5PD8YsF6S",
  "key44": "4cDp8JPMmssRhMEtEZKp9XR4dYN486QcazkgAPK6iZZ45KscqesqwKJqsW2axNUTEHcChQ6eaWGRNtRF3WkuViBv",
  "key45": "5Nn9oiAhptLjjyfyBaMLFGukvnC7oaaNREuwgRFbBCHv4dmEgQVRxYYLR78h82SWHcxEF9Q4JH9raysVzhsPV5iD",
  "key46": "2R4V6PRgm4VezTAinKVGiWYGdcjY13ECbNzw6TQEqWiqdcLCiL1KyLaY7vj7QZDZzkoXTTG4q6pr3qt9mGzpHH5r",
  "key47": "4s7qK2mK6jnZEv2dcsGu7CoZbU8QL5tcKyVQyL4sFti2343DjR5gAJwd3c5F7kET3vgHPsSaMjXHw3KbVBjJb8Rk",
  "key48": "5gZ3W1Vsh241UqUyrLNbUnHR8TApFAaaXAryXeXa7VUhn9yiyfqT8vXFX1crJvQosLVMPVj9Jpkboyx2y8odLfkT"
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
