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
    "5DkKQ35GZPkTYBHbNDipCKwv5XoqVa5j9tWByAcWMXzT5yLni5MowfBtP8Mz9wGq7FT6Hf9Vdh3wdNdCNNBTCvAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B4cGX86KYepM2h1yH7LB5Bux6t38ZwGE2LbN4uxfKZiAfYjWwLjx1WtsCi5XLUM3DW4eydTdcdwaqePiVQLhLrv",
  "key1": "2vctV7SGq4rYArvwhFPs9WeUk5biEPv3ikFuDYsDhC3PmMmtoJgpfLLE9ondqna2mcam7ACpNQbuuGQihTHCpsjH",
  "key2": "4tSjuYDR5thQH64uUco17dXMBqh4K6i7pjMcmz7ppP9rz9P8n6vjrcZXtW2s8Bte47PsY4Qcr4H2iR3sX4FxPbrH",
  "key3": "3KKexAqjR5GxhiJNDLKmyazv5su8iHX8GZVzRZBWNK2RfTjrSaBAPA56cE5zLcYiftRXz7fyjBDvzPF2BeCzzkn6",
  "key4": "WAAdy843TkG4SdTMzJAU4dAxwe9HqrbanD5PNd1GZJ4fMZLW8A5oRxJ7S4W7JZpQ182QUBvtCDS889x6LZgz3Tf",
  "key5": "36EhxY6ShutBC1s67suvFjfFoyHpfYZ67rGghRAvLfziW6DVXQZtw8Pj58HA97kT5pySz7KfS8unf2aHeCCHmHdb",
  "key6": "3z4TyGBMxRTf4okCYMt2pH2uMLEUB3KzY9yoZPLgM9bYgpRGy28caC1GtJkAFRNyeSEppf7Qt5VXWS7HhS3puhKr",
  "key7": "5FJozivTZbtMXBt9wNgKNRk4wcGabcq2AZLaJK1xz24hqhAMWKU5A51ybjtFtkC5YaWioHh3VgZbbRvDfjVWdKFy",
  "key8": "2bXDzeaBD9Kxh6PVgq8T8KmXeJMjEEnt82ijHaQRK9GahKVAxZMmTF1iSRGvG8WB9CifPTQ2jtUjbh1ujcQh3ATz",
  "key9": "2b4v5KiT5EgtHxePK3Bg6DT2VG88oxAXgWEE9JitvC3HvfqkX5M3pCN9iTLdrLWA27BuKAWR7Hx9x3pb1AjuicDP",
  "key10": "5czftZGeCE9ivsw36nrA6dt3yXB5Nsm23DZBqp3ePsiqe6NvdSfXBXHfBkoUdEZMe1ajJk9tMAnkDy9kzDtdWd7L",
  "key11": "63t6VFGH9MawjdPex6eTJxEQSCcZbC4bowcfyormD98WM4xRXMDZRvm455AMeDxgbqAYSu9dJEfBaVHGEiZYbvxc",
  "key12": "5Uun6DhjaR7awHXxKAodxKjUj8YHegNiMxX62PHzqDfaiKFov7TSP9db7YjSHdzoqEWWbG1HpnUqeTG6WUy6Eo5E",
  "key13": "5ktDEPEonB8zCSoUNp7UkMF72d1FhAD1dmeywukSFes2tMAwWWTHxnoJbr9siJJmpPHsJy3AAtnev9c5k6RbMsao",
  "key14": "3na5ogtQtQsDdpGiL7XTz6wiP1VyiEMxEQ4nqnGZBzmR3YevrwF5zT9Cjm2QqrEejuhxCVARwxY9fKhYvhjW9WC4",
  "key15": "5L8vYB3hgP4NVW9VojyKXaVgpZrvjsqLmzvc7acqQyyRAGeE4HgMwLTA97xbFYuMqjQyNuH9JUcRDevVfsPf6XNb",
  "key16": "2rpTaRQ8oMZja4D1x5bpddak3Fjw73xZ7e247C6ASpseys8uN5HkoRDiQWNDAihukX6znmTTrNN2uyZpFMqBV7F4",
  "key17": "2DduxU4qT7nZuP3wZpYPKPnhzaQQHK19UixhmFynCfW4GLvtAA9VfnS4enY32pdenZTSqHCMG3djUiBhY7uvP4zu",
  "key18": "2NMEWXxYHMYupJ6eZfU4WyicyRpE36hk66G1P9VT4SwtJpMYoaq5i9NpcrwozcSGVLFDKBe4Neb8u6kBw9xRWb86",
  "key19": "2LKqLnKQQRuZuqeJMscE1woh3BojHgehRXvV8gygjEjQLX1nyUWtLQ6uB1WkHYxiKwzYY4M1J6qLNDDAt2mYeKpe",
  "key20": "4boGJ7a1Rf98PqXxfuAthCacm9juNE4TtLg1n48p1gnqf8kU3riNJAspQAniteGvNyzBfNDBgcMH2S4sMMMhe5VA",
  "key21": "5Jjde8fXoSJKmFX94fBWkkjv5ecHRTbwfGDLRzEMonfiK1V7iZ55CkdQuBCLLFNH86z3rdwe5NfAH1Xxv2LoMok9",
  "key22": "BYPNDmsFrDgG7WxBQjbn7zub38RjG9hfp37nDiRhLvBN83GLwsQDRbJn6YodkDKvWd6DNe6uJjZoJPzSYuEmsd7",
  "key23": "3XAS5kwHU3yFkhWZwnPavXUcQNcYnJ2642JVeSP57r13PRbWDuQTtf5Af6VHioujFbbqUgjEUA8sZC8pbx3NiAA9",
  "key24": "2Jizh4hbeAuEbVQk7Hucuir7RAscKBRAfaqkR8c83gEDXPX4GdQQef1r9BysU2NV9ZkDHXj5RN3FwXq6cXu9a1m",
  "key25": "26fFAVMaz4tm181v8UK447J4khchoXebQQW8NqA9iVKJmKCxLd2D7x61fJUfdpR85eeYHPkbzBhVi5yurKtD2nvm",
  "key26": "5V9pu5TvWPZGV3vU51pCCfyL9fH4hN1zNhqfyPLKpqF8TcvJeRYavzUHrFBZGFgU9rR8LZkVabAYdmGZisRYrcY",
  "key27": "23MEFGsKsehdmsKdvvrds9CLYKJ9vz4iLCzsnxocFakEA4PtmxkBxNi72igZABLkkNWsSUEthTjcRTU6gZoGVeVf",
  "key28": "2dALH8aqFyxKQtWDQdRVAgiWKku4at65Jx6aCt99SvCXtVomKt5j5Jaa7DtGpd8fdWDvWxhHVmRPt2WAFcFiNpXv",
  "key29": "2ihbAftc1Tq5p7r6vdDqh2qJb5etah4diQHey1Kp82fcjKbuZEZzkY3JygtJw2Vo72de1FsuJsE4fKVVfde17Eb3",
  "key30": "3q8TQ8M1Wm1UPLF9gG5etctFxyuR24TDh1zwosNFhargC5spbWWGJnVCWhU82gwBtG9Jg2YTkw1ctTPsm3VNPrEG",
  "key31": "5TTAHhVUymaG1wGtf33WDUshwAxpFN5ZSeVzQq8vSAypqpiEYendbNZr6fxCNwZrhneWM26ugvM9aN3cQFgN8gwk",
  "key32": "4iqfhmQ6WvxZuMPRG2faVpN2Rs9tmPZgsPbhbFG5xJxzESJYVCKYareKMEJnMedQn6zVpPH9gkFRYShaBRz9q19A",
  "key33": "2nvMcrQG5R43i18CfAfHUXdko7gH8rbWUXrePtaNAMR39fnXBcjvD12ZGLeiHBbrpnggi2KAg9A1xsquWXs9Kb7G",
  "key34": "56D1XceZ8h9x53Gc3X2dyqRTeZQHuRp6a7R72JDhKaZ3iEq949iDrjDUbH2huuCBDXvxC6QfrEzFMYkEAMJfdeba",
  "key35": "3yySHvGyJeqPMJWqwCXcXDF3vKXo7JktMv6Gssx5KBSzzJYvnAGgPpmdWWWnEqLpebgPEJEYbMKzXmpgrbr8VbiA",
  "key36": "2tHQzqryVE8vr2ANhawqX72Gkz5mcBVQXmvM9jeZr1TWu7JpNBJvdCVoFU3vhHvyB6g4Jipkjn3fqr5HW3Zmgw1b",
  "key37": "PrQtfLhTWzu66uWDGAMdJgKgyHNJneqhNDxs2Vc55CvA7TiQSMvURPcMiaMPJD6HnFPwKSbNNAHmofrbkPF74Ep",
  "key38": "3MLeLGgDQCvvXD7YiVDiBexQqGg1yz5ScAty1ZV8TiDfD7UwwtEnzeeowV4hfhHhatt42PzSaHDJN8HdoPYJTdwb",
  "key39": "2nEhppnDD26Jvu1bCCf5QrdNkYHqSvK8ugRdpKSgLufPeRk6U4zxHqyiVvfUTXASdKBga8GEU2y2zhP62bHq3ZyJ"
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
