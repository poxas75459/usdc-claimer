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
    "3dCTvi9jsaaMstRkkdnvhe89KGkiCQMsue38uuGeMSma7vpXES8n7n9LEb5PiE9tGghXWUH9FjJis8L3oj87SF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mkgMQRcZGKX8CpkvbPPhwzMmpkMmNQKraE7gVyrXGySuFumWurxhEKq4u8A9skH4ZESQxKCxjunko2ZkusE4rKn",
  "key1": "5Dm6YpNWAePP7FiW3CPb3xRHe9HGKMZ59hdMg9tXJx8zTjS1BPZXzo8SYE2hYsHGjCc15QsB9aGSDVUA6CU7Ezha",
  "key2": "m7iRmKg5uZ9ib7Sy6mSBkPYqgoGBiKWN1RyaySyL338CyjSsCFNDuqBuS8Qdn8t2HL8HBFhBLzB8uezPao6z5RG",
  "key3": "4ZvTi6aJYFBoWKraYrzSJ23xd48TAGYjq3TqJcC9zHsk9bWdxaj3mj8z2AX4wpoTbzoVsXJDJVtZkKXUq1k9Z9Z1",
  "key4": "P7TopdSgbEhttfkdHceWTocfSnNBqaoGDDbK8EWaeZ5iRWEHZuUPCo2cPuEmZzf9kosnUz4LhfYiDRa2BeYozS5",
  "key5": "2b91TMVh81Rx7MaMM5bA6uxthQNuRPdDKmzY7UGc2GvLqjb8uk5WBWbff56KBRjxG74jrmdJQqtJ8SH77BppLTyJ",
  "key6": "Ts4udjCLosoB6rEKYTZUP79XaRmoUb1kbxkP47vkibwuEkjH6xNKvFVGzpM1eVBeXb7cGgnMv5Z7j5Hm6sKozGQ",
  "key7": "2eAMZfZyqbKjVsLruu4yWtUU1U8m7dGLzC2A6TpB4XnnS6avPJbKLWeJGEe58Vh3HoMXkU3m96NsCkvSWoKZE6SN",
  "key8": "4RpxhmxJCzQ82aa1ivhMLtHHkQnMs6uvk9FTFwSwkTNCHqkKLEaX5NgKLy5mpd1NAKw2cWbmDjYR1zLDFRkgQgAu",
  "key9": "3tfdBDaknGGeresSNxnbNH8G2iFtztMo5Qo1DhHFLTcdAr7kFKFHxnkw1oKNqrLDrRn3yNT5egXVnUbv2pAFU5AB",
  "key10": "SbNsw8vYqAmRE2S1yiLuK5GRjNp6wQ5zsF8AUFaKb8gvcNRvqem4aJaSeGrQT3YFWbBBsBRW6PuvbQ7pDG36wLw",
  "key11": "4qHThtK3bJYnt9rjxgGAz2oP7E1BuS9Q67vkG3tDdgLZ2jUUYwoh3BbzeBckKQzB3NmqvmnbwU9iS9duFYfBc5Li",
  "key12": "3opUCNUR5QSWSak9xowaPtSDdiKx9CwbkWP2VmxbQ1hMzHbsk63urckSh1TWQ8jLSQSGo9WvPqqR5eAGicUsCLgo",
  "key13": "5GZXoc26s3X6MyDaLj6h1EgXDWUYHkNkkX5rxQBjLMjGRgouwmbzXP2831fbGxzp5KEXHeYWUo4vdpYi171tbJdu",
  "key14": "3X8mN4DC1jLnBiQAJQjeb12KHXd4KVt45zSgTM9JsV8JL7c31KDxHmF4uKRcZ1d6XCarGL4GLsBqKGdKYJkNaFKr",
  "key15": "sau5UCaMb8Hu27pip5Y5mqceFHqgnG5SLkzBD5PdoHQV3a8sZZt3X8d6pd5KpXcLWwsAvf1wZz5fyWv6svjN5PV",
  "key16": "5jmZmgmgxAn1jjDsyiwJ6gpQcw9XqkKzxgFkfBJprzSSHmepZmUPxuD7evngbPfXuAaoVZugpRgoAjjRYbhaWKP1",
  "key17": "3HzMjByorYZFAcrsWVugqn47oojyMoConDMXwMMqWWqNaanh5vodyvv6X2ZUitQHgsjgw9wN6jknTdZQsh1iLKXA",
  "key18": "2gxrgHhijuUwGdDharRwdrcPGGKySJ2QBZqngxxS8v8BinNhSeQfekbaZg83sh4pyoFirdNwjTnc5EQXsXFa8Qi7",
  "key19": "5tQMyEApXvbMm8RXwHWMHUQoCG74CxdB4PqyfQq95WhVXy5ysaQP7w7U5Z8QSSVCmkPYm543Tqv3Qy2Vs1NewVz9",
  "key20": "28evNp26ctF1NKGWGu8jxZ9ncgLB9y3VkJMvMp4cmRmzBBCPfi7M4bF7m9YKnU9gzEnEr2YE96HMveG6YqqEyBid",
  "key21": "2nZFoS17rNMb7Yz7vH7PKWFbLx8eL1dGNpeGxxeDSsc5Vbg17wPRimPTBpL58DyVoBaUsdJa3acG4v5spSBukk4q",
  "key22": "4CAbAXWifjVnzb6Rxv63QBoXXDQtVc4GEZ5UgFGH7Ln8pTDR57QXfgKeqCEVWcjWqVE8iF5soabxkmd1ScrfEqry",
  "key23": "5qSsAqeh5aRBg8AWUKVEBau3wrjcvKYkue6PUASS54tSHnhWvqcjkbyPhQqmX3unPRw7ekZCurZF7KTFvDrhgZMC",
  "key24": "2JJShs5Ey5E7FV1yAwby6H6udWEwzUYhB3BeYwpbMb7m89DKisgtRRwis2hcVstCWoiNDSc6Vzk3niTRNzWhSv3D",
  "key25": "2cgpn1Uv5v1mHmuKmgcCWqWw7pNX4BUwwAn4oaR74r3VVAnYQWgbbXv12WdYWcUtmw43e9fSDRLrT6S5Ka9T15hs",
  "key26": "4e251GeJMgMuzwehGqs18KWu6M2yHjXREjmTFgHUGEb8CkkFwh5ntHD3K2hBPsqWvQbr6HbEQPF6YkbooxPzCT9k",
  "key27": "5McrNaRzHpx1vSkp6Zq23PSNjGpDcBaz3DzMAMSFZxuziDRK5GBsWXzrHfsY93UhprhMQuthRkyBWcLMXVbYiDxD",
  "key28": "3cFbPJNFeUfc1DewmaeGVLEArYeAve6fKvcnRyS3LgX1LjLZNAEmGZ53pFfgnygsH5QfPwpUcczRN8ik6khAk428",
  "key29": "49ovRwA9TypoCgSUfXmRg2WJ3toaGrMxdYspitNiYbv7VCWPQUfonYHEDV5bWm9cdRBMWT5vYyHeC4Jetyx6arur",
  "key30": "3KKS64bciKaSEcWFb6DQDrd1p4LqqvPJc7A8si5jmSykVaHbbwch5HXe75ZQuYa9KD7L2iCLbZpXCvRGSRnQwfgw",
  "key31": "391U32dr2CwRTjvWfHBZgPLk1j9a7DYdTQ4mF9QscC5cWTJoW5wSAX6DMqGU7KEa9Xm8aNe9h3jb7BwLSnKanQAV",
  "key32": "5RGYhJMHu9DaDBh2tpMhGAUs8Af2zV9GSU4tTuLhnoeLqWYUkHS2dGPz1XvFRSdJkrucNFrQcq7Nd4txbYR2s1bw",
  "key33": "633nJwN41dFSWi4g9M9arTE4e4LfW8yapfv8izPZw7pv1SUXmBoBbnQY1E5diYxsfebPefnAMV3SgD9Rcz3g2jJ4",
  "key34": "5Y3D9p3qA3ZgDQSgWg6SxtSZT2BFdAj7GRerngqaeFupDtNGqx9gFiFu181iKMUNkcAWMV4eow3YQoNs2BcqpAKC"
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
