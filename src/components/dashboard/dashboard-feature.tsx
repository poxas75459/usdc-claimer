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
    "5a4acQcygW9BL9N1BzkLikH6hzLTKw5hVDjZ81G3mkTMRdm38JTDKWS8uDLFm2fcMkAJH73dKY5yX1FUBzNbSW9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vU9XPWcr7qBYphkuciMLv6rBpV1VUWxDje326x96FkN7H525R9TFB6aHFyAPfDRGaU3Pp2r9XSgkW7bLZCRRkhS",
  "key1": "Gg1YcpHKEyRF7CyMUv8m5gyo1s6dswQSVp8bMzbrerMgZ2AsTSa9Dgg7C8cosHsPn5qoSGpWsF6VwvtQsccZBrq",
  "key2": "5Nh2agMuK4Ey1Z2Frrk3hwsepj6XT6GWrA4zttsEPjFcoD7ubZVmyYrp5bR3GNw6YRN3NkjPWXb3BqYVKUNaEz6C",
  "key3": "2LLjHaLfHgT9vh1nFWwjC5AePVT7L85mDYrzmbJBKNFvfkhVzqQa1UaEzqGxUJgg2T4CbCo3UL8duLL5DWFnme5b",
  "key4": "5HQxA8zr9YasFifxyhQAesM1B2R9A3XAjarffU9GhZk6ThVsUvZh6khjdrCBzjvCsiNctyGDhbNKW7Xi51WES6g5",
  "key5": "31xoPpm3LXgUs8T7qWSTpSPzSq5PztDQYjJS7buHrNzLJiWRU1JE18TeCQeHNywBySYXJVk6WLamVbDxm9Ur33ni",
  "key6": "DVeQPSgnf3kFMvPv3S2jKs6qvcbBHH8aEq7yvv8jQUMc4rVq1iTphwyq4Mc2GPnqCKX8MnMGsGimaTy62ZGhAHk",
  "key7": "65wY2beJctdLHfFunQaTFuTtHz3CSmWHg4B5LPS1m5KQvBY9pu1K4qTreTrifv2MepXyv1yWYJnhSz9r8XSaA4tj",
  "key8": "4is7uJ2oAAqB7tTz3jvCyx1ZRvWJ6uVdFVkZ5DgoTcnp1otPcCh2vx294Rmd1sHuZ8YyncrYhgu46zzq5NJMYqVs",
  "key9": "5AotTyQbnSC4Cicb8oZKa91wsNW4kS3qpvGXehGACQpE8jhox4vcNPK8Z69VjzF6jeMQWaKmTaRJ8DW69SUqkVui",
  "key10": "5jTpNxchwoAqqNSDS4qpaQdcEtHdWY9pN3Vy8MgBUG7MEaf67iou665wGSPLoanPqbqishA5dKEVBKAtR9FJy83c",
  "key11": "47g14stYM6zViNdiyd3mfkRtamb6zS2VhreDi69bsP4K2yneFa6MF7JiWRVWhsFscUfEe5rHAaxwE5hREStrXNLY",
  "key12": "3wXxaN1abXe6yxksC882B6K6ysow4YRQhBXGgbwwHKBA1bgJ85y64UfxHKjAFXkb4GDfttAwFCERMJNgaUs34jbT",
  "key13": "4qjmGqCvonSBU4AkiScj9X5Dm4rDaqiDZoDYcPNCajfKNujwKEsrS6F5a5KxZ9TVuDs7Ze2NoomXDLjoCA1fu1Qz",
  "key14": "35bfkXE3BRBQYx79wpR3YohWDoigRX97DuvCsNa6D73f8p8asdzQz2zZM4mPCpPpQMVpi66mra91HxRFyJzq1Ct7",
  "key15": "2biJYEsBuCT9ZLYsEs6vWV4Es5c7UG8XJcr9qz13f5HWuw9rKGK9HQ44tS6r9RfPXGmcGyQmeFf8KueV8kRP2t5m",
  "key16": "2btfSXMfiiRZWJA1F3MRTR5Z9AJjMkedgMDiSC9Dbb6K1gEoPb54cGghmV1EpWaDJZ7tf6JdUTAqGH9zhjEAgf9g",
  "key17": "WX1uAid6gm2rzAASRzAdUr9nQGBZ1kfKNAcPCHyj6JLcTaKKvPedcDbrFXeMAw7FSnzSE6Zq3r4yNomYtujNvp9",
  "key18": "3R975c4HGGkHs2DFUN1yuyiwbK1S1QEevtBep2Xg7xb37RhqSuR2fMtHv5T2zseuFcj2D14feJ8f1AAjguiYSKuo",
  "key19": "3uSuHpSzrcMgVoxZELNNhhZTdTYE9TfwkwPzrwQJjM3B5tEaraoVqfbaEakyR6DvDgQiuUPE1o24HTg7u2idheki",
  "key20": "4H3igz9UaXCFYGVsSS1j6qVN7eUdmk7H497msYu4jbvXU27vu5T8anV6bqR2pyMx3V8ddrmFSY7w6KTX59N53qnu",
  "key21": "2rs4818nrEnwCdtWrZ68xiG2rxW5SEdq4aNinm5JbhGB1J9sRSrKTG7vbRPzKxUV7nia9iFnWxWgrFBvS3d9c3fU",
  "key22": "4cE33rUxoponZNpt418gvvJe2AZrBArHM15SCZs8rKPURnNhjYTk5hBbdTEVQCUL4RqzkwTzmb3uERoHFFwo41eG",
  "key23": "3BEoYhZxGRVe6XVgECNYFcWTdy1SGFWfxHbVgs64DpRMHYYm8SHdYt4aqDskLzPRyKeor8UHnSi4hpcbAXFRnTuw",
  "key24": "5WUiwkTJhXQXvRaUo2aTiMcuyGjGJ5vUntFUURaAnoNPzkBVsSviN1xvFWZrepY7ToYNf2NP9NrzMCmVin9ategQ",
  "key25": "o5c3CFUzrCkA6kqxg7M5E7YyKAFa26ZG5S3qmW5PVkXtuAqsVEkBU8Rqe3MuH6UTfid7c2ortxpC55ktntDq495",
  "key26": "24DMhdE9DuPj9dQvVvwFnydVMNzkERn6RxpPbVzxuLcUxyq8pU1GUK5ZKzmRhgXNXBvJ4e1npdjohaFVEewH1FtE",
  "key27": "34AR272tzRRAfBUinQUZfaWnps5jVcSWBXcSGitMNborrwAy2TxKUzcSQBms4pEqQraPvuiCktBt6qZwekmT7sGu",
  "key28": "5ssvGJ6JMq3XoQmuGvcQW5kSGDWUDjkbSHPcqfPhpixunmzxgYk142XaBMse62KK8kX7xUSruqRvhug5zXGcSd8A",
  "key29": "2qP3XBc8crKBzZYx8MA7MGsgiTNZ8vNGFN96ymvKnW9xxJcCyQ1bxMxJ8PWhd7uokchXqc6GimJdGnSiTkHt1H8F",
  "key30": "4hV9pfHmNoUtBJpb7Fbb9s674Kn9U9iK7kJGBdcJBo7YpyNBVsqwuDh9NvR7tYGkHqWqkurXkDVaJyNKNX4ZZq7r",
  "key31": "4XPi19g5BsWbgQVUu6V5krJuR8h8VFax12izH7MX5Y7nr59w7bvrNgcUPXg774q2DbBbbhxFQqWf1Nxkee14n2oR",
  "key32": "5ymPFiAm9h7391LMV1YyAczwd74UvyHDLN75pV8yg7Kt6NTH6yfR94SzJK8nB1fwjLr1z5WebY2j9htdKF7HDXTw",
  "key33": "5GTszGkfhLLB5S46wzW7DcCHAuqzbkhcNVc7RYmcYoBHnStgZngXSmgu2o9N55Lm5wKHbmpTkrK1sR11xjXz4PG4",
  "key34": "KWy1EKmh13wu2cn3y5AG9i2mon85YqsUQVCveVpS3S633YgL9hyEgpt9DNyB8sDUB41TK14ybj6kWqbXuWVYJTx",
  "key35": "3iwSW3m9Fyitb8wbrfUyUkDM72MQcXKR6YfU6vtZn6gbp7YXeUEy3bPWdyq7CkXaien94YX4fJzsyWhLWURDcwX5",
  "key36": "veeT89oq1U6hQPQZdK9dWfTj8yzWn49Vz5DdUQ3iX8m5gcnmxLhE22HSVw1BeJGoxpvEk3uTCfxHFbbmRzQnqkZ",
  "key37": "PyfWGJzTX1W4c1qRUB2qyoYJEUUsS6S3NWRtFHxeVMZimSX3HqqG4rxpDa6xS6X6xyd2ixXZgQsziFVEhPyR2uT",
  "key38": "5DNaJfJiDpBrSpGW8FE19ic8ZZviyteFmTkujpZisTSw96uXfk8Q1rjir7Kmm1UPYNwk5TSFN4UaV8xVHn7suvNL",
  "key39": "5eQ2KudYkWaKVVDsgjgSnEWnLNLNrYwjeoNpTCsQhsRrxd1cRRCpvaAbv3rLdZLUUNyciZx5okNANCqRoMxAZXN1",
  "key40": "2AkXd2jVbuTnVN8N3XLY6vBxrt6DzeZhot5N5gXyF4RSmgnQJwE15Le5GAqs8CbMRFvM486K6hX8rzLS8paLXJDW",
  "key41": "yXJVfM56XXxonqQd6apTHQGhUeSiu5nCq5CTGHdW14andL9BpDRqwLnQs2oYTbfgJbekyfkH9Qc9nF9re8qZSVK"
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
