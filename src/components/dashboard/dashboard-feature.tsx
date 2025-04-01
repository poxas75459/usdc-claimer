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
    "rWaFbqjZQ6MYxwrKg6BKcZi4SB8KxYTVbopnwbkviw5ZLKNtgCZXiBTKCtJ149KkVJdV2e12mkewq4BULr1SA7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XNikLkoDarPojBx5j1poSXgcspnjckhnfWVSriLEQrPqghTRDBVhohyw3H5gikGWjKj6nJUPAweZ4zksP1Wmimq",
  "key1": "JcUFvFUjLuyJZFCbiGzRBba4ERNJsFdXFSCeExvmz9yLXaQDkM1UbCzZya1aenqDHj6dBvsaKHRn7Vm3fE32Fo3",
  "key2": "2mwWWjonN6QLzV4ErVJ1fiUbjbMagRBvMCYJW7nKxQknqxCT8jUxygsG7nXougssdiJnTUmBoDMVrwGxzf7rHMAg",
  "key3": "63HSHNfbhFsCsCu3axfLmUpZPyvAwLNzqx48kHcvBY1M725X5ArA8PdrQMgPmi6fzqbJ8YZdCTNCdBVDD5kZafs8",
  "key4": "5segKqBBYhYfqtfqmUFUa4QaZAeoDb9uLcKQFwg1Udc4J2ieDkDBLyymYyZBBJ4TsMPASaXv1yunG4E3sPsixEkm",
  "key5": "3Ah2Ypbu9z1c4RtCdiWFkLgvA7tf7LrzFbZmeqn4hSeeLsyojRKF5cEeQhjRVPzFvLh2r2Wn58exsjEqWkzNNGKR",
  "key6": "28y4kNmzKhhtrS65gBQptrykwRF6QvbZkShp3rgCxqQA3WzsfevDaGpdehHJmAwPUvEZa173DxSwoJXWBLn4aXA6",
  "key7": "3wk9bmhLjTvJGG3ByBxvuWdPenPxbAjw4Wu8jrNN3f48FQH5NU5uZbGAuietEfYCwoMTyXTnM6bqxbonKMMXMgij",
  "key8": "3xMWwVhcfvyFkav6YNiFC12bvbyVLseqTZqQAHanoRtWbGJSJKW3oab39k4DUma9wXU3nMYrQPQxuWBGMtd3qi6U",
  "key9": "467CBJiku5brCZ7F25w4hy91eqLaHZLjqUHstrcSy9QrHBVZSdRrPxiHbh6hJAVE3ngTrBJrmwYAtJmCJ7epqDp5",
  "key10": "2LU8gqqmJqCmzg87EaWtQyRx4RbhqbYJXJjNMZXHFhLSzoxw1kp5H9D8FQMxzRFAZ46udAMbzTq784ivstbNkAbV",
  "key11": "4VJQL2z1zbXUd3nJ1EtpU4qkZ8WaP3VEyiJLR9J5vGLzobmgcLtf59sNFyrX7JwSLgVeVW3qXw8NPdXssFrHRSz5",
  "key12": "sLnfRVstAk1irXuXFkaTGifGb3k3AwPeBrtZog9dZCz9WKLRZGeeY3Z36K9P8UpVUWEQsyfbTbc1rdHKp6q5agd",
  "key13": "ywHJkYKk7ehKJpc7P8cMsuqvcKmBchPHMxMD4HS36Qe3DiavoCWqtuiydGnzT6ZNDwqwuXbZvJH7pmZqssCurjj",
  "key14": "3gNTR1SU2onNMLMBekTbi7Bgzgxj2xQbJcF6unH7iY1nBQDU1NQokY4Q8nohCLkwsKEMrtzXTZxRV6V7g1gmtbRc",
  "key15": "5qZisGR37AGeF8KB2eX5eodPj4ocJLUsRrF2oTvufrZ2KyXJZjRTCxU3hLntzEt4ChKEcVGdhByFehfuVkQVXEkw",
  "key16": "5GohnpNenpYtykvjuae7ZwG87YWcNVUbPve18bapSzGss3xLF35tioqebBq3RuyNyzQLKtHWbUfVowcCrsJ5b59n",
  "key17": "3YZZCHKEANsQW2Zy627iFSRivnZZUspQXQT5LLUoNAHhTmUouoaWWk9hkmZU65o6XVosNoHDcAQ6K7d84DaFM3pW",
  "key18": "5x4cuWeVQB4SzrJTUNEswN5nDK1KrMRQdw87B3gGqDrFtHQZw5TXS1ywCJW6Xns8gQiXckEj2xNY8hYSdqoVsD1D",
  "key19": "4oovUD36e3qjRraK1NUNCETVLNSLVUm5GPJfWurqMQR1EaTb1oYVHzpscNiy1sbG9R5o8ZnJTpQ6SSUncdXQcZWz",
  "key20": "5z1aB8vYx2aaxm3tK7E28B5gkvYc84WjgVCdKFMpL7rQHzLF8Cip2HGaPScvM4gzUvw5ysJKhDvpnnLL5G8WWyq",
  "key21": "56BKt9QxoUFjALmDfwRdWcLozcnWapNg4bEUKTHX6vDsG9xxvgQknGe39TcZrMwGcCUG6vQmHuj4JDwigCcSCuxP",
  "key22": "42dRxNamDQAZUauLemFQLRQkxo7JjS3J11dacUjFQJ8QTxG2x4E2wyi13pPBr8ZZ3Z2wnCcjWHwbCq7SbACav44t",
  "key23": "HEN8x9fo9K9eA8e8GT7dmyaWcSWVjZFRGbzrFnszzGGoDXGyEPTWqmJCyTYiq6vEvAybQV6jT81wqauFBWYf3WY",
  "key24": "3Xg5GMh4QebDi7kobV4kzkoJqLbSQQdFmc9cW8qd6akQ8cS2UDP7SEpjeyUa2SA6KfyP47PNwhES5NjsK1xq4Du8",
  "key25": "3kZsB44f2G1gBCxbz9vSs16uxWmHPngJBDjTkLSSuR7JSWwyK6AtX1of4fHp1cb69YnWbLext6SKVyn8CTcqMCdQ",
  "key26": "31VmCN6k2dLf43k43F8bNzQZzE8SC5NJh3SkErP1XHijtuJHjcDyWx2Gcn6kX4iAJWypaNZcHti1AtGs7p6jaxHU",
  "key27": "dbtFT3Tb2vWBhppBNyTeQGHUZpcFnCDuCt16m6vvCYEoA27XbLBVd1t2JXvLvBv3iUw1HYfRfq5iedrHoYF4J3n",
  "key28": "7f6MYzyYtyLLBFUXz78piRYcLQTPeyYVEhEsmXZVpBbRHFjKRKzZ5SqiHNVgQBoKCr3U3jPkF2w3Cqub5HTfxHg",
  "key29": "CbRgkha5kEL8ZW1b1fb8DPBSkcjDRfMyj2vLJQDh1dJAcydpHd1MTxFDMywEQpwXTfFS891NHATyjFaQ6Uv1pWN",
  "key30": "4SMYSr9rfUYGMThseQwyUPYFhdgMccJu4G46Q5BDaPxoeUBwEs7jzn5YXiYXSceLZ6KvYgogjcJL6HTsBNo9AGED",
  "key31": "4cBZEJQi3pU4pyJWPct5ctUpHZwAUzfDX8fFoXQTe9mLgdPsR3kBJW37yc5Y9VWAtQL2oneH3EvszCGAzEh4Zjno",
  "key32": "4FWhfYvqaMD55X4jKuGSyvpxzygg5ss3uvGPa9tz3i3hdj2NUNnJEtGQSEwzvd474QAW4iQeZcTZSH8iV1qAyaXp",
  "key33": "4MbLivkyq4m8wB1tSEZytGBLXwHxMf3oFgsPxwkCPVHTtpGFjCWprhqC1FAjsQn34LxywZ8G2uQL5JnbG4mkzTVK",
  "key34": "5BWo21CkvgfBMryH66bvm9kxMWTDnGwcqtUmfgv3GEdw5xHmyhZDa3gxWVqY5KfNDK5LUVMV5WY1jjURq2tPKhSi",
  "key35": "3YTgrtGVFF81LwoomhtmXf7xaWR2hgMoWaShpvS9vcpyTZLLLxRgj1NUmo59SYDqJUhdMJ8svczZHQJeiH7v8qf2",
  "key36": "4vjDNzHHYLwby6urWBymj9chTrynivrSVUP4YwgoVnfZbPVq7GbznCJKSvZuuXy6GoDJiNqTq6u6F8vTdXTCNaUV"
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
