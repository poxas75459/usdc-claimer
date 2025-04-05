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
    "5nmEMsJLiH8WFUVbESpvERwxKmqNCFcRGkM2SWmsqBpHnMmfUNujhRwxBBGDpPodP23M4gjyq6hYWBR2sHqbzXDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gEZSW9D7rbo7cJeTf7GT1hXfjpcpQakJHZwAMjmJYdNfzbaSNvRVPbVKa3YzgD3R1G9GG1wq4oPDzk1EJWsbu25",
  "key1": "3YiZfz1pQR44eA9P4zTB73ArgrWTg77vbr8GpFumpX63oq5vQgZuvii8ETRwQrjamXRcKBEGkYHAHNo9KvsxcX5T",
  "key2": "7SfeRqUT22jPsBMmhFLeudLN7aSZ9U3vc6fnhjQjYFG3XZfvZ7Y7u5DwFC9gaKTVDQW3WrXn3r8PtyDYzuXqNsK",
  "key3": "3P3vKU1kSj6W8ybqZTfsPDaYgV1TBrWhEhnHN2XuSDyy5CDCtFjxrp8XVGCe2MrUJJSBP4eMBJFSTG7BYY5ZzCfE",
  "key4": "3tTe7o6fhvURGWNxCJVFH8G77T1VTMXGH96h3sA8P4MxrhzCv7ufnaNJK75YmbkxWvWsBEztfp8RD4TtpJdCwtnc",
  "key5": "4xheoziFxaM9F8tBzPqd7FEGLcwh49f85MQ7D8QTE7u7nMfW8E7dk4QHP3FmG4fTJorRNsCk1YRBbm4crkWLjX7o",
  "key6": "449KG65h5kq8eW4cDNLGy8ddoyS3CJnQSoAyTwV66bdmkHWaRrFjoBWC26e3spffBr3ncvCSaWaCcykfkQKafBT4",
  "key7": "3TmNHPjnuKuPQQtwiQyniPDYSkrYLDyhrpiL9ZsVu6wqnaGFN9MUTk7hYVD9GL2ASS1vK7iwoWYEdoHtNBWd9KPz",
  "key8": "5TNaq7H4RFE65LuFeDS8oFsPxwMBjLwiWHSk8NB9DopFcmaDWUNcRWUW43FLqpkYap1Xq5NBxCEs7faWfqQssnXe",
  "key9": "5TJLCcdi4vKgP2aLyiJYzEUcdN6GKxRpXZaCYa7yLsBsNMH29XcVKC4dXeVEjDPCL6idDyv8bCsMsJpeJm1Z8jF",
  "key10": "4WGaxqgHhgfF21HxadgxT3X7466eKbxP5nRRrAGkGpP7VwD7PoqjmdyNyiFjijkjeSNxzmMe1SFKZvZpUJETVwPA",
  "key11": "3i8YscSMYNYtRRyDvMhVbG74Jn3v6xXJe7Jr4zpkX12YhXEoxD7fsbE4u8oTLiu9R8UkioAG5XqNoiWr4KVP2zC9",
  "key12": "2HuKJmtKpFLtK1GsmHACFn48Xd9hqnrFyq5MTMprBQrLY2cxKdhYGnAZ5RKiwQpU9GVBEgZFWjDQdhneiEa5b11X",
  "key13": "2kZz8M1KSugH8NTxRx5NCVWAe7D7nYZmp9CXX3uTeQqzfchjbCZWthsrzSqCLN2V7PXrCRq9w1f1x7CMeMyGYn1K",
  "key14": "4Qug22V5wLD5sN6wHohgB6rr1ELjEWEjqTwogV94mGbxYj7n7mRLdJhYsEHdBgHxhQQ97k3cFkrZnkTyNfhMTGUT",
  "key15": "3qJ6p1aYwn9aR5NiBwok9UM7X1Q637mnnmH6m6WZxxRjhftZ8rncpGremVDfc82UHShHEmTkagHUdXg6qgvdDbzt",
  "key16": "4yTkSharBMtriBf5wzC9N1UHxpURXMWhQNrRFkJDFSkWvqSALMuj2duWZmWvk4W2reNJgtmceQMVBbk4HocHUp1n",
  "key17": "47TsyrD8yyffSVovfb3nvPmMMxXN8ASoHzASUqSWqQRrquZKBEbQEgf2pqvtcidbQ599BE5zGveewjNnBXTwPYWM",
  "key18": "4T3DfsnLqCjQMoeg8kmtsSRST9h5rZq3Xnf4TazLrsSm2xQN4qpcc54CqdHFomzyw6nScBoqBozboAxL59AbLL6C",
  "key19": "29NV9uPUMZkTC9g7kxaAo3NY8GNkYQBv6Hy2rf68kpiHHceq7jpri1S26gjhaxvtZSJFUcuWa6adPGkK3G7ciQaN",
  "key20": "ZzrBnKc4hSkhpNZz4r4fDQr9nsZ4atxQL69YHp1LRhsnn6EMVmkpy5cRJbmwsXXptH8GDLYTTptXxy1rBfyDwUx",
  "key21": "4Vrq6vbz9KhPAvJi4KHs8bx1eC8RrtsLMFGQ6eqyA3BQcxN3B8bBGBr6KPj4t6u6ydFfaVZfa4QTqKatwiAAbgYP",
  "key22": "3L8rdPuXftAd2Wnurv6PQTGrE1nbYoaLZxj1yjmGMiFdQq9SR8vGBUNybcUUfq1qWGy7nrjZQ6Y1zcFziEKTPLbT",
  "key23": "E9drh47MKFgyavgtygRUzoZVX9rYC6ovmrrVoisSKrPTDxHjK6Geojz95iAH3TEbkCAiVWbz18J4GJACgjybauW",
  "key24": "4yojb2iBHosSmvXQ5zHhMJVyQ5uzw1Zt1vJQKNfVBexH3HiDU5minqsbbUAn4zh5GPAXsoVwcXnW839o3r5tjeku",
  "key25": "21eJDPWDusKffnanS2c3kVQdLDty9e9pBQmCYdxJEYgP578jrz64uSyRLbKNJXQDnJ8Mv1B9fyAUwYqNk6wrUH6P",
  "key26": "38VbGpCieixMgUqaZuxg4iJqzfgougZct3pq29dgNNrG8GkZsB8tmsf7A9TUxCujFYdKeDGSa7uk7Mo6SPZTw5Qu",
  "key27": "21DZLBXzfh3TDgwvMWj9hRzKwm2YnSxFoii96QhhqH1RayaH79T5RAZjxmhFGbXc43GKRYLsLrZ9KEYhpQYJ8Lo8",
  "key28": "2uEWwqsFf6H5sWL6J24Dn4zz73NTBihFDHHJbihujsgJqMTVJ5JDJa7wUAF15WuY12WgBtmSNp3gBVZWANPvye5Q",
  "key29": "2oJdtJM578aQ5nyRfD34k5sFs9dS4FDET3cJ66KYoyA9vh1TRwSwmZqCsLauyfBjvNeUUth9qwtWpKEed6kGtoBL",
  "key30": "3v5hLjyMRG1vbCSfxPTmYNLbLaLgxkr3jLGpnwjzRJY9TPgJtfXXU12cg822YGbLSrECcGNH1C4oqTvbZ84oJpcU",
  "key31": "oxtNgUfhvpVdJqq69hF46fmLx6h43kDxRH9aUSMgRxjuiS4ht8vKWyXpbxnk58xqiTWY6pJy1Sgg7WXi54wiwKN",
  "key32": "4JsvjMZY7qMG2FLmBAE7wRgrcz2y2QiECPk3LYHhKPqEMKm6UM7kR9uhDuoff5zee1XVADEFafwdcmx5TPJR3zbE",
  "key33": "PhHk7wyuWvHSmne4dNFto5Ns3JzUnCUu5sTKCUkGq8PUhZfHDEbws4jxZm2vZ6su7t9v4kNY2ynaB8LHvDYXHAJ",
  "key34": "3bQx5rfaoNrAH61wKNHCbHiMVci8KdC2s9LP1L7HGGuVtsdKTCqQma7RJwgHBR7JKSkwvh1omrCNL33uA9t8ii7X",
  "key35": "KYpAaCpjdrwBBdvwuYRpYpp45LNDk8Sm2kHVXzNyo78DpBFTS9gCZqx9dx7yFURtqSrDqGZ1YCe7ZPMSA8s9GWr",
  "key36": "2snXj4ZVp6VSmU5YenT4Wpw37oaSKNdaLauRnYxyFQjE1CLgsr9opSRs3a3sCnzmXgqLV5fjnbuAvnx4yKY4wcL1",
  "key37": "5UnRxrwH25d9129dRXN5y8HeJZ7aqvoB4vr1ydQvCwKgomTSfiMbNfsHY5C2o7B8YKvRWLCKX9DceAdexwks6LMg",
  "key38": "4MBJtVHmfCaCTPMu3FcpMSWV9Gm4kRSvQXEnXxBqKWm9FhkG6LvmfvpbMh8j4Vsuq18awfy1zsKHA8xGRcF3wNUk",
  "key39": "4nuecjAresewbo9dTnPAN5p9wZcioF7EUg1A6FxjUVhxVEW7D8XK2xWWcEPD1DbpPDCowUwPtt9uEjSeLXC7xaYP",
  "key40": "fi5oRfJgxN9XxTuHqCYpD6oxBZMfeuRLiWWG8vBzALavGzggmbuZfmfBESDfv34KUCZD8dVFsj4ENugrQsWuMj5",
  "key41": "5gMsstNUfdnRfZxL5G2MTnKf2ABfXnUqag5DsStGyMQ1cJQCuXYWHvNEMW7tHFJ1oeBy3WkUE6VLrX9SVMFzBko3",
  "key42": "46DNuTnjxn4SwHofgoDUG4RMA2tNoZVrG2fUVaDTRceUYwEN7sNvaQoykyeYCXtmwnCVcgDjPLManUvQsX7Ljbzc"
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
