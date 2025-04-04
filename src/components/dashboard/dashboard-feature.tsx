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
    "3mnQ6rQiPCoKNuqcQESaAEKWdc3UMLipWMcJbKd4ochJNQe4ocNtaRm1nzoibNd3ZNgrTXYdixZ3Yrpr8MHzJiQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uSCkFhhbpHzgDQSy6S3RZkm9xvH5umqUrmrfqCqdzRNJ7hmzHJQvgdcbzY4zkTrgHxGLFF3WVrcobkZop5cfP5F",
  "key1": "CoHfRwdmSKKeVdtn2V8CrsZkMcRsDm1imzMrS9Jdtq834v1DsrZLkeegMqAme4DW9tfXUJLCVemn17YYv7WXdBJ",
  "key2": "4cEcC8Dyv6qP3HcS4C7AZANyGbf4yYaRNwXBueMbrS8mgGtqdzu5anYzuSFcTJQyLAg5ZtmVJ6GiLJf8pFRC1jnL",
  "key3": "33JjKVxnxB234GkZHfndBDZjgRaLdxijvTNLPze53Q7zuxMJuTEVhtEA6oYqyaDd4iJKWmpcqcdpXnSwaCFXYoDC",
  "key4": "46TB3CbHoHex1t7JM85Yvjge9hFvh9CWR3u3twFPhnTPrHREgSKw5Q348hJsuydDWre397QAbZ2APeV5JU6HtqJg",
  "key5": "vkYTufSo4zf7AiF8imUDGDTUCkKE9swfSQaVqmaR5Q5SYF1kT8FXqBvRfnspDGn2AbW9AtKcK5rdFAXVi9hw2eV",
  "key6": "2wASKwUNbuGPGZRqPavVYpriYKUVLPEoNjwMqPZRUGfZtC6LoNCT32cWCrz4QH9HFmt4GFy2ZmY82KDrBaFpLMBP",
  "key7": "3ZrdCgNzjoKgeDUTD3YjxhfTjLjyYvGMFimXVdztNB9mRxe8z8VMusEo5oUb1ToHoohThHLUnQUZN5UHC7Tt4RzV",
  "key8": "ApujxyPm9KEMYL6ekCjCnJaroXh6nRB546tfZLfz863AsTcoZ6ySJ9BfkTdMjNKMTk63ajJp68enRAbShNbc2aN",
  "key9": "3EtYnLT1vDJS9Yr6oWNdtutjE1pqQd3b65rHn642MYLLWnZsdTanugUYW86rPrK4zBjcR8r7afaRKeCfpbotF9HL",
  "key10": "66huH5wqWrvKpgDrcSYbNLuYQkECqvoccws46Mx4vVkoWGJ86ALUQbgCKEbZGcXaKaiqgqWMa9p2Fad25JGb5jnk",
  "key11": "5KG1Xo62ECASeSzyog4ZtWVk34nLNyUpPhcqKUwtdLKx6MyBqMGTV5E4BbDTuXJ9SQ8nJ3qd9s7k5FdBfnsuZkvx",
  "key12": "2BNrBVndgegPYGbrptdQnDhKnzcKBaTBMQA3LSpFSyTrPrjhBDpvPEJNqwWEStUyBcy8SETNotFc1yPuXshEhdzX",
  "key13": "3CYJQBGN1Ds2uv6vdefEpQn5uA4Wu9S1j6E2TmXeibK2zvhbBLDvdBFB3cGZ2o4wRFiNdefNs2Pb9omyQsNWMk1e",
  "key14": "36yqvcMb9S4ddyHaXjNLApc26QxiHUShQ1KLdPrgkXp5UJbEZed87Bx2WG4L1cqgB6nVZJyhamArfdwjGVUbCRGN",
  "key15": "5BYZ3Q8GAqmXbZBMRhwP81c6hs85sXZ8EKmeTUAMoZnrRPrgGbqSRLHptm8SKzBaYv8xkQMQxR6aXQ7zcSihCLa7",
  "key16": "5zqCiRyvd8n9rVKA6TEA961GgskMdUgfTZpKZXRQbiVnD2i6JbqX4ohsgkp6URjaLNZ6rFY5dHbzJgruQZk2CfRx",
  "key17": "2KHwuDnwcuB4FCUAkhUz4myYKSs8PH166hGRy1zixcw41Te544d2w7PpY6XRRzo1SFStRjdhL9hrVBYDEf3y9hvY",
  "key18": "3pQV5RpQtznLD1Gj9xa6mhKKxFRph95a3TwzJYSVJh24NAdzRgtXax6H5VWWYh2AMPRgxirAxx6KV2hC2MM9yAWy",
  "key19": "AquAk8VputBoUBLhYWEkpcMCdgVjegRXTJebd2UztX14iwR4c5GuSZCjvVJWYejMUB7QWrDewnSTwrdKrNTz1Be",
  "key20": "5MiHP24cAjzn7gvA5hPC7MnNMKyX5RH4JtWw4Haup1Hrht3QcSdBWeBZn6DnKKYe23PD4aweMgK5NCs7WoJ3fgVL",
  "key21": "45Kx9mE31roQFzBfakka4oJYFbKajHXBqKt1diLGPjkrNxawnsz4JvLQoKc3cpvzQXjYi7XRPYsVm9tHxk2jqfEt",
  "key22": "3tECSHwL2DJBYUbtRhC6qUgUmPKwpmQHU8A25BEEVMvx4FEijX2XKdzj3Wfr4xhwLGoY4eRJtuUntfcFY7r7nLjf",
  "key23": "X81V2EKLDUS2rjBuv5Xk6JkWrpzkBZHkkd7iLYGbTtes3kArAupswXb4nBRfT51gQCGFLVmV4H61pqV68tdstfB",
  "key24": "5CFf3Q73uCTAoNBj5aMLrjoYmjXzfxfhmto72cxqBcenPLvJAxPHKpFDHLq3id89kjwd6GANY2Mz4VbV5b9vHGmK",
  "key25": "jcd9kJRc29hR9zE5yico3bQEbaZiMgtffcKneJWeHATEC4ae7YDccmrpA4Y2JJ4hUjRLXxxQMePU2gb2WAmp47j"
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
