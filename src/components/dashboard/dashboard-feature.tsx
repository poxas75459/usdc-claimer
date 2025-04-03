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
    "3aFguurQYAnyXztzXFad5zgztw1g7RtcYHdF1ZwFNxs5KXP78MukMbKEgfWAFzpGx8eWzZdyDNsbU5dzLNWH8oSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ttv8DuDnuAzcksVDGvzApd49uTQrLwvmFJXN3Fnefz8qBrGiGt4ZHK9CvwTfgc92i89BMWH5nvwfRB9UbVj8em7",
  "key1": "4NMbRitpUM17F7befwq4oBcJNKgiCLviM5mw1WNr7McARo4ZiYTViX4xKCSV8DnVrBBTXqAbqovDeMdUBFRxftRh",
  "key2": "2nbFsFdgfKguSw1W32xM7coQ2Rab7TNSp1qB5K3XSduLhjz8kjptH2urjGnXdPcKMTPFYqxXqgxA8mt8Yiuurzod",
  "key3": "5SVrCFuFauw6sd2tQHK6QCsGxYxBeGLqQ4da4CpNpcFuKCLeQf7o2xj6263Ua5ocyd79qbiodUtQf7e5uG8Xn7Tf",
  "key4": "57H97A9Le92jH4LG1Q15WzE8hxmHdgdQEZKKEV3GBjSGG5Zp8uxiKu8B5xBFFmPWbXauMgoAfBqvaEnM5yEWJH6A",
  "key5": "4y2ZAbpeD3nboACvA7KXk5M7f1uBjNhYTXZoMfea3Xb3WeaGswP94xom57zb3ziEyd993am9jRBgFka1fZB9Fugr",
  "key6": "REWs8hbChYbvw3anvs4r2skXJ8SdZvmvhQvc18oPPXmz9eREbJvgcg25ym4hibtTipTwVRf3mghT3SoTNbz8Vkh",
  "key7": "5zynjdHUp2S5mnNWQ9bUVaqevjWGSCxqCBC95UYx89N93cdtHFkMn3WE7fei6vuFQp91vVJGjpC3Rq5aMepz5GrW",
  "key8": "zBg12Fn2C7io4YttG7Vm12KDX9u3MZA7MS9CUqUVLYSbzifVVnja6y5GwjK59nmx9gwADjEm3WuLXqM4vyMJzWg",
  "key9": "4TLT6R8Q5LLZ2W73KNDtBtEuCRiUmUSVLTUifV2UtHKHn4fejbKsZvNQgVWMYBVJhKAgRLP3jwwUjypuKAZYVHFX",
  "key10": "2rwwKyyQKBj1Dy4s3oLuCwXwuqwkh1SbVswuA9Jasoc4HKXnTaPeRJUtP9zMm3ZAViRp6PHDVRFarCo9NUDutSbP",
  "key11": "5mdJ3jZ5ado8ktTkxsS8T4rU8NcC4YSrFC5AvTAD9ENa1bEVGuy4p47aeZquuRjJB4qRU9cEjGcqYrpKo7v1oZop",
  "key12": "2JKtvfRsEy5VkwzqWagiBmbiniAZeTvTxqi9aJTmiWvopUYxLuTHjtRuo9btCjsxDEA4AiaDyhEsQ48GukhqBWx9",
  "key13": "2Q1uESFJbWM7Lq6Jwr8bFFmkzxmfQEUfmNEUE2E71LMZ5Pi9jcRq2H5ak183zcqQAch9P2odUXaWEMRy6uBKPm49",
  "key14": "vMs7JG4P3kGsYg8aMMvdXg62HeamL8PdT7YM6QttMy8Vd3rpVEukPsk6Mja7My884UH9i1oMzvCuey2UmCBcyfU",
  "key15": "7ZTnToTCT5zpxK7kWHYRfFBswSEUmqVb7syvh4xo1Mgx28GeQnFUETAp5uas9jJipR1ed9k1yRUeJd4jF7dui6J",
  "key16": "FCubn48U6E9gE5Gd9TLyweHRwxAGL1FujdhxCZTvxrwu9tMQChh744UtzgbFVpPUy45FhYaz8Lv9ndt4Dp2nDjy",
  "key17": "5LAXcbKPFfzTeB6fc9rKGkwnKHxoQ9Nuq7PYzWig2fXUis7GkokZ8AJ3EwZuGKSXCGKrR7or9Rpwkq3LseztwKAw",
  "key18": "4BqEvSq8i5pKFuZ36pRm9yjk6XEvWvbcMVZrehASkm6Tkd75AEpk9DJbEemYfHrsqeW3FWAbN71GZGhMAaMsqY5b",
  "key19": "4j5UZSwLSVXWRPPKE6aA3dxvbbm5kXmfHq82vEAgu2uHjT8iMgBDgbY8QCidroAVkpDHyr5Uq65RnU2Sk3ckQibg",
  "key20": "7FyAAqH7PLzMh87SEqWh9bYsH2CzhzNUh8wbajMNhx9auvXCFgpUkVdwcABLTBLB93Kyf38KQUtmdLunkpBHoYV",
  "key21": "d1s19JYVNi9mX6og5JQ4bHKpusxaDufocL1gdc1JiUKYdSfmX5NKBWkErFtqTB81MTQ24gVVAMKV1cwf1v1JU3Y",
  "key22": "geUgDpSzJCjzeukY6BYhaQeKLSmXFxNjMWoD5jJv4SD2Roe6TVBYLqvnb4HVajjcrWBgQJ2Hz43Q8shDY14exxP",
  "key23": "Q5Dw9fzv3HwXuZQ4hU8VbxpVYuVrdkuJQUeMi94nKGT5GZwZpbePViWZdKn68BENxWCe8Bk8Atb3iHmbDz2aZd6",
  "key24": "NZAQ6d1v6Z1wejBpvUEQX2MCv3kKPsZKwRnrXDwb1jEDh8UoidUBN6z1a9bU2Cavo9cyxtnZpM2tbsVx2zggPEJ",
  "key25": "2UFpBMRkguxGWx7PUnNY2aQVD9rcmYfcJTaHTsdQ12Yina7EZdQRjfojxqC7GVzYAiwbdtbybiW7ygADR3jVLbXN",
  "key26": "3svnspPbwiGPXxytj7Xsu7vSX3joeBYx7UH6cQtPGZvss6Ytq5mRgMGRHsUH7w9N2587fBBFHSoPCrCGBeJA7Zmi",
  "key27": "3BaMukgMk59Qe9uR1sEyC4c2ZyCoaDdRomnYoU4xFD6YyeAkTXz5xm3pfLoiwNTrqgi8vNMrK5KRaV6YYK53AkUF",
  "key28": "pMiuA9FinCFn1x28HouVH5aWWrmhgCmqU6TKwM2PagypK3MAebAfHpFQcSjf3Bafp5NdrJKZJSdHZcJBndqcXYP",
  "key29": "4GJS4YpHVRzg7CYnsa1Bw4v1Auixbbpj4DDQ9frqqg8qiu6ZeXmDoPigCqR7yvaomtm9KCgWvHEahU4Mp6zCFH6W",
  "key30": "AHQyHdsr3ah9Zqx2sp3qzjJFeigmJk4Aaqpwcc3Ev6qzfwQ1H9TgDTWLsuXXur5P2TpmjmFw3ert53QGr4eNUrJ",
  "key31": "3f7saacy8Nk4vqPwMiYuFnndyn19jAzw5fPMM7u1KRFWq23cKHCDKbqCuLafyKo5GvrCJ2DQhLnCTdoFcYcXgoiT",
  "key32": "4tqqctydNzq94os4dcvmntkWxYgGSddwM5NW75SLh7zxupE2W7s3Dd7SAcdCPsYxdp21uZ42LwmLAys3D8iduTaL",
  "key33": "3XqR2CKPcNmWtc5Si5aQvM1M5Kz1pBEpYGrCpDDWKNaAL7ETarhWAAUGdzsNFdgi9JJH8JoxnggUmh7QdgKPWyyR",
  "key34": "2dSG3HPBM1nHVr4CuMVSvptapnGdE8qjLEbWzio2aLnixGZNcWjq8Foxd2uk6MABvpp8v9gKT28wRvNkDG2hTipc",
  "key35": "2efCk3aG76c2wJny2n4NNcrmkBG5FoVgJA2MAjmsVxgqwbFxwGBTeTq1wuxeBGtkZZH85i6YbRuZt4BeTMKskdq5",
  "key36": "32gEkDnmPw37nrTGgmkjhsYFMYMdKiVVsDmaZrJ1rjpvkS4n2T9FMunWgqom3tAiELxbHERrHiohhthv8TEqiv1q",
  "key37": "4mP7WGQ5Jr2ZSkAG8DwaC2EBeyrFPoSyZa1EndTAJJKeyBydRmj5XVms9N9yThYkzuMEQQnf8pktX8y52doTZjda",
  "key38": "4KwgZEUUo2ie4PkeTrgx2PbpkpPCUnL2q4Afw63wVwQr9BkwHPmv1ev2mpBngoXxWu2T4sroAex4dzHkMNo7j5gz",
  "key39": "49fw4BBoZUuTWvJkREmGjo7MrkrWCDbSBg1Uo7VsuQCeJgeMLhU3YmttYf6QiD3fHUtv33XGk3nftuDVEZNGHHjp",
  "key40": "3ZAuCA4UGBeFBB8o5TV3vXxBvUePd4TNirDyBFE5Q7whcmjMrhKr3kK1nQtwnLAg3yUXPDzrJF9bmpf47q7bmugi",
  "key41": "PNeTZRv1Stg2ytRhViFc1yaAcN2hAdKn6fattHWor7DfZzXfbCZ58DPYGhsG5CKkJcoRJ8LZy4PNJ7DGdj5SuPi",
  "key42": "2DFQPoR1UNsR1J29me6B1pBAuVsdfDJoCAFpNqwvytSLazHnQJJBLs9MBNgBVAhGd3VA4eKEEbjrXAy1XEW3Hxei",
  "key43": "E2NHnZUrt2sUZm6Nq1K5mZKMVQcFfT4MHFvEgaYTJqy8VKfDCt7Et7TYCRU3n1XSWHe4tLM6W6shhedEkyrKQsE"
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
