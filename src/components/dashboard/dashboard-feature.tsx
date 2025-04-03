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
    "51kfkvSjKFnTqwYdavGYTHwDoBBwTa4bHNfeMDTyzpWyaJxqybaF5Zwt25SEEepMncm4zLG4KbjYeRZxjXfsq84w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47M1A2imSs2YVosUAPfSatn7vqQA74TVajRd7y7qxNrwsrRwfDLjAUzfgkNxXcEhbUDQYv3e8tTy6wGs5sRnQYpJ",
  "key1": "4z7ipQNDUgRiw1y3DbT7PPrPKgxzH4LDZtVpBXVvJeiRqfDoszA6sUoQSv2iNxPigqAnx3wiTGW8jwcKYJ1z5nvw",
  "key2": "2fZiWHFonG8LjP4TTrr1SLmX6omhzo8tMhWvhS4G6KoVJzDak6p1h8SDH9XdfvY91Do4252f8JqcrE564kNmLBHS",
  "key3": "4gddbipJLe2PaepwFyxqyiNAYnxmJCgsRPRvBBu5WZM8rgfr9onrcRkHpRbpCEakpuGBnww6ErZ79LhMBkSjYjbb",
  "key4": "3BU6fjJPETbLrEw1vXDt9EagJDLvtC3SwtFFJ9U2Vv8VRENYyS4nzouiWBoUpRGqhr77Tt6YehnBqGq14XWzHpSv",
  "key5": "5rHJQY7MQR2bWvTL8nJMWWUELxj1DH7N6YgrF6Ut2ZN3D6BEhmZ3svn1DzgNgUzBUUvDWzupxaU4JCXDDef6YsYD",
  "key6": "5ataiGakbFquzpYfAWvuQEPDDtJqNMzAGKSGpYebEpz7z7ySCXtk2Jo6CvktAarKowsYS6yDHF85C8p28MNEJuQr",
  "key7": "5NgaSGZyJTvcupNqwCwTosJnASrYSm5dD53CRuPHq1yRQ5i3zP4J2ZBvM153wF1m684Axqjft2fFyMukHNChW8nL",
  "key8": "442ry6jEucwGSdog3ugXkfNzyxKgWCQUnKFqc4ysAWUkfA2n8dk2XtnoEUAPtEQPkT74QgismdhFZHm7zQLYze2L",
  "key9": "3eb5WaAZaYC5m1qWmjiK3v4ujdjwkent6tmZbjvyPmpxhR8zfa1EEQ3LCVYPBM5JVBZCMM2iAiua5Cdq5k55f8Wd",
  "key10": "2pSmf6QDkganE3yRqLeDt1LYrBsbFXbhoCa9bHf8e3UbR5kzkbCvZpSPRhPffXY56hc1HAEygA2HXto6kuANQKDU",
  "key11": "4MEnaZf1fYcWTqSZres692qKmbbfkK3t5khAaEJgRgoqJEMLKuaCMttzfMME9SV3fJApC6HmWAjseV5a27t33tAX",
  "key12": "3EvBKYyEvRbyfBQCw43rkb9ztcagMefTeQbZ3npykqSyy25cxRSRkF6vUuhTYf2X1ufyPpYLS7hJTngyTp81MaLt",
  "key13": "5mWDXi5QV8gitpEsyrRV5rL3HYbmq76suqsMJ7GAsdPspSQFs8e7QrKdGWeKUvNoN8iswaehGXSAupTTPyEAJnC8",
  "key14": "gKS5D95LBmG3v9vZVgYWQtoxm7QB1D6d2BaN6ACjnytHsRTSK5oB4h7QntTc39ZBWWubQs77D9uGcTZAuiosD4g",
  "key15": "435DxSDkhBh1UAtZEb5Ak8R34EhWXepvr7Lx5nyeB8tb34SkxrjwSH6QvoYCGb4yXk7GJrVQNxBzqLEYbhSs9FAa",
  "key16": "yUyYaLPSRKH81y5uS6MyQGbWMizFxK38c2ibDpvbC89vwe3vffBUi8NaWnQMyEbZM8ckQV7CUE46MfyQ3ic4F9d",
  "key17": "Cw4mzYYi94MsKWK1232soPUnhSD2yLbjTgJXUqMCN1BQmZaQF1ohjteYZYXPcHNeHtRT4RsS2LHQWPW8dg1r1VY",
  "key18": "37Q8srkbLFAHYndkPoQL5v7mYem5Z6PXFwWQUKiyjCX41cUcXwRerqEwYofNiq91nefLyZ7QofpWdZ5g1dWb2wpw",
  "key19": "61XGbDVJrVRPS8RnJEZ4dAx918QVjVUjsfJJWBH6tdNrT7yV3vHmcweQYJ9Q4v1oPvrYTETtT1WtdCJhMgB36FX7",
  "key20": "2KsASf6RSHcg3jsJcLU1dKBQdsMYHggZiQPzWZmigghS6jZ8d4KrrwJ7KceE9hkEYJWx11BrJQDtRjgY5S7XKXtp",
  "key21": "QmH9dU34KtsZJaDWQ4vPpvDvcpba3uQwBoyDSCefMDNUu4g98TsGeHym7kEwpgp3UW71vxLv7VcHtkrVmzbHDPP",
  "key22": "659dg2pTMLHRLy6zVjwXTNcS4VgN5LiAH3mfk3BCMDcEsHxtETxiZzq9SGk5fAWQJjmNXaiKavY23VDL2Rsost5H",
  "key23": "3K9gxUFHhQWup1JSF7rFpX7fgXmmeArPmsELXBgFy2qxapE3RZ6PQSZfXRMJjbbXvjySV2eXVWs4Kt8vV6ZFYiTo",
  "key24": "dPFmu8XW1gTKBQHpWqSFpscn7h69RJJksK7CgCLRGbz5i4jxuoDjmHKG32niMSigbnMdWvXDUcmeVD5xn4Zzswr",
  "key25": "4PnJNwU5NJ6GvbSHWpqiDqH2TmvBtR6Uep46eL1qF3Jsdf9F94tQgg3RMQ6A5HmbL8xunkWdHC9c4MLtedHzCXLD",
  "key26": "3r6KitG5n5duLoNmHHh9BAKJ7u8tGpeoqjpu8GVCxs9uFUgts1rb2LLshutbaJ6G9S56BXVpbSWfumx3BGaBFZ2r",
  "key27": "xW5jSZB4vuwSvHxaLVvjdd8rj8SdRf4RMWyJ5ftX43M5hTycZs2nXjGG4dZa9uG4tKVzB39kapYwpWBmq2N21M8",
  "key28": "2dnwopiRjuyHLXCUerh6rm7SGxxJK3ePUctwSWCmCBRg3mWHETaJ648MT9SFAoYpRJKpt65WSQ9eHxJEe5bNKw4F",
  "key29": "5TiXq9MpFmJAUyEuht2TfZUbJ1vpQZsJU1EiWcsr38kvgeGTeoUdB9uipn8YrPkbQ1z7cadhJAmuu7KKhNBVnR1A",
  "key30": "2dnfCc9a6XybXEkAtQgdduAdCkcnf4mfR6TLDq9Xacc2fGZ8m7rGNsa8pMqLb1kC75tabPfkeCfSuzNDAuF2b3rz",
  "key31": "2XREwV3d2E2ZVzx7egYxLyxszGhwv24ZrMUT3mq4AZGF7fnvqnjLMDv4FX3pcVJdzXm5kQQFnukCetCBFQs4MPKa",
  "key32": "4ik3CcYLLKbCj8zAJMnr1ba1aA6ocnFJ38GXubHCWbVNdQ4pwvwMpmeE2HTgtyQug3YEWLrT6Evy4iqSRcve8XuB",
  "key33": "9WS4chipgVa2pqWNqBokaBjBmcaBNDajWq31pvLwKoGpJG2VQZJYWAvVEwETWHC3Kb4hJP21svLi4su16Z6nACz",
  "key34": "2hbMNp6kAn5EiyiNxpeyuakUFGu7c9F2ZLi34WrLQMXqQ78ABKwg72ju4nBCwLm972S6yUzYv4G6apHe28sSHUhb",
  "key35": "36BNkz9Gx1QhhbTkR7XipTsEgZpHFWhwGF4K3LoKKZzTL7m5UfCp5YfLt9ycf4AWf5mXHeC4ckrze7HhZHxvYJqh",
  "key36": "4oAssnitqKMMaY65YvJ29AeqDc4ZuwSoCNnf8V8CFVKQBXgh7PWXGTA2Py1jzhQAymHomvmomLQikUQj5rB1wtzM",
  "key37": "5wy8r65mCu8a4M5eS2zsTEar9UBNxNxH33kZNW1s6FpiixntqZBntDWTHNQdGWv9bm12zir5fKs9dm9t26zMc6eB",
  "key38": "rxGr7z5fRywpAXL7cqDTXqWgFs4MhQuUH4xmyGYfujCs9nDqKWG7mcMxdtwtZnuJQhHbftEy3dYNzsGLKPT1GFs",
  "key39": "2hxZZJvbn4JWCuKZL23tzQdESu1JbwxaoSX3i4395PkRzAETL8PAJJe8QkuFLcuUp4hkBx55nkKYupHPxXvpFarC",
  "key40": "374WfaV7A7bk5Joxn4SCYm7tmvbw73g2nLGjzZ56eDdzvgPpH546PRnchifxK4W5Y4KrosBi7LZJJXCoXU5r5xZk"
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
