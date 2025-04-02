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
    "3HpzbSXL6bS24zxXrFLoqEW4aK2PgwKWnaDN3M99Ph3dZUhARMAAqu4Z5N4e89SfFdwyrBMxVPtHuw7knn8RF6cx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zkv5gxcaKgJxZdig9jA7KJXZ4TeMqFTVe5gZrat9nYs4mtxRRR95TeitKBmfyPcmvZkKxP62Lmy6P2UeaGwv9YD",
  "key1": "4QKC3isGCArJzUVLQhh51u8osdoR2GjjCZPQ2or3vQ2HbvujE57G7vwPgrd41PoXwGt1h3wGvtFifFK1gdQfYmvk",
  "key2": "2MWkhbjzWWiontmvpQ9xjnYgyC7fhARUzPjvKrMxGoXRdKcq2rGiVDFpctj1NBJg9NVAth3AF8Wy41V5KfXggJrN",
  "key3": "3KJS6o5otrC2JGSaqXJkpamep74nEbNTjBMGHazq2m1miJxBJkhhzBTCo1haE767EDixyMjpV54Y6AJTkLZjxYhr",
  "key4": "5SLa3ughwCi647bT5GsRA4JdPQaNu1gLbP7VrwMRGTNpGZQ4nkFbx7NCJbBAPBwJs4MK3ct885jKpmPJBx1FQoSv",
  "key5": "4kwKTC2gaNfmbq4askutAyo1vVSjDa42wGrPT8jVMoWahNFzo5DRnoT4wXcHvhbUThw2rUWDyu6yBeeQzccPHgRs",
  "key6": "49TYD1xjGG8eYCeYRtf8Hm5Ja56eNRzBNsPvXs2tR51j2BWsFYEEx47ThWJWcQBEMqwd5igL8bKMGuQ91pKfPbv7",
  "key7": "Ynx2AchsXjZEMX1Jx6PPw5vhzHashPAmcsu7UP2QxrM5qxoJ9tBVJPYr3SEnsN7kYgLpWucyYBSoHzoADmAyY8z",
  "key8": "5krEsvNJJCZ2LcEW8r1mE3k7AmaAScoVzXvjR2dP7nvuz1WNQ99TmXBUeMRyxsoNG2bMzh8x47qA7Hic5ufPY1h5",
  "key9": "kP5i2NVhPPzoprYUCagSMMfuqFqddhiUECpWAy61Jq6ns987K28cGd4gy2eHYe1wvbUreiufwCMHqcdKGQVGiwe",
  "key10": "2xoE3Gjx4L2rEKmtdfZYEPZ4FeQdRoNJhxPPwdmoKi7dgPzupWEs9dMuxdrYBvshiYeNdraGjQBghaQffnkz5zJd",
  "key11": "3v7J5a85bPHcLkj3BEtd4VGMQ7wdcYxx8RhXnRLqW2bU88K8jqZPNZH3GVxKn8q5zqHiCUMhdfUQth7KvemHXWee",
  "key12": "39sLuu3dkGQWxQho18mBGTdtvwpjW7215Y542YG48khSGKFndotc85TemWsQBV2pgUpEZU2ASPvy1uH28VCJgbWs",
  "key13": "4VVVSaobsfuWMbLbvy4BacAqy5w6Fm7xgK7veTcDrdBFYPUvC7pxYC9NxgE132WFCJ66VFK7uRSb1SpyxXEABt37",
  "key14": "2JE22AL6kHco7cY4DHjpiryMdifNf3YXhBT57oyg1jKZWMcEGEpVEWugqTobFt7DDRKuHTJ6NyLveRvu5F2sfcLF",
  "key15": "4t5CQhiYW4mDKJd5XqZFt8KqNaqRqSsF7CnWoTnFJU6ikantMy6qTUXgfsaBBQE9cJhDgB2NwkzDpETQ8zqXjNmW",
  "key16": "3qGfCRKi9ydX28voUrBHpVfYjrQyZaCSrZzTyv4sHy6Yp2aZ9xwfdafhQGyvQLtLGViXXdU84koWjCnoxV1UfQcp",
  "key17": "2FgCC4MWjf9CTgqGRikTAAKw3Dym4y9gWJeU5qtDwndkSW9rYsg71VGtYEGYX5LCYz4xUVYGDPinpeJy9XU4poKu",
  "key18": "3NMKhsyfnfVMuNoaZCgJQ6ds2augCxqqwDLWgf3SHp1znu5jesD23xD79iSVipMvoC8QPvpFx3crQD6md9EJFxj2",
  "key19": "5ujXw3t1DdSwzEr3E17gy7mEuZGrpihH2F9YtVCzdJmgLCScTDcifDq3Euahrkbs7X5XxrjrWVBc3VKhjjNEeGWY",
  "key20": "3jjJJpGVmiwwadvr6UJ2v3dy7ar4AgbWJegh1ttwaZ988RRHL2oTCyDfsp3B5t3vRG1vvhXRs8oxBTehcZ7V9AAg",
  "key21": "61fRQe7cjRi6VwZsmYmYmcipYa9m1w4rmRxjBAS1HSytMmYDVF9f8VbDu4bFTpcPjPmZtmLwLjzpbs2oBfzTkx79",
  "key22": "35KgWbDBqm6DUGvmJn3xJDbAALnqj7Dyu96VcGS9us5cVffhAMBrtaqvAgB1EYB3BYV35kGyx7hLJrffMySECf8E",
  "key23": "7Pb9FyxBmkRFoKpDqy91YbMwk8EJGemvjQDjKzHbsbPxYjqCaFt32ihW5CjiszJbY8Esx5CUrngPYNeLwXeErb4",
  "key24": "39bw8LpUzXqjeQ32ojvbbZCtH1hAktkoSgKNyGeeKbVDWo9bL6JYUvXehdvHBkPeexGcG8voEjdgDqDjGiKvxm1",
  "key25": "vU6HWZyWaUdtFnYo325AqUZWiMMxiQFUjzkSkLitVLKUz2ax22JKyVnggBf2SgMkKv7qYHDz1LbjjZSqpmKUQDz",
  "key26": "2fJSUaT7Gf3K1kgyKwTSsmBQkR6qfTnivBsSWZ5HY1nMCDgQ9KRXvQT5KLtxA9tMMZGKiC9xbRugmjt1T7gGjBmA",
  "key27": "4MYnnYr7cEHfqHjYZL8WdswAmPFKUBQMUAEhQsykkBHbdZgDV3cRrUzHEp8cyzNtALVAuYjZ6c8PSjW1eNiPpyM9",
  "key28": "5AHEBnjENugKEVbvFQSwRLxkamADD1SHo5DMjQLsrVBfm48JG3hpDLc7HFR7LyzjUQkXDgPcDBVW9tREwEDDGeMM",
  "key29": "3Z4frMjuSLKJ3Fx6VH71yNivtygo8bt6Tm3kiY9MH96H5oVgMSVqT8WzxGL69DDbpVWKehpKRJ21eqw3uCBEouT2",
  "key30": "dtmFUYEoyEFx6oXzrMWwiZe7dZMUxt4Hp7UdhCmMUE3h9qZP75WzouY5XuRP5hNB9M1TTwdiQ1mM5XsJUZWC5h6",
  "key31": "hWs91WNyDKVB6yaJhJFqpoNfpmo7KyA8LfYN8v5zWvpu42dTqacdfVsNZt5aaHoPbJFn2SdJyQWVqZtGvj5rDH9",
  "key32": "3Km5suGppoZwrQUG3FqNUBm19Kg8g7iBTZqrMmr6twy9wy4XbvRYCT76DnuqZbY5rYamectRwDPTPrStfKmAj4Pp",
  "key33": "4gKuCUXGxaA6yDLxfvFHE23GERWcnMwY61cSYJvGuZ6Lz1rKPgstJiAprSJtUUQbWwrwKPt1GDJJ1EZ5HgVaKRM3",
  "key34": "5JcXWv5BZdnhMETmpV563EMybBj6pX2jnVdapib6wS1ctJSgmo7SdFa3RCfq6zWqunfozGr64LZP9P3BVeCAhy67",
  "key35": "3gFKaNxZvkLfG232tQqbTPWiN4gKYi2Wr795D8MKTcWUvcWPwvoK5EWtxJtiw9jUj2XMtJygb26gGjcUnoSZjQEW",
  "key36": "4aFo26veUWzfQxatEsUNb3yFRapEs7BshTj2o9YpzfvitkHtGhKwtu5vyEHU982xU7KsLe6ZVgZ8Wn8fT9d9Yk6S",
  "key37": "2YFYGo1vrefMyeL3ZgyfTwx8AzMtNpN5XYidvNRVB7tC8m92AVVGhrY6FiNMtN8bJVF6GQxG9fUH1BEgWLxZsX1K",
  "key38": "4uw39BHYUssq678FfLHVtKDVXD5BMKpBHi2XnzUigrDNJeyWUKn5jMBkLd524xhwpFQ2w8SST1H73FDBo5LfARbA",
  "key39": "3MgBb58oBYP7stxjaqcxyHtP5ZvcxAJzs1MQMquE4kLGkuAyyHChq8YSps66eETSE8kETcNQK73GCcCqsWM8KtSv",
  "key40": "44ttMnyo5Au8vmkCSNYLwDCYvT8uNYG7D8TYQuMLzAkDA5C74AvFSpxFywoXvPSKw1ywCCdx7QHCnUdV4ensctfY",
  "key41": "2wSdsC7Tj1bCwxzgb3KzqiZ9fCzeR1gd8KtvXtZnfVLUuRsHFi8PwJiJ2FwVPB6a8MwdDD7L27aSRxCuMjEh9HSQ",
  "key42": "2kRJiLxukU7qwz16EzhToj3Ze5t6RMNWfBo1yJjTWw3yN2xsUd6C3deijxek5Y4wu1nDpPGhksNxfoe8XFqfTiUA",
  "key43": "3Ux68LThTUWBpMQAnYiePna5C91JqydtGcDEGnYk4SCAVpjXVKnaus8mWzoAT8HYaboKrEf4WqQPTXnrJf4jq4r",
  "key44": "2svK8su9PXd77BNygRwZsRzN4JoSn7GNiV4oZJ76FWYiit1MAvFXWyJ42CgWdbkRcMtB67N3khbV1xvWh9EKKPd4",
  "key45": "3J4Z4mBbywn7ESto6G7qJ6fuqRo8oHwn7ChNGRgBou8UYSh6jFjvSrnBgmKzogAnh3ex5YXWLgUL5jZQ3a8BB9KR"
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
