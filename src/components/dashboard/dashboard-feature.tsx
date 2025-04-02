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
    "Lv6xwAzKv3ak15gzUsutiUGGXgV48eJeiMKbfGp5YKHus5QTaxX9WA7pZDYhk64EkongSWEnq6XSMSQEEf6VdyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JcMrFmXn5bLnrtG5Tw36SEvEbJVhkzCcHUfS1aSiuTi9a3W47wKZBLs8N68Z7BFWno5W5DoK4agL7tF6a8PcHPb",
  "key1": "3dYm538QmwTc9YnqkFQdZg1hgicFrZvrhJcg12LG3zT6xMn6bNjtNsNh61hpzZWRszeYZeyZvtaHiT3TyE4Mjhq4",
  "key2": "23h8H5tqTuZLuzvfKRcssDYwkepcyeCGKqqLnrrePcgGtH2sy8mbfDADML8U1nLhK1LaTLQYZm3x2WwsY8XsFmEM",
  "key3": "4YoEEJ7akdc2ytJVsydJzBpxK2rPrHHCS3QsCkEsms32RdNqMHNHWkV6JMU7Kc4w1EUssvWWgrRc8jnQ55MDjAJa",
  "key4": "3YsbgVRCU9Q5GHVPM99vuHzqsphzUL4fXodJgUuNaQyfcutTqamgtxsfuQALsFH3sMW7v8Z2Emd3oQHUj6tNdXpw",
  "key5": "4pSXzkKCFpaxEsmAJ5aVNPdX3pgzzisoNX26UnYXuvmgrqXTBLBQsie3eYeMow39sihDG3Ard11WRqV6KUznFAEN",
  "key6": "2qBRZqshqq6ea57Ra2McdWff8goiLxqg6jiAXT1rnu24fpJ6UkzDyBThMSe2oGBvihA5ZZaibwKjdN5yA57x53qv",
  "key7": "5xcwwyuWWa4xCfnk13A4ViZdXjpaGMr8grnd5KdP1Uazkkf22zoQjLSapuFjijHgFcE7zYjGJDmPPB1mRQ4Br9dY",
  "key8": "67RoEBVMHyKb6AyUU2UbQtb16fJgmn83zwSxytssmERQ3h185ssNhbxYFbJ4avdEvHpA8kewNuUjSe8HDP2DnhxP",
  "key9": "4zXehJXSvjDque6PcXwVx4Kn7ZBawjstNbARxq3gK68yexokiSw9fXa51Rc4NSPUZ5LxKbZPg4Xx8yhTV5v6hKeW",
  "key10": "5K31aJiu1ix6ugYQMhQwNBWQMiEB8n8eBzFEaeu7RwnGCxhdRCmXtWwcykVq8GhEqEeuMjsHrzi8ue4KX1W23RZY",
  "key11": "WU9j99R8wbS8uULcN8B6fxKb64ydHdNXd2R4Tie3UAJzrQcpZPonnqK2nNZxCw824RyANdDEisgLKdwBetmbevo",
  "key12": "5GBwwXYLjEaxYvMw6qpyF9pU2cHfb4Lq4Di2wbUyWpAFYE2ZTpf9JBfqidLgJh7zH3Src8RR9SDjDUnPBju9xsxG",
  "key13": "31axmQ9Zx4FesmHfDtpEgHCegTob6JDWr8WR5NVyAQkSKmr466exSkLoibsUGKMqCFEQuQCRSd1UHt5shDtsB3tc",
  "key14": "4qSbwhyP8K9Xcw3QgejcpXX6i8WHMpHAgCB3uDhQW8DjjFqUch3L4c4up9sa7dTEumfpbzizrejCUsK8iLJtnmQx",
  "key15": "2BCqjEPb7eVnhBoZQyzkHk9826xq3ay6KypUV35jJfjnZ5QWy3iDeKkzLyLU6nsNdNRUCx3Svh3LjGGmDfwEELqz",
  "key16": "3p3hEZaqJEjh7KvgpqF9WrFC6MG1ofSYdSP4VeQH7g37qa7vqSwZqgSMy5xSpqfbkMUN9oXLBc3dSqtnuU9agrcq",
  "key17": "43meyfHpCb5yAusxg4CvSDtPffoeidvf5auKxrEh7AeYPr8JDUnkxtFJZvv9GXa4TkEYhuMg9AEwnaw2XagnfhFc",
  "key18": "XqmqCXnbQqtFAK5f4AvskJc61Hk5DouH57UiLNpLnouBPFhsPx3MvApKfyxhihH4Xovv8mGzSrHnpmJ36CU1Rvx",
  "key19": "5qVgw2WRbteunqR16wvwgA3VV3PfdEiZ3ZyL2tkuGVe9um5MRJQyJafYrBP21eobz1zAs4cPyNgRbpsAEoVdFGWV",
  "key20": "4UgJSp8UKm8wLnCophGxx2evQmWF9aUYRoX2AM8jWjdUuiiD8aaQyN9iPqE61XsCnfkmgxgRsmWw4RycXnTsqvV3",
  "key21": "3g9qXavhUhdCeHaXRBXwQfCkX79MDqQP5xXViiiuNCqK3B6QqPsxRFt3Wcj37PUSCkmE6DE3Y6bDwR7Fh7cTpkSp",
  "key22": "3fQ1MpYYXgm5LLTp25Bc73Zja7wdRMsS3czkDS53dtVKe4ZqhZCMXwb3ePPB6vTA9th7jWR2SUmfpVfswZdwEijv",
  "key23": "3DkNy2tCPqLN6gc2ppvhqjVWwh4Qc5LwoqW12B7BwDJNNsnVQ62cxzKQiLk1jG6CKEjvbhmkLGkupdYpJEZaFaaj",
  "key24": "kHsUpz8wN9VgAd7NmQJQCDNbAvwW7RoL3qpyPmBNgFP8FAyeDKhs94ct2qUkw8C4diJ1ejFvvcjWFks4LQvKDRA",
  "key25": "639ZxJcYqgV9Egf2SLZECcqNn4oov36ddx535ForJnsqqaeM6FEYp3VTnmqWW7xrCfNtZfm21aU7JsAvDKdVMVjk",
  "key26": "4Fj3rK4m2BoHWkQQdci5qgVyoSojgJU516i5dFeKPSHv7Utvee2Fi8Aorx7kcTQ8JQ7ztj3VPtyN7WGWMYuMNuYG",
  "key27": "3js9TwkqtmiTXvzGjrM73K2pKgaPfGayRrLwe3YjRLFSjh7U3LxbqrKSw9n1HwpjSkfuDg5zaAasVMQvLeR3gEWw",
  "key28": "5uJsmVBemZ2TMEeiRXywinJi2xCnYU15wJSuh36aeCZiE2jy8NeBGP73N8uPX71dBeJfqz3baEmWJoV6iw4B7gYt",
  "key29": "nH2AAUy7VKyBM78U1Ux1rNUUwukZt1b3QQpLjHFB6sP73YPjHkSaFY8wjFamyyQi3hLyaYCovcMuELe2YaFqbLh",
  "key30": "3FFRtcHGTwzoeq7kfKiWZYzzoD6FRX8UpA1eQwB9RDmddAMsgZCLRPBNjA1EeGekgcYMdPZQuJZDBKSmDf9kAi4d",
  "key31": "5wZ5ALnk3aSsj42uKLQ6nrLHpjr4isibU1ubmMq1ow4hugPb9t6Su6hsRGeiSXvjQ5zvxKtVSQs6udkjyKDKBZDV",
  "key32": "2J9BqpzLDLYCFeqwQbRWZg4vLW2DpebNd4F6NT8mVbK13GKmM1qQYK4pBEdMz3kethAWEBjU2LhTFEMGjwDR4PEo",
  "key33": "4UnYqS8d9FvXfpSvZXHwBoQX1giUzv8N59u193rpTopaGuBwSZPzReaWgoixYf9xKmJhGthsP64ur26hcLmoUEGD",
  "key34": "22bzrZrWhnCs6ooAiJSwXPPjNiFkQnAWXtVGViqKAUZYvW4R6b3nbe7cKwfB5AWXheQ2qsN7aX28kFAw54a1Bk95",
  "key35": "xZcqvd5uCLQoyUJP2gdVQBc7cVmxeeQnhGeCe161TqLpjB3Mx2LMTTr9oiCDHLV5P2WECU3NChaVgwSMihhGgYp",
  "key36": "3bcbfjkT1kp2zc88YGkHNeNVq9mVNnCjH6hnw5GjL9vLqdQ1ufVVHhoUzMdWyLiiVay7PjP9274t4K8JNwa79QgM",
  "key37": "24PUqnGaUz8cyKaPaa8ggqB1PzdutvbPvdLvMD9ykGc9DAtuA6hMqoJCrh5AxYVjNXqhogvscKHU6HMYuSnCSJGk"
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
