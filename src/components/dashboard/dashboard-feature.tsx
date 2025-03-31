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
    "nDDdT3n9Kv84T3uncexfSQ5bieQxumB2At3CF8M3SL5us1yQP3uyzWYzUNgbBFJmNV6QhcMDUZWiEXKfsieUaaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vnSHXtaajybmfFrnQ1mXYcc1NNeMxUCCuDw31ubKT4V5m8d4rNFvqH7LrRPwLKnD9TA6N3uKi1WD1ZXZJVWmLxg",
  "key1": "3HVWFZkJhcHHapo1k4qnCYmPpuSSVgVuoeHFAfrjhhbK36K9Q8w6R9rFRiCwu5tVTXtuk6tMNzGRncNx9n8X7oZK",
  "key2": "xDzsxitR9WCrdypobeXrUwMB2znvSbsfCmjXz55u1rMqVcb1Med4gHX8N8NKCDmA8Tbsvq8GLpQRmHdozJvEAaD",
  "key3": "gjnLy3BYina2VYJnRDED1etnb1MX28gnmp1RLTRPRwAQTJmXs9xkhRj5kzzhjVcqWbXLHGguajGrWUXkcopDC8T",
  "key4": "k9CgGPjCioeoc8AtWbCsX3UBiqvcHKGqztyc8ikVydX41F7HnR2tedbgM4SQN6HqgGWcaj39CmzhqpEZWQxvcMW",
  "key5": "3p4ExnyiV2MkeY5753rSRm5CFNGouamVyniQ4nXPSCJ2xMgfh1Ny1vKhZc1A4NFrzkWeDYiBYrjBFwBQckZbPHdE",
  "key6": "5cwQotwHov2nw6fdpSrUsyA9dSr1xstVNYyC1NES9fEv1sb2aFDnqgtwBNkFmMA1JWggoAhVFX5fYyouxfdafADC",
  "key7": "2c65CGXkkiNM5vHWmdatT5Mx9GnxR6UA2jF8P4hzgLKdij5UrerAXzMUWLngLVF7xfbfbrkx71WGV7Rx3Cwy42rd",
  "key8": "3vEH8oyHx5Pz8jyZCimYpfdXhnHYiscpX6NWqoEArmv9UycksKY5UVDJ4wo4z5muK3FvhgvngLjwUd8gMiuGjGjA",
  "key9": "126KNU1QMNMLn8vhb8TMsM6q3re7XmKXM8V8tFYdRo1G6uopSUJJ8A88hHHtgwrobnC2uPTEHc1JWtbKoM1MGmvD",
  "key10": "3Snr1csZgsL2uRwRFsbGMjeW7k8ng9QEiRy1nyF1AeTmVTkRr59L3o26CqEdH7sak7vxrEc7SAzZRcEvu7GpE6qQ",
  "key11": "3kZWBSxVoFftfHY7XZodsTuyHf2KFy1F1dLytArKs1nAagpi26VK3RDnmocSaGt4quWNtb5S2h45D2zCeeDo4eTe",
  "key12": "EqPqePoXX7PqRrgrCQRU495JxXU9SbueXyCdPvaCaUCNYb6KJ5Q8FrkKdSrieHGEbSxh9Y56ren2X9BXbum9rbE",
  "key13": "a8YvzGVX3FPgP7pb8fGphD7XekPQAuLgt5vdkp1WiN9QKb5NL3aXC3KUwgo5ZzBDKVhtXnHrt6mZTu82cXoVkCg",
  "key14": "4GYoSfenimKeWeKUacnuZVyJKakxJYBDbqZY2zJnF8Y5Z855cGHWxd3SACJopcSCDkYagcXt6nRoM3RoiyquDakS",
  "key15": "754EfG5Ht7VRaaoXCanJJKPb54ZfdVW37nqky6hNxUZYyQwMcGQ2jWDuX8Max6ii95D8mHtEnVupiV1YxZyxgaV",
  "key16": "2qn3TA3ubD38FYYc85AzJB9UENQHkCKV2t1AQnVmmu8ZF2zuerBbmWefVtVfcsprGxezoCXnizk4wCLcQAvwVThY",
  "key17": "4RoAYxDCK5tQajmA35LJGCJXQhNwAWC9NQS7rzRFjo1sgteLgCk8yZr8KbaKupJ5u9yaxCG34prohW6ZVhWxBjz7",
  "key18": "5nmEP3gz4XFxRZf5CxBvcHvr8ACcpuGjHXh6Y7hj21qSovys85qup8vwAeCUUT9xEUTj1y7b83kie4f8X8gY9Zed",
  "key19": "4S1QhxH94F5PfMM9mkHzsC1ZuYeBCGGPqh1oVz4KVHdQiSjbUvqg1whop59WVexBtUgwkyqyRBDNsNbkHKuniNRg",
  "key20": "5UrutfdB5vWJ9GnGJhucT6DJbNdHnr4bAyUfriLDoq5BQTDjGBJGUJFasyFe8hjoAo1kGtQqtGDNwSzqoCyvhdkg",
  "key21": "4BYQhVM9p7gYLBX1EHkupZegJyibHaNRPPCoN5Kgsc6kKh1KZFVaXp8beHizRx7VTf1rKwBmQvv4pxJyjPBye8KF",
  "key22": "5LQtBzoUmVntxAjU33EgkbzHBB93VScpCF8HV25CoukxNkEWs24RkRbQG82twZmjXMcN9igrjbDuHXVChq8T6WL3",
  "key23": "2XL1XmqY8mRHHNjhHApn96VywKqZZq1k72MUeko6zDdynCmmBDozaRgEzmoJXcdwVSkWiPUNbjfaQ7iB6B3UP6YD",
  "key24": "kg8VLPZv88a8itrbpLGevQWZbYb27U5eugyoGh8d7pTcw1TrJydH8LWF8sAtgv7EZrxqnC31uaVLcM1F3V3pXV9",
  "key25": "i1A6Z28WsyZmyuqEVq8zzuau2MHVsejoAeqnQeen1V9zdmNryy36JJD9hAdEXHKY74c63mys7V7PA18HkeQLg2e",
  "key26": "5EdZfinRYWQPHLuA7oWDtWTQHuM8E6GH8aBedc9niyQzFtt6DeX64FEb6g6CevHvAuQGKDWvFV9KBFjUGaYeEWRy",
  "key27": "PuqrWgLeYwsUdHxogJwDvMK9nBmDo8kwJEYpommWQ6rtjW5Xx57GVthXUfLHLUU8QtPY3FZZ9QJsyGA9ADAWGUz",
  "key28": "5wZqz4D31GABvHJm7zNnuLzzhqykH9YUwFf3Ad3C1Rs6J2GsuAYimUTFhPTWx6PKgrXSeKa5KiNHC54c1uvKu88U",
  "key29": "3kGyvvF8GSrP56pFe15drpEJUCV4QXt91hHdVecsMAPGBqTbokGd2xqcjmWFSCaxdh7CGjPq7FHiNLMiLN3efMHM",
  "key30": "5jhAK7pRiserXpbKEpbMqZDF7aeELhAZHVy3P4m53oyoHN6rKwUAvPRCu5q5f4QtWHY8tb59STznoEdvhEADEfpL",
  "key31": "tA5AJfEfLzdPGrbHZaKkJbzrqCRftnXokfp5fH1JhEHNgk87K5TuhvhgLy1tFLBVofzXTMdamXnQjx8eQyBPQxN",
  "key32": "5CFsphdRvF3mg8x1Tj9MHRRTzjYbQEz9AGzcdz1UUcT1uWeGUpLYCwe2nJpAZ4wM721R6z6KPrw5xtBLjx5iAkL9",
  "key33": "4GKuayUezknk5Zkj6pTPNCvFHg1bcbGmnsfAvagXUqeCUyuDMAf7jLfj2LxJV1sLtDzHqNYnLz9pB8yRH6mzjrKD",
  "key34": "2cNMS4Wsygh5LkPiE89iFbzEJ6j8Qv5x3JBzK8Vw93HnvHCj1MBhLsLSukCx3odi3VSe67ZMXm6xTnQ1gRFTtXiT",
  "key35": "4da2oycuQp9fyDhVHjbufP7C9KNys3KA1v3LJt4EQXg7qcRuxnfFJbitws43vanQUsBUmK4domNjpk2Q7z42ADyA",
  "key36": "4fTMBMk9SHryz2safoa7o6Tt274eoaD79U92ZNzmn566TnqJhjpUyg7HzL51K6bpQVEqJ8PCLeeZ8iTGPCyaQm7s",
  "key37": "38So4HpHD1USue7oKEfQMLVwsthyVLTeUscswD4BT7oaaEuuHniLCi1xwC1WTA8SUftobiuwohbYPu8XV35n6dNf",
  "key38": "2oYGTB7x1VJ6VKfXhUbMTMwbwr7YwZs3hbQfhrJgyCBaPadvZ1iDN2NsMhiKNB57Rh6PZVuC7KwuyFnaH8SerBCg"
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
