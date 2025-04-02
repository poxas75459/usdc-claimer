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
    "5JLs3vg8mgGfazBaVzEm22G8UBgp1i7PfgxwPn7PAyxPKgNvExrp4eLBBTipfsjY6seZCqXabqhCtujzAB9WCAuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RLc534q2pCmkwsdqfvVy7H2oQbQARCwXijx1yu1wiKXuAjnFTvDjnzgXLUatkifhw6gXsywVSYXEL2euegnEqpx",
  "key1": "Q6Y75rVVnKNWJGKNSjnu5jCCHmBJFGWtSGF7GbBFcskaLDXEDUY8PuNQ5QEV11vur42WeeHTGzW1JSFZQqhfDbX",
  "key2": "5qtZWv1HPVjiNaqnJemgXVTJCr5ajdnYvp1RibE3YpAUHtTeDuDz8FazfkcEqXCutnfRhBVL6xDVQfb7Zpzeb7Te",
  "key3": "jgKAZ8HJhRN9eKRrjRENTZ69HVHpR4McxPicETRW3SDxF7qAxgQWK8rMS5LoTe1zRCrWe57bKpKrT5bpEHccSun",
  "key4": "2ARRjjpkHJdgrjufVm6sYtzFhdWNLPvuVT4DNDAvu285giXw3KLCAFGZNhGKe2GN7yT5u8YSqCFCFsnoxjk55ZGB",
  "key5": "67EYnNFLJby9Jc6a4SwZfTHHRtpDVq7zFRTj9WTzRGFzkxqs6bB7oXqnemzFQCC2cKQJnADSaWcZudd4Jx1SmJe",
  "key6": "3ZJw5nRFfre1ymAWXrtPcK6hjJExTQRbWb9m6r5Wfvw4i2iycur6p4vVTud83JLgeE14z87wkfH4PbJGC585EbnS",
  "key7": "4jB8JKJL9nJxHgNEmz1pMZ1YQqBA3P4i2kbhSPbpDhYK6TigNBdwGuqADyHwvw77knAcAWzJJFYpw6d3nb3eMTtN",
  "key8": "45Go4YyWSiZGvFgBSebUfZmqkDFFFs9oaiFrBPjqauoXg8h6T5iebQ9TuM3hvet6Nu7NCm8snaGHTH72aBhjfDht",
  "key9": "2rPvUEq6WaLbL65cxXHFrYXtU8iSeT2i9DQd5b7cjDY6Yxi7AZdngkQgguvqjVgT1XXXkgUtSMNNFn8J2Lw7pBfX",
  "key10": "4SHW1mZM3SyqQA2dM72WAjGbUB3ShwVLrT3ePSsM2AsXaw9QmJ4n3YvuNfeEEJzk1LjQAGh68vmWLCm47StxqnpS",
  "key11": "5i74At3XrayYtP6vguUJs3psdxRmQvRMBNPU7fqGGWV9dhigJ6xs9ady2QVtmD5xTQWfZXuDbxSFzAKShLpjZCG9",
  "key12": "2m8S89ytTiLChr6ic5YKzAy2cMNW8Qxis3tWm6yJWNqcmAXGxAbHcgvwKP9jWrCczYd6C6gxDtXZ121776u4JqCq",
  "key13": "Qgjjw6SYkCRB9c2g87W9bS4nyK17CFRGPGK3JUzjcL8DxWsKbM3Qa1tmYaZAjJhPWYAdWQvQFzvP7wGU5VLmT37",
  "key14": "4NMVZdY3cYcZ7cGMDXMdaf4j8wkqLuHuVeZMyETZW3iQ9yrfva5q7o4QxTT7jSRUbhAWAbgzgzBrer8VsKdV2kBW",
  "key15": "4CPQ4ztGexsJJZNs5Zf75b3KYHk8QAELffoDfmnBKQpYLKTGRJhMr73EJFicRjtacjGHQZFp9AHi6eeWW3fnAvLs",
  "key16": "v7EiG5Ej2Ne7sf7V7SJ4aN1qYqSMLpQSX317MvMBSpKLUoHxgkLSzJf4bGVr95MhHkSXEGpYiv7jZ5HWJo24orV",
  "key17": "5b8dcooYuyFQboxX7Fqdda1hqi2nR5CCZSLwamBrUfKzPD19Rx4jp2uf26gEbNKDzy2BaCzkjpRX7Wob4qcJjGPS",
  "key18": "4Yor8gs5unik7YynipFuwHbh1YCU4WNnA8FKYQRcRgEzmCBkyBQY5rBnFy1Q2fe4ngeLkgTMxAc1pA9vaE69MHb6",
  "key19": "5i5jm8e1woiFR1ZAaU8SevzgCYbSTyqQG4dwvqrJ3BFYeX2tANiAF7JWMCoG4iprcVTnTbZerj5YJ4GkxQDjNEG7",
  "key20": "54sxxh3MZ3HWm7WBCxaqFhBkmu4Fxoj4q4erhBdM6NShosUAAatKyLu7vNBF9yhtS2SeJ98e8dkzkFWiYmf6FXkH",
  "key21": "2ZkW5va5GguohDf7XWCnQYRhsc8HMzZCFD7wzpQDpeiKNhNmnjCHbgd9WWCZttZ54n8q8bp4N67ugVhmkZoknhAs",
  "key22": "5JnPmVtWS4Lw9EWENsq9knBLbLnwPY4FDyJmbTs7i2zVFZLro7W61iwDwq6U9d1tvXbw8ybaQ92Sz8CJrdL1n1L8",
  "key23": "HvVDmo6jLDjyEQP8TCLHHEPFmi74EV63pHa6evhCyjHqUyViDLnjLbMx4p41mFjN8YpHzpc6aiL5D8nTKvfXiwS",
  "key24": "5y5zNKQMqsMxZG4ToefSBEMdzfYiUYDD6Jc11cc4sHwayET7ZgPoJ5KW2XwZ5C6eU2xKZoAwj2xZ6gRpXmpiuM1s",
  "key25": "67pShryZpXJ7VofAv8oTiT8LbenZ8xEwBmMveAimG2ii5QhXvu5EpGFWgDPzgNmbbSdyXy5az78hENgtdywB4a6P",
  "key26": "4mrvMVYasJD2JK9CRgTZ4ZsU2Nni3oYFixGbK132aC5E8NTMreG3fpTsMbCsU7dap2bAnqn8bkEzULAKtpeWw9ZL",
  "key27": "oDSr4zMjkh5qSwEBgAXGRcQCY7tioJuEdadz4whuP5pFie9doSythYyX3epouJcUNuxwJDxPdovVbkjFWYbjcjU",
  "key28": "As13GVQNFafNpkJ4UfAa38t69EzuM5ERG8aoYAjuVqtY6EM1LzG9bZn1WzVsuBohwuojcePbUdXsSi47sump6Mq",
  "key29": "9uMNg7L7GZ21WcVcQvKpvt63sQCZHG247hWGf9QijqzJKEguPKcJ49EHAptS69JGnF2QtoyCTutdXkjuJGFmtQg",
  "key30": "2mAzC7UZDrLQEXaTQ1ipyDL9ziUTZevBsBQ7zZsasZc6gH5dAAgfdZWRXTQGuMYKf1w86AYqte2b1Gx8Nwjix5w2",
  "key31": "45AiwpJBpAyy1mMbHGoGG62N3J4nCRXWRBrt2h5LgkrkMzZzdC1mWNwC6Jyzg4w19yoMMJSzJjikQEnswucV4mKd",
  "key32": "wFSsxZ8e9KpEz1dvu5P4EygoUJsCriixkndYpaGYffcqLVYvHF87UdNxJWQLJasfpNLjBmBMponJa2bScn8Y8un",
  "key33": "5tDEy4D3gez1H6QXJdHCcMyhs9fadtGwpHEyEEFXWM4p4G2hWRYRX2jN8tfYNKdZM1pew2BHM4tADfPCnxufBpyr",
  "key34": "624Jn954GsvCdAeQJRUShP2e1SHH9217G8Gz8sffJ2rNfUsc23h3zqpeHuusrdrv1oEJTEs3y5yS5UXhw1eFyp7n",
  "key35": "5x72qfGdQtKfjE9BekjtyFJYAy7CBMqvfFcmuS5gK2rcQUTe7xNayiFzX57FkLe7UnJwfxWCbb89idh7X6HydxGu",
  "key36": "2JX5sgAuZBetbaf6Qzh6DKAqMokzFgHnYksz1kBimgSBb4DgS5rwn1ztzXFGcqf16wqCfHVQcfYtphJuDxBKfoXd",
  "key37": "46X9Rq1B1hATM4CRmZD2bf1EMXU98F8mgkRRpxNMwnVgFnFFigkNFXEtuRSUxkSrFjKzqAUs2q3bQemcdph7LY1v",
  "key38": "QSX2uzhLuE7oTRHSRKKT83F5dGxuduhB7XbiuaDCvbRfHuoYd7ZeNDuZM3nEnHTAqSXeHiSFrhRBJ7VUMznPi1Y",
  "key39": "242bzoQfeyHGRemcxA4a9bWdenjQSEcGsMbpi6eSRhPkeAVm4hDU2VxSzrDT2GyKQEsGqHXx2gn95bSBinz6Kr3h",
  "key40": "5m7WDiKHRTedHBYsdDakBTCwYYGJMFaV8F71ybRVWhKJGYxR9qnyGpeFuiP1pYzUAzfvU8mBi7WdeNAbThworHF7",
  "key41": "RAhdKGuekKDtkDFZwMKXXw2TeppAeDeQzBFBrckR5ZUt8TRyuFSqr4611tcyyw8Re2DR7b4ncVJLNvKQwtYR1hP",
  "key42": "27zUuYrZEobmXfCzuzdUCozcLS7Ckmy83zLxvdaxwFCVzs59dgJeMs6Rc2VtvXxb9oc2NpvSUgqS32U9ofzbV1sz",
  "key43": "5NTVz4SHVjmGch57GxX5mtNhUuX8DVK4j9mHxzg6Kyf5MWYikg7NGh83qkGFda8LN1DbMJdqcTx3SgPEwGB91DyA"
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
