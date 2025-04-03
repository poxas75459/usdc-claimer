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
    "61JCM7B9ZDDwVVeiwZRbYdoq7VxG7nLEfSeemduNR8LVUWVqKwwVe6m5rY2qvpv1aJ3bPWETFDTSVrtgihKgL1aq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eGPEeSqY6FAyC3L5oki4gDrtx2qiSUhyC6w4ZpDRY9e1NnqUYgSKifSNkYMm5Xvqe2Gjd4AToV6wAQ61gVdgCF7",
  "key1": "4McJzj3S2rHVBxAgEhgf6pU3qfTd4UAqxidQt2FZLUhgJQsYmndhknvJHxPuZX7W8nZGxM7QKWqfdBJ5EouPMjU3",
  "key2": "2jGcDrA5tpZ9AcGDYHgSizU3ZzxPXmjKxR1iM9GsSrcTgbCsnK66mWFjxCSmiQapsvtWyJM5nHcGL9xbqiyt4Rc7",
  "key3": "27wwCCV1jyTtTNvVxWyRHBuobSBtvwuZh9yDMJhFJXydssFNkFSnHHs1avv34zVeTWJ8LJd6gvZffFv6gK25VVsV",
  "key4": "4JPGaWi8FNLzNK8Pn39TG8D1dLpNFpx4gbEGVEu4TwnmeNFKm7jL7uXk5tTWFE9SkHMH8YEsHhCVF1RgWE4GckRi",
  "key5": "22uaje7t4SfJeAJRqA7pgMdy8Bo686cbE3o6p7Amj3zbRa1Rq1Zs4sEH9zG8JgDMBCwTr6u1CE2aSnEQvbrAmNAN",
  "key6": "5ApFkc5GKUhJHiEUKjwrE5Fkqpi2fsr6twoH2JtNTwHYszhXuz9hBQanjgX4gsc9Ry8KMZhitFxK2SkaZJ6HACXS",
  "key7": "64sZrKnA6XpX49VyHDUf5MhxZWSGYorF277oSofoACAsTVDmZnBPUvF8Uwq7VB4JdbrJrKbbMRmb5cBh26F3BpQe",
  "key8": "5xhPBnEaAiRjR6JmFssGH8nY2BCSpZNchk3KN6edR2SZod2vVSf2YozyUjmpzYRDicoeo9NzkAcjDsPmrDXqVGDx",
  "key9": "2hrJoQfpFMC2MYeLzLh4bkb1xcjoYDRWVnVoJqL1SLDW5KbiRLSaCh9f4VefcN7Ppe1zKnMQjKgEGsZLxg4WFQhx",
  "key10": "5SjSeDorKCEt4MPneabqUHj1MhozF2XYYX3HYridnRT8yLUQ23hbziGn3A6ccQYBZnhrR6uXcbkAnDXQLMCYi3HU",
  "key11": "2CE66WY3nw91mxZHGVVmezPaYnAH8FgKRc7f9G946XD6sSincBfkyqkHmJvg5zUBCraPNuFy8iuqH1X3HRLhnfGi",
  "key12": "5BodqPfrpQTTozFTy59uYFmyn6sVx3ivbJjFhKHJspedDSuam7Z5tt1SJTJ6iqq8kiAktYkngfiKUbkdbqYiWJkV",
  "key13": "5pX3AwXhSxAM69pecca2oJjoVMdFckvbkHU4YtMnnUZEoxbUgPHr57jLCozHUHgJTMczuisvS2JUwGJ9Q7yYEh88",
  "key14": "22N42iuQKxYLqxGQJEUw9c3EJeeNjuZK3EHVWbSPBZ3dTCknS9YtYbUkanA8T8KpNTvtTiQ6ctaKHUKgKeUvYMHk",
  "key15": "5r1qE7L89KpVPH9xLEtQCArAXPVLH948ba8jhnCXik49ubPGHJ4JCvQVxawiaAB6opXVj9vVY5KcG4BQuiQrivQh",
  "key16": "5fCMg3ZW9KQ17QAoEnAvaBThwGb8tduPm5g6AgnnRLKgEMBnHixx2Ac1vM6mKnzWRCRt8BHebh8yzpaP1dCTvXg9",
  "key17": "3NFQx3wprQKHZiqHHG7ZCi9ws4NXELmzqqcWx4M82TNjFKoQxL8Fde4tAGQ4Q22tGXWUHzfLmDidXks7KWmL3LgB",
  "key18": "4TMU57qUFdKJWwaGzwfEcMfSqxdopZ9grU575Nn6FfckFk9zu14qQVBq7vSG7NSj9G63naZgkfAYsLUpfMFM487q",
  "key19": "2xfnBLoNQ92WsN1dMr2K4nCXXA3o52BXaRjbMswad8p2vUdVKV6g3kbjQeXhMDixxjMxXvm9qwCtH4NeE3oFqupg",
  "key20": "62F4tC6TbuisE3hyKUq3PynUiJ6o4PhLS8n8akRN24TjWZ9Dq4Ymwv5q7n6KpkPTHGcfKgow6Snzd6X7ECBhsYpN",
  "key21": "56PZ3M1S99ufPRWXpUwnxRgN3yWCEtZV2kA3at17r5Ubf5Q2qZr6YMSB9cLwsiF3JMvyDcufbbG9kXAjP7rHm52i",
  "key22": "4eG2Ny5X3WxZwqd2aXD9511ZGdVRpT9NoPEZrQJ2xhwFNU2rY1V9ZbhtrrD6cpD3NPgpF3gpG1JsvERQXJhMWZVL",
  "key23": "4DV7d8mCXHWMikK9JDevFgtCcYXxYc3jnHdMhHNbm47oBJyLwZpsKXemp9WVDaDwvCeEazrmnuxy8W3cfedqkmjT",
  "key24": "5pFWwEGhySwJGD1Cqc6YMEgzJZGHh8aXw8XqHZRM5TBZVZbULbbpVfHDTVHyokv5oGKqMPtz3TLdiTGyDDL67c19",
  "key25": "ozxLhvJuD45EZSs362LjxSSNGxyzX4FcieaXEW2CG1QkNedRWTCbPcEA531kN9NQEyZwYqrQqLU1beAMETyB9b3",
  "key26": "43miJUfvda2bqTtwyHmEL5MZZDceceeTFV2DhYhvzFhMUDsZeUv7qaZphUgzdp9BsjMhZMHTRXFft51iupv8d5bd",
  "key27": "U1dtFRSG2LcatFsZgHqUg781eQZE3c4tTR9sUxwLEFfkms4b1J5MEcZdj2hpXYjRB1scg4A4ZoWifoRe1GMErL6",
  "key28": "kvQuU3KWKpdUgTGoujf4AU51cGd32qVoaxtwPbvLB2T5ECKUCKNQheXxCLKgWVmu2WrH38vdGGNoPbxtDbngB1a",
  "key29": "4Csg4oo8j5RZY9cBBEbCNd7zS2HHBFTrniSUC4vUMcvFZ7w85qCxHQ5sdw445wAn4xQK9w5EwnoxELDPR2JZwMmD",
  "key30": "5wtF6SBQu9ipXJGmpCYFUzsTMzEKV4pkD8RjmAmK76ULV1XfTMz6jS7T3KBWGLmofZtMvortub5tyYLjiSsoiQ5b",
  "key31": "5xqfNkWrfQHZs6dNKfhNvCqotCvC3xNesCM1Yv5uTpJAa4o21BUXoRcrZrG4o51c4Cqr5JoPh191rJxZmzVzRWUi",
  "key32": "63KUamd4ZtiRhhyau5CgW5Wm5dfoW8w7XNdywGg9vPwNpqeV9FD4gzcobtTJjTsvgnKb2cMbaZcN4rA443kDtQTz",
  "key33": "5hGSGke8qNZN9yvRDqaVVknU2ZTr8RpRKaXgmdXL6u4evpnVkykNGwPVKkCgapwbqvso5fPL6z5MKowCmac457Bt"
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
