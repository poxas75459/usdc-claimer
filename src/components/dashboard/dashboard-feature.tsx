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
    "4V6jyZqo4o7mY6nKtiTYhoSNut1FzR8RG49YJjCWErEiw1LfvWqtaJRBdHDjqH4qEj7rniA4xPjBXDoqeSYQVf51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FdrkqeMR7FTFhjgMpRRs4an52ghJqEmvutc3wrzwKHpFmL4q6sTYXyWBojvQXfdcoSGt8s3DyZCc5myyVgeAQNE",
  "key1": "25p9DjGz6Gtn26hauPKKVTgLi3JM84apsiruQTWpeaVuf3jbNN1we6XuzpMkxP5sPBZDcXUGmEzTvmFkyk7UJ1MS",
  "key2": "4wmMMgipZ2ktk1e4CMvE9Z1pqwHHLzgqR6uxoY784zgnbj9GmZ7joHRJ3p99PVeKugytaKa8Tx7LoskyAzmvNgRJ",
  "key3": "3Hat1kMrSxXn3RDCRY8ASqP5p167WyNeo2Xgo68TyGMdyTddS8Ne8aKimcJWBHnxRpaM97WqXUGnCdc4HMFa5JWk",
  "key4": "2zxeZPE7CQA1i15VS2nmZeHucMbUDJyTJj6yEvJthJqL7pgJhgkJxp8PcrDVRrVfKtLWKASXsa5n47L1kuvdSf2L",
  "key5": "6wAAftF7Ljfw9xUKa3F9Rxpfw9kWskPZT6WHiqXwBMXP17SJUf9U8vKMiZ9vMbzDkCfAkixDZbQp3azCYpfNqxv",
  "key6": "5JFLTVRuDD9XunL3aPkgqe3fZj9uVCz9VnCp7DckYXSxc4nx9c5cxf9Biaa7U9aeeEPnpS68DKmNTbxszXjVST8j",
  "key7": "QJ1oLxEGBvuiyLEu3g3n5qCx1X2HTt5NvwAGF3j6jPJVacb5uKDRuvSyUBTAuHMux7XT9XzYeBv4rpSsA3oQUqq",
  "key8": "5yDbW9owKhgevZhfpYEpPp6jC9JxdB9AfxcxLGo8uVozpanU2ZrAp64WbYi8FWzC3W9peBDKnJhwyVjF3rbHjzz7",
  "key9": "QX5m6vc994Uuf2w1VYsEiKyKSEog1jVAvHHsvBJ9zSqmHL7J3APgvdGX6pUHFNAM4xbxbc2AU1HWHjfuB2u23ND",
  "key10": "jJKu7zNCHyuta3e1RJfJEgqqLnYAFsTGMDavXvdAS7HyYjGbrCS8SkZPaS2Tx85XrA768V8ZGbjykGUxjrbAiSu",
  "key11": "dcTyxugxtgma3A8mAm2z66fNL7C8kQncGtsCXX98kX5BYFAtv6VGW5yFogKM8FiatvgQ3pybKEcjHAX3ZZg2Pwg",
  "key12": "3pw924Zu3XrpyqVKaDxmsjUALz1VCcSpJKjeT9ZNtPdnryTNcgy37iXuw6QtGzqPfNFVs6SkXMyJMgmmFmGv3N1Y",
  "key13": "3ptQQzUbf1KgK2rLAB7K3V8CzBgE2CPxF38BUJWZPhRjRQP7K3tBjqZvftuzfKmBX8RCmCjuUpjZixyYGRKYqyDK",
  "key14": "3szySMJq1g7bQHBAZScDCgQMWJY7kngLNAwmAhxsU8c4GAJxCTR7o9HpQiMrLGSn7xXQSgd3Cav5XXqAxXdCDnMg",
  "key15": "3aF6Rs9hx4BQihUn1rkEjgjav699p7YnZR51Gay6awcco5zMFnjjXmJp4qEszP5W4tpZE2PWAxeENd1VbM8FzJe9",
  "key16": "252P4S2e1Ko1Am3gRPQsF8VoHkRNmRTxdgiPvnBJxJrTtJ8p8x8vH4P9m2Fo8FruaJQ4TwsqQ1BNoYojMnDQnNEL",
  "key17": "5LDuTALmEuLY9Z3D18EJsp4CGUHdTG1NxAwjZePZbqiriWURoViir8uRn7vnYaZ5KACKookHiNS6BTtd3q8pt9Xw",
  "key18": "3TYHQRKG5eQeV9HLkBjG2KtCMSLEkSBuHVnn9RB6CvQy5Rq8UZSN7ZKtNCKxBx5BzNCkuM3hMkXdcbCgQc921JxT",
  "key19": "21vhUNLS2WwYys2hRB7fxeRnujCGkY8w5gn9WshuyBaftVKbLhBcFZ9Pr1bMJSDZY5VDhPUXh5CHrmRpvbTfRPZg",
  "key20": "3CbDxUq2yaU6vsVEzZbTcCS6AmZNSA1NXCX55EvnnjZm18TDCbkgdKKeHBjAfUtwCw7FQx651fDPRCmZLU3PxZKf",
  "key21": "3ubhxLf8Rx4kgPJqkiLHGrYiDfJpQA3HBfXetbsr2doj2Qf4mPt9QgbuUT1BGUdAT8PV8s4hthHYBPnHS9MWQ7QR",
  "key22": "4Y633QhduS2eAyWNHTLm8rZ3oC52k3gnHzYVZEFrurZ5Hr63bcnXynZXjqh2wwT9tye4bT1a5QFjyvawNt5xwFzx",
  "key23": "3QyHiCxZkLfeNwbGSaonopDKEVNXY4HqLqdgvVqfYH38Lcm3nkS5qTf7sxzj8mihmSzytxoPd1PqXeEb6TYkYTQU",
  "key24": "4GNw4Azn6A8iCXuAzj7WCRW2E9ZqBZmWfRwpzcfyPhSZrfNMJuEcTAipgfLaACuXHhngBEFkFeTinobbBBvVEj3E",
  "key25": "4TgbLrX1dQzjHkf2fy56bd2hgfrP7x9wq7MxVnoHQYRXhp84Nsp8BPA6FKnuHxWuoUoU7PFDHPsSabvcbhGERrV5",
  "key26": "4JC3qSPQrSaHW7rw8TW1hwKQYcmdUKP74RTP45xgx7VFkwoQfJC1sFaNmN6ZX36u14AuaBnqbQmSv6DzQBsw2kxw",
  "key27": "62rR8XZhqQosWjNMdoLK4Rsv2gXUymriB4F1m6J8ZPNJ3mqMktLUo48jKPK6xjpt2MUPsLNM6Fh6YprxfsNRFTz4",
  "key28": "u8w3r2B7v3b6HBNVpYfc9rbkSjEW6XJThj8v8NqqrXrsGGkEsWevNx1ybMKPbAxN6vyW91hEfpk17xSgU3GtpZN",
  "key29": "4H9LPzaKT5Np64Y4MYv5mzBYT9YCo7FrjNFMKD7eAGEZdfmWYeSbR6zd1nL6FLxaghSuFvt49KjjN7DeTDQGyqoC",
  "key30": "3RrvPwwU3cnGkWkv4pFoCjt7DRQha8XTYqrSaZAtJmwPoYVdCzauwgWmWrGbp77SpLy6z9Tyq7PtKp7UYbGsRzcr",
  "key31": "4SLQWA9QvpeVMo44EXRfx243w5tFrPjNxrVyFDnaBjD9FZtHhrqHX8gPc96fEEntWV8oh6RhD6riCVrXqySapieW",
  "key32": "2oUp2rwHVRUjidW6vyE9P7SmyVLZtkS1SUUB9kwXSAzQG6zjTywYV3VFV9ZHHMCi92hGGtg6EL3mgAogDZDYr4z5",
  "key33": "5vzbLJ2aUL3hUjqbYwFxYmgVz2PBiwUfEuD92yUPHBUSvcm8v254sE2FvZd2DxjyuLet9bSUz82VVrropm9ZJVm3",
  "key34": "4iyJ6ViMdw2CC8gRtiYWcVuebHXZVbaqp5Vm72VmhuMWHn2vWRo3Q24pdFGf969fuwchgNSCr3UX9KRwBLbcyCZB",
  "key35": "EsGsgzEdTEwHCnXLiUJDtd9Rs118ruYL91vgYDVqtL9uJUhn6YAjp1BXL26mQZM7Mi5MLjiNdpxRQwGfWARvrGY",
  "key36": "5GcxmD3DDT1nEcomYP9sjbNn7GUdgLEJgQG9ssVk64K6eXsSWdddV9c1f6nHmiExrxR29y6TisGdFjuPAJneh4Qf",
  "key37": "4xwypSoCHfv8Mf3ptc6P71L7BvzoE2UQUkTmdP9zJNK5WkR1UdQmkvvUeYRvAT8X53oMUiAWSfn6hRBzpoy2mTaf",
  "key38": "vDYmuqgpK2Np8RF5ox2Pw7w2peFoDAq7eAfH1nurXpLUjCnurSr9YVxKtT1mWc5b6nywFWJnmfqU5QMRgJGcC2K",
  "key39": "3wCb5vHHFxCQe8HSXjza92YA9p5txNBK6yTPCtKG9SK1QmSMXMhNDx7rQW1XzXgGgiQYikPZ2fxvCHVc4m86Kw5c",
  "key40": "5i9y9NjyQWkG4vBMSBqW8WJ8ttRTfWtDHEcG7o237GAaAKyfcB1EFbSkxN5xW7hanerAosN6nZxoaPxCM9RmmKdR"
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
