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
    "kSvxdEfpUNu7cDcSt3pvxkV8XwHnwvxA7jsaR3Wt7Ne1YtJJqTiZtekGGqmKPgA1cYqLWoZJyfuYVyCxjoM6DL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TTUhULUziC65qDZ1JdzUc1ihp61FYuJ6meJ9vS4XuXAUS3oiUzNrERQLv68Cqe4MRBUexwsPGg2rCFNvt5WB8c4",
  "key1": "3Mg9K22arwpnRqBzvzFqBrLA4FfZCuA1kSYHeAnNttMf5vHDiTUGb4yFvuiCU3vhBZXdy9XQhrQ3vdPd19QZ9T4F",
  "key2": "5rJFCNeqcTydezNktg1aXq966Ls5MsFJ8wq3sZgDRhhgY6r6jAHFMmpVfRVD1BxdGaR2b8ngmvENY9GY3ZNbxyCE",
  "key3": "3TWyxfXv1iF2tUnynoC47nfThYimkfFmbfZ2HE5MCGgw98wyFvvvHNyQXhhKWxM4C5rzASt9eZH7DszYWsKfxoGw",
  "key4": "2v3btSKxChxAaeYcN4zJJhfbG5naJMaB59X3aSyNnKa37AeZTRpU3n3vVr2xmiZ6vYr6h4ffLiLrfHgav9FwWcuY",
  "key5": "5Zqu2Rj66PpSccuVyJb8qbnLZLeLPqwKNbM8SbgSyj2vnnxxjH428E3bkDkPAdBmDabSfadAvNPx121Szbu3wskw",
  "key6": "DZPiU8sBDoWYRgAcCiHuf3RhZHmgFpsvnvLbwNU5VrZFyLL7uJFGoMXYVXfUewWqrzZGzwNmWHbZMB5Ndugh3LK",
  "key7": "KB1bHX5ej1CsWSvtbe1RQKjnmp4dxDnurcq43KtZuTtiSBkdmXAtsFy4zKjnCuFBYD6a9amG2LcDbDihENcaFLc",
  "key8": "4QAo6BatwzRYuSRWWGMKbGGTw7LMFUGKohBwGMHGbAMDWUTA7rYooW6jtpw68bJDfqhHcjzXeURa9aKgEJY1QoeD",
  "key9": "2yonxk2Dx5FsXTBrqaMtnWE38S54tmDkM4aakjTyL28bHCNU9uwptbtNnDz8q49d1DK7R73zgg9bHRYzFTcs3mrC",
  "key10": "PwuAvRx4vFpXJZ1egqiNxHR1UXv7kvU3DYPLZL1GS1VBXifDaQ87cdmRWZVzHx7nM56cfM7toPjDspAUSUfpg4s",
  "key11": "81XHiWVCdQoyLP3fKXAKpGBQnoUFX6b7uo5Lk99cZ7A975YWK1mhvnKcbffQU2Dfq2wxbJn5duxQRkMG7hRjfVK",
  "key12": "31e514F9MUgEQTrpT5edwDqHz3rL3ZYmie8aNscUtm3391QibdGsNzefGFY3Km6H9dANArg2Vhcri5rPbjV6FuKH",
  "key13": "2LdYfFo3rBW6oRkPWsK9AHKnkW52Jc7FE7eW1CJpdeHf2vJqPjCAAqZP9B1oVCeCff8FqcSjRL1UyGprjKQKz4bs",
  "key14": "2V9w7N4V517wQMx9CWvEryYbAL1gjyNF8BY6nA2gTSKS9cfuwYaWpxosDjb6QCHzLGNUJ772VJeRiCxfN6NLVXWH",
  "key15": "ohJu98vbuYhYVRHP2W4LQHaVkHbbBURjrpDGsnC73Q1Cwih4f93r5arfptwdgefV2KtdyK5kJQFrAq5o1Ynthqj",
  "key16": "2HGnxPWF3cT4mgBmxDK9xXhwHSmTpDXoN6XYZYTx77MipSj8pnQjHBZfsyLdcbEW1cqStvAc1d33NcvXv27e1Lv8",
  "key17": "3rYM3vTqzLXW9XBQ44K2XVBTZwXfDC6v4VFy6ucXm5QbBnjLGQaZwzfi5HnEguDbSomEVZq2d78srFBfo2B4tvJP",
  "key18": "x7YjwmBuG4BiGqb3s2NzmJcDVD8EKojCP5fuBsNk33tbjPtEsHo3ArqvXcvGDucUrug8nicnsFD4VCbPvKdJM6b",
  "key19": "5nF9HD9nXAZWKwyH2rELVHL1UbqQuiytkUZAf3ssPB1suMoZV5yngj8wjiBxabPCLScNwkxSm2XEDbG3eV6AyjM9",
  "key20": "tRGU5J9n3epW2wyKZKywdEuw2FJNhdN6CSF4aJdPkcT8ua3dcU23Vo5Sbuo3E9NNmowCqXngt8yZBJJLVQPrKNn",
  "key21": "3Bi1rC4oagC7xr8ttyiZFA8UW8Ro5z1qnXDDy7nqx9G4pzEaM163LgubS4KRyNTBMW9dw7ib9aRrwYCPRokLo5qX",
  "key22": "562McVA31isxYnqDm274JbvB6o9DuvXYBMjZ4CB8Fm8iaTEHc7opWPatTh1qPo161Te2WrjwPLfY3uFXLqJSVBYn",
  "key23": "QSuXEqh3PSBWGhHuw87rjwca3C9rFMBKyarfdrA4sexGG2zEW8f4XZ4qYd8qx3aSxLASwyqgUbmnbQeJcsYXJu4",
  "key24": "38Bwd1UgcbaLLiBjzn51LkmcyTSqVugws3yG58zuhg2Atqg1xcibRGDD1j59PuFSwdbka3qqivfAgGTW75maL5Dq"
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
