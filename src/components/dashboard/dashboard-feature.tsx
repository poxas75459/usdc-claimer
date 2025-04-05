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
    "J7Ww9EEapLbnjicwe4ACFVuKxQ5LyPUfMzUgDmX9rcXvGLnX5N9bgoC2LKLQqG7Timsw37beArdsFxsc1vhutyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ywxEqqpcTdHysr64r12Bwk8u53huU3yXTDFsZNJ4mmV9Likuwe81UnataANMhCbaqhqW4MBjDerLdqzSeLDuqT",
  "key1": "gwonBcRDKE154rw1p7WjmUMG7BUetrruZvCUnu7BBZyjkWFCy1P1jxyFvwbWxdT1idoKiHLKVRyfJm49PTtDmhz",
  "key2": "5NysUXFcQJ2gu5Q8iXEUJvFjyBoq2bkPuww8xRoxnmp1BZbH8UV1xLdVJNeL8QkFZR2f749PyBoKoBE6wNBHKyLD",
  "key3": "3TmWErhAWapU6QAMWkw5g1tgDhVwSvUmFQTrFSox5y3SWsoUqJxzd33UJ3dbY4Xz8bVjFG5FJ5BfRA5xXMRLkNJL",
  "key4": "63AsWkBxPsbCKpEBS8h2oDHW2w1ncxiQejV2qHcceXUkP23gobEX65YoyDHZb7k84CfvbqspsvQrkKCABgnX4hjZ",
  "key5": "3jYmYYpwzH6Yg8Ame312vJRiq6p3VR2mNXMZZHqD7peVmYambj72ZXDX2j2jUoZKu5dfvbRSod4tXsWnWKKRybsj",
  "key6": "sUnLFeJUTKWu96WABH6xyxNB6DGQQ8FvjUe2LoWRtrGo8GRyHK5h5HXvTRnY1atrkqmZVzESZ89fRJSoGaVNm32",
  "key7": "3sdjicno3jsA7pGfeQFU5emN3WUSzNhs1ACPVcaJc2sMe5Pz3nvKY7vHjRHYkF3vGmp386ZUcPqPGYWk8de2u2cW",
  "key8": "xauSmWUaKmKrT9pgmgJs34ohSbzQEUuaDP8k8e4chP5ipw1hhJTym88iz9YMNqwYpZRZxMFJzEEaL2wvZ7ymd98",
  "key9": "3Wzp9kW4J1CCStWgjjLYV37abQuGut5APkNMTMuF9KwSvNi4pssickcrjxKqQp7gJPH2wj77WDCZJjCG1B9daKdi",
  "key10": "6c1C7xS2gku2yyKAg82yTzAb7XceWvDt67NFXeMVUmwYvuwGfBgo4STPzUazFt5ydJnH2ePKB4CfSBPu3JwGgMi",
  "key11": "P8U75hT6P8BGHNB6MnGwjzXWxkw22nd9w9mD5WzARjXRRJJuemeNDRZX5ixytnimbjrjxmwXnExNHkcFoH6ChBW",
  "key12": "LKehHQCRtVzkNbvNCixwBxEyzHRwtW58vbkYmzc6kH2Ttej6a5safRxvYwaqQx2AkJ1wDYGtfrEWrDqPXGQ7YrT",
  "key13": "FuMJ7otCgENQxXNV1pGwaRdFF4DVvM2SUgyWkbwutLgb9hNAf8FVccfecJ5cNmF6i33TAKCWzet3t31Np2KcwxV",
  "key14": "5kijtfEHh5qxCBbK6Rg2o2YzarcQbcFRG5JLVYye4A9ZKaQsktiZxvhCuTGnxiU6thkUHCEe4NFEVM6KhBqFUsc9",
  "key15": "37MuzPToocCZdFs2PirDMYMxUu2SrUjmtuLKjpcCiTGQCnT6mnBYWzsL4KKLEXJyAzGpJn4Cz67ZYnpVE4QwbxXq",
  "key16": "FhKJd3PRZgtcpftsK6iLCtCHZCYkCWcWZuvz9G6yP9Ag3Fp5ACen2kf4xu6mzS1m27CwJCkvZcSRAVKAfnfujuG",
  "key17": "2d2iSHAKG7uokPBhNbP6r3Af7UDoCj4VV39vhcvrFrHJWMdh8s66i51SYyW16aiuUeebttp4SdjFfcrXkzkMVqZ9",
  "key18": "2eidvngYRTd7bHSjKxjXHfvoppDoz4jn884W9PBmAzEvq94twruDVzsyH1jXfpwBvnByf8c5Nw47NFpejn45zr1b",
  "key19": "4gDxwcg1Nuu1oB7TcrDkGpbSoud4he4K9GPXsLMZdr6tVm2jT14uWsk3Mvppu23u8R9vvKWJ9hnrE1rDJS9232Pp",
  "key20": "2zBQsHAxxSgBmBe4VXdiuwC5dTQRwRha3XAhp5P3s3ZoVaXkFPDUR9oMu6VtGk8mNmS42MZaVU6zLANDVLLjnu7w",
  "key21": "61TLJMhep8zk3KPAxzyVBEXANLstQWw5Qxy5pXf2xL7VUnkmNfybBbAZGLUP91GYWjScLrtk14ZTetKNr3nASGhx",
  "key22": "5EyFQ2MvYUcREFfCm7gTEUoDaDRv2MhjP7C2uUjeoUkzBooHvQ4Y6gEEvo6GaP3FwUSoqgJcHmntxwtxVJC1ZsMS",
  "key23": "c7uUUsEMZ7tGxqGgNkaxGtLDyEJJGQdL81WDGoCp4Uv2LwXdKFLdYvEoRWr6gfhGw6Pmu1ftKEYY32XNVajP2zc",
  "key24": "5RzB8qBD3bnXFKxCDKWtkdBG9rfbMFWppsFrQ34jMFCpgSo44KErFeAPjSFFRDpoYiACDcjT2NmcHkQxGL7RMhVD",
  "key25": "4fpZkhU5qoCUKr1xcrDiy5SEosaYZVgsipBm2CrC41QrNsf3ynyo7iXLKwrTQMtc6jmP6eWhBXinpZK2FLib8we8",
  "key26": "63ig7X6TZnWAcao3uoui8GeoJSjWrKtEeGbJ923XWebHgYM4esJQ5VD3KGaEE6Q3hGuBdceFdpovzQwxvXipuAYy",
  "key27": "2DSKvNnTzU2bVzfCefpiesk8jSVq7LB9ezSvWXdota7ei7k4ZezgkURGiWoYyjtPjipZFXywSPEpmapmfYP3HSeY",
  "key28": "4NKRbaz3mAn5HxJPHVjv3B2eLkJghksXgqDqcMF6GiWKd6UQsrx7dJppvtFGwFHb7fzxFDwnLQ13b5okzHyfXrdg",
  "key29": "5cGGcahxXkBS9x3mDuPT9Wdq6DAbQhCP4QkJAytoiaxQvRzDczkViAewLNkwQu9R8wUXZBUwoxiRsdeBWkkgmgmB",
  "key30": "5Yr6YfzJVPmrJ5B6DaTz2H8eyQQ8g1cjvEZfuboppsjF5xuVfmQqCdxjsimx9oDDMSMsRmWuLDyHDp2SKkEyPxmD",
  "key31": "5uTTr339KwpQeMD3GtvMTVgPcBgC3RGhQjGCF4XTWi3JhAER3fHupHnLFhb2dFbDKDAXNeWn22T3c7sprwFhNpgu",
  "key32": "4VnQjWH6eirbSYv9eGiSzvci6qNLoes9MV8Z3e9eq55rbP1fCL3XBYEqFEvPBZKMEQZzKcELqMbmSjZPxVUPUPwR",
  "key33": "67cGJrZtLefcW5fNKgoHn9rQAjQqrWN6CNvWk5NgYs8oYtAakvn9KYpPRjLFhQ5gLYWzXhXAoJLkhBSTg9MmEwmy",
  "key34": "4B8LvZFd7mACcperFUDJNg6TmKYfxDARomGv6GYFduD1D3mg4Aguf3yvGvbhi72CQDWUB7sKgXPm71MXvVtFnTdN",
  "key35": "4aQmCXGg271rbEP3qUv32jfh4LD3HVWyr4MZTZ3iHbw3SwYUscqGDjQZSp7ogYH62FZCdJcd7jGyxySkvJE7QPpY",
  "key36": "3WveZh8Gkq1dgGzifzPHxi9AR7DFXa4ZpDL5tFeXKH4K4ZU5uGSgNZwznnqWKV73dwEeP182Q3XBig8gV9CmjqGU",
  "key37": "4hQNEXUKp8oMhEj7sQkCDDT7R9vjckW7XotysAQkumeBaW7tbLjsvyZCwvn5rh3uEyRpCABzmQdDjM1pXNkh3KS3",
  "key38": "541pye4HwyqjWuE4NGLGG7bSb58FLZrSccJawZaWfCLiEA1p8tAZ4bZxcjuUneQBVcpUVZsHACxLEQqj78kmL8Lb",
  "key39": "31G7SfPDj4vc8V5mNPRtEQ8UsU6VeDcdRHD6pC4DNmj2w4pUTzc9ww2kxkiadKJMThTnkxpyfKLGQ6yAaqY65w8Q",
  "key40": "3DYGvEH3BvhczABLjWzdxcVdBdmnxMsYi8oTGRecSUV8yEt3h2bMt87zZ9WhgX2Qye2x4aavLkJBpRDQpxZPxHw3"
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
