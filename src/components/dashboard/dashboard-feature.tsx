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
    "3tLRm87V5SvF4XJboV8vvUnUJng27JFMUXbQzRqNzfGRHPvT53ET8xQfKsmJsu8Kz7ehQkmHzotj37dCiTuxU3h5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RdY9mAxKBKYuqvUHu4AAjY3MrNcwD7bHeyEbb6f6wLU1w3niEGEZhnziTDcw8AU6cGF6sXTpyFKYxKb4qk6j8YF",
  "key1": "b6oL9ghyqcLbb4yCyv5k88J8Z8CPBYa3tzcmZePaJM2hfb1KqETfQyzhvD7taeBumqL7NNxs6o38j4akMxJRf8v",
  "key2": "5ie9vUr4VkVN8tpf5oD8aRk6sakme9UihhEQoWifyqc7jxMBcZf8t19ctGZK2bduJNhmztHRNhCPubz1U44WyVAM",
  "key3": "4hD6f7ho3HnVpL5K5YBaM19RQjZk18KT61JA8gSeEhr2MSg3peq1FXWyNC84ZPN4sQRq8GEimqEme5CaPn3c7XLd",
  "key4": "6cx7yy3FxD6bvoQd8o7Tme6Zq3uGRPSQNWpW1EMo92foeHfdtvm12L9Mu1k1nUrLak4SHVy9L2EqNjLsayhymjd",
  "key5": "JyGkWhsHqhDE5t3rBFUfp59LFznHZTDX8UqAwpGVsfHTT6i9UXwr6QNUrNiAmNmmEirAd74NVFig6w6tPXqcSYT",
  "key6": "4A4JHY6aj5txXkgac7embWvvLonLJRNqfCsXL7ERK8UefbKDXFUY9873s7WZLzrXJFKqErdRq3eWdYJFBgKt1sb8",
  "key7": "4uRFyJp6QpDpZn8PseTcWD4qz9wpPoLC2XtCPRnnzXGJk6wBMpMz3oEMjdcmxdX9CubqTWnJaoty1dQ1aCFDC4Ux",
  "key8": "3ysSDigmjLWJbCkTyaRQCsk6AxXDHL2nQ3Fk4uNAiPfje7C6krADQU7GzEDoBUtyNSfNJSBpkYu88oN3C3yz3b35",
  "key9": "5WeMDxTNEaoUNauXrxMN9cGBywySscyJcGs2Zy92zPLPy91qtY3GohnW2Rac366ergv1ryAtD4BoPG24tTuFeryD",
  "key10": "2ccKmAAegN4zQkJmgZFypjsSuT9vDsEfcBj5gzi6dkumY7MaqEfFNWjNXBx8aRq6Ycibd2jmNhLQoXXx6dVSRi26",
  "key11": "4LscZ3eSU6mT1TFJP4gmoZqJnGnWamf2bf8ZadPfCyz5jsjM7kHGTqtVctJqQw2342uSwdkoQ3M7GM89uEJTm2SE",
  "key12": "5NjQ2DDbASZ3A5DiRTykyPq6F11wZT96nhkdn9UxcDNdKF3XZbYwm65WpjJKnSNqWDHEiirS4ELK3LinCi8KpJ7S",
  "key13": "5SKtM5DfahX1o5LEfu4tywPhKsPKW8EXHRj1fnYcNss4e7dTuk8ZHLZ9dUGRNntj26r3LQt7uLuogEXtdKDT9xbq",
  "key14": "5EXZKd4LkmXeXEzV72CxYyFsLg1MParAR9uSwstAK6bYCxZqHQUtYC8e63VyyBc2bcMEGMqcweDFRajRstmYkCoX",
  "key15": "369rMgtHk6Uvfz5pLGmJ3GQx8wTszwaqK8DX6ZLgQdY8YTxBBv9XSkxBMA2rpxbyPmUhqVpXyKb4BPDpQfiKWUAb",
  "key16": "4N32cjT85TBb4BFEos6DVCCodMiKQuVGxRUDFpQy48RzssW4uUEMkVKdgdbJ2qVVrxLPSkmQWXqLcCE22Pu2Uowi",
  "key17": "3fx1kUSMaSDvSmiWipXFdsFin5RKnb7MXhdmbbrnHKeetDEsd98bhnw7kaqHBGZHRmRh1ZC1yQUWKZmYs6vc8J6y",
  "key18": "3ahUxx9v7zTQ3KgVpXAG2o72pSABXnZMxwUDT2wiiHfuF2q3LaYZw9Ca5bTPesAvq7fFAsff4CLN8LKNwYh7zL6f",
  "key19": "3uomy4d3MjNvtNho5NcLcJPaLRjLKssov2xN3R6CCJeVrW9YC95pNHQTf6chBBxS1BFsXjhKXeHrbUSV4gmLTCpa",
  "key20": "3rDb7GNSQAhY1cvGfV7snMrZSMfaXsXfqtPrvrGP4euwsk7nb2ML5ivV4Wsf4xbJ4oiMyrFwmdWfm3yZ7PWcshFu",
  "key21": "5aWkzpPQecBfHdcJjGVhcMPEDduuWxe7y4mMyFwsGeTP6eyT9pDgHdsdxkDPUeGxkZFzJvkZbo2Z9pdz8sMoGcSd",
  "key22": "4uADYsbodtYisGypPwc1yripTa6D9pgvXGeLKsrZUL2jEJCUL8MwZthCJXEcCPw9HQhkfLsf9sedkMKY4fy4ysnP",
  "key23": "51vf1L8J5eD685EBcuCjfyV25NLAeqwrEFCdKKworEFf1zkcTjUerC5EVt7C2kDUbCaUpCQC9gDWRo4aXaZb6N6k",
  "key24": "5HtSpUrJCLEKNLb7yYeFWJzadp3vb2yyuw1iVBi1H1xk418cwGk75KzFe7mo1VeNtqqACAmQ5SRhsDywVQV4RfTj",
  "key25": "2ZXitGd8oGChnG3vKViXGp4j8hHwu3raGC77CmqjmaBm3MVF23ZKhZ9oEwKCnHRouHk9FHAZ4PDAPsWcXijau89r",
  "key26": "2rzrS6pju6jMb3cNVeFP7Nr66fWrqBwp7GZ2Pwbahg3Bvm5dGNfvYmYNUNHZSRtaaW2JEmeSgKKmUtgyZ237UDNw",
  "key27": "2sBVdPShTyEZqStpCCC6h8ktceUzodS3s2ZbZhjfCzCt8iC2KzcQ3zMRJSrWruKFkXaxrbpoaUHL1pzDy35zWXrM",
  "key28": "2CcojoaCuwq4qWYBkG2zUFDqgpWj9PQ9Ed4xJmCQmMzJvFBBhPH5csFrPNADL6sNcueLJjr7Ck2dFMnAhEAZPEkZ",
  "key29": "25LT4SHbjdjPeAeJqQLYMszo8Vc37zqbFbgfc3MuGhd45pJ7Go8d9G64WZWasgEs22mLN9s2A8H5bBAzRZu3dmCd",
  "key30": "5iDh3qJwcC3meHT7wjt9BKF71FXcQTwqLRnr4qjVsT97P88c9NxG5xea9VcU6ndzUAU82GsS7X6UMuKvmk2Mxpu7",
  "key31": "2YWXFFSw29Vn5eUKVDbkxLf5MxBb8yycM7noDTiSwq35EYvgqDrq15UmbFj7tN5DSpXWGmnqWGeAYmrbwWamqvgV",
  "key32": "2Mqz6MPYoNaiE8nVNbC7DMdD58asQTktxCWFsFBoLv7BonvSur3XsRfP2yc6HUAtN45bPeaPnhhggeUgNfK6b8vx",
  "key33": "61UqcA6LxfxNFDwsoKpLomNTaPiSsNojReVvaSQCLb5ZsW5estBxTpV4RVydLgU9rKc5i45JWPPf59QXZwwV6KUW",
  "key34": "5qm5J7xd3xucNwr7MRbLWqkqgda6FNHfZoyGUUmmWt9z4fR5HqtAovgCg1HDGXe2Xbbht7pzfWo2nYafYN34pwpz",
  "key35": "5yrKsxQW9U7ExaiFKopEXXu1ebAdY1ZagAAGbW78khEz3AixX57gqNiqE9ECjLAbp6LKeCTAt1xAMzeQstx5q9aZ",
  "key36": "66ZN2Z2tJeEkcNn87LbU5MftRT8d6yorjKpGsaaYTt1q92Z7F9U7wJxhiGppEBPnBYzU5rQ2FUaUjDs1TPRf4HAi",
  "key37": "fTsFs4LC5Q6g9i8F4y8A9qRTPfWMsZQzFiCJMYzk86MZyuwDk3B5v8uB3yVysZKK7sKPEm4Je3VAR1EWVWMYZFY"
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
