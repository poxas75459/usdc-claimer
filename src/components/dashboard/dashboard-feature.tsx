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
    "2rK8RjtbC7MaXhaYzdvoCFRBWY7r67ey2keaRKeBbZSU9xVGBkH82zMDyyoadAzp3b78Q719CBr4EqHoMommH6dS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3utj8x73ipJcrkAgbBHSQsNkRtLTdepPVPJQcdpE1oBtT45knyEe8PvkrSeVeaPqrZSJPm8rmiKgiaUrnotBA8Zc",
  "key1": "2xahakgd8XttHcQ5Hzt1D4MuKsKGgZS5y8vgoP2Whd4E8n8TQvN2qfkdkHfNPFc5Rz1sBibmWVKGeW9vwT7kLpir",
  "key2": "2UCnjGtSskVFStuL67i1TX6oGTVCRgvM65bHz4ypBqjVpKwqjhhedrvLaqVqmD4F5jyov82CjyPZhMr7fGEhbg2B",
  "key3": "5XYJfYX7DYYgVrQYmcGLKyF8QG7n31dzfvuNh33hv6xQYcUnMdFUdx8va8edN8xgShKNMhFW24G9P9QauD6hKfWo",
  "key4": "3sjTcKxzv2QF1riSVPBY4hd968TydKD9jnZedo5zsQ1u5tiZ239SsBt52sYeyTwNtuPUkeSQqJBybj3RxXofmsVe",
  "key5": "3qrrqpzZTc2CReAyvo9jSPTeoM8M2eyKkh99H93pGDEmRFPZeB5ZXuszLH4rWqexHwQYDmnFC4zUsxHoZmP49tqP",
  "key6": "5oTsckkDtxfk673uiLJrUnbBaepvU4eDYyfyfFtZiViBCny5UjwuSG2cVGkyrqyVv1E3QyRdsUAjT56gH6WS7bP9",
  "key7": "29Auf9VsC9do62iQm1huk7wPPcCaoMbRbCfNuigDCGbDwBSv4TGFhhUjPTLQUsU2P55HQE1Wp1RULVa4zBVZko9j",
  "key8": "4v6heVGVbQfDtbrg1HNsbYnJg5sj9UNzRLt7H7DJSdkq248DhZza5sttFpidfqsnLJf7zF6vZiVMmqFCW4xFP8SE",
  "key9": "VWjPbsigqGp8EiTkESggUq6DKAfdCR6tPnDnBvB6syjBeNxzS37fAVqTBtzN6YrbCHN64i2XmQzhp3cdu3P6krr",
  "key10": "2ZjxiiPcih3vcfjqSw7khNojRzDDzZXGRy2Je7CCi1HHNBSKu8dzxmUm8phLgK1tguYsMkfNgX8PRA6JQzdFbjX5",
  "key11": "3zG7GTjGaqugTuKQrC4cMJrmKhbKQJr7MB99tFcF6nvbmtPBzahRdqQWMhRTnL353TC9jiykGhPcxKS19tSAG5kL",
  "key12": "5whNBByonzxvRounPzvCaJC73cnm1N8Z1cgTUNbRGGafh4Vh4UfNcCXoesWjNCcnPvkGNAvSQaJKNvzuGT3hp4Do",
  "key13": "4ghkJ665XvxJXFRQUpgCypU1r2cRAnNrfjayrZPScpJGmrdQdGYZ2iKx9j6zkmkhADToEokVYnJ77koij2FDqphz",
  "key14": "2rNc41Q9mjxeeN7JPQh5atHZpp1Cv49kzcJTnxxvHSKCN33dt4hUS3yU2nqCr5YTcPazZ6BtUETNe6hn1NTgrkUE",
  "key15": "VBProj5v8VEUXrYwj9ETYsEPuhM9zhGuTAimbnsZtRK1ZSNKJV7CUMCuSird7nBuuMc7iwzx5y6FNSyzu9juNpR",
  "key16": "3CNTb5VWKDhYefQCSYgwy22RkbA6K1MwD8BFHeKMLdLHSASMRF6uUCWnSBD1pZNqwfcRPCfujejp69f7WktysAhJ",
  "key17": "3fYNkHC9r9M7YMPVDoZp7Ngm4aSZiEw6oRqwzDm6NL4kWYfi291tF698Et96gWx4R87yWkYhGCaxL7mW5eENeiLM",
  "key18": "5Ziq3heez6jrThS4jNXErAQ2iTgrWfCmMFmPojKvFWpvJB2ehwTnxyfTDEKRWJiqP4uyQ7hTsjDQSFrupHRWpwzJ",
  "key19": "2dFd7sSkKbzEbqWE3YjbfDVcT5GDCFqhmcVRBSn3t7XSzETe5LSD72nvYLciJwWGxitrCgWQcHwqETRdNghhDjmz",
  "key20": "5yQvv3fwzySrZSduod2dicVAa83KTjCPeeANHKNxaQZNpAWPcdecg4kCu4zZGskk9vEoCS6GrKRqJUa5KH6ztooP",
  "key21": "2sySzqxiyhGZek3reqbCHhQsrwqFWRU7VYjhLXRvKGPN7LMkzrDWQnts8FFhHzHucqZmVbQUxAEBQ3t6azqRN3ws",
  "key22": "4fWHqdpbHPt3RmN6fAiZcaysdPqU7DeGi14yazkBvCQQ7ssHKmNxMokMLUm26dn9hmMKwUn6iuGbLtGMH95nBruk",
  "key23": "5EnUxjVoWqzN1aToWjQiqkWdwVFUKfansyf31ppvpB3vnay3V4YJQDPjcXpmUYiTkxvnfg2siENMy9xQhfQSDqun",
  "key24": "5r6o1kjBZNj5XxHvtJtotaWAvfgj6fbg633iCNfx2ayCo23s9FkTrBcCW9uwtgJmi2YWarrfESNRBUcWnavkTX2E",
  "key25": "56esiAKDxpG2FK9kkbeVSYfWjRRosraCgPTsoZEbtuXx1sP3XqSaFbBJvSXhaRF3km174sJfWwu6DRRmUwib7EMv",
  "key26": "3BcKNus8N8LrQMtDreedvHe8nvXg7Jx3PZUyK8GTGTY4jXeLSCjgR2o5ztB8Nw4sD2DW96X1zLvetvf5WxZsLGq2",
  "key27": "2AwxNcpnqxPcqvcrgjY75GHRsESCnAVQzFHQUNvP82RKD74KbSwPbw7qHGxA7k6uVfhmcC2QB1Y7EQagfdwsErv8"
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
