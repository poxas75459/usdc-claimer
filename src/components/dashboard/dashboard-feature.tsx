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
    "h3QfQRhPiQWTWWq1y972WeMMp8oeJw6PJsp1U9r8nZJNKPmpJrMYbCnj8RMzQfAvjp9RA6PmCMFyuDywSj3PL4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z8i6waCmQXvNJPprj2GcgZuwJnNiS38xg6WTu6fYN9cgBMmjgjJTmXNLuDfPVFJM3zGqkHmaZDNfc4WkdFoBkgw",
  "key1": "5bjoLivNHZSgGHp2JrM4fpRLDPWAHc5p8oWbNyjQELqgoU79yB51Z17zS6PKQPgVZrZEK5dgy1e1TFh3Abcpdtnu",
  "key2": "2cKwoStyWskyv5p3i81hjZmp1Xga4MQye6gfZU5ubr8EqzFFGD7sdWZvuEfR53qPFXGqfHQSg13PXxRoJuA8Funf",
  "key3": "16y4caEceeT8LP3HKdv9myu54m6hXn8NTekSAUATKZrWxxFMrvJkY4NJoPCQ8AzCp7ZDuWnz9iNZ26fYmH3YZZ4",
  "key4": "5TV4vYt9wfNC5tNY1wcdS7Mjzoawm3j5RtutJ7M35P3ZXNj3fjDhVZAYUveEJMMxfovjR9h7MrMAe7fjV1HSKDVf",
  "key5": "2k8gzqy3LmTjHYrA3tzKKdZ6f8KuARe6Jk28kqT2BP5cX3mskisjyh79UsWdWhgmn7QEGyJY26QfheZddqtwKN1x",
  "key6": "2jWzxLtY5yd3fFuEWarQovkeUAqTDVotYHWocmKrY4JJyNnRUxsLKxGaDDXkNMgvHfFxVHJUZXAAHUTKfp5zvVyU",
  "key7": "2Vhm2AB3zRWs9GL1LFLDNTpfYzcDXiWkhPUPoa3thoiVPP9iszWQHpDGYet3pfUUXufgfRLkBfBAVJ77EgkKuZnh",
  "key8": "2ViV6nX3gMUrARaf6uKDWCAVKebhF7gjVbkx12aZkigQNpcgrxaAqB4yFFiPfDWauBx4j92AXAzEhRSkcdkxQEEk",
  "key9": "3unBToPrc73myHUoj1vGqRxyjiEfzmxi6z6pJ9PEXhaBFEd8LuouwrDkwVPJv5ggKZHpgoD5otWYtajrtxTdtyYF",
  "key10": "4FYGqx5CSgtGCjFwR6uNcFxi6oEYQFrQoLwWexb9UMXa2uJRWX9TsKRhGKEDuvKfs3dbbJb2fAwzcCRajBBpEWSW",
  "key11": "2y3hPfB7W1PAEmaLdsjAiVF3YFuCrhzEmbXmyR9Y6mrvj44r9gmnszJK4biK6U9eukJurUGWbsDLRpBckp7dDWH9",
  "key12": "2WCYp4ZKnhRmCcTN67Gcs3dKsyS5oJ5MXVUSiQ5FUtRoaiZokd7P2ZvbGxTxuDWEcbuB3PWn8orEzzgJ9NcL6boc",
  "key13": "5TvDh4swWyDXxXGXCrVGrNiMH4NGPyEsV4kyhcXq5yXhJ62UJ4zx5gXMD3rkygUzYjoWtUrS99ArYhCKJKyp9Sha",
  "key14": "2AZprXJBcqvbcsx12gZ3WCD12LeaK1FJMv1QLX4DuwK9JJ9VUnMBwH4vVcFWzYok4y1XkwyDHG8o1ekard2zDJzM",
  "key15": "4kgkEKyfTMBU1Dd1RKpasDQiQL12CBUNYBVFtgVyHcotFLYfTkUhtMyCmLFDCJPf8YwXV1HS9qZcvCAFnNzDzV6z",
  "key16": "3b9TP4YLQAtXn2Pfku4EkZZpR9xHh1nFULChUZaYGUeupzUaE84QUKqMdeC5FHhnsiUKDN64JYrF9N4KTDfmA4N9",
  "key17": "4V3byvSrnZTFUzSfrPsDeHu5MUyRVZDnZ2qNSRrjjCtwAHa8hBMWDmSmZwm1yUSS6Vio7CVjdLzkBqA75Qbg58JY",
  "key18": "43Fgnh6p21mbpZheRJ12kJMmn8mLRpBhx6CvaQhRPpKy3dn5wUmxnNsoXGJzodg6KkJpnpoYehNsxyaZ8KcrEXNy",
  "key19": "4hNgZWfAg68v8CyAhM2pmjudtSmbP7S47oKishSHxAo5LHPuA3A4QYajnPSJmYqSioFWup23pzQzoALUGBdvGDX4",
  "key20": "2z29XQfR27JjNpAQEqbojTqFw28dhXMkh4mnCykAMCD34pzsNYhPxZ24tGHvB5Vkgk26kBygwTJZ1UURqyUB5DFH",
  "key21": "58MpD2BwQTtbJQuBe9bSU1ws1wwQPsvU8mX7pLTywC97Fw7ZBZQzRu5vrEhALhWNCRhHYke7oQKdE8pPba6YDL8a",
  "key22": "5H4UozoYH9fk9mEnPE2PFc822QWDhMm9x741tACfbci5UJxFgimJ8C6pdfRLRMsPey54ndiAZnRf2MwjPGqYQ16o",
  "key23": "3dsfEJxYkKXby9n7xbeHRifpjkszcfufi15jcQkEMn47atEJDEq8rMZmaC9QFnrZXeyTe5B65Sgypnq3jN92PNaK",
  "key24": "JSr2PF9gHuxNjxAU1uREfcSNdTUfoNGkuXLwZEm7EV3MLC9xASJZn4AqjQui9LUXEEi7xvF8e8ZEUHYnruLEybj",
  "key25": "3XP2udM8MV7hQone9nbjJ6JyGc4yrrPCRLvHLq9bs5YfKxS4xEm39AQXnz9Em29RPPMC88MGyushJnzcStoZUMfk",
  "key26": "5po8azEYRYfNyTxDUai5xtvdvAQFGxMktbJUvrqtCzueZHwfvJxtpTcj1dUhi5GqugYPaTRsns3fBW9nptbJLXCL",
  "key27": "5n7jZVN4iDaVf8mNjCrFDBa63vXtt3qLBVMGxwtymWEZwBRLjfJmvBEHGV3YhjP96TMmtza8va3HfWF63MURv9H6",
  "key28": "2PcZvgxxuUHAkx9zuUU7VYq35iiUJRVWzK4j4Vfq32KUoY9gqrMapJyd7GYMCB71uvhtHrWEA56UuCSReZy8fUGo",
  "key29": "3C1onW97KQi8bXeLroQCkrisGnJh1Y4J1tvxRedb41aBQ1Xd3of5Nj3vZptZRSFYJSMFtJU3ce3x73G9Pspschhq",
  "key30": "5AkWN3x3qNtrUDZUkxfmHfgtP6MGnEHdTKsgUr8T5g8irUh4Y5nu7CXTpo5ydBxwLmrBxR8TQ89nLR2YaY169KgE",
  "key31": "4dubnJcR6pXzszH5PDt19Z7HEEHwoQ5X46V9LaoKhX4bjRAkfioAp5N1H2vG44PMh67oZApybLWQPrBvae82UXZP",
  "key32": "5M9emwkxHytkpYdyGzrqUAEiMxcSLELqGzscAu7u6d577HnEa9y7opzAUbbqpiTPNM8zX6o6JnYDXs9HuXqAKdUK",
  "key33": "48oWoePkok5putATdwsFpULa5FmYqf9dhtCtgLWha9j1zvWddFMs9gz5neFU33oPQAr7yksqZKY4z2a35LvZiMhj",
  "key34": "4AUrF4VFJ4cWzLXUCcUsXRDkxjoaV5q4gijgaxotBuAXeK8uzVh7bKnEADnN5yZQUhUVQCsF5i3cb92Mw3L2re7q",
  "key35": "BQVWqfqTVbZnyKiwingMQUJFjVymkX5MjnaZBV9JBL3dAWdvUrGhE32xjkLA9toRYQCqgnVE7EwJqWVTMKtBCz8",
  "key36": "5rvzYSUJRkG5CRHQ7q1spnsKg4m1EYM88sG7VF5nMHKqFSxpYbxEdswkj9MQsTzS1GoTBAXyBDpDQ7SmVJjxJwrr",
  "key37": "5YxrV291h1jWPzkf2WUzH3e5FgFgjRkB1CjjMRmjDAiajekS2pJf2Eu9rqKwC8d28QUE3rvGGVhGGuz4mgc79PkP",
  "key38": "5k8brB9D2zSWGwpxorhb8WAsx4KV5UoDabAeiquHMdDLVrKoe9CnJrhtGH9hBYzD7uUGubpzRonYnubCBbBoKW1Z",
  "key39": "5EQiXivQf926WT4uvDhFHB3PtEcyXnACiwZYHteiPvJtKD53i4qwGJCPixZEPfBJUpWCsJVGhfpXJWm6u8aWxuAq",
  "key40": "3kz8viKB8LcJPdzuYuFeaJJQiF8nx9W8uPnwnA4R3E1vMBX7bDVjwAkd2mPSuDzixUAJKzEt1G842qchg6eV3jGk",
  "key41": "5BqSmjAEjxpwbFNQieaBV4dVYsAQrk2toncQMC28c7ZPVVpE7wybeEHdRQbFUGu7CToPKQbmQ36My6qBo192T5n3",
  "key42": "3Ef87bJP3wdXk7dc3s8jj9gCu4AQRb3V4tTYpfh8rJ2ua52YWNHrYrgJMkVRXGzhEsLB3ZwnT2HgirCAYAS9hxc2",
  "key43": "2pWqncKdMw5MLBNHRzSVhGcdSksHgwP2SxnCnSBJDMZezqXMQtrv9Rybz9AGhD4mszhXc1Bpot8ojWBF74Qiiu4T",
  "key44": "4oUd2Tk4cKDheBG5aAAzQq4LrjKSUTCS66pq45H1DUn3JqeQ9oxRqnBD8JBiMEnhxWousjvwRf9sT7yBemFSjHhB",
  "key45": "3WcQk1GBs7RxYumvirfgivNZyjYUY1JtJAPoF5HGZKo7Z8UngU6VTawQDYKfCKFx2xDgNmJ41fG4daBXw3DJ4rfW",
  "key46": "24AR8Jb2CwYU7Kn5gGRhdERYjAkzX9ttZHjiP7i5RUBUMvLRde6kZZ9BoxgbZnsB5w98S4BDUz1H8iWHnNKmy8qz"
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
