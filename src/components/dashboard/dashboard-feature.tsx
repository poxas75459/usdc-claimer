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
    "4puApLUptQo6y3jW4pfRYSZ1FSCwdKrW8uHGheHWn25rMH2SzvsUq6kirVp6xKM7XmYyEaAUEzawekZcqWDewDqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fqieVAaPdBLvf7C7M23ka6eHZWNXToUWh26rpguPH4pY7EneuXhWMiNzcWDTMZ9WK1kmN28rEGVsPefifHcC8An",
  "key1": "5nWFRMNTUtdLeeGqrVDhUrEehqAxz7vmAkXQHs3xobWqQbmpRjgKpxSkGqVnowyWa7c51K436Hj7e5A1FXU2KEvG",
  "key2": "zNR92Z3gp6mHd2TwjGBv9h7o99nevZpV6ZPaSFCHmWEwG6HQ8eYFYqpnaxufzzXZXxtsZPPCqijJqxUucqCnZsr",
  "key3": "xXdwWzgYjFfTR5FWBwgSNYMUDNBpuZbXjUrVUMNhvfthxnwGHZjJzZZX55nDTP3iYcbU6p1dquRjWpAgYfRN7q3",
  "key4": "3NViakcJ7X41GYvEdXWFK8tMwtmoDAJAjgbrV1o41q6fH33Vq4odLhwXmhjBUEaTRQ1pU4udCNh7ddbXqDCR9L9J",
  "key5": "2Hvxc11WmHDNYTLyb81ogJwokD4TVBme3UvS28N2ViMrfceJbQbrLTDYFUfCwz8QBbEGoea9Cxmpo4te6R1Nr84H",
  "key6": "67XdJMKkRstdqLWcdermPMBGAoagznFUqErYaaB7RUX7vzT8hLfwfaa8mgarcsMFjtB1jKYBvfGg3DAR1PMZSBwY",
  "key7": "43HcaA2s5w7WqRfNQ6ND7WTwk9mNRKRVzi2FRh4T6jzVs5eLMunZvWt4mhtWpD8w6RjeiXoUdKcyK77dau3m8wZo",
  "key8": "WNEDGoaauNAZbYvww2r6dnth9HeAEuZ3HJ4k1PeAU92erTDojWJgGG6e5FB8XeboVKqoZCmUgr6cDcRmVpPUTGL",
  "key9": "5HqtW4fvcf7CPSzk7ckQ1vMQadnujpipivau4s5WzxoZERdmrEhTjmnp8sRLg9B19Y2ta53yA5NDmpeNs4Egz8rs",
  "key10": "5a9vWSAfhkJDNQBWm4kKGWHtYYMmJUp7YZUszu3V4mVpZyUJw6zDSqgk3H85K3TVsPbhisZq85s9KcwkHVz1f2RM",
  "key11": "4mH5LthTyk9nu4c7AQUuNiuyBtFr6BUGDe6o55JbwJbceYxCsc3bUdRoteC31rKwSBMntz9cXcMN2VTvQnwntmNV",
  "key12": "4LHAUn3bVzkJfzR8S513Xn8MMjmMziX8hmKzfE6MkL3kKb8NmieVRmNNBCJjPL9shnLR9GJsBB3N8iwxTTd8kJzM",
  "key13": "3nrhEWKVMz2wcVnVj9Xg1cZvyHs2JJqAsdpM8ksbCQUr2MbkuiRiHE4uAZn331m18NWGN4qSv98VobgXEffrhJtL",
  "key14": "5NqjGwurmn1aKLRLJKAbDfogiDZckqZTCqZGDu4vw9RNj8r56WVqDAp83WvaJtQ8cXesKuZuP78zVFPbpsCbTLUT",
  "key15": "363PpUaom8rtKEA25HGU8bLpJrXwWvJyjSCsernNNpPBVJGqCdngnbbFZaWc1FB5UYEsTRPSGxBTAALMCjsfevh6",
  "key16": "2Ei2YmtSnGexPRmb8LuJoBrqbin1vsGctQ2eSgcAjwpX8WWV7dZHai6UY7GYb4kFdLHvKAvKYkgr9725PwxeMKrv",
  "key17": "xEfXmn3SniZcx8J6VxEhxiFAh6vLAc3KfbG5doSHkHZFLCGMevowm9hoLimMrdJqFZCNJWX2wjQsKbzMZeDZyHw",
  "key18": "5VmRTBfRkRhNgZcaTMki6BY4188Mfb7U2vmR4ehrUW8XccVfvmA1mXwpb2Ry3TF1KrMFwDX1S7w1NLTkVyZWb2x1",
  "key19": "3itQwTNjQ7KLfDEhzjrZgxViZYM6iJvtpGoJbVvKuTV4FfdVXtb6FPjvcpYT1qApYUf8Qst1L8V7ik2ayotH2Y7L",
  "key20": "4rFdbusq2HeH7f9mX4NfNr8gAVGizvuFFVSr5TNmLf9RbHWtZAZQqNpFFSLE2WFbF7AekxYrw3nBCZcn4wzFVdmd",
  "key21": "5yDPNjcxWs9MwAchoFJWv5MQKJsRiSUrgx5TpxiKkngygPv1r5bzx4ojUo6MC7jsf4cFdoh83zLATLyBtE31gNq7",
  "key22": "uENyzcEJ1AkKMGdqvPFQjtBuQLmXKmPAbFi7rJ6FbEDHAtabpGhLra7BwpyGUstiZMMaCY8kbWQS8TEKa3psVRR",
  "key23": "6tvh4Y5Y2TELQgo65AaXcTGPHGqwejzey8k2fUGT2Nb4Bsf6uVDyQWYnDvh4HUTrhzQjyNa5HKzTB3RcXcZ5cFr",
  "key24": "LziRrTE7PDMFTmi1ZsCzSbpqTutSMc8vtZPhcqJharmqbKMjDzKNDaSPPJQyuG9NpgA1isDdZMbmdGs6Mb9RzCt",
  "key25": "5S3h6nqwzZAXB6gFNkJH7UsnJ7Pp6XZ6XakFm9FU73hmgQvB5SVgouzpQv6cZRqWGBdQHgKvLJGNTu8mTSCxiWCi",
  "key26": "D7zXjaSUyJhS6mT9DAKKvfpEtMSyeh2jpUMGswHu2FhfCAcEKUUxTM4qFJv8qvdvEJBmEp61L2QQGBHHqsLCZZV",
  "key27": "4kRMP31pv9b82rAW7jiMWiT4W2MmDAZjfQtadjMmq26rzhd8qFf2QTBXBNPLrVbLjqkcacvsSQRUdhjEiBwMgWL4",
  "key28": "7Hgnv2yHLcsowhs94E2yxbSg6YRT1BiWe9nNRmV4CiBh9dF5oDP7uJKe7vinKjyEm8pi7RrsZv5FsPAx615fDrj",
  "key29": "5uJM8kTKTBLX3Xw3nHYA7KmyfCaBgoesKaxp6b4e9PoTRGCsayVeXE9hnkNw9QmyRLK1Q3ZgkEmX2Lnr8EAXrzX8",
  "key30": "43c4PWLsbiKQ1m7D69VCqpgaJtzaDwmWyrJuEmiPaLBaYFce5DWvkdevDiHsQM6S5oz6xST4bACy3mLrBZbSA5uP",
  "key31": "659i7Vi36iFe1hk2tkJFjCNjALysoZ2hip8T84FHwNFr3cfMN9bFDosvyX5vALXqAXh5G3PsiC6vShPQaoUmT7cM",
  "key32": "2atE4YTdGq3ms43ZvnLxK8A1UVLJdDpRe46yHEQvzjpedEHZydHYu9T2gcapHeNbhG8knethvJDnVXzG3mt1fRry",
  "key33": "4j7LaK7m7qWtirzYJ83ATiuDghDSqwsaH7fdmbNrxnd4pqM3J6ZML7aEkpndzCL4UGk6hmkDtKcjAGKdq5mnW6mJ",
  "key34": "5wn5rNetwSNDP7Gh3iVg85ePGTJJX1rn4yTiD89bbQvroWTy2kc8Spzec5HFfexREaGDVKXYTqpHg3UHZ3TPzvQs",
  "key35": "2JBNjft5iwLsfLm6NK81cUXz7CoTkJCjMWpEsvnJGaudTfDeyXdiosoUVUCxpZSmtX9kxGRQ9TaRu5b4LtvyUNZt",
  "key36": "2hCeQekqni1PGKanppBa11dkkHcFrpQHT3LjJUs24sQMpaFsDghCS9do8XrFU1t76CKzXuM4SD7QyXoesBWiLq3K",
  "key37": "2bbY3GndHUYpeGLBaucnLBETzw9uFEFMRMxhZfwuGZzU9H42c4Gn7NJgtqEhpDSYRiqB17sEsV2W8NxDJR7r2QoU",
  "key38": "3neo5C8mMxPy4hfLhv63CSZrrs7J52ZgkKUifoqHawgVNQqX6QcwXUF7ZuYeHrX5VapVVb5zW541b4NXbyWeLtss",
  "key39": "5EWexbQQvR44uoLWDGEU8GVK5mxeuyyjo88moUiHdS7XJu2K59WZm8rqhkFNUwrV6uEJ8wouFHZcUbWj9ccppEvS",
  "key40": "5MmhFPD1cxBZBdDvC4CpjYXVgq5sJXX5h7dSqiMxuQWUUZ5YwyUJBhdfQXqeB7tHSAArufU3FyRsC47cxMWZgQfj"
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
