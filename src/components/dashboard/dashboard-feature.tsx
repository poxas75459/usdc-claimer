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
    "4G8vECC12uEoRvQTopLU3ACwDpAAam8xgtQibSTnmyx7hAB43H6m9cFVLD3VJbt3x8kWGjXtjcVTr1EaNpdrbHo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cwN2yVM3yZkGpze9Ap1KjJGHfL1SiUE7WMC9maWnJ67ThqBCun9RJmcCqb2oKmMxgFivNzq9ryAvo4GMf7Eu6Ar",
  "key1": "yMDCEXL7raoGQk2KA4maXw6maQHimDYbfyDKo9T5vA6FeQ3SASJ1ZaGru5ywkHiv8vvMf1tMkmbk3kkiTEmYM41",
  "key2": "4Mv7CfmbWaBhEGzP4W5ZMd2hF5hmAdxRR8KXxQgdCjZpMu9n5vEFfVyxaYhdQpYmzfUNckMFHKpCWoSz8FWAGgXK",
  "key3": "3fLsh9wDvTjo3bTZWaV9UwFL8pbsRPfwwQPGMqTPUBPhNnBtS1Evc7xRYJgSnNuyWt3poStV7YADRBc8ddvGCrdG",
  "key4": "2SPGmdjexztkwNfduZ3bBcwWk4xkwpbVkARuEyd3xsH8kBWn5tFsUwBs94g8a6rUangpHbiKaCDFJuhPhNyFhZwE",
  "key5": "TN6i7s5XJGMKKmqRYCJ9XXW4cuSXZUrNNqzoNPC22kPKX7Ep9vXaks55rzsDFhodvvoQHhzVjgoSHHF3a8dTJUh",
  "key6": "4azExau9b717V347Yg7hzn9hnaBVdkfcugJL6aYr2S9bJg6NZ1jC8qgKrWBxxNnuuoYnNdPbQUzSffwtW2aLCvLh",
  "key7": "5dvUweJrYnZsXRLY7qnEnUMEXpL6s3zAjqqwd8xxYTWXZCux9M9inoJvGkj3Rz69VpbiJejT15NsLW6o4gbnhM2M",
  "key8": "3Yb14BLudYtCVnw7vFVi3Ku4pw2aWkpiHPuetFoj1dkW3cXXdhKauMXZ8LwPPmedQNp56vHyjf8tXYsPxqUMzdGX",
  "key9": "2mTxDdFEb4wTCt1A8CbJzHr4h5Y3FcVV2C3Tfor7aJgEwHHJD2QXUzrAFfexg9bECMvr9uNRtGFzxGRxwY3MKjXk",
  "key10": "2vX4Nn2Mpu1MZsEKyJN8joYB2cctXHy9fMQeM4CyZSde3k14S8VhZzNq7Su92zBTKNdezUN9jwW1hkmTTTXrgea9",
  "key11": "RqrXAKt3nu7vZd2HD5irMkFJ7nJkBe75NrHPSRuwekVMwksmuxkQGukZe4EPAHoVcWeBpedLwWJucbHWE2bdA74",
  "key12": "2NixK7BuhShr8v7Zw2d3LiyLeio9rN2drSrLo7hLAYacP7NymjjGby7qThkybYfG2JBnXbFHXF8UqgL5pnHD1Y1M",
  "key13": "VksfHdG18cajKaRFGbVrU1zfiTLR3gjxYVfHSMqYVGf8Jtsa4gcq7hFyqFR2XeAei92e2DxoFFteqCuFZmGtx6R",
  "key14": "39JpAqkrXLogduKBeE2tobSYdtNtY7tFuk8njzio2qJpYHfvUrTnbjwMTuERSu8sw3PakBzoUhWobzZ4F66VjVnE",
  "key15": "2fehGVQ3BXvSy1vE51nkEsAtWi8hGBSUACht1zbZN9EXK26ZJNQBb7HioWtSmvbL2SmCXPBrNDHCFo2dz4h4VNPY",
  "key16": "GFLewvgAhL44NqtEGt64ZRD3Sg5DeRdEuPBjeWTvvuhyFYLsWG2ENb3SjazRmPCC4uAGzRXhXsDf1poBRwowhCd",
  "key17": "2qxUzCXfHfcRmaR6zDunTQr3mrSorTskQpNe4WaGdYc4HuyCv9hmBRbT3YEGq1PzKYiyzM1hB3LxtmVwVZi96BdJ",
  "key18": "2cqiaSjXa9e976hBEdCvZeL3zoh4dtpJGAMCR3mSDRZmjujiiJ4tTnLGZuu4DB88N6AJtsYC14wNToD99BwNKYoD",
  "key19": "4YGPJKR9JbvQSxfFeSjXTGd8XT8yKJGzBbv8B1JnsCUWkbP49H9Gdp5sfpBcAppFZCs1NtQfp4ePCUXgxMEV1q8f",
  "key20": "5UAsvBmaYwpcQYc2Huk5sgxEvTJpHYbGyaD7v1d6jHHmd3xA9adRHNBhUAc8HeRJx4a3WKCpj4Q5hDpZjmQGHEj4",
  "key21": "zjS9ix22ZoEKHLSb7baoXWU8Piu6btqPkTuqFxQJ5MTH4d6uwPAegohUemzzcn1PUACuzqL3KJwk8Pn3jmroiHs",
  "key22": "3QrWiV59r4RBedmoPraZekGh853YmjgLQzbkd4nJd8GLmfweoTjBbZ8ZrSYWaxjySHsJGLSfz9knQoRzHcMF4eXQ",
  "key23": "2NLwrdiyBVDYruDWuDYzK2ZoYrrFAWZDwz1X2PJjhS1RGh756StTUUmk852F3v5ovSeYvAiCswmpzQW5hq1bipij",
  "key24": "3A8gUsv4PN1FUL31JUhhdd9XBKSmQ5fZ2ZKYwcXgDSduu3336VWyEwfsosdKCcrxbT7Ass4oQojrTbEFafKKzZrN",
  "key25": "EzZG7ozsJ5pxCo5dZeMMdq9eZ8LZXZK1Z1j6LscibAEPfaJ361CKTxvDV7GcrtSjUPz29DxxUei4iwJybnYr1Nq",
  "key26": "2FZWoaeRgJtj2SME7iUWGo75BZ2ndJ9xoYATnLyNR743tChWe4H9L6TbixEQJ91SxrHmL6mvE4FAhLGfETQ2EPM5",
  "key27": "FhJQw1P5SA4Qyb2CFquqiwKZWXUPjH3BrvsPDmqHQvV3K8abcTSGdgcMbv5JbcuMsgMAXEdrcuoht3sLrsW7CnQ",
  "key28": "2H6fiFiQsBu8tUyoioMJnGEREw3yWxuRnywik63XebeUMiWkh9nTo3vKGYvCNrtcdow8VVF9wTjszVvyJW2tXn7w",
  "key29": "3wQLcijDnCzzHRyY3ndtcngbRWbQR2PfxsxoCgv3Y4uGcnGBieHm7nV5aJSjMNuQSkQLGKsb9v3Z57dbFsqFEU8o",
  "key30": "4QxF4KiY9oudU3Bzy6Ab4HBKQfgJzhbpi7bLbGMHuRZGzp33pn1PJmaiEX2FN6ENWdorfdQfa2uV7L3zVmvgYzwN",
  "key31": "5UGVUGryjfrQ6FoJ9iHRGZeMkEDkFtfuiEtiei71YjHyXwULq4gKJefyQuvVKA8j9CTRTd3pykhTS4xsoXSZ3dmE",
  "key32": "311DuLnWY2DXkx1JnUC3Jo99FPqRjdc36F9TgL8kD4264rr2zSbVVSkfLcK2JK6DHC3hLHadmNWK7yV2UieDhB3K",
  "key33": "3af6JdkwBxpF7KmY9jHh1nop9kPsi9WtPJ4tMeVjhPqnojz3FCcKkkVqpDf4smZeoKBZNnvr54maKM3JQjYL7aoh",
  "key34": "4dTZ7iipXrS2pKFfGSnKc8RygGBx68FyUgRMLxJUkhw4vkv7JwzdQTMzmAr7LJWPrsUBngnM9DbueZ1qLfLUUgfo",
  "key35": "gAnoNbA7bE3ZtNnT4pzbho8wJYzzYkhjiXGVYapvY3cVPEr7PKGNZprmM2nmjiQurHK2THZff8PaaP9BULicgM4",
  "key36": "4C2QSVjHPvGyUuM7xN3LWCNJrrXBiRS6hahcbQfiKAxqSy7TqvDFKKNLUaS2rTczLNEuH1au8zk9i8A6Nn8h61KQ",
  "key37": "4EJxrYDTEbmjQNMVDV4v5wv9KPdJ48q56e8qzAcSE61SMU1uwLUTX1AdSiHH2mnMPJxoHbMBP6FpM2nywoohNjuV",
  "key38": "4wsTk9RuTevooKi2UogiNnTxqgNrrpf3h2p2zb7DDtYfrzKgpufZTEgvWrswcX14KtoCEXd7S3LmJEVBNcgTVXms",
  "key39": "2jgJGuoGkutAYSP962fXM1Lind9FcNNunp4Hct2xws3EaSYMbceidT1XqLrEas8GFNp3A1TApFuojLJeQDGUXBTn",
  "key40": "2uQP81qeRzZbSc1FpGL7GidWTVT2frsSW4oubPzBpRGhUu58MPzbL3t6KrnBuhu2yrMTyJ7H7x3bddbwHSyfLNKT",
  "key41": "2jmJGUMQsk4Kh8RxzGmUgEjYfqjRphBmW45jEBtz51VqQbJBGNRDzUMdTgBtVyV1TTmqMPPbuo2GpNtPR4o3zqXs",
  "key42": "5feTuYAKYHhLdoj5tAdtGoCrRvFm1HJJTMr7hNRvLdgH11hWrKuLhbtvafzcAhsJzjPhKn1nuKsMu6AVKvnykAg9",
  "key43": "2PX2ptCdrsCS47SCLjZzFKYE2j9s4SmCsaXModiYgcjPGPAx6mMmoAW5kwWJiuNfepnXSkLhpVBxZR7g5L1zP8Ua",
  "key44": "51iFTQcVUxFHeqRRdiBnm5CtbdpBi2oenVCZZeRTmqSCi6bfG7ara1WXZEM6PEPyhhRiMDu4eFNnB8dMMZCdUWpg",
  "key45": "639mZVTt41Cn2raKTq78bM9zzeaNwfTvVy4fPNMEdgtUfGSwxM6zSV6Mxb7EJ7HwuAFcMqbFLTAfrmBab5fDu4ex",
  "key46": "51jMyzP3umjp6xwY5GMZEKrAYm1LvEAA2z5e8Qd4wrSiA2seHeratwWVBHZhSnDdTwFkKiQUunjKZbi3pXrhAEf8",
  "key47": "2mWQvDy8DSV5eZCogYsWceoRRitkHqSaDeeYn7R4vj28WNFgt6JN5SPvdLidUuo7J3pv8Mp3v6XeGLQbVaezNMFL",
  "key48": "61TiSgziFqzLc71NZw5pv93AVNyMoSjSMGpBw3AXtEjGLnenUY2GSVQbKz1H2ruZ1YHGBtE7F7GEP8rsi6LrxD3v"
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
