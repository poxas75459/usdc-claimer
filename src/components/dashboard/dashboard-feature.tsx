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
    "3tFcsxsr8W5tqkno8GhDqdt6jAdMbdhB4wpexDZvj92nRJthYDpZCSJ4BFMtFFEbU9h9kBj1VUnZ6rUzXPg67jbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JkqeFqMomRZPYSWUVbcdorfeghfGLCq53HaxWkjZStXUY6jGkiipi8HwiTNyWJ41mysiWWAJQG34LLnLBXzegr8",
  "key1": "Hbjsyj6yD91ngJpeHzwuTkBygaGvDCLLWJLDxi5uvryyrBAxc9E2crf5xKfGo1qoTs3ygyhMS1WwSEfDAzB94sk",
  "key2": "3se9Qd4NdkTKZJ4s6ZJNG57tZaYzuGA73SthYHbS5VpJ1FdvGGBqKBA3Y4WWLfeZ945y3GmRZE39hKmz5tcveuBi",
  "key3": "4AHNa5vuzXYD8gpfoTcEeJpjAWT6MHPyvJJBVv9rxnALJSiNwfDscZrrDb77R92X7DUGrK781pBVPnvhUMP4P1KK",
  "key4": "4LkTwuBGtx1ci8WLwVFwj6M7dV1zMsFXQ5upmrixJVW1XZV13YsLy4wqJBEiSFPZdQmXTR5G635MQDQQeLvgd2SP",
  "key5": "4L1guMTnGhH7S5YAzohpv7Gh8ZexrCFkFLraP3ZYw4fwTGUDgajbK6nTw5De8b8LjiXGJTmYHRLJ8f5wHs9i93Kc",
  "key6": "4xF2S9RMYX5UetQSikECBa14KfEjma1Qey1BZfw7bmz3MDknNEJVjLF9mZtxYZtHzBHCHe3paCpx23iPAK3Z4DAw",
  "key7": "gLXEN7ku76VWRy9i957UAtaVWWjDdm4gVMvztDtHhwMcw1Dughn6qJbUM2WhKLZuGNRTzWbXVL9o8PVkfsksRJ1",
  "key8": "TQMxKa8cwgeBd2E2Hc1PFcPG7BuTdtQmFBhSZ5i3AohB4z3iZj12rdUT7LMxNHB2HUx9ARV3upTkifRMd91g2SS",
  "key9": "2VNU2xoJQrueKMvb39zTFFp5gV5ZDpLtZJPc9HDAqPHx5Nkw2P8xtg8nYL6AdGYCd8bBcMidsaWbBzXF4jg2ox2P",
  "key10": "USzaQhWQQTwDNGrSdcX8hwFtSQPZzsGibaQdf2G8yy5zaSFET85fp66nSzCsnaQMW4tYG3U7cTgqRgCXzm3GKo2",
  "key11": "2nM663fjLXTZcujxMouYmBD8Gk28zMtxeNvNRwwrsosEw4ZySWYGaNcJoWJR3MRrdmuTvUSSL71nViNarqk42zaP",
  "key12": "EL2PgePkjTLoSXdQNanp9Jt7CZ9GvRQfRWx5PDze9XX33J3w3T5vUBQ4KDYDzpDZstgmLzpJ8qvf9fFoPaV8Uvo",
  "key13": "7XYDsrgFgE4ysGiqmuyS6ojijkmAC25KwCQZvW7DYo7gJcieWHCL26jqpsnX6ZKPYTtwc2eqr2qg8NUPpHUCNAd",
  "key14": "2fbQYQoqrvZN97AaG9pspxgAGHcVjPq1X32acfELpkUqt3sMAZGxBVHHT2SoZ4dQHo5K29DmmJNydgyDhBVZNN3X",
  "key15": "ttbuWNTZEAJcu3UHHurYQaJdX9hkA9GS378CSZEEWyR6JDfHxZz4soCUENw1Y1ZftQNErCC1o7TXmevPMvEAprf",
  "key16": "2x7SYsYozRbtivzeVNe3bGpBg8buisbA3HrWTWzKoKrsupnbHYtsetzdP4PNrKVRTCgQ1XYqteY5u6bxU1nCEtSP",
  "key17": "5NUtffTCToCkM6iHiAbYDqoiWimGrHvxVYPnuj8kCGBYWnb929iPGFkWhtsA1VEaLMq8j8G8WNh78PyEFMwoeAQf",
  "key18": "5e4m8Rn56epQM5hTnCJhhoxtn6SpLwD4ViJ7gxZ92N8QbwSqYkDvsCWvHKq8KJhsSEufuPwNLCFrdW5XKeHLSTJK",
  "key19": "i2vuXnC5zrVK5CpRNHnq9XymZ88k67HkL9Lp7qLa7DQSzqfXZ21jRKbbRrsQUoTja2Mj4HLTmSrtc8BfGpouAmh",
  "key20": "2EHo8QjdvWfWF67LxqGMvUaEPv2kUpZmunVms7sFtt6KrMVdHtYToYhoGPfBC8f1Ln18o1KTEsdXfXVxFMM1YLnK",
  "key21": "2WL5a1Cr4qb1VSGAKEj6tZsFvPE6pfK1pVqjCN9bnE2nFfEbvVVB4W5g1kCD3vbTAeLiWcQMEbLrx97FWFnDkCzh",
  "key22": "4bhVMrineZDVW4pcnr2FvkctP9zbgAjQGjgPvn76KGDkh6ZEd7fdo8kNxyf33gHUYnKQacRVEzcckd3S2h1S6CUM",
  "key23": "22HLU1zkqKXqYMHAyVhJo2LLbciPySP5GFv7dqNijius29PdtjpQwpDXWKcZmpKS5qt6CuUEkkE8WVLx48PWrQBS",
  "key24": "2rHaCK8zicFnh7S6FSEx8TFZDH1poWBeGvkmaMbH3oKbdfwxXzcioZ1kz9Fu2ZUVgqwW3a7aAphCdBqUx6kA3LHF",
  "key25": "4UirZdZZv5vyUHAP9iApMEyeERbHXA6mGtHxwBqViCNeV5FTmPwWVTdgUiQgYRwBZKeFaUpdXshx1j5Wik4pQmW8",
  "key26": "5sNSKAcNhMvEQzvDV3JXsJcXxzA1cfjxiFjLteNVHUjoM72vsDAP1MrNrtkqVC8frhbwvTfKDY2tpRWR3VvxsHRo",
  "key27": "2p912rwjirNzNVW9fGefWUWRfrBcGBYgkUPmiJGiySAnRSGW1uStrMPaxV1Zvkj5X6gXN1mS1Atv7FGG7RW5Ayt1",
  "key28": "3RpjGgAiu7CJwZRp3JmMpe1ppd1X3TGuXjJZyKczspmj59tNomdW7CmjhHoQX2GpbMi4ikzCJ1JtMQtkPgFESvzt",
  "key29": "5mcjZyfMAAwAZVwJomNZqKyF5stwPJDzLUYfkZr17M5PRdeaw7ywsMVDFBXyvL5AozWiWB7YHpCBaxUyYL6RsnYb",
  "key30": "3dn6xXoqb3Amhmum7bkvpohqBbP2M3ymsxvpMf26ywsadbrbkeLTjRUJxzyTmR5RJvcgpVJDLEyqu3P7W4R7cfus",
  "key31": "2A8ndcE3nnSxdQFzD44nb2mEr3uat211ad3t2HkKjeLz46jt6CXvwTq1r971rgeMSwqxGXroMXFNVd96oa1Ykeij",
  "key32": "2bWP1fgKrrWbGYnhGAxcXfmVHT4SikjeXrDX54zoMqfm2iRjBNYafSaLHqBtRQyhArm8ntT4a1JjQcT8KUNP9vLK",
  "key33": "pP1DPxrrVwpiRZhE4MM1vxqAzZerqbumNyrCzGmLhR6jbSGJSAzc456z88ovcDhjabHtRS36ut1Yv9QA75FQymr",
  "key34": "4VcXd5Rgy7vMXKyjLCo2xfMXxnRKnJ2pw54Hvzceejccp54Q5irMroJkgGUNSkn8XtnJbkMJ25q4Vqwy4639JWFZ",
  "key35": "5ZSdaAEcJTFHJa1tyP3BB7fpTm6wBMWMqUkSCwc2Hf22WHNMxpYrpzwC6WX8CQC8naXCr3MkwvR6W9MWXQ4Dnczc",
  "key36": "2fbphLrC8PYfLBHy7J5KLFpstoxnvqYQYVFJh1sycgSFQQPycEY8jZWhFumTyiYNQ4ysR6AHdfmqQtZChtU7U532",
  "key37": "4LHUsZpm7QYzfayT2KRXrQq9t7KvtDexXPn6vbymiRB7d5JF7kcHaRo3JSPTJNMg6eEbHhABexZCL3hKPnUs15bB",
  "key38": "nSZSNWN4qGyCnx32cYGEuSq4HLRZ2Yr5T3P12uaG8Tx5Ujr2ZbGBdBXqVrpWnHhvywxqyP5yBaDgUuzPwxp5ZwX",
  "key39": "2GCt3WpN27AGRfCWHG2eCWLri7zR7qx7gAC8CFi7agz4vgGh9jyepueSbSsn8bbBm9YyVrhPgv4eB23FJSDbTCKJ",
  "key40": "2TK8CgRRpW5SBgZMqoj7cmSk77zVtBTTnQKV8XAPpsMZjgsy4ThjrjN26oMtYdz98qkkodUKJc2Y1hnzCv4SkJ4d",
  "key41": "3B4W5wSgdodPKTBvjfKyP58FMEvnk4wSX6rDDAhZNmdyF1S1yNQEe5e9hsueqicyfpY9k1s4afF881QjcBLt4uo7",
  "key42": "2B1MzpSyXCYzfGAN9U5R5A13UX1aqEnRTGYSso3Wc3Z1ipUW92c4jU6NFzBZPYqKUFToJGkrDcqFAMxwxE87CPgv",
  "key43": "3k1Qxp4VBiNL3VqyznY4Q5xtaS9VUYEZVeVBqvA7d1RBdjEW4pBX8sTRT3NyhMijX7jLXW1UTpbQkBjcifx84PNm"
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
