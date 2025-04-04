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
    "5j9nEgiDUFHaVyUVHg7js14HD6Ld3TpCaw66hr7HD5hFf5MeVByA71eP2gyzDwkXdsFgug29qxTusAPBzvVuApm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WDcyDkkvH6sXkCWo92jEbY12fcxvbv7BUd2NgoSbCEXX5LVikQQo7aXh6gqyXYuz6rZLQGvFPsDwEFp1BxS2qzU",
  "key1": "1DUu5nFnXGLhNQbQoCg3scaSd9CWHX9bR64PMVeVdFuzDamfDizDg4UQpuWiq9xXiz8GQQy5yoHoZvnYa9Hmyun",
  "key2": "5wLxHrCbCCkXRRZcsSbyqXAr4th7qbXWaMtcYLZxsgYNgumW7AbSbr4NamPVcoFKgzXXx9bwxp2ZEP77pAr77ecb",
  "key3": "4NjaAka76SyYUB7RYAsNgrZcUcjnMBz7H8qXEDkDPNVBbdhvhjrzi1pGZSo82PmmoFRKZdeEpSTCzTxdk1BTBvSn",
  "key4": "21fYkJpb87U7fu74N5fSLL6NTqGMh94Rn3pgZR3Qu1imcM8fzeBsT1P6Uwj9vPRF87UxX7eGMwQVuLwBd4sgryP8",
  "key5": "2MGaLxVEUUY1rNXq1g7gHb9RRwig9pcoJQdWFbTZiYf4wAtmyAPRLvC6q8ygAYgQZoRZEHXd2Q8ChieM2EYJrycb",
  "key6": "3QyJ8WMe6eCeUwyrqAohucobevFeeQSLqVr8wREvkQktXrQuvik2fDmp6XR8huJixzuEgdupJZAFyrXz4dTGJyga",
  "key7": "5ZFKYrGkYwAUXc4HzJpBRZcQGsWQ982hzAcheM2tVkfE7t5NRTxutmR9UEUZjzN5GcQfL9vsTfk3Kr3N2vXVXcrj",
  "key8": "jPLrvqrCK99n3uYwWpW7BpAZ1Fq7d2J8zjTj1zAa1UFuFKEc6YXuB6Hzphka622Eq8p4kvf6xLWsNkiNt7775FL",
  "key9": "3wmdhV3NkU5WFkphZkwTDDzyuiHbDsLNdWBg2wJGRPHdQe5QpwkMULE2BgstzrsmCwpCYyjgUKRbU6LAJzksu1f4",
  "key10": "zQoVqLMi34HKgma4VDKqqVKNQSBk2X7A2bK6qdMKKWPhMGPvnYQG6t3k9KfRm3gxacZSCJFx2YvJDSkZi211BM4",
  "key11": "2sfmkPA1Qe2r4AC2PDh5WDWbVTYLmGKA48Zo4UurUMp38bYFrG2wommviBzPjPe6L1vmj5D3EsDdyukFMmypBEqo",
  "key12": "5S2sprymNaDmipAsQEfRyMR1vgapknPbASLGTzam7neHTHW7M5KgggqUuoa8SKovZigKeAAF8hYQG2Q2r7RcrmRJ",
  "key13": "2pfhCj3YJadnSKFhjABMNXvHs8Whk8nFY7fYfhnhumxcQkDWaBea2ApyhNRwp6SRErCmhkt8VNGtN1CqyZqSdTFF",
  "key14": "uw4sb8EgNr8zvY4M1UrNEJcivruJTUPkKbDr5RF8Si7RZGrepoyiXozNb1mFXH37KMZvCqQejNEsEEiTJxxUHNk",
  "key15": "5a8xWZTUiUBwaGoLxWLaBEEKpPS9AB6EfJEhH242LXEGAWsFzDTyVwo4ZW4yis9Kbja5wZ6o6CsZftrWcPe2rw9Y",
  "key16": "5K61yk2XCF5xCXk9vK9jn95SMbJTEohts1r4aqZxYD8msC5yC7tkKmps4L6RhBHp6NLc3EEJj42SLPAiz1dqDyP5",
  "key17": "61scR9gooNq8H1e9PtSMuWenRC1RANKDS5bAVHZcJo5R2JSShSQQfV1g8mBqALGkSfXzGtkRRneAcFNzc7JoFNHg",
  "key18": "2Zb5fcZFZSzKbAUFeTQZi47ujLyowBbz8owoV2G5mvzj5k21J4t1zvfPgWzEr714KvU3XjhWNGGQeJptDS448vEz",
  "key19": "3yHNPdCr4dWkB26aK5QNvwypgVjQeVU8gZ8HrXgeE2mZdWyXCauEk9jSd5aQSm9eHrjvA896JRwapDEk43Cz9a67",
  "key20": "5KNDmjDqzSVM8VExPd22kvvjoXHz9nHeCamJ9J7gPkSf4A7ehcKjvm3EPoc7rq7yK9g4Nj1b9YzBipABWLbfgoXK",
  "key21": "3FEFtuLEJEMevY2pX1xfFQvb2PEtGkG6LJBKWiMabTweURJMXYJxTaBE3QVqsBie2Uhdfd4jecrCn421e8bVJvrL",
  "key22": "4YNCfQ9fTbKXv2YvjgW17rdkg19R6V1nfVpSwR7zkGdFTvMQcxRLzDj7cnpuVxwZKpp6xH9nhDKuPUhdgXutXaZT",
  "key23": "58AiZJKMMXLizEj2Ne76nZGjRJTk2zn9zJCdfoDtARi37wppJnVLuBNgZas8huAUMyRKi9AQ6W2RWYi2dprEJmkc",
  "key24": "GYZ6hnC1JYGJo2gsSZe8kApKbWrybXQbf1iHWC4qVEZaUtAbPXAfeCYhQBwgT4sG1fgQvTGFXvZDEySFNeQFcJM",
  "key25": "3YxUby5iGdaRzvQg3tyTwj6DkTPHJzdRHTspurushLQS2K6vCWQN6sef1YBCu6TtmoKgb4YkG53W4YDhQCHge2mK",
  "key26": "4KVVoVF5ooq7DRaGaNA9GK8JrvzbYRnoKji5wvvqT6RrN11JCtnmhwNmEajLQEwiaToe9PoMkFE5GXrvuQVcxe9V",
  "key27": "2e4fuNVWiTd9NKbCVCqmB2kw4Luje59Z7bfaiKcmGDS6BGhaDVxeSzxWcxQAmE41B3G7MvCV2AAC2jaMzNK498XY",
  "key28": "2DK1qnPc4HDz3ryrwCVQU3EDf8M85FiMXesFrYQQT5eqU8qis12Duj1ZAjswwPJ5t6uCjsHgMxqWYP2opgnQdK8r",
  "key29": "5eCyopgaMgK7vhDw7LEM4jqZQ21A2MdsJmU9k7oQ57dNfpti1uXPdJcXGCFKTSaTsSzdJceJjDHJjeuVq1KbTxMP",
  "key30": "2sqE8FXvsyBtTMi1Kgx9tb63DLk5VBRzMeRupJsd6S6nUXD66h3PXunworE2YfSeJPmpt4Qcq3kv2hqfyapqtr5m",
  "key31": "3kFujmVWQXoHNz2SQoCtVPskCYuiRnrD6xHAErboGxgRSBcjK3oiA6QEytaVrJDCS9gb6JSA4CbHLpKi81g135EW",
  "key32": "awRFJ8bzashGChofoDQBbQcLpXdZEPHc5fBhtJGsQitvyKr4RsFk28hbVyyXDuqVBtxHWjTV875onTDmhJeeZzk",
  "key33": "2B59EFz4z4ZcGaeKwsUEV6oLxxPYGkh7gAtrXHvrp9Sh7whwukehfR8m3qjhb9Wp5xJVDdBkQVZa5uQgUVGvW26H",
  "key34": "3PDQ9VgGbUzn4x2kJHHe5MAxAosEPXg9WuiDykLbubzy5LNYvSmAuPpZ3vBBHERm99kwPDwvd9FAmUdZobwdCLfF",
  "key35": "292TGGYguz1yW29BB5DHKUHzX2aDf8WdFevKpgADevUkHpHn5fExunyeVsyKTAAYRX6tded9n4N1F6ocXSPrSBaC",
  "key36": "diBWsjzUsAHe57jSHYAv1ajgWRwPXSv5Ke9Ayj8cHSg5BCzTNKjWqPYFCJ4j9Wi1vicgUo32PqrUnkGeMXJXX4j",
  "key37": "36Urrzu3iq7dHaAtuYWxujHxCxnQZXXBcDCA9dkeAJzXw8RwUaZxRE8QFMSQSKfHzKRsbY6iyCwEVRceVCRfKLFK",
  "key38": "24ZQgj1sBk64apL7rzExLY77NqAS3rzZjcLwNarWpjHsPZpt5HaFMcKSMspCSkVXWAdcmzuATD115AD61LfP9LmV",
  "key39": "2ivw8T6fz4hnpcQw2tVwqEk8BKrfq5jtPjqCd9CUKcFngZgQdVsAvn8PKZxoFn4PdybrNmnzvpRCjXKVLErBmLaX",
  "key40": "2PUgoR855q8uivZEuDz4fygbXTYTUavkZs8zz328eAaLbR8DXpPPyRhB9QqTVcPmogWcVo1bkDJsuBKqiMTLGYpf",
  "key41": "4jaLi2KyGMPeJFwoQkdZ6KCMcZ1XPPiPE7Z3LTDnj94rUugbKX9oqNbSgzqSzdhmbETXRqhHiXQr4YiYDmjA43BA",
  "key42": "NycxByAfX7DSHqPpkZ1CE6BPbmYmjzP9RFoj5HqhzLNBmN9t6TEH5iPUbXQhiWAJiSpqfJ7TAvtnaFt8YXJ7XCT",
  "key43": "3QuT9VbNoNCPNqnWzd8mauftzYY3YqntuyWPgUURUHw8HtUG32HcVSzd2ZF98ET55ry1H1yRYRKHS43md3E4MjVU",
  "key44": "5J56uLuqRuihmrziRTu1jv9U87mdEUJPVdwrMYjNiQsXz7R6GgJhr1HfcoYDwohuYLfW7Rb7wFH7cpjmQcjsjvjz"
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
