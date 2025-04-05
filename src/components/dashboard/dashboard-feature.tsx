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
    "45Zf2jQpBx8AvzzEb89vTQhw2qiagVK125z5CQnLP79KKVNsWEtVBZhUAd5Xv4N6qkYEhF7VdFRG3QH4AxKTqDWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E4YQ9gNuytRn9UyiFnpEa6mZ16XGG5FHVm1vMzq9pEDHP2opaikttKiPP8JwHGdafKW28cKEeMskBcUX7yXPGr",
  "key1": "2TYKLJetAsHXBsHkPTtJAPQ9BppKLhnrAGVQazVRi3o6arbi3FoZkwc1zzRLSZCU62WBaUsMxCHKmf1eYoAvj8CK",
  "key2": "4NasGuq7baHjMdordV7v1qonHXTARMUhBAt87B5mEDSgWJPR5RZSr9guFrJjLkmWfRzGvJBoaEZNyoJWeTWBZVBH",
  "key3": "4X3Ecx77HyLViUs6K2XZfgV9frrBHEh3ALSMLzzQ4jyLbvURt6YJ7wntedzngzKAkT3EtWuVnKRa5N8yN1Tn3eK4",
  "key4": "3ozdGr53kdiDWXjpEjRzB7joGhbofsQqUAbLiS6k5TFmGQZ4CbfysKjexyF1DcRYevxCwJLdTgQdMZFZ4ErFGpPo",
  "key5": "4wM3rkE7ubQPwPzPhWL3M6y6CqNMbTmenapu5oRP5QfgyVipzsPjc9yFbSJPrvr6RGGqDMgczhz7hj1m8wVYDFZA",
  "key6": "3Kyi5jFdhAuw8nEbDoNP9cmkEgakdFihbHjigjqvUcvwffNvukCSmd6s6FF47sxQ8ZWkwZD1vx7cczuKSjw5ed9B",
  "key7": "312hW3YTnUV98k6ZWckuegS9SyBmEjobs1CAmB8cb6pAkTcnRRYmkJw4sPnXTRrYs4XSGXYNs5A6fAhunn7WSytd",
  "key8": "2uDM8QTPxrP7McumFu1CZ3W3nQMK3ECAXUjQiujZHHRkJ4FfDiKDNVP9ovGe74ccmwe2S6Z81q6Bqb4g4GcaWZji",
  "key9": "57GT39cjJ5mxwwMAHMzeth3QdeqnEgDPYbg3cnE1GLtaumzFU49WqL7szWXywCVQQ93xR7XeXx9czM1z7z29Uxpd",
  "key10": "2H3JpPX2aCZgqMHfW3HPsLKZWKvrcnPkwQ5TsZVrZR7y7MXB9ZNrZvD8JR5b9b38pyxXTqfeUJuAYqnKp1A6SRst",
  "key11": "qJWJAbBJ2sFDFhTTqaTaFpUijUqtJN5y4xtzpnHEPAEuDWFYpQW1E3G4jfviUaxxshdCMNyYtSfrv5ATozHskoi",
  "key12": "2xojDJWfmqVK2yAFD2UmnZKwZSc1k26UQiakMEFE4Y8krU9LRyTezkAeS3uen6eSFAPiUxbLKeT4UJSsiabFaJcJ",
  "key13": "4oiHYEyekRHAmEMnrKUBpa6idbe6qW3qW4GLfnaDsvhyhG9GXX7yd28JG1Pp4PydYgmu4ouHvxtB8ADp1sVkKWk7",
  "key14": "3ruYiTN2Cp3yV6MWt6LhqWHZxTuz4NfSxU74EXhuo47srAJHMpQhkY42jx5MnRjSLELaVVPUrNHacKFxhwzbFkaC",
  "key15": "oSsq9HbbQScegXfiYcWZe9WZDLcFGQsvdVCYgV7hmqrDDUBSLscnCyBTAGmCRjwhCj6GkkKiDfbQNTQmiSt6fsW",
  "key16": "2V3FfNma8oMepJ1KTojxdwTWcWsweaNY23mLPx3dUkFjFJLPin3vuTi3r2PShsbgzJd24y3mvmXvBXrU2ZhbUD5X",
  "key17": "eNGJVFxzN88ec4eNxDuUd5Aqt7BEMB6SkRcyGzhi6cqoR7XAQtn5m5mXMKAmfV9eYVRJDgHCYqCFq4bJbRwmNKU",
  "key18": "3ANvzGuKEL7x2BsUHQxcDrgjkpB6qqJUHXdPoLZbvhEi1mTKKnbyYTA45dGJk2cbR44iHgsq6FyPTd9dUXQzRD8P",
  "key19": "4M6fyNU4TGYjy3ZXRGd4a6ee974xHcnReQd4NAjeGRCpPiWPKaaGdFqgEMAk346H8bFDEZuyLnKZXJMBHVwD9RMf",
  "key20": "3teUNsS86jvphTfLQm6Qh8ELLCpZkeQdQdVgpqpb3DTvcLMZUmvTvPpAFBAYN66WHRYpUp7gheC8QqLSWKeokbzu",
  "key21": "2Uxc2ppEAr9S45oeryBuEj9ZXUUoGCy323v6iTod2zTyNbCiCsYqo6yHKaVW28U96nwKBSDVnheF6A2tzK3qj7yu",
  "key22": "ttd5tpAa6NEvuQFkfGh5D3WD2oamAGNgpBgo9BTGz42c8JNTrmhGR6KwmSa8L8q74UrzEZh5PASW81jTAMWFDjN",
  "key23": "wBbdAABSmiYym2XJcDZPGyXayWMr1tDoNAD5E2o65oXE5PgeNnMnWrieLhZzA6f6m4Md3DR21JDQPTx66tn3FBV",
  "key24": "4JMEbSW3g1BHKdRMS68grXwwUjG5Xg3t9FQCHrZATdJumQuyinTxGmoiP4V1neixVJDp3XoqFvAqv8Vn3g6zNeCG",
  "key25": "2MqCa4eXQqgwcVZaZo9s7Cs1XF6BZBjSFv5SaiGTgbLTVhabXTnb2CTYhEcQahJWfhqdCbao8L48ue827uMKxhB",
  "key26": "5XXgkUrdcMJEeyZrZBFT7FdsQ2DVqZBrmSf3kkwFEg3STrevApkRRnarWpuo6PsShfaQLnoDjhemh43cYtZJaHCr",
  "key27": "4rkjJMfiQ6n3a3X1QU7Z6fomuzt8WGkmh2LVtc1S28PtDRCAhnZ5DMbmZqK5fhsZczDTQLLApcHYEEyEQ3myN7Y6",
  "key28": "4GfGfjCdfgc5LwGW4yWD8S13uZog9ygMrtREFzdjG2WgZ4sLb9RFSrWEvvqyvhsDHCFBAiYgMY6WwHJmrv3i3eUD",
  "key29": "3vetXMS73PQaxKDzUX66ZANrRPE581bREFcyGshZbmTBKoJgDG2vgczMSPusGGXTmD2rNPKoZyCHvZ5Gf6yrmPko",
  "key30": "2AXvct2Ukio8zovGuyMVb7Ykph11mTMvVvQorzp7cUR6WLANBBpatdRAYnMc4oEJQnspKY2bZRSFoWTSYUHoHHLi",
  "key31": "3aznNTgTVNWkRzjTeTpC4JJqikqpkt5Fhy1tyWuQJFkee88oZBJ5rj4fp2kSThCpRZoC2NuNDfnTieSL1zwb9psM",
  "key32": "4m1tmwekZqqJz7uk4MzJxJQWsWNVLcwz4w9iyBdEqwhQcMKHJYTbRHeqs5vYGYAw5rM8G5WF1217ReNyhirLKhKH",
  "key33": "33U8NPU52bjEv2RcQEj47D2Pq3daYHruEHW4Ej3ZLLwbUDrgY1NQab1Wd3hdPrydsD57n9irLSq6kWVX3sbQEs1C",
  "key34": "2ykdUG6BZwUf7PNLzLUPmB4H2pvuV37tcmjCyjUUBRB97X58bFrGNRtR9oc6LX3xxj7PUoDefh7GTq8bt5JHpmKQ",
  "key35": "2i3G8jdW4ByPq1umSNxemDywUDhiKmfmrAob5JA4gohN9i8BS3C5WJAqq7VDYEyGU6tEDKWFx3qkJXHmqnC1Q1Gs",
  "key36": "3R2yj4S848UN1mqNgxBZdAazochEJAKVYEhqviz8MKpHKQiEN9F6kqEM2sehraXAQLzUSdejg9gFTkc3roURSxa9",
  "key37": "FiR9HDTef9x56KwxX1QSLZ3QgF7NAG72Ch3k9ZLTMT1AM9LRieZm7og9fmo34xjg4eMakrRXsMPuEFpo9j9MMed",
  "key38": "5j2UP6ZqRkFPXzJuGq91cswtfo9fWVKUz52EGxJqtoAk6W2eFfQDKBSXmjGXxkHL7ZRkFyTn6xRmfqJAKX3Msm4J",
  "key39": "3TdQsgPGhfDEcLwUJzCvY6KvB2jTwnbbr5Wm8GFQz8eqML2TxY8ouHNUJwJUjtjfb9qvbeWKDJLcYZYzu4TpTZzt",
  "key40": "2bdem9686FK8AR8R4ZQpNSMaJX6MQynN8TYuSnbqnX7UJfEeeFvYNbwDbQvSUT71pvEJa4Y3CnQtnWsRMtpa5Pnh",
  "key41": "7tVNovuWYQF1Nn7TU6MjDzzpefbKPpStDTQ4XYpf1hcvckpnhnv4KaU4UL5iZ1T5hWjSrpTWX9X2PBWmDLAqjxY",
  "key42": "4MCYnHBxJ3v6SEo3SL4GQWLr7uH9zNYuudKPRzWa1mheAAk6HWMUyr7sQRmh3xfSaLqYt8wmLLNcUeeowMfUbwi6"
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
