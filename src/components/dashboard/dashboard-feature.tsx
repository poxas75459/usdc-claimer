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
    "3y3L3RKdfjksezjKXaTmj7EUQnwJ76mo8hdT5YHZUTZtf32sepS7DM8BgD7TYUcbX1As9FHuux3CvDogszx1Mpvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nJdZVM9fZ52YfNucZYx3w19nNp4kHkKD3e2pjY1ykaxQEi9CLYNJSfsz5MSJfWyzhLB2XBCqTM9iHobY6zGjKyX",
  "key1": "2yCkodN4cEGF1y7suiEasLJ73jS9d5XUJNVWkDw31Jrb822DvSLnbmLzyMLiWtTEXShpDVu5GmYSNhdfJZzFREBc",
  "key2": "2oqVTHUTFJ5BfsRyYiUqoNhi8ssJC2Bo8MMsaZVJawNe82wYbvjmvxBSt2qj84o5SmqaTvJDAjaB1bXHmdWYbrHm",
  "key3": "5kTyy5aXTZqMamCRGRw31ThpQUecY1pmav68isigSmSFezbxTzrAihQeLJPtEXXBYdb19x7ntf1TYa4vdmuLpuoD",
  "key4": "28j7FD8hmjS86EihSMhSY8NkRxwQuHQNr8ExheNCPV8fbA5kevCXrS7jgu5fVfo5oZK3Pq5Jt1F9nUgECA8T4ygT",
  "key5": "4owXsNQzHxQ8GTVDaS8ceavw2RZy28psak2Jqd4TpCsKYhoPZEDy5G2PS2BJ7E8AXbX9vpddLqGWFAbREQhwxA6f",
  "key6": "5H1z6jDsGV2JNit3z5ptWcGqfVPHUm8iLNeWzE6KiTSYnAuy8dxWuWZwihvLEhC3Mn5E2qqZERNkwqz63QhJ5Cn6",
  "key7": "2dFoyKJ2MreAXb8t6Pq7qppThdjGfBZwwf5VxWPwd8W3wvoYSMp12EpV7eSyo4sjzrAPwH25Jwx7UhRGwWZBxi1Q",
  "key8": "NiLA3dvgfsdvfxmMPaJ4vzeDoKatEM8QA7W8ztzcjyhF6dkSrAkCV5w8ZQJ6hyuvS2entcqrUne2rSw7jQvsqXy",
  "key9": "4VVgZ2shF2Tv9sPkdB7TsUkU3dMKZz8S8LHAh1XCaBzkZ1p2DZA5M9QgVjCgWMUHKW6knbC6TtK9Qj6p9v3BDE2g",
  "key10": "4qMBQpEsUQH8oytWotvwGD3VWT3P7NWmYmJ9Drfx3rkz3FCB4v5DyTsPrhivY9aNz8cAMPq3jwaRJxw1t2mXQjEf",
  "key11": "54r7k6ZrJ6HYxVnMWNGYDjWo8tazFqRrvNZTuzsEM6YTtuHzGehN82xWU628Ea4wLmte8AtHVHdfjJBbgH27hG6K",
  "key12": "3Q9ogWmqTbVKGD1aDWATQ5gEoEEgK2dQAKoRTHSq5CfsQquynBpMAVMtiw87fUM5wR1hwdthsqjGstEpC8UPiSTZ",
  "key13": "52TqroFYX4RUwNvSPKsPb6h2GzoDVHVCZrSjp6HemcjiGvKvrrxWhCrVQLfM34j18jz1QraKfnW2KLM5LYjcHQtG",
  "key14": "3vPp7Pgd6arwugbzhCoTjFhsNst8y2asfWky4oaM5f5qzGJ5MR74Pi5HuNP7DFfvq4mUYRnKXb5i8PfgYGzkmvnx",
  "key15": "DWU8UzCEcaEVtF2KeEjM1nMnrHnUawJkimpFjfwnGK84rytCU88JUf7G2NL55UZfAKTNx2sYkyQxtUkvt4fP63Q",
  "key16": "jqGpv9LUWDWVyVEBgycRj7LhS2V6jqviYjbKQAU48KrC9eRAA6KBNCvEGrRVPk8ikfEkYKMAqU6gptrhdGwjHMH",
  "key17": "2BYmYxAbZoijxCFWtaF7Vu8gxLDuhznH5cFH9fXxWFDA43ogwwfx8j2pxiMjEGNHmGSqRAK5fpURcnzH4z2hJyGe",
  "key18": "5AijqKnFcJir6chSFM3w3Aj3FxitTm5KAwUgxc6NWptrf8HVZahkGBaCreKkhb5Za6xcaE2bxnMgQ9rEn9aJY6kC",
  "key19": "5UgW4FfAHxEkbUUBNJT1ZgsPJREBFxumLbCUxynbkiag4HWRdbKg6dPcNin7qnWKm6hhww4B5wrSTKZbCvtQLnvb",
  "key20": "VqeeT4heyk9ZCRJanT1ZAoLiPN1RwuvXZ14UP6R8oXgnLRoGr7Ac29iEMHSYkwajLiVtqHkSJzaDSMY8qw6yFb5",
  "key21": "cvCTGMQkpWQwuKqDZSanSyPcrk8pBxrFR5crsYKxpZ3gcycfnNb1Y2cUhExrSfT8a2TVMHFWK5U4MKFeLobBNTM",
  "key22": "35A593MoCvzxBB21rodeHGVT4uHTq3sCtMefh3g4vBYBFaLR8kzBg9ujzcmDarugS3NRaTrSYpqVaxXoHdLJdLdF",
  "key23": "3FNQRUojmtfYzRQD72f9HkfpWWWh6e2ZdBpaseYH7EE5dF6fHwJ4yERertQsJgX2PUEwdgveVxQ69T6qCRLpej6C",
  "key24": "3kR6LyJqGZDMw7R87vpvfrLkHxkfjnHU3W2eN9mYUzjgUNjrcaHzdDZruYrh6g8V9uwdsqrJK9u9pmFMa1Xoe9ce",
  "key25": "4PTF9Y6uzBU9rTRH1qB2c2Jt1XigT6JyA4kKcXJAF5fp2VE63U54gJm9g784u6CQSUdDu8rxLJwvpmLMwwCApeAA",
  "key26": "DQSHEjM2QGu3ymg8XnHrr4K1vG1jxJR92Ys1TBFCyEncBNde5sF13EXnx1ze2fT2vi2qE25FHNiU5BJocMBA5ww",
  "key27": "5pZSR9QoEabr8uTo33NujBQbWpu6XLLpTVrj4vUx1RJrpqSBQyaZjniYc1vy7gjLqBmFrkWtLtqZCsQZEFhDd8eg",
  "key28": "5wHeUwBRfN5AzuTjsbXpT3xnYJ14MMDvE1xnsbwKxHYyD3uscwCt6Dx975YU4o4VgpwX6faHfW7Pozegf3hEXer9",
  "key29": "MajaPCjxUz3GofpVcbpPxYzwPLr6eupexQyXDi7hoCLLk7bhVRS3u29sVcXMKd9E3XPnbKk946V3yco65VEXw5Z",
  "key30": "5uHKUcoNKUjRZ151MvG3HeegwH93rJ3eExzgnk4Ru4mS4jR3NQ8McdnKnw7yD7aTYsYmphVnHMX4HiAzPgGCAXPB",
  "key31": "5xcF32vZo74tXCLYm6GRy2xEqsw94cBqwvYB6EZUGEb7A3Z9aq9YWKtapFHhzJqHbsDXgwAsjT1ZQKt9kU9WKePy",
  "key32": "57ji7Lour8a2bmxbGwyND1JLzn8dJP8q9WQvFT2ReWCSZRPwS7JBVEjwJo3XtV8k4r8kWLmYC3b66KMNmncW2mUB",
  "key33": "HokRpvVFaRKczbwvAHj2jojcgNhqR8DMoJ5Dm8Qrsw7y3r95r7LSDzf2BeyqoZ6S2Aqjyr6PfFA7CyYzxDLfwMh",
  "key34": "3xD9BBbNd13LTS6UbAHFftxRyJVXKEcxCzXDDAQG1hZd8o2mmvmoBFaJEEMx28NfhJJFYEVy8GTGnYuDctXNXEHB",
  "key35": "4rLgdqL3Tnw4GNG1xQTFrSZbyQtTuWpNVYTLPDoMGbgL9C9aVXYLrUZNTMWLhPMsh87CwE6nsj8MgH9MwW8uMnYe",
  "key36": "5mYe9vn8icv4CKmP3XPRGRt3fc2fYJGNzhmDPxdJZQKRYjJKxeyijTVpPna6NZkrTyeCLKZUdfRufL5BybPbcaLq",
  "key37": "2hV1bWYVeUi3zBJgrqSPsy7w4f3DtCVKoWXQx5q1MwYLBgH7JDis42fTVH24qpFRqKFuzTScXtio38i3c72w8RMz",
  "key38": "o2xm2zGoe3SVo3arLaEUU2fLeAipx7bnw93ehvBWbxsDT8cvRBn9PSHv5zqpHo3vVHAogfvnR1srMpqNLdUWkxu",
  "key39": "28db6Xicn6NAN2HqY2MF1UNHwYgd48TyPFhCZJk4thwAYweX6cbgQHpnyVW7aLaC5noQTEhK2F8rwbSsTcTfJWrR",
  "key40": "67RQR3AsEjMZnwev8UwvncAa1odaJCXQxCL2yQYRYZWxGs7gsDq7tKXntir24DEezADQp3yZ7V8ZSv13E5uEzUMC",
  "key41": "LdrYAxq5VY5HSC1b3C754Pth6qjgzvshXtQ5WhSB1oJQDHvRtXGx2mQgSEJ7qgtaqMxqBW6ceWL1A99PuSHtuvU"
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
