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
    "4gxVnWPwXMcAuk59qcJxErwY9y7yv833gfYtoQVpDE1SVqAgjYnBhqwWZnRZKVNBAEwjBdQYBqyzedVhFL4natdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zge56wv5PVHn6LntuUT2GRL7oRwwyBt3CMTXpvAi7cXcEEwXHsoejsz4H4edVeXpvvQMjfYChb8x36Vc1KmyE6A",
  "key1": "5Ne1vPsKK8CwSnWM9mRMb1qiDZLheHkW4iKTx7id9J7ERRqRmYTQbHx7mqogizTb9KjSw1WWiM67UB9SBR9iJ5pb",
  "key2": "3b5a4gxeWXWSscYu3ACoccdW9EeHKxcA4o68Bi7KGef3SvzxZ8GPZfgUmQw8RUsYqsKoqYDuDRByLnJn7dYHkqnJ",
  "key3": "2jEN6n4GhQqywnTPD9nxdEf7r5sbPtrbUH9WHpN3R76nztufi75SbWwnESz7u5uVUf71JzcrSpkcz4shjeovHGtb",
  "key4": "NGj9yVsQVvd2ZmibvAUKxvgSq5Se62NxDLW4F7yp6cYwVWd2bHuPEtEPZnFREWsAAzASRG4JiszkeXw6Abnuwkb",
  "key5": "2Q5LshCuVQgEd7vR9WmbbsUhKZxsB5nb4ACyFnSKep8ovzxDzcMiwAypHbcckBByavxK9QZJPNeAT3F6QKfiE9iU",
  "key6": "5nxV184PYZZBzJ2kfqtA5A5XWp8P2BcTDXLi4EiMVeCZk1YNHom3JQSnTkWDy25W7nUGmkbE3mxLzzmNuce9NLxk",
  "key7": "319RS6hiSE9G6ymqCC6PvxtgpmbEeDXV8BvgyJhmVnidDWURroM4uEZqpJo456LuXd6go3ayPWU8YFaYZc8PLfGY",
  "key8": "iHqCWmHyPXVhwpiSA6pC4GEg1rfQfSPvTRC7nKdLrqfA7VS8M94kHGjQQAnuGqrATDAn4BecKUDaDX4rnsGJhke",
  "key9": "5zqunncBUe8Kh86rWu96VfZsoJUZvixV7J1hry5M734JW9C8SaTioBLKdk5wG9ywm3aMYMNdJfE1weanExEY2Qj3",
  "key10": "4szDs4JY2FcqVHzxfAwn9ogfPHuGw7bV2Qc4JH4BbRXCsx7opT9s5A8fvssn8wmoiCKuKeaTEVSaCq2KFFxvePUa",
  "key11": "4pEKPhRLEtJ2zxcxFcupN8xj8kPvX21VyhBuCqQ2fxmeAUpwvqXXt44ZZk4UM2vtiLA5JAk52MP1ywGNtcveePDJ",
  "key12": "5qf23oR4RNF4X1WntYZCoyv3FvwbrpkM69rWMFy9E3TgXwGvmts4qkWX7Tg42gua7oNNuV67MXu4CRN1q6pcudi",
  "key13": "5KPP7NU5kXBtHsoBaqmCmqRidYxFhY4PFn2oTucsdEHocURFzWqq5zMPk6aYfwTHfyi3cWgPF2xP3TrfJgkyNHF",
  "key14": "yAmy3yoWJitTGckn4fsCAXAS4RAsu53XXyUBcHiTiSNFPt156Y9ZXgL6Gtsu5XkrPwsJhP9HCqEwRWy24KYNhmj",
  "key15": "2m4dQq3rYhgvN3B2BPWFFpZGfDdLwcZYtuQGCyqFGuvwm1a6f6vFV49sNjiKfGdJtSaJgFFMqVyPRRiA1f6qUWBc",
  "key16": "278thUpdibogH3NpesTArr4vPrMoDRbGCHg2zoxE3RWjBMkPb2ASrf9dSq7oJ6beF6edVuUNyUNkXPeQ643rAuLc",
  "key17": "59LqxaJJ1X1o7xCev8SBYqauaue8emHuCuaD5vSMNCuUobEBQ4p2F8gW5M7p2AWH8MNaqnh3ug3cEpfJyxnQ2Rag",
  "key18": "5YjhHVMr6VCMyKufaWwho4jgfUKtMaLVSrVEsQDr88qaKHXb3ujXmQKRHb1PNtc1a7TAXT6ixhskNrBhqY4E8hwN",
  "key19": "3SChTFwY6WSU4xQ8BeSBnySMGzC46qCi9DkPArxqUQFXe7xwU473oPMoP8YadusXa8nFQAVAUu5MkJ7EqkMG91pi",
  "key20": "z1BLVQgaSvMSNkCtXxsvAF8WGB5kRvsscxnFdUWjMzh8HaZkTryctUf6TGdULcVSooyVyNcBqVjRWY4EPrTPugg",
  "key21": "2kSkjhhbf9Y3cxU4Hc1swvpSspNg9nEieqsxG1SU2zxQu9GDBk5jU1Tmctdw4JVdWmYesiVt4rmKWYffnR4nZMhW",
  "key22": "2TWDh7aivzYNiL7pYMkLphYP5FNZTbG1Z2KgPrKwJmfdtvtYduC36QRaoiW6DbvcUiLCMfM9DVBFnsGfhQgrh6VL",
  "key23": "5tSeGjEN5TfEEKo7LyxHHZmA8X6JebFDxrrAMjWtkbWhtWQoHSSqLuaxtFDWMc9sKbGvk5MtSacLDjspB3YArTm",
  "key24": "33Sj2BvwqFVPmhSjVoatD5HWnuM6SPHPagTnf5Gbyat87Dqdcjo9VCAJutLtWReH11jicLaKwuPcbzp2gLBw2R1t",
  "key25": "36j3n9JuQ2DgmNyScZvW3zGQZ3wjQiKgc5oLCYYQHpP1tCrcbzxGRMn6tmVu1cdWMCs4qsQEJanq1y634XZ47tMW",
  "key26": "2KKh2g3paGuPpn36r1sNx2LUWe9CcMHsmskJQWgnnrBFg8GxxLitcUaqt3nedqiWq3vHy5ZQVAUtN9Pj4SiR76Js",
  "key27": "43hQWSQzY1Lw1mG71hwjvz93QoyjYvykvGHEcGx24SrLtdZK23Mz8TQHRQegUz7godstybSy3KSrK93crBDYb7Jp",
  "key28": "gSWKHU63tz3HzBHLKw6GztAtGcGRqhyKP9c2xPq5duedNdCGwGbTRWaTjCG5zCLJYuEBc5efGF3GYuRGhuxYDuJ",
  "key29": "5kigJ5s7rkFSLUtvYYuJsqNjtwP4HUtvwmoL56cT6BgFvLQ85gCeX2yq5PDBPBAM1aHzPiuvQAT58xFdaSU7NQZE",
  "key30": "3hmWrceZWSTsWcSJQ4htXf1gKTz7knDwvwgmE23A1nHfKqoBaLNzHk15EWrCu4ENz3vtGDwq2iPBtU5TnT2ZyYrM"
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
