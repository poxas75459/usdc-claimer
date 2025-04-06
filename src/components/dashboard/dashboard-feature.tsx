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
    "kkaAgWM5q84ot41WRFhMzeHceSMwbG4XRcp1GkRbgvVbUmR9vX1XLR8WdAwGvoK9yTUgw9h8xnctp2XdEv5Ru25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28hQ64oav9W59z2JeTT5s9pFTMphTSQviUembQvoNLmkAkuHCGhqqXuxkVeFm6gVmLHCfxkwq6bv1oZXik4ufAMz",
  "key1": "2os2TZ11xHEMbr1Yi2eznke9otjGt9rrZ8sKcA77kSV2o8voWtePyd8eWJZVsP1VBH9fo4mq7tFy8SJC25birwN5",
  "key2": "4icPDWXY7codaZ2ixG5DZnQvFNddWPYvR5TZRpJ6iMJ73nY7xoaJ2cV5GH5YvQ6yCHdarR3755uXfQEZRio2Zdn7",
  "key3": "5StPmYfTt3B2ETMVhZe1VmWqCvU2BQqUJyJa11Eua71Vss9nyzUwGiGTDJ2LhiDfNaEzWKJ7t5jmYeH1Hjo6br2P",
  "key4": "5UMMy2kDLGdKdRXrucAXF73WP5mpk44JGtfM8bUoJVHsoLCzryXd6VW6jQkFrdvWPJScsx6bMxApuxHqB5MbpLEV",
  "key5": "63gf4bwDkoBPFL2FWgjYU3iEJtkNRQsWtTzv4vEiJ1aJ89kmmqapyMygf5KD5NT72wxc3V1ZmexKByxpiU5ieD9o",
  "key6": "43rPga5rbPprm1sLRdaVA7mtd7vBBD4z1XC18SW8tmoT4QBUj98M7gA154bbT4GdH2bTRoPuSMKw3oA4sSxwhbAe",
  "key7": "4ZKNVshMoVNkEiychQaQy365VAH7NsBNJ9BbbxrDxqj3i2cHFbmWrgb5nGsgdg7rjqv2pcHUBUXnjWjAJ5c3v3PP",
  "key8": "5yWjUVmEwYt5XJ4TKUhkuATt5jhU7ZJZxphzRUMV5HWV2KieRyvqWX7bTmZrDJojo4r2rwLXAuo6hpRzmxfTuiTL",
  "key9": "5Dad79wiC8YfkcDs9oXJ6j2qWWoz59hNzcKJNYMCjoPNBZwCp2mTjpXtN3ims81KCTN3r7jCZkJX9NA6kXjrCqXb",
  "key10": "42gYRiYibedaXYs8oj7uLC3xk9EYPF7HbUdJ1eqR6VUmd1emQMCEdXD3tofBieBhsSPzX8S5cJMk4fagnSS1c6WQ",
  "key11": "3tdySX4HfbuUfWyVGsxiJzAR2zvEUP2TAHh8juA6UxNtkD8Ug1cb6BkhsTHsEjLS7zpkbFGAx3yZjBwUF8V3nrNp",
  "key12": "3mHUGyCc1EzNToz9x2rRF7rHNhmLVEPVgUnkpLkZrgmWJdzYNHDgfzsnVJ5tT7pzZ1Zut84QN33d6uEH3Dh8ijYo",
  "key13": "4t8y8PqtmvhHH4TQWsQSBv7oSv2gCYsCpPova2AR6fKzPdMr44LfDCXx3TPVvJfg4o9GnqQN9PP84o5kpJMtYHSJ",
  "key14": "7LfqSE4MvbxTegvzfgJyGh6G7TcZPTsNVpxt3yp3mFWwqofunn1Vm5BQAaxACZ1NpY3f2fZHGsW9FYJuNXyoiLB",
  "key15": "232bvFmjtg7RJp3MNpbZeDUVc31F25kzMSERSXwa3wvccqbNsSxxxVxQpjsqjULKUykzjeqEhKG8JCPxWE41TWdZ",
  "key16": "49dxaCUGdMghJ73QzwmQzbhBBPxm9ub9SywNFknPj2yAutkZuyvajRrAGzRtxQaJcQydSng9bdReAXgvAVrGqh3W",
  "key17": "FPjnjuH8kNSWS4iyaBoD6CrWtDdm3dXGF6innyepCEU9sYeLCa88VdEWSqD4QoHJwgbMPkWp733gepVeovC871X",
  "key18": "4wRpW9UPaFLFVs7m6uqYqskfEgHSXyhwGssHqXikGK4Tj9R1npHxEzE6uWVkayndFafXh52xD2atWjLHdQowCAuQ",
  "key19": "58x2WVv9VZo7wMw54BtsMqD59T1wm8QfK8zansAXCqEDLx5yYwiKbM1X9S3Yahwg7BM4uAh51UUhiSaKZqQ8x4eX",
  "key20": "2bq9GovyNNthaaCzDu7vNGXfY3PBz5Fxke1QdtYMZ5hzjxZxS7YmDNajGgoL8nCVdn9i1qegwE56ChVrtUGkBwLo",
  "key21": "3b28kbzTVMmmjmi6bmH1AZjgyUoL1TSj61oWnv26No5Da6iCQ4RgUKXvepXxuEU4rcfofvi4p8z9PNXNgwSFaF3V",
  "key22": "54c8rXr9grPYw3m1pFq5jU4mwPi4w3CTFFWswh2rkuibdxcMB5SBYEpYnexjZwjYgqqCww42ej5VX9e1AGkb8KFK",
  "key23": "4PRzeiAbUd6xUigAvWeKhZuCPBzVRTShfW4KdXUJjnZzCzsYqrbweFsMK6cdpMt7zECJNrwL98XcY4Hi6Z3ioek7",
  "key24": "4BHYrsmgmbCbPZnZoKjnVfjrvZDmWJDQGR6a1T1bUEHvAzLrAEC9h71ZVLoiesNKmmFtFoKUD31tthM49rLm3hgk",
  "key25": "4KPgWuMRWg57pJG8zRz4JDvUz7Fh7s36Lw9setEZbbCWHCxiCX3cWUUPAQyV4598XWygu3j2G1AoxUixHDtdfQEK",
  "key26": "4EZV5gYfwSWg8r5fYZhvLDTtw6fU3m2Rmk3DzfQoEZNoSC3EgbA8uyhWKx1nenbEYkJFM574CpPjihnXWcGe4L7J",
  "key27": "ePghSzkqdkSdzniiiNnWzCYsBT4g5nxMifbFF8H4pNttXBHW8pMPR8eGWXb9de6855MaVCBPdQBUf23CvmSM29g",
  "key28": "2MKG2EWqKxDzqaYBWqvFoe7cbvwUmuGhQ5F47Jf7eoBUUtjXUA7j6TQ3JQNXHSibrBNZueJBpr7avyusgqKfnL1p",
  "key29": "9CZvCwKxp3K5SiEg61UQ8E96MtTFtXYwLJnbhc45w5FSSmULFtqZAwHtACRABDGdviQGgiDhHiDMJsdMGiv9kFF",
  "key30": "2QLuV3pafQsF5vhaNXMqiLtNQyAtt3vx6HFgymhXSdKddeXo2As3sQgBarQ7zRnUNWCthWXworhUV3w9NJFqotRw",
  "key31": "3YLYvtiQjpXhoimYXSoavTuKCUP9W3d8GQt9nBwjWonPc7KCJnxccmXt9KVtGek2hjyJq3p8Xcf5Jw9u1ot35G8P",
  "key32": "4SWBRwH6YVWQQ1hmNYfLRxs9CBNT3ciFKS6DCYQaV9SEWu8Kjga3wFkVJkYFnTEoEAhFwhi96pNTehAXSg47SZ24",
  "key33": "3HyJcUMWtkHqpNbuY2KqHmBACXyYbY4yGpdWWsc45K56aghRkNYgqUyCk73WqkVmWzqNCJhjiZ6vZWYwhruSL3Uv"
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
