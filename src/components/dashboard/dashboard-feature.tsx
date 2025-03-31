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
    "644ogzkQEiUEErLKCGWFgsqEva3LawygYYAPMeN9Wa6GiJbYxs5rF6jida2uZNDp1Bph21vWLostSnNYxMRVR3hj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "289uF4JWBE6VEVP9dmf3bz8heD7Zn4k8YKSQgMgtjenCiNNUEprC9XRoLiwAL5mK11moVSxpXvHwEwiz92VqmqkK",
  "key1": "5rQ4YFiEyxykPL1uNkasgXnozmu6uQ1uV7szMq6qcYnxtAbAgFaRrkmwTH5JQJ9qif2uzo11cjXVTDfg9v4BEXCz",
  "key2": "2fWmRXN9qhLs8e7SaCb6jiQNiP8475e31q62MfDoVYVhjNUCCLvrVkdpC9CHYeKqWYaHhzEu6VnpHmCCrQ9tHqPm",
  "key3": "3vWGpjntxBzv9HXvtaYo53i5cTW4r1ujXUVoanKH3QHJ6jSz6UxfKoG2FkXPEfmX92SoinVWYfdfe9y4tG7v8DXp",
  "key4": "3B4pogNV7AncyAmdtZyM2LDRuuapgDHHFdfBEU94juMpe4bnCD1QyUib9pVzx3gdnmKAKowQRFiC28YyBHv8NDfa",
  "key5": "YmdLKGqVuCtbPQ2UHmue8fqhGKfqLLFJidfZnmcV419ejpcw7L7Xh1XXz3oaHPxcmQbibd8yuVBR24SZF2eXfax",
  "key6": "2DE72U2QReTF5BsokRMAUDzGA8o1m77w2km4wjAnNJpSLZf3gDAbsaVcrMmSa8qdhk47hEvJsmZqkLzkPjvczEzc",
  "key7": "4AoNzvcKLBknJKYXA5CruFVfZviqixNSWw4EGBVq1y3oFixAWLJ1UpazJ4CcbzbLeDcfgj8xn9zreXMLrNUThSN9",
  "key8": "4rRi7RrWwLP192wfbvCf7z52YfurW11w8N6Ju6wSzAnyE7VE1zBDQPcUYvpTT9fJMWromDgiewi537Rjfpxxr1zo",
  "key9": "MfxkvTAck2NYju9XjFfQYLfHnVAASxXC31WxPZ6riisQ48AgUXPBAyKUv1fyVoVdQp8Wctib1iqkX9Nb4zqbeYu",
  "key10": "4ThtDJibMFiejoiSkXNuD74SrzEAHNjCeSQTaFZi8DmgLGUcTNxQmakBV7rCT3H7RtdQ7S1b6bxYXu5kM59QW3yT",
  "key11": "L3HT3MgbEqzr9UFVgrdJgvcfvEYXD4q1tM5pQpuoZuKjSLdzjvWsRtLmGQRaQARmmd1qQSEuwkrAshcPjUAaTJ5",
  "key12": "3XeAkF5X9QMT9RFkWHD1eQp1DgPry7KAm1BWhHRMqHjLu4U7yggDxbYUCAwAPF9NfRBYZVULFureVJuHKjKDvTEN",
  "key13": "2NMpz9dkV91NV1DGgD6fWTtAqnURMbHx4jqFM6bUn57sRupCSQ1C5pDSk8LbdRDQSMvcoAZxp85FK7E1qm3gqLSX",
  "key14": "MwwemEQ96n1BtVJqvdUDcFLdaiwWDeopipYkxmgdSfs3xS4n57NntprJ7JgKvwoh5jFDpq4VYSfRjXc1ycd4Ysp",
  "key15": "WVpjyfZCCAyc72XbgVpb28wwF1SzvzVKjaBuGvme5DrPDsh24TepT8BAKAihc75AVecNDRBi68HB5HqwtRcheMG",
  "key16": "2SAqeQDt9mMP4pvudoJy8FqACtDJCnUoQuPwWLUGP9VN57EFqMrFU9LkXY8MLmqry43M1j4h46u56qmSabPS4zMq",
  "key17": "5oGbph4EaYhpYyWc6eVHQd2UbxQZr88ZG52YDPsLq91qqdYrVJj5m1hcsV8jry65Rtz6mVqhpcckdgGXXoRyUcwW",
  "key18": "3dqLKqab3qUEANMhBxH3Qryq1rAWuNSpKPa7hR6mYLU7QJKkAsoEzseTetipXAB7evVgAToTbPTkUGcLbA1vkfc7",
  "key19": "4Yz35VbeKq9U5NpDhXdRyf2FHnwGAEqZK6ZrfgqNgntpAGG8TbogKohnBgADqNzFtdBJBAHf8WWUJUyq6dQTmJpk",
  "key20": "MQ4bqAc5fNwWApSWZSFgbjiS9VvYWZfYcCM9toTdZipc2wQWysgPbDi57y9mG8PaSiEuHTvexUe2CKJuqMzhQPw",
  "key21": "5J4odB1wuL34YTAZkJppWV2agXSiVMhz86wXqM93Wxzq1Koh7puqGGMz4Pzy2okKjwMMcA8VF9Gi9mZTgtwYJ2kS",
  "key22": "123T8YFw9k2r3xBDEwaxsfypKoyjsCpV5Ch9dA7oPkWHPxdEBBj3ciHXn6h51s8EYMXwFqKFicWLidvU5QqhSFH1",
  "key23": "3spHXuDGtSDEdyJwFsAi7R4mx6RC2Ed6qGtoh7dj1SzJ9d6WKpgRj8ujywvmqyhXdPJexxBgxBmbnk53BQt2DYzv",
  "key24": "5nGiHXSAn7oaNQcENZbQkAVj1MUwsYPufMGJk76fmUEhUUNTC6VVt2mfXuU2tLKrxRfpEdjSVAYAHFs3Zwe4ryrb",
  "key25": "3wkrMBypCnHKnNPFzQEDAAkGoMLVggaYsXxjdFYBnYjNYBnSCrMhm6nfskJcekbEpxFwjPEGidekFYZ6Bi3vXevz",
  "key26": "3CexPkvxRnGbhPxKgYQtYQPtdveKuMjWYMjbs4umqxwxAwDNus9oWEx19ZSyb8FMxF8CeVZUGPZnK256sQoyRero",
  "key27": "5wFBqas2ihxLbzfyiETmEGMxin3aLfAJY2qN9jWLMKi8dMeWTRqgR4bEo1fixWKLSuvteMHM8WHwPsryZ8jn4Wwp",
  "key28": "4WwCs3AzAmtvvv3nES5fyTW3F7uzaADFgmzSZ8gVeprTEuDjwb6BizyFUo88gYm2jZfAsv6gLSU7kQgBGw2c1QHi",
  "key29": "5vatisdgVUegAkXVDWpsueMrbxe5F1YxcZP7FZSqqbA9JCcJwcH6sTzovaZAKktcgwQFs72M5pUkCNRsskxARKS",
  "key30": "54xWCE6EENLMMECUu1f7xMQRQfZZPKhFQuuEfkvTvrRNgnfcKMFKQVdepHjzk2e1A2smsTAWkrkKmTZrubEWWhg",
  "key31": "67otjXfmyZRCpUcLopZ3C7DTSyaaAuzy4kGVdPXVVZt67RcyGzSKuyg1ikmjvQb3rSejFrTpREy36zGV8AfnbE2o",
  "key32": "2tKyCRSTCPFX5cWTBHbKZFPAzvrebze3HfLFnKA3Cqwdp81UbAavtYfHCGCAstq5KtFKWorBLyLiLYdcP5nTcW7N",
  "key33": "4PtDmAxMWYydkguwMvyxnjKdD37LFD5mw6YuE1hrjfa2AfEThEg4bjUAvpQBvuUDXNAm9NeGaNPP8Fasx3mrucUP",
  "key34": "3SfopLWu5J9i2wcQuuk5FJ4mR2kkLu835RQj58EiLZtwRerBypaP5iwtaQKW6MQFafpzn3NCvXHREWmFLZiCV1Sv",
  "key35": "3gGfLpKZ9UAegf8XPPPBPXZGnvyn4WpaXyhPhmUtxpWeC7URRYBTdDZ6AYfRjhNzkvxvoWBNiGdrTqydegFKxCM5",
  "key36": "5fTzEshycgpMzNcXp1fuFCyg6ztcnkUM2vtDMHUbdankZaDZHuwmpw7qWHocjRQeRphvdaa8JUAZ21BPJDQ3vQdy",
  "key37": "kKuguVLU8nwSquEM1KeunFTKf7s6L5avqf4zKw1vi9Nj3emPMK9KJQ5V2yCuandSPBvN6usqF2p3cxe2fhb15ZQ",
  "key38": "3JVSFM61RpwdznJH7pZixDnPeeMEv2SfnkrhuxM1sSverFB8AZMdZciv8t5HZP29FwAFpbGmxVNDaGkBJj6Bn1Wz",
  "key39": "4sEA2h5ie4deE6tbepfWwu4rhGpfzZbZ8eWWBVL7AnQwKNgWLFatSAoFafSLzNPBmxrGCNKsWgqVNiyricQBjN4P",
  "key40": "GgHj8Tn1nSHpM8UUcKpnouCZymkQDDSPkXhE8dQf3Yf876YZQG3QaaVsYqhE1L6ydVQoS1DCtBe2FK3tQNFQbkk",
  "key41": "2B9K6dCGRT1wdWSQgMbniZN2bSvUxqthKZVAwM4dva7vwTbxhiuhovpNX7YvPjyzTUEnHtX7hXsaMNdxZNbC8hk3",
  "key42": "48L79Y3uGYmqrsz9xgYmGbxsVPgWS99HD4N2QVoW1iX4S5rTSp6S8kPuVKQyWiEMU7R59MzPpsREB2pgM5jdurUS"
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
