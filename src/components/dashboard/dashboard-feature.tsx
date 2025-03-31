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
    "3Zp7iTiciPx1eULG9BJhKh4pc214Gcus5WcHncEh5TSdsPockVg34ynK1mpeXzWN1HBRXbGUWm74S3CGtz3e6u99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zsctFRZuSaFs7JjKrwWufBvnMAMiYcivbivTQPdjDTzrXg2Eqd8YdpGMegPLr3RSQvLEs7g6CqExR3axCvdzqFL",
  "key1": "4RJcu3qwZ33QfuZT3GhjYxjhc75iWD2SUtnNTgaB6WkhNwF597jih8EBsC9SbuqQKve9QHFfgKjew3KCoZdDYa3s",
  "key2": "bdLgZPQvwTHUSLM5dv7ZdtYCqWZqWP939cBhYjxcjW4VvEVJakEyQa9hekY9uQtcsY7nkT7hsv9zTDNmuNETLz3",
  "key3": "TtYh7xBGrQD4pNd4xgNjV1BBQuE9qRvLvEgWgzxwVK5tkL2cjNVzeKPwYrS9ZmbxHYJ7CBGd83QYN6N9mGfPAkM",
  "key4": "5xykKy7Ymp47fvEPEpmQTrpaYSgKfEq6AF2YvcQJMShQV3CZAygUBAJkgn5nREqqh4kBA7oUFzd8whQ2xJ2AjUQ3",
  "key5": "3r6ab7H8hvT1n94r3vZUkqhPBydsodDmiD5fx2uTGuAZXuyDwueQszdMaPmKx6fBSDSSL178fZnZ1ngRJHL9yBDq",
  "key6": "278mhqK4bGHvRStr6cvqafCv5F3HgjUC4GUadkkYsPaWLw8rpPP38z8wdPvbL2nAc8tJko62VoyMCSXzqvBssvjf",
  "key7": "3fpaE8wSoYEXvuGC3qAyP3LoSnVca89U4u1JY8s6T6rENXUqsfE2TYgUH6tv7PpSQfuuEs9bDPijp2bT5kEwAZ6a",
  "key8": "4nD4Mxa3rvK1fQ2Hff1DMSuP5rVmLrF9GtNS2cN6pWPZCwkUqUonfu3jTUKG95NFSoU9aXSxcWtWQosQiYMJML9Y",
  "key9": "4qJFTNNKpeSE5VqZrLfEdFetYeXHeShqRyUKkRWJ59FU2rXbcuP6YRtLkW2Z8a5jbkaQCv4Pr7YKywheAcq3D6yx",
  "key10": "4U5t4HR4nTrWXouVD37RM1NPePFPbz9aeHPewW5M8YMEGWBPo6xNBQRiTYAfvBU9LuZfcE5m1L2d3HcePSWoSAE",
  "key11": "4q9TDQKZQbgvYEzUSXNkkpARy2bFUb4qCtYYbqwH4CEWF3CcRQKo4oerJWYW7uWeg3YQLgtXeqn5f11PpUJyfCfc",
  "key12": "2uaJgiMohx18iyjs8TuiqJEFEfBVJv9KbuVFWRwG3sLqJb3GU2DLxQWubU1nTrG8EjUnTui9yN5WS58foPnpMep",
  "key13": "4MohSBV2evCLby1QJeYK7pWYrhZyMU2icJBiqLCALhxhEvaAt4URzPkwqaALH34pTwxqtquW4SzXUzpLpyJCi2RV",
  "key14": "2UnNhcosepjR9xsf3fKJZZ81XXcis9dqEsUkuoSMMSKLu9j2AYCwQ1CqLefuEnyDMjtX8N7GR7AyvmPofkejTjiL",
  "key15": "3K2KJ8rMVD7vL5ppt5Bf2vcyEXSUuDuCVREFE7YDvX4isHvaYw7qjtigQdoNtAPCKmjjBkgBpu4nr3pdEhZecnFm",
  "key16": "vPYx7owLk3mPtW5UchwW7LWeveWSfqFG1JvbKYq5ZVktgC7eM7wuJhUxtF6Qbsh2dKUrsaRzoWTuWJKYvgQPEea",
  "key17": "4ivKifApP2kDaco2YgYrfPXDEDFenjBZfvhjTaSC4DkbpECBfcLWgbJnxtc9LuZ6FR2UjwrMpAq7foBW3Kyf8UmG",
  "key18": "bcEzN4MNWHHYo6kY1dsJHPa7PaVSHFWxLfGPYK92TUdAHKjbzd2NmPZYk7Xbvxo1wNM2AvrhaJ27cidNgaZhHkP",
  "key19": "5h1kSyHR8yMdZv54oiFr9myJ9ArLHdFq9Nvbu4qTBUk6BNkTx4RU7GPFDysAxt6hPevqntzFAXk5RjNvgwMCL39d",
  "key20": "55qQH8CNhMuQ19ZykhyTNDwREKeAbD44JGTAhZmBVyLC3AQUKRon5b46tnRFiq8eaRiZJXQMXhHzGitE7FGiWrth",
  "key21": "2bwsgZNHvEcWmpMxqaUfWjGfUphJHGBwYGzXcZwyibhNXWRnrqbMcXS87JoxJ163W1QokUE1prPFphFcv8vWL73T",
  "key22": "47udM6SymEXvi4RSUJwmCFBT2UrExHbXHmLsAX41PFVAMMXuw55pwLoM2a4BX2KgQarfszHZEsueWedZ9JbuKHZ6",
  "key23": "2DPpuucFpF2GQxYi1Qa194rhjmc1D3p98Qhm7fZF63wKEcVtnxYwMJLgor6MTv1na5q4rYDrHuGeksrfJYTdrM41",
  "key24": "2CqiztFUE74KGMbhKGGE6sdzmRpcRrAMeofUjYaEodjN1U1V4ASLmL91159muBSW1PqmCoVeN37hea2ZpsgZb6ZL",
  "key25": "2vxM1QHc1rww2KMsV7G7QsQFBJShqsaNRSnMXoJvJRoAtgaFiegUZwcuoBkXfw1xDrkzPGC7NPcJ4i8rnZEgqKBg",
  "key26": "4iA3vXTjn9cZUbNtzGfXFLwGtkWRH4VZoNLmQwADcaTNxSiZ2mSW9qMMaqxsNeSL4eC6mtCvtiWjbGgU9RVuGLwB",
  "key27": "3YNJDonnb7DutUJBDzLAP4V6bvQ44sZ8YUQ5h21x1kq2kLUb1evMqcoG9xL2f9zP2SCZhRTooodoBR315TNNk82d",
  "key28": "aQsoSY5C8dzCkF66dQZcUU7mLE1cSXjXGZV9phh3iAP2znXhyjpXDvd1JVTNFgCkyABCqV4nymyEfmuBXQpi5JF",
  "key29": "4aiyeDjmBQPbbzyJXekcsnXfd1KSSVV1rypnTGAY2fUtMC49QkXdn3UaHXywWJe8BcrGCSV74tT7khG9PMDKceVD",
  "key30": "58hxXdpjiTrFuCjQyD6YvxnnpoBMXzHwayabm2qWqpUd1dQEb1bu7ERckvgFFNUXJutsakssfyMf83g71GQL19Xw",
  "key31": "4Xu2FmH5Q24iQAMTZ4GtJH1UwcSYVqHzn2Rw9rHKtD7Yub5EtvHMBjE2ziZAEgsBQEhQw9z2uX8JBSUqnum2FuV6",
  "key32": "LSbNEKCmN2HKpx32noJEkjuwVpWFhtP4yX1hY6CGkHovrHqD9N9DR2ip1DGH8aiZ8NkdiCMtKKZCTraAdhESWfv"
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
