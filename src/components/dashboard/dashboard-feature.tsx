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
    "PSDFZaY16UwJTXYWMrmzk7T18z9HXPZWLRSrYUWS4Ses5cLAwZqG8juNPChJbK9Rv9UYJDXpW2RjDUdKFDH9FQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EURT4x9SW6atk72ixE1jKEHq5XuqnBpPuvcPgGqwcMc9wZ2LgFJ5VF9ntNiXyZaYysCUKSC3HTLtZH8cMYQWcxm",
  "key1": "5STxjFTVwBxvRRdm6sQYWqyLDdYCP81vv4fBiakPKt4BejqTBkQeSuujXao4mUSDcuXZDVchLZHsS2Cpwm5pqhSC",
  "key2": "2fK6pYcGty83k9QmZz4HMdhqFF2gMFmcNUnXWCqpQFhEX6v5mxrxZydbYhPpCf9aTLzQmzDmpBWbGeWpMvK8CQPR",
  "key3": "4RejaJKMY5DtwiLdAKpphaKezLaGj2o1RDkVHAHWx5arG2JMKnFCxrmrW9CbZjVMDE11nXcCiu616R82sHGhNAWS",
  "key4": "3m2h9w1NSfFpemtkpAmz2Dq5zjdFsub9P2vaTu7RHaZ1fsriz93goYBb4tR9JpdCC3xrSuc1ZNgvmNrW8dzyf6vt",
  "key5": "2FgjTVnkcUPFoEUYqWWC6qu36focFn9VGgGjQkdZRUHp5BsfSzDmU3xqA8TNsgh2suBjs1j5mhd6eXGxgxsLaazd",
  "key6": "6cVG5tAkoqMHejrPLiY9mo5TRhZiemquH3cY5fQKd6PpKsEAtLYW6bXJuYpXQByPLjut25JvGhHfJrDPjmBKDjc",
  "key7": "52GnBmmtVfJBBvG2cty5YxVNvyAJGnonFj7zBYmGm43eFswQpjsSPiNxH7dYmutVFNU1HfgEAx6GbYKsyEKoyAWd",
  "key8": "36yFA3eCfUteKekqrcwCDe6mvNU1aiXQDD4MFnq5kpJxsQh57aweoX8nrF6b2X5mxhki9U9JbDdDwpSmEz62TijA",
  "key9": "3YURRAJb3jbqwdnjGdh8An8mZUXTrSnz9sPfwmcr1huaHQVFjPXoMpmje6YFDkoQjtEaJ1hBnTwUKh5GHVkcZxJv",
  "key10": "5aF967gqAwJVAezb5KsTCDYKCFXKE9Jxd7ux7L3dja8cUo8848zzwQU1jCpns9hfcizsGMvjsDRUu4sSkaTUpowN",
  "key11": "KKSwKqJsLK88k8wDbHSygB6YzrkuXvTMmN3g4tzHnSbEBL9tfcTpzU2KK89xSpTGiPf445ajBpTg4bWtsd5SseC",
  "key12": "5H5PnGWUZrV25MaCo9Fkz5J8R43wNKU1kYC58SadzhH1tzSd2W9W179Tv6bRiWQ6qj8Q6Nd5G5t3R9j3kuE7niTJ",
  "key13": "2ttFayEUKCtiqaYn5N3ckMmzLaN3XWQaHMmVn7KUFiZsV2MtZmQXgfe2ZWKNiAefbZQZoPnvN6c7VRmkSB1N8y5Y",
  "key14": "5ZamxQn4vQt1T5WmWorxu2B3eGxHXSZuoj2v4yKRrFXmq7vmgjmafkE1ZJSqohMWe4NkTzBXFVp63TSzfUQ4PuVT",
  "key15": "3x6E3yUrc67GAVvRC5reBVtHLRtMQnAWjguqsYTXrnGgZwACt2a6QR4AfJEHa6umoPWmeDVT35QEjhwUTqpVv3Xo",
  "key16": "GoaAFmiLEXfCM869feZPYjr4oVwRzvxoZxHcDygDE8e4iQMdULZyeB1GwMzJdCJH3H6RbhzwbD5BmRrimxJTEXh",
  "key17": "4daCDihcEEqCj8tY4xrZ1SYdhRkuEXZ4zrT1qLbt2QbcycRopfXgCsrRzXm78yqC2XEFzWukxXwDQ4su5Zno3tgi",
  "key18": "3iF7BXRzWZbVd6Wd3jfykseaATarGPggXDkMU8aU1aqd2XNiHiHWQJ285yA6NhazsHGsk3CjNwMYhY4x2qPVUxFS",
  "key19": "4nNtpvzQCMJfmxgXDaQukDGcNaG8e6PNRcYdvkk9LNZ1BHP33AbYEwDEYkjfAZzJwTFTmcmbuRgoMYV7sSfDEVsw",
  "key20": "3yjTMCZCkCVbUDxNezn25by6iXs7kmZnGtE92z1y4HNXxxCtmNpnRfHESvej9JJYPerEv1kaz588EtdKpcfNpCgY",
  "key21": "ExCaMvMAm8hg9NmnKgC52fRKTK4sutKoqLjrJZj2LhCDMi8rFpysMpAojkNZYAk7s3tWNdHak9rJUXV6Z9GzgWP",
  "key22": "2ki4RHP2qDjdEmc8xVFw8UMPKnbaQMUPZesK8nRswBt938TPcTibwWBckYh4cysTDSrCBFwbBg6bgKHnsPZcVxT7",
  "key23": "34nzHoiC9UD7wKQHtUcDApBQy1Y6R5g8f2yhCL73e6Tdn46YeH7ETFtape283fWD9SPjev7NvHLjEQLBiEb2MTLu",
  "key24": "3sdi8GCbaP9Pm6rQ6NRnrCwvmHVQT3onFUGpn3jXxvaPHnCBL5TmXfpP6G9fsL9B3tMLxTuPuexyqQ5mpfXXJkRv",
  "key25": "4SU1PNi8ESPFsxD25y67CTLPrDUbEfcKgMfoEAnBEzwPn8NBnwpdnXeg8Syi92caSiqm49TqBZTQQa8FF81PhWGQ",
  "key26": "3v5UTjX7pxdPemBfxpA9z2F5ySz19vp7RSQ6xsFhcnkFy8km786jVfJVyfEZb61Z1UcC2UGpv4ooBzWrzkCGDWyj",
  "key27": "5T6kqAGhSMGqudWYTRZStjvWfRmWyQzhLdhxSrWi6bhMx9f5YA9ycUDmTNBvqbnLSsxGgFiSpMcDerLavtJzUVho",
  "key28": "3Eu5HRdZkSQgroTNYqoxcSp7CE1BDFtJxdLJAqePEgqENV2tBs7E72KYmqcJcqWHb8Kg5EDYe2tkSFWjaFP4UibC",
  "key29": "wceTXAFVHRD8DSsoAXsuwdQmmHcBQFgKTjgtT654B1MKQDPsgFBEaK6W53MTk3huEzFEFj3unHHE2o4PcachMS2",
  "key30": "58aJs8y4Ade1yLEyMgQharvqnPUxhs1viJACqPcC1Z6FTo4RpUjZn1RmLxokVDo5Z8rL2FXXSdmy4xwP73ZbUELR",
  "key31": "55JUFxSR11i2RgYdbqLFAYZoiKfyjHM4zdE5R3g56didCJRo3Bx8AqvEDNVS8BcLAoSiM22EPBsMnQvGfqdnhNFw",
  "key32": "3ZcR8PKXyHfv8oc7hXHNVbAhEfzsbnc7L3VHwj5vMNMPYKCVQ1gVtWoCXjzBRrTeeY6GfnZ15wfP8epF8wdhTXRp",
  "key33": "5zu87WgEve9pkUd7KDvYjJn6CunHUa2UaFZTeZwGQv6aWS8mJ6TdiDJmdqYuNRGaj45gTGtdJnu9cFcrUY86c6Ui",
  "key34": "Pa76U2XLqgmpdvD6VAUpVTgyzy8UQ9qJVgRP3UPsChCfdgNvACtRgeEh2WwRBTmtdNRVdJ1khqQzqiXsBrgTFa1",
  "key35": "5wpmCjju8bCL2e3mr5MDcdnsW1J2vxfvD5eWUVHdivanZ88ucS3VJL4JmxKdsqE4Eajtg2c4W4R4fxHXrDWLbsFo",
  "key36": "yxngkzU9YHoK5fZjH5LppvDz8MTApVFdCbGkAXA3KfTGbwRz2qJwNBhd3FvJPSE7MESxpQcRLby3e2dP3tL7DSV",
  "key37": "5rxSAnomFMgKjvNh3g57XVKWfJ2C4yAQhNB7nuVgeDTw4aiquuhHrkGFQu9waUePALQWfrRqtFf3upVE2f5uaD6e",
  "key38": "5gwU2s34B11mStJKh7vbxSgKvboXqu48yPej7H9dFxUzRUxPyHVeLQPY8muiXbdPphqGNjHT7Fir8e93DtWmErPr",
  "key39": "DjjXWQobFdsMhBmUY7fNfB5SKKcQe9uzdsH1a6sLDGmAtgHVC2EPesRV7eMMdC6gwSNtpo4Bwp5Tnm7nUSWz7VV",
  "key40": "3vHJeCi9hKJqiVaGitjGzuqjtr77dy5h5nY6Az2qTkB3UjrYtjET2M5oYbWhN9wnU2skyQmMLmtyPVC2WNi89nC6"
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
