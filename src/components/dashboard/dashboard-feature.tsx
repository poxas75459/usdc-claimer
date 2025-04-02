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
    "TJNRZUDSmjbuyNb6oPM1nBwJoTXPDQ8erMB9tVWRh8w4JfwtJwzdSeKkaYRCFtBP9Mmi8BZAybEqM4DiKrcnQ7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53UkWwWVYzasYWLwEhzjYA1U8d1R2e3tphNAhFbDTeNYZpoCDQ9YfZpwsCuieXofJHWwdb52H1Kbk5hMzoeedEjJ",
  "key1": "4PXDeEVpEPt2UkGsdCZVM1xnKYUr3GqVa3X4WrJKWDpLin7awVS1vWRRryDVZVsoZLjRRmXDg8kRxt5FU7zt8v8t",
  "key2": "4sXt9FXRLQD3h4g5tJM8sJ4DZB7ChUueeG56bj2x3mwHEprU7UpeJhMKpbRESxqkMv7QLjbYaTqwDaJ36aTXgwss",
  "key3": "2TrCoapTPYCqC7keXk78o1ruvCFStzbnyCRf7zSvXhpG8YShNC9vBKkw1CV6XhzJWze6nh2AMFiXqaZXnAAYhRUs",
  "key4": "4nkfkttsrexwniAXu2v3rdqd431WfAMem419Ykw7xNcZVLKHzTMz1QQoDbJRvK3xRrwcvs88JXbPqU5kTeFheadF",
  "key5": "5V7jE2bfe5Y6GsyYQtvjxzxtrtd1fKQroZ2DpShQP4okndFNu5znYWSa6o9LjaoXbxT4uHyBH8yYML4o5NqfiGKz",
  "key6": "3h1wf7aFK23oT69FuiKd6mgM1eJ48ADsBpRHuCGaY6bHhirgJZ2zsqmH6np7Nr9f2Nn8HjyKbpWozwbtFd4HTukv",
  "key7": "4xEq3SoRUnRWGqMzX4Ji4wGhKQ8mwFcuHPMKazhaCh1qFwCMpwAgGGmQ5GdDwPT7naE7bZ1XEuQje2f7JA7toYX6",
  "key8": "2fJhny3SC6mVYEzGKbCMvhoKejE61XPvVNm11bGJQTSK8TqRqudEbis9NcwPs3YL8LcVc9JDvZCje9NxChVYkuMa",
  "key9": "ACWZnFEMeNvDGvNt4wYn2woUmDVHkVaFh8pC29SiXJ3x67EvgftfGoU34Vd33DUeRdMmdPsJ3VuxPFGuckr6ydt",
  "key10": "kWuNxMW27Tm4FBeBHQt3MWwYmpJwGbjoWe1RPqWgDuoiHdcd4hv6fCmGnDseaCDrhgfvp7oG9myE8uTdJYkC3Ky",
  "key11": "5x8TQapTwmLRGivgo7HoAg64QKt1aDcYRHviQTu7QtBrkn4eAqEv6kUkAvND95uftUuhBtjHsk4bNmMezLFQ5MUc",
  "key12": "ArP6p1qAjQp4rUZwLsHwU786aMuzo2Nh4HouiBoALbbbodLkso7hDT13HsVoPQgEWe2ZaiFXwd5bbeotkKVmzN2",
  "key13": "3ciaC7GVqbFmgk4jCsEdzFgU4LkM8cbCkAAeqgUy9PNV9FXET8V2Gcy9ncuoHGCi2MUZ5ihZL75tE64ReACWQ8Ew",
  "key14": "SFmootHxEQwiWhsy3xUo32h1ydG4yUyDFAa8LLp6t1RJUJVJZpnPvbjypf6LExfpdibAeaLPuqBkSATYstSEVBG",
  "key15": "VdcRaWzeXtczc5AsruwdeX6sHYRHKbkVkQ164UZmtx2FQGyFpwBtfJqWUCYg5V1Tt1DNuKkc7cZgW2D32QcBRrP",
  "key16": "4VveKyRcMht1mXfwsgR33xsA9hE9k7MNvGxv6YZwiQdPgduHsWWsPeT6wPPqpfyiKkb6CuuqLHphJWN6janUx6eo",
  "key17": "3Ypd6CRb1njDiNbruSha3cRpU26xrGo1aboWtKFbqFg4mszmpCLq2frxL4FhnxEKTUfnSc52usYYguMDcptuft69",
  "key18": "6GxQZPzWpbYeMPpr2VUqgPdPSHMiqBPMnu25xfZWqPaftAeG34Kr6bvb1PxDKri1nke7aioqzjUArNjPCHqAjZW",
  "key19": "QnGZYxYChLuRJg3D2M98dyaoq6o9pAzo8J4x1TZP53XjKc9exn9rgX1BWWpTkKC2jzAfjtWnoWm63WkGBFmJvQe",
  "key20": "46HLHJoigzEy3SwqWMkJHZSDhoHqD9CdRay58qv1uketj3AiFbGcKrtpd3qFKTGGwe6ZEaDxWEz4fT5rHykjXCVX",
  "key21": "4hCN3P9i7Pa9nMzCyyMpTD3CAsJmr19fSy4L6M79SKq5WfDctSBiy1mNtGTe51qLRhrEdmdQbektCEe6mscMHY5H",
  "key22": "3UHnvWxboH4htpsxyWLNJpKZnBrzuifpfbk3U7GxY82YfhgwEC7KtAT4Vp7A6jPMzpL1Fm8JSX7qvE9hz4YiFruk",
  "key23": "vEoaDhPAimcmZtZuhEm1PPuVYWpVagBFGYNekneZz35zSs3QXyBoTW93UZNQWVjuYP8ZnyBtJpuLi8L9mKp3crS",
  "key24": "4R4LzwZKsnxq2VYxpHY6Ahgq2xXadHRLBsAPvFZrc6z3JQEZrDxLXZvgeocwFQ4UV4NzbxMrCyzssWhzss22VUxQ",
  "key25": "5wWzqdxBdni8WskNqccuMFpSUSwTtmwxQ4AdPhBx2w2Y7dZrqnVwAGvisU4wpHgLsGCLnNEr1dS2CFpUKXdptrx2",
  "key26": "2Z3JQEwcvVfhDKKh3AdR3jKoeb4MaBeSboHS1a2jXoxATqRjZeb6mJbT3KzbUpGPAaZmmGeED6rMiBiZ9egz8QsW",
  "key27": "32MGhexQAtNEmBhcHh39LzE3iHYnijMU2ABeoexwv2tQwnKsK673q58sbh6btfvzyDG2xjyFtrtRVKjShK7zDfse",
  "key28": "2witxpTTE8nT7YrSTJVUpA97yxRotrGdPteNAfX7sH8ZUxTJGe71g2SSNyaY1eevWkbQdLq5MYjfcYGijjFxu74u",
  "key29": "jRNSMZdUX4HWAUsJY4Xworn37nn61eeunLDJ1Mt5PWxB1DQxXCPwhjRhN5B83WTN2BcqGeUVDKFxcnj6cLyrB8V",
  "key30": "2yq6Srngqg72zYgNLD8xLhSgiBS4uBJsmL1GFB1wYpKDniLWECQ6C4FsKkBT5VFdFJDET8guYyRsYyP8tKPsAF1D",
  "key31": "3qickkNzKRq2zLz3fSvAKoF2KrR1yrTefZSp15dZX6BiAye3uCqDZywskBEv4F1NwpXKGGBGBn5HuoLesNuytwNN",
  "key32": "uJK7NeBW2BftUN5LefQ7tyiedQ25KVd5K7r2AqMARafdpxnMr3puTeVxTe53yT7acyRtW1v1YAxDnKPba1z6GrJ",
  "key33": "zQjDjCD9Thb6yHyHEt25ewBcdM696v42YTAT6i9LLWm3Ud8zzE1PnuPrY2UWr9VNeKKimf9j7pTZovAgdm5huWQ",
  "key34": "Co5wbKjZugy5YUEhNK4LEWCYyNEBNDuXSZPhiRt9hWQsgntSoRu8ehXiie4Y6CEPKDY77eoWAadrL1XSZxc4i3u",
  "key35": "4Uv5sPzQs9M7wL1k9xwKNiG39Sorxbx5ZkLMiDhjDhTpmVSCFmmn2Ud2GiE9QZiXB2Cynjyp6A2NfyyqnZD8SsM6",
  "key36": "3spBuSwBEBVSi37c5JTcb7MZjL1EU44qQyN9mPwm3NGZ8C7cWNfXeNBeNrtV7fHwAukYx1ztXFeB8X7GC6bzBWB5",
  "key37": "2Fp5CNYTkTVZM8pnB9FBaqwC9Nk6MNb924JcwJBjDRFypu6sMCrG6eqt5sM48sZLmnCqYmvdjeTv72utRr8SoqTj",
  "key38": "4BsSyvuTHAjmGADw7S7GrUfY4CzeanEHdkvoWLgwQCAckMnwdECMbK8j2c9aiRerhHnegNofTHSgRzcSqeLgNno5",
  "key39": "23Y3szgaMQ1URePjr1SjGS8DKDYeAjwwQzuz1CHU8FsEe76bSYST51eL3JQ8RCbvCLobPBehoqizRaqrdNV4ZjDG",
  "key40": "R4N2WneDVFypoRZgnJGBTQ2a9Why6wXKus1FZTMahjjVZ9Dd9vaPAnvuCED1iPM7BUEBfmgvzFCj2jp6gYzcoi8",
  "key41": "2JDCqycdVkRmhg2RDr9zdmbu6BwqDVeoW3vgfC1BCaZrGFtHE4Q3BFeAvWUi9WYRj8EyBD7tPAxdj7WC1DbHF6p6"
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
