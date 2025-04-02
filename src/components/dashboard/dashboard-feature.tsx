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
    "5CmQ2Fh4cLinDQyHmHMjktyTzAdP46jmrqvJsLPH6WJoGEHTTXPTKTwiJd2FBZ23xpMbPKjL3JtirkcXyEUxfH5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "652kAWT4hFcivkJ93SGxXz7j64FszHXsxk2ThDoNKDTThUyuEeByzKkkGdxnjqxVpMCV1bpizUMW5NcCVtbyFxri",
  "key1": "4wSghokorWRzvrs4kRvM5aFMV1Ub5462PHSzX9RoSaKg3sPRbvqEi95uLHtKKXqVRpdjCtJjY1Tn3q7v9f1yKThM",
  "key2": "sL1UyFoh4tyJPuvZmK8A7nzJ4N6N6XheUDmNy4fjErpJxPPf8WqpuT7AKXRkaXn8hVt4C69RiQnHAMR5kwQ9smT",
  "key3": "3v5tdxj9wW69wjF4FJuMXo4wvTZsCRWCNS7UF6dW38RzfktTJ5TVWj7fjMLafneGQWBWwF8yGf4bwtpnjZ6wJAiF",
  "key4": "2pbnmoAAzHcBubWkraJwfPLkTd13y3Yv52m3NR34FpLTQxjv7U5x3ELFx96fsM4woD5WgrbZ3aM3hHkd9wZGAfz5",
  "key5": "2CcLfXbeTr8RdujeBzpjEWKozphEr9SKaUoDyTPepAyXzj1w3VTAexTcKQ5ksKCBvZDEzb8Ao9XmeeoymE92yQYe",
  "key6": "55EtHpA5nzeSQcJNZUU9qSwJVCg868rMKMKWCAmLpJvWiPKtLzLF6pnSzWs9dpuf7PCwVDTUQYB63PwPpJPsrkMX",
  "key7": "261na8TwK4wQhcg27RKvos3dK3CyxnCyfrmp5XT1venQ8DXsHBcrD41PFiHs4gmBR71snPaGznNagp84BEctbqCW",
  "key8": "2odjRSk9kegscw721oWJFNUhgo63d9zUrrk1iBGWD8x6D7R9SSQXjN6MFp9SSHzu4B4KvA1pk3bFCEMbxseH3Y54",
  "key9": "5qiFZuHMtMo4aNkZBxBffJuVc9JhcybnR3qtVY7kbJdq6U6nxHokUsnvseLiwVKwV8qkYuBN65WYGhEAaopQMKS4",
  "key10": "5uwNC8FQMAtbEgredizzJs2sLjhoSr6qM4MzfCGjvZ7dtpZkjcLC25x6XMeniPfcebwYrTSHYPGDR21fPkgujupU",
  "key11": "cbPESkKCYmbCbzBgjgVWNoGKfNeoFNQ4aAGgRbTn7qGGwRFrrKKfJZxBySsgndB3anoGMCb5kc61zKnbgcAr6qt",
  "key12": "fP7UXmSkTJj9CoRQRBA7bVhnoorkceraD5mXpaFEUSRWExaNGQQkLJrdbe6QGKafu2SVRDp396qCocfrEqUmtdL",
  "key13": "67VhTKR4JECrEuNPDwbdAzAWUHQ1Jb6CwaWjexqygnXsyjqq4ca3Gykp9a6nnLPnRh2HdhqM8jTe94SUeXhyhhSi",
  "key14": "GrXuDdau6okjdpeD8BX2EbmZx8jvmB7rFhdZ4fsQm8NgizrGvdKb81Guj8YLZRqaQ1N1a6y7iFseQ9cjAKfSvFp",
  "key15": "7qx4jvF6UQAHPZezvKth7awm6fAXoSq9UQG5sQ4v9jtKPodE1LBzPyaTCFjQthPf9sWG3E2TP5ZGYvZZ7kJU3ii",
  "key16": "5oZMaGTBeJM2QNKqjmJyVcVZdo3EPo6cATaqZxqe4dWPaHhHm3x3fGmC5HuGnYPcwg9V3ov5qZvz34ye1rXiDv7H",
  "key17": "4RHR8YQ6qC7kefyn5RY2WLwkfBG5XN5sUbH9o9RPNMZcJbNECcN2GZcDDzVLpxruZqodUyMhuDCyFFxN9fnWvD29",
  "key18": "5919FsT9rmsXqN3nLyGeq38S3QgZstYEvjDsF3hresqWtJTM4zJe2MueukmFg1Qf9GRzDQG6hcc8c5VJPKzAPWkt",
  "key19": "3Z6WmuACDEUeqborEv2fQ5kQ8FJ8YLoSVXVin53CXizSaraiUeAzx5ycv8L9GJNu9LDp16Muv9sQfr1zbX6f2gC7",
  "key20": "nUT14th6PC9DDXfUKedozYEuGy3J8rT5VzRtGsiKb4cuv1mpLWFXix4MWAqHj8oYQ8ou9vtEfvfL3cBqL6dWBMB",
  "key21": "4x2w34UegQSE4AznfLQKXuaDb8fBjMNHMRppgJg879c9kpU92YvjWCLrDpauvLXB7HKvGwdzUJtzQByjcYsPwDQk",
  "key22": "5GanSn6dhX1t8imew8TLYxMYeSRXPgyBxNB5yTNhduPR5HRzcDHo83TcxCcfrDZZ8kaTW99SQWhfp6nqeYu3LtoV",
  "key23": "5TCt1ywFHZL3Miokne17p2Ti6MxNhgn4JmgSdth39tXGm89Ydd9s8C6ir8k5sNnFkfKnG386RjgaPr1umSJ79RQM",
  "key24": "3pJ5Yp1z3Enft16h4qgKMre6m5Df1WiSSm6asKqoFd7MwgNdqGotExJLXxE5J5x7aPWHVJ63S4pw2kGzJgGgdpwo",
  "key25": "37h7Jbb3NVTCZmBEgzKX2NiFejSeR1k1ZE9ithySQuSer1D5CTtRz1B4EtfhdR3tRRWkyZG4RpVaYs8vwr4cuXYE",
  "key26": "FHBiFZQALgKaxN7J7kHcsZXjRWhjvhLr77dCMsswnxcXCwVtoZzcvBPZ9BcnEgo6279hq13KWsEsuuUbHscowDm"
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
