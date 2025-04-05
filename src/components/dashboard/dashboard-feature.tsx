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
    "3Y3RR5N8jVcAXFrLXqqGRKMtxUit5UFxvP7xNu4mChZ6AoDd7GaDapuFQgMA7827mzxz3bJ8o3NEWpQPbh6wttSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4puDNFghaQ7EJyybbXiZT7PhzLHZkYsLNQkwByXnZ3EG4DHR9bswhR3m9gnNQstQvuwVSZiqFaMYQiwZycgrrgfa",
  "key1": "4kMermjkbcRtv4uXEJcgvN7RohoovNY5SA1RadknH719NYfmrwW85Hmuy8wFDmcGfHTfTiRRHJfdxWTCvSu49BCB",
  "key2": "5TzfbxTFzuxSBSNkkiPYHL57zF6sCpfqtsE1ZGTx7rRjoSx1s4KdDyTfJdjSJFGo6vuC4YdXL7mugUmshERAFYPr",
  "key3": "2p4pDyN7U39Gp1NnbuTGbBjy1LbhAjjsb9iJZWHqq52gjEs5ffKWMi3eMTX1nyUvKEGu9uiNw17jS6ouNJ7DEhZ7",
  "key4": "58mpSsGN41U8gxfyvTC23VxxktdfbBp1n9tGWeEEsBmjWip6w5UbwZzZdFGr5Ycic7tWkRZk93AE7NSVw9kyC23Q",
  "key5": "5hNNagA9cCRSm9ZpcnxamSL619op135xfjLCwvPpnd6JcoFkvQ6StpXaEwaGfyDSShBJB5kDq9kAnmrrkxFjXZQ6",
  "key6": "4CCDyWaHnp6r8Yn48AVcXJh4KFFzHBuQKbDgwUDwPC2M7SwoAN4cdTokoFc9bJPtPcYYytRs89smmLfeKXgb3qVb",
  "key7": "3ZuoaXhuAwVXwKUPwutfreQdexsfoZ6EydZcZSS2mv1WNQDDJeyTsYdCE1gVa3LGz9TDtHQxEnURSWQGExs5p842",
  "key8": "41yyFYG7fVEErQbkXLCJ5KUjCCL2jc87tAFzdMWw2UdkomMNddhtPsBJDQJeqCW9126aKBBu7PgFeQkEYqsKVtFQ",
  "key9": "jeZG5k87uCTPQwr4AhA5gajGNo5A51CwXGyfnDuR6i5xHEncf1Q46eYrZDvHkdthvcqU5fKxj2feYpevBT3sXUG",
  "key10": "hW3fZWQgF9g5yQXJCsRmxiDNV7g4EWJ7PkL6siKxq4kLYirZ1X8e2aXcvRyPYdUxeCovMQuRu4RFsGLB3NauLes",
  "key11": "4HyU59DhPyM8ZB5t5nQtoZkFVKsWpigi6ReQPGC5FD9QiM7PKbBwvkTWc3WdJkVepwPvPotzkx9bMryyGZFmZwnM",
  "key12": "5E2DixagukWHcZ38CRDc7wMKLwwYzKNzvpR1cN6SiGLxZo3MibVSmHK42iwyj9idM2BiWMsWbJaouVEzLeYih2Bm",
  "key13": "THd1g7daGtHqUNyRupGZtPQtQ5c6tYXnK26md2d29xHzew2sMDv6rLqRaE2C2cjt8veYUURF1u8uNZz3Vv8fnFn",
  "key14": "2NebfHZXWTfi95QjT66Zkae2QhMgB41YsAYHucZQYbc2QA9eWZkx5dySGprLYrMXq4GcFSmzcvvoX6RnpW5u2SnB",
  "key15": "2ru1vdwG6XX4AMSQ1APptM63GBRxb3TVwvqBHzVLcJ6q6x7Byx6oY5kqBDeTEaKnefsYRZLm7S6uur2i2YjSScLD",
  "key16": "3vLSieW2EhR2Ph8RKS6henazjSvaUSywT6H3tfdSQeQyRXdBbd4wXkCC7qX8rRHuQEJJTidSqAtz3xPhbiJaTvQF",
  "key17": "Jj92QeFwSrWWvrGJEruiFmi5PJhucrTE5gSNqR22ZKtMx85XqHDUHU3jBHGYeBiixqXnYhmEMi39dCFvhMM6JCf",
  "key18": "26X4kWYYavdJnFm1zB1iVkrp7qJL175avBobfPVS21ZyZx9SbrbeRryetSCuT2yKiMUxqm1FTGeebWpRgX9B1nFV",
  "key19": "5LNp2iP33aBNT1ZAfaKuSgHamevQxZ6QeF177mqNuzWxcNcsLthUCeefSUhAGpaGEx9JocD2ERToh42K2VbH3Cch",
  "key20": "4ugtiTb92emEmpjVDzW2f3tWiczogUxq1hjGvq74cp63s9RRT6hwLQ89WFmByXog6FZGqLpVdAMFeAVkXkyJxAj5",
  "key21": "38k7Pkqjwx6r9FmDV98eYrMVQ1oqCoTk6rwSiZkjyXthgKvvbU427YNcTePhj4A7noHUgn3BZNDNZkoSfd3hRmfs",
  "key22": "2L86UjdeENdGhHd291mnJHWLA6QBkej97zAMbLU2tBPDG7oSQY58gtxZUBsXQbz6hzzk5mdkJemAsnTrSD2XKbAp",
  "key23": "Q9PBsT3bTdy2B4cQUz9p94q3ujwJpsg5iQnfJ1dCHETGBqjkrWPz71v1Zoj3KJmiVpf2enfEQcyjRJJqjcKnhFa",
  "key24": "63ksMhQvE5ZqPYVqdTXbxcekxxLxdKRBNxhMrbfZqSCEBpRrVL7tW9SLVs86c6Ui2aGmCy2pJHaLp9HvQ1qSc1cK",
  "key25": "4PtPV6YotP9Q6YfrUrypg2UQpsVv5YxpSf9ouioVV5UrT2PRc2DpfcLPy9ymwR64b2wnbjKUEbBvAVrsEjAFT466",
  "key26": "ugd2TpEAo6TqsR1nS49gr4WFxLHP1bYdwRFcSGCwu5NMr2kASLsaWuyknbndqFcRjvaDViY1k8KLoZvh3httCMt",
  "key27": "3qYB1HZmrRo31C1Gg6rxCAtuupBsN7sUekMZqURnjFAyY6PnE9q6HAJndGyWtckg8bsRwfnyJRLzTFukMVdNomYk",
  "key28": "Rksi4G8Y4VYcTjac8QTsHdTRmMz1uqm5oEvjdX1T68jZHoo17yxWYzEggiUKoVCQ3prxr9UCqauyFQguPnkK1GY",
  "key29": "59Q1VP4fUrwHrHesnQBJGDxHsipySgKw3HAjUpX8zbV145DNUxhkqqcbUTxnE7VcQrAPsA9jdfxN6LLPzPDTU8RD",
  "key30": "4eurPeS5oJB4UyPBtxwaTGursBJgdVZeqDYAxmEaRTLBSbpDh9QexK1trPCgaKN27CveLE4fXzbvBgAowFAm2NkX",
  "key31": "3LAZMCEKrm1X8F2FdK3NJkBxGpkmTUuqpFyrdoFfqbtPDjYc4euXwzSi7xCeLr3Py7QUK9vcuw73y8cZ8KWWJzep",
  "key32": "4RjFPFnWAxL5mAEinbyyQc4M1Le2zT5gZtrSuV77Rg2jDM9hhrAGEzHDv6NUzhVL3WNzzHbZhYX74tSBvCxWSYA9",
  "key33": "4zLiMdiK4FKUYfxK9YvkhyhoZnSvNUX86buZJJvcYJK3qgYH7bh64mEFPUCyGn2XprWF2pPtnxWM5nJouLrraEtD",
  "key34": "31aBZBFurj1V3Z95o3VoWJhSx9M5FbwZ9BayEp1SMSeMvg5Tk4dvUgJ65CieemwLU667aU1VNss3wGRCWkiybqnb",
  "key35": "45x2utjVcFv4aRocr6kBDjrBmtVzLGXc3JNRddgh5V3y6zsSDGSGriDMPqnueCw89Q1uUhVCQiW1C2bap3uD4BUU",
  "key36": "4WEXGjaToB3UygjSUuzf2H32eZcAicPLVuSLHD48Gqjd1yGC4TYMNMQdgc25uw3xbnMvztn3UCGiMk16QS3Rdjcu",
  "key37": "24fJuZvigQCvLz7jQSmgTpqNRdgarUUWubP2ftwLPDY7MjDrQx8Bi1c82MqueubweSeAyDumwJzz4G37Bay6QgQs",
  "key38": "2U74x1dBgAnE981hKq4b7yCHnYNAtxB1MfS1PAYLgUMtrWyhrVVLqhYnXyLFDFcRVW4NvcoVnLonq1FN72SseFBz",
  "key39": "5uG9Kj9VfRsU6xSTm6UZTGfY2Jkr743a5KKK1nwWEUp5ZC8NvUCDgXDpLX1FtLH3LTy94cZkjEznPYuk7DGAuazD"
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
