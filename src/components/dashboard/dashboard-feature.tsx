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
    "3MKZdEKeeRYD7qQGfgkSjS8HpiTh3VyaBr1JBoCFEyc2HnhUKvNZTBcS7FBppzMNgKk4sCDdvvbAj54jULYW4ymC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vEt8SHLwGkL98j1iTnATSNK5oSk41THMbYSYkFZxzQuDLdDp2HTQWdmXuSvPCJRKQX9JsxFoz7NGe9vA4FB8pFN",
  "key1": "25jnCG9W9yMxVXnCwBkNGkBBGHtS221oCtVvwEkSZyxa7oZzaGNsXfFA2zomUbBudqY3ad5ayoBZQHuvzJiEXX6G",
  "key2": "rYL6KiuLbKHGXaHXWW1TrHLchHBe4uyoeoGjJYCgy8WGEM3a6HVeqnHsbY52cwriTdmhdeTRyieyyeouyVC6xeC",
  "key3": "2sdwqCrhDXSUW92fLD9Re83jmZXPttqQRWHAuFVLzX8XfM6NQzb5d3W755L72oWXHJgqJ7f2sEZ5skPFqWsdzDFB",
  "key4": "4fNXXdf999UH8UL3pHd5S5owPNspQTuqDALVw5pqkgorvVcdoErkwmqh9WNLKrUPp4U9eYViRdgqnGJFhcLsGEgC",
  "key5": "2gjbaLtNHJDRFvyFV3R9vhKG6KRT4j5vYHvhsPXh1MjDSt5X2PmyNZV3xjJv7thYANvbZQTgWBRhSDi1mMapFhYc",
  "key6": "2TQZCrhUSnK7qbd81Lda6GbSFdNnQ4TicPAExScJD5bngds9bUSuTrr17D7ustgYqVs2Kc7KR8hUpH83dsSpiiPb",
  "key7": "2BYjRfjjq1YSXLxLSUx8T3ppD8LN4F7zHLKVjVtwfBXJuo6214zxwJzjodLqtwFA9TaUUr5SoEvNq5NhYMmBKjrG",
  "key8": "2Jp758GnUGJRYnf5FrapzVQaG9vsQyjXG9ZkYinNQmDKjahpMLvymGVAkCGsFnf3ckBGiFD8Rz9r775hgEEJRJZE",
  "key9": "4KmKukgy96rZiySxahmYCj2p1vAn4GzzWmR9byA7jQTFC5qeq5sD4ocV4qbhuBFFZC77p8J8bkcUwqRVnxrcMUoJ",
  "key10": "xhhpUK8gTcwGjhLKg6pvGBxwX9oT8RGcQw9pTfwpyeqgM6pEE76kZHMbTGqn4g862pobv4oT3AdAZcX5pEpeq5C",
  "key11": "fNDKha9PRuykkiajD1ZnDWwP82vxFGXyn6gsaM76WmaU8vDwRw53p7tvAvtPAbMzyfrWtqNoywdcv4fb6RRWvbN",
  "key12": "2NK5vU1LT9N7kLP8HdSNxTBokXjo3Fru1Q3mfeR1nea2t5Mn8rFqpaazqUhL4sBMwahU64dmUTNy5pixKPBdTyTo",
  "key13": "3Mp61r9x5x6rUPpBEtNCcZn1tT84y1JjSrPiWcW1t7oTktiQgwwC7WT3etK4fhTGTU8fKaoj1BKhfXkceqReEF8Z",
  "key14": "Lq8kVbf26zFTELxfNrTjRjiTu4dFG4eMBGGZYGNoDdd38jyrgD3dqf1K7n4rh2dKP92BMoVAHbrUcG2Cq1G9Z8T",
  "key15": "2zD3evctR4pT8Mk8Qd4BjLNGSUq1SrvU5bjEb7quNmxCU57woMG5cBdnaiLn5QXk9bCEnymbKe3C659A49qLWFMi",
  "key16": "3jGVjd2reGbBc2DuM4S15Us7h6mFgyENZTeUmHmjtHE5sqKYLLyvqiSWuzMNtFPUAojWdC3MQWsT8aUd653xVe5g",
  "key17": "62myXeZnXuzfv8AHXYbCEs9oP1mdurceTs5h4R2jGaGFaCnxL3bg2MszDVwLiwrukeuqk1iHB1AFxAgTzex3CEoj",
  "key18": "q7nUK7NAQfTHf5M4VQbvSQKm4EatiTDj9e5WBQAySF7VPRxcsuaxZLQVVizKrKVn2fFCuMxESaE6ZepnHAQni2Z",
  "key19": "5hpQ3Ac9YHUGb3M75szPDmoBnsei5EqqavQwWx5mtNKFKAjtwvAecquYWKioiv6K4h2UxLBtj3AS2whXLQ7oEGmB",
  "key20": "41ak1JKfQZNS17iEjtBZ62ioQp3z4BXCacA8fNGjmJD9GeyJgCmvYrsacUbj476H4mn48AtSvaqQALfc7LSs8JJ4",
  "key21": "65XtxYvc3DkYLptPSYk95BdZWpbTgeHGFKz8Mu2bzEZNPRXGrgsScyZoDfyPHJepTTNxNb6w7E7GtotH6mRXQRhG",
  "key22": "2fiH83VGwrj3BpFZcvwuTg8UYk9cS4htMJmbhSZNz98E1hRkDsToyifmk9guCsbeknVWsqcgN3sNmNWNWZsg1H4k",
  "key23": "3kFni8sRaAWSf5sqeDZopdMLkRsrHE71MM3LGZ8NHkmcs6o7qnjmTCWBjGTL5AARGUk1UXByJu83jB1ntdsULPiD",
  "key24": "43cLW5kq1RTc4Pg2QYG9PyB2Qx4qzF48u9tJZzV85MBnceJaqoLpqqhfMuPQBkAVFmncEDgUbMUA4Sa58ekjR8C7",
  "key25": "3Riz6gJoNQS2cbPbzQJZbskuYx2eE47ZWgBeVDLzqYF8bMSoqW436xfyXHp7jBN3iYAm8NuLPWQF5eKusergLQr5",
  "key26": "4cEUVM8BfaaXhoHYU7b298K9ntxwzuWLP2xWnShtptNbR57weQKdzhdk22EUtSqoyUwohPZtZ7HKa4cH9gqKsjat",
  "key27": "2cc89YUZMCyKcfaYyJ5738LxPvhQD6jmbYZuoMMVXJzg4E1Qvd4RTYQTzHZELXnaRo7zr1mMZkYynR6tMuzUp5G",
  "key28": "4BKWtRHiGzGyemstn3djAEZ4JpJW9bZwN56gMGF5jVZ4Tsa4L7ZXzyCGxUikmLpqhFQmCzzRQwpRyeNa1MTmBc3V",
  "key29": "3HCixh3xGPRpSrrFazY7uWqN4iuXgmrUZZ44PuqdvnWfYWr4uAZzs2EaotJtPpfVvK5EX7u4gq7CYFUjw6f5vaoJ",
  "key30": "7xJzitRv5FotiRcR22AJ97Z9sxLienEngXMD9WmfqoCeGmPmi27U62vaQi2tLuR9kDxpevn5LdVwp77h4Yxm66F",
  "key31": "493YF8wzQ6mxqzLd7dB1rwUoUbvKELb91FWUBzAzL1RGxi1bbN1hRRfK5mppiZ5XWKh34t4m4giy3fLNYtSBPw3U",
  "key32": "5WmBfd9UbHtp7bQP4WqZ1Sij5gvugDEDQMkeYRsLLrYm1ygnRkGo9ZJ5CokQta7e1WfyELPHFUqM9ZfeQX8DsRX3",
  "key33": "2nWEg66yB9sMgCF1SbVtBU9URpD6y8GrVSZTEhkqhPu6n6VbT9kw6oJqn66hFcYo1EwDiqAJPc3P1VX71mC2Dwrf",
  "key34": "5VeZXTKYzsEtNwQbRz9RECLSJMvgWDBbeHSSv9uho3ttpc6pWUQgqxHLnnE9C2kNP355kUBZjXSbjAWqaT72wLbT",
  "key35": "51Y9CBMeMzNNWL2CNGMLvVQqF6vR8fuEModbPAF5cyWSWFPmfpnUv34RHhyrAd5sHS6cta5mwbX4FqGPQqoeEbhk",
  "key36": "2wMrgJQSZm3JUp3e4uLGSJEzjRTm8afst6N5rssd3jujZ4iFBo8HfjmMBZDJBgJcoDviGytnRXbPfK7HSMXAe3wY",
  "key37": "4ngZGkyeDc1WkSLyGYikcHGXhgU62xwCgzbiYDG9QFqKmqVXEXTPhhyaWuiiqe63aJyMM5NQk4Q39aUFF2fbp4mV",
  "key38": "2PvfqexZRFGakHohYMpuCH6TqNptacxP2LARz8oyZheGYccUdrBejSo7dHcJsFnfFC7AP5DWucZFRWPDASTb55Mp"
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
