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
    "4K5Qxo4YwVS6LFwetW8kjtzgspSnPP9kMqrLbKEvLAEsa9WavZ25FprvacYFM68SSQU6Yc36ZL3ojbTGphiUdPwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x5QQkmqBSrBHfEf5Jp5eGBqh93ahZidAbp2dPqWV8HvUdhSKQPwH1s759GEC3GLTBBJBi3FTENoTu7j8KAnGnFA",
  "key1": "3EsEQsPjTgb2cMcNbXS3gE6JAZCF7V1wXSjMT3Q6J1hLPinDaaDJ5ojaa78gHK7zzxugE1ThM5QsgYefng9bZoe2",
  "key2": "4SEzB4yqyeTPA6vXyNd4nLK6r8MLNFf8u5phd3RRqghomwsDsStnXU8mb9XXdVoytAhtCpZpGkhzyCZZrstCpTKn",
  "key3": "4rU3wvv7rE8dzmx3ado47f4fyH6wW6d1XHYUhJxtMY9ixKwRiQicvkB7F1kFQau9zJqxzkTm1ud2SbfKNEjgXAcN",
  "key4": "3S2uGtdvZuhs2gJndeViyZ8tnzF4NLuw4yBW8nWfCzWWBh6yFtiQFkaSfr9j1edYQM1y3hVj5j3yAd6HsmezkZii",
  "key5": "3MdtP3Xy61Jn37UyrYhxWCUXGZFEz3txj1eVj3Y4ZquQwfxvtByy3Gn7feJL5gX5626w7yuFGMqhGCFSv7an6BJs",
  "key6": "2cKzUnNjtCQMc29d8Cz6b6Hjzy2kuqgDqyMsTcmqmXW1DQ6JXh6ud3BXPR1kNAqqCYjejmVVqhKCzVZQKhxwDAQZ",
  "key7": "38yQLrncAuCzJy9E3aTikeJEcKK35Ft879jjjh16uPbb7HubRPGG4PRaocbjZXfmCD5DGPyLWqsYmweP1Hf3kf2L",
  "key8": "26p6hmUssDAhwKTKuNRDWAFDcZRR9CjYereXcAYAbdL31WVr4i9u5BwmB3V2mRf2dhQdrBaSc97N9itciyPqeLpu",
  "key9": "36U1wtAcsuLAk6HDNssjVPFFipwqiTEoEhasSrshKFQYchqBRusezcjPsyzQRuBcWNkb5or3YDXtYyx4fWt3bwnU",
  "key10": "5JgqmeRjiH1nt5rqb6nJxMf3tP5qqkF92AiScpwhg6khZyY5s4iAPpeyvnAP8Q3hKzXNi7fiXR5Un5CYjAX8dgV1",
  "key11": "gxn3mniDz2FbCZYnAgT3LwFMwhhCttnJAfFqrSRaK39JWYLavg9F55aqU57DnCgog7RHwF8tEKFakyuKKhNvmuW",
  "key12": "3yNyEp6LKbNeK67kwYGkpvZWtdWFwDpw381dsaHiJsgXNkzBDAPsf4W97QPSJHCD1Msd694mMBe611w3SLnjbRpW",
  "key13": "kTuWnyX79ztCyTidceFkREQ8QXfEGiZGvtB6QLpdEc26PhrkgY5kavbQ8xKRdcuhjk5YJVzYqGhZf6XPUh4DwkV",
  "key14": "26ngSvY8Hb5J6RfphmXSL9BmXYCEhWjcgWC4SxbocXZ2CrKHi8yQGGM2QWrZFs6bhb3upqFwhvtteZr9KoUjvAEq",
  "key15": "2CrBgXzf4yBr92Gzq9toNMiSB3CxGdsG1MNA5x9621iFMQqhywFu4zUEXPv6peEPL8T2Te7wckJXLYdjKYzaa6wF",
  "key16": "38JhsmZCLXhVULLrZSEru1EkYvpvuTAC4RgcLdxXriUD9zQbbfK8ng3hZSdQfubKwEofvQ4M91rVaLYq3T4DLCmr",
  "key17": "44CSEEcTRBFUT49xBfSsy12xjEH66Qoam696VoaK9iXYJDig2YbxLogGdpxZcnmgnKBY3pZicUpJz11mAbFFLwJa",
  "key18": "kFLpSQ7YWEiu9tdqe91kSh2oLJbbRaed8jeYKNQWZrbBSfaurfrvSiviNXPzP8eLdPvgAcCnk2uN6RaKKNH1Uxw",
  "key19": "34UMSNtXFGjGvg5izUrdLpDpgMXoyu5xCopyhzYyGcQXo3V9Gjfhey5dpZa7CzAHCPhVDCcsTjWABkBY2GCE4VEz",
  "key20": "3QQq25ijQZb2KB1EmwAb6TKQw8rCYKNQk1vdZbb9XF5VFaZNHcdio47riQtyUaA4tvaBYnX1vGT5gFg2eht4w4Wc",
  "key21": "67Di16Egqr5SziNKyNhfJXzRHyqjSJdC82fVFQYU48pFMJAPNUGMAa8djXWxP3LemvWQdn9c7VJcZhNDcErcuxuH",
  "key22": "4c4mhBZdYhqRkmX3CF3PcyMYM2Wg8AQAt52g1WKHqqM8ofUxLAoz5mRyuESYX7dX2YDw1xk3SQDJDPXfPs3QR9th",
  "key23": "5MsQKpZW5PY46LQGv1q3FQvSFx3CsyQ8Lan6q1VE7guqrQDgy2d6ChKnGnpwh2uVtJDH5HFQT5TgNJr28FyNC8pv",
  "key24": "3xN9hjtTL59e7jkQJaLtWcPpwVa55zofJsVEZGjGYLRo6rAZvTGfRGc7r8nXeW8Dg2KMmnvEBPNaFTixANuPxn33",
  "key25": "2TR3TeW37cQd1R4u2D168Qk8kovEzmst26pZaxbxYX4bN7GjgaSW65fTEbNvsnzB7Hi4ksHYa65V3KEVWh4WZfTY",
  "key26": "4NNAYVxPeMHirGMmpGjHAknEeVm8cgqq48KUp7PUH9pijb3366UbWcgiL62yvacZcAE27w3sFjD7MD53qHdGUpyk",
  "key27": "3hKwG9sG8nAaxEX9NagR5qG6BQxKZDtC4YU9CUGbyZimy5n9KNkTpsVtCEggJTfZFEkqvSJUgEKfeQ6CWPY4TuEj",
  "key28": "4jktukuRWi9c1W7eNNixjGMoWQPc24MrKxKWBzLMGX5sXRE4SxnvfajCBJZvLs1EgaKYKeGJY4yFbmTVdiLsdo3f",
  "key29": "5TANhPsmjwof5X2R3zLxs1BdbEmjwFYNhKWnp15LfaAD2hgDHBZjatZUmBNrCTWTKr9rRUf21RaDUHYqViWpyNjP",
  "key30": "5d64Sjcy1m9Nwv77Rx7ovyv8opSBzd3F7vy9HpWy5ETshCLJgGhuKzMhRX5AH5t7NCvoBUGhCnYBthwAMMpYJBB5",
  "key31": "5KVY5fZkVvNibNtxNhvEhHDAX6UYg37WqDo5U5yhbZrqBnHivVYyUb17w44uGo2uCDxoAb7168yHcqRMhZVpSRSE",
  "key32": "NRMedECX5sMwJPub1VogZyYSM9FWTbW7TrC5oFYgZ1Um1y6kHPXEZZc16W9iUaxAqMZVHrzTtaTLdXWNFsUD4uJ",
  "key33": "4tvPbZSLT46m4NPB4hqJRudDZMMgxQQHChZNTCxLz46PSp8pcAEzjGDKFur2fxk24fQS7tP4XqmEzVHpvsxQGHvx"
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
