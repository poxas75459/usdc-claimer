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
    "M71ZPfXqXTQXjnjUAyFf1C5qpApBMpvvkN7Uzi8BcoTPHvHeRSshYcDoxJKSSfSMzDTjYh5pXmNCAGz3niuUkDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PjPvDG2Gf1PxHq2wycnnZ7nkjv3nZdNrywiz9oZ4iFs6hJVRy7qK1QeDrAqWK7617YwPx2D83SMH4gnnCMVK5uP",
  "key1": "VFCvnyuUzFe8adeinSAjMi7kSBqBcEcx8o2FiRx1YJydNasaojRFCpYJw9RqyeUEdVj4qndFycw9PR2LLU9AGAz",
  "key2": "5PMHP4MTfR6fXqKDEttu2KV5r5TAubDC9Z5n9ruTvH14EjRDbppBnWUSgkXo3EPGbPi5CCfppCMd2GjWtEiVBs4G",
  "key3": "5LKvSMZkNrtA4aUeFyLmKFGcpahv13EaFXqYLBJh7BUuTfM3427WXiBYZc1LYRECVnbypxXAC5C2HseZaxPKitPS",
  "key4": "4uUMpPfvvdaNxrdAzgsZQxrAHjdTL5wAr9bER3xCq3Vg356X7gxZg3euZnoVSx7uZs6BwxH2v91habtdftpWqzzf",
  "key5": "bZWGGTygu1gUN1BUdeeXQCdPQtTpocE2zyHgFDcd9YnFWSarJJoSkwRpphqJ9RgsBEEiQXoqxDzr7G4kjAV2tL2",
  "key6": "2CJLLtC4wiJ7hYLXNVj5ShncqZmZ5vWDqXThh21nJHw3k6zR2fE3GR8AGHGXi1p9fu8pCua5c1udaGcd1Jmw4tb8",
  "key7": "3ET7FoNTHwuif5BBBKPnkMYbxqbteitCJXFzGQSH5dVhmzoce9pjZpbaFcW9mQpwg1jsWk77fJ4sYs3dmuPkvqtp",
  "key8": "4nQjPyyEFSqxQxiyfd5UShGEyLr3uX7xLXSSMi5yo8Wmp89TsvAj7Riw1dAbDULzmPhBioHPqhiPjmZQuoqX6Sgy",
  "key9": "3xnRCJu8ySGvPdGCzqFPnW9SytNS1XL34kJpsMTw2Kp4ynNV2TpXbLX2NdMrNWsqV4Cee7ykNTpC6WpTdRZnVJNV",
  "key10": "3UKZSDkmQEvuPYA2sVrvL7qhKN6istJgXpPr7tB2zCqARXHToWLoYcrQynJr8gBECtsP8FRCkEc2By21vJZtNnDP",
  "key11": "bjLwzWb4nCv6LRNzS39vwqt8daK2v6pGjvbHFZuLV2TG5eW8BrLDxQFZ9z977oggasTahmZUtEMUczYSmhnihFi",
  "key12": "2GQ2HhPTRbFZtQBd3XepPPRqQNgMKFYT7EsgZZVJEaMrHaSsM4iTcQW4ax4JBDRzHYE3NGNMwEg3T5N2WJj9w586",
  "key13": "5HtrV7wwgot6arrWihH7cdDk9ZpmztmgDKCkhMFbeMj6Kbo4MxtDM8Tz5WsPVdWTt74vhcVQYCrge1EV9iC1cLF3",
  "key14": "pqek9ATK9HwKwTTv5Raj1Zn3WoiyGTvWnL7hZ2gUhGXBRvi2aoyf7sRfz8pGrn7F2GBRR6TheGG5YKXzZEQFkpR",
  "key15": "4pLRRwq2iAmHZvzPsHkh7NmpT4JaY5Ka75tvYkEwKLaT6hxSdsSZayT7xD8vn2QxZywzVyVQdzmUjaRxEzUNJMfK",
  "key16": "2pavr2HwkkitMErjy1Shvx5v7PVF5kNvPZxC9U8myQsVq5QFoUQAQcqHL9nUBBthNTgk4WSoAmunjCJfSe6yWA1",
  "key17": "5Te4khT3DibchLhnsCLrPpTwGSWHmPyNoNpJUMfR4ZKwsKQ3MFQmdGA4EkkTfWBHFS1konh8g7SqgpJMCjvWCJHV",
  "key18": "3ibc93ibYeCnDRU9girGMSd3U17syyzUQFtJY1GjgCgbpDsriqnWr3RdaZquGEBEBitNiMF7FxodNgecKxjrwqbY",
  "key19": "LPHKBv4gxzvscXwd43qrko54RyKAoq2WwSsTEjrfxPPY8SNaxP177jjHkeVPeAK8RpcZUEmkfrXx2YVDTEKuTne",
  "key20": "5mbacSxQ2jAxgRmTG9M64wEQWco51L8cY8EhVpmnHRtA7Rx9meei89kRcRKjmioKiMz3mQHvDmd82WA3KW6Xwo1v",
  "key21": "44657ndnjoK56vRHzAz1ui9RR6zevYrcim1xuNdCSbTKFodobRB7t6e6yH4Adgv14CMZ5QvsLhTtUHAxSfRnwTCY",
  "key22": "2rWhmyQbLq3zcTumWQUC6hfh1UsF5R3k8gBSAi2Trc6Qv8xqVogCJSmYbgTPgm1B2ASRs1VP9Yf3VGuXzSKajET6",
  "key23": "3NpUBN4UbDgNC7a36yKithDZQaK6VGWzQ1ypf1kLvHrSt1CnEbg1hAAEmCGQcaHyMkuKJgsDFm2sfEPZZ6TVzger",
  "key24": "55xNHgPL1mj9zWR8Z9QCV4MxmPx7TfmEnB7vCULPudFRAxEintHNwKLS9muuxVmiuBDWeDJeBnMesNnXhadEjTo5",
  "key25": "4FzbhrpXrAbMPLz2hQBxUse4NhB6S5tCEdr3LRU59Pgnt2Vf7ae217GU5e1hfEnsy1Eai6d1kUoWEAZVG4tbiZtg",
  "key26": "z3gpy32BdYWxDwe2Zvnuf8BTAmUytsseEjawgtbqkty6k8qF4ZtHWG28UVCWdKdBc7suyVa8DtZ6T7BsgaezRQt",
  "key27": "24jzUhiH8zVfxqXgiJYxeeoLJ3V5D9FbF2TPy6RxBkZQCWDwqbQcPHGmrccKonnmjX5kaGpKv1cXLbWajRH1S7Q2",
  "key28": "3b79q9cntUPFQi6gZLbEEJjudb4BCPNhLhsqUA49CceJvWr2wHtdvwu8CB69xV3GB44VwydjJxTME8LJa2nWub5F",
  "key29": "677yZYTTYKoVhqRvmSbCprmepLp3BJgiiDkzyhLDYgrc1iYs7Bu4qPRFSQhvNdvNJaaKQRTbryie19rjVt567K2U",
  "key30": "kooBnhYUiHTMnpw9r9C2PQ7QxoHdXKsryDaydD6zeqJrJcbwW456bsab7pzMv83Xt9AmYJrjZ4qnTje11waGLJb"
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
