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
    "MVvdgfgv68ixqdfsLP6K847zzAwRNG8f9j8Rc4GYoiek58iMeNLmE1RoCjJxxebPQf8g1G9qaDhuzESvJ4PTEHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i67ibyssSUGQap9nWC9KN32SJDHtHUDk1WDDYsyAABPSjmHruRG8DWBqgCipxxDLJi8qLPDm4JMzfpPkgbKRA3P",
  "key1": "4PoFwosCtAwesa4qXG5NcHHGp6APVac21ozWnD8Zm6fmNMn9s7ZLwQVTRv6FqRuADzUT7vXEhocGYV1pn5VcFfWF",
  "key2": "pghEPvPWopHbEPRN1DS3JVuouSgHvBigDLeED21zVZVZLZFahHbuwCeGU8hjdHfWHTRzYksv2YHqgoSZoCx1EMB",
  "key3": "2692RhLP3PtPQU4w43m5wLePRpwygmvzYE57MCfKNAxVRQY1PxQHjgKXMedpLYgHRW9SVK5XHCXoU3VJi996DYsD",
  "key4": "BRHf7hqj77WxF5x2gmdxTUiTd2YAoWQC2GK2uQWhYiGhQJVDcutYif9THk9rnp6PwzftSSBcQb7jFiVoAGx9PYk",
  "key5": "2QN9ZdmazH1qUd37v6TTgJjP7xZEeQi7vV1g7LiGVSMsh2wJEFuGwbTDF2BrNqD3RqaRxynex3G6hgEcUQSgQu1D",
  "key6": "5fUfkjB9Cf4gRYCiWRHUgfAXRcsxFXjEKjPonJEYge95MMWftyq8djEXRJKV16V7GRJWp9sjytNVWbygq6KbqmtM",
  "key7": "475BRmh8ozaPycKhBYNe793vVFJXxGDrFit6DRgCXrVZiEiN53SKcjvyiZ6e1fUvwjnTdaexZoAKnteSRPYfoNsA",
  "key8": "4o4m1HqaZGEG2Z176Lu4dgEibJbUFAe11Li4JsZUVXoKbpczKiQEmdWceXcVV8zsmVuJXH1rcXztTWf22jJPSQh6",
  "key9": "3RLNrybk3GpR7nTfPyASdqi3BZYoJX7fJDBTNyASiJmFbNWK1aZ2VdBSobww8RR25PQW9KM3ssxFCtGKYcqzQ5Rw",
  "key10": "5hrSZwVYBSJoZoUstk3cQsKkZxAM3h9tiBBXRoS8viaKsStpAoAxpYyARr1ur5FFXfTpB185xPkd2znSpqzT1XVd",
  "key11": "zjcrqr9UZPxYjUbzGkg7efHUJxXvzxhxDCP9nkuVNatmEWDug9zXKVH7PJBAkhXnUXboX8CDcsocVkZ1tPVxq5B",
  "key12": "5QC3zGtGgaC3ZvqCE7MwpR2qPPjGHtSQMQG5psuaTiNcQEBG38AD2Z46crwM3hYTXmjX93YZsBrWQHhR9D3Wyffh",
  "key13": "2dSGKCyLuXJVWqewY6Eok5cDLqcAHPbEr4VZK73JR5g46LAqkadjQ6YnwHbmGsuvmer4UuoVLAv42uN54S91d1FY",
  "key14": "2txG6QPD7Q4zaJovD58cujadBvY3xkX9zbuYSoYtQSuuDUH4SZRGA8k8hKGs9ZdxZ5exSTuhWsN8X1bfPWNfPPhM",
  "key15": "4siZ2JeH4bB9sxsuuSk2fpPY4ADsKAjdvQsdcgABg35P8xcyYGE8uWs6pjCbLSbnyLV1M6FDZnrVxnCyJNKjMrWx",
  "key16": "5Zn1Fww2mLMmPL1GDbQ4Xqqj4xhvd41if8TUeKsHsWHkrVB8nWjNsgP3zyX5h121KFXQkheR3V6utDCNM1YDNiZV",
  "key17": "7bF253hD7G8eQQ5usVAGBUGyXBcLUAgWe349QrBJXLX9rZbGHRiPYkydt68VG5ia74vyMufqLJsCjtYQNGDTtct",
  "key18": "2iQRkJCWBWiiDX75qrmpBr6kj6HgxffksGRXnt8wYzhFtVY2NsvybDrrHtX6yYeXbhGNZjvvV4qQsSAte7XgA95Z",
  "key19": "AHdFUdgwbVE4bQgkUieZXYUXaYeZ2UxjjKF7g7ZED349R7CW4FRZYK7WbstsvF7wA8APicA4h9fGJazStsHwf8C",
  "key20": "5FQ7N5Tb2k3B44XCFJKR7NNgrGWvKAdD2iSkMcGLKKGRf84pebdrvzxUa3M8BZiyvpAr4tLz3yxXtEMqcZ4kQMvE",
  "key21": "5KUcZ3VcDYM9h5wctHWo1rcG31WLWmkCLqyD51BETR7Ddc8uP1E5iYbqV9fd3Qvw3GCsK9bSujweEgELtaUc1vep",
  "key22": "gu96P1cfrfCnNT5B4xVX2XffGh4NHiStEMqnJ3uvzr6HLdjHmSa1WHssUxcZeyFkwMGKL88t72oiX5C1GcsUWgv",
  "key23": "4ubSzvwLzjHaeFT8XzATX7MgsuuaeBaAiZAxV8TVnEGfcmXQU6w2X4JQQJ9ViQnnciEVAHEqzmjbhS2y91cpij41",
  "key24": "41LzgbPeqYPyCJEuXieygnqfyf2nQJ6xuFAYyaeD9d9ju1d5yDrJ6pX3vqui3WwxYThR9cEwLJgU9FD6PzdzKVJX",
  "key25": "53yJdjrmjq8XtL6ByuGBgDcA26KTFH34MWmPLfwT6cKnyNMrmyQin8XLWr1mJmBjAVxfajH7szqt7U6soj5Z6j7J",
  "key26": "2hFerkVt66xjVpEiYTgmte7BQTWFXWJhHbqoWGGYabzzph4nM3gbCHqMkTyonzVFLtyxb87hTDHfHUcsDhTSwK4T"
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
