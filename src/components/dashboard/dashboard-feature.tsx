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
    "NbsyKDVMATmBM2H5E2Pdq6W5FozAMgFxvYtTEEYchbwbhoCdRemXKqraNwyUEzUR8UBxxUhWdE6dAFNWpxTuiNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SmQATNPFih7czWDQENxuXJTJNmMbXfCBQ88BvMuPQ55sTgLMNg8wmbz1yFU8girftrfdFyBtVseW9NRjWVHhqVP",
  "key1": "iLtbgSd5SEZc7acHdjzHj9xFoSDq2MCoChfY6Zfq839cuXqT7uuFkUFUfjps1Z5SzRobsDYuaYksNC7Z7Whidw1",
  "key2": "51Raz8DXoAHeQPNyS2pxDZCWzRoDKibUxVUNxE7Vb6Pb3XjedjyvztLZ8DdbCNz3rQtWX9UPLoBamtbvSGaayAqB",
  "key3": "2pnnmjEdvN8BgX2n1qqoEfqmYD7LoSo9b438o8o1sfUUH8sqAMmwRyxcijgUCwmKSCEn3P2MHubuDUzSnPy2AwGZ",
  "key4": "291UerGze8987hCd9s2EtX2aKf1N1ehNcjcwyHvhEnxBswiN7jXYgzPZk4yhyu35CD98cVphe7Vfy5rFnyu3w1Hd",
  "key5": "2hTr7fPLY5cw8pawx3GNgAaEd6c68GkhGr8cFQ9224AJPf84AEhPfuh4BqW2Jbsoq7aLP4xdideWZ1TP5E2Xn1hf",
  "key6": "42hnqqRtFAuJ4QAz7cXjhE5yU6ukMw6QGmnLCWJwXtPVWqEBNwFGgcoUJmnvNjRdvefrqT9yVQuxGVLYUd1f2PWw",
  "key7": "2pvPHvmiSAD9UY3M2N4YmeGUXoRRLsdJGQiv7qbkQVdHBEfuhZon5HBQwiDRubE97bZza6XcjYNcFzMFVpCdhkGC",
  "key8": "hoQr5rpZgPJfkzCsj8FMX4DrFa5dX1Qk3A3xAffecnLg2xFgYuBvgpYxGKpEn2sGMsmHuk9277kcvzCkdpndXSh",
  "key9": "TChHhfcJ6K74V7qXDjHEiBVRTJUdqQ7rmMELcvpnBTZ5vmDphGbQqDCAq34FudD8rCuPhToVvNa5Z9MPYaRY4Cj",
  "key10": "2rBJ1ZjAGbeXVYbsitDhowpri6gKfQdHy7tbzbhScYxZHxAmy1E5wSLYJoscZCAs8i9eYMets6dbagWHYsx2WUoF",
  "key11": "2u7U76BxdztUtSKHsCE9ZqDhgsYPtrX4XaMg3HQrPyfv7q594xF9L2ZvTe7ygQ1BFjxhD3mTc8NsFppjnzq7JwL",
  "key12": "3yiJb8R5WSg8iS3coY64qoe3PwY4Xs6GXEyWx9QSDYxiBjvG3FMHAcTJsrCX3SLSb7mQPJc7SPGpwQQTk8ncCs65",
  "key13": "2X3jPsq9R34nz7kmBodfeJE7jEATRFLEmuEYNe3axzcbcCSQtYyuoCTDpkpNLocv7VizuRdUVJSSXJm7zFgxVTye",
  "key14": "65kif1U1oPN8fJcP7MGJhsj7p8JSQtmyekGphrexJpgGWKRfwfmsim9PA2fjDSzLp2J6HbDyP2vsq1tAtDy5AmKF",
  "key15": "5dS1nPMVgdP3oyyDvtKe4AK91iJDg79637frw3aDAJJgvWGWNzuX1X628Edjoe81nGQ8UaFKn85wcaqeXzzDdYyr",
  "key16": "5H2fVBm7A5nTDbjN9XKFwafUNvzzXkSghPFgbDynGi62jhZDrpNMqQ4x3bnsDrC2pJnCTEpDBD9FgZW42iSowLpy",
  "key17": "4NB6AZhw9Lqys2F2o7iUBzveNBtyZa1NA2oi7vKVLFKZVz4HANsEtnz2rLQcxXk4TvqBSyBs9G89qmHEzqST3psN",
  "key18": "64LFvjTneKTWZeRXrTpmaxdgvrUU5dbWr3a72ECUXchdmEP2uHdkKxADyMjYphPDhdBR2vSHXTyc44Vosvd2AuW1",
  "key19": "2chtf6Ugojs7gjv1t2tV4gV8iV6k1LdguDVEpPug626oeT8Me62aSgchgBJfYHi1S9rLRq2PFy22bPq4xYX8N1zS",
  "key20": "2RBvaNEwstzhoDmcLBofou86ryHgwPJapwwEnomAFUCDpmXNiVfizaNxrFCASTmzanBkR9QeCHv1hs3Uvchy6mPM",
  "key21": "2kpoJmeAxS2suZnAE2TwdM8AHGdUd6ztmbksHanoTHtmRAwKc1SGSZKdJgLpEUJVnyqy3CUD5KgqfLyHLi4LnNg6",
  "key22": "t2jF3sXhp5xYW1WxSWHY9fRLfrmu1g9XyhVW4pduxSZgRb6BnbW8VVrkGpLJqe5NFGtpiZW4C3muLE6ZVUP6oVF",
  "key23": "wK1UCF2MqFD4XfYGwXvLeSx2opdMppg78ifyZxE7kwBHzRxT9RMVez8rQZNetMkTeTMKkhEyjC35MwLna3nAhqZ",
  "key24": "62HmbLKVZYKqAL998UM5oT1nsJ7RPqF1tFpqY6NV4Y5BKcvmvMcaDbn3kPmW86WotgkYexCbDqfoEFzatC31kMDr",
  "key25": "3mx1Udwb8575Dvb65PHmhC9iBprWr9JNUzHvJS6PQdHuWFhu4wKtRNuDcUTaLsy7uvdGCZpzGsmT9KCCUU5qxXya",
  "key26": "2mL5LFAdKEW8G2GmkUuRhqJbT42Jq9UMxpM5d4g8xq6nvSgXU4eM1qTNRxPcjhksni9s6z32yhYt9ZUBk9Cc7Ubt",
  "key27": "31j7appiYeaaKDBXtyHn1HR9fYfWgHyWUmAk1MuZQSq1PdLM1VSyUVw1NBd7PVFidQnZJofDKNpRVHAq1NFNabAs",
  "key28": "5TymKwbqKuDyqee6LMnWf2yix5v4infVygcbEChdbkefp9k13ZhF8eqRosrbvqH3KaVShEEL6fnNhYx9guJK6bVi",
  "key29": "n1sJ6vBLZgheUosofX2vaEoC9cBDZNp3wNvAEWv3peuL5ZMkXhtCbNSsrP67aP2kpqEnGtShDFn2j6ZVzt6GN4x",
  "key30": "1UqGNZgbjEwcM1xvC7g3SxsPe7XTFnSbrcjdfjciZk8Fi1UWHqsb6CU7czA3uMm1JSmijTbRRd656AfRK6kbh5U",
  "key31": "2qcQ1t6h3JuJWJT3xWyBL1CmyGruGSoiGPkwgey7eY5bZChmKV5EfS1Fe5LFDaPe7435dWnf3NPV5KyMNvenCj5J",
  "key32": "52Fi56R9EUfvmjvyJ5ZUWUdSJCoALszxUURsJgskTfoLbrzVaEyo89LTgF7b5rgTYcgEQAA4majij8rxgNbkorKD",
  "key33": "53KGRjiTvCfYDt3gXigPvpgiToEwsUCaTt33T7bvkSLngDMERN5iUa9aiixxhp1eZNoWFCFoVaDbqpUNGgFTBAgT",
  "key34": "y9VSafzjrxM2eKPCAXBcs8mxA1LwY5vqT3w7LiuKb69tjs2Vw6rvvSAqJRrNi8641kUmDc8iddcd4UyQgGYegwD",
  "key35": "3VnyukFudgEGZVTYQNMHGdUTcySDZtccmhcthxwTASdaVu6wHQFNgoPMaMCL9EX974Wz2rDdLNtYYNxyPtgtRAWL",
  "key36": "47RsstvsGgspekR56zvZxaHAGwe5gdaYy8UwFeYsqjFg6tR8iiGaMUxAnxDBCEPxUByqcFcQW6z11tNACzhox21H",
  "key37": "4MF8FHSBTVvqm91AYsp8zQVq7DC1Ju5EefxyTjMCzXsHp6XFPkZv3syHnpjJ8WRvXBQmnYSongszJMcLVzQ3WUUg",
  "key38": "2yPP1sunJW1uWgYMRY1yznRVYDE5W7Dz79oeJ1L8KKwj3xxc6txLTqYeMAc8AkTtv8XeQ3fkmWCLTUnDADXpWRwc",
  "key39": "2XzioA5uUwoCk2ENU1u1q3gk1yuM5YvRhAqrp3H36hmmGNYeokMuTP9TMaTV6PXFPjY9ynkb2pKkx5CaocMB49WM",
  "key40": "4s8mXNMnMHmAWan927bHkkkHMd2tD97nT88XrhoFCnLJ9iNSjDo77YkpjnZrvQYzsLkK9vm5Qa8DXEU1zmJGJjC6",
  "key41": "51MbAu8Bgo3Uzb3d6RC55Vxy7NuwrJCHX98cUiCEwTToxnEvPA1RVS8umhUPgGcqU66hTpYCUzjEJLViaWsByp9U",
  "key42": "4UrvEuKYerq7KYpWEYNmUg72JubjrmhcfAxbna4TrtiWw54C8fmKYndev5JMvTQ1XfkQfPoBgqoHWfC7WDf6tjp6",
  "key43": "4FLWfhXrZ5E4n4V5igFBWtJCRQkgBoz8Xwy2K4Ccfacq6vAJaNomnLuabb6HK9ci1fyFg8RL6X2sXU9iE7ozV6Gj"
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
