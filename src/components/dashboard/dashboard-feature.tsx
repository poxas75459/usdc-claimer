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
    "AKuxqLqnZ8SoMxJSgcGWt84a6beS9mnp81AgrsuayNLfxgEQVYjofFH98iVoTbm3cFLVcc5UMcM49fQCmtiMmzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nu9SdyjeX2a9dTeJe3xf1ndgXs1mCCHEWndS31kTHQRAPUSZ4FUuKTFuXVsvt55E76ZHqEr6yUK6NbwbJ3AQDBm",
  "key1": "7TC9BMwT4LkwcACxJ2SqpuaQBfopZFwGCWeXjS3F3qo3K6xEbes7XzaM26u7yGmGVzV26SELBZaoCyQozQiXbv6",
  "key2": "2ckfLCSzUqvuhGiraEcJVC3JXBH5NTQEMhfPvZaTBoGeePW3o3udqAJ8kyJXKivPe2cHaQNaVCdyFCMwo8mKb32r",
  "key3": "2Do3RBA4UA3pv8iUgT3xnH6M5YJ6rzxeegbLZntDQV5qpMkbJX99BaLHddEb7kYAMeo9n7JCvYVDySSeMN2MRna2",
  "key4": "5BsEQKiJXhUeSco6Eng5yYF8LMibm9GrvXe8C2ZtstxjtdY2yzksvnz538zcGycxHs2T1uy2oHVM376qB5yhhaAh",
  "key5": "5XzfobfmDB5azvxbN4MqRkSNBvtph4sUNLrXJRhs66r1g31CgV7vFkrdnKr9u8Yfm4GPi1tA9zhtLpLF5cK2zj4M",
  "key6": "4ReU8eusQwA9wxxZNj8AVMbMxHkT7FLrwNk5NivjvDVbCdpNSEzZyv44KEJvcsbsg3Mj8a4TM1NX4xEeAMdQg4Ez",
  "key7": "35QdBCmp6N3EgFh2rAVbeXYex54afLeD1gVkr3vcAS4sfAs4na1p5EuhPHpcLGZwe2smyYLGHhkTb1s6iYTzxh4h",
  "key8": "2NEUd8peGzc9WFwA3LddzFQouN6rZ6a52intMh71CqSea6t7CyoP8ED74P75Vyb8FjWfh5V5CVJ3ijZCqiAKQLJY",
  "key9": "NUvUvrVeCma6dMjyzzHqRNfKj5hAVe8g3ehwCPjFB1xSEgBJmw1ejcgBuETVMqgFZLTvyyeUXCD38Kfgsmby8xt",
  "key10": "wLiAQcoPbbvzVMkye8U9VuihxbaQ9Ar6RnNDafMEhL1iVCu9oQXh93S5Qb69ESoF4PPYDHDdPBXpTuEQqGugCsZ",
  "key11": "2C3wg7t9wBDqJ2UyDqmGPmWL6whns4VRb7Cntfzu7HRKWfJ3rJdsJseDTA39EBjekFRCCwXb98XKg1dEzsLEAZga",
  "key12": "2EnEs8QEFS5BavzgvKxPk9WKgqUdcRFT5pc9DswdkoJkosyxqwkAtBFmYeqVYWxLDZ85qqzgHzezBPt32QRZU2uY",
  "key13": "3na5LQLwTKgmd8AYC8f6ifegw7sVf2urFg1gGPo4txQPyAoUgsaBsoFzH3bfGMFhKdxzrqK2C7jUxKqPcvJ5ttXs",
  "key14": "3G1fp2g7PaiN1svEN29W9GMTw9LS8jfpTyYPY193NGjWPvTkuxngGgTMAFJ6mDFcsBACeJiZu5vQ81E3GaJRiJKW",
  "key15": "2TpfvbqJhLdzonAnvWmhRkVVB7xPXquDoCzhuki7b9HamhBoyhXa2EHV1hagh8shRS5L98AYYWF6qbLid63YKjFD",
  "key16": "zFuzeaThHLRWasbDo8mM3rwVpofq8vrc5Kf42Mi4vVff24GcjKkNm1dDj9tmzTRuk6LTzAw2mKAzsf8Jb8RjLfc",
  "key17": "6Q62eQEHos4bp8jBcBxYNtDFX9GZW9qAhrfCsdG52c3vkS5UQmRdGsGvQBgyvTS9VQQZrV8p9TrBNiU14n9MPng",
  "key18": "4rx9e2qsjMXKQ7sCaCc4gtXyPDjqaytnggHoCuKe5n583um83c4gMRV2TnFDuHjuHjgsLsmfFDH1kFddQN1jFfEK",
  "key19": "31G3RXJ7HnJG9WPQavMY4Brnc4FEL69sCbtC3mMR1p55NaRc9JoLB3Pfi6urtSRbCMywXyCkH6d3PQN2pdAhAkx1",
  "key20": "5ghZxXo5Ex54AFsJdsF8qMmGbCxSeL2f1UTY6MDoWhdWhiArbzYTK7W8uYb8JEUezmw4vegxvupW86dNPFwguXkE",
  "key21": "5GjqiX9TJBY3wXnWVhGpeFG9JCWfmmkGN24r8REEjPuu4VUE3F3gy38JwPjK8HJGSffbzMBwdkb2hkdddFVMC1Cc",
  "key22": "cwMrM31yk2p5sd22YzGJohisw6JMP6VzbPfoUB3zPMsGrVnnxXu4PWCE7YcrH7Jq1KEXQFpB62GDNLm8xbLhy4e",
  "key23": "3WqW9MpwyCdwJ7xgUqRfEtquoMuKj3J3t2srWHf4A4jwK9Vuv4fYwuHKxZ3h3Jyr1UxcK6mjjLKqyaLa78Cb2MaW",
  "key24": "5sfxkGXLjzcafn8WgkN6476GyT1efedRvudKFyeZcAbC3DnAwEue1qVLeW8gioVNDszF5eSuGBeS4Aba3K3fP9B6",
  "key25": "2Uo64H1fUbNoYM8mipi2tVDrmpVkU71ejVBHvQfpHxKobvKcmgWqGjtUJsY2JfB8kJp7nuWzZFj6UkeMrWJ3obdJ",
  "key26": "3wnHL2ytu1bQvuvLbnzb2EjKyb6vSYwEbp2UAYTnWdU6nLqXyc58n8vHQ7GmKgAUpb4wyWqJ8ZeGfoHiFX2Kubrq",
  "key27": "5UMAtuxeuund2ZtJ1NMorGDsgbwtjUFXgQp2rSoxEMVJU9GviY4otyQVVjR2s6BPzr4yNVFLftxfoQR8woyhTeNq",
  "key28": "4fpBkhmaGXj9PmC9israAJ44o5hZ3ZTAkdVAE4XjtfE8jvCEytAC1YYGkmyhpz5oQ3pMd5tjx9AKuQWP2MqVRCss",
  "key29": "4jhA2AQzAiiuDiENKw9VkXeJkNqUNo9g17ULneu4w8bR9zq6zgXf4Szj5ys6G8p12WU9JXSFruXhbfUFtJJSb66k",
  "key30": "tz8iNq5g1YPUTvctvzBWgknXSbvJ6ycbzmMJ4g7ogcjMyi1Qm9wZEoWv7J1nD2UygNFjsrRNDxFVLxRJnuke4Gj",
  "key31": "2eeLnze6EzLM6z9gi2xwhdbQnWPczgc82MNZCQHfuQahDuvoNthrRRZr5qKuPPfZXdV7fjs3UNz2PmRmMNwW8p5y",
  "key32": "4MJ47tt4aDSxY7rfGoRPcW9nSh8UYxLd4KKCjnhyjSuPikWCoUPeQHCnh7Tdy4114X8vG6VjpEhxU5CaC19R41PS",
  "key33": "5jh6LzCvLK5wbCPayEsZWX28YPHmkFV4qA2LwMAHnSDxnJ1tRrBXzNW799oGtmiRf8vfqkvTpKLxXzcJBAfG9GTE",
  "key34": "4qxpZPX57rQGqqd6opRUYpcigSQro33aLNt15QGDSZzm29JAsQdPZ9DoUtn6pMR41m3jJ17MF6yHovqbfV1wvSxn",
  "key35": "34ruc4nCXVeoeCQ7WyE6Z96ZxfKgoBoBCjd2voo74yuE6cFAHpL1GaNxnTSBfXzpj4zQziw8iMoVWM1KfvUBst8k"
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
