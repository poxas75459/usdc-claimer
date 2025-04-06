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
    "3gFELNuwTUB1j8dJCsvzvVakFSEJCBxcbRPoDSS3PYBgbQPM6SKsKcDJRD1wxuW5HoLwHquUvbZmCcx3xbqUcf4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vfqeWoZoK9JdyjJjX6iLQWB3zfo5JSngvjHisiHetdVwb2H7Wru9WWU13YnvSoWL1rznou7BkYRPeYQzs5jCSw3",
  "key1": "41shwK5B9u3xn5mWZzExQ2FW2rXDFBbmRk2GLv8VnjNPvRsQtVRQJ4kz4XDFc6PmpxbwF5h2Xz5iDwq8mZfJs3Ny",
  "key2": "54UEoHLQE3isnSQfEdttmUDz1KbAcXHx6WD3N2i3THiVZZWJTwRKgY5pxHbCkUDLY7LaSSiH2Gj3pHv54VCu4rCs",
  "key3": "xx14UpCFJ6Ks5eTXxXPc1GcFkr5VT3SyQ7ZayQ8UEjCPdYyvQiZ9jFbPshPLzzaENQ9eDuw2RJ1y1Uc5HYDoDu1",
  "key4": "5utBqx186CsaL9NAap1Sw89WGRFNsFi9sRD8nTQunM27oEEGv3BhKBZH3K5epJGft7gR9Ym4iyTrdPDRnGNx81EZ",
  "key5": "4a2AYPKjG4Y2WA5dqTLKuPVQXdUMW71MnsAkHo3nMHsPn7vWGy9XGjj8nrban7a9BTn5dHZCzKW92e4VMoMWjYHB",
  "key6": "2P4DUZJaR8ZCiX1Mad6CmmBhsBPWercQHKpqab37LD7xvsEEbxHqW5XPoGkhGF9fmMuAMW3HQ9WZBPgs7YBqEoyJ",
  "key7": "2YatJxLpYCxiBL99rn9iBMHUKSoCQ6PTWc3taMKhuvvdcTTaSsUJGq5xF1y8CqGKsZ51YNKS6jXBamHA2Jg5EePX",
  "key8": "HfPBT2WZeeLLmU6fqkjMVhScPuk8r9Gb9UPncnaUJbsJrDetUcPYNaugccguPeQjKRBvqPCMpdiLkheKAej9U1t",
  "key9": "48WeQXr1h1MErHFSXkJ4X2YMjUK5bw7pkjs678VcdG9Px4HCFCjXqvuXAGkCwv2zkdqn5E986Q9Tj6Yrq6zyGy6R",
  "key10": "39Gkn7utKjPqBnhecU1Rw2PRffPGHNxAvhff5tnPwAoguSbsLvteLPsG2viatqvP5Wi5dkLo6cVThhM7c9kzHdgA",
  "key11": "4NjzbMT82N6NLzjaZi7wrndqtzHEfhq59bwfTkTpXzYa7RSESYnXB8f7tDrddNvqftnfNFxXjKgBo1YzTaxko3wd",
  "key12": "4U8TWey9UUWMJtDLvwehxRBp5NpyGWP26KeUtwDMH281j1WDNs9sCA63CA4yChvytYgSvXTXT5Po2MojUBUHcY6n",
  "key13": "pQ8xriGrp8ir8keyAhfyrVRv8aw5ngCEvUx5AnxdX98oBNp9AhHNArYaSy3x1PpdJtscrxPdveFHhoGeGUVzvnR",
  "key14": "21AQSA6PyBQ3FitdqN8c3dLcDtAtUkVE6kR76zjhWJaEQYyg9CASUDuxh1NA1easwvgUuPbbLS5vzQxtriv6kKdL",
  "key15": "2o26am3dpdtMkENcUmwASjSiM59V51HBLd537jq2xS1cMubTwDfBYZgvAU7iVB6fWbZmuHSpTz6RbSN5Lqz8896h",
  "key16": "2xN93PC8ZrNxNLffEgZwKS9G6r24jyQb6S3KYykfH3f5KUuC488wmZY4Hwsak3jhS3tKufxRB31S5i52ucPbe8ER",
  "key17": "5SPQwqkWKWxhRmF2xPhcfR9sgYv7uhkcALmrVxjzMzKuxqU2zSEdE1qbSpWx1e8aoMMbYeqMNWPJMyoiZQKYx56e",
  "key18": "3E9iCEmtyr25SG7bZ7pNvCExTGFn1c75iPM4w8xPmJZQbgr2jsNHZ8mwBcMnPu54qjaEZvELAmQFwE9UpnVNsFfA",
  "key19": "5Jka9gLZqRpLYsdLphfao7TmS9KvQcMAEVwzMbm9UAuADa7TYeXKM5fCoBvuz9HDYwn2bqY6mBQ5BJsAAu1t6M23",
  "key20": "4xmGcwEPU8ig3xRLyzpXMZnRNz9bsCxPxCgmTMnrQSCLovqBpoW3LNgHkbAjbnowfMioVWZuBPADZtHGLh5baA7X",
  "key21": "2LMj8trpKfGLWveY5ETFx19UMUWSvFEKskH71Z8phw3CLVwW25JugKqSbbMX578fsQm95LZaAr4Yp3YF6B3AoFor",
  "key22": "4c4qEwrQyPB6nhYrmP1K5YSWrvPXeVB77re84PxJinJH5iMmb8p8yQNJXfTFddMhCfNaUYQhAx4pDoFHonzeSTZB",
  "key23": "5zH9BZaJqNokdMUiGkydz4sjj97hdYMXcwmGeAamCgnhhYmZp8ZhkEbF6PE3P9VUEdAXtCUiVkUSj3poKoYxtFKD",
  "key24": "4WtynUN38Yh39FqTBPJdQcCW7Bsgdfvyp6C5VoQQ65h6HYu6wz7U1pxLgRebX2n7MwNNMudwLeKEDRhvNnArD5uS",
  "key25": "5jnZvpqsPVHiQvky4dEeP7YiPexqazB8iNv2g1vp8LETdCgNryPL8EpVxWt8XJnX6XphfwwwWabDJBqcMfNyNunN",
  "key26": "2AgBN8eTAgyi6m2Vzk7UQG5JPj8MFmW6KtPKcBTUMVSbm4bU3YqXSHvZ5nnHNzJyLgo6nFijESJueW5khd1oDiZG",
  "key27": "MqEi8MAeZCuq9EH7zLAR19SikzVzHSKjFPAPg5aQbX7hePpHiHu3u9SGkBGbh8CLw63DusdusdYiSJjBbahovG5",
  "key28": "ypd2JmFcrHNyE7ARme9kjrKNkhK6nLBz7c6Ggh7Wh5cNTuuCcX8ECHHm3vU2AE5z1zaCLXvyjstmBZ3gyzic4PH",
  "key29": "2uYubWr8PySUhYPSe21bQHiTkYoaJduKhu6Fy3WU6mukhApPh7Td6UqB39gwYedk2vQpZikt9PDFPfAYVrCzmNcv",
  "key30": "4TUhcJ98vqzdMPr7DBMVPT9Uh2GbKzHar3HPPCzAmdhd8THL7mf5B2Yt6cFWMvRWJHvLLpEEbbPzwZYh5Qe9wpdd",
  "key31": "5X8QewH5PEVsvQveEVWqURkUgejDzYvwWD3NkeCHnPoZiCGzVsKbtoCVzTQGRHnFM5udwZiCFeVNTux11szA5oWx",
  "key32": "ezSDh9ZLamYfmctbNZp4gErfBymcxrnttQiNSjKbCZhieUyzAfAHZg7KMFc8neWzTVKeREjwhJzigeW5AaLGuvS",
  "key33": "5Ch24L4t8SXtZmQAEJwYCywh13xixwAKfyFtpMKmGgHaajchcMSFQx2xMCiya5KSwhFzMqTdVVWeED2SYX4vZknH",
  "key34": "77jKtfoUuwQkMw2C15tDoK9eFuZkzyH9Uqy4kZenEJX7NMfNK9jxvbbAJNXQdnzAZjTy9kpqNbF7Xs6g686GY16",
  "key35": "32uaMGXNydNe2S1bNxCWnT7WF8K4qoLxQpmGB5WyNez6242FmqcCsrhrg5ENTA8UK4FA1g4Z2NpnXMFtNhGh6oiS",
  "key36": "3htR3MP9hJYH6HTnxQFvbTCupfDEwLn33jSFHr3zKXWcoMyaNuQqFHRSnKwderBuGZXJ6wQCtswi3WNR5GTooQrs",
  "key37": "4eRCYfXqcuqKB1WUVSdo5CyehgD3bC8ezzmnFVAoG2sMMdz6zujUU1Vy5kYtfesZptwrt1QmHJE8PFMMCg7WnCub",
  "key38": "LGau7xjx7dvjGd9ujFoJCgD3oJ26LKstYXy1g2EVeKvzBeA3ZB2uuDk8GgawwsPouV9NkhXVmBchoRLjrRu5pR6",
  "key39": "126CqBira6JCjd2KTNwjuxvvxtcgCoBe4DH2TSCisHSMCP9cb3vL6MhrWSTeSwccwLPen54RC9tZuJVxVYhHJkcz",
  "key40": "4pPwkD1avZai9p1CLb9UVhzmckhj5ZiiwYXYikyzmw8QWg6qBEVs7DMjCV2uP3pLhsGy19HWDY1Wdz1WyzH2NKRt",
  "key41": "4oWszcmYYCpRowRRb4qAxbCP3J7zNVKa6qzQkosjMZvSa8iD53HdpsBPSN8QJUpP4yHNi4zKuHtJVLRnvftn85y2",
  "key42": "2edFsEywbcWe2q7aeEmpYQgFeC4BP5Cz6vudPx1V9NPh1mJvwYwUwvEP5ZT2FkpuDEEZK5APJAxmLgufW42aaJHr",
  "key43": "5eTEL1DN3c6UG35fYUiV16neA1W4X9uWD83725eRAPsjKiETY7ioktBeXfhrHeTCZdfRcJ2f9vBeWr5KD6owGuej",
  "key44": "TdpWLm1moquHR7rENjG7yH9uoBmabc3mniRTzb2mvo7A7yht4yE319tkutNHDcNb84KD7kuCKG4gzivqFNbaTAW",
  "key45": "6LYt7ydw5ETKvX6vxr36aRAH3LtWacSESjiS9ZLEHp189K5QUykVt7t8JtskFJcGwCGn6N92nhELXHUffRFTP4p",
  "key46": "3Erz1LmMpjPjX5mYbGd6iBobAqyAE2VNUWPwbse99EkgWDXDH8FSV27RMjpw1FQ8o7vEjcB1cWKyoW4KAvvdoCcx",
  "key47": "499DoScNe3XbSCscztWwi4myg88FttjmyQrQ8VF1kZNwwqtE8WkW3DAxztatbrfk5w6SwhzqT2Bzz1szB9uwiAEf",
  "key48": "3KxCwWPA6DPKSG5Y6YsXxZ7rjf7YH3EpPAhhZh84dL7Q4NcrcoJWTFApUn3YnCNhMwwBqwrhBFVeZgqEqPn3yjgp"
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
