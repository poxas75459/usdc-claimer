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
    "5eZEj29YEnQgi31VYdD7BrB441XoeLHP4rjqc35o1ZtHDPFhWW4bnAvcPfdvNfPC76TXrCKMiQ6WiHoCyfqFCoRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vvc3JU87kNM6nEXrVMtp2ZdjfY99SQ32aFziSavnHFCAVe82N6ykZkUWm5eG9uTR6dycxy3rvJ4BP4UJVc2hvH8",
  "key1": "1eyqgSVxRkQkAsDSsbSXLAiQ9GiSU3HeKRENZ4LQo5UwovQfUdgEMSLhS5kiSoqNheTGdaNBU8Pa81JrAoK4S8x",
  "key2": "5NRjSdHquED12rLwFuYmM176n9mZYWXBWeuA1izZmuRKtrN91nuQGjE4st3TdoRiD2dJTQrVQ6VFu6ZmSijoBfcj",
  "key3": "4vyzfwDqp62h5yTf26XAm1LawonCvUQ9HahcbZBUFfRGdgrJCdZWWXA17noezZoz88jDjffdXSoDNeXW6zZ5SJyr",
  "key4": "2MJ7ZcSUDtjzT5YESjt6rYzRLvtnyvLcN5yRz1CKG9E1knrrDYr2iTpwCZTJs1pwhraHJC5dPPTzFPw4SrEZ8RqQ",
  "key5": "4A5UNrxxjunH7tuwpQpG4188VEwEQwxpWTqCbedaLPopQLVkrcSjQEdrVuFM1BcDNwgP3Ry6NBoJ7v5EKHcbE6bR",
  "key6": "2d7STjpEnrKHttTjqnad9T84nsqF98AvgxRTSen5AM8zbZ28g4JovbzAcmiEgzFL6ABC8S14SiMxkYvKMy4x8WES",
  "key7": "4d7gcmJWfYxM2TrsSjdQuqoRFu5555t6SJasCMZo3YGtwfqzVMe2y3gRjqMtayxBhHfEzFmpxcxfg9grTuWTu56U",
  "key8": "3ex4UkeM2n4m2fwNbRtVwD3hGHHG3CgwivN8SiNF7A5g4wjYEARHRro2CcHPVaB187A3E38mLy7jn9bkNykdZbLG",
  "key9": "4xWqahS25PBEELEiipM2odch4sKcrLmM5QBdJcu3BXkMjupCT79EyahbEBAo5xncee6Kx4fssAjiFN8sM8cQpMtV",
  "key10": "8DEsM4WvRkxrvHK1TssBHfKzLqwWg9YoUji1XPKqwFrc8wn3Tf8UdFDoGffdf89sEsckcbEEHdEz5VPSUKG8NVB",
  "key11": "2Ev2CtqMo7mt4bbbysLhrZkaHba2SoeaC1q2XTYGGQEHFJaWKp8P6wgPf4xCre1psjb7ri8cBP6at3rVDH1VyQ3h",
  "key12": "39zYAzfY6XKMVT3cjfuk4ViEuRYHtq74SajVrGxM6AkkDUkHzmto3sFj3tVjqMtsqyndi9UVv2MP3JTQfELRDEwB",
  "key13": "3bcXPBjkA7xHBhYfZSP2iwvT7HyF5ZjQFHFKMX2KhonLs8XsbehANe9RjkDhZTPN3SiMXFGBRd43fCVUt9WYxKTh",
  "key14": "3kB2Tien6wJUbg7vqBuJ82RyqUGH1oJAgVGY9Fwtc1uwjDJdGDNzeK1VcXijTiSL6UARjx1XcMjqNsdFjBmTTLze",
  "key15": "4Pmb3up1T2bFmUDPK8ZgiX2TKRXbZhHMKTn8tWLFaLMtpZCidfnoB49M2VhrLBF1hJMUTpYYRjSuwWgH6bi79Do4",
  "key16": "5Yej1HBjfNrZrqZqUJMJxgqvxtCF1tXwZS7jW9oFcZkt3Zzx56oX8gwrwAWxaNX99bspih3CPrwQQkceTzGy9BE9",
  "key17": "3BN7zxuiS9GxBrFKahPqHzDq63nfg3whPCnx8thnmuwaNu5ieLK9Lj5cGWqKAhCphWosT4KdGGoKeqsh8fkGrVzM",
  "key18": "sgATDCTxoiRWU2ZAxEanonRasqRQj2KwxNqZJG4N2SDBQAfXEwLA67XU1HJrFnJ6dnmgaSgs8kFeBLdycFDqXo6",
  "key19": "2kU7xQvtxJufJ9noPWkrXnrWTCGSWDuRf2RnmTmGguS5EX7PPjH4zeXDdev9MmHs6KRfqQHY8V1aV4kGHAP7Mg52",
  "key20": "2qktVV5k5DbC1m6kd8rNZY3HpPPVKCX4n3ea11Sy6oUiUScKBF7HCc1BczJR1u9Y9BXpKCiXbweUHogubqyX4sE4",
  "key21": "2RGszzd8SEb3P2hVrdr5bnz8XzSdTFghJZmyKf4rUANKoHzBUJFsz8DpvM4PKiD5FDPSkxsfaZRW1vrxUqF1ue3F",
  "key22": "4YmNGRxN5DpP928ryorddqKdcHtNwREnsRqFUQBYNeXQcwMy3BKF4wTiEv7xJb3vcTc2PvoizT6VMSiN5YMiUK7L",
  "key23": "5zPZaHjmB28W85uXzZedSJgHk82NtEEGXP1tB7w5wDvv2p5RN2s6xoWikhxyaTcp9Gqrwe14ousPsLa64mZsChLJ",
  "key24": "27phrMaxcKVWfH3JjDf4k4Ca91jVuR7Ja59emRXoUn6JvxVBFxsoTEotU4Tt9vQt8SyAB8hNhJFXGefmG4BwiwsA",
  "key25": "4TdZYmWFLpaXsZtY5tCmjw4eULG5q8GZCkiqp5vMhGXog2fcsGF3ZFwpMkgau3s2X5U7q4zEzj2zdWH12Qzb7Q6Y",
  "key26": "2xi2MqEmrNKEz9prnzSGSBX6kYTo5BQytAAW9aaqNycNsKBccUzAdSDS46zfaiyQGzijF5B9J1RmgKfRbZRpV1PR",
  "key27": "3HZWpbJD9Q51MXxXN6guaSx3a7Chbs8mAKDvDhY4a5qAQtb3m8YSx7DRCeg5q4FLu5z5CnqtrPB417PjMrFgMKen",
  "key28": "5kmuFkHLhPKrk7gV7t3xhKYtzQQNstcEoBVaZcT6P9sdpBS59B8q7t1QeekkRJVqXh942ounjEadYWT8NdMQ5bRj",
  "key29": "Gk46jjP14EbtzWFMRSe1tZCvoBVH17euf6mHbQYt3jZWZfBk9JRM1E81XY91ew8bpvJFQVVgnGw6AnFDGx5jPwi",
  "key30": "29HbQKgj2qnSuuXPYW9n3qMrnY8pFeVFYDLzXNvLJwWhQxKQycLAoS9pB6LQGoc1h4RzYKoByJfZSyZPuJevh7MG",
  "key31": "QtyfyWUdf2hqcH8pP7dWbnTFXoXVVvQhjqFi2zwyLaDMTL2EpGowMCtQipT6PCYk68GRhq3wSUBf1uYNCV2RQwD"
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
