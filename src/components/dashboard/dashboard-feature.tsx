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
    "24D7Txnq1kAiJWR1U652zxSuFRUFRoxPjPKXewWXQ9dRBCGbCkWskME3S8ferPRb46YRotmo2MsMUxe4oZFi6hPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bkr5zCCWnNXW4fxydkenmYzn9MTZFFGyC8rNkBWTqbF7iuF4pavZjYacVDCRSzVsgtQb8RMAXjhX8pVzxJquBH1",
  "key1": "3WKrhs38GKBNMQvL4QpDrYJEx5MjgGQ2DUoin5ZLghBw38w9cTm5Uybdexg4EQEU6QFb34Mxsi9fnXR837xiLdgx",
  "key2": "46U7JsXi8V31XUcnpxEfGuKmei9e27NkhKLvLT3swyLmgy13QrfBg9rmWHwHj7qsTegbhMCtDsaw8km249pTJpH2",
  "key3": "4Tj5qfx7nuM8n7euYngaxKnH9rUCPmhvvL4jUijewzoMb2rfGCM25K13xCLG7gdJ5bDXZPCKnNNRAU7dqwDAjTit",
  "key4": "3zP73USRH7p8idxbQSVW6RRbduJwRFuccqS2gA4FbVJ3gWKhx6k8mxmiL4BJqHMrwhjEZ3gXLyh5vmXS6SZ5VgTx",
  "key5": "2vhhPEkgAHSRrQCmBTCuihmktedhBmyr43fjtLLhrkMLE1ToS99JsucPeSiCrbiWeMhC3fHaMqNu2tnfFw2KgKQp",
  "key6": "4stzeoGryBHsjPG39uDnJXxs2Ax2RdwHJj8769JNjWvMByjbHnTaS6Vw7NZuRKTU5V3F5Tvg52jPRhf1GFjSzvJG",
  "key7": "3WjDZ9QnSyeFn3gDYVTFNbzCTzsHJY75k17Xhm8NJ9JgEEQX2mUtF8tavbobfLroYyydEnxwvoUxK2xaJc8ZcFB5",
  "key8": "45Ph8x99QGHcndjNHvYsjAhe6SYpdhUwCgyYiAsJXWwLiHYVJWyaV9nbgZCCQHGbprHD8XXs21TtTRy5aXcJhdHX",
  "key9": "Xjh4rn8Z9Tkw4G6FBGGveUYEJnVLtDDq5QzcZtPgNCxE8dSgXSVrEQAr2WYUxy2v1D2SVbKSYu7UiP3KaEb18Ej",
  "key10": "4x8MwW1WT6muJJGcFQPMkgQKJt3YZwHXrsvvtn4SZrz9KqkRfGD2Ay5V23ZVGpMkSkcX4tujxo7RewnsnxujzazC",
  "key11": "673t6xFRQHw1ykDhJoPShYtiuPuLPb6frd3g5XE6YZTSZDw3hDPa6RhdC43aDZGHN5P8aLpTJPQ1nFZ2gttDuw9C",
  "key12": "5WAWECQywhmfY6b47m2jYKfY39Lt6roPPTfBVLb8u72rzop6i86qei9KgcpBWSCYsf9JkRHNCKCmoeVLtiTJxEDH",
  "key13": "4cMhMz66U5pHSbvrMvCTnNGV14HuwabvzQdA5R7TLSPfmA6ucxSRVa2msmDvy6k2doYAcpEzsqYR3vQkxHrBHPya",
  "key14": "3NhbK2ibLCPZN8D99icim6vHrw5NMAmKBz4B2UPUxfTbpRBeFxJyjihcVveiyJFpdBv7PzDztb8arxHc5PyHjteJ",
  "key15": "4nRFDAdNAY5ebRDzup7xTan5TMqXiDaPbkv17Sz3xHsFQaFzjLAxMvbg1TKpVKjdXxxFi7nc96B4rXGZquPqkbc4",
  "key16": "Lj8oVM5az7xU1EVyDHW1khoeu3YuCaecv63suRqRhRPL6TJijVRuky29QQdy6xzgqoLBzxGzPpCGBbyHesPfCsR",
  "key17": "2FbEHwykAHBeWLb7tx71aXawBkv33gAaqJ44zpukiyXjis24goakeKrM5JGjym7Q3R7FP8YmZCf7pApUTo3dAA8V",
  "key18": "5QsZRkmW1vJwrpQu3aXKPEzJYdyTDQzrUzJawg1L1BrnvQRWSN1oR6ETRHh5c7ADBrgPrVH27zbjefBDrLd9qh3d",
  "key19": "wAUJx9Ts4LR6v5EDBqHJNnEXMHnh9q8cP1EHuj5kt6h2xsca9AqsPCM6Vu6cr7iAtAAGzfjmjXmseFnTyAFx8uS",
  "key20": "4SWstKMC8HXmcqGgQDiekXQvCXTcK8LNFuYPRLX221xhFZGvVBrfXDQDyRPGTi2JrUA2druTQGacgg8THCrQR4yf",
  "key21": "5dcZZhpdXiRTugEj5ANP6EBS2FsywR4PGbHYEvpJjZN6TVCGKcWcErJCGT3SgaDassmfZAbSmcAdrHCbshM6LE5c",
  "key22": "4GCj5U73CsBfjMqtYnHw1MMgaKtWxD1e96siQvQuQd4K6u8Wxrc688DoLabiwecmd5g9Csf9T1EqMGvswcK2o46y",
  "key23": "4YWT8y8rFcr2v8jfLWxtZ4pFuTdnVEvxBMA2wiYQ26EYLoSpotSkK4F8kHm4AcJL31Xex2aL98g2Uuz2yUjxBF5r",
  "key24": "P9dn76pngVcHCAS2oDujqx5L1HHmM3Af8Wx5m7c9ZyqWSEtg8fzjccHNYyK9YUmE6NMCaJ9UqG2ngrE2SmwH4QE",
  "key25": "28xfE3L63V1ZFkf1iCJRpMUJG2JM3qAtM5YUSX6VfXws8iQwkuj5Hcwjxvbp46kZe1QN6vBkD4x6cG1KJwQ5BkJA",
  "key26": "Bx6itricBq2ZKyAqGb2ATfD85N3cwA4pMh28qG1jom9LFaqiczRUAmWujGLce6CAxf3Fdg66SmhnioLYFPY8qtS",
  "key27": "2mGc3yBRudocDARRu1FPYr38Gn6ybj658yK6wMDrKBixWZeEEu3srce4rWm3qSz4uyH6taxysi7dwCczpgmRJ2eH",
  "key28": "2GHY3w3UP4dywypEmeDW4wPMvkHX8xwyuekDPAc4U4zEAQfkxhHzg7JBmQ7pqr2WYuMpmU6EGQirrAf1STEpFsDb",
  "key29": "5QLsThtoFhDLQYUNeewhBs6pnDgoCrrGvQDV7u76CAUZEhAfYjQkNGiqohLNd5nRS6XcGhQUxB9zJdcNyP57AXPX",
  "key30": "5UrqEhwD9iSZjskDqfRF6y77SqXmvw7RVSPb9De2y5XpinL8pfuajWKNjdFucY4YtzTKXkY7dQdJxbEAtwAqxyAK",
  "key31": "2GZcthbGizuRrw2jpHsmd8QamTfwXEa23er8ogWRuDmm7j2e2sBJfCLpYsVpjv2K2gK2xcDsLgGH2pRsGGKGjeyW",
  "key32": "5f86kmDZhHaf7TtiCca4wW6yhpg5SdThfCXSysuhBTcabZr1bdyFPZ84uM3FJjUn87cWH5EqBDE2zxKPLR6MmQtR",
  "key33": "4b9aRQpSjCniQxnWidcDrthnPAg9j4MGZvH86g12cwChQQSAK1425ZozWB1znek6f65V3rbDmmyUp2VwdQ9c7dqh",
  "key34": "47mHhjxHPhN1vq4uZSCsmk8EquUaWatq3PSiPJDuUCg8mTSfvMUVhSU1Ueqt8jFMiqobgnPn3dJSegN9RN9QwgVD",
  "key35": "2okmsQou4Upjju1JT8aCnK3gwVhHkdbQ96E8jCsUfRjLpv9RNCUKkL91dCW1UJ2aAWQrM5GbG35dJhUsVajb8J7f",
  "key36": "2SxMpmWmMBnxoUARih1xuEKUvaJcnTSg5hxJ73WgM5MLKzktnzeRYCZj63gcgUD6t6Ne4tWJgwd8F8Ds3FWpiJTG",
  "key37": "Q7qYX7KJkoUp2hw8kaK5nNRfyvJsii3Fa645nrre9CWFswWRPEBBFAvVfZ2EMQL6t4GbDcu3SKXDoSahWrGSzq9",
  "key38": "4XBeX8bWuKjB53njb1AK7xahbmhYMjL6UgcWEYLeFgn128VhRRqv2P78PykbpQCBYwbc4VoYhQp7msuyQeeHzuMu",
  "key39": "27nZwpo675L4WVjAsQmjhwMXoD6RKqu7i5TPSfh75mkptB7hr7iDNDvCMuNtio56tfu85Ymm4bLyzri1fYdA9vF1"
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
