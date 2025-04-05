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
    "5H1WGuuuATszHyWcB7rpLaJVgEGfQjDWqNLq7TZt5KpRbxLA9tTUbV5SpqadFUyBtmsh3WczN7H9i2FMi2AHmqBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aSUG6jBhLdStQsHE4mnDquirjVX4MrQLCJr7dCNf9Pezvhm3Zg1vcuu2VPHCgPje2GKmF6oJWKqMAxSZZRig1A6",
  "key1": "51gYrDhhjwvhPXUxZ5QV5VFmmPhCbUuRffrnGGbzKSDwR9PiJeEnwt6Vk2DarMkjfaqjvtmq23hHdgpoJF8uhyJc",
  "key2": "4KrtBpbsGV9FgUNYR6DhWrxjNPkepWjfL4iMQRVnm1XiPLXw4FEJhD5rwE2A1sEWnupRjykL2aXNbXaR9bbp6Ncq",
  "key3": "N3D5PuVCAqKwm6eWdEAKaqPMn77iodWH9y9vdyws8Pu9UbFqBNtTSQRnnooNjCCNseNKvmh3G1AqJAUnpyFhwh9",
  "key4": "5CQLYsRJE83dyFwwYvGfRrnT7pUMQKpv8UwPWWBFUUZwXK4d8BEZLbMjiJzHXhXDskPin4RREjSty5yjUpCdNRZt",
  "key5": "59MqfUy34FN2e2QJWr48bELxoMTYiPbSrXhzk8m5oyYdntJUbbXKsEa6FR1oeSC4pcQCX7VKDookWjxDENRJYXhD",
  "key6": "5Aj7b8oEw5hWJrKfiTmg85JKdFCYxrYi9Htaf8Jx2fmUty8rdiKxiATckEKMBftVpTST6aWaqU1DaVm6VRTxESiD",
  "key7": "47FCHXR7SWLtPJwATiQ3ncfeTWQsSYeEfsq8KhLVpJFJizWFmLzTBbKeGwPhmFpJYsG1YRM7fJEmVUk9gEGeUEZK",
  "key8": "2Mkh3SnunjEPzothZCu1s2MS4F3qM23VvuTWWqd2qgAGd67CBipkekrKB5Q9rWdki75p6zcSWi5S7WF8ZitrnaWz",
  "key9": "5JFTeQWdFhdepYSSYFpAQt5uMNhHLAtxrAVDcMqqmouVz1FsKRHsWk32oGQd6a2eNozHZaoBxLLN31n3jp7FwSc6",
  "key10": "5GhvszuZX8mtWcgLRjxe85eE8wG4MVdUCY8Y3M8yX5NJm75KxYqn2Dp4fihExCyfhQkCaaQ7qwnJjv6XLFuUCWvq",
  "key11": "tQrT12eGrXYAB57uMQnSgJQDUFAEdM5uYxArcvctDyZ3f4ahanaQqbZBugEx3yWtj4id7tgQGQm3NWaLtJ5HZgV",
  "key12": "5TGchQLSH8dPRVYEzcwRVXkZazp9sonCrZRAmSdGzehao4GC5gTZY3uPwYttSDey4SXfYaAY378CJbtACgmLUAFc",
  "key13": "3GW9r368qkPqAs2rX6rrYTRzisuK9dGoriJcJ3JqEVxPVbvaTi9ytojGCAatmNP3Qwk1KzPBm73w2LXxg5QdRuQT",
  "key14": "ifCzxnkRw61rPC9c1i5vcJCi4Sh3iwrMFTpGrHm4GTFFZ2Pm4qvUeYPuePiV7zshFgE92ULgk36Dtaxm8wFKWAr",
  "key15": "PhozgPTEXC56bquDhUry6VXNGuozdizDpyudjVwNVBJYis3kBNYSUEZNKgnEH3ZS1gGh59eHcd47bfoChnppgKn",
  "key16": "2jRGLYxeDaLVL33vnjaNCMMNg6CgQtez3Yeua9LpHkcRp6YWDQXNTpqpAYYpZ37wGhMw2yhv89dXzbVscpwrH3wq",
  "key17": "fnhqve9nbU9KENGbGuCTjazPiXZuxk7Mh9LFifrSxBM5Ly8PTTSaYY5Q6x4BTHtg5LPntLwrmoYfD1WxeXEXxkk",
  "key18": "4YBMZ4x7LzvVo5dbgTVkxKHzHzWc9omX4SgszkQ7KFDjHd8jBUibdDLsGWBpoUUNgt6RHsw5JahEnEZaynCe5oYC",
  "key19": "3GByc52bVwsnWmDzYen2qPhSMca9ZebXai2SjuE95jnf9aa3ubRjVteQhBaBqM8F9xuLha1f7XLX95xVrpUE1Cq6",
  "key20": "4GpqRBhReGJwFD5ePVVFV5TxGUDeD48otVunLoQLTtYogY7Y7nRoimmjzTqP8taF7UhdxuvRcPNjtW759BYAS3WV",
  "key21": "KRwJb55qE9dBsjzNTGuH4KU5d8crsN81AfuDFvBpad1W7GWcMhwEHqpopv3dzPtkCtXN8tbXU8MB79WH1Dw9GBZ",
  "key22": "4nKyEFt14cvw7vfv3avLL4krBYF8uTYJHeAeSncoVFiGsnFJKnfXRJCD839xtm13dQtfJf5pP1R9MrTxdtcmG9sq",
  "key23": "3YkgJjmdD4VYkMPLDAsRjg6iYecsDivHBrGVYUcN2y99UqjcFyWV2Q4QGTCGeVNRd6JC8mEbERvKFbAtd66CCa8o",
  "key24": "61518mXvA1XjuviXaZHBjhVy7umpTLSYGt5cBQXyRQpEWpdgxjZ3ciLXxGdwmNYGh5idQPwQTTtxYwD3tgUwywsu",
  "key25": "4N1aay7C7ewP3i8XcwTpTxtox6QE4V5mEc4Ey5fMr6dawA94ZGXwUBsg44r8ABdR2if2WZYCGHFdEhpoHC9QAv5u",
  "key26": "3TUPHvR9fjZHSLt2vbuqwhettuVvexjU2rBjPcvhfbwqAm18YhH7gYtZiXmY4ebw8MC3RApn4g1Tt6tvj635nTCn",
  "key27": "5gqexsMpHveK8tazJAUU6U5KbzgX5KsWrK53XaLBRDB9Vg2K1aVLgf4QPXt3X3zaWi7vvaBBvRPthGQsDrXiSM9k",
  "key28": "5fSr7Mq4giiv1tzKvwSCL4q82PBUKH6PiZMbYeCQ8TvjWk5t68feq4qQp3xh9UmFhh3Zce5b4PAszKfkMHTKwepH",
  "key29": "sBy6S1udWdGwAGLZn6Vmw1cyFVJjqKLPmqeNX4CWJaB2aRynx7a5Mhzozf9BHjs1uzZovBwghCeKe34LUvgBm7p",
  "key30": "4rmRo4Z96PF3m9xYNnNYmx5qogqfxAKz3uTUuWCETxWW2JwSNhZNnA6XsbUj5FwgQ2JuAScPRfqNNM61YBys1W6z"
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
