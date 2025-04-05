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
    "4SgzAbj5yDUuNCXS1XcDRiBa11bqC2Jt4WwLXLorT6xSyz6x1S7dH6bmqiDb3f4MT8VLzo4hLT9BwNA1NuVUokip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L5vFFozXXookEMCVeS347oubBgCcDjxwrxyqzUordMTMeNDApQ8mUsHcMgrYfq1DbCGPm2o1A4yhE7sDwVrEueZ",
  "key1": "4JXqS2YxZBN7GCCLxCNc7xipFQKzMbpo3frkwZVTDBKLA3jkxsrLSQRHR2iVr1igzfngdxAimbfNoyfcdaZwwAb9",
  "key2": "2rruccCtXKfARXeEkQCuzkyqvrmsr4eUGr58ShVZxs3cU3xMHj2mjXG7xABiGjLPy9zZTad8C1R748xYLVVaFU8P",
  "key3": "4Atu9JrL2RdjSLMgZc6iDDdzkFVU3e64SLi9A1tkuEfqvnmMwAHhYYKbTjXi3hchTXBSSqJA76dkZwYkkhvEhyNL",
  "key4": "5y1xrpPbKzvxedSPZ7oCJ9X4domSJZU4GBGx4x62S56JKMk2pgXTHxwcfd1vZJrj5GFnSvcXgkTHsYymDX6zBkDz",
  "key5": "3tF8VYpr5VfjUyXG29H7V6smhE2SjMtHXCxz3oFC1nBa4shFDKhd685w6HuVQULGoF3CzzuP5G6Q1SeWVmn43E3e",
  "key6": "2hVjqXGEx8JDHCJvzy4E67TTv2e6C3YVi2aKpDbo65qVNQ84Jq4QjDUHwZeg5j3SHrWWdaQj7FG9wFeLMe19DDde",
  "key7": "4Mttj3Tab9EyE3zKqEzffFZ3UbJ6iafBs6osBQWAcg85kZrK8oxUzsAbkLKjnBsBh9qNn5TJ4adXE4DcBDJtWVUQ",
  "key8": "4zvHDGhxB5qCizgpJoaPaFnuaPLkPgQKdspLHRTCRWggcfQdTCqv2yTXAYi1kvHpdJhPg9MSQ1mtmdk8g8JzRjDe",
  "key9": "3Uo4VfD9v45kqVX415yDXRPiH4d6E3HukH3VuDkv67A3FMZc8xnfKL5uozdZSGMf1wfsEUtLpesgciyCBocyCMtc",
  "key10": "2JneNeLgdRKentN38PK1PWCqQghZ4LsEfBziKViHr6tZFxkFMhxWJq8yPkFZzkMTUgkxwCFZ8qLXN3SfdnB7VUdb",
  "key11": "4pwjMeGQmKxB7uJNDAYYBLxWQ69ndeGu9DjUTyJ5EnV8Ew8DdLbo55HEDox3B9kHFjExKMDEk2o2o87eVMCGusiG",
  "key12": "3HukDjirGRADE35EokSkfP87sPXHXYhgzb8hHQLhjMSG1wZpZq7XG3TX75UhJEqrgygyqXYwVW92CcpoXt4L4Rya",
  "key13": "2mzkGwR5M6hrdD8BibadnoHiFr6bPWCL2KMnj7V9r5vodrpwYzTpHwwRsPdCdKcE4cLgNhrRDAwHbZ98m17GLv3P",
  "key14": "QxvquiCa6n9v36zSoTRepVR1ckmVd2NumVgscFqah9pxETBfsQ5W9LfnPxbEupEPPPv9WdgyUPQZNpohDSAvF5x",
  "key15": "64GU62xQ5oRxzPjjtL4V2hzez2TujPgmkoP2eM2EL18QRNAB5Hj3BEfQPDjdZRSi6a5rEovpk2A1MLgyWkpEQEz8",
  "key16": "5JJKTZr6ibrkvgYci6XT7ysitguGF4coBnsqD8Zh8WcDPuwUiKvDDed2nQX11wzprjRPrFfnecjG7YQfN3hyRQKi",
  "key17": "56QdidVn5oL1YTWMFTgeiWcPXb2Jgr2CY4LVVpCJLvLr3zLXYQB4z8PPsaYG7VrbkVU3qVUtvwKqEjG36affj6d9",
  "key18": "5tXdNHKRdufMsxxqkqZXQa3Bc3V2ysWYpRsCniMKwbnSFP7Y44EdTCe86LjERm5eoxib3y5C6SdnCnhEJVcmABhD",
  "key19": "4inm9tUYHs2z9wtvQpdWaABD6ZsDnXv3BDAmqQQcF6ySkEHcJARr2upp1DSqgQ9Ty3DBrvgWdfe53Wkc8v5jYTt1",
  "key20": "3DxvUh9wdJQKZvhmqfSPhXAUvzBySM5FKJR14BPy7GpuKWjpKPuhgBtSeHyeDM9ooBXpTotK2WKN9j6wULQLPidh",
  "key21": "579E9MbFan7BegQuwdUXpmmhBft2mgvEV4n1rm6cV8y6QyHkAbj2nv8S1yxLFbK9sj9zhGvUSsxEdtTZtJQdCEDE",
  "key22": "L4ZsyvsZSziKa513VK3G5nhpSpfYj1imUazDe6FXhkwjHTzSuigpZ8wEyvJZhEA9ymu7ts1693VQ98wxbLVjSgY",
  "key23": "5qxy9dNn6zxqYWAzYJZzoZ1RD5DTXWSZg217CmAbLTWyviG9pFwqDhFCQ2GEvovoX2LPA8FVXJ2T7N3NoXTEKUZr",
  "key24": "nycTBqNXB5wbUzkb7eXCc61XvhaPg1LkGYRKygi7EqAWUk2pFMRM6U1X5whS3yfg2YFCRHqrseBQxbaJq73tETD",
  "key25": "5HKz79QbfijRCWWWeHGuSFLsoXSonfDspL9YMhavvbr25beiRbzueMrBKvV3RpTYr6wGVBvn2tPym9oYzevBJp4y",
  "key26": "e8UmVnmZDpCujwzJKb3cTJMX1FPRKnQpRhcVLUnTpjM3AcybjPU8txmSEHXjRvKHVxwXt6nyhRX8CJa6SoVtCj8",
  "key27": "3JiCnruLW88ddx2dnCMxU3UtRyWGnJw6RurcxMybApE9RLvA9LzFUNAtzHBsRmVPsMS3NfA6JA4DePcwnyCKBK7n",
  "key28": "2cz1EmH8pWxs3ay8GN4SMJMXXKbeNCkr11JCb5duYhb5x2YUqWn2HbHjy4Y1ZN1JeuY7gKBugHftKSnNAgisUWog",
  "key29": "rozmHsedUKwphWkzBbpEiPPkUwhG1tT8Ec6oxPHAPZ5DjQivYcfjkrwsbmDLFQ6pLAUamvAYW6zZRBaEer2SCbX",
  "key30": "2isyszrG19jEEZWtpjs7N7XSTX8wNwjgshJ1fy1UJnwwnKCmQsVSt9NUyjMMULDWcLkXPcH4UYhCgyCStLjVNoEH"
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
