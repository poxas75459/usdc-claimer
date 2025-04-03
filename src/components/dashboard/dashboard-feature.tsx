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
    "EvD7Hk3TABnajbm5PNy62q8d3DEFwgf6oEJZ6RCV3pjcyYoRZ9LoUoTJzmyVzLvaM6s3jbZRBVEUCKeAHzKgHTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VvJTywiBB9gPy2myFhu5BefdLCD3J29zG5CPUwBrqwVz6PtkeMp5pMtb4tHgTkArYdGH98xNY5nuuAuJpDUwXcM",
  "key1": "3n4gYVxUY7sga1rtANP7TJtsWfSgsDzvaCjn5J98nVKSG8oXtWrsKUYCbp5SD4FuuUH9uZKFka1ZhmFwwBDuuhUL",
  "key2": "4XUs5k47pxyeQhVAicvfveaW59kxJgajWERedy4ZoXVxtYeQAtAJ2t2GPeSkTt2x2FHwFqe1aJ7t8fk43RtFza2A",
  "key3": "65ycDxBkyK5iXuEcqUfxDRgoqCU2ZWznjeLa151M96LRYt4qfwCvdEETzvsfBtw3rn5ba8YxK1G5WueYqZE1Z3zz",
  "key4": "5XWg17dRWidzzU1KbNfwqZUJf4oQ2NRonq6RVWmZEAL8XFwL8LeBVmtsWEz3ZxdW9doCtmN7nAMYfQvKLBKekim6",
  "key5": "2vdNqu7jNUTqwudkZ9MtNYLEMPPwvF2hmz1HYJWVZyQTwewvdCXnjx5q8ysMSNoHrNZai2CX7GA7ucJqGvMFqJLN",
  "key6": "5hdGs6mDSwmm9fhZ7RAiafShowbSrLEcccvzM3jFDyKpSVordBxxtUNA3cRSBkA1sgVqY2NREfZ8Jic9acnFUzQ2",
  "key7": "3oa3e8juU7U2Pbpon55o2A3n4Df55eYjDdo2wJH9b5rYY298twjGjcHnPxZ2JabzmQUr57bY2H3gQuFZfbf4ibmG",
  "key8": "4TfpzoSFPiTXMkwJowtT3yw4qEnnpDi4KrJUy6Kk7FfhFR7yMBhvXNMDAwzphdqTEdt6E9NtaWgMKYiMcr7fdREA",
  "key9": "5jaLJH3Keva2RseF4jN53UgqnK7YCpprpdimr9MzYmSEAmU2749ZokwnK3VNGPCd6Lu5KUeLJnhzujBGGeAkDxeX",
  "key10": "5neai3mxhfoy8gg9w1FthRfzP8hQ1XGPsQvr7YCpoRfxydxtj1bnXtoaeNnYFntYzad3Rv96M45wSej86TVT5vUq",
  "key11": "5ViDvg9R9w6qstfzKU46EsRvbZ8b5ro26ZZMiAwhhomCCMQ3pFCiBp4eAwkT9Ue8G6uxVG9efAu75vMJDLXSWvcS",
  "key12": "ncj3w67KAkGFhYKSoymto38ntjcsdxHGauF4iKQQDzYihpUXD98PrS8Lm3GdGZqBKYab76qW21akoujTaPzuufg",
  "key13": "4MtqaNc7GKv6kGdXCGe46BxdCcooHxnfWoQQCaaoBUJzqyCERxETvENpoD1gjYdopYrVy2ra38kJWiXwsKczFyn9",
  "key14": "4DjzAd2UzQg1h42wbgeDbiaSpiyGAVQG9wksPfgdiCNCkq1Z98p6fvnknVmm1Zrf2fjfL4shYiqm68qXKf3zNr7q",
  "key15": "2pxzgFBV5y49HhRnJES33m1TH5y3i2Y8GayHgxCkWPfvvZM9siuAnF54uKVjLp1hwcrh7e8PvXGn5RZUVUqBAxmP",
  "key16": "gSi1mVmF2CFmNDiz7RP13UbQqP3F9Weccuv968Cp6LcLjgoK42ZvRrReds9eam2ncmfy5aabjMYZEwredaeg1tx",
  "key17": "3SRSG9Z7H2gKDn8zKRTBY4VUtJMoDVgfGnkZctMzJL11qNMYo7V6GoKwHenWHB7aTT4YZ6CFyyK8DaMBoyhycU18",
  "key18": "4XSU3FK6vmJwhwiQonL5qLib28NTEqBFKV6X38eXtQP1rWAu1fEQUwg7Ft6omajAs6TFPjN6MBEEDYV3LFurSzGR",
  "key19": "LSfeiRUXkZKd4JFiC8ZgvvpYjxPcM2GhGvPgFoPxrqCL8wLg1yt8DkZgPKTwgymAcwKKSBSoyefXbeXU56niaBa",
  "key20": "4NcFE2XLNXWnwMPnrTsmcCJKMLvjhWYgJzunB9D5giBA4kcWLVSbUJ1vjxrGFYtAdhoPPEBPp2MF7UWv1c278DC8",
  "key21": "3JqWa9HpHuRvHJ4cC6uvSwbEV3oRKrkKzR7WZc93Dmy4dgxNaA6wEgyzoEnCyUUE87RRN8JDr5vsE94xwAeozEgB",
  "key22": "4ZhHh6JfRzHLFfxyzpPCDtKHHJaLrUAKe7bUnUjJDHih8vd2g3GZBd8G5AdX5FWj7idCUg4MB2ajpUjKyXGh1Rnx",
  "key23": "4yiYGpzw531Hk6tw5q2kNRZvNeTAtS9QiXfVzYJJ2sHH9ng3WFet1XnLXfWtfLF8xvG9SgCFbkZX2GRxwxbKXykj",
  "key24": "4jcTokfS9qk7sDHppGvzFuhMz7s6CMiC8XZn31aovLDBsfzTjzTd1ai4YQ6frfiSqyABpj9oMQ6yRttcC5CJqJ4T",
  "key25": "4U3t4WzMh9B6dYczy6TF83v3pqXc75A8Juww4dmhPBWGA2bTPpPmbG9C9auJ5GvLNxL7ndtYbt5GjRtSuMEBBjnm",
  "key26": "5mCxsvDMpjiwpTspg88HphBCFxJEj69Z8DjqYdfU2M2b1e8z11AZHHzJQs5yg2vmBnCTzFHRj6bvZjF5PmnY3kYR",
  "key27": "3LjGFLrzF4g7T8GCzqp8oLJHu6HkS5aBFwYbkRPiz4Lbx4iWmsj3B1kcxBEBdPALSA1XfbP1TnTRf8xPdp5Z96fL",
  "key28": "4XbxVcKRif75TCF2bPi1vVsTgTM87quXrBgxNLvf5KreFVv1TCrAc138skBgSDjzEBAKy2cY2dL3oYT2Hy7ZR5N4",
  "key29": "62EPBPZcU29sH1U3WvwdW5WPKCdEkW5zDpYbyktW1gSA2z3KdXnQ1SoaLG6weUYrdCtgJ1KC7Tpzy6DmuZ8n4PvU"
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
