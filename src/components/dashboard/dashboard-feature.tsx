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
    "2YHuyuKcMtyPCxf1kWeAyESapk4sLT6G2ePguCsEmcHwgjP6VD4stFCzPKWrVKGy6J4ke7KxiMhY4GM3d3rp92Km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Yf6gKMQA3yRTUzm1riCZDcH89FZm6hnY8je2uFUyk7vdpU8JHGeBpZfHLnouiRz23ttSXGe5EzotcMMGipNX2H",
  "key1": "415T9wmpfH9TWprN93FDeBT8pFvVqYeTg7DmffdBkQ1JQSGDUBdyJvptA1zK5zJkKVgetoAF4x56RcSM58zApUdQ",
  "key2": "33W639fFfnHfpfy6jEkVMHmdXVng8cPUhDHMhu3QsTbwVrhwSqEz7JWDymWv9Wf1wTxuaJQ4EGTukeenmDWbmvR9",
  "key3": "4cr6ppQY7qh1JeFQ5xu47bbGN2QFzniMQhahypUxp2A2o8HMLdtK1FRGFycXKSeMRPx6xcuXqaik1bhdrTSmKaMs",
  "key4": "5zYXrMKkA9Gsaji4qywmTXLXn9nPMGo9vQbmNKC69Y9fth1mw4dopZJLW4r7H91mWDzSX66ARZQ1uQDfBUvUXcGC",
  "key5": "3Z91wrriAHphRtTv5xQswrXHPPFPxCTHRe1VhyKe3XNof3qRQe9JimqJiaFL3hJsmBihbSmSsFitPgKfKf8pdbya",
  "key6": "5A7ttQDxmDRV6JzhGAQ5dAzcvgzzo8qaQWE4B6JM5AVN4GURQgtdZ14giH7RjpPtoynFxyAtFBNUkKyhn4q4aRkP",
  "key7": "2k58QmJf5yVocbnGKPobrgAkdCochthVVtA87NDV5JmUcFgWJR64X98AA4v17PUTbtV4AWWJif4JBeG3vLvQXyXk",
  "key8": "5CK4BbgVEoKdLD5U6sFWgUUfRYptB4y3ypMj6WrGh6bvxiexjuKWVD7FhKy6c6Shk63DfdXQVnoxVs6Z9KgrxjLM",
  "key9": "2DoZrcVtoWfCVJwdKfqrKXM1VuRhkR51VeR5zW8LxvWxQPrCWbbQXrKxbX2PL7ueFxqvcwLEx2uXXaQgDN1Woi7x",
  "key10": "wRP1uv3yj3fEPucnVdQrwT2JBLecmPHssqxdGXyyWgDRdwnz7GS95b2T46QfSfUjEtrnRE9jHLZaVv7qV9cwsyX",
  "key11": "2HedHAsYe9eSuhwv5FVjETohjrds59gGaabVMsUbDpHWuybtqS74SAAPU1fcyTVSLjsGenBtJoJuTMqoda12U43S",
  "key12": "62fPsmkvhwKxNPbpPkHjFwZX9yA2Jgt1D3xdZ7hv2eJocsXuqq9hQzvAWx1X8NDbdYhA5mVmtiJ8XkEFMybSyt4o",
  "key13": "3p5x4SVCWoXdDcMsheu7uoNyuDLo61rp2iTtVMHArLDKyiG9M1mJji2RZskXzDy6CTZT1A1Ly97Nur876UfndYb",
  "key14": "549vAk7kn1K1mtkPiQW7TtA6TuKXsNjN4ehCrfFV9nir6SEwqKvFH1AteK8pjs8U6jA3YBrEsXuwwBtvP9fgHBpt",
  "key15": "5B7qVzRoRqBnCQ6jXS8GS2Ci2Y6bB4x4JZQYkxEtizP1oXUpBTC1SoFb9aAyptiDhzhfQcUwsuvM8hsDtgGq3WmS",
  "key16": "5ysSfnyBvsUD3N9VcYciSKWbDpLQVdNHBGVmefbhGJsmLzqJDaGDhK7gEBupfow1QUurtGCMsX64gfsRGfYGLbtL",
  "key17": "4i4XnEo8jtJQg2SKhW6Gwa7BHq3yYKL1gsahEuCDUaeafciwrmy5i98nsWFPf5ZgHiwybMLs8i5DLDecFpnPRKap",
  "key18": "GVmrPV6SbNHq5RvkdP9DnbhALG4H96ws5hBZ4Puuq5uAY2U1Vg4hBhiAZcwxNVTaLU9fKoqGtx9UScqiv1Az272",
  "key19": "DcgusWDSZ1UAz7eM2dkXHW6Z5xVwy3kyLKchJjvbv76LTEbfdiVGGEGzvFNy4zhDU6P1jbD3Q2Z2LpT731rqT2y",
  "key20": "22dtYv4Y3JMnwU3vQdziA8E5LKTqoShwrKi29ZJYJpXFvkVQm5e4vbg7TAPtEjcjsiJ9cxz6LCWPkwXAakLnq7JC",
  "key21": "5nBqjYtfQajfT7nTmxM4scK21KJBxsGeWaQRccXuno9s9CjnURDmMnZgNk5UUusrVSL2Li4Fmh7yoVTVb28DVdjr",
  "key22": "2rqxrLi7kcSZ8GfmdvTM9WWGb8pmkUY7iQNny8pyDHhb7dP1TPy9xAuxAdbF2jCzJfcBvr7ZgVj6uZuoQi3HuvKf",
  "key23": "2GEqs54H6Jnby4ZZcd88JKUWJkdAWWy4QuvZ6E74wmgnDWoV5fct5jY39hiJK9d7AzjDJDnHs7AWD8SgnY5cMW1A",
  "key24": "2ZpPAkz3mrTjsvyD9fndMUdGU5LjJ43g9vKgqvUjqiBwYFDy5vD2rHhDickkXsJY4ZoHuodiH5YmogNo7Ns8ADLu",
  "key25": "jowaFDTgjLDHpnNQLt7J3KPXV1s9nKWdiQeh2t1FDYL3W2DoRQ7R5fhYamNtgAZQeCkKMh7KXDEXtciP1D3ecM3",
  "key26": "2sb2eKNBtSYLJtXH4mENBJVJjQ6JhxKkRjpv8sw3FYjLXCU2cHpU5p2GTxxgtpGLstmWrwhTa4GEpCsXDxjKxURu",
  "key27": "4s1ddqn9V9dMBFDTvkw1n43K657uJu2oCxeC7ycBhu7osbTZEbcHXS2jcsLCp9Cz3y9tTb2HmJfk5QRaZ2HnCpUc",
  "key28": "2aQweTAtgPVhBiHfCcwqNVftt5TBwt5GceVSnCpWwKNAyerNSbMBJ73re9sNx2i6jAxb2HPZMS8vWrNYacxYSD2y",
  "key29": "2z5pR9f3q7GAACBJ6b34Q9K9UQ5KnZ9DDy9mEA1bCtVnWhFqWnUJ3wdC37geQkbpQP3typH4GyHrZuJXdTtaSxbH",
  "key30": "56Yb2NVr7Sbr4DouDkFPEhf5NTqwRA4YfHAfaDKMsgRFLRffTTEy3XyJZ7qBTcyjZ59wFUjdc8x3ERxH8U6nj7he",
  "key31": "23Xti68yb2UHYtQ2Kamwa1Na46bbnwd4SjSzvaikjp6BcpkAjW6C7cFkqegUPTs7SC12nPCeo9FLpNoPdKn7GSX3",
  "key32": "E2JUooTCiXeXRwy4r1e1KrQ9sZvzR7rzjnLQbRsawzL7mcoYpZ94CEkGvtUtTihL2H24zr8ATcCbQ3NJ5BGyxhL",
  "key33": "5rwbBXkCbNPKW6YBdMEAUSWrfphjJqFue7X7mGXpAbgxLNJCFLsxeGUKfRyev8ADMvYWBkwR52zY7wLp9wo3EG3y",
  "key34": "2QkhrCtffsb5buWLK9n97DyYf522dbBvTdSxhZkQaqvPrhT4ZUToyJ88THvu4csGMHLn6uP9a5sj4VUkCu65T9ER",
  "key35": "3aUmuMhcnRByABfocpw1PqEQym3V5aSr3prJRhuxSG4LC4wQsoVW39BmXHkTmBLp5GZfnVb5dwS9bpce4W3UvnjU",
  "key36": "4nibtPE4CABe6tn7voQyCkRRUfuH2LHWnyEXdi4w1GFCXtQnHfjoSDQJTWAQsrFtKqP6zYBfGpuj7ck7wA7WzmPe"
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
