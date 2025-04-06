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
    "FeJku94DdyLLeZu2nXppXti3jEra9f8rHXXSuaMCLH2YkrodLM3vqTZ4HwAs4F7TWjo9upaGCmZPcYeZaZ21GKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nDJtRUySguttSSd1HS8s3npXKtjPW7SkTXa2Phjbwx8VeN7E3ocQPzEU8dSTTBaPGamrnxFZdYrZTXUoZvwNy4t",
  "key1": "5jRdNwRHA4PQSmC5cAX3BnWf2fN13ZaFYmKp94uoMbK7KdG6UMmtXNE5PXfGncFZRSTXNcGgpZt2HtTbPpbRAxZu",
  "key2": "5zsTZzKtsnF1yuTxu6CJsFYCS6EobyhZhZxC9MrtdTUczd9ftuiVef5Zh9GoDuB2fSSTChFvMmJGwVrrxj5MB658",
  "key3": "5uhpcjLeTnERupNQDKgHZFu4vgHoGSneDgjRpQNt8jWQWmAWjRJo2jTn8mUyx3BDkdRX7yygr51BFqwFXrs3h5vK",
  "key4": "3xSVEuYsu8bVecyFJJLxtgVKU4zi8skNUXZbW4KFD2KtH6K8AvrU34EmCXwmaHY1rDS7hGcVtUD7Ujd1y328CD2P",
  "key5": "4KhMCoN3tEJJ2m9CoxVD9Ls1RPaPFHnZQuyM8q5Wc4Vhq1hfCPYRTvhKBx6iemokvVQBASaetbTDBoajkJiTcVho",
  "key6": "4KvB5EzxfwD8uC4wVt272CAB72Gg57fM67xXV3nN2eykPQhi7kwuoYCNXmvwcyFGrYS32Sih8k5y7TDnsFGgNnnU",
  "key7": "3pZtoKdwP9hk4AEWLDNszyPXhpJNLZYasu6kQT1zoWwQZrkBEhVxnrCht7fBkhZtw9uYHoeB6px4HyuJyBVuSRt4",
  "key8": "58TM7PdXQGJ5GJQ83WySFvP77k83tfG9eqTQux76LZqFeTaq7KzXauPSA7ZXVT6YfrAQ6tQmEN6rV4RsHZsuQmR3",
  "key9": "4NfERZ3yQMYzSqWbCHR3HMnPu7n33FhQyHPbXb5KgNxcLhDBPDUqtWmzqGVHomGPWLsquP7B8EH1JTSZ465CEL2x",
  "key10": "4HNS7ms37XAWVg8PT2ZctZg1MYcAd7SaV2Mum6QneZBjHYMfdjC7pkcRzBACQJTUGY8D5oPzSTw544AGgwSRN9zS",
  "key11": "5ph1D3W8GTQsNgyhN3Q5FuvP7ignZH3ZJBSU9LQUz2yHCpAj8FkecU14RdLg5omD7TDcB74XmA7qRLjiqhHhFNCT",
  "key12": "5EdmC86kYAeNQF3zgGumsAb6BGWDVbc6m5AuT7h7xhVd2xrRkF1gC8MBgCUwwEag46Maj57qiqdfnLcJKcSwc3fj",
  "key13": "58tqHjkW61MAvPUpWzZ83xACcQQdteV5u6bo8U8VKeuv1ncUvbsWdLmBv96KaV2XF7ju6bsTkNkaebtB1a5fVgvD",
  "key14": "63vyvaXrsm3nzL1bhj8CHS4MsF2sN4XVSi4eVpF6Er5YGX5rQWuRxYhwdsdQCFZxy3oQzcaqU2tpnJ2bjw6GffY3",
  "key15": "W3yCkvXAhaHtJVTtwJfHrYDhCa1HCz7NHouU77FSamStbNhpPbbj6u7Um8dz2XsFcDdVGQXGBnB3xFTBXYzRgNp",
  "key16": "5eE3P3Nm551TBMM8FNaDoUYxG4bVSqq4JMRJZLzTBGnDfdyPgHtWNq6y6i7VeediFXoPEiwpdZnmqSsLQPXkpkgP",
  "key17": "3pc9R2cWuivXq2TW72C71CKRyQWiNzQDF9B4e1DUqyG31mQafWnGQJfV28TQkKYqWKecpweeojoMp4PmTBYkcetR",
  "key18": "4J9iWa8LjJkiiwVWfRPFdzYk6HrMNXh58gLpZmDRtr17XkJXuAqMHQwhRdV3xdKvGsqsCD9FUT1eCcNsNnbWxaEY",
  "key19": "2AbUxJUf9SBWH9Aoev11111QTS5BiY2xGc28pK1Usf321ALXNuvaLZ7AYRGAt9gmeyKjCytYo2Py4vavpSpsPWqz",
  "key20": "U8dfSXKSEFLmPXTUkEyU6Xj9vmpaLuPZvoWuL1X2DGygvtLLpDMcjB69pKxa6ojFAXKGpuX8hDBRy2mBaedTUnS",
  "key21": "5WFia6sNSRKoGNLSU9YCzB4dVXZ4v5fA1b1P11kEbvvsjRMEKpjDX363odogqxgEDf4ouK6SLLVq2giRJpmBVPH3",
  "key22": "yDF67qGn9ZEuxrh3VXAQ7vPYJE6qhMJcnQcVSWRxpXWPgzj5G3BCa1tTgakmpqMsDR3bu19ixYemQiXR3ePXrsL",
  "key23": "4gcKB7oShWVAHtyMhHQHrzbKruwaxVt5vSr7kqNhHyYZL1LTZa7z8qfLB9PHVY3hgeUnK8hgTELaC8ZYyBsJBK34",
  "key24": "2USzTc7e4THyyXYp1L9sGiqZ6dRTw6AkrSBBcURE3SpAXg4g9fKevGEhL5iKHfwD3e98qAQLMLPyfBJ55Usa6fZo",
  "key25": "4BAYaf3V3R5SNaKw6NLt48xhrWAzDJHexZmTzjniQSYo5jkxW8zZ6PHcgsT74FdwHUywTsybXubrTk7BP4BaHXPd",
  "key26": "5wCvgDMLek7zWybnGKMjNroNM14ab5xjXV7TSQoV5Z5fEGixJaMTfwmMvRGvJ2y8bnoKEtyoY4JQrAaV4QU2Fp6n",
  "key27": "2hJK3GGLJLcv7Twwy9uZ61qLsdBoTvVcV615NL7uwGKEr9xF9QsfovJjSnvYutmdsFGiJQL4sxwztqpGfM25jcZi",
  "key28": "415Bauqq4urHYssTLdeMSCqWs8Ai17wXnSgiyNfnoFpHetqU2wWZ7gj9j2HN3kC76hXGNqhBcfkASHkQpQ7VD72G",
  "key29": "4YAhzC7xi1kWCHumpPvp3QFjDC7HYfZGV1Z8sjS7yQB6aNqxEUrqEon2XQiBbMFqsroPnqyAJGSHAkb7bfgKyKAS",
  "key30": "4JXJsE9weKNRYRNfxdo4bZmp8ez3bofNWuzioiXnCivzaqyn7q2k7qirNn6NTXu8AND2PXDeVkAy1H58kpAoM54k",
  "key31": "4nXi1oJse2Vey33e9HxDcm3matP8g6SWSEmsgmB4TLXKyskhz2qTGWoSSrCxKfCimEfXgGe7qAhBJ26Gv3y5c7Ui",
  "key32": "2giSVkkDPXEvZHMJFVk8bUzwJDTaD5HTDTVkxnmq7HNZe9NQZtW34XFBmfUUZArqo2Fw3sMmAhohi8XX65N2isB8",
  "key33": "xFQdqwS2YTNpnJtQK6wkUYMS1eP9jfFnSdLvRUGtzQjW3EhzrGWuBoadbfGPDKV4d4HvzduWSMM7hr66mnrTMMa"
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
