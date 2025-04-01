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
    "2hnvif7cpBtv8dpmzBZjVE3UtSrrZ5cGTnPqgi4iGKX8GC4s1gEJ6Kx8UEBBDZ4PPrXWHNcy2jioYV1aA36XdSth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59TeqMufQyMyt1ZzdwQjP6a6rjAFCDyKwPuH7tPKiCoDxr1Gs5TaC9q3pxfXrwELSXqPiC5Mc1rcfM6mrRw3XYCU",
  "key1": "2wJdfDZoK1H8nzMLDtmCzWwSNWFbXdMNvUvpbUtBVd4XHrykAAQQNuxA6eVUR3CpQp7T5NCHhwYmHWFK9q42pSDh",
  "key2": "42BqYkMvncJTRK6i6bq5KinnMT1yvS9e6Kk8HwyTMV5VzXD1DvjAc5JKv3rgve4L2EFhk6LoEq2sb2g5cT73PmtM",
  "key3": "5PdEs5VrVB4wSBLH2VrrTJ5j5M8E3LdfP4D2GoGju3Z1YNqyTkrf6NLSN9s6QRkk41MZrHpc98Frr2fsRHnYCHtb",
  "key4": "3oZ8zQT2gjkU8ndMwPkFSen8zEoddbwVYaJEwiGVwJncretwRGufxzaeKyU2pEZzPcyUNjQS3MRo6BWiYpZ6r8Nv",
  "key5": "55MJk45YEGATXeJknwpcgtHJFcnJegsBV8raZfeP512AtugXRKEn8b4SbU5tnv6o5XydVjqzVcacn29dcsDqYzJn",
  "key6": "2vaZwJHmNBPmGhGmbDJMD4i2Xbdj7wM7YtPcYJjDTLEBDjv8dAiQ6mjpe5nktNywx8CEz1KVYUPwecwPk2Cp9mLL",
  "key7": "2yLc483AQ9bfMfFzM9XMQcZSaGQRLpB3RvA6ekfx4chZdpudDUPvNkS1hzHkFviVAgFM4rBKcmfYWmY593UT4CuK",
  "key8": "2Jvv79n1p4Y2rfZ5ysELBbQEzrfo4j3XChRZUB4CBzJy96nkdq8Gmm9RnssQKYLFgytLRTFxEM6z4C1qper1Hhbc",
  "key9": "3BwGjtjbzXiiD5M4mgCxm6UNQtZM3ua9vMonqqHTrVFDPUH29ZSG1sVkZ2p1GK4u35aoHVLDT9gQdE58Eq4mz53T",
  "key10": "MKQf5PcdVopHytdR34vWueoJ2HqFuF81N4C2EGqK5LURgESPFeeQNSfHXe7T3JummiL5g4fCUUPLNkvo78yVRYX",
  "key11": "2ELXQSgWWbbSuTrqAadxcTt9DPdkgMXtVf7zPD6N6J7c88a36pDSb8Vxg8MxQqRY79TCPgm5L2JpULLJkbEepB1R",
  "key12": "5RK9SqMTrs3BKdXGgayS4DC8jTKGNVWLypxsuKsUbKrHVqYNBKvFfJTJXeiinjAYV4dKy2XgHMYfg53XuJ8KjPzQ",
  "key13": "iT9RcTxdxsHBCwgQ8u9fQL9NWwiCP6ceEGwUvBQPfTCVB3zQ1Nh3MKb9b4DSrSa6S8FhbHpgj8P6fYSgH9nkCDj",
  "key14": "5HZmU9rALc9j8rJbZQpRPFYyW5Fss9orLpdhopmYJcxQHohexA9jaQ3TE7eirMkPaVFEeVaTgkDnNX3X3EZc4u73",
  "key15": "3QGEbGVaTriauk27hnYv2kSxErxDbtLfoK13hYWtyfg7F2BpgoeqpPoYdrLdFeRwN3imT138DFGyWtaGeSAZGNp3",
  "key16": "3uwjRbbYYiukmHP7EjSSyuCKxJ1i9sPtqkCf5GqK4Reuarm7XBYnKmKfhLUfp6aD1mUK7iviAUwcF347k2jSniCz",
  "key17": "5gYN9X8YfUWjFoD64aCDo4T8pNk3BvagSbHxAgyWDbJqqZq16mqgAe8YJMDt9LwRTjviFMy3VdFjwgk11mHyk8Uq",
  "key18": "D6ykMhfN99HVYGreUF6SkM8Bu6of2B4B9c2fyGbeJ19j4zFDsJZJBeR5KrdUQJiBs69YZUUj39NTszQvQf4KjfZ",
  "key19": "8yyJjTUPayykeB44654XzL2ZmGyQ96aC6oc9WBu8My9g54A8kjfAJX4VCZRiFVaoTor6ieTunxCLNdiNu8EtFWN",
  "key20": "3ncoJVw9d4C9qVo2Sqr2bGtr9vcpi2puc3gBoisciNJoMHKiBrTgG1roKdpTMneSXumie9HsNdcGM97nZHNQ2iFr",
  "key21": "xc4r9fXVv68TG3vzpAvFmSvQvTVdcLySCsQBT9pxCaoBjcMiMbem8ZHheSfucmMpGXvopcM6M5CPEEGQdtnXETs",
  "key22": "628UPAvGVquapgg9d6TSY7RyDSNvmwL86eWg5amVcvbJxq5VsL78Tm6fQ5ZpB2ex5XPKrVEKTvcs3Bh3STToR98W",
  "key23": "3a51m3TQ9kibx3JJ1ZWg11rZpX4T37R3c9SUW2cRpYGamhYUQgtGz5iidnWoYLnjJzoGxpxQ2YVP6cgsnTwZ162q",
  "key24": "3en9SsqWj8P7XFCRys3bBUgVGad2NM3Hec8irEUC1Hfp5EofqE9aR2mVqFwzGQFsVVXhFq4rsk3SusY7xUHouVrv",
  "key25": "3EhvTRTWDGhGUMEYBGo5H2q6CBPbwag74xxgRrXBfPTTr5Cwu1oMKUnGfJDC7XywYwtGati4sBrKcuoFdfxENgtc",
  "key26": "5pwTwVVkj1Phtc8oBr9boiLmgRPWXSrPKoaam8ArtBL2LKCqoNS7zhpNbbVVakSd5HVZbVTf1vi8p3zSMG1X6f85",
  "key27": "2s3YH8eDgFwqJk1dh6fWewTpZ4yLxP5ZehUqWrsCVapKDfjUuf2hqZgFBN9cMujZKDaqMYNbHGMMvBwh3jqL4igR",
  "key28": "36V3scXZDHgJVKwccgggRYs1JwtQUrqwdju2Ey2hfp4fCLSDYdomBFjkM2LrzVmGt7tpEwDVDCChL8MnPgeBDMW8",
  "key29": "2eQczAXcwx5n1aJaPC1wisqvEAYz9iVP8mjwNYQ1k6bCiJJbkXMTi2EK2hQ9Up2LTufwnP6xmNYvYg5Xu9zjHgrL",
  "key30": "5XEPxurfo2xTcECTjZLQmMSwXMCAvf9EmCV3k68QQdgvqD2u4qd9sh3TRE1SKsKe4a5sCjgqHqtUSrTisUYQby7y",
  "key31": "4ukEaHyMjbBkgusbfVBLu4tQVR2TnQ1XAcb3tz1UonDxCJRRw2jjDprVmwbmpSJvS2fMUMiMZFSETVvfAf8pMYpk",
  "key32": "4cjuUxBjbPzLhe5ScJwUsu4r7bZx5sCo5xu7buGJKUyYQtERjrXSxnHH51tVfM466V2WVswdHSFF73wiGW3bDJYU",
  "key33": "4xUgoQvA26ST3R8HLaimAh6DyARYqivM817Tj9jk3gGnDC8uJUZgGkhjbj5q6TNGAnGqEH5kwb8mF4TENQBdY1GC",
  "key34": "4jhT9xv38N4kXTzurok84fGfFpVPZXxUfXksNiCEPnU3gvuUXQPBcLruiqYchvPcdmkhAEjya3vWtgzGBhvGp6od",
  "key35": "2bPCz2SBfAU7FRKTuZCT8wcJFqiwTtp6Cu8FitxBAUQQAsDx1coUcPSSNZXesyqUKXUg4svWZBNTfgFdAnmv7sVJ",
  "key36": "61FBQJW28mRg4zt66LEdQ1xFNq17n7pidoS4TT39KmB4k6z2brKY8tNHeoVNfPa7HpLvxyurw5Vrv1ySM7r3g8BR",
  "key37": "36BQH78gdSnUZoKqVwxzBymZbupNZnrLm3UN7QuE1PsGcSBbGPe6UCU1t4HfRUvMeoCGvXgrCpw3a7ciibM3DGvz",
  "key38": "5Ntz7JeAN7XUc2YABK6Kf687XeeVrAknCovqWizpRdqvJyTdz7WBd1WiiP7HiB274SGdD2VADDFCRvQixvnrnvw1",
  "key39": "2tiGYM15We6WfXqXvd4AU1XqSVquv5EzePLWJuoZqSYVymFqPmKMz3LcirypK8xiQhFkHe735hnwhTp4gbc9sMqf",
  "key40": "3zDjXNgcebVCfDJpwKy19h2qef1egzfLkaNhC1F6KPNZ8g6USzTs9uFKnz1XD6SSDGzwnS7FsfjFgpVjENReqh9m",
  "key41": "4pqnT9aWAy2vVtpyearXaoH6fas35YSrFTmuufa1ZgQPLURMRR2pmxW2anLXGKVSXdYgnpvY7VykQ5WzT2TzVFWw",
  "key42": "XUG3tnU4zEnavbkrtuJsi4CyW4yy1qhirLHHobLusnKB5utUdFsekH5BerhwqdDb96ZtHaTsMbDVcHtkk1Zb5ky",
  "key43": "5vzkg6zUkxth6cuDNMbUP6vpXomA1Ru5Pa6zcJ93Do1mTP5p7gMLaQZnwcbsq1kTJBkmfFULMd6aomWYd15CZXRK"
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
