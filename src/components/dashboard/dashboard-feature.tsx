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
    "UzW1jASoBLmv4fGXUuccEFExQJYkgkUGNF3rX828U2YoJUwTUqSiGMzASHsUXQdeHHZstZRVG2Zgp8W6zNFkw6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DTLqCD8tsBDBY3yKk8GtnmK1VMWudYFS3xaYYDxx9PgxNNFQB5m43mT2d8baYPSXboVsTKg7CYH91dbeR6yFgsb",
  "key1": "5RTfte2wwXH3XAyoFvg9yXYsP6EYdoPxHLUmM7fwDr8xCoZiMqp1PqTWHeKVLd4tSHG9PfZcpzd3xfXHD9NhrCQT",
  "key2": "2epd1jqjncyNPjRsrfcstqYWjsNcF6aJ8Z3CGfnMM7GNknM2d4rCTHKVUmqoQFdNpCqeuxJ4azP327JbJEKp7Rp5",
  "key3": "63SiiHnJG1xYk3xzcxgPDLEHraPK5bPVM1iv2w2VPkhdu6kAgx4mXsZDK95BLJJqGX3WPpFB7Ar17h6cZinW4dKR",
  "key4": "5FomqfqodMw1bUSnqJiiaBYyb7bGhfxBf4TEuKZ9vAesiBu2yf1CAAYK5yf54N4cF6mGx2v7ryscTepaTxT94xzR",
  "key5": "2648ot14BLhaVMXuRQmne8WVhmkvEkRheeFt9PDsGKS5S4CuCJNzFe5G2nrQu6vVeVuo1tLEBHGqc4RYbZMN6CZL",
  "key6": "3pMaStLYJkGmZjVuGrFL4Wjg5X5Y1YmZKai6Hf6HcsxEPExuuW6H1LKXHsL2ZToLiJuPSVvyKPSpmiid9FYDJvqM",
  "key7": "59ctML9jxjh6CrfdXKUuhYvKagXjXJ5qp7kQDVkyf3w7M379mUyPcpo494f3Yts4GW5Vjz4pokc151t9Mug62qeN",
  "key8": "2MutsKn9AYpJv6qK3BSjMhMLUi4bLeXhhRdeBbeesRboYeL3ABmWoRFL5exSvuU7C3Mn3DsVvEbdNn66XcmubWVo",
  "key9": "5B8RK45qCMAubCJcvnARTGnaYnCcFSAk2Xpxq6aQ9L3awSvhvt9GtPqZaDDZNZ2t55QePjCR1Cjb1oX4XNHkzajd",
  "key10": "ycFkqkkg61GP5HTYtwUWLPuKo8KXHZRZNi4hcmDGzTKcgjLRq3pRVaQZuXy66cQ86CgDQBekLwd6WQDUQaLgjkF",
  "key11": "mmqALCSvw3g4TZMkLLWvfe3bBRwcqVGKA76ntwdDmJ6XceTRPbL7UYCezPMxusofMzSYJHmtXw3tYcf2QYCZuvf",
  "key12": "3YZ47icZbMYvDihSX3uxjrkmcKYHPuRkwSxJyY3N1fukmAjvXxTJzCjT3gT2jQydnF6CTFg6ZeFwtSPG4ri181F6",
  "key13": "4CzysgXn5otZ1qNJ4Aj5NTSpP6dSQzNwYHMXYMCYVP5eaDMitbzxXZ1rmo6dXN7ortByPNsVofECq8zmxW1ADJHz",
  "key14": "3mr5mjfcZn4xaXqSVYbCTv6uo1deiKnbjrQ4sotV92YQmW9hJnTYvMSY25mDh5Wzszctif1LjG2Uyj88PdTiLJLr",
  "key15": "3UKtYrdTDNmnAuNUFymXCqGV9LknsKwMqcGK26QtsGKFBPzFnSEDBGyVZLypBG596gQmauKAZhXS5aMUnrAYsTiq",
  "key16": "37s69h4o7ejk98WVziTXLtiRRKDVADMe2rTWuigytdUn45CT79MHqNm75sFvYL3uFi2Dvy6DsQb8PGsursHQorZK",
  "key17": "33Q6ur4kyxdwkCwpE4axKewLS9GrxbQnk4A6AGSaTb9PV1xZq5js3qTtRhGbsTSNoMdH3uCoZuMKqxVaHczQkq2h",
  "key18": "2Qq8igKdEehsRmDE2rmhwjYiTRC4ZsG2UHuS6JNY1Zr6VDj8WZQ4LcryRXggyWUZsKagXjpLhj3jcYM7YmJpMNCL",
  "key19": "5TGMyk58A2KbxXCVmtsdFs6YUodrmNg2DtXC33rbHrSiPt5LCnfo7Xg5Yss69wq9uc8BB6TThZTtf8ziM4o39Mvh",
  "key20": "27sJNZ4UDvfWPUybKbNtg2bTGP5AccycyQK3EwXZNHe1x2ajggpjLMV5VSWetsaFWbeWYjHS7zP21kwF5DrtNghH",
  "key21": "2t4uv12nGZ9bWYFdn4AJP3MCb33kn4FpT45VYqSnmocnWrkLBzzQD1AFkfFFEgRXkTkCLa5UWpi7YmoxMY3QuCS3",
  "key22": "3KgT38Qi7V8b5TS77mcq76cWcwnbqQNv2rvAVyLqwFtXTJcTP6MxLLkFUAbzVL21cgaQn5KZuKR5r7y9P5eZ2vdr",
  "key23": "acoYoVrSJQFp5TvXd6tJEfuBX5fc1zzU3zM4kpnss2SgW2KWFvgFdhSZ6Bx9rACyXUrubZyhMemXDNCjbzFZRRU",
  "key24": "4EFRe4hFFVjozM2FBVkUEAN6MY6yahsmhXem9UBis7xyaPcn1TfQDaAyaAXRErCVTHnM1GFSTu3hCeCdTHYZLM1S",
  "key25": "DPasNGZgXS5UwfvGnMuRDHS6QjFUk7Zv2bMuCun1MG7RAaivGpmH8Fkx4BQwbBKVPy8fm488Fno2BY2SGUbMWxV",
  "key26": "76nGDD3sp9otRkiZQYDGz8JxRFDpVEsL1nU7rT817nEMJqr7uDQSCi84mMVYXxW9FWeZeZ34SqezZkJmW3JEa3Y"
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
