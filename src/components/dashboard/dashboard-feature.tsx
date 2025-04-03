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
    "3MeQADr2XJc453qvkFPraZ4JDv7C91TzkYgH6YAzDGUgYAH48yXhbFCBjXpJ5JAfZ281pgF6zFBZkPLm9ZzNJtXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fhgGVCyj9RFh8GLKDC1sDcdWHC6H917tVd8u8nvFNnWs6r3vm8K1GpdKFvCquF85Tz2NwKHgR3YQbwyVa9HrjjK",
  "key1": "2TaSS52phEdjzu28cWmScrZbwMDgmc9cVqTqE1dzmfaZoxwmfNF4Vj9wkyBZPB1PPpMweAS2PmaKhwU4S4cfiZJj",
  "key2": "ukTTF7SEYjTMuGWivn6trpWmG4Wepq3aTwemEc6KfPgGHEh79wRK9umcEWwwjYHk1837QgkfeG1aoKCruWEmJ3V",
  "key3": "5hsXthf8xMcGXiwt4EqRXSiqKLJHECvBuKqDTSNeM1ubF46abH4m8m7S4pSnc4Nfxhn3CAPkH1vcLk6JByALdR8G",
  "key4": "U66TgiiQXQPfnPoKeuK7ZJsck3rid8yR2yvGRrAXThtpVN31whuPKXsWQipysSzt68NH6ApJXDUrPmbmofgxGQj",
  "key5": "3AqXn8WMRWL7LJZep7NB8e7yv4qbMjGF7ygKMPfa64UxvDqo6XG6uob2sK1oUjbZpXVL2fhDaPqkPGbKJ8S19iJy",
  "key6": "4LhtfGDEmZuR9zekDHUNaRAanwPMxj1q5Yd4VfqYbYAW2abTzAYeEeBEG4XMEcGX45WoTMDJqsDzUwUCoyBpVig4",
  "key7": "H3CQofMuVxKkH1CXQFEvgoM6EJNzP9GRLusqV7TX5eK2UEgiijac8bJoyczX2fpjd4qgWk98DjFcdEtSrL9RwuN",
  "key8": "45JK274cFuWLGL3uCgFJQ5gGWhk3idWz3KUozujhXvL7vD1ekbd278e96ZsHGvJhcWpdgfqmgDmXzRY8cwaXANPE",
  "key9": "4CVD4ru2v1Cxnss5SK7WfZrJeCePhX2y9rKD13YbKM77qiRDmX2cDiDnxmj2oW3o22ZUGZHbEwfkHztamM7biamQ",
  "key10": "JVQ7mDjfT5X53KJAasnKyYs4M6vnCMfjNhC3L6fdQJM6zoTxraAwLzLwJXUs9rwWkaV9BruARviC2EH6Dv3N4kG",
  "key11": "4znAKkpDYtqyp2ojE6zBH8jMGKftXY1ZdPNcZ1qE1uoexE6Fhjq9BWWravqakLdY6KsdYo592Q6BnH8dmickR1xR",
  "key12": "4nYcsDCwQr3ZwAvn48i9TvDHH6B5o9ZvkS3Uz22dADMzkkiT5jZ3CNwtcNL41LYZMVrEpFSGbKd4hzaitCZJAjAq",
  "key13": "5AyWyrxAzvTEJQKkDpJRA2BxUdPNbPCAzRK4PJprdUMUFM4xJpptKrEbKM99uH2LJT7io76YUPv9b79ErSnjKtT9",
  "key14": "nVwB4ptPq6w66BoS2mJWK8wATwHcn2SLJhuRXVGPmBSUhVZn41emLpjnMJvVfuCRAFvs37LNzKzgmUX9VKLWggp",
  "key15": "7tFyiL6GBSvEHs1fz8WV5CGfzaeTx6N4Xxp4gRtxREHMsVpGsnMJU78bscASetQ7gJ8MgajpGQyAK7QM2HdqMRt",
  "key16": "TVetYF3YCxZhHfgSNkHi9LgHijrS4VXag4PoFddTNC3wuqcK3bJzmwmqw4h1jwh87UERdvAHNBtiApw1rWSqr3g",
  "key17": "2yaoWMu4yceSxEhRT2hHeybgvD9RFYEX6X6PoAKbqRQ3FesRQdGixThuedNcqhDkwpEn5u6XVJgLP388Uyc1gUhr",
  "key18": "YmWGBngsxMwrjTnsC7MBa3A9FK6UaaSa9jGzJ7dhHDw5FMwBReBdDQDsHH3HgABFWQ4sKb633iFJHAeXDQbgnwb",
  "key19": "4xRnr5h1Y3b5DUFzMyLtspRi1tJ64bDqJnZHQyinUP35wDRHs5hKnHVXX2QNs7qZULUuf3VsX8HvdJtuWZErm6fc",
  "key20": "BfeWsvw44pkrfj2G5WxxiEVj4Qn4wV2uTASm9zM52PUHyeJEdJbZM5U2t8jLkkXX65aBiqBUSfJv5oKWLxX9HKo",
  "key21": "L7LWtcWjKosCv4DRMAizCjDKVN2FPNPJFKiq3Gv4oH1a3awWtEf34kx1oiehvo4gUJoRm4nNK4HxTV7uXmDx3Lb",
  "key22": "WQ7DrqkedBKVuoZha8hTYTjhtPPzyUcSJujuEbgc6XVPpwd2JdxdcKz6Mqqd4fpiq9ZaHC8Dq3ZhKGjaTEfh79R",
  "key23": "5RGs2jBLicvpeTjfiKHa8h5EQi4JnS2jgyWucA7UXCcrEfagPfCAde62EsNBvSoK1nMbQYEv5SCUzMCboc5p74AH",
  "key24": "4HjW1SgHMuqm7v3kEiPwTMUuH4ksYwNVAguoP4j2A6Vg54EnEGnoSpDiEUEoucPmKqBr5c5TLqnamMriQGB9yMP",
  "key25": "4zi5eahrpz1WWjz2uXKiQeao2yb78GwLJo6pEzZEi111U6pAmqs2SSjGYEB6eCYcdZrLn9mBmgrkDAA5tAVH2k2S",
  "key26": "RFrKx9L2vSGc9SNnXpcwBspfB7M1tJbHAfkAgCGTMCxkBfSVqiFrQ32BiubFPHpTfcs9zZ7MCqqkfKTYnWhFWqn",
  "key27": "2PP4tYgQcD11ThWtDf1ZcdfpwACW5gNGL86vPJc3KTtt3bmL9QYNw4uDd4wuGPebyguF52nDRKRs3fLHUtZJLYgG",
  "key28": "2HtpSEo8XHTL4GaMsWuAeEDYULyGSfSXPLjbamrdxXFP668fcmXVwkcTCTvwe3Ec6QxCUxCCUV9Jx2aFoT2Rx8G6",
  "key29": "yD3yY6qX6H5Ve9GSr59hz8xv7Pg1Jhdf8n47xoWxEeDrpFstnJkCFcMyWSH2oZkjbfSWba9vvo2RnayWcZ6K7De",
  "key30": "u9vspp2sCGLAfB3jDMr3xAz7dCzrB99YE7UStFGq2kAf3UPxRQcyvEzyq69DqSTtxHzvXGKqcwKoSZszfo6Nn1w",
  "key31": "4gXgwugniPewnqCzrgdHGkAa1vZwMQf8pnMbRT3ouktLNKiQw93umf9iWvGLuhKSchamCmonEtraDcp2LK44eycZ",
  "key32": "5dBojXfGfj2snQcNnnnpNZfCYewhTMSqzAUwdj6cRPzsVSLkqgix6f971BCV5SubH6seoP1N24QpuNPFXKHy9bxi",
  "key33": "3qSxNUsZneyBPzNVUZV1DbjuEZvfMsfv6N1ymtosvJdXcFhAffgJqeZeCr7ZmHbgAKhYF2PbtGfrmEodnmeUwRE3",
  "key34": "Z7BcJu9Uderxaq7SPnTf7k1SBYTLHnmfY1yPnvtgZCyxXGqpbG3c2B2jRMWt3cdh7RSc3k78w3zgj9QAhNEsrXg",
  "key35": "3MG9dTmjXvg1eLDBZxqcja1MoYmnjQYWXL1LDhTv1XvAjFEfivUu8u2yon8UPozZVryZf7iwSdJ3yjqDoGeuvjmk",
  "key36": "4yAznQX3r7Z26RenBxWZWT2ozWV9u9F62Q5fm3DqQaC3yMX3SkhiQ1jTkuXWjsm33ZrL8pe8a457A1AThVziHZM8",
  "key37": "k7pwnwbAASV8Xv1UDYBHRturEGyPzggitB5NxVyrJgvmTDWdGWWZHNbLjD7MmMZw6Bty2vhwxL7M5M9Ns9G18eF",
  "key38": "4CMy2p5jtu2q23EMFzbJV4ZvNzM8W75sPGEAKQ51poUNpveusUqo9KoYXyjDYhpHJbEbh39RtAwjZk6MazeHYCFL",
  "key39": "2dzKKJuSx2J4WZCZmBnMT2gpHMQDaKNaNZz2SSdgErrHvgpPmKPAR98CmoAWqtJvaHX4KLhQo6Rcbvn6afvAvJV4",
  "key40": "2atZ9BBrZ3fFEcGwCNgmiHcBKwNzvxCpuAykABxhpXqej98aTdfRNWuQLg8yUDKvc4u7DoHnPRV1JkVjZGmXf7ng",
  "key41": "4Q5GegGAGbENjAPsuGVCYB4USs7kRkGjqy5xBh2YD2yEqtNoCjhAaM8LJpEZHVAHtywdsYg5RaNZwUbBdAnVs1vY",
  "key42": "3Ty5ihd5HmUoiKRjotEiLxyawp5uB2a3ZCN3fZuWvDwPAXroasGQJ2WacTZ91RAq8RuSNdcsUAoRKUnW1yQA1TKr",
  "key43": "5N2jiQHaBEYpBdajLmNK4Nbek88dh7oetWN3HtW85DteSqUArLiSNmHU48dM7q3gwXRBJDLCjsC5gQYSz5za8Rf4",
  "key44": "4mEBqGRnXUefMYFz5BkTsvJfzEmUbADA3F7MpCx1F4tWpRV9aoRSwWhfTnpWhvDYhakbwyzfqfYcv3gB3yTWT4Km",
  "key45": "5xXUKkYSCenj3uDDqKwbriJJtHjCpsU4xGXCGN6BVuCJWaqbAKZPaobzeV13J8xpJnwkyYLmh45TTSZzkJTAquBk",
  "key46": "4QtTXyn2LPa7LXTtBikUWtXVksBa9URc9ramfv4Xy8UPE8pV8E7Bt2KvfNZs5sQRuNqVtDu6TtTUnH631LunUnZE",
  "key47": "ZX2qbcNsiRq9Sv8eoF75SQRBtRhBtibNAsTixY3PdFBkvMDUYNNVg5NKvtGDv3KSE6Rur3WpL1GrppuDXN6KMp9",
  "key48": "4LY7QQiikatGtGSj11SY4QzBNAXNSjv6sm3anrpuowg5SjGFfMPCFjYWm4nNkFgmKNq9nh1xyrmMEAD23Wncb89A",
  "key49": "JEStbfQeagzLn5yT1HgJMtzDj3MahAn39Fe8Mhz5FJE9Xq6ntZ84bXiYowoM1i5JLvdYcCfkKqjGhH5H3qGydDX"
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
