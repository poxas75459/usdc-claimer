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
    "2hmJuwU2vaoaXGoVPzCf3zARnC7MhFfgicyr3SN4vmYTRFwzgWKsv6JKxmEZeodHNgv85R3fKJ5aMEQSFP2ptmQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BrwhTg2w5q3pEwtsH51ENh15MqxQ7hFdxxiv4Sek6vXXK4HxSbCWGUpPt8zZmy8vxSSFVtFYPqaCWo3Bk1FgEDm",
  "key1": "543YgviMVJVQ4BLiKCxUYfev9LCsFfA9Y8q7DDgjXYQoNko6dKiChQktyVcNKgKJRrop2V1ADUM7F3oPYVyd5Z9a",
  "key2": "2hNpgaCqTjrS9FKNJyQVSE9zVnFc4JcG1W7jv64ZvAkZ8PGPygwYNiErAJv33bFM1fdELf2UgyLQrAJXKioiDEct",
  "key3": "4Vka5pMhVPGdpK5TrvdveWYUt8Xohu2zLFZUSXPNRRxVP4N5P7PS4N3UtycBw9HJdHqmJgDALeghbHkQLbbiKWjB",
  "key4": "4DR3TdRFenaih1NN33EKm2nFSgrgWUZguxhYFSEcMixEmjTNpHZsLbeu85NMSRuNv2kMcNdBq3LZ17fAjodJ2wSz",
  "key5": "3cvreHmDEC5ejzKYENqoEYMtuBxzm1o3Es3qxrwR8BWmJzWsmtYqwPS1LE1RGRnsQDW5ZcNYpqp4dfkELFoovifV",
  "key6": "5V8rnoiWVfvRDFAe4sBWnNgYwJPASoR9AcRGMhT4iRjH6M1ustQJnzU571tsJEjzDt5mS8CNAvWpvtph9oLmoUKd",
  "key7": "5C5HNpUqUt57Q6NWmrJP6EEBpi6aP7ifeZjGzcYSd89o6bJ294WE4FxucNub3omFgJGaq89WV6GWx11qHjRLCrK1",
  "key8": "cLZpiNNhpTEiWVdufRpgg35CSsrLUonkx1Y34P5rY1QKBEbskcTJmk3rJtmcJQzyj9DYNELVBHawgzAQ5tWZrkM",
  "key9": "4QAct3oqCARagczNzuYUgLFqRKg8CALenoVjDAcXGUFohZUDvabsiZ4ECyXgcRvuhMsf7kHFQUoQj46LEzwhu6ra",
  "key10": "2V6mAzFdutN5N78Putz3ve3cwPETywg4wEdKPb51dL7fsunKsMVsRFaRYf9nSVxfYqLw4KbpkcfhNMSgsNhWnA5p",
  "key11": "VgJi7vvbhgymifk9pLqLFFYpVT8yu7b1M7t7p6kMuS4pznJF9y2rMjTSU5jDEUCBB4A62PwceuR7QMXDUH1Jidt",
  "key12": "3aEt9QU7kVinpGp8A5MHFCCEo3dQbJhb6gPiikygmhYEDBvJuXHBKpCMFdJDL5ARDadEX9RqXZTf6SqzWCJyXFRx",
  "key13": "5rCDZX3vWhegVLgXQuW5FdP7c2z7pwue2hVJmQraAqooGz7TPqwTebiW4Zmq6ABnjPAgUXp3r2fa7KbYjUsjCpaB",
  "key14": "5Yzwga7sh6pDxDqknDurDzS1UR2vcmCfPmGH3Bmaf9nEcJotGXNbx82DBwxzdBqekcwi2o9D9rT2bkY16UzdWXuR",
  "key15": "4ZtdvLGxu1fAszsag4ynKa3ruCitwVYRneDZHhvxY1hCy4Z9WoYZhYn9PMawstAWSDmURBLPPL8eVk8qiqancmst",
  "key16": "4A3d1fvHeP8AHUmVKpEQgzkAnMQx6rTCPL6CVXKHKEpsCSCgTG9U5PMWBLAR9Cajq7zTojCBwWgHBYfGfphogZFz",
  "key17": "4NpfzwVLhTwYybdj9ZpdozCqtC7qECoydc4W9QJpEgvb3WZxPgkhYPW81ubbDUKKCm6ar5kJc1wQRokQSmmPGyKG",
  "key18": "5APbvgMkSTTurokZ2D1zStpNfrxaM4pqpyDkD3Jh6TadJ7UFzU4M2pM4CZaRbpw5SAQ8vEKuyazc5JXuaEA7hpHp",
  "key19": "5XAW3DirQStkUZVTrvJSw8jLfnYjwViQHZ2cxNxDwzffLwUa93iHh5QNZ6BEQU3fVLzLALPvQ2jER4MufkWxLndB",
  "key20": "32v1WYgoreB2fHC1GxDwPAe79zmxUxTZT812Dz8JnLugpDDNvvosnazrNTgi173g5QHUF2k2qBrnQwGNnbZjnqgD",
  "key21": "3efVjs7ZRHf7YE3fA7Hr6PJEEQ1sX3HEcJ6qNSLSAceT54gdnFeaCWXTNEa66Xfg5CRXNzbfHzRt1kqkUbthZ6G6",
  "key22": "37sN1dQ185hFJ4wyypa3JPVju6TXvyqxrvm3JFPtvRzTmDKZufxRLfv7frrvcmhCzAsdE9ATZgXutqgBwjXMqPTd",
  "key23": "62W2m1KvJBD6aDZ6hZYrnQHPSERyn4cgsZrcuMgHk6x4iLETaVbnmvTeH6SF2ik3Msracur5Nqgo8da8tkfACgrm",
  "key24": "2NobgLhKfbGU6CZKfYGPMPHLxWvBS3jJ191BncCCYjFtKgwQxgWPZzVzsp39CN7KCR6CDhsSWkQDKHDgmr3mguvN",
  "key25": "4j23RqsNqQXJjPbxAo7rHT5tQz2nzsifZ6vBBFEK2LkVTas1MsnvXQDbQNSjncANdBXnKr2LppoHT2N4rLKFK27m",
  "key26": "5Udk5Ye2x6jm2WQhYjN2z3Dti2VtYAakDcH1Pq8Ay1u7ZU6LbB8gLXq2GaPaAHyybQ3j2o7ew9SZzESxdAe8KL3m",
  "key27": "65j4LgVvUHS5UBJjZBaAF6jhRRs84jVqq3hbpfPtoWbbAW6gVbPZAGJqq5ekCvbhUWSZswn9Jvpf4HSAuscuRNcU",
  "key28": "2F3YhQ9U2BgDEDtBzXYgT6BiK77YXN2P1sLPzeNDHEjybE7r5uLDBTyfVJqYwFmpFjbziiJn4EPLMq9pWhtf2dmr",
  "key29": "4ByvAJfCWmeXG6YU2PWDU8doCoQ42AKJc84rwuhQPpSi3mZquS5e6tRtwixox2wZwXP2Tp1b3DV65dy4pVqQfZ1s",
  "key30": "2xJ8a1tsF4EBVKLuwkbjkKGfjt2gYAC3rYUFSJFYZ21YUvkVUaKCf7pLbUiCKuptkKHM6Evj8xAnNy3rAJGHwMzj",
  "key31": "25nMg9P1X6LiswFf92PDMrsuigeoZNdkSc7cL38R5JZyPQ1hKR7MFC1sHvduiyKDSRR3dgkeFFzqGgTARWVSif6L",
  "key32": "2rNTUn15eLML1A4v3gEXZj6qgrEt8RGRnkCroZtUiipZGd5W2uxPsT3g3XwfcXNK6sjJq5mho5qZAMeviM7z42P2",
  "key33": "8HQeMhhE5NSHwiHuKvawuzG8vJMdS2BZJFBLHvFvJeUGB5oZCsphtS9hPQS1pEdVV8rSgDqjULJRjKgB2bUNQkX",
  "key34": "47rKor4bg2mrXrUz6xJY6p1gRcHtHopxsrm8nzTTNgyCTkBwjme8udXXHiSm1vn2E1YKSHtY6CFFEru5FmssHRCR",
  "key35": "LYA5QrJeMSQSnGoMcsr6sBY3m7wMvNvFSwW8S2SM5NwKKzn28dDdqCprSKLGs39HAG6c51fENhV6MaMpq4qaVDh",
  "key36": "bJ85Gs9zDkQB3kZMeNYejYhTVRVsi97XWsdekXsgUb7kqEeCxviBnXsMSycAjEeU3dJ8TLVPBJYHpJ7NsV59DV6",
  "key37": "wLeKB9reJk9ftiZv2jt6ZqVmzaK6V53aoTWhEvjCLBp9H2GVbJ7LpDr7hCxhtNJFwzBKzn8gZqKVSmjchFxSPqB",
  "key38": "vA99hSJpgr1nYGhgQ53amk2VvEUzMJiZxR3annVE8zZDEFCoEj4C5RxfS65PWFHkexCxkeXG9L7K2HQg1F91ras",
  "key39": "zgcnem7EnSeUuPhFtVZmaUNrFXVNxbcJ11SjDSTxF9f7nfGHpHZCHYF7yBU8nb5rKu59CLvapLCaJZcRB46Q1NC",
  "key40": "5RGx7UjVsjYSc7oEFq9uW9M7fGKrZWemdVhsJoSr8MtBdAyRyk9uYAsBS18cf3ysQAGBBAHc9GKGaE1bibRYGisT",
  "key41": "4FN221RvghPBccYyNxf4CAANCL11s1zuo9XhtPMQfqv2SENwWMp1iD8soJcixPmjaPveRh7rRQkfenfxuhYPjDCt",
  "key42": "5HxAQq4ZVeWetnQUFRU7PqEhPiKzvPGKMbRKSrYVujmTt4aX4qZ7ELabmLrkxcZYmVbjfrjY2PCsBpVSLogiiPAK",
  "key43": "3AaQo4LG57Q2dxDSMx4i2HkqCgV8r7xawmkdhq9jMAmPn7RJj589nvqFScZmNr4ccUjQdPkpy7UZM8pZsU3Pdw4c",
  "key44": "a5Gibb4oU3J3q6AFXeR5K66VJhwxyLDQZn8oBvAAzPqp2tyQGNBWGB1chpfW6P9xw3tD1P3BrQZRja4zdQRqNqB"
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
