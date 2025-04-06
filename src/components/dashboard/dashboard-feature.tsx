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
    "N8QGrEGD9wXgC51Debof44SkQvyc7aqmVbFEnzBoEXoU7vZQ2fUh7TQxSeks9T7rbU1zxc37TMw4roBR2KV3S6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zX6qPt8wCWv3JTAkPzDv111daRFjyF4LAP98Y48gpTkkNrnxiUaDNp4o1s73VgbjVnpMJGUf8P6Dpzr1BeJvsAH",
  "key1": "4qsAzL4BTrmmXh7fYJPMSsB13veNQV3NXY3vbvDgB4jaVPK1SN1K88cJd7fmev4yG2JqbutgvLa6pUwybvyGa1CL",
  "key2": "4VmN88We5ZfnrELmzFaEaW3qzLpHYdRbZHzDmCn5x7XuNwjqmySiDy93MbA8LQ6CTDYef3d1E96XQ6YUgpmpdNTi",
  "key3": "5vAQ7qjid18FZbFmkmURyRdpK4B4xGLeDMA9CN1PziJ6BNEHvVAUkpgi8tPxk28DhivoRPPmNfrbdp2DXxrgBKHL",
  "key4": "4sJW8yzcmmHM1GgWQyYHkuEKAYxitegqNyFGBfV1enxXHUhs9A722FHe81B2JX1S5ddGGaDLkitd1Pd7pE2S7beD",
  "key5": "4LWi39Zdk6Hc7ziAG8Rv1CdM5ynRXUV8ckTqCaWMLAkywWXym6cRjHsD2UewZgQtPVD2xi7hVZRfUCNv8kxhfkvC",
  "key6": "4eHUtZa8RDgfhBuF2iq65P2ZhejjSjTfF2yJqLh7ud61sXV9aDR8TLKMG9ZE2iUW16QsosEFWPdB91H3vU1o5sSp",
  "key7": "2gEhdNRGdv3UZ6ERftnkn6vNzRFtisFgUZ5xzyQcXWqDaTtReeabzipvmMH42ymb1qDEDKyhFwK7K43Ezjhgbdd4",
  "key8": "3f7FDJFURmrUxFB9dMiVF6QnKstwc2crFK4kT3ZwN5cGygPtX4eUuh3qk5SwqovNmTyVVFr6nak38CUC2NQomW4b",
  "key9": "2CtucsU6WkSo1DV3zEtLr6wgr2f1Y7t1duzowSumQyQ2gPrBCES7dGK5Wf2Y6uHs4EW9ZqZKZ7ayNJXghMnvFXhx",
  "key10": "28xtaU5zmEbQ7skPqfwzHz9uuyLnWhpYYmQ3YE8bi5ozDMhCfxLjgvuhisPDuvrpGo9wiT8K8tQJUadzTuN3JsZx",
  "key11": "4X5BZWVNBmy5ZS8f1s3K53zKK6T2wSQATZXNVruYJHQzAg2ekwaxs7QfsARJZTHDkVcjR3KsBgCsTahC4Avs7Kyj",
  "key12": "3CvJ1FmNrK6qJ5oWNRpEeYBVvsVnBRQ3aFxaDqz3LsGiEG7x8Fy2tr7z5FYVpRKVYjh3aXDQgTFTSbC1XsXujAe4",
  "key13": "3HWq9iYscjVcbwvbaH1tSGc1X6mMGXVxbijoS92BqEHN98jUZyBi1UCygUkKKdWTQ4362dviumJr9jRtnHAExGBy",
  "key14": "MKseEcrtE1oMMYUcnzVZqdqwR2V33xYSxbMonJ6yewLtXrjNft711c8A6YYUYoDecJ5ejUy7ebyLDorLjnKGKsM",
  "key15": "38e7KKjuLFSnZL4izfpvzXxT8XdQnvppYhAmKtLUdjBBmJ4bgnFUz2rwtsPc8dymWyRQoDNUq2eNT6Tzsiz9gYnJ",
  "key16": "4Sjb4hsPt8LiRK7uoSAWsBdg9sxnfAsPGLUanSq1jVRM1SbVQ68ocTkAQuULfsnAS1ABzMaR68qKoqcA4NaN52hq",
  "key17": "55qRi7eBCF5cMXiESfpTwLeqL2bwvFz2UYP4753xiQTZ8nBwGGofeynwXV5GNUPBFic1guwR3nTrAQoBgWwySCjQ",
  "key18": "45uFzd8R66eqtKFRpjChxc8q4LmxVngYNzKVLG9v7qzXJr1F6kEorC8enJ8LubmMnoHZv7VA6FkkxtJX19JaTVxF",
  "key19": "5Qj44geUev4MKJ1g2R9LV8HWCeZUwcBNVtPvahp9tw48sTU2YVPAyscJz9x7mtC4WcLbPXQ8DAVeSL16Yzuf1fbR",
  "key20": "2kwBmuRMDhXEDkT2XPKn5zuswCEh8k6vHzFzcHWoXPqb459GqKKsUSjVauMYqEUUPsSbeziKjr7PpLEpjsHQ2ZmV",
  "key21": "66Z6jdR7BeLwVPSgvzCxZJcWTRt9AvYr1B996KxeuSampHpAnAsj19hwZKA7CvHrkX6aoQhPYMWmvni1dYqkD3E8",
  "key22": "24PadDiqUzaGj7cgVQ45EF7gHQDgqRF4JWbfsUPjaBY6kAHCxD23sZ4VcbroNzL6U8dz9QKDpRWP8TkUhnJ3PYBt",
  "key23": "22d2yr39aDfWcdGFJZEEW3gw4uUeCknSavhJ4qpr2i8tUrsZnXk1TjCEPGrp3soq2pFxZKpyHcMcHABimJD9pSs6",
  "key24": "4bX8rF866wZVKu2kyxgvupJzHN4oaSL2CmVKrXwVfTiDcfP73GvAgxHJMS1YrSonYtM86XS7K7vL4wLw1nAc3Bs3",
  "key25": "26spVu5a7j8esrf2Rms25HtSFjn3CVREUdTfW4fprF8VyRf2H6LzeH8ajuhBC7JJ2B4ycAsXTHqCVzFWqm4UB889",
  "key26": "e1qsiNtMd98DZnd54vsxqf6zR7bPKNPbzVovJaA7ZrJbKtUTacZvw7hfHdxz34T8aC4sqDY35aQyufGrApwkpwA",
  "key27": "42jCmtQx5M6HdpQPCgG4nVh8FDtgp43TvmxKDHyoePzFUKJ5CB5ynJzV4fBBDQFpHff9FdZDQ2Cui1Ru5wuYpM11",
  "key28": "2YBMrEYK9kpujXFahn6zwqp1d59ZrSjR5mPzqWzzrt7FPzpx9qQuz2noDkRh2JzpfkehLWh724HvkyVZ8SbrB711",
  "key29": "38SkoHdysrLiaMY7TRaBVUpEc4aH6yWCnVnySFQrnkMQUUuuQg1Tz9trF5igX7ounoBNSmQHGoKFJ2zEVDJYz3UL",
  "key30": "3ZrNHV71YcJr9U2ebkUj6AZfdGvuthEu6589AapP9wzj7pBHKutvPh2zL1DABbGsnegjkG1aAN4j1TndUY7cbEK1",
  "key31": "5JhBZADVPpKnveWbBRa1vzpdNLdYPz11xtEEpEfso4xMUakGuA6PoGn3JEzmpNoBedyhjQr1eyYLVj4LBtndCdzW",
  "key32": "qUD2LHxthtDmwd81LpacBUaqzCPfQPCwYrSyb161n9X4mZDqowuQV9zqApLb89ovZJc94GrMvYuqw9zXYX8aHVj",
  "key33": "5usatg9P7JDAi2eZ7XCT9XNFWYve5L341YFDb5RX113kEnsiwgwNycKhSnVGDBR529H41MxmqL9x4sEBxcyUMB4n",
  "key34": "YioDyczkKj9uaVkbW1Tg4YwJ9htZ4GkDjTZxn6JTgqZxMv6utcwCnqXuRdSDyJoQBYNvDzP1HUWqURy6x5srujM",
  "key35": "JGCYpvV6Y4stAuZ51tdVbP18stiP7Sz1ALX999kfbjX1o18ytxmQ32AZhP8m9HoZMf5H3DBmi2LWYSsFV3CSNje",
  "key36": "55zdKx8HcgCKnaPkiAtq6cPr8SnbrW9oMDvENJEmBfA3wznHkYrBToBPvKH7CfnBXs8tWb97TWPY9ZfFHMtUoUkE",
  "key37": "2fbRJx81aQmVBKW6646559MMvpNKaHthaf7WCprfQHQkutYHnEuT736pMrCHAu1yVGFokm4nmSr546T9UeqvF2z1",
  "key38": "3FsH5bJRaZ5eDrN56q6e2kEHN6x4ex1ZCev9oSbZAtqHP7a8s5bHQHaKZx7jUDyoFwHVgdKYuoAkMxnzipGayuZE",
  "key39": "4AENecWgdxSM6CQvqBgdCC4MiXn4Bje1mgHpEHazu4G2Nmaizf4RwgzwLJFfsuhLoKiGDg1rXNJbPMgtR3dGcwDS",
  "key40": "mbx4a66QCPYJ2rComEna3JqAqYnuPYYod96QHQf3Qm5KvBwiBaW5wuoXuzQoRuTLd94EzosvBsADRzG9U1te2KN",
  "key41": "5SZdBAumGpL3dbqC53nZvgr52gJHWjatgEdBJZWWAhxDfP8cz9R3tZHnECVhLCbUtADAgbDmH2ch44BUtsZwQSbC",
  "key42": "jw2yaA4ZunbMgbWSnap36foQJgxFsihufGetyxStJfy7ZtADkLSoTYbd8JKixSHPwjTrBbdJhXn462SqwJVBDNX",
  "key43": "4D1KEik1SVwrt1N3Te8ZyLqH8u3HgFKZ7XUwiPgRaVXscNczKJE3cRn9GCnHxN3Tzo6g7KGzyAY4H4jYcWZAqyzP",
  "key44": "reNRLs8p6SXq8M5bpnDeBMjsWzG6KhshraNiLEgdVLv8yRq2tGtYkefJVkEbj8qnkL8VBUGSxqyzxYjwTyKx7NT",
  "key45": "2QqHeaD2T3R7qhSTAkCh1nrM3VFGDhMxNiwqaoqgB6VH3TxaXc3hZRvszkKosEwH6rrrmHGZd3ZEPQt5XDZq6nk7",
  "key46": "5M5RDXEW7KzA8Nx5BFCvuakTJ3b6K11NTujFkcbtpSV5UuaGph5y9HNcFfwQtqriZAoFo6oFy9qaJ9eS9fW5vQY7",
  "key47": "cJNCzDwSFJY6Repz1Dq2VZJbH8TUzqMw148J66puwWZ9GPAMRoY6NQwWBcAAsFHLzUFoBkU6zP4Q4BbNcjMcNx1",
  "key48": "3WxmFFNNTMVB5Pw4ZCQCsnggynKFjcCGQJu8YEv9uShXLUsjKrwfwoyUFYNbm6mdmk2KXzkDGaeTrFS7H6wA5Xty",
  "key49": "45RciGSs3bMGahcBouCcHkZ75YcFbQ9ym94bhkxi8RwCXSDb8X8MmkDZYwmTvYtqntUSwMdmtzAQphGWPAjQz2Wi"
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
