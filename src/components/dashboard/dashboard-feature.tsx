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
    "PRVvdtT9PeRyXd6aW96E3YBjV4Cio2Pv9Yfn9Rt19jKQnfGsK8pSSyWvwwLatoyoHrS4CCn96DsZCGXizbhwhiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sMwuGWYK4HBN5SeqP2rTx4Jb6aDJtfgtRyj5CZ97nUo7kNxviGpZ1bp6DB1cvfTxcMGymS1vxdL4W33hvzSe9kJ",
  "key1": "5ZAMKLDYEb4xZYjVLU1s2EBCgZ44VtRvaSz7BpV7ht8uCeupprj837EDXYUXXyyAX4jX9EtyFvu1F2Ys8YRr1hmj",
  "key2": "4vZFvut8kXUxc53AATj9UeE3Zty9V1CGdnR9iYEU8XAEHk9GD97NM1QDBbw5w26po8CVRBWkayqMHRfGxE3gN5kP",
  "key3": "3D7Ei1PbVCLVEU4c9UCaQwWEcrWZDaU1a28qJLPpZ1C1Ay3afhEaAjNJTxEMLZk19mXji9Mfb9bA19WnG8Enuwkb",
  "key4": "5XYw2RfPW6qHee8Cab5PLBr7VnXpKNg8A3VVBE7nbMicpPPj9NLRpP5iziquqMWwFnBGn6zf7uUBLqGoc3zRntdQ",
  "key5": "2cQ11pteNYF5H7ZUT68JqESQD6xD5sDpV8Cm9BqqNCGPoEiZT2WtEchgo7roDRGA46RRK3LcxooGAomNLzH1dTzV",
  "key6": "3bfc5qG41wugCwh1WFvJerDUJ2VcEWf1bDhCM7dbyMouXKp4gFXdJCPAt2vpc6SP7vjjCzmhqBFnuWD3XpWPn2DW",
  "key7": "3hFSNb1uiMKF3MwJt1EHMSJZtNetfTYGkCArmBznToTZwvy2axwg2qeDRJjCVZ6taLZZtKotjPy5c1shhn5QePF1",
  "key8": "4VQNBdWxFBrjU8C872a5UaQ1K9vZDhLAu2AXL66XszRKj1iCU2Z4VmzSvWdEjwMAtvYgzmLr44wZbLf5HfaFc3LG",
  "key9": "39dYiubjkM34XvqXhnmAfc79VhoE2CtEUsjdtShxRYjmkjoZ2EALdBwfgFUkyiCT9NK21zBZP3AkReini31jWjft",
  "key10": "3kk3WYCSFNn8ajxAMbuw8rs4nYwbXoZ6Dm6v9GSKH9NPYmYB98LRLTc8wRfKaVzDKN8ThuQTHKSk6fW2tU9zdLpy",
  "key11": "2DJXdcXQaf3XomS7y6uc5yvPWwjMBPFkJE5Qx9fAbT1s9uvtgD1qn8cWtJxWJ2FwCyuebneMDJkq5pzusajeiAHb",
  "key12": "3WYUHbVx6f27SPEXutdtRXqfkYgXozwkWuM1k7XbrYTWHDcS2Acj9QvvXCVEokurA5jFotxDWzwN56uqEFafsnwE",
  "key13": "2c2DFzt2nJrUQrh7CU116NZXkGk8doPuqrvZBRdWJathhGsCdoGBv8Y9rAooVc1C893ttr8xBsxuT5617UDx3zd5",
  "key14": "4yDPyD6MLAEvoH5qPyztre9GW32wSRe8bDpNbnoFBLbvy9B7fpPbrnb4daqsvfEdGcC31eTL4uoKuqCGqjg2Ecej",
  "key15": "aGCJgJ7AHKXUJ9kFJ6Qinqx9XUfJhBvc7X24NaVGuD7HWV3m5zCvHFQChDxjRoAkhcnMKwYFqm9RzyBZ1VrVPZA",
  "key16": "58g239Dqo1NXiPdhu2V6nn8rcbzsfd8QoQzDDUbSGDZbZxB3dsR7VyoDA8nJt98e6RdY5MeKizMQtcm4fC7rVysu",
  "key17": "5HBnDfcb9fR2vDLJeKAMjreCbaRNC29TGDLsuhdBL5SX35Z11wPrPZjmb5sQGRztRQoFbjicEB5ZbJypGXDt8ndE",
  "key18": "2hTAUmA7H85PPRjMqjaEvv6dpXZMNfdpvSbHZgvnWQoLqe57xdCrxW1ffERNQXmepKCWE5vToW3yzwS9GjXkwYph",
  "key19": "3dgRC37vuqrL7nyPGDPv4LYz8jck5jJTHgeKaDcxvSoTeyhEcoi8u74RdJQJ9khtX5TwBavKVnhGWXThmiuCbvSM",
  "key20": "3rRJMp5Gncs9rsNUYgkk7d76Ndzy2G3iV2VJsaXV5TPh1SCuZF8KKiSypVM2ZdLtboFJqTfZLKiyqQ9CJjpP2x3r",
  "key21": "49tt88ssLffFd2kDBHACfyJ1t6aktp35Hv2VERRGhAMk3ApypB8jQQonyWHaypYd2VcQxJ5Sp3VH3D6bjDEG9D6d",
  "key22": "5WARkLPQk13U8puWbf8Ru55DZywFptGTaTbBQhRHWSPjv4BEdQaQFCjWARcF25tC5wHdgEHjJp5SYW6t7qgwoBax",
  "key23": "EvakR1L8CGLE9EDSAheXdDtwLBLE6wBA8Y1GwVb4arsVtvxvLPCqqwrYn12uYcwWZ8K3s5ZRXMDmeQCrEpNSrwf",
  "key24": "31J6Qh2GfsgusymprDmXiu3vd7QpqY17kiB7NghxdsQW92NLdLeakWa6PCdUEHa9FCjGf2MVw6yhARWXDVcM1EZg",
  "key25": "kXKNvWQAPaqSQAKzvb5bMXv33yQidbnyEju5Bnkv4bgd2yTCiQeaC5zvtunrdnk6PGgAHMKdd1zNVo4w6K1bejZ",
  "key26": "xyz24vbamSidHzTDDjfUmooxWuore94drVJBYmVEA332psDR8nJxGPeP52MdFfQPHAQjkyGxJK2Swudy9zNHvg5",
  "key27": "5kJpMjH3CWBmpf26QRAs7vNdRoVvTmtyzT5N7B79QTUvXgQUvVFWBzviTTpu5EG6vjaLrTfc4M9KUuJ3tFaHA87c",
  "key28": "4VZ83TwoKsTAueo3UwabtbrftzdHx7iTJfxJ4SiWpfPHXF6FmNV4ZbAxzMWeHBnB8jb87mxnUkXteyf7tDCDAL6y",
  "key29": "5EFDWGAtSTj5QoxmpZiUk91bJTxHpHdJwB6yRhnvaqexAAjvW84q9C7tJiJKxRrjxPhXHkzxGUZL5v7ref7yJQqK",
  "key30": "5535SpHEoo41idraRhtkHuvvPVEUfjKsRuQ13Hv82d88yyEpg5D3v1oAW3uGfxy1aq5xP7kwQHeh48kgRKqaiFgd",
  "key31": "44wxRMqnwTrYit7PFiP6N1mMD43LnYoV5Y3dLeiso3UawyfbX2rZNBuXSp8LTQFJz1wk3siCwV3mcVk6Y2MAHkXY",
  "key32": "8yePCSPXg3ZsqpcmMrYZTJmyPp812BdzWvcEoaMKUcCTt1RwMEsEZ2E7AujvF1iZP6YuHRrnXTqh81V1nFZzoZn",
  "key33": "3VdnHzWr9mkfZmCtQ9qVavExaXc4B4DLfqU6rwYQHGyX8Ss4HQomGLw1X3dYJXu92HzyGEHxwnuNPsiJQDFVqdWR",
  "key34": "5RXVfVEa5Bu2ZkiQH2QS7X9gsRBBc3YQwPNNmjnYnNYBDkqU58nfdYKY2wYmpR6xiXbncNppahNL3K1bKHtwVmwa",
  "key35": "4yYxuLW5XMuKdCjrXJhS7DvQ9s6R1vTYXZDNWJcoXzLd6DB7ronRUx9MERqUK2JQYMKhb5GroTRYV8AzP9DVqJpt",
  "key36": "4oDNDTZwzGyHXiebjWJfyNrVi2Q74SWmHp9DjLELucehJNokqj57WweeTF3pXFMVDDhRpiXUsjrsQbyquvLwBaek",
  "key37": "ZBVT7HgiyMKXCURAUY2Mn6MkakERnFzbb1n7wh865X5cmhuQ5fTCEk1hatGSJ6WXtvx7uMEnL3pmXQF8yqS4xed",
  "key38": "4hsQx4osJ1QbVB7y1mfZnVnzz94zJuddDjKBn51rcVyWxEhJ56TTWPd5bgUcFJsTYDV9Z29YdPixchvhDL9GmKQw",
  "key39": "HXzbxgzG7C7VtxaFgNheS316kYUNE82unsSfuduaoyNEwxr4s6N2steJ6GNRXrUbvBLmAkuzrfvjq85KQHtsPxT",
  "key40": "rGrq8YK6cyWPhw5zyAfRKdjaRbe3xouw6My9fYoPj8aaew8kpRtFz1wfktciPgiMbywNDXHNLPTRxj9XJ27qUqn",
  "key41": "Ytqp5GYsG6woRmQAmckLVRCgryimBvEKq9Tn2p8g924xLE16Gvy4rxHtwt1nArcndVvaDhkk83pN4DkPhTrBQaX",
  "key42": "4DnxMxjbg8sPJS3yFPRhkWTSkUr5YB18pkFjZSKf7Rb5UcScXfMWhedqn8xWZGLs54rVrrJWPs3oUz1jB8K32Jor",
  "key43": "4SZtmFSQ2jgPTSMpYa9Bx3ESBGDXiTzuHf5wMPDPq4tP97YkPWz2bdzSGa3i3H6Bz6CF1G6oa5JzKGxgw3NNKjC",
  "key44": "3NjPW6vWjcoi5J117ugt1vQs2iDNzVa3744oswShmmtMHqKgvZ186udwbSuJpX6XZ9uTRQpyWWHw6Uk1SWyfeRuE",
  "key45": "67astze27Cc5VvMtuo3hjRbH6gCESpbEJFJtGdUcEh4Hdy11m98nYv1kkFkSCLYJ88S4D1pYsiZFkZsmQq5dLd1t",
  "key46": "gzczvoQ7kW95SVReXiAbe5SJaC6AbFQQDmS4xxQFpoqXBcJx6gr1jpctDGxsmgPeybEeWuZsHL3h1BrsyWULhQ2"
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
