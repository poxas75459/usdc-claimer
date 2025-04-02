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
    "62vCWsCBA9T4XMyPADMwM72ZCEcso4VEaqcLwbwsMshyPaeTLP5Mn8uUQwwVpTXmCkR84qz5o96qxoqPcHouWhJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ks2ki5jUpDjUzGxr5uQAjb6gQXXwRpesTc5ke2wS6Lut4LX9JQtkQa7cwnoSgpJESiPqHjkLxvBsUiLKcQxv1Bt",
  "key1": "3k2yLzztwyBrCLibohZZcYzhpigjCMGGvmBvgJLboaYKyo639Nfooho8T6Y3wXbHZkKpY7dGjSbF9Tt58swEDTC4",
  "key2": "3bu6mD2FgzkPFrrVstDdJVZWLgb6pTKwiPEparbPUrgR6HDgXE7ygM5w8iJo8YLrdgmAvfsCkiMAmUBo2MFc15Ss",
  "key3": "44xyrT3BiJmEzokeEf7kQYumRE1bvjMUsCkGCRgp9vuuYfADf4tEvtqxdxCFuTzc42sHUFFeX88KFLJN5sH2PnUZ",
  "key4": "Vd82LzLDhvKxAXv2GRzD74jf1T9tJFvyuypoAdMmjSY2d4eAF16Qa31KLDa6WBsHAKEDVPry1kQvTqV5yx9A61u",
  "key5": "2ExYEjbNsGPjcuNsZQutAWDCsyJ561o59muspNejdT1JHViPRBrXFXBiHtLMTws4eneevqS3kHPkGboK9PbVxoUz",
  "key6": "3ngP16sPmL2QGxYB4wfUvCbdyLiLVqkmvt3Te8hkQaiLVi8pEHroW4jvLbKY9UpvEDjqPUNE1amdjmwTX13dL4cN",
  "key7": "42YebnUdzivgm2BmnAx9Q5gVZZRU7Mo4H8LqNLctJZo8rphNHed6Y1YfVMWxJnhMvzYn9jD7v78f4a6DKdXQRGDA",
  "key8": "A6FVcQo8r5jFegGogiPoVRBkgTQzLWgn3GPVt2Fr7RNJGcQcmMmMfgdFuEU9Ln6dT1tZKZRobrxL2zVJng9H2bJ",
  "key9": "4XJgRzYDwqdmRDb5hdhNGjAa4qqp9prRMRHgLxdQWWuN7Yqox4v7iDZ5Xw8gBekhZY6jf6ijy8pTNDMJc6E2DggQ",
  "key10": "5YtGWBSWCQjstGs8rsttUVediTRXhoX1WksXq9CLEFPua6YFPVmGmQtWLV7HA3Yyi6GWNiDdXm5iz9tfRaWytKaR",
  "key11": "2Ad9NNhZEKnA8qrw2SLos7vwb16mykvJmvNyqFqDA7MbUntPi1NnEQmzTtCbfkNPFRysnezNik3WeuoAwDupuQ1A",
  "key12": "5wjdydretSTtJAvqUFKGDT6rrKqMrNcdg55MnsrEkt44HLsA22EEvBENGUGscUJbDm81PG8ZRvX6yQhSY4AAtUWX",
  "key13": "2pbW684FNiqLjYqncpRNkrBqKdut2Lp4p2cVRCCmtPVgi1bCt27EqBipY3yAkHUBHaLanUu21jFhvr4EKbH2zhuQ",
  "key14": "3BoVgtCG9jtzMMzrRL8RpcNq2FNyXY9CghyoCwWHP9NpUYwpnnFLY5DRiNn1MN2ua5d9EK57RKkaWDTLpNdjxcNq",
  "key15": "35paHWQa4MvZQkop2vf8ML4ai4c7FkoDoZBVa3sMzs5iWNeMxsMZrAy39a54554mn8Hax1wbfxHQvKBRdwhi5P3B",
  "key16": "Df2REDnsoKnMYUYYBix6DnNLEGgPPKRPUrTscDZ5Eo5xFjzjgjFyynxPhwwLQEtgdjtMKJc4Fi3Y7JUivsdECsK",
  "key17": "2qdbrxGaFSuSr9SbpYCb7BjNhBF4ExBVLf6aQ8LstxHS77e4XPT9zWSAsfvJs8g8sMGxihvY89XG2fMe9RmWXjJH",
  "key18": "3VoQEeHqCV9ETHUKh4X1Nkc6z2gPTxESyLrYwAVydtvFtKDgAuxPti1wM5ZeWDjoW3qorFds9HwqqerWmU6HFhyG",
  "key19": "5Nixhi2Zh6eAZZ17MutwQmdmoWRCkf3ffHZCLgaFC5f59v9qUVmL7b8eE8PivfMuMmXaEzZTUfqWhJbpdfg5jpuK",
  "key20": "4peTuK6e4y8JeyGoLBSDBhDbk9mi9jkhiwVGe8oWJWqW988tkKmip3LeeGLXEhG7f1w5SHoFHAdJyZh4eex66dDe",
  "key21": "2Hw7cu8rSdr9spWgNpZGowx6QJhNtJSDvzBdp7zCA8LCLwhwhF9ZexWjj643UsmxWYe8y7rh1qLEMt8wVD2XC92x",
  "key22": "4oKvLNBMayeRty8tLmSbaJKNniYmdqVUGrKU3PxRnd3kLLEqsHZasjppm4vz2TbpT4cC9R5F1fq5c6rX6z1Sh3Ce",
  "key23": "3qk9iKjW3Pwo6XYPRh3aQiCf4GXTgNBCWRnc4SgP26au9M9nGfHpk5tfuHDa8EG2dsfH6eCmD3cjV4RavBpRVPTr",
  "key24": "P5geudaDnLjewdG8vpVWTr8WtXsLdAyPUwckEXA2YehEbu2fCSLLZrmZXRfUCAFzYRfmr4KPbmn5TGj4Q3utYer",
  "key25": "43Qh5UxjbmLH5oApAHRbi3aVNDN3max3oZt4Z4rWDBjWqj6gc1ZKzdNRvjvGFBboCciaNAoAwPBGMip2z8jHYxTq",
  "key26": "4yzu46JntvLHrFYxGjeVV53U97RUDQYzUhw1YrKRroQHZ5WkK7tz8r37iWHuyZyRg4kY9xHYUFWAKNwY2RDuw1hU",
  "key27": "5Mgq6SurGEQ5HjmE8mARx8kfUjT115grQEU1jT35y2bFkemvTJcrEx5CbwQchdUKTazqR76MFv6uQqAeNABzenRt",
  "key28": "4XrJU9EtkZRkRhhBsK7NUUDhpJGbZehhGGuYeDf528XnQD4VWWAkvBxur6PLDtsWk57qSF9tkfZLKfsNnyj44FXt",
  "key29": "4CpwE3qYX1D2wPcXEKdF8wF7Mp1u3ppFnqMEKBnErSSEXDwxSW6Gp5jhMDm2bQHYqLz25CkboQ4LsUndvR55MYDe",
  "key30": "3HVta1S5Q8nnQ4zjw7tNh13JPGeSdJfgzPtawjQE8KsiEMH7oYJ7bCvobS4HqSRuGeEJDjR88WhhqsvYFwSS1RV1",
  "key31": "4bEHtbhz4n76YvPn9MvxAVWrgfvk4LkEvR8BpvsXT9Rh93e2mrvWJbg2DhrS7Eh6D7KP74EAFSBCcitnUGWAdfgK",
  "key32": "tY4sAYioJmVSZK3QbkR5qcKswp9FFr2BXrJu8iTTy19gKBtbwQE42VqwEiyNayVnF3wCYdbrXAxE1EQaNiFw8tq",
  "key33": "jx3YZZG4MzKN1wRMzTdMF2DPyKesdB65icDn7n4jsgT3uLsKGNrYXaPahfswanhhJQte2o91AK3YWjVWe1fcHmF",
  "key34": "4gs7NsYKymHJHAWyh5UUiRMesiXPcS8yemQXG2NXvPQcdKrPV53fSpfNcRb3AfcQiaNpQDBmSCVMfqKhcuorTmxV",
  "key35": "3dvBC8EcNEY8QxNyjhqRhZR2Q2azcqy4yrkKrZnViFL6MY5Qk3FZ2gdjEmtRRYhsqXzJ2QUuScxnizBSW6Md4Pon",
  "key36": "2LgTzYxJRzdjLG6sAsjKcYrauwiXa75CMPgLBpN4q5uiKmrJMW1CSedTgXrkAMVKzdkPbUanHq8yPrsQXRuf6roq",
  "key37": "5wxf1bVX2BLaxqLaySPsNPKUhc4fpYNkGBnuzXjsHuuFZSgHWbwGpjGa69nigJgonReoUUogdHyfcvKt44jZZncT",
  "key38": "5LyPsoEYATLjP7988sKSR18LREFo8aJ3dhGmGCQpyU9aCYJ87gkaEN7VQEDPgvFGALDNBjzXQcdVfgZjb8XBQMuN"
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
