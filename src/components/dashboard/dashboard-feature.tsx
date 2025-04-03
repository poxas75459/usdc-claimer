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
    "2z5jF3tVcmp5YFmGb2yycj8Ms5F8hPy3oxLij6rpuBKch1Gwa9iEexZrEBRnjaTq9aje3EskwHzFXDzwPBobbd7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4imSaHnfAVpsvNsCCEYYMoz5Z43LzzASg29KK4FcKwUScWK3kY7sqWVwHXVy6ghTxmzMgCSBLhAHT5UzCpixrKVS",
  "key1": "5ACgBpNh4tcLaVzX3x5i3mKnhUa1wvNBVHjBY56eRw5B9XvfEFYCu9WrQbUdQmyFNV8Th6ZPF4vPxbukQiTLRLu",
  "key2": "3Ub3s61eigoPkvn4y5XQQ6GRw4bWnuEHiJzDKF644YVsS9JBG6vg9GS6aWvQcs5iPArhRfN283uViBSazvCCGgmc",
  "key3": "3ywxVUvd5b1X7oXjCyJyyiQJnA4ZFFUR6tRefRd5kX2yx3YGUdS8uzePESbbLsZ5SNT1ExjX4bXyg3SpqfByav87",
  "key4": "Rxyjbwm1VJ5rxZ17MhDodmdGUcGp3zjL77RVaZWaANUpvRiNYzSFphfKjAGd1toQjj25ZfXNTHNR21Zs8tjRCXq",
  "key5": "2NRAngbFwR46zKqmRshDdQripKxQPGjfPqWHPjnA71SphLsdCG7yYSHJUFXi49jz1pVq8Ur6JQcNSAFyUt3qJZiW",
  "key6": "3jWjdhcTakqkFsHNXfL63Mobk3RqqJjjEjRLpxocSXnpNL5TMnBej5KNxY1ZNUeibbx2owrgeeVsheYwnkAYdYtp",
  "key7": "45qQvJ3yTgmWo9kbg4r5zxpPuAPzaknA1STDq3sWzsFA2tu2FmP1AszHse5nYdFr1Q9exJsCiPmBqujpCkxQPZwp",
  "key8": "5wo27VEzMTAhgQF43oejMnToGjm99ZR5McKWdSkCaLcDLjCSCtvhsKESvc5XzK9gK9txNQkirxHUBjGaxorxDs4j",
  "key9": "2jDtsWm5aAwRVUdGA9c264XP8tguaqi9haGvwEy2SCWchbU2B7mh3XEAdUjhCrykTmDrx9dzKRy7PvHWyot2nbG9",
  "key10": "5VtKgPxMQeXpJMQDgBh7pW371c5ohr2PsfaLDAaG8trfMHc5EAJdGJsSH6VybBTkNQbrBTHPSgxXqrAZd5WsZJPx",
  "key11": "5EDVpY3K4Y57X1yvy4qHHPkw5BhVMSKoXGmn4dXbWEWc7W5BPUHzL43mVkwdRNBGUMdcwzMx8pnSzXGYJbyrEp86",
  "key12": "4aPsknJiywF355pcz8bDmcDh1b1wZrhfLZUQdZRmfANx9QwhHFz2XREMySo22tPe3oNZNgSngLCeXKMzXzGADceD",
  "key13": "3jVqhD7cNUDXvBX2kiDMXLhxnXana96aFe88f3pq3gqXxdyNUFhw2rPxJbisYXi8nzpcLxf6p7JK6EdXoWUa8E3g",
  "key14": "4c7Q7RMZ6PgkPQp7798y4tzfx9PayPAtnBC8xFrFXtE48wKALBfYqzadpYL7UEJwCaAd47gBdJX5yMBSYyyrJpZq",
  "key15": "p8K8oa6zP9FSGyaUJdgo7r7ZGG5hX8J96rWzBAniZikHckBdvCLD39m5QCZmRdorssvUozmLvdvLdWdUL2HFeQB",
  "key16": "3hKq9aTUp4wGqRpvjbRGw4pUfDusyEsYY6bJqWSFgQUtcAEa5ab5bNnecxJ82pAS8mpm1PXCMdPKwrGY6CtgoVTV",
  "key17": "AdV9HWF8Z9qa3mw97TWC98jEZ2LPrsGkCYJf1WwE1Q4ZAnDexsKiU5oFYVy9sM4SZQ6TQ48L88LxKthC1T8urby",
  "key18": "2mDxoeAg4aSgJ7Yj1u1icuZsUWRXxghkUprqR8wJJHWih4etcdxwko4e9FxSTMiZQUUy8GRs8JPLu4h4RbP1A5pm",
  "key19": "4YtcrBkyRUptZhZPT8X5JVmgX51VT1YRWtWkDp8XwBwtx16uHJqhWg4uF5hWY8Wg5SJyKnAyrBV7ruH2mBAivrB3",
  "key20": "5odtZyDVd48DczNgVVduyJt5pL3KDxggKjgXMYJUNnNWKL5AoC6LJo4J1HAVuYmtd7jwQcfLy9SBzQZRHMf13gPR",
  "key21": "3mHae2yFFQ95geWKVEANUSKVJNQ9QLVXZF2kNvuXrMAziPYpqCsGmZrsHsGbZCE8Y8ELipcNS62mc4vE1XzU5trS",
  "key22": "24gTb3FMSvDx7ZoZQoNDp6jScPZCu46LcNYtTCt8s1qrWGH4wJi54VRKVitGXW2o12fm8TXDRu7yXL7Day9bbbaK",
  "key23": "3X2ezwnXRRz3hnqHctKbqqwa26x9VF2aDfJi5CE3D2xfxGE5FGnrFjnoAL1u9j1jMrfCpyTeUbiheTcsjjTtPtrU",
  "key24": "2TyREZmm9dQyPpfV7sxbEERyFAyVzKSreeLKweEnE46sL311ANP5eHsYfRQx3fmbhrAnTeHwLQms6bHtBujLj6so",
  "key25": "4uNwJukmKCeofwfgU9YARW87wQDdYxJnAbecFnc9xvDG7kmSJW9Z4cN7qs3DpFNAXQxv9wne7xyj9D4Vgai1RNQa",
  "key26": "2AQXGmBeo46J4dZyXhzfwiuy9mwvF5Ft65rU3YBLvBFSMgxzfgioLrteqtuoXxn2T6GgrsvkQX8NWqKk4Eui3PR1",
  "key27": "3zDzyYT4WS3zASUQ56nd8LPT6pLn95pN9mYxAyndUC7GJqFwHJE4pK3Ykt7FzHUCMTzFjnFuK7ye5DZRi36dqhTB"
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
