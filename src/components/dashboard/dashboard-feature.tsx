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
    "rVNkggtRYpc5JxMb6PVfrqxYf23SiKLH3kNJduWaB1a18ETuNdpTD3RbSA8KkGbGKJ7yUS2qV8yafk159ucHAgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5puCLUN5VbQhfKkoDwg96QyfDcNHcevxwpwSu919GT8chdVwqQmo8sQvPKB6Bjsxe5TYH1AUr4svUGQCZRtgx7Gi",
  "key1": "3YrKcQcgVeMT6BmSXJ7mqbZ8K3bjhWFDjYvUpEDw94SjKVr3e5odwHaLXEgdWvdwL5eyvpdFf2YwMza8XGN4MzZz",
  "key2": "2yQ6s4ZwazZCFXbfmfHuhorYHFHDb1S2cd1MdswaAS32FG5STyqk5wmpY1p8xGsPmzX9EYJMvUMjLNFtz77RNoct",
  "key3": "2fMqFqZfcJT9sgo9uoaUDkuwPGj2e2FhxLHCMFbCaMJHEgz9s3fFS5HsrLTPJbToF4arkoeBxKL4mVdpswFVK7ME",
  "key4": "2QNk1fiLaLUKcSDdWjK1Z3xdxudSDgVbr4veJCAyyVRsTBSUi5pfEw5KHpBp4dFjMNPptz5iLnAYYj1CTQH5qhaM",
  "key5": "3raFxvGo5FLrsoccQACmK2Smwojm5T9mhRurJV7WLvCrZShgBrcNnJjcLcUyRfkVz5iRUiHoEWWHSSxwVAubMsS1",
  "key6": "1s4c5HsiQLvHMjtNZnSsuFYN4epQnjQJ9VKbyRb36RWxhLzDnkAiUWfq21srjedYe4MMuVSct4DXepM2dbkyJF7",
  "key7": "59kfzN2h1Y6PSB7SSW8vuQNV13Eyw7UG8C4AJLR8Zi7v3zfLGfMxwkNKERLKnYL2vStDCFKmSJwih1BcgVTfhTML",
  "key8": "gtLKhoKTcRhUcdEqBecEoBPrjdj2pfhxSfJVkyG6EK6b4E9XyBmKFgyPR622SwCvfoWD3mFeVBqcEjsZWTv9xAp",
  "key9": "59zKfSFBGkiyaSxyNoi3rYutV8WKeD4qacmfFUt1KyhffCmJUMDPcHgjmP7nS57DfqyDSrJCkPJ3NFdBeiEmvV7L",
  "key10": "2PogDSty9NDSret4rPLgvjpfCzMWSWKBvvXoz9eTQPexVqyRSMqGYAGjTbgDaT45SeAzvG1AxxYMVxhnBZ3aRE5A",
  "key11": "3rvWt6DKk6F2Yq1eTkShoYvhuSEL9Bz9hDGkZ26JbjQ3A8yqTkzu3mnQXmybyqX856YtScP89PNXuPmR2yhHmATF",
  "key12": "2PqSbamQV4iaMCrXMtY7rkBcXjajk5wXbA8iRi3vTCgsodvwz4GPtgzd46ck9BGQCdvczLdvD71hp1ABs5hHK9Go",
  "key13": "2JLNUSbmDgTDsCAihfNwCZWuSEak82CVTUvPoGEAVpsoAYLaj1HJ1C4KqzV6iUH88EQmrPGfoWxDXZ4kWZJHEivB",
  "key14": "1Uw2A9FTbmmPGwngDrGuZ8ND6KVDut5Yc1G12sMgtsLfZdJ97LN3sSmsiYQKtotB93FW5C8M6LLKHTJGNcZMyAJ",
  "key15": "5ZEKEBj7YxX4hGPTtDrzf1uQbYPZ9h6bwFCKjZfxn7jBDVZ4u83KnQQxESqDUZgWeqjwgZ7X6aAU9dcX5Kinc25g",
  "key16": "5pqcynMHmzhBEWYQKawNKbLLPYLK1di1N1eTQyWpfGvYzMBvppGxMnjfXQeAiX2xPu6TwcqxcEkaKqvN7mXCcro7",
  "key17": "28MBXQW6yTsAJZR1K88bxjVRKo8ehG82i7bFmZC8YbPy94DYfd4mHDiQJgCvG1bjUk6cLZ8WRuZwqHrZ9yttHSjH",
  "key18": "5GjEujDRtWQSfHMGuatgCUP4H8FUHtpkdnsa5wnfgdntVJBE3kZ4rTyueX2TkqKRGQesWdvJtMq3FYJoKc1qomQo",
  "key19": "5jxxtYunsoYxSdhV4MccgN6k9SA5529SfQQuf1dBBGGmYB42ZSQH5VvdG5H66hPyZA61UBDz2jCkAAnRfafKCtbP",
  "key20": "3F186DA8LibpeZZnYsyRRRYM4EG1vvcXFhoe312ygxAJPoXMwYckCCSQMTUAbkpK6y6Xs22pE6L8VgYvpSERVJG4",
  "key21": "35z1mosGtxP5JZTAfVXhp5sMMEYwq5BAuuafVu4cw7bMQKyxN3UwdwsG1frjsjC6a7NvFUmVwtyP9BeEDT8oDxcJ",
  "key22": "3bvTmsgEhYYsFK21BcfPDiQhXx48VpPQbuxNiBmVA2n2nZXfKLYnj3w371crZijfMpZMwBqKryxN6yxQePWByax8",
  "key23": "5354dy4mikhAgvpEabzvosAgCpBX9kwaQksNx2S32bXCq2vN2VEkNx2oXmWYLQgJVm5HwTVdEUeJQomUDzS6PuMm",
  "key24": "5uqTvwKQdaZ98ZGbK1RvhDWTB66LkaxwnKYJkM57vJKfyiLLpoqNKLChM4tD7ib3sF2MzCc2EKuRdbozR6LjX2z8",
  "key25": "8nTuDF24kPZArbB97h9GA4yanDNjXLuczdKfKE7ogzRKyypZHkoTevL5T95K6cviKNKpAoioZkRFuZXyFyC2kjM",
  "key26": "3Z17yyZSZuUmtvhKMKYKaiPJeXTBVLPrrxLcDSHhGFt8p7ZvfE43yf2P3TVEfd68i4CM5XdTqG2ANr4MrKGC1wmX",
  "key27": "qUHnAFvjPS3Fm2HaKV1hwShsjDQfVkY5iZjyFw3pRhWNV2vTbCPZ8s3GY7yJ2tVemGJkgj48LimUjL6YFAVvcPW",
  "key28": "2RbUwFkSRKBNA3Uo8ZCWxuzpbg8Ft1BkWSDcnsQ2SycD23bAktBjCifDDMSfFdHhVhKXk9r4KtqXatDojcP4fxme",
  "key29": "9fZeCw7CrN6fmYv8PSXswZmX2iTfDM9NLBKGPoneFKx19HP87AfX2Z6McA7jPuP82qFLDHPKdijh5si8MAPUfXA",
  "key30": "4PkEFSG3Dq5JAHztRL5aZfjJ9XuAjcXhjH8Tffwrv2reALhZz7DEQQmp671uvSxWemGpUe1KuQ2wCRLzdDUbW7ZA",
  "key31": "5NjwgfUF6uwV2x9WzRK8VaEM2wStKNDypgUCVrfjhhxSrqCTVFmYiV39RKLmSn7KZL8jfsnwNFJxcjfmgyqAAa1e",
  "key32": "2puz8Fd9bdhTNyqpSm81CU1SgA1AuF9xn4Uo8znrDFV2YTWsK764tNUkAqcY1q39GFDUvn8texdP3tXpffdQFyu",
  "key33": "2uAFVnHUoWScUoWcufXCFGL4ZrgX6gdNM72bd8YcVDaVLNBPx2EqEenuyRQvguyJD43w2xmMEdq9bV78BgpJ8iYe",
  "key34": "3o4CUg9y83maEboRiTAoeP8qRpzX6rVNvpj7HX3droeXVFSR4gRPpHYrpKejT1jd927WinGWjS5P3oX4MJ2qSQrN",
  "key35": "3DZh8KRZk6QQNhDj1HvRVpFm59Q1v9tebM83uDi8zbuvK74HmgZ2KCd1h3WVY4tnGFM6ByFaKmLt2MCyU22M1X1h",
  "key36": "3kyXq9CyMv7PBsoCEbKn78FUzAFBFaAVYnMcGKWNeuvPYMth5H2v7PtymwhnRwPBb8ffWFNnn5xsU94YmNwySaSN"
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
