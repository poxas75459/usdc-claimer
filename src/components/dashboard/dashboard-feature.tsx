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
    "3vwXgsumbp7tDBPT6wfVkkPjCcgJgE82oxctaEunJED78WeS4mcqpWMJEh57vAdDoX3nsqSvbc8ZDzEgaFAwZ7Gx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MLUMnbU9M4zysb1GQNW1h1QeKd9qebdNhCUnm2XcHpnDvCArpLrYbXH1b6YhpTqcMSh9waJ3Qv3SDUk569ehaNR",
  "key1": "29damSBC7aDySiZ3NTCfMEfzFxTpof5tca64SNzcqm48WpAXPzTyYV1HZB2rF8DfQKqxvsVG6bT55WhiB8mEE9zX",
  "key2": "28gCvi72AdvZSUH5VrJ4kGPRBXrd5pNyJ51wyLfXkJt26AQrxooVmLFPvSc7RMGEokSb5JtoqucWnyrVhGk4PPvz",
  "key3": "2LdZAfy2fXDG1TVXwephANB3YeGw657KmbWDcYJDXHDwxNBWZCWhnqTCVEWcf6VacU97gzBeFE3ddnrZd6y7y2Fm",
  "key4": "4iHqmtPXxxPazi3ecSt3Gu5UbBdQ89nWYiA87XGSDnfJBPS8SFhPtZQjFBpV5AwNr5F898LvwuJjKthfZ8Pq9aDj",
  "key5": "4nwvgrDZEnvvcxfXthGcjnLCn9ZS3nFSTHxbxTUPsKxbNr4jQDSrEtFjHQ6GTFDuu1BJPqAL5TVuBNfsbNbNnrrn",
  "key6": "5jRKDK2BvUpK1RcJ7SbJwinLZDZv6PW3yxpHMedLFRxNtcy7JsYYiCyyFgiDokqEGdcXez1qSkNaYirFdFgKRBkB",
  "key7": "2KwiwVe4D89HSgCYxbXmf9uVe9VE2Ff5Nmf89kTk8Jahdag4Umz34SmdBNHuXrUFLTMeFxkCGGNaRSbhZFgqowzu",
  "key8": "441MSuxnRgPDzn5TAxQRsMzXo9ZmCEKfn2i4DpZetdeeq4fMT8XJ2H6ajVK7vrduhSkkUYF2sKV4AiXXXQei2P96",
  "key9": "8FzQF7EdpnmwTGJ1jU2ySJEN3GLKXhWroELixtDj8RAcDdErMJxu4DikpBEnBiD6EhhZUn2o7d7tPxV2GAHLxq6",
  "key10": "5uX9vNFscD8WVAAnb5JH92TwsAbnTy1r5svh2qojuLeeNAiTjv5faTmi9usaCLrhX3AXRdGJ3i6B97CRrVpJFWXh",
  "key11": "5PuDkQ5DCB2X5nReNcu64vXXnusxmRPv49HnkUgZqtRn5LFd7TDymTgbe4AkFkHdmFsV47gHX4kJyir2RuhaqPvj",
  "key12": "2rtaVT557AQ6jY2hv8yFMVVMr4Hz1m8Vj5kWc46D432uZR55U5w8ihTpuAqTZPGf6xhtd3CF3PU6D1aZ1PmR1jX7",
  "key13": "2dDixSRaBkt7GtU7pZnRLHtMjV8Wmq6nyZywMsvM9srEJUyuQRXH5Uusg1kLsWbR3qP8Fp2U6ksmjwuWe47YbCgM",
  "key14": "5UgwYKjqjZm1ii4g33L1CWdU8Y8HusQtVBbxjzAYx7pLLCXJ9pYNX7GqB9pnnoCJFLtdqHUCV26V6tN7RPC8vJ4j",
  "key15": "4sqHhBkLjhkcYqF5ZzKfymp1cZCMMnB3dQCEoWGLqkwZ5Ay7LYxEiWtPH95TineTngve3bABrL6RCUgQtLwJAkUR",
  "key16": "xC4x6MTFMJUBzHyRjnU2YJBTtGryaSPQqrViSfnfLRJmeAUiC7CxEJYSHpaukdPwnYhiMwaRkt6M2Y3uYBAToN1",
  "key17": "27ZsS8QtrzTUBNboRjA6rtDKZx4TAsmQ1PeGBDuxbfeS3q1SoutL5ewiDA7uoY5otegiBaUEoTBY8is56G3nNaQE",
  "key18": "42jnBMg77MA1ycx4B4Fi1PLPyib9FP4RSCZY51Niw3THeXuhjRguHoAA1jLzrbuarPFebyopxemB5k1xHgqhv92D",
  "key19": "e3u3m7g47qV6yykBnHQywgnEek8d25Y2hf51bCceJDKFfqK32x7cFaQjhfV68jaCZo3YQUpMXJjY3ctit3DkQwz",
  "key20": "24y3GMLdYLmQwEmUXndJj6fb1HwZhHeASoXcJjYuDqvK9rMM6Ge4BBvkJJqz4e7EgnEnimUDaUxHJMgWYQL4Deja",
  "key21": "56YgjN8JU4SJBquHhwtVDfS8NjLXjr5sZ42FvVuARktEybX9PLmVXsj5sRxUuxjfGzRzdP5e6kZDc4hWxLuQSCLr",
  "key22": "cJbHJpsP6KWCWJMBR4K86XxtVYEgJM8cABAcEJCpzAAHSXXjKEq3QKKw6sKzdc1SiXVJgCiiUY8ZXDdiBXt6NcZ",
  "key23": "5qmBCaBaRghXRUJ1iLmGkWXYvnkiN8zP5JBogVocZ6gEr8CXFf9NjTeXLL1qRz9zokaFyryuocyTtRQ6aJV29BWj",
  "key24": "24dBjLgvENynT6yE2KskxRjWcvwagsQHXmiEuy4HX6BAwfDCbcFrv7d6VnRg79YyDqCNJSoVVfzBDxWa7eDs98V4",
  "key25": "2DfX6wZPnzcnYTYkb1pcbXqzT7pgKoNfPtZvKuGqhh2v15g4KFY7vyUKLdNCwGLu9G6pKjc5QiK6hk28VQATsn1g",
  "key26": "a5Qic821MbrgzJYaaeQNvB7p2twkvaPDQTgehkRDQpZdfJYTrDMtpdMs2aVzxi4SQTuDiPSo884hXKNsaMqNBuc",
  "key27": "5dmxygXqC9mDxMNUZsUU7o51jGavzWwoXdGFxZb8SigXoQDdqXWDY1h6A6i7cSDaFH1Jfq1cS3jrXT69FrWY7GSx",
  "key28": "2Mon6b7K8zYJA2U1jD6DXKsYQHx3vREGMfBbb6PmJbfdyrjqBMzj93WWACWNRgtwGXsMnZ81divwQPh4h33SJMdq",
  "key29": "5kiKVJC822QsDBzop9UWVxSvbhDnJpjP2RP47YN8EhN3ByzE9bnFBGeej2vhe5RiT2ddUm52XEi4w2MGCMQ4ashq",
  "key30": "5noSBt9KgmsXnKzq98AJW5NHiqUcPWLZF6Gmh5DCuQmjJSSFn5aa6j9UnwEvA9jKDGaKvxTMk5LBvKDAE75L1rrn",
  "key31": "5Lwe24h28b5sEpwgBcn8TezyjS4wVzYKnYQBwwtYj3w1AcgoATTCLipVsY7AXF5CRNPdnsjbVHdHAZiLQpyvATaA",
  "key32": "2Ri7PWwz6U9CaeR9wUJjvzB5jeSTKEZYtLuARUUXZFE9Mrms9fKeV8yQnwH9mGQyYTC4DG7DAFFTbytEYVoyDJHJ",
  "key33": "4WHyJ5AHRxc3veZjrrKCkH5cn7hr5qSiHqega3HM9JxDxHyWrjDYdsmXzKzx4nZHRBgwNfRdi7zg5RbsTywCpEi8",
  "key34": "2PnwLd83zeE6a6CbtdugZywmRXki9TryTogaaNNPmQxpZxeZarKLWe6ffVpMN1F9gXud8UMWCbTm4gLYWcRQdyYk"
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
