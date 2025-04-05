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
    "4UJfzuDPVf75ArAivF9g5cPewdbo6WdkZvKsKBsB3GF88kKBsXyryuxSDHzBgmdshsWkTKbD6HbaBy4ogs3oayv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iU81h4TMvRiEKFwobs48UcXCVZswopfELHdahBx78TwLozUPMcVAkGXtvJnGwzPSAvpwkE85No4timTQWSp2ePP",
  "key1": "4pyQQsAAUNTthwU3wLzYJZpo84KThDc6rXpqynjyiquFd1xw6r8hK6g4pRiNCd5RQFX9RfiseFGpviCD3k4Gj5qs",
  "key2": "3djnwDaD9fb16gFtSdh1WVnktcddcufzoVjJL2kyEa9UQZVACGN5HmUC5PJV9SEdmRpywdrUpT6FWM6HE2mKKhdQ",
  "key3": "4wQWv24QAk98gvwAAUZZdEr1qzkVVVH7ByaggYAe9dGMriDA89v35nMvNJQ5bZ2ZuH9yVGWDz4Pyf2Ver8dJfPR1",
  "key4": "B5CW18EHXL2C4AHqcKRdjBvZ4baGyX6f1HXaJGJKynjCQmH2CC1GiFzcdAGhUR8tVUt3y7XwdG9qBG456iZerLW",
  "key5": "2ojGxD3sreYgMswNTv4FKw8fE6MHTkhZsbH6puLvRjwCqUPYuoCoCsjfXCmjz3rDA36fsVyDbMsPWmTfrsf6pj1W",
  "key6": "3KkMjoVC7BrwRWbPiHShnyua2cko1efkYmdL1AK6MkmzBL69Mz5TDsWEan9JJhyr98329B8LsfsZ49w2MeFZpyFH",
  "key7": "4cXtNMns6BQEtcED329ZdmaTotpj51SQpY1DmK16MbYfabCMJVumxNf3TqXnKoWrBFXUWB8gVm5rSy31mr4tseQe",
  "key8": "123YUBPfPCvZmG9JUNqke1khwLwdTg3sJmefV2b5foHDEbPmNSSgKS87K7N5YjjH2BE1oS2e1rqmaRbSHxsVc73r",
  "key9": "4WgJLE4JPZLovyuy7cZcLLN2c8NLcQ4AHkfoV4Aw1s6vPi7UhbWG3vYq9QbxP155EhSTHVukUo5eXwciZNuQEiUM",
  "key10": "3vHGK3Xum8sSTukdQPc21gzTpnt62W6S1ZdHm5VExKaf2tcATmEeBQEQviznsoFa2KeQxVVWSTfiKFVYTxZx96gU",
  "key11": "3PtbAW1A6sZeNqEmH35jXnBqYYRY792TuRz4RSjC1NHjh4GLNNFWgz9txSL68xakTtQj4LQDbqd9S2P6tp8NjRJM",
  "key12": "fdLGtPqYTSWHE9UZxMi7QD1k2b6aE4AgbiyMyKVfFddFR4oVzuuUQLymArDcv7SCjR3Np4Wbn1SuTM7u7M3cSZC",
  "key13": "27dSWAF85PEUrxTtTnxKB8wLfYii6xfiZ2urfXLd5XnU1Bfxqh28KQzpkrRBoT9z2sEDT8vCjQwKNq16E1sLha2L",
  "key14": "4od9HKyYutFErvjtnSrhVBsUSU8cTR33qyr4dYBvvzaLsafTVBMpUPKbPu3BUztZkgzJ9c4Fjq3sTwdjBm54uDeL",
  "key15": "2JSpwsJrPX7KeULjUsvyPAocWRTAQjcsx3V9qwqMKD7UVG2zGMkmmaRHNH54cDMtadd4TpgGhMUbbG1we8jGk4h7",
  "key16": "62pwA4Leqq4LszM6t4Q1SucgNo2yxcuyYc6evFHhYZ5h3XJgT97zmSTND4n8PMnT7pYQuZCeEoejSizWDHb8yvds",
  "key17": "5chcvC5oyaW73zFnutMVWFQxdAKdqZeqWEYYe4zjxEGUYUi5HE73VJo8vA1ixp2AGfga1kBdag9cX7rZAgntahoj",
  "key18": "4fdwUH94NDcVxjri2Mg1t1WerPcfa3ePy4zRLZfkGbkL1Ekyzmo7n56JsioKQBhpYxpgtuQAbZxqtgHxSAXgvg72",
  "key19": "5TbzcTpu9Koq4vYzBB85peZPE9HgXPVW13w7Qr5KRbMSLScpYvGaoUCwwLYWaUkavR1ygLoSF61pxQmt3RLWKXGu",
  "key20": "4wZfcoNYxkViPzLHTuD9Kjkev1jis9kgGmLwMoFYcJTT3yyjRSykQPR9wQHs7grS6DJTouFL1BjwbQow3kmFF9Mu",
  "key21": "66oXXjDSrDLyUn8zHw5shLqEyndXVfdyBLhPkzbKRQyQPkxFfHZeWwtFv1Bjys67MSrxhk7BFju6gzhhf9FTug8n",
  "key22": "37yadqR58P9U567m4Mgqr33AU4VWtbJBYqZvdymFiZ374ah6myUtYoeotLXW5gFGS6nnq6WZQ9YPwivEPG95C4kw",
  "key23": "5ywbomWFyuRgEyvNxLSmRKwyesgJ9L9DJGAxYzBcXCNUQyNbzKbfy5M2irshXoQtKc28iZaib63BRjrqEruMa1Jv",
  "key24": "2775bAeP2nRSdw4KmTZtL7MgUBRxNb14UKxLwkdepnQA2HZ8N6jK4sVoYyM9RXsbedN1RRBYHT7Q3RyipQMu8tnu",
  "key25": "FMTV7NV75iBEi2zTW2VLbyehHgXq5BCwjFmmLDq1REM43vWpMMrXhcNSbWLHv4eLp9nMSikwuA9AbS6x37EVb32",
  "key26": "2MwkXpJJGqDKPQ2TKa2k1NnMaUVCVa7jhaMVJxXnBfmQVqCrjFcamgfkwTp7fTrUcBwQi1onPDCLzUkn9SGYerJ1",
  "key27": "5eyqQPzCuG2tgX7nEEephYhdhV73UYu8cCusXZ7s1hEwUFWz8QMtDWa7dPTPNaURDp7XwxprubnCbJRLjDqRjWkh",
  "key28": "4PQGg3Nxfsqwg42Lim4LSoLUpqyAtTfM4EXC2jzg9jKH3LrVUNjkmwk5rhoBKymiXY5UDyvwh8c914ALdix9hRjw",
  "key29": "52wZxVE3kmRsqpCUk3HFQjnZF7nZupxySqvGqK3wbvudTNEfR9tzDqmRzKicFZi3QkTopFFUcYPTqyz1od1rc8WK",
  "key30": "kgoRfNHEqKjExAgKTRdeRuNqUcGHBephma4pgi6hSP8PwrdxkmggKHhuJWmDYsX9CGPsSaLrveDpncuCF7PHa3P",
  "key31": "S3ZxtktzMyqUJ6nGh2L9B8eDjLZDWPTsZ7bf9Ga2xP9BdGEwBV2uDewNCszTXVaK3Ekbmh2JRMw9QXuJYsrKEQd",
  "key32": "3EHPAzSbbtBbaAoAWgZtrGnfsjnDaRANS5zFY5S2WCM24YJFpt5cKv6Rc1qqgeZ5HX9LqUBC1mJ2mCQkWBM6dgkU",
  "key33": "5pbpCrkmseW4Tu1WHLYZtiuELos3pGid6XmxnYGegKWw1tGVmHqxshcq9uy8b5urukK1CU6AxN3pQ4zczZooVm7T",
  "key34": "4dge1Gz7vkaLq9PTgUrtooRYhP7qVvyxoynHPY2jhp2wbExHFGcEuNuMT6Njs12F9Vb8i1LiErAxkn3TuQGHjuFS",
  "key35": "4iStQR2vCx3HzxQqBWRjjAUm6vaJUCMTNiGj3WSinAbpoeKQ8jXAjkxG2e8YG2eZgBwTSwXDs6DbfgDhWEtuzHq3",
  "key36": "5xVXqRCo8qFXHgpCpRZrhRcz7GQcHJKxLkfc1H8CSUQRprG9cgppve3BZ4nCDgYZgV3tvaVmM53T4MCf2W1xs3HQ",
  "key37": "4qqAHtyzVcfTv81sCUqDkxWkmg4u1eAwovM81LVWXxmsPNd5iMGEEBBvWrW8rBDtpcX3ts1PUvi9qHSWYZvhsY1i",
  "key38": "2J4j6Tz4q6ZkBJQowRJUjLzJvi5Hj4DhUd1xhhhYVuKjt4sH172GZxg2LwKrCZzk1hRuH3ixpZsy2hYjYdaatXDB"
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
