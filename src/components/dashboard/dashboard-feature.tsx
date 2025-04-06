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
    "3UYAyMozswRvkbhe2RQriuwwxwvYoQ3UXxGukYjmkFrSHs3hyZk6o5rncmtz9tR25fy9S1AbTNy7Ve9uetVsZbNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LK3L2iyHMtxWNqPiWPpnhwMCJfrm3ADhDqp8FbnibUa1YhzuFrDjEgACxjfDT6LTUDipx9Za1SJakd7rNGMwvaE",
  "key1": "rX11REassAAsgE2qizrpvxU1FgxjTQ8NSbdjPykimT77CHwjvWDp6ZqVxNhycby6pnRahkvVaYyTt6RbuekfyXN",
  "key2": "fgH652AVP8wPyepz3AKiDVAcffBkjYQEp8zos9Nr7PDyGp3SVYb3JyDaZqEyRzrauyChcCpg6rrCqLft1JNz3oc",
  "key3": "5GEpYaqLCCyja1sHisZyHUYoW2byJKhnvEQuBGMuUHP7q1uTDr5ysB2sPFV9yX5CKzdqWn8wEWLNzLdkNjqtRxDD",
  "key4": "3fXo6LRLrc9Sr6pFm3qeE1yBCkzEJRNLptQgj3LGTKbys1A8AyF8J4vj4Bib55ZPVx5dJL3FnZbcueJmekmu55jt",
  "key5": "2JkXKpZY6pwzX3u7ybjvCkXNrJd94bFEHRyRVPeMsd3sZHNbo8oDBwUp5CN4cYTgaPerwsocVxYzY8NUKgN1vQ6h",
  "key6": "3Eutiz1GDuRP1y33atUAHBuZU14TQhbpvYUySCUNrjTskqrGHZAcwQXZ6chaG7DSVJZjg94zLDoXY2324mm7dx3C",
  "key7": "3rNf6SgoARwkKzFm1tneA1pEKE3z91haWR7NzXHiqfXYoKMjMt5KipM5oQmpCmahE46Vbo5uyWySjaRSVWBf34ck",
  "key8": "5GkcXH2bfK5ERb33JmxV1jic9aiGcEfyVY65HPE6kmC3CuSq9HYcxh5ZYC437CLBBWyrdevhzPwJ2GVBrvXv7dRP",
  "key9": "66yd98gjMihGHWZjwD1KkWeioB7rzC2fogJqE5od19XPwndCagJcbv2r7XZ8RUoQ3paoW9seTmQMxHJ7bmtvYWNh",
  "key10": "2Xg2LWKMLqaGYWaSzM7zpXcSoouJHwr9Gs28SDfL9p3JxFXR7GtZcDZXah495RSzvwGyDk7ayLhFi6WVXoQWsiU8",
  "key11": "3voH3pjHDzgsBWhJNRXZDKHxMj92N1o2wh9Q5NGcLnAdA6NrLXFWug3tcrzNFE3jio16qxq7GiKeD8RuYbUKZu3g",
  "key12": "56nnDMUFMcPgvHDNYGVEAThLRdgmyAqfb3diishbfzZe9KpERoc37gegi1k9MPpLtbNAhS5pcmdqBmmoUTp27PQj",
  "key13": "24HNGn3FSviGjpsXsnXfs4WQg1q5YHoCzbfg1N8TwQtwGdPopAs2fvW1KY7uKitRLYDrvqA6sKeRRZsx23zo4hyk",
  "key14": "4iUY9CxqyMZupZhb8YkCB5vFDC5itcM3HuBavqcqqM29BXuiL7PdJiThYkZ8RsMSUEVG4Mc67BJUZHma8odPc3ga",
  "key15": "u1F6MVLXePruCVZkgRJqmEGvAaLSNAF5Fp8fNFvBoVbucZGSYM8vdNuAUn4DhHPvc7esA1cq8CRcJprpRk5u3Yy",
  "key16": "2jfuREkXRx5UgefKE4PNvLMu2d9HWmt4Lw1MVew96vVsry8Z3Kt57s7nshvSuqDEvbCpHjdxdPfeze98okQbSEzi",
  "key17": "4RiFgPzfTJcPCrfEQiJmjBvpSgU6HNBvdVbPKZeJnPH6HzrCsRZyhDmPZoE48tHT7Yx5K7fPcSWNbfiekcF2EZg4",
  "key18": "4n9i3ASmmAyWcRwkmsXo4QE2XuHzqzac8xtfXDLh5ysiFXxv275FJBFhJyhAMqFYyjJc4fww2wYxkHpcjD9JUtSH",
  "key19": "3PiANuQ5t49nJERGjYeaNodkqhjqQijX2RGyEWzWFpexFjsdGBPu7P7gDH2NzBZsU72BH24VKCGwquBQhqpJ5EFV",
  "key20": "5JJQNmRJDbtCmcLjJFPyn8sFsh6wd2pcPUrK5FYrWHSLCumx5nhWpPwYMUvYmKvWttquDBfhB2eVupqwUbW22jA8",
  "key21": "2X66fGpm8kUVCrX1SdaiK69Kfx3Bcdak79Vpfxk1Gji2dqmMnAVkuuS1dBzYxXnDtpBZPastL8jvdUaz55MoP6HW",
  "key22": "2NvnrhLR1KDy8zYRj7DaHuKB3DdqBBH2YG13MuTR2JUCotbcD72F5mXkbJTCFLbjwQZc9yn6FqUDUa3vSHKJQXia",
  "key23": "253QEgrrcQJtdyApnAXyieQ9DovCSJAWjbC5dcD38NxQYDHTSmW71eKmmQrkB1TDrEu9jQytqEW2XX4KbFDZ8km4",
  "key24": "2z4Sp6uuMniQxsZMkvqHrpxkx3yH822xN3vu4N82HWzzLgMyEM5gvJAAmJKxo31XnNDrtBTMZt3rdMUTsjDDPJ4F",
  "key25": "4Vvz6FiYy6tTKuHcfHdPzHdvPts2WvVKtii9Ko68Zbj3eXMFu9KSHoWnZDJGHNRXrKcWDtwZDwmcuhh4LwPdVFkA",
  "key26": "2RbbGguqzaWZqFybZu5498HL46GgxUhhAhsyL6oDbPEdeMYaPZPtMp6qdGnSQYE25tX8yGtXtWU7cykRB943hh6x",
  "key27": "2MGyL8jVh9w3hz9xu7PpyWLYZcA872xsinJT71szvw8R6RTneSQUbb9N8SKLTJaHVgDmUFEztPTu7jJnwBPwqv4H",
  "key28": "fzNtw5v3WRkxwSL361gciQNRowLqhasbRjGxciVrQYKbTUQTuwgPPh1FAeMpXZRwJYTzbsmEk3SNPrGmMDYNJLY",
  "key29": "39VAo1Pk3LudUE39an1B7WML5K1ehrxBmvRCPToNLxLvJyNn6PRKKkR4mSTCcEeqq6CCeQpRFbB3dxsvQ3Tk4NU9",
  "key30": "57LjNpLcBRxQrMRZJb9QW2ayhnr8hVEnBiznTYeB5gosNPEE3H2S3P9LvsRNFQtMjUr8j5AteNoWkXi2R8aduADM",
  "key31": "2Yoh1AVfnxQ6Vude8fbq9z8LajyZUn6usZekKJWN8WdkSBwddFjAGiF3jz1DgFELenB7LReMCwyiwqugQAb5AypN",
  "key32": "3ELpEzYCPmEVwd3SxucMpGquCeUqPxjTHwJb6kL2U9sBL33VyK9mj2HwQ3RVxyFL6mub3uia2Wn8Gvgf2umEAGt7",
  "key33": "5TenkN9hZHyUkgE9a5NrrT2KVxZ9GwwtoQgYeGdQfsudz3iPUEriX2X2EFWb1diDy2kugSWrycLD459pFFAEpzvq",
  "key34": "5kvE7jAuTmzoF15fGmzUBynL5qshk2wDYuFoMxs4r1vF8DgG7LL4TXr8C4tAPWcY139XMiL7uW4V9sbkhrHnkFRJ",
  "key35": "2ZLstTS1zLgMux2ntdMezo4k9N9HFRbo2LZ58uwvwdJLU4RYsDoEFJ3GMzxjXiHBAGGZQ1YNTNwEig5p2gD3FXXg",
  "key36": "34WpAviJFNz2yWyxumnDJ1Npv7zsfdkKBwoUHA8LSeRcXB384qkb9DjNcB1tKVyTx1vf9Go8CZWMQQYgAmKmfg9m",
  "key37": "4y6ktxzcBeekwB3MytWYwB4NDkTvXoipyRtiajE89TL8wSacUga5zV48LQvGgV4wY8hBtkxKiAEjFmWRo9iYV5x",
  "key38": "2Q3GRQsPrjPUU8MBBj2bg8ej7umTxqN3g5QQbe8hKQQAmuCQ8zYLNTacsa9jtwprWWKtWHWtV2KYAroGCTe5AyPA",
  "key39": "5YTFdtGnL3W5GLmdfCYf5GMW2Rgo6tQgFxgVkwfUQ7tet9nrzY45dmepMWCKHYUufzCLGhKuk3K1vmkTK78ErzpV",
  "key40": "2NW7TEtp4szfqiLwcKcxo6kzBFqu5jwdrXtcoUUfuRP5vPprSK4ohh3CRT99XQXYPE9y7MGX5BtoZfFoGodKaCQQ",
  "key41": "2Z3BFphbsVe3CfksWKE12yzcTC6NH3GrQ3FeyueBgGKqLusUnsFBjQwBRCsBsNFcaWgT9tBW4HZhcw3RLW9podqJ",
  "key42": "3UrM7RRxbmfGY5LWDsJwtUznqSqvadkKYdp8dYz7f2hba38Ms234AzAm8xppEFKuw8RJt3sFkAdhWL7kViUPnFPp",
  "key43": "qSwfjuezD8XEDxiTef4gKkfhfANG11rGXBDeWSTxwYimKKuZueZork3Qmtt5hVspAZEsjPKUdJJ8wVZqUc1whrF",
  "key44": "2W6M8DX6EXErzGU7aDfPcwsiRZeGjK8XnFQ3fszLVsCpHJT3q7etzY8Ps2NxQy2Z6Xo5MxyT917EXHDanHggDYbn",
  "key45": "51tq5E8a8a3DjZqcy3TDvqABzMLtiRHyphFaBZYTegJgYPhyeqtQk1iCn5LNwuQTy9uqYyLrHUnMo6tLQQkzwCPh",
  "key46": "3HQ8UatiMQ4fo4fLdXQ7ReBdD97N2b9N3995debXT9okcw8kuAhdL2nzBgUSkbMwuYXnt1Prq1wjYgxjzdKVL2Tf"
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
