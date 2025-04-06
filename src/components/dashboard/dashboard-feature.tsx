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
    "3EVtSkA9RAY12Pw8EUsDUd3YR43JnRCrVgwHKEKf9g4rQjZ2Nevn5KWoc5Jrg7CuNg1eEjSgb4NriiTLdnhZfjra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RXQMzuScQ5BSgnZk5tbLAEDvpm2sd41UZ1ZcvgBa9qJPYeWiwm3iziaEQChQyDhiM6iJMYE63tnFKgkM9Ne9jYk",
  "key1": "3BSz6xmSNpuKGX9ohqAJpb2RVEL4xfqv56sXrZiM5eEoRkESVRzEv8CQziFCCBG3Gch27r2A54yHiXQeX32s5ZPd",
  "key2": "3qKxpXpbMHKWyS2BA3wzfMvNo3HbZ3nWb2zs1AtkXws2Ev39DQrWpbupBtAWcnkaLNZspBfzfHYV2NqP1AJHphzH",
  "key3": "5ko22uZQhKX9P4vC6yrqJMUmjZMvGJ7eFgRV5BHLuyjaq4Zi3EnsrUTQsrMmnaWx5yPihQLg6pxri2a97bbHnCxs",
  "key4": "62m7s9atvwBCMLaMr8UtkWxSnB9p9jqMYHC44saKkkMbujWoK2Dyvfh5ozLE4xu1e8TbRnmM4m7eALk3WRhCJneQ",
  "key5": "VELyM3WEVeMWQtT2vuJEieGGkdkydKqoxJeXcBCfmAzMBVT2wQkNUKEx3m1swNEj5kULtkR3ba21tXuFFXrJEFS",
  "key6": "2qCGAQM1TucCanzYKHjfeDnBdT8XQdGAAcnt7qdYa5csDePoWiDbH3iZMnKHHnjwdCd9n7xFmfmAQUb6hSmGvig6",
  "key7": "42mSS6knYP4YTxRjK9qjphnqzCVefGCM8gU4MgRQeW9m3Bm3rDqn31nKevVMcgVNhCzgM8vFGVXup8y1ajzACBiy",
  "key8": "4eEJFr2iu6f5EYaD3itA5GwciKHosnxdAJ1j9RJAtCtgyvg2oBqV2GWypAqNm14JxPWhR5EdkL6c7G6s9WHp3hNW",
  "key9": "Dk2XS6tc56ngT7dFj81DF9jbk4xAXvCLk2nBuk4dcsvqgr8N41U9J6t5Z6tibCZyLkb8Zp7JZxw4Pm68wVMKsAp",
  "key10": "3zZ1M8uzDQkY2rwK2Bk6KueNyjF3o8Rcbt2howvPEcHxyiatTSnAPNm2f3mT7J7gvPYRe478oiiLT8BKr87c219V",
  "key11": "3myhaRN8v1uGt5KP8TtTR9e3zBPZH78UKnGSdThiQYUgHciF5UqPFE6qq9Li8QaLF2Hhuv9kssHNpp6uXT4GxxKe",
  "key12": "2hCgvfpcLtyfSqcw7Qxy4m8MeraQdx2xV39cBnyR4r2sL8Rc5obuD63zcAUKbTigo7dcfzMXKNJcDZgRWGL3VwEz",
  "key13": "63PNrm8e5tzhRmowhPGwMaVmSyCgg6jceaJ6Jd51fq2qGgu5Fc8STQ2KeQS73j85GgT9GHrNseGgo8NzFooGtcAj",
  "key14": "JUN8s8bPNVzXgG5ogqB8Z9Yyh4tEPqPTTjBLqPpqgVp6UPZHUPRAGZr1vzhdEWrAoBDr8CYG9TSsLZnkuAvwJ2d",
  "key15": "35JxHa7nrvHufwSrh2qmjqCSkMv1RZ8YtX9HY4jqL6nGrcvHfb3o74RTYoLjNU5X12VfhFXgwv34Nx3Y3wzerBuB",
  "key16": "2ZZwVDzrXtrr2oRfSvhGELvKKDsLy3rjv3Y2bV7Ba54hEcFUANnyZPbsC4g5VVWDis1jJr8tjnZFSzrzCGneeryj",
  "key17": "3zdQC6LkwjG78wg9peTFauKP4MQpxxHHuL4LVvuBhf7Dk1hFXBrtSS7K2o4W52G1ctpd7ZxXhZXab5RYMPmD7MAN",
  "key18": "5jW2zYgAz8by6XipJnSEK6XJtQitSV7wYm7YYqLZYbuTmySuXjHoEv1TyChZm9ft3iXHh3fCC4iUCUampE3NeHzP",
  "key19": "1zksuRFxKbC2u3Y7n9aFYYfjMKJZWuXtYSbmFA9Vn1mqULbM2LQQzqnag4RaD4XcXh3NHJMtg7UiNRKVpdbQ8EA",
  "key20": "3Lis1RypEcYpRn7XrTPNdnc7fpRTsXdqCjWejp2jE8TC5HY2VWevao4RsBDE271acUYUEAt58dzX9q9ovzPKsaxL",
  "key21": "26rZq4DbB2VnCEGnVf9pHfUds4SDpCSS3oh8g2f1Jv4UWm7f44oWiykM6mv9g98yQgF592MLQ4gueJddZ9tTWxgN",
  "key22": "51eKHsAfx9Gcgh68jzEHExg1BAJzM6M4K3185tuJC4vj91Vh6UnttCGsQdHLr1Tq17KUiA5HV744VqoG2S6KMg4r",
  "key23": "crxWndNSzHRbkHJd4Qqt3NgLQAbdWFqYD7WxfA5MFgzwMdaydEx3FzJ519heuM4bMCwaAMH4uRTTt4obuCu2Cti",
  "key24": "2cErQQFcywYC9wthZgAbyjL3m6ifKSuS26tDXF9mq3VRtisQTZZ1AfcS7GQ3ijDCWsX2WjWk6iabsFjy6Bnq3jV4",
  "key25": "seEwQDvUnNhLj1qN7u64ZmjWDbKdmEhwFZJaGmDkbFaswLuMdksFfn3BRZC7e8CgYC6E1Sw7CHc9uyLMg2j87ot",
  "key26": "3HbCTK7xevoDCZmXokAabCh33zaV9VN7bicmQcbknB5RzXQJwGr2Zhh6mTQQMXcJKm6NjGzGvYMbdv1iHxz6tqey",
  "key27": "iiA6cGJfQPKSCYCDorsm1QAQUVWDprSb58tM5vzBgt35odyfQ5x4DByWjKPWJ9YsF5qHSo4AG1DNEyTs9jzxdQ8",
  "key28": "DQt8H71SgT8XKKarrXkbzwTioMEzQjP45zPojfxb1PX4m4HR6CLj1xjgMbyAdqgkKubZUaeR1kYhVqZvAP4NiRf",
  "key29": "3fNgCRjtRzudCYqAPNoBJiC5Gw8L1wmkic8uUetVNNJyqJEgSqNoW3pMZkjAiNeyyp68EeuiPEGiHjjuGe6NC3UV",
  "key30": "3YP7B1oyxdqPTh7LiiVEDhESxaxZQqB8XY9eQzcsLkArmkCWdGrqEj9Mc3mh9YLnsQXWg1jFusnLvm9ngN9kfwYt",
  "key31": "5SR4kw8U31mJuxgr5ytDtYG4xCGEX81B4U4noUyCXJ9wSwaED2in5dGVJqQzYqfxV8Rzns5UVWB6s9tNoxqH9aK7",
  "key32": "3MsHfbsWM3AM95Xzp8WXHkduTiVfUi19SykvVsmCS11vowvN2xeCD6taSEnTN8KNXyTdBorbcdPHSG6WtZ38anoY",
  "key33": "4tAPut2rM9C5QkWgeonxJpx36MuLWL4wm6QhRTcYL6CpUPjMwcmifk3FQ6A7FE4U8VAKQTmf3KzJTU1T96DQEGKf",
  "key34": "2FzqjFmPBEFDAc8TGwVqVRyi3gs2KCsH9hHNcPMVC22Ka3WVpgcde4nPnf3BWXLQq2nFenTg4BWZ9dUxVj3tWiwZ",
  "key35": "gpSw6nw7sW7t1MDr65AHTxPMJgh1qsa5G7VEtWAAMGDCnJekAViZXkXFqsz3hFzybFhY6NxaSb95KrEf7upHimk",
  "key36": "5AvcmJtg7YbNrVaD9V4Pqia8fB4BHsyXEe4fGASij747Nj74nVMkJekNFSCEFFP4hu2N8ybyfhAgFvnsJipB6Qar",
  "key37": "2efGCsTVzMytwfMCiszTGe9ATQ1wuBYMbb7bsdm1dvjNxrCHRWoP212cCbCao9ni6qKxoY482yVtCL2yGF2QSfV",
  "key38": "2CywzUnmvB9eLPhcs6iBFM5w3Wx7SLjtcYRRgVYzYaW7xRt6Nh2ceDqm8zmWrnfoG6RdCRwz7HzvAqncXTsz2pdv",
  "key39": "tuJY9CiZC8F9TjgBJy8bUoFTd9kM42RqffrHvgLpDeCmZwwQPWzWxqR655ikgLfsXvw5XBdJkKYuE8gSLJoibRa",
  "key40": "3eHvKY7zbcvApx7L4N6GDyDJ3RaijSeTZiXrfqaWtFxBwfRvMn3ad52Y9ySYppucH6s46BTC3gVaCsvuCcown4RX",
  "key41": "2ceo3s74JjThi3ow8RBFmqzUN1tqhD3xFwDtuvYqZudqbhxjbkzbSw8my49W9isp4DCNJT4dSHVv7sTPEDLYbZFm",
  "key42": "t8BLv7huPXdnqtBAnstrR2MQ9AFAMCyakfunGTMzf1YokHREPDsXApBUhqtkJqar4prjp7qYrmcAvLUJrZBCTM6",
  "key43": "2BDyMzkkw3sNcuow4q5zkzR5zMfcyfFqgsS77EPsbY1Ynm9kWkVdNEN4hQeAxhyEEFq6qKkkFdRcj4ntD6qkCMhS",
  "key44": "4CumHF1X8bqUBhkq2GbPTzuuoiy2TrBg9eSmhHJfhef7xMX1q6PV5N7L8TDaT19jqwydRwzwT97zeh2mL8F6MSHQ",
  "key45": "2eCvcemb67iEaEnTmtRQdgytzxjvS2nZcQFSR3wYRRqhTizAmbpcty9pYo1heyKVHqnnqAgq7U3AM18SQ6hzhavg",
  "key46": "46YrTTg6xzFrn9DLrrJfXnQyRtoHSvNinjBV38T1GbpJhbyT9HMxLHAi8JGUKMKNLVXJ3JAxwtCCxwxm8JvCLYLX",
  "key47": "4SADyP7xEyNYSVKfU4U8Xeb59bbnP6QxkxuGAJ6ZjtAAoSmwRLAdc5i1g6ajALoYMVbosnMWri24taPzp5MqZbui",
  "key48": "62ZdgmNNScfXMcqMvdQXgZzMwQCQNvNm9kfb246jio34KVuVzKYpPyucseZnS2q4CJyym9JRuTkArrXt5wXEcYbs",
  "key49": "3umMqoKxidj7QSy5Dhr1T2ph2zonKq8HqjrfHF56FpqucASnBHbd4qsvJh7Y6BxLg6Q4beyZoHjbxjcYCRt515vJ"
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
