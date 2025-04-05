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
    "2fmNjWNWkof7mYkUGPac5tNDDD5bL1euRXm9voSwSCQHi542AhMVrvB2unMiddAEeWVCyNLu9V2mszxT56tQft8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y85dmHsC9J4KkRaS1jtBCDEYG7gbzCR2rpKmJzBoikwcU7kR9gme4TiYNCdKFvfxUheiGqjtca5CZkqgvvktB4Y",
  "key1": "2oQ736aNT8J6HjatvFSsKNJRYHeUDvcuNZchNGARkp2LGt32gwdXgajuA8PXkRGZaHTmG6sEFUqqTX2N9KpWRHHu",
  "key2": "5QNoD9EFdXc7yHvQY1Bddh73GN53AtqB2bLbHHga38zG7ZypBdkb55suyvrJypMcfZmRoJwfd3vr8dZAEGvWt5gr",
  "key3": "43MswK4bK82PWqrfFSGDa8xWN6xCPoGLYM8jLJTH6yZZu7GDMgZ7r3fRMFUqx4T2BNTfL6mYXwk6FidMNAHPUoxR",
  "key4": "4UsDWCVU2ALvSuTg3MJHb5mFL4ExZUg4xSxuD65uQAtXUdeVRAeWXCHcPbFthfAZmykGmpXDgR6UQBVFBkVyW55T",
  "key5": "36H4XcZ4LrwPM9m7YzTV64JQa7uV1Z2ZXQuSdK4jQ6MgvPndQeWBZgJEXDch9cAFx1jzAu7R2KVnThjjjns6G89H",
  "key6": "483PFsCmNemMQp9a5mXbQUg9aquS9mxxTM1VbLjYJypRtm3PwW1pzX4tSCNWPskms9awY1St5ZX7rXXQ2quUZwJw",
  "key7": "4F37DTSxKaPGRhux2bQMF32oj3dAP9gXxyHroESZWgUDMQbEJKpuWYhAFzDJZ62bse36t9ApPpzRFwKLyrHmTtGK",
  "key8": "H6zxsya3FSSVMpqu97jTbS8YjFxa3Yn685bvcUm1m4fFCq5w24JyF8VrEdhXrfFVGzRo29D9peUX3S7jMrXFuUb",
  "key9": "5KhLbekevyLQ1bAqqwt5nG92vWBeKFar6yVC2FG9M9Ff5sWpWnXHYzx1jq1pHj2sB97bD6GaXPjNUaMerc9VavwJ",
  "key10": "mhzEVmgMymYvSrTGe7LHoi4vPmbpuYjiYiYVB77N88YeuPZQMv7hbNucDtaGrxPEjb1X6PLabQeqeQJuzUVaptE",
  "key11": "4VWGXZoEZvvd9nYDdpSMvZB7WUFPQKSC7eA4jSgeyvwHVoJp5mX1UGarFi9ziotVEfnbzYsQqzCk1ShM5vt6CVga",
  "key12": "2AHx5a3fKVGFDufZpLhjLrsTynDL6wzBwj1CNdd7kVJuVa6SNRzeyCSvWt4KMzy8FUsiwnbCXnx8acGPY5QyZ7eb",
  "key13": "5FyaS7RuXXTuXpdi5jcwwQUSsyaUWBVfmmNFzcty1vm7gUgqmWxQ2AAqi3zxNxijf4A2Xhv6RNBx6HbRE5PqMBMU",
  "key14": "3DebjUcojWjHQTUpXwacz9i3p1KQpUCJ29hZMj5VXb4KRfx458KYAzSA6eWGZaGnbuECjktXJbQXALGnJocM88Gz",
  "key15": "3Uf5dFFLCw2Zu5c2DP6bFr2t6izzxpQG6DB4KGUXs3Mi8vKqdBHE6m1esSJE2BKtJKcpTMMW2UD8zQr3NJ8Ynf1r",
  "key16": "4ZhE4kJFF18V7QiRp5o7xFdjsqkgmcixfUz1by2CFXiaX3rZgndojBe5tNxCHk1oK2TbX9xKThR7sDtMPNfdVCRC",
  "key17": "64FRUzfy7bR7PtYNDampXG6oBPG62emKVoAnLVoAs8LBrsPEPopcucEhPr3UXJYEWBh7Var16KEwkvRBHCRUtimY",
  "key18": "3n94gC8ebRKDbu4uKB866KiTPws8VzodJTBSw1wZ1tJkpHfS8EYc5iuwMigXyU2pdphFr5XH3pWh1WDNtZAkRCie",
  "key19": "QY57rUjADoxzyPB4MBoPRWH34juBxZozNqhzcxwDaYf4PfcF14362Vfu26sL4q7jBsedLNu4niTY8aXcmotSC1T",
  "key20": "2LBCynDWteumnrgLdvESayZZANkNG6si3q9NDJrtF4hGgyCL5kFzxKMFEDXnbXtuPnSvXCH19V9GyzZgQiJKSTGF",
  "key21": "2TeC9TA34HhFGZyJMAmdwL4cVcQy5kPGRTEsMu2nByTCTWUrogbY66GypkYZzePjHC9k9oWgBiLzsVcNAQHVMqRx",
  "key22": "2Yjq7Vt6cEusghY9fRbbYMLoqJZ5KEnb5UvfumpBwLasyTcbSBdNBcduJotFfJeeaYbLmSAhVjSQzcDLQKnechdG",
  "key23": "2fXX7hz7G78ZpvXfiPFzcvbLXRePSnkb5PVrbik4vqqr1DJ9i4rcxsfJKfd2gMDentmeT14ecS9GEnjSo6CjHMU7",
  "key24": "n3oNXMPSbEKH3VRW5MdA1CS2odu9bQQMSufqCB8K9TbVHa3rfgzXLiX2ZfeCm98J5GqPfHh7i7K8HK4oKaQh35H",
  "key25": "3yAMtAdgNQkZLHMoqX4vDT2cF6uWfCarXfd1vfJv8JMiBEE7e3fgTpqktXgfxKhLrwLsTqv9GFvJ73pntHLq2Cmk",
  "key26": "5Cv4rRYmAn6yKLYQ1qVDEDeU1RooSAThwwQnJMbMRrt85qQSuAiPhyqXnaM11jsT83rp3oMf79pRgCV2Sg3mrPht",
  "key27": "4wPbb751bvUNbxA4fpA43Y2SHmkJ5kHxG7HXh3ZAcgZsKuDbZv8kFTuodNjqX99NWGQX6kNxkcXnwfhZLpsm4M6",
  "key28": "3ohV7njSENFiQ2HfxAs8S3dypgBkqCzdraYq9v1rxsfFo4NW8r8xDRXsKJ9uufmm26D1Nm2NPzHcbjZ5vfFK3CCY",
  "key29": "Pb8dSB2xCnYy6GUoRMAa4WSLWRcRkzgZFqnGS3fHKfD2FBCRPpARSn4xBsxT9hPP8RYX3nxma1iKC16jDRdKjHb",
  "key30": "25zYcrkjafy7sZKDvVqTApqpyx68haTr7EFBdWhTVDkD3LuhamLbJY6wW5KvE3qEedv398T36hTgBWjtZQMYeKjE",
  "key31": "4JTS1khwF3WUk5bH9pJFuHaus5VSSQytxuvqMb1ztpS6h9e7RxTyngeq34vu5TXy9ctxJzsf2xGyeUnG8RTm6Uyu",
  "key32": "LskGuxq4YwEPHhUVgyP7Wh8WX588wRDg7QXPy9CjySrCG4hFsDywY9udf1cFdxwk7Wr5ExH9GTQEWVm1dK7p6x1",
  "key33": "4BCMN3Y9jVWvhCSaP75Vt9AtPTnuTiyUabd2F9rzvbTBS3J48mm6iAz9jdQMdmMkGNJ1rsPt7iM2xAfPDkkST2Wa",
  "key34": "2DGC5CL364DapNMzDXpPES5uBtfvDYdJ5qzg2YiHwayimrqKMCL3wA23eV5sXbuHmaZVXZeZ91CbVfcfK9i7YHaz",
  "key35": "5Kt9t6SATMNAAqexfedMJ3cU8pgaKMXtkimYXnPyLv5Mg7aZxJkEm5baTwH8m4pYP59KKVcawr2TLPj2o5TXn9ec",
  "key36": "5saXeuQeEjmw3vwWfyKVhG4MoLrXV9nQ1g7cGmGAxn1Gq3BBv4xLkwE83LtPok8prSKKeW25dG71FBPnBCDQ3VvM",
  "key37": "3GEtAcUtaUtfCy2YY6o8nc5udoEj1NMoPs5JMNDaJ6uXf9FoGcWrM9Lso4Es3f6qWAaZPTEosnS2aWuiBgfrL2LE",
  "key38": "37KteT38sgp7wvm5awjYjr57roCRBVAE93qTpZ2AP6WVGE9zQGTGUPnVPodhMyQ8EiJ3xnKsQSkUW7isk4YWUEPC",
  "key39": "2hVZ9mw7gMfnPWBviSz5oLS9E98xZ8TkTwUHekQvTRTbxjouiiEfeuvbQ4iDXSwxDKT46bp8Nxq2WsNwjoxMQnor",
  "key40": "1ijJy5ktN3SFDadVLC5SuS41W5JjBbZiEB8xL48poVkcYmYXFcNK4RB8fQ6A2GAJ92smjucrJYpVYfUA19yUy5f",
  "key41": "GPeGrgzWzBuJRL9qmNJ3DykyoxijjyuP9s8tNBrmPZejopqnCm3o85zgHM3wfys919iZpZdAs1PXtjN3WkveFuD",
  "key42": "4htQiqvecCyinDzHahdJUR5r13mhvavB8NzEPAFo4jrn5YMhbWq6RLSECkMYQj5tx1wkuvUo6TWw5CPQ5NHDy8J4",
  "key43": "42f2NL48YcFmx5HiH2pF5HrLLd9fqxvzxt8dPSLVJWp4Z1fGigftzudkapunMHJFKZLwcLSDoyT2e1iA91nRoeEJ",
  "key44": "3vKduC17Yq8CDfNjVZUTiUUGPiUr3bc4vrRZn8p7SqXt17mAaWJnFm1zMfvtWJ8sCT34BqquG1XwaydA2V91BMwB"
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
