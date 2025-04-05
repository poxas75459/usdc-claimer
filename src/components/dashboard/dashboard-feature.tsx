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
    "2yW7R9ofNb1Y23Xzz9onLJ934jCMSjD58Py5RQ5AgwcB4feVj89JSjFFtGx8Q72CnYnnqFpNaXzZFdeM39fV1oMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jxmScqJuFmjDDosZoxKoCWZeZDpHfU6P5gukjdpT1UeqCBZ56rbnktVmTL324hQmt2bFmLQk3xsdVBz42pJnwwc",
  "key1": "3PXf5oR9jQuiSaN13YdDX1wtzqH8YE5AHbB6fqWFzj5G4LNMrfrLcfoc5JMn2kRGZRX6tCJpqqW9iB8qoymcZg4z",
  "key2": "3jdtEGUhPu2VmbRtyvVS24Rp2pi39JYPQ5LMsQTMM4VE93HwmEa8YrKJUkn5uKw33dqk7tRWEB7zYizuHT1Fv7Zx",
  "key3": "5pbQvuRSWwm53GcfLz1ED4A3RXspKWqBDZRhMt2ih7YUD8pHucpJd2SqvasCcCVADddaXXy7R2rPsGe4A538TTTr",
  "key4": "3CjGqgwwCoreSUSrb6ZXhhCwyA3EqvPMhAeS4gUapPpyfGCXvTRSM3AJdoCfXkAn9AVRks8upahnB1abbuU6LzLm",
  "key5": "5qg7HRGYXrPoSYHEHcjsAEv7ECMyZ45Zt1KuFDftcU693ACn3uxMNAHKRKp3taDBPP3rhrSJADpDyNFwRweE6WLZ",
  "key6": "4YyhQ1Vyu2e854cyMY2BXWSfPsYAspUKqvNz2N9iyHEXjp9cPUPivEghKDkELDULdyDR57a1BrB69XAbAbePpenf",
  "key7": "5Ke7TBkujJ5mmjjQxJNaw6oX4K1Gn36PZ4ZceE2n3b3c1kN151yBN5YtCkHWTsTrcioxTcXacMw2F4oxoxdB2gQ1",
  "key8": "5QZaxg4BaiPXnwwxohCwCu2Neik46zVz5gWFVQCU2n5q6oLRd7Qh72gwpJSnNPf4kCfjyxrvs7h2N1BGZTYPyS2f",
  "key9": "5mMx8HBczcYih9ehjTWUeeDQgJUAM3mpVfpiNtr4kk3kzEmw5TbWYGrbTFAR56KYcBBZ18Wu4bVF4rktpApbF5Mq",
  "key10": "QtqThHNJ3nSNtAA6jKn8JcZBxTAoty17f74UxPv2z5HzhzX9Lb1gCsQSYoBTdiR9ekomuq7ymizeGyRmAsoKhXt",
  "key11": "4KE2NZRcFsUNa677nTSTxf4Jx1WaE9fHug5XZtFqLxnZ1xB6ySjJ1K4P9vtBo9qXnenj5UW9B5qGrcqXQrAvB3zg",
  "key12": "54rCGtaqXev9yqvfMJfNqQHmYpJgYPQ4bWBycsPMej96mVjNkoehZK6KrYWPRLSP6zeW7Bb4ezHRP1d9Q5ooaXps",
  "key13": "4EBVoWSdXTUcYC3ofD1XAbaDqrr9AQThP3jWeQF7c9hUtc63xikjMwoMcMq55jYLvfEwvYnbemwcbt3412vJm8BW",
  "key14": "GncDho8Snv48t7ksU1joektJYEKEpd4WNWq9yJEj9bgx69M2BeHhDCKt3MDiofDbiZeLtAeKV6u9hg4WWkGsfEz",
  "key15": "QcD9y9h3tV6biMCZahoys5gn6b31rFtaRP67Bx3cXy8DBXcNmGuPhdpBGXN4C3aK7GQfaNi87Htvr7iRx2vSezL",
  "key16": "44q18DCPjnC4wrTusKZWmeEQGSCEDdpFLP8aPMUwLJ1LfpeK4ZhJ2FrKAcNwopip58rCQvBKAgVkcVHrw6sPRzx7",
  "key17": "5zXnzGNAxWXGYEeywTBimiZ56S5xSWA4HVDHJhAo8jPf634daTPq8DmSZxrUC8Mim9QBDKGr52zcoxyCM2xAYBpa",
  "key18": "5AVLofx7P2rDQZqF6nuFfvtLYvT25C4JLMM2PwqUMT5DEuM86pimVJFdJ4fvFMgfMcuqLXsB9woZQFMfjH2mF9JV",
  "key19": "334pMkBSg43WuTxb2F4NKz392gVHKEmpaM9a2wUuGbhu28MB2txtRrSSWv7s1mF5JYKwZr2QCKJ1oJXyLQQvobQn",
  "key20": "iTvx63b6Y74CtV3C3HJp6BEhYte97dBEwZNGdDKxHpk1VXiyV6QoXBi4UQKGaD1hJBvUhgvcpVoP3qvFyvKQU5e",
  "key21": "355HhJMH1SWFto9uYpCJ4K77fm7a1kpwEjc5vcTwh1knT3pJTyy6WWAHnBJbmw4oaZxMM6AHsVx1Z1r5rMtKyPef",
  "key22": "2rBpMCvrHJuY6WFPKokxVb95J7W9gmV2pyNcv8rshYA6NR1yxrSNwbsLptc7iitwsG3qZtE8cc1u9cRrY2FAgFeC",
  "key23": "5UANRJqwnb81JuNPBXvPru7SKM2DhK29hTYHAZxEFkZFRm5kPF2a7DZNNdHtBtrSDjajnug6zDb6SXusKtHaY4Lc",
  "key24": "SFNDPB7b576svScSxgVryyA2cZyzL2DvdYuEmts5YRPrnjhDHbWXYaLxyURTJ2xiJoMo7ztDnhwUNhbEWXmkXRb",
  "key25": "3TXbohEt7DaEeyao9VQ5VV17Y23fgttntZEeMFuyoHxNPzwMnvXBd7zjZSW2jDjcmq5LR93GpzANMStqTnzRH1eH",
  "key26": "4HVPn3nx3VXzYHxkPnf2MgttKQ7X8ddXCJMh1fwhgNZ7F4DDwZewf1X7FDm7DWw34KKV8wQidSNF38Gbfkn8eTTQ",
  "key27": "3zPSpYddsqdRkjqMzFGasrqx49WmZeCvDhWgzAaAR9w9Rmzwe5RftCaAw6iokxKhiGhZgDDqKork7XZpqtGx4c17",
  "key28": "5tZ1KKJpxzNTyi9qcWBQCb7hjYNEKNYHY46Q9ukw8ahkGd3GyAhU8CPCcyD4LjjXrU9XmkTy4jMBxxi7bkQETo1M",
  "key29": "PhQHCgVrGoJoiYRkH8Sy3iLjZrMtyGpeyADXkMFtzZkHDtXmEteXEbY774nkSVRV1P2ETytnhf7USMP7XDfd3N2",
  "key30": "3RoRP3Xu2ucUsHqRpsoV9xHpbWEAGv5QPz4q1FWN8a5iKmF3EnT96rExseH27HyXEbChvi3By5Se5vECJzz3KV7v",
  "key31": "5e3dTMswQjvMsBWcsxdPW2kCJejeJ3WXtoL45TanbfPGj99nWzLmdEc1LYViisZf6E7eHZmr4iYVN3ZPrwsPWii1",
  "key32": "31H5NvktfwwPq946ygRef5kcdKzsbwBtbEZ87PciYEwwJRYrVWNC2VwrnoPbaf1z1v7CTPtbjVEspb6Fb99hTTWr"
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
