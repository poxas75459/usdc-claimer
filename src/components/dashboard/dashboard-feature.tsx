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
    "5LArvh28mp851w6QSqbXmdVptyabVxmsHm9KRR2po5ZrigFV1BqBXQTqfV4iS5KD9rP5tyN8nGjoYE96sAd7zLHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V24sJTwLuZYRB4qsU7XYM3oGXWmzWnRykURMfid33HeMrxf3YBpe4ENevVcLv99YMAzD2ABrAcXr2j6hoW9jkWq",
  "key1": "WGSEvFyWe9XipcXwha1ws742gxmKR9VnUAdYxZWGXBtjgcKcRwjiQpCiCwho5uZSWbSkxEY1SaZsbu4Zf7t5te6",
  "key2": "63GGDf1JLpw5CiZbDRFyuCFf5qgwqpoDxQZ6Kz6HL8zfxPciTNL8y6tAygssRYDePrMNuBvUgzZwaUCwaJTvZPwr",
  "key3": "2fMATjXkoXPXWGcaemYsSsvW4HZo7oikuTEog378GDrEBAs9kyRh1JxhEYUn8gB8dYdEXPeC1xLuDdimQK91Ya3b",
  "key4": "5zQhPJnshuda6jEAeucMRJtsiCkG3aMMJpfCHfDuA9z2Sb3P279dtC8XiBq386KSz69cDcooNgHSbDx93Pxb1gMt",
  "key5": "4g8kDK3ML2dX9sstbd72gjW7jdAMaHge2cJXKRnF83fPgt3KFFFs45GDNiEPTsBCWxg84cXeKUK6iyGHuYnjqd4T",
  "key6": "4t6sie6pNEejPdZm8TgeTJWVW4CYcJod2wys4GxsruhQefiXdCMPpdfa2jkmHagixix2y9pnJBpjT8tsXnt8tLEt",
  "key7": "54BB5UUDdoaA869b69rQLAGuzbuqgkmBVuE7ptR2zTvKgo2iFjeaUANSdcG4nyneYbqVzrazvNprCJ4uzSTj5HPS",
  "key8": "2BiA2iMf6N5ogN16RMsEzrhEXwvcYJ6q5nCZz2JJUiZZrF99UfrpqKQEgCNhYwXKs6WWx4ShPwSr6Hobwm2MbgJi",
  "key9": "52bnmLt6g3eC7C41QT1zCNxskLscqGhUexUS8x5kH1UjwDbCEftLqK4AK4DhawRgGraurdgtqxb4aU8wM3jUfACz",
  "key10": "2QRUtUcMEKGdMrkohPA62P4qt8uymERQ3aYooK2cSFx2pfyh3f8dCzFMKkEMZA8UowjQNM5G6E2ySGp1Tkx5e65y",
  "key11": "4FDRQpiKNVyGjxEdq38UsQxnoejLU7vbtnt1wxhB8Fnhk5XiijAfZhckuytkDj8P9ss7ByKkWyCrw7BNghQzVKmG",
  "key12": "3CHNFDhQdt2woFyDGdAfz177uVC2ZXcWK5FiVzzs2qUbPXggBzgSdfyPDJYXEhWSETJVuYNZwaLuHVQtQMmRiTfn",
  "key13": "4sczTxmQcoWbi7MhAEWpPm4rpKP55zCTNEbzgiFbZYUDQKVWYNX9LXSBbWqPSfxn7SgRXo5iBLE7y9x6vcBckqVo",
  "key14": "uyxWjyG2LBTaaVhXeLeQAnV4mZRJ9skWX8jeNZoB36nktYg8pnBXZ1eyYtAQvDAT5jq7xuhkuxFBzJmCiwDSoFo",
  "key15": "5aSX71L8YpAxpmUk9mc2SF1Q1mvYYDU8CEDdDoGQCf1Wtg6DZnttZA6tiDn78QKb8NWbv1PfmFHYu1Qr5k4E5vMm",
  "key16": "3bLccFqYoeWDwq3aFKdcFLYEhCpotnTyBcyhWV4d2cSQjq78WRg3XfKDphhT8ahWcnEefx743J8FKcQGNDTjbkxQ",
  "key17": "4xxRTDXwEWWSbPg6vV2djMQFJJFzUBGEJF9WTzqm7Y85NzQMjQuxEfiRLPDF7zaGVRHotpnHMy5gR8sWPiREqMfQ",
  "key18": "2V3zPLaHhPARE8fDCaQURYGzMuMvevZMxAD65PxVVxQU9BpA5kWtSMAoK47JWX8ZC71J2b4ycRctJxFtgYkTb3a9",
  "key19": "cxg2FPpwYkfvGnpxANKWvysTFpZDqCLEnJU4MdngsYTsfcMkSZff56U8ebiZXXRWegHS4SjRBvFeYduiNTMvecU",
  "key20": "5SFDodpP7zg3s7YQoSvBPMkQUzgj7QGWZga7wG2WZdkcPdnCpecoHu44ayqHLBT7Lx1biQtoepSfdUJkTjCxCitg",
  "key21": "bJQsDAWU6tX9HFVWJSzMMSiyaMePV5o86Ru1WNTzM2ENW3k9VusSi17Le8FE2iLBUcTcrwZTs6DHGtWGxyno5PW",
  "key22": "2u4yaT8CZf5uKgVJE2ZRBrfArNStFc8TSZ35o3dWJxrUz2cUnTRn4hBrN1s3mci46saVLNtiVZL6jSAsBrf7FUyz",
  "key23": "2t3iJCL4nRtEQ61KbaQQrKkNnzBjzRQr6F2m7jmfzsGppGi5cgiSchujb7Tkjb3y1dLztQUYWesG5PBiFe16mHtP",
  "key24": "42pyvuYR7nYmvTnNjNjeuTrYVGJosqjUaDEvzgpu5Mrbt4fpRzMYNkePMJgTXmsUbunNoKk2N8HQqqtNTRGpxbdm",
  "key25": "3dShcSokMoN4pvpNmCjL5iyKuNc9Pz2ntRb2G2TGezNDqjS2TZovqbdt7GQGsuQkhgbViNajdaHd6jh9JNUuxd3F",
  "key26": "4WX9EJE25ahRUt21RRcgjUTVcCnRe7SdaDzXaLd3x4ymjKKF6m1xdDzfEtWRPWbHQVuUqTFFRo8NyBdoaskmwwWx",
  "key27": "3XWKWd2KZfF5WiU37pn514fHfxyFo2drYrqhLm2iTgBm4miG9v3XEBCiYz7Ma3Xgs6BREtgF8tph18HdUFpb4H8p",
  "key28": "29Eu4FG6BBfoqrQMAycHg8zVuPMNp2g3mvK5d8xRatwRPineNXbwQCWBjLgJZokfpdoBoQnhwNGWKcuo2dbpM67c"
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
