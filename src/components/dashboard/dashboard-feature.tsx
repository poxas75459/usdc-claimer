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
    "3sasuhd8MzuabPVDGQ6ovtX2eFMeT3PgrrqHVcjeEBXRj2mQuhDEZtTPft2mribxc1tip3Nvx2jPewZgzNZXm2zZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zzad1NDjderZagBZae7h7JdCiB8RjRMhuTyGWmFs3sU1cEXRdu2Ywn3HLUry9GKUYSo12Ck2BUVRYLFRFC64BsW",
  "key1": "4Sc5RVAkGXtAm19A9qXQe27eRvzBHQz1Q8XhbrM1NLdiGTfadz6b1P8jBeuiFPwaemS8nCUbSRMYknRfhkqhuLk4",
  "key2": "4XmqVWc1wVkq7hJXhepEdyoAkYL1xF1GXiH2qTSqZ7CRJNzJ7macGa44HQZ5aaJk7o4QDYwkHwgVxYDeaa7vQ1eT",
  "key3": "382THeNnEngkcxHQTdNednfZW92Cck6gZ7mGGXkVPUvCAi545hCFbDfLBEDNJPfuzgPdHd8T4Y5H42kNM71u1ZmY",
  "key4": "5vzPY5rjvxJZWDE7oY1Cw57eHDs5jufs8ZTyijfyJD4XNiJQHyKDMAZunuydmL5Y5UBxPjaSgTTkaYVqQR7jUanQ",
  "key5": "4k9fdNsxtH2qaeth6Vx8SBu7byCZBYz1soRvGfdu8iJHVzGaaFmLmGBnSc4PrAZPT3HNM3u7fsycGcpmqdGa6gRV",
  "key6": "1mWUf5RXdvG3aeY88oDvVWNLpdLcJZTrHcjP89fWcmHQmSQ9eBmQRiP3rthnQSMY6JZmAuFQTEBKygr5UDzT9bS",
  "key7": "4nHqjuziahkWoQUsfGed7BUQufKJZfgjdC7oU1eRVwRDDipbvf1RJF5NaA9cCbuG1Cq9Lvf8H4DmUaLnXugoSRhP",
  "key8": "2aTYL7kheTw9xCf9NeCy9bgSoRGgHN22nGHCN3FxkePsNqxu7uDVGdUiixk1LDS7DLQk1HfpZGSuoppBYTKF2Y3p",
  "key9": "37vvpu284dzTD4zS79iguDXJqDKEz1rg3Nb4kyDaTGUCpg7MZQGqh4xGXwrVpEvhgJjD88GeLMh9yYQ262DmrP4r",
  "key10": "4xJyhnVswBG8MDq7vq8a8ouY3GapiQhpbJE3EQmT2kCbBMdKur5zMotYh92Pr4DtcmS9vCV8UzSEhrUtxXHQnYdR",
  "key11": "5REoU16mSvQt3oCoEriJp8eWXzWmPQxPZQBd4jX1Wko4k2NgbYPsD3pKLNwDSyTY1pqsumtca4AJGZQb6z7LGKta",
  "key12": "tvZcwYh8JPPNtsFjRYzsAG6yQLked4CPKzAKjcDHapdpDsKycDKsRBHEZwApwtnRJbYjxBGxHLLUBuFHHDewLmE",
  "key13": "Pbrt9vnCTJf4izWeFfkEuGjQmvcC9XantydhXtUurCEajoECX4ifTDukQDZgTAQkLZsG2JMerpLsU2oHPJMNzkv",
  "key14": "34RC6xwaDPkhnpuCtYCpmA8k2S4LUBHBYYu6omLMENLW8R2y8hTHPJg8dJeNm4QEZALSXZJEn8SPNdsmUDqNCuYo",
  "key15": "3SXy32JscEtLqh5yobRLH1GpZyr8iFPqzipcfKUmEWBA532ibYjukPLjfiE13agLmYbmdgup4ZkF1WjUyVzdLoh9",
  "key16": "3hQm4ERKJmfXGSrBxTKJ5S3pfhcfxViJ91jatX5femSBsNd9SNhTv2p7PkgT1rhdUD1EX5YnKPKuQJNtMhU6AMNc",
  "key17": "4EEFEHTq9AqYDzSL3CZBpULEspRrFt3MmYQR9ih3ae7dzir4TwhQbcvgLnu5bFiADzxjmrCzsT4dr4vRaMuVPFs1",
  "key18": "21LpH2HAyzhzNHz5tBQkVKwQWeJ2u8432BnSPYqbqrXqWepL9rKazHXwJxg8ic8kgQm7rYZdLBjgonnrVrtHQ2ie",
  "key19": "32LsS8HYoEk6DDzjFq94d4QEVemWZhx1ccPBGuM3zfjiF8FpaXhv2fgRNuHzx3HoEphusDepkq7GutanABrCvYMX",
  "key20": "wvWQ7uJtJTrdJGwv8twnAiy5iEeKBGSjAnE342VG3r3x1dBWJdrPYyGFg9Jm99McX3PLEB27CikFFSAmL6eV764",
  "key21": "2kQcpDSiK2b3eq994qZanC93a7oPb1jNUGW9TyHjUxYM4cWtArFqq1dk1yVy97dfB1UU6LfJ2qcfLkaaRoJYpKQw",
  "key22": "3RLooyUdfVjcXvfgL1kSfAEZ6B4rXccBBte4D5n7hTUdsjd9tR1tUPUBqCQsFA85kCWqaaVN3abFKHPuZ4TJLHVS",
  "key23": "ikUvpQi3ZZKv9mSa6NdU1g15N4xc89uboBJjgy9k9Ya59sejVkxonz221HwMw4TmQG3Xbir9U4g7nyRGZtVcQ4w",
  "key24": "KUKCtYx8u5WWEkPDUyjNxyene6XnUCbpJ49QYeMGnkf7X9TrvcBu5tLMuWVeg3DgBhhMarRDJQJfaPZKBAbyqB1",
  "key25": "5Qa7oQnKXCQTrPsoLG779Yy2CxcVgmmELJzHTsk2gLdeqrJPXxsFizEiLdUJiWPC3BqWXwXfKc9Tt9t9wA1RB1wm",
  "key26": "41e2SqACQBM5uhaNeTtosjr7YUqsxY59g7HPz5jciuqYtwQ79P6FKGH9e3ieVXZbxEke6pfvDxLo3cApW5TdqyJ5",
  "key27": "2D1aR1ngtWbDBr3937xtQ9v36FANZhwgN67oEum3DbmFDEiVh9qywSsSZ3fXj5TZRcYoQhCguD6prbT6h5xyjUiN",
  "key28": "2Z32nL2aUDBDHxWqqJgEZ4fVFHN7ZGSX6PdreZmnE5JwJetn7zjhL8KU76kxfafB69QDDqT6gkP8VvmR1TvndJjq",
  "key29": "5gyVkzcCkuSDKrYXTDXq7r5DpWcFprVDdQNXSLPs4EVGwUeUZpqGZHUNS4ccEuWYiPRyPbKh5BdXtbf5XnnsTsgx",
  "key30": "5RnKvdXiHBZucGpr7H8eJVJSe9AMmp4cbRMYSL37G61r67tGPwUBKg4d9aY38ZbaLubypU5KrCEyoD5sMYQNUSEc",
  "key31": "3sRhecqtQ2yKUrqdrzQNzbFxztp1DT1A5SNAt1bYvrj6jcLFyKe1aEvTQnimcd5KFugNV6SzLaeBuQyWQENSb4tU",
  "key32": "5vBRyPoRDkQ7s8UofQ4CysvHAbwppfAopeDTGM1ksRyz3RkKiBRWU7YiMcAU2Pe4poHDJSvZLdCApeJxJKSdRT9m",
  "key33": "2mPWVSugmddtRjPrks3LyNBrC848JUCrn3qgFBCQsbGnHEKkrXATxfRka1R2kEU9jyqgfCUEr86EFeAKd7XNXHLc",
  "key34": "HGPnF6VuTVQYq9uaLNU53Q7kPCncupFwGBLyEWFWBEzjCcT4tm4bk2RKfyiC9CevUXQpUXyPyhGZTsyiYgRVv61",
  "key35": "WNzVtCrRGrJfARjXXpHwdUDqtBwPxiWMV7SR6CTbxsmsLeusePfL4ahWWqjZuWjPEEvsFjYFEENgkRMMtnDnaML",
  "key36": "5JtkVE1D57QjmYzBhT3imh62B3w31BXbyqrEbMG1uts7PHyCdLoeA8FutvZqQERuZh4sHw54DQwjGbrPexjDJ2GS",
  "key37": "4z2Ga8vp6FPYqSvM4snzCATwyMbQRyMQQEopNZEooFpT21XtctrwJtHm8hjJZYd225EsFsbjittxxrACF2Ggcrzc",
  "key38": "5DK7MCVZZ3DZRoxZtFDgT2wVmxpzDAEwWuxBy47gnvkQ1p9iHQYfWdMvGhFWNkbFdm5QzSE7piJdfRq6EUoRX4hV",
  "key39": "3HLEuRLzLoVkc2f1rWk6ovn1N2agDHNugDRf3xZzGaiw9Qudvb6oyXadZQGJ9HZFEer3STjjoLnBMq4VrvpVdJKp",
  "key40": "49xR6rEuDPQpYWzc5tNQtYAc4Bpwq1rxnpkBAYkJe1hjHHGvunGrbgZgzbWZjhpsMnKYW7AjJkBE8vFrFqfydxAM",
  "key41": "4j7rgKHrd9VRuhgPZWnraRQWaNmo83VdC1Q6Ltg8fYgxDiT6jjKuRaqiYZPJvgHv1tx2oyESJyCRbLW3iVFymSCN",
  "key42": "5Ft9uvRDkFS7Nxh21JUiQPKUTCQ83otYkBgDBwxwm88V6pLpBmnUv6rARzbTWXc5ooGyNd55k6KcoedxbmsA56dZ",
  "key43": "5Npfqiih4oAvKVYUMEPuBcFd6orA9kPeLq1QivF49vFY3MtxDMKqc4c3KuQnGcue1ckbVtLeHzp89tj3H4tLwTfB",
  "key44": "4riyuFWevVCM3QEVaArKvKmd5h1x8ZHizDLuQy2iLVm7Txuo5v4P4yyAWEnvYocdwPZyo6hmtJTWtSaWEHwiBGzH"
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
