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
    "38XkpeH99a3aZtWGzpAVcW1231RdCzw8RH5oLuRpfpZpave8A8wv4JU3BVzGoyuEdY3dwgJ2bWi6aiZJqbhcSTdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ceXyauRhYUZufBeVH6vfLf1iyfY742rWPwKwoJe1exvRVUVunwPfaiwxJrtMgLdptoeWxne2BrhxYkFi6xyRTvi",
  "key1": "3aHimea7LfSmvJjtyZdQ1G7W57sT5iRxGYagj5t8DNx2JigzjTemkejYA19UYziYvvZPsG7Devbscy7YvhKp9LjL",
  "key2": "r91nymHTQd9PbWxwv8TZZghSX7H7YZJm9zeZRLqAzhEr5b7Fy1Sp8rFjYXpFzEH2C421EXJkU1WVzwPKUTrKfKb",
  "key3": "2f4FNfUvb8ZwrJ2k8wtevpLL3mzF7uMn35QULkXi1GjnQBDmPjNbEKVv2Zq1mwYjbeDPaD8XguRRbSCQCkmsCgq2",
  "key4": "4ovLB1nGF4bcMEHaCJCwm4eAnUxDd4WWdeBkFsUirPN7MKZHMxNq8QR1hyWx5exH297BVkAVLLqq3AD4U7u9V2Cu",
  "key5": "31t2Myz4PMgqhhPGGVrmh2r5esefWjufjwR365bkVxf4ZAF8cFsgA7B9Wg9VyjB7gxmppKvs3dHvQFfTHhHetMTr",
  "key6": "4HZAGPCtuu7xbALYKj9tAZ6dD77DcneJuexxR1JiaXFmq42rELfgyubCqCdL7yWU5ajLpfJaJXoBo521cAmWFXPj",
  "key7": "3JCPo3DDQXkh9xHkuvh8incDV5VGpK4SMGkKyP5bSCB7xCaWGST519W2Xf7VYL922PgZmzJbSTEZo17KCHX2yoj6",
  "key8": "3oaLXLP6W58kvWBLw5UijSmswen6GMv8h9YcPGwJfwoAcQVKGFi9bqfcWDbQAv8EAjR4tBf3936gGHCpXXWKif7Z",
  "key9": "2RxTremQ3zi1TcSDt59uuLwSt7y9JikM22XDuWJRtMLLnYa8Lmuy88Nt7cRpYndvVmJnty6K1txsJ5hUmTGVm6mu",
  "key10": "2Fd29mxmew4yCVUK1Ng4QdBbxiH1nN4BAL4vaEEXCY2SmWHWwJRSxCtqNpJoodyFEqnhpkoZiTiPpR38G1GYZeC2",
  "key11": "5x4YTY1fkhcv3VC6ZnJK6y1KnDW93bKgceGEoPawZ4sJcAJYFkNw8zw8zhg4SaBf442CAT3kRon7DT4wvZZ2BouW",
  "key12": "4zaoRF7YDdn3faqm8jH8KE9YUArhFd3iPDAH6cwygETB9E9BHaib96bPnKkejuNEsPDjno4e6xb1GyM4im1DQPRQ",
  "key13": "2WLr8tDyXqNbonxZQq3a5PBJeSG8E7LrXkjETg4CCTfk9PpLHSJHnc4QHAt6YNDVWsUYiri8NvrtHCXcnKLyvvT4",
  "key14": "4ZAbEbef4EpP4pCXAw6xurZvxomw6CDiXskTSV2reAeqr5yWRoNocDAzgZk6x5gQqmpN9fuKsXWWtE3KiDxptNUN",
  "key15": "4JGBhm6FbvMaZVAs3RCFMugJXQGLwpHC3LHa1G2CnJ6LZhZLpbrFtehjfGqJzPyDZLb4FxTSMiHqeu3VSQzLgEv1",
  "key16": "5QxH23wC79zibGY1UDnbH8n8YVfYTbV24hT6q2PZL16NqsnLpAVLvezG18TCzQ53MWPraD8AefbALL5ABZ3KVmWo",
  "key17": "4CcqMsdXHb6RzHCAyo1dbmBgg8p8YodCmECLuTHbnZxMXVtSMjjx24rGRPWRkvAYyEEPygQFFntTFy5eR8rHS9Jk",
  "key18": "WeQue8ZVLBygffsZLN3j2JfQn4xp8n2aM6Mq1Q9qQMK84GUS3CjFwvqrsedcPtiS82gtZbFtjKFSQPfSLhEJei2",
  "key19": "5MWNKRPbXWTqfFviw1A6cDkStFGAhwemevKXkWp1qpzFVE4U3MBCPxgwiVk6vMdYgLvjQ6bvz6R7YB3pKqR9Ew9x",
  "key20": "X6hVDWxXBb6vGDuyLtM9VCqxYWdBLAHVuB8dwCetvX3CzU2vqKvzs6vexaRRCw2KLro52QgAMJ51cQzNCeqTxHG",
  "key21": "4i5KDbHkge5tF879menWbHza7rFc3oR1qoj6WM7obktSy9MyPgkyYX6Havy21dDMWp279NWWEsSD5kk4waSZ9GZa",
  "key22": "27hmJRuLrGh6MRnwvKY24j66sRupWPgNG3kKsJhnToWt2rPuTCur28EzdKUtHD4qzH1LkRtbHUQ5LVYGGvLD84hz",
  "key23": "37FpYPY87eNqESK2qBkAdozwcZRp4YyimTsFuXo3JPAMVZKREjVNpXgKByikou3rXjnWQdA5URbAayaHPBZhB2Kt",
  "key24": "3wADWjF7MqSi8ZyfRiydR7pJzcDcVo71eZntAqGwiSZ1MTNUxRWvX2GBCecq2QXEctaoU1VLagEAEyT9uSScdfYa",
  "key25": "6Y1NY2T3kEDVTvN6gZyspAvk8x8aHtUChZw9Vw3KVd4NfagGew3LTcAqmk5Tbyv25tZgLAakSScGXQPvq5mvqLt",
  "key26": "4A1sTEcyJzqa9njKBLKf1M4CX6oHmZuPih4EtT982aa7PwUmYwmXnU6SgNHsXdjyGK8zWXMxuVPJELdExeaNnVDo",
  "key27": "33ya9jvJ2JfkcR4Cx4U24yytA2ET2t6gNLh3y94YMGSoFKawbV8hLn91wcL1XriXpKektVmFFNby1Q5n7TJ3rHaY",
  "key28": "mCVTU6bAjUgjGhuPtpYELk6L3JTPGiV4JwKd1FPELKQBV6P1vhJpTeUET5wi8BM9PNbK2r3pdREhuwi7Vbjsxt2",
  "key29": "2qXmHWCK33AxGsuR5bu7sPrb1UHRz7QmMGKquTpJuvDyTzKrHKmbTWmpXxZNfMuARySuQrnjUFrYMG618os2RE7E",
  "key30": "2rHkbyMgdL5X2tF8TiyDMFqwmVyePkCGPhB8TGB8HoQ1wk5GAYzyakwJLnvontFSE6542FeUmC46CbimGDjTZgbL",
  "key31": "2RAyxsicKeW2u98QyrRP97mNce5FcPUgUXQoZmAWgDSh1YoNEppF2x7nQQRfsGD1JodyWrUeNQ2k4ykyEcYiygia",
  "key32": "2z9CT7EWRAxdUu6jGqGkioFGkppwcSUTcDeYRbNyokkC3tMSqWMETMYUFNBBGdmRmpp3BqNzLTyJzovGExspU52t",
  "key33": "28ubEUW8SNANcExuUmvvAbRxU8LJfqft9mwmDcoX84zr4cXG7M2m8SAZLHWuKouKSmjbvaDeL3tZuEVGRL1XsgPX",
  "key34": "Q2myScLGBKbWNMsPGzsHBP8SGovL9d314s9si4Db7qLWmcJW829ChVVySgiq7iPRiejYBxcmGhzDvmNZQYPdTaV",
  "key35": "4FSNLceXoaFmMvhar73gCrEk65CGu9NSQYSkXcTRtzFyvPvegbPJsXsGvfEH9sVoLCCnBHe1CCN4QvDeZT5w3jzV",
  "key36": "2Ap4fHttv3YVeo8ySFA8wx2xWRfX3ujv72dHqH7dW6m45FYbQmZNFUM7sogQc7bpeDjsN5nZCSf85fQYRNrGb4DT",
  "key37": "3Fw3Qi3hN4CyDXyfSmHxpbjArFWN4vuicTcnETmSgSNHzfQ1J79kJuvMfWJExkHeLgJa3rACG3kmMktg4J47wVEe",
  "key38": "3F5D5RLMeEp5Eej6kRYcpQTE4KyZg9heJAgB9oyVPyYs2MrJtvbnUNE8y5BYxXmbfuVsLQQuK3e6dLV6DevvhU7s",
  "key39": "2f2nZMzwvFT78pN4ExozWsBtLBzHzzegkh4HrB5ruq3GuAyGvMnScXf7wjkF3NnneuL5whEB5abc2QSgdNMhYmL3",
  "key40": "5GWhhcu4v9D5irAWfbuifzGEWt93LxxLz7VFDJ5Qoh26twCqXtqhCwDQzPrBXrNdYDXWwCtQsdNTxAq1LzS9J3Ra",
  "key41": "5jpwSHNHLZd4UhoL4wsxxeAc2Q4vdpmnuWnNn5ihLHTiwJSqCRFE13smcah5G6Ht7zfUxnSkCAvm5Xd66vTUh9EE",
  "key42": "3mA2vWjf2F1sbNLSHxFU2Ng2Z8LXgX2QQpZ7dtyvRuzd8m33eEWx3LoC9Ay5C2HNCfxFn7Rgs9uAZ7zkFwrgbeAh",
  "key43": "5AkDfADQP5MKmGmxJaLCTbUTb6vYZQyvtznUCihNxr18RkmV7tq24K1bmpjugtG6SXSb6srpCAQKGqJmPmWKb3cx",
  "key44": "3DvzFfRe4xT3K9VfFtvUGirBZyy6dppQknk4nwCuffoxhnK7GQE4b8mSXJEj3u5tvAXbovo4fVQHM8DqgPmrpj73"
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
