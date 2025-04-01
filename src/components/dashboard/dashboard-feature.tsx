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
    "26x5eMcdB3kxLHqc8YBerTvTupFisHzreSYaepTLibQcbNmJL3VEt1SsAhTroGSWE9izFR5SuiokqbJpc7cMNwMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mnauSCCXtkst5FGpbwTnrZft1DdiewVkRhxPo8vugnLogQFtwSuqQcv4en8xFt4GhHkx3pkmHjDrBqMMoSWAo59",
  "key1": "51fjVDeEZ99p3XxgTKmf35BXtPmNBZmBm9dHmYBLeHCQG89Az7Yg3q8q7Vzq5fmnNkfmrj5b5uVvLeCeESfHZgmu",
  "key2": "5ZXoWS6QYRWhdtQQzkubNEPXCEnCTF2zATjbGghJ52dksKiCcdqSLYNdQE75kS9do2QV6LKBBKVBNvggsZb3sM5a",
  "key3": "582W5iX4s2dpGjv1zYvmH6g3AfJNovzd4CLr3sU3t66A2kYAorzFTLrwm7LizxLxSLSvUbvNBCwbAsguXBCrVDTt",
  "key4": "4dPNnyVFw9nmD9vMvAwdrTPWr57wrapP28GrqKF8msmSGufyACHThju5uFwGX2xJmB3DAw8DjXscM7ZdJuf6eSEJ",
  "key5": "3RgGLTuNY4BuamqEggaagHDCzLLcmPbKqQEC3JFg5PHwXtKoMdqmAZr2wtBp8nSteZpeifoDWxL5N1pdkzg4391a",
  "key6": "2ghDLxztAgSaCXRUWyQShHqMgQd5RKrGk2ZuMWxuQDqunp2mo6fj8nYFv1oUa6846bTbtks4R2ZMMWfnaNcDA1FK",
  "key7": "2QHNjcacK4DH6XZZTWpu23UCnbZNMqjknHs9cER6ZMpoMNmkvXb2CDcFCkU2QRry3qMfnB3jiiZn4tkaBFH9aSJq",
  "key8": "53ewmcaXGLPcFsxYF2iPdBznuAyMtp37fJFxM6jzDLH9La29USY4jvCg5LHLMaVocZk8nNwFxnYqH7zQRkpsnufh",
  "key9": "24BLf6gEK17wDmtGPd8ojAE6n5ysJgAas9Q6F1abTogtz3VU2hG1Ryg4vW3bXrTfHx8KEQqSGs5bFBoGxjxd8rvW",
  "key10": "3Ys6x8RgYq5Kzu69BnQy4Ud88NSZ2wB9oz2XDd1cis3BypYk9mwPJRWT18GUAkT9fEjXpfUAvYyUAoyCrdr7SEBX",
  "key11": "QfN3HRKQWB9SNwzZbau29xMah1bHtH7n4pzNfoWb57mFZbgtjJpbgdoV8Qmg2Qvozmtof46uHN7S9f4pWrcngWC",
  "key12": "4jduDYXaHjSHxQCeFMD3misJAhxuvMJE6knQ7ovJzkE8Zr4yxN9jUiv9ZNbYz1jZUYs9jYcageyM1rda9Hty32ZF",
  "key13": "47ZFgtf9n27Zg3B37icHCojytUgdfGiG8EbrfirVjGkyTmzatKXX1UdHiHooNKzqwVs2we39KXDkqqtvrGkZRG9y",
  "key14": "5NZCfVwCZe5SwachdVhLTZEbBxDV3FnqA3MSbwRTA2r3GiB8g8Rrydh5ky27yccEmbTGteM5BN3frP32L7YCTnay",
  "key15": "44h19oYBj7J9kSFjFLdBoaxYmZCGjWcVn8kiVPnLBbzXR3nLo6dSttweLcyx3n4eNUhoaz4GF5sZNQRiwfkZz58C",
  "key16": "2ucAKjccYfPU1x6zNVBykjFxFwFsX2LRy9LHTX4ZchMyVjfoWxsMGtHmva2zCRykKF4yEccipRyeFzjhb28VReXE",
  "key17": "4m6GQcJNSdm57NigXUAmNoXZgECe9ALY7T19meUgKqH7cEC2AYAXSzbBdGtuPZHJhBtrdGRj2o7nJPBuYjfTXecR",
  "key18": "4PN329U2KgbK4Z8JGv5ePSbWtQxUCgckSRf1t3pDgRfm9toPCTQdVivdFKu9JLNi2tcqZqNPJNdNqJxAESLNKBck",
  "key19": "N8VyQQSVLv5mASmVZBwQK46pC1tCnfy9JEPVxbKc5EnMsLjVoQn3tdwH726ir4ggmR9SpeHaQfJc86QyqgMaPnc",
  "key20": "4VHHxxtBVaUvcC1oLokamvSAXw3bfWSpN3tGzSthJmMYfjKN4zRVkfeSFSNQ5Hvi3SsqzS4GTjPjhLpHnTMnoS2i",
  "key21": "24R9YbuvHW2p9gNt9PpAzKF8EXYuHq89oiYm2WcKzDRyDqZc7ebS7FhAPuEpMrU2oUGMWjt9mBbXdsnRVn78RYc3",
  "key22": "3v7EgbBcnc5WEPQoxq6zvSqZRzPmrP5nXBWs4DvtXP62KJQJNQaF6qmuZs6Ky1jSCCiMWwBWMKcLDz7ERPRiShJe",
  "key23": "3834Zc8Q5CrvGBBDT9CHNKPz2G2tnFssf2S7rRbzmq5xbkjfAcUZKZmm1WBEUPJ7gKurwyhj7g8W2FYcW5HxCPkJ",
  "key24": "2rfdJjND444Rd8EKgG3s2jUGUwM3F5a4rStpwnnCfjHBhPPpHa1W9DjS8rtwN4WJ9Sw6qSj2HWoWSeJicj6ZE7sk",
  "key25": "ZGZtg68wU64CgceJGJbXTaqJgtCrCHtpRt6nqPLVRURMpGDZRQYaLJK1NjdRyXWaiNKQJTFFcdnZtBDDH2F9yk7",
  "key26": "U8Y6tWgKV2XvyXAW1row1bwWKSg9iVrFdCDa28iDaUmFkE6fVkfSQU8MxA2zbKmfeVJyVgpcDHRrhuJTmR9TqkR",
  "key27": "4yqCybuJoM91BsErvcbKeWh2yRbndoX3JXd6YWd3Cet2723D6smgoo1wmFWGHYrJVccCZcSAvhpC8ujYDsixEQ4e",
  "key28": "3aLRusv1fnMRaNAFfDG9w1EMevkf6WhZxbtATwVMdZ4nu6bdTBFQVQrmxH4CZN1H2pJoyLfcGrByB8xeZ5NMBiCB",
  "key29": "2WJbKXz2N85sDWgWAyJ7gFWECtkXEaeP5pknoMGyBQTHq4mHirPqbJcx49FHNYSYyNB2ECe59KiAcRKmhRcgyw2E",
  "key30": "3uUjLVfc5L3rkPiXhLnbpzhoUHWosQPWqn4nVixaynMwDG21ycRSpRPbE4RkHPCMe7XdKxnmUxhTWzZSMJvKqJq1",
  "key31": "5kn579VShzhzRUg6zdVZGiNmpizQrTJkdFYu1rBtss1P3bYiUN4kvzuz9x1iufB2e9FVY2agTizKFErkWU8U85Gm",
  "key32": "3V74ZobJrmNBKssUQRvgg67jscAmqEHFVaN73xNAaU12VzmwsaUqa5Zs6CR9ZSu7sFZ7mC7XB21YpsohZbtsayGj",
  "key33": "sFcXSz7hBduomrNurnXrtJS1HDrf8o8d9rxuYvFdbBQAoYcG5bjbo3VaPoD658dPW9JdJwdELoF4S9D6p4o2o2H",
  "key34": "LjPfyXqqT4AuHPPgWUA8PVud7qiGVb1JUMnR3oq698Z76F41BteP4kBDWEKcgHGr2J2L5Gemfa8VtQfoRaQZfef",
  "key35": "naHfMyBeeaa2pfSqn9Ygihjdu7ZZmTZeABx7tkLmCW2PW38dtr52vnKJmi9YfWDNhr3SkDgiNfHN8GxTU82Lb9e"
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
