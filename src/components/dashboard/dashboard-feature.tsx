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
    "4VbBUKYLXcQqy8N1i4gpnQYMxeH7LyFiRKmhmbK1eJ2494FLVGTx1gymK8KfghTD4S81FTZYwGQype9Fcf6Me8Hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SNtWtpnr8g1zBYqngE3AfQThaCgtHYSpsVfJJ4QzTVcsTfnPgQumdwGffaKAs9a3QA4QZbr11UW8C81MJev4P9P",
  "key1": "BgBwov4AUyy9DsvvZrVRKAHtSV6usfp1xgaCQkawhvmzUvicsSgsM7AHmJYpiGiuFed1chnhXqLukUHBWc8ankq",
  "key2": "47JNuxQY2wYymmQEEU97jbcjLwGWydp1Q2EEwxyNnvv2HUDGdAECkBdWTQBJKfFA9pAMyETEBNFfSj4mqR3YH8oa",
  "key3": "4xgkxaetuoCMnbKZbnp7PftKQfyUEw39g8Z8EYtErutvmy39H85yRufDnz4ArC2mS9c38XBf1wgCmUFSDwQVHmAC",
  "key4": "aHkwUd5r4NTpFcFV1Ng5BZUUpfGhoXngWrhjsDXeziA4b2H9xp4eZMfxAKdJvBtJFqxxu3AG8zkZgihXuwcr1st",
  "key5": "2ybt21wLhQxdCy8M9E11cownkoPrNJbGhUAoEZG1c4PwYztJQ3SsWtH3XueVQk3EejMmcy3amRivV2Usj1ALSRdj",
  "key6": "5UNdsRBrDHTALfq4vh2QoA9wRFW3QotC8RvCZAUH2hxX8LfCaviaJ5UtEG7KjT7gDAEJLytCqWmeDuiQnrgjxwdi",
  "key7": "3LjTQxmVYQcwBVzBR9YQLNZGg1KPYpRcvX7p8M6KddbuckULRZQwxghPePQibLHUPnpPApEX6dLisPJS7zeFHeWz",
  "key8": "4nJDEKwUWmQPkrjx9o11wSWgjsMwG8HxaRCjfkFKqQewo2m6cqxiAZ7Vb3dCefPsRzLasyziy4pnLW83KsUDiYvT",
  "key9": "Gpeo5ht5FiPuNCq2j7sgucnvYhhwTS84Er51tbxfiaebtk95NSSTNP7Y4X3jf7uGVh4w4NjzgyqfZNdG7xvB4Wy",
  "key10": "b9NG2txWgxYunqNTeSbKnymtUhqX97PtA8KSTy7mVXgvKkdzoDG5SxuufP5k9DpmxfrPwwKHaoVeKD84mrNEmWH",
  "key11": "KGvxco1fjv6sPkWYSW74moWbkL7MzDxPQiqbssxF1jHEhNu1aa82FGzyYZuKb4pakFs8RuZHRi8rNkgsoPVBFar",
  "key12": "3sWzTWfof1gwDACMxgZj9B32fnaaYZ6e7soRFQ7iqEqGJbBLGbYffaCpHtcW96Pnb9hm5yxaGSTXgLjTCxyzFN6D",
  "key13": "224CfQAsKV2me8hW6JQpsuxjwd9skg8LpdDt2LCKWFXJugDhqS9PrCS4jqrozTiuxQednnXiDBD5nzV5a3BojMem",
  "key14": "2SWz3XQWS3a9WCFd5SjH2pg7nnHsSv5kDErYWAVGYBqtRzpHkvqfzXHBWN12EbyVjE1kzQ4ukzY7WQrUy6mPLJwq",
  "key15": "3dHAtU1W96J6MPxXxcxk4D3NAWco75tDasZUBLauE3XDZCqPY6BpZwDo6cV3o8Y318NffJisk4WR2EnWNUCCEeRH",
  "key16": "5x7A42t58mzDJZevNnLMBPuKEyFXaYvJ12vym5Hwrs86RyS1k2ewSnK9xPRzDFni6tyVwgcfvGbWjkBAhULjK4EB",
  "key17": "2rh2gDJsA9nfu5VqPpj3fXu3K3ZHWRNDGCTNrBPKNWMqdj8cfeMAf22eikqcEFki1gXPCQfKej58J8FYRey9JdhU",
  "key18": "3N8W8MNYXRArbC1gp6zYHuafLhErg6B124GLcyMwyZZeyREvFh33dhtsjioAA2uugPf8KKH2MgVfBeH1GJ7iWsjZ",
  "key19": "5rDZ4mYLdqNVHLQVkBBpEP6G8bjzqkipSgE1fRPuffNm9qoQHZgp8yNJvNY33ZkyNnZGd2aPcyfrXpVTd1qFEH5Z",
  "key20": "45WAzodg4Hdo6eSrtWuN1robqnPVFH6kw5FmJ5GJem6H3QvJWTjDzWDocyqHJKMTEoB7VyC2Q5hE7qY2fFiKUfze",
  "key21": "BZQzooVCPpfXUwAb3k98wDn5tiLhPMLPbS8kSv32Gb2zzJs838dQcZi8fVz9sZWK2y3qWWTFFmv7aoCBfXzMvgd",
  "key22": "4k7YaeZSMSdQ22FEQkPnJGyuZkaWxE2YgxFpfjKYqUZqps9Syow6tDfAxsxQkjoz2z4aWeSDLkiuxUYwipgvARdt",
  "key23": "3Ustaevs8G2A9xikT1HA5Atr8bzQDWHSp3ArLYguu6REwBe6RTEpv2P8TDWjWsKzV9tgKhTpPCWrz1iBt5bectaL",
  "key24": "3Z1UMHG5ZspfdTz4AxCjGV9LgsPxcG7ZyYPgbpNrj3ZX5nUiZh194e2fm61AC6WVrg9LjXxbSx4EvccHtHMuEkWC",
  "key25": "4hvKaJamCFq4yf7H4Ao1qPB9884qk27n3xVaaTMxQkHsNBUML2XAukmB6Vezi5tavZM7h84J19dumN5LWEQQzQYb",
  "key26": "5WKGZqmBWJpySV3GgxP6GzvQRzx7TpdW1fqHCv8h7ZgdYNLWTfjt1RcoqniEgVPbnyJQ7XhqXWosmCHS8YnsjD4P",
  "key27": "2W2KpgzyudkNhTabL9qQ2tvZLdozA2P6pGBWGQ1xdGGrrGys6GzCmtMHe2AjHH6z3fVgcg2pWasvdkqEFVmDYw9F",
  "key28": "387FYAFQetMqoY54p3WhoDN9k15qGTRseGSGKReK5ttrxs4YrTE33qzi5maHH1qgVHToLc9gKAJPFkefoaWtpkeY",
  "key29": "5eewn34pjA4G6BevjdgSdL71Qo54fVzbwnSx7K4zKKTv4rVpiDzmMtbz4dzqDXbxKngYuMwKsp1ixcRhLUBU4Rhv",
  "key30": "4y527rrHhkre4RXaEhG1jd2zbkYuxtuk6tFc2oH4xamqV56Fiot99gHRCpHY8c7J7PTxFGZeCgBchz36hN1ujEyn",
  "key31": "4dVy1JghAQ7wwNFNoCaLhriDnp8jnHaWSt78e2kQeejKqJNKfAsE9GKMutNbVT1Jo7d7qWEpzEtjpX1pshCxabJX",
  "key32": "3QbrefB9zfQHRjr5e31S2RhDpY2zB32cRAFV1qHfLGPo3AL2Pz7P5ywJ1xNCjPYefKFqZdFaAXd8XRS7Jg25a7yL",
  "key33": "5EwFpH5F6BNNCwLxMaBuE8LViUEEF3CWdwEqxvmvYZgiUPMeoRJ1tgkiRe7RZXK7TpHzjqi6DiJjmfhcSoaZ61PK",
  "key34": "31d4zxN8mLXMoYikPHmYJEBbbHCJyAqzEoarWFUVYxpDcgYz6NvJrqUvhLMvbrpu7tzvWFSpJ7hGbrrGY4H7BoGh",
  "key35": "BkGEh9wBdcHstpSzH6wsDMuSQCC7zcsjkCUHe12sCp7JN4E9VPh87wu8Ywc6kAX5LeGaELTskz1FSwUZzFvwXQ8",
  "key36": "676XQFCArApBT4Jo3dkaMB7h9UZq3DDGWsjULfwzG49un1urYPAFikVqWAaLPX3zyPCJfT7D1tg9MZHnQ5DzYZ2F"
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
