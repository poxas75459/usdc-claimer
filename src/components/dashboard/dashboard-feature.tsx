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
    "5xprBvqUFTNMrYA3ES6dU2ny1DrhtLGi7So3THGsBLEm4VD4PABSXgYoB2aaramxrPYvYvuRJ2daPNFy2LinMzqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iB5Xjxf9GR5gpt5X5iFobscr615yWNA3WXrX7sUWT1tWkMqV5u7D4ZHyAP7QiFsFCbgzvbCdaiQttCei8QJwXpf",
  "key1": "3S3bZWbZ7oW2XnSYkVJpnLWg4jMNuKDtt7VeBNY4mCi4H13v61uWPRhXNpBTQ6zrdX8bxsYbqc8KmxivKknnV5ng",
  "key2": "5V8iXMKBLsRcytUXSUWufiUgim57PHbf3rXbDUaz2v8LqsZpweidUg6A7PN7QmJP6iEL4ATwrajn9BxRBBd94DHi",
  "key3": "4u9WNJwfaxvCe1XCoAiJPDVAS3Q8QQTq1UWhjJvZByXcZ9naBmobYzxxBGc2HPztniPYxZR9SVGVUCD57FFyRqGZ",
  "key4": "3RjVYmzrd3Rfh99ue6Q4fsGNV4MPoumfcCwuawJL34CZPmujAVs7NNCNRjUmVBJo97StvSAMi2XuaXMaggUi5oV2",
  "key5": "5errXnLewWQvHaNgAYudNKcFQsmaWMBDNhi76KAoxmmJXpkcAV8AauYB7P4cLmMKws7egkg6NWziMucUGgA5oyS5",
  "key6": "2r9FThgZMYXX2Aabd115Fz273Ra2edEZxaa8UddtuoaEbdoSvLKH8M7t9FubQq68DUU8nVpYutxPrs3bczsGvPHR",
  "key7": "5bGthLpN6nDRsu7pVKr1w5BSJb6Xju44mpLsiEJ34rzn28iZnZMCSnuiS2T79P2XitrYUcfXq1d3AaVLRGEnawRT",
  "key8": "4UmNm6dKadLurevGXtyaJebdxZbseTJ6NhxpcuhCr4FKpWP5MYX6D6VFeK1QDxgXYKWAD4HuYCJUykY9GdYFUvHM",
  "key9": "2uhHs3GJaGYy9vETVgfTAagZGNvR9Pd7SR6feoHwBTHartTUngGq3xayMW1nWQzfxknnL8bAyHg8rKp8oYJTSu8H",
  "key10": "5rSgmCTGeWV86daDrwv8f7uddAu4SiY95zXXtgyyR3uf3zPwzcN6CJUSU18STz1FP4irP1tsxs2CymMBVAfaHhwa",
  "key11": "2pwAT6rk3kcgdZnxx2DPvbP6XiFFK4h6n242RRhJQGQGBJvbG4uLeSDa4qMsbM9pdmKm8jHcF7usTctkX2bVQjzR",
  "key12": "5z7Be8cfGMsRkoYPfAN8hBPbfBMWdHK7B6ijVP6cbtTgVFWJ28DFN9qrQ4ikk8u78ah3xAWftHzuYUYPv5jZCsdf",
  "key13": "2Vf6ffyL55SY8AVSMVYtHtDQhdiSxLrVvUG17Yz62cq4PPqrJ6Gopr2MZrvYSx8syXNofyDeeyZ3XtsgKLTZ73ix",
  "key14": "4f1KkjfD7tNN4XZ3mJgoDdDoFiJjBmSaVrCZZL7sTDBdXsBZTLG9yfdoPPSbACmDLBxK8XWk2p5KWejUmuGRphAG",
  "key15": "5QJjH1rKYfwVP7kXiogWKiwnQPZJcpwTHZg3iTxFutVrVfrMRW3ovmmNWJQqz8GnzCVa2B7XLnCEFZfuCxUbnWQd",
  "key16": "4Eyz2KJFwSmAxEpTG9yPZ15QyuAcSSj7Y8L1JqV7VUatawHQ2kc2Q48XYxcgJfqGkPXeree7SX66JsLTZj4ijuvM",
  "key17": "4stg1f249nd1AVr66bhphB5wuA9vbtLEf8Q1R9YrDi2b3XcZDQL7qPDbTvNqnB3SBdkZjEEG1AKagtr4psfH8Z8n",
  "key18": "2XVRCFY1qambA7kZ84vEqwaCjbzBudYv3z6G4BGq4QcGhzVBtHJhrxmkb821zWvH2JGM13kVrRhuTenDMLdsmYgf",
  "key19": "5vx3f3xTjbt5ySG17eT25AizNWXShxVwJway3ZhsupVYgreJ9FGnJ4eBvm926WtaBZ3NaBiqBPxGairMdRyLuUJt",
  "key20": "2SbRJuWzKUM7QJMmQ6YE5ynVTswAHT3JGtHwgLx8U7dgxMuc2aVjRmqSci5HHRkMmuHs1zc47JL7bdyKUR4anji4",
  "key21": "AUzQ1Bf1NfvEya2JtSR53fZ9xiAxWjJr9uQCjdHJd45zpyDP8EN1Byr6WEXPrrN7W2AG9P7qp935723xTwmyrGK",
  "key22": "5FGWxp7zsKdhUbSeJZa1XCUQ4bHSNBbNQa8jDETQXrpDd2cHdb3LPZr8N44qrpvhMsmbS53zMX5RNfr4hY56LKCk",
  "key23": "5UVwdoV9v5QVWE7TRjzBLRTVEkjvDJXc9v5TL2oWgXv5rbpPXvmVMAYNSeMmK1wjTMgxjQvQs6FBoFucHhZZtAcB",
  "key24": "2b1H37kNG8S5czf9iyWm4PMo3pjXwq3ryj9rZNqEeQ1VykoLbiyR2wje7XVaPiPJWBHAtPWUGzCL4ivmTASyq5pY",
  "key25": "4Xa3fYMNy6xqXXZJcvV9zYDEBHRchwGNnAPCfJBjHPSQMwNpxSRGWMRNuXpz8T89Q9RrvePzeWXoDMHTyjWiKcK5",
  "key26": "Rz9MfJ4EYTGLDPVxCfpSpSqSHbCwHUNuhk7QTtmPUSTTmMez2B9b9DWFN35is2Kt7ZJXiJCYJzkWc7awEEe4zrz",
  "key27": "3Asrq8pPyK5cbkP1er4SfLD2xQMDa8d44UHfBiMcei64pF38eLwQuYjsYsbspkozuRhM3okQLSBcqrMWAQS455HP",
  "key28": "3dfHsN7VTi66M5AghBwM2d1nr79Je5g9gzUx45hm3DeaNtww5qtNb8gwb2H9fAhyAyHSPyNRKxwdQZuTka4L97n",
  "key29": "2VV5W8QRUijPuuntsEdHtKbgEXP67sq2rfCKKXRKzvoqgod1oHR3hEXwvmUJw1qPiRT1bLq4aAXDQK4oMuq9FJrK",
  "key30": "39X8fYWhyFKqEf6r7W5C94PS2SgBv21u85iuLx3nT93MEVE7erTULndk95dXcacgdmoiVWsaLkxhLYQQhhGkMiUL",
  "key31": "29UgKvhCgmxJM19ZAf8vKQWnMA2B76rcxiJNnQGr74NU7QdqenTtAeZxSygHL7Zjpw5RmUk2hFRttyT9LKMcJ1Cd",
  "key32": "2ujYVCfWYp2pA9XNNfP1RNEsxzMESzBpDqccjeuaXXYzKQBnb2heGGNNPzZE8HPFgxUq954S6Qp5Y1xSL3Xj5MRn",
  "key33": "2Tn15vsuJPRy7wr4WHa5CwsHP3t7ZQWSGAeAUoqhUw4LdemoU2biFkKZ9h38rjYG23oLbV1fj6kFyxBXKStbSetH",
  "key34": "2SD2jDA1dbyZdBLCDJ6TZJ47AWB86482uXuvrX74tNusXQ1XK6dqnVinGM72oNEwFYzrnNeyNULCP5xqqn4jak4K"
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
