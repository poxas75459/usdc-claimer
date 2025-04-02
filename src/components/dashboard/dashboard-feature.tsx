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
    "417BRAxWo7STnf9Sbo61xdhcDEpmm95yWmB24q9L1tsgMcobEd4CUicVag5WdEeeXSLdBd2H2NCNYQWT44ddWrTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28zDG5jxPqiZ9TnxSFvugJCdmCe4rFTahpwmRKvN9KYCYsck3GumLQXXvqukex3ZjB6bUxvhc2Tc9kaCukCJqNVj",
  "key1": "35LGh3XkTwudqcB6J5CtucfQvDoqXaZbFkn29SbokSfwtHt2yY5u18cKtQ6xggQQu62LyLZasgstz1KwbSLq8NKf",
  "key2": "rrsgurtPFZ88fgzdKNniPUadVBvtEkpiCuHwrMkycFUcZi3T8i9ftc9KJXnSN6By4edAXt8paDoxgtzYdTfwtV9",
  "key3": "4uJKKb3StMgY7sQXgeXmmYtY4j18BEbwSynj6J6YBSN3JXmuyNssNZ5fUmUGRauKpAjs2rqzbd52HfzoxyHgA3aw",
  "key4": "2x9bkV1JtFCn3SVvajeUAp6rpc6W3CGE35Sfpa8No1SHdUJA1Lu55orp3NKfLfCCT1eeDo5QRGcR2EGzBVWh5nce",
  "key5": "73wzzZVwUt7b4ZARMKyUF5nLYUw9H6cZS9kh3ci6K1T8aGn2yi4u7v2z6JrEdaamjPqRRDNmaYkN9EvbXfraLZf",
  "key6": "54EdSKgy7NKpJcBGUNbVKPmonq4kMrQ4mXA57tN7CSjzZ4mfAKLUQAiu31nMrTPyjACJSNiQDbWfr3WGRnCWqbDb",
  "key7": "3knNJtnKsZDW8QYFnVUCcGyNVRe5sG1h8jvEvKqptvnG6sMGB34GP5ZW2m4kmrCd6oESP5XARa6QEKAcoZzumYHP",
  "key8": "4bNq2L8kPnHE8bifBsrScWYyrx8GBim4ww1jKZTLKsNGTCGyZbKNXBMLiMH99W13311ZErDzH6Fhpbf23c52xXZ7",
  "key9": "2f2sHtQK3UzcHN9ZicLvFpphRVrUEYCXxC5zpgXjm22PpbEZNZMH3VNUUtjdH1m7LsDnNsWuvtBXV2Bmg92BQ7no",
  "key10": "2s5sdTmghMGQnHhbvoEYArNRJCqXKyyLLsjzc51Ja9u1avtACqNZJQNCqwJMsVzQL9WD9DWttwmnCsAa5zDmdW5D",
  "key11": "z1dAC3T6KK7ciw7nGza5vh6oeiLdeejBU2KNFfcvdc8Ticwx1LiRntra7CRXWDhmjXEKLpENqyt3ADoiys9UtPh",
  "key12": "3AbnButiGKvW2rCoDGvGvpiWm6GYWZLrCCQFWKriZt6cf2TtueYNhLHL2ocz8dpxjyBDfs4gPdqMGyV9LWw2uYST",
  "key13": "8JfgRhMzHXaMZLerzfXkMoPr2yQL9LeDX7S6b5PzKCFqLjndiHLpdser5WejxPAbZ6kDxkHyQmDoZwQgpSxyZK3",
  "key14": "5WwN4V9E6PpX27z8Hx2geCbUo6qY9YrsDN5tbAUvVT1esmZ8vsJpCfUH55sGHvhXfcc1b9Gh3kYMjCTuod1dvbcS",
  "key15": "3WwuwfDn3QF7GF685r36PbF1e67WYo3uEEAE598g3C7iasqJ7q1KwzVJzGLh4FYUkVpT2PtftCHq9ZDUuyt1fqfT",
  "key16": "5FzN7yt5WGjP5E2o3BKGftejDA23pyKDP7MJbcAku4ZMNxC8b4iMpUZuGHJ8DjEK5YgxgwmGXPReuxpdzy5w522c",
  "key17": "3KMxXD7kPBM2CxJAmBztd3x2L1ALNBYLJ5Q4kxLbTLDiPsWqevzYCgUx6VowFK4ReCqqSUxYJSCv86apKLdx8sN5",
  "key18": "23uXUXfKRdmkLeyCvxpYAUMAUAm7pako8BvUZ7Dhz3Ekfr96ujzdHXjDnXCYmsQXRXE7oUG7J4QiSp9MsExeuXzV",
  "key19": "4JP4iiLDXM6BkUnev5VCe84ESUy5TPb6uWmW2KcLmUYHcP8HbUTif2PygTf68jRjt2PzRFfqFTuYuge8tzXFyhXv",
  "key20": "5SvZ6J4MPJ3FmvStXR9EwiNEKfatTMmXcCMqYSWgHQ1W541wupDQB9JyfFKS6KmeiP6J55igvmQC43Nna5MJAcAe",
  "key21": "22Wth7Y14TziUekgRzJyN9mivpR4vcSaSsswhy99XsnpdLFqEgbphLxF5yN5By56CwbL5EN7YniUdCxPgMSzh4U2",
  "key22": "589hZk1h1vLe8c7N5PAKXyd2c8PWkrwhoHomKfqrF3a1gT8AiCccoJqgend9F5aYHFG7d8peyQ4zTQs3vZk6KhFL",
  "key23": "5Zr75rgCLBKNuzhT27KCoWA5oCG17ds6aemPEGHYfsAWssjjthGuJCZp7j9YjpEUpoUiFJsDVTJe6kgATucPJF6u",
  "key24": "2AUYjxc8Mu3sMvPVEH79SA1AKWXAAg1kTTU8TEgcNZwwXgrVWR67zPNoYK1kFLf7WR5Bv8gAoEbo7Kzp2BqQi8HW",
  "key25": "2i5hKDnoymNMXKcDPCZMYZq6AmB34NfU9BTAL16iGKNY4XXNWDqsBksvWVGmom8C22kEoNtpzcjXBNmc67KqbA8B",
  "key26": "5TXecjoaqTXw8Knkgi1RR3XgRovAPcvRbJsSYp9f8CbhqQ3yZ14XAUN3KeF3WcJXMB6QBvmNi7GU5c7eMgoC4pqB",
  "key27": "5PW3tssNSTgv49hmAZD9udokKNVN9o9wkTexZtDvQrqzVBh3czDkeENrCqJL26n4H6KbV2CoYmB4zzvwXibdfvYK",
  "key28": "5JUdCnxMrN3hQ3CY3e8XRpaJ9k42kBsBctZs4U4kfjH45QdHYb76yCYnZFbHaznnJwnv34gkK1FCWyNHniWybeYv",
  "key29": "tqcaJZEaxsJ4Y2yFHun9A7rx4UwCGTAZXeQCCc8WXjiH37VAo8F4WXzPrP4jBR82DMTeuujnMVn8obL3shimmiR"
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
