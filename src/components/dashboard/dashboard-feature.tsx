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
    "6517PRLwMoRLqEJGBJH9GLrjfShQZ7PsyrVuT2YjqaT1iJmicVzkSPieNqUTQspGakvddt9ye2Lh6QmhWaEzCJcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46wxoKePcCUHcFqND8m8YU3dwDzKNPWo75hLCZ3fcmerycfqCcYdQYxfhT3QbvgTQ6TdtXufH7dkocFs283YE1qH",
  "key1": "4tLCLZjLc2EtSj5WWKa4QsKK1xf9Jmowshbr2Gv85X8DPd1GkvBViRajHUMKRBWYQZzJK1zpTZjYo2n7aFeNWdfa",
  "key2": "2LNZdYXGW894rdScsV4qk4ydvBqWgxgM7eVZckZcncU711gZUynKXvb8rBJKbM46aKbaSvz7AKPnmccWKLYMSFij",
  "key3": "pTabTHZNAUcXzR65AvaWMBtZ1swUCkBCMLZ7d6bT5thv8SgZbLFMtQtWUTwXy8cQyVwr1GxuNyAwaa9jLcRda3J",
  "key4": "5HaGzSnk7JyZvnnwK222pzVEipWufNKSNwo1pRpt8ugbwdJhbqDgu1vSZaBLdKy11c1imokz6V5ZppmBCm3bCY5a",
  "key5": "3W6985PgNeGiKHXGG2wZC4AzyVC1aYCkLJ6N1ksrCPcAiCVuadxzDpbHRD72YCkRSj4ENVnTEM6NGu2se2mrUZFe",
  "key6": "55gpqfvch6pa2gTN7RVcWK9gJsFCXG11bScRoGWpCYv1Q9ZDoAcE5UFKnGyqy8CxAHu2m3prMSYThNrvJnTXjsTw",
  "key7": "3VVpowZJEtMNXPkTGVje1LvTkMc9zG2qW1YUcKZLCYYuRGrbYuPrrLYV4Xs1DJUPAZsVWKVH9daxXyFPG8fhFbdt",
  "key8": "2L6CxedZDo5YLFt8oWbSa4s35KsV1LcGE7P9NPjM3T5WzUA5RMzFQWGaoUXVnfRePTeovcrhYdm7p2StGb9mqWAK",
  "key9": "4Uiu7qqpXqeoMXxXrXo7KYWt7SMiVaJ6upLkNrsdrRzr7VgsRtDh7rmUf8BEpMmJjZS62XzXCJ67KGebGrshi8hQ",
  "key10": "3VeQsMjN8ZYc6kpZd52ioF5nYpPRMuHCKUisvsmcSSnjiEa9BaFg1U3n4WJaM2jNoxyVVCR2HZGUyH2HUfUhu2t8",
  "key11": "4tGLAZT1uj7NVGTYPSYqz6zqpQxqSTLLf9s99p1aSi7MmxhkBfTwzXbGkAAkuLXhYnEHZajrmtLdoHKckhwUumrq",
  "key12": "Q7iff7d1PozwbjT9yEq7gYJgFXaR99GVRYNzne4Ss83WyzFKPUk1YGErq5MGybDfBxP7UEThFmWoLmNxC97Fddn",
  "key13": "4EXxbKwm16wr1QP8PnyD14Hrgv22RZ3nLcm8N84MCCWdGJiF5Y4EStY3Kkkz71iNvKDKP7s8tZMyWtELeF4L7R6i",
  "key14": "2VQdD8jwRsSbwRYCM8AE8ytt9d9J2k9CoRsHXySohpS87EfRdiHar3i6BQaLDk1wMk9jh8XUnwdnmdetmhLzvVTy",
  "key15": "2QJmAsV3t8XMV3tVj3j6NFbr8Yh9UwSzp3jV8wThaws7yQUAvRsNUheQfhE8zwtMWMQcBLPm6T5nj8jeBpqsifuQ",
  "key16": "5x6ei6xZLnRKZ5q8zWhD3CMHybsobT4wMgALan2LnzECnmuh2asK5ehWzRAXmopGd6Bw66jGi6W2Nt9GetYaMCUq",
  "key17": "oVSUua3XfHvyneo6a3UagrytwfEvDepgy9cnLuW5FA69AGDtmLRLmT6aY9LXzLgceUqidJctiNVQiP56bG8mGjC",
  "key18": "4abT2mwz4TczDUrsto8L4jBQbHa5AjVegsJ4G74VxWRHE1wM2z3QYz5ENKL4JmnwFgswtihE19iZywTZuMBEo8rh",
  "key19": "3pNTc96BtmALozTnXXTwWj7jkQJr41piNV89xGG1o63vug3b6UKJqPSiRbLVom3g4Y3KwHYgCtHZjUCeSyPTWR64",
  "key20": "vYXigNQiZ4oEkyvs4Vnjhe6kHXRD5xwMRuqbeXLD8vKQTvY84j1aydcsV285612MWNSY5w7aJG91fT5EQRaj7aE",
  "key21": "4ZmhuiVKYtnozEqKheyDfPNHu27JQaMUf6Vo9WrwUJk4RSoGDi6UkHYvYjPKEXd9ohRa8MZ7a7amW5B78rHJii8s",
  "key22": "2CEwWL8c2faXVGkD3zfZLEendAPWqL6NmbRHvFQEgFyVY6ecfjzggAsk3j2V6A718b3v9dJ5zDEatE4S9GAiw5wh",
  "key23": "imYXQmwSbw7tEuYq8q8HnwKcXQbaNVkWxM39iG1qBuHARHGa746JFVMWapMRMYbowRh7wUHCiLFn5rsQJ5i6TAe",
  "key24": "4dy3Ti8ZuAkDsj9tCZ9cXU49P5bn7Tmtv5bnAddjLnejY7N8PpScZFahP2prT6iPb26hfyAATnzWXkE4vi12z38L",
  "key25": "439gxkiZxfLUKL8CFhpzDdZA8eEw2TAkYCg9swH2a6YpwKbRQgLxJYREQfooZVi9ypDs1HZkNVViD8geAiezLY7D",
  "key26": "2W6XPdmjWBrgP6HUQSU5Lg2PLgAu7D1SFPoCpmECiJKE31EazdfMNdByuNpHaVzRHBoMCUyTNXBkZq74xcVxZhYJ",
  "key27": "2Lro79ZSWz1fgCXg4K5FRJSkTmqMLo5duVuf8NiP63jApRyUud9L9Vx9PWVRpPgGKLk9MZ67UacocG6JdUuQ1Dmr",
  "key28": "3wkpuXSt5CZB7Mi4RfJBmKTZri5KzmBgbbooFKfJE51Fg89gmLndZ2sKg2yMDZdppRMJCUa2tKh1nXpm8ppsp5PV",
  "key29": "2Mk6aSo8LqvCtZ1QTS73Q89JXyNy21HjWoqEAta7MHhF8xQHpxccENgNbLUL8zZ1tNkeS4pkzMA7PecpZTDmjvVe",
  "key30": "4mAAk5RMTGTH3LTyM2irQADSXSNoNp4CRj9J2ytnYPuFuEMUCEiV49B7XiJRFqgchy2x1niAc1dtC1e9NM3FCyfT",
  "key31": "3Fjcf2eq8em1Tb1YTE7oUv4g6rPb9s1abgUhwGMfLEFeZ3kG8FYAAckySJiBFR3VzPMxjy5QpACkKFdjPVTdiExy",
  "key32": "4KvuMfJfA2gARoFDEAvBMFPCQLCnrEnuBegeBFVqtFpKe3EHoXvPEDKyp3xPpu4cFzRP367SepYmCnBqGjEcxoVY",
  "key33": "2ZQELH4qQH1xEj6hWB6HXnsmAsGeWVUJbRS9zTKCr2oS3YYVWywTQAFn4J6jfMF93wkhGwcK7BDpSuMntasyeCzY",
  "key34": "uYjjKmU3pWod6nvpFh4ezzefQae6RwnDv5u9zfCiCAmqNaCT6JWK55YwyAq1PtbBD4o9uoKP2ct7nYbLvEhdQwc",
  "key35": "mLwpB9duRxF77f7pwy7PPF3pKBWbXPykHdBNY9cGm5C5fMfVQVU36DsytFRRmGbjFStH86CYUULqDK4TdZQbp5q",
  "key36": "5iJ56ocRUPtqC8mGn7kym6HqTGiHnGwcpKAzAGVCr62DbqbjUsFJGL1bMsCQnAe6XW6Hf3fkMAxVqQJJLZaQKfjb",
  "key37": "3Aw8YLeSHS1QSGTpZEzxi6xiCbB7CdQqPUUiCQTj4Jn5viYziSYoA6QgY1CsH4BLCTrdmG8T6QWALpoqFR214f8m"
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
