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
    "TyVCrq4rz1fwMNWBkZ1LYv6SKSZDLWawm3ewfYdq7mVLvJArVipqvXUzk4AaxzL6NTy4zn82oG93sWJt5LFATEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A61NK2FeKACeJtJ9VrEX6MMSAzPWe4NcxKmxqM5DMezoAXqFoaoHUH1Kg629YqDbb7Ee9TNbNJY5w2W8wyKwtX4",
  "key1": "49X4y4JdvocbDNoMfhrrdjBTHr14EmmPRQ9VVkhWzyDnShTSSMq1pRruC2HWkKYyaNi2zac2zHdxgZf17tnLri98",
  "key2": "5BfcXn3y5gZcmvFPPEYmPz5JJbcr8kBrXHaTrZiFvCFjryBZ4p3ymboXxikzv7fPfEeyRmhz99WWTaF5p6hH5aGs",
  "key3": "31xEQkc9TTbSaz8QaKEwZLXAwd7mPcbCBhJiAhhJY8uoMp7ik27x8ve7rhHjgREhceM49kJmRsbej7pDXUyQd43p",
  "key4": "2o8sXfN1gqJHTDMyDTNeFkEdzMz9dcqSAvKCTeNMgy3BF2ijv8Wu5tZNheoXBDPZZKgykxU5PSz5X3GKfGmzhC5b",
  "key5": "fT9HarTphsmgnxk1foHqYpkyiJfoxtiiPi2c5zgZ2wUpf6BRH6FW6ZwK8JKSjdyzRfhGjLVJnC8svwHCxWEGEYr",
  "key6": "3Hcr96K1bKBCiSVsXmaktLz6eR3vniTxoM4nrnrErwfn1GcZi5a9CGT6Yd221aCLpfRzphJfVUhmgTMG3XkmeaZ5",
  "key7": "6kPnreTYJ1QVT5yygD3WigYB9wqFbgLaJpYMCo4gZgHGTqz38D41rEfzCmWwNimnT8iTZ1SxBxdLMLzycnyZ6CX",
  "key8": "3zYiVYQxwAtFP9ZsR1TJ1k4GzpU5hdrWQddnpVgXZ6aZPE2K5jWXU7p2X3kA3XWJPYNXL9AD6u43dMmTgky2Rak5",
  "key9": "3hT43YQehajS9XC1VYLSCMjZ9kqGiR6V38Kn7ZyUKqxHiMStU962nD1H24uBuaoDZaVGQksa7HRMtCPwttEsexjR",
  "key10": "2GkYnBpujG3XWKDvc32HkgkmQWdT9B98irkwivF2iVGKQ9Fn3MQC2jRkKLwhe8N7eyK8DtqyuZtKbtMpmaj4Yqpq",
  "key11": "44qWLVHS5jKHyCm18x9hmx3391iSPTMykZYKMMm95GNH9D9PzR3R33nNopTjjNkRJVsrhtJWYYRaQEToMQ1DXHbv",
  "key12": "4Eg8NpLybPPgsQsnFuegF1YLizRbNQppbxoRgvLDqMJLHB4Gbb2tyvt5pziCzSync5YfCQgtwE2VzhGEgQKKMTqG",
  "key13": "2hzhAmMUkj3VaoGdwBisDiwb927tfVit9jkWkewA1kEWfuQgxy6nNm2uNHEq16F5FTcKg43rgHKA5L8HmHgM3qiG",
  "key14": "5LwgDS3PpwhK3nXja4Z1wT4UpZEkxtGTj6tuuUHvdKHh4w71gU3A7iy4Y8mShQMEvqwppDiVstNTrNmvhhWQ8Br",
  "key15": "4cfFJ2Uc3LbXHBwCqKMVMhkZUX3UC5dK2spm5WBc1WULpgCk5mXVGQS15CQTYodHo3etyLnY6CdUkRs6iDtYk91c",
  "key16": "5UkdtSn9ZhXmbGXyLCgwQWQwzm6R7NwAwHKjpCxQ8VdEHCyJkek2uKEntvZMMHqojgCo6eqpWsVAzFmJX3HaFHyz",
  "key17": "2pCZSVjDoiJrtWX8B6pBUN3r59Cc9vv7JCfwUKsw5ap63U4FZ7S7P7cYewaiiYaL1nUiJHbFYLLfkBnan7H5SGQH",
  "key18": "smFFht5FzF2effk6vXkHZ6smxjXgM9ZYk99PzqknVYMAvf2ixCJvPvAbrWh42s62e4rVAMkU9xMDXM8vd4587RR",
  "key19": "4HddgkFMkLB942bvBZYBabqxdjg87ue216W1Fwd37r3irnjndMmNqHwHVDWXZmqnPK8RKm95PeYQFupmUVXQ18dF",
  "key20": "5rDMWgAfVaY41JqgcUMW69SGVjUDr5eoFLT869MdfmXoYqRiYZ18obuadQdAxtZ3eXaBB5nyA3MafZy8tP3CRY34",
  "key21": "CtdNhWCnHEDHzPHUt9DFgkQ7fvWxQS45USASgQM9RGiRvuPTvkrdT8EjJJELmkc5Q7GTDo3J3UeNh5MahUowq34",
  "key22": "6dDPaMTQiM5j7XqfpqTryMTzSR2HSc6L1V239Av5FjpXnzuvQDv1c7P3cGVGxpbFJXkL2Uki1pedpDUmEufL94w",
  "key23": "3CFyxLycDmBA7vBvikgx12wnpq6YSXzUrKzPGeUGJwDyGHdTiVNFQzstfqEVDzXhdkvpPemfV9NPHqs9vTCFpiNC",
  "key24": "3iMDRCy73DCrUwWQYcEpHZyFtQG4aSxF5qyyK2ZHM3oFY2YfbHZDsV8v6bXiXLavXC3XBmqDzdsDSSdDL8bAQda",
  "key25": "4q1Fwp7GEitjRa4hGQhDWCia7ERxpHvhSG4KW68okVC1nvdWtYHDCjAXeVeTbrPxTEtp1TTNfT43kDQd3qW6f91o",
  "key26": "3XMj29PT6bSLKoRV982KpGAkrfLsjFqqLMXZxLCb7xTehujbG2vJWYTRe8dp5dma1cjSzNSyM3HXHxriPMhkL3Ub",
  "key27": "2uwzURVuLwT4qEytQhKTjC15s4NzdUcvxJM9VEnfCThCgz78hrvErhfmMgN5HZhaE8uGPtX8EoWuYe1KLtGyvg81",
  "key28": "66ekMHnqMh7m78t5GJbA5o46UWxwgJaP2aadRZwvNZL7JXTCujurm8uvTSM2ecSLDRkjdStHuxhfxqNvVWJo24gw",
  "key29": "5WjvfgZg42B2V8PQP7fdsuFKxeMbokvxrC736UV49XjsgNkAuvqynz1Zo3YqaJiX4thgkDK2AbnaVT4fG1PQnmmc",
  "key30": "ZVs5x2syvPwPSk1F9qjzYZpoWjANJcfzJPhWe1cfBAPvsQL9CR65kNtFjhjZF34hvwsePe3FDdezvv6kD8Ysyqp",
  "key31": "378QuFfVK39CW6KoJ3saqpyksUKbHiv1iDq85BaZJbYSJz4bJRAtpuMLx73uW9memHAozk3UV1QZZYDDycL9rZwf",
  "key32": "2QFDYF1t3uX1gQz95jQhUFzHudJdfexVE6UKwGjC6QSmHNV6Vmr7m51TwBM7oDm5DvpV24eDxCwLvjebtQQpzdMQ",
  "key33": "3rrbspVDHKvG2wFxoBbPjvtNcoePJ8btMZYZhKCsesJHMSGX9qWUqfkAcKmZzLaAzNPnHK81yM72yqxnfawxTxfn",
  "key34": "5Vc4QG5hW2xrWydfs1ZSnLLyJhFh2LXZYp4ePShnqN5oGKGMroEM8j7xVt1Axbcj3npR334aQzddjaJGcSb4nTnU"
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
