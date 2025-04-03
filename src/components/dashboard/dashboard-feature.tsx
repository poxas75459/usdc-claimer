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
    "66khieqfdR8i8gqFB6qGqgGbdh281Em8Kuu65wBQhgZ69nmXuCYERnuP1VBFqyzdRVdUksQCJYmuoGm5t1WQY71y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55zPqnkEEgrBwK4s3HXkpgJGoKuiEnmgQR58oLeMoXDdWqrfvPCAKurFvZoL6oSoePUgpCuibQTMvbNjqr8y4xxr",
  "key1": "4mJR4BkVKWpzY1nruPhST3P2HjAkYLuNkZKhfPd34R1C9fgGr7sX98iTT7Ye1zZFR36GSqpF1FERXcrQnFET6NbA",
  "key2": "TbbzpxfmKkqqJWNFiJpxmJGUuT9PNdekXT9jtuYZSGovH5qdKAmRW6FKwd7oLvZVHMebjWoo9QPpxhSVpuKhJPX",
  "key3": "2QrB7DMQBAHz8TeNKMcQCLXLDtcP5YXUNbA4r7cXc6gWPJJj6GjKvuLzfvWENEdszGunUR9cccNDWcBgt7AMjDpL",
  "key4": "3r6FuN1iTW5k8tV6b8hvvp9i3TjefR7S7y6MUVs3xS1QQdHhNF3CaBNuY7kAauHE2GU3rtxXcWgf6kZHxEnNerKn",
  "key5": "5J4USNhV87GvzkKA8wa2NRggdxQitQP6Yzovrft7EYUGjeP6f4J8FBe5t14A4ty6uWwiwhp9ZeqYEJxwwULvRYZu",
  "key6": "4BFKSPw2fZ5aZ49RwfReHSK4mk8YigEzmArNwLoyJKKSjdNLqSDiGoT2rcRL2Xahy94r2cdN6EQneNWUGJ68mfQE",
  "key7": "3swKGoTQeg38NWkfaJY7ZjkKkuS8txU8kspMPti3g31T4X9aQgu1K3EUV9JewMCtad47V2exEjsY3HizK8a5uDx4",
  "key8": "3QTwLarqvZMiKW1fwGWDeLg7gG226T6jVPMGeoHQJoDugRDr84PwfwLcgh5cCyLp3uUJedAaJ1Jpu3HcdiPzgKCP",
  "key9": "4os3uHEGxoyRQDP5wQwBJKmPXotxekWvjwhReFCNzymR2pjujE1uZv8f9TyiWq9JgaKvZGkukDw5bRmMCWG4YbAV",
  "key10": "55EP5gv1zxX75hYbDztfGEV2iwYLLubtCnSkb8rPWXZXdboSbLyJu4rsgzCABEeE8MRMUiUkfHyLfmpB4RMLCHTT",
  "key11": "3awikTHYb3xMRjdzycH3HRcAxxZKZo1gFMmTyUQydvooeJh6Z6B4miKGCkUfyDX8DVfrzE3SV1Gcs9LRcgR6qW3j",
  "key12": "43S86gaTTbwjBRfdrKm5D1VNhpwBpTrjPP7TtfdNGTBKeowLn1sQcAR6aBXhVZqtvaxwtpVRwiCvjHvdXy8Jvuow",
  "key13": "6YbgMdgNsD71cNq2XJwBoAZ12nCURNuGz2uHmPzaNqaYRSo8aAVT8JLF7viDZEHBGL4HSjQy4BAiXsLQjiJMV9b",
  "key14": "2sjQT4Q1WKeHVp4q4L7kDXQRWMgZNfSVbEdgQAd8c4NEbY5kNnCTfEwsdx8BLbi2mdYtts19sWTNYtcCJjBqvehm",
  "key15": "35HtZtfV1FVr1r4GJgvfWKkXqVqf6KzdQVUUNRrYrE1XvNSMQnt9RubsS7cd138rdQ7Yq363FVMhNMd1RFz21QSN",
  "key16": "Q7YgVMCDa9uGHjM5A1tgsMeYdWLtvJsCS2oV7skms96vECo293KkFhfbAaQwANn2cJqRPgi4u5iwvFNP9xfjEdQ",
  "key17": "GTAvwYkuJFRoe9nJDuWqX1csfHgbVP6XDswJwSPJRR9UYmX7vjgSbMxSU7vc6CpH1UapHxJGN19yJsQ8xPNSifq",
  "key18": "YStMWEjUwVM9imepoa1HjYw8pnB8MtBJKuqHDS98o7HjubX2Ki1UAkqqRuHYXAn1bZkNBFwfvMQhmF9X3vBEZ15",
  "key19": "2Z5885kAJtHtBQM2rSioiDwfWJRUojoY5KJ2yMBNvj2mcRp9pN14e8MKGhajnUXSBwqqWbVwjLJmCwjbDoHJAx19",
  "key20": "56g5bMcZam3di4eiB1NY7G1iaBonFw2Tz4QbipaaPfPha2PDVdS6Qf7GZiJ61awen6tYkBnLWbrDcbSD6uYDDoB1",
  "key21": "4fRCfmav9J8uRMBN1se7kpo4cc914K78ATds1Kimyn7iCEkJif7doRzSheZp7QG9K53hZqq5XziBQS1bgZjNz8PJ",
  "key22": "4UgCreQJaBXUYD2RQPe7faFTyDs4LFGxXJfriamgvngmW2ZnS9YkXqCqJhtaanZujUfHiDtz2bKHP9NNGryWkCEp",
  "key23": "4WQTNVy2yaZYqHg3XwwVzh88x4s3nNaMziPUM9hSdLwVZsagvXcC2pSwxWHdAfvm8rStWDE8WkMUE4qa8Xww95NE",
  "key24": "4D54frmxt3UgfM8WJZYX2WoD4wyniz5fK3avedG2cMjdmYSfi1R9Uhw5vfcjzL6TTFGfUpRi2H1xLcbh2CbdSSXe",
  "key25": "55r3NMpj3tdahBD6nivVeLbmF3cPgDjnhznkv9o8FRrTf3rFgkGTtjaF5ogL7Q9gDxkcPZ3CMz8KuWmPaYevH6cu",
  "key26": "3akuoCtPs3PJ3xW1FwfTsWWMiPmU65KaXobyVtMcohzifrZ4bAQwUsoe5sRhqYBVbhkagrX3cYsLptuAKyDYA5zB",
  "key27": "4X3N3zBZUDow7Ruwyj3yhFkULYEKVMRXrc189T2MyVFH8mPJJRQZay4egzUwYSvdjyoA7iZeweRfkRPXh51hoJFE",
  "key28": "C2y6QiNkt2zKZyuRdVjuQajvFx7e6AHuubYXeMsgggpPWNPNj45UVeFMR4QyaiB2a7tPYUmqo9i2217vPcvi7QH",
  "key29": "4ejK6o96wvvh7HGKudMd4zVTqB7fg8STZocJ7eKBKybaJQRNo9RwKtjuzptsdUxh9wTLcxMkBZQVVJRDw168Tkj4",
  "key30": "BaFm9ovNPxj99WVPeYgPZepHJho3eUVPT9BB1WTYJnDYV9Ff3FxPZbhiH4Xcb6tquQsHWzh7pCa8pDYnDobVvNz",
  "key31": "GiyS5rVS2t8N1s2V9bzvUJw71pgvo39ApnrPjMTNs9ouT2k9cYyH4eWzzLi24RjzsWTWysu7HLBpXTM8rSoaox3",
  "key32": "5tqoUwufBhBdGMX6qaRkLaZLUg9wpy8ycyBVY2StKoGJesxFBKGCkpYwELvpkpWx6g9qJ4VXnshXGjzhSjeASWmW",
  "key33": "5mCM4kSYzUdUtnA6iickPCrkdC9XK4o3w2rLWQkzhsqwS3L5WSfHgRscqahQUDzbDHdRzPR2CR4oXDTJrsKqoueg",
  "key34": "DZFQm7JXKpgnunzk58qTF7iykmJoWpUfZUpSrurxt5VJBgoiMyhZi9QLgLQDtSqeQev42Lijg3mvmj87vE6VBfu",
  "key35": "2kfYSHAuNf1fzup8REBiKsVpKQdWYVRc3o9wcSaALjnxUa5MSGBptsmTktbLSwzYrjXJS1TfCf4FXZ73KkKiMmie",
  "key36": "5BLzXqdxmDuPneRJvx9sWonVfrk9n9oyBMbAZhMJseTxzLVVuLvkfXNCFM1dT3DD7XRbZu4rbrjqgTbZqa5Av4fA",
  "key37": "5WuF6RtwhcGhzNFd14v7cnDnXqGFPMm66ULR1hXZKYMnienniPCdwbdthTcSsyh6q9LGq9Pqo8xtP5fu6G57D982",
  "key38": "b9CpjLqjMcLMSz7uzkZLCuJMx2eAWTj5VEzTpojjqCrJDsYEppQZUbByCHnDJw4aUpFi1xN6wftk6Li6XnqsVM5",
  "key39": "dybXKef6kkSuWe2HonooaHgT5CdehDB9CLRE3ZQfoiZNvqr1CGUGUPuHePaC8ccfzMDzs58YZ3EWDisV8aVBF1u",
  "key40": "2nXj9YaKqf7ZpLNx9QaReqsXtpQJ6GKojp5M3qCet2Ck8bk77Ew9jbfGRaEbMCTEyemJy3GycsiwwdFKosAanKAL",
  "key41": "4mPUcvkwGHtLywKGJy3fyGH4Brpq1CQ7Av8hzxCMB17H1xDNu6uBWL5eB1iHGbJJ4dDz2XztBCfBZJAvfii8THKS",
  "key42": "5xHAa9yYGKdPPcUw9avKsNPGHts8NG1xyFRoxo15rsdotNrxDJK8ggAS65VoPBZQx1HsgA15GG8JkwxpYhzPCG2Z",
  "key43": "4d3en6BpdFyGtyY9yo33GhqBnw1sKEMewLxfU8h1BBAtTEkjZQ16ApuRr4C9XWC8QChMmxFHsbfNKoP8arkQY73q",
  "key44": "3JvSF5ScrvaFrGg7yo812KfwZW4qHrjtbD4SsTVDF6ANudfFDpusvR7Pum2SVwPMkMZHB6vN5s1XrnBgssTEwsYN",
  "key45": "yyiQS5isdWA7wnpBLm1Z2VpHktqueQWLjMmuqugYVDPiC3jmwyaXk146iqiyaZGJPXt9KNxxQQyoJ8CJXdjQESp",
  "key46": "62Aizwziyc8ep1y6Nrtdg4eeUAH44JELs7cmMn21FWKgqiEUdFwU7Qhuh5PqkZdVJzVUvWbRqG1wee8HHA3Y25a4",
  "key47": "vr15HntTcvsTCKsEsEgSp4Vy32AgW8Vz6TQ8qBCGyac5b9RSX39H7p8TDHigKF1ayHeewU1SecMDjV1ztWPXUdt"
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
