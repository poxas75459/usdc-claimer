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
    "3HePahexQu6B6CdqxroCarcmveYRuuXpmAzYJtQ3R7nFcAvWdcdH6QaMnEn4oEDWDHXekFP85qPTWXqVtq7S5vN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33FG9tweJCuRsVRQaGGna7qWPackYxM5nC3WBH7n15ha7EQ3mEvcrQNQMxNtobsd9JahHiSD8h6F4EWfkVNVRuJU",
  "key1": "4gYGf7ZFCw98C9eJu8Er8fmsgQhy1obSj1zABcBuaUxMnuNdjYhtdKQWD7PhbsaHHLAutRViukPA8zYx1gqmiER6",
  "key2": "2BEvhSCP5nbZkcZfGKMMUYa6vvXPtiiVYaNyvxh4ZXWwntr6dBQEvuarXjKDuxHtFjrB4DvxKbhdPZxuMFJcxSB1",
  "key3": "5jeTnvWuV8gNuz5v9mrREDFmcXYGpUbWMkBeB9SLgqahw2Xoe3tRVu2e6fLvMpiHcEuudLeppxXGAtKmQFPYW99x",
  "key4": "2nBBW6XVnnc7zMzW3Rf4y7aNZVUCwoEFaViZZx1pmRd44bkD9VYhsUzZKxep8tr9iYk4CQsdmQ2VDWdfEqhQXcbM",
  "key5": "3oArjXoVtxQnJnVKqV4HieWK44CNJ2yBQeSuhVytNA2V9RrVvSkfYfCg5U2mjppcYGQ6j2uHnGAaU71f6ckXTfNk",
  "key6": "o5Sf9iEVi5eTfagWwDPMi2aesCMcmTFjGQYbjJWoCgaxuN6sqZbMZysjScSJ7gwgdD3Xia6TupyC2TbjsXm9HAs",
  "key7": "NCvTtZPTUmPsUh9B72AaJU8CrEiATNeLZgQkVVjYskgELAFJRfF1tAaFSYp8jQ8bUNsxDBpXCAPQZKr4917oK5D",
  "key8": "3jxPJC5KFbkwpBdwPdmcShbkgLPHLRpNnYn3cVF53EKqntFW3C6rXwgsNwZDEtYXfyLcRyWsvVrPzyXLD3EM7E1",
  "key9": "G5VeHHnVWS2hxZfM2pcKvd8AGN1i6NpgVF5RmaHoenzJh5h8tPXHsWzUnSyHDEsK4S9QqG979P5aWEGPFe8x3k7",
  "key10": "3gbpEd5rafSnBXQAAMgtSnHGrTZB8T4DmVmHHEFbspXMAsE5uaPmErm9UR62eTEP7LFMw2ui9jmEbArSYwexwHBV",
  "key11": "YZxDrcTT4oqvy2PZJGGnLEgujRXo589J4P2LNeLhJPmbzdq8tXsN9kUWNvbMsnxs78bS3825N5xVhzypAnRiWFk",
  "key12": "2WS1xbRGMUBLdU88TJwaf9ubusF5P1Bc9iVbyzYptoALJqPWHVYs2WMKkNXmvAGCRSotAichxNdrSpVi2X8sg8W7",
  "key13": "58SVhgdbkG1Z18b1ehHcX5AcyJQaDHTpVXohNriA8cTvWLf67Uuj4VWgG826RtNX13ZcZPa4WcC63bcr2CYjJEpa",
  "key14": "aVZXzGUzNg5SA1kTFKxneuxuPCuyuyoe1FNibUnmyMyqSNGcen51oP1XmJutPqeszhWU4dXo4z5XUcroUBgs67T",
  "key15": "5WhBxJPx1gcxnUMZLErCbsAZzQWh2GbcPYictQS9nHNPB1v1tGbj3jgsZthRPLuLPtBMMYhhD83HbtLRHajNvq1o",
  "key16": "3SWp9xJHTkJFwDPwXAZHUCMxbdDSCo9ELipFHky9RS2RfEzxhbDBLzQDc97NjFzBMi5Nye3pbrnqHCERXcPXxGAQ",
  "key17": "23ws1kHD6HggmbdDvnukRw4NYn3sZZ9Ywb5WspgUXwEzHpDrX7xeCiUfuaDdk9FeSYD6zC5iVDyxcJSGz4QJhHpg",
  "key18": "3PdRxUsVfUHK9iDnHA6HzXCZSb9dJDoE9zrZjSrUeqfe8hc2uR829GKVzc5Sa21Z7YKskRdC5Y9wPuFkTvRFNhzN",
  "key19": "xfAPH7zw3yRBhdbZvuEDeFnK1BWYm9AMwXahdXrFJJAUdC2PK4hwykRHHv418ZTWk27JvsEi9sbvgcQJfxq1eJ9",
  "key20": "2DNDs7WdYxngPaUNJnHHbsEzAgCg4W28ztfBsBY8SakZn3iy2r21z8v34EBFYeuD1SS8AxWx1vDqDd4JtvAMMyjE",
  "key21": "4zUy3edJZNJJjjawQcUavVz72c2nNwpUYKzEiwqbPeJPVRP4Nq2GJVBuKL2FfCHJPjDit1iE4oxZx62BJihfEeQC",
  "key22": "2hsT8mdbkreVeF8fUtt9S3VRinnmjJ6pBFeyZSpaJWTuvcJFQ5Y2A66q1LXS4iH38X2mHVgfDkZaZeRzcj9pTwmn",
  "key23": "EkCgVgoYR3Dy1xAHoBwcEQjyEoHb1bx6nZDaP1qdDEMVBrHcJSWe5h9uhSSuQVsWjvJhE6sdyUAdzH16mWYHPaU",
  "key24": "3VSoawFbqUNpZKpSXNb5at999gNzcfafzZN5qx6FzppWgH9yx8zzdPcL7bQsnU8Skr9ENLT8dBAqcBAPoPUdE9ej",
  "key25": "u4YArw8KGyFkkoybwna4824aUW9oLA7JsnTGWGyGQyPDZN9oaJ6DcYh4jj1PyWin2YnkRLDnNDFpuKVboj1dpdA",
  "key26": "mdPqSsGCRSFT9teaFV4WbX58FdZQFL33mK51soahPdK5Xesxrc5LBeC8QDBZLvFbQp8i4wfU3TNhqZofdfVJRiW",
  "key27": "4qZvFw5s4qc2AP3HgAM5CfpyTkNMQNvuyyEhxz8M75LpnTfXnFPgvnVNmYRyjsUyoAjfq4nLC7jbug3TudQiYzk4",
  "key28": "5VP3SDNCdV4qMRdbYm1FbhHBsAyWKypAPdErp6dhDJZUe2xnhUHC1iLVH4txotQxPo2xatuuYY7KoLtgzALjVzFY",
  "key29": "4fd8eQ4bGNW95yr1wGemmUvBa1kQhFM1kqUJNtJxqfJndRnwr4ZBUWZickgFeDkCQprunmMCurr25zDHSFV3zDBZ",
  "key30": "2tqz86UuVF43qB5yRqmTfgTZt46RZ6p6ZDLiQCRHzR635tUMwSxeMUmbCswSZvSiVQtetWSvYyy1uDHKaQXKkThv",
  "key31": "4s8ogYApVkpDJWxskxkVTfVKdZX3jnVwxKBsyzp2PMhF6EWskb8jGCh8Jim5tTyH6uQjijUqg6kWyGnY8MyiomQv",
  "key32": "3L2Tx6a4uF6NoTaadtfL4dAUwuWbvU3Q8x8pgGYXJQfu9Af4mXsLjGucyJZQi4i6QgeatGi5GFdm74ZpWox1hdPc",
  "key33": "2abhsUwJqM15LX64KuZD4y5qeiPUsqYfvbRQbWsf4RPQGawRnfLvraubWRcCj7nqTV6HBtF4VJP7oTavQogPcrzg"
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
