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
    "2AFj1NKW8s3SKUPXcnYFc2GtTTnS2ZwavUJf1M2tFDR1iACo9vq52ShUhs96Ao5Lco34DNuRxMWtiZaeykeVLwLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n5rSgkmt9GSGS4wsJ9ZMuydogEF2hMLUPWvm4ZmpGCRLxbQuqpYmbwzVFBT1dtDUjhru4HFM1uDTEfGoTxJ4Fa1",
  "key1": "3DXRQ5hTitgH8tZRftL7ZnSY1A2g4x1pNHUSniKBEFQtxKapQqADHHsDAjfapzL1psNE8YvU9a92wBLAeMG9BJhb",
  "key2": "3xGh75vuo5FjqJLUiNLPYYXb4BJsu3hGdsdtoNtDhuthyUW1NXLBQ4rzD5fpAKKAgc9KpQengyJvbjGqrpzu9NS6",
  "key3": "VyCck7DPP1qPNMPi2eJeiXSLwcJJKHUVrBdGfspuLGDg1bjHkaZeTZAFF6bNc3Sxu7tWcn9jXFVBvui1ZRir6zY",
  "key4": "U2rY5czKiQfEjxNH3VQ7oKeJGYAWfuv4MKE7oLUFGHTuHrp9kwqpADgAQJUZGtRqcpugkhUnUF7v1YYDUio4jKb",
  "key5": "4b9nQwVwXk1Wup6ZkrXGmxTmFHLMNcC41RXyrqop7og4dKw7MQJYwcDtuL9tZAKSYo1mGLEcnrE5d4EFJMqatudP",
  "key6": "3HpoZvXDxBwio6ygvtAHkGbhR7cGqdMGNZHDkuxZr6cUsh2g5reoy6g89qqnHdvSPEuo1xM8tRuQewkg8nsPSfyn",
  "key7": "2VQRoVcKATM3NfhgkELwp3xrzAAMMim3kZRZmyFqnV32UQAcFZPUhXeJmAdmLJVDVfSq9Bue24vjdhpw2LdMd8YV",
  "key8": "3wkGg1zgWYYLkwb4MP1qtBf51GMbNb6xiTg1dQfBsguY5CS22seonUVmmxpHfncDKYXSMjrAZhaqGTWxJECt6zok",
  "key9": "q5DNQQw7ZvFSakpDs6vkzVUBTNMhCPukRtnkPMdqhJLMHYa58AhYLaq2w6xivmbinkYrnqsT7pkkak2oEyfudcX",
  "key10": "yWLwu6pEHWr2EbyXUMD1jv8e2y7LKyzbphYQXdMFuLX66CKAY87XYeXidK8vKRdtUZm2xPHBLxviuBnWpMyxQca",
  "key11": "2yznBHaKzNrkewSVUWaXoCxXR3aEVrF1FYMERcj67EVEs2s6KDWRDJj4D3zsta2m71QjutcdFmvai4zHF3cpRrGm",
  "key12": "4qxwauZQ7bGjJvKTMcjGcbExNjEKr8i3ejhQnbw8gW2XAQLw8TyrJeuBD3EqULfxaVqJTQDawbZAZRERrraw6NBn",
  "key13": "3dvAqDP3g4KxkpbT2PS5zjzSEa6qyHNXjB4HWfqrKkVkMuQwGLWApnNTsRLbzmW9y4qM9LSBKCvvmuHn5fsc97NN",
  "key14": "22XLciYhhx6kq9LhESQ35oboiH9tSAEJb35eqah4N5Juy3i1kvcNDxbhKAByZBvRPg1zdiHu5TkjNyZSCGuBBkhR",
  "key15": "44oiD2u6RRaaGXaWE7KtFFrmoDi3kSQuDHgebP4omWtcnGf6kHd26yBigrjUhX6UPULi2iJMNGxh5jrPiN9h5NEo",
  "key16": "2JgdErvDZbd4LxXt8LBQ28SA1z3mjArUR65GSEjJ4CKQR5hgXhHdmNx6AE6GVp8W9iUMrv1Ua29KLkXspZDz24s4",
  "key17": "65cEJVUgqhgJUPZiktstQAaS5Y7NZ46F36swrpLJdKPUwv6SMbwy9hv5WS9uqME1U4kHxZn9WgLkbK1H1NakdTmF",
  "key18": "3PZmncoTtENKKkJqEC6HP1S3SDdeP2NkMmWaas4SNni5q4H4mz82mR5pXk82cuEkys6W8A5ntPuKQzrtqZqCdwhk",
  "key19": "4LXaYmGnr5JVQQ2XiaBxQ2N1KWNgMkT1b6cMTt18WYXDTEuYz1sWiiZutLspbGS5XkjaVbM1VUihE9m6Uv6E7w1d",
  "key20": "5F5B1ChUUSSyoAmUKrDdCRo2c4MAfKFHvk1j2Apijwe6znUdrft7625YySzDWTvRDZ1JC9Pjvot9BAVpYe4KK6xQ",
  "key21": "28AFwDoC88MAZwGnRaL4XsT9CikdLctF2E6uYqJQVpzEK6CqNjNSeFeuTjgogY4Lj1h84D7DTuUqaExxJCvwA3Yp",
  "key22": "2r4Tua3roCz8W4h8x9q1Wu1QERqKhWeEiN6qos8GTae3wBTRnWVZejXfpXuriJoT5VJrVNPc2vaCZzZ5KfYMVK79",
  "key23": "4EQtLu1U3dBnhJ4b6sAP74hjorzkukiJth6QUmxHGvHy7oQhecHDWJcNb31RVJmgGwCq6MA162JihsG6KHkQPaG1",
  "key24": "3zX7kwBjMgx2YGJXTX42DszR9iwbyEZYeBxakiuHgx7Pe14H94EQmGozYXc8XXmfmwyowjk8b4AXuzEzmy2YSXSG",
  "key25": "cdZt1fUgcam4puLYcGR6JMhRuXf9okkYHdcy551UKPi6mP88SkxDHofPYGqFmZwRZgdQBuEgG75r1SMHYekTnRg",
  "key26": "2vUYVHbD37jLkfpmAgyDkZ2ZoAtB9YbyFmq9vnoNMZNQTFLoCw6J7tarwUcw3BrN6SUvhstyHdeqEJMt1dkDp6wo",
  "key27": "5i3M13Ks7yuGcbJdGS6i8oaKn4y4oWPEcF31SGjMi3z1MP5A8tsevPgysuCBAAWCxf2iWocgNyriqcWgaK4YBQJC",
  "key28": "5kHUH7wv5nrRQfMySFiFD2zBx1fMU7U3bzqTQ8CGDLqRvH8zgHGEnUeJxGtpcjniVEUrbEzACAeAqPXf9P1t8tTK",
  "key29": "2xvdQB11JY69SVNWDnhKeUPuPBPoi9Ld6MVXuQ81xNCa36i2q5LCqdQgb6F75xcMtWjLGD91t91RqeWuukA7QQFP",
  "key30": "5VWVqTYCJo7E5bcFJXrvza48vNwaWt8c4fDoPqpaZAKkMTPubCmqJhumBdv8CTRXZyjHNGopP9yd4uLprWv8NBVr",
  "key31": "gTsXurmxjuh5pHY61bfyUVKmfLSyTVphMaedwPekRkEpzErXVuPtGq619jXdqFBj7CkktTgyNgo5T99fUidwZyX",
  "key32": "5XvggWLCtyWmk7KdKnGDc15UbvCT1v7ku4AaGuXN2dWpYWz5ru16pMyqf5eFr5S6TfTY6dhxz9cewijHCfHFajoK",
  "key33": "54qVymb6idTkLU891KusTRo3nJHyQgsALXASWXZYKjnaunbwVxtrtrpL839xBjR51DALsVWa6xMfcSvjKsqHn35h",
  "key34": "5hFZq8MoEQiu1aeimMTjA4firLAQn4wPQCexFbxFwacGV93TbuSrqMD1oeGT2jNBHjTLTX6oQpU1HPb2RAjzcxF8",
  "key35": "2Q5gwrRHLyRwppAAvppKVRwfBftAb33H7E89KyTy849ZUVKgnzY4KbFufTd453khtHqX72rrEh2Dwj3a874KaGud",
  "key36": "5kcbGKUz4zuoKtJSa1jwdVNokHSsdVkuvnzKDxnxeXuxLHBqAnB46VJpsbW95nUZFjLRzmEhdVFuayNzpBq6Eymj",
  "key37": "2tGVS5ro4RpTZmRzcwsB7WrHswnx7Gciuw1gJqaXZgYXYYYyXVUFaSZwDKqbKgBzYwTUGXqLGrQF5TvT2XQh8XZV",
  "key38": "eKXVEd3rUFgqjjGQS5LvThm8AfpY63KUqNCYX6FBtuXh14kDsYYVnFiEAgp6z67muSevtBzsFQuyct1vraJoecY",
  "key39": "2gjjGFbyPoEfM4otGt1PSJUbwnA7vwxBm2itDLBQPFF2zVpwJVWgzVxRYhN2UXfEeivQcqpw22kCPdgoaGeMDkQA",
  "key40": "2hmGNufRXA442QkpkSppZ8u2C6XhgoBQjzQqQb98M6YNKvLtp6RNUcyRDzHYKieMhpbJJeiKYVrPozrVJTT4kAoj",
  "key41": "GZkLhtbvWgyMhZLikhZyxkt81KxBWMCmaUQ9csHA84L43EtsZP8wZq97SJ5PqtzAQKaum8cp6EK4VChBWF6kHfC",
  "key42": "48Uug4F4iFfJyn9FkheY96Leqw2jmUnDXox1WxxhdYf9ReE1KC6YX69ss8WPWpmVwWewsVrdQVxgPtDdF3vWQPKk",
  "key43": "5gFZwnBkpsgc9Ua6GUPoQrPCssGX2AmjxZXKWYuqgFUk1YbA1Reu6ZJhqaDta8hf96EYa822uhgcxH42w8JtHryr",
  "key44": "wMNPJkPFb6e3KJjJigBfhUFSKYVZE2jsLrU7zQn3eixaZP8nBxUKtznqseVXYrgcgzNHnDtoVKTPypdQPwkYJ5N",
  "key45": "47ABTmvzrjAGeHUReiUCuVXxaW85RpPQyErHq6utxdeNdTXJkdWmQgaBWzNiaCcgca2rF6z2C3RRPERQ57XyVVDZ",
  "key46": "2m9gBViVSWafRXCTCmEdAzLHr6SBZsiojFcVY83HBuyGCEaPPQCRQ6E4fJV7u3vfS2LyGEQPZiH2VuSWcB7ed8UL",
  "key47": "3DjAFdK55ru7DTBjce2ociH2uj1DQUMDodRUAmU1dcA1vBXa6Kd1YxSDu316GaMbDXid4getLjXGLDafAX1VQm11",
  "key48": "2byHLEp5JAKhYTRxf2tE1buTerRpC3aPLXZxT8sBpLQUbQANyejkSTKZL2YQBJeRB9Dw5bdsP7dycc2RtwfWtASg",
  "key49": "YDvbi12J47nfXaNPQcWr4rzy1aaqZyJ4xsTZF9vTmQm3znWwwd4yZZPUPD4gkXqwmKpAVsRe9yDQ84ExnBa4Spm"
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
