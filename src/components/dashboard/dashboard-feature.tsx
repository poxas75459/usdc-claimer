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
    "5ebjYsT67uYbRxnbUfaev9aPTUn7UDrkHmSECv9Mi1WabVz3GnpxCxT3bifw7zmd5FMmv5XsFnapyvDUA3dNWgoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SN9Y1cVG8c53rtZXprfVLshuDKpPbNMFNTMgYGTmXjc2CBBT3sYrWBfPXH1uoi6JZj5BBSwqARTf7ZeQPJGRJ7W",
  "key1": "44Rr57X3DaRzUX4oVk5dmVHKEmbdkEdHdf6GCdyqULZXaxn5ZAWWHat95xR6eGgK4LCnLS1xsPV7wg2RkaidtGq2",
  "key2": "4kbde6PSKARXLNYzinnHHFHdhRwVujkKUA9WGPmfs8Tj394dxtUShu6N2UENYkN5iZAcJS4qZxAf8ToSEVbRBc7f",
  "key3": "3amRfHp3GZUSavDkf8fbW34fijyfNH3gRUywhhrWV9PtSqJAzYn4cggRKkBtej2MrR1ivqinxZmGshGuF3KRCD4n",
  "key4": "2uV2c4h9K785KwJbmfo7Dv3qtQqWQymLd9p5YwqjwvAYZYnMDZB41bKdXVD8bw5rsHzjNDim83PtaXNqBqTYqFnF",
  "key5": "4Ssqibwcoppd3N3MHTQ1pg7MrBxeJ1QCW2dfDNfDFPUeaapnvQ3CLYcXkFA8txEFtZZaqXqJacUPe2YNUvGd6ryZ",
  "key6": "2n7qgHtgCJrh1vpzqhwzhb8M4DrSDNM31JHhxapxJbXVFmd9HR7k8VouFVJrEMeSpJW6ubH1WcYVosB9SkaUciGC",
  "key7": "zzK9MH6eG9TGVvuLz2VUx2ZWcxPSRPM5LwF7bdVCbSkFatETztwtDYsxCALxjp2k8yNpDnkjThqvgCK6kLiXbAf",
  "key8": "kaoMqVVEWFASdCKkVxh2Fcrwn9x7LfqE912ysHw7Q72FN1tvV1jg64MBHqdDbteaoSsFQhwL5Q2ZBqEpiy977FU",
  "key9": "2qYni8B9PqRqyo13Dy6WRaunf9fA1QLBcbU8tqAfDLkwDrJBXfmqUhnQAKs2V8GFU9bwJ9xQLh8uSBZ8Zca1GQjg",
  "key10": "64pzuU5fTokzCBtRYdB7DAaLB6jevC5bTfwfkNPj3H2THQwWdocQ1qokZPxAMBrmfTaJrpU1WMrJJzXutZM5S2vi",
  "key11": "vuNAyUifVSkH3TQtyojc5y4yhk1imgVoMe6PBavKqoLHy8aBVxFVSj1dcf9sV5HJfBij5WFBMsBzuRocZ1hFXZF",
  "key12": "FiWHVY1LxpA9Qtdcy7AqBBx5w9nyWLwDCZbXGkPEH1a6qKZokHaDDHYMmRqnsRoiHbBegLeMTv4ZkjZAiueCqGP",
  "key13": "2iZ9ou2Qw3kxXEAPEHqYCgfyG3ac5GUTgKjnxd355mJaGmAsryEMPvcnCt7qQmkurp9nBzhXZNPX7pcAZshrt2be",
  "key14": "2wycqyYjXJaNn6VsTm2FPEC1TqtMLzD4cZPUWWrcBmVRzqKHnDtYjUuKqmszqBDZnrNjMn3TCcjUhUzozDFZzoPk",
  "key15": "5mD79gdeB7VHXqrpzwb5QcsmxhtG9P6W2b3JNuewMLzgwt5HznTEVedwexe7vy9qkQGzgf1oDxSnfmtE68u6RyMS",
  "key16": "2NT8Gbh4JNxFBFRBBRDFsYii81pEbVSQ4S1t8fbnsFhJELB21XJNrbjAXwAqA1Qz5wt6i13HzVFGt3tbomqNJzBN",
  "key17": "2nE13rT3qWqGB2LB4CbiKtat4JLc6mKMn32QK9Pe17QF6GjvEkkWmbEUGdhVHtLLAnN1PzfXj2yTHYKy6iBFPU2j",
  "key18": "bWGM6nXWj6QLDnfRgGVFw7UaaDKKTYXLe9UUjMKjA791EMa9GrqU8njTeEpS4ZdMnxLn54Ksr3ZY8iETQQyEk5N",
  "key19": "k3NNSPQbpW6TVzFd9PrGMbhPb9cTAeARLtNUhJ6GY6cUH1Bn2kHmzEXidyyR5EKfzWV45yVrSNB3xUncjtpVcJt",
  "key20": "h7vbvdV4XB2P8bDaYbpTRQqsBRXqkDCMMtzXKbDYuhef5tBPNmm6V92U8ck5jFkFGN9Se87MFcEx2d644Hh8KmA",
  "key21": "3vAxHhBuQxNEgCEo7pZQ5NG4uXcFPSRmXinE28T9XmnxbCunBakzZFjN8yAwsGFLUvpDHjM3pzSS5FLaWd9PxHV1",
  "key22": "43kMafyrujetSUju6kezHWHMFhGhFPAqYGn62JaL9pDBnagnZy1U38WjcLFgipPYMbuWeR8hGEEyuM1XkzcfkAAs",
  "key23": "2gWdKZ5d94AhVNaR2U8zjM9dLLeJcaYr2qSX1ztFm2DS9o5J6vpHxdyPwJYztvxC1Rs798qjaXBkbmJXjNyP9kax",
  "key24": "5X6pSdx3STqAbfdv1ddSFEmoTaXceuLJfktLbF5YS6Udxa72CTPmzNP9DqTfZRpbFVRJWN53WKPKGTr7XHVgJ7Zc",
  "key25": "2ABzgtWko1gQGvB7Y5qR5dEsuGAQyELbBN93GbdaU1cTx78iZCyAL2VKewnW1oSkiegfE7qQ241wN9dWJg1Wzigw",
  "key26": "mkGZL43grxnfzPeHWZiSgobkBbLCUBKQUKuhJppxviBemJa8wZyVzBdZscuy9eMY5vWaky5Q2ubCaduihW3w9Z3",
  "key27": "4KFBMQy7GNXvdJRPgerS2Yx5qfn43Chtn2FxeVdbMnQrndK2A24UTMkkWt8ZaxaXK3jBdeW9HFSBsdYaeL4gFLLP",
  "key28": "3r1XnMyTt716exJbXZpuMrrkDVNNmFFWXRfiPqbZXpMb2ckymgiPgGxMHUUFkZCNdDr3e16Rax9uvZJjVnsZK9Fu",
  "key29": "2rxYZq342T6CF4Rj1VwEDDLiZ6z3BkzQTv8vwoQTyNW8ABESvu4XF4dPK8LDsP3wCBQKYWWoqQXDAcZvywLSSQ6M",
  "key30": "5eKP5d4GLf7RhbufRZmJ6Sjs4fZWWzkcJsqdaNshtgKTJiPUbsX5g3PyksUer7VXVRYqKwLu1VqozXUnKk5E85FQ",
  "key31": "TU4223pyfYgvPLTXQs14tjFbLmYFvEn5Q9WxAVu25XnuEgQnkX6GkdUoDpDPHwGn9wMi3SKfqjHVgTsB3LfVLgu",
  "key32": "3XJLRFs7hLDdgugY5SAnp5jE2jGCxXxxhPVUX6YSZ6xgPg4Rqzz456CSDmVsmzU3odmJG9EpVyytN76GZRKYVUqN",
  "key33": "62uckYz8txdZ3TkJHPYESTUpV3T7GvcQzybibYopNv9KEgkZAQE9ZWnc11fhgLscKYHgeh5TBRzGyHWdXHpceRCR",
  "key34": "3ZWt6rH2d4Juc3XBQBh8oSPdgFgDLQccKJa5C5m1LHPZLREzpoyvUBbHXANTXMSoHGcAcBgj519UoSMjMRFPRXp4",
  "key35": "3cczytisgdMMncN65SJoUDupegzkpia8voBTo1CR6UUnuRpaSiDyvveEHB7jsy7eccvhSbh9rUCo4BzW4KCvuRfd",
  "key36": "3KMFLgAQtvM3giiKJhwVk23xzhqJP8PGsSqDkeaMDvwRYwCwb19jfj7Q4PE4uAnXXkC53BdPCQc7KaEaoyySUfAq",
  "key37": "3RjtBAPAtf58NUaSesw7Psa8DRaZ7owm8RHQTdhLthBLvrx4RQ4NGKmqTniZXqHLommz3i7CCaKaWmQA8gm9MUiK",
  "key38": "3tFGFUZL2TauTosYXHepjSHCE34QPADRpptnVSSojDC9Qn458yg7TKdA416qD9nhkaJgioYphMEjCtbGo27LWGLz",
  "key39": "RGNpyPAPUPnN63r2Fwt6Wb3c1jJ8Xtt83iPvUtywj23q8H6YLTeHo7fQAQmoroBWsuFurKJ9Saqhkk3nPXbPCgu",
  "key40": "u9oBHM1adsbq6oni2keh9WYhjwSCWVacd2F9uy9ziHWYwEVPa7MCkHNAeJ6P9aXqmFXbCn8SDC3ge4G139YsVRR",
  "key41": "33NRhz9aQmaXihRm6VRnH5THCmzAGQTeW2k3A3u61ip7mn2CaVmHSA6Rcp2KFeqdU8jQeqUJqndqLjHYWFaA7UVt",
  "key42": "5QHCjxXrHtb6YMkLjP8H2FAHP3VJ8j3gvLcJFVb3r4WMRyBBojDQ3DZ1YqRW2ZhjmMn8kGUvLSnBsp5tc4EKG27Q",
  "key43": "EMjSJ1YwovJDaBopTr3VLdM8XQ5sSowP3wDvS9UR2qMQ4odqPGKZKAxo9hZRNP7YcSSDHFMAtSVsfP32vLbK4Rf",
  "key44": "3fVFFojYDHSVcQdDRt6Q1Xh4iuHMUntdQWWjPcFXb6mhZpp1SRfHsxmGHt6Uss1faDi1s4aiTrUbuFqUjHPLoeAH"
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
