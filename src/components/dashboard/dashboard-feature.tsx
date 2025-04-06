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
    "4MRSadxdmZEDCB2XyxEmtRHfycyu96s2uHmfVBB2zLMxBVkspRVnb5i7ukcavEuTDZwR1wDem6YvBrKxM8YvLu4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EwyNSq2Cc69HvkXBYdUQR5GLLdDZuJ1CjB3McL7khJHJY6C8mtHXiiHcQGeqVSHZGEUTi6VJAyzViGSnxJ911mn",
  "key1": "4J5DzgRcMtpb4tS6ijbYKi4cyNUv6N9y6q3mJwmaVkd5XWSDFeopfkVNkW8BZ2ZfVJrSgq1z4KHscvMNNSp2XfFT",
  "key2": "TuwPruGDPTzTZDi9rEnHjKSEF3ZqcrdrVDQD1ncXsFQZiakuspkeewsbRJ8HRubcguiD92RNNizsZv3Di8jvgGx",
  "key3": "3cebPpaKGemgyYm2U81vkBYts4muhEQfZZu2JUJhmobQHKLFbtPKNnyg8QoXRCUFWp6gqHBnsvBdNVyvWXDDFVC4",
  "key4": "3Hw4u1jvcxHg9ZMiGhqcyfkhhQDRPuvCbAZFQ7fSgvNXaKHqm4MHedo2eGcg3rutCsSTv3kwd2Epn5XPNL27LFHv",
  "key5": "4z9XV3xSGoN2ycAC3RQJPZpT1Wuey9oQS5FvHocrGnMHFPozw1kZzcZZTdQzq2982ahdCqisMFzpqYkRCcLmv52N",
  "key6": "5qukWMh82pPciBuQxniXZiCyYpUAjKfc4qdPQ6DVnbKRcyozjS74iphjBoe1SaYa3FdPfhghsNTecB1JHbY5AXRv",
  "key7": "2dSBtDM7brtcameAdSXjPN3dJ2AVkgZf2WMLsGiSt7bo9nV87nA7F4FM4DNNrZHinpkctRnr31WLSehHkYfJ76mn",
  "key8": "25x5MZqVybgenhLG3jc5MzYbZ9AehzaUYu8gR8mJxHk7Rxs6nhHDLwXvQqfchQQcuADyh569XiecjzQDTsxDQsDn",
  "key9": "5DuYrwrJTkHamPtr9dkSg35tDe3Zoi5ASia7ZXFy8Vuv5sdeUti6KsSAqX2veJcDF98F8fTFbmihUukTVd4o9W6T",
  "key10": "2eLF77L8m9s3hA1vQKGBGHLV5umkKxZcPKRHEEJoAmYDmTZApg3vAaFhfpijz9W9eRGsMq2m8JzLac3ku6o2zDgC",
  "key11": "5RASSJ1sXP9vqFVWPSpM4Ei6hJTphgzuPb6Uh3ESzK7MEhWrRoi1LzhubE3mzQ9KFiwLBwUEyJdiz5Q4rQ9Q1VU5",
  "key12": "SEkYQGJhW1cuue6DdZHPbtgVCZAzG8SKhNwicooR6PkuN5c4eKGeqPbsykwKayso64uS4p54EYYXA2jVZWgUHpn",
  "key13": "4mDoMbxX82CbfgFE1ZSCFt5YeaJYjMEgUuLJDe9AQN3rHPhswJN5eZ2DdFJjURR8wH1nWAVJjtPmmo3zTxMi4yEA",
  "key14": "37ULGHjyv8YSPE5J5kUw4Zf912U5fU8ykCcvqfZw8fRLZ4XTYi14BT9y54GEWCD3zFDCjEGkGeZ14QKs1HRrn1nB",
  "key15": "4SMyyu6XkmgGqwnTqQmbBEibqDpMAtVthhNrZXvseNP9BNHnJHna9RLvWiZdoSxWW2bCvnu58mJrWjvjestaifRG",
  "key16": "2rEbRDEoHC1pxHsuEurmsSqAVtTJhmKHw8bnQsYSXs7Mkd6WGfyN96TA475dVQmCRqtuc5szPN3zPKDYjCWpu2ci",
  "key17": "2tju2AV6BPmabmtyRY4EF89kcSZd7DmLwd2qcTnjoBSBx8QTMspjXh4FfpQnyAtn4h53ntHW2fYjnKkQ8Pr3abYe",
  "key18": "5Zxw2AvkqDq3JWEu1jsKVJysKmGEjYSTUv9qGEprdoDWkc6vdKFXACHLX4uAMHUYbxXDAVVywLAfoXUtL5S3euPb",
  "key19": "myJ6TSo2Pg6QS8JeYhPoMmmgdkeqF3nxv9KUe6Zi9XZjwNTs1h2upmhcE2HAx3GkgiX9hrG61WuVB1uEaCnJFNc",
  "key20": "Z5XMRGAGtxVuAZDH2koNNgPrPpQk2jd8ko3AbZqX8DhywbVtPARub3Pit13ZXGiNiRgpLLkRYgRCw1kyWPBLnKR",
  "key21": "26a5AgwenpeL12XNRVzAqFjG1dWV6FzJeRTizUL1mHD2iHHB7yVGVTGm5uSfmXvv1tMVtUW5nGA2T8RWXHZv3ZDQ",
  "key22": "842UkQXELGPjthmJ5c6JMXr2Jy3Bji69QsT8p7WaU1hKPphvh5EqqnfrSD8UUYvhb4ceKzYxyzDUYABQPqGXFVY",
  "key23": "2mPgMUAFr7QWWSULM5BEFUSPDQyWEvw61urABg9zo76KR1exgRN8UwdZHmo2xTJNvRmSYa8MG6uatwdWiSD61Ydu",
  "key24": "3sewtFDKSRhk1GzhLwGpaj87fJ2etwPXbZKMbSLagu7Sn9PXoWbWKMaC2J9QoHZN13FBLcSNcz2xjZjv4sQMVuCd",
  "key25": "3cqsU3X3ewtsqfTRqLcpP5HAihUKgMEzuJ6dxssund2aSMRwPfp3jcs9fHAcPz8t45kJT15ey5GbfZpp459ZsCHC",
  "key26": "oDZKJcisirCS78fhVqYiLRWcwRco5BzLQ46xfFbFeMiDHpBD5VJtdHJVb36SMxAcB3kmbi5a2mfbYpuxr2Xmshb",
  "key27": "36J1ZDRmwQra7Xog7ZjFBRjpQs1tZA82nzhLdDe5i2pn1kHRNPhsnNComQboL8b2DhbWX6giQFbTpkjY4A4Ks7Va",
  "key28": "3mLgWU5SNTLmqZFTrsGwx58pwi1g1NAD5jf7Gbwv3WuGeTY9qMmRrb7VXpt1K843suMCgZ9v1BZzyjJZZZGpQAHd",
  "key29": "3k3S3ESWWAJJv8EZgutyRsaxSP8jszBJX4q2CabsBaudzocbtpoMD6Q4QaFKqYfa4TzekMKrUjvnaHyqy5ioRgH3",
  "key30": "3kcioybhsn3qUjwoYfPxNJQEosaG4mb52pFh8V1CHhpZogry5wC5LgFQFciPmJeqbivsEv1GNqdAvMo8rMRkDZhN",
  "key31": "5NeQtiybyscVJ8pELTdk8TftetgfubvFqiwmCF4QR5xkExQ25DzK9EXst5vv7S8ga49uoCQdGtBLqkBRBWKosssK",
  "key32": "FQ1YbLq1vv817cEJA9xG4LHyntYzHE3suVZPCWMk9L3pn96ZTMS2hAPMY3qLZxXy6YFwVpdtjw9Yarj7MvGr6kX",
  "key33": "b1M8RXKZPc9CDudg1jWvatWhi2aLTopHy1RAZD3iUcugcZThG1hDweJqa93ZptTwkn6ZZYi7jJxF8ahJg3hmZud",
  "key34": "4Tn68BmVoFUzh7u9VZSevHD5WAUirRGRcyf9KPYN11oS7vYbjR7ST4aRxY93kXvdkigktsfE3aizA7CtJtcrkChh",
  "key35": "gwj6UkrVdhwph9DBHdVEYGPHSqj7PDcQHJenTDH7v3ipZunXKbJmteGASTH9BVSQ6p8QUfA3f7FaDk1GdYa1qrB",
  "key36": "9cwAnZL8fF7wUb7rt8kSeUSPEQNUaHj3nEKi2pr4rMARVZjpDCXg5KD7fRzyjMZQncMoLKVovwVNVLWsKF5fCN3",
  "key37": "45QnBkVvEbVL58ULANuKyBS8ZDpRrSWNiFjfkYNurtugGddMhD2SdzdpsA2E4a31FiYHDa7vYDyVkhPUUxAEmp6z",
  "key38": "25Mkmp9gcXd4q2B4WBdRyVaAHGVoxJsMTLCwdDzx6VTKWbpiZrqU7CnbBSYK4sKsyZzYjJqMtbQ3hpJh5N6LZvsy",
  "key39": "3DTxfYeeQUFdF26SHBViUAu3yVUfcmp57eUxJYwUyHjYi3ut7mmUQNYvduFBQEbniSp86GcbLiYxnRtkcHxMKbZj",
  "key40": "bbxUyicMDDfW2fP4DPRhiRKozvJHQz9dm4BfRkk3kA52YoJXRE5PqmTexFsbPYcd2PUVn2JFnxn2dKhak6wNeNK",
  "key41": "mFNGeBcs4NL9ibV5CbbYi3jdke6MJN2qpDC1yTpViHKenKNTtqK9u9W76dbWzQYTdPjg8AvEgCeRzMKnyAJ3RJ3",
  "key42": "5RMjga62Yv4p2hmQW2WZyvHNmvabienecv9qk4xrX2RcUbyD6ga2XCZ7uNsD91u2je9mwGKPd4G28x5pJDGazSVm",
  "key43": "4tF3XZWhFqWpNrHuzMEt3X2dDjpxhkjg3eKLMjY7BekGtEc93raByQJv7ntGfaskUmZhftHYC1CB3KXU4r56RtwU",
  "key44": "47DH1EGJWuhr4Wu5hr1k3dxPtdoXQgAXYmf59zvcyDxDV1j7NYSAwfPNaP5MkkQsGpkfxCRxZLCCH7XKEwJh5JRx",
  "key45": "42ABK1jU64vU3SLmFdNaTwoHKzURiosTWKh7Z37HZfNLHtY49efNsmHABp8UsBewC1ufGVyemKJx74WpZWfJ7gT6",
  "key46": "5RnjzRtYKghL1xzGcgg5T5iYT5qf8q8mW4khjJiLUCNg1ispqiJFbGi11ouDXBKQAUZ8NyNsUtabCXpr2fgzmGtJ",
  "key47": "5RjjKxbtpci11q6BpFyueevScwmbKfznvx3hf2PUopyhQqxFfDjywtGcsMdBT33TN1u1UPpywqxVNZSjHeu7FHLM",
  "key48": "589REv8yYkLrmJhsxbGSRsXsAnxsjRwEVnTPQjCxA3EUX5Tb9MKG8ZMwc1z9SqaE28uKTfSEmte84ayuRhSHx38",
  "key49": "3ATLNhF6hVEKxKSZrUAf42QAffvnEmth7ACNtcoa4p9hgrkQHhhktQ3p5XB9fjhFPgHKNTVxGySAaDbowTqimXP9"
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
