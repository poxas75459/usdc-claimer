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
    "3ynCq5nFt2iXXU7BPcJj45adYtW7nACVY9rfotxj7ppF7DoFvmsN85aLL8T7bjoLJbD5JikXdBzPgh4MmbcNtkCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RkDUe2aXdoRmY6X9Q8ae5VortrQxLB42fFmeU7oHqHgPcPL3Lvy7RUw1vWf8KV9k3JpYxh2BGDNvLExqUR9rNTv",
  "key1": "3nM1sL8ewqVhVxgMYsBQdeWMxCkPB5F7wmaSqt3ceZ8URBGCrvm6gnWLcSjq97UvDtXGmMwQA6E7LT88fRRx5PHm",
  "key2": "3z3p1dZ1d7pFRsjB5gkX2kZ6vbXws4iTWwrtgadfXnfvFbJFivdeiqttmTTBSxeAKJfkqbvCTK17Qsm8hwN1X1hr",
  "key3": "62H7vSvoBhAn9P9Bt3CELGSzmZp7uJr4pYEZriDpcqbc3GDzMRi5WR9EFVtLq3EhFMnT73c7CyWGyctTCkuWjQ3p",
  "key4": "wcVSpTzFF3dJdQJA3XBaqWp2G3WLhQMqN68qwVHbCm6c7zUXPCTa2qncKAkDsFGa2h3FnMdzhLDJSAMTgdWyYnY",
  "key5": "2nZWKp46wewBFqp9Pb3efA3ScoymixDy6ievV5XgDRjbVQ1cDs2jXmasLVDdUcQFz235NughK92LajwQ5KUPbhtM",
  "key6": "5zmXv59r6epFBTPdHo2vfK5t8Y7F1B6AXTmp3mou7DRG2sJbEAfjXNoV5HGDgZfCHin98nFmqZyt2gxGzJTawwX",
  "key7": "3VXatMZ1Vw5MEqbgYviXwn6XZbusXgAVeBEAb5mgsL6zkSfTWj6kQb3tieKsYnFn1wdSGXhRqFTPcpdTAx29HSGb",
  "key8": "5URzmhspFiGFLHwZty6jgYJbSwZ2vYCJdBPyeYQUmD5NMzt2qbEVPRPVEhsfBmcPnEVnZkAP2ZLPtwkrwwb2nFCZ",
  "key9": "5ixjLDqSM2EEKtyFDZGWSeBwx5xn4nEHJB1uxVbkzyCyZktqRtvWtbCUob14YxTNeJC3nyWtn54LaGvvPhLrefiy",
  "key10": "5Q5F2vxJesjDRJaUMkFH5McSr6sGdbggRoH3j1RhrPFDXaVNwRTZp3SBfYDehM6iB6e8QKm1tXbV3YUGapQx5DpJ",
  "key11": "2NSPbQFBW9zqNvb52iobpyxa7U6EnRyQj5rLHjr2wWHtSGinHStRZMLwvu3wxqVCszwB2TFBC1UVSEbosvKwdaRW",
  "key12": "rEGALMHgbyigu8YqkchKriPJb9N2TQ3j7s5d3KpSFNU8TKWxp3umxcv4KJezGrAr5WdoZTGpeJFBGa7bwhApMVF",
  "key13": "RViyPeui3MR3uK94F7qLwLHTizfYJZoVutrrBnqMxnHwtSjNw1vKkBMpnfA9Pekpu6QXBAJSKzMDeJqUfhvDGFW",
  "key14": "5Bb4hZUEfeEoGFksNWyvBZ4AfHSbPaC6BxTLFee3aSf4T3L7Y4r9yw2wpPN91QqTmhs1m7ZSfLiStUosZLZXTrNW",
  "key15": "26hgmVPiagAgsHEYzD8AhqX8UTV6UVeCG7PozrBoH8aZr84MrPdn3QzUaEkEMCMZWisjze9XGTbL7Mp1y3iBSgcu",
  "key16": "4MBsCpbqoVPqgXyZCjA4wFFFgKLHuMW1sfZW86xEGoYP6V8RRF6wsWQ27wJxJU6N95zCiamW6FZtezvEHx9h9hmm",
  "key17": "4oU36y2noHvgUXmwA88vckb66C81FoGZbExvfZucE5zLg99ijpo2uVBQELfkxkEeQZDTfVFhjg32dxEv9WpukNFG",
  "key18": "5NNGyjo8Z4gqYAdQdSqpduTEz27SUbHgozsDTyJXj39tzKaBEZFwjxCUsop16waD4qxLFHJG4DV1cjK44PfJeXaM",
  "key19": "3dwWADK4ff4qztMEjmYGohoXdbm1GQ3vTyUDXdjqsVzi8gPfMyTey2Bs3aUALKkqmy6Y3Efx2FrrPbhUbWMFkxHU",
  "key20": "4uQQ5hBejVpD393SJmFQq3papxCY8upgovFduQ883sFJXJvJM9VjhC8qk733SAMsZ1VY81JgKv67D24ooyZQ4ZRU",
  "key21": "4B3KN1wTZeyaTqHmQ7cJ4Eq2vjrqNVamqQ4tXc1dNe4VZXJwUQg7ViGfM5NGzjWD3umByrrPiMnbSMVrNgQSkodR",
  "key22": "2BNBP9tUNRbDhwRNtJKpgC4YJ16oDFYnNtcEGcpUYESDZxjYspRkHuXi1iq42RdiwyPVMaygrac55vVoYZHyByKv",
  "key23": "5tZJektrAvPCCpLEXZ9VtingFm8vgtLphNp2cC8RD7uyEhGuQikaf4BZeCPWDhwhrKJM14hGyBgoNKaTPd2W4ojQ",
  "key24": "TJjgJxYbpKzMqiU59YHbxhHSAY3KrjsoNAayL8bXZDKcmCYevoMF6uyajsFDBC41TfCetKfYAczLEmbkcJ8BdbV",
  "key25": "5Xd2sj1jBwT3zw21BPgmNQg7rn74ARRupWaTMZroCPVzajjpYAAXFMoESKNsvKGAcX9eL69Lxbp8mRf6RwKc3nC9",
  "key26": "3QXD6xYJ7C33A4KgJrL3PtDZrPXYHXrVFzbeb4PdtwreCnSddCb9YmpMESobKLXrVXLLYNHUbyup2WfMienr7dht",
  "key27": "3NLnY39LYGs56tjZqmnATUB4iJp4GQS9Qkj1mNthwTbUirBRbwfgFRC9BCQuf5XA7ZVvV3Ah5U16bihZVPQYwjyy",
  "key28": "4keN1QqeL1jXttGPefUwBzMuwcXFLN4NaHSEzNvQRtQP5Sb9tetcc9dQgj8NdtuANaT73ERLRxA83YvWgfpzXKWt",
  "key29": "3H2xWm6PheqqQhEJSwVR7TgdjDX56AU4NpQhh8JREKEh8Sc78SNoMsutoLac7Ca8v3RJYd86Vkwac4Awu656FBZB",
  "key30": "3FEDmi13nrtk1kedzzt98NxQEuiNHJZNmHd6rcR8xYnDUxws8FMrYN48Vp65gSsd6AfEFhcXWU3E2SZbktayWDn",
  "key31": "2CATgHDYVWsq72MgHubL2w2F3NWHEPzAMDWCakrgsXDjTe18f79zNQHRnfZSrjWWd8Ri8wr3XdkzYpGsjwYcWpqT",
  "key32": "5ZyHtuTao2dHWFJefnidP44rQLw1m5JkcDEhWLqigoiM4jpkXupDf2Gzp7RkePHAR1TsxEihqEZwsjhYj7Po5CXQ",
  "key33": "LwD6P26WLTQhERZamKuSxJ41Wd4CH47DcXmAv7YxTTz9KK2Uwj9HS247Wo5KwdnFV1GETDvcpFH1p4rtiBkStfW",
  "key34": "KUu6dRM18fbkdvYRpqKeEvW1aQyNDuCXJzqL8RPGGxa3rJ9hiMosPc5rnvgTPJNpnXBUFJZ7Pubpzj2ANH9YMvi"
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
