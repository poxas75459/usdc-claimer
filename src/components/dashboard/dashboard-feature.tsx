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
    "2USN3sVNHUvBo7WDZYDQxuF2htEH4wL2yaayUsWWTRwcSseP5yQ79h49aZ8sNcArUGVMcDnrnKVXhthrMc8zx81C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L7a6eUzgTTbxump6pBKEeP8A2xMThfPmhNxNkAh7H8igkRBwW5hoTtQwuCdVhFURHbtSkFcK5o11z4UaYzQpzyo",
  "key1": "2BWG7LtTDVUVVWY7wgnnsK3h7K2ckpabAvfRUVNzU1JfLg8JrB7XiMdvdYNzLRtxtJ3xCi8SJQrLBQLwzozrFPuy",
  "key2": "5HMUcK3JWCVS1nAZcGqjHgcfHa47Mk4STK6ng9nbeBNpXVcq2Hxvj8HGYoVxQFthLtU9mdYuz4CDhCxA4XVLTaWq",
  "key3": "4CYTtL8D8YYrWXLMSJHBQLze4PcMkwzAbxKX2t9aso9czaoQGDeE2E1k8qX8hjN8D2wGcLCcrNdCcCyyReAQZ6B7",
  "key4": "2F8p44AoYg5FjvU8b8RhjPNvHeeCKXxWrKSSaqQvZuZLff8XnSZvH7WhQ3qG5Ymb5YDMTjiXNocvRkigSZLjyFV",
  "key5": "8L8rUuStE9YqUgoT3e1kiaEjrfhCWeSstokt1m6EhcQzrr2hze8jKXtY6XGTzXZhPWJUwRYNEFh6KDxgko7azuB",
  "key6": "4gPwxKduSSF9PU55uMppwm8T3WqSAQbUT4cqZk4zoZme4GB75YQS3iMaRSiyhJkWmQsPLZfboKyJ2RDHDKqX7dcm",
  "key7": "59wvQcC99nh5m4XuTQTWCzHKxzEbTRmJB5bxDtzszQ1e3hkppZFx1MtPa9DpC8SiA1wsSaet6fVpj5cSMLvhjYhp",
  "key8": "5Js6BZz1dDY7Ln2Vy28HTkiXX6yqYQWkjzok2NuR4iuUXzSgPEGwSoP8vtN7EzbQoUAUtusE1BhfH9jphninAbpu",
  "key9": "4bZoTTbPfSdh6z3NTbC5qXpN9ymuKHsxEEiYi75AxrLrcTsANgMwGVusrxuKqDHa58BKeujkZsAhqsvqXPcNWutd",
  "key10": "4Kv4Xhe75mVBYzF8kSZPvzzs2VrH9niLY2GRJdA8zcGrdT2eRUD9SuUqXTQNb5aKDsuE2fwSZuRRJDcQPVWwZaJa",
  "key11": "4FJRgaAvmWP6rJMzD7CA7GLtYUmkbayLmi7vU5FPSCP5FnZzVDJkNnTBjdLwCdn8b3snnYTJnbKdoyZAje4jo9fc",
  "key12": "5ix9Zzi4QHCJURkiiA7ApBxgrmGTFdzqkPgMVZg2LEJqSvdN7KC137B5rbHiUBGBTGgEQzEUMFGXY1zx5CV9BCQ7",
  "key13": "3nnvgTmVJvEqXaYTY4eJznEfzewfZq6QLD6R6wtWRiWVR16UkUmZtDUwwwL5eXH15oahEn6JMGsr1ZBiy7N6Gxre",
  "key14": "3SVCqDdzj4NyRaPyRyPtdTaKJHfY2fBeWit3WRLsmvvUDbykGb3XK4BuKEjyr3FgPVB34PwanWpADABpXULdNvpg",
  "key15": "5aV3KjvPQUgWNf7SXLQCnENmML8FsGmNNEEgTrGgzttieBA7Xz1aWtobKPCSMKkT3VFBjLRFBzT449AYaCUd8vEa",
  "key16": "2fF4Z7kfzgHfUseXQf34AsdPvMz7Ktb7mb3Dnsx2PuwzY8At3JqpZ3vvSaptuY3AQuGsuw3W3XQenymLrqaKT35e",
  "key17": "3rMiMyBTKwPd5SEN3cDaXVKvkzSgtXGyAs8vXmZr9JbDNzeW3Lth5iox8ALP64ugcddXZm9nQQza74LJBvVFUC8d",
  "key18": "565KWj5F92qtjdLD6WVZZSDBPm1v3wsPyPUytdmQNrZE2fWJx6m98qxiJn64J8iDz2eAAoWbUsXCBuZ2qEXkV6rh",
  "key19": "biXgPJ4VwgGVddwe653JmT1CeGk8CxJuJamxrsNwVLQ4tvkwSTVqDEs6uhppZDD3QAicnKnXS984isomEDastat",
  "key20": "46Pfm658bk7snpc6izx34ZPTwYf5x9nPB5nGkoMEDrCUEk1rdoGJjjoz2LU8mPEnQh648qhmeXeeNf6CjNpFetAh",
  "key21": "5yaEM2gcgD9zyCykzpr9C8LDACMg8uKwERoZ7HGj9hC9TeJnf26KAY31k3ZNYJWW9jMcE469kwx9LHtxyuzdFpCQ",
  "key22": "DXUtsXEoSGofusnQ78j4PSjjTm6eikCDBgBA5Q3vppfXeqrraPMzrLDJYxKjWxZXfYuEq1P1aVHMWAx92dSkmkp",
  "key23": "3q3sMMJP9KjjRTf4iWsAgrFkEXynWNYumkGWDZ1CjX1k21VbTZ412WWrUv2QUJLEEZkpBm9ft19VKsvKVzFNkzR4",
  "key24": "CKK4jjx2FSyJ5W1fZ93RT7XnLBhJP9QTzUrrttirbxmzhEjH5Z49fYJ3DPAEVo3C9mCuHEowx6AooK726AVGDLD",
  "key25": "3ziCnLYTyfUWFAi9zBMxJ4zow8qMLMdNT58MRW1pdMtiTrCg4snr3HJP32SMRFGF2b9ihsoZsBsu6Bs2U2M6Tv9x",
  "key26": "gj8h7xn47oafRuj8DdtSYtgv645FoSdBsXMRW5yC4EnzLaJfJAM1ZZoiKeAh2e43cNPqqYgMVY2f82BWHbUjbC7",
  "key27": "3FTR1tDGnMeRaoSB8mdv9prqd7gavny8zfhhHxHMwptawMRHeJRrYJtzqsKxgYJJvj1cDVBhcQqsaBFh4dkqQ8vn",
  "key28": "3jFzwKYZpS8pjfUYtT7gbZu59dZtTWJmokgqVv8TAMgcgsRnRMtehgLfpiGAgKZUtZ95wwP3ph2W7Ao2NwdxvFRf",
  "key29": "5NbDTjnk5m72aYgCDj1sBSrWZc5hsPWXso9Qj7x52B3kxikqnKcvNN4hpEsGkJBPFjaDnjGsTuEzo9N3Vs5BTzNu",
  "key30": "cGxAjDqD7RyM1XqbtXQLf5qpDUydEeD5AtBooTwUtAVizQbrsAWe7F3fb5fLg9FixGG5kjGSmeEEhNc9py3MRPX",
  "key31": "PHS886zVvh4NBkeW9WgEcN4qvoMHuj1ruC1JF6LFPJcmjwYrjaxmUG7MpLjs1F5vSXVzx1GHFpe6X86AuX1mRwE",
  "key32": "4rxi9gzw9wjECR7oAPoMR48WBZgNhWTdiPbpV7BnNJJtAfSLgbwhxyCsdWADxBXSqkUnTCP5hKHp5S5cQRKzkFjz",
  "key33": "62wY6A2T8BDz4rFSM8m9WwRV3zQ3NZRb9GLKDEbww8jvvXHLffDTKkuZGVJGUx7KJbFm4gZ9RXoc1QeK5poyKHPy",
  "key34": "45xPVdTfzb8FqqKCatk4H2DUAw5kYczMVYpP9UbEWjfvF8dWxEeCmwwtmzLdQ6N5sWH5KXefjgUTXAhXGmYP2bXK",
  "key35": "2vJoPmTtbvQrLjLLUy5Uo85BNAHozXYbEF26YCQrbWvQPgWzC62ftn7RjBwhMtp3mUzzN4GKa2DsPqAPPJD6dmqu",
  "key36": "5G34gNYKPLREb7sRMBKj7PF3zBG68Fak1xX6YaTiy6NEwRVnuuVCYC4vK2jHnhDLtoDii33F8obiowL9R71MSXqA",
  "key37": "4MMgp3oaDguSUSPxHryhPKqtCX4aGghdvLi1RgWFuxVmLmkvMnbiTQMcd6NiAdk7YfqM8YbcwwyQ8LoB53XarFM",
  "key38": "4zYu98sXLY5YJqnBUEKMxbeKdXCXyhPYamrR4pDeEoanqGjDoXy5KUaCKPMXsPM5Sv5wM7u9ctRkSyT4YBuRkeQp",
  "key39": "2WhC2fg1T5AFvjKdUrY3ek5e1vFnkhDtrcdezmT2qiSJ1wpX4xHvs4g8Y7TjRZKjKXpKFCTVgAN3JZ6VRhe3ivc2"
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
