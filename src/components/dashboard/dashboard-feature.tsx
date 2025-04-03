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
    "4m8ebxYhLm1FieR5BbCRjDuVEcerSPD1KrM9Eyai3p7U9ZkXPNNUAaLgDye28TrqMdvKvMpy8ryWjvYK5V2ZPDAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VfFKwfFaXVhqxwetoWY5SgT2caSp8kSxgYMKmZD3hLykDXzJ8aRjVL36K9azyCLyuu1c98Sf7oZ1dmpbCpej9Y6",
  "key1": "yf7wi9b2tvmHs3MavvxymVAMc1mdFR5vbnpzBLkNWbyuRg2SxME7mUcgjd8LpCxD5qFzpXu9rdYTFUzGDi45etx",
  "key2": "43YcdAcvYBnF4NwCZzXrLnZ57oWs2N34QPVJfYLLxxjFg5t75TeTF2o9GK3bE87oCu97fS1czLtebeCo22gyztv1",
  "key3": "5FW1KKcZttDdocY74pruU2Lo9hCCC2WmtHJFt9aU14MnD7PH1dPvNLJnAXb3BfW2ZxwtnLq4sTSoXba9Gzod7wrF",
  "key4": "3ugshxSiEGKVWy7oUStJjBdq5x3nJw4DqqnapJuHjkA3T9QKkcq9NLUcvYerT3SG97J1vgQqXeaPNQdYLfJ2AUjT",
  "key5": "EvBscqKyCfMqYZu1DoofQpYbmTxnApkBALoj8qbqECNxLq3Su8RZtmJ5ULbegbbarejGqYXPxMcaX5DMwqtZx3F",
  "key6": "4gNuqe6VDJMdV2a8rb9X6vDEw1BWPufzvWqkbQ1U3VJMQEX35gz64q6StkWwexfERjiF4PQepUSdsJjVRnnKft1w",
  "key7": "2HWQkJbCT4JCTS2GX73GxxN1ugRV97E3vWXg9hg5TaBXyRztSA5Bot1woUDDEoyDx6w3RERrhRRh2Rv6YzCwyxD2",
  "key8": "5kgJpKs3muCE6ZeeKeNR5KJJTJrqE5LTcXZc113acvzW8U2hVTrFK6LrgVzMtYGJbdJBEvqQPmGDLhNDJUEyY2HW",
  "key9": "4XoHjcETpzHFyA9hmEJBnqY9Mm6VhD7YSe3VNFtK1oP9vrUnFoh12vmewiWAq82zWmHS4jVYn2fPPrYaxWSBTMhr",
  "key10": "2ixTRjYvc29wLPiZLwokHeepAK6oa6KoXq2Dkf4R1NmziBiGQiuVm1pyJ1KjK3uBqQtAepgfx9NFWt8DifJeJF5h",
  "key11": "2uH4XUSmAtfU7mcVErrn4G8EM1T5ersbQ6qNjaXNCU4PiF8Cg98T9SgicSix6pRXp75d1SR5kMUaqUjxbvQVR5BY",
  "key12": "27jgWEd778jZxLSN3F8qmdgkTKCAgPZRQkrwNkqGKZ66x22UyZ8DomAQFYL5CpvHb3WM3Sg6Dc5wT5JxHA3Psuqo",
  "key13": "5Kjvog1qTQKr4mWGjDbR2fG16P7xrkNNdFaSFD6ujXQJBx3x7CdRezpNcQkLQseE9SBmCkR1UsG2hgJYfuRWhEev",
  "key14": "Y8P5MjbzVZWiiVzEjsshma7yiH887aKQ3X3qeEh8GtfXqQZKDFNDSTPdtpwXRsxBafvBfVhv79hatRATQ4dgWqe",
  "key15": "44Zj6ak7txcTdkBg59hALNj9gFrjaj6qhRuXA8EPNPMZg2xah1JA8DxW35WqMm7ySyMfSh83CiKMBXW8ZcxzsTtp",
  "key16": "3EbreyKpJhsSMvjyWRmK9zVwGycrEoriBvF7Y1JSUW1pzLZYsKgUkBsCAnnT9Mb9ctZvdBpMkneMFH3X7kyYMX1v",
  "key17": "DfuwLQkjdTSQBeYh4Cb5FHja9TZgqyHQQDCkXetis76is7DE124fdpCfGgo1ti87uMKMDNMt6Y262SUMMJxAshb",
  "key18": "2arsmhmDhHh7Ze3GZ4fqsAPWUNmc6TNHsvriUF9McTyjYXUQrgjo2VxfYsuRVysZ7nZCVzWLVg7ixhw1FYW1NQSn",
  "key19": "2x9Gya7urUiGM3MSnThtTJzje2dohZZNdz28ieAsdqoagpFBnPo5m8FiEAnomoTodeBBwHTbdsWMSoHAEgk8aLrK",
  "key20": "4APaujzQvsLAgjhuQK1dqoQZJsgAp4YcdVnoex1cXYTsrQjAeBESstFSL3gNQdsSRB7mxZ2ecs3ndCJ5RnFVHarW",
  "key21": "3wsdBbpA1iEJZP1uFLnzbFzbCV84ThyLySfAWgYUTdqfcTmfSD8yfECdjPe8CLmrZKJ1m7obF5dWbcSKWKH5wAg7",
  "key22": "28gtWFtHmse6wVH5WamoaxaDcc4cHL2FmjTWrYCSS859uF5yZusjGXjhwkoXfXjnGDu5q4yhnAMwv8P7NP1UPQv8",
  "key23": "2G1QvCksDhP65MQMxYPQS7yq9M3TXXiCvLEaU8MvZ4MHmZrzw842kF9E6hVdvrvAXQwrp4Kc8aavS3XTTUV66wew",
  "key24": "656C11ZYgqxhuDHHDWmKndCb6jqFAVGYpPevwy5zpmUJrxQTVqi8UFhknjg7bxSMt4p1FZAo64cEpstvWNi9ZGq8",
  "key25": "4YT9AoKbLLFpepLNEcbKLKptkP6d2w7ytZ9CZ19FZ5SqLhpWWeKonC15BLgVL6USxAe93ZpKrWVYRYwy14Lyk4c3",
  "key26": "4Co91DemyPxpEoT4Dhhet3w3NgeiJM2cNF5zqT6rUCaYqBxQvd7VLvN1e9urVwDCAjJhknv7YeP2qGLMKq3nu45Y",
  "key27": "64zwxpva3Gif6hxMyp5jRoezZHhsz1ukw6W49HjUGEMguWDZQoLth6HLSr5WMPCjqDRREQU1ijcXAGjiz3nTyf9w",
  "key28": "5fAUZZ3F5W75hmCACc98Bvw9YVErqHtqXQNM4ixG5qwALdt6N51YP8FACKcMTLHijWBPqHmHCebetq5KDWKCHfRv",
  "key29": "5AetyKvRwKRjpJB3B9wMp7w6BxjWgdhXfPzABBzXdrNYmrpufS5kDPtzsh4X55Mn2zfhVSJDtaD8V9gS37usJifp",
  "key30": "5niMTB6Am2v55y7opcGoPi3UzdA6Dazaoq3X3zwUJJYjqoRAzw78w3sSExYPSru4uNXikp7b7k1HsKaaF6967LrJ",
  "key31": "jWVp8d1r7hEdVWABy3dSqKsPX9thbmwgiUoevJiAvCNZsWgwum1CaM1BKJDEYyPFBKuWekvHh1kVzfP8r4S2wSy",
  "key32": "2c6LaWp557FzvJZ66NEGEgV2c9tya9u4npL3RpYzpLviGocEdgdMToNnKSvSLocpcwHvAcuuuXLBzu8PNPNKz5z5",
  "key33": "BgnXxYGp2jNq62ytP2bp4n7Vusss8uUPcCbkLiF7rstPPJB6HGfkH8Sc7weGye39snFXmrWgbekmqRFMEPxRMsb",
  "key34": "2cTzTTmzLeKJPy6WzA569TjNexnh2irRd61LXD3uLuBmvTccdgn6vb41eTJYgFkpKgbQvh85F9jF54b4wNFuHEN2",
  "key35": "oouRnud6nDRLi6swt1Y5CRiEszAc1KhwWevSpCRNkFEmBJk4YhpK3QoRpNK2MqJFMywR9B4TtQZrAhUy4FEFPMv",
  "key36": "Nnqz6u52uzbwG18NeizH5afgiCCXHM6D9WXezidfBVbKt79afQX1va4HWAFE2gAB4tpC5T2hUBUsVtzgeN2qhRK",
  "key37": "4qvrFRY7ySZrgHj6tDU12WVHNZ7ZX7Ysieppz1TNZ7e52Awc5LNGYTBgaDw1CrvqEcRmRaccwev6usBjFgmvoAgY",
  "key38": "GwgM3eSCZsqqXcgZsuEDmGMTwVxHx1WWFNehGB38oYTeoVjxioD8Y1V8vQQqftuDahFTFYjEBmn78c1iiL8b5Fd",
  "key39": "36dHyBvABe2V65ik6zFJ66y1xr1mRKN2adCzKSKvZuvjC6qRQ6wajY6LBdgoTTPEh3LRyRpPtJTKwJuWzpWSxv9U",
  "key40": "8jZzFds9k7KAoTd98FuuVSVfHRMTvZUxy9AzsUbXQLMziDeegjZBwHpG4GVd8ip8mRbiyuHcoLtDHyt95j4qZam",
  "key41": "3srHRMtxHQ2TG6CHPkEVvvJ9iwMsjS5ZwKu2mssvj1aaeQwjAbFBEyRBTVF1H5JvN2CMbxuYkbdKiSvfkR7ZJ4Hd",
  "key42": "5YdEzFRLpxJuBRPHChvdEvmWa2vbecpHrrjrTsGUJYpUAQf4YNj5SA2MT41g3c5RbPfZG457KdKRQNWst9gYygSU",
  "key43": "5BW3kyPCouwT1Nf4H3FbQSHowQx2XBdexQJ2zgd1V2i2DJBPXdvXWAcq3jwhboxBgMRJCCNuXuXJ3Hts1io6p5by",
  "key44": "5WQtuvaFoVw92yv6xp4yKEH8Cev84d47p1ebjA9jXfvFehjyJiuwoQsmRXwQAuqiXkLjoz5ffB7V4zpi3Yinu541"
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
