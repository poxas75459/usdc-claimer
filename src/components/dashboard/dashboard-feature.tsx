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
    "3tZ5VMPxE8Z9cEbsZUaAAHh8nrQFY92Qv8Fn8VCedpVXgCorroQMVbtp73FBmQ568eWsmUs8r1NBxjkbuszV2tkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sF2E3673HzQDBTRAYH2nGr2DDcyi72uNPnW2n9zv4Yz63Ljhm3idL8Ycyi38YnS2ghhSauNy5mAgGnJmWgspGNG",
  "key1": "4no2ST5nMpoKGqGVDvFANtX1bm8qFuKfiSs3NR3j9yQVfFTirgwo6fSft8wTiaymMmVjV17ovt4E8FyykdAE48zr",
  "key2": "2MzRHtmyCSK3hMup7yJrdiWAMgFbLjnAgAiC21SYwxjKkJh8LRwJZq4uBsfLEyJibNjcq3keyBnMrpyGjCUdtV4",
  "key3": "fwcsKyUUEWePCsS7Bv13jT4SEyh85GAw8M9znBeuUPS4wS9L3zTjWQ4JtLUdTMQ3savZuGkVbRnoqDGirnZ2o4k",
  "key4": "519aaWU1MyYQgXeHQQhF9Y2Mya6V5ANEdws9o1nLoNr4iNRJVLA97E1ESNA7XnJNraBG1Nf4RU5EGkk6H2Au3wXn",
  "key5": "2QovDuGFsfLwYdxfNS4JDkZkZFiudXtg3aEtfCXu9BaHYFydaLZLuu6vDeaugsnfpEm7HP4UeaUXboNLKCzjMcqe",
  "key6": "4wa9ejhfj77kot34yinVff6bzGokaWGv3FKt1htLjkpzpSVM5SqxrYhmNARHQZddpKPjAzEMeboAMs8dUxRKvDVW",
  "key7": "59YYqekozYuSMYzC9xsBHn8gLm1ahGdDr1x27EWhkG2ECKH5fiiYnH7vM2AcNn3o8EatfMJtHz3WLWyjrLhn4xer",
  "key8": "RMgRBYK7wHT5nAXqvCnQWPicfDgS1ZToTKk1CaepbmQGxUJ7dfzYTaiN8uRa1ra3yvpKvWD7dXm9Zpxb2tGprHT",
  "key9": "3CJ3eq5smBkQFyHMsEDUJWWWisWcVpC2zYSyo6bNdJB2mGhy2j52WdpSBujzr5NxAo1Ss6R1hfh737JWuQjvFerK",
  "key10": "g3dKvrhtwTyGookRaTMyHVdi1JrG9A29PBFizxEqrMZJegkfuqMfnDFB6mDbWgXuQz9Z5jZ94EyeDmYQqpep2QW",
  "key11": "GgUvdVtNPbajpdFAdC67Snsk2m6awKFkvE3uXD8ZkTpuoo5eg4ynSEDC9xSREY1KLTxX4vgaMG4aqoH2adTHhNk",
  "key12": "2DE8Qa3jXQq9EjgBGG9tn14SsiNLnozNLhtWgYnbhFF9dB7HMKByCrnH1xstd3DU1f2EDso9WcTkP4aw3pJVL1Mg",
  "key13": "3CM49jpx5CNqsMGEtqjc4rZwobRR1mqXA1gaH23wwvcWZu8hFqixCs82KzPshgcmSrwuFYjqCCY68ZYaom6E6TT8",
  "key14": "4DCMirFUfPSssRXFQw8dhv29CaYkXL2UU7TUtKjR8Yi3u4vENsAvmGqBjoLniLvJyAwLKxzbVN8FanSgyZnJbbnW",
  "key15": "4wRebxSMvgLjwyxDo7rFFu2xMT14mcWWyrB57uXc3Msb1SUALPPwmkgUEyudwSSEX8rCKU6CUg64xfPCnVXoA7y",
  "key16": "24fxpG48U8ekxtB86hjoc1rJGXc981jUr1ui9uHtjzSPnYyVSAdgf5dh2YCMX8QBgcjQyDb9FsFbPCt88QkweL3f",
  "key17": "5uCnY9vubjj5nSuE1pQn1a79NZPZUV66m7Pmt6Q4j3eXS4bkWiFQUfd2QDD7RHUVPaWuSAgSz9mfYTcbNDgaFfGj",
  "key18": "3EZb42LLyJfSc4k8FPrSHWKZoLQF4NPDAeLVtxGejP7uA6y1Jzayc9MXTNHjUFQS8RSW9xpM9RRZuRLoDHaaFwGV",
  "key19": "2cH6W47nFAJdb43DByvPPSAUfGyKz2gE8GxjFJb1nZG8pXmHmgCWJXQoAz97sPHqaXrPqPXc4S91VYHw5RB5tqKV",
  "key20": "5mjQZKjWfo6JjXL5JXoY6my654vqFaGueQRkfYmsDUaYpRupW2GFiADacquK8uaBtVUckXdDb1Nh7fJJunk7DbgD",
  "key21": "4PVvFLQwASoVzoLrnJNrWt64HJmknfEAwwmW2Yj2PezJHjUZ3pe27gXSa4L8L8y1pce3odmu58QijautfK64CWaE",
  "key22": "4tKvfNmSWi33yrtx2h3HAZw4WKTxDBbB9QgmBMjQjtft3phMJ8knze8sRd7xFinzhq7n89hhVoo7SWLjC7aSsWEm",
  "key23": "3eVGjf8xG2KhQuVrihWgt9nWRMJadyAdGkrnc5JyZ2CDztiMGFHsgEBVAxvfZ5KiQCKLZgrSDBGSNVCCfBxYQkya",
  "key24": "25joaaiW898jZ7yFL5zqB5kX8caBk1oeeoNa7TG4JaiAA1egn6jyt2sWjNTcTeQmWBdia4dvN5hTLyvH1fcKQ8sV",
  "key25": "5LpS1xBChDw73szDFxQ9L1g13DjcKr3LfiBprEwJsXqGnDKo6W6JiFJr62C7jJz74QbfMLn2usAP3ycfqPbncgyE",
  "key26": "3gyKJcMgt2TbdQJYjWQsCf6Vvotb7eBtbXFuuRnnn1trGsFdDfFzZMBqzLdPTqppULNudHPxw6SGkQ8RjauXLtN2",
  "key27": "xWgskH7zpAQVmynduHTpjnso5tLqvERhUKofTHwja2kr4XFesEmXCvZYCirDQd7QFrkPszp3aAJGBnizdQgYd35",
  "key28": "HiA4FedwExYPGk458SthcKKymDJ2FaNm3W8ijJU5zuX19usEs1qTVVmsqggnM6Vprfsj3ZDzmtskBrVswvV1TZY",
  "key29": "3spRoGRLof6Ee6ZXJFXAvA4KvpSyqkwaD4GYLcpbo824wdHs8fByj9yNsXP9KqCBdaX9HkHZYd9Y9B5hDfd4F7ST",
  "key30": "3cZjiHe3eFXty1FpnJtqkMpV8BFZkighFW1oSExmteVckz3m6Zj3YrQbE1hpmowQJ45k97kUvmPm6aMF7o7sARvy",
  "key31": "21Wm8sKYgJt5UZv3eNNBuD5B9kUvzvQYojoStBv87fxDmYMKR2mYNfApXqRZ3jWFaNNX59QmkiMsM4YUJb9g3hUZ",
  "key32": "4sbjvQCRnaAxQTgEXu9brsUWQ4M6ddQhue19ErB3PyZiZx3ED7i6hD8CFDouKbTC1EE5GncD1GDKtE8LJftySRWE",
  "key33": "36PHqC2FvtW6RmMdHzfo38k9abiWwAnsoSmN1zCPUx2bEvR83dCVZSSx6caubqbt8itngLFHkbbVQ2t2UYDDyoRJ",
  "key34": "38VQn91N7giAghjHH3bLzACoDJTpCmftJhSTgAkpvpqSDdozxrBbvKQ5H6o9FbuRB9A7P3qTaM1NDEU3ArdnPSw8",
  "key35": "3aLAMVuk95sPnaK3hDfeUd2WJPWd7nXJKagkBavy47x3VHNVAMWsbQA8uzMVUm5ryrarSjqZaaDtYuDXudivAfrj",
  "key36": "3o5XZ43DkB246Bni65YdUweNA6mycwbrSFNmLXuZwcNs9BiRgyBgZoDTfcHHjwB9YxU2QV3GZqYxAV4Q5nDYD4E6",
  "key37": "57eAzvYpKvPuejHdYJ7skh4scan8aRbteDqoTJSpE8VzsNChcfpou3Q8n1hfVCqjPg4bSJuRBDQm5XbNHUmfuc61",
  "key38": "5im5FcHiawc87rGP7SXE2RtxZBWiyfLmDqHMNo2e2BR2QJF9E82jpTQFD9h1s7HxAttehyyjoyWEVSDv7mRq1bMZ",
  "key39": "3DWBiWdLiALmU1yQEx357PxXjnxTbX8xPAxKRQFoEFVV3E3XjBhuZHd6cox8jFP3r6GQoiP5riV6q773LMpcLHn1",
  "key40": "hGYN7WksaSNZt5c3seYk4SwK5229LNihsrvbamyXrNNLTefcdJzRrD3WYCaQgeN5emHVH5EqxagGWSMNkv7ZmaQ",
  "key41": "2cjQRb7RbcKYBFJV1vWXgArFy1aLrG2V8qy4JGKD1BUnCt7wGT22biCgEeJiLLHYXSR1MmfWqPnaLPnTVFzNCDLg",
  "key42": "4pVBq9VHMLSZxFEWKx7UkWNbFCmA6CiGm1yTJrZGcaxLwpQzRPWsSg1es4e1PXRpbimzQV1wAaH1QgEetmScf7oL"
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
