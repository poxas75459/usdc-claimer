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
    "65M1eDVHzwwxthoR5c4MmD3fTPppHxgnf2xFXTr527VE5LNjcovSAwaET9pYiHgRLEHGMv49WqUyW6rpSQnykZVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xtDtQAVELXBgKJPez4Bg5xH1wjxrn7JKXomgy8ryKY6fMKa5LCiTs4dJzLkne4rEKa4F7NtKQyYZqL7vj1VR6j5",
  "key1": "5ASct5L2zSu66DBnXT56Y8a6TAyvskqmXfPKgvR3SqMzsVkT2r4xx7Tz34FTtYX5f5mJwMjYkij4sp1QZiJCVyFw",
  "key2": "4Z2ra7dtzVAy6NzfJ4sgHGofbJ2AoQ3PAE8krZVHJ3tF2cESV6Z8SWtQysk1azxFfgv99ChMLRSKNmQrxtrh7Y9G",
  "key3": "StGqkYe4nJjdMoYJqFLsfKPVZTSGi2idVXgJQJbGux7DBGs3M1ErKpeq5Xa1nU1tBjBtBKo45SX43gEkFQqccke",
  "key4": "2hmPt8SMT7cZKQsU3VSriyj3wqt7S5us9bBf7NomWjsbrTmRrpBucyrZtA3A9ELk3gXrawM3jTnS59zTp7gBZYte",
  "key5": "4w2Xh5RMsExjBVVV3VLk8vw5rGLtwhA7CZLj35BeH7ZkFQARXA5U6kCap8ZV219iGoYSP2fiq8NJkVUL944hUUm4",
  "key6": "c6fsAupLebzoqnibJ4oG72xHiYLR9NKhdwZc6Y2sdWeBSJD7ERSiDTBzRMW2buauDiuubqGZRaoyJ2aRgVke1Ba",
  "key7": "GFDhMRykicDkunswGABWYr7C5uh8dwyPVMBizxTqYpuogQucLyRkghysaCp9jiZGv2XyvAt1mp9h9rjBUozY3B1",
  "key8": "2y67ZnLcJ87oskBX2fTMosz1ETbReH82oHSyuPAaSPTaFz4H4YtGZ1gZrQF4H45rHEXobiMrXG39Ns11MmS9d6ab",
  "key9": "2scJ52untjKS19yH4AUfWRKYN1h7P3BbYKNqWBcpYdK5LoxfJmgXMEKDJQSyab835hja48Sca3ZqWWLZiYmDSZdH",
  "key10": "59Ymtx8VEk5dF3L9LSFcjyehQqmrNkbzm2JBqDrCsTdh818aiUs9jS4Mv6TiSvyticquHFWMbRiNwmfra6aSbZ5d",
  "key11": "22Zcf5xHRbjbts2hX54vCvF5sow2R3n66w2gqS5N9a2ec9zSvHiDPBh87TyyV5uTdinCmVyxtFmy2QSNR9KEwgjM",
  "key12": "qwmAkdQMuEB8JRdSkzvV9xqdP5TtbCm1bWiGdVGzt4H1aWPxixnkB33XBkjwfqZtm1E1vwmZLkkbeY5uyVk2EYk",
  "key13": "5kKnAvtEboQchtoNncHidCRLcNCffYCnbqtgi74uDsTuwqSTXZQ6tC96jU4JDY5oVDZ6esyAPF3i3ZaamVPcEsrr",
  "key14": "3CvwmvQczX9QTBfK9xSfkvk9DBzicGmmzi3nWGHLjsXUEZSpqwjB77tcKrVjpNYo9jXDGJ6hrirwZ7acMiUHkdkd",
  "key15": "4SiafpwgiKeC4xGTUrJ46twsrbmBWrmuyLY42wrwz9THuDvkTuLatrbZCHNZ5tzbZ9UEy9i9KVxTEnB2D7ottnP9",
  "key16": "6KMTmYWpCeL1TCxRZsU1aFT3NEWafg2nXpUzeUPviqpzgBvkwoAByCCVwVZAVAsUWSGG681N5ByD8tSGy6mhLN8",
  "key17": "5beHsLYvQKaVNEPLn8JtuG7PQioXkyjieW7htL6br6HNua5PXbrSeUwQm54s67WW8S4DiiTiq7UoDd5ALGa3Pd8u",
  "key18": "2yZLBQCx99LZdbaQaA8xjoSnaTBSs8tpV244UYyipT4ESnexyCExGsiFb7qMveU6Y5DPf4i6Jur17RZyks9EFuK4",
  "key19": "brW6oYC4EuU8PXx8HpyM99Goz1cuf5yoZktbg2QgstX1pgWUCJBpitYWNLH6imVPtAWLncFkoq35eFx2gHBkjuA",
  "key20": "3QjbtJfHcfRUrekCFhmG8gFhdLFY84HHkv6WiJ3RyTeir3vL8GNS7xkD8C7f5kn4n7sSFgV1Bo7eiwc6gJBpH2L8",
  "key21": "2df2k2eCSuewPTteq4yGJcwoDh84rVYG8dcYNushGV16nR8jfPuENbFasE7Gw3bpC2V5q58KTGWCWP6EBh7xwnPs",
  "key22": "5vpHtQ7fi526uLugBm2z2P27hysLqjPk2QGRkaXF4LRE8UZgBPWu4DvEowzqgmb5nZY9mhWxvzn6ejmFLjTQESQ6",
  "key23": "G377E3Ex9KQZYvSku9n2CLMJRus8U7cc2Fkua42cEnEW482wbt15khZMz7WbpcFwCWpGBeMaLombGVqLrG7NoPN",
  "key24": "3QDCydDLYFPHMQ2AP3a3eG7xmeNP9qoNzogpgpFfeRPSGSM3FLXkkbQR2c7LDhhDHF1zgaxzegvav3jBAXN5ZV2K",
  "key25": "27174sv7DwH9mGXfSdhWuGFBYAHwXNR63nY6TNrdDMbfmX1EHG9vYbEH5XQqx5mCTTELQi2GEwoYnTKyQBr95fpn",
  "key26": "5Qgyeijg1N4kLAmLCh8TvKbDVcfGHoYZ1Xy3io3nx9q4WjwKb69c2kTAzTqLXkkGP5RYYfbPWaaVDCDkTjihKipA",
  "key27": "2vGQF6ip2dZHQc3FrsQP1tm9SbKQAXt3L3PZmsivhREeN8WokuXK7gCFvxjPsjw5WswnMVpV1SPDwAiCvXpzfc65",
  "key28": "5Rwxo2cCbDXfXySAwmoA36ZKKSRjaFsDyVZdDtChRXsM3a84e7Hduys7SwQv4uFkSrCq4az8hLz5D1dAZCCaqaX1",
  "key29": "5exdmxQerZEVrVZUE4sycVCth26xhARsb7ZHoxvh5Kv9fac5Ehc18nwEwuZviHzuquzGMtv6H42Bqsjo33R95388",
  "key30": "3RJ8tPifTwJsCUqiSA63xuhnWxz3gXuGHoLbvUEFywf5uG3N8dD3ckSad1R16RsFnwaYEW2gdoSPkB19uf3RMbn5",
  "key31": "5geBr9Wr4cNbQGNmM7LZzissRUBn89ewXV8Crf6Hf9KAXzHtqZftXQ8X3t6MCuaAfeeRxZ8zsUdhZP3au4vob5Mi",
  "key32": "5E2yHz3RAPVJg1nUTLtbB74gWztAPsSdCn5B5XtRxoxSZ5Ww6Ka8cB9SApTF3XpuuSW5HaYZMJm5EzS1NMfbqxMs",
  "key33": "2DCvtqn1Jnpdqxi3vBbEjLzytxTg28eKJLDtKM1W1Snpv2QkSx6A8uqbhzDC1hGB1Pm9vShxYxqoANZLDxNeWwGY",
  "key34": "27Fds8c1Ptv6bjZY6QvdMEKv2cqAxvC3ksMsMHMZP2sVcrEyVcgWWCreXz3eJP2M7spPdZc1dDHKDuLDeMYRZZzV",
  "key35": "4PR3x2LyF5oVeKbAZ4mNmE9B7WRMDFZbPjRP36wqqGWoWi6DJPE6tyjRZ6tSnwG54E2rGrsRTxGoLfBbGt9cxQNU",
  "key36": "4arvkjMwWBkqoEE2Ue4GiJRbwgvx11tbabXUn5veLqE5jNcCexzbws22H4GecykxkATFxoTBdEWV24Tkr24FdwGi",
  "key37": "5EMTdMiiMdujDs7Db6cfuyo8hHFDfxW7WXuMtrEpJxGo5vPmnt6BrDRdr2Yh6B8HJBqzqffr3ii3Qy3GuczXwKN6",
  "key38": "5o9o3yii7pXD3gDnCqXYfhRNwjz97f4QPhetaKQWMnxhZNM4D8CdNtkXsX4kWj1rXTrn25otRCJQ8xG2mZib9TD5",
  "key39": "5ipeUjYHmkkPkKr6pCp44FThV13B4eAFabwJ2J6bD5m9evqk7vgniyGohrGRXYZrif1f8ZMmCk1mnMtamq4HkWd8",
  "key40": "5CKgtXLa3tRuqKXDEmERz74a1U2ddzhqjEzTfJcn4QepxAV8tjnZNRmyBn9XRKFUnB7B7nqdtKTzra7NWyVp3Xza",
  "key41": "2LC7ogxwPtsL4unyUdszzYJyRV924hE9exLGoWzibALaS7nNe88stE8tZ9vdxHaUUBrsBJf1GjfHvqAF29vAunxm",
  "key42": "3WB3iCQoesbFFS8GXjweTLqzpg9HDSvciU4Ep869byFKVBtnKwmcGxB1r7Rjfhy8T6J73Ytki1rTw2udWmRrCadk",
  "key43": "2UuoDhd8wPahbHmU9i3dwDh5LspbBEph8swcr88qiTUPJ4VrV9pqP6Dc9zGVTGdVAZkdrqU4F2611BM4zouLjQ8p",
  "key44": "5ofHNyJPJEGSnkS26bjBqK9bU7GfWSu6wDM2mc72HpHFDUjjLieqqMgPrbgzihRcR4ZBByTH6H3izfvNmoFbvLar",
  "key45": "27dxvBJrBrvhwPTr4GHtiCJUHykrDcns9tBNVNPGfUhV8mpPPXD62q5NqxmLXcWe6GWTsnxtzS5CnGYh2y8KBYmr",
  "key46": "5DjAgMrPjCEyY5X29KKzP9DTvuinnXCmh6R4YAsSJMtVkRYqTake3sWFXa9NSGABuT7LNtucq1auta56PpQ1ge9T"
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
