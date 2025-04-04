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
    "2e1JW1gZhTrkaGgwBW8AH7TrCP8gfMBh3WFMMTBzKsV4nEV8eRjYpycEDb3962d1iTadbeTwohNB8jva7GT4tYxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k9uXzWZPac1HhADnBQTgoadN1KjarfZ7NRxzGixeiNn5wK8xfPLVpHLL9AzGZSEQaWrk5jCTKa5MiD33tY5VAcQ",
  "key1": "KeiHd7gwqRXQTS564wqCB6nhgML8kLFPEMWuC6zQerBTum6KzCbwsJvYM1tpbwGmbAMkUmZuGiTSbWXjZuexViz",
  "key2": "4wb15jPkhR8sBj7jkHrzDj1C4J76Z4Y2BburERLgNYaJPtJE9ritYL8uzzaTDNPeSCvGiiJk8oUz6hxVx5aPWQcU",
  "key3": "5AuJVLWdEbgoxWKJSBVMKgvqWSBmVRJiKLX5JYbm4n4NZAPFhNhrmXNLReYHZfK6qTSNqBTtNodyUG88LPSQHEFA",
  "key4": "3AcvPS6CbQbGBC2LbzLsPYWRUd5YwnakHjxiBduWsRwUTspj4sfkmH3AZKvvBf6XAAjJWqiNVDi1pgSfg156f5ov",
  "key5": "3r8Tesosc8GSjk7KCDA31A7jxmLESAHv4vs45krc8nZKp9vRC6cf7zv6Do41aXJK2x1budgvZc72oud4oLtk2m2f",
  "key6": "2XUNAJ8CwvF9u35ibWJgwjbggCfaMw93gVTJ8ywBKCyoyLFxDvTEDtAmFE8y6oMRwm1RneU1MqtZibSodXjCrPE1",
  "key7": "4Vo8hHLx7hHFSMCDiRAcE73Pibdg76VPsxzWhXMsydTBtdvBrkcLSzXtwQQBLdTmwoqYX8TGPZTgvKAEaYd6BP2N",
  "key8": "4Y3k1bH2u71om1kiWZDcopV9LJoBpY1ZNetnfCcaThawFrv5LKQJsmN4vpuaAub2cPPwr6RHsTZ148Do2kpRSYQn",
  "key9": "2kTWJ3VP1q5ahHNvpqtpo1pwmwzoTJAZpba2cX5ncewPfUXrP2e1MWkWTTiig8J1cyQNAW29YbkgwT96QivpE2Sb",
  "key10": "261YCfDkZpzG21HvkR8fVb8K6y1q3gG1Mj2i3FuX7MwjtSgnJwbPh56JeYHkWWquSSauiUcbJZeD7DFJDeV2s3SP",
  "key11": "2BTGp11uVF2QMkFX94wGt1CUVQemEmYn4H6wzUb2x6uQp7tMvNAcFezCqBpYiohZvx5CnAaSjYxDrpegCn7fRcfT",
  "key12": "4MKNVaisdNVwyE3UGGXwCdYesfFgnWjM5mKpDS7TYvD8ihwsYPy8Dj6efBcddB9JAPsxqf7f3YDgGr4cx326n99L",
  "key13": "4g1x3Ra9oDJsN8kVbrDM7CdGqUtYyEAbB3wW8dAwMPJAbYhGZhtjvHWacoiP7bBAmrA1E446jSFf9GY3kyYhyUn2",
  "key14": "qRqCJgNzQy6xtbFiU5VLkG9KrynRNkE4EYKF523GXvbfJ9DhmQ2KDKmWisRXdNXtmMuiDT7Z86BTwe4BG7wQixY",
  "key15": "52GyhgNGy7g4D5ZaGV2zwF912oCr4u13EGe2YQSVRhrNNGDfrVAm4MYuHszGijMmGSif6xHrSYhMsWFu2p1D8mWH",
  "key16": "27VH6SmPNxqDchM6UdiaFXYDFaR7asjfNiwyYUNFNonEG88sYZPNbqwsRZKfKaQxPwa7YLQ84zd1ygS2tvLV3dDv",
  "key17": "31Tugz5nQmbKFXmoZfKqnXj7BEcpFXWLytzZ6yVwpyjTS1NL5FJWsKYSWWMchgSSqJnnZYXjAAByph8MyAu6Mxpd",
  "key18": "3DGGqK83EfmfuxMjJqLLgLzS3mrUtnDTa35ieRRY14NGJuHP1S57JsDvWyiho4m2AtNjddxzZzLuPyoYmYyArD6b",
  "key19": "a39hrpoMwPTqsKSxyU271VjXhXk59yGV9c7touTmhqJtsZFDNh1pv6njxiARhama783ghmG8E5poetYgeUGTGfe",
  "key20": "5PjXLWiJVcLxz2bTnWw2WBc8xDuyK7QfvVvBfsXyuUkCMnYQ5AswuNm4wn4mupDpTJV5g6dwHy7vUhxS1k6Za82t",
  "key21": "3wtRffagumFTaajAxKMFaBPieFPZrXVD26UX9QZ8rNdzA9UheYMextkw7JxwzfwX6t7BMdp4CuLVcYp3LfZroPEo",
  "key22": "3eXJ5MpNdLdiVk2Dpt5QBAPV3ZKDpgjb7BT11aVRETiJmPpNMDo24gdQDUTvahKVrERnCaEdwWV4pvGVfNQ3wypU",
  "key23": "n1sjxCtiAgGZKSkKKKKCzTxVkefarrWHEVngNatat6EPwmqFr7wZvPA9PTLhizAB1Wi9v23W4rkHHves7NWgaoK",
  "key24": "5WMNzfaeVK1hTf21URUzRvkjYHbGEEhgMexenDekJCusuveejTZ9xaRQqMZV486HCDpYkQZESrVCq1sFA53hfkxd",
  "key25": "5xs5FXfYSupCv9v6Gxo3uX3Ha6Ud48UcXdJXYHR6geW7NqwD4iZHiyYms7g5VRetYhZHXexX3ZuSWByiiGUop7GW",
  "key26": "3vyZzvGHgrhcUcwqHM4MS26zJdMFan81TPRbAEjACKU84BMeC73mYvJYVGQuER2mfi1rkfNZwueW4T29zYiMU4sM",
  "key27": "2ph72s27FDrsJiKKGQ5S75Zk9qSg397QMMt3gzqVJ3KY2gfNbhoTCaDvSMN1Bc6KCJ4kiXwFN7kCnWEKzhAVq3P5",
  "key28": "5rdHjNuDxRSTMkUNU3JS79VCLv5v76buQ8VcXkicUVuVyXojsVXrAZzQsb2vb5q8A2JxCvA2xxdFWfe2WBQGea8k",
  "key29": "2i7f2KAHqtC4Dm9ktGMUyWbhWPrwnVP96v8fYhSW6tR7jgmWKQHr8it7Zfd4UcQwMvja9RThFcRVqhPDypahVEQh",
  "key30": "r9DreMtBGZs53WyWmHZEhNuD1wd9Jy6hUUF5n8YaJeVngUR1RF1peSFawVsEcGkkaz6JE9RA2cFWNkE6xfqYVCT",
  "key31": "mHt8Qonk2v6hEngcKBWx59HLk9LTy63LevfNHuYHvAauqCLSdjtiVebvYhtRbmoNX8YMPekBgh1Xx4etrwckGQc",
  "key32": "QZ2f1d3tYNbswpYDA2CHBNmTwZcjd8AsebyfEhFKwqHPKd2eN1rgZtLDYyjea5aiXyLuuWnPSSnEMorpErezxLB",
  "key33": "3H3GTLw6RseFbHPouNSSXYWNR2kCq7JMRUgNEKjGSGzXHFFkZ35ui8iAWZ1YVJRzeX1bryhD5srVRBBAssnTMDgY",
  "key34": "3UdszrJgg1h5UJzQhsCc3qnxKPEnV9uTDT7Q9A9PmPZ4XKdaZ7LpZ7hxuHmkKe3vRkCHVaSLChSdcHNfwiAHRaYt",
  "key35": "4cmo4WgZTynrH3ciQwJ2uDSsfGgHn6dwDbjvokXpqRjhL4SgZthxy3d76onomNbPizzozQtBuqkKa2NggbE39BeK",
  "key36": "3nB7GdyN3kZnfF1AHGPwuZFC2PNHBtkahKivEXbazmE62iWo89TorcoGSew1o4yneYv4SYWQzXS48hnnMo4XYd64",
  "key37": "EadVcXLeEankVsxi77TYBcoz4zdpZWE79Gm18h97jWanMyPBSdQ5ETMpjnRAvHFWVqG72ywhRyTce9qHpuaYu97",
  "key38": "4GSMhtKSAHiyrX4hSa3uLWJCEi2mnYWMtKwmmMeet6xk7VCDABcRr8S8pr6MyXHfMYmz2RApJT8dwzuRqfAgAPWJ",
  "key39": "5kyb4Y3emU6gxQFask9tGtnhzvgsUmnZVuSLjWMxGcHDsJ8rfHYmaC7b7HtyRmrVBjYoC4ZSm64aCyHB3kSJzzDF",
  "key40": "3XCqGku2rXSsR3VmrJZ11wP5NTdcP7xBL37vuejE55ZnEpRdyLPJY9phPz8qopXiydseanwmi6R6EdGLUgemW4zZ",
  "key41": "2h3VjbKXF6gwWoXQVgge247B2qdARenkepG4T7ykEeowYeYUwP1bv5ALLVjUPndmrLZHsZPA6CjqCaDeSYWVKBTn"
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
