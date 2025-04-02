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
    "22PxF9KYMRYiBdyMNqTPBZMREmPKGnfPt4QAfeSL8JAgVRupctycVKQXScC9VbrQe7VAoX48rUv8WsA7hEoaeYni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ConYbnasB8uMAwgCvNsV51QLK9m9tUSGm627L6Hg9ccmFPqR6TrE8P1b3kZNVSFkD5qL3VNCC68vpLpNkLsnW2",
  "key1": "28PBqWRaLHKozz2bDyVR3XDNnCTsQzPXFxq2jf5JeoZSsF8oPC3Xys7CL2bDVyE573dUXHfx8Fv7is6Fo6WCEivp",
  "key2": "hDM8Mm4iR2ZmLFN4GoP28AercbrGPSUTCmT2L5PDdyyjoZPxV3fgNQNGbBuYPWbK89J2xLnkm3Z3DikPJaAWqii",
  "key3": "5EeaFzn3p7gTa9WCghwKKQhirMtaTnQxcemRyYMmTqHYLC91XRYQGDkeuEw3caXBdnyyD5UAdQiwJe6hAPKEGEBZ",
  "key4": "36X3iWn4CD2RRovL6LUh1e73Yb4nqJMECLBze6PJ5Y3M6gHwHjB627avpDTfUYpwiZcQuYu2qL3uZcS473vdkYXE",
  "key5": "3foV7HUuGMrrN8bh4zngKoNaUwZuHXqLrPzGSfQoLhUYdrnEUcs8TWfyD8d8haDR3dtj7Ar2SM4shBMTmeqgg7S1",
  "key6": "4JdcDtey7FbUtWKAzU4qnm1Tk6VgbC8LKriGYeUoJv8RtJVETK8RrWpDKPZPAqVeK5hopekp9hSXgmNE1vXCGJ3N",
  "key7": "29K6jfqFQPX32nr3zyNCe45ruCdwRhsrt6RnzaMbjm7K9WcUZFU7p2svSYQZ9bxsHX5cqdpfEvqAmk4sM4ccooQZ",
  "key8": "39JhRg3ooefbXzDv2pc3fyzwL5G4Zr8hHgE9dQubn1Zm346FrHndDSUk9v6rkGB1Ydor1kLWVfcQ4iGhnHxh3aPx",
  "key9": "24mDQ59MQNKG4HP8cwYKt45BzsQWn9nuw4mmd23raCqVqzEhdKKeBsQW1Td9Mu8dc3A7Hbmkx73SdWyhA4TmnkKt",
  "key10": "5znd12yXcxGaKqYZU2zoSKppo2NWP7ReAkSX7dPsxBtpyYC5mVYKYAitjrXeNTrsCzGXpJV2DKET2XsPmPgNftsU",
  "key11": "2xdCv5BKE5Ps9U1xKKxzY9MuYrLiw3yrXaZdhZtdFUaGPeJDW3a4JsDDDuGoKTcyJGGTsTMph6pGEWVcFNfiNf41",
  "key12": "5mHLznWn8TNCNxWvrGpCviupL8qHuXUskzibDPqKw1dCjgVEJLXVj6KGy8toxiSYF2ZMTMT6UoWnVxicGAefrtfK",
  "key13": "4ejzRWjEH54nUqYC6U2jTuL6jbyJGkMpv5DQJqVujLJJZgBvyXcyw2kJBfEiLe1eeuwC6vPmMxhTxoZaZyUE22sF",
  "key14": "37QVYox1acN4ZrdpQMhQvHh9vqChJzy7p4B3cnEsgcxVfN8QT7LkkXwFjWHy2UQVgDGrVF4EYARU1fXNGAWdnmwe",
  "key15": "myxK5kqfPvcu3RP5c7ZZHZfL6BN6GoVUzajmsuQrHBJXGX4y1QoAkviKJ3fiFNvtDQJ697x2LsPTdTmBeT6FtmP",
  "key16": "5r3Ni4ZZL3uyXGLcfZ4FQ3uW8F6geTnhvuY37a8yyED2ZrZAU9Z2s9522XQSm6cHzSyC5MBsSwFMJnVUYS51wh65",
  "key17": "2ev6jtVaPDMnXYeQ9idwwLnNb5FFor65rYnSAvX9PDvhU7EZJK7vjrkHxBwhAVvSs7L9j2UJMgrNq2KnSdsnpqj6",
  "key18": "56B9jd1HAs3zMB6DzVey3mrikeQ8fNXmDuzBWVv5Bzf5ZLSsvkgm4oWAFpqS9kbYT41HoeaeaqsbyM6qufFHsfM7",
  "key19": "2hxL5G1NorCbX44NXBz4rSfuQ96rFjf5UGCGV2vxZoMQn8x57DTWd9RjWtuswsQV67hBiQpc7fhWhegS7A85XmXD",
  "key20": "4KWMVE8nGmbhweZv6n2Qg5bw4VBa9zHxmUHdALfouPHnGLBiS7hCgBza3m5xq15mCRJ2i2JezxXZPDYDagraBSew",
  "key21": "5VFhnsnA6tqhK9bWg3DrHkvJ7D9zDHf3rW1676EttaSAggX5rWP3wNNuBmtykCpFtXHwearWCubfqSrQH6q5MCUe",
  "key22": "45bWXaWpEvtz6PemofaHs8sRv3rLFGamvQPTi5u1RC963DDCXcYKTcUm3QuwXByk2kA4grGFQnxmU6xkT1Qn9Vxo",
  "key23": "5phu9ByrNr8maCsoJqmGwNQewmd538E2GPUfJQhzMLBaxzi9fhfxN977VQRvUmjBQeTbfrgsEDpLmZwm6mYf15rk",
  "key24": "do4eTP2raCFwBczyKaF9rFWNXxYFbAuGV7gPMfH5BFpKfbmxrPbk4NyYrJ3Hq3w6NUzPSmBx1F7bn3qACpmS6G2",
  "key25": "2RshHreHWMp1EoJbCANpRiYCbCtcMjMgwvi5UcptWFXSDGKGoj7N3xbTKSBT5ko2oZ5hmedAgEHsbWzUjKFCCX9y",
  "key26": "4iFKy3YuK8Q1y3rxH4n6KLRS7nL8zRRXvScYE9QnMKB5dib5UaeRrhDN2ntzSTM4wi4wFtJPdCUV5JPz7bz88foX",
  "key27": "3xcvnVZHAcmB3g6sya21pasTZEdpfq4ZPcqE4Q5P4Q5PQ5K91r7CpVqabF4utwRbyzVPavHJmKWrokwzVhzvbfaS",
  "key28": "4CpQnCenjrr1KXk6f65EBxFAoBik2Rwn94i5VCrmzZyDCnErjBSCL6zjZeMp4PeizuF7E1Zb4kf3HuFLRzUAEU6h",
  "key29": "4aXGt55hsFSH6KbPvvqLyKXydX3g4rUTexhcdwnd3TrQ9pEp2oCj8m4uzFecTk5ZhB8MifGXBvs2en4yBznRryoP",
  "key30": "2jkvH5BmpZbQ1pwgHujS7Q26jjEzBW5zp2XHfNA3XxChd9xFCYxWiFWxa3r53uPSK7xQ4TgyZ9sCUHK2J9ALcgff",
  "key31": "pUkDWjANYkDh6SJEM9U7sZGA8YQLUQP2VASXnEGST56rz2ZtbT9bBbzhURguHDr2v5igHaYuD3Wm3Mk34QrRDcJ",
  "key32": "tuXBaeRmJKYwXuUujj7LvNPwYJmMMUEA4kSok21oetX4QjfXrfck5oJ7AVKhpjs1qY6zHnQptY8SR6VUThVUPmp",
  "key33": "27AGtxTXGkG6wGpXLKpTQRbJSoE52mKH9xWGM4EVXtcWiAjdhpiaUi3c8Qsy8SkKNWBQSw8aj5ro3vhNzkmB8H55",
  "key34": "49si28P5HKstvRRUAuZs9MbLgKHrQuYEDuBCGKhhJyR5YxtbUmFsw3J3WmazK8MNfb16JADxEbPAwSU93fDzytii",
  "key35": "4wAGuhaNRavHMj1fTuQzDrg5ujzTom6An67oSmJSbASG7efEwkqJFfJL3SpG4HVrKuhwmAm5LdAJMAzyhDrxJz8t",
  "key36": "5mgcz3Kg8UEvkAhoFmXmvpn4bicEYrrXUsKxTWeUWQne9m1uhLGEVvgDzfwsASJcXV5gvyEJyGvAc8nLs3Nj2uzf",
  "key37": "oxhz4hYe9ZxLmMBkBH2JnAs56pbhb4pY4vusmh7iDwdQoTTzsQFaTCLm3uDux67z1H3VujvdwZvPYtQdP86WupA",
  "key38": "JsRR9UgNyPi8SaQ8G44Mn2CjH8FpHZh5KmTYYvkBB7RdhLMLMSLFRkvEBiXicGnSyDCzWB6tC1vfyEKjoWfapW2",
  "key39": "ZC54ZGrGHBdBcTvZ6nYF7hzZkhEa9kYFumsUEeTB7pRbEXeiF6SJ2DRiGQM5akigS3x1xCL3NeLaGsWGWTRNd21",
  "key40": "xqtEMZLMSLrTMpdBuKCTtWAhMbnEJ4TWcr48opE9a14wQ1Trm8yYAxrYGyKo4NDJQLZB7HvKbyCHSXhpEeD3RPh",
  "key41": "4TFgmuyTNcjm4rt1dZYcGuegE6NdSNjxRpKqth1L8GyCHo4oJAC92sWdMBt64fTnH4v5P4Y8rnJKdJSiVpox6aNW",
  "key42": "QKQVSmt2ny1Bp8S7FgEs9GPCQVa4oqGJFpyPV9VTrjkJJ68Xg3X5mpx3UZFh6jdWVs29yVD8Rxg9XqSEDc8im1T",
  "key43": "4gYcttEsFpV6eid6CfV8Ar3Ejz7UJk1c2xBtf2MzPACaD1L6KqDwF7xv4ckPWy8jVCRbsxwMWyiggzRvuyJLqQos",
  "key44": "3TVXffB6jvHftDKWN7G7EaABp7bCvy9jXaRdsV4ja75bRY7Ez7N8DkBxMeugMjnCYtZmeeFMCitPJk9eicuYhkWE"
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
