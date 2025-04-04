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
    "3ZHF6Yz2HAdxrDR6Deo9E9o96F7Q5UzMFAse6GKv8M6a8aiykFCWoJCPJmbtfZ6mnj3cHcqpgPmKCDpBEDannxG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "426X1krEskjnfQjDHKwSetEuF4itwe7V2326CTmLB6R1vwSEzQNcwSRgVCpDdryLaPTr2rSjegyvodiKcppJw86q",
  "key1": "2LVbFxZ8qTxR9f3KdDeMDYbSyrpJNRz4ttcM4vCqJE3QkktuDbaGuaQoDdQso5dhYKyPWo9K1QUmZnx8qPY79WjM",
  "key2": "25rbBnRBSYkTiUtXeBgxQocce8LiuMxyS9rWyApMZSTfpJR628MDMHrbgCc6XUonse6ruHfEtFPLEaMWEmUVWED7",
  "key3": "3GH3qVDQTRxTXZ8QgwTgG9xQWcvvDFCyyLonT82of1kJxTHwY5WfsFDJPdPEi4ME5LS45uUfFm2Vo9QU8QMew33p",
  "key4": "2frHpLdCKtMDaBdMbZbNG4SsaZVAuKMW56H3WbQMs27mdi4NMZ59kbdxB7yAUUstG1je37HKXuChXnhyuMndjmMj",
  "key5": "2btm7SvVD4H64LA1dHzogt6u8mqbFMQJH4r4EWXciuynHJxrgNfU7xRuDX4f9hZCAE47eLtGLHf4TMGPfEUoYEFx",
  "key6": "5ixL39hP8qUZedjrJG8TJ32s7YAUVWtSMcLhwtEP2MxRBgofB1FZekfekLw7HejCxnfuiU8fXR17dbrERSK7D4T9",
  "key7": "25mvfJoH2VJhyXnJKhPwq44i8BmTHYvV5R8qFoX4pxHtCErPgje1ZdyZtNcDfQSCzxFVsaL7wdaSntU4VVt34w31",
  "key8": "4TqbmWteiDPwsuQLx5mPcFLYMqyeiagh5eEUz9aPQTht9ovf9pMcjMAx5QXjR84Y8s5XR1geHZaoQLG7ThQFX2nV",
  "key9": "3Bg9hcWLvf3oaEhXoazRFfp26qsPK9pNWbvdEb7kKfEap3cFYx6kLu5nLeu8ZrvbrtnwB3tmZRHWGe9dz6sxyCoY",
  "key10": "5JPc9uC6Uca5TM8P5FF4n8fuFhzu4CzQfJAH1EejLDtLj37m9uenirgM2mKWQ7FEBBTbmiRJATNXjUpdMmxPHSLL",
  "key11": "31U3VxiXA3644WBDj1VSmV5CkZnWpbFNwDnYmh9mq7tMEUEwEuVeNvo3ZeadDggfXhpJbtUUDVrgdjugLLgJ2JJR",
  "key12": "45j3ivVeh47XjBuTiYS3tQ1a7YmcvQ63pP975xDXRDyo2VdnEd7kowXEw8RhRaAAidYcUKm1hgDjiZwemiK1rFL1",
  "key13": "5WW96UeGKK5jAWn5jN2YoEHXCmervc2a1zWYzhvYFfqgrCsN3pPFyS5H4GBvFNF6AQEFBAmMQJhTrqgRwUnDfju4",
  "key14": "2qNFjVRRUL7BFcWf7EaAHDgT8ajySMWPuDfHTgf2QmhiwtwLY6YRpn3edN6Rg5PGFV5yNMnrW7sS1GWAk6egZq9y",
  "key15": "3MswTcq5kJ7rwD2ETSdY6urTF12zN79jiucEhsYurVBV9zjzFZWFUZr4zdswYgpADYE3K3MLWW7F6jqZbCrtnWcP",
  "key16": "3yeUaFQrJSu66opFDiS41nEc8FUREDucjYoERtEPQGq9kHyPXaCL6VWwcD3x9dXveMcsatmoCveb4qtRfr6eHv9a",
  "key17": "5JD5HrgBFA3N4dro9eAXzAJ9XL9rE7ykLLLWKhdgjak4WiMA6jt3i3gZFM2sH9fdmPXsn5L2PwWWE2sGVPsD7aG6",
  "key18": "37LaSUHkZMd1yJp2T45XzpR5ZNJu4JzvWsqMHWc9ByUJC49uGttGGfe2yLPNDR7fp1tFWMG6mrQSC7qL2HyoCsxy",
  "key19": "2kpvb4BqSyT2kvDdQDfPYu1Kh9okm7S37LZ3CpxKUP4FgvNzwaWiUCz2oEyGgJFoUsVWVPfDQS3FQekhLFkxFuq2",
  "key20": "2UBiE5w8uWDRf3hCuZKJL3cCa2Cb1QiVR8w5uJ1mwtQrvYLyVtELfwBHdXZCSq3a2kkoGYMzD16MhbcAUB4JmEJf",
  "key21": "28eSn8tvPEKH1qsrGQfbqfmHBciKpovFg7FFyYuyKS3ouFE3i6MRz5yCQzQUDh9PyqZK5h7k3vW8rkVq2kdwTBRw",
  "key22": "3AfTPKvEKqD5QAgxxrWueBqBgxdrG9FSMu5PA1kCayM2D6N83ZMhifX4GuQYRVUx4MGmKiNXSG7L2KzQU8uenpNZ",
  "key23": "3XPQAhmeZ5gVD4ofNCWng2cV5jefU231eaL1AmM3rdrbWg8jAFB8CTQVTP2D4UBm3LoAMgMQnn6zK81VBNf2MV3b",
  "key24": "2BiccTXreHKN2SwL7yAWYDnS8ybD7NwC4WffKisunCoCZvpou1gQ5CcLyuPTYJ3G9TVi6coNtfnT85hVfoSW6rNJ",
  "key25": "5mHBSsUPYLR9Jbc41df29Q9CwuJTKqsxxFpng7okkm6ne4EX8qHnJthzJgiGTCzMT8uKJmAXHQP5yXL3Rfqop2QT",
  "key26": "3xE1GKFfkR8ythcZmkWkzXrnSsFfGKyEZbP8wzF5b7kYtYuiXgF52obau38pvPCK8vBerUJqQ59otsuTqFW1xjMZ",
  "key27": "3EsMPWcVp5JeWjgVhxsH75LHYsGk7yCzQs3qDeURXAXwFfN31UShAsoNxpoaaQbEpkVyyBr2RP2VccwAWRdEeWwT",
  "key28": "2uTvT3jh1AmPkWweMc8yz8jZ2pj2EKYPir2b6y2fKvwfwt5nfRvzsMuj1v6PssEZTL4ZkixC1X2ecsX4BXny5Uvi",
  "key29": "zWmMvWRmqv66tmQUZWh7LKh6TTjEUi1SXYsjqiKabE9oFXofujiYABUFpmAQidCsZKYxuzfquVVQVN8jPd8YdJL",
  "key30": "2pNp5YppQuH1gjfV22tCJii4qojJQfDVMcNf47YXgoDHRCSEm8tSXYWQrZbvjjeDhF94J5LNE4n86VTS7XN6yz3s",
  "key31": "4X5S8DEGktzKw2ak2m9jwej4TYn7scpwQa5QeSkTUjySk78EamQ3qm6ZWKW8a94rGDNnWmWUBF31uyikgjZEUxAB",
  "key32": "2TtnGMzipQM6SPfL9Yayf6DTWRoXTqSQDGDHhKzTcd2cKJDvTwm1EWoTiz4tQyjF6TW938PCjZ1RGPrHtpGcYcCG",
  "key33": "2UJ6PPQxVyZHrxtb1txZuTQS4XRoJNxw4KeYcbLtbdNtFFETHoYWuf9FSbKyVMzvLADVaq8FFrTVtM4tNGbofRTh",
  "key34": "61BLp9R8SooFQRMMqR6rqWd3WbFGExRoZQQQUip877RxEJAd43kCZxNLxcm27dz8PfoNqYW7wGUaesH6wFnxpwVo",
  "key35": "5UfW9NHSRsVagHE9VmutZA7SSrV4KkkwbwNZXKc8N5kzkWE5ENxEGDQV71qWCcP2tWCLRXrZZ2zW7jiqh8WyaCAc",
  "key36": "5gZaCecRxfEeToadDxTzCvPWLyQATrBox56Qm1G2qpfNM3XrdrkvJF24DheVFMyCiPHwP19U45s8Ru9bBAAWfpgS",
  "key37": "2h5ebpo1JgGM6X1PKBWERNZrrjogQX6cCiJHk9uxCSX6CTZXei2eNHzDnem1iES3RdMKGp3ieVU6s84F7smfk3Ms",
  "key38": "2UqwEGjzEPqfjdf2td5gvcynmUqdeSDqN67q7cirsY3UhRwuaPSnasMvGToaD7LwQQRT4q6KboySm4tAfwouYbk6",
  "key39": "3Bnq5jbviwpb4Bi82qrytAwAapDWL8nerz4ZrpSNS6jeXGUyxU3egaAzjkuy3anRjEy3Ja3BLb3HVJzLpbueaker",
  "key40": "5Hq4b441kjAG4vq54pboKiSynUXHU4Qofi4JNdVZryEPtGCrUGEur7UEvDNGrARwncUo5iJMaBkSFJqzSZMoQL11",
  "key41": "2snUkKvszCGWMTzj31XRCt5Yjj4MgvCFBBbHq8o1HGt9Wdpf8XkqdB9cqXab5FjeWotTeWUNHf7HoD6RCXCF1Y5R",
  "key42": "2Q1LXfAEAU8kv4ZTkdozuYpLgq94eoYPskmonXmc3RDfTuMB87FHuWu23cGpjC8zYXYqVNbfa82hLin1on1SU48T",
  "key43": "2EnveexAeWMtywUZQuT3mbCMGLPupjAcKH48BCvgy1Yy2oBDLHrhZpKvWqr5AKayooR5tPqp3NQbKsXQFbvdqzAq",
  "key44": "2KJXtcjWYYkhXgnHbCPhwhRXaJzqWLbQS29jAJSN9hpgj1bs18cZ7bHmWNARkZrj2JCwB7khEgNjjMxWmss83J9R"
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
