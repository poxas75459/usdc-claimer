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
    "4YkUdVsJyF6K2fk4hP5xBaEpTKzgsh4xfB5vRaeyRUic13soMaVRBex8XkbBZiYLtU5g6ZMc2DUQ7r84VrHbJtyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k8L1CS1bX8gt4y4xG5vwy41H4mwNbv4RhwaEGBiEomNUTWpCvb47Bd56mf7o5mDfVgygeuKvnyS4ou1VoaxTHVC",
  "key1": "S8QLz3czT5CxWUnxqXgpQ7mU8jhrDJHnmvNaYSVV3EDE6GYEJW4GdKTKKHVDats3azVPdGu2CgT8AZ4GXmoJbsA",
  "key2": "5D3Ubqc62TNRsjqgNHn3gLPJrorM8YttWZWmpLhXGwyswT3iv9JJZHdbdSB5wmGHwQAVkJaY7sbWrjhhdTSG5Kyi",
  "key3": "3tQe5U73gJ4toQ5PSP6X9RawwHxoNkymxaDt9tgs9VjDAKdqWAHMaB6Vde8AytqpKVKwY51QkPKjHtvVrtzarcoc",
  "key4": "57qZZuy3QKf8MNgSLgagNqxo3MzGuunpmBHPAyPJLEW63g6MD31CUWBkvHANG5833rHe8Jorbbzvh8ENTqEqe9DD",
  "key5": "4YKMHgRRvkPYSUZmCc5hp5ZBnipwgh6kSaKyok4aX233k2YVdk46bbsBKuA3e3XUniEY8s7MbXyHBnwNuyE3AJCH",
  "key6": "5JSnYDb3YoZjqiA46xWAzZHbVhsUwKxqnnu2okY6HFTZucmB69a12jmmoki8PgTrh3emrGL5HRmG2pdu2LumGBNu",
  "key7": "5PVxE7ZxsHQG6it4WNj5T9WHNnRpcpc8Vc8LEgu8UBerqMCathP4KotuKvuLLRpZ751ujwyYhTPWyu9XSuvHKBTB",
  "key8": "4RbyyCZWmJwD2641VqheYKF4eZa8Sg4rQxz7QGyg7domYQUJu6HpU5SXT25iNDKjBmgh5x7JAmFtsvsW7zZicgq6",
  "key9": "4HYB6Q6MK9C3f49q4V3aJQbrFd7ZwpZJa5ndofSuZDnjyGCGc4PQErywMf8w2e1nzweuyyMX3wWHtSJr6nCQFU9B",
  "key10": "4oj8uWcDthNWy6zktD1NmYBAjCgiis3cx6DG21sq2z3FbU7rBsMGN4J9yxhSDkuYseUdm1aeNjtZLQKFT7gSr1jN",
  "key11": "4iYRn3xDqx7L8cNvSCkkNMm3DGVDwp27aH93tb8NhVas5mW1cFULdk6gRLTRze2tWqwbfxt57ygNAS2trQxUpzxK",
  "key12": "2vPJ9tVSBBP3bYuknayv3CwrZZCx5Vfv5Jb38RMr7fDJVFeiomrMPEzNS4mF8wfgq5RMULFHxWypmK1Q16uKsE9",
  "key13": "5LPc4HivB42sinakabnkhT7LVTDsx98toeHV24CJQGQZKJhyrJq3HbhB2uNEpLptFk4C6Gz12HzdGu2mFF6YDG4w",
  "key14": "5Rh75AmoLweJ48pJ3e6z6hdCb8Y3iQ7Xerd6DmZt5aA7aaqWHGj75a4PqXHrKmsZ6qKtojotGN9hH8RxYBhfC19N",
  "key15": "3sSV8xZXqvfUdqkmZkHdKnk4oepxvNhoN3wRz17MGcmYirUk2BvPk9pNsPtrW4urWDa2ZUeEwwtn3NMEjrLmMktw",
  "key16": "2hWB867C7CxzoegjoqqA4sXsLb99vdddc9vVXZJ7GbdY18itYSVdqM21m5373nj7QwF1ZDuiAy6D2XfYmpNLCAd7",
  "key17": "59eNJGunvdkRzwJiznNrR4eBupCP7MVdxAY2oYt7XExmCCYLLzBnMmctX8TG9oK8m2REMKPphbxpLr7RTaxB2vW9",
  "key18": "2XndJ58KcwFoT5GZXRpycvm153dYRp779tZsAwujD9d72rcx1GGBfnJhZmc9CYKV933ZhxysA8cMRy7jZWkxTC3o",
  "key19": "9FqBRk6JyKyohcFzfo2gt7j3t4V36CagHZURncCsN6nVDeiXwERckhw9tTcdanCUWgwCAdUMTVykBQDbhgKzUAJ",
  "key20": "5kXjiE3iy8qgYWfXxkh5KEN75JrpxBdUCaaKqUrhv3hsmUz5H7a8Jws6C7qiszUVp8vNb4ZEBF3x6sf7dLkkY7RS",
  "key21": "26wxjyLpJp6waUxW8Vg57huqfwSpFLFmcPp5Ny3VhW9ftcKJm5dJ3AK3mnwyBJuWypss61K8N2Q5dJxZJeEPXanv",
  "key22": "5HwBBcFFpEyZzgWnQVJo79YokyesJE3c9gf9RSKgEZzrXZL8op1MoEEiZmfw86Hm5G5CiRvjTH78mbAQEefWWsiw",
  "key23": "46J1TyKYGAG61x4Nbfk2s4mMMVWWkeoTducNhap4YfqjDB2CRUXxv7K1r9GSgkZwiLRmo3ZoYScSGNh7JyC4fx3A",
  "key24": "3YLBGUagB3kRVcumJyLzjqoN4jW3y6SSnbuWL2sy1vNwVdPYQ7BhN8PLKut8ZAsGi6YgzcRPvkrGmHjCtA9QFctb",
  "key25": "3W21ngsVNg1VjVjcJFV7RNPh9m8Y7rN7hw2B52KctmznCn4KhETtZC5K7QdfdWJS9yFQxM82e7hw7R5djcaVfzZr",
  "key26": "2tmytX875eG1WSQ1YsB6TACZ8zJNM6EvqhzkMCZGi4R3tNWMd3AeTnnyxRkiPzZt7VnTo7bQc3MkRzD9BGnGH6pp",
  "key27": "3RVWBBji2JMyNzzydGZSKgDXfVcYwpyskGDQRN1RuVfS39kYNbC1bgDj6bWaQADPEKa2uK79fi3p9RLyccHSxGk1",
  "key28": "4CxsistUrufcAeH4YwPJjwFSYSzp6V8kzZJt1GRxUVaCQMGucshgDqJkgd1e9Ryy9wXqeex49WShheCkPDAfZ5kd",
  "key29": "5JqjJXo28Jt7rBhq1GMkVyhGZwdygexwR7nYPzYnyy85C46EKJsVjN3pNPAVTEEkDnqLw8sdUzA1EBjEymFXEvcv",
  "key30": "42VxLBxNzCaotcuDjQwYrKxVWQfkLN6iPG17YJVNZ9U5kq5nQn6wmnyRSV5aZHZYp1Bhe3vMqMVJ4hSd8tZ2pteo",
  "key31": "2xsykHtsnTA8rHXGjhraRiRpVKqotDEYfTX6qrbq1Jqt7UR9UyHpWYtEJRanqUjnKNXBdpMUPejV8wsc9nuKut4v"
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
