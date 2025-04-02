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
    "4dbkA4cnjfD4knS14XGt2abQEncRMvkjXQ5rSsxS9QhEhyJwwY71cgEroqa4tgHd5rgvYPzr2EMJtPWgEweN1Bpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ztpmrVVm4nPSxYN4MaUeSqen6WjmRk2D1iZth9YKYaQedTvZxZiGfTPURDSrrHEAjBSBmxv7oZrVKS3pknQtMag",
  "key1": "TzW7Vks531PVumfZKfTqe9CGApQUVxZzhe2PjDbkerHNhcN62aAspnxZ8jN13KCBbHs8xWFc1yc8YsHThcQWeLM",
  "key2": "55AsqkFungYLjEZfbMfAVNyVmCHGUaWXdAMFx5MBAmf9dXg7jCopVHbKGu6NB33DEVx3qeTYWHcZgsvbtuR9ri7j",
  "key3": "3gx6W1QEPcxfmZA1xtRKwJsq71rum1kR48J3qaPPvhscYurQ3Zp9CGgKmeXpHUpkzGkVriCVyjTsDrDc97GTmR1h",
  "key4": "4B5hirMeu72MVbFAiX7q4FmoHZdFt1aA6Fh5h66hMHSDwnu4tUWz2TTkzadsreGcR3JeLNcuJVMtBsqe4UPZ4TFL",
  "key5": "p8ZuwSAKnKXt67EgvKHtf4ws6WS5ioiRUW7NQE7pC9Lja3HHDAveWsYzDUWVhFp8tajp1PkLoQzmYLYGphTbV8W",
  "key6": "Y96wZrkE44Z2d5T66PR6fQ8rYHSRvWzoCcAUXinqCJcwVBz1tumYdx5eMmWxaTCGW7HzwLrG2WR66ymWziKzohi",
  "key7": "5iCuPKtsn5jq9sCncDF6MbdEF1y7mm1aa93qWrc38o57Pcm5Yp5AXjPY1jwMb1sbCJ4KjNFeUwYuRfUMHXpUMMb2",
  "key8": "5js72eGs7VsKJVJLSzpVaNuqC43sABNKipazk5pdJUsgNN47HHnqGyLpSnuDuy6xvR17mkTRjbhmyQoDefBHJd8C",
  "key9": "5EgCJhNjQGjW7yXMpNJ2UcU6NPtZ6YTjPR3qTVeNPSuvxNUZsxRLZBSRqrYCiofnqgC5nRQim39rrjmPgBjHYfHZ",
  "key10": "3osLNg2Pf8trELBHGhhGFWJbR8W4tyKP9n8DNTtnvLrLzjZkE7YMPLPWECLNckyazhT1PhHwgCRqLDpPzxn8zSAC",
  "key11": "4S1N1D6DdiH2ZkLN87WK37yvR4A3FzuELi4Ncn36iRg9QGjGvpVHcLDwcK6dHT2paHZ4jziR3W6RuWjEAFeXFN52",
  "key12": "KgukuVdCkTmRKYJPQ5WgaTvFNBEH13WWkiQiEUcfN6U12mm46y8PC3ksr2AePoQiZPAtjQZh3xUipUFvzgQF7m5",
  "key13": "2oc9yyNfU3M8YhjQn8nt4iLQBtuACH7UScc32nosY681r8m9dC8zXEHec478bMjC6CjAXNJuqMwYmbdAR8iL328g",
  "key14": "5hGnTegDBCV8bWKC3UH1EdNYngdNzCx2wYvfBpXiknQ8orx3wA1HLj6gqMm8WCZR4buseHLxiphRjzLdBGPe4jZg",
  "key15": "2rEzuLLdQcYnAMUNcL57fHBxRSFU8Wyb9gnctbBd6WANVQn8hveR7H4m4asfVezoECEQB8ykc3fHExkL7KT382Un",
  "key16": "ZA4EsWRtBziUdLC6fEodFMWDawH5MxPWc8BffQL525xQA9Q77qa4PECDJ3sE1tFAhxpnjC8PHvwVjAADWZEiPf4",
  "key17": "3djTmQv5q2wdZ99v8M12VsMiZKyyupCMBN4eY51kUKVTuAj6P5VqtUaeuYAA9ven8XPEFWMTsiDhEvwJmrjF3vzR",
  "key18": "4vdtCaZ7Hqz18kiFAwG1u8nXXEqupQSNEnin1DbUXq47ziZMududXzGz9DnfKhwT9r2nUAQGNhSa1Ch6g63qJQzV",
  "key19": "5SpY835rJBPQBB7M2WdNGDvmS1dQEPbZgjvRNKvYcKESNKZgGuwUiTY4Fdjyrfj9S7U4r9cDnh7m2ct5cH6RRujJ",
  "key20": "2WUvJPRJH1RjyT2YQZgsDi3nqnMA7aqPkw7QXm9B87zUajNaJ13jGg6SY9b4n5Muy4Wn5XpqNMAiQjYWHYWbe7Xn",
  "key21": "1WnsyuoEGaJGRZ4j3WQ3ERx9UypY8vZqpmFTMGn4Y1tB5xBbRp7y1dkQXWcb6nVP9WJHiLHgfmGYttrZNXrGbG9",
  "key22": "2qbMAPBGGiiMCaDRwt49yxdwLt9Dnn7X53GpESkcBEqmvpvLZTQVipgURgbHNAZGRvCWqueAsvkijfLJNTkaVPNj",
  "key23": "56qA7uiHZBgJUB2KDhgherwyKvfJyvtg3GuCTKUz9QrvhpdFhqWeoMLrqTng9tLj7aC174fmjwwSnLjuAtWNXjMB",
  "key24": "37yiHdvuAbigffUFSKKtrkp2A64Yy9VQkb3E6jkFnGm5CqwXGBdJTPp3YFj9ienVoZXs4E358oxvtArRAAWcUC93",
  "key25": "4fyoXbh53VddHBqZKedSCnir8gSBwRpeaUaLjuKCXMURLjkoteTof8LkLuiykyN4AQMqeWJ6yyXtfhTcRkTjHKDY",
  "key26": "3oqwByTz7uGDvDzFrXxLMUba7Emrx5rHdWYH23Nf9TEmQ2EK3y4PzTTUYTps8KCrsHh6nxTme4ncu9ege61av5J1",
  "key27": "2vuaQkj85MYcF26MDsBwSjsmycvjRUpjDWTidyRHeCQzXzBCvdM5cUKndyLvhp2qka39Bh5eJUjZ5qwdbhqXu2ts",
  "key28": "5Sc6oZumvSJQtszNzGu1rTNfP6r3TRankqX11PFq26qQY4DsKk2QZdRm56Kq1sdncTehdTreUXNSkf3cVz5yCGqz",
  "key29": "3hrCYtYHceL2yBE7khTbnEg4V34bduTB2QZBbFMUQdEV4hKS2hJWQ7FwQhBFFEF89AsiY9e1HFVHuvLKcMhMSSA4",
  "key30": "4kk6TpAau2bU5YEd8QKQaymeiGzmm7nLvDtcJhxGrJBaZp14PC3Qgdon3HNZEmMdJYoQ8Epysn71YdSBJe8UTFaZ",
  "key31": "4RrnbZFz6b2MTLi5esf2RdNCQwmLu38m5RbBqLE7UYJCtXghuyZonGPyxCj6tjwkdvdumst5pdYSSTq5sTzLdXsX",
  "key32": "4bSkW1Uw6VoAButmUQ8yxCnAgmXHo9ZnG7wttuRh1NuXHxk25WH2jSjkouJEz3ss3uGn5TpFJfZLCEejoU6RwW8B",
  "key33": "cWqHkNFtvHvPSine5dkncMXrce97Ni2PzASzj9x2vcuHQAyZqDeHANGLdb7iBztgwzY4zorrs1eLXUtUx9AmH9z",
  "key34": "4jNCjGziSCidt23NjHxTZ7GCC5XRwKPSZpe1T3fYPJSBKHVraTbghx7ma8MYnXEyzVD8mPzT7E51KkMjZdGYitiy",
  "key35": "33iXTKsnjyBn6bCfTYe2VPfZVUghfhvdMua3JXvKVEHYftVNAVzP5frYfFQjnnyu6XtRXM5LJdZgCBGPM7zQcSUX",
  "key36": "4x69Uqhws2G41gwS7YAxZNtdsa82ui4XgjdXnJzE3tCqT49Qf2c5wWv7gGoFEUuxqCocWQKfGVppgYcA7GYdm9E",
  "key37": "4AwW7DKsuFivTZu1sfX1owqCTp7BrQy8EncK4qvUVPUZbmuCDNq1q8J59d4Smg4zVz8U65uuuXsW2Hr36WT2nSK5",
  "key38": "5MzEsSR6TKG54z7yKJqq1eUwWDV5mALQ7zYGdJAJVvodBmmDycWou3s6fuLRgw2WMJDLJduFfXZSw2SSUZ1dKB3Y",
  "key39": "2bKdejQ48mwqeYhSPNr97zH3EvBLQenxqsBW2vh8jhQ3km3BrLkdDvhBtQpBCKcazrPpyxW6mad3faUrkR2xbW5Z",
  "key40": "4TwdxdwQQBwMJQ9SFoVcfLSajUih21jR3gJfDPW2BuvyZ1bTMhRdLrHVukwCt6NmfEXVTFNAggbgUH3KhQ255qUm",
  "key41": "9sJPCrAMcym2jZS4hJPtUEGgnA7VWGNW1dStg5ZNV3RMoa8u2cK4JwPX29NqnaSLU75yXfMZXkPq3yYgL9DKphR",
  "key42": "27PoTrmnessY6GLmExQGjgiD7hV1YEDW9BWNRsTNHXbAyZccW7Sp8rsWxpp4qoMJLtpZpQcf1rEyvec1gvq5QLDb",
  "key43": "mMAPsGXHm3FfEyhW92z1c2eZKUWDruD4Wai5G3TJWE7mJumh2Kqst85HTxQgLf41ykynh37x2U7AfCLcGWS5uG7",
  "key44": "DDq6ev3tZ9eVQsnCQsBktUCYwxguWDr2BYFSVMJemwwmYQzgvqeJcwbaAT8gqt4wPdreuZT5HyobQgY3YRQgQVz"
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
