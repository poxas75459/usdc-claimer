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
    "2xNYgmaB6ctvNoxy9RL393CwKG21yxbYRt5WVFRvn7uMzFW6dWFwzPo3ujUB3ccvztkGKzPVmcaumF6571zZ8Z7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pQyzTdyXrymqee8Hd2zNm7ADGJfBZgyk4bXoHp8iTPstYxjj7qtjrTz1ZiTHL1QScwcArvWn5489RzvMELRq47F",
  "key1": "2wAehr64kLerWUyd4uhHfS3QUxV5eZ8W9F7JoUUv43o1nWf8TVLS8YhWtjHA4rsfbdPGPVJgu83sq1acQ7Pq4USc",
  "key2": "5w9m3C764MKZ7sy9ZgdKsCQRj62KkxAo9aho8h7ngitiSUEhg5a5XkhCJWzJyy552QkU5aEKScRTkXqaCQ2ZbQBL",
  "key3": "5FQCj5xsNzGwg2oPdh8mJeqmodWJL82L9yopgaTvTtkZdZU1jXBazefERQKT9FfKup1WJ9LLLJmPQyRM7jLTyXdF",
  "key4": "34njuiRuuDwoXHvjXKF7j1yy3WdWMuBbk6oEymWw4Qi3hDACXXmvFFv9hKJ6gTmnjCZkVNTJG6pMynKhDAeAXiqt",
  "key5": "UpenixiafwnmbW3zuzXwq4bGguXNwnSseQKA6fkXPcxoqwQjFkiC7rBshNfHxf5mAsM2dgPxREwbU3qtFofjkYG",
  "key6": "2tZpsgQGuKbaB8i8NmaVA7vgLqCjVcSDi9sUrCWoNquow9thiCFHTHF8GVEaei3FKnhc5kui2VCW6BjURTUWjLQy",
  "key7": "62YBofPkPU1feYW38QB1wQXMkaVcy9BS1fguNZkBJz8kjJR4xcM7GQPEuX9ab3g4VzwePo8USSneMq8m1bV2Eai3",
  "key8": "2fB5jkVLyu2i2Q882M9XCATK8naYCDKtPh7DX49PoE2qXUqpoExRhUFfhfgXD1rSnhgRRRGRrotnKQGS22rTvDLY",
  "key9": "26SjZUJ2Wmo8xwtfP1DWXno9a2pKZaJMDj3NJKcWRH3hKfdJbs6ttWJET6zjTWYqQqUUhY8SQmRf5Ne2C21bnxWM",
  "key10": "tMyuEVq1UTeoi1zRPfNwNHmyxCK292o9SZwDdFRBc346F561Nbcnwc9Pmq59gfs8g9C6wQ78XH8uMFVmgydhkef",
  "key11": "2Fy1Bf9m3Vz3ETHEnUkgnJo1HuLXpDj7UoXkLALXNaY7f6iinwvk71HjQjxkuTVin8hRvT8UfVjAv4Bbk4EyL1sC",
  "key12": "3LyQ4F1Pcs9bgFD5xb2ztdkNm9tKRwbW8wE8QMejbmXUDvoRLQYEjKsE2Gysmao81zmYopPStw9U5m8YvGdGJist",
  "key13": "5R19xie8J9NSWuQq8un6nGfudRdEbqGZr4uWAFnqnE4Sz3eiRoPLTe7zEnfW5xALbwK6QYb2vjk1VpiB14dvsxyz",
  "key14": "2CQ5FsWLdj7juc8DWBvshJGtQUCNKLx1zWTj8yfSnH52BerN5pS2zRMXx5hRJbjDU9QmxwpnTBE7cRuiq5ZsRvVw",
  "key15": "5vgizcQ8CpzPuSqXnezKP3oyJQDKt3aAqoNmGcgZzhFKFNTWQUPw8LRw4LWspr5MF6zdfgJjXb7jsXGrai6rXPZj",
  "key16": "4uNgKrooCXGFKUaLPdwNZxYNH5Ra46n449ZerhE57jomt4LxyKA4UakwwAtupzTJnAx12W9EQE4mdA62QVPwDL35",
  "key17": "EfcVXeTPZzXfhsKcXevNBsBZwnWTZfevx8EDhPouvSBBCHagnKzJCWuxfr9gL3hEN349AgkYfsAg6vwbwzkqgte",
  "key18": "3HGMS97ZFBSgK2Pt1D2gT2k8UFE3Yw3ZMZsrQqwJYtPEztjucExArM9JMyNVMQCCzh3qCrAe6AyqJEQVBGCjpDXi",
  "key19": "4NAJbYhk4up51rESPsyFdcYp1DcC3Jj3DYV8rTyEXn1q4yxayfJqMoPvALCU1RCTUP7DgRLzkgPw6oKiRdnn1Snb",
  "key20": "3KA7v3ugiEB4Lkpe1QA8gHvM3bicgDAHXKdCtAFfzGD6PU1PTt1MVGJUR3pRh5uMwizrCMemJFjr6fnHAifFj9ck",
  "key21": "QQaSwKma3dwjKZQ2FvWLygrYrdBpUWZ1zAZBfjNELeCLzNt7B625NaqPAtFkSY9ACmziEzvy2J9BChNvXpaHvMj",
  "key22": "ffVm8D9eUZv2JnXpDZcgxQ23vAQ88EAHsWtFWKwKUnKhDNmpnYHwHZjTVfoEbeHMW49VU4LZq7b7CdksmeZznjm",
  "key23": "4AxuABJMhKVxLa2f1QNUqoMY86G99cQTFR9qc7TAzqZFe8tzNKmixpqojiZA6k91i5jFmokJWEQxNsci6M2dZUy5",
  "key24": "3V911HDMKLnnddLUCngtbpNVUrUpPgY5J181tgwGKb5W65QGfMFhZt8R1p16hSU4rHWwwEyAh6JEyqBxDyyGkAmH",
  "key25": "mUtcagiktehySa3mF6WFQBcvpXxwHKvFzQ1CkDyjwucTFbNn7B2SE6EaaomhtCqVg8mREBztP5h93FPXFnZCLXG",
  "key26": "4wnt1MgfQeDwvDkKcTyB13WBj6nmr4BHuZw5ygAryMBWwkBiasBSHuXu9W5XwtV2Pbv9Mc4poDrWR5kX3x7i9L9s",
  "key27": "55mKKy3kzdQ475GCwfiM1P4RXEEjmWpi6HaWwjCx3JZ8wsS9NmuzUTGx7TiGUiBVgtfXZkWoCf3tuZwRxELLxZ8X",
  "key28": "64CydonPfES4YeNU9X5nSZhyqGU5PV9HT24NaimaoSB2mEa5Uopj8uiPmKNNXvNSiTdCpNZvkXJhaAjNa1dCpZt8"
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
