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
    "jateLaz6fMk8doTPf9hh4Vtxq2gxazXAgozkcHf7u6EUrVh7iftJUt2zJfdTUmPqX7YdSWCP1LHy4LmfRcdtLde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sKK441h7wEQPLpq2PbgGrA5EodREkcnHx8Hj5L6iFRYqLnyjJWKjnW7KDi9m4tutg8Fr4LJCaf1qLV3CsqKeocf",
  "key1": "53UtDEsuThY19pk4gKUpGwKv3atz1yKg5goKQUKKqHVFDbtvzJn1RFfSwmo5QSdiugz21ei5J1ypZ14Bcw6LLGwF",
  "key2": "4DdHT214CYR18p4H7rEa3e8rnBWSQS5hPxwRvpx3qybZZxzbRfqBrDvvgNFBoEtUiq2ae85DCV3RBwDUEzTkwsCJ",
  "key3": "AQm7tUewmvqLTkrnmeA6o13dppgis1Yrjcdt1A8b6RiNbEVcUS15A9ov6q1ysPAcksRztNDuBZcqDeayETVUNms",
  "key4": "3C8YG1A6PJAuVbcK4DaVCzzupCXYZcX4B3obyTMm7tLe5VjWomdtwmdLqqQ2hJ7hVvrYmD2oEisxdvYLrt9ji9C8",
  "key5": "YtwxEDktAGTtcc2m26AhFyR73EUY7UmkGa73R5gtBHo7WHudN7xHQXK8iVPkjmBPKnbHcHAbeW4GtCGVeqTmpAx",
  "key6": "NpvPLh3B2SfhjrX1HzSiQVuTrk8z9TC8UA7LfW8MoXNt25F3Tv1zLSZMXXzBcLDbZCJrqtqM41wom3YuUbwvikL",
  "key7": "5nuvt5CRNeCAfrws9vaoRm45fmfpu1MFDmoUbQgRiwg3McbsaPTwzCaHZHNUdsewBSdxMMkMhGmEqER9TLji5XGZ",
  "key8": "3fDvnmYYo3RJSM5nb3vmvy5eHnhriN3jhDRvhjwEyahBraggiNwNKuxGNcxxv9tW7nGDTZZhyZDDJEAEjKkvcWkd",
  "key9": "Ec9q6GyBLbgunnVqMNyXahnxem8DmV7cqkkEGjBqzerhdwkYvaBuno2hMad2troDBwvSQdVVxTFnVDS2VeNY8wg",
  "key10": "pCnfDc3esmt1xFMCuvC5wAugj25vh42aBLRspMRgA1CMCYhux7rUpJoaWXE1vWxVa7JmzVeJHJiFAKJSuPHVoHM",
  "key11": "5BgvBJzsgzur9Wujxe5F9JrBdsBFeQs2VpBeQ5VvVnih8Kj2e7UmWAZUiwneKAQ6Kkk4Be7yLt8mKkGxbsTwLPNK",
  "key12": "y1PmTtZxD8Rb5PgBGK7Jq1eiapxxriK8iVq6E8di2xhRTwGZwKiK1kR753xnnhVepqpCMT5xFmbfBBSLdQk25u4",
  "key13": "5yeSSnULsAQdm1iboA1cqP7j6g3atZTzLAo4P5G5zmPY886hQa4Wh7Xsvag51VACEujpbLvtiBEL5QJdkK8L2L6s",
  "key14": "3yY3TV8Ko3AS6pFLfsmsudFbxHKPsQZ7EKz2qyLJ6XXbNMctbhJaR2m64JnhoqoioDFd9sHvnGSBEQeFwz4NrWQT",
  "key15": "tN34z8GmpjHpimVSneNbwXufnr75aYRa1xi7j7eBxzC8KqqMm52SNZpihn2ckNqN6f3zFkvKNPLat5JaykKQLir",
  "key16": "3xN9QgaJcPi5tnqzfgLuSX7BWsUanEKAdp9fM1Fmj5wiaroqvdcMRFNr3yk2bCft62khv9GAVmZKDgPfb9fHF6vY",
  "key17": "44o3aVnYeXvc8iFuesb8FMZAJBpoiiL8Y7fEjAEDRFPvGx6HSSppcNrqTD9EZyHtKRKCLPzEg2iFf2xtjKtkzgmV",
  "key18": "2BAC9AUptw9FgWYmGBxA8fm5bWrUueQu1CTqJatjCs6X6o4pH5jhuhv5VJsYxEgFQnQJuzg5ofsnj4eiSRdoH46M",
  "key19": "5V4CmLrQ4jfKics9TtmcZqY48jKmnx9mSRk4tAcAKKBtPydF8YGcAFxhBQ8tjSYg3FxZVJiHiJ8qTKd3fjfCDv8Z",
  "key20": "5r6nuUf1RXCmqfN2Bgg7nZNVzKVyivuEAZh8xxMKVaaQmYP58hoPMPn8sFErPNL4yrxp5Rhb6GjRnLkoUyPMeZWT",
  "key21": "5SK9jLKXG3EffTAU1xnUhu2wuvwSu1FmbXFWSgCN1v5ahqEgZb7iNiUUBh6VgJAyYKerpqU9cSBMKhSMRxLqABsm",
  "key22": "51oS9PzWLcVTqaJjrZjfjQLNS9x1VEF8zgE4rC8dqtnFwBntjqyajmfyvioEVpS3YDtuCvbKddvAapCEe5ygCLJV",
  "key23": "FRWyMasNaS7yZURGG6G4nJC8exj1dnbXQb9zQF2Mvh5vwuoC8BSJSss9dwY2ZuV2WUrSfhHBaofFuQQXWxGbEJy",
  "key24": "2vYDVkWR2qXdhbEPWT3LAqukKGqKTNdMUt7V2NVzGN8tosyYyP7Uc68KVuCHA8VMjooj9nJ1q6ngp3j2VbapBkii",
  "key25": "65Cd6rLXu6zgT59maydnZ6Ty5G3T19cxQ6A7wThrRwQ8x5LYQVjBRL6MTkMSXC6JCgfPexSDn6qqzW5jhkaC3b9J",
  "key26": "496wNiBzH9NTrhGvPGUqz8NK2oeBd9C7xrRpL7UvK1ep1ygCDVciPtCaXcri26mQcLWrT52eDuizBCbueSNum6q7",
  "key27": "4bJYgXfFnUwFKuNxuTKZttNPrh8yicaEJRaiXGokxUyRjqXVeq4ZRBHgmfdvCa9oZGnFgjX77Y2dYqs97vdh3oTj",
  "key28": "3W5AMEDwizkJiyRtrJrW21sUiHHYT7VV4cX4S5fvsoBCgrLA57SeXkdASpGHyU5fTAFwzzGUxPLDHQRtu1U5X58p",
  "key29": "YR5TCRcDjQGJ3L3pkahqcSBAdrR17doqvy8BYJwX6zXEi5MwUMoNHzFjeUxTy6LTPX28HZwa1uojrPRZ7sLNHnn",
  "key30": "5rV7rprAJz14ewTwvdJBav85ygJzTZ4o8qqmQMahfC1K1cWXFtKMx9tUviSyPL8RvT1uoc139rW2LABCcoHkRYxa",
  "key31": "5x5Zr2CYgcjBx645VKYPGCkte57kASqE2c9ma95ojQWRzrcBT8pRAdN6ARW87LgQjm4UwMGFLHKuhH1hbNDKJhhF",
  "key32": "3fUFjSYkUDtLUPLFDH9pNvRmWM1gBkj2ebKxypT68t1dCyLea3kFUrCdCQiaRU6ozomUWJdATrPHncypvgoM2maM",
  "key33": "4SgCfacXQsYyNjoHWgk88GN1tvZheW9u8nWjKpumk1LFakfDSS9uw3FaUuQptszEwRUJWJSVHx9QkFdpVov1sfxi",
  "key34": "5hX2tBYo2qk2fWyKvBw2e9CCo5dGBok77zV3VR9EnsFVVsYW3feu253aumQvFY99EjxanjG7XGuJ7Qz6aDuB2Ban",
  "key35": "2wbJRri4NLyYZNWS1JcF1jxWBf2tJMRcHUnafngU8UTT9YgPeRi3fxBSMTLvhy6x34MyeMy8ABACJXqtDYn7zxWH"
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
