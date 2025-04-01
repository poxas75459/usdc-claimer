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
    "3LnbZNqGQCzNRfFjaRAzGXDvw5WuDXAm2qowBzQ7kuGpYC9hAavBfewjKdzntohNpKc5E3vpYCJhYngPjThrVHLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dJqUHTnd6soWWW65qh8gtNbZJTj3chhwdiLb4ieSNhwmTwNteadT5CZwXsQR5XHs1j3R6WNty78NbS2tYSJLD2d",
  "key1": "5EfNiLR7NN3RVLTGDRtE8bQnDfQ2B24qe7QXm6urwTn9gCFYB8i2BBF8EE6eeCav5sCXVoEUsudWD1Gsfwc8fYh4",
  "key2": "kkA3FzpGbF1bLEHtLJsdMNRACnkT8pEng38JbsiFGfd8MNpQ4fycW9ifF7GBGGAD2XhEpGrXhbnUuPiSDiEhstn",
  "key3": "5kvPF5xWgzBRdBUU1Pt28HKXtSAKpJHpRJ61vP6EceQprVdo2WNViaqzA9o2ovBVsQPJMiXg6mY36pwq5msuJMsh",
  "key4": "36gxQNqJdoyN4MnJsQoj5hHxR5nSiuK6deHSrarqWE6MW7UwchvNEQB1M7syDQ6p22AjTaW1JJPRqDbQgVsA9t4k",
  "key5": "2JfjtiKJu5THTShH6hiJvW9YPPrFLJ7NjbV1x1P24WZoKXN8wg2FvNeNMEF5QSMtmtbExzJaBZVrkiCfWTEDB2Mo",
  "key6": "2zvj2i8W6oUoGki3NHnDVPuxRXRb6Nc5TTXpR4CY1MKiY9uXdFaXHHsDicDBbH85rP4gVkgodRMZgtZNaxpESbYa",
  "key7": "5nBT7mEVTzNafdvyDiCuo74sBsh8ZUQATez28b2oiNkDFjZ8kBJX21D9YATDyjCX5LBdqs7peLP3vNraQgsAjbhT",
  "key8": "3gQxEayBen9pbJAumpYSDqKq59oYC7iFzToadKVMRCHQjD9TL5xZYfRNH6tLnBVhSK7Vu2GiiLRBoPkGHFfMkavD",
  "key9": "2zPHxKFm99MxDDzQWFY8duGxRGSywy7qQEDZviotsjviU6yuHRtvfLsz3wPbqYWEx99pZWkDw7UndDC5G3rDvuBJ",
  "key10": "4kzh6kXCHt9rJU5WkiTNrR7WapUChsv4btyyLCAnHhfyztvUmuEVM85rpzVbHGGsFvM14PK5P3NtNodu5DMKEK2B",
  "key11": "4ozLLa6WBRzteFMRCpAfgX51x4aubYzioS6QkrzXHqnrCKxH3cnhnHujbrCKxne79jMpb8CACSkDAZoAZFPqLi43",
  "key12": "2SrMMzPxTreBk8nncJEPhavjWy51b5b1CLAYU48pLSPth9APX5ceQv85hUJfypkQeari4e8Nfev3K2zEsrXiDdv9",
  "key13": "BVMHQP3N2gp4uZkYBXXaRnCop68A6qZUQHJYaXHcZvkPeYNYjnWotEj5UVKAhK6VNC79drigMtdF1d7QysMbbic",
  "key14": "2NZU6JuFiSdxicQkFMGyG9E1FCfNMZGKJuhVWvHPh41j2JjJe7KiKoLEnpT2TyCRZ417yxP7ppwXMp9xGGiMxwzL",
  "key15": "Zo9fctAZvo7wvQaobf83Y8FJLYfNQyB5xcefPbrh42ZVfWHrxZxpXLA8U7akScxtcFNPc6Rc4UwBjqdGSMSAoYo",
  "key16": "4gmmy8J6CbGqAZgfpSgPjF8mDbkx1u6o287F89vgMQKq3WLXJYRaozJKcCYqVnK8BfZsafinL44sE2hPUGKtHcZv",
  "key17": "3N4acGnjQQPnuGSeJ3QA9bSHCiwzXrdJ9Ewj3ZcebNnUfjmifN34iXQRAuhNGwQgvZxzzCR7i45tSNDD5qTfKenE",
  "key18": "4XeanpHsvMgLT7xzBcBKAzsdA9h9VVQPFLFDR8tUpkDov593jXGX9PUFi86YoNrTtq1p3eKvE5hcQR4fsCWSfm4C",
  "key19": "3eVXD3HuM9qTkiFR1RjSxRF8yPnAZHtSSYdP69v2Gpntup4saitizaKrMpBzYKPjw3akBhrwZzEtyjixsYHdZxve",
  "key20": "53KxXuNCRpzMxfzMP7k3ncgVJRPkw16LMPHJYNbddht4s8eqFGvH8HAWrc4jYKrDxf4JijzmsqsNDCMRZJZkRfAN",
  "key21": "2eZdy4djRyRJyBTtWUgAPoop4EcxhQhwEjSkWdQ656gsM7x9Sq2w4tSNRxcFbZzxvZie6wX38Da9cXWfFWxE7yv1",
  "key22": "5mYB3eLQVaR1qzHZXuCR3WM4iNA8LN5zEkCYgjrjFaQs9hHDBcZZdCVbjHZRg22NT67UXFys7Lk8b77tdgfdVQBR",
  "key23": "2tquVpHrMZ24uZHKDw8V4gr5Aka6pPYAT2QowjVorRqKGGTaqgyRkqzgUbyQ2ou6fC5v8u7NXNr2gKJUVq8u77L8",
  "key24": "5qwbM7bpzHtJvpoEB5op51QfNMWNRNoePQBxi3wGJq5cRWNrHDsrBp8CyGsf3N46DXmJVPRmCaZ3xnCG1bMHfMwS",
  "key25": "5fBTV9bB5kZPnoWgWXMjsjvM9qUkbTGANeUDWdi1vQ3y4CwYmz9dR2cVjrWcJbdMtZR9uRU3yHtCV6x6xUCBeNzA",
  "key26": "5FQRZ1K3nJHGbAXyiL57rvqmEuLFeXMHs2k91BSwdK72YvdZjfBApzMrEGd5wz2hsTfSy8SkEoXKoKQSmTMpcvJg",
  "key27": "4kKvLQ4DuRvPNFjSi7a9iaX8K1kuwHG15VwvPFqhrwRTyU849qeNtTQceVYjsojcwNVf6AK5hLiK8JAiAA4vUFfY",
  "key28": "5wxnL5kpoWyqEXSFZZkwxe8injw3V9heWnB5iYwevF9LGjcQGjUWAy15B2JJCsXKHa5Y6YYgNMS3pLMsdBzFgE5q",
  "key29": "4xnEDPjmAbU6MFR6vSLQGaC7qG9A7SaJJHgTxYEjegXVaidnSWYUe99GU45TEcSK5TruDXKQCN75Xqc1z7enQACm",
  "key30": "3eo4797VzbQEunVZMG72s5FZ3YnPdoQQiV2sqV1ZkajqbfMq7EAeXBFChwxnZT6XsgALztmuE2aZKTv8WbtFvn6n",
  "key31": "4W2f2PanDUex1gy5sxiMjfkquCdUvGEgpCL8TfF37RgNcCwSWzZtMNcag56cK2pjQgH8U7dZXLLE1KN5KxBjt5Es"
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
