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
    "4Z97SyeSbzYQznJk63gDWLEt2AvM9ze2ZmEMDWZbvih7ANiNR5Dv6oUNwD3w7CJDCYYcZiJeebDeKu3kqFzkEUf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kTZWXK4YozeuJe7RGkvC1KR1Y5Qw66pNSkZHgrWdftZCjKY31ewpU3v3dcCmv5Y81gXBhKAr4R96FvP6jwtRzRM",
  "key1": "3jv2tTw4L91XcefvMhiPTCdX8zRAYPSSPyqoTU5PopX4SZhTX9gSrZJpGRPt3Fsw2UvNMEbHUQtyjMEqPPche367",
  "key2": "5pKfBoaZKoPEYd5rgN8gKBnQjmqLmyCAWWJZ5tEy9fjoKfx2jA7kNU4LB16DRNRG5CyKGx1pdRucecDwWuQ2j2vf",
  "key3": "FnxgVg1snYCxHoDqne6x5dbfkJoruRUuAqa4UCAFZosVFiBqAUBF5kNBCiNBYMD3tYaPKJifmUE3sJcKWejybue",
  "key4": "KPcckGpc9oYWVbBNXjGouwV3noer1wro2twYUue5x4xNyBoRwHWZyCL4Sf7fuTG26gFpTLQgMWLRQVKQ9baAXj4",
  "key5": "5J1ccyxbeCcseiBpvSJLLWA4hf9QA3gSaJX5USGenJfpfVUxLcCX7DySw13rM3MLcG7sc2mYyM4ANNGVxwwyjpVg",
  "key6": "63i1AgiCDP3gaBBAGq3FFZ47WRneAbpXh7iyTV9A36mgS3VnNwBFh9G2SRXySWRL3ZuDDzpquoPKCrn8nsMjQGd6",
  "key7": "4x9RWE8ShU4pWe2V25QQ2zeAHRdh5tP989BSkVpeaQbVHwJhMqSE6BipALqjcKtYKGrGU6G3nE6ro9qwWvvGVgGd",
  "key8": "4qviiLTZTZ4PE8BxVDbnBafT11ei7Pwsg5gA4SE62xRhPvXUwzf6xggfiYpd2jiqteRGNUjqgCQdk1CN2kmRzKVr",
  "key9": "28yvNpvDAFmFsdzY4QRMT4xQpPqFP53n6RBtvbov8fd3ksbBZ9MDGxdczT2hkp73RV2Q1KRu2h6V6pdpAjrZmbbK",
  "key10": "WD4jAYCGd2TiXZANA6qhA8wyzZRzG3X81xZPCjgagyELkxFCUGH5SZSDvYfxeHhc8Qu6n4tyeTjJ59y48Wccaac",
  "key11": "2TyGoASVExDYYH5QdQagk8MTDALdCCS9jAEiFq1TwPaiV94bpkeWk725BpX76q25s5dpYGUUfzpbyWZk6YMYtkvy",
  "key12": "2NLrM92ipPDisJFcCifwX98qdi3L1Th1986AydN8ZXU4vx9rQREstZbE7GArESNpvB7d3Ktqbw8QD1nh4njUgTvi",
  "key13": "g1cLnLvSywsYrmQXD96MnVqfi3TaA9WsKqvh6krFF2PmkJ2HVXq51yBR62S3mVorQSUkZqwWEZ33SJoVvCNcN7n",
  "key14": "2iAJ1Vv9SdeJModdA4ovtLKYCRyxE2K21JD4K9evP5jq9Kc5DPtffRTgKstVQZYLriSHbG9jdcQYp99CWHHN18bB",
  "key15": "CTnSN7huqQmh5ugxWNvkgxpSQ4oyaa5oDH5jvAXqyMfA4eqmUs7BffrTPhqTcoyRJTxTrz1qSisiG8yGLBHXNWF",
  "key16": "3NUbMk8sDW3UzoxiH22RgPY912AotAVnQyquZYAmckwA8bjqB2xpjajZxKvtid4FxaCx5yTTCEvgnM31jLi8Prnw",
  "key17": "bdwBYAsiMFjroqsUUEK4XRw2pEeRiZ6D7abwc7tqtN6tKF7RqtcEg1wG58G7TMUKxmZKzpBEm8qi6mGQG1Aumob",
  "key18": "2WjxsoeveGW7caK4FykhiKFYq6e7xuYC8ZoyGbLNdwxPEkCQZS7sasPFMdCp7nu9zHEXSBo6kZqYTRzyjjEXf29H",
  "key19": "MYMmnPHMP9HBUyjbCpvFPqxVGTjAGSqukcoq6jwPznBGvA5a7ZnmDmtQuy2xrdueAuB7dzaxToCRPhpz8fDzZXP",
  "key20": "5h49JseyQ1kNt3QGtDsJfbbeoWeQQoEUnRWTwJmRHGxfiWhyhq87ixWMJaRV6ySBxiUFB9Xdw3XX4W3MGq6S1HDB",
  "key21": "3aMGfDi2Uk8J1QUdBKFoNrknvL9J5x1BuqD7idHd99okani1Bkz1pWxjFczZ7QSQ6LsZCwzGrKU5DWVWBzYjHKB2",
  "key22": "hfc8tkwtE7Wws7oCq5vUiLfg5YdBEq6o7Cuzke6uTX4gdoHKsS9F6LKnYxjcvFwGVDWNxxByVauj7X1HweUL1GJ",
  "key23": "43EUAYDs2dXWCHLFjjZGYzbYKqcRkigQDwmnUwRrj3HL9XqssjPH8GeMi3uQQZB6EC4QudtFxBfeoxFLBHXDtCx7",
  "key24": "4viHoVCfjYCLaXf5uaSrGWq9tVR8vN8d4Qnf5Jgpvpj6kRuVHhmYC5vP65uBhxEnpUtefSpg3CkgEcaEktd86RoZ",
  "key25": "4Qx1fvEXbDK63wpwEU4pjCTRzxFgjRx7CSBcvYL7HYSxVDnJUjqJxciS1EqUthk3k2zmv66qp6hJmSQbJ43UCR2z",
  "key26": "29mL9irDkovj8uvNp7jMUqvFSTvAPzwsXEpi4NBWao3j5vfZj4dFnbM9HnG4axbRSkGSQpaqPvdartDHnUfVshHT",
  "key27": "4dK4cfpszhZgEzh8wpJmApgdYM2P6vU2UoJC22aRGsGrEm2yQY33VJC9PvZbj4NCM99imhUrcSBvrhp1kw19Syxj",
  "key28": "2jetRSV96Uypb6AW8zBGXbm1WjhR5C71kmNj2oV8nt7j4thyJPhLhTX7ak7wdGkuBYj3aryXYpCR4p2PY73nk1J",
  "key29": "4CSY1bA6AegNrwdzB1tQ77XhMKoD73A11gocvnKQkdh5Skbrsrvqew9fzGuxon4g48C7gqV5mNCSsypjXvBHAiHF",
  "key30": "5Hvrdwo9WX7DHRmmJfXdE5SDcimKpKAqFn168aok4HZRkmnvA448JouQHXDAaS1oRqUXLqAqhHuD8syAoEzQ2fzv",
  "key31": "2UMV9yMZrCDBgEr3Lyrv9mSmcRMw1AsHzGg4ibavG2d4RiiosTMfMvH9qGfthocTotCz9QUR3vJPn2adpYgHxedJ",
  "key32": "3aJK7Vb6vWZCzFL8MYDxLN2doQV6jmxbN5CcrukmLWApQXD8QpLPnuZX6ws5f1TC86t5DPRP4ejhZWoi9vyzMGib"
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
