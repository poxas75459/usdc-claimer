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
    "6Xoyk6hehH24oSjGMADMSAYJnELZwfVEiadQkEJkyRBbjn6vJ7ikWjZBFnSY2WRHBexPZKJQGDdsHWsPA64FLsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61tuockUWeUFmdSqQ7bdu8UURYy9L7bKCardcgK97tn1S7WXzeZZhUnJWkTGi6HReATM4BuCqXbNuSrbgQXvWV7d",
  "key1": "5w8EGLBXo7BaLM9MyeiV8pBK1Gw5j6mNhN8o6vgCAgQhkbLLgun9uX7BhBXEBSniWGEQi4X7YmqiNbWcqGo2X1i9",
  "key2": "5QA5iS1kX5NYMX8Qs7pDy4SLtuvYgBgAELSj4g7B16dKpTKu6HV5QAHEuAAgFkjtfX65NGGJ4TkCWgVQZgY1uBGw",
  "key3": "naz4kv7eCzFHFBrSRrjBHojoEAGxPokhpEKoJEpoC9jpTUe7MsFm3wXQKKi7p9HngY5CMV8en2fBpRZ8MZx3VpZ",
  "key4": "34gCa8rVs8sRtk1GdZXqJaJgX7WLE6xHYP7hNAWep62v5d19jrAEvezbtqj1Jwgz1ejTWdy3MYd9vSjjhUyAyCt8",
  "key5": "3aJYjtSPvdr9eqhdD1T3vJFiwuEPsWsVLeLmafWPkUKEKixyvRDH6EVMJQVizTeT2QmbV13uTAb9Cjyj3mrSa6oX",
  "key6": "2F1KFaQD5pGTpzJoxww36TSRdFNCyboRfJk85kr9xCYZmS2ftGJ5xmMnKMepteNs1A4rPbMLBJKvv6bhdjGP5Vf4",
  "key7": "5Wgz9pDF7ZPAXCDxx9tJpSwenjqje2j6JJhYWYDEjLD76szwqTCiutSJrSus1MY9zCsemNUzTgoCncCdbFc3Np1X",
  "key8": "5AM7LfVE1AXHENFRC5Tx4YmnibGkxYYtRn8DmJNxLGZLybiWNMkzk9XPU4ZR7HVZ8ZkjoErmJGz1bHKis9mygyrP",
  "key9": "4fg3393njEDaBS7SrCVn4ZmTrBSJZuUJQ6uN5H85S3uUTgXRxvc1fmrciYgtuHBgeSNWD6sV8nQ1kd64wWQfgyMC",
  "key10": "3UChvHwQLV9izhpPrRhgA1Nu436sj1QR1z6Bt1i67oxk1inDymGv6ue5EnPEccaFcXgwzt1bwn9pVjUiUsGeTujL",
  "key11": "4asG16cny827nhEqpAhj1V4tEtyefywdzmFq8chXvfMdrdwgH6RNpHWs7WTxzWqv4vWEYG7HNSKZfkkSbs6yJTMF",
  "key12": "3V2fHyRdQfLpTdDCaz8mQyirypYaN7ZqVFejyWbvVy5QWVGFog2e3hM35EZzvTdPwHdvXyytqNtRcy8XjTBzikgq",
  "key13": "5HdKdVKzmDFCrD1SDGkw2qjjVyrJviGefHyGUNzs9SKtFC7qsdHjzCT51ZFj6mfaL6DQsxfq8TSuK8K6aUZMWKMi",
  "key14": "3xYAawzbJhHJiqSZRFGc4wLdVBW8oCyLeR6U8mLfGL9pYc9YpEC4W2kHAr4vEbvEkE3QRTRLJuYaqmxRontcPkpN",
  "key15": "bULevfEKWzZZ7bSUuFsPukKs3ehk7Nfkz6SHKqEeXKSuVx4DRm98WkLmKHJQxvz22T81sX3o3W5dhz3R4Qsxf9i",
  "key16": "5VxgNyQEraQCucv1iqnz6uhGpJxP1poJ7K13h6YrmegDxXdwbAu8KZaM6svVp7jKX3xEj6s7SLi6VjEdQLAZXkbB",
  "key17": "FXv7qeayMWbMfgceD7mZxWUuY5XczhE6mwu1Z3tGwAEEx84eq9H2TZRf3punjP7hPLVXjTJ27Ae3kYmJP6DmgyC",
  "key18": "yxQtuJ2r8uqsi9oX9cBErWRdQULBBiSN4wTbxU9TrUNLG6qn5rqbDz4cNN62t2yHQNAGpRX7nFyFUzd86SUfiw7",
  "key19": "35NBkP1io5SRLK2MwzKACCDZUfhcaXWQkr89y5gxoWJojYtGatdM7cNxvDsEe47wxuZ9mFzHnpeRpVwqDSQp4AnQ",
  "key20": "4jUtDjaiE45rPzuBfeRvXMs7UwB1NjTcEXpLnuQPewvsNw8QMNNiWYyhwDCRrXJy7UL9rRTJ3Wbbg2z1oMmyfZ1L",
  "key21": "2ZxkgS6P1bUXbsvj8FamM5aPhtyyA7EyYFZNzKggaM9HcjYPmWXYtcbnGsHcfuC4eoyXuQZPa1uhzrPg3UhG7K4C",
  "key22": "63o5ZrAcwUKzicfi6qTKvyecc4dfzV3C9m8jjnyH8V5BjMMfSogkqXr8F66vLetBRpWPrzyQsishXwPattKfzh6s",
  "key23": "2CEkCAN5VKxjcHtbG4rQUbT12SkF5mjaypnwye8PKvPxxyLCozJMnd8uxkyjVMxzVJiTbP323uzm3QL4d53jCyxY",
  "key24": "9ZD2wwfUbczw8Tdf38w8ouaan6oLvs7gsBXLkqeBBQM4ccfuZVEkFFJpZ6CjU2AF8GbmDurh9E1kECWJoYWxrKy",
  "key25": "5XfFfaM4438seaYZw8NtTKek5mGC3Soy1EqW9b9EPmMjHsakWgUbB2pt2aA1SJiU9FzoJJdh1rxgxJo12rYP5ZDb",
  "key26": "5ZtyrQ5rL6sAA5XMdDwqRUbxcWyVA1K9JjtpSCSBDvumboxT18i5koQewEbg7DTrC85i9vJn662dfhoH8BaDxz43",
  "key27": "21BEj4PxxUhaapY99SomxxNpzSAujxr8DEjtfmhtQvR2kUhLM5rFKw9MYdqQ6otvj2JviqscJXbyTr6rnPobVDaN"
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
