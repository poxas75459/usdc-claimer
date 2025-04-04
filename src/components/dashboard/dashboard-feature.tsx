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
    "42XPu56tLZGWUFz4r62QLQcDmwJAqGG72wMPFHJua5rNxGN4j1z78fFTwbFcHz1hW818VbV2Ms4jxuhHwv9sz6Hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21EyS9bPwft3rj5fBsaohLP4Awf82rKUyPmProm7JUvUQcje7LdaRs9j2gmtp71HetxFwsPzKn5KhDt2NVbthQFk",
  "key1": "exbLYFgrYzyQ6sTjsVgzGxiaoSxBXSyVeo5LGrxU7fAjbo6f6xginjGn24SYdiwWWD1z5tU5Uq7hfmtSJzrsQf2",
  "key2": "4kZVe6jgeQepvyU9PZCaukXMGfcBTJGVgyUMXtkBBnMZE9q7KPQtw1syz6tfs1nKi3F56LtjD6qGNrQLjjYqVZqY",
  "key3": "2p12H51fVyM39DQx2QNxAQKjMdzxFkzxUmB46sZ6GyNNn9Wse34D2z7NBqJrZeWyJSc8iFahN9L3bdffZvKXPrEf",
  "key4": "4r7QVquvpQMeDL94SA9b2rRdKkKZqa5EgZGoqxdbf1zJrmu6zEPg76MWquhYuf92M5WeaXQsT8KTjPHvxBCE3aFm",
  "key5": "5JwuaU7nPgcvSeibStpU6VLqYFeNE72xbkofD7uBJ1n9qAPy4te6A3GogwE5ZidEjU5fvf1WzjZGXH6rCRqGwZEk",
  "key6": "5AM2yUyNuF2yXc2CcoWu1EQsQR4sPJZsJzW4qpyvg92dKnT7ib5cxHsoLpeL6Ms6FGAYahSABXNHnWAPNiJGYu9P",
  "key7": "4AUvsKQotRMaLTHV5vB1kBqbr4RdgoxxXZ4H9fVa9qm7wtNDMJRrKmVUVeu5xvwC5un9NzSJqykXHPJSqm8dKeNc",
  "key8": "2UxzRi2aw1fnZ22QdQucKww4yrUpTqMPfyk8erXiPmZcKCXkxEYJiS1ATktPhawdci5ioMZa3yzeRimiAS9TaiLt",
  "key9": "4pN3eqU5cF5wEBWhLiBw5DmYeKJ2yHtjBByHiawdrWKHwVyyTomwddcSKTwEv3vxoteF65eSsadC6EdomvsWXwJZ",
  "key10": "jQe2GehM6c26z4byHeJLDeAuQE5suzZmaVGKcLfGuamiVdRfGsSWDDjeENkknoBm3HvQ3FE45P98XKE7eoDieV5",
  "key11": "2FDczBXg3ygYrUtkFTs9sSK9pL2Bmz3w3ovJ9MC3ZsYXXx38JtVqjToyzadwiawQKQdKUKrqereFSJbxhTvSw4ks",
  "key12": "GdnMLSzivFbjSogCNRckeiu7PRQ7CiNnYy6Ytpw89PdeHFcyxM48m6prLb5vatqS5Gr82KrmLHvV4NQX7duYDnu",
  "key13": "3omMRMkNqh8fUNZm11bDj7MPVUGEEQbPsqmPJrgcYnjwpet6xFYhQqBmkuUkH1yb2ohoijwHDwsjkrTZiMYPCxcT",
  "key14": "2R9Z1Rf7fdpdk4EhNTmt2sxJinHuf1oF4BdGgUAu3ayrscXdmnPKNG5kkLthiC4NQSLDoXZAhpg2TgAsDhjGJAEJ",
  "key15": "2JUZpkmAnzoMudeZzMRGt8yND8foSp4Qo9w5es6sSnJxBs8hKjX3iSVzZmvjBoVJtdgC1vv8QoQE6D7zUkRH6jK3",
  "key16": "4kBXNuVg9ot6D6zArQRCL73RNwT4o2XtuFXTFLRfuHe7TJgu4zWnGqMyMx361UhjpuhPkhM5HDBJKLhmCkkviFSV",
  "key17": "4EcK2BZYgs2k5aGNeA97SdypyA2g7VvQE4UmL8vRMMVHapwHAVrtXVAH7jDorh2gaEFCXzGDMT72MKfsPwv4twj4",
  "key18": "3pWRrVoh64rVLKzaiVRccMXNmQi1Su8HyT2N8gp4ipzcP5Lsr2HSXn7t28WRDZnDLKsF4XTeB98jhRiQh3eYzenc",
  "key19": "5VXARDsY21KFV4W6up2336Q8Ys6YpbfL2v43FqMs5Hwscn4WR3B8dBSkgdprrr23HS12XvX9SArKpB9Cg715Atbz",
  "key20": "XCHpPyiWZDz9AD86Tzu5c3Am7AUowRusB6Mtes9gnBeCCbFnJaGX8SFKTfUanvDVTW2XGLrfBPYcG6dg6w2F7PM",
  "key21": "2uTVdV5tws5qtpKdvC2nuPBeKQpevsLYcEXvRNqFyxm8wUvwDZXhwgybvRoSUZcQZeYR3AmtVdGne815AeicZu5L",
  "key22": "67aBUzk1KXSbzEXpEj8DEinsXNQhVmh6mjjPi84xA598K9TYPgTgJ719on9yfxvQB8nyHEkVdYtcYywaDTiqqwwn",
  "key23": "NCq5498y7XCyr9jLjNYMwSgtHoLgbMMXTE16iee3cbX9Ms4CUkdBpW8MThQE2AgmD9t9T1sdhi31ynV8GRgc2jJ",
  "key24": "36vpFHb77zAXyuCFPY2HbKkpRYrgds52rcRPiLwRPtwxnikUQAPXmiaLLnRDmWhU4ahCwLpM6N8y6UWMX9mwVNbd",
  "key25": "3kqehA9uwpZH2trBSh2UkYyinAc5kmKYhwjnaTk7fP4ZAYK2VNsBDJMgEQF1qZ359ygoGfXmX9CzUEPswV6JUwZE",
  "key26": "5ew2sfX8dza8o9oTprDXmW5wWsL3DiwCVgMqh8jgkFFw68QtSyZ7ECBZMpcVQ1VwpMQtGojKjuQirwhV61nS6uEy",
  "key27": "5tfPu9HLiA8sftGZj3ni5cnfkYmba42cVSXiXwWb9tbyaEJ7pKD4mGgvdKSTyr2bNGQQcog7nk4fcdchrqDiKiSF",
  "key28": "4Bt6JFR7VaJMRFQJYJ6swqqzt9P2nHGMmhmM2beeim8TSeYRteyfw3VPNEVB9eqD2D5MaoBecrn8PiNZcwiLBush",
  "key29": "3i36e1yvrvYF2e9voQFo19xNPYBhjP4nv22FcpnByhYLnvv7Yi3hfTDA9sG3RNphTzfy8ffNfeeJ1yfZjiCsvrmF",
  "key30": "5t1LFmNFGaLSDdyevkwdYqXNqinDLk8FUnh9QpH6jjVcd6PQ4AsBBGWpqWHoWaeUJ37ap2kvNXHdbN1j7aRu1811",
  "key31": "2kphCpuoWGqZ86V6LQrvsCKmRT2c4KcWVrfpsC4YG6iVB7CiWvtTRG2gibK61iyZu8MZmUsywRWuoThxmm23ePKm",
  "key32": "4hbZvDjb3Pkgx3hDxxBzgWrXwEdJhsXD6X46zmL1TJDhtQokWR2Cq8kfVpeUUUC4MkJ328KMskvEyw4Q2WNj9JSF",
  "key33": "2bMEPc8ettcjs33gvYJoxA9KhU6BqGmUU1WUjDYRtCDLUePRrdE2CfRr9WUq44joPAPKdTTydGSPJLYHyzUB44Dy",
  "key34": "34seaCFs1Mhfcd2QcQnZcUML6Q4kwhvvRuzhqrfm53amLFnBYe4fsZ89T2af7hBcQkN54YMr6xaFp9MaE162jRc3",
  "key35": "sbfdXkwuQwfxRraNjDK9FZwcARS9BiXVQAQbRTgZncNHD1JN2mh9zbnRfNEgF3nAQbXQbjNiiBsKYgHA3773JwT",
  "key36": "3otUqNmWV28umAYvYkDvup6VPkqMntqv5Pht6p2uPQudVTQcp8mAGgZhzVssskeAkCnwW2SmtSQi8p6KQrjpCGtc",
  "key37": "5g2rUj3gMMfVaKztZFjQKkvPMcxbiUM9suNKp4RXBPp18Y7rygDhN6qAyrDhN34GPfxnr9tFwTzzgzWc7aRQNEHb",
  "key38": "5DCRStijf67G4bL9o3TyJX4jWjtgJLR2wrt25WkQg1KCimpN7ZWL1basW6ymAJYsKsRPXNKYqPLWTqCGa3qzry5T",
  "key39": "9Qk2oh37RHToPG9RpmUZVpPNBHXfSGrzSG9GreKj6eukS4XwWuUHcWC7ustWQrr9nCqSmpPsUZ6ib3DhdtjEdYu",
  "key40": "4Us1YhU7r4VUwAQwKYQEgBdZfC2EAxhqPwqerFX9h42WqMqcXWrbFcxLhNn48AjxDdaQanFY8ez3ML6KEyMCotfN",
  "key41": "3WC8zAhMh59UVisUZUBJcHmFbGqJoafMkk8J3PysnoPG1EZfqYYdr8yxsHT71ou7jrW3UMoaArBNP4RYXWztiVdg"
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
