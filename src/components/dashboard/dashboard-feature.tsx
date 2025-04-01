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
    "63d7bshUyW84Y6e5S2EPqHoR2KGnAX9EdxZkQTvuAadnVThNQSDGnRfBhsiFX6EEafNVwncyj5FZvHyiXxJgp2QK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P67DeDq2jdAGSYLJTJxU5Ui2YiZRfin8aT5MH4KpoVwoSH8kkzW3sft2VdR737MfYPHtKLty2N6ramZWqVoywY9",
  "key1": "637pr8FwfnzMc98noq86bG9Y4RHMSbU9vu6H2unKTVytMU5mq3y44yvzXypm98qvXQ1q9GgBTrCgLATum6Ewo8pu",
  "key2": "4nU1W9UeDrsDez6jrTU26eobvwyHdhgokgB9uYe6GoYDPEUGTApr7SYR9wgtA16ZZZRTRXtsKxRFbCr7nSncyHkF",
  "key3": "3J7R2AjZfsLjKHnbjMUrQd7DhPzQXmpyMPJ1kw3cxK5uLwJVbMjWS7KK5nKiMfLkCf4KbEXEXzf9vKimM68yYDiB",
  "key4": "4eszKKFhVW5Zv3dioNTcPJxy5ydk2yPZ49LWqXihxguR4uzY9PtKkkJWJbzeWPWGyJ5D9kF6d4J3TbCEVyPR5CNU",
  "key5": "2C6A4BneSHyxW6an2rRSevLnrsdEM4V9ooRmTqMz9Am87ZS6mVn1rtiNgV5f3eoWTm9Tn4iGLB9XbTZYniAM61p6",
  "key6": "3fUALD7C8m2jXtqHx5PbdSDK8QSRYcbU4EUrjgP2t6sGUZUXEv9krM9sLJe4VwX1237ePAMTT4Qk1fBqFpv7cwPd",
  "key7": "25g4zqbx262ippySQ3E95DEhZwAWKAvhSV6qPQLRJSfi1MRxbB5C6bfWugxt2ewTpcBsEbD6EbowgzMjDFzoAyCz",
  "key8": "63wogwiBMdVLZHvnUD77SvoEp5nowBRBRd96RoediT4ECpC9gDzjGY817vCAQkW4oFsfsZ5vqU3aMBGURGdAaT1U",
  "key9": "5CvEsPJEogYqHFpDVVPsMGiwjrXo4DYnti9itXS2doAimE7yCLeijdEGMffWFiXNW4Aimr5vqyea9Cyz3yeYhiGo",
  "key10": "t3zGFK641TMyWESxTgR9C3jZuHGxgDdc3dNsP8st6xRMrxsmnoKpLuQ4Aohp5z29e6DcB5PkQFyogQMv3p4F6cJ",
  "key11": "4i4nQrC2KfArBeNeTHnREcT4PLasiH7DeRQQixfsHEv6HpHYUp2Y7X1Ene45aZErFVxwSPGMHq741qyUzU37DZWo",
  "key12": "5aVCf8reqWvcjPMAhRsFAKmgfEzfuJYezVuu5DqG5imZ5rx7c5cJviggDybyuo3hTwQrtwUmqn2Je4YPfu4P36gx",
  "key13": "4SwwhzzMk8Qs3r1PcgeiZ6CCAaaUogqJFN4ujLfrEmUrYuXFfnMC2EzwKCbv9KtpnGwQyQCtumF6eyFcdCwotZJF",
  "key14": "64BcY4pouFMjmUKAcZf79WgtA4yciVVYv8BQ7t7TQHrThgR7Hz63EnKyerA1DaLAuwJwLAAx7S2fLgja9XzHouR6",
  "key15": "4kLfz1iwmWecmHdzMJGY9B14H5aEiJdwWJh1dLS9TZ6poGrHavd7iwXd7SURMobMURST63QGVLgV24kwRW4hmumC",
  "key16": "2boxDPBkD8jFyWWU2tttwpKyaQcFBggBMB6MNQKRute5fwu14eafB8EdoeTffLTQQdpLXHeBy2wJuzEabzaMiJkn",
  "key17": "3yDVw4scA7poHqHV4noadtd8YdWisZ82mkELLBtBynuXe5bP9KijN3zTwmnYfUJHo9VBnq6LyqpzXWkbszWRKDfZ",
  "key18": "33BeUwxxZ8TMgi92bGxdC5kt75e99rGgWpQFgjYk9LimLRtXre3L4KeJchtn6uX3WcwFraXntk1q7xMCKuQ6Yynp",
  "key19": "4JsPwX4TYwyy6Hk8NKnxDTPfPXvZeBefXgeWQWiHezjwiyLRe9DnoEgaE79qWz6xJ3VB1mcmKwXYAzFM2mZZaz7P",
  "key20": "36CZEAwmt8bBZt9PMvjGkEHCgsw9HeXzLJtSorTGYtu6FUYBv9BMz7zgef6Z5GbKHfBXJvAhVsgeqodEbm1Ngok3",
  "key21": "4zM51DNW73cjBAeSktpx6BTUDG8DXStMtBryfDrZ6ZuZe4ege6CcXxaN2ntsWJBkPQAMqSzUaPpgnvp7PXCdtpFs",
  "key22": "4PNMy8BAm8u4Wg5hvRsQqjqohySFecVvvccD91W8RWJKskDqMbD2xnbfjPYAJfcUCko8XYnRdq64qpghhK2QQWNh",
  "key23": "5YynBhsoBbx93ENGFrHJ86pFy3KH4ZZ47khTvVSsS3PAJtKxsojLDpoBcD3Tp1oAkmiqjPGsWSutVVueSUrDP4nR",
  "key24": "odEnkGh12JRea8jbRyN1NdQiyuTDHGnhY44ezhH4YxqoXX3U8BXcyFrCZ1wA2ZmAVybnYNux8c4rzxpDN2ACDXR",
  "key25": "3kao9YD8Hb7umU3DZL54fXQybEbnWW8843vmq1zJswBoUMHUbgPAQ4QBdwhR17SWdLC6oNgy41YTCPVuWfoAa4kU",
  "key26": "5YeRino5JHccHKk53j2aQ1oQ7mMN2Mq7XT8Zcru4LNyhVZspGqU6qaPDCaaT2DyGL3CZWUSY9hMvjVxTbBWfhxdk",
  "key27": "22jLZsfBEY6TdFyau3jpcRNZL9xAvy47VYz1tHmHxvk4viLjAzqco16QgimLB926nxG2kPwFxybMjvqR1rACuDLW",
  "key28": "5bUHBNPWP4Y9RMEBCkFE2BvY2uJAjkUBjgg8DZLoVjdGYBvhvY4sW4TFrGgAdXiqmiZgVbr3CsUGTuq7JHEF3Rct",
  "key29": "4SuGi3JAuJ6Vj7hCbMqxZnc9fHgew5Wh2iL2wXsQMHyVuoSGLUTAuEWG1T86uo51HF52Damvhq3aDh8qbBiyxMQH",
  "key30": "4453MJ9VhYwbjQK96WruZ1zojiKFfvsGXmZHpxco3aHDBqf3rFjjz1vRMgbBL1iJC4UgxpEAPMzd1chLr7bbmwUZ",
  "key31": "561xSTqsx2sX4m2Jxzgkfvw8ZvFujRGQA2fN9qWJi6ro1UigB5ToJAJtdX77XuNtcERuatceqS8ss8dN8TAwWEju",
  "key32": "3bNzGAZNfskxYw8kN5dfh1eYJDStaPBX6J2vjtwGmrsjQG4tKsZznocEs95mAamaGp2nZkx8g9PHBYUZJNkzpHyb",
  "key33": "2uSBdH51P2smPxo83EYiq2adRvmnuFcFFKFFFpY1D9ZSkzXiwd88bEwgHv61nfVzFFDX7cb6D3TkYir2Vey3e3cL",
  "key34": "2MYfb5dhp2paFZWRbpQwYeRYCyrEXW8bYozREwYa5KDViNzSrKtRKV1rTRTG6kVewLddZD8tLcu2Y5S1fy42zW2u",
  "key35": "5VuPqGR5cNv5av8uaxk9soxPNCsvHR8VBHAK6ckJSmj6wfAC3xEaozPGZmsQbznpMFQFXZCJFVmMH463N64bND71",
  "key36": "532iHuK6vpziVNT4yheDqog78VpMrH4eoV3We2VjkaHft5gRjWSqEq6qo9RBNTDG63ZTxwpqsTRnogSKS7mrkchE"
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
