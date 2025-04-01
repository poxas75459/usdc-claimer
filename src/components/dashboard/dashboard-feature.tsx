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
    "26bjzxUR22nvCu8Z34q34z2ZRUKHwAYnVzB5dRgfgJ5TEjS7PRSBVPaoHRrjzVoLTnjtsxyg1FzUqSkBQ5ECuUo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BfpURLcG3Rpp9nRmqqCeo5a1nZYVLfuXMRwPd9yws9pKUmGTvnfqznLMfU3yFnU1xhuyHHK2C3t4U8kLhoBKsb3",
  "key1": "5zyHRWL6AZfZoyBH8Ewh8NS1XMVx87xhhacdzVQ9897QMDzHJMDGBCre3J1ShewoMUyHmEUqRZ6fuFsE1xZ7LjdP",
  "key2": "4b2ANfoECk8CyeFVPE8DrEvEe93cCGZJWdN2ArNWSNiQuT7cAUW9oSRS6MgfKjiqY2fJwEsjLDoorYHCL2KTiGeY",
  "key3": "4eUd1pEGjT1SFS6Hrm39eqYyq1jMhsEmPA9L1aTCss53RxiGZ4CEta3os5bvRupz9rZ6Vbm3r5R1bQwTR6mW2erW",
  "key4": "aY7au5rqGS99kqd3mQwd6r4j5VwU9JVknkMvBBQaz9jEEYq1QBqwp6QwJ1CGKjK9Lh6wicZVTwFxT5Y8SFn9Y6q",
  "key5": "FABm61t9e9wJs1g9AY4fEqS2B5VZFc9bMQuqfA2XicoMbbZ1dKNVtWzVzhpMf7p8wNVhdVqMZSwUzoCms1P4MdK",
  "key6": "28efGHEXJHinPrELsBAEfgf93qnkjPqpCNBDrSng8ynv47cXk1vUfTcnoTo264fHAZpSKY5uqk6HwUan5cpnJU8T",
  "key7": "5KR3jf8kK85pjxcA3bDJirjeLCKyD9DeBmTCFtGRUicx7hW5YTL6EoS8bgHvrGpQWKJ8iQ4QHB21HVuKVvMt2Riv",
  "key8": "2JLcu3pH6iEaGoH4c1XyfUu8ELcDUMBqoJnDvtxeTHGLYLRNYsxbbXoRKzBEivxCfaUoUaSatGzaUxtSZXfjFyPx",
  "key9": "3Zxsh2y6yyDa4Wp5V4YyPJkX2ic3WwMLcW1tTrszQwVSzzaruSFWFRXDHTZvZf2CPTr7ZjExQUUH66fLuyJxZmQk",
  "key10": "3QvYnWD4urV5s7nes6PYMkJUhXsMuPA62KJaNBZKRwZ28EznKNCWw1eWZS2BZCMzsnyNVNxF584VzcHd9Ms65UUi",
  "key11": "5DGTo3tzpbq1vBSA4dSvPakoGAYzj6Q9DXZpC1G1Sz4JZAmzAaEsFBHGZk7GpffkNWod44Y7t172Go13j5HoGkmZ",
  "key12": "c92ALiJT6Qvp16sCMKGW5irDwHnkuuYKopvXfN31wEbrn4cxeocP27tGYHYnfUpbFuFcWU8Lw1xVzWFXn63G9Tg",
  "key13": "2s7oj527cPWJciNdUNbZueS5uJ8cjqD87EbWucqJaMGuqE3dxeVrJdao8ao3vW1SawYGw9ibK1w1K5Naa8hXJZh3",
  "key14": "3o6Jhm3N2V6JJve7aRuFgvCuTzKpWaaHgnCTCyZsio6NoVbLsk2B2R5WeewfmjR7pNfSDf65Vg4rHscJKrghsD66",
  "key15": "5w9k1BCtiSjGvx1uzgzEhuCds1MB917863sCVyStKXp5M9zUGNcdVs66yum7kLgng6kp239rMLBwF2KA4NnQjGxM",
  "key16": "M1VBrWM8WnHwpFawG4JUG2fqWwuwUFrCereheyjUZuvkBHAMFh96Gg1JrFqNdnBPtrkoTgryR2knobYYoqHhHeg",
  "key17": "7NqJK7AphGEQeyXtukfBSbLVt4zX2ovmn4ktmtDWdnMRtDqeE8Ytjx1TtabiunhcuQEnJUeBkQnHfNT7jMUDJiD",
  "key18": "4Qm3NNrLLAfUuN6qZm1qrVvfbfXPjaCGhiGrPcNx8WV36RhyTeQ8rwhkHQfkdAQtZ2r7nyMiEAST1Bt7n9wJFnxM",
  "key19": "29a5viG7aLWCWXg697ahydxNGCX4P7F5A8uBggZenARna9C9G4VYN5LjuNSXGMdNbijVvwbSUByC1K5wY2M6vRiA",
  "key20": "5EPwmXjfoSKkKC2uneU8WnGaEb1JMpBnsW64xXdFmPcUQ4eH1ccAjG3rmKcQYgw9GE9YetPh1FVjhY6fAC3Wtjgm",
  "key21": "3vT7SBNp868FaieHn2dseAhXA7MCwLJPwhU5XjH4rkXVuGkH2KhmW2Lcho8x34oiBjXd8BgYoBEMXnkqSppdFq7P",
  "key22": "KNkukP8dFPxckBK2Gon5BhQT8YWChx3zwkKTToJbRkMHNPBJqNZWbAwYG1mKDQXVgVdSg5C1fgzfqCZU2ytexdJ",
  "key23": "2Y6hKahsMRVyPcnrhN2qQwSPtVwcU9Zwi1GLuXgp6pSnywP2JZvbL9QtDWC78ZU1KfvtMHnyo5cbj56WpjSRDbg5",
  "key24": "2EovFiayDd6X5aJjHQXeDuHLq2EtfWzEFs5nt7z5iJFvk7Yf8Gvtg3aYiK44qR59oUMXZbz8AgvoQdTTvNoNkKuG",
  "key25": "2GmYmbNBJUBHzwjMP5doeK5FuaVk5GXmuHwGREzenu76fA3FvrzPvCz9S3SJB8CVmFiRkTiH1sc6CywgqepwEvbt",
  "key26": "4gWScWzxVw4HYpv9Eqh51wBd22qXzgv3aZaq9YQ8UPfYYNQPaGXe5WYfdnexiQMPjQHoPYmLUECKNwJTzsSgsnHg",
  "key27": "43ycQcMQ5a7V6pmMHN7ACop66U2TgoUJk8oNdecJkcC4tChV1AX5ZSLCRokW1CDWU3kDLFtHjbowxTVFRCB7mCau",
  "key28": "22od875mCW4Zz56zg4K64xgZ2H4Fhu8VPi2QanzA5XoJjcrTfdfkSBcTnTqcog1YRtTsJMo6mEiZfsTLty1UPR4S",
  "key29": "4MccL1mFkuaR9gKjfUfcJEVSYJCnsq5kb87FHHQqb3zUbxPCoFsDJZLy7TNotKvxyXaDMAVfuq5bfSPEDwDoJjkF",
  "key30": "H1Mi1TBTxDrExa4tAYN4EY98wQezaJFK52HAEUAET8RKQa8g4ptCfxS5PTbVjt8dqT4YegqrbnEpmW4cEcz7yho",
  "key31": "5LKNCfmSjvBQCyivR536zjyynn9WgUri8cfR9GJkNRQD3sdSLVwX5YPC1oWV9maBdQnz8w1g5GWChA1jaVcx7x7U",
  "key32": "4iCxZtYTcXFZaQCmNTosjPvrF5BHdddVkYVqeRC3RYTEvo4oeBriYAgaamMEQ9XPmeTdf8iciGP9due9y4Xmnprq",
  "key33": "3LiVrZ7t2tR3GFMzjAdeN8zf8igwqX9yDhH1pEYoyS375yfWzDeKwBc1FJHqbbDoZRHhp5HPM5kDEZpuMfXG26mz",
  "key34": "2KwYxbKjpyBz3HRaxeNu54TLDrWMs3SJ7ap4cM6XChem7fTVUH4gsYJj4UqvSfPe2SJDbqxQ9ZdDMhK882r3d5a9",
  "key35": "3gL5rnK8v8hYKLeosEt6chskPCGTK5bkiqHNLxHUzXYuyWZwep4NLRSLAscy9oPeyhBtnkSnJvtnhhSGuSZz3CzW",
  "key36": "37NqnveKe5uDVa5f85ZfiZnDV7n6YDZpTPQcvyqDw4hCFhcEeePYBcyYFbcQetL5avmMFrt6g2e1LynJqrVxxEk",
  "key37": "2k1iL2LEyYouHnr6Pde6JnHw2GhnnQT3MkvDFPnATzF9ZUjsMvXnpTpnRVJbT4pyMC4hXQusE5rXoe1RVC6CsFkh"
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
