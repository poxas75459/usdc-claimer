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
    "hUBJYpRHdibxZFND5SNuKQgGYDCGbpjey7pYNi1wrZ76yUaB81nkqCetgKamYNLUjpBG59EC24VN7yD3TLLziiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n32L3f8axgtfkidKALxzuJxYnYq376gJbmtWSwba1BZMSkDrinw2pcemFcL6PdYswXwBVLEp1rnDP51FsdHsjXT",
  "key1": "3y8X1XsJ4HujQVHSM66EeRuAEG9QrR9P1KQti1Wsu2Tr6QSP9Yd5eA3bnWGoTzPsCioiPpN1YPPwJzLDmUve3kJK",
  "key2": "2KehSRaTbtYCizTUWzPcZVdySZBdDHFmMCTox9g5t7jwnGQKSXEoDGrjyuvMqrKwDPvoRRTKPy4kmmG2kcH6fexy",
  "key3": "UnTdP3XdbpzbwepmrBb4vZrw7YeNKFBvWHc4FNcBvKjkBUeP8uWNPSWizMkpRSVV86ECfXCsGHNetX74NzxpZj1",
  "key4": "ib5h4SMg5xkHAdGeY657MgaanPjBBJnTKcWEjU2GKUeQDecqQPeAiV1njBefL7u7wQ5U5GQ1eVAMnTVDZAo8nMG",
  "key5": "2Hx8JwbawSXdtQtxVDf1VK1RAGAshjZQmE2NAGJC1J9Edji9fvhEVTpncv1o6JViXjKHTmd4PLmZY3AM4jur3B1J",
  "key6": "jpo5s13kywsg1Z646zWwpachEqe5CJFKsdp8mm2dnHDrcH4JWgM1q5sURYSGPYAydv9JJKHP3LKTZCsKXtLjsb3",
  "key7": "2NVwYjZiW2CUhHaxLy8rPZpKNu4tsX7iuRBaVmcmDmUny5pC2jV23NiQWG41gCzwTtV6ESSe9qQToHGL6ogTf4Rm",
  "key8": "3RfQTAsUiQPyJDigFKxsj8VQJ1tCf5iWb2YDNyrxLcEcZGgYG4ECHg5cqKF53nJhMVJZfSDvRhC8i8cHnZPTUPew",
  "key9": "ZD5NntfWvdmwowK8Xym1nq8RbVgyEdyro8JuicUuD2FAsffLu9ANJD6NvWWebP9rDqpQAXsJ4CuVAvk2RKEEG2n",
  "key10": "5qqxgK4UjQaezotJry6PK2vCYjVz94KfT7i1afHpVBrhAW3bq49RDnnj6C4uTQfKdeAAXp4f7k8uRejDJarg4MsP",
  "key11": "4bQfVRsRibjkjkVM2FSvJ126Rqd3iav7GfA6nAznGn8Yk2VGvPbFuj4vRNd4Xu2pSzyuzvZfoidExnqduHMgU3Qi",
  "key12": "2zgFCTw5xLZgMEr7x1pmpNUJ93a286PYfncLBjvXLXjSw46NbgRfoEmuaDPeCkREGUq2MtXVxjhUriGT3fpR3FjA",
  "key13": "52bisybW5Msy5kSVHuWJDtgRS1EQKFr2WE3CXdntUM69huxdj8sxS5bnFhTSPPgtwqJTSom1ppqvm3zYNDqm7F11",
  "key14": "2V3V3r68tiBVf23A6qeL5uwTAqRahPEaycSgmr8LTWp4Cf3WkXdZDefhtJo2PycrdVcpUNu914vx7UGv1kyMWC7J",
  "key15": "2XbDiTP81mPfLdvXWd5UpZrJtTbWYrgszFHur5VJhWmAZKLrZmjRSLAU5SewgBRrBogmm8ZErvyrhxKJcKmdsfDo",
  "key16": "4Ztpc8gdZufd2bbDJArDDBm4VRy83WJuGw7eys9weUi6DRoNio9MtmR28XytKdYzd1TTqddc7CQWK9QbkEFCf5wn",
  "key17": "XjxMbr8HB66ZBrxiVFsMUUzyV1q6nVtwVkeHh3zimUXt7YXLmGCqSy2YjhDnEptWLV4YsUSDGQUSzpkPmffStjZ",
  "key18": "55MBQjsLqpWJaggc7dVnH3LYwsSNBc626aeTfPH8LvAdQbidBa1XHERbzboPUcXenQ5iHVedQ37yxdg7nASQ1dsF",
  "key19": "58L32pp7FKk6jv1qiQ4zTwSH1f3h2fFpXqAUWLGzjCUQ8CFTeSoGAnjcEAkTckUDdovYoTmQn3MVqpEzu8MvqFRX",
  "key20": "2hioFz38xwr8PTjpnNe4gPGTN7W2pmDrs7rCS3qndFrBSxLjTdYUpPSzXps9JikM5EUS1bJQ6pFp1QjFymqfDJqs",
  "key21": "7SixEGxw9aaHdM91Pr1hbBT5nn3PFM6uHdgSpqNKZRWqLtrRb1Gf64MUxDvo7kfew46SBmpjjGAUAyCZtBYSLht",
  "key22": "2xqauQCs1ZWUme3kvMXSXCSbojS9XtXYHGaKJrKQXcf4NDTk9xpiRynVPiWvymA5DpnCRnvKtFPirRic5ZVp6rG7",
  "key23": "uJfBiV21d6ygy27XnEagArFJohrg9ej514YQCi2DueedygQpAu4hguHFUwotzai7QvQm8yiZVf22Pn7QeKjD4Mx",
  "key24": "4Y9ziYg9xePEypDxUxj31jFniAaCnWLCiRzEymA4XYAoMFEFLizCZxDWqy9xryfBnsycZMgefR5jsh8VhYdekpzm",
  "key25": "433fLMqzWL2csoLpXgXMfJDQo4E2PdDrsWJ2dBA7FAJEHVLsyCBsFSumFJLNMT9qeQXi8JdwKD7fYp984uH3RUoS",
  "key26": "5PYoWsbGD9UW1kUgv4Sp9U5vC6tucQJdNnyKZB4FFCNnDawdjsdyTpwa7YZDRjwqTLRicNvwjUEXeehoC8Gocb1d",
  "key27": "U26ha5odknisbvX6HYjc85PcMHuTRu756SEGLmVUkcrcTQFcavH9YobK55o4n93xaG8tu9VA3yUmTLbtRtWxzcC",
  "key28": "3JzJN9YDkTGF4uDf8JpW1XZxg2GfjS5u1SEiTnrfh3Vd98WF9GYzhVFeprdhC5NhmKYzYP1z2CkoUm6caWegwv5Z",
  "key29": "5uyQiwzhAAqdG9HvMnDLpc8iD18hdpqsHNkrWADReteeFi6uaUiM33b9MBhTkhijTvMuNkNxFsHLeBy5hqPXqieN",
  "key30": "48qkocBs3mBSx8YXrPn7SYzZU2k5GAyn9yXHUUok3SjHX2YP6vZrZmANM3JqH1zXwuDhz6z4CGHJwDk7DQPeGQmW",
  "key31": "54XfHPFPq3auTiQBGVLZq1qWpYT69Ba3Hpwej4ae6Gw61cA8ZViH3ysWnsunaPfm1hLKcoESgkpaY2yX4aVgySWz",
  "key32": "4UP93SAw4UMLwhrXj32q6CcnyJHbPrAKXFoSAFhox1bvRnHvncnnFoHd3umHeXAcEStDvTheXvwqQzwtS88uRQss",
  "key33": "LD9MdMzviYSjKCqiRkJ5jYpHgGZXd9KN2eBsVTQYu5WTRLJt9WXYo9LpttxidfgnjsjX5sZXrMrkAvQgq6NLZE3",
  "key34": "2xPe4pLAjPToihvqZDsocebYYQ5zPKjUtXAC578Vt9Wk2KJgk5uKm34xHMimpG9okc9gAaK9bgCWqcnmeRU1QU5A"
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
