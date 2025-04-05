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
    "2RjNnNWkxiBV1VcxbzAu6LSunR4V3KYTX8RQpAMLwwstUhNMbxQi3Bfxv7fot4NJEGssAQ5brNj9nXJRQBBu1A6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NNsHPgHs2PEj3vn9YpQ2cpPbfUwXHhg9mf7xZ4F7cnzCsxBJ4dRL1BxAENWFGn9nbJaEG7MnguHSYvfcxkAs9gw",
  "key1": "681hitQW54H5GUogaeYTec3ueaPBRdMQ8E87XySBY4zTetVF8JMv9ux7ViekTkr8XT5Vm8c4sFpXhCgRG8wePwD",
  "key2": "3xEXJTQ5iF37uvdgfnJDq5BBekdjNfU6vWLWRDAbboCUELWgeiwJ6u52HH3ZKhiUXDy7wWj9WVEafXpc4UTwQxgi",
  "key3": "5GeowK77oyPqLLYEmBTrakqZAm1FJR9b6xHZy5NNFViEPBhgogRvXueMDRaPdJCfp9mdG1kULnTErsewSR4MznCk",
  "key4": "2QSeBbaxFXYrb7AXR6kjuuVSjB18MpeDM9iGMzxn8xDH1GdjZHXFMZMkRH6ERAwSCQj8fSqA3jUyLTx9WriKZGVH",
  "key5": "5yUrAwBmKZYr4Y797je2YiTDo5K7AqVK9LKQTM6GwQSrormQEXzyzsHXyQ4tM9hGwrm7L8z1hSssCb2rRqsJf95p",
  "key6": "22d32t6ZAhYrcMEBr4ZsPVeJaDdbrNpYewxEUEb5mcHWwxY2xX7GbVRuPmBoFYRWvzv9NnZCEHMdgX8sbwiQ51ov",
  "key7": "hCUjDgf67Asm2nSXgByd5Y2HaenXuJa7UGBvSPeuqmxDoZ6pxdjpRnw26x2E7n6AMkPMYNyK5DR19GTy7x8KAwq",
  "key8": "5MCB2JBZ1SAG4b2cUeW6ycS3B9dKB286jGWNKyr36nXBsZhaRLrwJhueonHGVLdfGuEbMziAen1euGKLCZnEFkUJ",
  "key9": "5ms8BpXjeHePda7wZZ56U934BGbXWq6626RyEfPNxJG6CurpDwF1w2DocYQ2woSE9k3Xm8RSFbLmNdTFxX2JXHYm",
  "key10": "3Q2Kv76Li7qMGFURuocu3JQR9BniiRNKhgUVcyzWbGDTRAxTBxZ4xJDdjbu3LknyTpZnAZoUNmZG1JegiH9dsPrz",
  "key11": "2Qdqz9xcTBYwhtr6mtYTmewvFy4n1y496tU5pk9wLgKJSM4oFGmLWn4MkQaEefRu3Nmis3CbKTbDuTnRY1XMmnyH",
  "key12": "umBkukXvS6Hfyh5ZxbACoA5BypZ5Z52dMffHcTEjMyu4asGrHRm5TSmNqogwb78x79FhPqeLmGCw8qS98EucSSY",
  "key13": "5TBjRSXT3Fy2vYY9FncKwra9wgT4jBa4Ldh2t2azVZJxE2gCrDXVEb8rNoaTU5DRbB8upVc3UGW8QG8N9JueXB8U",
  "key14": "3oAZgZounTpyVnegF46jzdqWB2mS1LYY47ZuDN58WhbvkoQPhj9i8ceur5R7ZPgjCR2Cu7FSQCM4qeEwrey7DADH",
  "key15": "32igxrkcMk8tiEF8VjyeWJnMvj8fryEZ2GA3Lt9X52GfnmxEeb9SGCa5goWPgH2dVyZ8T8DVr9nGjxY75oTfu6ya",
  "key16": "2ZXFSvjfMJqcZDFAY9sbuW6YeRhVPzjZgkc72BAm4Yza76ZKiHVAM7RRdpHQCMoh5pAxfLwZ6PFSeeAnKAWpBtsA",
  "key17": "5eCpCh9qhqa1M55NDwRLaEtCsfsT49tSKSvRafD3oPvVgnP8cjuj5CYztvwrzLX5s8HW1z9CPWqGkiPfkUgiA6RW",
  "key18": "5q4h1kvWMfrgSR3qVnAoWGxhjUTQYXt7SKFKSW2kcinjThE3qkhCwcZ9ZGRiJ5rf8hoSVPAAh8UTr6nnKbbuJBck",
  "key19": "2N8SXmyM11ChKYaYfAPLkLinaNuRySg9QXXZNVchb3sDLQwtw4hmFNtDcbzxus5uPgfMUVVahkRvc51gbWnm9aFm",
  "key20": "5WtQVoLwixDYDrENYGgSdrek8HaJg6X7q99Q4z1xpjFaXh8UD2275ojSywwG8n98j3wSg1ctKSniiuwEo85bJWzB",
  "key21": "vWTnrDRvC3Ec8iCehL5xaJcXKEb6GjPfnnxcTYqmqd7KEnUnMcCGXAVdRkKEVAMsz6HWkF1cMR1YG8fgrW2EJdh",
  "key22": "3opRWsRD9yPESp4BP6iXW4W8hBLuuBPWDGqRs25sKB9BFLba1B3eP5EGb1kWxGXeRNAn7EqKbSxnX5WjaKHZ3WMZ",
  "key23": "4sGf3zJdSh2JznYNNurkemFD671fVyDaJw6vnBywaN9wuDBFarMt6SQfmoopphxdgnZK2HaHo6VanopaeJs2Z5rn",
  "key24": "2iCidESD6wQnA4HmVb3892Dk25ewd8hexrwXzEprcSY6PP9n9aysA8Th5DSkLGZGBSg8yK4ueKthkmKGXwLeqQny",
  "key25": "2yN49ArdmPmcb1r8UoUWcmDBKpo8e5FzaEmbxK4XXDKZErhWXiWc9ABJhupW5HpfZU5vAWms6empRa1hRVJQJyTz",
  "key26": "4hmj332Qc4uSS9hGUvCFYSGkLDrZwj3cWRor8xfLw8e5fbJqqN3hF57weJdVHtaqzUXhQGjPbjtXC7WN9Gp6iWFY",
  "key27": "4U4bTdw1FWHtmHNRpjkzi9XT2a5LgjxivK6Wq1e7ZsoaXtDH7zQbdYAc27x3nZWCvxdWAC63U8P1BHVhxAWMwCaH",
  "key28": "3tUqabmJmpEEG3SPBYnYLjCaU1C9if3Xsnje3sGMtyCdJVorAKfYUEgzVMHGesvHfZ8vWEXxBKgUmHvhMjWrmLE7",
  "key29": "2vn7nmSMoFUZZxFydoJVfnBxTHD6bnd9DyyA3Ea9t3vJ9hxkce9PVQeSjT2EP65izjXAHo5RoeyNCQtaCiYMKGGX",
  "key30": "yVdXnSZ5ZYzFefi1XFwcVV9ii2uYyh9YGUErudFEuXBL9ZJT8cpZWsj5TKoD8TzeiQ4TQTtU7V4qfCKh3HM7rVR",
  "key31": "5s5acAFJ6MEkTU7mLt8fJBb97icBxnS5gzSkrVjvjRj1oLR8NUCxKsh2LZiusazX84V6u6ZcMgjXPv7YNfSQcWpc",
  "key32": "45Qh7NzBYKtKF1a6sDH9JTABELLWS37yywDaDC5dwHxjNYEWYMURib6BBTgo44pchBwgZUGTjE4uNha1HQwzETsv",
  "key33": "gWpR7HFfB3zWEJbg1sPBSrHTEdAUF1iKGRCZ9rFzoPNAQNUJ1SyvwaUJjSqcx4jhmvLhcZstUt2KGoYr6D5UW6W",
  "key34": "5NwvtWkpTQ6MBTcAgj86ojwDudTQCTjct69Dt2Kcus9kFSyUBP7PtFgR34Nv7fv4WkPKLDHp6Qg2F3TWMFvCbyaB",
  "key35": "2JVDnosPtuJKG2HeApcQ42C4LUEdKRxwpQPJjpeTrQuh8T4K1K145ZMpBdyRVJch2b1Pe7t1Lu9HrdwZJHs5CWT2"
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
