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
    "33Wtr248qRsCSHucWjdqPLBFszeM4Gz3DeADVhggySZeNPABM963ZZuuZpRo5CEaubMstLWze9StShMCF3LeuvFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RxAuKXgb6CSVBZ1HZW3TTX9YRgLAaoPadNqbfhwzdBR3vzeskw1VWbxRiYzDwgAYkqxYTtBaakWCqnnevh9e8kq",
  "key1": "3fewVger1pr8derf731sVZYZT7gYW1TUmi9pb97FX7F79z4RpqsYXZfdkf7axNn2njw6VPHEGizwMZTmyFURgoXy",
  "key2": "2GadJaQvNNqXvHGGMmr2MgYnaTLZBKUzHyiUAAWgMc3a8wSvDo3QHkMueUe4kw8N17UVBoHx1XNivMhVRDTDayuu",
  "key3": "5YsaSQ6KiUJ9GFHnJi267supJTctg51CtbgahnaZSBsDMLekcSfDgqAaEhwcTKqCpdFrgWbYCrd7dFmiRqMXfee6",
  "key4": "bS5F5ugi1wdicgWV3gEgDz11kpTCk58KpwA7jpP53cJhSaFYpnkuajFcAN8CbAAtvCetmUxKdPYtXCUvVjdYTKF",
  "key5": "5i9EabGLvTDhx4CRtuHWRvR82WUc1snXWDiAcmPwpUL3qHNn8xtMs6mWTDo2xoGAds5vexjLSGD9hXBcEC7ZVYjR",
  "key6": "53rHhVRTsKWB8qrqx3udoAoocw58p2UprvFugApFUx9CdXpkgqUgpTYHAAjvwpPApWqQJjJYtHgUmXbvknY67q4N",
  "key7": "4irhLdS2p1ZcfFgZihDpHgAn8QVSvA9be6ZNkJHeZENEpUzbtQBjBe8ZHT9WzcusSYDg3bjxn28j6FP2R8Ld9vfJ",
  "key8": "2UhkC7AZufVcKTjA7EjbPDJ2yWj8MVJLJNskp7CDnZXi47PXU4rq6wmkAzsRPPxDkkFh8pxrApRPiHA9morrmPrW",
  "key9": "4wK52YRVEGBSUyV2Y67oVCrVirej7jRePqUH89y5BxWqraqLg2kfHgoANP9BW8qpEQND4Xi6vq8y42bYwgQa7qFM",
  "key10": "41ncwbMbEb8Rt2sagEQUBvmFpF2J56axjocu8yJJV78ExqCSMYyVgkGeBHgt3Tpc7WQchWo3vsifsFbfWDG9mRaq",
  "key11": "2h4rCiNowP4GtBkFkKCW4KDJuThA5HFNt5NTEwHEcXgRQ5sfXPdCVaQJ5oHfhoSDNKhoZXA5n6NaSGMGjLossqWe",
  "key12": "5ksAsfxD93m6kQk2r6C9u6dfwFC5kXyN748tQS5o7kefwY3orQg8LGZR66WJH14zoYDCoj93hBpFSUrmpR5EeioS",
  "key13": "5ZTZpC1KT5pyTSwTHPfR1Q1ZoEkHhAdzXYyPXDqUcBQ2nzj37nhMhHhtSJVva5SZXd2F9tARv9qpN4NrTBFJLrLB",
  "key14": "SXFwpYbK6nYcDha8HSUMYswjJgqcgMcJA4PvPg4KKqcitX7mb4e5PxxBttvgpJfX1MpPY1N4YaJ8bQtDdM3Xsnk",
  "key15": "34Wap2Rfc2VCW7CyEMPsJ8no4gVWFwZpv1k7BM1a2LfGYwgdpxbrxWC6azZBP38Mp1RpnLnGMNvVJzFbSdhSwGmV",
  "key16": "64ScWefEt1VuWvLw1R7zqUMNpJ4jV4ykwWs3Rg65SekP1bX2P1wyCHJGh5njcCMqKaYsS1HHpR1MYoyhRqBWtYtC",
  "key17": "37RUSJ98X5EhnaZ4REJASoXywdsoVWacCWFWHod7jgbLDfv5ozPnzFaqACzHHmoghDVFbCt26Gm97wzyRcSwCicK",
  "key18": "5kt4xdp8vVRzoHZKV5t1asp7kYKC8GtMVfaMfxUdnHGW3eh5Je66caTaGUWRFE1GwpL38VfXWWztzyZzk5F6XxQA",
  "key19": "3hxktctFCv2pmxuD5UBCX283YrrzaCLB7NYQKozTHqFztAQeHM2iWubn5WguZmMacFv8V82owJNfoNVK8GzxcTxD",
  "key20": "4H65SEqsZuX8qvCWPCwbo72Ex3bv9NnCopiMzEzHMCTku1kcyahDwGCS4Xc8gznSDmFwwaUp9XAo9jWiFg9ci4ov",
  "key21": "wSXDivDoW8KPjZEjkQL9yfoqeTHLG5pboNwiBhCYtdteMZKhQvPF55CrQ1zPP8fGAFXcX3QG84fP3x9wq9KXVY4",
  "key22": "3c4jPxiVj91k81HwJppnSQBhpM3d8eXQ6csbj8ndPuPZDRyiq3KU6L4Rx1mppjCffgHzrmNKihFPRngDRm2kh2SC",
  "key23": "2fpvw39CCM1DYK1bT1uNMJBUcQfzHyBmVNBhW47YHJGMoChiSBrUE4iyzBSrM7KuEpmbihG9EzWt9HKYRb4hakR5",
  "key24": "3vqv8EPhTYkd7Pjm5xh5yBsD1TquS574d645HjBX5DjAkYJud2o1nMKi2Sw7RkAWu9E44dgJVY5crLZyetBxAUB9",
  "key25": "2CRtHLU9zxUQGSjJU5LcNQQJocRAgg85ocazxszb7hoVztKByqcemdGJ3VTdCGKP896oVoKe9Tg1GdXRxMcJPD6M",
  "key26": "3wPy3XpZbKyhng9WK6XuwREXB8JXEswSYASsWCBG8CtCut4uURyr7rQ4xRMTDFqG7EY3CQTQ17kwbXmM6KY9Msxu",
  "key27": "5w1bUJ3VKU31Fyw9bp6RZPccnzdsydPKeaheXqFzxF17aHsk2aXyPWuP7EBeCnSsgqRbnjj5Ea162Tx1deGwnAAL",
  "key28": "4r9DKy4CXnBoghkKAPeEqMdkcLFdzEbsrqn6fLkuHLA4hqPLcqPkueh8k1rNBEd87KeHbZ9q5Tj856LTPUQPRtgP",
  "key29": "KNiTH4bmHEjCKTfFo4KUrPJSbqKqJJt7Y2EXYzqngGxHuZmhfScvdxgLtSyWbh6dnWQJvzMnJC7oR9yJ4V4zjuH",
  "key30": "4hgwJ4Wsk1jk5M4nXyJhfRcHMr4wvUdjsini3XP3oADH55oT5wPW1HaDtJv6NrgpsRzhCxhSc9EPweyFKEc7tCMP",
  "key31": "2PhDgVLmjF5EG83qJd5h8ftQK4RQYzh6VZ2A1Mm4DuHu2jcRCnEb2iK5NmidDT5aGus4pWufTLaS8jwdzUED8MZZ",
  "key32": "4jpuVpHRWWt1XgD89kGqUPdXAarDRPqvHjW3ZefLuVJ7KWQwR8o8RKD3nVvU8jXrWU2G8v9BxLNVvrC7WicYYAoG",
  "key33": "GQddZiTaqRRUJb2Z2uHorMNmPBc1i2PWpWTk445EePm8WRVaK2gWycn2936oE6aL6PV9WLB1FC4yS9WAQwhuqpu",
  "key34": "LjG5Sd7kYksVL9XLEfsviKbDmJkALxTe9UKZjo9teQXTuREYqgSFXamWogSmjHcgyQuP1LnnnxKYbKYefAuoPkb",
  "key35": "DfeEmf9Er3MiLtNWf6NFnrRyL531JpNQHYCxnqUDQTreFrVFM7TFPVCnFKp6Pb7iY8yPHKwCEfC3nF4gMcSWEwf",
  "key36": "hmVTQeVZMF4YPSfNW9qTP4gwFWXY8hRaNuaXN5tnSMPKBCBYmadcq48P2SLSSCWXMhsKfCiM9icspSNDF7eaZa5",
  "key37": "4kmspvuyXsrJpQuj4cozQdJUBbEiVqkZJqsyie13Bjme5j5RGEQQdav6AmqZUPY4t4sZ74zF2Kz8xj1VJ48cuswE",
  "key38": "43TtkGRokkdYWxNPgGwdeeqDjNtqxgxrrvEMNvAseP1AYJzmvQjeEvciJP9zNy148uH6HANS2s9suGPzw2KwacSB",
  "key39": "H1TR7ZCvSVoa4QQMbd9VV7Zq873AEXW96YCEDXvFpDttdirkJRziT4KJMKzrYE9vc2vHv9fkvuqxKdpbZWpeLAW",
  "key40": "2iZe9jT9akcgrn9jbACvPw4RNFu8Tacu1ay3whSjmz4HFtR9A7CcU2EGBRm1Ea1isNLXJ6KnLnUPcAUEJmiEWHc2",
  "key41": "oehVFcmyAn6RXyk5yDsm3XkyibZ454YEqwmyRyM4x8t7hsWMLe1gVa6pJxvEXU5yW7k6ZEqrtGUVjfYC3BHR7nQ",
  "key42": "2JH6bpYqkvBgioGfrmfFWCMs55bFpiPucZYXcES2xuDdbLicaqccWcKGAg4cAGCqzRLEvsDEqBm4CFWHjvHFaZP1",
  "key43": "69Cvj1PyBGjyAdqcqzDrp8RDYnuBp2jR8AFja9CRwM3S1dgtbH5tWHjatGrGPDR73FTzUb6gxHG5BjqvrTB2LEg",
  "key44": "3yjNJYTq3yfjxFS6uDj6vFCyX7SWopj4YoYeS7w4sKKhYgc1qRWTJEcFq3g4KHkHrdzjLtR2Ph9DxDEuNqsbhyNF",
  "key45": "3AuM2qKnM2t1fzx5o8tZxqdTK4Jkg1TLSt76qza4ZuF2P6Dhic5dF5yTpGw5fs8VrWiRVfL7iMqDbxiMrZvA3nBK"
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
