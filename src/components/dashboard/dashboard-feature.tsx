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
    "5iukmomK9VHEjEdyYXZyTSfBNofeLYSkabBbNrPb1hCXYaWvVGFZJ4zjnQ6cMC5LvaPxn5tgjoCe3mZ35HzLyr51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29JJT5sJQRWc8ASNsjdLQcnRdmCpqF92rdffxjncybFd3isdso4AT4CQJ4TSPqc36bnAm2Ehfi1VrZBpvN1G1Gqy",
  "key1": "4HJT2VbawpoNWJDt1XjCrJbVvaGNNigmWCg17EF3bPBrGDG7m7pm8EYqj6AvnguCscJRevjo9m2haKyzVjyPRt89",
  "key2": "4GbsKHVwEzfp97VrHsiJug8u3dW2L1QQm9Q5vA5SqwnMuRHGEpHP4ZPzuuyjZDPGarwP1bCPJiwtqajyA1EGMLUV",
  "key3": "5cnmbygSJET313ZY8DhEKZLdvEh2o2SeEMBZkCPmLZ1JYEkm2Y9RRyjM4mbfUxAdYK4naDHupRK2AXFRWAx73NnE",
  "key4": "2BD5YvuoaDZAWZmsLDpngR2nBg7r7Bx789uF5kYygc7Edyb2fRfY5MNc39UjV266YL6skBBRpaGPGYgUR51tvraC",
  "key5": "5e6NxpHVYaZUQcm3sUPYa4uFaorsG9rk7PWRaCbr5NkM3smXYWsurib8CcLirunUKcGXY9FXg5EtRLXLLNBPGFwp",
  "key6": "2UCJGk4iSQp7iVeJn6bGWWNBjhzZ3Fv7Y8YVAp5koSZVtrsfyadhAPkhxvegHPfF9rsanZmnGB8nMKn3qrAymxpM",
  "key7": "5yDaMAqttD3FwNJtyUDCdKc87gGB69ihKdSjQMMhUs5KZdfQkmvc2DkPwTcq2EDAtvAh3yx7SqrUrseo9mc4ruo7",
  "key8": "CLoHZCj6jNPrsfzL9VY9cT72myf4V5u4NmKdgqNErKpeyakYpwnULEaTCA9Df7ipiQ1WewH6sGoPh3fq1QLx82V",
  "key9": "2L81NkiToncNtfwPPPzSogQ69RBnr8n9pWezomUZBbkZ2C8dTCwQUqUVFHjG6u7P9GNv6VrUv88Xhzei4K8WAp4g",
  "key10": "3whMGvsuCVPPKbJfrH1nHrxMdeed1NyddUbrcevZgis3ifnXA2uMMjbZj8mqkQuFiAGt9h2TLdrJASMcDHciCZCw",
  "key11": "2BwVcRE1W6tRGCtCEfXohDvwaP8e4SJpDkyP634sT4JURsTVatqEkuZsANAsqd9vED7hiwYqFKYSFi3VoHMEp9en",
  "key12": "2rH3quSs1EyVqz2VYYuJore5ZHT9EU7jzTKhnqw5iRAgEvV4auFMRc6CCvk5FbH9SfuxAPfNtJPe8LHvaBbA2Erp",
  "key13": "2xT1Xv7wkSVLinZT5oC7CSWNN8q79UQ5gpiu2dRvngC7pauYzw6gDZAc6ecYJsSbGSNBCHqCqebFKMeWKgP9C6GV",
  "key14": "8emtWEnxm1TKunA8oUgZdz6ZExGrJs4SnWSh4BF4jcPip98o5MFsaaoEjnSFhWuNmTVGDJyQLPU2ARmb2z2dbUq",
  "key15": "h2HqRYHouEVMnDnZqRLxN7WDSxtpkuuLgxggVjoA4HBMFsyFrATLzk8s2zVeu3u5UW6HzLtRnPhQHYyVK5YN9rZ",
  "key16": "3CWEHPqsAZKy7KZchgjgPHQgqVyucupHCCshHzqCKaPp1Gb4u326F5T5k2VDA2V9ct4yQAxhkdqFKBx1TGzkWtkW",
  "key17": "4WjC8k2KYTqr3m94S1u1Shz8AMHYYeGHboWPPLFyM1DZhsM32BSsEpssCqZgf7tbfd2gom7A9oS3KxXjCzxn3txu",
  "key18": "3e8gTmxtafymtTuSrRUxAnNEhfCiei4bniGSeUBKkWDrsi4kiPGv5mQB9sBgo55uKNU4SQSawdfrQEfDPPpb8G3V",
  "key19": "4JQrACGDRyPZGPgJPqfxuoi1xyXSMLSLE5Q3Lthjx5x46bpKyPkyCbCXVEWq824LiamCMaa3AGWjRrm8kUaY9yTD",
  "key20": "4X6417G2wvaGdrEocQCskuqAWgRqDSsC1KByDakGDYD5Kx51sQnRfMxzaMJ2iMnRcqXKxr8o2MsRJrNke3QuNRcG",
  "key21": "3F6p9ThgajkuLc6tHa1ktMNUqQ2FF7D6mWubsdRtbxvW5WrXKTWytNgzHsFUP4nJ9NRYfmFY7GFMWr7AMs4qozhE",
  "key22": "5bbvYCVd1RKqKrvWrCbezaxuM4unUT9ZE86vLEdbGzPKbmkC9cu8jVbjfjZPwfreNe5WkVnbciV4wiJc8xn8i14n",
  "key23": "3P7CtiqCEEykiEipBK2zS5EvFQXkQuKn47TyUfwQ4wtfVmz22PAYG8AfbiMqSYzS9crCFkYrQt3VYGpj3w6BmDBG",
  "key24": "4jyrnsVZWEcVHiVp5MRTvxZJJk79wWoXxKwqPf3AEqJACWRYeUc263zFHdJxJjWr1Lnbf93RzqMYoYBewifwarbm",
  "key25": "5DvzkA4z9JcjcbL7qPbNdFUAJKakx1fUq586zkRy96BM7neHP2zQEokox9KNcw53FvMWU6uJtaf6MM9XTua822NC",
  "key26": "2VtLrJ75N9zkn9JJdN8Ns7UV4VRWnYdShG1XtxikktL4hwMcysTxyak9vXX7RRo8NmRSnDhNZwaN7duHssKCvMZk",
  "key27": "kyGseyZACdej4bysfMcs7KQjHaK93qpE4ZS8H8Vc9AX13tNNmcgN6ZTgntcfPbbhH6B8KdRmQjZkugMCD935zKJ",
  "key28": "2FnMzjJFVh3ncDVDaQnFea47m4XKFJSCbmgkmYrRHqZg69zYE7VqnMUMqmpgDsdgvwF7fLh4tr19jpwG6xhgEin9",
  "key29": "5D3iZvSpB4iadPDHwvQmtx7EnPzYZGZBjvyhpUKm2XkFLzf24ak1WTMkjWz8zmwfzwF9UznjZP9WkZUBh5oJ8oui",
  "key30": "4wKFEFgy3B17g7VdG5HuTQ4915ieq4w9JRzPeycuQi37DYvoKNL6PPFqjWA3RHfT9H5oB1Q7nJVhKQkQh1j3CHfk",
  "key31": "2Tw5M9mSQjkFs9Gh879pfMDb9gbRBX6TA5F8y2cv6RqnTEUmh7p74CCbEPA9p8PmBNF5M7zzbb6QQGXCgoXwSLUn",
  "key32": "35zoRfxMabbVNE3XCkM9zVZoLcMUqPDF2kzzoPwkyWxeAQ5DWvdt13mYkMdxuS9LbJg8BKHeNwWESFpCTU7Tu9RV",
  "key33": "oK1CqQh7cfsd7ZaYjAhxQ9JqPCeLY4dckbTBPQHjEhRbsmVb6yrjNB59PJyxovjAZpubTBMgZjm6cRY9yqMiMck"
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
