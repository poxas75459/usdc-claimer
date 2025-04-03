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
    "2MCsZjT2uGPAdstGZxSER9KuPedz7QgLtwgnWG9mu9LjL9rgTyAqS4Nn1W3dEM2tJWAA5fPhfk1hcGozWE13W34R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R5sK7qnzmV1nZucQVAUjhJdwjJnusfhsgzHesoVuMpSSNgyXefsy2SASSn1RCJGAaM3ntReGxY4ttTAneZaAx1o",
  "key1": "2iNUMKMBKhVSP82aYZ8nnXMb5z1TAeeZrn6nMX2cYquBREnjdXYEckHmuJEHsc4K8H4jo5JouWhFjYhtFvtEQdaT",
  "key2": "3Rv8KP2ECcPP6YjMskoBVcGEctF6ZzhgcCMxx2nbRmvVW681HifR8JMwnUJZFs5X5LxuTYvqzQPnbx7VwhzPKEMh",
  "key3": "3kh9EVE7BypdKApAb4LwKmkEnhuHMewSw8jPzV989UppFTFnxqUSQDM5mda2DVzAFdb38ADubRPRiGPrMn5eBZDG",
  "key4": "5jdQyZCqEZqk2G3tXh55V3Ppokpkv9nRhQ3ekggS4fm7RpGJ81WQwWUS3ntdxyq4M8UeaaPvd1uGhopS9EdHAg6W",
  "key5": "42N4wgP9qrtCA872kbyvMH6c2Zn3YwZs3HyXQ5ucSd1jzAwxtPXJrEUmZhdKkDLm378q7m5TnyfAELaoEMpGk84b",
  "key6": "4JdGyNxGKVTfz3wdKBSuyPujubWyawD6joiYb6246KANAJNHFJi6eGf94MH1sRYTrGuh1g7zrMcVnJ4HrssGkArw",
  "key7": "33jdN5qYkkTMEKGFb6JTEvBKdpr528N1tTWuLJ4n1bYhchab413WrertbqmKPi8ecmtMDwF1NbjjgqH23uhT4WZd",
  "key8": "3qw7uk1Wjc57V2Kshyy7vkqKZmiwUSXdSnsHxysRNJGGRqewarKE4qt1yf6yYexBcw5gdNzsnM7A8esRPbUQbMSu",
  "key9": "27GwgbXxvH51WMyN3jduuh9rZLXfGiTZiP1RX3TH4omc82vkNUC3Tmpa7PY2JcBbtJtuupYx47y3CwPg12jgF6hq",
  "key10": "5oGi8yVq6Y1LP5NUjEHYvXePuny7Rk3rWqxu8JBLfduKwgGHqQzLjhb1e5qAepNBzZE2hAy73EEWUoDCPTLg2JsP",
  "key11": "5LPhQ5hJbHhg95p9n7pHuTZfGyKzD8ywmmafeBEDebjJcYbyCmWM5yrnENtiLFgBWDjDVe6upy5Z8H1EEvDsofQ8",
  "key12": "2vKmVfSeZBWnGPPk6Lg4DswJ24kwLR59AnY3TZYgGvYTa8GG7d8FZXW4E7X5Er6hyh3cQW5r7KsFjUG7R4jm5j9T",
  "key13": "4N6iB4RkJqWrPkCYFt7Gb6tSH4xjLYDfpyrjyxg5NpKCvype1sm2cRnNQpfaFkoG8q4rxJAcopsrSQ1fiimP75um",
  "key14": "2jkzjm898bniW3DrrVjPNNbKmoSN5GPpoQmwnVYpPyJWfo7XhapZbVudczWNNVXfZVDUX37x3vJk9rdsBVsXdFYM",
  "key15": "4NsxuQW8ZoTyniNY5cvHiW9NmjvTnVXcfU1M9Fzk4sChR4t4d79TaYXrkrK6GpisQYSYGZSu2Fqn6yZSEx4xQB3u",
  "key16": "4mcJA41n7HhBwXsjEJPurNCn1fAsHCkbh7gbWAkca2G66msyseadrhJi4MMmDEo2kgUnCmQFH54DXmBxR9Xu8mxe",
  "key17": "7pNf11BQvVy9toL2BDStdMooCDPyBQLfNkNTTMr3UT4A6P1RFdCYN39Wq2nBNgEBBG2nmzn9MQ2oxKH1XSNyWGZ",
  "key18": "2Vdd3ZcBToGFYjPU9NSPw2UUVkN5aUm9PEn4yY3etPTfMPcuFfJkWFtXsCZB7HsbbDEYRrjpWJfe7hwPSCrHGFde",
  "key19": "5XuFocmxgwjW2AjRySx35U87L4reW5eJWYFLTtWeJ7hMT9SsLqKJFJxTDN8gyDa8HAavSrZ8Q8FNbLPjJFuEH5Er",
  "key20": "65MhJxhKYbMfQQq9shoZXXE4uegwqYdD36ovz8RADrCkrxS5TQU7SyRkyXGPTxW6Bt5CYf2yGAaFpcZesofAaW51",
  "key21": "4DeKyFynsG8USq4yvtjo2FuLSrUGsGtXZuGEr6qZTEYJde76NS2GHxNxWzN1ScguZkcRwfko74ZjRo5XWKossMAD",
  "key22": "2EbEvtYCbkcvAFJLKv7FW3oW3VWq7H1fvrm9YpzQMFeYxP5jR4io7BvfajKaP8uC8QHUT5fYEfmp6cS7agqEgvNz",
  "key23": "5SoHJsnZaS77gJqYe6qePE6xv3TrX8nTzUVHxpcXZXFSYjwXdrizscxK2yJ4YLqCtj14SYzHwA6gTAhy3KNTwp43",
  "key24": "5zh4riPpLD7ejgWVgxgCbwXCXiEvYB6NJKBciDc8Z3ayS85Hfb1TFVgTG5PGL3BMSjnK2a8bRSnWkqz7qn82hDze",
  "key25": "43nSxh1XrWG864EbgSaosrPSJoJtU3CYvLg8mCyfgEAuWgfQe3zQwZRWqFBkPZBsdqy2tT1EjJ2Z5YCHsSMLXZKr",
  "key26": "4FSV9bUCk9Ygh1W3St4GrGX5FMNZzDeWJ1X8ygHQm2a1p5YxwTAXfKeK9gAVWA46sU8KC3FwVUoFPa82NoiMAmnY",
  "key27": "2qAm3b6df45ULaBhBrPrF8nNB8BBU19A4XTGPLQdkYUQCriPzPQ3Ufn32dWBkzJjGobJFnuoFVcxXUZjN8UW2SqY",
  "key28": "4ZNq9YXqVz6rjtKDkT52FJ1aEEdm6q8PGutH68VnDrzdy4tN7baZ6wy3xdXPe1wLyNrfZXHetB4KHWS6yDGuWfKM",
  "key29": "6213SLMKFrbkgDU3qpFLcEf8ahW6HCm3N9Fw5M3RxXDQ2LcopzpSWKgVtiQ5cvzTFm237Ju3MeDxkFSChfq7pmQS",
  "key30": "2vhUjnBGGxNk7FC2CXLnqSZF826HE26bQaK86ewJ2jVnuGe1PA97EJ2TEHfKEQUy9Bb2Uubgm9SwP8nKb7iADGAC",
  "key31": "2HFHdS7rJYnKLjkgjKPDrDmfqobJxVQ19hQK27psmRRFpYdVVSrcASasZoCt7KVhv6Hq3UvY9XWwByhsEvvjPq1F",
  "key32": "3SdViUiQL4AXj1ab2v2CaSGtfgc2mMzZDsa6gX2Abf8ACbWcbYtE4wws7awLFnFYNqvMCdJLFBrc47sjM2t3QJY",
  "key33": "4iz9p6aPyTMzETTKfEbtMvqj7452ssfM5gCjvqh6vE8Y6L5XcfMGzs35oEUwCPvM8a4ZGrZ4mFAGTvgmQyTa1BRB",
  "key34": "4QqsnrD8YoyLyYsWC8P4CWFKidpdupHcheA8fEror5FZWRiCq7UbNzUUtZuR9jX8Pjhyd6LSpnJsxaLo8KZo3gbG",
  "key35": "2Bb3VfMLBg8ow3JheEbrE1wEmuC5z2Zgx6FsYVQjYdNx7Y8fdN4p2hsEh2T5yXh537CEg1LXYvG1T8mbJr5Dath7",
  "key36": "5XgjMJBes6uzwKyizUr23SyQGugSEHmtmtmmNsHuhqB2ueDMw6ZS8v2wH4hufR9q1Z4jJ3NdV1zngFfLuJsUoLDt",
  "key37": "4MvDVadY35zVHrnmqmY3aqLsyG9oeKdbZjmcTs5AXa36MFWBsUCmKUbgmJ9Urpvy269icMKJUDRNtCWAtiHLbP4w",
  "key38": "43Uv7v8HN5YGVCjA25usDAoFS55abfC3sywpetUF5fJKeBc9meo8FgdHemDe5VksR3EEuGYXjmZxVDYo2MvmYe6J",
  "key39": "aLyRqf3jWUVuQp135ayjTczyeQ3KJfVT81fVf6iqeZpdMwuUZCyPdXh8C6toSFVss2WrAcYKpksarqFuqwVwADQ",
  "key40": "5NTf7S9wX6xZFPS5hm4YNbjgUdWd6h1dY4GsbyQ4RYedu7sXzM819cqRvtsoDbeng8j2EgH99RfvFEkRRyX8dVga",
  "key41": "5gpMNLjgqGxJhqqaT5dAoQnHyyVPpyyeNguFEiRDU3WVWJsjgJbFWgEbqqUFYBjBMEAF8jdhz6r83L4STY7VDfWC",
  "key42": "CJKuRDs6xH5WNCsSepsABCoHqBv1ebQsja5HwQTmb38SSqqR3tyET2PxCFRHMbEq82iyn6crXfvahyeThBEqJM8",
  "key43": "2NPyG7zduArBcGUpY3SM4DQ2UyTLCQGa6g1Xx8Ui88Qft4zuqEzTFEjW2t3qo6RPujcrHasWiXAFGeugWNjNDBxe",
  "key44": "5bVYiKmjrmkjsxsCQWksFTBXZLeaPBaE32dya7PArMwjuxf8aPPokzo2a9nSFTaudSe32SWej1gePUAFDXDPauwC"
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
