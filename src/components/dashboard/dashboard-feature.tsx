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
    "3Vfo67T8cpTTJAXoZaeUP2w6fiQNoLXHVTxKSvfGi864ufQnG3PrXrnLScTeRBWJ7Qi5gh3kFiLDRxZV2shHp4xg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MJb3ovyYqHTwuCkHjtSczqeg8cMQX5gaEnodBVLJRg22WMBzAhrx6tZ4KTGi5BZ3CzjrZRVavbPaKNDXLX8NsTB",
  "key1": "2puuxnotiMtgygsQNH784NeTzsZiYhusgJJTN3HpdS6FBtmheq9FboFWTTynvEJYARTXUTYhq2hoQBd4mnnG4cMq",
  "key2": "5qhz9vHXqL72Rds6XdKtZMmVRNoZ1syj7WsxmTZvVeEf1GxxeT8o6nv1NDqdXMacr9YZV7QC2stawzA9sP3CS9gZ",
  "key3": "4xbvhFhYmxTXpw7fQCBzQ189yZQNX1KtFDrAP4Xr13m1bYJxuqRZqkcSuNoj6MBquBupgQKB99tkrjhKtEiSUf7M",
  "key4": "5NqHiqyXCMLKZAucgw6v3hFrwXhgWu8tuxaJ55Gr4nWXoBxAQrzkZQRQcqfBKkuZKfjxdDY5cC8ozeAGXAEoPPht",
  "key5": "64MqZCKe8xFJvcyUn2M2uRzMSieTx1gDGR6tW9jghQiFbF825JmrE5sfaRpNhq43VMcVYAvKK2oaTS6Lha5ZZozy",
  "key6": "2pQQL5qyip4YJCfZVUDXCJ7H7jBQb1ds4KjMWhtGm2GXRPvxuzfeWh4rzKNxhe3UK27ZKyC8JmpTREyZcz2x4LjY",
  "key7": "3uUPxYTJCPdpS1JjSLb2ickwufc3RgNZr6UiJrBCvRuGYJGPQ5LZqGhv6kLZLpeBnQcmZ8A9HE7DQfBd8h55Uaxy",
  "key8": "2MCwvegNj8etrCrZiAeY9uV8eofEu1wo5eayTAiAt6RRBpojZ5XDjtY9ax8GYQgHfmikBWxqACnCw8ckVkUf1ESo",
  "key9": "3C49roYZBMtHVCLsEeYUUCEqrnQRdp1hSm46Cmb1PeD3BeLXmGJQ6Q8TUN6FrSWkHkj8xn4gzu9ATHerkQ5CCXH3",
  "key10": "3Wkj1Gw7MDPKhcPFNV1vVwxrn9JMPg759APRCvxig1oXE5ji2Tnda5ekPdirdakiWMPo6KXn8PYmEWTapka6XaSS",
  "key11": "5fDiY6Z5AzrRTAaHvyhrzjrdP5yqomprMpUk6qTmAPyJf8bZTy1XZz2VJKGoJM2EZro5EprK1TSf2pUeFWyjXWY",
  "key12": "46bUsHjwmAn1TSKUvN9NbtetR1ZWEeitbrZ126rgnyDcMzhfh3WV2sgoxiy6ksS1A83DAsUEZSUUGEcenFT3tVjB",
  "key13": "4TmijRijap9WLDeCzSyPLwYwKkQqgqMkhsXuXjoovW5Bmpno3CURnzaj3Dtz2dTsgGUGJcSxic81h4bv7iAnzVwe",
  "key14": "4ku4YYQzqa3qNSb6RcAfDL7YVPt1RKUpgZzqvko4Z7tMsHjrB6FCaDWuWENHGabtsB5FJfBMhjrj5XybvTaDPwJ2",
  "key15": "5iAvPDSCEaBS7wYJ4pU1Lk4dZDjGBFfzbJC7UYGSAZxfGruE6UWBckLFZfQYG5qUGvY97vfqdXWkjd9N6iJnvH5i",
  "key16": "jQ3zdbCQ35NmCouNFcWb925oL47FNRvDb6XnU4FhMh193bQyWsMLHAKikSaXxh3ZsW788ZUduJ1dnyXQvMSA5kC",
  "key17": "AVypV2uZZMbcKTinDBY1j2feUrB3eWwfB4j6k9HZfrFKHy7KMeBWKth6m53HSB5eMHPKMAJyhP1ajuPahDGyPQQ",
  "key18": "5gtvHV9drNZEg4Ya7iYXxiXJMczR1DgyLZ8HNrH1ZxjjnQHAhW6rPxwm7VNaDx7FmiQsijzYaEyn1pR8T6aopLxb",
  "key19": "5Zh7hiJMyuXgnjGgeytcuyh2S6tE2kyqYiuPMBSicPuu9LzMtEduu925amgCPgNF4HdAHyngnRb2X1wCHfnCt3RH",
  "key20": "5P1pQA3AZ1ri8d2yf7JeQLvBhsgaiG3etMYdWmQSrRsTrFeZoV7qx5iRqQKddDMqspWYuN7Fx5SymWena52NgS1d",
  "key21": "5EbakMpD6dk2yrJZv8TgCV2HT8ZetQF7BfpnpcF4omNRqWZCK491mFx1JVcoPwhKrAFhSzYiuKhaNWkJ4DEvAQu6",
  "key22": "3gxfzkjyGePmUSytGFM3fKjdMETjJPKtaSYUGX2vqYnAc8QtqRVLSrMsVKGH2pXumiQAZnW6aSwmMfWkRfGczEsZ",
  "key23": "5pTDvsFPpGkD6tx8JpGSwUp1wp4wcBwhVTNqmiySj8z7hEaBsyP6fe3F3sgr2oM38rhRfYeUFYkqYnej4tgNciYT",
  "key24": "2o5hydgegfsXxzMdAFa2eYzfPdh8Kx5JyVZas3snozUnXZVa56vGngAxdSU14UBBE29q4MKCxqJNJWPABYhps6b5",
  "key25": "5gRoJ5zacDgvmsvMotc5g1MQSYwsGTxBP6viuuDB5onne2HjiZchqhvkArDtoaAJEraayCmdGdpcw5jz5VnJHh1K",
  "key26": "mKL3A2ZFkmkmiYvFrwTnrYuf8mWNGGTh63h7KiteQ3MB4oJxBk2B6TEiGrNdzLJXCpKKkPNe8BZycBJkPNkYKEQ",
  "key27": "5SSHK4eJ1tSqVN21PtRhoDQqFypk9jyfXcfEgRVjHmhPihLjsqrugSdHgc3HqSQuPLksLYvcGb6bu6FfsRxZkdQM",
  "key28": "5DHPLgZSGkSiyoZhNxihGEpYUKkbpJoa1HYvCsx5PtZyu1npA3vxgYoRpU8YwndyQzoCkR8mPQ5KXJ4kTkszFiaj",
  "key29": "ajfmGrdt3U1osrUC49vgPJTxA87d7z2BsV29HMNpQ5YiJBTXRyhgtVguTj3mK8kGKUoteEvEVZiKqgJvqyfLpLq",
  "key30": "dnwwx8ByZk9dXNdsyiJPMdvyt6VCX68EJWc2UAZEqnfMMcAK9YJofdzCz73iWGyzTp1Ed7Y1zEowpdgLa7ncaAv",
  "key31": "QmAyXQR4S7jzjySWVK5gybudvX3NQveJhmXXiw9KbcFHSeTmhrM9fwEz49bfZHXLKpkJTE9W6ShomwRy6MhYkgf",
  "key32": "5xoNLR65NwHLzinYJdK4XzBna13oZxRC6aLrUubXTtMQveknkimMyGnepv2mtdsxGBEUMDJMBLMN2B5Rj8TFVJD3",
  "key33": "aY6DbmkU7Ttu7S5WKx3siowTJYPYPwaVGru9m3mnFiCEh2r3Y6J5ZwwDvjyRbeNLCf3i6e2jmbjtS9W1AEuMXJN",
  "key34": "ZRob7sEqdWgXLZDJkn9q3VAaBEbbMXHkc2aQ2jnz4Hg7aNmMbCHgACarQFC8rsiUXNxmpsxumvaQmMP7cTj1iRX",
  "key35": "BU6zc39gZPpNMoTeCe2qj6LCgh2xnrH4QcpUVJemfMtfWpFgp9Nyt51UQJsTkdKB2W2TJmK8UJsbRPuf5M8HZJ5",
  "key36": "5U9cHwNvRmnq4gXxugNRAZi9pDfiSCRv9TDYeSPagJdoBfcWR2G9TFecAAfqxhusUZLCPjxXZ9TX3rxdodV4Wc6G",
  "key37": "46PnUSVtck9vUD3jiDFHGBqSY8nhst47iMoUA6R1G6jUuLUgYTVe2GwXmDRAAxMMYSaMUF16i7DyrJqSfnt3vQZe",
  "key38": "uFsXjtFA91N1v66UuqeYZWU4Mxc2mskQL4i3VL5kD9SnpzMRCgD9AkNcfVLZFwTyG4FtF6nfyepZLxap8BmgzJw",
  "key39": "2syEYwVcpboZiDRA8M77r26i1ajnHfhkPY21YL2AagqoEbpCgS57co4AZ9DaLoQZiHzWC1HPZPECbEoNbvwUsxYb",
  "key40": "2beazTU4pm8TWLefyzpoEgd6z1NoYMHDDYkyo7b2NWvQVmXbH5ZhFQL82caDiXhFkgx7cce6kRi8yuaYXWzmm6HG",
  "key41": "53eNtTWgmWwGiUB9jnGHj94RJXUq9HTsWv5e5UEGqtckYMq3orcaegiV7cMvuwXAJtaJ1pqmd7hUhnZHSdAEoHJP",
  "key42": "CKnnJqqU3BSTizF42aGZYSm5FDDFq3fyQNXe9Hy3kTjtoWbbBaPQDenGujztbUb9gr8kYy6xdpYNL6J1j3Sniwe",
  "key43": "P9TzrSQeDspnX3eu15G9WToSdshDMDZJbNrHyMcq8A4tMtqyXWgmku1hig5rWT6DKnov3f8VWz1Y5z9B4DHV1jh"
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
