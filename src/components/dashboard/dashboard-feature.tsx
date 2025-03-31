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
    "6787sw8vbNZKNkydvdKgS1JWfFfE7hbiFGzNgyFjrNtLGUrWpLCW4pTtnMYjYp2b4oUbMgwWeRmw3zsnj7bTuHae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KwgSFb873YK8X4Pz4yLNey2HaPMdWcTxphMPbHLruzxmHnpgD1MAbKvujwsRo6VxYND3W4WnLVziDvmtZKKMsJH",
  "key1": "3b78Vi8q6qZf3bod1MpoZM4nJSgHhGcLrM9zAaDQnvmW4Eq2HQno1AxC49Wk8n1NSt7Rq5ijxYE7P1sDqqJTpFfX",
  "key2": "561LpLRu3EU1YT5Y7cfNtv4Dgnkbivs5DM9QKFSbnFh7y5tZ9FVMNpaNLa6oeHPdu3jf1pTf6vaSwx8oEJPvxYHP",
  "key3": "5eEMtRirDTKKYMbCU7M2wBQyZidowfnpzGgG55Tv15H7gZiavDjhQgFfjaV7ZpX5y8TCSmBLE7PRNx8eY6exz4b2",
  "key4": "5kK5seMeR5hUJzzqB7e2ANpV8fqc1ESKrJnkkZe8HDfqn2Yj5tC1Dwr4jEMmsPWU9LpQ7DLLoXGceuSieXrCDFha",
  "key5": "5g91WKGgiyuq4cYzH2dnUAaXx3ynYZh4HCy8fcweY2LeHX87VHHp7rAfdvqPQMV2sXqsWofSWv6S6DJkGckyLfFs",
  "key6": "fqi64Nz59eM2iEZZdaNJPjGfiFD8QRpJQWxnwVwHLothDEBnP6EhrBYgHu2ia8KEsK4oTPp3qWY1g4kp5Y4ZFDq",
  "key7": "2cUgssSY9eWPE821sYfTZMdkFZgs4jLzmzG7b21qxvSgJC5ruDdvukn2WnXCgUxC2A6kjSntfUfAsgW3BvFCWREA",
  "key8": "3ShoziRA9D26aU78FcQPV6PWmw7t3tAjF1uKftHCiwdnzndB5Yj8kRWhiL2NerKNUqFJva6oTgLF9HGJsS7yTg1F",
  "key9": "5VCX2DBvzHYAxM23e2GFCAVgtTnzZ1nfrkk96D1kijug3V1yNynyxF2EqBMvtcz7Ch3ZgLJowR1rwWfR39hMuNsb",
  "key10": "Uo53p7SwEvKHtVtyqR5JtbJQa8bnXxANBGsBodCMNkzK6j565f53zAVmhwkWSEZcv5SFbCkrZ8UbtLtRTHbf78U",
  "key11": "5LhTMPLV2GSGRA5NAcKbBBnVef2vS7aLSP3dTj2RPUMwmLgjk8EtdfYs4zkriQVZ18AN2JUDtZkhP53Vugcqkt5P",
  "key12": "3f8qUEKNqHM3r5k4htVuJrpdhChVNk4XZeyFC8fjaXRxmtweoxRVMH4RHNC1GHox9vMuVmhNeVDLVLL5S9RxA665",
  "key13": "5XtBqatDi6ThD2FjkwGRJk4EXRJN3Y5qKfnqcWMW3uWHkZcHtxrXdzcQgj18Z9cLTSipWmRY7cC5sC4Th5ASxaWP",
  "key14": "3Np4K97Dq6DApgfHBWtkMvoLQ5nNZ8NMtuyUcatm9XtRFXhFL3VCjmeCbYP1WhvwtH99MnDvya74E7s7e3FcKoXf",
  "key15": "nT5kaFJMKdmSe33F1JtkpDL4xGmAJWto6UZA5tzpxjK8rTzf85SsgYuZ5Cb2THvSCMjAVG3R5t8aNrbV9WHYjBv",
  "key16": "35hC9inf92pEaAiZz361mg1Tgxb8VxmYnpYi5pRow858pGmfaGCnwoKzHM5UMbQomZFQgT2uxygkq1wjMx3zQ98X",
  "key17": "L3FpMJfAUbEJX4fGg8pYJRQLfL1YmgyxmH7Lqz3G9t2EdxYAyKJgpZLYC3hVrRt9TweEVjx5kp3CvkCr39qWPJs",
  "key18": "3J8WSd8Yc6d2Cn8AaWvB8Mtotp5ucoN4XHiBeixxGBxxcEz3kiPSsQs7CxDvbq9y9ZhKxigJJkXt6oHQMxptmXTR",
  "key19": "3cWomxRp5FcSzZPuEyD9a1RS7ymqUdLeyewyozFeZZqYWujqCBXvnf8gRNnxzG2A451xqsYcDsdJQxuFCV9M8PYA",
  "key20": "3j1wVkc8Z4tdEfmqXPXX6iFgCotfJLwe7tLYwWRQKauF6CkSdQP4RrSfFAjsWLe9jCt3DcASpFHuU1gUf5oP37j4",
  "key21": "56cuYaHFwLXLE1JRajkhAvpDpJkkizz6iNJHFzCEkswL4R5sJW37LBkvYFLjg6ae59LeXR6vPNs2fDobHsPgRrvn",
  "key22": "w36Vo9VScu4tVsRC11qFeEpXAARAzns4jTi4ixu5u3G1j7ZSEcNA3oyFwxQxNyUzmCZV2cUKYZMhQyc9MczkUUs",
  "key23": "M8ycD46rN39WjCKjzaUJ971bw9i7C6BvA9pR6LtWbKws13RJCA1JyTUNUhSCxFPiLJ9e3JKddVWv1PfH5aKQEUU",
  "key24": "4DSu8Sp8az3Cc5D9kNL9dfqeWRYcREyUkjvJrjnZZSqjPLBcit2VZLPBtM6TkYD7tNNcm3uV3JXzPvbieL3oWcZq",
  "key25": "jhqgesqbZA44VJuuDC2hkGoUFbf71zSAkrLJtqDtGyFUb2TdgcmAne98DW5pQYBrcJf8n1DApjHPQVe2FPvsafw",
  "key26": "4bX4Tg2Vf9awJx5UqkmgtBeRjgfC4jFPZDXTvJgC9cCMKve9ziQFGVfcBv3Qu4s4ryWKt4CpvcCzoWCxWfyx1XE9",
  "key27": "4j5hBhojGPPT1RazyTisUMDRz6meM6HUu6LkXrUB9uu5m1fnhxBz4sdzoc6dopDNwBuhm8A5Z3oMUQZRxwLJ1n8c",
  "key28": "2En9ak2uY6fLBNGcreaw81VGwi1uSbiNxmDActthsUyDVVgwKa8aYAr1VAXSxd9arrbeDCMvmjewmnfBx4F9dKDv",
  "key29": "4cP38m3cfKJJgPV1GmwkwS3orsR1UnQGhmrDpJDmerPaURzpEN1EyksEzwqeLwqJsrafc6wNDRZxs7XkYfdWaXzc",
  "key30": "3mW44Dqzk3E8LZdKePYoPhNhGBKRnw5JLijz1U4atNXU79RGZUiZaUxhs8r3ZfCSqn1RqyENT2sL4RAWrCtZfLzi",
  "key31": "5TETVVivGfkFjsT6EbbBCkGLyhGvrUESit6rmJd2QmdTdRKHVqbvBzjPg5FU8i7iBNQFYZzSYHBEymbUX9b4q28b",
  "key32": "57sUBKsm7LPPm15pUWFAQTDRuKmweNgf1bJ7En27f2MDrQXfGpGnwQgSVKVoabx7cSieLKcHuut1pehtjuSkuXHV",
  "key33": "4DbcQHQwsDwDEs8nTtMw9uzgKUT3oeRCcx34ZRSDqt5xLuBDyQbTuUdwXeBeMRUCNpASf7oqFCPucSjTNabMs81L",
  "key34": "5vNA95nTJ8NYuVAb9aHQhkPhmokNj3MTJXudyG1PPt8Linwhb3XdoNfiwqfZYe5wKCyBcFfKAnvgUCRGkqFuNsSi",
  "key35": "5dddjhzw79wJLpApTZhAYsbTwfkv2SfT3LxEVcGkegDR5FepnCeQeSeaR6owjJUTVFRN8KkdwxUTxqcxLpaJktU8",
  "key36": "4NCpiEtVSZQN4vmFtwbnEo6yU7x7aDQ8SPcFuXVd682aqd8meYuZtggwKZYogjB7TQXGeaDSqnQ9AHoChKPCTgfN",
  "key37": "3DUsaUBDRJhXKiT9FJiiwfCWN2mUFmS3WYhWF8gYDFGLEmEktuxegPYqXwAEBb8M6LyfD5G6CwarpY7cbczRDE4H",
  "key38": "4eDWHk87sYChsmDgMAHWqHzkBgkckf8rHvFDThX2w4LfpcwyL2w4NH96F54r5KQ5W9J5o9VFoUg3zNbniFmnQUNU",
  "key39": "3QbQMSTPF55YA2d9mchE8hPH2DoPs1A1o4H6hhNGActzjmiBEjRNKpWgrmqDZc3uRWpVp4TawTHeMxbS9g6TBrmp",
  "key40": "65NU9RePttzh9jbeiuynxcN76hoz7JUHob3VjuPwc5KHZadvtdRbFvWpKyCNT1ZFS17ZQd1ct3RdU1TnowBG6vp9",
  "key41": "28tRmRNBbnyaesH99cqDyzvZNoDzMBg1SFire1gQ83x7ajbBpwRKG5rQAJTL3c3XuAujYYowrwox3b68zCS6A53m",
  "key42": "5RC5iFZjnGrxSjd5d5RP8EhFkqvsBSagP8EqBDP6pxwxTHz4Pcumo66xxJnt5Kpi3awoSfAF4YuuRp5agRjvs6FW",
  "key43": "3YzSY5PqEgHvPWpgX5H46sXSf3ZHST7cvLkvVtPKijULnDGc5MZ5v7rBvwB2wRKRAcszCPsBZvs3MR13xLG4YoNH",
  "key44": "4jWLsphAfkvXqdmoXMQdUwdosekbYAmmFinEY1ko93VUKgZdab6R13t1jCSozdJRdNP4E5omsuidGJqCDRKHgJkr",
  "key45": "3NqFkxc6TwW8eVp6bzdMLhP7zs9fMFZk5iZzDKmmT6S3zpFXMF4EusFjUEfCENxLSouK48Nptz3zcoAvRT7RBeNW",
  "key46": "4ryFvk3QpBvTU7mnZjzkL16sTcyUU7hFFFESve9GJNKA7KBX2EHzAS3rUK45PKs8Zwa9tGS3ED6BHex1FAzswLtL"
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
