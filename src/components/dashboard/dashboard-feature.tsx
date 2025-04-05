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
    "beWjwYT62iBsebgWE4DqDgqQtsCXWn3spq3Nfzbq3AfSKYmqp1FYKgEjnYxQ2Lwfjykmk2CJz1gL2FN5L6GJ7kw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QudMRko6EAiWWPb9P4Ro96epuhw3c2eSwjUWpo9wFmzLu6DfHAjfTirsvPJg9eeorHA469WFVjLdTRCX9cGMjwx",
  "key1": "XiJFvsYpE1G3h9ugwjvD1VCAk2wADtiEpjHCjojdDrJYQSuZXuwWK81Y8nDMoFBTxNNJBdtDTvQ3fLWZaKKHjuA",
  "key2": "5dhrgx2KmpaNAavvtxgTKftM2PZ7WXcNkm3GFTBAm3voTd41Ks211XWphe6zuTBQfwgt8EXqqW53zBECi98e6KhJ",
  "key3": "3bwvmzX9AKeK36cAYEAtQ6TcxHos8zo2nRsBX19wTh1Vcyrwgr7LpbKR1uLqfJaCHNQVUsmLRG1VvwRMi3w1HzAP",
  "key4": "5tfSVmtTXemofKPHN8k2qgsB3vA1x3W2TxERw94o6hbDPg8ibuqnSZ3uyovecCpAt3K5ob5AuWKgs3tDSh8VBxUu",
  "key5": "4TdvzjgC3pJSG6Fray879bUXmt4DVtqT9ebKhQK4iZoH3LUFKTsxGzAKHiE9JXZguHP9XYVrsdbn6Sq4smgUj6Ey",
  "key6": "4PSmRPvsmu3rkBZK6W7pWyACapwj9LvmMzaoqX1C3ZtU41EmkpoqpfYSLUHgDxAH7qhse5XiSG6boeFwSx1PcmvF",
  "key7": "66xBdx6Z1UKQ7CVbcrLLPkmRm1cDJsmmnxPqhYtUSwRpcg848SNJkKCUhYMoij4A7Gz7o2GyvGtQc3b8GrjccvuC",
  "key8": "4rBHL8tNip1NAT1TjkC8ki9fweKBMuWVXnfw2goQmy8McV2WP5PHkQJaor7vkygzS9drzDkcmUGnB84jh3vTqSiZ",
  "key9": "8YhqAEzK56FXMCWLR59eJ8RJBhmZXsX5v8ex6bFmYzioWjcpCmVKZ5pYESgEotjJJPFXN79FfDF2XxX9pPUKxQa",
  "key10": "m3c4bAd4JMbYJ55wyJtHKvqEhJcFxDdjnmCQagDuM5M3KEHCb11it7UitFZn8bBzNNoXwR6B24mF4gCkfrFs6BJ",
  "key11": "MCnod27duXrEaNXmyfpyH3bXnwFTdmWcAKY67afkoCMYXyWBrpe84Gqm1ecgnSENZ6nLXp4PP4Jx1rAEKGXtNcA",
  "key12": "5RqNY2amMNK9RXFvfhaVV5imGGzH79yKxHmHFZcYUQ6LGyGyCXxhSMxw5vgLYZD3by6JDK9YjfSYBEuaRLrWp5Jn",
  "key13": "3hnBPFdaNeXpAh4NgBvi3ivgmR1UxKbeXBoYNEVd1e6gnmgs1nD3HTB8FAbuGtJaktuM8RFizTpXTpJsJyVKrob2",
  "key14": "59qpwuLcNHQjKooznURzpgFGnABbB1PRgqkd8NYMrNqEgeDVyt88UHhqRyNPhqr92WdekEwyRaxaaXunHNW3bRtv",
  "key15": "5wmHXwgbTughhp9MpB1VJmdmvsWbjQM3iDCiMpzzmhK6BGm6KqFVsRthptjLA8NU6KXRpRPivfVC1sNf4dmdZCPc",
  "key16": "D8HxLaB2szMYhMs3FVeyYMf4AQymQVgcm6NLZU6HN7d5VjK2auYc8Et1rZx3dXtu7Mvbs75iDBxntvnUrUp7xZj",
  "key17": "398X1fVFTFKhsUUJQxSX6iBo5UoZnmwTcL9dEwvMRxcr5p4exU2sUqxtzknhz9YLtNZJNwtteYBhK6eYJDhEzXdY",
  "key18": "5CCcTomvGYC3oWo2wS75zqc9kvNy6jEUw6KbASSFz63sEamgdQcPPte48V44YHWKsVGajKCWejtKt9YGyi8zGuZG",
  "key19": "3goJQnwehA2zRKcEbYbMiPy8CPyxRjPtNP7pdgq1Vv7fbtH2fQc8S1wLTDgrQmNiFucJeNEc5VpXqU2GRs3kVDt7",
  "key20": "32PNM3sxwhn9jQL7vjVPCbRRFvtFHRu86V2RQBuhXpgve6bG4sRwZc3ciCFGaTAzeXtrxtLkfE7ZWtK825vaHy2r",
  "key21": "2EoQDq4Hn9tuTU3XCT8gY233pyMdNqrzxDRRUxtuVF3WBVWmwuqf1hh8TjVV6d1N1nDYV2ogfYePSNFwTommnJCV",
  "key22": "FUozDZmaHrGxGnsCLkLz8ergtuWCmM6insfCUr2VRNzTfV8DLkBEkjzPbgbZJLJUwZFT3582JiFt8tsTTvivv59",
  "key23": "AW5sDMAyvVUcbTvsYkw9z3sx7dHWQHFvpWzPjwnsJHVwMLRpn3fosgE89pCJ1uUiEVAsMyrZMWoZowcCV5sLB8t",
  "key24": "5tqXsyPxzLbquJZKkn2zZdCcfmHKj6Qb163TdPH9hxREvEWCRjZn6PczCBZDeaTyunaWKynqgYxhiocYWJvb3EWT",
  "key25": "58zd7SHNHv34UJmxVawRii2RYDu9rQYWU3HdTnWMc8o785fQgHeGxjsx7j8mtQzAuYB5FJwkKYabcjnQefd3ofW3",
  "key26": "5wny1cdDf45Mxq1zSLvudrpDSfL5v5euZeWZTchkxgTqAvToeEXVjY8miUGgQivGMGG9oe3R3zNDpg5JMoPybN7c",
  "key27": "Q2Ky4cfyG8kuSAaLioUQAzwEYDJQatupF335JymziVH9LfoYkaCoppcmPkGiHtTBYts3AXMwhkmaGWDbJHXMik2",
  "key28": "52GQZatc8UmFBbaMPSH5P23NNwLzjBMaBbamjSe485M2iuonUYweNLsbgMBNtv7BaUW91JZZmucjcMt92vw9zsLE",
  "key29": "4TpHuXScVbhTeoNvJ9WjnnoZTFpZ6kXn4k8B7Y6PTJo5QnqNcC2HPPmVC6gtxkLQKV63A6agsAvZGLY658tn5xoR",
  "key30": "2UjgQnm4LTgwREbJPkMVDUEkGMRrwisdjXwFFEgbVWBJKBZjFd2WEThHjkzaje8M4eJUNhLD9nkF1amFsKLY3T8r",
  "key31": "62Xb9MrfwjmzCaBNxSWJtLFQSgVmuskSMeDNj11pivqUCdBZ4UeYLRqU6Gs95JibioH1nPAcKzq7PMcxWLtgmfJ9",
  "key32": "7jwJ6tWsqRuKLCdXzEuTrY5TicwbnqZFZU9iAXYd53dLmaBXAzhTgmLcF1XhjFfWwndNtAXwdx3HNb3mktyYK7L",
  "key33": "3fXGrB1Y8VXqbHBMkBjCdbLvocUbMr3boCfjU3gdD4c61aXxqfMWgXmY5suU6bXCeABmvN2igDqwm9nrDX118mmM",
  "key34": "5dycdSF6LQHVeRHZj4XS3HL3szhuQBUruySkuGzRJRhVbL55efop8PE1SjiTf4bkSBCsU9VxXMLsXuBQ2M13c9Qo",
  "key35": "4cNmyMiJ4Dn4vBez4eTfaMZLwU1K6E6j2GRkx1yAPC5Y6c2fqZ7Na8GFEh8EdaZigqCpryazSwcSh51pSWujRBMY",
  "key36": "37ZcE9Cs7QCQ5neXyoVZtnfHxqkUJAMmnY65tqpfawub1LXYCtYxyZ6hWFUgWqkgpZuDjPy8vTqgdqMTgKpk3SDW",
  "key37": "5PYjq7hpYwEfKAEBZx5xVtXcXDJncT2HybHL3bqVg153Nwa4L3yRo8zMnkDehvKTzgKM8dEajpzG93zeNzgJZVvN",
  "key38": "3FrBvNHZoa22CSiQQKokGAoQDEpXFJr9ELBKydhfGjaZ1MmWpfnQAhkTS4ey2FEBqxqW9xaDDRJYA4pAXYBDp3kh"
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
