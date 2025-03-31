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
    "5krwynSp1M7B6aqQ7vQoGM6AWrwhvxNQHDV3JRsj8kovaCmojLaNyURofbwRuwuXKeTWbgzH8mibdbGZhifq1ZTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B5ewBB4y6yuqEs3sQFyKhx5HBTGKQppf2bx3MavcfuH9e4uMpMecgK96NjcL4J1mZRCDCZjpSm6mevoepqRqAJv",
  "key1": "2vM8qJSfQp1Nh2rfmbwpUFhhL25qEysoYHdWKu9gsL7AzYccTHmMVNFyep3WdNyJcaThwWJrLCKZo1msvqS2jvAG",
  "key2": "7V7pwUQSVLgJLRzGiRvp3eLccpPA6rMnMK4xMSw6whNQap9kumUhV6FERzxhn7wsAm7AuzNxrmx24NgXeaZMTrP",
  "key3": "51i4dX5eAP8Z6tH7SyU7f7A1KzBCCtArqipFWnvr5tCVAqX6FYMW8QoXNPjKfVhb1pESUNTCFdYfYjuFCyYBJCqk",
  "key4": "2LvsFUdzgfC18Unn7eHB8Bop6e1Xm8G9MQcjMYxBPQPSpJxkWLHBt6JTywUEzbfFsqvMFxsMVNfhzJMSCLMFziv5",
  "key5": "2ipC3qZXQnEdt9SxYK2kQT4GUP8jw7uRfSzAVrGuTRmvdMGKAqF5MgiZsxKYDsC13WMVimx8rR82zjQn78wxvWJQ",
  "key6": "k1RTKRSBCoHBnNBXUcDvX9WXHzyEDahZhDUTotmkKescaoaxdnkErg2YQ9DZLFAtFYyLUaENVd53KLpgtMNK16a",
  "key7": "3hqFMbVvgy6zAQzyeVvA7jQGgi83KhygeQUzw5FoFgpB4eRdHJKLHGbydFXafAe9GJmRtFajd6yFubMFwuNmuz5f",
  "key8": "MER4bkAVEWCBg4hEmW5eaYiLXfmLiCXp6Xd4LmDRZPWXqZwYhtCgihVedNC6nt7TD8BfzfqzVo22qBi6HP98rbt",
  "key9": "4ayKeK4mXtU6d7UAk9nG1Hw9P1MwLj8Rxy96Zg5UotUUfHFL62nhJouZW4ipfuwnkVfqfbqX7C2AsXFpnXj5AgdE",
  "key10": "35gaRR4ZxdQjBxC5ZE7PG4yZQQ9oxDrjd4GP3Nm6SW2sDSdeGNtY4GaB5teW8EwHt6XMsNnAp5HBaNuPKKcACf3E",
  "key11": "2f1gNPZs7beosuVLscZK835weuBz2v6DgZfuqFgDPfUqRpVijs7jZnWFe3rbeP4AKiYvhULASDpw9i7KVLxC52zx",
  "key12": "5HhnJAZ7ZkM2duWmFMmZuZAxxDKw4v8N9Y8eYg3dL8191mwr6JvUw5WcNwPezJYWWRHMjHo7u7RUHrFySchiE9gv",
  "key13": "4JZWNJcD2w5ZQcuehmHJDuCG2WToCRrTehLk192MCQbCkYzuySacXGfapYnUXUYhXAYtS68GRo2ohzxg96qr4gJt",
  "key14": "28BRe4hqPWfhZ9PD69BL6JDpYPc9CkuzwHTiTeQQi1QJmEcYKT1c4mePAppZ2k9jCYycRx2JvgzUCRfrbM7R6DxU",
  "key15": "mteR7Sg2KkrXXMYBkWoeJzrnEvdo42RfRfgJHSgcPiSeDfBzF4zZxSYX1MfihE36CF4DTdhKf8YS7JXNp33zUYr",
  "key16": "KTWjiq9WZAti6hHoAa4LegPZ738LMv6oMpYsTzQT2DtXA5RK6aC9vTHdnZX6L2CvvRwg7bzpygfdex9KE8LiSFH",
  "key17": "482EcUFxQT9qDomgvFF3LYVWZD8iLxpspLENcWBGTPypPrx63RLQSkJkg8Vnw3S7zwxAYsfqUH2hMrugbqJf5GYC",
  "key18": "4AobBW7YHfDNNxYQDScwg4KCgsSTPrk2hshEt12ADDQid1uP2sRM1wonrY7K7Ep9uNe6bhUUiZ8nppEkeBv8WWrm",
  "key19": "rVVF4ThJXdxeHDQrsMujpq3pQLd1JXS6mF65M7NcRi1b9dXGQD2MvFKySEDxRyCt9cg7XAyeyaf2RFvN5xvRrw6",
  "key20": "LNaD9dydLxGaKGJZEx1VixocXFYVAk9MfuysdcBQ1mRVLpmdBx4KCJfNKUvh8ASjb4GgJVAp4a6EW64wiEDozx7",
  "key21": "4h2BeRNCZdyErtA9Yu7SAuBwHiLoLCJneqeGv9XfoYZwDgaAduKZrGQcigF6MWbuCpDR1HKh1VFGHjDwkwskYi1w",
  "key22": "5KHNUHp7ydxGJ9qDLVJ64PtVRB3d6cetkjJ28kGKc8iUBJVwBRyvLFyDAsEETHJEmfTvt5wnZDVciyBpgeAjUPXW",
  "key23": "2qZGMPtXfZPY6gvymb3XwAVaHBRhNHqDWYSPPs3gfsY8ceoobF3AahWYEur1RCx3oPgCJcLgsMaHxSak4KDXxmvs",
  "key24": "cWDg3aBrj2fGo3wtCGP2wts5G6ww2XsrJsaU6Hhi9idap4f3J41CJfhBgbjUFAozYyzck6Mp69Mdi7n6xwBPxgN",
  "key25": "482PUkf8vZo3LTpLB56gvNjxDUZjhwHPQtwMqQMeZa6xgsRD3n4BF39ghtJDee6Hv9f3F8kzKbBkDcuMMMX64mHi",
  "key26": "D4dzAoaBiDHf7haPQVajzssNB5YF3G36Gv4M3fxEwhkcU6H2PK4JHgzfszt3TNhtAe7L9HVn2fe9h1D6Ja6eXP8",
  "key27": "SWGCdEEaPdw1FchUQZKGTssoHfKn42GvGabfxVY2kNNP575bha9NhWQa9nXcDBafhyGJoNieUxVJmCswaRckW8F",
  "key28": "3r83VL2ManSoBhCfny4nMeAX1ar8xeSd3h3fVyZrRGTW7aDWbPRaWTYMymbjLUAeZdNWtXsaz9QXra6EfqSwNEY8",
  "key29": "2oiHcp6dF4EU4TWcnt95sLoaKT2q6k9jPsVPPHEP1AHK1Bp4DAzC2XxnMBEtiPeKUuqougeprFkxPn5LM2qBjycu",
  "key30": "4c6DCW7mqhT5JCF26eYRZjQSxEpoA8yviGChP2vCVHgVjnfHVBmX4i69PUuXbeKqLtqFJBPLTdPFp21Jv1x9ppbf",
  "key31": "3JfcPt3z6JrKbQHXG5vgSGqdREqdXGGG8WtHLqC8vJo6Xj1PXT7n6qtP6GFR1jboSvu6YbAtK2Bun46aV4gwRDqS",
  "key32": "2msV8PC4FTSoAneQkVEsA8ArHc13Hr5uDvyNPPSZQeqXXRAyf1YwKPhY2AkuJoBoDeFYN4BwP3pAB3XiMmgvJh8f"
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
