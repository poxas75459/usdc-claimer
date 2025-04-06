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
    "4zyjvABXFAEbKMKKz9QQdZ5ycsf5ehrfhqG4itnk6aprgd7GuuUq7LLXXZZK3MKqqtK51d8magARWMv1Rwg3W3Bi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TmD4tQWocgMhsg1Ha8a6eUuGUFtr5iULdRAVC5wfDVJnHJxPMRJsJb2cwCDLpBoFgYPcjoWVnPwKFHLMUtuocb2",
  "key1": "5kgjTC4XSibWAFwL82k4LsN63HLGBwZuqWWujhuPiadfhy6TSdCi9HC4dtoSFva3PYv8RFfud6o37eXmqPEbUahH",
  "key2": "2JAia5dmkye6Zs7yrsATpGDQkrZHgv791urc8kUARMX6hYDV52UenJyZ463gfiEV9oSo9CZivdV2QFDwjkucGrLB",
  "key3": "2VWHtNuQfJ5KFjE7NM5XYtwW8QyYMXT6oXtheHe9ZQohqmpR675GdRxkM5N5myYH6Abrj19X7eeKyR6T9F4LHayY",
  "key4": "43ZyEMjKbJQr513ERR9nqMSbTQ1XHuWeai2tWdBV3vbcy7jiKtqpz99JjSWutz4vRmms1hmitB5D7CifGrRLEtqF",
  "key5": "KjtF9xiNLcBojUAz6nNP7AZTaGQKXUN9MvBJBAw1W61fQUeXUhggdDSFVs4aV2jnz5AN1bwvNjthWQx21HJYioB",
  "key6": "4UJ8AH4EvjewtpUjmiTVX7SjMXNXwv7PGrFGWrH7p9BmqMvSni1oGioaG4igXjX6djZCsAtZM9sSxCM8c5nWPqBe",
  "key7": "2L5i8ynmztaAqeX75Zj5s8L51BZNVM5QGmTu9zKo8JpsBwpYxbCNEztUk9p6ZHmLfE9dLyMBrjQjaCGgysEBNR6L",
  "key8": "65csLjUmjkp9qDL3AePE2Wk5bQx68ibjJ3mE9DDLGre7BBk9LVFGEmXnAsHehzaP9qm7EGJQa6YueMhDog5T3qu4",
  "key9": "3yZ9RTqQgxPGgg9cNFPKTwZsJVGstrz4uEgxiUgph3HRdDX6q5tZdRZfwX6uXHjVw9mUqvJAf6K6HBjgzScAQbVj",
  "key10": "3Pbz7SCu5WEFA7oBvDaTLuomL59aeFGrLyoUCZvNNCMMMdJ4TxbXxUxuxuwh4ZoQXRWkGTCWkMFL2HmrLN9xVgKR",
  "key11": "4Ja9RLNfiX7rL95EDGPj16i9sWqunWgCEQJ5FnS9vtca76pfzXFk7qruHCKw7qEMH9nCb3u8iwbU9agSW9xxRNcs",
  "key12": "3XE4dfMfZzp2y4dbj46bqEcvVBBQ2xHMoLRGdkj8LXifQTffCZZYXAKimqceRuanhhuUW9eDcdGcamsc35Xb4pW",
  "key13": "4Sa86SCUZSCiP3w5tsyxqrLTFkgEPZ8L1AoTR4sYzwe8md1ERrF2QaeXL8XC9vL4vDmd9xH18gpycpbNY3Qka3b3",
  "key14": "33EKDGBmukUJSmicrHGAGw2ZHHaUGqV69phnQC6G98YEFdXBfVzHVbmRWuG5ZExrGYBfisavoxQ2AqfNyoqPpfbE",
  "key15": "4baARoxxADwtZiMEgAWS3xJEpMBHzNuXm7EfffbtfV8xgFzAKEuDjZbgVXCWuTWCz2oYpkJsFZPJqVtVagXFyFCH",
  "key16": "3DCKwWF7NRC2BsZrpdPEcF42diYzpysF2huhJRNGoghRKSSY2fzkx9PA96QWb4jQjhLyxmDGjbjzyRTESYdW37Ks",
  "key17": "24SgxizFttdFk5eCg973SMgu4eWBUntteicyTP9xepsD2MwW4PtKFmyM9PvNeWn98zxQ2ZSyFqypwRYFRgBq58Cr",
  "key18": "396oXnbA7Bo1Yzdr6NzLK4cw9NbmFEy84cU5cbGzAV5o8oHroWENdqJb4RCEYWVGGvwMyFpRc7LW4dwKzfrXRGe7",
  "key19": "5F7Nguw7KbKuiSLyZ75NLZiQHovfgb6Gk7rR9d6A9wjDEEocgzEYGeQjNKQq3F4uAhMiBL6kFSV9TY7X5EzWJ6VU",
  "key20": "4eBZDmjypgmgQ9ZxqUV7pZbSs8n2JcC6U25HYM4S7XnVdSMNfpr9edNEp13GrUSz7GgZriU9SgPLcHrWXSuYCdNo",
  "key21": "5WMfH8BrNUGboeoGrBCiRa46QZ54Qjk2tumc4QBbmhuwUCNQ666VroUCSkhrL1yLx35zNPnQG8MzduYsvAsAgdsM",
  "key22": "5SfFE8QgJb5TFHHq1aJRTM4f3f9oFKRKDq2jrSAqqsGpS3cUGk4XZZJVZwwry345FbbPjnZ2YJeWsjQ8euBYwoM6",
  "key23": "5jiw45ub41qg15zS7VcL8jasEqVus2FQzspGmgvVhSYRSLBzDtneHtVfmjDc5MTeq41VcYSKyJTygJVuhQmyGFbW",
  "key24": "JRDe2dQQVMtW4QEvUvvN8v9JJLzagWC6CbBncNjA4GoDSii3NYxG4dFzSJy9UJfa5KD9kpcxqhgRDNPFv8vZhwo",
  "key25": "5yXuZi73njKoop2Wor9gKYnwvWQj6pPRS1VMWqy5d1Sh4xe9UdDxQCkiwDqFQHn3Z6xr1TrNaZut4c2tmn9bQiKw",
  "key26": "3jGKuSARg6GWwu7ifYQfW6ey9VB2zWTFusdrN3WNTgne9XwGtX4UndCj48FKTJNrGS8FUW3tCYYWjnjD8Xrmu3Cd",
  "key27": "56yvjNZB82obHxXp7NpdKUeF4JWeQ8Sau4NqDKJnHn7AxcPmEQPF7iguRRKESNy7JF3F91oy7MQjgWNG5uJAqb9V",
  "key28": "LYLauNoSrSbCjgcgEtkHBuV7dDn76cFn5eYMFXpuveHwj7XYtFnckpTDbwYSYJeyxqXvaHywDKZpSPTmhYXstbz",
  "key29": "5jLRRhpNfmo2gh9E2yPg4iYFFtMPXN18iX2EbeMpnEavvTyCbfz6CksaJcaVrarWgmT9cRFvjV1yy362sK7PQRwD",
  "key30": "5VGMZAQjzueWdCff9E75W661QTwtQdCWKPivdEYvEAmUzqfbqWmCPuuTvjAUqP268uvskn9Hj7EGYr6daDZHNSuV",
  "key31": "2M15akVGEyM5qDsXuVSuixhgbpxiXq9etfHbGqvYwNsX1yZrrQX4ottYg3YxaaNRKy8a4Y7FLVUTAowb3UbPiz56",
  "key32": "4zTfgTpePg3kbhXKEa7YDiUgCVhPLS5UrrjbBqB6fDFZzUnaFAwiKPb8pUa1PjPmu4cArW65HpeNv7UZK3chDTh6",
  "key33": "n8Gi514u4yyWxGrM5TMcAoWpRccRs3GUpjCh3HSfCXVkYHc8GEddFTLT3Sz1QVxVdRvvLnD56HHwfy5meurWRP5",
  "key34": "4XuBVKpnPFqGRBs3fMvDju4pPoafnCh2Ddyh8P44a9nznm5n3n7GBWPeiSS5cPkZiVLQfTBiCMRDC7CqS3SMN6PD",
  "key35": "2xrgM6fjTUYfGv4R7JRFUWZuh5QTEoZ8GksBwsfVuPqT4str3gAJUxgwqZbAvcQz7JkyCAnUvc5Sw7YBhq6BKp9t",
  "key36": "3Hmuc8GjKQnJWSrzbdhuEMqL2DKpUvmCfJVJJQU9BeQTAuczn4FsQjXSsNuXxZWm9MoxWmA7k5R3txbsS8nUEbDG",
  "key37": "5YJ8dWkRagRqgu8PMivLcMmJX4tsTRnvoEiHYpMurGcJPif72dLJZUSp8rRKWU2J38izKcosjFAyzAL4PbCBVsXc",
  "key38": "2eQAfi6X8o2fjhhuEMhisfLpvzKNsNrvvy6eCnYT3FGhZQ9Tf8DAwFzVxTjMJtbrLkAz8HSjyKywpxybNTNtiJ3v"
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
