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
    "5xuoeySXjGy688q7EUuJT88ehCy9hTRfC11hXZsY7xzSZVkqq33CyvEsBiQpxvaE8Kq9WjwBzbPvmzvb9Sr7LH8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cMTiDEjXFhPU99rC7UG8iJkHV4u5qkUekYUT39dwMTuQZM4vPqcUigNu6kNHo2HKnEsvwLih6PDeFecda4qM9Le",
  "key1": "JQrQhHUQ3iaEgbykgtboXuRKRVhJEF3kXTe5USkzihsAp2mynnBQsZhyV4wAZBecbr12PAmCWuHk7vZjRibVfuE",
  "key2": "Kpeo65aDyjtfinThRcjDZzCyE1gU1wjy12HGK9PmpQP9dSm2VugtPjBmjwD3QFsBDp82XdE7P22K6TsRn74qFbd",
  "key3": "29dwbtGAHQ5qDatj5BvSXZJJaA6bDDHkLdGe1wpghpLuBnU4su7WFmC4zTjWXB6TEpHhGcVWu36FyVpFQfBpCETR",
  "key4": "22L5zmynEjTrNmvd1XqoZ6acpyPZfMjH8yGG1cpnL3TxD88CwxbrGnXcgcPuuoZjUmYkasu8UauhSY6DHApYMHHQ",
  "key5": "29Lk9QwnkXYrCdv1Mpcgy4FFGSMdksAh4Yp3wUMEwaqWuLfW1CWCXZq77mGYu17DQm6WmoevRjUmRg3DupEyRDNr",
  "key6": "4VyGN7CXCVXWiPCDJBkRAUtLDyubQEJz3ELDJJYXKRkKcpHoYxW1oU4fKYXcA2NCqytE3P41LLGsqZJmQ2LhqPDz",
  "key7": "fZAgkiiCbUeQatyduNdJVEBw9hCgqqQ4KMgutHJc6xBUeYL9iY76oJdwVYv1Q4CTtaAiq8GehnWeUB8vj5uJN3q",
  "key8": "3Eprq5fFqs687ZaTmWKbuCbKRynBJJD3Yyq76SnhVTzKeQbkPxtGUKtGkpmAqnJ19GuKGSjsPqQd7Esu7m8rNCy4",
  "key9": "58mVskW2Jw4pRndDuM632aDEojLocgQyCQZ8fjmsiXJAMAbKzeZ1ovSkTMhbeX6K4BE37niS7YdwJdhkZGA4P45w",
  "key10": "4PWp3avjqhtXWwBA5RPrnb6abnadQ9bCVtwc2jtf25uyu6SbLkMJyNtMLzkccJaYYk3fn3waYGdH6KvA2BjacYaf",
  "key11": "3FBGHxESoxco5dHfpqeDCUbPGmm9KK57o16Kio2bAbDR6wCg6ZouMPvgBXskDqCBfBqFvKPudP94ze5L2p7izpQN",
  "key12": "bmpshXFf9GmFNAVrKdnf3yssHVQjGPYu9XraKNhNVz3bFC2FKr1MTNsDZ22G2VpLU7GyF86qhFzGh7o43JguPCn",
  "key13": "54ucGesbDAsHkcXvsNPzsub6998D8u9ywFE4dbJT4YLpSmrpHnQSrTcdH8Jze1mysgh6DquxRuJcFkhhovTK5F2F",
  "key14": "zb3RoLewHcGCf21RHEa2t2RsXiSpjUwbYdTHWBKXPsWtNnNiqB9sCc9H2oSyg6cp7fnuSN5XZuDsYLgTzwEe39q",
  "key15": "673X6ZLJe9iRTGE2rzqzBkP2CQu8JmLQgncH5EKy78EjdWBiGymUA6hPtdAVHqPiTMjYNprGLhxoBAbE4MPb2xuS",
  "key16": "2WxhmChuBkVkD35NNLDBHh84AnhXPhConw7kckc7sWL9w1HLi612LcvnGtnerj1pbRhQaYyBfcSit1dko3Grj79t",
  "key17": "3RRfZuKH7Bj3PsXy8NNad2eb3hh5KoJDXrAHksTxahyhMwkotWp4tR6vUpgfgY8jtkajZL24Tzzf4dnrjeRxQpoq",
  "key18": "2tYWFQ4ud2Ve9i8tTQwgQ18TPpF97dTenzMaGsXXyRZ4uryBDjFjRSAYuqavkLPfPpLN8BwGtbExosEh8LiZGBWd",
  "key19": "bCWYW5Tn97JuWzGzK7tjKHQmQWrAPDriHncvJSCmDbqCQdGUsvnxMaxmSa6J6f8ZVfDD144kmGPLK5Gqd2zLM19",
  "key20": "5pJwTz4VVy32JxcMnZS1L6UX9jzmZWU3huk2LQ3RZBtGyM22UEZewjuBGYkCQgUVCX9dEEXDLgEYDhc1aDxePXeH",
  "key21": "3PrDXdoMbejsGMf1ixNN1HR3J3xreUnyTiEq8jgLMzG9WJnrXqgCJugcRVnxjd9paAt6VfPLTpYerzi4DrxBgJSj",
  "key22": "2VpUDZjDmDbtkvaGMYrapiUCdNWBhN5Zqg1c4HdmFkhEGm8YA2en1Vpr1ZkrzAf26Jrsrng2YVJK3EEYxHUSfYMB",
  "key23": "kryUyD7XRXJt9FpmU6ZJ4b11QRV46BCQqZriwqjiqdjbDeeYwmjXE1r4rxbTgT2jKqqFe7KHUmTJbLqgKy1M63V",
  "key24": "5x1VFYaC5PEq4AGMo8PpfqW1PZT3XvZnMdfsa13do8e7Zh7pxAE15fRyLWTWB3LhW6fL9qEshMjMQoJndMAhywJC",
  "key25": "u3ydv9uHkApH34S9bNv41wS4v7h83o3twEYy7UKnForcovPbn32NN8jUg1RC53HPUMeWazAG23zHJn4ag9r6G5z",
  "key26": "afw6Qt2VnqP4pzq8j71Kte88di9U1sruBGgfJDfQ6K6Czj42EromzciGUAg1so3gdRhae9NqBXkzY4mkedW4CPp",
  "key27": "48qo5ZpDY1z6aysBtGfqrLF2HB2gRRQMDLwjqP6trgg1LQdSSWzyCeQzFAXEJSR1kEs7xopZ48oiKuV7YkQrpTto",
  "key28": "35teXawjPUhrfzKPhcFdmry1v2hqPthYV11vyPT6qsM4n9Dnfdcs5EWfmNnaVx8pii38oFkuHRpsbVHKgpoiJB6P",
  "key29": "5mWxQHFfdAmkgfFVaSLKDPdoZfKbKKCMqDZ3HhA8RJfcRDbbEJmxRkjxWRdKg9ZsP3jMKdh1v6g1p2zWk8Rt1seV",
  "key30": "3d3iyeUEPQXNoN2AKfujbeQPwD5KXR6JbfnFwmU17VxcF7GAKaquW3q9ZQHDSbvYpXzp5mpuixdPj2H9AEF5NF2L",
  "key31": "3PSafVyR1YcsR4u8NaeVduDJGcDcHFETcFg8VtzxnVTWA2mYvM7Csab8rHwxNH1aT6hopHWfeBgp8PYj8i6YbFag",
  "key32": "3YHJfuVQhmhNziZ9GyuRjp5rgWhJj6ygYQQKRJnzLdr18eFq891JEhmCyKLBZoVe55hYHqngkAAuE3X8XwTKrfrz",
  "key33": "zXGyfTH6NuyWMW938SoUvgKj4xsgdPdiwTFu3V3hKcCecq7PyrRQKThZ2ZRQgep5Q1UMN595YeB94xinedoMH3s",
  "key34": "3C1sjBBxKUvLC16mKA9yMkzawGcHU1oFec3tHLy7Bacd4GAphBdm8wLHuUp31KRCWESuF4P5xq6XjCYHFPA4w9XR",
  "key35": "5Z5STDkfLwq6XZKSbznoE3YDb9Ztgo4y24M2nMdWV8tyHrDgE7HtTRXJhACp8MskbKb1Q5c8S7Qcii7yFNx6oBnV"
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
