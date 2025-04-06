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
    "2HW6aBJFZz4dd4jpR4TwvYicUZd6J9V6J8bcMmHsHq43YAeze6D3i81nVsxzxXkYgChFyuKLhdJ1ESbCeYy5zoDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33cmQYSXJ3Qiri5Hqfasju5K71hnS4ZHNzXVAsxSfBsACZbbbtyWn4gzG5hEZCWGFxd8zXDYKYBd56651oWNP4zR",
  "key1": "Jen7v8ywVSNzQNoBSMAFGPQA5CqipULNrRVgdBZqAiv3NP6HYYajBJc3QHD1EmJckzzi4me57gGFoZHGBfMY6k9",
  "key2": "59vGJtHKXwh8eGDgzcySdHRaMDx9aPAfMxM9ubkHGYdyWXxUsZPgqSnatmzSNcE9i8GVBjawQiXVSMxvAxzV5SB2",
  "key3": "55R8edEQkZUy9x9htoXyT3nNnWdVmmmSduMLykaZx5D8SxZSkY7RMRtm8v9QzmpYMsTsAQuFmSfUAh97C6SVBhSR",
  "key4": "5AQCvSdZi2CfiKiuKPe3YKTcMkxm1g3pxnFkLKjsuiHXtoh9mRdQYuLKpUwwhGXghZS5ive4crvaPCEGzBjgpMmZ",
  "key5": "49PivDgSicbbHCD1hAmJrBdbYUqV2bYbtg5uVjNoStC1FA8bHuhcPh4VAyHcNumLo7wXHyosLUFQ3N6WNBZtyXZj",
  "key6": "3TPZ43rgA1PNuuhWJJGsWGhbqy3WE9TFGgz9nRSKAXGCojXr6uKY3UcdY2gpkxVJmVBZjriBqMd4yyDq349YvBuw",
  "key7": "5sTH743i9BgTrCXF71qtmej8rYNEbVHeXaHqxiyhHAK4XK9nCzckwCNLAokRpxmKUacS7iNBXMp39cinq7GZxiMK",
  "key8": "4TEX5jEdAaYFJmjomQyw8s6aaBa3kRmUvPNidFSYFvLiRu9ssyi6WAZPcEEvtJURk555DeXvRtNwBZXCqFYWvHss",
  "key9": "639ffpY1xjiXi5SrYm3JssNm3ezpEoFnh8CSw2nBZvBnHKaZKY5yVaMqTRBdtpKYxBZKABfXWujRCQcAVrkXx7v7",
  "key10": "hf6wMrJZZuziy2LcaEWYpGn3apjkEM4Fprt2ZuFvR3hDaNqX8tuZZ2ngNevyrATagMnts8QPE8JoyxtTURcAGMA",
  "key11": "2dK14SmVAvCVnSvqBE4uuNCBTUPZJVw88V9N7cUWygzWjRRfuXp1nNnzTW76gkVccwxFbWtaWKMFJ4fpB1Z9ebDi",
  "key12": "54XUPvS46tBv5mcqYC8u8Ebs9gJpUsJ5Q2VtHfzPhkFk3XUJ9jBLLimr9KRpx5AyoBbKauJWigLNennn9wT8bgxb",
  "key13": "21viK5wgHUyHcY2oHmmz2s3iHPxMsdYZgm3StsfbUxniYYT7eScraLCEvcxDsftxpe6KQN3Uvm2iCDFah3ycJjGU",
  "key14": "HmNukkjpJ6P3cuyH5qZMLmV97MJbKJGX7dyeWAzr5uTbB1Kewk1ig88Gqy1Cb2xw2Gbkz5QqLCfbrzy7CHifvYh",
  "key15": "5SCiE11Jd9HVPXekNRX5hC8chC3Diyi2utHVnn99PAB3HDe8vTVShqimSZ2sCbNFsGtySfNSSQuPWHFb872LZHLQ",
  "key16": "52ZN6GjnaSqjKPVNFCwS5Nk3nSXLpw8qXxAos53zMg1vNRzJE6t3MDAfX6fZ86MGTLWjvLdbBGRJeXqusQ4ijHUB",
  "key17": "2rKdU4VDuStqugDEj5gnckZKxHuNg1kz4jmzSXTnP2qPa7d815pqxvSFTdL4USYirXAAz5Vm4U36bjgfBYcGuCVw",
  "key18": "26oPVpHUPeL8nspoBpjfdUALhJ7iJVy2Vvoa5zwm2WNaLjJu3yEGRXu4wPzi2RWzH9nMuEq6fsecDHfWmyYfWMaT",
  "key19": "5HvxdbTfBLbdHjxXnBg43k7gG19FRXNpDj7kyffDSqe3BPXmYkpewjfTTAKpSkn5KpkA1SoqUhdtcyG9afSkAzYs",
  "key20": "6479MuFH4FAQ88jahpHHgBGkB7LMx83cugqnRucPizqWLtdATwWzbjpGgsufVfHEzjBkz3JeHru4tjkyW5J9Yb7f",
  "key21": "nEYGpnSEVPnY5mxSD2adtkGfLdcAvCit3xWznqc2dUb6ATAewWmtKQSjVxyiFqswDBS3cBhKMRwQe8JPDtoav6V",
  "key22": "47VgAeJA3DFxzkVMG3KJgjwgv9iboBSFq2aTBAE7TqEfcFxyVBJi6Dk5HbVb7NeHRpYb22cek9bwY4muAjTW1qEU",
  "key23": "2mxxfSVQmTzX2E5eb6A3xjAHMCsiMbGK7K9Z2VwuLayBuUhmCAxLARaLsHCVvY1kAK5e6S7k8xT8XvfGXhjjyQTW",
  "key24": "2GyLKZYE5z3pyAZ7ShJBn8QubzMCbbQDWjjpCUsArAmAiCTa7TF3rWGCkDc2kK7CPYHc973piaT69WezJEdAuxMJ",
  "key25": "58MVdjdZgaAQfgc8rJK7LHn1bGgYfcdUz39eDsNSjUmpVELSCYtpXUu2xDhjjSfV5eGBPBAkCnhYoQvHyRfmYAu7",
  "key26": "4NRF9qah2e1Vmff76ekg4s4wX3HNN6VFGqjzmogVeo3Tk66NNEePc9YFF9sLTyy3XiAeA2a3MwN4xZZxYjEB4fhQ",
  "key27": "36xqjQgs8XCjyPDG2R4udJuZavMzuheAeH8FGaSn3PZ8p5UUW6raV5WEVyhLQXcKsEN6zmGSaBGrwFh4Kemco7aF",
  "key28": "3ihkFR7vaxHDusWbx3W9Hz5irgEN6vw5bn91nr1TCPvWvV2NfZAZUTd8eoVVkxaRH8fFN3GU9rkmTUMQuM7Fu9vu",
  "key29": "TGenGKue71ysykBuQ8WRKUSut7hxrP3hPnc5x68HD2bqEtG5WJvtQc45JSZF7gUwJ6gRKLv5uyr9h1HEsa5Duo7",
  "key30": "3WzcA6TwRbFxDdMxMCAVJ8in4r5sQ9hWtB6miwipFKNmv1oJVWx2U5JGXLbdB7kQRqfMGHvkZrXcg6AgQF6V6zoK",
  "key31": "5jn4pinazA1Nn4efZM2KpR8UvyLMgAL4FTVqQ8oDR8Zez3UjMpyWLWuUrkS5d3povwnQWdeu6oYNPWcaC5SP8UrQ",
  "key32": "2ssN7cyvF7jXwSDJYtj1zehkviaZDvVwdc72UatN9chwrnuHhBFyo9ybKvxSNP3QKTYe2wP8zKzY8rmch4bxbcKs",
  "key33": "5C8uqn9KXVHTsCeZPWV88eEaejyZuA12qd1rKTcJJcJjDGmnLNU3sx9ZRsrKoRENTPsup6jkxu8aMDM3AUCQAXKF",
  "key34": "5pPmNMkVf4QtBa3ayFU4SCKqYX64RkCg5t5NQN6M26zDx2SUtfuo2hdHawZkzrrmbSwu5v42uxRf5etEc3aK7Ap2",
  "key35": "AVEa82wpCnsnMVs8mJmAMDg3bmqjqaTjirk8Nc9brsQhzfLjQAuwLuTb4rnh1rV8U9mHYD6Tf65a9dEFkYBsJ1d",
  "key36": "3GNTRHDavNW5VV8Ceebio56Fcn4HqMd5ZcAV3tBf45uZcVQzKfwhaLAFB9a3PC6V4851dNSs3Vq2hq4RsZMn8GQ",
  "key37": "5N3c5HYp2kNbvBdrHVEZBgAw9uRkdvMRKqvzZiKBAzCfHFTQUJFZeX7FMrTYBwPNHaVam8bg76PETaN5GLLqpQeD",
  "key38": "4rhSBHbqYk6nProFgUZ43c1a4ncNJbRkogSfkc1EdwyNuPceqgErBy3F96ju3UTn7tcEvyQA9qYZbcnowYA2npeV",
  "key39": "3hkFn8bZRFsNpaCGTneLQW5PmEKPfpfBQEzvTR7J5KQWqjbmcGR8DYu3HfYtgZkHPrLadfhDgwyDrG5c5VQYT5id",
  "key40": "2Feka86ooPs8CnyxM5vYLEaTcD5Gz7Pj3fzD71k5KTggqdttpc71uwdEuBxjdbFaSW3hjfYCv2od6n8v1nQQZm4G",
  "key41": "kEcb9vWf5y8w4dd6ddqNJeLiH7B7LWACyZRwBrSWvJSipjdswveUhjyaQPMCgLfMJhi4Sy52zFzm2mAkZBSs3xD",
  "key42": "22ptktDs8DiUjHC5sn1rX8XA6LdC4Fsug1P4iUnrNxLcGsfUKkhZwEsviZMk3wZwocTgpyMRF6HbqL9p6NBCJn3t",
  "key43": "47j3eBztvwyVj8q7JjwB9aCqsSrFvonEYvzDNRN1AqSQzpEJ6APwVxEVpvKCaQY4K6V8QA3sTPJLkWXGY8gqWy53"
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
