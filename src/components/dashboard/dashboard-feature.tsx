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
    "32MvmYavonrdG9r8UnnWRF2fsgWCPnQ9titTm7kXg42gXXCxXNzv7zkVFTUaZZzg4S3Eee4ihsDWdaKD2qXfgzir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EgP7QtNVerHtiADphpU59uEZW24rUNenUHBi785BBZbbLdmEfWSZagY4GSjsXya3o7RWbMXyLQoJHepM5UQNadL",
  "key1": "63yApMpB6BQPgoEBDD4W5wonXPTVhxk4m6PhAeMPtZdiqoucjr1HxsomR9KYxvwoVfQLU8TYJemLGaH6AbzN4vfA",
  "key2": "j7G14dpCwsxDnJ8uvBYKV6F7HMVnAQoqtZ8LK6pjSdfH2py4Sv4dxvg1SLjRNMk8BeNJZggumYC6rwRiJf6KFS8",
  "key3": "5MF4jfXpDWLQ4pQFm9HVqk4UsrD5prNxWEoCY4D4W7yLqHvBPn4GyLtaEp75k9KnujujhpoKyUPRoexab9vDY2pD",
  "key4": "4tU8hDVF4dq7QM2EpsVa4duLGqmHeFwzR9cEzSeKdmWKfRzuhUcw4boAFAGSKVjwyLsqN4FpFvNekxcE4p1AzjDq",
  "key5": "5Z6iVEbyMm2ssNBjTMAvs3rzwQrMmagGX1macCMc3wTebatXhwpRTr1dBiDk6yWEk9fWT82GHXwZc5YN1LA1uoUG",
  "key6": "3VabuPB9gf8HzmhqrtxxaN9ie2Cm3J2yRDtoPBDgyQGpZfQYL2U31whd7wykkAjHaMcyjj9Bnu2mGt49HTxjRCFZ",
  "key7": "5p35WHPDWbV3fZRnUeQGBJ9ss9fL7Y57j8QjxUu8BB8z6A3HS6JMcvczNxGtbTixbgtR2cpw9fitLfqBYD4XHBfD",
  "key8": "2GfAPfwwtpDabQZ9mWbYvuskN8o1VpvwKz16bUYpma3Hcp1T5Ze1FxQDj3yEUVGPrP1GFC8PEeYeFnxawGynWUyx",
  "key9": "5q3nG5bnh6ryUjwqbeDCfAYxgSysGrSqhufGcS6WyHmbfm2cSUYLF7ZrwsHKhjGzJtssJt8swBkBBrbtLVWPkHgZ",
  "key10": "4JwJth37D5D8LGCPjzUUzqyY2zoSevuPRf5k6SfRPBrrCaB8yfQ8X8bBp2fZUYs5ncsWEmAKPXbAuNCL7zWZNMXr",
  "key11": "3FfksDoiKZoXq4f7yfQVFmsK52cawVqiZrLoqAze3gBQLR94crQrJtGKp9cage9UuoMVzTgfv98pDSTJ8QKvec9d",
  "key12": "2BgsGQK2CqBeqyDoMfNHZWKyGLd4rCZu5R42Xbs3cMuPmfqfXznWCnrrDK1a8fz7XC5AHmjBzbEjmUiBP1QpqbGn",
  "key13": "pqgZTa3QMW7K4XA66FCn3tSf31v8YPGiTdJ2bVxVV8KrHUnz6ofJkvxYmo3JZ4FmCoc2fW23FbNk3iKqV8bQNrR",
  "key14": "3XnHY2SFtQtBdGkuR4BGpZc5C51AnRGoTZRUVLm7fChhApHDAnbv7yp92UJqB9KaGSqN8Z14D4BZXDEpG2KYT7kf",
  "key15": "5XEkKMBTmkcPMGoY9dW8CPtwZGP1CqUKYuQz34AtmWknVpruwkDqh44gtHkBStrJmKGjTh6mL5DCbR6zHR22tRu4",
  "key16": "2PSmNLuwK8kaCy6tE6EbAvCZt7KCee8tvJM46yGrckgVAV78PzymyLrrB8NzcKe2vCpemnHbXScKswLaw62rKeyJ",
  "key17": "3uRgVxe4C9mWBommZN2JZYQPzCMJrxUjy3FZNJMHJTGzdKLqFeF7JYDrGNd98caXCYYdfFm3Zq5RuYi1sLqDsN3Q",
  "key18": "5Mz9wWE5V8ddvMbEBwSoKbsmFua67dNuYnR1NVmf3XmdR2kYo41UoHzn4DH9175ZEMwB1pnYEBkqVyY6G1MtVPp9",
  "key19": "q8hBXtr3j7pU4Adzyc8Vs2vXmFm1omTZK3Vi6c3SMjP2cAhNJS1f5NnhJ9Vhgt2csUviqmbPMpv7A7W2dj2f4Pp",
  "key20": "2u2QyXTJCQWkZxy8wXwuzivetyL6Q31b4nwanJeCwu3J381tF475zUhCc7WChHszB8HXdkqDyqoxT3x1ejzes3HY",
  "key21": "2qPTzU6eiQekY7WqJBSytFtPQCR2v4WWfNLjHaynNJ9qkHkkA2Xp2HNV75Vh2oK8zsL5UTrQzemp14k3DR8HVrCN",
  "key22": "4yZxEziGtGjapXK4ySJhDkvmXsnWxago2MGFz3S9iTH8yejWXGnQXLJbdSp811LSsYS9FMKHE4LSHHETNLu8WhjR",
  "key23": "3XVyDRF4frTxUtCLisZEBs4eufYaekqN5JZG4CaS3iMkkYoBsmcsMSCG1dvhpjFipSA4TNZur6HmaTnp7D38r1m3",
  "key24": "Z3zsyj3LHZjt7GkV8djHHVf2vCBjyknCh972PkaVf88zwR3NT1Gb9VHmbyZFzYvNMegS3wftWMZxT9aTibQGduW",
  "key25": "2viFfyL6m7ZHcFXoE8EwkqDCpFGZfPgtQZk1izExQWompbAktVNqAnQMF9cXuPuqiB2PLFRTAbinX5KmRDWsagGj",
  "key26": "5UkVxDu4R21DgJRiFdyQBx4AVqjJZvLkistFyJWBJEGc2F5tomPcHL8MryEQxsyJiDZYXM2iyVA5mKvWnSHxm5Ui",
  "key27": "5hJMqQCiYDoj4UyWR8jz6Syvuf2efkyaG9FLBP5qXibWFVVKnDNrMu8FLY4nWXEx6CxWzv2jyva9gLAEQGwSEUF6",
  "key28": "3dngW5wbDNpFVkcAbEKptkMnV4cFAMGixGJrWehtyb8nw1MMybwZ5m1Pu6dNCSPXnTfQNwANJMuuJJ9EuKVWxJ1c",
  "key29": "4wJLKbAu4k4wvVnGiAADVV66fLE21VgqdmBHy3HcL6aBPAQaASBnHn2VzFSaHKB86Z68WU7DpZts3Rxj6JhCRRpk"
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
