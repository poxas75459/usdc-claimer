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
    "ffYVbwBvnnR2xRo7hBNsw4rUzGJLd2hXhrP8nPJoQsqaNeqvXvW4K5nC6Fw3AdoBteuE3ewbY4MJMwmRJVEe1j7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ji4FniDPxKYNQx1iLyZXz66j2pYCd8wnzitosZgcnUJrc516PNiwuBFav6Emb3PgGTLiqJZpMNctzJAABLVBTuF",
  "key1": "4NXbhW2s6MjxQBVSx3fXiPdZVhT87sXSNXEg9RLUfHakVQVzmHEMmFsVFdnDXbMWqjS66QPGYh1v6pmG15YBw5kP",
  "key2": "36UpCSD5cg85reWGb4b14riXgXcPuD8mzpDjuwEGBvgrYqGsctbPXbFgUwLPVzPREgM9TXjGE19D9tD748vZaLdU",
  "key3": "RSWHXy94AUFzoGDZAwdA5zeW6NezTCiL4cLqo31c359j8x223zQJWDvfQghUMLMbMV3ws4gGXsokNdhvmehyzu3",
  "key4": "645wqeWYQrwzVt968a5SpFQJ93fym4hAgp5m1mSy4JWjJfYAPt1ycPvw5GEh2oSb8Nf8udGL7VpRvHPvMRWx4VBX",
  "key5": "5oKvnMTtbzSyM4mJZCuUrgMqwfU8xpHRWBY8Ltj3wD9zF7MRQWHAQVxdx83YW2DqrsEBNashhMAiCLD15vtJz5jh",
  "key6": "4xY4u2SuHYjDKmKRzT54Yu4wmGDAwZ1HDTWitgbZ3EeH4zrTo5jMBa3syrCcC1YqhYtDCZPQ9Yxccw1kr3gtsLiz",
  "key7": "1JHVC62dknjydBSugGcaW7kPZrGoyYUuTWoh9BRP1uRN4su9jdonT6z252LEdtdjLX43XgKWX492vzHUuRCcv4p",
  "key8": "3B2HvtdLMyS4zQAzEAeCzfhYYjRPzV1c884fXthUc66p3ccQXpDsmVq4izvHgzdCQqzd8L69nutgjD3oA74RzNTw",
  "key9": "2jSUidj4X2yCbdiCwPJYY6aLFCkdjtmY9GG96392aW9rA1Q6VTwKiVk2zW8j29Y3TQLSgkXvJa2a14Uzte8kBybQ",
  "key10": "5q1i7rTUHdKSE62CFYqG3VsEtFDJbm1PpYAbuKnPkxM7bFTmRqyvg8LNW6EkHc7Gccd4Aamrd8GM5752Z95Fbp9o",
  "key11": "53hLXNEmqFiq1GCMpBQ6Ymi6bbg8ndpRhsq5wNF68bhxt6jyBXTi7cCkiJEfujioWLkzmQU4hkuRCy6e9LGz6o1n",
  "key12": "4Bb3s5DiKf9tjWLmwaaAg9yMrnCu1h5SJeq8oWNSD7ZYV1DrdZV6WoVDdNzGR1rxA4hyCSWUMi6A1DLrhFp4XHW4",
  "key13": "2J2Nc1KoYiy978b2m6X9mMdPXEJkXLkfKtioVQjk1k983dWuJmCkgdS3kmLdi4MhJwH9Ed38fbsDpiV52fH1Qww5",
  "key14": "2rF88U9XeHzUEcncNuzMA5GeGQKgA8jrZZxxsJZvQRDED7xpQRhQK5rfx8jX4odapk6iVUnE9SL4YSwrzTAkYGux",
  "key15": "3tfPzDgUXGxukSGx9ukGj8okZDSEzEzQ2MFwAMSP14Agoun7KnZ6Ug7rCgceZk4cvKGseL9nH8pY7uxGkXjJ8Tda",
  "key16": "5eFn5PzXWu5wwrRPAFdudWmooaBX5fR4hfjF76Ma7u1nMptCU2fgLbbt2nb2vaqLTQ1yNMBsoN9UGWPK4UbCr1p3",
  "key17": "4xv5xSXpzVsYKiEm4Zs1ZtC7aSTXa38bf96TN1dqKisewtYEq5ArBCoZTRL9hgoBg9M9Mhojq6ZH72JMDxsMZAaG",
  "key18": "3fXBac9YCzcjUA1nQEjCUHXP7AnKqebZcpKsvw7XS6JUUJT8dPVBFfus6Uag5CZMXmp3a3Vs377ka4hNkqis35Zo",
  "key19": "3n9zGyZmVb2tiEjaCbVFwNwzcmCAsjTYRyUXdTqzY8VyAdyvxLPpEo9pvSGTMn3zimqdMzDtQ2cwgDsi94bhAMyT",
  "key20": "4AdQNuPbnNrzSgYCosdhHvhtHZiYMhMEKmchuq4Zaz2zergBZP7FFiKM19z6nAupNfJAZp5KiQJuzUPzpUKtNU7T",
  "key21": "37Du46pnWhrB4TPrqm5tVMAKzmqSLHvJkcLrFwHkDsvG7JiMK1tLcwrgt61TrinvXThzttWi55FUJ7WD8v5NAex8",
  "key22": "sSmkvr2DQj9xUXRDrgHifARoFFx51igyE3Tk3M3g2Vp7PVj4MkxPcVZAW9xtYoQf6DyjfP4yhnha2YAJq96YgCy",
  "key23": "EvHe5GSADxRqMfT2JUL5F1PZuJZP35jn5rxNY9hkseD58ufN8zYYve25GePi5JXHMFrFGfJv3uZQ1rvHhT43mLK",
  "key24": "StFAjGeYWzAWavoF1XKhp3U2WENAYrue6tw7iFSqWtv887p8ZuAxv5HURHMgQukoY5ZUFqianHfrde7bpFefdBD",
  "key25": "5PQBX8MxtN8gYBo5WAR8DMmNJerojqjyJnVfS2p74dSsTRLmmKTH7TpeNFU9iCSoj66H4yczBMhBxLXVWh32YZRB",
  "key26": "3JiqgT1s9DLyzH7dktC1JA1sfPUh4Xy2ZMt5bitUEi8naGZyZTJxh3qesAD3pMhrozSvvoYKkmxzFYsCsQP8CEER",
  "key27": "5bdKhNy1pbV8eCQzgRWZLivr33T8v8mWdmYKav23m2ge8osKFaeiPJhyBWhbzxupEyWDA3rCiH5LpriH9q86Jgk9",
  "key28": "BdvrRiHLuBBGN566NB3HAeUVQPf8qQvAD4C8JdyXzD1jZh8j8tQxLMsh1DPyMYABeBKoqEvLaPrZ9x2g7nmKcUs"
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
