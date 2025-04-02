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
    "51m5HENtvA89BpJ5JWqfkCXM4xA3r4hWoFfReRY7rcS3num5gCoDaot4GDS5qEy7w65MMScSUXsWMVkzMQpuupA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i3zNUXKqo4MtUcJSKCmovApGJUayYH3ujUtMZB2CZ6gWkpcSgzMncp6d3gMxQ1dbuqcRCHEhp676GtZqyXcbU6r",
  "key1": "mjNqRf4hKV2PicMTLfic6i1KtL5wz4VhvyLbvbyHpEtgYCoLMJfYFBBx3nThTiQzQ3VJST8SukD2jxJGWMYgKz9",
  "key2": "5VCTWDfQ2dtesnyy6pFFxHFhjVumvcgS9FLyVDv5hC59mGitbASSxoYuckpLnF36VZ8yFrtWneycCeuM3D2E6qqb",
  "key3": "2w88Q6Nj5HVhmWm8UcLHFLa2uRLZ4ao5KhHLiQRNaFACUA2v9k45Qrr5LvAwcCdy1DPHGAGsSMzrSCtkGAoFkxpB",
  "key4": "6VJX572ds1mTnj8y6KQjckWNAJHgCsuzHk8K9ZRHaLJ1vAhPA4vTwKoMbLAqD7ksCnm2N3eua5GwPaug1PDRW8V",
  "key5": "4BpCrmeWd7ELzGMctJ3E65sSSUpQGT5hJn3dqQeRSZHnMiwjFrePYin5oUp4ksU2dqsyUf781qvo72k1P3x5ZTU5",
  "key6": "2KSJBnRMq6jgcGNxgmU7Z4YujK7j4euFrmeZiLzY6ogFxnuqYZJqmgNTwU8JzhFBhYTJ2KcV2UscgtTM2hfSak1U",
  "key7": "3s2kMR787yAHwYXe8FiURLAzDDqk4v9kzz9YSE2FDHGZEkZ7PGw6jGewhDsgWXwMhkAemviZ3wFoDuCrdbJQzgg5",
  "key8": "2a7Hhx5c9DYbNsuo91m3Tvdh5wNsSHUMNZAKAQHp9uK3rbtKYHkvudiTp8oJ5axd8D7aQ2QyUziJjZ4xKmX9Jxx2",
  "key9": "3W3G6cfevyAp57fVKncUd5GJatLpMpvurxQawwR5VpiM6eaUHmJjNQukWiMUd5vgADg5yfs3JTduzDV4hDj8Ld4f",
  "key10": "4jsTscNHVaB1GtVGaMG1WXTktVsVQ2h3N7ekCU9WfjtBMK6HkPVvoZsdhnqnMYB16WdLYtgCLRd3Fbhjfvaaaan4",
  "key11": "5ZDLjaAfwfbZv2kesGLjvrVjPSvKmB8aUEmAM9uSmCM3dBwudNAxbQSfKebB5CiAcYFvBPf9s4nh66gU1zPawXkw",
  "key12": "3iWPUDtyawhEVo279WDkTP7YGfH5ZuR7tBRAhHQtTtcXz1f6hnCgD35j1LFQAPkc47VPxECHnQCpfv8R1TtjpEj1",
  "key13": "ph7ULsULnsekyVnMffs7fumKDJWUwYu8fKZmM16mwnoPGp3zYDSFqX3VD2NVmVJhKeCcHrusojxnLMe9pFgmAbs",
  "key14": "2eYGMohJQDCeChYtF6QqouYeV6fmCFv7ihcGobkCbCjwJ3auHVjLVMkjwMpc2hqHdqHavWwp3uN46QCGMYCUmisD",
  "key15": "oS6iW9q1HMJbxjRL7x4Bbmn6oYForiZdu47xPwbbBHiaFry8Bqb7t8y1RpjTjkqiNofVdwaZ72eHMufDiHatpDg",
  "key16": "3465vp8CD5DhXMhzshJi6SrBfNhuhxbTnerE9CGjLYVuKzdyn9X6Rbqs9sDqGwJWa22cxyKJvrM7ykWZFrhGEMmK",
  "key17": "3s5incwUnaBXD65XdYENkyq2bsQANhhoqYsbQ3m6LTBqBQrDFXMRnZdCmKCwCfXr8xre7WZL4qjLyrpct3XJqMmn",
  "key18": "3xfQ29CKahbdttAVMbxzt2Z493WHzXASfzGj6tFios9ZR9Z1rgB7NEFzeMfeoRjo7ir8pFYqgxQF1coYSUwH7D3d",
  "key19": "5K7J5jfyS6ELmFJTAaDeQnHtWG1zjTHfh4PKkVVAHzkVupvDFHoDKdESp1k8fAsLbaQzQx7oKXe7fRmJzjcrRHjG",
  "key20": "C6Gsz56rzHjjHKTVwTL61TC9sekJNTteNhqrEMeEChCH1FWTmKYav1H7M7FqjhdTaxPazhWoVAjezy6mEuHechc",
  "key21": "5NnyDnbXBHdhqUkGB3Sa76CtkUQKaXFhRAdJ4cC1uoxCZmj8HQMrXXHapNvP4wmbzDmeDBWKyR8hFFsSPUixntzf",
  "key22": "3MCDSFsj2kgqyJX2qX4v6YTmTAGZN2u6d9U1QNLxcspYAMK9paKcpKU5VeJLjiNcuPds8cxA9T8yRV6RXtDWS29u",
  "key23": "3qMiXeKsXP1HwBEaDy6MMufD6TnonudX5sRVG37mAjTNtqHAtY1rFn7jhjiC34aufztcuQ4zqSBKpNuD9VgQDWG3",
  "key24": "QG9GowtxpSnUJTEygw1yYiXEYERKKkX7JU1dzcjhuh4WnmEUZ7ZiuJpyWBrNtPdVHjFFqWdmUJFKcU7Wpwa2y2x",
  "key25": "4E7pXYh16DuqX9EMxBXig1ypZCAZcxVFi7pwAeypubjRtqTnQjsQokCWvy9bU3csNoCGW8Un2DJ3ouagMJZFKiG8",
  "key26": "2nisbb4cuznukrimCnuPghSzXkwJPyPBnG3MFx8BYmKzWjHkj3fyDPdUHJ5NthxH6dMfQt9ebSif4DikmfF7M2Ds",
  "key27": "42mYLCxDNwCu8houvARrqWgSX39wU725yYWRgASH4DeErvCMKgZBsws3QoSSAJfhMkmNWQBjiSApyMsDURfTcNZS",
  "key28": "4nXkQYPSxWhVr7eV4928GmFqiz1LyNeuu7EoUMJQYESKhTRSPE8ppE5NX89pny5ZBo25m2WzKoufa5cyPTDNrzjB",
  "key29": "4EgvhaftYRtiVzYsu5J8BfTTTVwfuZSmx3SGqzFoAdRC8kUiUydmBpZPUWGsgSQWXgsYdLutaLjnxiqGyijXmT44",
  "key30": "3sKqisVcKpdmZcEjTCgU6zznnvKXu3YhYo1uRExxGapDZoMc47cETgjVHWUXZMjJ22XspzdPxoJZcHn7hs1Nj2QN",
  "key31": "5wDgXfjgj1h1AeG8AyeWxsGFzSsNhWnfLH4ZarbA7R1DqHwQYSrbwixnJyJbky48wZhxFWNR84BehbQ6V9dbEiME",
  "key32": "2qAHjs2mj1BVNk4fWYXGyHqs8FFYoRhcc4P18kJCqLUaRhvPshmmNNLTna9X1shsyNNpc4hVAcbCNeiNwNTKpMFt",
  "key33": "4UrDEZD3fVjLKkWEKHzELh4urvxr5iw819o2C9cr8N5BvZRT7ZFiEjbwfF27xi3Z8k7cXWSjjZFZkaUpMtKyc1in",
  "key34": "2Y4CTRb7iRaFRhuagYpseWFdACeHiBTz35gfuNiK63gFiE7JdeF7xFPoGH2Bn7DUHhksqUFTHfaX16dvUBXXXvas",
  "key35": "5hGCY2SzbsWuz1tbyurKd4KoHSbAtX2Z5TZtRMiamv8aqdsdy67twPoGUfa4yN7ryyv8MUbyxeUUnpdqQFKNwn2H",
  "key36": "37F9kV5HkVQTWT7vyHvQ7Xz15EE4Pfuir7wQz5bwsbFkq3LtcKswzjWv68nfge7ABbZmfhTNS9jHBwR6jQokGgvm"
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
