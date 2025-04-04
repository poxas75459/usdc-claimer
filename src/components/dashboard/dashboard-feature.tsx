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
    "3L2TMZ8LCtbWiFKv3AcQ6MVz46nBQcBzVQENfASXz23eR247Wz4FJN9HTpRdBhZUsfBn6Tw1dmC4bjjpe3o2Qt5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "534CpmC9rUEQJUmxKA2tKoKp7KNoZfNq4qHbSWSmKCU2sK9KbBoybjKch7jmaUivVmitfwjEESDMsoedPhoh8z1e",
  "key1": "5C6X4B5vS6P2cSbXBtFZ65oL5PWFKRokeXj14YtseZ14G48StRd6ciZVsHf6DiDv2KnQpZBMfNcdvdWN4ZnSNJfV",
  "key2": "3zsbCzJTjAfTdS9NrSx9RURADPKiFi7cmG2ByLnkFV3E3eG4FNoCdNUNu23kdVRgPMF4dGjApn5SZNPKT8W7i7vJ",
  "key3": "2F9HjkBTn3T59UKC8hSx8VN9C4jmwSMdJPoSmVMBez8WNVedJpLWN5U43FoeYA9LU7LXbV2Pw3C1R73E4ieLSS1B",
  "key4": "4dkNtW7G2rMG8UT94DXsB2HLBA6hkcNQR4H2ERygQcywUsXAF3NGbkVVhPnaHZV5CW22inNuesZb2cw6jqtaFZn5",
  "key5": "5FehhDBBBoh5ppkcacNN3efMYmuVxmj35yJUSU59q8Mdmaw8YsDbsrhww6Fvjnw4rb4TbHYvDfJWeuGaqs29d85L",
  "key6": "J5ZvHAdWnsug87r9svqpThHbWFieJqnLkGsQini838uuDY6UjDUGLXF71tj3nBmxmMMKFHLAYVxT9gjnfxe7eK5",
  "key7": "4hPVSaxMFW3NRYVBMLRqktz1yMYjorAixzwYm9E8ufw1mFnHUQYaDpduzszpw1vPwX9h1t8NS3VDCm7bXXJJpA2n",
  "key8": "3WdNAXY6SdAwC3zLLwLz4pxqGk6R8EZ1erz8JpNjN5C2KpHDna3iXWGT2G8LF4p7fycW9WkNYtJuxeJNA9aMqA1k",
  "key9": "4CM7GgdUaqVNYq4rZxvw9hkDEwzidNVpoeCeAdgfWmfP7zTFWWFeSMK9zLuTrr1KeXG2V5puyuHHB96yRMrWwSaF",
  "key10": "2eZPmF6kWrSE1tCHjoQ71H9kG2wCbLpMtLpeurgtwSUz1ULMT9Ha9cXVNJ8XKgLBuZZpqEE4BvhzmQCEWwuu9Chi",
  "key11": "3gBSmJZoKqpVZ6a4Fu8pFu5oaVj7Rat9o8o2aw1tCf1VTaVwmm6dAzAjGKx4V7txka5Dac4ix2Bpjzp1Nk8PNsCd",
  "key12": "3U49Qrh4SAZ6d1WMrreoUKCc5FD8PQk3dJGaQPC24ANcLwSsEQSM8nqUB6vKVTNh8NrZAWuU4Y1Un6d9XrWhE63b",
  "key13": "2Bts9FdfvjzJwZ7r1PFmug7sEEYzs8vWcYSxhiVrRH8yfgHzvFtNz3Wsdnt27PMy4Ewc2XdR7ehN62TG5ULcVwgp",
  "key14": "CcVPftieeyyN6EMC4ZAj63nQhpy6atT4NK8Ck2SzHAzERV8956XzKoHoGfaAccUE7eytRDpQLWMwudExqBzAVxD",
  "key15": "2sshb7Npf8Jan6NXMdHeYwXYuSduLYzrVwp9nbzL5zthNCvNjHnd56WbkNyCJrE58sYJXZNcTeaKA8ADfxrj9sAt",
  "key16": "4MF9cbJpgbT7AF8AGdo5uXKUKePgRRQ9dfGJNnNX9kf1h19yPYxKjGyLS1DfdyzWE6aBF79guRoujhjaz6MmiyXi",
  "key17": "1p1ofPzhmxj82u7VVhgmcvRHagBUDDZ3r7AaXBgyuHtkPiNHWeQ9PyYa5Fo3Yws5RguF6dpgbSjWZ9AkmgBUrmg",
  "key18": "3CepSFeHfZ9g5jiSmZmCLQo2JXXa5ChdcbgZgMZmNnKzFRtgpohxpV9Y4RDxiDCWDLxLeqFBHJ8nDADL5j1epBth",
  "key19": "5hNBkCRHBtgHug7AKLKemW78x3L7TsdqUfhL5qeGmiwtsNcz9qNFNhWTL3brz5YH9WmNbHEMh6C9enWgQZfhruwm",
  "key20": "2CPcE2awnm4vizChJM2QJET2U6t1aGjNAbG5yPCoZMUCQ49SpjsAxJEskFkP3we7pbQVZv3cv4mVJgtQCwN4XQBH",
  "key21": "3PWVgaj6XKFYcYJMaEpVipXiTtGa2d4QMAiE5nthE2UAbRFiFfMt57DmmENWufT7TkxHnFsaUTXPHt3H8s6yYBxK",
  "key22": "4CVU983oydcp1avh5ypo1ioRvtos7PviXmbbduz4giVAEjWSrQiv53AB14fBUZqH7uSkZL4ny5hnfXxCNz2QXB74",
  "key23": "Br5WVXYiQCd6Xe1hi2Tq2v8YFbqxdexP1AS6pi1dATRD2CAQ8qE2XFgzKwVNpoSuggtacBfDkjYDMEUnTmauisW",
  "key24": "DPXKDBWZuggxYd3ibMrQYpHtv4N1iEvT2yK6abqiBurm6YPZWbvCXKPqBWFbFBnky8tN4HSXQ5z2iVcWcorAJJx",
  "key25": "44WJ7Hs37T2N6NQ2nmF5ZW6Hbp8DPfXkcvjetixuuFyor9vUn4yJk2NcJEmbJjM47NC1MN5Nwu4D1baf9vzFRedj",
  "key26": "3X2NHAJd8ipqsEPmyRJKTmMFynFV6gZnvqxAp2kNYwGrhetoGG8VYVBxtyscapjKSDeviqfG2RMaDCx9vNuQM2tQ",
  "key27": "Z4XS6DGmcXx8CNceG2BsGppeHXgyjPXpVBycMUrYnddqfG7ZXbGRJiToU6a6xqXBKJnT4y6xwgijoaZiZhXmWQH",
  "key28": "3oRzCvBDLerrb8pE5zpBo8f96jxeKA6Zx9tqHZo8jogubJpKTLRUCnwHXpo4XvwxRVyfKXRZrngLLBXVEqiNUduM",
  "key29": "bTC1scmsV1QFpvyZ1cA8H9ZGYYtDr534uHiyGEPh6Y5v6DRxdhYTXE2QTCPuN1NDMgv6tTqpStGX2rV8e8ezWQ6",
  "key30": "2itbox7Ym1FBvzbDBp6TRwh1J7m1PDdqFHxskDuhQ1q327PMdZsxuU5zsHHw8SB32qBwqcQb6yfQxixSuh8BcUNY",
  "key31": "kKDrhnK617mW1xiGb6DN8Dax7ba2S1mXwwEtgxEcahhjnTYsRmVKHgaDRwoQnbFjm7BQkR7KD7TAtojwQphkL4M",
  "key32": "4QYN8MyBE4pfwqeosXXJEWst4WtdAEGdAJSLLSYvwVMRrNEUb3dj1oK7qdfiHLFf785WHy71bQEUMvyY1sGYKwEc",
  "key33": "2hvT4MiN6uaXKFc5MQsNnueZcrSCNL2YTLt32sFTMyCKqev5HPd1se6Bzb83fkXEh9vNSyrv8TUAoQ8V2yu4dNpG",
  "key34": "2kfeY2B3UdpZKC7998de1eQFDVoNDc1vcSqjEdid4x9msjVUFADKDNms7yXQkM2zCH4cqWAuRTYH8Q7YM9S5hc6Z",
  "key35": "X5vGPce6Nxc53mPAPXmbrcSogUN6v2pXfioxfdd1Q4p4yX3TRP2HXtdGWEyu1uaMew3UG8rJb7eYoNbszAwPwbd",
  "key36": "4QH1dTcNDzy5JLrdhcDC6QmKgt4Mj87NjwG8rZdHYupxiFWJhmGTAF42JGKTtg9FSQwFY7aXXtXbmjsAQ5h4aaCj",
  "key37": "5DEUFnYLXUGFQP6dHZTxjc7UdpGnm6aDPisZYfJeto15S5PkMMRTKJHjs92R1Sjc63c49jBXfgvfpGQExN2nfMnV",
  "key38": "BXamRmxP98LvcPvCqrTBRD3n2XcXxN4V2dPmHJ2Swka6BASkVXd32BPbgHEystEzbtR9ud4m6JhNTcY64D7RTgf"
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
