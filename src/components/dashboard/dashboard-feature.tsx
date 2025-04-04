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
    "5Ryga6pF9ge3Kcf1o5jcSKVYo97MRCAEyP5qQwz5gJVaTWB4X1i9MHSuCsNEzGCKCw5qXzAQsf1obE8t2ADMo7dJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XfUkeHK1mZdJUwDFLP3cK5zBXjD5WiGxBVQWjr3x1LiTNbviYSe51BXNJUZChbtdU7Bgid3ncWi5DGBjWzc6JFs",
  "key1": "5X1fgAV7UJs5TzKuh3Zv3ZwPFuPxnXZKQ5i7m8sqfiPMpiwheRuzK9kUEDVXRkGq4JbH32RZriBCC7EHAm5v88eV",
  "key2": "4XFwv2XvdTnKvFEGyZPP1te3yLJecWqLPk2dyRsABaxNdFVGU9FNogMM3g8SM6EMuVT7wEq2QEZtj4BjonFS6iST",
  "key3": "3d2amhZ6ttCHTHeQSTeNmcsnj8BELcBUXXZ2E3MsrqVfUinYVB8Pviv46F1G6yP87LvzKMRzipekoUK1WDbWSNME",
  "key4": "4etCcEdG98A27Jw7uqY4a3jxhDnKfbPsaHFdDp9aEeWpmrBvcx8Kj7gPt2K7fhqoV5KggpNx8Twa6fx3Y65hnB5X",
  "key5": "343nKY4zBCeQWbznTLdzniuEpGSC1KTGrCwxBQuftgENdjyPtP1RUwTLv1d97wFn4QbDhzgrnP3QCU57gnD5RoAS",
  "key6": "2w1e1QkW1qqTbCwVXaG5dHQjhUi3z4e7xhLSpUh9ffvEefmYH6wMcGJ1mr4A9NbeEBySQZ7peEUvBNo6wsCWwHay",
  "key7": "3Tqe4Nvoo5mKMAD4oZALrgGmb3wRzqSW38d683XSrekhVGwNHyRWkgTFbSxUv1o8nznBDGTHBhVEcZdXcstKTNoP",
  "key8": "3GnQth6K6z9tKzSb2fhmcffo4WHHX6ddVGRszcT2tPQBbJPMp3j9r6EKL6vaDmW3vknNA2qcGqZ9DTfRadoBvHj4",
  "key9": "52eBoEBk3wSuikTsiKnRaEwLoGXv4MnoDQkwRVvT42sfo5tK3nAiD2fSzrDotDeexpbhfKj4iKwCpQam7Uti6f33",
  "key10": "5Q34s3KhE8rjoJ9HYRzDnqn5wZgVoaxFFbq9jcvdupR6soG8RZrnngwAuMkve9Bfyz85y1UbipYqrRD1uU6UN3J4",
  "key11": "28HEPrbHj9gtDiDESkvzH8qr6hYm8AeqKuPsw1igihnDRWHUueTkBc1oshijq5RX5o1WPds71AyV6dEMzJgAedz8",
  "key12": "37G9RQJhi7JGy7oHcvSYzNpXUnDRqUjSiBKNYjpy4qB41HBDbhXVuQo4gFmmH1FngmPF71mr5NmPzaTPUqyrVkkK",
  "key13": "397VLdn1ZEivGJFDUTPuc3UsAaX9nmRTJbGvZRF3svPULGU6Q1JefVrneJE875Zjd2i4rj3yfMWXY5URExemrpSS",
  "key14": "3PZQWQ5bBkySiKgZ9dzrarhk5Mr6EEfsYgVjRQhAqaGjfw5peZBwih6FS2wwhGXFvuyGqAXapS9wHZp2gTNWrHk4",
  "key15": "yPLjtLzuERWTTPuahbonDyyU7aAQzfPUgBRgrPZdvn4x3DiesUeTLgEt5P85JqPXZ3ML8N2cCcEs3cBfg3Rmb74",
  "key16": "Dq1W7Bjot1H7TBysYEV2rhN6BkKnWUesT7MCwb28N3GDFahRaUYzC9Bk7s5Binrz6NZok1oBtLDvVjvePvHtZon",
  "key17": "YcA65hZmxMv1mJz8U6vrxRtP4MRHZhRFU68xxLjsNod2f9Q2uBuuQ1xJuDqZzWfuMT2W4b7oPfokiC565f6HCEr",
  "key18": "GrHdZPVYRnaLyddSPwxNihGqcvkeSMXVawNbQE8rP2nAMuVSsyvjn5eCSD6mn767tpG68LUeBUBFVseAx8pYgEr",
  "key19": "64wRMVGDQHkojAojL72kGKz4J8Ac4K7hZte7ZLY7HGnxL2TMPT4ru4Dv2Vh7VGFypWt2HPmVHxShFzkYNmKrzmqu",
  "key20": "5Sr5qT5VWLrs2nBCm32pL848Ex5ayZB4ssrmw8hcjWRuYaYjPAnWZHLMtdZn6ddzm2FQJP7qT4afpnE8h5MWEzp4",
  "key21": "645yFSLGaGP2hArH3xWJwtyjwtazzFEY9KVhwHgeRJXs5C3Vn3YcT56nannD7mx3Rb9wFVRL9LuF7MAqLmv29ciC",
  "key22": "4VYsMD7wRNxUHAXWSnFp1HUH2Ei9ovC1xD17bvVGzyKTMfUhkTPgGjqNBq8bpAkzwWhgrbi1F6t2nBn216DmLA7V",
  "key23": "2PGasbLyXR8u8SChi3VspvYoh6UTZkuZz4pwTcfxPGHhm8b65nBTUyxhx1awWshfwVaAcoJt2WGZwpXQ8TfXhKKX",
  "key24": "3PPKy5LcJJBdVgPsWpqe6dQ9SikMzGJJsLTovDrjRpPYoSa76Vyuhip2GusaZ3U76yYSz6Lu2MDE6JkpcUZ5NgcR",
  "key25": "3Wnj5jFxwHjarhCacvpfc8yvb5u8HB3PUf2rydgiePfqNsbu6NLeDK5CfH5UzmcULaejuVEw2iw3yTwZ8yyifNTq",
  "key26": "2kjeE6ntHRqTGMmLzUidtm37c4Bwjf6EgLdXhFfPN8uYQ3RnyXPin75u43XzXfBjgFtx4dcjeokyzD1ZY8ScB6S6",
  "key27": "4p6WGp2FrfvfMaXQfUDvNfg5AMuxB9Zf5pZ19Vn3L8cMs5xyN8XSaSKt1B5SVhq7d3aox6XX41qKutBRkcuCENWm",
  "key28": "5814KTe2ANHXCembyS4HwjxwJwjxuALUB5Q5NmCvTVpXDTrcwxeB33R87M3rnMW3j5iUnMsYnrPhp6oQ2XCaEL9p",
  "key29": "3mYpMv8NiMcey85xqWzsKKYUofhUMHqwKEeUTN9kR1J4mgoKKoxndV91QNKtDeiUzRimtrJDZdieBK4tWqiNEsit",
  "key30": "4g1n72J4Yvgmqcjg4rR7JCiaAnn6uc47pYUFkAm7TfYoq9BKo18FQXAz8SW1XtsEg87kZTqZZvaS4XfMNduz3hqH",
  "key31": "5ZbzpGjdyVHqv8qKhtExHnjGSgnJ1N7YjkuXbXCnoCKA2g2dLEGzkMhHSNRsXFaapZveHj9EfFba1k1e97gHzHfr",
  "key32": "2KVa9WUNfXnujVEdea8WMSmBTFkR577vnjSsP8zN5w2pq5x2vnj1XkDRJGBHAyrgEkSDxvS6gw3HU1YDaHryvE4S",
  "key33": "KNo1X8LgoqV6CUbiBkqfWcUjftRwkTfYLBbsk3xFREuV928TiG2aBDRCUYndDNSfQJULG5xMJMJxYBRa74MXiY2"
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
