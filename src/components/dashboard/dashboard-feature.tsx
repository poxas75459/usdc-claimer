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
    "3oXhk3gqs9z1V896XcD4ZvTybbEX2e7TFvo6VEaVCkMaMKcHLNSreuab6FbV5oF1QqobbCbpRUFho1ZGfWgtaX6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TM4cmYtKMrDRiUMkFqCnPmo7HTsvB6t4cZQfzzGaBfppdYidx1qLgVwHc37LRXNia25o94GwbMhDN6Ss1psQBYp",
  "key1": "2sUPvFcTX7ecvRUhYLEfZUp8GcCQVNkWqGkyP5j7Ek4VXjbtKLYXAnG7BBDTg4fHBP38rws7PwKsoiqitocacqXY",
  "key2": "WwPcBJhd6PypieXYgUzC1394ztF7UdvpfLqBRMrmhLG9ZRbRtoWy67VFsZjiGSJkqcznjvbfoWujanJ6Q2PbXak",
  "key3": "47dfMrMT6WJ5vMVo4qCLAikZnyK3oAJ5o2ayM14XxuWTxFxt42xDdjhhTEJY4r9f2t6KNsfDuo4vvVg23uZAj8tc",
  "key4": "4y9P4jPwfsVppSqMnCY1Nf3FRdFpcUKbWJ8m5zxFU93CAvVSRJXdsfpQV7NmwM6cUTprzcXS4cp1RNBcKWtoDzTF",
  "key5": "4jKRuanXwobsJUyQsZYKbffsR8TMgCQoqaxXcLU82RXcKj4yUhdnHnRW8iXrZRjRWETCbMgZEkHnqAbYQozvHkWZ",
  "key6": "RZfM5X76tQqWhcatYkh9MF4EGZA9eTtT7ZBudbHDVPPJnHHRxHHv3hRQmvAbGg1tezfmT1YvJt2C3qpRqTARZVV",
  "key7": "iKmJMKzgt4EVokiZ7pxU1T8fLaorsK3RBcpq2Y8UZMnij4BVD5k8WyhWgWkzfMFCcqVXUWjSmZBEMyYUMJjpYEo",
  "key8": "2bKVyg3Q3RvugRjGErJfmGpC2RbqBkMpT1xGNkJjXQWohEPYaFXz4rKMMrcypuw5mKZP5t2ziFqVcL2dWJQjsBak",
  "key9": "4A4FF6HBGBgqSPSAsj3a64jL7RPG5UMupGecpB7b3vysTCaihtLj35SYsnh8TMFfdWbCnQ2x4Nj2fLsv1QUd6Z97",
  "key10": "4oavNctQ6BpM7jS9LXyrLEdyGHMjZNEFrU4hhCNw8ARMRPcT2ByNZWWzr2b4HVz9QTx3ZZFLnGVHpwHh8c1WUqBy",
  "key11": "2P1oLyigCzm6gqpTDpLyy6KxUZGiR79eU7H72WewZJE8FQR581SMTu6tHHaEmiqqyEYQ2jtXpt7zyYbMXCGtnRGh",
  "key12": "5zjNMrrNJzZbVr1fjpx43GoEt39nK1ciqQEB2hoxZYj4mipzdCLRSo6MGPw7Nw9YYF1Ta9GeCmp6JWFgPnWYTmST",
  "key13": "393jh2ZqPovXZEyN8CKaGXrqUHboMCZLS8RrTUG4Wk5qyds21Qh1jpTohup1YYGFVHQa6ejcXecaFrBivbCsCt8M",
  "key14": "2jqSju4QkQaQ1BDqQ1jMgVm4Z9iQe87Ha5iRx3V3k2NRKtA2T1csc9dhm87obESYwjfaA2PqgM9FX4YecFQRCBD9",
  "key15": "2ThVBmeeX5TCUmoJFB22gs6d6xfZGziFw9qsfPzr3urirCv9mrxi9FroHYPWzJ9KKkXLCYB2eKESN2QAVuStw3BU",
  "key16": "5MLsQwSrmCjEZUb9DA2zTAu5CPpDqAPfAQirThf1S61NdCckA8qxAgiExg4BPeBmBuANDELvgK41Q5LxhwZarFvb",
  "key17": "4xSbsrs8r7kWhtRRQYP2NWURrQNNNp4RKn9okrW1curtC3kW3Gqd5ACWvMaNcod7m6M2W6FRZdssEYRPP4geE49p",
  "key18": "4W7PwuSWjqXZzjA2EHwD19zCFSqWeqKWDdjgzivGRCe4WraQ9KsP2Saix2CEuZuCGW5Ne2LCDQ8kVC4AZ1FTHeAT",
  "key19": "3P2XtzggvtKdvepbNDGhSSw5v7qKunhCNtkHwdQjrBKkaaNePWqsu5DtcAQDjdAFg3ypytoMQ6JNVBusaN7FrhR4",
  "key20": "5UaSg467sLAM6JrmjHyRAZSHUZTQmuywr54qMjBDnzkvMu2Ux9sM5fMGWPseFCpbcA6augE9JWEEcuix9JqnCpW",
  "key21": "33bY1mPCqSRs3TAf1eaZePMxrb7hZjZLTnrHYm8WEJkf64UchyjpNGz8FZo2DBkC4N77xvisiHZ2X39HdVNMcoUo",
  "key22": "SBYciBWkFAkSRgG4y3MhEdzYMJSxK34Kvn7kJX9VjukRPMLL9bUtDhcrHY5hmxmbGg3YAXKVQf9PcBAPUAYvfvv",
  "key23": "2wurZCRL4ixtjcFhQcuguywpgtkVndy7KaUtt2n6mnhJYP9h3Tcpkqcy4ZrUMH3x6DBRwXoiTceq6FKE4AeWU2dX",
  "key24": "2kXjVKBhY6mtiyD8Dw7gWCL45yy55wNVRg2xfZU3E1bxD4AsmMBfEupPsnakcCZn2nnM51tgXMfZkY1BenMCyjuH"
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
