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
    "2Fh8ww8UA9ffHm3RGokfP1SK14iR8ob43d7ELy7FU8rnoMbfxA13NfUwmkLzu8RshAkneaDFsEEiZYzvif6XPUiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BUa7Ey3JTFVdeGGjbddutsUXC1w1UfiWXJDjj7pnWBXXpMzPbjPDBVcrck97qBoKYuzDjQQ5M2sz3LCvjLcDLUM",
  "key1": "2dbfRQti9gMmyKisSYA4MK3pfh5SccpR2pBQHdBcwX8XU6NCUoeC5V1akLNAHoASV9Kpz77eqCM6Msv37QuiuPMj",
  "key2": "2TuUsqYmGFB2RAw5pv49ghAmCPpHuYW5hb7QU9wkTMXJddBG764cQVFQMgBTJzXggPvLUtQS76UrP6CER4TvYugv",
  "key3": "37fSBzip4SL34bMjaV3hC9jK1dCNkUJiahBgdG5p6PTdGsDCwf3fHoh58myGGMoiXAxy4MuxPTMtEMKui9ABF91S",
  "key4": "3KUvYK1k31FLzh8rVE1o9XGC7Fumuze4q2bnH1iVA1draX5cHpMKsPQ1NmkiCServG1yVR2mzmMt3VWtBQX3LLvn",
  "key5": "4vtvaLn6dXBKKmPpbwEpCNtfHhBSNrYR6WJnVA8zZyrV3gBrRbAcTeSiCpJHCnJg7gid1pqMHpFaiZNddbJ3A1FZ",
  "key6": "3kseVb6uiZANDYiUvpVExoCs5wKU85xiEYDQQWiznYQ6xbimkN7xhB1Ye6SGJantUXzxYzRWzLusTGYbWHd41wFj",
  "key7": "2uWuJDFjbmksKL1RGe76BQvCHiszD9AoAAKv3SHYUW33tMDmFoR5k54ifrV2pmUnU1WYDbAynD82RC1ojvbwus2g",
  "key8": "3CnwHRuRv29wuRaTbNfsqmaVJS8TYgUhBhZyos5kX7Gi7ogacmmvnPdS17FXL7V1riyjQ7pBfeUGNKQ7XCAGJ3nD",
  "key9": "4puaphFb5JTaM8W5Y6MsbCK7gTxyMFPzLRmeBAqf46J12FPwSZhy8R5qBaAxnkaEr5yrJzVtTZJ4Nx4Shcdqk5co",
  "key10": "rN4nM2DUXS3V3z4xc4HFSpTzSKnBXLxNyqQXAvEM9cGMXc5myTHW3HXmJfjhchsFSMCb5zgZfXryqUBszGHrd1u",
  "key11": "zycsvkkDJkFN9kqCBV56vigRkw3EUFpaCouw9zYKiJ26BYiqcfPXhtAL4Dnup6nWNJCiRxmPRi1fvzQPQazbc6z",
  "key12": "5gNxacsehDSnYoRx8nVZmwndUpSxdbcqt7Sj75GLvmtzLv2UQgvYbNpi34YJWqLW36ARfz6piWDutgdTH693YREq",
  "key13": "3jdFwzfTdB8GyrRmR5pGvtshzefoio4NaMsEZxQVjGNdxZ7KcY18VFwQYjRLpAFM92cUZAFA9hFzMVAFWSgAZVfj",
  "key14": "5uJRjvnRKn4EAgCui2XtpRjh3egMFWoQC5B3apaouFCjmvywoiFqctPAGGo7U3yViL5K8oymMaTKs4uUinBo7dUU",
  "key15": "66DSz6NSzQYXFgfswGvw5gpZxoFAjErMY9qWc8rWNGH2GENumdkn3DuaLKQo7sPTQxNw2k8oYkaTsZ1tJrBzvDrN",
  "key16": "3hR4EvkRDY1ZspEfJ897VpH1EtSoBja3mcHVtYvK666yLQnseDbqa4ma7cottNHSrui9tzGweBi71FULtX3Vh87G",
  "key17": "3AEXBRTdXEbKJMwpEF3ZSFT18yZuwowqQqeqGCyRV8BB44wfQHHQ23gqjfLRfLiW6ez3ohtqNqtfbJ93AdhaCWMM",
  "key18": "jTezQaf7YtLWgAkoSheELbwiSnzG3pandd15Guv5HxX4mGsSzFNSbYAWe3YKzkHHLC2VzZLU4JWBEaCQaB54HkY",
  "key19": "5FQ92LoPbrvHVgUXJWbdYdQTXK8c8gGFK2sRvZWRPQ2kbWFSrCdH5JuXrVTV3VTqJXgxvuBxjwSN9u1tkb66hEYj",
  "key20": "33vBACJG6rjJ1f1bsh67wjZCHfdua51h76PxX5HSW9tUfHcSZbkCPY74rXwVHduxGRiz9QChhc5xy6pEn1ztqxHv",
  "key21": "dsSPicFfWuN7HkTvT1moyMr8up87N76Xvt5DDovAn17xjE4SGVcJ2MtejfRq9RVsYpnJkumhtsETp32gx9a6svQ",
  "key22": "44NuWQnHpMCcLVEVTVokPmFwdX4ugbpnJhcz1aKxjzc8X7YN68ZmQJ7P1D6g4XaddN6NXwQ3gvNQG33KdJNRz5X9",
  "key23": "4C5AaJVUTbBhbLJZTTqrDTkYR7689TzhUKHeGXc3SSNdKibKoXmyoqsRTtLDz1XhxjDCo1hydwyp1gLX3jksVtQa",
  "key24": "2EmM3QFTUuj5bSinZJUtfZdvmK4MVDx9AeGELGmi7v4i8Pp28DA6DSRVP8fgcFWbLDLWT8JZ5GuBpTRFB9BwZ3Sy",
  "key25": "5LdzBPkdT3U2Dew4WL5iBAeLhU39ige1Ue24z2ezUvNMcvAMy8q7bmuqikNQi9o8zkXYs7bE61Xqu2ieeDNDGdnk",
  "key26": "5iAEeYjNxSEeR4jqSwnWkdDtLXcb6ZHxRinLVUuoKJ6Sbs8mydcJ2755Wpa6tU5ky8jSy6mRh1NQRLT2x6FkapYg",
  "key27": "63RP5Wp25xYwzXvq3gh4ntDurPpvpgXtUauELzRDEakqaJtui7T4SeEkbKGWEq6QE9EPa3ZLTvhAEC7HtzfoyeaK",
  "key28": "3Mk6E8a9nrj1XjoEnNiidPjjTBRn7PTtB1JWSAVZjvddFsWLzvA9AJMiw1ECdGrnDxLd6G6Ep8HXqq2goHzdA5ye",
  "key29": "4spQAy8HT6dFiUpmhZSJ1vMkREfSXnfiwKGK1LxKX97AFAme9DMbYFhvBWoC85F7rY2kA5V5CNmW1tRzZoc774iT",
  "key30": "4nov5qJumF22wVY8wCMnzsfQkogGJjRR3toYxat6Gk83J2VuZ3FKfjQinX2jq7xi5sjU1fYf1vg3MuAhkdfHYfCa",
  "key31": "2hfoiZn4YFnDApxZWhSEHQLUiDm6XQDddxAnw99sXNCJgxkaWzMW5qFkrtvUdQgvnuS8PxzDo21MjtV1L6Hq2enD",
  "key32": "SRBbEJZNprih2ypb9tSz9Ljb4mihAkRdt5yGgKDhzPewNUWQZqFqQRPrWXuXKuHEmtRcf7FzPzJVbwnuvnANr4a",
  "key33": "2A3q5MYTY1pAhb6KXdD6bLz3rY7V8LunzhsDqLMkNVS97EYvu2HCrQzWV9MNF2KKBZu7V716SVnCUbMzFsLz42dW",
  "key34": "3w2o6Bsckkue1NZ7X3pNGQQ1oJ5KvbDPRKp4JBaQJLKd9ihowvNeyEk45ygXFQSzSryZJLR67yepoiy5mZeaVgRL",
  "key35": "3ssi8NNWha5cNW61cS7vVpJFsf2mRsAjqhUJufMApnjmDwXzGseX8M3TMZiyqri3uA49KCdn5PPVMPHKVoSCezpD",
  "key36": "zvK9X7uBfWG77rhwDdLLxm9JChEjdfU3AFd583YzpqHVFWRz4W5Kq4MHn1QgqSmdwfF5ejoTX78oLFPR4zhQ5tm",
  "key37": "4ME7SGoxAtZQgFeE3DnGQjq6XepcZFN7V3Uq6CXwazsvw6oYuC7yR6AiGrkgCSrBNLuR1SrqDYRw9E7AX7L2YT7h",
  "key38": "5CStTqibKeUrsuxYFFCnxjWMv3yrXZBRr2ZtFaUEk2k383GTiRVwMcg3EnMsqfnywYwm7qBQdCSqdSiZ6bQzZaHM",
  "key39": "5DUAEefWWVHbtWFsngJzF3UookQTABGZijgh66URkDSVC45ZsxjNpWrq81s7sJft3DgsRp8RbY5oTcxKtR7BxzD2",
  "key40": "5cJUgGRcboTRmkGq3qKMoey7rz3otqVg4p4rEwgqgqkqziErSG4y8sZUCB7DvjvB81v6fZXx4TpbUhspSsyFisC2",
  "key41": "4wzSvNoaQWbo6LYamNWkS64iaYXPDd2myJEsiJAeBAincHGaVwBTB5jDVQ7iHVJNtqSBUfRhmtENhYXxhgNGSTaM",
  "key42": "3bRZjfnST7AXePsUmvQAREDoJc5zfHvsGmrMBGtJd9hYdLu8QaH3CFYDqw1x6ZBQ5s3APDiMG8YpEdayzenj7mmS",
  "key43": "2tPkUX2xnNMyDU5wXRJVWvmoFj8AkYaPsr2mRNtBP5fzzre7cz4hJnsVevZJe8ykpwvebwaW5cb9yP6kGSRrSVND",
  "key44": "429YJ6s869sBCUCaE3PyPsCe7Csh5U5C5JyQiN4J15ULWqM8BP8o9Y2hmpbGo87hHganxYKpoSD27Lw3MTYmKesM",
  "key45": "5T1FiyX1VZd86grSTpLeFUeyQT3Tq5DQuXN5pmW5fqfMbB3aV4Lpvk3asudHVM8zthE57XXVp4YwcM23YVygfuzr",
  "key46": "5HArnZ5bhBLnZPT1MSGAxrwkan2bPxNd8McTHsvLn7nVyrxN36jRWiSvmS13AqnDtxViUQAejj2EVpTF1eo7EgKb",
  "key47": "ETkQnYLvuvPJj6iU11SwkYgm7VSn84FCtAZSMDuiaQj1FaRWCwpj9pUsaPpB5PiYhEku2Fjogmy63Fvaj9HhJkd"
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
