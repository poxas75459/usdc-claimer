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
    "3mowGGXYPyHm8ytcSnqtboe5dwWoY3KPpJ8j93CN5mUuwh6j85QqjdLBLMTywBQbmj1s6c86Z9vPx6XfSRjfiiH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pro1i8JcsQ7X7v22Vo2tZ7W2V79r8mUTyJNioLQefh47zQR6e7iaY6iDzWfSucwv49m4CQsXkBNdMauQBgd2jJv",
  "key1": "37NzEysfvRBnuPL9LpLb5MtPMCJNhSN66PnosHzoUBm5AXAR9K3Snzo6YAWNjqCcEveqeGJNCn6PiUEX7PCuZsZx",
  "key2": "4DWu9vWQqd6Yg8wNB1P1KggfeaJ7jjjx7wBfDGZjRc23nTGutbD1nbgHUXLdALZ2w6hF7JKNNM8gGdAPPZQrWjHr",
  "key3": "3HdWcdFic8yqbZVTyRA7CuzUptea6ikn83HcjuN42SmMaXWj4XmX5j9agE9sdmg9dnieXTmmxh7AQ8TtFtnoomBS",
  "key4": "FrN7oETTRNSkVkpQqztSEgVzrZK7vK7ZXr2hErWUUxi9WLPkje3sjdezCRfFLsncTTWfvk8keKcGwundLoHRp2p",
  "key5": "5LUSqEsij9NMVKMhEGGsa1y2SVNSV5N86KF543qah2sonAencxQyVXzkwEpJ4x73TRGmAUAqTemtH71bjU17zuvL",
  "key6": "JtcmTvxYtpDofqT4nmRgoiUPvCCzm13WhAVRcFtEDTiT4YtK8RqiWhWPuzxSnymRtwjGnQCQEwUosu9oXEHcnnU",
  "key7": "5tKZnUt69sS6QbukpnUhcBRxDBB35ma2iWE4KpoMrmgprDq391f38aARpWRWYRFckXQzBptEyn9VyEHwd6Q27g21",
  "key8": "4Ea4Bjh3hyundq3Nu2XmqHfbCmnmaMRgssL54A3K9mKAGg5uUjhNvgQ9rcSa4d5CjKX5KXoq74qxF4gMD5b5cLyb",
  "key9": "3MeJsVb23Qss66yb2V83AEHvk7uiDQBeAVrgMqQHo1MVVXqXtc1tXBY9N8NukCntomdqRr9eZWpMHtgZJAWfn498",
  "key10": "3SJqPNJSCBLjKm5NCdqGLADBaGpAeKDS6XLX1g9w3Uu162zgsjdqaNt8J2gYmTsqrdm1Q5NQ8XD85LadsTSp5Goy",
  "key11": "3zNShfrx59tT2BeN4NiZSeGrwhJ2DABKGs2LarB1JgeWYFgCGRCgEwTo3bXK4KWgvmTAEGETZLMuVYreMAxyu8Xm",
  "key12": "gyEvARjrJ91Sxoqw4fpgmGCTqWti8SRXtrZBgh55XuotzYuLtcLCFM7s3UESsRTKtAPuWaDJRHnwov7Jk4zFSTx",
  "key13": "3PNQU19pvkg4yk8rVadCHsS1DCzdtYmG7CyKHe7rwPv57D1PbdnupraJWmcMrsm59Q2xFKFVPYhSxw36torEjUTe",
  "key14": "44BdD52qVHaDMCAsgnzmLoV2xoVxV13z1aU2CMYhtm52YYcQXT3LuM8uM7hy5T8xKZoax98Pg4GgmUq29q1j4Dgf",
  "key15": "4KUsW8oSY3a4ey5Epmztea1QofXrKZ3ihpY4dCU93Ks2n7evKt3vqvjpcWGGhQCz2e4jUSFZDE3wTE4xDpj9r5UB",
  "key16": "2HqHonAefBaWZVYLPZC1V5f5LXtge3sWi132bjXR7JbpMWbLWht6BV4gvXYxE1gMFbEdajigU6YCyx9s2kDSyi49",
  "key17": "Fb1JVkmN7ELCgUzK1seHvyXEETxKrCcCpCPzHDpCYKqYg2F3zfQQjNRPArBxej5FbeeyfGh2WNSyTBjUZHWRuW6",
  "key18": "2bgwNTBq5Adviy2eZqpinvPdhQ6CfUmF5GfJa4GF9LSoXCQCi8s58DroN6GchKigqPYKTMh3AXsFD4kgBgET3SsW",
  "key19": "UoeA16thLB4uBLpHhHNfopDmBZYmL67cZUQXucDDdfd47fFcY9wt2WebnbKh9Z6kVrDGtUpeg8Jw2ALrcQCRgD7",
  "key20": "3SCBdskW7tAfTqQ2Y1ih1EmcG5uveySmzngJYVYZarKKhWYdhA75mBcro4fCh5aKj5zwXVAiWPU4z8JGdqYqHjbE",
  "key21": "2S17LfEyFTXy6rJzVvjauS3VGUohsiQtqA4CdGTE6KmSNJTyFsS1zx43rieezPUuUGq8BKCAzMy9nJwPrNLxLjdm",
  "key22": "5Qfjv1NB5MvpoJppgyZiH4kyaTmT3MGVcTwctgqyNvPYroyXiqKQPrfmmCy39jgfJeXdFfbhCG2aeQ62qPuvAEWj",
  "key23": "5uCuHr21S67a6tkW7bAixE7pjpqA3RNVk53y2cf2DzVXaFRDGtwKG4LbAsvixMYoAD4mQBBX7dfL7nXdaf97rpU9",
  "key24": "2171a2acf4Hr57XZNHNZt5Z4dfE5Q4RkRwVUerb2vZmfajgYWcWjNnJyk1PVeKPjrWauwaPehvVsR7WxzFUeZZe7",
  "key25": "229EFfvNhR4wVSQqaDdYisd46ksrH7Mi7HT5yLwAkR8F1PArKmFbd3G2QhoydJRZt6qfgnA17dNUwSykeFDPM2sy",
  "key26": "x6cWg9415GLTX3GkZ4TbGYg8bAyDyw3wLC7eiAB8nXXiVZXbWGfsx82h7bEQz2FeAFoQfgXdR1HfaVDy39xQeG3",
  "key27": "RuoRLwWW4tJyW6vxbGq1Dbv75DUAbfX2Gu2TerFPG35eVcY3k7Gh5LNv28BAaBCe2WYYTFzVpRp24UmkmB2B51N",
  "key28": "4gzg51ZsQ3pgNFbAobAmtGNGykMVaSMqQs1Xcd9HqRGufskgeyYunVRQfnQPLgSmfbwsJtr4SAfBzkTbg2FnPDmn",
  "key29": "JynxnoAN5yd8M9jKVgr5YV46aGcFU2wUiAxCsFV5y2saVwpY5PvyZ7XuEf1QYBhbDLxVxSXodXMyF1gRbhSkH7E",
  "key30": "4Lr9j2NyYcUe6cj3F1w5LAFzNLmSs9YeXGgCHtN4CVYDWpvhkvBWXQiMR4h4BUUCvrR3sgjiW4EY453xRhrrDCoz",
  "key31": "B4joxUtrpuqcG7PNeCuFaidWa1Gm1ThT8h3vhsoBWxQwetU1JRtQer1Z3NwRVpDaCovWMrMwVWwYMujRA6MTfK6",
  "key32": "5YtHdmyCMucFrSJ4BjfouDxxYxCcdFjSPHk3dastPBNcbvmjyFtHJ43VEGRCFyjeu4WHZ1QNu1RbwADQiqoE6JBU",
  "key33": "37V1iSQEa2j9FdCMRaYG7Q35iTBQaBiCWYVfnyjqGXTh9ima9C88N8BmgVJKdbneyNqAtK12q3Vv6wNVEREfggyE",
  "key34": "26JkyGWb54y2MBTTsPB7xhYnVBHJiyKXJzTjDyshSWpbUw9xanHv8XVxEXaErXD8Z3d21KDrHKhhDcscvCYCQ7Wb"
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
