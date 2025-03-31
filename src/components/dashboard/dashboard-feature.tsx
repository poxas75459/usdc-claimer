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
    "5E6HDqFYFpaBUcNaQ7XUnYYedfkagrfkAvmtwvQRL67KDXHc52jNh2ZHwBMRW8aFeTgsRmALuh44Ugz749zDJCk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VfqwSLQM7ghcWF5ZkJPHRs4FsCMc5eMVBcPatjFgZTnsgXbbXZJHUnGemz9qJTwtRHPcnCBXh2xcNgm7PyqGedo",
  "key1": "59XjPQSxxc5afJzVrqRBondiQK3xaPezm6j82wj3NbGMBBEPsQtmzYajGVmYPmkfAWAaCthDcoXGxGq63Mct6YdC",
  "key2": "4C4TJ6tjjtTpB3DPCEHC9C3w9LGxM71kCBHKHGFBWxPAQH3yPu1PQfrGBfDst1srd1DKdFwc6xZor7UtpBmQwTtn",
  "key3": "2N96fXt2mY7DJqoTJD1XWPD4Bjv6XqMTRqoQMriPaYbrJLV8e4JfhjDnk52quTnXNuVQEPdah2tYe3gcV4KaNqn6",
  "key4": "56GUgn13ppWpwsC3sbBnnJAfbDvbBdzRXukCDp2CC6wsNjkMSUzJxF1iTrFdn8gdBfuDXz6L5woatL6BJyAQAJAf",
  "key5": "3CVZ9sniV44hAtwiuXkR1nKq3C3tTqBwdJK3SPW9LMo5Mhzonm5JuScz7GDBPGtvci5R4Grca5KpgtYzpwoFTgso",
  "key6": "5BWcwTnURdQPgxZQ7Pn7Q4Zu5LtdHXtkPGVnvQr1Nys9xqhPyjFAx667ZUS7889QgkDrfhr9vusgPxfXEHFPZ5e5",
  "key7": "2iui8ynPPSX3N46zvXnPc91Q3Q3AjYtfSSGjqtkLJryAQNSe5djjefV7yTakYrzk62yPM4AhK5VaQas6KbfsLXrB",
  "key8": "sWvau15kXXcB42se8Lbzoi83p8hW2wjRs8PLTi1qWqd2gQayfFLUptSMty5pURGs79snedimm3sfP1QYcBgiDna",
  "key9": "4pBVGq7JdV8uhTMkzqCUDGYnHmN5xnAFKWAwdgExmSJYFFdyiLgsp1ZLcTszoGpJvMDWkuKatWzJBMLpSsNNAJ5Y",
  "key10": "5sEXFGnsYjDbj832xGcLPmwHHGfF9ksktNb6P5tDfqFHs7qL91zkininUQQQQvdiNX2JAuc2w7brJteo7uTXK9R8",
  "key11": "65uup7myrd8N7eMTpRhqPzivFxYLFRohckp1AJ4svxUeNNGgvmVLeg9iWyhgFWRG6AV9kk8W4U5HXCgvGVH6iipA",
  "key12": "4XPxrfoT1J2dUoaCSvM6GUmGKdANQstyYSrqP8qSppxs1g2msnx6eoFx3DuYfcADKkBG6PkENh4UKnNsc7EE75NP",
  "key13": "394UNuGt7AosT8AUD5xFfxKuigv5HJEYgJbSHAutJqbAJr1yhiTsQs7P92reUUGCjhyrYBx15XYAa4ptZBVd72Qp",
  "key14": "oXQDoX3mYfeGXgb9CNRhY6JVLBpVkDQbCGwAaJRZitYWwA8wYdQqGRW9BXyBQY5uPznUJsPCVnwzmgSCGXG5dZP",
  "key15": "QuCWK9EeRET2C18GsnwP3Mhzp26tnadeiMPP5o5jPkLDr7uhogRZhNyMdhgnCUTjeAVYgyJBCNKXWJJ59eX4abV",
  "key16": "5EBcHp6fF19uvz2g7eZkGcNcCcVBNJyzaTNx9doJBt33VVJwkeJCHN4tqcyb1ur5q4nr7YeHUAeYqtJ44PVts8ts",
  "key17": "2ZoAP92pCvbJbN5mNmGXpQQpFRmdNvZ12AcGRixgz6DyscCQc18xL1WdTGMowcUPvwAw2TJ3Vpjk6Z9vEycWNCL1",
  "key18": "4DovfG84MfXPxqaADUmnNmqGFokiSpM5NGoJ5y7vEqrN1r25EMMFcN1YN24rqHUVEtxTQNaLkF9nqccgSp7W3362",
  "key19": "3gwdXNgPAy3TGcnNWJRZrjcceq66L1HvuxKiP65a8uokjasUgLrsoWfGpmwLiPrbRMNpVFVD7XRbgxUMSAKh8g6f",
  "key20": "2yD6CjGDuFCGJmqeZG2yu9rifwzHBfWNhMaT8izEFoqrj5P8iAtbHKRdrVP1obeSsPt2X83X9scijtf7G6qdVsT3",
  "key21": "5HBwSyQn2gGfQmrZiaFiPw9LoMZDogcNE91rKVejAK866oitayiBNBGvCLP66HvzwpF5ZYVvQVEBz8A6YpJ9rw8E",
  "key22": "38Xjoh1uieJJQKkY9NnBJRz2Gf3AnLVBGenNbK9FQRhvxzBUh1G2WvCTEzSKwgpdXKvYHdXfdeFaseiwmyPJa6vg",
  "key23": "pM6Hbrkn7NmjfLM6LropLwnKuduZvNXqzLMhF6vuD7J98VnJxJacTmnZXEevazz4TjoGFRpz9EWxzEDVY1bT9uW",
  "key24": "275n4zEdKBChG2VZY26kCruqbduZFH8tHxPAeHZjScdoiSWP5CE75FNxhioKYAZQMksFixNmdifvn3XqQV7RLebw",
  "key25": "46cMVSg2j95i2BQyhqoDxr97fhqW3Ba9L7MnqR1ZXmrkQLeeJotJPFppGr1icW3sz1w67Q4ecaTH3hiERZ7QaMbQ",
  "key26": "5nnN6tSwkFg6BWY4wpmA9FBSsLwfsDUyPXcSpqtUcFDptPikcGRLJHeCSTwRH1QAj7Au1sZUPbfU8R4cpkLp9xZd",
  "key27": "Ffo7wGepHzbjkCoBB2PCiZugFYDGJC7DgQDLGRF1TXUhCDfVkf7GzrzMqV7kthYLFBpP5qBbQfyfBXTSnApkJ2A",
  "key28": "BDayHG6KLcVHw5osQdko5WSGSnCCd7oYYcYpUrSnLNGGL5qpmfcjFNmG6zePGSmKqhf4HH4To16LayQqF5eWX32",
  "key29": "5nTJLSZxuh1XqHduYivF9c1mebv3TNWQnjWMzkQbEibEj4psf4fnAfBbxhudoHuvfu6aHQ5gnz8Lde1kXaNwEsUZ",
  "key30": "aNP1ep1UvqU8iQY233Ck3m2bizE5orzPg5DyxoZsK8ZgXaFKvj1UBDkSC7CTohJdZYE987HXVPHRMZS9oqGcuwE",
  "key31": "3JmGRdrLrmjgAWJpUa7N9fUW2rvCU2uUoCt6VNo7J2iChVfJidtyUUqD4BPFHap3NhgJo6Wwo4N3x8dFLWGVc9Kn",
  "key32": "29uKrzugkCpQ3y8eg5ZUbVviNWvhCun8ixpz6NkdveyP8nNCJaPvajq3Z1skMYEnL4CrpM3uaeeji1dciK3LoEwr",
  "key33": "4B1CA2JAc7uTvXeVRybqLMfCyCt9bFWQTCG7yRvqz7ndZ5m17da1xw2NNFigVuEibBsrb4ydVskvnyiNUHsaD8wP",
  "key34": "gKoAz7u4HbvAmgVRawtpA7e27Q3hh7KNJPjHY2dPrVoGht3Xdnjbqvf6hq8oJGGGsZPd17XSK99V8TZdgVsR1Ei",
  "key35": "491uZwwZuZrM25j4GiVGV4Js85P2RPWmk3r6xULZzmmhcuhsySa8ea5BSX1NigRB1SyabJnAiVgt3feToaSkFbFQ",
  "key36": "4JUu2RymzpTBLyHxq9NWTC3KMBC6E9GRvLwdgU5rXtYLwhtgQH2WBk1D7jE4tF57yRUrgPZSHR9JBjwYTsABkyC6",
  "key37": "5Xb6auUrVPAZ7LF6pk93tFD8NQkiQJVxpqH2dZ2zczyV4jSJ3De68yNvfsf7F7LnEwzV3wJv9JLfxsEsr9YwjDyj",
  "key38": "5DxvdeQna3YVTMtC6gdJQpDQQGC1xDie5yfMMvoqdt7Qq3UNLUbM1Kz9XmBQYWwjztQEewwniANtUq41ReX656vy"
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
