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
    "36cktXhAYDHDsxy5yZJaNPnFbxwhVtuLVse4N7LXL5MwDS6tAeTgRrS5d6vmuZoefD3VHWZs1YNKp9u71UB8uujY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55bqWLhGqLXi5Gy9yjmFjXT6b5TZiwGbJAyDW7gxuxC5S6aGCRQA6X8u82PyjMCYZD3NCPMSD8McVt8RRzF1pzM",
  "key1": "4AhrzVtaLhaqD8PyHVEdbZ9MD1t1hZJ4pwRURc17Zu13kRcHPjJZjqkQZfUwQJQNivfYWUgnT4rRDDnrdPCB6xG3",
  "key2": "3ugZf6xEwU1Hx9tcowz9mkKBJtRbiRGskJGtJcyF36B42T8Tm1PgYhktnL7ZAihD2DJJVzpmCPDByLdmRdRXT2yS",
  "key3": "5GvnPKXKPTDdk34zGimdiQW8duJkJzBqrTWugamrTxnxXiBsdB9tKCEx7wwdZvt3hrf7Np6wqeNmZ49sXLMXiwa9",
  "key4": "4RcY8HDwyGn7bza1dvKPyHM5ob6BpV7cAwW1YqBA5QYunonPpQonmc9DmyTVujH4yuJaf6iovUT1Jbrf9SLJDPen",
  "key5": "3PLmVkYGUMwnb5fP7nyJ2Mx88nKbRuxAHtN9PGW75Bvm9CD1FH7adJABrFwtpasbPCPzPedvSxgDjPHg2eTZnxi9",
  "key6": "2w3zuB5V7mRu9LEYxcvYjX16PGwPqcSRWQJbGyxwKF32Z2FWLxE9o5vdpSPXZggd8SWdxyoZBZ42KCsfWZnioJLy",
  "key7": "5KSs5UqjZmSnUoH7ayMsThXwXP6mLaMQ8XrmUDU3h6eaiZ3cdcDvZ116HKz5UYASw1n1ERSxxX9pYzxfY3s1551J",
  "key8": "4BJnkP3ojQhj88pQqqLu2sakM6iY167f1AhQxUYaWUF1yW8M22Fbex3nnErc3N5mkg88yBKgQL8JmzZtm8RRZqAU",
  "key9": "2yQYjbN5LXAL3YBdR3FSkQcd3vdyo2xFMwRUEhS2RT1u1yEPrfws7ANRLYrg4M8weB7WnVhimZy8eUyVkcn2UzrT",
  "key10": "21am95kvxw1s2AsThWERJXQGrSmVjJwWmG41n4ddu6wPnfdwwQPEGox3kVXMMav5exyE5dFq3y3eDLzVjXfnWpwu",
  "key11": "2KiaTwVMfQ6mijHc19v5zx18R3TNNRDBsos5BEcMfTQvxNsZFgohc434HKWKEGoHsqLGh8kisiWLiF2xoaPPr3s3",
  "key12": "2BgnPyUPPzVvVbxy3dcMEoowEcqAHttfjZFcmCuuJLg9wUfPMuLKK7cXe3rqqchic7ZEAWiWKZCvd48t3QjKzToX",
  "key13": "3PmXXrvoveA8VxmwfLqLBq8mpNmGo9hgUK5mUhA6zHFzRL6jhWnpArM5k9pY8TRmzCJZz5rbM7LQ6Cm5zvKSbF8i",
  "key14": "o2pH2K4wRSw99SaDwZCfZ5f7ToSdUCw5DYGKkqZu8TXPNKgLggzbKBGLbL9ZNogVLQS6JbgW2npdCVhtV4XGPLN",
  "key15": "2uSReDKAPB6Z4mxUd4VHBFJd4Boe5fMEdAW8ipEyEu6Dzc4tGQEETdW2SJiXLuab68RCkFJ2Y86mwdwWQkkg14q2",
  "key16": "4YgH3PTRa42a55kuPE2DBq4AyoK5ewQ1KvYKfFsB1hZWmH6gwjmxiaN38rbCVcNFAyzjFLoAXy9UztHsGKTGMyoH",
  "key17": "2vbq5qxPwdHV3b1BuHzjzezFgV8weRQE14pALjfMRhovM5z9rf2CR5MUTrRtkqMvvqMepapHTTTWvG8x1FwQQpA8",
  "key18": "5gUxTq7ztDEmVVRcjkFCRHvjGExcjcgE2DH2TvB237TtSRFsY6RiwFriGHdt36i27yCenGhjr2aGRWKfsDMaTEuC",
  "key19": "YLQggoUhZ8KJenBYpHP8ZUF7QeMLrxXMpadbtfwbmz2UT7XEzN63TAVwSDq3AXHuVgQw1QJKfrszdL8Rhq3Vuf5",
  "key20": "4WgkjorJMdofyQbu1NXwR4r9rECJwUDhYCFDZbUpirFTnQUG5D4T65uk1iLHUeTEX6wURwY9z26WkPaHgJWRChUW",
  "key21": "3dF44gPwVtXjdNSCyMdPa33qq4JJ2Bp3Ki5YKPgw3HQ6Z71wh6FnHArjkHXZUDg8XojJU42TGQSdaezyKhSPj43t",
  "key22": "B1ge5NPJsbEmFMVApyUmoWHXK2M6KZ9PGodtD4QMwyFn7ZSSe74o319oWKmguVvwPHRXzdzgsTNcYDg5rjPQTFp",
  "key23": "3szNy3TEu6fxJsDrNMvxLZSaQpWu5Uj3cq6FznJ4yxcLN8gzmDpktRq61nVTgBNQWmsXc6rcCcrRkpDzgNjJfwzU",
  "key24": "3Sb23ePGjmTNC8wzDuNAC2j5aq2GDSaxpzeo6DLAAK54F4zZ4uCarTNqmXo7rU7pjCzSGs7rSptBhfxBUgbsM7kF",
  "key25": "SGoAvJ37TSQebKPg39mSHZVC6D9puxMQ699X4FFVurukRgoMMqpnXVWnN7v9Wxg2qcueRh9Y5J79VrQDkhGEgY3",
  "key26": "32wHBHvg6moTrrpGiLH4bmjpvB9mkycPHjUKUpdifnQcWVJ7gAgh7JDEZ1WAYh2Ch5iTVR9GRK5CAvE2TRxruge1",
  "key27": "B6jKLQqrbfJQnE9mTmNmfvkyPATXNYhP7nfdHTtP6b52wd7J5iGRz6fTs6A1h2Va7TSkSDYftd7gD8WoepFBaaZ",
  "key28": "5QBBKRvT6BnG9R6djHtmz1A1Vtw6nk8Cf9WJ5gD6HX9AMcV8RYfSea9MChPWXF6gqFu4kYQ1czutK4Te5TjWpfHU",
  "key29": "64YiV9wKNyaNciMVSF23mVGoREdraybaNLoPtLGPdywbafeiADePdAzsRHchp4LKT8F5rA9LVLboYZ5Pv3GfF1X4",
  "key30": "5ATV2hxL8YVv4VFLMd58w5YhtVL2GHynSrtX6ZNzpv7GZuGqxM5e7oUNTFswg9u3UDXgYuyNMNSev23reYM3Cu26",
  "key31": "5QcMeihYsZ6Tw4CGPsLiYkAVHHbGxB44JdNV3AUHVd3ATF5inwdx921S3BL2JR5utA3nwDEeRcB2CXUS4nvJ7hMM",
  "key32": "2sXKFz8aAsW6ViroqRCdzFRvdYQvRr28dWc98b39MZX4891U3ZvymCGm5KhJxxKLM8rfYxxYw8HoBCc47oP4iv5C",
  "key33": "4eLZwntKVBq9zPZcNykdTyTYCFiMnpQDTDdgWcc2DQ8xsWvTRfEPzmdG5oeW2EAy9RQjDUbmsF3qe7c8wDubosYx",
  "key34": "2m4gtQkDy69k4pgdHt6DUxP14wt4m73UqmbPhMGRSyXMs8C7yynsnnrp56ndPrVv2WBRRYhGcTZnbwxLya8mMipW",
  "key35": "5wjP63KKqW8TTHXv4RYqZvGjbCnT4zmt8vFxMd92y6TSRjnjFvijdaUJcR5sf665t4WjWFXBFCzm8SVbERXDj56h",
  "key36": "4MCDJU7S7ZbbQWkdomvMD9KYMejzsxpHGXw6LfyrcrBo1gB4xy1cfhWH2EdXAvBYGCt3BwLHpZbamw2zaUnYL4TD"
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
