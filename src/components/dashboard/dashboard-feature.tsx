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
    "5HRX1xS4xTG1uqynCRhXP2MpZSsMx5utgAiH5xtfxKdVzUHxFwWu1AWUY5EXruC4tBD79DWd6nEWk588si9rgFHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rikH5LprYjxT2HrWZVwu5eABN5tsRVzPZ1NFgiU1onCTwMYYsAvNhHzxVUptQzsKAbcbWFo2uWwtypgw5e6H2Hw",
  "key1": "4u17GErnh5gGPXNa1cS5iWAfYwQoggWqiHnUnrAsq3H1YHGfaDrR8265WJwbGE4YMF4xDV3bMQUrVtSELTyXRLcR",
  "key2": "KJZSKzUBhkTZRrgpjSefKtTt1cuj5Zs5LjWKYhC8t7upnVSRK1FtNY4z2zERpDEqxJYFifMkUg3d5VRPf7Xwy9o",
  "key3": "2oTwZc9ZsCHAk3ZPP2fMHYFzq9t7j8ixsRXaS984b6NQj866rXQHavnxnYb5LZb915vcTbh3KCiV3ebNQE1aufhw",
  "key4": "XifLWNcekxDHEdUDe8o2eLLbmm6cCxuPh6qgnN74hRDha8fMvUaqFu2YbALrx4GAyg9VmcVz4cSPwnNBzWLgYr3",
  "key5": "Ar2SsZVifPkpt9u2RfQxWNP2K5fGFJdyapmtsbjiCuNZYFrJQPyZojMUVkGuWpAZGr1o82xivp7iXgSLpqiMnbd",
  "key6": "5dfSCzH8e6LGVEEDEvqubbA11y22ZSDvBYQbbw2xs5noXrgD6vrhG4WQQYs2JEncQaErrcJzKQViHtjJbBBKmi22",
  "key7": "5St7gC9HZEfwMCBabXiZkqtyC2d3Ykw316JHkfcqGkPgvd9NKvzVw64u9K7BQ8EoJ1RyftKLrb9N1S9zSbrgdfM5",
  "key8": "2NDVwFzTnPoW29AGzQ868JTRsNtY2YyvJkMwD9xVdsQpfXBbtVRTZW7LLXbs8ADw8AXug8erGq33zGWUPjYLyFoe",
  "key9": "37oAnLp5ycAUceASWzAYB5jZSgcJGRUAbzd3kAqpmdxTKatbtGVmfUN6joVHBGCGsiyEVoySdWzz9taYE7Dj5GwG",
  "key10": "QkkYELj3CxTc7uW6ocQADqmwHaxpcTEpQcmHk9c5DV2pCNvBh5nzFk2mZxyFbV8bD3mP8qfT4hdCnSw1Wr3Hm8m",
  "key11": "4aU7puTfANu4dA2opV1B61Kn2SU2k31Uk6ksCDXaZy86q2f3UC5H5n2LQpZevDWQvzXLJx2YPDmmiV4vbHC53ukc",
  "key12": "fW9rUfZcrhGph6GfMt5QyYnbhgnb5CEkTGji2UMzVnVjTiBh7XrsaoPtZX9zPPFPTyFzbsGeLw4D2ceEesEd39d",
  "key13": "4urCj7poWHZDQpNdnYXMhXXRAVywRiBXevy1RudWQBjLYnHCwxjYf5LwQv7hwk7EAn2tuaxWBkuWzyrm3vfehPJD",
  "key14": "2Vf6MT9drwywTufG18p1m9S2RkFkgyv4uZD2Z9GUJVuKj9TBQBbZ6k4gkKZQoDZ3snMoj9ifnhwo8FKt5ixUqJJa",
  "key15": "3a3raBakBmayjArjrbSWmfdHykiWNhD97SvVfo3ukK2XMF5T8dYrmuFwEnQDMCurtTuZYj8dZUbYwPWrubE2UmNq",
  "key16": "3PLUbsVm6Uz9aRgZ3nos4Nifpb1M89menoQHXut7XES8k2hJzSEgPrVme6wizbBQFXGexPfQHZD7SRqHt1sBHNuD",
  "key17": "3dPBd4qecgNmM5FkXYp4yTK5mEKDyrw5AUGiRRgm8J4CedxEaatyKXtDVtGZe9c9esk278EhnGqeiyjQMT8NKqmk",
  "key18": "2ZkCTgYhHY6M7FXqLEwJZKehvNsiwjFhWGQgavUNxx2oP5K17KfNX3b8HFe1WbhMxR3jD9jkay5L5BHp3gzC1ZQg",
  "key19": "5WhakwqTnyYRdq99zZACxSgoTr5F95gN8ZRAGk8nWdyDrQrBXCVRqWwT34wLfK9wf7wPe5Myy7bvvedSoKVZEzfB",
  "key20": "2XyvsGGoEhXMyGZeA8XfMiGGrT7Dw49s3hdwJNPSuuHCjHPPqVKUUJxWKJP82SnJjqTjPLGUzcPgxmcnpg1WTD4H",
  "key21": "3Sb94MNSEuQp4HnyjBpSVWgF6JMii3mRfWzXPzwQpUa5Reee1gSrB9Dy1YA2hEBfJt3ZFg8s2EBRP43phbRSi58T",
  "key22": "4nTojGPVnikN7WnivkjMEg54SyAxv89d8KTEBGMiy9pUouHMVkEsszNa1ZJVJhLdyV4nhQ3y6c6aKgYnj76qLMMA",
  "key23": "5M6fPR455L3t7KaXLE7SMFHeob3Y9qPWv6XKKVfBwMYvpcseMv7qv9UiBbPV4DRwWnEJ4e51yUWru1iiXP5vqVi6",
  "key24": "3bPACLcphpsL3bTB2V3iK1uNa7nnf49Kr7pfayHULdh2oY9mY5SaC6ooP6uPEx2hfBSSJAEXfZprBARvK9CRfMr7",
  "key25": "52ViAkUy9VQAz8KuWbQHLk6aG75YoDHJhYZSkmM1WP9Radff32vKwyrcDwUCaDnJCTjmGBMZZoHbxuHPjonB2vwD",
  "key26": "5NBR3i5BDgLNXKs8Vpm1aWLJy9x5V2X1iY17oA1WCt98wPCxxE4pLFjeiHTX6vGSzaNTJsRQEK15Hfbg2n4K8p2K",
  "key27": "4jXYZpo3qWfKFVV8DV6XJgL6hyLBu7hgnjrgh8hCaCgj1vJbxpzkb1puhFhBA1PHkTD2gyrMCCXaZzVEcnWV7JbH",
  "key28": "8irXKK9WCFnk4GksCcswbzReSedtaEPrR5uRSKQGyeCuo1LXHomYqNmb52qXWA3b2T5EirDaKFtrUm9EeuEXaiX",
  "key29": "M3sU4KDtLrcbDbYqVJYp5huiNh8w8QvXhEDpE2o7mhQoVDeyzGwK9gEL6gYTW4hgEVPwp7amivHEDTprW9cxK1S",
  "key30": "4GT1CeJKygBYwrHDH4LG5dyiqSfmu2oqDsCDDTYBkjoHK7nN9qMPdARwukbfHn6pLDovws5AEfzPfeCggmmASN9i",
  "key31": "wABJSiWFontsTu11jFXPGJqK3c2Xywm9Q7Faii4xrgXn43stUZT54LYXfhajjaFfJ3WbPeRDfs9hohKUW6KCjGA",
  "key32": "43gH7iMsP1wMDvYCceEf5BRqE3h13WunNiR2PgSqH9JK9r43Y52ZGvwZcaFA1XfQhb5ccASTg9FCfA7ircLCRGJk",
  "key33": "2Pu6HKT19e7Y1uerfDJSTziVPGMaE7s1wS7zPpgEb9LtQpVS8kpRVmhpZPPLBCFMYXocMxD2AQnK28w8K7hWBmJ9",
  "key34": "4NAhhHFmr2Fg7gPMA9tVhDdFsXUXdK9ErcYgLNNvLBKMXDnC4A2P834ikbuWDfotFdLsUb1jhXfdTpeHbgrpkUe2",
  "key35": "auuW3aYa3Q4QJodYWqegj6epyPtyUJGCXMe3XE7qwSLRhRuj6ytXwuWzQDPiWfZU8wHzTGKnHzJNfUpbgrsPHgo",
  "key36": "2CRb9XU9NYS3Cz5upD37FmZNroP9Q8DfGrwDCBmw9sccRxBCpzNvVi5ctzQkpnW98WUCN9PcdhqL8GwLYY7AUs9M",
  "key37": "4rjT6G4yXnhQSmPDQ2Uhv8manQWdWCKCbHQE85fWdwSVYe9KiXd3RBVEETbcgYp2vVWHKZryGpGUnxErTTEXAdU3",
  "key38": "42BujRTwCVvjD2cAvpUwPfcJ6k8FW4nspDYCTzGQYYuJ9bRPC5ozjQ2gGoE931hy3u3eaeYo6R1f4ULHab6rJbmA",
  "key39": "42T7VLEgKYtKbAM5KHCYto7ovVAR4BQp1xieBBpRN7zDCzfTGKcXYJmExtEnLzfkyScnP4v6fcU2uu6Hiprv4bUw",
  "key40": "231WdVYgGcKNh1HwJpqFufHVGL8ZMHfUU15XxLEGbwC4nrbzFXxp5dxR19emgyUgxpv86dc1KQdm7FRQMyu5SuB1",
  "key41": "RSbmHAUBrj3FoLfCBzh3Ke5dUKSaKQoZAHinGzevUKW6GtF1HTWH4rGxVxej9tdnH18BcyppnTiygc72S413Mvb",
  "key42": "3ZptvoSgYYPGWRxkXs8jEmaynsrm2eSZ7zsQs5bRyt78Y2toDLsSKrnJQgbtEEum9KjXk4bB1H9Ad9F1fxEytyBx"
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
