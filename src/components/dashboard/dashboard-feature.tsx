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
    "5d4c7UHvk2cVW7EpcwLfU8dbKVNjESCCii3vokmaZHSK2NwhBNLKxc4zpWY328ELB3cRe4cTnmjRoXTnG1o9Mc2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MSct2UCgUpyCvcjJ2BHpWVdTbg8x9QNQmyuZBHJRNtdqJMCZCeTtv61RKWkovjszAgtrz2ic7TRtLHnwp2c3Uwh",
  "key1": "4L6MFra7eBMWsTRzoinfZS1G75EhwTCddi4ypcjj4SoCwnmUEAWvHAysrFhV8Gy8fBCX9RY6xMxyK1v5Bkq4VSeS",
  "key2": "yeQSTU4kHXgRswBhQjCtED7H9PRTcqPw4URuGHt2FdRv2A6h7QoirdkKgHRdYscGPStvs9tAMufTuzQSm8fV2HG",
  "key3": "35ZWoqoXshzBRtrr5S64qx6WYi6J3R7Svvrz93a6fhksKdp9gdf2Dz7ENiYjainN8taqghPhKBusXBdWsEjpjkCc",
  "key4": "4z2fTPECFAdUQXCVgyezvdWo65fXJB6G43Gt1mBYYL86noLM2YpRqdD1fodPF3d8KMTcRSzmBpV9SXS2UD4nidFJ",
  "key5": "5XaVvMNTJBRwM5j8FH8LySHCNTMzZhDLot7FzdnaumSqCx5r48i2ayC1nrncBfF1fzbaQ2yagqsXqaeKyH37hEdy",
  "key6": "4xGFiCugeHaGL1xm9Ugq2ZSY6qR6XPFiRKod1w3dmE9gxw7ZSpPjRJfejDzGAKPJH84drn1uoggzAXRtk1rtqRWC",
  "key7": "3FfMx9yERmUtjS5hVHagpSVjtdExC9sfi9ByM799B8CLd6goN8SoRDMpvdxix1ECda7Q8HDTEa42ZYZu9qM7qbiD",
  "key8": "2jzHt5kUahQp3xd2ZovjbMS1gKGVNm84MGytxuCLxPK9eivT7ZS8AsVG7h4GSmQTYrjqpUpEAkYBhjjeuNqqL62F",
  "key9": "4rU3WC9UvK9D7xkG2yVY5pibik6vVkuWHK8Z286BWrW3CAiAtEMSFh9ehHcvT4eo8obFy8o72HQWQi7Nt3KsEGa3",
  "key10": "3dJr6HZvE8q1H8rtLRn1ijiSgNhS7c45k6LdJGTFS3P9EcEEVgAPvYuvFBdjSDzouge384L8zain5Ly6zthAwDpx",
  "key11": "5uLhWEiPRMHsWgjMETAmKf1bMnc3Yq8cChrQQdQyVK8BPXyn3of9aHq1JYTYaJ3x64A5okRu64i15QSkdQ9vKnHo",
  "key12": "q7MCH773pFTwcRVQRkuQYWbRiy4JMkt8ffAKfs72KvM2YCDfJkWhcFo9EEzyUFVSoQcoFJhscr7u3oubEMReFnZ",
  "key13": "R4bCjdc2vyEdXMpLGHYLjaNCP9tqQiqqNaQFmZUivuNVCcNKu3CYn4zeQz4h1ckbAnmibkNMKgJU7e1eKzzENvE",
  "key14": "2o7DwThw57GM3e7irnvFJSoNWCVP3FM1CpyWRjGrfqjaXrK5dAzav3kPP5owPA9DRdBPHjdXPkacjHF7iFrbEvsZ",
  "key15": "5j6G8jh7EUDvNKsvykcGvw6iTcYSPc1kuV1RjBUB7R1ygmoMR54GsyBBJE1x6E732D6pJPjCmdPzxtV5iytLCLkB",
  "key16": "59D1m77hZTQGLEoEpVBcSYBtkQiuCrsPkabjxWidwfWcnNjiSTb3q4VdS1gNWFRZhKH5ZuKq13hm3UexNJP7h2QG",
  "key17": "43R5YfCWWvETdumS3Y9b1b2PTAtiLfNQVTJzmUn1vKGwRbEntDbH8xTCeDd3EuEfJwByYGrxd1bdog3DfWbmBGWH",
  "key18": "mE1qkfwPFL8wKew27J8bh3vxogKMetHg6ufXXYW837k5G62RF541aBnoyAnkN78dr67QCJPgvVmfad1HQzyh1ud",
  "key19": "2YKJ3tyony9Caq1yksUBk6i9GzGKzZwhZMj2eWNnkejP2x8MhGWXpggDgB6Cpp1PLcbVVsAHii9eSwjCHP3qxy1D",
  "key20": "3VpiEDWRyCjafz98prdfsgutxKKQRysCApF1LsDf9XSG6MWwU4nSFFUe17M9DMQuk8uk14gUsS9S3aDCSVN9NGF",
  "key21": "5iax3Rjy3HGdkppoposAuLsJf4xHUkxhTkrqZ8U8rddabRw3u9XN6w9qR5UgqTBshfh95QffJnzsNBB1dX8usynX",
  "key22": "2yhWnTNjpe2z5sEjDUnp7GdbmrYxPuVddZBSc9ZuSzJVRPJbvBzoGibY9QGEquusg9GdCkVKnKgwgGwyrNJV56Zc",
  "key23": "3QQeSGg771XjvqygThAH6YQaZeE6N53Wjz97HodVjwvJEamz1K2nEmcUathnJDMGy7FfrVYHfAUjusdUabff167o",
  "key24": "3zS6f2yk2eTE5GY4TWnT6D9p15vUEeTHgk5BCW8y9nmpHeo11KCobHJqmjv28BDS1EK2ce8qQ667VnwxMQs47CDq",
  "key25": "22VQqvvPp3uGuNSfbPiBtSZLjym7FVq8T7tuiwTYCQK9yME5AbnuYcEsqhHMVZ4oxVZ3ojjnEJ5crXjUd8RsHyX5",
  "key26": "3WaEQ2Rqca9GkP4LMzPuZfrBYxcKCAAjhXhbSPc3rSRGzBKksTxTV83uDEfip2jbFXHnFdfYUYci56a8XUD9uzB",
  "key27": "8KtKrdW8qmUzk88nDWXkjQTb9MQS7NXCnHGYWh8UowiiHQoEi9fQTbp4qn9h471Wvf6BjmvWe692mEPS7aQKGkA",
  "key28": "NHqMbQKdDNz3rHHY3FDAF3jTyBhHpSqCUUfL8hbEYUJqnhVx9f5ZurBEyWFaXXNKR71VPANbAeg6o4Lym3VqsGb",
  "key29": "4UfxxnH1Sg5zZ3okQoKV2SPyTcwjP4hNgCK74DCXgPyy2mSnKJQZq85LMc263Yzsy5QuuQzSuvn2rPyc1caT2feR",
  "key30": "3E71MFiUU4nQVch2ebxBdFK8NCu4aiCMGb9ysoFTpTAKGqvcruzAuw5mxc2GkMGwfjZn2w179gkiMgJmqJyGhFTs",
  "key31": "29gJCe9DLqK1dDhgmmEijCkjZysW1Gtm5581ZCKpc2uNpZENbFVjh2L8WzzXsvj5Mc1gBNkkf3W9L4qJtnzbA4JT",
  "key32": "M9MGVQQJokoHTJWQRzA8Bnq7sangwhvYBcup4UEQLDAKB4DPYniwjZkGT3XmbTPgeG5FbyGuyDoyv2mBAXiakPH",
  "key33": "3MnBLB2hv1ST56poEm1j2x2uibXF59rMn5y4z8dMUiJpA5nMAmrkASMEovJzVAci6qqfDfmoLJCG9atvDwRH7FkE",
  "key34": "SoqCK39huztnwJnexggfauZcbmWC1TU8XrnV9zPyciStiUoiQp6LfH3oA59wbtM3JWqDUJNVUZAL2ZsvsV1YzYw",
  "key35": "3LjpMxM3oroB6FDu9sh3iSEEighcjtavVdzvNLNGppD41cL5z8uaVMFCsh3j6HbpTVvZncVASTLopqBvHqu2mpwC",
  "key36": "5rivRWA1SYBYcJcKjccc3EzvckUvZ2wVJNUt8kocMucq6j5aDyBUdbMi67d6KPAzsx4cNEWjkLSyRbS5KF3JfzPa",
  "key37": "mdth9LuUEoFFw7zbn3kGcw8DaGht93G6WdQTVHXpXK1FgUB2413SFTL2Ponpb6xXGyHNamz637B7cHepCki5KqG",
  "key38": "hscpbzaVjDJwhiJtb1bYWfh7RsYpR9FXLqAZct3GxtGb3ebPeBP8MFN7dgYzzVZx5o4fgN4853Gkxe9BbEfA7Zr",
  "key39": "5c1GxZpD9z9Fx5V1kZz1Bx4Pj4FfxRMcJMRwH5mJqnsVjFbdnt5Dj83fxFsQhw73y44aZPM4yihMs71Wtmmgta97",
  "key40": "3wbLMUjAKZfW3tG66yHpxFEH9pZCJPZUwadkuoSQwpxXLo1anHm5xxrv784PUZqZbzJ7MNRTPQY8A8HbriFUVJBy",
  "key41": "3xk3QjTqLpHoSWafayKPTUHw9Q8QwMzzUf23psgPNFFqzaR16MdNeq91ZgVDzyRrmgJqo344NGbYsKjzJkNz96od"
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
