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
    "5Ybrj8dzSAPoLsXd2yAMbGDUhriuUWn8cZE2znXTC8nYVcTtHpZpapLp8ETT6xXFfApvN5NbSJyPPeqyxs3CuseB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wwRrA6KqWstLZC5ocJsDgkGEareLYhCg16uTnQioo5yRq5b4HQABedUHv9dXg8YuR2eE3du7m1tsAqELzVJ1goZ",
  "key1": "33KYbecMaSZ3mhx7C1T8QNf1RgcBSzSVsTLGYog4MZ3sswHmUEpGG7Kx6CrWgVrt7zCnnd7iadrUjy8BaSrTYfys",
  "key2": "2ooMyA294CAiqtvtmYNmjEY4pH3nCdekPLi7ZWvTL2pkr2hVUp2MnqtVdbibLtfEcas6y7sUWRfH7M8UYPjBENNL",
  "key3": "46CV1ghWKqxrCbJiCWdmDFi2vEXzPokL9XVw82UW8p4g7F8sGja6AFA2jsZP5Y22NhvUNYCLDtYYWQpRL833X1PA",
  "key4": "7rQ7yHSQFMJbB7i96Q2VfiUK6ACx7wWTaue2caF3m3Cpt8TkZoKMgy5i92qDMNVbHWHsLar1YUEUXWpv3x3ctKk",
  "key5": "JxMy9cB3uNsJHuS7Xb6GQ9qwLFy8Tt1xd67aRsRpZn3DzrpCziVFqqAdgJPkcwnW6jCG1haTkENj8JGHZz9G5Eb",
  "key6": "3Kymgo6vuL4nhP3Jt8u5x3PGouPQMcYDTZKqe7W3W4QhCDzyCiJtHYUr8rQ2TFkuQVkjsvYvvrPwbGmkpE6sRU9s",
  "key7": "4fQi7snEPex8DDpVz5roSp84g8UmZssxZ5CKPXH7WdSdGhotXhAvmfmgE8sEqrabWRWX1yybfkZrgUyQPbyRwL8S",
  "key8": "28zYmbzSszgdWbjQnP6pq5pS7tFoP1i1L6z28LFu1ozRZqzJu26z838REhnGGZWZshftV6a55kYRWiYNVcrBhhDs",
  "key9": "2JWaqQFRGBffH5wS982JPssitQkz4FzoHP93eh2AKk7u3cCvbmDWNGCouRBaBzykNuRXWEboJCsT1xtcHMP8sEHu",
  "key10": "47Kh7ADoZFqVcuD3rFbGsmsed7GtHecQSR3jdp3VJZcwueWUDhdnXzCdgiVTFxPmqAppzNXT8LMifVo6Va1xZcFD",
  "key11": "neeTJTsrDEpr8ayeMbgKWSiVktBTXxyg7fK6Qpw8zi9pSDEDsSPhhmJLnrFtsRcbscNyPvR7Jw97yevNDMooNxa",
  "key12": "DpHh4bxC7mFgwEVJ75BnyFmdLsXd1oA5TFCMYRhVhCU5NxwyfAcUcieuLaYU96vEw9igpbjDwxaQHKKcRCCiNfU",
  "key13": "3SaCbrvhpJCdpaqKVeFhcFEny7nZiDrW3MLBhK9kznvKmQEVwRa8BpqxzDBRxGXXPQNeayLuxJ76io9zLp4SJyXj",
  "key14": "4N6MmgyLxvDRZ5pWYL1ufNuNS9k97PSKKRyZ5RcZsezXKYNzn7VQjTeDL19pzxrzRKkLBswmU4swavRWU4a1fyUF",
  "key15": "2jSZhBcdU7JiGme9GuwHoWCMdYU48LfVbR4JoPuMZJaEFg7yMwj74XtcYhwf41zwHAJVXoATSfhi6Ns1ESaLiWa7",
  "key16": "zu3QuGhJC5P1N8q4My6uaHxS5f4D5Z9XGkQP2mdmC5Rcu7PgG1h1SThDRekQrrKBNntqbQskTA3avYBSp9HEsE6",
  "key17": "23RxmdXUmyN4qhvNNSGftgQi3qiYpPEzBr7qAvH6HP5fLncKxYJtJPMJszzuRvBCugMsVnaFrjbisydz8sT7Mqbx",
  "key18": "4iZGzpCeRLD7qrPEFerrfs3PKDDSbTZFkhkqatg9gnqBpatqBDRTToLjvuo18B5pj1M352JEQLdenPsuN4p5kXJ",
  "key19": "dgmmpNYTiE3Tq1HvgvziryMPRZDbmKimRwQ3BRRkJLvF469eZVRDbHgTr1wCoiQtZFDCgjvvDA3NDgEYw3ccBHP",
  "key20": "3cxRy9rm5Y7rAamPu29X4xCYj6nG8eVzM9KB1bFo6q67pFd7RymuazfagjpmEn8Mze8h9884es6zwTPjLGHrdQVk",
  "key21": "3UcPwvZc4jBLeSGARE1wBqGUU88ZaJQ5CuQzCYArCKMVKbTR4MynHAe59MyCMrMgNsWafwcD15wePuis5BUrZSVy",
  "key22": "5QLurmzV2Xe8ZG1gXQvY6Mhp6E3G1Xa7hTqxiFYXyKpDNLq74JF4sTfWX3mfV4rG9guYxt3g5rJ48MbBptoJxU5Q",
  "key23": "3VoDddJLgQ6dFBfzfBQzeRWV1bXesf2v11q4eZMxRSzJ6EEx5KZ4pGtzV1Up5qiRwAFERHdJnCV3HXMf2z5sknct",
  "key24": "YrtbT71ZMRcxVhMU2UKXyYQo4DHNE51kgg1pvvzzvuLPSibkVcBYcrVkzB6EAHA98smexykjkhwvk1VjgDzSiAs",
  "key25": "4VAgayVbn1VuPYvDb2ncMqaWaCmgfeHkEENSvZAGdpxrYaiv3EkHoMQeX89p9uv9PCMjzncHQehB1WNUoARbdaZW",
  "key26": "E7Wx4Z1NZoAwV6owN9wgV6BEukt5xyXsTWAig8VNAAMvv1qvZ7METV4xDP1Lf2g4wtNdvy2MY8UKQe9vXYkXZi4",
  "key27": "3kqJnbAp5nv6XBqsUuwZTtSdLQjbfxnBqYrrW4x42j9Ru2rogUjjCQ4vvfNEUpKgPnfY5Ggsz8r2pzURA2VytSYL",
  "key28": "4tdkzB7mEGgBkGfYNakxPBATiGijLcc6ZPRZoPHgmJjSk2TpqJYWJSTfvw9YMUroY2PAvGTrCPrxUqsyKu46gTKa",
  "key29": "4ei6YRDVzhTHLNQY8EdCi8TjsfoYH9ScnZV9TYdNLBwKehgWtFngG9dVzo4HYEvUSbVh6qnMywpYvgBBAjtmd6hq",
  "key30": "5BoHMSb4ZKpoJiJshPyy8oZbmi7jvfCovaKab1uqnaznwUpqsAickMsqGKKYecixnyWamEMvae7YZTENivPy5JPS",
  "key31": "4yAu5HR6oExwuKkdSbotLcT1cQT5XjETruhgbPrnyab1L6J2kQQvBxTDwCcXLwzhBnR2EYVeUfohiQ8Pb7Fs9qfC",
  "key32": "jT9XmdQZ6Bu1ihsEJXsZLtSQjkHFRxHLwtkMRqbiY64ykxHhLVow1CPCdXyxpV2dpLsCfYYi7RUcvTVDkfeNDFb",
  "key33": "3kQWjEgnHrQcKJsR37EFFg9XHkAtL7C416Tr536JGYgkLGcHuRVDY2FBYPTUZUko88EX7XjRWXC4GMPCiWniAf1R",
  "key34": "2yzTJeevBjk4KZz2poESein93xitjZgcERcM4MfWAbWLgcG8JEY41KdGQpiBAZYJyaE2tyj5bDBBVhuCrK6fcwQa",
  "key35": "5nQNqjaHW2QjWf53pEGwbqeAcPtSkvwHyC9NhzmVhns23P3CZ7C4Mz6fiBcKAtsRX6QBHedUAfhSMQN4u8hsbFB7"
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
