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
    "2q4a7tiniRSSNe52pv8ejGZLRwCdDsMzkMyZg4jAkZuiqEAe4wk1cEBoMQV9htDLpdpLAuZDn5xYkprgPTUYeCFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VAtsKgFej6NJWrZbojaUFYK7gAwMGYkkazo2jiJXHVg2F5NB92FvRxvbE7stW4FVNjeXSsN6qb23UhpQ7WBrgSR",
  "key1": "59svidiKii1BVCDECGZrLnwg87xiuPtkddn6igBp95GgGmK319qVSVU5eqcnrVoVwr1s2KCTrztR5ZToQWnwFQjJ",
  "key2": "6BxdtgQpUXqLUQ8Vj8sFnViAM6M7XqqjLeBWoF9wRMxraNhiJ3KZhRx3JVcztLbsJkTZqCHQ9JhueNLd9zxeHgS",
  "key3": "5g3Mexuo9GgE5cgoManPMgLiknnpCM4SsxNSPdGHXEP2BWWQP2fitNyVx4oTihu3LqfKXR4mYgh6fGEQbzFSwxiG",
  "key4": "63RBNBP6tQPjhCGZAeA2C6Z3hXhQTxUuhK64W5ms5S121jZPbE4fubtJgVfiaXLr9fHHEib7ZYEtL9EwiVJhZbAo",
  "key5": "2JHbuLAqUTBdBrW7xrqPfN6PsMxyptPLL2uU8ZAW9iVLnnETSaV6bMpXCEgaJFS32GvKez6m6MWPs7h8notDFKng",
  "key6": "RR1Waii3hhkDjDG9E2rYyqGe17odeFKe7vCzeoPWw9UmX1KfGsSBfSL4u2PqSpZZHvptrCKKKMbLviKfJiXp3Zw",
  "key7": "3zcc4hGFVSJoSw1SEKSEa3oDC8TMvCwPaLqTE4zVtm96FnW4UeXZ5jXvukhbL878BPVNGGEiZfLNVbGrCsrHrF6a",
  "key8": "T6Fg4a8TAwxBnS9PBY9nB8FcFgUyU1XaurUCkrbTBaSAvfh1TiV6TKMeeEBNPysVRoUYyquZXKWSqUZw8iTjE3Z",
  "key9": "2j8s97kLkzRhRzxwvMrDxgYgj7ZRDCZ5LEqh7eLBTPiZ89rYgLHn3w4sApCYGNW98HEb7QToZ2N2b68ZLnViqHWD",
  "key10": "2N9REMBj4ooyYCCjv6U3J6R474F8bvZre3sotQqxTLJPvdQHPyxcymikD3eYVYgyTe4T7kMeDvT165PEckAe55Hg",
  "key11": "2NLb3i28kdPejaamQgu3qAJyR5wUbB2JTDUxBEXMZtyQAzLKh3SsPvjJHg5T2CHvsjyoJ7QQSSuCgcttaz4A9Twz",
  "key12": "5hmeoKa9MJdYQkDHssYqKNGH6NCUF1kQ8yuWs9w6NxdikK9VRhptMNmJ8E9TMo8kKKryQLNiGucwBScBtZ2ML1pY",
  "key13": "3V7P45k3EsHAm3JbRZHyvt6EUd24RRJgQ9MccLYd3tzsqR3UQdjsjQpyAbR3Hmdggc5aKMPntheyJSV4JfmFTPcK",
  "key14": "3EMC3CMxhuwRE19xFLgAteZKWhFxgpe3LjXWGCRh719sv9DEBLG1M9dKgxa9wjTMXNwVVScuHwj9afU7vL6WEmXg",
  "key15": "2qhHDjMEzKGqWAekcdp5cr98Hanspmj9mPer2NsyeYwkbxPnLhFLbcJE5URnAmz59WsPVtbVsv6hqtLSYxJRFXKt",
  "key16": "5jQL4gUiHXvXs8T4rJoZZhSSKwfPfefDJqxJz91u1V8Fp8S2TVWucMVeDzFcYz7nLSetRQdQ3LyBJEnz4ykJQXfn",
  "key17": "XEkodKZDFm9ahZAxFBeazHus9n2Zox3jzr7UdhyBnERgabWJUgWzBdfj6vUvCGiqRCJwS5uy3gxoPSgZgQazYNf",
  "key18": "59Qn5sZyZN8g534otyhKTFh3r3u32YxQ1814nGZeat53TbQKNhXtjxS81Lv4Eo6w9Ua4Ki1oPJFSMbmeL3Ygzpam",
  "key19": "2C7zrcQDcWL8XyaZytNMgLLR4jK5ys8vYLAns6zZmFPdVcSEUnvpNEsDU3ti5985MHUzXoJoLrSdmdPNfqzet7R1",
  "key20": "4EwkBNZtFZfpq5Eafkn6p53ijGboRDSxCuX1breew2RJUetk9NUA7SnFd56ud7F17LeYdhDfjU6YzavB6SRAkmQC",
  "key21": "EV6YXEmWk5xXjT8FF5BN1E1FD6exZKQT6XimsDGjygnMmjirKn3PAtoGvkBiH6ByNqVFLYX54kDft443HQ2RD1L",
  "key22": "23tceX7StfRAZ661tLd4t118WdnJSpcuiPmeFiGxVEbCBHPbepPNTvsfvkfVfEyA1XdrroP36JsThQp6dcicnKi8",
  "key23": "34R6N4qfnSihb4AtYZ7yJE5V3toiPXinz55NXP8LhwbcXQ98UkmVkuEkgrHFv8RWdDsTbZY2m2XqK4cY9K4iB2Eu",
  "key24": "3eMLi7A3E8usC8rLG9UUW4kcBX2g3Y3SsWzxvtZyUSecFz3kGbGpVbhogVHMjJaRs2KMmDFZqNf7rjoniZv3zyEL",
  "key25": "38zEp37t9ZqVtqFJSRnCHz5RRmQ52egijay81sA9enzCp2CYBn21BZkvF9LpJWbGhMXmYqKSvbdqRVKfnAGRhhgH",
  "key26": "3reymeKrUjb1naHYo3uRXNwFHRhCF9L8znzjNhz4r5EU2A7mBSxCDJPtXre6D3rhofnWuAvJV8wpcaHz3Yk5MXi2",
  "key27": "47snybnpAaxBwp8kvrrqmUhg2rnHxckM92Xy1DGmTZ9c7pk7sjKg8DEoLNhPwkdagmpC6V6BibqimrqsQxPXgRKH",
  "key28": "21oMp9xX9nX8SUPd9Ets4zxdiH9imoBCdjwdBiXeRic1V9Fsoecdjn6UEihyjfhd7h5rnjMABxvJMSy7Hyj412kt",
  "key29": "4MAQqRcwEV5tkH5wD9KS1n9gqY7NWmSSKTk1LUGcoWqZGFVp4oEQW9y55Tuhco4vBFMour5JMtxxc52SgSuA9JgY",
  "key30": "2QERMQyfpWTWEoUhmctGbSJ1cEG8tE4ikx8XK77bumLxvqgNxyVf82Ba2iyuXyZ2XP73DUQ2crJq7rVsZL2M2buo",
  "key31": "42F9x4SLVsGMn3BTWvBoACbyhw98o77HsZKGf1h7jbHFSVPUd49CzBypA2YSmAnshj5UwtXkmakCxJ2wjtKU3E2x",
  "key32": "2YVrwkE3fDZsUq9edP5aDMAs9Foquk8jiFruASgkAnskLboaVVg8AaYasfFstCfoUtDNidod8JMq2R4uVQ4VJmAC",
  "key33": "2hjeNtBV5Jnm9htuUcPwSmQgPhw8vRFH1br8yCEyTdWyAsrjAdfvbHfa48ToR6Zv6PAV7Rj6xHyTquMJLqiVkJTe",
  "key34": "2amt8dhrK1d8EeWpjG9YirTACV4XuW5MLSdtiiTcQhoMqcwtZYX7SWxPJHJa6wSphkAEgX13xMyHsqLzRvGD6i1f",
  "key35": "5Q4Yc1WvaopMxKoJj5YrEZa4yyxEMa8oBRUxFYRhPZ4CxwCUFRwk8mNtsD7bJ86DSoZhZvyJujDrGvkz68ywrEdb"
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
