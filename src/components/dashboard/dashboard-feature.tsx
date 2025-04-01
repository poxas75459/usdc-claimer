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
    "95s4Uo8HW1wiFaN1ohqoYeRLsyYPJcHVAe8krCMw3hkNKKFMpoWmhczQYpHWZC3sWX8QbTxcKuGaosSdWx7D1e8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "614WFip2unnb3z2N7BGkqRKVLXVtHgSANpWyohfyodmjNDjRrrRgXB1T3C6XDE5kFPWfJH1zr7r7Zy33Nt87qsSF",
  "key1": "2eriSXdtaQ17C2zMaLAdJMwe9TYDziNgiT6Sjhi7tABTtFVamQUUz4FDNb8PxWHQUAGteAoL7336sbLGejS7hrdd",
  "key2": "2t66hDybfvrXSHft7heDKKc6FfADtPpbVEzDRcmmrkbh73dmMWuvzYcoE3Goeg3kGhX23UpEuxUcQLuMgnSyxxJf",
  "key3": "2Zot1dsWKsAv83axNzt99zNVZMtyZrShD36sCMNwXEgRBLFCAiiXBz9UfizXhtWHTmz2mkzZcVjae6Mab2vREVqt",
  "key4": "4T2iZcnpaYym5NA1psGCMpp7YqQmodnPHEz5DKktMfdQSLGxhozmpeeVksrujL6dWj7r6BVEWz1URkVjMnFWNqEc",
  "key5": "3vA97sug34jis4PLcQSGeKsDUmuJeCpzfriWnPyMFkUpToTSEB1cdvJgxaLTMJXvATmaJcC9aRqoLbM2oeLSXyqt",
  "key6": "xdAbVzveehLAoP415r9LhDzM4PmLBYkDUX1gDZbha8WSCNTjJ23ZxhSXd2zC4QhKJevk1UYbmfqvkcFTFtWDJE2",
  "key7": "4RAfjPdyeMLGzFuyHED3bTLmEjtuqj6MBJxZRJpSUmxPzz8sb2hndbnaoWXB8NCLGRHCiCLPXTZRLmiGG8hVLVds",
  "key8": "5MkHDxDDjooyyt51gR1gjQSZ8cJpaebkfWe9B5ipD5B58DDeFhoTKjMsu91pYpjgWhHvb3nM3KDdZAeRZN5WtsPx",
  "key9": "4Uwd5uKXUHXSHyyjFwozTGxxBLocQKpMeJnH8A4fnWvTPi7ThGw2KfSvjZNPoZcxMYgWkRJdt6rWVBhZ9eHgMjEA",
  "key10": "49McD8UF5p4TVwwkfT6RwtPq577XD78N2p3MhXoxrDAjban6gkVebqrUu4cafUNcE5u3xnPjjUYUghSuw1RUqmZL",
  "key11": "48dgomzjPUXRWmBrWjLvKU3M2fTYikYXPPt9zjaJcNmwtJ2sU1GAuejecJi186E9URyXnrSSqsDVebcrMQGS14zk",
  "key12": "Qy1XgXRdFa51m9mUjwtqp5FGRv35QHHFzfGXorzyQmqGNW7JQEC8BEpgKCKXuN7dcc5DKj8CT8DWjcTjj2eSrDV",
  "key13": "2VSSHfGwMgY9GbmtSHizWeNUENR1X3aoBtFQ3NdYLt2XDp8iShjApkoL5mdwArU9XdK2LmvWBfA1hHnxQ3tPHcrx",
  "key14": "41Lw5BHiBXPPyytrHxq4uFSHy5GxtyugTAEKwKQbRoHoZW8fJ3yvNAY2Qbvq6bvwGCkDS5u34Z84jtCXSUVrmAV3",
  "key15": "4uEDoERyUm96nvYLqZrPnDRprh7FM864gwZ3XXi17RwoMBLnrK5LYtjLqZ5hFsbsfGZkhvd4amL9ZuYfbVmoqXF3",
  "key16": "3gok9sy9T9k5nxP9LDBKmrsrZiJE9iNT2EoB7rcQybnArwvA6CpZMnCkrWTiXQbf2DUkwfU1D7Jqbi7x6umrcfMu",
  "key17": "49yfhL66p2anorrhjaNLYPZBTKRyLX13Wa7Q5SEkxEswRyiNK2M2EdHRZiuKBMY5bgBJFVLTBPQQByVzK38T2EuH",
  "key18": "UGZwptukm3TXmXD9WQyK62owuUstfqRQxVKL8iF89KqQFbDgbNVA9qkYVbKakhXDDLT6DTrpQ4x6zN79KGizxsu",
  "key19": "5256T56KazyVL5r3aJDo4Kwy7auqjNu5oNZgExAo7ukXeHT7ey2GdNMLGkn4JGooqWHQyDrKmzYfSFQJxviBayPF",
  "key20": "4NXR2CBCekggXMBh65pz4G6vjE2WFuEL3uGdE3nPRUjsNBF1qwf8tbab14RoCneWVMfUcuV1Wo1W9v1VBLwT2HtS",
  "key21": "5UdCP8XxiZdwoGVwEiasA8fT168FgBSxGHVCE4GY87HsWUMWD45orJfxome7cWPE3dS7RaUbetnCSK75EKpeg5p8",
  "key22": "62ynLuApgyrFHScqXhRRKvGfrtA3sr7ZUX1PdNp3p1dbbdAYQcaurAYtNY6bCUod5NzcmWxvPxRJibK1MpjAEEZD",
  "key23": "3urtwFGTtfkkTtYAGB7xWMSpzDDUtbvC9FHbJq5rnHit9pQ1xcLJTVr4Fo42fcMemfXq1eVCwHNKjskAskQinJau",
  "key24": "Bsg8BFg3f5oEdr6qNzYroxQ8DArfX7h4AprXx4xu9657uEr4XH9MYTwVQZK9BJnJfp8ufKse3XjMYHrNgNTjvsJ",
  "key25": "57hEgjmyMrcigbBCY8JE5zgvWyViPhiB5g4mT5kCNAo2rRzb4BVhEWFmAX6wRzWSAnUSWrcqj31DYzCa66GRhADn",
  "key26": "4yYCD8tnF3pWiKkyTcvPwipQGQB44e3UAG8AzCLat5tuU9DxoXcYpQqiCWrG4BYiUYLsfkd5xtXsAAfmGKhPftG1",
  "key27": "48BrXq24tjgrm9owJ9f5pwE6PbY3WmVY66pLNoPkwrZf9kt4sEpE8RfiLB7DsMByBy6YupjPfTygVWuBj9a6doLN",
  "key28": "4oP5gXNxDa5auv2y9bR7wHNdd6dBj8ZNF3VxyEuxsS8BXtUdbVz3LzGVdjEvu13tQ7ktEQHHKq2ZViMsyYoHv69S",
  "key29": "AXbp9QcoXBYKETzr4AGY7aTKKMb7FvZx2DTryxdYfUK2Anbk7yFRgibojHzBaQ28vGAnfiZ3BSEbQ8wijZCkjnf",
  "key30": "3DSbgv9K5vK37ZRabNMWj1UrjHGzs9aU4MhLEiCijuwWxJdiN1aCuuaAfLqaQ8Yz7sJp46hS14bjfyh814qZYxGu",
  "key31": "5UNrnhfu1qxmbxkACLtuPvb6uDgohA1oLWK2ci5eCiHpDfZ3CTA8FkihaM5RvfV7GKYcxv6jYnqFHJrEae9R8ZNF",
  "key32": "2SJo2PyKDgAG2m4vd6xh4UCt7Nt3RFdRE8udegJu6EJcE3mNcTY42YhuuR5j2PTYN8wEUc6kcut4CMYiXDPRnK1c",
  "key33": "4Yr31wAA9k5Fgi6wqPZLpXaLYUogNag6dXSGgtMhpoxjq3bkGYjzeVdro78z9mxN3uuqvYccRNPXLBgNx1JZuaQB",
  "key34": "KZ169d2iEoYQYvpk1YBG7SGdZvWXF4XvQHugU38oE7Roi6icFZRQJqnSH6QvafqgyzzHCGre8EJpwtq1QsMF7mF",
  "key35": "4affJBZdtwLCFwyryc6s2Pkhwz7TpqgAedNcCSsC5vP4FQCUSQ99VL91u3bcKtei7eiZgnJCQpjyQ5axZTf1CcxR",
  "key36": "2Z6YQYEn6QTGKizesZpacMN55zSQnUqQvdUQ1Kn1hZ9RfzRaMGj2y97FFh3tH7CALqLDrk5u5be34vLoXD8qRZxY",
  "key37": "EQoeHker4bRRY8SBkaEC8TdBebXoePU7vvXYC79PazNX7fkdevQGK6SAm8HyHB2Cq8w9SQdFomzQpzKp2Wd9sMD",
  "key38": "5dN74JTLph596XzFVbAdJf2f2C4QMWL7nmbCtXM9uh98JkEbBh9QPQh4K3WNnTF475gWi6tpVT9xvcvR7faJ6Txd",
  "key39": "4HbPDr4fHejBTMXyXEeTe4PT83gn7c5Zku8JgzXUmewdU43bqq9i2QmHNhxTjGaUUcGNjvXgA6vHbhPRigjbinFz",
  "key40": "2KATzGAqt5tptGF5B61Aa5cxPHA953ZoH82nEMnXciatLTJd39Kqvbx2RvaFKquQpRh6payLDwTdgMaZ8HRbqpC6",
  "key41": "2vrymsHByP3XWzicWKzSn3qyab8Nrkup5GjU5hscp8FoN7U2k51waBuB1oAqmttRcaVdAmMYV8MF5vhhfp7LPiB9",
  "key42": "5MRDXkqPfqLJex7DLza8xDdNNVP716yD5V3xshjh2wWFvgFff2kLrUUpoUNkbe6uFkumzcu78tRwyFfaG5wahu1h",
  "key43": "4Wz1JMmsf1K6yDiUQQvyJ1NSUrutKJ627sapySwt125g1wzWicqAK6a8Cagfcr7DHFPZrA88zCdpU4Y9VdVx6ELL",
  "key44": "5Qfu8heC6pknhrmeXzY8upgoU3tMA7PJkAo8jkcW2FhCAFoRbdejqMo6d7uLstzMVBFkr6umpEfw8X2kR6GdLMkM",
  "key45": "hTKt9GCwtisduAyuuRHafpnu8Qskq9jUU1kS7vEZUhTaauvbPwgwMWvfe28qQesNXgZ2UeYX9wwJutD7fc2RE21",
  "key46": "5pPqAc3zsaqdHnQ5fpZxFzZjDFobx8VDYpBsiZ9vG6FjS2eoMuDmVYKoYSnxLJtb6sAR2eVrFxzFkcsfMkdNXc3L",
  "key47": "4ThgYQxvwKvBkRbLmQUH2hFgUqMgeD2ukXk4nRYE6ktnWB3us1nnGf7NytrrvgpT4JbD7vB1nMRAuf5h7mN1Uroy",
  "key48": "4Uyj3fWXKm99Uegcf9QRaSS1n6uL3ezxo2mPx3QGV5v9c7NHyGL8EVdVZFpNhSpp88vcs2TR512NGKDaNh2koheN",
  "key49": "3o6juLbg8qdtX6QCDHgYh9Q1755gR8NLaYEixcrUNVbVv5Sc789Kcnk5QJ48xDntQWW8eS8M7KZ31zp5yUkic8gD"
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
