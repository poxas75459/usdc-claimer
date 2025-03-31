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
    "3ATTwTveyw2582gB4LmFcAAXkVE4XHc7cqHkmCpQ1YQvTzoUn69vyVBuGjjBb2jyypL8N2oxjS9XeEVwpccH9khm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pvQCyrdAJoRudHsDKpEUKDTW8oxubnhXiRX1BJp3GwGrAtokHUZHPp5kSBgDFCuwqkJukV6BXeoGVQZC9FafGGv",
  "key1": "5Mzofv8yL32ukCEepHExajafY2jQNyotxRJyJW38L42K59eRNMNS7EbQNm7aYiBzZcfotsxjkBuyxijDeCiNYHiC",
  "key2": "3pfT3bVc8hSKkX6tmxgeBg8ZjjhcHjr7Hk6QRJX5vTMpBE5ydU3R8HeY9BaQVNfjWFtAXjLusTFjzbiPhnoriryu",
  "key3": "45CkCEsCSch6divfvjnqu1e18WSyS3VPG6dCbg8NNUiBcXZCdP9gSbnamfQKJP6gdHjjpLs55SQgvNyFAVKqTrKT",
  "key4": "3Le75yWkKj3rZtM7vVB7GpwueJ2a713bXsthD1toUM7wVomErxELEZcCgyau3mM9z9TEiJ6jPTdXfwrw4PbtjYgb",
  "key5": "2X4EvYAzTMfC1bRQG8NoDJytLLC1ZxzsnjtFm2BTXVjuBFitVDFKAK1zsANNi21KLg5t3zRpwG1MQnhbpCK8oLU3",
  "key6": "53kqkhhJ4B8RpiPj4h9KmZTkF9VX53ZR6iY3F6vmYpsCHWRbwFiUipSgugL5aY2zuGJJ5DuYqpFHEWYLT78PmmMy",
  "key7": "tZM7Z6XSi8tGUMWvV8zKVDaHndMSccnxPWb4ra14oeahcheKpg5yQGVny9mLT1WudVhwGSNxBt592SCGwdzjMC7",
  "key8": "3TG1CjDEtN1YgiQmgo6QRhHdoQkqnmqYfhaWAhoLGzD9RjbBSygQ7VB2vA69ew3C7HYrQciUFHJGe1eAA8kZcE1b",
  "key9": "2HoPQVhnuByM5TyMZrAzGL1ttErX7Sc14VexBMuWg8Cuk1m9jaxSZvyjsKzuXouVZ554JjDvJcGk1cGBvJ352Fpb",
  "key10": "3dnBwfYGaSpfBTw6KB2Zzt7HzhCUEXwN1Gg5SPP5S7Ew1FTsUC563Skgogjk8EVfR8ooofDYeW5LvYL47DwfgA7H",
  "key11": "3MDxnc4k9idiHo8qmHHGxpKHsSNe7Z6tJQrPLNwFc6Gt61qwkUhorfLtS4oVKTquGh4kpQMVeZb7Ec54BEVxfbm6",
  "key12": "4DW2eB58QWrB6Vb2C8TNc5MsQEP1JJ2gRQgY6SS8bCEuXs9xUAFQJibyktUre9RdgdXsFRXpS7FUbbxhdmkiKmrb",
  "key13": "4W7BYyB6DPfHJsoy4ugJghmVbQR7QvmPTwJ6BSeahsBKygkCKKdaqWDGaYz1wz46iY13VE6MpNxH8V9VZ43hx7G1",
  "key14": "3xkkia7kTdy48yS8h3Fjqo9HFU4hG2zQpQ4CZsTefkPXYvsY4TcDqe3rbWHckbjJCQEFVCUHVxR1Gfq42PSmKcHG",
  "key15": "33J2goSGXFJHXphcHmfPgRcX9aMQAzvyw32ez5cMLpVCiEqs2rQYRLJwGQApiUaxfc4qdbuNJBvxAMd8EZ9NGARu",
  "key16": "65jv7hNrpo8AhT1DZ4ijcZPKSGk1MLnK2fNy6gK6aNRxtDB3gEAdN2DAZaVUwyzLhTn2EbPbRHViJ7q6KHjUKL6v",
  "key17": "2n47Q881i6GdfQKy8vt7DjWYc7hEp5BnWZVyJRDe85mZNuaEs2gT3caDzqtzehS3Fd5rJCNVVx679u4f5q61gNFu",
  "key18": "4FGbafTUhD4gbtrajascR1syMBTNmmHWmsnjRxhC1wuQtyCyQMTcjxiXGWkUS3eNiZvyRkbkt7GSnt1viMJxBCfd",
  "key19": "57UxTYRwzPuLk7U8oN8w6NdFLicuvUKaGjS514pqSJqom3oBBZZNpWcZC5ej5SSBSVoDQUy2rFsemEUBmPsZyWEB",
  "key20": "3JU3MP7AQ8bPkT2tGe1ip3zzHPxKx3bqe8ST4mDhsKXY9JjT3tdNuFVNK27WQAkGWmKxw5HL5GctWceiYN2K29WC",
  "key21": "4Tzht9doAHzooz651M7SDzwPQLLPWVWbjEWSQMwiP48E8Rej87ScbT15z19PEQP4YJNRjMZiLGjGdDNHuUzDM4BY",
  "key22": "5gCcgJhY72vRbx4X66K16we3C3hBcS3VHFDEqLahkRHafnbbGdgVWpmspEKtn6XSBg6g2zMRNKUXM6TJMjqEPvFR",
  "key23": "zpDDvrJ7xWTAUrQe75m1iHqBSEiyd7oDHBq1Zbk3kdAETxaxXL3eTkL2bxGTyq8Sj9fMr1DZWQDL6KNgpcJxS3L",
  "key24": "4vVPbbuNcUpkhKWd8RAZ4MV8ezzrPTQRSeobrmYqXqS2HCSnuRc7voJoZEzrmeWbAh96ovuxLkz1ihZiUre6qFDp",
  "key25": "2t7CE8pkahSAN9n3gzRY3gt1emXkLKyFA85x8xQtMrxMsXv7h4D2k78ytX1fLKKfoDEbRMo44353yZ5GMZyjAm4f",
  "key26": "39GGD4jfh6oLFFXWwfv4Wm6FsCnVuhAT2s6yuPaQFjKTQLkuUxwk1Z6z6pBKdqi691eTP9oYWYco5ybrUxCzBR2H",
  "key27": "5w2EuHgYbDrGg7ZLrdH7PJFuK9s47s2d6FkY8ut6AxGPfJhtHeFWFys8NeG2uQsSG2HeoHpF3hBAYhLBWDkHzvby",
  "key28": "deEfPi4pebxRcXStBjftyJDctZFc91qYuy74GA6yMMcUMyk4H71YeZpBZjGtxLezvCxFGcZW1RBAY9wC4ybbE4Y",
  "key29": "AfW5iqEKBzatU7GLLqTAR4HYQAo9eJLjYUUan2vTC7EWUZ7gptPTNm8apV7YzsYPdCvVuYw32SKevrJQJqPL6nN",
  "key30": "eqLHoVtzoygWU6zyifkhdirLdJeeBtzmfc9xGo2oXnRjwbrf6zTbhjb9RzmVXfpTRAhzP63aY8n3e5gXeFchqFo",
  "key31": "5K8WvSH4bf6JZgoTHHFoBuDwWov8UZC3WFNn377VXHKdxJW5tyZwE3DAmhSReEarhyBSaRdykosTXEAPxwPpjPYA",
  "key32": "2x7BaXBpcqrRVnddVwHLn2swJAdrBGYhHADqZRkbXarCstCETkAEUinuT6V5GcKfpAJtSJiKyupAyx3v5GLFY9Hy",
  "key33": "2FxFnS4rj5iegSAgEayfd1VnELdeoJ7G1gHD1Fq1YJ98Fr8rD3uMy6RAPSbsjZPNj1L6EMsbi8G9imLNZb94s3VK"
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
