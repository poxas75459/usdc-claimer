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
    "641TSr3QwZmfudgbNGKMFzqmZjsLa8BRYsGA9PptGfpjvVkMoqNMHLmtBPaB4ANKSfGPwsk7fmb9k4RCR6qoWMLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hcfeu5AGre81HUKEwVAWaSEAQSGy1rGVcQx3zycjUb6tk7S35grNXmkpCVi4DrP2geCP8yYze4hRiE51m8Sttez",
  "key1": "FvZgh2pDgk9MKZkBQGTde4UtNF5LnzaFKVk5m5GxCVtb2xycPU9t7zMvS4v5mHwPU5jfLvpE3KxMvTt3p1FhNuP",
  "key2": "2xLwRRQyheUyDZGMDc3MPqH2jMijZFDVp6W5VYY7wofrBSptrSmBzPBzPqwXgeQRMuRV2wezZZeSWLCCtuN4WiFC",
  "key3": "4VndQkngyRH44tb5A4WRjMnSsfMAxA3uAAiYiSf8r7nTQJe1kGwSLCyNJfhpi8XTybVSEVVLx5hGCUPT9JaG8WNX",
  "key4": "2SDgm4udwSdLtyCmVDyTZs3MGzQ5wJz5FkWSAmbHZYcA3U5jWQLXuPLLzQD1k6KedRvWiSDNiNSheAbAq8WE9A6z",
  "key5": "2gNKQGE6dKc4h5RZ8VEvirDvnmhQHAAt1m39zFvo9xdkUyeMAcBng3BX5i4sgNZQ29adi7PzNMXBtTjKPPhxpFXz",
  "key6": "QxYt1gSTy8cZyZ1kCcRE8QjyiLnVhUg1oPBTjaQ2Y83VDWLrV5hVKTe9jGaDzMCeKAiaMAsCPbNbZ3ATyMCbm2h",
  "key7": "5HwtAnCDanuwGCYtNZrNWuxW4w1c6ko5bYqhwQmoTWox62wZ96QwnfBotAcfaGNXtXHvn32dD2Y3kqdV2x2u7RJq",
  "key8": "2HottvFT8JCCdwcGkojYD3xvEo2LvwrqsFQq44nP8UfTkYSKZveqmfwhbhkUAKtJre2TFQ73wDZY91D2BnsxiCjV",
  "key9": "2Lrg7CqScDhAxCjGvM5VwoXQAzhX1dEqEXdJYNcez8423TzX2gzPqjpFRKNvoH5aJgUKbfxafUY8hKcN3uwite8K",
  "key10": "4YAEGHce9TvXbs5cou8bvEJEsThzmKrVBdVLGZ3HscdCnLPQCD1gBht34BwF4G4ag7xi7Lt2KxJjSekpBCoy6nas",
  "key11": "2LDzZBk6hNHpMCqKCrK2pc3X4VsALdecw6NE3KW4dhgsrss5RhRqpZVFTxzsZAxoAZriiFVuZqUAxk9AFDqmQ4MJ",
  "key12": "9cW8sCm79FPeZFBx7Udsm6MJNzqoagctMqHKkXiayywBi8XqFBNWMjk3Tux1QVJLSAZ67srdQ5ggG1ayjWgVYmh",
  "key13": "5pUjbeZ7V3pdXkW7P129dB6dRh1Td3P5MWkrHqt9kFvEnJPDNSQEvD8SkzXWY71g55kriYQznZovjinbBo18yDk9",
  "key14": "5UVFgeskNuh71jbBQw2m88dkf8GsavQhQt5sv1HEZW6Gy6wbjh4ytp1CQHTQt63tByfW3YdJwA4sL5vWA1CG1LL1",
  "key15": "2Uo7Jd7sRAJcit1X8ZAjoBLXj1v4wbExgN76z1DJqNzhpSehGa5XWJGRVJncFEocTXWV1UBn7frbPXokSVX3DbW2",
  "key16": "3aBD5hbGeVZMnGEcwX2Xv2sowo9C5zAnkLynAXEUq2XpRZA6xyrzGRt6T16B4kKLMpSKBTejTTcWRuFk8UQWdE18",
  "key17": "4eGzHkSiyjzr8F4P733GipPC4dCzygLBFgTAgr4CfLUSuAKbmqC5a7GrLrSZt337V8ZboV9dDPMkMEzc25ZHcyit",
  "key18": "DUQBFbN9MyQfVRp8CiXayzjWNrojDBwaNNWtvjksaCqhAxsuUv1w3rffcBANyDF23AhVvy34Q1vvwba2r8py3av",
  "key19": "4d4rMecHfHkTqsFQZtYzfoEi28cZu78LnmzFt8vTd2poErKnC1r4mYHkuMB6TPoDyqevgoUNZpNHSipJ5t6FCw3B",
  "key20": "5pgsn7Ap1b2sjxuxsh4fxEsSYYCQ8juomoS9SrP1ZX4aC1eJvhxKWt5gn2jRuNjyw68aUHidzCuiX5Qb4B8TfZAR",
  "key21": "5pDGK9esGtv6gVtXTRH5KKkKe3dEcyBRT28CrVYTz4hqqsW852in2KRb9z2N8rHwwNdwk5hma8e8V92TmsBtN8fp",
  "key22": "jNnhB72V7TrznzXQRQbtvWh1xegB7NX1HEio216ZpEffVjnqU8eo3pWh1P6SuHrSmNoWy2pJBJdnbrXMptt4WGv",
  "key23": "4asCw3awwqYKNVhLcYHwcUXZGzwM47agivY2dbmQPzPZ16nRfed7CdZAofMaf4tNN9HQUw8grQ6uD7MgdEznD7Mf",
  "key24": "4A9ukFk1REZNtVEcK2J8uZDQ9yE4646y3pNv2SNDAbqaiYoNp6F5Mkxf1KWBnoNTKBdkEkDkXGSnc4jwUuWb17fF",
  "key25": "4QKDx4pfFrybBQBek8p8QRMUf8YWahyBGmrGbwYUaX9Y8i3ZdhKrG1AQG48oaNdmuVU8nTWyZb3qknca1MRX4U7E",
  "key26": "5hzwRpW9xkLUNJhqSmQRuecD53UWz5wYkbELRYNZdf53rS3XkMPNvJxL49qjfD17sUAmmTu71EbANkMobCrMGHHJ",
  "key27": "64VhrJMiihyyLbaLtbFxhoqUmWpBVLEFru8pFAGMQVrihDbwK226ik2LHWcPxc7wn9mqA1SzAUJSPyKgsYVGsRg6",
  "key28": "1pLG6QJNw1srR3f51j9RnVqSzSwngmXKf58mqkZmaDvvrQcZKvHah63szqa8isGnrGJ54WBBxrArMdEq1d5KReU",
  "key29": "5EbVkXLzuyiEWhgt7288YtNtjZHHpdgZdabLgzBYrrVzvf74RrHMPDaCGDHLtQSi27czj7huaHDYozZsoYpbn8mS",
  "key30": "Bk2LDa8etd4MEppcuabj1S7shUmahgipownxRnvRY4MsaT61Djaued9ypQdDyfiswLXd8esSpf7joe4mkQYu8v6",
  "key31": "5JMyPCi7oQZrttnEw1ejy51zy9SjsWNQKEsLMcgRD2nKt66wzDZvztMSpeojka2z15XtnvKFouoQHpkkvyc8zANZ",
  "key32": "3HHAWaR9phNuKYhwN6a9SjrmQE9yPeBuo1kJuxXLp1jNBSKqK4J3hWrnkBfmB8ZDjb756RhuiSMu8GW4ydazs8fu",
  "key33": "ngkxeABsrp9hiXHUphiN5ujKJSf9M9YAoDseLHKKYGqtFT4gAzxYbDN8BR3kCwKpGEcdsoAieWqjoB6EdJYkh4P",
  "key34": "2LPo7sUwRBcMXvKYJM2fY4fH3r5iWQHa6nt92VUQ2fUyVhMsCqRLKvrGyXEhBvwt9bGtEoMHFk4EpiAzT1rkViWh",
  "key35": "3XvX9ezMUVrdRxy3DBiThYzcPhty4uBpfVPnsLsS6QJunPuZGKgZq5QX7BtwTRDBCUegcen43k2SL7V9XkjEVrva",
  "key36": "3EwkJcM7nXvucSxHVpcY1nUQH1XRLszUs7CHjkxjYX9SmZ63kKbjWtg8tknidavV7qMTR3WuCkZxvUkCGRWTQead"
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
