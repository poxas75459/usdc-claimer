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
    "5TBZTTuhiSz33yUeUjV3WHdJixguGvN8s3tpYo9CLq2ZkuHskNSFw2x32efGMKTSyhMPbDLTcs9xGkLCSSeKNcsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ghZiFKn2CZL2JyyioDehk7m9cNhP4qKUsWipanNZWCP9bW7L1YGHqGbAupdPVJFJ7b7vZnytoqFexxCNed4Fzdh",
  "key1": "woYJ3giGRcdB9M5FJMpnakxEhJcV18RoZoaHmBDogKQ12itMcB1JceVup96cEgJTqJwt1XKAk1UQypyj3fLySVT",
  "key2": "39duHXgSLbu358TKsTzaR7qFaAHgmC4NFHKuKx3A4Pe8R8JnYWAKgmLMi6Nj9Xa91Bn3MD1RQhYbk5WRMeHSvak7",
  "key3": "W9VQxfTB9UBqDeLHhg1Nh3MsbiRvQQbkAzT5VNBiZ89p4ENNUcoBouf4jYeWRs8wQjPxcHvQHyuGruD3AU6wunv",
  "key4": "2YWZhAa5UvjKgCFRH4q7VCSTn2GdbvQvigRAV3MyzjnLYkGKvXSG5J1gDfKMUjjzUFgQV6nKUkf5rQWxUiTn5V8j",
  "key5": "3G2xzuRaZygKTiENBdkzooi3DqkyuNYJzTRDqHu9oWKw7zyxEop2DCQGsXHPZEvBn6hmneABc4VCT8kgFNagbptX",
  "key6": "2KFxqR5E8Frz3nKhSW5J2WjTJKnnuq1qe9KMUBetHiNRfWJatkMr4CvMJDf5hiNhXgG4ojnppwbdaSDNNw7jT1ac",
  "key7": "2e7dNJPcfcxF6xnFDwXNy31ZwuVjS9a5DCEFPwsJK47wLTvMUngVwmQSM5ajZB486K1HRfkU9Keeh3tpN9yoJExA",
  "key8": "5As1fwJFYR5Q5bTZg9NSPL5vRxoZsJMTMcvHRUbMS48E6WgH1jYdvZDRSi1n3NNtpdzA9zQWxYtxhR8phYpKrDEb",
  "key9": "2scgDMmbJfZppDEEK9XZU76P9Ee24XDwahJZjCbVNjcgPxEPkPtdEKw2AXmugn6dj6ZvGquF2X67y679vRP4uc1e",
  "key10": "2cSr7rqSxju6n6XdxSyzoWuRaekWRV7eVQeZ7W9yZKvikvqbyLTQ1F5iokuDnjz1PZian8wsuP4QoFnqrLH1SFwh",
  "key11": "5UAkHrHKHJpwaG8zMyG9eXreTpmTNu45o5C2r27nCohwSoqCgoeqbgogvcPuBZMFR2yXKDqk4VUCrqrhKThtU5P4",
  "key12": "4armXaGzmBxeYoRFKBDocDoCJz1e5DmA8WApafEGh4bSxxz5axbds65U1TY8FVvv2rPjSa63WzDnX8ZDKkkyiYM3",
  "key13": "4LTtB2LhamXYG5DnJ6PBHg6PGjLMqFiwtbtLfzwojffPqRaxmcpUABVTyrKTdgL5ARr9vWWM4MXNZUQFf2hCHFZK",
  "key14": "2KDW5PqBGgPK8sCQxBGA7T1rtffkCRaUDW9MpMGH54efbn5a9NVbo2JbMRYhhFDLmuGZkp9PpD66G54EKXX3FFJy",
  "key15": "PQ6MrjtAt2aotaVS8FeqVBqErmm2X6NNo1R8wxip1LJfZugJrCBvXjv8Gn1DREB8G1NvLA3wrSXrTP7d4MfYho2",
  "key16": "2SCinEHpH8YnqZs2exbqQaURSRF6nvc4Ap3n7CAnq2eDfBB2KtzpeT94yk5ngWpxewmU6GscnLooRWuhwXvww2kx",
  "key17": "5YMEk77DKxgdBk29JpxfgERoKhrPn9TUHQJsor5s9f74CG4wY81ZnxvAZ4N91zWsuz6pEaty9BSH3LYrr7xmszQh",
  "key18": "3iLnyys5GWF9Twgpm6A3ZgHT9qhq8MHxZ8KhntsTRBizRU3GE3Lqaf4GanZT7ewcHKAMLWPDZNKyndRGodDbEWh7",
  "key19": "s7dZE28v1n8LWSpZpsu3jJDJc4uom6wZR7e4xsL3V2xqjoEZkBboVtvm41VXhgvXJB1aXXqNvz3tysvQNZWmJwe",
  "key20": "3dXxZzwrKsLHQxMhsaSwrPCZYqEyYA8Vd7oYd7b8dd8XovNYDwhhMfA3VKFsX8jxdKsX1NaZGiuT6ttPrFoReXfq",
  "key21": "3ft4NhDRMwNZHtwhVrax4FRJkBpAnWjSsTZab6zjVYYLe2iBjrhp8TjitvUds64ztC1v7mBNF9qD54vFEWC1KTRu",
  "key22": "2ah57eWspMtAHeVFBuQ5XcRgjrGNKpx2a7r2EB1Td5TNURBuDMFEa59NwMmYgy4BKGRBAtKynvnUWNJFXXPfHFtu",
  "key23": "uVdzPmsHQXMZvWF8CXNDZjhP7FQBdjJe4wDcTdkZsmT1i5s85WXwxQujvFPSgTpJzDFr5oKUFm9QGCtBNBGZA7X",
  "key24": "4N4xX66WFkL7jrQMMjeL6QnR422XeyX78cWtKA1T2k7bFBVZNdPet4Q8qYSi9t6RKXrpSQWeUxSaYxuW4ZAnYdfo",
  "key25": "5jpkF9dpXZUWqiZ9QUWsin9iLbYCqZLQoAHLDf9iebCmWv8WJCWTWZ9WvfMpUjin5vHQNbVdjTDjiWu6YWqVbz2L",
  "key26": "3RC2XQoMdi1AYKJoKW2CWUVorEHPsX3QyvosEkEhzT2k1zNSq3Qa31QafRyHn5pmZ7kbbKaFP1AJe9hw6jC5nVnS",
  "key27": "5Dzx9QLLCTsZByx1i2eQ4YFsY5vMUJXmnrX4UAeBGsGp6KLiWKC7uzLGHQqLCUKSSKFxHzByJw6nrUqAqWk9Zeo",
  "key28": "UNbbCVB3NAnhMPALXa9Q3RQxERoMeCgUKBjqc5yEJ9bp5vXdeY9w6GjqTnBNuMo25GmH9psEKt1d2NTZjLKXk3m",
  "key29": "SftLuvVGdiReq5E2CbjKJMm1DbXrVzcGLZcN8eHUUtMKLoUkxg3Vp1mQjyWHww5o3VqAx6nY4JBtH1j8sczHdqZ",
  "key30": "3vk6fUPuUC9mwg5bzEDNRSErEgFgproLknZKJCLCS1WyjnnBbkVvZi7o7WkzD4Dv2nzJRTkgCWFt86phyX2HKBVU",
  "key31": "5thiEF1UJ3DrLHqXpwtPPcmnjHechTCEf5aoqzTpSnMfGNCvQBeqbytQ6BCwhCmJqENZrxJyXEqDTptGEYCPHJvZ",
  "key32": "apXHiRMbTT6ehJbZ7eYeFfi7fXz7H5ZLebop6PDk64SprfP4dUmhihpq82AguQJPc6cpThuiBAfgvVricCs1cHr",
  "key33": "3ubuHmtwLDNbD7YXvMCQBXEsaYiDdLQho9GaLbKRrmaGGQ113mEifLA5ioB6T9DT1dEaT7o1ZLpfsRSnbi54zN6Q",
  "key34": "2xejbwpT2DJtEpytwoFocoAmnNgdDNuVwg2cDordbMkpACbKLpGPfFD2ZpiQdDqNeKHkwePTDJCUnAPnC1KsGJVK",
  "key35": "22AAZQh4sbfuzjSfnF6ybxg7dATpMTLc5Li6BNpLxTUPfFFE6pT8nktKYkF2W543WiGD9GrRSJwKri3912BqnA5m",
  "key36": "2Sy3EaYHtBFu8XWHuaDgJhMtNnqCL6rsTtk4qJGwwtcMGeaKZCQJFyJi4kFR3YBpVS26ncVHPvx7Uu6TAGe3uyKB",
  "key37": "48GzHxRMkg55CzShZSBB8BhoyzFoeaqr89Dwa9Fgsyi9CyG4Q9zcriZgiZavnNVjcwdgnZcPUHt1i6hxydXXZfVy",
  "key38": "4bacNH51MaCpyy2t82jYggXVBhD8UtSSvvAxa8qRp6WxvgTqg4GsQyjynk8BrWbZddwE2u8J4pUM5QdE53dF7ubm",
  "key39": "2aoKSVSra8BP5y9RWBwu7LCnXwkiRc6ydQFsuPMH3R88fNyTaBs11AhyVrJbTrkG3WLDetxw8iY4BjMKDR38RTzd",
  "key40": "5e5ZuqwaTNGyvJNiQW2KcbHuHJ2u8o6zRrhxq73SgXuai586tcVVwSpsHV3mCRAbTt7nxBPUa2fVgCPqdK4HUZmn"
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
