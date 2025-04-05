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
    "35uEcJed139EhroSm18hXL4pPZpb6uj3VtSuXV7f5VhuNJaYjP7jhtgr4QFKkXsSb1k2Nf5WTDgog6VbEMNhJ5sP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8zKV7NJ1WqQNNQnRYLDgfR285MfWaxLN9iVZ3etE1VMKbXfj49k3BZSPrLbgA4EipokJddvAfhWyJzRDXjxZBNa",
  "key1": "oQe6RGijCGaNeTJXbVQdPCjcG5vzPfVPufF86iXyEbkNmSfPc7Ytgzsv7YvKCAHLSJQAAGo9SAst9rLMB5Eg67o",
  "key2": "62JsfunZ3rRvg3ZkzGrm76RUvUTH2omUjzPVU6maJ97trBmvFYZZn2scBuEhvydAy11orPTuaPkj3841tnNdVRwZ",
  "key3": "3LoTtfqhNUJ8zor4jrHRWtooD4LoGgjKa3p3wcfUkMSNqNu4mYumw4BgQjp6jed4tHgoE9FQ9LL7gsbTfUK8i9qv",
  "key4": "5NB7j8CRDHMdDTvE6FomG38QbYoh3m8ZKxfDLVWLJTXyqWm1rrV2RQBg3MXiZ6XCreNJWMGy5irkpmMWeVMjJN94",
  "key5": "2c8tt4bYvBs9R1DnzLhCsP5iSFTK46mqPuwATr2aKC4A3zfD133JADAjbrZXUX3Z9oNu5sZPbQbT7iB8yqQYrfs4",
  "key6": "4rB6fVquXQAEH5W7Lbheszb9aJaKgTusAN4JJrYFi9jmnt6wiv81MfbvpHWwvBLTXy2CjmjiHak8cA7gBDXr6AK9",
  "key7": "5QckDTSAgVhNqfoq7r28DTY6mAB5STwgdJCxMzXvVvfMN6EToob7xLQc6utQHtkG8kidoYRp7EvuPQq9ZCvmJe6h",
  "key8": "5mMwByifphjkXvbquxbB7ddTr9SQ4fv58j47RagkJ44WkXJcpcYYQmtdEQqihy1msjaEbD8zT11JMQz6Fn5zAVZN",
  "key9": "2moCjDhYja9jusU6LZUabRVbabQE4NPwBK8ZaUvtpejKTBh4kNVFhfaGDQCZbCRqV4sbBJuG2BLw3P22cw446s6b",
  "key10": "6XiTW5Ssip7pqVnW23JEwQZqYtfmexM6Tma8XHd9un2Xnew57siMPrK8k4YY3ZiknUUAQpFq6gURnyHgNwvPCZj",
  "key11": "4kZpBbpA8nWDzhRiNe9qqSnEriRZsATA2r8hnSD62pXE7MsWtHWUpBqeXAWXKEg5FuvMAcLeR4PnthMojgxQvEnV",
  "key12": "4hGKermtBfGvPezkEMBQR5DHJ8f5JD7Z6QYRguKKdnamTPJF7aTdPPgssGo431e8V9sEbxet2R7H7oPaxwTeX3ih",
  "key13": "4rJ2Bnxa4wSbeaeb9EsW9x19PYXhjJ6qfiDjq3ekED9vr6Xf2WCyNUjo5KEAbP3MLcTWVirJuC71f18YE57LUm3K",
  "key14": "4E4CNyiG9w8BruBWU3zQLgDVrKE41AtktkNsuY4KZT1GaLtHvjXLASxJmGjy7dzhzfDsQDAynV7nTgvp1TdP482N",
  "key15": "44oAtx8LoaupD8xAPTcjC8TQt6qeK8LbBZv4Vbq2QKJh1hMyptenGtZFeBCqZrY9it93owGWtEvRL5HXij8n4E3H",
  "key16": "5hb96dE4FvVpKx7KTzMpGLrgfzBxTFFXWShKwomCFqGYxKVvKRdh1WKuCd4R1v6wP1cFunB5w1M4wnjAbhz3As1K",
  "key17": "C8EGaGAMBnwNqyZFwfLBT1HzRbmLyVEpXb6iCiHLgF7Xm145JDQ19WcHBDXL6rc15qLdmEcFPGKpBxy5kuo5tVt",
  "key18": "4vwbWzFMocJHkpUdaaiWkkfL2NdHgWwAjcBW9dd2U5sMeBvSPr2EGHQ9fdHfa6SbSfnWnTftgnMy8DD2FtpFiVXR",
  "key19": "77iUhCaNsE8aPfRNAVNp5NGPQ2WEgeeWjAdjki8U3iKCPvKuzE8tSgMZALJAsFgYzdrHLrGDMNqwFdc91qXHsdv",
  "key20": "3oc8v8ZCnqBLNQSrfTxCXWPvs5X5QJQqgXgJfeaW9GFxadWdsPzvGjff52eb6MrPqmEPjAJU2oVeUgBoRj9CRqoS",
  "key21": "5KjGrbhJLfnxJuJFycos8GLV9edH4o2TFbU45sn8PnoqJqXBbmrnXwdCN31fCo1Y8NMCrcmEaQudbNnwDrKxa7kq",
  "key22": "cUDgweWpMwjegh8Gmc62ANn9s74BeArrsQVmJer1kgno4SonpgJvvfZ7waCqjdD7YQC7fTobTHcUzMARNbfx6sG",
  "key23": "2qhrJhRTkCQ3R7iJ7UCCB4EymUYwj6vMwUYT4dv38SS9AK39W2k8XZAq1kN2nLp1ig2HW9ovKQ76kC6FRkT2DH5j",
  "key24": "4k2bSpXgmstk9JHr3VtC4BtiuntE4bx7aQUvBysBtwk26UemGGZ8wDVenDTJrnBisgniofVggKnX8zwMaxoDngou",
  "key25": "4MG8HzQoN5pQZNfjZufRsn5v9cqSBRWiVgsJfNPBu5mdAYNi98eNBMa4xAUMmsueBaTXXYtyZJYMrfdRix1kVGjk",
  "key26": "8nw4DVTW5ZCn9cyPh9S6mipJGqDErPkte5x4KWj1YDevNgTSfhAoRQCArzvWNwRLCeKtHfgE3YkDAsNG34Bqxy1",
  "key27": "677cmbgwjjcnHvnPTnGNesPUz3XoMED9p1hi985SR2cpYUjwqT4ntpDLcq44Zio31b7E4DJz9s3sua769kKWKPVf",
  "key28": "2WeDYGEJtRTadPJXFmtXvM9tbLvLjACXnZo1DhKSv2ffyWRXBT9uhjzH1CQYFd6CLnT6P5RxwiqvPQQEkBe7Ubpc",
  "key29": "2YpVti2c44RH27YNt6RsT9R3uTNcmr5P2T7EQY8VsBM4wKQFhY9qkout12kKpn4c5yQxZxwqfvR3q3uBa1YPEhKa"
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
