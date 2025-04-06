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
    "5bSQdmXtwmQYtaAQzttepfxcS25rbgiE9UFXx9SL62YEhDqU5Vmc691PWyHcYqb9i6j9xmaDLGZFWPHA4UFkdDDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xum5sgjNRJkXNDtLfZUF6oy5akRGN5sgNYKCw5DNWkZC7ua587yRQurz9Gc5M14ioCnuqc8hchVUmLs5BJf2QsJ",
  "key1": "46G54DuEykjZfSU2bjdpEqA7T4wZ6Hff5eZVkbwUS2raw5zBZQVuxoLWCj94qEb9TY3eQwKuCZLt7PqYkzyrZFFz",
  "key2": "47Mg6rcdnWWvJySotaRL4PE4kVbYQcnPVvdaj7J7PSZhMyLQugHwokxw3muMyvydUJQ3pjH3PVjK7JeX8mU8v7F6",
  "key3": "97KS6mpvKKeubQJ6FXF2Aq1iTP2YmmP1AUecuMsm5Gr3VJhRt12Z81VGJnLHqZHbFFcBE54tGUjawH4KuZ9h8qc",
  "key4": "3e9gvHPqKXCqwR6Wd6xqeQi38LD7h5iv2h1akH3yj2WXP12HocqWvmYsXvb16TqgBYNspqzYM891iWhC6nZoqxiT",
  "key5": "3UMv5Yn7xH5MuQmBTkgCetrUiDVYpMX8ZXoRLeFwmYwvPQqVuZFoKsXES98hmLPxrBVpKjUZCtkcJr4Bq5hGvfN6",
  "key6": "4zZWgqsFw1jsA3cCHWxp31jjv6Y8yuUXBm5phnbfcn7sFt4FzQBu9qNHvAY11anrJsGJuAqBsQR6BGUMxt8RZbC4",
  "key7": "s1wHnw6bwnNdmDdKuUoLYPNv88K3HneJyHjVZFMCNFTTD7zBWq2W1yra3ABpzySPnz1KghfbNpipKSfBhyMcdAi",
  "key8": "4nNN4BhEGpgwWE4zGve6nduSBasVaLVmkCJtz4rf5ZpwExaqwa1kEvUaVg9xFAqEhTQnJGUNJGvX8Mp1bzz4SSVp",
  "key9": "5TwybztfNs8RkSavdwfqkwSZp2jnj99k5L1pUEqbh2C5PLervxxznoCBs9gqFzQmc4dBw3YjNtUQbHg7UEVFF2UF",
  "key10": "dGMQWfmYErTZXZ1tQWfDST98AmfgYAkTYXAtQDd8GSJVJs3PogJRFPbUJxr8XLvJzn37rfYV3EitJShTin7FLRw",
  "key11": "3xxritV47vJWNuE7mjqg9ErJjwdr9Hi9QXkAnvMn33d212WBxMje3MHshrJrNDGQ7DGeaewtTCzg8kF28vtcYTU9",
  "key12": "AFNBq8QZ5LWG8miiL7iFFRm5QNNsp76xyJGrkUiKAGiePJPgRS3AMpVGk7Zay7YfpB7QrKtUD3RtfUkFKvuj2gN",
  "key13": "X8phnUaurzVt3H3ZhKWZuJXAh8LteRphPbBFMXNjUNLjYFLAxUBQrdjvimemJMVR64MNuDepyeNwyvyYMATSkXM",
  "key14": "4MocSaN5m6TyufU3an35FvkNpz9rHhBqCp6gpWXX8K5t6mmWCAduw5U2kuJsCrvGnE51w4SwTQdeXK4MKwxAaxGc",
  "key15": "qB7hj1BYCpbGGqEbUBdbw5k4mH6YnCkRb9aptpz5zpghGBZboqrosrjCJiMe7gVZvBqZuoLkakgLwV99MBoMgr1",
  "key16": "4xfkx7Gzdoo31LeFZ613ovaBpF7dxF92DMW4x2NLXJtJJQsTxXR7mL9JbdXvPNJtwSWEZdnGaWzdcPjafUu3J4nq",
  "key17": "2zazSXQH3p2koN4VeUddj55s71bi58ZhBQdh8x7kzedFcaDUTYmaggdLJ8NiS3DeD5V9KYRdYPqrJqKYh4xDuxgf",
  "key18": "f4mFiByuucjK9MwKNbiE1H1oxrBrvNCeLFPVozCksDwuxQcHY3pVttTdH8FvPWCD4r3yQ3W2B8Vg3wF4w6yXatb",
  "key19": "3vVU6iHce7n59533iPoHDv1mvmADZfHtkFf8SkTtNNK5zSyNqe5fzLzR5HkLZ8wUnvbozk9HNkjV1KXSJkEjqhjz",
  "key20": "3TMcMEQKDGnuNBg4rxTFiSqRTHtGWbttrySXmW2qVK8CtbdesyQiuoYYshCfvCcoYF89LN3KtjiepCfjQK96R6EC",
  "key21": "66dqHttBqMa5gBbZSDHY83Rg5m3kWjUfUvgExxS9daMDp8TjDKbNZAu7VDoiD9GUBA5uogP2L39RUVe6rSfnjPh8",
  "key22": "2yXwgx7hQzDeStJJzHjvR6cnJ3uA8qMKdRv8KNVfAxSVTsHcrt2dm5ed59AKxcFdbUjH2hZuBpkLj1WxsGDKfVZ9",
  "key23": "2MapLbw1Xhsd6vAtKAEP9xpj7UZ91isKEubWhUehAsKt5K9ffZdLHSvKqYkG9khTzmoPB39ai3H9N8eboHk6Lm28",
  "key24": "3gfJ9qVuBV3YRcs2CUBxfs46JgP5AvR8SoVqkeiJU1rb84MWBAQ9KGiSMdNSqXgq6HkTsLqrkuXUUgABy5pqZGH4",
  "key25": "5fNhxYmmAh9w3oaFCXEjHtRLcbN9SC1TwTAwqmZ2AtdZfpxhhtZJ1doN5UYzrfMhifoGRCtBkqAALPbxgqY7ToJB",
  "key26": "5c1nwz2aZWFsTeV2pJyzBcpPTmxWFhgTdGbC9L2ANDxpqF4r45u4V5ZCdVFCc2JHnkUi8noMUqzeaAR74Fn1CStm",
  "key27": "4XB65Wdv6YkHpgrAndnTbGPCPX4gEhNQbqFyn3fY4WPheALBywX6M4vTtjXCgRqqRpfb18Kyf5U7WKzfqRrbcSx7",
  "key28": "ZA2sArTMzrutnQ1D8biTBqYFq3edPHr9fqKrygWmiYv17T11giZ8HUDvBGn1Cxiu1R11B7oiBsFW6Aamh4pES7W",
  "key29": "xMWpea6bHvLtT9WHv12skLAYi5NMKHpqfCDKxgfrmMJPmdsq1eG8XoUBuUaJikDbX8b2UyD4TL2z22vwB5nuiuv",
  "key30": "54GzXVGZhoLqxCVNryTrKxg8CcGnsnyRbt3WBmBWe3rWGaBCMZDMDvsD4D35kCFFpP8mZ2MWZdR6ovD2F5cWTMXW",
  "key31": "22A86HNQmSLeVzSpBg7qarowcKWkxs8e7bkd35fJCxsKxN1RW4RS2Vx8Kv6JWFP1SyaZixWBKiaKTwGbL7bVcXG2",
  "key32": "3iZZ6j4pWPgMrDg3sqeb1U7Ca3zEJdH6s6t2RnFkiq6dbnu1bAcju9SWvsk3dttPqqNBiMo5KCJMmvgTK7hGxmgf"
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
