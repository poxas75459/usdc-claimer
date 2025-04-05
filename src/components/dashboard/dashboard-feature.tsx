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
    "23TX4hYHcZipjX433NNUHUHbJNBFvJKaPabS7M9Eyt6dFjUdeoK3ozbbepiQ4FJMADM9puHgV2Zau6Lh1c46n6pH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VRdivDY2tUr7B9MBTNxMnQ7wBPshLSpR6gj2JAmPQfYG7hg8msSaDAFHCbKfUYRxLAbwLBAsNajTFsEnNz1bQQd",
  "key1": "2H6jYv7c1R8uDDQhctPF1ZuhGb83gB9c2WNoMkWgz9W6QVpQ1tCQyDqsHC8CgLtH5riYP7zgCsP79EHZdE917R6J",
  "key2": "2vHKd3P7VeB8XjEd3r9wQz9o8W5AFhiy9LmQVvJzUVA8m2DKMSitjJzwKUJ5gKaZtt582MJ3DVqnjsj3xA8B2fdg",
  "key3": "5bV1Qjd37sQDg38ykm8KZQMjxbsASCME2APqMMJQgYpu9Caa2cqNwTbLACoFkrJtPGabyuzsMFZd6jSS7EBHovU1",
  "key4": "2fgzi8tPUE3ozg9tjhVYjigfa4DMM1QHHXf3jSNYiz9RstW52qfqonCqXvLdwe7iA4c8aDAF6sQMWA8bRtCnpdas",
  "key5": "34QCQurfVipzWRAzt3L1YnbPhNwzep1hrr29qYicxUG8p85SrCHpcZEjekBwuXUzDFVMFRCevmtkevEGG2w7SG9x",
  "key6": "FyJo95JP53GritJR4FUYEeddWCWANexdXXqXmCrWqKt94FfpqVg4dyNgV2ysAFFpP1taBd7FBjBaEZvk61AAuVD",
  "key7": "32z9WtLytxk8iZVGv1serxu4gz7tbxfHKgm7wV1z8w84yE76Ck4k6johw3rfPFJTwetw4rsqmiFNE8NTWSVGaWa1",
  "key8": "4JHcL6cRUoMrxEdABM6yFN9obSg7ZnbUGrHUXguzY4Rkt85qSaSEcK9o6sGKBj75gAU5r19ubLzFNGsJQo8F37dh",
  "key9": "4yomXcRpc6HJ3MqWZeVJqFCe27o8yPZA7QnVpof5jxxLkveiL64A4o6sX9h6hhPaTe1gm1dY2HsHeJW8WG4oNyuo",
  "key10": "2yhdo6VK7rR66jFw2HFWpbah9o4AHmQ5dWfCjtXRwbg1kj8vvDrjcznFhUjkDqZxUkVG7wsM6UE42fwbk5jaSciL",
  "key11": "55pHPjmkm2frmnqL9KDgo8QotUgaXsEWhLQemakZUjo8RoDFsWMopiVkXr2vBWKPhTywkEvdU54gt5B9atqE1BLs",
  "key12": "4S8y7HtvvtwRvDfdYNb3C4F43pp2AtM7oTQE7XGKifeEbeHaHUhWuL9viJCPC8n9VsEm2tTYUwPx5knFPnJng4de",
  "key13": "4GysYwAqe62vdaAb1qjyxzgqPSohrAL174VV4bMrHNwEPiKbAeFyVVgavpME5znarg5U6uBQbFwzeGkkAt3CyyZk",
  "key14": "659eT4AFCLMnBdaZyukXstuBZ9XajRnSQ3zUAr79gW1eegaaQu1UMpp5eHTZoMqJ9sbg6GWHzaHmDhaH6EMB4LSR",
  "key15": "5jozBaTP5kiM4dXHcaHTw7WfmwqvGMbSFEqLuqYPJvhXD6jGj5uoYSAmz6ap7Dtts6Y4dukk3k2piDvdK6BJepS",
  "key16": "5TxgVmCDAB12nzDLuvBTXuvUKs3JjYB3vhHSgYEbfQh5x2mXfe8Mp791GHhRc8JrhzaxvwnQVh2Zg2CKzDUsennK",
  "key17": "5en1jjaeXLZTbAwa8jH4qVdNk8veNLvMmw7NNuJKkEQbZbQDvLjki8nbv6MXxKbn9puymZwv7y8bSCvEBcDQF8ho",
  "key18": "2ZvcY1bGaDD7pTf97yHt798FE4oy8ZbxrvTqGiHcarqUmGWD9wYYHusrT8cRBzGNmoXktb5S6KzGVqYmpKy4vN9S",
  "key19": "2PsMhY54eb9mULTQoAcbGzgRYLjLQSE9F5bFV9vsDSPpuyhZiA8BMgjWuo6jJpkZtEkNcvW1MG9AgQpWnJrT4MvP",
  "key20": "46gwYGuisoMyakjZ2UhTfcg2Y8SspwPJQsae3KF7D84bwcMRjbBXzeYs4ZKQbgCYfCuw2xgkrbZMpFLzYCjo7HD2",
  "key21": "5V8dTonURfcuH35xXDt47e41NKb61StL93oZ1NZhc5Xdk8aJHQ7uDbTFxK9hvJJNYcb179JqS4utfGyXukrSDwQk",
  "key22": "3gF3nYfpnP9cfxixy78muLscaJsnYKEVXEAbaj71akLDaNwtYG5GYkVsZqgnn2ycbFDMnNiuZzTHtYEfRuoNXWpd",
  "key23": "FtWZE5h35D5itAGfJSzfFAVqWVbfaouWbr4EPgAEwv7nAT7nz2pCA994gAiXeDWNyLsu42vxNTrJimRJTqAsZfK",
  "key24": "4zdvLxhPmZhjmqHn3JRArPZrEsTZbC7fnAXWQWmn9hjd2Kd5SK4uwVhUtjtnrqzuJMs7QVp3tWFhf9mshzFhP597",
  "key25": "4zf8fqLjshjYrbSnxAs8ydQ8fhx7syNVk8ZfzyDPbgGMWv1kfjQdmBcaMMWBRrUtTzWVHDpRY1D7nCDoDxreAgFe",
  "key26": "24Eiu2HrN2wc6QR7BUgYAAnKxQ9zzCdZmD1uqZaiYadeJuvuvAR7HnWRJU2P1ZyLunfa97MjNDNPfWBm32RarJ5o",
  "key27": "4ZpPcsRWV4yA9rcwVRifPkSKdEFX4sTiBxUrKNP32fTriJMyd1MwvfdHzssvR7aMPgVyxmoGV9ftY2mq6RcZQKeP",
  "key28": "35qGm5AjdPa8CzfPenpf3MAyF89VvKXJ91J3kxq6rsqikKa9bdTf4twCoEKTv59hUsrLZe5sivtbWAQDsgWpHjTW",
  "key29": "4NHtTqGew4H3PezfivpcFYfK2eePrV92fVicGQnZFmKPdcAJqfPgzHa8WgMf6Yp8Jhu5orVqwXVndTf6LNdwxMm8",
  "key30": "4EQKmv6dvnbSrZm3mBfz2bcVPB9xHevTZWUdr9EzamCQSM3BK6xfrJVLuDNqqCxrHKbXyKv6FyQoBdyq9zNy5J98",
  "key31": "3xCcsUC6pFgoJdBeQz69mesm83zZXdABVtAH4othz2d463iSWi6surKxvC2cLxFgdQDHVqEXF6rU6BqPZNT3cMm5",
  "key32": "2UNmeyiwPDh4wGDDkDydvMXDSuetdNY3wuinCmfAapZBS61HLTjsJinmHtcrj4uH91MrCLuZReSpzdA8xe85LCog"
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
