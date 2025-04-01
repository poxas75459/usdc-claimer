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
    "5n2WA9CWq32GZdLfRe6JL6SFphjYb4N86C9LrA6RhwohS28S1hkbtvSGd9F6P8tWSbPNhRAjUurMXNwynMwzXnmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vWzpFQpUm553c2HLn3mJadj3tf5e8Yh8aYZEevxjECBTnY6y2cNYmdrqJaPUmDqUbNdsLBxnadDZGXTpjvqb7mX",
  "key1": "3XKNLjXzEY2cHAcs38cRbo5218qdEFQm621TFvmmra9kfZjPid3AbpGCwvKMxP87EPZR2Pdfni2cAESXXFqHYxqA",
  "key2": "5c5e7maYP615D3TGUigjYQeSfPmXc7RwNpo9PGsu1xhcVbkTp3hq8XCvmG8GabLQyEVRGKFcF5nTE84U7AiDZW7J",
  "key3": "4n1d36jbPJFeQYkNniySxry7933zNSrqD1LR1i9aL4X7YbSDcMJ6AgPyYZoyGz7e5eiy7fMdfaKgsZjzMV6uXS1X",
  "key4": "2LJZ7if2C2zUiC5AFC7s1rndD3g8pHZw6tAqEQvPhYYWR8VXmF3kDY57Bgaa8voFdHfpMYy6iPoNkv8UjrpZQYqx",
  "key5": "59EEHTcZdFcrwhLsNygomPsDTFtBzCRj2qHJ4JxMNamhX1X6ximQ82ZxYzY9TF793XC1mzWiLvSHsYmCFXry8WSa",
  "key6": "3cpypcAkgTMots9PG736KMLnJupeLuc2cLRaovoFahvhPuDnv5ruDFyRzLE4Vr7kDUUwHaEHqUbvNyHzYmgEqNqp",
  "key7": "2pctHdZgvdfac1ndSHQAZ89RsJVkXo9ajgQrn5TACcnRK2CzWWFDJKK7wFvSJ3jeGVqgGWy2mPKRknBieYZupQEp",
  "key8": "bmn6STt8ay9jM98Q7hHPLt17ujzBsQCdNUKJELiwxTzenz421qCd58QiU9YKniELM2njN4dvt1fNFG96hGoCAbi",
  "key9": "5isYLTrT7dXaWF723r8yVC22DKn814MTgfSM9ru9Q93fngLEnkNC6FFob2kbqYLzqndnB7g5NGgxsoH3rWeMiM9",
  "key10": "4DStPB443Rcjh4ecpZwVgXfJaLitrpzmwYWCL937vJutNgx3WnR59Kiv6DKHhEXCHDr1rVH46n2HcyA2iA8UgMFD",
  "key11": "5Q2zFuCRDbAotgBDwccqA7rkMKkiTeEALRF6mxiVDwptNrXFmEFt8F7ekYLcyBhK3LRGTe1iEsC1PVH8Gipwcacb",
  "key12": "2j6nr8sfMWg7Qdi7d38DqHrPWu7g1C2iev9v99Z9VdNcKRFoP3oriMDa43hzyzXzygeytVKBW4oTSHHo19xyasP9",
  "key13": "dki8JjgqZyAwySkfg4yE4Q22XcLgtAMQh5Bxjjx2UQXaq2YkuGb1HoygwEsBwzNQi31gFSg39yBKkGJe5QN36yX",
  "key14": "3Pi3QL2p21E8sKVAFibhmBoH2QEMoX96RNPDfKF3Wb5taAAUDnNNUo9L3npV7VHqYjYEa9m5rbsHMUfKuMy1Ason",
  "key15": "2znYyHTVKMQBWNGnASyDNFit2ZnyJxEiPB263Xe3Q4uNhixDm52yFeY87L1MXjnEJEMeQscHGm7x7efTCnvQE65p",
  "key16": "5iu5nLMyftfqEWgcXFyxuN6FBNjKFbc3hv1VP7e8Fux78gRR9Kz5LSV86s3LFPKKhU7QQJ16ZZSKwAj235FuHV4Q",
  "key17": "5pTTGk6Lc6cF4tTJqpSMpFmbeVQw2okdMHJRjsP9imfihxjhBUnSrSWUe9LpdwDjNxLG9jQJNp7Fp8iSbYtMm1qk",
  "key18": "5rRgeCjx9vmWDFsirZYrgvf9EJqCVo79iDi4bXHDPBjvxFHYwan7oWYoD5SjhQE8ye4VijQm5q3Jj4kAUXRpVeVC",
  "key19": "2tGRcXqka367aP7gNoQfqurURHGDVQZqcYhyFiDj3TPUeoJXpyBtKaq5r9mHQE66e7V9sGtzSejHFvUkVjcYLRpD",
  "key20": "4LKwq7PS3jj6wWBzA9DV7rF7zQWGCqtGJNwqAfVGThc5iCFoxYEZmLRFP8fJ3vp9D64x7FbtaxtfjgxJGn24QEmY",
  "key21": "5YRvXcYWA9HBvJvNvbYJE4SJ6jUEoeyPSLqfs6wAXq6AdwnEXgsgid7bZYzR9GUUSED4QRVq9ix4KG47ur3pj2b4",
  "key22": "5khisEKZNMx8FL8Vas8AiZC4orkWysyDaxJPLgu2GxruMGq17J5axLY5n7meKvMpnmqrmH1fxtAvfLzbq9ij6uX2",
  "key23": "63hWbgvceN2FoTUXPXYNY1GDWjB5m4tJrxwpojvAPcDsAAdQLZcFZKeMK6Kc8VVvQChvkZ5CQCZ1Tf4bZhh3kPsD",
  "key24": "3wJKxgLkXR2U9a74S9iXRV6XrsM8XYpeEDNZfKBf93NsmuYDdd5XteSVaAZVFFyf5prQBJ4iXX1E9vfngX9sjWa2",
  "key25": "4k3u7mB3kJbjgioa2qzGd6rRWXRDk1r6NAkeazXUVdYXGctNuBSP7M28N7SrWES7zW9ZqtV3pkNmN46CR8WNeYhq",
  "key26": "3ynFjc6s8UykWdMyxiABxyDkEfViaAD8VqR4iGX3Fa16oRZgWAPLhJUAn6b8PTiB1T9hEF82XyxiGcsDvdqS5Z5u",
  "key27": "2AJuMBYzLmxe8BYCZva2tzGpkyRHcSY8zdDrTgPvHprR4KdhpSrpraCDeKX32T4UtTcGrUeDgt67PMjFhgrbdsY4",
  "key28": "v6KZvc2knvnNYtynCD8WSdwwDaVLMi5xsXVxoyTGwHt7kRgJ1b495B3CNzRFcQNs8vsCKaKqEGgaSn7cFmnKByj",
  "key29": "3c7pj1atRhT4F9Utk3qbyJwVESBJgcVAw7oTerg4LwCUqjMDCmZNNQWNRLS8L3ehF5xJG4b5VqTRcxDZNqyS9Tbv",
  "key30": "2d5dWpBUJNUm7bk89JpPex2M6YS12DjE2MxRLsiGM8F8c2DE9xR6mNWqqTMgBKnbVKynUWqJchhqVHuPQS5sKUqy",
  "key31": "MGo1WBSM2iidBxzrnHPJg55aHcE3AwHuso7bLJpVZcYaGJK8YfqjTdKouju8ijnHdcRXJHs8kBhMn2rZJF9Y72X",
  "key32": "4iVdwPNuT6DdX712tVro72krBG76Z1DDbR8dochswL1MBFBt5H71FzYTh5hHCh6BBvbSkaUzCDhmjgA8RxEMWeb8",
  "key33": "5WiMPRzuMAZC6B29nACezBLCBmzGGas6CSTqzjW9SnHBeVAEbawLh5s5xHfQFsEEugkuPquDvwc5stDQL5LDqGbX",
  "key34": "DT5APSqiG6vZpftJGFgFexCkZmpPLrE7KVjvTkpP3MnmZT51BBUpqddqgxPS2Ho3PD2LWEYMxvzr4Tg4YVtEYf4",
  "key35": "2Kr971zMMSBfwpBwkim2qfGpbciFZfYvevhPVzUnQGdUB9r1LrhS5sRTnHk1UMXGQ8RLTcoBPqxy4GKvufdRRZFs",
  "key36": "51NVrd2bL1MzyrJovbnZfp16Sh1ms2JKiXSWsRGuQqx6bj8BgQHjrtKnjvnXf1GoEvxVZrazWD1gtWJ8vrfmnYqp",
  "key37": "4RVCEcgkX2kdrapfuhmQfYKaCwH15HkY318MPanUhCENxjz77Mg5W3Mm2Rnsi89gD52DsNyNgRxLtyK4WGNEEZAL",
  "key38": "3PeRNzjaQ7r7Gb4FT8xuHRypoRVTLineSYLQZynNRFrfZMcFimMAi5nYMCNnbSCAfcJbgdwsRtQWqKuBm7WkRZ6N",
  "key39": "nYkghqdTuTuHGiTac69VkrWvy66VpS4E24BJeMxpsTihPqhRDwCwpcJXtpiHpPM1XFU5X5iMLQJ6LwV1HhWaAye",
  "key40": "58rvzMs5iDaaZvRJRqLoJKDFbEggtnemV1vNNnSPizgZYPMApGj7RC7UD9dYHhCubcgBZ4eufGrSQRsSQGzQCHN1",
  "key41": "Fsf7qn9rtNe1VAFRYVhrRwamTw3dQyhdJx7qdrV63bDyzzU7wif6z1EqjaeNtC4DhqjGG3RNXULuAxR1vwip7u3"
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
