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
    "5imW7UccxV7yMPkYCS1bvdGSdsYAZXZAEk8Ao4D1PnuF8Hg5UXbLXAQEdui9qURYefVgGpR67Sn5UBNoKFrVL4j5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vYHrZN62myPV1xMWQAcrXAwbQyWtem7nEbhHGPxspePi2ykpYC6NCdAGKaX2BUY4ScTMjUNE6giKnXcR384QE3Y",
  "key1": "4pE614hX8spyEaSpYDcUuvXK3Jd8zErPQkEgGrbM55gUWa27zTm1N87oBtDG3Kk6ui3dqVRi3XxUv7yzj4D6v6sS",
  "key2": "4xYYLbUQCfDyspNTk6N3k8otAB4u1orCFekHpPYfYwsYzLQeTxdBMi8a3zc1nPHm5TF9HNk5MZLt5t2W9Fuw1gTc",
  "key3": "3YZUFB4FXoFnsw6yMDuM32ZErQYpTQKTrcFEQmKdfQ7ckMPxs5gC5uTnV7k4PmAeJeiaVHtLKs2d59KsBGrNiiPB",
  "key4": "51PbAUnD13s1uaqfZ29NorisuNYd5YY3TsuaaVNigJJ2c83KxhZouxY8kYrzkynMCxqfFJWZzJoSz5uQHPUV81SK",
  "key5": "2rSqMe3DwMdT6PJrToFir9KZHu9V8Jw1FyhZvZDZ9Q4NrkCzYZ4fir3J78PKujvFSMjfcJsSYxV6kTE6rXUEkBEF",
  "key6": "56cjrrGs33ZAq6ngPhg2xjMc7Cd4LzMicuoax4iREHiQ4uQNRQrxr2TKYz3z1QpaYwVMqvgU7db4357vnjYWCVW4",
  "key7": "34saGaUzbBudSPSMp7GZnW8Tjxm7am82rtZJyiiNF1kHXaMgi2QtmZWozskg3BmbuwG9G6veXLe6TEuQurvTtxV5",
  "key8": "3ywCXcJY15tfxi1SSiKEtrMfpqaYmEu8YYLw98HvZWRG2b9uFvN5dHT8LLsC8UjvsPF5Gb8HXv7XWM6Aoyxb2R1o",
  "key9": "3LXWAH3VhpCt7CAYA45dRF2t4uV7WH2E3EtxXtHiJbNqusnyL9D6gXLc7hCpRy3envmVNBUErYZQFV3psm1i8VPL",
  "key10": "Gbowpisy6kGRvhX6DBmcRyq14bovC1YyHkvCMvn618FQAz3Q7XviP69FREeZZ49hr3a2xapD8kNThFzdr8MsN3w",
  "key11": "jS2cdiooottEQbgWXQBoZnriezKtYMeYp9FdhQwoGRxF5k8i9t9tveD94ry38xTqYX8N5mUarHkCv7bWuNjF9sb",
  "key12": "4L6MJ17jvQFBB7KKTJ478JWGyxJhe96nB3e1Z83tFtuYWp3vumTEw3PqqzaDVTP2k3DrsSBS8PHCv4EnwdwRAUbh",
  "key13": "GTr1TJ1q2wj2Nao2UV4kHg2tKgF1QdUGBFsqmhKX9uGYpMBgyfvCkD1faXJn5cHm2duPm5FAvZPrCerxhjvkLc7",
  "key14": "2qxuQD5AgGbd7LcyZA2bqbGR3cwoXe1yrwciXdj19hqGPefw5WnLd7HgVu3cZba31nFpjSXnjtQEMnTsMx2jd4RV",
  "key15": "4Q8p8njrVjWPPgc4yAWASSMSeR3aM34YmXdchGrHWDLjfPnBCX1C47LitGpw97abDG3xH4Mg9K9sjmK249Paw49P",
  "key16": "4znRaori5abzR1nLCR9ADrqcio5DGjzzBREDBQYwBQ2Mp5kef8zxSajwzRESREv6wjCDaQGcgtZjGH83gSwTUMUd",
  "key17": "zyZZmNqPFYy2o5CTjrbHRHJ62KQymk7CQtHyZ1YWPMid2NUBGoJXeatK8jowaxVE42C4mJMpPGgxRcfLnBusooL",
  "key18": "4fZwLydVNrqqSYw2w5q8uQ4zSYzxg7X18cxwYYmmizgEn2eMxVdBaaXDRzo62jw5hcvPH4BXW86ETP17sMn35HDx",
  "key19": "JtLvMgJAeHqZASeHvyWYy5HM5GAeouuVUKWNA6cqzmzEJ7mmor9uDZkGLvL2Z4XLpuM2ww3SbsMzh2QA19Q6MpV",
  "key20": "2tYYxK8cvvz9VuJsgM6mUyfXaLSQkE8odVY1HHHavAm1o8259ULU6WL133YCSxYJp1NfHmYcdmPjtuHcYEavZtJ9",
  "key21": "4VKYNS76zGzo4yqhsa6ir9Xn5z76Tjv5mrXLagDB26C5KwvmWH7P7Jp8G4qyys6M1t6bHd1qekbMqX1qGSTewJ7E",
  "key22": "pvyVZqQqXCthCUTDKqw5HBNWHyzwUwQhhkS3188BG5dVL8Lv5geXAaxXfjZd43VADTuRhH4R5ZGjTpt6EYV3YFy",
  "key23": "32dLHCx5a7oLqJcKqheHrADXTXDrGaWDTb74eWNBEsXr5URhUXhWUBAbxNiZKVTNRgXpsjcKGyHDBWWfTRdKgYVt",
  "key24": "3hRAwLczPjWWQUir8AoziMinMsyEBXZWfYi271xL5Y69qTxHJ7vBhWsSfZDeNR9b6bc1AKQacaKDYpnNR51VASZi",
  "key25": "7wxxizhNyvsX8HfutpzAFrrwk7vdVtyP7cb2aZqVdDpekSuSb8d9s3FQvfSpJNfcgaysrAqbK9h1DkYcjL5hi3P",
  "key26": "4Aiv1BdTBDw4uVcgiNYz4QsXCPjXAi8GwU443YGpuYbcU9Yr78mqhDh9gyA5YBm5EaiZ73tB7zbausn4VSSPVWUb",
  "key27": "3V5emebNDhX2hsYUrsjYLK6ZJTaWwdj9Nj81TnrWg52KfeKrPq6ZEoZqEfKZcTwYiQTgzFwEkyw5xMXGCLhveozQ",
  "key28": "4AfVtKY5ef3NJeXsATMqR2nv6SY6yknrA6bbiKjgYtzdYNd4ykzm1PwVWR6aYpiRRpKr19kuVeckbDg1WEennryS",
  "key29": "4y7P81YTtB1pKKpoSMk8pckmDd1B41EcXh7XqtBn7p32NFnLenbGzUHRZ5JPMQBQeEe8Jep2GoKun5v3xuF6LQ4q"
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
