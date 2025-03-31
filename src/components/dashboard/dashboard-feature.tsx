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
    "413UCB7yCQGv2bXkqkyKqeNMiQzz9PDvysoS16ycfnhHvYonR7pQaKrLTidhxWfeERRaehWHJeGxwsgTvSPA7g7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wK2YYeHX4w3NWAorq8DcvmF9X3eNHoTYVXwofUtrPfUynU7HB9paN1zLBBY5fAYToqEcaThzfCDHFAdpeUwBGRL",
  "key1": "W6YhdT5tXacFMg4pRPoTyBaPge6ZUFr6aQwfFY4skFaU4qAS7wzkvBUeGgDrT4GpQC1gnygt9uBuJTznByNmJxv",
  "key2": "5YXFxFdVUPtDU7ZVvYxTpBg2qjcnqPx8F4UDzRg8FUbBDS9gVwPTKzmf6wDT9nf2uWiQo59reitdJigA7JmDHezW",
  "key3": "2uzCDrUrTKMGVQgg1tpzN9JXvDELtaDoFc4wmLSxM84R2eYFZNUDvLig6svGgpBcPMEnHaMABSxkDeQAQbL7YuNZ",
  "key4": "2MESbZ5Pfv4gBiq8tkPrEbp58SzwzCw4zNivj3A55MGtgvnemSs7yA2fEjs4HSkD1NGafeCJS5pWDXwobG4rdUK3",
  "key5": "63v8RHhCbHy3hrKNej67KseiE113HJnPDmK6wSPS8hYUm9mCSXZ9k7qVCF33AaZMbBfebELbLDUMgc7F9MJfPz4h",
  "key6": "5kw9ofFkn3NJURnWWsxYy4KTC7Gdp31yvvC83pzvUARXoUzjRzRMJdMLdEQTwjxjNwh1Vx9RFWD2t8rUByn8rrzP",
  "key7": "4n44zB4uCVHDjMRQuZAW8GHactyqhFNpuP6KtwbwpwiXA6iVeGDzVwdQHhyMhoioQZ2fvpbupGqRERmDMnorEe4g",
  "key8": "5DU2UUc4VYUNrbQyWsvxK2YWD4GrVkm5DFneeoWhGv1EkwS5KkpEbWSPQghWewsPraqRH3mDiSmfttfqAjbw6UUS",
  "key9": "5Ts1ExCfcNyTUXHkkZAQbaE4qrSUNbRqp5vPrSQvPmebcMTT2a1xaPV6UEuVshvRj4Rhf2miPdrfn9ojCoP7m9VM",
  "key10": "5QhF84jZBXQQizZauMpyV3G6QrJ4YbaFQFHz48pBkU23gib8A7tpVLigy1EoiWYgFg9WXNXFeAN45DqBK3geczTU",
  "key11": "2i5iZwQDgczfo9DxWPkjoCi6KmrfGUbXzuYssdhyNTZ17DzUNPjvUPjrmLzLUmRfe1adQN8FNy5oKajsum26Ar4f",
  "key12": "5ArotVVvnyiDveHPUEN2ZrnKxQ93BwKQpS1RuRFS1Sr2agM5YcMAsqCkGtWoGFd1ACLRWhaJPGBtx53KgKLxm1sX",
  "key13": "29c4M8oLFwb6wHULRGTHRRWE23DpTrAPjVA3chRpAUi6PMkiVBa9biDHjTCUERqWDgcDW88H4yievDzPuoHAb3xu",
  "key14": "3mukKg76avpGqQJ1y1qT5ZrxNtPiA44g57rJc8PqYsZwDqdHNyqkeVEtkXnD7exn7LPLAfVXLqtcFH5bGmLfSTYD",
  "key15": "4w9GzSLZtvuz5Dbw8oUJyzRe8j8Da2kNVYVJWzEJyBvMmCKgdVR8ukLkEVqJWAdNz87MPA5DqT9XLanXAoDYcCCq",
  "key16": "2VkoY3v1TYRhaXenGJ5pjQZj2UFWTYGPVsJceLoymBnQ8Xi5M5UzEvfqyWtV7RiaDmSFKHvejxoUj3oGYKMMFjr6",
  "key17": "5BJyGWZHNnztYnq1Fdfvhou1Rvgcv83UAx2xeR1edFf6EHWsyJt3wv8QyPyDRtSVhtmK1ACgsT8oR16BJQipje2v",
  "key18": "byZgwauypbxB2nWvekPGkURMiSBLbwsuorHcjm9MXfcdYfXgDuN98REPVQRqKnNQnGvcZ4iFsgfgrkryzmvmqAK",
  "key19": "3Mqua3vTkxru6T5ydMkKa59prmZ7xHPnAdmHgAsHvTJ4jkQd426zLaAZDmB3b47iX95AZS7tkBMJ5r2qtfH4ibMV",
  "key20": "BdtbXwnXZMygBctsPG4Eqe9CkFQDuqCSjZSX1qFojw3CrsNnvSwkyPK5ybk4NsWRzcRxcdLKiXJBTM5aDiPLDPG",
  "key21": "4MCr2TsWVmKnWH4qLFD6i72a6msJ6MYrbbgbvuU4qUZMa18hQ3rbtVnef33oDj8AwdmGb67RHZmiBjW9Yg8VrheH",
  "key22": "2jyjex36QGmsW2xyTUTi14iSnLx9dBzWJnwAECkTSrRHHvoQ7hknd4jaH14AFgTSB8jshPpJLGDJ4Ls3Xhfp8Bfd",
  "key23": "4NZyqMx4Xtkz6K5StcEv7txSQLgtucKdScrRCbKoz7m7pM2UdCi4kM4oQcckVgCeGdAavX9Yihm3zJKoL5UwRvnu",
  "key24": "3GHTxgVSWMZyrwKDvZpRGYBufh3SaE1RjUcSAJp26jV9dTT8pyJzByoJk8kSSVsf1Ugj9hwRRe7hxWrLdPk38iVB",
  "key25": "3CX9Y9mmrwS91PWNcZJzc4UQPfTWuDKzyBGY8aBEs4cZHA9zcwWBzC15KFDF9J8aoCLVUpxogNbJYeBtf8jNG32L",
  "key26": "2NP93kwkizSHvgu8oWr5dKv7pFm8phmaPBdh77fRQeLNwDv1idseB46v6AvyR6HKWfwA8kjTf1BSJwupKBMintiH",
  "key27": "3kP1hq9TpVZ5Da8HAHk7NnsFsUZak6tYfg8y1DuMk21acgmtdTNzvhPgecMogS6pxuRGoJmpwGuuWnRcpE6R5Xyw",
  "key28": "4EaFKJikTtEZcq8P99yPc9Y777jnyWJhX4uC5Y9odRiZy4nwMD7kD9BPXzwmG69Zbgf1JSPamzopfzPiCLRMAmH1",
  "key29": "2Q665N6wVRreYU8H3SXXM7ERqmW51YQghfkcrkwqhEynSpXXfVbfmA9S4XzMCFuuxPgwKoHbVJYpHTcZHCNGHmA1",
  "key30": "2c5qZg6QVsSb55Zy8YipvY19i83kBR3sZUkXbXc2FQZ3oSMwkwWeNjtAtXou2GAb6PUUsjGwuENjQrM6tyasmtt7",
  "key31": "22SjwBibXcs35aQgHgV7urQsV63xmbo4Kk8tL5m1cbxj2RxaCdmEkx3yBwYTJKTFTPYA6ofAdBHWBeSrLng4n73A",
  "key32": "2FSz94jZdFRQ8NDfjJbsNdi7QCVTFB8ULzW1meS4uqxxRcLN4xwVdAn3JVqLSdZN7YzMQa3aCcY23mMrqCgKFXPF",
  "key33": "33jfrPLhPNvXMRzx9Kjrgx2S3kLmVQM61wmUUfKjDM7kf7xeqrmP34zH82SjCKwrQf3JQo4ES5AnoweaX6XQFKZ9",
  "key34": "3q54Q9Et6BcunuyMzCUbGwnynXKg8cFX6A4uo7NvWvHnbnio3SwsUkZw6axwgLLiQF7EQaPTJDFoDWKJJqGGbT5M",
  "key35": "5oarfbY1JGK35FmcLnQ5RUyxa4mYjdyZZK1K4cHAi6q1gifRou81tMHJwfZ5w1U32kZ9oAyMUzRnBGPGMFEgutLp",
  "key36": "2uYoyN9xZALetm54SSNPLs6MYcySKgP5LmYfoPD6QrekKRNxbze9487hrquRVYnxNNzL6kfgCzVQFCTD4MQp1Fpo",
  "key37": "629gTU7dFQSRFuUBiHx1pZvM1Joz5AE1susAMDfk91vMWg1ijTFPVqBXoQeFCvHvJFbtWSjnMsTmqRXimhTj9g34",
  "key38": "5cwJ2ZbMFBYJmsHFgYBPkQHtzYH9bKDriGrM6Lwu7dZYpjEq1H7R5UpoYKBUEPLVqDH7dyJevdfVW9KGnXCskLKg",
  "key39": "4mBaJATs956JWuG11hoYyG5vhpSN4fTdtW5jLWcFPzDRaN3imsjqACkJRL8qVGuUuVRBQCh6NzpcK5PJ7JcHnfxM",
  "key40": "2fUmJ8qZCdGamdBYnwyezP1ogrxBpt7MWLzgZWixtNTb47haEnNKsBBgHEiKPJF2m5QWMrgwa41mVbt7wdDubPqQ",
  "key41": "AfZmi68Mpy4o2kwUJPsEDKScnEdoXXwMUz23SXfd4Nc4mPmaNQQHFzPKMiHAt9yTWzkyt8iKD1ZcRSqARUSE8SK",
  "key42": "4PX5gooTLEcWmV9bvNJxAitJ1LjR3nJ8UZ26x6vvRByy2aKwFM6mbQBJFuqn369BiuH6eVsacgy4FhWqnYPdAzsd",
  "key43": "5nowPsfGSBpGfx2Sdz4JiJcQjvqX9HqF4cHh9ySxA1vBZAyghymMpwmvKriXNrkt5VUiFDwjUPC3gCuWgBivieFE",
  "key44": "3yAWTPKFGc6KxjEF8vCt1E72wvRBbUsBVzpngY9JG3YLFFkQHcNPAMSwktziwxTGvpEQx87cttabMtm41NSZNoYW",
  "key45": "4FSRfNjghDHoFkE6W8Qm2nfAWSiKdHm5q1UdxmmA2DNLm63uMTVWS8bpsTYy6CupJT5d5C1APMSq9anABN6C74pC",
  "key46": "KJ54bBqgjDsrjAH6CkyD5yqDtmvNQs3VFaqUFMPMcRSGXbmA42FoYCgZtEnvSMAu12qapGKwYERPENwYpxWGieh",
  "key47": "4WVLJrsQDwbEMwQFwxqbzs7BgC77g4Pkw62tebRtB4ZgvysjUHBxzeG1XWu8eFm1Gmjrq1ZsVP6kzkVMNepscfKz"
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
