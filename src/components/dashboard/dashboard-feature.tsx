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
    "vWA2FZfj1UzUecR4hrfjr6x2g1YFQoTxRhfVJZaspZjp9U85tHd8Fp1YQU3fwZaD2PQVbdnbWaPu2jc8mDbZZD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YhsnAzgxGpipDZCMAWvBt7u8oU3hhzJu4yXAn7HLLZTGfNHtozzZfMWXBJheTwg1G8Ttw8swhBmS5mvty25Csz",
  "key1": "4zv9hPyhUkcmdQUwDfrVzWUn3UDk9sKiKMAZthmkMswdMWnMT2j3B9vGxf7JymYSS6zag1JJzBWZyNt8EhJoRajp",
  "key2": "2WSsduWx2CPHBPwPjtsNyGirCwyw3w99unvL4cqKKP5Gy5yRqifXEckHWgaj77gqCwb3KXzPCze9qWXiyw2pXxzf",
  "key3": "4jNYjriL3Mpah4mYGMf3EpMHDstS95tLox7wDak61ZkMMfAz3XD8PLrEWsJ343XC721cFoTvucq7i5hm4pQp3KpC",
  "key4": "TLWxFLoywBecb97HcaeKQ6wYYduP2eDWfk9PxdNzScNbU5TtEL8zTLoWHDe1LBLuqxbjbTUz3DydfDGor11DaCB",
  "key5": "2nKogtS8BfsaYNhehzJNBN98YEkxWhDXgyEujTjidhmJrvQDtaY7Zg97ZrGz52CVjEgMmjCzJi935L5nR16MYE4M",
  "key6": "3kDFyLjxxrKarKQojaqfts9G2d2ni44vkSVPXeJ62FZ32EZ2Ta5gcSuCFcSHAPZqpTcf6BGpePNaxmQJN7Q443WZ",
  "key7": "4N1MWkZTmk53ksEG681UnWRvh9g5JVY9fGERnzJmw7Z3r16LdJhhhF352LLdnFv1TNpBqBPB76dTdqUHkiozr1kK",
  "key8": "25pinEym5ybvv2xCx4EmjKpN78M5jKAxEnR7aZnQVMZYUPSLEpH8JVUVVqsgFg2m1rh4wssmqQNYK92zBLZzz5JV",
  "key9": "3GEPQLMy8dv6yBbBCSgbSba3zRCKxNhFz9qY9EmfWuChzbQmwFDfcY7zRpeYTJ7qgugeLuBN4tNgWBQRMy4jFNri",
  "key10": "2emu6kdQZndQzthQasy5Cg75oGiNR1aaJwg2G3ftD9NuRWADNuN1TAc9Y2NHAd2yacBdJLGpv6oTvmQ52XiZDbnw",
  "key11": "63qmX34fhk7639yXcYdGVDucicKiFV6JQtcaZ87z1wMMWVhpC17bmC1AuCinn18tu49wTkYsJSjJvmx8tNG37iR4",
  "key12": "3ZPUvhPH1PUJwJC4EKch9sqA9XGaWk7oTTuDu9ETcAt9TWJkf9hCQ9tnqJT5rFmzpLuyjBqp6JiWsgAMftmXbqvk",
  "key13": "FxC5esyJyEKKcEWvvonjAijiS99SgjVyZkMEyXasymbhYcK5jaw3CvfzCsuDWnaWh3ayAnEqDc8wgvJfuMUaqq5",
  "key14": "65jF8TzGMBwS1H5F9LeEsVbEWypG63xbLTWfMMQq1rHSVJTGymmGyiRq5ruTtct8wq3oza6edRbgR4GsmrUtZByr",
  "key15": "SXHSvCJNm45yuGViUgE1HSB1ff1SESZLBKh73GpCcFFhWChbVq2S69UrbUpooZAqtwbdNkeS7FsVY7U6r4HmvuA",
  "key16": "3S7sdxArMHiNu4zJwKjxZJx14gFYYnFApMcBvn8v33XZxqWKYzBua6AKXUZkchqLATt6GtxjuMXeaCXc5MtxvEo1",
  "key17": "2XTSh3XrAAzPvvHRqjcQ9DvJJ2nVeJT2f8xD4LYyk4nU8dxW82LKWorye556g38aw3xXTufiCjHeMcrqPcH14J39",
  "key18": "z3rWMJYkp99MmwDuqJpKm48ANYvfwzduHv3tzuggS3uXSmixHJj3vDJfS22GpJt3N6bPwwSRidMWHY94cRQa18W",
  "key19": "4GTqq86eT6GZ4pqEAaiEVcyhn57SU7SCGQVPZxLhdfE8RSZvpvdSvEKngYXJQcMXwXcgKDJsevoHQTz9E6iZXfqB",
  "key20": "4aEm24epnfxSsghg6ueFgLZjGzr5YuvdoQx1saGVx5CmjmyioPEY8YPEdThjq1X7EWXdhR1UbqLn9VWmoN9sZGnQ",
  "key21": "62wGv8uynVgJ1jcJbvDEizW67q2dt1ruiFhx5KasoSd4SV3PLLsM7BubQXD6R5kH1jVK2DDqzgD19ozZfXB6nX2i",
  "key22": "4MCjUjeQugtJgyYYxmtmcd8QafDV7Dti6b8x1v1hDLGbqdSxmruyv9LCbp7Y4WzGdevnqtQjEYkrPY7G4GcoKZJC",
  "key23": "KSLBvqBquLD4wFENq7HDL5NZjMGHuM8hxetr5ZxHF31fsASsSuQobubR9CMRuGYa135wWN7LdvFsmQwbopGuXjx",
  "key24": "2ZDRZiurNMr5PmMfZQwHhKKZV6X8aNQXBRzXHSVAQtrqXPTeKVnQiwRy2Syun6gMqD8P6zDhRkfs9Ksip9zincdk",
  "key25": "5AeafsdwGwbSGTfY2aYipGN14kyCQYw8UnnQpLGsrUt87awUyADGoQTgfgvXeGMHug4oHGsLW81GNy4srbAqoici",
  "key26": "3436sDGuVFMbZdLobYBQgJgEwXRr3hzcgEgZSyQPqs8FNyH9wyJg1VPC2Devmf85fEEtm2RyjHBQbGnLzg2HPtXS",
  "key27": "3vLFRFvRq6hZnNSN14Ug4C14XXaxofytNPeMS4e7omVc5tbofJ931sR13r2jawUdjWKc2KiMGtnmhGaMhsrUzLGR",
  "key28": "Lf5zs71ytgC4VvH23ooMsXpqHmZLPRFkMsJGp9j6E9j6cYadBFEjZtCQEr2asDjHexug8684QRTpcFmDzkBAYqV",
  "key29": "3XSKg33nsXpheama9RoXuaVL3W1hmDEwA3idNUEGPgMceVgv1aXmggReCz3oka7WsxWc4rhfMPkpva33wuhntchB",
  "key30": "5mqR3Hw8xSmsB55cXwj4ZCDPYugpFS3Vrs3kXEPDngShJ367HwihW7AiabwqWtsFC4r65CNMGdmnMvJktppAvMb7",
  "key31": "4A5LPx6Eiqyyu1ub8bK2QnNe5zKDnP8kzKqasTiTnZ127CxGW2MQDCA9mKE32YqtDUqiCWCW3mTfLQDF9kKb5NtT",
  "key32": "4GVt4FV2y99nZBku5drWFrxLb9SvXwpmW8uFdDc8GzQ5iEcf8WqrVwgbxtbi6Et8KcK9Cbix3nyvRtbJgSdUwz8K",
  "key33": "ZLcE51zKhv5bxzUZ4cWQ8Uq58iiRVfLYzViwjcVue18tKDuiJiy23f1w2kuYGroELb2j4RtQ8qaSvdKDF4hNie7",
  "key34": "fGZkJCmNKu9VAFovmyEB7xZeR2ULYF3FURSTzdYHm1RDJagcjQikVXF5zmNwr17wrbUjauYrxdyjyWbuQq85yNH",
  "key35": "5TGCWmNZaMkPY76mkvD97nSfyP5nFxfgyr8AfpQF79oY96npTDd2tgdbvidY9sgh7baCaMcuuwSKzDPRQ3VwjU2c",
  "key36": "2mHNRyj6mu4g8Hu8vut8KhHuXtrzbayqakgqtkKpwuyFDqM791bcC24HwkACYBVDVN6WpsbNYF6MSu23kWtn43qz",
  "key37": "5k5BQoNWTA2Dcx7curHDqYvSfcvHh752xdWTDNy9HAbWVxMsnTaK6z7TCgkc98Fbdryd3ETPfKR77VCQ56Uwuf9y",
  "key38": "4zJoPcWj9yZTTrU5Y8sDL2i4jguf7f1jui8rQzhoYFYBB8T5nWXzjhfq1MMZds6ynoMfXKfxSTnr5Hv4rZWneLTF",
  "key39": "3EeDPKGtYakMa6US6e6cvF4SNQw7naLo8pHxUBgM8gztWSt9UjcRwhLZynVmaveWusWATdTitSCzVr8xDnAS9cST",
  "key40": "38uNbzUpj6BtLB51mHGcU3PSUecFhNWgumeNvNzq1oRJUuZknCYoQNGdSSK6fhe4DPt6whA8BT3tV85gCq8yB9e6",
  "key41": "gWoTCdoZ4P8t1HKSMqmbnj8ooHYJWE5kHBggxTZRLoHMWXtGyPTtn1zsYpRDsgk9Vtvb8RWypzVMjveHDBUVq4i",
  "key42": "KcWEwyLdLWzyLt38L5JQKo4E72mqTDjis3jVUhUxZ7TLCd2TLd32Qj4knWHzQm3o4xzKHRtZeDEBhXCD4y7TuoT",
  "key43": "4jXigWPVCc1wiEgRnpH1juf11md3jtxCtZ9pUgGYFUQ3gEE3HCLLAzmafPXAgurWc4s76bu92Csxe8rL2nku73HR",
  "key44": "4t8RcZMd8BRsWbq58uz5nw8SX2oTvucu8HCBcgeZa7CaLxhrFmoreThbxGDQpDVKQbqxYNy1uVvQo2zLWFHgr6r5",
  "key45": "5T19pmZaGPKERrJYr8LXwEPgW6DtfCBwSX3qnXqLqdA8PGGLjuHcMFKqv8EXdUrFUVr6PoUVqJMKgtpQpMqfwtCe",
  "key46": "2KWZ6WG2981sqKuec764Pe58mtKCQTNKLiyXoLqKesirW2cgNvPhTw9cATjbaRV9b4C7B2Jbux3EfFtr2Zi8WcZh",
  "key47": "5AgE22s6esCu5BbQVsXStVREXqvyDybqjiAV8bu3o8PJdcDExSDrh9iyAYmz3RHsQXUoq2NW1kkBkRyRxem7A8F6",
  "key48": "buNVJL1S2HoyFN6McvVYhHrCeoPbEZ872k3t9zXKNNrT81bwJ7taciXoVkMtYPg8tVBhKFbVCsNTPimVKw5ANC7",
  "key49": "4gut1FgTQhNyFhnKbERpsh8h75HGuJsqPnzA8C289oV4m2s3Gx6nBJE7Momfe7BE4qsSUe2AArBNkrMQ4rnEc1fk"
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
