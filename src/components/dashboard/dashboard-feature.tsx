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
    "2GbCf28DBSCjCTnFjjoPqYzZZA8nYRjjXUNDTc4cz5rLhrdRyD9mTnX7ZjM9AqM2cvpaP2trSuwoqECnsvvsGDhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k2evThvsJvEHHs6ubiwuKvS6iBuxqDVnQy3j9MEPoU2uufPLYo8SSTMLgkMMao2mX66rLY3Wja7QFcAfcvs6Rcc",
  "key1": "Rz8d2HP4U3bxNmN2Y9twcTdX78nmrjhtcapLP82UjrrvAEyHyzyAizPc3PbfFjsZBZY6qBhvU8yPbsXARjLPT64",
  "key2": "rWfVQuVdn36GkKGEGd5VKXVuVp4rpZh6yL5Vinew6weckT3SBz9FEBoe8mRfqnnVx8kndzdDKh7BDzZZ3KMugcq",
  "key3": "56JS6UtKSBpsXKRT9ZcsoxshmJ3JjJ2TRppJA5QX4v4gA9SBe4Z5yeuaun5NHfjivBCxrAdbcsW5wmDqhkLZweUf",
  "key4": "oNrVFMfYDTSEafaX7fcomNpTXL1eMAn4xP2cn1A88G43mmpncda5VgyJN1as61a9tAd7UNC9HHTz2uVbrfhSuGp",
  "key5": "2musJGKg2V4Q9Qcp3DbSDwziWkVEnrJXPDhQ8UHC7A9AT4ydtk7bVLMVz5RuWby1xsi6S3jyB1TqGpikq2ajqBqd",
  "key6": "5EaFg2mCj2h8AuKgcLMgt5A3J78pXTyDHVEdiT8sTXr5ZucCuPGkyqX1qQdndF9wjcSyrFcJnnZzBzNvwyN2GGs5",
  "key7": "4dmr4qtU136SjTXY3T6SGetGjpoK5hjom2v5axDwoByZ8gD3hU689kR8AQFmdqJ7nu2EfxeDRHH7vD3fiPMgSo4Z",
  "key8": "m3m7UcMxo962nzKmLarLN9oA1gdTHskte7iH41Z5WGbKdAqf3gH4DgBhfEg5k1WettDbf4c6mhf3MzeNNghUvnk",
  "key9": "4w6D2MTeAkV9XRYphDEFP3JgQxsysj1xo8djBMFfmnah8PAT8eNXfpcduAcpkEZEURv1i3ZtJFdjGhexoDenEJ68",
  "key10": "4oXSZGuBJriNmDizZUgbgjfZorz9H2sXxrbWbSqwpbosqM9T4B5vqs52gmxBS5DCK66nLQAv1qsHwW3BuQ9vUDjU",
  "key11": "Z1JP8CZNdEJuzkFxZTiodRoqqPUQa6r9ZZjmeqvtLP2aAPvmTBYj9bnYSKR8k4CnhYHy2NRYRNTqiU8gbaTD7Lb",
  "key12": "2cWcoovCAuLf6J4dyXTNUSMacqik7n9iiQnE1DTvbSCYogNfm9pBX3EFVNiEw5pH2rZW6TEQrQ5U6QT7QT1q2GAD",
  "key13": "5adVvoTpux2pqqKUVJ7PaxPAPzDe7ZTtCGJ4tgZiLMDL4p4rRxdGwxXDdSaG3qkaaCBeqiYJuQ3YQER3v8E4GaTm",
  "key14": "2zaTnjvKk4o6yWmoxL4tWtMDsLKBu84kGh9gjDDQdAN9V3QNaAd7aAow4bqjAjfqVphYn9ahgZeVMQ83jkyVpDrT",
  "key15": "4SmGbPGVGyga5h2wbqcAqGXVEjUXvWygU2cFmbn9DhH1KPEuvAg6PLRyn6tLpNi1megdGgnDXbhdARMKXEwdjHpa",
  "key16": "2SvSaScfcxrhsx5VgdjCevZJ43DsbLSaVgkx1Ho2FDsFpJpi9PjAZwnkSJwFPZy6vhxSrn2dKpH3SaFm1jfRDNpM",
  "key17": "DHouqQpGyDnNoCQnYvftbFrQFWDxYemN5NC5aBeAy8Gf7X3KbtdxzxHNUpqLf64JLGynKW2nCASSCUAGTorcvCj",
  "key18": "59H4kJJFuAU2aLLmJRw2aNN4yTFikREgqB7mRkEnXC2zFy9AQ8WXs1d8obzaR9F8Jz6x2A9THf9doRyffLU5pWJ6",
  "key19": "31of3snr9zyeNqqyGFT2BovbN2URKLfBosM4QLNCSZCNVH4BCJsyRJ6eYLkByZSDYCyfwAMMux66yCqGz5PbZMpv",
  "key20": "3jfRQzdnBRGAL1BiDskinhYjRGdXq7LGWnCmWscHC9zJ44viomMRXC7bF9SASLwpCMPcrTaQGsats33VvwLcjwgL",
  "key21": "HBzQJyt3j9JPLRFdrfMwVP94W2ujMEPearPqDz67YfoYqi8NT5tUXpPZUw7EYzJ1eRB4JJJjWJNAYm9FAuWLz83",
  "key22": "3QwA7vqbcfQUNLCm1LdKRCagmc5zFcR97jD4sU28N3sSoJYJHt5pk5FWZHeU5CJdHvHRXdDDBMgPDuQnJJgNqun5",
  "key23": "4rvnaGg5xsQjGcHT5EoHMmseo7HmmmHZ4cifwByGrNNk5nGXGztzYsNC3s2ef3oyW2xF89bVyyo9HDm9XACiL7Xt",
  "key24": "2Wj6QNmjKR4DH4XN96YkAwD5KXoDkm9NnRTkJHHT9UcfvYHNRktXRvMiVjZpjCgHEtMgbthvCi5tZ734L2UcjKo8",
  "key25": "3wD1xgRm5Xm4Sim4CYc7MrY8PEnbFZ7VgdwzxVJcB6e6NW8zx1qqZEum6qxvLidoqSFac15Di3RMncHWWmQ9mRkB",
  "key26": "5MeLAQ3i31Mb4MiFZaCZXqCvs4BzXpPS44jhYQWpDFu2obUDr1HpBrn91RnD8aDZBMWQzaqKwcRqqwSqa2hvhmRv",
  "key27": "2bEYttsSns5wUXy7CHv46p8eqpKB9o3HRhRUdaZ9oWEdWsbwfkT2ajo7QAVoU2pfqaHymCj5sYeFCMMj56bhq5zH",
  "key28": "2BYT7z7PHuCYuqwRm533EQr492WNhEiTQs2qeBY9WXJBc7RNrFjKQYSERrkaYJMCEZnWttMSPbGmhVEsVih1kMRq",
  "key29": "2dFe6Mis57zXY3QUAvNWEj44hf9YAjrrLhGfZsk34HTYVmwQaV5dxXoqaAQy3C9Yj65ej5xSGGMBwTX8ETp2oCp5",
  "key30": "4S3FdPh4sQkBrQ96QhCfbcest4hqjtnVtrju4eiRGYiBwX7ZeKVMThV7BmhQCeTnaXquAs9DnJNMbawjHjRx5zwn",
  "key31": "2CgcAcxmuox1p1QYrqnB4ZvfPhxHUdFpFpX8KX2n9iPKitikJTrBghw84nK5zBUU3mR3nY8qrL2eYryVuspFGJnb",
  "key32": "3GrqcGDXt64kEMJYWZceX2KSxsFQX3gm2vPc1rtTezXSFS9xFnjxTFo5xT2dA19qkzSAv4245F5vvKqWzqgHna7Q",
  "key33": "5TRy3Ydy95y5NjTNyMp7gcayUTQyCutWvB1vFANraqo1Q5fcpyDvHNyKdXDKBd3MrWwztGY8RDW1Nky5qhhn9boD",
  "key34": "5FsDe4B9zc39h9ReLXcGgJgTzkBRWyXF5wEDhqrsx6H8QD1MGNdaPqGoWeVsqrVgMGaGNnTAvkmQyMctHW9XJhk7",
  "key35": "2kvGdx3JucTPYyxCNNFSJVWXnjGKsusgN3YNySpAe9FL36UutWYhWCmAhvGBmPyfX1jXZYaxVJU341C9gc34rpQU",
  "key36": "2ux25ywE2iMt78rcRQMjFAPfNDiWJ7FtL8NjwDhNvn9ZUdPi6dp8a6fD2a3TzzSYqeuF2NNWoXE7ACYEyRWvyGHZ",
  "key37": "2NuBDiRKWufcTiMcbpc29nn1ChniHnscM61B5oiUW68tUeFMxkfb2HRT1NjH2g6mRZ8yVcnokQueoj9cJXh3NTn1"
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
