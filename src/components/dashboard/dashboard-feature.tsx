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
    "3GFNo3cvmAWTSKgf53FGfAgWJq31WxmNNZ9QbibFBD187yqvgBn2AByMNfrjyiEMRJpWaa4FsXLLHeaBk5kHx7nX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hxGoBqGJPMWZ3n496CxWBZ8uYthj1hjR3C5d8E4wcwncpbgiqAfjEKddPs9duy3C7cjQE6dW8L8BqjrMaFphZw7",
  "key1": "3FjTh2DEe515z7YyMqNrwkS7o7aCm7MPFjxwRRBQEmT1Hb2VsrppcUQJYNVKKY8CB8XvCyR7RwViA5pJSEzromH",
  "key2": "26H8uyin7Xy7it6azxjRXztP3KzzVvvvNTBW2ePjM8KCpWH7hRRyR3y1MTFbT8GfaxkY8Ktm5NKThqxKJMVydm3e",
  "key3": "3AuHCW3qoGpeEpwvqx298tMMSB5Ua3Z8XrnXqBHQfvTpLAmXcCzfJvAMVNLtVD5yDecqvqTC8PE2km14o12arQAH",
  "key4": "Az1LujUTysUkZdF2azcsQiyPpGSbcsJbccgDW6uwZi7Skg4AKoR89szNDmUguVYCxykiWDzeuga5HEDnfKdsXSk",
  "key5": "oDjnZo4LuTcLFckSC9tKRWLqTdMMgKXm2F6Ka2FkpC3DS2oVsKGHKLM9qiHhQhEaL3ZNEUHPVnNmfmFuf4nZ8cm",
  "key6": "4sEKdY9A5kE6iCCHYqYVtcYixrWVye5QukFrviioNRW8dTJ25fjSVzXxn7Gu43GvNy9RiSV5ejiWK1NZC9QNYrAT",
  "key7": "386MiNkwjBBhGCDL4gM7Guoao3hwY73CnMk5nXxSr825uJM8181GAC5GYrW6QdnNE4s5EyvFeujtkkzpdkqVSUZ5",
  "key8": "63yQdRNHwwT9Dzf5m3m4pgu8qeybMArPWNJpyg7xnJ2z9GAaWr8uwFkTrYNmYx9tVoAUkF84gZKYUMXLSQLWe7b9",
  "key9": "52HAmWuY84Qb7pmywTdvfRkNosyeSEFWuhFcVqXVDNJMbcpt8sLs2eaXpV7HywZ1pZtzWjgBq54sNYNx8x1VEY7X",
  "key10": "whVQGxgTmnNBmQMYTLY5YrVgmu1Qc2NpF8YFPqhCSyqkaF8Z31gvZxXmuwQT2C7wMrsK4bfs3ivZENynFy8cCiz",
  "key11": "2CzV514Gwpn9BszshgiXD53Rit6LDfGjM8M6wPEnhAr1wFjP5ca2MwxfciuCZn8bYm9gepnfRTx7vBjwAgVuY2Z",
  "key12": "39gb6FBn6WU3gGxvcyNwEmoLNN8Yu3EPz7vSQM5befDEH8VnGj1uEDqXsV7xMvZMJFJvw7dynUr8nfBcRVNBLhoM",
  "key13": "2KYindjj56iyRELXVW8mSQzpBxehezjHSf1tP6vW2wGrq1EJUYQQtVXLmLYRABXMAP3j3tdXgBKKLqN7VRZYoYoU",
  "key14": "2qKTXZFwMAbQviaeGSPFhRTxNcX3Eu6kMoQVjhfDmanCU6nrXaqAcAivC3HK8Ppm7iMmbaZtzuBexdrDzJvCWgsL",
  "key15": "2dkmjrbPGH6xVA24derqYMtQtqRHv7PDVhXPCDCTUnBbhMMVrpAFHqb2Se24edQKQPd5AtXpnGUwxQWS9LEA74wY",
  "key16": "3LttuzC1PmTbSopVur9sdBYmAG9o1WZsGDrwQCZvjoyK3dKiBnX4kGV2CSE9bBhawF4hckM1cRzfoyoyxoxNo2Yg",
  "key17": "5F9im2BKgB9Uxm5gbsvWhE6mjBBsu6FLNgjSyd4E8yLVWw7g1233tTaxfdYLj7LbZEcEQwahMked5MHzXQVFmhTg",
  "key18": "JLrBEyKV7YBBgwWbgfrMV3sur3nK4u4jM4BrtxhreJdULJgwyDd8gygBsBrTh4929wqzEhqkhUDesS6KqPyYdEi",
  "key19": "4W1my4fKcb4n7RNyAeDLVDR3eiUZ8RVQno5YLXiXJHyx32dJxsKqfdLnvqYrTb9s29u95tbPUVoBCe3Q5UnUoCg8",
  "key20": "5a8QvL3SS2akJJP7J2ZHjjz4yWqdmmrSb8WF7Z9DUZdJbsDiB4jdggB2TJLkiXV1grcnyLSem8kmWkjJF5TGxikf",
  "key21": "2tCvSZGriJnZLwQVHzyJciXTcqDC6RUieQwpSCLk9FdhL5MfrhkFX7niAp63Bj9JS1R5P7NfnMdx3HRB3xKu7hTG",
  "key22": "4L828AjYmTzSDTz37QZrW39G3CPZtTYHBXp5h6WSotSxtQPeqmzFfh6vZnVauF7kWwva3gkZcQYkeMx5Sg5qFq3i",
  "key23": "3Hhok5ho3y9XskRAcm4jeR7kVBNDMVFPZQ26JcJwPDCTBcBLQYsEAZRRpV8kdMo7YbeTSrUdhzFWDTFiBuymvFdx",
  "key24": "5oM9Xb8v7f2LxUe6fQWp6UQNgAX3q1pDWUQykBxMYu1e2MpYKYUjkUFvhZd65mK5xjq31XBMqnhtBfUcSdbwW9Jb",
  "key25": "2q1zvUiZGim8UZPwTtGg4vGDeNsnbp1HpvcmJrxsqoHrbwtHZ2VrjFLA8GkgLhz3Wkk2J8GneoyuVRuWdXC9NNJn",
  "key26": "45EwDfiGNLWt2CVSF5yd1nrXvjbRSCjce8zsGtscbmaduVkHYUuVv7ac2E5KFVKRnVqBBxv8WKtnRE317KysPHg5",
  "key27": "4yMc1aqjxLD4Pjhvvv7VK2wfUCcV1T9atPrnZCrrAiPtcc4vNKv3FihmRDqEuiSNfKsfxb1gxV1GvVJLaS89BMSJ",
  "key28": "3MTpM4UegiJsmKwvCBBeaReVPmLPUow4isnsyTB2rQbVh94x1YxjtFeGSFK1SMuM2uJRehUcn8JLQTGxyWn6bhsm",
  "key29": "4tArBRMzsb31PPNt85UeruqNMpB4eHNaUxZR9T9qWzUKyAgNzGTermDGFfDYXQogCcLz9bdWohbkCtJz7sToHhXZ",
  "key30": "3MBB8PYEdfQ4PnwKCHgjpWyPjBNamk5MUUFDMLjgNWNSt241ppmS3stpohZDokzxRoXNvaRoWVxaEaz9TUWwRbHv",
  "key31": "29V6eZmQNSUcgVbu9CKsRSAn6FoTW984imQ5HYyw6YiSQzqZj2eSWafR6CsVPFBgfvCvxzGGPnzMjKDFW6s5gEU1",
  "key32": "3LW9o7rMSarkHYxJJxrtp6niLnyuzD3poFXkihZLT5rSpvJFsfqim8ukZuzVyXiLcxUQxV8v5aQwdqDStKa1Fzpf",
  "key33": "8KxcjR7A1P7xCMtWkSiyrBP3xJ6edXxXTz3yGeGviL5XCsW8SkDMeBkbtqqgL5DzcKXSq5n45VjaWnawyvBWWhV",
  "key34": "5xeKBfY82GUKXpxZyX4ePBGYcWTEXwNP4dVXb21EmNxL8uqKWPPDw3LuPVEwmkfPRP9YdDdujX2R2qr3G4T7uWSa"
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
