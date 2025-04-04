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
    "2WBq2FB6PQynryjs1fRrHWH2iLLN1DmsVzT1foyXiWZiUsC5qoC68bB9y6kZQFDC7KtpHYELKHSEP9L3yst2FnYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gkGB34iTeYyPFpR7dL2YBt81soB79bF4tqznbnwFMEDfdXHQaKAQAGDYrs2zFF1oG9tw6ei1FrgztWDBajuYEKJ",
  "key1": "36ekPRo4HgrsjGdSnwpRpEJEN1FRLSBfDa3ruUu6rbouvtK6EBhkaPdfXFLxHkDYVAL9PMSLTec3n88pChHUBhL3",
  "key2": "4LfFMrrkTJNqazmhzDsJo6g16dKLZreGw5ViUcm4H5e8WueHkTj5UL5nZixenS88NmApW4sS3fZVF557LzMnKmTz",
  "key3": "5juhj8dhiHMiT5HmAAStV6ZomdEHJpdwA57F65yEBkUUSCG5bSWY6bbUPjV7TmLcLVyEFsHPCntkgjLUGCfeC313",
  "key4": "5i8VT8QgDVQKAUiRg7dfbmzmyngVtaRneQb3fseaJH7PpkdbKRudtjv5NHXoMSyPbtHN1FVaMCb96UDSy3fQd28H",
  "key5": "5kMTnaJDiE7XvYcdu1RLb3DnZbCTW7KhX5wWbBV9NfFsCwMFvT7rWhFvhHWfZy5fdqRnHQkZGQfpxppmvdyixznb",
  "key6": "3PUdq9ci8JthRZcybQ4ggd2dfvtozeDrqQLtG4RUVRFbPpb2VuomLCfo2UWnaVmS1hgE9ifXVGFujnnuko7MaTBN",
  "key7": "3MB81PT8tVS3SUddFV3QdGWNmheEjPvE3pEJCGjkUQn5kjJjt43ZpDChPR4s5JFmodYNKerh4UaigkWycshqU8jX",
  "key8": "2HdRuy8PWiFshVQFHxSX6NdCdE1rDBvt9Ghe8GBHRqNpZBK7CD7wiEExbCxrdFE15WVVHW5DQMyA9fUrXRHfD1Y2",
  "key9": "34CiFZ64yJe4TeJeBjVSrau8oUoCka7g47ebv2Nr5wBFrvZ8AWAVfksT84T24EETyz21M4HCkkeJ4TdjRM89Ckjo",
  "key10": "49EYzsSFT6onmCuaMVB5xP7qWr5CmJvdm9R2T3K7kvgKjSCzKpP96PBGiaZyFjKSh2kGCPM6XXNRFz9yQ3nqX7Tj",
  "key11": "4SXzqykz974bFwVeTT27bLL5GVaS3Be77XDBvnC9FKEbm1VKW6xVj7UH4z3JgRTnAUVC492TogUJbJ4Rxbm2wGur",
  "key12": "33c9VRZXNQBs9a2WP25QPi9PRE9remDnR5ZVTpV7DrmvRCjWTkFNFWTwcCGvSvZqJAyNDepJijhseDBgk2RQ5env",
  "key13": "34N5NGS5YNNyNrkM9V7pF8iesxrfqxRNiFX8oFTzYhDKhVkr4xzfRay6CnTh6WwGDg55UuVFz7H9DRksHoxpJy8C",
  "key14": "2wzwSPayrvwZZsDGqWXmYLoVsW8FPi8RYryPGxdH5dEM5LN27yFJAz81ogUwikX5hJBTDmjN5yeDd8RZ9mh9xVtX",
  "key15": "3s2VRjECdNMsYAXKi4LhNzV3fUdfAPYovMtxCXfbNvwr9WtqtcE8zsF9J9xcxBcVjSdFyyhUQhK52oJXvXbPotp7",
  "key16": "2xgDCL7n434E232qWpCf3GEUKTqKt5AiCdKscMirQ2EGPGRFbDkLouc7KtVQKrbKhXQkji1uu3NnNMkC8MWNwZeJ",
  "key17": "aAHkvUV8yVziZMZ5Hc6eVhpVhbDiQZtoD82t83CtthEa6LTjToD4n9xhQsgPCj7Z4eAPXYq4D8DomjtqHCb9YBp",
  "key18": "FdfXJCzgdA1WikeTS7wMDkPQgrMiE59ZFmEQtqQXkcuQMmNartaEckqzvjEhHhgQXnJMrjskJd5DeBVZ4rS9XJM",
  "key19": "439x4g8CTYwBXn64hizkbKDLBZpQGooQUibwJyNTbP1XeRxgXUrJNa4B5VkYejvuvop2WZoMk9YbuCoVdrcAH5fF",
  "key20": "4aXDNSLPEqfQ46yz121wrchJQQe5Dfnj37SbjAmGMMt8QV6qVtmfmPT3Maw6oxUUHbyGeG825PrQwsDZzy8ZwCUm",
  "key21": "2QNqDq46aUDTyah8pGyRTqkZATYHZE7ungmKRNmEowHHQ63cN31KW7UbcEjKre9fWExRbffthCDK4bhLizWTmZCS",
  "key22": "4asXPQW7CUhTjnKGRDy9znY2o86nTLCcdMDqN5UcnWv4EFE2uL1iZs3torXZqYJGCN2gTV4WvGZWscpVAJNLwyqz",
  "key23": "2Nd67oZkTjkfAYCyGUZFeL5nEDrKQnbyV7A9KykPnpqk4cMNiTWA1PcYQaweSvoiudS2L3XY1cZc8j6ynYEXEH15",
  "key24": "4QU5oKwoLPM14xWUNcpQw1BXQnPDeyZVsTH1MUrGtA47dDdYU2xXKFPSdxxCfb3tBnR5EX6AVLrNwhbeRyQVH11A",
  "key25": "4z7VrMjLk3dJ8ejSNMFyCe5SyXthAPzfCDdjyzrW4t6xijejj8jKZvZu8zYVhUHworbr9beMisSpvFzyYcDd9nYE",
  "key26": "4qxUfbqrjM6gL5d2XUpKrfMyBgAFL9AxM6vZ2AeNrxSD1a3ApZcyTepeNwTgPTTSZjoaADotAqYUFu4Mco5PJjy8",
  "key27": "2LEc1RmfAhLKL2g5dsbErkUWKbuqsvJPoz3agHGHZpDX9uQCSQeBcJTXwAeo1zjaqmXssCQ98mfXZ5QPsJYT9Nyq",
  "key28": "5LPtkB4Rzkyx3Vf31wnGGeiEn3eQuPA9bx3wdhLkkmXuSQTWES5KngemJGc2TBtvivj3VyNNt5ciRoX3dohW1MjS",
  "key29": "5ppXSZuxmNkM6zBcq9v8AntPqbFoM2AW3p5q2DYytDcZSqBCKmYbZgsYmPtHemDuKeJXhUpJQYG9iKcSvMYZihrV",
  "key30": "3A2z9VmcP368wbLMU11HURxcYS5wm3nzHDHkb4ZwyLkh5aJ7yqF3bwm5G9YL2Ju77tq6Kszd8iKMMF6KkECznuQA",
  "key31": "5QQmXCQm5oUMf977yDFBfJ8jeP75fPHbWEuJhkbTj3akJXRS54YdxXwBK1FmGx95GuPBVAq7ETGptMNr3CPxPyYk",
  "key32": "4QTDSGaXiZLk1fhPtZa9cBjjMkE77YxWWyg8qekXkyMr57G9SRGFTLzSmqcxvsWZYJBCzxjnGzz61TPPw52cKQJ6",
  "key33": "46BPnoEThbMwYeriESWUxhAWxq3MoAR2cvUsc5GAAKv7J2yVK1s7vj3uf5FogZiVtXLJTxmrcw1ketF6iUV6T6CW",
  "key34": "5dPoAzP3xTNiRdeCuyAWE1ykBb7256LRzsgkTr5pV3unmYime38R1iyMKd7tcYZcKWPSsPgJgEm2ZA2MYgwnAYcM",
  "key35": "dX3jkER1B8DyJFn8aP8NcoCm9Z9vPfBy8VG1kKrAc78HjEnH3gdw66xuJ8rK7Rs4EoXMRidd5JB3k7WCWdH9NUY",
  "key36": "5kyvK5BcSatVj6vCTJoGTh9H1wyQQb1ZFwB7fJ6Y669j49g5gTeByNzVbyZmT6D8JiHjdK2xPuPQBrv5qAgcNW1B",
  "key37": "3bRWrwvGpJA9Tw7AZbkRHLKVGutrfeEixY9t8iAC31QJZyix6EuZYArDHGSUxsjjABMnCMRo8mWSLWMsMZmYAbA8",
  "key38": "R9PdsJmVsSgJC4wjVfthYHZcaTVg6Mq7V23jWsZCjwwedDYNBqPW2Bd5pUnhKwJ5h6hEEx9VAXwP5znYeSzXji5",
  "key39": "3uKwK7oXPYyFjMhJNVHcFHH9xfGTJ3MseznJXtDfe3S3q3kf46PVB4cynagg3BMK8aV7uJ6g7KuTSSEYSPn4VGfb",
  "key40": "2BjAMw4RYaFT4R33puZiQiRq26BJbk6h1sjWZLmahMGj2sFc3mgrDjDWDGmq9Z6nRrYJjtDPD6ggqB4BEhPkTQ7d",
  "key41": "4YM6mnpKbowfmstVSQXYkhW2hpupPXWXH248kpESS8WofUxiTzFSVPYjvLF3oh4XrdavvpJLZNNnGr9bih8L5tYi",
  "key42": "bqbkupfLdzH3H77jABso5Jb3UpaSm1kgGaFF3yjoDZnvS4meRLRt9e2D1EJfK5VFTdAF1zKicKMhBkSmg5Qcoc7",
  "key43": "5WC2tKFzVHpRgnEgr1yx1TJZDuDctnPiTmiHH7B2pYjmKCicaSUSQdswx5barmNsoorha47CdQTAahWiavcU8fgx",
  "key44": "3R111rHhQr4bEbUAn7roHtNVv5pHbDYpu7WJAhZrHMEtzFeLVWeHBVXSuroy7s5bzGHMMrWXveCFuZqHsvtcwnaS",
  "key45": "4P1gDLZAfBCvzeiqKsSY4fhm3CvLaYWV1mMpBv9n3PLMkKBikxUWXAop1pJBXZfZrVJkJddnbV3QT2FLsnHhBf1M",
  "key46": "42pm7iqAeRBVNqdfKrGrWZZNSBknyCewv6q2T1apTfQeHbGgkNgN3es9Y9TdEpKC9trKuVSFMXdyAQD1i6b8KMaf",
  "key47": "qWAsQY9WmKHGWmoDrogzmuQxLtpnDHhWdp7oDyVVinyCngL7dmBGt8Sdn5CSanxUNZrAyGtnsE9yUA2nGABtkrP"
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
