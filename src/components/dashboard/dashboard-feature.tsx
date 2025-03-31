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
    "5iKPvGxBp3XRa4uiWSeQJ7qJrPseoWZRC65xHPRkEBG6HFqLrmBsCscLj2A47tkPpgDDNp5WcYAUVsege7tnn2i8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ARuoSYdB2aAWVPVUNzXDsv8mRqWMwMpVjhiJoifFY35zuvfWh84hNZrP9vMuz9v9HTqogU31XQrcH86d8XuFfLB",
  "key1": "4um1ozmCxfVT3PyN42iWSKxDNXMQeP8ZehT5HSG1j1zz2dnJEJCuFT3upu3gHUxde2aww1vLPCXe3gH9atWWo9TZ",
  "key2": "2vFHrmFtq1z42rDVcvgByipfE39S3ytdrXxFn6WwDodf3iq9BD6jZfDQboexsRw6BG6mGRC9RQpJs7CrxTpC667M",
  "key3": "2GVohsWi7FtyvuCLA3yAA9JMj6onV8LuPkEWvLbFTkXdqLFAQjHkJpfoWLqcFBkCXwnESjAwKg1xX7UFPTJPzC7Z",
  "key4": "4k2Uik6TPetoWxq4KJxLUZqzVQpH7RQJNyqaWYAJoLPVuPJKhj1CaaGSUhhPCy1BreLKAwTTnM9DCjDwSzFUYMbW",
  "key5": "3CY6ZALLEDePrNj5bDaikeXiU6aLX67GMbwXoLgsnfJRpJyJbnvabfrUNQMMP5CfMAAWPHUwXPeBfuND977ko6Gc",
  "key6": "4wShxo2AY9yFCMfULppoXWu1zQh1AtJuFPX6VnLnkws9tXxXerfeWgTu9Vy7Pvz9sxv2PkoYgDEPtagyzPEFqBxT",
  "key7": "2HYACN5NDWbVq37utxjbjpYPHFuwJm7pQAUBxcXUj16NxZcLEdw7w8sYgwWXYjaSKZQFAQNNJVvBASgSQ9vk8zQd",
  "key8": "57eJnuWgNea49KmFqz7YFsB3vHUtcUy9nGVpurZpbQVjmXhn3sqjMXExiN5NLxCLinNGY3MhqH8BsJa5ETxg6o5A",
  "key9": "5A315tCvJfxS3isgVZTAhtEJaPYTQqKffn5HwfiVyNzqKJhPTnLe4eNGWF3DR5aGqrDNtj4DVzgB2vbuyqFigCYf",
  "key10": "rXkZEm7KS8RwLzKWJRLkLVLSUtNx2qEUiu1xYj78NrQs4c2o7wA2y3ttAQ26zMqgVX3ivAbQKeAFFvgvY8zXCU1",
  "key11": "3pmetr7jHawgAUDnjk2FKyuEfkkZPhSBd5ewXJwUNDBxXYp5aqmq7Joju2thfiNjwdfAB8HpktreKNUkYX9mCqmr",
  "key12": "4D6FTxxZrrPVTswrhvpbzMkof7jNMDbRbxLoh3H82HfRQFzqBWKCG4yjPSKnSzYgLFc3oxZwkFC1N9jp3bv2t49T",
  "key13": "3ZgDidTAKrehYCAGCGbWjN17yQfeE6dsi95j2uVpmxuRrzqWDDha1gftXt92zpAsbZ1c2jj9MZzKGh4s3yCVoxxj",
  "key14": "8vCxDdn51reSAMo1iHXTSBh5qRSLFCQpFVS1jkZ47kdF3xuAEppLtxA2YmX8hdBWSySakzGGf9Q9BUNax5ACxcA",
  "key15": "EXc8aKxxrMUxFhXj4gzFQ7FdM5W6EgzRUpKzQKpqZzEZDCCiwxwYbhZvwvoCjDuAtvEopC6ACB33HbiwBHhpKkn",
  "key16": "4R1hVRt3wEzrytbV81yC19hJqG1RqXie98aDPbzoittyNPdKuJtePXDJyADEizsued7k5j8776edXMSLN9u3igAX",
  "key17": "4n4Fyg77b8Y97ZzVf6qkU5qLYASHsPiHiMrk76gfe5J92EP9aEXDZHSyNvU6UkRZ7rDJsZbTmy76ted9nXWhB4Mz",
  "key18": "joZypmNqbn3SpvQmUzEXfFgWccqfGM2xD65mM2z94H18dTzjmhwfDdGMKEjV78nVayoWrjNVG19jJw2UkFc5zFa",
  "key19": "4kYSVBZ5KPW1ZU14eFQBrj336RVkGUMRaZLKL9oXoBDgfZug4U1LdAMZvuajcUsTojbqQgyCUoC7WT7Zm1xqPNT",
  "key20": "4FzfWo3yNY4MRiP3Vuby6fRRye6QqEjGYi22hoCYXZv7Mz2sfQHhEfEwURDLBdboqan9eh3QHKRLgYMsnuSCoVHa",
  "key21": "4TWosPZXBm9a1xedmCBBN1EDhLbo7sVt7RnQuFrbTp5pC9FWHhaBUPfwF9kqMN9ACjx27p41sno36oBhDdmiCJAX",
  "key22": "L1ZAEzEksjXm683bK6RPo1eauAeCbicTtfRLjN33BHhASBt9nwqTDkWkmjBUVNEBCach6y1cSbwn77Q8jWounmT",
  "key23": "2kn5szkzyAn4S1oLyWkTUadHY7FqKZoNZf6RjGAppuM2LfpW7Wc9VBVRL4x5zMtcDd1j5czPQRfCWsW1bdQGAnve",
  "key24": "4ov8UMHNd6CRKSPUXJdjx7WZrYqPcK8788XGzYFAj2MryjXzFR59qDoPoe5Q3Ce5sSpkfwBgyp9wWTP8UywjtrDh",
  "key25": "2sWEduDUGwAD4VBWKBrvMkmoEMY1tpPvArnUDJhr3tKx8eieGaTRZXTbWBTMQETbfxkxiY1rvzwYpVaPVWa7mDuK",
  "key26": "v4JcWuoVRd88e3MJgxEzg2uDsbaxTW8ok76u3SwRrEvyGbgFB7qTQAStzqtpjRhXeMWkwcV4JQBz1rR7aP2nS3V",
  "key27": "3FBtENbWubtDMiqm9bbvSWhvuaVWrzws2jFBkS4rwCrEukpY4q4iEysRMn9TgTBx7QiKPxR67jdwoVYU8tEvS6Q5"
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
