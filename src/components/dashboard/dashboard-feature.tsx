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
    "3zHbfzw1m93ZTxCzjCexAfALyXxVhZk5tLbLHzckpT8DL5vUuJ4qXQ2EEsyHvTntMEDD4uHSL5KgUtEYrTUohr62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h9ZAJ4T17jEpx3Q89xYnCFVpLBojU1rqQea55DpafURbsCDjbmPc8a4tQKWiKAdbAM4BSCe8Joa76vPoWwf8ve2",
  "key1": "3ENRtVeYLwFQE7xJQWQQ3xm9KzUZKU8H3aPHo6eK3orFo5kphpUmniMZWrtH3Vnd68csc31N7cRKhtAzrALpAZb2",
  "key2": "3XP4mh3ooNmeodQnexoRCHHLL2zFc28pY737GsDP3oJLQg2RAktZnNXjscNwLtVSUAU8bM4WtWoVoX1zTpo8fAXg",
  "key3": "5EiTGAJin8G9PJmwnbxhtU5W4t3mE4SFmJYbnwsaCx6Kiqu3y1umVjh3JPVCAMqVJxCXMeJV2YfT8jFURtP1VWYc",
  "key4": "SHqaHbtVFLMJgTfJpxkGrqZQTJrkpGr2k5dHeLr6h6Dw2RZ3cvTZ9m8SYDZmUQYSh6SrD6dWQxaUhLViCwqcSQK",
  "key5": "5jZmt8Rscw7UsDTA99YftCBeKFMvXVwLBXpfk89BtS4sAz2vigCwXGhVnmhhKbqUeVGJyJ5X96XqPubtzAhWaPh1",
  "key6": "4HCPhUnYmxiqurYkCMtXiqA5im7mEimQ4rYKqBY5GqyWMyVmrHUABk3U9uTMNwUrwmW2HtCyiZh5oE9SAJVMeabb",
  "key7": "4TPisGEdfMrNRSAQn5kVL7uSXMrFfgWSm3yDRGn4AXGTZs4UvMULRNmoH6pGqDB4t6LYLuDAtP9xThZhj6eSm17i",
  "key8": "5HdBUk92eMNqnoUneFxVubwDhdJ3JHdjLZrHbP5hsDfcf6kGWR4DNExExQU12nugfmtCcK6DXQjLv7EwnqL3sieR",
  "key9": "2is9DV7DVLEuJe88u9hUCpmogL9sq7dmRZzosEzoBUTrwJ3xa8HCBNuEGVrNVWyULmjFfY3fkmADL1MUtAQPm8xL",
  "key10": "2XMYAGDKPwHGs7DU58BH6ePP4bEZhuMcoErd21dzi2EtKX4jei514Neokqdixmm619oaArpwiqFwr5R6mBdMkonE",
  "key11": "4cqCYQ57k21eKiA4vtPLMkYjtD1GmFuJv9CmQyytgeaczyu5abe1au7XryaXkYWbC6UXtMKZ8WaUWa5AkAUXMN7m",
  "key12": "hd8uRATV4PQHFFzUhRTnDWzCHeJH34LtvvThZqWTYHj2JVU8Xye1z8vCZh6W4Qve7YPsUuQhtC8K9o78oVUwFQx",
  "key13": "348jpDD6MaGJY3VYXok4wG4dHVEseRCgiMb1kBwLjRFr12nohGrpnm2Q1zBqAjRkdqxQo22KuEXiyuaT1P3XFm4B",
  "key14": "4DQDUBr6StmPyVAdtuHoa2sWLFokNAtYmW1jJZ3s3TxaUzU9kEmbzaP3MaCWVrbMvgqU5wa74kHoAs82fknN7BEh",
  "key15": "24hE4NaXKGMhSBNeAvjsdjx7aSRgSFZkWAUnBAoVAjv82iRC59mJfqFp1Py9yzathxyc88fe92iKfd4B8CkWHnmU",
  "key16": "9quGPrcSXrAPNam1ejJdoyXQ8Pg6LTEvMSCWyV62LBbed9iNGbM3CTTH6Tj6hEijp4R4LyKXR2yftoEz5VRhZhk",
  "key17": "2SZeQj4V77zYqq1mSf5VnaL6pqcRyhH7VCtb1xM1CD77zMFdF2XrV4pwGcHvGEL9FgdBaKY2vENRPYCMEJed77Jo",
  "key18": "22PTPXHuBh1P88W6WwQfxzq2iN49zgEV7ZCoQLSGSEbfZ6JHfJAwsHR6KFou3nKNuig9Cp7pGcK4HDZ4ECkuiSud",
  "key19": "3xjnFq6etWk58HBJPxdrk5Yo6WPcMRaYaBiMf7wmme1NXZakqphk4cpaXAVkZnjfz6h9XpvGmqyhymvWbUgzUa1C",
  "key20": "3ELZ9LNLQLxk9XDhUroHpxcFvwE1K9w7iLXQcmoCvKQWxa7Mt7LHnZqcm19mnTCMbpVfuVqaWvsLTiNpkNW4Zggr",
  "key21": "3mRnqiMvuC22ozkn6ao7PEMCeY3xGid7zsYsqKJzr7V97GJhCrWVFnGRmpni8wbaEPkQfpQ9MwPcP92QgykoRQik",
  "key22": "3Ap7J1ykoZrb3r8nS48bGJYvfrbasK7xnrADdUsnMWj8LdG1xRD5ogzaBfbkoxotTJR5orghZEKRtzXauJ9LWry4",
  "key23": "5x9byhyJWxUc8aPbWyvTdZhe6v41NFQXgDdwdByVs4GZ9trMpzELbqB845vXeu6BnZprfd91gDd1JhfK7Kdh42a",
  "key24": "4cJBFnMcMcZgxoAEAPy2jRuqVFJfNA7xhG9YYyGTSrTSaAskjCbuX43WCnrxfzT3VGMxJLvmX1JtUVrwpznKEZ8Q",
  "key25": "2HzfBRZiPw7JNojBpRYwKpqWmF7ygqCiuMvR1rPefEZuCL757W3STVPtf6SVD4ZkBAHj6oss7puUmC31bTPG9bNP",
  "key26": "3HRa1fpxfHXFigBPdgcLxN33jzsbJZvbZo5gCRWNcUT6StgSiyHdubLu9esHM9hQj8CrRpRJ5QWFo3SGDjsR2o9x",
  "key27": "42rmfonuoCBNhVGvEe753MKsR33kXKzWrC2FTBHDXAQtZZ8i9Uqe6CSf8nnb4EntYUr9b5EsECT3V5gzbcwFXrwR",
  "key28": "2QDJt9uq84A7HcrJMpegeJo9wRQRiuwXVU4736DZEcESifVqBCtYMVt8e4AzGmHFSsfNmqTMwZmxPUASUfh15x8V",
  "key29": "4shnn6Car4Tta6o222BXP22Y9NZ2JhQvR5JAhbENxBfJGKcBntnQitS16YkdZ4v8inkCmbFLPA5nR17CZ7ELhFv2",
  "key30": "5BwKW8wHZNujJsBNjxu8DefsjCuzoXhL7fdKBWuQRJvTNY2i5jYgAJ4VdW4HxS7uPNctfY5QakeZnU35v7KS3xFB",
  "key31": "2gSc8NSNncFzErtfma6hu31VtWqPcJG46SRoeskxQCwTad6qMCMHtdQYrn2BnTmFUA3bPRzrisoqmQtPyiu4AoNo",
  "key32": "5oUYEUwKn4Cr5wtVdt67KxgHXbHTYSx9rjXrMpeBQCDm6afvrh8v114pxfaGMwVXYw5TUbAa4A1ffZnHtvwVZySb",
  "key33": "4NuxeQBiGuF1ABcwkZeCRBtwahb1nZn1nViwFBbXHWv5xheN25WxxxyCy9uGUkc5goXoDCZ6JA9U2QQvU9Sj2Awf",
  "key34": "2gQDHsZQ7ET56M9Ukjiqa6fLZ7p6G6dtnKKAW5eXbyCexMsLu2MKL7xCpRzT8MVjJT6e16Sp4jLca6DdFUBZqgvh",
  "key35": "5w6PYGrK2g9Hf3QVutQceWYQSdoEcmCq74nx9dVz7jUthP4cUgiuBAxYgjF72N32VYGcqxJmg1mCaGfS3wMr7xfn",
  "key36": "2ftbeqeDSkWL3K89rNJJDy8XUSmqfjb2UyRvXWKbTSypyDiasoVqMge15UikCAiWMtAeFbBxn4DkEBrF4KNSA1UR",
  "key37": "5Q9XALWQGNdt86c2AsonbJCkzeuYw6dbuAy9Jn7v4z4e1MoXqeuno66AGnhSr8ChpvzKeTjLFRocxocgLRWo7zDs"
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
