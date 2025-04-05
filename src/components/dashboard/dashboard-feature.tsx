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
    "mnYcqHCZPs4f7oJviTDNhWMMj3C3EFzEBf2VnziaPvp54LPcVbZ98x1aHgQF7rRZNQEJsyzy8cSuhvphnPcyiQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w7i5DNZQMUCEpA4PXCGJ6wyQUS67VpoB1THUC6QB6P1LAjSACnXQpYanVk572Vf3RtRqAPJQVi428P15QM8hHu5",
  "key1": "5yArqgARMnyWnFNA9AvYnAAWba5x5LUrPntdqdNV3ehXZihVjWGGYfL9oXWPgAXoivFid6RMMdsm1VawFfdcdsWY",
  "key2": "4NSdpwdNM5zY65K4uXDiyuS6GVaFCAkkxDZuw2RhzbLfuQACRqXurfxmZLr91YAUBZ5xu91K3Aups8w64oPWDEd8",
  "key3": "tkd9VB9sBwHZzLJ9y5gwwv4XJJYySbi8TZXbX1wT65h33nza9SsaAM27MhCtQyBJu8XQmSsBbmDRBgvTvm9EDp1",
  "key4": "3oaZEgeomL7DAuJ9qmAiiScBK1acG8ZxM5MuLt3X6o9Hd7wL7Ds7GDXvU9QBi4qC9UD7icd8cRwGaZX4oGZSMPtT",
  "key5": "2ZsKVs6K56r5AiFzTdZscvD7Vkyrd6MzvwEJNURhD67cyzJpUVCy23yq7zGRmBM9ArwLe4UnRqrDthToEVPty5gk",
  "key6": "bB5tqjEQK72AEHxtpBDxExxHzqyn73K6n5b4pxLrRkvSTJfaYFDEZjexJmsmB9qMV5G8YzFZYaVddUGcz1HCAXi",
  "key7": "4DxxkcZV7fL8AQLiMH9UVGUjt5VePaedzvsKEvafmsAQbwM4erK6QsC8uqDRgfp5C2WQq8qVJbBU29ANcZ5vBWMN",
  "key8": "cusfmSHKNs9a3wLFiAaqxydZ5xrgc574Lq5E59wvgNjvg6jn3JZrjx783SNV21PBkk4DZMqA7BS8Lur4pdbH82f",
  "key9": "GmDrPdJKFsYGtciFDLh4aJHX1TeMyUi299kC7atsXRmZAFAcwBPHScGvMahY1LJyTEhU5TeAs9cGPud2dFZudeY",
  "key10": "ZPGmZATowQ5w3q4Zr25NZYHBENeQAH6zsDNXwCJQBUKKrWLcEW84MSWMATAwYMYQVDHj7sAyu8MdkeUp2LmUPnx",
  "key11": "5RxVFL1W5ztut14cDSo8yZE8rbmoAPAAQXGjHYYnEkCTZc6zZ2mbC1A7HSBNyU9ja66ePa3yoy6zg4u1uHCrBaCj",
  "key12": "4mvpk9krRdfUUFzS1xgqL4xy8Cq9ZgCVfuQGPdYpAF4MqzXKt8eteizHiB2GJbwwwC6a5ccSaeupULiyyLq1qF2Z",
  "key13": "3k6ZHC2GBjvto1QBL6yP1mKNS2HMcB5zkBMWXAmuNz4DF2PoZFPEae7MA7GGSToLWmLsueKWyzEcLyvCGG6jZcYv",
  "key14": "Rk9nNmnH5JMN854eaaTGMSP4wUspPGUvNbAzArvT24xTtN5eb3wGkpnxoh6kkqACVhC2X7zVCQBz36vvt1RHGsH",
  "key15": "N1Dp9eidMRuxWkn5dY1NR4kXcyo6BxAFfkogiBN7AuUm2YWC7xfntRXoqC3JhqNdTvfr2C5JE3Fq1eYTAGbxKkx",
  "key16": "2eUgRaCGPRCTbK1S5gRev3RwbcnscdVaGicfqL9dffa5vVLb9TwShVAKNq6QuzeFKsDCCYrdjzDrxnkskDitoJ48",
  "key17": "WgNRRZ6rVsWehrZcYPn5eYPR4cX5u7LuZNeiNb22aBRFVysteyrAoJ5XDBDr9FYjbz2Kv8NdJ4EfuDLhs1M8emP",
  "key18": "5di2rpyL9DswqJes2cS6fNxMmM4iXrE7erQAFaPodSTHG59eJSxejF69paR1627eEZfw2a6c2XRVdbVrDce7Tuyz",
  "key19": "2mRdjyfo3Tf78VD8kWALLauEw8PHRbUVV3PP1wvBUxRrJT8VhPSzaeoyArB2wd2ofZA3NuDrTkLq9Zien9KkNtwh",
  "key20": "5oGozFZKhd1tbXQxPsJtM8jyrhEqe8SpsSUzUyUYG9XJkb4orEVawuJ2RP4iURXYinEPhwwm7yDBvfvYKCzULQCW",
  "key21": "5cEpW3Tdfp8fBLQ8AcbgLGCjhf6dKZHoGML3kqxU4aCDekcrJnt7GqgaQQ3yFvvM3ZpsJ7fLq5TpfaKLVJEpu3Jk",
  "key22": "3DGzfnfVt21ttTNz4bxCFkeQNNg1vrANr97kz9eyJQvPmA2LQZFv582Ht8pRrMJT6ox9sgjphvZZXHFtyaruoACg",
  "key23": "4iYXn3F2C4qgHTGjaz3uLJ5sFfvcJRzHbEiw58gj7SusCTrjQhnDUjkTC6xFQkQC7uBngXAoF88JrJfpuVgSxm6f",
  "key24": "5o6CFhUCxMaCnnehj3afGZncmQcVgXgpBEBVwLedw4rHnUtMPqXc7SgD9ZhfyBL9wTKNsfFgD1cpEPrmp86svywC",
  "key25": "xD6xBAxKZCKuKicdqJffDkked4pPfq117iKcfPEosJ7gUNwaHfokBo1ApJcyKhwPr6U1q5wHVXr8pnVHUWpE7uu",
  "key26": "h5aG26GbD8fXXHVsrKik6hii1mMFjeDB3A7CYt3u9FXvKjLtyhiT7PhgY5T5NpEB4UWmsQrRBSywU4YxPLCEuRh",
  "key27": "4iSbj4nYrRCucmWWKK2FGu5k7oxenAGYiNrqNXHJvMzdzkzCL3rmUf1bXaVDJWmNVxGN2yMhX73s9736iPjNYu4b",
  "key28": "be2jioSUL4p5V27XzqQPfN266DngWcck2K4cyL9Mi5jt5rqGADp8pC5VcetewyYQ6TiTgAHMKGdTC1Mm29wb1CB",
  "key29": "61cEXMQAZkHFkVUaBxLKn8UeHwntaSJ9XbH6MPA1Ncehvsuiw3qc4UcS6F6ptDdAqgaUeRZxrpkCkabvDVWXzoTT"
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
