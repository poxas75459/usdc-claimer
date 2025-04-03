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
    "2n8P8fJRWzMSSEPbaRK2BDq9LCNNrmpKpQmhBKAsh58NJoG52tdeeSv2Wj2g5uzSJain6Cuq2DK7YPN62CWjwZuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dy2rz9t7EKcJyLpbmrqtwixSQrsNNQ1J7syCqnQKATh59eRX15kvVmsotvRXoFENoBsvf4LmjWx7A5XkHyELe1a",
  "key1": "3B6z3yRpj7K3C72AAfUjJKLcTCtE5mdjfHQ1dfi6rcxysNTZHjhKxvL9nYpdfdvC5kkb2ZHD9stpJstWkgQSWCSq",
  "key2": "3emaL8K3VPMkQrFERpNerH2wToerWtmX2VrxkcnMDWrvDr8sU9t4ERroTTTKSzkAMXdjZza9oYk5KxRd4amwA5a7",
  "key3": "4mWG7Vqce5ewzH9p2byJvGx2armEy8jAsLdNAwJseDdUqqZqMttn3WjVvyqJRe2FEmUyb5eQDUJLfHFkH63N3W9C",
  "key4": "5D46Exv1QKuktqRPsk3ESfMagKs5RQUrmvjycvtTuG6o3uuqeAh624wBGFjPJDqpsjtaRUCc7w4B5HeUQU4ZU4cj",
  "key5": "3MPebyJqmqB2DLp6N5ARgAbdtWjmMKn1vvALT3qk1iHTGV2brVjed5Nz1NyMEsf1NGaYjjUA5Tn9R79nZcdk31Xt",
  "key6": "3GNDGpR2Vk2JHHdFngsiHurPx7ZkbkTL1nCbFeWvzod9FURep7rS8onyHdgihdbPMq5zaczNvpVCLWcKsYASi77f",
  "key7": "4zbHJ58trbVwYh5yU9Q6Y6xqnkBKimJDq82RFFXZv6eWm74toCoTZMANs4Sfxjg8rkMepqFYqL7U1QXH5jQXhZyU",
  "key8": "m9FRoPMtruniKn8stqhctxssgjiUCkJ3W2DcarzUXGcauguM2uygPFasZgBsUqA46iPnLioDt4LQUr1A6PvMQwo",
  "key9": "2CZmXUapDRmxXeVqfsVCb1oPNw3iiH77cw5FkAw6AWokUE5XS35Xbng6FakCmW7zLTdQ2ipLJsTS16R6LgR4iBZq",
  "key10": "dWiAaoRrDUA3KgbvGjDC1Lt5QiwR3LYCoQwyfV56dtbb7zVwPqGiyUDwo2Ls9hq9sd1vYYzV9RGWf8poXo6T78N",
  "key11": "2P22XR9z6ygG747KFJBuvU25vHaN5EPeDtvztQ55MojvbcEgZKLizHzAXfLQbgrisDhKUsRRf1G92H6eC5QHP2oC",
  "key12": "2FpxsczMNxCfsy2sWcrcmNfLQWSYNwxUc7xaQR6ZgnR6xhQBfqGNnincB8GPLjqUs879yxeZEbVeDWd7TwrTvMAK",
  "key13": "386e6cT5GCNpGWqzYPEhqfYrLEEYmEhsj3odhKMwoUqYVfXEgCgVAdaKx48g7QXTnJ17cwTmYPEsGjTiZuFonbQ8",
  "key14": "2NZwv5JoD2TfzBCmHEWXL7BxwrzEupkJRBHRUV9sUMwP9AuCuynxoanCZbTWYiqa34tJC6ePpXbraqzsHPppRsGW",
  "key15": "3ANx2Pj9RHNxPJS4mqz3ntUV8XEQUVnfbk9pYXHwGPDek5xYxifkxdEsTdMVESMaCMBfB5CF7D3ujFEgJrJ4dNnM",
  "key16": "5FtjFxTfMKUKdAwbQeQcAiiWf76Z4dqee2LviKB3XhJHtX1uCaHzC33dcZj93zFd972H6feCbsov6CRWL3TbvWQi",
  "key17": "3ZXPzWCGx9y7hsrK2ux98LG7bjBS6JZ1wTNyLcLgVuu1qLSUc6MDvgh41QhQDkP5gqKzRqfzzBqcQNhdpgXEVgkX",
  "key18": "5aJ1wmEhajdsnD16n63VcC53wQHZhboHzwBgZTPfyHtTWrnfChezXA2ckLS2kkiE5xv3ffQSVxjGzXdnNEJs6332",
  "key19": "cm6MqUgh36L1Tqq4Zw6ocDetmrBEoEZUtJUSPteVzZm8gTMaapfPQr7AkfuZLbFGmFwB5HCtzdHVh6ia8W9pTrJ",
  "key20": "2K1EFdzMhP3Ahp9dqxVVNLWwPmAq8cCUvDxQrajFJ8q625reVhgde1bH8cF2v9h9oiahQusN9cJiLnho8WhBzJym",
  "key21": "5ZgwnufieP15rENkcSfnKSQsiKuXfMvv6iod3Kk6D2JyREUbTDxa1v9UMv2WCwuEUtrsa5m5oDh2P9ddhgNSMQeU",
  "key22": "4VjczVKGoqMEtqbzYbU9n1443HYqUj1nfMYefro1B3WveSDVey2stYhKYDmghZ4CrCbVpoCzTmp4dAypcjXjTwvf",
  "key23": "4LqbbC1MVXJpHDAqy4VK1SMpjXbjCju4zBGUpviZAdpb8jZ8XbvnW7NuhDhexPdhS8QrvtZmNhdGCiyxDRZeTSDP",
  "key24": "DcdiMT32iXNHzpp2eMvsiFFrWvZVVEgt8pFG3t3UZpEd44YhpExZpK63cztBufsPNMbeDgFYSjJAcxoRhDRk5ss",
  "key25": "3jbGZsvcgsTQz6jtzN7A1kwguppe88PEsEt3iJCYf3hM5YzYvSZPnrmKvfc2BVDxKzbDzcx4YVL6dpEkofkjKo1q",
  "key26": "AHYeSiVwYbJoAoXccGwEetsYdw4NxW3GfzMWzKhKRwd2Zhp8znDQEvbr9cyEtX5oXVUaUoWjctVErmjuH3qkdYG",
  "key27": "3kVJhWQhijupN77vLzmjiLHQtjxkWXQKLKpQ7MiJeWrRRPWVPhttn5tUMX9gk5BCF5QTtJ71LgUvcCojBURxD5dd",
  "key28": "3nqmoKwyzDCKDWbp9ZznJJkUbRM794p5qPes29FedobsuvgC9HyKT82ej674QSuG6rbtsMy7TBoGgL8nsTT6RjMf",
  "key29": "2Wj1BtCGCKSiE9FAXHxxJ5ZEyu7bfgFmPFRecDwvKdEhADVJ5xdXv1WjrRKwZSEynVs2oZMQr67BiCWP2AHtSWxd",
  "key30": "2wtYmw4davedpnn67axBbHdBjLDzcd52sJ7ZPm5mNL895JfaxYRhTPwq96N5FLRucAHtkxqhLdEzMoWKhmQRVwhk",
  "key31": "5vRtzTt5NjCjqf1SbHyy3MPNE3Pe2awWBvgKk8pkfZNdE3aDRxQKQ9putL7nfgpPwDXsLWZux5oQwGUEd7hXkk61",
  "key32": "5Mcooes8ULLhV7vkbB3kDbAvcFvAjyP4TgG7YNRYz2xntERxZGqsEPReRMjDyEnPwrzQ72hd3tqewPaHi9W8QXLA",
  "key33": "rRwPvgD3w87qQ42YeruVcENPYWFFm7DCSpKVun7FbieoQ5f3AvVF3kVj3uGsdAz46bg7tajCCLvpmgxFAo2dHsQ",
  "key34": "2mHyhekzCcXa7j1vFhQ4y54oxtpLfbkv6n1fyDd9QXzPyR3GAwgYYDsomMtjYYRicF7QBf26scr1twXU6fBUmgSQ",
  "key35": "3782M1sy48icFmH2skGqu2YeLb1E6nxvjcmtj972cBXoukCZzx753SH9qVS5KHaK6xzeYQL2Fk3tkngnAfgQWFho",
  "key36": "34sxjChh4ECiXgu5MAb2WT67ezvfKviNYDkwYvZyPF57xB34ePe282t9ZJMAVdyBc5KxG6wgEk6EJEnSUhk6xwnc",
  "key37": "5tWVGVndtT2PkTAAakHafUF4xLT5CmEF1LQhUJKKfM4StVUc3jkZwRA2sKdZrZJQsmFtsrJTqG1XHXFN2efjhMQZ",
  "key38": "39UbaAzUsqvg1f8UdDpWfngSY6dMwoY6h6AxUEnGdavpj8FSwprewVmF4Lwg6cULmeT1wiQhBs94BL6taSwvgQKJ",
  "key39": "4E6vUEZohA5g2xF8srCvvaPARcyv3aERx8XXuLvHwmoRsQoaBXYwxTgVMi3iLwJ8DSdDgqSxX8w62YQA58cnVq7W",
  "key40": "4HRbTjtVr4xh43kcxL6ZHPspD96hvwtWKFEc6miNh3ZiZuRFYsLuuffs6U14mxAy8KDw5vHSJukpZhhecMFD78MD"
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
