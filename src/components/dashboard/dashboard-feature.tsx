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
    "2auDvZCW79SCdTBS2DHyWrpksLX3zW3ShTHbDfYDNDgA7545eVWFfoTi8bsbZmzzjPgM4sTGFYHvYDG75eR3kLQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sz61Ab7YYdqmfqnwxXZMm7hMeFdRBe1r9gEUis6iCh7we5EBELaRPdYaZb6Wz7Sfbzib8PAwkVpfWuWNzeVDYY5",
  "key1": "4SFVwE1sqpVMrH6gp7accNxnFQamrorwsCUBUT7WmW1T56VK3kz66URvCkQjZRziEvrBxQw6pnEDnaoL4pDGqbyb",
  "key2": "4biWwxmgivDzJtPKe8ZM5K5k1xtupQWMegGKRjm1SAjpC1VwTh12SxHfKCAhxu853B4jJuNEiUdRb1kNh5Dxd9VW",
  "key3": "LUjXfGFqxn9wD7hAPYABK4DdVfnsN9JUufMBFwZB8hmFrhswKxrSgJXqaPuvefsK9qQhYbQLR7pNeJUUyuwHt8t",
  "key4": "3NkAPkzFXtZfGF2tRFiTh8wT8U5Ze1qrhDTkkDueZ85SDoKnRiKta46HbA4VHV5kvLqePrQD5Pj3G88qnLRfmtSG",
  "key5": "2TNNpTik8SMvHsaXhrtVooGLTjkMMrBebfygfnzx9Gkr4Ct3sGSkJRrC4vJDRQuNEgmdA8BQHqzrmvdWmKu4x1e7",
  "key6": "3i5Hy2FoTZ9y7DDAijVk2A4QftLJDmbroGB7Ru2f14Y5wYDQtPoQhEAD2oKEGwi89Y5P61gkmEMQxNDjWQgTnQji",
  "key7": "4VKByf61WE6KTiu5Koodm49Rb6CjqnyrwZdMSRiVy3uZ578qcAW6ArqvgtfETXq9apRyqksNV8rFTsZDbEorBHfs",
  "key8": "223f2ZbykeTwFtVnZtqffkkGe7SHY8Las9QJzBRvfU4gTBX4BRyfrRfspE48jEKYRcptfup9gX2uUPMrpryFEjBg",
  "key9": "a5ZB96v2T85jY6DUEuvAN34tRwpMnasGTVBuGmSt64Ps59Qdyu9FjcCo1WzEtt2cWsXMWwVPQ5QShaD4VuQ9zQ5",
  "key10": "5kqiy6BCbTas8vWTHWfn8T8bWJrgufAV2ACHiyr1tyDxs3MFFrEB6xvVUJLKkenBT9UpM8XKLC4eTKzhYhbRYmik",
  "key11": "5prYtuTeY2cP6YZWBSQg8WNwipJg4wdX4W5utfHzyAqHTofjspjFtWNmLch2uRp8YuZbFqXkjPLsJeLmzkpWHtwE",
  "key12": "2cNGuAYyMmXNuaF6xahDBteNFMdgLJHGT6bNyp6fTDBqnSDWBAFgUNCxw3TEbmXoR2ck6nTt2aNz6wg4wA9F1KvS",
  "key13": "2m4cYLSyXU855rfiiBE9uGHcFfMhLJWaKJiCkgYH37aGimEUjWY6p42rS3WSZ3e4tHkJP5scerq2upJjEjnUG3hA",
  "key14": "5hQNBzfP2gb1c6Wr8ahy2UV74ULLPh2q7S6Pvp33xQH4gY4vpzH25MacxGdm2UayLQnDPr2NCPFAgi139Nt15WwN",
  "key15": "4mWTtrEq9tn243S1grLQTnDUKJM6AAkXGipmsQSabqYrbeB7HeKjEvC6YVATmmUcH4r8q62yMmpSk6RrAFbDZSnL",
  "key16": "5nwQu4LenuTYw4yUU6ix8sUWRLAyya4aciUwpTq1ib7nGkFjhQrBgERANiuWvoTyKVALXXrsLe8AMa3QogZD5ye7",
  "key17": "37CoFJDdquHbL9oDBN9xn1H9QjYTJQv3QaVwTEpxKNRh4664GvHdkgLiEeU7kzh5T2JNMRFQerXxNFqynzd5Esm5",
  "key18": "3r9TYNPWS4C1No4xMdKcvU4dZs9C2BPE3h4WNsWNUHdDty9TsSZNb4aRtWJsHx2dU1KkJ75UQ18A1cC7ctQt3UZ1",
  "key19": "3gGLecQagGtk8fyRdqpQvHdQaW5TLnefrtbbaCUNeU2RtLE4fswRX6uRSLiPWMdNjm4ihntHReB1fY6AGV9N5o3u",
  "key20": "28q2v4ET59X58Uiz9WahxY7yoSSV1tNX4sc7R5qcSKFiS3fcRXHdbB2MbnN9LTPVhYEoJf2o61zai92b5qVrymsC",
  "key21": "tCi3BFgkkWthM6a8JkR9Nu5WVyvLJUQfkrrkkJPXamhcQdgrTLPB3qFcHg3f6ATBhC7GqC5T9c3SBHcA13YxZJC",
  "key22": "4349xZ6w1VxtnjhpcL3FttJ3sJUhaiekBXcWaWqkR3ZaKyTtiewQvUu5wq3hkAFhDYsnVrkTGEhX2PHR2BsjoQkN",
  "key23": "4PyPKJpKVgEnVGeDoeddL4WjQT6pgiouaAcXhFzzYB6RFTvgPcRSrPxXHSJLFxT6DfZeZW8ZWFbyHN7LBjP6W539",
  "key24": "4iD9z57tjFCB1owMaNcah2BQ1sA4mNFLF1aq88P7JZ5cAo5FnBdvxw8urQY7Xvfjdh6sb8RMMGzw4gr3LdN2jAN",
  "key25": "4L5fbwVhUKV8LLnRLzixhggigRQRDzfdSorGgj3iNmQ8CmFLRXsWa152mpsYUCmsfnRpQcTFwFuBbsXRBEeSD8P2",
  "key26": "eYPQXJobB3QLpQfYUk9YNNdBWSsoB811ZQBTLjBYTfYP9eF4aQswUGJGS1hEURPNW6uQPmo3U3DFCoqzpsSNz4m",
  "key27": "478Q1DAReiWLye3pvuqBNo1eMPDBJ8GW1oUS7p3sQFBSwVaQziMXsVkku3zNUURd2quHzC9YZ7wGRavRpmbnse6m",
  "key28": "35GMM1z9KWi887KeFmgiZvzG95Dje7K4GaoMaUf4odtV2FTToiBrcimEsMwcKAxjEGb21FDj65gp6xYfLmoMJkLH"
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
