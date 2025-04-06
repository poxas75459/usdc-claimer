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
    "22rSRiNNfkvfpR6PK6kQqG1PyrDok21L9QJxs7YN7FZSt6uzaji22asFwvmEvhRNSAQsVkiTLt4vpaTS5NffN29D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tF6SKJfyATYe1QRPBF5RT8ahSQd8KKAMxQRs1TUvqvmW3mcqmTKRDwsJXz6RZBpaDuv16f3Y5d4ubLVugWB8SNg",
  "key1": "jXydtEBfbcYLEXGxfhXiwxvUTHk69wj5VHs5jW6AwS44D6pm2DQ36SqFPn2NGFqPZzKGMez9MEKKqDnXNPRAa2c",
  "key2": "ZmWoJHn3MkZzTipjzairWiNtKM59mQY6PLaH3kHFNc4wjBj7o25U861xcMVLSMBiyttbiL4CvTMvDaL1oZXSKyg",
  "key3": "2oC6S3HgThwYpducDANwMUcRxenQ3BtMEY2zRpshTuMysi88bPNgxqVPHYwyvaykmm1LZc1ByoXmkdLGaA25hxiK",
  "key4": "5rpcBp8bUPsE5LyRBLCT4NLaKbkQwanRR5iWP8JLrGbLRTmeJRs7L1wBK71rXeYEzS5Q8K8VzoTmeUxpTMvhaTgf",
  "key5": "3Z1m3J6K4nJMaKn4v3YtdYMcCVA1Xm89GBPbrSEko3RzhbkKmMLkqF4K4CqTB8pq7Yf7zp8fuFvdLfKyN5cB29qN",
  "key6": "3fT6MbuGq7Hr3AJuts1AcZPHCmhv3dxw5C9Bb5LyaScjuSH6zpX9gaqX9wLDXW9R3EDbTWfaMDm7CGJxof2TUbAw",
  "key7": "ke52RaYYt2QEYawb6uwEpCEzfemodY73pD7cM1yzvJChVTxWaHXBUbDwxPUdktBtd8319AgF4m8QnzyYY7nkPFQ",
  "key8": "tNZTH1vTuwzMyuVMjyeTbGt8LMEp6QhHXo2A4SQqQ7PGGC2J84o4SjJv7YN67r7tTXPHczEMT5u3uE9LAAgJP5R",
  "key9": "64sq2iZHuwh97cwBVovtny4VDBMbHszRjkQo1MLdCbf81jBbv57KLD6nER1bJAVs57V9hh8FCKpYVkE2Gy1Vp1Ma",
  "key10": "4bPskuDxcU97FAxnGsVnyAMYCGTzoAEfk1hSowL1FTvLUmje3ZghQAJXcTxSPumdXUXJEq2EBoxMn1Tw2EbeBiqJ",
  "key11": "4WpsWRoR4kXsbqwjBcF83j4q33P1XCeCF1nReUR77dGwKHq8W95dnPMdFdfRWiTJJdJsnhvbWonoowfDvtFEyYso",
  "key12": "3DNvPzKsPbEjXTnEfxubsCSKVHpv5vGm5RB8jqvsXDwXwxuWbZVZvQi3KjwLcvfk19qENhurhdx5XXKfBrTrkce7",
  "key13": "2TeXqVNwH755jz133n8yASiNWjdbKmkmhheUHHViJotkinUxsqAevk7L7aAcevwvWGeQ3BFGgQQyMjDFMXMTtAje",
  "key14": "2fVj3aRkcpheBMVq2KS7jwroDPGGH7yaRSYekWch4kxK4U962HTU24wN4Zq3CE43KgxGHVzcJR2fyVTQ2FJkGU1y",
  "key15": "4JvDCYXSYhJhui6ka9Js5iDrJKnWJ2grfBNCpKxHQ1fj4FY39ekGrw6PM5vTTtxCerkmETiABzXnsjgoEeaKAAFJ",
  "key16": "5kwhCrZM1BDbTHZJSsryXY5JVrLnAe7TTw4eu4wSZ3FHtvycyR6YkJu74UHyPYrRRAkWTinswAr4ibuj2o89Dut7",
  "key17": "3up577hnx52NUy7hTGjgmaAAiPvbwqTCcgzW2ApHWNTiBEcnuk3pG8wGYfiHJ7hT3Xoh6rvjbSRPUQCYUCFocLwx",
  "key18": "2fi6Tb3oh2uSSxPf9z3xyTjEJPu16Y3pMtwhL7CmPByfYnpR3Snh2dccNjRa17FZ3ZBiRKC4LTupiPsNQn8R7jnV",
  "key19": "kipo1puByJvKxkLta8s8bWmx6bwJBaJsGn1mK8qzyNn4kpL1AJfLbZoM4QshrR9hDwkpqH7WNtHcd4isEP7r6ae",
  "key20": "49HMiF5XdgftnJNoGff8rLtZCk2epMmnDuNJk1iqo6aUNxDXLcGR4HKofYsvpRJH2sYamgBtNSNV4toLvtUVpzCK",
  "key21": "Gw7We3r8z8FKdAMx7JeJcpQ22TveT5PEDpkGPk4LhdfowvcP6cBT6ifXn83s6JmiwE1gnUvCRoUzRtD7hj2uFXf",
  "key22": "59dYux6WWaTdHaWKsyArQeUzM9Wrg3uCkoFJhijAVdCpwmiHrRkY2inKEfZxkcCL26jZs7YP1YMKmst3j3aCxBNi",
  "key23": "47MyrKozCqbFvyqnAoqiCw5LxRMwFdWhfao8Gte6rnMM4zMsvKm6DH9VPyxfGdq5x6kHcG1rwmsFTvnZAhGKGW8R",
  "key24": "3SUrNjLhJL9QmMh9fwvG3BA6iALQaZB6KR2xBr39tFkCio5QE4M8oT8a2M4yP2VpBj992icJpHSqwbu8gXCsCiSR",
  "key25": "3c4tG9ehZqzoZpHuidHoWPr6dhMiSDeRkGhJ4pddjriPCry8rfRPAVgoEQ7nCueTWzHAHfWMRm1DJMnLMhzYw3tc",
  "key26": "67G1bZcZpbJeei2gC8LzB2nboJwomhvX32zbvqfegmRfVKH9qEE6fvmisc4t1ByCAQedbefgq8ZKhp6yf6S5K4M2",
  "key27": "4XvQjgcxQ9bRaUycS5XeDsHpPHnouCGTeZ4NjYKN5n7evYQMd7iJpWZU5m46e1KfXjMSG6yv3EKQrF1DvGAzvZ9C",
  "key28": "61SRsyBQ9ZmJduPiHpctYvTfCWa49R2Zwb6fTu1mMbMm7X1icLb4CSngPFGJoDL1to5sZ2Xjhsk58DFNjyufWLuq",
  "key29": "4tmcJzwgUF7X3BMKFWhGkKKZauJ9rrYX9JAWRxShW48akgWTHEtszNsBd66XjvU4d7oPMXUPvVJ1duohafb6D81R",
  "key30": "2gmRWWeTkm7XQSvWLJgMLYvJcZJovuzywvxbYqHkuvkybpm1MWNehLQzXRLCq9gBa3RLBo9LkXm5cftyWThfJ8w3",
  "key31": "X2Ei6WX1pZrtt8MGZj2oFT176C173Us6EYgLFa3pE1Yh16TSdKWmQpZG4txkcFauzC7rjHVFCeU6cvPHAA52yTp",
  "key32": "4fR69NNmujKh7qSXFsAGUGNRduoJReQW6KUbjpxzZWUuUJjaJincjzkqA87ZHmL1aQxWDFcjBaZazcYLXwbbebY7",
  "key33": "2rXdvvY3M83Z8eekJjDSkF21fYofCocC1muCuLVVC5Wnz8rvFhR7U84iPSkTrVGRMRsziR78SatdqyJ3TCc6Yd8X",
  "key34": "2DuBUXGA5iATifsWKVMpRexmEqj8TBhnnjqLXVuE9NJPLtVGxw76UAxzLjGFGSEXCPPmufdaxFcYBn5z9HfYWJUg",
  "key35": "2eGdFaSNqPTrYhPaaXihvXmrfeUznKrEJfpq9bYMchxG3LJi1uLtfVcvhtzVEb5K3rDXaNpNYRtwpFJiKUkWm1YT",
  "key36": "5MRDwfFzHBnWDuhUH9d7rtA8Ae4YrNcpqEqwwgAQ7SZeLV9a7RwbzA8AEMWoChRrtZ7BLr1FpMdGepM5joBckMEA",
  "key37": "2dRd4oJzQ1woSJVBJGijHoqXhFakthdhojfoHxzMdtzhvcAtVpgMBKLXhxVqQqwd7cnRgEDbVUnXviMPJFZuogwp",
  "key38": "43Z3rXv3EYrJA7AmMNPFWrYtBHnzu1szS8z9gvnLXMnoNXPMvxAs4Vksg4L8ApbPDxQeSsf5sK76K8LiNcVpFL9N",
  "key39": "wKnKn7bSfY4VQpt9swnKfG8Qa3REN3ETiaxF7n3mmr31dpD7B4vyBUgHMjrAeyhSSnycbgbyCP1CtKjDxERPYEF"
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
