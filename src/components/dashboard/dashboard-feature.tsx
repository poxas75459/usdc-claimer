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
    "4CH27KcTgaNFNM75CJzh2fQfDPpNLSZVY79SdrSV8nAUWesAa1C26v1gJUiXJzdS8eNZS8cuV5SFKdx944C9se2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FPf4BFV6CTPQnebvJR17YvyyEuY386wYbtzcLrMmWnnZJV7uBzWv1Km4MUEPLquMFCKBTazL6mz2f3Hf2d8RKq2",
  "key1": "4yVNGD166X1MFdhBzxchweza15xMJkxVRx2zURsfQA3UfBw4DKtquzJM9MBrKWoGzu1jGQFRZWBwpdeDRYyiPeR2",
  "key2": "5dJEX7cGC4Z5gGawKBGbRcDbdxEe5LkkvL4sNHoTrcRFPv4W1XccXsUbnMSMGxmBdcCzGjHo6mqPiLYtiwvUMz2G",
  "key3": "2Ha5Tkf5nj1py9yptN7WmJ9dmZ3LWdkxdoDDHVqL2yRHEsLduiNpBzEgxhiic7KhhPEhyqMuNQRT3KrfYTZEkDU4",
  "key4": "5u6jDZAtU1iMH8Ghy1xKKdYjhbzTkywin1xfDXxX8sJBLHBZksJU5pWHJ2oV6YtJkNTb9DNLwbdJkkiVvrEshBc8",
  "key5": "5fa7Vs7zEMBNwnJmsRMn5YHkRHCzMy9VWZizGuiKj8VHthwMV5K1EbePrXwiEVA3Tdgg3g41b3x8fZDV9sBGic43",
  "key6": "25r9f74rUAgMQWRCnFTdUDrnDq2Fh1qzfy9wMX2hEuVKpe89u4pR2UhfRrRbx3BmwjyyfdNecQEfXkoB2HBSTnv1",
  "key7": "5sRBnKLPhfcdUSfUiexB9GwAYNzD1FXZHqPREAu9wgUy3iPBmD7eGcPPu87jEX4X3QDFZThRnxEZsEr3PypgYcE7",
  "key8": "1JYGXuhimuHbyckWj9qXJttmXiNV2QQTqZPLkSrTB8yRNz1ujKhy5jNEcHARxVR7z61Rgpu621TrxZ5rR9k2KDv",
  "key9": "496vyZN7zUupQQvmeRca9oUiGeh7kvZkm3KFwQZ8mupbsi6v3JzAJuBs7CudStrsahHvxR6moED3yW2Lok9uA3Ya",
  "key10": "4qWG6WRGSR8zuMeEhBpDbmZrH3tMh3yEA1xpGQj26gbs93KetihVxBCHeM1onDG9Xvvk9sSK5721k1JNxHZXhFYd",
  "key11": "5WaGZZCv82g9sf8PmyvyMjfvTdYWh5q8HSMTJnmry1cHx1xVUisFQ6kc8WLAQaaymqPSPdaLG5Snby9cfgoowWfQ",
  "key12": "Mk9v49Mmmph3DYMMysLvwru7Pkz3evdH2HtL1VJXYA6S2Nd6YTSoExFqcSmRg2DobJZe18ZciMxWo1rXDJmxhRB",
  "key13": "fUKNnRGDj6o6RfW12wSWPFtkECTPgAHp5H5d5KNWfnGBXniShbWpLX4R72pdNMDYQtdWRMVuRVrUevNUCZsqY9N",
  "key14": "zLKsb9Ycw2MwcgvTxpQxgkWDuQ9Pdxp4K2HEnctGiXu6fWRJbSPWU3AwrJrPV3TUPMkZoPAncoFhkW38nNzhzZm",
  "key15": "4qZNEECw2xLazXi54d5VcMr8DvG98bVGnwtvwaC2Y9J11vaDpS24XWBgttE3KBvMPkxnD8dYudVRtJuc5Dpn8Vtq",
  "key16": "321t6xbQoZzZg4NhNQMDBZVWjg437tugS8coNg6a44kAoR7eH8xyodk2Qk1LH5b9bxz2Wn7wUf1McaPVKsiCemAY",
  "key17": "4cc9fZ2eoHVsT1x2NRFYx6oRrasjbgMp2Qxqa62st6czFvmzjvQdCUUSdX1XmxpSGqyiv3coDgvFW2L4sNvP3nCG",
  "key18": "kgy9ztED4iCkX3EpGVF69vS3GuZNBqP9avjmM31q6K6YV3BVhqMxkGcnKAfHKUNQe1KuGbp7gfHNKQZGzurEbUM",
  "key19": "5k4jRTqLzibX4M2NFdtmYwD69V5xHnck3HBbQ9b7WMyNqykcKcRB7MCskHpLRarMoi5FTGLj6h5KV7h2LpSWdNWq",
  "key20": "5u2ngMiWdShG5MJcnPMUnd39uUw3pRwK2FVxFrSiTJaPQn6oMMXp1mL9semXVYbe5W9gmwppEvSdEuVofJ9XMTh8",
  "key21": "3fZgQxGTY54y9Ui1vZ7nkkCNPtRhUkzURdTZjEA2RAJrHEkrgDGtyHtmpBM73SBTKC5PE1dAiTQscrJRjArXhW7p",
  "key22": "2bhMix7djaHhh4PGynVXQH8xByZSEMSLFY1uaFGWwkZyAt5Hicuny9KbSCqeh3opoSpFG8iNYPgv3tZbfyzeMfug",
  "key23": "23L5pWTdKRktEkyfZ5nUFU8HBsak8QzrDHSqpZjgJJMbPyWXHMJLJhkAsWPSAmC1WmVcHTUTEZka7svw4k9bbitT",
  "key24": "3f4sef2cmrTV9u5EzntosjaRLnUBZAqTRPAp1bHCaHEJQAqc5Utnowyua1L9QmKhzwMpFibXB1QXetbZ6MmNeham",
  "key25": "hGYgdxbvGEfaSsJkDm3JrBdZxpJ4GQPtgNnrv3CKtXwUL4KL3wbczuDomqYsr2F9GZkYsJVJMkT9JMYhAt1BX8Y",
  "key26": "5HHPsJbr6sR26GHmwcZZWkPQSAZooEWASPcmzmfDi7AQVk46CvM1LeQKnQQk3z2Bgb58ihUBV1kSkwj34xeXfvHj",
  "key27": "233cW9i2yU31kYKHi5D16uubevZWJVymZZQkrKxmZ78QtB1KVatunHxyz9iqfacZWXX1ELjjwwTipLpbRRUdM8fa",
  "key28": "3bk2ZSSphSeL8XFi57nXUFnAMagXvJBrhr5hj4a6Np1ay2AJiT45oWeWWUPZnWohEngKiFX71UFsFXSr5rxEdTXu",
  "key29": "cd6kFEMe4k8Axp3aAtt6C8CEHzoXyKhqy9C7W8hc15Dpy8EM3RQsR6FGrJZP7DP1pngekVjj6CpvKii6oiT4Vaq",
  "key30": "5CCsS5NRdFRmbxuvCp2jXyn6mZJNrjx5njGvwDxkXX8sbRTqRGy3kQk7BpLiEU1u5wfTLesBLBT9StgoSH1wVfCk",
  "key31": "4Lrt6514j4bsrft46L7ko1phVp8zzP8kvtKc2x64PEg8nEegVHiLT9dyKgUuzTaVQzGEjJW8s7KSrw2tMqXavsce",
  "key32": "3KE6JJYeQQncJx2jsZDUMBE9TctbusuCQHKM5kBTVtoGTJT5Wzxr3e2g4aeHh6KuqMMnPFahCMBZWJ67mQDdZS1j",
  "key33": "E3AQRkfuexfxbpUYxNztr3qYULk95cWzPkxhZQVDMv9kf8UKnUF6otswVfVdNvVXNGaKi3r2UguvQQH2cKKYxSV",
  "key34": "5RyiY5tQZiWy5hAdMrh78ka5XzQbASnpvEaSqwqxRMfcW84f6rba9j8v5rHYixDBNrJKzE2t9QXMpMLrroKP8TMZ",
  "key35": "3FJFXh785RZCKMaKMhAjuF2ur2N2W4G9Ynr563bd84m81AXf8W7zK6yfvvsfSmZXADpJM7WrppBp2wEU4LPQeKyW",
  "key36": "2HKdc2wUbVMSdNzWtwydiwCHsXKdu7EgwjXqoeXKTMQ2sj8uZ4BxSPfJdeNsCZcgHKsSUDG5DUbe7m54U4RSGWBx",
  "key37": "2UEmR4QLLutEhytw7qvZFx1kmcFBApUR8Uyq3fQ5BjNTs5iXXs2KD21Y5HooEBJaqEuKpy5yZ96ozaJ3CFkZXqMC",
  "key38": "3KCkhLxeyVArHyP7ozuwc7MimNZWDwCEYAVQQM75RdH8YJNRNEQLgGLA5Zexs4GuTiXWS4J9Svzocbn7argzAdDx",
  "key39": "CvFG1z3L1e5NajAS8meWbsufXYDL9JM791oWQfiK7NHJT6CLqAVZAZan8FRsfTyGGvc22iaqFiL1jNfPpJr9kjf"
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
