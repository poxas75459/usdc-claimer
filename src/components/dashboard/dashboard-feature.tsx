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
    "ZDhoTUcMb3WtuT7pHLiH6xzDvSBbxJeiNqP9eM4u34e2oCephPqgWTMLyMBNtEySfoq4sWJdv5Qh67LjzLyafr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37NbWKPmuAAhzhvMBGaLXiYut3eQ3gifa3cQGZYhgF5EVoajJi4wbEgEyLW9AuvKQ1YPGfTwW6MbazG32qG76NBK",
  "key1": "3DdKeAiYuxDvH4iFnHVVD1LJhwje7yGBLgR1z4ry2VsFTEseskH3F8PCazeRJKj5vAqrdQRaKTffeWsH7UWp6qg9",
  "key2": "56gQXz7eEKUqKQqja4b771n1Qr2FTSLTnspdFSmuozxeQrXpjbQzt79bRP1f3x6wjHZBLNuuzPGpRN8GVRMd3hsf",
  "key3": "2bDFhwgPajpqCbovfGCqRuRLhMC2NqzxwiTi482ktzZaymNfaHnV9cuH4DrpLCBk8RXUT771SVjkfEmPCpNhpCZq",
  "key4": "D8KmD7ppFTDDoADcUWurDn8fH1J1XCyyH6Gj7UASUkni3KKdx1YhcV7LgDRrWoYNqF8BQ3yxhq99zUS82z5BeWY",
  "key5": "3ofhAFEmGFZShVpQNENii7rJtNNfXvizDWmoYQKphJdNKrkd3eKjHbicQHhcUWK17Jyp2Mrgh8vRPriM6ALdydQa",
  "key6": "3EMRmj9oxhcPZW6akag3tgTfKwG35jL5bNENtLnYpiHg7ayBP4G3z9jUjXnnrLwETpXrbGbQDHu2cfjDEGWwXxrj",
  "key7": "5EKi9ommbhCVVDUhAdpDH71y6EqnUEcQ9PnReBxd9b5VfVei3ocC2JyJpCmBKj7bgh2WXNCQg5g6JYDsxSUPQdnD",
  "key8": "4UM7hZXzeYhGZuCkc9Ynx9NzNqPMqUrXzC65SgidK2cFt34HxU9bzpWL8L4G7tFn1hK3qY2JQdCgynWhMhDJSJ4o",
  "key9": "jjroiLg7ZByodGubNFFMB8p4sYzwA3ViiV5zicDk4JvFEEnhSWh7ZomRzmMQB3kwhY1FE5BBJwcfMqDSDpqKJ8n",
  "key10": "3yJhwADZK6yUnwzgkfoMmBVrNdPW4RNsmNtmd5HALnZvApvTgCaQEBAvnvDcEHSce61XCZpTpk3RirLqWD5Cckgs",
  "key11": "hmbcBVCjNZEFswt5wykiV8n4AfmsaTVLE6Kg2vfErTnx2QHALADN3JYbvB2mrHAUKtcMzxqK6BMdJebH9sWE7tT",
  "key12": "2dAXNJv2cYZvUh3QD4ktBSWM4ZjNiyEVnQVpEeoo2xEh9WJWL64aZEHftNVAHGTP1UYqkwoqMYAU8UAoSJoPHJba",
  "key13": "fGTMyCRRMSz7MvC1iSQAdS2q4Fqjx8DoMmPuWywTb13mMsjtQZkRPGjw5hu6TwxAucDexruPjQm5hrvA4JP592m",
  "key14": "27cVfoxxUBojafgkabKYPNn4qswhHHrnrF2Wd5FWbdrCdxwriptzJs1vR5hSHb4NoNj7XSN5k62k3H32bCgP7HVF",
  "key15": "2gqmyG3UJ9WrftVDQsrordGNSdT2YKrZR2i3F6VkXpAXXxQE1XxjyCfC7chcEZTEoeuVBNeZPKd7fbuoLBuWSTM2",
  "key16": "4MzpQao4Cu6Yguq6R9haFd7dffhxraaoHSwhzGFzsXaANWaqaE66rZu3BYpndFfbcYVDy1V4G7LtAhGSegCmWh2v",
  "key17": "23RuXsvmhgdPiC6PP7K71Phu2n6CDMPeLGcXKSN94AzbQLM8zqvDGW6THiuooBBkvqi5Ls2Q4oKvikCmJv6BQGi6",
  "key18": "4yChCMdGC5rbypvowkkFbMHhS3tBHd8oV8DPDaboxJnDiat1cvcduhL8sUjRuBzFqg7YFyceVj1YGVvVwevAquiA",
  "key19": "2aQqQpWSnPJfLa4cDAjVGG5subHPywUPcC4bye3sX2xXoCmBTaQ4istiNgnzkgqQqBz1fRUD9cH5voFqurxiqjqw",
  "key20": "2nmUgX9XB4XSXytzVAVRMwbYzgA9C3gLqNztvaizC53K7LnbszJXpiCgvmbUYsaokoYMUaMP2TVhzmjPCTEeZCqq",
  "key21": "2umoTqrhK4EkbTEZi1uvquodoCpNUVXu8ne42gNw3XkQHMDWxanDKVEP4p8iSNsFGeqoyXGRdUu7WrFB5W9saa2x",
  "key22": "ac5Pu8fK8UDHSB3puD2iQhxFKTbFXgiXYdn4AC6w1kbLosh54116QRRaNo2npfGXsck9mN67k26mJUzDjZ126QU",
  "key23": "2QXHkkhr4rbDTcLubWjXfSCbGbFzqK3WvH35Ey8Adie9uonBr3PusjAsoXepfj5ZdwNxuGevGSVMXb7heooNuHaD",
  "key24": "mJ6RZHByFSuocKtRy6VybRZjJ8JJdraD8NoNpvhmWDJywEXU6ncj8nUBxW24zi4T43REFGEt1DVZzPLdWxv8w9E",
  "key25": "5iDPA9QdPtiZXsTfqMG5vY8pWgFubLZWHmU91W4zNgGyBXsDbzx7R5YBvAWwaLAq6wDqkRLz7GQrMwBnHTt6isqQ",
  "key26": "2CgrEesoG81osQCbazLKzVNQMt74M4eJAyPpX4h3Y13rXD47QUUY1x1SngMe5nX6WG9iGtdfPS2ZQVD2L8uq1cyG",
  "key27": "5VdHSzqBkRqfCCNHczPSDBnXuSaTzvy6TsRUbJzyYdfgYPRCcgcTUVfrDEDWPWszgsPPnkeGW4urdTXjKgDpiMSa",
  "key28": "sUkCLbpkS9LNJ5HfHr4eYULM56XeXki8ZQKUca99g8dkk5NVZDpHHQS9tjVGXiTBhWUrPePPNLZRfS4HBvVTq3e",
  "key29": "3oRABLetsJ5ZHEwoa3MtedbP1fJVsA9jp8HMzvnTHdhRQkS6moQvhhz11SGBgkeG5b6APwB52oFH4yxhu29K8LZs",
  "key30": "3DG3HQusq7r7YFNd2B8sQCWP4KStSPEQXXQjJ8AgLz39yuDcBj1qWwGqUxxcNwwLTrbKdTK3SWn4NRuZ3zJnfwQS",
  "key31": "3fshPeifjYtEpTK6CEcwZGNH1JPPk8iVdieDvxHCTtkxeA3rqMy5Husfht1SnHmEi3PSWb8pvwocDYJ1Yr2P4jtr",
  "key32": "4CF91mYzpQrdesxNkrCzzj6uxmbDjgnxsAmLn95vzz6kK5Me1BDe2xxUgc8VmNPZrLN1AdAvxywSjJPHgLXFSdbt",
  "key33": "YG9SDp16mYF1vScDQwJQJHyW2w6Too3Z5FkcEqym6yFLk8zBz4ZUzxQSsJtjUV7Mfow9fcfSE2KZizS12T2uHw6",
  "key34": "3rF4nxhu4F2S1j95qnFtUWkheejhbq4Fr4gG6V6M7qxhVGMjQXJNQQ1nDFMg2fcyzrPnjS8EZCUvuRB1jWYCsNqu",
  "key35": "3ypHKXWEwkykmtvdw3Fpu3hiYhuao1dNYW2qG9xw9uZ3TpAPeVPKp1A5sA55DAhLdw4hjqYM61p6BkKbdt19DAu",
  "key36": "2NCrzxfXNdQfM6tWyYYtWEse3QQm2veMpN8ymSvAZvFnXkZzjZFn9gQFd9UeZhVYWWCquJQ1xc4bGSrouZFnomXg",
  "key37": "qbmXwsc8LydKkAkGAuXtUpEKxDD9ZGPScRP9Z1bdWejniUGuHAmwjzKUfvdn6Bs9rL217kkYZECoMYk9FRXamzb",
  "key38": "dCEf1P1WDg3CqJ2cVXRYcJJfpaeEpqUtLpGiA1reXAjp75rEbcLMvoiUeJS4a7woVWyZcUoyJhyJzfgHxdewz2y"
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
