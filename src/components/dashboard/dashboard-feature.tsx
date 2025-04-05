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
    "RzUqX3SLiPLDnzUTbxMACwBJRKcp8KK4F9M6gHztbFBVZr1e739815VYuMnaagcgb6K6dwMQfNQRdNMYckpo3TJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eVPPN51hXDkgaLwSwXFoEJhdvvQRWQ8mhLFYFj1Zyyx1iq7bf4WuYnCLdFzFWV8w2bkh6YFFC1g5nsoTGMry3Do",
  "key1": "3yLGxUy5DTzp6uhaFBbdavKu4b9PD75UPHtqSJ59P42ZDhXjmRppPXmerCkwxZeQTvP4Nhnpe2X9xSpacLAfpvKQ",
  "key2": "3t9qvCLxziRKEmB89ccgZrbqvjmjPZtohV1zgH7BSE1v1gy2Ffuhm4ZQjy7wvmAW7tTjaL3S3vvjApMSE4Q7v3MD",
  "key3": "45XcRatVzqFmnAG3SQUsX1LkD6F8xmDkVXTq7WdwkCQk2CUMGrdU3VS6ZCaiTmTHxp3hwYzYmhZYBWEaMynb7MT2",
  "key4": "39azwjCB3LaSEtzJS8vjSygtWuBH89wybjgm6F8umRV31g17Fw9GvMZkD52TWKoQMxhXFMG7HNuxoi1nWB7gHQck",
  "key5": "56y1NxemaCtpjwNvPx3Ry8PdXzuUoRd5TgKbd6Hn18U7hQ6opYhHRb2HoVy1Zhok8LYArmTWiD2uPKUKYhjcSKv2",
  "key6": "1r7ZDLDy5vkmpd1ghPrT9kRuu4g1Mf5YsUnav9DjEsYY8uQTSk6cGFti91atsrLLybVZhucfxhKmrvHKZd6zyAL",
  "key7": "4pBRdFwfBVxtWEJfvMPiDSrwueBvk38rt18VbdvtS227q8W1RE2R6ASevaXdPzix5eZyQav4ZF6AhgU4gDRcTxAG",
  "key8": "3XvmARznjoPEK5eVnpRp4sBrZymjiT7uyB6qToLmsJodWpXEExs58W84SRE9YabuLejYYM8WQKXnkusSyibWQt6d",
  "key9": "3eJP2iWHJrvfqfYhYmPmMKNmdjLiA6PtaXrW2j9qSZB1k4F25ZCGKFvsSQDDhQhiPDjPEg3U8pDkHymig6Ek7Pur",
  "key10": "oFAQpcUdPd9rT6W8J4vmXob2sZYU3G25P1dY9qDvBeHLqkaaBRX2buv458Bckzr9YLZXqNw9C5WxNY3889MFAhK",
  "key11": "2pM1ia41Q3W2Npxae54X44X1bVaUPgrPhhQxTXJxPP5Rq2okzP55Awio7yEXHmkAcgiMNbnG218688uoBsAwaEAG",
  "key12": "627AY1itEe8EC8w4fChuJrpNX3uiMj3korGTutLEbPSMep8Xf4wTfvTAotCKyXcRxKQihRUVRpD4FYnLkW64dSea",
  "key13": "3XzmnLmWNQ93id4KFeWoFBNHKTL6x4RqZuM9WjdK4AKYbK36j1mfFKeZyCKUcgtRQcZMFrNF1uh6A45Efqj6qsRM",
  "key14": "3yK7JE4JjGybFfA4G1ieh8gXdWRXWT1Koq7uUMLocEuV8DURKaU48x2Pdu8GsKdR2uEHYrCC8o65GfV6iMEWp1WP",
  "key15": "2Xdr7KbaioKxcZPpZPtDdhRAzgm3oCwt2dhwEzs2am5yuLepPx5s4sJYoocSWqqQGSJLxZVRSJ7SFrNcQSqyXckR",
  "key16": "5bZnsSZWihYoa3GdiiLPFSzMpPW2GCYhtwc3zyS3Rdz5mJugCJYyYXk7yFaBVhPmAZQAtU1aVBTQC1npiiKe3V8s",
  "key17": "33yMCLMURazZJLLnCHSR1nUyvYrSdpQuAKpLTU6KDRRw6Bm9UfdKPniZo9nceCUUr2tcvrQfPEbktkFpNwAiohkT",
  "key18": "4uV5SBmmxDkpwDvbFyUMFHGnAfDSSCTxLuqBNiVusr2prMEzAg12x8vqRMBhsUVwW64bcpeUWbeREMaVjocX5E37",
  "key19": "4TcYnQ389TFJQkhNm9Kx2Su4QoZyRQdeYAWRuXdUudWPecsTuH4kxgiNfAb3uWCt5fu8LNCeDmYkE5Y5Vf2bhNij",
  "key20": "3158QCuLaZhgBCRAbEfpexED5T3ji8xseo4goSH86PSgrCTnUUSHartgV4EuC2jKeXEXvbgdkfhEBhDvEfnew6up",
  "key21": "3YgqZRsUYgqLzAbxNDKU4dNLdeL6ZbZhqxv1onacPxeDewtnjUY6NZLjzFHNk16ERYe7tMcejQCgdzKRnZFGw4gM",
  "key22": "3vbYGJL95SRSj91V9KLXgswRbRrzeN4khaei2UqvEpabxyWmzy8vDgeR2ueCNyombtjwVp4PDUGZnnZCzKPVXw6W",
  "key23": "LJa1TH3VFzmM8FmDCvNLDv2bDpkG64GhVZt4X8wmVbZwizX2WmkWo6ddPxkKApi9CTjori8uCsJqKwBWS4zmFtX",
  "key24": "i5uqbdaA55ksFWRu5zaYuM9RsnbPewyQtvrgn4yC4kXM6mfKQTgjLY4DaHtnmxmiLBmgsNRbQXGik1UmKL8fpoV",
  "key25": "2RwXjZmyCrrDfMXur696FZk8yUi7FeDCmgFkVcRijBA1kMsZb8oZ6T7m4VcPTm5xvtMfybD3rEBGmhKxaCDqapbo",
  "key26": "NJpryHjhJ2K59tvEG9pfNaN9R2T1v6vcruFMeZc6tgoA2eaiH1VfdBgBPeACTSeUkhCvrG8aXTt39MUPmZV91DG",
  "key27": "Jk48toA1g2Hut2jSrY7ZqME5QuUsMeo9Ev4M4WjC4gGhC55aPchWQmWiHDSoiyTbhC5YRA64XQ32CtH5fNoF3Ks",
  "key28": "21iiLSCmo5VsWGsUEf8dGnEKN6ZxgHtY48EKk36sudDJkjLndKxNL7imZyru9usfsYMTqJRnT1FdMPSQRuev6y94",
  "key29": "5sBdRd1NPfo4VLMtCHqyT35njSJmiph9otxsy9GbevyGVkzkLipvDYYUnaXcc9GBkLxFTWbcJNQeE8pMpij8fiVi",
  "key30": "2hMaJKBxZpT8PJYdEwLEN1pTbzQvjX6jm5wwTALN78q1hzoYHZfZFqQabLjZa4EpF2wzpaKXBk2zac949QyGZYX1",
  "key31": "k2dm5Em6EBM1drtcKXaYJHWBb58mi5nNNZhmzFnx8Mmd1bW9e9LLVGzWZsBiCmj8SefpWKKGpbWeBTHW3hbu8i6",
  "key32": "3Gm1kfYJjrnFmRcHcPyq2jgzazJ5Coi3uGxD5BPzRJaFNmMebP8UEMSZN3Bt2LsyKyZdNDG7C49MjQuG1EPsd9Ei",
  "key33": "4pmxXXu7tFgK8TMupGA1fVYeuz1yYduQM9BBsARfbR19r1jgvG7ZpNFLYocZofG27AgFXQQGZAWKh3XUJRGnN9bi",
  "key34": "DUdsMoiZRCuqxiJqh32sWBCD6q8tmQzSXDz8QFoKPQrxze962zgpZG6D6tw6a6QiJaDwo3WdkDnhqDsWrojcFkz",
  "key35": "Yk9DPbV4yrtcQBvp9od3AJSLx47Hh7HPuwoWEdZPEGqepPUJpuCQw9fUTJdRXruy2aiKPkkjt8bHFzhXm45ro6e",
  "key36": "2picWBTfA4cAs3ZPEPkGQRr7VVAbdGt6qwdH19PLWozdgkVSjmpqtvvsP5AQnPF2ARmtHMyDnJfGDv787ebFnJ9L",
  "key37": "cubgAUmhQmCqefESvoqvEGAMceGQhHfMipkXe9xunVGx3rwQTdLRaPxHtCsd1hSXjTW4P5nw7gwy1qCuDXADXzw",
  "key38": "MN67Adc5MX4M9X8zHKPPKU5pD1CbSrZhqSUhBuy8EWcURnxyNVKdM2sNhivUbqzWpiX9F7UzcmsLArxcFBnuFx4",
  "key39": "5wsF2942pVPRQLJMw4mcH3VvKecd7ejQAuUvpNMvJmQab5V9b2E9a9qKYgd8QorBptqHb7ByZEdxZHoc2kr2iecN",
  "key40": "2eSCFwZJ1RVyBiqxZ3mYPWRbJBXt67MQZfkZ8rSpVij2wNnET1of7WVhtKHrde99mWke4jf9weVmsuw4PTa7ZLw4",
  "key41": "52YqdAru6iZfYSoAYJZkcqZr69fpAhqDnLitTGkfrWLUoCw5uA2MhEAa6wpQDaxfHgpqRRD9ap98TqTVzHDQTPEA",
  "key42": "21hPzKibTfJofL1asyzpuL6TnqfxretF1AucRnGUvP32W6XMcQmp2w5QoRTvqkNnVDzgmrDDL7FWjfXjoh8fBnMa",
  "key43": "2BPgqySo4dk2CSrQGUxX9jd9fdLaN7di5gB52DtLciueUpto3M54fFEyXxKgaPR98p1bN5FfVHWfsiQPdEma389J",
  "key44": "4ctZwbTyUarqmaVm2CvHu4wnyBsnctCqbNrbQ4UvDs6AB2Bf4nr5SM58NtNEEog8EAvQvcvyMEEj1cySbtxfRvoJ",
  "key45": "o7gk4yiujpEKoGCU9s7WQksDmQtAF6KoskjNR346R51b98sgL7o5ETA8wR6P8ZKpoFu4Qow3nEFwYWfAB7nynrR",
  "key46": "3LW9xVg83VmNWQcRSeA1poDJcDRKQ1yKmu2CHb6NNdTq2bf3j4KuPK1RaNe5YZQcYGuuXTguisxRPQsj8zyW21cU",
  "key47": "2YGzGQPU5bbEyGA9N56zWRqbJdxdiq1xq95AvsrUXSJUoAfveawuvSLfSRn1y28wZTRgAVoNX5VmfgDt1h6yXksp"
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
