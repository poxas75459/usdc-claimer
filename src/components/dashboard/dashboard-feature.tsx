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
    "3MihXF471BEEnEm9pbaBnEMjHLgoZS76neEDs7tGWKqEveztUiiwdRfZn9QJDJxC6TU42qy8mscwHZtRt75HePw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pj5aCvumxtkWuPYwWB8xZUdLVHG1mNN34aXCPxHmPkM4riv2ijN2GN1zcDnHJSWTxrBV934funaEx5w3Snpi3dU",
  "key1": "2HWuUEk6gQGWAaEMeG9ZxMhRfsrDqz5CSTTrtyYx1Qrbh4o86f5mxXY2R4GZMreRtwA8RX7KGkjFmkf1MUPDBxYD",
  "key2": "2opVsFT7LxajCeqmBeNhFpBgxwu8m9enGhULMCuyzKZWnWfSSuCXg693rqiBUaYhZs2tCapKHEFFq3J6DSZY6MwS",
  "key3": "27wugRV5YtBuqj9XAcaJcNmyMMgXKABj1uZUNvZVLANUgcR6Cs5qMXSGGoPSHiSznRuJft3oNq2zK9ALe9K8koqx",
  "key4": "4hk2tsUkU8oM2KTKksDe1f1MfNX23UTkQELX3ND16owQ3mguifu33j1RJ7N5YyGvCtTZoXViktQpwhuUnUCyNxTX",
  "key5": "4Ut4ZX3CwJDoVQAdBtSQXNTJNBDp8iS1h7d2QHLGeb9xAs6PjSEbn5F9VvGJK6tXzY69DXyijHqQZQQUkDjiXeCo",
  "key6": "5YwN8zXxvbfWGdvJb43PBqV36d1jAsRAyhoBEXUfGPKt1mKem1tnkyh9ZkZSDfa61ToH93tWs2wEuVRPvyWCqsLh",
  "key7": "5E7pGd3QLsv7wr2ayvziLCH9sowAXco3AqNySpELZw69vgAyxgPJJo1HoFxzkaSNpTNLmJ1HJdUksKqWUBxsNKz",
  "key8": "3CtQxn4cnAHtToPjhgEfs8ntDMswE618N32XiJtXBgBwZAmAkhGgUZmX59fLo4YZS1im2LZA8HwkimApEgu4JC2B",
  "key9": "3HXjwXuNbJNUU6KwPwVy5uAq9m4Gc2QUkVhhxYSo6oq4APiyC2JBgAbUx321ExVPT5b1aW3eEhcB2n2EjTh3gQ9g",
  "key10": "4K6o2BEPXcsW6nwLK1oPMt4X7VRc6sm6RJvqb6CZ2aHgiqPaUQatDeHHnJazwEm3A6m3DgtgrQ7Y8ECepX3w2DU9",
  "key11": "5H8FUxycDrZshfNLyzbzu8KBLTj82ErTCFZK7F7US8RzLb35WzCD6tE6wVbRunDDjDypGyr4ZQAUnpeDLMvy4tTc",
  "key12": "4aFef2fBtncdftwBdyvdbaChEG4cRmaf1NCRmiT2mCSjxto7c2ZN59hXA6xHgZ9qk3ySfjJyKj4qZwakTK1GhTTC",
  "key13": "55uMCMKFUBzFyQ2tSYc6h9qmhHHDUzknwVN6vzMQ7yjrND4nh7rmMEynhYWVD6gYENFXpuSTguY1fChJwRLU8pPU",
  "key14": "4wMmhGqAbDWbzx3SmGEBdDNEiuxK9xuT5rmvGDDQRCnFvEkWbiuS5kzLm6JSiTKW2uBgjpJ5GJtzGqLY6EmKjmxW",
  "key15": "47VKNdcxyrkb9s2jENWyugj2xw9JjVBKfMwGhEAWcFzbV48njinEzLrc3tyFASkXP9PcXfihoL6nhppxSFH761eF",
  "key16": "8AHPgFQbySohfKSxbYWNQJhdVLaGx65Na6AHu6tEUSpSEE946QHHGyeQHhy3SbaQ1T6oQbXAMyuoeLvZ6qHWAGt",
  "key17": "23ewsDq49moRpWLmY5VpJHwpHmgiFAAAbYcYvVL4LhFqa73S1kM5cy55wtWYgijR6ghLMk2LVutqvSXB8PQ5fXKf",
  "key18": "5bvjvfVhPkswjd5WvgnxXeRtnMbdsiFKpyUV44YtDzzwPBgAYzXx8vv4siRQvYsqweFjLJUgGZGQqk38cJ3GF1JN",
  "key19": "9KJz8DtgRc7Edor2d4LrQytqeDfh6DqvJa4VCqFs52aueaKbGvDMj4VVLdTz4nRpXeuWouzAdLufuJ4aJfNdJqs",
  "key20": "aBnV97E4vrvxVqbLKqNawP2fxD1UoEqbSgy4y23moG8ab8Q4gThbqzGeBKr5iXBxskdh2HLvu9iBE76hP3FSsNc",
  "key21": "4ZFkQDNrQ834v4XDMtNMkBU6nr9GSETvzaVC7iqG5tf1gh5SE8qCq6tUVbmZJHV9zBQDZ4pGBxWK8fTmr97MkDmr",
  "key22": "4h6WHdr8nqwE6B5xBKHXxn6nBhDR2mffsf39AzMwBKzGvZJJ1E2Ly6st6WTnYQDWqfG91vWsRuVDQmXn46nbKkTH",
  "key23": "2hvhwvFcXzzBvVFePAjexhJ1j1zKUDF2pygVnjfNrNMauKX4HPxXRKNps6v1zMHYcGX6aaKVZYEHxoBpDCQWDQST",
  "key24": "5RXbBvzdty3MrDZfoUnuQqYpWUFtvLrRLaNNbCpHFFEEd8dNRKTS63ucxZ7P8h27Qb8hzVnTiNZ7RAXedYcuLmh5",
  "key25": "42ShqZJ5bPwcQ4YosFzkqMe2tQxCNNSB7UD5DPKq4HSNdHz2Yk1vh53eG3NUgBb3Zp5Fynt97xPQUpb1P2nuesLV",
  "key26": "2NVgSePKUs5meuuTo6m4RHrWyYCHkXVcz6UoiYDyQ4b6MnWoUW4rPgtQH4ia4UiogHk9V2oDJZ1CZQL7sQEKyVio",
  "key27": "3KNHYsMPYrnuN6YqFdzp6HitvkhVyf1p5u81c68TyUzuDa6gWiEK3dh1ZKenWsBRDzaY4y2VGGrzW2sCjZnhrEtp",
  "key28": "4ccTvoeWuWqfaHqWBnH9Zp2UeRqXzLh1MCdkftMMZvPVsC8UBig52eRGyaEcS87aDe8m8iqRFUoLiadZ5sax1d1n",
  "key29": "57iW9wmxQshCFZXDxYxoBmdnvSPhzRAymGcreUdW5jgHsqyRCyFvopoHBvB6j1PBp1Gbo5sLXYn7ZyGsg2AcyBqZ",
  "key30": "FfVetsRYWPBJ7QwDBo1q7sG12QzeGQN692AMFzYBL2UZ788BDWkLLCR3d8iX1YAVFqnGbpfUvxEAMXHZAt4vLSW",
  "key31": "5jHrMFNLZJoXuFUPtp4UXn6wqWMKGi9J5q5R6LRZniZ5fL2REsnSy7MUkt3PUKSHhpZZhfbqwz5SyHpZ4sof3JrH",
  "key32": "4yDpp9jEdDTPFPeYp1qMqChJshkWU26fBjz6ppUH2U4isDvBKtmiV2qL5wYLJsQkvLETmbDQaHycBiAwa2pxr5DM",
  "key33": "4DgHUUP8e2AQyrGNT5kfucJzS6b2YAduHGw9J7rDbctgdRSdH44e2yb8JAEgNSddkFqeUgaSHZcktcdR2JmpWrPZ",
  "key34": "4GzsrYqiqs8yS62oXghoDXYLg2gQJyTSNq2xzT2qmWq7ncT7F37vNqvS9Rc8soUornp4U19kRLwWk2uH4mFpP18q"
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
