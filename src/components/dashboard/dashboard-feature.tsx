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
    "6786rqDM5wZCRU1FMWBRtMXbG2zgX6KzxwQ4wWk5zg4RCphs7fkk8qm2uS5vnidh4hpCecZBHPdgoShtJ6yERJ7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pcepm4xbr7StfHBVS7XTtto5H7GEEKPiW7zapDapVkkhnSprpm3aGmuP7HxCxAAPav9KYtgd91V6GaAZYv2jWVo",
  "key1": "3wPUbKPioFkTizK89FdkCKhPJrQifyL7uwLsNFNKLZjirgM7jjBC7r9UcbFHPtbo2WLKZH4ucX8LPFoRVzAbM7YH",
  "key2": "gHdG1yDoZZ8y2gErpzerb8E4bG9C6Az9vfLtyUS92BNX5eRH2PDA76ftxWgUq79cmpnSm1puwHaxXVrfGvMQxcS",
  "key3": "rH7rwsJbzSM3qYwR1USo2XT3ah6B5HeBseqtmtScnDfdiBDzW6dfR66mHMivgthqryzSvUMQ2kWVuYV9NXUu31E",
  "key4": "3N1qg1xcdrM7ANrW34EAKdT1QHYircQ3g3cvwFsGPMYqBwAsWxYtjukvwYLmBB8DXAcewAaFHzHXuQB9yAho6uRx",
  "key5": "59kuiw7BeaWrwQnMEzREn2KEV76U8LHCw2x3voppcKkP6VzddiqT9pMk62xnvRAfGHmPCGYKf9XyEt78TZKf3An",
  "key6": "4a1nNTmqSsqbqU7tGjagUdZExbwR77TsarWCxGMMBLRdnzxtQc4cXJGKiFfxZPKUezS6jMcXZQTw3kHThidxTXpS",
  "key7": "45CBBvmioJtGhzMKzFCondXYJYNrgfVw993E2Uzbw253UYkb5Sve1XCk8bXTDyva5qJNPvWTBXNSghWbk4fXbegN",
  "key8": "32ypZyFoFz1zUejsCap25sJqPk8zsTHpALYXhRht3M4E6EZzatEAAVxcKxaqcrddFBvuo3HcoaLZ9A3tYjHM1uGt",
  "key9": "3s3Py7a4KNpo6hVpG6rjYLxLH1gm5G9xefeC26LDN7nESuDCXCzCZW3BJZw1eLvb6CkAq7GyVcvLBG42Q2jr5oTH",
  "key10": "3F8n5eaqDG174XeU9kUmYLYsZxxfwXG24fokKPezwaDYFEEp9WsSCn5EambdtsqNgFQ4LWCLxsj2ZNqpHyMcbpB8",
  "key11": "3pWbsDd3QLCKLFGg9pVTjAMomeTRFryYUJicdnwXzwLAMX8yy5YbZkVe9mer1JMz4g24YNVRtCAVjroKrPQkCc5N",
  "key12": "66bPS18iCbX7qPjqF3GFeP9j7cMbhsViUJ8pA9ADiFcComYXruzzVTRRTzCeVLPmgma4rWrswWturEkLfjKw1aeb",
  "key13": "pAdRVPiKnL1yuwcHz8LJ7XENMGVDRZGh2NzuJGzmQ1jgdqNumJUuGYQTjHxLFnU7Mn4PWtXZPufYa29WmF8RvcA",
  "key14": "2Yq7qn8ZeiTuJ8Zqh6YkAKijHjcrhRmjMD8xSV7qvcHaBiWhfZKJto4E8YnFtrsMY4fyiXFxvAcmrcZaQahky3bV",
  "key15": "2wGLCmJfhAbQS76WTM5ZyXzgKuAgEc1s842mAJWbvELBYMiAjQZccvtZxdpBiW7rkZHh8xdQ9FxufJ1mMKci63i",
  "key16": "2gaGNZDA2TJLNc6HUswCEYUhvXoyacq4JKNmDSHvgpkwM2M8YUYoBZAqXXfEMnwh7MzbhDFrLmhAJ3gdQBcBrHsC",
  "key17": "aGR4t1ppsSbKocsVEwv6baG6ZobYyKKg4xQ9tJEuVEiPGAtEPPum5qQ7BEsfsxjcjdC38kxMLFU2krVp94hodWo",
  "key18": "iq3YME18kKY1UqjUR7Zg2CzpDCSFQ9MrQbDKQwHCoHVizSjTGRoprBohD9issh4c1SNHNQDyAobJYUGU6DKGwcU",
  "key19": "4gAmijftcGzquGMZyiPd5ufJGFyYHTFWT4uPAT5E85h8ZXLPrhNCQswU9A56pV7M9VMopXigBVYawDk9zXDJVkfz",
  "key20": "5uZ6qxKjGpsSXPVDA1riXAyrvsgiEFzoB3FpnCy3GxJbavrCCrpsZFVhNP7XqnZhFzJCqdBVRE3wNUaTU2YjuEbk",
  "key21": "rdbM6nL7h2FRwviWzktUDUS5cgZq87YFJTFFfUmHPUDXd7ZLQwVMcK3Qv2WqEmer52gjqRAfQpDEaD2L44XF7tx",
  "key22": "39WJvqWmPjYt36YmjHNFyYjBxnSbL34n5aiJvCS5sy11oVcjLv99oDH2gwLiirKzoFJMpEed6CfqXDkWbrUg2vHw",
  "key23": "5oErkAp9bomNwo5SyX8mX5tDRt19ufuhwSStMphtnvmEqzcw8bomtjXuLHECJtfozg8t2Qttv9Fr8XipbBX2x8iT",
  "key24": "4oqEbdRL69eNd37He3AC5Sowp5PQUhYiL1xgUEKRYdJR4iZW7VnY6bgwcXhM163kqLaWHTV5Gx6EJhMPxg5aQXP6",
  "key25": "5FkoNFi1HAARA2GCKPUKzRhXfNKRQimn9cWYEBY6UdqsXh4kZbeL7WSqevxz5rGKtw2wfJFEbX81rVsHgY8VNb3Y",
  "key26": "LEHjjTEzk5vdn9ckBCYePTH3A2X88Qnc9cP27z86dia1FVh1cjBqQFFPb9zBCbonsPtfQZc4vdwr7URSWuRHsJz",
  "key27": "32CCCo3Ansi91AaEARoc8etAD4oPcGuacrHKDSpJT7F2r5G7Zu7Uda2YfxPBBfa9L5wcjbLFWFntGhU5XiphWDX6",
  "key28": "29TsPefZcYi8YCiKdnquvvD1hw6twCcknjTC9ddLid7JWJDiF8aZ6jZqdqpZPiU8K4vSDuio9dxgYBKVvWFcbv4J",
  "key29": "52Gf7dzZi9JCJGibdtJEGNR5UHQdvgdN8TCqbr31i7wbNh8tK5UwqYRf4gRfWvfozkKufgCdPwZCEDWx31zAN4K1",
  "key30": "64LgMu2cNNRgsnNZxuPupPM2qHCn4bSADCeppQFrjudSxiw9rpGcayhuprMW4Hh3wHKCoFbz9oBVvegF5X5u1ybJ",
  "key31": "27EuF8F15Pk9MJ4ctKxnV74EPeU4TEBNC8XWaTSbyzEB1msFZ2AdXpkYCZJuRXFbPvCsnZUb1NT6r9gbCgv1dCjc",
  "key32": "2ZCmZgSQhTrKwRu8p8iegNbBteR8TavCGe9ZqUm7uoPZcUL6rDfU54MqKcRou775uqY1fQ7f3VuwDsJaN2F3kY8J",
  "key33": "3ucdZBGMbiDoyNswxEYYB9JdXvmnB6z52TDTjMRhLxGfaf5HMD2V9YiAD1dEscGZZGWiEd4iNHqhPw95oNhugE99",
  "key34": "3iqHVZo7yb3PBB3Wqh8511PqoU61XB2jkE18XYvsk4qyygp4qqtgZ99RCvRp4j3Rq6Uobfj2WvsiKcRrn38f5uHq"
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
