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
    "bb9yNNwnBMynzRogEf6zQyd5XgGJFLxHQe9qwzrzHggMkVFfhQWNsjPqpfVTdMMJ3zhu3VZg44fUCLXSNKdKVJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Ra5dapp8pfZEXgahd5AaGQxJYipZ9vVjXJuqNAQFiss7GpvurBCjQqME3s9sYwpiXXgctXCZ5BeGgsNhSHW2Vf",
  "key1": "5cKxCtiYHYWJS9SXSH2MG1SzFsrB3FxFZE7uSWmiGoy82AsY8d58ir99dTbWzF6uFhcbv1g77HRiow66UKzLXSq7",
  "key2": "yuiEs8T3BctetxzVtB1mePcKb6YH3DthPSpVhEjFptmMWWvfBbNAaHzXYtoWcLpUkESmEDbV7moFnv2NUJcmkoN",
  "key3": "5ZY9k6Zt6aYrscuCdEBs5tFn1LWKs45JA5y6JQJhYj4oXqZmrEnnsrk7eVnK9jaDtNG8kDQpj7qJWZ3sKRyRKstD",
  "key4": "5947QBPESkws87i73ybvJqynGdwJoegDWwuernT9n5XWvZ1ug7X6NUUxcPdhRQKxXmiiKewAAX2Esi7jBCNZobPs",
  "key5": "qAEZh4L9Mkrx9JJnKxq2xciyii9yCiGQAy1BACuhTUQhSePKdtwujfSurqJw2Tr5zoXYzHZkKf4GTHEDTYF8F1S",
  "key6": "Knq7LyNXvFPftbfWTz6Mr1QAjjgzLUzTfoWfRqjXEnjYvMEJvzT7uKN2UfErsr9iv1L5bfiRJTVyuih2dPkzrPy",
  "key7": "5rN6iTt72KnEdKVjHQTtXnG9mNYDXUUEaurGcyjufvoitTWpNoDD5qaX8G6tNsLe5LZJz8sqTfWEpLGK4pP65Ej3",
  "key8": "4jkdniNeJ9eTc8sxGNbJyscZ1GtAu2DVZbZSTkgxyyuheGs65ruieZ1UJ1A1LCUUAZjviwxXt9RNmEvdXid7QUxq",
  "key9": "4LgcxAsG8WfagpTrkcsj4HNsjZeSyrRJt3hRpLwaYhEiSU3sJLRnNgGyKJm4jEA9bRVMZXAQ7KLszWoSeNtQ6C18",
  "key10": "5dxP1NFNCwNru5xgG8qQNZ9yF1wpGQGkHQD79NXLKYq5S7C84x3NkNH9ZKkHfjvXEPqwirFybQShRTPX2KpjPUDn",
  "key11": "51nKgpXNBz6Q5khsTJV65Ha8LG8HKUR6Q9BEFFNtuFj83jjEhmLBPpaiB3pUcKArDK7WpsGcvCSDmDwug8K9JSoQ",
  "key12": "4nzCC64XG4Sg9FnZmrU4CDNAPXXMNfWdKuTC2xtma71BiyPcxRf1CjF1zCFLbn53VrSzhfMNE7SBLME7e2oyHyeU",
  "key13": "3pzQaAxFo1JCWYifekuJcMtUDUYGbkZnN4Q2jUs5WTr1ZDPSzhZamnm4HJ6mNyk2k1U6mivty2ngRQk2KFQ8M1mU",
  "key14": "aWNnmuofJh7epztequzm6zv5uMd31Qpk6Ti2ExByhL1Kxsmgjawt8w8Ah8iVhaGfM6cqsXVVuXFVqhghVtvKy3B",
  "key15": "5wWf8FunZsAd5K7Jyz8FuwwRwpWLLqDPGnt8LSpEbHJYopkCoSGt3vxNp6jnwsXHv4pTQbWk5pD29Pas7YDCSSFu",
  "key16": "3s1V6qP7L96fhbRTQTDTYyNhAGYkhqiLpTYo8drP5tHFgfay9wHi6Qm7fibybCfBesxEeoH1Jv11KbbhyHzKefis",
  "key17": "242xeBdwMo5PErb7NpdpituciBbuLeXRUR7VAQk4SaSrmYoBTB81p4Y5s3T2cbqu3k62aasN9W7a16HfL9BHHb2Y",
  "key18": "3eQpyRF8eyxHTF6f9zErzY6cjcvUVovxCR3xDXZNtPNYaFBDEKMYfR67GMFDjgD2fy63JhJzx82uDqgnZd57PJ2a",
  "key19": "2cNqWPcZ3LBk18Ao1K8umcn1KD3uEzcAzoXt8S53RWSwqiVe16ru6xi6mFcjFY7Jhhm6XWxjjWdtgcU3YdsMJe1G",
  "key20": "5MMg9RA8Rv1bP5WZFNh7WmmQFQ8wfkb55Vv7rCfy8vGuTR1i97hy89CTso5wujD589nb1yPRnD3a8MuR2h1xKHxm",
  "key21": "4d3Y6JWrx63Cy21CuUSU9dFAUu61BcEZthJn2EDKC9VpknaedzYh1SBUZ9QGCVRNZwD7jASQ1d39WaMqZc5Y3wCs",
  "key22": "2HYRqpSS5S1xczYmSiKvtv439S2QVdPb4gV6vBHtA6tDo1t7CKYH3FDq2zxuiCkz4i3ge6UadiMhGLXe63UMEkB8",
  "key23": "2oSEYAFhiDRyizK4v7Di5q5WZVk4xSJ3zMBdGTDzcp5zvX5N5NkGcijTJZoNzerqBVRkjp7h8ogAi7WUdGMWEQzp",
  "key24": "2Q6LnADUFfetYjJVK7oRfFHbGS9g16KREL4JTmaq4LAgRCyAmeWkhfBFV4sBPqVXHuRCWbSDNL2ZDGcfF96KLa4C",
  "key25": "2d9UP4ynNyvji31DXizgPo9zJ6Pzxj3cSpdt8Qhsqd8oikA5u2Tg9qtU1ej6mAzZNtmNfHiGHMN9zcPKQgJYGsrZ",
  "key26": "2jLZqMNEQA1XULgmi6BF7abtxBKKt7gcDxmGWb893aDF7z4YrbLELcD1rCqG3K2ERyT5RUHQiviDRaKueJiLUwBM",
  "key27": "5g2VBMpGJ1athmcYw1EhBouEDT93CJAsHjqxKF2C7wzL6Y2unwyaPA6rG1pK9pgoNNPvQfXccrcuXru683uKZQ9s",
  "key28": "5jnMzcXmJZLiMbxu5UxhUUnqjEsX4k1wywQFLCB2UERXawvi2JiaXwBNowDUJ1StHy9NMxhzodVXAKE2f7vRi9Er",
  "key29": "2QBUJdeMrDXDS1BC4535UfNgshGyuGPS7fqjubZN874JGAPyahr3qoxWSEUERyGDP2kTtnvSxok4DWwVtRUxxXXZ",
  "key30": "4pMDza5RZYWa7tnujX894TAuFeLPS21hYvekK3Poi6Q3FkwsiFzk6AuovqWdBgyFpbcEKqboXvmLcj8cYvFmQPVU",
  "key31": "9cshgPXfBypFzT7TNL8RNybDdyHbQd1BBseutgxGXarXEPovGKzqum8xhSLY3yAaGU29wKQQS2EDhPXPbMytjsi",
  "key32": "2Hws8tXpU8Eh2pkSekqUUfqpbfEoDN9zn8vag6DZwWGpfM52qHLmibq3o9uJouCFcXt51q8DvtJ1FX1kb8eVKod9",
  "key33": "2ToG8NQpMd8ewmstD2vLwMfLDwnEXKe793dW1a2hFfUcaG7vjoVoGmH174ctUHbjfYdPAgEu7S3E6MaauGikBvyH",
  "key34": "5sZ8yRfNNvomk8zo2UfyXf8Dam6cSqFBV7KPY7WXXLKdofqEnb7UaZh4yuVd7js2SBfGQMv1hboFS1ciPtF5k63j",
  "key35": "4MLxnwy4u3Wf3EseNRkvy6U7E2XGqK76qERxzCGT1fwJrqgwr5qeRwWLdBuNFSGDK68j1khzbcKP8qtS7pZ8Ezq7",
  "key36": "31iFZuVQur3scPUdWukEP4KszmNyB6Gdgv1M6tFVLrWqS1KXJvUrAKNtR5MU55U4HJeAowqUNt9z4r1ZtwQVZZze",
  "key37": "2SWkURg1VxCQQzqeJ6LtaiCnhQdPTkZAP4DTUMSKmje3yhavbTuZ5v7a9e1wdqagseTjWqBpjKuderQwpSBtZTBR",
  "key38": "2cPBbD6KZAsghYwpNHZiAC1LGRFB1xw7LGZFyPodc99WYqQThZ327BpXeizKHqw1JXzQUHdpWk9xYLoENGZ3tiop",
  "key39": "54gM3MT1J9KHYSSAPuwCSLQSvtm1xBVArwwgSJXdySoWjQURps68QJXVVBvnAzwNdmuPQcpYnmDzFRjBnSyWCwv",
  "key40": "2rXWKTavLE5yhTzAh6kbetZBYykD98eg7u1j7CBjrsx5duecthKvPJGNaUj9LGnPcEVzhx9bmSx2zco7Fa4THCjs",
  "key41": "QGmaJbgaw4xzEQwXoGhYjnLXF3LEQTv4QLEsfLSsF1iKvS5f2EJmN6L4BbWAiuLNmBuZbfkSGjMDKiqEGYQ6UV7",
  "key42": "3kZJvGRpb4CanGKDz4HiFkjo7MFiiF1GfKjtnASCrWpwvRmXKK8bCzFQLVRWpo7q4pcg4skiqoSi7xVdJWDDHXsY",
  "key43": "31KfbDfKAFw5V8RnJgwMPUSzH7i7WdR3URKuEgrUiG7fSy36AQg7oyuKnr4Wx3KXB9FnqrMfQ4Nybp5NDT1gqwxN",
  "key44": "4ksuk44DeN7YX2fWWwAviYTYgsuNUJX7Y67gkXDwNAtGkkoDgR7FaHuYpvCazwD9ZrTzDH85NsHaHdAexGzfGh7v",
  "key45": "23mwfPbyDqhdrBVXSp7XQ5pK5rLw4smpYbJjApRkhPpVvXKQWoQxXs6dDkZDFkVT51bQz1Fty3FejUeTnQdfdk2L",
  "key46": "44W5Zsr33KBF1jS4iCSpZUodnK6KPwfHYmQD8VMR9FEyn3FVy4taTfwofWPU4JPwDmCjvnQhDi5LzPQ2Zcs7ax8H",
  "key47": "2abvNTWUoJazkmd65dsfzgT39rrEB1H7btwdfB6S27LY7VC1z785CVGgrZVpKvZpitJqPBMQcUi7D77qaGzeZDM1",
  "key48": "45BPSmPV1zhwrhXX16vFkUEtDBL5LDt7GubR6pkcE8iq1rqKAMmuvTTbPK8EJHJu6FfeFPqStPqxngRYKUV8HqDt"
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
