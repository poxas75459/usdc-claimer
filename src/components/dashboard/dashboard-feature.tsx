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
    "52UyzvPRmxQTFxnGYv75DvDW6HksjEJHd8gXj5Zi2XMGHfrGNmK8bCmdhKZtF8M4A7r3FThTa3fe3oFquADJA4Er"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kdWQhFWPtMb4vR8cGbVNQeZKReRU5irdg3rdbPsojiwCCisncUhHrKxBmBQ2EUFLMMA34FjEDTGVJSg2vE4WGwo",
  "key1": "4J9z6EWAosCmAiY4xr4cDgpPWEUePakUVKCsZXs7ZMPdHMUtQKrq22ne4CznNfNATUQSeQ2bxf7pkUFcuZSXPXKR",
  "key2": "2Rksr3FkSPbrgpBW5KJ6P9DmVmn1gnc2YZ7SdgpX3pbBaPTxA2GmA5rddG96jSK8R6GYBdKhdx7JZkgazdFRZmbw",
  "key3": "3mopTw3ZRuze2m4JnLWLoHoX7622TQfhwfxd5kx1cfetpC9pwQ9gpY6D2sCeC2CUT8iysgYFBJYgygEDhWHEpPNZ",
  "key4": "2isbmPfLpw3ENbfYNMgAcduvFa5iELU653QiSVKsNm1GNGLfoo6dJqjav5i7WN297t3LjS37HJHxLWp8XpuJVwEi",
  "key5": "5aM8NGtXTHsHw91uwYMXR99bcXDDyENsiJ6fbdtb1aVSQJtTSmeaNFtod2K4EK5CSGv3d34RMJt4wV31hGBqnKoK",
  "key6": "5vu7XGcZLmpGNHMEFsNk8ckPAxHFsg87waTtdPsa73GV2ieMRBqGQ8xabgvCVEf9JBBntnLRTmdNQVHGQD3fAiHp",
  "key7": "dhNF9qoxyQPLoYyoK5mrN3pTRZWrn6grDiq9FdaiXcMdwbahWJVMkb4uC3sjVn56HBJ1XS3f8mdZjrCzEZvo1Z8",
  "key8": "RbkQn4sAXSuJV9z271PC6mZXJKrzgpjieiJEppezsrAB6mh4iwFT4LjpyQCCCEEEGKHk3A1DWkkpa2bC3i6NXJj",
  "key9": "4pT5uZuTboRhTGhFYYpFKDNHQy5dbEnskRs3kwVNexkRbFuLsu2MvPv95J5oWvVFnLhCPPkvubz97qDyqhQEVCSN",
  "key10": "4oSte16ak68DFpuxdb9SgAQznNGUGAB1DiJuWQmhzVXQCtNk5CatxgfYFhX45TAnmXFeLFnZ1tUjeayrFiVASv59",
  "key11": "4wyt9yd7KU7uS41vQPYnsAuFK4cfCePu4yWphZK2jqjDGYSYQwVgkH6p6hKPYaNkCM3gFNyRtSjXPQSuskeZpSRb",
  "key12": "4WvaysUVpzQppNRuWrHP1nK6jsJy2E86S4foV7EUmTU6j8JFQdgGNt53XZBrp5WAG8xNzSrSmsWcWqjfG4XXMuRR",
  "key13": "4y1sj17FfJiWoXSBj5W5Bn9P5o891obG23npFfDWf5uPNfXRKBvp3jaq7EHNLuJ4cueZDBeyK4dDvLu6fWHtRz7T",
  "key14": "46ooCG2cpWbuxWKZjF8yPdQZgsexaFe8kntFg9aYt7RZXZJePnCBx4KNE7pyALJMakhRYSA9UNHQhhgLobTgAQY5",
  "key15": "3y5ZJ4iJWXVCAHZhoxGZ6ZrhqoJ5Bf8jVBfV7bcjF3igMKTtViN4bm8sRairLy7chkmLdwCCwUwxS6FNWGBaHv8p",
  "key16": "2fkzZKmGysCC6acNnrKT9TzemAwRDzm8ixKdBVM4c2EgErgBsBWQvSzp59GB3EAr5X5JjQx8n9zVxpRHpz8BzNGx",
  "key17": "3jzwXRKQDQG7Yg7XB447bCbSjpjMkX142Ht1RKt6vqLLnG4GC4QvfjRkjacmUctVFKEHAjKgxoDhpyhGapz9gawA",
  "key18": "4xhZcCYGBFAr98zSQ9ZyJZvHTiv9aHNSX5P47qVzraxzdJJiYYF2S5TNMdzV4yF6rptUmvQySz9UiZbZdG2Rjtvv",
  "key19": "dcN27wTVDb1i7VYWoS922uxvAeCkhaNQuasZ3eDTT18NYjdkuzkfC62Wem5haQ6LUfMvrEh2qvKCrRUr67To4MT",
  "key20": "2bCL94dKrZUnVuR9T4X7hwQzbbkqUvG7SWmyFfzEYrdPXr25b1E9YxU3csdETPUKxujDoZnMTNYq9APqgryzQsJo",
  "key21": "2gLxZ2M6TgULQM4b3yocm7mBqniBsAuD9JeDZeyQqZfPGaeFz2e611qTzFbE7cpjGy4w3XP2w26zJauSxtKYR2c5",
  "key22": "kNGbh2Neru474Npu3sDg7Qvn562GKGCzFHF5h6UAQtWWKnY6u86qQqeiDCZQqnFE3KXEmVWiTjHgba9UEyorxLL",
  "key23": "3Q5hqUp7TF5vWaDjAkeyZHLjVjdA5e6JFPGWVqnTQ1m6tEW6MvwDtGvbGZ5WGm6pnUuo5hSZJ3rXx8kdFLfWkjab",
  "key24": "5UCKZC2JyjWspNxu4uqZpys6LNyahLwM6Ln5Rf696deS3XJ39j7jLvXEaes4HePNq2qHDktnF7JyVWrN18EGch8D",
  "key25": "3TznBeTCP3CYoux86e14Xc9GBqC3HyBMmnbB91Y6nTzVXdTL9cHsBgeUC5UgWYjxJQiEGFB5raFrhV4HuzWaGwpQ",
  "key26": "s4ho5YPm1JswkA3wzPF27TVVSqKc5oGuFen2icoBqh6pUiEnMhM9zadxGrUR2vjbH7CmspT9Ft4VkhqAgqtrgUK",
  "key27": "5N1inFZQMxybpTvo9KF9r1Ad8RspGYipMrMEg1SkTk7Ne4zoo8WzcNhMT9vvrEjR4axMLsiFvXkFzndoPtVgxw2j",
  "key28": "3x5p4ebeTFN8mXbFmSf9ZH5TCBCNq9bwLnz86YEASukk7vL4azg9mXdetf9vytxAy5Cb8gpQEi38tWgx7TDWa2wM",
  "key29": "4Eqx1RWCNQmbc1qwtFks6j7QgKRcLcreL6h5Gp8mpTuUJTAvH2wuqpLwfZwsyNJAVxdRZASuwhATc5oQxzjDq9Fb",
  "key30": "3d3Xtp6B4VEPaUcPw8nB1SesJfJqopFv844j2wyYK4wPQmVAMNrHmarp8aMp7C3P2RB5hJ9YisNYjg9DxDUuXBzg",
  "key31": "3EaBwUJhWGUnZGacQ7Sn1RLnE3n899sTw1cyUFEv3s9jbyeYzBTASYviFFweCPpKH8ARuukS6eYgV8J2YaXVaQCb",
  "key32": "QQ6zxyNGYES38TAQx9HzcamZ6rAhr6wtT5ByrLnquFbsWUnoevhaXv8Q2c7Ax3mwYiULGY8phQeD2TNfTJnPjW2",
  "key33": "3y3kivBDj11H88aZ8bmx9BLDGcDg9aJroeSNAgVLhnMhcwQegD7ZFKrv5srAou6rGcjyZd1XysRGFsUQS9rmAHxu",
  "key34": "2DTRKzNjLCqK9AwoeZcqQQCxTFqCenqoMa2uLsCVBa4UMZkctMfUoiWkdUUyP4edcai1Fax7hJitgBNhQmjyLsqz",
  "key35": "47T1t1AmDXyDaKhnMgEfRrqv7YaV3jjMMbZhXt2S6o5bj8DMQffdhrziLGXnsYn75DHkn6ieHaboKRJNoJdCA7he",
  "key36": "4r1oNjjj43pFG7ojvpQfmc1nsM4JGUoq1GwJmkH31RYhF8SvmynuMaC6NXYMaS9Q8HiRGNBNe91rMz69yo9E2Tnn",
  "key37": "5cReZXqKuqU3gMBWNQsJMc1XPitAVbYqRKEg9cK2etFM4EeCveFLuFkGe6XBg3Nq3EwSebKiYH8jXGrUWwFVhy9M",
  "key38": "5Jk37pYprnWtWXrUxgsTjo5FdkaeVnNc5zYxyCLxqWk9KM4H4XLfsWvneaLjyNtRGgatbVohiPZDXn1jMbdaXpcE",
  "key39": "2n3CfEqLgeLzKZVbFV7KFQZjhgawH9nMTArmsTMqDabx7D2kiUip7MuegUQr6kLyqEMk9k6pHt9DDr7oSL8zdfiE",
  "key40": "2CibsvjYgJ2oWAsGN3g2SQiE4ZVnz1TAVppX69TTpJpzZvzRScaWncftW5eywdC1citZYmMKwXsik9qVdxqbmWWF",
  "key41": "5Cvp97od6jLWdgUefgu4Qb4p28acXMhKjZ55pNu3PyZEF1KNMnXMqECncWRYwzcf53HRZ441egBeBeSCt52qkEby"
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
