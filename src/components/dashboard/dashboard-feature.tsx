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
    "5NYrFGeTjZKf5roqJNpoLjByaAizstX3SgyhKcaMLLYwcLeEEhW3VxWipJnR1QdHhz1ah3djPUbjFDLRyHF7dL9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47MoWRaaAMTj3GARPB7TwjevQthAXuULwL1rR8SZVqYq8NSuBbNahJsVaNTQhfqoFpuTdgymrkam6VnNZ4DU9cFK",
  "key1": "3b3o1aZfNgQqxAs8cq2tKtPTrRUMBRwn9uSAQo2TYfKHc6MwDrrQWddUSvY7cCMZHhqkJ1iF9Rx6NhtJn82yWL6t",
  "key2": "3Jb29wyeuayrxT7UCzSFd6MwX5L1XhpfLGpdD5edjjMcAbPJ1a4y8MVocTPUVcesdDUpFVHov6p4t4PsnArVpP1M",
  "key3": "363xSmA8Pp3UVyp4crpBZV8jCGXkuhr3TpgHNQzdR4PzhmVqU7cP5Y2XeFbKMsT4TuoNT3rsHjanHrU1jjgZX94",
  "key4": "52UgQuwTFcqJxEES6GMQuK1yaN9kmD6Qb8G66L6fywh1JKCAvgn7yqiMDap6o41rH5gmr1TmhwsXLhFRVQsvX3Vt",
  "key5": "CVEXrkb26xqnXTVQMm5jigAmR6XZN8fBkHz9ViXmcXNgPxssQucyokJE1zXVw5qfjSH32YdfbtT8jto3GdjkF7A",
  "key6": "5frMTVk8TU11PsH6soXBVJYunG3ihotuibPLTuwHTMExcVLSXAP4j6VAxTVWaAVf1QFpZC8uAsv1EWpdfqjaDBse",
  "key7": "3nehJzcLpvYKFmsh2JUcHRgyRaviFk5pE95kX99nsWRuw4UvSzaQkVwRtReFmnaNWZCJ6XxRvCTyNH1QDMP4Z82P",
  "key8": "3bQpGQve2uRJfb2LYuPYnUAErsh1RaJi7qFp5TN2nPtss4oeagABgyzkzaPXAFgpVyrDXi83UYoWVTs9ne55fpJ5",
  "key9": "nS5RaJiRkD3ef8YHgLyGr4W3jjpadEcmkNz6wDGiCiUr9GQkVMrEMxgEFTmL3ShVh5ycddkC3qKFpJobkYWVQ4f",
  "key10": "2tNxxv1LPHEqC5xVth2zmsAGaewEjDNdwjD67DF1Gcf2KQyE1cXsJ5WQQknQ3BxniAD7uerGk7xwmhH7X3NnbiWP",
  "key11": "jos9JBHLpjQ254Np5dvm7GTqM2nGqgXSxZj88vPeiK6Ctz1nBtRP5yrp5RGEbeAwjKuuQBxbLo6e1fNadFSLCKp",
  "key12": "3jxjQ4t6sMNRdicttZwzxADBFgnSiXimk5D8CGiCPDXFGsjdEP8xnfrbakmx2qAy8mmMbQS7f6B6qBXY4NvVDCSe",
  "key13": "5jCu3YFbVuAF2ushQRqKX5cx4TTP5Mop7AtdCpMKAx1UvdJmZNGWJD4gfaBYrmgbfstB1kL5LQyDkRKNN7KyjwgB",
  "key14": "4MQA3R5dmToW2Jwx5SrNbPSWKTua6LeLwnD3k2Gc2T2NuDPGKMkhQygGv9sh7Y6iBvLpZv8HPTw2EHSPfPPYPQMo",
  "key15": "4pjFng6nWMekvgA4rSQtAYBHi3e5vq4fQJ5WWnjUorkLANb365JwFMe11MeihDHq7M8VqMynh8sta4Y3q6tGg13Q",
  "key16": "PpspnBxAzv3nJ7kLjKZeC2TNaY8pcrErqR3HqRmEDtzT5Zue8oJVf31gsnV1c6TsZiwKyyRDrz6TC1V8CkXR8yD",
  "key17": "3ZUC9A6NEm9NfoUs48aS8wRGXAerbovYDefXnJH32VJR4yVZRQsyoWFjkJF9aft3bGo3ogzQqCAjueJzYLMEQJQt",
  "key18": "2f546wNvxCJu2UK4mxXjBFZrg5NtCaoz4BHterFxLScZrm2JTQkuEnRiojywZC7Qco7wGei7u6vevzE5QWD49PY4",
  "key19": "4MoQTQh3HG3YF9QYnQbm5GmmsfmfcYYxfar19p9LApVMcqfpSmTmiVUqJCNbB8h3r8sQj1hayjrJUX3ZtfVG7L8s",
  "key20": "2G1UFvD3fYEPKAspaRN3oMX2rdQehg2RdNmDi3UrhWYXNaxwNwxBS6APmQsoQsTwp2Ge4jAdt83khv9DBZrueZix",
  "key21": "25DN7gVB6QnmxqKhpwvRiH3BEMfTR4x8Caa3da9pwuvXupNfUdQuSxzRcgZuNgsE99NHM4KVn3MUapNGzR69Mdqq",
  "key22": "4CdKFF5K4hW5mjUwFeBqjyfVvF4N44dk5X79qi9MVMQkBpWCoFP2BM1ceDZs5D6F917uksxJ8NPyhGAtQiBGrwes",
  "key23": "2zhZDjT6rk2qeng1wgkcrHnCC5q1q77ZxYEJHjhV1ECBFiTqcGRv7sgh3s5VRTvhhXSGSL1sPmwneNhJew3sdoL2",
  "key24": "4qAAaVJ4DHko9xkhrF6u7tFCczxEfyBY7tSmSvubMTsPDK5UStUYqRiRg4JQCji7QSSJBCJSjxpypS8v36cGc7Js",
  "key25": "3UcFn8oQJNWPLkcbpFX7qtT4dkhbcSsG8R3aPZiUxWHRejMrLDG1saWAYsyCfUStjhayKYZasE2q8jDXf3XKXU1G",
  "key26": "5PjY1pQmpfuCA5tf8V2KK7m9QrvGxZx5uUUungbxmmmLpru9TNyeU8t1MkuY5bXEMG4QF6kv8Q5aU9Vxo1sW2ZgS",
  "key27": "2BD64PApqXyEVynjfQ6PH6CDFcmCQV2ynjrL7Fv9rH8kPSAZWucJcQximnB2pfFLHZe3WMuWWUWxcET9EWQHeyDy",
  "key28": "oDS8aisLF6mNTxGztVxez7UuEhjfwcBWv8wS7Ym7RNJPMbyJjkpfDG7127m8hfVb3mgRW1kH26wd5ohMt5effjC",
  "key29": "4tiJ5s8gxm3ptj79sBQrpsNJGekAXdbrMAFVipPkSPr6fte5b5BLzVaFsvKx5kSHcDKDkxfroiWHZgPGm85F9cLn",
  "key30": "XJfm5UTQqrsmpqjfBR153xe1Uese1Z5YPJyqCg8B9XckJWo8cXNRYUTTJcfYXJH4A6ErC8m7uYMuMhraQa8Zkin",
  "key31": "57cHGxBajfjGAGkm4c3exBTgrtQuaBQAUvA51Ld5rogkhz34bgvAQDBma1UqSKU6ARqSfgaZQMftyJ5HwWvrG1uy",
  "key32": "5qvQVw9a1aLMi8cRNRUqBMPJUwyucyALB7wxB7eFpcn4HySmjExqjQVWYNv9GBHmyWwAEcPdX9coifCpfDiGLm43",
  "key33": "5bdtoGbngXrtKBGJYHJ74uKEiqmWh2BXLG6UnosPRJGJvkwtaKMgyjpks8vN5HYXuVqwWif2dNC1fwQmX2P1x6Ph",
  "key34": "5QpkKXwMJYZyj23nw8PjXkRskXpT1VfZwq1HBhkwZvdqXQc7oWPCfxTPfEnm5MmxxL7PBm2CnEL5xhdj9f2gjrbd",
  "key35": "AhULmBbvjNTW63wDYzWMx6EjMG4Wch28X41cogcZVYiYoRo44Gw3uDjdi3S3Fe6Mm3frvxqXbj3CkXLVgEspTG8",
  "key36": "4XmaA6sadNZkZnRRtTrQCL9PwZQPdYuH2MFu67sE7nTwjrqkDP1KqxLisGfyQ7uk4vUwxWybGjNzudKdPaSdyGqr",
  "key37": "4LMesKRfEhuJs7jVPVR163KaHFB3PdqYQFW2CjEQ8nEuHxviRACujwN1XL8aZxCpnsUgKN6SfffwKYcXqYGyCACU",
  "key38": "33rxG7A5GtQaFLMKyDK1MrcgHdeKoJtYYq7ffkcD7HdeaXoyM7CGEr7PrVZmfahPLA9usw5jwD6FNWCzueCuViSZ",
  "key39": "3znkhBa6jdyvPJcbQwSTJGkgUrrHYvUo1NTJgjfqSWDeqKYEd4MsE9vikJtti9nU2PWgiuYPDHJ98gan27m3frnq",
  "key40": "2BBh63i6SUWpVgyv3xW2ttUhgPEuYtdB5J23Z2DcPBohmuq3hXEMNdfJrLK2i1w1n3TyE8HfJBJ42mrk2reswbJ",
  "key41": "AXrs2gp5fC2qMHC7H74YQuUdvCGgHFzUzZhUASmK9ZGYRJtT9ymkioA4o8krMiBwe8QMrh9SBVGxpHoGP7hMu7n"
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
