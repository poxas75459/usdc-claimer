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
    "AgN1Jab4GzBtPN6pYJxNWBaZpUJCfewMW3J9sf1jvXKx2ukXr3V9s6DXq3Yqz4tVPhHUU7dFGzS91s3FNiuo3g4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xAKk3WqJJbyv2n8JwfFTCLiq1DywLfxuWQR3txo2EQ8y3eh2h1P4wQigFBNaB4ZvM71VQAW9YFVf9sxF4kZHaj4",
  "key1": "29UPoQUy4H5fb5L6JS4cMWdTvDaX4kM7vwoEeNoJ4B72mYDKe1BaDkJnwsHYKdEBhvXGa2Q5ZH2qGFnvSswZM2PZ",
  "key2": "282o9XVUh5etBdYStMF7qruW7Nf8jMcXML8cGhVgxi7aU3ZtEvMsxts2yYB3KQrfCkNWS6PVQMeUuwXe5qnMj17Q",
  "key3": "2fmR7Q4xCYtisDjTMUrmYqyaPWQTLPC7en88bD9HTHcmv66htfZKSXcnSPvjbD3NiFfiwHWcPySQNzRms42HMhmC",
  "key4": "5bvoN7homNxbiArezBcjRtCViCrEyqxU2tRbPSREFnWi53w7yHSibBrAzET1Baw3Mouw1JuF8N5X5TYNkxZCUmgV",
  "key5": "66mhwErvpyBNPzTZfcc7tSRmSTc4DnC7tEjpsXEcWvVFj4zffEdHqN9SNidNUWYZeyPpMEGQ9iVJ6AhB9jBcoiTx",
  "key6": "2UvUckF7dCrS1FzFE5PH7bRYMzJ15fztXki2XRxk1jTfQ958bRkZgxoPGaiWWd96x3v5ZBEU82ohyVGBn1gY8Uhs",
  "key7": "5Tmc2ojMRCDTkTjsAbTWjj2F5q6BsGJsLVKNRkaKM6ctcg8FBxWxvQ93JUMQEBzScV7gtEVdK9j3ihGyr7tn2ddc",
  "key8": "YNrzYpfoXmdtVNL2n8So9TCtHv9MMrWpkmrnuNNtTtSfphjR5MGWfFdWZGxqsu2rCVrEjf5jxSRJeCDdP883frD",
  "key9": "36sPw4DctLu531EHZGtJ5GjvetXirUyjXpRrx2ehM8PJJxphCMLh3rKsYB91NA5gGYEHPFaH1HYaZdScpFhBHArM",
  "key10": "2J8RrRHvUCuLeWsyXzQrEAnsJPfNUSAkLB3NQv34imQcuS6DzhSqcYj7iuLKnJNVp3rfyBbAsWLbupKJitiNHXh5",
  "key11": "2Vor62nK1QVU8JwL2LtKndziuatHeCfCBexv4S9cUmhnAyswXRZyWZwYsy6BinFN8gNk2jqzezpmUz2t67mTrciM",
  "key12": "4wc4etm9XjgyYaGqs6WGzRNi23kgtcqVKb8pVgoGs2yRHfvVVGFgU88ujybBazX9ixWtt9mVhtDQGtSQjTj9fuyw",
  "key13": "2NsK1D94YvVBi63QUA3yjQRS4fHNiqWmQ6LyN23GKWM4NrnFVZUoFLyz6H4Nbod2Y2r3Ar54QBFjt7H7zRA3xnox",
  "key14": "299xaeF2nUEhxmNvx5ysb5WYiq3qKFAtzxCbM683ShovHCrjccsiqFEwu91v8cQgUP5enrUvgakZYHundoc9p1ra",
  "key15": "3ZVUehX72qAHz9rvPmuvjWHWJKarFv4yQvcoRWmMAmAnWYq9WJGL4sXX9caWbNAn6ZPq7hNCXCWeZHHTjzouzXNU",
  "key16": "QC1Xn61U6uL7jRE2Bw5a3A6J22j3ER98rjSw8Pknibotp9VGpfL7mHYk3Bs8JaQQ1TxdFdzi9jf9u2EVg7NXftH",
  "key17": "3hVAhLYhTVKfnieDkJcJmWfDidTjZrePyV7XiSp5N1qqGwcDDpYiJBipKMXbxHRSrQhuuThtLcuRGKpn89GV2BYf",
  "key18": "5oNCHohfrzEr8hS59MxhoeqGFyR44kZm4BrQ3bCMh11f4MtcqLPj3s8HacYANbPHADbE8G9t93NpcBftVBrS3i7K",
  "key19": "3jCQMEBUXnQ3w7oxbZK4vzaCoPbMPwjrZ2qiKWpi93uyLDJn9Qh8Yhjh6fcZ8oXWYJNscGkgSTyGRj9dMRyWmrKX",
  "key20": "5ZLdJBDUq8BZySYSX4C8g94QSHXwky6q4CEpFNMmAL6BgpuRhtE7FMijgaMnng6YmQtjEYn4rKHBmLWeyto9Ljem",
  "key21": "2y3j71DsWnrEDcuxeFNjzqNMfeD4XJQX8YUNAWxeJGL8TH6NgFENABRcYrt3rW1VzByRW6njScnpz6xRwMmKjSvq",
  "key22": "5STBjvZUAMkWwxmxyNcAqWwt3AR3hma2U4zywU5cW2ko3Ejxd7W3kk6NM3ciSYAvWafZagHGhhCWoPnj63frwTby",
  "key23": "16xzrYam1VPYCM7UGPqYQxxAwZCFupWphdpUadUvZSCzioxMPiRi5uo97xhxTmm1sBGjRPkWRimbZhQupegsKPg",
  "key24": "4xi8JmXm59RNCZ4TmYU15krQoA4Z3wgtX2BcGjpTfjeyoMkTG7gu1up1mMErktywFewQ6a8yQFqNSUo3qi3j83if",
  "key25": "4mipfKMN1b4BWdNhfTGriPSpndC3siWQS93A6sauYziiBqrEb1eNbrzNTthf7ZJaHokju6EirNiQjwYumPFfRjSk",
  "key26": "62JLG6ju9YDCHeo6yVzUhEz213Qnh2D1ce3CGTSB1QViutc8oGUQHiLmoaPWTwjbLtemc1uEFT4LiqdTvJ67psc5",
  "key27": "4rn8wCzu1BVePsLCN8DiMf99GP3eMtpBF4kM9yXodfC2ZoDNEK596cG9V9pKveZDTh62DEy89wfAgZ1Fa5dUqhRD",
  "key28": "4pS1EPTRLcxRMUenjCpQx5YFzn8ExQT6NuHDCbq1wDG2KHVK1G5xKtAyt6zvTAW8N3Qn639RY2FtAaud5xkkAC4N",
  "key29": "3deSedQtWNxcMvw1Nk89S2jj9NsiVTUtpEgEGCfFJT3J3PHEcNaesUKtJqwbjWST3QsBPRXdzFBiaus1ecBnxux1",
  "key30": "4CfANGSeBMTnidP4Fe8ugjPTeXML8Mrmx4ewLJM5woyKZRv1NfCoSzGtZtcBg4VtJDxGAXe1o1dSLPTJ8KFiZ3cS",
  "key31": "2TVAuEPpdRp2VH872fLdqmktaw7h6pMZyjiXDDc8H85QTNZqXBf7QkedEHeQjH66T3yarTcmEaXmwBLgSQxRqe1F",
  "key32": "dbczd5kn747muje1HNxPKqAdjaiwWbEHjUgQRn9cyozPGKWdDsSeuGYRw5sUJ5FSbLPG8BKqVvE9QxMRL2ctiAq",
  "key33": "5CWb9Sy4aA2dGxCfXUiPji4GfkTSyHSshXGs3uFWNc2irr82JxSCbJYevr5bqLSYdADKagHbreoHRHL1UCz5HUgR",
  "key34": "266ahpwMTBavgjnWvRivGWLse9DtRuUSuNLdMZ3qQXsjh2zRGvPhmK4SGxQ83CkmJqz5cW1wD9rTBhn1yZFfx4xC",
  "key35": "5X2Rf4xP3fPx7JVDiNqMXW3uPanXMwTm7KCchHgbtvvcRRXbGqDsWRKspfvLPthHK4XPyLhLSP4L6Mrh1K14JMYc",
  "key36": "5SiB32s5u7JXybBTfjdabbbL4QBuwGmpw9LWrGZAFiRCFEx7B5biYV81AmTsot469X2z3WD4QfQXuuB5mN4neGo8",
  "key37": "22pzd18HX9KSnccyr6nuRiUBjVDjCXfpdq1dJkvpra9dA9ncxzPyAJ7EY9RbzmKNWx4SHLAnt4DqcgkgXcTextDL",
  "key38": "MuqBqriEfY34HAbqAoFh2wHPrjhoC9ezejX2wzevi75EES6C7C77f7h7ACYUfazv95Z4jAxQX7C52gMd2aBPo7h",
  "key39": "yBNKY1hS7Wp9RD5LxneredVshNwPiDugsi9oGW3fQoHF357t5xyFqR5ih4mntpYPJgBjG8YMi91czEnaxnMQm2b",
  "key40": "33stNbbL9zQbC1pEg3Ck57Sj6ayTfwnHWCcLM77GhVBqA7ia8bBwdVeQnUUVdV54ve2hLpG11QHMkgm1iWQq9sj9",
  "key41": "4A5pvWaKYAGwZw9hk4XLnb8792w6oVvjKgMEUXLAQgUjvgZNyqRZpcPtFXoY6CGrrFuSaj5nHXvkT7uubFz2UMo4"
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
