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
    "2LSZysoehZFCL2XHtwNhiw2RhiJwgTKtQGSR1XWLVDQyRc2qJkyJh7j6CfBNaZP7G8558AX7R4PF57pw2T7MhGDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47WuY268Zy9VvTRXp2NySRAawtTnbqcWNu6WsMv6wiU1ePq7ZeKxZkFZyogaCPpg6zr2HZveQs3V7uBQf5p1cDZg",
  "key1": "4M5PDuJCQ9wzoDDEc6UpXfKVv4T3Yc44xyy2mV5XJ2uy3Nhg5k1FFz7oVuePNceAgJx6736mmewa4MozkLtNxYLz",
  "key2": "uF4BsVSNKH7poNzzLCdqbRgVKVsQnEYtVSSK9F5fRfyBPpYeTrtwjKo1M45kfzXXBqtk4J1Vx958HXi1CS178tT",
  "key3": "5vdxeotvreLRmNG2z9WinYLvAZQE5VzNvR18umwACfBofezSfHWqarzY1usoAZ5evtG682LjWYECvqYGcJuDoist",
  "key4": "63gDSipzxbRwhjVJ7ErvELm7dVF8ruVZbXXdbUJWXMprNJUJJZmCWYtDUsjrJKmi3GcQVdEWwyHe7nmw16z5vZjz",
  "key5": "32QN6dN3oo3VF15qGEtz3xRi1DX75DudPc5H5vbgFJWtpCvnxQ2BRHXF2LhVA8GWXS9MBmBu6LAWjFNCZeAkPn91",
  "key6": "28qDBE13CYN5cTu8VTodSd8YqH8pvnAdqabs89ggjHVv8gj7UAuP2T8zVMjXasN9F8gaBHxPKxGSR7J4kUqHQMyt",
  "key7": "42roshkbzyfNRSNAYm5zS6ZEDJgAssv5AYwipgk37mHByu6EQwJTyHvayVafK7TRjjpvq1yayxCcpXg1b4BMYWCY",
  "key8": "2a9tozUfro78dxkrwsTgMSSZzVbN71ruZkrh5hg6MJDJUWUWZTaUbGBxEhqTaWgB3tWeoRECVxK81P9XCuhzUuCU",
  "key9": "2RjuTsFg6qCE39KegbR5Spx73LnjmNuJa3s5tkkmkLA1GH6H8f14MwoBztAxtS1DHGRG5ozDsAUxCxTkwUUdUjZR",
  "key10": "4BiuJDDjaEMXm3CkKKgjBt5zYfQFAwmmaGgxJujeFfbsLUBt8DtAywinSQBgNEFpnaKBhxPjGr2Sbt5mEH2hP1MG",
  "key11": "4JAR4Ts7wAKStBk9dh8c9GFgVnwfSFyetv2RDvX2RdGZ5wdXa2qaAKZZyKtogkNh5ERGT1eNkbGA3e4vEGr43uB1",
  "key12": "4hqFcr14Ek8SFX7brjnPN3viCXgkYs4asGEEnDNtAzyXYYNmw9S7RfS9T8QaWXJBw5sFUYfKBfpukpm7sooYXkj4",
  "key13": "3M9mwpUncDgkvo49mU7qozjBDjHq4NJo5Th3MM1zkVemA2c5HanMFKGBd36xiGjtbUQTcEob6EDn3Fqko8kfJS1A",
  "key14": "3E7zENjN7F4o5eA5LKetaaNgEmShhYgbDyv27BeeVxxAxr5ZQVQGsoWprfgidTR5LEccNUvpr128A3oLrT6A5ZYS",
  "key15": "5nVg7zZbgpQUvEDRnF6UMAWGNHsxdvoT3DczeQKR5orvUTsen2kSGKFwnfAViGWL42V9mbpLQhPYFsKHmK5DkqXW",
  "key16": "5fXuV6QQkPRd5SBTR5HWdPgK2cf6txpUrn1NFevyy42gAr6AbyWwrH889GDXUnXAhsKHzFETk13NsiYxKC2rGvG1",
  "key17": "2QdrCJj9BwziBBugyrxCVhZ5eqhCiJQkwYzg9kS5HBoFFTtWVZTH5dhisKjQSLSdcwRMxTWrF7NrXsbT6dAamS9X",
  "key18": "33oT9WPxnbTHXu2uFXNEnCWyRT9D5RSbECWx5wbNvmKLYdwTBHoAuQeWPd2kAfesxsmcc2CAxSdj32o38A11hGxv",
  "key19": "5B1kHSRRAFSghLixAJ7PcCyPUGPiHzYavXR9P3ccSe1dk9mqcnLhtrdZK4J2k34JgVUgm8bsVT3NzR3iGgzuik6g",
  "key20": "y88vjEafqEvohDzM6LkMNbx4Yic8bXvJ9oDKRYMmvMHLzLg3c8YGR3Ev9751m7T9Y4NuC3NE43VrfM7dpTEthxL",
  "key21": "4RhCzXRXJBmDjoLfYCsYkWVE3gzcchKbjEcoPdxJrwZtKbetYRcBUxWx1EPUkKE8h9Fdudxe784knvehb6KeBTDt",
  "key22": "4tTS3PzmUMhba8QbamkFat7PB8dcJkWJK1aPNu3C99VrCc8fyxFgkzk5tuDTiHaTCQdXPMEyBVCRh6eDjxhXX9gS",
  "key23": "2KG5U4VYtZikYAMT1dBr2rCnGauZzrf9V2ZDKZba9475Qa2hZ3X1w3n8Qj591pPLncAnDCwbDjW15EddMQBnHpvK",
  "key24": "2kTgCo5Y89ueBDLmVSoCMrMNnpQedfEwskp2XGasRNndPaZVYTu3UGp687Y8gCZq7EztNcVL5xZMboW4sud4762r",
  "key25": "5cxYV4uBUg6pBNJ7AkQdGUSp5M6sfvTkcR2zMszNjzh2awT26N3S1nXgTH3RgXaySzBvGN4KjwpU1Tg82iEUbNZh",
  "key26": "Tvc7k3sGu8kqnD1HgrYLYoUH1TDwAEx1eMv2LAeZzPYt4yUYGrqfpA3EHEHacVv5rZL7dRXx3VU4op65CWEhMhF",
  "key27": "5GWXTuA1di8A4wuGBWv1Y1RoQw735Xb3CQ4mCDuyonV7ec225mJtjhqZeh7yM3rM5cDFQoJhvNsDiCrDn61xUcBH",
  "key28": "38UXbmHQ5qVW6LyiZFQTUx4p234BUxFDyG5rbHHxordLsVUZzJFZKiqgNyTpPmMFRNEN5HwEYtX3PUqyib1ycAPB",
  "key29": "UWeVgW9TxyXrR6qpGNr3mxPXaNH8sHCWAgUwaVnE4fbSXQk5gsH8jSgL6Jx1cpWbM8VCzR8NADk5Fh3AAK9F9eh",
  "key30": "5mrnQ83KZHHmh7YxzJzCsyAUA7cHwXhCvjdxKmDRqdLbqGj9kkT5uPxgugdS5fHWAHxYVZMMESQ7BVzPULNCyVfV",
  "key31": "5C3xcXo3uTYfpeeeqfBQZMAZhgFjndx1rg5ApCypbijgrDb1zLKQrsSNzgEW6gNpkEZRCp1rQChAewhYG7paxHqj",
  "key32": "4p3TZVo2gF2T5MTR7EpK5GcWe3iVXF3key3ekcAoUeLfVzzbtwsvF46aUkaL9jwNiXbHJWkXJsfaqk1KqkugEDu",
  "key33": "5MpiUTMRYaRYvnKzCeZAJeVg9eMJfL2smF1XBWx4ExQwJhpsEj8HdTprPbm2bfNzN34kxDwhX3sZzdj5uDfQsXQ6",
  "key34": "5Se2nseBDzC4JWQEye4xaSqoJwreBK7MVmZVsTG4u1vqu4r3BZ1RNwJYX5PKZ62fm6Z5fXKprwnyGBGn5SDDZKbh",
  "key35": "2NmsuCMhzkDEeDpfFDdnpyEzkgth58CNLjp6RsHkcKyCiPoHGdCgkMuqKsaoEV53Rt89rCSaxVosg4fDxeQQt3KF",
  "key36": "2YTm3LGkd9QJUfAxP3dhRvYCoTLvQsxDq2oNqdqn1dVE26PT5DsBBjW67SgguDjk4AerR9kNFwNAdvmVyZdFdTZB",
  "key37": "5tUv3opX7NJjtT8Kq9G7Ahs6z4J3nq8h52FiL9kG1FMbwSZpuHvyYL1o5TtkSbsopu7odMQBKh8LUyETop7CSN4P",
  "key38": "3tuaahr5qtqttmGDGY6TSaBz3QxxtMRWN7pyXvQH3gnJLreevz8wbECzDqNQi4MSJn6sVbwDsJJvfrbj5whzA4ih",
  "key39": "4s6sbZEfMG6qDHC15NoaEvLm6gM9MhLm4m3KPgzausrNJX1tChu71rYmT7k3xRbwpxCrYQXCjDoQnp1HYN9LeyFC",
  "key40": "5sX28Pkv1LYBm6QNmsLBjTQV8autCKkNRBTjKGDoeAWFSrzQvsZUuQL6YtXuWwqdkCPj2cKqwfmtCbT6GFz3DSfH",
  "key41": "yKQAfkrmkGgxRJ7U3Kyu4atNQbqWrMaLm4E3xox7sxWsgnag1qqvort5ervU8oo9g7qBWun6s3JkFMf5MpwQksJ",
  "key42": "1Ka4hiZR5eHDe3DaoxZAchu2UR2c6YEAgYkhyja4AzcqVjnaWByT9ky3d79iuh4hyVVhF9D3wr8znDjTQwEaEUY",
  "key43": "5Zwsn7Q2TbjtS9fexKDz2QFtYKgvHdRvVppaTFSYQYLC7PaRs8GCjvjShWwhKjD5Hdm61ha3ArTYVEMa6T5wbJcE",
  "key44": "2DQ9nqPJSeLNfeaJeDSB9YHheKFVHaDWsJKy5EiEocaW1WVXLHaLDQT8JJjCZi6gav19FH7Ly4g1Lw6wQdWVewTs",
  "key45": "2pB1y7eBPFtcWWSwtgCEx9iHcBjmgxxB1Y9tGReBiUvQTwB8Xh5rZQJC8e9x6nKyx5FmfbmssSWjEHeFNx49nuzP",
  "key46": "2DPi7ujTmz7Si1GBx5YNqQToGZWLcHtzrPMZRD9QPL4WVM3Ln2Sy7hoV7tg2uvV8aTLnm6VTnBQe9ftgVCuRNNWQ",
  "key47": "JZo8yVNB2KmSaEQbPQm3NjM7dMLuWKXXE4m8uhBtq4WjirjsqfiXQh3nSTeLEFLv4qLMK8BWnMt7d6mRmERmg8i",
  "key48": "myzpEiLLGucQnAD2NCvDyV4Xqi9aU4weprjGpcPfnZo1i2wX8gsSxEtEz2W9NCvRbga3sJ1uzck86FCgoYNNE6S",
  "key49": "2M9jWEeLwBBj8xYQSsazMsesFFKnfAA2d6f142S3V4hoydp2dTx5aJPbmSSuqfqoMzQeGJg9Nwx7FTZfLm5K3bCC"
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
