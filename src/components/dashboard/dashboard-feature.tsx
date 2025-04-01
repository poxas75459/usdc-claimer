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
    "3RQCFGhV14xmAbJbAQNiKK92RKyrnNNxLx6h3nwDKw2YCzBNs15kz5RRPLP8P5uqkh2xR6bm1gDAVhWMrtcGESER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rXJz8YMRxyrWXYwdVTH6zL1H9fQmB1XkxT7FhDQJ9CtY34nYcibhpPyPHCVauTMsMRA4ABkt75VUpwa3tW6whx3",
  "key1": "2MVPEEJt4a4Fct1Cw4hsnedj5en5FnL982RQLPmjx2SfCuLBme78ngo1Z9M4c92NsTJTKDEibf2FMRp3pascwaH",
  "key2": "4wB252Lxxxgni3yqH9N8SnzpXF3GVKZpxrEA9A3y7v8grJeagrGmdt3QZSYsuVLSjfpbRym6bZusCqjKY7aPFkAN",
  "key3": "4HmsvmRGrWLipmPFbmKrq1xMbQuV32yMqGY4LLV4UBhjUmcKrM1RiFztXXm8C7PFo4AMW2jGbj4RhLPLBLMA2XGo",
  "key4": "ESEXQtTEnqcRgUptoFFTxYapp3bmD8wfSUF7Sz6umPPV1pAKFMxHK6kZwjGmrvopbyqTTjBvsdVV6dsK8oyhUPA",
  "key5": "EhnB34L192h62gbL8fhanRKdUGxCUS1KoNRjTScEc1PAFvVEEjY4Gk46oxzXwTdjyXhrWqXs61PQQGqPgSmbdy8",
  "key6": "3XeWTtL4vp5pxpKhj6BVafvQeVjByNnDpBmdrWiCRm4k7pK2T1xKZuaXcyCp8x6tT1ir36gHiuFzq1kvn45brBUi",
  "key7": "53Dgoj2MrVARhE4iy6saUWjPkupeTCiQnK7wBRzffcjR2cFo3YbtixfawYqQ8421nahdzD747e5dvSN4e8536k7o",
  "key8": "2YXAGDLgEDLUPSgrJh52Jk26UgmpFoxmhfwebigqyK1GxkP9QP6quPuTPaqwz3SETYDeGgPmLMF5g31uU7g9DkTa",
  "key9": "38bdpmKbsjCn4QCr8ZvRE7pHrKqE1GKThhGLfjd72R6ZG55pE6HsnTtqupvrksbVHWor4VQRbUmN9ZD4A6iZAZht",
  "key10": "4bgs9qcWKM2vcEW7w2Ei8YBy9tH1RcpLaQbh5LCo9AbAQWXjs2oWp5LeVQZUdUkrhMfRhqEN8AEMAim2h6puR6AP",
  "key11": "4RC7GodYCaFDkGQT33hKZe3uyJXX8ENBGVocgxw4rE57suMkJSVPWR1TtJgZUffvYYBSab126zLpEex4YV7xUQva",
  "key12": "5MnM4YrJZSkT3QAkbGiJCwvs8iysaVRWLCHqURraTMieUuHvxPRmGaHaqZuLfRZKW9cein9fTcdT74SCRSQ1veCF",
  "key13": "jKqpuhFSV7GdkynW4oi9bGqKeDZZjcVnX1VV5wQ32NU13q1fUU128GTbWUxfgznyFBa4r84PA5MFyUvaNppNSXF",
  "key14": "4f7tRHWh6uptGGjUtT3B22oJBtrccMBqpwXNBvVzNkFNoNDT4jB11EP2ifvmaRzrU8EiZGwiXmz3xYDqLn8jfPLn",
  "key15": "2TZBQozGMMPr13PjDifvpU7ooQ2eM6rfgTdCPZH1H1EErfSw1WrWjcrvAUvaPXqoAp6c1F55LZosPsaU47aQLasP",
  "key16": "5dxrWSUqzukRvuaUxM9WEvzJw7reYTybx57C8FwLbDTy5PtqZzLcPnG7Um8zuinYzk4o57WHmhq8Wh14iNgi4NDw",
  "key17": "2N4vmMVuZn1qzsie5KnsfjVHwStMHDtLMAVuDCVLwLzqosntbL8zZ9BjXKVRGJWCmrgC6SUTWabReZCN93t8Cif",
  "key18": "Qbg1iyu4XfVRtF7fg6cieJme6mApqJngQ3ELxspPcmqhffzMJtNzhg3zZkHcqLGjMbi2CyRWumAaya8VyfGM5xc",
  "key19": "3cSSwGndp9E1A7PWshtiE3LUT9eXs9P88eaDUuSTaVzeV2ke1Bp2ePzKXsKNsgFm2gnT3AwLF8jFyjFswRiQoVhJ",
  "key20": "jv1UmYBs1QgiwPQQoK6nxBj3YnZAFTFuL2LU4n1wi7WwPCMvmZSBHcBxP8Lhid3vGaBp8YsdG8mS6dAcgj4iVm1",
  "key21": "4oGyxdjhPG1nGvV4ks2ZuajSoLWYyBGjpMQ8SJzMrZbY41AU2GaNVNfrt91u7Zj2zMnkzGBw1iFNq17ehYnTXVtj",
  "key22": "2ixTue9eqLMJy1kDD4nJKCEBWvQ2coKY4xtdVHtqxac5kjCqxjJrb5zCLB1Ct19v4G7NJTTbwKvkrLqouJVErkpd",
  "key23": "5cvvmSRqeKN6m1EFeQhEjKVqtF7yt2NoEkK3FTEHYCF6NiHWbySUwQcfHdR3EDT4kYkcmrpV9a9nhTk1caCrdP29",
  "key24": "3wa9eQEBQzBptwSJW5MxiXeg6MLAwKRaSRvvUQ6cWx9RM1pWo9PK37ZcT3gm2Cn7eCX2u2bnZoF2JwX4Sj9a5PGn",
  "key25": "3ypfBJvCbqqimm2A2HkKUV4t3CQMTAL6dJ9ACFNWcdVjQwkEPnL8vbLqP4RAjhbbmqrkdAxocHjUTivnWf3KJMPC",
  "key26": "31ym7Mkih75v9xvSh9Q1sPyWdWhsXLJMHykJJPKmCzsbSkQZkosvYzp3mvyCTK7nn4G2LznjbjzYtaudA1jVRVk1",
  "key27": "4YZjJcSdxvbsboP8bSNdyPL6ex1mePThH54J2ixpBNdR6k1Uaxx886AwhByWW1AWetzZDiNKSuHEyWkyo25DYCdR",
  "key28": "4EX2JNvyEGwRPpFCzgPAs8QHx8h9H7vCmmaiLe7h569Lv4ipZTe9noeioovCivWq11Ni2mmnDNhWu6KnnvZmL51v",
  "key29": "2EkAzcytndzQoUYc2v4vciKR7rp9goCJ1nRQUEGA343YW9MKgYjbcuufq9BSVPFaSYFLYrEEtTg7cMKGz8vbxbZF",
  "key30": "2EK9L5bMZyEZwjCQ5adPFzrDC9qmnHuDwiKuuw2ZcajZSs7Tp1b9Aw77C4QS6jQrof4vQ1QA8rLKDXve5MqARVM2",
  "key31": "2QdgS4trD9f2HtnJngHW2RTxFovutBAh61KKHzPKbK8d5GkZdDSCrCYqG5NobHcP7X7sHTxyZ4XvFUEFQ5TqDigA",
  "key32": "4cSnKTfZ4EERCYuCqK9LhnvHNoQcgBmYdCpXB7kb7W8bP2PXZvDdj4SFmGNRsJ5ySfy6Z7Z5VkFYFhcWpbC5xKp3",
  "key33": "48GfMbs6pze7C3VRzJXsgCQX6pt1k5r4uk4MNkphd8xEdBTzUeucbHfzasZee3yp7MMVGz69FgGJz7EzKaxcTWeL",
  "key34": "5bzN3Z8mRkzVCBuGaKJuSMk5fbLEfbx9f5uAKnwc7tmUZggVnzTKeiB3x7NxjTt2RT13rnvMhHuYxj9ZcXJzKkv2",
  "key35": "2q877QR7FHtFSdbbx1ZRH7VX8R29pdfPNrcQYPHEaU8uyqq4RjAbhNKyypcVVLYBHkoXWJkGrvTPaTcKDaGaduN6",
  "key36": "vV1RZFg2BYC9chesa72YyF4aqohxvgR81asoQb6QEvqpgCdRW3CJ5qdVtoqWtG7hmFwJfbL71zNrDh8hQZBRZtx"
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
