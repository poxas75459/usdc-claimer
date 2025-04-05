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
    "32UhwFFnN9GiYyQWqMpk1phgrodALNonmmC8kyKW4v9L6tMQgH3VpzShT7qETtFLJ9kndRriM6ib1fau1qasTQFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MrtFjqQH3AExkSQakzy8gorqnPLg7v8j8E6x9yC849Pd1yAbyqRi4kfnH1ptZGgRg7Sq8rxXvFyzUGN8fuMsUTc",
  "key1": "5pS7bhogEreLBMbhMxG27UBF5KSE27P9zjkxrceMScbxkbcPMTLMcLZAQxr25yFQyDDPL2eZUR9AsGfrDB8y1aug",
  "key2": "66QHrxBUeFLHhpdf7hKQEhffkVBrRwUmRJRa8W5bJCY8jcvJ7d1yxyJVdbxGFT53U33xhpcdPqJhPpgvfVHfAE8H",
  "key3": "38Gij2b4u2D3PFi34ZTGjfTpgsNMZoJQg8baWnGgH4C9UGX9WZ7Z7f2r2MjKERqLPqMZo87uhis6VW5N7dPNhmfg",
  "key4": "5i2n8hUnjnr5zz8fSgLf6emoSZiQwcfq7vCg58i3VDQanhpx9fpUWFWa1n1rwNHcu4jX13iVudhqRS3nPgAWrdPy",
  "key5": "2KzwfYKmPrsk1YA7ukHffw2GU2TPXrzX4u5fsMbhcG5ShgFiBMcQp99eRzyjxqycErVoStnkanF54ZJHAw8xYHdA",
  "key6": "4M7aTsANRdyL19Ed1qEkf9keBSfgwMXupSi7THcw5u7Ppzp8Kg2zALjEXfhkWGSEAvxyEwskxW6YVJpXhciNmYuJ",
  "key7": "289FstWkLzZoJuTu52imSwH2gTiib8o1tUySdSv69bm9J81XCCkaa8rnxAfyABm6Kr2bzfFp1RTYEaLvqc2vDUE1",
  "key8": "5NnH6mCi5Z1KwhfmjavF9JYNqC2HuSjkyPuNavGPStqW8Rqfd7s7hMFefRmqgNsYQyF7PMGvWGy4rxQujSCayTGe",
  "key9": "dQ4ZQv8kzGKHkD5QEYmABUdx6mf8a5CtN8hd9w2UBjqaPd197nxCuqLBFnRw4jtdvnaAavqcUierQ9mZVvodT49",
  "key10": "5esshPmGkaob1ngUFnLEXNXdfLqkFDytsRKFFnxpxqrq5P184VJ9fE1sDhy9PDk2AXGmDnDCGneuh9SifqPz6pYc",
  "key11": "54DBsuah4YneLz6sA5oDjj2ztj3KoX48oZBSR1obRvsAu9H8AcJ8qXjNKvALR3xj12EHAbo6UM1AfVs7PSBSYxRo",
  "key12": "4oMoYGbLzFPQcii6AVh7kdovT9cynd8Dw62MF2tuNrZAgjwEA9M1s8uQUi3myBMM47sghMoSpGE9WbYt4E8vKRZy",
  "key13": "4uefYQ9SSLzZ2iDes8NaxLAUpN4XwQWE6N1gPa3Xw55tmeaRNXwCBBKhWRHpMFpEEnM4yHpNAQYDSCDogtQxthh7",
  "key14": "55s5tRXQpcjBX38grNwV8R1EeBBwPvNvTbkmjH7h4CN4VnYyU5UJJ7BuvJNVXMTnjdnXMCUWUxAS13RwT5Guz8Jg",
  "key15": "koovTvBdXDByvG72XhZAd8UoQxMp5QwNGfetFKa9TmwkJvRuwJkG7hDZj6y5SaVjA4nnuj5QQwBy2Mb1gKMoDbA",
  "key16": "pd2RW4R5Yt5eXP8SZGn158U6dsRXxDpWdGWTrmqEWLAEZHtVxLJNaAZhemFLw4Mk6u7GAv5ioxSm3wVDPnwKtqJ",
  "key17": "Vqw5zZgqmAr25H5ngQQxiopPRHWD9LtXEKarrELGjvZiP2RreSYSdHTD2Er62cW1kDd7d5yVtGFgat9qUnqNY4L",
  "key18": "5eG96cKfY47GW3wKbvMdKeqkFFtVDXH3nNuioj67ctFXQg37FXsmUymSwYgFxxp7fKvGrAWBBGktoRjuWPovGqCX",
  "key19": "5TWd9b8AFoQeykGeMTvugz2zsizs2gJcQVEh5yepsFmtvFT4tZiToMTAmZhEoqLrNVp6XuytjY7oomLGQszyw1o",
  "key20": "38mYGbu6Wv4CwXbzRwKiwyLkrazV9rYTHsSkUPjGLYbDtGWzLxMqiYPokVmrT9fvnytBDyxiqWfGzXMfQML1EBYe",
  "key21": "3FrNo17QjwHpkyYZCN2HojMr5RaXkenbhykEWN1esZBHRr4dMmhzKzGSH9hP78xJ4DVjqfsoTvvHMAhqqd87qsgF",
  "key22": "3Ptcizii6fCS41gSULNTGXDUtRsa3oVYH1QWKk7igQuVA1FFwiqbbRRZj7j35VW3MtZv7b2hdep8vueZgLCQSfom",
  "key23": "4xbzr6vwSAGK4gGeYcmoCxpwFEb3kLMUXSCjvw7nXnw56cy31AkKZK3wjpzKKXviGjW35Sghpy5XEzAU5YftURsf",
  "key24": "3m6uR9Dmh8rsHYmmj2nRWQSfvEgqK4zdu5DyaVzh66GdhKoqrFekMsMuqK5AZUupXUiXserCWHks1wmqVrBs1jzX",
  "key25": "xbsXw3zcN4ogC6r8idjxsWs26zKLF5HmugW8ZAxJWFcqnejRbexVcatQjk7d81aMVoDzqXymweoRTt3xLZz3yd2"
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
