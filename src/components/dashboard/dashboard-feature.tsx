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
    "54L3eqkGj4H9v5jvkx37EFhnxr5ckKt15VPNrkBgS7qE5dRgXXzEtYdWAhMY6AF9FnurMKaDAk3JiMEfpfcmw3rf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZHDg2TrDmPaiGd2wEg3DJ3e7A44iYHRrMaum55PVdwReLfMjMTPD5X6fNwf54K7C7DVFhrcRBQHV64E2AgRa4GE",
  "key1": "2iH3wBxPcHsP7ohdvBhfRST1gYuQP7S4bznnG6J6xaj9XEjB4najm5HsYmczbgVf8E8DgScVKqmvShW6ruxQqUR6",
  "key2": "2dRMTGCRGYnua2HQB1iggZmA4giZUPcwjMamnjLSP2Jf3AL5UUiTP11nuc9PhmzTw3rM48KQPtBHhFRrKzAAFXhK",
  "key3": "3cUHFnFh6dBGGcuN9cRxJMn6ossoHW9d63wcPpLpE74Z7DkiHU7GwRmBVMEkGKu3vWrwXBA58aH1tvVs6ykb4Ywx",
  "key4": "s6QqkMvKm37j8zetgRR53AxM2uXtERdg4KfhuYMfYEoPphju5Qu3aAmpDt3bAtLNQHbaBNEKhw5Lw5mkWdE17nE",
  "key5": "44wBz7f7jPKzjcBQzSo3KUKiWjqmhXi1aWUH5na3Bkuk5sR7FcDqt8hvj3kijTf8AcchzDNeTLUuYFVRTzc7RQmY",
  "key6": "5WGXgLhT7m5FsAuyUwYJzjiX9WqU1iBghgSw4xpR9GoeJcbsyWYd9ozMCUMHyCp7698i5k9aSdFW8S932K7NR7W7",
  "key7": "bGg6wHgx6cr76wZZMSPPcvNpxRULUpoLokRQPgrrbKKdSGa4qnM577AoTfcjdoe5Drdx9DZA28FqcyKbgQfdqDy",
  "key8": "4Fi7JcaZQ23YGvZce5S3BS5phnXFPRvYQK73aQpon2njuHRzuyAXafnEAyqWcEF4ESzxmgfkHhKE5UBrEk8WG6gX",
  "key9": "3zbeN7r6gFHqDSx9XptrNnHUT62Tyh6a54q3QP2TRC12R6YmuH2UqZfBbJSaNdTGeZha9DKNG4cNF4K1pSTuQ8dH",
  "key10": "H7yvRnE9pHMxYE7wBDuXAGPN9V458eVhDAgQYSHR32EtUvrnf7KoQJf32sbMPDhRYSjU28KT2wJTGzmPf2JeM58",
  "key11": "4adXt353w257pDZs5dzp5DF7KiDCvtGQ996Fr48MZd45Y3pDKT53VpGY6aWUFMdK1Mw8PWCKbUDYa2t57LqfWcyJ",
  "key12": "VXGxF9kH4DK4XCsRvqKfTWkJzHSruxpaEzNRDLEeccxvDNmpEuAnkXZaMzoKiS6QkbyY4TumMtYDbTLaB343KXw",
  "key13": "qrD1AK7ASX8fZvWUGW5fnesRWKHFMWibuDKdfCVvyt8NLhkhCq2pxQjGBRnpsL9aN9vswu59tdBCLDrPVPutJgP",
  "key14": "3k5qtLdnWZEjvhXhRBWzNbjPeYCXmwGZLHhudMZoe5TyPr5dT5VRVK5Bt8CKtyyHpxsV6JvTbJaFQVXoCvUHXrUz",
  "key15": "5H97HPLMF573Bf7pXuX19vDyeEDYqceJjEj8jBKAqx3kgDNBB8wasufMW9t58UJWWej24WsHK5NQApJLuagZZHbc",
  "key16": "42n4vGHQK1DAyoepoupJz44MC75AUyWcmYahTMfwH7EfPQ5zWvXNnKxEPvKYwKXfbEMnNGr9kgMtywqsaaRCmx9R",
  "key17": "3fdqerB9gvFB8ii59PqBqfxHQvd2A2LuNSVRg2acnMrA4hvuAh9GHejr8Muj8CfBGtkrFxZ1TgZ7mw5CXDXPGiYo",
  "key18": "3fpM43kZM5DN7GQ5SUfhmB9ALjMkkcEnEPbSTAPatdTz5bT1fT6AKwKuAbKvde7UdWh85jebDYXLmHSfAFb12HEJ",
  "key19": "5GWP5LKLZzHiecB8yMRRA9xQ5guciX9rxE2L53kMpLTQRMU7D8CsRK8bfANXtPwZTxEqK5haqd38YSEYyWZWZ2AF",
  "key20": "5vzKmyx6xVgx3JiNHbYzzU4J7aYGe27GfLvQgpX3aEGmZtzf5BQ2W6P4D2UAxyxjZqYT5LoPvfd4MVLfKrzdbw9D",
  "key21": "5bzMUoMeTDqNZ28zekrFdpvfJg6YEKcFBWYQJ8ToL624n4q9xxeFbFcfXGLgroJXdhTgS5i8uibN4PJgm7Whet2j",
  "key22": "3ut475eibnY9Lxa9XNNoie2LUuckLbyTzQoHv5wWddndxD2mkCg9fd1LdWK9KmzC3mxrWZfURoSrQNVPemdHyAQV",
  "key23": "3h6rja4aeMBnhco7Eusopdm8nCWC4oewGAECezwkJw24xuU4oKHoG5aQkxPtG17YxfKvRUByqMFcPTu7q8chEHZj",
  "key24": "51J85t6RfuGWK6ZvvdUMeff3PJTDuqEMHoV6tVYu4cQSENhTCxRsx9RSFpWGg2zNu7eruhUwvUmZiVXAf9WXwCmE",
  "key25": "2Q9Thyga1A3igxwYW973Qv784pngs9JDHtvqtCxUdVNVxmvwaa5kmjVMdZ8NFvbLrPUyYAwaj6qc2kz2PDYvWNi9",
  "key26": "4vaoeRB2T3GPFqaPqD7Pm9No29ywYrJ1BbMK9t7Zf8msdv1NwPRfnpYMpAhNnFB2Nhz4Djs35wLcMjwN3H1JzfzN",
  "key27": "2Rk2bb1qN3E3LjHdfrNQhPo3TJcyeh9fmVXHB3VsqXgymCtHP2mxo18iTGf1EL41qXJ5a8suGezMLHGhT6uFGM4X",
  "key28": "2qhJ7jVmcVm3i7n9PKgXnA9GoyTqjsJwenwjGh5kEDyERtdqhxVdf8E66hsqA1HzQTdWN2x1pJiRB7VQy5v4GZnK",
  "key29": "5iFr789skE7tgDF8eUqe4NMGWKU8PgXAiTfWHm3W8f4ca8hVgG62bJrHpAyuLtShACQQCUDpwtc4eX8g1TG86yiK",
  "key30": "4Sn8yrhyUz38FBswPruV2sxFdj66qiF1nzx1Sxc8JzXUZa9dgRVWvuJmyPGXiHkn86RJxtgFNXyVXWLYz3kSBsfj",
  "key31": "MwBSpRmgc11nK4gkEYXd5neFi8egrc9mM5R1FueuWZjfst83NhmZyjmJJPHzY9y8d8iuM3xnWq47LYKv2XRhWJ6",
  "key32": "5q9QqmCgb4vYH99HnDDMBHumEv83ojo4kpAGFuF4ZqqRDukBJc5sknJCgWnQzgDsUv8i9nRKfJ1VhvmeHoSrxGy2",
  "key33": "55qqpHNaGYSFM6B1g5MKxhwjvSSMvfrjuCyWKrmzzvhc6QUCzmDYbupHQ7WdZeWVsWM8EUufhuHEPZbsYP8MQkQW",
  "key34": "2yHKL9PLgpGp98WWH4wYRnhHc5aVvqPHnWayCpuorpwbSrzcCHZ5uWV4aVooNBY9kUA4aVsQNqNpXvbQTcyVkRXq",
  "key35": "sTAL4PDBvYAQEoxjzjHvceLzayuPUt86WbBLXATPpCzgdcSrwi15KCZFT4SffbeGnwP9gD6P92EAq3N3DnBqgGu",
  "key36": "4uJaMYiP1HZAZgcPGTSxXo3fATPN43icZYgwUQvUEG62d5jnL3KT5XLK2kRPL6AUJL3BRgsfCN1XoF7BVz7zPeCB",
  "key37": "5Pz64f1K1h1o3zqc1ZEGHfhCQZcL3MXjL4MbAuURVtZorD1p28SCQc8dQjDTg8h22azL4LSTCZsvTUTavD2C1tDL",
  "key38": "48rkKBHGBpN6a5GCULHCsNk7GvrKnTqkxn8HdynR3eeoFdJtk4pVihzvLjmZcvTd4mcY8NKeKVMf2YGJGudh1j8q",
  "key39": "59uHXyNRjo55VXD9xAeda4fVZTvcY78nqijggoq5UiUJduB3ACC5ZhiNJP7zVkicUEuVKZY8pZWbT8QE6LFLHpJj",
  "key40": "2ER9BSFZg3y6UoeGrA6Xq1YVRfpSDKUpaNYmYQLNutBvs3tDCkWfoSVahpnWNiJsatiiqLadsadegS4fMATYev3m",
  "key41": "5mL1wZN8MjBKoniuoPydVGr9ViQUDXpHCq5qWeEgTFy4qa2dADpHh6i7cjYJhaHhNE6VWqtSS5cCywMZzB76QtZ3",
  "key42": "2xzFGPa2apJEiPNAFPGeSfTNf2vtT1BCfDKL9nJkV2qCh5ZvvbppDaxiy6prUpRNY8DbTQEeAgkGmHxdarpCxAmo",
  "key43": "2auMfw9sao8hzPNPH2ujgVHRAHmSutAK2CiBDdL94yyzUv682MPpTrHJTqsDRea6J6xo69RxPnEf3grCtWV4eabn",
  "key44": "2Dvmb7VD4WDHTspcqDuc7wgKGwFEai3tfwZffossMLhSNTavDXGtAUuBHsJrX4AWHdTsvWKFGiznJWFxYyXghz3b"
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
