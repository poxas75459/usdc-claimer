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
    "emP8ZdFSyADUbDRkJPD6igBGhQ36QzyvCAWrfmTut67hpy3G4Wq2NDrC6v9ECcHHP6zQreoz7gHmokzXBt57Qh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aqeMV3feef4p4bHjB42oMTd1P3Fjiv7eDtztPWLagdxmBUJEPr8q1CAyP6WfyKebcVSbyGnpgqoe1EurhWw2x3a",
  "key1": "5Y6R8gbtZ8LanKRgM2QiuuWWv7D3X1bEtA4D6N7pBDsoFiE9qQZy6iZbG3CMmUxYVvDUQGcqekDVb8kKH93p8p1q",
  "key2": "4T2DjH1ueEBPUZqnoSrRx7kH5ggVGDhGWBAzJiVVw6PxDZx2UZxrT6NquQ2wUSshEqZ9DkUhvUBSD4cZvG1Na3E8",
  "key3": "48pi5f7JMw3ModWN1WqNEQ8bxjNNquwVDBVFAZfHFT1ggZMhwqynCAbeWJs5b28RYGcbuPnPzYrid6EsuALPYnQu",
  "key4": "3SMetAHcFb68C755n3eKR9CQhd4beCvJPEnFCup6aG41KAfHU23EkxmQz8BksnkWvtzuenEoJextJMep4GKjfaB9",
  "key5": "2HMpwwL6NfNhrDfwGUaDofRykhxxpCvsMTDxSQZN7tJJUmLvwGu1TTFmRCgGVNMd5h6N5yezafg6yNr5zLQefXVX",
  "key6": "4qKBzocVAsBKr7KZ3DBs6t7T2HABJrPHPKpamqG6rJTqHepe1VsSfaHHUS8uHMoMTpT7LbSf5sbZBpKrFriGRBFM",
  "key7": "4V7pVbksp3mWSrGRjYhrC8bzNHDYs7JtB7AicLzQyvApxYLG3J4ddZGkM69JnKwYQ8VBqmQp5gCQeEvG3NX4Mwrf",
  "key8": "4C368KGGi5bNSJx8kQpCmjD85TBiTGEYwp7kkac4YonGbbjYxjHDA8RQ9ds9Cyh7747EmSBEy4pqPo9gc6nC8rFZ",
  "key9": "2Jpu6cZkNicLMYMR1Xp2R5nRnoZf1gDx7RqXNTdhWKucvBGDWZ9hK9tC9bVrGyfCps3ncLYry5gtniBpaPAMGFBX",
  "key10": "22npZGUbR3ZwZauuukPbecyqsyWMVDM9dBQRuVERSiPhWGnvmo9HyiE45jtszcJkJjJgDPqwUmfv4vKT6nKbjoZu",
  "key11": "4ZesfJekxWyTDQyERh7Q8jqFVX4kECXTqnSW3aDHoHQrk3fbVVg1m5q4pWQMTuRunQwxDU2pNCZrNc9cZa7LuRTT",
  "key12": "2ZbmAyz1BtdTHmevvH9MqtwpJ7MJgUgojhtF1tBzYGaEozi9VgYQc2Eh8RpnK9c73dEjsMsZxtBErjB8jxSG9oSz",
  "key13": "5pUJnY9SkGHhoCL7avqqwyuefEGEoFrPtFd9qUZs2gYiUBgRtYEpVtbwkbKKNauKZDkCCA5x8hgTRaXV1UhihsLE",
  "key14": "Rvih1jmUgvskhXe2KP8wehcCFgCBYaBrdgJ2tQR5VLUfYjcCKRdBDvHxpxwM6ca69ZBqF4zy19443sb4AnV3hnz",
  "key15": "2Emto5GPWRHRaPmv7EFCngQaadubWX2JboD8GngxvfH4GfguSngF3R5XyPfqUNGmVrZcHQ3TtiaEHPQkjTmfkGBN",
  "key16": "2ptDKu6RPhgkPq3NGgKXAwZgZ1nQ5UbgNGsTPwFep5C8qrrtdZqfVVzS8y3C6MoQHskoGm9pdsLTftZupTbaCdcs",
  "key17": "p5MMmJ23WFjCc2EMRvQE4Z9BPdBCQ8q91BSXUPz1gioav45gJLgqd7V4vECV2DgQjY8KoCu2prL235MUJy1ydni",
  "key18": "4K8DaKEcnL3CwT4TM7xTLCKgLCBv8GBQUHkeviVSJx5wpn2VLWZWSy8MLVJLUXnL61FqUpSoX1NgGciLAe12TgPh",
  "key19": "4NAFKn8Q4nU7fCTCxxqcnq63o1cDGqtJzG57c4Pq7dmWrTgibZLz2Gt2GqDHLRknrZcLDLPV1WgEmhySKeAXfyGi",
  "key20": "4WAmFgKnkNPVUstLfFTsBN8wwK3rBWaRtu1R2wYuA3FirFG7cBaZJ18UEuMfgKtfwU1eEhko2RBrxrrr5Luoz5oP",
  "key21": "2r9fVv42gpv6ab9DFV2Pv78zc5vzvhse75FTnURGptRkMApGcVkyQGWYD1icRwnGzvDDVkBwmEJBUqy4ZRTZULrF",
  "key22": "61hDEj8qmEnShaMy17Rydn8JxFHFrp6oXPkeqdNx8M5goNYfy2Lbwjs3NjeJeFJCsakCvCwL5hYde38Mi7RsDiSK",
  "key23": "jP62V4iXbrqKuk5ExAxLpszuigcuLAJr2HuqR2VgwS1QSC8mpK5Hhyb2tbqTD4PZNApBTRNdqYvK5HZ93eow1KD",
  "key24": "3Wu6HydbUzy4WKFL4fnBKkKXcqYXT28gPyEwRhD9e2UrRakq43wpM6p2ZB8Y6MWZtVTevQ65Kcpp6PtbF4LEzkCv",
  "key25": "2UCtDHGT7rPwMR133SLZ9abbHEPEW6LPxEpNuHoGdNK3eTpvych7tWYxAgxQ8DGy6natUhct5cN4aSzRs59kHS4k",
  "key26": "3YvXeUwzNU49Z88w4R29j4DBP39X8fPRfELKQyUyuYFTc9mhYyvaUSy2wRGV1VQMCbgaULwQzzz8596uSVZdHz24",
  "key27": "58jUbzGBbLC1sjHv4rhnJhB4aTMQ6f5FwfoYGta6MrFoDmr2PhmryLetZsWBDHhgRhVEwU5Gxr71yNcxojrM4XfZ",
  "key28": "67rKnsvfdsXtQZXJ6sJnH72dV5bhoauuCq3iyfKgxdfeYPWJGhjjGafjqVDdUoCqZQVEMidzJzSaGCMJ9FzYcyw2",
  "key29": "5NNj8EBNYhBodR17g66FVky3xAZWhB4vW1tJPYg2aajDUV33Nm6mQZgck712GMkXRATwE7MGNTxaKGRTHCSAGrxR",
  "key30": "5jUbb1td8rD49aZmWtVDj7RGjyzcjfiDDf4E8YjSQPpz3U1GTyuxtfUB8VEwBBnQiTzEqE61SR9ig93Qy7YwDotV",
  "key31": "25NY6uEtsHsbaUdtRMU1XFS19LtaBxbq3UwoinU3jHHEidRX5Ucm69HP8Sb2522ZSVuAQXb6oyt5MFE8WfxLrnFi",
  "key32": "53c9vjsVUUBPoTUU6b7sM7qs14ZRhCjsCFTtWDL21wresVVcJxeEzjbmtsuXQDXzLJrcvGnj9ymQeGm4J5LUZwfg",
  "key33": "2SYaasBfDAYDceHz62eUNQsyXaunVb7nk66JJymtNxcpRZoUuLL2s9YUonr1xaLsiriZ9LFVgLRrgNvBtdFPG1Uq",
  "key34": "XBrS3n6MUDMYNXjPBdB7FBBsvBbaRp47imU7wktXzL47TGw4cGpvzK4e9aMpAMMLTVYfXxV4ocz1DAouebnWHPE",
  "key35": "4n3vbbQCFUaLXHmiaqGsEn7kz3kSVKDo9NSaU6VHCX4AHksLEzWFD2jGRFYPcHF1H8sx9vvdTHoZWA8g2wF651JR",
  "key36": "5Qr78KcgfuRAxxXmD89Dyt3Zhyv3BqD1p3zuU522B7Xh9USRoEp7HUnTuNAjgpkVfmv39kiuiPqi9Ag4aWvNLvz2",
  "key37": "2adY2q3Picwc8thJNvFE2GmJmkdJGpnhvD3LFW5LpAB1oBbF4qDnHuVbBufyk3DidsLaSXU2GjJQgvZopsWtGnzy",
  "key38": "kgZafovKq2UnS8TMpuPyegHCToCw9Nv5N11CtxntCYU4J52rize9LjR4U5ji1BUukuEqF6iZJKwM5qoTMhg1fZb"
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
