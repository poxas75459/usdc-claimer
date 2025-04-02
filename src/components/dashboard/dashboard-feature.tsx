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
    "2RKD2qZZe25YChDgABnC5EQ1WWvknjjcS3YsQzPkG1h86uGcHx5QTszKD1BaDEdG1rSTGnCXExeiSSatt6bXnFLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tBz7hhgnSvUPuXdXtKGSP4DKyRtsbLHxP5qdnc1oYkYC8VQ9ATMt4U1XuwL7HjEC2Pgxspq7b9ckNEKy7Nx4AG6",
  "key1": "57XZcVGs2GdaPfwZMcEz1ceK6yw7j1VTKWp6xxLXgmuqBwKEmteacq1nFpePt7mwaMe31PAu4y4zgTUBqQUFJcWB",
  "key2": "4QEaybSGCjZeXhaRKEZe55ziJFWbidA2VgswYP6T97tRXG6a7rRTnUfXDsHt1cajLHTjN8pTHxFjWp4dB9c8mJE8",
  "key3": "3JrFYriw1Tt79hfxzkfcJkpQqBrNnsFRjBKtd2UuszqJuFrsCRC5KA8Tkbs3vsLz2Hhk4jBDrAQHMinEqmz1uQ1P",
  "key4": "3C2oMxPvPm8uFkeN1QPbx8waSPTqhkTr9sncqML47McGAFmurYoNyPnEk7yaPK4ie8mtK4WVETCPyKUZuepeAYML",
  "key5": "5zgd4dF4JV6miFfbDfdN5BFT42mAio87hPRW5rgqipLqdhnnkEk5AAnTRsahMLDn4Tma3wbsnPiAdUuegT48UGQq",
  "key6": "5ZY7dQbyjYPaYAn4i7amgtHLvMtUoZtVJ32TKYNRvatGqAxuDRq1Se7KuSLk2zeKUCju6mSbcFsauJJSPF4vs8fD",
  "key7": "3ZGUyXibgszX1192XTmAXCRpdUBZ9iZYoUFy8Ey9bzRT3HUwrbj9tyRWzztNH7ZTQD6UjMhdGynz7rg8vtz3qVgp",
  "key8": "Scou74Xq5yfbgkbf7CaHD6Q1wUSPmqzfjeUku6AywSdAo6j3ssHZcNG6Qq8x4TP8tywSyFwaS1Ke7mivgyJVCLy",
  "key9": "vYuu8za8kCLd2SaAxDwDU1dXWxvkfxLxEnwp1NLMGVv1wDdMcxsdfboAqrQQFPpSeZfPNqySJDV6xzdNFHe41Fk",
  "key10": "4fsneDhuLhkEiirxEJaiACvRTQoP6x1BZKpAxqjFru8qX4mce6Xtvy2CHvY1gmUUE3PExsbivDcMSFJCiov83mEK",
  "key11": "4rsqfgAZ8iqRHhLvtDZKGLVmeqhiV9VJcKz3GEpaRHMZHyeu4bw4F2imR8oj1mWVN3gj7f5jcBtvtYhAeeuHDgVu",
  "key12": "vq2agERa9gxHb8zW4ieNMy25S1bRMhdadgPituE9oWCp9pwqFwtyJAYHMyrE55bM355pN4x8yn574ocCUaCgPHs",
  "key13": "4JikHXCqWC4zprwA7FKtGersw45jrCAyWxAANx2uEX31kWnRTWUMWzWBHQTefRswapRMZq7h35CVH8ed6vDqi7Gq",
  "key14": "65bu7SiZKYn1iRx9AjzLmMDrMwY9TA7woiGMtjahk94Cok8nGXF24J3w2Kbeyq8imwDa27FWmBptPGyRQu8LMjMC",
  "key15": "5XUVjmeJiEGWAnGYwqVH3mmt4yssA7V96cqRuCAk12LNPBaxtWzXP4LLbpppT9D55E7Kyq4GsLtwm5SLPeTjsRE4",
  "key16": "2MxJ2xVBVRtN9QioYZCy5cLzrB5THKA4LFtdde1SkPJYgyZVWUuxYtxRVinzF8btLP4bPBsNjfs8xuhysbFQMhC7",
  "key17": "3h3d7jmr3XCUCndfSMmxZQBWXNeuyf8hEi7ucPvkx68ZhkBDV8oPaBEcFGrKXsLeCT7VDFMD1MNZgtepa14x1i5p",
  "key18": "5xbMEqp5axbKNfVrUiK79kiQ9MXuoHqLaGD3Zgh7QQv8fCZRCvMTz59rDcRsq3UjWXGqaGHeyQjDqktMF5Su6qnK",
  "key19": "5H36BNvEvwxezXorRkRGpD8FWPCuZQ5KszyifzZqx1ALuH6qr4e3i6ZM5V4tMyMieJNMJ9tSuZos8kFdgzU15twg",
  "key20": "HY4F88pVjqirvs1jL9dijuBzWPJriXVC5TnuSbQtvMey13zPqhojEDkjVxmugVk2F1Lxp3Hxfd9zux2t1pRrkFU",
  "key21": "4gL1p6xYvKAzFWEAhPWh8pip3FeVLzDsxpThUFDgTmBTMt8W45CNMmQ5LbmpmNtuNEe1j8eRRkr3A7ZrhTHXXsmR",
  "key22": "21v3Q8tMu3SHpvva2FZiZLyqZkMDvoXmu86jgbLFT3aWRjdfKG88yTcaTJaSey1YBGEDeysu69jA3sbZbNo16Hrf",
  "key23": "2FFTpEWJTJTaYYXA5kXdqEpcc2wdcF1GsuqXTF3NoqEVw4s1S1FWfPAnSyFqP8Sy3S43jcxZE9kzPuGFcFWDxtw1",
  "key24": "5ePWW9fTzyVGTLpkxebmbNKtX8jDruU3CxXnDxXgMTnZZsTiDssvFmyMmffoSQGCTMpvdudJxus3zSmTbT5jX3nZ",
  "key25": "3oZk9ajvwZoR5p3F5KThm15s5mEbRuzgj4k5ULL5RAbXV1vHKEHXRHxWXWkNh3i6J2GMg6DrFaaADnfDCVUpnoHU",
  "key26": "m76EGEqV4aZWucqvwRe79jcKp8gfJNdvrCGzAxqTjQBwkS3XGLafafHR5WqEhNF88JhpgoV6WkEL4JoUBgZxuQb",
  "key27": "5h5EZaARKKRKo3R6Ky3jvSnJDde9YsF2bfboY87LaaQcA9VHN732XAJmBP3Xh6sFz1tUCKpS1Wf24wutppvCC887",
  "key28": "3EfKnjpBnK8CnZuZCxFWVfhyijXemKLWVN5cst6vf4JRGq7EY2zsHpPdjm8n3PhCi4VvugyQtHy9JXcN54Xt5oxr",
  "key29": "4CFptEuoAVUxkGyJkExJ72TjX7a5y4HjpkTws8HCjpxcbMCiMqY3ecMvasbDhCZbJVDCwVa72y3zU8dvkZhDx52p",
  "key30": "2Usm1ayHqs8tpu8CF7ry2H8tVUdr8YYEmP4zuBeSLuAfoZBCUhakbQjxppLFQsCzkLDeLhvDfPXe2TzgfLzHM7cw",
  "key31": "5feojUazjG2qFCp6PSm3Jf4hToBSk1VATRFf8iV4aAoqTiLQ7WG6RmD6B9RTsC5u6RYc498iVXYkmJP9E6NXiJGT",
  "key32": "2Gu33bEuKuxD3qveNoH4KuTGUs8Tw6iBXDaWBGcTrZjt8QbTZspxGSjtW47cQoUBwgJRU49dzuQvBSUqBhD66aoz",
  "key33": "5t7QAAZ2Dupfd1stgGdBTKjUAhbJa78jDhx2xRmG9fJxbk6Jx738yyVzWtxLpGMfHS4QMwrbGGGXoU7aSpgSCsq1",
  "key34": "3qep5Y9424z88qgPnwdRgyhEx2qhSTSbpAHuQw3j11ffXkNcMxyQadiMeK11vxcwtTn2k3WH6FtW9WqVD6c2wFNc",
  "key35": "4armU5uEkpKAbjmEde1pPVUbA96cZXom4ZLaniaUgKnBNcBGrLbvJ4BZVVkmEegvKyodpwXrETMd5nWiatXcLfjg",
  "key36": "24i16Y7o7S6eAgYTa6A7DNZoLrb3FbEvjs1e78q8CpiZN78c2akwnV7v3qsUUuqVxBBym1YijZWCqvTB2V6GZshz",
  "key37": "5SfETMzpQF4EkZ38duWJbsKCxmUzEbJNtWR5bjotYPxBDy1azJYqxVjkzreKvG91iaMyLev41ooW73ka9F9WRgJU",
  "key38": "61vqLJ1nqQ9Nmz9g2NFFXYk1pk2MrdCuRZVKMnKMUQ6piuKnoteo9ERERKWsovpYyP8w2mXnRQ4RRtu8ArJ7nBz5",
  "key39": "HMSm31Jc1knR3wy4vnuLJVDPBX52wisgGyqLKxijUzk8L4jwFRHrzLetvpFhZBJmvjbsp584ejKgVPM3zXp2jbF",
  "key40": "21GmdG83DLDPUKWMhUN6ejoCfbXQ3VfHBzmoNVmdNGArHPc7jNDYfkGK7jujHdaoyLuAMAMrzdLe31tY8uUw864V",
  "key41": "A8ebH27dGasp7KhH4sJdcvJ5M4wVs6JnzTPncp2RQLJ31rKqmLfwVgCCfA31eiXyN5CJ8RvfLCcQwercHB7awg5",
  "key42": "38ZoWZqzc9FJyeP6WgSE8Srb6jbitfe16ZLz2hHr4iscjpcVrWBWTfYTxqZc23PYUwMcCrFqAWD6AfPa5TxzcAUo",
  "key43": "4kD49eQpK2ra1SYG49wcbAsy2N8gdFW2jhu1R4FdrDMtULDsQLDpqNcnuJggVrx4mwqMNLngmveUix1SkvoRaT7L",
  "key44": "4t1H868zTqSzzpaLFmrFyCE33AFsu5SPmKK3CjLN54za8bXeGJCchhfoTN88MCCgF1UmoadF2RnLQ4QDw9kh6RSG",
  "key45": "3boVjhs1bVV6cPR9DvtazZo6u78CEYqmcLKbupHLukQzDEhjVGG78hYTM9EWyr6dBaYwnuRV62nLSUaVHr4AJsT5",
  "key46": "HFLzB69ka9FZAAgApitwK5dmDWCw5LXMLgJph7MbyhtKsNckBALZJ797JTNJc9xBPu6Kzq5T1aKnQyCNphUvHGY",
  "key47": "4LkA3pTMe1ntHJDgfGyKVd24LehssiePY8ioFxdhLWa6kbBH1UpMzrvpXRnSFMMZMcB6Hd1dSca1gUWfCjM2ykWj"
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
