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
    "44sH99RXtAz1pS9SpS1zZsm1ekj9RmdcRpd666YVoHVpufF2gJ9Xt3y4YaGzKRrstGwdUYLyu85DBv7nWT2U72cT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HHNDo53T3tdDrsusyFunfHNuvkwG5qjEka3PqCXtSeY94jdp18KCiVDeb4Jy6pkb34ZJS7UWn1fiTr6a5ckoyS4",
  "key1": "232qrDiCUsRVyQzNmoRphdcnxMJgVDA7vMWURPD2dV95ecs6wTMKGpUEf48THGN7H3fQxf12iWmYqAso1tybAMv8",
  "key2": "52368TQ3LxhVs4f5iA1ya1UuQxddQCB1zkKeznb3Ga1irfMdsqiKi8aydZRu3V8UYJbjvtBtAqyZvW8MfQZWA8hq",
  "key3": "56ADPQ9Mxd5CgZDoaAd4DK2ydugZuM1hoTemEJqLyqA1npeK3HBopWAAQF4Dq121bxkG3X3tGmxLX84zZUbG4M47",
  "key4": "4Q8dy5drxw2FpxFpYkS4t3iSXRKqjvxJ2W6NSHgu5uCGb6pSRnVbAhwHGQTDC89ZWKEqLkLLFc1Dt3gKFTzT4DYR",
  "key5": "5Egx2ybhbYWn313t7kAkYF4VgmE6LUyqLbgeYX7RbAqpf2JNkbMS1fqoaek3wFGNXP5qR6WAEm1fKfZCZJA42ttY",
  "key6": "4iCjRiKq16ppaGwH5x2B46vt8L7XLJab3MPaMNuEnFUeAN32QA7ziiFBVzH7YZvSLnc3ydhXB1N7WP7cnd4pPH2x",
  "key7": "3cuHxgJ2q38L7W28TYDcU3P61RmZzH9NZgaUah3EejruUEVz1vKpgQ6DrrJTwufxWWF2AMVxVhJdPp6NGin2MtUo",
  "key8": "518JfpCpVMs9MQtCLdu4XLg54SNyiv4SCQ8JoPA19p2abhsFUfPNqb8EEFGn2CkCRtEjqaSyLCGpAvRyw1xkZEJw",
  "key9": "WWJr1EevyoMDRWRox9wWFRnmE2Es2ncp9iTCAfsPBxrRMmQMM6NuGfwVnqKNN2Ne3BWTn2o3YToSATw257isv5G",
  "key10": "zs5LDzTbttnWJ8ybDDzLUgwiYYE8s3h4zoPHmyd1LsUjjtYRxiG9uo1kdpthHsXitp7hNQaSK5uDGwXjY9ay37m",
  "key11": "2SdLcqAhmP4MTQfHzjmw2oM4wcpq7HrHUfYyi2vXYSCDLGb6LbQBKZjLo8jWqeHmvVUjiALyubeYwdwWuoTRWwVV",
  "key12": "22o5SLfLG7AQf8HQcz42bzsy25mudLXmpZz5aABP5bussKNySCUF7KZmkrRzYx4tHCgNLqEuDvTEvW4na4zhjNEb",
  "key13": "3Ym5JRFRdQADoJHMforEeG7q9X8RMiKRyAcq8S8Pfsa3c34SxaBc3ezuCwD7vzqpVC3baQQPKQxuQFSW1z4Qs5xG",
  "key14": "3xBgMii7PK7bGudq8X7iwAAVkDpby7Ka8RYnNG84Pfg5SRvfZbxMc39AXyW37fYb29Rfe6vHpJ1ebyRBfTnGbSbA",
  "key15": "4jzgekM2Hu4LXRBFioLc3nvE5TQ3RXCkVDkZGJskRgoLpZYEgP7B8H1hLYoPKtA55P38g7M8SB1nGdBg5EJCVBAU",
  "key16": "NMU7yN3tzPNU2aAfHMkUh6Pc5ugCHQLznFQps3a9Ck4Uj2EoqFj5YmytvQhJg6JwQTRkgHD8EgDEF4kkqhpeABR",
  "key17": "4attWEi5nSNLm5SbKVmb5Cxar35bUMPuR5Anm1LykjUZmR7VxD8jHKJQYQS3rzqxHaWcAywB78sc6vW5C2TPeWX",
  "key18": "2od1PgjmxDQbFJu3Dg7doFV7JuZ3tgeUU8DeZ9R1aj4myYjfb8oVGL5a5D5LFLJRjbfwAmBzSL3HixBsYhTRUR7z",
  "key19": "44R8JhMHwFHrCZt7CLiq3HLnp65qRhec4BEcdGywXqHAFC7aDK1aJxyRsuaGMaaGDEcEiBSef6jumK3HiBf7FiJs",
  "key20": "24vVDYjXrssJ23ie5NdMz7fJ7mg2JLLNjcig3vUmwuAUJDXwGc44Fe1CPTt358J5BoxyjiM5VSURqtuHYy5UsK7b",
  "key21": "4Wr3CCotLwaV7V6VckbSWZ8MK247d4tFmgHDn26DXE633v1qnCZwEjkgtppdNkFZbKScRT8SP2nzYJcSHUmXGPJP",
  "key22": "3fdW4xwbLWq8VjaxMuT9fguYgwhHayVLVbRqEoBRkHZdEhRowB43PNBE9DeB8aokRPuVkPZT5y1TL5w6h7pLZ5J1",
  "key23": "3HJ9ybeKbXPHJ3YYrGX2ZDStjmpFXwFMrmjv46CeFMrkc4nhLmgAMXjusTVx4hBUr2a3o7ivURc5yApuo3SFqq7U",
  "key24": "3BcGKymPtcE57tHdQPEgNncVbksUgYgMryzHWvTxvfE4ssJPmStypjvsphy6kM18CAk98kNsxDVFJap1RUS1dwvi",
  "key25": "59PhmZruEBzPehS3fFYaVirv5c94XV95UmhXBYGst4KX6RRez9udM8AmyQXjyW6zrbcVqdR1F5BV32Wfj7XoKf6V",
  "key26": "5xoKRPVez3RxxRHzvdVHvBTcYb4E65Ev7R2PGbnjizUyGMJUi8cUxydspPuHR9q91X34qZYMhpQbmVAzcCDaHgKC",
  "key27": "x352KRX6bPxpmkn1dEmuXY6YMUUxgTVkKc1zjeRJR69BQ12ZQkWLpKVN6RGz7E7RgGgxmhxtiUVDHtBp8V8jW31",
  "key28": "4ke1erLedcT9Kaq1QkTYHyuo2Aw5cDCrNy8JZA9ZQULiBfQaC63epsyrCYSu2szCtLD4QwM1vdk9BucQM59FqBfX",
  "key29": "2iDyA44kbpCA9xFs9CZQ7nGGQ1PE9rfB479LPdKw7jfRFzyng5exeNp7hY4Kq3PNdrE6cy3cbzSHbxJ6aM8UPFjs",
  "key30": "43E5KuUqJqjFjVpcN2LgzdKKt8tJ8hEfxvFfqxf3C1ERWBrG2Kz8YehBadAw2U8RPHsg3j9QwD6J4G3WWDRZLga2",
  "key31": "49uiLY9UA1xyu1D52a4j9s8DUDUFYQX1ba8o2ACRxXEG8ZRehfZePoy5CJ6asCeRka7QJmQEhx9RcP5DV43GdbJu",
  "key32": "36REswzELrbroCWRMg5P3ar6KH8dvGxu9bdT7WLZmTy8Bq4KxU6Q4yHbwAqCEd61nGw5nKPcU6hF3MHHjMtrZmYb",
  "key33": "21kAzfT8EAwKsJhciDfpwTg2cYDGfxvy8jqAZ6kA6esVNZrU52Xz7XeiX7TxTRkg6zWeEpuavqPUQoqz34RuUWUd",
  "key34": "DkVwLVc67Ytx6fcPyt7PhbyFK1kjeV2weqcwv1SKrAjUhZV4gRCrSvAe6e5RPwmZ7SDUVpwkbeBRgQ8obPX7hF4",
  "key35": "4BeLgwfpxEqiR8ooJnYK4fbEi5MoLfpPuL4Nzb1DckBuBUEhYN42yMJeaeD8Myq99YWAwdygg9NGCyKFo9KubmRh",
  "key36": "3NLWXoTq4T2HRoEaXmRVjW2ULUJ2j1C6Xxj4gtNUKyW3Hy23JonfHgm3DF3VPMyz2foTy3WAr4KZCzFsmEeZc9ug",
  "key37": "bNQpQfvwSJWp3XnN6NaSTumLjsxFS5R1AptTNyt5QAuBicfRQ1cucyBR7BQUGJ3xJa8Ri1WSo7uv4HGVndS6kXA",
  "key38": "a91g8XowqG7JS7u8fGzrMarPiz4hzjAoDedhBSi1KY5B2jBz1JVtJN1DH7ufKWHFS7J1mM1yNwJV3GV6etERMT3"
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
