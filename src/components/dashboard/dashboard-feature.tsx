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
    "2PVJD78ydNzUoKXmQSaVpcpodf7kjKmAwwJ1KEXTuX6SdbaMhaQHhYmuzDwgMdaYTksGZPfe3E37QSsuEW92mDwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ax3KeTcP3YESH4UcbKfowRfKjEAfQeut1UbgHLjowGCBemwc6wCQDnENTRGTiQeeKh1WhMqwVr3B8evVvNAUehK",
  "key1": "48aiortCMz1DtaGUED2dBEmdSC9CbMu81s4EvSnozxz4QnXrt89iWSUoNa1E2cX56dSKq8RkHufyWG7zoAfSZNok",
  "key2": "e5aBUY1szj8Ey1SHXrt6PYiQxVqMZTjo5uxctiUenXzTApCZxBgnKvdfYuNdJNYYr7W8tCASe27iHwec2Gmvz4L",
  "key3": "5kvHwWfuuwVYwidxUp8M3HXdZ4NRcsBQbwTmyfkGtRvPbbGi8DQ8uwW2mLWXwX5R46suaA3vQrcMpqWvncNfXaFC",
  "key4": "4exUvsJ1hG9LJsEg1Q5XTQDzgKwWRpS85J77Yb9xt4QKia69gYfT9Ait31tvDkf4b2L4ao5VWz2Zt4brZU6fUmnX",
  "key5": "4ZJdBjaNCsUHrLFAauapqgtZ5Jt19zvjxqiT1pcjowz8goL39LCQaVo7SKYLVonjcW2TrLx2rY9FQQBT3HY7kg1T",
  "key6": "oLnwMEesAyfar8JRGMAYAY96SCcukRACzSU8Kobjj7SjkbJV3ExGY7cE7zzr2JRvt4h7mKHwyhYZx2JteMgvWNR",
  "key7": "Nm3kLmUrqzVkoBGuPk6qtaxVxTj9GLRX9p5wDbhStV7HavAGmrjLg76RBiDf1bQRLwpsYyk6Wq1Zpr44fsEJ1wB",
  "key8": "5PknKymoUDWiaFGN8UhR1ipdNXWKGFo45jfcwrDFU79UQp8egzBg1ZxAU1dXMtDwfJpTfGCUmWtXjEUMnBjwCZFo",
  "key9": "5BePg3G3CebDcHjU7UBpHba4FjBfSZKZFF4mgt5UGKHQWfHmE6SMB9kWrbmga1jjfNfbP15Q9CmkfJt7Fu15wuj4",
  "key10": "oYVnWT2cZvMPY1MhxGySKRXBcgmpAdEN4FXgpcxhUbPA45w5tpx1PCq67Qc1GCdVsJtLsPwomaT7uG1LY97bTaM",
  "key11": "6YAWgMj84usdLrFEiNyz2wz6nDr8uQzqENiLvXnaM4HdDZ2Mh8JSayvdT58to99PT1Rn5vGsiaDZQxkUSmitTB9",
  "key12": "4YyKTMDPBqvvk4LCkkSo2cKruKUSBkKqZhtegCrRnKFiQSLcNzEFwKZPZFaRvV6dZ44pfYSm3miaBe6DprT7vkbH",
  "key13": "5Yj99TDWvS9srhyGcatagjrjaqkExFwuDdGJURGoAtoE44Pn9Zf7kP9arywnHDzHbPamnvCKzrMaK1pwEaU1r3P6",
  "key14": "5r1FtRjdzGprKvJ3ZCLDvPNeVZAavni5yxcdgZKL83Xhx9msPRX9TJFMvQXVJ1cafhRdPaasLXiK6ZdQKZu8vNLW",
  "key15": "2V2GwemKA58ieTffQPyizqYQYvTrdiwiccPp6xCZDDHM21ur3L3x1wUhWq8swTJUdvVQYMVeB5UHg3HmDr4mbXpV",
  "key16": "3rRGAvcJQRaGUrNpHFeeWzVkxbqCrKVKpf965NnVyaNqEvsykv6RJN7gVqtBZ1Bn9boZzRLJgbCeo62b7u2nncvt",
  "key17": "5bH93R22QVBoZ3BwJvGaenoDi4dioeXFGK7QGYfraMc7ACNMd2qkTXKoLyqup63tyjfWZvn7Px1EjxhSBA55NWgW",
  "key18": "49cqYnrJjWio1BqEpU3sRttsTbKiSoTDcBxqDg2zKhmfpZt2wSbyGMhJLey9R4BsLUMBd85rrFXAE9Jb1syjmpZp",
  "key19": "67F6ixfYjvG43tj73bsPsQdVaoAPFiYFbhovWheaZGX1WXYT8FgrsnXtthW3tAeG8XnqLMDN3CpjqXzcnF75qfUo",
  "key20": "2VUwUazuNvJPudz8QevRgNdC5BUiQzS8g3E6MmGw5Foc3hoWBo1hJagE5dbK73GYYeKWYqhJvTNkLjx1Tf16kXye",
  "key21": "GMvaCfWjn2vEN6rGviw6oYtYmEsonCyzztNaQpXjewECi2dzt6aJaLrPN3UqnfWVbC4PAfGo2tKbx9kuT1ct7qF",
  "key22": "L4Vjofoz7r6SvenQGabT1DnKCPkmi2XPDH14mQSuzFE75UMVfcnHGn5Pu385SV3SAxiTV7gUmyNYf7FNycmxUjE",
  "key23": "EaiRRNTatQbsSCcAM68gQYL4DEExPJ3wj8x1Lc58tEksaYKe9332ksDY5MybmEFe7GFrp6UpHxwXMBB7rWBowVS",
  "key24": "49ZZBLt8WSJLqtmYVezqtrmrrNSyqZ3YRCpXqXjVVhf4NK3Cngd29AY2aC9oz8tDUxPsZxUjrUUJUNYxDxjhQUbx",
  "key25": "3FauVu1q7F4BtfC7DU1XCJ845bPPmBqBT3TcahkTbDCTt2zX7GsyAHrzJsft3n4ZkJy6bKus4DXfcxhEK6kskTnD",
  "key26": "31emzBaqaejSkz1LbZ1MS7erat6UU5W2SXoLBme9k6jUMzbvd8nkEhZzFJBBmptiTnZuXXUTcSsNxhWwAsrt1mdo",
  "key27": "4hia2PoCY3CvGP9Q2uqMpb5my6ZjZ8i7Zv398CaUw6s3JiGoukaKvbaDPLn2GYRDG42pySj41B87mWZnFqcfAYzn",
  "key28": "4s8Zugv3iRXHCpU7F2bhj2M3yPDrgvLYgUqdTgcv75W6QXmxdvyuGUb5jLva8qPxopzsfW4pAnxNteTZxGsWTtZ5",
  "key29": "xab2UdhNN1T9f7K9dNseBmkeyxQkbibDVsKkwk1nEebef4Td8CWZtEyCQMy4VQ2zPqpEvS72Dh6t1EMLXwpJy4z",
  "key30": "3FF2ncPquQWQSBceMEub8rjA7SxUDwSt9B4zS1ApUrXk3Fzz3bBNDwGJ9HKhaLZrfoMM8MpvnHgYKgY4EKVY3vN3",
  "key31": "4Pb3EEZ8imLtz9DBZkByAsLnF8goAFCi3kEJRbMiaqJmfZbmt7fNAMXsYR6G3HQxjVXkZstkZnmvvtBSoVgnodyE",
  "key32": "5asV6qNhYyRuW7bSGx4vvg5cp8JL41LVZRx7piBm7iuSoMJTHxvrFoyXryyc39SVhNiReH5pTgDsQQ8ZMYYxGFmY",
  "key33": "35pRureicdNpGYsPNit6ZjH9NyVPuAzUXvFfA4tCJKgs4CzYEnbz82Wp3fQGGNw6Gqm7SJ4MR5rLcE6L9pue7sJ3",
  "key34": "iX1bwQ4yhpyZKY38ysJfL7qiUL6LUGUQ65Nz9xdYpsudBKVU3zc7wuW1iA9nW2nKJkVWEdryULuGmn5LP3eCVSy",
  "key35": "5D3KSmqx2FsodJDVW4umcYE4sXZynVmkkUHQoErJpcNs3dUqX6JRcPvfRM2n2L4fsYi8SJqZ4wVJRb26rwxoe4cw",
  "key36": "4L1V4tKerLg9HxRELjjCsZf9NhogvLKR49EBqTxaZXfaAaqz7Rrc5vAt2zQaX9v38oAENXTcUBzuR7BqLxyghoZt",
  "key37": "3bn1n4VNwPUCq1RrGjDBHHd2i4EQ9KnDi3RyD88XpWR67gtCtuNBukRJjtiNvtXsfu7ApFUcALLTAERpUPxYtPBq",
  "key38": "9cTVMBbznJAPZkxqtJtXyvPu9v4N6V4ihffaZHh3RmyTFxw53JpZJPB7gYN3Hts12JmyYgk7wnXXF1Tqm6kxH4U",
  "key39": "5QpjVgSxAmqe7qtCRVXVNJux9ZXSF1Jbg8AqDiUpki2gEiQYZokxDajE2hLKAMHT8NLvEpCFqrt7N1yfUPzPWHR",
  "key40": "2n3361nFRFpapDq39n7StAGxF8WXmY5WRTaGwotzmAqYxLfWgi7Yd7DdbKwQmxzbqUurxyGGbfY1PuRNB8EQNNzX",
  "key41": "4CwBtH96ERKqXBCmxKiCBMiJAWkYw31gyJz4fJKZuC2tpt6qnpGhArFoQxDnpRo9W2rzB9t2Vx1cxzMzwRhzaaGm",
  "key42": "3g1hQMS6vMWHrj1HpbAN635cxtYtHRvStFVvVfay8tLBP2AGBzGA27WHCDdGVTg9PrRyDRUPrXdP32bpJk7uHEc4",
  "key43": "2epGBj2mQx2Bifhx43EBuFkouPBwZZ2bjQm1NJ3EcYurDi7QvfYuJK338HFGPEXjuY8K2EGLZJJB5zQhdAxJkuPu",
  "key44": "bKSRNxHpKCu9QquTBfbH5xH7JdWUDjLKrgBajuKQcdqC4F4w5opB4Ti5WEJF6A3bSPNR7kcSGvJCmtB5KEq3dzt",
  "key45": "Q329BfRiZuWngZ9A97pchdy9LW6xcS3anZMePk1vTmzRYBipCu9cVMF3oN5chB5PkpuZCUrWZdSjwdcTQUDPxWJ"
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
