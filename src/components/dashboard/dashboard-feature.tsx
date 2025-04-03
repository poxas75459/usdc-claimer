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
    "5Kw8csPPPMXMasC5qZTHMjVfSKMX76o4Jei5hkLhgsSNvu8hC7j1VoeYmmWfebbjXRKturDhNdiigEZ8pcMdxnjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tGcZcK1NGbe3j7iFu8swHGKG1NkZKQzZA7p2JS7Ho1Y6ERxcGYxK3vPxXzUzWKXyd8TQLAJ3Ttfsub6i1GyHf61",
  "key1": "2CeJwEShxnrVuQomTeNjcJmG2ghGoRw4fyG76bTA5BoGhHeNZrW62AhRWUYMzRUBmEyeRRuUfEAGhSAUs4pbHLqa",
  "key2": "41QG4yjqu3qp47FargfHQKVn5gfaqs3D1G98ZGNdMeHzT4Y5xJMTGkbLPRfHhfrQq3NQSjhdbH9PyyvVYgjPo71T",
  "key3": "3tgpio4NNZEkLAT466SnNe3jLKpQzxVXZFDQJZZ6wbgvyUYgUHrUKEkn9r6bA2i9HuyzbJTdGxemX4NApuTByaqJ",
  "key4": "Djw5SLz25WnyxhZWKbo7bu3Z2Pnz1TxJban5u3TM5uKvZPpEUm9umVSLJXMiq7LMG4WQZ3wYF4eXNuCKtWJVJQg",
  "key5": "31LffpPSJPJXkSE87Ao3fmhkvdR2tJFn6rqoehakF6tBFPsZMVQN5yQfs2SJZF16rGj2bEjYXqXA9iKvgjfYJpBH",
  "key6": "54yinonPHkRS1ZM87MkLydCqqsa1oL4Tr6mYodXrtmCMoWgF4mWLiNPeF5H1McBVwuxfZBDwPjn2rTZ9F75CZM5r",
  "key7": "oSdjn4gJq4MujsxazKoAPZZNdPQbALREm5SeyB8RoMzGNZKy2L8Uq2k2GokVSVmu7zCdHyPYXyCXV6GnTLcv2wM",
  "key8": "2UXSbQojR9GXNutCQmjGLuShUaRcSSE7LTafBD2vn59RwkgcgwW4GZZaQWat19CAyFrVmipBjfjAcqmGkDkWH914",
  "key9": "v19nz7f8N8Beo3TADpTjfM2W9dbp6VAUjagj9aAGQoym2KykHKp2gGVrPckmgJYrzfwUGAMhgJfFzFzgQpv7uuw",
  "key10": "4oKQ5MMfHG8CBNryyC3w8eyncb2gX2PwaAqpqqEL27bEsWw146MZ29XjLSm8UrhCKCagVoCDue5AKaSXUrgZSVHX",
  "key11": "5CmxJQ7jRUzkqoEwA66WyXRPYXLezdvnXyUdiuq3Uqy8WzFmMrbMdV7RwWwQXzPVEnQ4FD2KcQ6FTg4ydZW7XQ6U",
  "key12": "67Te7f7tFn1ipAs6VPebLL2se7HEkfQqUJE8r1UQxi6K5g5zkzT3bKjUUmjH68R8BPJxDxXFAkDfbsZSU3XNE2E7",
  "key13": "2ngWW7rT6D6EWhqTN1v4vFRrnhfm1QmbedQ2CcBSHeCGVBy4AokQf6jGKG3oNWm5Ms91DEbGsyH6ud5Ne4jEW89B",
  "key14": "WAN1VnMjSVaiAUBEnJx146arHPVBdddstvaeK5Jh9hJkUhxkbvdD3zmEnp6SZZpRu5KZAKEDUyzyUNWWsTPZV97",
  "key15": "2u6pgo6CrToirzX9Hb8zMHtng3Fmv6aUbnXxg86p8fFB9VEoXJYhnd92ZNGmTQsqWwKMw73JXdh5B1bgE2M6zs1z",
  "key16": "55ozE5Bs15W1X7ar1u7vWS3cVTmgzJyN2tNXUU11pcdKAii1E3KGUz8B2GBYa1GoF4291aXNzNLW5mBJcnEFerw7",
  "key17": "33ExGNQAgyvjRMqSgyGHZ1bzJVFnXEd9peceNiRUy7MFnCeYsjVpBgTguoEnrSX746sDEbZGBmeCBrTGGtXipd6K",
  "key18": "VDdmHyRNDgLAwPhahr9ngNpNW95AtYMa3xYLKhakT4A4BZSaaD77H5PkAQGiUtwcb2x6HdE5Ugntc6YAaP97sgy",
  "key19": "4nSiEei7Q9oaKmCc6Lqnyq8aF7HzRPGjCBAKUouNfNtBMj9rLkpotGsLuUadyhgh4cDUTQPxGneMiWaeoSoX2nBM",
  "key20": "5JNiu5C7Eao9v3pXyakVpcBBBCUZPGnzzw7UR8VkmNuFQ8aNc1KaJZ6ZPYegbkASuZqkZXkoK9Y7ZMmXtctx7sN7",
  "key21": "5vTMtuwNYSivxUCKQ4ras4RjqWpHQUQkcx9J2XyuMuhwrdjVmxHjV29gfeRtKo75m7MDytzNgwaRjqVroznNHgtx",
  "key22": "22onxYN9r2D7pQQFuLTTGzLaFy1DUXRubKBnNYr6syWazDvGGZWzHvBUtPNB48fg8QJMwyBfirEva3VPRQTpGWxy",
  "key23": "4GGNh94sisvH1bfoRtEkAuCKwv3WVoJfXLfibrP16gDm2vtpUMhrjJ7Be96cGbMEmjhhgTfmHp2roMmFgZ1Mhu6x",
  "key24": "59cUD45DJqSpXpvhAVYe5222SWGRrPPA9fuVgCpGV7DCBnjHGeNTdAtNwkscxyF4R8NwHw4k8PZmieDuddbeJHem",
  "key25": "9gHCfBZ7r9PSPcEw24ymfWsYHcVKTcFZ4zFfvb1DLShjtH5RBU7CBBZKhaRWD2NtVtqKqrTXUnAycJbUfHhAoes",
  "key26": "65qpA9L6QhCb8KA4ofg42YsGeC1r93RBxVZAq2LvyA3Wf1yoLzS2TpESmpyGq9vd64vLHpEZjhxY1mnZDy2aALwU",
  "key27": "4xLnBoXT7sbTgnaNG1eN1AJTYHnVrQRmJAAkC2ucfzyjMGEGqLD8AZp8AmaZyQkxbfFYgU5MbRq5RkKExmBWTVPp",
  "key28": "3jR9sDdYyPcURi4CPC4cvsTcnmzE2hV9P9VSjZwzzMQojrYSY14zwgvT3qXwXZYYbhtVnLTK9KwBp8gxJ9SDXWzL",
  "key29": "URoFKFtaioju5izj1ErD4hiB3knjgN8Q5kHvWV6PY3NM8qTq9GvKbq8S92jmDjYDhyh5phnCn5XcMrJmYVVcHZz"
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
