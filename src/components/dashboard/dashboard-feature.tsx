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
    "35m69fctUtYe2YAXp1bRLp69TezTnzj9cPwpycrf1prwyB8v6aqjJF9QxaXoiamruAQUfDzoznzSFrSp8TrghY2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XQ9kyNcdKZZpp9SAdjBWwrhd2w9UZD5Tu14kAkGxrbtD8VfS6e3SvCUHvLFLPPYVWUsHc2Kpj8KTfeTC1wEgfdy",
  "key1": "4ch7Rbmj7Ffk1juw3BnZxaXjGm88sdxvKQnCXJ9ECjUzTeM84pDDy5UDwi8f9zb73LeyMaJPpMyfPJdpb9CaA1Jt",
  "key2": "4zt7Jayy9RH5euYu5oiZpQgaZgH2ErCAmpGtKzj8mVECR8ZFD1nCG5fqmHG7bT4iEYnQWHEwiKjdYAQAaAxN9CHW",
  "key3": "3zcJVWHpkNdGBcYASWTWgZN4rfP7amu17Pd3tyybdwhBNCn3dSdUYLctcj6gFatic9p7AUdAETwkBVq92Ew1r47j",
  "key4": "2nGrVgixsTDJZyrmBrQApjDB678VW9dTE5veNRheBjACZdyTFLJGsXxN4jVknLwDNJuw7rv2dV6qP2b7NWrkpY8w",
  "key5": "9iRoTVjqAfHccjffzRoYWtn22oZyof8XS697AcHbaPpKP8S7wa3FAmntt7kUDub6Tp6VhFhLUGsvyLajpVJwXL2",
  "key6": "5qQ11PcHRLkxFZvoMUgCVCGofGvUhiTXamo6dPCkp8xYYBRFxobsieFCRJJa2TKjUTWpDvaC52Kf22wM2yXkVg3J",
  "key7": "2gWzbjQWPVLggQGedQdov36ZJZUTCXR1yYuGHjLLa6tQSemcPrFG44SqQg2QpBjSdtBXNYxonfoeYDQ9qdqTVp5B",
  "key8": "BiBcWfcG1xZtAWaKn4VRvKSnM1Wr3vG3ExaAFgmY7gvwgQf33GEhsg3DuEajazFKopREPLWDVPdcQYvVYwkJLj1",
  "key9": "3k6rxAkBhB9pLMpHZ8XPheNrSfwvbiyBRKoL93Eqb7CdsynvG33waLVYF8ibZjxfrvFKpHP6EYSb9ipy1bHJp8gP",
  "key10": "2iWnwgrAGG4mmgUTWYAsTyHVQr6GDJXsEmRhByEsmHHvw773iQbSZRJucTibSFr54EVEf8QZhRen6qBGhZEFZgs7",
  "key11": "xkj7KKd3fG1F8mLdwNpuDmnT3BrdCiFK3t7X9f4pGvB97NepXvgHe7znvN9pNSZrPz4r2yRRgwdMGGq9oURgwVX",
  "key12": "5ctVJTM3QdDGBb2pFwknNw6roHsWieC1CS5xdCHqrenTMSsEW9W6q1Ddrnmm6hh1VCnPoabB2So9q1vt1uMeRmr2",
  "key13": "fJ14y8dRXkeFtFx6746BE6acyhQZMARLTbSKjw4cMMkjtp5TNzTt9WoVJsnxifb6pR38XvY2vvYZkWsccAThw6A",
  "key14": "5hfa95qTE6pwQPf2EjTWke6Twyym2gazTjaXgiVc784PzsU8ycv7TkN4H8uJrLFQomBJyZHDXdMyV9mwtN32rUN3",
  "key15": "4mobJUqwcYhgpuEToYvSHHvVbKJhCacpBi4btyyxZm6kvCK3qYfqBvqDWSGkXnyq166LBme8EWR7AYYXS4ZdivEk",
  "key16": "3n1tpbuGqEZarLVGjAbeAZfQDoawbFT24R8FDGM2XE9bNEvzm1hxaR1H6SQGkAyYVXzMocoFvm5vLvtmhs6DcZ9E",
  "key17": "3iRrXkKKWzK9uraqbR5BrZe1wGQ9WcrsbSQ54EhEwgGsm1kF6caMuVRKn7NszZrBiDxYYpA8N3SLn6c9X7NhEjhv",
  "key18": "4sEd2pchxsoLNyMT2nywZsVVMMzWZsGJsVQ7WUABbq6xdNNEqSUQzGWepbGPAXCp9BQj5WEMN6Ejq1Ci5F4GmVJB",
  "key19": "3o51ujrkXsE2AESwCeDMf1gAYC5955UPJL8wGk9wrrf6zm5x2tHKLDYkYQSSLr1m25VdhJ75bKtmiR62HNTSN5yt",
  "key20": "2sQij6BDbfRUW1vwRZqmqE2zMrMnFSSmXzVFS15FWtdkWbLGGH8K5X1kMEupCWak3xmZ26Y18WjhKZzXqnTLWRud",
  "key21": "45Dy7cjMeirotDaU6V3wZN2ZivuC6wUsBr8KgXmvZbdN6jiUjJe4GewGp6anB4sXZrxG6ghUyQYdgJNhJKaaDUC1",
  "key22": "64CKFS5rYcEShPyZ8b3hcQUR9dRaSTGzTTMwe2efb9jKARRHhNn1w5wuX3EBhdbE5D78LSApsZtYex4mtuP8pfxW",
  "key23": "41Ltd4Rm95xVuwh2QYQ5mCTJfzXRbUthzUrZZmtEu7NqNmBftBVQthKtkYthxtn8cRCxfGimvg1xBftjZ2498XyA",
  "key24": "xqAa7gPNBxzABuVYS2bfhajq22oDm2jRRzWqxwU45mGDGxyKQQfu8MsNFx9jd95aCat27re9VDS7edX4o3AcjXt",
  "key25": "5WMACmsDeUCLbxjYjpa5k3jbvk77aL8M83bvcRsWcCYPpDtSHTwGsDZmktFVvEhmdWV5TuH4P6rcCKHy1xQA4ZH",
  "key26": "2qQqKSknhie4G2xRrV3oerym8aCRX77PELwLGvbwtnCWc5UwdyYG54L6NxtQwUwePph4gvZ2QnzHFoL7mSr5YEdK",
  "key27": "4tQ7uKZLG3t2ZG4dMCXRGymVQn37KxZK3XHQdGmuFHFVTFf5rW3oWxgeoerXfGAYJji2h4RQEt7i9zRGx4p9Wj8g",
  "key28": "4otT7jradJjjY41qpLgSy9E9222mKptDKBKeiZZVrDAwvGFefL8Ra6R2hovicu4fF1pvGKm8SPhcrSUP6TmbtYe5",
  "key29": "5Aq4cZ4xdbzu45zg4A4PJ3U1Gs6y4RR2RK9K5saEo9KQfHWxSueLAgigmShD3z4TyZSTPsE1sQspV5QX846hZ8z2",
  "key30": "5JFcUqhQuZRJcQAruNAf4noVA182npzSLiz2abQrDxWUXYou8uG2YvJJ5L3dYNg8j1vznuPs7twFVzcFNwxghZwZ",
  "key31": "5RV73JhLC1NpxoNsLjYmmznkSyJVRgWH2oRmEP6u5LmgYXqTxgbU4mHxU6mxtfPkSkHn74TssE1JF5WnfQKYXDv9",
  "key32": "2mijzBznfAoCmvoa1numUXAVYsKRwEiE2S79sf6zPuf78Yc2T2BeoNeEQi5HcyV3DxMDgBmuG5WMgoVGGwN9s7vx",
  "key33": "5Ec6PFW1nogADaxsxefc4TRCv6KX5iq8sjPeJSGnTYMLYuq9zFV5HQBuz2ccEUGegUrZa9YG3yFQfe6rM5SsZtMM",
  "key34": "3wtMdkKgsxJ4uUGZ5hAqAiSEt3QxxdpwhMQQSHJW6ygPLw3JSEwRfDqgqTLc5FdtfKQfUqRALTS2pEQfSxTBgCM9",
  "key35": "3rcLx12KQKz3feUWHzhcJR9CUk7tK92r3uzbX2fHEgBAGroBheAn79VGm63eABFvyuj3A62s43TehH7rv6kiKAWn",
  "key36": "5qVGVU2w75xkLBhMQ2VXDVumiKDW61LCv7qf3f3HfHcThQAE9pAVNWroR4znkEuZ9mXA8CR54a27TrbCv9UBqyN4",
  "key37": "Yx4VWS6848ezuHAJ2zgP5yqtKLoSvcQs4YG2mpWXDeGhQJcBTaugVZCpbwGJezpTpRww1PNRdtV8TKaedydA64p",
  "key38": "4q7JhhAz6ZUvkQgnguFP4qbwGzkFzdnXXgkpc6QvBH1oSJWNqHH2eZxEiWmSphyK9hCk3JvYdBfCzJ3HzT83tcg8",
  "key39": "3o9TTZtsa1TCPgpcinL4Us8Pgy1mM7qGcLK4Jfj45V5sjtUrsPzamkLChZ2CteJqLZ61g9ANjiFgfuLW4w3SjsdW",
  "key40": "2VzgQjHeimREZZJFJWj7zzownnL6r3DR8jqBt42e8GERLTuAPnwLeaByL3yM4iwqetYNBpK5ZnJsHEQgY4XjRP2a",
  "key41": "4JcnRJQj77NsdQDHLmJ1vBtUw1Nj2CifS18zvFjqn9j6Y6mGm1J2Fb6aNUGA42LcxFkzhcjPiZztzMmxKPQHhkr1",
  "key42": "2c3ahZevxrid3hobF7LUVj5Gr1f3Kwyjfds4UjgtU7Hs7gDfEth54Dn1i4vfKgPLJsaZzrcgZs1q3kA7x6xQMKo9",
  "key43": "5WSVvyqRqxLqvf1Hz2zC1Ju19tFnoP1BuoUHdQgbHtSDEBef3B4P7mtUJYLzy8UsJ5fnZTKkiFWh7fW4QcN7DTkC",
  "key44": "ZFaZBvZqBGjnon4gKv1v7mfBe2jxiXmJ2GRaB9q6WpsbwPrcvYybnKxLw9H3d9vCmA2Kn6N9WSZTorFpYcXQJWG",
  "key45": "4JvDYEbv8KQtbLviTb4qS9oULYubSXgs6vZEfbc9PLdtW24L3DW1ykxdQr6NKP9XJjeY2bZnATCdBuGaStrYURzq",
  "key46": "3SoRqNTuiM3r1VY9HrFZ9AN1P1khtDSLZuiEcG4zuka9Wz7Py1F86ckjXidhTnhWsXgv6YQWfcz9ueL1Mj56Uxs8",
  "key47": "5YTpZwfnJ7Rr2wtxKxTg3719pqiQg3NSE38yPqUwt8HPMQ1i6wTHtMs5mXesmUyV9TTQtyQW4xnHCstyM6DT2rDp"
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
