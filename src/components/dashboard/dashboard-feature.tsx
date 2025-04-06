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
    "5rte94HAqpoGNJ1F4unbrLsXMBvAUgujy2py8b2yN3CnSnGrSuT62faP8QAg5WtP1zgj9Za2L1aZXqmdL6dKJVoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YnbxdWqBMXSmDvych2p3Xf4mJoJ9jywoYj7LziUWFN6TfoQVX9yLgWcjndBfo42qqrcnLQqUweYzXCXNgra23Na",
  "key1": "X7MEgpDKX4mmNAQZWzkokPZv5EKUhZ7323g7qruosVb2Ptu1SjNcwj5va7cfPTfHboWezcYyscpNcWCLQZnLbcZ",
  "key2": "66fsh2Sy5e3heaQJHm3LKdsr31ENMDGNN2naCuda22YwdZMAhYvvJkDEruvFCfUBLUDX6pTwAU93tBp8FYBN6oFL",
  "key3": "pmDyRDhSfaMcBS6wUkRkNuMFtEXw4bDdTuh7SR33bdSyjCjiRsRNAQaz2ACJW6nMftjzmE6hSD7ZNfdkBcwFscz",
  "key4": "5ENoFMdpE4pfXpS6RKCWHy1p1mLq437XCe2FT7ePMU7BECjZSnGoh9HrFLgUtEEthv94dSR7zzNxpoNAoRimVmEA",
  "key5": "4GEKzEcv7csVSabnWx7UW4mgd3WDLVHBJQJsRnd4AD8uA9eh8BLRWGq5dZVja5XY49vtSJLdq5YC2pccZ1e74w8w",
  "key6": "3K9u2toaH1itstNEvTk2jkxJzGKdN5fnrMPqN1X2PUcBP7sPBxXnnmLcsyC3wrLKzdH2pDFrkVKGK5Z1MBb477jN",
  "key7": "4JPXxUy3hGx2Rq31zZZqFRqCDJAciYDRszoT77HBCPXKpN68KjfUuVdbVo1HZX7Lkba4jxN2qwLwV5xfLvQQTj6u",
  "key8": "4atBScSw4WR3XL5gx3SSffgdMEcRV62QSBz3AiD2mz4g4CbMhGpBn6UC49FT2GCDEzWu6o3dDRnNYL3BiY2LWZ22",
  "key9": "59WN5mtuG1xEjhw9zyFFR4SPTVogWVTWL2rdnoFbpP2tK8GuQBUeAQwAbK1rqvqyBDamvcYXQZzow3eAdAwSKCFZ",
  "key10": "4E6S3rUXjASMYMgaQmzoRguTswrP7St2tggUdfSgaGJMPyHqZBfXVQ4SsqvdAnF86vLrB1AizTDZvCSAc4suXEFX",
  "key11": "5vrv6K6ADDaMipKM3eTYCLajvxaMqQ4MkHrh4LPVk98XxDqKxUay2kWW5GfL66Abd3rqUwaQZQKUfbhH2uDwkuHA",
  "key12": "4js3HwNK93x5z3DcMMPDQssJ92ZCwrPpgowmCYNMeXAj8qfTRefd7mwMv7sC4nNNrWXz42HLkzD55XxhpjqqdgZf",
  "key13": "47pkqgyaD4DhSkcMPD1iXDamSrD93cbjXfqrXGFnzum6PvZeLB8tfEJFJZUWQ29TivGT5X7FXizsos6cuXLz3Da",
  "key14": "5Tkd8qxcTs2SQy7zwzm3Bo91Q1jX4FkWzkeYK62YZ8FE1xE8tEAesTvoaQSJcwUCfFH1Ebmg4V1zmrghersfv7Er",
  "key15": "5JvwwDt2cT6grQn5XkTqgDsJn7TpyDWc8tyNZZk5BJQ2YttyfowmrL48U7Jo3FtW8yYCyA9bwPvosLiaMUYx8ku9",
  "key16": "4SZ5RVSHRcpVDmGVTLdqS4ofAXEDPWHuz9mf2kv6EMJwA1txm1HW7cmoudxKciGFeJxZV5LNDTWhnpcMZrDD4VKj",
  "key17": "2jEbYsu5YTb5DjqHyq8YqHWjUngrHPXejyv5TPctphMG5Tv9Q2SHUtxJY2L2n8k4LHDZY2j3gjCzmCRDjPUVHDqT",
  "key18": "42tzWgnzeoTovmXchoxMjL7fnAEGW2NVuWwxBxWEzr6CPBQy52Hn2XiKqu1xTfzqqkeVyXmGc6qd2x1rxnsGEae9",
  "key19": "55XU3smxnHpwsvkBFspZMaS27UfnjSF48rn4Bf4kmkdrcqjVM1FFn4UfbSH46rR7RA6yzBa5zqDBR2jjLsSNetEd",
  "key20": "5VL11RqN8moQqyZ8aWqCN6SenwNhoT9x1PYa7KxUibrajW1DXAwVQ1PA8miPvsHkXMSj6M2hePqakw9nukZvWu2Y",
  "key21": "HzwxQQLY3GtwFMJs9kFS1vBd7MhaPWGxrkn46pppEmdy5muHmMv5H6rrw1vQUGUZRQXd2TpGobA3iKvuHQj7rbA",
  "key22": "4H9Hmyjptwob6kZxDs5XYK3xwds7WREytB78AckqtrVrDq1fAZYKphPqEK5zLM8xHrqmmpGRB6FqFs67X6a4Lncc",
  "key23": "5epdZnLeu2PvCey3u59td4d8HQ8ep144EwwjB7YMYSyxMpMF54mEpnD54d2xZ2MoSNpB2nVnCz2pqDGK7eqhgiCD",
  "key24": "5E3hXND4LrTGgjLnDZT2c7XVDyVt5p78qLKaa3Norjc8Y5PwNrSt51j26MaD7VB3i4bbKqMvkuZ3zL9Kd4ikTKr2"
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
