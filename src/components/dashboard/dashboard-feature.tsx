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
    "45qX9LobEirxe7UTeYFb8usqxix49gBPWfQZd2cEjYmiQVoSqgLjLqYMCqmr17D88BG4uPd6i63K9nhCr2rbkFfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59oyXjesbyg6m92CU3PshTfpxqQEptqsjZ91v8raaqW86bF2q2VKPnSTXXKCp5cbpva7ioqPTZzk42ERpxGLMsCy",
  "key1": "5Jp32q5krryQVrNSAa4cKoJX1TLZNKJrroCfBRVwDub2m1CqibJMdBV3aQScX1k2jhNf8UWEtAp4ioGmpUC5yRCx",
  "key2": "2PJrVVn98rftSTARCr88kEz3FsJUM66A8UTXtqMx3paBZJGKhdrUJChK2ZFk2rzQzcvdo4SPWKZVa24daezLCmV8",
  "key3": "5JDzPDr65X32pfQutaDqmHEz6fgcfCLWGQGUUtZykuhABBPHMeUcExbt4ctvHkuPbFwX8TZN4w5NEuZfKHixTEai",
  "key4": "5xfT9M5wnmescjP6Mmr7tf3rFCdMvUH6M15WL1AS2opY1DdaU9YHZUvAfsiS9nZNJE7MQ9DMNpvWY4nCsam8Bttx",
  "key5": "2Gp5drPAg9FDx7UFFj5YRKSLjjjSrzAK2nukNJSuS5YZokaiiqh56oCwa4e3KgQpH63otso9Qhy8XngJHooJBVUo",
  "key6": "3tRdiVWspP2mTBJH9F9MjnVVJxTxh5NKpLQ342vgx5j9XEQmowpQJhaffTjm7UvhY7XrYZCV7JaAMzMt1iWdKsbH",
  "key7": "2NA5Muk5UuFzYquRfN87qUgGPUmEZjga7LAH62MVGYVY32qNsHeJQpTdPbY8mz16bgFuPvLvgB73EBggR3vS9nRc",
  "key8": "2uZcQeegLi6m81fq8TFZhYtjGMkzSTbLQfnWiLLxVSCnkqpi8wpGu1CkDPU52DN795wUZeiva6rBjaCLSkG1g5F6",
  "key9": "22WTLpAwaAGnoUGDX5ByeSAVjMbdXmmDKYzSdTk4GefsyfxMkpVFjD5dWJTK5iQCNGGHC365SyNz8WGWKMtJe3Mi",
  "key10": "5nnK93FjgSUVz4fWrFg7dzkyXa6JsudDKrXhutdbKkk31di6FHwMQTzaEz9jyuz5Ezs8bxaBbNEcVqYR5sVV131r",
  "key11": "XwwbbUeReYciU9yFdF5btef2YqzKyGgde3AbP5gVaxYb83SRuU2xjLMByryKLM3LSKRM22PiEbivT1zeP2e9Kj8",
  "key12": "4YCvrmD8s9EdKBCX1Y3CxxANyw41Zy8QgJdV2Ud4hbhVbmqBmLBoP8WfFwCvVBwTy3bR11H7ZmJsERF3V9i8B7Vf",
  "key13": "4ZM3MbAEzsBNo5cS7nWcjdHQG981rrBR9NuEjv5wHtTfy5Z4SRsrKrVPLGcviJthVK457E7mUuk45zVfXvCCvA7F",
  "key14": "4wUQHnBiw22AkZnmefuV7T1hd7vtdgiEyLfqzkUSMLZuUXLdx3YujzQpaF7ug5hmawhs4jKSeb9MbqyxECbDpaVG",
  "key15": "4WJ5q1rnHWv2unFWyhzK91SDfCpyWCv9Ezg917m2LHNtE5NyQMDRYokwVQQ4gkrZuFP99U3KYpEhzjDRsbrjhcQD",
  "key16": "51hbEt6cq1THsJN9UviAD36j8o9iKwPsLGi4E3ymQm1Q2yLDxQfBtRABUpmgcpUBhwGS8Htc3BTc6NcxPXAmAur5",
  "key17": "4Z4UMHijGizE4rB4CteLSUxaWTNUSW2vETh2jw1eVo5Ca174vtjFxyTKrL2tgMR2Er5jPoHepNgHLdsPeNMVJQ4a",
  "key18": "2QaRGro7ofkskkkchqB4Jyx5EapEnCHhJjCGjwjRTFS62Qw9ookEAGmfoZAyWQTbR9BJkEmEjrbkPwdZeFLA4ksr",
  "key19": "6w4DGHS1PxU1U78gJQRx54eEHGCmM6BSVTH9WEMuoev5vLtEcZ15xZiMjK6C8a7oM8nNHXM6LszUZg8PnywFVpU",
  "key20": "2hDvf2ER6dkDoQtKg9c9bQkz1YocGPLJQHgqd8nNTER8sfcqfbJGjjyV4LG36K7duxXi2iFTqd4RjweoRHevfpqM",
  "key21": "KtFnckSAMCAE5uASo3QE6Qa67t5hJevaLhKzKmhKmyjHJbAW4kariTASgCkGo4KBoE71vw7VgAueKhfovCHdf6A",
  "key22": "2XXDtc4dng335UnkUVkWRKD2wMDYZ2NAcyn95Khz5iqQvH6PQVMkUQWHPBYzmDRqkLzdti377tkaYjxNgGuodHuR",
  "key23": "4AUBgwfx9oP3Bc4n7gLfzXh9X6xSxsmLBjpMd1QhCXDRxt9yYjUpGvgSHpEBm2EDmdoUYEb89M6TUx66F331P49A",
  "key24": "5ApBkLpBieyv87y9xw8tr7w1HmqSjxWnFHmLrcjhHwQYYVF5ZXTc6WNfGGjWD9xkRhwRD4H68nbT6b8vg3KzDYWo",
  "key25": "4exa3UMEu1E5WwEhkF9xBfKyx945hZf5RYwM52hkkvrdpfGdHrq2rdUX1xp7qRwWGNf7pZBw8xQ4foau7BaPo57c",
  "key26": "5FM3UFBzurkx1JYmiwacHFZorHQgiXUmNqRj6N6sUuNgFywVLdK7skJsuvF18tHwuh9TYs6vbX8fK833nUrz8YcV",
  "key27": "668GXmYTAjzEryeeBXwu6k1U2s1UPV8kXCVBgfv2a2Xru79Ahd3ZukKA78xj6QaVzxGXR1gUfk5Go48qxFRPdAtz",
  "key28": "2Nw2Lp8taqViMRiXk3AVQNdRDGRphD2eHKGbVbonmSppgEKSxn4p8UHNr3FZANBAJmKtpfxMhswzGVRTLjmYXSrG",
  "key29": "2QCRQJPcYw8ApAsKcP19Z7mByFkkkePeUmrV5xaSBp416ohQRUN9TSCfGmVyesLKoor6ZDtkHbCA9xW8KSKcbjBw",
  "key30": "2j4nMQaAM9cMLCCk7X6ZVhm7vYWpwLPRFrPoXnrTA7tfrZp1TSxxnneR3CTQWr9iv9KuiJbjC4DK3XiQ2saEH6iZ",
  "key31": "3WLmBUBrUVHdSNTDkXaeG5cnAFh8GLGFVAqMLgzUQeiUoFSNM7UssN1K3iqSBBrxVhcdLW3Ncq3X6YWkY45sZNnE",
  "key32": "pCF2NDPwLH7LRxjkJgXqjBBK41MfhzVDCqfe1htJFMj1vk7go3jDWMXFTwGzpMm3vjuLRRHtYcbH12bRW7H3izg",
  "key33": "7p8pB6JyuwD8nkZiEqMPu2LCMd41kuUfrd38MyZH2GyXHYn6f5KUoXZ7yxV4z6DYS3BZQShy4TLaDnKqD5Wfoc9",
  "key34": "4ngVNaSZhv1Nw7a3zpZ5AugnJPbwpQFX5hwkXaAGnYUs546m73jsgxWbf5HdppbY9psqXB7yTjG51rjMhtcssCnZ",
  "key35": "41tRdqQ1fjJWJmEmwLuUZ5mGVgZGAQV8hbCJ4CkJmKyVKTRziyYQQCQBMmGbkh6wxWju3BL2Mgjgi6z3q1KcEr4B",
  "key36": "2tvZqgoV2nqRfB74TTCfsH8mfg1E6UGuk3JESnH5HNNTim9tnbBUVpWUhytpop7SNPrZzosvVr6g9iMgHmHi5g3A"
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
