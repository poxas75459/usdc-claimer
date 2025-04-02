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
    "5j19xTmwsX8Tft6n3DJduEsfnQUyVKUJjtNh8dRWyhZFgDujNK3X6trKjsiQ643eg6EUihTbQAuQtXLcC4sGBKge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58HsTNFf6GoBoFGkLMivtjp1CMYK2d6As46fMYxw5jeNayy7fbifiKy9ifgvUwXvRjpuVd2BFvtKX8qGL9hQ3bvP",
  "key1": "2AsHDHQ34yMLAAeC6UJ8biVHwEEnddWv6yEzu8Q4RyGHBya72UyYZyX5Hs3HEGA78eTB3LtNRfkWRjeQgMGBopXP",
  "key2": "huEEGM6YzNEJgTLmsbVrV2V2uHwE6hAvV4TGXqga66tuYQs8JafxpZvGnKoLegM4EHWDCYbNGFnYkjVzKJeNx5t",
  "key3": "k2Y7vsA83A7koaQPSjxtVqQEBzt9diCPe7BUf6r6LN6uMrUF4acuojbF1DyUvbbEojvDbsCx4vYnSUWgXkXNaf2",
  "key4": "8gVJEjMfAchugojMum6yTWbKnHrBUchQLuCdsadsQJp2bB5D7pM8fvvmABYdhYpcpgzoA1YnVY7dyyxnuLfouQi",
  "key5": "5Uj9xiZYSN5x2AUH2YAVvduGAyPeK14BC2kNunA2aY1o5hiWjm6XFVebwfb5WmzVqQXxrctSGvWbtQLJT1sCa4Rx",
  "key6": "3YdDJ7wyLRWF1WMvJmsr15Xex3yccvjwyFrf2zB6PisCUKxGoTafUyjoc4qMdTJZACvAcEAvZ9j9aC5bGvfeShgF",
  "key7": "3i43LeNTUMjpiVyLc9Paq7hYaNUwsyQD5zQ1bVS9sKppoiHtfCWFa6TCxCojG2eNBQVPSx24W29oFqZeV7nHLPdZ",
  "key8": "2fi9joci8DbdoB7SYtn2z7v7dtu76TYitzBQZnRY7pzV4KnXuuWgpuSaz2sncpsSYxNjqCvx8DhkurJArUHSrZjc",
  "key9": "5JriJXdMbk8yptwJ6hZJ9v8FusMuPn25SLfqMtkL7ovoPt1djpAwPa8VeMkQTaK7HHUPvQg2Ph7n3uAUQUkq9YyD",
  "key10": "bsdAUkmJpZThbvAnakpEG1RrsBjrMih4n3gvi5inEs56Fd6oCy1pgyrK1VVvMA59jwPFcSdyVxBkkPi9vGP77vp",
  "key11": "5mMFoBQETZG1YN52x4CTbTtmn7umYgYt1W31o3tbP2UwuAbdeHeTYkWFAugJQhuMWiJAY8T6zQauuRANkZCbzet8",
  "key12": "3ampQ2o9YD2U1z9Mm9zABJPhJbtAUJfHcdv94cZE2RLyuazdhNyyd2EirvZaQ4tpbLhGAo9oGHDpFBfvpZjM8drp",
  "key13": "5ebmj88ofYKAppew712WPAULEfsP28vHznqMiNRcH2GG9U8dQvSnqDBvXqkyderCN872ybMENvU3MsisL9pNfh7Z",
  "key14": "3LsZgQcp2nMGUzaZWFg2mSs8tqefj3f6B1NRmFYjgdpJYNS3Bv1NobQVHe2CPSt8PwNSuc3YemxXtL1wX7WAqNVg",
  "key15": "3RQSJvmozLTYPZCwX9rR3f4UaHtvCWcZfFGDw9agLYthywTty2rbcG9cf1ZbYDvTbtxY85uvYRdsQ3MbWHyg9Zbj",
  "key16": "5hRPtcAefcLSQbe2xaDfzF2xKdNqkJijaqbfBPcd2RVmCLyamdnWybPncUkq9tvTFSscBUJN54hfdFbPSKKr93Mp",
  "key17": "EWrFsiv9pRSEtMxfLb12RxrMsnDh6hGVSg1VcZKqQp91nFjawr3xUx5LbXwr7JN7vpgwMRmUER8efz1ugofBVDt",
  "key18": "45woM7DYry1owVLkrUaprUKr8gRzoXSLtXHgNvYaWDwZRZ6CVxoWo2ZuTD4Zwvgi1Jg8c3iQ2dhWfNXirnzNrHWA",
  "key19": "4CJVkoma1LbQhGnYzgfd1Hoi9YdQVEbzWtFK5ZHZjkfYMpSSEiwzba5ste2pDqxXyGJBFn2FrKcTUR2NCz7tyv76",
  "key20": "5BM99X5YnGKG9CfdESGJuDW8nHZTDhUsw77PTV4LYpmAm2k98vAqSrqypSzDGPjcS6k7RwhoC6cp7mgdMLigfxQT",
  "key21": "3RMF9jQmje2WaYvkwiRMbBnnMaxu9R5E6ChcnnVmz7y8aagLBpCoRKCtYSEHK9RXH7c1Dk5tXC61n6BMUbLkJ9BB",
  "key22": "4aNZM2mkhnQfxXtF2bVni6Br9tzyXCxRmrkipBj23cxqcT3CrGHhPCbpJs6dgLbKCSwqoeRRBKwR5U5otMrQz3zo",
  "key23": "2UXdW8YgpfaFVQT5wEGMcVtsB4FDQNwP5E69TKNBe97wMNJmWZ5CYbVfw4BeApUocuzbda4bProkp7WYpvJnUBB8",
  "key24": "23kvCHUB7v5zSTa6dNo87JSqUMKNGi6qBjv9MNkfvJJLemZ9KN1iFVzfrEz7Q5K7xHhSSMPSTy7tyVVmeoCtDe8J",
  "key25": "3EccFEW5FNBjsKCHKYzwkV8w1ou8SiaLudNm8DmaVjHasBTtfNU8MhPVYRuaXNyyomKMzKBTovHGs7RwM5usftTq",
  "key26": "nyvwpWEPscNUv3YfnAHzbvynknXBFmpDtjSdyQpWznYiaskuzBgDP3HMCHfrnEbYJBvKNJH3LBZakE5FaCzFJnq",
  "key27": "67kdiarTAZovjqxQSMk56crW2dGJR8kHhCTQSLtEffuDYrkWhS1jB5Yzc3Xn1sR2pfX4eBHaMo7gPpNu3KaQmAZe",
  "key28": "54nhnafNa564gW3bCQYvqXSgqdCRcdiCAbrMguyefdgphZto9bg7Fg6SQTpwjRaXVtqNXWANZ9Ea8rQYjmiUfqnr",
  "key29": "Pb6sLbqnaAySNYS4esebao4ysovvRPZXVPR8Wq6CkmbDUtNyd2wyLfSak1RjJvmDdXLeujcfMc74eaGC2exjPpa",
  "key30": "27JQYKJehhmt1jzYwjh7C8YTzfvKBqQpw6Hv7RqmodNYtp1PgBjrDm3Qyhjn9wQtuynGRuTtgyeLkp9SuHRrarp6",
  "key31": "4ZEVoQ4hdifyZ7DbtdCttu5dFYgjH4JPNYLxWiFmKvsSA84nxuteJ6HtgL6YcjC8aSmYJm77GNyB1vhYHdPC8Rqg",
  "key32": "2hMfWPyqLCbYC7g9jz98prz8imWbVa4cbfseXm4J7WKPqgW85qcRBDkZc9P211A19FgWHBUSwBrUJZu751mfHXz9",
  "key33": "3yBXaRpmrcNxXm6f29MngZ2UX6XcdxG3fzrVc3T1DhVmn1SynbdAGidFTCQ7VhX4mAqHu6V8a7HbXHAMK9HwKrET",
  "key34": "5CkVqfs7PcmFe3FqWkao9EYcHhri9UdUtgqgmzAP77dXynz4JSYkURoY5QjHz4P1cHNH7CA2FA8ULKa6xVfMqdeW",
  "key35": "XxYRrNVmNitPmyfoUyuccyRxbsetiYBnhqTJr3cY5yTNgbMmWcnYs3XCKmdQEtAjhpbPo7XSJFzpyfyowPFqJmm",
  "key36": "J5XAVnqPUhVwsrKhrpKkF1BkUBNuJBG5Szhgp27s2AgJNyfXNrT8sFyH7wX4kzjY5SeHzwXmrMKUD32TqQ7LiBe",
  "key37": "B4Jz5ehrre6MzCuCYVd73wc9fiNaw7iGeH5AQFwLCZ8KR1Vi5dUMqagcSwmPUjEZVpvt5GAr5H4vEHe1kr7b1m8",
  "key38": "5VpYzRvtfQSLwZ5rqreK7QRmgqpBtGt5Hj3HTqF3gSmSAF6D1FtE6ejvwQ5Pa2YxyWJbEB6zM3rE34yL8UVEeKzg"
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
