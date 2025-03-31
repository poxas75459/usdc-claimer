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
    "2wbxtRM6dVF42vqJymHwGAUxUk2ZgxEwxM46Wa49ij2U8NtQjrdbMdNqwqyjzumWcwHaVtaWmiNNneqHjht83vi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vzXjRcEeA4ymAaKXB2aJBftajALQE5iURHdJ4k5vaNdu2vfvU9deeXbpqzsAoPHgaPM1Egeua3UJHoB1DEGbMiU",
  "key1": "BrmC2bRh7snWUEpoS2xsmqZLcdPHyW35RvmDts2SVqHnqWvHTgSJrjac1Np2RWckaFqZz7ftSqwPPDcVm2ruGXx",
  "key2": "XojCZKqfDkGWAbf4rzLkvCKYsvyKU4vAHg99ZPCckUBcdH4jCSJbEF7hwVo71WF9Dz9UMiFC8kaLyMY5SPhZbSM",
  "key3": "rPbRCfqa3GZRs5tm89YLdHC2nFhg3aqpYu2fNsLNjGFnaiYjxqu7iDJCLTb9wqeKz8jmPAKJkAN3U4xGQ4vcHXg",
  "key4": "3WBLwuTBntb7TECQdc8Ryxd6e5589pQnXd95Weqnz1BpMvbhfhCkjCPLAzfGAMcJSadTPk5S1ecxnB7UQ4RBSptV",
  "key5": "2FbEQyq9a8N9LitWtJcX7W8QYYE1ouGsQpzrDeAgxZhBhEk5v2ehV8VxrB4PmFh7k6pWcR9wRbFNvNTJMmkzSU98",
  "key6": "2G8VpisXC98qpLduTmHb4DMkFX9mPZPcRh3AYDj4ziTfEzw7VX1iiBsS9R7ue8m1RhiGPWNVgBuZgn1QKL1ZpSp3",
  "key7": "2wke8Y6Lh2b6cmwnsc7SvcbTQYxka9cze4JJTWzNgTTg91WQhbfXmNxAzpqPbz1UnoL5GfkEbE4EwuxmrDXxVMRT",
  "key8": "4ApuWMotqGL2n4pAxfofVDVLXbrRLzbus9rtYYLsJ6Qi6neZ8FoZ7BNWNJNqw3A7zzApaeuj3pJTg4q9JvkoVNmS",
  "key9": "6rCchMTHUqhpiJ7XzBmyAZ3a7SGmBDoXiEULkX84VsP8qZ9XUbbFb3MweDsWnH6euz9Mw4NmsxiNRdieEWNJBTR",
  "key10": "2UxbTnv1nYoUpfPxYn4q5o4HiG3ai8w2NJ2HTrVnnnRd6ws7j8Jbf2nQAjuuqrgTjrwEVFLy855qokV66EEo6RHi",
  "key11": "4YhMGajzeG4N6DU687DbewyRYpko6mz13eW4z78mFzN2G1UnbsS2pfZCx67N5emECpiykHXPQ7xNWatB4ToTscz1",
  "key12": "4dpHBhKJaxcipFcAWojkv3Q8fA5h72zU2XSKtr652okb1sKSK9WwKDsca2HY2GcsRmqHezwJkzVLBj2fQUJFZiK5",
  "key13": "srTkoCmZw3nCCHxbtxKz6hjbSBKBAw22HFtk7B98ziSBsLf3w7LD6vhcYyQBx8PkRPyRZrCnTYHA2C7K1nvUaiA",
  "key14": "2hpAXvsuSQexZNKkXAt3HxdXzYg2vGfpFHeQ56vxJaHiarVFoVw6yWkoihEWAggEnb8cCBskDqHJxSzL3iBqrLPh",
  "key15": "CdPH3XNaiEybiYLLyhn7pBqtjy2AYtkj6rmnyUVWLW2RghyMU6BHShReCCt8w8a2aoFtUQXcTfGRt36g8BJEHiM",
  "key16": "5o36K5h637kwGVhNX55MamHTQRGzZFTDKLFJrHapwPcxhBZou2sJRcUfqLzsEV9UqSxK8UrMu31rxwBXEYfpZF7S",
  "key17": "ddEJQU13vJCjqLoJHuEyodbqa2HuemwsyNtsJ1iLvyRx94mdPYPmEnZTJD3BoUhveyd9uQJ8VUbSnuwzi96by8v",
  "key18": "o98wCGbQSgbWpGSaNhTHaG3imZQeLJk8WCwwV2KgBzqstmbTLtZcCM6qn18RzeiCADxycQrDF7hDZFRADS7jk5u",
  "key19": "NnfDjLVAdiDmFPsUCf9R3xcn5iBFn9tqNiizLfgq7ZHTsv6UrqwQWpAw12azCUC32N1fZyGGFVLBZ88Hj8i6jmF",
  "key20": "4iEsZ3aieVKqTQVw2NjPfgFXGawCJ8QhKpB3cgxGEc6dVei1WZFXPJosUjmc1qYQbiwXTCxu47bYkGoBZXvuoy6g",
  "key21": "2opWULfd48fGrn4cKPLet1NJbQ7pisCnBv3tsqgx9ZuC9AuD7ZWYQ1mn5agoiTC4FHnr3nyfMwzofR5E14wWWgE4",
  "key22": "DRZX5yt4TF224SopbkJmqzVvXm3ecEDwR1caXdpCnmUmtmxeYUCPWxsAAD4gRXRnXUdp7siDLNwmqsW9oBTfnV6",
  "key23": "59vWUUqkKUHJcYFNct7YP6ARh5FzBLhzqzk5KmMDty1Q6gMMs5MiwEQA9BHgLoEz9iAs4d4UArrxdDco22DXgVUq",
  "key24": "4UJYBP5T1NuFuidgCNgHc4EFBEPWRgsqQGhu2PXVVddtN12VyqVEWmxaggx9fjf1rhUqLQ1wBWfLzCzLH172Pe6K",
  "key25": "2ioBB87Nseb2bjrWf4VvvCQnJcKHrLw6vBmLhaNd44P4KJaE8nQU5LDGRnnkJhG1CrxondnuaAPRjag69zepqpqP",
  "key26": "5usHs7kDVLGjr6bZmieCAzwmRdSyYPa7nCZ2x6xJZ7KwfTj8zYn9cPCn9NxAqaepQQnZS2pn54sFM3vKPwW8cbV7",
  "key27": "5N5tUzajqzS61PFoEjcDf4TBFf34RBouPESxBtqPeZet67xQPD6Vro4QL35v7GsNahmUBxmjHJQ3iLicxXA72Stb",
  "key28": "d1fiVZtipjKHe5bG1Xb7dUmv46t8LZCRByzfsx8oAGyTX19dTFrxLdT5i3H6HSkidefsFcJbeRKeXkNz9gmtpem",
  "key29": "3WRUgwH1wypjNfYRfS5z7T739X2stdbKjyU1r3Y3xge4tWDTcehNVhXLagJqHNsB58zbiwLKMakHFo43ogJAsZ67",
  "key30": "53vudwLftK6SXn6RfPmbKMWuJdcaidZ3zvPGSpnFiabkVVKTLaZgvaCqLSD1nJtq6mxsP1RpJTu6h6R1gvcM5aQF",
  "key31": "54hb8FdRPTuNsUYEKFU5jjWW9ELLVUdigZZT3VbqfpA39Pwdf1hQCR5fi4Jc7kqHLwYTpWcv26XArXsCU7vk1KdV",
  "key32": "4zdwhhzoSG36W9RGS7UtxG9M8CUys4T8wnPf7XKmngTzuuZAkZ9RpkZLStPSQCY5j2Ynscd8EWedpeTJE4vXvngh",
  "key33": "2TsumJMSmySvsufqQDXaYTnsEwZP2AESskVFKC2UqnGpn8v2hTC4srPyfkdkjhinMLVYWHTtn7G4AbB5qXFhLT6n",
  "key34": "3Fdw2oPA8VtZjS9ovBxppQugX84JkkreJijUUnEDXKHckRyYvNmvy6AR7N51HbfoheFDQuvfLbZeEn3FYPwb6Htx",
  "key35": "H3iF7uHHggp1wgkRpyXJZRLgfzh4U7AsoTyypmqJbBMc2XXBu1fnbiEADnE2pRiJGAMv8iX4a5ZUQMfPt4gjdhq",
  "key36": "5mNGJ6YoUQWGjDA2G9PiN9J3rEJ2PvNWnmiC2ecakJL9GpvAL88rxwqVd3o7YNEUrpskqzLEME5AD3URhCAeWK9f",
  "key37": "5KRNSCq8F8QkCXuSQgs1RdPTUtFYBwkEvUR92TB7EFiJEf9hEkC94ZCt4QqvU73PdtSKztchrNkEHhyhzikyEpJg",
  "key38": "33QaHTD1vRXxsfS7Mg4hpkdNRuzaxP2zNHpaZ3aoh3QGCCJmd1GiGyj694cKEA6AHr9VkASdF67p2L1zK1zjozZP",
  "key39": "4LVXpEZ5hPPiFJiMpEJye5zRExsUAUnYLi3gcHbD1BiZ6sbpQKKmpLugXPizGJH7zYhBXrvuVXCcfNqvAJSUS7UD",
  "key40": "2rdSRie2ZhTa2YSjRwnxk9QG2CQCQ5jmjMX9HueGVwwR39YjbDHQqHVjMnMWGSpMPJJWmVTmuyPg8L9uTXXoqi45",
  "key41": "2gQWVvpLDKWuBJoaRBCwJXnnw88otDWxbvjkxTfALNbvpqpb3RXD5DisyvJ7A1oDZbL6uE3xQzFHKNyj2FCUpcYB",
  "key42": "NrzcrgxFHFJMKpu482yGcigz8NudTjtcJHCxXc5V7BfzQm2v1Ax1JD1wDaBt149PN1AvWepR1fBPJa8HZgE5e3J",
  "key43": "4pVqNGRdH1SvNoJ1YMEwVfYqCcMWLhUmPnDNbWaFLYPfPPeoPTdzSbDjwRV3amUHozsFnLvVTgaMF3vAxhERMyio"
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
