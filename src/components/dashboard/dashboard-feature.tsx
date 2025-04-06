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
    "3croXMjqjVxnPy5PzFUcsmit2kmKK4KAm1uCR7fmL2PGik47TYoubYNuU7mMjd1i2KQudNXXwgUExQVDTPGVj9qM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WJ8ZjGZNxw5dpyQjMTzBgeNKdv3vNYGZbXHygsPG7bFZPs1ngdqfeaV3TeSrdosgNqZzhz6dwDcje4rBipivfSo",
  "key1": "tzHGLXmG9d9cP5BW5ZiRabHXgM5Vgh6JMZWpCC4MPpDQXfJjaSjyTg4W4b1P7B6rJgGWVHhimx6VTjRWh69Te9R",
  "key2": "2QF8HvpfF9jpfekeK4aXCGPZNpXFzbJrX86zseCa2rKYFBcxsGcaUzC9nCZB8zmFcr3fnqgxMeNjFHLSFLSLu4qL",
  "key3": "4Qe522p2XgtDceRRqXh5fpMtaddA5Rm9d3REZ8MMsFXSjewukS1fRCvBEzfhMVbdymHMg6fmAtUPgZ6j2jeKURmb",
  "key4": "6NUZwsfn4aayqojqXhk5P4v77AJp6rC9QjYWwJLpZpXu86Cucr3jRhswVnFsKxXEum1BCSKrujtaqbdYJ9v6Qrf",
  "key5": "VhvYCsM29Hn3w6TMqqAUzr5U2qHa2oWwo2KRUmuE21mBcxw8XRTeteAoHBFZ6PbnCUHoqX8d1eGomXcvow9JV5V",
  "key6": "4ycSCvcYWAJd7QhavR54emK5RicJfYtgzS9qZEsBS5KKZLPmXFH7ZjRdKi6mGK2kwGGrWdZY1pZVjJP7vKS6qc66",
  "key7": "vqD7T9GNQysYAmAHF3VbZB4Za5Y67VZE7Xg9BXdeZNmFLPw8jWqeu87HH4KyudtZK6Wcjajrqb22Xa9unpnd7M7",
  "key8": "5d6akcpHVHYuwKim1iwKssiAg48HqKyKYbdHo3qFbqmJiJhCTxhmTrFAUAv3Yii5JtmQcf47PKJe3tbjgsnU7sUx",
  "key9": "5Lew9qdSLY6f2YnRv1WL7vEJaU6esPoaFWKa5pgN77YHVwmAN4U9xHxzyFxzWATXa1sWHVivxePBEqpJb228zXqT",
  "key10": "3YyLMfG8yagdAsE7m1AhAA47JDcmeX1LWRzcJCrEg8hcoHQozQhjSSZSQSEJ8o2VWyPRnFCCgTzywHZHrvpJuH3r",
  "key11": "22EjGVFtry8Qh5vUC9WFseW1KkEgmbiguUEfpCU9pQrKTrgRZCW3pjExbjinsYysrJtWfUhvYtkVCbfbjcJhgje8",
  "key12": "63gvkVhy7vRqe2HUjx1tjxEEMcnFS2HFnqv5ENbPA3bRHuoiD7s24w1DPavTxvEcMAGhSP3DvirhCwCDeZrADc9Z",
  "key13": "5Wa7T5nXZyCjPN2fH2wM3Jsa98wWofHTCufyKUmyLJDt4cGWqswpata5q8FKPN2hVEuPSGJQL12vHRf2fby1mbYR",
  "key14": "QxZUky6me5tqpmveCtSDtTzYtnGqVagMbM8yqHjY1UjU5oER2zMXp9EuAtKNQohMNuLtKXYZXuGz3e3Tsg6ZDCN",
  "key15": "HrSc7cxbSC6U36CMLmXy9mwQUSwjuofgikVeBftF3VaapaMpi5TsZngsaRnm5jg8wJvdwzFzznsv1b6yCLszLgb",
  "key16": "3KL4F9tCuhvM9oBuqmEwwj68TY8TXrgRQeXUKbiCuFtSquKFzgTpHWhq5vBFEW3QZAXad2Qc86w6LAkoTBUULAes",
  "key17": "5QBrjqYhjMkQ3dwmwvFRv4HM8VyMJAV7DgEd5q84u1A6w5pYX3RgnT7ZQ6LUcGcYtwhAFfYSiPkUisuLwoiTC8kD",
  "key18": "2VG4vhPhvN5vVN2XzvrUcZhumnGaQJ2hSTJiPJ4cehZ3VW9pEMWV7icw8QKSnGrrKjagPgXKEd9V2N4VNYWLXufb",
  "key19": "5jyt8iGfdfMbUpTCPZiiYAW742AwqG3U79LCqH8NgLJ69bSXSG6Gj51eFq7bTDke7SGfUTthnNTAfN2MvfuJpF6w",
  "key20": "471mKzg4CmzcyxCFWqZUYzbubK6TFb7RWyTTiHws8RpCbnQf79Z98BqAzz8tjZp28kTM37u8ueryaSoMqQYRxxvi",
  "key21": "4vmC8JXeChFb79UfHmukRJ4mg1ACU9UAuzFCMCQpRMeUw53ytF5PbPbTtD2S6eJoyNLADURcRP5HWDzk2jHp6xoV",
  "key22": "279Ktkdt4YNjbo4zktmMKw4wXZWJd7o2oGAXpWdzcmHTmehw8GTakaQ73CD2n44PNYUPKHJuw169jjSgFaGbmAGV",
  "key23": "31D5UECy13u5FxnUoNJtzQW38co3fiBKMLxuhf7KDQCa2Q2WGu2XkAFzAJ2Q63CjDSUgtzvzYDTbJ5D1cH8bfFq8",
  "key24": "5nNMKbxQzec6EGjGDnUrDKwiMLmkxjhe6naQPEz5gEjBACtbT6xwy1e6BSaeu6CHceurDZMhjUR9jVqkAP3ydQ9o",
  "key25": "2eTmzoR7tNVHh13FAoGGt4oHw2odDvyEMfmTFYpNsSnDRUVToizsGSTY6oySK3xn4sWRX6z3HD8V8paSqEVgTcAH",
  "key26": "4X5P5KbUntmrXMjkQCEJ2iSxhkwtw7sJNR5BEd8Z2UGEzP5UMhWrsREsHRG2PJRGrdPEKYJCB4ovnG4W2Td97hdo",
  "key27": "2XvYechf4y6EPnbKqqkCtVbojaL7YPKj8p5qbcLwnwWZRbFvBEManmPeRV97VKG4yKNzKE3Na8NN7LAonGPFVEXx",
  "key28": "4fAkcsgTRw3tk8LCHjTmaJKVkoUMXUVg1KtbErUtL7yWwJC1RsYgRNDjqXYFwGmeB4BPT8mYq4PkEdNCAvopZVut",
  "key29": "2RxndYvBAvXdfZt5pRX45DWKWj7wsZ2sY6yJwpzr7kRsfDqaNARB4zBd7X1LqkShGgw7drD37dredLAERJdR2N8d",
  "key30": "55dAExM4MbhRnggxXJrppP51hSLPyadyEf7Bq3P2nBtV3V1dsviFS3XiG2HdDMrvow67Vky3GoDk6gKKg9iYeSQQ",
  "key31": "3ZYU4wZSuHYt9YbGRTXPkuocdJwQ4BtdCBPy4RkM7BVhjxH68Fb6ExzP8V9XK18aTd72QoXCk5D1QfpqpHGyhGDD",
  "key32": "2V5y4njXe7oJii1h8CbxpjgE7ZmtAaXbJDmrzYWCd5xebxh8AVBW57JXsjvnn7bPpxgEP9VBfD9BqHTmNcTptLBi",
  "key33": "3iBuMfp7Ci48k7LdcggVoDn3yCjbzBVHmPxAkoUEBQqfDNydiBtGERQpVt3AUN2c8oCu2Eu656sMwYvqnNzm222w",
  "key34": "4vKbQ9DMNCttkiqZkdYf9WU2EWAwCS8RA26XnZ2dmdmHBAJ5BAAWPbiYFCYBbCpTLDY6XMj7ZppGrgBTgav61KtZ",
  "key35": "5WycaPgLcmRzifg2XYvFP6PYxaNytgPJfh8UPLpRTRKaqqWk2bJFSpKDM733m2EzqYK8QhmujsZQ2GVFZipeV2MU",
  "key36": "3ZkVfz6GkKEocjxvVGpYTJ5zDCfnKKskvMbyQTcxLr4947p6grfruFf5EpnVkTWk9xdbjarefZfgB71qJEaaJd7z",
  "key37": "5tWuuxQcDorzBg4fN4cskCVbkHvSuvp8jPHLBpsLNEAjjTvRHBvhRk3ogzD9e5vMN62c4e83wGBth8rTHn8SCgUP",
  "key38": "4sUyivZhw8z93JnaEeLvTStY2NM8CHNoxaUVXnfT8V486EnbNKFvpiTWCfrYm3VWbq8teaKVbDpjs6LbbWViwJSV",
  "key39": "43PjpYRrdwoD7hA5SPoaPzVVntXuUWzkbFAHQPMcP684rLKT5QWjEM8dAu8NsPQ7vafbqBN4nFDbsZv5T1WFbCG7",
  "key40": "AoAX5ARvduW9AJz1e6QdAygp8yvh6M75LmmuuNTL4s9bRse5YTRjQzciQQizUYapCbdtPdkpm8nbYotU9dbzjTb",
  "key41": "5W3SQ23dy85q23LbsRPYKPcA6isSbZVHDf1ZpwZEmKyTXJJiZ1kAuf7myxAmEmoVVgzTTMbqw3D9iQvWb5o8mmRr",
  "key42": "2i8EBLEVbr3jCEXSRQ8tAbxo8ecfbABXHEDVJ4kX8h3Bk5Vv2YT2nVSAUMkfLFgGFWJ5JQPufKCQRTDCJ7PFLNpQ"
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
