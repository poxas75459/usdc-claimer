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
    "3Y6rfyYCX5tmUXgwi747rK414DoE9MEepasFkCmdJyYwozTVvEb2bR6PgRWyjNrBqmrje8Luc8ZSB1H3W8SheLG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KMQHE3WLs9Ro8MVhCmtFFtJ3WYJS4DTsShk7eM4AQ7WiAYb5gqDehYZbKrUXofjVw8LH4ZdNHvWmHf4JRk5x23g",
  "key1": "5eMPy1WKwA5dM5MufVMBEcqnW5JCDUnp7GzZbUU7zPKVNewAjkbz4NaRRxn8D7zra2JYWLsgL9CKbAfC16j3fLrm",
  "key2": "2B4P1uieNpUQ3v6AQWCHK5kGg5RQtsENgSPQftt4c51UtCmiDabFKbVnL5XNsUZBmXec2ETjinru3dJTLit8UStS",
  "key3": "2YtW842G7QDc9icB7NZJ1aX8fNCyym3zMK8EAmAyYCUBySny5C3Sqe7mZLjBDZpoSVYQo4mXqf4yW74q2BeA5uii",
  "key4": "gEQ2tEMRM2NQ3NxmgYym51GE91Qj6vugx6suvt5jtNjoY7nQbYpjWzLaCXVuvW9kyMw3Jvkzk8TS3o8nTeYsyra",
  "key5": "5CaXKppoxkajzNmVWUodhntj9xWMH2f7SoaggXmHW9WBLuPyvyciwHzGyq6udtxLM2Wgn5zC4thqmht3JcHdJ4TJ",
  "key6": "3UKse1CmAtdGsmg1wjH5KWv1ECQwsyrAqYsb97cWjCEga56UEdXHGARwesoSoHWPXrRcQTogzP8KHWH35u72dSG2",
  "key7": "3N1uagurVsH6ZL79yBhvFsienATw94BP5dTE5eB88RcEwwpJGvR2Hs7SDXvWsMG5ofH29cAJ2n1S9wpAJHxqJEgZ",
  "key8": "45pk9nszXKV7Rtk4v54Ve6ibmktsVcXrmqDdazjCHxp6ZE1pubbXYW6KrnMZmQXEhBtnnBiqUen47YZz1bpLV7SA",
  "key9": "5cFqS5TgwL2nwfgS824tSfAhjQJT7R65d4t51iQ1tETDnyf69ZSMjgCuWHbeYx12wy6UYFjwQP6F5Uv3BxxhRDGx",
  "key10": "3xtCDpA3m8yDUJqepFdjRRzrYS3GPJ7HX7YWrenf9im2HRHYTWyTHLgCqfStBEbDHPXjRcMHdPRvJrJbyK8oojGy",
  "key11": "TYD1XZwhKGT8D6vYief9icmPF1jiFsSidtvpNZ59J9o12w42SPaGV2uRePaavAGby2mQ7ow45ngZEx44QLxh3uJ",
  "key12": "5a1SiQvHAwL2mo3hMwk217YstiuuHMcq9CjuVmSdxYcmY7b9t2uXQJzAFcmjMnhFFXeeEKYMX8bbk4K5apsmWpyC",
  "key13": "3rf56d8pFgt8R42L8RjvuXxsWBw8GdVevFTNn4gWTnHo5x3fLFoTspxeJ81kPmPvzm4JExnWTjsScV7kfDL9jGzZ",
  "key14": "52AZnjhEKhWXNd6SN33HBWDDxuqNP9E2oy1vTWFzciofzZQLdvQKDW8UXEavKKjK3Xx7SX3YtXm1SMUAfam1gsd1",
  "key15": "5t1K3rumv6iro8V4eZNxv3xjiVFAokUQfv7WwVEU6A9J3hhwXYQbCSCJnbWCBtjP6pw6BMwDrM5vFPrieT28M8Fq",
  "key16": "4rXWVb3NZ5qatM7RdiH9WZR24RvjgDqdMufP26PSWjNGzPBqkSYdroayfd734RmNPycAsguw8CtTwaKsvyMdTb5T",
  "key17": "5vbhAZvkq8tFXB96mYjZmWrkdNuaCJFoMHhKLTGJ6KKk8Ts1Ss5QHUdQZs8Emn7uesiFXVzQVo7RehWyZvekKZKG",
  "key18": "3CGAKyTnfS9WT8z8BLQampPPgwUtyiAivumyJiK2Z6Jf9N1YNAt2iA1NZCkNn2gfwkP8NPE88eSfHYVr7HJUwdFR",
  "key19": "67HFsU4CYYtKvS9gBmzmvFkx5xnDrM9kv8iYwrNhJ7enMBkHi3numCxu8yU9vPBiMzFJxcJ1jqedURFG9irUCHKq",
  "key20": "3gTd4EtUXTegT7aABRwayYpZGmKHs9nQafUpRhBDTXM86LgLAuNacjBU6c5dhDURAvAzNSUAxkG7D8t39uogFA1E",
  "key21": "5C5n9AC2hZ4TtUbuSdxvttrMwP6Bok8Ww68t2nkiQxZTqx6DAzSJvDTQC6K8jvg25W7B71QHJQ9yybqo7oh4gg6F",
  "key22": "3KDr9mkv9pPjDKq7wBNM3jaHZQJ187FKeN1kYQXAAWy42Ms2cmCwCvGdCXCT74nQzMyaKsqLyx85GRQrjdvv6xni",
  "key23": "Ys8JJRJtoSSxALndfUFQKhS86iBSsgcBZQWXLEAUYEKvefZn4uNKVjurdtGEqUxaz45Wp5pkUmtd8kQeNrxDnqv",
  "key24": "1394QBqCKio3wkaY3Kwv4rYUoMtaqBCab2net5dgmC6KmDc6muJuTUUxcJZz2sxAe7owP5tQEr4fLj3H8sMg3z2",
  "key25": "44jPSLAmte6jRCa6ZPMmTSvYjV7ZSY4zgqw6CQ2eFuu9ziUeYDvwXgha2g7VfufTbeStMQSs7FbHRSDfjREGyrFM",
  "key26": "2F48BBtMsKS85HqaFQo2stQKZ6ftTyr7dmauhsNKjGPqbsQRLKwJNFskvGTZhzv2Y8vaYdb3x9XsvxcETvaZwFNd"
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
