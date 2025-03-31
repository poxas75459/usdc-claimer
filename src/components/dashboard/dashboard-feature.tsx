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
    "2C9HKcMQeC7bBGb2GDh1NiHRmrN2iLS7wk6mL7HLFuHjJhRi1roGpukgtH62uBrQ6CUBXUyBJqtbQMAtwXbNH9Dy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q5rDuGS51qc2h5j4SVu1h17c1kq86DYVsvGDtoFHLacjsM5CtnVNktWAv9nGHNQQU74uF1zFtJjHAohEzpWs9ik",
  "key1": "3hAkSUtqzgio2KfHW1ZwAiSWkY1Hkn3fsfkZEAjrWZZe69WBZLswN8c2ZjoAKwx8eS764uoqYTymLCBPj99GcL4z",
  "key2": "2tzdeci4Bg4pDUE9SawQekG9TbZrKYQr8Qeuqw4bmLacTCNnPFVhvS7ydfKFMiWBmP8gsdbQ8Jp9xJe1PvRPhVwx",
  "key3": "57U3sTk1BrA1q59wgMA78HUz3y82AMmNU7ZryExrdnMrAZmbhgiqwNx1bvo6W9X96GpaHJchVeJh6LtosYxqhLru",
  "key4": "4jUiMxCbpRBZTcFWDqfG22g9PtQgHqfEWBWY5D7phAPFBGVMSLFFkX2VPqYyrGX2NhRYZ5MfAAiB7vVB82N1vZWa",
  "key5": "64EHAcAub84rreWpPpvwU53FcuRZt9vj5Qw4NSEQ2CsFJgxFZdJDBEA9mgATLjdtNpURpN6EPEx7pQ4dGngNCrca",
  "key6": "5MnToFzhWwKw9n4tk6tVCanmBZKccbyucvna1UsJGJxbZxTZBcwzuRoCUbYSXugmbR81o2JTLsmyLu8pa93bnJJ4",
  "key7": "3pvUNodutFCKHn4Absk4gw6eYvMWhooinbJs1yrkTUfiAepewwRfxsGkJxTPDMnQkAsAqrmW375AnwwxQ7VuayMS",
  "key8": "2XBV1cCriPC4SyFo3tcVzGmJdCSiTgoCg2pPK15z9RrFn4p2nYr6bLG78v4GKyxyGdoKxxr6qfuhurZR3wgCP988",
  "key9": "5JiQYuVLZFmpe6SS5AkHSDan4ZMufSZBcqW47ZniE4ys3qUQ7SqwKbNBiPvazjawHbJM8M9fSi5jeDUS6rLM3CWQ",
  "key10": "wBRdMiFu7uJywbJZMmkNxT6Q1unq85qXD2BaF3TMHYmmBUVd41H1rMZfHLTUEZv6vFGgWLUqpKhat2HNHg8RNVK",
  "key11": "5HMtd7fYYRdiGcHpkEKv4A3NkpDXTEBGEzwNhUFFBkVZP4GWabvCMn7BfrpKVLnDJyCj8eqjuYoJeajeSSHNARsQ",
  "key12": "2zbFQyAudpqkrRuEnk5uqzjKtADf9rKsEwyFoNjGY31iTvtfjLJYFNShPFMJG9sFRMjRmG5JGmbdeMaMqYgMD3tx",
  "key13": "Gato9bZ55szhf6cphTHh5qCMWb5mYfgqpewCbfGTMis6gfeuFYoCQ69u4FSGRDeFztrhGGoyDZj5yLhiaARZR3y",
  "key14": "5sQWusbRphMp6ztbkeNWUvHJeyFZPAqnRwB5qYcqtZkuVTfQFUqC4ZpdgR5P861PKQEfKPP6GVAUtsY1sXXXGx3X",
  "key15": "3z7YcuLeBEyMNyopqV8SCVkBsWBxT2N1TP3f8N8TR39Ddsh1KyjDBy2Bt9pzXcqfqjDNCmnAbWFQ3f37B1bfRoxD",
  "key16": "3Ww8AmUKAwQUH34wrwgJkhadEQqdZtR1tvAkyz6YrrJyBxNuKe7uVKXBDJQ9E1gsBWroSTSB1qKVnsp78NoBdjdE",
  "key17": "5dSKeFbCCGLiY58Qu4v8z4txbfCcivo1v6Dvcbw41gLamXZhgSvkZb8AKwYxjA1aZ9weB2SfSHhxa6oLHR2pSXXd",
  "key18": "62FoV3oig2ZrDdmduxXxRMtLJuGcTAgDtttZY7WKN3bGEXVZpjA21eNfsvkWqriajWCBpVNcA49uKf1TgdsaY2op",
  "key19": "kiPrhiQcMcNSFcbtfnmzMNKx2m4MVXFAwTfuf7Ve1CWL9v7SDfKGzyCSySQLyrfMypj9shDXrVUwjbf8rwJsfP4",
  "key20": "59JHwooNDRoQSHbSvxSPDrwFjUuYZV2mFq7U1x3t7e62A76A1ZS9N2JuH1BHedoYkf9md1fpwJsZzs1TcvasV7aT",
  "key21": "Jxbqun4CKdaxPYAcGqnWD3gUCcpJpQ69ohLnTzxQ25YcQ45Jwk3PKCGzoq3MQsmK8PumvqMhV1nYhpsmERFpnrF",
  "key22": "5qzBuT6uwHJRQA6QVWEdJHoS8wtvUGi3QS7c7QJxpFcahUKur1CW1Czhut1XQpzexp63a8Es6Ze489btt5nj8kED",
  "key23": "4mqzDdyH4Kfeiym1okyNtxL9DWpoDs97cgmMXyXg2JmRGBzn47JEbTSQxHcjta7SHB43RcRjdC6ucbjo6FrJrmw9",
  "key24": "5kTYjggiVd1UYYXaQHqW3q21JKaEZ4d8gB8obnwixsrv1AAWj1vMtcgRyTVCjrzJmaYUWbczZdAdvqVP5cDmGTh9",
  "key25": "2rFRafd7BJdJNA9P8yprSxTLHcQEJZCHm3QBofJunYuYeAHzwpKugtkdmXTQ4bGFSMrYrsJHbLPu4FTf3c9ZqRsH",
  "key26": "uBcwtN2Dt9UfRtKhBLGZxFUL7bephdeaXvEUzyR2u5msKKRhQQ9DSKaKkgYS1nAzSFuXcQiUxvwe4RUJGyqt1xZ",
  "key27": "3sKs3WA4Q3gpwN2v5gwsQ7tCk8YrdD2ZHcPifJdQQEE4kPkv3j7HGdAWTEdypSFpS4txY1ZX1TLd2QBQiMaiFrWf",
  "key28": "4xeWw2g2UfqzcRY7DNYpA2U2McfoDousWqXoTyeHVePMGigjT9j13u2ZV7z1WiEqWD7sKxsTMVnzuTBqBjkSTqn9",
  "key29": "jSjJdEaVQVr97Uz55XKV4qxRSDVyb9R6uRKetKmpddp9LVQFCeLxxCfkMhjumj4DMLz1TJBudAAz89CMbStquKU",
  "key30": "2TWgTC22qAVRKzvMiuPdN73q55wSrVMJKfAVN785h3jFkJoyUcLKoRyH5AkP4DwCuL29mKgkVReszMqTRG28K5UJ",
  "key31": "5rRYostbkTXMF1gK1BJSvdoKAvjUGrq12PkZhb94vnszoxMkYfkej61V2D9xCB7aDp6FotZHvuFjDsefQWf9pVCZ",
  "key32": "4sShvzXYuUZFtvTByDfEUaa3zVLwTDLtLNeJ4nvtzXAzoZAzNrGqStT6qvfn91zva2Couh4ooSgtKcFHwdZJzDgu",
  "key33": "4AkL123pzTN999motLWxwvkka6eiMFZ9nsSxnMyUbBr2epy9ApHGDWnL4xx34SYWuvESYDaxdnf9CguVLjxwfipY",
  "key34": "4EMmis3QVRKdkTP7SJ92kRLzAEgbvovZNi7ooLBt3byTan76h5XJrAXAwyG13CndMNMyrAZWGWEBtMPogkyfR449",
  "key35": "2w8JehGAVD4dHmka5UERieTR9Dc6FZ3wR8q6pLzraLNsW7FHXnd8px9n9dfwcknwkLdBq5Jpjqnu3T45dfkPtQij",
  "key36": "nARabA7nFgsZJLSmotx9S7boT675489Pqyt2yRUKDhTEMe3ihe6LdMwGsgcuJZNCmqSjRaSiwQRVnGueFmXfCZh",
  "key37": "CcpYcwbLZJDp8Sy9FituJ38hjN3dGYjptQoG5Qvref38JpohMvqxfpsuFvB92Vb4JkbB8Mw4aSNzBScFiNUUHmt",
  "key38": "2tkoz4hduamhtLVe46MRF3eURVpWES8EqHuoED8s9YQqMJhgQtxJK5EyyKxnuHHdLepVsENxqNtBwE5tKzkatXni",
  "key39": "4mDnMZZ8VPsnmf3PJZW7P3fUSGDhRy51jUrBcYen6evYcnk5xs3dxT4XZoRfLj1sYrkJuLHTxt4fmGdZgyh36xaA",
  "key40": "4Wq1NKd1HjDDna4M2XWPHzatfiFzJtnGEmTg4Z7pMG2a2obejdSsyyQTGDX1tSVNJ5sewYjY14KzMBkFFo4qE9vX",
  "key41": "2gteU4GNp16BVfPb5wS8hLV2hUGcyp8P43NaQYwP48mqZa6uBVCddZx1aTVvtQx2Knc4gck8N1aWZDryza5UaTu",
  "key42": "3rHo5ckDZQiGmv3QA8UsZ1zixSHdXyLZEb2bUc9pSNavtBKX9FXy1hwkRJYLFNv3f4aFGiWkLJwnDFRsAfXGwLv5",
  "key43": "44ctihgrAnrWHqJaVri6P9htnn4JEK1BzCaPiNNEHQ1aTqu981PSZQMGdUxCV3MhdKUXifdr5SvdP2WtoQC3419Q",
  "key44": "iruuhEdRGVPLbGNpuPwZbBvr7J7eJmip4uvy7EjwyqseBECMrovDPsNkL93gB5Xh2Wf5d5AJnjd7vUVdnn2hS9X",
  "key45": "bQpR9e3Jfj5E8dhAArBTfTndXTHifr54Z9NRtK1ZkmQxBpJvFoQKQgJHGPMMZHikkjpCMTtbZi48cXtPNdUmxTi"
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
