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
    "2qD35g8h8dMd52cvFkQUM8pq9zHXZRG1bMgSwrEFHjEuGUXWR2KVsiL3DVMLYCAHD5dPtMatbdDXq3nJ45S4jLcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32RR8awNj9PzpJdBqnKBGHZAckhijN7zvNZFwU2Jqcw85BWVnxULeNCUQB8W4V9W8sa8GXhSsPwKSnMNbSh5nM7q",
  "key1": "SQRrPtg4M29FPTgh4bLvwDnhXVzThPJanTL28eGwkotMut9VHSZkQBVu6C3kz99eDWXNJmMQAtt7siDgRra7Tm1",
  "key2": "59gspejWBX2fpkGr8uAzgg2Qm2bBBXJnXeBu3JSb5vf8MYGjfnsaNdziosMmDbcAFfWPBmhZ2fxRgyTCan5f2i2W",
  "key3": "4nhMTQgyMyXDxymz1y8gUEkg5EAADoHnN6HZ1zE2AwenJoberKS37wmmj8qhPWu4N7SVdzvwVUwUyt1vtYTsd7sC",
  "key4": "2x5FHJ4xnukF3hyHtFeKCLHx5VsZpjS6bpTascsdiesz7vxDtEozxnncijemjBRKpJ2RWUxqbwuFpNQVH5jjB7gN",
  "key5": "537mNDLoNqbCzzp6dkBugxNVVxkenCTZnipNLhk16VZ72EeRPvFu5MzAFA9mqPqs8WJmu9dZHxPiRutYz5aB7UUp",
  "key6": "4N6vffQeo8e4VsdHXstezCZzxbaq98QDYbLqKcN1dmEd2dbAjiSWUjXcmn8LyQC3bUWYR5aGJyfNMTdDyAtYdmiK",
  "key7": "4SqxwMdbk5XDpw8rAFjPi35XsvajmrKJtDSGgcUNWFn4yxzW2QzrgXRaAQLZiWx5jXg9siipyCSeSUCkz76TZHRr",
  "key8": "3FcJGj1qSJf3PyWsRPEtAcTiWhUyj4RLRoHCF6ELyPXPoh2jHA6h3birVo8cwjYCmvz6G5FYwuKHdQ8kg6jLy4jU",
  "key9": "5GAK31uvB2pdbay2resi45o45wRp8fqiRX85xDvjk7qKcf5DvUuPc8U7Wn829StjLCDv4o2JAGPrviGE1EoSFZRW",
  "key10": "4ZZRFQsx9A4Bd1GpjqxLasAtESJ1yGof9jcFCo8Zq5wdkx2kw3FStC92dgymqCwFFeKypQfwzQSK8WEudu1wa9wH",
  "key11": "5wyvrnFCzAVkuuA9gzQAmXSq8PK7c8BJm5wcAe9t6NZukfNrJCEv953wwCcHdSfJcstShZXijZ25JhVJ3aTLHa7L",
  "key12": "4WHUHA4bsb8A6EPJ6xzzQHRw3UyoPBFRTUhfLpBmit7oMehV3omKShRU2zSGnh51qAMY37omBxNCjLPTReb7vuc",
  "key13": "5SLbNWnroC82bExjeDoBp2KcTycbEaPdqpk2QLSjqbAC9sjZy5bFYLsytQTkY377CjEyM5WZHpvtQ3kmUrt1vUsF",
  "key14": "5yUm3u1ojuMQRMfxjmxpLitT89FD5vUnTgE53VmrtoQR5uVnN95VJwE5rrqQyUeA9xMMSjYeJZrvHZAQL8ZCUyAu",
  "key15": "5sn2dqV5Jjm7fhVxcCfZbf2ez1yP5TLUVk67yvJSAqnNtLM1qpirRKR9rMJnw1pRFNg4soHakvEfJHiErhLkMLBT",
  "key16": "4M184qv31QMDGGXR53ih5R5nycnTMpAL3GGEirhpmqLssKZfMhgWzn4gSV9gy3vbXPFFmqenjsDaGty8Y73FjJp3",
  "key17": "3VA61nAUpRrG5Qrs2XHEt2bHELiPgRxkvkcvXEwT6hic278yxq3af1RAGkN64bsGxggyewjiCnjzPRgXzJ6X2ZQ9",
  "key18": "4UQ7zc7PZjU424RF9Jj9dWvqDzqBTW5swrGvE6Ejik1UveMbmz1qJnNvYCTZJYRmJozstEzhCc3PrcQNCqJkcQdP",
  "key19": "5DKThoaS2vzuB2ovUoqz57t1oz7QQsjZQxD1Wx3JRg8AcPyj5bttR1sAbXNavUapNhTnmiYAkWLtcM7tTNZCSXBi",
  "key20": "EcU7snadb2oK8dbAXXuBc3gSsT7u6DSr2rJtW1YKXya15Sok6YfdjYYMA8wTtDT8qLCZw1gHEKUryKdyWDcHGgH",
  "key21": "cQXaWkesfkuNggR1gXXHQqv6dvBQw4HREmtcJ2fVaZkjFEm86N4eVEmqN6SKaVCNGT2oXhiBCYxadpzAZYcpjGS",
  "key22": "34ssiqDTwVFiVPovT8K66PJQyQvAxsxAy92YTDizQjbDWTPuoneiK1p9nyzkJ2ntFbjbwn3C4oDDgfn81uMoireV",
  "key23": "KRotkG1y6BBVN1ggXk1fErRpTbveLsLUNH3SVzisi6F3KFkjTCkiuP88Pqo7ofjUkB5Qmn3cMQxkS4rQBW31m6r",
  "key24": "3nEz9iV8aRTygtaywPT4NY4HuPEqriFWVshnwCEiG9Aj3q6cu9d5tPyYY67PdyU1rcbp1oeVXBzuse7YNvhRPTz8",
  "key25": "nSTTWPjaj5mN1Q7Ene56tejLxVSPQnng3CZrwtapxiAGPE5mt7jWExaBDr94aFZTHc2doep7rhHxF1MPUEaAmyB",
  "key26": "2RCowG3t8TTB4kZcrJk4iBNFFkjjX5AqVLtHQgE1PqynumTUZQtAaaJ9oXZiV3Y7uNMYsJ4DtVKkRn9YAP9qgCJn",
  "key27": "3dZKysj1hXV2M2wXhtYZdjNWDT9536bab5JNToWpnNZx27UpiggSoBQkfWZ5d3dUrDW125vCLcbF7kVXZTfHdSGG",
  "key28": "26X7qvcVNenx6QwKf38R4DXVHuinhF93RzeyNTqfrD1nnwde396h3bghctuTXf8ajccB5y3Cpivp21eEQwry2Nyg",
  "key29": "3xdVq8WusoFFgz2xoCfJQWWAbJvrVykHALXhcrM2wzZaYLH1y8VJk4FkmgTUNSr9gWxkKq6GJ5eSNsQbSVj53ZJq",
  "key30": "J84Gf3DwDeGrbxKGeg4m7ueCV6SE2Ahe1UxT5Mp4Kc3ZLjgDQw19ZtPvotdt8JFwxUwEzT2x9ViFb4AySU8zNrv",
  "key31": "5RpnMpddZ2FtXvEY2RPZaW7puucnmaagzF1APapBny1orjTpJwpBLE3pXnhQJLAZ6GUp97WXAZs5wzhUfAXfVdak",
  "key32": "4wYCh8AiY1q6nka6bLAFA5Fe9CTp4bq6yuRzxHzuZWLVHxFXhY3mVESc2bZV3rU5BiFjECA61QtKvmRhkqStvuF1"
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
