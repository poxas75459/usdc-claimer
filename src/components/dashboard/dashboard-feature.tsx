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
    "UMvkfU3TteqMDs6fTThLgyq6Q24CnFYuAXozEUBypF1p7beyqLRr9cWcCE5xeuMbxA5GqTVQxGxndAEfa5gTvoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VrTjDMjoyFVD3HYVCQpeCkcEkKgfgLyBZpHsGwJsZkNAoMVdTnJQJLbr25VmV76nsWb59ch6yKf83kDaotCHpgo",
  "key1": "4xWkpD4vVMAZmx3pmT17avApUSJjjxj58NvhiEAgt84otNsCNTYeAKMcpkXgH4eTFfAgTeEqBv7Dj7p8cWxuxcGF",
  "key2": "5SKMv16Yscezb7xprdGqJY1uCWm1tiv9samw6KokLkN2M5SEF6dX4NFHVD3HgETfjS88HeLdkcw6rhpnPMLgimKk",
  "key3": "URWtazrn3j4FZNqLnHhrAT6YdbXAcrX8CpSLjhwkTu7rkPiAMuccRgrEnDFKMNA4VEoivwpUTLxydKvuYQUNunn",
  "key4": "3GzfCZFxA7Y7JJ1s8oTQVAUqBBuCfFy9wQtCg3tFTMdA8DfLM9TKk1YiW7eTkomQXx5VQ44Df8NmfFPzk25anZTE",
  "key5": "5KUJxFZL42nY8SucMJ9aLrUnyjkTm5jpusfvNWayVwLbAQ1BVn2bLdNnQiEkMYAnoE4AJqkmsFuWPTVN5WZtWnfR",
  "key6": "3UqNtV6QVPeAejMXHyg6yMSvVgc8hFqE3Lra9JVTRqk9LnaPoyfWPibWC6SkLebte1XEULpLByG21QB5zMyJmbAU",
  "key7": "4uMkACqCjNQfNp8pwiSSEEXNtZkSezFV1rAyjgvMo66EbwChhn47Sxg4te5thjwm93gJSV81wMFN8aStJKJu6BgN",
  "key8": "2VEiwVnsi2ShVuCpJq6yQsZKiyesqtGEM6nvjhqNKwP5tG2KQXrVKxZWQdUHM7XnvuNAHkQTC8SnPWkUfJLdWFSP",
  "key9": "ZHVGfh1ZdPDXqmQrkNS2mXsB2DLJz9zHGicp9Vr6BfxEJy23cxnkQUUJcYQRNAVmPLXHeu4mVhM6qWf8k3zB7ms",
  "key10": "3vdcDks242itwR5W4kwfMrf9StYTwkBPXFaH4EBRowaUKZZaZN2eM5S33MyMGH9jsdsLMBC8AXHnU9ffTK1ZZikU",
  "key11": "36xGK9gDtAYjW1r9P3nViLUZrsr5HizGzNPZmZQEm3AyJ1y2csZLQe8m4ehZYuLvzEVpLTdGTB7niAoEErgXbS9Z",
  "key12": "rkwzCiAe1hS9YKHP9dx3zHQViqs3nqYQ4qipnznCshAhVpqV6ipYyeUXyt3ZKktjtxMP7tf524Rq1kT4NdHJAt4",
  "key13": "4fLGE9TqAALTrya8fcgwUb9kxgS88hgmBJVEvziLby9ahL9ttxnfbMhPNxXeWchjbCPaffMNo9gnnPx7m9wyPQbD",
  "key14": "5H1m8CmJdWMG4vbkXScuh7zzGnN2UEm1JcRHB7dkVzsvY4xHkfEJbztVZEXsmFNJR9ABHw9ugBoVJnHughRE7x3c",
  "key15": "3QDUdm2ZCSQVDh1TPUyarXca8qYrK87gpS6ZcwzxhUAohxqyNq8KjvLKTFnQkoM6K2K8BP33RApiKYWcRaWpzBnw",
  "key16": "46JQck9717MFtMj9YTMgs6se9pWbuLb9euyCdMWcenC2cwmuT4CV7U748t4g6LDaGvxTBuCp46m6tMMdNs5DFsLe",
  "key17": "2dQ3B1rfZzzeJAEZeTFcUMvajwGoUbjmnWB3JusphsWSjWt7hxcHnF59ks1WXPGd1te6vk7Kj1grWPjTH2GBDUrq",
  "key18": "569ef1sDaEAZQTgVCPhUSRZx7Wp7eZzhJXj9qTrtnq7WkKo6f8cCHG6p2dfTK29P5PxPfSHDPtWfXw75ZM5bLBQW",
  "key19": "4Kky1cEERWEXbiBBoJt2HmW5PWH9N4qdu9X9G1n5wWqDBrkh2pvcLWJUbCjAcRcjjc1LkEjmbgf6mwUhJxirTZYH",
  "key20": "4mevPiKPrmhkD7P5kEW27qLubGopx6Pe4cg84PLVTuyDFntFsMy6FSkBU2veJzoyLJpgmyy4gDhA6RACCmmpb45Q",
  "key21": "j1FedcGKR59PhL9wFQgDVHgcS14khQLypnmHKoS4dHf4yeV8AeeNBNLcoVziYMdtwf6ANasijomoLfswpdcmkJi",
  "key22": "DYfQxoooNCvFSXt1gSUKC85xtYbNdTUXxNLppN9mJU1r2gugoYcSZg6yWWfSnEYHWeQgLTiNsxWqUkHAE5Dnax9",
  "key23": "2ZXcyvnvErXrnPT3PMTE3mVCk4ThLwyanP9LF9MNaNmHZoy8mYEohGF1XUA7FSvZUQhS8ALcJQEA96Q1kP15gDd5",
  "key24": "44Z4iCzpa4tbz3Hd6JvbKm5bz1dPQKRZ86ppruRMauKvDZ6KghVC2gxyMByXpafu7CQEQJKeu9txeMK2FuuYrdxh",
  "key25": "51aAPEtsmiUCdJq8D3j6oCqFGUiGacUGe3GgJYUeZSrhPL8DyGnQzYwUXS7jnf8vScg7XSQmVkN6CiXENA7G9RkK",
  "key26": "2HhrJ45Q2mmTTcqV1ftVQBPrkHckhs4UdDfxDX2Uh6D7fb2Dk5xaketJF58siaVMPk498fCbHeVoUAiCNxP3bLQo",
  "key27": "FhzRvWNkBAjEyTyvYigts2NeysPDFEAqWWq3oYiZcZgYWCfEmLmytCtqdYKFZafzK1bj8VKdkyasyShb62eA5Je",
  "key28": "4Xn8bwz711HWBSNLWkHXseKogtwo26Nuhipd1wTxeYJQtMdJQztyF8pjEXrSVkd1G2ZwLXUwdndjyZuaJd3jBPYV",
  "key29": "2oFaDfUSVQA4crs46KrWpVvND7ziWLsyC2pLRPrb3i3GY6ghKXgzgc7YdHqRcnJzcebcHymMm1vvNR6moHfjaNDp",
  "key30": "Qf6x5nwqvuXPRyrX1TvxEtCDSYpEkMLFGEYfwrRYKzid82SMiypjQn7DcAwSQQw34kfr8FVyaXPkfnf77seuYTq",
  "key31": "2x93NVupvnbD62WvwhccRD7oQidpjVysuFiMXsiBBWVX68kAECr6PfjmvyykN8RTmtPPbLnJEZkNMjBKtJUYrKwL",
  "key32": "5SbVAu1mPphsLsakKzzXNVeU4hq1CdGv8tYEnvxT8DoGYBLe8HE6yGm3yUEdPEohKP4fjKvU44AjRuEyXD8REWxy",
  "key33": "s8nfv6htYCzXm5YzjehvJ3xQQ57D1U5zx5eEKs9HUrrzDG4KCV7vrKRfTUK9UddEzwBRmzkiRSHVssMG5EKa89t",
  "key34": "ZpWksNpibz544o2hoYrHuZptdZjXYYuXmMXh1h9RYbBPqL7aVWVtm33EWk6kkWVHusZSDh7yjkeUxHMBTXjShdk",
  "key35": "zpYwiV6MfZLCaHPgyaF2UtKdCRXw2Ur7UVVjM1U4kdZkbncf6MtTieazPCEMGkhJTFw4kMCGaLuRERXN2ZWrpub",
  "key36": "58AML4LoTknjUrF5xwLhWRNaPNoRm72DVGPtDnyVaKvbxvJqv4AhY8EzkG1UNPxNtpPozDpDSpVT7p5hMsC4BK3e",
  "key37": "4XjrFz1W3mftXXWjXVZ7wV5zok5zPGJ43tnXxKFs2xhum34Dz1ThJdfKME2kGPqyNLvcy1UrwhYd4Tr5rUFJ3okG"
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
