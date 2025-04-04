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
    "5PMFaj1v7bAs3hx59MaZoMyP17BAQYWHHmJ3rGLEwYg9oLZxomwHarD234LjgpiPqFkKsVRKgNHhKkHexi4ENPBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S57CtRvmADPqPrZWuUAK1ERor41UFHbrTN83phSzG1RVA9DMZoUAh6MWy4W5w6SmeZAqWPXwMUDQve4rG8ixPtP",
  "key1": "5cr3vbTp9ofZ8LMjdD666iRV4yLriftmKe8VPxyCGi8vCPJnhDpYjjeUNmo268EZktywu7y1KQfruU1rQpRP7UN1",
  "key2": "33bfqGsPXj4n3SYUJ2T3Wp88KWKBEAaV89UmUGDFcyePNF4govFJpCwbYqUcPk79h425maVFemtrfz5JryqnAP56",
  "key3": "TbHgCq6cQq3en7JaWMwj1XH95YMZJ7TWCzSr8SZFpkzTWkRmXo61A4b36gQogQRowqpuVHBJxrWcPTyp65UU8sn",
  "key4": "26hfvbvrbokoYzDYb8bGPFvV6YkQWd4FhEDhFk8GTXaVnngiRUout9DfpJxctqwwE5CdLEqCRsevLZ1cM4NvWk43",
  "key5": "2U1uZvHJ6x9uH2qS7rWU2jNSqgdDpgFk6BdNkwRBDheheJQmVJsmc1gRKSRyH9ddGMiX2Mps6afU83AEJ2rVkHac",
  "key6": "4Q6PGVW5RU7kJMWwqTLoN7cJ4GqUiXKsXcEtij8HChXJ2LXq6Jftqbc8T4Phm6VYDjWbLriC8qJbJdqqGazHFutT",
  "key7": "4YmVmWXs9Hp3dHG7NvaHVAodKjRp1UB4JTAuHiy337RhEkD85VJdMmHkHVfq4KBCEUK6VE6thCW8S9DGQWVbVf1o",
  "key8": "3ztefSiZ4wHj7b7YbV595ZxZHeG9mqqp7wsfz84ficp1S3UkXYmWhB4zydZNXg5NMx13xrDd9ZCL4uvR9v7ggzaY",
  "key9": "JacoCU7CN22KKLhppUz86Pe5e44wgXFdd4VViJ6DJ22NWMmAvfSyQskseVPuxyKvpBBxzSUZSsMnK7528ME7qzg",
  "key10": "6k4m2vJPZMER3tRGFVCTUbF9cbpHrEfCknEPmBVzP5su1EgU27urNWChTY5z9ihNfqXw5RggWPtLgVpBsr7An8y",
  "key11": "4iWyBYk81iLzwTzSrpTUax6SoMjjtHAg3dBE1ekYJphR245vt7p5oJqmWDhARWX8U2qts1Xy7Vo52huDqjKs9Zxx",
  "key12": "5swW15GCRzEaUVZpMH8QfDmG8c3ZKBabDZMY85wkkAtDAzCKEhRHWYD5AYJC6XtuTJjRWTLiA2s7SMr3S58BZQK8",
  "key13": "4WbPnd21mV6bd1qGeUj6pmbi3FZvBs6EkBwxKG59SyiKLBVqAJPcF66Hi62R868AzVtmSteK2Ds6c9Hr376mqF1K",
  "key14": "3hap22K7BBvnmDMoagzsTEYqV1pepDoEax824dpuGUK1rN3mLwVw5RMgkS1uYACLV6iGakYMCXCHKxrC7mUkD1Sj",
  "key15": "X9b6pCPPTSprJFWKGAABMcbgzYDAsETCf7NRizTDjMT1zAGdbuMnVAaXQtjeJzRmLP53W14F7JJjr5ChXNE1R7f",
  "key16": "22PVYGb723b3qaTS7wU4i8Y41q3wEwimot1MCDjVfybDZ3q3MqrS5T9PoVd1kfLttEsdAZFFjHHSvh9p4FJJ97ms",
  "key17": "5nnWhpTuegz7bntqJbUARKDa2zaq7CzmixC2fDkW7wJQeULqo36uF7mBbm2HxhFVszqzBVpwg84EkT8AhwvbtZPu",
  "key18": "2YtYy1kKsE4Ay8Ys8HvqcMfE4hBuH38RAHzRQZhsfzRKEZ1mtHxSfb7owi5nL3NZYQ1vy64WvVoa8pB7uR6CsSAM",
  "key19": "2wvioNQ9fQkCSV4mmPgJfRC3GhE9E97U1kR8jqaxYd8RSVhfRHSvZuo3wgYJpMAyn8Ub7XbQxwF5S3hLP9BQZNeb",
  "key20": "2yiaRq9Jmsajb3EqNDyZoN1aHWXzFX7SstwBbu2rstQxYBTjYtxZFHdTbDd3XcgivhyPfoFFFnfyfWd8pW7SVHyA",
  "key21": "2wmFtB42aVjZ174mnqPPf2vga2GLd1rWf3R4HX4TLxop2v7kPXv2gw9pcnQgT2ReFyCPREgf8HzqfXmAuth2HCtD",
  "key22": "2m2d1dNAjagwAT7zreKc9ZxTYm2LJ2wuMr24WYZX5SmsqKztcNqQSHeRENSUKTEunK6jfEMvDY5V7MiFJEzNnK19",
  "key23": "65Bg9evPV7ZAAP255DVSmksyyZy9vdNmps1CzS1yTmEfvgZK5xyppW7umJH6FRpyn4CFLR1Xf8wwrhYp4HUbAawx",
  "key24": "4rQnJTbZckxRq5BQSQ3o98dL3oYJEatqrzcy4ZjKGTwAtrJt6GuL79SM8wEbWyCyYvmg3yWw1VVVYS94AYSL9qUy",
  "key25": "5zhDznvLCfAKY6uJmUP7MTHppV5FrxNXnPrQcJEwHMPpYKHhHbbyh2xj6M4hhecpygq9PmXZostTGVVpFDoRLqW5",
  "key26": "xghS6kcRzPEBP12hWM9LzedNR8NxiUGERZXGwJa9N6iJzES7N5zX7ZYrXdEij3nHpD5dLdcF3hNUmDNYDGynZLu",
  "key27": "3KA46pKXjqiAK5Hk7aNRsW9AdnipJhsbgvHKH4wU7FvgPnZcjQoG7A1TPiC6uqb3XbjKUXLUDQkRMWUtuYt3KbNs",
  "key28": "QireSEXvwsB6VPeJHFZqeL9K11XKkgTYtCYhMGgq5QMctsUqKS2uNkDBZAq1ENbqLJ3aKTaVKD6uVjVmokQA9Nf",
  "key29": "2BMJgfhNYTagpEb35UWKfiYXWUKhz7qeQbFpCmT86NLidhe8Rim4WRxykoKXA91wGRi5fkTMU7NiHWuqhXNhMbgS",
  "key30": "45v69pGnPjNJ57vo8MQkVFGUm32ff4XGCtZVykwh26PJY53GZ6cPKMzeZAgrBAid4oE2C1kJCy4nZso7LTkfdoPS",
  "key31": "3mLyYCe1E2d3tY6fuSBKyB1JzBscmdT2PikWJZij2xT1SsdxhjUqYfUFBWBGEQtLh9K5LNd2ckNm8rrWam81t6y3",
  "key32": "2vLFqD1XwhfEcxqfdZyb4AWsBKkVsDJYMCsiJ7M7kfM3S7JVd482KpcY8jzqJP54BLrfECWpLE7jQZBEim65aUrb",
  "key33": "59A2jq8MYabSKL69WvVh1ENHhjB4MvK49oYiS8RcgU1Chq2W8sn212ryaoJUBHmiJ3hN75ZBC4ZKhNYCEXzWKEb8",
  "key34": "4SRZmsexiJA289Li9iRNCseENaLLeYToHUyCPyL1aVaibLeEWY17SqmJcxWSdmstsE7JeJZWM4WoKzJdQkyGZUcg",
  "key35": "4sW2Qpy2LubrSknsoPAj8PFRPkiAKdaNtLBF7nVvJcmLXtQg2FujAo4tGgZD1kPTvxghrM4qbwBMNsNpu3ihJ6uu",
  "key36": "41J3WjAX89RqYxLVoDj3DwWbRJY6MSZmAGxknQwqUF2gZ64mCXmSoyneyFWj39AuZXvAsAs37Qai7chERuzEMgNe",
  "key37": "5jdSqLmCwDrcQXPvG189RUxuLN6gichLsCGNSPgH4MX34ignddywMjnmRUzDi3YZ7riohLhesmjcyMHDCHpPwZzj",
  "key38": "2SjTRgunxqMDxz5S6DmTgDzbg6wL1NFNrXwSs7DS453ZvffNer4svxRCQxPaaoruxTkFPhGifDc7tK5SMsHC8ti6",
  "key39": "5pVNeKwDt9wNB4LK72jH711C5VJh6DjZiqBRtg2rFmtVPTWKzPoKWji1Au6yyQkyUnzFTh1q9Zdj2MesvhPHeF3m",
  "key40": "2AS3QS2yVwzN2hSsgGokVUfKWJ83k39HedfS2gjtxAQ85AZzT73xo9ydYEL74SXivVjUUUowiWQEiXwfs66hoAcn",
  "key41": "2daZhCza22SHhBxKCEbVpjyknj4CVhknkuZzYAyiznBTYQjA8Q4qWM8fw8cov15ZPhvLbQzQsYBNxSQmhda36JH2",
  "key42": "Zgz9jwCbNhY7GfN2LtKCWr3WtX76BqZ7fC7jdKmronDxdAGbXmP7FpuxFVordBT8Mj7JdojM4EYBTLkt1ps2fKf",
  "key43": "5SpiadtiemDRFv3X5VxXoNHSK5v3yJdEEhAaoGzufMJMRno71gGWR7Jb9jPnrSpqbpQQjraT9Bv1zEidYMCsydpf",
  "key44": "55LhBfRji9YvznSKgGKF8dYtXMKKQgDyoiQYPwSZg5kdfGbj4ngYzAiQM6zX6owpibKysHtHRd9QsnCfFTt8J8da"
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
