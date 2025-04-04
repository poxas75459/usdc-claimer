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
    "ef4rrNuLA41Y1R15h3X51Lg7Q2PSYgtixmEHua5xzSrwBTqymRq86HcDdmx6tdpsAKXYeF9hQrc5k2tVRY9BJjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22b57D4WkM4pjQFLDZvraoh4ePXK1UREbeKVo8NqmUWyhVtGzzUZDgQK6X55ASGtJmxkRhymBxaMasy7DJpySni1",
  "key1": "4ePf1TyrMkuCgS7FebpwzRapAq7X1mVjwjAVTe5vddHH6MoqwrBN4CFDCj3DzawBGJJAdGc5Ga3VXf6rVeXPMLK5",
  "key2": "3JAT72RF73HjHZMubHALxqqnR59qgAox8GwGKe5ZBRi16YyWwm7N8hcGK2mWqXd39LmGJTJjCumVxcau9YJGWmUe",
  "key3": "zYhpoXfucPHPfeBF3KGFp8hwRhig3rZQLqWBGFpEnVQCnpiAd94jGnauphdudLxgEm8AMAmjSU4jZADdfee9zGh",
  "key4": "66veVDFvFzhnvYg8PX3EhFZPbRhc7CR1U5PGjpohPjhxqm1eN1Tr9A6t32Ueua5KVcVAdhcLewxGYxwK77AjF49m",
  "key5": "2xF2WrfAamwsWbqxJhmLCDWNKHaLS8uLPXoGuUKSR6kVzo7CiCyWcw8AKfLr9eVVds6mdMNkSfYPdETdENRDMzRo",
  "key6": "4JL1nqHJGMcVzu73hpbDbsSrK7hKE1CfaJrYMdGdBdmg52DTPy4W5vzRhxSMqxd8iTEd8RzD2rArc4zeoaquTJr6",
  "key7": "5x5DnRxSk6FM6bhZ8d4VskywsN7Ma5BuHiJYjA7CjnmJ1Yb9vyuCJyBgFVLeRW3Uc9aQ2HuGtnZjAMJqDcPu6Xnp",
  "key8": "5KV95yMCzTHkEBiDtVNanXW6a2JgWK1zCztXuUxicW9GFND7p5GfHhz9PuKzVpBNHKfsDKiZnXPzTyU798m8BP1Z",
  "key9": "2HcfV1szE4PXhtbNtCFHLkpu6witqoRaCxt72igaUEmTMm7vNQKTVxLrViXu7RzUU27FycPDKmA5Ye4Boe6GCAZt",
  "key10": "3xvgyWr5B9zad9RN3nqGgjdZUYqctHYfss5iwndskmw5iaHZcKFRxoctgfW5v36LX4PoPED4FHiArjyerYuZXexh",
  "key11": "2cxu93v8erJyWs7Kv2pzAAqQKoKxU5FvPQTQEfCwyTwRGfqJSS5V69Yk432Rmkyue43NVfNFxTeZdUowhdbrrfEV",
  "key12": "4pLQ7s4nRdLbJXTypcmPBCXgoC2zKkkR8eBjX42itYxEovRBVnLUAUDHxF4ykgidphotkrnZY1FfxTtTPWK45KG",
  "key13": "2ETjgkgUKeL1i4jCr9KM2Jzoq9i4axNWBR1DViujigqe1PuZ8qyYBPBNwtPGsCKepvaTq2dYkKFQphBKtq8kjU33",
  "key14": "53JNFzPs1ahwUNv9TcTkwTA2bafXHx4ARQ5sYWCyFYQJiPKPEUiy3KsVYn2Pw82q7X8k53Xj5v4R31k4xbFw6gK1",
  "key15": "3Qsqgdbmbm49Se6GjoXcHeuMft66WVmWRx5mcy7x9gHv3EhQgM44Ci6oZnuXonv1mVQDpbMbgq8hmRit5HhUPNRW",
  "key16": "k27gv12ABFDiC5YTipshV45US3rSVP9toWEk7W6BWC7XUA1P8S9wjdzXwm7h2vETE3dYiDUMGvqmjk7dFU58GVh",
  "key17": "BKcJ4bpPNg3obmRvh8oT8FSdMPft5w5e4Tm6PwuvXfEg27fsCpRcXhSWGzzAwgah6ejLsEu7msRWMaCJbHDkAcn",
  "key18": "3eyzVjN9nFqf8w7rGtfqZauqqBJveD7fPeqsAjtQjr1xMtfAtrpEqLpqNrvGdd6X9mUBxuJN2x2S5gNPaKFPwWwQ",
  "key19": "4PHBrrmHNP4Tk8Qns52fZLYsXjNZ92a9ALjQJNWDAfaCm7gCi4ARqYnbXyDd3BNgJMzWEfhYnuH31G4tP8N3tGra",
  "key20": "4nvjcSi13Fs2YY9QeNEEiXUvkqzvAcecrQcKaL2tdLyB9pnRm4gdRYRpLQh9cAwidujvwbPysf17CZqR5KUqaXyz",
  "key21": "4CYVXByTCgQSraLAdW7Va75c7ZJ97ANn2MCdtyawDWgMm7Sa5hVUq7N1pRvuokcjGvJxssQWo6dLi4JemabbC9xK",
  "key22": "2yxPYYn9iBQJnJXyF1ELDZpWUJi739dHqmju1t5aAesHFbLnURd2wjEpJryT4u4fUtWkT6kw9StRwU4Qjwzs6T8d",
  "key23": "28dhodWxru141NRpkn9H4YkUZmNDpKeMW4djGmULuckxnH7qBzXretFmBsRs9FvPRDb67qUw1zjrA2NVenEVRJDk",
  "key24": "5becyozHKcXyvmVuqDbykwT3FCQT6fYvbnvtE11rQ9kHKpmWZrBm2gatKWgcgdMie7Z3YGqdPs1F7oZoqYeDT5qw",
  "key25": "5TdYeBrxesRGq1vb1gFU8E9GCMxDwaPCnaGpEDr1BdQSQHtg9baQaVyYmoeZb9ycHzv5FgV8MYgcx5GfzzsdqC7f",
  "key26": "3G9BB5r44ARubv21aAqbdJivhUiXJA1tNjNVXMM9G1Ab85ExH17vTtVfyxRbBcmM9CnHhMvw6yQ4f3kZ5oxnHvc9",
  "key27": "48kDpLA7xgWActLCo8jESJeouAtaNS9JHxEiB6qnnS2nHVJgVBqTeTjoJDhokehfiEKkzGqQvwfU32NHixT3KCTP",
  "key28": "3eDLFgtCgnwvrqvkPUpy2CT8F3afH7YD1TSMUDwtP2md6cdJCujb9L1eALfL1rESghJsktrjuXWWp85arndLN6sB",
  "key29": "2yj532hBoDqqUCyjZvP1bbpYDUpZEBjmeca6oojAVRkcQVzGoCuwHsvfxPETvXW3mU6e6CuA4XL9r7kS9DY8GWe3",
  "key30": "3YPBPjHfTEETmp5o7zHVHGe98rKEUcEHjsvPUDvr262EsQkS9tmhsjHR5jVApRd8jCQP97qdHhJzZn9XaQpbV6iB"
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
