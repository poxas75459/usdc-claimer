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
    "4FUUHSvHVwgF9ndav6JxjobwajFzceB9igKPSdgBNak665BiNSWzDmv48JAErmgBoS4joxKrWVrjsCrc4PfiGqep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "USzw9ub5FExRxRM9qfZQ715mSGebUqm19gFMu3WyGoxWH6Vshj9ryfkQT2A9F7jGskUd8Vm6wx8QxReETuh9z6B",
  "key1": "weYQzb7zTU2TXWRvvSTP7V68Zfy69WdbtzQC5UnvBPw7Xu6avP6NVVAABKWtfd6BqXep89eETPD1ZXkfTznh35i",
  "key2": "63aeigCVUNtm2QoLcs1WSfr1gHYuSHCAd172HEJ76Ab4mLor9CbHU5khTgwTLTQPH8Vpqc7dmdZFpgHwDTgp7Upq",
  "key3": "3ogfbrbb99ptvb2qxrWXTZaUnrLFMPgQQaBY2bbHx9KEcs3kHgM422st3y1hUJk4YQHyAVQX8qhJYhhdiBHfhSo2",
  "key4": "2Bc7c7YRfoJhF8WJnTkLwkFL1F3MeqW2iDm4goYAkU52xdVghLnJNWXdGCcv8pdP4rGULaYEUyWTLMVcngYdjva4",
  "key5": "4n5G7dDPoGZwXhdqN2AXfY1QP17K9HHZMQv72B8AMaXXLvJnzZTKXHx9KwQfrexPu7yzesqXyEkWd9u3DxajAS3h",
  "key6": "3rfbFDzL55eXzpB5an42pNThRdqf6BWJxmbGzNR4NW3KG4xkCnF8RC2w5AUmWD9KtQuKqFfBrd22Gw1RNgryPhUV",
  "key7": "hARQB31SMVLojYYMKc12owAN91stEy1QnSPvLNaEzMFgvhUtfQFjzCWX38kPfZHysX6s4miZjf21jVTk8kheg9h",
  "key8": "2ruzT1GnPVzwRqHJDSyJvtcHPvqm7MEJbfQcT6kFdvLdYhXsyZjDPTCMrGoNfRSZxKZGfwMiotVeo7PdGuwreQt1",
  "key9": "2hSheixWnsVMWExa3cVPS93mqx3LxaRdL8C77WN3zM8hTuqytkvkzj6PDGLTswJqbYmjRCZjXWhqjkKNNXQmDHNU",
  "key10": "3qGb1HafpD9gc8UeQSia28JDadG3Fzo3gdAnRgGQZkRYn92LXJ6ebhypxqVbXw8hezqn5gz8vdZHM9HYdZbx6JCf",
  "key11": "34KPY5rpfNbbmS8JnXatu68w8kA6QxrqZ46M4eQKKjdQoFeG8qXaX2DY9EkJ55SnYA4mQLxmyhQaeGPCZuwNunUY",
  "key12": "32zaZ6caDxZZYnfeMxbeaahN68uHRQ12NBht26kHSQntEdLCHGhh8aeaEqwrfhzW9NT8KV2r1z8Qiy5ftFTPNtvH",
  "key13": "37bnLW8xW2uEigwEmijhVrnW3uPXVZuLsYeybmsVeF9YSnqUbPkdNyzcZK5keMXfVdw5HV5Uqh5kEvkkfRiP3qx8",
  "key14": "tHBmy7aeHzmPiwxEXRHRxvx6iQCKHn6SfhUSnjDoceMuyGkF1HpWuuZryRkP61DfmV8HPe8WzMz6qxVhteH6ZES",
  "key15": "2ghM35YP8YPX2m2PN22RdfGKFReeE5Yuycvp6v9VkBQM3Fww6u45q62pDx3uuR1vYn8roVYcERg3YDVdnMFTrUUB",
  "key16": "3b1g4qEFK6i6dp5L72wVsXqbLcvirzHweqAopDfTAqexGAeFLAGGg7BFZrhgemg6UW9VX5HNeQBCqATexZXqUQzv",
  "key17": "4m2rTwCUqdKx6AQNJtFX5igq4hAwWsr3xTMFJ8dJycdCK5rvsYWD7LYzUWM1HkefKvJ9VWdn42gUyyAiqiRduGWj",
  "key18": "4BkydbjKWAEAGEZbTNdww9ogeHEXBHCRUmdA35mJWc32XnWxPCuY5gWfu8dehgg8ErZCzXKKAvzecrruDP6GZdj5",
  "key19": "4hsbxt1FS16rpXPF652SyY1caaDvAmgqgGizZLakur4fEpDhhkRJ2S66qCPPNJJ7qF8VDrQPq76VMeVho9yTWbqT",
  "key20": "3tTjtHZvFrmdALa4iXrL6RmxnxyMeEvuZKYrnLxnvy3wVG9T1BF7hYr7haSo68AMpdTBi6Ap92jNaJhj26UqphiJ",
  "key21": "5kBVxyJ4eTnxF1Ye9xXq4Ai1CfDjtp8YRoRdE9J1TpXyuZ6ZxvQ38UAGcktjaZzBr8D7wnsKiQsoqy57zVYdUFnz",
  "key22": "5wr7oFknLS9dxJNE7Tj9iCmGHRPt3DzgomMBMF1rtDGbFJR7fs4oCtR3jySzX51M1iTbkaaHKQk8Grdgs8nHGNQj",
  "key23": "4u93dBVeEVUQ1wnX6dhcHGmtonAYKcxnRe5g8w4o1GwaTEt2paT8VJXpcdxuJ5PEt7g2E9Hrcn143oEsfHe19t4h",
  "key24": "4s7mxdvuv5gwd8vG84XKQpV2Q6XHoSev7KaiK3cfrw4KC6F3KnM5VmjLRuV6tsXGcMySe5EE2WDT7BPTHjn5aXm8",
  "key25": "LkAWLmgVxbESzGwz4Jkib7TAVRUWtCf5AJm2UKD99AN4QgrYdq2v3RFQLhjyHS93hLeSGdXpjmqr1g1o1xouYhv",
  "key26": "4cCEqcqasA76fKryqtk7HkZt6jDs1hrEUdP2RWPPiUn6NbF3bwUYnHzF14b84veDJF3ryve6N3sFLmxFHtR7p9pU",
  "key27": "62mBUKnk9Lj331fKAa7qHSXrfmBKbydneJx6AHcz6zVHYK6brnTycCkmRF8M13GWSfWEnyQ5zowQZL6Q2X18gGzv",
  "key28": "HXn6adQVw8ao5THyJpcwHvLhh9o1SBe2hN4Qtgs8RVCo3Y7Tg1EWuXkG8K1bZQMoonV96CU8sVQFLHxto7V96Vw",
  "key29": "5Mq8ZDV6s2AHykgQzyMR6zsWGb7RpgqLyfLoRuRjiUutfobs4gs1iqPvSTzYgCQADFXWp7pvnnEiFvLyww3jFAA2",
  "key30": "3cc1kbeGfppvUVV973nhg1HRc5BfYQtdBmrGPt6yxkSLwZujcobMgYHyMqLhkzQay2NgEcJcEg5VZHJdWdHocWry",
  "key31": "3A4btTnraCq7sbj4q1C8qoF8bsqTozUnA6UmgHpDWW47Ha6n1SdkZoZpkwXYUJeceebiSSPMRKsofLJbQYpEuEun",
  "key32": "5DcgZ14u9UZuSraCPeSesNz9TFni97A7jxdYc77W8du7FhRLsKNNnMAi8S3P1SeHFwJE3vxTqFuTk8agvrPUduN6",
  "key33": "3EN9RSeZqM32c4Fixr8PerLTxSCTRWf7dbwk14gee24kWBRwPePN1BYvVAtLfRcWKhErX4Yi82UfQ6Wrk5ExxznG",
  "key34": "5Q7QurYwRc9nMZYwKPvGe8Swtb46zkk1JMFfVfY5V8PX8W7SKrqhAqrvfEkEntGPi2ZeHxigBuMTdLJVyxvqneNz",
  "key35": "2bvJ6E1hmcajnwNrGdBBShLJEqjqTuScMgmQKZfEgUND5Uy4NkdgnUYeR7yopDsSz1ysrXfasMmKgPFNxHyfQyL2",
  "key36": "67KjnjdCpAPxm6ejZPk1oP1jLCj9YWPbtZPMLXMBDjZrCTcW5PCi6Ys75V1bFfEoHXmfmGFT1V8nCYjoAPe8JhtK",
  "key37": "5KU9rXVpuYRFnkT3XtQUinfcEApGA8yuvhZnLV68Sa9yMepWu94wCnQz3NUy5AmWzaY8yMdNYrKAh34mSofpoyQ6",
  "key38": "3pfuKkhWniBYRXWpx9rkbhh52mQ1CmVaVkFTh9bi4f3tPgLLcWxbXxHwcWXn6jtw4YSdeT2jyMGxPdqqevwpfzbG",
  "key39": "37nJ9UmNTnVGBJ9Px4E25f4SPNjJJnxGne4CHeLkmgNM1y1Jei7xZzzrGT4a8XKVMSAebWc4nf5exSWzjLukfj9X",
  "key40": "5ibKPN8hUX15XmQuxPfsKXnQdzB1i3p33cQGVwjs8YEe6ewmMETgSVxQaU9L9Jvqhu1udxaVWqqYEEJfP6suNVjd",
  "key41": "43YFeiBEj1G5VM1sushkcuPdoi77M99pAjF8CrB2tmEHUnUK5Yp7TGhCXMxdFRLZcPU67u1USx1DvEwC2wT21AEW",
  "key42": "2eeUA6srtGkpQhrjSACPMG6ZQb7S3qxpig1MxDFTTFFHEWACagQkpV3nZTw4gRvfwDnfwhKZrBfrUKsN2J8sqBbS",
  "key43": "4i1ymEV9NQ4igZTrfJGg8Hyjh9swCU4xYCo3A7KBHu3hGncZ1MSaXmP9Fy7momfD2YL6KBJVpJqNeXskizxQssEg",
  "key44": "3mAt5J78zWNCSmJShUGc94dZv7WXrnipDfKR17acBvFc41m9VQoxuzByvVycPXYiRJcdpVw4f2fLsHNGaAKKgWq1",
  "key45": "3qaWDWnQxvnyQBYpgTnzY24vECh8udkJP2DDnYnPT6Q64QZqP5MPM6K5tc3WW9r9gkPWiN9Ta7Dtzu186K7hTCGN",
  "key46": "mR373gNxhVgAujadWvktkgnCT86BQnR5fhdDD6qH1pb4w4tAgz375BkZTGGjyaVv5BzpjiGjUAxaDXTbsEnuQrD",
  "key47": "2nLcxD5oZQBzCJZTHm4QYytKtP112Qy3aemPrEd1HXMy14kichdWRWn3VjEEvH3CQNg4qkygSazoRNEyKhmziEs6",
  "key48": "2uaxobrmdStzPNXrbS46SkqZso9FywqJvRWiDo11urAK5ZRgxA3kihKTNDmXiH5DuRFLyZUdrzciwQ7A3C5CZ26K",
  "key49": "4u5u7WP2J1LeJ2Yi2S2S4dx9JzcfosRZmZEuz6k8b6f5aBwArUTksNVHLdqZUC5YYbfThEtcGGqn5TTysV8xQ26E"
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
