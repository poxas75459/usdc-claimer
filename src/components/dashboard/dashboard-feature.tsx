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
    "5bHVK2ftxHm1puP1iCDt2ehQvqKYFmTirGMXoC6N8VQCkLQhkhquxsmu46M611pvDLw7TiA56VNqwymkJUoLLkHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jy5LcaMd3SkKTZMAbLVya7oGcasq63QL9pmHesFMCeiJAbie5hBxoEJUkMy4dhncT73P4UfDaQb7K4oKsAHmHTY",
  "key1": "4FvnGkdAhxjXom62WBecNisKDBtYJ1kqLMq8SjYXLxRSU7mgVSD23Ww6oKry9fgxLQzNmcTQAL96fH9UEUE6V3Bs",
  "key2": "3ZoRzu66R6pBYF5GGGu7CcxWQPRXbToT6KWgG3VyRVAQizHAjP5nK4aeCyk57CXWyAsAedTyzfACJhtJMtGxcb6o",
  "key3": "2cFAoqwB71eogcrMQx5ikyjw9jahMWU7YCgqRrXYzht78SGJy23R2NKQSubXHvkRScpZRYJ2fxqqQeP5jRgAzMv",
  "key4": "43Pu2w9EDZX1tXZH9TaajFCubVydNc8QzJZpa1KE8GJshtU9NtRYQLugtFoKCWRc7J3eoAfsMkifBeLNzZoQvZne",
  "key5": "43Ymmhf72CqFah7xR9QYddFn7H28GWwyeSkv6SBcN2yTr3b81TFdveUZ7MA8suNGbtbRtSu1CU3HU9nJM9pqhg8y",
  "key6": "47wijEQjpYE1kw4MHvJYjrM3UwJt9UwZbxtWRLoN7n7T1odvAY5BPxMmQxyV2Zb4tm4k4eRidxjF7pPdpoKL4B2Z",
  "key7": "iC1cubyd9yeteEpvujX7BFSwn3xCk5XQff8ZeJ24HGywuD8ddW1HHzHdkHvsTzvLxdQgKVV8G3eBX35qtECLJr7",
  "key8": "2WMHbQfVPD9pJc5nVtFGq7QuydV5u3xuEzxchsdbHY9xyuxRK54HBpZQySSyv75Tq1uBEmgQ9ZdH2G3PnHkwGLbZ",
  "key9": "3YKVfSTnDnXqUqdNQG6yME7vGWc7gg5wDL7xNYS4YhC4YKhXCUuiU6vz2pAYkGHap9igZU5ZQuHDtoR8BahwuNNP",
  "key10": "2FqwKCMmVAYpj62odU7dxgAEasgZq6X2cHsZtcp7j9oxgHJ3QSYB2E3iYshBSVzV1p2ZXQjXECY6gsSgfKjU8FXH",
  "key11": "67rpgD1ijPh4DcytvaGwb566gxmf1yg2dQiZraVrkbiLnWvAvEMDBWfULMqwrAtwXqTwgch5FRSEaGmPVqiEAeg1",
  "key12": "2VT4KubAz6xMFyKCodJ8rU61nWHjkANztXsVWy3H6qPKYsGSLxZS2VXFhXu9mjfPgGpq8WYHfRonrMRtLgdCNYTy",
  "key13": "4bpEGDU2rEzFHkCDT8hqiSneQxUymTSi5kUmpb5a5NJB7iPGT5oWN2QC9vfuqCaL1i2QLJ6kx5GWpCZZGReLufs",
  "key14": "3815SQEwgaspNyi12e4a98aQ1Eoudx4fzTnBcnjAxeD3x6WNRV1WzjKtdtHXHLFaD8cv2xFBhvWSY9yK6ufShqBM",
  "key15": "67Kk32JQtseSQ86Z8sjEjMPbFs2dNd2WGDtjGpk7aDe5Tqsuqu9KMrdpeoWfiP6iGTgLxnfdCKRWQG2sSDtTQmLA",
  "key16": "v3c3PCSSaHsYez22HPfhjRDrVmFU6ijXMzd9DWQ4BAQnBCk4hymp9c5n97bLEd9Ewto2reHUEAg1htn5Ze8kDk9",
  "key17": "HivLq1fSZv9htRNxAZRpZGDmqVVvn6H4LTZyuFNxgNyPJax4dXbyA4VbDmBbbBiqu3cKtPpCKKBiWs6iCe2SRyv",
  "key18": "4D3rPnzvFfQtuHXAofxPC6e2Za82AEjEJwWpyTB2FF6cXbMgJg8p85DkpcHFJoemskED1QwJYCkncaUz73d962Tz",
  "key19": "EhAM6sdkqXxXiBbDLJGqJTJdNNhNpGgE91pzEZBK5eWojGvUwBS4sxQb6AYgYSoSYBGaWRCDn5e4iH2i9TvhVYs",
  "key20": "5MvATqxuQ7T33QH2LbKPWYVRLgjYuGZ6N51D8g4Ec5wvLHdvDCu2WhWtNV2hrzkF3gdqTiMqUboPEjayY7AsRYQ2",
  "key21": "4fhtvrqVbZvaQc7ya51XY6F6Q8nkzaXigJVoU9kT9smwyqPJKJLiA9oJtkpsuWfy4uqZGpu8WARU8kwWsNUg9MSo",
  "key22": "69CwB1KfC8fHjnZPo7idDHofVN1QqWhPuCCfyGk1JGUhqYfn6URZzr5vjLfjyFo5Jwr8uDez9HANfZZZmvWLERM",
  "key23": "MH2BBpfFCkDp4DAMpXmgCWz9Zk6jSdWHGXtRNKD1KGHLqesQdbMZikAruakPqmj5SR6tRnUqX3qxpRPvrmRGAHC",
  "key24": "3Ukwg77KPPgkDAvM1Jq2rkj7ZuacCA73HeSoY6Jp622ENGZQQWGPhJBqrUpy6XfAbBmrRZfTvXRduYjCM5GU2oCn",
  "key25": "3nqfXBWkHcHmUD4c9VSzkRbjCWaBBigzffnjg49KC2A7yhZxTbT4Lz8o7BoFiMFTfsU2vLynVW2En1WNuneinyha",
  "key26": "5QAWFMfdjfCZtg4nPgkpLSgHsEGKZJmuXqYLsoxFs6aSY8mGNh8AX8WBcpxxuudywBfQmKeaD3H4kMgWsmKw6MB6",
  "key27": "5mXLndp4n5qGt9FiipQrpUrmJEi2jhk9QsAX6yQYWQassxFioXvR2XV8QMqP4iLzebPm1DZPZ4www9VgW8ycgLG2",
  "key28": "4v92HGugeKJcxhrbbATHtctc1BYPTwAVZZNXD9FeZRTsyDGUPcUcqFvAGEZ89Vd1Dud6ZFUEQyaugY1LPC2C3SWe",
  "key29": "4DM4iRuvfiW2Uwinbwf3XTRjf2zyiRykoh6KnFWvfi2gWpJcDwp7aYy3pRZ8NQucgY1sZA7BBWArJ38E2fvQ3X9V",
  "key30": "5YKMjcWAmFehvWzbp7JUT7qq6eJMPKxjir2uruw5XYwNKPSEYG68NFTNBtUHCek7rej3LdwHwQgKXSV8HvQBQhWY",
  "key31": "z76sdprVsxeEMRvqAhbMeLjgET9JTKw1tF4HmggiXaH5JW7hDUdFvHeS4Hzy7iFffbaJeENTTytTLp7qP16kXeF",
  "key32": "NUFsjtAa6zhu69KrHmUvPL2K8WhYSjcZpGHeZ9s5XYdVDbNHPeubtPfaRSUmZNYwVtEiV27obhNh3sUdLLyFB2Z",
  "key33": "oXHrb7pXft37MTXgZziU8dXx12bXGWEbS61x4FoZGGpDk9f5k2HZVBFS9HSdirU118oXBcYdeZEQtRu762eurZu",
  "key34": "5eYXHiRSG7pfowG1TiwdNJkM9Yk3ViXdY11jpimpVbX7DAhRidPfa37okFr8ZJ81gXusLQ3Ws76FdjDf7P1Ggqxi",
  "key35": "TbZYntdCNWaq6gCK3w52uZztZ4xvftqQ5SRukGohfq4Fm41Rxk4Xegi9CyEbH7z4jZ8gVwJyC7jyFR7mD1CTr5V",
  "key36": "KYyMzLrZVCCa1UgxBdEdzoTKwWBNzZzS73XGtdDzwXoq7CVS6nUa7ueADZ8Z54H9PRAjkVPRDWRcrrUMpQVVSo4",
  "key37": "39bF5TYEzXndoTwWkpEfVaWVt9hmbT6rBp2fRCVYC56cHHaB3ZbDbyvWUncycKVWuiFd6RJWe9VoobiNE7sKeoK2",
  "key38": "4GChrNK1ZPzkT3fCxnC2RUN1aQXuUeSzuaGe7CFQrxYtDW4qvWBRLf9KaYwXz5W8qth61u5n8RTwi1hzxZ6UJYd8",
  "key39": "5s2ydh9MYFKpZnsQiMx4iLYDk6BB34oYcJiCCF1Nzr5YJwCmZUNBmrz7wxCuo6MUNyCKjDhT7pzUVGiadnfyp4AT",
  "key40": "5wRea9E7Rhaa7oAqFU47xgvkXttHZjTkani9W77sw8CRDskreyKZSLcW4MpinVJzfMX7xwnxYRCmFNXaSgfMeQ8o",
  "key41": "51W8yPezCQHQz9mpDj8Zr2gcaLYGJReyc365KhvsWH5unwbWTy7T2gbhz7jhoPmRQRhJcWgSe3jimfx98UBK6L5U"
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
