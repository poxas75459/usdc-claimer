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
    "5TQHECD2aG5ajvivxj3HazVKQaunmTHiWshe9Ur6C84STzoDCEoyQMh5NWWqHURSkBREerk71GVYj6hfKmHv3hb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Gd3yCdpTCS8Rhyj3qfVZhsKBbB1CvBvtoEPF1cR2M4QZZYtu5XTFTYJMJ1VxEqqrGsWpknyUdfVCiGCa6zrGJR",
  "key1": "3gQp72HhrvGR4Ye7ykqdiMaby2MtfDyN9KTMWgxaWYrTpjdiqQzSTqSWkV6cCUt3A2n85MnFooUHFLcN3kdVm1bf",
  "key2": "4oxko3T6xfA8VD6YaCbqK2z75kZ3L38V2zKhffPJPtKYe7v6AivjknNSPwnkb69zyYrXatz1FLdpV2DXaPfjUcjR",
  "key3": "4HRVM3Fbyf8dGfDsUhSp8VBJBU9p5xeQNwyDrNJwjm6ocLSTt4ToBeqVRKyJGsKYo9hFp7NknUTkgnPKZFNjTmTB",
  "key4": "3bWX85RBEJ77QV69L2DQh3Xi1yqWj8MqA9vqmkHui9aUNsfJTdPVh8UafThU5oZwS4yeNSg7E7pWeSpGt5tqg7z",
  "key5": "jqRAYADXg8m3Z6N63SpCPmNb97ySgmrzjd7tTyACimirXGg4SxQxqsaDHXsFwZM1tawHijumLGnLHzcMywKCDQE",
  "key6": "31WduWsLGGWvYDnfcDjVcEBjCrYnTcMU9GGmgqtvWs2STUNYdqbmTVdLnUMWd9joq5YmX1GRKwcrNLkHMggwyyxu",
  "key7": "FoEKLmcJUXjfknrYTb2rZwWphqeknugYebSHvykmGtzgnsXYfKBzdvm54GoHZt9vkomPgG8S3NMa4Pg6pEhzyQT",
  "key8": "Pxcppne9rvCpFW3zP2oWUsyQUVgu366ZDGgTgSJHBrEGnGUn5U6eEDYpTRRRBY16Bv8EvCNuDMGtsGKDiPZrnbo",
  "key9": "3R1hnwiDDysvYL4Q7oKMj8mBNMxuVeY8dWxkg3uKSpzcLMtB4uCZYsG6gNosBDxtRBUE7wxoDLwarMpXyro3sJJy",
  "key10": "Sd3mDC9LvHuAytssHBhmzdRZpHweHe16wXLbHxJmAQ9vh6t1EcegXXeBYC8XLXfcVhzUG8QjqEUuVUshxZrL6Rc",
  "key11": "4ynkfuHhrtsNvnx5RvkJ4TKHtGzUUzzxGxnAcXQMvZRC916wZkAdu1iwRqkbLoYQ6179n4zz2tbYFw5Z7HzinKqb",
  "key12": "4YrYJFLwFsMEEC4iAHBqTdDQRTExqrpcv7yUyu3k2TyYWAGEGvtJ1y39NtJmWbiAGkpEjL8EcZ7ia7fzGeyxHEJR",
  "key13": "4R54EoxyWeCGd7BSssG31DFQnHGD5m451ohRnuHsVoCknVBwpT8DZV4nyqEgBFtXA4iYHK1G89RYnzdJ12C6F3mb",
  "key14": "2PWgNuk1XhCndLKuZvSHJq8mWrZpyZgUK5x7LpwvweCCMh1TPTUU2fhcUGLnZMr9yFCsxviELC7tnNG2pVu7LWYB",
  "key15": "V1DceTJePiCUbHnCLseeKGueprsBCwLrHDqaAWkw3k53CSptpopJB82sZkoqzRXz8MxzejtyVKd8L5ZuvNB5WGH",
  "key16": "4ubADzxxv8WGDPfF3kYQEKVVt47WcNDny99Kaf3VbbB6FCY5gcdpWCrzw8Zs5Vu3hGHH2PdqgLfqSGSpxpa4xdeE",
  "key17": "4K4XMfR3AXrJChNskJ3nzQZpszn7LAM8NJNq6DPHH1QAgFd83VtPUzSf37NQHP55t2XVMLTkP6bTuqP5sj6Nz8rb",
  "key18": "27xE5w4YiwyaGXazsrDzw9n8pQeVjgpfmu3SgUKCDB9oyNoh1NjRW4qYu9UN7n9FRS5TDeSNsJphsefvEKgNwuhw",
  "key19": "5h2kzohgbQhxkiofDKwTbsXiyRTU58DYqhGky8pDNa7XyUeDy35jhUn8CADq7pEacawznNApfpSwgQiL5PqiP7P5",
  "key20": "BQuq3XpdmECRKvwTGy6ZiwPiue55NB9DhngRDYkcgfg9iaZLNdz9w9HDdBFkb3v3mYrob8ZT5X5oN4vLYjrD6cx",
  "key21": "3ktck9PzMm7vLuYFSWgsv49X3caC6aSCk9MGgkfEUGkTTvLm2F8eK9d229kUQvCuo52WhKFwtyu48cSNui2XBC1L",
  "key22": "kkQmtsCjf7LoFMhV1VpgBH8AxtvSjDzYN8Z3kNNpKehSmh1dCUearBzRbjjGcFDtLzwYRm8TuzMcxpu3KtiBqZe",
  "key23": "khYwvjViTG614fkUqbSLNFwsXnqRXyKSpxiRs5jvNay7s4Jp1t9oRNmgFoGEw5B8613x9j26uBFMujMDzCdDNrw",
  "key24": "3QgvMEPdQTrTsyoKXnMwhUWvNnztvCYu69wcCuQbETa3KcCkYfaK9CfeAxWwHCWiyzSQb9BPaYSZCwxUsiaWCM6Q",
  "key25": "eet11ZDay9CkfWxErG6AppYSYq2fEzvERpjwMLRdEnoPpu4qTV8MSf4BDmc2cXGToYJRPLTkPFv91NSdCtMf9Dp",
  "key26": "5HDSRT2PD8BXXhmiKxWgMKyrfojpYqTyQR9mW8dvKmgWopRuSX5trSfaaTRwGEmRLKaioEaJbm5F4tv5tnKrkcQ4",
  "key27": "3sxmcbqD8euTXuBi5HpMXF8DA17gqbBiQLBgdrAdGMFbrX72ZejDdLeHa7WHQn8Lwmi6tsTC4VXpKW9jbY3J5oAM",
  "key28": "54C27dmuZmcpvvPXrPpTn96Uj8STSQUdiTqKcEUFojJczEumfzuJpxcSUYoARqcLD117riKW8NZjJuXLmqvHVCYy",
  "key29": "39kt6wojL8kWKS7nbL2NVHVd5fLJ4QmkcrfHA8Y5cb2NUmqyDSrBXo3ks9qYfX5rFbJwkxqFDezE8mdGNqUUkuWg",
  "key30": "k1oWGRnJApbyfgwiJKDcAd2uDUkwJyMCsfvJErHWsxoryAeRpTW88VGnKBPSH9R4oVVBz5Qjbx3CF4EVZyhvY8f",
  "key31": "4xCUkAK4f5PHwQLzCUfwTZJFrHnXVcPKaJ93uNepdg8Smj8nVaTyuKXAypDdKQrLDyFzUjgQ56zfHhTsdPe9Pshx",
  "key32": "MoKMA7a8hrBJwvu7chxprmP6CFoxPkqv262CvirP3Rw2HYSxZekRTThgL7998DHGTyVQC6NFbNC6QS9HFjP7z5d",
  "key33": "3RnDzL2d4VEmCFSfuSWgdvJLAqvn982M63jynEvEVf4cRgfcrCryr6jc24cW3moLvGVqaaQDf9NWbz3Tr482EzYu",
  "key34": "5trjq5Jo66mDNjkBKWJJFD6DiMPUXVbajHgYTLXWKK5bCn33fNcDS2mGHYaabkqNRUaymMvmLz7JJsDccfLaGQjM"
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
