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
    "3TynDkViZXYDaCwZoQgjfa4jnLsghrnfWxDeAUMZ2qN5y7x6d5obFgYAKkDKzYpePjFAWEFg4ktcaYVGBBh9KVg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5roVCGV17N5SaXgnPtFZz24CeAqPz5d9K6XoAYdJTUswenbQn7muXNG5j8wSGFh84b28G5mit4EsRvixQnm3Kqro",
  "key1": "2gR2Td6tyCCspvsQMq97hZMFW51kC8moJYcZmasz72ea2AYcPPX64PMyBU81PTSfsMstDHXo5yVuUCUfmFeLrgDi",
  "key2": "2jY39MGVBMEpSuf3qvgCj9fhqNEuLQ1Vui5ooEmYTSbgbdG33g6cdTjK7P5e6Y59yrbSFHxdfVveWx7F5QFLuYmA",
  "key3": "sxqPQDY1XQ27qDqCwKUBxD1BSnZVJbKC19pQQyMVdctwmsFHLUakeQmYTG9cHVWXjPeGDYePQ9v5zvaWffrDbDW",
  "key4": "4Am3VMPGVveGmiLo9G1ua2D8ncXbMSzFMXwKkCYwnrV4j9JSR45uHqCo9hp39jt7aFmBtn4WU54RNBdbqQT22vyw",
  "key5": "5iKYtAUGRTzce18eaZiy5Ef1gkADHNk4fgTcUrkNiK2aGkkPszh3bBnEb5RecbhW9LNDDn7k7j4YTdK5Ua2nU5wH",
  "key6": "2YHcoLN3VbGJLac5Ad8AoWTrEmsZ7BzV71yetb2eVnrN7oMDRPfCVdGvkzBSm5o5xJ6VxAof5br7CrrBaSJMYq6c",
  "key7": "64FhZAsQkcS5iZLe2d8gMo1ErYhNL3fnAxQNZtY8jXC96HG7U3QFJX2UkUpTL3x3kYN2iRqEh6nVVhCLheLiLQTj",
  "key8": "3hjBoHLdjdo2u3M1pmnXnMxpGRV1q5hX2tomW6SKMSjKK6UfFkq6efKBSDTxRDeMtH28etHURAfsUxQ4GFUwiXmE",
  "key9": "2TvSg3wDprLb95J5DUTXxP45Ui6uwsrDr4ww7RQn7Fd6B97gznmvWbhvGv3eKP5ku8kvc1q8RRSq8QWduTyuFKik",
  "key10": "26RGakwu8TbipSQaDrBmpYZgwJBr1btEGvBpcf1PiDanwxH3gyZkRWvvWu85r7bNwb9qG6KsknPHrkpKQV7MRqFW",
  "key11": "3Cum5ufkKc3ZEyDy8WeoRNwFQc5HLGSHptH65AhZHByg8Q3mxHBc3dAnDEtAGZh5NcyZbL5WsnaCk86H4bxZu6dr",
  "key12": "2RBZYQ72TxPjdM2YxoUwkxHjxt5wg67z5vVt4SzxnC16PwQd4RtV93ppQHtqBpAiyRLpTHZ34ftLLzeBiuPDJHtx",
  "key13": "53LZ45nCVRajWRcJP1m1unsJMcaFnWCSAqs4Y85XGwMNFkgB14cX9pnx5WAM9Nauvwxkupb5pEBCoGPvstdtFwDd",
  "key14": "3DAX1cUij2wU9UioLqNc6RvwdfLj84HGC3ZVwEjYYVgzTuPH6qhMp5dd3uvm96zC1yeesQCeSKhgsz7f7i9God4w",
  "key15": "4WNdq24cgAsLDabzcM88E3JG5NoX6G5k93zVyhYVSKVv5tZhrzAbiTUsCeyTef4e9xtrSxFz9pGt1g3Bg3uUTkfi",
  "key16": "4yXHc5SqoAZ37GsmXfFbmg3U4Zv8uWkxHprf8aSQ2tzKXEo1FcSxUj4fUukAAfUhk9kjGWBAbjLrcYBgPgW74WXK",
  "key17": "52a7YSeKsd3nRrZAKuprfMTQoB7jAwJ3gTy99DDJVFgWzhUR3ihxa1c9PDENj1phPjUpWh5XbQqMgTYFDSsBPypC",
  "key18": "5SerJz52479dwYFDyrGmKWhWFgRPifLyjjJd2j3F8wVGJnb2jL3vNCKdy7PpqKSTVrcFVUU2Yc5b9T5fMb6C658f",
  "key19": "4RNZqwGe72GoFLmG3V7dcEMGv1PqT4wB7qdLykXp75VR9Hm3Ddob1oYKtdyu5aoznUNm8ZcH7YTaST8DQdp4Cs84",
  "key20": "3Hm8hwZ6eDT1pntR9NrMDGvcopWAioUWCsbrA2YtNd88GyVJixrYbmPWzqooRBC47hMVV2C7fY8JohddEjE48h4e",
  "key21": "5EV6jvJvcPDTNjvka9f7a5fNvJgL9yF8NVeKX42sURqKiwApBoU81fvNxRXWonT7nWxtAC8xP2SHj3CTsgHtPqzW",
  "key22": "BX5YRkhQ4wQiuWjyAzZJM8gk34qpnZ2Zw74HjbGiY4xBmqwiEs8PRi1cqhymxLG7dVizNgPQTqEvyx6kLFRDzng",
  "key23": "j8nCouqJhspNxnmsuNwwydfkS1rUN2QZWkrcsD1X4U3i6PX7PzbmmxTuaUxbw586yiPPJhurqowheGAYpZysY4b",
  "key24": "5yzYnndjHyQ3df7SLNwQwYny4FYjpwCkJCVwWnURHLBkQ94n1qxpqyqvhyb3WPcQ8ACYAb7wA6HMZTgvpHRhirUw",
  "key25": "2bc1A85N4ogVEFtLxNMtSSLr6u8tD51Cy3G82FnNNtrm69iGMFan7P368ZdS91KubKVNWSQpzHoznpmT4YCGurh7",
  "key26": "5raQhp2dUhGNjZ5Xgb99kgsESanfvQTqwze7FQPE4icAXwbBqYDbBqV3dBohYpNMqwNoowNihzWmEuPEpzp7VZDw",
  "key27": "3fcrYnQSMApAtziFGcrBkk7yZz5J1dN2gNnJY3feQtvoTwSGC8vSLrqmhaTY12wpCwbAG8FR6tSqvYwsYYEsqCRJ",
  "key28": "29RPg6BWYrDJuJ5k6PhJoLRGorRuX6HvXZZCYKSsRsLGsYrXrsb9f5mnxeKPjUQYMsErav1syPhVwvWABZZ2kqH9"
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
