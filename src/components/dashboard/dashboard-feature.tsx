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
    "4EJjANaWzeZrG3YrMVCza5wQkjYMdYtDp1Ggkx2849o6dTHzy1NyHsbhgYjdFPnFbRF9er6jzato6c1oJr4fQhrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52JyXjP17UUY6QRZk5T6anns73DyAEPNqYP738Z9Syzi3UrKMwxYjwkHBViBfcH35qdYMbKSV7QwevM5EFnJXsUe",
  "key1": "475UmYX6hCeanyh2pg4TdcphcGju4RboKCmiyVe8fH7NydmWfjy7LBaeFGaiwuiDpXNS9dAfrW6xeYvBVAvLoWZy",
  "key2": "4w6NRpDgfyTMBJr8mj4Zdqqse6b8z65Lb5ujxh1xLBbCr5mPUnfH9YLoLabyxgc6hofpH5y7SepA2DMQsAPB3pyQ",
  "key3": "5895MADwqBkXon8z2NzwMJL4jaogPgHVAWXbWzfVJ5US5BMybc9o9eAhqYLoxegAaED1YYPVPz43fga9wfr49o1V",
  "key4": "4PnFgMQ4MuwswB3fkmKm9iwfj4XfNiG9cyCY7rtGJsUcCsU7zHE1Q2xFFPZ4SeDNDnWXMChwJrUUkaCXLHkeVt2J",
  "key5": "4Kb2Zkw6dQJ31X5T9zXHzNXFrAM37zVvwFDVhryqHf1yxzEFjRPeTJDeok43wXT349ZutiLUPJkCtjZ2HUezmHgz",
  "key6": "84uikVqmr39YCS6GiMw5oa1JYFPmn84jfqGvdnkx1MKBPXmrG552LafgeN7Y292nC8McJJToSTSRGCpTLfauFXy",
  "key7": "3oRaK6N4DSnpFLZySvNfzVW4VpJBiUoiwrNYUNWaQ7K6cc6xUYzDQ5DLvjWsRbVpztt9h69Sg4r1bypYrFek9YvG",
  "key8": "4jx96gkErqsJ3C5vP99NniR4c4zXWLcn9327rV9gRcuNFAgBzp9rqpcKAe5kSKsmibMrzw4E87jrm4hqCSfHzUE7",
  "key9": "XSinXpf4dTqfcoi1Yn5h5K29eA9yY2bywsKmb37ak8nCU8k689ViCJvjSJTH52MigwNe8gkmAAGa3enEos7Peqh",
  "key10": "3Bw7GPiMv66taC5TkxSdcS3mi2v5YV7areYQfo9QtkJxS69q2v5eNPpk3ShBRAyEWcvkoeHYfkbB8g4F3EdRyWmy",
  "key11": "3TjP57ce81rtnu388NkVo6WjsZQdWZ7QEmwVunu6zi2pC7eYnjmU16tuLeG6osfBx7tLGfvvG9vTYD6v2Dkrr6V6",
  "key12": "4eVmV3DA4RHicZhLdBnx37j17niKvtB76t2Fpxdz461HGjkBqRSpa4vwgwaWzrAYdbe1gSgwgUCdhuXHNCxGhmKW",
  "key13": "5mgWJDC5SPQPRtCCaEQYs9pH3LSUbNx1NisKcY4RcDeDbkf27rhisygx5A6ro1i5SqJc67UGXdM9uRG3Uvbr1mvP",
  "key14": "4UePfYWvYh5QpUwDd2xu92wzo1jJgCcT83beEREEDnKY7nwtWhJ92t9Cj7SY3RdmgGg9qsS3zh9rPJzdbfV9gjBQ",
  "key15": "2TRFh15nhDqjrbPrQgaJkVePKswEtZw3NpjZjWXx1rqgfen3saL1RUdutyceb9PDhqcjABiy5SkuD8n5fTetrewE",
  "key16": "ktv6vF5cESKcukt3x6pRuLnKVguefsCxV4ht9oJVDZodwiCgf4L9nTrM1y9LuLxB5jvVv2FHAAJ2GdaWpLnjzGe",
  "key17": "5JsGwsFgxwehJNCaCUf7PjXHiDVW57RdcRXyiU4S8hWi9mpyDrLER189GpWd9YJGTb5ue6kP3CRK9mWFP6nk94o7",
  "key18": "3EGv66whGwUFUDpU2ofsVejVfXcca6ZAQHyz5CkKJNJNXdbbYZydJXKpSVXtEqzcerhnvZ4K3hzwExKorBF6K4Ak",
  "key19": "2McxvFrtQ5nTZkBbkKHuQ8ttWmJjr4Kh4bN7aoUZisn6PHm9qxrMJk5NyFSqaCqBSGYu128Lsb6EaJo6t7XtThu8",
  "key20": "6JbqiyDnzGtZzTWUq1uP6RkCWVMNX5BcHHA2ME5RxU7sjFAivnkFQJCp2niADVdYhWP2EipS3urzHptSziJe6Aq",
  "key21": "564kvibtnK1a6SH4U6Azm7ugk2abHvu6CdDJTFACAVCCVgScGC7Z6wN7xFiEjYS64vJAtLRLkFq84nAgMSC3NSYc",
  "key22": "3YfQS4Bqxy3zRK9EPSFrprQzTTanNpY2TQ1ssB2zwkj9KMmxihkEjwmyBDBWfr9mKxsEr3Lcz1ZpdBPbctjHQpcW",
  "key23": "e4PP87wiNtUYSt3spggvqp3w7ZBQ7QtmF9oatwfG6SyqqiHngV2qZib4db9cBiBMNPGysLBbAoLd4JpEgbaVmWp",
  "key24": "2swF1KHicYLg8t9Qe3yaN4jBXgu7R6HVdFXjvtsbpckn4gsp38d59vA6Ni8SfUzZSvhBeyCHLGCggvarjsBLVoCG",
  "key25": "247KcPqd5C7bWTTVKuwwLqh3ERmEDwuYH6zQHhymBaEFbpKsc1gJyhVinLTYHD5UFRZNDcE3gQ5d6wpWqZTuLMmz",
  "key26": "54irDKqBM2eXj4v68PXNZF9keu2Kk5eed8m5srarpa62Jxii3xSGnCt59BnnX6Njkf9FSkVh7T6H4SvQtNCwcyB3",
  "key27": "3C7QTAb2H4HX9A4cbVq7vRha9GtqGuLBHsDAYJK8cTAb13Nx2nrhYZGzwkpmsY9UGsn7Saed1fpRJECbxxvTXFQv",
  "key28": "6cGLUTEeJ84ATRu9wXc8NLbQdPiGnGUnpUXk4aHphpVL4dss7dzcTaSsP6DxoiH6tZtYqvGUQLhTgh5osbcuwBE",
  "key29": "4apBZRQJy3bnZQfa9CBXCzz1V662TmpePwC6u4XzrRAXoVgd2i6nXiXcZQNwZPBAkYMkJ6Cw5DxU1p7jQhnzEW5p",
  "key30": "iXpHum4WTvPZBuXnPsKZMLGGCrK6Tsn66DHgPAVtH73c1TJC1DxRdc5VZDwPFz78eq8LAhVpVY5S14aJQaGCNyR",
  "key31": "2iVL8YkVAzYD1uY5CKkVFT153G4Zbjgchuxj8spcrXbYQDYRoGreFhKsMHQUc4hbKNQpG7NPwUDgKv1ecib4pEfg",
  "key32": "3UVR8j8LAKxxMhdxjvcraYpuJgRkARcE3atZMP64CuCC8BARVHDYMVrKxnM9dUea5WVkqU6utS6VojsaeBKcqWE7",
  "key33": "43368gWoD7sT454sFnYaMTy6HDdAc8zD314aXAWsNEA12qYV4G9UQMRq1rZ2oLCuwJyDy8arAP9QBiJKt4uxq2Ct",
  "key34": "5bUkR8W6nSG2zgEwHS6nQxQWsqfWQer2W9uHG91a9n3XhCfifSgw8XPoHTEKdGCdxTEK71Dow48TGDQepEeajCMc",
  "key35": "jVH46fy71iKY2XzLeTUS7WXmW4zZXyamZS8rffXntXbbcV45AjgnhbRfTHzCyp48uVwVyGwAn1gujTsQ1z4ujMQ",
  "key36": "UAr3C8awgZw3hqAVrQdjLuU2EMRhqpvQd9Da1vmGSxTKJXbNp4L6UhuG1Ma76QcdB86g7ZiwBpo4VPLBdXC19Dc",
  "key37": "26dBFD6MgKwt7vBGJ5TCZ7NsH76HqiSHhn9qpwwEA6MkPCqgB4TY5PyAFsMLrHo3RoVZ3KmRXBTszBr5mLMTjjyG"
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
