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
    "4PHoRAaT9affuYHU3w4VhzckvwU7dZ3KRFQNcSz9r33mrjwNrcyujoik62AzLma39vVzHqZCJgGjhBUUQbfc654f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31sYRqcNmmAziMDsVRF4RMCwnRWCpAreXADMVeGwwn8W7G3usqLEJwqxKnkVppQDRyiS1KpnVUa77nY5WoViDAD",
  "key1": "5sHiGG3ByKbPeNDTNZRS98qRUfFQd6GwUjGuGJUSmPDR5DyrfV3ukCvucqShRASEDhzJQXTytCqqwZGdrMxDwpgA",
  "key2": "5gNpHgyn6qbz3L3bHGPq5PrLbhZ5hd8tNqH5ZAv2pkXMs74k4aUBwJtULbTQ2TrWugAHqcBv98GLRS7jYDSm6U8V",
  "key3": "qjBpB3W5VroAKVrhgZsnh93Z8pphiueHPzUTmmzpGriDdgquWH18pk83vxTi2FUTuvKVWzUSH9VRMLySREnYqog",
  "key4": "vV7fc57zE5kjVRQmXKiacq9ThU7P2dpdSiMD3xtav2juEuot13Kdb3rXzZK8NKqA8SfR4qpQsH2QVuZy6o9gJCp",
  "key5": "ZHJKFdeEmjz83ahsmRFr9ALpfcHqVxedw25kXY8LZD4WyQdkDTQDm6P2S41Q6t6P3eSQca6H3SARqMc8DWEzyAz",
  "key6": "5MKG55dKYzMUZ9xz18SsppS3ypQHuWP4qKHQr3bWBmLZu79U8npfK8mbF23GJzExcJhjEQfz91RaaN2qNLuxTXY7",
  "key7": "2MsGHySVdNpC6MVwU2i6ScPHWqkPzuVFjhsya6a6RSqop2c28qjPzVMjrYPtW7kAhhvwy171PBZeNu89vJTgsm7a",
  "key8": "4PSkkHgYFa9ZNwjkKG9rggXqjaAryfAuzPZESzRB6RN9BYm2B4qHtCrjUv6wvPiX8cghY4TvBLYtVuuqStrrJKaG",
  "key9": "3q7MMhGHdKbMsYVqgqTbRuFb9gBdLRXpdMPFJimUophTQTeQamDWgYqicsZhnh8T4uNW6We63QRwRVWrCr2b4Qmd",
  "key10": "3sSDFdMJTG5bSKx1DJ3e7RPeRWPRpwfWUtQMmFwvr9SgKGoYC5HZ7FPw9dnuvrkpeAvBaQqa8UqX7zT88EN4w26w",
  "key11": "2uoWm4FTsxUd4K8Jw83TchC25Kjzvjfwax3bVZmW4QLHZWhe5ofD8G8BpXkUjMRWdN3REgyNRstTGdFgE5ziBeLf",
  "key12": "L52AqPM3qpyjXP4haiySNFPWHRtRaEa2bd2a16ciRC7BxpAHD8BrQboNynsuuiSocfsz4Pdeb6agYnAutQpGwz2",
  "key13": "5uzCXiQBPNoiy2vukXVwEmMpRZaBM23dEvVVKBsiCnxHgTt9BdGUJrHoBgZQqmuwGuwBU4kvBxcUNGGQ3vWzj7X5",
  "key14": "eGEbww2SVaq3xCRD18GrpRbfkxBPcgJ8pv5eD9r9yadU9dmbnYNBtQeQdkMxrhMimuoMTHGQGSNhcRfuuDu4QyD",
  "key15": "37Kz4zcSPdbtRcpr6fRXPP78DcoQuJEZwgHwpprKgLguQCVeJWCY8amxLtYGVSBNJQ9fR61Vu7kZG9CLVHEovQEd",
  "key16": "2nB6A4CCA11FYhN3WQHFKjS1c1F8XWjbRvDGuKBFGRFaaJJSW32sTjyny847P5oxAVQ4JUp7EBqqi9kC8qH8kwVb",
  "key17": "3YLnBVhvLvQBJ2vUX3mW8c1113yEX4yjKKYgAmxMs1Y7MuCH2zrNgHBY9VkgXWHZpiPMzBSsLZnP2BYAcD2kYEp",
  "key18": "5eaftj2KE1TKsqULGneug2LK5HowuVxZt9FcHtvdr9fF5cVd96PdHYKCAsTaiCpY6FPT9iwVBPUmNADgie2AJCSn",
  "key19": "RyDJujjw2urjo9Ej4rrwsAAp516vJo5Q2924J3qV7gU3aDvAbGt3DGPfMByNjZuNXoCkpS3HEGgafFQZcvNtQWc",
  "key20": "3gEM7SZuAmNQfmZX2FGaTVELbiUgKAgGLBw3YC5GffRWJbAWdnjZWnTk1xBu3Dd9uncZkuLg5zbQBKb9UwCVaFoC",
  "key21": "4LJSxgs2VKmkFeZP6RHncwfNTtbtRMvwkQrSutePnYR53gxnCd7ThwP2m4eVtwXPCpTD5153Q6wwMd16vA69BCkM",
  "key22": "4YZMjYVmME3vfk7YmiuC1YqDeL2a4C31EJUixpTrfXbyMM1HN8mNtw8UpkcY8evWoXiuJKvjrAkhnQGjWiza6QiB",
  "key23": "2D7rxSeke2AJ7dZFsnFJHYwx6NuWtfbqPnQzdFK1kQu9Q2JgKvgoQN8GavMuUY2X8FmT82Cojsn9wK5AxNtii5zW",
  "key24": "5ugZPN3Ctb5Gi2YrDo7dZhT3B8m44KsQNk1yA6QLc3KUXtJbWwvN9yqattDyDGXhyrfSCF42xFqa8nFTgY4UdNvN",
  "key25": "2ddASBWY1Ux6AbUq3NWf3JP7g3DGcYvhnKxLBexHCSkYyPWYjPgsqKHWeHwaDDNQ8yisa74uBRuu6AeETQinEQ3n",
  "key26": "4653jfQeDxoch26HjAVBbakf71zTNmY1EHGoUPzF59K26JfD519m7itmYfkrPYW2kPxSzrEZGEEhsZqeNm6a92Fw",
  "key27": "2JxVjsyq2a9WXNs7imKr3282MgCu7GZkMrz6odp1dMDHex31R6xBW4P1bk3PY5VrG7SjE5jCKSG5QT9Mvgp3ukTW",
  "key28": "3fxpXGZt69qiJWdcd8pVSeS7PTzGFQ3TrdNyxtKHgw2cWtCKTA25u9eiZYr1NB1u9eecxtsYFsdM6b1CqGaUuxiZ",
  "key29": "3V1u8v95pbQJC9KU8dG2FKMSFVZa6BDRwDj54UmMJ4DqSy8LrFe1abgQLpUwrryBQznqVgQMLnHtFUGbhZFwEqau",
  "key30": "5Lae34f3ZvT83HYCQpAGnn4wkudLhStnkmbdRUxWuXw2mZKy7NJ1AFhnhQantzZBhYbRpA2JwWLZoNUumUw38c9K",
  "key31": "2VcaRs7q8CJHx1hn7zYQP8PKfi2WW1dgHGHewbwKeNRznE1wRTQktDXUWT6WBqSxEukcHkmy53GCWr953fHeR3ej",
  "key32": "5q8uaczrUfLst8PC28vQNWQmMvLDhayPt24SozQb7hDS4jMchowZDzv5sKfHAxfm4tpre6CKFUJctyAh8ZcKUgqf",
  "key33": "ReUzVaL4nGVTk8Ys5Gz5wHd3scKnZUBV7c2DTZGko6NQbctDvgsrVrz5iZ7CLZyabLMQYQEznNTJ3NoLHqSk31S",
  "key34": "3TWDQQUpKMNSi6p3ZkTMtYFsdHV7Lpp32DD3SH8mEk5BXfjTC1TDXVmive5o4sM79Y52LGCWr7KvYoBUFKi8P9EM",
  "key35": "4TKfiNL81nVTXb4znw8et4WUDNuVhi77STUZKR5j1dWnXCNvhvbwhQgXVPqugi6q2Mjx4YyY3vrofJUNLxQjYLtj",
  "key36": "5aDAdjPWpZRcjscH2jLc1TqsBge2G9bCjYFPZNCScxzSe9tRn15AL2iRKwaNKdL6SqpJcEsZni6PHHMPUQZjampb",
  "key37": "34M2xFkABHVZ39XRfG5tAm1Yy52ogf5u8pZfXByRT1AzFH7gj3z3EhcgNDuccWuvqu3MZ5v83mXf99WxwbL4REon",
  "key38": "p6y8phfKh2b3gYUEWp64eYLqMwXbF9xvcBZzBRUQzSTb21jozGRUJBG2eZQVfxbPix5GwcSpyjuT1SiarGPWfsU",
  "key39": "4RCMXZoRnLcamKpUo1mj1pgTtN3a5FvVtj4tKVHwZuVB7a43t1scK7pomqQH3wNtjRvAqgihjaFcqUiaQXee28iS",
  "key40": "57GRAB4GaSMdS9kJsEJ4uCCLBoeyGkkx9zcsYCRixH4iSy3Cp8EMBUMuDA54sHWh9gsRUCNwJJFXQrNwMZ57ZFgp",
  "key41": "5BcZL6dGMtG7EkxpF9n42BJ3LdTq1xatiThkrrUadsST11Pm5BCaJPDSz8sUyFcSZa4KNLABN4wiHmXE5aEBW7nz",
  "key42": "2ZCHaErRcofKPiv1523zgT5kAj7jFEiWbCZys9GgUtBzey8539GXs3oRvSkRu8fyWSink1fnTEA9dVSFbkV1Uvdg",
  "key43": "31XDyukYg36oyByJrWLt11S7FvRyDKAaC4w8DaDHXz3KXR9mveKPmm53HehJbppFFgKNfUmJmG2g183ztBuf2Dym",
  "key44": "PXppF4KxDB3jegJbanu59XR1d1dPeSaRydqFmixxy48xmDJfg25ZoTej1juc2ZrK8qBwF1XBfLpce6YCuswKwiu",
  "key45": "5NaTpZgV9xCj6N9PhVxfu7MHo4ENcBzKX6gBi6uZRpX2TTXRCWKr4hYACH1V1gRR5i23rqwa6Mb6DzF6dzaKLJZS"
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
