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
    "5ULDmUJ6TnStFiWCuhFzYv1WyVPKiN2mmDFiJ684LpMfML5N11Qm1vZJsnxJrGB6kcdw8QNrNd8bvh18CkMYBp68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bd5LnCQXRHaubV6F9eBNkJnDnAJjtQwJUVjpCGn3RnbKiYGErQQwYsCnzZRXZojNWxSoTdJgZH2sfpXxt2JS4Ag",
  "key1": "2d2s1sonGeAUC2H54ELZv7kXWYSqeNfYQXu4NvXUU6fFaYPbZGLNP9UrXtXbNRFtATJ7NBK4XUQbixo9vhvzPZoh",
  "key2": "3J8h7Sa7z6EYcrTPA6ruMHgzGmf6Bf74ZMnTCwKBgZEFHpfZNk1cvkH9XjKdT6fUfjRqqH2Yf2fsvZN8ttqMKwaC",
  "key3": "2YvYFH82LmtTtKygAm3YjqcaxmeaNFVkQEGYonQKE4EtVLrf9aj84qc9j5JkBWtvoEjd41DwYhnxSS6gcdMeSs4J",
  "key4": "3rqonwXRj4g994mpwybteQ4WaSX4i6oHuPGRJjdrQZBsY2ijeCS1TBNmHfWLLTH9eaE6i6aobVGV6yMQAHPu25hX",
  "key5": "2cqJPdqnhfRWz9qrxesdzqiQaGtnp3cBYToghrapn3j6hWQTScyY8Tq53FeZT8GGvRD9AtMnXxg1MdQi5J27JJwV",
  "key6": "j7asDKM9bnVVD1NeiVmBHQCw8vLz6xKq8KfmF3bqxAvi3YZWFVwUmp52RmXaYrBdFPN2uTCUbd9tQpBZ8Rd88nf",
  "key7": "5ZHz3qy28ENTmqr73cPp1C3q4Y2seFS6jjKo6ipAdPapfkASMTCzb2hZ8XESgTRLcLE9LvKMiAx4Lj7U5Cce9CaV",
  "key8": "hW2ejFwGSXvZFREybVWZDtDQwN99FCSZT2PctsH4u3dBqASNHWxbznoLL7cpLhG8AMhi3tdjHD9m5xYFdBJf6iS",
  "key9": "2VCztVeWUYNnztqVQYS7xKuzR2dKLv8uTfoz43mbrXmd225wnSkEvyiqeecdKHCeZ2gFxQ97pqCWcTKjVWvWDcAq",
  "key10": "2PVZrcd85FXJXW8ZnQRK8td3z5dzmWo3J3Q12xVgMPgjjw8W2L7srkSK77Bz5dnUWnHz6ewpabbi99tJW4uZ1Fqs",
  "key11": "36JXCmzoJud3tEqLCHVp4QNCkHBpkNBG1dATnAqTmfbCVEzB3hNjJ1GBL5jNgp47oR2XdzgYH9Ha3bdcPv1PmmXQ",
  "key12": "5QCqADDDuV6BqZqcdDLxpEa1EzM1joYp5ybjThVnf1oArqX1G9LNcXEW8Jx5WhG8p3WDwNEE3vprTWAZYqVk9LJC",
  "key13": "61EdUAZ7tAHxMbvh3NrthbcxrY1ZvWYc3mCHwLpq7g1x3PCY9L8rhJ5KUSYzCREYbpneqai3p2Qy4kfENhTLVNSu",
  "key14": "4VHwwkDcLatMPttSogfNxWyc6r23eCHijmK6Q2Y8AWKSjwU6KoeJkHmyDRs9vxBsNYc4dPC7J7dkGQ3B239uZE6E",
  "key15": "2zHToU9oPEbR1zz2WGa6vYwz4LYC6XWSTywXjqugu7zvA1CwascvF3pXwFtzfmadfkjGswtgAoHHHpAAadX1rMKM",
  "key16": "3ugcLcfqvjUtH1t86zYByZgC75yRyCroWRRvnzLDAQJiju61yQ5ixWFNaKmcYoPvXxpuYY8PmjCwuL8uXt2C141X",
  "key17": "5YqNa8Bb9Akk3iDyS4r8kocqXAVBkjo2LnDVhoDVPrd3nVY8rEEoEeX6LhCJfComkK2gnZrhDq8hTVta4UB9FJeo",
  "key18": "2DFDjGzU5vcehpk3PDr1Gcf5d327KevTEpKSu2b7opspHPoV7aUdwHitFFW9xfLwtZRg47uJG8Aya5Knir6qmND9",
  "key19": "2swY6GMnNBAg2sHvtkh8y3Dx439mB9pCHBCosFZBCbN4vHmCFuysZFesx4xSt6YJFs9mt1D5d6XpR3CTioRhKt4q",
  "key20": "vWVnBYErMfSyNsyfyHdiP94P2E4fVSztnS4fcYqkqrB59oLL3efB6Kp1Mpb8NhunanAiWw8U1XXkK4a6L3gs5NV",
  "key21": "2dShVyARqrN6sj8WDdYtATbiGXjc9aR6FRbehu3bRJHn12imfqFSxv5mnRwdMT8afeRVQQ9FKjprfXUW95jjW7vr",
  "key22": "WDXt1exSQBCCpGK2jQPkjQ8Z7r3APjJPCHtg1SLbKzG3ZLR3WCVNRWqvX1xez8eHb6pwEP9SZ88bTCnYz2mJUmG",
  "key23": "4BAvPUZ7qAwXbEStnPZbp86DbrctJSEsDpqcwQK19sT3SZZ7UM67JqL4wVTUgBmbhMQeRgw71knzgu8m9i5vmNUg",
  "key24": "gj4SfHqqbP3Dmh9pjv1SZFdkxa4S1rxJ3WzCPkTiZrjeVyb8cSL6geETSEDARD6bEpr5ze6pwtieHaDHhK8Uq7f",
  "key25": "3wd5DsmtsW8WauGbAjnE8ZWJeztLYGtdd5YJctgxtd5fZnsT9GewZRGQkxfyhXehUZJhHeXesamDkvD4BntD1Y6k",
  "key26": "62SUc5Y467h1PcPnkwYnMrXpDzxyui4LVWLtdJn5GUpefKwCucJnv5twZEn1Ec1Ghmz96A8B3yf3QBnaiE9ZRrkD",
  "key27": "23Qk3BbpZ9PWxz11kFbSzSqgCarzGtC4LJKM388hcUUSMjKTKbcMDccfeity7ULF8rM38b5ii1vcH4Jy8eLRsUsG",
  "key28": "25Ldz71F8QsSEWyCBrB1EchEbzudqGNLmfvCFAq2ccro48s9t4dx7NYujxvvF1fdFEPQqkh1rogUNsPxKnhR2iw9",
  "key29": "5SooMpdFFRGBCn5hFrNh1aHh3uUJ56DZBd4iutkJdzNYFHdRTyDr33SqFFeHxDG6hQrHLAqFZ3BuKuHWFRG2q2jk",
  "key30": "62oZnZonjus5rcDTEq3NPQoSs5hBgYeAGJxPgLZt9NJuDAYZzdVfMsEPkgJQJrij33zWyWdCB8eqvcNGfhWGKVtB",
  "key31": "Jk6RNbZBCHGtsP4zQsnACyXTDqc6438SJjrJE2spSbRommkm8NsQ5oBtoLU13szBScmJuMsH68bYiy57jatWzah",
  "key32": "2WvL7yvMPkcSf6msJWLJDGHrVDa93R69HhT3SHSxZ89FnuVz2yxFpWNdtYqrvWaFuzVNGs4jQTxShgphEMCWgPEj",
  "key33": "3T4o4Pt6s2Pqb2yLSmKJbLEP2WzS16LnPE62uz6DiDtjtqrp7P8XrbpD5HdvwGUbBL4UJZ7SMpbNcDMiwVQzKLjc"
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
