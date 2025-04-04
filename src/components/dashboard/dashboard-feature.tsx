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
    "3PTdJBMyFWKeB4RveNsPSkukJSAj5jPxeajMCvw5joKRiJJx29v8rm6ZAhkqanKmfMc3ZrWSELRbPYJQQKVUWGWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ipNjumUcgwH3urZhmCUwWdDk2JRKKGgVBoytMpAJWhRRhYk95tGa91VPmDGD8AZwEw7DpxCoxCdo5acbLngDhi3",
  "key1": "2vb9e8BbPbKA39j9cjmUT9HDSMXqPbdZvqEFmKnGrR8J6eTDQyTiAB2tytJJxmyy1jKvmNjns38Zo8zcfSL9Db9M",
  "key2": "2oNxSsQDh84FyndKNWeNNPHHuNM6aN3SUXjRAJdMqqn11TKag7UCDVmNHbgAmrUrwKqyaWKBzDmz4FzzH9pBNAE",
  "key3": "5FB8CUPkAgLj48L346q1nDpZ8V845aiDyKPGCKae3iEqND23Vq7J2fWZSSJDZCByGywyxzVk3WiwkJFd9TstZzf5",
  "key4": "3jM2tTTkMMMPNRQVE93UqxZm7S8A1S7Z7KWSy9NTK8zCctVvSLWwSc5dBbYizyM8NKxNe4vyqa3FSAGmeK1UXUtE",
  "key5": "2iUhr7B8959r8dUzakMZ4TmZ52UAwEgVgKkCiZvEE7tUsxGnzvWmaQK1uiBfhnDxue6X6YABvuV1ga3S6Wk6w4Vs",
  "key6": "2mRLuNaqg1F6BD39iQeyQCBuZRrdsXMvm3JobAbURwCuZMkzuxLgHV7HactLcDjreWQimNhbCBdneJaCzNgQxwh8",
  "key7": "3bHggjSyiEgvFdP5Mcbgd3Usv95C8cLxc7yDgQScbi6jVUHH74D2Ld2724ckYHf15fbp4yaetKZZ7K4Cs2XaE8Sr",
  "key8": "22yYbeAwFFiQJDUDyd3Xi9LQL15FSJ2Y5ntvgqeSy6LznZe6xj6Yaio6nchEbu9TH9ygKSoZXrAu1QvxgKQmd92P",
  "key9": "nm1KUguyhbnygibm9jbutnbquZqdMp56eS6KwNpjRCdD51y3oihweezKvVE4eNYLtqBtoyCicLzGivCekYXcAxK",
  "key10": "4H4zjqLh2SmH51okRnnnXorLwQ4j4a3SGJDwTpGtvqAnCR56KwSt4Xe28N69Ycy8k2HrYjttazPaNaZYA1kQrUn4",
  "key11": "2bTrbLgb7aysDJGJ813Rdz3ytt3geQRa7W4wHQYjqMh9Sn2e9cMutTPJktS8P5r2GAWMS9Sw2UxzH3QRZaAvYA32",
  "key12": "3s8EQkXqb6GHSctaMWxqfEMhanCYRqtQeHGJ4siaTj5MQ3bQap6k3SQeYKkbrWSzJk6Y6TWHZonZ4JatVFTxX7Qw",
  "key13": "2G1ecouHJheutcRxLZBHf1NEKvmswyJNpPWPSLsEAFgJuLkV9HrhHi7Q3L2TfBBiZX4Dpxe9ggc9Xk2TVkcZzSYQ",
  "key14": "2YLfcNpWfsvm8ercJji8jp1YkUegSPcsRSHzrYnrW4jc2K96gdxaR9JNbgMjF5nDjGF8AARG2FxEmUXEJxLyL7Zk",
  "key15": "2cQHBNS9j1JAz2JnaQtVCy2nrUS2Dk2c7y7dbwgvZhx5LYE7Wy6HciW7iATYQR1Lq9bcKR4kCqLEo7DFTa4qyjBk",
  "key16": "5xRiA4iaQpkZjWZXqpNeaaTG56iVQbmmbd67KEMKVsysyxamMVtPEtKYndv7EWRk9fqGa3sP1cwTx3xcH6wGgT6b",
  "key17": "2sjxnsSKGMa7AWKxuRpFLaCSzGDzNLedoCNpL3s16Fttrg8Koq95Hj6cyBiRCmwTFsP3SEVdeFDpaR2iNPVNrahL",
  "key18": "2Qx45Fb49kdSFrbcP8Nu8F3BfSkGM4Y3iYEFJjQis1fw62mnPYCj1HaeQjKr5etmdZ9CSQpdEFKfiCHejC2KFazm",
  "key19": "3ZkMFHkFS7iddrPot4Zsh9jj1JU6dACLuFLsxAzcdZKufdJMRhBxfpCFJDgNgRm312UNrBwoVQ6mjBF2WsMscfUj",
  "key20": "4AjJqVPS98KXhPXmJT71WSfgwzAMn8Cij4frkfeqySFDGXRqCnPZnHePG98w26QwNf6sMzqHr74A7HERfhmgdVTW",
  "key21": "3msVUFRQ94WC8yGmpKt1ys8qGgfUwEfU7DSnZdJVSsYEvXQbYkY7Yj7mgeMFvkigte28g8XgbmFcCCQXV1nQKUus",
  "key22": "2wp1peazFmK1qFoBxvywVMqZo77Ugf8DzRZ51bgySuXwEjmXrg7kG859TxCQHZzjdBZEYkLQH1BP3vyvKh5bT7VY",
  "key23": "4FCrzc5fg4JdsiEqGQ8pKTwawFrQ9arZzDbebTbCeuB2hbGhyDZRh3n98HWDxJqoz9XmbfRmXMQeyWRoDxibG9yn",
  "key24": "66Xax6k4gkgNMuYrof3YuxriZjMo7TruYAskbYqfRtxFTCzQs2MCdoTcRiFvr8HbuLzEjirwctVMo4ACcaJyDuno",
  "key25": "21pVSktqHUiQACbUgWrBF4ftnFRWBBz85EZaWh969Fcj7A195aJ6ccK9eJQth4biZr4ELxVk6Q8Gdso2Bx7ubEe2",
  "key26": "3ym7iATWN5kCZ9SPqm7zjuRXZi5gN3L8y5zsRTeM6U6FkLdT7hyRJAcyTV9n1xaJntQgf8Lj8uWgCyAMsnnAv2D",
  "key27": "2nPwGWc4CCWkdYUAJwQTA21GHtjJGeyb867uF1BxZiZqx2r6JYEHwQxDJMLuLJvwz1DsmkX3jnJAUtXp2utMLfUo",
  "key28": "5JSJrbFqo9jaousp5qHnodsSu7yUTPfX2nghx19fKhrKNcDV43KHxJnKGGbP3PmX7JuFubqkD3mTUxua7Z5JGDNJ",
  "key29": "2jH6NBrybQDh2MWdVwvdL5kgb8ZjEzm7pzBktvs1L9AZCXhQP24Aw3juD5yFMxyTUGY4PhjoUBT6d4tGQKxzk2Rt",
  "key30": "2WvcYzFuxjrTG2bhAHWPvEPvzLmvX17JTccFKz3JrVcEeuS3uzqhSfoBL4s9WnXwHgxDUHWtiLMLrS3d2ffPtEs6",
  "key31": "3NBrcSgW7oiBtmgqBv1CeYgAem6tWht3nZBgRMEgNaezWRD3CfmnTtdy8LsSkpMZZxHtZh3vcvsqA3n1TfE62p2g",
  "key32": "4g2chpk8MT9av3nekw43xpgSEyuFkzNsLuNGfVtjqDJeCaawT32ZXMaeMGqMHdYE1wb1JQQo4Bfy7wGdaYEHJNxz",
  "key33": "4p3Dmu2hDDXccgtMBiWVxikEP4tQ2uh92RPQMgiD6WmKgVo7g98FmSFbT237Tj3SBNtXueLsgpvDKLzRf33g5Mqa",
  "key34": "2YTxRLnu6Q1weu9y7Kf29ZL88tn4PWZRSGjGSp3RED9fb7a59u4q3vWCoywTdHNp3YLm7maQXkfKoiWhNH8hho71",
  "key35": "35kxgugYTcSrbpeZpAcUEf6Gomm2EUZuRQaHRWuFyEqFD8CUhjKfUU827qysoZQBtvgjRLxcRo9PFUsdj3QkkJdh",
  "key36": "3KnHRcDDmeqkxFQmkF6mG1Z7BAcgFZJqbduwW55mWciLhsQENkuEPHytV64EVAAtvsZMLH5T2ThWywarhRoN1hAH",
  "key37": "3VyQZysDYHunP3L46nEitikhd9RJ2bzqz1nuQL2e24ubhq37kZVovcGy78D7YoavsN8ZLX9goL8eNNrUnjiydgAX",
  "key38": "2fZXxhVkzdC52rzeTawNzuGPoob58C8fBonh8SVkYRFXQB8eoTdq8C2cYgC27DY71JT7ubAqkFe5T666jid1cVDs",
  "key39": "5bq7B7tddm4MVA4yYeVqAGsj1LvsY7QU6QwMSW5RQugT3ySkwG7WH5mmxmpuBwvtSSNDjPBk5LjkVfeAcXaMaZXU",
  "key40": "39nTvqsGjkXgq9SWVZD6ftTjSLRuG9yaoi6bvfEpbJU3RarxxDaNrhwE75iSobyWbekpcNs92ydtWfN2MjK1BEce"
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
