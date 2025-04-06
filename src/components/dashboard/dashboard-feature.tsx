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
    "3WtKuPCjv6ex81TYimagMyPSozrFQyjnjycyDWeiTiLYmi7CDUjDL1mjv9XGPxYVrQXeMrvhBEMFtFt7XuTSgNxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y9ALVZyBbnW18LKWg3YTEfAN9mee4yNaJmBtYiu6DrSVuWfHsFCV1LqYikq5ct3TqnNUszRmGbfDzvvHQvcXEbp",
  "key1": "4cJuGdttgdGPpHFQ8iWhsVmWdmv39PD1BteZyHHMT3iFwrgmZesymXiMGRxoQeeRDioRmYByzqYVRpRo2J8rLDs8",
  "key2": "5jecQooP8RJJ3oVow2cz4GsMczN1tkfuN3ewsGgU7MzcB44u8KuAwgqo9vxEgHQwqYGM4uqCHupgwfQYsLRS4wG",
  "key3": "592gvGmg8pFoBrr52JDf7V8uvEHFstmc8R7vkgvjzBCBJ5btLpjU99pF1eSfYW5NL5DuxdBy6r4uhPZTjQGWWvdk",
  "key4": "8mUzmghdoeKzW4JnGcvgByTC4dDYEGniU6buEWZYtw42MzTvHBqtydsLiEAgrbx6pcNNDom2qXxk3UuJAmmihjR",
  "key5": "5q5TQYY512uYaivdE64qZeZGAmDgpVmFbnu9YH5T8uErE7FwmGBeG7LAyDa5sf89yFuBVfrGwZ7qG3fjedoiTEGy",
  "key6": "3aRTSdD11n3nmKj53pzHEK1pLyXADWEcVprpgqAeysfPSkD3xvFu72SVo1xdzBLK1MeCUX7Gwuk1CMh8RyuRHQjk",
  "key7": "3v7rFKrnHqkisydAVMJekgnGbhfa7xnex632zscewxeTmeiJPTJEGQvwPx44XXqvCFPvSixiwDYqtUX2o8T1Ryzb",
  "key8": "3G84hzJoiTMMbDhrejMtbPqcztzTJ8bzD3ciwNoHckUumJ9ZuoxihexKgEBKNovdmE9DaZWrWCi2CtpxZshytyX4",
  "key9": "5KUbfdMqevtHU4Rn2SVbevxNhCBXZqHDMXxzQMHRShKJVVCuYL15K9iBvR5fHhZ76cb6VvXXb6CjkV92vM5Q11oN",
  "key10": "iNdpAF62muYHaAsFn8RiNH63uoic5Cjto8xufnV8CuEBiBHFYDfxygUZgGxyEEoG7Ze1fcRd61XLhpRoyrkdRse",
  "key11": "QtGHJf86Vq5djQdXdkFcfcpiDbmi7KLx5Sj4BTQfaX3fnTFX2PQ6Xk4z5gyaFKXsnYGEaZbvLaC2AxTC42P74oz",
  "key12": "2KFVJ7EL7VtvChtBhdn7dwsy9fBt7i1kH1Nqv2phX1QwPSjeyowf4jKHFik6xmVf2sGdtBKexPCFsZUYYKg2BXKa",
  "key13": "3ZB2xPcVGyLahCxD4tJ3LwHme77xDDRC51oCg4BFYGS6ephRnnhakWBAD2dobeis3sx9DMH3TTf9fnnsnYsGBNU3",
  "key14": "5gva8ejDmo1XE4j81WpTtVg98D2XY9FUBWGZffbQ2uHkENekiFka8Y7GspTnvcsxyEQyF9qtNptQSMrzH8yfYttT",
  "key15": "2B7HNVapPMRmwHU86XMyebE5k4pSj5wpFFbJKp5BKeo3NGSVRgf4AdgEEKAVpauVQezK8FXkXZtPv7tU426JTCbT",
  "key16": "4fn8boZPndxzcBVEizCKKScGChBvQ3CHdz2ju8uqAuNFbVQsg58296ZRCRScYhfpLEf9k3Gfj8V4sckhhDG1pVGW",
  "key17": "56rCNbHov3AZoTMTtpo5zahTdHkhY9rnu893YJUbUccSH52eAn8oDaGWThxjLVn34Xg9bhgTNZcgrfHLybhwjij2",
  "key18": "EdWy4s34vgLgRyh4ackwQrad8hyXEq3VAbevcxMeLiG7nt2NcCYk1uCQfEfftY4r2AoeVEVBAtUk8RKCFdb4k6D",
  "key19": "2gDvpuZeqc28UqZZwnfs9ZqWuTXecHfa12abNB7ZkWwPzELb4M1GTnbTU1rW8zQMNJV2vT4boAR5rkmhVhxtKbGW",
  "key20": "4crrh46pQGMdkmhrGsrs9N6juTXg2QLpaEv7grfpgYsCaT2T8ayGLqaXaqJrWg7VczMSZHHGCE9g1RLwNpGWjgv7",
  "key21": "2zsJCF6w18TU16HJTiuRLvRwX3mMsWzzrarkiX4EnXJufxoM3Ah2WaYmp8amdSNfpTXX9qudJrEcX18NQq7xjPPq",
  "key22": "2MiUjYPKjrHs3TaqXnTZ4h8rDuGrkhJjsjQfvF8NAaB8ErsawoB2K7m2cH473AjSRAXaAMoMcTWgPqFX2qkmwiJM",
  "key23": "2rjMF1uQZhy1pumQX7xDHT2EWEbgMFTKdLtwpYQ1z582NoptyecfTtr4XhaSJ8v79idDFdLPkiAQh2mYw9nYR2hC",
  "key24": "TACSJ21GRS5Mz7KeomWFGLCrNSc4L4qykPp2zoBefGd3MMSDqDK6nzEau8Jnnfc7QNcin1BGFeVaybj6w1zLjWy",
  "key25": "2Frm9mNQjEATD1DAprrMigoAWCGRUDoawBx3czcrNeKA7tDpp2TAayksc81trqETRF66LHsBxEwTDmSJ26hQTdKv",
  "key26": "63krGteYN94fP6YXjmMfrW8tvqkkCBPSmxxduXoFS85sT8hyzbruZf6FHXBbje6vbkPyQcSoJVLWCT6apqScubw7",
  "key27": "2Sqks1o3bPDJ69U4wHzBrr3UyHbJosTktojB9jJAoLivVdSLLoyYFhUzQyyFVeNRtHkMJTGp6bGDxyb2ZXNbGciQ",
  "key28": "ndGrUqBQ2JZfxs6XrWe6nCHS9rUDP3JvgtuZCZwHRQBCi82KGjnRSZRBuS2busYdtTdZjPYQJKRFuCznWz8qQdZ",
  "key29": "3xfa1T4msgDLKAEKbVdJFL46SuwLwT88ZfKt1sT6RvCv1fcJe5xNdEGQaCZdaiBcWvexX3A9jPrkPuHBCrxfVjZj",
  "key30": "581Lv2k1VNReBxbQdGKpzyt5KesqC7y6EmVGDCgawScyZVdBb5KMNj9GYJJ7bbpxheZie2s13FXT41hCg8dqyxuX",
  "key31": "5VBCM7pENmuANpJ8ci9eN3QQeZJ7GRJZHMxF3rnmi1tWDLvfJT8MgBsH9rdXfXz1254FhUh3hmwUzbXEM1aitZSS",
  "key32": "1QF5numZnuCR59L9rTmatxPHvzgEeEwx3ydz98z4ZzXSeD8cUvQbYoGABHMoQAywybmpgMLq7xCwPg9smcraJfJ",
  "key33": "guorpsJQFnmyCb6VK3QGjnLyFJs1BSPpMGcCnK9QboQm6PokUpHJKRWFttdJzghXwgWNtJBmVzM9ey8XfkqccdQ",
  "key34": "zM21SrgX3qAudskwBziWaW6DnH2NyXtKToNTPP1PuphzcVQV68mDy51xjgdtDDg87vhENXCX1E4zcBxo7NJVXa1",
  "key35": "JdkY1ZUVnhMGguYW2QPZMs3mEFjXRttJFUnHdUURLRwCnea3zM6Wqrjmju1JpZxVYAmSeFbZsDBtyi5XMCt5JzQ",
  "key36": "4ibKu1Ndxmo53HM5H7KdMjuWcjcnbdx7whGGBU9WNnDMUQGpd3qRu9h32NDdH3e3JbSe2F3dSD3L9PzKVmv1q7F6",
  "key37": "4Qp61e1FpLqKiPnFczA1HQRvNGYeoun2GQ3B2PeRi2WVkgKyLNtFYD1vYYE9wNuh4omvLXggrjvSJPZtwPVGh1DF",
  "key38": "3j5JWHgfdb1UkzbvcPoMMABYPdQhNXcGpoPUSSntqFYZhwdgjEzyLo6pqB5uEPPV6dVEsbonyLPDHojrQ4YZ9QSH",
  "key39": "52DnvTSJddYDPnVfm6GpZft6VVmYGRtHiAReHFtz1t9rff7gityuSDS11Yha9veckBTphmBz6jSeNroQUK5Tyap3",
  "key40": "41JHTj2tfTGHN6naDpa9Uf9D7i6vbu85PbaGqa5Ka8q1w75rC3svhcrKkyVwYkzhmGZruHvv7viJ6dLonbSxr5go",
  "key41": "4bEcsQ9FLhMmVx1FZqHHtb31r7A9i1Mx93P666BR1dmZ6yTWHi2WLdRYcrTtT2u7JxrvsTPzEJ2BHjfRJkBU17n",
  "key42": "23EZsnAx2GtY18wUMACFa9PqhaL98GeaZrEYrk6eJNFwGnRPe2NXTeLxaBf6UfiSWqgZe5TtdDRhXzPaaraitcAC",
  "key43": "2BjCkBPsFYJvsAtEM9FV8evUpNi14j6wrLLqPL4bhVgq6JJSasChxnm5KejTcPpkM4qzkbmy1mn23zsn6eVSdHLA",
  "key44": "P3WxaJFRrQtm7o8mGNEX1upUwf2Qbf8A6DVgPoFzTx6kKBuE4krrcgZ5Xdi5T9GQftT7Tnb6RhHssvi2otYQT3r"
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
