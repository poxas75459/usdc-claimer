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
    "2SkcpgwSvLW3Hzv6phbHTapMrfWqcNHGgPLzqCeDFTdj4Qv8V9vATERoBjs7MGcdpDYDgYG4aBWf2ZsERWanizMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QGgxF3TPaMmQib2CkzPsR2tWLJQm61ciVg697a9heDahtUPvEeJD2AbMPN3HLTkbXjwxL1CLbsgQcF33vg5J7AQ",
  "key1": "4MW3vEbYNkH2KHRQ5isaQmP3j5RmdbSR8hPX6tiyyShkzcZo5jrs2f81uPiwQVo71aUEv8FSo2griZ2sxmPbFJrN",
  "key2": "3HGXhxksSpRUB62FwDtiJzMyvW5C8eNpwc9ukup9pWxJRAgeW58FLfVLNNB9n65ooUTvJxcNCAhY9XJkeTYT6DMb",
  "key3": "4q1sSxR9u9UUa9bw27fG9cyNgYx7nRbv5mk2wZy4ctFaiNUqwJqArC54zi34917am4gV5TMmvvbZpgGs9yHPvAy8",
  "key4": "3433NFgUng4NpoZQDGmHLj5u19RyPwQuzBE2Mbac5HYskpJdtZ8TC3kC7PKvYHEweQiGa5ApAvp24eYh1nZpj6D3",
  "key5": "5yktWPrNN69gL6B7GJKWtSbJszCoWJKqsumZD3foHrHcvxvNTdPEyPvm7RPnsaaw1doWiWWit6xEXrPS61FkLKhi",
  "key6": "r2dzWoh9zeyJzjVWZcGfGPEyug1UNcHPAukb7TMTmtHxPhfNMGYHGne34srEyKWDQVYbfkgWfFE9B3X5SvJNFwH",
  "key7": "635AAH7yAshEPzCkMNSHrCgCdjZX4LouZifAmjq7Au4S2mLFDCqjdUjJQX1fN5PNNpNZ4MZy73VrqcLK5EDP2Fof",
  "key8": "4rVf4XgVU1SFH7FzXCo9r8iRm46vzhiRR7WniavmJCeuvNmjN8XWUNNF2MPNscfycizZyA9WZQF9eUeXZtT3bKhJ",
  "key9": "rRr7MHB4FYxtJ7qsVwUPKwfkkFMeGryHDNDNDa1VvZ9Hp9Fk8Yd6iEcyqH7Ryi8F3KnEpzHvLYKjkbzHdjvNRPF",
  "key10": "21UVKYWZtZr8woo1CoZNNVBSQVqQ4LqNg3EMzUjehYqdiqFJNf64tmFFdqPeRwVjFqi4EjGDTVJqA4t8mK52K3Pq",
  "key11": "3iPU18JKMK3ynmRBeTnrJokZZtKkJpot3cudLmuQeHRYMucEQouqwXY7g6Do9m2eHsZ4aXf5trBhY1X6gvkgtGYS",
  "key12": "3yqv3QAgo8bPcBVZ4CDKNQQitw6qysyN6MFbaq4Do19XHACgkhhubxEQk5ymDxWr72JuTA3aoyDFhZD5jMCFGcpm",
  "key13": "64LPYCG7TK4An5BkSzzsLuK3xaQrcCk4ibKuumG3wPDWBDD77SR5Y5gHATRVHtXbF7Y9GVUj73LMfXVNPjJaa78L",
  "key14": "2j6Yruawc4GVBqNHx8U9W2KBNCtQE4Nkr4EdmRFQVQou8hLd6PCDN9YegpBUpCJY43aavFhFNmtJh5DhojfCHWB5",
  "key15": "3MhrC4eChyqrUAwyE2pkQZLpRBur1BHwUGXnuHH8415nWZCEJHUQ5MrMnH3vJpRYox6BtQDaEb3uV659acrstLRU",
  "key16": "2q4fwsTEzHqe5McZbPBEtgmkDDeUA84gnW5RQxDzzNSohjyBLQf1GGSSdZbccd8caGtJUEQYvcZboSY8PpyZp8Pf",
  "key17": "FHD7KFzfcpYhkBKC7av8NqdZYPCZ7seRv3mdg9yEhesQ9k5trnCrmQp8WkozYNyySvz7MEw1BswQRjrZ8Tk7Hoj",
  "key18": "4gCseCYATV8brzkJdD7cN3xVhiZwXphHLN5WiyXQhJkoagmRdf8XNXZCTyVFuYVSs9ceTv6TAphjhJRYfZ9LXCVK",
  "key19": "5DD2s2RYcjiLq4wgLqT2fCHQRezkJsnCgiYsMLZGWLzt5U3wmkQbVpsTND9gKB47fUHvC8ZzJheat2cLzLWpBP6j",
  "key20": "GYx7778Bxcyq17wp2PtnZSZXbQXfzW9vD5LZwJQk1Ng1hDKgBMxm4QZAf4SBdE7fM3vXeizd5UfAkuHeyGMcGHz",
  "key21": "3Pvvw1TNv1d68Spi4FkFJuPTUSHjwDxY2u7St3royUpkeV2YDUgSVFHfQ5XP9gPirTso8S9jyYfcXJdo2DW4uM9T",
  "key22": "61ykRAZJFuJ4foHREJ7da62MYx2rE4Ex6xtEAsovNnYdhREt2x9bngBFWoWMoFB2EZD6Xd3C2vfiVXVkUf9ZBRZu",
  "key23": "4XgBJi7kNJhHo2WXQ4kiFPWapRDQDgC9FkMN2e9bEL8G1dPxmAAVSMAF3zLyTHjVK4mHmjVtUNYqwtaybUxiqhbA",
  "key24": "2X2Vk2iBLvUH1fB6Bc2GnX7jN6CnavbPEsM9MMfQ18PB77xx44PK7KhUWtJ4GY8obTCXxEpb5BqgsNF18URkWjQE",
  "key25": "2Yrv96498HYUYfgqgtVkNVvfGdqxhVUBxtquv5XPwRnD4SDLzZhSTMg7tgMdoueM2G83VhSgtjyDerQuPDHtVKkx",
  "key26": "J7F6Cbhgn46vBCJfoiMnhtDxb6PXKmJmiTopyKUsckwANzP1qx7RN54y9ayL78qnR64RPv8AGPhB4JC3cH7WvVo",
  "key27": "2K4tUKCqcbCQJHY2K8XCJ1imqw4Aq52YHDvBmSDp5ERNL6k3DuVk4AXB1w1hY7MPCQjxxHaENratxcX7KGaztxbg",
  "key28": "28e98od3uzb8DnPadUdUCBU37QVm9AyuMD6Wmt5anERqpHFFUDNM3QEMtQRJBAcqiMudV1cNbXpmguSJeH91Wc9s",
  "key29": "2ST5rgbbezT4R7W3Dm1gcWx2sZkt93bChSPh6LcBGBYXoXyeAJArVucjct6tjk8KLVaEqnoo3sBoWNPfT4FJZGMK",
  "key30": "D5NWrggLjjqXkjyzWvEwgUQA4wzFx2q12heADLEBTL6JyxezFqgdLbev7zrbUaFF4xWKnHHZmKcUKnhQHVBwEP8",
  "key31": "23P2d4eRSjWyb9exQX1JrPFNZdVX6hzG1ZbY6VkJLjhGkMq3hiTSWeea7Dh4AUHAcwrV6itF3UkLtX2hernAJQdK",
  "key32": "5eddHM3mdHiBcuAm3A3aw1xrC3Z6G56iDtw2CpmLEXBPbpEe7bkCfu1zwvAdXUj17QzqMy9rxeNxY7NTz4anf26X",
  "key33": "4G9vFVRKxKB6esjTs2ot55HMNvr5WTPJByroiWVFahJUgHe5wjeoRDP7w5knQGatwRojo8XbJj7rJyo6dRkakZHS",
  "key34": "bS9a4Q1YpWj3ukfoq7dxiUh5PQ9rVMxx8tQpBSgXSJwGyH37wH7Lg3G4fi5H6YFUraJaE62FffxjNNMmJwjRFdG",
  "key35": "Vh3bKzkg4fs7FUKQX5Hzcn3MYdJYf2ZxUQraD6UAU17jzJht6557nSgz7H1avFPWFEPLQ99jgN4cxtHEK4Rq9tQ",
  "key36": "3QdAVbb5tPESV1dMrZ9Q7q5dDd8SEJC7rJArRyab5yHh9oF5MXtSyCXP8s5JJuCJsJRfxPZUBf6hqYtvXnCRRprv"
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
