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
    "62kbHiBTWcHP7njpy1D9SAsbETCAn8YsjybuA85gHHPu1561yBSho4CrHYVZW2Yfos1WY2g2eBBsoRRvQSSspH3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FmB7VTzf3eo1Yzvmp5y8wDtUUCSRN64znqpCym6Mym5iWaXQ3VS3RomUiuga6gLpgY4zgpaf1G58myxGdUNWinU",
  "key1": "5jPYtbqswLHvBVUyzn49a3jg6sLAeDPLCyW71m45pZevwQg1DyHrLovz5uCDMMKtkjnrJeh9AnCjdTxYYDuxSnB3",
  "key2": "md4jWWbXNZprEVcGLVe7S2mrTjokZAuPiXkXbKUS3gnn2nKvVywPeweNZfvribUwoq4McVM4buHANWxhvaFqMkr",
  "key3": "373nB5Vwx9uNjkggsMKJS8uMa7yzWWRUbEh7LdUoeb883b76AKrcCnZVtejHbbQYLR6BmiCUKtZ9azmbFFkuSS9R",
  "key4": "5kKtGo7bF7AUeLpvXkLHn6iCDoXpfLJHgkYk8koraeiJ6EcEr3zEyEzYKpxWgNZFsRgNtonq1noCwZDT7vJG1RNj",
  "key5": "4EdmKG5SnyuwCZjVgFUxd41iGNGxpF6kkQY93nA1LcGJFU5C42iyZ3AH2jZ1A8zLdtkSZwU1kHY2SEtETdKGxXku",
  "key6": "5kuDdZohenixnDTxaQCsjoMqyGjBcbQqSW5h99Mud5xaQFrdio5dTrHfmjueLxESSZaQhUa1j5q3N6spiEUJ3BuC",
  "key7": "nn2zJdZK4khDZfGjh2DmowDJ1fG98huJmU9x5yvcmmVaG3GAkcXeJRe6RQ6cdqex3vFSem5JRtq9RknaB993t8d",
  "key8": "4SasBom3MK1uzBNcC3ubi9i9zXGjHsHSRc1QfmqTSbqsEN3HLV8GkjaTEE8atdPiv9iVaz1CKxAjs7pvHBuCvjyA",
  "key9": "55x9bW5edjPqEbN43JScGadZftQvNqxs9WaqDu4GVDHHU6SuddQ1o8qDEamWkZfYMqVYSBYbQm5ub1SwfqRvowwZ",
  "key10": "4oaMQEjJfrx4v3z91KHsZHE86uVdweBx7gHhABGeEpwRfveVdPyFJgRQRdnQCf7Jt2YTrcfwrSrE6xEWZNBjd1ah",
  "key11": "4KrwvUD487KdEG9JdH3psi2NraekBPSQQ77oFP5Hvjons4VjQx2rvx6segapJePogBYmaXi6dVoC5pN75mTBHccQ",
  "key12": "4RTist4fp4jL6pkEUXKKYTo91ukuesr1jHauBMStuxq45m2F17ZwWxHB7PJeYKqEMUe67KjRMoppCMoPhyEjYxts",
  "key13": "2X5CdcBNWRZFK14DSsPWDSVGSNTSVcL1resmDnfYQN6RMP1jZ3Bt4i7uUtts6HybWfKktRib4DxouWYEkqR8yis8",
  "key14": "62DKamw9vgzdK9WXdanb2d46THMvcRjGtfnbPro33idV4kqH3K2ReocUzR9jT1UEzcwT2Cji6cEcXyXFZ27UAWdS",
  "key15": "m1Q9hYdAZXJkdfsz7CobPeMfMDLyDY3AHc9TbpYfMNSGxbjEpyCA35D4GacwF5YoeSmkwNrXJQMXtfNNVJ9s42v",
  "key16": "3TU9piisJyrzdCCoBBNRB4TL85X81P7Lp5QSsSYntzfxmBP7U64UFdGoP9NbVTPq6F6f9hY7JHqmeddHqvcWf68L",
  "key17": "3eZkgCw7LYTJaemsRgmmumc1eLLXvkTrYGziiYruTAsusWAe5eak9ewwaq5noXGbB1sy612WxuQx53VrbC6WSR33",
  "key18": "2gXewdQJD74iKsQwaYzLZxw1Z4DvWA8oKcsSU3PvgmBP3DMaf4Ge6j3ckpZa8WZgB7HnJArGSxSBMYUjQrFyaBx9",
  "key19": "3JFPomudmv4XpgBJNAsM21hFmqcijycwW6PY3pj1XPLBSxeGNLN5hjqnV1r4ESV8tqTrdKfNeG6HwEm9HJkEnSJT",
  "key20": "2pNviXCqAt3BJDcb7obxj86BQ4BMeh4mkpTzNeBhhmYkeuCSdpVFpMesagJqYB1AJZAgWnfzz8nM7j5BtJjHe9yR",
  "key21": "27H8vykP9tJDWhf8cbgy5dxGiRT1zNXCRz5d7cXtu8oi1GDAEYKt7kJmPaXFw8csa49uFp8WxHR6ZwW9o5ZsmRJN",
  "key22": "5LA4QvQC6vzgutvJJ6CqYZjxdEtb8H9V3JQXztSNxTxjFdSBHrfdcT6BvUA1FJav2jru2kNULyaHgCWvk9FANKKR",
  "key23": "Tp269KsyTxz4iWNY2aEnAiB9X3VZSfKbPyqRLoS9VNQQhpcAS8dCYFhWBLEFc6kxpnLfrDgneu6ZoD2mwVzTqRW",
  "key24": "62bxuQpDFX2JzFfMieJs65vG58NpwATsBNbMTRduy4w7hjQEUTBRAasjzF6wh3kigRV6rYLL1pZiQcUad3C38t8W",
  "key25": "Erjpi8NZt94Y1kmujCVxy6KvFi1nmCwn4kGrXyzdP91uWh8179W4SWM7Jb153vE4KAHQJoK4vv1P56Sw8wFTDtc",
  "key26": "3hju3uiC6EPwYNASmkoy5X23P1GQekC6WrC3vGqYxonXhsaBGkzxkbwbQNgambqGMNJojv6SADATaDqMq6yeAMf",
  "key27": "4mCtZnCEKKACox9dgHEf9ogbtMbQ4jqzUoArsbUCiiGdS6FKJLLEX7JWTBcNpBsaqevvqu6pQX9YUaN7YPwdeNeZ",
  "key28": "ki3AiTKw35nNf9Cxhb9iVSTbF3kxRTYEnTbi9Ddf7BMoTn5PRh3zpWfRtLt5BtqLB4cFW1rqc2wc53tkiavgaBA",
  "key29": "2XqfUgCRG9AJFE4uGFV9HAYAqwHeTrp7ju2wP26qz8AQz8QvWx9ao45ZYF9jUhsfN6EAFMYmXh4DQAefmRt7S6Ev",
  "key30": "4uvRHR7k5UBrACbFd5Qb5QV2Ra2XSBHgrsRZBrLbRx4HEsPm32VPjJMu1GXoz7119zjmWc5uKEEx7m5YGw5qpFko",
  "key31": "2Rt1UQcx1bCBSBh1tNgAgpcKEtkPiC4vwWf1jVfNTTrANqChgtRLrZs2SbW9umbFjWXbaLGpbMNX78BCrqVWrtC8",
  "key32": "4NEQwThYRkXA2wswiGdByPzM3bkjfuYHGcZEUhxSGmKGDZc6iSuq9MmxP9M9RmNqpbtGG9yxj1nGAGtpBTLJLrPG",
  "key33": "65y8bknkoNWin5VVGG9owmxVeqL9vDRQ52qPHjN7wUxGpTjBEEgYz61HPvZTeA6oswoc3VAofJGvG4GiNWCHXNgo"
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
