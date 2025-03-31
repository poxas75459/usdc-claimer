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
    "4DcK5S4pgXXh2M4UpCjUvY29CKXw2Xgj1bbVWSuYGh9EWqzBgAEePTAE86tor67o8VGsq8cLLGvweVL4tRqFhx9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "URUHf8F4WzaHw5KmCpFcm32QGAyxNuDP73rDsg58RpWc4Gxc1MF5vWs4Bg2uCxyovPDqpv1LuFPCfFLWve49Kgx",
  "key1": "42ipzkoSz8bYYeNTF11tfcm1JDLFZUzEyVzyUyNXS5Tdi27VMNdtrVAeFmMcnq2WGowiqBATrCcPUzrqDtmqWy8o",
  "key2": "mB5ZvVmwtiedmdvTYbno1D8F2zSCtJf3CgCaT4eAn7Y1QgemcxjiSpnS6NHN2XLpxs8jmobTQyWWhSiKsNpZw7f",
  "key3": "67bMQPNSTYWJbYs3RKMyQ66176nRo5sXiDfAHeTYoYqxpgCQ9L4fPLefpX4Uv5JS4Zs88zroD9A5Xi7owxHep4Gn",
  "key4": "3ZHw6vTzCcCxbrb7oU8PZd68mBSGFq4u7Cb2Z17Xf1b6UbwVRckhviHmMXM3F5Af2bojQ5x9hCkaKNSzuy7jZFT9",
  "key5": "4snx89ALd4LGY1csbxPPc77mJ9vKfS7cp4G2SJJweMAiNJA5LBD8Cg33HXt2QKsufo33qGXRguXM6ouztLVhTKGv",
  "key6": "3KkVS9uuLcUbXjSXck8koN2mGGRMue3aFz1EgpPqsMzUL6YxbksEaGRSEhP2jdnZ3LqJSoffp5trFZ41pR5HhAvw",
  "key7": "63jLbak7UXQpZnsfz3eY19EyT6hHALHAN84yeWEE4Z6opsCbVEfkWC1fXJykLSnVod22hnsGqEFTuugLJaeLTT5P",
  "key8": "3Rca2tfgfGntEUGDaTBNsMixo3Z8osHP8UyYvFgChNbK6Lt8KKXfXLPknMD2N6B1FnQTQguFfg8cCEBQWQAj9j73",
  "key9": "3ycom8gMfQvLav9P1WnQj6jvwe97iVNt87SZyxzurRB1NM3zMHKJjWssikZMjdVoukCeZNTHcqGh22dYqK5FiU6g",
  "key10": "51ai7qw1u85sQHR9NH9KFWPzifUzZQufs3PKdiH3me1KcytEf2naxwTj7JCDNnMk9mTY6vXbL96ccZFKiQ35q71Y",
  "key11": "NWivzxe6YqVhZgZuWpR6BuKpk147Y2ai2aJa1f7PgkEyEiX9MbFRwLttr9pWCsP2SwaW823jQ6HzdsWuWo2H7N6",
  "key12": "5e5iigzBdtCQSvc1ZphDwSmYeQnetKJH3QPfE77SA8irGicw78UBhXFrMQVZhg9Nm6pFQE5PktD6t2UtybwjqgHB",
  "key13": "3HFKa6BNtEPaR1gqGWS6LJDqGj5evKxVLTyPr1GyLEazh7VNrENNdHTFxuinrZavhwrb1BNxrCtztDFf6xQvTokB",
  "key14": "irmDLyVcnBWuVkW9jHYuGjAULKds8yVe98wMVJnFRbyuCMCyGANP6SKv1DNMpmEnVi2jdBWQEhKPmCTaYruWH2g",
  "key15": "3uKRYe7py9w1maVqf7zPM2wVm8oUNxKsuYKvZhoCTb2CXQmJyjnLbhokVCXYNB7ub3NE5vsZbZzXKJ1umhGo2KPp",
  "key16": "KUcSMKnpFVukR38RrGfKLoVG1LachtmdaHfJMybhfqX8SqbNvJ5uwMw3T5WyRTxNPZFJGTe9FaxdhuGgoE6B7as",
  "key17": "RgW63kctsv5YG3SomzxJBV8QxFxpiWi5F3fY6PeLPSh4jgLtFjU2TzeHtm5YSd6VbpmYvg9zxqkjdv6obc4cbF5",
  "key18": "4VuYAydPpJFsifcRxhTnyAcUDB3UfB8fbbA74sZX7RSf6PE9jfh9brdgj2S1GgCwzP1VqePWMffvkawL26jA38c6",
  "key19": "5i1gXm4zdVmewYHb5h5S2PFwZJ98GM2Uhi8djSKxJKZsk1eWbAQQALFyJ1wrZYXzqJM4coUj4fRdr2LbEh6q9Zdd",
  "key20": "5u7Q87fCXHecKqKpHjTUE2v6fMwu9VWkeZk1KcX4cYM3xSRsrSLTwohCo8TF6pgW9eJtdnNCWnrXFJqzXQFY3rth",
  "key21": "3J6NEXcbcJHX8nLAyJMmRcrG2ucXuKTy9SHnfXosdLpLSHSHosB7nvfcM9SZ6d2UPPYn2Zbw3EByxYpdmQ8pWKMB",
  "key22": "3YEGk1uA5ESepgbNXM9HgQbyKXAyvrdTSMg3vARzQcZiDbB48xNfVC6FC2o5LPLBkk5WR49PC9daSsbm7pdbuhJS",
  "key23": "5HNYx8qj7vmuVFE4yPW27QhDMtgbs4dWcdNgYusLFKJmU3JwUyrrx2U294sJXX138U7Etr1H6RmLk2mkGBWTqzkL",
  "key24": "2fwkDXjXeHd4jQomMsovYHzy49ia7zLAuCVGxTbpCKva4V3uTNdZ4weqjLj2TqZkaveQHRVmS8zQCYYrDWDJ8ycF",
  "key25": "5wVzNr9cD3e1CnADnFsGJKG25NuvpjfGfVqKGw5QduaM1TNXsRrnfLmAUZzLEG6KYUzLy5Q9zp7hm3y8CLh6vUSy",
  "key26": "516f5ZHciniWU7swB31kEx12wcRe2QqarXzTAEfDEcvA8ac6SWFVgnwcBYDjMARzFJTd2jZekFHuqs4kmVpoWYey",
  "key27": "2bK4vMqiyMWLETuXNo4utkSKA6H79vPC5V863xqpKA8xLKM7YeNH1zkjzYKSAbJqW8sUh9VKGjgQBCWaH1tx2cNA",
  "key28": "2Fne9ejtXRKhHQqW3yFvxSQBZsjRjD3psML5DonYgdw5x2ACufVyifnBa4fj78hH3m6WxEFesMsJXx2rZsCWrtKc",
  "key29": "5ekj1vmLzYUdegUPtrPj4DbCtc8fEpY4FDmNfffixHFMNzsmh948gEkP427ZJn4n5sA7Yy8s5czxqPSgBvmTChFP",
  "key30": "3Mc7N9dNCKwS3VWa8LRp7BKHyWiRG69RSpcTremhVEaePyTeYXX2vyqAH85uPMRQmf4mBy2brm5mqGbRqeMXgrNm",
  "key31": "2fKXcHeEAtKdeXxNua1JdM8gPp7T9qhjUkayB9nHEonGzQPhPAXkERZtLk5BbsypccSEiMyN9AMn8nCkqAduZLV4",
  "key32": "62NQ3shuHGWcvPvyw4HZVNCTTu2CktNuqvzv8FAafkeuwUHthwNrh3xk7UH11iGCRaMfcsUbiyGJG8t46rnKxWF8",
  "key33": "5aJrbVDX5BQEFbEWNVRommv9DnJTm8Gvgcv2aW7WRajEdh9bf3QTe7QNfKiyBhsP2V3JT3deC6fwQfh4d7y1769w",
  "key34": "3Cs8CGC6uvrca91oyf9QEqmrir2Dx776CQmKSjeGpT4HN1ywvtW2mSvRUEgK8bFW9BFLKY9LwF9rf2RgrwmqGCTr",
  "key35": "2jqZtoP25KaM3GK8VN8cj2DNeVBejc7QcB62zRDfcWejKsCbsz9MmK6aUf46VtvFCWZ5rLkE7fGs3RipAQZewAiF",
  "key36": "5e53TEFYaJE8tZzexTEFFLQ62bqg157fyy65HAx1a2kJU2WqC6MoCMHSo2QMVj2TT8ZHNg2G2N7ag6UDivZjmwpm",
  "key37": "oSpwGsH2PBLDToL7EAX1sxa7r7JuZydxBSDqcT1162isVXTm2wq51TMGj8Tnn5z8Vr41tJQm872Xp9SnshiukmT",
  "key38": "5nMBU1AJCH185yfeLiniaCn5UYwKdYCKnQvQw8wF8prJH8yJusUzur5U8imDZqYdPcUr2pGcwK62xW5uxTtSiXrZ",
  "key39": "58WwneJJ2BJzfoADVspt8R2fjuhvCXZv8Kv9mGuJtoZ4jr29LhJZQ3YgA8DvVj3vqaksHVCMxfaf4e3cWod1FZx8",
  "key40": "31WcJef6GUWM9viC8yK5FPDcSSUsLS2Ttg2ogLWEQMf5e96PAcrg4zJx1Rd5dZSemuaYqHM4W29Q2HpqKknC3kom",
  "key41": "oKgC2WFNDvrE4YybNkwEJGQksyNYhPXcAmJHACekDgSMLZHxccmGbFNRAHbX8np87xRnpsWB8ULqrhJT8LJ8Y7f",
  "key42": "3ZtnKZNY968fD3N1ubnVcm4FYcZAvjd2hZrjetgwLMsqZXmPJUgh4bvpyrTZppk7iqCtmgh8ckd7RS5B9TVWXT4e",
  "key43": "3UHx23SRM5GDKoQh82NHgyjC1UboAgxKMisCn89BxA2TUGPkdxTpNj32bWZUEsUoRMCJD1XUTQGgKRcu6vCUxrvD",
  "key44": "3UeHzzVGb9PrmrqZuVWJNrTCR6yVTDnY4mMi78BdEXHfoHrxxc7CbhNuTQk3UnWncpQuE5G2fJd52NHcbW5hH6ks",
  "key45": "2tJGqm5CbNxS6Dkhxk231CaRcXCVxDjoW7xpu62FfVhToEaqXLJRtATjkdXkFiRC25KsPpoyZk26mXTDkJe3pL9q",
  "key46": "XXUz5zZYe8t5VwjnopLZYGYBVxwhYWX9G2RqRJ9ZLpT2bp1Ny73Yq74NxPLc7CgA12P7Vj4o63YkFx12W8tUxZA",
  "key47": "5QDFkHcM37vJPGHzfUx1REAP8uB5YMRbSMhmarzFTwK87MktQJZMBzz8goc2jEW9qUGFqPiAEpJYiZ1Y8Np6E6yB",
  "key48": "UXHDCuJYHqmHiceGJF5zzFEM2hkYSj2xrxvmRbQ95Ps1gLQErdnq2hhNXERnMfbQGuPRXyi2ANN3aLxojsEaH5r",
  "key49": "2dvR39ZQtFd3cvR7oXVEPswDV5qumggsMype29BzA1ZgDWFXGnkgiWiycqAm6HT7Y5SJwTMA3vU5xq1ok9R7GcGi"
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
