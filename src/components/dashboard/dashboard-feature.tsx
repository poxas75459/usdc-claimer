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
    "3qpqHAwUJ2gMVtebNcP59SbBkq8vveQAYn8HmBXgkacCPAHPC5faizLkV9SFpmCGDwBsHdZuNNxkRcEEPJYvL4cw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NaNfoQAh8JNTFvfHfZSTrBW9KoMbGJnQ7NWBQi1iNDBHnbye5VoWyRwjgAQo6cj8mwjsSVzeUjLx3fSLGL6yv9e",
  "key1": "5WgbPNC48PZxNqoBddsEcUBYWzC79na9CKS8WaqZEbXfEJN3sCkq78K4C4PC8K9vwccS1AGFkmRzSdnafyo4ELuU",
  "key2": "39iqgNAAWnhumMi7YjKR1dXW4yqLLPhgR2yHCp8Y9gTYPnvNJz6FVwtvQwmyru2RshwiNr5NLqme8gXLvZ2jgMjf",
  "key3": "5XC2kna8yhhqSwkNauNwwVwV9QohJ92Vm85p9mzfFWZnZZoHETX4ZKbkkz27jKoe79QxtLC6qGbVhzwMYa8gn8gB",
  "key4": "62C5cejke7ozWRHjswMYNsAreoGoS3ZBrSi4xcAnD7m4WnBu7r7dcfs2s1ny1hyGdF922yvgTcuogbU4nJWGbLGh",
  "key5": "4gZZNmZyFwzPzeEwvrFu8He5YztzSZgjyfchhdVmgBP1KuAcn81mUGb3s7r2pxvCiNzW3dwa6J5grMYs6dt5Nh8h",
  "key6": "AAuuQFmJTY8LemtBi71g9S6vcduZwinabsQz6Dp5z771HekUHZj3jJ48VDSu3yCxNVvs8mBRR1ksaSgkfzWKr2w",
  "key7": "4fdUaTfFXLqEteR7MGePDwkT1za3dZTFCdRfhniMtGivT6Uz5rRGnRLadzpyoy3x8fbK6MPBErhSAHmf13nLz9X7",
  "key8": "2NJ1r3mUg2eybEcexTykTQispMtKxVrgRiyfP8Z19pPZUPDaX7yr3mSw82UuiCsh5Yx9BD3nydMTyzs4NDvginUe",
  "key9": "3Khcz7ucgkSJgHqmy7nsLedkEN5DteJQ4374k6st6Z5znTs89jK7banZ3mbeEGjgSZ3uJgrJoBi4ChsUTHJ7BoK",
  "key10": "634mdLeFZCpgt8kiZECYMFJRjknFfBEoLpAvPAWBJaJQ7rQN5q4ehtFfRDQmRvW5TwERyRSFfxa3LRZhZdXLdopZ",
  "key11": "4pgP15f3G7awtpvk2Ar8jzhh3cUTgqcQekjJT26NwZRAurjgR6wX9TckBjzst3vw7rACevgc4omYSZHsKfwrhN25",
  "key12": "4fCsSpMcfVxXC7eBqfyn9NgWuF2i4LbBBAP6rDTpWknm8YjrdbvNCQrCHebdnpqfGMkrvD5HS6GtzWbt1fQk5BNn",
  "key13": "43esDnHXK3j6WdtW2xgLKLG3of31mjwX9ue2ohwaZf3yDC73gK1ujSWZMvsZcN6iLq7nV566VP8X9d6r85fLpwnP",
  "key14": "3KwP92sjNiWmthtQQtoXRQtE1ykmbJoTxyn2R8oGs4AkyfmCq6ZRhUAzt6BhQdQT4Ybd1sEk2dAjhF27Q1o3RP6Y",
  "key15": "56h9fpoCXvaNpkFnJG3znijJzJ49ZkffAz8mL9mBeGJDZ9bu6xEXmxPnjVTDbW13JPRQDTjtSHNncFbZoXormu9m",
  "key16": "3BhHxhVVQcSKSUDi8dDeiw2xfH4C6vGApwbbBe8LZ6berCKEbrzTe2LHiukgBPmZYVoNcBkP8HgNht7cMxrCHWHr",
  "key17": "rf7xpvTUzgxBLTVtt3tBRNPF4mWupT5ExM3NxSgZe5tBEDcLPshctRxPP5yNtr6Xsqhumrjhh1u4wzzndAfzkBN",
  "key18": "3PGjEf3UAMZwiHfJCdHDXQsQMKELTREVh3FAqzyxb21tP5YKhNBuwtbCT5STzfsbU1VBEjE9DrXfQvMNr18ZPbYQ",
  "key19": "4w47ScbqcU3i7RSRrzSmonoUvMUxTRroQ8xhxEX6xMtDW9MCbKEas2fHm1YHu8ApZmkooUkT2mw2RgZNDhznPiBf",
  "key20": "2BE9t6kKn9mSWqDg9W1eJcBrHj3gxQ2S2ofVdcjpXNiZHQi3wquj4NS3sPTjDXjtgtjEj2MZwTXNNe8dt3jB6Kfn",
  "key21": "4ZL1G1DRWSj28b1tubgWk1k9XaibuxsVqRYLw5QqjFm43wRcz2RBdU1bvbvWrigm8EtZYpzRZLdGhuAjE1BDAmmC",
  "key22": "5vwXsBURs1S7mG9nvEqmah1XvtYUXxEvGMVyjwf6RXZdEt7jcm4sTuHWnbto1qZiEg9V8ae6JuhcMvnvDc5Zza1G",
  "key23": "4cLdM2DDZqb2itr7NqbDgXyStZf3ygraez8HtUAPCv1T1kajfNiNGoJCJrofaRbmJP8pXG6ziC1UPEpacCVN66bN",
  "key24": "4gaVZGxeAuAiGXfkZMoL2VrxtkoAF34ePu8E8ibNnmhj5adEBimvff19sXtgSte7v4eSCqLZ74YZgK2u1U2ExibH",
  "key25": "3or5L5yUnk2Pdidpukn5GoHgfFzAA4euRwtTzK4Uhf8yRLkJonErN1xqVHyGmEQTZEqhUBf5juzekm9A91Ck1s12",
  "key26": "4uSWzZmDJD9rxtJZMpKXFkkeUsqRSq5zyWRBZ8vU3WtVpVekhAspRKo6TiAHxSLsHL2nkHte5X83r1qtRvcWNHxo",
  "key27": "5BKK3Xs55zfnayuWaNtNig5PasBRjh43XM2HjGgbveHLdCA35BHEDTm1L93EE87kqJDhF4K3GC9oa2zSo217k4qQ",
  "key28": "62W54BTRAeNUmhnfJWy8t3AoHatQeRxEd8GzjhHikaJaATycKDRDt7FW8cHyEaihqcxMDQV9mXCJXeD65RmiKkfe",
  "key29": "5VJ35iHdvbGrAMAYSAMFboHyeAgKvyddCJLDjZDiEP76HUeGMdHTxS4dq3P9nH57B8W5eG1c57JvaCdRLAbve7XT"
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
