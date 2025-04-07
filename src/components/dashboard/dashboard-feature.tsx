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
    "54WFPScs8pASqXzpdWh9fr32N1wkxkFXhk41kmBDqY2fs4hhXhiVrjKNf6LMmLeEqjY34WNEt4tPJ97STEVu55h3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xbSdbReXwqVDyPRSPed4edXMMUruAYRcVU4eKYW5NcEg455t295KEJxg4y7bS61wbL1xUYfUjkzvXn3PjctZxco",
  "key1": "2wmfECmgZQng6zBrbjb1V9CfRRYtXqsnhyCtgoBZTAkvBSESu6zx1P4UXuvJeH2jA8WFdJj3h9mjntaX6u5aA7Fz",
  "key2": "niMAuqrJEubuzTdrbB1QEeXp8gZJoWJR8S5yiVz5AoM8KXN5WYSxsEv8Gtxs72DTQ7opLKXT3Rhqj4pfywX49Jz",
  "key3": "3taDfLUnaFK8N7pTkfU9ChQpF4akZHxqGpUuwFWa3QpjuwS3P2aBMBU73bFeoikSJMvGVmo5925fJKE2FWtCrNJL",
  "key4": "5tyM9HobbjxrhyKJ9zrtW5MGuHcTZPqGmyJMmKK7kXk6vjLfQyLEE6RZiadGDTZJW3w8Qqdi7KxRxvRiF3SgXTDu",
  "key5": "4sVJTaVSey2V8CNyRgUPYyUk2zLUFSUmyRByNyNmtX6yzES9LasMGFM7BLPEQvdkPTeJsVzqQ61zFSGERn47fZ7q",
  "key6": "3SJwEZt2AnaELGyLuDJMFGwuAjTN2UPvAAn4mop7AcT9bCbJ3VcLiNG8oyY3gFd2PMEdN67r2vXf8PiwbnCLFBo6",
  "key7": "5Bu4K4X8QnK7ug4AQvdKxdaLUPJiMbg47a8zwFpWRuv2zeWu1Nh67mWXvuYFBa8y4QJo2HmwytuMLqkfM1WiuPrX",
  "key8": "559NfbjiGAVNhVz5kmnvTVmRKLH9VnQkTyZPhGtgnEF9ZCm3iiF7sp35Yu3ZiGXXNC7AJJ5AP2ZqB7iCTtzPyLq5",
  "key9": "YMKEAtdqXAHTfkdP17wJQyvbfx4sZwp9RAXrgRCmdrYRDwe6VWyRoEYv93Tn1EnFeeh1StxeXKSt5r62jvnzehy",
  "key10": "2r9mT15WY2L8geBqwEpEjPBqQ8M3YTYnNyFfnamp537JhZhAqvxMsBeGqooADhZyAjoqy3ggg3P9GJW9BcpDumsS",
  "key11": "sj6wgjeRddHPVXXTF3SN5c62ecBVo1o1JA7jjdsn4ep63f3TEqyenKDbDDRjhEhuz6qV5xNvpPJwue2DbaSTNHs",
  "key12": "5EMk1MMmPtiMiTBT4iWjnwySnRnxn5j8krK6yKaJKeJ8j26eM3o2XShP8pwtMqeWjc5KPpxBCELGwehNvCpB4HjH",
  "key13": "2hVj2LLKyLVgasJXAnWvTiFFDvb1JXDC3AtbotctG6AzjVy1hPrCJ6mQ9Jx81bQd7d5TMTEuxzU1WFwpBFtTJ3JZ",
  "key14": "3CkrKv35r5NdWj1DQeGu5KnY5K7g87YgXdNBRKDrJGRmvrW8Dt4uMkML3X37jDAFL3K91jrKxG8Grv3dXYvdUdsF",
  "key15": "3AxFJkk9VgR1nEKu1etfqjFPgdFg9Gc8cVgkEwxnCxDJqcWDHJUExCudUxKMbjijdA3oowxrYEcdKRbpTmSTeLR7",
  "key16": "sNu3oTWx3Tmpj9bDvbSVhpkTtpDVDGHcndJcQm2cHrsc8woNkBigk6ASaxYDbeN4mTFeM9AJzM7mLd46dsXrcMd",
  "key17": "2gJhdpg6zAQjrYRws3XYrwt7A8vTWR9nLPpvKC4kyo2fKs9Lxxf4hCGVjAEi4LbmsXW7y3QWaEfMAFnMDfVNsaQA",
  "key18": "4ARnuxqvSBsa5ojhtpgPPuokAbyhqopWYRENv43DK5ZG1NqYCSuYp6daZRRwCmeUdms8vhapc62PAepkRFVpuKc7",
  "key19": "2JfBZC8F6ixToZga2CbqSq2wq1xFwXV7YZqxPGMNhR7cDBzkDJd5sRqu3DHYJ2f6g9k74mXGkecBJH5r3LHLU3i3",
  "key20": "yzHUnMJR1r3mP73QnmYogr66b4NTXqkYPNyCaPrZXvwUUT4swmPWUaUibKSAMLzU9oGT2mEBHH8bLRDU9bp8iwD",
  "key21": "4tkt6qhLhMdfXoPDfdp71AteSZmkZGBZg4E9XjQUW837ykMXosep4tL7e5HrpTJvKz8QpYzee9gzBft8fkg4UDtZ",
  "key22": "2MNb77QjPCaC77BZ7NhH7JKreYkCcFmfsSvYzJgP1rZggUyuEfyppxa2fYRz5dc7j823Ppsws9xZvvVAB75PgSZ7",
  "key23": "2jKnTCdwR5zKsaqX7otf5cUkdjKegRH3y8ozz945ZDBQbABgkK9KDRQqQNnR8pq3hCZN1SidfZYZoeDxdXgnz8o7",
  "key24": "x6FEGMepjvXrdGQeQ9C8PB6KpFRfrJeZ4iN8iksL5nmDvX5nbMfBdEhRMGEwLdUnKBhHvQGP2tmh65v5VjK5Gka",
  "key25": "5zzQPFxaHEAgJzhueuofJUoCKp2TnPZ89qcrj3JozTcAjnZm5njXGxWZdZQsZgXHG7Moc5mLtHSDQZ6BgrHpuM9q",
  "key26": "3s5tAdxHkd4zt99mCVBX8y8qCW1JFjbJWZL6eRte99h5z8abEwz9msY7YoZ9se6oko99A3YvXPFpoJmFsEivdvny",
  "key27": "zVUa3qBTeoGxg8uD9wQx1Vj399cN1UGuPt1EdNqNyXH7SHg2gzyxnPbPx4UzhJsUyMB4zY4763hMNctwfDGVmXY",
  "key28": "5pSZCkHwHEmGzvB3g9sG9udhKQf7cyc5eh7iMJbHZ96bVXnRp4CNdERtBYXZjEEGZkTd1J7EFAmU7tSdgXFDoVy1",
  "key29": "3xtrRE3R49G7P8JNdUJNVxAZCqGc9TEmavnMhNgBnVpy8DtMW2Cua4xKLUkfmcTW82cH6z47LDPihfcU4nYB2LY7"
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
