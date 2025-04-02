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
    "3UNSknfN1a5q7ifAJ83qZR9YsG3uXbmNL9AjvBtBTz7Pc7XpwmkZ3z3DYUWCsgQW6fEG2Yoo7AvW8BboZPSGkCqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PZ3mb8WSWxb57zCyFhtgNBZh4uZp7zjvMck11aWfo9ePiMhxbB5QC5XMkQKLEM79MUAcSmEPeaQt9i1xKJfFkMt",
  "key1": "gX32Huck5XazL1XFWHmSxHqyaAdoZbvyS5AqV9mMmWXLYgrek2mYTyeoH345ZoqjyMJQaTG7FgJua4qj29VKCox",
  "key2": "4a6oL9XWvn3EU1fKD541iviZYQJvHvAofQ8BXXQ7QsY1biJ4mAuDZfxuLbuYvLkBxqVN2E8YpdasCBvHN1sYNdqz",
  "key3": "5o1NahxYmQHV1RMUyPjfWxfEKhiZPTth7tDH4vVYXiNd1qRAKKLLX6iyV13kDHMqbMgMrmocqMkKT6Ygijgwu7c3",
  "key4": "gbJxoRqiPJErYfncmP9D5j53RoRfGckwxHuZmeUveDVWcgG74sos57PL9GHVcWCmbmQUerEp8brnXamz8wvyWRj",
  "key5": "5LjCpC8RyMmLKgqpWHCBmQePEP2iVnA8DVwGHxszHyQuCEArQtJLrU1Q2iphagiGj29TVXXPNhTBuW8V5zUTJVMx",
  "key6": "4YJzNAzdsZWrkmPAr12435swgRsvmmxMyfzGfCmXHg3wkVyJoGYBnGvV4NkLmMfEpTL7sWUE4hHkS6tLop1aZsQB",
  "key7": "2GJ1MkdpKRvx6ZpNLFVKbhw4L1g6TNtxZU8T8k5i75ny5p4YNJ6XaAd8SUvQEbfN9UWsMK1vGGcgq5BCnd7w4mXj",
  "key8": "2VoRDjETBc856LoBRsULShL6d6Pyy7WvQfjyJAE2E96SzszQ2zJLpjC5U2uZJudMvRLgKzzgxciZsMX72ycEnDGn",
  "key9": "2NrjMA2uRPfRmmuhPxvLXPgcjpkWvPkFDBbyAaArh8uajcP5tsfUG89nvrSgvbAEzCKTXS3EgwuAN6eZM3fvkyTA",
  "key10": "5cR6ijCxt6z8KJZhLoALoaWKwN3mCsvWfuVAwkU6ijCysFXiSK9CMYH7Ku7qaH6D8ShKKUVeDPR3fodci7GyCBXe",
  "key11": "2qrB6GrAYHQ4mebRbb34bGdjH3ECr4uRBbwBQndZu4HsHLz2sdnoa3vxCSNC5kdvqQhNrtD1xBZogXdqmpboeFsY",
  "key12": "2nzSRqS1irtzS5p8e1ezaeNVbk6p6TCmtsPJMo3ZtBHB3VAT5QkfVp7h6sibitwTDJnu8pJd4S5HFF6BAmpQcVyn",
  "key13": "4GAkPL7v2pN1d8jJTqZdR8Y9yF7rQCg3GQGNe6iSFe3bCjC3Br5teZG64GaEp55CLtWB8LxNX5HNFCRHgh6ZTkPz",
  "key14": "4mgbs13LTSQXKG7VDj5ScDuTGccpYPyy6KbaXhZcC48MzW7qiSb5Jd6xmuzSPomHB91uqPb6kmabj5XmsSnwtHtV",
  "key15": "4mvgRe5oSAwfJCRPkq5bq1bVwzqY2s1r3mUNs1HNmYMWeCxtqVutAXFXoqr11hc1SijEEjyNPnAg6LcRJX1hQ9nG",
  "key16": "2FeDFx4drtqnEBynDNsEkCQZiLS1APSztU64vCHD3XgKxnxMwuGQ95SZNCwgohjbEvAmeMiu5XdSgcva18VNK8WX",
  "key17": "4wpWYkb6t4vKAXLbMewf541LaYNsBb52dAEuyZbVMcAFF3EaGDx83xxYTbXefQvNyZBRRCJr7JWFABhPkavrsKb5",
  "key18": "3i8bsAgKcYvH5qzoGgUAPNp6AYeoomU3aBwMppvRczDKu7j2Mb3GyCSAmLPVbYo8hT9FmqcFiknTuE9qAbFvt6BY",
  "key19": "4QNF3sWH2xeNGkaBpfajLeBA1XhRGaNNqCRRv1YRoe8b3F6RUDw5QKR6YG5xaYvf5B9cd59gdGjnJef1oJ2gSQkd",
  "key20": "46zpSMGSqZ6BFtia4puuWUirvoMorLq9PpmW7zqbm4WPiqPSvp92TVV9EnfUs8hwPph2LcJzrfYdmz2xsK3tiUW2",
  "key21": "5LbpFN8cQLKjy3uXekAEJ3qTAANSFxB7SibcvQffAF1oxqz1SPQsnj7zJrC4NAQtAz1SpLHFaUqEyN2TZzMmrrGC",
  "key22": "5tRi8s7zF7gkfm53quRNsEvNt4Ec6XsQQghJnbTirXCzvPYY4oysne2XeDXPBH2Y47KdfesuVS3dsbxtDjgQWXmH",
  "key23": "2tEE18rZ2A7U17FYe9HqqNmYdNBe8mSQY5DdULrTRMtfJeQJ6AqgFusPwBvM82AaXwfh8eHLypCBogPEUQLAL9R5",
  "key24": "ei4Znxbwi41ee5ctk56zrjZBuo51Y7zUDU4ahSQqiJVC5d4GVoQoYcfwvtiZA753A27LWef4mr3aSACkyX5FxSz",
  "key25": "4tmk6qkLzM8NVmFF1UmT2ej1mBbBtwKXYdRv22UcqqPHokfD6n6PVVxhcNHeNMKVJnP6BKCaohnC9nWGYAbzzeo6",
  "key26": "42DoHxUtwY6kVjfHzaYidP13SfVsQ8srRHX6g2BJRuqYyc7aKfAS5Vm5HYjMbh9MXt4ipiUXftKyfqi1uAWdPkHn",
  "key27": "4jSZj1aPj39H9YuujLwqkC732Q3oFb99iUGYPvYCAfbaZoM6toyL3zpgZUDSfG7zkYzyC9ZRmPupmUt28cuMyqgo",
  "key28": "4ZRkbGXfBK7SBHDRbos9Xo37biXa5xjYcbtfhBndggPjPvxW99gvpKYA639rfeQ2Qy6EeH5gkw5KMBiRgDJ7vMxY",
  "key29": "3t4vtvWoV2Ldk8YRqvPkxHmE5C8jwp8pC42MqKS4Zy1fXfTeAqoRq5xt4kVHURvZxSB1kLu4AjJGaQKZhhyoTRb9",
  "key30": "i2nfX9DsDM6TnnyP4mQe8xnNG2w4hDpeDYEuTAVCQ6Xv6nqJtrj4MS4uyjrLUuGwstawYW25vuvd2xnAWgVbA7s",
  "key31": "63q1yhZ3qwnU8ENPDXCJV6WTuz3sW3HAXtWhK81CduiWwHUxFVAir5GQMijLspY7Eh2vUuniEzVtUAzzoM4ixapQ",
  "key32": "3pRb91Xv2knGw5YE8yF3ZUKCPBe4mGWzyj7NdT1mRwdn2SLd7QqcDF7UxbN5Hv3WSbg4zAJczDfeftgY4t5PfBL1",
  "key33": "2BCo78r5Vedjyuf5hY5obcSRzLprP5JjNazbDa8kirqxShZG73AsnJoqC54cwR64VV29c18JustwoK4TsQCe2QmL"
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
