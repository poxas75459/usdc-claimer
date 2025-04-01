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
    "4rupv56ARWHou6Yx7dFHx4qF5HhEnCk895Sy9CxAzvZXGYUU7grsAHvFDE2xLLQrEfW75r5hVMqCGa9TUXrB3nG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YvVuhTBQyKRfHEuKSc8etBFJq7un7XPqMcTB99aShpGGZX9vxrvvQg2AxgpjxgQrCVpc2aZZM93QBgH18zos8Eh",
  "key1": "3TtM3nMVe6yu583FxMYxebVQDNECbGooiLSV9G4dYBeMcQr5ACfs2hkCWuoL4ES2awNJcMXLSJVk3RDvDNUFqACD",
  "key2": "3iZvrWxt31Gj3uinqvXyeCPuWhzRpBZxkPVUfG8iTakGXtgufqfcRcnTufN3ToZQETumd6YFj4ZGJhzkbFuafRYF",
  "key3": "49WQDBc4pr9T73pXNCwJFev257rxGWjVkm6ngtDgxUEEnB2c2GPuxe5vtk4EScPtseaLAyRwEi7T7N6B7oq53LnJ",
  "key4": "4DkUTQep8E1tYBuae7SJh3GW6HNf2Lqvv9sxTpgE1xUwsSZxCrGHba8TJiAf9TviHS72KjU45mqLSEDzE6gxmQLT",
  "key5": "dbgrrnKfgqEUZcentntWYPF8Z3ktZo4twjGrAAN67RnAih3PahhcmkwcauY3VJXUoBs1a1H6a9AwKyVXRJY1KtT",
  "key6": "4WVkG9kdWGGGjVfd77siqniUhkjyLowxHpG67h52F8Y4opYkjEi8iyWhXVrhn49jTasAp8KuiFBuGxJgpSYYmHfK",
  "key7": "XGs4nQC1cuRHRtdsQjE9uQKLwqsAGuZ9QEvwQRTMdqqoJTWf5ZKsKXWmAyhabxJZYt3iMWwm9u9Ppunsxe7e7Gs",
  "key8": "Y6mmCRiT9BdjbKLUVmWMbE8CYwjQ5HuqMTnoctuSSDnBqJGp19poV67PyPr9Hu731dwiYuQmCr4trbTdBUtWdtZ",
  "key9": "4hDMGxFH6hrdQ37KRQCjHn5aFtXkfd3hLsedj6LaCUpvaRu1es3zCwpQc1K27cFdcBXwntSMSzr1ybb2uK8okVwz",
  "key10": "2C3ytcrf4SXhHPqf29r3xXi9Dxsgihfq66aocAJWTR3w8eD58GLt4EUUp2NaWM7wwu3mnnzQAcVbJSoGgyYvPqc5",
  "key11": "4YWM4LTJpdmU6HyYsvwZQpMJde3xaLhQyiGJAyjcXgx9AYQ8zJ4vhE8kfw6NJQEP2ve5CfqpCxbBLGcQTofq6Cih",
  "key12": "3KXay3tmypg2k6kv4rdBMQwfJERnp1RJoFDMVZYmGtNHCH9UQ3fdypEq4BcUEdCAuDvcRsLFUXpMxUr1FdVWDq12",
  "key13": "362yLysoA8jBS9MyPzKvQQNJka2EAwgAzPVYQ1CXN6aq4ggVWvmqudJjo2hjdiad2pmurZmRLKpxy1iqB9RN3kvH",
  "key14": "3ZSy2Fp6EjZs2jq21DMZtqQ4cNWxzgahMu27KUQPmcaryaeYTTk7NiuLM3pW2h2cAk3Q9q57cyZDFEuQd9wQ5u5x",
  "key15": "2GzYJRD8j3pZrKkgMcswgJQFKxpwatiX48KPr2vYfsKFiUyzEMqZYscCVyruh9GSyj8axXv5Jg8yDivvgJSzFxBG",
  "key16": "nLaaqk5haCpfpBr4qBTqBjodFkstzmPNFBF2UT5qk4io1adGGnTGi4ujAANgZHKimHLMD7YnWQFTJE4irKp37Tt",
  "key17": "g2CreVqCE4nCTkMmWEm1f5uQsAWjodX4t7yHvVQUAoastLdUJ3ikkWFpBCZbW8a7yWaM5TGnD64MykjX8gvrtpA",
  "key18": "yUAgNdvAWbp8XoFBjt6N8M6pXCtZXFoX41BFkjPA1cpCumxdNvty8cb1SEyetvJeB2ne9T3XNS9y1gmR3adSqZX",
  "key19": "RAUaCWW8t7xcpxkH4RRihkRUvQq8UGmKp91bSmsoT9PEkuni8rUNrsVKNzjArXLhP49qCU81Mww1f8JhzvZptjH",
  "key20": "45QMPpthESmDrf6W7bg97WeMeXQbp91vYrtnDBMWd9Ehmye7dWHCCYstMNs4auxNBcxWbhKrnyNcrHQDJHLMiZdK",
  "key21": "4Gu5LUUvB8HDfBrAoLPBGSWzG6Rg1s2jsQNeo15iC8fAevggX1njMkLQKgD4uica8YJkpgvDK9QADaaRrDVjtGyX",
  "key22": "4NvzNtthisEgT1U8kcBi8YDppZa2tZcabamNbCjnWWsFdbaRN2o7kB2wFxnSXTbqPbJ8MXMJNfYU7zC9uCSydstH",
  "key23": "3yYNPm8FrQ1gJNeAU5rSVtufwuvtGRTcSJdyA7LWiEtSAPovAeRh4iWQXhFxKc7zR9KhbDj7VGwLD7Srusi55WKc",
  "key24": "ib7XxzFZwzdRVMv6VN6qsP7Kv3wrxed9QRQ7VMQFt9AK1fNYP1EGdRu9i2bg3ymi2XXMSReiSJd343um1HAhihU",
  "key25": "2veNpWhFZPB1hyZjuPCR2w4cWkW18rnxHvDYrrAmYXVFcHB3itNA9sJgXNpYA6Mb5B9RdgBpHpgt7JvEAvgc1aKz",
  "key26": "4tZrMrq8KtmURftXLJsK7oTi8W51MZzuAA41YvQuyfdCdjUp3uLj7dfrZJVBd91cQe8J6Wrc32gpMNht77tPCYnq",
  "key27": "57Vo4uHRJBZayyWcn1cAwz8gEebn4kemqvskVKYBpqwXwaAnR7GXxgNACjA3gtr7bRWqjtyXSWKwrnMR386buVtT",
  "key28": "4qUoUmWEMV6djxshYcok9Y5F9NNN94Ys7nX5kPF2tZc3huHA53rZcgKyrrdR7UCzu8MmtYU6EUjrEeX9F6nj2Y3",
  "key29": "4EAxauu8SJzFxGhLR7xh8sj9mGoCscaoioW8fZMuBN1Dgg7CHJNCw5zqYHBZHURFwk21kwy5MztawE9KbmDPX4vW"
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
