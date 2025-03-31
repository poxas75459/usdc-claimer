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
    "3pJ5ATWSN6b3akGfiFRfqJs1cZFR6WpKZKxignzRYmHNd7RK5S2TjRj8QoxQvpPTEu2nqPsgV5kmEerDU9QJPnh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YdEJe1e4xKSSenhj5MNGJNg5deiBttHSYRxRo9VppJ3sbdvoDEnpk1N2ptTMysmYWYUTTyVRCHwTFRUexQgUapi",
  "key1": "4UPLP5wA2j5CieSEydo2gMqvLKRgFwcr5TogMytdpWjQPQrEWmuD1cPvQoT2yXmkzbbSRniCSL52pY4f8qei5fhq",
  "key2": "5i2AuNNRYHzfNUydaHz1nr8U8A3YyD8pwbwV9qa2NJZ6GwHHZbFquGQHVddMwCLfDSK9A7RvHKb9jfiownjToedz",
  "key3": "2SnXMxvZbqy2huC4DR9DW9ut8JcD2p2ViCT9HdLxB1fpye43RGuyfS5rjmxnBZMDMYiELLZsU4DxHuafyqMX6cyS",
  "key4": "3kssjGNuzKstcJkH7hdpb7T2Y4vVUMKk4xfJsUfYZFgHgEhdUnZWUqR3nuyZzdYzwoYkoQ6NZnndvbyxpjPyNXc7",
  "key5": "3t2LNwX4fGarUv1cSrQcQyLTGjRwA6FEocNXMAnDKaVKCwaLoDuwDPCWQVT975Zf5gArNB6JczwGhn3cs1h8oVsp",
  "key6": "5CNgK6KdFBQx2Ra1WrQsSBx448nhHMngesydCMLNBqccD48C9xwqoxzcgYrawHEBzWTGMY4gURk6qBxWFbnTJMFu",
  "key7": "EJrfCKxHdDLWsHMazTLMtbv9S4xyworq21h4FieKDVsWTEemkGE13iqLHp5t5LzYMozaxDXTtFvJFUJJ7HNRqTi",
  "key8": "25NFe5uruVP2yAnPqhHPM3SLJyp8mdJtr6UGZ7sAFc81Rd8pRJHzn3Hmx1528v38DwoE5BoDGgNCtMiBwkPu3ske",
  "key9": "2C2ZikDMhzof8Fs3zDgT5ZGjF4UKvBBnNUj3o5Pm97UzuDLwJRzdNoMzn2EMBdZcmJbFoY6JJCPUC3451GnBp8g5",
  "key10": "4VKKBi2TqafgEuk8Q72tK5pvjZmipghys5Hu4KnYwqxMrEEWoa8aRgJHPd84WPdGkHwDXyKVWqFTWs4F6cXk4MoD",
  "key11": "3kaxxhak5Kn1UbAFckU22T5JcDEKMHcQWHavc6M9Cu7DMH6KyLUJtRyMTsns83PyLbh7jiZN5DBh3H5qahepzhze",
  "key12": "47UfFY9uEY8vaZL16xwsPxZDFRarYn1tg5562kHpXJS9zGmjQZ1SGWfgVM48V6sNuQmjHs8H3AqhnPP1GiB69wXY",
  "key13": "2qujoij63vmoNFU88bvL6nt4AyQfi1n93fFf2dKVmC1D9zFgTVJxBYvbpGE9v69fTiPgVpKLB7qy8jkjka5EjQXQ",
  "key14": "3XSZqafzoUocCHLef7CzXfDKWG6kqjkpALH1J3ZhAf5K1p8ipJNjCr29GT86FEsK8XPDuhpr6sQgyzL6VfAuercc",
  "key15": "Qo8UUA3KKNPMYbHdG6pKWqupqJyUaRavz8ig1GNYsAcrrvENEHrdvL7uQVjupXqW6ZFsoCABZDvmDghMc32zRXa",
  "key16": "3yooWmeswhmEJyptF1usk3ufwVqehm26TVVP5jWJGngWj71SKFkDyMtUrhMoDkbBecM62YAxqvMHVosCntT576KN",
  "key17": "2aP39wWVYariN4hJKGqeA6WF1WwKERgfiqGXx7NTCqiLN15b9ZKTJTqSVqXS8iL1QZudTYcLjeKHWTcp57nc9bQA",
  "key18": "4D5NS6wiQvoQmu4nYDLuJzj4S7Cm9KwWEVLnWEjSpuSdu84AR926fg4PvCWzK6kJVdm13wq1jKUevFzJC9rGcdjq",
  "key19": "3PtVsrCu9YD3Ei5aubEeSMa9moAAoz78VBRhqSz1xSVe518idbuNRXLAndVwBvpj7V38M4pTZzZGt4jVEeeBJaR7",
  "key20": "2aunHywM15DU56jfAxYqDGzuYgKMzZdaApQFpoLFvTsu5MGvksgHEwdnPcCEtshzm3BDLdaWCZDNw3nfbS7CxeQN",
  "key21": "ZCgyKBaXqy52f59BZ6uNCpyeZ37GARrpLDh8PitgZuJVox9x38fAt21r4qGHKMn9pXGD3phH6AL83c82pyZ6s9w",
  "key22": "2K3D2u9LnYCKTKoapzWtc8HeEpgf2rzj9Uaf84btRbRd49DSd6Lm1AUWpsMDdg7KPXN4zuVE8zafxxkwwA4dRuvz",
  "key23": "3tH9NUG2iLZG2e9TQhRz5jri2bogiuWM7q7EHhgmLJhBSnRS2xHEM98rLSE8ZAKFBMEURVGDT6hi8iPa8SLpiqR4",
  "key24": "2v17rgqoKafyHWGJaLrt8FZ7eXC3ecTPXefUi9FzPM7iXxhPgyWYLEXSvAeG7DyeizWCkTLohjeUQvauiM4gGBKp",
  "key25": "33vVVouPwe9FAY4fijQzZZuiEnq8bdx9ejYf1cCmTELx9imeBhd2Z8n2feUEuUrHGd9QYJaYWb6gHviMHanRjFoQ",
  "key26": "4TmzozJk9X9FqbyhNrhfh4CUxvK5ayY6P4nd2sx78dRcRMivCzWoYLARoC6SPHujjEY8seYvpi8rSBRT9U25jEPh",
  "key27": "2cvTSz6EeRpxskSNuTmqemgxhNzUAhhXmUQtwmLNSioneebd7k8NRPRnGMx4Ag9jUJkeHyeEsjKn83jdWuEyQXmX",
  "key28": "75P8gBkSBxoBwoDdRjMz73jjWKtGAhQB7ddGzqjvRxwcH3bsJnWQYCdYkMcSbRqYb5Wwo5YLPjz4XdJBK1RpQZG",
  "key29": "zyPCkuBsH3FhPBAxDWcMUqbPpoG59BebLPhfot1tcWswknDnLg6n5WbDErcAQXVsWDGhMGZZjT8AvUXeQtwuG7b",
  "key30": "ch8xZnmH7U2TgLF3KBdYuBaWi7qJczbJpumrZ9XsTvHqvZGW37EBNSwwgBLcoSm39b5wGWRByvKBsvQaHCRgLPu",
  "key31": "5KBNcd6U6m2Ja22z9tc4EDdbTkFLzZjFdFSMj1pmFLBpApvdUXoKZt39PE5H9qp6ktSY2tpF7JAY6yNm6Uk2Z5Ht",
  "key32": "417QrPLmSSU2zvxCpi23o59E4ppmbLtuuX5z2VT6wsxW6FtBr82XgPWFeCwpqccEThC1HMJsh62MK9VbD1f5SRXK",
  "key33": "5E7aJPYFJBrYBavmSkJAUJVKPQVSFq6BxRFBVpSxU4AFG87wf8o4HYJdNzruNEWopsQneJCEqGEGg23biyGgsTXG",
  "key34": "REf4kMTNWKnQMiDn8bTcn1nrZdYNkarCfPcFtS67SCc6FfhNtm4zfuQAaijk3bEHfNw5sCJ6nxtZYgsGBmgm1Ei",
  "key35": "AU45N3Qceme9npj5XrFqm5wYNgrCA9RDBxrS8xtoTsJaGSQ9jwLf2uDdJEuSgtXdNRH6Aimgz9jTGkNhc23aL8f",
  "key36": "32vWb5GTbGcWJtTBGvP8oqVezbrJggDRMQ32ivZbUaxS8W3sXoEcJNfZzgUKG5bJsV3sQgCpJdacVnPZZRAewHes",
  "key37": "37FaG3DGQmM2D58AN9eetUDwBRac93LC4KK5QqXH8HBdZRJZpq951BiXHHhLGngGjRhPAdyB3AftojZqorigqdam",
  "key38": "5wXjbCisj8giA9NEx5AhJdkrzFkLwnvrmVq5Wx8onjsnxDNJgwfDPwdpSTgHaPXiKLR6b1cDwiLbB8tk2qfN971W",
  "key39": "iY94DXtUuSGhkaTiQP13tQjzR6rbk8VwP49mRXfr3ESfRdQDLrGEBX6kRfNWzozTV547QKPEyhcvRvawCJLmmjj",
  "key40": "2qx2SCr6kiwKHeZQmAm3hyeM6zKHpA6buQiZK7LwbFL7D2QuKwicr2pGk6jpg1gvzn117VtAPSUFuVFy32hMxjpA",
  "key41": "562xyxdJ9oN3c8VU7GcA3TxH9XUB6WaWNQ2CYWS3txReEvyUWEWHFKtee8aKahHSVrFT5djBnHDBC4YqLf7BMN4e",
  "key42": "2uJt4X1VrVbbSTmuBWtwNhWp24K1zs2z9PMkZgx3R6Hgg7ZMGwsLDddHmYkUT7XmNk6ugvD5vBea5bXqxGnd61gD",
  "key43": "57DQppp4dkXZ1DQCyLfnpSGVGoJ4MWm3TSqpuvyzGwf39SBGfbQgyw1wtBoNowm7WPXqnvbFLXqx1stZtXDFPnGQ",
  "key44": "5ZRX3uEnAUmFUhvoU6kgnkf29cQ1VS5DHLbJEfAdawBr4R5PbYcksev39TPtdCKSCPrJ5fneXeDMwbjNcCD12oT5",
  "key45": "5gSrM3tZGHwxxPHn7CyKVLWzM8oj85RPBiTpzmtDUpRBnYhfkHpJecaNtj69yeDDJdt1dg2yL2NDmrQmGCkZdyVg",
  "key46": "4krYZ9xujMPoT23DQ7QohbM9daVTgoNVSKv3TgySpmYUxmkXqvwSeHeXm1sakL1sASUz82F2mpsLpbn8ncamfDfh",
  "key47": "5mysVWketragvprBkKQmq2S7Es7ErKEfHmE2kZTGWLtGhRDh75n5DoSzHWFFhP2bPeZpTgPgXEfNWeThHvHGSAVp"
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
