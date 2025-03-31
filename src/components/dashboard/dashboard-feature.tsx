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
    "3EHSq77viEwXkscbuQeFDc9kjro7XFTCx7gYbzaFXQ8rAJpbi5fnnWa2n5Tveceyj5fxtnwjn2EbuAL6izLJKcPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j7jBYKzeCmXTLmzX1LD5s4tCxFPkWxBRJ5GHz7rd31aMmem73G8EXxK5tGqBMpbLgcnZCwLHJAttomgBG3vvU5D",
  "key1": "42j9PCHbNbKo8Z5JCKDwtQZ61kJbgA1GxuHcL4dKey3tYTfHkENkCqJPXdmCKhMdRWwgeJvFrJDJj2wKgWba2kR2",
  "key2": "26XZ6o1TDe9yjAnLcSCfhH2Myq3gKZhLFSryRmhqJ1YTYCFfPPCqN7cNu3j1z5EEdUNRN46T7XjpXLhcLPVPGMmN",
  "key3": "3JwbgztsLEdLa1Sdzyo9fgjqHH7Ztiop8TyG7vPeKkCdexFCJACXiHRUwSewGkTdjfT5bgqjLaQ4Fmz27xfZwYQk",
  "key4": "3wW5Fvqc5ohwsskezbg9A9U5VhxgqVhxq5UVQyJ1exARtT4cB9PBv5iebNbHk1XxrYyxMUGoVz5k7KqcZdzvou3J",
  "key5": "5ZWRGMTuSdHAqpcHLXwDsQm4Vn4crY7yXsT21UEubvrvcsdJwF3HsvRJqd48QYkxXATKfp1jN7gpsGzzqVCziMi3",
  "key6": "5oeZ6nHwBnseXjGK269NddudCPwJYsmmBSdSJGvvxQ45zsV8e3kUeFwKjrCp7DpmxcHtbRAoMTyxtUER5R5ACpM1",
  "key7": "5B6FkwLhs7hcWRdPWxZS8LT28ahztecwr2h58BWA6VVCDV8W7in5eCxYoN8yTRrysM4vWCnWr6qoAMW1ELEEXYoA",
  "key8": "335aB1LQLiN3bZd1PtjCP8C4JSFcnNj3t1NDNDcAxAECTdFjMiPmRKtc3jWMMuWbVEqCxJe1GvwQqkkKJJjn7vz9",
  "key9": "qvPXmFdfjL716NNtnxeCD1DpWGesM28Zq1UWGSeh87KxjZuhRXBbQuM41JVYrZuAi4GuLHeZK5DCtWaBRQ9yC8y",
  "key10": "5D1EmT9yS7jebZfZgU1QAc2ocvPYVtVP19fxFws5iYQfACKU36zsZN2BTvM4wu5LUFGrKggNEneREMDnLh7e6Enk",
  "key11": "2kZKZQ1YdmXhATDfbTb9PFqDPxVAJmLbPNyYKwpQqxejT8D6z4WbUzAZohha9gb1HL8GwhmFfqPwBpMdq9gyGwu2",
  "key12": "2MJh8mkhbG8PxpYRJCHLorJA6PyRxe3dHCuereDS5DnGCSvkGJqbXRto6ju3gBbuGDbf3aTCK9EDxG8Gvvo9qbow",
  "key13": "VBRAi1DLSqhh8xExjwoAFQhW5J8LBhyFftuSDWmEG7Q8aV629zecqdbKQnZcdz2TAUHH95BdvT1B4apxVa5Szor",
  "key14": "5aAVfa21LKDKWymQyZRx6w1LdacnLhCxGwJqBVeRYeo2MUifPAGLSJ9fYxajWTsjfVtK5JpyVkWTQiQtYKTFkKnT",
  "key15": "2Qbaq3hhT7M2G5FnCNkf5jbzQ6enYA5pHtqCqujzmPQ1sSzf8zyXUGgK4XbGt6iJbYCixF7Qfs7Ex1c3FaDGowZD",
  "key16": "4T2KAHhHvSAsgGd3LFvmXqzKAewsdP3btzvtF1MeyQRRwoubNiZx5wtKqzp3hkgDvi62MhiLpojodPbSfsXmLkaN",
  "key17": "3DBfqEYFWqJqzYz5UcS695pt8BaskAZmbQRCAovxH9DYsqNej4UshMfZSCbGqwikimisSd4Du1jc5SWiczh6L7fP",
  "key18": "mDw4W9UbBvwFMHgKGSwmvAwXE71dYyxkqPu9CV8u6E6jMzt81qgXP77tRgK2RCL1NF3Fcs32oFtHJktUxU3YHi4",
  "key19": "3gQipk1hgWWyiktfyyPc8r1UaMExSpbc1mjL8dnXMbzbLk2a7dWJvCYtZqNmvSemR4XCccuY7vkromfrnubtDz59",
  "key20": "5oWsVqfipnGFRmTeHpMZLvRXn7xWVNZt5tjv8hHT34mZ3AiTpZqyvHebiPDosyMi2DbXfGV513zr2F5GNnPvLzxS",
  "key21": "2rPk3DY3Wv7qWAa46gWcApaAwTQNui4q766NGwavodoUUa18LgiqXaVXMwaghk21MCy1bu1FBSxazaXMWEBFAYgP",
  "key22": "HXZPmcKL9HFtpte57n2JMcnihfGFuDtjahmbvN6PHFGaNLgC51Ub8p9keusza2KUcAsetAGrYkoYoY1LpDQJddf",
  "key23": "3PZzFDZQBteUWQpDeP4b8V4J8go9vdfkmS2siGW99owjDNkGTcQtSkypznoPvPiUynCV3dxzvNX4hcNQPXRChkr5",
  "key24": "3ivbmgjaqg3LF8YcVxPqCp3D5RLyc9jLRMX7uwUHdSoFdja6sy9A8NXPMbqwioncjWQJXrbqHbQBJZvaJhignsfy",
  "key25": "3qfKQZBy5dQZHtsFvo5kGp2Km9M2h8p3Lpc3aBNMQkMiVGFKp3cJMuk2rmb1KmWK6cJtRFSmCjYFqYnfoVorW14b",
  "key26": "5uhV1VGHEMxbfyKmarUozitrNbjHAP1YLAdd8KGoP9hodB9i8su5c8W8SPQ6x8yYjLUGUMzhmeGot1Fi8oFCwt2W",
  "key27": "1AoTwpW8pXdaubx5mqLjLgsNkczDhNHSgWKCPyZ8YQAG7PbUB132Suj8fCVdybBWidnP8GTis4TtN2o3CV6yg5o",
  "key28": "g8EeFxMvQZmiFmz9tPsNMEYucRgKVgHNM4FYmzJvpcYXSH84mxfUN87NdzD9qeQLqsdExahGrpinotzV3Ac1YLR",
  "key29": "3LdcFEDqGijNnQxKS6NuyNHc1oFfPG8LVco1C2Mu7qt7tbP6VxajZ2aYb1SeiZpMVSeMrEPn6KVrjGhMxY11Ggzw",
  "key30": "JhVdyeRPYEqP6BSbQUwrSZHctNkEGtG8V2YshYmCxKgR5WTD7hqyjr9kF69HDrMiVcj9oAHzweRhwnLBjiyWAzo",
  "key31": "332AiuqjstMfWhjYhQxMVxB9TWfEiojF4rvmX2WQbfQ6vyJvB74Kci6uw4351B92tESLMBwejucj6MegGMRkR9M6",
  "key32": "5ntvvzofGScY14ZLHHrpFBD3X5nzD9pQQUVXtJvi45j6CWzLx7Yaa3Y9BgAHQZh8sMpXjYFhsHxB2g7bxYfoNEGJ",
  "key33": "3AmfkY7HTGPLXTxUsdfMoVeJbgxnSYdiCZasgRGpTuqhNKjzBoua4ED91eQ651ughs5Pve5BpWWeNnfUzpta2Sdp",
  "key34": "2A3Nwvv71nTb6SS9PsQCSuDREnrYe2Jcwhpp1wgqWWgbpWkxvLs6SPn8vCQ38NVLeifWUtBjWsHGePMFL9J1xGih",
  "key35": "2ffz5tGADBsYvTtvXmBCKctRETDeuoJSFy6TcRu6jg8iGvGzuGXeXdccLjhCRALNRUBKjQbPwcyg2NPEUqb2kyfw",
  "key36": "4NxQjJ2j9UghT4ttgd1LCRsTkWWd8ZijsKVYKKgnzvpjwcdTn2VvB3PD7ATrnbFpHp6HLaXi6viowX7jFBC2v2yv",
  "key37": "5495MQeTJ3F7ZUewBsuaqtFApSD249NeAjeWWWFHW8WYWMHomiRxkPjD8d8SbnfefNTVFrBLZktM1ZLiG98QrZZH",
  "key38": "3oBksq8sbBjH3NpkX4K6gsCD2KUn4av5gKZhX38LwnEeDUGAtk6peA4d8HBgv1iyxTyFL9ZjULWG3fXczV9vYq1K",
  "key39": "5z6zHx4AZuncQdyonCxot4gUKeh6KQr6KuyHf4evGGiWz5LYHW9x3q65aPiccx1D6Lzw77ipwz4nbB8yxkChFgKD",
  "key40": "55ApXua9KUQKJQdNeWCF6X14gLRvE61hcKZzXfiAPkdTox3KBRncfCi2de69z1UY4Pv3CUiw3nJttypXfpXEUvRd",
  "key41": "qmVgEcTxDgTBQjmTPeEcKLB7GS4PrLaKgSVmckqjZhhrL3smRivzYkzGiskN734dL7iYDyRYGLreeCmuZ5L2GLM",
  "key42": "3xK6JAY7N8Vb9vHjdAU6DKjwDGwwGZmE6pay28PRwGsojMu8SisVuCuMcmxZ5vyVM4chjsLawMzZ7HyKYw6D66Gu",
  "key43": "2nLk5m39hvxMPuuH5CRonC8mw77PfysNkZ6nHBi8jNRyqsYXEwLxtYwbE4V71bDW9FCcAboiHFnM5HSwwTCKRvdz",
  "key44": "4nX8eAaD8cGRFNUL1iyUHHbmucWrfDN4gTJUbBZt9M1MKzUnbKLx9XVaEwAzNUqPY4VBPKPdu7sdvouTLttUWNck"
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
