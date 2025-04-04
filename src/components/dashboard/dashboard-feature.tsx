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
    "3eks1v7NtwCWspB131DWm6DPtPvV3K1yuAXDX53w5hEcGk68Zn4vWvdErfotzy9SWeamfs6heKb79EzKMY8v1nL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Hbh3hMq7zR6Bhwweq4wZ5RUaazeE3CRqH5VkRpijQcoqgfWZgpSLFh8Evd5fDA8MY3ThQMyLPVVgNF6xcJzeWi",
  "key1": "26yFDk4E9kR2Z2UdZQETTuFaPyLPRjTvZQMS2vzMi9Z1UqdiDrQu5y6rvDTWCF2SME8zf74B9vYu2MsqEvFqpKZe",
  "key2": "4DnXqUY8bvPAMkH6xjgJrjrUrCuqzT6CLPiNdgumeBoPNRkrNihXrKejn17ccHTbpnt5Zxh3DMqgZxoXedAua38P",
  "key3": "2LV3WeCDW2Zmh2HFwRr7LCEDsuFArnjLq93iafExFA3uVsXDcFUh2ERCTW8bnrpCh2abc2ULj8V6iv35Tfuzmpnt",
  "key4": "5uSWwFdereDM7tn6Uq2Y3sqTDzzwZrA6zTDRnAMaD76FSXyzi8rYxuVM3kJJkMEDR4NGgeyCho93N4EW5d5Kt5KS",
  "key5": "5XXQ9dVYJcAvzfiiQWWg2N6nxjQN6wd1o5hLGCW6AUTVNPrU1p7oSTs8KfYAvvVmZLVWNTXr3CErUq6c3FNKEq3Q",
  "key6": "59yEiHb1mA4H5MYQQokMadoPVSrRryP4ZTY4itV1h4MxBC9m9ELGBv6VpeQEDtsStivsDKmuu5ZovSPEMgbJqxe1",
  "key7": "4fUWbp78JvaDVg1Kwya813Y9JmKvswQAYZG6WmrbsKh2tvPfZg4Xjkm9WUQ5s2xGPBga9y8VoyYvqFT882Z3SNe1",
  "key8": "4FEDRcEZuUMe4PRfDjuK1H4XFzvWKAhAU9TGmJTPKrqvCLxp3SXrm62ANeKhM8EA9h5FmpoqzXCEdpbhogRfcJW6",
  "key9": "2pR5BprNHFtc2y7jRfhTsn95MrNMeRrDZaXekLNirmucGtSUBDKsNNt4xYob9xfVX4cc1hG8TAzNR8zYp4N69Lfd",
  "key10": "o8wWPnPhaJqduESddZy1SsgpBC3qXWdFytmq8P9TUAHdWxveEPCWtvQRFaUzYB2BP7yhJJrZXJ4BfieXWvBwFGN",
  "key11": "28UkCanDuuepWNUbM1H7z6WXT4GBZ8phs9fTCCQjSEbPockBB1ysBgQe5Xw523qtcBE4kPYLUphYnABmSPTYryje",
  "key12": "gSL5VnL2aDSW5WTVY94hhTZGim34Aui8vJodSCEHsUZACuM8fxVA8JKs25nMArkZxNPNHkQYrY8fxnvFmCVeNz5",
  "key13": "3AXBHyx25KrvK2qXNd7YUhvE548YhK7RRUM9W5mf8Xyg55GL8bjmTAG4DAqacH93Wc2KiPGjD8CHMyWuLVLzPtjD",
  "key14": "2YuRV5n5qNawSQxtPoYz5eagmJcwSPbQ3PMEaskQTJGY7svcXCkCsbUP6EjuLejLv5GLkTJWMy8gPzLBfhgqfim9",
  "key15": "4uW1eaVE8CJ635mXa9AhRmTJwaEoNNGmVZhZpFXvtNzjVXS81u3WN2r7Pd2CtHSsRCQuvxxeiFBju7GL7NrzW2xB",
  "key16": "4oBH5mc6ZJTT19YgrHMSuFYsLMXWr11ig11RATVrREC6PWnaNSzm6ccGk77KesLutYNXQ2ZhxeY8288NpmhitwtK",
  "key17": "5dQfcqkkAyruB2ES3MCTDTHKwdRtrDQdYj3cD8ntMc8SBYz92SY7DqzPcFzfpajAKfHmgLxMZMLKhxfG8bhRDbkK",
  "key18": "5BAxF3b8hE4vMaN8A69z9TcrwPhwKimxRxSZ1QJ2Xhv5jVJ3Jh9B9LPmxH6JQutHSX5LQweiGgnJKgmVb9HBHM57",
  "key19": "4eaV7zmE5uoLKyM4Y6hkaDBQQfSo2FdZRLsMiNaYNvowaTHgdh8AVXXjmJ1yUBPZKQiUgSejfbZayt63UMMEfcTF",
  "key20": "4v2j5kyieFriruw3TV1JJWJXxQWTVKLiHfTeHZ1m6T6uiQziTN6Zxikwm76W47NFHoRxkmBTGpWhniyWCKwsdHnP",
  "key21": "3tmtqmTE32zseUVp1scouPFvyJBrdi53veYefwn5U4iapJs2QGLssU4xP47UQd477DnwxfEc6bQ7M9rhZZCJes2o",
  "key22": "58kY18wSsZnpemVu1TXgdrrRMFt6qCUcKq7WsRykQwCc4kpRxBMz875gsPr45Nap5eFDWV3MoiRwFkPXbyh18roe",
  "key23": "4EXchysxforxb9QQmbkpWanivKFJTweHwh5FGeimncoebdKFJopeKQvs8YifU9PAA5hQmqEs3eJXqXzvmrvGXfKR",
  "key24": "2A4RZtm9vEdYcLYdNzJtFTVfTkyQ4oXzwUnJa6hFLsuj3qW4Lvh1MxA6angzqXnknM3xA4i4YaFfLjgvjxUBXQrx",
  "key25": "4Fo8fUd8z3yHzDpYs2wQcTMs5WWjExptw7bZ874BAqRXDFh1Pm8rLLS8tP4eZ8tvVRmrv49d4ryEzAznmYuCd4s7",
  "key26": "43H4GGzbfwM1xA69v5p8omPms5JEsoKLSi3eAKaiGrv2mxVYmpEcMAbk3BUymEz1jA5TZYEXrTZbQ6S8EKixwjLr",
  "key27": "Vu9bcfPR6128xJZnpnxtXNSfaK57XxPB5xG2udv8dZW3JZLN9gQ4Wo4WzMYPYHNqqazCGUTBeb7jVWyT9yz9y5p",
  "key28": "3bHWCf1UHwK3sqgJyTSegCyQHPxB9v5itsuv46NM82y4XbVo9fz8o8KjkaiAPVs4fiKwg7BuHPxCkaEjY8C5LiKA",
  "key29": "2QG2MyxsSzQxADoCXKzfaWTSHZgPLdPyxkayCyYfkmRBHEG8tzPv8tUo9a1rpdtzuKxbXhNhe2CFCjdzX6uzUr7S",
  "key30": "4rK7uPN5qLi2WVb3qA47yxKvuRwQR7YoKZADM3fcGCWdqswurLTUVhJghVYZ2fyJhho7GRNchJWo1J533kbAbXRY",
  "key31": "4Z6SQQMs4v96ogATAtvMFQpBzDM9edTm6qNddQyHsKUrFxwNSKpzemC6LQPbzRDDT1WqtPUAxbDJhyEdoe1VZdk6",
  "key32": "2nxos21bCt8JbgR4sndvLSpwda36AWc3rD7NVWyf2FhPFDu9JgYEaJrkZszAoTVnaxbfwFdDGLXAka5JrLVYPEbm",
  "key33": "3vCnYWiBjYFFFQA1P8ogYHDfZFB8KczuCmRB1CgQKvzmYmhSZ7bxeLJ74pDuGR8kQKuT5fhd9zAiHGzHRWPjgwYm",
  "key34": "2sGZGkmqonQtAKmh2wZHZpTkRm2ZVoV3yZ2x5SgPuKS3b53gzTc5LUHf3c5yPENYSfX5ZjBYVxVU8iGDgsTEHgXv",
  "key35": "64DmAMRvEtQK6kg1hd8n5tpCt8Gab9uU1ygCdWKrVXXwz9iBVSucnYqNaCuM2f1vtLkkrg2mb9NAFRwHBYChLHKd",
  "key36": "5e4ys6GUAcJ1NCDC9tW3bh78zzMkQ5WsMfpUvrQgp5CpjGDRhgpmQUpda7N9THFA7Zywyv5NuZVB3kuX518FRZ3X",
  "key37": "4UumExuqDpSp4bi25iRxLMCUfbDx3ncNn4MieKghXKVS5LbRMbpYrJ2vEdTpkJCUzBVndFbmwrf4qYTY81UNRowc",
  "key38": "3rFcGnH6zGzceFSA2mNdvP7GSpnmqcm6DwjVzga4byV51Pznz4XfRopBA7jrjxkfJNVTWZjqWyxpPYgjn9iQ5ce7",
  "key39": "n5pxYyZ8sbNuT3RXW8NjwjjWWS7rdnaJ7cHkGJHyF9ybgSowtsETkEEvXLQp1oKiMREryp3QS5fbxaZZA6fEZb9",
  "key40": "5ABdidme8mTcKYr1LQjFLEaSUXvrG3gCi7jwCMkxaBekFp7McAzzXhAw9aJcUtLvzURURMBF9e13XMGJXdbzRPuX",
  "key41": "2RoxSMFDWxMtiqr1VLf3ugYwmUXJoozmoMfVGgAFP5U1SQ6Eim6UfQgcuvzyaSXpGZ3j4QeSCXVne3eGeAjzYKFQ",
  "key42": "3FmyoLPApxvLBfbbieiNok5DYrzgdTUiwq5EjXC9R1iq6yq9bY41XsDJzHocxYyKNzJG7p6DWpFA5kbQdQYSe45k",
  "key43": "4g6pRBb9aBbrQQoJVst3TcnNEtskKBir6fV4pgUYj4aPab1Z6ABqL2jmcTEPy5mqc9q3GJ7QwU8wmttKCR6gdN35",
  "key44": "49ZTis62nndVM9PpnvXDrXa45PdvLx4RpLTzXi561Dva1rxLP1tycxdWb2xVEj9rPATkqUXvhQRnQyoMvCL1a9DX",
  "key45": "3WnUBygUx93TmQVJCpj7YMmtjnTuwxUMe1rvTcsaqZcL3Q5hUNXtLYum9z2LZoYmq9sZgomhQYXn8By55fGA4p5B"
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
