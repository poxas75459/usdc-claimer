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
    "64cGRireJUA5Fm8MVZPoGsE5AtuFThMWNBQQpAmqmqarYLmAh3tFzrnQPasRNESQWff8gzC7aAak1SigxpRrEmty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dJudS256FGRVN2JW3kceQeteipk78ABmirZnWLGe6cFB7xdUjdeBRJFDQSFUKdSj5EXnaUecF7E6J3RcgQs7qCL",
  "key1": "5VNrvpitbMhqik1m8BJkUyQKvVzvUQs8BpdSvFg3at14gtCEUxVUK7Br7d6TBsicXahdib71K8ZkWNXUNfEUmS99",
  "key2": "59PEnQ4tZcczmxBd9D4hArt7UKFhKzViPAQ3tmkT9koJkRbFwbHbQzEhhe2SzTeXyxnHoxiEWSM2xQz3XJ1Vy3m6",
  "key3": "41ek89p6Rbtfqbpwkdcjn13pFLJiv4fUo4dG3WYpYFEc3X7zUuthAHcajFLgKppd3AN73B7osGZ2XKLggsMH42CQ",
  "key4": "5oUGfV5jd4mXUzPXnrsFL3ewRj61swRsmSrXDvQkocBBMkDkRLLekrotSbxaR39c2A75Xqj7RGwb57CWW64gmKPb",
  "key5": "5ERLjTQTaLfjeQLpRts4sm6QS6wx7CWbn3F1zrQNcE9mAcpzgT1mih6PbGwW91ewrM6xeSQV9rT1cjAVk6tdbbc4",
  "key6": "3iJaoTnPihsJ4NBSHxeVt5VBHGrQNPrzkhcNUTnpGySTnYawEsfdbwiMX845ChbFEHettjvwe2w4vnWfcc91QbQe",
  "key7": "3RWzBHHy1DBB56hhX9Fqdb1QiqFwNNanDdccyb4R6jpJMwczySAjgqYhBjiVLoLSu9AN4KVtXrRyUjfaV4RPThCm",
  "key8": "4Dh9LQA32ZfFYNMhrppQp5nZEpVSyfR4XNu77V2KLfXGn8rgkhMJBcNpRPMvzt5LCCVFGuqz6LqcydFMFE9mNBx5",
  "key9": "43CT8i3P4hXsmw3Fs2KHrvUnZSFDkwpE9gbCUAGBbKrAUPPgQFWqCf9Gz6VMqxiuqn5gBWnm4iz78VBYaDPHiad4",
  "key10": "oXi8YrzNdX9nLx512ubthcD3JBHxuySv6LuHy8wMqw1rYWyG3rbkBeuSpMWtPKJQDUTzXwga6PwNzEaQ18Wwxn4",
  "key11": "NMesw8JkHWjzDi5ymv3pTpMqpPUC2QNPmxWJVUJHNxwqSDT9AP5M6ii9PzbiA9PN7G7RJqmgr5ijyvy6Ku8J3UP",
  "key12": "5T5K6hktY14AhnkndMrirvRpA49V8CBUZKjwbE7KNJeCWc7PztgbQgzDCrWMSDcJjzsdawEP2xSfVycQRKd32fyf",
  "key13": "bKEcsDriLejkTXpshAAJ9LmDWSMm1YiU7nMLQKpD5wCZN9WP4mCB7bPnfKKSwVvuWdkWBt8An494nwsH5MZSCsh",
  "key14": "51C6L6FqWNiX5cmfxRLuGG12QDYgQebC47qH5QFfLs5FC5zKBodLKusXpjhtArySrWxkkpaaAzB2HEdZPAW6zuWG",
  "key15": "5hHmGCT9rkBVXTnzbgFLDn619oWg9mGBgx3UoZoYAqNLQmNddaxpyC5mL6TT9gQweLsrZrL92YDazqaiuNtaVMco",
  "key16": "4kM5YzxdDUSMnygG5pzfmfqzJAZSQyR1jjMsYKL3tQ7TPudrh1FQhj71gaF7Jy9y4757f9Q28VvZJkKMtFJ3dsjx",
  "key17": "XUTCVtZPAffDnaEEzXDksM2KfJebqrZ38Dhb92wLHogArVkVm2FLQCybXgw82sWG3h7fjS8DSRELTtfF87wfAYE",
  "key18": "3ig97JTuHpY4CoPbt65NVTR81RDbQSN8diTkawWfVVPL7rQTQ7xbvSdEiqZr1q1UaD3gLnyoqhnM7J1Mqpx2qu2t",
  "key19": "4oVYDyDNpCi8H4iKYb3YTQfumSDrKGUkKUFCFuwQea18EdTSSUaDWqHgestpRSJdXNqEKUGkuKUhrERYLywQe4je",
  "key20": "3dDfFvA4XTpByEPc8th5vAQx2RcYLyhjnsUfTZdDGyLUBQa8CASPBecGMWoXwAKhig9SVhAXeDbRBgtB9iMQ7iJH",
  "key21": "4nB3raq43jvjEtxZrCLj97b4yLkDsPd7i9t4s9S6Vv6kkrhoeCVeLHVzPYBmAMxULSUUBSnMZs9FPCBtDmZcFpaq",
  "key22": "3pQMAtjwbidrUVWA5riKZiA83KRP2FKUDmRdWFbYtMunG1k8C2uS4GwswHZ1vgrPHWqTBSdnZEucupmv8V5tdi6c",
  "key23": "5EdLBbv7i43hgW3C4TQusSxdkgNgpr2hWJmWo2Vsm7VmqPNoxXyyrVAkvdUKJEMkES3CrCSnBpKje2pgAVyC9aPC",
  "key24": "W2K2HBwZUhKMj3Qss2pVX7kAf2gCg1SU6cWwHxuP7eirzP9u1xfyc2wWdXaBnfeVJf8ksnojR4vFKn7s75523Cu",
  "key25": "5DC4ajTydFqHq5fXE1hhxCfThPxhKZ6RrAtrD3jdXhHWbJe7yxm1uAUJCQUqoayFKXh4y152zkpxsTWdiQhprQMf",
  "key26": "3dmUWKatowzztApWqG9BpchtAkV2TPEmpegMaYqBYZX4bKxdgW761rKnxJt4JZqdi9bZpfTHK44nbrtEipoQt3eR",
  "key27": "49vBTYa9kY4r6NUxuyspE5yxH9NBYxsoe2gxZNLCpU6DVRSuLrRLgrKLcoSDzMHTwtmPLQqCZQmjARsMxv3wAqS7",
  "key28": "5n5mHphroayNL9oq9aZpjgckCpoCZuGRQ6x9hiR3L5SXje8kHPkQ6H2P7jVd2y5JeiqaTMDB6a5hVQ3j4GBnMr2n",
  "key29": "bY6SUxGUR1EaB44swJGxs7r8XV5mUsusSu8xM8tr6t4QayXHuuHtStm32i44as5WZgwAuWizUm4pJH1EZj3qxyD",
  "key30": "22LkJJ9Z6z8aEZfnRmXxMo8KDSgyELMHGoWq9WFPThsXdyDQfevsxoMExnh6fy3FZQxAunjDmN756sHkbyjiMXvq",
  "key31": "3RoXdA64ACXVaoYNsuBqxPYe2JrjGpJ9osSagjcXMpiCFmzR8bB6HgcsJFArCVZuRVRHacGrCLFQAbXeXjjamTDJ",
  "key32": "5k5KsMLDQM4nBmoBuC2qj5BCxBwuEr3i23ia7K68pY2oggqhAmWJbyqc6X2SYgoDqbBkjqHDoMRt8QnYHCRowate",
  "key33": "3PC17PnDNnHuuifzjG8VuqPep9K1aFHhZ9Adpr73yGv1HBJ69Jqm5XH5J5DsjniBAx7Bj87KR5CPVTw8eB1rk5P8",
  "key34": "3MVs9u3KFUN8zMEaVf5F5z79hsfbz38dtCYKCBa1HPTXGLHZW3VnCp1UM8JHQzodEjVhKkixDxG9fYgFK4DQ1rcC",
  "key35": "3UJzEYNzDyjv8xd1w7UvBKrB4kzPc2VpjuZpNoAtocQ4hW727rGHroasJ4BSbbPQQMxHxyPmD6k5WaY3QYiiMB3b",
  "key36": "4QwxTAA8rQxyazTmszrCRyZTPtZcbMgMbxEiPj7o7H9jCHwNPF24jYQNx2JvB7fYcqhk578DCyj3LyvoKndMGRDq",
  "key37": "5knxeQN5afTqD16VRgWh4gqAJMp3SybaszX2M1HRBbT9U9qDxczgpou1AR72VKkeajHzYtUomkj4G5noxAKygDkr",
  "key38": "2wXFBRgiiAYAUnFT6awpezP2sBYUTEJ8FLBmuL3QCL8Ba1Rbi6xWrLUU1RUSDuVTggPzhaTLKH8nP9MHFojW8i3S"
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
