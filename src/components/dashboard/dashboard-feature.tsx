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
    "3Us7ssDCp43ncQn5PU4obmFJQuSFSY3bBEqxNKWYdBd6MFQgkBrPP8ypG4vS6kTawJWNCQs71S6ujEPSEvvrhnD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PjMxRMWKzCnNmFPgw9KyqzMwyojHD9JcCdbeLwm3ZBveEm7f9b94sHPfZXJY3omGSNmcRa61nh7tAiEyMTvqLP8",
  "key1": "3xaCEiKZTTiKXF7gfakJiZVmc6su4xjPouSVptg4hZ7PwkZbCNXJxLGPi992EuSeKCSLd9ao5Mus3xdfRAkPyPbs",
  "key2": "4CmAhheRxkdE8nhjFScdf3pZssR9d3FejL5Yixu5o4QQrJDYNA17GrtNH6Lfa5KVmhBG3bcrPsX3jgTJmeQGwYYW",
  "key3": "FkVDLdEgdgvr6RNtmjvbNEXYtUUy1j7fHX3BKeyTEeD5KYV4EHATq12yPtWMKJ157BnRj94raC77KvRfeE9q1pP",
  "key4": "3GwoYsazWpLL5aK6QGBRRX2zpa2ms125KNW3uiAxb7NpfUvtMbKwC3vmy28FhNYfc7fWVU6DQ6QjJ64JYA4dRtJh",
  "key5": "3uY2AJtmbdLiUd2g7N3HDRmmtDjaFiUpd9CdzSHu7NLNKc21DF5iG4r3ZnL2kRZVz4R5hnzHcDqUpwk6tDWgbRTQ",
  "key6": "5DgvcVxkeojvdqs6fZwxMtCnFPZMDYrSjRL2GrrG4i5issZQV5xxXswXDGmef14Y1UWFCXcqtbnt2fQ8T73Fws5H",
  "key7": "2q8HqPkiWiSRurumeuGiN9ezw8WUw974859QUxpwAyVAqPBQGQcK16jNdQX1wwu8mhXc6Fx6wi7Cu6L8TupYDbkf",
  "key8": "39fPeyS2ZVfbBuByMd8Pvek51UkZrd6GZq1xk8pJ6ZwxFZLLjfiaZ3rA3GcWNUWDAeE7RwQZ7zkSLAJjnhz4H6FA",
  "key9": "2TzpXgeTQhoFcY5B5cwuiwWcU5FBHZx7zseTDW4KqavaJ84ruvubdonVjHKdP6LG5AQiaHGVoCMgLoCMijECEBae",
  "key10": "8zG1vrxa71RRNEZgZFg1uDHrboJpeJ7o1vp4T7UbDtkpVj46nX8SKrRVTprZFxNJUBSSBWCNMRfHpJ2WYJ46BVz",
  "key11": "8ntvZQ8vQsWTZoodErmf72f4X2xPqRFcSBWyj5PgNewqXnW8z56bwp163i3CPqsB5HmCpNjgeDnasPe8GED7wTm",
  "key12": "VfBrWbkpFu12pnSyAqaESAGtk54q5BCmpSSBScWNVjc3gPq73fimqF1mM6wfeXVSmxgC3shk6AtgFEhiwrxni9z",
  "key13": "4NKGisFd4j8CjaMnGjyxqpRqTK4xgQ3tETYquzW7Q3TXh4GFC2dxSQ6SdQfpNySfGp8wUnd2efbiBLxfSiLABMzH",
  "key14": "5UV65pzbDohJNJbCQVy1WDXqfAaSA14iCpmZSfk8chXFngTZ3hxCb22Ngp92snT68at3tQPGsDSPVVoun7XYo9nj",
  "key15": "4LPsixHNqt1QGj4vMeq57wFVkzuYmRvsPbiLDronU8AYAH6iqvJ4RTS8YkrYRDx3QcSgpPXa2APD3DBmA94cknVw",
  "key16": "47URbxZXRBYZyyvyPnjKZncDfjdeCBBNdmAQUuSuwC9PzVJoikLe7RszvtUJBsNaNK931aHPZDDnx7W9jAKKUf5t",
  "key17": "4qWq69CoUCaquPifoHook6sRFU275Ai28fsSP5MHWukqFkzrrtDzRwZG1TuyZWZLFp3fb9D2pmBYrpYf863aXZ1C",
  "key18": "5BMAdHUZRaQpr5jV8ZijxTkScHgm8zrZoQk6AW5XehrPLhifhFHk1DtUGhSdHMeAWs2cGHYKvLCzSumMabK7DYp6",
  "key19": "3ffjx6mmaDPSe92A5KycFhJKpgKtjWk3rewyB8edi39siyXvCbHycXXmVZiRt8EhZtcY74gbQmRCHdj2WLccYasT",
  "key20": "2AcjELZD4WwW7tfCWyGTXzTHuM55eQ6R8Yi135rExqw78dYqGfDPdEwAmAQjCw17HAKXCKSvCqwGYLdn5HTwSDD2",
  "key21": "3A3jUVrJjBKGmQzMm3W8AuS8QzGrtD8sCR3XXY7W1mnBKZ3LroAmvgm1U8A4uRojzZtTwRgpZHezTdJ457icsMqz",
  "key22": "2oxSDEDwBv5AvWciPBTeyeS1sdG41VmYpdxzddtmsvDxCGKg3YPVZQxtWQwKT1PkaoF4Dm2vEzRdErcW9TW3Hkrk",
  "key23": "U6YYXdmcdTdpVRyYQex8vb42FcApeGYxDUVryJpQF4bJsZNwWZjua7bJRJzx7rUJjTDMuFYwEmNjqjgxfZmNAeT",
  "key24": "5dbZnM3hoHKZr477iqkqnmK3NKV2ing5FB3ny5QZ52ExHd2yYHKCEbMwJTfLXebmFEocfjhRjMAZaMRQyC9QcBEy",
  "key25": "362ybNydPT6hayMxc7YSZ7g5TmmC66C7Z5Z8EpFYb34Uy8RF4W65eFgLXKvdjn8p77pgRtNbeMDCjK4a2X8KdPhR",
  "key26": "2En86ihLjX2AmezENqQYBvsaZHjzAcZQ1FqnAM7ygN5haUZn3kPm2opJaFFRnZUu4izraR46UkkvW1UeKNvdHqxQ",
  "key27": "4Egcb4wxdZiXBwJVea6NNN4NJyj1hwHTYcB8MpzTdJyVZ4GRH4hZMpGbeyfyXgq9qEzXzh3XQ8xskkxa4GsyL7WA",
  "key28": "2ZVcTLanLBNb93WbyVkKCYvhFRs5gh9vSVPnef14qYQUz7YHENEngzGmjonC5fKWotNVjsGYygWqjNVvbbsj6iHt",
  "key29": "4BHCMR3QcikcUmcMcNaJM5edbsiEG6RxR9RTxvbu8h1DG7KLwKCgKhKdCWXQdww5Qqm6JgBQE5UPBYECAi9vY2uP",
  "key30": "3UgjFVZerU9W8m1o3MZD6qvFPtnisqzRZT24vjYXu7dDwftrRBEJrtXd9g71Zu3rHWsyiTAKLKgX5W9APNAk1bds",
  "key31": "4VYQiGx2gX5ruqUTYYy4wNGpk6qnQhCJbe54raX7kmoXi668EDfYA3e3GoaxjCvs5nY5rYz1B4CiWtTiWjxtSgZ",
  "key32": "4fFbk5LmLXQpWRgs1vdWVMt7JTcr5gExFTvX3ggXMUV7s3EbwzfQDNccuNJ4wHs5X3kHQHnnc2PSuCZRGZqToY25",
  "key33": "WcvHCu5Jem4bfucoSY7JKjyvWUNke4cQoxFt6K4hxcDFGL5946x4LadgZJZhJag5Vgv5HmMpb8bbvc4nmMvtkHr",
  "key34": "3mhiAHFV1NViVyMc4jgSTq3b79dPyecWzg4APKYa3QiB4nzmPo9ERyLq7guf9HJ6QQEsRYQqpCm8geqvWkYsvFE8",
  "key35": "5E9uZAtzhCsceHQri8QxpxNvuQeWyQDRXWR7TaUdtxocELLceLEUF6ieenf87p165xWws3ap43FN9FGvMoLbjeXz",
  "key36": "WM62Atvo7V7A6umyPDjo2xAMjp1yxmfVrWCsHBdPAas5HSoBeeuRMvVPPHPHJpBZij9iTJCrQBrRkyC7tG6NZa5",
  "key37": "5G4vZw1LAuRUEFxB7WE6hKTUmGYM2nFCN3cWBfa4AyGhrRw714HPqH6CiRNAjZefpCwRTgh74b5awBfmRsXUZoK6",
  "key38": "5f9ff2tbb8QYLA1K5Zm37EcCUXzKWXp6hUpjtYSAcz2bvzfdbg1JVgLmC46YoDDgG8jQfig9AhTS7zMiJLqNcbZA",
  "key39": "2DYzAQty1nPWk612H8dDjdERERLjsFuJHQk6VQLVw9n9gwvS86cQeCi39nuth1VMD5hcUADwNS6BwgxS7wJNe3Nr",
  "key40": "3BXXy1M13nSLsx6KdXSAbPcrf6T8g4RooyQKmXjwsth7WvAGJJP8xdA5w7n7bLqtGffxFKLwUfBLLA6vEmDkfViT",
  "key41": "iv2LEFEKJMf9EjeVUMybE7oBP4t3PpGySXzzywyGF9rAVmXsjzBjQpJHC9caTv3SFzs7T9Tqb6MBTEr2zu8Qs1r",
  "key42": "28hemoWzW7H3oGRKqFDgVh3Gr17QNJA9Ao8HMQ4HL7oy9jmZvQewizmxSwupeZp8shJ9vBwr2KjiwugaxASFbQne",
  "key43": "3BBfLx2USKY97BjoGceFhFDafVheGGQhgjUjnHSBSNme3m4tynzCDFgR311quVJoSUmBNfMm7eeRqgzXdy3eLEF3",
  "key44": "4JY2MAauoBQ6rrnzdcwHJGuHHnhv9j4Fyb9oAmGfNCXs79WBqYLv1wevXSdMoYUeHGXARFUjTnb3qDyzHZpaRDQ7",
  "key45": "3CFPQdVmi826iboiNs3AGU7ZN1bHnXV79wjxBQAUiECdespKeZTUFwfTsUMJpqmimhYecWqqnaoZhQo1PgPvndX4",
  "key46": "4yRPbDajKtDaa5xdzHX2pcdhBbuuNs7jQV5FBnVMKrx3aNDDwBsWgkvGNnt1MKi9YnmzGSby8w3q99Q369xMtbi7",
  "key47": "3Vr3mXb2YsAEjnnU4pkfeVeyP8Zq1upzn1pGpdstSUii9fVZvbrH32e3hNLMdu3mYEiZdjuhzerkg8zk27DP11ip"
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
