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
    "2jTA1p93C2271xhAbK32QDDrCaDhgZFzp2FBTkcUWK7mYRgyt5soYCKVRbhF7kmRujbXzGXGLa3EC89HzemdcGeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ebA9BPUdAnh8mCWiDm7YraUsNEdeRTAX6cP8ZfsryFDs4AL7JJyARC3XmfEosGz39EP1pyj2sAar5X7m5hqZVAG",
  "key1": "3D7ivkquN3kPpTuxFAhGo6xnSnv3FDCCK4mQiQoHoHhqtQ2iPmPjzRoFmui5hSWfJZPuaYGXLrH5v79GbXy1MhA2",
  "key2": "24sNXf6whxYdZER685N2GHVFWTvpa3o2NZYAphx6V4xFmHCdQmQo6MzWMQZ7iUgw59HFE6HGLBGQtdUUW3nSjhzZ",
  "key3": "GwkK4Fxet2xaT2nQcuiutarySwYvgiF7kXya9cjytpfC2fntCdMzp6UvCG9xi5kbH1GpF4Dg8cDk15LNGvg83Cr",
  "key4": "4UDLkMLkSQdnDmvWeKBTJyXEfUaf1FZ3tAcF1dsCeR2WfpGdnAVGGB2WTPgEu4FFwSSSSH1Ci59fmX6g3sZsQJ84",
  "key5": "4QBiBKK3gxaQoeAhsmRcWxa6nZ2abg5G95h6DYXBLMVjJHg3xQZReHnckw3uMrRtmhVCcWLgqsupnaEH2Dqp77BA",
  "key6": "5TX1mSTkE9caesDP2Xqsyk1Nj6mGE9vw3rUpzHARsaCN3437UVJT4Mk6tNa9ucZD8KGsAhUnepytuhUtcdzxXhFy",
  "key7": "2VvQjysKEC2DPtLeiTZE52Q85uGJTppNcyCQLTQpRe8VR4W3eqLjHYGTLEkCH4KM2Aggi589fLrtUiDFhUGK4kbR",
  "key8": "E9A4KY2YcK8nFe14w7wLiWEUx7w1CzWcoG4tnfDprVJBT2BxwcsvMo2tHtZnxHbB4VLmUYCM2yqQ6K8E7BgBBYB",
  "key9": "48fGYcryKQEvbDNmNfn3Sf6vMUdrYRJjsgnsHvzCa7gE2HBLxtbrsa9ULjBz1BiT7yCuPRRKKXczKf69ky3cKz5i",
  "key10": "2vdurW6aF66uzPfgsLmv42z5FwnGxRrCCv58YLqedek8UogQMHiae7kDujxwKonh1fmgf9jnnrZXrqcdAN4tkv85",
  "key11": "4E5qLWLyoCSVoscBRmoHNZ2qNZkYkFib1NoEkacrTpbByJGT4dYjBfdS7tQY3Dz3P4suE2Ee26cHFmmjvWwRkKXS",
  "key12": "391KigAXgo7qmzNpR15QSstRVYvSBnbWjj6NWNbNNNmadFApQdzJa5m3u8yHKeKeLQ2Ex9kX1YfTx4WDpKptkSrG",
  "key13": "4mMvHP9YMRhRgRczzhvX7jsRRC8bTdoVFxa3q5avMwfxpJbcfRfAssHeog4DMgk6p3fp1K7kgA3Q585WqGnZWvrL",
  "key14": "5q4BQfYNVHcAXdj5veuFJ9wqv42QWyH9Rsfue6Uw38WxJXZ2Bft1twpnYTreLGvGEkUfkXpeYAR88rdtKQvkM7bL",
  "key15": "7ko7ztmpoSGSyR1NWgmNzXJbUznycjKW1sU8ersBMXevZXV2ELokRWFphTg7UyJAQWtfL6GvQpK4zLithViAM7p",
  "key16": "4DkkKtyU4F89Bwez8UxYXmdWwrmmaw55b4AVoJybo9mDGnDtz3TEELKSMR73vfzLvG41LXUATQSgb3XQhKx2Qg3F",
  "key17": "3p5AXuRs8HrwKwwzoGWENRfRjtLxPn3fLeShAS43Wobuqj1tbWCRLhcJPguKh4s2wfUMjM15Twm6RHzJh7dqKFkA",
  "key18": "2aBApBTEER1k7tA2QCZfbNrT8cAqtkkVN1bVeN2KKTd8Mt4bwGPnu5cMaKTNF3oQi2iGcZz7AKKPrqHikyDnByd7",
  "key19": "2mTJHkFAdxPmqo8i5WnnGkc432VgEemX2bpm4fKkCATWC61T1DApr1J8fKSeR6jZXBxfFgt5ZzqkavzFEdJLHJeH",
  "key20": "w5PeWC2g6TituPfQtNcDzBwgBV7uByXxoXE2xCpum8Z3WAAnDQWSnyHF4zzHMCgF6mSf1Tcex2cb3iQHVYdYVhZ",
  "key21": "5ngNxELESkjz714AL5SxkPRa7e6Z2fnZrJUuUXw4ZCdy5dsGfLbxn7RdrZZ5LwhNjEpsU3hgtxhzLb6W4ZckpXYt",
  "key22": "3TQAUKDu8EdteEhf1UXvkq14bBYqc8V3qvpR1gM5MNC5nRyaALWg7MFYVD8esf4rs5Aw8QKQTd3VkpGA5TCYBfd",
  "key23": "2MQn2N4VyMgC4VhRiFT8zUnwFreoFKAktu2KiifisoAyfa1M5QqPLWsvC3jAyYX23rmqxMvtfwMnsg35HaWCkNiC",
  "key24": "tfqb7kbzNowv9f9ximg5s3xo1LKBXjUePvJgcRQpKQ9ZyK71j2u1MVXp1kdN4qMoVGraeKDuyheRiKS7FgCEq6N",
  "key25": "53n1gs9JoHDEtDEKY8yoMQSu3yZbCBvHnUedh7ZwxBsp3UhUJSmhoVz9JJB3fssqLsNh1RQARS5dYEmm6iUvHWoA",
  "key26": "2e4SiRMPXEzX9yy4RX8XQXwB878pbM1WFi5kUXKziNJ89qioMB6Q9jK9NENUSinbUDf24DJ8vsBs7JdfhBs3h2gu",
  "key27": "5wjavvWbviBtPkqdEUZxLogjAnq4c8ajbzEyzCBTLqyAUvUM3YUudKeBbiYmQvqBgcpZ2ffcYN6w4ZGA7PnTDjVw",
  "key28": "61Zevj8bHKVS5uaBSQRy78Piab8Qgkdohft2mhErhcf7q1u24xNL1hZLcAiFbKzjcFG4acwY3usQP8VGDNKLEXZ9",
  "key29": "pXf1QpvhoVBEPj7pWMmxnzsAkrMb3sF1hthTZQSDNHSMsneWnjpx3V6HMtV7d1sTrNFnitLF7CebHCnrYuSwVYT",
  "key30": "5MsZ2mCgtGy1j3L2T1iMpd1dH4kdkukNwg7kmYyaNnMRiFbJjj5cKmPasy6jEYk6Mt7VthuGFd4CrEzjtYbRy5ib",
  "key31": "46hU5TSoQchYVaW6Z9r2dRHmpjc4oLo3vHK8iQGRAV5oMv7nVGsnFa282GLxSVW3p3TX5uPstqoQc6LTVX5nJphN",
  "key32": "5GxdjqX3A6s3vWZ4eRVh56gCYc3WRv7PYZeSQyfmv97rtfVPosLtcYz5TuSteENGSLUpafT8knyLS3qDKDU8hC2Y",
  "key33": "5PQCJRbTVLenhA8eSho5BEfs8orma7WhNaoQzmaVxaDvv8Evfk8ZDRYxWBxVoXR8d6uEp47bchsKozP6w94gSgY2",
  "key34": "4D4szQpxigCWLsn8ZZsYUjd3cc5WZKRs2tJ13pVKUXX6EDgCUUnbSWuSwBqEEGZvCKKqh6PD59Vc6meZy2MyKoZj",
  "key35": "qpe43ozWSWm11zZMmKYSqY7nZoh2ED5AACQk7jxYNn4gUB4Byv8m62LQwSx1Gfg32SA3GxcoQ1KWAFVKw71JBe4",
  "key36": "3NtYzkRv2feMecTcbT9QM5Lf1rvCxqucARVhhHsbvUYL4wg1oLUDWAkZYQWjEdEBxC86cV8Yuf158jw1SWaKxfqP",
  "key37": "3DQjKML5GNrEQeFPqgvSqzraaM6NQxgYFhCyRxTrRq53Q7s6QqgGFMe2p1ycHV9tHJGr4GP1tfcAEtcg8c7muQfs",
  "key38": "51XnwP2QqbCt5bBYkXTfi3TWTTogPTNKtBcQPbhK2csdDd9LREnnBfGLNRn37iSKNDFSZPupbU6hv7G9i3NgsLyL",
  "key39": "5QkW3SgUEejJjSD9oN1bQJ1m6dx55PXHuP3T1F1qUGxqSekM3nBYWNxpJz4KvzXP67A8mx6Vwe63TctNUmCb3gp9",
  "key40": "39iejpW6HWPjEXHZGoDxSbLu4hHwKRUqUVa8kN71fMCsGZCb8g5Hmo2qwGsPNvWB5YzCwchuFDrLY5KguJDiS4En",
  "key41": "cm2uRJpK5zyXtYpzGJ1GCJ12LhrwRrbX4T6dga6WHqTKBMtUAfdTTRC7UJV2VbnH121Rd6TWeov3dF1X7jNFijz",
  "key42": "2UHt9DwMyHxv4huC5ypohhrQn6fUuXcDZhMBHFRsgDtRwc8DsGsCU3QPXd2umzj3QfzFRGRVRfQdCQpbJLCwFGox",
  "key43": "3ZDUy9pSLV9AUeKQS3avNv4WQFBtbTZ4q3AXtvn22pfNDGfkU7ferteSu8xx72V1S1pk4jnW6pfwF8vEyEcGLtEn"
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
