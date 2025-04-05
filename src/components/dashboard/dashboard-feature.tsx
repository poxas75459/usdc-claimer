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
    "5r3jwfn4dPZXUoKfFpKgyMC4EKammSuMXZZDijERy14nXjEEPtnZYw9FtgaHQpznznkpgPL6heXxKCEGf573sBfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66DtDQNqk4yvcAUN4xodbVrRbu41T5hPYW7ZWXZRDtEajEkdrNdn1DeyUhoB8gNREVSAuR2KzivbWWWiKSfuMZri",
  "key1": "25bYo4J1hnyzUrPpBPFCTAp2azNFr66AeQgsDvACu3oBufhgDdsgrRnuZyBhnLjHu2RMX3zWao7Yr4fnpyoTBvHT",
  "key2": "4597o2CWSBQBKE462vhqQH9ZGRBJceEetiY242GV4WS15ka7sAooa3FgY7KcuBLfp7ZttKzhDSwpn1jhKAi96VJw",
  "key3": "4cK96s1xXe81zY5aJ8UANejQTMTCESXSFYtfUTXQYUQRnXrQfT8rS1dj5dg81MvpCmVQtGBcxG3MryzGKKiH65hw",
  "key4": "51vU1Sm8DYSTD4sZUeKestdfLtqDNKLpz5VcicPVSmMQjAZAoUtrjaHPAhE6V7eT346NFgRwEU374dnpJsHaE8Ht",
  "key5": "3DE9o4UX9aqCHhUEjCYHRpK3c1mnUUvZ2x6md8fCS8jriJRGSNxCXJQA6KEwRdh9yjobQyQGBHYSdhrDx4fZJ9Gx",
  "key6": "3p6aHpJZ33KYgJKUKAJShtbSJgChyo5mpCyPah8VJZEa6qYLjdNJQk6ZfB6FrFi9yZcwmxGfys53QEjBMEHb8kMV",
  "key7": "3nEFVYSBdk4zn2nCXkYYv77NgqBaybc539MQGf3Lkmn2WWsmN7Tca9ryngNfLw1YZNpwnqXbed668BJzyDt8YD62",
  "key8": "2rdEZk2v5C5LZZK7Qgh9jHc6SLCpojeCxQJf1ccfo6He7Dcz6Ekkxk1z1EWKLWVGRAPQDwz8p92ejSvAst7rE8Bh",
  "key9": "63d5GMAfHi4ueqoQiX5vXDEEJjUqztVxzn2uYsSQn6NWYJcQ6wtFU2DpNmeFBtNsBpwCmACQyGHGiCn1oCVt1MaP",
  "key10": "5fSPEUf9PjAU46cufaPEUuJfY568CwKsYCqmfXXWbPoAKJKwK7dXDWRUv3aLNP59Pa5VK2jZc2ij5Rfy6vdj2VqF",
  "key11": "3VYttifY13BrRobymT5EDUA5R36wzmmzebxfwSsQ3VEsfhBQVh5zVqrBMxzZA8P1RCDP8jUs3qT5KXi7HZ6RaDg1",
  "key12": "2raCcp3r8ziKretedDq4yG7kXC2yQJnEGkJn31ZLfbrJGdBpQwowMci3xXZxUPR7uh6W2ZsLCt5CBbCBPQVvwYrK",
  "key13": "JytN7bZmBUdS1fyiAMFVVMFSzZhS5pNSGpF31nnD6tt4rPvqe1YUHy4ihSY3NLBjycnkBtWxrqdeaa9GQhDck4S",
  "key14": "HhRqAeXUBjnnLkre3CcTtZan66xyxyutkn52jnqnfqJNBrjv84x7jeVAHjZNQRV6iF42MQ6gigyRLqgNuYPpQqi",
  "key15": "5Atqn76Dt42a3bJUouP1dy6CpHUmKPXucgHtZLbJuyL1JCbvrvXn7ARiAQNEmNiKzL7YJyZsQ7Bju4sJ3Ahq68am",
  "key16": "5u4qQLhCWLewQXG1nBdyPQXjVQztf6F2uoiYwwEPHk8F9BfxXoWtQrn9WiKu8btDCcnA5ex9YF5jc8gKCe8MYkMv",
  "key17": "4job91L5NcTPJzr71EefzA6ydLbqHLJSjYGVsJr1d89KaXC1xwH8n9wMjNVKX8fbN2wJKABe6SkgwF9EVb3JC3AB",
  "key18": "4dqu7f5yfGbqzNDWikpi8rVACcTk9kZHXJQAwPLKkikoDWbjkyLTSRUjvcPpKQcY4JXUmL7TDFBdtkeQePURHkXR",
  "key19": "3UC7eLY5rB4vjJU71gXvXpHBJZyfguD4ziarszDTNGh83op68DP3gx4SX4TAfcZtPk8hfyP7rMmncDHth8hqUmYx",
  "key20": "FWHKn8wqEE9AgK7fqEJVEf8iKQbTtEmY2dghJSBTdM42RPwQDuvC9t1gkLJPhEWnFaoV7sxQPiCe43wQbewPxGe",
  "key21": "3zhmFaPtHUpAGpaP7zcNf4PwpVsLCC5f3ankSuEv3iP4q8rFshr5surTfkxu1B4MrfQ39jWUR3RXTFcP88nbFWEZ",
  "key22": "5RTuv3z6z2uh553BaPYzv4xXEBqnEBowg9TnER3Nn8hjQ7g57B5RiYBDxgHWhtVR8mBApCUEhrFE8m8evXEGYWhY",
  "key23": "66fGCxgx6MT2K9Tbb7bYfNpTdiUKJR6y22UnUBwAobKXbwsoUTm9NmsDUA7RR1kpwgRaA2ts7EKkJQ4ddbd6c85v",
  "key24": "uvJZwUYc8FiKKby4hwXoSe3f9UCCqRu74GcpMwQMVTJBtL2EzY5noq8w2H2Yp3SWpP54s9mZasjTYhECf1zFb4x",
  "key25": "46g9p6beSjBdMD6n8vtPMVxMtSD4EtQGqw9TdzgzgEJgZH4dc77CZFNKXucgkzmbBKnCrkdYD4AHMYgNKBPuTkmv",
  "key26": "4LxPxhKPLDR2zm2cCcVmN4PgMRqjwC8WwUwn9NpqY9YbABggL5xtnHMBfk7EubiKQP6zeGUgN632ubuNf5PqW4aS",
  "key27": "5cUpj2vwTnDy6ExnC6w7yWusYBN1ZAaSiiGKwsYhJyXdprmYAWLA4A5tPRxY7GZ48Y6hpumt43E2HjMHUGRKPAWj",
  "key28": "4DLJYpVddU7AUHwYvkQtLHwtUyz1qJ4qJJTy4HSaoJbr7iWNMbsoafAZszZZxt1JgJdJuoSWnShMwYGMtgMSQJ3o",
  "key29": "3JVkmr2nowUoXLhDh5Qone9isyyhbywPZ5hoPzdgdswF5CxdJmQRUBLNHkfBLHHMYgZ15Gwp9bhpzSUhNMUk9jgk",
  "key30": "5Ufne483LqTJ17KieU5wVCau6sUznYvZJazmNZchCBVF2V6vXVBvL2sUStAKm9GNjPnW7vWL68EFNo6sDKcERyXw",
  "key31": "39e3ArYJYN9U7E8d2u4WP6KgnUhnGW3pxbPoRVPKeSeoo2gx7V1qejLKqgcyonvg3eouFjznLtoQbXsW1VifTZST",
  "key32": "2vUxS76tE6RskSZeRwi7jY8taRNQsb7jAyuWWmnXxghMJqjopuigfEY2WGqxNKXUdqg7bTWA4UikUZ6imSoX8e8A",
  "key33": "2C3Em5LKNbFMxNTMttPyU9MJKqPiVy5hujmTc29RU45rJ7KBEpLUhZF26TDD9io9GgSZ94cB7JGLCgodaVFJ5qzd",
  "key34": "2mmu6t8GxiFYQUbSVZtrywJ5gaP8KB7UnF8JH8ofkknsXJRNuv18mkKWYiyvha9cNRo9X89xMtS23b8L3aaoxkTb",
  "key35": "NAp4g7KMkSJAB5gNTF3iWVj7aCh264r4jmHBdzeDWmrvn5nrMmmMVavwQco6quwLBdeV1KJs5u6XqdTrZQJtMMY",
  "key36": "5c2qKvFh2qUp8TKLFhzLWvW7wyK5Vr4aY31hmLz3HNN2xtBvYcLSPwK1kqyh6YDUBPSNLqMkbntsjnHGxr3zyy3u",
  "key37": "2wAnZfmYeYeyH6nr2pXKNDBFL7azE1M2kVSHJwjxQWfKkXy66zXMKsWAaCni7RzUX5VjwegoQrpuHjmGczC9Af8W",
  "key38": "2fGYd1XsYNnoPoJPscTQznGQpuyuNfUJQS4HmnwJfUT89m2gZSsRYXHhm4epdWQvFhGsEd84znpTTmVwsNa96QCd",
  "key39": "4oSNcAeFA3VNMy9JRevXzvwFfFcKLffeDr1T4JsCiJKG8cQn5oDSVXdGGYGTWzwsMFj1aF1j8RDES4w15hhfyint",
  "key40": "48MWCkV2TajvSP8JYzW3ZHEkUZg3nsE2MqshA4ETb3VfszZv7N5YVyqfD5BHCP7yF2Cnj9FyPFQ3fM5oM8BHizNf",
  "key41": "37AVndDVn3va8WUdQmZo7L5EgXcFtmUiGaimcf1zadHpKDo92Gbz3Lviu2CKzHDTWsRn9x7tc7yPAhm5JfnNHK6u",
  "key42": "2XJR2XFRQf5CwVohdKpCaWdMFDB9pNaPky4XC8jvGugRu6kCq5UkvQNL3ApUrA4edUiEML1nT2yUNi8hAGDHvybD",
  "key43": "46JBEhKcBtp5Wcdg47t3oYMn3Fc9FPZ4DZh2Xi33AYHwYa3GXeydTY8JuAeLjGXL9L23Rp6foM7c7oyxJ4hgHhrV",
  "key44": "fWRChagbKdHgx9W7iNTmwCXvrKScRH5Lmob1p9srJs5GxLiiVCw4Neop9xtBLdKusBPJZubsXLEVJaWbxqEBqQ8",
  "key45": "26YJpFF6PnW6y1BQXAXbNYAtLi381nC9veDrBeCnUaX1h2gGMXWKJJxY9dn16WegbZE84KvQ2Jc7BYirvKjjoJxs",
  "key46": "4Wt7647rwzvjbxDp9JT4y1wEv6sZEnbozSZ94gyHqWKYsb3SrrQDydKbpoNJ55JQwiQuQtihE3E3SJBcKz2EbSRP",
  "key47": "3CaL4pn9DJ5QmxLbcrwysTXEww69sqyArzHSYmzmHRMwyLQgkB15dNZR4VHqr1aHnVdC6r2XXwGxd1brXGX7M2Eg",
  "key48": "5b7xfy31AFXfAZ8q3KPUcpX6aXHMTatkdQGVeDChe3pDtrsnC8L4gk9MzC2SiFzCTk7kzbVPCiPjJhZtEKMFQYmo",
  "key49": "5S5VQL47hqHdGqN6grdvLxmhfJTr6gmqe5t7K9xRvZmWpQvh8zTbkYb25wrv2VTh7QoRrQax7AcD1Ge4bR1nAGNg"
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
