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
    "7DT1jkGqTVTjwC8HgCU5x27X2pQ8AWTLLPjbhkBUMuLigZ3xib4BYG1p8K1U2sK1tAQThnLR2QE8PQxpVBSdJ6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jNjVa2rjM3euqpHtHYM8N47WybsMTNUnjZfcazvkxstwJEoGbBjpomZNcbZyXf6kLeExyLnRSq9mEGL4LCg4JSs",
  "key1": "4PxLTLuEExAzBZ2qqPF2ZAW6JbvmnLXzcGftkUyKC6JJm8c4TVTeZbBfzdGxGCNFYuNNbVbgC9dkcVW1QMvxFeQz",
  "key2": "qsyV4QZtUN7XKMpMV5CZ8ktiCpQ2RhAjNdcxksLk9sykyq2j3sUF52t1QxTiHC4vmLJuuLngjUnBCLvK12MsVb6",
  "key3": "32qyAPYiGkU5QHe6swVcuybwssK499YmPVR8anXUfe9uNoajzkpjuavw8rShuezWacZbA4WLKbCrHd2Hpbuc5tv1",
  "key4": "3pHPXwrDSGQkyFLmcQVypMYuj8tgW72jj44Zq8TUGKWY2Hr6rnmNy59qAphdDnMgB7cut9DeMsetTo7GspFDBj1y",
  "key5": "4goXLHjMACkdPU4zctmBijF93ZdAdTaVvVtQa5PtgGoRxsMPDBJQSMUjDRQ62BFnPRk7FyQ37PvRn4U4UiLcekcU",
  "key6": "3vERgV6kf12wunaTPVAW6mkSBKrrmbz6JCE7Ctg81r5oYW7yToX9HZns1FDnvzTJN1jTQUk9nkDkUqdZAXcuT1aM",
  "key7": "7V2veEjthe87iBEtsN8SFRo7pxLm291CWX4J4bpsXXDfnRBdQsnxkzZebLAHyDmqih126CVYR2Qhyk1TaRGhHwA",
  "key8": "44tc52DbYSE5VDaVz5wKeR7rEGYXgnhhg58ofTkUUexBdCZnWnE5zLHr4CGL23s583sz5xobFMzhoaA5RSmDMjog",
  "key9": "2JHwBMzPXe4mZkBxgaA8iJdvWSHXemWGwdubr5TQFDJvEKxVYFwLBGAmKqJa63D1DHidS1FrjoLs9W4ryK7qCxtN",
  "key10": "562jPQW83fVbKAR8RdQBemxdEUyBzXYdev6DPPSm7dhWxbf6T1sHYU6Z6kQcrqY7FhyJFfyFDTTfnX7Fmrt7gx5Y",
  "key11": "222AoQ5eHixmCALAYPn4BykdTuzG6jkSsWSnv76JY3FjhKP5PNKm9X2aAsJo5X9tiAEgSgra59kdz2tR8WTwgwxH",
  "key12": "23W22dSUsqmCJadW5EzsS1bvMC9jPUoSUYHmGCfXM9pRZ8HqgSf9qH7HU1hv97CBwin42yHgRH49SsKF6ERooqFr",
  "key13": "5HgXzGw9fWCF9aQSpdwvR3XJrjiowBQcXouqd2BnDxYVACe7zZjdpoAhJY2bBMWzoU9BWJXpNztf2oHFHFxBZzi5",
  "key14": "4sEmVZMa4SpXdFFe91UzmwqeSe2RRseYq6uUVYCAjrkX7pDxyyoLeVf19Mj2h41wgipoxHceDXEf3HhJWjCjm3eE",
  "key15": "4oL2WC1fznxR1Htq1gc17HtWFzNxYSvurLy57wbQEBw9evMaNa79ALXnPq9fbmBRZh6Ahzc8cnSoLXYWmquRnFwu",
  "key16": "3TNLByaMQAaE64SQRq62GjhzsboJUh6zw7RtmXtsC2xvqYQMYDykBb4JSUafiJsa62My48PGdnmX9mBdsEgiAeXh",
  "key17": "5SXpE1SXpEEAhqdkHn4fPEbwXtSXSfjFX26Qup1td89kiEDdvQHXq6CHww6zyEYmtN8oxtUai1hNGHsLiyEaZrty",
  "key18": "fAF2aBcAiFYRrh1q97mnRRCf47iLJVoVyVVv2X3iy9RXvwhh27vFwUyG8RjLWcSc7HGM9RGxXFpcjcntxK6N5mq",
  "key19": "4PmgK42xMVPtKxxJ5ua9Sw7HfEZ1hSP51RDRgBGSq2UMkksPrEZVuukFGvnRt99Nz9UDuSUWv5wMdnmfx5rshder",
  "key20": "2YxY28CEnmKR2PjnfracQvdUEGxWJnBjwuGvTs9KMvkkefAksSErXDovpAcs2oVsgnPFbtkeDQJDm7eprPnZnzKR",
  "key21": "4KgRKh4UA5me4Y5iZUFt6XQZvzM3sJRJqYa899Yz8FSba9F8g59prry6S1FeYhEXG4j9zmXs92AH3tYJ8CGR2g5L",
  "key22": "5d8RRXUc3ynXeg9FGXYxXJtSaEVHADigMwDEP7TyaTA19GpRbabBxJMXHLqZaMwM5i9P2wdFErMXBM7v5ngJa87n",
  "key23": "3kojASQcL9dCTpRjWZNBrnUPUNbBbV15X2hfa89drGh7XUqv9aHjecBeaV7mstR61eLUJPAoJxUt4v8VVwNYGRrj",
  "key24": "HHpPUhJuZc16rdFpvjeu2LwCBvtL7SqHYF1NJozYUsuZDGLm8Dugr8s7nVCdk2DRFtpQR4PUMySEZcgqcS9GT4z",
  "key25": "ab1seyDAQ9rkamjpisyUwC9e4RR7vhZMx42nCPT7cake7z48u6P3bjjG5MHkxEtoQqt3PLwQbdGLQvEPvHa1wCP",
  "key26": "A32a6fQHtNE96YHCUUpp2QUCgvgSqKXFSHrWmTMYR7j1Q4dGhvsBsx1pFSvjP99qBShcCPeCzEdvC5AwM4xgi6D",
  "key27": "3CCMFF7t8Traqi5dYtJTVt7y7cvjeV2Y3ztosHkmjzg4yGABcEbXCqCEJfpxBAa7tRFSjy2bofCqo3DLx1AMLSBo",
  "key28": "29B9d2iGx6fF4vAnsofkiL2MRiUFCaZkER4DR4qRcQmcGF9H78qeoAUbjqiKzzVbDhYFDZpWRmtXJ4qDjLmsc5Ys",
  "key29": "2Vvw6fTZPBGZQmcjyJiq82TjmTJm18bRQR1W9CN7yEqs113ghX5yXmjqirkfkwUJsQpLfe487c6dVqpy8WW1Nooy",
  "key30": "nRdr2rd3hpYtwv3Sjh7gVRhB5k28zqPtt61MsW956Br2cWUwDYJzcbHvt6XmmuXyCcVLRDfFf8uKcHNXzXaZBdr",
  "key31": "3Ehs8rWuusFH3iF3baLwhYWLftzc6dGegoeUv9ZGjvZyCdTPzEtGt8ZQJHxtp7deattY8vUaF7t8suH4ujPBXyMf",
  "key32": "3yVHuLVEknx3mVL4wFsfq1xCaNQYvPZnvuBhAWGTSbJqFpCqQe6t7GYPGgLX926xqwKbt9XRBtiqHj5sFJ8gxdiT",
  "key33": "444Tm1aR8WMtLD79cMkqNrTb3Wh4MjH2dMcccmfmEphZcR6KoJEfggVpxNXuf6CW97CibfmG4crs5HRSBoNsJAkF",
  "key34": "2hgcszYCT53afTeTNPBodg9PCYK6MXXiXQtFfWr4pvqu6yVSef7USFN3oyjG5K5bEkWpURPFoxm5Tknj3xdT58Sq",
  "key35": "3LZreHjfXvJHqN72oAmn14FULHV2zfWEEnPtKdKoShraUvUXp1VcQtw831QUAFFz45SCFtyLhnDjnqMd2ZYVbsfV",
  "key36": "43gGQYLRj3GZVeZH6nR1DNaB1CXU1CdKcNyCJSYV8JnHNtCkDuEb7avEqWvsCCz5MYLQGaiWocoKfzXeHVph8Xt5",
  "key37": "4qNGZ5GCe3SUL1si4Et6xRmWNZ3gVV39EWwwqBdwtLrdnMULXsNaAp1m9R3SHJ99XDDQNdU1bS1EWbitDatQdQwD",
  "key38": "28RJb7cdb9pQ3MXMdfdisYLz9voUqRb4EuAPTMRgbxk2akA2wg4GZAFySxb7mEobd4KsaST2ov1bc1dnwQzjHLSk",
  "key39": "2p7BBs7jTp2g1pfWkR1aKGh4WSjidCXGrz31wZuCTVsDWWEoDakEnxjoNFh4w5kNqwwXUWK36pDUZiHx9y7TU3Uw",
  "key40": "3n7hFgWdjFDYBBQvS8F6T9ftkD7RdS9Aw8jEe3xSEQrhRrzyjPxKAgZKxhvuecfgpN43FTVJxUwvTx1jUJUzPKRK",
  "key41": "5cp14tGYj6dJB4D5kUwTrg3eCkXaRKFvCDMzTZWQfmkxXdMVDcDsPVE76sNBnarvunKAUXhNk5hXWdbQseREvx1E",
  "key42": "5xR8m7iraZe2agmujDyifHk6SkgiwKxDaHNPT1qg7bZUDeeQVoGJ6QuWsVEJUi4x4jUiEz9XZLj7MTwz2HQa1pTA",
  "key43": "3TZArCMGVhNUeJCxQ6ukM4FAzrFZg6236NS6k8DX3DZMLyqoEzN5t91DtQoJzyzSQqQLMDwp3Mbxeob7FYkJy3Sn",
  "key44": "5iyAHyPyu6K5XyezkiG3BmT7DhLxPpJs2shCoNV7RjRF9QNEQxj2YfPTywdQYgdTFkhVz9wQXzWkNuoMdtV2cCve",
  "key45": "58gYezbNXbiyaftu991JNALjiziRBwjbt7XJsercMpFqqEkJ8VrQStpqAU9V8AC67ysi9tVEub2j3umch8sCMuxt",
  "key46": "4fHffRNhVjARAmHp2DDresvZKi99PJXztrMEkPkvbRQpnshy9EywzoiUpcfUX87F6zc5QJKyitEpyZFvgH9AidTV",
  "key47": "3ECzUbJNwExkS7KUMS2WViFF6ZTGwhi1te59pPaYE8PP3czxoBZihUMWK48ttr1sySKn188idYMrh6Qiac1TizkK"
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
