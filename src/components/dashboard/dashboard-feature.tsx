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
    "4pTmRwXNsbiDQdcYXFxZi3N5ND8gHfN6616CC3vKy51G5ysMT392oV6URM5uQdTXQZ1NT5G63ZjQpfX2Q47e3pEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bowkktj25UmgQNr9UJ2dSE5SRJ1mdiaadhY7chUSNsPLRL9hYQwYTu6JMJJphJ92myrnSmaHogV2mduYkoKEVLH",
  "key1": "3jpYaqwY6TnJ7yADa1g7Ys8PtiNa7f9LP1MGLGtGwK1xq6C5FEtZh6Wr76dTMHMrTyQoE2f21AaQndTNCkTM7kn5",
  "key2": "363Z6puKUE8o2S41AEX94dW5XUp6VDkXYDcXYiDKwPN2bYSPMd1oGptYiRzyAmsGp6MMBJ1F6Futjc7Chic6SPxG",
  "key3": "PqxxydvC2QC6Byv2v7FReapGqjRHdySkbBLHq4KT83fKxYBycTHHSULwC1cZhefoBwqd9eJHx758vQWTRJ6ABdG",
  "key4": "4T2aoZYRccTyeA52GPTmcEybDK3shTmvvpg2VHqpycggxi5UDX1k7t1pCRH2PMxv2CZmQpgQQXRrvUC3n5Vx44mc",
  "key5": "32Cao1NUDTPXekUknVxruNce78bRnRbfQgWeBNJ7yD98FgrevCiEPUJCav97U5uFPqLGzVKPKJugMQKXTFtGYk8k",
  "key6": "5ZtJm8yf5WkhGcri9J3b899s6rU14jQqScH4XkxFfR4Fvy5MVa6wrRzd7Hcr7YzEXhx7N2ug31hybRGyhfGirE5G",
  "key7": "2QQuMm7rtLqZqiUTNRTikJ3eyxqzRgvLV3TRYvKWLnkguC4hdM5aFJbu5N7ZERX7hce68dVNDFSUtb52BcRn43Nj",
  "key8": "2RYdvDNoJ7iWRcQigZovmCVXAqcHHauSGVNzv7UZJAkXzMQ2V8H1EhfsJkURMXuaV1o4VXmJU6bESwyHXpMiohZi",
  "key9": "52QfW3nJSyAyPzte1xEe5ptrXA4o6eZR4gnHuDWC7n1dBGZAveSQBhYq9eRQWWjuuzfTphKKZQhSzemGzC1D5dgq",
  "key10": "2N2vSAUjU35d2vmvFk5KAwt9nZ2MzR6QDRKhQALLAfd1N6waajq6CZV3EsGfcsQxCYV3TXYjfp69mAYREvRj4Q5Q",
  "key11": "79KztTbxQvtw7uqkwPTpE4TpxqRq2VJEtJAYvToDNkmLfqWkaTXYx1ZPX7zXY5RcVfR1uCbZTFgHbqFQY3xtGv9",
  "key12": "3Z1KyPjyThduGzHrUuoaGfrAi6NKWweZmXre5DYD9mggvVDp5XLwpDKaQDBoNpbqcv4LK8EfjpZwwR5LECv4toH6",
  "key13": "2SpX1bzNiZM9eSxvah6c9NiKGEM1TBfuUXQGdqawJC4JtgGFKqsFGL1SbLDpWezAEtZqJD16fq2tiVeYj9Yos2MX",
  "key14": "5bkDaqhhi2ebwcwZEkAieKXqNYaV7H2iShSww731NhUjtMQfLAa6n2yYf2aHpgwJDHAytLBWYXZtJi4pnTMYkw9k",
  "key15": "23swxWrirbgxmAXsaMnYTuv6rCpnF3Qc7eNn4NZLBivtknJWBLF9ut3g2PQvRF7ZeNDPrSsnFSWHBfdYSW9jNSQE",
  "key16": "2BDvxLYpwKfFYMUMCuQx64rZ7vBYhRsJzjd8J4MVF5XdbPHQrhafYnWjdzv22xWsPe6aTwrNvf2uo5FU2JSVnQB3",
  "key17": "4rsAuSuQ3BqBT7qURuNRywctupFRTNFMtesuvEJ4kNoGpKUpEfpoLANpt8hqtHVaNN7C4W9rCcA8ketnaepJ6BFc",
  "key18": "2TTuzbLQ2VL9kv6rohfYJwbPYpY47ZvvmxFHcZXxFHt6jrkobT6bNPyByDDC26iUYwCD1oQKJkf74kNwVEPKPViR",
  "key19": "2wXAykrkq7rUTPykYPZKpKCXQBUkEQcVZgCXDwMmRy94FasLHE4iXj7ECKoy33g5LpXRCN93dFShuFZNQRBcjS8",
  "key20": "3y18gBuwBfBM4QHiuHa5Z2DjFupiqTHAHdzhZhLUT8Jk2eJUAYGa3mtdi1Rceur1fxR7KBWWdCt6wSV9jDFAHL13",
  "key21": "5sQiQqHFoFFsLfXJ5cziooxejtPb6XqTYfTX1FZ9KUnaXs5uTiMWzBg5nHx1DzgnWBuK45G5BQdUTS5azEnaEJ6k",
  "key22": "5Ue8v9XtykGwDk6Qs9rZEcYDywnJvpJaLrN9kAxUx6VZxoFc6LdMJbVoqoZSyytWbuKWEV2JwBUd8ZwvqLbpSRHD",
  "key23": "59tjmZnVVntGc8CFXZRoc1xCSvo3zTGC3oceLq43sZqpUbVK1PSXCVBThvXE6dBX4TmiRXAjHmwK8b4zHwbGoT9s",
  "key24": "4uTAnmoRaQUXY1auk3joP1vHmbnqVs2fYLiLExXZPLmNVXTSSzBPScxzDJwgQdwbrFHu6RFxHv4PZVYmPWkTfStA",
  "key25": "xjBSWjAHSbJkFSwy8pAzVHNGSRrqof2QdMF2S3DMp2GbgemYLbuyauNB9da2Kyb7D8VKNRZRp342s464aSdcw73",
  "key26": "5haFZpzzBzHyHQzv3GQw9HHjvx9qJEN6KznWDnjFhiAfgCri6McpuLcNUwD5BL8w8LTnrh4xEUmb5gFBqCnniKUB",
  "key27": "46QsVGQ9jzEKbgQb3DW9kNDqXm4GYcWzUhpLsvzye5vdbRq8PezkijMu3iDKAP6oazvvyDGqMUPrxA4hHKdAxwQH",
  "key28": "24bkxdTbKgbLGLtpqvr3RpEbVtwHzxCGTPPDkTaECy3eD6YeJYtHW5BL2UtNBQhH4kTTHejaVoiw3uEV8CeECGM2",
  "key29": "2xSix4hyE6KSyjZKJYaefAV69kDv364GZ8m3UEiLoPBBZcLejVU9aMN4FVAhgWX2Fme5tds7xFyk9ECtyWvUUu2c",
  "key30": "33BKbj1N78E4tjYLH6iRs6Ft4uJ671oSUyHj2BWLkFop6vGGzfDnEByyd2AhEUahugHUgJ7yUccT4Voi6nXF9veR",
  "key31": "3Fcg2mqVFpLYG63BA35Wiq2igErd3eh9ken2AVnGNVKPXWS1N2ce1tmyFCtyUCrxn2R6KAGmYmkDuGgG15huJ5Ev",
  "key32": "3BKS1KiDbzSx4tHvTK9ZZYYsxWEhckJezh6hYZayDLk1KETyp3qTKF5EbXzCnbfwm4utDctD2iu8QDcFVo7433SQ",
  "key33": "3RnmEy2RuxWqmAc8pzLcmC51GW7xkBiQpafp4DbTpsK4ycPpTr6AWv4auC2gWx9fgLkV7BeFZvx8XDUpWXHtoedx"
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
