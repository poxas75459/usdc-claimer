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
    "3bSfC8DkDF14v987FTkwyxEe6DSBfT7uEuKMStadxEmNNxZB8syXguR4LTbEWzbNxNtjWnj76TEe9oi34SkmVwcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2owrXSvw1dvTLmTW4LE7AU38kFLAR3RagYCu5k2iB8uATLPBTsctAHtV8q23ZutoMyVLFbSJenTwcWKgczj497xW",
  "key1": "CKfkDoPLeVGKf3uiHGcUj9H3QwzXKptXGm335jfPmhpVhwhzw1TwDWR6nb8pAU1ZGqnKmkjz8hgn6bSoba8phEX",
  "key2": "2Ke2L5p3EXPhtfMBF28BC1khfDPD6jgwcriMCF2wtMii8Zdkiy6zPeuDetaiUZrMc7NYoAiUsH4CZ6mxBmNubor8",
  "key3": "28VQK4iYnE8vaRPvi9wA18zUXXGVnTvjV4htVu7jH6TVkHGTZFhRYoXBbFEtAeN9qQGzcQW2UdbFqEEmCdYt5zyz",
  "key4": "4DdDVFfiZN8a9nhjv9d9MGrQLmENvEMEc8uwcLeiTbPuYbitLJDJa3VDBm4jHSENMmHxNLeNXmpMqup3q5bi5VRX",
  "key5": "4vj5RtHmTBf5Enb4q4oNDZjHeMLuXwSpKpNcCSDCjjfDH6SrgD8t5kZyaWBcrktEN8LHFZ8F97Vn2WVKvzjENM5j",
  "key6": "4eqnEqUivaoRFYKCtr9hFrG9LKHQ9MrBYpLbrTSsVSLQda1ay8xCPGoSYSQ7FS6PjWiHf3WUr61xp4now9o9GAHA",
  "key7": "cjRyMnBfjiXcSHTUPFy8T61xKSqXvfjdNPvnM2QVvDiK2jTpkRhqi22atXJAYMUzxSxmudJzthoQX5GzotkaoNk",
  "key8": "5HJm4ByMMr9efYDuxhNGB1vsJYywDHTZG68jkjtqNnzZHNf3hS7d89cGMGcDcBHymm1Lr2391g6YBbboUPE9yiJ8",
  "key9": "4FNBUpokET3s5A2mhWME8C4Ybz3ZhzoQWUcNWm1VojvkU5N4y6vSUrQsmgphVKHMqWprDvPwUN6B3ZsRJZZ2WMMu",
  "key10": "21ypncz3rqfhKUz4RvfBdsFZTD7JmRGYsFQX7KgySRcS9vsHtGcuhBCEW5G7xnkPJNdxkX2JsZnH7Tzg98wMExUt",
  "key11": "5kyiVSBXwnzKRZNmZmRXGsLVGqHpVYduWNn2ybbXaqi6E7QPe1mSnzc4F7STMPg9d84Xb35fDmCGgKKgxD47hUiW",
  "key12": "3iLcKdS1vtNMtxZXT5S1CPZpWhDdjsJPLywmh4sbnxfVuAt4zK8Ya5aeYWyWRzgZNrGsykgWsv8wUETFC6HuMgFk",
  "key13": "4oiExQPn1TmV6Nzh3Jrd2i3H3NYDAKGrtiMUiN27CbWpfwSpeNnbmywzCgn965d6NV4gUraK26zf2HL6iTyaXmUE",
  "key14": "j4ESHsv37ytKKvdSXHsetnyakKn3ebsUQFStzxa6z6jFi5kb4s8Er8sbe1vqgNAAJoomPtLWwDKKS2isWN5Mr4y",
  "key15": "5hvuQVCr7r39yvY9BJ3k2QZcMMPccTuAFiTphcz5c4szMzDYTijNYEAmqTKeMLtvgmGyPVeNDFg3rXoK1d8GhA2K",
  "key16": "Mi5a95eizZLUx7HYgCoaigJMLHTtr9b8ckq3CDkwrpigJqMK6RTZWJTtrmQRHmppoUVsLTGwB2FT1PgCSpWS6ur",
  "key17": "48Xd8ARATqJSMvjN17ZpQMwmThzQUUYtfaPE3XgLNqqWrcXuzAJivEBT7CsNjEuFE73a41fkrZMxG3GakQBHKo5B",
  "key18": "dxoAKez7MD58cCx8B53y4aMDyiTk6PBzpyaf8P7fzqiF6qKx27z2CSUdcH3rUaD8yMb3n98APq1em9rHBAS8GEP",
  "key19": "4cF8qxwEQ92xEUafJQ8ae8giYXyE98oX8bj2Y6JQJniYgScGutF1VtxfbNAdffjZck8QvRpGhrxRo8GGduYHiiTP",
  "key20": "3XtRHA4mwR5xyYrPh86GBZmdZfVnhfWX46XbnEaqwq3ssUtG1smxSUspbywrU6oqNMBHvwBv4DkmaiWWYpP9vooK",
  "key21": "2kbo5s8bMqoNpDrukqJSWxKFuSfiKEHMJuvvThgQD53V5Tm7nMwgvL4HBdXu8aPjAXmzZQnfeEwyyqdBFXcN3HBu",
  "key22": "4PJESdAUJYi4bp54G1LFS5THHL44ur9k8fKEwtFTxPxcBGWaeWNqqHSbPXs4khobMcGdJtAQBNQH4wzt4gVcN751",
  "key23": "2mcVHQrWBQ4ZtkVFxUsaXM9xd8Jx9DP6W9i3Qrou6jaHUz6npCMDY5kB8CHTLvnYdm1RtTRDQ7xL2uUzj3HuB1TB",
  "key24": "5azhhhgZgUWFkv3rsfgP2VmerFrEzM9Hhgk1uDeifLtfvo8ML7mCBawdkFdTaNxnoHmArTChkc9opVZi9kccDBeA",
  "key25": "5oK2AMRbSXUvdSit8WuX2nqvBsu5vMVPqdm3qzwuSVJScZG9GAfCbwu49XmLFHP1Y36hKHtNX5NnUZEJewup2xfB",
  "key26": "2iCvZcCnWz7obFpcAo6ybCTGgb6FxANG1cKxpW83QtN9U2FZBaQ97kv7vtoniyNTCMJTCBTYtRbokXrxbkytqeGq",
  "key27": "49rHguN5Cm3wg8TtRopq8hBaL8U5FnSzmuA3TXuExMURwb8FbY7QDjspNuPYHp9nzKehTPGoGDPL6Z4XtnjrXq7Y",
  "key28": "4mUeAFRZbq8czqUXXTCJ48zbtrWV49GyDaHnL8VtFdHxkwy3kbjh3pb5NzGGoemckJWgHr5mCNSf67eayUjj2C9L",
  "key29": "RoHyyF7FANkx1hL7AVaMr8tWa2ro4sHnQwpuXgWG83CaD85EsrBkFfKNiJxQyiFDcUccHTCpatAcgue6WGDh6zM",
  "key30": "517iQ8knpDa38HRoMJB5roCp6KmEvkvra8zcTZxyiRVgRyYrgpcE6VizSUQsE5BqjjP2QEGRZkzWDtxQdDamRfMC"
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
