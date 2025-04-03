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
    "4C3RU84dcgWYA79s4wffuWfKVYrKTYcQD1RHhRpbiUUM2mEasNrfAduZjAy3gtFJvxweGpZVdi6iLwy9PLFWhj9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65FoW4WuoPF864rJUXiTTQST5MY5DceE2XQMjyQPUfwky4H78TMLRztgF7hRx1LD3gdVR4hLBLWaQ28KwgRcqKdB",
  "key1": "6k82D6iXnXGgVPm2TQ2eyQ6FEASHyQNG5FSRStaJudd9cMvNSQSTBLqesoapDrpcEcUt6gLSmp6Nvz5EeFrbP3H",
  "key2": "rjrUesUqYbVv2x92KgMhxJpKDiHDMraNWuFaKPy4RXwTVZTRN29V6aRsFc1kggWUoNdCLzy8U4D9iqrLohKmyUL",
  "key3": "4osUV57rxeKALqzV1xHn76MYSbnkCmXfFoArM5Fq9WwLcqrHPVsDKhZvziiJSdSFUkbnwCVLexrXrvynSjEkMAZf",
  "key4": "rBzaEPxXQ3fK6wev2HKP9sXgVKJNEMXzx4XLCHyGHEwxsRVU7xrSfS4JQDMYwfVDPnvVdV8GL7sZbLmQx5NFQdk",
  "key5": "3iTXzcja4wh3iHUTDTYC4PzoauJiFoHzZse9GTLFyTuPyZR261hbFxNA9SagiPqkgu25oMMgoghjVBaZkPP6MVoa",
  "key6": "ZHkJJvY8HYGKHzwaGEokKjVkUDqFYrTQMgMme47VuowFgihd67cr8magLPvurrR6PeuQx46ZYpgg7LT7K6G3zgv",
  "key7": "5nV4Xupm8oZoGsDzi1hmRCbSvd1KFtkgf9AozsySJsH6kav2CXKc7dJnCAnV6jqbuDsPbkRXeKbWvXSdZ7mbggt7",
  "key8": "31eH9dzU4C8k7wcioNsz3beMZEtwTiMnWLsCnAyEg3YbHMztjAxBASdZCUXZPvGg5vZc9L2mpARH5ryqGn16RRKG",
  "key9": "2xLr17mnXyG3vK1zxjTXHTw7rQX9rvsFfNnHx2U47bniafEAQfAZmgVqDaA1EsYvfeSQAipCpgAtWVRQ3so9UfyG",
  "key10": "2EgbodU5ZNy84Dh5y3PrT8nqxMfmQsFjqMDkTEmsfxR8aNZ5mm7fHapYsit25WMmCH3VXzDb4Nm5VoqW9qz8rRHZ",
  "key11": "4J1XW9kGNqTj95DytgKkRFcoM8YuCtAvdjYPfiR5GFEWLEnt2kX75vrfUxt7s8nd3gAjuYofShw8r4QTWXNXDGic",
  "key12": "4mrKFgRR82Dc21yZkwY8hRhG4h1ehn6gxAEJGGWaFRVbHKBD44USX3kuRTF2f1yypL3kL5EbFPnChcabvaXcS2od",
  "key13": "2cZM1Y2qKKFEA9HAiLEJ1SiJU7RCwn1tFFMaidHuZMyd1ioCz9jWmR7ZAp9BGZstiNa74JLQBYpavDgBC8c28UvE",
  "key14": "2RxK2JS4PpsAMpp25cL6Ba8CnhUdDfb4mVUNwJQ2N6GUC7vk6j7YQS9MpvMEfxb2Up1v8C7RzrB5esq9ZUWQgFjM",
  "key15": "Mb7dst61h3CYcDzkKsyVo6SqViBndANjCJvTvVfqZiH2hVScQpaXDwidrgmWqSPStDfwoe8PXkT34LwnWJAASjV",
  "key16": "5Jvzapc8jPggssn23LV4Q9Ls1vvSy1qd5r83VcbyiwxqcwMzyBh5rdrMhRzybiESux7D8B2yyumsBcKAZe5oSnC8",
  "key17": "5oZEqRdrCjb4TLfjFJr89LmNnZ9cq9qaUrYchAgRAsJfxEYKQ3wQzw5NfN19NNnHRbNemtSh4diESa9gxcNoPT1Y",
  "key18": "58UUD17AqcGssRRJKfGm9uqSqngKBjQdKkKjamxqwJQFgZP6MAbr5N6jbm2acp7imB8kFyv6nRK5x8fysxU8s2KF",
  "key19": "4sb6VdG7biK1BEWYEBCL3icXzYWRa2VocPTeozrkYJLfvBdi6pUUwa5uUU1RbeukdgrtrPi7wCtucJzNNjwpftMm",
  "key20": "TQzq64EdMzKqU9ot8kKjWC7GKpcmRc7HfcLLSmBNtNMZGcSQRzKviXwWsrhZy53YjKxBB6kEHPHEjUqPhPt3VBM",
  "key21": "TMJqX2yVqMUgrgLzG1YVB7oaH9j1fi5jtzP7ifLeoJbKDMHnMCoR8k6HGfBDqKuooGnY3jGssfbvwmB3NGzn6oX",
  "key22": "5bfhaGPR2z7vYYebWQrdPjGv5xjyCFyz9TipR9GU8k6eXRCRQZdL2nCJSWYQrv9Fum2fYKh1XNqqgf6bGhKeEWwz",
  "key23": "2v88RCZFGyGv33PqZfnirb4479Si2r8boqWSnKVz9mYJTkyPad2Ls4HTcVdsXcqWEhVjfHS2o7nccESvEAW41sMb",
  "key24": "AF5N1KdZav8fNh49rtSRn2SARPPqrR3aYtrxWnHUbeia2yp7TiGi1qfLm4Dy76kFvmWbAEmC3zz7ZpgqHjViC7c",
  "key25": "3pMtXxyjzUZW89L6hBGnKAy39tMDdQtKdXPmwPeqccUrqVqEfeC4meidoAXxA2c3rDcsNCfdTAtWfkf5ukxRr93x",
  "key26": "4tQx42WajyLKUWsJ1P5DbZ5RoUPDK9eR9qVhagGo9emhxPeSyXk8E33qFTUpJzAe9LjZVFBxQXKVmf3Fm6WcjyCG"
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
