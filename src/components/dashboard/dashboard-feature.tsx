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
    "2zPbR3KvAxaq7KUZkLER9F64evqeM97M6oQSF1ThhhSoReeZD7TdnW5WHuXAEBVwjLjy7fz78hw1i8Q81T8Fxd9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AVXNNx1v48u2s1cQAdh79cSrAUbRwkfV4ZaAy497v2W6jnRrqVAvMP4T2Fye5QRwckixBcW63Ng7QRnz82xgQyo",
  "key1": "3fzvpDh4q5fHvbFpRfKuuhLkogRNUpKjFuYvTpK48gvixzgNwHCdnmCvNZphNkkrzkyT2di27CTCJXAsFXC19waG",
  "key2": "b8a55YMj6v18iQ81EQEZg33GrRZX4NyzqCnU5kQ6NjkS8Z8uK6NdkVcnb5fhBrH27tGXGFeokfKpgBHW3KuJUnE",
  "key3": "5gx4RZYZX1y2QyEUrix34hCjGGWtqF6zepnM9qr9S9aN9DTqX7yxZK3oRWjvQ2KBnTAjFxJuWCxc8zZoQxy6SmFm",
  "key4": "2BgbEmoPeMxxexU4fzRx61LekmuVdBzjVo5s4QsheetWj1DxeATKiy4yjaQEB6EM89SHwWNaucV8tus9sZdbiU4j",
  "key5": "5uqdnon5oW3qTQhaE4JaPFEJWgGXA9Rv3BYHwgrpwn9naqbtQiSDxPk6CZV7nzKhm2RFd8sKkU9pp6cJuwp1KoPF",
  "key6": "57vtUNwrVKhY9grA9pKmmuCwcAxm2oxuKGb8rHbQMmw27VyGYy1D5DXZzpWingg5g561QC8jfBVyAPT9Y5x2jRSY",
  "key7": "3DJKeXPFvDzzkfgtwgtsTnJmVjkcZcXVpz2gGye3vYw232wVko2idceGzWiRAC4nkU99u36fegNJNSmW2Byj1ecr",
  "key8": "4tKmyvjFKyeuGGDcTDANjou4DqDVNefQ97XuqQoTFu3Zr6AxUgGpZ2UcHph7G6ehEbfo9vRQaWfk2yo4DJtZC2Hn",
  "key9": "3unJBbcHw5S2jkqPa7yNZ4ANGgEyXLkxV62j6uYVHMcqzLH5SNo39DB6pyoJSGkFZGGdDH1Vv4fhg9pDN4Yeg5TP",
  "key10": "3hRfKh8i15KkyqGhRoEzrCWF3WKQWNsN1Bszg25yuhyZiiRbMq1b6VrpgjR5gPGGt9Y8fVSpo1VLRFUk1j6Fmke3",
  "key11": "5q5ZrPC8izvsdicmmW6VCbpBBuJTgTajXQi96HrDJ4Vk4ZV5j8RvabvdqG5xmmnHNpHzfScqDiTrHuS3LB2b2coM",
  "key12": "3NYT2uCNb8DkbrhCzQYZbgykGAhEBfiBRtrsB3ANWyJcbXEWD5gsdMtKu1pznkksBTKh7JWZro1MZH9tc4o94oPS",
  "key13": "5p1ioGZW9haeW3RE6gbtAuHiNtUmjrMKt9g1ay1iRCCBbyKi52mLrnFAS4BARxzQoSU2zcRanMNWjqMc3Fr5L1cj",
  "key14": "4SZ1YyXSMJj1xKUGherDiCz8paKJVFPL8um7nTmPJe3XQDdfRkir264xk9uVZjiure2Psm256ZJuADq42KN9A5cU",
  "key15": "3HCVT9uZpWnBrTWkUF6XFV5vc4frRkBrGTKu1AM7xeoubzcE4sUN2xGQKYbyLM8MSiD2Rj6u6Tk5BMcTNagpcyiM",
  "key16": "3ssA3PkfbcQWcZNBUmpfv8HtsjN8s5aSmZa3GtGaY9ZHaYbCwoXnqz9M7nSW34wERqmaheoDzHcGAZ7FY7Gp7gy3",
  "key17": "3KszxxmfPy9J8xod52oQuApvsNfsJmuw5qsH8kKTa4xtB9aRYTfaDLx4YwAxcsB9qs41Yut89ZCADM8EUntE71DZ",
  "key18": "67cq9AzaV1diudM6pP65744ASc8teWRcgS2Bo2yiwAHoSG8dhMHLHVFSwUUrWbBYbbkspsv4fbBC24WJVtAs9BhQ",
  "key19": "4fTUthdogKUpfPTrC1xck9Js7gF54VR4n5ztGw1ve3Ne5XcrvdnV3xQvsA8dCBFvsTB9Dq2d3jzm67oeoz5hWfwm",
  "key20": "331KL5RXpXxGJubdLs7XQq2RUMhaLWdLM7BTXZYEU4UUaj2ZSVKdc4pqihzdppzWYkpxQbhgzgF6wX3HXkydRkzX",
  "key21": "5BY5SC7DTBeWw8RLjvNb2V2RSvaQaYJdf2KnmVXNToV5brXRQNH7Y3iRcFf6ypL1VeqQDaMzU37sxBbhqtfj4QAG",
  "key22": "bmhCro541DCkRVrEYva7SHHqYemBqipCpu2EjADqwVk4DamCF2m4DB1aY3uyq76vXPH2GCeJhB3CodRVDnjGQuu",
  "key23": "4xRRR4BUw7HdBW33RyS3rFcTUb4EUsRAtEATZP7ce7Fc1hZoqoGQN5skXNWj1G35aK2rBRgTVfC62sJMofH4vVp7",
  "key24": "49Lzp1CtatQigp4djRbgDX2DDtarMrft3gCtzaWhr9MqqgP5uMu4Acd6zNga6Sm3PpQqZg5ftTiAW8CWbUCqC8wn",
  "key25": "2y6AAX26p2MGAL7uVNpWDWQ6qyYopmmBNfev57eshWz37XRtNkn2WDdsUUrzbgiAToCJFKttANCNNfTCVujE8tH4",
  "key26": "31TR6XuJkX7rqd8upafqMSAjo2Z3ojBxDDXe9ZHBP75SQUi5dYqZWE3QWHF9bnjE9UR3fto9uKYXRqa8Aa76Kqhp"
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
