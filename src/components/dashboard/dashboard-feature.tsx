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
    "5uz7KoFa2NHa84UPhKnywEyJbpwBTkuZ7bwgqXEbzh86wx9kR2MyfmNrDwm2rxxf3o3Bcq8SkAqtRj6j3gqj8Ksy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "445PAdvnXWoEyKakzHfoWrNTrGAcEfsZ5unzJrxcTY85TqzNPucekKM2nJ9Wd1rWjuwPYcMJgAYfNNgyGfwDvhkB",
  "key1": "2TU4VsoGrkD1jc8QQfzFaBcMcDVp7TS2TYx2CQHHy81JAvmnhhNgbhPpjrK4By1eSHp6kZDFAi5Hb5yqPaQRbkVP",
  "key2": "2vPTzz7c3nQreVhXTNsQuiW8XbCugbED2M5vbyYkQfE9GF5xf5vt4pTzThQv4dSYz9fZwENzFeRaRpJKPRCwdB2v",
  "key3": "3xEnujuWyd2cvTEWKhv1165ZUdSSTgtQJAyVtT5YYsrjVYQXc8yZD2fCwksi9bbDuobzcM4KyJ5HVBYCmTd3RtXw",
  "key4": "339bPaAxikKsg8chLzB5JHEysYBaRJ9GpVHCAhTanw8BSetKU5rAuLRnxrzUmx6AQ9K7d1W6V4AG2X224xi1sx5d",
  "key5": "DoWAHMvExY4Sezu77y1QpSuBdhTvBjiFe8XwrKLq4J376nYLxtptYKi6DJ2MgW7KfhUc3uYz4nrN5vJwDHY33GN",
  "key6": "svPmi9PxQLiyus4FBp1eoD8Fxbt4MKQFY441cPncR3RaZoidZQcKhrSYtREKVjh47EsqrRZFWoRsU8RbmSe26QB",
  "key7": "yPQ5Pzc9qGQpQqVUAbkQY9ZTef7UxvsShA5Rv277zC73kZUFTNF7PK4UnEg2JzAYaaCRqiChHmfEt63yPgQRLd8",
  "key8": "5KPLLiLzSjB6yCYV2uXdYJ1hVRLAhKNEiotwLSH9zf88bqY4K8ahNQDxvhf8tNWeHuccNLcMB6BYyQkyQVru8ZVb",
  "key9": "4GM5LAMPYDePb8c5UkhG7re9h9CGyyGjBA5NBnD9wSBCiVZ1pzVAejmRvg5zAns8aKkUK89UmuKRt6AvSPEgYMvP",
  "key10": "4QuMy8WhorTZWWB5EGfVsT56zamvkU3EAvr7wPevBKJueBMjgeSWCRmeLVxYhrMiD9ZXewSxmBPobAkut3p1cCq6",
  "key11": "2Ym1jXAUnAGFKNDbVA5DGZjLL678RYBDVs7j6WD3GyW4tzTyUNtTNjj7NBC9jYnmuydzWoc72ZGU3JTeZbSz65fc",
  "key12": "27MeeuTpuK9AYVyvGFcTxu2X5z3vKfnNgy7fTpqS7A749RJNS13Rq9Pai321QkemwcaVTWdScsBud6xMuHqwUsjm",
  "key13": "4uujqrdU8Ba1k99k8z9fV7Zpd83gF95YRtoAXSJnmvEtaoJFLJvkcjU48VP8da6LmG9k7MMp5qKAWkqyGufoTuN4",
  "key14": "28ofgd5ybZKGtMfETLF4MD2mbvnuwY7hcScro6WDpYkdswDWrAPFYNsKDrK6U9tGMogu3mKfWxhh8S3wc1DQrBfL",
  "key15": "kQzgM1sTbV8B4Tp83yghmw9tNPL4J8x9Dcb6srK8V3Udo3MttHjY7tULkon14wwHM81ruMxwozCCeRDmZcXPPZ4",
  "key16": "wYjJfViBW7As6TeTEHigF1Qv2STGuk2rnctn8otSkNjTAnrtxSyC8qnaCvmS2yg9MfmPd9ZShxzhi27fXsR9Ukz",
  "key17": "2FA446A31tpLUNAnj1LZthn17EyaKT1Bb3RD9QqaN7LmEacdPiqPiBMZMMXgvAsSC5WrCuCCRwG9edqqyTjLQBKE",
  "key18": "3AXddTcDhb63mJWb1Qd5TN38ZfbjfCZTdHrBBr15SmeAKK3dp5Z4M13FvA9umeze3ap2sLzstDsFLNPZwBbP1j7v",
  "key19": "2Ar3yBzXb7nWaSpKSinXE96ahagUyWpuLJiHsFLL2Ljd1XHsfpbRysVQRmsjK6hAAF6YuUKFk5hFMBoefuMjpLkp",
  "key20": "4VLMXzrdLhd6R6t9NVUHFitvCkMmdhrkvt9tcKJS2L5qGUGK2bV9siJVqGE53yWfzXEfKTtbD5ssaaDycGXLXtWy",
  "key21": "2w8fhUnrfLtbjguvYU9P2ztBtWrb9LYszsDCJigZ6X2H2qNUKqz79mAKFqu5Lw1NboEXFX2PVDWNb9ngRwDbeh35",
  "key22": "BJHipLsTakRGvytQJUUUY24QF5CuLdHBVsgXTLDcQqGBfrnvSTtnSf9c88i7CXJv5h8WZUViiitMsFF9B6xJ8o6",
  "key23": "7vmYt6yD64fCxt81Av6shyeoLEJsGvi4zH49Y5Bs5L42xe92sYsJxa8NpFQnGRCjqsPbRLYSp5pSkWwYTW2aTaY",
  "key24": "4WBaf8gFN2wfZJ3hG83s6oCEDynrBvTQXN2f7MedqBnLNinJPand2v32Mj8nvFFouAnhCD1BXeLirvRx3cgMFpGa",
  "key25": "pbJwWaiDrwBMRwLknKWZYiVreN72gpEpCFQXQ4CRYspeCCyzfayritvXZsTb79TUxMzt159ZCoRmLzTx8t3yYWM",
  "key26": "2gz37yRmP4rG9BjMa28hV9M2fwF3xgZAC7HMnAX9L79fGokzJZuHqHQYkKZYA1LEASisGJaYtrbmUNds1emDpngu",
  "key27": "5qFde7fZXSVmpAZFw2tz76RARYE2sX6EZzL3jY3NX64qAsQ5GBB7FWKFRVGcnZyfzH7kQnpKxig8ex6ge1fF9FrF",
  "key28": "2EwdspDkCnYLLVCXeadbRFyQsmDcNbxcpWyHo4BEoqd892uCJ2pJa3aG8KRDV7xjAPFo1D28tVg4hnRosTQAstYY",
  "key29": "2QGsrt5UKc5ukVTNaKo55eVHNpDDLAkoZ26h2ZbtkJ7hTBVhdF2W7uyJBNzHHjCkjpbGqoJCQc8BXSwyQHoktGEp",
  "key30": "3efhBdtc5YoEBchCqsHEBhLuPwP2i7FcZY5terw4D2dhMd9RcgZNNmHkvjgwqBtkzxkqHQVXpRYhWGL135P7sLgB",
  "key31": "e5KyAjM9mtwSDseMq61miD8UfeJxc9j1cpTqPvgq93yZXLa8a8mNwZFRdtd3cohcWnrnT9tFfMTD8SqNfJsXxTj",
  "key32": "2mwSyBEqxrjKA3SFVwT2cY8jaZDpS8bwsM53FnP6ncuXb5u5bGm4dRhWYHAU8Ev27qcZTCysVVF3txjWRkxPHuY7",
  "key33": "43oAwG9sVbPuYryq68Yh6jx34yceCZ538RTquHiR6uikfG6JxJksnjjPyoGUt6yZ1KfkzrLD5PYuwdwogus6MYhb",
  "key34": "4HyL1gk3amgNGmBCpsmXYiwQu85HawC5vPrBPKp4DNxj1e4ULhswDTpnXvnRTVu8g4tigMd8bMSrBUEXL71d7Rrh"
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
