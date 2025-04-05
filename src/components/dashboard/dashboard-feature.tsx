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
    "U5NRqiy7mGy1TDEBKkgFDnnyajmzbMxwcQCtZsuW52paVmdWmuZxZtYbmneBHyPiQUVFH33JZbz3Jxh3V2Ykg4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vw352gJpAzWh1oL9c5MHjhYWPyJi8p9pq9Y6GU1K8JESRi3poLNPRzNj4sKjJoMwUEZ37eQzwXeDJEvh6xWR9UP",
  "key1": "3gHoRybeQfuvH1USUqzco4J9mVo8huExBjpxcz6uJhU4umA9ZP66bktfcpvYeFxRKqbqghnFp8wH2Jy1avuHjGGJ",
  "key2": "EH1CpFGg2y5KSCnFdRjz7n2sqNKJ3mnCUMbtJpgLuoik7sFzytVmcpmJP56KDzeRNjhtX4YJZ4DBg1Fo9WsvU8N",
  "key3": "2MdYS1wZvSgfzLpEkGmx7nhDj6figqLNadAP7PX15VcZ6uS86bjuETkYXM7iAmYzgWCgjaEuaXbogVygh3yufyPm",
  "key4": "3xt4Px2Lkh8Anfb5zvumiHYbdieo5d5iMXgrSoVRaHpP8kb7ioumJXK7dzJ85idZ5LPdATu11PizDbViZcSiPpET",
  "key5": "5ucmcncszggfpBu5As9frxoBDMpBnhcsHSuut2YmQifPFeQRiZCQLz4HH2iDezLYLSwyEJfAX9JaoJM2nsDfNfHs",
  "key6": "5LKvyZHoMoKJ1Vd7iopGAvniyPf7AqXB5p3u8vvWoBUbtnCpzdRypHWomVPTNKF7Yb9UtD8kPbLw5zKJdQGqMyLD",
  "key7": "3gyeNoRwVAA4VZyz6fzN3ehkHAtMGCgy4do2UTCiehtANaqs9azHoDnWzFpDrZXums37TXuyJQqhQapYKme6cirg",
  "key8": "42kgye9fPnUkaasP7urcgvVQoKcNusX2xCRc5wy6UafWYZhxiXVdxfNGAbEZTqVPo4vCb3RwwjWHtbaTjWeiBhqe",
  "key9": "3rWh53nWi2ZYijfR7YHotFuY6ZezPY4DwSJw6sjUpVjVgjFEN8ydXo5L4PZKsqGjudZMLP9qB7cCTGH747sd98fk",
  "key10": "2eaHRz2o3gp4DMb8JdgzoWh2HURJhDUpsH6dg3KUBPPx9v3jm3BhsZRqSk7MiBCJ39t1dkiL51FM9qXA5vJKAVAS",
  "key11": "wrwtYNcjXfKn9MZKArCwhDXK49TpQptJjwhjqcFaQx6y9KouMGwGva7JBQKG5eHAE6ExsVuBZN5RFaAJ593EcPg",
  "key12": "358hu8ZhCNZMnkPAUNV85hYaeEYsFox6qo7ju1R2Ro96j75SW31GfVk8NXXK7p6UHuPjNoEPKf9PsRTSGopmTB42",
  "key13": "4DoFwQoR4v7FmfHf1EPK3RfVKDCufgXzNyDbTyxG27Qja5QCDdicmsvdLMVSKo7jxD97qn6e6fhW1eWPrcrQMhRw",
  "key14": "5UGE8c86gpH1edTxALCp4jThyJpju6fGopwpoGRFimytXK9aMo4L2BiUzx9CSNqKpDZF9fEyHRvMVw8kdCn9zpCu",
  "key15": "2sCPMzmT6mFHYPiSWS2YWM39DaE5T4sVHs92QrDKKv2QUppLPmNVhVDSyFxyZCnSyCBYv7MAnde1QY499baxg1Dc",
  "key16": "4wb93kVSXARmBxtPeaqG8u2FXyHQ49SWukCzCqUURqoUak3pDKzXAki9QZZopjLD9sbodzvvRFn9qXZitmMca7U1",
  "key17": "2d98kZ5ka2R6M8JTzWMf3G5w2nHX8CpkghNQWBCzwgLjedxxrytrALuQMBkQJoqGDY2DLTjxNLrSrJdZfd6uFC2h",
  "key18": "5XtH1g7sxRmeFfqPkeMniEz9aDYgHw1siJqWWXBLQd7pgEFbsYmrVbPtHHtZoVLHaf9hRfNDg6xkodVRSVRYMD5u",
  "key19": "2rBvDP1mtjP5hvJUwuCwgewUXUknkKzuWHFhBCpmUgwvTSMhkSUk2NE1qVboVcJNxnbkv7mkS4meKgxu8JGJK9C1",
  "key20": "bHWXR9YWW5ccmorLx1QZFvWjtwRdjDqx3PgK3jPA94NDjTbpNeGhhiuzzQWALYEXrDvM4yNHoV6GbZhBVHbuD4t",
  "key21": "86LUHEqVDaWjAWLp3uN9PC6s4ri2J3W8m89tnBWYa6diDminK3WeFkVSjY3RBK2Z3SCTJ9yw7zQLWDtxXtaEbzN",
  "key22": "58ggxTsEnTrPkzZ7ywANjHQAoQ2JYiajKw6Vsfqhbjp7HdHVbtxtvkbBHVzS7zA95nCwB5DmgGn7YkZe5E72ysUh",
  "key23": "RDcH6MgnEJDDUMp2qNEfc8oT7yiFx6xMs8V6uWNMQvbSWCcpMEzjpfz772Lrv2u8XJUK1oLnQFV4J17EXckUSQZ",
  "key24": "5Rtz6SXA7ML8AY4GppGBCMZcLypiXFYs2P9vwTth6uUYZcnigaPWoa2Bp9HXqm15acsWqq98vjxpDSuvNnJ9mEwF",
  "key25": "dv3ErTe2hPXgn83XM6ohH4hp8TAj6oAsppG6n4kbGCPNfZs3iQyoSz3iMesfszGh5AtY2dtKC2DB5wDS6rXryAn",
  "key26": "4kBUB52nJ4rXHwxomqFkEECJJ1bieK6zyGb61bxDuHUeGZk3VzsURMKLPXr8gZj3U1XEUjojgjRQj36dScnXVBY7",
  "key27": "4r6YuSQUdtikPCurqw8UNFyzjY6mV9DRCyegNFTyXcE8V5MUKp1KGMCp1fU264QcyT6B2BH5yWNhBe1Q54NcuXgy",
  "key28": "44g4P6DEAWHtRCbUUhUezTs2KyRKY29ikk9ikc92so6j4xS5ePC1ebf8yESwmVdYckafivTdYcQEnswFfstHswem",
  "key29": "3C1VDuun6steDESfpnJusJN2b6SB3Xa3z4RokhDfagpsFKrLRRzoZ4MKBJFLPnbcxFmRxUhMA7d21pVHERwCR9Hj",
  "key30": "smRBZ6HPrq6QZEqiCs41AgnLgUGVke1xtK6vCyKAU4gQhxSYuL4ud6J6pZicmdx4SWohy5do2m5WVtRnu7JTVcx",
  "key31": "28Yux2EqZRLNexinojb5Lsmzm8RWfRNqZKWs1R457iZ5Jd4AoFRc1J4E4Xf4Kazyir6HPADnzecEAbyy3LncuNVs",
  "key32": "5Crn8FbT2qodHm2MSyQR2r2WDwB9wVBUUokCzgHp6h6R6yEFFzMDDCBzV9u8CtZGCAcTHKhk9nNMc5RPvzpwzR23",
  "key33": "3YCKtPJZDkfHFjAV8SUawzVUqM31ScBcdnYuuVJPYK2Efr1ragJwcDheUkxvYToPAhUr34KXkbQ6mGptcyS5GwZ7",
  "key34": "5RFAbwMxtsJjBFnQisS5nnJUkWQuHNYCFeuvgWLQzr7y6x6j8XQdbfpA1JQq8ySKZvZ5CH74e6tREPsRxu1Unvi1",
  "key35": "4W34Kwx2Y27NL1fbxa3V4DcSxkSPu8nqYAVS8AzvqqhfAJJe2L6LhM1z5kFakHEth4ac2voVvW5XYnVeQLP1Puyw",
  "key36": "3ZPPbsv2Pm3QymZQiHdRymrJg6Xxsr9S4GsNsQVPpibQUyuzv5NTPwE2rmGsfo6Q3M8bKvjajuV5dygHWJWj4GNL",
  "key37": "5SCmuDmu4rKsrDEjMekRh32CVd73NUTbiZFN26QATvqmW4vtZrmdrSrr38YSAgXxUkv2XpqLQ2Ax5D9EcRptgZiA",
  "key38": "66D86DBRxUuGuAZyEQcqNoX9HvPhPFL1AoV27ZkK7BXQmtB6NJxrHX4PJ5z5qVT1sLqJ4KNAzxSq3iLo6c2DzjEd",
  "key39": "4ZRFiEDUKcfwssuZzhkZ7dp396Y3Gmos4DDbQ72ii6fZsSBPZC1oaDW82S7RE47ybGrMsFe4UL8kLR7ywwjawQAH",
  "key40": "3eibzGkSL6BJASmHDVi2XDo2cRFpVv6FMjTRUascAMEJns6JPSW5CS6TyseuM6b2WJiRRBpdWysb9gRcsD6toKne",
  "key41": "22BhU3UT8DDxVf5YQSAjU3bxM2z29uatA9BqEf5KscP2uvypwYBWD2ER7oa56LwZuRX55utq96pL7oUDKgLsthJa",
  "key42": "2QWXBJYhdU88zys9rfHA3yxrzhY7yDg2fqEeh4WVfQdjSXQAEy3vAgeyGeP1r1e6yBk8GniZRoJUKKr3usx9p9h2"
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
