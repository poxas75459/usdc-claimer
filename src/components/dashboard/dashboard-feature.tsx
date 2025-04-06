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
    "4B2Wt8191BbNxheCeehJhXvzCbUW6zga3Ukuatu7gdAJv9tp6aHTVKvZaLpxNELWtuvRyAbXrzx27LZ5zEm7Fuw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WMAKAMbXaMeP9kwoseohWC9ecDqpjcZ4xqtnHm4mCcqyPba7QwSys1ERCAJ1kwquVbPmPmfRVBVUfWZkfr6M5NB",
  "key1": "2VE7eCu1bCPUZ9nsMftFhXbEXDp99th2vW1ktQuqyTG2656RakGvUc4dVhhFn8qrd4hSNZQ8E5Q2EZgZSM75r8j4",
  "key2": "4swovP7VzjtocJNDgEnsoW6dDSJ9gRSeUAKNdRMSHWCQt2bjQrnC57xyjGJja95ZiswuoecQotuDtQ85zRX1s5ZG",
  "key3": "5NjvmFSLCD5pzSj9dg5oiTSWfAtxBD6ccfHzdxnBpekrEU6DCNhSia2GxDyUNKJGg2ZyhJcnW4p9LQFiXrGYnEdM",
  "key4": "48qrFHGdGxnHd6q5tAtn8yEFzbv3zUqeVBjxK23LpNruVn9tms2T2K7dtCMpkQUXK9koB1tUxz4XQCqPzU2BjF2A",
  "key5": "4W7btMmo8CmBziZppCaNfYifk297JwThaF97dSSVtEXt93iV6AkrQyEWLokuUSswsn2fQvvN6JAaqLuC233mFfkx",
  "key6": "bF2A5GeLNm1DVWqSzkXGCpfMRg9UbBYWFBqoAfEiHn2sMbifXuHYp3NQamy7L9HHFZfPYvTTqmUEt1zumtnEadx",
  "key7": "3mYPhwRemEc5SpUGNeivPgAKq25B1VeVi6ER9Rq219xxVHTuwKixfoonYGWZtrzTbWiUEHLBCL95DVLsSwYN3qrh",
  "key8": "4LPCpAKzmxgmZ4MnnB5LyLXguqq8gEoFkmHUD4kdpDgHviGiXV3o1BfQskBH7ApLnkSAG4kuXxdhDjnf8kh3cFav",
  "key9": "5GzmzZGd3mpf5ifgNDtemNRkwi7qd4i8WzaXyrJ3Y47WqapCJuttPXrckoWLzTTCaUrnnB2JiiJ7BPaTPZfVZjui",
  "key10": "5pyx3E4B29wAUw8YbfD2JJ6zTM7iq9tZ4uGf7oq5ZxTqmGx4BGYUM3FiG9WKihTZZ2YGQS8YCPa7x5m9t5fjywrY",
  "key11": "5MZ1Aaq9cvSUWkTnWiHfzmdLfS9ZdHYAE1a9nTEegF3rb9TZxJJY5ccpxGDAqEU8wT7jyMFRs3FugbNBmwwjBXfL",
  "key12": "2qWnAbyYMWuwKVpuwtGpPmi4QGuaKe3tA7Ezw6qs3xKLMBvP6NCqsrh6qqApjTVQbeuk1Zc5anrsAZ7yzXjRC1m3",
  "key13": "269w2gqzX7gG4ZRwzMKwysqn7Run2ngv6VGDKNJU2xvmpBApt9ccBBF2WAMDTNvNecjNY2Qtf4CsKRFHTPqJzRxj",
  "key14": "3vm8beqJx2HYLFvcVz8PiXB7w13RsBZSGB65fTqNCwLQx9rkh47HPhrrLtMbnVZnmAiVizYHoD7u3R7WTd5SYXuM",
  "key15": "5kpD8QqEKgDvmDf6HdfDKPw7e7ULuJpJ8aXno3QRpFYffA2ZtCBALVgh9WWQcxD5Cp3uU6bn9ddWi6YrcxWcJ5Bt",
  "key16": "3MmQVrKGAs59FxLwKFsWw6ZyZt8eKhtx1CHjBCLM7PsuPbtQErauCEvf6VKhfYJVU9zQp2y7HEaYTkmpH8sEqS4y",
  "key17": "3cuq5d7WSrRUWou6TeWf3WV7WWB1d73TqMfPWNQKiGucXxh96usQDuQE9KsoAVhw9YnePhUyQeKvaRrXsWuFA4Jj",
  "key18": "VWgA9CeZfkUx3fE1WY7j8XUCr7tW9WBR4Cxg9WjR2zW2c3abDrt8k75TZ1B59gejuVFZuWcnaH9H2h27HgZbL3y",
  "key19": "2dXgBmG4faVDTzBcyK1aDMzvRdfdTrfJhWgX6eM4jXXoMtxy4ZJJyxDMYzYHtSJqL3hhXkptpTb6RPfzmPMRo5Nu",
  "key20": "5U4omxdmwYbfKdnsWkNWE3ZL9FuiuvCG1KTbxauygtg9d4LpU2yqjQc1dc9uDzKpabmncEudJBs3aXC2GS6uRfBz",
  "key21": "5uFMVwbYuLMRHHngvpBnhshxJgfD4z9cWC24CUoTSTdYXA6jAvaW9vMusL5mFu7oEP9qodJ6UUVC9j16pGPmXUF9",
  "key22": "3QEgfTj14eLrxyfU8XEQUi2yCpdxk3teFrh9icuCNFetTYzESb7e1fKkUra5y8skAurrHcXLvcg7Pbg6rVKMVcqE",
  "key23": "3E7DhBF5jP9ovo9EFFKvx1kvx1ZGxTUEG1Qk2Pa8nDGQs3snbd1TJWigw2D3d2ce42YB1X5QeBsVv9EyEmdHTSTF",
  "key24": "5BnWtPnQWogSsddCsnAKQA97Jyh3iQ5xwwWbFTm6Dop96ZJN6yWr6u7Jg4he6yYpTAit1xCvSZs1zt7rXwPxP7Rk",
  "key25": "36reUrpfbs6FnS8JHy4Fsqo5pzraG8wASQzKsKANQeis5CRmqx4bmGrcXLMJvTVjKwaTb9rFRvVRLn6PQsEV3zLQ",
  "key26": "3oeaviMncfSFdoRakYKZ4R2LYYsL6qcDpUKAJSnGpPrwj4sKbNNjZxudHBpjMuzKwR6CohDmp87CNem5fH4pM5pX"
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
