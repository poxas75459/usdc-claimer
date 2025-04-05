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
    "254yEX9kg4jm1Y4bnDAFKQRZaoLXjw4a8oz9qWmfq2xrVf6mvym1LS7k4vB7eHpy4wmp1QZ8ktMVwt1SNcqQeLsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32DgBdJMayFTBL3NkBAcnzSfABjT6Nu4cvhQrpmBvncrsXJZsKx5crvfXXBtpqP1oTBDF5ZPs8z1Nps6tvFKFhiY",
  "key1": "47yUQYm6FE8cGKuZxsHrxpqJa76rwPqx3B9g5tNLvTpkBhzgdH6gHJMNPqHfxhDM8efMAfZcWUT47DKCYXxjfNh3",
  "key2": "66nnXveAfmF5NDVPeqPmMMkdf7x5fghPrJeWZd5tf9tespRXY7HjMVycEp8typ6xF37bDpop53MzsXXeuLF4ZEe9",
  "key3": "2rAB2Q7XMRcw1GjjvgoFUmP4aUYeSAFGkqzUM7Apkf8EG88RvWvwpGMGAvxY98UhseTb5CRFKPCwt5qBbkVkQd3X",
  "key4": "PCxwTpbXRegnRgrnQezUSgZ4ri57Kxs9pEy8X5Xv6Tm2J73NmoP7L4mjowsuzxFbSdzSvNLfiQMToKYXkFmVjgJ",
  "key5": "4FrcGKKcnHpFp7N9wFEWrLsuq3hsyFtiBvcYY12Cpo7F7nz3SX3WArBgRbcVcsJGTjuvwEboyLtG3QRLLKkdYenu",
  "key6": "FPWvbSar5jai1wQG2dYY3GqJZmPENDKBhzjdSGHKYE6VFHNf5e8ZPs7YQQh66zJRzteHJ3vMCpELGzeuWLYE1tj",
  "key7": "3acTdBCAeBHEDH6ZfnmjvBmWuTd2TQUGHG9n2a7DtZH1F4VjCDC6y3YPajwCHTpys7dYGZ8QENQBEDTYMWXX8MrQ",
  "key8": "4oWkmqqUtEjVe4vk9sriAW8jiE7tWJXqHKEjNCDYTCGyBcThaRwtJ5Y84wohdv3q7bbX1SbrU5dZu6wdrhSB8N6h",
  "key9": "3ZkCAbALQkiHDfq4hFHLKHrGm8hfSw4WGZ1q12TR56qcamqKXVUTcxnyfczezNnNXareNHJ58yq5FkX4KZQ3KryQ",
  "key10": "5X4RZ6HNKP2MqNui5eHxTMMLyJ9zxur2dZXqKvEm3HgHQjexDDXsMu4tNCo4x8ubew6BDvc2a4s227q7YeAfgiCT",
  "key11": "62Z3Lg5VMePYWNXJDoKBxB55UnxiB7DPFLdSSEaAj9fjqtcDiiBiGNRm6YV8yGPbmcpQvHMXDYfPfxX6G27rRKob",
  "key12": "9TYbaeF6rzQqoeHJT1bhYCWhNvEbJqje6npjBd1BBJcaZAG3EZTpi1iMfJQKWNBtRy21JuPqsYPpKfJeDFtErQL",
  "key13": "2A37hmTiSgpq4kotjF8NmE9PUkREw1mtHCj4hmJpor8ZYuBJyJenYgL18hadyGGk7efuYnoMKJ1TBaUvuGryB4Wn",
  "key14": "5W62JP85Z84YdfHucagkyFEDkjXU3uWsdPwXVZyeB2Y8JJUMY3SrdCU7jDi8YBaCjMUGHF4ha5BzxPFneKTuz6Ne",
  "key15": "5NYGVhPFcgpndR92VFKnwmSBUfGT2og8CBWhjg1DutdjcEJUBFQzD8ZgxKD5nPBMMUYSgH269VEX2VTteiT12mLv",
  "key16": "evzhWXDws1WvgxZSLCAQVz2najNYNKsb8fXLCqyixnT5pNvfV6bq8Mk4XeSPRAA5fvqA6n6McH4yxgefTfu71Ck",
  "key17": "m6DF5ZW8CNES6ZMoeXrs3DrXHGEqqgADTXmnRVUsfQNxGF24JcHeEdbLYZEaJRY6PjaWoznBSaarTQeXNrcomPw",
  "key18": "4snQzyEpomK74YsMCEoxECYufyccV2UDoiFW8aTL9LDNyrpKYuiA4tYUqBwAcbqx9jEY3Ub1jqa1N6xP33TkJ2wR",
  "key19": "37PBXPhpFM6yq7UniFmPXU3pMVV2PXshbSZmQb5eWu39xUbwrgRQFuh8JgzTdKcVDq9wcu1tQydVkr3CFZMw5AYW",
  "key20": "64y2hhL8fRehGsbkARGNu76MdKpbzndGSea5iKBWVQMp1b3rrdYRvayWDE3gE8Ny3BjN939xzGeGXs6GLN4m9dLL",
  "key21": "4X4gPnhq4Db1j5pHZEmsE7uGhRa4efoBexBWfCwgE2zp3kRXvJV2rwjATGn3RxzCaptrZt3H5N1p8Qofx2wWFg8h",
  "key22": "2YosyTSf5APvJ9mxk4X65t8fDtXS1eWKFnmsSzc2ojHYpe9EBR8RqPgUpuzRXVshveC918XWxwhPcBxzsA8xpRox",
  "key23": "3fiT4b5XuDCX23MQxgD7qudMw6wE29u3YKcAp5kBrZAtbswMgpdt61una9SmzTXcxVJeztH1TuQ5NZUrjv2NwaSV",
  "key24": "5X7186mA3JgMP8JURhLF7vjRDX1MVxwbqhJhjKRU1UYRpCLGCuNUXnEcCt396NDVfhfckLbdELtL23WPHgnax7p8",
  "key25": "2G2KoqZiDZaWTupU4vem2PYL1k8SrsPEJdUHFcgy5iWsQwBKcCD5ar6UojnN1pE6WrnqnUfj7BXxaJbgm7C6cfxQ",
  "key26": "3Zhns2ofuoZbFDQ1rgXfPYZz5eDfJxn4aYwngmfNDXTxBRe6YvXH4uTgnHpWEopMnVq9GiSmRrUdfavujaTUUTWN",
  "key27": "3jduwRYJjxcJC3oFBdZ2ZqoyeAQjvJfWFRfye1tRfK9opTi361sSQTPCCrV1gCZKcdRZEH6vSPe5NEWdRpRme1QG",
  "key28": "4eqNkjtuq2o96YteGemZurxFopYKbRmmRxVvaaviyR4HQrnmRdspXnvkm5TPVZ5NEhMBtiBvWJk9QAwYYxsFtfrY",
  "key29": "35JRHWNQ6AQvbzj4eicKs6uLnRu2xVVsxwLgYD5AQd4w55eWZrLdmVttMHhMz8s3r3F89QuiccpufQRT6pLk9C8f",
  "key30": "5RoYQzfj4SJTvrtZDDn8bNjH9n5jvRx3WGEsWtBvDDK4YHhHgsNh7mMogTYTMU5PX9396okhs2HjH8AKW1vSjyQk",
  "key31": "5CjUqRHUGE9sgAwRyjW9bhQZhDSh7eiQasQtFYf17rtCmypFENubBzS76gDmno9EhawHUqyJTT49X23dXJVg2T2f",
  "key32": "56H4zDLiUMD5q69qsAKNGwZkLKGq7GrJJVqP5UQbgd34apMpF6fxeBKm43ErW3BmzkrPd2uQ9jZZgvLTtBhoqh89",
  "key33": "5q5dBT76TCh1Mfn75i7C3oeRTPjnScUfVvLtNzvHjzBCXQwDucYy4C7tiXXHyuZLxsmkvH8WvguzxF8iQCGSqjsz",
  "key34": "5jytTEUuj2EnxHYZbHSSh14YTZTYUzagttmMsZ5EQhVsyvGzmkeN47hYsjrkso8yMQS3WMnyRwJ6Y2y8DSi6ton1",
  "key35": "wQPRJnTQECxmf6tKAz5kEhfsDu1GGAB7yxw6Rr68J8cGsv3zmgTMLJTWrBmQ5C4SrWfwkYjUdoKYByDDLAG92hz",
  "key36": "4BZd2Ykuigt2Aj6bwHrSKL2bQyJ2mSn3K3uervKPvr5cMKoADpCnBKhdMfxQdEdeMmydtexzEoNtgmh1kT3NxLXY",
  "key37": "3qjaJ2Xpp1BtTnTmEypQa6ugvg8ihGpUNNp2gGEXSbE1jSNSHwwUvteJqnAC9L7AMoJs9T1q2mdwu9KbuYVPy31T",
  "key38": "65X94YEpahn4uppwkT1rUiSvDb6aws2gwPbYwDrs1H63igPuZMbEJh1JHFYUaBJCiJnUje64zA7wScS4iRfd2w43",
  "key39": "2K1B8LgL4sKNCJ9CWAaWi2MqRxmuu5vLmktpXh39jnoZ6MB7mBigzkqoLd4Kvprm4ac7Yj3CSKd4aDUm4yLG74kq",
  "key40": "3oMR9KwQXaAbxoPLwVXhtKQ7TEBDfeK1W9bGryQqqUeXReuir3NC14gTzDMTvcYyuBf4NyT19CvS7oYr9wVttLnw",
  "key41": "3BgvGqV716oTuozJdXefkXeBGNXyUA1RZfEasvytbKU85ZDoSpGFsLVJeD55kFCiTSXWXefA1Qpt5tzhk6X85pxR",
  "key42": "472P8pg2qXbgSxJbwSWyURXzoEzSnFQppTUr6cWuVF8zMnNv2mQxHvsR9EbLiMfdc4ypanaznDEZtiiZeZbZfTpz",
  "key43": "4KsECSt3cxupqcPvDd9Ro2eYWazhGRBYKQVLbrUv18T4jLwWJqaPHTKupooQjAaY6eY3uyck2f6g5KyKNo8f9N9a",
  "key44": "4EYJA8zDGBBMuczdD3o88E66Gf8KLVwFFg5WBSUanH2ZTinvDoe33eBUEqqSEyGyt5RBQ1aXkgx2Ruf3nycH7eQF",
  "key45": "2rDGZHXZViPxExt6zsapW3UGrYtg6DbuPSMA2WxX4oDcL7HpRasXJkf71SXPEswNH9hFTSFgL63jbxHyZPXu6nDt"
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
