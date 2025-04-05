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
    "5MrCBFSUZSCN91HEzjEaVRLNQHuVfxNgh5cCFi4cdb3d9oMVon8GswQaq89o4AHqf9azX1mCtNmKWZV1jTsJikF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vv2oMVCXfiwqqcDGPB8RN2GKzaJgzcqLaRSDf83wb5jSYVT9WE3kdfD8AqyAhRh55vEarTdFh9bhMjqGQZttGqo",
  "key1": "3RtfZZe2vtuXWQRRHWsThqoYikAKP2ZMjsrg8moH29Y3hyzpEQnqvL9xtmUb2xrdJ4hM5iw6A7Pnr9347ELe6SbX",
  "key2": "32JcvEVhzB86hZU3SYW6c2GpEwcv2THFZ6QyNYMw4CPzCyt3xj45EBJohHBCvgKEjxtYKqdebtZqwas2FsUxJmue",
  "key3": "37ahaJvEoUVYjLk7JnwiYPhfHRWpT5DTQQXsxBub8Q78ctE5iHqoFapmpPPHSY2uUCKskWfBsFqCG9q1x38TDtXP",
  "key4": "9Sqozx3iDTqrGttvR7yXpqA2QQW9LYDfuw7Dp19PpPBXLWKTq5JZKeuNhW7QG8GsMNPdutYRtEEvVRHuHAr33eT",
  "key5": "4rqQ3NMvAcWd1BCJMppoCcXTbjNHHzYcJRAuFfDUf7vojicYqaLznqVTZLXh7NyPW28Mic13VUANGXNF2V8B5dTc",
  "key6": "2T6AU3wDXEg8grDpTiezFyf7rvF7D4DCiqXzCKMiNhz8j4ZmCSoM4LmHre8BjSRzUaziB3o2papTcAvs8nNkp85C",
  "key7": "5tqLEu83pwvjnaQNNuZ5nn3Ry2uJM4hMnZorbZeukJFp5LDUN2w7Dqd5q9SmVBHnWKYc5JFypXrZ1Y3nL82zyTnQ",
  "key8": "2P4NzzbGtkYFnDusMmX2gX3hyjSqoVVgXxMXWSJKG9HAXzkCQ3SdkuYrywPebzfUxhEMyyonzGHbcrszr2RniQFe",
  "key9": "2tu2pvSkHLFwZbWCrYvAd1EbMxhrLyQ64NMiuTNZrdi1ienix9fGoqkZsrTq8U9x9DziUzBnDeAWPCRNfDe3Bfor",
  "key10": "5m9aLLRTEQVNaPTCnQ35cXWYYDKoqytQA6mkbnX5qpWo5hUp8DrH6GF7fD9L299JgJoNS4foZHR6WF4W3UdyVhCf",
  "key11": "5JPtjosKtQVgjGuWV4oy1vncA8DqM2RoZ65tKKAa58PNDKF1uzd32uJu36k1LTTRWJxsgEk3zD54d5ZHyEZeaaKK",
  "key12": "Y4ntF4YnvXRXdGYwuT6CtbRejKxsMbw1Mg62wsWo6rEucJGMKovFzXB5EWuH6rsCJdKk4Nfe87R4uZFKH2oV7bR",
  "key13": "MHCUGREmwPTMkWAU6GTcuSeM1xKiLoGcfnkYdR4Pu4quAUhqfjEcisYZanikexe7VB27dqhuDr2QfQrFCak31rc",
  "key14": "4HZCceGsDzvZfn8TUbDqw3zSsFhfwSL7czu9wWZQe6HAyQyF1nnZwje2yNA6kKFsB5eNboZpLePC2TqcxWLR3So3",
  "key15": "3GypkYnBHsapkkJ5c1EELwjBdAeDacKhyNTx7GsWxytNcEJ2fWCJYG97ocjyoUDq1QMh3JoZRJhtA7NbE9CYcRAe",
  "key16": "29q1ZDnLXFhxFMf4vL3HRU4siqW3MUPePjcYutEEy2T7CWEr8gqe9T6WxbxGmx7FtaXPoVRzEVnaWrwh5vAMB5ct",
  "key17": "3XKQhV9iPXMpBVa7FrpiXt2L2LJmhjMRJ88VRb54ajkGReZkAGRcAERHwA6Qq1fYQgHgb27amWgYLJSAH9U6wFfN",
  "key18": "5Q44kTtxxVCc1aHyGdTbGtRzZGmPxb3tC7hgXhWmE8RVLCoCpd6KmZeDVroyX59NEChzbM75e9fjR66PpVNsXLg8",
  "key19": "5VhZjx9VGgyA74cPbLiR3riPtkWAyGC3nKg2efPfSxQkvQj7NTAxrU8jUAc93GZpx2fiz5FK3zYxWjyVJcA14t6d",
  "key20": "3a3Sbt161josrw1igaqNYqV8Ui33mnM3XmGaXhSMSTwMrE6h37n8jZ28QZx6RGcBWtkwyhJUcxVS6XKVvf5bw7gL",
  "key21": "42TemumBNLCptT5NeXqwp7ykjDpoD25yJZNNgzpA6AoySHZsAgwzrw4rQhiB572c555mAx53jgKsSQf3ieW7kxYQ",
  "key22": "AyUqQDvDorxZ9epBRbnHLsr2iNNbdguFrUwUrLdzZbYZrRK3tVPh4Giy4sXPKRBjW2xm1b6YNZNdNduqJL3VPV7",
  "key23": "4nMdRYcu148PJSZGNjSWT5ApYD8ubfMjyVgk72cTGekMZC9UmVFV9J3jHn5vw6YDMReTcadqAE6oL6qAiEzB9Uew",
  "key24": "2PAyG3Fh6iudCkB294WuiyXPCQJi8huFcvQQ9Lp1FS4ny1aBJLcQPPvZYxi8m8NmQGXA8ynAYFKphPyGwJFgamSF",
  "key25": "5fyypr2EhVhDLRYUjVzbJsF5ZijeYEarsHia8qc64rEzHfTbtjeLpkpR2LV4umvBzX3zu6JtmFogh5je47ByvABA",
  "key26": "2UjmvC3tsXFgMsGZPxzPN1eDieh3RQ7QunRu9A66UAKTUDYsk64MgnPsboQjDnGJCHiBVhKAkuLz6Y3nJGQxzpQv",
  "key27": "xZUrCk7FRgRbL2MYG6hMkaweqxowUBUg5cgr2e3vphaWWkJG2NZPBCKCvpqTWvqryy12AqS674BjREHmTvTQLCh",
  "key28": "3LZ9F4xGhtgZURqu3qH9iKzcPEWeS5vteCxiR4XeqfrG9N3Tm2Q1HFRxfappha1wcVEW2AqCCWQS89NxyYdkVpc4",
  "key29": "3jLSX3GLX1qmMgY8AQfD3U5eEgbcRCGBNx4JCPaJQDBdLReoB1nJDpjS9zLSHmdKH5EPeAWaxZe3SLb7DHUyFwJ2",
  "key30": "5qajT6hKfH1MVVDLnNyscg7F6sR5DN9zw9CmGtVoXToC1iCdcWmtAcMvb2J627K8YfFr97JKiQVzDeBMuUntMxG8",
  "key31": "5Znv6MAxChEms2NfsZhbUCWLcAnj1gJpRCeS7boTXMkDggJJLpAZVoNW5KkFC5NPT4hQD9RB8TwEiDcTDp4reopN",
  "key32": "58sSFweNcuK61KY7y5pEMBkmd99wQRLvMu7dGZaN9TixT9a5h4fQMfA1HZNSfA4TWdnzzTTX1nFV8wF2aLoMmcf9",
  "key33": "5mUzRdBBjqJQogMeVFnfnLLYEe8h3AWWhUThYvX4eyPgnkCQiaCtRAfxm8AKSxtxyqBmjujpMkgm77SwgeR2LtiZ",
  "key34": "5BeFuDrAaomDzTWsTf6MkXj35sLEovzQFTHbpeVnobnnWg2Mf8iiFwa95kyFqwLiUyX5G3VtmGu4bxkRtyLASvE1",
  "key35": "27jc6Jdr4UxkQobXCR6ZErjoTDBN89tDyuXdZHb4Px8iRVykCTfEiqG7VJLSu9zrXQohoqKn6ZeAcJpNH97d4QN1",
  "key36": "5pAjJvwcKJX8RmCTaPT1gesbM6gTCrcVEdSUwzn6Wmj2oHwQ4GSDLXcYeRqT2x4cy7RY1SDYADan9SyYVTqUoXLs"
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
