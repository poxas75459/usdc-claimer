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
    "3oJ4scBZ8v5iMkZNrNWA3gVUH3JUkjhgfNms5D2NazYxKPxaMaQEb1y1KDGN59pgYTekm7sCqPKSYrZPLhxxrWUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4axao3g8ynojqNgYwT7LUDeNJidB1gTyjFr3HxyqKcTkWYo6txKcsrsY8AEPWdz9zjwMm89TxPwCQRDFF3viijXA",
  "key1": "3wqZDj41bVSjS7S1wtLtQoxhTDjfihvGAN6B4XopwB9irJiAw1yuSZ94hVSgryejHsEVf34QkWTApyawYGM1vfZN",
  "key2": "53SWhVKAvcXsJK3vFUKVhGviHwuYuJSao6CMUsBp25r45eeHqPRRmVqios7pKae8kZq5N2xXiUxsdx8Snrvnevdm",
  "key3": "4AtwRqaTnsKs3kfG4f3Jyxw4FJSfLhw43L58bUQbA8JXorisRAHPUk2N6XahGkqMscZPFi3kJUmfduxMsye6ZLTp",
  "key4": "Dr2ztYwv86JCFB151jYhypsm4ZdSwfK9DXSSd8mMqdwTvHhXrUDDuW3tSbkhFBpTH2yBXD6wD3iiGegCWDMaC4f",
  "key5": "5QeP3b1gUtKfP4RayA3NJ1cSncWuhyZbar7mJJ7ik2wEwdaK1Khh9FQX4qCTdDst78kADxnABdyaTPS6vzRA89dd",
  "key6": "3LEc95YmgEEqs4udxMnVD8Ub7ehvBMRQszJdsEVfHoah41LiYenUyshTaJYSxXPirmWUykoVR1aeYWBGkR6EWn4f",
  "key7": "49k1L6Cm1qJsDD7A32BLu14JNJFioYaGTPy4AkvegRUvMLbCEkJdMuHjs6HMEFhEBViBUbCkr9THtCb72wfyRK3F",
  "key8": "3shh23bPK6428jEeC7Fw9jcnSWXFBnHL4b367oSuY2X1CZ7cU61orybCy8JVrLQspjJPF3xSWGtzg53vKQa7pZYx",
  "key9": "2nri4gAbhAhWeUPFpBTgD2LFGtU5JMp6r8qeC2Z9fdgcJDPbxbPN1jbNFmWCy8kLvwdL5K1EKa6rx2EbgcFPLpLa",
  "key10": "2BkfHDqeJTJbzUpLaZ94CDhUzE1uGfesnMRwbUcUus7Pbiuac6cqtKTqa9PuuEz6hxQuZ2C9T55Wb8rGDbSW8gw1",
  "key11": "2QSPuvZaab3HNY67wScehGomToDqBmTQaj5mznXKqQbrkQNtdbKw4EqUpf1hZ3Q11gpgpL4viVbZxH4qPr4hGq5E",
  "key12": "EyK3hfN4xZqnuLGmwb6g3TmeFGkYpoUJJr8qknpZ9rY5QjL2Jy6PGXdrZbWApyWJjajnYobGXiz5ACZYGd9Zqxx",
  "key13": "3z83ERW9piX3mCeK4Me26TuZWxBibDST5gpxY7KbpCAtycKu5fnKrBtDryYVBz64VytXz8PgEj3pUCc7siMdhatb",
  "key14": "4Pk33LrLtQ9uaxiucmsQPRUzi4SPmtNntxLxsVCerBQpvYV9DFJjZRariYmYd2R1eNjdHP6QLAuNfrmTwX65uvFt",
  "key15": "4k24GYft8iTUuCqk2RDovowwu3Ym34vPLfoRgFkDit8WsG75K2p2zb9ppgJu1eZmFpBRgsBMiDRu82uxEVN2M9rU",
  "key16": "3XZ7qhweAeymrprWnmbtkUX3L5UqzpFnKyPrXDuCcMjiQLgh8xRSd3aU2JXZQgruRQTx9gkZH5RLc2QZDwR1DJo3",
  "key17": "EBr98s4kS3gxXjHsaaXr6RnsDpoAqJqRQmyYuHwbGMRk2noxjwEYwKgfmAw5yAPLJVowuXwi47qCmitMEQ86mXz",
  "key18": "4GTCwGUV6ndCJXbii13cxiB15Gx9pAjyA1gHfn4P6XSrkEDPZXzwwpLdycXmNEQnHsNCaHsMZCVaJGqJvnCo6FnQ",
  "key19": "5eQChxV3jP1D7JmmkSnnQxQMGHBwJxPm87qhHsph5LGSzNpr6sV1TFgv4bsiRsQoJTC8n8TL4gMLMkpEXo5chkst",
  "key20": "5Q2wwzgm7Jqyjtz2NQkAnFDq7wXJBmVTsEeRYfxrpR4HChcTiTFNtPHRVed6UTDkdPxb3dqySpfvbNzohtKoHt4w",
  "key21": "2zh9qczyThdTqKL3MjfXvjFs4BfG1YKUP2tAK8VwtRDS8DisC6cWJiVFdyFsRfagE1XkhNxxAaJeyG2bsbTyXcnx",
  "key22": "dHeMZf2SiyZxv6D5af5jCcem2pXATjnPQCPE8zmAcFK9aXPAcJmHCzaTzVchtShS1RBuFVfqd9DgAMio8tFNoKh",
  "key23": "4sUh7se1poZ5w4tBJ4VWPAWVADEyQG6VRwQ1p51cYZwzkepML2yRrCfuexR2inUcxKyez8Gjar9me4B6qhNASpYS",
  "key24": "i4GXsYUxm1oomAXJaLQah9qtMabQEph33eH3zMgBiuRjaxZvUgGP3ENcUR2gwgSybNyFAszUWs4PzkUHuEEvVQ2",
  "key25": "278WKZfBZW9ZuZFJd4NGXQ11x86ernKm3w3C24APmVpftf46uaKV7F1iz82EhuPGVJpknmW7bLR3ZUt6DpvFapo1",
  "key26": "2byWckavzFwqE3XXzt4XcunWme4pfcjTZRsc96SZSDaMcdqgsMMPct5VZX4UaotEoA3QbfVVoAiAa7oa2XBmjPkQ",
  "key27": "3HXKR6AFaMfA9wfSQeYzrAaVSc1HtB63Vh8LsQvxKN469NzQqMd2KiRwYNYWBtmLMREJs3G1dHQq3XM1EvezhuLf",
  "key28": "4LG7jnVcgXHbqyZLtzQG5Tef26VfWty39cb1KNqvEUVwwVjprABq4X2UaoFJDLsKXE6RUk6NftanhTJkNNixGvfd",
  "key29": "2hr3uhfEhdxK9PQzSQ9uBCxHwGR92CwvtJB289GZXV4irQLywdDXinYGjzskJooLRoHsM2erz2Qds5579T1Ek3bH",
  "key30": "2SaCTXptx7TPzwq46cRkWDe3XYeidb2k1ULvBmFgG8PfGNLMVKxBNB4ckf5x7M5MsNJfnJ6sPrUKB7NuDyAzh2Q1",
  "key31": "66e6nVmYCcdmWSw6noZQLbV1QqVp2vLyAUE9oZ5oQgaD5npUutkfL4EztDCRw6Zr5K1MYRy3wvuNuepkjjaz5VpN",
  "key32": "3Tpns4pbRjLAWi9EyPCshZjNBVr9fbgs331VD3JLFUi5S7ibNfhWkwKpuPjYnhAvhpnh7fXw9w72D2DLvnXaMPV8",
  "key33": "3qqP43Xrxoa6ZnGaXjiUKmj9WqFnjL3SSfrmJjo8pWKu7hbyCEGC7P2G1d9r8xN43NmdrPtWbrTjRyRD3KQLcRF4",
  "key34": "2EEvQ6qiMg8FbLbjZCKdiQvxDphT6s9BPfCPzKboxxG13RtqkrcS9QZVHWJeAxRKJui8T3sbVQS5431dojvJzGLP",
  "key35": "3gw7pc9nzqacngncKk7XkdoqLTuGRttM9kubprXsMDin7MqwUFkekg1o2QDgL9Vd1QsjzER8zMUicJsJrWK1PVUA",
  "key36": "3ZR4HTcyVX18qz49doAkWxjD8CuFfwB8xi5rPZNGrptEBLUVZxVo6YhLrmVMdE6is1RQEB4jFXy6zAPBbMsPJ86u",
  "key37": "27jFWT7ZmAokiL7dREKQX3Lsq4Lgfapzn2gfkZjYHRC2SGsj5XBAyyWBmXGMnc4vUVTns4L6C2xYa7W7rHNncv66",
  "key38": "SM3wEmxgdBAZo7AAc4uifwu98yLdncrTTk8UB729X7mqGY5a15Jm1NP4nij7nkDYtuEvsxjHkvREoReGtstDqfp",
  "key39": "28HbfK2HqtWc4uhU7muxjQ2DspgHew578XP5F9vSt3b1cRzRnTMPw7Mab5D1S9fMPkqCQojmihySrFaJE3uD3v4u",
  "key40": "56azE8xBTRhCqSWhNhr77Mq6JpybRA5ESRWeBwTFX4Lv8c5ES2s4Pu2SeKJvs1vgntVyfmRYCkeaif56VpBEmbPQ",
  "key41": "2n8dMoYyL4VJAdu7SftN5YhXKCYiZTh28JbsydiujGBKy35nT4LaDtMybKXVJy5k2J3CaBHCpSoLYhTfi3PbFDyt",
  "key42": "2aHGHb57eHQ44tS6S4CX1yZWQi1gs4eEnEnkEgQBV7LDPtETqGnhzaLwnx2u4ZesrG9VM93aQYUNKSAeTuBY1eSS",
  "key43": "233So3KoFoCKLKCZxmy9jmB2NBhqCAfzkXq7KnmGoJALvQT7qbjrNubjht6ydqpFdeKVBK6Z4J2sHFi2zwQpnFJH",
  "key44": "mnrVkcpsvc1qyCCik9nrz5xiNJY67r3J9SFFt1BGdGNjtNQkhA6TzBU2sfSSt9ESNnqRAw3vqxxL1c5cNUEK6k4",
  "key45": "5C9U3ac8bT7GrvFuRezSty95gPK4iy5uuN33eDxz7LFkBxMN2hrjbYe34FLyWdEx3YBzwvN7V1J8mo492YcsMLrV"
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
