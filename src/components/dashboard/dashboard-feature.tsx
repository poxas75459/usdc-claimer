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
    "5yfWQKLVSMDHKsT3R2ecW717zbd8DyBokWSY7NRtVbD96XBumABUvkRF4Qq9Y8Xk6sUio7Uy5kHzCwxsh6gh6row"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5goDTY9KSq9H6RbMwihLUcszsxdUT8rrkn9Pqx1i96r2vzz5c7NhuXgx6x6EViMd2FdkYqZQyvuQH7uCycGiZ64K",
  "key1": "4M8kvVjwMrZXoFr8JARQ8shxZHzjYDB4HmsC8Uqv9tRq8bCvNDLjFjUix2JuFZUTi8EZEGYMGHSELcKDmbmTtGwt",
  "key2": "4M3ugAEyXiVU56zAdu3hgnVefRfAAVrBuTZZYWNNDSRQDmr5pmP6CRpxKngVrtCeziigNf4V2D4GrvcBDsztTCsB",
  "key3": "4szgRg5p2V54Qgu96aSPEJX55Jvzf6xvQnXwAxu1yr6VGURL9oK2ftRbyvqNVs5RY5SCFQstaERR1cNWaaNg4RJU",
  "key4": "equ3bkbw2Q4hrgBA3uFViRPAm7K59BEoSRamW79hmmdTSZKpHWcWWoxDWKX5BpqDAvEqebkKgur8BQzHTxE1YqC",
  "key5": "4jPoKPHWQY8nyTJ7BrYLcpKbr2U6Mb68xVGWrFeV7XS2rUYuwFz4in7KCMvLpNUqtRZJ6fKKxrbfWo5GgHeGJ23",
  "key6": "3ovS6bNFqpetmfADdnA8Bfa2kHkpWJDHVVYuyBM991bqRHJG9uEYuZRPck8iv1iLo9kYRwTRK2nkUMsTWnm48u5h",
  "key7": "4yQt2uDPpdeh9C2xz3iQd36XabdM18hcPepd9NUjfQD1f17fkeVDQM63VxZ7YTdYwB9tMGgEyginSWPcCozVKLLS",
  "key8": "4pKmo8qqpyTeQ1mNnv4piyR7DdFRTDDGURFcgc9eaDrrDEGf1GFXNtt43gHew1NRxFNEn6BCFBaiXGJRDBKUmLhP",
  "key9": "5Pw8uL18ohHnFL4uySDnXzDih7bkSJTYqTCg6iXr3P5ZB91JCjCawfw3vB5zCKLM24VtV65ufxbX5CQfAxeW7tat",
  "key10": "9gFHw2AZ6SEyca4GaFrkDutUBSd4w9E772NjVaL4kPgLdsePPVFT2S5rQr3uopfPE7L9T3ncgNWibmj8uePgYGT",
  "key11": "2o8rMWQKXzKAYemwKjxihabTwqsF51wUA6jkX6ABaUTgZWG9y5Hrcnmjx4eXDsrxo57FtaZLcx9o8kTQVxqpRyjv",
  "key12": "7Qh69auHyHE4vK5MSgzjrg4inHiBUxH3DfoEgeUfcp9PG3173Zawr3Run1GGjzFEu3ABDvPsYLJVsL1sYdBZvVk",
  "key13": "dFb2XSgc8Z7EWMaygz3fYspPnn1U5ssVAXYxyNnhaXr9P5SFdqMgM2gmJsdWhZ5pwvr4s8FeLY6wQjFTBenkKgb",
  "key14": "4QYmnqVwNiEY2LWNdyxGWbj6ynkgBWzC2Vn4mo9Y5n3CK13bzcWYCVHXNHo9ajtWuWR4inhy9xdj8LVEyGS982Hp",
  "key15": "2UKX1WJBaZHXPvkM4JXUTutEGhifaUSJR4LFrmnCd8PUM8qEiAvzxtHaFdSYuVRJhb8xQGPrJpZG2brvsTA3C55E",
  "key16": "4itkRKjnbTP9ZwZ8RqZJhG3jSTcA7My6KovFok9ZhmwPRfgzNaCBfor7gJ8jFbVEkPkc8nyncLKsdFJQQ8YEBnoz",
  "key17": "2RbJirakAWUXVTgvM3cTztcAt9jmuaPBAJfBMxrzejyHuvHH4GJzZkcwcPHGAvHbvprQXBpprrFGAJ6U9YhSQwpS",
  "key18": "23jNica44jKeTsvZshSWwsSRZL7vGwq1XQPT6KsrHrDEW3j7tRWCZpiB3mRyEsPpxcxKAPiBixdZLQ9uJqqSLQDu",
  "key19": "2RjnsoJA232eUWxYDSLLjATBQcGAUF32FbW7VvMNBFkEJk7SAYTWPCJgZsDNgJaSsQ4nq2Zf227KBH6REfoBuSyV",
  "key20": "3AeHyYMWMZ3Tvz6eykPbvWAdYwU4bdxBZtd8UjqfTyPCKPd4eD4aDrkaBpH6pqa2Zrjd729GXLdHXAoLT1yUysxN",
  "key21": "39xqXzLMcYSAV2Lf8urkC1ajwrtHx58HUTvyYtrMY8FyZU4Y6ToHBJ11yAXPhkFTr4ekCcByq3QdZMztSsQPzpPy",
  "key22": "3VVhzaEeuhbUpfDsmcwmqcsTSfL12dNKzA8UhH8RGWLF7ThWJMZxBzr16rCdPE3pQUAG9e9EfBgpaByrsFyWAHV9",
  "key23": "uSTDmUbFsQPRq5kEseMGJmhpg5xDhzdkPY4w5nZagLdupYHs7KH2WVcUnRhKxxeaVbUpAdmyv9SmVoRGi12Vg8H",
  "key24": "5pBokYMM6JSw667QVJoFmGSQ8FDNFnQqfXUq6q9BjHo8cKvVrrYcuadL3gXpNJMqEUiiUTHSiwEF3VyhaeaAKnj5",
  "key25": "4Nx2n3RqzFPrBvDRoHYmWsQPPXufVEG6MBAKVo87X2ZhxEsfneQk2bvoC6A9EgzkLq7MswQJuemYFWBruvTRvnrN",
  "key26": "2XC9JRVw56oiW4XbJiE1D4NkNLaB5sJymsyXze96XvCQzgPGT7K7KSEMjxYjtmVpL1d6VmyiAxpoKuc213WFdD21",
  "key27": "8m5EmJ36de6LooCFMEy3kgDTf9nWhE1sfJnFKz9wiaW9nehfMyo55nMx64c9859RVAFue9BhuACK61mfxUTAX93",
  "key28": "3SpfqKaNKGvVXcRLPyg9RGfMbfqx7AaViKSugMXps1DqdWByR3riYbGXip9upcdUo2fEvsS97L6YLnXzd5CXqep8",
  "key29": "4e9VptF27ycZX9pB8d5ECseYsk89qTeU9WPzpeFnxbJrMFyqcELJLLGPL3LcguMTguRySQ69sEnXLRERQ2SYNnQH",
  "key30": "GiVzEi6Z6WfQ7v1HBMATefouYHbHCr9xUGfPNrKsAfBWftzNXLV3EJY3pneJC6LFe42S6XZLaDSrfiaYRQV7iEq",
  "key31": "4FuwCKZ8xeaanWpED2gB35qjD2ci53KDjPwSfg5Adbc6yk9LJGzcu2dkAgc5nzdyC2RyNdggkW1G5BkC9DuPYHAP"
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
