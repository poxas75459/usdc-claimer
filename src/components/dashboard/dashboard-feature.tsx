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
    "3hSf7E8tXRDXyZZXPXqBJTxT2MZHdqPG1f8x5wmihjhxebyiAGKBiJK9wyv7GPwLvdRfNsHxArwhaR4P92y7FVqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i7kTKLEKc8XNz7PeBYee5DRHUzeHUcMMwCt8AUQHzHWf7wobZveZaMcgZouwFVe1UraKKeCpbczj2TgJvW8w94d",
  "key1": "1MeJVF1ujJ9XJf3PHVv9GRWkuuGxBNSWdtexUwkfbo2Eex9LEYbZEYqFqDLNMDJvumGL118cTUeXGQzZg37Adug",
  "key2": "diRBPcAFPVZExAt11hrouTabq1UwgdvLW4AvHdB8qNrRBG2UeYr84JvWKWARJGnTYrRn8W3M3RjS6Beh3ZWrZfL",
  "key3": "5sk6unK6VastKexyWu1kCSkrUmxkctkPkD8VHjo4pWVxF96t47BydQyQ8oADRBZ2eTx5amF6M9qR5N5hBASAXtiT",
  "key4": "pbs5fuddJMXH6vPuXCfod66xNmWgN21NvVTvaHq7ywUAwV8DHd7XLGUPSpJss9Dy5L8hCZ8MdDp3uhuDZLD1R75",
  "key5": "3txmgrHXJHfq4Rh2YdnH5M9FasrPTQgrQ1kP4jBBAN6kf7uTvPSXKoq53FiK5xRP8Q2yVMoxVTL41Tqm8b9F7po8",
  "key6": "4Bn5kiLyi6k5btUJWSc8kwVG4RdZhE4LkcgB6yn9CvGYVqe53jS3r2K52jbXT45B2zRfioNwKDQMWr4x5hFFu3FC",
  "key7": "7SUj7zhoTKxR8R2k1WsgDvmFvf45DrvHxV2HKnPbyoeWEeP7cf1dR3yfJchfevCkq7tkbp3cPFi2ptH1T41amXg",
  "key8": "EdyfLHN2wXW9NMT5LUh5cPJK3LTNcaomh6onZgtTJ6XWBKtTk6N6dgRKGsDkNacN9H3jC3NrEfquySYuZ52MDs3",
  "key9": "5oeQU8MtzJdGH3VkvYpz5NMaDTArEP1a8tB4aJjJUJqhyX11BfkzaVohBAxq5HqrRqPCCT4E69DF8Ass358Kt5yU",
  "key10": "5Su8AakuRWoRmyoPAPJnYvC7645neG9uSLsqwYFWhXGS3Fckz8iRV95PzYzkozg1qzp7WMSduti92qC34qFC69mg",
  "key11": "2W5KZ6wNFvbxvwdksrwUyUYQ4J15Z9ix4hyQ8gsg9DityVQrrgAXrAsSy9dGK7oMPxsmjQbQuw1gxqCJj3kEZiKY",
  "key12": "4D83GkGBRuzPePk9uNCdMDBQ3XAwPznfr5osuqu7yTUtL8sYvw9zMBzWpc54Hn5Ae7R1pWDbSEaSnaHNwSpyEHFF",
  "key13": "5MTnxEzTcUSyQn7cc9hKZuWmqfLMPmbaLYrGzdTbyQ7rXicZm26wcvV3ej3aavXm91TGVctVkktBnt9AUb7Pdhhm",
  "key14": "2gEXTpeQWpwBnDDEmy6y7qVtxzr8JvE8BgtjS6jygXXYiwpt78XySfpM9Na7a51xiTTjGfMTTRN5DtLBtB9iBB87",
  "key15": "2q8ANav38vGP2BiPHne8rBh46LbRT6iVsC5ut9M2dMgiUoWLdoZuuiB9zsJ6sSJdyReZU4kb45bzTJkiC6MGyqR2",
  "key16": "4rKDLLhJgWBNJXKxduELEDcmKHKamR2618ZZt8z7TeY4ZPbEbssp6w1UtGdTQg9CZYJ3MmgzaKPwsKqsLc2Qi1sQ",
  "key17": "64sik6MNQ5bLhFN19mDPcJXCGQHE3itKc3M3hsqkyxABLEbXtcA2MnbLLZiWvnmD6XycJyZDMiM2Zk2ZsWtbHwAe",
  "key18": "4hAktxeg8Lon6HZVqm46stfE6VEhU3Y3ZvnCn5kgadCetpXDJoy2McwLj3haUk8oGvNYMVs2bth6cAnd2ASP7BD2",
  "key19": "4JutmnaS1v2ThNys1a5NjnckX9GTgqFM7tFvJskFru656vxQD3QEaW6QZDa2FPtndzKCgnESvX5Jy6GMP4f9x5hK",
  "key20": "i1gWWngj3MnNJBDDg1VH5CXpEji9fjTNupXwf8u9mVVErNx3KCP2p5uU4cBncKEY4nCsHARX9nNE52vtumjUYVf",
  "key21": "3gSALBXfG5nSc5dBY21X7iqKbt6DrzYzj81TWFFw1r96xD4hVjJVTU9F8NMw8DsivCHpPSKD2gNCFfWp2nvxuEC4",
  "key22": "2bJa3TqGw2YheoxbkHkAkK1emLsxPdFigZZ8yoVQVt3AmpZuY5Gr37YPKPdw4HCa6115eyhMj83KYbdXMG7f8Zfw",
  "key23": "5Dh7XJ6cQ88qdd63rmWFCepVYHs8UGKdYfU61Ri26oE8FyhBje7WSxNaC9BmiYiHCKzQ5j2U1AWwnkz4eDkqdE6B",
  "key24": "5xzfW6fQQhkhKKobCz7qJ32SQaahRKUmFqkFCK2x7VXumaJfhhhhZtPyX3Dpka1P7q9ykh9n8ugPs1Sv5f755XyG",
  "key25": "5EUDbxtHDHY3pchrC6MiQZvYf7xzQebFAYSPoAL8ss5jmJZxuxTYzpTSuycEmWJAhnMaU2ZN95gredsgF4em4SQk",
  "key26": "5gSg4fETLVdcP1UGcTuejVWWvp5PQtiGKsWpdMGG46SMuSJVafF54ELW61HmvcxkGs73ciwBtibTzFi7yzKxRxG3",
  "key27": "2KYeBDEKqCpkzg5x7ETfqxSbRC7AyY34n7EX6z7kLPhPxcgi6dCGnaZt4ydWQQYhwvP8tseZUXyUqQVb4BaXhHbm",
  "key28": "4XWVV1xHZHqDEXkswQsmZAK5dohe3swE4vqne9TBzd481FvjFudrJCqBKDWp7hrSJU1mXZsMq7gFCWdLe6HcP7xV",
  "key29": "59XNxoqa5tAdvFDeiZGdbZv9vEx8w78BkXBbwqG8UYdfUkLi1RLbc31cid8RmRjGK9XyYUvdddwmYRqEigzaNTo3"
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
