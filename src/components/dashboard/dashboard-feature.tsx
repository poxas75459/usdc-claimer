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
    "zyqhotjwqierLfeJoP329CRZXADGuNa3AJJLbspCE39ZcCPqMiHEqi8WXSsG1U32LcMzQHsHRT797vGBRoSEy94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EjrGuZ847UFniTSP8zMCtuyoM28QbjZA9AAPfG2QgWWG9r9TfYAZWz93JDdWfkBypMamCY85n387zVak92qfPbp",
  "key1": "2m5wVoB7YDadasDZiUYKdKrXCtEqVX3R7iUCpS1vZ38tDh6uY2qgKxT9HysWoSyWSFe3DxSySv4PNUUscWWer7tT",
  "key2": "59hDjX31X66Tko3QtWUtjGk5xSBC6k3xgE9DGJpheTzUcKJ5wAAbcoPeehqWJutzA2JTtLN89mr32P6cy7XLL55s",
  "key3": "48LDAF3nBYK3Liv9KvwcV4bBtHYRRaMJ8wiDtfQPc7hJS9JnC9DNr3HpH1hzZSiDw7pc9xe6PkKgz5kepkXzWwtr",
  "key4": "2D6ec9yyb3kmxG1KrG3WTN4J3iXgS41UMvK8XNfUE6TP4c8JFy1hzVePjudqeQWYGWnkgEc2ayomS592DjjWFuyH",
  "key5": "4wrqRzjh6dg7s3rTjrmhEWj15hX8X4uRhn6RbfA1C7XrjHdK51FNdeMNCWpF2Vy629r8Rhd26C34hFvXHPGD3KaS",
  "key6": "q6RSZrf5sZkW3qaA1meDBEgPTLfb57WEpMndcJMchsDjV9CLw63QaQ1vpDVUtnB6r39YeYzw63AVUgbDwvcQLD5",
  "key7": "MteQ5nyoVtj8n61ERabQ8zC9xHXPfMTaaSB8fGVREeBczZz5cgLfC3FD9UdvHuLCoVwKvkTeqdfLxzaN8BLTSVH",
  "key8": "3WBBBFckcMvRLfqjznPMQUoTzJVkFmBGZd5SwbwV7rCHbwpF2TQsuE69PG7HES35SXqxJHdzRgtVtfpFc61pSPPQ",
  "key9": "5RQ1UmbzzrcTHE6xDSLPXAXtdRcLC4vGa9ZyWxqnH96vUGfxpfWsQg3sEFEJswJUFwLhHmRDVuuWdmM5sj2z1aPL",
  "key10": "2YYmwEbSTy2xvruJe7xCSoNkkZ25pdKAja1qUNZJpsf5tvya48ePqAeTVs3mQcsjQnA1JEqSnb85kdRJiwYT5WmA",
  "key11": "3Fcip4FhY5ttNA7zKBqsfdpdsR1vaQMQTTmhh41KonkUjMmh1cuMvnCUFBHrRt34r86CNzdBLNbK3fsKa8YmrVpi",
  "key12": "3zwLaTBsZmi1a2xt9UPvoZaGjLFreCTnmcsjEM7gK1o5k1zHbuJmKbBNPDVDfirqz7duZEs5tDv63NvvtCPg9VBm",
  "key13": "4MfTe1DjkSMhgA9Uoia4Yo4hvxuCyjP6u19rA9UKxExzwz63BiKdut4U5FFqVadQP1PFVyJGs9WNN3wAXDkVjCWh",
  "key14": "4SvyuGWKPuoRLH9zY6JhSjV6dipof3cbNK5bypa6ye5W1DF8p8EChQShXQoeCYQ1MapjBtaCcAobnUBwJifiQmEZ",
  "key15": "9HwAYQwVevo8rAw59cweztZpbp3VCSKKbLX87yNb5fFy3Gcst8xpWY1gccigSPPcE8Egqfrphiib6cQHRAs21mX",
  "key16": "55n5D5Jh6oq89wA5TGxHfGT7p65okzyHz4vFoXcUWXqaSKMfEyYWu8byvUj7CT5ZGZpHrVWMpzVEdecrYQz1iqac",
  "key17": "2PHhi1BmtEMvpEAQVPAHLDB7j29GsZHYFBjkiCWjXBRFDEsjZVMjSGLU2ziH3FuJduvjWdh2KVRhjLvMZFKX7cD8",
  "key18": "4F2PWBSsCNsDYExXBWNCNdqm1NXr4LAq1BT3W6fQY3zcHvky6jBAshc2tGuArWiTrNMNTM92mMjKgJxWyWHm45mW",
  "key19": "FKsUHqntrWPbbGU6h4KGWhTUVZv2L3qcAPZ3voHWocb3Ax2yBsKoTeeNfbANAZZE3ii3zP6H9fVmpcaSU25NbMk",
  "key20": "4bXey1rnsu7dLzXBdTvzXysss9rZBqhGNwxBWS27HUeJ6W3udu2YVu6RYPuCQPvtARksEMP7ZLpS6J6TLPGwC1rt",
  "key21": "YMDekDZ8QS16UdPS4fgKfbsZdQ82Rib9b6uuipo72CTtHz717ZH3QLyvn2fmpLYXfYhSHf3ub3hDmBeEviNXFSN",
  "key22": "2J5CWC12czjUs8RY68Hov6EZAATA8yMCRgtBZko1HFoVfNjTLQpkV1PV5aDFjjQNnrpg4xx5y57FLRZd62BzdXmu",
  "key23": "4nLiaZnPu9uh54nFhFgADSc1H7kNYUTsV1wJqpNEKnexWfQdZd3Bp43esbQKWfaydqsxrSkNiWGRXAQPAGNwNjEf",
  "key24": "3mNnfb1AhN4Rhd2aqgvQ5vMbj27wzLBAie2AZL9gMqa6fHLNn2fr8N1PBs6qcoYB8nj1yvvv2bWE1WGrVZgjFN36",
  "key25": "CT21wZH65xBfV7Nwf3PDpVaGxiAoe862bWWBsx7EPmYFhNmMqNmuzhUysMDqX35HxfHkYU8WU6Qi5bebrus6JBR",
  "key26": "7gp471cKogh653Xo15tej9AkNfWxYCmmTbDDXnz8JtmQBwHtc1BRhukgmN7PrPuGXES8vQACtYGqaM1WSndJUjz",
  "key27": "4TQe9ctaooCw6wrRNSNJJ7atBhkkzZxvLMd9xUaVHdA3RygNmP4jmSxQiaTTVzCmzyUujqUMbVZcNMQaqpCD76xm",
  "key28": "3heJjivV7Tmw58YYhwXR7gh8Cbw8xeqjcDXqi2dF1McKX97nvKsirekuVKP3BxNqg2AsPzLYYvuec1zLsx3kS1zH",
  "key29": "5VvSFSqmpdHRdGJhxP6YnzWExa7mCZh5KPCjxu6tUvXUSwt25h5o81EsBotRsgcNBpcG93t25uGv4BcPuvCYPMs",
  "key30": "2GVkwiQDmRZ45uMSHo7jRjRjadMdyadUWhPMC58K6JtfWDvzSgXrADDQi6ehwE614GXuVDzoYPfXJhiWkj5DTvZc",
  "key31": "291zfW4JTvzdWqU6sCBoJtFpsa4asQUa8zhExoktnNxJGBswatkmFbSqPtKe8WHk2jqoBnCUw3nvM3CgvtUVBr9T",
  "key32": "5D7zU9fRK6MtDjSifHbi6pwe9pJKAZW3i9vwu9D3LU8CQctY4gpbvvb39aoTckEzhx6iXQ7fcf59Dn9X92DXpjbg",
  "key33": "49FAmFeXPqsiRmwiWucF2oZRzKDNtEAV5RckmmuqdcHZedMHCYhRdjVTtEfVixh22jWwpj1DPytGBhr96rRBS29P",
  "key34": "66PKA9xfBBoYZTuLbZhBKku6gYNzKsE3FXHx3sbh8LNMU8igYYYB4cRT4nDYmqspiXjcadf9SkK8Za5fhhDG8MYZ",
  "key35": "4UhHQQywAVtsTihccUjGHrDFghS9PReH6Y18zfHeeX1AknCJKNw4sBUqGBHd5nLKkYv5sbnkMgxuYpXHY1uLzCrM",
  "key36": "xpWsPngxN6LG1pk8tfifKhYKtkvZRTTkmbnvRBuYYFCxisHUgWLzWrXTkQoka8wkex8oxe1hSFaVJ9iSTqBSfWn",
  "key37": "67bA3LUWHRorwpPdKr5s1tUhug6whv1u5sxjadUAeTs3w1rCExZKDReVaQfq4XSFi9NKyHdj1tSSf8koLB95WDXg",
  "key38": "61isgaMemAH1BD369dpQUdNYTLaAK6M4wx6qRRAzJ9tL7b9be2KinbFsWQmH8EhcD3csC4v35dvipg8hFrhaEoQs",
  "key39": "5C7VrtJnERKWRZJPt94cw3niKZvH5oe2xwbdr5kGhTV3ZmS7dnwwHShmRv8FaCJRSGbi3qpLRvTQ6v1SBLPkYJXn"
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
