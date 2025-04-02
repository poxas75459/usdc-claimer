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
    "2e9u4NvfcPtYz1Z6BjDAKNSRKwrsZZ1dhifpibCe8uwxucsiFnzCvp5ppW6Axg8sPfDCxAbhP6ZJ1AQVwyRgJMKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vJes3qRNygjfpiusGpLetSDgDETMee53FqBfwkesmQg1X9poFwKqcjnykjXQm3tScMMEMcm3FdvwAUrcVbsEJJe",
  "key1": "3C4rzVyh6JTnqpvURicWuMatWmSAQXhw6c4HPSzqik4oEXCqMoweyKCJ9qHPe6EAFw3begAH2tHqgfu96DBiYiPS",
  "key2": "3kDMcDPdSwyree4CT3tKXXe1o3EMD9R4jZRy8qpchnuewew36x3mzKbTqgeakKxwGKBsd6JMmdS5iHdNKqhTFpEt",
  "key3": "36iYF4E5B15hbjzBbDVemRjE5FkMsvBM6HRCdn4vmSyW4JdEa7mkEY1uvKgeBixyXqMhhsygYp2RkUrBeWrsXZ9n",
  "key4": "4wa8pWP6oYoTum1ZpRHKLKNHYULKnJ2FUoWRBdd9voFpaavukxoZXzGapnB4nontp58UpNieaDBy6KGmEX59hHnN",
  "key5": "Ev618huBp4ZJp9mfMZ9xiCsufPEx4r2Qs3rt9Dsu9P2jNL6Emwqtrg5taMc8uWh4SfkvSaY2zMqKr8PUyw4cQWK",
  "key6": "3xnTusMpa75wJ2zmUKZVwnEJHPhVo6ZY8bEyd1ukTmaRko5YKAvU39x7g3WeMGr8UPySKrythLzn33TRRbkS7fJs",
  "key7": "E9ke1nkBZsasWXgBxnU8H4ogrnE3PGqympZPuVXBz1CWA3qDR2vUD2gDfkybCHJNariA8qSerYdUeh5ZPjXthTe",
  "key8": "5Fi7TCknnzMbcP7vECRoBsXxkUpGVKXvVjEoY9u3V2aLkBFWinZZPpzb7KgtwtkxH2QCg4tMBPH5F5DZ43PJdTKh",
  "key9": "5W2Mc1qrXR5jUJxckWoy9sAF3e5WrQnwctxnYgRoPzjiMU9D6XuTqJxEtNC1h9WbgQ2Dh3PTxAjbm7tyA9uU3ycs",
  "key10": "4g6aJsNUWZ5jTUyoHthiMiQFT2rviE7RkXnp1PPuwyaBd3DQcg1mafG197AF71ZYc5APLFD7X4KZjadvWvw2Zvzm",
  "key11": "1DsozApW15JTbccnts5swnk3VuvW9mjoBC9k5wnaBirULXWh5APm5yBNze6Yy9tP6Sri9yyEg988AWmbJ8F7a5f",
  "key12": "4cnQcXrpXtYxRobmcYsEMLCrW4Gi6oaTj3FRHEqizzC72hNWUc2DiyyXXAWtt6WqTxAE6s82iNDUb3Kp3Djzssbm",
  "key13": "216S5duaDopHxZZ4AiewytTAxzbbd2vFYjWzqcq1Rd6r48kzhCRJRYJL1JnVHeoLNnKW2ULec1Pe7gGq6Y9pHhCd",
  "key14": "2YKTNJaqKRCBaMKXCzrERnhgq8zGXQVzEPdYw2uPej3D85PQZx9JsDw3zbrofcQjXfFNVfS1cxMHyEodZUdsQwyh",
  "key15": "4envBi36D4KA9zEKD1ymaX7Yop2b3Jo1TJqse3yxLrfrB38bbZ4AVJ423G7PwSAXE6LhYfBLbxo5zzzTrJyEuX3r",
  "key16": "NQ7GEyUXBotsBZrYbcDqm9FCuPcmVML1LMFLBbPffBjx1V87qonmA6PyLHuLo77ipizTmSpwjzbgxWdvC7ci8ex",
  "key17": "3D2tMPYZS3R6v2SxdkgukDgjaQoiq2ViVrdFzm93hoxPJmYDykfaNYfLT24voSBoqxbetbsrjtJdyWeHGoAwGBoS",
  "key18": "jB81CHCDj59mV2aDrVyGC317G7Due8Bbv6HMMUpGc7CrkBtgydQct6bFAJDRpe1QP8fkug26uwLu6z5kD4e8mzE",
  "key19": "2hMtqxwNeqeVfdoJti5HdKzowqURXZFDFCZE1eQuDidii1r5ZwkGKS2GDDgMBvLbfVv7zoQJhK6mvKC14Ad4zdFM",
  "key20": "5oKk3R1WNkPdEQ34LXN2evhrEYDQiz3tAVkUtqN4HrYuwD5HESUEDQBEddoAcshQJR1ofP6tg2HDAoM7Rfe7VjBy",
  "key21": "3cr8JaGMgxmjrmho23yGdsksa4vBwzuuLAH1ZZWJNHJS1tZ7nXwDRE3EdaSdLkZDXgwME8odx8uEzwkGWS4TMQ2Z",
  "key22": "B7guyrFcn2zaXJsbxYwFFWGVmxgoWChN3Wza5k7gJJtVdcXYuVwpuNvrZQCpaBbtJKhGokVURvsABhpQ8xQ9JPP",
  "key23": "3Cvt91dXbzXViy5pw9wbWGFgdQPBohzxZhAstaMeHen6gzANtkH52BeZBmnwcPcxwdip6X5F4AMo89Pm7UpNpysb",
  "key24": "52HR7DT39KKfgzwfr5zwDtvZhjy3w3FNuW692pWBkZGdrMf627G6jNDw1xLF98zCXNDy2iQAnjrHtzaMXRNjYdTq",
  "key25": "51kPbLnccFBpSKNJrxEEh8uYf1zVDtPn65DKpdjhTLBLwSsHrGn7E6kpXnrk5aegXika5TERxFXnuZ7AxGZDKZxX",
  "key26": "45awuKoitxdk78VSEU7GEvDVNZTGFVa9rQn53xHzUAaufNhXfGXrohzFBUrL8bTPJpz54gbYBWB7qUzoRyLAbaiT",
  "key27": "3fYcBY3dEQwTYcYAASLLwXw1q6UEtEZaKRyAB3i4kbQKQoMR2J3oLfrNvX6pctis1ZDUSx11L2pcxEjXxCWHPRjb",
  "key28": "4foFdYznYUvvGCj5sNfUoJL9GNJhPvNrZNhpHGknGC5P5F36Ktnppkgth68Qd9P8B8WoErrhcApubcUKivDmhH29",
  "key29": "YYCHJV7a9NTBYJijMT6KY3TxHZQNUfTHjtmnAJjXW6GMYRbo8XSVgvLUnPpK3gyT54ANvzZvdWAC6uFpmqG5qDg",
  "key30": "5nJdNumrbYZ5jFo2S2X5cqqRdJJ6H3gUMyPDLJYfRbfPdEoSLxJQ1K91oRwJPnuriMkaopQQr946i3imBrzgqJzF",
  "key31": "93wM2jVycZkjh6v1TN2Ft36moY7SRPHQ68DZAMkSeWJrcZKUBg8qpK3ZgfVSpaitS1Gjtkrv8fuVsUKaTajZN1G",
  "key32": "67ZSKrernjwfAUA347HwFsf7j6z1Y5QAgNT9hZpZzMp1Xg1VnHEC2erkE7LmoeZGaDGrApUfGZ5RajLkxLzWbKjV",
  "key33": "2sJFecpXCZcTn32BmDoEqm7jiRTs1YFCCecSDJf8ULWEH792Q9zXWszXRW2otkqEcqDdH9gmSZC7TWz9CEZcL7qR",
  "key34": "4RzpdTRajyT4RZgLWH76nWhoGMCQXpKSNssUrndbWwNGooRW55cN81yUKYDJJaCF2Gc2MUegr2xUaU5fJqqG4KgD",
  "key35": "4i5i7KqvXjgvMvvvhoQ495oEkaHbpJXXSntq8XjNrWT5bUtLj3fFAm8uBRzWW8MhN83TNRKgRJPbVgfQAHpfnGrZ",
  "key36": "4rYd1L9oyWpAzzsSqpnqzceriZZLwvRd7e8xTk6W5ykH4RFsGGHqeHKnGSRLcBT68ydDtsEHGRhZ3FyH1fiwLFYV",
  "key37": "4pfsm94YyYBCUpbawHFDNXLoj7FFfue6vaqiYZ3u5L4VHi9gjCE4hQRKw4qotkwhLCmGw7disfGcXNsmgYkAM1iv",
  "key38": "5aiJPE3wYZD3QjRxngqS5KowRi9SaSDspih74iR9o6oqGURBafWAihAsFetwrubTR8fsagfdPQJ4ydnmbjUEYnao",
  "key39": "3s8TLBBkRJ8TDGWQVMEzso2FecQLmBkwfWpuDCcGNDb6BmKSt8rjTvVfKa5nxL3Mpz3XG9kYE7cbQZMWba1P4a6H",
  "key40": "2mcSuzgRJ64KnMeT8SA6hs5UhCjZBsXe3a2JVjwCMeTGGZ6QLbsWAmVSaMvpo6K9sZ15nr9xinH1NskCm2gc6g9u",
  "key41": "TnKyiLC1QkEQAGdrZeeh4PTdjKs9pDGodmxLXNYLQnif1VFETJ3ctEXEvoH46c11v1DjfzKgnQkjKYbi78v7vmN",
  "key42": "2o48xYmfW2nRSyMTZnK1ZHCJPydYtQdFbUA3gj3DupfaM7iagcwaWJLFWMVBcapKzuSjjrN33Yn98qqzSXTqwyvR",
  "key43": "2rXQLaCiwdtVwZT7aW6erwZXT1cF7wWKtS9x2FxN2o2hUQbc2bZcxL6BCE9DxRJLiQumaFXrAR8fmBQ3y4LGeWzK",
  "key44": "5AGoAQtkxCjdMvbr5PDunYHFhteRtCvfGRwzBiGuq9Dfu7PPUSvSiTMPzTRSNds5BWxTFnRY5T9SD6rfw9dXs4LH"
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
