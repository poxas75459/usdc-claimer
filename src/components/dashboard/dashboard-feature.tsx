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
    "DRPn4FSt8c34FjHqHuHHfuH73qprmTwtJARnBn4pZPT1u4jn3cRcNFjtMunY5DFs71o3PdhHK24J774rZEqPLTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hh8qQCoFseqJn6XCMsiY3WkDw8w4xcVCEzHc7zkX9bKU3VmQd2Y3Bu2ni718J7AJHhn8tc6fEceMf7yGB6mhCsC",
  "key1": "5ixJHipi5sG7uAh1cmxVnAnKatTJ1yuTGap2crsgKFYtkQdaUtCn2QDF53zSsUtJRDwbJWH521d35NADNLfQwFKw",
  "key2": "8SKnUetcD5LNAnRQLALRL3L4ELDuuZpanMGqULHmGe65xuPdRzpjmU8NC7nh2DVT1gnsW8oXsnSy37GiBKereNE",
  "key3": "4HvPQ7arxe67Pw4DJNBMvrs2qA1m8N7QD4gw7kHzKXdFuBRVbCKrum62yfBKrv8QRAMmgy8ZhQeKMgdn5Evzd1xS",
  "key4": "57SNhUThr1S1586xN5nQ5s6NqFuUbBNFB9GCxNGfX3xUkzpzqF81JaQ4HovV6XEiQFYQov7D59aNv41NqiZcxTTM",
  "key5": "FbNAN9amScxxVW35EQBanGkPRzUV4Xia1ofUVG5CfhwK9MuJAgDkKrS4nCc5Zz6E7HZMyUfwC2KZqn9tobcKbaX",
  "key6": "2E7CRtHvzQjcuMKHskpsrsgvWo4wYG33QgixdqFN6oVgqXUebTdVzCNXjYo6dsgoaU4R8LSzCoJzSt5ikRsrXkMK",
  "key7": "4GCv2BvTUdidDdmS6Nh6EGTV635kyTUP7ba5yC6R78qQh9WtWYuDMfNYe8wm6ryb3z3rqRfsFvwzvE3QatEN7oFp",
  "key8": "3rZvq4ypqFzCaPQfw9fwTbdr3RQeB2xBWPNvdX6Q7B8q1fc9qFwuarPKtu4Kfvje5WYbZtdNjMSqoLd47cuU4kjo",
  "key9": "32f6CzwLV94QVB6ZyGVYdc1ptsQMxq4jPzWL87DJGVKq3iiNfTtm99Us1NR8ZgbDCP6FTLmjKeJhAMSVirSJso7E",
  "key10": "4vAWaPJvnxZGN78BmpCYjaae7x3LGmzmr5eNaKTyU1GQPrSRKmfAbo7wiVBsughszPZzG3MB6VFhN7qDSCHaczkZ",
  "key11": "54LB2yCLHnMn4yEzqX6kDHRnokZJPaPQHm4VyMmCF8beaaVXuixqYd8bALey9dH2WyMWy3jWm1WWLyMCFMH5ur3W",
  "key12": "4uyaYUEEXVW2rFZcNtXQ9pJ62iNXaxewdsnRbv1Vg7oS7T3nrx7aju26RuVsQnX6RjhePLgmouEB1Kb9BtUPyPEq",
  "key13": "2LWQeHNF6i6LwJKmGue22hKQBpZ54SbRJHpCZsH7aCNnjBfN6wtaKqReLzgKajEYcE7fVF1M7e3nVeEHfxr1RsJo",
  "key14": "2eAxNpJDKfvc2E3S8d2xdiFDd4HoEvc4b87GofFLcx5TE4BsaJpWLhYXqSqAXv4fRJenzacbpHTcrDWcNKdoNNfC",
  "key15": "555uAS7hww3RWwxXKkxFhZNQXQQMn5gcm33ELghrmjwFSGV79Srm1DiZgvz3iM7KtDzBQxKKiYf2Ms4TbwoHTdoZ",
  "key16": "5qy9MPJYzRBkdz9FEUEHgGkpDD3PPcbjUFwRTLKcmME2NKckTWdq7UvQmGxZXyXkjrNwoJRde4NZWmzpn2fLRVG7",
  "key17": "2Y9y6bnBzy1t8oGqGbvHkgqanCUjfXSEW6E6RRL2cVYFYpfi1aBtn9DfCNo8YkzMGN8k4E3RV1LZ1HZQEpMJDeFe",
  "key18": "2zKcfXQ68L2NiLSzpuXQqcacPWu2BGVQm1Y4grFhfx2XopxuXK1cLersKX9QJvVgbvqTQih3nvmghncdxzk4hyk",
  "key19": "L5PXqaUwoiWDApE3VeS6SY8FVznDYrHBcJr6SbFgFs5JTtaUJJ4Q7MZ218qdmooJd3jYsKe5WPsHVoBLK8hA7qD",
  "key20": "73T4pqnPjEyCGzCHUvStZDyrrEw7Nh3BWgdwB51nF2imPaBpLoxKjJMCFBBGfDQbvpdso29foPMjbevLk8pmKgt",
  "key21": "3oY77gsxCxd8o8mnE1bWM7VQ5icfABpEQmndtgcAeSudc3NSfS2piXFyJzzdTC3r5hW8Y2Rqf8TgV8PzFnmCCsNq",
  "key22": "2GH8xwWNjt2QV4jkYHPKqztZHc2bret3Sn8L5gvorxW6TRBZFazK2RuVu8oojgcQzrnCrGZi7iTRfPQGptrScJNC",
  "key23": "57DAr9VjJVKSQEyNdei8dobcUxUTVJACwDmcTk2Vo1BqArQWrBiXg7gjneJyXXpP7KENopVgNEcAeeVLH8BYeUTg",
  "key24": "dqxbkux1p1tDd14w2ofH4ayG5e62UG9P9fpYxgTsop1UYNANCqsD3Wx9Uf7E1EBbh39dEoUpbgdzao6ZTLeiEYw",
  "key25": "5qpkkcxvcaE7v9Rm6q4PVdKRQMoK8XoT2ThxtkED4LSksTJdXqfU5W4ZkzkRjQNTacfPsM7bzyiUjMr6wTTCxQ2U",
  "key26": "58DHzNqVDUBhSR5WgvSbDbAbsdVkuYhodBP14GscVR6ydP6gzf5K139LixQMgceMjSFE6EzKjuTBxMXWwpBVkpNa",
  "key27": "5X87UZEfHKWx9LcPx4i3Rr4amnf5osRFaHvRQvut11UqnZ852Cnkpv86ADf4hBjnrFWLjV7CYci11C33KRpVRYmm",
  "key28": "2u4bSefEFKahUQkNSETGESanCBM3F4v6ectZXeykCptmQx9ELeQCspg9ZM8oSX4iJDMmWXWvAcggox6gWqozESoh",
  "key29": "4JEhy6PLMqBfJH4mNi8XdUkX8u5x8JrqWAsfLwtPUpsYxb9GcfX8DybdgWjF4CJj2FF9MPyg1UVcqdYdWau2o6Kv",
  "key30": "4yRDLZZv3FHnwDwPX5jdx3cuiX2MbEjzQrJzfyquwZTE3fpZN8tTWzxW357CqWMPtecZre9CtwwjqhA438s491ko",
  "key31": "4u9pcMeoYFAWsjaKHFGTC72cZsHRCJXvzCAkTRkM52ibG7RqBWeohMaW2ZMBHStW8PrBdmiVKUc9dR54RaBUDV4P",
  "key32": "49WLFZpEieoXu6S8RY2XufPHT5KJXSYgdoR2Fx1nerUUz1Ljq1uaboDPPL6tBbrgui1jvbmQhpotrxWNp8gFRJrq",
  "key33": "5HziW2J4VxQutycWXBpE28MWSaKdrA3CJCvNM4mZGg7LbeRMES5Z1PPVz2D6tVw1FGZfesW6DzHBcgZYTKKZ5idS",
  "key34": "3xhNaKSa5uHPHpw1CWFJwgVZQEPaKMEbcLUi2KRrYtuLTBEmZ4LsdsLCBXXJr84RWxDtzS6KmjhJhvK3ZL8oUhPW",
  "key35": "3vqTbmAtXTyMFywktV7itJe1h2FfpdtDtydPGh6oCTg3rPvFNu1jxVuxRc6cJ5UP1kG2tMJq5u5kRCVqEoDB45MG",
  "key36": "4gdy5GrXdV4MR3TvZgXb7eobLThPpXDqHBdcpC7njQgHw2LVnwcvSpU3v9GPjpgJFsYd7vMJjdf1rcwtu37WG1pu",
  "key37": "3f2Z9JSfYdoY1FGX6gQtMRwytpGVSXnQgNvQbdbVPEQShVMhqN3yvUEvCGJKnwoJk8EhmJwSooZ2ST3CpA6ogGLh",
  "key38": "4xkHKMgAFFtJbkXHbHFd2F5xq2svxGaELNoDaaqesqrSg9kHGxSGvj3BGsCuQJXDmqqHebzrGshw5GZgwQrkLJyJ",
  "key39": "3m5os6BdNaBQThmaB27FmChanxhViCbwpfbLE1VVZuvJeU4fMJkxPf53d3EnJKH4NHUiHeiG1PZCu2x93u3kQPYF",
  "key40": "UJL8HzU1CX6bHMLwtVVBJBa92gUyGb6UppKTcujMVjAudmkAWG5x6QbP1XBkSjg1ruo3V6E1UCsgZHfBffmXp1B",
  "key41": "9zAMxDa4Kq4yvxBBC4QCiNc3LDWGbdjfkhagxLueUEp1BMZ5ABV1BKQC5FJhSwAiutXAAaDtQJrKgzkiNDeEQ7M",
  "key42": "3aQbVF2Gx1FTETMN5k3yQtd7P7WkqA9nLkBqgQbRHFV7SZv97mjFU3djtj97XhH4CosTRNWLiVYYgKTJ7h12FfeM",
  "key43": "4SLuQRjSq39SRDkXk16KCpVhecr3ZVVpgD6kPSKRt1CvNv7JQpuC7fpJdgSRCGJTyRER3Zd699FrQxTzBZRyrdA6",
  "key44": "5pvA6AXzpj8jhPNERxyXhjcM8jMHhLXVAS44osTZyrT2thjMTmz2UA66ooAwbeUZ5niZfu4btjXPdv5ZE53xmi5m",
  "key45": "5XJnaHAZVhxsBBF3jCgzDWzwNdQxieHCZ43CaJBQM3hhJG1jhTrw4pX7DySSBtLvKde9xXr1cmJTV6uauJHfV6bQ",
  "key46": "9TYSniGCAHJKofgp4MLCzsdWRTR6ybFQcLMK9C3Pc1YrFY6cmR8zLZBQ4qpBQWki9TJhGpHhnxS1XnevVsTVJhF"
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
