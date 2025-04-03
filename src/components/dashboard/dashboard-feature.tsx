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
    "23HbcyteS1ZCn5oY1kF3tLE5FbeA2JcJtEoDMvRAn2LLwrjFb1ZNijFBYHUjZVGaEApyk9VMBQHnHyyVwnSpi93H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SehMgVdqaW3pU4uMfUthBPyoGiQ7nVgrVEfLjLYdjfABW4Nj3Fv3SsUSh7BYNTP8oVWxV3KzSD2FCjSVi7YcNQv",
  "key1": "5bJaTWqXPVcbzfdfEQgQ1F3fWGhB3ig2iyXiQi2F2gpwkWuZL5rQqhKtyUD3gZkRMiW5GYR94jpEPDREKGT1wFJK",
  "key2": "4TMkRqgVPu63UwRCbYHCpc876yNih6puUCgQi2i4UWTy9w4hCn2C1j6RkiovFMeHYRivuWgmurkr4f4y3mp41fRw",
  "key3": "3fMjAcAY9LsymCkBjwyhbLkDrt87xMezPZ6h5eXDbsV7pBAzwhnnbBocun32Jf6rMpovsixKQ8j3QahcLM6Gm98v",
  "key4": "bq2pqHMFSi2MjBF3gLXvhZjQgqNzN1CWgUaGECc7CVSi5Xg7C64Xo1fDqQSNyq9wuM3p6k1EBUZHCZpuGjTV33e",
  "key5": "4C3gKZYgdMQJq7BnRcxM59Rrnoii9XdgKJKjZpsLJMdkfCjgWQWv5rfxJLdJfjjVQ3mFu2FAg1uoubByrwwdn2Fv",
  "key6": "2RKpeMR5e9m3uCkFYAQTQpeSDbxpnMDUfiui4iV69Qaeojz1v3BcASfwCRFKpZmsypKqu5xWcNi8DNdAGdUuCHuV",
  "key7": "5ZoYC7PN8mQRJQfGnXqo7sp85gYbffLHHJ6RZeCwtB9VccqJiStvFWSdyHXnjPHFrHAiuWqpzRNhgtzE8n1VB7o5",
  "key8": "39ZhdF7LU3R9Y2EbVgsSajeJ3unvqDiUKbbEbnxsKQxRdb9uTfhQpQ9tnG8K7ymQRsvXp6Eej1QcJFzkZ157gBh3",
  "key9": "Qm1MYXsSY8wzQSYQ6d2eJzSGTnhfCjCCSJEADLpRN15cVDgC6m2GhcZGsH2UALeQLoY2SMvwv2BimmnTYwmu8NH",
  "key10": "5T43briBvqoxTt5EWD72QAsSzCVzZ8JdZ7nHrYx8GJL1i4MpETjfBuNNVTGHHV41T4mDHSsCQQ9CD8uuTKwyk5gu",
  "key11": "nAgS4QmD5U9iH9eWMqPz9fd93nPY1rMMcD8XctpV7fC29y2FU8epY9gcwUiHgQWv3U78rHciEkq76iqXjrxXun5",
  "key12": "3VFZws5YGmrmMF3miazRnxBwMHvtwgK4uK8aXbm3Ex4ZLNB4eBpb9L3JYjaCkcir3oPSMNpSPrTeKmhCHR1ph1ZB",
  "key13": "5UvMvXQmsKUBxQFUMEwqrPFDwj85Jmv8KgTwvEcLT51UVrPjBomWsogoJPFdKnXaz8VSBtAiXbRaA7mZDHsVDTGS",
  "key14": "2D2pHT4GWpgxkmZx4rcRtN4RigqD4fYgiMu8CzrA9fAZGxW8jEdcPhE24P2J2Fcp4LhZabbysFEmGiYBWjF172sr",
  "key15": "2wZVjEkmxCDknb85M6AN46p2N8Wyys5CtcK1UviTtfMbdqKYsAP87tystQokXpxkPMue1QWFjzQ8YauCqyAC5CU1",
  "key16": "4bAV4gw9jDxZZMNyR7TRENwsphPJT6bSX1T4VsNdfXr1UgECHYdvGT8su7Y257Tnb6bJnqB7tLgTBYJci9r7Perf",
  "key17": "2kQfRZQF8QxQuKsSPLBoxoe1Ei9NpJow4fNU89B7BGFwUkQGCgXHmyEATaMb52pH3cuEs2eJ3ZeU7VHPAkhpQvmM",
  "key18": "3KJEb5H6gfRqwKSM8RvQXWeaYuFG8t28y5mVcQLb2FiEeM5uXgVfs54hV99ChRpgUnLxgdGLv1Ko8PjqMr42E6WL",
  "key19": "3cVDRnNwNaSSjPNLvDY32Bv3QJdkrVimHt6brFS91QEYvc5yFUm1TwmuZd6UgHymVhBAS9aUvhnNhg1eroF1PssN",
  "key20": "4jmJ5nDiiZLZX23o1zgLZ4nowNGLczLDb6FAASHPs8jFccwWojLDe6dx6zRmj5umjeefqbpXYd8dmzSXBzRkYepD",
  "key21": "2wCRVqFgzN4AKasj1ayKDT5mRHaj81r7HgTntfAJN6kk1SXJfFuffiRsvgGN4qJwtSwJhwjNQhk3ckXBhjtkRAFh",
  "key22": "4L36EJBfS4eA8PtCATqcVHUFvHxtoZVFgq4iC2d4khkrT1Au82vRndFPs1Eo6wDc5PGgjiUMRddvSbysJLhBBswz",
  "key23": "ZK43exZnf9YLRvjtLUEmBGBKZs4gNaYmpHNpNjzCJ27uS5U9QepvYCHMQYHmkRmmgS7RTheFuNQziifN23R152C",
  "key24": "2iWAcM5GQd14miZn6Pm37WSJXSNyMSBiXieiGgzCXv4HZhzM45EhBrg4mc8sTrUtPjyBbY5nehD2nfdUkPJmmZzi",
  "key25": "34KKFxip71QrKMmZQyKoBqmQDN7vhq2h7RCmrLfVdvzhiXaqCmnV7PwwgAbda8r123ofr5oE9ENBrqHPZoKCNJnX",
  "key26": "bw3UG2eKjFhuFBxKHTBpbHLoD2xP9pFi2B6o62Ku5gwfrJxoTd4ggvR1x96gh7gpKMyxnRqLEiKWT3Rmy1XR8WS",
  "key27": "5dbdhTS5J3yhdK5xUCYY8Tdyk8nx9BwGKkjVDagaz2bHZnR5ymKV3XHgZn8hqoSqCwbK6ewKbfQrgRnS6C5QytU1",
  "key28": "4Dm5QfDoT8sVucsPsJPgN4hkQSrJHUR7DYWXKPeQNnJwi9PZkYjjV9DzfDhRJ1FgvSN12ZE3e2ZKvpFc1Gwg7CaM",
  "key29": "26fyWEmKwtTjUjLZpymwUSGDpzqrneqrkJ6GV18ViuCzmDfSW6vKLWeejHZPDoefTSt43ycTsowaXDq3h7Q2CADT",
  "key30": "5aeJkXaxXmT2MCBcMwpNauaP44XGpXFUYW7yv28zp9grJ6FF6iMWQ2qgqjcc3RNjbU8sqdvJ9zMktA3aB1GZd97r",
  "key31": "1DceE2c9q615NPr9j5KgomPrTVKR4yY5Pi6WvGA1tLP8DAvCN8oLunS8e7kYCL5ZcDq2GkR4z9LRYii2VQ8JWZ4",
  "key32": "2JTe9CszqhFieXMo6u5Gkqf5D4n6Wb3ToVX5KeVTcEAUpmAYGoqL74v9vgj3ZHLmsNA24d4ATziDEECuDXToMwKw",
  "key33": "4G8JVSzGhpvxbDLck4b1KF2MRtqB7Z7Eb3WYLwiAYrgLmk6DCiporoov8i3XrXcoGGmdzq4xbRH7AXCXyMDf4nTo",
  "key34": "4VEGV7QhsdL556uAvjBptW3avxau6cUK9uctC721StwM3qKAdyXqUUjjWJrkzpnyQr8a7fZvCHjCCL8QMCrJ3qik",
  "key35": "55NkesEo3cSPKfyMWESzBAXtxe7XBqatdACM4igZg2vHUWZZevKCZ1eHJFEzD7dU86tjFFJwX5S9tzPSrzBmqdA8",
  "key36": "36Q3jR83146ARXmrhHpYnZwCKxwUx7ssquZEbjhW7AzgmjsjDGphMCbxih7MKYYSBrFCtRSXwHtJFszBHSfQB1tt",
  "key37": "tBW3oKr8Ke9JQ3H3ShbQ5MZSzeoJC7B3YfrxSxFunCh6bXd9Dq1nnx5yqjYekPyQqUPZ2tTPfLsU4Bm6p2ELTaX",
  "key38": "Tu8YhNeoJ9R2YC6JoxgDsKQS4N3RPSZirPz1FBmgYSAibFzYVFMSrfUxtEWFC4JwPc4bfPLCuJ58tavdbYfXN4o",
  "key39": "2jjyi57GaWvz6eJmGGKpKK3YmxqqA1ZBgi3QwTz7BSqcj7maUwhT1pkJfSLj9b7N1Hygr84a346yaWptLeujFcek",
  "key40": "22rg1hz737HTzCzVeY7bqxvnwtP8mpUPYH3Qt5qu3PvBhe4JkWQYGaKUq7bZN19TkHefav7MG1RzVnSghg7xrtU5",
  "key41": "4HMF3oPpSoZg4XhiG6A1xj3ea68rTgqjpERSJTAJaiuWgw4d3yfPrXRPsyRFb4r6BsLSUyGTpmmPtjq5jJMDbvid",
  "key42": "2g1MsTpkMQMhBTpDp1d9EbTdifM9SqhZaKydWtX2xSA7bY5C6DYs2pnCgbDQctkXSPMUn26bo54vvyetAsh9eeY",
  "key43": "3VGHSx5RVuxr36nzC17rXED3YtTuxvYERHL4Bk2fsQeCAhd4rKqZnod46G4U4EQdZw2zwDCeGrk7VwwTwhh4W2qM"
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
