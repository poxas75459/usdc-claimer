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
    "1YSsPz49mj68HzUoVUkmnCXNY5HaFqL4cAToMyFf4JZwXP8eZdrUarPc5DW2QgQ2jG9cokYUxdpTR6YvDXGXnbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VkfV9r8vphxqxTQ2WbqRhnQJn9Q4KNss4waqGZSdE9RdJPtcFfZ5eHdaAWQyYLGyX9Hut5EiDRZ1wptLvv6f3BE",
  "key1": "3p8xMowMY4cULXGr6hxqwzaZyjY4VjkkW7ZcCi9HdTLK9a8VwMVLvV9mCartEt1cZ2iFKxjAftCF8tipMy3ki1Cj",
  "key2": "4m9Weriqjve2yYXPi8NYHBRrQPyFFxrSbqsP8Pjqf5RTWTMSHZ8xypWEbqG5qFpxcAvYDbkf6TYHMnmEzT2nqbn8",
  "key3": "2R4DFt3J67u1dmJGg1Ni6mU8pVXVrg9EdMagkfPEUdoKE2WdNNhhWiyWmJNjHkziKyBKpTbQYSHmhNGYdRcxgspQ",
  "key4": "PMHtApoqEod7nLmjHUaxuxXDrpL2AbheZMDa9kTDyzmf9aEXq5hSY7hFZ2cYSbXKcjt9Ti5pU49tkkWhUn1G9vJ",
  "key5": "4dZUnHP1Gi7xGD88oehE8hYqu3YfVJNzNWrscKcXKUZFfkuCbi5Fiv8Ero3aLoNMfrYNJsVewGMEBYFdY9U5h6dK",
  "key6": "UyH1zQ8TKMhRGEELFB2Q8FXddUQVA7LypAAvrxu12rfh7TtDNLtkXV4tcsw1fvo7sAdSdTtTgjT4pUZhahA1JAr",
  "key7": "2uZivkHgfgG5DsDfURTDWiHyYq4SycGdW4fotqcerv6ewrCQas4f2GVZ5MR2vW6sexncouf7NVZEQA15FrRi98N7",
  "key8": "4MyndeBWKQSKALZwkxZU6A7184f6bLZmMSBSH96uJ7n2NooKNRUwkYRWUk5m7k89X3YAEM6yiHm8VEmWv71jcR12",
  "key9": "3hCQSGRgkcL33PXH2pbZUxHkfsh6s7zF2URE3oend9xQvsn4R9LWKgbEzzZHpe9Y3x8ERt7JrWyL7fhDJRrFuZkE",
  "key10": "5Chh64QXwej34qpSTxrSisKApXKQ8NY5XzVJjbrTmhENZBVW7iS7bLc66Tkxm9ngnKSwpyLZhdmxeh3SuCQJyaSo",
  "key11": "4qan1fRgkFpkX1bdthjtkNLM46ie2Y38VUSnZP5mi4fiR7PwBpBt6y4Ncu71F5FUcv4pG8KNe4ok327USjmXARp1",
  "key12": "2xtdDs7oDevQ2LjgoeEoLhhuvKV1YdCB51iwzA5kDp7xpTymBo2hPNFcVY1C48GTSWirtu6H7G5dRhcr34b7Vuej",
  "key13": "2LfyckGmaZXAckSjb8A9UJu5tdEVoWxRL8QkgCiNFFpS3JUJeCh7jJMzg5Z8jNREFUcAipQm6poXRPNQcdypNgfr",
  "key14": "4P1h18BVnQsUpLPQqdjKvZhWY9XDqJQd4bwZsbgeZzhvaUmH7BZbVTuxwuYc3VJtUc7Gz5pXQvDJxJ6hdUBgxLyh",
  "key15": "3CbX1LXo4uhR39DVWLmK8dMeLxHvo7cZ8W696XLGf58fasZoQwqWtcNBpBy8PGs4jfpkQUpTeHfDDdZr9hiqdtT4",
  "key16": "5ne82LjNs8X1ciJYC3GiGc8V7Dny9cBdfv9qXUQErYtuuRx2NNz51mXXCZicj4rfgkjB7b5RMgS8V5AJ3HaTyHY",
  "key17": "5KxTv2tcEJYB39DzwUcrMjxm3Wt88bwdEYCqJwnkTq4VmszGTwdTyUeUHncqYmW15c2Rb3AB6FaRuLqZAqLS39We",
  "key18": "5rmqhKkZArZRK9XCzXAMpe3gjwaPhfBRWohKqZhHzKzW9bXCgnNgodkshRpZCCWDQ3TxEfZfbSfjoAs7igqxmmB",
  "key19": "4Eg7K4P9QvBknXaM1bvrFpAt4JyHHNo9pGKQtthz3ukiVWaJ7hGKvJdPUTwyypt8UcFeAridmD9PGSwvscJH1VLh",
  "key20": "5p2Ry9YoZFgRp4y2srSEn477MKoTzQGZKyzo7K3hcrYYwnMLNHG8UnanMxe9PUV9ABxBCpRP2tJBbcPg1aetAxSg",
  "key21": "4nApjgZhuxom9oFStQ9ERbnLui4wkSJEs9JQpKdjtSdCrDtociZvZWALmWUbgbwe21hGdHwDeR7yivHqN2ggHtm7",
  "key22": "66JQdGtu7NdUxS1Sv8xZr71kfNoDTEScMxqxKgczaDYj6qSHBK7Hc68vd5Cfpk8WWpQG7s1BxtFp7g2FLBQsATza",
  "key23": "cnMFBs9aAp1XfC7Lsq3zARcTWvMyMP544VTQaPReHrLy2PWELxbbpjyzXW6p43TPraagiYGUqnsrh5cC9nMMCse",
  "key24": "49Cen3hW9wzXivhyda5jmawW7wWAJr9sSfbFjke7ipHQCCJu96azAZmKSiFrUxLnQzCtUFFi5HomaEwMVzkSTUp6",
  "key25": "2bdThUvZpiFkf7S9jfcJaSwNRZvxdDotbNFMb9uxAdyK8ZkSJypvUrouwbiQXSf8s3bn9oycfEEEz8yxhS35jBra",
  "key26": "4dzdUWwg7YyTEVGa5yrowBhGz3DvBNT8F3ANZA5EgDLVpiyYAmi391Tese9af1muR7bQknBXNC9vNrZQpE67iE21",
  "key27": "5rzMFnumw37d5S3iH4EZoGapF6RhtuhWkt7aCHKnkf6WZzxgBmK4mhvWxVdkH2Yi2LMzLxj7f7ksno8JGQoypgWT",
  "key28": "67qGMguc11pLw2fiunaRY8qmADikomaRSYsmmyisAnwm9cEnXo3SmMVKapNZXmeXhUDjHGWvUsduhcRdPPUrjfpL",
  "key29": "2BiWYZkybXju1wgGMMgazmavGFrCbbLLZe4GHK3TN3NqXGHYjWmngdmJU7CRyK2yhc1VK3b1STHgod4UfNiP2XQw",
  "key30": "5cdHF9ZHkrA7ooXgRDzpvAmsiWv17b3buiAMnecTXoXfUVGc1akzoJamF3KHMcEbAQK8q2cpjYth1hccApEgX6HP",
  "key31": "4KQ7nEqDqAbFJ9QFKNnS2JCZBe88ZTUJW77VLbaQ3hGmTEuZkpeCJyNiWBh5omc1GmidrYjrR2f88Pdr6mNPBUCj",
  "key32": "3nehevhbc8SEfcTfgoSf4Zg7obappzuesNGc9yQn51ths4BAwJAdJMjW4EdgYEQ8FBiy2XFM821jEALpQU77sbLh",
  "key33": "4o2Kc7mY3EmTmmtt9GZVv1iQobGNmdfdPFGj3PDw2baed3oLkRzLuE4GJKaSsxwDHbUFU3YXou1BedCerGWTKRab",
  "key34": "3e2ALEGLuPMi5qf9ymaZp6PKzbSNQ7jvSJCe6YPu4FMH4svvwkLpyJk7kwvV9aPUCKJAFzUg2mx3Rm1M9fbNDzX4",
  "key35": "47sBMRGwZ4X8XGKYYuv3wrkpdf42tzSWpNsXv8eSKPdhATNb7MsisnXGrACqNHnsdAFK5rnkBQ4scsF4F5jiAaNK",
  "key36": "5gTsprM6kENAPtJ19MgqXU5RQqfLA46afoRGyjxo1VrJ6UwBkZMGuC1QtoiWPBzTNUNZtAZXrN9vMiVnkPu2LJ7L",
  "key37": "33zLYq2nxAnHYqyLMJ6Sj4oMrQ9XFYdVByBXhjT85G6zd3Cve8gjanE6WCHqncbHzd44zgjSDxz4yPrU3og2jB7Z",
  "key38": "2R3oaGmatCzpRSkziaEEXvVtwPkbpgWSckNxiCGgkR3ujTcHESbiDcQXWjxuB5BDHZPGPQk1r1GTKB4kEAxnBfcR",
  "key39": "43nQQpRHfSBARidu6T4MXhbAjgm5hBSt7iCjaiZsUUKUi1oHZq1fL7DF6XpyhgnXsnzw5yXfBoQdNZS8TrEdzfeM",
  "key40": "4xk3C9aAAqp4yA98mavGsUs8vPhdh7FdyetHMG2zNjQoB3en9HBtFvqX1THAqdRgXWisZrCxYgZ3ZshtfcqufGMd"
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
