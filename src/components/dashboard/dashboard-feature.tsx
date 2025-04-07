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
    "5YoYPumdC9F6dpAx4Nad6twUorTTJK6KvPTQ9Z1A3NfagdZ24kLAZEQChh6TnrL9NV9vQd1QJU68TmyrzZAMRQ92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wFp2hdeuGNmuLn7pzK9LR7881wvc41sMQe4HVWRbpvrPDnZXg3zmyok5ZXWjCzJgxJSSabS7nQwbZfkYKBi2Phm",
  "key1": "2JnavX1F5tXRhgyML5ghM1VLEKjxgEfRW7aoyRcmMSrmEh8XyTFHTSM1YkMoRYbCDXmw2t5P3BWbgUfXh2S7cjhg",
  "key2": "4tmpb8FKEr71tJNi9upYJDR8EjB5uqoNbwFKi3TYFvvQ1HBCrLeoaA5ZYMs9FghYRCXppC72j6h1tuuhDnwtMufn",
  "key3": "icL6uKf9hC1nMN79ckrTeTCyRW9fp2YeGp1Ddn21KdTc4MWpUvtcUDf2NDbc8AiK7QEXQM6UnBrA8unBnSBpaJc",
  "key4": "53UYuW64KGB6EKPKNEf1qTopEUo4eZ2CqVa4QUheq136EuCxxHB5He8jFtiNu56ewPJQTMHcfHjpEL9U8FHRU8bg",
  "key5": "2L89EnroYTzdcSwnueZ44nG8nXiCAr1ZXLT3eWPvsTn9g42GETgiJ8PBh2ZaSGxckGQXSvqzH6tvfVvRzHtc864r",
  "key6": "2czB57LzowQsFdswFB5FCFaG7UKJjoFxW5NrfYcoin286kvL649texMhNHXvpjw5MG19W7aurNw35woiDnjwsFuB",
  "key7": "57sJW3kvHcxNH73ZM85FKvyUe2mp7VKRAf5Eq5n7gWqciRDrXauEuCnjrSbVWhBPdQApHtVVdRjUwDdTsiyqkuFC",
  "key8": "3FuQbLKnMwz2E2KL5dSCH6zFi22yv2H1YmWzotTk4nRU8HJqimesC2crsxg5MC61xBK51ezBHchRmLC2mEsT1KLF",
  "key9": "2LZEb7r3pzNDG7MDytBiQ4Ym6EWwNGCiUkY9GvzNGrrK6BVsEFCCHWW9rWd5ckFqFZWN1JeWWBjtPiMipyeZzWFy",
  "key10": "bTECUY3DRL5X5Xy8N12CqbPZZ9ajARt2NeyU7ycq3GC7kkVvQdsc2yzvRCSCx8E9pjZLPfe9eNJQBQd2YF8LpRr",
  "key11": "2V8rF2SvDerbsrcK5Gh4o84Wky1bouciwjwPcAiBjLQNGh9aptRzaPkre38ByqAN6EB7vMzqCdNnM7i6PJK7zpJK",
  "key12": "NhaNvVw8vpxGRsEMc7ygy4gzCTda8cCVuzNiGkGxkis289NoSYCaxG9s5AkfDKEKqMn8PQiLJN6jhhEgvByM59S",
  "key13": "4bCpNo1q7xc3dSZatHFBe4Lk4amb2xVtP4w4R2QbumxA4xNcCTdda2ciPNQd6X6ANu6nTbtUqMnwywAQWd1XCiDn",
  "key14": "583P9rwX3Cwc6WiyrLQQc5WDZrVuhwFbE457gYRcFiyh8aCpYkhJSMkFvkwk8kSz84MPDFisw4jKxjjPeQNaFxVw",
  "key15": "3yK7fE1tm8APWHrCRpqDj74uVPakLsqb6R6LVaLK9q8UP2PC8yuz5J6o1hJjdUgHJZfvCrmztnMMUgLKgXEQF5nB",
  "key16": "4jiE4zx1nkFcRy28TX5d6ZYnfFtvKbGMCGRnG4ba4JD5284oL6wUKEdqPUjusZhdZ8xJFCfN9Jhgzu3HARsLHy2E",
  "key17": "4LD9zZrAnPDmxGX9NZ2AyYcqoYJhHULrQ4iSaRe2QXfWCj92bysHZTW5vZ8RFE6XKyN8DyxmD89m3ckXHzfdDyet",
  "key18": "3rLksJfiz14anJfkmfoBsVrjDxcZDQQEu9hH6vooNSu436inJmwYQjPW6vEZnbjKJEVJ6WPugKHWABjxCLFTJuDL",
  "key19": "2K9Mv4VVcgtH3eVCDQgSfPh95siKUuT4zugG51TJqhSy5txZMHKstyneoQT1nvpymo6ZkyX84Esp1LBTM3p2EGfD",
  "key20": "3CdMzj253RzBn3Mj9qAEEAsRYqhRixYqNTb8TskiCBNHUGeR3HaN1rX7Vao8FnyxMLPbSWAMdr2iikLZEz6an4gy",
  "key21": "4zgMYSyGnAV2TMReDx4E8GY79bxtTQg56SCgJjVQi6Ac4deRrPctPD6PkZo9UNzUXahyqNEYNu1xhiKzxwiSRmgq",
  "key22": "4DBhjsmZEKZSEPs1NNPeUKuZTXTNdRjeBfvFkqzkV1r7BEDvy81VMknkn3VErZMAfG3JwiALBj14GWDaQuoHVQUP",
  "key23": "UuJiD7AtLxnGpYjcqz3LcV7DXpEH9n4hTr4LKsmtwpiWWDhGboPoLtikAisp3vjTQcJJshZVDMDHBSXzU8V2DvT",
  "key24": "2MtXL1iQyawH8UZpXnL2Ss9EQXFHJAqMj2nfBwLiZ8nzsTXEoUVDKoyJqTNrddnVxHJz6z7W61fPGp2izFhP1MDY",
  "key25": "3ECVL9zMTmPza6SFf9ASAZ8b5Di2hYbwEEZB3vrqBycKsKJMWuoF9iQQPquCttsX1pWV4BFStumvNGZ1A3XsKxwF",
  "key26": "4zrqCWg31SLJpeDB6rWwUdc8PLqLHM3G8vVkb3MaKYr8UAHHiJ1u2izSKjQfZ53upzL1oaDpWVL8tFSWgrm9eFJp",
  "key27": "3pBwMtLUsKteimtdg5y6dGFjZ5bxGDiy6HVi6xn1L67YLvvtmYg8DUhKDdrpwhxTJoSXfLsa9nb3Jg5ofd9JvmPh",
  "key28": "576pZYJ7kmpxqfTPyW1isgjD2xr7RGn7JCZVNfFA6Jm6Lwi1DyVSZLsxwDHMkXofsr3wRfkfifJLUSN3YLmF96rq",
  "key29": "29yWfv2zVKSeT1PenPkkiFQF4NojYbjHwUAbshijZe8w5cPCWzpGofEJ6tz1oQz3Pd3FpXZjrKuNhR4zsgfgtwzA"
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
