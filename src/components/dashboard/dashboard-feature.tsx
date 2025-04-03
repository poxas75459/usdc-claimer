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
    "56AH8Uow9u6gNjXdZuLNnCzuMXshC292vXgR7MadzFz7Z7SJ8ZxWEZ1qGW6629yfooL7fg23u4ZkHf6N7krL44Rx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bYFtK2g6y5KkuVtFEnh54aTg25YcVRYUKq2zg8Zym6bbKexQGTCNrvx3818C2hutsRZhm5g1mteoSUM9T35CtTD",
  "key1": "5zuSf7tUwJqrQPvrVk4NsPbkKesxqZM1HaB9vndcmTCpuBsE7n1GvGjPp7PZYGmXxv8P5zy5YNt24NzVCQuk6Rq1",
  "key2": "jMHKk4EFFY1Mu5PhDY1qjS4Bnchi27jTggy2DTupBM1Mk8zJJdny83sDCw18YPrUavJCnadWQgF4kcN8xo3xw91",
  "key3": "5GphmJPvkCf3qSZWEZMvmu2bgxPWURzsj3aonTc43Y5328sY9Doak9r6YCaRtPASCJTSHjSTyDt5yJzXvdxdbC4b",
  "key4": "3xN25cAHfaLeu1YFZknBZkbo34nuHAUi8qnTm19u9YwFqJqHKCgZPmm6dFV43S6nnBbRodMUysk5VKi1ifPQwT3i",
  "key5": "4NYFytjrhJS4deT43maRhhRoVBLjThBYsdJGGQjYk5TxEpcd2o3s4eTyZLX9Ej2dFeLAZ272yjsgFtrNCe4BbUAz",
  "key6": "m1z75HjFvwTWD9rk1LoGJbchW6qGk3SXf4adP3RjZBTnKRTdBbaJCYLGm5mxM5ESWQ2Vkv48yEmSxwGAUrLyFjP",
  "key7": "2aWKhoU7FhtREhuiZYTE9QS5FVGoK8rKRkiNC9PfkJjNLr4zJo5m3sBCtrUkV2hZRZ2BE4N1yQtEVjWMeZ2y5YyM",
  "key8": "5TDhAvQukMgtDooztH8gNpxfxhaWpkFB52e1aVAF8PxUonTkF83Sbnwuq92mYCHxrJ9DPxgJpQYwGEGb9tA6vQzX",
  "key9": "3JNePTdgAaV9zhaTUvgHS4fCstfQipUU1MrwV5SVbeLPnUzyyooyiu2CDKAZPFJf891zakNnU9gaF4ZYomD63sqS",
  "key10": "rLsvtPtp57K8MX25hqWCaQvmxoYneYT4pzTAWxk1r6yku8Cqfb2sh6e3BsHEkv8bj13QfkX5S2DRjxJSicFhEXc",
  "key11": "52msGeTzZm399yp2Kz7w1LwyQFQaRay1ZycKK76nKTJNdvsnUnY4FWUFJv448Va4ynDLWy3vQcMmStUVkdb1fCzG",
  "key12": "42KfDRXBtLPVBw6cTza5mijWJp4rWc1cBv2QNfVpeSKG5xbKEhzbDhCLPoNCQ8YBhrqHPHLM2NCnBCykUuEVeHkm",
  "key13": "63vhqAPvuVoUstsoQTCgkBi31UxAzHgRHEPFb5gZXoYNs8kmHyrcw7puKFuroFDpmYjFXatdHjFYFKirXm8Rxu8i",
  "key14": "4vesTyrtjSuwoyyAuNawBNeoQoKbFuYKZUT3gW7deiU9syUqkN3LZCMryjMKfVtQ376wjthBoHQbMXc29GuJJoVW",
  "key15": "2YJk5xooJ1hQyVReJaLyKpMV4oDzEZ66NFA9CY4YBSvJJBRqSJzUGVgE7WP8MqvnKpsCNsWxBhFfM1PuxArmhzdw",
  "key16": "4nJ7JAmVUiuW8UWFDVbVtB25SsHUqE64ShAhHnmXoXzJz6w1NtaY7bdQs9eiKcvWxChbpiUdpHQsqWW7ZMET3frJ",
  "key17": "5mjXchiBqJtzwwRSQftQzuzkM77T1vPTgArfSLMEnFfB3JDFpcGig51UgUaEt4GCbkAJy7ZyXPpc6yAk4Xx3BZhn",
  "key18": "4tbpsUuuKbFYFQeneesYGGP7g1t5UKoi51D4mTFXVv33XYPoZLB6FZjcszzBiPmDr1VnbnGRV1jfyFmsJFp6SRDd",
  "key19": "do7Z6FajSwCgTQYyzkx49NcTo1UsYr3XH4Kz7FC5T3QGgrvE9RaXXufpmSCVdRJekyUYjfpxsjVPiHvBsoUbk49",
  "key20": "qV9tTPQ9fHSJVqmz7RwCdPcmsqgTkP1DX9yAXt3EAv61bVY98c3PUbNd6qjES4tc2Kur6PFAn7iXXL4ZTwNQUxa",
  "key21": "4L8PnE42Ph1WEZ9RkSmeq2bpLZFh8rRL6uB3vqoWJFE8Cry9CMBNvvDwDMazbbZQsJU47x3KPC6LQ2G4B6dhUb4s",
  "key22": "4K4f8DJrQZvmYuACuw11eBFrDKdyEpbGY8j1sJddEf8ph7KZm1xunMamPQXyYwRLTAWqZCSZ97mgDrd4wu1cmtoD",
  "key23": "4tP7YdejyW9n6XJ9k77esiCGSXWKXhP1uHJSV31UdFe9YETugiu2Gt9zX2XL4zyoacTnWaYeNrAY3tWWsp5z9f4M",
  "key24": "4qV1VmrBYxV3W8YRgaqRYQdTh9SHY23Zb6J4AYo4Xvv5dPm3XhrfVGVApji4j8E6SLu3TM8tsQ5aUW2rGUZzu9dD",
  "key25": "2QrTVA6wzYnZ7BGYu3jhFpmkWeFAQxA8FLmBhpYz1QFJxS6Kg4ouEmoBy46jtqhACjC669VdCdLrNWAKPm5v1EED",
  "key26": "23zEqjDPZrVQR2yzGC7BfiBWy6jSbwJ7ByuD7mRBJ3xcCjFg4tzBfNP6hZXh8JT3SvvTyvwwZcXeFgCnzCPcPwYF",
  "key27": "3PvyF8G14gEk2BrRRunFrFaHHTsrHkRo7ac6JfQWsR3UbMMJ8BYR4KuimttgUVDax3vXX7s4hJsbWocN1efwNnB7",
  "key28": "AdzJu8GHGVU7XgnHzy68rgF3Ts2b9wGcwrCKUNfAyJKgdsodWyBoQE547QGNjBD9S39fdvXc4er8qVkoQax7tWM",
  "key29": "4HYQbDgejJU6zBEF8Aeezb2AxHMZdXjgHtkXXQb8F6cEs8Yj8zzwnxiuEfrAHwE9A8dae57A3kAYW9EAXagwGs65",
  "key30": "3TapTrzxqt2Qs6ayTof7FRKa4qvPzWieG1roHyGg4gU3jCv7fpcKoNMiMvmjqPwzb7HZ2ow6h97LRY3T5HEVjnKx",
  "key31": "5ZVLG3b99LYB7raLNbY9MxDzcE21kQrZx84EHo2rEnNUB5zqUVrSuoYpt3Zvs3QKS7GVGm1uvQKyc2QA69bux221",
  "key32": "5n7mWPDd2GBSfiFgvL1BzrCQXPZT4YLNEkhsn1Gg1rry5ZzwejA69iMt3UZzgHCgsW37wMbDbfxwaR396ybwswiy",
  "key33": "4uTCpCE6kpvNXkDWnwHatktbRMgLXZXxiQXft73FsLzwVieUmx2BC2oD1rak3gvC4bbs7HC8ch5mRwNNa1mxWTCr",
  "key34": "3EM9u5fr6cEfu5ZNo6gSoBqtVacmbxnuwNDrzQ38PPEfagcwm6zuRr939sve6nhbf9JdsEagzbW6cabA1hjhxRoF",
  "key35": "5rqVaTrwtygoTkuqTeoWZCg7L7FVekNM3MpE67fUkz8TxD6o4YmTJbZXFiz2fufc6A8iTMtQTuecJTbE15doLYBb",
  "key36": "5cE48yFXZbhGeFfY2FvkFd8chX1MPtEc167rmQg5THfQi6mVRVMXqeyBEdbPeKcRRYzYqXAEmA4T1HSe344bxeuc",
  "key37": "59FLvFiweUvG4Q41FciB2hTwqC4LXwqoK2eBcgxkPg9brdRBXiuG59bzVa8nB9FYqKTyC2rNyHTPd6RRqXWzmGfW",
  "key38": "5F7T9aKvQwVfVTTmuyWAtv2sk21NtJ3vk3HALFDJpiNnsUUdNBHPefv6bcp1GfFXDxmjE9YUtDscL6vu9tccQsSY",
  "key39": "2sGKGPH2cwvPRd6N15iPF1t6kU1BfS6EVfsprDCRHqdc6ExkYukmupgZQN6cP4vCeoEYU879fLW6M9E4ePLLRvBM",
  "key40": "2n2TbRYin36MPMwRTnmG3zGYnWsf2QUkvtcsc6Ly1mSi4LjWweMsRHLxbBaZsmFX3D43S5B6S2k97NGvAmWuvyFH",
  "key41": "2H8NyjhHNGJtep6AGvKc7eh8S2Av369EAy44gMpLn5wj6ciVV4beUf2ATaDjrvNSX3ETSaLJe6KDGfRxqrPwpNwV",
  "key42": "d7owUidyoXsRNWRBauhSbRUgRwmv8gwsS4bZLhRrjTLAfJuXWEwmb6CWeqq7EJKp17VX2c2hQMSe2ig4iYuDiw5"
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
