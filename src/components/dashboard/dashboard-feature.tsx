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
    "62jhFSeqGUAUeVcpfScfGMLtknVhRVR3XURjgrsfPaUV4YQ2AhXwwPiTXpKeRnK8MQCiDj6EiykQR7sK45zEwGKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RgUBZtJS3W6oxuq9g7GynbPVavFy9BBupbVxcsHiReJnoCQKTbd6bEPFpYbdwWNBqexRoct8DpUN3eZLuXDBdTx",
  "key1": "3eTgJfiYAzVvpWCdMT4o1a5kbTU8qisCXuqE2avsA2Taw4pGmgkzVjzMVnaD5P7fJ1dBCEPzS5njTCwHgGjAcQDC",
  "key2": "59gacDSKgeTwiGkpdychzxzXDj1YvNFVNR1BEcT1C5nmkrMRR79mdxaeCHQ2qTBJHbAzsmcTTX66a5AYHJmtU2Qn",
  "key3": "44k518V67vqY5RXyNo33CsNUxbYmsEyhShd3Rz6DEDd7vEzHiEgbPuaq2NCFJFdpSjCacK3sdAGytDy22DUU6dss",
  "key4": "2sEBvjWRB6WkNXChwyYGHH62jy4gCbxpUJfARHAgXwdfbJLsiGmchQT2oj3hNQ1pnGSkpP5GyQveqcBUG63thvWB",
  "key5": "4mi35wVQQWBGcr9acMumF7xU8151xeFKv6nn6w3X6F3DiqyAXTVehzumXiLV6y7aM6nc4SALVaR1DEvUEbsk5tgU",
  "key6": "9pyH6gigvUyQdH6XXav5RU5rUWFgYZ8DBATHEabxpfFDp2TcBPJrspCqFhjNFqiEajGqqeutgLhasYNfJBsvWYV",
  "key7": "5PRyhpmkYdNYmNtCvA9PQeYwC7Q1RGKyyo6qtfR7veMEkGdmX1UScp4GGn6y3D4J8Qx4k5cTcBU8ZkMTWxYyvyZ",
  "key8": "hg6hjAjptJxFyYVGkQBySUKWzusqEQNUv37khh7hcGKZCzKL8uGNi1YeDf854jfL8PRSF2J2f9f5HBeKtfaakA2",
  "key9": "5huso3LcPYREdhv8YSRLrPA6r9ZrCo7Yg28yGzm5qnC3Rfb43RZtkWQPr6ck3axP3Hs6fXniWXDUtY7QrQCNKqXe",
  "key10": "3GxGtEgQVHdVp9aHNS1aftAnjBd4XCcnmqyDYzBFGHjYHgGFp8uBhpiKqLNuLrpTsYkr1YAyQ6B1peDbGJDn3CDF",
  "key11": "4VwBFhMnP5Y8QKqWK2eQLnXmoVyBH5B6Q82niyGTRkEiv4GDjK2WCij6bvAW3y83cyQpLav1h6jpiR283G6YFqcD",
  "key12": "5rvAXkVNDD5moQXTJ2ajpEFLg8wiaaBnSTgzxRJ8GnL21ZYaLtCE6bhA8WdQv1Td4x3jHz9rsgxcCeGx88BxbLGL",
  "key13": "2bZ5NjyJ6ezr5Noq4dScueHStkFwyUAzFVcds4KztjsfwPyLQGKdkgCLZ4WXZwqHydRKwoWJFMJrPrLnkTcHC6TL",
  "key14": "28RY4WYdKfEWMRqomrHmfsQjEKNLL71a42dncAGju43q3NSFrvKE1QBHY4g8wQRUmFwPyPnwLka5uqeYcJ8JBS6S",
  "key15": "5uquYks9pzEcuQhvXirGsY9vG9wuhwvAStxajuvf8h64j8rqefsPdrtkCwQ6EKr4Lp8VbSyvXUc9djTqprNT3HfB",
  "key16": "4okMbE6fKa5NuduJneh9U1XDE9AH1ugUo8XaDtvCQhXgkCbXbFedz7nE2ZsRPoCUGQQKnrZUj4zmtzaPzR2juXNf",
  "key17": "59Emo65WfhMs6LomevyaP6YmBfWdPyrCAdkxD7ETFpWDEeDt5njXhf4Vqka6MPXwKTTDY3RSjTADjLc67edJSiFn",
  "key18": "5Sqj7285dMeH1Qh5tpwNUFiRqze9fjTr7c4ZVSRxXSUwVuAZSbrT7GDzot1QoT7Ns5ZB8U6DC5obos4ewATkvQJa",
  "key19": "2CatPY7u9D8cpG68PA1TqmGWfMQH4E2WBgpGwsUjQsKvdr4vRYTh26hdyQnoZhfAUstRKXS43D1EhawzCTTr1tKj",
  "key20": "49vR2xrzVRmQkADjQxix6ZXf3DY2h5Zcmm3p9WkQJRb1CefPcxWg2VuMwxafQPzQuRCzKvdrKCUg1qtqwLPxB69C",
  "key21": "vY2h6rdJCf5wxucEyhe3kmAuhNqnBDzj79F8F9bC5qEiQ8w2W9FRnGsMbNeUCBftoXhCYoi6eSeKRLyUJjnG1Xp",
  "key22": "57MxH1E9UWpHpcDdrPprSxoZW1k3v6Eo3m3hd8z7MGH3HT412tSk9tTW1xKYLAs5mbRoeTXLpTZnzL73xN7SaV29",
  "key23": "5eesy1sjbcuW12RLXckCo7qPz11BkWkkUvMQnH7GH6oHYD2Pa9zjVWDzjE2dE5uaD8cZafFqHuFYuVxaehPb9HTb",
  "key24": "2hG6GaQ1ir8yT3hvU2ptdyXUPTC3fePa9XEhixGQqYHYyznEFnTDRgGLYhsufSMiodofqtFri1QwVqiqe6YFNk1W",
  "key25": "5yEMDHzzdUiDpRvtJX7zBbh46hiib5abW3hB4sUpMfYWLv5D55fLMqd9cRnvdnSXY8PJK1gUZBxZQYzkALoRRVnP",
  "key26": "gxoYfXF3dA7pU5bLUrAZRPptjAG2JAGB8Ej94bTBWRUT6vg5Npj8US2o6R4CzaQPebbyw7erRcCrcrDbSdvtdzb",
  "key27": "3m4N4nVvSeNW2bFoGYecMB3FzLAVg68UD6mr46d84zyEiG8umbNF7K5Ecg8DjFsGBXE2xKgRJJQv3SJPZnMhZbu",
  "key28": "23asWNUFR7GjsfmYE3hgfrMn3GWsqLjSrm2s79FjXNAu2Ptp5jDD1EwUcuqqYUaTthy8aFMwvLYyghim9FjvGUwD",
  "key29": "3UFxCXxXAiT5NSuifz6siGFy7gNgr41ksY86uYB3R2izk3FKCNQWhDa1A44kmgSAHoc95zCiJfQi899aE9woQYR5",
  "key30": "2A2ETZBRQCsoKQbLFTXC8RsbgyTFgCkmwSDJfAchEfYDmwnH9x4KdoPUdwuNh1SirxMqkQ5K4jo8boRMdS2qYFPx",
  "key31": "5Pxfgx5h4EDUi1hgpCWSVN6LbtKetn9PYqLveS3WhDk5red4cuyYidUmYfrMg7aDJxCBYTYhgG3dakPpGLvzm8xe",
  "key32": "4BX8R6LP8C1qGCx7PduSWM7VZk7BHZnnSy4SW9byszGRMApKr9gMDUKaVVwb6nEesbJJyx58B2RNf2JzCZPHkzYZ",
  "key33": "2CDcgKDjBSzmpGBi8V1KWhDf6QxYCxYqP6u5aBVSUqRyyC3dBVtLiFRoNMEJsPMjSFde72XCNLZxL442QTSBngSA",
  "key34": "m9gjXLZqL9P8v85z9uF3FqPo3wjZQgtHiGjnZzwuEX8wBKPUf4PkcvGozjB1q9RgmjuayD7FuR1Azzc95J652YQ",
  "key35": "qjZrubVfG9xtYjTHGnspe6YLAXsVXfTnSg4etsV84Uzg3sa95i12G63XdkcBz6T9vxhpiDB45xnD5q88hjTFiBq",
  "key36": "5gWae7r7tWJ5BAeZUvLX3DtN3d3KPQ3Wv1fi3kMs2WkTmH4BU7jxzBFmLjGa6Vt3n7qBkxziLfqpkr7knr5P73FU",
  "key37": "3Xz1Z7bDHuqAz86KpF8jAfj747A8fWg5A1QzXtw1MnMPLHmKv7UWSXNZ6TqBMYhJApuKyN58wSpEkxo9gWxxhPzT",
  "key38": "5DrfASESZoUaBumGam8AynQHhCA3dxQHe3fHXHQ2xJvxmzKZTS4AtNMVowWxyvEwhZf3jEsAz8o8nSfVLWV4bo12",
  "key39": "3TMykDFQo52j2E8mTrhZR28RA1K21vDHr6JgVHzbCM9KjS6kyT3T32XmCGbUvtFvR2KjAVbwk8YDgX9TQTMsziJB"
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
