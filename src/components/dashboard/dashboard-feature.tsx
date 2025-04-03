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
    "4aNgmX8xCMYbncgi5DtqjJ2q6ao5i7QhvdfSoSvogMormUqoTsmkLjta6FyMyfGyCaweuYPJk8iU6mR19vLALWxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KmUhHVAQsAdHCjNCPXru2QgF5vW1TC53fpeMG3idwkPuZWrB6oUY2iCYFxoSsGHV97BpVXQiB7tmn3hB1mpgQp9",
  "key1": "4ioqDY3n2f4d11RGZGZbgTWpRtdfUdN34vEauUYqnaSn5nj3XfLxCauRGUAPRucWy7DwM2GRTxXyHZtwzRM5QdU6",
  "key2": "3GRTKKiB2HrMgDh69WP7mor1dGZmepCtnHy2id5bA1Ugo3MdoM8H5dzs6PtU4CBmu5n2mqZPpnFMQZPo5Sa2W1Zw",
  "key3": "5VvMZjT197fuTH9UCSnPt6fwYhKVKcUa3WrK8GKggtPV8TkV7GXxTxp8zaDC58nfMbADwgc2Q1GXZuiSPhWiWko4",
  "key4": "4XqxTU9gMZAbBQMzTsPoRjBjTb9jb5XikT7MMwkU85NzHaXjwRYP4EZRjpsTN7kM3ReRJDj1YmXZAmKCku3v1wLn",
  "key5": "62YQ7nD4C7QRAESgkjsD2gauKzXEizwbCJooxAN5iL55S6m7ifDDTXvPTQTvroQoHNe68RHe1KSKqDvCiHbXXxuH",
  "key6": "6BxwDUsk1ZYHXLpumZ79dYbnkSXZiqKcoehfpXFXxs1dumgP5novNXUqJiuBqrMgLNhgY7tkhT1Rw3C3no2tRmY",
  "key7": "4mTzBuQX4sdZeDNPUEeyHARTisbMv58bL3GdFuKQA9fjKzugnEpyVJmAGeD4XdqK4usXyy9cFror2TbgHmmyfeCT",
  "key8": "2R6gE9EHVARBHJF7Za8cFYmiuT23EzwpLQgt9gSSvGXFPjQqQptzmgrLfKWJ3k5fsMAhRftqv72VCQUVic9rJ458",
  "key9": "5fUZuDy69Lm13uZzoqGQwBggzzmxmUXxRdr9JMt18gttGT8QVWgeeyKttUL46SyyjP1bmm4kd8YT9w2J25cMa2HX",
  "key10": "2Z9Y3zqyNjFvxkk2EndJzR7hJnK285QvDcaTUJP1VT5NTXmzpYvvexW4ZXb1CtxueE9buDiePzRwKvdesRgMfDki",
  "key11": "5rZrs9P2hadi21GGB8KSrpUceoosahiiveDKe3Byrg8BhVDACEpAFN4dPgiQEvfSi1v7PzNUeVVrrMZgn3cNB2jD",
  "key12": "28BhTumMWkFof4XD8LhFGPw9o5Haxwkr2KBVA7zdaSGjuf6Ka3bsTFRz7pDv78MxYNfS9k7ao8mGTiRJqjY8FNEN",
  "key13": "59xXQ8pm6sfiZEygkw5wxM9cnKeG4nK7cW7hJXdJSsd1QKxYXgEUQYXmPJBJrEhmbghmGWfwHJwZh5o8MELBjLS1",
  "key14": "D3uV9ahjGobDgE5b5d6qnW93k1niM4Xkia1E4JqsBPyZQwcMhhWpwvLv7Lj2o7dFnyrYZgz7KA2BNssyCJd9dZP",
  "key15": "28cJeRSeqRUyhPzKNnGWnZ6wQgZvxuKh5PFH2xgmv2M2r8DDSUhsggTWgPaSznWv34bK7c1mjumJBELtkGbfNeeb",
  "key16": "4Bp1ca7MppeuZYgBdJPYUsmU18pSRYAEAWGUMZWdxgaxhGBRn2mHJ2A4JZMsdJpmuVawLs1HsBvMCDqo571XBteh",
  "key17": "2ssLE2LtczVQUetvtXhtCmLLWZWTn3roqNMHSR6UtXJg2EGnj5xPqXVePtYnnBKW9pay3FUcbQEEVp1qmcizkQdN",
  "key18": "2NHV5ZbKyC7cY95jQWgNKS3cQnouBjUr5FkfhjoCHBdWGhDoZH7TAgkXbqUiBtiPrRw4U3TgPAxtZyq4tinrdKRL",
  "key19": "4ps2WQPyjLVnc1wpwvtpjXrDSQmfv5TdTCCQ5NsTUo5SzxrYxjV2bF3zMf6iACpCF2iapMcDFebkzvZFHbXZuqSo",
  "key20": "24JznfmQjBr1xWVnbdMvUZLtc9hSkVgeLKi6fC4n8ZWhu9i2d7pboSMbf6u3zgeNTYHCtyujjfUJv2PEu5VHCRmf",
  "key21": "5wBvC8Vrhu3bpp7ResQuxBaxDJ1y9Fx9sJS5vechFRk69m2o8KTfNo2gAQEPekZUeR86X8MZfSV5AFqpJL4J4Ty9",
  "key22": "ng2DZTLZRe6rWYLMi1LYyAzn6buaDj5Kf4T2cpRs4YRLoD6ejBYq6rM2sXHjHcr1RBH1EQxcQLixZQVJm38n6H5",
  "key23": "mPgxjV5hKF7sbbKFhQuqsycYDJaysDcaXsoWBucXwBwi6ZGtsNo7C6S2DTqMD5jp2EedDi3csX4CEG3dmGt9dmd",
  "key24": "3qYpuocxiZhNHE6Mtak7zy4fVQ46KHvyERjgDQ24G2ztgC7Rgk7hesvmfD4PJtBFEVJLTovqUmQ5woLeqxAMhycF",
  "key25": "2wddsy7yDNASJ4BiHtoRHW5WhoqHSTZeKwERsAC8rnfxSWzLjYoyWaU1HNB2s66xAoR7iYSfSXcjQrWCKfKNsZEq",
  "key26": "27gQdF2uL5nqLWKTkLnkCZo9DbDJc4NiToMzKiFPc8pj7Z4T8btrQysRzmVfFJw29K4PuMsXoraBDGp857FKdj66",
  "key27": "3fsDJ9QWcNB8odggAKf5SAJ8iwH9dsHjL9X4w65CKWjTLhQbUR7Yk3FwryPQcGxrVr6hxeoR2kL3VjfsHzUPLWWz",
  "key28": "2MAxQ36zfLuCmAaXQznuukG8cWmEbvqunghAwsJCqrhmb1vBXi5kd77YTYPexcAWwbHzt8wGmeQgLQN5zupTPqfN",
  "key29": "DN1vjSHoTrAETKk5FGwboFiJeDEA7YBNzBXkEh4F5JTHmghCVxCqH9czX1vP4nvCYR6haMP72ujMv5zabUFUj1V",
  "key30": "49VzYZAzEPdMRmrooHpJMmZ7VDQKMML1HsyTEAa3SjY7HnGgHxJPGvzipA83BJRJu2ZtgMHNZeQkPZqpAcLyvnqi",
  "key31": "3tV19ykTXWJSVXAnZGQ4nZW4wts7gmhAzyp2AcDVARXBquzYHeAAEQBHjGb15wE2x5yshHd53jf4Er7cCdPKo14i",
  "key32": "3WBiroaismi59QbH5H4inznD1mE8zhBN1cNGLCKWKMmKywMKnx2UHvWE4q8LBj3T1FZuJZWDqALqFtGcDrJXRbcR",
  "key33": "2NghTCeALPUUVUBa3vFF6TDZjUpKDrznPmvVU5PCXs1EYz4wjoPe7KrYXXCJ5RifGorwXTvDf1QogDjVzL4LE4FU",
  "key34": "5dTCJimFfJ9edmQKzDo1xPKahn4dvcuZEoRexqfvAzYMZwqn61HNktfwgWy7vDWZVhcVGFYo8stacdYcKCsg3aiU",
  "key35": "3B41cLK98CuzpSX4Lj84h1HTgiAL3EzzoBpbFdJeng2iEWaExVAwcTMQZjF6wGRqzzGjNMExqiP1HaWFsAdLCwNY",
  "key36": "juU8vkuKQKYL4Dxwn2RaBA2k1r5P9hcauo2GB7KsVLxmHXsCF9JyTgDaPat1T7mpNkrPJqHHssiPBPXhzwQEiVp",
  "key37": "6aVjhe6EWC9ooUEb8gznZzaEPTgNKeZthXW9W9tEMVHDr2n9ydgfQv9zM1Rfb51NsU6GYEU55n2W9uTpsgJhMh9",
  "key38": "49Y7916o6PMEgHWmWmQoRCwUQHLuuPMxQvttU1ZoDE29YnZQktSVLDRdZDkzruKnrU6RCdXcuyrwbPsdwcxvrRDR",
  "key39": "4FmcWXmqs6U4om9e6bHQZMfNW7jrrpZVtveEorcPzUEMBXzgRif5TJkJf3UXSUdxCGBg9jDvsUqvTjd6AiepNj4K",
  "key40": "459tib88dkopFMpzoeXdfDPKuaRpRpQ8u7SdsHyTNdvC7ah6H7k2UfwufhZZAkkwzS1HQoqnrFa8WYate1XFSHka",
  "key41": "5Fmq7JDHieJXx6FKs1Xd7uhja8TRw76y81JhSvNUQWadntmkKmMPxHTciPgofKB5uttvoXgp5AU6yEYFJmy3UNzd",
  "key42": "45cBxWZTuegnGNzozyKi9SHDv5zwzkaKrMtkwvuueRaEcdozjJBdF6ah5tqUp7SHk5a1qKg3QGhAJPaAriseyDEG",
  "key43": "22mLrHvgejzNKHwUGYZGYA3aadqtcaRPwt99tSUfwT8F3ystXjwbQhEiuuYtHnVrgfZuwtDUXYBXtB3zqmkSJU7p",
  "key44": "5arL2uUggTGnFkp3fteiNvJQvmFN6bBEudgQERtA5JHNV3pP1qR5EPubQZ9qExM5KTXucPfBMHUYosvDyxNUgsUN",
  "key45": "5KaKqSXj6TBYhUtgAgfbR7d48tBuMhNDpnDCHyze8jjTAEKginK79jmwPm48nbkfoL4CVds92acHNSrgbSNVaFXT",
  "key46": "5RaJNRNKaHUVwf4GheUKZpXs9VRP1r27er1QfyjeTn2MWBbgeC3JREXs9q4Kj44pUkX2My76F1bCk2zCLMPAP2uB",
  "key47": "BbuRzkwaYMTcZSwWx2h3zaZ4tWxpRTZz4qdSm1SyZornDCLTJZB5PbtBDRrPAjiXrGQFKgcjodgNgiH1Y2vmhFh",
  "key48": "3NCW12FEVxUQBbZhNR6isqsA2yj7aC9Y8mU1vH1ZYG1fevtndnLcw6AP9Lmtn4qhgmXLWu2px3P5VDh47iC1RFcS"
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
