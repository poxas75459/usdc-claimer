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
    "34QCfVZH5pFE9pxSNnKNbwKMQtQW6oDGQc37E17HRBHcfYHJ9wGoVyig8sUuAkAaH2bBhJ5guD33RPsJoBzuGHnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tBXzvkh8ST1aZCHSC229GyLZ48dpFR6irME4tWbkG3mmPDD5jN7gcNrqaFEKWrkJCwQyQUTWmrPsxFt4yoZLLrk",
  "key1": "4VrGHtfAzfxqpYQ8cKF6jg8f72WPx7pDyHvdpA9ecDVLvdAiCkL2ytSFBgqbzGKsJBSuo2C4W5XsWR2oNLCCJRm2",
  "key2": "5y5wGqBnxFHRK6BhBm8XpndKUr7YbmfFXvH6VMdvbfSdPdPU1LoqCAzZb82GZoBoPJH3cGpyNw9QeWhxVy15jD4d",
  "key3": "2V9xsZth1tMjHY4L9kkdvLZ1iz9GcgjuEfeuaHQ3EsyzUFvHGcwwFqwK75AVRx7FuRzcMdMTDq2fK78ptV4G3bZv",
  "key4": "3XbHiYCUUkFF34zBt35nKjKNjrzfdQLc16a7JVRoNGoqTBuEfw8b2SqLy1VZyVhYF8hUHrkaF7xrmCNjXH7FpLQY",
  "key5": "67hPw2aX6nWBBFWPNipu6CnWeFqBSWoUMXjqBv4L6DsnT8zdH4i8jQsacveNBpaAYaRkMLyLAAjzXK8Y4d4oqZVz",
  "key6": "48aU1XYZtqepS6yapXfZqGk5aXgq2NZU45VjEEhiuGL3TdV7j84QQwhr5sCUiQP6s3AcJRnc3YQtLKjp1CnzYm9y",
  "key7": "3KNC2ar6b3eiwBbEaXGXLQ2CUfyhtmnULzxs6AdM2SJh999Q8WYhqQP21MbTXnLk4fDCtpXagoR8NXQd8o7BKrPa",
  "key8": "4xTHgLFY5xdLrdQBQUii7nUyXyFJRPZhtGE5vsm9x4kPr7zoi2b2SKf6eywr5H9rcqgcGFASoXVzSpLP1MtAN5qu",
  "key9": "acugwpdgrLAtpPiVWaU8ktT7QXcKWk31WaLwMJonZZMiMZzJ18kXQNHDbUSrFvnyx8CZ5ayZZLmMnwUoETMZTe9",
  "key10": "5wzJxtnRcdmtMahLAg3f5Z214Netb4WD3xuVzq4QRW3HKsNiCzRTTtRKe4mBCQkX79WpCFoBaRtfKa3bzCJWNcwv",
  "key11": "Xs1zR8BViVSzgRjjnHDkBVBCvi5RxB7FqhUKvEs87roF6ncFgYeR4Ghqgx12iTmQD6kbeWbPLLhXoUkzXQiNUn1",
  "key12": "24a3ETom6ouENKXp4SZe5jyCHAQ7XTbutXrerYGofYNxkj1ysK967b7Twkb39WNtcriQHWn9tDfXp8ae9akmQr9N",
  "key13": "3r2dP8o53vjDhq6d9h4CZup17jdGKKUDvGg5MCB5KrZZjYReRWR1tZaAqRbQHydUMVBAWD8DXFh1cbUtbjaxoVV5",
  "key14": "4LtvjeWKa4xmqpfFxzGjeihq9RtvjWQZV2w2YCHn9kuUQWhTTgN9njo5nszxt8wsXkozseDGsXQg2KH4sLWNPmBm",
  "key15": "gfH1tzNk4irurykA9y6rLiUnw77o3iS1vDoQEChTR67Xjsn9xW5cniRPdt2G1SDz8edr8jRogGgu1TKfCZH9Wer",
  "key16": "5hZZwbYc1PMmDJUBbEZPtWKCxriBi83m9RBLizWcT6YhaQEPQFkVp6TJkKb3ik6iPy9bJFv8pjsipzX842GRxuVJ",
  "key17": "31RkChCmiw7hXr1XutJpVyuVeVq5XyTSJNMfRWUkKBR22rmnMbCtGziTq9WsyWKYcB5FEgqV9Y2xxyyXix9ofvN",
  "key18": "3qEv2zotiFrTAnkzNe9HFcCrLCcdgWWTegTDvqsFuj9DVd2LPPisS7atcKyHNWW2RD6xwCBsDqoRrBRcNVkzzNmL",
  "key19": "3Ht1cGvTAyfe3GatBJtKhUwa31vbZWx1P5sYzewNxDGXuK5YzSiNVHKAie24Nz3peNK76SiJdSuCQpV61Mz2NtEo",
  "key20": "3Ti5w8gJ6h97zMymJMUxtswTF9B3jXnX22JQHSHMhvJU1mjA6x799iKTo6aCsEZJ4sTHC3Xee6xy1DHBXEVKAhVp",
  "key21": "hyrBeoch4LAuyYZzJMra7sK5TnBHjhMghC5DaprZYe1VsUgX7xhihGvXmaseSNN4MX3C582S5Nt6a51fQyAUg3y",
  "key22": "4bKHGF1MXRB5PFyVryrWyd7ug8pu2pQZvXXTXQWQqR14DeyJLmYntJwnpNcDdvtucFaDqpeS9GiXRCDWywS5s5Af",
  "key23": "2jjY8ksJ6Eq76us5CHPhPhYyXuy3fzxhgQpidxdTwyEG6AC9b2JLE4yGR6Q8otmH1n9UqgS1erYJogiLNaUpsA2A",
  "key24": "673wN2uxEr41mbdWKsBuwzgyNnqM7aNWyM1jGFrdaRCpPzEFruAdWtbtfKLuwpd7xH6awv9PBSPVJDZiTXFuEbAV",
  "key25": "P4Yo8pXEghVuAd4xymCCRkicLY7ZpFDVWVVgj9THTLCVnS7HxJpbcyx2t1cU1nBBWuNBxVhSjUsgGtbGQ1g9PRr",
  "key26": "2uBbpdqygVHNbKEN5aqPVuCnZPQqUD5YUjCJy7xCuxeYDWMRS8FsWL11vVaTKtArpxnkR5RrM6SgrB8PATnLN3TF",
  "key27": "2UYGkfEhWfZSgwUWuJSRD9amMh3Gyp7Qgev3yEX1Ao4MP8QJw6DDp1JX6454EWZMVYN9BzRdbCSqUxczeR22E78K",
  "key28": "3kYeuQree9JiNxyYY2mCDtiFKBoyYhRPpEHjhHUo9HgRoqpQThfGdSotXhv2H5UBGocLi86hDA96YLh4NZnhiZAK",
  "key29": "5KpQFfqF8q6JcG4pNfpqT2hhCEqnchWf7LTtUEGkMg2HNe8reTGTqyN3T1fvi2QaVZa3dMPzXDQdAi6qMosxFL4E",
  "key30": "4iUogGbHSMSe3X5G2hkWqkG7VmiVvvtUfRkjTeWEbEvLF7ynvzACvquAY8SnkBhPUdimmCLuYi1vSvVvzX6wjhhU",
  "key31": "3AQDLJY1xAZ8tjwTa9RQjJQReqFsh5pgXSA8V74MmiJPveYPtp8JXpGdhwvY8KwhVDkmmzqPf3Xc5gDajMspwQjY",
  "key32": "sdYNejaR7BTRAwH3LtC9Eu2wv3n31jgsB658msnhcwLWT8o6qZWUyzS6q9Ltbg1dXxro31J6DGzQ2kS7u1xrhNy",
  "key33": "5Hwjnf9k3NbfD4us6UNRKGfkZvjnZqHfkpdYeirx7dooGdUDGkQxt1bGsUBtBEdZbfo57ZtwRyv5xgNdHxSaJjwU",
  "key34": "uH88VvrdyxoPhe9NS86RLzTPDb17XBxA8H1xemXRfhTNvN6vWCLBDu361MjibBivSadXgQcLyvfYnnyBddAokqN",
  "key35": "5h9RnMBhE9ZueDyBcoWpVJTcHGyPcNX5Bjrfh6jufVi25VrP1gDbfQeheLZdf4tSN1sW7vvAxdMUR1oPin2RfcZE",
  "key36": "GcBdifc7iugQ2Wj9iJGy9JGo5yEub3FToQ22VPsQgWAtGFQzcCriiGMU2P5MEJsLNCTjrpttTJejbsLHcZKa1Bh",
  "key37": "31ZGMS6sHYkw8aVaxZxw3JCN14Ej47Fb5Va4Rugo5mbxBF11KNjdszNezvp7EUuDk7GCy25Th1EcxfUKXjigskTa",
  "key38": "5cY6vL8HF89j4eQu83Cep4zDMWYCq1eshPU16GMnupRfMy1vLa5TsdUUA1jzmuJ9QrhteDwn9LRZQByP3xWEuHPe",
  "key39": "5F3EHDWm6i77FiWMAZypSMjy8xeme65jY2JkrHqvUXdErHn8vb3NxVHVak7C3k3qYkB8AjgzeZnjXuEupjqMEXp9",
  "key40": "3RCEe1tJvqXNNGNDJri1xbb2jFyFqe166fTEwxqcUTmvcHpg3dWYe4FbUeNnx7RLQWNR4MYSpAKPmLcTwAGZBgsj",
  "key41": "2jGsTZUsReVsfG5uyaoHRh1gD5DcAVesYNoBGHB6tk28pJGf2e6BzNBrdrKUqq5yXNtPjT9qMeoZEA1VkNrtbBGh",
  "key42": "ZSLSsfczTBCB4JNxcBQZMzzzGGq6HxiT1Rup5S5t4wdzBmV6QK7wDVH5hVdE9XhZspfrJVDbYTrnmCjBLJr91VC",
  "key43": "3NmB75srHFaPYwEFtTMCnzkyKmMHTEY1zGVhKQGG9KocVv7tMNsEhr7AsMgM4m4DsxBaH1Lz3kgWPQe6zwdJNbjM",
  "key44": "2YZvSatNya8DyRSGDSR4XNC9f79XbDvg9kncj9QHQtwA868jyFA6RG13JBguPAs72DzwRA3GYgMU6SHkP7oXcr4m"
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
