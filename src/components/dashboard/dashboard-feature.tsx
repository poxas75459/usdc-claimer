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
    "27KsEHC3Z5PMoePeWMUsmTuUyt7FzszMTWuHNJ4EGjuuonxpdphw1cNFva3hZ4q2mFeDUVoVoPBLgakKNQdagKz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bnhtDNEBub6zbojDCsm2JP69oPdrKp7SYWRrikgstN3CUW1qyirZNfjgCf8ojhK3P5RG3WjGimZ89bNzkvje5VB",
  "key1": "5Lh2tCax4tUBmWiPnSYzwCjGWcgAKhM8ugBgYmHqM1GpmVUoRJeSFyH7zZX1RLCUPdBgfD9SaUPe5PeW5iUCdBVx",
  "key2": "5bwSUSQj73AH4g4vgUGgScwnbppgf1Zb1zUkh9YNPi2W5uJ9oFRmrmQRdNBjuKzLWFmHmNdWm8Ps9VkqegKXhrbR",
  "key3": "4uem1WpyeejPSFd1cxwkgyNxu6Keaoz9qsc75nFFfGKt6iKtoDgwPeburJpnhF9zKN1nKnHqT7seKCnUfQxSwudE",
  "key4": "8jTXfykvnxnojZbgvYonGPpcsontEvG6HT3gpXkaa8ophNMkZSoXBjy7F1r9m43goHDREZWZVTJnoHMv7paSatU",
  "key5": "3deHgKHte28ysmuZ1SvqWcYXFozKrGsMktZLeJZxZLwDWA5mg9XPpqL9mEjutraKkT3sr9DNpQRURqsmw6SNpUwn",
  "key6": "48YSqnREQCzBwsn6xQZRaQPR4PxHi2dSGenKdJgTqyyBdV7jPPWfWKeffaz4L9VsT9fvpBdFUxTu1CFwjpRq7J2S",
  "key7": "3EwJo9ZhcLaud1jscsQ8qttXukFuyxVZjjJBTqFsq2PLBmy5MUExhMg4W9mvgUwUGTQEEfirMQ8Kt1B57DQdLGpc",
  "key8": "2y1ZXphwW2m4L4FinjAmQV5ncDnqzUnDGSxiBepLBb6R1gEhemyZbQWrxyhe5sKAmu4hZRLMasPm9VuRCt5fjQRP",
  "key9": "5tQAD8AH5QQUvKC85HNsQszVBtJnHj15WERSFgUvxosvRAB2L4Lgvxa7VBXA7dxSjGu6Eeu4rF2xEMJM4jsNvF1f",
  "key10": "4YgUZuBUR1LuPdLLE4GmaUujSPP9mmzWfrEX2JigYn1S9ChRGLyaVXVbLy9Tz3rmfJhQQLbFtQMbBDEh8BrfV51n",
  "key11": "4rGUWXozu3tcsRds4HystnZeS9fKUStxf4ZSLCSFu9ELupfUuWktBb4tLzHEcu7Vw2XfNpm9XaMgGu9zp6Dcfxgd",
  "key12": "5xo9BFwYjzwyewRzLwUT5HZvc15HsVirhYsak3b9nvp7jHQwTRdmjsLq7j7o9HePY4UzshihRZBMRX2692zTau5Y",
  "key13": "3sp1KqM5Nn6f4FT78SEA3LJTEHWtPoxdqD9NWNQi4LZx1H46P8sD1gUWyvu7GA5DTYVbmwGkBtXM1cmTRZm78pk9",
  "key14": "4d6wPKDay1sFpKQq9CKirgUy96MGSYzG1eeeGf2FfbDLCk9LLkfLC3YhcV8K1sg3NnZzXsZmHUEBEJf11meiatV5",
  "key15": "2QpvHaRXQkKv1aH8nZg7foTwoWtESXAhc1RQPbz3qq6oNwa2vwQpTTncwsns5fix5AiitzrP9VGTAKHEJ24cRN5a",
  "key16": "521bzJYnGc4VYAfYF4bZcTZTFjJJE3UThEkwqZSVbJ3PEVHaCtT4GvemhS5ConcsnhsdeubPxdabjjREkLJGwPAX",
  "key17": "2fRCAy7bBLob7zfNFQB2HAFEQz5ZiFspepeScAGCHDYD5RpFFGEgXjRNhCP17tH4bkJzW5nZSw8mQrVr4yJ5gDhw",
  "key18": "62AfBc7brTiPQkES8qhVqmApcTCM9h2Ec1g5e3Ka1PswUdN68n7tfbzU2r7amxcrSQnoCFCh6P8EjTfA8HtnC2TD",
  "key19": "3attsz2T9A2y9LxDMqttkkWm1F3jipzZ7XPaLKZw7516x9rYddBhMKAjwjUxVLaB7XqXjz4jdqx48PBfncyfKVCj",
  "key20": "5KRrkC7MUS82UcoYZPaDDzTheUfQuP9T5oBF2orfkg77ZfMNvJXJF3m5HtSh8eo7vyWVFA26fBAJJT65ZCiY4o8a",
  "key21": "5MSZyFtka7FyMSQzWxKooTcttVPEbkjdSnbkAV3tVDSeRz5XAJEfzgQ5iN9E4TZbRheoV6SxvrzFo9sn3HaTyPny",
  "key22": "4A9tYGP3ZUmpFHdV8vhqaCN5LvisB115hXKWRsa4VQ4nkWNffDEHsNPdgacwex8Z7eJzkNgywZx4bzS8pyRzW4Bs",
  "key23": "5omRpugE5JqbTVWvnyQmkuLBBCBwKXNBv3M7ovRNN2pge36vqjcn7ekQE2J9ue1Q1QVw15qawp4vADb3S3oCjEzR",
  "key24": "5y2NsM8QTthQn8LFAJTBiFor3zmzXh1RG2q8sQ6r3xMm3wxhfwTkQiVsTWzJsMm6i86Fq8mnZ8CVXtxjVBkfAn5S",
  "key25": "tCvZvLVfi1TWzxHct8Dt6wrWh9dbjYX9jw6APuD7c4U8wT7GEd7iPStmspQMhzCdpwFmGvjXYc1ba38AezXJ5Cd",
  "key26": "3UU71GZAKRKTnXgNTkbB3Ai1dBMsyK7S8BZd8bd4oJRRrNVWy1H2tDp3QZkLqjpjeEo3b7csVzgRWig9dSkXa2Tv"
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
