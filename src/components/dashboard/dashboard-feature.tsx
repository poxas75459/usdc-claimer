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
    "E8AmPpRYpBYQ7qVRx6foYAbN1urHxjRLfdWauNZq5sfgPHXvdwe8v6y5rvq1fVumvNVa9skCoaZZKUrbXzHkuSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nQtLS2uorvyNTh7KtawUpr3mwTuJ3GoShQ18VMAhDkSic1MXYmSbMKv7yrcCZh8UajopaxScGmJMMna8vC6Zrny",
  "key1": "jHpyYmDL8X69ShtnrHuwebsNFJNGBdzvo2HuWHw9w3ML85tGouknavZXeNNajk4XKrwr3hMKuJsQGZDyJai57CN",
  "key2": "5FDhfeDoEJE1NQsw4KuQgKqeH8pE7LEagB73UC1V4yengETW3iQah5ig1M1znp8g9WtiD54HFHejSw6Q7bnFr9F8",
  "key3": "5WXcW5MFsgpXR2h6LzmGDBFaj85fH9mHE7zQMXXA86btz2cigMD68NnfWSohaoAbCwkXkmTRujJx9HaKbDVNetG5",
  "key4": "5g366c7MdduSxv5gfEyWB1kDmXbCRuM9VQyXCtJtnByBYqhXw9Kr5jipR8fuTuZHkxaXXXsJHy6ELNR79zfZk1g6",
  "key5": "36UcN7u9r3qUiqVc5dGLHQmsEZnDaVfBKwPpBee8HnK7wwxNcqmkrAWSnWpCnGNtQHqXvwwpC4vCUNXyZsGjNYKG",
  "key6": "2zfqgNt4LjFXVphuqRJe5eeSjBNRAgBApDabPZJagtbEL25RqTSn2UQDLSeA1AxMnwDgr9C3ABtQi4JccEMCdpVb",
  "key7": "wqWhTgFQm1VtTNdgiXgTFx7pVvUuJqGG4pyr3QNHikQ4aybTmR1XFinU1qSpyMwhywFZ4JXccBkFrcZ555nFk6L",
  "key8": "2xSofsEC2wE3FrG64w4hbZEAuDTPb9qEEEej2qd176NoE7aJCtZKzzLK7AoRNNSb5jmfsYPNAPADftrCXb4jMArJ",
  "key9": "66QexhPyVb1xrXPVG3qX2W9EZZYCb7ULgwW9tHTuvScCAwonGpDVC3eh1fLJTn6NqPvQjpYG12f8LUZ5x9HCH7g5",
  "key10": "5tc9MS5LpPmmdtZ3R2c7VyEPoGvRSxuvqRJCiq7qGQDzTU64gjtjZgYX3QzTMhALMXXD4u3tbjgMaFD8cCJp6Dhu",
  "key11": "2WzKAARJF3appLyn7bqeHsSiH8V3Bi4PDGjQ4NjvuihF1ZJWQ98b5qyZrpjHLpo7eUo3W16Vs5s2dyoeujn1FjnK",
  "key12": "4JKXZtY4SywY7vRirN9Q7eDcJ16b3FTow2mKmu7SLiEd5E3xCHL4g3iNsrewAKPRpdESquM3fuYZTVWHVmepHwFu",
  "key13": "39PoPVyrREnH8ZbHrBDbgyMWXVyK1xfrjkjUn2xBBKLEXsyqBQKGN5piCrs19d4E5Gce3KYLhBwHRfiejbEKYtgp",
  "key14": "5AibUSj5Qoe8tEpLVYdJdk6zSUubHCFy3FQsajMWCxxp8Rck2HJQqHhMmhzteq1JRn9YujBvwHxm4YyytgPnTHHW",
  "key15": "2s9MmSCawM6sQDmtuipAmqoW7cyqdBgWfaYFtYk7BhZam4voNuKfe7vGteJGwCdwYzKQgJvPHXGHLmoY8ZMBZVff",
  "key16": "3hnRoSLe4BHq3QA1yfLpSmyRQHMAvfUKm6Ey4B7RUWSaYv8hiNL1yb87XVyLiuHwhajL3VnzZN4zKdw84h5yDffp",
  "key17": "57fZkCRjXeGPneemgTiG4tnPsVBgdCQETLLt8RDmY4BBV12f4TSkHYcXJAcsUkJNF7ufRdMPqjwNAugt8ZeMoEnm",
  "key18": "3HoRsLqMPLbMCy1qPZgcYqHFZmy4UAiokNy93LfHyDdaPJCKuvmJ6esTWwfLGt18rzHFLkCnGxYMwXBZBb3tDYaD",
  "key19": "2Y8wxtNBYBx2E3ojv4GUgZuQaAjCKciJm56bopSf2sum8XE45Jo3e13yPdVqm5WPbjhknRNRVNtzEWCQLHxXqyvS",
  "key20": "5X3xMjVCQ7SCx22BBw6SZzFC35AA3ukDw3xC9P9rNctQBtVD9L8V7fXGevB924Y5AAcceVWvDbLGArs9QMSmkoE4",
  "key21": "2ahXWoDRGVHgZQ2iGoSaSwp11A1ZSjTZAU8EHJMu6tfQxNDvqtxDTstVnzmZJCPXZXwqeeDJ9zvqcmbNv6n5NkZH",
  "key22": "4Ch9oKDnrABUbn4ciN7PytcNmAL3QapDe2jwPvZyQBnH6jPbEsxtjAUT3Nnb5rFEfPScXvRu971EcnLwjzvWu5mx",
  "key23": "64gx8w8ofKAnKdWjsV68fiNMYEfed9NDBxqhqg4Qc2gySFX3tzPU6SJcLpBtae1sjLzzSRsKJMnK1fdsyEHhZHqw",
  "key24": "3fpYD8XY2XaMKxsuKt2RYeEVA7o4hAajUmEWmQyaLMNqecDMFAmtNmn3NpbXk5eppKvHbyd4A6Db7s8iYiojcEWo",
  "key25": "5o4RdPFtWwfZYx6MC5wQ4Nh2KmH8a1ES4ekWCe3PwGo254pC8pVZzr3UUKPTWBUAqztYE7vmrG97YHmN1r62d6gs",
  "key26": "Vhj5mepYo2MUhFWr3pr422cPXaWtxQ8WoyRgNoXABRhLLNuWLEpSJY5qHdS8FGfeHrk7XWDaMoSsqntE2kf3Ff7",
  "key27": "3JaqYswtnnhR5XYrzcfXBHuXc1hB41S5E7VEhtDd4z2zQQLe1oBYM6xJBtSUPH4KMYEtJSNamJeiLGVvdUrCpRXq",
  "key28": "4Sk8Pqhsgji4HspQ8ah6wicqCypWWofcpdXRY5WQxhZYV2y9C4V57UPiNwgCfwM1TpZ71hL5FwwGZLTHpKXCHQDR",
  "key29": "4JNUEzra4zpPov5PBreXasjM11ykdBA3kmztGwijWXeDCJF7q6oK4EsmbLB8V5JYSTEM9LFvyV1nhceZbjo8bwdE",
  "key30": "5wbhSbH2d6YX95PSTQnRbZ8iNf3ZJ44Eb5iQuAoVtTM5D1B6KG8hsZ8j2u2THmPkoDwck5FVmRPMH5yH5wF8436Q",
  "key31": "4m58jtXm4B46eu6aGR5QbfqBePeDUd3pFwWJf2PWXayBsFeSK2rpe4wfcq2BFP9g2u5kAQ4o5xW5uTzMqrHTWPqj",
  "key32": "5tn38Ws3VyYPE7723pVjo4135qMDjRS1fNXttcgCQzMut9ae8Ad7gSg32HKPjy6fUDJRezk9NGbw7mWCXDvzDnnm"
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
