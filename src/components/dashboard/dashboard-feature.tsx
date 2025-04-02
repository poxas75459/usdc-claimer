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
    "32rUyk5F6LpqtKett7sLuHpwCcfgTVat4VyaiXSnxyYKLYNe5Bh2yGDoiu5ExD9BaQzVTuLBfvwP5NB6iVTD44xf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XtPha7gXNShj6scMAscmvFDWSYESSAgCc7TRPg8ym2CZMBHJcSTFfkCBUFCL4npbKvvTi1gfjcB3UbTSGcpGwyc",
  "key1": "2zANL9Hd4WjwxXVVaXvZCw11mpcGBhqacjbGQWLjAgFL99tn1ZUfbMu1R5jZc1irrefP1cM9XZdvfNeB8ZSHwfwW",
  "key2": "3nnCX1fvp6NkVvXXoeV3db1rJNPLkNJVc4R3qcEbWHeiPmCubBFVvawtSTLkLHbprJ62n9WiKTgRAwq9Sr5yKodS",
  "key3": "4Ps7nTWdCsjH8QKV7ssCtibiHqXCVhZ9TAQyLxVeCQXVfJgf2j1eLT9CvvwwwFWysATF54EnoyGyaTmhnWD4wKV8",
  "key4": "3f8G56r5V57pMhGqnBCszQ4dNYqvMXt8pbnx1boVCkPPSG1zdadJb19gDHcUKtNAQSP3LZYiPJDy3dA2i2EyJXrT",
  "key5": "gZpYYUf5T6xfcghiy3GyFTzYmUeN8soncjy9TyXNBcizXQvj6CNDpPVNpo5zMq6GVr4Bd4yvC7M8rPRZwbUQDQa",
  "key6": "2UNUwZhtt3yvfhnegEwSR1JpYrHEZXfjuXbBDf3cTdrJMZ4bm5HUdTUmaMnPjd9cNKtLYXtZofT25T2xTmTtgHat",
  "key7": "2XCaKmPGegVk9pq94sMPgkp7eVyPzzFBuW1VjAFeubTSHc4qmZp5zcgwscH1DS9n52xR8dR3QDPq3hqXxEF5HyWv",
  "key8": "5ynANw9J6UV5bqr8JyRiumz6KRqrB6PY2aVnxzmfjWEBY5mnZk3F2q38dg93UGDUo2SvrUVcdqoc5DLBXXfaBHTk",
  "key9": "5CDWVMMxcwNE76ohSeD3g9iQkktjsu9X81YgRE8z5atLUmsvfDFp1qUSeJV5mpGhMmj57TnEE3Ke7UqM5PrjBkTy",
  "key10": "5UvusKskMLuuF9CmaYeuH2nPHXcBybDQmtiK5X13XdwzwD9YTZLKsT1As9m5iKbLHDw37ff55ukZPMweVMHWFAHQ",
  "key11": "5qezQns7PmWF7Da5LQyBSpgwTzSmdm5U4wxdXHUdxVQrqSvU1TbCCHBdFbYK6oFVQCcTu7n87Cq14hyVn4BwnEFh",
  "key12": "4pf41AtwaPM3eKNYUh9c4N4LSQRDgc2sFp8t9HLr4n4ys4kawjXMnw1sm2Ej634pvHysZBLfFdqDNs7Fo1MRpHTK",
  "key13": "3poXFYzRXJeSyJ5u72s9vhFEz3J3fZb6QQWBT5a2JEfeczTxdQSLPFaPfxFQtxrtUMcD37DDkeLkLx18ZdJH8ApK",
  "key14": "2uDCM89hQEooAuf8Lp6VRmwSzEqoFfs1owPKKnmHwSPBNAXHUan2PeqdJVZk4m3QYLUpmU3HiNa1gKjUEs9cLWYz",
  "key15": "4xiwm4xmcyaEqbLwxXTunQ6ck7NtjbjuTQGaHPWRy9X7u4P8pPtq4okBwEELkioiC9hvCvs1dAwHCLX5JcV1DVoL",
  "key16": "655GyjwMWQYjPD4J1yQ66iohFnMf4rjTXU1JH6FivRBTosnk8VwcQKqUfqrPFFYVWkbffAAynWJP11WQu3g1CYor",
  "key17": "2mfYRwLq9ag9uAKghCb9wVy7pPEko3LyYAoCdtnsrYB4noND4Pmkjca4bzymySz5e1mU7McBycrrdJhhTzPetdgf",
  "key18": "2UwNHUuuagjKQqaLJifBNMt3ySc7AqSY1vDfUNeAqbQJbtwEX3J4RVDTCQTrn8gDPaJC6f23x4MDsNHScdjo1Moq",
  "key19": "2Q2TQT2nm5AQR1Z8NV7efqyusznHKKwunsKnXbdupXhGPLStZaBzQMEmX3pi64Nm7i5mSJ78RdsTRwa2mrxfhG3B",
  "key20": "5HDBxTYrtbTKsffDvxfMCiimpPZHYT4b5xnpcXc7m67nfM9UEon2SpccNLuEWBcVzkRTBSyRwz3f5QsmX3e5q7xi",
  "key21": "31xeXmxEr77toqhARYwtxJFbNF9ycc6122XLXCidac7m1pANzy9dbYfDUeCNiYctvxkbPKv1TaHxCr2NVDkz5fua",
  "key22": "qstfMoUAHguinHuVGR1vkxrH5c8TeM4j5rZiPVPvyfTZD6QvotGZgzbPjvf9N83vW57i31vYkgFvSSWvN9mjYrr",
  "key23": "2Wt1b2es3x4x5oARNms3N8Qmgt61C3kvbizsTm33Vo7hu3q9xUqd99rBJhPwVg8kusvYoQRfZLSrh5jRhKfo88kZ",
  "key24": "3XRLW86K5SovxToCaLMWdKy2wHxKNcw1TuCvLpuniRRNuKHkFpxRehWzmwP8ATQcxHub9PMCcd9BJTccVxDJdKqr",
  "key25": "3Kq81DWynrEcAdu5cUMrFBBG4WfMbeakqtwFBXcQAAvaJaeeG8MTyxXn15zAX1X9HCmPxpXkARRKYNobaozVwrnv",
  "key26": "3k9WbSpho5vY7b7QxmPtXnkQWadBZXwPVT7s9cGqJBP5S2Cn9YDxoZ2yvhqmKdFpmtx8MMNnTieRSkAkatteu3wm",
  "key27": "ua176gdtsrzxmCVwVC3tNArYGgGHLAXfaFzXRQRr9w6xXs2x7Pf1kv76Vwk6Prhiyhb4KAsmf2YAXpJ6mKBxkZP",
  "key28": "3kB4MjMkpsqnxUUA6GuTUR2rpuQEUtZsXRyee7BHdrZFvYA6NLPps4ST2kHWVc2z86uoNVJG6AYhHgwZiZxqiUCi",
  "key29": "45vzSPVYxDbyj2pSxbyshwzefTxyu83uMoLCHaAngB2jQs9rM2dL5UiqbRhptL2PqWZrDtLYSww9zaD4AfAEPCaG",
  "key30": "4ahNbEM8DqwCajTd59U2k8wQ3JLQmaLwwoqB4jPh1ZmMD45K5Ka7baTrSwgJToocJMErxFtw16dgpM7JQPjfXkSi",
  "key31": "2C2LzwtX9w2WGMwKeQQX68y3ZLVPuB8QCHV8fujViXN8cxk1NNeNATZ1vSNFcbtjofR9oV1jV54dJ8hE7dvBzC5N",
  "key32": "2AvebYtGiuw8d7qLKyuyKf1Z1UvriwoaUfbE33aejZ1vDpna8Qgix9SMbiYzrsdyR9wLHaVHDnbXLfR62onvdF5U",
  "key33": "4VYRnZk1P9UbDLiMrvj8f5CGj5fhcCWRCMpbKgAKt3pw4PcetawEapnh274mnN9xtz7zZkiwnn9sJhH7nPrfHpm9"
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
