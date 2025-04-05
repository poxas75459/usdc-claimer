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
    "VzjCrrp64QvmrzN3tY8SAdd84kGp9nhxntYdu8eQv9xBKFiXa77cpDd94FBcuZksdzPWaSmuoeyrgDbx2DobqKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i6E8RNJGmPJEYp435DR5JUr84eXELKYvHExyWpzBNZ2rsrtSBw7rVWFNMCWthm93XM9YFktRubb8eZ4iRKmrHnp",
  "key1": "4381ib9ezimxr4K3itUXXfM7UFmyAYYG1mbzWztzazmKuTEabNpeJNFosbQDFmRuRWq4DLYJ6MM5fTAqYMxuXdA5",
  "key2": "5WtNbYzsRQAK7LJiRt1PWfBqfzL6jLWQJCp9EuoryMwFYHpZu2r9gJcFkYbTvAioprLYpoPvvpc7bTrn8zxyC3Px",
  "key3": "4XsExPi3n8i15fahWpYTLa8JhVK3HGdA6bXjP1NfmedibdCj2ozc6KAZPT3axwjS6kQx3VEagbJrk7jkBw2JKVDR",
  "key4": "43myn38UcvRKt2HSiFXJ7Zg7RE57XtQvRkuK1Rn3gpnCpSoVSj11FAyW5a2C1PpUht3LXA2Dc7hY3HzPmV3zpPQk",
  "key5": "5LfwGCXFY1EJSEqmxUqjizPcafjV5JAgRC5Nr7YGAezPhvt57XLonzZFyL4e1G8XqwcesWyUYcpe2XuebrUiKVKQ",
  "key6": "2ctpY9Fxwjb7qb8Yz4uH1tHApen2n59SKcLPVecLPqUyFzyKzE42h3e8bjVLvTQJscWHM8w53MJXwJSNb6MNQsLL",
  "key7": "fGapH8rBAiw1WMAG6pcVPzfHHXQoKiHtvPfS2FaWwnrPrJJb1ceSyEyHnHoXFz8MdfaADZjB6Kj7r8RmLmGt5fm",
  "key8": "3vo1ZRsTWr31fS3oPGoUpCN98YLUJHeuribaiBt2Trf2LoHpiWRX7Tev7L8QeGzmvqp2rfhndtUX6iXVLynv5krV",
  "key9": "3zk6RToqVpsGzs11DvXgyppZLfMg8VahXrCvzhe7EFLkYbEK6DtwMqwTVqoMRv9oDVbCtVPZJyXvWLH2d9w86Rz9",
  "key10": "tP2hhpj613zFVhJtG2GWvgQopJx5LXRZqdkinMFg38ZtkxoxQSviYi5UCuexALMNAdqZ2DHbemMjMzRfAQVF7RD",
  "key11": "33hG8x4ZEPkUUsiw1omX4Rf16Zjthqv1Virfv9mGgfsfpGnRaypzAdWCjtFd8hefUg9AVMvwtnWi8bsZCs6bs4xf",
  "key12": "2uemPWNTazRwQUBZqSH3W4JcTJHp6VmaxHK8BtxmEqgGAqB7EFL3FoCmZDyUvDqoUeZfBFrvMXR9Ais1te8CXVSA",
  "key13": "V2yZWmTEpK9o3zf51NrGCB25M2XGNaX4aDL62FoXxwzRhhBLbncADdUf8JTwHruYzefH6L1HmoK65xRKhvss1RD",
  "key14": "5SvbeGiaM93HJ99s2TiiTzviyjEaPHAqC3eZRVTZxXhnpqPocKc6bwFkkv4gPXAXX9w52YUA7UtcJ4Sxr4ajFVZu",
  "key15": "3Spy5egrDdugx7KDv7auFdL6GejyYDpYutPqdhmKgbAhqw3oDxNvuZxYiYznJ2cqtnqpXMWmVST6cHLUhrE1e3hu",
  "key16": "5ucb9sdMpEuyPU1s5c7bqE9ZnA1EPupGr6NaCATMFQSaCe7F1bvEoJ7CjxzPCnHX9MpxjFrTGDJMio8t7JMHmbWW",
  "key17": "2hVTkVoo9S56UerP4fXyhsKpVv5AqqQeZoQi4fvoeYNBDJY7moM9VyiC4KY9hSWMiLo9kmHSEeg5HnacLpx9vvKg",
  "key18": "54kPaM2aCr1AbzR4yR5bymNrSLwzLXVBN2NvPkdZKtscbNUGSvbQaE3r7BQqU2wkaRV1EbNJj5gpLQQKTV5MqPyx",
  "key19": "3QXnGubNVejfi9ZUiVcTU9TEzc8SgQHDt5kn2BND4y66qy2YpWdS81MLGDafuwP5p6rjgy4bivuCC6YbAfLdgXQX",
  "key20": "23PP7qHVhi3uGvBFPCAB6DmpcdrDKY9C6LAZ7Mw85wZJxPacKUQrMPwt13gJ5pz2KWoyGRcX7aM3qeutZpaTnnUy",
  "key21": "66x5gNRnibGUFzDMaiiQtLEDc7wGeSQhFLG8eq5gaW1gs8duhZGTnSmDJpEBte876hC3nLKtCXNdJZXZNLg5MY1q",
  "key22": "3yPL6XzQPRVroxgKMbTriaLQoQaGCYm1cZRaBv6qdqwUZkf29ym4k3aWmoeUrAVDNkGLFc4tD4LxwUGRekXewRBF",
  "key23": "5pFtkhezKSSWqwxwMaDm6jUCdFJFHM7nvKmehffYsyBsVsJjgfSZACvNuyK5ii7vnVEDJzQey8egg956fXXXEdcG",
  "key24": "4iHnjBM63hacnse16hLXyt6RHWZrDvRchNWUZHyZwXtkCWmFVMjUYKnVCvsf27Ts6HNZv3WXHNdQ4vfrU2FQvbVS",
  "key25": "1hsTLrQhXoYREdZcTZbXHAcid4yBR7LCX2Wf1GjCcQDUbZ39hJYATzT2abFS4gR4CkBHjAXMLAe21o6R725vrPY",
  "key26": "KMGJ1iyVEvP9oYUu7qEMnWiw99RyMx7s6YEZXQk9H3SGyy1GN1X8iabSRHRTy4iLXojY2PU71GkafbFUHC2MRvz",
  "key27": "tBp7mYjuvmMc4ihAcninn6mwBy73XmaAhS2VXrASMp5npifHk2dN53ETdDzU3tyXaFxFMaAxVXFauztRJ1ne5FJ",
  "key28": "4qARXEPY94ZQyRN8AZ3PmgXoDEaGvTUUXn86DBCNFJBz8iRtZAbfKVzoHKKErejm4EVdTovqqaUjXa6S2SA6Fem5",
  "key29": "63poKR79QVMv3KahbGLkFGENAHRAph9Ec4Aj3s3eycpW4YT81jzCcwyxqBwGMwXixrFJ19hXJqW4W7H7Azt6Pye5",
  "key30": "3kaeTvQUtYUgbsETJz92kYQ7MFJ8LXyD8CKpW1nxD9hA94QF53G4QQMpNdXhG1J9FMMT3xwJzj5jnKuhmXu3btoA",
  "key31": "3UqJdLACMqpzngx9Q2hNEX81PJ8Jf39KMvsPen61upSo6sDWdzrFZ8QYS5zLNwW4fg61Sim2nd6SLtoj7V5DuxqQ",
  "key32": "5e9pjxFuYWCKKy6FptxHnsiwoYaNm8uqU5VYFSKnaiBsMDfSqRarF6t8R9uuEUo3RDavbWsZNpdAiSWRxqko1jEL",
  "key33": "3exbjtExbFmgKndRxZDHmMTEKHFMACqbKeJmYEdtVEE4vXJVjDnjtJnWeNQbMJDsfUjhmq4sVaocu62zM6gJGdED",
  "key34": "2TBn2iByQz7wPctpQaY1DYpvMZrfcptbeT7KmXmHtJuwU1J9dbMVrFBssSXbTpe1pv7kdDzLeGXnhjYvS3Cfrx9M",
  "key35": "5NponcNA8Wai9BftRWVEiFSypf6tNuU1YEtrD52Y23JPY55PDqePfZ9hpRCAVQwWoRRw4Yon6GTpoNh6kbJ5moGv",
  "key36": "3SrCS9nrfNDtw4E5eLACUBH7Hprws2E1jDCtVtdKBLvUBVBs2wbmnPZPMMEMWgADgEd66dZJKfVD5SaUF5j19GAc",
  "key37": "4jqXJVdf9hX8DhoHdqz35jYicBj4cLUgeNV8rJUWtrpT1NXLmc3TJ6YhPeSQhbYxjru73TX6XSkcscMeWriDmNhD",
  "key38": "4dqBWjnHwgck9xmaEdsfX4yVqBsMkG8G7YbVFvtfKBd4Fxzjr5scqQ9jukgiU6SZUHtUoL4Nc7iG3Tn27YMyirJT",
  "key39": "4Vy5QRT9dmyd6ApECbGn8LozaGKCu1mQJjTsHRgCUapLVHb1Bm5iAudLg4eJETtTAViPP5g6UFCkvHzGfvRtoG97",
  "key40": "3BQ9uhkJMP7HrD8jumwkxRKyxHKS14nDRtHzdea8mNX6f8G7LKo8T7U92CFjwBxdUe5bwQdyua5uMgJ75kJRFWtZ",
  "key41": "4PacezDVGN9BrtqNeaBLsJ4inbHVCuoAxzv8vnwsgP5LcS674gQfaG5zvEq782k8xX5xbTaMNzJkM5suvycCXF5u",
  "key42": "2KnBYWR6iYbAa7fihd7Wb9p91Wr9LdL1tguuo9ZQJS2ekNMEpyr9hsPZaMsheSMBagFvTgC2FDycvYKfs5ktHjD3",
  "key43": "y12LqMiC7DJmKhd4mJC8XPRi5ZEHoLkvhmANRECoFUip5cHx1VNKBiA5sgdpjyvb2Y9cas7Ca5roquk8Ro63TD4",
  "key44": "4V6AYdtLbZf1D3EqDyNojze8t7ntSia9BeWz9ahE9MJkAaVgyT9ZGpVqRgFoD3fQae8NYsNsuTWVKATQSdLKengS",
  "key45": "2q5ZLZrwBGdLxXBZcoygMkQXssQkXwdP1hbSouvabgWbHKqpv74UDSJXuV23pFC8B24UzSgCgmcC1iQxKh6wRe6R",
  "key46": "23vJVxjM1Zbg62Emo4c7E3rmJ7zfS4A7YyhFgbD6DyzcaE84W4dB4AgVRCJ8C5Nu6XHX3RoeXez24cRWX6o1jtkb",
  "key47": "2RtwhpkCGzfAnFvSubrQAGUhYyniyNZTuiN6B263t8daMJs2SfdrM3aJGTiE17ySQhmb8YMt4Wy5GnuiTMMgAQw",
  "key48": "H4xt5xHhzR2qGWiN7qBGSwNRKMD42CDyfrTFjBsKsZWdAdijjHhTAoEbZFkRVz1M8YmE9TZNM9Cra9KomrQ3sVj"
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
