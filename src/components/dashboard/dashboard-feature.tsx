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
    "3aJuhZPaBJY4jF6ynWNJ6hAj5KH6EJDxsSYSmmusxXxnPhVTaxPBxwcZUzxmVM229KB661XWn3qgvBwzTku95tZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QaQ2unGV2NJoc2TU2AEVVKXMWSEAjDWrML1vALFkfy9CbYe7NDWtQy8938jTQKG7TSmahDabajxjuU3eYSfXEST",
  "key1": "FVXeusW4VymZo2TDgP8Dh9QVuDMwr2ppAPnj5z3nqnvFfR2R9P99zRL9fF4tYEdBCqu8FRzVHNa5SgYM3Hx465q",
  "key2": "22TtDfKo6uYHgmBuA57oQr21hzdniidhnvsHeUJ42bfGJYZW4UyyB2pNEX8pSh5xPfn8nfuerhE6Yz1caJhwxTiu",
  "key3": "nt4rNmLMdjvS3BgAg3DNbHjRLzBR3L8cyMXBDnJQZSpGbqcEvPuNYfd7kZkUscQMRq1LK9mFSCNPvAjTQVqe3Xk",
  "key4": "5FWaDbCBbq9Z5TV9sddwxyzpNZMeQkf1wumqJsUvNyzhhad9iVs9xHhHEWv7EP18VXnYV2ECe3CnA166df7QnkF8",
  "key5": "1kcq2HbUEo3wQZ52JXBefzfPsU6aKYdrqkLGcxraB9BYrpiudiqpXAgovJwJuQwfzZBaL1oEVYR5ibKPRQNJWtp",
  "key6": "3FR7rUVzRwZttzyMtUSwpjDESpWrRftvTomftyFzxqcQ1CmLzu3Yz95wpMczaoJpW4L82VUdZiXXGYgZFvmg1DCr",
  "key7": "5jMtuyYKXXJi6tjoS7S9mhkLEUeMVQ6ud2Y2eFxc2ZhxLRFhZiExwpYewBBXoruvw2buxhdj4xHGoq3YZXebBgJv",
  "key8": "4Bgm6EHTD2i3QSnEhgrXkonLZ4i4Uhxjnm6WH3XWmdmDq3HVDbz9XFLcC9Yro6wMGq4UaTg5CwiHvuWya8Azcvok",
  "key9": "2eQkEyBFdgnU5aEctKqUSi7BR69be3cKKscqXWhbjxUiemWvC38jzyV5XbmZfr98WUudDoWUUjabjM2A9S7nDURA",
  "key10": "4jHxqeEZnPm8AbbaMURFGTuGsMEVQoAWh5bYYC1mYaUuYsL4pF94HXbsPgL1DsacJEDnkYUAr4LCRHarfEeDW56a",
  "key11": "4FufqqQiH1ZeusWrqLDUhaPxPuxfjFcGJS12cKLKUMCxhisHpptoXtT2uXT1Z9Z2cpfozdRkvko89vdoQVKSvWNz",
  "key12": "2QBqodry9rZ7NbezNSQY9N3W6AYMDuQZ4DmH44djbB9wKPRwj4Vsx9JJs5EYihB5zNAr3JWoahSnJpNrBpFG38vb",
  "key13": "33EseDMyPo7n5roEivjSz1sHd7Tgtsyf9AFuSCYZZ56U9xKi3kQya7iAqLKHzu1T5KQ3jR4wzxx47xHqFNKt6mcV",
  "key14": "5jw4J8Mpi4EZET5vHzGfpNHXRRkXwy41YT9BBZJ5UQrhnHKzZYAVPXHrZKCPkRmDMoNda8PhipFyjxV3axo9qsAw",
  "key15": "4TiDTuD12S6mBSfNwpBvLrgT6fBwVov2UBJcSyfgXSYYK5feaKy8neoFEBBxFDhVDFh9GdikoUnDkWXptE5uBzss",
  "key16": "KnCGD5mvKQwr25FguSAWHyp6vWSaUFTka8AQnKg6MXZFRGQ6sHArpHusZobjYLYp1ECBuiM7LM1ZFjJwXJ6wvWA",
  "key17": "4SvGmhBrDA4gHxwMcqjYREJWPgFtQ8Khgidma5x2EDzL2t2qDc6g9Q79itAFJ2Jh7iCARuwynaKpovn511baSMZP",
  "key18": "PhDy1UA7UUR1U7PUY9DJ6Pvh5puUpsXYySyqE3czbHNLqC3AdCxsxx4LnMKBrtc7rBkJiFGkGCmvTgLoASz6VxA",
  "key19": "3ubGB9pniSg7PEDScPKkHisukFLh9H9AhgWDvyPjWs8zjuVSc1LXU7rmxRyUjZXB9jTR6y9U4TCsQ5kr8TywHFnN",
  "key20": "4XCMTmhp29ZtoPX8BzxrzjtbCeNVB9CUPijhmx3HwGSzV3mZYg59SFdY3Pov8pYDf1yahPSeg3ZWUaBVFecDaUMb",
  "key21": "24xv5Xyhh2HLSoguw4pHm9wz3LiarTGmifVetaExzn999TK5NzBp3PvQx854CUMo2x8JZJceddLc2mnKyFD3Tbpw",
  "key22": "FNAb4pm5aXXCg2k6U3CRJQgGFDMV8e6EGR2j1Y7nYRyfG9cjW8fdWbjhrmb3V4vos9i4FnGdhC5TZwzFbBXpThy",
  "key23": "4YnEcb5tonVasP6R4uDBQAGmF1bfVVw83xQwUmaGjoR2gvqM9hwcSro28CzKfmQ72RXsD2iBq2MJdDqqQEBoGCWy",
  "key24": "25zrLXZNTieRqu2hXby6ABGumXTBYBY8h9nkNvttFaxUF35dcFpcyyPDQNjx7YcFbZSvq2smd1zZLbXdS5ZR3FBQ",
  "key25": "4Cj2kUMUvPwPFytgodhYQQNy6b8gGynCVjTmHMYQEuFnKdauBR3bmBkbxKCFjqc77sfgfBZ9DJmJzVY3rwb96rS4",
  "key26": "2zqMm4NNDCSzedZs8gzvsxY8rDQUbPSR65k2f82y9uJRWBvBVpbA6FdPAPSqbEZf8Jr9JfvqYpxw9VtBvJkhC3ob",
  "key27": "5aENZ7VA4EsVQLmNFEjK52y3KZ7aBt47XxvB51RjLauR7GGkMiA9x9SbKU1dgcYZ4QT5KMJNoyWpjFvZPjqwm1yt",
  "key28": "j3fmU9c6oiDJQ4tP95dYucafZgyNmjPrBYGZprYbK3H6ftWq7c1LDQPowPgkTgX4Se6yrB7n3Z51v2NzmSR77fj",
  "key29": "4CXvUfzv3v8tbHuZgw81w7NHKervVwbUzYLTweyz2xTmCFyT9g7cGK28MfGZERrQk11v1Qsxf5EDx8hEbV88y776",
  "key30": "eCovv8znZWRoQkVQ8oNe2mJnnS9a4wZ3Qs5oyNujjsb8xgoz4S4kPgx2uYEa4nrEniAUBhHV6JTSkgeBsdGYm1D",
  "key31": "2NV7s85V2FCdaPGUH5G9MAFtuTLAkqVkoobbmVnhgRb2YstpP5MS31DUZXm5amuzkMzyRtdp4PsFxohF9Cyrm5P7",
  "key32": "4BTDfoX4i1eEjtdrwv1iBjtfXZHGTpySsnqj1UQyeS9BZNGJbfrbF48LqWdoTtoZDDC6yTWtefsQoe3yKmKSrew5",
  "key33": "93cjTLqEZ9PrCvxio6EDaHvhtVBgqtYPvemEkMJdNFutcWXa2yz6qFq6MQRR5UsKK5uHAqqQ1B4DT2Yz5NGGJnS"
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
