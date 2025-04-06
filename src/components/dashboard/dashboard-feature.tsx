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
    "5L9vJVo9YzWKP8L64wkS4oTbyVcvTodAdVQsTzwQD75tjU1LsnPu9gYEFoM1TgJohUUGirFFx2R4BWD2UkZgMADt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TnwoaxVzEGy6vMPfMkWUVc74Vs787jZAkfEFJ6xQGRNj7A7MQBYAPJ2ZHkM1sCqWkTqigDG6hsXh59oqT6EZA5X",
  "key1": "5JvB4t78Xnbt5mcqhzFzju2Ew1DoDt6BEiwsQZc7d4FMpxjx3wFSnd4TkumKZFnohUshvMabuB11MzSWrtWAxY4e",
  "key2": "2zNE2SqyraaQ58WDkok2Fno3EDLWwkYTvEpH5sQCqKrUtb7FZ79fXm7QMJuUkzLM5xe1hLk4pYaeKP9RVL9Dp24m",
  "key3": "3dVQhvv4LoW5mHCwghCvw6qHyVZ8jEjRjXCkivGv5qcinyHNXuYq3HUuMLHJjHdSWmuUzLWcjTVBqPaQhtnAGpx7",
  "key4": "2dAZwpDRcWpN8fhcULHwKz51naEVW6g4o7GSuTxpbaAPviWQRqxp4bGQzPD8YLCZFEXP2CPp3DTB3ka47EtiDAeD",
  "key5": "21n7KBRgGgUqzBLmWXQTQKidzwgHQ95BJKzRRJ1CM3Q7P2RYKbXYbfjRG98N5dFP8NtHCdP5GQUPwUCZcq4D1E4t",
  "key6": "RFEK7TZx7nEuwB2A2SnbshxviVsKj1nRcgknBHBNJJNAMUdVHsvMCJM8pfwXwno7e7V6ym96KH9K25Tni99hf3x",
  "key7": "2G4jgJgRtHY8iJ4rxtWkYUTwEfvTGeZuMWH9TFeecvjgGvJk1ovVPxLnxzPqUmn4toeKEfGYohwBa1jfasj5fH2S",
  "key8": "i1R4u6nD3QnzHBUw22R3511aAKvrNDckTYMtoLVPBKpFe5JdDmMbt6rhwkwUz8CQYmxcsbjhSAZFhQdV2pVfaX6",
  "key9": "3PG9o7qBXDo8XCckRpBFUtJTmfVfAXEeNXr66MQoaQGso7CM29UKURyQkKFCjGqoM3s42MZbxZxL2oGDNXWh5mhc",
  "key10": "63erxjm4EnFp85Jr128akbSHd5Wyx7DoJhgRKwhhF5KqshF7WgSJQyJzVxQnD8rEWTfQkPRgGPAmakmmZjpWJEid",
  "key11": "4f7cK3a7fZxt1k56VpKEu5utoacB24vmxAEMTiTrh95wqc1f9T8Gc642dp1mSjTUAHTntajkor4kpTZQt8QaY1Ns",
  "key12": "3TNByKGmBeDKvKYx2hp24rFymZK3PjhGiNrguj6M379K7foiYVkRWc36V4YNJ274DoMdizaYPJCmspCd95KnBUiM",
  "key13": "3EU4oNiLjfcNpSbcKKwdZGsG2bX82vj4nM7dosG1TxoBmJre64mzxhP4QD98ccWxq6D8YUU1z5MnNbUgedWUa5TT",
  "key14": "3mHyXngjmLLMQX83Y1UtatcSkzS8VuMN3XuK9RE1NfUWtY7vZdzwgG2gaVNEq6F6BLtUyV28ARzNzni7BcG6MU1u",
  "key15": "g4iheRMcpqk8gwsM5dUJKysKDECkkj4i8nDe43GhLv7VUZosxWBN11yQsn1zfPWbY1rd5Dj4i8qcKx2RaTgW6k1",
  "key16": "2nC1osjpS2EW556qi97ftazSKAQW3Fb4ahvSTTygbio1vqM7kiZjnZKEGxSTQkbGeEiRXVcmHQCjHpG8QMCqiuQC",
  "key17": "4ai6WYqTNEddca3sGeXPdgJm9AWS9Ek9Tm2ckdxPziBKdNrdGufY4dXmW8cztgTR2zY3ZPmasTRwppM4DDgZ8reM",
  "key18": "2Dqo9NGTsgtVAyzUHrgLJzb25V8FTG1TvWZAtdFdr4MW5HaQdKtFSTXQrnH1Ki3h3XCBaMKyHodqkqYEdHefgT8C",
  "key19": "3wSSvrLW1Q8GifyCEsoK8DVZDvX8UiH6UC6JzwDBsAiZwoxAmyyBwE3cA53XrG9Qr6wUgDTWYHQZJC9Hphu7VsLW",
  "key20": "3WgsLVXyLpCr4r63FqdeELWPBUyURfL9YfZnAmq2JrNMAJWDtgPQa3qpRwA8LFjmYUy9FkkDc9pvP57K7kquXNhG",
  "key21": "3rntkbv1cpSzhHUbDMexUkYZiUVDwS9Sd54i6BsiNmmfsjqGvcabVN1KdYgaFvCVb5i7wDGXCRei87GGDKkjM2AG",
  "key22": "fvuiYGUMqLWDrsh18BLg2eY1XdcnzvjQTDGdgBpeub8UMFmpbXQEgL1sDPTqxrCYyFgQy2NpV81PsLfeWUyQgh2",
  "key23": "3xKdEtgJmmhkDRJEwfNe1Szndr1iQFxJEkPYrYjsm8Z2fYb3kkGuFZp4AWB4acK4siQRn6wu8yE3w3trAmmQK7oq",
  "key24": "3Yt2fd8dYmUGEqXLspM6yUF21mFXwTTWTkGyPC8zKgbPtyLW81B1jNjSLH9bXzo7e5ySUMFxz92J1Qva9284ttYK",
  "key25": "4tdqo5AVyAi4Xa7sHeeoqPb4wtzZBiMAYQDVnZJQ4fBkTyhbwmDQNRBKZVSzuJUF3bcioXi1oBriRmKM12LdqRMQ",
  "key26": "GbrZJ7KhcpYqGf15VKUwrK5sjtJiEafWCbRrQf8jKz7snzAWtLib6j7z1mCCdVkghHsSXtoxSfL9899dhDhd5vm",
  "key27": "4LJxDFLpeJQFykTUTpVHsSLLQTGi1T148LFmbG7Bwg8W2rfrmApFFjVhu5t4n5d5qM4yN2NeSbn6kWDq31qLHeLA",
  "key28": "SxiAUsAZxLjyJ3ohWiQuLR3GVdJxQxJCabB24EKVnVttgi5aYDuXdA9DfspSZaiSWSxXD192wNckVnrRZ39DBZN",
  "key29": "4sPrbggnJXkdgRDnfhH2C4wjiTt6FeHZ1rAQVsPnVpCmm9LEfpuoZQPv1qFiTYzeC7MvnM6Jp9LhUjjU99HDr3fw",
  "key30": "39c17NgbbK8xMwuj88YZKmXJXwadGBBpHyCJDXug2cXv36iKGEUUG9qEXuFTpCxrEpgqhAEnoSfuEnsr88qqVnew",
  "key31": "3SQJLn7kHNwdWyNxUyZkcDVkutGC4e9iNnfQpHdzWAG3K3VprsXK2f4BfWg6ywNuiDXqx1roZYaQmibj1dor2hBU",
  "key32": "5j57YacbzLuQUqT6eyWFozspz3YhMNqeZ2A5Gw3TBcskhBGFFFq3kRuMHA669XdeSTrYWc7CqYvmGPVAFDMxJt6",
  "key33": "3KCrUCaUf1cJyWhPbLvMQAy1Yn5xW3XBtdEoLfCewgxwWpcSKtHDgHveJiXPVuxst2fis86shVBxGgcFncG89nrj",
  "key34": "sYBJN1pnoUYKXoeXmbuEN6B1JtxDowy1q417qewRBetdQtKs2fDk2iD8HAgDhZ4M2ga4wUcZtsXWLdaHWqo4DXw",
  "key35": "2394jshQRugB8fBqK6Gr6JgEUEDQ5an4gVEy5CqAiQHCNNzcuoAcGP6WE56YmMfA2mfGt23ABXU87ei1pBnQUinb",
  "key36": "37hLb4h6F4sqDcMbE4J3Cs7E8B2ZCDPRDVJExxWTNW5ARGZD4WFRQg4swiaww7i5DFRhAFQp8xkSLog9Jvtaagdm",
  "key37": "4ngLtZCySURM2NcsaFzCZ4Wxd2XgjfbVZycSE1aQp82DvHCP7me8hrt18cYG2qvBd5MA3w6JN2PKSLzexrGm9PuD",
  "key38": "NrSb2o2wH6EVWaG5R4hAaw81ZS7ste9qfduDoVUz1UEMumKKqueCG84Ej59YSLGwTAciYBNQVLcvFGWDQxthnW3",
  "key39": "wb6Y7KATXjEZZoxqAscrzAGtsCgok8wsGQ7yMcAzD6tx3c6zyXhE9dP2JsiqKqu9XPKfckWEJjWNvw6TvVubArA"
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
