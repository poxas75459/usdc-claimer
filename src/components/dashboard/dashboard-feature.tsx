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
    "4jeju2roNUxxH43L9U1BT9Av1PXVtvekTWtSDzkYLYmBcyDzGWaj7dXR41dVRwMTLCQn6SSURXWaVDyGetDXTM9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xAgBhnihApKHEzU9SfSANEUBf4wo2jxVuMr5v5V9UnBQwBewD5Q9VXhFEfHEAKL8NFeJQet47kh5fTms3Lq8GVQ",
  "key1": "2Z3e3oYgxGN6GbPcPP3rjawogqhC4SqDdTAuHaAnm41yov3kRg5bDAzbokBPxh95cCw2qWoAJeRVX6JvW7wfKQLH",
  "key2": "48LpU8REBMRnVUSB2eYy8GC8ehxGfVYwT4e6rYoMdfmMotJEqkNUwUN5iDakn9mFw4nqPijpNfcjaQBJCi2N6rhj",
  "key3": "4yrUCKWQnRPhBqSZgLh2jrMLF969i1ZoBCAHc6XLccZnYUwevfKhEEyzS9ZnRPDQivjmeuFzuxt8M3pxffrpP12x",
  "key4": "tooNf1MM24FHS8aCLfrrW1xZ5esWioe87mUb59UwAtwY96eyhLjE6WxpQzz2Jo5LUPUbtEiTh5KYy35zGexa7yg",
  "key5": "2ARqR9MMuPcKuvzKcBi2KuBnFzdivYQXj1VQZwNyorVnt4tVU2XwKH4RAuR7yx316RAXdRbAuY8LrUmqVAmt2yz6",
  "key6": "5nsyQjQWGevBp6wqRaor19iPEZdMgkSqqXsP4C8cWJheLWYbs9t8NYnPp5wkHX1tmMPGc69gyTTBrdrBCuuZdk1K",
  "key7": "49SsqXZMMFBUwxxVPYKJd5UoSKAu1sLz3JL4y6dEVg7qdijGp7JENj56dh9Z77Mk8ZDEnAarJ9gScb8cG8Sk8DqU",
  "key8": "2iwEYGvamne9Z7etemmwDx51H8b7vpDj6btbGS7VNU68LGGdNK2XTdUd3N2sUG9uxrZy2Fmid5pSJZHf2JzXjTCr",
  "key9": "2UPiFXKYTRpdHxpxcjz6VHfSQfTT7cYw3zyDBjh1C16fSnDUsxYnnxHYxYKMD7t3PChfMrwLqYwaizLSEmJ25rYq",
  "key10": "2eissEBUTTvGu24aMPrRPyZAt8KWb9Cj1wCrWYVLJm15HNebcbEyKodZDVaiTqiveHwMVD8rWMjT3GBWGVPXbWv4",
  "key11": "5CRJ5qcFfFHTeAqAf1beDE88kFExZr8b7u6qggrXESSStz3h3kGoDSFLnfaFWnbHjtNizV2dNXLQc5obWp1XDQnW",
  "key12": "3kBSTHA5twZMkr8BQ311FxYuRW8HrMwVff9MdrYtMeVeBaHwjfp9NHpo5kerELzmhi5mQ95QAFjSWkENX2N6NaQD",
  "key13": "3t7BZerHpmqEkVAxcrCTprXMq6L7A4rGFLRax1qALUy7CmughN2rGyk3hndMLqF4EyNWTToe19huccebq296SekE",
  "key14": "5Q1JgjtigTvJLVcc6iHPWN1R7cRJZqVUUEnNY8kUUqECfUTSyzQmYjaY8y9bTiZk6Efxk1AQZwtdnR9dy1NShkiX",
  "key15": "364w3f39MeGGggLzGuwnAY7F5rA2qa3uXiicLGBpzKYVioftTcas37bTMB3axvCQFTbgc16uzeAVrsSPA2BE9Be5",
  "key16": "1NbKr4TekAQ942R2pqy9cwqFBiuBL7nTwn4wFVv5rfhGL5U4s45ryTDMm3uXtg35G2A4PTdUo9K6VP8z6GCq6Vi",
  "key17": "2rGCJ9kK8VNfdrtfeFFgnTExQMmVn9xye42UUseq6dswGF23HwTHPNAwVc8fRjwmq977uoopNRd7SKosT75nwBoe",
  "key18": "4tNZiJzEhFhEZnfVPdLKJVgX2yp3SXFMRzxNrTQ1saJJXctyH7WeqWpXjhhqCqp998XkPKNrbrgRMbDN31ie72o8",
  "key19": "5zEkrvXVG6GudUx5MDXr9FUmc41XLrrEtmnhQL84NTdmKaSdyhJkunsX8xFJCHveC8exUi6DP4vDkDQgQVCEG9aH",
  "key20": "5d6FyDe3G6ZVq71Vi73rPRXwM4iqouDxqxd3SoPurcUBSM7cGuhg4MhxReVDfUagp3Dw4aZFeu8RFWyRiVGkLeBj",
  "key21": "gERRmoY53a2L5QZ2uJ4VeDVch3mFB2n9rWQaoGpS2YdeeNE2feuP9U5oparBSLXtZc42wTnefu31BbW7strDPSq",
  "key22": "54LVTBSj4Sxn9UR6dxfcQXgzYvUsiJBcrEi4cejeYaTGDVmNej3Fyxvq7hK9mA3x114sTmDKTDoLNARxauvF74zL",
  "key23": "3yjV4T8ukxz7tkN6Tg3qTS2Mbibp2Pjh46aw8hhrCPookKvpUzjnswUvyajFQpGp4L3mhuAvxb64MfDCQi224HAe",
  "key24": "gvD4N7bKREH6rKdDHJWkBAvPqaa6TjesNdVfmEA3jQbqj4oxK6mEhuW6Kz14j3HfF67XQbmAj1GXPRH11CDg2gt",
  "key25": "39FR7qURni7RLhH3rjg1aCe3B7oL7Bj3bPekWmexXUWCQ3jE1JuTwLH6AZzWppUZF6yqMGeLg4q7xzgnzk6gABjg",
  "key26": "5qA7EM86FxURTgNw5JyCjAeA6vgcKgtDjSA1JQHxsweV2j2zyAWfeiah6FbieNjzozVLZBz7Sm7ooDeWsJgGsNVD",
  "key27": "2gkAey1iBgrD2khThA6Kz2MJJGXeUAKCGERJNxwzQ7cHsBZDGezQ6rdrWvBMka6sCXokJ3Xn9vPbsBqLuUvXmH2G",
  "key28": "5TF1ec1fDArCf3RWTbR7H6jcgoF6ZVVyEZdbnwT2YPUG7qhXTBC4iq2cbzohrz7DMb5gV8RjB49i2bsRoFYGDxaY",
  "key29": "65fauiXJyDqB6jn6eW3R3mYE9y9N6d4E9MSFHwy46FN5aWQ85sHHSCFgBcoMDz8zT5sK8HuB9vNNkqpMkC6LBtGy",
  "key30": "5CNpqKLjDZZMpEy7542wReRge4SMbJLFGAqQgmjPCcTLvm3vhTaq2sj6Mh96Rdep3yaYZXgYSwKH1ied5SF2uSv7",
  "key31": "AHeCbWB9y7NGm49c57GkF9xQc7VmqMjHvS9ZAtBqgn7Azc84s7bwQLA8UqMemsmboj3SHmwMrnFdkgLp53tX6UK",
  "key32": "5nFVADTf8YHKTKAyxpEFbjRVF3vpBhpsGwh71LfDyeVhQuAmPoyfyQxbTw6Tb4YM9gxFXr1db4CUBGsWGs3H5RVV",
  "key33": "5aXHNUzUdHx1FpZEcR9K9paNBMdqVTLXyXoUWoXBiWGf21UGy7sqNgb98iMVa5Ezj1EpX8wRUUHxsTRbhFWKtaaJ",
  "key34": "3Ns8H15kxxj1EceKQXACTc6dwT44C2gyqRqbQkScvBrpuntFi3ywpBBsievh6mT7bTSTYTgsE4HRGiRe6yAjdDZa",
  "key35": "46nnpfPSwc7tUFPthTjocxzRuEAG1XaP16yUYNn6y4AxpWQZBujGETAQYhyuvYWXjF7CT6R1dKCGgfPFCaFoy8o",
  "key36": "5jxpzpcWmTeH8vRWJkx5J5TDddPnfHh24wcvVqvFyLT1BNpcZoG7g55t7ce43ogDrJFfjHHEWSWvT7u2meM5vuDk",
  "key37": "4YzT8ayxGE9KECXF7jfbgt221heZrZrJWm7rket4Nkv5jEaGyYTfGoHk9sthRXVMe4P9yu6JBX3MQW4yhaJ2ivax",
  "key38": "massUvYSq8McttAEriZTgr1H8jTduYJwWtaNa19Hyt1465NSdJcwPwJifiLh8hdrNGpfPsbAsaZGgWAkRV1LkL9",
  "key39": "4RLDrMQgJSJxtxLytmaT1XyvNagt4xDHiYsRvifwTg1YVfzNMxpQ6puDTJPs29u2qeGNXePirfPZWpRbTYXxJK2F",
  "key40": "51qjB9vygDxXTGe9KwuKde3mfJCZGEnPMMeVacySWk8KUbXkb8bXPvhkd9LzAyfnePLw4ikNkkb4fiSGvhtR3tgb",
  "key41": "4SLUGE9edaGGcTqNH1NF3crcSr6huHGNKSD8VGvsf6rZMNeJL1ZnhU5gBSGsFNcxq1gPtp2QjVR9jeysAAt4SGDq",
  "key42": "3UCX2KbAVgyfbr738ySVtswHLfg45RkBCxPuq7qUQNN5YmmRoqrJ6tBwf4xy99KXsLof9WK35mF9YeH4aJG44KfW",
  "key43": "3Mfa8ajoQKcpEJ4KYPhzqkos76mhWSKkv6HbcigukMdBFdH3wKRw5nncmkxbXGe9BrHGAuJNiXs6NQ6KzLR4s6qq",
  "key44": "5t4XNxqCTvi7LfiXLr1KodZ82ZqmytBqGJVyB9p9td25UV12E3Dirmg9avM4fhUV9Rwv6hkSw1dGTFbGYxcq8CJy",
  "key45": "3toEosQWium1SD13xMpKWnHtcyM3k8sfU6ae7FQ8aKHfc3DCcWVNakXAFBVDpo48eYbfhnpyB9bsg1uB8whfmvKV",
  "key46": "JGjZN6D4oSHhu45zHdAxWRppp2sjtkS7HFHcPVBi7MZuz87UWxkLkG51y5WXmnSsYAQthtNK5TXUjbGeUTYejHw",
  "key47": "2Y7KiKy9tgpVBcgwvDPpU9yKCM2K4hbfBKWoahiTkEY1ZQDm76X3Z5f43V5q14tYPhPBpL9z2kKNqCM8KFqzK35K"
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
