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
    "2Uwyh2oZdEmW6tDhSjoYZwrqLEP5GQqAqFjVhuTpwecYoQgsR4yGn3yRoiRvzW4fZUtw3U7LX8WmqcacNidg5H1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Vx6B3hV5idfvZNux1zDwLvzT7577chA38XDBKE8DhCKGJggHZrVyWmrtGTiLXPXFtrPT9WNh9UermoBeMnukuY",
  "key1": "uv7oNwgRUBZNnuvwhUWkq29sVvwFv2sgAmKUhAZL5es3FTUupC4ZdsmQmhqpm2tVxVgu9HkELQryvnWVoK8zBGb",
  "key2": "4TEgi4oR5uFPuB1uhLLMexoMomyyTCLVfs4FgxKfAuMULqtkQCgmG7AXzMheaATC4CaRVvzvqcB7tcTGn3pSB5un",
  "key3": "4KaRf3guab6EbiNuG4w4fC82yrfQtdig9qdQwcPfxUZnu3ETnteUeroHXn852ncv43qVhXRy1AX4A1bGm43pTCmH",
  "key4": "2U5d9Fo2jyZTEKhr1AP37JM2ZsNngnbjTP7LQXAEG8D3vsmKGT5KVGrjdWpczyw6ahnwC83MfgaSjUd73BdENjKt",
  "key5": "2jhckeavDNKzSTuUc84br94pEfqsAjqUHazLLBdwZbXrLCHFnL2yG7nVh6cHJThW1DgTTzCrDWoNYqHFqM2ndeqM",
  "key6": "5V7C9xhpVNAoRP8PLVZDpy56vdXpJ2vKJMunCngx8WswZJrTwF7N27uLBFiB48Qo4wgEnP6fnuGDwf7Sha5TUQgU",
  "key7": "3c2brfzDEZFj8aPkQeTUffGiqMPHcUwbCmomrzaXj48M5iDDor4Cu2xdLNJKuMipz9aj2tM19niPfVRrJyuY6xDM",
  "key8": "62aDaiRhWu8T8n584nCNURRRpRuxcyC83gpxkjjtKHtxVpcL4MsGMgt7AVSqwTyLfaMRmyGCe3GgD7KReVBjdKDZ",
  "key9": "2Wn2mfWNAqzxaDRLXLuvLiA3SM6fUdUmF8myEwaWA5tWU97zffSAEazLGuJFzJAC6C6P9SeSVQfFR9U9veEK8Z6m",
  "key10": "4g2S49GUFLXGe1S6moqN6M5J6noC9zjQA6xr1do1GjXH9iUL2cxs4a2oUrTjm18oTSM3oXeuuzffdAP4AZuYPrAd",
  "key11": "3zpjfpJfEHKrf2C9crHpw6D6c3YSYVTYp3kq2eg46tQcPYNis9gpqgzh8nwBLUg7vnJD2CCvsWFEyvLM5duTh76H",
  "key12": "2QUN7tG8diqeJXDmgkLkjgeqrNsjVr22qxarAjjTbi11wUoLVqTTvCvf3ZH3MTKtTJ87Y1QGr7dsNFKQvaaSxbsV",
  "key13": "3Kjto6CDEQWPZxPMaBT8ERGwfPifgNAYt8g5FoF9MhjbuSzfwsWcBFUvFJxHzu8u8XRCDEjHnVWmYaW1gfEeQh9y",
  "key14": "4chAP4jKoaaGUgtsC9nQpFdweyS6xJaT5xpTPQWXuGtkHkPSCJVjoNh5ZfwT8mTy5fRw4ZEGwD5doQPiBUZgbYdE",
  "key15": "3xRVSyFG68SjyiFSv7ZyhfsLdJDV7radiiGs4s9Js5Z7wSqQqBwKxfvJDSiPX4kpFxZRCKjznnQpKFStXqEDTmnE",
  "key16": "4YhkshwSopFVwaJgsodkif7Sc7bE2gbhgFt26Fr2ZNxw4vhL5sU6fRXnTTK4frNJuAAbB89f7cCPJDP2v94WsbWN",
  "key17": "zZVfnNhvgxafpmTmj32xT6ccs1iu8m334rzitsarkBVJdeb5mTXscXyT4FFsJNGKZjp12xc6EQFJwZu8sy68RtT",
  "key18": "m83DgjamhH9nuH7g2ydFZsLZG2gFt3Gm8U95yJtB8MbnqWZ2mjJFAyWcQ7MBnrTAMFzNm72h4WTfGu8zokMACwW",
  "key19": "5pNbPnzjXECPtiFcVGFBC67Jq68aZ9NPRcUUg9rjWorvTV2vANxRfJbi2Hr1Ue5xm7t6j9dUBHsgEomZBFeZKBnW",
  "key20": "4Dj5FWZtbmnDfEphhWU4vQPH4d8LfkD2bqxTujFCvNZNdEWqtMmFhptuSiHyEx3CrMGgp1hVzYnUwwfjYPDpsB68",
  "key21": "zetjWiZJiarHAcknjuWgS4UcQtuEkudwmwMqDFhXfsL1VLPwkASYf3Je3RA3aVqMNCewmMm2F5WSkSBkgrASvav",
  "key22": "4vD2e3iRUjjkr7vci3YJadHPFjeydANgmo8jzVNRExsMJu8RVHGHnwmd5YDh4UeeVABf44LjJW9kiybGp72rbG83",
  "key23": "36CAUs2PJS69CNztTDpcby64GPdaZ8CMF5XhAq9b1TRHRjyhzJZkaXWRwFoSgx8tCYBedxf1cXHepoFgYnGuX5sV",
  "key24": "4bMMfp716rdMpXsUBM5EsDhoDP4AhZmuSVK7P43e9eXNqB96Es4KEAPnQY4q5L22Nf4UU3ou78F7iSnWxiZF4zUa",
  "key25": "3D32C291wzjkbts8S2YRZa9wyBqZKtayM2Ay3WHHSvzEtGhEtjDdE3r8dE7QFjqzcDBFiWfuBPEBQKCfqa9VHa53",
  "key26": "4WaFoxzzvDFamV9LXT97MdtuCWWHvMx8Z3HKNcMq1RiUVANnr14x9Njqu9orUg1iUhhNDXKxAMaVd8yrJvZyJqxV",
  "key27": "339xmQ8RQXq98Fj2hdtddsyYAPAHxw1R9s4j4CcorShifb3sXnvRfpwSSejjN6BecTxUpzjvG1a5UKYmRcT8xmTw",
  "key28": "3vwEicnJs8h1u8F7H7rENfbppkSTkroFEKmZxEQ3PeJACdYM4yS8x67UrFPA5wbnraKAzwBk8DGim5bzM8Uf7tgF",
  "key29": "4SGGz2o9YTbXj4iw2SBhzvVCyyTs39snPThtRRpuHeuLWBeAGDc3wkEHkZWE5tkV8ArgVUTL81tZa351JpaVoVHq",
  "key30": "3dNkssmN5KngEjpEEhP2vrLxzcEZB7tjJpKbnJAYzkREqHrt7LiGBpSJXNA8YtTh6gxzV2QCYydbcAVNMUV36Ada",
  "key31": "4FXehbGVFxjCURvYooZYje2xyMbn24a1sCwEm5cJedZJoDbBT7NY9C9ixNBUC1eeZudVuduMAW5zGfSKxhMSfshK",
  "key32": "3mKPmwsNpBr8XTv5VBF97bYJgVdi2PCPtrvfkXtAMJnLymd2z8PmdJk8jLkZCbbbQjb5gwc9bDwyUXnL3cVVTWW1",
  "key33": "jbw1tQ4jKYkeYkW1GdXsrjv7vkbYw6j4wr28j8x7tvQRyyGiLaXJCYpRYM6VVSifqs6QBPWuMDk2kXThgGPiB2A",
  "key34": "398C7EbHDStq3o8CTVt59sebdzs179cLhFJnTjpNTqHrhk7VfUzn3zRKprbUSjM5K2RvvbATDme9nNKBDqxQaHgL",
  "key35": "2YUQadRM5VabbnZ2g4zyUDJ9Fr8qHgZ4ndaMf9kLg3V28XDCDCu9169D224eMxoASSAcchLj2rrECc9pmawxAnSL",
  "key36": "4xM1s1ix8xd32n913vgBM3CcTYvmRT9ocZaETow5M2XALwNHYLJTCiR9XdnptTzPEbc7yRULnGnZZ8KDRLPhCpuT",
  "key37": "TTEQoS15bBN6giMjXYeoNmWkqjeBzpxdJfbff4rx9dufwh5yzvhasz1t5eqRT6x399bLhY6GpnoyZA3VWXKKM2W",
  "key38": "2FtdoMMXH5gDz1Lt4vucMrf6KpXEDF4JkdcK9HTEAUmyQagW7obM8F4rJgLhoBvf7KnFVKJQ7X5usnbEppmDwUL1",
  "key39": "5QKYNtuee9sXh2GNBm9QFkzea8VJAP81a6SVJMcZhWBdmetn96wumpC4MjDVGNfva8r6btdYvJtbMJbv6MztkWv6",
  "key40": "2uGYHBceSsxBCqN8xJaXwytw4d56ZauT3wC8fLGe68iit6XN4sXp2iTJu6xMDPBS2gj6R5MHkHcGGdhg8VAfeWan",
  "key41": "fhK2zya9mi2zsmU9gy8rBZg691buNeNAREChcUStAjYtyjqAGAKhvsWR9rbRiaxqirnK6XBhJ5MUy4YC1sdWkLj",
  "key42": "4ThZkjNgYTWPdRipb26xhmSTc8CDuetBMdCLPEyDBetkr56hTchVhR3ScwUx32kq95bCvdi7aghnPVfFZhWqBUGD",
  "key43": "5HCfsA4SDhoV9okF1iLnbhg6Cff9nBmL1ug87z3AXpMy411objfeybxGWaV24wKvs2zg1HdMnqztCLvA4qPtpaR7",
  "key44": "7tincdUD1ZmPaje4ZNBxWyWhZas7aD1QMD3XodR63Jzca8kkrzi8r34Q97oVJKYghAj9ZhYkZ8FcVPTeB5CFbxV"
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
