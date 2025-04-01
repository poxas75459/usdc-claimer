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
    "2MNHV7JvL33Q6HAJ5n86BwkLbnfp6ssiHnQv9VCgFfCppMYdZEjapKxy9xsdwkfzBRgUwJ41ifqqVnwvfsqyhV82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eqP6SHwLDJHZMqhbWpMiJnJpqvB2wWgwtLEUUWQVVE2E4bitCogtVYxr1ZGAPnKoEXRxVQpDrH4KNtdkd9qr2qr",
  "key1": "39W12ma8XHnWurVKyBLzzbMFQqLVGBeXHoABADyRrkRkQopQSHRrsCXvCDRMTLPSUPxJgYi4UeANTshL1SRKoGM1",
  "key2": "2xTdTxMZrZtKGh3BtZRXdjhb2kdhCQPgcQ7qxbQKTB6hBuvNmpKJbV2YpRteCaU2rWxf8aWG1XspMNRYeiG8zyvQ",
  "key3": "4GXbKhy9J6kUeSyrPqShEBCDwo1J9iWqq2mVkZXNMdEAaYr6HdhctD7UvV7xKBCUvvFFFaCqucPUEqZY9i57SADg",
  "key4": "ezXi4cHRNqiGbPh37xVmQnHCgF5jYr8sXVG4eckBvbpxLYF4rudvzFQEtPwj3gwJQ267c3trXKdW8U7FUPRhEAY",
  "key5": "3JdnjFNKrAw4AHowuRNkUvzH29f8X8bzcHXwgmucyfReu6reyevwDBFnhF7qgKWuVgqpBts3WhGFgjhR1QQHnfjL",
  "key6": "5H5GhNaJFhJvz7scvff3G9ewpbCya3vN95NZoyE7rSxtUmFnD9nrwdfdHr4ugiUcXhtwYEj86uVTHTUMLnf5WYCZ",
  "key7": "4H62HGVMTDMSVUtisFv4FTtKLcfWRe1NBEt6HX8Ahk96zqkD1hDDaGANxTtkUMxnifYBWXi9CBfHqSAo1CJx1DJP",
  "key8": "i5tGmX1nZ24mDKDzASbTRUPV1b6KZhrbQnErK4pB8G4rCDGRRY14vZeQxV8EGg1MQPecgGn6zH2KGPUatVD9BjQ",
  "key9": "2QVzecb6UUad6nTFaWY9YSDTCwM12PVzSfc2itCEnde3Z8EMUeEo35v9siosv4bRBQiADK5h6mqx4kgMWoAh9Y8s",
  "key10": "2ZHXkejXkY7QWwGzfQvQfsaL3Ax2V6Vm8r36xkZ1Zg1aeUe7j7BgVPy6pK8S39rdZUR6DESgHveuSwMqHDfV9qdY",
  "key11": "31j1PAGN67kbsQnDYEGQJ4iP39S3FEzSEHtrvqMFMjjLLjdEF9iWQ5Rf6n8Km32UVjNs5tRVWKeBorE1bjSHQPcd",
  "key12": "5yCCYY4pNjW8jbMitX9RJAQKYTZo3z1XNx7vX2wkUEEJfBdq3cAmEYfvxQ9NsyAJrq9uQhyYPUWiwbg9BRi1k8np",
  "key13": "417YrHDXMiAkKMFBuNHhroPJaqSVMY1AQwVq1guVcmgJ3q4xiKuPjpyLNwZvdWR7Gy3LmXyA6BTo7AkeGZc6GCnW",
  "key14": "5Rmkn2gp3vxNV32azaVAbUFnWFSjQLRzhmnxy8ZAbbqJ5S5qzeuysMnLTYHbQ4xLfHMiSAgMR51QwhsynZvkbc4M",
  "key15": "3mojMxgrDWQ9RxuitpWs1jeC5cNmJEjb8XvpJBLrVdU2TGV2gHQ5Pqfwidt2LXvV25Smh9ssotnt54N7ZbNDseGx",
  "key16": "4osYqcpWzQ1FocUByDZZUu1B5woAjeNve8XC2ZgD5AE9RZoMBdu4QcMkv6S2qVyDmWMpTkLvJ4wA6TiQkkxJEfNa",
  "key17": "5xoszrPY88uW7kKcNtztm4XM8UtSSr4amYPDQorot5hSTaCmvHP4oUdAj94s4hAdmfRMjdtTNdCC6aUbN6Y92v9d",
  "key18": "5KBy2dTNfYb7SkXfRA2x9qrb5d2gRo3UUayTjmG6XZVB5geeHeLTDUjvcV2LnjTXrvpyXL1LV1Qnca8YSoEqCocg",
  "key19": "2i6PDKhmanP43aw2jvqLJfDRMC8zbPrCYLoVv4Zm8rZtd9xHeuahizWrVJLcUdY5WEx2NcbMQrxmeYLAy7MYq6N7",
  "key20": "3ZuiyRF9cYBiPu3dSN9ktHekSaHvtLLR9ZJUNEUaPsc47fbesGjuJ7GbfP4yug3jW1yptrGQi7Qo5sMe9yAepN1a",
  "key21": "TSAARWhWN1DJkkFGp6pvRr244WCuyqpp6LUa6uurjmg6BmDvfy954LbhTchiJ1cQH7GUGLqhMkcvR3s2javwiuf",
  "key22": "4YLSmnqTqawQXfc5CBXY6pdqUmLWg3Zdooc734zES8k7h9uDDUYowS9eG5KqSWdm2kWf4vjZY48tsbvgWLnyHBwX",
  "key23": "5yv4YJq3QHzUY6fAWa9aWDTYXXZ6VbNMn9pf9VcC3pAPhP2xLFKGKNJTz4kGLLugdLRuBm36KDTjC4S4KtRmpkrs",
  "key24": "FgScN4HVkozjXnhntPvm5JpLhRpf6iKhV5fTXFz6BNrNVJKzWguNNtEu9ZS7Xx4b6BVD8qx82nXeMc3XePWctWL",
  "key25": "5BykCicXaCddtRPbpF9LSziqgxyYNgfK61CnnHLZUN1yKYpcgEatFxZ1meyoBVSEDMuVXeJB6K4fforvbi8Ev9dt",
  "key26": "4uDbcTL48greSA4dUyrcfL5NPta1KfSmPYotmJakuBftXozov7z2cipjDJ6isV4iSi6sG22BcMJgYrcRKmo1w9vF",
  "key27": "5rv8ehFtKsFBgGiXhfqgdPgmU7aiS6BBtZjv6xf8bqftYU9VSXGJSi43UqmfzJXsnVrmpuWWfFiRch9LbBAbX3yc",
  "key28": "4Bgom8kJYcFq5nKVahhqMgTpheYwKxhwRSsX447wXsURuiVUNLpJLNCgexwm9uXKvb3sqgztmCBMj945KTGptmWu",
  "key29": "xXdDBAaJ9xwhed5Umd5wLxZiJRPoQAquUL9PXukhuUapi6a79nfmU3CnGfLageki8s9Jrg1H9qr2i9WxcTpmW5H",
  "key30": "2N25bzwhLKuRjEPeUCFkR6AUaza1Lzt8oGfEMqsj5VTEMuN9pRQNjpqE7dU8aQF11cjUUdKT6JFyoAPdS1Xang1U",
  "key31": "2LpKNrZERfQNUHfkvTLHfrtmjPHcejEEKJL3nathrxFEsjjzD4RNry4peA1qcL6oEvjVhCMjJJj8RvVhg91QLfzP",
  "key32": "563XPU2oxq7D4nHXLqcH2QJHRftm2SLkYwvZFxD6Ak4zfE1owVJu55BxMQDx21tbe2LkTSnpnuYd8VqrSmAGaQRL",
  "key33": "8HBPpmuMvhBF7UyoJJxsNepcST9PGpdZmxsVVFiN7CvByrtZh7HrqgKyz7ViXmkoMBza9Dh5p86bgANXbrjxVAx",
  "key34": "41c2ufLmYph6W7co8dX1YuE8RXhP68TKw4eKQthggxQkfY4wnMmSMAQzuiZ9NAaXVPMcv3c2Y8AcQzDJcdRugrNn",
  "key35": "4n7nkLaj1fvycFKGCWJHydqskcbctRysmGr8qXFqK7P9UpCkbYjMZQWDuaChtMmCXiCoktZnriMFp6465Q8YLTJr",
  "key36": "4S95WC2ARMmcSkTBGGJhu59RfdET89GtHLub4AjrhzpYyALAjfDxWKC9RoVtNn24LqsDA5udLNxCAQi9T1sG3vCt",
  "key37": "24sJPcS26pZonQnmVHHcNQ1TFxXtJHwJ5omd68Nj4Qb28LxuTYdVM1KW1ZR5qEgYb5fPtfcgiYFpzCS1CVgk61RZ",
  "key38": "5jeCR3t6DtLdmoFQ3RX9hQc3T9Wt5Y5qD2S3rknVyuT4DRBZiMxX4rddST3unt5ju9MnSr67iEXy8dfvZdpeUgeF",
  "key39": "47xgoVEo2xa57Lh6sZUidkjH2YatqgWZoHeCnDNP7s7ZqQUDeWLMcpXhYCa2A4htzSQYhWL1inRNzf3eQ5dyH5rM",
  "key40": "39T1LDKUKCqe3B2cfpz8AZhSv6pbnvv25mckMVsmRN8Bp1g4Lw9gbDJkQCrJfTSzvUC8kHysENBZVCzumm4v7XB2",
  "key41": "4GHz1LF6PyoCzEYCDHemtWg1X198GhXTR464z77nWv3fD4sqASXa8wsPPWKiD9FxFwnULPFfR7kxv41VcGQK9JXA",
  "key42": "5D3vVfNtsRLv7mHyTV6Xyd8z9ypVWhmQQfG69SsbnFUKMeVDKe1ZCoG6sSqdoArAmdayB64HYjdKw7vvBc6GJwSG",
  "key43": "MDPtzzPRMkP3amZk18Kn27ojyTNwAMGibeBozLyxTag4JNZvX3L8eQ8AK5YvDp28a4tY2Xyz5chzBDhidB1MNYq",
  "key44": "4AffACyyttTShB4rw7KyHev1x1nWp5B5AXJSUVfnRoE7GmRNUncy3y68pEVdWMyQuq79ZtNeCmz1Xnh571TJFPtx"
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
