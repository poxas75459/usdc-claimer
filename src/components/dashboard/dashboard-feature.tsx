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
    "28oDB4MRfJUetdCqo7VjN9VGBu8fyRNudBJWpSLu3JzFPRoQNGRqNceCkKffaM3CHRkXyjci9Pim5oCSATStsCYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VMdYSZccziaRMgjutT9YZXtWGsHpq8fAQN5E9VLye1ojVzHvLy6VbBr2qjGYFHEjCuKiW2uypuu5bubZt8c85DS",
  "key1": "5UaFfcqZ1YvsvkBvmk4GUaoZbKgjAE6xBcDjxVXVUMWgfF5sPeAns6KV7YQjmj9Y9KMSJuGceSR5qZreqfzR7RfK",
  "key2": "2pmvqa4nsPujkG1mxBF3m4VE15ZqWtLq123HNgNoHFHNieyXadGBAqRuDQTEbbr1m2AxqEy6Ckhwn6r7CLvmBE5f",
  "key3": "E8RtwwFeqViXnasUUvLdXsQRt2DdNJJNSqqWmXHoqiRpEqo4yqeSMW5EaeQAJ6K35wMKzFxECPwz92cZjR2YL6F",
  "key4": "LGJ5ARW9eQhXdyh2nH13SArcKjLXHyoYDTDGf2dayYqrNM1BzGWGw56tBGwBYnVHhEQGEPpsfqx1vqhebeQ95bk",
  "key5": "2WUttzQoqSAHhSVJ3qDGzECXXpcbRQvCXab7nQzFrn8GFgyBebjCuSk76hNchdEuakfETXj4QkxAwonEFMeAff1C",
  "key6": "4iFxatG3w322KGjWX3SNa8mvqTHN5WeCCpqsMxcX8nJYNSxDneinvaF7Hk69s4rcqeDuvhFH12ctMV9QNsNSrV1J",
  "key7": "4XdouZDfrjibqxUvJif9D52GyDrgfGLCCKDBtD4Pbnk6KERBJFwFXHCKapkC2vUygm9bn3abfNhpVUoZSVeeyhdt",
  "key8": "2WKvRFTdVyhCsAyEGFiWSq3WULoi3Z7ohMKpAw6y9sWdVAapNKv2LHbbsv9sr5BrvtMxYDncbB1p78HfhXMw2siG",
  "key9": "2cUAspU7vDfaxK6SmWEm8yWCFEJEX7QbNT7BKc9NMD9zYmWGhjuZcTN1pRPt25MzWPDh5gEZGAm12QHjRSrXQgmD",
  "key10": "3wGhCaajse5QKHwts4NC68adNjiRammxKZDUshXmLDsmW2qbsVmBiyvdX5zL6YMmov9RzgRo7Ed9JV8p19xXNYF7",
  "key11": "62bNvHPtohaM23ujbCAhLYfFQeF6QqTwgHa6Z9uNgqmcHNmqqhrf6m7825YXwkMDbtPLQHfRXtdiz7Uu7XmngtbG",
  "key12": "ckxjSLiwMXjGDrrNoWXUKsV8J44J7R89xaM3tjmAJcnzjwcsackMtz32Kei2NfSomCqKhXBTUHRApmioF9a27Ze",
  "key13": "2RCHX1dbrFZTME5S8vsseZeByxHMxqH6MumnWxAkhH9PqYSGSyLBPZ1pSh7nmeo3ydzekxrr7d56Lqob4fjjqAmf",
  "key14": "4LpehnBvTpzXCUt5GwtPsK3wqbnZzmL1xuMvtxvUqQ8kWsKtAFPw5txgAiACtyfMDtihad2hdDHqa5i4u4MKsurH",
  "key15": "5akYXXZrx9WT5szL69HTYUrk99K2VQ686PpHLR2bHkjvPcBGVXjSG6ZPPpvdsNaeY9hJSoaP14wLSpJRyTZte9eV",
  "key16": "3486rhBiTyYrRZahcE6KfNReBoqhcGTeHxTftrX3F4q14UMUEVhKY2BeRXpzf9BDKuCLdYrAdJZsRhr556nQ6Uis",
  "key17": "5UFnSnNpWfzCHHom28EAVj8KzJCzgXHYQfGm5dSVP3qb7VWYHF5LxH8t1WF4XtGRsfQeEGgLM75xTEZxaEpE7Zpw",
  "key18": "3fotuZHQbBvciuD7zdbcT5khYmk4fCH8UhxAYxE7BWYsguwQzDcC6RscLzKfKYhuNsnQGGe6aAZZ3XR6M55Ps7Na",
  "key19": "4o1Ws8tfXZtDAppzRAvzeEUML66ytSf6CnWmQWzawJQHqojvBAqVw8gFbfs4Rw98rcinti8zx16BPvSrn6FSh8sV",
  "key20": "5R9gJVnbAmacQt6HrXr8RC7a3qFQTt71fNhM3QRXMHy13whhn78ivw748461jfUqsXquM94jdWWdqWP93wkqjnMt",
  "key21": "h1FQxjG1xcqmKKojqCo9MH4cfUVazsYqzcGcLZcqc7j7UUYbnnQewuQP3AtmabWpzZuSZvDNuiyxMLASCthGNCc",
  "key22": "3PKeYwZXjex8FsoVV4vvuGFkdBw4YPEHPUtY6RojnWUqNmJpZLm5FDH5vgBoq6mqkussQB7hX6bsqKP4i5Swxjhm",
  "key23": "3J7k76HCY6LRha85M7oSnaimKv4UQMz1wEZry3sFx3jKitGJFQcD1jMmh2ewW5L5JZ6iGVdTLjGXRtsC7b9QqfCT",
  "key24": "Dj2qY9wFvjcAGJvnie9VeiGXZqjiQxtBvJh4thdwNSaki26JR1qr5VpH5ELio1c88pfoMWP9ThL5AJFvX8gvJ7V",
  "key25": "2EvhCXEvfY53QmpwXXmxsMiZBkFkgghUqWnB3kotVwYkpdxHwmi1ME5XYaNo5kryi3qG5JiVKV944NMSzLetfvDv",
  "key26": "5vaRtVHFR7TAJt3QY5NpJ8VSqcUP5Y38u9qUgZHWdoxWnXwT9gnc3Jsp99FDjxiKhdkg6KtJFWEani5XqKUfiu9y",
  "key27": "5Txd3ieY8LEHLrM6mvGDJMZASTdz1ihkSfvB1ReoZxrzHWN2dj79KcckMeturXEaUXLbZUDNtCD9UQDDwpGUpzsi",
  "key28": "hVKYK5x4E9xX3DB5UTn3HmiC6fD2A5yHGxxrwZod5CudZch9QpBjtABJd9nXFjfe4BHR8tYSv3Q6ZSVEeHFc4QR",
  "key29": "hLod9a7qvdNZX9hwV8ECbGjbRu22f5fNsemwSJjq7p91VegGRuM7eB8DCyjNHBB1MCudTxzkyihsJquPjyxF9wu",
  "key30": "wR3VzknNpWnkn3yJbYisMUpHCryDV3iuA7GoANww1YPefFhx4FbbXnybh4PFnX8uSh9jqjwGqLnXF9CjeeE4SuN",
  "key31": "2NVgMxKRyCsCctruBsLj8JzT4XUvKpQiwq1riY5wQGa5RPEHFmWGzv5iZnAu9C7mdnKZW2LsdGESnt1JGRQRGbqD",
  "key32": "2BMLhXN7JKBoSyGjKSJdU8LeFRTppoDZf5Dp67YQSJrD56DzaxToL3cw1LhN9eCNMAbXKFV4TGdiJwqEiETvvU2K",
  "key33": "55Yvts25rkj7SyRfveMvZyxUcRqfFz6rbutFPBd5aevMjTpgR44jiPdKrrqi7mG6mpte5xPUpnyMsV1eRd2EHSSJ",
  "key34": "45tkqpSq9YsKxfKFAeqCF7UDL2YorLWp1z634chhokPwfKxB7pZCGxRr68cgWLBrWgiUYmdNy5mbVoBQChx8WorA"
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
