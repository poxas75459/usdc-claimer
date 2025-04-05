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
    "2tDp3gpgsn3s7BwsUETz5iAcqtsq12pSuNyrzQrTfwoW7GzSnE7pzUa8WKiTa7F5Wf9tzTG72yeCN6LBogkGTE4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QFiYLEjeooojGUcvQY8SP2vuNh3yBpLn85xHa75SEu1364BARAcjqofbjhh1v41rhLS9S3dnvv99CZ5mfLMMJX5",
  "key1": "44S427oEgTmSkVwWn2rk4Epc2EQ8CRAT8bMvuGbjy8PTYeHBa7eZvie6mWaQxapNJhJfFBmjnR1y41hWCkxGCRn9",
  "key2": "46UgWPy6w1wCdpQWt13ZVajg84t5FyBJ2muthoPvn1SXSfncdbTzmEuU4VCzZipUZbwyrJExgXbLp6nHuTYBQhk3",
  "key3": "z7FuTrEFkwZRCzF3Wy5614zRdZa6Ei64qffSVwhsefCVCisGo6HrqwcijNYdJHXYtaAhhN4NZSJcGGjoCEi6qSX",
  "key4": "46n4pRGn43z82hhpzKTXdXNPDF3qczeEjDJiMd6Xtx6brPvzjhuU4RemsG8quTyxqTn31rMuyyc4ZLwwxT69BCNf",
  "key5": "3HJcN5g2zgr2AtQrgeRCsLC6TAdTETtNQdXiKmio1iXPJEVUyXowrDQtEgDHLCCPwX7459BLWUKphTYsEPqZy8Po",
  "key6": "2KVJDFN75dEahB4Z8KUNtXddw3YkWndFPE7aNfnSR2JNdCo24f4xTTkhruJ4anUC8RKHQoxRSHsqDccdkaiAhrn7",
  "key7": "6495z2mZbRcLfpMzPtdjyHart7J15L4fUwVnFeTRhaaPZxXtRq3Q73uPtu8CEak8ZEa2JfE8SP6UWP6BuCspCpkE",
  "key8": "59Fz1dGJHaZHgeezMsYsQGR2Q8rrmFj7oeMVbunKYf2se8qZ8PihP6yXfYAkUC4CLDJSTw8pYscH6YneDYwhx68D",
  "key9": "2ytBKSKeh8JzNmUj3hLJpP2R2cmh3sTrSXjwKh15Qf6CV8FcmvRAmaksBB7oYx2jDa6bMvjbmCsQNB7gag8opf4a",
  "key10": "63JJvKH6RJy4Wrse6L3kGNUetHuD9JxFkBHofYFPMEb9PrpnUgQrL2fvkMo19p5vzRMPw2WtBx6z7L5RS1mwWLtn",
  "key11": "Krd2UzsnCZzoQmxBsrRDDiTH3Lfg8AodyMZMph3StGnjT4ioUf81ZvD8FtrqQyUqnYNfpuPCPLzL7uTAeQ8wtaZ",
  "key12": "3zQny7agSDYhTLFabDBKHhbThVVwvKSz7wGV8xcqN6mZuzsQTz2wriyxZEEMAVkwcPDCk5imzDjaNmgjDcVHQCAV",
  "key13": "5uKpz8Bd6xH66ew5DvoQBZiWsLAQS5x8mj6x1k4eEk4rtcxhLmdrSCQbR2RPUPj4XfaKBeJN2UaxZVtPdZ3Av81H",
  "key14": "coiWN9Gsft2exzdD6M4yUqKajMVPBNpjmbPrPYBNKW6ujjw3ji9RLkTXztHSUAEk2EkQgmsCR6iwpVFjuW8muh6",
  "key15": "fs79ohYL2dZtmECWbzExTiNtGq8unm7XZTsLCCBb2rzXqD7m2RsUAXGthLRWwpbpf688V1hZzVH71o8xfMRuqWN",
  "key16": "2EDB7nDByc97CoenZ7YqvfmR8puLvMqn2bXC58GYM7SbDPVMnQ6CYW4DJntLKnZRtA7ucguSjjE5EPyva3xWbgVw",
  "key17": "2QQKk1LzQ7m9F5A5Zn9j94UHmWjWJxX5B1He5mLkUyK8Q3v6WjaacfqygmXA3xxc2hdHb1FTHarfW54L5mwv1dDe",
  "key18": "3rQoA9zpTtvkE6avjkfyvSkYy95zRg71JvpVuK2LJJwQp62o3KVo1q3cfELboFtTP2CG5qmP2tsvJBKfxGmBv8oo",
  "key19": "jhyLXczwSjbbFepziSa2y4A9fCg3PXaQEWyMEASWF8B38MPzdAZGJZ5n9wcjEw8guBfHRJc2GXmdhNsXvP2vFxh",
  "key20": "2vYZVEZJ54VDVhzXuHHR1Pt7nyZ9wXof8AymvATtuf5fkTWMVr7vijjE9G3S83D4G3q8hPZyrdNNyi5LCupv6Yv8",
  "key21": "P1Dh88DdB3cb7p2GoH4tSU56v6H27zXXPAPfruTc4qNS8BhWAiHZnMte5wbQQJYDy2LXxty4HBfjCuL9Z6i8xuU",
  "key22": "dF1SUB1aSzp57MynRSQsYEL2oAnSd3s71mXDNzvmUzmQ6GaM5EtNQpLQbmLsD5hgrbMHo8TVrDkaGosnekJDEgJ",
  "key23": "5kCEvvWZJzkoq7PREzRn7GgZTV6NQ5Ag2q1rPYnwYNUithhdsw1V4cq7AZR9xBshoTAACW52NduxtFB6iaXAyFWc",
  "key24": "U1uR6NwVF57kPM82ADtSSbDhc2HCxeKZYpigibn5g3pUda6zRJi1uqupqBr7EBb1NCLgkWDk16BCyN66o5wrsjR",
  "key25": "3WY4pAKsjtXBJG88yZRrCMCkKihxpUeYuT9zJpwad9kaaJiYy9TpaKjEGNPoBUwkb8y6stKqbupaCxSD9sXXBsjQ",
  "key26": "3KY1kCe22fEB6XqKbrbVi9DVyDt4sZwj1HMH4Gj4LUu2DJfTK6aAy5VxyLHoUanpesXWuiEu5V1UyK4wnNDXJrP1",
  "key27": "b2U4AaejBSDWhswboP98BM8eqATWvNeZjmWFW82zSjjwt7ajbrdnLdXtfpsp6hJiU1V5CWRvvWE8ENUjQiSR85P",
  "key28": "3g4ujozUTYyZqyR385uvEUnt2UWwuC5TNfLRZT3y7RqfCZ3gnpS5bSow7AACNN2uB3JFnb52x52UMsEqtDNF4b7g",
  "key29": "3DLg5SoPHhSiec2D8FotNeH1xmVDLCESmdmCDKgmsLrSfGzEXqJe2SebVuF1KusQJe8sRse2miaCvy5To7NtAGuk",
  "key30": "4BhX7NFsLBXBXTxbSAiQ97bGQMHYoZD1ccSohrckC74TYxp4fJrbbJiP3GiEVzpNwLbBu11PFDyTRW4S9X7iuXX7",
  "key31": "62wUDQqZWKtGaBvKzo7j7fSjkivjcSuSv41k4Hy2A8bTFxu9JmTBbXrNrvQw1TDgJujat4dCtCkQ3xSJi3xQ5qjh",
  "key32": "4Td3LTrHexu6wdUsrxcLMuHAKERvsahuMhmNrd6QEbJuKCQsS2kG5hLVLPE9NaBve3mqGfTngkCJ7jjr6MmiM9KQ",
  "key33": "RuMTsfF5sJLEsFP8bqmfNpXEVy3rqhQaucZfH7QD62AtBMNTojWb69PnAyJSwQUzBsRQDNtjej2JcqcbDbtRRzg",
  "key34": "5LhYAB8fsEirNtmALYpGK3j53jdcfKJWaL8PMcg7x3kKqsK7MDN9AMpbzAFvD55j5G2zvFpoShXdy9zFevzYdfjA"
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
