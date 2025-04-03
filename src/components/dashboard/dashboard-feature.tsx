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
    "2aN6RmRR2AocXUbeeLYHJnYwrUeTLjCNu4AJRcEj7MJurSRHTACuGmKv5VjLffogbMhmSyNnFqa9tkS9seP5DTJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DxZBYNjn25MDHriYjDXRAj1LTECYgid6p8TpSEzgKzVKLFXkijxNBoHm7GJoCcCUSyBBfSpy35NayyMuMT3rmdW",
  "key1": "3rXE7XCFLPr6TCwTnCrtfwYQtxgT73bqTJaea6FNYVAnBMaHfVxio8Pn39PCqjifXoFiR86PuVXnJ9CjCmgEx3Ak",
  "key2": "4dMWXEbNzt7RV6Ncd115V6ktjWrhdiCvjfDbHk7hy16o44o3imwaSC8D9uJ6vKk1mV9eUGAaPSuEyzFAmsTJmY44",
  "key3": "4BffubSMv8SVJJBKvk8UCbEYVNYUC3VaBVmKjc1ggKCfYA8hg3E1zSWGez7hQvvFCLWLj5XSz8L39pPfY8ZiUvbD",
  "key4": "679oGZHUZxP86yaB6EETfn8P7v7RqPTfAMGPzkriqAtLxFjahZPQjCFfVUKCGva9dLuqhfaq5pwNHVyH6teHgf28",
  "key5": "5ud55138La5H1i5zs8twB6bh9AwqyQ8m3JWKYGt4TwUsC5yHstjJzAXnYdSKPtK8YKawr6uCF6sx2wGAfcrYWGgn",
  "key6": "2KFKLHbzYtakgfMQh4Jj9N1151a9iRDKhrNPcdSjf7No8rTnBdMB4xZR1DegMKVCbfj7aS4MaS3zuJNv4B756pZY",
  "key7": "4DnsY77d8ZphHxSSCA3a4G5sGbcsJRHw8BPkDuLwrC5611fsdzgTjFCMfBUCv1MkyKo22SYR53n25SjqY5v7Nf4Q",
  "key8": "4fEVYhPffvVa44oidu4BgRasyJLQtLtw4fUBoBvWLNn6pJdEAXrCtCmr8fvEiFW5ndu7uVwEUj7XcB38tK23oBHt",
  "key9": "2N77mTErMawE7CQYdLhJJCmWkZKWcdtYGWEz7eAdZLQdtpQarTKZhem7vRB75oEcE38k1NQ5jxNzNfrVgSRWFHwP",
  "key10": "5hmyQBPdzePFL85JkJYSwrRj8uFPFh742Lg9wKeav6NcpnRMYcysRnJ2poKkeVgDZLuAuDfa743eRdGrqM3NC9as",
  "key11": "5RmeWKWMX4GBT5XcC5owRP24QrJ6N89XTWZ4XKXFaVEUWWoZqLTvE86rd1zeDGmQPxmySZsXGA9MbPyj9SoEQjAt",
  "key12": "TBNJdbrqDBiaS4PKfgMkkubmQCQPQqYYHnE7C2bJN5vM9qEbmrUPSEzN3AW73gMkuwEzw7icqEomAe6dDQSSGBh",
  "key13": "UU2Vz8VSf8V4WQ9zNp7i6iudvPkXa8wMXtPKrmdfQVBTcyhntzq9AqN6gHJ4j7cZ23upizyFivfx8D6nB1FNDLf",
  "key14": "3G1gaZrUVgiddyC3e39DDgWURPvcadMjvk8sEzKWSTEh9ht6XxCoqqepa74Ldr1QFwa4Qo9scuuPVpbCJ47jLRgq",
  "key15": "4Fp2bMc8z3XUkUYnxKGcr47xX2Bq4Trknp7VKTRBDRcHYuCdnsiWdJHp9XdMNMUVTkAk1nxxviukWaveKnDCT7Qa",
  "key16": "4yLLM8t9VFZwgwYi9f9uDrRaMW87r6ZDiqW6GWYWVBVZ2jQWQ3HqFp1Ue2tzhSU68vQogjdiDRDDjsp9qka5ins7",
  "key17": "5QyWvnag9hbMqbgxh6ryzkEVdaprbUfnCLuDUFVLMeyS8CtoJ93G5JLDJP5PKnPnXct1KSPzh6qSQCMBPFwzZ13L",
  "key18": "Sso53CDxS7EG39ydNeEoUFhaCizFrTDNqWZ7k595hg4TZGerZeu3PRhDUUWkhZjWukjqC3an2qdR5L4R7qiKWmP",
  "key19": "3m6GpRp2AAcocnzCEdkPTgQ63h6ckWco3ueUJzQDu5aNyZdMg263MqNezrH9hfPYF81nAmSGLyLi285iJ2QJmQJY",
  "key20": "49EjNSQB2sMVs2pHAp2P3bDorkvv4HoLmDoF6KdAu1qxQr9ND6wpBwjeUvZgdrpnG5JXBmpkqbjcNdoP4bHaUMGx",
  "key21": "4M1tcnpjdByU5WDpHzyssJDGPTHKzA2Lk12f4N7MkYQyv8FrTswWeoqqsHZXMHoA9cnyRgUzW6LNvg3G4xX9sPmg",
  "key22": "RvFyB8kiMERoPpopnuqeRtxFGkFU4bRNLioNYGcB4Hjv6ZS2GmShVdejwrBej6yTZz2tahJ5dN9Ys8h5i1yAApV",
  "key23": "4zTSWUQQYt52ST5cNEpJbMRYjGUo3u7dyzZ2NwcdN6TqZQmbWwhN9sKvTvxKKUxKFfGCasQhioT2DJCnDkjzTJ2H",
  "key24": "4EARz7tzb4cpS54jnHCzwdXVdJBJaYJaW5JszmP4Z6s3Sc63QPc1WjffyBto1WgeL4nEpqcHz3bMX1i2wkZcQkX1",
  "key25": "2RZh5iHTHpeYw1yxanrbsnPH8kLC4EJADL2SqZuuWZJwJDEakZgLtSgNWhVQ8SYigziRuxVdJmoqvsyrwirbceU8",
  "key26": "5tENbCXteguAdKiZkgBDA9kHn5aD9Jp94ABZDRhL9XVX2DTeYsUGWvQgnawt19F4QPhimQeJc6SWsE1nLEa54rBB",
  "key27": "2mYa6M4L6mV9gqTHAMFe7yjt23juRBR7HSxPtZ2yM7YUS1pAfZo9VwrRkCGGoTJ17NsZ3DjCd2dxeWrk5cuvMzkN",
  "key28": "2GJNjXfiyDFMiiTAcnvfY5SoMPadnE6UvVzXEZqxBYmemMdbKZnDJC31kaKD2k763wdVx6MbmitK4DJfqx9zK7vo",
  "key29": "AiV9GXNgzbH6xjvrsUEGzhhu8priRgEjbR1XWhfXMX2UhJYMCr8PvskDumhAd7g3ai4qxEG9mdbhRNea9worsav",
  "key30": "3FiJW6n9rafNzt8piKtm3ReCobT9UoqkYuLHL4Bni7p5eTNC337HnMG6AQL5XdyvaRRHPTtbbLc2BG1uCNkkgJSJ",
  "key31": "3Gsg5wNt2VWq2dC1rsredzSsp4qSRkDq19bBgShh8upELxdqNpEPCBwznVzVd1zH2FjCQCHgp5RYFRRNGs5Groxq",
  "key32": "4G3qNdWLGzn9HdCC9q4UWptyaUiFWS7Zoskdj148uiSvcCyU2xKW6WmPUBUiWWTqsvXPVY312kqZyF8c9x9gWZ8U",
  "key33": "5wVPN4ejjgmRD7QyySDqGAHademL3CRejfKW9C4869svjrRBkcpdiCXxGdmTzAuY9rZua4Xa4xD5U3W2wc2en3Xz",
  "key34": "25UvhjPesVhTGWXSKKaDfWi3pxLB46PaReP68SVdFd8PJXCVtpx2SWMMDRZZpri1MXzxapAVU7MiPKXG7X6KntBD",
  "key35": "9LJkZz7yuEwYqDfYBQcjKzhLMtUN7vnGZJFx8rVbVqEq62CN6CwWeAgLTRQ7WKErVmEyf79e5QHhxxfVx6RLuoH",
  "key36": "4nPPs9rMz3ya2izvu5N4GPkrwiTP7z5NLzR2K2Z9skv5asyumY8ZoEXddpDhUEkZzQmqseG7YrjbEK6TTfAtruVq",
  "key37": "p1pNBiCcijHYddp1VKHai7sH9GDopK997LTxCjPT8bDCCsmza5bDGxyBxAWbqzGi8AfcRNgfTT7omabtweoL4L8"
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
