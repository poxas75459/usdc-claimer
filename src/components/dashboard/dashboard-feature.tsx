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
    "5XBQXzAcYMKfSSQaSPgxNHRgdx3giVYXA7SEDCYF8ctrebqTNqbcbNnctdwkmMBUSbwMi6FwDfEUU88WaMEMExYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Evy9N7HxmNZHHf586wC5jpgeFqX3Kaf5NgyMXQYpnWcoS1znNBP8hyqhspuvsew5tQTsywNmuN7ctSTHAKE7bF",
  "key1": "3CEkFg6vmkoHBtf75GNydkypbYyWcS5efmx6TNgnEDwcPatmVQ1EumEoGGGY9Am9Jfj17R5iPYpwuZkSCaC693Mo",
  "key2": "5HohukMTQUUn7eCnrf3YBewgkyikF8qT8wovygE9gW66YoQ7EtEyVN57vguXRfwTiBxUiRjqeMLfaDKwBi5CPV5R",
  "key3": "2up8xFDi1y3dVjFRc31MreXp7NxzwWR2VjzuVdD4LH7oP1oVQNoZUoMZ5FzrrcFC9oH6Jxksj1qmUVzPFHWrcuFj",
  "key4": "2utH7eia5tK2nSmKseQGVJWXYBCmwFvaN8AzqkpsScHHgCRoP52NDv5JRSQCAfk7eCN6R59uxvA1H16vrFc5PRgy",
  "key5": "4zd4dWWnjtAuTt6pasHdqwGmZfwNqE5Z9ACkFmsxKQbTWy88geoyVjvK2oQGdtj9VoMHocVemnApSy7suUsetZ8y",
  "key6": "4Z4RNGW58Mq5oqsiVpTAH9Lhi6fJ2YH2QRNFMWKVz5PENhsoFen7b8VwPrKTgHpwxtMMh3mWazHJvPSZN5Gpx2kX",
  "key7": "3k1CTgNtDy4iyFLqqwHzmazXfjQSTcpGDKcpB1DBcr6tijjnvuPhXtoJ5ze68SLgVfaCrepX1FYx4Fi6uT5itnZR",
  "key8": "2iFZXogrWrW6m2xRzspDhop9wvcRxJDtKsZc8Tc2CjmHPaP6kN2RjS9qAywvUvxVjLyZphmKwaAgu9qWdoQkBrkT",
  "key9": "2bC4PcETQhYBmVQSnqoz95qbgv9zugwMspedxr1qb8LR9B2RKETN1Bc4PEksWbyBSPLMoCQQdRPZnnRX1FN7snGs",
  "key10": "ir2b81thLoT1erRKzkCMMm5br9FTLqhYUXTNfjFUZax7UXQ3T13xnEY9SUMMMaaBqba5iVTfobTctqgLJFTuG3M",
  "key11": "2ddCWZqkfM4Xm6Aa8RUg6VEB7uYkqNMMVRfEUn17TNfF979pL51dMqZbzN1XZG33A6bRheHAioC9BrfgUDsLz1pU",
  "key12": "2Tdj6Zk7wtWHUBgFiQLtQdvARjQUcfGcQMoAREC5TxCQzUfNby1x24u3vTgQbdk73sxvqYWLzvnHKjkkHo1d3kRc",
  "key13": "XGftasjLFvQ9rgWJonPViNsCrwGYskPmXiyEDfUmL7YN2GPt9NNJaHT1HJpqhyHxXL7A5o72xUTP41rtFiVtfax",
  "key14": "3Hrw1Zt1Vj5qZKj2tcaXwmAQ5bqCCUhuinmKwhf69PxvNGVkazHSrnDt3ToWZVwgYqe9dtpJpDcJo59EH2ZprLwm",
  "key15": "45JXjHYTDcRNVSuVTbvQ8pP489bhosPPPBW4wYdJ1Tbf3UBSD99DaT8ZjTcQJAbH5Bmu6GynLZQVh8TsVNpiTZoC",
  "key16": "3rkafnQ212VUPr4TXPdigJRLzDRCXBENRQdEi5QgqNDCFMP8H6dwLQ7PRSu55ucongs5bNvw22CfvVf2WVxUXFBk",
  "key17": "2vXhvE7QCW3MAedardWSWwpo957unCMAmD1YDmVuRXoNzCaarWn6a9TheP6hqAWqPeG2cAfWJjpYMA5N4hay5SxU",
  "key18": "3bx4PSHTPt5SnugR7L62trReu3Rwmmy4ifjTz74UBjiQyQHApec3hVfm6DmtR9nzkuB71MikPMfxD7gH2naEpi2c",
  "key19": "61gQfbMxWVTYYi2ZT7wA5N3STyc4Z5KG9rBJvrQwkMccKrZHoczE3HV2MmcnyL3r2VHuvgyPBGScAFLnAQJPbCgV",
  "key20": "GAJBphGJFJBcu1nRg5BbzxWeW35BDGU7c7Q8gaJAGRz9uYxG4cgnzSfi9Qv9DEYCLeqe7s1s4zoZRt4BugKe244",
  "key21": "5iUHCSU4eVuFatUUcc31PFo58xy83dYq6PA9KBV8SkmgrUYYoHJHbx9LhhbnYjNVYDnYA2tDejTFTFtwWgEZCJw7",
  "key22": "3teoCvKmNxTzXZgFxq8xENYo1MSYqB3MTbrFtFVC1fvGG3ioP7ZWLMN3aNXkL5Y22A4B9mmeqk8m4JPFwqxvhAsq",
  "key23": "mJSALCS8CSyrkKi68DhbtbtQGuAMG331vsGFAFSmY6vnQYbbwRCeXW1L2TwodiUKVvmZ2uPqphDUC45aRspjNfz",
  "key24": "89P4B277G4eWa5T7cLWaJb3i9XvmvkKSsvgzb66qUQ3STHU7MxqPrqK8SWk3tq4RsCSP4L2PfNA6R76YL88fXCu",
  "key25": "DgJX3KzDX1fSrwAA9t1M1NPWD6zBeUvyuUsKWQoMcfNeTqMoUEt4dCYEV8BY3F1MpUMPLYdYFtp5gXJmFCVes9B",
  "key26": "4ARETQLAHRynxs3V5p5Mkrqcznsru298AnLKAWqUrbNDQ175EvbEbsP8eK1mPRr2xtiNXpZQcnAuVLF3zTsGUZoq",
  "key27": "3ymWoAr4bNnDbG1q5kPKgBHHvxNMazbpBaUz8zudskX87yetGJGrLfLE32agqCmAbuLRo6GHcnciuQk42dMLGJp6",
  "key28": "5ofdsS56k2V2esNhUTumP8Wf4zdxUS8wcSNAsrMVFG8gkrDBzNs7XTCHS6TBBHPfJHV6gmvNcVLTq194dapE1GTv",
  "key29": "2Pn4u3jLcEb3pXpnTaaPvYQfpm3NamsxLTrS9NcofeuYE2MamimzGwvAnwjaVLapRYmSJEEJMygAvEjnmQVqmbE8",
  "key30": "2op2HoLbcmdcbtQhMK2xSbg9jUY9rPs6A894baPWN4wy46UNwwJ6NHiBrhCJhxo9ezcy843DPca4WxaJinDaAUb3",
  "key31": "5AfLcvdD41icE1Hf5iLkzue7s4c7KDdQM4ygYijHMcrLAfvg4rVhHfBYsuWXDECBGvTQELYKEFdaCMi7X2L2qYar",
  "key32": "nw9iaA2qfKHvKoiEuGqbXiuR5UwGyCN6gHc4LFT3fR7cuw9nHSQbVuMjGdXBzTAAgtrcYoKoWkCEhUtcaN8AcCy",
  "key33": "2VSmmrTjPT1uSWoMVVjHFBcVPabS17Wybr9Mo2obLfFZVWxUjLPyun3zRKG5UxQK8AxmmWv6UVdNgSsZjqNYbc6V",
  "key34": "2n8QhotuU5z6iMSfaTztF5b4RYGbbVvfPcPoJun9jt4tYj6pihDjfDftuqa3vdjTEkbCwL5YNnjEvXofurKAEbVP",
  "key35": "4opM5fRkbdCPrU7AWTvwvbF4QV4KhsRF6t44VT1oFXazmcxh76BYknL7raeaMVga4MkUddmDMe9sSajJuWpRiv7z",
  "key36": "21ec3KVnmrTZMSS2hVvNBraaC7fkDmCFiF9kHR5Dh42nouKtai7qH61VKWRPzvdCqULSiVwAVGokpVxZtNuSZdhZ",
  "key37": "2ZvEsCVo3kjcbtum94ZiPnHxL3hmYTqzemE6SmzK2bactq7vXmUHS9ZTaTLQSNbouPMiRHDnZpQ7TGdY6BQxkFY7",
  "key38": "3phzzPsfZ7BV55WAXhR1LEZtPXvAm7n2mLS2eMUoxDqnkCWMqqtwdjKYpAk5Ffs8tNSXEt2GnJb9oAFDTD4QtDgv",
  "key39": "4KjkAC8J4sHwZKaWLAcWvd6MDc1Ga4fHBY2gD3NxhzqFr2S2jCLjtpcM2o1gnzuVvirxsAJUx2w5yJrhVUhBR9XB",
  "key40": "2PdG3qh36pdJiskSZuErHhAdt7E9tQo5oYHxVvinx8cbtQciKvoHFXGDvKscaPvdJbcRX8zygLkmjeek1V8rZuTA",
  "key41": "3JQMVwDhB7oUEYidF2vkABRWU3hQniBwP3psMgsChpG1hPSJ5GPzHt2CmkvEQX9K5hZbjWn8qaE9qFtEu3d6MGSc",
  "key42": "2hKdRL6nDE6bpEkrPWuLr9gfX62rRe3ZvYQfen9k31YCRB5KjBd28KqVRBb8yNaJhAPNFrjBrEwGyTkX9epqTrjB"
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
