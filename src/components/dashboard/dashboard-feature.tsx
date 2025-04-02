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
    "TKLrJuFYWGb52KBE51fv11scCnWFdqMKXBTdE7WEKjjCXQdYhyyh55zYtGDQNe2EHdfk6LFm88yjPEoqiNQFiYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "12A5emx4akSQLhE6podqcWa3pKSTPtzBH9JLCMYUAmhzbaizYnfvhvKPUd3maFZTMbR9ebitdVaDgW95QNa5h48L",
  "key1": "71zgm3QoCxgSa3fXP5mYD9RLdaYjjd8tvtYUkK6wgqGVSaZM4jTrKzUe1UGDb7g2GoCKi6gkt3MDunyobLo3KNb",
  "key2": "9h5nJEYXsUzo3kwrAmQPoTdX5e6yucUDNXdFZ7HTsN7L4Ar5p1dqHGeHK3kmEwKM3FfnKLkpyrdqJTqAN5eDJJ4",
  "key3": "yFRNxCSPstP6QrNu93WkLFKSkLHKzFHMaNJ5sW3Cyk4RpRu2e5Vmr7YYzhWJS3kv4HK2nDWh2bHpE64RNVSZe9P",
  "key4": "2xja4YrbThjvY6fvjE3SEUnaiYoccWbjvRn42mDRhWGfY2u8Q5an2ptGZjrAG5nExy2Ff9Dj8Tq6A18iWPQ3cqzY",
  "key5": "fq2eoHZ8XdK9y9jdmBvLP16wHb9xT45B6dhm7JGDrDcqW6nmLaNV6shi7YBvMUwc3hLxZgLoxfGmp2853qDMjT7",
  "key6": "3s6toPaviayfBJWn2RVyyXBieYAH2Stq4BwpYytRriDKPGVZwAwxeZYwxcLCKSh5FzJ6E5RYF6NnALNjLy5HFUB9",
  "key7": "bkpotY8MBJV7zcFZv8HJDitZFCBjCFK16NCZkHdHaJJ9jYjJm4XoYuQBm7WKRLseCtovtzSU8yte8ao7RwrcFDZ",
  "key8": "3xjTmxZYBZpTBnoCf66uA53jzqrV6PQsHsKGbmfPRFFQqvi7SRch6z4juKfcEAe3MwxSwQXwkZHZ6eeVun8Tz9Lx",
  "key9": "22SCd5r6T4999VFpiUpm3cyS5eZs1A4mDMbYYjojV5yiFF8jhJENFPAiMjQ4oVxYWxqrVAWocHFSBeCKbscHwABR",
  "key10": "3kWVRpD4mR33GQDcHcZbYik8wNbAUevYDwi7KuYFm44UaQku9H2B21McXVwvM7behpd6y6gQwrntz12WTPCxwvgU",
  "key11": "5auncb5UWTJ67kmcXYfDpsa5q2DhV311QKKuiV3BswJ7rjMMhZStF4e65LYCiqjfS2fZqHhY3Rarf8yhD3aZNsHZ",
  "key12": "3WB1DVXoFR8vrooyWETW8PkJP14CFoW2Btby4V9WyqPoVXWo2gX7TZ2qXMV8FKxPkBah9tXXaN198F2HRHXhsA1h",
  "key13": "5RKmRuXeRAuV8BGnjQUrs3As9MompzBjbPts6n6AUynoAFYjCHNG5rgLLbVyp4kedFpAt8eiqrdzigRVsLe6Hn9F",
  "key14": "E6tRMzrTjVfWUtUVhDFjTWjuDDz3DXRoyaQWmYdrDjB9ckQ1b3qGbvCHeJnFDqpwwhTkhkBuG9tFRDNtGj478XN",
  "key15": "38ypCXwPKnoFb7XKeF1SneQ1XPpgqTjCYDwx27j21TH8YPtixKKLgD2aN52PQpv6p6BJrRAARkaaAFvKrvUmetpJ",
  "key16": "3wgnXsf3tG1WaQpEwpUQNaHPigc4obVcUo7TAYQegf8VDtYBaKnqhewg3xy3gwRfAcfpJ5fP19Q9oWt7s7XFpCzU",
  "key17": "593a5GPyh6Z8eRXZ6TxxTCQJfRra346tZyfixyjJKeyVfvDoeH3QRrT2z38PPU63Qg6dwkShaf8YDbBpzamQen1M",
  "key18": "3MRK9TH8THtZ2MQc6znGtJd3XBtRLWHykBjeaDdqutHoyQoyurCGqmfF9f3VTGAYQog4tjGugSxjjzurdk1zLwWz",
  "key19": "5LYf3FygQiYuBTR1RrQiTJhczn5A9BJmkuk5sztGb5XCMDPFVJQDr4tsf2LJ4fJGfkks6XUiKPzTQJDpbQojqMGW",
  "key20": "34U9PH58TQWzbYd9YjhpoHiQVHxLhjMeHVWXWKhdivMidT9m8Nx15GLKXiUuBzvcK2yNqJ8KCk9QJWjj3Skq7CUE",
  "key21": "2XUJvgxTEptA18tDMqwUgQnkdSj2P8F3b3txkkoPcmmZgE8zVWiuK2TZjAbJxRr5qhakXMvYhFu2FanoXh16hmpQ",
  "key22": "3oeChYWJPUYk2xJxKZTvqLCVwByfmrE3FD6g3LLHJQeNuwej59V3rimcrt4t2Fw5s96N62Dv397HMncY6n2Qni72",
  "key23": "5ikp1w9Cp6epSu23BDDEegyeSeLtvT5SuDdMkd238UVwip6ogbTHkYnrgU5kKAmwCheaRWPATrkZisTtsLT3xRDk",
  "key24": "2mTMMw6Lt7FX8yJbgPiGgWFeDZ4QT7hxi1dDaZ26k9TDd5Bwk3iKRrP3wcC2JHnpQ3wKvhfYdP58VSjAvMPc9Rd8",
  "key25": "38XJyfvawyaD3vt1MMfRgovuAMwp55Q7nS5Z9rcoZyMtwroWXYr2gQdauofh68eNvxjCGuhL7qpX6sQhxt6yA4CZ",
  "key26": "4qZUBkZxnozi6NpuP2gx1EXcn9dTQCvy3SEbQPx8yMcsxF3Bii5CBosPA5VSd5FZcsyMmk6GJjD58f5VoynX8m8d",
  "key27": "4sWhx8o7G3nkPHTbuQM4PKng85oSRzqwY6SuRdnGmq6MWcSkWHKKTNZhFbkaiRcnP7K5oM9nY2yNiX5bv8APqWp8",
  "key28": "2ECXAzU7PjJMynr2yonZrxCymhZBdi5JFjae3zVGWpPXTu9ME6p4Si2ZUf6hd7nAQ7mqBYkmk7nCPRqA45uD6pZg",
  "key29": "5WF1nrKiy1jE9G6BDtpDbABfRCK1Ss5GSG2h6q679FkBKubMNb86LAhkL4Z6pwSHCPCDNpeY6bgLddwDVhKTcoTx",
  "key30": "ZbDhtkpit1c2eGsdL3Vfbj89q95bZ7SdRrrrAjAg85upWLjRkh7RfGKZxw2nGXt57dmr48Hk8MmfutKquygFvfv",
  "key31": "424sm8b8vvewdQmDwG8XHQGzYjMwXfZhkjAuQU9D8EtD9PA1ndRtXQxYaPVLv5Qcmx4szAc7WHV5Bf5RWgU6D9LS",
  "key32": "3qvHjUNnxs64i4rfH3wxCYx8cHUqGM7Rrfw2tgDq5Ygi6FiZKWWNxZKarMjoSvs6HghZzzTHPGcWenXYCjdR1gv6",
  "key33": "5HZQg75MfJZqKUmJRr59h22dDLzMEVCSbNLL3zaXBbhXLYaqNaAbVAeMPsPpHyqGdDqwYEWKVm3dzu6cxxMhNrzm"
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
