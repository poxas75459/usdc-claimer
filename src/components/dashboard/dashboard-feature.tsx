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
    "56Q9SWsffofMHnZptVfMWvREN3exFy99btYsjst971seq6LPqBo2iiQs4b44eQwDKaNBedAtM3K8zwRvmNAcprPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "297f64pt92vWQMSHYc6YJxcUxEVDsu9nPCxQSCDp1ynCDiHAUYVe9xpfeyRvCbr7KbxRXZfYXJ71SVnRYHs4EJ2t",
  "key1": "3PyeSJ5zhPdRDcmiKud69rRKsKeRpi2dQyyqJUHRn2dhPaS2X67ihEVPS6vev34myKE2pxcXQJSJn9BmwVvumaaL",
  "key2": "5As2tFnNWt2aosHY9icp7Z8u9p8VFSMNdAFjC2HW8Q8aMQ8p71gDsYG4aarPH3sHqrwbPctJQaEv8R2KsAhD43fe",
  "key3": "3BfeSfQC6panNavsQstDHhfhYbo7LXNCe6oc3cDAmrf51j1kt8nHpn9RoqCYa9rTK5261whFtaw4WV4c2pZveYtb",
  "key4": "M9Bv8waT4bZMaEZNacDZrki1Cdea7T9q7snNXnV4cQZ15bHn9VuE38VGR2W7sbvdSaZZKQNQVgYiE895TLpbw8B",
  "key5": "4Be8mggDXrh4vvzUmdS9XfGTzPgM2DXdGmtKNqYjyfmHXFvC3iGFY61z46KSFmGj2pKrXtTg7s84JbiEcBJNRatb",
  "key6": "iVe7nYPCv4hYhBvFmQrCNhxY61kuwiZ9NDhp3Zu6dMhEb4ZEAXDNxQTvUkGUp8ykhtuPQuHg3HurA6H1rra6dc8",
  "key7": "2Z3LLBZs2WwHBqZVsXnQFFuaVoEBLSMvZvr4ac3jankWH2cBMrXc7RFtjzoDxoB52eXv873XfT1sRaZEzAxoL5ff",
  "key8": "3b3KmEkUxuu9tQj5kJipe7hSPDoKYeU4KvS13u5L9hNDd1ZK9aMLE8G8EjfzRfty1xTTqv9W3GrhCzAPNPQ4SavV",
  "key9": "NYo4dVPkhck8jxwPKnRxvhCwwmRfE3eKd2SWfeQiKsK3wmRoTTbrp1pEwSJN7tQvYcQsjfp5n5h7aoccMuLXdjm",
  "key10": "4yCMVC4vCwPquZ3FqLkYQHK9G5PWbqEvFmCdgTQnMTTuqgJcEVF4vaMnSC5Ce8YqkBoY9Fy5nkDQwFsG2QmP7uwE",
  "key11": "37af8KRGBaxVDgBrqV4c8neweDGDLpcwDsK1JAgd1XUr3hVg1UdBdcUGRadTVigmaZRT1FChiJifptkRsia2USo7",
  "key12": "3kD6ykbeaBFomDX6N1TWoQb5U6LmYGkVHxD7B4sQWQ93TiuDXC7KT6EfFR7EnhDngqbTtisgfxJKihtasoFXxcbj",
  "key13": "5jYTzN3CcSzqgdv61qWSns34FW1xTrvjvazb8ptvrsW7aBGmgrBNkKaxEgUrXTJ1MZUYj626bF7fQ9HTxYQsbG9t",
  "key14": "58jkM6TsdrqMJvnK5Yk275ZsrMK9aRAAL9CGpjDBKKJbKHwWfRPmtgCNcpc2L4GXiwjC4Pbx3gKmFPgqCBmMGiGj",
  "key15": "2Vddnd1tUK1SKtgNkfHdBBTiuJza9KR3Me4FWpqwUfA2EXsjqQJkrybfqVFJV5jteQSmEtxXpwD8rgBogACv9kHj",
  "key16": "5zs3F1YBvdraxkRvb4ip1m6hrXq8gVausahSTpFpMVuoPSzX3An4UAuK7vnNmy5kPV3ryxVnHtbFFxgwZ9szapHi",
  "key17": "4BeD4w9NbZgneFGLKurQqrn28a7n2MoD1D8zdtgc5Go9CwjGd8uHKtFbeJF2ToCGz9BvW4geArhJucZ9WHzfjh4z",
  "key18": "36aehaoWQGvdidGPZqeCxhL2C5Ckk9SheMBt4ng5Aiby6XZ4FosRimrUQnj7jnQQiyAKUtYyf9WvkYWb2wfZxDb1",
  "key19": "3tKdwSmA4NqiFXaHKJbgym5cPonJEUADpBrLBR7Ehjakuy7mHMX9ouqNzrHJT1oaSxhAdgo69CdexBRZf3KnX627",
  "key20": "53RkVt5i7Q7XFEMgtYvUmp9uZBNyxEe7URNFDWt5LXymGTqVFndRVc3ZravaX3g3J53mrgVCdMq56pgxrAwfhu6d",
  "key21": "3Pw1opN61XQruMxMGHo1oGJBJZ3aNwJcyC88n1qNnqDpYHBHLqFwC86gwJymY4xLTbJPxeVuLk6y72fFHdN3MPth",
  "key22": "3tcA1qNtgDYoXRFSwyFgThCtGwhXBeBdsNQWupMugfhyX8fifwwE16bt36RR4gWRekJtrApdneDkBnkykmAeLi8L",
  "key23": "2NxHMa5sRHP7TGvNu4VuCy9gH6RM7yJgRc3Uc2HmkPQpKQ8dv17ppXGoQaqEXs26rwMdGB91aVVML4zVEK1x9tcE",
  "key24": "4xNv7Q1svzib4ggef3UHd5dgEeL7uYB657kMGfNPysCR7SLuqcdkZHtV8ybTDhebHAPn7hELBqEiaoYRABihZGra",
  "key25": "2xqzaMe8EjTQcbrRFTc4Z5uf62ngR1dSoDNpWtEiBNNMjkfayviWS4AvD5Mq9XjYRBH42L3BcZVToA562GtfrLoD",
  "key26": "53ZtWjGo6SLvv8riyF7mLmNcsDq3foXBK4vUyCnAXbbi39fwQo4VYDjCu6EQ91U9aQt9y7RscsctjcUAftRPKRKg",
  "key27": "3mA5GuYC5D5mz9jaRN1A1pTXbQ868ELH3i8xizR1S961Q6KXurUwUX9n3LvaGpNREoHt72UgnBeLRtiL4pzwNuBX",
  "key28": "2AeZ3EGW9Wa6LPKA1jvPq8xx6v9mJWCQa44pYPjGFoAaaDg5AmfyHKoDzjYj9vG56FPDqNYUkHPAjuBfgEoWKorv",
  "key29": "3rm5BUymmdMyq6y4ZLZK3VQxJ87xWRdVu66BZWPPiyroX9VCdMfFfv1UkRPg4s1iqdQA7sLBzCSqgpU9d9wFghLB",
  "key30": "5cuc9sVWfyZigJN3F8EtU91n8moaWou9xmjWS3F8KZAZF6jhSgGmd62YMfRWmnA56PUaFBecdWYwqW7C8NxzTTBp",
  "key31": "2UA5qFLMV44EWhmPyVBzMqXzTPYWJcuAgTKYRShDWgtM5kLV31LT9LoyMeYMGdf4o4BZSuziK8SH6TP3cmce8mHk",
  "key32": "2TEP1CURzMurnRF19mg5Pyd5bxgg8qqSgYgkz1p38e1dZWVD2L6reJmbo1q3fmwsxPgbkcsj4MoUMBCxhBw2wsaE",
  "key33": "8jFKSkYwtJroXozBPJy6YHkXdaGmZQEh8o42HVf1F2dCLzcSuZZTSaBKFBvSSL7viFtxEhZfqrdhPd5R8GQAhfv",
  "key34": "432U9fFVZdjuEjZcMrnk1znets3YwzP9SaFGT7dkbzVRUMNk1LfpAe3iVS85ssCFtNiqQ9FQpFKnDp99LXBrpGxa",
  "key35": "xrcSXzb9ZBVeNS5DUC7Pkg2yMMsMKP1yN1ec3gFhb98hqdbbNMPSC2wxmLokV6FFSzDK6z2U4kztN4zfVvKVbBR",
  "key36": "4MqobVA1G1TP7teeGn8uXTugXa3R1WVEthu8ftAjjCgYvZW7xnvRj7zN5PerarpW4eY7Zb5HanxzaKwtAeFhjQjL",
  "key37": "5FYpqRiYzcEmrSc91FbCZTa66i1NEd9y9c1Gshu7AYd5qAiXi4WUT1yb88vvyuDVWw69gNTpWXvBPe9AphJqCrBz",
  "key38": "35cg6vYiy3Dek2nekDwubSTVYQArJ4L8gE4LW9nKTcKgVFX9EPiZicBbYiZv9qdrwnm4CtWFmpPx6aEBt3TJzCYo",
  "key39": "4gLupoPA9C9krhHjs2NueagYA9Sk3wm6uB9q6exasP5YH4KkJuPuFbbckTfsX7NcNfpaoAz4XZFYWFao89McCKyp",
  "key40": "2u81xVCu3X6Bfc8mTLfgPSUvzx5qqjVATupuSfAGzsfViA24q5J7HcLEoLx6d6UEAcR3RWLd8tsF9w1vqB5PnKeZ",
  "key41": "5QhpWyy9LFQXDGE9RCMvLrEwkiaijp1FXx6w8gpmpVdeyhfekRcJqDRqLkLvnBKJwFsXZ3WzMGTHXiu4TgY6Dkjw",
  "key42": "2ryijum1v8eZERXFFWPVB3WjtbGuw7VtnWbbshs5vX2x5XwKTovZBuekxRLFD4PxYpXCRNV76HFsrtC45wg2RSXh",
  "key43": "3Lb7uGntHw8xXMKqDh3nobHpG6ZvQY3xi4jZ9r3DjXQqmKLUQo6finaji3rxyCWAC7RFJqVYoKWAKLjm6qLbKRtF",
  "key44": "ZrcNPP5YQjaiwFsBypvXrLt8w6V766XkChYuf11bn3w1WTs5D1dbfmA8Pjnb531gSJ4bwbzY3bCjhifqsE3SXTT",
  "key45": "2tTyFXupc6XoxGAc9aakpeztsNapqQXkrpD8HsTPwb9XVAMaMjW9PNBLW92iU5tr67wSFGu6vqTTJeQtWZydccSo"
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
