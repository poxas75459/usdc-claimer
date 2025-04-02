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
    "3vDhCmiCku9Db5iUcAUa5ArJoBBYpGJs8s33vw9UhBA4WTyLJHQZfyEWPFLnUgWhbGvEtGYeH7iHexztm3q5Gp9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M5XVUhUBVStrMbbUxSTEEQvktcsCytpbB72HX5LiZKsefdefcoqXBhzuVQUp7P7H2FmZb8R9Hr2mwdfDrVqfjNV",
  "key1": "5Fnb8TmCXy2eJCPQWqfmtQNCQN3zTKmW4vSLbYFkijk3u4A2NCSj5fK5sG3hRwMjYVdF8zbho72kWygzABqKCBNV",
  "key2": "2iy8YZmfBgFKxw2KHX6DGVNeNssx9yJmQoDmBbC5waU8jSYn6Z1nMRTkmBpHP9AVmM4sNKQv5dcyHMBrm6phNYPR",
  "key3": "3zheECDyXaakpLPNM67hiwKpktpznt7JkjdduCET3yHtsnrkYm8aQJTZ5fjSybcCAxjDz6qhFQXpRDx5A34KXwef",
  "key4": "5BxkLBmzT3gbq64hRR8aQ7q3nvDxyg3u7dVBBPfob8jA92GSR7UxBYZKZ5qgUN5DSDuNrxEhbjLTv8SDS38ECzUb",
  "key5": "59sHmTRD3X5WJSgMZfhmuKfTe9yarFptZq5M2sbnx596FY7UJD16h9aSzbxAeQmn6tuL1LStTM82kqb2SJk5oAGv",
  "key6": "2daDTcwceZ52o2zSS7LpPnAUSpQwqGNTjuxSHJcwf9dcHdobTGaUnvVLH48Ghjo3CH6EEnu19Ua725aZMeESXucZ",
  "key7": "5WCT6x3EJTQtsWtdwBN5LC8t15JvMRqxgqJV7Zbd6acw7Pt8YbcyYwWkgp7oJcJEq6xEF3yiEfKgdRh3kQDFL8Vk",
  "key8": "2rQMcvEdtrhbV7UGiYVUDGkTvt8ZARce4DqGcFBugaUxCizQzqyEdFCDcTJXwwu3CiEdXQBPmf96SZMQiWBUDE89",
  "key9": "xmiSP1gfXLaJ8Q23KuN2BjJGvhkvdAtWaQRUbYFvcVBkGHrXBV67sSaG8ZPC8SXotEYWDmt3CrWZikS7Pcy5J9v",
  "key10": "4rwxwfue8bkDVDn3URbz9YwtB3JfALtgQkQhaKYCxq7HuXoP4GbfYQrffp26bQVk9df6EJsFp31RonNP3wuBaT5R",
  "key11": "YVg9u15cooMCgbZK2JWc2rfnCgrBoW29ppdkf48bnJeHsBZx8A3tSuVW8LWd4EaHsSSSD23WqxwCjujJbBLofVH",
  "key12": "4UUzgkUkvbMr3yD9LFb8d3BvMyV92SuiNcqd73RUb2eF9ty1s21vy7r8s8PTfpqhXCAVyxeLrMB35sdREbLbhP9W",
  "key13": "UiTQi5g9RU4qupfUJVPPxayQYpDPpsdaBeWtXav5WP9UoK3BghbZRzLGRZtafF9itmRvdfo7pG89VxYSxGB2XmM",
  "key14": "5cXMdyVk6azFxQprDHiuH3QW9MrfJdnoZov1VqaLSFHpRU6MPmTBFYChJJ3UAC1Bmb1knRn2Ze5BE4egkAXLbM9W",
  "key15": "5ZWWmHEqf5za5K8THtFnn5g9NSBQCqwjfxpFiDvsYPZJJ7PSaCyFPGXutMH1PvuZ3pzFgNTd5yt3xWsHRF8t17Sv",
  "key16": "2ZUeGz14GrjoeoPZCeB7o35U5MJH2Pf796ACgNXBLNcHQLNhMcG7eRBkKnn4SbQwscE2m8kriQp3whZ1T5zNX4Du",
  "key17": "4MSFt36mep4vm4npeuNDMJJYp7iWXion2jaZGSEtQhv9GYGcG4vrN1noGu1vWoQej8iwaFPdnpV9dKE62b6RwcKa",
  "key18": "4m4k9enHTbbKXevkcrq5kq8tXd5WyBV53CXyAcp9TMcTfAYRPi4ia4jq8URgDKVQRwuh3xpQ4Gwb7nXMzaesvpwP",
  "key19": "49f4PXHWGi6yt45fpqMGLxBZLXqSTEK1saZKTw18sk2ex9fsG5nLNqUxpZjhnmmveJyWWFiACP9C1x2xL5fd1F7W",
  "key20": "55ptZceUqLjqkV9bvhzzufQXACdnPGPh4WWXZUPkdr97mH2A5P8cg2qf8RU14CHKL8G6weMAyDpwG3kM9iRHS83P",
  "key21": "3Kf5fXpRZFsPaiVrp5BzEXKDvMHgVgrow8LZcA59of7NrGgZzCBSoBRxFJSBRKGEBJ3PUjoWijK7JmLzEzM815FU",
  "key22": "3YhqtyxvaEDMDJHtht8URNkzqnh277GvUpj4UpqfUNqJBF3E865vejhZZ3kWyGAwTxGQ81iTD2ncEzSABANmwUuZ",
  "key23": "3jueXjNnHtnNDshHtA3HQ9q9k64yqEZpGHTPpGmGG2q7MwPVGEhMtxW7pQAu6uCjCg6VPySAWwbhzspnJ1VcRfq5",
  "key24": "5ALutZAvzKpm7PdVQJHMEbSqPztNPtQWsE6tbppRez1QNYCjLJbT1H9rLb38MwJzhofiEJ3QMt9s12AQsL11ZfXn",
  "key25": "3puniTUJwPcEb4BKbBwPvxipKZFc9Z8gCJG1tq5wwErEutt97EUrLbKFKEY3makXvURsu8X9u9SjWfpHmASp38QP",
  "key26": "55sSgd9TDMxsaKf8K2trsrNSArtRBxoJ2RFGwPSRtyotxQ7Ti26PwFSQ4UuhB7TB4CRLoFcpaVeb87oj7civckW3",
  "key27": "41G9EdR2AuK4J3W2iVdePuu9XjqV6owFf5uEmu2zXW9298gjSbYaGXaB6J9YtK1jv3ykq6n1H9EVEJTwiP4DZ4yh"
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
