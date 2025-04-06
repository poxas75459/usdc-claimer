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
    "4WmgwybKD3xkEyCLYAbtZDjCVfLuaehbgNyyvtviRmgvSkZqknoZUjFYnUjWNRYwxei7i5sQ1bEWbEaf5ds4aeK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kbuM9LLF4d4yjR25eP1RKLCeEPSMPgrSyCbtC2ARSWaoyoCTDXAeEgpzNcgmWD4a133q6zCMXyRUqHTEkxmSaiC",
  "key1": "2KMXKcw8uWdeRsSaaaoWDjz6MnhRDovPLJpoZqrUac68fCYLZ8j23jJGLRMKq7vr1gkWdZ7saHv3yXpQ9bHP5yK3",
  "key2": "3W9somcTt745d8J5f5u9xYuUtj5feVbvesPYzZ6tQeMSVHig1Enp4ySRd6Qw7yy5JbC6zcH5ZkRoMWBBH4dZC2QT",
  "key3": "5xCPrS1CQ99cStUPnwx94wLUuKvS3XjcsnGDcErm5ee4PaUREoxgExrajxdBhCyDZEi6xPGkKEcSNkfXrqT7avFz",
  "key4": "3QJGsis1jmpz7T1LaKaq5q7ZxVuBhQdqydM5jqnzZpL43o7A5NHdbfM9ur9WGnk3xmqL58mBzLDNhtz78iCopbbo",
  "key5": "5j7uhzMAHY4ugXJXSvJcMA2YVaxTy2RpSuKLCdLhivA3ee3BDFxTt8f7CdRpBLc82JRVDD8fNNfQEZymaBwnK3gd",
  "key6": "3p6VpTGDHad4YH2NyBxAoBSjDARMNFp57gcMmBEn16gusP2F7KjwJ4jftMhXogAheqFaPcvAUy9dix1xgwKsyBaX",
  "key7": "5djSGizTqwpMQXwZRxMuug3rK6HomNz6komQvZpAytAc1mvmyPV65RoCiRMrwZZhzgLatq8tNh6buX2qhM4iFEEh",
  "key8": "4fTANhqPKPUFHYxebPsnRMQ7hJ7GrCCbsoBRALVr5YLBgzEfQkZqo3jUvPdqeVVopBMVBEwg3C5mqqEnDwv6mxGA",
  "key9": "2KQGRgfB1mgFtdRD62P4Xq6hxURzcQGeqggAVcytWRAJacLQ9L4QX5zcn7jFftLTtBviKmeaXyUyxgxV79R5Th5v",
  "key10": "2DXVaURwDsnEJMNZurfXwNSRP3W67ab3PptRKUJSfebQ3DuSuocjTLLKVm5M2kBMixYvAAFeSAreJZnKKqmCWujn",
  "key11": "3dWGY8cFN34xB3QMdRdW6WiVLytc3v6tsxSuwAm8QG5SZbBQg4NQ3jPodNyFqeKTEKFUTVi9qFzS2MEtFepB7PQb",
  "key12": "3nGGNtzVvib8z9GAkDLDyu4xg87zBB6nT5gZcvijVyxLjiZV69RA7rPP2TqCZmoerek6G2x67bHAUJfKqowzUyXa",
  "key13": "46LJTbxaGGFNKboAYmHf8Y8kAsPSkTc7Nu82tUEDjT6d5u7hNpuLnGCoKmcMGfzm1ZMPCLvfpEcTHsVidnfCaJPX",
  "key14": "31CsEKv5WFftvmqWEMhwLmVWa6BSAMVfiQ46eXhoc2WRVq34qnjZmNf2ESx6w3vd1fH87bPwufiVNMS2Gh3x8RqW",
  "key15": "5hfqDZyYGoEFcvRAgkyLiETSC644F2xknX4urwMNYbEG1KRVYHc7VZwXQpN9c3jf622SjvWckGNUWHUBTzhiJF11",
  "key16": "51e6G6fHBx5QbDacfUhNu1roHfYhmeLzEAcy9x3aex1QqQ3kqVgJx36Rq2KkzWuSLmT17Q82Ci7654gpS5qk9C3x",
  "key17": "4e5CATVe4KJnEs1YApaDsYD8FhY66VzpmmyiZbBjfLtHCqYJZdqwQ6rAKe7FyYXHXuueFnGXpQZm5krSdqJv25ex",
  "key18": "35oa9Ezh8WNvWY6vXkuRta1DCgBTZ8qTfeRbFSPRDc9jonpj8MZDicoHCn7waC8LMw58KJEvibeaMWE2yGgMH8pr",
  "key19": "478DeLEfdWvv4RLN4v8jMzkQrzHFtKSurBSASC6GGxreumoWtymj33AwE8P4Uh7sgQ4UtZB54rKhGrke9nJK8kZT",
  "key20": "5Bkqo8RqqGXk4cEme2UUUCxVuMqhaXnA8JzkjAfGoB8yk6U9uwLfDP4GNxYkiPtNJFsc723cL9GNEGraFKBPipUq",
  "key21": "2UPQiM5zzoFmLd43wQQkQZ2kjMZo1D8yZV9Shvuqc686ocLasACjAjetsXP9mzSa47SDn3Q2z4PVrYz2R9DvZfTB",
  "key22": "4yW6YtDxiGBXd1Ye5B7Q6KGduhsJPGbyxPGHpzjibNjg6V36unpGQufUxXvcEKVwEUyu632RcydH9SNFMfyXd3x4",
  "key23": "PiFEmYR8DYPSFTQJXfFfi68DnSexy5MpS31rW9fZsCtfCbEzzzZfxGXoBjRJPbnEXkawmHduM25XBfC3pFyzR6N",
  "key24": "1mi2ZadHQqQYyULS4jfDsYZGFSsRpdBjre6utvnDLB2bdERfig7hcmjPvktdMNj69T21uyhQTAe3izJcpfk7EV8",
  "key25": "5y1rpogxpjtZMsjVAjPPU3iyxfg3fSpikvuEwrZS9H26xgJvkqd7X61C7reTMUYMPDpUyrF2qy3fp2iw7jhLwsmc",
  "key26": "3tAUsip8Pvek87ThXh47vy8P6cenbrrg6ztnVt6VdcZ88RWuL9GuEfmFscnkKHZdcEQAf21rCkvcucfbK8HwkPYG",
  "key27": "5WbHaLYNxT5jYuRiGJ8aDpWxR5vVa1wZxkEkRTKzF2mSW3iTxPN5NMqTb3Lq6cG3JjwvLvrNRDAsv37a3PFs1SEN",
  "key28": "4xotyNofucgWscuwDon5kPwxF4mtMD522ws4PAsV4nevBYHUJi43TxHH2E52LUaaEfwpVKNGWbAhoNXwbGe53kbP",
  "key29": "3QYmSrcoLnsSN3NoHEir5K1rcPM6horMGbFYcFni48jQyZVEnuAFTt4fY8cmyqKFHVBTy44Ss6V3vPwLcVG3HWwS",
  "key30": "AmZYRPJ86XFZ5rqgbD2JAVhV2ryDNDFGvoPeJ8vXKhoog9VmkAGxWBT1VFLdRvMbNMbz4XdPkX8YDDAQHnkZkvZ"
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
