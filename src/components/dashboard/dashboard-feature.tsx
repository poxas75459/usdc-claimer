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
    "nWzGaoXr4g4wgdGQ2CvUESQ8q5iPm5BjxAb69GXjMyXB8zrS6DT5PCazHiG8KPs5B5571rNZUrDAywbR5HJJP5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e1SRTf1QbFHB5FMiMLoBujXkfGVnBtZF8PTB5jhzRUiLHt9J4kvC1pkSzHTKiRW4fZnWGQa5B5rhQiHHAGGa83u",
  "key1": "2VXF6LW8tveANqyACNUgQwkeSuLn47EwXF9b3jY7AZ3qJdqpHqeRP9R1wnF2LSCYPzZB52kJVm1k4kkJ6KQPuhYg",
  "key2": "3oWMmV99hrD6iEgN4SwbqKAGRDXoKPJc23mamxJZ4aHJ4yodeHT7QBG1Lbyg5DNX4VokyVRZ1AJEyod2cJzLtYVb",
  "key3": "5XY5tbjG7kw3xt9aJs9gYFjYziHG3yVqXyii7hx7NGtcp4VWLQk1CZdMZVW1fMDy5n2QKFQyRCwAUVJGMfTZAv62",
  "key4": "5DqRUa435FcKtFyhsrg24NtGonPTTSKoxv3SE9tZ516x34Fu5AeWNAMR14bm3ZVAYvDdDXg57fDq3RKeP4rwbH6t",
  "key5": "27dP8LzzK8v2iwrsyvpA2LQToyZzqjepyZgYhkzHeqTCYEKJrB6EDgudQjNZBPX5YCyGvAKg5nEnvUjerKfGJq2B",
  "key6": "55wGCrTMY4Y6HJjMnC5ChmQ6AP5mc26T5bfGB189RyuYcDgigGxRRhfQv4Z8VZA4ruJAiwZKachuP4rQqamPCk2p",
  "key7": "2F5cQrHuioLd3jdN8uFu7F9iYnjG3eh6y2WrZykA1yDH9fmBexPTC3oCdWj9FbZARQkyetZWcUFA2jZfryHju2RG",
  "key8": "4GTMp2nZ5wse3vXcaKcgfVK8Pxy1nKkKK9z1Z76mtavWrjdqrGaXnwTL15hKWVDe8XiiRkVCJSh6YSi7C5J8B77J",
  "key9": "54gjdhyqMcSnvDht4AFcxNPbYn3zCrzafvhd6Z4bGBbnBEjh2PcZyJ9wM9sSf65AbUpfthQjF6KGrJc7NSV6JVgc",
  "key10": "JZUeCKz2GFHCxwN7nMtv4uo8kAyJZnD35haS4PJ9Z7LCPnSXoosyQYWYcpj9x3SpG1X5kX9rUL4RNTAiDytnYYy",
  "key11": "2YXSF7gVABUgUdKkxDh9Z8YGYEoy9B3iUhpqdHNGTmj5WnVJtL8y5Ce88ZQhWuQh7T4owWYispVMNx5LbeDcJZM3",
  "key12": "4C4bgBygA1E34b4VBWv6hh1LZ2F1mSpNiUx4ToZnVsThTDzpK1kBvKoTmneSswNpadvqaKzJgXKZqguLSzcTK1Q3",
  "key13": "2KRjoWrEcC54e6ApButww6mD4ycN7tsiD3nhZiw3bZgxjy3vUjd5XztGqE3hHsPeA4LHELD1gMu2WvqiF8CTCcw6",
  "key14": "5ntZAg16Vo6MS8tBb2r44QawebTtxP8tNfLKCQikwjpJxWsvc5XpLPn9DRWLEg4K9MPNVb7H5NroeCXrhhaSEUfu",
  "key15": "53yrXguXJH91pf9dfcUPWDm1UabgZYucFzsZ43ezKUhKkxEGP6Jxd2MFn6o9nhn1E7r5NtLiJLjD3CukVGpcDv8B",
  "key16": "48hzFfVeKRxFXxApZRARAFLjWja4VFNpmTXHi9UjT9sWtwPn6A2KZdY7abo1gsui8FxFPoFAZ9J1bX8pqxDXx9vx",
  "key17": "5TA7Gid4NrUtscRsjRAP1fPCyPerRD6v8WGi4VZYhpkbRyoLh77DJUBJDCmgQs83fS4KaByuSyTT7RiuZHENRqUh",
  "key18": "2wn5WyNYwrGh4C4b1UpE1DgpMQKCK8H8tntRTcsw1kXm8KVR9gxBUx2DZCqPSqVXGVXJ2QwQoEvRHgJ9KMuxFuid",
  "key19": "Zvj8iwmBEHnxz5hRxtRvVWkatRF4vU38a4miQAaBAyH7wwXXo5Xc1NKQyiJrd7bemHw5rJxSf1gWWWHgWN9pJC3",
  "key20": "54r5Q6jGGtiDpJFC5V6KcCsWDUTMbeo3uarsm3H9SeXuD9PSdcnpoSWLMEdtkBdTa7rQXjnyibUY83jLo1NEnhbj",
  "key21": "2fyRFCqy2ghdewhLGGJ76WygNXQzBjqLt7vMKPx6Vv63Y5n9GQMXagpcAspHa1nhwdjZeUtyeMYut7N2snoHSmnx",
  "key22": "2SwukGyz8UTwV3ogPWLNwQRb9FJPHrJxq88MUynTd7z7NWW9xuW9rgCYxBg3nEbVX3dSH7apN7fmRS3X2ZphgJgw",
  "key23": "uNLG5n2xyyJEjMLby8C6e1DqnkXuR37dXVzBJDMeZcu1zhGwjXhweHDkddLr1ahkgdWzx36Bcm8RbgSsaibRRtZ",
  "key24": "5a6m8Hytg4DWbKKjHm6wUSZvc56sPT9oRQ8xQ77SC7u8KNvWGFmPt8RdFhVRdq5km6nF2JviW83Y15r1kg2icKsX",
  "key25": "SB6YEEgdhpMvmjofBN4YugF5ZGXWLCd3XbMnK5XVpMCHF5bgsW1qvHLLMztUfVTqnDpLFdmeMV2C37UAcmwgooY",
  "key26": "5TXNuCgHxEUcT8mwxgTdksLvdvc5R43jAj5RKuv6f6t1TZaWN96mYn2J69ndCmUTwT9z1MbM8HiMEdiMtJDA2iYK",
  "key27": "4wLRshZZJQyibCWJgitmHykKdQ3o9sbUkiu7Amv8S632SKLhwwhnHwU5CQVQcUvnGvjFtTMpiPJUVw8pTZsq49BA",
  "key28": "5iS1xiY4GdivGeQBMt4eaxD1hh2hmVsHe2pFLHD4gZMne6VgJhqEmrooWnRDnrH84DwpFmQtMc6GWQEtWkRmrGpL",
  "key29": "5u6UeDrCZFkBNp6s5CDvvaHwXGPNFBU3aqcgaprAEMZywQ84ARkQa7VfemPf9U4CWLSiRJwrXnBNUnk8LSLMZina",
  "key30": "gcQpWjxfJkYkZRntJxx34XWCekJDfLHM2NrYv4zadRgYqcKHsXKUr3bDoYWDvXaagfQWnruvBqvJpyeD8mFgccP",
  "key31": "X4jayLyHzmSZdUXYP6NgFjqiLyCoxqhovMup5L16cixti2LyR5fYeHPGg1PXp5tqPvHgLShz4fMFVamUpBByTWT",
  "key32": "49gaRm9aMM39LGMRrmGuqdMUVEZ8FpySxBWN9Fg7xK64WpBNHKp1nGHt3GsiTnPEa5TU6fekXMHtRVgQjzQ9CFp2",
  "key33": "5ZCM3jdabRyVDkUfFaMvVLVe9Axh9vsAcjDfPwRUFN8UFMm6QjUNkCcYcUwBrJ3zsGjsh9zkfoupcmmKRGjRMnNW",
  "key34": "aVQwn5Hr6sMCM41e6JfSHcDeCUFAeZumyG68rEd6chzqjBuX6xkrw54tnPF5nJ8VvryZUtWMnv7MVqqCzuj4Rux",
  "key35": "2dzt2Bz9qnR3MJnZA9wBayCNJX5SdxxtZuGG8MgGH4dKriqYayrv8enNMLnwEKWK1DvsrncPz2UmJCviU9rtPuct",
  "key36": "3uDUGt7tubrcAkFxVuZHs9K8UB2JSwGu6CoEXMDLy5N866EVWNFEZxGFLK8w7aamcK7enE5Hezcn6wopBur3S3CK",
  "key37": "2L6fvKmUDSPsTkBXDnbqfH9qiiYGbGaJAvCELp1uAqL1e64SAQcETPBNoHfWohiWFeTgtK7jnW2hDJtPnsh9TK2Q",
  "key38": "ZW6gxvEa3cj5yCH1vZpNFm29kMWBNGD1jwPAH5iMAN9sPSwrF8huWLd4ebT84YNjcLhjRK7D4wgTGk5hJagmUQZ",
  "key39": "5QJbQR1GkaTpjZmx92UfRkQDMpyBnhdeh2XfJenGen7Tf3xQB3wpnSrbb3foUswaCBESRhem6NmEMQjnYKiVikJK",
  "key40": "z9nCKfh4xk9YG6BZhgutn1u7ULuC6q3UcWNx2zMAm8JY718Rb4hQBiqo6Xo2eDBTivrck6jMSYYBhdxELfvZJQn",
  "key41": "65d5M8Yve3z6izUtrfGzCAvGxFibgxKbfEg2AwBunZ9Nyph7qYSsS6cFBGQ6mZ9rukUMiFoQMmm4JUp6PtQM2J8N",
  "key42": "5L55N87b9C8Gp4RscmtzTEd95M56QT7Z8JwJpNguqdcYfC1QBnUDDpQv7fuEMNYBkhiawRxSfQ5dwDvZn5tVqDkX",
  "key43": "4eEW2gHCPYNhJm2jB2PrJsHATxg1sR92rMrFrPKBQL5AXWF3QBAL1f8LC83FVGfQaSaJgenfja3UMXoeJFTNPp3e",
  "key44": "2qRX8Xk3tpH5SFXh9Zj3YQiCXtyHmJe9apWPGucUgER4njmceqhLM7pCHsTFvkfh67Za5RnHfT11GHLFvreY9B5q",
  "key45": "57Bc8uuHvNicg1JkxaPW21Z7Y2YGgsc5QtPckZA8b8ZC8bQQvKm2YtN4zrkXABxLcKkuQ4EXuyBJKmsPEouYarzv",
  "key46": "3PDwdyfTXBQoyyE8X69Nd4he16uPUGQSAVWEEaDwYGuVciQP7jZqSUGjRnf24pj9hUi3Rfp95uUiu2vWW2mb5QCE"
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
