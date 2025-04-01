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
    "3Q9kYYMC6HWWvP3etfNcyAJYN5PGkDeh27jjZUvFQeV1MW9kyQj8P8FyuXwbkZu79ZHVFbmpp17Pt1iLwVPJESfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sVefMmaqHLtr4rZwPfhTkcxnd9v9XbyKBJou3qGi1L7wvQNHsTeysBcW9ZcZpnrvt6YczSpLcS1H2jFYvdAuCC3",
  "key1": "2WpCRGgjRpL5gtURu4562T1TcFTSBcYfimw7FWXC2RZoY38X979YQ7gfVgdUEYB5SzuBi7ty8nndbsyzsTPtLEHX",
  "key2": "3SexcBAzHVBo6zAc35GxwyPkJT6nY8ZbnkKjCFZMX8s5kkWnTfJhs5Z2kqPHrxTzxUthDBKYGU5X8X4odeZGcTgV",
  "key3": "3LaJd5MkHydWT6Fh9P2pxphYyPzTLtKVJN93Ndo95QYUuQuEkj4cypmb8k383ZV2nPRcvsC7VDnMhM6gLcTSu3X5",
  "key4": "2s1p5oBbx1j17ZEfwQp9s9NTgv9rZBw9zCv9UuoHsgm2Xc2gJ6ieP84q7ofNCFxG731m1gUhydSTxncA7bDsWZQp",
  "key5": "4TisewUuui2aB7cGauDnQkbSXqZ9mf62RcXEXmYGhJ9NQxwZS3B2iyxsGAsFKoQZ9jWkSAvKqUpKuWM4N5rGrY1c",
  "key6": "4GUiKtFZ6tQi3eFo2UJZXj9jBBUkZUh5sks14Hq3HNeDqXERNwKp9RcDXmbWGGu8GkQzgVQdwMPib6nyRoWhAkw2",
  "key7": "4wq5uXDeGLoEAfrLiNt7SUMgqgsDNraWWJwB4YAUFDhmBocWQ7YjSJDS34fA2uLK1uDC3K4nvBNW6m43fg8WLiFn",
  "key8": "4wa5ohDrRBY2RtLaMsdST2qiTsEt5BwYaEM7vqXC5ndzCu3RUXwR4GoRkquvaoq3GXvzKKMd5uHsthHT2DSMgWW5",
  "key9": "55DHJ3oseU5HMpPxCMMN1Xs8v3Wp2j8vZErNB9SChG1MViLDtivjRxCAAQh99WcEvGkh5VAPxMEvHyczWTsPQXSe",
  "key10": "d8J3oVZq6JA9x1t3pigiwQtYX7ZArKi4pjg2cfnf5VRbk6UCxQYnKnnJy52Hxd6bLS8UwiNBhz83MqcbVeXY87q",
  "key11": "4B9YGHRP6N9BhDdoj3MBQ1Yo191mixmi34zWiKEKo7mM7Ei9Uy2Ft5X1m5Ff5amRQ8Ri5wkrsiSmi45DHdwGbuUW",
  "key12": "4yEKEKBjcHisRYP2tjxESFprQEJKtD9PkfKw5EBbwtLuS3roXmjU3jQF8pMxYTMVhKYyaei8jCnsWsZxhvBQgW3A",
  "key13": "2snD4xF5DSwwtufVExcuozLkw9vWBjxvwWfe1y3me6yMNNph47vzXD4ECrj1ZwC2d3Gwt2b2C5MSoBDMWBVsDAWj",
  "key14": "3hWa9KWinjn5K1ikFizC3LtAZwBrTUDJqp34rCr65iYuTaJD98ozPnP4Rs2QybBkszSU7rcjeGjEvfLbEBa3gMKi",
  "key15": "pRL8Yd22Jo9uDrXYsgy3YUGGA6vq76YLEGwFZbxSG3m6mz6aeN28E3ZmSqCo1AGNRatJs5XoH4bLsWQ7aqn42JP",
  "key16": "2LwiCFvVg1j922KuxQQdxA1oCC85bmkVJ1DwZQQnCVAiRooxgKCiHkHgDQGQ16ELJcZQ1arVBHNWwEvwiZENWmzh",
  "key17": "5RSZ5uxxe692iMD9bW5zgzWLVUzAFaNouFJa4sFRFkcE3G93f5RCXJK8Wf19bTcdmXNNMBvMu681af1BtrSR1UvM",
  "key18": "5jVTGAFzQntjpfgt1TPH2iGnzpUtuaZapkNKp4k6Psk3ZRmrRRRc9KXmh1WfcQPR3fe78iT8Wwkeb9g547UgovSZ",
  "key19": "3VPQQvH3a7sF2DKFgfy3XwmANheG3gTB896b4aRk2cUZS9vUs3wUBuYGhZvw4hmq6orAg8vXsi1kt32cb6aybjgr",
  "key20": "2W7xBDb5HUByZzY2QtwxEAo7rXMhNjHMR3W4BD7X66hEL3vn1NWgz1gR5JXTZkh9SiSBy2pbL2S9zi1zgc2HpSBY",
  "key21": "2FP5a9wAkKKWGcwFywnC95aQo6bbDfMXcfceU2UcwDAjFLuKKwiPcHcCtZokiTwKjMhdqLdKqu3x2odurMN8eswg",
  "key22": "5YaG9hW96hArmyNrkFobe3EhoZ2dZxzKRndhdRcSxccWyGnXzt3iQ2U18SPYcgduLNfkC5DpbFN3HGQjysHT317d",
  "key23": "FCVHioW2s247UCA5hC1Tpc7gZzPddcAJyzP8CmedksTb1QQwtJUdaeMF47uBSRpgvgMbqcN4tcgt9CuXJK2U65e",
  "key24": "4Lp6Xg56mJyY1B5HTEZryuDCMJUSEq7TSw6599feBtVKhREYEVyThzZggg14guLU7gCooYyfNLkWCGgWVTYYxQBw",
  "key25": "dGYfj8tgeK337TeJhtHbmwDZKBzjC9u7kWMGmrpcG2NNqBh4FqUHbhiiAhJfvTo7tGDTVufKmsVuoWifCrweMCw",
  "key26": "32u7dxuSda4icF3Z7JTzB1sgUCRQ6MykoTX6UXAmTPN8dudSzXcvZF58xa66BqEDQMKgHhoiguRG19qEnH5bbTmz",
  "key27": "5wcDoPx9uo2DoJrzApTUzxwLz9UL9A56b97foFuyUkmsxHEjy2ZFjYUzcZR1kQBCCVcS47aFgg8nHtaZ8ozGreN",
  "key28": "4XEosxL6c5Y6wvz73C5nLB7uGFzV787J8eVWFRQmjxaZZHCHM7hzM7cb3CngMC37jDSv31RMWXn7uXmMBGPBA2wU",
  "key29": "356D1bi7wimDsKxxJE8421fciodY6zHM72jfyE7WE6tFPT5RuwRrFkPwg14k3tPqVEC45oatJKvYCRm4veLA8ckh",
  "key30": "55xXbAp3gX4BxTn9BSyLCkMX4dCGvHune3xgYWfKkhRxRzV5x9mWuXbLYpXrdGHG1CiUWSaLh6osVwB4SSZcsor3",
  "key31": "5UnWfjDVB7U2fQTaDQa1m3545KmXiSpL3rsbSubdPj1guRUDi3rcKta4q8kzhhTpuUUNGuA8dRjV8VuD89Mnttip",
  "key32": "3CCjEBJBXrVxxkAMWXHxV91BFKmKFwJCU15aBSZmhfM9EYEa6W6fumu8pph8798scXyhVRA2Jy9ibzGQfyih1SWg",
  "key33": "4P36Ztz3YLzRpiDafJMgxRHtYzjCbRKYNNm9F9ujGqjEFJSGxr5B7xoqzXcPS8HoascPHPjXQJcGkmVbiFrmHBN5",
  "key34": "3NH3E9ovFVz4HEZU5bTZv1GX2GLXJTqyvYBhmwAM6q9PgxbbBxSnkrB3kWWFDVCsx7tPhtdZNzPof6L2kkT31KoW",
  "key35": "3oJz3JhfdGYjdEdLeJxhrDBcTtrn4q6nNuwv3EAsiJrx78CX1nYSWrho6Espj3viZoCpxSLtiE9fEgxQ5U4HCukJ",
  "key36": "4wgKvn9Tc4tEdxnwjFMMMnnKNV5PZvxbXBtRDZzmnwwjZBZCXTjmwszZzWjQv2TiPgvHBaBtScrWYr1XZQVXbysU",
  "key37": "qyVmbCdvTzDaKEHxBZUoaDnwHGTZhbdVtrnM8FTg1ivdEK6iPF74XXMQThhXHuHigsvsrt7EwnhQHVhfEryfXpd",
  "key38": "4xBuqQ7vxE36Htxpy94gwBtcviaiTraZ9CNfqyVguXJkrmtGqgTapwH8C3YHo6X8uW9CPfKxanfkgNbV9VTiwXVD",
  "key39": "5NjcWxrH6Q8ywSN1LR2TWvHqRn5TCvyG5dgGaroos1FmewWaksp1wxaXBpNWtDMUY777X96beJqPizKsTU86D7nT",
  "key40": "4DWKWD17CgLpDcSjsYbwdhi37RnFXiZs5yTAJXF3Kr4pqvHHy7jxcCA6xA9xYpwQ3B996G3Zup5Xq1iuBJmL5UUM",
  "key41": "5NHP6SJYNe7HTEqjbJkmugpu6muUhr9uh7AG2p8WHXm1vdptcoqZW9fv5e32Lv74SHkd54A4B5TwfHBU9pmaBJ8c"
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
