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
    "5vQ3PZDRj4YzDzZxjF2Bbb6evX2HP2m9sL7DhxBJE2hz5U3n7WmVdzrGC4hbRRntUMZC3CKiYgsi9hZkHb9aCcev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GAto7zygmdVHpBvzkhDPL5UVPiGh3ZkCc17oZ6RW82Q33uc7wFYZp57Adx3ZpBWVihXFwrzK5JzxpAqRrdr4ozk",
  "key1": "3wyXsRr5dnvbWhBzqy4HLJ4Y828Dy7wiKM2mj988cLmmDqyJr9Ss3XWLQY8ew4kpwXqMdGFbtn5t7zvz5RjYbxYR",
  "key2": "5TMcmjPzJLRkA1g7yKdho3VV7ngsjeg4WysgMUB6bKyM9x4PF8KGKmjEPA3axo13GqVCwL6VjVEociJJf2WnoPAk",
  "key3": "4SQSMi8ZVWFiafth2RtWpujPUHroHU84HA96qbDTnWn43pQwYk5ACqLuNKGmqT1wRSpXN5LzHDBDwKkEDZWqCBAy",
  "key4": "4Fz25g63fzFT7ScfYwrnX5ZvpS8kEFFQRZYryRN1AZTbErp3k4PEufttW3V5U11jqnVQyz5VwCbpUMPTHtGXLtEi",
  "key5": "3nZDFYpEp3bhFSFTuwKAj4Mk5395yTm9LVhRbbUjR7jaoKfuayZXpzKAndhCpz6GnMQ2UGTTgNGT3Txbs8EMdKW",
  "key6": "2YNYNXdXvp6rnC9imjZdJvoU7FhNQ4rsnfdLaXAmJVQ9Bm2gPCPVNU7SXaiHD5uH3RV7q7FuwHbGeyRcThkUEdUT",
  "key7": "5cyiUB9J7KqXMEtH1xnjmUUd5SytxGRhqvrEPdvDxqNuF2fnfxQ6hQjdgifhCYjZDPmBdJjxGD48ms1RyLSXbLNm",
  "key8": "2gJGm8vy4cYE79VfmxJxQ2bFoMXnDd8BLDjXdzi3MjgGudHT6obkJgERUqHobDyeotrt1KEAziGWzyPMf1tEwee2",
  "key9": "rjcmms57NywnASxmiPDnaG1pEd3AKPWAqEK9YbAjrjCz8BqpKD2F72pJKxxR72AxB4zjBE1Z1JJR1kCoD3nQo2S",
  "key10": "2miDKBuuQ7FS3mdTHFKo4VW8xrKXU1oEkrLPPoERUecntdZLMMx7NCjrn9amvjm7EqRAbm1rCxBTRCeCiDV3kgFs",
  "key11": "K1vaSaRP6mGjvArkJYXFmthyJMm6qCEZFRUhiv9pYuFUG3jp55so1u6G86JBNX7Cwab1Xx9CGtX2VyjWrRGgoA1",
  "key12": "42ZdcygpYo86U4hHgk5Ht8D68Kum9X5WncFNbh6P8Qo7zbAyUGDt1JrPECA6Nhw18Y5WAxPMpepp3NZBrEzUoTJo",
  "key13": "BBSNoRXG6WE7fDSg7zuBVSQ5nRJrrr1dWeDobcJk1QhtKecXiz52vFXN3wi4scYxMc3yrig2CvKRQqw63WJG1NV",
  "key14": "3bNBFq9q8jjuhmy7j5Ep4YkKFDaWk29HFEMkLToGro6dbzaPxKL3UqeCZLH7xGbzEATWm18mnqS7E28ZY6Ziweuq",
  "key15": "2UB8LD7cQYNVw8P4bj7CtKNJF3RWxHfepp8PUKT7LH8VM2ZBriQh6UcvyowcHXsZaHSFMoDYf2rpEFCz4ULSnr1y",
  "key16": "3xnd1jpV9uDSDeHPigjTdVrTpL7h5xdXfomrCki1DdMKCVbpVVaoQiGPoj1PDzzEK5V5pDRRkrGJcL5pyCN5xwYu",
  "key17": "3FU6Nps8omttaakpEeQMoJx5tcMxPY7dQNX4qrJE2YBNiD12ZwQQjX5e8S46Wz4U4DHy2jPZcYVkFjGCQxZL1k8E",
  "key18": "G35dwUyF3p1xzeFm3nhhGG6TJd1SceFbtajL1qosViwfWZ5ciQd3tMRKxeJeskCG8YZALL9zJ5sJryn2qujocC2",
  "key19": "2gzyQWnaPZSMvdbmYbeoBGPP83x9ZRNe5EgnXjizPDNDo2m2npevreoJ8HkLGoQoYQZz2qqDhq5iSGKcmT8gQEZ9",
  "key20": "5mxbynxNFCBpwaEM59opxnMqK6KbPFNLjfBPXJkVrLbdASZrwVWCfT8WnXdUXKSCRfbsU7LFeYNGMS2rGAq6C7ZV",
  "key21": "66V9nNoVY4LiQMsmYheZ11YxircG56LnMhP5kQXm5XQWQ2VKvLG1S4tKPemKagoeHs2irKUCKniacbu5BuJ1Fbkz",
  "key22": "3Rh8gBPFoVqURUwKs3Ls9z6HqgQFJH8NYnvxMSo3oj3E1AVfHGzsVQYnmVhnc6sBDSsyyVpjyY29U26qMi9n6Bhk",
  "key23": "puTbukGRr4zR3tt1vbhwcCcFcFR2toybuFHYXgfLCAcDgMiYwXXHDLtuuLWxQbBaDGRYRSLLS4dQr93AxJxb3xt",
  "key24": "5Zd9rAFtdswApBYnHYAc23y4UfNkNsy2UrtGU4tuo9cYERxKsU9DsadX4E3H1ve85m45hMK82ki83swvRFQqyEf8",
  "key25": "3fbBVr4D8GLmZbmksx6BCCFvwjoV2xE3Dem5T2nqQA3urnkMob5tYQBv89EQpbwQ4R8NkGoVcufjMX6shb6dYSq3",
  "key26": "4co8LNWMzatzojxoA64xn5mZcJpmMmUwoaZok7JRfTefqKWqHFDeXN7jNMEuBbd3Aveba4Qit4Di7CeiRqjqEWno",
  "key27": "2zWnQTaiawA1LjgqQ3fMNjJFN9vs1LwtUipYRXYVmtzwRXkWhJ15UQ8EBAbFqQv2vmvUVhCeQfK3tUUMG5vyevip",
  "key28": "buY5B3NFvS1E8s7mCFwZMnEZPZ9xY3QxLgpvuHE7Eqt3QbdFSpQEcGa1HHBqZTEPvUJxbuWMtPCSvQHmppfChVB",
  "key29": "4Q5f6XLFoMAhWR6QA2o4tSNLgW1RuV1Q7K9qVB7zajmbF1effVk1JXaRb98dav7KBwEofbjTABdrZgKhP2DqufVM",
  "key30": "5HARHmpNf6DD2bTy2miX4bkAjT3NdF9PD88Zm5VS7rmErYhEk9MFkXaXK4NRJLM1fTGQRi3EvtH1eqsD7MF12V89",
  "key31": "4ymXJ55WGxLTETzW96UPLx4yBKgR3wmaSvYDeiYXpoEVKXbftPnUsP14qyPWLcU4AFMigSXv7bpGBoYfpR1qCn7h",
  "key32": "3RrFSAbGcEprMZrPCCoE2fgznbR7ooPaD8rBWLBfvGtisr7CRyk3qPpy1eNQp3ehU9bAt2JsSnkFjbfoEMwCuN71",
  "key33": "4YKnQhw5ZeRBFB6PZbSAAbv6hysAbfqsaxpaRbNexBMn2WpTV5muQJBRnhBxUexrqz2qLuYFq3gmSaWp5RqxjN3S",
  "key34": "34awqj7ZftnjnKrcn544wvhVdEkSD8hbbMqtFpzYYgenBfYxevJjUSB6y17rJvUgEQgrTi5zFc2kCdUKhGMykQHP",
  "key35": "37NJURUQ79XDDHUrQ6mfD6tkR8GBx7Vd5tfyZUBCYfTtvx73DT1WnihGQhUsEVqE7zhAHms7waVCKWkRKmmXuPRA",
  "key36": "57RowgjZiSKDc1eabwj6C5sLFuv7PMt2XLQTiwL6sVUC93LHMNqdk1REQu1GLN295eJtxL83dTXzq8qc3L865YBT",
  "key37": "2jfETRs55kXd5rsgDziXktgTeVft5cPwtE7ek3EvJTmuigkcBZfNcN54mMcn4FjPxnwrCi2JMwBeBF3kRpDVv9ct",
  "key38": "3ESmfGq9QpVDfn3eNNNY6KqmeXjN6LVASDqVRUKtzZrjc5CHzqMxDmC6TRkFku2252w1CRcPacQSWq6vqaCakJo5",
  "key39": "5ek6v1nZz7dXxKyFCoo1UAAwK9bYGqhSACv9mKAcAqDLtXhoRA5HJrhbUGVLZiVPLMc6BKnB9b7CXdnsL1k6gvJP",
  "key40": "5SuK6TcDnj7cVnHS61m2wTitoSwNxyFPhVQjba3EZYvhdpCEwxXrzkchCnYqNig99JqC1dcF1s4ZtLNGgiFrbs2a",
  "key41": "5dnKqnow83GyUcXa2NdeFM2gNaopQukPU8VMiqnYtTaNUk3dMqJGLJtg37bf9A1WFPQgSqu2iYCSx4f81tQPt4sz",
  "key42": "4dqx1tSewELBK2ANNVykg7heSanEwFtGhxKx19YHkDfydoTQH1nMGEsm4AWhpERPxJ1Bf8AL4STTMhH3grce1ggX",
  "key43": "TzWqWwEebo9KPaY1hAmKDzNcRyB7UDkJa47FVT9Y1PGWbmAtGg9qsukpkTsBUmN3fPrK8zhDA7usv52crM7vsGL"
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
