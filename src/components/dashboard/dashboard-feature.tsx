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
    "35d6XatFooCMYU99oS9vkTmTKi6NbVwxEViMc8bMMUH3vRTLvB4VULDPmThZJakRgyPFfKEaSvKxR8GM171K5rN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VbkFB3S2FHwp5eRhqWYvi9m9eN6xdo6gnrgmfr8pMswtzTtkWuTHd7qYrZBMxbR2gxLkCcGFYQW8DhPWhWvRo3A",
  "key1": "3WSJPhwuYGapDBDrigqaQs7J1qQUPD2agUYJuCNCBP8DBFD8yKR3njHjYzjrDbUshiXNBsDeDt3wkAbqNrMw7jiJ",
  "key2": "638QwN1sDUD5vyeWR9k6PRqzqCa8NzdtG9rNE5bjNyt5wUynWrn8KVWCWMziBxSnrGdUcKnS5aTMLm2pxjdTxc26",
  "key3": "4EQZdD7RwcgeJZhHpHQqq9NSTV4zQF1yYKUmnzEbYAJeNH5tPuJc7RSxwGE361DRJ7U8AWrmh7X8bgZERGtqT4yU",
  "key4": "4ykPKHSaxGymY2pV6CSXp3eFgdFTakPmBu8iQ66XJPZMthQKvCEbzH9RNfpKfxJmCKan2qxwHhjp2b4bsSEAxM3t",
  "key5": "3YkhMzDmAaSX26AC1SY3V6c9FuZeVrA8wpveaouT9fCTQ1XR3BM8aYrDpEDxKbscZFNFh5dbc3UMPcpXrphPnNTy",
  "key6": "2XbAQk3Y1YgFh9x9JD5fpcH5pMQFwAdfWiKcGJBAhCzDXcWUogurnoRL3nN8mG5Y89Bjf9B6oZPYWRr3bmU3uo7V",
  "key7": "2NVKB19zTtgMLTRvKTqKGC35QRwBTizjhBXfrwRTxg4N1i4McnN4YPx95vfTeXCFweRZGfUceokZ3zKRq1fKSN7g",
  "key8": "juffknz1fwDsP8zhuJgjLzhTGCmehQ744BBwg8KBPetuAZfyojvC4xPEQsv5Nfm2nb2BrU1d77ZSteRtatHZSju",
  "key9": "5DPsyog14U9UHZKnwMJkRP3dCgN2y16cUUDCHviMiWhVkzFg4u7biUMp4ErZkB9Ap47jvpWLziDJxffNP1DBv1Q3",
  "key10": "MMKjJXjUNYYnaZxEomP2kK23RnACkkU9mam6ute6242rQxa8QjS9U2fpzzHdt6y9CtLF4XLqsV5RJBpxMUuEeot",
  "key11": "4EXYiSTHMaMrQU93bN97SHvw2gvKQj1qqYMwu2JgFSkRoZv412A7EB26VNYj9kvu6pmNkLd3jjf9hGdHZx4gfzXi",
  "key12": "5G6EqheGEADDYvL8tgwEkSUxdDwkKx3mry7xMKY8EpEKsQD5ox2FKphk4aeyDT6jXMwLPDdsLAY1jKqqWcmPAGrF",
  "key13": "36baSKDEF3ZkNsK64ZMcJZAeKvBLLYcKqjQrX8T4BcAogfrLPB6Y9gSuesmYQDH6F8KGKjFXwPnMD28Z7RRyHaEc",
  "key14": "56nxcHboQR1LFR5xwGRSd7Th9vaqZR3vDDbHEvKSipqvw78jUVLY1xf1omGVGjeo5hHc8iP1u7Dm1nQjGkWhCBNq",
  "key15": "miL4mTPhpCbp28JTA5PvC93TZSRVT26RepNkbW3NSo3Ag1hsqskhaZpdHbHLVnkV8NAt96F6iRGG26UW74Gvjba",
  "key16": "4tGTNTPHVBnn1U5Fpp8UsS3VCr4TGeUXRbhZ2EJsCx4p9nXp8NBY7vkxBJFSkDqg8ppaJxbqUu8MdzFhhExhoExx",
  "key17": "2gRHCRaLB8PD9NM4xTpZcveEuoDG41R3VpkQguXNZNkCKxFX7stfbMLGmvbQtuBfy2mXZnJHGb2f8azxSh7PZdnS",
  "key18": "2PVVzdPHkNwhsXu44QSQuvQ124L2GCGGqHu7s98PY8X3ZNpqNt9PddE2WKrEM34H4Jpx6FhkHAHERVTvg9t6KVjN",
  "key19": "2u3YLAbLU4Yhk161EgHCc9wJFLM6aZn5WRkpZaHgAR6fDwE68bQwF5YifTzkKKFCFAovXXrRR9ezf6tooYL46jeW",
  "key20": "3zb7MHLDajRVzArJjz8X3KLck8xSUP6oCxm9yg2aNnNK74NNCJ8TpWSguu5QL54UuJtkYwVFMz84CULLfBzopSmx",
  "key21": "4AHx2j6veVpsdHHNZzuT3Zm6DheR4eTceU8jRXBj7JCNzDtqGQrpWQZuJc9UxNhtccU2WuvLAtmq1ain2fKJYA3S",
  "key22": "i1LZYV55JeoXGe4YcfhfTAGZS4iKB3FQwP2LX8CwPJ5tXAWYuFR5NTQNMahHUMdqNpZo1RSoX9ZZ7sL5QJcMhvT",
  "key23": "BQMnEBJRfhHr5nKUxhQ22QY8qxR5HHYkUH1g3X9FXizuCkQZb6Zn8a4FieHRNweFKCf8horGFW68zkLFMYs4Tj7",
  "key24": "5eKGHn4LndT4FEr3u9ZPnFn9GvWt3NKaogC9yVo6FdMEBk1FdSKACxuFS3GfHDcWC9PbD9sGiVkXUWY6XUm6pVbL",
  "key25": "39CiWC4y8xNTaBrPb73PnrXxGJ1GqqX4LLSeKANLhhA9ESNMHZFE9kSVsKwtFyAum4UgKaP8aFRsjumpuoZz5YK7"
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
