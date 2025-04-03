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
    "2PFEZyK73diEfcxo9iUrDdzhQUyZAUork7eZsfbmHZM2hLXbWMRfb2hvYQ5VipeYX4463KZocX9DMB4h2pQBmLfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XWASg5GCBaye7XRfdXvAYXJ8DokREAUMeGEM1udrxLjBnzkjsjbu3gicWNpj32ZgLwiuinT6wb2e6TUpjyWiqV5",
  "key1": "DubUxfFYLu46doRhuTbGjxAJeVQMbShC5VWWu5kNujTMkCF6T14YW7hyRKthwYAc6WHMzZmWxN7z4gPmqBTypxz",
  "key2": "3qiquBKWd1Wpjs3Tojxw4VPffFYFNTiAnPG6PsUJaMQQTVSSr2bnGumQXkTGf3fVPGUQJPZwYQBFTkdgsKT2k5iw",
  "key3": "2p6DLV9y1XFVNkw8uSMRvuqny8irKJPRaPUgihqoaZbigAAYdbEqfo6gJkgbofSysWFeN3A5zjt5buc8Zw4jgQJM",
  "key4": "cDYDgiB2vXbi9ooRBBq4Ya25kc1S2BrQ1e8ns1udQfTSgAP7d2wGHj3JaCHfWCQv5JKBACadtaFVhsnL38UBxhD",
  "key5": "4yPhndLZi2AQQ6HZWxjaA7Gmyz4zzBmpBqPnai8tTwjCkbG4eHvxs5FoQZYuAXx9ec3dyedJev6bFzgyxgA4iJMZ",
  "key6": "4xWhAxCHDXUMgw8DheEm8juC2GdDWgEyEXeGf8rmaAFq2BPrqMzq3DmnjJztvKQj4Zege7thYmXCEgVsN14MsxWV",
  "key7": "4RKoer97AhH8sVMWNhxxSzrZgBBu2nzddC3t3Qe4C6za3jbBZgJSwBTATxvYmwZeGXEr4qeGfF7JxDLQMuMV7Dq9",
  "key8": "48g6rs8WfnRrm9akbGKwH48H6ykfStefDNtcQSSyXmkU8eBed2WXJvyFpMpfV6k7E1QPCvBswbRX4iBBF2tyAMzi",
  "key9": "47Huo1BwE2qBBkzeav4X5CmAwWy2LJhRTAWKfAWWKEVc9yBtav5La1dESwc5QAPvKDzT3q2KSc7bspMvffc5bE71",
  "key10": "z3cwKx1naPqqExtfbG1BXG6umhXrcFcWZ3M3M6rYvLYa7M5PcuEmBnbsp8S1xPnQZpk7NfbhbYDiEBXPkwGjixb",
  "key11": "4x8b4ZfFJT17YGh8MPVGxB1h222ZSmXfEADooKjnauWYYx72RZzRFVhPxJM67KFmjzHbcN89qL4bcSJXH8WVLCiV",
  "key12": "4CrN9DmVfnSK97rvq2yC8XQvNZYSJL63weWjNZd52BC3TM3by5CeRxPFFwn8oHFaFhG8sBe3irsEbBqPpu7pLYA4",
  "key13": "3VrDu34mPusaidjjJScPVcxeCRcYH3bcJ6QnLm7CEM212X3DYKCLP9YEzTRCj527Ksn9VoDTBi3Z1pA6mZBodnuV",
  "key14": "pxbspVYCa2swbwGtgo6jiq8jZZupg5pqpDvWTETDVbE3uECG1neDaeppVXGr2hKnQt6udf26R2aVFTrC1FKGohZ",
  "key15": "MtwTnm2XypaaFR9ezZKBADxWek7BmMuNG8p5qFK8XL7JRqiJehZX1DTpsxFU1ZmG4ga6LiZ9ygFS4s9Ck3BXmhj",
  "key16": "5x3wUcMZR4iyqRCESGspFikhRfLPURPWedYt5vmxjdBiXcxMyxxQDpFo5k33B5AoivFrwqUJenMmehC4ZoN8T3ty",
  "key17": "4hbtgueRgzya9M9PKZpP5H5p5gzpYtLtrL997bSbrZfWa3XxgrSipWKHmc6hjrGpCHxnCWq2dFg7caDkBidAN1Xc",
  "key18": "3SzwvUo7mYbAfHKzJL8nDcjK58MguiPvzYkeYBicNaBqfx6yniRqbhSpUsa7H9rBwLtufwWh2ZpLzoxERaxRfbxM",
  "key19": "3MyhpkUM6R52DPnjEgVkwyTWvgqJdbpchsY6Yp7yawY8Guafcj5Pj14Y8fanfNAfRX4P9ju1sFXK9ZXqpW5g57ua",
  "key20": "3RqCUk2xR6GE8BcJ3gKhEMVNode5WkzwH4v3NZVqi83Jkf7z1Ah3QNULBYXaUkAeTjLJXoHMh8SmmiFrCD6a9cTV",
  "key21": "7fq9SrXgdypXNkRsSnt5DDc3zAWjX2MwbmRDAFUce36WPbSCtM5LWCXmz1Qz2ihRD1qyNayneGzaRV3iJrCWnQe",
  "key22": "3sPTozVpZ6DCUrPvPmcav3cfbN4tKGmGwQaHWe98yTpbFXJZ26Dn55EDBFUwqi9bihEwyDpX2dDELUyZWRUMXfSH",
  "key23": "43v1y6Gf2zFuTb5MxkNoM3eU4HdDjpRuqwfSzPfr9XM8QG7ZLV1jQNBLKanfqWCQcaJfsSUKZPJDUwwYC3sWv8mo",
  "key24": "6y9bLrwsTmQaYMvrD4bjfiTimLWQLsEkhLkeRBofyfmZoB1ECtyRBEbkbZba5E2ADJL7bjQQcUPwVgMLS8VT5Uh",
  "key25": "f7q3P6HE5Ka5ESddVwT72Jb2fxpc9EUqSR356dZJMzAuQC7LW3AzEJ11Wo8bCDEZzk6tasnDEFgkqWUZrvrDCiH",
  "key26": "5aoSs9FY1F1cHjTGG4oCbPiRJ3gLALwH1HqQt6bGL2JVUnv9ZJhVKGHLjpwU6hfcPMH5jn4AdBpxTCkRALHiUx1y",
  "key27": "3ME9rbVqUKbm1e17kgbKCepPGzmT32mnkmqkpWzDvijaXsc2cGsu4vBHyuBzoRzWMLFjFiigmehUgzu7SbTLhkYG",
  "key28": "41HkEui5ydntTVPAx1FjfLUv7ojForE4sM38ip9k6FJM1ScNSnx7JcaW3HNDM3xyaGcxEasnaHjW4PHDjZiQFMaN",
  "key29": "42cnp3zf8hNgiAZVqhb3HyPRBkew81SopyVVpSzz3KEWXdpzeFXiXApBqvmSeznQpKxuzcb5Vsh7MrzVMkbUKHhA",
  "key30": "3p77YUrDzKJw3h7YXrG6TTe4URC6hDm8jJqTVayCxraa5bsqCinuULrCo6zRZE5HpwhqxeqhDxPfQ2PbdeZy9p4W",
  "key31": "4LUZv5f9nNVqm7sSZVvCzLdfmVMKQA2nRjPT7f4fS7TA2UbqNoJUEjggYRTmqh6y729q6UcESP8xihhMQx3sPL9F",
  "key32": "3DYyJuWwBopZ93nKsoswkGoNhb7zWj3vNkjv5NvQvUjQ5NTsU4fqtVbzcnfp3fdNTHiURtxSsecLYzZuYYiksmaZ",
  "key33": "rDT6S3BN7SKmJ4kXidryrp96H2ZPfV8GkqwQBfcf5VMGZCzCrjJJLb8DoewMa6kA9UZSajPFPmK4UTyKxFwTZas",
  "key34": "3AwHwwuVyPazFUpukFiTEZhvfxnzPRwN9Vh4Gdmrp25341iRURiFDFE8M2jz7YqLSWXyB3KjiLmKPxstEbY5Zr5m",
  "key35": "SoXfjbbhDSXjHQhsh41cwHMUpXveJTEf5iUuffUns8beoYxXMm1vrVEWLoe5wF3RqQqwoU8BXgZB1fZR1nHo9ob",
  "key36": "DtxopJEvmdws6yBtsDrhnj2HF1nrTfX6VCLxZm9AuMzac1GzhohWvXxjiYyTFFSCLGL5x4aZCzNDSYpija7Zp5t",
  "key37": "59GMfcuGKfa2PctGBnYZNS6v7eRgUsDVuTGENxJTjasZQarMHLUwpGAdZYGye1hS5XCFG4vMvnf5iZ65WZ8Bzzg1",
  "key38": "4qEUPQv2XxidWpka8AHuBSuybCKRXmAr8U79U9CPpRXi3JvNj71M5KfRuigLczp6SKPm1vJz9N4bRfN9Ej39sPEb",
  "key39": "4tvRwfUCd9LpNRZCTm33JZogtuQnHNPuZ9h5tevLG3sh8oajiA2rQKFj4ULvfzNgRdS1BiHKK4wzvUexhPH87RUb",
  "key40": "3o2kevXzdCELDpQfvnhrRZWDjFShFoAy316SpE5dWZwZc9HHDRC1jyDDZ9P8s4rh2D1Ub55Vb1V6FtBgCEcnZwnU",
  "key41": "2jP4c9Gq2gQ1qmgUqjYGQhUiRJtsMxPAhxyHF3XqXmnCaFMjqQkB1BRaUPjB8DhUHDomnXu1QDqeH9xG7wSvfDRC",
  "key42": "3uL9x6TtKEFmPoti1CVjeHoXGp2gpkMHzXwnSJXwBcpiTpE1mpmzHKooKqSSqLwNLAM5JhaZKLV92JdwSPWEzcqL",
  "key43": "2mzWit9cPumCpiW72AWJa7RrkmdFnAcGM3GEwHhVnTwDo6Bf8zqrAkivG847Y2T14aBrJ6mJgqMR45ao5NwQoDdU",
  "key44": "2oENqYw8Rbi3AKiYvZ93zqMT8puwJk8JwXqun5H2fcw1rnkqGWnckNHWomhoamDKnik2wJDDC6r172d4tAqXQjbZ"
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
