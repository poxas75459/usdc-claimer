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
    "3E8rP67RNdab46pqcpNX63ATGS5c3vv4BnBvStNWe8q7DxhWT8f8nAwpdFTYi2biJhdzx1dK2EcR32xdfZvxL79C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38XnssW6Rwzc3gr5mAzrzw9BfcpvZWsXXyojL62z5BeArFsykwqEWc2KhKsrT2cSdJdqou6mJYakZMZ582PqoeXL",
  "key1": "n94nxHq2jRJbVTQJYp7pAycLHvbUzC4we8oyDBU9MBJMWB7WX1W9mhr5XSThkFdfkws8tY6MPvsGHdXQWComZRX",
  "key2": "3p6Qpt2qRkiqdRi7hRwpMBMMNvS1KhdWwsTWGA4ZvXzDpfzeRWbEr9vxn4Rr1WAdrEQL71wo6eeGrk2DKbmmSK4a",
  "key3": "rz2YNt2pw4LHadt9crGjCGf4kfusYhfEjampyNmXoJ8vVgkWYfEEyTxRSGHxctvCVd8xYCk5hTDYjg2efdFnkM6",
  "key4": "51SsyQ8uAKJ3ebMZFLUGJBtMW1LpfAkKk6Y2o2zxaPn27reVsrUCkmpGBc8mALZPsSR1fKunWieL9C9e46x16mK9",
  "key5": "3d8tLTTTcBeN1f1yVPmnKkiAbX8RMvKtArajU6cEQr2jzUDqm92YR4TeASf861TgT1MrA4Rbt3K6bp4YgeByFkXi",
  "key6": "2jq8U18A4dD57XXNXmyD25rrxXJB3Ek9my9pkwMmpBJUeqni3rzQh3w6xJzgUgVMEvxytwNQFNceXrATfJTuee2i",
  "key7": "4eEy5UcxtTpeFAgfy3ANXCc7HM7UeWuztVPtg799vRafuV2qm58khkvG62Q2JvjHBbjRGd4e4GVd8UPswJn29cFS",
  "key8": "5ViosFz139tePeAjZoFHSX7fGFQDP3Fnfzq6vt8VPTwaw1aJVwppgxyyGz8pzQw318R3d3GhQMzEk3smj6TKhPsA",
  "key9": "w1VQq5KaPpg27RJ46DCwC87Wqkb32dkS819KA2GVCpf79nhxuhtLoQahyn3vEsSZvu3U71vVP41psQCDLBw2ZhX",
  "key10": "4dRJB4kLRE9G68DYdCafthLAbsdUqz3Zvnuv8bsv5LKaDF45zs4nQZ6JcsaUsrqHvZefZtamt4ZUJQmC8h2DqJUk",
  "key11": "29LvUWGeEPuc2cwFiubwcshJ3qqWRyoN4nsFvxBKoRPn1yWbkBhsj6xoJAxEy7t89rWMqNxnVght7zawpTkhfLa8",
  "key12": "4zrGLQfLJ7DRRYeKmZf5btEc99vbzQE3RgEkTz34WwvjtpAYxD97boqrni66BajmHHhoMvfpT2AyFkxG7zWWfTci",
  "key13": "fdnxxbYjjQQ5txBwXmWKk8vHgBHYZwTo7hJD9PRV4jheKNuQFGXViNHHMziwzwWoY9PrSAx9yvTyhbc6dGrFNgu",
  "key14": "2Wr3K7wcHuoW41yXFbRzu7f5J3Tdhd5jhUqeXwwpSu9NqLRQTuothstzwYDLcco9X3LMxocVzEPGRWNu8Rmfhtdj",
  "key15": "3wqq7FwVh1NrZrj1VFfhk8Mc5JeygN69JJRB4Zvgu61FaGDAhAJn1hLQFWSciYe4twupozCmryZSBeAS6GHn5U67",
  "key16": "4cG13PBhMhJVLL7PaQDVi7nA3mBKKcsF2Z7DBtt4CaSuNqXCjucCzJbUsRhYY7RNM6orGJKAnPMAb9fMufHJEdaj",
  "key17": "2FwzTMmS3umoeFdCYYHaFbx5jpkW2JfTFLtKS5KUdpWh2EowYoqWE3DaXfTKo1q6LD8HezjSCLa6YT9BMYzk9F9v",
  "key18": "3rCWnLcRW1Q3D7WW77RWSrj1mqprZ69f6ub38Ro5NdJzNw65YwfmbPWe2YP2cA4g7y2ofCVHBbwts4P6CJtXdXgT",
  "key19": "2EUVeATb2ucJAJJoVcz4Q5e8PxF2D8EDQ4Tz7Qd3Ai3zf3Z2EBzoENc7M99tMD2TQ7fTpyK9s5nMviMKjHgzfyTK",
  "key20": "341mRuc4JnujNqqwSLUrhiu6UeojDMA6nKZxPBAsE6LD8RE7b6pyGo7wpucPGPrUWxn7gXc1ybi37dcmKXpZjikU",
  "key21": "3vZFvN5YkdS5F7jtJrsxN623dGSTB7Z6sCqgNKNxgdMkc74Xy2uopbL7zG4mRNUFeRo1bPbVLKtQdF2s1A8zbMBj",
  "key22": "4YiuUSH58jhrWXb2m7LDwgfcWUAJmX3q4aT8XM1cPRJSkVjtAov146ECSXmY7YVDaFTw7D55uyt6FKPX9fNpVM6c",
  "key23": "2WhqjZr8T6SFbpqHdtCxYHg52BrNBrxAXnrc6v2EkHLMURYcABUjVfWU1WdsswTFvLU8rdBvM4h3k3WTnjb5FoJ2",
  "key24": "R6Wy6c3eKjX31u111CQdpaiy1MAAsU7MDroVPTtWyPLFfXbC1NwNM5d7yqttAsUQQCiWc8q4VFhkGAGR8uMk8Ct",
  "key25": "5nCh8kZWE2CE3LJKix65f8Mv3WU5Pks2uHprGjwjxRJRxJ6r2RMwMF3XAXKLBS2BxNLTp4Bn9G6uHXvdKzFfUfcD",
  "key26": "53YLZCbvpBap6TjAvSSMNrjbnxNjPN1kbDokxQEWGrJfGiHELSPLw54Ey2EA2rqe7BY4MWzhrQeG79n5fU1i8QpN",
  "key27": "5KBYycL8oE8CrLzNiboiZXmEdJZTEpw2LrTgqYjFHwHkYtVsAFMd4K7B9GStjin9jm4b8XZ76hiBFAAL3qkS4Wpd",
  "key28": "5AqggQxGVhvRNDXzsVJJTNSmgswSZGqwrQAr4ZcXeaR6zY9DFG1qeMVT1HeoAAtkJzFTFH5H9oMGqAFcdWCbSJDx",
  "key29": "4bchm17QYvcTDabFURP1CyiAtpmnh61XthPzKkty2pSw45D1xkcjvoVvpYW7vbwse2oZKryfgQcYN8oMwfqGttSi",
  "key30": "5uXWuLrfq5M3TqHZVarxjApvCDFG5k3iPJWDn6b8nR559H6jjEysJSEiSt22bR7s6HfW4xAGKTEuw2e8d2t3VApp",
  "key31": "4srSQ9A7Q9Ds5PA3dTqXc7f4bMRfpNiEdYkkjCo2X2MGbWX5paqZMFhpdnmtWodHKYvqGZCCFuDQJLFTRycK51yw",
  "key32": "5ZPC5BCGPbSfaERaa5DPmrMw9sUNdud2i15ADq1eJdgTiJzZEJkXuGiyHMGT6aNhCm73MDj8hLVh5Dd8yrDN2ja3",
  "key33": "tkcYFSy2h8RwFdHrnrxyupdVSs2qZNeyBXFQf1fGfRJPVESbZRUkoaBF9amVWP8AUWhXdPyExExud83TBfJ93Du",
  "key34": "2yAUjgtHZfqzZG5oJ89t1KCNY4bXV3q4DUjGSf8xA4LnW4C4bDkTiyycJ71LuxL8NWa6nbTKvRuzPU2aJX1y7nfs",
  "key35": "3eNFatxyWfeNiA3XysoE4eebpxzD2bRvBxY5it1YbLcWzdmKLfTctYNzz9o837qYqCtozjU8A75Y5LDSNnrEQFpT",
  "key36": "5wmuTkrkqugb4MTRELeFaDtBPtdhn2hZn7uwMaFCMRPoRgwVKGEMumfVrGjSTLdJ53xTu1vRJumyW8yC7GJ9vcGK",
  "key37": "3iTMfD44RJgXYWNy1WP5AZjayeX8icBgkn5L1TxJfGfvtpSDuZLsQM1ww4fGVDek2iYs1CLvsucNkM8Fr3RWNXbE",
  "key38": "3dA9rijJERBAg1NJLsRnh84dHuNMfZisYYyf59BHYnefxLAVoUeDeb8n3WqgwJRVxEF7vYg5xXgyGVwZ73u4obhV",
  "key39": "2ycP3bQ6KHHxjG4xHcrksYhviukXvKpef4UtAbtGYs8dV9BU47Z8PcFxUUbxekN5XAFefT36GhhVnBPmjMbee6x8",
  "key40": "34eFjh6iAkRLUpF9HhUKw86dwy2J4TANT87FYnrJREMRrDayFY3DGiezcj2cNuf5pawczuVdj81uc27Sk5AqWE7Y",
  "key41": "2hXyebm3xx3jSviiFLcrQRWVKaKn8LY2Vs4xdpX2ksnH1utCf67N3o6wvL9hzJYgQLgPL9baunoUwRj6eqhz7cwq",
  "key42": "46gjZD4933ccYmkBPKACsbRJCaNoUvrrPwKnKQ5ANfh7FcRL2hRrNJRuKDRc6LiFyZ1mL6Vw9rVD1K9JTR2sUrQJ",
  "key43": "kPx6HEdDYWrnd8UarHNa9bzriY2gV3GMZ6tiX9MP2fk7NFTZUT5PHWcgZMLVfdkzGHoHkWLjPVf2xWuYnxxpu6U",
  "key44": "5fYMm2z1GV7uckqnyfnRgbp7DYAARTw1ySwTB8ZwWUNmFBX997AtPuVZaKx7PvdirNZkFd96HTYXi7JQyG6Drb1Z",
  "key45": "5NsebV3HfbdcGbXpbHC87x9megEEe1XTZJACRNKwnePNx7sM9Jcnf8ywWXxWRPF7rT9FLXh6AxbHuZUCdMLFQeS6",
  "key46": "22qqqbg9sVbop1JVzCKqmFF2tKAi29HDDHc5PpzFEDrRRAz4Rese3BtcJjd735shdsyuRMcMs2TCRXXQCLYH1mCT",
  "key47": "2mRK74Qa163Yc845stcxRU3JhnJq5PyMxoqTgsFHb1okBMRtB34m3w9GCdeXjfqTp8ZwZAfxqnV5bf1kPPChzPmj"
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
