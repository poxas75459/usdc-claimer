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
    "5zQ6owceBqWAPUy3dLMZbHqGwSFzrWevDZWeTUQbvPQnrqqQnBh9m2JfcFdsDyHGfcVYaW4yN3oi2ofTSkqzWpXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XpYRMDBBtYocaccoZuKgqraVjmdTRBiBpRVvs8AnkaYSvWnuM8PbHPyEbqMimjaq3cCQHRm5ybN8GH9KkTbTxUV",
  "key1": "2TYXBZV29GuS4wAUXB6rqydnchoTRUFHNF4TvYjmdEP6h3AEnnDckKhaBdxM2rzKp63xBzimAmfogBMLxCSy4bPa",
  "key2": "4KgTS1hcHTi1XofAeryPWvRZhe3zGzb5EMG2QzTWUpJ5o8T6JnG6uURLuFkiyBn1mxb8z4FKvNXJ5nK6oRh4YHyv",
  "key3": "33zQMLtfqVTJuBzNB9sZvL78Tjth456LdQoEuLRVuMzQg2dsBKg7MkBV4v3AwnPrYU8HQvYygQdPDh2qHJXRejHg",
  "key4": "4EgVXR6cr2i4VbZsHKcWHuU2TwQ4HmgxRFFNWbWmhJo4izZiHhJERRZrcmRiGURo9rssekCUc3yFPxSJah4auuJJ",
  "key5": "3cvoAJ8xFymAXa3hzfQFU8BymH7Rznjj1sgycY7akCwb9ZxkfSwB3to9MctzShEawHoUFzuWZA855j4uzorDXZgN",
  "key6": "4cGfWGKAmZmhskV9AokJTjVkvjJAcYUMbC625viVs7MiNumZvRwMhZPBv7W29A59mYGJ3GNozJqwPgh5FBnipCLG",
  "key7": "2NRtfdK7enUepuXBaepnURHEPanGL4pJAv6Gbpy5fvaz25vvkM6eCy5AuzR4HRJ3g2vcXmvU4nmXpBa5JzBz5PNn",
  "key8": "awMmduC3THz2o6MfH8vLiv6HhAkdZ52b41m2GPBCE77BfGdHscUP2n8uHgyL2kLSVHXo99ka6w7GfJZufPQ4HE8",
  "key9": "K6tdRi9xPLkV8W6X5No2jq7zTV4EZy9GkU1NRCfwK31iZjv3BVdGbQscchQKBogTHjbuyznYwmGye33TavF5vXm",
  "key10": "3hCTqG64b6dUDovoihptiTxJCoaNa15bW6JMGthKfvEpJBfzCt7wwecVgZieNvJQVT2E4pC7aiSyWx9WMNvkasim",
  "key11": "HTKSL4v4v2kmHkkxM9GD9hd5izkqu4pnVccBE3pbhkqatBs4cDApB8MoTzUmkwd1zrekcf5LYFGMVRAm8sbGixJ",
  "key12": "2FKNeaecWZdLp5cd8AcnmJZVrhgeuaFv8McD3yjVvumHvuKD5ow4N9tasXyA1yZa8zSiXZZeHQRTYggr7uPeiN9B",
  "key13": "3woR1DW4xYZfGGotAfthCwwaMQi1KiviJrS6htSVxSJJP7TXqGMy8HVYcG3KS541xyAviMBjQy7p5AnLpRfxXZ1U",
  "key14": "3iXHhRg4HVAVAMztC8e8UTDjxnfXWjV7x9RQMY3s1HszXhvvbxeTDcwUoyz7KBtbn3R1xuZ2TyPJwafbLKz6bHAo",
  "key15": "5hX37GJG24VTRGnHqPcznwk6gQKtfy5sMCEQ5Yf8aSj1S9icESRsWDqKrRHLxKFBR1yQDErZVajzePq1KXysdCJK",
  "key16": "64j2iWWNbBpNy7HVaxsFf5ShoESvskTxKNcjZYzeaGzBLfmpqWsRoGVot52e8pYr2ragqxgSxfQqPEHwgcN92QDd",
  "key17": "4FYbL8NPMwHhmRv1sZTPvgKzC7y1MK9888AsLvAALQF892kUUP15nwiYrSWTv2bDm6Yk9McwFXQfZvcmYnsmDQM3",
  "key18": "4GM8pFHJLcYZZRbrW3EvtYpM6mhuZfUBznA7ZH38jNCDF45KPYbp2rou6d1ddoy4kJCDfEvne9EDHYMBBh8Q5CrN",
  "key19": "5FPYFkcZqR8vQtC8xuXKpD1t9r3tmSb9HjW5Hy5D9uR9p5GGrpFMv6Rzg4vMyu5snodSyiCvxWudCr6n9NjDCnkB",
  "key20": "36JQ9j9cRHyyKt62yxUPqUBF7eAuCiwvHGpbtubSacjJeVApJhCN8NfCPvwRN9r1MYGb9KcqqqWyKrcbBMbKzHrM",
  "key21": "7ej1zBZwuLsWwa28Pko8KQ4HjkyVmFbRGhmbXzRbnGonsxutzAvuWAJ5XcuTiiYe3bz9C1A88vM6kfqYka4ry8w",
  "key22": "2c8uW5FxRKaXa2iru8vMbLSgfvW8b4sTCXSRsW1wx3Lz1TW24cX7ZD4gemPhk2vfyX4UoEqvs2V15LZmJPuNmWZg",
  "key23": "38T3ZYHJqt9eU88PMMxxn1q1NQJKUibR7TN46U9GBZ2avgaH9EhwrUaL5siedQoAZXmgM5tHKxSEfCKj8HPJdQPL",
  "key24": "5q2M6EJFD3Y1fpzWMCWDNqWntBmt6YT4ZLD6zVsqBkcwRZ82zf8U47PnVQpNWMU6HQoSf8BciKQyYNKUfwDq6C3f",
  "key25": "2uPGDXyUf9EVQH2y4HgJrKYqZAYUjJMDUuea754JNaZZmbhSiq2EaasTwjLUFCscZ4UfshnB73SjGNhbdv6H5wj3",
  "key26": "7socQ3Rz1sYqoTgB2ixKbRcRFfgwhefADHPXrnYrVDNhK32qzNZfT6UiPpehxRw4oRHr6X7BAKbQ2jVBEkiFW6E",
  "key27": "3FfyHieh5k8YDhpxoiCCJv7qfTSaL9Ba6pj1okBUfUuDkW1DX4YrPb57uqduZKEdizoGfNULpTyuddMf7bymewdS",
  "key28": "HRKH8SLL9tVk2AUianTv23oJG3SAUQKe1ajDS8TzNbs7W5tVCRE7zkbMsPEZpjm8Ctx3WwU2pznkR66J2uPqC2Z",
  "key29": "5UdZjp2qdmYyosMwvLQffeZL34x2CCFzfFJApxQXWbG3A5JaenapmjGxHWiDphtnfRVBmj6DhtGFQjKH1Rnn6BzR",
  "key30": "52s7s3v8j7Fqwf5dMzDCqPo4Ug38RgyWQ73YeaKxF6TF2Vo45WpsaDBRnLqNTKXhZ2r2ok11ppfPXM5UhDNy392W",
  "key31": "62rsnTwwTyBpzqsGxpEpMVZHfJWsJqHocYAt4VnsvBBifvRfqsUEBLr3mRpW2FdnazyQSTfoU8FPorC3MvyYKZ8r",
  "key32": "2UroMoUJuY5jXnpXTMnRqNDQbGpsNPkjPwbEXXMMhbF3TQ683kosVYN7UFCV5CDQFGyVjdz5PwprzAuqHnJz3fVn"
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
