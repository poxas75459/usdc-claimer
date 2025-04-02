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
    "2MGy8Jyktpj6eDoTg78SaKvczWhuHPtsPPsceGd4iSV4WW8ML5LLzcpunFhogSLQDjttNYXWhbJfkm9KBR3vm7oL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8jGoQiGNsLD6xfLeHx2iFfdo7sXr3D26rUuDm8BDPrLDAusLFB1K7zj9LRBgaXzHZ3ZQrBQtvBNoz8t5ctHDRvj",
  "key1": "EUwq77CjmQm3oLMph54JoTicg3BKYLSh63WZSYr9HDgaKh51cUbgmr6sX4gETkKdTSWz16nsXMWQ8xYoeViwPAb",
  "key2": "HejCMdn7d5j83CG8jw41ho4MzJEj8VJfYeJ4sC7av37aKMrrjZTgWCP9rY5FXPB1Q3811geTytsMzdirqDiMJqy",
  "key3": "Hy4JrxH5HzD74FNZYusvJeTYTqQMZTsrw249Ca39wL8kd9KaajC5JSFNgthJHeKnjcStWBfWAVG9Fxcx9hE4L7w",
  "key4": "3KEFHg93e7V3shf3SKj7yYXpnUNLeNkSXqsvyXm4rTqEs2xur9pqs5irJB3we9vTeAR91f9ta8vxRgq1gL1kd99D",
  "key5": "KbYPfVLCqKR9pVBr4opA8YyyyiR9UjYVWEneW3Wh1DNGbcFnv9owHhGWBo6cuPWUJQdBP6RPRSZWULYsgDvs78b",
  "key6": "nqvF7owwtsLtpPj4CGLW2MfNG68TqdpJV4w4T1vmLmTn7yWp57Aa5RGfaaxz1mekJt8DaZaKFpsi8QsJvyfLVYe",
  "key7": "4rNNc4Rs6Mys97MJhX3Um8SYXxbzZncfddwnUWGPHeuBHkeAL4yJ8STdoZt67GdiZUSLzXqRWdbtazK3keLSvvju",
  "key8": "Bw5Rd5D3asYdDYXFZWp83bzJYHfLjMPSAncG9JHC6cm11PKbXfqDYimNrooi7aFSSePcqazrEJCWD4cLd5awY92",
  "key9": "3PU2dLBHVZB1QWzxLZdPB9wyCtHwMVS9oFZduUvCqe8vwCD16B8ASAp8Hei3fA5cxGx79UsXjKkK887RAt1NRqgf",
  "key10": "4qB425i1BCbm7WgRJWQQCWtj246NjdBR6gsZ4C45YkqrsqLetxvrYvedo1YC1xWsYhLkSYhy3b3RfqnYKUmsSLfS",
  "key11": "52XPfSEa6YSLvepDYVmgtqq57YQkfL4QENnL3xkSfW42Nh71XnWTvVZFjnEoZ2Pjeqt2RQGcrDewYrUBhFdpZTQq",
  "key12": "5j44r4w9C7fpQ22pKZaViV3ubRetU3eKnuYrJWsoYtfCrcjCwch2p5BTd66P1qJT63zkeH2esxhbzTFvkHtVcGh8",
  "key13": "3RvkTUMu82kLT8f52wPVVfagZTXKseBjV63JJGd93tYAKh76UBCHmsvhtm7TMCHUVrJYgzWyXrvWiRu4P1xm7LMD",
  "key14": "5chY3a9QKibcxXPLVJfkSNUYineUQCxUHvwgnwvLRpSh8KSJysvA8ghLUbqCVaG3EbG5c5si9wJZM8b5f5omoHYT",
  "key15": "5nAJyup2mq7VtLVPF865za8nbB2nCXMHT5KMsAf7ipR9u2CdoMPj5BY9aLYZCbqNs2EGeb8fu5KRZBBG2RAN8cDV",
  "key16": "5zn6MVdWMNUSCNnvQ4iMLQyvTQbLX2q9mnfEawrZuPwVSob7Fi5WyvEusQJe7UF6J12moiSdf56FnRd26tGcpJDa",
  "key17": "3Wy7rhx5BBp2yVDHkjHKNxYLMxfEF26tymPYscVbDDHv49uaj6NzMtQ426Mn7YYki7rVgppp5FbVBLA9q6PMZLih",
  "key18": "51BUKmxx2VATYJKrkqWq8L8Sy2vBtB67C3EKyS561C9qXnmEcv5WmyMy373GR84qCphfmjyRgqdD9jDyMpGnq3q6",
  "key19": "VXZNLh4KSPNtYLt7Y5poY99xEKLDyM28CP3uKPjHmL5GZ2iYaBGkMACRCEzzbpxac63sJT695rMgFWc3m1bk7tm",
  "key20": "64Mh1rRyUGEKETdUHM8Kdfs31Mdj1CRfactG1ZTxNKgm8yyTtXDuYMQLciQXVHXxzm23oThYpwh6974LdNCTeAu4",
  "key21": "3STuMXoabbJbDWCQ2kCesgsvb4ayW5QzWqxmR6vJEVSjnbgDuT2jHhqMttVohnmrEjZHaYY1aKCfQ4bFKLhKf9iy",
  "key22": "5kEiVaXoq3W9tguSD4cykX1peQJney82hRXdPphyiDHTb82cvse9vmM99GThtJH9CXmR41DuGEvw2c4DoJfwvQAW",
  "key23": "58ANkBsZYYAAPZ9bSAp3kz1cBAW82rmr92QaGfVoTE3FNRLpfxxkENvhAgdiKetXJpTXM8aafoAYZ5odWq96qL4L",
  "key24": "4Esm7y834gRTCxuCZ1PoV2jDyXcQQo14hxY5ehKJ5tMR1y6JCWesjdnXE3gy48tCjLUe56RdTQ5zwsEEiR3GN3JN",
  "key25": "41NAwBunMw4cK8Zo3QGTNstXubqBihdjMYGrg9j8tGovXLd1jdqc82D12E52ie88y8fUJ3BfWwkK7x9gkT4znrre",
  "key26": "2hVtLnUPUuYM6Ng2U6hDzzQfoShPKrH88GmxiDEbtqQ85f5KWWYGW9Zwnfdzob2KNQdSGTQ4ZqCUc6eJKs5TrFTo",
  "key27": "3SicATdQ5SPZd1uM1uHxVy8BGjj3xih2LtiFGGCzc3yagpdwjboSRy7dWWT3Ltm9QMMJ5SQ6e2Jez3LFx3kMd9y6",
  "key28": "3fJzZjTmZrPSkxCc67WWeUeVvyLYZH34DB3m9oEh2qS2SUtQcw3H4gMjZN76zgp7qin1R13jekLk3eTmJAKdt4Vx",
  "key29": "aKBcNwxRw7jaht3BXoj8dj3i5JQQVaHptufCfRv2mSML8RkmTY8XqAb3UPmaVg5u8mCEMYiTxCpB4izq2VQKetV",
  "key30": "5gPH26NF19r7basUe8LUKGbWCbEs2VtdJCNNqgATRf18HXQR7EbKwuBpXUeRVKyZRag2bb3siYoohUcx5FW7htmf",
  "key31": "2fCJLPu9YFDh8CSrKkjFkwVwKMjjUdiJwepyEPvFybuLcHs8AyULKdW76djYeTdpU1yKHWGGzCJx4eeZMeWrxZwK",
  "key32": "52WhKEwNU8N32mRHTLqQsgm1LAcM9kX8efaQe22CXoF1ZYiqKf3fh7rPQZndLR4zmzTguDeRnRfu2Z6w4ChRdLam",
  "key33": "4jYwgx34z9pS5GFTMLrU9fqVU7nzRXjqMAMr9Raq6wBmiEzB4vpyU1cAUJ5aHSfXzz7XNzmVsB3vtPEng9v89mMF",
  "key34": "5KAdCf5XXigE3TtvKub87mnH8TW7rVbDbVNgprNTtNhLHd3oM9cXc9XgoGFigq1UvSnruEPfJMH3pUcpvsKvMzqB",
  "key35": "4MZ6aUHGfMcqg6bfFP83VhrcUvanBaHdskivbGzods87bZCQvU1h2YdZh1aPvQyyqjK1pr7HZH8PQmDdttAsk2QD",
  "key36": "4s3RECQCRrFHQAdCAJ4HVyFMhAvEG1uQ8qiVPQvjLDZrm7CAvnT4U9cNYDAjkttqdsDFgftARadwLBu98fdgq5pv",
  "key37": "22RxWQWsLSErFcnTwETerhZC6WSFP7QAG8kJciqjPsoTJCcRpznnqaU8k8G7rEht2JrnnT3rx2EcQ8ZWUrwLM1E3"
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
