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
    "zsBQquMu4KW2SLorz8SHZt3FchmEma5Rkdpn8ado3vkA4PWLwrCzmygbZLr69WvADbQ8tbQenSSt7jgkhDNvREE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fHpaptGJmi2VXBq4pxaZPPgYxPKdpXxVFbbbA8zz4U5z1ek52kYyAsHUVkvHvMzY7Wd5VbjRHQisvZ852vcLfU9",
  "key1": "cFYSc14PQcXhPXvo2u454CzRhqrjACuV98C23xWtutAmRJjjZKW1QFfVwRuxNY86DMhzxD2tufDFZt86761qkVX",
  "key2": "3utkM535XD143rnRCWC8itnZWVTrBtid82XQjeZRHmQNJjt8tcifXLtL1e4ngqMNv7YMCN2jtUfvywnbCCCSLN5z",
  "key3": "5YtMWfpD3BpePBd4nEqiZmMaNpnDNUx6ZNvNiLN68sGX3HovrkNhGiZ1vfrzQQnSP3MutCscTrhZywydcryeEuo3",
  "key4": "3yu8RufeLxjUGUeYtKSMtok4wRFVZ5gvabn2xEvD6QD8ba1mHAoafYsMakKensrmbpxwsvigLWZ7DtN6fKR5Cwma",
  "key5": "iUTT53M5hTXRvdaPSteBzSpdkVJbhjVECDz6w3KqPzEtFU9veCZxGevuBToWKdPYNHDkoM2D2Fve1dFr33h8ZE1",
  "key6": "5Vz1WnPGj1cEqwreHcZ4336dVH6hVBMmR1RysGVAk6aW8sadPEzTDpGFSN2ojc3RRyT2LfeQpAdUPaaJuAbpEogs",
  "key7": "3huVEyykFWVR5wJ6jci1reFKEDCjS6H1NbhNKMGffrsxdqf9stMExo5nBtqt8z6o5EtaVSsiM9TTnvtrmd7Bkhkb",
  "key8": "48EfUaFVKXqzkDSky2V9miUDHqGDb36Asci6EjJKzcw8VrKvy1MfYunviNteYAwovdi1Ptg7pqsrrByocKoFWg1t",
  "key9": "2c5A9aEfnHK3JhdAxZfZ3D4gjsiS1hqwTh3rRx8tpgoyviczowwWn7h7TXZZ85pf7AEc1rVqTMDgU3AiUBqRzmwE",
  "key10": "473iVWyZCCeqFZYDhEgwPZEZCeXvGyjawVAQmYsv1TQRGhNqAhPU2jGuPp3nMFAX25g66y8n8FQ4T8XjpbxfFgpX",
  "key11": "47chvNnmBuDVXfY8gsRTjkNBLcNjhTtG6es5HhqUcD6ysLPaHkE2RJN4kcHE3JDbUho5kimhZtBn5wAf2VZ93edZ",
  "key12": "59dPzpWM98KFgseao3cESKaEGRiLV7rL1zXKx5NsM8R72pcM9JBQj1BDUMFE8L6pJkySj52Saj88MYjPf4N6pFta",
  "key13": "45nEc5y3nBbMnrAQyhimYybn7VVeXYcQt6rVH4MjHGDmepR3xTiHwMpBcSGhNP7wFD5MMohh6xeKvPVwBuHbJRBu",
  "key14": "3qNJsLC1XmwHqt8vjELXKtMAZoY62skELCpKajQFBpcWFaLqEggEfB7Qh5fZoPSycPsMnWnAmb6Ps3P5iGBgDmL4",
  "key15": "4ZWPQDVk1L99D76mojz1TBux6mWXU2SbK2B2jX7PGmYkXxP2f7kAzzqDo6igBLU2HUp5rpYeSop4KTTeq3JUc89X",
  "key16": "3LKJFAk5qdFCsLD153MzwXraKfRozywoP4NzR6MuSTtxwGAAfrmPVAY5dwQ1yEqhdB2Manwfvh5ZuaxMmhg4BMWf",
  "key17": "4kVzwTDCzzPEKTmAeY2Je4qTa43io57yxhpcfZq1B2XhmJUvQjC41p81qzRQRZAKYaTZEqYNXdzNVVwq8oQTZLh6",
  "key18": "46qDZDa3VeMhmPPkdZ6RGhJdGMy3DhGQidYu1wZnsHX9KRQC5qweyThNnTsoaeMPJiBkTavYxWkZe253eYZmiURX",
  "key19": "2RqfEKWgEmjEMurdQFDmHcLvpTAfdZeS8JLjcCjFRL3ZCw1VdHDvWR8PRvAU8ciTHGXCudeEw3Epo9pp2ZxncFj6",
  "key20": "4YzMLKF7xqt96xU12EHjya4wmDcjMhCwaqsvf9TGQinf3mTkxgKkohErveY1XZzLo5M1qm2y7VyX1ZytqrtTcxd4",
  "key21": "4xUxnutLKGtyKR6q4ja7SiwrNpSME4YaUvDGGAXsudtk6pFNpjSEbLsyc3TQDRD4YfZivL61KuBqVfM35C7A4Wj8",
  "key22": "2CM9GGiu2F79j67jGWD4sqzCPggREWL7a6SMpsEbvjcvbZWLMpL8YuJ33KmHxfEBMzk1w7fvRxV3dSiT4XExokbS",
  "key23": "464QvVDXg5VoNKXi9Xup6RnDsaBDLs4Zy42n8VPMiG29HxfeF2sMqzMcdF7sfSAYBE4YjYk1JsjKJd7YqgDoeXiQ",
  "key24": "48FcyNfz6z97bVgSYvHkbMEV8kun56nvsUs8E7exJh59gp5GE8Dh9hM1KiZ7GofbjxW2ibCtQcuc7CxxKmVJ5pA3",
  "key25": "3vzWQRyZYwSJV8Z8188UM8rygJD1VX9Sm163xMKREhDbfJug2CFD8ozzKFkMvGRrn6hrqEoYorGVABYVbiJSS6uV",
  "key26": "MqCDKAw2n2fRTMMHkbW4qPyRRGbowUYw5q5RHqjWbSPTahw6VvN7kLQSz4pcQNiepbADfL7MW187Rwb9qr5H1bt",
  "key27": "3mMrvRHbpLS9cxqpQWGeRy58sNEqKpc3Ky6A3L7YZTBP3fWg85ZDsJda2XmFkqsxLMbUKxGL5QBp8jRSfTvLRLuo",
  "key28": "4dZwcXMUDu4o98ykgnyHUFukSKMd7UiVYYi9P5U5FHtR5XoXAf8LKQswaFj1RimHbgFXjsUb9rrZa3pMqHLD7Gmd",
  "key29": "4yKPBWpGu8VMJAhKoiij6Y7PLdJjCviBVw5D9N7ES3gStdTBA2yvPRiUUhN2Azn9v9e11vzmfz5B79WQ3xWXfKkQ",
  "key30": "R9vFyse4DdMbNWUABniKTfFqqeQXWfdorrNoPD1HoyeATcXoU8c94YrudjTccV1tSQ7vgiwoZjhS8sF6azSv81D",
  "key31": "4VQ64ZrD2uQY725e7pFzyyFM5mMXTjzMCy1TMfgVvM6BDYok1WBSLNEaXTS8kJRe7nofmP9UHg1Hf4xSaPpf2zS9",
  "key32": "54KDsDgnCAZ1xjeSMfogCK5LL3e5Ee1Ve1aTzsPeFLyrNFmvFjygo34vtdGujQ68VxnJq9eWXosaPGQH7vURZF5b",
  "key33": "4oKEhAY1zo7PzEQXW8ysdG26zfKgh6SaMY4SNuea3AVqqEHNmHubbutv4ofck21sBffnaRjB7peRG2uLDMw5cAGC",
  "key34": "5SSC167HQy48bzUrimTa6R9TbY5Lf88pTUkNGriaksWUVcHW3pSpJCsnNQM13GabVsYnhN1fZHromsZr8m2yfPeU",
  "key35": "3Arem1qAgKeaYJ6soRPFbfsc5kNVVAthfMriVMXvGZaRAab7YYmQ2FonzqaTfMGkUkY5M8AiXFKsX8qSwYmQ3NET",
  "key36": "3TEbxh6pRDeg7hxwBxge98sek1ndpYLGTcedhntdNwVxjwnR38y6jzGwuZdyiKFd7wWgU3hX5V3ToSjSD1vnft4w",
  "key37": "65SZE9KpGMC1R9qHf2gdDNMMLsoc7hA51wKTxJE4y6S6NLUiZZwdVnorrCWLA71KjWs4RMedaYm8a4DZagXtYvQH",
  "key38": "4az5FKwtk9f1CnMJwP3xqTBoBqgVvAFcF2R1Z5m6uPfc3U6TqSPKgjNcnciziVSSWAVtKvbAmMDEym1s2V3F7D6X",
  "key39": "5XzBxh8jbcFsA9Qngfnnh3XJ7joTeDsrvSrsAtr1eWfFRVxbtY3UksZN7czwpfJkoYv2FNBxTsSt3RX8E73XMUB",
  "key40": "aXRtmu66yWR3TkCjFJouY9GKQrgzzm61kUHHJAq1WSWNEc7WLiXMjnChk2AS5PbRUNxSLyNNznkwoX9hHAo1wTT",
  "key41": "59jzk7MDxabDj2mnjnk1WwvoR15gCsKCXngDUrKppjrPSu4YsZQW2toHtPBHowxemWh2ZLNATskpP5cTKQxAiKUS",
  "key42": "4yVN6RkSxatetbTCUhTyrCG3z6Rw8EHxozDgxfe4PztYAWGfcDab3ymzDqak68DxbxfKv8XcXRcC3c4uGvBWSWS5"
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
