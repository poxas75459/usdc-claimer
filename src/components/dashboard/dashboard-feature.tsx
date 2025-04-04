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
    "3bzb1VNLoFdRc6JpL1yDSSegAX5HZhnC6YXBkq5VN8FZsATKwLgdNKRUKfBBsVBE6Yvv4vwWXw5m6GoZ5SPxQzar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nRYj1xgTx5uwQdrT7mnPuuHZKMuCSRJN564d7PjCPUtdzbxmpMEksY3bHAvxbbNaR77XqSzzXVSQZoCZGtmC4QH",
  "key1": "JbiGaSbzUUYu2GvhUGiQLDJNhCaZG3M5t1JLpqNStKtQ8dvYXVjZa8bnydosVnq2p8o8hXYsLrNU8yNBs59zrf6",
  "key2": "5RyrvEBfCnjRUEi3wFgb3CbmQkkcuoMzfsA8eiU2usaVzBECkk3KZkz611LpYGgSVmb14MaXDhLefDoT9d9ghxfs",
  "key3": "rxGAakoWqbLYVGPJk4jcaekkjDz9wTadwxzGarbLwz3H5Nn4bqy3qWEjVRF85eaSCF5W8qYCvqnNvCSM1cqJzxg",
  "key4": "4FzYqB4U23VA6GzZi2DNAETcXVvPANXGBtmh3s96eyvhQV4KtS8uexymk33YXBbACZrZkawNsvrBfCwrcPmyTsBh",
  "key5": "457MfQ7pLcnmVsopNF6nu5EbUkshEgdKnpZhEPZkNYpd9quw8PQadDpfpmKx85KR9ZhDJDrC8WhGcR6VkqAmN75k",
  "key6": "5Z4WTuNs33WTc91UwGSHhqDWrYku6uNf1vGSeXYBJH97sz5QSmGvLc5wsMScGmCS8CyCmS674mLH4yQHMj79zp6H",
  "key7": "2y7LZKz8UfooZr4WL44UdqpeDWC9YudJFQpwDhtdzZqFjWigFkJWtDVRzbgWKQQfoj9yGkaBM4XHrLFgXbzWiNrC",
  "key8": "2zdZD7f2sqKhySSLV2hrMYidZpWTyzFWuWeRVfPJkaumqRn1Rw2udTMWGVjTdpD2hjM6ekA3QjUQKf88L17frH9y",
  "key9": "52myxPibZwRxRAuixnKnEJgsadck5QeYDD4fQxFfmfGHQBupbTEd45NWFJFYhADqa8tTnwCq5E5j7um4BvtDbjDM",
  "key10": "4RjTpJMLUXjuHsFidNcQmDqJFKbuwQzu2s9UiHdbNpKDYhN9J3EdvfN4bCNfg1PiWzREkkxFKWid2N9FAzMYn6N4",
  "key11": "2JWf1jbAFYLEXJ9h55zcbFKWoK41neygMA3ZYDTMF9YeJzTs19EQcyQKhiiU7QrPK1WiGE9BscWdxYdh7qdJseji",
  "key12": "KfVrBv3KpGLvatkNfPQyXVTa3KSZwLiqbuw9xwEXuCHniHHyfueMffmw9dSf9X2gGny4uV22Amc6iv1vnFGzYbK",
  "key13": "4D8pYVNmZGwtJyJ9Nis1Mr8rArkyhFjWXJjtoFMm7ab7ddWam5LDHxvTKNieyNpsuwvcmayDWReuvqGjhp828Bwg",
  "key14": "PCYjcPKZQAUmGpcZvxDd1tjPnd5ax2ejMfJc7fi2krkM3B1yRcW7Rxreomd94LmQgQDc4vWrKjJH1VMtR74Z2N3",
  "key15": "3Uk31kwchCX8boMi5Q3eJB8SbgGenxpFeHUUU4mjQ6Ae16RHfd1u1qgdm9DDtnkHFAf59U9PCKj1WgNPYCvw1UPu",
  "key16": "3XpCTukbpsrfKEpBSqH2kU5BSBWDYEu36AQMqthS2ov1uAybqPjf4WgySWfsqpnqnkDcCah2BWEvZegdWYi2rdm2",
  "key17": "4weJBt2pZqs7k3CyYRsZCqW3LEoVjtAAC8S9dnLLLPK1GhSL3KgTWThgcdJwtUaWu2A1oKUm5LZvG86jCey7ctG",
  "key18": "3HN44eBe3d48nmmsjmnAuoTswqMjUqxTfHj6EHKuUT21qyrxRXT8KyxN88GyhyDktt4Zr2qUpHffezCdLD36SBYD",
  "key19": "3VzaUp2yVRhaUUhcT4iGragDy6tAQ8wV65NgBzdQDJ3oxatm4s2LECe2ZY8A6T8aYiauVmruyfpFStahXUwGdCKG",
  "key20": "2J4hEojJziegmbreTD8NmPHomp4cvtWhpqfYuMgWNW49ZSVxsTgZ5iHGnS8fUKy9xLP3osexkjrF61Y67D3scR3L",
  "key21": "4YsP1rNZVcNajdCG7c8yU3T7iDjsNkrPG5iSkgdSBz12MFwZj1k6RKvNojnUjD8hgTSaTYq8zaW654n2t6CwfTFS",
  "key22": "2BsLdXnA5qT93cQ88RQveii51maKk5RGzFMddf9rAVkXBWE1JLDZnvQF5v8DfWVBFonVxG7UeDof5bdyxi5y1Cpq",
  "key23": "3xMJEwiehUAwnxCGfqEEzB5DAQZNrjXo1oT58nKTg1mPXqfNbY5CmM3ExGQmhni5sEybTMQ5cny638yRdPhTTXeZ",
  "key24": "5ZAd1f1upBCmgGRWPNNjvF53WGFzU7rSaAbNupp51g8yttAoyNipy6vfCVGiwaXRaKQnaRfyQ71NK2engyEtJppw",
  "key25": "2hxqiGfvjaNN67H8XHYHL776kvPMn87w42JkBqPA7YYJbPQfsHz5viehksUQ52hAKYfKByEhXfTgtnMtCpviEEer",
  "key26": "2YWvHeHXGsfAGtKbjxWGhkeSn3WJib614j9yPGw7vRH6pwBJGkVnrm7aSZ73PME5reyomCh1QAqx7df6db9AERSH",
  "key27": "49K9TcYFkJs5xJHkCgY3PMe9u5P58Q76PSdRfL95KxF2riA9dCXibkKBLH3EL1suvCv9bSLSNftfVuZyquhnZdJy",
  "key28": "3ATAHc7f3oz9eygr6nAiZCSvvphKiMwFo2AystKiLHnsvL1PwHGBsy9hYwFe6RkwkonbjfT2z726BftsEBcTcGuw",
  "key29": "42eiZdJ2apHwMZ6KhCPMmRpDFiToTuLmJvK1LJLBLiXHX27tuPr9N5GVhEJ6w6no9iy8rCLjaDXGdy7ayjJBKis7",
  "key30": "64esNjtZWP7SQggXKv4bwj5nf3upwJa1Ln4e22Sudg6AV9A3kZR7nuUU4yipZR9nNYM26yEmxzLxkfMzhS1PeFzp",
  "key31": "5ZCaeYa6Tv9CQ2ZWvT7epm2J5FCaaLfLVo1jFzGgycYkfV1jVZE82kSeQFZj37DBDDqxWiSR66pTHM5qzRrHwwK7",
  "key32": "3pu7TaDz6ejqis8Kdak4AdfKiym4pYph81a4NEZXBTnWbx4x7DxW65ftpw6ZAfNdTs8Ek1bzA1hhtPf4pLLnGbb1",
  "key33": "wa8VYqwYsbv1XpdLsxw7fbvFtrYCkwNn9AVcpqt1FT26wYcW52GLjsi85bTc947YkgW4kPx4QtPDP5dTzSTEJKf",
  "key34": "2CzKNxKGj3sH5VnDU5pgGGFi9TNQZ6VufQeQ5T15Wd1VbkjNzAbbAn5LdFyEJTwniAdJ1DWrHNEpjUf5BUaFjG7r",
  "key35": "3GjiJoN7VQVWv62dZhsdzUBVUWM2DHjoimRHAJsYysfxM1mkjLUxYXihhJ7RESPcts3oxHazwTHxxASj88sGvNcG",
  "key36": "5zp7d7rfmezbBrn6KtxnaBAcQDPRddGodp2BfnTxK5PYva6uTD91pxqPGxnV7L8oKSW7KmMELPTwU8pVzMJGpRpL",
  "key37": "5u7dntiJnWBFn7nA5sGSZCVfxX9m4cJPQuu4LRVnujJbQ7B6mV1ixLANLGhBRcwzB6KpW4YHBF1xLnGkeXqZDUHt",
  "key38": "5pDu1uchb2hmvZAEVnyBQ3wid4ykPqYdPUzrwLPsgn99Rs1HN1wU3LqqduqGNuhte3oWeV9Ch7xpTLnzCbPzkmrE",
  "key39": "4vWbMGjCH6HPZYdVb1qxiMVwCR29f1cNH4bW1FmqnUKychL7UZGhoG7t1tHL9o1E3P6QjjT4enkmVivbN8X9xM8b",
  "key40": "2FrDmGkDQ45UzwbMkgMbjLWmYgH7VPr5hNG4GyxWUpSRqMyH5jLBTqWVxj4LfgE2BGTwTfdgnsTG1Y6x39bXZCJH",
  "key41": "5nx2DkUFcHQbfAbN3VGvEWjePKyW5RzEkayGf3naB9eg299TTmUov7yWVSvV5rEc5p9s3qRQdB8g5PNkw1ve6aJC",
  "key42": "587MpD8RijWXUVWwCeaoQbZEsBN3YAfp24De7DfJ83cC3CENJ2qFgUQyQoPwKKVeM8M4tXwiqeKm5deV3eo3rpYY",
  "key43": "5B5aZTnVhQ7SzMkmmXR8LbA4FtqtGX1sthCdtuZVzxJEAhdZnsRoRcjkpfhkRTnQPeTfYpShufgKWERkUezES1Et",
  "key44": "yppfp8h6CmGuJ1qCpwiz445gEknsoi3WhRYdvoZk2dzjXrEwdWZsMpC4dSBeq1vQKTY9u5NtMnPBSQSAyGYNpYc",
  "key45": "2QZyroXdvU7NbsoBY315rCGHsjtdNnBMCgmbXQxUTSwkgeiDuxzsHQr78cBxydc3tcVYXPq27mZfkKtxkCsuoQeU",
  "key46": "5i6kxNfux2uVk54doYJmKzkYkCxBRtngr7txeKM92sNu8Q4S3zuY1WFLfR1E4ZBXzWJaSPX5a7aP6UQcpUsa5qRT"
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
