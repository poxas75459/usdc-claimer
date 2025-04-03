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
    "5EP4QNtkefeo1WtiF42XCkyEKcgCkkwzHAwtPKVnM33hneTPov1fMfo7JbdVW7Epzed8vhm7QYJLKzhvvD7rKJdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HVoRqoMQ6hLWhYATijr5e2qaxnq8gZwzLzDLwmap67MHnEWqeVmtRkRwdGUQUekWidxb3gUqC8Q7zn2ki91BCSC",
  "key1": "4vn3Mh3binygbhGkCAfvRzETC6txSRfsxsUa9fbNtXCf8yHCVYZ9xbxj3TPPJpitpJQxW6s3MAWUd9FUosXViHh3",
  "key2": "2iuDK16X7sNDLYrmfz2w1CY2FqTsVqcfLGEDFfUURxX82pCn2gnQa7ZRVruxAZVswFLvsrsbBmf9AZ2prdwzXaxA",
  "key3": "4e7RGdwhej4NkL8SmtR2rvqPjsrjGPJVxckTYMfxghsHigHfd5wtrXNQ3xoBmww4Lcgt2kBHeo89rVYYCuxvS83C",
  "key4": "3DViWAQMEfyVmpu86myh7jguNCCDHQcNLjVi2PjBCruxLU6Kc8bYokSaWcM2d6cRjwQJhtezZsa8yF5fWGXDRFuv",
  "key5": "2qwbyUPSHKQW5S8Md4AQSkdSZ7B8ACnsZpm1jrxwCiDkCppBRoReBXqYTMVb6CUQ8pVdHmeEMSUsomWn9yiDKaFb",
  "key6": "3MbVCRHbAHyxVyqFtr7DPosBRvfmrjRtCRMMY1v8M6pD1pKTbgmjt3WZjnHpzxCaHch6iqgP8X8orAFtfasWBv5L",
  "key7": "7vbs28ncqY5PvpWiFbY91uB8xdb3ox3GReUz3WT2LBwaeMyaccbZihGEjTaF9Cv21Ze5zEcPfwzGLxF6WruEwCf",
  "key8": "qsCLcVM2oEHjFLChdbUFnnKGjgpadfAuwA7ivGGvVVWdb86p87AaNS3GCSHSQ7HngRfLsyG2WQcxc2yeK8max8x",
  "key9": "3Fd1EF6wRRYE8veBp2XfdK5kBicqkYBetgkuAcDtroJZP7evQmXL9k5HDhkY3qhJFu5Xj12oGZgGatXFVuhUmCQk",
  "key10": "62AvsDxtf8dV7NwStnxonn2J6HRxy3VLZjtceDVsaKKRKdL6k8dgKXTV2fJsrjGWCWyHxpd1a3kSRzitwjvUd4T1",
  "key11": "25MfpuxCadiacLYnNQEKhjHgP5162vBUGdDCfFHWZdyFPzayDXRMiSopbYgbycd1VHjSEyok8FUqL7mUUWeE37gz",
  "key12": "2PzeyT9QQnth3WxvVuGJzCrh4BeoM8mNbhQW1w4GQCtoNPdn5b2UzmmZ5bdKcHUPTdp9VrbQS2vyTq4k745uwaq6",
  "key13": "62axSDpVCUpuXFbiTjpVEUXGfAXnapxmfx3q1UQRd8XXdpQFRVe2pqUGcjw5LzdrrfReqwtPo9k9jHeWqEFbiDVB",
  "key14": "71UnFp86h9h5TuH1rxk4cQEhQFfpUAeqWmPCAK2exMBqD5zTeNDZ6AcUAgDyn9oq5YYqxg8W8o6QFPdsRDZq7TX",
  "key15": "3nZnVEnvQrCyydKcrXx3WSwAy6oFnp3rJBxBJFcvc6xD4dMJZUKQdUT63249BPp4YznGX2yrDLMLE4SgPh1FYF9Z",
  "key16": "5vGx98XLd3SL84eandUMGQ2g645HVXGBCzNoHQQdncLoYNfGn8choSt3aTzehSWvLABWgwpConi8Q2BeSLAH7f6b",
  "key17": "3kAPXty1EKZ2FpyZAvjnKXKS6r6mko8gCpjbmEAvJuUBf1eSAsQo6qmgs8qeuXpHHmzCueWxUQ7GeUtbbxPQEgv",
  "key18": "2itK88fhbG6RL7wSj8R4kxzcrBw4BuPK1q6qdCWVQZUTVyLZF2KFi8FkXrh7FG8WiNNjdFvaumKFsZS2Ujf6wyN3",
  "key19": "4LSDprt9mYK8NDV1bZ9XVCoPhZFS9fhK5xpo3gwdsm5S4YPqoxSSgvahdAfZAb7pNnoJnc2dkF1nK3V7v6JzjGY3",
  "key20": "2Ubez5UoawTiKiQRdemTkKLKQghuPahCtV9NhupjYCsYxTXLkmbThpQzrb8FzcZwRtXUn7XG4DyXXv3pa7TXfThq",
  "key21": "565AgPLp57AsVShvncgRaLu2DVdaToKHaKXCevsTdfa3zExhAUkoxssZw6T4MtQE4qsPm7No7zgpBaygH7yequuc",
  "key22": "5vW5k8mJeEtnqvbVccBo1RymVw9cL9YhPaxRmxsbbxo9stCVnbvzQzKCHinmfyGKDyZR3mvLariV2CEFn65F6KN3",
  "key23": "3VEUYryxYbSeaXZJcmdfpbpKMsao3V3UH7bdmqnJziefgi9L2bJHUrfspKkHNvMMDLKjTw1G4UPRkPmupR6igKyV",
  "key24": "5eD1sUdKbptytibV2tF1a4E7MmK1XQgYgtAJmV3no7uHbJtrrCQjAypDm7e4xs6YhbJSbeKuRB5dV5c9ykVaphjz",
  "key25": "2remzyHa1nSxr5442DwZbLytKYTjmrBwTcvgDBDcnLydzd5wPLYubW6pHJiRWFsfSN8wLS65Vkwpq7u5kadewFQQ",
  "key26": "vemLUdAX9f7SkXB5uF1mi4v1g7PpAso6betRsYM295REdWAVBYNjnbs2DZ99wDhFrdB3Z7YYyNc8vYWDAM1CnQ6",
  "key27": "3wRnQUY6xEF3wCmMQeDsYuS1vQeMtBC29r1514vxTGHDFfpd3FvuzmXKYTmXRYdAznA75hY9WsP6LFGY49U9DojV",
  "key28": "24d5iv8jyejLE1cfs5Y76GWEsKjeSDTEM2FyR8PqzRsfvY1cpsmpkvBRcLaLRxayEQyvMbiRfrCS8MxHLehmbbp8",
  "key29": "3YS77UHRmVHSnXVc8KWyi8gqYNAG74NjomeUMDox4vPBPviHqWBMbF659TvZbM9WGfDHwKhjSUDNfuDjR19HaRv3",
  "key30": "8PAMLcivsjBbezaXNpe1vQvuLf2f7nW8coeBAdPXwi7uBabVZQ8B46y4o4Q88dyCwyNR6bHJSjadQi4QC6nzuXk",
  "key31": "4Qgy4mpQkVkGU6b6GNRmARzFwWeLkVQNgEkbUqXoUGrZg7ffyDxDiRZ74TGjjz3yj4Cnq8E6XSVjBcXUfiEkX2Y6",
  "key32": "3q8p1deX8ApHiBWJ3aRu7phUoC4sRwttQBCLf9o8o6xFH9tR85QrsqEwcf6gSDsJ5YFriYPyvLDJcXHbCMwyfVPj",
  "key33": "2Z341SZ2RBhTZLWFWnbegTR3mm3ZzcATcLTyg5xAmHfTa9Z4UV3dU7iecJwQkjhvi5ccDUHuAc4GbAXcFPX47uzM",
  "key34": "k2UpYNHTryAL8v3XQrqCCHCZchJ1is48a6wT8qsetXjsxsfJhnmmBDcG2ZYuVd7hkvd6p9g8dgobSu4YgKZ8Vgu",
  "key35": "2XatpsvqRdhj9UBSz62yjagozx6k5UjMnigCiecP4gtr7YcDChYUzhQLMLkPSNcXQBiz9iwoe32TgoHnqiDiLbJn",
  "key36": "28SUuJsgvsjKnvjucekPDcmBP5XmScFcfjttkAyD2ZnQNC4Yz1bRHu5PJgQc4h16ZbEaeobTWvmoPgjacBe4Lfiz",
  "key37": "u9mLeSM1UqSWEnxM6kiX88yYNxmxS7byQv8vrRXpcD8KGkdi7ia8wHTg1WuXD2kCsGNEQhJ92n14RX4FQN9x8Dc",
  "key38": "z7SdyRZBRm9YhRSZcZVXB7Wqd5qY46c9dEH5T5QLsCXCHc5pu9C9LUZibtTCBMSjtLTQm7SqanxJuTAMKtZLUN3",
  "key39": "3tY4mkvdMXJoa21NvCgj75zxMFQpu5AVjucby2woTL9AFdMmoaKWk2fhQhqxPzmaKCdYNAxNqkycGz8ts3GadKhm",
  "key40": "52Qjanc4Qm4Gnu1bS8SHMaE3fCWpaYw4KYXpJrCHDSS51mWyQp2GmXhaoXo7oMqasfkQukYvrDMCdRewZajdTrqd",
  "key41": "ePAarBZhXWST7c2kTtMvffuhxTkRucU3ZKCvFcAwW6hReYpek8dsrx7ZAkNHCLCFZMkxdRPZVPLSaJxZkW6X4kt",
  "key42": "uYib3t5sVyxbF9w7KRFj7tywpWyxVXLoP4ZDBuBzY8edrrsPjquQXFdHaj6Ps5uLhJDTavtkcjavqorLcoGk2r5",
  "key43": "3ssfcVt8kd7fy8Ehv5r1Wz4rPM3NNC5rYvh3AyRvHNvBqVmpyMct8iamDXeaWprUafKSJhRF46hwErdLXQPqmX8C",
  "key44": "5rf9aCSmByZsgGthihsoUVXPoNh5DgmMuo8dkykoCu9QvD9wmkw1W5eYfVyAnn7hhJ3JoAYcJtr7VkJBjTE4ub39",
  "key45": "4bU5qtqoCcFHxUqsBemPzgy4wM9xX62VGVRS9Pfnst3JHyqNLecEzirHSD4Tzx8EC25pw9XKcGZDjyicXui1zTeW",
  "key46": "YDZSo4U3T59q7qL8psjxUFBUFuwy6aS1HnZRGgeiWta71bDHwdzpMq7oKjD39Eb65tPx4mq7j7oRi6411axJjL3",
  "key47": "5HbJfsMZDEsXDGba86shb3837YFExbnw1iRv5C3wmdpFzoXz9VmQutqXZUD4hPfreq7HeRzLEiZ4ozHgygsVPQvn",
  "key48": "Vw66hcoQR1f24KzCf7nMQBgQ9HytUguy5LoCpWw3dnWvw7F6MxLZLtYANNSYk3VunmkDNnTMwbay4Th44C77HVR",
  "key49": "2nSE1cDRmHQgmyF8XUhKLcKteLdYGB1oP6ES2rvAH58VntjZA6HEsffANTfVmtgf8C7Pyw4kpAL8gBjKeLj15r86"
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
