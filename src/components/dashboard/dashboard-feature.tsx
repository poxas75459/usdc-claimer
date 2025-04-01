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
    "5NN47f5x3SEQ2Zd7JjuyfUCQj27wprZ8tUsxLHSERjtmk4Ev7caKLR224EYndNsrrocv8oeriVhMKUsy6yusMa6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uVFZrVUrpjLYhwqvbLNaPekKc9NUR8VX3gXPQZ7UQLMKdDscgSqkKuWzooduFeoRZ38DH44bHpECfCszu74rbbh",
  "key1": "5dt4bQWkDDrjKYpsQxNd6QCAmhku6KB1DR4zHLBKWU3ssJir5gMsWRP2aGvy8LuYyayE7d6GHQDKAFLWK3WtFGTu",
  "key2": "64U2Le8juUehkQuoMbnJ96c9JPns6TgLRgvziGXbVfHeWFPHfRAPwdQGQxi44vKKAC3BHkeqFybG3kvLq9JJCHtU",
  "key3": "4yk8oL5X6vRQN1aa7q6ZC1ezBcveZu8zujgyxa9DDsbXbpzKsR3FFTtKWQpBcPN9mJgRhSuyTnHDMcvP4dKtnMKV",
  "key4": "4cQD9UR1sYp3qoTg9tG8uQixmQVyfHmDNJKpPHuwvkHSbAu59ZVFKsPFtt9xuEM1hXY7NGQAwbbTmBtjV2eU9RhA",
  "key5": "41bY8iFPoqibdX6kaUGeUgrzRk8GsPVApcvsvi2PiehyJ8Rubvd4wgcyKEDbzoUkZtnze8Wp2KjRz4ydK8PDLQtW",
  "key6": "49HkUg4Vkyp5SEB9h8V2dx8hMs3RkeD6YBcbgS3zgnpH2ZP7q5EyPp7LVYbHYKQzwJsj2WMs4eQpXKQz1V761gyi",
  "key7": "3GbBdum8cKPawquH1jP72VpKwDPL1YEfNMzmEPrVNhuJsDDpyaW2R2D2HQ1Za9oS6cf1eZvCCSa6E2U1KmPsKZp4",
  "key8": "3cfjXxrGedLpVdve4TYnhZnMKuw6Nxb8PkHkAuPdKoeHes1NGzQRTV6m7mXEHsUXXdXJGjAPFxpsASAmPp5ns7W9",
  "key9": "5P8VyHnv5vuxuGKguGBSaBQys7mGo87VmoQTXoWupd2rpAqzAXSqDM4E7RuBU7DiFqr8d3sgVSdkwgJtc5Qc925z",
  "key10": "3pxzzm6LVXcTtZLDchRNai59aTXYDN1dzxr4sHiFvFD1qgNgZre4DD1cjSWebL6Kd4btSGzz3QykFSwsyAw6opmv",
  "key11": "3LqTCXPN4xyMpX46mqdFdj5tx1cY1PjDKE63WSrYngFyniKYCDgR7PnhoswUivA8VLFBMSncYvtbE6mLUHkuCET6",
  "key12": "4cU7xgjgWAAubAsEQhrQroi2VrhXsaQystYGANLUdVAarTWZTiX51uDFhEPDF5mnwKmyD2EehErME4rWipqCBVRc",
  "key13": "2q52WuXfwaUgGFiByFahNsEiwoT4EpXhdCLZCPrLbZP61HvA3Hbc4snWtLWLnVzxhGF6TrDh2JQEfHc61rYYRdRB",
  "key14": "2pu9t4an9PvrBLFiMe31YR167chwcsCxNVjZQPomqXpGTwu4mUPsRxiDzmprrWVhD8CH22a6PbnTYcKHd9P44hNL",
  "key15": "3QTbHXLDnvNf2ynTqEn6ChJnPXpE2uKMGewrJeVhbRnd1H9oNbLyG9tRDN6F71YJVvk16RJ8BdKdvWXtJuZTJCgq",
  "key16": "3LDPHrBSC3poGmNvjZGe412QmmPshCHpBbeidoZoMHt4R37KH6xbc4u3rrWNwYxb6XsStCotQL7YRdtFYZre8L5q",
  "key17": "2myBzhXKdmiyjcmFXcJXK3JhEyfSqANfyDuRiHxvV7th7iL7mJo8tihzF1F7fmZN5bvaPZoUzCQqnQrAbY5yshPg",
  "key18": "5JcwoVo1bErqnu6UUribSCZGvwLiRo5AVwFdPzGzNxHaNBSmPtk8AptnprJtnjwawPei4Zc1kT9L3NqYFLNcGxdD",
  "key19": "2oRqQeFMpUj6vsYH8BqM9b1XTaET7BqFccpuuGhz6x3SZQzN5hWPtDWcH4YGrctNB8Uqm6WmNuJgy32esMpCE7MV",
  "key20": "5qpr38y1E58BhEK4gvUCCpQQ7BM8FipbiWn7DMMqe3pwADhGmfytXZUiyLLtWW1a38m9SdPS7kfwjo5qHj5Xo1SB",
  "key21": "282SmzUpHN1qdCicTwqxc1TGWLtBjzroaP1S3h2XFncXCc7tEMvH1CLhcm4LA1hNtHsJfd5mhHqFG4aexuo7Y5oB",
  "key22": "Yt7ZSS9ZJFS4JW3a6LbLFDJnGbAR35qpt31wk3ARtG63RaqJEP7ueK2hAQDSiCR5tdsYt9FWrnqoXyU6MKunMcY",
  "key23": "2oPdqZ4Z7WHZL7JNcZpywLoDfwYtSYr6Jx4MC1bY9g64xjWMwuRxzTGFPQdMaB1WfmCD9doEgnoBrdBJh8bdRfuC",
  "key24": "5HLS1J3QMYnGSXiQx8869r4514DcxN16GgDgP7KQFRMhFPeVRBjn5gAYgp5yEsew8sfbtw8QtcCwWhH6ygVJgRyu",
  "key25": "5m3anRC6jRiTYTbd3DvUSHVFiDv2f7MYp9pHVBYmyCViCFJaPKtq7LGMhXpTevPiLrrfirNTyzbxzu3AnRzdNnfV",
  "key26": "3upQMJTpKkZ8doEWgQ6n91hNdcwSvC8JqAW2JdrT7VK3u8ZLpt96vNytYUz7EpDB4eUyb36dJFMT7QcqZc2edveM",
  "key27": "3ALY3wgY6HJ5nXfpDzMXEku9gutkHM6a278pxrAYXkbHPFz45wkCnGnYbju7pZRubM7ZuWFXWs7M2aB7VBMdVbyu",
  "key28": "5dKVpUvv5ZWy1t3Mi6Q7T6hpkHFV4fVUbo6EqcPUZ8ZHdSHPRjFTAmaGJ1rY8kcvoqKh89Qj86jk8CF1VyeeTuR9",
  "key29": "5U676WCjswfJ8uNyx5eRn24CNn9ZYRQ7CbZyJd2ZHBsNYByUTLU7F4QQuS3mwExqsks376y6of9BXJ8TVsXeXGyH",
  "key30": "2BZi6fuPm7gNEN79s2LSjhcexpybeN97dSSqgpCkzuTyNYUjENbQXB73PeVbiACoHcwMLfBUV3kBkQL3rVC9J4YH",
  "key31": "3iHXEDruYhR2WoYe8EDdniMTTVGtqAi1bCUs9fZr1Q5WCBAasHUafp8znMckQs1V12nGKJy3Nzat4b6CnUAb1mW6",
  "key32": "39FuEsNRih71Thtsr2Unvta2AfnBzmU3yQQjfCx1YQPVvWqnj6weCdXSTo2gU7y4y8RZcQ7szYDzb3awgMh13Gmc",
  "key33": "3dLauizjQEnD74SCnnxCUqugcaFLRhP9sWS94V5k9v5jw7kr5JWszqSgPYTQbRbcdpWmSwnsHkcMvHkZTKH9rtmC",
  "key34": "38rxHvXNnwerpeybcdGM4Dtwhkz6J39dfU6FJnsF1xpUuBQqSgAHHbi4mj4Qa7PvuDr38meJY8wUexiQZiZvXwxg",
  "key35": "xH7GDGtmCyzjySRYk38PhyZCGXRrn1ucGoEWYaQAFfW86fMxWwKZoyZr1NkW9CP3M16mRj6s9cSceq1mcUQY1iz",
  "key36": "SrF6TUwYiSskDeHVJsUF9rYDq3worXoYMJfU9pwa6D1TPoqi76SdTw566QXg42tAEkBLgpBHr96wW8EbonD3Luv",
  "key37": "5KyxaNoz79qBkE1DTMLMLj3UJVG7Jxawsv8G83ZNEthq3eHg9PN3SfMh1EmxgrKu9CxujLFryQxZZWxh1HQNc4Ra",
  "key38": "5V2dBB9wipPwYHURRfrvoMx6cdqbWVSafxhHD1GKrdRiXpFmifZ9StHp16jMTkvemSq3464K1GCCUdN568F9Wuz5",
  "key39": "2MRKna4ZGTR7k99EbzMqEjrR3nC8Z7zUrUyh8cbgdcVKRjd9D4adn5ASkfFExUsGSJ4EtBQK8WmCMub8XgRYckCv",
  "key40": "4HAHU9bWcVsJGWZYDYMY9PXpHHZd9bo6PPKMqYDagaed9DuYEPk81c1QXk61ro9JdCyNjcGvAarNCYrFua6AkZ5j",
  "key41": "5LDqXDC1GDqL2bA6KcEak6MUR9SQZgBYP4iEzg1smyrxgfptn6F8pa6WKEqEWwe4RxwBkJ5CiMEqZmYjjuKvxbad",
  "key42": "2KF9AEbBuqVjhKdyDVkSPQayGGRQM2HJSjGWUcNn3bFnmKX9bVSKzB2dxnfMvPFyYYbsTyDTW3q6kAsh52HoVXcm",
  "key43": "9NKwLZq7N6gAyCk7EesPDcCS6F1ZEGWMRAqaExeehJk4uZ2fR614jf6bou5YZYKPmmDbDibpyZTfNPtsmTZSJsn",
  "key44": "2jDkUB4iY53ydA1EH2mASf37PEveQAfTLAatWKd8V8u3obmhQDYFGDkawq2KxWrVvL3PniRoZ7yosBkJEPRbxZN4",
  "key45": "u5mDaxGsSHX1KgKiPR2PorWLoT4UqXomHafHvfPyRkzgF6qfk6ZYBMPkgiPU99evP9bFZi4jRpf4KL8mR1qAKPn"
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
