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
    "3zdQXF3nEgpbaabaPg68QCtJPoM49T61krJQG1ZEC7VkP2fFwQMJSmrSZrGSi2ZtnZvCcR11qBsdEwaSZ9a2FY9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66AJ3Yn7inbFAWgxUScGYgb1ZBEQV7uD5cYSskSznisRyUKbaVyG6UGJwUUBQHrJVT3exexxhS6YeD1MtTspuRo8",
  "key1": "2rLgZz4oYByirGBpqepcBBvomhyi87fe6rvDZh73oxUE6w3pBrmmwrY1fUWfeTX8BGEuF98Myp5pLQ4GinD9Cm1B",
  "key2": "4narXJ19RsM7jxRtBgWhnA9MZyH8DzXnwXvAFVGPKhWWkJiCQcrNLfhmc94Kj4XJduThZMXEBVybEDyZHptU6pSJ",
  "key3": "SzLmDumwXwnxEcy8p3m3MLMLcvPoMNDtv4cYYaoTws7TJzdjFbd3TBwVGTr4afXyQR1tQmn9jCwsnaW7JWseWu1",
  "key4": "4SUYYoM31BoHxpon5BYjM3TQn7NQUkazP7PE9jBGEAhnQ2tVZQ1Nvv2E4zxuR1iSdtKtchVDYeMnjPtXu9yaWgR1",
  "key5": "54jtoWa1hZWQcyGbiMMxUtDfZkvDGxJKsfVnqHsNTWvu9Niezw98kndeHkd8tGgu7YYHn3F1U7dX2wBeq2JXD2o4",
  "key6": "FNkiLtCC8L9977oMECPMsshF9YfD5Uqv8QghvkM8LthawSGAiiPKdjGruM8Rcq3z8CosG1YZX1GTbYCGmDMm7MU",
  "key7": "2B3MuWuCtBfxWCXi2Q9kAY8fz5QAWVTnHibCVkHha4AQCnU2eVbFSuznTfZAMSgc9cpv8bdp3cQxUHVLu1T11NAb",
  "key8": "5ioJ3sHjkbAWtax3fhh7NAzRUpKTk5GUUgERsnatRtLSNcPL8kzoTLcgK6XKAuvPKdp2GAgXiV7jxNrXuaxujkT2",
  "key9": "2bE7bKLepMAeMzYc9bvzsyLi9snpit2LRNf6iduxtU5F9bS2dSbHYioJYN98u8v7FLovWwjMCy698jATjAag3Y1J",
  "key10": "3iqHtr2BLU7HR4Sg3zc4x8aaX6vGYUvZNgY5RZLZS3uNHZYNtjMsqS4Ss6LiAdtVFMsCRM9nY4FwT8HcYEfxjzqj",
  "key11": "7zy7bz47uJBCGtZDJnYq1vUG2QVTuZDCcXZNC9Nn7Lx1Vrt8tZvjqzfyhQx1EiYwGo94j4JBaJg6pP2u7jnzC7M",
  "key12": "5B9m5y8k5U85U1S9NZSgRGPNQarAUQKdYuQntEFZDZ4YW4Cdtvc62KeWKqeZsEgHqSGupEpd4y4uGZjxtQQQck5r",
  "key13": "3fMnF3YVuXodzXwAx6E9GwmMcyJHDG4ztcMi9dCpBMiSdCHN2pWjusCZz8oAkixVAaH8TdafZojaNcQffeFou2GB",
  "key14": "5RCQw1wXBntaGS9z1KZPDV1ZPj6aehkSKfcZMPPKG2pTcYXMnT7updbG65WVYXFRZ2LEXpXY6jX665bouYDMmQa1",
  "key15": "3ccvHbAkbPfpoo768geqEtiPQ3o3UgRkFZconPkFmEkZc4ej6UW8GeMCLwhwZwQeKvTDpCS9m4zPT3ZvCuXmej1m",
  "key16": "3RSobCmhze1gSqtYhqQLBWDXxZKrf59KRYRrRhVgQ99mBv2j3hZUWcZW514p7BmzidZdLnnoa3WCM9i7xCg7mYU",
  "key17": "3HhVaE6FhMkofG2bgms9tCdiTkX9Z8BFNpmWpxWnMe1o1w1Ph7ZCWpy2B6g1oYmUyHPV8RLvfshMutk6WnC29Aiz",
  "key18": "2LWM58VwNvK26GiA7Tpb3yBtLyiRx9Zke1SLAi583KnVkdV4wF1xYdVanP6u582kDBv5uXyBj7kn1KMUZt766PTB",
  "key19": "4LqnTsYvMfzAMYgCn5R6aSUDzeZgACGf2BzT3DFmHpaidxGCMV9bPGvMzbVPU4cTnFw9Q5W85PKNdX2BS3hYjTir",
  "key20": "vyJNKfj8PUxjSvirkxz2C35aZxbSAqiNP672ycYMj6sEdnTQLi8CDSBKqSmTfc4N3zDf36DoyEdYFXbP5zUPaFP",
  "key21": "9pTb8Dz5nfRjMobc5nRvFyyGhBFuid5Jm5hmLAGSauki6NUrKjY3ERmz7t6oRwkicjPJhQvbznttgrjmE1gVYwA",
  "key22": "2iHAP8evjzDaVVouPs9hCcMMz5Bw468fWPnFBG5gYnGb9vpZfikBzTJnmWWNJhgGsr2UnhrJshBo4CUi8Xe9UPZC",
  "key23": "4cB58sk3goSDqjP9y1NWkWtfSyXZkAUqYqSWvAvUB3KnqtjTkEsPPik5g6oGPXu5BcNm5dLeVyzWoHeP4XjUsiUX",
  "key24": "4hANPmgiCHXV9JoFnSacVpqfvq58Vvxffrhj8SxejKvUzJcbVcsAdK7oAkMzMiZiHkmRT4AUkxKkGjZczzbz8xxZ",
  "key25": "4aMeRSBoSS81YfixqSLNCdJeLPnrBQ7pfyr7dBHqXCeDjNiEYbqyNyUU924EBNWByeFvJrLxhNiHn6ABZQdNgcrx",
  "key26": "2AhZQYD3bhc3mGCKKcdX4XH7QQqpNZvTBFzFH6HsgJ8BNLj1eMSQqi5cKTnn85RtzkVcxqkZjPdqY9HMumCcKvJf",
  "key27": "4nCi1P6NVjGaZwBgzpb5ikK4pCFSt7prLtupDcm7DW8LueSPpqGFdbvuz5ppce1E9cobYRVFs7s5JYHmqYqisT37",
  "key28": "8wWbfLJ6C9ujqAc4XLz3vfZowJgzdLdypnotPieGgRdg7H4yCs1JDoMRQjco78rUr9LD6gGrUxzKLoR5C1vsjtp",
  "key29": "F7kCXtA12G79DcnWBFY1gEamfmtSK7XxWToa2RW1AMjrZBWnFC2joCnkxT8cwvN1pR3T56i1LMg9v9bEQnGpAsc",
  "key30": "36Pzny4WwTYVKP6kD2r13UEpuiFufUUsq3San624GRt9NbfGAWwn6XPwQFYFZuKCJaBVLtMozXo7tmMNkSi9aVo8",
  "key31": "59QB4Mr9uuzq1BvwR6RoFBdYGvQqqE1FSFXWZdScBVAeqsibWNhH8udNT6FHdgHUzBT1LopB5kR134ebnvvTzm68",
  "key32": "5aJXkKUuGPxka8resU2nd6iz3zhXUhp2wRtedfitZE6tezjDdsKdNgLgcZ2KNycPcqBouF3G9PbctQusbPDjSDT6"
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
