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
    "3NVw22BEyrrwweZjt7qAnc5EdYAXHMJuVZ1HybK9mHjUfoUnBGKmHfAC2EkQs98XECpXZupVxEJMfBwdEGytStPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LZpRZBRR1wqzrEMP1iQUcerc6jXFt5cki9c8gpYBmwYB8ULcUtwsnDbN3WjzmowjPTTN83rzBuRcP9TXPaR6576",
  "key1": "2Pm8xdXQKjAUwrAdSWvVs7vcGL9wUxUMv3PuBCrcHBCCstJCeudQiagArzD91uA3QA3Ju9sQxVRswJqsN6rnmpVE",
  "key2": "424gSGAwHbQj5n34knvBnitQtdRBTvduuncKn9fPdKPJ1rYtZKj5soDZN8YzT5wN3mVeqhxdzL14vUYu1ed2kZ1H",
  "key3": "3z1TXWLcLqswHDiWz1t9dBH1xCMF5VxpD6TvzEr9gUkpEUY6dRsPPL9ixk1WssLMvmgpmoq4xGHWebFCjFyyyBHg",
  "key4": "7wgHjDwTcW5PuQctr7GPiFMJXc5MjNnLQ4jAUbjnvSq9Jb8wcFa5nfT5RdrUt2zgG3hLYwvcs42GNWT7jUotpiA",
  "key5": "4A78gj1u36GjAEwwepvcF4FdiMJzKLYchPfU33qBmo6CunGCgTrGt4QCRuX7yTstABoGtyjMXXpWJivpq8hygwmC",
  "key6": "56EyNaFtuNktxw1qEWc9rgi12WJJAZvtvfwz5zcY3QVtWPdAxmjn6hiY3BNvM6ep1w9SbBE1LJfUimV25W579aWW",
  "key7": "4Brf7fF23wu6XBzpymyo9Co9FeAUHuo971CqUgkE8ZV4KNtAmawUwJChegspCYbaQWCmYNrQyUXv94pjZe5Th2UR",
  "key8": "2ZKAymnyF5QB8CPtMJ2AHvPQsvcVn4sq5nn869n81kxcHorZbLrPtFcGnjtZm5FhV1rtLQsVrx6r1U1bHzBSWTbL",
  "key9": "4Vd7uQsq8FBdjVAedJRkBtFMznf6A6pYNzU3VUSBeGCjfHkHLMqkqU13NvUh8uedgoa2Xq1hD5rTq5areUummTeJ",
  "key10": "5hVs385UTy4MuqTYRhD5e4yGZqrFDV1vAYSYFgDU96tLycbqjnJUbpazyLVUgwdTJ8dHVxnAyTRhxcKNuXVjLsAD",
  "key11": "GJLiwvfjjM3vBGZzfjKKQjmpM7ijNh4kxHVNsAYrGH5AWhoBswvceZuYAxRahRXaNdwMUGckhBfDDuiZpiYDtge",
  "key12": "5bf4LMwMaDDrfuFmWB4NBSBK3N6zPukQenGmfW8gkWpSUtF6m3rTws74x8iwydkyJBSYzW9M8kXbAcuQoa7bwR66",
  "key13": "4Stf5s4cBiEXPPmwGhYLMbz1VKyazrqihvKMHfKrXFGs7s1efgghjV5rHk6ffo55DnForqV6L7A12UH1LtdVyA6D",
  "key14": "4djzmiEUX4Zij5rXhQRQ1opLpnZpckgN9a45inmqQSyDd2XL45mfvaNq8d9AyQFqGixRxDpUR15WTKZWpf4Q274q",
  "key15": "637qJUQ3vmQDmjMAetS2g29XqEQPUAHAodaoFyrk84wxVCae1ngr22snJSoZ5fee6oFDpy8sgePAT99Y4u6phc8F",
  "key16": "2cYaomTdbqwi2SpFFs7K3rxSnpnGBsBtnqu4CC22QB7e5h6AJHv14JW9ovYrmMLi4uwKribBkVP7dzSosDfCTUJ4",
  "key17": "3Qwu9RAW1R6LZHqT1G8LznGd1dhNwWmpAUWVQsyBp7dDDwFwge8jW1C8zDDw81bN3c1NstB6M7bUHeaVDri3C8c2",
  "key18": "4BUqoK7Km6Frc3vwZRKbkqEgdx2VN12obmwjQErd6dmSRx954UhPgPMcPrq7eHrfwjgFQQ34jAJUv6Bbd5HgEbJb",
  "key19": "4c2fcyq9EQy1e3gDrmAXUB32nCcQFxrTf7h2gfB1hy28SyZLKf5fEGymw5g6VgZZ8buqMpVHzAotpxX55og6gyWB",
  "key20": "43ZkpUMmqVsEJCquTCCXU5ijpi6rnqbrpRFbQzWp8cd9MR9BtsyvHepU1QPEVcWGe3x9jm9sjMWZLLXhQbbzbPAx",
  "key21": "3DhyRs6BaM1pAHNLMd9Dm2foCxZPy9Hp2pPwgCV91jWG1gzJC3bS1CHDUnyLqU4qVN92aodprHeNK4py7fg3dKYJ",
  "key22": "4aDNpZpUPyBrfpfMKahzY2AKqYu95gSUt4bkGCKZiXnk93bGSrTaz8AWX1VYFBBjHsZwwGHoVBdxe9FqczJcfVQ9",
  "key23": "5yBuQazqx9o1x4mziKjmjNhJ1QkvGsSvYpJCzQ3hX2fYVjVV13QnaQDCa8zTG6rjEC3ccVKSL8u1QQC1FufY9VkJ",
  "key24": "U3e8CejZyHv5eFYKYT3YVKLL9VKR1u4wtYhwYikTaMkfpjpUnFpxT9MV4xCk8LVL1BUQoBPMajVu8M79GfnJvzU",
  "key25": "KCHSDSEuVygEgU1hCBJFgiRqVHemVSAmeff5g4rhEXtDbkg1FqbkZLzR9EUgXQuvxMowHxFYyehr5WcFpPgjY5M",
  "key26": "3ZrJDj1BM6s1G3dB2q8yndqwxJN4NqNYMVWonkyCAtyVXhcV3wEiukVrUp3myq1RBfrEwoKpWtwg2N9h1B86b2xC",
  "key27": "299Qd7bLvhhzMHckfk7NhErUCx56Gq4NtQRqa1i98nyQh8SSTGxgwWzuWQnP33PVdYztuTyGUmnrJPaJoVq6cFLg",
  "key28": "2v1d4FCX6wBcXqafo62woCBMFhbYDttr3VzSz9ddbN2YAdhvQ1KD5JYvadaYhoRXc3vcrTnbjosmrZf8iPHNMq2A",
  "key29": "3tTZJiZgG9HNo7uWvZrz6tJfaPfMYw9xqFm5Zv6M9wu2uFoGv4LDwzEP36jrvtKWCc64tXiVHMubDwazgj47Nk39",
  "key30": "2ddATJJkaEavzU3CHJJW9e7NtjrDvsX66DuoJWVpt21BhTapb32bG2Wsj6cgK1AKYY5gJs4VJXxw1z8rXkHxzeep",
  "key31": "5HPCyKLT9YG79DHrdE7Y8K1Bo8bapPhEJ83XimYyFNG27Tk4v5HDGBxWSir7X5a3znkPbfkHuwgWxY5ZtwJgeELF",
  "key32": "KXdVhAPK951S8GQZmNUxSudEdYHEo5n4YnQo6prLxAFbSeoxznoiRoZq1hX3ZicFXPj1oforjQH7ib7ATT1mFgp",
  "key33": "3myoKR49ugeJ24kYCKLr5ZToJWcdV6diPYtrUKm7gCNsxe3Cz9Mkpxw8wSVAWJy2A16tSxUg7MpACARwnJTbYmg2",
  "key34": "5mwP1qeQCC8aQUEQEj6F5pRvjVqqCUbkcsJQo14WQKNe12PKyuJVyQznHMVJktBv5G1m41uFocYAevsCRta2nSNn",
  "key35": "3yryynVD1verhS3SoqVu1zBwtZANhBPe4TCu55kDyam141uCYohb7pkzARuyy5XDAjWftziq5hhW1G2EZL5ccq45",
  "key36": "4Vyppkqk6coHnDcGYEprQEFcsdn7UyFqQnvdYwDstmrzQ9mmoJv6kJVeFwFdbHAwr4xKEqxUDhgTm89zLirxybBJ",
  "key37": "5rasJ95YNdC666k8dHuwueACLDxj2EKwafgU3jXoiYeUdVdRHuJjUkELxpwLsnRbWQry1xVPGKuyhyFPCJ88cU7w",
  "key38": "pNcggynzZ3k6NsZvrzCH4H38STwDHWrSSMYyzXqjbczJZZecStBVQQvf1XHyXtHfhL3yDLEhbDsWU39M6WSspjC",
  "key39": "2u1rm9dadVATPbpCxfM5EKtuJkc76N1U7Zf4pLkbxZTaTso5uKrrs29BstFoM4WonkchqYxfccpd1AssGfgkqKKN",
  "key40": "Uh7JgRjH6r67DTXiArDBQ3Z856iSyRHq8R3c8wUzKWEKLqbc3nnugVviAdZdi6aiip4AaXgzsqviCnNZdFoh3f8",
  "key41": "uRXfAYMrT6T3kSGJGKBowVd92dCZUi4MMoBUdupEZjeNXdWzVW2ybYWBWorfuHNhKHTRZuqhtpgtJ1gUvYd5FN2",
  "key42": "4cKJEHeNuLFX7dUzgZXrjt8YJ6EE3e1Up97e8VmMJsKx2jtptL3iZxYe6F4ArLuiuwuDnfECdxFkwXcTDYzsKnDf",
  "key43": "86GAhWt1ANogHMEzvKWvWAKbKdhB5Gp6uZaJJcc543tRXzfLnhdfXML4jw21H7Rpj864nkZRMxqgpdYLxshBeMo"
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
