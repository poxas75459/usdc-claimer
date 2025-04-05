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
    "h64h8ZsocYTxnJX76DKJGWKjRDtTwaSsQx89Faq2qYBmtH8ZJX3AAG2eVgNeG3qyYxbKGaAEgFtSR5KnXcELq34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vDM5XfvDw9tJEC4bNgGYfsrpK8AdHdq4TfZ3DxFMrTqHZ6Bii4fYjLMNqwh3shdER2gbsVvZ9sC8jdNv4ketduR",
  "key1": "4StkBt7KBc3TWvaZSNB2Ug8H6waBjLD8iAsZPUqvt28FGaMApeMaNntPxqyaFM5egq2etsVkP3Nf1TCENeUWtWjn",
  "key2": "2zuduenwcTCNPCrd13di7oTfByz5HsvcHskm43aCfz2qcykZ9a2cAzUZ8cGHoP5KrE84syL9cUeKijFtmpAtJkSY",
  "key3": "4pSxSPnFGjq5sm2Tpc6Nih7a3KYSkmXyLTEmPAKtjfAaUBeAaRQh6TUe2DmZSqQePqumFjMoNW9NBxcH7HLpBVCu",
  "key4": "4ZP9Xp9o7Yqj67yWcN8RLxKfnBrqmEzHvj99eLKF785mqHRfpPN5AZMAaUY65yjgTcL3haRetiDNTLPHrhd4PRus",
  "key5": "3XAE631WEAGCcmA8LxhujiVKXcscC7DFxFVQSAFz3nk5Sw8BUb6s6P5gwi66wqBf2rm1TKKP2PVMr88TJoTycAU4",
  "key6": "3B1co31JeULS1fTJkfqmXDCzxtLv4X7XdnqwNTAx18AQXY83HvCQGCzdkYJN9t5DFDxdYTKhamdS4MVUxHHLVHQX",
  "key7": "5q2S3YPvsA9QdNZNQANCvNMhPbuiZ1BvLjsnedojy2coay6VXDHLvDrLy372VBtpGhEsP1YQSCthAZAKXGyQJmAU",
  "key8": "2ssYxFGZs2pmdR7zjznucnwXL1u6cQPbkVs293ShA14474ZTQMHFReKpyhk1wngxTnaBmds6iqxzKPq111DUQNi8",
  "key9": "4qxFEfBYDB9EcH8WqopaTSsqMK6PVS4kpCAwNU4x5UUKjsJ9RiWQLTjeoy19RyxdsqpywbHJk68qmWUEBVHhST2r",
  "key10": "ZH3VcPNNgADFvFdPUZu715tmyzcrgUTekCcm3FpTU3SZyGDHsnQQL1svxqKJFwZftHGB9WujFPEmz2wUddCYeSj",
  "key11": "3o24UKVHpUZhesFubY2ED3W1Ps8hmm7e1rCKniovTfYoPEncr8LttnkjALFBKg8UCBqkZtNGZgwhbyjiLahRaZhY",
  "key12": "5rtpYtgTPESip7WP9drPFTKqifRJLGDGAFs7XQq2hLEyh82VwSHi1LQRU9yzTf9CbXTCk7z7LbfGCpzqio5f7LEH",
  "key13": "3XB6aGoECjN1BFgzvjm9yT6T3YMGJHU2P68Z1tBEU4yRq5CmJi1hF9Hn8SPSv9jJV6qLvtuN4sgYe7jmreeMn4nk",
  "key14": "5iCUXj2P6yEnmvqvsiotDPoRfkWhmUcJTPD1HEb34y4nXVt3Dtknn3pmAnYYYvZgyo8Mu8ymrdWgXC7AWku7upr1",
  "key15": "3ihEs5R5qEsJe92So3UY4141766JRJcQEuDpAYkzaFvQDHCwjXT51GeFD4JZgcVz9BHscvgeUFxUZAw3eNAy1Cqd",
  "key16": "s8KGwwou9QZ4gdVSRq7EXA1nj8ArCLqVD7wuNKE8R3hfuTAXku7Q4jukdEKxTvtXzETe93ZLTHkm6A3DArpV2u7",
  "key17": "1o3PJL4BFWYeqtfacasRJsSf7pofvtGzMn6y6DAm1fZgXz5pikL2JymWcsjeEKwRBj4zZtKEck3HZbmvRgEkLMZ",
  "key18": "2b2AmitvxMCnAXGYHgZ3bUf9JNwkGue6rYVp2d1Bdwt6BvsYBzmCi31J9Nbepx6asc5mvwjXV5T7AajhD9wCjjQd",
  "key19": "5geEYSoaGh4kzd1yEJS6x4gM49X5CzGzr7rBNxTSHKSz3pYPtP4VJnkxxpCKcsyRzQQbHzFbufWjEo2UdDuorkrM",
  "key20": "5y6DiuMqSgs8oJgp4WP9ZvkMsJKgeUma9RkZCPQ9B1SvFsQFqDH3omasMXqgCSwBa3jLhxdkjYBDnigNpxKf3WKn",
  "key21": "2KPhG7oizBxXtD2q5tj3PkXqGwgvi6KZfCdknrcKtFGm5p8erkdhZhs1arVHxjcf3zcP82bRpmmXYtqdzP3ByvmE",
  "key22": "5JzVWpLTQXCpAWKmhQvVsRDiDE8bzUytt53VHd8YcfyWXkCRfDm8KRqM7324nctmMsstMZBxH1vDyBdfc7qUXRh",
  "key23": "4GpbKqFP8a14ubUuRu7YW4v781X9FybXZBzjoLrQfwmXmfU6FHhStW7Gtwa1YkfM5ubSDbxtydS2Ci6GTpviM933",
  "key24": "Fod9de6GE7PwLqXobfAL7RUjWHTC2WKkn51nzNqo6tHN5GL69uKPtTVAfqFG7jSgZnxJX8q1b8mZ1RRPVSTP3Zv",
  "key25": "3AtVh1UNsJE4E8KXzCdhnSmCHeXAYtPJ9YkqdFa7aCzrub76jhC6iWmTjK4QKH5nqS5A4pWzGZ4GmX2BFwNV8Nta",
  "key26": "xAvmFLVbCr9wf2uC7Gc3E7zQN6EyiSmLnke65ys1RJMaSNYte7xDMQLesUfKhYBGQyNufpJ6N54dJafawdTgjQv",
  "key27": "52XrNd8xcZv1ZsLQsdbPXDvmoaZbAzAe9rcGiCnXaVScYzmryBagq2T36icgkfhitwevD9RY2Bz5feKS26danAG4",
  "key28": "4rVdnKr16Jna91BzYzki1ZSKzyw4dA6vSGBoLBPeYvTutafAkf4ij1ppkxPc3kZQRmsqMNWZ6HCtWrb8cMBJ481B",
  "key29": "fiikAZjt4q3jfWxYuiEndzmWWN6qPeDHzhNjyuK2yoiYGwpYNS9kQ3Mu1caSobsmKjXE7j8SGYZeYQLzFAote3H",
  "key30": "puLqcyCfap5Ensc565hpJmgLcnzRVSXmnVk5aN1QwTwmhrwhxGDjCWzKCxsbE66tDv7ZRVXQF7ap9eRgysRDizt"
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
