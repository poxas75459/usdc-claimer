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
    "2bLzPSdutcBG48AUenAnnPsrVRJPBXwjEfFTQShVSQpkyyfVZzDXvtYwQ2PwDAEH2xkgst1SWJqBLZWW7K1an8Um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zmeBRDpwa3Ex2VnCrHJbuBYmNTbPugzettArc6YxuYQTv9rLug1J7f7N4cWBNRWtBKCk7ncPxUv3H9SmTMbnf4q",
  "key1": "2Pqpg9XKUfQTPCik1kkcQ5p1soH9HLmzdNEbmzgbB49dtrsVWv6HuPTKiVG7SoXpf7ZCS988U1TWHzSGdThmXRVp",
  "key2": "5tNvp7vCmcxNVGNVhWGob7cPX8FcLGX4kfotKJChQMkZjLkF11x1WC3J6r9vtyQPhPnmB31tLGDhRfMnAseS3SgL",
  "key3": "N839jUTzfnXuEc2tYkAijSwTzsu3zVpCvEWc8yEqYNAzzSeTh7dsVwkyUYJyWQKFRY8Un9QjMqUMcGoQLyvwi7U",
  "key4": "2sBKFTjikY8Eb6qrry54SGWSe6itanNy4XquAdoMfjacQLEGFw1Wdo92dQ7QX5vTGhXJ1iudtL5UiihoAqeBrQrD",
  "key5": "2ywvQE7hnfUj7iRV2fv7xCh6ZpNK9mQXkSSu1Tzy3q4ebYZktVK3YQzNegc3czUkBshjmaY9b6LzTgowwWrSCDfT",
  "key6": "4DrLj4UgmH3CVU4zmUBkmSeWxHpvmhauhYAP938FiTnXgvnYs8cfwFKcKtAQLM26Z1oAhMeQa5xsmnCgSvKamJR7",
  "key7": "4pJ4CjnnyzgrxcJbF3Ft3AXxQJpgwLtuvzrzbonAoNFw7iviW9r6bw2a6t3rUxutBxGPnHCNd5kjpAfKqi1nbrs2",
  "key8": "4thvFR6DyspZp4P8Cyg3MVDDpNY7u5pP7uogBqoqJsNgxASEdbNvVWoqspk9pVefzvNM6opnPdJ4FojG18B8sgiB",
  "key9": "2q4rZvGb8pwjj7hamDcZWnKkWBis9JgvS4rPs141JkKxCfdT8s3U2jNRJLg999e7v1KoahrsArBFunwpHAvAx9cE",
  "key10": "2X7eysZEvk28HK3saDa4kvHNpnyXjnFLasj1EsEH5k8K7Kj7fVtVgEoyXj7QhrMoqT5ZzMmsb9b94M1UZTKrPLUk",
  "key11": "5fBi7appCh5T8tD1QuXhDfyAcwh9pxzcCbRkLrrzf7nqWYpE1EDgXX7MzNe3kt9ZwRrWBFdXhD6Ngqc8zPoj1imo",
  "key12": "4zB85d1Xzk14qA9Ct35UtLvmiqNKjVH5WuwiVtCA6YrXYT7gcPATETUVYKdU8xgsnVjqFSjriGRkZvUD1NfqG2YG",
  "key13": "256fUXSongdSetmc5RUJmrBTc3nu7BJgHGRjdSYtsBzxMZQaerdCyX3sqXrycgrAgd2zoo47SQK71kNBUDkifTwZ",
  "key14": "2qeAyyPM5iU6tuheKGR654j2bX7eBNtcCEchPLiiCEcFrFQ8KFRyGuKqFEo2xJPrcBhofycoQFFA3xMFKg6HH4ty",
  "key15": "3hYeJoD2SakuQ4HsoGZ1zfpDxARTkNafdkdK75enkp6SmZAVDzSGfZJHKhGu5VzofhhDWA5UsKz3nngzv2txGvzS",
  "key16": "4o9BkUuRrHoz1zC5rxmV8TbW4QhsAdhK4tMq5dfSVX4bXeV4ebJYhD5VTKd3y2X9wbeTSyXwVQmRQX25TgAtxfcz",
  "key17": "38nDDKAeL3GwdtMhgpUspfe5k72xdc8xXnghjmaCjr6xRsYWsucTsc5W1AowWu7xY2q9EhRhwy45FYXsywCHryeT",
  "key18": "3Ktb8rgvxFfQ5F8EfUgRZKcdLZQpKUrXGn79AcHMH17JiYci3VKrpouTJDb9sCyox5hrhccbivCAhb6yr8bh4tuF",
  "key19": "3qNBv2U5cV8X6tdj4iBsF43hqVNLik88v1XeSawem8QrdQM5LiBgy2TVJb8BghefZXprGpZYDEzKKE7W9WtTSDxi",
  "key20": "4ccQ3LPpnJAJXr752GVxnJLoWrqB9EEqJsJuCKiH1J7yPeWeDVNNbyDjumrrvAub19tm8vcTdmTJn5GdAkdB64ya",
  "key21": "3RKNBXVbnE4qTQ68NkAN3duprkD67VBusFz9Kr9jpgi9mqJbLcm8tVXGDzKJPqwPk1EeciyafWf7YMfXxH7V7vdm",
  "key22": "621mEajbMnDVffQ4YwWzK2tT6EoBm8ByV1wtECqWyD9Ha7gPCnAJP557etJ4cTTAZ2t3ckC1Hx7r3AHegNYtTqf4",
  "key23": "2ZMtMAyUKd8ZPUDy9YQc5UsqeJAiFtS4cMKvVvmeqfZxUqZJvuui2qB4EESg3n8P67GqophRdU3oM7RMC2Tk71EW",
  "key24": "4pxDU3GiVpSmx4E7FVBt9AGafx8n2Jn2NjuV8fGWYLwxMmVSgrhEW8AgT9qGmbxrKcMCVxbqCnbYUGaCgmQ528iu",
  "key25": "5zApAaSwuGYYaDKVUDzJJQWNLsTDTfZhhk3cD1TWCR9CLZvZS5ArbEFwrXyFPeh2ZTrCJ7yJqU4cBbGARy86HyCV",
  "key26": "2UwF9VTMXZY4wPDCxbLzyd2ukQVFni2NzQudFnZXxDWks5ibWYhZdhXAbftjrs27ERqsQmYky7LSdygHbio2tmnA",
  "key27": "3PDgVGZ3tttWGvHafTUcZbPQpLTEBWg4Eqx95MDLPag7waa1NJer61H7UJpaMuW5qZ3ueyYtyosd4HCfqk43UszP",
  "key28": "5z9Hr6ZW4HxcYXHnU4FHFbFtbzHTnMZgkGMqGyvtLHSgGcFWBmVkoF8mst1a1KkrbNqSXxL9ybnxPH3Rk7gdnAGc",
  "key29": "59f1CUtUWBEgdUuF14CFRFRkxiGzQuX8ecxQ3nYvVBVF3Cnp5bFhU7M5y9HxYa9BmFsaLybx2s19n6JRj5gRxpEZ",
  "key30": "3KrxcseMFUMgVCfJrryatFmsTQSMw7Jty8H37jBiV8JGnw2WfJm6p5gNNJW6kk8SEQg8CNFVCHscDRd2nwDcrLHu",
  "key31": "5ZAc9XCr88wDUdFEyYRRFGHmAfJQzzpZn9w8ASa1MnyGmEPnMDKkZpFCPPDC4CAsKG83a15T6oupWo7XovZ7rEBz",
  "key32": "hZ5ZnWDVoPswLztpC5SCntScxwshkdWmLFhk7VN7DTCmoWuiV7WiiwETgJQN4HSXj1gD6z1WcWZhuvcCbFqa6E3"
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
