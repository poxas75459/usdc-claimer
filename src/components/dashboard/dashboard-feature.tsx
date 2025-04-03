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
    "2YXm9aMwWNquK7Q6YUo437nLf9y9wPbmLuvEvoTe9BP4eLtRmGxVRUStwHRoxFBtfA7awLsKZnftgrA1WDhTD9zf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LvyiUUdqd4vtgUcVZThLL26KNsbvjdyPt8cP61QehD7mdP35xGuHXgNUX9LYrZsDvrbNZWGJGFxKxwK4xLHQQAD",
  "key1": "5Zt15NjnwbNgfXU7itRFZtnyKp2Drxp8uyppLTy4iDH7X9Dkqp49mFUpZ2KZ2RusASqJykPBRDBmEXr8FsP2R5Dp",
  "key2": "3JfmvShRoWMTVhK9qN9h5j4JJp9GfHPWGb6anq1N4oWUuSc17qdMTL4rKGVWBGX6ug4xPErn96Qh2oZHzMz7GMVg",
  "key3": "MYJ5Xv7ohnmoYc1Z264nLFBiSs6T77ogBSDimQMxqmtJHMsxevZDc1hGiVxz2NmyUgFjF7dGqz2vyXJpu6XuiVp",
  "key4": "3cZLGQR5RT26Jkrw3FNvAVVQTZRGNQKnscvZ7Q51VNuzDE1waUMZEuA6U7EupiVtx44jVHu9kg54aB33vYU8rpEB",
  "key5": "3Z6yQ9rHkWowkTj9RFMHhzvZABE5K5N4cnAYZ8HukxL62BEUtx58cMiQb5yp9woFPKhMTEn26tckRUAeabHj6dEv",
  "key6": "CNUvGyXivfkR3csQhpzhjrQ4KY4F9v579cyVVzLBBVEPaHD8o4K7f4wmJXttiw91egPdzVJsGGJT3ZAAiC3BE68",
  "key7": "63vKTPW8UWcq4iPUjCUXZMdUJQnPZsYAQJjjSuXQtjALhghcW4Dkh3fvhPBDw9pgPC3wLi5wcHJ12K5ddsCyB6n2",
  "key8": "2vkRRXbAVpEXDawds1dmfbd6ADpDe7TgDdY1ny3wBV9DnjpdCwv5SxTdhsC35NGqj7epsej5vpRZVUPLXnioioHk",
  "key9": "58DXxPzFMUKjuxh4NSEAYmYexTNbyRA3FnQvhXRVK681UcueSfvyuHuGJoCqB4A7wGuCj84iScLJtP8imwmXwbux",
  "key10": "4FaewBUehVfMZJMXhqSaw2iqTB72BkHTfMwStHjNgCJmoLGQuBM7jSxXUcnzHSrsngYW1kxRrbb17t4hwTuiyxPL",
  "key11": "3t3tWDBJ3pj8qMm4f7HZsm9UJC5ihuhMt3psciejNj8kuvBcEtBjn1n3UXCY7BLuJR7Z2Qh3FmpAY5A3Vb7f9K2r",
  "key12": "669YQHnHmfWhNVFTy2QLGAB6siZgKM5s1cFHKfmpAbrXw4a1YArKiyAy6nwzJYdnUirrdfqBSUQPXSLUcriRFQux",
  "key13": "6rqP76XgqHvnPkB8mcCy2yCNDLhDDN5nZg8DND7VYNkD9ogpPQJanBoD4Ap2b2FGNVpTM8fMSJC1mkg971KevMv",
  "key14": "4iS2qb13ozSLCMnWa4L9A7F6Sks5bDSFtvZ2AMr2K99R1AWNrNscwr7ah3c86jcXsk8eaeGQFe5hyU9Zd4YBWFGG",
  "key15": "36ZF8N7A7tQh3Fi6PeDQvHhVSsMLRN4A8oZvaf5UWMmk4BgNzmaDgJHPXBU8v8TQfcQzrMi9mKLq9aGb1NihUWv2",
  "key16": "3H5AExQzSgfcfp3nBai61GCi1Yu8aTC6mNmjNTuyPiv81rLAkNCFLGpQYgbLUfSbmnU2d8eiyv4KU3BRDVpm3e8c",
  "key17": "59PnFXt3qBBWmJyBvA8vETBMN7PVE6a7ebtMCBVR1SPTaGfRMX4rxus1tdy3QLe91R5QxUBcgFdhjrMnT9XJ8uNn",
  "key18": "PFXQVrcJc7i5FeVmL7hY84cnNWDsQNcacAENW67drPGGmDtRuyd6wsZyWvSDRugXUMkhMNdSxS1edoPGQuiZNmL",
  "key19": "4TMJYUMzBNb5hwZRvJBaaQ85r1znma4R2ZFGpzdR3K6RErt8KU8H4Ftgc2UeRghMWrFakfYdA7nbraHZUm39nwqK",
  "key20": "3bmXiu3zgriQMGYP6pxmGnqND3V16kc3xd7kvm6kCjrNF94849MYwDXQZarFQgSPcv12hhk47svdkH1UJuE81qnA",
  "key21": "5kiBsnG252TnFqX3NBw8Fh97Ucv2qtusgZC4WXSiK5VANJGHko2P6AU29wj9otzNkRm17Zp1C6nmCDHGREhahodd",
  "key22": "5fc7uziMtBoUfoSKK8t1whDGbm4E16T4vBnxFQKXZbBwXG3x8K6VkQf4e85FYRqiAY4jfQFrcAH8uVgKJxEVE9v9",
  "key23": "shHQgRVepsB4K4zcVWr3MMejDrau2XL5sf9J2j94yLeNP7BLMkHutpo7NpH1UEqHMW2AzkYYkBsNioKGuDrkkBw",
  "key24": "4VCP6ZeF7uAST6oF44sF6s98zzXhxDoewu3g1R8a2b1ooKxtEzxfekavVBuFqAWvSFHCQoUxgaDjP7gVxJTLb5Qz",
  "key25": "2dkQ8EU2fyDK1CRk7u2Es5sSGtEpyBFM2Z4aHDsi4iJ9gkXy3si9GDPoFtCvp6YaJ1h15FLk44cajTyrqxucCgLq",
  "key26": "27djF6iV1TVah9QUp5gKaV3hUWdZYJPVeUBxMJ7PdzzRRfJEpNaQfXinCYsHdicHbfScqK3fAKeyHhsj7cwotMSp",
  "key27": "2B35Zza3VD1p1tfoUBHi3g1MpuCB6gEsAWoxmvnsU8GC329Q9YUpHqfud4WZbv7ddr5LGaJNjNpSxk4SPwEU1tRg"
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
