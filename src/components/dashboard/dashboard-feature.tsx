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
    "5x1GRijvGEHzoKjiyTjsedi6yogDkNTxra1BX74w3awLiSyPS8n23EKCn7e9tT8MSTgJNJrKc2mbLdT73bm5pksk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VsuKpfqtahrPYbimSNJFemvgNMAqXHDAxTKGVGa1TnmCheiAv1JNermWEDkva8wCTALEVpU4NPSZoJbY8hq2kAX",
  "key1": "55XB12ZgYVW9xJ8wVfzzRJkqDr4cnGsZKfXbVtMatiP1t2Z3h8Fs1ZPjByr5jqRvnBmu4ekbSbZshoKvLRJAQgxF",
  "key2": "4LFZ2cunn3oP43op6zqNLC6KZPDF5u71WKSxxHyGCKNmMx1aSP3288T9fz7yk84WiM7yLezH4oMAxU8yNwivWVjy",
  "key3": "4FXbZ7LjyRJ75aiYYkmc99ktfLyMQSNbPw5whknWdTGTB51cXgp68LrV26eioMegFBacQGZJHbgLQ4skgN49RV6o",
  "key4": "5LCrSDsv8eXYj1nvkMW6dg5a4WeXo7DnrjGwqwicJFAiHCFzJk1RVT5QLJikW9q15gQ9DUUi4QK624yq9Z4Dsgd7",
  "key5": "3F7AirbYfLqq2ohHrvQv41Q4evWbn2uxN65sZgr8zzBUd5a4ipnSgFao5t4S2LDR2LDffCUUkbXk1KVvRKV45bdu",
  "key6": "33a8kGGGSPjgToDtoakz7s2cyzSVDZy9jiTTM9fmMw3zJYbLQw764yWT5Ef6ubVsHDXFSRo8YwB7m95mcfUymZ8g",
  "key7": "LjFdtLCbfZ51TaKqsmMWG8WCPAYtvmMwrid48CmxfANpXkhk1jFuVPMC65oPu2JPmDExQ5rBwWZvG8Kshfq2GjR",
  "key8": "561ksDWu13oago2GTLCP4rgq5RsoBVQR7Gcpqbp3b9Q41egmZVFXvKbxbUKY287HCDTPN36TQC4tQx6k5k5LbBEf",
  "key9": "2BesXt7Nmr3GXUBnU2X7v2MGeQrJucryB2bzf9EVD4UdYpjqqgwCBG7PCW1G2LWgy8w2vWMSMzS11kfvF3sh12dN",
  "key10": "5aoRmYy7Y3XXrCXSHxqvhp8VvAPB7vyM5LtiQD5nF5BsmmzVMzjQyBBb7EpEZrH2rARhH12FrxXwMosHKTSTb8r2",
  "key11": "5Rm7SZgpm8Tw2RJx8umm3pGJ1YyYforL5pTZv1gz1YzTbU8Ed3Eo81XGqWeVwtwkDakEXpY7dbX6BZ9njNtRzHBq",
  "key12": "4ABt3Boh9ctd53HnHZ7NXLED8M1iC5xepwyt4REg2FjAWoqhQDjnC79voWurJvW7jivqATVojABNGuABr9hsrCxN",
  "key13": "4Dd8X5Lwe6ZXfJRtZTXXNiRUaRxMn781xAxv5FTipjCwiC5SQsmJQVSVxznnDuCAC84y2XwAu5tJSodJJm9wKH4W",
  "key14": "4wMgCY1F1YK5CCBgrTEuQBhmLY94AQetJVSpu8j5tAwMFcNSgoKEmuopDfLiuzF9QPApqRiLNCMJWwVSJuMhK7o",
  "key15": "2xpkL1nNnEpB4gKjfVSiRx2uX4HtEWUKNqKnih2brwWWGStCiu94m3ntsrBJ1fP9WuFZDAG7kcbSKaa1v6SLjBiG",
  "key16": "2YNZ9epVBjEXo113XLit1GEPYqiEsKmaHmJu5bT9EY7wzJy4rAZ3SLMoRXTw5dveeyXjXn2gSniZ1Z9WsdvzsLah",
  "key17": "2JJFwfgzouNzDVghCXDMmtwKLy3j1mq81LaFtW4y1kGveQwVtzr7dwWjxwCQjhwv7MYokf9f85g4UB1kAE6iJRWH",
  "key18": "2RW8q3WSDf5JBygPKsZYuijTXgTHxGrPhfnMbRarG88g7pSJDwzZAoDjvk3hvh4jhy9mnbdXQyCFPnuLzipfGbYU",
  "key19": "5164H4eCt49PuXV9x8d26wv51KkiYjFmpWqFFYcaLiKAth5HfCJarpZu8cLPPuxHKe1jXZSPRYbbPdsvw9XAFDFG",
  "key20": "rpDUPZPhnivb1DpyYPpUm661MDEyq8JuSPkmvWFfTiqHwsTJQMbRdvFA33cgnqKw9QN3yfCpDPoupYwdu6BVQvB",
  "key21": "5xZPydbDkbigbuhiJYdmV4Dvb1XjLtFyhPFJ12oxzRrKxiytVCQVJDBiLKR9pDVXsDo5TCfaNaRiQwfUmNTML17A",
  "key22": "3Stv2f3SQnncTsEareAw4D4R8XBKgU3PKqyZr9a4Muhyi7N2UQpuWsKTq1iwiJV7VvbRSummQ9Kv5ogdZjbK6Coq",
  "key23": "3S5JwUn9mnQptozHxGZJp4UGKPjBFBvmrYZd4mSmpXMfVQ251W7k3hQqbqwmbmrnsa81shNndeBTS8aMwrNQN5zB",
  "key24": "4QtbDrkGFgPWc8AgbwAQaG9kYRAfukf3eChCFUC8okzpsZen2sVJVteAH7B7xzoCXM8aHcgyy7JY2DDt2CHKPBv8",
  "key25": "4RiCKAXeVBs8h8NJGMsSUMYAKEeZ8br7VNmL8pinqF3Vuuu7gUupVyhshpn21fGDkB8ghWqwM15hMMd5PJmBWF2W",
  "key26": "3av1Ehxjqg94jDkrq1YUSZ7qm6LdBWKB2aNpJDwsKaxiGHsxPy8BqYrQ1x7WBGzZjtjRdudkmCPWk29xyD6Uqtxc",
  "key27": "4b4a12u15L5544UkMTreXPXVpchAeHqumRdyVskjDfyfqTVyQnYu1ESbWH7L2JFWrehNg5D4wSe9mM8bBzHC4jwv",
  "key28": "5f1GLzaaFiuNCLdyCxRogXfzfJtKCDD8szzmdc1Rmmi8C72oHc8yDtChvMoEMxCgNXCTfaFgX3F71f4aLN6kXgMX",
  "key29": "do3gW92LcFUpQVyJUS6sQHWBHX4tAWz9pXkauvyAzff9BQLqvuduir2Bbww6KfgU5oTgF3Wy35QYpRgm7uKjLXS",
  "key30": "2cr7AEyz5AREpaBbohMVTSZdRNg2ZGhTJhrxVzfCGedvsq2xtUhimosbqkWpQdUY9dyuAhTjxNmZ4cAptzwVMXH8",
  "key31": "2WFYx6YAeRcuYnNeYGtpmvXBUh7438YR5D9eXtBK5pKPuC5gJZK7hhgNfpThz1wLA7Aze4dwjhJfKXzWaYv17v3A",
  "key32": "3rw4XeBSd82oCBbmDpzphuPzqzUZ7DoKnpfAEScKYC8DVCGmHLtyvaQfUaVTRhZa74Qxr4roLvHwAPYoLtg7LyWE",
  "key33": "5XeoJ1PuPKAc1D1GTXPjX3vertEBxqpernjPmjGaHN6DD4Mc2w4DhzVL4vxXvXLmeq6e6gYV9qEyGztee88LC5ZZ",
  "key34": "2CYgn76Byyhhsct7CvpBKvbHjBXBHYRYe4Yu4farVFP914W3x6rbofBd9h4aSnxTtXSsyVRS73potuHks5zGWTNW"
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
