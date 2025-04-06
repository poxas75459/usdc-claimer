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
    "3Moss4vSuEBq1R7vpL1UrBkoupoRrr99S9ruiTDSYN2Pmua9STYCmf5gC3Mys6vZVHWC8vxdKYRMoa5UPNNWK2C8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mxdZovSBMszJce7P1xqUVDbuCjokMNiKRW37sz1SYvUWnrbQfVAd1LRdzpp1SFUsiEWU55jqjN5u8DJURXQysE7",
  "key1": "4VKKfnox6auxrM3dRaED8FsiaYTHziMDTj6ewPWvJQhd17aFKbuhgMziJynCvwCd6gudzRhRLhzXWMWQjkTwhUry",
  "key2": "3GXxfxY4PfdHwP7minSebZ3Lte7YfVnJM88RCb8dhiNPZ3JMQ8XnGHzSRVvgJ3DX8PZj4keKT5h8Vw6c5xkLQFpf",
  "key3": "4xmKgpEttHu2K5FtXNvmzaxHVXLj7M2PwRrC9wq85ri5jP3qFPvxVBzHHcwW624YAHznHG1KLzQAyJSKESua5EKZ",
  "key4": "59wTL6dMXw53VBRcasuSRyTKEKCkAbWuczGQyHXvnxpyq5rthyxsRZYbRtStcoGA13j14p8KWDTKhu7oPRLBk9Bo",
  "key5": "4awQ1m78oZDYviAjfx3MTBctX5hTYhQXm9j2a3U635o3ygpHRYpHaQoXokpcvhxqLXeYo1Sw8EeqZUWnxJdk1yiT",
  "key6": "ungB5wFWi7fSj2WdE38Si7u7u7hzFNRo3dZskZzqN2qB4MW4vAKPEQqCnZSsjZjgd84AsFpBePNB1v2w2GjU4Yt",
  "key7": "2KpRTRgb9Ad35F62j2xiFWSRzhWbbXLTdVXZ2ov4WbS5P5U3MhusU1neBa5psgbeQGnfVR5GRKG6cwexHSi8CuSL",
  "key8": "gwfjtKDp7uswNucqyk6SsJ6RRecmxtFWnieqXkFLHKGDJqPzuYds24PGaStaFmTC56iogV2ynqoXh72zGh1vLu4",
  "key9": "3yiH8EYSHtUnuefRsnQUsYHpSoaLzniKhyaARhojNMEhQreDCWF6mjD4aXdLodJYFYBeUKeMFBp6Zk9YcRSNTLw5",
  "key10": "38kjzGGW1gBvHCpc74PVQUubjPkdxSym8M8XyvU211vQxzn5u2iveAP4KGLy1v8cbZ5nRxUuhJuJRTxpF9y5C2dt",
  "key11": "2UBqohMHf9pzqqNwwmsYTQ5AKERCFXsVZKXbiKs8f2eqGshD725FqTRVewDao8cX54tHi4JLVukPpPv9PtjtQJHe",
  "key12": "66PDiKAehm7LY4JTEYwCfocF9bH9v1crtFQRQ87rUKPwbZS9KcuH9oAKqZVMpuGA3ZXbK4eE9BARYafgr7TDZtGz",
  "key13": "4FojdC6HusmjP69zSYMBPk8URNugdyqWwAVb1cgVSm9MFDH2MyD2RYWNZcfUjT5i3ry33NBzux47MsEezhKLqd9F",
  "key14": "52xJ8bnmC8kFb28tBTj7GNyk5u4GaJwk5M2yGvHFoVAwZSgdMkViExuxX9gw6PyicNVi8ciuky1iCfo3XmFPre6P",
  "key15": "3f2GaVzWbZ8u1DAVSwVyy5irCYcVBR4h6dFnzXm8NHVqagkHRGTVuuTnqgcbphCNVokz5YocpmLaCHScLGRTc1xa",
  "key16": "4LRugUa65Uhw5cCUqzcThtQx7bWWH6cjsKaYTWa62E9Fmj2aeNKm5E8xirgnfFbwENbb9rAagAQdie77W1A4qPFx",
  "key17": "4iUr55pohuXNKZgwYV5jD3H2u59xCeffBYStsqF1T6LD8EaYSkHJTLGzfiWrhtqVG8xj9491HPTh1VYNpbuk6AGC",
  "key18": "2zu3aoi3xWAmis85TTQPpM1TgqRQCY1HET6TKGqbn4xBogFEx1FeiHNtjU4d8VqvM6MpSsQRssjG5Dr6zc1Ewswy",
  "key19": "jtdZAA3sFiR69NHX7tP5rPELuMVL5TK4fPDnvzuHw2Z11PG1TJnsR49kPur8SVwoJt9QL2HXXXgUS7pwHNBcgxJ",
  "key20": "5YHHee3Q6mgCMrWPmmmA1YWKQVoxwjbrdoCSs1jqz4zATtwRgwJ2jXBYZeaYUZmmrQobtmrP4n5gYXkLYwQGDAx6",
  "key21": "4qqPHRRuJZ1yyL62wMTvCzygcjUtQ8mqBUBppJvNCPhtGCVADcyUiDvam6gB1oDwHqGQwckAYiU3f6uHvJEAeRaq",
  "key22": "H2oUevcmSEDMXMANam4AkYSwadEV2QB7voxatyhG4dTo8qtESrmGifThj2hMQxoBF7mRzfUjFXfDDAgP3NhvMj2",
  "key23": "2vToqsERZjXa6NToNwZAg1wzjg5NC9dYV7nr6F3yq1LNiAJEREFDQWhQv9Uh65EwgxwjzgFBmi4wgkPo6YoGgfod",
  "key24": "3mYT9UNTN1MYvyt8H8X92A3qUZH1DGAEexCKqUdc5pUGchvFgdKXf5QUPiW1Q6eyPnKhNtK9uN4JtWVx57NCu692",
  "key25": "3sPaEt8SNfMDXzD2JDK6dSx23VoqdTfWmeFmrkDccRp3xhGe76HctNYhmm3aNqVYjbwgg29q24JpwUk42d8HzFAz",
  "key26": "4rM6T171zL3pcEdy6qRPyc5CHRiZAJw415voigu4cKZyMUtg8RU9vS46M1tVurQWwSJRZRZnRWBswpDaV4QcSzMF",
  "key27": "3yWVwCa3brs68aadNMUPWe7CvKWNgLbzgUTfViNGs9iXf3PCMAU9Kn9cCdBL8jTpZbrqMqPJZ4DTNqQAMAAGW3xF",
  "key28": "5bMSXF6w9tGG2B7eHS93uShtUDBNfmpcfbiXWCCCHf3gezuudwb8NcLNGPsUsN7SFAHgvLMq3516TGYyvYayAsbC",
  "key29": "4Xu8oe5VBkTT5bV55zBiaKpctHbMhByAKEP4qKdrndNu8ANzs7wexjrNna9A1vNDguop8xEbM741miK5oCkRxzih",
  "key30": "5yxQbdVBTLkS1YTuktWMrJjxLHjW8oaeWxjp9YXvMEWirrSgnDT4LXjKyazuL2PjBEm35PA7Kxjq7kSh1va45H83",
  "key31": "QyLduAd1k8mHsH6Qr1bFnjekuqiS3RAdiDyUu7HtuziZGCbcz7zEkCTHMtTxwkrboP7feTKikL1rhqHRAFFHCaz",
  "key32": "5Dp1VoW1wNJpAdkyfk1wvE2h4CRLMnrX4zbrpJShFuRbwYeGLskqsysCbgro58cTsBgNcijVstDiAZ2BEZCp2XY5",
  "key33": "4pcx6WNQ9VWh4A5on2LeSTeFyqtACYcmktP34sLYhAAwrsWbvk9jzotY6dp5s2Knhi1xn5kGq3UZmqBcnJeB7fUL",
  "key34": "fH6TorpuajJuBQmz4h9VgWted6iCasrPrfeqkEU9wPHvFZJ4LMccVbRHiwxXd4jSXCCRQ4umctKRX5bwCWxEnyN",
  "key35": "RS7LXWnSuGowXDgRFyAxhUJA8duT7fWc3ZYwJnojAkqNx5FrQ62jjYNjf3yWGYSJHLENDVPSEHocunJUPgEbxXe",
  "key36": "5uNe2zvTSyuvQix8k3EXNxfxXbppYDq1DwY168TMTnipJZA27LZwv2mtMFb8AW1gD56GZJHiHjefUYNCyC8TW1QN",
  "key37": "C1AQiKdJDHSF9zzn7Qp5FCTM4QpRPpVkc8aaqQunMqaw4vFG1ojMfH8rfW9sXpy4wBCx2PnkJ47oqy3hRXycfgX",
  "key38": "2LkArsjZPsbXWSzDxpfNcWKf1Auc2VAtjCKx1A8hCug96anVLcWtnQNUuw3UwvPegVg2NSSLdStpSNkjjHjXG9km",
  "key39": "5ReAzDmsFnqapgAGsV5unu8nQxBudM9wuL38m5EaU9miGLHdZpFg8xzg7Bay46BDJesAMBa7GMvBKirjT6HpgAFo",
  "key40": "2XVLzxh3WEbxxadhyuhFNx4wxhMRtJeC6PgUgyBwuxtj21fV7CsH8VY7Tj7Y1H9QfWEdbqJXiU3pJx5Gwx7CcSb7"
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
