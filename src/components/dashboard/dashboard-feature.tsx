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
    "3pYLjN6jXooYMhKwEhWUbUYzgEmfRCMQg4h7r6Tf3zXCVuJyCCaxnuLCEEZAVDR9WwyH8986Zrun2Dj4xYumoaks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cw9qX95cHmchmFFqFJyE3hezYngsY9vSeqpjZqU6TTw3ZxrYMPyyjqaLGYmZeYKyUQziWKcXkJgxfRoJnrDSo3d",
  "key1": "3zkZB7wjrcKs3PC6enWXNwKqx2JujQWhN413yLE2vZH4pHcpp6QqR8CDT6hiF6YpE1qtWg6Ja4Xz8SsRjom9aGVP",
  "key2": "2YfYpth53PaYSpLKwdVRe79JNKB5H3KA4M9KDVLaPKJNvRd2UAhVY5Dc6irEoy4Xf9SQY4nyVusaAacx9spYPKv",
  "key3": "2UNGnueTi9nThAzwuKKrvdn8Gsbc572cRSnDb1bgmmQJ64hX4LQ8dRWPyo54FYxB6mXttM3ittgTE8fSf7HKAHrb",
  "key4": "3rHnGdNw1d9zSafQHJzW5XUk9mWPtdajVJKdZqRDZT1trQCAeiwLm574nKXcGrssHo68CTqE7RZA1vNfVmPb17UK",
  "key5": "33yt4W36NgF6LgtHvPK3Abgdr4UQ1tZwXPMB7LAsvd47cmF2gB4v3jf5n94tpS9BqiwU2hvwXwR1aea67VE5vg6H",
  "key6": "28ha2YAgaCRgsv2VDkZ2ooAKAnnGcV7xLaHdBfsVuz6XHgeSXZsRDwPVung7DPpNBniuanSwNhTU1zcPzKBc71c2",
  "key7": "475L2C9nRu1mLHQNtgYQdgWv3z6qbexE4U166qpBGXY9SGPmEe6sdzEo1Yyv1LFTwviC6HpbaucW4VbHtBhUFwdS",
  "key8": "4KZq3QULqGJBGdAgtChtHzseUndn6LmdHtsVFyzH99tBf3vm4UJSWZ1af65uyzzvYD6gSW1iVp2BZVZQEsmjddjQ",
  "key9": "k6rAaoLRFYtyeB8aKH3mpFUcQnLHC7VEPbXeB8qwSEwTzDMyEdfjRb9sjoKLMfPh7fejLgufaqAbU9QvJKhp1w6",
  "key10": "4uYt7h2P8TtFPE2NQbtATcNw4izzTmahxGGBs7ytzjYZPrwhLLSGnkSM712McCxjysLbcmGfKzCJWZ9DU1otVBy2",
  "key11": "kfu7FnuXdJBth5WqotH2D78rWa6WUXpHVhABBotT4Hbr7v4NvAVShaR6NjnaygXpXSgqZ92SZkz2Qnyqyn7HAXC",
  "key12": "4uxZK5u2kRFpZ7oAgYbrTEzPxc4HggMKrg792si8setGLopran2NahdEgTcXoLkXhYcEMBxfNbWci81eNYtLxejw",
  "key13": "5i5zWy1aorEnJJLRmNQ3gJgxm1dwqyfSe7e7Y4AAWPnsUkGU9BfHx4KS3AVkakFQvFTpTsUCC55FnaukZaRdhrmK",
  "key14": "2FR3UbhyiHs5BQ9S2pfMgyssrCH44w8uH1XE2NBNTDEcADjRhXLAQanCYo4Jo5rnYRAjPr4RaBAbHFcgHeJQV2z5",
  "key15": "kCek7b3x5nCfuEZCj4k5JwXim3UvxrxUaNKThVoNdAWM2ryUmRG9EaCDP5iZjAC4GXWxVqHs5A3UxDUwe3r1kBT",
  "key16": "37MJYwqYeUML6QjSMvRVMgKJAQF16xqAuNSUFZXkTNQGv2zHZiDwp8RcYFFpAyGy9Jzpud7bH3AueP1YawmQ6YKB",
  "key17": "6APtGttjP4AgU8gFyeHMdn3AriWPV1poKUMrvyBHwDDfpzspM4Moh2xaAebPWntYdRspkqnj1yqx1kurAasRCMR",
  "key18": "PizkXZPeN87fwuQTR3qk3i96MuzWFn8f6B5HQLunb1mvqXDdBZt76dvYAhr6MFr1LZVTixhHFiKnA7mfnBZzfvx",
  "key19": "2hUHTp9inxyv3KMkKNwxwKevmKKk5Jo3hXnMWXU28s2dgnWuiDUQNLvwRUwMZxe3KVFzXAP1kCSccNQfMHRucTeA",
  "key20": "2SgA5pXZZSfnnKTwTqxEUFZGctT368aRXVXdHV7DsrHAvwHu9QnyNNyeNxnKch8ufn7cdS7Uu3cVhTE2KGnLSV1Y",
  "key21": "t9JbN1wnCoucKSdGc3mfMG9q7SxhF6S2eU9BWoS59ctSH5ir4syBcF5dBQc7cqJ6pEkyswh3ToTWywEmsnAxvuv",
  "key22": "5GV8nJaUPUKZ8LLBCpF8pYufKJWyhaqhEeonrB4tLusvKxgvk44gX1fKtGcZP49vqdXPm3yv9g7sW9QV7MN2evs4",
  "key23": "v8Cfpg1YQ6oQCdxBBPrV94j1NPAZzg44736BecKdFjFCVw1z58gr7QkEYFoVrv3BzYN8fQswC9K3QHoNeP3X5CX",
  "key24": "3XUa8dApBcYi5oYf4cbqq3Q2imq1TVh7vQieKMqHFLjWVFXFws3Z1FmiiwAsZkR3PFwaoXpnjGBy5i2QGiwN4s3E",
  "key25": "3NDHmSzZkp4xTqyExFhqLUdhxGvntY2rLVZPqBHQsY4R9WcpsqWT4g4mR97Pw79AJ81Pg8KWEsko53vV6FkzvvPf",
  "key26": "4ULRihmcfvTTNA1K9Hbg8dEE5JZXpBRi4eadNQScm2vFT438qksVc8Jab2z6hjDM5Y7S9J3617qdBzcohRjC636b",
  "key27": "FyfwppU7rN8x5Nqv2V8KMNHs6PbD2M9mms9KCfexWWt9QNZg1hjnxBGYntP1yJ69ufeFhhkRbdYcnZHeYmBRyG2",
  "key28": "5JcVfT7aLYXd3r17AUZFMrzeTMWBYfXt1YmKmgNEjkUmpatuzSh1ahUrmXU4qu95M6UgBtLe6EyB4zQCWyHX54Ct"
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
