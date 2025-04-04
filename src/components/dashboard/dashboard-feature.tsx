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
    "jZ371KxV6wDxFVyKYTw51zJ1fDE3UdcHZF76X8b6m86fvF88pa9UnCFtwuSCaqDARkjk6wpxR2Jx8kZkbUb32dU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aeEZ3549UHaffArHXHNX4dVtSQQQfSkqoHQCiXdFWPwsA3dt4PkbX2LoUjSA1xYpE5rXmaAc8BAtbyKr8tygqgR",
  "key1": "3KcTNbodEEaMcTnZMU6WWerqwqm5rGYsWnd9rRUDftmvy8js4R23YNrhnvrv2SHZ5Vz7usiYom5bJT4uRGWc4N3E",
  "key2": "4fsY62o4xsHa8JiNCG98EjU4ccYVYt5bmNQUrvxdqpGV6Dqna1wJ3CDHYzRyJADCKYGV7Z1AmeBak2EiwXzczW2Q",
  "key3": "2svXpLPgsUZGCJgx4buP3MGULmzs2kY83E7CrdW1sP7oSba5cgZZGFYJ3JgFCTaqaUuLxH4zdoxZmWYuGfkb7Szz",
  "key4": "4WsWub4sv1MQ1drsxZtbVmNMtFHjUU6rbsVhkexnYX5Lcto6YvvqFKZH5W15CgvQSnsMjp7Zw9ybuZreGKNs5Rd7",
  "key5": "3oFPebA3Y99Geg7KUKvLyZBL8f95qLDXvrQKoiCZiPPnNArZWYaE4BG4CtMp94EfjC11HtELJZBk5MSpunMyUUME",
  "key6": "221WmhroMN6V6EGLPycwgGEthnxwSqGWCGeC4cFNmjsUAR4MYzTN83jWXbBJTgyKCUQbXfPRfWdy9V5cwVwi48pZ",
  "key7": "2h8p5JdZFJDJUGJGkkJLcVJ521NhoH16vZPZwBczxpkU9Y2VhBoQkLyHcKutQhihLJMU99iNCZX7Q84Qp2LHgWmy",
  "key8": "569obtirurEwckWf6ZMWcSdvFEg5YjvL8cfzSEjGuxTRkNiDSKsjSESnufgmQND7T9LSTJdce7zD7TwrS248RHdL",
  "key9": "ZKzVUCqzEDmLrjNAXs767b3SdRGXuFE6SBJ9mAJdEZizsvJtcQASzqzMnB1RUT4zNsbAtSQSMmukHy613MZqs34",
  "key10": "v872DJ9FG4UJKKpVVDn1T8u9GAFtQJWERFD7hsZWzYTvqWvhr6rdVgodVsrBFY7cLM5kRUVieXmSrP8HpChb7pY",
  "key11": "3vPjtSpAbojN5Z3nMwpDDFNEGia18vnUFuhHS6EB9dur2fLEoPfnMKpfsNvuGdL934Aguk2nH1v4BKytsxv6fB7b",
  "key12": "3kz7eaHJmze7CaUAe7hsAfX9KzWpXn4ESKNNj1DXtw5AcToJg8eFxL8SRpAqqhFzWp9xknE9Kg3Y8LP7nV9Kb9zz",
  "key13": "5ahuVdYmQzt3QsNFWzi2k6jpbiDu36hT59JdhZhzUv9kaGWRxDTtTJHrngJ5Zq1AEv764LpRFMEyonSg2fjFuAKQ",
  "key14": "3KSPirrWyU888jZCTbHLL2Xzq2yN94YiDmwNiBYScKV4BEitnw9rwqA5NFzQTNT5iGeyVN8s5hsMLVr1JGjhuqj6",
  "key15": "2f2JyJJge3zEp8QYDCnqMz6baoHPJdzZQL8xkWDrRosbpWCVZcQBDqetcj4WmZr6KSx64pdJyMjrm8kETG5XV6oP",
  "key16": "Hx9Km4vjNYztZYEYuG9LpmGvYicVn97sXB4TxvTS4U33FkkbxnDUSH8HWnqNPoJJuoercMnmKCaWmgJqgJgXcvz",
  "key17": "3Kim1m9vZTGw4EwMHGNJaMAKFnqSdMnfPwsSpt21iXx2xUj4KWnq7itHXf9kkHrnzsUyztkvwKXmZtzgxKDhQ6rg",
  "key18": "33D1f3YuuJt8dwq88oc3cTLoWXYLbG5egUmArmP9m61HzF9gifZ2xhceSarWzXPEbMo1sgyDLKn1FqgB2YXEdAHs",
  "key19": "4AJ8xVdLB2i9k3omSdAidrzhBpKRSkienM2ynzRb2fu9CBHKjdbCjp8rLVKXvXy7v6dbiDQ3okP14Fe2rs9ZybnR",
  "key20": "2osyzQ1SsF1KEZyumYF2Jc7Eg97E9MWPwwhxsah1q1YtUVhW893DfTKoLticf183FfsknnQhDC6Y1ho7ayvGKX5",
  "key21": "5A1iVb9g6x7BRtMKdPVjAo53mXBgAgceJeNfH3LAREKSyyVB1tnxwTtxoXLxCLuEdqow5HQwbwZ9KXQqztjcfjnD",
  "key22": "3G3DTNfkfW7uPjQEsBwAdgLLRRk6FBQ6zJoe7KtZMKKvupX7qA7JizDemAAbNXxC9sGan5otNcgz3VkDkg77J2hh",
  "key23": "21D85x5w2LhcNjajibJ6S39wnb4PYrtYiJPYB4xBeWLoVmMC8cMVvZ3gMEUCgVXXBkyJFUmTKGxUNfppC3p6cVUB",
  "key24": "uEZnUXkfv6TkEuP9LU4P524Xj2XUqxu8VbdxHppNyZowdQLG18URtiToMoWQX6g6JvGsNRsQBSb1uevEj6gkKNA",
  "key25": "4JGTShZ1f5PE5UjDzAtprr2Rod3r6z1WpfbkcZWaJjiTrECmFLYU91Bq4xJ974D6Gh12rrx9Y1k3o9bpHdvG1TN7",
  "key26": "TGbZY18ZXmrMP9DiuEcEubX35as1V72QuCGRac6qoAxYQotvLNE9vxjUc4Z21hZpnFPV1Bk1PdKUZx6fnS2xFf7",
  "key27": "2Mgna4Ho6evbZ4CtY6iu2rPZacDD4HzTNQnGJvGvfx4P7vtD1tGqvAcH3AAoUSdH3sMYuyMi5LpaNg5pncbmo64b",
  "key28": "KDe6eve2BGXh7SS45XVfCsQ1fhhj3Weu3cQoYMoMs7duNrvKYAB5pftZN3ucCG912ZSmRcJrehF4C6ijCHAmBBG",
  "key29": "2FAL5cGwhhdh9r96jgWpDGH2X75GHuQJ4rQnVjUEhoFV9LKAtF8tyEcBrvqrdPYza5oXbx7dyrvuGDwK8mWNkceC",
  "key30": "4QG4fNQTzuk1whovQHwAbFDyFfDXoisQVmzQpTL9aieUCkTXTSZgHWZUSFtRGfrmAe6mWszBuH8oDpUt2UV3Ue57",
  "key31": "3uxWxAF8YpabWktwVwQUVCH2rdQQmSctEEXsA21KodWBTwX1WvxatkzGWDtGVf6bSHNo9L3HU9WfAaFeeURSXQpo",
  "key32": "kcPPWAGco5fLL5ASZg35siAFeTLhr1hjhjjDTzAdPnP5r7jcvFgTEjyvgvHsRLGggwgeGztmE7vRsHxDMWSRgtk",
  "key33": "47nijP3Q9T9PWZqfgVgi5mheQHYrZA9vc4giQGwn3dtUNMjpM2dJx2SS1tBe5Wq4h4nWpke33LqvLcamE8v15rWD",
  "key34": "61afcA6T94u2JtFD7MZzgjHrm1durTD4NQFjnNgfVYQM3tb8bKUPCWXyoVfMLiPKgDQ4U3syuuBiHM15GC9nGQ3y",
  "key35": "23oPgSUwcLCwQNpCht4GjaUYqoj1pQBKBaikWFUdtackPZLHkgTZLCpKw4WB9M6SEm2VWkpDozTo3bVokVrbgrhd",
  "key36": "SrFGMnGe4jDvxK9ja2rTiw2xW9wKLTsa5ySKLeArwUkms9ZVSgoYyePQN823tt5tL1WJnDd4gjHtPfCiFxV2zvA",
  "key37": "4TvXFYfZsb32SHAxo3HEvfrJ2eCr3zyVcU4mCLvixxJ9vAioN9QjZmgbd3CyL19S852rbXDJKKN3EMRXVoszRfAh",
  "key38": "31ESaT7CR7XeJA9Vf4UqAP8E22VRCtqjUzDwxTzK52AYXANhvxsaVBzvjWo2BHatmdbAMmMMV7TjqkVvrMpmu8mP",
  "key39": "4m5unPvV7MEqHcwFZhGgMXxxLPqAoAj5gsen2mAeHLtjB6Z98V6pdVN9GQ2w7Pdos8By3tqPV4joybrVHhVTWtNh",
  "key40": "isGQ13XaZDZUBa6sYBa7dZLa3EWwXscnJBVw3YKmvmBbhiQpNH8BF3EiN6JZNG3jZpVR6XiaWPxBN6d2WoRqFJQ",
  "key41": "3oK2oGsTDpHa6ad4ESTFuXMN3Vf7PyZD35FLuzBUeAtuLmCJXhMephJN3fvLEra5ZH3QCpw8EYo7LvnVzua7DnJ6",
  "key42": "2y5rcWCtNEnMLrZTbwPNeqr1etv5y5ABi3GgHsRVQ8vFgUn9gWQoj4zyNjy2GkzsgdeSi6iBR3P46CgbWwvRKb8m",
  "key43": "2cZEjPouLeucgCVJURxRsTBirpYKZhpAeGUArdU1kY5aj932hiB4633EVrXg2j1E57NZsEsN6N3pNBRJihx5t2Wh",
  "key44": "4DjVAniUJYQVk6qhyjJe7aVZYxNE5YATaQ7676KAqqNdXg31WnoJ9QLcoMb8zWEdEDbcgx2GcqqJ5pN3kUFJFvbs",
  "key45": "3Ui4ZzxuJx4dQGjwRcv3grMWGmZfx3uFArEuyyqL5mkLD7naWjfevfkBjxxJjeQFecvBnogk896rb8Bq6fQKWhoh",
  "key46": "4nNT4ySTDRoT764qxaecf8NTuBkaXdSZ7r6Cb6djKVJGDDw3hzA8DYWLCRDUDhNHiM8VhbKM4PiPHweb3kUBnsQ5",
  "key47": "3J22Y4RjxVoiXYjsr8SegDfxoZeNVCh99e6nZk6jipXn8TSHkR9RJv6KpYyxKt6o7wneiwXpeHLqt2z5qJ6rmgZP",
  "key48": "2a6nAn1XLfrLCX7TCxcfY357swX5wqiFQj2m8uKjthziEFBu6gbRxeawLF5tq16NcHHuMqznaFBFuMBTbLg1x9YS"
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
