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
    "4uUQmyBcpmNaLYtrqr22jseW9sZZCKE659DrQJcVMtuRqSjzPeYr69FiVtnrQAJEkaXCEbfUz8Ahed8UgjWECios"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67CpYZRus3bJ12iwf2GBrpDGDedwShjSYYfJNPx78zDWQboEpeZ9dQJMqriKwxv143QTNfPfsemZGiK7zpNjj8P6",
  "key1": "Xd5F7tD6m9iK72rH7FSon4y2M5ZjVdCzjbgVDTQBTPYoDW7XzDUNxmhJM8perQc8iPcAV56RK226YcuZpAqHm8L",
  "key2": "41TgoArGVk1dMwFuLcpqVZEgms67DKasskKKvXSf9hr7bhveWxh2bX1dUrtRuwhiWAmy9b2Lw5QxM7UiitG5uQmC",
  "key3": "2hHmH3dBSAekXgRWhSmk3jND31c1FsjGgvXivLZQBb7Qt8tMA9JMe67iwaGqGC16ZdtyVwGqbVVThUUvDVvsdVgq",
  "key4": "2beQRYpRbpfeiGpmsLBQdV9GQyLq35qMk52kdZc8FDazJu9PAKt5EUTDYTc99iRepPPEhmxK9GUpkezJhFWV5ZAk",
  "key5": "2zbLow9CNaxs6Lqwoou4dm6Qe5pz3oJybyUnGqDfUUJTXShnA6T5SNufkfkrpYed9QxAKVtwRgBc5oajP1RhkjHW",
  "key6": "4p75BZ5o2cAsKLMMzEQhVQ8zhS7GjLW16hJdXLyGAgk4yhuVMCD1b38tdxR3KmWMh3M3o9m9wJiXYj1zJBVwnnxb",
  "key7": "4bi7aSYBYvPYJwjwRuaZZy2FMrd5fnwJf75itUYfw2PrBmjhRUog19UseiE8oZtRPygRMgDo578EBbKGvDJvSH9B",
  "key8": "65mvA6JWH1uAk4saMpZEADiskSSf4Bqf8J5YhR2ngwoz2z5NVR89CkpLwFL1jL8UqcvNFpW4AicezqLrFhVMs4E9",
  "key9": "3o5we69Cm9oNfJtP2rGDJ7stHBpcm5zCJacQKsYdoV4zXPjuRm6aaDNv2aTVPRtuUFpJXrYC7PSMR4NkyozKsU5t",
  "key10": "4SYnRYntmVGd1FExNe97L5uPNg8UyeHPprKTkqZCMPqApokysRF7ud3HuEVZWawDgP9nMquc9ShsXNJ7sykYXz3J",
  "key11": "5VMpgnjDVCuVeCamfFMgJHmE5HYv9szM49mNy8yJuGj42yzVMFRAPDbHPEEwozEuhDQxN9ygHQsJGzxEomeh4nvQ",
  "key12": "UAqF29G3M7EnnDTC859zVz5AtrcAPgfCNj7ZxcqqvLjYzvhZDnS7hEGjKyFXS63Lir9D2ysNyM35Nq5JiqeLB1L",
  "key13": "5Qn3jcuYbHTqE8eKLg792kykACZBFYk3is3kZm5u3Z9b44pimdqCmYtETuV5dC8CHbgVjQJAXPG9GgBdX4kVMssx",
  "key14": "zVvNVhaWVW7nk2rKg5AJuCzgbrZP4vobDG6upC9Hr1GUEJC1Z6JQmdinV8XA6QA6nqyhRuJEPoWvtjt9aBttBcf",
  "key15": "2FYnH5C82DGaUUnT76RFEHNUrsKkhs2JaAtzWDqpi78WhX3RjkdBbkLuxknKLm7px5DUV2n24rvKqdc4dUVZtB9r",
  "key16": "63UH6vjJMyDWGRairTBA4ELaKm6oVahvz88KCK8vZFuAcdmQL9qmrEkCvLfUqi6Vy3ohkkTYKWQuRgiqkqAVZ3Es",
  "key17": "33zA5FrwQvXraJhmLQfJPRtNJN1ps2z3MQVc7gsCi4wcNGnmGEgk4bnrXV19PgXwPB1FRzLMK4bxynbN6NsrG4zE",
  "key18": "63ZREPVmPXtvJWZLd5wNwrfhsrdgGoTExnykot81xc5s8eSvwjWMwGkQ5mReCEFinBQ4cUr7HHgRjPExQVsXvgm",
  "key19": "5picHSorvDMLo5zVB8UhEfrtEeoSX6wrSNgCxYrjUx6iDCRF6c1b644CXRAcVDRAXLK3SHtTQXfNzo6huoVindmn",
  "key20": "oSetBV2v7Wvzy6Ma5KkzUDLr2Ap7X4VCKMPNV3TGTohm5JLiPrtzUPrwYSYp9eR6AQ527rMfVc1DaeBuzXTyBUH",
  "key21": "5yJKtChfCeRfzJcLuNF5DHK3asfwVw6yHwuihyYn3LCmuXj7FgyudFcNFJsWV5d4M9Ns7VWJ2pmrnmYBDug6hZwf",
  "key22": "r1a9yy3TRyQVC14hbjU3jopZn1P7T1UjoZBr4vgWTVcWwC82doNn8jG3cXBF3P6gjqhgiDGzjkcp3Ar5YhbZ3qF",
  "key23": "4JzUfkbg5nup4pAorc3gueypB22UKg3jShbxFq3g9pKPj5bQWu8WDRm2PxDPGqpc1rXhtTokrwmKh7teTMJ6GBm",
  "key24": "2RH1CsYByauJexLsWQTD5ogKHbdUoLHLTf599Z55dLj2z9MKK7qeUcQfpCdXSipWbwKM3yyYdJq3cJ7yczrhLCjb",
  "key25": "3ZZp3d1gvsqPoca33dTut54oaSwG6KvQhUNnhv4YkNaCtvZo634TKQ4DdM2zrxGDitQNniem87Ykww82W56SD1kR",
  "key26": "52pBaxZiuoe45ruh9p9r96w711wxHqVtmLQv5zacoxh8skKkjsWCVxZ8VAfZzmRthoTGT43oxi8FFvbkcvz8APcc",
  "key27": "5zDesCcLmNMdb4uzhfopyxCLpxDTzdXPgGR5CevUmJA59f6HSTcSdFK3AXgGscYUGrqTe8L5kjwMcZN8Rgw8Avqk",
  "key28": "4Y7WVE3WwmBS5oWGMtwwcVxhidgLuqeJWsZcnw9Vs4vXckHii6Ureb43x6UY1XZJXazzSQzZVTZ4iKHBDEpP9c9D",
  "key29": "2mbext5LtCUVSGspnufTND68sD77nHUn6bmikcAL9KEMYuXguzHBioNjHzdZn8qqggy2HCiuNwhJSQXBG4Y63fYF",
  "key30": "Ws7HYVvzA1siiuyMY8Eyc4pyhCnXCpj6zWvamUHhVzUA1B6iqPV8hgHaUsPjR8w2HUXthhYR8xpFQHeBLBe2w7r",
  "key31": "4cRDpRSpwwKtBRGtj8fM7ZyV44mbR63y5eCLeESR6596XxRFk32vC5cazupJ5Hi8QoLJ5xeE7eRTYCdH7JR2VJdZ",
  "key32": "4jsSiBoTgHVeXn47wBkCQF8VJukAQZ7yL8huZtT55ksGSLSprYKHCCNfJd3yzXqmpfuQvxp2eZfYNCLLtz987QF",
  "key33": "5XeMDWTnS84Ra3iLDLXSp33qnvN8EJedtfwPyWnuXJC3cbfy8dx9ouG8zd4nmMaoEr9xfBKtNsFv15iA1s96J8f6",
  "key34": "3jig7aYFdHC3kUpBvVHQU4YYgJ1pBEtzvwhXYrsWc6kZLXSCGtku7gDv2Nf8gmczLsKAb7C7Vi9mSw8gzqL9jdKS",
  "key35": "3yQVkd9JDeg5R8xbWq8ve55j7hUmNcJgzMNjSviaMJqTzdHC9rw8crbdX1zziyFZ89wYPfg2ghW9mAvxXotXdBEu",
  "key36": "5tE39vBWic6Cxv6Crkcv4QkwCn8FQrG4P1huMUwcdWbMyUr5xQrS9pudgxggmzbXcsmoHBeZ4C7j5PsWHrZwtJ8V",
  "key37": "5du5BhFVfmme3HEgAZKd8wwnKoKVgNKQ9rUdgZzFKA9BhqBaiozxtRh6HK7C5Y2N9YPszyoYHmShH364je2H1fUn",
  "key38": "spmeLXk18eQybMECjgAZJZMhqzCJfWdXpSmk2cQXUqAVNuiSsMEMi3zWKrCBFJTutgrRJvfBUGqqrhvDhjiHKtX",
  "key39": "5jjfBWH3fL7W5arYkMDcK6j76Wrtx3spd9nfQwWS764vCe7jm8iTdGWuVNjY9BYoyrxzGhJh6U3WQMphZqQBtLKA",
  "key40": "3GYtwQophGsLrMWEgHyLvqVC7sZytJTouf2MXfxuQt6UberD9zH23WytBEJCyxtfq6eDiwj2UjXoXjrF9kfuU6Hm",
  "key41": "mYheetR2qe3yKMBKPZnn26Nh7EojwXg1veRjvpRwk9ifDT2fvpt8qXXKSefpRGGp1BLb4FtwQnFiVyXPLqZQQ2D",
  "key42": "2toFpLL9TPrwCusqk2PsHE1sZzMyykBCVkQ7mVBYPaQcQ9Thf1HZB7oRcW3yCDMxRa7ypMejJEC1zEEHZuEkcYLh",
  "key43": "5as4CfRoPumANc4FVR6w6eDzRCBH13TmKTqziThFBLVXasMCTowTdNKwwBEWU9qHKwMqxjkLTRFwrQA5C8BVdsQG",
  "key44": "3XbGxEYCytRypc5RN434AV6DikWCi8tRSuoWcPT6zgndHTaQnTp9gfWC4aYuraDJc4ZrKLhG4XbewXsdc8og96Js",
  "key45": "cSn82Y8jKZvRachAuoxBRErgitHB4ntUBB4sS3gfVxi2ezg2PRDUeZURaF34Prx74uaXfeaLhkVQs2R5jxSCDDs",
  "key46": "3uLpZMbaJDoZoexFmiRkPRVtwi1b39bNQbAXhvj5rG7BJmiQwjSPi4hBQfmneVUL2qoZYUbWzgFobBYn1pcK1LbV",
  "key47": "2WKzoqQ3TtM4FFHnhmUxYEBbj3VKv84HMc6xPR9pgyC97e8E7RzasLvFex4x7hT7oNq1qUYV5gCv12Z6n54SGjnD"
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
