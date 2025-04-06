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
    "4dMpMtSCZ2XmYCkzRNMZq1dHJ4HTRTFsnxRaae6nP4WDzHBikTtE5hUz42MNKa3BZdaHjaogTd9yEQJMaHTXibkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mxdA8qL7vwQZdbvg4EBTnuTei9aGoJWawZD1KWBL5ey2VYVXhg2D1YXHeQxmCkECLWH4aaytHymNG48mEi1q1o2",
  "key1": "8tQHiFHpvjNJKzL21SSwE3CcmGBrbkRE9ABQJMMoMsdR5tpTv11DEZDP573efMgwX4bGXLKw7pYEnXoa2td9q38",
  "key2": "5Rs7wnp4z5B9fSqyLa9q3SMycWVTdgqQSS7gxoBH88tZvMDiZUiqTaLvBJfcQmhYV1E4zt2nGrQARhv6pBmtnuDQ",
  "key3": "3cGgmeJGXc5zGietiUwehE8cMAQwWZERdkZt25A9FzH8D9WfRPWNR7zk5s3kc2tiS2PqNosEAyBAqTmoS6nFRWeX",
  "key4": "3CWZundq55zzXkTtaj5337GF3kQYjJFYGXLfCUfKJDFJW3NGj3VWTYUX9214tYNgWgr1n21QpZKQPm1rcuigoNnE",
  "key5": "41zEtL6WyrA5XbAGNWya7EAKFwYEBcmHfE2ETzwckaMmVsh9Bk4MznP2VomV2GJYV7KqYopULui8Qesmf8j7GJ5G",
  "key6": "2bdQL4SJFZbZKg2UHN4vPB5uuccvsN7CRxPfk9LdQ74ihMQFUER5nzaBmKiXviyXyFc2kALSkfi3GzD7riC3w6DS",
  "key7": "5mhw9S3o9jFoGtyQwquQsfQGBWmGUAVzY2HWsumcnzV5iZWv7mXmCjifNJHMfEAh4BCDjSC5oyT8ScNFjyy8vuX4",
  "key8": "YdKLWy2fVTts1dWPJHGWW8mFzwcSNKbDL4GtCHcNcxseiwSQV6uqwWg5BDGiTZkykszyWKa9FUSanaXQt2a5ghP",
  "key9": "2Z7ceGP5qw5tjZACPPmghPnEhM7uacJRs82aJL1vKDpKbBTEt1JGGTMunm3ne4FU73mZhrfHSNU5SFa4BNphbT8c",
  "key10": "2ocx7sSrJxWCVg36xaS2BfyU727bhzrH83bZbkdwVpJzz8oLasNwchQSxdvo3KP71K56bxNuL7E4a4WinukVHVjA",
  "key11": "3LHRw7EZFPVn5Wg9cP4HrSjrZkXJyeEYzJ5i4j4vy97Gg1YMZNPsQKvoCMpvawhuophrKruHHeghqd9oX2LJsfvR",
  "key12": "2SmAEitZ3RvmoBB38MPeAEMVXQKx8CdYtUF5DmGsKQFVz3zyPZfpzKhzqygD3cmoKCw6XkKAQLMEn1NQtC6cS7Nn",
  "key13": "2ed7xWM6vjnNbCF2ACgvPoSeJhMgvGTK3daqzfnjvL9F4mQbyf4ug9A8op5T5B87ooWVu7TGuj4NF2ECg5D8md8y",
  "key14": "3GsAiqW8cYner3eNYc31RGUPL9ewVZ18RuDHesyawjASo2Ev7oo5c9AqpRUmfttH9fnkn9u3U7WXF7R8XXY8Ngsz",
  "key15": "2MfDQRfu2rqVpV4YywVKzX6ajmxcCejNXJpoWvWtqemoKXz4dEPCJt7p3zYznHeamCiRh5UV5kz1Np7bKGRzE4s3",
  "key16": "5aibiJsxUdwMzxHpMar1se4ahv4vK66BwsgXgm4Pve5s9Q5UJVpEoe5UsMikPFmtKFN7SE6H1C4JoHU1W1UcwHHq",
  "key17": "4AUWSEruAzWRZvAmdfk9T8o1znz6xzNBZgvjvTDfmD6t8agdujWWm4pB9USyfCeDNFQxfFNMDDLFiEqG1aKa5YpN",
  "key18": "2dxwBuKtrer4n2Vx8gGE1wJBhsLLMerZNDnTpXevwNngagg7wzeRdq5kLNUGzuPjh5YHvJf2x49nCdmymZJkoqH2",
  "key19": "2GDtAALoZ3VAHhrhseAF6hzZ6GZ5PEudtA8bvyug3X41oCekUYnHveaJoUQXhgAdnA56xhasx9W5tBBRjaQm6g96",
  "key20": "5vNgFMwzGniLQmMiAmXCZkE5WBfeRvt6UfXhDuLcKshJkk11WL5Tx17KinGZVCPMbnDNjP9zsGMRBKdpe3HHd5Lq",
  "key21": "QELNDiVrGRkyGB6neKfXSWCLvbqv1c7HtGNLBkom1UgaxJakDQVBnsXDxwthq2FUm8HxQeuT7NCdpZHK2UnGxvQ",
  "key22": "27iWWrBdJYJKmyHYNkcC4c6yr4adBe3CfufEx3oXFjytBZATUHk3YCR8n5NVrNj8TgCYsCrKuNs2MVtjHkQgEHCg",
  "key23": "2cAgUAiXm1BHszekVjkvQkTAu4YeZZsCYMQqRFCNVakwiZxndfLcwuJun99kqB4NnQu1PHDDZXVZo3GiqfzzVJsv",
  "key24": "5hFRnsx4RFfZq76MxgffR2sEqVBUvrzfBboiLeqCGKRqjmtXfRFM18hhEs7XQvukp11ZRPktkaYQVehZKeqGEJKk",
  "key25": "2H6auHuKF23hZxtdvb5GH3bPdaGCAukb5RV1DvDVroKTBtBp1DsHAXFeJVYEMQ6cgX87mGPeYLzpZrNeDbrw8hP3",
  "key26": "5kau43NRp1QH44bVSc57MKBdpoJSdS8BBBa17erZJFFJt9dfYJQkcWeGbxPVeeLTJ89dkNnWYWSi4riYLLGdbMAa",
  "key27": "3a6L4ieuYZdoyRqLN5PPEfAa3w1pHvx37gLCiHUdCiViNJpL1XvAR8LTPSE8LG3QsNzUwjJQv8UzEZJ8xm5iCC7c",
  "key28": "yun8kvui3eYi8WZUQcGhFHLjmNn21RkYn6TXaayw8p8k41QJPrDuA2Y4hSBkPBojHBYQsdj2GmnprT978g7TSJ9",
  "key29": "654x2f96ikCeMSjEXCqpJk52Jr8UqvHmfWadjc28t3f5s4USCiHkedf5X3WCTheP6ofzJy9aiaSAa1ta6XXeDnvT",
  "key30": "2nn2mVkonEeDJkoZ3bZWQQSgbATJuLYXKYNcaMEp2ZJVpkc3znDftsfipxTcbtMzpUNJfLQZiQEdyF6r5MW1ER2n",
  "key31": "5Cny6reTzPswBy6hHLnAuu9UgeugS73LWB2WNRJKW6EiqJgfQ9hTmB2sDGY4ETcCf5pDehuXY2hpFM9RfoBGsbev",
  "key32": "3hTJPo1Km1avGuvpnGPpyDQ1tbU7iFWSfHrDjfVmURk9AEn13jgXNUjqWzo28hHxFsorNgr7yQ7oBrhNzeCfxJRP",
  "key33": "4Bb2U3SB6jDKsd26guKhKNj1Shs71QCe7S9SZN9iwJVZxVpe5Sz1vgRq6AWuRU543M3VjALC8W8BoLRZJMjN57di"
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
