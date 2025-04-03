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
    "oE2kC5hSKmsAddTyMWKR8CV747woSVhkpRtieU9kqFHKjYbHfJg7bHjQRjMfK9mXzuwdoeXazpWB6czwi6vyouX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B55Q4jZkEM3oK2aBmKjgXkK9smBgCgcnJTpnaxFeRNcZDRTrtESeMyBDt3Sg7mCwV2NRE4BERZ3zai8EZ9QWpoe",
  "key1": "2CLxkLymjJqPdqUddPyvULLvzJKEeyaZhsvZt1PNf3V4xkWBjbpkkZcUKtM5TYfrhzLZD791rpmyZAYjLx2XxZLC",
  "key2": "z8rncTfBTzKZjEjxqd6zvTWdEEo7NRNBPYvCf3pqJ3SzjcQWM9oKEw7wyS1Xii6zWUX6nhmBWBVrrTzhvii5nZJ",
  "key3": "fPhp25U6uKwCjnQWPczjgd647wRaKRm7kNWCNvXQWVNRuquoyBYW6xEr8EgTdLeqB5KXcAh33EjkzKRAPZMWFQP",
  "key4": "Jq2RUQhd13iWzQG1ScUZSQgChvASuN3hsrqcs6QDuNgi6WcvxLQAnhCSbae5y1jSrRGc3Nam42Uq2eioBgRHbsj",
  "key5": "5YQDwTLEf4xR89LiFrarnvcfGu6XC6uSAhsHU5vpue8Y2jganEDccSGm5aYPMj33DxyJ7eDk2MGfosWzdWHxax8P",
  "key6": "5jpxPKbfs7byz4QqCL9NgLKyqj8vS7p5L2oVbzUty5RAP2z7ap3LUbjfjMyYzgStvmhMWQfnZNdEBxRiE8NjqL9e",
  "key7": "3gQ698BN65A9GmhuxaQHyCNUeraijziqXm9vLABrPuV2BkM3Vd2YoGT2Xz1nWChaPJuSw9LwQJXc6BZNQ4WCZKii",
  "key8": "4NiuFiDW6gshttNzoss2mbttcCBan1HVDzTtBUgjfWF9q9YyBVJJjJ5Pve7HkMUXPYnZvCLPm3KiN63jVrHMic4E",
  "key9": "2AvaAtMyeTAppuuwjT8rWUc4s4do5cR3RQ7rMs6RpcYeCC9PnThvfNqoxf9JFd3xsyYesSg2ya3A7Lz7UghKzYrB",
  "key10": "2mXvgjBSkVZsF3EcRQTiuTXT5wULcpGAm76fjCR91wE2kGtuoNvodDNVMs2GEzVLzcn6kokFkE8aMBagjeS1etgv",
  "key11": "5GsC8mzw9Jae45FrJTLHCQLRC7rEwGq7hQqgnFo5wGCWLdY8mwbLX7uBSSgVJA4sSVHgXwqSaJcWkwhSN3YZsVLT",
  "key12": "3edprzsZvsPvkphGyYJhJcFWG3DajunQgt95j1TpYARwBQXqKoPs3wFC75QrZA3jPMsmG6dJWsvDzeZrVCJkdacG",
  "key13": "273TGxtXEvtWCA4TDSoF3BSi5ZVARVhftNskveG5jD5Y4VS37f2h5USF1CbC33vUvR8qJFpKq8gegbzKSPUweFw1",
  "key14": "m66Us5iPamQ4GFFm9tb8QsC6DXK1WxXqLXnuv1na12NQe8iAXNGPVFWEcV4Gy2NJGEpAVK5RcNoYAKWCvf4exAn",
  "key15": "mni1gEuNJT7T899cCbirN3Yiw5ZmqMELZmYJA3GB4g6nzjHe317iemt8sxNuziUZoCsmWCQn1f47XaBvDFXzooC",
  "key16": "4hbdiw8Dwo5yVdRHMtYbcfREwYL4egwAzgBiTMzeCrdJ13gBD9KL4jafyz6pcsA3pxbSsmmenHjSH82B9mLkuQwM",
  "key17": "2bD2rZDAfASFyFKLsFG89mnFKFBjkgVU2kYXgXYgjEmGVycbbFvPxte9Nx4TvpXHg2TAwxCdZAfvQBtDaaLmvLjj",
  "key18": "3ramzrucQ1QZCZXPZ8DqmkT1zprSf26qv42bvpFsKwEtQHSXokNJWxLzZobtw2Z2k6KEiz4w77bS3mS3BSGGFJZv",
  "key19": "4qf6risQM5SCztvixwtRKPjEupkcHdHi2sMQhHHsrJwExz7SksWBMxqpVoarahSCHZYJhLJrAWCas3T968Zugs1R",
  "key20": "2ePobvDniE6R2VXbYnA8z89xoBFKXH7cShY1JXAERu5x2ETsi1bsCM3cAJvwbmEiwqMxEoy51hCP81Akvz9hcfUW",
  "key21": "4Xujdzcc7RCha97bN9a18J9c7v6tjc48HpcY9zc9spf9AmU4u1a4GQ5ncjZah2zh2q9vL9vMLqYcVcu3qugbK47o",
  "key22": "5g2tmfGf1qwRykyEm9ePycY2ASotaZGzxL7A39baHwZF14dmEMwqSpa6WUUTpdKMVKv7ie7Qguu9VWAEs8r1axwV",
  "key23": "2cuZ7EWUXizaxGmHNHpidKE6WD1zJHh49ZugN9Jqkyt3AGuniUHJVTTVQoA4ms8bbNvsJiGcdehJ6VtaAVqVidta",
  "key24": "4QfnAfUEPhc37nioGKYxBeskLyr65JVyBqTdkBbx36oy6v5afNVR5kLEt6L4efseUKPujBTXEFPjQcBiBfYMiDf6",
  "key25": "5115SYc9c9zRPBuuPDLiXtRi5SFAhhph4SXiVfzSsZvqk32bPu18ps9SKvQeEgTfBKNA9kD7fYTnrfx2kuAYppnV",
  "key26": "b5SUK3t5ftwU7mEnUFbZ8D2ibyw77uf1vfrH8Y3humjf6NdWZHrFhwJN6GFG24puvh8kKquiYJvtL7AzJNKgDUk",
  "key27": "dRYdPeE4tdxuW2jQHvQ4EsEv6Yiy16P6ZtxcNUZjMHMhoG2Eri8S5uL4GsYFKNVZUHykX4fdH5TDanKUPKtCsNY",
  "key28": "4AHfnNdJCoViPYBBUgiCBdu4XA75ay64dcrtdFJRBtRNZjtsWNkWuMK4YdwK4pE8AL2QqVVMfnYf1XKZUdmA4uC",
  "key29": "CURwyQSDPu4Q3NckfhQ2nXvu6B6TX67Lh66kbDLNPJWuX5Vse1x73hHMkPTw3oAYLgjKRgaw8iYbPsxyaUU681B",
  "key30": "MpGrhagLsZL15u3qXHXy3eoT6qCm2HZdXKVThr2YX2jiAtN2vk6zgbAZsSh1aQ4vwL9vx9BuLpsAdyyZ79V4Lwq",
  "key31": "5XBJifhP4gxmDHXsJZhdskvTKrifDZA7vhUNCNYzq6mcb1vwixMRewyHszCCug4uF3CHsbMtWV9joHCd1H3fPQAv",
  "key32": "cSEi7VEMgfU6oRFMSAHchFHmo13FEf3ki5RqALjSWZmZTJpRvMSjmSJcLgDLAC8ajhamC3gKKCT6n2tHYgmcg1Q",
  "key33": "3TvWnByQuADPvLn4XYdbUcd21h6nvhVYaDGp1jC6UqY4EXZcVCEppcYZRPb7FPApVQbFz6jLAmzR8X1xjuWJR5j1",
  "key34": "5XYDK3rDeeDgDYVqnEYysWHe9Tuv83ynSZbwaUUPFnmF1zaihdVNv9U7ixEGR2rNpaJACyktycGihuYTkAADkrem",
  "key35": "2S6fM1n7jEynLpnoJj1DiVyjFh56CDPQFZyd5tnALeMGGPuzoGSrq2HvxbY4pxLdwBKniBzjMjbmmUJFxdgSXQyr",
  "key36": "51EcwQ7G18aE4YXyDEvuDp6Zjtoq6hi1UpStqhoxFvn125tZJPA6PdhcwwgmBbRs6bBd72dpW7q8osvFuoVjet9n",
  "key37": "5ix8MYeG6RVuf3jgkTm2CX2A1eAeY5q6VaRYZ7domB9y13TTCTUaPk1Ep8ihJcacdWZWKpQfLNrJ4S7LJZRRUEja",
  "key38": "2FM3nASmgN4QBs1Y46seaJKL3KhhgyKHNbg2aDz1SgQV167nWkdpkJ4tXB71YnEhHPppDUnFrN4msQsQ7TUfze1q",
  "key39": "fVrjYxhia17UagSZUJDhbcdFwnogJafbg8ZDw7wVqQKTiMwT62G5kLjSydYwGLHvgtQ98t8kbvUWjeKHeyw4CRu",
  "key40": "3Z5SPUXQMWeT8YDMx6cajkaK5Lf3DXqS9TgVKGCXovVW8DyLoDRU2GwyyZRJcWuR1d4XBYDZC1crJbnfjefePqid",
  "key41": "3MXxgG7DgMUUaJSNWmDsWhg2WuVcrrn34DVT8ZXHpekQwtUE3Fx3CPr41u6tknQ873vPyfxiX7sbjf8epaubvgG7",
  "key42": "5uAGLjf382b2ctELWawFBgn98iKYLaLozfoVbYUEakDHNVCVR1MQhsHHN4Cv86chUgX1AaMSLaTndQajAjBwLwDC",
  "key43": "5a2YKPV9bpEzSAR8sdhjEo4rhKoz8FJ8SUu5mbgmChD4FMnZfKBL6UfsgEBFfDkPHKQDPHNsVVJSMGYyR75bgAqg",
  "key44": "575raEfMSdJ5U2VcNrpURQF3BcEDGztw2aq9EFx1itC9Jb3h6TiUy7VYMsbiAnnBJDqXYDXKDuWLpqTBhNRv4A7E",
  "key45": "3kNDWuRwNUAQNr6KPFArZunduhwKEdZNmiFb6JZGmSiK18ddP42mzGgL2kb4ZT1u9x1ZeX3tyc1Fxunaomemieag"
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
