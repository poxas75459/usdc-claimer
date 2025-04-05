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
    "eH2Z3FECL9yZCQJhoavRr8jperKBDtSRmznz4btVdxqXhjZGGg8SW5C14xYKsXL17WKVAiy2einbpfqv9k1bgYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q5jRbPNuBpRbtoabUFoDN1tfKEf7vN2rtpdDB73MM38XTBQv9ooaPV1EcQb3s4RESkN3X1h1hzeN22jmv2NGyVM",
  "key1": "49vfABUR5jfsXn27JYeWEXgRbP5DTaMxutrVFGAmNJUrsqt6pMUm2Pf1dh5fUXHcKfhxZBgefPz3p9oRQW41gD9G",
  "key2": "3pX4Nnx7JAAiKKD7ByorcjiYuvajWKxTqZhpV1rz6bffTFKe4s8im3KWtrrQMBYXiT7FfEvFYH9fcVrfJuscQoJM",
  "key3": "5DcfJ2QcRqXmcdNpwhx5hxPWVsZuXrBgNkoJACyGGuzFXAzwnLzFDgMDBtLF6PmRtbQq7d5rFiFeVrA3sc3a3gpZ",
  "key4": "4cm7NjGCjPoigDgWgKktr4kHKDYScnyDRZ5M3nKzZNM5fWYWS6XuTSUuDGhNTPB4QADEP1hqhFpADtkNkX7SuHJV",
  "key5": "2FWNAh1YPBs1Bi9mNL9EhuNPV7ZCzxU75RY3cUarvECgD5HzDivxACL4Uj1hsudQZhHeH1hiWaCCxa7qsHqD7hSt",
  "key6": "5ZeUCJH5zWVSU5MevpD8BNQQ75D5WpEJkzPWnGUiqDzu63tJ5NMdt1dQGzYEqhLuPyLQYj9cGBMYziZ23uD3CPeD",
  "key7": "qPUo8iu464zYpfJR51ZWcqrBU2JWsBNBKGZWmsUy7JbtszRj14Q2CfRFmt2uWvB5uXT14BGDq5XrRD4HXsRD5iY",
  "key8": "2A1GLGhyECYxqBnSbgB7AEr2XzPvQDPv6WL8eNijy6AXzSpwNjrNDtpYXM1u7AkJCjLSXoS9KoXyALpmdXP636BE",
  "key9": "HwG4kfjuiu6DgmpoJQpFPhrC9t8pv4WGoU9x6LKj1nTgQbdJzRAGvVLShYfVKN9vx8QebHXQQxZEKsw8cmoweFe",
  "key10": "3dh3juqYbRD1JR3ZRsmpUqxbsaGNiTbvpEGaN913Nu17HjD5oTv4TwHcmHAgtzi49CUJhZVod7xSDASE9rvS2H1D",
  "key11": "gXK89RQgNYeYM177UkDZNjiea4dbjuQK4p6Kxp4yhGU2GtvtXP87dwBZFNx6fnAqGKt7eW3mtAo8jEujzujtViA",
  "key12": "jxPC9apiK8c3YiJAeEYMT9ibGCuE5ZQKYKYnSP35NKJKo1cBuaz4e4yCyphq8ekUJFc8riTdAtRVLiaW1XktvcE",
  "key13": "5VyN654eQxvmdv3uUN8pYskufMXArGxYC6T5NnqqJdqxoFRzLE2HhwmBwPsu8VvZsWDRmC3s5PzUYATbGsBLCVzq",
  "key14": "44kFoDrq4yU2wLBgpLh1pDBGDR8KamRQ2Y1Ch177kHQA2bn77eYKTs9ZnAkecNH2tXnQhW3uRiyKkcJvAsdsa3jv",
  "key15": "3gz1WS1CeGEjcb9DNYaZUB5Kjm9T5LeosCdvqmhRjnMF5gG8Niefbb6y1UyVNnKV5BNDuRri6hsaNetLfhmV6465",
  "key16": "3yUTKmxc7qDYn84WZbcumeMLFiwygakc2La2sfk9u9fuiWsBtAKpFNwaYjcNjaAVoczpyidLut5i4sgfbjhRsqs9",
  "key17": "2wqn8nFQiBrcLYqncscF3bMCU2LLpxvvmbASeS7HB6BzadLTgTbHbwX5Qm4EkGhVg3KsP5Aosq3mEsZRkkzFjyHC",
  "key18": "q4HaeZLYG2jEsio4g3pc5Wz1VKZe5xkCfEpnUFNGpJiZYDG4D8mgYhHNSyMyZCr2ZdZCXNme7CDR7t2scj8RDck",
  "key19": "4DnDiqjb6p5UskpcFSf1yUyz1m8hGgTqGucvC5nLE61EnSRK3CFupM19vNLK9QToDsbs4JU7NQVKDFD3r4NkwdgV",
  "key20": "4wrEKRHuUk8yNm2Ad5QdrGtQZFDqSd73JA2fjiW4UJ1S1bM3THAGeBYM3HZ7FueGmDYzp5jK3sVUgb3krvg3JJgP",
  "key21": "4o39Sv9YqG8rH9aQRC3MHmuuUheQKDBMaaNgCkPyvLPgrnmmnQKaXCfhzB2AwpcZYtzvwiGSLXUgXLA9zkJqCkLA",
  "key22": "4B7UU3e7oASPcf422Bn3mmS8YwgbfNXHq9gCUe4iWwGnmxjpH7AUE9XcNCu7uknEFjgtzSUBvyKdihZpZ6wtd9no",
  "key23": "28ThbL7izyEkSgsc7w6PVXsEvuaJdVdiyCTyVpLRCYFZPxMvkXWN5AqsJbJXwB5fFVxwjroQyaZ2CbziCz25UjYp",
  "key24": "4foQCUECY9i2WGHrtCAS9YzGFRzhPzUHaBH3vRUSAKE7fpnk9UaPMPsnEzt6MvAcQm7vFdS3pLGy9cKEqXbt8KQK",
  "key25": "4zEofe6ZJhgQQd3RA9X27CJYQeUJAKEVdVeBmWkv1YTAztYVPXJfYqEc6BYZS9cnzpMHQQisXAofFH2B2NCEHKN",
  "key26": "5X2v7ndB4tBqPQH4LTgWDMfCEB1X2bTw5PySg7yKsRSc2RE2c3ByEskKn9vSkHucSDquEszJHv93TxuYz8Z5d8LZ",
  "key27": "4iEdmszSf78SCfz3MVNWtkv7M2jJVuy2AgucTtdoRvK7a9o6WFJa9oj4ztjuCGVjhRAXVnEvTfKyEq4rQWMhWrVX",
  "key28": "4WSaR2Lbv1PW1YFt7Jqg15UctV9nyzshkegmGicUNMALqS1qkAf2HmziLMSAJxDGtFaZH9XyfNXpwBHdnTmEiK14",
  "key29": "3oZPdZabjezrB731o6XpMReBUepJo3R8TmexWomhrat36HGibwEvqNZahua1AzPL5U4CyiSxkpe7jS13xYwcGaW7"
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
