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
    "EXJpU5fughPAmfqZgVVXE5cvC2QeeBbetM4okuNuiaFhTwoD8z4pAgmrnfs8DAoUcYzxbeUXFkk1CFiafBqS7Mt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pSj6UBMyK7osA46kJfDsvD9psUj1N8CSwAh3VfULsSZ6kJCqn5EEj92X7xNWr4k5JuCW8MHp9AX2hLq9nRHiZD2",
  "key1": "iCoGRd7yjnbqADBjxUwf82tVXUuzihXKsfQS3Q8f2u6QbH9o132X97JPPCovhGo3UzjWSDuHQiy93KrEqfR9cf1",
  "key2": "5xiugn6CnopEQwxa1g2pMBqjn24suQ9c3i7CzJjaoK82TzJmfph3Z5qkKnCngQApdHqeHX6byPP6Yr8VtEUNLoFn",
  "key3": "2N7DBFmceJkFUS1y2S1pQkq11XgcAiqkRQprxH1y3EvH9V6ckJvjAAtodhWwKuKzjwGJqjugNzuSk5pLiVJNT7cC",
  "key4": "5gzTtdSX6t9nt22voGZMYAwo2njyq1izNwBYacafrKU8a88ujw67G8E7qfdxzvPz343mPxddGzfwNcYkQJZgd8ts",
  "key5": "Zyy22tPNNRUwK2cxsYrhZxCdQa2w1YUuAai3joX39i4cLLy3LCFzCHqkHDWw3W1QabPmq5jzsZbv6H5U5msLfL5",
  "key6": "3HgCQJdxudFUCk16FWAt4E2Bfm6iggMfrxwMQfr2dPu78UCSN6YZwg15fFBTd8nNpb5MmzA6gf1arQmSFdAfoYBC",
  "key7": "5ZifSsX7vhGXkJjtLGHHot83bxA5P9PH7pASYRi7877dzSoDE8TxEgGHES7HwERGqEtEiScc5c9fLyz3z6nUgo92",
  "key8": "34JZtPyDTDANUdmmPaa6g5p1NTaaNHMHqgUmkzSe6gLtiz9Echw6vFEhunsBnP1hC82ArjR4dhGMEWuAjBwFL9NF",
  "key9": "5jLnPaEkKM58AFk5BA4bgpncdzy4TBbvVWcM1c1QMYo5HHnXd9xXRioK6iWT9cBQy7VkfUCfrWggqh9hSLC3iG6t",
  "key10": "4wTWqr7ZvVw2GGEn6xaJMBRcPqhwbmXq1zYGvX4bCPv6aYTDFUkENDpbGfNmFf396dWqHQu5DvkUB9MmPr9UdcKr",
  "key11": "2weCBtabGd6xMZHfQcNbjhJAR3PjsTNNv8m2m2h7FBimhzzacco4oQvh2MykHEheHiHCXu6WAhsMJWRevBidKUNq",
  "key12": "64bMFKZd9YvJPLvqUo3ZPBvp1cAbVLsBRQweQK7FaRXGRnNke3pGa1wCrQJ6nqsXsXCd5VtsvTjrvvbk1hx1xaaN",
  "key13": "2NokneFeExrbYgqcG1Q1RqqGuvKesSR85facvXSHAvye1H9Xd6gHXDKgQ34bVe7637NMDpTfSzCBSJXNzBy9yD4G",
  "key14": "NfDwW5LcmfVq2UCFWEft2dzdHn2TG7HkTAJ8fLU38y4vayLY8ZM6Ckott6btTpkUapPmKj3Nq711sQhrXfCTA6y",
  "key15": "2Dqe8YGRubN5yyH6KwWerqByPiBEJFJ6qZ2kkascx5CZdnPKPGqqBztkWgDUiC7yFGLt69v2egqtohj89gVFf5ub",
  "key16": "rhL8KZfWYcetUptzkhi1bSmsJQx4pAQ5GBpFMqyzVw2iWymbC4QNue9mNrLKET2vRguXbctN8i5N9Bvoo3af4PS",
  "key17": "4FGsFQRHUp2LwtJrzXhbRMQGZZfoFVkfDThpvkta5fEi9bwAceyZ2oa1N97e3L2pFVjph1UUBJUd2xuX7DxLdZQc",
  "key18": "jfkzx5yHoShPuzx8qYuARuCeULPUKRyhYCVdSnxh7356D5RnGbe4Wr1SsSm7uYcCssKRAzgwc37GcqugfY1dfxr",
  "key19": "Crvv6hQx2AmwRwx5X1MKrP7FggEjMTZXATRVyeDoNsmwVCV5YMUT42Z27hr2MCgVqAL1gmMQPkNmrraf65KWTi2",
  "key20": "372BAkSBFG4UtpADhobsMJePhUFGaYune3eFPbxgwr7fnBp8WKjRBsB7NWHg79MjG9GDUuEAKsDsKWV5WtCFXNHx",
  "key21": "g2RK81n31mmjMqFkKVFfayUZNzg3jJiewpLNsU9EJDxmH1D1ZgPyjyknVoHpaMSNqCaXtpqXJBGYPPp8LQxKkoo",
  "key22": "42eKohUJmYMfu4Vt8CjLHTWQqZeUopyEvn9BHUPZ9tFCu8em4pTeYy47jjFfT8LYaHSN4WrCP3BUU8v9rLvEzXYA",
  "key23": "2tSMGRxZs43xWrJm65FxH9ALf2Dtxy7S3gkNP2bvGJFhhoqj5SwGFsYddNDyJ1vXjCpJKUp2vMReDfsyzPZ2P6fg",
  "key24": "4u8bcs5Hp9i3YjMJsZc6oChowhMxAdD2QNR7ZZKEK3MRwLLysFtmfSotphoP15gGnxQiDmCWzT4jb2BoA5YMPd1p",
  "key25": "C1a7wFN2YXHqZvM7rczhP245zhqzu7iQunAyxSN5kWLqKW2xExupF7Qq312gEECuf1BfQVnPnzc4jKhBRp8RvdH",
  "key26": "3HrUPNwZTF3dd1pYTBhQBfrw5cnK3HaTRaP1rMGg48nm9K3KUmJJ2LVasJCQCbQ97ptuPFRV8K4iZf1TAUfBZvfk",
  "key27": "51i6DiGcnHMc8AemQQE4vgykZYkDCWexqPrVaTqzLwXJ9pNhx6evYyibagyqEZiaujsdcTvYNsw6Hp2oXNLb3tsh",
  "key28": "J7Du2nzoNp5GSN1JMTFugTA37n2yJBW2MxXLxY4ooCoiAHMkcw55UeSrbFhtdvAHZtXzds2tFfyr5VsFVNgNE7Z",
  "key29": "yq6AeqwwYyhhhveKDRx2Vq75WmDDB4Ld5qzeYkmRnC6z5gccfnJPbEsx3jwow2CKCXWFpSqb166P8UTJ1DWQZeN",
  "key30": "4JG8ynUtWpUmMy926rRSw2sATUiuL5r3nYhAGfAAYPnnYJCbAUi8stKxejR3Cyh1tKMrFzgtGkUb5mb3muGoQG3y",
  "key31": "eGRyiEyfAwy3uzmcAezxMJRss836VUrnXPyv7JpdhF5ep2Ec6pVvzBzZacM59y6EWcLYVTsTiPPFwTH54hpQ5Se",
  "key32": "2JKWZFhhRyaQXfX1s1M1TNQNBwuKMLUZDiDK2ncRVxcw2KuxeE3SWmHGpkefJBDab1KUWXbh49sSUcjCNa7pybQ6",
  "key33": "2DcdTSKJoejScHTdoRmdAJCQAnuQ4rBTMPRxmiVFcwSLgaHBiwKzK9DV25RGCvWn4KLtHefXYDTc4yc8yvXBmSnL",
  "key34": "5jaBFdyvNdQw9funhVdEoZ7v1RdnKZYgL8MBmc4A5j6Q4dU6GVRHaSjaByCrjTk8G64YRVKTUueBp4nigwK6wk4s",
  "key35": "5SEufH3j5ypEWruJvKGVMuWgAuG6iZTfF2kMg4gmwaYhHvkZSJFg21Wj6P6o1txZ9VthhpyrcHZE2ko6gg1Mk35t",
  "key36": "3WdQ69BSpY6pDRLwWzdmgRSLoZwxxunUB8a6qbVrATZ4Hde6x4eEueVnY5eURzsdCxgmed4Fhao1MmfuFCWnevpv",
  "key37": "2SUfLRQcP5gY5213H7Mk42P1hnXRwg1vGn18kDKaWRZs7XHNXEe1bP1arncJeSAG1P8vkQMrA3VT5QaS9qv5q5Fc",
  "key38": "3gqyDQJg1PUZJUWMb9DkPsFPpR5W2kctxLFok5GF5vGfKA45Uhn1PmogDd8vpP3dVyZ72EU6YCEYv64bwPbtanu9",
  "key39": "4mAgRA2n2NY6C1BqZVhhXM5uiSTc3qbtMmFpfi3CCiUsjN3v5iQih7n6QMEq3L24MMhXdEND6725RTPbtq1h3QSh",
  "key40": "XjZfVQSuGUUQv7EuxtFhqdMd8am8XPLJNniB5s5qT7TkZJviZXuXyFPtmHR6ZLhGWVHDUrCVFKgidwfUzV68xrf",
  "key41": "2EcahB1fPPk7o4iis766r1HMXsphB3arUfkEQKGAdMVgHEYWXn1iRnr9E2y37aK7vYESL6AydjzJf7Keoz6Hfvvn",
  "key42": "f2yPXiGTncqZnP9sjf2nRhBKXQnJ461mVkb7gVoghKTJQurHEZZD16VVDtym8X3h4eYSoCX6m7tn4pxwAyCW8C7",
  "key43": "2wGJAcVAqxfsNHEoAfi426ZPwPvdWHkRe4fce2JV7gLL7WbVgirXyZypY9A3oGVjwfbk1jMj15XmnNAY4AT2MDWx",
  "key44": "cmQuzj5rRiwVr8w1w5R9UYk14qnxzVV1osHAmiSXtiXZNi3YTEcHWJFVuhnJXDySUbhr1o74MUsy8BEmA8LLS9t"
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
