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
    "5Ao4ghmyxALQtv8andeKc8wsdu5coDxxBLqpq3QMp8gdDQUJgvdA3c89qNV9D7RrvzAMgMfcr2jGTcoZ7T2XAmfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gtqBBa4jUCSopuhhedjcz77ePkrLh1k2q1B5ibQZPQaUbiwBvLKKUxNutYTfRemeKEwTDY34bk1cYhbe75fsbA3",
  "key1": "2wFeyHfsfDvL3MhvtbbYtgr5a76B9QXDLNQZ6UVHJTPJNS9vzRtbEBVQVViKMZ1LKKtBHHvQ2QNgEuNKwnPwb1AX",
  "key2": "4SQzjmTUMLe6GRJT8dn2Zh31YyQA5bLVXNhiKLVfo3B18m4SNjRMvPE2Yp5HgiAa6L1GX3bgzAd316ur1pTsRLa8",
  "key3": "2KDJEiRuEtirXeSor1iiLtjYb2mcHFd326LJT8GWYLpQyNqvHXGXs6Bse4CCcXtiUedxSDitntRwT2kZbxkuqaby",
  "key4": "2TytvCTqv2QFYBg1Dq1p6QkYKnVjRzeomj7wkY437pB1qUiB1tA4j4TSJQpUFr81zL3DxgQZJ6e69J8tsQkJGvfQ",
  "key5": "3TAAVDURGWv2ibKYmtp7CS9rWFxSW8Scc33tYDVAg5ZxEQWbETMLswx4X7oMSm1gcUskYyDT1pZQu2Q6RZwvdRk2",
  "key6": "4MJzc3HhX5JxJQ1LtPsbAvTSh5JiqeuDsi4HTVdZ7YggLV4VDkxXoUgM4PsbMYn6eDD48AMGREqoTKWpUPu1JqUc",
  "key7": "2BTn2oNzCYMuJwzRni1RRJgdTcfdTKkyd3guVcaDhcgY1BuLqTyeueZz227AcwHTwcsH7knWwqD1i6ndV3C5VS5k",
  "key8": "3toWYHjsV89aZBsCFDghpkXM1VNwmYGDB6QtGtSpAp9CB2sr2UUjLTiLKBrHQe9M7whBt1ZsS3VicTqLntFLZ3YR",
  "key9": "62fudEhMD9vECurCyrWa9P4Q6gdGFEMJfxxB7XGSB95sEpXyxoK8RRfQeLmt9UupZJNzAeyhEq22h3gaxxqkzabv",
  "key10": "45m5yzLCqHcLgNeMZbuy2grpr7jgPR9pwhA4VrNi77yX85ncZG88PiVX42zKLF2KdgNJEkKnioBy5drmKmcaFTQd",
  "key11": "2cKVWngmfyUD5vinD7Tn9DUkaydjEQ5pgLL7K3KoCMnWdJMFyTRzYdwBb3usDz3NEG6PWPVHEuAQ7FgRQS2UbNF4",
  "key12": "2XBaBvtZfWTfR1DQB3xkQkfw19BJFGhLWoZ8sktNBcJRkrZj7mNtkoGoWd5D5LX5oG66TQNzwEfXcdCGVM6qHoY1",
  "key13": "5GUPXngdQDwpCZNJcanprMdtEzjZmBHnYdaohSvr6wYk67VXGf87uHW6LKQXYXrkELhDhCTKBY3xtD5LE6MKVpe8",
  "key14": "2MTJh9v4SzR9sgEhUFyxjjCaZt9HoXjoqK1tXujAz9RNWEn5r9WwEwyTp3EipBVc6vKemATwLs8ZXsJRMKUP9HfC",
  "key15": "2wn7QEGZg8Mxfb9VWaKLuzFyVWenpcEXYjf2tkqspLhBFT29c5YSAmiJrym8AabPyXCQbdgfcBhPi423atMkc3qC",
  "key16": "5s6QxAWz5XhkAtwDy2nKDTmEpEwPBcsxTtLUDsAdxkCf6y1krz1MiZNMBFZBsmYBZQ2bRkCpUL6YHejQYQTqLDmb",
  "key17": "borCHHN8HnjuZ6xiFJj2z6QpBGLf3bWQN5GXqGgYtNBQJ5s8Gw3RrFc8RxYbPzYeKF6GdF9f1F9iUdEwPN8s3H8",
  "key18": "5LdyQjxT3yMbwccshRngTXfy1Y256cxSMg1bxkifzf5T4nTtTdr1sEmg1jvjPMWfc9Xq3PBdCLS8En5YyRupTUGn",
  "key19": "wUWqBYnD9bKpKiu8uMJdRnaZ1vCeyqere2QYpbPjGt2Ep7zqwHzXzsB4rheYSHTsgN7orZAtABMUzaHaTG9FfTr",
  "key20": "3ejCbcUe6X4HuvvwPrrszYStCo9Y7QicY57CeBTEidNHQ487CBAM3WzZDjEMixmr9yWcLxm1cxt7Ki9JarKka3ZK",
  "key21": "2X96HA3Zo3U3efsBZ35n5w5yTnSTpUEZ2g5aaiKfgCkbkGrf8n5vj4foaT7wdBQ2UQXjCJwYsYVvEJbSdTQvngvg",
  "key22": "3zbfkBiDtwqQq7Xrw923UrfEDHcBknGrumhDq2XWwyatpMbYAUbVM7Yx4LGJ9tf3VrvK5hgMdP3WTaokGcFxT8mE",
  "key23": "4JTdC4YhrMZFpzHUwovkcCQKDqm9kNz2QLGDxhWA3xRRDs9fbNpwKDFkMxKrzZVBwFNQ2BCCUXqHcp2i5s7yWuP5",
  "key24": "4nBk1Fcxnu4fU3kT5BzFUSrSapkKrAL7y3TTpZ2wsAkEYQ5YtAiChgU4pxDs7HPM2jopk1Skrf8kgJD3rX2AdPWo",
  "key25": "3Z6mdJdZN23ss2KtZfbfPNzaEG1AcMVryx8qyTb35pgx5Jo5HvsZZdW6gEM6ZtGjbF5rBtzRNtuXbvEUhuSsSdga",
  "key26": "2RMMJEiU4r4bhwVkJrdCNEgxbZPSA8wGQCknBC4yxxh1getsF6B45WXt5kf1zqEb9BevmHUJoFej2BjixeXecYUS",
  "key27": "3RWP9cDyHt7sEcoUuiLHvwhdNj8yN9UBqpaSs5d3jJA19YELgvKGyVD9QifgLvqy2B3gRJZ1h62VNdPrMZHtH4jX",
  "key28": "V7GCN7rYp4Pp92LXU3BzgmoFr7ScFZtPdxwgWfMf2sdoS64F5QAbznSYdqk75PQLUZsG6HVRoeo6EL9h4pkkyPH",
  "key29": "PNHaevx6JJvfT8jA5dANvp92dNpiiiwL1bsS4QRf8SUrRdH6MfT5SHnu8oAKowwUyexpeUYbJrC4VoURhxrJwiU"
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
