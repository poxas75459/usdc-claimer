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
    "42c5tHHkhypcQ7Qe8m1iJwNPU7kiMLmwn7YZ6dXZ2vXPZVmrE3Jgtwmo1cLNFtTd9bBavkozDVT77mBJ4ESQMjc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57SmH9sPbvnV8b5cHTnmBHUbPpyBwMvZKF7vVPKHfxsmN2ni5RiCtUoB7cJ63Tonh4PNZ9vnTtTLJ1t1oJvkZjrM",
  "key1": "3wbewH9Yp8CvMo4TLrQokqVfRVRnkRExuSGNBP5GGKSoNQB3FjL3A9QrRL6FoRVr3gG6Lse9e2vFzZ1uQJu6HDUm",
  "key2": "oRp3BWVToSjUF9GpYtX8rN612BUkcLjmmfatSAsmqZ5n7Zh9wyiKKvFfUHdzcRpvQow8M9evzonUQWaeKERw31A",
  "key3": "5dBH4W6P1AEzVYNxXNr4auL6TsyuP3TXxCJrAr3ycpsT58ov31S8ZnWWZ1wcihPA1WqqQhoWM8L62RvGX96VLFxs",
  "key4": "5Z2xk5tpd7fR2UjXAFJoRQih96f2UDvNESNb711fDCx32dDZ1nDiWnTi8si4xcXNx1UkJGNxCH1yoeCagQVk4etc",
  "key5": "3Txs2x3RUjhqKDJun96rezvRVgcLz9yJ2adXRHjnDhT2ixJuDdFvuQZ4ZB38nKD1inC71dunVfKjZ7rofsSWBo9n",
  "key6": "57tcyuapU5QXXjbVEw5hxgxszrKAb8wntDbv58eXCxfYe8xL8Y83fQYjgb4QACDjkt3JcugN12ukKPYrCLH4aYVv",
  "key7": "3by1wMWpvvDTNNfyjUakwk3vRBEseT5Z8Y5xFcrdb4mUMyf4YDqqwZc468X3TvoFMnTgebDngBTVgfZJb1ptXhQb",
  "key8": "4w6bEP5PdmfFajg1RQDGQue56crDPT3TVtHFoSoHmPUgpaK4XDW3B8EdmJCntTQ8NhWJHHcUbeiuyKKVT3bNtneQ",
  "key9": "FrMgvfp2zrmMPtVirZ9UG94XEwwWVpYiZwZQYY413HbyhEYUegJbH99ZQQ3CMpgq1fGTAP3SyN4RLz67dM4ycYw",
  "key10": "5DgnRqEdRB2ghNS3ULqHJD69QFyCcWV6pwB2SZ88ETZLEw1Ax3K7WzCzmUhQM1d8abPwyMEqy5rPWjUsGY3XDepZ",
  "key11": "wG2Zv7fzrHtRMojTV3mt5QgPvgQszZ5DzdinVvZ49jeLqTySBLNKcvLgm3FphhfjYHYrKymPNRQpz9CF7MVV7Wk",
  "key12": "4ZtgxxhJq5KU4vzCVBbAraJiWFdBPKP32Yn61KGnQrSuB435mvtR8Hi1vVeWLoQM8on5vVQmpbiaCzUo3txTbxKV",
  "key13": "4mB1K6eDHkenNGPv93y5R8RnNXgWQndSDBR8nTrZMYVDRYoXrx6yx6CDYKi3e85sWPCBKuRLGYm6boS7kzxaN5M3",
  "key14": "2tWT2E2hFHC41Z4nzUAPLnpCZpNqFCFscyuwdk2WGxkwnsc6WzyyGHfrNnbg8Rfju6amJyHHBWcQ7hKmAFJPTByH",
  "key15": "4W81yM3doUi4hzVtgi4GBKm354YJfFfEnQ5AA68x5dgQPaQ7jC7rYtyDhV8w5MeS4v7shjCA5vrLu8NrZALKVX9o",
  "key16": "5F9tSyQ9mFCv5fpG6qiFRCiCDtcEherM21LyRiyyZ26acsb3a1AtPHC7wrXvaLuuYebyAVg1zYq6r496DWRHTxBe",
  "key17": "5uVyCeMexzbSXZJ19rRBCTQHJKDQqYFWT3eDSAqbS23wLcjshUEivAyAU1t6mqB8Kz7hcDeHBKYrkWnyFovBGXee",
  "key18": "tLBq7XJo8MM7QMrWWu69RsuBqeKsettQ44YArDjVVMwrCCojffgx3HEKCVey4rvN7QjVv1QpQuwbKB8o7ju1pE2",
  "key19": "2yb3aGpqLGperjkuZBVNEDozpRnUQhh45BtEpjm7mArVRABUEAZngBggx2B4jZuY4251iQwAVjqD1DzWG54iDAAs",
  "key20": "4ExTzhGcAaCBadpThYKrAJR26GxM87A8KStotYtuMCTJiyUjmjGC9TqnvVPBP4JFXP82PBynfS2bUCRrAxQiNbrT",
  "key21": "5GXcsxaAxmpHKaZKJtJKmjApcL7SfEB83Gx56sz1wfy4eVGc5S159SQs9xVYfU4Fj7fkUsscHE4Jtz5j1VZN7wVp",
  "key22": "2PHKemzxKn8QZ97nN4oYYk5ALvh7q1txokZ27Sx87fzcWGqJserPkVCDRU9sgoJjGoPeB11C8CsZxnYuSuTcsLz6",
  "key23": "4qXGo5ar1FBBr5dT2RZTazxLUf6ybLeDpKJsEbHkhVfz5Hi26NYbmUvSiFiUkgW31ZidT72NHYSZZzWeKHDoDHf4",
  "key24": "2TEpfPb2M8NH7R3VJtVh5xtBY2c4utVoE9K9e8VtFDeAZyqACySGZwQ6m5eFFcim2RJVcsKe4tjdUFq4f3bn3vKx",
  "key25": "2mm8JxhNhWvuTnFBm5GfnDNcTFg3gEcT86D8sMmXaGuc3D3A9TykNmbXrkLKDikqKtuCB8htH6bpzWFK3XHPZLQX",
  "key26": "4bdagcmk9JfiboiRgEeP1xY4yL1ac5k7kPfL89QUj3tuewDwyM1ymM4fcE4wpXbk7WfuLhDuNMsPJpCxRwmExRwy",
  "key27": "54ofzsm3vYRKep59xCX1gdYpmCJo31cV5VDnFMNAyZsj6tWLyB6pYe3sAGjd5N41s8L8VBBYUvbmYJJZ82gt9GXY",
  "key28": "2fCo9Da5YsYLcegDsnbsKZA27psYv9jd29DnhzGvCuo2pod1rAzipDPHQXCvRZhGGACRLikgqmfCWqC8Qco5HSsa",
  "key29": "4b7BpZyzutUuBf12hbUfiU6mcFASJMsPd64dC8xJS98y9GWUXTzDxAvNAgNrmuL2aWZVLf9joHyMcnvWoCQK6Y9Y",
  "key30": "B7X7MxzGAFwjCjVLzmKeUQ77a1R9wUzPmeACcE2uKGq9iYAE5UCAZ27DSktX4xqj9yZ7nxaFMcEZMoMrEDmXY8A",
  "key31": "2ZnXEmQmHMfQM8mF3BzJtQjX7hwn4QzdsAGuGteQJGtNE9PDbHrcvqoDNW4Pfm7wW5KV4wJgRM6iZCPLHWjRA66Q",
  "key32": "2S5kX9MKurv66MeViJmg2c1TcGTMQeZsQzLP9xrnB8yd3sSFfRxcUZC5nLrxsMFYv1Lz78SoGD41uubhNKPMnHrW",
  "key33": "VEwbiFckF67hc3fCK3CUyPojgr1bzYYEYkTeLjWpU8ZxsG4Zmc2RG9HCBE7pwaNvCjDmtFkbT7KY5N2wzWBADcR",
  "key34": "2AbHhbQ56drj7co2mp58e5xC7wUywVjps1ByTQ6TJtnM4PxGJy5975bQNKmeUewMKZuiWXxGYuSh1cTAm6jqX6t9",
  "key35": "59RTvhqEQxPAdvNhtfiBQ5TiH38nTVXGAgJkJmyzPiNQDukZK44KjfBNcqiwbtLCjTwf2HBkQerw6x6bFm5riXEJ",
  "key36": "2wBwabPGdrddFjRmxxdZYRWc2F57RzhTVr5baVpVR3efE87Tp1wKXHNBQBNBReX3wEZfi1hgFtrWyA3kTFfXQZ1u",
  "key37": "3YHFZQrZ44EnNCYDG55JNJeZWxJ9VjFcJ54S3LF6RHXetZLvzJme65bNWGNDR3ibH7QqsJTF99k8TLTvb7udJmq3",
  "key38": "3KjKaz6ZGGAu2T3Bnwea3wz1qe9RkaaSsMeKBX1qrUmxysBCk9Zcq1YTJ1KBWxg6N2Lf5gF739WPSnrkj2fM2Zzs",
  "key39": "2JUEJAEdp1wtxSUXhKBfMqZGLyjakF5bCiyFz78c5UN17bdRYFxjkGCtHFJFKjFtB4GtSAEGqBvHVwzcxCCx7YiG",
  "key40": "33k2qZuZ1npYPbcXYRb8YLbup9inaybNhyC4iwaGQ8mtTu72akvbfusHBSpNQMkndmhNK5wfx4iUZHAXCVJkBdLn"
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
