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
    "2hsT63s45e77ABnnzFyZwT8q8TBJxtTJSqsV5MGeArNFwv7VCaYJkHDgDaMK4b9VgeY25kinX1GMPCcVnM4sHa5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i43jPvcwFrsV5tWTZ62zWf4T4Et152TVmBPy46vmgL2puJzJhyn2kHzyRVDpHHR5p63oWaBunpfyZdKCmtRb7Ly",
  "key1": "5Wy8iGkbYCXyq856crwNpbB7PNVjueirVCwiAoDFqiYNeo9og2QsWTLQcuHRdG1VWaYgi3H9TyBDuUtCod96FbQg",
  "key2": "2K9ra8wse6QZPWrfRCc9YX83rVp199wPTeJDqxTzLjoPtmVSLkve8DaBhZjjVWkj4PA8DfZRw5Hpp3fxDufVRYGP",
  "key3": "2AvhjUPeD6wvZbERNCmZNUmYKjzDnwyM8KCGhJ2UZcVEE51rmdmcBCsMWs9Jt8sSSqAhZiXriVrQEQRGyQxxnJWx",
  "key4": "4a92VZZwiXJw7yWWtTJ3P2xFkus1b5wm8TEjDRzNN7DX7VGee5jpRUFygSyMzd6jk4kb9h6HhGTZc7dJb71jR99D",
  "key5": "2c33cqgqXGwAHvN8mX9Mq2FodFQiqHnN3jZkt6wBHUSrkQF1gnYNEU5WWUi9RQyRVPz1Cj14T1WMiyxP7FMK6pYD",
  "key6": "4dJMRCJes2BEzvVAJhkGo1Bge368D6KxkMEbhs1XvbdQcRuQ2gbRbfhyUD5d4toBYWSoLA8E9oQ3e6rDhiENeBRJ",
  "key7": "24VdUepPudkCs9ceLnmNEL2hRwzPwzqt15zy3DD85X4v74fao6s7jvXX2QGFmTtyTFZCfkXuPCYAzLo1UMhskm2H",
  "key8": "uQ7E6s4B6UBsiT7bjm3HkCKzSuTFhWuVR3iTAaksqDmMeFKRqd9fCub4AkyzNJgq8XcmFe67cmAoEyPDHLtz4RX",
  "key9": "46SuF98b9P6c14RMgE2dmZXZCyNxRGfEGSVA49icUgeVXeQ5XDiTSeRSCTwqTvRKxmNrcpJbtyoshmNm61BEVDGa",
  "key10": "4k3RDFaxDizg3sRCbmEsLVFM16DHZ9NKDtzWq3THRsuXjHsPkDFrVCA36NiZ7pMHW6sNJPUvZzKNLt2H3gVRCKLf",
  "key11": "Qn7SQHJ3rwDV4Wzn85iasup4WL5tk55dVFZKL9GPFfSBnS9tk5tJY3xNeoWJKRBwz8aLCgWfy9xREZuUdrcD4rd",
  "key12": "yQqi6spgwc6uMVEj4yZgcFWj8ivWPDejqRPxrD51VAWUzF2rQgZ2YKqsnZXr42TpQLBqJVn4VU4wZnNUomtz2eK",
  "key13": "3G4zyaTXpcNRGMWvebpAJ8qDQUbyVhGg1XfbqXoN56GCV3nwry2dtAjyQDHTAeNgMAKsp95JAhWdeZG1c9hLJ8Su",
  "key14": "3HiotBVGwqLbY7TMRaw2uksNYULd45vP5HY3ae9Ubr7bANjK2oYCusbQ3eMUgsRY66sfKHG9G6u1Yyz2DHL8YZmv",
  "key15": "5eY7uoTUN145GbG242MvDkvjMzoJPjGN9JZeMPSLzKgNxfbMwGTfQHG79tBA8BVkB9RMoTpc53W2485KT9dYCjJ4",
  "key16": "C9CPnMaJpXz8wtB69qXvbgtpfsX83k95YPtRAjTMxaKnjmEzWVWaWwmpALqxaQv2Erqio7yWC1YkWgdeVc5Zgia",
  "key17": "2LwbWXCWEMYj5zBVERJ6CnRYbZednz5TJbpedErgmCeVkU2wnFjRNC2EwTie5Hm8f3xiHAFu5Le3aZkJEtCBsHmj",
  "key18": "5mNkjDwUspSGMpGNoX47Rfb11sJ6KWkTkamC9hMget8kim2PLKov1RnRt4USGgqSvcBFt2Xg2odypK7jkmZhDtp2",
  "key19": "rDnbDeAsSVgGsssb7EC99QqPNzwWJGDujuYvj433EYauqUTdnW8FRg2AqtcDeNdmSacUP2FCfc1KC8QCB41nb3a",
  "key20": "4rdE775Fo1LwCGhg8LtSfQ2tNbseddcApwmD5RwCHQg6dBHr2o5m2gXMAscafC7RpUyqRtCGF9wRv5pQL1EGn6Sd",
  "key21": "S4jZAKaHzSQGYHqYySFFbyGRSLzpe3NSfXZCmQ6QqCN2s3Jad5QpE9t5Les5a8agxoUPLrcp2Wf8iAsf3rEo6AB",
  "key22": "22WU8n4ppJYuv8B3pkBnVAWRfM8ZL673mL6XRTfe6qadYzacbCZPY9Khtvfv8KMcyPdqnn5NtftS8pgssJXTzpaz",
  "key23": "5EtpGCRz4mMvDAGfAdKJnbrbh2zSZUE49NK8kazkWDrZ7dZwe3yWxb8ESLAMwn8CYgxEKLqV8odrTcezJFSJHV5S",
  "key24": "3YSKLKQSwtRBPMgvPmPNnr18TALFZhyAcDUzVmbFAhc566YrcbNiLuVwAc2CpVcQrivSNfpEGRUeuPZWw5Hs6LWA",
  "key25": "5AaGx6vRoeSZWwum34T2G2U2nGRg62jSvrwFukkSpg6nNaDdWzzgYKXTdCHebs1k8PumUdZ2KDv58ZKUbyMVrzUv",
  "key26": "4vMefZnH11hM86j7FN6X99PyVah2srPvCpKnGwt5fcAz33ML3yuF2v6XjnaYfxfDF5gZ8objVCzfvhm4JyYg8m64",
  "key27": "2QPNfFo62fds48NwxsKFSVaM1EaGn5G6af78kTJetmQPPK6MTqH889rEnwGSkPxU2MsiZatnaJv4cam64inEjnqR",
  "key28": "2D98LsmyBLV5ngvADzv8dEgheYyCAPxrTYF7CaLk6gEju6aEsJvTBiCs8XADcF8CEhPn7QSLDcTzB6GC7h87Bhev",
  "key29": "zw9LtkVhGUm1PfzVVrvHC9XyHKCcPXfGyH6vYgbEBAAwJpAncfYcurgeEXAPobF7dB8oPVndoKJauizGSxwDqLP",
  "key30": "5MxNDihidruBTTa7A7CdYZ8QW6ig2fR48hbFGJTRTNiv1z8c3mRSQ272PoQXtvGybU4Zk3euRvzUqJEcRT4h8x9r",
  "key31": "47a3ioyS9YwWcNf3yWjTSQGfTuVHamqgrAYFreewtzE51YKLit1EzxbadTRWppt1jkjtGxYhKr3DB545Rpi8XVF3",
  "key32": "fCygQKMhhDRiduJaXfQVyuMkwJqCthfU1dZNXZ4JvCaVUp5NBkiBdbqZraNviXgdWQyHp3tpVLKGF9sc1zxPCUK",
  "key33": "4wBe2dJLoybMTNxPnzbqQVn73miAa58SuQeVkU1Bns6E8fVCbUyjLF6z8QVFnM9T846cfVonGdjymieyFCXKYsLA",
  "key34": "2b2Ky94CL3d24hz4yS9W7nMUpaj29qbPHhYZ4YubQ3EuGdJv9CJU9aR7piHw2EJ8ua94k6JsL8y74fQvLJBVcV2d",
  "key35": "4Hns7edc5KJxoPebcCfxyHh5ySGS2EySZbeG9PWP3CNswmwFZZZM6JmVHVM13sfhUf17day9ChgEioGug1Q1tHbA",
  "key36": "jsXYKcV8dgBLSkrCiroRdHwTVk8WY762GJbsXh3natgszSxRhsug3e45eWAZ4LDoQVXJBaUy4mN2MCd4fxzNvVF",
  "key37": "4C2EEbeFBzgSut15VqXkqYTkg1vXiq174U9P2MPC2BbsDjEoUK6B3eNqgB5bRXxmTH9FDUkLo9r6PFqiKFeAwHaY",
  "key38": "HDUGGywv5yvWRA5TifxaLmgksBGgoPGBUydqcW91zjxg7Y87kvxqkhXsikvkJqhhvJ9k9gxHxUJUFx6zCzbBeun",
  "key39": "4Ti1UTf8Yr3xBCoxUQxe37w7eGxEVRiaxUgYn6bPh8gin9K2FiLSkQJjRiPM3jMPz18nit23FDACBYtgj6Jrs6cY",
  "key40": "4riVnXrMjYjGqHE7XGXW8iazUYoUyBEeCkhb3njykxYhXEEu3dDrRyyYJrkbP8aLTWQCVej34Fhnnmhyqx3etPCj",
  "key41": "4iCjnNudN8kATnsT44tyLfSdHKzcL3cCgTCftDMArHiUu1X5e3gWf3xLrQ1uJgojVKN2EEnERHgZzuWFCQfxcW5U",
  "key42": "3xCwQqSbNuSJQC47BQbGh8gfstLZd5UVPL6CVe6TUvanMyiS3Hww9Bkk6duUPq1ReE64w39piDJQVTGMwmw1Y4oF",
  "key43": "shZxEZHwJyZwHn5gkFBDV3PCi4tJ5HCt1CBzNzNAsJQx7EDoM3mDRfSM3DjMT4EjaucnCLAzCmQTUdimP5cJLZU",
  "key44": "25bL1chYFAvwQbvNPy6pr7qwVt5KxYshtSFRwg2nAFzACTbSg5cshyMUHKQb3dr7yy6bvyaCugxT7nur95YdCE9N",
  "key45": "MZux8AziTVtKufyXA9CSiUSX7N6zufzHEoN2KCaid4pEKgMgUCEKBGPfCnQ68E8FcrhAsGMR9LvPTG2J8iEyyqh",
  "key46": "SgbrTKBTe9jMFNpfk3f9otdYQUdGw4QoGJg961FXHHsY1nBuhikXUU3gE84TtouQrkTbjUFrybTt9XRzNQPVHzC",
  "key47": "ZVPKmAaTsjnieNtkgrvsiDPQwZztzdBVwY3493wcpcob5M5rRhpToWTeq73P6ui7Lm2DS6EzShYbX6WEqoD5Zis"
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
