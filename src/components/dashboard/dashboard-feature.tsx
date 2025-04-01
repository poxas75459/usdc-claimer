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
    "2F8YgF8djiBBua2TyLLDMBuGzU3S3wB95g3PXFpQBo3kxT6XDn2nQGUgBmdAtvUpAUVuCU1DXSX5EWyjEjJpDquV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zCuoPzKrjd9D4FYS8sMuNniC9iyUGCjBzYEygxxdGQQiVzLsPq2BTqk5tGRcBeK31ezVuCU9DYzMximV1zAP2BN",
  "key1": "5cwTfQYN5FTexg844rvD22xZZRdrMwU7k7eX7xDenMpFMbGZ2PtE2cD6q9t81MRSaBCzze7gFAjJHXekXh9oQpLM",
  "key2": "3j9cUzpxCDEWbg5RjnLWrU26Wg6bRfuhmWf77svojv8NMD5Cc3BRTJi6inxfKm251jrmJTaUV1kapDg6e2hiPHc4",
  "key3": "4dqwYeWijH8ogrgH9NjVeRx22s4uAoZAKJL9c571GaMfq5JJpWV5axhPtgyX5H8DLFLbfokTKpRv8yKZejSVSxKw",
  "key4": "4dbeB3tU5KpV6eKZQ1Fwsmb5r2nfLTE3ecrbhhjUfmcUAEAeHfEid6tsoLTwGAkoAUs7zeoXKDJqEXTbfNwwioCv",
  "key5": "28iuh7K8GvCQwGUeqyiU8yqr6y6BMNJBhLGmxXoEFsPegvamUfAb22DyJgp1Ja5orxYPfRPjZwG56Pfz1jM548Kn",
  "key6": "5UMTgpQapcKWEpvBDj6e6NTt7rR7rbwBucirZE5GwY7Uv5BMSk7paZyGoyf1A4VbDjdykye8RsmiMG5Xa26uEYa8",
  "key7": "cHXXjb9KxXwUs8TQj1RWB9vS1ziKKTYuJZaVN4Zd7FmSw62khz1GfzEEoYodWQgEi1ba9yV4JkR9D8rksTR5enj",
  "key8": "dydpKRjFfSTqhygWJRiBrDNdnvmdLwUbczTrEi54L4siMzca91MDMppDgF1ncrx7bDQs8QKRZEg939FGRgYBPoe",
  "key9": "2M9pUS1xmoY1vCi25Rk3WQ22Sa7E5KMw2orMqNCxXAaWHoE851cCXABuvMaAVP6wKji5cwgjVHpnbb5WBT2T2oQW",
  "key10": "4XhgDK8rj3YFzjcvUYkUVkEYivg51NEVXH8LcaBE2M26ogn8MmTFtyL3DEFcRdjMS91JDTmR6BChRWnCXpYU2q7N",
  "key11": "ZHFwUcUyq2DzBqrmZ7tSnaMsumKuTmyCRVKmVsK85omEN4yrThzDpJAZN6p6aeriV1y4rjF8W8q5nvPASw7UdHQ",
  "key12": "5hnahawFRbNfdnKTZXfXhbR3dNq7yvRKnfvZYfsNwNhyeg9nRE9mkktQqwqihPfqJmNrpk2WWRAsB1n4yQDQRsqC",
  "key13": "5vSPZ6AvsTdZmiMoswukQm1WzzekHJbDfn4to9vkrZ6997xsxq8nWWFkiDvNcacnVV8p3Leg6Y8hfW5x5dJKnf1P",
  "key14": "oQukNVsT9cyVQ23cwzqRiTRom7TXnxYkXhCL799n1GiNVZweRTm4K7hQa7cmdjgfWfhUZSK6vbZ9ahroYb2K6ib",
  "key15": "4Jc3CGqDwp18HKScEBpxwfbz4tt8Ndr3HucLASfcNdX5oKd93PZ1j123oRnoy3njYi1T1WbHM6TP8mw7rKFLhX6E",
  "key16": "2M8QWphdCEtHDRLhLWUbtgVYuKE58bWaDLD7UgvwoMKEdsfM9zxWeZTfpDuMrcEiN6FouR91EJ21GHVP3mUZpCik",
  "key17": "2WpjgCkyuUyQLFRN9mbUh9zVnxzzjyiFjUcf1nGSobpo2pVDTZdpEouataH19jii5hrqMcWCJaCPpJzpJ4ttJRja",
  "key18": "5CdZuqhMS9inzDs5uJfysZQvMMGWNsVvSTNVe23NbU6E9zC2YU7PWCBvcpAA7iT9kYSgmu33GHzHKgh1i4QZwaqh",
  "key19": "VxegcAwjCQMZj7uF99NwuP3RXJBp2u3CdSxjXmPvRAWWfokCn9pNEZXdmmgGo9xXM6XrsUHKUnbvDhXbcCJcjfr",
  "key20": "51w6YMfgA8UqSiE69yPBeGD4pro4MEXrnomPFCg4SNeth6S6cgBfe6qCjPAgXDeRCpwMvJhy9cHP8MAHR2tUmsQM",
  "key21": "4GUuJxt8RdhX3Zttm8gwWfoXgVbK1LQcK4Lgm2QJSfpLviW2hcu8gj2Z8GgY6fadD1Wdr38FffMEzBzRk2BVCEtj",
  "key22": "3RxvvDgHd3hi1CAHV7auND54XCgoYAanSukzLvRabNGfMeCHaNpPKQvDPo3u3dzG89Uwuvat5PnaPEJ75CAdrNiW",
  "key23": "5cxvnsKpH42PQjJjmH4dZh35NbRoPWfZYRi2abPsxt8bzfneedizrR8awBNXwtt9G5xeCAAd8G3wyt7MtVDFUqQV",
  "key24": "HGYuBXoLmkMWJP2Ry944fUcVZNkvR89exg8eVz5HuRsnSyqLioRUzBob3dnsPiRkyWkkwk6YaGYdap9vZLhyxSn",
  "key25": "28H8f8o8m2vpg46c7XjMmz148WY9jyXiSxvaSyoYzGTJ5S9QR6sz13UQFmcvMuZdtSxLnXV2HiW94g8hj28ohhes",
  "key26": "3oyQzYLMAoCyCRD4RvR5grXGhbHpA5Djpw88gYuBSx3d5bg2dpyewkYHQAboQm1cj3CtQSDoaKPiAgoP1HwsFsce",
  "key27": "5jj2ko6yzhWjf5WL21GmydQni7Nct5euywXS9rRLqpfyofiLsFgHpJY9w4hepUnJ3SsemJjGAdeAVGQvzGnVZW6n",
  "key28": "ejiMyFrfDs9Buz8pTCo6wjLCCb3DeLHiH2mYroHxFyQ6rN2JXgL2bf8ALAG983h535vHJwcPvuiiY7JdnpCcuN1",
  "key29": "5wRLaGcgHoVD8UNskbFZdKsP8VUy1yq54Eknv6gQKERBfgVRkNM39wq2BLzGyCejJ2qrvRoQnzvr9g3nJJ8fpnVq",
  "key30": "3yAsjgnP35XvofBoAuG6yJMWUk28NsBHciPhnqZ2iVH4Qi3DFmMciYiwbZzopGo5Rw5vUG8qN7udRgzJG18VJPGu",
  "key31": "3jSVq35S5aAw945W4WwVcWUzdEXRGqta3d5y4zXQ2ZX2g5TNZK89KDj8KR8RAf37Ap117uGV88ByHQrtywS8sYvQ",
  "key32": "58gT255SnFECpG4JVYwE2QizQgg8cKaNsuZcAN5q5jRXs4vnGxRJzBAmmR2q8nYnUw5DD2oPeaaE6TVZonRKeavV",
  "key33": "445biJnQqESNGfS7ivq8MoWKq8oUDXkZRxw2fqNt9fCuaLDGuEREb29qFfzAQkrZCGXTXFaRGDStGvcYR9WrSNXE",
  "key34": "4zFDMtSmmUcQLuwuAHKMrtwxzz1yAD52vHCLnyUZxAzsULodH1ssmcjDJjKr9KvpXwHUyKtLTCvfgjMUuk7MTea3",
  "key35": "sJeSuU1nzpQej6ixERBoD2SpE7GjnsxjRnbfmzANS7pq3oZgeMqpMxfwT3UpMnHqWAnosVR7E23B5j3pVr5BtER",
  "key36": "2RBn6WNUBzU6NU9zngNGq3KU8sMuSiaJjtMiWFo2bpiVrVz9oHfD3cq2uMPsamQV9FxhU9sBojbYYncbFExZhKkY",
  "key37": "28GSEeFSny1MDkJvPvt4jojNXz87cj1Y9BGXqTn8VNjK2EsGUq6RVChajDRL7kUVsZNmE1qHRM4GBoQVE8g4sWyT",
  "key38": "4ujEK9UU7MTGJJYZwkwvuw7NTDTNkB7YokEhPDiobZrtGDfUs8eahUiRzmAyCXnjy3rw6VHFG4iVKUGkumDgw9Fc",
  "key39": "3SP1dDo1XEJCDs2VD2cyDAM5pFrVodZyhmHA8x5yC8rSvZ42fpfYZtXAcJENMyoed1j9w9dLtbs5nvAEUijQzyrE",
  "key40": "2XiVDbtv3zxwYCp4hWcdZSv8jR7oJAk1ek9wRjUVBvc3wZhwJqrCd412RaLtUmcvNKtoYvoLwNpvgSWk8a74U1i1",
  "key41": "5z4Pro4ScSa7NRZd752kA1YpXayym8AboZeBNuUt12SRBvgj8zFydCNiP1DRrh1ANQ3ZzVSSwvM6q2mFd4gCqYzS",
  "key42": "3eVj3qdzZSowyCkXE779mP1aePCWYtmiam4u8DanZ1gMAVZe48KxEQoXwAk8jy8zhscYFkeZcKb4Kz3VNwrqHfsH"
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
