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
    "66gThaL8Umy9gtQV8yaLc8uYNFzNGDv77qwUc753UBR3kZZGciX1D6FXSqSuis4bE2HYT87scjC2wGFEGWz29TQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RkR7QbRBJvcqcweaiEi5qLApLsPLjWMFPjyT35KKFA3Hk8iFqCU6FtyZc6wchPtEeq8RVbdZDbfm2JyyDqK4bKi",
  "key1": "G4gqKPuRRGjBJqMqp36wPWaqoCuRHchfdhBg1LmZJpYgw6a18YGyWdLEnRo3pgTVUurr4fsMSK5yq9v8LFBRZCp",
  "key2": "5FywSDVRbpa6YHmuvCivYSUhbYi1d4sUFWphaSqYtDRPbrKyrSEU3TpH42GsfbBVgUCW7dwsRcW8QY35cT2w1tge",
  "key3": "5RsooYPLGTeYSsV4ZPsTxysZag6ytCdM6YAiWBZnoYb8kj9yu7LkfDYQhqsLpuM6v75Cx3gQPsogqqMNZ9d2VQog",
  "key4": "5sGpPhErXTbLxVN5FALwdLGGmrnzZSKAuCTAK21QXpTYP3KgBdZBSVvmWoVisFR4dPMEna3FrBqCyVHQcsjnNPq1",
  "key5": "pfECTQdwxzkQSRdu4c2yzL4yxPx7ZTZRJWQ4CzQBhH7rNUBChiTi3zPU9VxnpW46YKKPEeZjhN4WmQdDiF8TP1w",
  "key6": "2HjKYNe3nS5UvtPkwyaMayqpHpkEDg1FwhVS5VoqagJstQVJYU1ntjqK2xjgA6RA4EMpEWH6337ZLEPiGhX88c2W",
  "key7": "38q3NEWRcyNvJKa9E9S29TsNkdoH4D8cxxrFnsGNSqu6UbwQPs3wimaa25j111bdKrDJiwXAYvAtU6uURQQxHrij",
  "key8": "5CFcPM3XYsQTs2BVv69Zp9ifPC29edteuCyoZmfk8d6acBsC1o177iRj77WXpir5ccdE5k7U77jpoh94Q2mC3ufQ",
  "key9": "3LTKXJvvY4x7o4HVdwnGmAE2JuqMxkZwqR4ZK4BmNtZae8BqtHW7PknMMFZHyjW45AejRToi8c4gqPdSkN2yT6Mh",
  "key10": "1282Kn98Kz4NTA2W2a45q7yiDG21Kafsoh26Nx6aYWbDxvWZTWwcvUqRyGtspjCWNnwvSXWBx8VaTmD64nJjgroz",
  "key11": "HMmvv4bmGFVwk7Uieht9j78NibyCnmy4wkZxvJvL4PN9E9cLXrUeeBaFQv5iij5T4BAiYYs9GcVFkt2VHrMkwEg",
  "key12": "5AQXQt5uM3KLJgAAizfggGikRHrEN9iC69e4nSYuN78kg37rLyVAUTVo3wJJg9KVjSnZpeYZqu89KSPxcxinjbHK",
  "key13": "5btHPaMbZ474qfbobyATLNEQV3Xa4c5kE1CWEkvMQmCGD7BxRpgCddAiycsRpoCYeaJXaYaAaHUq947hiKV1atN1",
  "key14": "5FtqMLhxJc4sP1q5WyJyPcTg2g6AHvktjgE6xBVar2fAqv7cURShv8Mex4MGCP2QT7XgmSbi2kRZ6T1oqnJryiNZ",
  "key15": "cCcTsSXLu2v1icvqMZsF8TTsNHypkSwL8BGkTmymMiyDKv6PY1kkVm1MfCLrJXcWhQNT76XhLVYP9qrR9zo5ZRS",
  "key16": "3H3msDK4gwrmiEzGkmp14ek1VMcx9Kw6GwUk5J4EPsRqH6bspVcvkBJ5ohndoC8rJyNSFLU3CoG8f8LVRAjHcr7o",
  "key17": "2EG1rJ9ciSs3D4RwMPAG6mVmf9qct9p65hzFmJXk3v5WzhYPj5PapD38QpykAJm6nWidprg9Ljsz4JC6RWxznR96",
  "key18": "5GMq76gkvVB3tkSvuM8ofVV4jZa1F9i1WXVEJaN13b9ZPfzS3Yny5JgnCHLnH7dZ3gJaFhUmwpYgwPsC3jYDoEkh",
  "key19": "e3Te6pNwJU5JjDWfXEPJ3uoS1uCvcSw5ktXEWr2aeLQcZuNuXGyGGrMAgF8N4hUBJN5ob4CEmCbYoD6sifH2EgR",
  "key20": "4pG6fKHUhazmDDkDBhiB9n9V1944dczipHqXr8sceaTncRgugNnRbo4qyNQiFSxmJRr2GeySknvLu3pxKNtbNgjw",
  "key21": "5jqsphBax6E3GBonN8C59ApjBejxQ5YBjaNJU9AsztsWY6s4u86XF6bK5QFusG8bGGaD1P71KwsvJnUbFPRJiVte",
  "key22": "4iWEBVfEwe63EbnXcYm97D6X1G3ZJg8dkA8K5gGAtTNSdUEBoxqgSf59Ms1g9TCvQWryfF2qMwbe6HWNPaMGMZqu",
  "key23": "5oxe3y5DDexK5jy1Rq6NuAtp8195QGRDfd3w3C9dz7Tg1fPMWBomos9cqwuQ3PgJ6xoiTTP8EnNAic1aAzd5qaUo",
  "key24": "4z7LhGtAsnAMXuBheM2ZLjEVozZnGZDk3pm54UTL4j3RcZWarYnkTSszcg2P9RJbWRYdDY4nbKHfdX4L1qYjBovh",
  "key25": "5ofW4B6hsx7KUBxyuWgJGR4yMNCDf5kzT4GJdje8NmqyD92F8BNV1pXjDqnb7X657rb5KpJDEcGc82vFGQPpLiA6",
  "key26": "FkxfttLkpDQNvwnPQcDLPS1UHtsD3ErYGEwN2TMxcU5KurXwzT6RWXTLqm6kHB1F1DXAG1dPuGJQnzX6sKoSJdB",
  "key27": "4jPNrMs15tQoSq5scdFHmC7YgUDjNBiZUdNSa9cavEpwxChzbjgWguwYjLYvYfdn26PxS7md9xLvnS6EqQfaAG14",
  "key28": "oifm9iCbbBhNqkY22PK3R3Cj7ccYcGY4PBo6owSLEm4etGvzL6nv2736zUBpJRkASXWSr8mFR5LuFHFGbNKBPpH",
  "key29": "R1gni6rAPDRAC1T4LgtLyySNA9mDV2CsYfPRzNgSz4uQwG1vTEGixW5R6w2dmZyfjQTyHPAYqDyXXGwyStDFgsv",
  "key30": "qVKdF8scxFvH4DsTCk7MnJfZ6NVJUtCNJzdtV9mF8VLG9Fr7yvcKgvJcYTMG36vZkVRjSem5BPHLSABsLm55VDV",
  "key31": "58FqEzYFyrpWKinDodggU3YAs4yNSXC17jqXAE5h71RqfJjrvPaSd7dKYeYtCZbigyj6DYHe72BLzv54f9E44Zdf",
  "key32": "2QUYNCjUoi62sf92EjjZf6BAS1cZcF27FDE5WXLybkagpvnaqcUWFEcU6a3XxfZzLNjGkTFS8Fv2DGTS6fSK3wb1",
  "key33": "5TjChUK7wAFqV9pembqRmzkg8zidkVLoL8BzbrrqU6sigk4WQcHjM6chXhXwrooz5cXW1nAEvc9xGfSPWjBqDfqi",
  "key34": "3ZF8jXK3TMHogr5Yqxm8TkjKGTjARUtGFgMSVf8kJwfGgR6CWq6tLXiPvDwgRJY8v95TqAZeKcGV16zras2AcRwN",
  "key35": "6dmsVxgJhRrZc66q2U4G3S4KUWBkSXcQHB1yRPpknRUgYCgrjjArt2iVma1Z5bAbBtZikHzn7WoGhiqMrFZeG7e",
  "key36": "5ZYY8SkuQQroZaKcfhWdf2x5oAirD5CdYLurmj1suWq1vCZBH1o5Qwv1nGpomTRtivK18bjmYU9LuKrPMApcLoQ7",
  "key37": "3qf8cUn7LCVmDM6WinZGKdeBJKuzDKYttmdnH3oNfGXabuyG5CkPGWk3Z6SHZUWXMBJ487cF4nW9W3FvpHKsP4Ry"
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
