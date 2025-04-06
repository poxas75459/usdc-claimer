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
    "5NXCe6c1LW2w9P3nQrYU4DQLWg5Ez49uv3Lp93MECPiAeAeVz16Kj8fRt7nndfRso3fmh3jsP1y5PSGFNchfUWGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ki52GtNLLVirNoCgtRuMXxRdiWMj4RPba8C8kuZYQkCrXkcU6weGVgnv8rywuxVCqsx7gsnWZEhMRWowrVVVhZD",
  "key1": "4UEHWWKZAqbMLqt5F1pmTdVCsiBdmv6T5EkmzyTHoqKXnHa9STvbussBcZGoZeLe1tryxZeCgbFQw453DMPV7XtJ",
  "key2": "33Uz26yqXSnnMEFRDVHCn6eRd3WZPwQnKv2GfrBVVNdZUx7rAEJPfsQbrFR9JmbVBWyMrnphgdeM7tquLJ8U25vu",
  "key3": "wufmcVJArUC4KwcvjfHbkQDKoVN444FaaaF9Ty3DKqEbbHxgPyyDEWFq6g3UrgvmTUoneqDEfVJTnNe6HbBPNiL",
  "key4": "4fTHYTMpf9TkinxtSjBuxrTwnzrTDvHh3MoFsNxGY1wUQwnh1ea8s24AfVDz1vXd8yQgkhqdzVaKxiDRjKE22gSj",
  "key5": "65PyBWPfsYrBK2vWABnEHA7zvZqtnL9kYjt3Ndky7DsG1xV8p217BG8ut45jqThmR9hkkRukp2QuxvNDukEf5xhc",
  "key6": "2CWsrZ8uRKBhfygbaxUj43hc74bRBDrzNjiLSxun25cwaCZTGctcoaS22ChQRL5fuCYLTL7RoG5RCKuU8QWzgjur",
  "key7": "52Yg2dbgg2Hty6GKTRz4ppwq4zdJKs7xVFfkCRLAXKd8CyV3xYoZmnFhTHK2gdFnbamQ83jbxWxs17MCnKPNjVbU",
  "key8": "5VGBQsRcc7Za6Bzsq7J461wJ8yG1oG2xhVvVJwb3xszF3qdxpnH33SXTDhyUye8NuyNjkWo8urtHP3vH5Cy9u4gt",
  "key9": "pnfJ6wc4yVhpZ2WcXaZ1WwicFubZbf7yy93VRguCsgaLPoUNwzJmfLKtxvzbJDxqcXQRGrwWKAfvUL3QNzZNy1L",
  "key10": "62kcEdmsHMfM1zfoXBk3dgQtcN2N19QZgiWsCHZ7imPwhb244JGoApCXPhyuBHqE4tgbLqzTvy784yAV2zLZaRYJ",
  "key11": "5ki2Mw7iZyC4TjKHnmLs5CYj4AMwLqX5KHS4dVFEu6aiXFu5WGpr6XgXFz3kyPwwtF18EJoFVgXmkwqEapkLBKVq",
  "key12": "3JNAbGcN6MM9hZRC9RTVrgXhr9TYm5F7TochmyfkLAJg5q4sRDD8PR6YZeJQrixWhvksZ5NvZvFkbJJg2ts1bLao",
  "key13": "5mbjGjensNst1hqZ1ab6wJS9Mims4FbkKUModnomGi9Xcn9v9SzHm2hm7K4QMQKhH56cQeDsgRv3UTto1uzTTboH",
  "key14": "5HHzMm2bt6iCVnvmqwqtehu2sMqDPL2kCbgt4cFJAzsssz45CEjZxDoBpCHSMMtDCd1Kto4xbxPX7M6xn1FVqSjX",
  "key15": "58kriosvf8rbSpmHUKUFSvS25uSwZoSGhrdgNSEKnsNrBZB1pHhALN7QkhahJ41FBqjXCFPiLhAGHtSADy1RSFdE",
  "key16": "3HnRMT5VCe9XGx6weU7D74JsabrBEvGnqQsdchrKAVwK2qYVpEcZ79f1QaYieaZxAmc2rHGK64JjgLbmb3RSCpDL",
  "key17": "tPoYsC8NvRD8WqhhvN61Xx2r1zHbkoLgMpyZX88HKvx7Zfkf1BAuu3sRTEJhx5dzwAosoXwwXk9EQv17HFPm6ne",
  "key18": "2msSJbZc67cx5UoB72hjNfTP3QRqtSMt24zeXx3nvYBPdW2PnoRckZmuSqdTofaEPQqkRKMcPFNojpKih3KkQ25N",
  "key19": "4JQAsZo5LMBYR2u5DKSjmoUh7m87jy6Us7eSC87G1CeBZ1JFfaRoJoE45JWpxCz3D9hXcxJFXvayVZx5oNANNUSS",
  "key20": "v1rSksfkz2KsAHqZ62g7AopK1VaNrVcG6NxjSWQkNNPGmyMRzQEmfqvXdb2FMRMD9sHD4svUmKWysKpqG5JatiR",
  "key21": "4CFi2gsZb3vp94Jja6We4NYWDcKKGkkEzeBoAXrY8N13NYfQqmP8jPwwoWpVAzESqQVeNm2X4YxH2Fm3AJJc6QAw",
  "key22": "2BraayFTy6pcedFcZLMsarYysc4ixzpHavQT5PPjGvGybk5geXxExaFbCt9qXsRHVd6xucVsGDfvHjkJHxMeVdom",
  "key23": "5JoEPsa3J4MRZAEcJL17P1gUSovXfVowYCohPWynvQdwxJzQCT2GQzj5QeWABJj3wEjSQYExhDPC8H7BgSAZqGLb",
  "key24": "3KeWvqrMTA4Bo78AfPsuF8s6oK4Vy7CEFeRGZ8ArcMnUtRoapum5cGSZDWuYX9ZXkETqRCvVwcvo2WoSdrzNS8RQ",
  "key25": "2ZLRLZgh5ffJU3r2FfWn9RjUG7MH7CTbbXoGbw12SGD6xTG1EGPyWCMWfwvi69tr9HZznc9Kr39f3oRBE8yWMjk1",
  "key26": "54g9gB5yfLeWo7Z6wCaWWnhHKCutuEnNMKBG4Umh1pB51TJsshk5auGPzf7hWiLnh4Lf5frE4HYVUMXUmfWGhXst",
  "key27": "2EW6ywCHDRhxT5EVwufDKkSyAg9AnidvA4aPRSJuwfNoXUsCjS4srAXf2oGFrqWP8AG8eESVwfzNwAYDgUg9ZLnh",
  "key28": "3A77Q7nSRVQRacqkzbMPN5pSmGAJnppnwyLnfpWTv7XNqYanyrtSBHta83DoVbqdKMZ1LskTLuHqaMmiDrMCu1GU",
  "key29": "5PqxsdL3hCJAHQVyhhMvYdJphF5o2gHJjfysnkDe7cXdmyh7XeXkmbm4VutsKyUvdBU3pfRmRzMS4rGVDPYBk3rS",
  "key30": "3VCgPNRpW6YqN5mjkbyfp7VbGPwS1CYgKpMe4GnLiRDKhStB94XLkVY4ZNbGboQ5JVGztdkyZeaq5a5sztr5fRhy",
  "key31": "2jmDFXAEGmSgYxSgwbmHhTQWxaNuKa4cVPba6UfbgLf5hfkyAH3ZQr6vgaiyqAmPBbzRw42AC1DwNPHj3eGthQNF",
  "key32": "2DqcTxDFb2kUJuKPpgcavhhJYa3PV23ysgUTZ1wg1f1h5wMkdMAGchqWu86jH4tmTZoLygUUnygJBdzDkqBSaccF",
  "key33": "VmkEXcPDoF1AszVhgZEQYZzpBvam16HopUrVcBJTBE7Aee1gDHZ52kMUASBdRkB7wfCnhCxLVrtxaVimERdoCQA",
  "key34": "5VVxJmcgaRtkx5M8dubypATLGKUzQ8QAvv5j7p6rUEQApoJFe9N8HqVT3FmWExSZixbMQSpdXfZ2buRRnHcywi8y",
  "key35": "4sVnwjNbtFtPaxyp17m3yEVggg9aPqWdQ6QVB9pStNWi7njDZ9THo2wGEM7HjtAKxG5mT4mqg2x57x3WBRoGzPtZ",
  "key36": "5GpGD5aHTwQQU6veEYQUoUdJVFN4ECnzen953WKkMSCAY37Gz3LxLaemmGRt3xXh4WUGEbB4xdLt2JWzd7oHAgS8",
  "key37": "4pE3QKMscf3oQoLVNair1jRD8Vkm2BECjpuY394m13hLRPJkxkgUEuTPad3LHNvj2dAvTD2cSxebDHhDvppvnZRQ",
  "key38": "4j7ja4cTVa8ZaPzNuAfdjtnYYmipotyx4RxfjHzxx4DCh81213AZVb8MoZWSu8sk5ijLMFXkcDJUcb9p42N1GPZA",
  "key39": "57LRqKvtKi2RtQAWJW17n5c3JvrksfFwepafU9dQKHRMX8RbaBcfnF8hoWYGTjqh7WVuKZXj6ZjUgESNrR7KBKdT",
  "key40": "tSGcqEqEagbwrN4FiaBekAU5fdEyfGnEbnzbwFFmAhU3GuNgmqvMpKrdLqXyJXzJtitm7NDsAoes4BSn5zQCj2Q",
  "key41": "3x4zhhboT2mA2qhAmWUT7TKkEgwB1WQHjUrBVXyii5CA8PMDQiAJbHexJBno3p9ePPhfUQ6MojHfsWn3PShKF4CF"
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
