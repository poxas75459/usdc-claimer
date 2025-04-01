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
    "2td1w8naYF9R9VKgihHBirx6yNFfJV5FNqLGrZHAC2AnKNoCNQSurSveSfVZKu98FEYF6jpKmx6A4RtvUZNuAeYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Q86s1fT9TVeLzbxTd6ynvq4TgeEtYwgx2wHkN3vQHAxmKQuAWnyo7m6yywCExeZdUEjoHnmojrRr6MX1jtrS3z",
  "key1": "Aug1SyfxN8ragZpqkufxo93w5LftZN6GsDC4Qzo3ArqdheL7aJ4brzYibF2ZANGGckAVsu9YtRitmPEyDUn6SQh",
  "key2": "t5FuEwrZuNsQVCG3g2BwXFBJAvHfCrfBKcvN7qrwHSkPVJW6ZwRsrHyEMbdMGTFGVJw6zaPSD5C5kxurCtmLk5W",
  "key3": "22LTW6djwp6ErYE3iXpxWy6zpYiTESx1qXJgU242bEyNXw6RyBc5vN6nudNFiiJTQfmwTm1BBUQdYbMAN2YnGRPR",
  "key4": "39649XuMKaNPK2HZ6BBvjWHpu6313JKoBjXnhUUk8AM1zg9rVnZtxkWEy4LsrYSkwHU479ggt4AeEn5WiskSwheQ",
  "key5": "5D1UBY8ur68H8LfLvZqsLDnPwLw43ppB5UYcpuCjJVHfE1mP3GQpEw6nMBARFDFXLMRA4ayfodmycyKSoW8NB894",
  "key6": "5Vov4BVznD8aBPsqF7DuNs1qhfpZSu9sFajJQCe2ZEm5Nu1WwckzRF8RhpHdEGL2hduWKjENHjyd6smULM1XoX9y",
  "key7": "5zqZesJCB8ZBuehWowFYeQEAbBVAAp73XkY2zWr5KyWKv5rh4TdacdUxqUgBns4wJuwTgAg3knzANvrEkoxkToPZ",
  "key8": "38Kvq727B8zGn1eVygfiUpbuFZ3MTWr5RaVeDVa5hG24mAoJgBsVGhSoj8ppq1PcAj3gJezNKJeznvDFBAcwtTW7",
  "key9": "2H16z7LjkRSaviJKQUqcv67pbF673oSpVQNsCCqJFGnL9F2QUGm2ZpiSbQSRk9PtUaq5zjjs3AvvpEQdAkZE4jiw",
  "key10": "4SnXrB938xhu1XbNwQQaJ6DAzKPopgrEc7JXvhu6AFEjqSqoz28DC98omU3JWGiFLM6EqDjgSoEtWHKe1ehoVyDN",
  "key11": "2UMA1G5dZ6yFKaqk5WxM9azqfYiKS3yHDGG57xGEy8VXuhs64v2yQc9CwRz2wrQRn352y9a9XrHgezoTPCsJ1dfm",
  "key12": "33FXhAnRz1YBMHvwY9hCh4D8HGAmhWodQUS2KsGaAdJg4HXhF9yiYoVrQgkzvXsp9ZmhQQ364t2DLFvfqTcGQh3b",
  "key13": "1pddadCg1sjrZhKV9w669cbUutbzmkQCY4J5Yb1BcMhpBBn2N8nzisbBuo6RveAy5Lgrzvmas39pmKsvsjxRxix",
  "key14": "2RYJS5cxLSgDTX5oZ4CF8jGtQRM1tEdzu6YZqkAYtaN5uSCJgEznHYCU89v56aJgxXgH8x12mxXPj1QHi1frY2no",
  "key15": "8smLxoVzWSYJCbudKpYgkfmdAVwC1yvFt59ZsYQFrm2jVKxxzNJtGbAZYkNLhVRnT3PVK82EBuSJ524TFCphqR2",
  "key16": "bKzydpYSGvezkHgBVMumQ5BExa3eLFHCfyx7k4SnCfuYoVzrCy27jCBbCKHi2xe9JeKyuhhqCtGr9Z6JXGwScLp",
  "key17": "3fTj4qR23rXRQuTzX763LPyi5b5k7E6ZQgbfGB1ptCdQuk7fhh7Z8Ck4ggw9oASG4ULTwPTRSjbakq9UxWze2QvX",
  "key18": "5DZd8KxUxLZ9zKy2vLXKsSSyUEbjePheTCPLNYLGZjShBb3qgYbDv7fLcWEgSroYYC5a3oePKmMSTNkVQFBJZ6JC",
  "key19": "41e5aKL4MjsJ2QLpQS2pbswin7bmPbJsDGam4gWUse6ThTKoz1pwsi8P5sWwngcuDbP78SnnRHfuqMraMGfqasK3",
  "key20": "5tee5brH3zKbHC9Se1Y5vQAHP1WhQmj4L3AnSK2cG7hLoTcuCpe689ogKANWX5pUJu18P4k8rkWGTjZ66yB52AzY",
  "key21": "4dmg47t5HPzGjZ5PFeFAYV8R25kp7AqsprRzn1xFwyoWyhoMSLkZWzTsjpEkJNkPz2TSADEL15ZWwU3RDmmGyuEP",
  "key22": "4tG81EN5mEi6qmDyS4zmdENXjvLjvffBnt4xs9Phqgnsb3wybXY4kD9RDzFdQtuwp63XbmhN1DhVEEejt17nPpqz",
  "key23": "3muZAbPsDyLiGpDpbUQmxX3soMWjj84uCTc7HWuhs4tT8jceHtMU1UvFvTfS8JBKG28vJHwDLSv5DegFR1yxrh9j",
  "key24": "uVUQJywgvzkSpRoLTqtVE77Qq6PzmsQD5WoqMvrHtqZt4cBPvB5QwLwxGCFuWoJf7fB24YUpk5cH1UAh1CPUUd8",
  "key25": "21DKpiUsZLPxWEkFeiizUt622kXMXsChbqom9Fc7DJQJQbynB3q9pJEv9nLQ7ty9wAq1RwfRgyexELcvD5DYrzpT",
  "key26": "322FvmbhKu6SW5Q1JF7wSzfGjApRR57L77FXhV1e4KT5QxoJXQkLEgLtXaApRBLs7xcD5ZtofkfWZDY3vBbFrUGi",
  "key27": "2C7D3cdLaaM5TbfCvorMdLzbPm728MViMAxbc492f73ZVuoN8Gtt3pM1AkcES44G7HVzoH6BykPG85phemkJsfFP",
  "key28": "4axZUJyuWV6S9RLzTivv8TMjTd8VSf1WSMn8vgccqG6rti4tLyJkvGvN8eXpdGPyeSuLb6TXFV3wXnSk9mpAhGpF",
  "key29": "57LeLfnMWJKUiM46Wa2bu8YuXKd6vFJfFK8V5ixrciBY7faw51atzY4nwye4kC1Gdq6TSJqWhGaX12u4fyogMuS2",
  "key30": "3Yz5CYaRTgZ8fXMx8r6hFmHPZLLxrqcZHkjsbKDgcH5HmMosYfAVhUyW1PxzjyTgpzvCyg28YdX2U7AHYmFaGWNZ",
  "key31": "JdPWPcCc96RtUDGQ8YTrptLJpp3LBDwoRnMKUvS7nwWCg1ZsmxmKkGJvswhuMaZhbT4e9LHS2JTuYFCVHXJL6MX",
  "key32": "WnKAq3WDjhrEuvrK7pExF5SRe9PBXgKQhpxv8bRFbbtDidqpJAqzejqZzP8ECAEa9Sb1jdZQJ6WG6scDUyrk8fV",
  "key33": "5BaGPs52QRkkKXJHr8i8P8sh2GHUMGzyXs6zy77Eb83XBVWjP72UAUc49UsNZNNZe1DbuujD9519Vm5hEs7HP7qt",
  "key34": "3FF9b2jjNLssDvALr8cMSJmPmRkQYvrXnXS4BCuGRjk4dAMibmbycZGA1uudrzeeBaNxAGof4A9NpJwuhijTL1Ux",
  "key35": "2sYQKTC6U2MmPHjyPe4jdLcnscgShpBp7gNRKUshWN9CgLgk1bVNXyud8KEpyDVGmggoz9WVvT5A4zXu7GBRgeux",
  "key36": "2b1ZYVVxXwS4HoXupXA3vTJTk6oh9AnjRwt8roxZuGWHZr5JbDC59zBrxhMZtP9T4XF1NPQ3k6rLpHzUPsEubXSi",
  "key37": "4MvepGQVYkEREvSZ3cS4QR8EnuBVUQnSqHvGeY1Bk1ZpssQe1DjwsVjs37ai34yFwfDvNV4CCQW1qkgWXk7s6QpL",
  "key38": "2u7cGDUZ2WcdNoYacKovd2ERm674Y7S3qoES2Y45LsAzP5kbbgNbtwsHKS3JChSZMqMstLz33jG1EVv5a6RfMPLR",
  "key39": "7tBDzpAAvyaxwCNRBFfJXJPW7BiKKSLBXmjfHT3UZsFGvTtRrCMZYjMfnxjN714RMMobzQ7gn3hiLzCiQ9AsfqS",
  "key40": "4g9e4YaZEugVGocKedgammNVfj9z2YWMCbDTdu1r4zAr4342Mq9wNfmdU6TcFo5vv6JywPWr6ZsApQUpTa3z2zCE",
  "key41": "PefUfvJFgT8pQeA2jBPvCcv7kHNnfaaC5kADDYLriXt43q1XhhPdPm6xfj5gMHwhgf7ouhHm7xNeuDtNwBZjhPL",
  "key42": "5B1DoJLNNvpVE2t7RysacgC4yFawuB5gDmkECMJqJUjJ52PdKg4jtiQEbgK8j4QZfE6XphdYyVXNBSt2cyLgfvrW",
  "key43": "5vnVDypbvRnu82CQeUndf9VLYuWHXZ4DQCXHNpM96VkELzqvrZqoKJ5YWV1CycF1Fzcp8hznnmSYJQcEgUJMyWrC",
  "key44": "3ehLsTLshErXyJmnWVwngyMLeFXoqhef5MiVbhv8THCwnN2Z1PY2WfirQzVY6fndRERRmRXBrdTtV9KLHeDtY12m"
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
