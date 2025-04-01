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
    "5Jp2sXdtMaT2aEZqw2mhxxfFzDmkvqW8AyDMQGTc3SKLwnyV5GwXZurSAdSJoPpdUruwfQ2vP3US1LHEoqrFnMaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ts4TXHYzAgriiTk6tjjLLLzAFzpn8MCLjkhMT6vHms2yVBnRpuuZTXAbKDLiD46jHumjYGDQ9a8RVRmmcPaxSJn",
  "key1": "5ejEbJ47pgRQDuEVD2zqFNJWEWKVGaKCKTD6G38jaC4EW2Zpxx1XSxgQbTKNfHVKQ9VsrY36HbW4itA4CD3A6sRg",
  "key2": "TV12dTCuG97c3h8XmtdwsgcFLxXNjDNW7UTMhDvUCussGWAxvuAUVpgnGuYx2bVUDNs8QwESXkZEYBtJbV4S3VG",
  "key3": "GUDN9L91HujHTe49grgYdyubVsVFdHJt9RuxsXodEHV5ZnBZhpU4roM39cXs4cXu9MJdzPjyX6sFFipv6DUcvst",
  "key4": "32G5oW3hztmN4fmJWDqERCLEPwTEziCUmWm4sWHTCXkZCSQ86gzqUejNv2peGtdDL71T57ViMbvMar5hP8Ld9SRw",
  "key5": "4H7z1EZdNnQmvzqZ3My5nFWAFqBzEHQsHWzcGB9CGaVW79DsjVfxYyxhipc7g26dsphftcPZer58FDzXzuawywDA",
  "key6": "bGMkFQnZTEfN9RzQq5d5A3SGzvHmQa6deWrYoVVFAVHVHn1MsNCUVD458yyXDFaDzQRKHeRNsv8eRQzcEkyWgfE",
  "key7": "4XfSWzY9bjuHyPMVA4ZB7JQLkWJMpGuBGKVSyZggBUC2cE5vKH8D7qgLC9ZZVJN2T43fNdfWZLZLcQ9GgzqDSCqk",
  "key8": "3AhBk49CKiBU8jrgY4nhS17dZEBa4yq27SBYfKsjeGtX49wwpKXUYGRenoWcwcHisPcoa8jtHU3bjoj4trHpjt5d",
  "key9": "57VwuJFk2XQ8W79dSYZjmphC4p1C4WZPKp9HBtKKQMtzNXoU5mPNoGZrB1kcPX4zU6JDvew2dt7V7k2zaGzKtACw",
  "key10": "5ZNfDcfL7rVytznRJ5NwbFAPxgvcUaiMPE6AMphX4txM9Pr1tCYeChzA9Dxyfow9BMa6YdX384a986uiZTLBC6FK",
  "key11": "4u6AV9DN5QwSwKC5t1ABJSLPNCp4kno928z5XzzpPsmnX9C6jGTvW6yjP3GmYTYi77DrCDxbLBjvkTsPVV5GtqiG",
  "key12": "pGQRRu4Fji6bf4f8SxGFos6fpi4jLoHJesVckmzNKc1xNAxh8kX8HUrCdXEfBQUyRuQfJygRAjcfzcmcRpiEW3b",
  "key13": "31EbmdiqS2ccXmocvZLZgZmUjBst5gbEDzpWnvkPQ1PvkXtZmSyvaZJLxHBpF592KeMKyVuxpDmWu3929w5V5DsR",
  "key14": "5zKmXmB7au4oRpSiRUoGyXaCWc6SBDSxCrjTWaZUrxzuiB4nUcLubp1SbxwapKPAScswwnL8TSCZ3yfDKBfxn1yS",
  "key15": "5UMAxywrj33qD7C6u1iFKuXAVXsBxu2jCgwy24YJxfZRsyL51BsNDzVeWfJkdxH5NQDwrS6aDrQY719y9sj1EBEi",
  "key16": "3Jx6tXxH5UVJdi5B2h7fhceeuynzL5YfHjHB56u5RqoRagsJXBBGJkkdwm8bA8LjfHfjNX3n1us5K4yRgPLs1vxd",
  "key17": "2zGhnG9Lr99tRjMJLwRMsWcWhFTGYdMhm4Ys3piHVdtFuf7Fiv4H7zi5e8zyVKoQKoeLyV1LyAJNGxxfWnxGmkev",
  "key18": "3ggnGnCFgWXTTiWtxB5gg1coYdffn5aKBKkmuRRstbb1HaVRxCHiDhJMjxhcjSVGvKQBUVEGV6912jnGpnApi6LZ",
  "key19": "4bENu3u6d76x2e7tWU99Ko1wwe5D4BfJWekkYvya9NuNsk8R9XE7jwiyUNayMt9gjvGaQy2jgLC2SCME5zDZGb3g",
  "key20": "64HjQAxanT7sxycuNU8pv5JUUjLiu1NbqQnVP385RR5e1QZ7g9tJRhnaENDjyWwEsv1HA8e14NiGXZMehijsmDp1",
  "key21": "333WUJ37ALKV1PZ29jA7KAk7zGiKZJ9YZPpWJ4ro7JCSPdNvFnXN4BeaR3Swo8ptuJGE9cEV7p3yBCDWZd5UW3tB",
  "key22": "3ctQVQTfkkQPpkA6rrPBSYjnsa5H7VRMMZui7bARwbarUtS2uvMbinu4wNj45gYkK1p89rVMLXPCPsiexJH8Mg1z",
  "key23": "mTVXk2A5kvCMK9aDK1HQxF6h6L8E3iquynBX4Am8VSzUtcTAUB1VZ82nmgJ6Y2gaNzd4V1kswJ6Vgyst9GJLDmo",
  "key24": "5GT72N8XeY7UTajk2Nb8KeAc1xVvfvinmvBmCwMUC1vaw7zkJGn36krF45x6s8QA216mK7RtuLQxbJuB1fyRaLpJ",
  "key25": "4bNUR6MGVBp1pBwHX2giqusEv7chn67ynQVCT9REgg7nvD6MeYL7urW5sBqcCmSCiHj8nfSfM92RtJPXfa3SvTCA",
  "key26": "3PL6ymTFYYCGquwf4c4zEQahcbE4GGfykM1ZjuFdBCD3gRvgZD9EzwbFxG2LHxFBXxBhDh6CgJ5MiZHMWfjWS2fq",
  "key27": "27fKSomQJP3uYudUbfMx4Lcbfd5xoGTwQxQjrV6A9g4ocjcBmc7C1UG1z4T5Na248NLttMQfbJkzKvvUj7GGDfZQ",
  "key28": "4ZmFyvsfEEVWy9ph36mUQ8Y1Z37ZAJhMuYZsVXzo4DLxf8gxKZ6MTZFAn3VXoZ3Yt2pqSotLyfVbhdihtS6oKjpk",
  "key29": "3SvovwTtTTrro2qhsr6vYS3NmXY8QXvTkRJXcWxxAdSs9QJYB4ZiSqYwDUDHSN5wWpuLiuZnfHm4w7nz1VWY2aWn",
  "key30": "3KyPAiXEaugT6ZetCDN811Q4Fo7fgFk6fT1tzcdrbxjuCxZv16mvjRtDeBLzx8VGunGVPDccq9aVbwSM64W65t2B",
  "key31": "2BMDeZJYhDPVv2iwXjYnnBwTZmQ2m5NQuJndfJaReYGb4ENLLZkb3G7sQ1iSva2uV4H7FDxgFM94mh34jDBVuwh7",
  "key32": "WnkFmQs9EPFZxmNFDG6bqw9yc83UZYL1egkfYqt8Hjv269m1pgFwDvvdMoqj6kCyKpT1Y4q4gKuwM7ZDP5vKsBC",
  "key33": "3BEdqZX3oTTyVCn3xua4SuhqohvnVJWigdp8oD4mcCCWSMd1LV1EqAyhw7txjG2hdXp1ECpC23M9QkudUYf16iw3",
  "key34": "3tQs7voNQHL1qvq5j9T6jFCQrUAUybWmbjTqK8JoYxGysDugVHvFJVDQexq5U8KXA3v6ZeeS9YjHju8cmnXxCQis"
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
