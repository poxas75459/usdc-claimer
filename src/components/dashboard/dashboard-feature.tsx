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
    "2rBZNxwRUcaZUupkMtoUBZUYg7BEH56pL1vPjvxsXxK4cHQJph9KdrwpeELfL64Ve1yJrDvQtqhM4vHWwFm2f9Mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ttpjnH4CgkSfoCAiebGtjkoAPhASpkd4VcVoSnRLrGdmYwTbrdgfbUDqkgD6PfphJ3SEpe1xfMMuqtFM5b53MbS",
  "key1": "tuy6LCbceyjQuBW4H6kVrJ1iaWN5YzAUejrDknE68j3qtDkUJxf6MfuV6KaiAMdwPH6quf3W5QyhG7E5131q5XA",
  "key2": "DhGrx4Hh7iRMkTkwec1tXjEhpgZPbmUVmjviS7yjGyCoBg6Qbqct19X12Jx64iW9kpKtNeJV7BHVVAKGxw3yty4",
  "key3": "27nxUUxQYbXugWVEnPy9WW4p1cLWpgJq3U1jUxF3QokcjCw8g4m3zARYJzH6TyvCmReV9Vqyg8mCSbNNdZGdKoiz",
  "key4": "2JnkBQLbkdmWQS3dZ5JfuHgM9o2N3CbqZNo7bV7HY55UjW2LXKTc2ZKzmRbUSe9ZwKPTyKHWV6JkcF6CW7RBTDsE",
  "key5": "2R2dVLQbHwXGMkYUsWjfTpZ9fG2fDnv5tHKHPPjYBiTmsRBuA4WhEhjdhg9AnYwzLKAawGqQo5eJh86MtvTBB4hw",
  "key6": "5MobkNvrTabVFb36EGyKH8KFFJtdoi5oe1PCVVD3wCfr9usSY5ebKXwrGpptVoo6XAGh7K25JrcqgN1XYTbKiZmZ",
  "key7": "maf44d5fUC7yc65p5ZzFRXtwPr5hs8aGyZrbCk8E69dQPnPZ75tg1LD4aaxiTt9LwJaZ5CQn9Hnp6o4rqrxQHMi",
  "key8": "46uXejtZBh2MWtXkELriVFdhrQjwESjQc9CimvanW7W6xSMiLhuYCuKHo8xAUnU38h73o3Jbf9R8szqwinowUe8n",
  "key9": "5jdZbBZLy1JXkTYGrtEe5jRWAKqcYCn3AV3VsYGBzxDRCgiEeYr1BvyaU1TAKtQuYMgDTxbwNwFLxJucwkZ69vnS",
  "key10": "FwF9oxus7bcJfaJJny3dkb9GZdnLe9NWQsxY3ckeLWw2b1Wa6K2oYZSFppvH3aRBXUjmXN5JP9qksRxiV5SvdXQ",
  "key11": "2Jb3ptBgnyKS59EBggNsvG6f8MXDvLmVm9jSEcKThfRBe4mzcpk1o53chs4UXac5oB7Ni8KcLd28yQaYqd8uK5Eq",
  "key12": "2avekp2xZa6kbJeRA6KCtVRLZAdGooHedeJQv8dvZwPk9itgHBwdboWs692WdwQogVsEwy4MKdnqf7h6X7t4zJe5",
  "key13": "5hamGqqr9Qbp4zbFxomt9kVNiX4gtGR7ZTsUvFyqnoYR37mSDF1Jv2FfG8RceEWp2YzPNspk5L3BUNRXkZau2v4q",
  "key14": "25s92S5NPUunetmqmM4ht3QXZpnJp7LvY3Gx2Doc6pUSPG6V5DhchxeUUWmTVNd8HXhahKXQSM8TpLcZCGBGN2da",
  "key15": "21ArdrR8azydVa4n4h42dUYPVijKN3qiJxHq5aUh98h5DYQbV8wLYGoDcTZzcF2gpxtsZkjnxzPV4UJtgDXqX9RJ",
  "key16": "5GsSJQKT3YgcNkVjwmgvBBUc4dP6y9hZy8nkFSmqfJy8qoDJKET3Re3Ba3CeAdHxKRSUGDtNp5hhEkvq2Js1U1RH",
  "key17": "42juTRQ9twBT2yTcNXyfEtA564PNmP6xD34aaLK2MtfMwE7gH4CCKTLExqPUvPvqZ2ikGSyRReHmGW9RhV5gHiEQ",
  "key18": "4ytPpWjfwV5bWUSffEA9hYBdcPNvxcH9APmw7gUNYzBYpBAW96LHsBP4xNWMKxEbUkiDHm6zedfUPyBzD3XVC1r7",
  "key19": "2YbRdBp2o3tcU6zXRfkSmUmcp9tfm1cKCYmRkkU6Z97bpGZh4bMgqos4LWZynMW8xK3R4Rz6K4ZwoqSgPfmitswB",
  "key20": "24B5HYpzgnbYvNgvSC8zWa7DD8jtavt2rsKhmHAcAEKS2tfTNzz4Cm2jJX1yynxqz4RLvBvgQTVgHFVsD7suDHX1",
  "key21": "4v2rN79SQsXJUM9TtyQqMn2cQzsUm6U8aFfXw3gpCPuMTZZEMPKbhCmAD8V5bVazL8hNQnSPpaZuqFuoRQTVHnxo",
  "key22": "3TErBNe1NJe8BiaizDkRs1NGHu1mzHPwYwUyZxaY75UvuSZAceEXnWECD1AELNo4VwVk7bRGmrrSbBZ2WJiJs7gi",
  "key23": "35SfPhdz3WU2ZXscx2ssuDtUE7kLtVQ1ET4k5grA8PgwLFt8CcbyowhUtpEhJ5KDNNTCiBavuo1VXqFfWpMHvNsA",
  "key24": "4S4FrT52MuDDRveiw7u4MHrTeKRSm5hhkj7xHRDZRgzjQTxq3Wp8vNS7ZQTmSFVhQRwKgyADqGsYH76B6mPFrpuk",
  "key25": "aXoKNZyv7VbZVedqMRMWkhi7bTUFJyHPtnRNYEV5sBFYCiNHK1Av6CQv4LPncTJHueVr59TQddZ9TrFRisLsu6Z",
  "key26": "5YMgbXjD32jzM68m5nVab2812DYEomDmHNau6rSFsW7JPuocBVTVppbTp1RBHpcHgoC6Yx1d8nSHAPZtqEw9K5E7",
  "key27": "4L5zyFD7DUJrQUWGHXsFgsH6sXkJwUWM18UPSjj6Bm4sLpFmN4Q89ozLazWgdSV9DmU49Jk8YtECka6aduVNkgry",
  "key28": "5ECb2C6Lwwi38Q7aAsG3byBS8uGYBEdqo2J7C39MS5YPVBuku98f6dnDdXutxjkWF4D7jPB2dsDsPF5NqCYbCRZN",
  "key29": "Zq56AzJZRf44GskAHkdSVdpyA8VmqaaThudKYp8cAAv9DkmpzJ1cxUvcTUdusJgSPVMA6icfERe1bLj7HdX6H6B",
  "key30": "64rVzq3MUM3NR2nJd6Ur9p3K3vw1HtKcraJPBSpp5KATqZ5Eqnk1Ayg2T7dMFVPw4J2VbVXyog98kLJi5tWnjK7y",
  "key31": "5ptRS6eRLf4amVwadAvz2pzKcqjnmGPyT4y1mNvZAjteYppkiHAAmAWmYwXTCTa8RcUtzkRUg8Mjx8x2m5bWfjMo",
  "key32": "3YJ6RAjaCorvArUQEaFm2rf4hV7juHQwrJFNuA3RFhUmh1cTQ2EgMRpaELtEAZTS6Jqgm73kFxBq8yTw6zX9zux6",
  "key33": "3FUbH6q3SQDB2o4SR89PnW8di6FvfCHrmco9qNhNRqoZ6CXL76Kmir4WxSxqzNGaJzM4HZismKomDWHzpzcuATJA",
  "key34": "2JRfsXHM7v3vvF8CMZU7tEYof2fLbXxhZqt18JN1ssjfKnshwQLqgjWsExA8VsqTck3ipUPmrnXBus6XJJCjxWpP",
  "key35": "4tFrUYRqmYaUFEfqwUoWAiNpdcgxkP1VqRM7XbiyXqgF3SBXJRH1syoX5iBXwQWptAhNDPm2CkRDvvAecfBEbSoi",
  "key36": "24oyC7PHmWX5eutoP5yHb5wowMRD8eGcQsoLsgPZjedUSNmmHmiRnDwKHxDMPCqxsVjuThhjLEpn8o1dYjremuS8",
  "key37": "49wYq1xfAWZHZBCDGDJZSCRgaiJE25U3of5JHEG1aY1jMSuqGEJEz9FiUw3v2GBzcDEiHXRTsZzU1FcVN8TgzwtL",
  "key38": "qckLUKQYTwxGLZp43KbUpEPFc9sGG9wYyCtnMHNswLSsYavLMA4Emc6Jwhw783n3unn2ceJCde5wFzSVpSixZjC",
  "key39": "57zZLXKT9kXGktTVNK7VzRTWGmoLbHuhFpthvXn7CPUo3GP1pzzZEWqU47X5xxGetaSZpnPRmp3xuhmucx3J1sGS",
  "key40": "27JsYQt7CCrxaqC7pzgDkw3qjx5tcyXKpeCJXHq1Hdtix2xnzvPRvsaCQ93e7FZV7zLqX8tQk8vJbJtwriiyKz73"
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
