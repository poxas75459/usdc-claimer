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
    "2SmG5sQZDW5WGdqWp2mjNfNy3vYL1Jyp1VbpyMutYbMFXsPhr7Easn71XXyZvFw2sYT2ug6xjCR3ziT5Wrdg2NX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LRDjfGXGptVmeyk5AMk9rz1kDi2tMKhU564owRjCAXxUJY8LJgaDQdnxKEds6DozscZiTuYyqbynF68vpwUxdC9",
  "key1": "2KXXNZQNjPMEtw5UHC1KvrTp3HcxDQULGgjQKRF5P9yd1HrVHQwfZHvVBDgaBQ6DB1gAXWMGsr9uVha3FrwuLnfW",
  "key2": "5D8qeYr8pZYsbzVuFvBhv68kUkCmDw3WCpwicPod6pPWvYcGbnWXQqJzjPzrrHudpsXeUm6GvoxygzQWDJUkQEYm",
  "key3": "48HVpRY39pTkv1UUqJ7yzKWChJpqUiTyTvB7iZvZ7dX9m14E1uFBf4rkau6GcatLa2oPsfCxSVR5dvS2nDSF6Sup",
  "key4": "nvJxXi27YvLrVURrDa5CxjESa3LehzfTapdoTASLv2zGYeY2ZWF3TZuKnJSc4LDB6PGiFLPsNptAaCL8R4zDQDP",
  "key5": "4oxyTCUHRvEwi6pB2ywDzV9PdmdwN3AKSN9PjaD5vz2crUtk772syTpGVDHFzF312PdbsRso4vJCfEAjc7jxCTB6",
  "key6": "2j22UmUFQ7UvBAuSqtkE2gSvb2vUVTTuRpAgfmbdGtxRuFDiUnvLJ556khhf7oPi8rgjtkrYZ4Dm3eZ7KisaJZT8",
  "key7": "4irjR9sV91VsPQEGAbLwTq3k8HWbZ9UMMDTNyVqujcTvS8TQ3LcbatBwrm1kkYZxbyZEh9z3mkuZ2CJxKzZGXpLz",
  "key8": "3gkrg4humL5BzKdAEKLRuAc8dbCf8iWkkCCdcnU3bEBvaWd9nE9V3LA9c96Yv4pofFphCKvkzbzPJd3tKNvTmwM5",
  "key9": "3SZNirLiySV4CgGHJkQK1g8A3kMhD4cArkfMLJxAL9CLVNxngzsXdZVV8ochaD1duMoBFYb52CJiUdyLNwc16TnS",
  "key10": "5QW1M68eRVwCD9TnzuxAg9gCAALXU66SPgpmNGXa9SD9AhMqeLKzvAFZ1rgbFWsThJ23MjJufFZPdBYvU7MQmhba",
  "key11": "41CDWhqUYVCmkxwGMfE51uh49canEMmq126mifgT2Mnh59xmArYz7nDELaPPrk66T2wS8uTC22Zfa1D9exnkLVp8",
  "key12": "4cdJYezZMRLvchBbsnJT9jJQvyKJyTyp5e8vTudRzbZZbc1XpkKQWzH4j1UVFEzf8WtProZN5WP29qVBxXL9f2Wm",
  "key13": "3xQ1hXhs9tLFpporGutxcxsUS6HvZZWXFVRPvU9wJzfjWmXuzoxCqHDauYVjKZPmArsoJ2r9YV12jECirXnynHtY",
  "key14": "5n7JWQG55SvnZ9WeysXKfKMv15spqYszqkWTnkjgeVv3T4EsZF9wUEUmb9pYDD4X1xgf72vYCsncSrDrgF25rfBE",
  "key15": "2RKTK8vGVn6EQLCLsE1dhCUULDzK5bSzy3hxwBxQoojVd4hJdL9fp1BXbPte1zkC8qBPEkX5uEBpaZGHvSiKWxh9",
  "key16": "2auBe2dfikrVriZDrSifAJhY1gHAigrjRtMmDb5VqAkGKJduBFcriDPVEpNjd4TcCp6oU2EtXdk7qYGfHMZfyine",
  "key17": "4KYf5AQt5wNsBCgsZqnVn9iJ5zJr6zK7iEg7Ms5BDxaVG8cmuHYDeNXur2hRfvTEJjzkG3eqaL7DRHgsvu7RE9VD",
  "key18": "f8cFLzQn7VkgfeqsMWvigxp89V9fyqatSE32wW45h3GaNtzZTdi5NbWkzGxEkzEfQjKVmbHkuLMkgnL7eCZkggP",
  "key19": "3XD844XfENkJs1LabU8E2aVR7iYMbr355RXwT4PMN4CmoU6s27fzX2vQXeb7BLR6RGvR3Ja6y9AGdhGUkMT8i7hz",
  "key20": "2E1RjN44bXBsaoGbRanfCY9bkgUc8WmFtMXrThbtEjrExy58HhLtmBtztUBiRrrqWwPopLMYwYaHcyuE8fMmzLRX",
  "key21": "NavqwiEENTJrVNGRKdVknhjUPSYkan9LGHzWnZWPX8KYvigjLKQ9WXupaZC5xM2xPRhtgGe2p8ApgY8SpkQfaXk",
  "key22": "2p3hDoLHB8xAHtQvYVVKtCcf2VXMBCkS9PF6sEw2oBWzSWP8wj6pVon2BuaLeTiZFYrdj4kNKmJG3v1FhX2uRQDv",
  "key23": "5bbX7SWCoHMHjVY7HK1XN4dctz79S49ayZGU6fRKeZnNoicYnrxE1CkRHbkWJtxzAqZutGTyRksQpRBySotQNCxj",
  "key24": "3eTENgqn7H84QFoM1JCD7R5wcnT4RCrZsbK8kuSDsGSypTxQmUBXK1nYVqXk52KNjSHgJrY3iw3GUXaJXcxheSnC",
  "key25": "46qa8nVqndXQAA7jEcLv6kxQAkGabxw88rC1ACGnHaPWaXWCLMiVgsqucSdEcPNjxgkD33h5PK7cyoJHCWxE9x7U",
  "key26": "3UVLqsFYQACbFyZQAXaDMmNPw5akAckB8mtzekgczgZzw1Zcq5j6K4zp54JjYgW6KFrYPqDRkCijpsz2nNurLcmY",
  "key27": "DGLJdaQSJhaJVChU77GXq4P1R5MV65gRdmTkxm434ai4ZCMCUFM8UaBgq4y97B5ri3A7tYykdEgK4GrNaciafnw"
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
