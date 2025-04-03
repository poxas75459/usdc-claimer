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
    "ZxnMbhgu5EC2aBWzWEaeLA5akhuj8DLfKsjE6AwVd2N8dHAg2VbPrfZRkCo6KmE8gQveP6RgqB9MKrJfdqmJjRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WuZ538XMx44tdt1dyWqBf3z91He49fbxC6KXVLTCm9LmALbz4LUXkDmzjp7hRFziEZWKURm3xFiwkw5Krupv2dm",
  "key1": "4EWP4ijtvpbNQKFBuTiTPiXWzP9fmmeDCQG3EkDFSrWJ4N8vzJdBXsH3jW71JqafDTiefoYruCcNd6Qh3b7Yi9Uw",
  "key2": "4XwNJPYRwafXbbRrq7TthKwXpD5bT6W4SE1cozSmWQYT8XE7geLTW1S3woNpeUB9iaCezXquGJS7wZvr6PzKVuTh",
  "key3": "2otC22KmuMp1nECfHzbyJnEAe4arKYEG3J4GsSBQMd8XzQtsgBryTaW8EmMtfLSXZjdfxAqy4ssXT1SBsRJKoEzA",
  "key4": "4EKyzTPtcjC1L2v6ySWLf5RacyYATsxUbPttotqXJwCdvZxGjhwqTbSDE1KEpEUBXNGMJKC2tKCYLUWy1r9ByNRN",
  "key5": "4ZSNw2fikMfL998Q7755aR3DipZBnLpqx3frxPs1wUD3QUvZ7q825ybARB2gMDox4edjmQTvDcCbPvw1HsH728mK",
  "key6": "nit5qpXLqLkEfhYHv2HbPfjMjSBnbSJeLNBqeCNBgHijMXanrf8YPvw5LsRCMWbYe5qPPuqJLKhKhvn1kGWebro",
  "key7": "2Ed9SgJzjEJ4HZEr2MU7D9yLFRB6iCbiH7RasPZa6V2RT57JsA4ShL9YDZn3UrFiEmWQKUHAoEPp2ADN6zHdcJ99",
  "key8": "4AUZed4sPYCMVkLsvy9hmAhgDmnLVHoPmoYsNrSUMtjTxHkntDQiRYkn5rJnFZgG2e4SixDH5s7t7UiWbHpCYf5b",
  "key9": "2uMYd7NKNjgiimZLWzcvV83vzN7yLkYBafuSycL97jKAYYHAYM7njKGvPbUjQE1sPdLxzrb4dytNXzdmRD1T1vK5",
  "key10": "5WFaCTWo5Aj1RMj27Jy731ds7xuwswnVpsKcD9QXeujoT5Ly9cGeEQxYhSz8hd3gsCzjKoZACWT5tiPPhmT5mZEo",
  "key11": "hGkoSHtDSENrLzpTLcqsHGF6SZVWDG3KCEiH1QqqiiuKEeaigPWC6K1GwfPHqZQkB1XPYMEjwTJi7pkCPHMYvvW",
  "key12": "3rnJyhMFw7crwBfWArmyujL6ZXp1DKw6ccF6cuenmTYhoiPXVmKUPEEZLJBMbtou9FBFSFLVnvP52ePZBFWtgAF1",
  "key13": "CLQPdfDuB4GsQ28MrkHyttXfXwdUQPssSyFVaKNdiYCYqxcZBu5jX2JfYsHNrmKAQ45t6CZetmzZpTsFyXx7Ghh",
  "key14": "BQzAS5pPjJYbR27asWEcg4xxRbEa2foZ8fHkDnNvMcWRejFEKARS9CfcC59G5b39UWSx5ySZhSFF8v8oWDGC27q",
  "key15": "2Jftw34BZXs7UtwzMyyyS4ACammZDzNgn88o4yqbqNnWRd5edCECow6ytv2ddQk5saRmgdQA1XKcb7zxbo59RtP",
  "key16": "2mmQzecK8rZDc6X5VWs4zDB7bvQVPJ6jkZZ3jrT9vrwHS97u2MwWcoxEJvhUGn4CioTVTgXz22CBqg1CTpoVupyR",
  "key17": "3K6xjPY1JT6mM6tFPt6JiHcMr3FoNTbELTnxZfFZoayRp2vtGkJPUWcGDgAecm1jb41uUGWoaajcRPBKXdf9kAQv",
  "key18": "nB93tycD4mBCJJ53sbSLgLQomovYcNojWh4h4CkjaxmGmK7Gjg9M8jfZZLixWd8qVtXA9QPtCeCrrpMiw8UHpq8",
  "key19": "3xZPzZdacyiFbWwcdgdYx4qzcixAEfHDE6VJu1sdFjugu1nCfeF8yt91yMjFfGevSA9bBGe3eSWzyh4pAxLUsNBu",
  "key20": "2fJicY245AYhBMVuGqtrDqK6HzvdDN82EPvrRSmmT4j8tmLYgX4ed4H7FAN4dDcpTM9T1Ab4jfB8KeU7dT3716U4",
  "key21": "5iQ951LwEUT9abFj4ZZ2xQi9RnQgAN7TvfoAVgkgHVm3ouxvfQhqrgrZhkzK4LBBEXF3vW5pXvjNcWDbUC2ewmhG",
  "key22": "4VcfGPcHbTZMXux4TScthaxWqiWmMFHcHu3K5E9bSBgc2uDbBxbVrjN29uXp75g5bgAq1Z2JcGkyek2RcE1qKxaa",
  "key23": "2Jaajkt8hxiYXQX52m7BPGLWm61RYXpfu5Fg3pMznY96HN7AnaGCmFsLWCRTFvSJE6cyuNNNnnpPehUeQYhUTdXM",
  "key24": "F7adyTbr8Vr1UCFAAzzSALg1wi1p5hCQLnSdx12ZowCnXzziqTQ5aLai9QwiUD6P1X4bCKvVPTiyLPZ2hCW1c1v",
  "key25": "2AH611Zp9MRiFYjQU7DDRYXVFYnnjeJbPYusFntdpx38UnsUKzt7wibkgiyuXkxNYMQd4AcboSKNw1RS13dKnC1N",
  "key26": "276Ukwpc1SuwmReRb9SDmN5Xssm1CSd384X15U6RmHXKFSAE1bmurFQ4pw6EpJxdKj6dSgUfCmyV8t1SiVZB7MQ8",
  "key27": "4J96Z96KmRjjKka2y3puKJGtdqBUGkC9BNsBc3nYsbNCXk2KoyVeaUDSSuXMo38Ek3QC9booyBjGfWF2NnwhBJ6F",
  "key28": "2HYJLj5XJ8H8X3Bs5DQFhNzBVjAp8zpKjinr4HVHqebwLdQ85taXJNz7j36LQsvpbu4Q6TXEebyLTSaNwRrv6Wtm",
  "key29": "4Xu79cadHo31BNZC42yVZs3q5i8UQeg4pSaHw6HYzaDuArU1GT6tQkDSCwHn3DZR6zh4D7WrmAiecuSaXnxFEHLZ",
  "key30": "5vrTdFUbFfiu8xmxXWuKWdGFu1vL2mpoXFCJnYjkJ8CATznA2UPKzgdYdCrZmpYyt8Pn5mtFjZgV654ZGVmiSen4",
  "key31": "52HNfWSWJBRmE2AF11gnMJSP4HeQduwMLgWuQDj1po6dpMVdHVfgnszsSZPZnvkddqi6TrB2La8F4mhEjdytcZxd",
  "key32": "5LAgYXmxghGqovrLzCYgiDawLRDeEg61yknLDohhauKnWsvAms9NEPW7RYne88wesATf5kXYs1UnV2UUz3Bjcr5L",
  "key33": "5mCaqFMhgmxMviGrfqaoGrXk6GroBx3LDnK4sa5qNBLZ8Puxz7niA2iEoT96k7qZhbPAKK824q58sKiDYbha4NjB",
  "key34": "UijjrFMauW1qh4EZMo92MhdwChHmWXTqB9VUNzUQDxZaMtfMbgFVTTVq81yrQ3y3Qs3obbeaqMFZobW2NmV1kcK",
  "key35": "4z2WwDFpsJAvrwxbkToCUPKQgaysTGhAfTAfd67PZ5Bv8381jhd21LdPn9WybFkYwFiFHDDoM4byMgSyuu38eDYA",
  "key36": "5LaNdBL67rkznYLkCD77ptZAwSFNeLz4ZTkGQjtuBubjVmZCmRymFnpgQAnDAnPz2Qx6e7wUuvh8BXNDBhsQt4U4"
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
