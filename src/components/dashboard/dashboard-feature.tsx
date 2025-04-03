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
    "5Rcv75364ouC58RJCTFGGi4Qiuodo7r2KoiyL5c9Q8ey8p5axhWzFvXFfv2W3JR1cnzGm3EuepA5X5bvDTFcXBxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62arzeikF5SPAAxNWzGWTA4rN2wii4cXmEVx2YPuTMWHUNRtAdoNqidrbvTCxxZsyrbEWAMJgEj6tRH6df5Hs42o",
  "key1": "3UWQiwuc1A4JEiVwWkC87UjrA5adcXeRookCtuAkC3ehJTem6raYAqH8QvTXDtwT1GHhoEsMB4h8mu3CFKogA7gR",
  "key2": "5kFkomK6UNtqUovD7akeM4XopDx8JEf4YrMuUkPoznmVqRnP13eyjdY4TG6Y874A48jyahiPbAjnTR5nhoxvezAc",
  "key3": "3Zri79kQF5RVKjXKVAQBagc1NY8MwAPa4PBmUkKcnqpE14ab2kdmapuah6CAVGF77Hx9w8KLKqDFwW334t7DcJPj",
  "key4": "4jRCpACFZPcqSG5SjCpDhrjZqyWU9YTP8crURMzDmTmp6c1ASatbtuDtHKcYvKQ3HtyprtQuYRVtknHdj47VqeBC",
  "key5": "uPF59x6JiCEMfPETHdm73ufV7zGeeHL5Lay7WKmGxLSR9nVrgMudjmYHar6Ab4n8HKcwLjMFdczqrzgY3B5SrnG",
  "key6": "FYUjb7mTaYMXKon2NG8LTXeNTkBZMD2Qa1c9negUQUteU7KiWCkktktpnGBo8KTMwHcyGpLECFNcLBSaDB36cdV",
  "key7": "RJsLxo9vhLQJNBNaLyzYBTSimdX6FBiJF9Lwd9BLrr6WPoxHc7xADQ71oHFvBc26uz1iL7VHVap8rNa1sSAMRNx",
  "key8": "5n5sEUcRPwkppVHuG5fEjZpjkf9xRN9R2NZypNDiymw2n8wKA1QtuqG3nmEMa3rnSc3FU4VCwCHVrYmiHSoP66E6",
  "key9": "3XKwjSB4CmrDqjQBADs5BhJLTygJijkXwUDupU9DVR7XqAUuE3chEToPqnRuofmjGSMpbwa8w28ZD6NzXTJ3MvaZ",
  "key10": "i256pFxDVVYi3zWsXffHtP4MdGcMaKqcFoBi2bJtaigNJHjJQ4g9fyMH6JwqEiu1iFYBARad1JbYw1n3W2DJ61Q",
  "key11": "5DEz2iP4KNom8TaNWE9bCtfgTKUZueQhjpf9EWzawM5UngH2CaH1iegxjt1uBEMxApJ4HuYVFnx2ZHhddUAYJwvX",
  "key12": "1y4QaSdSHGAnwMevjhwVFAMctxnPHfLvM97Rj7vfHVkWv1XJQUmMT2rsknaRF2xA7Sgf9CxbmaFJMoKUPT4LuDN",
  "key13": "43sGcnYxGpAmgrbhaf8QkGCYiEcd3WGsNuuS9wCMeZ2ast3hZgXJMCg17hXcD45U4ssUvrVCQk9FmCZzedSnGMvC",
  "key14": "2pZoTdegW7wFBysfJQ2uFv6H9CuSvW7qxgAPtMCHoo5WSmRqnsTxqxqAAjxLcFVsfCmVqiRHQWzRYTzfoMszSW3V",
  "key15": "5jhsGcRG3cTm32UmnfH89sSNVZ9oXbMoFNk9f7FgJQrEFhYzuYVaGpWfDtXUMcnx4UAuuATtrwW11Hf1U4Yrpjvj",
  "key16": "4VS8YzhBPwqvYAWqcyxD3g277fq27nxm94gV2PiMmDa3YxG1dnsPeoK1Sb2t15Nwjz2bg8foNRJNbofHHTrerpZV",
  "key17": "3LtEeCLL5rKTPUtcfkNVgkseRKfiHG9o6QYoYx2YsEu9EtoYVmciGFjLiQjv2xUurWD1zMyiV1JWyPCVmFn4ga5e",
  "key18": "2nPhW1DSYyohPPDocVfR2ahkCJX8ukZ9X1zT5fHmcDzUwZeyrZuoHuVJzCUENwyeEMbEG8Y2nNvjX8Ez9S7r54M8",
  "key19": "qn5DPzQmHHmCW2XYVZe3TY3DfJh64YF3Au8np9a3BDSSPJ9Y34DfLfAw8DTLjUsxTbUxBg9XZw1YbQKKgyMtMJu",
  "key20": "4v7W4K3XjjvUR6qwfYMx3nth8m8WXSMCjiJuCSF9U3CbpoSbEE4xhjuWiCUjoJgiCmmXDTCnccKUvTFE2wyzkpoH",
  "key21": "4YAoHyHQPQj19gqvvt8JApAULMnQmhw8UQpUXR66Cnc8T9LFCQS7ztpooWAB3n793kyP4JW1CMzRkex3NsJpAw7z",
  "key22": "54vi12LyYWMmLZP9Lx1JmVzY8JjQc5exqfMs6mi8xsZyvFPEJZ8C6gJSQHAFrZwLA9CsAZsxJ5AnhbU551PWAXsA",
  "key23": "3gNxTCTSciN3gG3WLLA5JDeYi9Gzb4hWyknBFhRupc8fk5FDG9ngtUziGQwu9iALVfGjRGRdphnjPuhGg8pGnsXi",
  "key24": "4S1CbHAnxvTiH1CNZ5QH7Tr5FSuP9foGsoSNSQNMUkZA2x3GDJRRqR5n31AW1SBxGpoex1JLoCPVwj8bqoZmJq6o",
  "key25": "4z2S11GTXNjapdoRVPzR1FDhy1zMDpZdE4Zd6mhUEozLMYC44wk7BFtSqikJDabj17mWLSo3XgqUbEGZFL4BKGxk",
  "key26": "4fqSazzq7d9NTnUwuRTKZk8pN7LLZba7z4KYYJosskn9m671gnVtDeBcSXYne8hfSfSP6Y9Wa21nMqzFjuAJhNVN",
  "key27": "4E6GyjMKorKk1HvNWfcjEvtjCB7vKppoWMdoNUthBGQzchBM6EDk4tgZFbsmncXvev4fusMHrfoxbV9wuE2VYw7i",
  "key28": "41q9zVSBreRFcGB4ox3j28zZx7nBKDNDnLegjjQ8TQf4jzKdKDrHnULHHy33th8kG4E7dVSMsfZjrr2mZQstdBY7",
  "key29": "oxWd2XaJfDVfrhhwy44xMByRQ3bAan5yvm5iqzFeimZya2NKZEcz9xLXaAgYeYx8GaAYbK17Ro8nQQzjxxYqdrw",
  "key30": "3UEanQLwgxhZVBSV57zpAzRyX2S5mpzTCEMSZr9S3rvN7kJtwBkWzAbsBhDoPsA2S9XxhvVf274rgKLjQaGeqFvS",
  "key31": "LESckyFVHqQYM2xkwB36ELB617vDYmLVtDGC1tiWXgzqfNwwcaVr3CNPEN5CPVRaVBfgCybSkPyt3CT1ohVtYrS",
  "key32": "3W5esZYVYDU9AUitZowtEoQNzUa89Sg8c1WNCMCWiCa8NwWC1udGE5eeBqk5myGY1j7oyo5mrACRahR4ZexNHmgP",
  "key33": "66TUrabU8XUxcaBWPbXxZHjMHFbwzYsT64FUj8cnyZk1HY1PtGsxPo2RB5fThEAZk1nRnHpfvujPPUbF7iphTB3C",
  "key34": "5YUBvrfmVNdtsgSSNKAzJ9ruGKyTcphMwXRMH9MDvS8uSKr9HHzm4Mp3qqHrbt4Bse5FRg3hMQeSxK3ikzgFmWaJ",
  "key35": "5SUBdbeCoPhRxDtQpToMfqS19Hwd6K6VSMSQhogf6thUDfQ6nNP9sr9noaSyu2RwBGJnhPWMe9g94coVd3kjT9VR",
  "key36": "Vw53TsRnQJiG8yiGohiyKMSLpf3UPkAjVWT2M4opb2b5goq6FoVdc1UNARYmySuiYX6rXX9oDRM4tV5TwdtYd9p"
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
