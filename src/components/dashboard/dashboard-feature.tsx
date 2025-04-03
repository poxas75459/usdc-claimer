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
    "5bRNz26VZ7PQacNosrX61bqVpiqZzn3im5GHUGdGd95e3c5iXn3NpSqGc2zZDtNWaCcr5jrZawGczWKy5UgxwHf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y8i1Wc8zcX2WsYdGvTS7DfGpWPMD7NU2x7oYhuv1YX5us6xUiZptunYWVV41JErpHpFeyr1yhJCQHRFCSUHQTCT",
  "key1": "4K2ag7s37ZoWvptctpaMsBK5cAYVeTqZ2hnXqwn23pbQEgqWjAEtTr3nDd1zEipEizTxYriq6sWB69oAVbNzzKnh",
  "key2": "DVDkL9jyzV4PV9SB71s2X9vrmkiaT78zQHc9pGUmHk3CshCWuH5ogCwcpF7m8KdPSetvPPvEF1EAgKLwCi5tizG",
  "key3": "2f7u2QyYE9JBSpCzyYjnHR7E4AafvgTy1229ZW7AbmMQcXKZbayRQap9ptigqreuRPkv8jkiqYkWCy5LfgNbgCmX",
  "key4": "3QrLg3wA7TgugHZAkz1McBSxbJMJhnNu7UHg9KiZcpopU2nvUHAr5ersyK6ucmhfGRDtZQch3c2ZHYEtRF3DZAxm",
  "key5": "3QMZZHLr9BQYGb8GnHW9WRiX8gChZyDCsbgnKLYgJgjzR3mdpGpbgoranUUVCXVe7PmdD1h5NbjtMbnP2exRhaX",
  "key6": "2kH2NF7322y7HjYjZdYEkCgTfdNmFUrXvqQ9bW8p9bQSofhQZigb8yHXXYAJpdDj8DPfQDEXv3ztXjBriSd8b8Hu",
  "key7": "2HWA71L12LpANapoVeB3b2F3jBDMbskvp8W2LUpda4GMuuNkrpNDw3xSrhv9RojYHTwP93iqSx2ADSzTtxM9nPGb",
  "key8": "2UaXyyimDxXPbf6XfeaMywm8QaAZ9jQyuuQ3YGr8pHYV2A9WppJPS9h3P5E92PoWbVcwnneU8C2C8KsAHCiKot39",
  "key9": "kAF1W4Wag2v5RndHwWRY1RmxhpkyZVwn2QjMUszUxHjZwddAHx5jTnLVi5Encwha26vaVoLGvwWTkfvjzYfj9Cp",
  "key10": "MG1MzS7ee5u5YaVxeUT4qKtauUfQ2uFK9mS5s7g6BARtTLVsmumHAqbeAuU4sFaAfrL8GNG1XahQZQQiwhXsxGN",
  "key11": "YDka1VzAWumjyhKEWrQDLjDS1tA4rQs8nL2ZyoScmQ3fR17ZQDAGHt8XE98vtn2WRdyXZpHdPvPhAZoKz9fuVDX",
  "key12": "3Ji6d5AtK7C92vJYiUPkandb5qPdivtKjKWpYwiBFmZCwZ8txHXLkjQFjbnEzC5CSJBR3UaY2wSrSot5xHwT1cpN",
  "key13": "4Laor5hZKDvbkXpLHqxMvffBSR8KCBACrWFaQWt9kSToB9mrbSQPRfNsWXTr9Pd9gUyiWkejNWA3jN3yd98mit2U",
  "key14": "2iq1BUdebzdoGWS3Gyx8vCR2sdGFHubxHWKoisg1Nm2xAJpiX5K9FRxALozJyknCyBkPV6sDLV6SggKrgBUV3jh9",
  "key15": "3wNYohkkjR27qRgPjCvhjtar756xCWVqcqV4jCY7tzwqLBvCZ9hkCUAj56dmdB9aPpqGXGtnX3qd56JtJYVZ3hXN",
  "key16": "3JKgeN6ok4g2BKp4nHTexf5XTDE4WrH9x5bNuTDmn8HjuPJW95artgMLw3P1gUywnwQdHmHGDjaQGJg5QcTcyCRX",
  "key17": "2HVALGYLdx9wTb3Bg4xzyByFC7zq6j4ntiDgv7tqUSKLQ88KqT5jYDVLL9sm1gYTnHXTTaukiwuB6GDpXZEVXmqq",
  "key18": "1XGRpuTC6mNdSTzLJfz1W9B77DAK6SB8bN4ryvp7knuMazNLydyioDnuFGH5JsjjXzZHPVNzVSR9TiqrrnsifZM",
  "key19": "5m8Bbg4RTQN8JP3SyqMCyUH7Uv7gfjHVMwhs1ccMTTG2292jGmodrWUja1gXpyVAebUdjEePFEPSQN13Facttu47",
  "key20": "tubTBvudhKP8jgLtsqx8doKnVFciKKgar1Re3nS7exkDhyWS8cxcVXmzUb8YDdmX2cSMWfTfgcba23qXWoKKi3t",
  "key21": "QdBno19eVdJfKoaLEXqb81st1VmBCfdMFqfRBxM3g4RMLd78d6FrcFg1SYDpiZ5DY8ymaBmjTfKGJxRPGUuFpey",
  "key22": "3bWkCRw2afKtLBQjNLvR7CVwWGT9Pkd69VaUVeSxTmcBntnKFNa2bCXVUFSPmF8h7EKbuaWNgWvXfDjA1s2dMXha",
  "key23": "3rN4PZkkz2c2iF5SdAuGzobF2BNCay5gtv2vMG4BpfQEDnV99zuziwit4ZFSqZEqDw4EQdoG2bSJHtz7z2NQz96s",
  "key24": "EzWJuooS6pp6DLgKpR9u25J4hdk7kk4arj1FNwkKuPx4J5t9jP1QH1eECGQYw4XCSBoy52NFvGFK2JfcZDuK7dv",
  "key25": "4b5UYb6BJiV4cPXiEapaNDaj9WYZEoknJv2hLzFvrXr4uFJ8GqBDQ4buYHrozQSNE2Rp9nYh2UGzxWyAJkZrk2Px",
  "key26": "4mvEQXZBB5C6snUaj2u9SsjrTJ8iGChyPZn463MxjnDAQAWEyN3JQWEcMmwQ5uHMq5tTdbrUV8HMixn19HMVKwuH",
  "key27": "4CEuh44NxjkiPgC6cbN3Yc5wsEAEQpFgHT6tbcdkE3sHq9fJUCuHoWgktKGQnLAsjSzAyi73qwcX73TfwgZtNBcn",
  "key28": "aaMgUueLPfhrKDnMFxnPTBhzPK47zzf5PddEm6EBx4iHvc5rgiUHUJhyVvHcqnsyFM1FsxnMTbv6XQUN4tuEB3j",
  "key29": "5ovzVWwcPCEFwce7TuFYyc9TEM9SfrQhnusk1p2yuWjcwH6AE1BPdGRZXxvjovuDwir1HsH4AyVX4D7TuAbF6qKt",
  "key30": "SDoegSabXptpgkuQnKsyHcf5C1FGkarLKbSbKJcz7jTmA9MZzzkXqkk42z2urQAFYP2VhLR1PqTWgkUNCv1KULi",
  "key31": "3qmXjgMTiCaR1Y7uNRqMve3EtjjQvKLLX7qoJnvaG4ZMxoscCEtcRoVzhuP3kWEG4vZ9eStY6dMpTExmt8ZHP3ZW",
  "key32": "3jLyew5apHtJSweB9LYvscjHxrs4rtWTGtKMv73sxm2ngbu2cMJEKWJJVGewkPE63kRJgopjeDR4sq8fsow1SBMK",
  "key33": "52hmazzLcohu3k191d9sA5PMFKdugtfNwFR8XFE5AeHXhda8hCwVmHNp3NRExLa27qgZwWrYnEjUqQBPQhp2S4us",
  "key34": "2M5Sp8WRHVJfBue7SrNnGqDRGEVvi1corbMv332oKf7k8D5DoqAogTQNSN1FjFTRWs5LZaUkafSGQb2uPXDQE8N",
  "key35": "5gr1W7pHdiRXvac2fe5NU61cTcpPuJLLbNQobdWYr76EvTCvWo8jMnXCdh6EQ49FQWFfHxdxsCrUprqoqifw4tB1",
  "key36": "4fYV5N5vAM8aEDUQgc1Rn8HfQcoeBi37ZV3RJAToeXqgktSUq1uS52jEW5Lpqjnz8gnycCc74eG2XebrzJYNTpD",
  "key37": "55RMGLq6yg7Yv4t1yxueF1FDgAS3VoxBB7S2zymKEAyw5egCuhmv6SJD6Mkp1GqtMzUVPAqLgZgrHKesniN5Nvzy",
  "key38": "4JJfAXTczuPPWUZNdBwj2WR7wk5aDbkV8YjfpwKzG89YEC6wcumQKTgHGJKPVq8VCDjxE1VroVuU1TK7YDrd9UvL",
  "key39": "5jpgM5JH6csRMLVd9KaXXFBP3RAnMj536rTKwDkrCwAnrwj5hXTvaC8ej6Uj1GLgzX481inqn6X2XZh7KA3Rth6c",
  "key40": "5x7LiyRkRVjPacD6Qs1pDqrTx8P1RjMnBqHc8Da16HNcY2wLCf37p2daMT9c2vmiq9VUrrt2FhxXYgrrBSDEc7X1",
  "key41": "82EGSUoAfBi2QR5XYqPSAo1Tfr2CFdFftjfiPbCkDaE8p8sXPnsfUa81zah687wWVMfQapKNxA74LG2RC4igGdT",
  "key42": "4aynpBG7MBpUnwgFZuFUyZyTbccB3b16KUnfFyAxKPifCpsjeebopitkiAkuRdiRVFkvuArGupNTtbXFfhPe8xPF",
  "key43": "r6XHmAj9pseYb8sxrbBP1CLAXVZYfM9LfwYi8cUetmvjXoxJb64qyAwGekTBeQfTpEpyZdzmSwKxjHS8AgEfQ9J",
  "key44": "3zfakY2D3DsJxcjacvxoc2pPAwWivkPHr3efeYrRnsX3LCmtAMqfGQcvLPkMmcmfGRNhLqnwqvqyxPBygPe3Y9ed",
  "key45": "4RmKiKPxtJpWwBKo9xm4uARmJk53UX9SD7xm3vH2HzZEuPsww7PUcyRCCs6vdWUUiXRgoE2qVaiTmQcpC1pwTmAZ",
  "key46": "56V9LcSYtYfXCckrph52HJazSco2AHQzC1qxCfuVwxEUvFWJrab19oNeaMFjFvXS4RE7pv49GeaUsSKUQaFrRQAN",
  "key47": "4yKs5cvdm3dj8Bz7pFtqVoh6HWMJBYRGf9NvMe5m9fJUuxodvU2RUFPeo22Xu9kgL2hM6pASh54ChLA18gQ5seUe"
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
