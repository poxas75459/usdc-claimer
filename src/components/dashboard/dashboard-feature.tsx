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
    "iELmhNe2hezZZR8Hu2DFduBN3q8n8g5UwdFC8f4uVNDfUHazo8c8XYxiNuTS8gwexkSaLhqn7HuoKQNq1ZuHPfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29kge53WXJVvPWNDSY8mm5k4hEU8LTiLsttwB8TceNZi6KuGMQdQ6X7xceXe2Es5CesbXKBUZMD3fDFxyJWVdM6j",
  "key1": "4HtaeX3FT2AVwDbXdWjCLyihMSHxt9EoRU7vcBTuCdAt6Ska2RN18qEXC3M3uHYgn5md3sTwXFFm4LjYP4stg5iX",
  "key2": "2qpdR2xJUUeG9cfBzL3x5SnJNNcCYC8ZLJ3sDCLS5V3RuiZAWGQGW78mrQmNqRLUgEDQ7yc9MLKh9zfmECzmd9CJ",
  "key3": "5v9HoPww5sAPUhJD8sWoFrHLe9DQPXNVmnc4yThKfBp5J4hS77EbWuWMcMtpyXQeWrTBuroqyBNcgzxu1btQ458D",
  "key4": "3dvbHRWZvRazC5eZU7R3dyQxvVCpWunkLHYPaCnifV8S5RKqaR8pHorwZDACzC9WahkpjLeUBzHYueBZ1KdhgJGx",
  "key5": "64w9JfeRXBQS2F14MZAkMYXuoZY8dgi3172YMfGtF9TL1BK1nv7zQrj3N2KY5Pe3onsZGA4Rp7Pw67g7DrUGQbgj",
  "key6": "5Sa7FevqNRn8AoVhYusa1EmtBw8c8UUP63ydFMzwxTpVRg9FkGs1bMU3MmAUTkDY3jzu4qBDP4m2ixcJKvJStJgv",
  "key7": "MUYKgSp5hXvSjDnrjHGDNzjkAmeEhr65Z2sQgBiXQ3GCMzhHJ4nJcn38HdxbvamARkeUquE8bvBfCuYxDPycVnQ",
  "key8": "2mMfnkfQc2h5mhbQYkCrQS5smoWbVf49d8du8hyKfEvmSDPBHpTfTuBGdy1czLPNRa5Z462nNCu2Mphow75x4ZCf",
  "key9": "5PXEPJf6jWhQoSMTqvm4zHhvUvvWzxuP5p5p73tNGYGZLCRGEFFNTSsfo5ygdVbRWKpaShb6FLXVVyj1V4HqqsZe",
  "key10": "2kMkCEX8m1KeVYadA7hS9GmLgv1xerT7GiTjsXcfbqH8ihUHFruF9S27SiBqQup7smx5tMaXBGaAPajMmjEyLSos",
  "key11": "2Cv7NqATehXv2XPq62oABTCpMfUWM4QKGLAkL3Pn7kAu27arbAke7YD6si6AQRzppjyJeEsEr5qBHgFm14yxNVrJ",
  "key12": "2CYKAohNMgXKwaX6bVnBKhsYfmsTSaZPjCUSwjm2ccvPqFGoWSZJAkaGhRUf3iqoF5wd34hkFiEg1qYZ8aAkb47o",
  "key13": "21DDdC9NDbaYgqDc7MmdX1Mprd5mup7vKnCQ2EdXNwdyD5ebZ4wAEeJLBPKGymQ8YX9yB9yUZHJo5beaXKRPv8Bd",
  "key14": "17SwkMq8V2StVpbCSjuKP6x2Zu6VBmc4SZiCHwzJNiU9vH6uNvmjeMxUB9fJJK6QT4yYo4XvtkHti3iYMH1REqJ",
  "key15": "317ZskybdNTQfSCwpBMoJkMrcTCgYggY85Kz4xfqBEvsektTQyhXZ4u4MudXW2v4T7JTq133LiUC9hGJRAHKotAw",
  "key16": "5QnEpPwb1cFzP17tCgFTkxV4RMnNYkAag7WmaiL3XUHcbNJDYoy2x5hU2kvHeJKkP8tZGrg7LQTFL9xbbMAbEaih",
  "key17": "5KKA2SzmPKjhEWMCuu7gNAQoBFTHR8N2sG72jd5qcb7Z5E524x8dKmgmC8fQeBP19hLeLYTXJCrhCS89VKFMJAZJ",
  "key18": "486xKVQ7ecCu5WK6cpggrBNJB2WGgujKnktgqDZnx3NuGsTDYNypSwMFjWWPWbxCZgS4FU31vXFiZRTR3sFokLWt",
  "key19": "2XKk6c484cHbhxHbH9yF5xz2sA9z3aHDMvrrJBBcoQUrfNSrU2TurUYQxaJ18o4X9i4MZftwgLRNERXrKJoa2RYg",
  "key20": "3aDdtm16PvWgYPqqih7FkbeGE9LGAGx367pxpMu2TW6Y5QNnoc6TJoZTWKkc2a5QMqrYTZMCS7WEay3KLh4FTdam",
  "key21": "3UMiDHb34ApHiPP5NDg41NGGv7NLz3gukmZiJejWhS3h7iXUrY2MaSTDnrVLSd7rW623F7aEG6JbrPLjCDngdt6U",
  "key22": "3Ph24qo4GLt5XNjVaahto2pYuSszT8gARPf4K2cbDkz5XUmLhdNZGEESa9eAu8yNBh6P3rEReL4q1FRHriUtiGdz",
  "key23": "5TeiLthdVSpafxstvjb6jvkvVCGpXEbfZf9wNA12Vsi8xZrRDszt71xSbVn8djf5bsJiwzGFJKPjTUSvywd4qsJx",
  "key24": "dAxyxUUQaHVndUvG7JXcXGR2F4Vf3pYyVToaDsNoVANpuLENqaLnnyhGLD74jbPQgTeCkipG6U3Qrkg3WX768az",
  "key25": "2sg5Thgs8jMSoipQ52LZmtJjGYf3ECvAuveVoxaVTj8WRbno47nhb3nJD9jwFdbGPyUqqhCKqgjGZvD11mcxEsZC",
  "key26": "3yY9Hug5LFcP45UzPU1MZyEWo6ubMowPv7xcX7k1srEhvQw3CGe87toHU44ZDT9aZPT2D4QMNmTGRu9v9LSFqwuK",
  "key27": "4NzqKB2Lb5tjBhLDi54vnAF8b9pUyxiXSw9EkALpDb7LZkGrQ4PcRsfbeQp18dg1QFs3VMJ8BBhz2y3vE5WNUUd8",
  "key28": "5WR2JdxcGjo4dog2z4Bpr8iCzPvEx8VGZzszrSYfAvqbwyz7gfVbpaWdmdn1ZEUjTxhnW2bb2gLe96RGmcfw6Fax",
  "key29": "26ithYWUYcb41RAVwixbj2U3xUMKaB6b3LZnr7RNLA8uuTvj7tbGUucf1sGeb3JMN4nXqcXWh5aZNxR2Qxe19mse",
  "key30": "2PGjxKzU4vbGt4zUZj5QYCLxiL8QiEjdJmv8afrrodZ2boMMjixBb9qhU1CsqoBeK4LPE8Z8QPhDPDqA2DAq1WQp",
  "key31": "2RtEUbZK51YzmGj4219RyDM1P7qTvEBtPAEKjBjxYZe5V2Xy1QCm3YUE31Qt3kVyxR8AGZGNu5MKyyun62XCqyTc",
  "key32": "63yXuLgNFmbBNxygspXctCit9XnJnegTnKAZaoEwRSDmTcjai4oWQW4UAnhVWzayg69jsYLYHLYpA3GJgxEtmtCS",
  "key33": "2gYeALVx74a9B9oAA34upriseutQSfEkY6uxWosSXn8oABEEQ1Lcw7n7VTFoNZbHLnDbE5SeSQm9xyzKesEFrhma",
  "key34": "5h7MgUaAq4X73MGEa1vLDNtzLgUSNAdx4bVztEdB7BK4idzQXETp9DLg5DyUC7XDYLVtyAm2sJ3oQNcAyWehPygR",
  "key35": "CMnhQVgzefG9WwKtq5DGfi44qmJhLLGrbnvJGwmVFjLwstbaDUvJHE2qDUBiKQFwFeQzoG8s9MRrXRcr6ZgTR6A",
  "key36": "2scmGWxffqaRnbyyGDtKxQQUknHHZDcStQ3TPy5b5GnuTfnXE9wHhq1xB8Jx9PtYXwi7Km9665TsG88vNN9nCpc6",
  "key37": "Sji9GPJRPPQPvaSZWdLNb1bnk3o14STLo4Abp3759KfgKtpSMxbKdUBE4dj1FZM8PyfEy2pDcCMGYNQCZCTK9S8",
  "key38": "4cR1QjJKfrS34kp6uCz33gUQMDjSGt8DCghBVdckQWkxzSchHMZPzbwT3af9kor4hRAx4zwDVhwbQ1X1adztpBLi",
  "key39": "zVz9AGtb9dDveE85TNCtt1JCrV2SuV2bF9LDZRbRMzjrYpZ1CpoKpLbMcr1Q7oCmMPMpeCoj9mUCdm3i5SQevqL",
  "key40": "3XDnSZ9EiQnQnCSLeU7KB76of2aJR3HDmPjqA7wR2gHteg8NcMnaNv3LtZmz2GmZFfhvbj4mHcZng7Rk3jmTVjhK",
  "key41": "2oBUuD27rUTNz4fPCkoE4nkzAQewS7hnc87e95NmfTwDZ3UQ1GZEr9TxHyjA83NnDTC3kAQFZHQRKuqCy81g4baK",
  "key42": "2kfguYC4fc6dyr4Q1erKugQdyUbk6DW3JMhFCantffRp8UXsxg2UZzxgvJ1TX39nFio3x3EkaCRAiQbnq6dbgFjA",
  "key43": "vHgL8gec63wzdkhdWAzZfUgZGVhuFzdAtFuf8v1yBUtyee18WHg2wYdx2uysjK2NL6GsakNNFJJ1kSY2Qgw1ZHv",
  "key44": "2qj2Zn1pWATEbd49eKKz4MijvgYnYUGD9LtNgsvWHPbZWcX7qhDE2bzZjmvfyMTupM86UnZWAoCnJ6cPq6xQQ6fi",
  "key45": "4JmWbDoveZ6cWS5zpEzA588K4hKdFejZot9xNQvAzrVwDQjZ339XdDhwwkjUsee3TiBGZRP1gBfRihhDkByTNTWf"
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
