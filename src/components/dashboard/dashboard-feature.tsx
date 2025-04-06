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
    "4VugjbXHTVLmDT3MHeiBHsqspxZzASHL1gfMgUeHgSfSxVQK87AMbgzo7NZBQnFc8nvRhjayyGbVfU7B2Ybv4DDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gzF7HHJ6i564KwYAampeQqM18t3V9dXq64tzBV9QGg3tAekkZmfjWENdAUEYeWwzyuJupDqDKtBvBAMgfeNWb1n",
  "key1": "5dk8Bg4i5RYSFSgHnHugJ3ALoUJTUer4usx1gSQaJL6ynPLEG2KdyNZLn5pyUp4t7WN1G7JTvsKzQeH43ydShuzu",
  "key2": "5LMaybxi7hsvPAgbdVPN4L9s1u19y7oPGiKZhHScn6dQkx3wdmwVykV1q8sw54458seg64XC53YpEuv7w7dAV8sq",
  "key3": "5o9yw2cBVo4k4eEN7im86i8HZpBizgq1EAno2aj8zxjWQto7PUr1QspZxNr2LM4PimNH43NU2xKrUeYx8esxu1XB",
  "key4": "STdq7BMVSoENcsTFHVBykH1ksBmijXFhsrRaDQAcK6koN6tGaA4BTPBa3cp1R59F2KyFt9poffxHGqiUnw51nd1",
  "key5": "9i1UARfqptUXK9XDePsqPLj6UuQfdxo53TSNbF4xYBCbZg9yiBJqcRmA5tchVXtaKS91JN7ZkKvbZtKtLDbNfpx",
  "key6": "3UgzFVB7K5MV7zhR485NZebxaxqKKjboMEetwHVtk22Lf4Z65M5GijxUumqRpoo9nhUR3Xv1TGsvrQnqyqkJRi1B",
  "key7": "4UBYdoJpMuXYFtrjuzsweNGxQLvFu8Wjm894v9X9muT2AVTkQdyVJTdNQaDBmAcQKVQsJKAPdf8UYhnbmnfN7NYU",
  "key8": "HdhUUvnTmyBaHu6xPMzox9XNK3rsypm2dj7sUQszgej5V1LrgnJnvQ39yT8wENTSTVPn5kyDxhgvDTxpFdDG6EY",
  "key9": "5GzvqemA7DcHVifup82jw2CNdXxBgf4nRjSrkzeDbbu12zz4U3WZZy4x1wKvvMYuu2MXum6FCt4SyMAmM9SNw6ei",
  "key10": "Tsze1QQKY7Hg3eiNqocm4AFcfAa6UtLYsrec6LzS6B6X1W7S23sydquHJi3Kcha2yt6CuN5maC9KezL55Kk1ZxE",
  "key11": "2AYZnc8mBfYBeYmPxeRYXrCpKdhkwKEbNUtBE9duDQDT19aZkCvrSTmjxptu7WRrvdxFDLuA4uhB2zyxEEWRqwkD",
  "key12": "4Z2mhuuE1QRJtzAj1P588VexmHiG1vVBp8anQfikeSFbZ9GL29qtcSFU8eNFP5pcuKtRVw7rwUT5GERgdv4eCZkX",
  "key13": "2FWNsMnBHHy9K2GJWRGQXUwN4rjvSYqskCrPgzxCDyhwpZAkFeDam4yGTXwL9NJHGWTpgNobYKmseuuubvDJmvjZ",
  "key14": "4kVJ5nY2oPR3Upx3yubCDo3QP5wrr1xt2pjha9d45kwYviQWAQmkUi4YPdYMoafJfQbTwFnBTo6pB47j51G6ibQd",
  "key15": "39wk54vqKnzPc2C4U6L1pYsSgNBnJy7qXZVsNWQrJTt42PQT7je7kC2jsU4wqSHwE67C4uc8dUYWpzt8kgrvynMb",
  "key16": "4cbn9xztNyghaGM9QvvMirxVwXjy4ywwUC9oqFJxNhwwkNmzkakdXaYcrV7MnKovMi4AijLFhfVS9hdvP6rz6e7a",
  "key17": "556P8wnseWpvrAhDYuY62WuBmfQ7aCNnnPc95Z2BCxFDHreyEpu3stvGt9h7JCqnr7awwKeTaJyJsChb38r66XEq",
  "key18": "3ziWcdxKP178sqquurL7N5eWWCgkcLFNQumEqSkZGheYaun36p26SuCee5Vj8RCx2uF57Vr83gLhweVtzsZGiRjU",
  "key19": "4F4mUyirdSXbmqs7ML1uTPMbcZDT4vqQ988o9VkPCKHf1H9oEPgw3f7WHVNRFjvg8QdpaLq8iaRzvVunHWn5w1jM",
  "key20": "2HpiNdfv6ve2EeKg2oGkGe2mq9dK45Jw4AYp5VeeWqQAyaoVVxT7sTvgcS9BTxderfVMHeAi4KHUgh7qoiewtT4r",
  "key21": "2UZsSnQGV31byk8T7auJU5MBM3Jf1umKuCBDcTDc55r76e6MaWpAimbbCo61xQbvWxT1QbkSWaBVG34SJ7JD7Pin",
  "key22": "x3bVDX61atzDPtK9xzR1AUv5S1vAzmrn7EBxgsodmzoYWodrDSkDBQGqaxpGNmChPAs1dZsFEVnY56SsKhQjX8o",
  "key23": "mUR4LqHrzRZyhSniWr7o1LcPgwHAR6xPpaLPEBs2CJTWa6zrovhTEuXvJviobF3VFLiYxqXFszGHwHJMeEFPfaP",
  "key24": "3FBCkybYnGJawDsUwDNfYqS7xoHP1uLk8NErzWhqwY2LGFsAJB372xtraaDpsxT2H9LjX34UidfNhojBtZhnpCk7",
  "key25": "3cTGtye6CDRy5kLrDHHQLSYxd7YoUvEmPhaUFbApp8kVaAnuXVa5z7p9YSd78rziaxKedqNHuF3vcETiC1LoRCdA",
  "key26": "4mJSh7sq1nyaDd4dTMAkzJDR9hpcGDZLhYuoxcjK9dRGJTbH7sqaeYgk6pJDtqnrJvLf1FxrkZ2bwWcvCzcpnHg8",
  "key27": "3JHbWgJCKE7NSegztcwfpcuAR7YcnBTaE216vRgSegC6cQiAZrAyi3VoZfZEErAnYSZg69EUSQn4z5YJw2v7HqMD",
  "key28": "3grWb4xW5MUb3hHYxnpLaKV9Qvh2GDFVpsqxkAEPQb35q4ngkgY6TgEXKjYLu7o3EGA1av6N3Drqif8TmAPkvGNe",
  "key29": "kL2CkEUCxFgB8nWBMC4m5DbGj33mbgicka5ZfqKPNH8Wu7dZi2jcxgzkT8CxRr1viHCmZuEXUCDtuPynf9EiNXL",
  "key30": "5z7pZMRKchsgxG6CrTT5xgfdGCp4ngXNETqxzY1SA7yyejFHnoqkzo4WaGRpQEB6KT1oy7yLiXy2DWmRss9FvzoW",
  "key31": "4Ky5jARhtKVBePdgFPyVL8cDmapk5U8CXByccikTvyKhmHW3KnJiNzQkNPaFwSYPNXjeWiDVw6hZoFqZ9QmEnAbk",
  "key32": "5HJ8CADxteaUeg5ZyKtsttva45ZwLZUAMHjdsHhPTddNzoJiQqtrbhjbp79YEGyApWLp73uDwwg4r1ESMpgi8Bau",
  "key33": "3cMEZ3mAHk23ZfCZwQc9FKNnRi1SMrPoBEAo4aLFcvbt3DcAYfRu72Zj96GzdjQdWHQapBJsK9DXR4GuvpRWH3gm",
  "key34": "5cTtf15fKTM2xSguhahRWzJWmGixVx3ikKsohGW2aLXZxQaGZduK8kTuWoYDvmSYgyAQdCsmxNtyXj3Lg13BgUAz",
  "key35": "EPLVTzvmozhSKFf97rugp7WvxGVjvzU5t5kGqujGGE7d4t9xnng5qyUtCUasPDJ3FoApnJQvumbyMp4amcAg7oY",
  "key36": "3N9EBAEdEQNUAUvJaoqZugK8yDezmCVtDxxPWXPgJ8gRzHEm47y9Ks1ArehLVoZGmXcZe1MGjJ34ZZbJ6fVWT59",
  "key37": "44U1aVThYdWvB9eBrvMaD65errnsJT96SFq4AfzAm7oaEN4whSfpwLNfmTqsiJtK82Fczg8iVDrDYzw6sku7ewQY",
  "key38": "49HwLLP7TrZHzDvjuiCMTWD21dDQUegYrEYECt4YS34B5sLCQRfwYJniUqCA8SirpYvx1JNxzBfvn6T3EnLucLaX",
  "key39": "4bvHg5yW9hxNzojgwiAQSQQUk5kAjvEfreXh7raH45PFheq573BGMdvdsMYok79WMwSoHfXkb8FE4DMRdKEfhLrF"
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
