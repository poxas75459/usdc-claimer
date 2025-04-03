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
    "46Kmupi8x5rdxefwCfUgrDBHrwMHNjvhCDCdWEpFmRL1WidKWoc6apHb4JAP2CvTvjsjo87EQd1GdZ9buU2QRSaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ruou1S1qhWt1AU1TbQR1rpWJrrh4BF1bCieqDMFkd2PS5wdTmjc7Z8Djg2VzEqdiVhYuN4hDCAvzfcStSRviH7",
  "key1": "MwpRV78w7tZ8anJk9asuFRY14rKWB86yB1Ad3XHeMqenLEnj7GNbzLXEg7tvYX6HxSAZVRb6rqp3LRc3XAovf9G",
  "key2": "2JRs5TyWkJ1K8fJrBXuycFpBrNLCuk7TZWqtCeCKcW3w7DaXpzGQtZ2fMfhzWicZ669uMhKHbYdy3P8ckynqoTPn",
  "key3": "3VjAGMDg7kMwX9gZNfSd8361qVGSwUbSHJvx8JwF72HPxFiNgmcwjDR1yS3fisxfSRZjGLWHDu2QsaG4BxjMi5uM",
  "key4": "2CUxD5pSfxnkDXPeYjUakkDnpywmkyNfTehvRqh84fyidakFL9dqEAJe8E6v3G2q71kQ5y6GBvHEhcsuph86sQz2",
  "key5": "4PqbUmdcMhRLEcZQa9tfXFv3m4iLWank1ysJeRaCvBKkWhBXH9gsYaLwadC8MhQ4KRKJKb85iZNav2qx8q4VScDo",
  "key6": "4MsWuoHyeiFjnDAiibfHtHvwsFQ8Jggdh6kN8qkLEJ3KjtgaziK19kfRSBpczJjUQtsEcrMnb43cYH9AnfrLjti",
  "key7": "5561gk3RoD3jYx9HfJ4YGr2qrjcikcKfrf5YbwDHpGZ4BquSYdFib2g8JjGotRjHtNo6xwLYrLDznku7WJB4tPtB",
  "key8": "2SNe8F9pKEPRLwgVcztZeHiPVG6KkjqwgjdY9pFCzDfvKtrdaMLQGKzERK7x9kcBBxqXymz953DZma7yzxeFmoph",
  "key9": "31g4GcFLd4kQsHhbCMB1inbZvF9MRs6BMauG5q9JtNpfhVg5dWjtAzxFAfnPpnceFmWLuVCqKPrQ6MM2PcRg4wDi",
  "key10": "25RU8frBYE3fjHsESqWKRvqUkun6bHRoo2Ujt38HWZW7N4hShEDPALttg7TP2xGx2siUwdFALbNuyyeSpu4rMKd5",
  "key11": "SYQCh3nVURgrGqoQBGJeqcAt8JBKvmkTkcCqGyQiNqi5gn4XgrGKBBn5qDAXRSvcffuk27AJ72BmKyKWRKEVvCA",
  "key12": "36FviczEjHii1vsEqmvfdrwfX7p43Fxx8p4LDDHVtrTSxPortgDGRi8uqoT9Rh7ErxXbRLv5bARPeh2r5H3SpEUk",
  "key13": "39exshJF5at5zV89ffQH13vZxpRDn7ck72uZ4BoLEXD9hbA44cDiiU2p9D2NuykyPMDQrViivVDcuVsWB36W4mx2",
  "key14": "krEcuM5YovTJb3WdBgx3YtoJBcHvsTGVxtRuaHvmJr6z2dFHSWki2dvZDKXVQhKL3VqXkHFAZriZUC5Ras6xTnZ",
  "key15": "46aBQ8cDtZHxUF3SGBFE7VbhQy3ox3UXMcs2BB6LGxcbuYvKmosowcVFM542Xr6AXonoowwYUqFCZBYSYeJ7JvDj",
  "key16": "p2U3Yve2YLzD9VNTq7U3hUKx4Hm6BotpgaeiXAGkwoh1NkUVbPshRGxrbnARJ8RgP8Fhws2aYDVYGUGQHbSxvi3",
  "key17": "5KBTCVPt1gWdPEgMdKHQXLh5YPH1Am25UR8WH8XhDt7pUJWdgrRzwe2TmCwbhXV7HGCNRPo6qDMtFZJHxU4yXoiJ",
  "key18": "2vJywWo86hpnApUkLx6jLv5zuyUmDbBoFX3tu7ZbyTrWawh8wPTjyp56PpPqfeoFPJz5N2vXmCR5NxT69nt6StxB",
  "key19": "sKDoHSVEmqyjiEMAQhQsAsEGuwNQQSrsKQBnRxC4d1t8fjJG4sgdPv1pgdy2BcU7Gyp3xB3v58UaTziR7rGJ5AV",
  "key20": "5Cg4KtGaV6VYXqKyDALteVJyDghG4VqLMVKiCwSBSQdUXNTFXLcfNZLjT2hcrNGZgcqkj8S7deqFDSJTxULX3Vh1",
  "key21": "5CTVM54zhjB2dfjSZJjNeyzD77XRXRhqtS349iqTw4MoixduBpj7UTmoJQK7vfXBWff6HfAzNNBYoFEY6yagFBrN",
  "key22": "N7AP6uaMPuCdLakW15ErBWptRzU2CZCDXrEY8ffn8xHKxCwUHcy5juQCoYjwLyRiNz7d2dpk98st5azZZbbDjkm",
  "key23": "3tLRGrYhpzm9SBYtHd6PT1Z9NZbGFgGnk9WhfYGyzDJv8NygkPUXQ2dESEV5UfdeUhFv6vc29K4H2ywR7WwSAQ51",
  "key24": "3gQEzB8Nr3RpvbjTuzaUsroUGqmaTaRP1DEx1SGWJqF5cBFGWWrpNY9kGVk6KMNm4w7iTocJ5tdCLHA8AWzNGUr7",
  "key25": "5VUA5TUEuFj4vDF7cb2JuxMRvnHsqSWE9wXjKTH1hrx73WoUPGi94YKyGTX6NfgQmfmqajTuNf7U8DJqgEy7udWn",
  "key26": "5bqcFvKxHshEyvyWxM6fgjyhyCsGskBuo8hNFq5pvjT63LLo2MBoSMATy6t7vHk9hwM7LCHVhj9nD7uME6vDXdRm",
  "key27": "2bo6hKeS5Bp7rrnMqTuHrqGKpYbDCpTgJHqtiBqeNqUM5azeYCmbnEcjxBgtg4FHSD9ChnftK2ZVC32qwesuNDhX",
  "key28": "5sCzstEucZ8CwmuEVJ8MuUcp62ciBp8Sg2qfcyw73m247REmj2eizSkfAZruQq11Xfm3bnUzR4Gd4L7JeptP9XcE",
  "key29": "3rESTAVEwnmjx9eXQ4qnkEjYoPHALphDHNszQNM2JshYN4ds61bPhiiM3vCX2jSF8Xr9uyx5NwbwZwS1B4jZUYfo",
  "key30": "4cDjxr1jwAcGmzfyJFaGRD3mkDGRSNnyt9tb5Si4xuG6PRwdwM8ktGpmgPbXE6HzwuZmdjewMpVu4aBmNaJjgaaw",
  "key31": "26PsfvnVsEJNcuckv7fdQBn9RjbkgvKxP5dKGCBAUvARUG2noXRoQV7YYgwNXpiqGzRWLWw7piwseXQauAhnLXWC",
  "key32": "65Z241BBKBAA2XE8KAmpwsR2kk2R7WQbZdDuLskpJTcmGN7XyDXeuaATGTPeRKP28kvgdNtnAQYm6NrfB3E5wahZ",
  "key33": "dmuaKfSgpoBgKmY6d2CarsUnGMJ2jh4rjH22cYgUPFmeMSK89c1MKBrCdEyH16V1LomTUpMGKkbwNyywoJs969j",
  "key34": "2BNYY2cMfz1ZPTk3q72VGDkZzgJ9onZvTzeApdggfnJjjoSYysk8kGswrhE3bVVMDg8vjvzqvrQ82SVdkyL4oKTt"
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
