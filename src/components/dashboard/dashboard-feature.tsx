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
    "A1LqTV5aW9A1MMX1TpLpe5uLWKXFBjzgssNuQtc6DXTimU1XcpqBTSVPJgDE6HyMYXxUWrVdoqnNgEuLLpDcRqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TH7seeCnpqE9EZDx9hqJ9FXYUYbFa2QZrzNPkirWctpqbj2RVZQs6KT7XYCFvQBmwghxW2g5BqQg9c4BXEmax3i",
  "key1": "2oPEf1ZSkyFQns3yn3ybtuTBmceUEZ9Sib8m6VEV5sk2zQo3uq756RhJPaCbV9AhithN8sUby9mXVonjdsAT3Ccn",
  "key2": "hWVLr5vL9R1GcMhZcNNfpffUUv36mh7pWD8GhDSsCquc3HXRVEo5kWqT3jamhFSyxqfDschC23bEG8uX6wNmYKZ",
  "key3": "3Ep1EaUbpdPEzWNyM9uMVJraNkqFhH92MxbqszJFVaaSYeNHki6MBG1QBMgVgo9muPNxT3pkXBVU2bAp4SCqxHRq",
  "key4": "4rmaJwmEN9jQqv7ZdyFSFoRPq64sPH2GBidrmycyJmTgXxWCmbsNRpopRcRTsqnTr4f1jCv7eEdZexF2trEeWddN",
  "key5": "ExgGaJA5swP5R6Xaibx94C3YudZA4Qw52yDJ4PJUknNWBUZVenDg6H1syDYaXmcYj3Z1L8cVLLwL5vthXsh1seg",
  "key6": "xdy9wSk34sur54sD47HGh28ftrXQt5HvFj2ayN5F5TYizre7KReQugQD7tBCFXeNkftxPgFbHpUhzUAmgmCjhm7",
  "key7": "3NLJGFUokBeHQSi2PjxeagLHhJADKaaSe8NLzNY8uSqXBuZ9v398TFuNJzuprvtaacvVtrcLLmiAfnKx7XKk48bD",
  "key8": "3ihUsUXom1yHcUet5NjgJZzUUUUKopNzyjYSoSMesMmgKRswZAKE3phTkvoJ6JsH4eU5tXsEz9JJq84vv47BZpWe",
  "key9": "2skiYvGjvjHcpMb8MNU3DydoWAteVu6hgdKz2zDAyx18nHuj2HyCMwFkr9RFNFbCzUfkF5SdoZCTya5Kv4a7d7Kc",
  "key10": "2LocM2x8eXoGxLW8YoJhCD8JxEckNhvxY8nwzhRCLQkXubKLVkjuDGn34sTwVKgXSCRccoQPwajhHdP5obC5CwY8",
  "key11": "5g122TNqY7hsqjPuF4To6CU7wqfnJEhXhxoZbdyrLdBSjXWJPHoCvZs3fJEFi4oUViCLb3gKMRvYHc7eAAnKbyu8",
  "key12": "2U2Rn4NxHZJaiH9nbmQizUp27Wpkzznpg1Jx3W5ghwj8c1fWVUNLmrTVH6c5RGpyNkEKYdadP1jZBptG1u5YQDde",
  "key13": "2FFnA9CFLtzwF1b2rMxumWcYeEqTKSCbowUmXxNgSvjr3rFxZP98JhoFzESpfN4L5y3rwN7riLrWNJPf9KHUnPiN",
  "key14": "2jHuqMkQUXpzpjzCUjuGnKe4EQCW5ShTiDwSqFAYs3cFuSZnsAfv44EjWjzxPt37RCkAn3ojEJcKA76FbYEQG8ie",
  "key15": "4i5geA9YfYhGH3yVSprvhtuKDvix5bzjXwzpGSfiowuzFwr6FLeUFHFAxdQFmRJsmEms1SQZ7v9JxEgKS1BFNnSG",
  "key16": "5yy6bRVGvH7HQxUG6mNKtnVrBaqyXARmiLL9b3M43KYXvkK4DqDYjBPdit1MuKwym8GZ345zJKHa2w8AeTJLtYCL",
  "key17": "5Pdpp7gWi7JitSyjwteEJmGsHiABWHRoTuPRiJPuHsftFja1uEX3WXVMF6q85UiZksP2fCgCi7LwWVogQLtcwPoW",
  "key18": "5E82ENHDFz6MxxpMySGaid92B56Zjv2677Ar8toFURR8oLDVu5WwqGyAg1JB8V8mr99bL9TD9PCSre2xv6voPD7v",
  "key19": "3ADnWfLk6qCgdVmvgZZoj7LNzz5a8C4q5eBRp1EYPuPrhLAZ4tRoUaNkZqs9SUJWzQKxn4LXeHGPHwKxTEtJ9ZQ3",
  "key20": "5wjML5MuHLin1bTNem9pVzGFkZQjNS2G537ehHpckvWJnktP8Ye4PDZ7d1KwMYrFWi6WmERnKDV4rJWBWh3YiDZt",
  "key21": "3zZNqsRaZ8CiGmDKycUT1sntZF4oSyJxnTGD24HCTVyrKNWPfnyiNKb8gJJtwKYw1AKzWnAMofe4eRC8DMX4HFuu",
  "key22": "2wDJTerxYiC76oDsC8hB2qhU9MCdQLXjmbUwUU9kRTY94brDoBjtmEwwKSbyUZjLgGz2hSsYjemoXeK22J1Pwfqj",
  "key23": "2ey7zTNnd2EoNoXpC8cumo4isZb2u7Me8DcgdwmF7eg2kGQa8s3y2zjFkvTfy9SrcXNrb2xtF7uix56NPkYMhUJ6",
  "key24": "3QEoGp56CCbaKZJqHekY3tENReymPTDTzMWpF4gMmGsYWGAQjopxaRZY3nxX5Y1mY8MLYD72zWBvVesp4xRBKjct",
  "key25": "2H6uwyGjdRr6KTF5ZVFMcqroR1SPhfB2AXbTPxLjgUYpgFbkp9eLyWaBi4wBuJCya86V8mA3fa4DLkjQrovvcBRM"
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
