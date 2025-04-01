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
    "39CrpAS7odzXGDGw697u8ko3kmfeJcudFvqLQXq9xragQT8XMPrELPcJVfYJYbpv49e5DAX6MKxwJmirQGzDxJML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52mZG17XpkrkJZjVkAkgjaB1jvvzPDF3K7kSQmr2vvc94W1zHK8Kjs1kGRm8n9Ntbbvdmjde8vACdp7oL5HoUVsY",
  "key1": "4txWgvw7zjpqThQTwPbam3eVrfW9jjLJWDvrQyoEbnJ9kHJqMWmLPNvRpZhpnDmNQS2nsSYmHDxUPaDDXiEYkkiK",
  "key2": "3p5N1VtBJTMs8K8W22AGZmaXLW7mFrdcL5tQNcwkjx85CaiUpV6vbBrwRyd1KWX5yg6i5oW5iWvvBPHKkgp4QWks",
  "key3": "3X64bfBhoSqgUBNSi8qR8Uvfw6JX8qFHJPRURV8T5ZMTpmZmLqhCu9qKyKtXM4hUiazyorU8xkuzsSebdp6ADmet",
  "key4": "yxfwn9qaLaLcSacRMaoucQdZqAytmv96ELM1jUyWZyovNV92DtL4ax7m7XBurUWqqheo8ks85jnJqUghJRu9wqE",
  "key5": "4k6JgCD3jhhSwmzsJiaCStP3FE4iBjZwK2MUnZwQRAZ9vDEwRoqCWTvGWptBya21A4ZUZjtHkEApPjf6uPT561y9",
  "key6": "4f3ETPss6t5kpjvUetz9fyUBrqd7ERyiBxCMUABYsKifk7RsS8q1eBd787ep7Vrc27hAU3NVtU2JECNDCimEi49r",
  "key7": "484Tmnvm852uFWXH7ytnqvedAEL6xUwFN6uebp3VpNb8qkFyh9C1YzhXPDY7VnEKady5qCCwamtDveUskgVhUN63",
  "key8": "2JpPxTcAs6ZrGaX7e61bUrRPXvp5SHF2yxMDHTvGnfCAKudLZ5kx9A2b9RKQ4YSZsQ7fSLRvPZGKgCwn3pPYAvtN",
  "key9": "4CMAJkPgETnMXQQf3RdPcosF3vZXdsR1SW21N2oSDMnaDbGQLu9RoYukB2LkqPox2USqH5ZNrc36MAiXsxEQyT3m",
  "key10": "4d2YwCzW6opAsjB3y3JW63RPXvygXt28VupWn2PsnJUE2s3ivxKHNpa5JTn5Lxu4CZ4gRKDD6UQkjEhbQw4ccrug",
  "key11": "22zowDCbEbvwtFaxUqHQTMGPSZ8zEjvmjtXot7LPMRsQ1tmYjtDaRxp4HdnKtoycBH9WkGAqruMfFtnNzwc1z29W",
  "key12": "4CBdCJWd1DWbP3fiUnpkVHsQCPgE8YxLf1fc2XQTiXmXBhjjvWF29CFrByRZb2KdkzX53HaN2kxd5diKrW41tTLN",
  "key13": "4BYJnkpAG2iYb8HtAK1LmGQqVf4ugccQkfL633Z7YCqcuD9LQn8Tumi2SXdaitP3DhsjCiEnzJL12GMStbz8ec1z",
  "key14": "LRZoMRddAVvHyyu5EFFdTaU5szVS9nqX2eTA5RcgWcEjnbRNo5emQi1Ke3VLJnrq4pkgyxA8qrUxL95uV4ptPc7",
  "key15": "3ab5VHmME8wPwyuKGsz4R4Z2FStdYeBbfufns4uKPDR5C31jjEx8QoYuA9fQA7NnDzBvfqKReMoyystSs7VWLur6",
  "key16": "5aQ7zyhR2p8txs4CDxvHEoUE7x3bny3XYEyPHBBcufYhPLGkDNj5RbiZu2S63WHnN2x7U8DSVmvzWRZUpeKP5YUJ",
  "key17": "3WL8pFSC3ob5U1AqoxUhGqK1rhwHvcK6EuR1gcAzmjgD9UQKvLxPh7msE7XgwjSjk39EghDBGcBYwTRcxDLuLahJ",
  "key18": "5k6CvVooWCBEfHWaFDvx41rzqkWmsbMNvKbivYL6ZgQzNeJGMJMWH141MP6dSAceYbu2g737U5AXE8gd7FoMpH2H",
  "key19": "mPXE65CSSum7A9NkwTYYcAUhZKan5JVa7pQH1FnXApaPzGykzJRLKBqs2FxaUtg1G7GiNHeph1LZiu3WvUYjGn1",
  "key20": "4H8xBxpgeFZxHSxyrQAEuRd3gm8vNhGsLUXZFA2xAyXtRN9jauP3i2iQV75wPvUHUdcAEUcQq5ntx8CXGdn6gFEM",
  "key21": "3EFssZqH982S7JzELdPdkk5XcwFeZXKLQsjBPS4MGvczH34DRNuMbXTqNKHqxjM2nN7XHY5hZ8NMswmEZqZZgeKi",
  "key22": "2pESbtsJe2otFHd7NemzwjTU1YxfDKvk84iMn2AidmePX9soiCfypphXz9PZ6vPPqQh28Fmq3ZHHDp7rQhAcYopM",
  "key23": "49Dh2kG8U4tJ7S7kvThMFjkbVRvWy5tvbv6sB12rc6yATKyomXvoRukvAgUAUKXeTuVGVtmCVxQGN99W5Q4SLdro",
  "key24": "QVqTv9RTdxjZHvvhz1R2aVCRCeNWxejrtXeCkniq76LuW87G9aSG77kZTkhuydmD5GtAQn4KmMchnDNtXBsaccz",
  "key25": "5Tan8yiRAViv73uzvgzp8WtvQHmpGFJVmjRtLYT2xSaQgywBv4GM1u5VusxFbG7AGmvxgsrGQ7uPpPixTQVFL5EK",
  "key26": "4PjNVfaLTnBVak1Ynj2w7LS2h1nxQqUQRmPPYu71Nrbdefbf3CusfUZVRTHtr5tu2PpLXVT7VQ51E9qepwMVpBd3",
  "key27": "5JBdDE9wv96i5km6akS7ZnFJzPaLHDtphzyUWaHqLHmfz6GRDNBhD2mJaKoJu2dVaVKP8sPEtZcyF2HJssbXi6G2",
  "key28": "iHqEC24vd6W7T1f3G5WrP3t9Vs1KKQJvRQETuTbzUVXzdSMavfs5EpknRsZ4WXAc8aG7Kvx5xUyXBjHagj1W2NV",
  "key29": "44Uo2LoaUcXUuAzPLKkssSDrMS8Yf9n9qu4Ftjad639EBamgNWD5qkRqjFs8tMYqwB5mrMQRF2FHxmAA2jv1UEeJ",
  "key30": "5odJkcEBDnDHQQQHHq6D5nMf3SEB8t3eLTQSDULV9sBa7bSfKeRZUkuMDRN3REv5bJo6mtKP9TyGi6WB23KXoQ9T",
  "key31": "5jV6upCCPtbKZDZnZVDgdTGtMEo7i9LuR8oTk9wqpttFS97meYzTfho4NFqo3RbV4Q5TNjRsB2NrS2z7rLLxTaq8",
  "key32": "5SgGUAmyVkge6U32im94eKR8B8PjN7i5pYuR28rkovNNoXH4vduQv99fXmz2xf5pgGWtFXCqzNLUzUh7CZAmoJk3",
  "key33": "ppsMGvXFe2jcbRZkAK4Nf2pcjU4MNRi3CFnD9oYcQKrHY5GHNAv5gxKwhMwRW9QYegSfhTap7Ektd75nWDWyZse",
  "key34": "2p4FRW6YnzpvVxk5UsyoJc7AicZzYG2rCU1wnZVvdHDWo3duKgpMYfyNaBeMvAGjs9T9TD2uZrPSfBkxFkszyjTm",
  "key35": "3PjHko8YSkeSfva4KG4sgXuGmhN3fMDThfBZVBgUTDVvXYGSVqU3GsrcPfYdiWz65fTtiCo59pLfdr9FP68z5Uao",
  "key36": "2877pSqAtrgh1YiUnqhLJWpSoMvH9txGGzb8hdfiruh71KnodDAXGq2sZ4Q7jQ96VG1rCAVg2ZoJDMbCE8A9h42F",
  "key37": "CinxVwPMBTHNMgG7YdHpAZAaXNzvYrG4iKsQQrqycFy3yK5eZzb3N4dq1Xd8RmbqFS5w2DGu64CRCxvDdC3a5P9",
  "key38": "3ai29kTDhXu34CoBU1ztqnt8TKRsLvBGdyRhMBxF2EdrRTv8heR6YRYhCdZvVpxSfp9b7xLFVy2QByq9ZbRRsusD",
  "key39": "3SbbMivCKoTPHLy5u8NrP4T4g5hCrTpa8t1enp9qQFBgYLrPbjVBqpJ3wnuEyB372uQKnWrMAEMUVaNYiTFRPxW7",
  "key40": "4w8mVEV4F6sWVV8t1aatneP9XK35vYZ3qVraDfGzfEBp9kjSh1FtZP7gtLyt9MMhzoTa9Qj8SLm2aZBvQscdu6sx",
  "key41": "3wQqgj5RfWFaH6E5CEriszFkuCSr1bkCezYnsw2BEVg1T78sPDx3hcct1pq1Mx3buCrMQ5WxYdkCmaKNabMTokEA"
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
