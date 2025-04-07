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
    "4z7wwqM2i2HNeZeZo6FFptwmLNx4NNHaEuyfZ1bMWxhHeJ2nuBuGzGFVUnySgHz2gPztHrg3HTq8RWgjEzuAMcTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tBkymzQuGHetsUrx9eNCeicksno387scJ9nKz61JLSVWw9N8ce7P3yfHDXbN575jZHpDPsFi57hdW4MuxMQ7fos",
  "key1": "3PK6X1X4EMDY4THQFRsTZwXm58L6iubhbHVBMDZdbtB5fQ48x6oBHb59b4z3svNvx4heydwqcNypJMjtumLuhSrS",
  "key2": "xeYMZWsnAHPg1iCn9Jv6194KUGFTuG1ztACBW9oyo99pCXgeAs7FQkjnu7FJ6CUZUJGnZmJCG7e9EB4UoaXusSL",
  "key3": "3wUjNcEqX8ahmbeLriK666Zz3XNtNNB4AXt3k8FkNNwGFxRMrxkYf4QtgwspehiadAJRKdWKu8D9kw7uJyzvvjf9",
  "key4": "4L28ucpHvk6355pi313M4UwABENbuvfhke1ywAzz5xvcbaihuuzCud4qWNWbUbMEGsGHA9Pz4f36ZH9ZQXSyLs8R",
  "key5": "4tiuQF9wVdJc76wTRpzywmekJuEvsYJrqRPCqhb8zFL3EWqMojjHH3GVfaX4AeA8X6JXFeGKUmXc7dYEWVEFEuFE",
  "key6": "sh7EGcFVXtJLjvXu4ZSMWHPgREgY1MeGthiYiDH2i2Vh6ss2ethmNRMz53zZSuaZZm3tPUcux6AdnPYpEfwG81C",
  "key7": "3As9kJnBiwGUySRemNrHNdp1h8h3TBeqZjB6rVXAQLDn9nW9A85mtva3Srp4QJ9WPX5EFidN3HHjqgg7eUzF9pUB",
  "key8": "3Vr4JTTRkWYGJoFoDAnyvnQVkFwcrTSrs91LpiSvhk7N5UCuhCpSob4CpC8FAfUWEEdgV9jF4i9eK9D7qvbpUcmJ",
  "key9": "4BKC124DV3p2AJwY43c2NntuLKSQRuC1Dm8CJpUMz61uzNP1VC9QcN3t17v1oDdXw6BZKjCSu2XVV5qxav55R568",
  "key10": "a438cVAxwbax132kTgPK3puTeXhN93d5w8ZGv4LYhdGmtfw8kiNvxhnd3VLAczvoMJDwVaPsGCTsJ8H87YyC2DF",
  "key11": "5nwvAdmcphUUhcYDEv5oYda8BMcov2LRKVKaUHq4UCrJJtLytXJvrPjnVDB5Te2D2ShrTNSRQnKHhhHeUsCFJL54",
  "key12": "34N36GVqfWM1jHFwwJqtXx8MtiygL3n3YYvLxr3WuzBxxvrfDJpwKr2bBk3wnkw6qaChjL7UMf2FE1DXMgoCNMpC",
  "key13": "2j8MSxhwSGLkL6RNosz8WQU47cHi7GWcxynJS7ZsDLKciw6vbjZ96QYGU98dSeMBxVWdGuariF3SQZZcFv17GBzT",
  "key14": "49TuxFfy3VKBC1ZFe96ZQcgPnrXueNYTPPmdMreh86MHcAiUgZhJVUvCbvbSPCELgXEL5cnJD4485xrB68X78Dqe",
  "key15": "hQdhdLLDDaeRhBUKwjSKFVX2hQyRbfu81eDRUKiLpaKcaTcLyE7Z55irJfDpP9P5Y5Mu4YYxaJZAgbkvqXi9ehd",
  "key16": "2bJMCcBsn2oUx4pFuZuVG87wbcGHk86MMAitCmcrpTXrCrjZ6Ak8pHo9hiM2VtB8KmbHSdeNrTu28VXqM8Rv5EXu",
  "key17": "28heJxScZfF8sqS1bSXzAsNuEjXaaRF8TBGLq6E7hoRPmeSG8mQRGgX2jiUwTbFC4ypFNVsA2pqJi8z1Zskn6GLs",
  "key18": "5MPMnpF3TXs3WSTvGrFhhytZ1zsidWtaq9qKa3xEjVhr2YbUgpGva9SB5aunoJhveBRMmAbi6zdvT7fuBLFgiF2h",
  "key19": "4V4DWpJU2BU7AawqCeiPKtnzCujxEVmEqJ9J9kSzde8WmSVrB1rTRnaaucMKCnvfu28VtgVVsYHrdntbQMTCxiVi",
  "key20": "5HW13iLbKzBaPy4t4my2VRcZhF5TkL6Ty1vXtsunb5YbSsgQPvR61LGmtKPBh5DG1GxFCqy8tpxpzhUAQWCjxP5Y",
  "key21": "4J5wrGurFEqqAoFM33SjFJderQ1WQztxwc8RxXw68oRS9WGDsRQfEUzMy4rpKFQyQckKBWg2uHH2CeaYDjK9Qu86",
  "key22": "41ozj7ZhUQbiLipCNpL9Mo7JsUJj1JFMNh1RYXy5PmH1RM7vVz41KTHG4SJqDXWqmTeAAW7HKXFFfd1t7EqBm5oR",
  "key23": "3WC7LoryVZcWz8YFP3A4sS6g2sh5x6MpTmKt7imfWVxGmZNz8tHGTyyiyBsUtAxHxGjkMmpap21YB3YqvDvzNNEu",
  "key24": "2yRPtuQDFXLWw8XEDRxnCF4onA2ZZEL5zB7FZdhwrVvDGKTqqKcFLEJcDqzQvg5qETRJYmRuhzxd56CqPmAqVav5",
  "key25": "2fsfmCQgNEC7S2ZhEZB7PraKAwQCnR7y2AWcvKTF4pzaQALbLjwPxobJfuK9skZTnQUfK7xeEmzZnjfaC4fCrdUP"
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
