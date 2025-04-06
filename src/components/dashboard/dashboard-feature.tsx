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
    "HUfy3heXLSaYCzjMaicgYxU8MjwY3zueBmXgHQhW8YQrRij5x6TJ9PqDvMb1fgYFbZ8qwYGXBeVUXZiL9mkDCNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d3mG7WJkZK7mVhQNxzLxkf4fFbyn8epnhvWKWdjyzPBSQZe7TA5s8qKU3xSAfu1WsCFcGLtuakqYu2N4cDzP7Pd",
  "key1": "jnFeTGvufguKkig29DmQM7BU1esnfm5Q6nFmybQSDb477t4kiDSsUXpvP6ivffpmhGkJcLJdknp4WgUZ2qsQo7t",
  "key2": "4N9iWkt1xsQGRr5QLxu5E5dcuUkCnibuV2Eu3D3813TWQEE8uHxrddr7ehPwPrWNF3PeqhdGtBkXpocPaTojLCVY",
  "key3": "56cx3ud6W1TQ6ddiJUygFHoYX5yrSPr7cGnr8EZeWWw473QNo3yPy9LwmhvUAe6XksDjbQv7fuBxMoZUnuVnQn8P",
  "key4": "35PZC7BfYq2saySPZKQqS2W4CQ3jbdV6JKCWfAu4SNGNw8s953LxL4Crzzxcz9e4du2idPmENefNotQoxqbdqnJB",
  "key5": "3wyNujrDkRRcFsHL477JquDiuqFHsst1e2P3DXVrBz2UosGvPzJcrpUTCDVEVPFJafU58F3xCRuSL7jP2kHvXuiW",
  "key6": "4VzMWDY3rPrqKMFER5aubWjypz5pZGBDbYTjguqo2nbQPhDL6mVpZUzshaxf4LgJ77Rkp6jRffgb2gZcyZp7V84G",
  "key7": "2tgszTnnZBQu5AkB1shnLHBwc3T7TURo5NWdRo3LXVsSrqJbsbcrLpmEAXUqcGwY743cncRfPjFuB9VHCnwDFd3F",
  "key8": "2BvrVKjzYmDrnvkD2HmCskdjTYGwQuwUiwa4E5SLnYoFbi9xD4mZpi8sh1FehzeHk8HbpM3CN7wp9AiD4Zrn7334",
  "key9": "2s3eMDV66RBf5Nw8gx9tMZY4KKTVwrDBYBgx9ePTdHjV88e8ByJxSVuQJ3efTwbMuxhKWnbQ7xRNunQkWFX3Z126",
  "key10": "5Kbov5waPVJpubqB5cs78dWJdJBAVp2RUT8qci4F2GW4zcJ6Ce5sg6sgATU9eNnsvmzks3fFuLduzk4P9bTrwThG",
  "key11": "3U6Dqct3AyWVxskdHwXyAbdFG8QZtRjnTiSTzfrgy77eutaRBdLAhtidkVUbgwCKYCRJAZg3DVRZ4gXU4NEbCv3w",
  "key12": "VF55WjXB4amLxGeZHomdXxyirSiTQLzGnn6FXjMmdzSH8pE4x5Z5VE2zf17A8LFJVvqtKU7PJDMrQnqh94ewi8e",
  "key13": "qivSFbJdee2WfM6wH1S1bZgmXNBeXdSa1hopRwXniyiF3wcTtKXi31eLGcQbotgvzAXvJot26UqCfo7TYyYbZC9",
  "key14": "3V7GL7SA9e3ZhC7MZixffjqux879kem4x4YWwweX2Rc8iSpH9fhEYbsyMZhMyM36hFhzckG5BgbNJhK59umfnmvQ",
  "key15": "5S3FT2WLe32wAKRNEWgeYGRr62bkzp1V7hzTv8s2cMPEGik18EYe3mRz5D5YXCbPZHpEfHaxS81VHKxktszoZ4bV",
  "key16": "i7FCLHNjMr2H56ztiBQDFxntvMzKCCRYTdW6uk8xo8vHXv1kdSmmDXQCoNC5mBmtdkBD4ta8jQszG6uzoLMDzsV",
  "key17": "5xuccwV1yG7jkMWyYAXhNPbYmPyRdohprv77XKDnrN5f5Fqc9eKGhTScujUboWEaiMzBza3Z8WeERoVKDG1h8LN1",
  "key18": "3gTTwrAdPCqA7eHvBv4tXF2oPyrF6BhbdeRX6jPyhwVvH5P34Rx8FmiooVu68Vzt3fXsBygZYf1VBiesLh1gXW8G",
  "key19": "25Sr6NV4QpBij4xUJTFZu1v4fdDvQg6MfCmBpVC84m9ZLv7XjHBFJVZWTASaHRcbhqtm2nnNLW65Y1iaue6Jm9wB",
  "key20": "4HM3BG6E73urmawkNgXMgSW3ry7hn3MuUucoEvGDTHMJX7jmzW8iJJ4PbxDbkJo2rfQhuBFWwwhGWddmSfS7ufno",
  "key21": "5mGpDJ79nCCy6G82RoVmprdMrkrBQKbeqZ7qP33F5p1n1A2GrkEwNsRiQHyzrNKu9N2bGsMcM89B19PoC8m7y3Uc",
  "key22": "4cX5dvXycCQ6nc97ZFtWgCRHFkeqz25NrUK9JSvJyV9vxeCAnW3Nmy47ZUMgXgS4et8S318srxxLz8f9oXnc9ADE",
  "key23": "3gQFF4DFKCk9QXrEDD8paF4s5Nev7oet8kEE2pGDf223ryJ9CAcmCPdiWuNVGMAFqRNRTY2zkeHVNkcVMN7EY6VL",
  "key24": "3UuiMPnLzX1wDEq5VFfvcko8q9PBKCpBfjpr3GLXRFL8mS3Y7Bh1C5VEuTmc21iuyN2ahoqWpSpVpmzkR1rSiD9W",
  "key25": "3sj7JxQK1zR5BSXkhQYnc6ZAn2sisFnxDdUisX5ukuj8ZX7FyrUkpdiKdtxtik82u9nGYSSE4ruYPf5Bz8X4yuup",
  "key26": "4KUPo73hVJUJrE4VDneehhsj7Nc4cyNZTLaNKhQHpdFG2TGFCnJfopBRKHAqKg15waR4XQkpo8sjDWw6eKbjrEF4",
  "key27": "3t8vxabLbSXMe5bezj4HsZV3RAvUdfnVmf6EGF4Pc7JunowVouzP44GhHzFJ7PsvvkpjmZKPqPomaTjoFH3YWCAK",
  "key28": "56qtAkXvUds1w2TrtZz7TBp41VBcbcZ2SA4CneS4XyRVN3CSMM7goDShjg38ArTPLKRvCe39hgjwmhMTsWoYAJzu",
  "key29": "3NiwrprJqzyU5nGnsXoSut3bhFXPEG8d9v4ZchaxsVQKExYDqvi4UnSbthoFzrz8Umh7HKtbYCsv21snYc3piyzR",
  "key30": "4FLXQ3h2MJDP6KzDWJ9yi1MBPnpW3rmpG2QkTwLUECDgWg1HFfNtat7qfy6qgthZZn8idM9DNFnwcyV9uycMVaf4",
  "key31": "Lwrcp8f5qgsfZxo3dF3mhdxxEad3JvVLnQv6JPG5N3YoS1EaAsxxq1pAPATqL72eQga6u2eBcP3izmznWbRggtY",
  "key32": "fDVB7gnf6xerEtviNDUTpEy3do5AiVf9ibXfiSuWjfVRgc8KjhBQBujQpaC7cJEWcHWq7xJ8cEjz4vWyVXvSoi4",
  "key33": "5RzkoPr9WvB8Uazx4RP9QV3QsxcGiRmkmaqD7P3rF4rdxaWcgbmFCh5pcSv1KzfMr3DDVi8vaLPRQqZCw7R6EtwZ",
  "key34": "45E4J7wWpstZQ98oLojAVSFuRtwMMYyYB9iLkFWBGq5pgZixfswoL1LZJSne3Vm6vJogUJJBdZkJZbMwXBguM4k2",
  "key35": "4dCfFmcQ6e2tg5nNJFe4c7v9uj5XzK7Xu5KWY96s7jDXZo1hULJos9C1r4TH7fckBJRJHWPYsTfSqJZAbQAS7MZo",
  "key36": "2o1C5LXGKaNN2i6gRgvi9dCgKNQrnNA3HqttAJMRuggN43QqiAATf8ZGrinnHDxEBeFQKo2JSt6yc9sbm9xeCMtb",
  "key37": "4h6nY9u79VRTTzk5Trfeg4DV4PsrYBiqmU38NA15wMMqcjCkwzdcvXmht5HnwiCGv9JyHNVe4KCTRBTSpdqBijei",
  "key38": "7hMLUs1bLR1vgBGRVbep6ptFvbhXuceKHacdQFUtfBnbQtmE9KfGSq6RNTQKjHA4JvbjpnoZHjaxX3ybVk4mnsk",
  "key39": "5RPJJzgg23EdsHQd7xf6bP7mhd6NXZtnRwHMTq2FG3EmNfBPN8GT7eG4941T7BLUS8pSXZBuG66yGs4h5Xy3jfAX",
  "key40": "38W1bzdoFMNJXdQmQCKdXdHKU1yQ2YUcDZbkiwpdc7qW5yMCbGF4vrWJju7mCkJr7gpLzES4WZgrWMB2V1KPoGE7",
  "key41": "4L2wCt8XveBHLg83jVeU6gyUpdZx4Y3nUVJpC9kFKgteXTTha2Dq5D2cHCLDVjZdBr8drY4w2NquQFGqWiCRL9fJ",
  "key42": "22pePNfWBMXyfF9bs6VrDRhQ1jkvB5LLrqTvL3cJvd6srVZ9WHBvkdxinEcAWw4g9maXRZXjxUfChM5iYSoUAyDy",
  "key43": "2UHE1FWHhDahntUYq4AE3dEoAqxBek8YgW83CdrKQ2cPXWPPsWy1Z9uyKJstSym186XsABVdFSSuDjN1EMasNosp",
  "key44": "2ZmuX7MJEcemZAw9huBDtz8f5M4rm3E8zSuTea5qajR1R1FWeFwmdHr78ziqnQ5NSy1ByZoYfLBrUJoLnUB4mFQd",
  "key45": "4TAH9zKdqpXJejT5v1bDAK35tnKi4cHj8gtkf8KWqTsJgTmk8mF31jQj6zuvMwHU3dY1GUQBLM5zh2mBSR6KiLV1",
  "key46": "4Ha1DNYFTEZpG2Rd6ByVargM3UkJQhEb36abdVznX2ztem3SgaKQ2N1UjQXkcJoGzHNEz3sFXZcpXnQTRmFJNtqb"
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
