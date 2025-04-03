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
    "4UYSjYKGBfZ6e11Ezq31Y9rV1eeSEwbMp86BuSXgUEDfRkudwcLGgPXxCYTVjCb4e8QroxsZnYDYHmXHWYBV2dwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NGR6nfuVLh8EJorX8gc41NedtcUw8DeLRyx4tp4zkKqxTaq746rssjH2eAqAn5JWGsDmAniLmPbbermr1ttR2sF",
  "key1": "5tEEzcMfrkxAFVUPRcwNNJNameZGBStfWxqrZzhEz8Re9SPyZfPBHAUv6vHAyAUk6bLrqmHsKLEQpJFPy3b2sNy7",
  "key2": "5xi1JK8zQkKUGnZP6EExd9eFK4k6RG1VSjzDN91f7XR3cWmW42CsL9x2ce4iqHLQZwid4ULfjP4hjR14N1kxDTp2",
  "key3": "4ydkaY7NA3cgnyHFGkrJ8iCoZH5r1sUozEmwN7s99u9peid5LasEnssxhfEbwSK3uoYQZbiMdJUimh6vCxdmv9Ft",
  "key4": "2PkmWWtuWwRZqNVFZJnThaVGv7iWfJaQkgzTka7LaKJQNbCKNzBa9vXpWYtSbTEGqdxv3dngAXCrxviTMdj5eXhA",
  "key5": "2u21AM4Vs5zk8a7kfsDD15jzzepNKp4rPpFM8KtaHYum6dKDa1ptc8VTGzGZn5vrMAcjqiYY4Cqf5F2Uz8znppf2",
  "key6": "4XSBTM51nmwwnwVHhTh7HoKJ1fNgaBbDS4SfJSaZDz9Sqg2jV1wxvt4pQDtkoDkiAbmWTMT3375qSTuy532nHyc1",
  "key7": "4km7t7ygd2vPcyUJtbwgwdB1jaY1w5z5vJHC4if1UcGk2uquJFZXV27vAcVtLPEgLkjKc6hoRqG89mv462gxJtm9",
  "key8": "3Fan6wQp3LovFfKL4SDqdHXpWynKiSeiGbiXb1deKFLz4gRxGtjFk1t8KznBLEW9RNbn3SvUbKTXo67xfoWR7H8Q",
  "key9": "4N1oGvxK4V5Dg8hxGE35uhjQkfwFi5sVXFr43bFFJB3v5eHmuHUpMdkjHfugM1ouFbvHqjHXJJw9FNfFcg5JEzEp",
  "key10": "473W7VWvpVPZxHieJjU4CmbPbDDFogx2pUQN2TmpSYf1Ngmy5mFBX9KTReQVaKTL6cN7i7dTVjeZ8VoDJsq9A1u5",
  "key11": "2cb4NiDedJXdpCjXNbWQiPJds4x8jnyHnSv3zJ7oripGivK27WzHs4nuWKv9sDnUJx4iqANfciA8J3guZbjf7wf6",
  "key12": "3ixMiSLS355e24PG4eKE9fEQZbm8kb6GmxX7oeigje1J9su6sZrVNDFMBnUjJKvkWKiU26USzP6mksccm6yrP9BJ",
  "key13": "2QEsF5eQbaCeKs9zH52SofmaqiS4o11dn4AbPS6k2kmw49bKL9bNPYBYcyL5DmmMsVc5nKVKzWcy3Hnhwx3CA5ea",
  "key14": "253E91X9ARcHjF4qjohGR3C5a1KiKGSRfuE59pxWM3dkVyt9V7yB5wMA1BmpkLPnAQg7e5T5kzgPuLWsUg6YgTFS",
  "key15": "3dibTW4tmkZXqgcHYe1qW494jCdBMzUZLBJqvvsMqu6cDCES38dVnKnKvwJZerofWNA2UNTn5VvVDaFhCFtJBuAQ",
  "key16": "4Grks7XitE6wx6iKx1qXWP6ibDaaurxc3vfcvqaoWmbdyxQNNfCqUCwWRb41fpXYaNmPdRtifoMyYBHDLLEsU9Jf",
  "key17": "4Tys4sAaXVCZNcqpKHcSwiVyGG6AJGdHpGoZkeUuUy7MFLTrZ4kpd1Y679ewA47aTYfzfb2C7hMSoDjCxDXTi68o",
  "key18": "2ZLpdWsruYQf2qmP2uENqukmv4yfxkq9nnSWy6wPRKzuUV3EAD47UTicgfBjZMV2GB7j6wXs2MRmuJjKHk4aLyaW",
  "key19": "5KARjSnSXULAACfbHmCMj7UyZFE94S5iUX9c3WK1TnBFAS7v9PzuKFd6tA6WVrYp7HfawwoZGs8FNbCjH9CTVqns",
  "key20": "61THsHVeDvvrY2pEqneFs6NdkgMJQC48bzR5gkebg5eL7RnxfVKWfzLYo47MckeTdHLtFKgz567sHJDMdxSskcZj",
  "key21": "8aCU8qQT5Ywvnz73Umy86PW3c4xzJxJAJ34bGaj1BxMGqrnUL1HPwTNZ9UmRwsMxWPYdfZQHcyBsr4PdfU1LM7E",
  "key22": "36hogCkHTYgHFTfXXbjVevxySKr8uJTCf2LeUUMTgCxY8KLSB8B161jNizCo3XVabZyYjtvke9GDiyS2RWU9ouh9",
  "key23": "uW9AeQdtHM8bdVB7KPcZCbnwNkEMoadneCxgQFm46jthXrhWwdNL9jp5icip1GwLsYQ5po3bmZvfXqSMfkqZjYY",
  "key24": "41aCemhRwzi5BVzAkvTEFukV5ZFHoS2MHzEYSpNTSa4Ff3odmHTmNT4BALtYBomnKEpFkbjmr8r8j6y81rF5f8sJ",
  "key25": "2DBqZyYf3aQSuXyNbnTrremeBkigM4gEPm7yUaPGDWtjES5cx7cjDA61uN8mWBkZD6hadj2eCdLWA5qxXkD11LN3",
  "key26": "2Z9cViTxvawJ2bDyWstBQEQJeEezm24LXJYVY4q87jkYUQ7nAfRYtS3ZXxZDFfE2m4wJ7TzRwbXbaXVXuVY5g1Pe",
  "key27": "59oYq2K2iNEnchEzUegcxphT5xqA9RULkBwVYnMydAwdcCn7jMXnZLcT1NRLkMb7FADBXi7f5tasapCKuYqMYAwU",
  "key28": "aT7HbHsrgc9DTFSxYA6vncTXVNVd3cCeiCJhLXgxFMgvE9dGuhhSF2Vnuzo4Q8z3wjC3FryM4L6AunXvcJ4nKDS",
  "key29": "JvyoqsJKeFHtgKJRRBsZP4ndXd2B9a93jvFcCvYtUtEE59qCTrBVayFS5pkVcd2B65z9bB2vbLJpW5suPXFVJ3a",
  "key30": "418QXhu26ri1EXb1gWdsugbG4pZaWoG68ZABPZQQJ3m4piFxTi3L5pFDJqY1bkrpDe7oxGDFUQMaCpsMrrbN8zrz",
  "key31": "5mowb3YuXaW6z3MosHP2b8E52s3MYoPRiQKVKGALofox6p6JZRe8YGpag6xPkGCjBt7EjHvvVAGLBYZJy86YVMBF",
  "key32": "5g9HPxEeuLWD3qj5iZZf3NKx7pyqC8FABTYkNgnnKCDSjXMUxTmwQYg5f2G2vWLcZAE7tnyfoG6qVdvU5o8tRhrg",
  "key33": "2w3LnTRqRAqj735S6JKRi4YzwuAHVeS8uiwqUkmvWmuL141XZyNnax6wcPCWYVunMVso8Fwddb7qPRzZSLwmfVXt",
  "key34": "5YdWZZ9v9QMetJuwogjYCZ1kdpAZtnBhxVmWWeneAt7kn474StpVfqrenrp6J7t96mdM2qWp7JRui693jjhVEpx1",
  "key35": "4xbjQMc7Qj7ocrYKyc2vDzkHaAzcXibEmFiQ68ygTqaNYYP9KfjQTHqNeqKn5kJ9SRxuivPUHaD9t2Z9vHaHQohH",
  "key36": "oAk3qQDEmH4AoKkmDHmFHBaS1Egh172tasFnjSS9YA98Z6ofGyrvjnkmw1URbnqmb7ZzUYasNEynvBsiRPPSa3n",
  "key37": "2aifmy4MprMLnPqct5rjq8pZGR27rU6vrJx7cv8bWxrpvJB76chLYTUJkVZ9a9atnr8ZGb9nSKhkZmGSpbB9TcKS",
  "key38": "3idnSXMJzTLo5d2xdwewmQ81mhiT5Aa7fFZE7qhjzgNu4zzmhYoPF12gkg4ctMrNmQgokvHCkhKR5t9hBCM25bok",
  "key39": "5w9uWyHJbcEea9bEhC4CAKhrNXiP1XCbJi6kKRjHTWZ3igZmmRMBMonHpc3SA6HyWzHAcUUKKFqxKxw9nhqJ299S",
  "key40": "45PMGJ6v4s4HBui4bboc7R7LnhiqWocPXqVyymnZkWT9mVybHg4xxmCGQG9ch9uNDik5w9GUHtTp9zWh6A4njmhc",
  "key41": "2KotKKVnvr9QdhBiV3BMuqUmRKAoCpeWEtmRayVheeyz6vpYym4gmj9aQpJ92w8W4en13usyYj5ZiUx612qpwZjr"
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
