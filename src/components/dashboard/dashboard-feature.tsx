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
    "2aHNVwWBQ6PPes3DZ4meLe9jBoRhF7xRvprDiCdPGr7ujskj8U5AduT2FRqkzzccfdNaaUFx5AVScLjAm58N9V29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Di9eTgbj5kDpcPxpBQfCh5JGCYUrJSqJbC9eK4vWS2CJKmVghZMutCATRrQzghFGGKobw1Gybr8eKXFpsu3PwEX",
  "key1": "54fHdTyLA37ZrtT23XU99qc4Tm144Jau4TnasRN7daAwvTRV1GkSKZExbsvfdicek689HR1huY9YVrQQsnXX47Ug",
  "key2": "2MmBLjWLrxLwvzANP86ego53RsoMeqv6LB6wpdgjyKawC87N4H6GqbJAxm8BFzCxXJQjDJe3sba7mWsA9LCtjS6K",
  "key3": "3BCGy1sQkh3uMdWtticbsSF977qbRj3X55WDFadcsN6d4by3rhaNM1TdAHLoDyTa18XdHUWnVE1c4uRUZYgP1xB3",
  "key4": "3pNyvTiq6DUmNgMNZkoSkPXfcbWRKnGQq6BjYNpWCkZvNr4bY8BrktMZWXr5AKSXpQhFwyZptyQZnoCTAVizVa3j",
  "key5": "4MUwBjJMP8uGNP4UoRRgut2zjY6iZfW4PSJHXHJ65GfUvhm9e6w2t2yPLxYWeLCsKMb3S7PDbuuVdbydpKzoR4bh",
  "key6": "4i5o9PDihBdn2ocV2hzVrcd98MtZzEGwcaUDXVdPsJQR7B3B359m7AAVjsYx5opUdkKS6UtYvPX3J63DxHDWGZj6",
  "key7": "znasMmZUCJpvBKxGiMtyHQsHtyhrbnvN5u4dNrPnUt7RnL5SRmkD4ViEBmh76VbixF8xdgyDcrsRZjQmodYok6o",
  "key8": "3yYc6KohsxbUUJzNko7Kee3VgZ88BqbF8HS67osgjVrtHVmwmJBXi865KhXohegLPJrAizjahEyxDP3pitutpH4Q",
  "key9": "4ArwtoY1kMnNchBwALFYAHXDggKRKt2mU1QrtCqorcdrXVk8gDzS6Z8R8bgs2uESx18zBbdySUrQoGKqwtjurrNL",
  "key10": "5YHCQ1G22bqHjVePZ3FkyNxTman2CuKS3r5NdZRfqJWEK1Q4YwyeUHtpKFPtxiJH12uLoCFQ49uAeG9btKmCzagj",
  "key11": "mRKoUpiMVk4iDSjvWe7nVT9gWuvENLHBfbaYXywXUwvUmPURnmJxWw8V3iANmKCKkzax9bbGuKLXRB2WqURx67Z",
  "key12": "5HFg3qgsi7pjkDdyRpRMe1KJJfjiEmyFBHAoq3ewXxTps752FuEjxphoj6gv33DhRjJNVJikz8jV7FxrXQABjrRA",
  "key13": "3JwoZhqEmAa8GhakY46ru7x1VuJriKVMZYb3Rpr8UE9fh7hRQAQkrW5kn5pUpKqxjLuzuVVZ7V639hVFW1xKk6yR",
  "key14": "2HizCxYi5TFeXaeJRgEyrqfQZXnmVZ3AkTregSHBPNZENYKCZBfeso6Q93Lqt82TnsRpUNYtdeyCeXrCZD2Wq6Xu",
  "key15": "ZWXQdQk2Y7wz9NTvGNGo3kerwcsu9EG8EuhL2QciYeNY9N8pUzQ3m7yDFYaeozWnSMnaQB9Ft1a8eh6GQPQWqib",
  "key16": "3S2LajVJaZ1yUJxh9VLQvfEtvkUYxTBbCimvznWCuwGTnjNaMe6qeW4qwPWh278SWnd8oWHA94UXAUHtNynWqStt",
  "key17": "4G9dcVS3xbY8CNaLACJz7QftMmqPZFpGt4AtWzCwVfPUZJzWiKk7A2mEyTkr8TLtpyXDpjHfnQLSGPQVTJVsQata",
  "key18": "5QZ8qDdu3soFEucYuy6fAJvoS6BNAKxZVvs4VvrBMLKdHBjSnzEHqUd3kPKbQt8eFReRgKFKhNBuqD8uTSBoWgHn",
  "key19": "KbcrFLUbGXZa3LpUfxE3P71C55S1iKNneyC5hZdfCdkgyNeJpGQ3k13G4qw4EvftWuyHBWuxucSTQuw7TqLu7KE",
  "key20": "3wicxMq5CxCbL9Cpwju4hUJKa2i5Dy9Nzdq1gpAyemdw48TN5FQ3BCzwrnYmzbcUTSQkEGRThE9KKQYXZrtAy98Y",
  "key21": "66oHeK4SzG58CxUiruGkvJSLa7QvTfstD9mtv6qDmttqWmLonmG8ZNDfXnad8hc625EPaiRNNF7zXFGBCFTqNBYa",
  "key22": "63EVnSnaQt1pPTGNaHp56HGZUKxRewVnPy9r98W2SmV7jUrFUNk3Q61v8Acsuz4Wfu9Xio1858dK1HHpaDccQX1T",
  "key23": "3NAqk86WnfG7HqkzqwK5kwUfYbvs8jrpZqwEDmpPjn8mvSxBHbT4dGuRSkQfRyW1MmhnoQ8stYSXPBLYHVGvBLFg",
  "key24": "95XdrYss1RS1Hjre3jQ9Uh2rNhjY9zrRbYHNgak4YCDcEvko7feUA4ztEaMxr1MxCaxfRY5rHTHejEfPmFCUkxt",
  "key25": "vKG547LKzaXRKB2Qc4FPgtbyvtsnxcD95kw6TH1y4mVNnsCttHZ6v2umaFEBpMrKmJ6Dzjvrk3VNh81FjMWxD5B",
  "key26": "5n2EcHPCVUKDxpwahy4kx7ub3drqX2ENQqBKpxVPRSsSiSxMScpuoaL51RsiLejHBabuAWBuo51M1TetiKHxdnnB",
  "key27": "9VMxjy4R8ZAENQETs9pAqKw7QbxtuFpu4S6PeFpRmzCTBb88FTiv1Nw6Aw3cJGrwbTG8tbPkvWxL1nJBFBM2WQ2",
  "key28": "3muz5jULurpkGLbDiR6LdxxcVTUiHLS2LJNa9VLrXc9X288FEboxwRhsYULt86kHqJshiNtLWGeGBywLBtJUREm5",
  "key29": "2pqYbVazqCuo5CmLzqF7QLpU9LMdhP5eKgPNY4P7YFgbTasRRJAgddYXU8xoxuDVgVsh6pSk42GEPx6SU1iWERWX",
  "key30": "5mR83Te9q8TRLsFhNhZe6G7E4cbYaMikm8JwjwSBhYWnyvJjh7YsKNUoNmmvi98T1MwgTinL1P4EGE4x4qmMVUwi",
  "key31": "4wXtjJvph1DapE1MSVJdjZadRiQ13JNiqqoSvYEuaHmAt5mZEaCEoQ9wnsUZB1TXytxutfYgeVxLCoYE8FNTeZi9",
  "key32": "2MhXRNMfLETtRurDWb1NJkTLQHduFq9bo8kxeTcBMqD1vUHu8mMtAd7eh3nmGon5GGAmTnVwXgQnL9bQf9Q2vKJF",
  "key33": "3XkXEr6ukhbWifJ53D8JNSs8HiCqXc5iYB3xJe9CxN4CaUEnv1dHDiZ8kPf2rriJ4xTVaRjb2Q4pqxVfitVVJkUf",
  "key34": "2dGYxzTVcTokiocsHv52Nwyr8aAajWq7vLZ8qsb6zkQAFwv3J3sMzTMbKQJnt6gNcpuLCiGnSdiEn5Q4B7jctgEt",
  "key35": "83Ri9d6rm2ahNKKpCxnYjhqi6q1nhrDLd5RZJDWZkiuBf4uEozmQTX3E4NomGck6K65U6yMgWTqd8Q3DbPWxZfi",
  "key36": "3nxhPXHWacKsdziDtFA8rV33SQxfGEGuRPi6E1JSxQh75dpdXf8ocdPm7Aj2oS9QdzujSori8sA7ocjP8WNCJyHB",
  "key37": "5Y24o7hKvnc64nCkNe7EyYwyxpBwK7AbR4bGSQ4dM5ZKgobhkvSEL6LdZvCBqEge6VdUK6aJBs9XCGrjFHTx8eJL",
  "key38": "2G2AQafpApGpcZfoNUzXqUQCMuZcuSihwTJHRuABd2iWfYARF7SS6xDvyJqtnySK1pFAsgvzUTygPCPHEBd8ACfp",
  "key39": "5kxQ3bZqXaB9SXzQW4MYonAcdyEVT8DVFttS2tzndgM2ZHETRyn2pe4pPtt24p9ak6x2e5CRDJWLfqY9rpuwrgqB",
  "key40": "2YGX2HTxQuWhouvcWmAMKk8CwTRoNm8eL3VukBEkh3T3TNu7gtM8wgmp8JMBu93aasWXetcg1qJjDDvjBz1t3HVT",
  "key41": "2WJgGL3ocg3PxwN3EaQ5SAQBRDMyGqvwKRBoUbvGwB5EQfYQzH59jU88FyAXMojk8EXm9kkAHEF9fVBJ4tcj5qR7",
  "key42": "4bNvDC9HHKwvJ1nxSuojVm3MeG77o8KYqMD7picGPct75rJG4n6eJP2PaLnE42MBK2v7wbbwHXhUP9o5DERGhBRw",
  "key43": "4XkZ2LPr84C2xWpkj1HT18hww6Yai5s81tE4nvYsKh22npdQarjuStZFxBjhmDWChededooxgKgPzYQaNf5mXpbJ"
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
