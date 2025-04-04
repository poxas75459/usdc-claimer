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
    "5hh7RXjjhiAKJfCptcR4so9ChXn2g9gT3a2r7gkXE2cStf2CdRnRxesx59ozDwXuKw6Cknj9bNwd9RNho66KqufW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34h214oZ4UjWUcJT6jp4Kzs6x8zgBKdTbM53PmYyZYVsZU1C97kuej8u5ss2r5cAWhgHHgYt1XHCiPK3QCpV8jQN",
  "key1": "3xSStfCwemCdqT97H5YdV6g1DjEvwf6drvJKh2uZJwKYSDhJsAk8m5KgQ2U7vXhqeHtaoCvW7QdkWpBpqToha9ZG",
  "key2": "YWXSx6gvV6JZcss8mkEsVbHsZ3dmdV1NYM3eVWEJ5YF5turgFgf14Y23XMM87QfESznQ4uSFuAmFQMBamfwtJiB",
  "key3": "5YGMBNNjuQ2qx2FGqC6qhPYR6bfYxsj1uEAY3R8WQt6QgNjXDxEJ8bhgAd6Qn5K7pXSjKRnajHbtbm6BdRfkXxSV",
  "key4": "cXwfAuiTC3pCu4KYB8phHHkTztmJbPnYxgkTEKjAp8rjiXHhcUpqYgUaAcQ3n9Qbn6SEpGAa7fpj7M6XRmACyLu",
  "key5": "4mwXkPzoGFc6kg3gs41iH6HtPPe5AuQbCD1bMWi5jN1e1B9JNDbyUngTsgXBiobXEY9vdFVo9DVubJ3etxiTu7x9",
  "key6": "26pQ52G4wBn2GAREcAeYKv3o4mj5LBGP8xkq4Lz5AjAo8DXU8ACcoGXT19zcXcEWjdNDLoM5kfDQsbqirAVAEiuM",
  "key7": "2PDUvrMYsPNBsJieAo3kjfgDepq7EqBvtyWKByWABJU8hjt98EwmzAXpGHvyKx2EPpQRKtwjAvkRpNmKAbf1S8kX",
  "key8": "ELZLP1naJ5u3LQCZqZqwdxxD5XBjNdLxR8uhnwPbcwqUwvdB4BdhtxHkwxaFL6nDpqGAZ7VQpFsvCBrpW5ErtQM",
  "key9": "u5185F1HKf9y5nsfV2Da24VnPikwVA5WUQkLspusjcDufZhvSS44PphxyC1xifdujZ2pLuiSynKqynyXKGR8Tyx",
  "key10": "23T79i7nXdQpz7p7ZezxhBU3q9LiE9B3XbkVAwJzZ9AHNU3ZZwebhE226baVY6KDAUBmSbL8NqV1ybCp26C5REni",
  "key11": "3B4Tx6ovzF1SZsURVDk6a63VaeKyjLzrNc1hXvs1r3KDJdxLg9LudTHq2iuUeBQgecWp8S7KkPDnYmqpSrJTa9gV",
  "key12": "ko5VP4PNK13zNXCirExnNnKj6SN7QcDpyXLvkHdBhzPwaCi3SQK4oTv4CK9yZ2PQNAHsGzrPJyJBrc33ZQXabBc",
  "key13": "5YfbZbMwmSBa84TMyeyGLdr7pq9kgT3ZHrgquHyNZbQx1db3thqobxkzCpdVsk9godR6BhSbWWKAzX6C2rRXqteB",
  "key14": "651JhG3BoFrWFru1NKPZ1bw81BTxHmBrVmW7GhVKsKPXNuWGkTjs7Lq2u4cW8Fq5BB84GTkhMoB8Yr52ogTY8zdS",
  "key15": "4EYsAAU6w7tZ33AGbJjaYHyu65UDNaGrG2d2SRuN8Cu9hbBXmBYhWbzzctXiTG1sh6GZW9ycMD7SYqNL8H9sRFKE",
  "key16": "Dbz1iY8uFS5YmTRkF1WURU2d9A14zsu55jpiizcGmSKxBDQSUFzdtyusw9ixPRw261eTNk9K22cTBRzH4ajizHT",
  "key17": "36x6S6s4bQkKzmZZrrs8nKVpSYq67yfUjHjeid9a2ho1M2Zu8KoitfTCghD8BANBVwbKboME1SNxXXSnqM9gFHgA",
  "key18": "5TWr9SVDjJh4VuCisNZ6LmgfGaih7BGy1U7FtyKYe8yziSV7s6XXKMCZSFNSW5Bqc3BkaNwS3k9NnLao5DhZ81d",
  "key19": "5moQZBnEg4gNB7w7Nn8JHkz4Jvke1HS9Lz3Bj4ZCJ3UhCjTBr21SN9NbpXKmsDE7M3psrEPkt8HtLH5Yk2d77BrB",
  "key20": "44KMytGTSmpGGtno2d76vZDhNfkQ6xBp8PGmt7wARHfPB3ujNWAq5uxsGk6ARd1TEoETsghXWFTgZyinyAqyYzdN",
  "key21": "4ZcCG65vv7gV81fxFftwgtCs7UmyGNDuSpEUbnaDfPXYXqs3fiHEbSTJAEjSdcXwwosuhQGMMNydAyCjhVAsts2a",
  "key22": "3EGyMsFogTj5pbRA6n3DHVTTqqwNg7VQJYa4JnPUZxfM519CRrvBDhYiWuYbRjRNUUrrKqJdhQ1DYK43VMwC5FXB",
  "key23": "KaguDir6CxnVcyGE57VEfPc1rySdGqCZqk14DE3AdP8qTZ6xabS61p73PdMGe84uKxgoTKoWEBYtWJjzcAu5njc",
  "key24": "5iMbvdrK5UgH3Q5uHGBpWKyosG8HnhuETb6fD8QDMxWdvzWRrduG8m4tu9wA3VeYuHP1QeZGcJuWy65pVQQDdjHm",
  "key25": "4SmWgiM5hXPZVRePGRVgpE6HwB3vPkksYAeh62U4YQrChvJykV24ksmKUb26dhaNFrusb7YLMzt4dL79za9ZPuHd",
  "key26": "Y75echTF91qAoC4kVmCEeE4Uxzurg6GCK8r6tzWX5mkzwX1p7AJncRrq6okJcpQ8z8Mvc5odZHt5pZX2rQW8kKP",
  "key27": "3ubyKnhN3fHm5nURbqP41w76tz6PhTUNAE6qG7QjJTT7ZUUUhDquoTLumFFU4PbnYyuDmXwtpS7YEbE377sCtp2u",
  "key28": "5tVrSdEspttzfVjLFhfmFS1pvc2k6ZGxX6rcCUmKRcwYVJt2WMtMjXLtDhr92M9873nTNLjnHG8BiVzoVJLFjTZC",
  "key29": "4ppLFyy2BcryJDD1nAr8FzjFvV71oUNVborHGFAQKsZK2kAb7tWTFocCVyHmKE1JAGRx3q51v1om18Jeg6vBesQB",
  "key30": "2jnch7tjF1GodgLKF5UXqjhP5EiCFKVJYEMj9ADNUPHmdZZVCRorxz8jtb1iKTaiW7aNezgkJvQpdNQCq3B9Ha3s",
  "key31": "2fJV52TQhUgC1kBMdhykoA9fnqDN6muWeuxCagBaaae4v7bjjv3uWXaENVDkF2gFHqyBaR3fLNWS91i7qL3WtPoz",
  "key32": "2UEHEhZK4uqAZDwDUmAjMwK3s7tybD8n2NjieBKF7R7tygSviAidC4Hny2CcB6gJvjNZQAJj6v5KqxwZTzyP3o47",
  "key33": "2BRLRoREQTZB4LB4xqgXDDysDfeRkKiVLF2vkfedxJMiWSqUMs7bn8tvskgUX4dwyuxet5tmvpc4XEq2959rAU1o",
  "key34": "2L3fkDyjy9EkWyLi3iLvQb8iEYfwCWVu5i1GVpLmMx3hkayBY5UhY524ZPFXjzb5em3U4R4LmKMBBaAtpAjprjUn",
  "key35": "5tcc33J81mL3h6G1ncz2SnnRG74U1JhXUwqqVRqFYVkqHpiP71siT4aFQPAmYoHM8tU2Vu6RhXrp95nJUXmbHgs7",
  "key36": "5WusCmvZsk8DipFdTGuyxEYqvoHTetYDEGhMRYW1pmTpEd5s5jFeGPrib1fihBuMhKgrbQTstWVjtYF83hwFjjdQ",
  "key37": "4wCe24HP1AAcdHwmr2CfvVUib2Zhs2M752P3KeGHA2WGnCWXRsMy3ykrMkeuRXi3Neu27MzHCFxWJGSbciZsExEX",
  "key38": "3huHy6PuH9qQrcZ66hVTTjYTsAbhwArhVuNstrZwomb16MNpoYQawFSzPnecPdAemxcwCnwVKFHoNr8exb5bUNPE",
  "key39": "4VXu2qLMq5jaZiL4qyxBxbUuq4F32daUhF3hJf6Ud7WM4TQH9JHcs9QkUHkFyKbRquX4odUvit8JUiL1i5ZPzonX",
  "key40": "3v413sWa1Wvsgwvuu7uEUFox6xBrKXgVmCho93y9WmcM1coQRKZ5efppNAB24DwU7dKxP5jdYwdExUyqfUanMbdq",
  "key41": "4JHbayqfXySJZD5gsC4yxJt1yVp6Y55RbKvHGZL6Lztvgkf4s1YrDbDuU6WAZToXz8hkDLpLNwXLg2Ziq5r8VHi3",
  "key42": "JfVEAuSmYZq6FB6Vucz7egKf5PDGu3NBKZh4qCGQsiqYJy1qa2Fcon49X16dyts5gMPgtnn1iW4JhwxepnksanQ",
  "key43": "45vWQjBxsv815JK1DSB8ujRv5fdR8vcM9BRRCy97AY9h2KPb9bSmaD5n5kmTQxYMjqC552pbP4vYm6wD4QG8azwM",
  "key44": "4thKsTxPEcLrTH5b1CBSLJUjoYfYDqEy1iKvma41CgQU2nm3G64J7s5jP7m1H3EpvacHxCnTPNYmP8jyQuS5vuEe",
  "key45": "EAS9FueZww25zmFjBizQ5s3R3gekh1S9mkho6VrJiX8xGxi35wXcU61mtDsqFfX6HMRHJ7QL7b9jok6pLUTTyp7",
  "key46": "fKydbDpUd61Y2GnBHqSZZNm29ewbaRc9SxaL97weSDxnkxX5hVW4BYiH3K38ym3Ber6wHQpbtDJXEckdJGWEpua"
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
