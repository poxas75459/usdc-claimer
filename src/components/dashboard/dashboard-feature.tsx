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
    "1xEgMLjvUXJnayi1g77EDdnY8ZQbUTWS9aouPpSgWaNJ9okLqNwvQSEUYVZYNrUoeiR61DefD61pgBj2d8jzx14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uowqNxDFjhDUnxBXX7YRWrtrAFxH3Cj4hDp9SZRnH8oMijX92RtAm7UayTbcXmBspG6RD1nMWggtjYGvX9v2eMT",
  "key1": "4973J3JMtjuqT7Lt4H1Q8YBKnrg6d16pcLrd6jdUmwWDrusTTwHZki4BRjytUAWe56NKD8ekf7YWGRMfFsxX9p1E",
  "key2": "kZ5SLUwXK1VbwqVmjyUeT7LxgUfzZFhxemf7HFBZs1wPyKaVKJetrQctpo8hA2NH4Bjnr9nq9VRWrT8Pt8cQAXW",
  "key3": "5VnNteDpQWVjdzJnGbjtZqFHuVVD1fNJQ5Soyt8C3Qn8vrLax1R1mCVMbmo2pUg6pMgHFeZcDgvAKXspX2EC8uZP",
  "key4": "2eKH5KPXxWyULNSv8P6TGy81TAAk15yGHtCMmY9dVHuKuH4oqe9HUxjtDdQsU6AP3rBe8WDKtEZVaEgMsQB6um5z",
  "key5": "4Hmhwxx8bw85B778GsvT3q5TvJusi9pUnvxYfwNJUj2B8NJRK3UTufVss96EqpCMUfgJTU4SJzGzgf4p5vc6EbmU",
  "key6": "4TVgvn8gVBGxwzczFmKXVURp8z32WB58MaQppF6QGtnr4dLEWNvm2TZ5HiWCcEwaKrLRBozW6rryx5iLhYE6Vwd6",
  "key7": "3arxbcgh3ztL8ZKezGQkbaJQqo5FLyWyLQQmaCYySCESDGMrNDSknuzrgpHUxBy2K9sCTvhB5o6uTi4xhJZKQpfm",
  "key8": "2wQxJV3Pscub9W9V1puLGyuH37RVjk886inJUU5aT7K34kdeogDipygRfjeWoMEEeg2dZGfYaYuemUAUXn6gxVxV",
  "key9": "5vYP1DDvJYqgq75mGEv6aSmhy1N4831WrxgKe7w6EnGKz5M6AMGaocrTAtfxByqMU2UNNmKnC54AhCTsonWCuiaC",
  "key10": "DyJi4RvKMRerDXE4NQC7nHz2R2tu4UgAKcTRvTHA1bfVeS8piBuvHoVWWUB2Gs8i2YVeJHW4h2XyMYGMcKdgVwj",
  "key11": "28E2N2hFWpDiYuMuDTcXaqnLKphCdjrcX82KyeYPREbfdkkdXLrNEm4yxeyYHHdatKs5LgnPAFcjYoTeRbri3HqK",
  "key12": "4LWN2gLqesrohJSxDBnkEeYh7MfukVQtDVumRsnuFPTnRHzj7QqE3s8ReCg3nDV7YzyC3NVyiq1s4D7xcGCNDi1p",
  "key13": "64YtQvQjLfWiQVutkj1JKiJtMt3jMfWtdWo2F5exZzRwQWGZTtkZ8zfnAv8taJch5gevevH8cea1srzAHZXFRA3y",
  "key14": "3pYtJUrviwdRuzpwNgxyLEpT5uN833EDCBjCEE2iioU4ReEAfmDKrJ6GpevcFDfj2m7oWScAukFCbtN5MtFZhUmf",
  "key15": "5HiAZFJ2JqGeZ2co3m8sUrMy255hRPtG8FYb6dCjQ2CG3z2ivt2ADKpVcasYoUd96tNu6rCy4iRoPVMGywWjC3Xb",
  "key16": "5L6y3eMTq9nXBHJYC6wUQkbBBhcwoY8rG49i6iroJUMp6y3M3rXg82Qobhv8bAPePEz6X5KeCvRT4mm2hpgUGeSR",
  "key17": "uH6A8kjrf75koY6d3wFfjo3z7see6FNZ75rKK14ZNm3HvLHfnJJxk56gZ884XxKLeRZSv7gFeYnLLw8QdF7L36B",
  "key18": "b1UM5THaQ88oAANQV8aN2GzAezhTHtTUsgWcFbKKbM89de594AcRrfAQbtqbC8ZV1J134thTTLtmryfeiuUpEnY",
  "key19": "4Mq3SkuJt5QQMCiXtV9QEraGEYqYKWtrrcFEVXWLg6C92PudnNPZFqCnoRK3jiBDpuQy2cJ4kzNMRmvCjjpyL4BH",
  "key20": "2KacgBF9SR6XKA8rgzRBcyHL7osHDn7MENHLoSK4QQsUrgBHcQAwB4ybeGWjDJgSpW5tTyCCn1WNxMjhWMyuvbs",
  "key21": "otejCwCboNfcsTmats6AcDSLMQg94ctG14WjqHvvozgsQndLGhL2dadC45CkDBbeaQLVmuYFdLDrANYJvd2mt1e",
  "key22": "2SsxcTJvnUtsWyygvN6ZVKLX7PqBdohS9dghAu2jXc5tYjiY8HGxQdQF47RTFr72fdN8YaUpN94CVPJzHtE5koHA",
  "key23": "3rv5eUkai1iQ31jUAtBTHC1F2NBst1ao4QwQUmdxuRZ4uVCSQwdSsbAwk8BQyTTgmhrWyHrRY6ZFox3hUvXijeg1",
  "key24": "3PWnCogADJCGQZU13Xw74Tk4yK4Bgc6kN8cU3J9iRaHgaarFFx3zADoadoaKEYLNrESahQNGtbEnmVvTKG8eUAGP"
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
