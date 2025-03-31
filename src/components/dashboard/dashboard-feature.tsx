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
    "21GeVUPhHbvz5AnHoVJ33GUt5m7XtkMUkzERhUcssuqVY7BVDac56RnKPLCPXRAen5WKu9MuyAMe5RRKyL8PVhDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LdXg4EwgRheedRyVDx1jdezbKsrj9x3AUFtWTEGR1u24h7dEvy2yBRVkqqGPWSCwAPyK83BiSW8DuEvp1s7mRB4",
  "key1": "3V6XSgqPnfwv1KuDG4nYwShmDvRXVKSutNWP98DpW3h5RtxybnyZvzVb8mKr55szX2Dp7Xarqp89wxJwbhw4oV7P",
  "key2": "B93ZKkkcj19poTaezN631d2ZwLsfT6CC7CKgEuwSutwwvGqjXL6W2fyG7DzySLkAJrViYivimpUoAekMQoMygid",
  "key3": "oXU7zyFT3LmHwz4ka8EoCKpZS4qLV39tpetFsArPbG42tLm5Qx1wi4KuD7JySh8FS99U2ZYc4XP8kxhtAsBVYfp",
  "key4": "57BiqNt6Pn7WDoy1BzJV2pcaGLC5tBQh2ZGbzYhgfMdP9bHr74Qi8PdTk7MrjhYiCYgdaVzNQ1BT3qzZvNUNYXkt",
  "key5": "5bCK2K9k9bbpfE5iCg8BdbAEVUmrhg94mPtA71ye8gaJQNM5nK2iUW6EnxzXP3ae3QQwTKvwPNGZ1jZAjtgP6FKx",
  "key6": "2hkiadtbvDmnYf4x2Dmk8u6LbEj5DoR8qKKt8yXGiM7QFtQBxNWasuxDPTqSZo3wQRAScgBLNvMDCmN6UC6Bs6ds",
  "key7": "2tPmUwKzXyk8xcWHxASxUH4YwaWL7RZiofoJqR3zZKVY1MJ82gs4znYUViqczFWiQtQi8hUUFfTMJZFaVc4f8aSL",
  "key8": "65CBHa1BKvd8fA4Ew3XVjpDAKuofK82HKZeWPkmWo7eouPuyGVBe8itfNWhXvZDFJh75TLUatj16zaFFURgfiChC",
  "key9": "2YJZfMvjyEwTnmoVwrxfwjyZApWo3WQ9XXrdNTzHhzG1RSNUdACLNBMmszYsMqk5hUEgVykTtaj4CAUh3TvB9Uty",
  "key10": "4X2hAH67ycuc8UCgSZsLwHviTMi78dSBePJF2iQkgkzcgkDAuk4PD4xSxfCZcDkSGgvH5wNopgQtaWy43KUe8Fo8",
  "key11": "4LNVzGxhusAoFTwH9nszftjcreFjcQLg5WH1ipFs7sSmvPPQLjNJzkTpTjGe9aatS6HZZBK2w8Ap5Ritf4KDDPQH",
  "key12": "3mMqhxhHLZj6ucpX44CcJXb8QMGt8s6ejN7kAL915RUjcTtSJZaF9hUkMtokEFFQqi7pyPTFoQKBjCyaSLnE7mmG",
  "key13": "3hZi3WtAVJns9GESsAmoW82MNbHQhfyNxS7PVctuPqXqcPshojtepCPsh9odechRMVfY9UmYcFhZjxibNivD1Tbf",
  "key14": "31zC7TNT7iEnKmzDL8BH1mTvM7U7bCjwZNGG8DxbhQtd7fH2tBmg83RFknp2nNrCKJLHqwTHq1jfaUBgB6cYeArr",
  "key15": "5bt8D7QPaiL9ETiwBSpYdpTREvsY1y9mbTHXuwo66dHkAcdbNqkoKMAEmA7CqooLz51UvE9rzJBcZdoopCT6TLAT",
  "key16": "5zV9ZFYnfVrvok3RrYR7Ypgn48dsTtiXNF2tuAdrRXg39Fx8vQKcCfcUrMhdVsH4RvesUW9U9fopKVDgFYmf8gqs",
  "key17": "2GR7TwVGYna5munABjuscouR3SkjHrQfLX7SkML1n245bGKWnW7Mm1EqAHX8xZFo4vNf16zLsCrv4NHVGxpCyNdv",
  "key18": "257twnBnWHbZYqX9AZgnUU1exKbQmJezyfAdVKkbCqYCK1DsSmV1HKazzZVrFdrrmejcupimXsPcUj7Eq2YdhZDC",
  "key19": "3K4D2yukxE4E5YuQYhckjFVEBvdUAHqEdXmwFgE2tSix9WJYLwXFCrCQXXQaS38gYhvJqtzkadnAf99PSCUXwRon",
  "key20": "4iurC1zjZ2amZ5SJ7WS4SsfqguajVGwKFvNWXZdXYJJBK7UcwZjQhvYY5tVnMBtFusNB1P3g7KJ8wET2kpprUBZF",
  "key21": "5nK3M94XCreW5is1QBMRCYM3nMvVbu45ja7bXu7Ead7n3qYATRPFobEDKLnq4eAzG42sk41WbKuuCAmmE2qzi67j",
  "key22": "5pnXvfeD3bX6Wzr8qK5ERbX5enr4vMP9QuN2TqF37Z3KhPjXjBvmzJdZg4thmVupDPQ1CeYyFPd25wyFBiqt2EUy",
  "key23": "2SMMfa7sV2kdNXxnMsV7GWFUqGrc8uwbCRV2xXNHjLnkW8yjq5UfB1M4xnDV119vekXp7gJsJX65sDQT6vw2vDro",
  "key24": "2WRc48ZnL9399ou2zPrKwMtgRrZ5RGE7qi1GAzswFK1Zk3QfLQvAyi3bQTk4WNjJAh3Vf78dSZ1sppZc7eNPvyyN",
  "key25": "2uEULQkV6s7yYPrx5YeFUp1UGesQTAoXZsgAzLrhBhQ9RU5zdbgepXrB9jdJiGAXVcRYMXvKCNFFrqP2hi4cagRz",
  "key26": "22KYFwWWUQoU1NeKRiMqsMJh6QyNZQkMHMK3SebeTDGcxQ8bF7W7ZTuavkRDDpWiwZ7bMXFtxoX6iKCAAf5QkFii",
  "key27": "2kqFtZSEoxFrft15oAAXnwFqGEiwuLLZdxKaqQpFYZNc7SLxG7C7AtzaiKQim9znHzJ5XMTXwgwPGw8dYPswaix3",
  "key28": "22yGkvsB9JsgKzBbUMrmukZPdMrgGBgRTU7do3BvmbE6A881UxmLrajxwtvZbpKDDgYaLmwxZzy2xzBaajk3a1jd",
  "key29": "4gF3zmJwGTN9Jc6ERAp564ogBuXtLmizgyJYhQ8B2ipdB6tjpeBaLRXhrGN75K1rbMiM4Tc2tNzNdPQ6k4JcPGk4",
  "key30": "28Js6sYQJmfr4W7n1yyBP11XoxNMgx8QKTn3ZQtU5F9dQya9R4Qz7UQQ51HSVTZfAYuKCi2u91uXgYY5vazRLArM",
  "key31": "5rsJwYUtByjhzuarjyPhSvyEuPzAHK9x12wmbGcAFsneJoay9PTCRGmSsALy5odN2Wn5u3SsnL1mZ6AoK5Apq1Ko",
  "key32": "5EtbYfJ56KNhKgwRF6EkBgg5LsgAtPedFHTq5wMdnjqpgGcymp4RFDBj4FkGYDNd1QyQh55wK5bZm8bhxGXnXetG",
  "key33": "4jE24CxN7KGYema4fwHXhAiK2sN7KwJfehXoG3NPWVpDw6XUwKkBkZBfUK4st5XA4b2QP8kAQnyCUyAL4tZuzLSt",
  "key34": "LL7aS15aHmmTLde1LufpGCvrw5v7xtUXCRXoGWDHdCHvhej5ruZ7BYn3ozvTDv2cjpe6eZ5UhY9jX2yJYEf9x6H",
  "key35": "4VsmweoyW2BZ1uq7jHx6R7wCV4fEyCeYqDG4dPi5jjk9rP84Cntugnu1Ed7ky3dj54Sde8WgrdzkWaS6rWkezr6D",
  "key36": "3u2dEHYQsSjZzF5cGhpuc1zJfUvXpfC5gGKyHFVDebApM8aErci5wAt5n4uuaMtMZzQDHeUSJnrEQcuKtC9MzDK6",
  "key37": "475iHZocwULnC8UTFWKU4DZ7SRg7V6JM2CMWfQdLUjWGa7HHhyKyfo4uifBhovNwKKtTEK3QeBV45kW3iQEeXgw8",
  "key38": "2eSKfsMGZ3Hn2cWubqMS5rRqDFwDjdkdx3WnzAgBjzzW9QAziSoQMn8eRCQN89zZ4nqaQSWfRqnr526qqg2kXB8W",
  "key39": "2P26mVsLqwyBu3f8ZMCBJo61XN1ejP4pfEFTj4dGYBRoe7SGxZXUuffeGhhv95qjzW69UgZygMFU3krY83M6dm3f",
  "key40": "5mSJuG935Dch7FEA8NisFGcx1mGkPKqSJnPg6mbt7s48wMiivbaBufQBbxo1h2iqBC2wGwvWFdP6Vj13g8q71MiQ"
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
