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
    "3GeHHUjkiodXA6F9B3hC5vgdAtjc76tPuwBdpwPh4BMUtsMZG4d6rTd3peo7YdjGMuY53HTW4Nr49F4TRaq8dnrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eLMDoc5ZM1r1DPGt9ZhVcPUjWX8g26cLpnvXAXPNf5iXQ3qzvZtvmrypYoj3LGq9KuB6nuUYpRXXP82XVb5cjdr",
  "key1": "4mvV21dtzMB5wwP16oX92cyZpY8FihswnkEZAqtJic5mG1Mw6QiMNoPjHJmofZ2ZXnPGerkKnMWWWHQzGmcRknHu",
  "key2": "D2AM62TWr3apFQBBPqJb4XvsgBiHSNE9oLXAuwNE4WGrdWXmfwQ8qBkNLuN7wRWHQjRquxj8J8794wiZFwoFGtd",
  "key3": "5GjcQA8JZXCvEpCmPGLQp8zPABQU5sJaJeiZH9gP5nTrZ7vuhYqJ5mXgfHhWaPYWhAyToSZVo2hM8RZ4xmK32Vun",
  "key4": "4GLe89dZ5mebs9DAFRbGBLdJCk5LXUWLWpHUjUu7zDr9pUdYsc8trhMf49Zmvufi5FB6Low9Ubn3cQFTejBrZZuM",
  "key5": "gcuiJ3H6ZJCZKpqsUjW2aiHuBkXTN5YXZkytLM5bUoCWzD8Ls5tmhMGR76JYUnGdqfVgh48hVYfU71y2syNVwYv",
  "key6": "BNfnaxiHqJCzY7ZnQob1W1stNaXi7rNvM5kyrQkFvZJpreNuQPSAzhwBnRw9DYoqVSv9ypy9ogAfKu4xpQYWGkW",
  "key7": "2nWWbQEt2Yds7ViRRf1Ev55A8KRaW5gisc7ABAhB1gQCzZpzjcrHohftNkP3yG6HFKBw3DEFJup6FienETCrjsG2",
  "key8": "2U6USWtxHtWaBFV54fDHujfKWWDGgfjpHcVv4AV7f48ir5Yxh2PwvYw2ABvtWTDtNATqDRB7tDxYWAM9zLVPBagB",
  "key9": "5t84D7mEpFBvp4EV9XgB4aU4efZNaqD7RCtACisqCRV9sFBscykH56XYoJEuA6NYPTmskWCu8jCghbiQeMVSyNtV",
  "key10": "5EF4shk65ic5UYm9Urvg6dbDjMKkcuc55HyrCsA3YkdPL5jq4Ef53YhJckcoszXyvNAKGsgaJM3QZ9jnSPQFb3Kv",
  "key11": "5tQNFvQviUn9Zc2ppJzPFokepZrxTEsuQF5Zayx9kBDVZ3HfveSyUsCJBmnXXVHPzMrjwurkcB8ETLwAiLpTPr5q",
  "key12": "Kn1X2we7Vh5Thx4VmALpRoR4qejL8qQjmvoD3EezfTE5axR7sJThMCsJhEoziTdnEonnrH1KSpq7piusPPefHp7",
  "key13": "A7z2x4nbXmLKw3NqwVGNNt9jKqh8nQdHM6LB4KGLCMrJDr1ZYbNuK9LvfZqxuo1M19oCekgoAKG15xasQhxvfuE",
  "key14": "5xot8gmAXBiZdkviAMRZ6ZEcEQVuaMweZkeawDcYf9LbTXaEoRBLZGxRrunhWm6rtySNXbhLNCCJ68YEckAC1TKQ",
  "key15": "23Mc757hKQvhnsU2AhUemsAWfZK1yKNZ7c1svBkmNGxTg7L62GvnnkaB1nze1QEPgfZgT4jXo8cEPTpL69K2x4Sp",
  "key16": "3ATXCXtNnjm65amLwCQ4jv4YbMhkQ6eAcZut9J1jRa33RovYMN8ENR56tqz4B3g3qocc5Luf7Qgz9EazLXv4VnjM",
  "key17": "5USu17B4rcLLKBGhQCXmRGrKEamQLRSvWQNEKVksqC3umJ6fUSxSyTjG44Y1aSYLNwK1SZ7Yi6mm2FNSkt41YTbL",
  "key18": "sHKjiAVdXA3KdNmuTvRcS9N9aBm5H7dNQwm3Hov3BYpsNKnbv23pMCXUw5EYuiGqyqhxHK491MZmHB6U6d3zSv9",
  "key19": "33EXMxwA4Bc16GiZXUJJUMhqgLhYXFfqNcjhBdraMGrXASbUXm5sGQBjJCUsFwGTzaFnKhfrNjDJGzCjT1yhT9uo",
  "key20": "4XJQ5EfDp3GP9GqSgEMnfLwF1dXWdGH8zZYAuxJHN5GCYU7ftF4DV4YC8iYTWH6ktUJkPFKtoXSeANcZxE2yJEpZ",
  "key21": "4BMEMbd9hQ4Tq935bomTDCLh49uRwix285XE4Hya7Sz5r9pYrtgnPKzDn3448aWMBuVLhmYaZkoyeLQCUw7B9wq5",
  "key22": "3HuzDpVeJJXpwXbzutFT5GFKDKxAf9HjB1PrT73HaxZZuFa19m51vHzMTWw68iJ1ZcJvRoYZH3CbRVgEzajWE2oM",
  "key23": "3KzzLPEc7iv5mUGa8zdif7ssB8swi9gXQFpYvgL7aPSnb4UsVTCArX6ahMSX6qgPFff4q2b9SfMxSKue3u9KknLp",
  "key24": "5DvfGqApRnVBWLmkEb7bxiUSRwAXRsqec2UyeNQimb5PsTmJkuwScmcC9qK9T1Tsuj9FoQDQCPNmv4tiU41P3FXn",
  "key25": "5DzKhBoeUT6Wn9nHUMMf7nNHu1EczfwCS37ZcM9A4Kb7BADzUXWo3MrSdGzpRCcdpahnv9NNKKdTQrYqEn734hzY",
  "key26": "64592ZuYK95BrGM6GXXCtyXbjT9xetkG4szkC9qcoqyLJL6kZZMc13nWwdG1zPyLH5xcYqY71ERz1jBKDqWaeXXw",
  "key27": "2nXVF1bFmecqr8kAQiXDreqHqcJTqzpg7GgnfqYTkjGmfy56D2QhYzouD3mxeNLD1JWSREytbZG1WhVJgp5pHao5",
  "key28": "3P415LnvqBJxouEJLC7V5s2PEhLk7wmYZBXErAsZJVBemNtqTmBJg2GxY6x4vw82nRoHi9eC5uKcKm66oDBKkXgY",
  "key29": "DdSEj7WtvygFJtjzxM52oskLPkeHHiBFZhieJQHMuJPcrCiQQk8KKcDFUfDgQ1XkXtS9Hk8JeWGgYyXviqcTVSX",
  "key30": "2jLRdsategHKpNbJikna3Gq8PF9BSeDnTXXTCvJ85VgPDXUgJTB3NxZUpVZo7aPtcdwzsXp3sJazU1VriwDD9mAD",
  "key31": "5Q14C6XFmdbSYKbxKJP1Z2aZeZ2ABn1LvyoaJhcWGMWsx3XHYBE13UUcW44GHUSa1acNmnT3dYraKYzmYRHSnzKQ",
  "key32": "2hQqKRAHEf2bm2nztDUSo2r1ziTnJsKdqMcnRQcVmPTjzv441WAiy6dbcu62f9gtLBhZhHr8F9nFgk2XUNa1Ju1M",
  "key33": "4TxRmWVArBNqsefKgUrGaJq6rEREVu9YNQSqR5AUS1qNjw7xkLkzygLPcwbYfYfAPDgYYFY3WE8iutxNHa5w8WZP",
  "key34": "5xaDwMM6iM7FUkd2ppwqZQZQnj3jqHzDp67PRqrCFEmH2RvWAXVfhbVrFUWauEkLKsQsT9s4zvJ2nZN18oitSpuk"
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
