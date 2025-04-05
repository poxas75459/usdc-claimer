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
    "kq9wEqwp3jb4FWxxvvpfJ192pWpLf74hLYyvbA81KXYLSCMgSJfdws84x6p9jFNBHrMCCEraow4ipLdtgFif6CG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p74pm39KRENZfeTKBNUYZT2zJwXZb7Po8BGM4Noya4Qz67ZGWEouDRoUggncXwi7KtKHrz7fSN1noxjxpzE6V8p",
  "key1": "ascC1gmFWhBBHUU3t1ZrtqkYRhHHCvuKoqQTMdxkwoLZQdtK3bMKbnDrZu8e57Z4jqNgmjzJSRTjdmBgDgXGArU",
  "key2": "32qhNEU4FsaXFrfgu8qtE9rz4TKhxsZC4Gexx6sVZq35B85M3nbrGMKDJRLy3wepSfxyvzHj3YeEigbiLF3fkPj9",
  "key3": "5Hh4LnRWForiCJ8VmHUv3gcFnKqd7VCfeVXNkSRGbsyQkdy2itLhNXG8jG7d7YAKeQw1kdZrP5pgXv45VcpCjUqi",
  "key4": "4tBo8tKLujcjxjFw9yLiTmRc5AQnfhsZar5fTBHM9rbgtdwmiufi3k3YGyYjqZ7h65DUfave3BrjRtnGfiz69F4f",
  "key5": "2E3HLNVYczsTQbbY2XRMAamEmxJWeHudsQK6MATuXBfp9c5SNcrhgQXz8jwwBLZ3ZzqcF8DodcDTUkHs2VG2HrTw",
  "key6": "4mb7DWGBJsSTYcbct6SzDfRDbPdetytU7T2xUuitG6N4Bv6jmMaftQKJg6q2Rq96GvLg6PqBGdWZiBkapydVabtN",
  "key7": "655aS843GWiBYgJkNX9BxBWnJob3YhhQ1M1ULQHgqHibhknYui2DSiSw54eoLrFamzP54stFAAVEBc7bsLZkj6Bo",
  "key8": "64AMrxr42DkDzyCK9fVKFwVrnE2qS6cyrQMcQWkcd8cAjMGfRKbzctVSbSGhdGXF58g8x7afCjgsikNdhsfBfMHS",
  "key9": "4aes1zUQN1hzV9FRiKDTgutVLDCcWrWuBdfwA2825w2YDWKK99BPs6ben3EYMwfHj6i6g5ps7Bf3fYPNivK3dKAv",
  "key10": "2Gj1LBENpNsBnB6FLcvNVAPrnH2CdqEWc9NmjNy1Pq4nQJocYPV6YgwD8LKRXoKdTKvBKTbSTWGfBSS44boJAA1z",
  "key11": "2t4tGZdxQkF7VdgFkMYJhzkZtuDS4qr9ga1BmppHF6jYZ8tX4HB8ph6jTFCNG9LGZpp1tpaiqEk5vhPF2jVFMUi4",
  "key12": "3Ct9YpYXEeaztSNcpGfsVTGxuTbfvxSzkD4rUPqJ4XUbPgoxthZXKSSudDuFuHHGeYvHmVVC3hmBY5SVwWYGajKf",
  "key13": "5LLjGkDboFPBnQRULypSDznVABjVchGcUtPaoi4VojaJ714qbDMzwjW8Z8UviEwJ1xUYk7Aba8rUPUA4BXftB3MH",
  "key14": "2mP2BxiqTVDVLrr7WzSGUSps83WMmwc5D7zh6f96MiWSZzwLfKv8g6dPHrttuRKpHLNmAGrWHPpivAMnCHR4PUhm",
  "key15": "4zeqQrwQ4HoB2WiaApzrByhcY6ZfSppXnmKrmjvGxdtaqgEyhwrsTbm9NmdXgTz4Ykc8RMxkLargKVrNFXkR4LVQ",
  "key16": "5ngqzuVsZqwaayE7yA7XTF7jCy36YWy2BMKd5ginbUSxg1Zg3GpXUhyCaf9csaGYx7eiz5hYLTmqpSv3p1gPWBCX",
  "key17": "mBm8cWi6Z8Uw5vXjErVHq7d254rD5cGCrMAQqgxmVAxo2oQaztPs2d3pxeBGhxtzu8GK31CRBTw1btkHyQKRdmS",
  "key18": "5AiS3yww77DVdwvVkxQWwXxPXq9q9oSpTk6j3CTjDCLomjN3UqVA3AgcdV2w1Jjj3JMgceL587NHGXT7xPBv8k4Y",
  "key19": "2ZLchv5UwJC5jESk75utSPto9FiUUAUtxqXZt3Fe1d9rV4bfrvo5PBLVgGD2UmaEZbZRTwy544BZxWuCmGExyc3s",
  "key20": "4M2ekapiJTci6DQJKUXD9m2HCgpAoihfyEZzjQKQWEmJjgwnQZvF9WJV6x9SF8H9W9EjMcySPAMbm2DtgZY6MGKD",
  "key21": "2L421v7ycaBAHBrPf2RPcKUC6c4XaZyUizazZYrupPgHUDWh1E1SbSzNJNYozvgVPaF61ugRiPFaVuJAG8qsnSzn",
  "key22": "VWMZ3WjvaZdm8hsxA2PrhtGXsbpg13SeJ1QX3SEWjvfEjbhWZJ8WBpLfXorGNTCou7vV8aKrbpwGHRWnsPrWLkj",
  "key23": "3F1udzUFyGkp4TFwqXoxTqHnhHtFZstxY8D8ioKkvZE9vqqNxZFhR4yxBzMXbRNuvyRRSvKvThjGmVmDQqw1qwZB",
  "key24": "3VLqGDjsZ3xpr7hYY5gv6NvCXbNGraZLnpA7ZXrUTwe5aPdL4Q3WwczbX8YBibpLYHTVWziYWxbhztK98ci4gb6M",
  "key25": "2cW1heoZMeKh4HDydv8FXkY45ip8PGWMmEeL1VU8jqBjRtR8iQUjNf7sw88vZYWszqAZ2YqJWw9wzaCrXh1aipAA",
  "key26": "5prvixD7aVe1XRXESWmkcJ2vBbsFPRjuncGpnCkYv449W2TB9EE37J5dAvhNAbW2rxGBWTPPwenC2HRMzDSGJtqz",
  "key27": "5MzUVzPKS6yv1wVPcpJEfVkh2VHLWuhsMbATHtsLsH1Z7j26sPpjCmxLJjLWHKamLZzRtTRthLjVLNpEhp474eD4",
  "key28": "5bZUM8G6HM4nEkN2QW9ngHHA2cQBGxGX6SS1j2yZEGZLAmtJcyk8X5mKkqTvAbKLAz5Y7xzFDQCpnFuNVKofJgx4",
  "key29": "WoKEjCryCxWfzdxxWeKFtSVzrw7tKNWUL5Ck2paoA7dq51K3ELnGxvELPre3mRKEjZ8St83voE88fpR1paK2zdX",
  "key30": "3XBb4fkfrQpP1X521Zh1X91tZw4qYNhDZXWeMWoJPycBEB2WFztPBVN7CgcfmeGGQCn4sbLtkYsCjqLoTXNdpFRJ",
  "key31": "2pdd8k2G2WyivFu1iXB22HmafpBZdvkniogqNFFVcSbY8hAMN7JVNYxpesTt22ZhbVfQuZavrsDD9jmmxHDSRVCJ",
  "key32": "5fT3zWxK3u2ULgctMcqdCvwKC3cQ4zrjeqPqqzRX1PTX3yV3HKq85rkMkz22QXWz6tTpNxhRGQydrZCSPoExHosS",
  "key33": "tSiR4vjfEnqCuae9XtDp7JJNc89KPritaCYrae3Dw3U7aHfgLYvNTPBH5Yuonifh51wHTUVHrbtZuofMofb2Wgi",
  "key34": "CCn76x2zFbdsoMcRnGWA2WviMLCYmTVn2hC6iBEhu11F9zX8FBuX6nfc6KQxFPT2zixfdeQ7s35tj7cm8p3F8Vv"
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
