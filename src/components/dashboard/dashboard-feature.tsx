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
    "Wjf9QoUsLAK479YamPstMsBBsJ8XV5egDMG5iZEjft3naVU9icezLCPjddSr54J4LzKpKPmo6sifvswHmJdQwqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GWW2CfYuKTYPs4BszeYbT5hWcE7TKB9JQJ5wJ5tbpRQBuFGNZSLmRaPu9zmBapo38Xp9eGyP9Pak8DTiF96SPsp",
  "key1": "3f8EsdBL5Rj4anbQWeoxyytdbDXKGARfsaKmvqUE9X6t39Zc5qaZYb9h2bxetRYx8VZnR2oipsqkWLRof6vaxy4p",
  "key2": "5vcjiTWB88pMMGL2nezsmhncPCZqrFogNfwpc7cbNqqaEgDsoKdpQfcoFKQFH2ZokjREcjnmnsZZzQQEuoJMxzHQ",
  "key3": "2BTt69St8daMUxTyeC9YgCKkLt2UwBX3wmZym764Tajg1rNJqPzN7frE3ehbKELN8RYxwSpaWpeJp6gHmuGVPz3F",
  "key4": "3NYEmfcKEQivp9zAnd3MagJwZoLmfMHo75gfqT7LUTnFdyXHpRTJgL2Pggu3wYpSQPQ3aS2Kos4tiyNCqgVuVfk3",
  "key5": "27guKUtTDwQM5bdSL6A11eYv6YfdMe4Mjtp3zp8YFQnH771bD3RNpqGL7kE1WGkPyUG8f9ondTfvuqdmuHFgNm22",
  "key6": "22Wiug3Qh1NR8gGgT7A73jspoWohyQ1ZNXXKaPqdv6NpduduWwh54h4NUsFt6y2J4dTL9699YzyDeEcMHGLN9Eaa",
  "key7": "2n8hrJAZErdYVZN6TsqPikExbWmetMt5JEZ7jg5wGcTXpTAz61rbT87vyt6414n2K3HUurzZnCpzbzB3ENhM3VEb",
  "key8": "2zEM8E9qH6Xu9kQD9gCvMUC1KWQRuhGvgWAgxXtVBc6WPvAge5LMbNGxuDQDjYtEe7Y4FbWF87Emc8k1QHMKgsuR",
  "key9": "5hikxkixyh57t3cAhqHyW3ASuvRHxg7Fe22LKFActD3obdx76yzUoAA8tmmo3dnikaykYwTK1gw7Pi98diVoGQiX",
  "key10": "3nqRbZcfWXZ14y3RAKd1bCAhXCLeJFkA2rWmRNwBbus3heHxgF9YXZgKPgxdgS5H4GNjqdABwcf7YmnGiEiUzKeg",
  "key11": "5eZryziVxAjwvFThut3PgYZF3Ns6VLxNpC1eb7P9kBDNZRXqZftuySP1eWxGg7A5y6NYQAg69imMd2zqXQ1mBKW2",
  "key12": "2QjcYBUwucpCa4tgxyLtGZMj1Ppr24ag3U9vCvyjvEUfh6b9kBn3FC4vQWkQc6q1aXoc6zBP3DLEBkuWkbwZGyVV",
  "key13": "4s7uQEkPw24pQ8aWL9XqPQnHQ1XkyoWzHza5u5ZD3QbrWfNZLrzxTEkVJ4mx5amfxvtHvcDpQEx2m45o47DBKYDL",
  "key14": "29UeiRL4qiwxqSU4LTdrc6FVVc9YKjY1sVGudkBqxXtn2SDNpwAxGrEX6yaDLrUpkurfPRNSgon1qMyU5D32qCuS",
  "key15": "jwQF8ot4NuNwnSWPNq3FhZTHHVZMKcUush9y33mCRBaanpcJnikgHLHCrLWzyWvrmrjsR8ZHjzXyCfZ8AmP7b9o",
  "key16": "5bkHPHC5jKVivoGUDK1NqeDaegJrVLmob5WCcYQAdqSNxR542CqmZsyFb4SJLeWWG5Ar7zcyHMjgVo7iZGLUqkbY",
  "key17": "2MnRZLUrq8Q11MumrMswLsdFsTMdXN7Ubp19g9TTfEhjJFQtGw6CdTNQKxPKK446V7mqqAr4kfZ2XN5JAQ4PVfCQ",
  "key18": "fbAqR7SJfxoD7h48f6HuCxEnAHbzmLqB3dHMgNbVL6S7UeT1BPPt6RCapyUavyXVDEckDsbfBsoK1sS6M1wXbsK",
  "key19": "4WcecNPoxZkCekjy4gefWQ3nfRDe6bG7S6XGq9nREVzEvtq2W3oZpRmGtpmBu9G54d8h7Le2RCFyBGsheudsGwmd",
  "key20": "3MjefvnWScaKJt4QUgpLkXJVJPNfaJreX7wqCWJCrCocuXMwqYua8P4CGCNKwRGigjM3Q47FEwMkBptz2pBGEY9j",
  "key21": "2Yf9hvA87q7htRw4yjBBVLzQpFc1udjMBhGREdb5QBHA1aoHDyL8mjDeEXt1kvKx4NnFdVYwQsRNsCzxZcE5hnca",
  "key22": "3jhFpSo2XJcS6hhkMmuQnMTku8ppEyYC5XVfP1rf2q4mtru6z9weejDBkrCzuS1mL3wsNmzG7V5xQrESky8reomB",
  "key23": "WA2SRnpXxXjETLLBYbSmscDpFx7dJxAtsKP3goBEx9S5TbHBi1Cd7QfRJ1aMbQNW8v5QXtEkzb7NPCAFgCocAjf",
  "key24": "3ncPAtMY2auWVtbXUYaeDeTC6r3aXNj8P7SbKjPuQx6aGD37gp9KTQEyQjk5TieEvoM6rWc8TcStFmEhw6pSbdF8",
  "key25": "335yLX2JeDDpwaq1rC1NfjL9NwX54GpXZf7n9DA7TtXfShoL33pTjoeaP3bWUqzHDEwjBBcYRzDxMMcnT7RvdFNh",
  "key26": "4kn8hz7Ubyj2b1VvyUoVBKUFFsiXsBGJ5EDA9xe8v5QaRKo5VfPQY1T5aNqCsX6vw8YXR5hCybnkQQB2YjcHz2Aq",
  "key27": "5ipV9dGhctXKTXh9Ha8LRhe11LXCpM5hjXRb5fnK1FGrsmpH6A3DkRbWCGxAbkpK1677KSaQsXX1bJh337MkdXDT",
  "key28": "3hNrKBZySwoabps715noxzKu11WqQMR7B2h2FoK9EpauFDEttL7dHxQEmWJdwn8dNSufx5hqiXtoFbc5ZeFTjZ2x",
  "key29": "ssqUvZbJyDeSL6RddBhGJmzt1tsW7by56psBkEdReRzgVdahCLdih9qfDPQ6KkiaSWnrxduf5GYJtGo8NgvgbeA",
  "key30": "34Aq3SHu2mFvcxJe2T2GDaXc53vpLedSLbC9R6HWayJHuuKMQpRVzFsPo1wwjDVb7UjJhM7SgRMfdQhV9C561oA",
  "key31": "EPK3PgwtKCSaJCELvB9Stx3jeJhwXKQwjMSNp7n9ZxdFMRqLRnpJwnAQK8EnxCL3KZFW3JwgW2hCxqy9sLUCEAP",
  "key32": "M5a7A7wG6BhfDYYwufvCXPituheMCd48VyAVko5CEv5GWi5UeAxK2HbRdVPfzL6bsZdcuTBQk5mViDodrt78Do7",
  "key33": "2SB2AAKvwKEGqxHUVpXuzudDoScsBbK5AREBX8JzRnqmAMVuZbQeegPcTadz7uSxuuRkpV2cs7214L2DdjbZVPWs",
  "key34": "2kMXD4VkzHXmi6T8ysmw8mb3JXzHN6uRh5iCrbFH5m4QL2Vv2KRXiCe8geyPXNWc8aepjZDtvePKNpfVKj5KfirE",
  "key35": "59BxSxtxxnwdH9zoMyvpzsTJ1KcwAPAivNpkfHW6L3HQdrnbxRy7iLxW1L1VsGakzYG3J6CiyXqxgv9P27kZpdb6",
  "key36": "3hq4htMyirgPY461BbqRkaPKFLCGByvBEWuEBG9uP8Aeo2cxbU1TMLJPmSREvgwt99CPTyXqBbwxN5MArXxjvMLJ",
  "key37": "3k3R5cQEDKGzsxnLPfffqp2cEa44f8bhb1xw5nKzzAEQ1CaBsGZztTm8fGhAbLgsgTaw7rqfw9qYh4vwm7YN1vvf",
  "key38": "3KASAfsS8Tp9HewkTSCJfLEbFvGEc8aiqEUXDSUKbyMPRfWYn95Emgov4iXixbRFH6gdEZLkCb3KrGQzeMfSY4DA",
  "key39": "3SKJnRAjQoxWaq8796A4yAPpvaCd7GxYtApatrDubNk7i97HLD3WnV4YsZZmTbndbm3Mekg6EpRDF586ckLGz9U",
  "key40": "3AmgihgsBg4eWMG1LwKaZpBdFdMbDR9aPBzcryEYKPG6FxAqodfZNwhVFVFbycaMq4NZRjEmeFeCaTxzS2gvdSuh"
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
