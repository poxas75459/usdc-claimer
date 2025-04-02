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
    "3jHCxtAYvHxSULqpgq2uDgMFcgWB5ZYTNMX1EabjzhtPMDBLX11QpPJSmikmPzpUiCwUegKMbzpZPBYJjx5KB9tU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QFfrxFtRfP8QRyVD5ZWNQ9DR8mpFcyGmJC5PnL5xuKkXLv2DKNBth9b4Msypob6V8WQGU5CWDGhqcVKPxyca2Mc",
  "key1": "5pnneiPoxM1NAgD6VDqrSgp9aFCiWhEhSiRoyuPtYYkx832NYdnZ7J7E1PxV4mHFRoC5nweLbBvkh43Aks1p1WJg",
  "key2": "3HtW5u78y76XixjF5gd9svmHVXcFdhB88qbo8Z8xZaY4MWpYcay5dkzQmvXYKKjvhyc7s3jvAFy6pRf8RcYnQRwG",
  "key3": "DS2Aj9kDNoDEU15vPNQxJBcXjkUU6D3Cn5RWwWLY5AGFTVbjLQvwHHfxnzWJxUSwxvVUARwejr9FmH5AmDYAWi4",
  "key4": "3wZyJQyvXfiQCpenigXFZwX47wvkhQHXmRfAZAmasYR7YqN2h6Jq6P8r6Rfvbv5ziikA56MSnQQzzE3kzcmq56C5",
  "key5": "SKPW5G4SR6B157GJFsaym5E7ym2dz5wPo4NPU7fJBTVXy5b9j5peGwp3psj8KMabZjYALGYhUwpNDeSp7gnJEdU",
  "key6": "4NEeRVGm4Q2o9TW6NuT3icjGjBdTm3H5h3j5KhS1FbicjoAYFZbbo6pqqpKdJQqhvEUP73kkCGjRFFjxJk7ycWoS",
  "key7": "4gVayzGYu741XjdnHp26vaCyWaizTRYcNgaUAsiMN2JkqcHnzihPmyiYbXoLwd4Z7YoijBZFHGHVMHYsYR3oxJBC",
  "key8": "2A57ath5XmEnoE5YUpn9EjmCWe1gHuRZG4mX4p8nQ47pNRtqzz5ubUwKC6hd9x4m3KaZo579mWY94NUmkRcGsPBy",
  "key9": "5JoiJ5RvvA5KqMqBddVNLewkY7ndw9ksZzqBtCH8HYCi8Hw6g7EJWBbvY9hRQvWonkRZZRzk5ZncPYDiZWcKMUGC",
  "key10": "3P5HC4WR76DRr94woG4GQLdtJdbYYBZ9nMGgrbPXzERaGkf5FdACiysE3JV4NByDWg43bCzNvGwd948gGL1rbd9F",
  "key11": "4heVRQLyt286b7azTfU1sQR5Tu8zdbtx3V5oi2RvA8BwtzZ4s7MymAFK6f5E25TeRZCL7cVhQB9ijYS9jL3bDAC3",
  "key12": "2ShWGVw2wiidaAVC1sXMX47gnTiszu3D1JXMkgbogZ9Ay5JvR35wS7cKbnRkGRrAhf1hiankcjuUB6mNaHvWFPPa",
  "key13": "5o1XpzX5pV5pHaNXGLTtHetCBaDuCC8i2b1y3YDCaWucFckmiVTh3REqFxiPR1FHXQiTp5uVLMX1RFg2kN8PeZWZ",
  "key14": "RryaRropjpUbUcUhcTNAhBb2sQ8Keqpx3iTF4TswptQxKMqLLhy5CcvCJF4s1eHVZhYUCrJJs1JiPszpdErNH2t",
  "key15": "ciwrAM2AY9w73yNhgoaDagHkQZGp9AzR6HuKncTeEsL6kmxUJH4grRPQnBfo1raDt7MNJUuSGpmFtDQqQ5Bgx8Z",
  "key16": "5wuG7jvLGDMinbgBUmn3XKSGzBafpMLkLEWZN612guh3VgvtLBjb7DkHEWexS6SJfEta424eg8LpNV7wHxJ4BP7s",
  "key17": "3NY2NNuHoLkArrc5bUHugsmQFsK66n6DAVMkQnbwnHWMprsM2pLGtMtohHxTxRiUBSVHArMkX5Yzysm7aaLe4dfU",
  "key18": "4nktwBuygaVWpTh4p8fkvs1RWYnfrgvLSKAnYNHNTcA1tbvf5JRtQvDcmXUCTWXzVA3hYkymHiUJ5WQ7VJZzdN7h",
  "key19": "5kKu6pfAHtcLLQ5LgAPbdG4ELS7bDavd7pna8WWCWYsgwiLsxvhDha1mJZJuan4Tn8mJFpF8Qp7HjmyV3YbzZCZA",
  "key20": "3k3C6TFWq9e8edDm84bwXwPsWCKetRtEKVDAE5wrBY1Y8FFYU9DZLsdpuGNnM3qMzb9k7cPxQXMjX9C9nFhmrTvp",
  "key21": "2hCZFqFadFDrmH9SMtshCppu63j6HTfuH52p1Xnxb2xSHV2JV6U9btDGys8cq4XAk3NAJSwFaDTDLCo55ZvepzNw",
  "key22": "8hygqCWb8esHAF51ELqLYF6kaUqXNDXsj1XEk9CeZzdevh4pU6cTPKDddBWx1jN4YKgESQL4uZH6GWUtfXR4XkQ",
  "key23": "3u5uSAzhzH2jNB5trCXk9mweBn8giQVcirzSqUDmTZ5oT1fm13kHg1HQ44TZGBwuEFKhQ1XBzC2Ngtnsq6xgdA2E",
  "key24": "4kx3Gp28tbpUKL3GHEPmVeQ3R9WBkAjRwGqL4VF8NAiAboqcFjGFthdA3mnVKdAVEvnGD4vu7q9qmBaZh7gC2KVu",
  "key25": "CrEEV2yKoPzsa2bA8E7fBGRiqtoGNsy8QUKC6TsYREYJBw3XVopZ3PZxHqL3UgPbGbVRn852KqYucVWqEkDBZR2",
  "key26": "4ETvrUMnFMxBrdBhomNojEaNxkDVTKqJSoCUsMUTRHXwcMAvsNecADLe8hW1DQYzfWLJUXo3tSkfu94PGhtTrap4",
  "key27": "MDH5FhEZT6CPhvsrHHd5m17gimyp6iDijd51CQ5TDLuxbt1rTnr6EWaZSpssKmYVvPsMQkviSigBULo7DkKx5x3",
  "key28": "61H1Wi5ARxn9ADeeuULvDLuNhi9AT2W4L96ebsra34WWntBs1pasNqxGFhxNMpB7VSjn1inGQRedEWJiiYT7duEE",
  "key29": "4etNooFVuKNiPw9o6A3G2EH5TtqDXLTvJAj8DPLVyzfRVcA59TiXifjqNY4A3Gj52vhohMyRLWkaZ4cbCSZBAmjL",
  "key30": "v4VaRD7UA65qD625HtcSKq1CsLCG13e3dSEm363eyvnALBoJAng9t5tUNvPtXBN2ATT1H96RLA7FyvJN2KvZ8mc",
  "key31": "4dDEyJV4mnJAsbDqk9NzML8iv4JJX98R2eE2ME8LXao9oqXox288WUS2UDULc6vj9zCrCUUew6kYL3Rk1ykQM9Mr",
  "key32": "3DKJUHDtqwPW1ryRbnCApyJ4ma8zxD6F4rwqzWW1At2fxfD6g3FTTGvzcWnBhbvSo3Vs3xLHTfa174fciY5BzXy5",
  "key33": "2cdAacTPzXSUU1Hns42ZztAsHBXantKhHuYUWL5xc6wKKfVvnZnfJERdc7Gs1ZBkgBNNjZTJFdqbAQfw7eLwc1YM",
  "key34": "3cyHiqcw516SYQ7GVPrCmo5JjPxcsNfARumiBXN83if4w74bbavkrtPgbhKMBMb8fVpoCNi6gNLMb3oUSsi9Rtt2",
  "key35": "4UXQKirvaKLXETiEDRencZMKH9JvFFcLKE4RP9bFxDhiWfdHnCgboSkbVtxTL5B4mtnvjeWGC5dNTbZtauW4nfxa",
  "key36": "62VanWNCYYbsx7KGsNyzP4BTidowqRZm17x4cHLRXgJm4Vch9oHtbKX4Gom2E7EVXoLNQmmPWCRq7ruqB3JMja9N",
  "key37": "3f58vySPqBKgC7LSRzPgfo55hU8bjsbPmWNJ18Yn4Yax5ZxpukFSYhdFwJsUm4yZxzEFzZdxcrpch1r9RsB6pnmT",
  "key38": "5dnTCaa8WkZRKr2hXM7anzZ6pd85MQ9NN8G45XCrZCT3XrhP8jTMsgHTKwXLWe9d7GAWsecs2NByDchHvLTtePV1",
  "key39": "2NLrZu9vCiTv6tBjwCqnwB2n4CNBBrTnGgQPFq42m5eoJdpRypk7kD9UDhRVgeJhVpoYwyrdjENB9zFAMpbGBq3c",
  "key40": "y4AHwh5ZMFXFsbxFS66p9mwqpqHQX21rQivDvbqBVmtvQSWVRpCUjVyPdvb2pAkLbLW3TZak7m8Kj46JQbwYyoF",
  "key41": "3dAT8Lh67KfrcfPaXdvTTHDXu1kbcjjZNL4uFzJfWGtQKiZri7vDFo3MDUVvBMjUoRktVxB1a1cG8cLX8sxsTckq",
  "key42": "4RDv9173zYqhWgMfZiKFW2b9Ksb9hTdL8aiH6iaT2f3q1TKvNqPhHMdXWUBbPMggouSYhEXH8hbKqbqxwdHC9We5",
  "key43": "2n38QbbL5rv6AeZHAA93TffzFkTaNs4vymYwiUkskfjxv8yf7f2KQKRhYjS8cb2ziFDHV3gf2HK6AVM3Frc2GLAS",
  "key44": "3qbH2jhFYmc7sNkVnp4RCR5x8E8CUc3EQj1umjf3mjgpoxmnc339sPPcepvGu6W4UEZhdbsyL7WsnpJUaSJvN54E"
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
