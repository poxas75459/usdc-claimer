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
    "gLJWmVpp8sBG6RSEyky61uLbjzTxXrkFXUFrXi2oRcCVyJbiAA8jeXMsn2LTGMUWQYg2tsyzPDM4oud7vmFPwMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3prAYPs3V3sRk1LP1mjCmapmLu3Wn8dihL5CEgczDGuhMT3RmQh15QJQzjW6NERdybhtq1fVuL4EvWH5RoKTruGj",
  "key1": "3xuJJvEBjmrFWmZcYoExeVUa52ge2TYiB6XiCAzcxrExjzZrCywyWBWTcJMMw6eFris4G78HDMyZX4d2aFDMCvAG",
  "key2": "5MsFxRofB71E1egaMxCEghxv3mirR2DuWA1qx9AUxE3pPFtWqYp9ECJQUYKSGRHdB2nnyeGfAwcdVih19LmxEgV9",
  "key3": "3tuVLFP8wVx19LhJrfjCVzXVt9AKFrLGjH5H9j7cRr8epdUkDkRxUvXV1Axpd2fnAK5QUeCaHc2TKVqHSy1aPWC4",
  "key4": "4CTHce6QpTjGQBw9JLsGsCz7d9WDzPNs65T7md5pqfvTDiUjvwmk6bxLWkkrxnxU58eRwpE3pmtfsjC9bf1cVGKi",
  "key5": "2ei8shxFDhgFMjQ3jHvaY3masRWbGEGTnPRPvC2Rt5p5fY2bHxN3Ms9WViXm1T9qDjWiV7d9ZR4aH5tFka11vbKp",
  "key6": "2sQjCWeUQ9N7zJh3qbnN98VeWtw1KvSSfySc5vfd3VhZ4YhfkAnPySSgYXbmk1DddYdMjfi8e54Ap8qRSEeX8nxz",
  "key7": "3ic8fhzF11RNWN4h6yocJzaXq4XNMRSrU1X9h7aereehnST5uD4XDhrUu17RGLRPYc9vezjiv3qgcsKUbi93tZYJ",
  "key8": "5BxpGAxVjvFWiBx2vY3DR4KBRegNEzRNkUziBqmEeD44epNgkfosFFZQAn1hQaXk7GZKMRxwM3QpsurG9uKuKu9D",
  "key9": "23mZGCqo3DZ96jrifMdWAru5fMpu1grJ9YmkXqdatNZjpuVLsicPMK6o8CvagmTdJnpVxKPRYWYCv6yKuV3RYFTZ",
  "key10": "591QCTbU1aSJLXMEAwSzwehXxECG2cCSqmVSXbhxSGtcPoDkvqr6xjtxpKoS2gFNXW9zKCBBUJtv4p4JLTRjqrHV",
  "key11": "5LcWYkF7ZpUy7GPWyLqn1XBciJDkQPTaA6fT8FoPguLUu1Fd5gPJD8QcZe8gJ7yh2UG4LSUHY4ruPjeKu8sdsCuw",
  "key12": "4599QwHeCxaZp42AJyhb6Z7LcRkhAM5YJHx9YATMHcZqwNHCPbUR97meuFjpmdoepvVB83sfGYFYZcjCHo51RYk4",
  "key13": "4sa61QR3snwFZyxyXbFkeuoKJ22bQMXya3bZXFJgd98YRH2tQPJY32MLsBodHW24TRqTTLu6NKogtagtZV362Aiz",
  "key14": "5Qc2bucJnsrLBYZEqsUETrYcpTJM4mFhPyM6eo7vFv7WPY5tX7efHLxa88BM2VhTocwvLaPjTUzPgdq15MBTrzQu",
  "key15": "2zDp9cj1qQKB7wiQLbDArybw4dqa8bUmMLZu6jsQWwpzrSXxD1M7dcoS8wEWn216GXquZak1fesPowcF2uw8ot2U",
  "key16": "9FznTwfwhEZy2LTC5Pyex65tjEP2vn6s9bTBBdRGBRcDpV9HUkxunf9ewnkV2HiWLXJCitcFxgVFqrzHtNVMxca",
  "key17": "5VuXhBbx81hHuQK7dSsZAXiFxQ6hVW83RDLwayYuLB2Y6bWDi2DeTrz1KmzQ2AGBv3UE1u5BD9Y5tJUrjji6KQpN",
  "key18": "35mT9gdpNm6MxZP5wgrx2t2nSMMb5NFajsTJ5PeUksrDScEJd3psYz1FQDqoUvW4bhapffocP6BiYeFWQSShQyCQ",
  "key19": "4UcJYQ1MFZcr5ZakQaJbSxUr4vzZdGcLsJozHAMRLQrerdENMNnpF4zJEpM8udb8kSzKkJDa2zmcw39UoPeUUbPY",
  "key20": "2ZXdDswjpGpnpSohZxevBjYmkGeSrsyfehLnHoHSdAmjzkcriuUW56VrgC4d74vEKkSAN6fpefL6qmiwydamQ1Hv",
  "key21": "2eBruuLRLXpab8qh73KgjpKiur7KrbPe3Jagj2Hq4qxB9dgXHsEQxBCHzEYr8DMqUXuCWfAkMbxyXbhvG4CYezjZ",
  "key22": "66H2amyjS5JXtKzEUZga1roGmd3K3XAyS7jeM4spzvQtJS5bFEyJoaxDBJmZbjeDCnhozhye9L95EbLHrNB2Xgwk",
  "key23": "3syasVpEvrhpQQTaD4aNmvG51SD4TuTMp5osYMpqrzszXVQW6ogSVnFbuYFx8mNh554jHCaV4pJAK1JexjvxjDK5",
  "key24": "2zZUhYTh2AzeNiJN8ANKCLKtEPG9FaUFUG7dZJcbPBBdDeAnkvhmEdqcWE82s7N8jNoUKWqoaQmxRrmnFfyD7WPz",
  "key25": "4YaviyzrXtZQyE9qeWqyuQedz2u8ZmMThddh2ur2brd3rQRvg6MqWcCctPnAdHhaDAgSPxGWnofP9FpG9cdfHvd6",
  "key26": "5Gr3wxiFYzNvutHUkFzNkc42E77jx3qmETtcG8ZdpJg3VrEm4E7tTMMNroNtnTa3WH4cdfj39kbLC7NizEQnSeRB",
  "key27": "2W19RfzbSmubhg1mZKqxgRrZUEYXnbEt5kjn9NZRCxjbeCkVdN6VsB5r8JLwxwX3VQwx5JhhF38pZLE8f81pDdXE",
  "key28": "23FZQ22HrSiLhfu46K8piNtScNDBVWf2md1X6rSqPUz1sePWQjk7i92nHEuwsfs9FJA3wZssoBn72yQv1a2mwtK3",
  "key29": "45VtTpHsoeSkjeCGT7jKUMZXQD8aMuWFqYg7QDVRVyq3vUExW9v6iduVtJHq8xWT5Ve9NqMEac81xVVQoC2zDsps",
  "key30": "5jUC7gSZNhquuyGG7VXNxGjvgSjyK4nTK1CWyRouFj2ov84on68Q66TTFYkfkkVHUWvCe3tJTE6KNSgLJUn1kaHh",
  "key31": "4jzcaBPBN5Uzw2x16Kx2wC8zx1ziszo8hiPnUDo2HrtbYropGFENwFVp9LHxKn46VryfUopXaNqugike19euL4Uj",
  "key32": "3pwigeuAaCM847TFgmfaFsUFuJqYJLJmtKM5r6nABzCCEBXu8ArGkGEVgUF23wGSP6UDBNyAEiyBpCv8Fg4JusAC",
  "key33": "4jMyhobVeMYA38SKiWu6eNTHgzCViGhDk5uG396verNMSWT3Qefbts62PL5tM3p5yzJ8cGtM7VostkUYP5mSUur5",
  "key34": "3fNSWtPtyhJGGaDi9n6gXXar31RqAvzgzn9dyKhkdyDQxJEZGaHExFS7fufTmExTNJ2GTpmyteB2jmxcwESbeEsK",
  "key35": "PGsPBq9cC56hE3xfQvnk9jxnMvzz5pUQGdWTyywzg6cqjJhsoxWPT3MBqqFPzbFBEPKuyARC2jZ2KqW7i9z5KiB",
  "key36": "XfBS3qyLEyjdGaMkGwbUH9ZSx5vzboY3Fvw4dsW6NFPuZaGWqtdGcraSRm4f3wbPd21kxidFX6GJ2UVXWvNMJfg"
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
