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
    "5pARzwmRR35Ps6zAujiTCLzSDKXrWmtThqniv1MpaFYUS9Cvp7CUAvPDXRSWCu6o2cgsVNqabWsc79oU4KFKCsbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N3i2BsmFcm76HLfWEnWXmSEypFpqSwGHo4WAJ3zegtNHpowFcbkL9FfH7AirSsJnyYUtDbYpTdAscGY3LVQSKj9",
  "key1": "3AcpB8JCS54VhkTtGwGbzWv8nUTrdAg7mLuqcfxEJBHrbV4SsF9xUZNrJn728MeDr3uLib6FsGaA6CXW1jZbC8j7",
  "key2": "2HyuxE9zFv1XHf7iptC9qfFiFTWyUwnh4QHVbaJpVYe87xRcY4LVzZHu6rkXFhHRcwgyh6dtzurfW6sb8YGe3EWL",
  "key3": "iHPWpTSBv35HHqgtQkxwzPJivH5yCwU8hZB8N3kbkqoLvGFRkNuM9rinQUKH7huwogxZQPpQjtmBH59gtzUQUxE",
  "key4": "26HgeoFDvyhCEtXcSs2GumReBdj5n8zsLd9fJzkqGxPWiJKyZzYatcUGvemoB8XZsGKGLWtDGJ9vyCafZ2idMDS6",
  "key5": "wfKEN6iWRFUt3PaFSeWujRyJ6N7QMUJV5pHm48vUyNJZHQBE29HMj6vBek5rqamVVC4Y7sAWabc2c9chTGEurzb",
  "key6": "293k2AYXDevHKhnkB7siRkTtrVVAyBimfX2waXVrBJK4eH4t8PrPUFfZiJcdmdhB9ScQgeyyasdnRHubQNLkCgTx",
  "key7": "4LQ82TGBFaFsFjAzcg62ZR49PkRXrgmswvKpeE8PmhedTdoMCxkMG4gCbR44oA1Btr9aAMPLJCnuUvzEPrBV6r8f",
  "key8": "4oajjWXp3th3hEnfmfK9G3tjFAbyoBxtREDYk6Z2g32RCwdhMiQe6B5XCuG7o6oozVaY2QgGpEMXzVZFrH5GBB3N",
  "key9": "W9oj3sGjLvUbV5FUhVtN81mFFWnM454SzRpqJMwuNcX1FSqCf5oZVnkjrRq4tKJJGnBwnQmoEjQDJfsHodsjapx",
  "key10": "Zpxn3Viqv8DKHRHBWYuKemt7RJFmSW2h3Y1Bm9wjm12B37Xj9f5AyCMDc1eaqx2U6Mp2fjtJvV264F484KGhqkC",
  "key11": "2RR4ZXRXtsajfGsFgHPR9CemX7MxNpD8f7TwTWRsmYrzwwuEC5obsXJgntXWZvT3S4sqe3TMYw2mnYsJHht766Uk",
  "key12": "4LHQP3Z93G2HFby8uHJvHjK6o1AvHaW66z3y7vN7qoccoSQWjzpuPxLx1jMpy3qHWs672T3Z32BoQq9DoZYQByK2",
  "key13": "3atxf1p9CiYRK2vDDmu1HmYpgw2etpyxxrot11Cc7qs4xfdqoFJCNw4rm8DuJK8PgxUYnbVDFhouUFZTtTeQji7D",
  "key14": "2Vp6U6wqf11fadv8xdVhJsgkSqWGkMHb44Qn6cFVCy1LJyNmWYRpwP9LZ3y3eDCuoh6tsn6S11sfjJaqonURK7Mw",
  "key15": "4JDcGwFGHSavaFvpB9g8C3GkpByFTr2rWU3f4wLeAgUSzMDSoAobP9UbBhgbcvwJNE8JTxXeTcRC5oSaZoYgk9zs",
  "key16": "A9GVLKHcU39MATVespkksCdCexWvKKRToBxzUcgZh381YS6ThxFFNVhFWBmCx8YZ6Ugjn5ebSqmWrxH3Jmhb64y",
  "key17": "4JYukAhV43g5uhmjZSwcUsRAuhV49uhggyUyWmRAA5iWwDTgLzE8mrvUweZEbxDouStNcz4jMQMpcugHjodYKgBH",
  "key18": "HNCT2yqwKrMvt9ePRpf4Lp8FCdi5Ai4PrL1chGBk1s7FoRCDUGMXFDj3YhQuS7AXPdTzjH8XfwkCb7V1jiAEGce",
  "key19": "2goXfrqWMPjsquvdCEZULPM82HzBpQKA8k6REy8Dkb5RSCfYb9fz7bYCreaXaXCJvTxo1uewGLB1c66VthjDa6as",
  "key20": "eMie4GzAnmgxLnusw3TxfNZyVcTEXnsdyWtP6i3VVuU2VY7koJQfZYXorFsgVQcWKY6RAoCgfZo4DbMCeXmNQ75",
  "key21": "2LGTLMuAhTTTsAWeoNznfmkKACz1jotYhYCKC6Tttd36FiQHPAoHBjjQPsoYphP1tVCePtJ1Ti6Ur5AGKc9CUCQZ",
  "key22": "y8t9KEyYWMnphzkWgxH9feD8ds3nFAEXpMY62bz22FWU54GjnDifvBTPJ8jEMFxBaWDTfj81R4tBdCYPupx6aEW",
  "key23": "56R7k72Vqw5thrUqL8hUFPXnjwX1U47n21iSjVPfNFG65ysfszHjRrgXtSZ2RDHL2J3e1KtXpfdpUZmP8TnUhm2q",
  "key24": "3fEgLwQYjsFB2W5RAfLxX6eSzKr47qMWMMKRz3UWfHWKyKmehN1b8bKVeyuRW8dndK6kkqFHikqzhaLsNtQoWM8M",
  "key25": "5YxxzEkFrpVrrvZts8uPmYXp9He49ds419uHnsH323rcnXmoyv7YpxWfqynSMSPp7UfrsVPcNkRVebFd3QeG6qJB",
  "key26": "5Yg25B56HoB34uRdJxqECgTm3bz5vQA6WyagZmz6Xp8mU3E5Cy5RkAm6H7fugr6Ty1dvhWGTLNLyotJULARWNCSM",
  "key27": "61msi6TC4imS4me86ZBT8E54PfP6AnSQzQYPq8drHqJTZ19SWXkkxJytuowCXffJaYxdgrEx99evmKktWbPmFDyE",
  "key28": "27HeXoaSeh7XAEQ1WsdUTzvg5a5DB4kQKi4Q8Jh5kU7QDjYJq38YUvkMA57jbmqNmxCKthiVvoDZ5AhnFrB9sLk8",
  "key29": "Tzzin4KQiUpyBTnDdVDvKWZMfcMxztGNwo74BN7hyiTVNzAjrXDv3H3p9xKKDhocb45bB7CbmDWRhmmr6oKw2s3",
  "key30": "4FLfjDe8NLafusBtL1ugqTJ7k6WHvZn7bmcrQGytyfLvtgSHosMS7cYqa6kqNHKrWndh6fJnRvBYH1kJdSn2FbY5",
  "key31": "Uwd3gbuoc6e5DQqopQWVoY4WUQdX3M9J7NvpDtAuPiiBipEwjAWi4KFEX6rd78ivKJTQHNHBPrNaNprmBNi6F8Y",
  "key32": "xmbYJSfUjkLoVVV487sGgoZrocuK9rdeabAdU2GpoYkrcgtmMtmMYtmqktfTxmx5FJxPbYU3TVkmG8So13niWUY",
  "key33": "5Yx6Q9MKDz7VcKsisZUAffh9PubAfgTHprvGQhc4LyF89X6wkNaxT4tyTvSe935X51Bzc7uXe5BAoChUCC7GbhLR",
  "key34": "sHKdXUsz8g3Wrmrya2sp7pZn8eUqH3tRNNLear5kgSmsLNBG8Rm1ZQqNLHNZoNz99sjSdC2oZDeBtPnZVT5dX9B",
  "key35": "2YHmGYoMpPoTaWRDmDoVTMuEqSpNcXnuj2D1gT6uNda3bzFxWbrLALic5PGUdDHX2PMmDJqtfFzcRLUroqL3AdeL",
  "key36": "VXcKPqtBYS7u9YXHaUSw9MccG1CxnpKDwA7uu6XFKT4eRHeWf45Sv523yatjVgfkXFqUdpJntdmf9sEKczq1Bv6"
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
