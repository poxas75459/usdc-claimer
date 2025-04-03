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
    "55JHDnFYbffw1EPkmF4rKfEqWkrYxwFR1uh2CS9gpSSjgZLjswYybyALNVckeboH7Be1v5kR4UV4v5WzJa5Ujzrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vk9BqSHUZ53Gc38JdQT2AqLTJcirVBUoDSQjV8QLMW83SZYARCkNgNHrEYomwHTbkwGzTnmnK5meeEiMa8azzcg",
  "key1": "XKJLxFYJKwmRns2suZwFJTrPEKiiQDPVtnqEaGk68Zy42tTVALXteVx5nAhmepQcGwjJE3EMUuoszYapURabhAM",
  "key2": "4EraAXQrDi2ZPrWRzgofrYyHuRmxxdA3MqbFXD4A9QXrjS6QYGsBM8yHyUSpiApHZiVVHACco8C9GimkxyQzHE4y",
  "key3": "5rpr1BWmopEn8qrZ8ppYagmuR7ndQ6nDXGL317seU5jULxeg2vYg61LksjCkiEdzmGxX1rJWWRx8M2ZNgtuYjH4r",
  "key4": "5mvR5P54ay9HTM13K2MGZHqByGeABcHcm9QCUVJSgqvHjRwofHydjBpNMKDALeaHxxiKdy8fYMmPy9S77F9rjnFR",
  "key5": "4XY3uz23UGiH1DZhmUHvN8HX5tt44xJF1KjqKpy7oJhKVoHBrR7HmtJ8qFnqZNy1iykkjBAbQnoKHR8P1fgZuuMm",
  "key6": "paS9d41GJNTc7BpBPCAvTTPX86U4ryvMq1ihna3TbsE2eGBXRkXGetLmHwRnKcuVoeqFHWsARgFKA2WP41Njfbm",
  "key7": "2jBd6nCjGKCFUHfMFNB6iXxuCySRne7muwkS3n9LBBaEMmJQJrzdqhjARTzbSCpd41qAAktJiSZ37az7T3tRupWR",
  "key8": "3xUqq6tHtZurP9SDdMWkmvmhCD1Ps2xPmzMLdeJMkNc49bJCw9AZYydjcZQDhGpfkGB2LhhY4CgAti4icJnxWLsA",
  "key9": "Eto4vkTqFJKu28o1xnTdAHaTW5286BihKghAZ97uQ2TDWamcAJj1bnFKLKysG9VTCBAFa1FGRa9dphhLxZ2yAGm",
  "key10": "5ZvFDzPu8vDdVubes5zNterhFbEQdA6duJAhKudRqUWyygXN1Do4EGRDdRX1d8pxmHch7Cj1tLT1B2Ux15Ggsvss",
  "key11": "4FFS7Br4JNXMHwsaRt36xBrPgQ7JXEtER2gqX9t7c1qtdHmSE1R2VLmcQ4Lmb9nN9kytujEHRZTsekQyiT4dqu8E",
  "key12": "4YDSjMzNhhHcn5fKzCk7ywAKizd91GjcKpwdrFvtLaEJ1Qt1QiwbfztMPSYRs18NJy2U6QHSgs81p2QkfytPtkxV",
  "key13": "7U2oVo2KXiXnjUmhtTh3iYYQivfmyGYoni1AAULQkxa81vAmX8V3AR99t3sUagRfKp4LvFwEZmbCrJoSjdbeSc5",
  "key14": "5fPMHdYYp2BjMFntHUwjKmr8P8JvMbdsuetf4i2jtdrynK9sU4x6nyXcUbfVLwWRyQ2kUxGEGFnwKsz8eRXxBs4z",
  "key15": "5STuNgyqP5NsJnZEuzigpkTCTDukpZbxKLZDG3yeJ2wJwVjPZe48EHr4PJ9VjGtC9hxz6pZYZYL8cirVHyCByoGd",
  "key16": "2vSXgauNY9cB5soLqQKcqMQL5pFJVr1pv59mG92cHBfneohjKXvQzNSKGuo8hvtB6Tmau4aUZRMZiwfPzFgHkQfh",
  "key17": "2fU23MMSpWo1q6DvkHUXRkmcEBDDmHJqid1wBzuodoGQWrj2EgdqPQt6Qa43RkKqei1bwsLJh2qBHsztweEWH3Mo",
  "key18": "3rEUx2dL4RGtWjyfPScTZKBNT28moKry46YMY4K8t9zeWGTTzryyczLiHvivFpKRgxSTTN7tAQdfqayduJevjELt",
  "key19": "4PUN3GB7uL54BBZkDNPuAAbjwEDgEMLKLseu4cjaVNAr2ebiZ4fYzFYUW3yDHaSEW3SVXMmFtiZBPiFrDpwui1RX",
  "key20": "4iipYPPAZiPcsVi9etMuky2BuBQRxUU1zH9kCid2tvT7aKRoitkSmQDdwutuYHeUQrqFpBepKRy8YFPYRfpWRA7V",
  "key21": "5AbYrDu7MGdqZRSiEEX5cj4m64MLz7VnFXZYdWNuRaFZCbLQEZgJrbAx9zy4MKu88kybTohuzxtK9ZJhLjzTUxKX",
  "key22": "3iGhdrTLwf8N37qdzE9TxFujpSCjof4uGPMJmD4XLERoaCBocBVnqGMfFT3XjrZaec2fZ2PievZTcR7UbHzgLeN",
  "key23": "4JGwBCNDsiFt3szvqxKBJ1oVMi3oh6SttpWPBpBifu2v9ioXC5y74im19A5YDswAoEodNhw5gu6soWNLJbvT3PYZ",
  "key24": "55LD41zWjsETbAU3CpvtYqe1hquryrXwshUpLhcSdhAfZGvwphpFpzViAde71kPEAwdQCFNbbdwtquyre5iKiyjS",
  "key25": "4DN3jgGXxyKEFRi4tr7nYs55DY7HmwVnCtckXVEwu9k8YoPfmdFDijCPAYgn1C33m1XwSQeZB6a8oTCfumZp9xTg",
  "key26": "QraxGamMVM1pu7j1VPuxCuAGc4mUx6aNgEk2h2vUMhxbcCBhvWTSmemuwq93WoHFy47GVxniU1RYSsbKo5FNdXr",
  "key27": "4xAiLZaCZA3TwsE6dUEn9yZtK5FbGKDHDqft2jNem8E6zesnePH5HXpfkj211a2wesbU2zncV2V5ShcbcCm7vosH",
  "key28": "4ayeaxmr3nK8KMU4eoPAqqzSnwgLmNugwY2U723j6kLnbwNc9Uc41bZSmXLBqHfTXePPF4t7fYXbpLC6r2i311Ft",
  "key29": "3PG2YTswbZEmTKcU5g6DjBM55478AigcUaKtdQqwpEbN3VNyocaJg86YwEKabS36Uumq1o2HLq18cKgEtcVNopUm",
  "key30": "5a1wwZQ2FLY75nMUQngZXN5ai2zinBft1pupvxWuBDq9hhPeVG8o7XiZ9up6Xdu3cX3F7wYE5MWDk2Ze8tqaKMhb",
  "key31": "3f3KiYdfGb6pCg3dor7uDxCr8Gomh7fXM67fpp663uGwawpcQvcnQBctTd4ixEdupPfeWXB4Z881nA6PSJF4LCfW",
  "key32": "Afbvya8aTFGPgNQrmqhUFvxSvndaSjVKACDYU4bddNmVHQrdajuynFiHXon2Xu839KRVhkfkvqngmjPQZLkb32Y",
  "key33": "nkGMkfvZWZUDYv3cFawpGHKiz3eJPckJDbRsftCmLf5fZSzFvP5QLa6dud3GJ1JgT8vJV3FjGWRFTe4H3QN4ANY",
  "key34": "3pmnbdgw3Na1Df1vgGbu3NzWEQc1KTsa9mYwJ37zbEqYQcbRnp55cQ1kiRgdFqQ2Hh6iD57YN7FanchpZENRRATB",
  "key35": "7apveJWaXEN5E34ipi2p4axzCXFnZQFwUcZvccjsWccL6koeW3wmN5sc7ubdpQhsqcAN2XwP9GYHA3zALP7sEgZ",
  "key36": "5sFQhn7XMBCdv7TtdMFDFGSceZJYJ8XseCzmmaWzNHCwb8kiqQrqgNg61XbP6dBYs9C5fmYAGmKvTMiQxETVU7PU",
  "key37": "5SQ5oY5Rr97gcBwH6dgQsXAgDqKx8K37MYqAPtS77iGcMA5dcv3EJvM6jyDTXu9L7HBiYCFXD3e8cyXQMwGeRjMt",
  "key38": "4wTewyMVV5bgfANN8icKwN4JmiaW2zStvEPP6BzSj3oCDr8Z9ySDZuDb4Pz22cCNyapHnZr3vtU14skWxTtBMJ8M",
  "key39": "2wpZdzhQ1fTwSHxYk3onwbbRrE1eB42MLBfw1A6E6f4Yun7v9sqHCyzuxqJkvsfq9dymF6fFjduQQpKqSvQhY63g",
  "key40": "5WfBD9V99LLED1dEU3cNTQWYF7kNt8rC1BtszNuKUkRXiqKP3Jr2f9XSdKzjbXDtYDDxm58pCumNDr5R8bXPJJwa",
  "key41": "2gtAZQ2Jc5QQ5vrTSgnZD11B571E3fawfo9xe6dmuyWjaNLD2LSQ7KyFi5gPVDnB5UwtALvpCRihmyXikK2A8R26",
  "key42": "5rxurLQW7FzLSzjDJ6ttrYFv9MNNfrK6BWzTdQZW5wh6C3t9HopjLb3dzSdqXmWWo6wAnJ6HKSPrgXbPqDzDDqAb",
  "key43": "49aLaHKd9fuLy3rC9KYFXvu9vViqg9dCQwT2fBGFddNnKe9UCTQX92MMAQvmQBeSdgzEG3qMAGurye8mauoYiN9R",
  "key44": "3oSCbRk7tC5A5uWhoi5T1ACq3zPdm9qPxsYqxpiDp47bPXVnEyapiC75n1VgLsMqyC6yr7dtftAFdfAQTRvEPCY7",
  "key45": "2rxfvwtjTU9S91ZXuUEucjGKiM4Ai6TuWJadRA4TEMZ79qKtoX3dU2GjjBSTW58AgHH8pZ2Ko56whQf5xDXTpD1V",
  "key46": "5BGtUwizfo73i9nXKnLmDLMB17wa56LJ3rHKJBosW4HPg7qqXv5gg6Ecz72RKdZYm4spBN8NeAm9VZRrgh1hWYt1",
  "key47": "2J5NUmsAaiA95HjcpasJs6YKscRNgTxtLMeGAgzxNyEGex81XQMJiPwmNc9KaUjVKYpT7ErkQBffr2KR1rFqxaHF",
  "key48": "2VcBJEB2AgKpRJTpj6ZbTGbNZCsAAtvJLoazCDLKXyqbpXBUQHoQEaM7uE7P39zAdsaHReTnGHPiVKTj9UB59YVj",
  "key49": "4cihicCYZFLcPYUAd53b753KjXiCrxSiXPuQj2KwqU1gswWjy2F7PdDJ3fgYCKphhwKF4fKFBYSL4mhwkwYomBPb"
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
