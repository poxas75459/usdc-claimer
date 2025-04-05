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
    "3e864qJbESPHR84ohbBPgnACxmK7p6mXn5CpgjnepckJyPBbGhLa9DU14eLSy6fZWpASQZYsq1Ri32D5HgKVwidA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yNLvscNRtsmjPuswUMjXpFbW6scmksoihTMWZtjRYbaCiAppSUAjuFcvWccnHKy92xKPYUKmV8Gig9kykXCwc2m",
  "key1": "24ZoC2f4L2u6ihvxq2ZJx37FD3pC9h2VySNp89UpshiXnWydfv5XEEgz7nst9kMUcSKCQvQcXYKRjBnAsfWb6NDY",
  "key2": "3ZMpQvYbdANcTZszYKG4xDjXMJwFxU7dk33MTiwdZGYXhbhnMasa2Gf1bQmFDVhMtbTyBVvVqhjjVcJSPDq8QqBc",
  "key3": "1Ty2Df2kcstgzgJznbWFNQhrxsQ5dxt8s8qoQBjPCMFd4X2yxgvZyeTBMfxjdrrnpAvHGMLRmRK8KHDLr9ivxem",
  "key4": "3uB63rs4ai6LDKyk6H4HbboGcdRisi7wgeQcK51eTdKiMk8xvMWsQuDu6Sv56hh21bCVRYhhuECNVGVwJdJLFFVW",
  "key5": "5kJ9Eepq2Tg4FthQGaJJ1VCFE93jbGLU7aSGgisVB28e84isQBGiN4XQ6UnCnyDazdtWEtEwiZAdkKsXBaDjiiGw",
  "key6": "3HG4KR8M64U1aexNGwcnjsVCt7xVcqZ77APgrtUt9c7VhCk8XtwCgLuH592SXvckP5xZWyKxdB91UQjTbSDrdtye",
  "key7": "3Evv9ksZQ6Uvnfs1QTj79QDToLVhVinVAocB5AMZBf7j2RtY9yWAxSkQGuPKidkUD3o7sp8VXyo8XBRAgCBkKwt6",
  "key8": "3N7dWPT4jtDxPErx6L4fy1unJ6onjTjW4gyyzMLS7d9uTuyYEsTgUavz56cKQQvX6fZGwbfwLJ68FfTK4hGmHNU3",
  "key9": "3dFaCfvjWW7QHw2BWvfzVwnaTN5GkTyXRqj8LiFBSNXpAh5dvz6FNo7sW2ugn3J3poen82ABigZDASFX6j8VLgEi",
  "key10": "2Bq9nSco1HevAkFv1k58wkaWcwLDfYBsrHAzNpae9WExSCbxkKSCjqspnxxJd28Ek5qiEEXvfskoyxZdS3Rn5etk",
  "key11": "3StnpB4xyPtLQDBCXZc2sLEercKwme3jEFonFjweny2THWD7TUxJmyBWEq5jpD9FMAerjBX2MH9JqSFbEr9xMpFh",
  "key12": "BnJfFBwqvT7vi6bHjkBPX765fRuH1aHJpA32RxcopL2Pj73ATXjNrsvvpVx8BUNQsM4JHDRt35JFcfwohWuzPtW",
  "key13": "2GZE763WKmoYdh2tYWRstmM4WsPT5Q9QR7HdqfsyDaYP9LQfBeXNDcoR1Tvw4doz9RPBaBSfpZ6wWZtNEPvdcgWr",
  "key14": "MtWxAViJqT2Sb2h2tTQscbMwKLonFgrG9PcpwZQiYyssVPAuUPnecrUreEX73QcDa8CCnRvjZ3wbr4sqYpPp5wT",
  "key15": "2P3aZqQSXR4iZDZh39LP1NBSwidjW95AU2Si7HY2ywhtEdnhYmC9TBLwKr5yvNYJSYJkuco7WfUKSzreXJcSG46p",
  "key16": "4QUUz3Rm7BehzGekpEEipb8GpLLJF3fZAXKzefqjxXjMETmpzpsi3gU7HtvKizqUST6fGbKx5wZq5EPCz7n7LdUC",
  "key17": "4AEDXGNeEJribJSvg4AsxsLZpR5drpTaB2QgXopvAZrMqWDJ3vkWCSceG3CfkjTSQnQuX45hL8LVMNXwK4EWYMos",
  "key18": "2sW9LwjUfKBmuq3CUgmgBWSg4b5uRJkjDne4A62SXEpKzB6w76bT4T4yyyToM3M3LYHFgGQqTGkrFrgwYthH87ME",
  "key19": "5EnMirWiqUYY95Sr4geT6sYLduuV6rAxdG2Dtc6B8nikJApb4754Jc9tGgCGjDx4x2vGtfmUDsbVHuNXDLqHiiAi",
  "key20": "DHs64AT9uczonZFV71gvQFFy4YnjfxbR7WLNU1i4wLuLuPBPmjin9YfJH7ku6yrb7pDYmNMrvGjWzPj4r85G15B",
  "key21": "gRh9Y8E4TCbnL5QCPD4gf7n7ZXjfRzSnS8wFritxAqsfBapH5QvHLXGiNi62adjk6BvPzWbrXCaNb3kXs2FsGg3",
  "key22": "3BwruzXNxBjWfJ6yyzWDmbvqfcARNQN6tEkBZeu6wzz2UFk4sSdjXkAYfrTJ6pisFvDUmaDo5VJqtQzZxMS83YAr",
  "key23": "5Co7CGu71iHQ2fvsUt8iYnRk1LrMNCda8ddgeCjzdvWykec9Q9hVSgQ8bmdPvSpUuHbpjX2HNoSh5QSDjQtgY3Fu",
  "key24": "7ru6AxaP1Diyc8MeywVPJVdy6T36eiyRDtjwRrZJYhNqmdsKa5WdwP159r8aSyJ8FCmYFYkRCArEmr6XXydexcS",
  "key25": "3nj6NZAWQn6g3Fg95vruLe6qxGvWFtp1A3ZSnanG9wMnJtPrT8jcMn2sD2xZUuGsgvTDnTeeAC8CjuqMUzd9H92F",
  "key26": "5aDEfd7XLPCgcQV25KMTHszYJHcyMU6if1YprQwxFwoL8sHYQbDgqdkZvBw8tmqCVyZgkAqgNApPmqW55EAQMmPM",
  "key27": "5XLiNPd3ayhhbzH2HLakjtx7wqXGt7oFZA9HYBiPFExtHNpSAwNNWM9ZQVjhcr6yhfSFehS26hFka8k38JN3Xcfh",
  "key28": "3ZHoFyScSWrs4yDMQkswyKCBLhYY3pJcTAntizsD1EaJoubmoebn7hfWGSsXmN9pKqva8cYGcg2SS6pPxj3AExNr",
  "key29": "4qY7Vvs7uTw2KJhVGuuzAmE36nsrydAkXGaubWjAiuRSoXDeZqhvmSknEabintgg5Sq5tnzYFqK27tSCq8sz7i8L",
  "key30": "k4qUPHL3qPExxYrNBQQmsvF8ALg3ay6JgfdnxqaCEpSQ8jZRCy7vbR4GPhtZbHwLj5cUA77iZqQyr1PB67LkReC",
  "key31": "cvegP1GF8BMHC2hvahjoDz7gADEydPufeSnnctKKxap6nUAASeTLYGEsfHfsmTdAiUfUhsLi4BxXgRuEYBLQSZL"
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
