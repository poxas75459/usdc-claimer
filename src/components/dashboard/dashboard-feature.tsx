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
    "58USrZ5oT63YRaqfbkjAZ16Np3iUoH4gdhb9Rbhy9kMTdotoHeVGRCMZKYNXDDx7tuM3GAFYX3Gg6keERCJBWhQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MLKKbbyoHzR5SVcPZrdT9i98FnpehLTYKTRUDHpH3vQdtWqTxKwQJPBsukecg5kMbT8k4L79CxN4d3kh6h1KWp1",
  "key1": "3TdAbAWXDqcbnY6Di8wfL5kdfbwzgzaB9SULuKa3y3pXcY2Zi1iMGmic7ZJz449Uwssv8nD5veFd9KCGuko4jcnN",
  "key2": "4FbVVKhbPTuET3T4uMfefsRtH3g5DuFDkwAiKJZnbSGtuF2UNWPWwS8btRtVKHzyAxGXWLfRW36sS8y6kQnG4tSm",
  "key3": "4bSMEks56uaD9X84KnkgNTyJEk4PBJvhAQN8GojW8ygjpoMjYGiSp3GkVsiRfoQ522JdVycmqfGXy5vEw7UvTANC",
  "key4": "5tHDNcYfwkAb4BYHiRZkZgj6NdLLehbTtLPFp4fZSXqJBhts3A3jmUJJtF2rg6vafbSEgvZFWaPW88Aez3px82PS",
  "key5": "4xUwDt64XGVBwBRg5nBRfFDKMDPwhbK5yicqE8vdgnfbhekXjU5g6y222TQ9As3UX8bjHfoezPD2uJijCRZR4wEe",
  "key6": "2hFSUSvU7FB4i3e1WRW6PhrFuvsTgrzu6evkSQq5uyiF4nEBwV5Rw8FnLR4rjhc3Aq3rdKkEaDaBZJLCW2qpT1Wm",
  "key7": "2Ud3EZvQAwfHtKXcN8r7hq5cTVaVfgkY8BCSLQBxE7RLYdvMr5jYqqJaxF7ZzmanY3gKQdL3j7xFgvPyenwxfjUE",
  "key8": "5Kg4D8cWj181MyUbLeVAyQwYXjmXzqfvGbScyxHQH8FLQ9tAWp1p7Q42xkMRUKkiTSXCdxyBNUqezFqSC6AxcFon",
  "key9": "4xdodLkeZRiFVroBNNjMa7DCbD593goiG3zmNfiF3ssuR33eX6MsVrG3PVDeqvxtY1k7mDjYqrnDV7Rqos6PQBxq",
  "key10": "64eHiswr5bUhqeKS7RCsE88jpY3jeYt3k29z5aUU3y95F7KQ4nPYQD3fyfMdhiQNN1HPPXCqc9P7GMfJvDHMnsvr",
  "key11": "5Wm6muYUp17TTtFM5iQCtZDUcKB7eGLSSuX8rrQqhH2UjEh3KcsQcMhLe22Qd58EeCHLYfGtQf5q3pUd1xVURagB",
  "key12": "4GzuU4FFbAFdRyMsNEMSzGTN8eBgc7TpwbetV39f4TWk5JKTWX8Z94PsDSXoJ9zAdwSDZwQotrWqnsnLCd5Lqs3Z",
  "key13": "3i5jewgXBokGpfwgi9bGAHUZ6AGmeBXsYXRppWjowGEnv6esMzKvMw9CmSNNYobDPymVTcVsMfMmnDGDnHjpeng5",
  "key14": "2ba4w1ZxARjhtfZjNeGwG6vaHc22kCKJc2k3Q4GrMNjFnPCTV2uF958mVVvAR37f3M3TtezQB3hy2PVu1rSsUCRD",
  "key15": "5ioXFTRTtKuHXJp3v4R8DARKj7xSKGxWrKKr9qBDNcCwWN2Uie597cDGuuiFzNWaVActKjFd7k5Mfb28EXo9Ndhy",
  "key16": "2xWN3C2nzqykcddzvLVD8ubNhkPpPjtc7YzgF3skrNe5EJYGZuJZZMrjyBCsA7x8qtk8ePeh2BUNaTKfLmrPATnJ",
  "key17": "5uAgBNCjg3WiLqZyDEQTzdNhCb4YJu6VKnz8EMLiSuJoon6EvcEfhEbUN5VjsvJbogkDL9ZH6iFCZ3WKWt9aPmzt",
  "key18": "4TG96CvgwjWSzsKKdUUkmsMGX14tinPwzhEmc9RSPP39qt4Q6aMYhBeTMSMALAj8HQmv2oZEv9FsLnNyievBsSjk",
  "key19": "4zktWP5mwsTCx5SUob5scyKVL6k4t6MrzdGhAqqwb83gfWpYcKe1SYUpjThupbEkgCipLMTDitthkKdgHG6yoMBF",
  "key20": "2nJi5kExUYHT5QhNZgKAmbcKqURYXzVmb8ETY3RNEdC1rUc3RLNVWusw2ZTxQbkY6i3oqfvQ8JuQYN9VwgodzEkj",
  "key21": "5ESzjxh7VFrmgi2iTJupuPiAVmVw6wMHKdgM61QtxSG38Jae8nB3yVNQtBn455YaPoHa5c4S2S1ZYuytpb2kNWH1",
  "key22": "Wpun54wt6GK4t8jNWQpkCcN81mgr6VkP8mcmtEcSyUZHESQET5gsTFxZVHTzyNzahzSBiXMMxmvhSFRCX2FfHm2",
  "key23": "3MZ98Q31g6hVM7mXgBNTwEqkrg84oLhVucoAnYBrK9ksYaCzbZuahocsAaVpNtkpq1JjHGiwjhYh8awtFdNUjpGM",
  "key24": "4fazfQhsu9XxmERPADB5zjDzAHrWvCEbCPPxLkFsEsViuXef4KXkj249cfdb7bqBqcqWAxycyJZpKRvRff1raKi3",
  "key25": "5cpofg3xfmtCpkVRYAXZVrLkHva2Y6A1P3kXXmkjRkam5c7mNNgHjC2FDtX1LYTHFJmmax2LVagKKQbvzf1hvJsG",
  "key26": "EhZ8ifVoiyTWQ8jFtmp1Tq3bAocnUDcUtNkTmtw8E7gq4ucQvc9qVp6SX6SUrbyFDRsTXXvQacVHfZge7Bh7uwc",
  "key27": "4AN6AdmyKPSUaBW9yTVa8gjMYCkqwqDfrcY48vxp1Fos7kN4X1ucyhXjmYdkqrvq5NpUU7UU971q87g6x67anu5Q",
  "key28": "2guAnWTvhgTdSqixpH3eLinLXLsd5m4S9zdUFfFXEt7Sq6XjFTv7qrXe8iugTA5MnXL4F8a369CHQtfrLjFtSQov",
  "key29": "kDjXNubZEsZqv6mgcuAtKd8RdorsM23Zr34xXseBuaHkdt7UwsmGZkhadC2YjkY6jZZJLsfM7wCdpGXKCZMQTbX",
  "key30": "63jfL73VtXXqMXZn5ZHG8DchjhhMSXGHzui6Rtk28vnS14pWGEDQn7H28xBXccgaPWpe7j5XPiMwXjsYyomVNkg4",
  "key31": "4Kb99B3gWKeUbCPRvnwme1QJRq4F3ktmxjctNnyrueiN5R8BZz8EcUUuyDPxGCBNJRV6X3n6oEpd5RT9wCT9vZgR",
  "key32": "4kcXB9qS4aCRoZxaUAZXZegtY9SRgzhk2QdD7XV7Uuv5WDoKHUxf4EMZpSq1j7DpqzRCHSum2MMwFmmHru7UX2fX",
  "key33": "4H1zknXF8k61UQTF9wVcoW5hxAqsqhmBq3xLRsuzek4Jmnqci38tgvV48cWo4R18gcAAywJKnobggfbwrq9wjB72",
  "key34": "CCrHADDHNpRroqdqn9NiUJfjGZNSdV1NoD6VJ7vkoVFmUM8YYYqxGoo7XEgAZ7EaWjC4NyJyktm2GixZJ5XPG8X",
  "key35": "4cbrUx9GLJwLuNbhs5C5jJ22jK3QqnGs3ejGjxvAPbugdhHBLFK7bCowhHrE9EaXuL187KdW4UquYYDg17wqWtaV",
  "key36": "TqxxuUMTCCDKEbUsaUuM9vX5z5VsXDUCmuzUx4KrocMjKTMJ64BgdNEcUfLieHxmhntUnQptKvR2DCRFkTfUYC3",
  "key37": "JNjUaCqaAYgyLpZFb85Ds36d2NZuwt1EULhsYnj4fpFvB521jrMQq97uArCeyB5XWw44Dh1GjpWf2a7bFuE1u7r",
  "key38": "UPHesiVrymFpnVcTa8FwsgQS8DnJ1dHCbgSKYBFHctmJyqcxpvrG7wfZJw6UPW5rb6m5YqrvnHsP94QfYuw6Km7",
  "key39": "5wUjeSScm5AauFhHKXemefcZSs4xBB2weKYQEQCX7tN97BssRZ1fGiaLs7jSjBK4Yz4Fg9fGMUAZfRY8fbD3foPm",
  "key40": "BX2d2dbumZB1vPT3zroSfCaUpLHsYUEY5PABqbpZnJ2np5aJm8nyrpvNrqoqczaBPwLYrJuy3oUjTbYt3mdJN5t",
  "key41": "5v3zYPHn86PxhvSpyg99crv6Cep4aqeLj6Ai67HCggc4MnRoh6sKCgX4HG6mtEv1BsrR3vFpagUyu3j7ddrXdgBx"
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
