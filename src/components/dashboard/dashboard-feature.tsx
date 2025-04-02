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
    "49TKtpbzuVEskLpDa9KXBdKMjqKDVTLwPSk8xaXA2nFSvgfFrHjFc2m1Nycea79pJpguUReiD7VZUAUHgXuXvWLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tPWLAUXvEABtttKoi8xcoEPfQGSAYvvdAVGddKMahyhEQrDBtgp2t5d7ojQMNo5px6CgxmNd6XYdiEtnixbX4on",
  "key1": "dYrZJ8ujxAHgaCbbwgnX5oqk1mq3m7AK4eVmjqnSoaXUHRX8f2AcKo3M4Hcog7oD5N8WviacXCVtbQ3zDV2XLrU",
  "key2": "4dDJg85G3e8zJ5RSiTovCJpewBj48AGGS76JhukN9jhAQbNDs2vdFSNQKun57nnCUTUppgCY1SJ4Uos9XDoEX8iW",
  "key3": "iQ3ScPhry2RNZYZ7fbVRStMMhSy76u6rj9TKGGdrFBA4w4WESgxQtNZ4o8NYtwEDtNRTU3WbiNG5AE7mRC5HY6Z",
  "key4": "87NTQSsBBvNfM5DaDCMfnCbk3qricdQvk2YDK1Zmpk5n78vPUVCvuab4E8JAQjSKA2o93QjeRwpeYTiSA81Gq2T",
  "key5": "5fTWoiN8UgEi8igNjycbgwwhDUSPBWg7uTPeaDKP6t2iQWihQn3WSsj9vs44MLpvm1Rtc5CM2BDuYR5KvZWcWWeh",
  "key6": "2AZeHeo9PyrAYh26djmJaqBUwbexrxwtcuMr9Uv5bpN8yKKzixx35L73sE4TGnpLTmVVvibSpKe4kS1fZ9TJtAcr",
  "key7": "5gmWGposAexZudem7rbE6NkXq7rHAhS3euiF6uLmit6idw3bR77ioef4BEmrAauRVvPdjFrNkVnx2PKjgGMRsnxU",
  "key8": "48gYvyqatPyTmeTYgwpJcpKAZbQFP3csSUGET9CaMptFvpPRNmyZxu3HvBKD3v7gZtKRMtVCruB4XvgpPWSjGjVC",
  "key9": "5zcakPwb7yk2zNtqbhkdLZVsuBxG2Jq63w94m5Fq4EuALfS72ZUCLXMt9FbMPd3cBHeoDzLFqsKgftHVPwNRnwrY",
  "key10": "4vScqoPuCj2i2FcnJYzq8H4mWvtmDL46yzGaw9gzJ7iuaPF1h35yEGGygVLwiJAGjtCA8xAGFLrMidwWXBmDJ47W",
  "key11": "5Xk1REggz62m2AvWsmK5osh4Zi5Bykg4p8T8xCeXBxTBLiXk2fj2yb4zAG8k3mJ9xs5jiTNL1QfSQdrgxv5jSPod",
  "key12": "41w8WFfVEveLqj2erDX3PxVtbTeYNEueBbYmMXZxC31v12vwmBfD4NzqGDCusRPzZdCopvoC6MBKStzMd6iGzr8K",
  "key13": "6mT3cV2VDLPrZXNrNtvmopZccoaE5E6q8MEVg5fYXiioKct9dLejnJBxGiVwSJwNW1y7uMKu1QaVfJGTgMSi24P",
  "key14": "61CTrYYAKMH7Ubxo5HtNvJVb8NUbFTVEKtWoBBNap6B3qEQFTHwcc6KYy1H7Qkoph3z9sEZ8ZM2LxK3q7rxR6Hhf",
  "key15": "4MbTsjufWkc5R9zAbYWitj6427GhnootDg2oCUcaGnMs7qUYCutuXPJGvLLzgTy5Nn4L63QgpW2XXAyr7Yn5RiXE",
  "key16": "dauQrUxohA7KBLNijsHoN8PZf9qSEN6M6NHNhDRnFfSDbFdx63GKZMK6P44VLh7fvWfCpVdwSfFUEn9TkDqyKTt",
  "key17": "j2wgebQKZwvfurdCc9dzsjmLytwMr2oXxpbLg3z8Byb7FxtP7rj9jWhYnXJ58EGyuH1SrCUEyqcXg8tRuDEDGGB",
  "key18": "cWq8CEFT8KfUARvpRp9aioHPWCzo9De33s6bzwgvbPzSkUVrFNBNx3cNgamvMjpChFGXpdaeZQ7R7Z3QubCFbrB",
  "key19": "2DSJyfstnMLrXo5RV4pvj7uSVcSfzDj3qrb5dZfA6tmWD9Qp3eyzmNqZKn9RTka5nKq6tJ2uExayxS1oXeiJrH2S",
  "key20": "3KEARTShRc3JJvX6myK8x62cSSrg7BJ6rvj2aNXab73JecPyJLcqfEjjtHAq2xfm1ZdksRYmdZSRWBRZKHgUCFhW",
  "key21": "3UdUp4LDVza3jkKKuqy8EESuZqLdAUxSAojp8ZeKn9Su9mEMQRaCjgy5jk17Cpk2Cc1ZAULoahyGGTyHWUVKMZcQ",
  "key22": "22B9UBrsMMtoriGiubek97zxP6N85iQ5WtWSJH2k1Hijj8pRx2J6C2ohxPiG8uSJqK3nGtPnBEJmh4wzLQ9K1wEY",
  "key23": "2Hi4B8SgmXfZaNd88D1wzEjg3MjjG2ZG6GpCiTJEkU1Pw1FvNEjjRCm54tw5yrx58z8695PqeJx6NxzPR5LNoiR7",
  "key24": "58QrVUz1RL8jtkjBmPH6uj4xgQ38SgPzXsgSfForriiwdzfigjsuhrUEKsbyyW9JZWdZC4VpqVHd9PgV4eRFa7Ni",
  "key25": "3ZywoNWMAh6vJNTrF6ULamUgMckFVzfvKVxLgp3RciPMVwEXeaLZkz7wdcyaig3fgWF3QEvj9xNzTeVeVt94eWda",
  "key26": "2oDh2TfWSyQDkgXLUHfgjDFmprYmxMic1m8LyhBhZtxqbME3Ah5UXHpbHkP3wXc71aRuAvxQZYUUY3yGbW5L3C2A",
  "key27": "5ZpvRbv7NeeaKpYgzhboHb4xMTjEDu68bjDf27ZAeT3Ks9AvCmZ6DGex4DmzijYYtEhJMX8HehJnqrAMCjLazxNv",
  "key28": "9CMDG6vD5sEsygybECMXe8ytuhT3AbTaU9pfqHV8ruV6Bs5tQNnzX79CjruM4m59R5HNK74eWt3Wmhqi7DY8ReL",
  "key29": "4FdpvAP3q49JiKEbwpRSaXGFcudwWVhEqFj94vBkS4xRRFAwb99UUsbzVohu6Zz72TXPiQzyiww56xWGrVLrPeKd",
  "key30": "N2ocjs3T3cAe8BJCoakKt5tq5c5pcA4UZsbiDMx3kmfg1aa3EvZBzpSC4BpvaW48iQVcnZompwoBSbNHYH6zRHu",
  "key31": "4NLcXUNAHhiBgqEqwv7QNEz8Qk7gNBXDAVKn5ufmxqQg11z8ZhTJPNvZxRgUAZJig8HpHxJYmNfK3ohRFv8wfRAz",
  "key32": "47Cqe4Z7BJCCyUWUNC58yyBPF7SxAjYyQfPaxZw2kbboUK2EsiwMYwohafy7Bii9eQyr9JkPcLqVj2VougJ7M8yQ",
  "key33": "2dW77wT2A2kVnVMBd9xRXnuPQQ51qG4Cf6REQ2nivpAdFmvNf6RriFZzRCLZVSTmwkv85ubqXNsY2t67jT8W2oSo",
  "key34": "4pQjbNvAvDDPrTpB7oCiSnJS2migBHzsmxNmijckPg3hpTeGcr4y8wZyMSJMw7XzNt8Xxnqx7EKTP4ocnnsu1kpX",
  "key35": "4VQKmAtBNjeovQdWDamR5BRmsKYnZkJej1ob2Ri1tdfd3sCibG5vMJa3AmZLMGLvfWmfNrjqPwjMiWa8wNTG5FF1",
  "key36": "hcpRhAYCyGUJKv9TQYDPYgRprEnJfv9Va1Py7SkGTN1pCzjhqNDaaHJBSrswjjesKkTGxrbCM9yqZymkmAFc4Fh",
  "key37": "2Vfg66WzEQ6726aDGczycT287gLAJSRS5qZ3pcEL6mYiXe5kxM514Ty26zoHr8DRyt7K5cdufBziTQcYWH4rSB1U"
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
