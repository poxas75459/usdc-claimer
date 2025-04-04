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
    "4zvPUc5jobyHrqHxQAm3njL18M4ErrQNo5sLhw2TXKSdsQY33oCRE9ULuYZ28Ez1Zd5q7jytXDTESLHZPP43hf3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "um8zNcxEDimyX1Ls79VVmnQ4Wdib6ed1ocvUxE8NW4AsrEBK12ruGtsAnbAqSdvmGPoow3yBjAvjKJmLkX57CJC",
  "key1": "5AibLv9a99g7jHzX3o14yH1p62z5iit3NW8RxtY3KnVzQ4TeAFaCg7iFFuECFSqixsqxi5vrzU5zEQdNdLuEaadg",
  "key2": "3qZg3j7hbe9jJeeHnjKuxYmm69YTz3fXn9gca7o7qgCgW6Kgtoffqkt4cxBKdkiHSKFSghqmQbhzZ2sqtTdvLMZq",
  "key3": "3TmE1MzVtTuvgHqRSQKeY2yyidx7xUXTu6SAjJaXnkEyrtGKt7EakmdfBZ6YTGP4zbL3wMosQ42KnP7PLNRmC9QP",
  "key4": "5jVJbvKDDoKXqzKRgDwcXCGfusjmKKhhNfD1TAnvZVMqThT9SbWHhSDmFmzEWNN1iDGhKWY7ZXfgnkAjY12vLkPH",
  "key5": "3GFuwf8Xh2qtoV5skr3jKvdX2xBGxP2HaQRNjn8LvHTWtR7huDSJrRcNZemhhgADFMADhYBqBM3oTUEwaXG5oLZ",
  "key6": "UR4TsEP8yHr9gE7uTcwDSt1h8WyXG3a3kjQEQRabNCbvCN7gWUa9KNPuDkwCVWVuFAJU3H77dzyEhmrM85Ws9SC",
  "key7": "44K9LNLUCxZ1K6Le22W7WkvF7YBL4FC1EeQVUNsPpNbnR52MAacAct5T2ztk9j1RLXDcvbbQC5pfjXE112sR1d7T",
  "key8": "5r366PJqGxkJUCwYVoGearxfhESNDWkN99xCawstY1j9o5V8xa7fhwpaj6iyF4ZcSWcnmCP3ACuiQ7roswECm7yZ",
  "key9": "48PPMryKDgURuzi7gFTmPmyPLcuuPHRDv67CFL2WUFLSZNJEY2CEfgEtnwcDj4qbzmiVUt7sGVx9Xt9n1s6irk9w",
  "key10": "2g7kgrjbsipdYWTr9RFwMASz2o6xBTtkRNjXEUwXiQ21c9oY7mFtbuXLhNLrguNiVesGsZS1sSjxov6qmo2jh9Ez",
  "key11": "3zKqcgeSGdisfEcmGUZEaUAY1Qpwmf8UpgaQ5DCyb6p96vMB32Q4PGQ21TMhu9jTe2CQ1fpT95Bvi9UNtiNEFvqh",
  "key12": "2TuqxXUAN7jrZThD6KvjRnMK3ZKcMBmM19FnboiMbDxdAUjeV7XvyGX5JL51Rg8sTf6LED4DFke7XkKtMYd8gJr8",
  "key13": "5g6UqXdCv6G9Um4Tq3P2JjSttcTFBGr4VEmxAsDhGd4nChkmjevPqDVqsFU9WDz7AghDRToBNLtAyEcWvKiexgML",
  "key14": "3iKiQXyFujQmWavN5b4RVo1Spa7AYg1tFzbGSAnmnTFko3aHMHKpooHR8ucbmw1pPqHAfvYsq2z4KdXAJMRmYABL",
  "key15": "5QcJmxo9s6UewoLH3LU8JtvV1YhsirxgbpKu6naR1BXhB4Nox3FEnFtvZp4VQ9hEfWSn3YNyMq9K2sK5EH3956h9",
  "key16": "2b48BB7r8f3w4TAjaZ5CEeNUtv6xKrvY6kag5LoA7yiVn2QLGsZDG3gFCvvWgVWBx26Hq2AtoaT1Rav9iDtoYxH5",
  "key17": "4qvQCGq9KzhZkjyEzLQ9u7ELxvcBMySwBEasjyeYu9tLLRMAbVnYKQP7uzyxWmkNxe4brjY5xdkmvMAR7fsu6PRy",
  "key18": "3zsR594UbAnT9ubpksQqLitsgjCfFfpNB82KucDSZnShPcSwuz13J7NXn5m2wkfdkfZ8W3BHC2mqh6pzu9eRX3Ez",
  "key19": "azsyEQNrim2FbMk7P3srJyh1283DK9tUUyycaizafxKwybW4oi6dSdkoWN8NoBqRpeMGi8ZdS3hWxwrasFsfbDz",
  "key20": "4CLTCBxxgVAMiS3cjXadhSjk3z2E5tjnHxwJdtpAMc7fTsGLWnXEJ45e9uKvtkgqVM4BPSpWpJQekwHwW9UiyzvL",
  "key21": "nEnwTDtBiCZt7xYZqrocSGpfNPXKGosB7uWStxZ4Aa9hYFfe4yno9v7riZ1sLuCy6VUNHvqgz4sbjbNKAm3EgKB",
  "key22": "2uNMjx6wvvfHju1HqUXwWVP4Wb8RsqqV6bFsZsPCBnWFDhswFnjTSM7SbvPdz7JkX7m6un3jXTUacUto2jjnuFcp",
  "key23": "4NVFKCHs7UNEHjbC2uJGdyALdftTPX5uPk36dBEpLiapdjg7tkwZcdqedDQwKQHQJToe538eN3P4BqDVm3rQfExf",
  "key24": "3vUiMWhDS4iHR2wsL7onB52ZERjLhJ5JrdxL4ycY14HkBgcQGbDgeL7fV4siA3KmVdNSgDzBp8xJVUoLzRTqM21S",
  "key25": "MbmicbVFRbyc6JZoKmTffVV4js15X79HMxdmkhEwAPeMJFuZCd7RE6AYSg86vEd2w3YjrPkBpzau1MwT61m4yrJ",
  "key26": "2ntYzHkTqWH6LfRK8jeCdfnKB7BEtanQiEdZoMSWdcV8vTgDcP7WVKmNL9BdUXQfX3GK1MWsLeUEqtMiiFTYgPKp",
  "key27": "NHNw4r14zQvdz64fGvYTL8ST38cVR7yVK849ytQrH95D9eNAWcnTJPta8mJtNX3LMYN2cWUTZ8Z1fYLCeCTpxNV",
  "key28": "2k7iAMmEfcSkE4B6JkNeoJuSrPp2hxdGgM273A8vayp2W2urLGRWWm6F9PvagMXcsx9URrnoBnVXHGunYACPSL7P",
  "key29": "5jyhXgmLWa7EZjdviZEGokNBLRPnqBiTU2abf5DHT2feyKt8vp5Av8Romm6vMRqxoe7ZQFhtPitTGTiP51rUH3i8"
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
