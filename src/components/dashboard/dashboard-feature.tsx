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
    "4RyfJKvja5kBXcfCDmDVJkc8fEf9yBbH9wrpkDXsC3rk7CN8xyNHx2XvwyeZ65nTZzWKoaYuF4SsRfV1edZMuBfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5No5kvRx32nNjPDsz75n4myWvmVDkb3KGbZFKP5FMuaWZbiZGnWdofGGsGb9CE16E3TeUh2y2chEWvNGFfdpt6Z1",
  "key1": "3MTJGtXgA2Tm9TLcb2fXCPoz2JXRRmtGYSJFdcLHHNkJFAhr5C4D2TXPHKEaYvcMhSxSsurkGodwAFdBDJEcwoy3",
  "key2": "2dVWpEyWpuyvNNgeshwd4Zd3o95KgPHTA5EuhZ2sijM3wAg7E4wFrrfbCYtHJnnCRSFiXtatSoLevGawXqCkssEK",
  "key3": "2ixXc6seeUwuTCm3aQVv2jjLAEJktBPbwMUaF9JieedZKqZ7MgmW8o61KZY8xa41TVTrUT6xMsog7boFiZLAMu33",
  "key4": "2G8Kp8njZXofmeutYfMsa6UvfYnbrwVuRqZSZ9hNC4mgmyxK85HuYrs9wzgFYMF1cjxa3DavGiERaPXAXCvFCayN",
  "key5": "2ko3teVVcf1aiCsS4oTVKLzXFdYgGYb7UeZefmPmkQWTtbG9N1AyvVy5nFhv1ZKakQSaqhedmFX4LbHTSQr1EK41",
  "key6": "DGn7WPRU5N4M2392uhSRJgZREehPw8odAZnuej5PafFz3h75ggp6hWePisTEBG2E9qje91m2augvebUszziqqCj",
  "key7": "3Wy2wTZGLzxDHzCer5Fdo9jNDrs3T4jM4yq3f7wsptteF7cQPyDDEc6weHzdJY8irpfUy1c51rrNEMKXV3Dwzscc",
  "key8": "4rMsCx4Kzh36CnQ1nUodUsBahEGxQE733F9GpWzqGzRukhPB1Y1TaG75fDY1ZraUzAFxSmZgsFa9hqJwNHnQDTib",
  "key9": "2WWuBtNurrCf4xFzS9MzK4WYmwwuJ2L3DWUm7Am3Cvir8F1UboCSAjyyY8oQQkxwEUPQ9bP62P376qXRRy6ZAy6c",
  "key10": "2vLQMhS1Nec8aicxPxD92TjmrZgxaSFvNmGQKjEKYNvcykQ6GayqH4muCRoALRVKWLsyEh1Pkb6E4pQbRk2eo5YA",
  "key11": "4HRPmnHvbbXxooofpzEpEz7wt1yex3LjqZq2MJomkJcW2niZ74ZmfvsLwb7Tsff1Y9rAeH5YxA1NY4sLP9BxExa2",
  "key12": "5GytkSTKkpUmCFWRonSrQxrNMf95oKpH63wzsyFYT87TSKbzyhQPQDbAD3tz6p3PwRXPC5EkRmBprfQ2MCN8saj6",
  "key13": "4iT9wZ5je21TvodNT39AhQnp5nFJw9Yqp7x4B65mPap6L9c4boWy3RfS3uuh7LmAb1ZFN2DYt7mk3BwaMpYkfpBX",
  "key14": "5VSSUrgJPZGknSVgj1pNhvWYvhFWkL5gp8L7YmKkG8v52aL6YJaGRekHTgvUY8FQKgVyuh9aRhkb1aHc7mc4CtrN",
  "key15": "5N99A7GmNB8ie8xdTakJYqCVJQrQ1ie5GWDdzmDTVNbwcpHd4Dz3REGwXSzgQENESjBeR4PcqQ7by7i3Pt2VMhPC",
  "key16": "BqUkWifp82Edc2kXwf6SQjRnhCYV5ob8mGZJYJ5tb1NCyxbp4GjBs2PS1mybsKENJ9P8i8xuucP7s7z9Y59ipuQ",
  "key17": "5q6GrmhbKsdWmGRUY48XkJn8ze8xYVevYi6pwjzQynG4eKcyyT5mhVcE42yFYZcPNrCrDQKXNBDXGeMjasiGVtUs",
  "key18": "5EJGJqMLvwwYRMFNtFxvrkRXQbMGBiZsdvUkJgUpBuG4BxwZWxJVvi2kqwFZwEFKTRvi7Ye4L1QLyYrTBTe7QCGv",
  "key19": "3D725M7rZXRSaYdEaHU8DvY2zEB6qskMY9qApcXKtGQz6nst6nuYqMsxpXeDRm65bj6GP2bvKS4SonWnESKhEHoA",
  "key20": "54NBmS2ygyjFRintW6wuZSDhokHv25JsHFVQfaMkDdp5rWrHtN44buZ6jyGrgAJzX1DZ2j1rPbadgy3XXErSfqiz",
  "key21": "2q9xkiLx3NTu55FrNvUR8uQnA1wTkFNiLzq1kgFuZ46taTGyEtLK3UrVBrZRJiiSP7QsTfVXpvB4XWNBL9NJYJ8s",
  "key22": "5AANVfj71JSJs2C3czG8wh5qG6wWiaaZB1oraGzvrN2htFhsQbTrVqz5R43k68XKn2Uz6BRzpRKckFTgRYFSzZnw",
  "key23": "3mmPiV5JEJJj1itzXjJfjQvYAb8a4KQ3Cxq7Cvxdxy3gtg7zKXpbkJrAhDFTr6fJxxgvqMLNnJAA6A2jkWjCPZVz",
  "key24": "33cFcbtwcYxiCPScBoXJBnxZFzgSzqVD4o6Kk4xXqa7cKhKy4VfKxzJfVw4kwX5V7eZJMfzccKXf96V3TxeYWXG9",
  "key25": "3yUydCRWguBazWoxm8W4FgNCgVhdWuWzgB3fLJyuKHxgB51beEcofyYGxNDx8GXKfZvnGCe4J3N8DkcVybUCYnpM",
  "key26": "4gAfy4QudtGxe9VQ5vsnz7opGWFuUVS8YJR2gnakACeC2issAcwipwKrATW28e8bKEnSbyccUW6p2r2x2X3grxug",
  "key27": "2751t2cugQG33uTfAm8ZNgoXzzeytYfiQe3Wr8pMEpXdbkghsBSVvAXyuEq6G1KRZLUE4LVopBr2z9DkWD1as2CF",
  "key28": "Qbo1LwVh5KTyqXTxXb74r7AmPjokvupPu55f9TPt3SnFSs3GZ3auafAq4Fbo342x5Jgr4zJojhnVZiGwGgZNDCt",
  "key29": "4EpRvxxQiUZtkorTwbJjnqfjNL6Mg5WLFWkttW3sUFA6sfD6JBL3Phj77jjDLgzfHuWRYBsPN2jTYFA9wiBdvK19",
  "key30": "3DAbm3Aqd4fFTcvmQfcJxrQLrmbZsDeVztxPPTnHj5oFTzf6PKUY6vWG2uNUq5ZUMZQJF5Yg5Sw1Pymb2YEAbfFq"
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
