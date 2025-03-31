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
    "4TxZLRh44hRmeCskaVKtQw8hAWDMgMgFZKidJTY2jjbNQLE5EVQ3WLL4EdGS2jie7bCMyhgf6sHHmwaoEZLex11T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rpEBZi2TRUpbAkZwdzFEGVvxoir7HTHAYC9LoqfxpEUe9dd94oGaXtNxP69anr23ENXuHFphxMv82N2BiMUdhWU",
  "key1": "i67P1U8VLJqq2ftZmB3kfyrYHTrJdQhpmAuC1BVynXnnDY7QuveaeruKL5S5JogDsdhsEyWoKf5Zgdbyn7MEqg3",
  "key2": "5a8dCV2b5ASrxs8vMyRoEP5KEQZaYpYontdLDSDvHrBivhgzFq8qErzt9yJn5aMzsBJLvQbhAmgbviypvf8rKSUB",
  "key3": "3VD3AaHQQvL65FFv35xN9pAkuMn5XWSubjQpKh4MJKzAfWmbPhgY8DSFjHq239vfsFd6gKjjqkGR243kdAFRpvdX",
  "key4": "5LJZZUcdmbkwoXS4Mt7m7rHqcMfZSwY3QMp6fUGZ1smx5iyaBu6r6aaVuND36aJRBN75nWJrGv2fwSKt4UCxDCPQ",
  "key5": "RVpG6nqfvNr4mrZdh6uU1oHD6hntdtbZwKGgsvBnjUyqrmSZ3a6LLT2pesXhbF7n6X4BJBkJJVKBKUjSdijyCMs",
  "key6": "5iyfPpUeV5NxpiVksJeUtYtpUBLVKCiFmQPzt37fi17bEP7VkXGPLPCEYHSHRrPpHZUVcMB9iQfe5UgqVrLVUMEs",
  "key7": "7TLLAf2yWr3D5ZM4hgYeVWLZmXcSod6azoy1t6RyD1W5HKETx8PtZwJy5X24PdSiHS211pzyDf6NYPvchCLddKB",
  "key8": "2dL8akMH8pTWLUyuGYv12Zr8LkjT1mGDC5Si964VaTao6o23mSo21CTmiKk5sTbvStpf9Sahajihg8qo1b3RT4vM",
  "key9": "2dhWiHrXix7o1ZHm2wJV7tHsrJCsPJpkfJPkfcvnqKFMgt4cjrbZxbmWB3Rx9gTqkebW3t7MZZm2hwcm88F4ukh6",
  "key10": "1FmCUPLkMHuPrUVq45UsPiZddavJHAYEWK7A3b9rAdycEP65fKXwBMjtANKLPvz3QznaWeWNWZySiNXZzuZJ9fJ",
  "key11": "5gMaeiiQJtXsryXu4dZbr99R24rYEBWS7sBMrQoZdTP6JVHtCfDPAuRu9nCUHWtwmcveT6h2odxuuUKEW2tFmcRC",
  "key12": "vhP87LHma88QN1W95fFSXrt2gkvsVHGQzCqEuuHJoD1StCakFM7g3gCk9XgvPhj45591yMVsRnMHmYwqMGsrLat",
  "key13": "39MUWhaSKUTNKQKcSQSq5hhRDEMRWww6VnnSki6p6rVAkFZtVScrAwMx6zqHN4VNNbK4hWKFC8wGKktWJzC8gqxV",
  "key14": "2rjy3tD5Y447i2LTk5fUTGS8XXrBcChyx2BCa86Dgy5rerPcVUJpsWp5TtwBDs6bt3LZi6MXqzENi5p9E9UpZVMe",
  "key15": "3ZTBffr7JqvNAXFH1MNiFzB4ZPiFEt6DDwGSULhuTz8BidWcZoL4ihhVTtZ8J9bZ4VRGmNuEyiFpt4XsdtHemsnm",
  "key16": "2ts7SyVB3Q2Whm3C5onCAquzuknR27zBHqhdGozM2pbgZzrEYCQcFm35h8KoDdRuj5N6WM9MfM3a5VdsfucjXDT2",
  "key17": "5w3tm1VgVo6P5qokkQZ1jZMQ9KRCDN8RFCFE4N8okREmsQvu4tBPs6VUeKbZcVTwZdcJ6JewxihAHv9J9ACnui7M",
  "key18": "4ApSo5cZ3w3d16xnPY4tHeQFThCUY3MK9Wmn7f6bAdar3a1rVsAGBBuugXZvqVfMEoyub3c96mNBZoHHpo1DrHuU",
  "key19": "2VG6W8EywQtzncXiNDLBgVCPMH4bRCb9hXZyM1YgeCM56sR2iP5iudZ5Xn1XvqW51BxG6oAAVW5wqMjyG4gsU2xY",
  "key20": "2ggamBX7127TBDup3KwUGNrSu4NmsPVSnExQggVGbaTCXfWuizHaj6rkwDLCizXNMe4fxWpxwLqKmA3gZ5wQGoXb",
  "key21": "4XUiwzHBmSA7p5pXrcw2GNp6uBo2Xsk6itd9mWpkzsZ75cK9CG5pqCo5jHM3CHe3AfvHhqFk4yctJBrK3r6ERQiE",
  "key22": "AFhYxxmmmYGT3nygH8GPqqPjaa9hEZq4KGRgiLUyJhDEezvciZpnMGTdu9EWRhgxvsavMGiyfgwT173WynRJHet",
  "key23": "4uSWKh4Tqfo1EUiMSaPGrZmz3smBCQRaCkjmkYmXac2yeQBzxMVqLhcFRYm23dxjQyHDUCjzy228eq98eT8s24fU",
  "key24": "5yAYVwu2uMuz3EwTe5KUuYWa8ouFjZh4233bQfQAF5BDWvuRB4X5WpgnAq5pAx4UDBhRjWF76G1YpkQ424HS5aCf",
  "key25": "r9kH6vNudUPNwsvRuaHW1U398GjQfPEJNx4d3WHvjcuYa6i1jsfEUuncqoJTP89uYJ8Yu2SSPVvSA9J3Awwuz4k",
  "key26": "2nuZwubmdRWLRc4e1JSAnCW3XR4k7WiXjngrUzDBgjAGXsniaw5jNvuRFRaLV1eTb6iKjJPaKPaVx2pCoJ3dBqXx",
  "key27": "2WdiysdoYpBzNBTxxS3rzbfSWXbxpv2QrvL91w8jgqFUQKszehb5CsosZh57MQUUcSetojLkYy9nKHVqBGp3v1v5",
  "key28": "389TLFUP3RRGFc9AyrEEb3u7HWCMaUzLYd16tx5UGu6ADTeMnWxjAJcAGiyNj9ESdUPQb2B8JW4Gv338EcRBx2eK",
  "key29": "2N41UdiSyPgLxZLBX2fLxYZ521MLEGBrKycSbDk8pKGcdEffx6jwLxwxPsBGLrabvYHEGxRs6Pd11soM5VPjL8Zi",
  "key30": "4yXvLnLkQQSJUzXDTVk8nQQbarpfNefvJDJ3biu2UygLeph5EDWC7tVHr5qhbN6ZzxCH2HKLUSxX2H24hiBz7mBz",
  "key31": "2JacuDpSaYaB7r3pK25x8pP5DeV9nenRVm49Y2fNKbbJs6LudajD7YF8ruUPWeq4TwmTFuEeNN127oYBoRPSWVre",
  "key32": "5pQoH5gvtU3NKN95jy15N4tFe2UXvjVBNzwhZcJiJRiHxohmCkkthHCH2Ws6EJeu3Kjo1JCFtduiUPRNVov9vhvD",
  "key33": "5g1ggMHe3a1TGZSm6TSq7Hibqv7ShU3gVtNiWKg9M7EN6sogdeKdEDQyQS2b6kswd1p7YjjFdctrFQm5dr6iuBTB",
  "key34": "4SmtVEfPmyEYUEPbPY6vB3RzaQVrRa6nw4E9wxA1dknPc3C2hpkYwBdu3rd24eV3uVh1wNzvyGKWLwL1w7Aif8HE",
  "key35": "4Du2vWUVgJrxg6YasTVwRmyp9GzXguQR2RFYkZGRDXBuKmmxckhVoZ6sGVVXv4rbxcELwENGtETDYvW6yK2woycj",
  "key36": "3w9Z1nNuVQk9L15LEDHsvAx7UuYmqX6FPSxc9JJeq6G5YWPuzfSxbZiY8QNKgePsFRtoEqubrvwBqxTsPABEAqgE",
  "key37": "4ejSCHC9ckAdsmbfr7XpZwN9S2gpvjjeFyLqifuHQib1nytQAX6J52ahQBHxusB8aLFMDcc3yjD99oHC2TCUNkLB",
  "key38": "4AtTwTnvDuhhZ8RpsyJLo9ZvzbJprYwx22VtAwp8FXsBqc7MkdAUfh1CwWXJeu6y5gZvK6TKQ2cG6XBkbieRgpNr",
  "key39": "4NFkBU8jqZvt77p99sf1M4GdVx3T5X1pUrLBHnuU6awYjzcWXPKHESE2FGPosxWwJaY6dumugtRUwSLW4AiFoFi7",
  "key40": "5g4WTmfwzx9QQEXSiKhjYxABDtaUF4zrN3ScefsNc4Ce4zLXsPGtLVyyNpvYD8iiakxyFvEGpMaShDKqu8VkZcHM"
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
